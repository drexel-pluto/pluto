import React, { Component } from "react";
import { StatusBar, Dimensions, Animated, Text } from "react-native";
import { GameLoop } from "react-native-game-engine";
import { Physics, MoveBox, CleanBoxes, SwipeScreen } from "./systems";
import { Box } from "./renderers";
import Matter from "matter-js";
import SvgSwipe from "../SvgSwipe";
import Color from 'color';

Matter.Common.isElement = () => false; //-- Overriding this function because the original references HTMLElement

export default class RigidBodies extends Component {
  constructor() {
    super();
    this.swipes = [];

    this.state = {
      entities: []
    }
  }

  componentDidMount() {
    const { width, height } = Dimensions.get("window");

    const engine = Matter.Engine.create({ enableSleeping: false });
    const world = engine.world;
    world.gravity.y = 0;

    const constraint = Matter.Constraint.create({
      label: "Drag Constraint",
      pointA: { x: 0, y: 0 },
      pointB: { x: 0, y: 0 },
      length: 0.01,
      stiffness: 0.1,
      angularStiffness: 0.1
    });

    Matter.World.addConstraint(world, constraint);


    //add walls
    // let wallT = Matter.Bodies.rectangle(width / 2, -20, width, 40, { isStatic: true });
    // let wallB = Matter.Bodies.rectangle(width / 2, height + 20, width, 40, { isStatic: true });
    // let wallL = Matter.Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true });
    // let wallR = Matter.Bodies.rectangle(width + 20, height / 2, 40, height, { isStatic: true });
    // let wallNotch = Matter.Bodies.rectangle(width / 2, 0, 190, 70, { isStatic: true });
    // Matter.World.add(world, [wallT, wallB, wallL, wallR, wallNotch]);

    this.setState({
      physics: { 
        engine: engine, 
        world: world, 
        constraint: constraint 
      },
      swipeTouch: {
        active: false,
        x: 0
      },
      swipeIndex: 0
    })

    entities = [];

    let dots = {};

    for (let i = 0; i < 50; i++) {
      let radius = Matter.Common.random(30, 70);
      let group = Math.round(Matter.Common.random(1, 3));
      let item = Matter.Bodies.circle(
        Matter.Common.random(radius / 2, width - radius / 2),
        Matter.Common.random(radius / 2, height - radius / 2),
        radius / 2,
      );
      dots[item.id] = { group: group, radius: radius };
      Matter.World.add(world, [item]);

      entities[i] = {
        body: item,
        size: radius,
        color: pickHex("#664391", "#15DAD6"),
        id: i,
        group: Math.round(Matter.Common.random(0, 2))
      };

      this.setState({ entities: entities });

    }

  }

  render() {
    return (
      <GameLoop onUpdate={this.updateHandler}>
        {this.state.entities.map( (item,i) => 
          <Box key={i} body={item.body} size={item.size} color={item.color} style={{zIndex: item.group}}/>
        )}
        <SvgSwipe ref={(input) => {this.swipes[0] = input }} style={{position: 'absolute', zIndex: 1}}/>
        <SvgSwipe ref={(input) => {this.swipes[1] = input }} style={{position: 'absolute', zIndex: 2}} color="yellow"/>
        <SvgSwipe ref={(input) => {this.swipes[2] = input }} style={{position: 'absolute', zIndex: 3}}/>
      </GameLoop>
    );
  }

  updateHandler = ({ touches, screen, layout, time }) => {
    //update physics
    Matter.Engine.update(this.state.physics.engine, time.delta);
    
    MoveBox(this.state, { touches, screen, layout, time });

    this.backgroundDrag(touches);
    
    // entity values are getting updated, but this line
    // is necessary to rerender to show updates
    this.setState({entities: this.state.entities}); 
  };

  backgroundDrag = (touches) => {
    const { width, height } = Dimensions.get("window");

    let start = touches.find(x => x.type === "start");

    if (start && start.backgroundTarget) {
      this.setState({
        swipeTouch: {
          active: true,
          x: start.event.pageX
        }
      })
	  }
    
    let move = touches.find(x => x.type === "move");

    let left = this.swipes[this.state.swipeIndex];
    let right = this.swipes[this.state.swipeIndex + 1];


	  if (move && this.state.swipeTouch.active) {
      left && left.setTargetPos({ 
        x: move.event.pageX - this.state.swipeTouch.x - 12, 
        y: move.event.pageY
      });
      right && right.setTargetPos({ 
        x: move.event.pageX - this.state.swipeTouch.x + width + 12, 
        y: move.event.pageY
      });
    }
    
    let end = touches.find(x => x.type === "end");

	  if (end && this.state.swipeTouch.active) {
      let dist = end.event.pageX - this.state.swipeTouch.x;
      let threshold = width / 2

      if (Math.abs(dist) < threshold) {
        left && left.animateToEdge(true);
        right && right.animateToEdge(false);
      } else if (dist > 0) {
        left && left.animateToEdge(false);
        right && right.animateToEdge(false);
        if (this.state.swipeIndex >= 0)
          this.setState({swipeIndex: this.state.swipeIndex - 1});
      } else {
        left && left.animateToEdge(true);
        right && right.animateToEdge(true);
        if (this.state.swipeIndex < this.swipes.length - 2);
        this.setState({swipeIndex: this.state.swipeIndex + 1});
      }

      this.setState({
        swipeTouch: {
          active: false,
          x: 0,
        }
      })
	  }
  }
}

function pickHex(color1, color2) {
  var c = Color(color1);
  var ran = Math.random();
  c2 = c.mix(Color(color2), ran);
  return c2.hex();
}

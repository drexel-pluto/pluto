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
    let wallT = Matter.Bodies.rectangle(width / 2, -20, width, 40, { isStatic: true });
    let wallB = Matter.Bodies.rectangle(width / 2, height + 20, width, 40, { isStatic: true });
    let wallL = Matter.Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true });
    let wallR = Matter.Bodies.rectangle(width + 20, height / 2, 40, height, { isStatic: true });
    let wallNotch = Matter.Bodies.rectangle(width / 2, 0, 190, 70, { isStatic: true });
    Matter.World.add(world, [wallT, wallB, wallL, wallR, wallNotch]);

    this.setState({
      physics: { 
        engine: engine, 
        world: world, 
        constraint: constraint 
      }
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
    let move = touches.find(x => x.type === "move");

	  if (move) {
      this.swipes[0].setTargetPos({ 
        x: move.event.pageX, 
        y: move.event.pageY 
      });
	  }
  }
}

function pickHex(color1, color2) {
  var c = Color(color1);
  var ran = Math.random();
  c2 = c.mix(Color(color2), ran);
  return c2.hex();
}

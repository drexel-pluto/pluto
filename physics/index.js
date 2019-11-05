import React, { Component } from "react";
import { StatusBar, Dimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Physics, CreateBox, MoveBox, CleanBoxes } from "./systems";
import { Box } from "./renderers";
import Matter from "matter-js";
import matterAttractors from "matter-attractors";
import Color from 'color';

Matter.Common.isElement = () => false; //-- Overriding this function because the original references HTMLElement

export default class RigidBodies extends Component {
    constructor() {
      super();
    }

    componentDidMount() {
      Matter.use(matterAttractors);
    }
  
    render() {
      const { width, height } = Dimensions.get("window");
      const boxSize = Math.trunc(Math.max(width, height) * 0.075);
  
      const engine = Matter.Engine.create({ enableSleeping: false });
      const world = engine.world;
      world.gravity.y = 0;
      //const body = Matter.Bodies.rectangle(width / 2, -1000, boxSize, boxSize, { frictionAir: 0.021 });
      //const floor = Matter.Bodies.rectangle(width / 2, height - boxSize / 2, width, boxSize, { isStatic: true });
      const constraint = Matter.Constraint.create({
        label: "Drag Constraint",
        pointA: { x: 0, y: 0 },
        pointB: { x: 0, y: 0 },
        length: 0.01,
        stiffness: 0.8,
        angularStiffness: 0.1
      });
  
      //Matter.World.add(world, [body, floor]);
      Matter.World.addConstraint(world, constraint);

      let body = Matter.Bodies.circle(
        width /2,
        height / 2,
        0,
        { frictionAir: 0.021,
          isStatic: true,
          plugin: {
            attractors: [
              function(bodyA, bodyB) {
                return {
                  x: (bodyA.position.x - bodyB.position.x) * 2e-6,
                  y: (bodyA.position.y - bodyB.position.y) * 2e-6,
                };
              }
            ]
          }
        },
        
      );
      Matter.World.add(world, [body]);
  
      ent = {
        physics: { engine: engine, world: world, constraint: constraint }
      }

      for (let i = 0; i<50; i++) {
        let boxSize = Matter.Common.random(30,70);;
        let item = Matter.Bodies.circle(
          width /2,
          height / 2,
          boxSize / 2,
          { frictionAir: 0.1},
          
        );
        Matter.World.add(world, [item]);

        ent[i] = {
          body: item,
          size: [boxSize, boxSize],
          color: pickHex("#664391", "#15DAD6"),
          renderer: Box,
          id: i
        };
        
      }

      return (
        <GameEngine
          systems={[Physics, MoveBox, CleanBoxes]}
          entities={ent}
          style={
            {
              backgroundColor: "#FAA",
            }}
        >
  
          <StatusBar hidden={false} />
  
        </GameEngine>
      );
    }
}

function pickHex(color1, color2) {
  var c = Color(color1);
  var ran = Math.random();
  c2 = c.mix(Color(color2), ran);
  return c2.hex();
}

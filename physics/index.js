import React, { Component } from "react";
import { StatusBar, Dimensions, Animated } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Physics, CreateBox, MoveBox, CleanBoxes, HighlightBox } from "./systems";
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
        stiffness: 0.1,
        angularStiffness: 0.1
      });
  
      Matter.World.addConstraint(world, constraint);

      // add attractor
      let attractor = Matter.Bodies.circle(
        width /2,
        height / 2,
        0,
        { frictionAir: 0.021,
          isStatic: true,
          // plugin: {
          //   attractors: [
          //     function(bodyA, bodyB) {
          //       return {
          //         x: (bodyA.position.x - bodyB.position.x) * 1e-6,
          //         y: (bodyA.position.y - bodyB.position.y) * 1e-6,
          //       };
          //     }
          //   ]
          // }
        },
      );
      Matter.World.add(world, attractor);
      
      //add walls
      let wallT = Matter.Bodies.rectangle(width / 2, -20, width, 40, {isStatic: true});
      let wallB = Matter.Bodies.rectangle(width / 2, height + 20, width, 40, {isStatic: true});
      let wallL = Matter.Bodies.rectangle(-20, height / 2, 40, height, {isStatic: true});
      let wallR = Matter.Bodies.rectangle(width + 20, height / 2, 40, height, {isStatic: true});
      let wallNotch = Matter.Bodies.rectangle(width / 2, 0, 190, 70, {isStatic: true});
      Matter.World.add(world, [wallT, wallB, wallL, wallR, wallNotch]);
  
      ent = {
        physics: { engine: engine, world: world, constraint: constraint }
      }

      let dots = {};
      let groupPosY = {
        1: {min: 30, max: height/3 - 30},
        2: {min: height/3 + 30, max: 2 * height / 3 - 30},
        3: {min: 2 * height / 3 + 30, max: height - 30}
      }

      for (let i = 0; i<50; i++) {
        let radius = Matter.Common.random(30,70);
        let group = Math.round(Matter.Common.random(1,3));
        let item = Matter.Bodies.circle(
          Matter.Common.random(radius / 2,width - radius / 2),
          Matter.Common.random(groupPosY[group].min,groupPosY[group].max),
          radius / 2,
          { frictionAir: 0.1,
            plugin: {
              attractors: [
                function(bodyA, bodyB) {
                  
                  var force;

                  if (dots[bodyA.id].group != dots[bodyB.id].group) {
                    let distX = bodyA.position.x - bodyB.position.x;
                    let distY = bodyA.position.y - bodyB.position.y;
                    let dist = 40 + dots[bodyA.id].radius + dots[bodyB.id].radius;
                    if (Math.sqrt(distX*distX + distY*distY) > dist) {
                      return;
                    }
                    force = {
                      x: (bodyA.position.x - bodyB.position.x) * -1e-6,
                      y: (bodyA.position.y - bodyB.position.y) * -1e-6,
                    };

                    // apply force to both bodies
                    Matter.Body.applyForce(bodyB, bodyB.position, force);
                    
                  } else {
                    force = {
                      x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                      y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                    };

                    // apply force to both bodies
                    Matter.Body.applyForce(bodyA, bodyA.position, Matter.Vector.neg(force));
                    Matter.Body.applyForce(bodyB, bodyB.position, force);
                  }
                }
              ]
            }
          }
        );
        dots[item.id] = {group: group, radius: radius};
        Matter.World.add(world, [item]);
        
        ent[i] = {
          body: item,
          size: radius,
          color: pickHex("#664391", "#15DAD6"),
          renderer: Box,
          id: i,
          selected: false,
          group: group
        };
        
      }

      return (
        <GameEngine
          systems={[Physics, MoveBox, CleanBoxes, HighlightBox]}
          entities={ent}
        >
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

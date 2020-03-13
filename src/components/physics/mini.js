import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { GameLoop } from 'react-native-game-engine'
import { MoveBox } from './systems'
import { UserCircle } from './renderers'
import Matter from 'matter-js'
import SvgSwipe from './SvgSwipe'
import MatterAttractors from 'matter-attractors'
import Color from 'color'
import { Colors } from '../../styles/index'

Matter.Common.isElement = () => false //-- Overriding this function because the original references HTMLElement

const min = 0

export default class RigidBodies extends Component {
  constructor() {
    super()
    this.swipes = {}

    this.state = {
      entities: {},
      colors: {
        bg: Colors.PLUTO_WHITE
      },
    }
  }

  componentDidMount() {
    Matter.use(MatterAttractors)
    const { width, height } = Dimensions.get('window')

    const engine = Matter.Engine.create({ enableSleeping: false })
    const world = engine.world
    world.gravity.y = 0

    const constraint = Matter.Constraint.create({
      label: 'Drag Constraint',
      pointA: { x: 0, y: 0 },
      pointB: { x: 0, y: 0 },
      length: 0.01,
      stiffness: 0.1,
      angularStiffness: 0.1,
    })

    Matter.World.addConstraint(world, constraint)

    let attractor = Matter.Bodies.circle(width / 2, height / 2.5, 0, {
      frictionAir: 0,
      isStatic: true,
      plugin: {
        attractors: [
          function(bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 6e-6,
              y: (bodyA.position.y - bodyB.position.y) * 9e-6,
            }
          },
        ],
      },
    })
    Matter.World.add(world, attractor)

    this.setState({
      physics: {
        engine: engine,
        world: world,
        constraint: constraint,
      },
      entities: {}
    })
  }

  render() {
    return (
      <GameLoop
        onUpdate={this.updateHandler}
        style={{ ...this.props.style}}
      >
        {Object.keys(this.state.entities).map((key, i) => {
          let item = this.state.entities[key];
          return (
            <UserCircle
              key={key}
              body={item.body}
              size={item.size}
              color={item.color}
              isVisible={true}
              friendData={item.friendData}
            />
          )
        })}
      </GameLoop>
    )
  }

  updateHandler = ({ touches, screen, layout, time }) => {
    //update physics
    time.delta = time.delta > 200 ? 0 : time.delta

    Matter.Engine.update(this.state.physics.engine, time.delta)

    MoveBox(
      this.state,
      { touches, screen, layout, time }
    )


    // entity values are getting updated, but this line
    // is necessary to rerender to show updates
    // console.log(this.state.entities[0].body.position, this.state.entities[0].body.positionPrev);
    this.setState({ entities: this.state.entities })
  }


  addFriend = (friend) => {
    const { width, height } = Dimensions.get('window');
    let radius = Matter.Common.random(30, 70)
    let groups = friend.groups
    let item = Matter.Bodies.circle(
      Matter.Common.random(radius / 2, width - radius / 2),
      Matter.Common.random(radius / 2, height - radius / 2),
      radius / 2,
      { continuous: 1 }
    )

    Matter.World.add(this.state.physics.world, [item])
    
    let ents = {...this.state.entities};
    ents[friend._id] = {
      body: item,
      size: radius,
      color: pickHex('#664391', '#15DAD6'),
      id: friend._id,
      groups: groups,
      isVisible: true,
      zIndex: 0,
      friendData: friend,
    }
    this.setState({entities: ents});
  }

  removeFriend = (id) => {
    Matter.World.remove(this.state.physics.world, [this.state.entities[id].body])
    let ents = {...this.state.entities};
    delete ents[id];
    this.setState({entities: ents});
  }
}

function pickHex(color1, color2) {
  var c = Color(color1)
  var ran = Math.random()
  c2 = c.mix(Color(color2), ran)
  return c2.hex()
}

import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { GameLoop } from 'react-native-game-engine'
import { MoveBox } from './systems'
import { Box } from './renderers'
import Matter from 'matter-js'
import SvgSwipe from './SvgSwipe'
import MatterAttractors from 'matter-attractors'
import Color from 'color'

Matter.Common.isElement = () => false //-- Overriding this function because the original references HTMLElement

export default class RigidBodies extends Component {
  constructor() {
    super()
    this.swipes = {}

    this.state = {
      entities: [],
      colors: {
        bg: 'white',
        swipes: 'salmon',
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

    let attractor = Matter.Bodies.circle(width / 2, height / 2, 0, {
      frictionAir: 0,
      isStatic: true,
      plugin: {
        attractors: [
          function(bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 6e-7,
              y: (bodyA.position.y - bodyB.position.y) * 6e-7,
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
      swipeTouch: {
        active: false,
        x: 0,
      },
      swipeIndex: 0,
      numGroups: 3,
    })

    entities = []

    let dots = {}

    for (let i = 0; i < 50; i++) {
      let radius = Matter.Common.random(30, 70)
      let groups = [
        Math.round(Matter.Common.random(1, 3)),
        Math.round(Matter.Common.random(1, 3)),
        0,
      ]
      let item = Matter.Bodies.circle(
        Matter.Common.random(radius / 2, width - radius / 2),
        Matter.Common.random(radius / 2, height - radius / 2),
        radius / 2
      )
      dots[item.id] = { groups: groups, radius: radius }
      Matter.World.add(world, [item])

      entities[i] = {
        body: item,
        size: radius,
        color: pickHex('#664391', '#15DAD6'),
        id: i,
        groups: groups,
        isVisible: true,
        zIndex: 0,
      }
    }
    this.setState({ entities: entities })
  }

  render() {
    return (
      <GameLoop
        onUpdate={this.updateHandler}
        style={{ ...this.props.style, backgroundColor: this.state.colors.bg }}
      >
        {this.state.entities.map((item, i) => (
          <Box
            key={i}
            body={item.body}
            size={item.size}
            color={item.color}
            style={{ zIndex: item.zIndex }}
            isVisible={item.isVisible}
          />
        ))}
        <SvgSwipe
          ref={input => {
            this.swipes.left = input
          }}
          style={{ position: 'absolute', zIndex: 1 }}
          isLeft={true}
          color={this.state.colors.swipes}
        />
        <SvgSwipe
          ref={input => {
            this.swipes.right = input
          }}
          style={{ position: 'absolute', zIndex: 3 }}
          isLeft={false}
          color={this.state.colors.swipes}
        />
      </GameLoop>
    )
  }

  updateHandler = ({ touches, screen, layout, time }) => {
    //update physics
    Matter.Engine.update(this.state.physics.engine, time.delta)

    MoveBox(this.state, { touches, screen, layout, time })

    this.backgroundDrag(touches)

    // entity values are getting updated, but this line
    // is necessary to rerender to show updates
    this.setState({ entities: this.state.entities })
  }

  backgroundDrag = touches => {
    const { width, height } = Dimensions.get('window')

    let start = touches.find(x => x.type === 'start')

    if (start && start.backgroundTarget) {
      this.setState({
        swipeTouch: {
          active: true,
          x: start.event.pageX,
        },
      })
    }

    let move = touches.find(x => x.type === 'move')

    if (move && this.state.swipeTouch.active) {
      let leftActive = this.state.swipeIndex > 0
      let rightActive = this.state.swipeIndex < this.state.numGroups - 1

      if (leftActive) {
        this.swipes.left.setTargetPos({
          x: move.event.pageX - this.state.swipeTouch.x,
          y: move.event.pageY,
        })
      }
      if (rightActive) {
        this.swipes.right.setTargetPos({
          x: move.event.pageX - this.state.swipeTouch.x + width,
          y: move.event.pageY,
        })
      }

      if (move.event.pageX - this.state.swipeTouch.x > 0) {
        this.state.entities.forEach(element => {
          if (
            element.isVisible &&
            element.groups.includes(this.state.swipeIndex - 1)
          ) {
            element.zIndex = 2
          } else {
            element.zIndex = 0
          }
        })
      } else {
        this.state.entities.forEach(element => {
          if (
            element.isVisible &&
            element.groups.includes(this.state.swipeIndex + 1)
          ) {
            element.zIndex = 4
          } else {
            element.zIndex = 0
          }
        })
      }
    }

    let end = touches.find(x => x.type === 'end')

    if (end && this.state.swipeTouch.active) {
      let dist = end.event.pageX - this.state.swipeTouch.x
      let threshold = width / 2

      if (Math.abs(dist) < threshold) {
        this.swipes.left.animateToEdge(true)
        this.swipes.right.animateToEdge(false)
      } else if (dist > 0) {
        if (this.state.swipeIndex > 0) {
          this.swipes.left.animateToEdge(false, () =>
            this.doneAnim(this.state.swipeIndex - 1)
          )
          this.swipes.right.animateToEdge(false)
        } else {
          this.swipes.left.animateToEdge(true)
          this.swipes.right.animateToEdge(false)
        }
      } else {
        if (this.state.swipeIndex < this.state.numGroups - 1) {
          this.swipes.left.animateToEdge(true)
          this.swipes.right.animateToEdge(true, () =>
            this.doneAnim(this.state.swipeIndex + 1)
          )
        } else {
          this.swipes.left.animateToEdge(true)
          this.swipes.right.animateToEdge(false)
        }
      }

      this.setState({
        swipeTouch: {
          active: false,
          x: 0,
        },
      })
    }
  }

  doneAnim(swipeIndex) {
    this.swipes.left.reset()
    this.swipes.right.reset()
    this.setState({
      colors: {
        bg: this.state.colors.swipes,
        swipes: this.state.colors.bg,
      },
    })
    this.setSwipeIndex(swipeIndex)
  }

  setSwipeIndex(index) {
    let world = this.state.physics.world
    const { width, height } = Dimensions.get('window')
    const xPos = index > this.state.swipeIndex ? width + 200 : -200

    this.state.entities.forEach(element => {
      element.zIndex = 4
      if (!element.isVisible && element.groups.includes(index)) {
        Matter.World.add(world, [element.body])
        Matter.Body.setPosition(element.body, { x: xPos, y: height / 2 })
        element.isVisible = true
      } else if (element.isVisible && !element.groups.includes(index)) {
        Matter.World.remove(world, [element.body])
        element.isVisible = false
      }
    })

    this.setState({ swipeIndex: index, entities: this.state.entities })
  }
}

function pickHex(color1, color2) {
  var c = Color(color1)
  var ran = Math.random()
  c2 = c.mix(Color(color2), ran)
  return c2.hex()
}

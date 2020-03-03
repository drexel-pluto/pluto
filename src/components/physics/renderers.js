import React, { Component } from 'react'
import { View, Text } from 'react-native'

class UserCircle extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var radius = this.props.size
    var x = this.props.body.position.x - radius / 2
    var y = this.props.body.position.y - radius / 2
    // const group = this.props.group;
    var color = this.props.color

    return (
      <View
        style={[
          {
            position: 'absolute',
            left: x,
            top: y,
            width: radius,
            height: radius,
            backgroundColor: color,
            borderRadius: radius,
            opacity: this.props.isVisible ? 1 : 0,
          },
          this.props.style,
        ]}
      >
        <Text>{this.props.friendData.name}</Text>
      </View>
    )
  }
}

export { UserCircle }

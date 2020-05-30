import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'

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
            opacity: this.props.isVisible ? 1 : 0,
            // overflow: 'hidden',
          },
          this.props.style,
          Styles.shadow(Colors.VIOLET.dark)
        ]}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: radius,
            backgroundColor: color,
          }}
          source={
            this.props.friendData.profilePicURL
              ? { uri: this.props.friendData.profilePicURL }
              : { uri: 'https://picsum.photos/id/237/300/300' }
          }
        />
        {/* <Text>{this.props.friendData.name}</Text> */}
      </View>
    )
  }
}

export { UserCircle }

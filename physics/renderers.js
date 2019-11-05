import React, { Component } from "react";
import { View, Text } from "react-native";

class Box extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const width = this.props.size[0];
    const height = this.props.size[1];
    const x = this.props.body.position.x - width / 2;
    const y = this.props.body.position.y - height / 2;
    const angle = this.props.body.angle;
    const id = this.props.id;
    const color = this.props.color;
    
    return (
      <View
        style={
          {
            position: "absolute",
            left: x,
            top: y,
            width: width,
            height: height,
            backgroundColor: color,
            borderRadius: width
          }
        }
      >
      </View>
    );
  }
}


export {
  Box
};
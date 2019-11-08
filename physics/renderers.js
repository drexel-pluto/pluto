import React, { Component } from "react";
import { View, Text } from "react-native";

class Box extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var radius = this.props.size;
    var x = this.props.body.position.x - radius / 2;
    var y = this.props.body.position.y - radius / 2;
    const group = this.props.group;
    var color = this.props.color;
    const selected = this.props.selected;

    if (selected) {
      radius = radius * 1.5;
      x -= radius * 0.15;
      y -= radius * 0.15;
      color = "#FF4466";
    }

    return (
      <View
        style={
          {
            position: "absolute",
            left: x,
            top: y,
            width: radius,
            height: radius,
            backgroundColor: color,
            borderRadius: radius,
            shadowColor: color,
            shadowOpacity: 0.5,
            shadowRadius: 10,
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
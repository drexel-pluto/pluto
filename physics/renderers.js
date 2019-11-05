import React, { Component } from "react";
import { View } from "react-native";

class Box extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var radius = this.props.size;
    const x = this.props.body.position.x - radius / 2;
    const y = this.props.body.position.y - radius / 2;
    const angle = this.props.body.angle;
    const id = this.props.id;
    var color = this.props.color;
    const selected = this.props.selected;

    if (selected) {
      radius = radius * 1.5;
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
            borderRadius: radius
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
import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { StatusBar, Dimensions, Animated, PanResponder, View, Easing } from "react-native";
import { throwStatement } from "@babel/types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class SvgSwipe extends Component {
  constructor(props) {
    super(props);

    let width = Dimensions.get("window").width + 12;

    this.state = {
      left: width,
      top: 0,
      pressed: false,
      followX: width
    }

    // setup animated variables
    this.animatedTouchX = new Animated.Value(width);
    this.animatedFollowX = new Animated.Value(width);

    // link animated variables to state variables
    this.animatedTouchX.addListener((x) => {
      this.setState({ left: x.value });
    });
    this.animatedFollowX.addListener((x) => {
      this.setState({ followX: x.value });
    });
  }

  setTargetPos(pos) {
    this.setState({
      top: pos.y
    })

    Animated.timing(this.animatedTouchX, {
      toValue: pos.x,
      easing: Easing.in,
      duration: 40,
    }).start();

    Animated.timing(this.animatedFollowX, {
      toValue: pos.x,
      easing: Easing.in,
      duration: 160,
    }).start();

  }

  animateToEdge(toLeft) {
    edgeX = toLeft ? -12 : Dimensions.get("window").width + 12;

    this.animatedTouchX.setValue(this.state.left)
    Animated.spring(this.animatedTouchX, {
      toValue: edgeX,
      friction: 6
    }).start();
    Animated.spring(this.animatedFollowX, {
      toValue: edgeX,
      friction: 9
    }).start();
  }

  render() {
    const { width, height } = Dimensions.get("window");
    const edgeControlDist = 160;
    const pointControlDist = 190;

    var targetPoint = {
      x: this.state.left,
      y: this.state.top
    }

    // move to top edge of screen,
    // draw curve to touch point,
    // draw curve to bottom edge,
    // draw line to bottom right corner
    // draw line to top right corner
    var path = `
            M${this.state.followX} -100
            C${this.state.followX} ${targetPoint.y - edgeControlDist}
              ${targetPoint.x} ${targetPoint.y - pointControlDist}
              ${targetPoint.x} ${targetPoint.y}
            C${targetPoint.x} ${targetPoint.y + pointControlDist}
              ${this.state.followX} ${targetPoint.y + edgeControlDist}
              ${this.state.followX} ${height + 100}
            L${width + 12} ${height}
            L${width + 12} 0
          `
            

    return (
      <Svg height={height} width={width} style={this.props.style}>
        <AnimatedPath
          d={path}
          fill={this.props.color || "red"}
          stroke="red"
          strokeWidth="4"
        />
      </Svg>
    )
  }
}
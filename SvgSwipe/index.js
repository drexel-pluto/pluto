import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { StatusBar, Dimensions, Animated, PanResponder, View, Easing } from "react-native";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class SvgSwipe extends Component {
  constructor(props) {
    super(props);

    let width = Dimensions.get("window").width + 5;

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
    edgeX = toLeft ? -5 : Dimensions.get("window").width + 5;

    this.animatedTouchX.setValue(this.state.left)
    Animated.spring(this.animatedTouchX, {
      toValue: edgeX,
      friction: 5
    }).start();
    Animated.spring(this.animatedFollowX, {
      toValue: edgeX,
      friction: 8
    }).start();
  }

  render() {
    const { width, height } = Dimensions.get("window");
    const edgeControlDist = 100;
    const pointControlDist = 140;

    var targetPoint = {
      x: this.state.left,
      y: this.state.top
    }

    // move to top edge of screen,
    // draw curve to touch point,
    // draw curve to end point
    var path = `
            M${this.state.followX} -100
            C${this.state.followX} ${targetPoint.y - edgeControlDist}
              ${targetPoint.x} ${targetPoint.y - pointControlDist}
              ${targetPoint.x} ${targetPoint.y}
            C${targetPoint.x} ${targetPoint.y + pointControlDist}
              ${this.state.followX} ${targetPoint.y + edgeControlDist}
              ${this.state.followX} ${height + 100}
            L${width + 5} ${height}
            L${width + 5} 0
            `
            

    return (
      <Svg height={height} width={width}>
        <AnimatedPath
          d={path}
          fill="red"
          stroke="red"
          strokeWidth="4"
        />
      </Svg>
    )
  }
}
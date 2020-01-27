import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { StatusBar, Dimensions, Animated, PanResponder, View, Easing } from "react-native";
import { throwStatement } from "@babel/types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class SvgSwipe extends Component {
  constructor(props) {
    super(props);

    let width = Dimensions.get("window").width;
    let x = this.props.isLeft ? 0 : width;
    this.state = {
      left: x,
      top: 0,
      pressed: false,
      followX: x
    }

    // setup animated variables
    this.animatedTouchX = new Animated.Value(x);
    this.animatedFollowX = new Animated.Value(x);

    // link animated variables to state variables
    this.animatedTouchX.addListener((x) => {
      this.setState({ left: x.value });
    });
    this.animatedFollowX.addListener((x) => {
      this.setState({ followX: x.value });
    });
  }

  componentDidMount() {
    // this.animateToEdge(true);
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

  animateToEdge(toLeft, callback = ()=>{}) {
    edgeX = toLeft ? -12 : Dimensions.get("window").width + 12;

    this.animatedTouchX.setValue(this.state.left)
    Animated.timing(this.animatedTouchX, {
      toValue: edgeX,
      easing: Easing.in,
      duration: 40,
    }).start();
    Animated.timing(this.animatedFollowX, {
      toValue: edgeX,
      easing: Easing.in,
      duration: 160,
    }).start(callback);
  }

  reset() {
    let width = Dimensions.get("window").width;
    let x = this.props.isLeft ? 0 : width;
    this.setState({
      left: x,
      followX: x
    })

    this.animatedTouchX.setValue(x);
    this.animatedFollowX.setValue(x);
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
    const OriginX = this.props.isLeft ? 0 : width;

    var path = `
            M${this.state.followX} -100
            C${this.state.followX} ${targetPoint.y - edgeControlDist}
              ${targetPoint.x} ${targetPoint.y - pointControlDist}
              ${targetPoint.x} ${targetPoint.y}
            C${targetPoint.x} ${targetPoint.y + pointControlDist}
              ${this.state.followX} ${targetPoint.y + edgeControlDist}
              ${this.state.followX} ${height + 100}
            L${OriginX} ${height}
            L${OriginX} 0
          `
    return (
      <Svg height={height} width={width} style={this.props.style}>
        <AnimatedPath
          d={path}
          fill={this.props.color || "red"}
        />
      </Svg>
    )
  }
}

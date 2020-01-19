import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { StatusBar, Dimensions, Animated, PanResponder, View, Easing } from "react-native";
import { registerRootComponent } from 'expo';
import { Svg, Path, Circle } from "react-native-svg";

import Physics from "./physics/index";
import SvgSwipe from './SvgSwipe';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     swipeIndex: 0
  //   }

  //   this.swipes = [];
    
  //   this._panResponder = PanResponder.create({
  //     // Ask to be the responder:
  //     onStartShouldSetPanResponder: (evt, gestureState) => true,
  //     onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
  //     onMoveShouldSetPanResponder: (evt, gestureState) => true,
  //     onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

  //     onPanResponderGrant: (evt, gestureState) => {
  //       // The gesture has started. Show visual feedback so the user knows
  //       // what is happening!
  //       // gestureState.d{x,y} will be set to zero now
  //     },
  //     onPanResponderMove: (evt, gestureState) => {
  //       // The most recent move distance is gestureState.move{X,Y}
  //       // The accumulated gesture distance since becoming responder is
  //       // gestureState.d{x,y}

  //       let leftEdge = this.swipes[this.state.swipeIndex];
  //       let rightEdge = this.swipes[this.state.swipeIndex + 1];
        
  //       leftEdge && leftEdge.setTargetPos({
  //         x: gestureState.moveX - gestureState.x0,
  //         y: gestureState.moveY
  //       })

  //       rightEdge && rightEdge.setTargetPos({
  //         x: gestureState.moveX + (Dimensions.get("window").width - gestureState.x0),
  //         y: gestureState.moveY
  //       })


  //     },
  //     onPanResponderTerminationRequest: (evt, gestureState) => true,
  //     onPanResponderRelease: (evt, gestureState) => {
  //       // The user has released all touches while this view is the
  //       // responder. This typically means a gesture has succeeded

  //       let leftEdge = this.swipes[this.state.swipeIndex];
  //       let rightEdge = this.swipes[this.state.swipeIndex + 1];
        
  //       let dist = gestureState.moveX - gestureState.x0;
  //       const distMin = 90;


  //       if (Math.abs(dist) < distMin) {
  //         // return edges to where they started
  //         leftEdge && leftEdge.animateToEdge(true);
  //         rightEdge && rightEdge.animateToEdge(false);

  //       } else if (dist < 0) {
  //         //swipe right to left
  //         //both edges go left
  //         leftEdge && leftEdge.animateToEdge(true);
  //         rightEdge && rightEdge.animateToEdge(true);
  //         rightEdge && this.setState({swipeIndex: this.state.swipeIndex + 1})

  //       }else {
  //         //swipe left to right
  //         //both edges go right
  //         leftEdge && leftEdge.animateToEdge(false);
  //         rightEdge && rightEdge.animateToEdge(false);
  //         leftEdge && this.setState({swipeIndex: this.state.swipeIndex - 1})

  //       }


  //     },
  //     onPanResponderTerminate: (evt, gestureState) => {
  //       // Another component has become the responder, so this gesture
  //       // should be cancelled
  //     },
  //     onShouldBlockNativeResponder: (evt, gestureState) => {
  //       // Returns whether this component should block native components from becoming the JS
  //       // responder. Returns true by default. Is currently only supported on android.
  //       return true;
  //     },
  //   });
  // }

  // componentDidMount() {
  //   this.swipes[0].animateToEdge(true);
  // }


  render() {
    // const { width, height } = Dimensions.get("window");

    // svgStyle = {position: "absolute", top: 0, left: 0}

    return (
      <Physics />
    );
  };
}

export default App;

registerRootComponent(App);
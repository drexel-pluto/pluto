import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { StatusBar, Dimensions, Animated, PanResponder, View, Easing } from "react-native";
import { registerRootComponent } from 'expo';

//import Physics from "./physics";
import SvgSwipe from './SvgSwipe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}

        this.refs.swipe.setTargetPos({
          x: gestureState.moveX,
          y: gestureState.moveY
        })

      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        if (gestureState.moveX < Dimensions.get("window").width / 2) {
          this.refs.swipe.animateToEdge(true);
        } else {
          this.refs.swipe.animateToEdge(false);
        }
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }


  render() {
    const { width, height } = Dimensions.get("window");
    return (
      //<Physics />
      <View height={height} width={width} {...this._panResponder.panHandlers}>
        <SvgSwipe ref='swipe'/>
      </View>
    );
  };
}

export default App;

registerRootComponent(App);
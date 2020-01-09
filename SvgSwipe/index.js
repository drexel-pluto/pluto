import React, { Component } from "react";
import {Svg, Path} from "react-native-svg";
import { StatusBar, Dimensions, Animated, PanResponder, View } from "react-native";

export default class SvgSwipe extends Component {

    state = {
        left: 0,
        top: 0,
        pressed: false
    }

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
                console.log(evt);
            },
            onPanResponderMove: (evt, gestureState) => {
                // The most recent move distance is gestureState.move{X,Y}
                // The accumulated gesture distance since becoming responder is
                // gestureState.d{x,y}
                this.setState({
                    left: gestureState.moveX,
                    top: gestureState.moveY,
                    pressed: true
                })
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
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
        const edgeControlDist = 100;
        const pointControlDist = 140;

        if (this.state.pressed) {
            var targetPoint = {
                x: this.state.left,
                y: this.state.top
            }
        } else {
            var targetPoint = {
                x: width / 2,
                y: height/ 2
            }
        }
        
        var path = `
            M${width / 2} -100
            C${width / 2} ${targetPoint.y - edgeControlDist} ${targetPoint.x} ${targetPoint.y - pointControlDist} ${targetPoint.x} ${targetPoint.y}
            C${targetPoint.x} ${targetPoint.y + pointControlDist} ${width / 2} ${targetPoint.y + edgeControlDist} ${width / 2} ${height + 100}`
        return(
            <View height={height} width={width} {...this._panResponder.panHandlers}>
                <Svg height={height} width={width}>
                    <Path
                    d={path}
                    fill="none"
                    stroke="red"
                    strokeWidth="4"
                    />
                </Svg>
            </View>
        )
    }
}
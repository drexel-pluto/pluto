import React, { Component } from "react";
import {Svg, Path} from "react-native-svg";
import { StatusBar, Dimensions, Animated, PanResponder, View, Easing } from "react-native";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default class SvgSwipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            top: 0,
            pressed: false,
            followX: Dimensions.get("window").width
        }
    
        this.animatedTouchX = new Animated.Value(Dimensions.get("window").width);
        this.animatedFollowX = new Animated.Value(Dimensions.get("window").width);
    
        this.animatedTouchX.addListener((progress) => {
            this.setState({ left: progress.value });
        });

        this.animatedFollowX.addListener((progress) => {
            this.setState({ followX: progress.value });
        });

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
                this.setState({
                    top: gestureState.moveY,
                    pressed: true
                })

                Animated.timing(this.animatedTouchX, {
                    toValue: gestureState.moveX,
                    easing: Easing.in,
                    duration: 40,
                }).start();

                Animated.timing(this.animatedFollowX, {
                    toValue: gestureState.moveX,
                    easing: Easing.in,
                    duration: 160,
                }).start();
                
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
                console.log(gestureState.moveX)
                if (gestureState.moveX < Dimensions.get("window").width / 2) {
                    this.animateToLeft();
                } else {
                    this.animateToRight();
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

    animateToLeft() {
        this.animatedTouchX.setValue(this.state.left)
        Animated.spring(this.animatedTouchX, {
            toValue: -5,
            friction: 5
        }).start();
        Animated.spring(this.animatedFollowX, {
            toValue: -5,
            friction: 8
        }).start();
    }

    animateToRight() {
        this.animatedTouchX.setValue(this.state.left)
        Animated.spring(this.animatedTouchX, {
            toValue: Dimensions.get("window").width + 5,
            friction: 5
        }).start();
        Animated.spring(this.animatedFollowX, {
            toValue: Dimensions.get("window").width + 5,
            friction: 8
        }).start();
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
                x: width,
                y: height/ 2
            }
        }
        
        var path = `
            M${this.state.followX} -100
            C${this.state.followX} ${targetPoint.y - edgeControlDist} ${targetPoint.x} ${targetPoint.y - pointControlDist} ${targetPoint.x} ${targetPoint.y}
            C${targetPoint.x} ${targetPoint.y + pointControlDist} ${this.state.followX} ${targetPoint.y + edgeControlDist} ${this.state.followX} ${height + 100}`
        return(
            <Animated.View height={height} width={width} {...this._panResponder.panHandlers}>
                <Svg height={height} width={width}>
                    <AnimatedPath
                    d={path}
                    fill="none"
                    stroke="red"
                    strokeWidth="4"
                    />
                </Svg>
            </Animated.View>
        )
    }
}
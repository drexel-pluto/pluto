import React from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import IconHeart from '../../assets/images/iconHeart.svg'
import IconHeartFilled from '../../assets/images/iconHeartFilled.svg'

var ANIMATION_END_Y = Mixins.scaleSize(50)
var NEGATIVE_END_Y = ANIMATION_END_Y * -1

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min
}
class HeartButton extends React.Component {
  constructor(props) {
    super(props)

    this.animatedScaleValueCompleted = 1
    this.animatedTranslateValueCompleted = 5

    this.state = {
      isLiked: this.props.isLiked,
      hearts: [],
      animatedScaleValue: new Animated.Value(0),
      animatedTranslateValue: new Animated.Value(0),
    }
  }

  componentDidMount() {
    if (this.props.isLiked) {
      this.state.animatedScaleValue.setValue(this.animatedScaleValueCompleted)
      this.state.animatedTranslateValue.setValue(
        this.animatedTranslateValueCompleted
      )
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.isLiked !== prevProps.isLiked) {
  //     this.setState({
  //       isLiked: this.props.isLiked,
  //     })
  //     this.props.isLiked ??
  //       this.state.animatedScaleValue.setValue(this.animatedScaleValueCompleted)

  //     this.props.isLiked ??
  //       this.state.animatedTranslateValue.setValue(
  //         this.animatedTranslateValueCompleted
  //       )
  //   }
  // }

  componentWillUpdate(nextProps) {
    const oldCount = this.props.count
    const newCount = nextProps.count
    const numHearts = newCount - oldCount

    if (numHearts <= 0) {
      return
    }

    const items = Array(numHearts).fill()
    const newHearts = items.map((item, i) => oldCount + i).map(this.createHeart)

    this.setState({ hearts: this.state.hearts.concat(newHearts) })
  }

  createHeart(index) {
    return {
      id: index,
      right: getRandomNumber(-25, 25),
    }
  }

  removeHeart(id) {
    this.setState({
      hearts: this.state.hearts.filter(heart => heart.id !== id),
    })
  }

  heartAnimate() {
    if (this.state.isLiked) {
      this.state.animatedTranslateValue.setValue(0)
      Animated.spring(this.state.animatedTranslateValue, {
        toValue: this.animatedTranslateValueCompleted,
        duration: 200,
      }).start()
    } else {
      this.state.animatedScaleValue.setValue(1)

      Animated.spring(this.state.animatedTranslateValue, {
        toValue: this.animatedTranslateValueCompleted,
        duration: 200,
      }).start()
    }
  }

  _onPress() {
    this.props._onPress()
    this.heartAnimate()
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this._onPress()}>
        <View style={styles.heartButton}>
          <IconHeart />
          <Animated.View
            style={[
              styles.filled,
              {
                transform: [{ translateX: this.state.animatedTranslateValue }],
              },
            ]}
          >
            <Animated.View
              style={[
                styles.filled,
                {
                  transform: [{ scale: this.state.animatedScaleValue }],
                },
              ]}
            >
              <IconHeartFilled />
            </Animated.View>
          </Animated.View>
          {this.state.hearts.map(heart => {
            return (
              <FloatingHeart
                key={heart.id}
                onComplete={this.removeHeart.bind(this, heart.id)}
                style={{ right: heart.right }}
              />
            )
          })}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

class FloatingHeart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: new Animated.Value(0),
    }
  }

  componentWillMount() {
    this._yAnimation = this.state.position.interpolate({
      inputRange: [NEGATIVE_END_Y, 0],
      outputRange: [ANIMATION_END_Y, 0],
    })
    this._opacityAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y],
      outputRange: [1, 0],
    })
    this._scaleAnimation = this._yAnimation.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 0.8, 0.5],
      extrapolate: 'clamp',
    })
    this._xAnimation = this._yAnimation.interpolate({
      inputRange: [0, ANIMATION_END_Y / 2, ANIMATION_END_Y],
      outputRange: [0, 20, 0],
    })
    this._rotateAnimation = this._yAnimation.interpolate({
      inputRange: [
        0,
        ANIMATION_END_Y / 4,
        ANIMATION_END_Y / 3,
        ANIMATION_END_Y / 2,
        ANIMATION_END_Y,
      ],
      outputRange: ['0deg', '-2deg', '0deg', '2deg', '0deg'],
    })
  }

  componentDidMount() {
    Animated.timing(this.state.position, {
      duration: 2000,
      toValue: NEGATIVE_END_Y,
    }).start(this.props.onComplete)
  }

  getHeartAnimationStyle() {
    return {
      transform: [
        { translateY: this.state.position },
        { translateX: this._xAnimation },
        { scale: this._scaleAnimation },
        { rotate: this._rotateAnimation },
      ],
      opacity: this._opacityAnimation,
    }
  }

  render() {
    return (
      <Animated.View
        style={[
          this.getHeartAnimationStyle(),
          { position: 'absolute', bottom: 25 },
          this.props.style,
        ]}
      >
        <IconHeartFilled />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  heartButton: {
    position: 'relative',
  },
  filled: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -10,
  },
})

export default HeartButton

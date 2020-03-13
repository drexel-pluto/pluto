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

class HeartButton extends React.Component {
  constructor(props) {
    super(props)

    this.animatedScaleValueCompleted = 1
    this.animatedTranslateValueCompleted = 5

    this.state = {
      isLiked: this.props.isLiked,
      animatedScaleValue: this.props.isLiked
        ? new Animated.Value(this.animatedScaleValueCompleted)
        : new Animated.Value(0),
      animatedTranslateValue: this.props.isLiked
        ? new Animated.Value(this.animatedTranslateValueCompleted)
        : new Animated.Value(0),
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isLiked !== prevProps.isLiked) {
      this.setState({
        isLiked: this.props.isLiked,
      })
      this.props.isLiked
        ? this.state.animatedTranslateValue.setValue(
            this.animatedTranslateValueCompleted
          )
        : this.state.animatedTranslateValue.setValue(0)
      this.props.isLiked
        ? this.state.animatedScaleValue.setValue(
            this.animatedScaleValueCompleted
          )
        : this.state.animatedScaleValue.setValue(0)
    }
  }

  heartAnimate() {
    if (!this.state.isLiked) {
      // first like
      Animated.sequence([
        Animated.spring(this.state.animatedScaleValue, {
          toValue: this.animatedScaleValueCompleted,
          duration: 300,
        }).start(),
        Animated.spring(this.state.animatedTranslateValue, {
          toValue: this.animatedTranslateValueCompleted,
          duration: 200,
          friction: 3,
          tension: 40,
          delay: 300,
        }).start(),
      ])

      this.setState({ isLiked: true })
    } else {
      // after liked
      this.state.animatedTranslateValue.setValue(0)
      Animated.spring(this.state.animatedTranslateValue, {
        toValue: this.animatedTranslateValueCompleted,
        duration: 200,
        friction: 3,
        tension: 40,
      }).start()
    }
  }

  _onPress() {
    this.props._onPress()
    this.heartAnimate()
  }

  render() {
    const animatedStyleScale = {
      transform: [
        {
          scale: this.state.animatedScaleValue,
        },
      ],
    }

    const animatedStyleTranslate = {
      transform: [{ translateX: this.state.animatedTranslateValue }],
    }

    return (
      <TouchableWithoutFeedback onPress={() => this._onPress()}>
        <View style={styles.heartButton}>
          <IconHeart />
          <Animated.View style={[styles.filled, animatedStyleTranslate]}>
            <Animated.View style={[styles.filled, animatedStyleScale]}>
              <IconHeartFilled />
            </Animated.View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
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

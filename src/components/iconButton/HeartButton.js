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
      animatedScaleValue: new Animated.Value(0),
      animatedTranslateValue: new Animated.Value(0),
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isLiked !== prevProps.isLiked) {
      this.setState({
        isLiked: this.props.isLiked,
      })
      this.props.isLiked ??
        this.state.animatedScaleValue.setValue(this.animatedScaleValueCompleted)

      this.props.isLiked ??
        this.state.animatedTranslateValue.setValue(
          this.animatedTranslateValueCompleted
        )
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

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
    this.animatedScaleValue = new Animated.Value(0)
    this.animatedTranslateValue = new Animated.Value(0)
    this.isLiked = false
  }

  heartAnimate() {
    if (!this.isLiked) {
      // first like
      Animated.sequence([
        Animated.spring(this.animatedScaleValue, {
          toValue: 1,
          duration: 300,
        }).start(),
        Animated.spring(this.animatedTranslateValue, {
          toValue: 5,
          duration: 200,
          friction: 3,
          tension: 40,
          delay: 300,
        }).start(),
      ])

      this.isLiked = true
    } else {
      // after liked
      this.animatedTranslateValue.setValue(0)
      Animated.spring(this.animatedTranslateValue, {
        toValue: 5,
        duration: 200,
        friction: 3,
        tension: 40,
      }).start()
    }
  }

  render() {
    const animatedStyleScale = {
      transform: [
        {
          scale: this.animatedScaleValue,
        },
      ],
    }

    const animatedStyleTranslate = {
      transform: [
        {
          scale: this.animatedScaleValue,
        },
        { translateX: this.animatedTranslateValue },
      ],
    }

    return (
      <TouchableWithoutFeedback onPress={() => this.heartAnimate()}>
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

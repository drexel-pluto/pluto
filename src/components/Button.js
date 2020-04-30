import React from 'react'
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import { LinearGradient } from 'expo-linear-gradient'

/**
 * Button.js
 *
 * default is filled-in style with violet
 * color prop is hex code from our system
 */

export default Button = props => {
  const { _onPress, text, type, color, isBold } = props
  var { style, disabled } = props

  switch (type) {
    case 'small':
      return (
        <TouchableHighlight
          underlayColor="#ffffff00"
          onPress={() => {
            !disabled && _onPress()
          }}
          style={[props.style, props.disabled && { opacity: 0.4 }]}
        >
          <LinearGradient
            style={styles.smallButton}
            colors={Colors.gradient.dark(color)}
          >
            <Text
              style={[
                Typography.F_CAPTION,
                styles.text,
                isBold ? Typography.F_BOLD : null,
              ]}
            >
              {text}
            </Text>
          </LinearGradient>
        </TouchableHighlight>
      )
    case 'text':
      return (
        <TouchableHighlight
          underlayColor="#ffffff00"
          onPress={() => {
            !disabled && _onPress()
          }}
          style={[props.style, props.disabled && { opacity: 0.4 }]}
        >
          <View style={styles.textButton}>
            <Text
              style={[
                Typography.F_CAPTION,
                { color: color.dark },
                isBold ? Typography.F_BOLD : null,
              ]}
            >
              {text}
            </Text>
          </View>
        </TouchableHighlight>
      )
    case 'outline':
      return (
        <TouchableHighlight
          underlayColor="#ffffff00"
          onPress={() => {
            !disabled && _onPress()
          }}
          style={[props.style, props.disabled && { opacity: 0.4 }]}
        >
          <View
            style={[styles.button, { borderWidth: 1, borderColor: color.dark }]}
          >
            <Text
              style={[
                Typography.F_CAPTION,
                { color: color.dark },
                isBold ? Typography.F_BOLD : null,
              ]}
            >
              {text}
            </Text>
          </View>
        </TouchableHighlight>
      )
    default:
      return (
        <TouchableHighlight
          underlayColor="#ffffff00"
          onPress={() => {
            !disabled && _onPress()
          }}
          style={[props.style, props.disabled && { opacity: 0.4 }]}
        >
          <LinearGradient
            style={styles.button}
            colors={Colors.gradient.dark(color)}
          >
            <Text
              style={[
                Typography.F_CAPTION,
                styles.text,
                isBold ? Typography.F_BOLD : null,
              ]}
            >
              {text}
            </Text>
          </LinearGradient>
        </TouchableHighlight>
      )
  }
}

Button.defaultProps = {
  text: 'button',
  color: Colors.VIOLET,
  disabled: false,
  _onPress: () => {},
}

const styles = StyleSheet.create({
  button: {
    // width: Mixins.scaleSize(100),
    paddingVertical: Mixins.scaleSize(8),
    paddingHorizontal: Mixins.scaleSize(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Mixins.scaleSize(17),
  },
  textButton: {
    height: Mixins.scaleSize(35),
  },
  smallButton: {
    paddingHorizontal: Mixins.scaleSize(10),
    paddingVertical: Mixins.scaleSize(5),
    borderRadius: Mixins.scaleSize(13),
  },
  text: {
    color: 'white',
  },
})

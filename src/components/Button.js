import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import { LinearGradient } from 'expo-linear-gradient'

export default Button = props => {
  const { _onPress, text, type, isBold } = props
  switch (type) {
    case 'small':
      return (
        <TouchableOpacity
          onPress={() => {
            _onPress()
          }}
        >
          <LinearGradient
            style={styles.smallButton}
            colors={Colors.gradient.dark(Colors.VIOLET)}
          >
            <Text
              style={[
                Typography.F_CAPTION,
                styles.text,
                isBold ? { fontWeight: '600' } : null,
              ]}
            >
              {text}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      )
    case 'text':
      return (
        <TouchableOpacity
          onPress={() => {
            _onPress()
          }}
        >
          <View style={styles.button}>
            <Text
              style={[
                Typography.F_CAPTION,
                styles.noBgText,
                isBold ? { fontWeight: '600' } : null,
              ]}
            >
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      )
    case 'outline':
      return (
        <TouchableOpacity
          onPress={() => {
            _onPress()
          }}
        >
          <View style={[styles.button, styles.outlineButton]}>
            <Text
              style={[
                Typography.F_CAPTION,
                styles.noBgText,
                isBold ? { fontWeight: '600' } : null,
              ]}
            >
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      )
    default:
      return (
        <TouchableOpacity
          onPress={() => {
            _onPress()
          }}
        >
          <LinearGradient
            style={styles.button}
            colors={Colors.gradient.dark(Colors.VIOLET)}
          >
            <Text
              style={[
                Typography.F_CAPTION,
                styles.text,
                isBold ? { fontWeight: '600' } : null,
              ]}
            >
              {text}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      )
  }
}

Button.defaultProps = {
  type: 'button',
  _onPress: () => {},
}

const styles = StyleSheet.create({
  button: {
    width: Mixins.scaleSize(100),
    height: Mixins.scaleSize(35),
    paddingHorizontal: Mixins.scaleSize(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Mixins.scaleSize(17),
  },
  smallButton: {
    paddingHorizontal: Mixins.scaleSize(10),
    paddingVertical: Mixins.scaleSize(5),
    borderRadius: Mixins.scaleSize(13),
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: Colors.VIOLET.dark,
  },
  text: {
    color: 'white',
  },
  noBgText: {
    color: '#4A28B3',
  },
})

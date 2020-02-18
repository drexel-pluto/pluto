import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import { LinearGradient } from 'expo-linear-gradient'

export default Button = props => {
  const { _onPress, text, type } = props
  switch (type) {
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
            <Text style={[Typography.F_CAPTION, styles.text]}>{text}</Text>
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
    paddingHorizontal: Mixins.scaleSize(10),
    paddingVertical: Mixins.scaleSize(5),
    borderRadius: Mixins.scaleSize(13),
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
})

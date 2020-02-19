import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import { LinearGradient } from 'expo-linear-gradient'

export default Tag = props => {
  const { id, gradientBg, tagName } = props

  return (
    <TouchableOpacity>
      <LinearGradient
        colors={Colors.gradient.dark(gradientBg)}
        style={styles.tag}
      >
        <Text style={{ color: 'white', fontWeight: '600' }}>#{tagName}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: Mixins.scaleSize(20),
    paddingVertical: Mixins.scaleSize(10),
    marginRight: Mixins.scaleSize(20),
    borderRadius: Mixins.scaleSize(18),
  },
})

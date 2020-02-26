/**
 * Neumorphic styled container for any children elements
 * https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6
 */

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'

export default StyledContainer = props => {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <View style={styles.border}>{props.children}</View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outer: {
    borderRadius: Mixins.scaleSize(15),
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  inner: {
    borderRadius: Mixins.scaleSize(15),
    shadowOffset: { width: -4, height: -4 },
    shadowColor: 'white',
    shadowOpacity: 1,
    shadowRadius: 4,
  },
})

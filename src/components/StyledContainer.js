import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

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
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  inner: {
    borderRadius: Mixins.scaleSize(15),
    shadowOffset: { width: -3, height: -3 },
    shadowColor: 'white',
    shadowOpacity: 1,
    shadowRadius: 4,
  },
})

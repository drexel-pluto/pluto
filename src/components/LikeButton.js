import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

export default LikeButton = props => {
  return <View style={styles.like} />
}

const styles = StyleSheet.create({
  like: {
    width: Mixins.scaleSize(35),
    height: Mixins.scaleSize(35),
    backgroundColor: Colors.GRAY_MEDIUM,
  },
})

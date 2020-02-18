import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'

export default LikeButton = props => {
  return (
    <TouchableWithoutFeedback style={styles.like}>
      <Text>like</Text>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  like: {},
})

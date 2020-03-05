import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import IconHeart from '../../assets/images/iconHeart.svg'

export default HeartButton = props => {
  return (
    <TouchableWithoutFeedback style={styles.like}>
      <IconHeart />
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  like: {},
})

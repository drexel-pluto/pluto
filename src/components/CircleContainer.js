import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'

export default CircleContainer = props => {
  return (
    <View style={styles.circleContainer}>
      {/* <Text>Circle container</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  circleContainer: {
    flex: 1,
    backgroundColor: Colors.UI_BG,
  },
})

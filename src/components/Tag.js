import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

export default Tag = props => {
  const { id, tagName } = props
  return (
    <TouchableHighlight style={styles.tag}>
      <Text>{tagName}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: Mixins.scaleSize(20),
    paddingVertical: Mixins.scaleSize(10),
    marginRight: Mixins.scaleSize(20),
    borderRadius: 50,
    backgroundColor: Colors.GRAY_LIGHT,
  },
})

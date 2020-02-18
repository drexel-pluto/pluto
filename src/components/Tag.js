import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'

export default Tag = props => {
  const { id, tagName } = props
  return (
    <TouchableOpacity style={styles.tag}>
      <Text>#{tagName}</Text>
    </TouchableOpacity>
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

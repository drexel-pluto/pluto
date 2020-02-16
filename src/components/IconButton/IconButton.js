import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../../styles/index'

export default IconButton = props => {
  const { type, _onPress } = props

  return (
    <TouchableOpacity
      style={styles.iconButton}
      onPress={() => {
        type == 'back' ? _onPress(null) : _onPress()
      }}
    >
      <Text style={Typography.F_CAPTION}>{type}</Text>
    </TouchableOpacity>
  )
}

IconButton.defaultProps = {
  type: 'icon',
  _onPress: () => {},
}

const styles = StyleSheet.create({
  iconButton: {
    padding: Mixins.scaleSize(5),
  },
})

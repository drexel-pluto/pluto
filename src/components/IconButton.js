import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

export default IconButton = props => {
  const { type, _onPress } = props

  switch (type) {
    case 'search':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <Text>Search</Text>
        </TouchableOpacity>
      )

    case 'noti':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <Text>Noti</Text>
        </TouchableOpacity>
      )

    case 'filter':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <Text>Filter</Text>
        </TouchableOpacity>
      )

    case 'profile':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
      )

    case 'back':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress(null)
          }}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      )

    case 'setting':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <Text>setting</Text>
        </TouchableOpacity>
      )

    default:
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <Text>icon</Text>
        </TouchableOpacity>
      )
  }
}

IconButton.defaultProps = {
  _onPress: () => {},
}

const styles = StyleSheet.create({
  iconButton: {
    padding: Mixins.scaleSize(5),
  },
})

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import { LinearGradient } from 'expo-linear-gradient'

export default AddPostButton = props => {
  const { _onPress } = props

  return (
    <TouchableOpacity
      onPress={() => {
        _onPress()
      }}
    >
      <View style={Styles.shadow(Colors.VIOLET.dark)}>
        <LinearGradient
          colors={Colors.gradient.dark(Colors.VIOLET)}
          style={styles.addPost}
        >
          <Text>add post</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  addPost: {
    width: Mixins.scaleSize(60),
    height: Mixins.scaleSize(60),
    borderRadius: Mixins.scaleSize(60) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.PLUTO_WHITE,
  },
})

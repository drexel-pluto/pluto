import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import { LinearGradient } from 'expo-linear-gradient'
import AddPost from '../../assets/images/iconPost.svg'

export default AddPostButton = props => {
  const { _onPress } = props

  return (
    // gradient version
    // <TouchableOpacity
    //   onPress={() => {
    //     _onPress()
    //   }}
    // >
    //   <View style={Styles.shadow(Colors.VIOLET.dark)}>
    //     <LinearGradient
    //       colors={Colors.gradient.dark(Colors.VIOLET)}
    //       style={styles.addPost}
    //     >
    //       <Text style={{ color: 'white' }}>add post</Text>
    //     </LinearGradient>
    //   </View>
    // </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {
        _onPress()
      }}
    >
      <View style={[styles.addPost, Styles.shadow(Colors.VIOLET.dark)]}>
        <AddPost />
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
    // borderWidth: 1,
    // borderColor: Colors.PLUTO_WHITE,
    backgroundColor: Colors.VIOLET.dark,
  },
  inner: {
    width: Mixins.scaleSize(55),
    height: Mixins.scaleSize(55),
    borderRadius: Mixins.scaleSize(55) / 2,
    backgroundColor: Colors.VIOLET_dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

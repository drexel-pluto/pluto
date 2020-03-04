import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import { LinearGradient } from 'expo-linear-gradient'

export default AddFriendButton = props => {
  const { _onPress } = props

  return (
    // gradient ver
    // <TouchableOpacity
    //   onPress={() => {
    //     _onPress()
    //   }}
    // >
    //   <View style={Styles.shadow(Colors.VIOLET.dark)}>
    //     <LinearGradient
    //       colors={Colors.gradient.dark(Colors.VIOLET)}
    //       style={styles.addFriend}
    //     >
    //       <View style={styles.inner}>
    //         <Text style={{ color: Colors.VIOLET.dark }}>add friend</Text>
    //       </View>
    //     </LinearGradient>
    //   </View>
    // </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {
        _onPress()
      }}
    >
      <View style={[styles.addFriend, Styles.shadow(Colors.VIOLET.dark)]}>
        <Text style={{ color: Colors.VIOLET.dark }}>add friend</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  addFriend: {
    width: Mixins.scaleSize(60),
    height: Mixins.scaleSize(60),
    borderRadius: Mixins.scaleSize(60) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.PLUTO_WHITE,
    borderWidth: 2,
    borderColor: Colors.VIOLET.dark,
  },
  inner: {
    width: Mixins.scaleSize(55),
    height: Mixins.scaleSize(55),
    borderRadius: Mixins.scaleSize(55) / 2,
    backgroundColor: Colors.PLUTO_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

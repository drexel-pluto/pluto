import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import { LinearGradient } from 'expo-linear-gradient'
import AddFriend from '../../assets/images/iconFriend.svg'

export default AddFriendButton = props => {
  const { _onPress, requestNum } = props

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
        <AddFriend />
      </View>

      {requestNum > 0 ? (
        <LinearGradient
          colors={Colors.gradient.dark(Colors.MELON)}
          style={styles.notiCount}
        >
          <Text
            style={[
              Typography.F_CAPTION,
              Typography.F_BOLD,
              { color: 'white' },
            ]}
          >
            {requestNum}
          </Text>
        </LinearGradient>
      ) : null}
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
  notiCount: {
    width: Mixins.scaleSize(20),
    height: Mixins.scaleSize(20),
    borderRadius: Mixins.scaleSize(20) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  // inner: {
  //   width: Mixins.scaleSize(55),
  //   height: Mixins.scaleSize(55),
  //   borderRadius: Mixins.scaleSize(55) / 2,
  //   backgroundColor: Colors.PLUTO_WHITE,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
})

import React from 'react'
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import { LinearGradient } from 'expo-linear-gradient'

export default Circle = props => {
  const { user, navigation, size, isActive } = props

  // original circle
  const innerCircleSize = Mixins.scaleSize(size)
  const innerImageSize = isActive
    ? Mixins.scaleSize(size - 5)
    : Mixins.scaleSize(size)

  // circle when active
  // const outerCircleSize = isActive
  //   ? innerCircleSize + Mixins.scaleSize(10)
  //   : innerCircleSize
  // const outerInnerSize = isActive ? innerCircleSize + Mixins.scaleSize(5) : 0

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Profile', { userId: user._id })
      }}
      disabled={props.disabled}
    >
      <View style={Styles.shadow(Colors.VIOLET.dark)}>
        {
          // OUTER
        }
        {/* <LinearGradient
          colors={Colors.gradient.dark(Colors.VIOLET)}
          style={[
            outerCircleSize
              ? {
                  width: Mixins.scaleSize(outerCircleSize),
                  height: Mixins.scaleSize(outerCircleSize),
                  borderRadius: Mixins.scaleSize(outerCircleSize) / 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }
              : null,
          ]}
        >
          <View
            style={[
              isActive
                ? {
                    backgroundColor: Colors.PLUTO_WHITE,
                    width: Mixins.scaleSize(outerInnerSize),
                    height: Mixins.scaleSize(outerInnerSize),
                    borderRadius: Mixins.scaleSize(outerInnerSize) / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }
                : null,
            ]}
          > */}
        {
          // INNER
        }
        <LinearGradient
          colors={Colors.gradient.dark(Colors.VIOLET)}
          style={[
            innerCircleSize
              ? {
                  width: Mixins.scaleSize(innerCircleSize),
                  height: Mixins.scaleSize(innerCircleSize),
                  borderRadius: Mixins.scaleSize(innerCircleSize) / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }
              : null,
          ]}
        >
          <Image
            style={[
              innerImageSize
                ? {
                    width: Mixins.scaleSize(innerImageSize),
                    height: Mixins.scaleSize(innerImageSize),
                    borderRadius: Mixins.scaleSize(innerImageSize) / 2,
                  }
                : null,
            ]}
            source={
              user.image
                ? { uri: user.image }
                : { uri: 'https://picsum.photos/id/237/300/300' }
            }
          />
          {
            // possibly add a name or id that is not visible
          }
        </LinearGradient>
        {/* </View>
        </LinearGradient> */}
      </View>
    </TouchableOpacity>
  )
}

Circle.defaultProps = {
  size: 50,
  disabled: false,
}

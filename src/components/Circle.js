import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

export default Circle = props => {
  const { user, navigation, size } = props
  // maybe override the size value with interaction value for homepage use

  return (
    <TouchableOpacity
      style={[
        styles.circle,
        size ? { width: size, height: size, borderRadius: size / 2 } : '',
      ]}
      onPress={() => {
        navigation.navigate('Profile')
      }}
    >
      <Image
        style={styles.image}
        source={
          user.image
            ? { uri: user.image }
            : { uri: 'https://picsum.photos/id/237/300/300' }
        }
      />
      {
        // possibly add a name or id that is not visible
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

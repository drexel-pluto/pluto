import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

export default Circle = props => {
  const { user, navigation } = props
  return (
    <TouchableOpacity
      style={styles.circle}
      onPress={() => {
        navigation.navigate('Profile')
      }}
    >
      <Image
        style={styles.circle__image}
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
    borderRadius: 50,
  },
  circle__image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})

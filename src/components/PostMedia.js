import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

export default PostMedia = props => {
  return (
    <View style={styles.postMediaWrapper}>
      {props.media[0] && (
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: props.media[0].uri }}
        />
      )}
      {props.media[1] && (
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: props.media[1].uri }}
        />
      )}
      {props.media[2] && (
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: props.media[2].uri }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  postMediaWrapper: {
    backgroundColor: 'red',
  },
})

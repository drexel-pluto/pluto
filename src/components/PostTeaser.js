import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

export default PostTeaser = props => {
  const { id, author, content, isFull } = props
  return (
    <View style={[styles.postTeaser, isFull ? styles.postTeaser_full : '']}>
      <View style={styles.image_wrapper}>
        <Image style={styles.image} source={{ uri: content.image }} />
      </View>
      <View style={styles.text_wrapper}>
        <Text style={styles.text}>{content.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  postTeaser: {
    width: 200,
    height: 300,
    marginRight: 20,
  },
  postTeaser_full: {
    width: '100%',
    height: 500,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text_wrapper: {
    backgroundColor: Colors.GRAY_LIGHT,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
  },
})

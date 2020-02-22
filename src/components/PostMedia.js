import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Mixins } from '../styles/index'

export default PostMedia = props => {
  return (
    <View style={styles.postMediaWrapper}>
      {props.media.map((imgUrl, key) => {
        return (
          <Image source={{ uri: imgUrl }} key={key} style={styles.mediaItem} />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  postMediaWrapper: {
    height: Mixins.scaleSize(250),
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'stretch',
    padding: 0,
  },
  mediaItem: {
    margin: 0,
    width: '40%',
    flexGrow: 1,
    borderRadius: Mixins.scaleSize(20),
  },
})

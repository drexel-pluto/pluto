import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import { FLEX_CONTAINER } from '../styles/layouts'

export default PostMedia = props => {
  return (
    <View style={styles.postMediaWrapper}>
      {props.media.map((img, key) => {
        return (
          <Image source={{ uri: img.uri }} key={key} style={styles.mediaItem} />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  postMediaWrapper: {
    height: 250,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'stretch',
    padding: Layouts.PAD / 2,
  },
  mediaItem: {
    margin: Layouts.PAD / 2,
    width: '40%',
    flexGrow: 1,
    borderRadius: 14,
  },
})

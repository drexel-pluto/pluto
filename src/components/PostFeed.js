import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import PostTeaserFull from './PostTeaserFull'

export default PostFeed = props => {
  return (
    <View style={styles.postFeed}>
      <FlatList
        data={props.data}
        renderItem={({ item, index }) => {
          return (
            <PostTeaserFull
              key={item._id}
              _id={item._id}
              media={item.mediaURLs}
              text={item.text}
              postedAt={item.postedAt}
              poster={item.poster}
              openPost={props.openPost}
            />
          )
        }}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  postFeed: {
    width: '100%',
    paddingTop: Layouts.PAD_VERT,
    paddingBottom: Mixins.scaleSize(100),
    paddingHorizontal: Layouts.PAD_HORZ_SM,
    borderTopLeftRadius: Mixins.scaleSize(20),
    overflow: 'hidden',
  },
})

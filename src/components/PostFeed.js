import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import PostTeaserFull from './PostTeaserFull'
import PostTeaserFullSkeleton from "./skeleton/PostTeaserFull.skeleton"

export default PostFeed = props => {
  return (
    <View style={styles.postFeed}>
      {props.isLoaded === false
        ? <PostTeaserFullSkeleton />
        : <FlatList
            data={props.data}
            renderItem={({ item, index }) => {
              return (
                <PostTeaserFull
                  key={item._id}
                  _id={item._id}
                  media={item.mediaURLs}
                  text={item.text}
                  tags={item.tags}
                  postedAt={item.postedAt}
                  poster={item.poster}
                  likes={item.likes}
                  openPost={props.openPost}
                />
              )
            }}
            keyExtractor={item => item._id}
          />
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  postFeed: {
    width: '100%',
    paddingTop: Layouts.PAD_VERT,
    paddingHorizontal: Layouts.PAD_HORZ_SM,
    borderTopLeftRadius: Mixins.scaleSize(20),
    overflow: 'hidden',
  },
})

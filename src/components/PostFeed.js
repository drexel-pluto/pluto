import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import PostTeaserFull from './PostTeaserFull'

export default PostFeed = props => {
  const postColorLength = Colors.POST_BG.length

  return (
    <View style={styles.postFeed}>
      <FlatList
        data={props.data}
        renderItem={({ item, index }) => {
          return (
            <PostTeaserFull
              content={item.post}
              bgIndex={index % postColorLength}
            />
          )
        }}
        keyExtractor={item => item._id}
      />
      <Text
        style={[
          { textAlign: 'center', paddingVertical: Mixins.scaleSize(30) },
          Typography.F_SUBTITLE,
        ]}
      >
        You've reached the end of the feed!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  postFeed: {
    width: '100%',
    marginTop: Layouts.PAD_VERT,
    borderTopLeftRadius: Mixins.scaleSize(20),
    overflow: 'hidden',
  },
})

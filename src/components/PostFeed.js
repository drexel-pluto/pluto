import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import PostTeaserFull from './PostTeaserFull'
import PostTeaserFullSkeleton from './skeleton/PostTeaserFull.skeleton'

export default PostFeed = props => {
  return (
    <View style={{flex:1, zIndex: 0}}>
      {props.loading === true ? (
        <>
          {props.header}
          <PostTeaserFullSkeleton />
          <PostTeaserFullSkeleton />
          <PostTeaserFullSkeleton />
        </>
      ) : (
        <FlatList
          data={props.data.slice(0, props.endIndex)}
          contentContainerStyle={{paddingBottom: Layouts.PAD_VERT * 1}}
          onEndReached={() => {
            if (props.data.length > props.endIndex) {
              props.loadMore()
            }
          }}
          removeClippedSubviews={true}
          ListHeaderComponent={props.header}
          style={styles.postFeed}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.feedItem}>
                <PostTeaserFull
                  key={item._id}
                  _id={item._id}
                  media={item.mediaURLs}
                  text={item.text}
                  tags={item.tags}
                  postedAt={item.postedAt}
                  poster={item.poster}
                  likes={item.likes}
                  comments={item.comments.length}
                  openPost={props.openPost}
                  index={props.endIndex ? index - props.endIndex + Math.min(props.endIndex, 10) : index}
                />
              </View>
            )
          }}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  )
}

PostFeed.defaultProps = {
  loadMore: () => {},
  label: "Button Text"
};

const styles = StyleSheet.create({
  feedItem: {
    paddingHorizontal: Layouts.PAD_HORZ_SM,
  },
})

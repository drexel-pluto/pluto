import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import PostTeaser from './PostTeaser'

export default RecentPostList = props => {
  return (
    <FlatList
      style={styles.recentPostList}
      data={props.data}
      renderItem={({ item, index }) => (
        <PostTeaser
          content={item.post}
          poster={item.poster}
          openPost={props.openPost}
        />
      )}
      keyExtractor={item => item.id}
      horizontal={true}
    />
  )
}

const styles = StyleSheet.create({
  recentPostList: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
  },
})

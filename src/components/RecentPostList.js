import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import PostTeaser from './PostTeaser'

export default RecentPostList = props => {
  return (
    <FlatList
      style={styles.recentPostList}
      data={props.data}
      renderItem={({ item, index }) => (
        <PostTeaser content={item.post} author={item.author} />
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

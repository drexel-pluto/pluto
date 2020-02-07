import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import PostTeaser from './PostTeaser'

export default PostFeed = props => {
  return (
    <FlatList
      style={styles.postFeed}
      data={props.data}
      renderItem={({ item }) => (
        <PostTeaser content={item.post} isFull={true} />
      )}
      keyExtractor={item => item._id}
    />
  )
}

const styles = StyleSheet.create({
  postFeed: {
    width: '100%',
  },
})

import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import PostTeaserFull from './PostTeaserFull'

export default PostFeed = props => {
  return (
    <FlatList
      style={styles.postFeed}
      data={props.data}
      renderItem={({ item }) => <PostTeaserFull content={item.post} />}
      keyExtractor={item => item._id}
    />
  )
}

const styles = StyleSheet.create({
  postFeed: {
    width: '100%',
  },
})

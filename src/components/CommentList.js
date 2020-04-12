import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import Comment from './Comment'
import CommentListSkeleton from './skeleton/CommentList.skeleton'
import AddComment from './AddComment'

export default CommentList = props => {
  return (
    <View style={styles.commentList}>
      {props.loading ? (
        <CommentListSkeleton />
      ) : (
        <FlatList
          data={props.data}
          renderItem={({ item }) => <Comment data={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  commentList: {
    width: '100%',
    paddingHorizontal: Layouts.PAD_HORZ_SM,
    paddingVertical: Layouts.PAD_VERT,
  },
})

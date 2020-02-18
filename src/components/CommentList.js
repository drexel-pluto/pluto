import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import Comment from './Comment'
import AddComment from './AddComment'

export default CommentList = props => {
  return (
    <View style={styles.commentList}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <Comment author={item.author} content={item.content} />
        )}
        keyExtractor={item => item.id}
      />
      <AddComment />
    </View>
  )
}

const styles = StyleSheet.create({
  commentList: {
    width: '100%',
  },
})

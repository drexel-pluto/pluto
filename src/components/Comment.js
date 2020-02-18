import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import AuthorHeader from './AuthorHeader'

export default Comment = props => {
  const { id, author, content } = props
  return (
    <View style={styles.comment}>
      <AuthorHeader author={author} />
      <View style={styles.content}>
        <Text>{content.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  comment: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.GRAY_MEDIUM,
  },
})

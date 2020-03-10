import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import AuthorHeader from './AuthorHeader'
import IconButton from './iconButton/IconButton'

export default Comment = props => {
  const { data } = props
  return (
    <View style={styles.comment}>
      <View style={styles.header_wrapper}>
        <AuthorHeader authorId={data.poster._id} time={data.postedAt} />
        <IconButton type="heartPost" />
      </View>
      <View style={styles.content}>
        <Text>{data.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  comment: {
    marginBottom: Mixins.scaleSize(10),
    borderWidth: 1,
    borderColor: Colors.VIOLET.med,
    borderRadius: Mixins.scaleSize(25),
    padding: Mixins.scaleSize(15),
    paddingVertical: Mixins.scaleSize(20),
  },
  header_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Mixins.scaleSize(15),
  },
})

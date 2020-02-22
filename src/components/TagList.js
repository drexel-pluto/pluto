import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import Tag from './Tag'

export default TagList = props => {
  const tagBgs = [Colors.VIOLET, Colors.CREAMSICLE, Colors.CARBONE, Colors.BLUE]

  return (
    <FlatList
      style={styles.TagList}
      data={props.data}
      renderItem={({ item, index }) => (
        <Tag tagName={item.tagName} bgColor={tagBgs[index % tagBgs.length]} />
      )}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  TagList: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
  },
})

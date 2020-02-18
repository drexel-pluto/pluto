import React from 'react'
import { View, ScrollView, FlatList, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import SelectFriendItem from './SelectFriendItem'

export default SelectFriendList = props => {
  return (
    <ScrollView style={styles.FriendSelectList}>
      <Text>Friend Select List</Text>
      <SelectFriendItem />
      <SelectFriendItem />
      <SelectFriendItem />
      <SelectFriendItem />
      <SelectFriendItem />
      <SelectFriendItem />
      {
        // use flatlist with actual data?
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  FriendSelectList: {
    height: 100,
    backgroundColor: Colors.GRAY_DARK,
  },
})

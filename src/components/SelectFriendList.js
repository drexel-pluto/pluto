import React from 'react'
import { View, ScrollView, FlatList, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import SelectFriendItem from './SelectFriendItem'
import SearchInput from './SearchInput'

export default SelectFriendList = props => {
  return (
    <ScrollView style={styles.FriendSelectList}>
      {/* <Text>Friend Select List</Text> */}
      <SearchInput placeholder="search for friends..."/>
      <SelectFriendItem recipients={{"1": false}} friend={{name:"test", id:"1"}}/>
      <SelectFriendItem recipients={{"1": false}} friend={{name:"test", id:"1"}}/>
      <SelectFriendItem recipients={{"1": false}} friend={{name:"test", id:"1"}}/>
      <SelectFriendItem recipients={{"1": false}} friend={{name:"test", id:"1"}}/>
      <SelectFriendItem recipients={{"1": false}} friend={{name:"test", id:"1"}}/>
      <SelectFriendItem recipients={{"1": false}} friend={{name:"test", id:"1"}}/>
      <SelectFriendItem recipients={{"1": false}} friend={{name:"test", id:"1"}}/>
      {
        // use flatlist with actual data?
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  FriendSelectList: {
    // height: 100,
    paddingTop: Layouts.PAD_VERT,
    backgroundColor: Colors.UI_BG,
    height: Mixins.scaleSize(35),
    borderTopLeftRadius: Mixins.scaleSize(35),
    borderTopRightRadius: Mixins.scaleSize(35),
    backgroundColor: Colors.CREAM,
    paddingHorizontal: Layouts.PAD_HORZ,
  },
})

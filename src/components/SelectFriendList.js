import React from 'react'
import { View, ScrollView, FlatList, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import SelectFriendItem from './SelectFriendItem'
import SearchInput from './SearchInput'

export default SelectFriendList = props => {
  console.log(props.data)
  return (
    <ScrollView style={styles.FriendSelectList} stickyHeaderIndices={[0]}>
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: Mixins.scaleSize(20),
        }}
      >
        <SearchInput placeholder="search for friends..." />
      </View>

      <FlatList
        contentContainerStyle={{
          paddingBottom: Mixins.scaleSize(50),
          flex: 1,
        }}
        data={props.data}
        renderItem={({ item, index }) => (
          <SelectFriendItem recipients={{ '1': false }} friend={item.friend} />
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  FriendSelectList: {
    backgroundColor: Colors.UI_BG,
    height: '50%',
    borderTopLeftRadius: Mixins.scaleSize(35),
    borderTopRightRadius: Mixins.scaleSize(35),
    backgroundColor: Colors.CREAM,
    paddingHorizontal: Layouts.PAD_HORZ,
  },
})

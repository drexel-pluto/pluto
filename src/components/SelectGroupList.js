import React from 'react'
import { View, ScrollView, FlatList, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import SelectGroupItem from './SelectGroupItem'

export default SelectGroupList = props => {
  return (
    <View style={styles.selectGroupList}>
      <Text style={Typography.F_H1}>Griend Select List</Text>
      <SelectGroupItem />
      <SelectGroupItem />
      <SelectGroupItem />
    </View>
  )
}

const styles = StyleSheet.create({
  selectGroupList: {
    backgroundColor: Colors.GRAY_DARK,
  },
})

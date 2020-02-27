import React from 'react'
import { View, ScrollView, FlatList, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import SelectGroupItem from './SelectGroupItem'

export default SelectGroupList = props => {
  return (
    <View style={styles.selectGroupList}>
      <Text style={[Typography.F_H1, { marginBottom: Mixins.scaleSize(10) }]}>
        select access
      </Text>
      <FlatList
        style={styles.postFeed}
        data={props.groups}
        extraData={props.recipients}
        renderItem={({ item }) => (
          <SelectGroupItem
            group={item}
            setRecipient={props.setRecipient}
            recipients={props.recipients}
            user={props.user}
          />
        )}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  selectGroupList: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
  },
})

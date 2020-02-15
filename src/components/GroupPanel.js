import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

export default GroupPanel = props => {
  return (
    <View style={styles.groupPanel}>
      <Text style={[styles.title, Typography.F_H2]}>Group Titleeeeee</Text>
      <Text style={[styles.detail]}>Updates from group</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  groupPanel: {
    width: '100%',
    height: 150,
    backgroundColor: Colors.GRAY_LIGHT,
  },
  title: {},
  detail: {},
})

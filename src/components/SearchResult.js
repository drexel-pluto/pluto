import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'

export default SearchResult = props => {
  return (
    <View style={styles.searchResult}>
      <Text>Search Result</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  searchResult: {
    backgroundColor: Colors.GRAY_MEDIUM,
    flexGrow: 1,
  },
})

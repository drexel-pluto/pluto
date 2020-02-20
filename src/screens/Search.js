import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import SearchInput from './../components/SearchInput'
import SearchResult from './../components/SearchResult'

class Search extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={[Layouts.FLEX_CONTAINER]}>
        <View style={styles.screenHeader}>
          <SearchInput />
        </View>
        <SearchResult />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screenHeader: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingTop: Layouts.HEAD_PAD_VERT,
    paddingBottom: Layouts.PAD_VERT,
  },
})

export default Search

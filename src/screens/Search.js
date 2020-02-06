import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import SearchInput from './../components/SearchInput'
import SearchResult from './../components/SearchResult'

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[Layouts.FLEX_CONTAINER]}>
        <SearchInput />
        <SearchResult />
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default Search

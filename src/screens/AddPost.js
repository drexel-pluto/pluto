import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import ScreenHeader from './../components/ScreenHeader'
import AddPostOptionBar from '../components/AddPostOptionBar'
import AddPostInput from '../components/AddPostInput'

class AddPost extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={Layouts.FLEX_CONTAINER}>
        <ScreenHeader />
        <AddPostInput />
        <View style={styles.option_wrapper}>
          <AddPostOptionBar />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  option_wrapper: {},
})

export default AddPost

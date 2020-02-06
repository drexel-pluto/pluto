import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CircleContainer from '../components/CircleContainer'
import SelectFriendList from '../components/SelectFriendList'

class EditGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[styles.editGroupScreen, Layouts.FLEX_CONTAINER]}>
        <ScreenHeader />
        <CircleContainer />
        <SelectFriendList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  editGroupScreen: {
    backgroundColor: Colors.GRAY_DARK,
  },
})

export default EditGroup

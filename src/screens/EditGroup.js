import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CircleContainer from '../components/CircleContainer'
import SelectFriendList from '../components/SelectFriendList'
import InputHeader from '../components/InputHeader'
import EditGroupName from '../components/EditGroupName'

class EditGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: undefined, // user's input
    }
  }

  onChangeText = text => this.setState({ text })

  onSubmit = () => {}

  render() {
    return (
      <View style={[styles.editGroupScreen, Layouts.FLEX_CONTAINER]}>
        <EditGroupName />
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

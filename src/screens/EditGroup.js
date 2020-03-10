import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CircleContainer from '../components/CircleContainer'
import SelectFriendList from '../components/SelectFriendList'
import InputHeader from '../components/InputHeader'
import EditGroupName from '../components/EditGroupName'
import Button from '../components/Button'

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
      <KeyboardAvoidingView style={[styles.editGroupScreen, Layouts.FLEX_CONTAINER]} behavior="padding">
        <View style={styles.actions}>
          <Button type="text" text="cancel" color="Colors.BLACK_ROCK" />
          <Button type="outline" text="update" color="Colors.BLACK_ROCK" />
        </View>
        <EditGroupName />
        <CircleContainer />
        <SelectFriendList friends={this.props.friends} toggleMember={this.props.toggleMember} members={this.props.members}/>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  editGroupScreen: {
    backgroundColor: Colors.UI_BG,
  },
  actions: {
    flexDirection: 'row',
    color: 'white',
    paddingVertical: Mixins.scaleSize(45),
    paddingHorizontal: Layouts.PAD_HORZ,
    justifyContent: 'space-between',
  },
})

export default EditGroup

import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CircleContainer from '../components/CircleContainer'
import SelectFriendList from '../components/SelectFriendList'
import InputHeader from '../components/InputHeader'
import EditGroupName from '../components/EditGroupName'
import Button from '../components/Button'
import MiniPhysics from '../components/physics/mini'

class EditGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: undefined, // user's input
    }

    this.physics = React.createRef();
  }

  onChangeText = text => this.setState({ text })

  toggleMember = (friend) => {
    if (this.props.members.includes(friend._id)) {
      this.physics.removeFriend(friend._id);
    } else {
      this.physics.addFriend(friend);
    }
    this.props.toggleMember(friend._id);
  }

  render() {
    return (
      <KeyboardAvoidingView style={[styles.editGroupScreen]} behavior="height">
        <ScreenHeader
          leftItems={
            <Button type="text" text="cancel" color="Colors.BLACK_ROCK" _onPress={()=>this.props.cancelEdit()}/>
          }
          rightItems={
            <Button 
              type="outline" 
              text={this.props.isNew ? "create" : "update"} 
              color="Colors.BLACK_ROCK" 
              _onPress={()=>this.props.doneEdit()} 
              disabled={!this.props.canSubmit}
            />
          }
        />
        <EditGroupName onChange={this.props.setName} value={this.props.name}/>
        <View style={{flex:1}} pointerEvents="none"/>
        <MiniPhysics 
          style={{ position: 'absolute', left: 0, top: 0, bottom: 0, right: 0, zIndex: -5}}
          friends={this.props.friends}
          members={this.props.members}
          ref={(ref) => {this.physics = ref}}
        />
        <SelectFriendList friends={this.props.friends} toggleMember={this.toggleMember} members={this.props.members}/>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  editGroupScreen: {
    backgroundColor: Colors.VIOLET.light,
    flex: 1,
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

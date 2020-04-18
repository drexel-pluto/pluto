import React from 'react'
import { connect } from 'react-redux'
import EditGroup from '../screens/EditGroup'
import {
  toggleMember,
  setName,
  newGroup,
  updateGroup,
} from '../redux/reducers/editGroup.reducer'
import { getMe } from '../redux/reducers/user.reducer'
import { CommonActions } from '@react-navigation/native'

class EditGroupContainer extends React.Component {
  componentWillMount() {}

  doneEdit() {
    if (this.props.isNew) {
      this.props.newGroup(this.props.members, this.props.name).then(action => {
        if (action.type.endsWith('SUCCESS')) {
          this.props.getMe().then(this.goBack())
        }
      })
    } else {
      this.props
        .updateGroup()
        .then(action => {
          if (action.type.endsWith('SUCCESS')) {
            return this.props.getMe()
          }
        })
        .then(action => {
          if (action.type.endsWith('SUCCESS')) {
            this.props.navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: 'Home' }],
              })
            )
          }
        })
    }
  }

  cancelEdit() {
    this.goBack()
  }

  goBack() {
    let onBack = this.props.route.params?.onBack ?? false
    if (onBack) {
      onBack()
    }
    this.props.navigation.goBack({
      doneEdit: true,
    })
  }

  render() {
    return (
      <EditGroup
        navigation={this.props.navigation}
        route={this.props.route}
        friends={this.props.friends}
        toggleMember={this.props.toggleMember}
        members={this.props.members}
        doneEdit={() => this.doneEdit()}
        cancelEdit={() => this.cancelEdit()}
        canSubmit={this.props.canSubmit}
        name={this.props.name}
        setName={this.props.setName}
        isNew={this.props.isNew}
      />
    )
  }
}

const mapStateToProps = state => ({
  friends: state.user.friends,
  members: state.editGroup.members,
  canSubmit: state.editGroup.canSubmit,
  name: state.editGroup.name,
  isNew: state.editGroup.isNew,
})

const mapDispatchToProps = {
  toggleMember,
  setName,
  newGroup,
  getMe,
  updateGroup,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupContainer)

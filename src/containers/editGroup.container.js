import React from 'react'
import { connect } from 'react-redux'
import EditGroup from '../screens/EditGroup'
import { toggleMember, setName, newGroup } from '../redux/reducers/editGroup.reducer'

class EditGroupContainer extends React.Component {
  componentWillMount() {}
  
  doneEdit() {
    this.props.newGroup(this.props.members, this.props.name).then(action => {
      if (action.type.endsWith("SUCCESS")) {
        let resetHome = this.props.route.params?.reset ?? false;
        if (resetHome) {
          resetHome();
        }
        this.goBack();
      }
    });
  }

  cancelEdit() {
    this.goBack();
  }

  goBack() {
    let onBack = this.props.route.params?.onBack ?? false;
    if (onBack) {
      onBack();
    }
    this.props.navigation.goBack({
      doneEdit: true
    });
  }

  render() {
    return (
      <EditGroup
        navigation={this.props.navigation}
        route={this.props.route}
        friends={this.props.friends}
        toggleMember={this.props.toggleMember}
        members={this.props.members}
        doneEdit={()=>this.doneEdit()}
        cancelEdit={()=>this.cancelEdit()}
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
  name : state.editGroup.name,
  isNew : state.editGroup.isNew
})

const mapDispatchToProps = {
  toggleMember,
  setName,
  newGroup
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupContainer)

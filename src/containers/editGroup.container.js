import React from 'react'
import { connect } from 'react-redux'
import EditGroup from '../screens/EditGroup'
import { toggleMember } from '../redux/reducers/editGroup.reducer'

class EditGroupContainer extends React.Component {
  componentWillMount() {}
  
  doneEdit() {
    this.goBack();
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
      />
    )
  }
}

const mapStateToProps = state => ({
  friends: state.user.friends,
  members: state.editGroup.members
})

const mapDispatchToProps = {
  toggleMember
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupContainer)

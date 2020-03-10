import React from 'react'
import { connect } from 'react-redux'
import EditGroup from '../screens/EditGroup'
import { toggleMember } from '../redux/reducers/editGroup.reducer'

class EditGroupContainer extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <EditGroup
        navigation={this.props.navigation}
        route={this.props.route}
        friends={this.props.friends}
        toggleMember={this.props.toggleMember}
        members={this.props.members}
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

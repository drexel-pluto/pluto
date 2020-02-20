import React from 'react'
import { connect } from 'react-redux'
import AddPostPermission from '../screens/addPost/AddPostPermission'
import { setRecipient } from '../redux/reducers/create.reducer'

class AddPostPermissionContainer extends React.Component {
  render() {
    return (
      <AddPostPermission
        navigation={this.props.navigation}
        groups={this.props.groups}
        recipients={this.props.recipients}
        setRecipient={this.props.setRecipient}
      />
    )
  }
}

const mapStateToProps = state => ({
  groups: state.user.groups,
  recipients: state.create.recipients,
})

const mapDispatchToProps = {
  setRecipient,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostPermissionContainer)

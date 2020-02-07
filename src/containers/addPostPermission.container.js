import React from 'react'
import { connect } from 'react-redux'
import AddPostPermission from '../screens/addPost/AddPostPermission'

class AddPostPermissionContainer extends React.Component {
  render() {
    return <AddPostPermission navigation={this.props.navigation} />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostPermissionContainer)

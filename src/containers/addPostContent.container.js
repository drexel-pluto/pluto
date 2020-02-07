import React from 'react'
import { connect } from 'react-redux'
import AddPostContent from '../screens/addPost/AddPostContent'
import AddPostPermission from '../screens/addPost/AddPostPermission'

class AddPostContentContainer extends React.Component {
  render() {
    return <AddPostContent navigation={this.props.navigation} />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostContentContainer)

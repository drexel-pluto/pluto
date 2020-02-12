import React from 'react'
import { connect, Button } from 'react-redux'
import AddPostContent from '../screens/addPost/AddPostContent'
import { submitPost } from '../redux/reducers/create.reducer'

class AddPostContentContainer extends React.Component {
  render() {
    return (
      <AddPostContent
        navigation={this.props.navigation}
        submitPost={this.props.submitPost}
      />
    )
  }
}

const mapStateToProps = state => ({
  test: state.user,
})

const mapDispatchToProps = {
  submitPost,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostContentContainer)

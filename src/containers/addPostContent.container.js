import React from 'react'
import { connect, Button } from 'react-redux'
import AddPostContent from '../screens/addPost/AddPostContent'
import { submitPost } from '../redux/reducers/create.reducer'

class AddPostContentContainer extends React.Component {
  submitPost(text) {
    this.props.submitPost(text).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        this.props.navigation.navigate('Home')
        // TODO:: navigate to new post instead of home
      } else {
        // failure to post
        // TODO:: error popup
      }
    })
  }

  render() {
    return (
      <AddPostContent
        navigation={this.props.navigation}
        submitPost={text => {
          this.submitPost(text)
        }}
        pendingSubmission={this.props.pendingSubmission}
      />
    )
  }
}

const mapStateToProps = state => ({
  pendingSubmission: state.create.pendingSubmission,
})

const mapDispatchToProps = {
  submitPost,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostContentContainer)

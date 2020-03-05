import React from 'react'
import { connect, Button } from 'react-redux'
import AddPostContent from '../screens/addPost/AddPostContent'
import {
  submitPost,
  addImage,
  removeImage,
  setRecipient,
  resetRecipient,
  resetMedia,
} from '../redux/reducers/create.reducer'

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
        route={this.props.route} 
        submitPost={text => {
          this.submitPost(text)
        }}
        pendingSubmission={this.props.pendingSubmission}
        addImage={this.props.addImage}
        removeImage={this.props.removeImage}
        media={this.props.media}
        recipients={this.props.recipients}
        setRecipient={this.props.setRecipient}
        resetRecipient={this.props.resetRecipient}
        friends={this.props.friends}
        resetMedia={this.props.resetMedia}
      />
    )
  }
}

const mapStateToProps = state => ({
  pendingSubmission: state.create.pendingSubmission,
  media: state.create.media,
  recipients: state.create.recipients,
  friends: state.user.friends,
})

const mapDispatchToProps = {
  submitPost,
  addImage,
  removeImage,
  setRecipient,
  resetRecipient,
  resetMedia,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostContentContainer)

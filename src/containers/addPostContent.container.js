import React from 'react'
import { connect, Button } from 'react-redux'
import { StackActions } from '@react-navigation/native';
import AddPostContent from '../screens/addPost/AddPostContent'
import {
  submitPost,
  addImage,
  removeImage,
  setRecipient,
  resetRecipient,
  resetMedia,
} from '../redux/reducers/create.reducer'
import { newToast } from '../redux/reducers/toast.reducer'

class AddPostContentContainer extends React.Component {
  submitPost(text, tags) {
    if (text.length < 1) {
      this.props.newToast({content: "Text field cannot be empty"})
      return Promise.reject();
    }

    let recipients = 0;
    for (let key of Object.keys(this.props.recipients)) {
      if (this.props.recipients[key] === true) {
        recipients ++;
      }
    };

    // must be greater than 1 because poster's id is always true
    if (recipients <= 1) {
      this.props.newToast({content: "Post missing recipients"})
      return Promise.reject();
    }
    
    return this.props.submitPost(text, tags).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        return this.props.navigation.dispatch(
          StackActions.replace('Post', {
            postId: action.payload.data._id
          })
        );
        // TODO:: navigate to new post instead of home
      } else {
        console.log(action.payload);
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
        submitPost={(text, tags) => {
          return this.submitPost(text, tags)
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
  newToast
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPostContentContainer)

import React from 'react'
import { connect } from 'react-redux'
import Post from '../screens/Post'
import { sendComment, deletePost } from '../redux/reducers/post.reducer'
import { connectActionSheet } from '@expo/react-native-action-sheet'
import { getPosts } from '../redux/reducers/group.reducer'
import { fetchPostAndPoster } from '../redux/reducers/post.reducer'

class PostContainer extends React.Component {
  componentWillMount() {
    const { params } = this.props.route
    const postId = params ? params.postId : null

    if (postId) {
      this.props.fetchPostAndPoster(postId);
    }
  }

  deletePost() {
    this.props.deletePost(this.props.post.id).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        return this.props
          .getPosts(this.props.lastGroupId)
          .then(this.props.navigation.navigate('GroupFeed'))
      }
    })
  }

  showOptions() {
    const options = ['Delete Post', 'Cancel']
    const destructiveButtonIndex = 0
    const cancelButtonIndex = 1

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex == destructiveButtonIndex) {
          this.deletePost()
        }
      }
    )
  }

  render() {
    return (
      <Post
        navigation={this.props.navigation}
        route={this.props.route}
        data={this.props.post}
        sendComment={this.props.sendComment}
        loading={this.props.loading}
        showOptions={() => this.showOptions()}
        userId={this.props.userId}
      />
    )
  }
}

const mapStateToProps = state => ({
  post: state.post,
  loading: state.post.loading,
  userId: state.user.userData.id,
  lastGroupId: state.group.id,
})

const mapDispatchToProps = {
  sendComment,
  deletePost,
  getPosts,
  fetchPostAndPoster,
}

export default connectActionSheet(
  connect(mapStateToProps, mapDispatchToProps)(PostContainer)
)

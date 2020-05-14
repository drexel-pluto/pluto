import React from 'react'
import { connect, Button } from 'react-redux'
import AddFriend from '../screens/AddFriend'
import {
  getFriendRequests,
  acceptFriendRequest,
  rejectFriendRequest,
  sendFriendRequest,
  cancelFriendRequest
} from '../redux/reducers/addFriend.reducer'
import {
  getMe
} from '../redux/reducers/user.reducer'
import { newToast } from '../redux/reducers/toast.reducer'

class AddFriendContainer extends React.Component {
  constructor(props) {
    super(props)
    // props.getFriendRequests();
  }

  accept(username) {
    this.props.acceptFriendRequest(username).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        return this.props.getMe();
      }
    })

    let onAccept = this.props.route.params?.onAccept ?? false
    if (onAccept) {
      onAccept()
    }
  }

  reject(username) {
    this.props.rejectFriendRequest(username)
  }

  cancel(username) {
    this.props.cancelFriendRequest(username)
  }

  onSubmit(username) {
    this.props.sendFriendRequest(username).then(
      (action) => {
        if (action.type.endsWith('SUCCESS')) {
          //clear text
          this.props.newToast({
            content: "friend request sent to " + username + "!"
          })
          this.props.getFriendRequests();
        } else {

          this.props.newToast({
            content: "Could not send friend request",
            isErr: true
          })
        }
      }
    )
  }

  render() {
    return (
      <AddFriend
        navigation={this.props.navigation}
        route={this.props.route}
        username={this.props.username}
        requests={this.props.requests}
        sent={this.props.sent}
        onSubmit={text => this.onSubmit(text)}
        accept={username => this.accept(username)}
        reject={username => this.reject(username)}
        cancel={username => this.cancel(username)}
      />
    )
  }
}

const mapStateToProps = state => ({
  username: state.user.userData.username,
  requests: state.addFriend.friendRequests,
  sent: state.addFriend.sentRequests
})

const mapDispatchToProps = {
  getFriendRequests,
  acceptFriendRequest,
  rejectFriendRequest,
  sendFriendRequest,
  cancelFriendRequest,
  newToast,
  getMe,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendContainer)

import React from 'react'
import { connect, Button } from 'react-redux'
import AddFriend from '../screens/AddFriend'
import {updateFriendRequests, acceptFriendRequest, rejectFriendRequest} from "../redux/reducers/addFriend.reducer"

class AddFriendContainer extends React.Component {
  constructor(props) {
    super(props);
    // props.updateFriendRequests();
  }

  accept(username) {
    this.props.acceptFriendRequest(username);

    let onAccept = this.props.route.params?.onAccept ?? false;
    if (onAccept) {
      onAccept();
    }
    
  }

  reject(username) {
    this.props.rejectFriendRequest(username);
  }

  render() {
    return (
      <AddFriend 
        navigation={this.props.navigation} 
        route={this.props.route} 
        username={this.props.username} 
        requests={this.props.requests}
        accept={(username)=>this.accept(username)}
        reject={(username)=>this.reject(username)}
      />
    )
  }
}

const mapStateToProps = state => ({
  username: state.user.userData.username,
  requests: state.addFriend.friendRequests
})

const mapDispatchToProps = {
  updateFriendRequests,
  acceptFriendRequest,
  rejectFriendRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendContainer)

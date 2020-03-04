import React from 'react'
import { connect, Button } from 'react-redux'
import AddFriend from '../screens/AddFriend'
import {updateFriendRequests} from "../redux/reducers/addFriend.reducer"

class AddFriendContainer extends React.Component {
  constructor(props) {
    super(props);
    props.updateFriendRequests();
  }

  render() {
    return (
      <AddFriend 
        navigation={this.props.navigation} 
        route={this.props.route} 
        username={this.props.username} 
      />
    )
  }
}

const mapStateToProps = state => ({
  username: state.user.userData.username
})

const mapDispatchToProps = {
  updateFriendRequests
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendContainer)

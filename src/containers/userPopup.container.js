import React from 'react'
import { connect } from 'react-redux'
import UserPopup from '../screens/UserPopup'
import { addFriend } from '../redux/reducers/addFriend.reducer'

class UserPopupContainer extends React.Component {
  send() {
    console.log("send");
    this.props.addFriend().then(action => {
      if (action.type.endsWith('SUCCESS')) {
        this.props.navigation.goBack();
      } else {
        //ERROR SENDING
      }
    });
  }
  cancel() {
    console.log("cancel");
    this.props.navigation.goBack();
  }
  render() {
    return (
      <UserPopup
        send={() => this.send()}
        cancel={() => this.cancel()}
        user={this.props.user}
      />
    )
  }
}

const mapStateToProps = state => ({
  user: state.addFriend.user
})

const mapDispatchToProps = {
  addFriend
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPopupContainer)

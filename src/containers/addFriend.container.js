import React from 'react'
import { connect, Button } from 'react-redux'
import AddFriend from '../screens/AddFriend'

class AddFriendContainer extends React.Component {
  render() {
    return <AddFriend navigation={this.props.navigation} />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendContainer)

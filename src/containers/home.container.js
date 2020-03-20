import React from 'react'
import { connect } from 'react-redux'
import HomeScreen from '../screens/Home.js'
import { setGroup } from '../redux/reducers/group.reducer'
import { getMe } from '../redux/reducers/user.reducer'
import { updateFriendRequests } from '../redux/reducers/addFriend.reducer'

class AuthLoadingContainer extends React.Component {
  constructor(props) {
    super(props)
    props.updateFriendRequests()
  }

  reset() {
    return this.props.getMe(this.props.auth)
  }

  render() {
    return (
      <HomeScreen
        openGroup={id => this.openGroup(id)}
        groups={this.props.groups}
        friends={this.props.friends}
        userId={this.props.userId}
        navigation={this.props.navigation}
        route={this.props.route}
        reset={() => this.reset()}
        goToAddFriend={onAcceptCallback => this.goToAddFriend(onAcceptCallback)}
        requestNum={this.props.requestNum}
      />
    )
  }

  openGroup(groupId) {
    this.props.setGroup(groupId)
    this.props.navigation.navigate('GroupFeed')
  }

  goToAddFriend(onAcceptCallback) {
    this.props.navigation.navigate('AddFriend', {
      onAccept: () => {
        onAcceptCallback()
      },
    })
  }
}

const mapStateToProps = state => ({
  groups: state.user.groups,
  friends: state.user.friends,
  userId: state.user.userData.id,
  auth: state.user.authToken,
  requestNum: state.addFriend.friendRequests.length,
})

const mapDispatchToProps = {
  setGroup,
  getMe,
  updateFriendRequests,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingContainer)

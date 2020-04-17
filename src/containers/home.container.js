import React from 'react'
import { connect } from 'react-redux'
import HomeScreen from '../screens/Home.js'
import { setGroup } from '../redux/reducers/group.reducer'
import { getMe, resetHome, setSwipeIndex } from '../redux/reducers/user.reducer'
import { updateFriendRequests } from '../redux/reducers/addFriend.reducer'

class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    props.updateFriendRequests()
    this.screenRef = React.createRef();
  }

  reset() {
    return this.props.getMe();
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
        swipeIndex={this.props.swipeIndex}
        setSwipeIndex={this.props.setSwipeIndex}
        physicsKey={this.props.physicsKey}
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
  requestNum: state.addFriend.friendRequests.length,
  swipeIndex: state.user.swipeIndex,
  physicsKey: state.user.key,
})

const mapDispatchToProps = {
  setGroup,
  getMe,
  updateFriendRequests,
  resetHome,
  setSwipeIndex
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)

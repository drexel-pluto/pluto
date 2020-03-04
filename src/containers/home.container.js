import React from 'react'
import { connect } from 'react-redux'
import HomeScreen from '../screens/Home.js'
import { setGroup } from '../redux/reducers/group.reducer'

class AuthLoadingContainer extends React.Component {
  render() {
    return (
      <HomeScreen
        openGroup={id => this.openGroup(id)}
        groups={this.props.groups}
        friends={this.props.friends}
        userId={this.props.userId}
        navigation={this.props.navigation}
        route={this.props.route} 
      />
    )
  }

  openGroup(groupId) {
    this.props.setGroup(groupId)
    this.props.navigation.navigate('GroupFeed')
  }
}

const mapStateToProps = state => ({
  groups: state.user.groups,
  friends: state.user.friends,
  userId: state.user.userData.id,
})

const mapDispatchToProps = {
  setGroup,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingContainer)

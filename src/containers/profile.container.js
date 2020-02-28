import React from 'react'
import { connect } from 'react-redux'
import Profile from '../screens/Profile.js'
import { fetchUser } from '../redux/reducers/profile.reducer'

class ProfileContainer extends React.Component {
  componentWillMount() {
    const { params } = this.props.navigation.state
    const userId = params ? params.userId : null

    if (userId) {
      this.props.fetchUser(userId)
    }
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        navigation={this.props.navigation}
        myId={this.props.myId}
      />
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  myId: state.user.userData.id
})

const mapDispatchToProps = {
  fetchUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

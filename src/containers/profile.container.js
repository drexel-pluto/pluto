import React from 'react'
import { connect } from 'react-redux'
import Profile from '../screens/Profile.js'
import { fetchUser } from '../redux/reducers/profile.reducer'
import { openPost } from '../redux/reducers/post.reducer'

class ProfileContainer extends React.Component {
  componentWillMount() {
    const { params } = this.props.route
    const userId = params ? params.userId : null

    if (userId) {
      this.props.fetchUser(userId)
    }
  }

  _openPost(post_id, poster) {
    this.props.openPost(post_id, poster)
    this.props.navigation.navigate('Post')
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        navigation={this.props.navigation}
        route={this.props.route}
        myId={this.props.myId}
        openPost={(id, poster) => this._openPost(id, poster)}
      />
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  myId: state.user.userData.id,
})

const mapDispatchToProps = {
  fetchUser,
  openPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

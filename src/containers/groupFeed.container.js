import React from 'react'
import { connect } from 'react-redux'
import GroupFeed from '../screens/GroupFeed.js'
import { fetchPost, setPoster } from '../redux/reducers/post.reducer'

class AuthLoadingContainer extends React.Component {
  openPost(post_id, poster) {
    this.props.fetchPost(post_id)
    this.props.setPoster(poster)
    this.props.navigation.navigate('Post')
  }

  render() {
    return (
      <GroupFeed
        group={this.props.group}
        navigation={this.props.navigation}
        route={this.props.route} 
        openPost={(id, poster) => this.openPost(id, poster)}
        user={this.props.user}
      />
    )
  }
}

const mapStateToProps = state => ({
  group: state.group,
  user: state.user.userData,
})

const mapDispatchToProps = {
  fetchPost,
  setPoster,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingContainer)

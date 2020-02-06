import React from 'react'
import { connect } from 'react-redux'
import HomeScreen from '../screens/Home.js'
import { getPosts } from '../redux/reducers/group.reducer'

class AuthLoadingContainer extends React.Component {
  render() {
    return (
      <HomeScreen
        openGroup={id => this.openGroup(id)}
        groups={this.props.groups}
      />
    )
  }

  openGroup(groupId) {
    this.props.getPosts(groupId)
    this.props.navigation.navigate('GroupFeed')
  }
}

const mapStateToProps = state => ({
  groups: state.user.groups,
})

const mapDispatchToProps = {
  getPosts,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingContainer)

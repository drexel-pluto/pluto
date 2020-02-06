import React from 'react'
import { connect } from 'react-redux'
import HomeScreen from '../screens/Home.js'

class AuthLoadingContainer extends React.Component {
  render() {
    return (
      <HomeScreen
        openGroup={id => this.openGroup()}
        groups={this.props.groups}
      />
    )
  }

  openGroup(groupId) {
    this.props.navigation.navigate('GroupFeed')
  }
}

const mapStateToProps = state => ({
  groups: state.user.groups,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingContainer)

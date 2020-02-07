import React from 'react'
import { connect } from 'react-redux'
import GroupFeed from '../screens/GroupFeed.js'

class AuthLoadingContainer extends React.Component {
  render() {
    return (
      <GroupFeed group={this.props.group} navigation={this.props.navigation} />
    )
  }
}

const mapStateToProps = state => ({
  group: state.group,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingContainer)

import React from 'react'
import { connect } from 'react-redux'
import GroupFeed from '../screens/GroupFeed.js'

class AuthLoadingContainer extends React.Component {
  render() {
    return React.createElement(GroupFeed)
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingContainer)

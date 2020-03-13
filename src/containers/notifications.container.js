import React from 'react'
import { connect } from 'react-redux'
import Notifications from '../screens/Notifications'

class NotificationsContainer extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <Notifications
        navigation={this.props.navigation}
        route={this.props.route}
      />
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer)

import React from 'react'
import { connect } from 'react-redux'
import Notifications from '../screens/Notifications'
import { getNotifications } from '../redux/reducers/notifications.reducer'

class NotificationsContainer extends React.Component {
  componentWillMount() {
    this.props.getNotifications();
  }

  render() {
    return (
      <Notifications
        navigation={this.props.navigation}
        route={this.props.route}
        notifications={this.props.notifications}
      />
    )
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications.notifications
})

const mapDispatchToProps = {
  getNotifications
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsContainer)

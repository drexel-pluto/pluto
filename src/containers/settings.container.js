import React from 'react'
import { connect } from 'react-redux'
import Settings from '../screens/Settings.js'
import {logout} from '../redux/reducers/user.reducer'
class SettingsContainer extends React.Component {
  logout() {
    this.props.navigation.navigate('Login');
    this.props.logout();
  }
  render() {
    return (
      <Settings
        navigation={this.props.navigation}
        route={this.props.route} 
        logout={() => this.logout()}
      />
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)

import React from 'react'
import { connect } from 'react-redux'
import AuthLoadingScreen from '../screens/auth/AuthLoading'
import { init, initLinkListener } from '../redux/reducers/user.reducer'

class AuthLoadingContainer extends React.Component {
  render() {
    return React.createElement(AuthLoadingScreen)
  }

  componentDidMount() {
    this.props
      .init()
      .then(action => {
        this.props.navigation.navigate(
          action.type.endsWith('SUCCESS') ? 'App' : 'Login'
        )
        if (action.type.endsWith('SUCCESS')) {
          this.props.initLinkListener()
        }
      })
      .catch(() => {
        this.props.navigation.navigate('Login')
      })
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  token: state.user.authToken,
})

const mapDispatchToProps = {
  init,
  initLinkListener,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingContainer)

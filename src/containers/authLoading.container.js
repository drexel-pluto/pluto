import React from 'react'
import { connect } from 'react-redux'
import AuthLoadingScreen from '../screens/auth/AuthLoading'
import { init } from '../redux/reducers/user.reducer'

class AuthLoadingContainer extends React.Component {
  render() {
    return React.createElement(AuthLoadingScreen)
  }

  componentDidMount() {
    this.props.init().then(() => {
      this.props.navigation.navigate(
        this.props.token !== null ? 'App' : 'Login'
      )
    })
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  token: state.user.authToken,
})

const mapDispatchToProps = {
  init,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingContainer)

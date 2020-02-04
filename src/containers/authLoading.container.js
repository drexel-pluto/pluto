import React from 'react'
import { connect } from 'react-redux'
import AuthLoadingScreen from '../screens/auth/AuthLoading'
import { getUserToken } from '../redux/reducers/user.reducer'

class AuthLoadingContainer extends React.Component {
  render() {
    return React.createElement(AuthLoadingScreen)
  }

  componentDidMount() {
    this.props.getUserToken().then(() => {
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
  getUserToken,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingContainer)

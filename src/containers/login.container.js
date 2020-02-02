import React from 'react'
import { connect } from 'react-redux'
import LoginScreen from '../screens/login'
import { login } from '../redux/reducers/user.reducer'

class LoginContainer extends React.Component {
  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.navigation.navigate('App')
    }
  }

  login(username, password) {
    this.props.login({ username, password }).then(() => {
      this.props.navigation.navigate('App')
    })
  }

  render() {
    return (
      <LoginScreen
        login={(username, password) => this.login(username, password)}
        error={this.props.error}
      />
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  error: state.user.error,
})

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

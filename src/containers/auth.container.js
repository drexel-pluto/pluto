import React from 'react'
import { connect } from 'react-redux'
import LoginScreen from '../screens/auth/Login'
import CreateScreen from '../screens/auth/CreateProfile'
import {
  login,
  createProfile,
  setIsCreate,
  saveUserToken,
} from '../redux/reducers/user.reducer'

class AuthContainer extends React.Component {
  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.navigation.navigate('App')
    }
  }

  login(username, password) {
    this.props.login({ username, password }).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        this.props.saveUserToken(action.payload.data.authToken)
        this.props.navigation.navigate('App')
      }
    })
  }

  create(userData) {
    this.props.createProfile(userData).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        console.log('account successfully created')
        this.login(userData.username, userData.password)
      }
    })
  }

  render() {
    return this.props.isCreate ? (
      <CreateScreen
        create={userData => this.create(userData)}
        error={this.props.error}
        setIsCreate={bool => this.props.setIsCreate(bool)}
      />
    ) : (
      <LoginScreen
        login={(username, password) => this.login(username, password)}
        error={this.props.error}
        setIsCreate={bool => this.props.setIsCreate(bool)}
      />
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  error: state.user.error,
  isCreate: state.user.isCreate,
})

const mapDispatchToProps = {
  login,
  createProfile,
  setIsCreate,
  saveUserToken,
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)

import { createSwitchNavigator } from 'react-navigation'
import LoginContainer from '../containers/login.container'

const AuthNavigator = createSwitchNavigator(
  {
    Login: LoginContainer,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  }
)

export default AuthNavigator

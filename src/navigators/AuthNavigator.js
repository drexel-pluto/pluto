import { createSwitchNavigator } from 'react-navigation'
import AuthContainer from '../containers/auth.container'

const AuthNavigator = createSwitchNavigator(
  {
    Login: AuthContainer,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  }
)

export default AuthNavigator

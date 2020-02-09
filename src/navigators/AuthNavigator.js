import { createSwitchNavigator } from 'react-navigation'
import AuthContainer from '../containers/auth.container'
import AuthLoadingContainer from '../containers/authLoading.container'

const AuthNavigator = createSwitchNavigator(
  {
    Login: AuthContainer,
    Loading: AuthLoadingContainer,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Loading',
  }
)

export default AuthNavigator

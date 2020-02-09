import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'

const RootNavigator = createSwitchNavigator(
  {
    App: AppNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'Auth',
  }
)

let Navigation = createAppContainer(RootNavigator)

export default Navigation

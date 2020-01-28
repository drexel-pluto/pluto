import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AppNavigator from './AppNavigator'

const RootNavigator = createSwitchNavigator(
  {
    App: AppNavigator,
  },
  {
    initialRouteName: 'App',
  }
)

let Navigation = createAppContainer(RootNavigator)

export default Navigation

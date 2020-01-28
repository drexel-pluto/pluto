import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/Home'
import GroupFeed from '../screens/GroupFeed'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  GroupFeed: GroupFeed,
})

export default AppNavigator

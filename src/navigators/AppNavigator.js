import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/Home'
import GroupFeed from '../screens/GroupFeed'
import Profile from '../screens/Profile'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  GroupFeed: GroupFeed,
  Profile: Profile,
})

export default AppNavigator

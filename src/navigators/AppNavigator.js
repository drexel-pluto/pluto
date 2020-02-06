import { createStackNavigator } from 'react-navigation-stack'
import HomeContainer from '../containers/home.container'
import GroupFeedContainer from '../containers/groupFeed.container'

const AppNavigator = createStackNavigator({
  Home: HomeContainer,
  GroupFeed: GroupFeedContainer,
})

export default AppNavigator

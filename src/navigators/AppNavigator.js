import { createStackNavigator } from 'react-navigation-stack'
import HomeContainer from '../containers/home.container'
import GroupFeedContainer from '../containers/groupFeed.container'
import profileContainer from '../containers/profile.container'
import AddPostNavigator from './AddPostNavigator'

const AppNavigator = createStackNavigator({
  Home: HomeContainer,
  GroupFeed: GroupFeedContainer,
  Profile: profileContainer,
  AddPost: AddPostNavigator,
})

export default AppNavigator

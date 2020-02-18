import { createStackNavigator } from 'react-navigation-stack'
import HomeContainer from '../containers/home.container'
import GroupFeedContainer from '../containers/groupFeed.container'
import profileContainer from '../containers/profile.container'
import AddPostNavigator from './AddPostNavigator'
import { Colors } from './../styles/index'

const AppNavigator = createStackNavigator(
  {
    Home: HomeContainer,
    GroupFeed: GroupFeedContainer,
    Profile: profileContainer,
    AddPost: AddPostNavigator,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: Colors.PLUTO_WHITE },
    },
  }
)

export default AppNavigator

import { createStackNavigator } from 'react-navigation-stack'
import HomeContainer from '../containers/home.container'
import GroupFeedContainer from '../containers/groupFeed.container'
import profileContainer from '../containers/profile.container'
import PostContainer from '../containers/post.container'
import AddPostNavigator from './AddPostNavigator'
import SettingsContainer from '../containers/settings.container'
import { Colors } from './../styles/index'

const AppNavigator = createStackNavigator(
  {
    Home: HomeContainer,
    GroupFeed: GroupFeedContainer,
    Profile: profileContainer,
    AddPost: AddPostNavigator,
    Post: PostContainer,
    Settings: SettingsContainer
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: Colors.PLUTO_WHITE },
    },
  }
)

export default AppNavigator

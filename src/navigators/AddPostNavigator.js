import { createStackNavigator } from 'react-navigation-stack'
import AddPostContentCont from '../containers/addPostContent.container'
import AddPostPermissionsCont from '../containers/addPostPermission.container'

const AddpostNavigator = createStackNavigator(
  {
    AddPostContent: AddPostContentCont,
    AddPostPermissions: AddPostPermissionsCont,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'AddPostContent',
  }
)

export default AddpostNavigator

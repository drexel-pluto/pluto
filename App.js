import React from 'react'
import { registerRootComponent } from 'expo'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import PlutoStatusBar from './src/components/PlutoStatusBar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Colors } from './src/styles/index'
import * as Font from 'expo-font'

import AuthContainer from './src/containers/auth.container'
import AuthLoadingContainer from './src/containers/authLoading.container'
import HomeContainer from './src/containers/home.container'
import GroupFeedContainer from './src/containers/groupFeed.container'
import profileContainer from './src/containers/profile.container'
import PostContainer from './src/containers/post.container'
import SettingsContainer from './src/containers/settings.container'
import AddFriendContainer from '././src/containers/addFriend.container'
import AddPostContentCont from './src/containers/addPostContent.container'
import AddPostPermissionsCont from './src/containers/addPostPermission.container'

const Stack = createStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      headerMode="none"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen name="Login" component={AuthContainer} />
      <Stack.Screen name="Loading" component={AuthLoadingContainer} />
    </Stack.Navigator>
  )
}

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="none"
      cardStyle={{ backgroundColor: Colors.PLUTO_WHITE }}
    >
      <Stack.Screen name="Home" component={HomeContainer} />
      <Stack.Screen name="GroupFeed" component={GroupFeedContainer} />
      <Stack.Screen name="Profile" component={profileContainer} />
      <Stack.Screen name="AddPost" component={AddPostContentCont} />
      <Stack.Screen
        name="AddPostPermissions"
        component={AddPostPermissionsCont}
      />
      <Stack.Screen name="Post" component={PostContainer} />
      <Stack.Screen name="Settings" component={SettingsContainer} />
      <Stack.Screen name="AddFriend" component={AddFriendContainer} />
    </Stack.Navigator>
  )
}

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      headerMode="none"
      screenOptions={{ gestureEnabled: false, animationTypeForReplace: 'pop' }}
    >
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Auth" component={AuthStack} />
    </Stack.Navigator>
  )
}

class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'europa-regular': require('./src/assets/fonts/europa-regular-webfont.ttf'),
      'europa-light': require('./src/assets/fonts/europa-light-webfont.ttf'),
      'europa-bold': require('./src/assets/fonts/europa-bold-webfont.ttf'),
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    console.disableYellowBox = true
    return (
      <>
        <PlutoStatusBar />
        {this.state.fontLoaded ? (
          <Provider store={store}>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </Provider>
        ) : null}
      </>
    )
  }
}

export default App

registerRootComponent(App)

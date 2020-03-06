import React from 'react'
import { Colors } from '../styles/index'

import { createStackNavigator } from '@react-navigation/stack';

import AuthContainer from '../containers/auth.container'
import AuthLoadingContainer from '../containers/authLoading.container'
import HomeContainer from '../containers/home.container'
import GroupFeedContainer from '../containers/groupFeed.container'
import profileContainer from '../containers/profile.container'
import PostContainer from '../containers/post.container'
import SettingsContainer from '../containers/settings.container'
import AddFriendContainer from '../containers/addFriend.container'
import AddPostContentCont from '../containers/addPostContent.container'
import AddPostPermissionsCont from '../containers/addPostPermission.container'
import UserPopupContainer from '../containers/userPopup.container'
import EditGroupContainer from '../containers/editGroup.container';

import modal from "./transitions/modal"

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      headerMode="none"
      screenOptions={{gestureEnabled:false}}
    >
      <Stack.Screen
        name="Login"
        component={AuthContainer}
      />
      <Stack.Screen
        name="Loading"
        component={AuthLoadingContainer}
      />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="none"
      cardStyle={{ backgroundColor: Colors.PLUTO_WHITE }}
    >
      <Stack.Screen
        name="Home"
        component={HomeContainer}
      />
      <Stack.Screen
        name="GroupFeed"
        component={GroupFeedContainer}
      />
      <Stack.Screen
        name="Profile"
        component={profileContainer}
      />
      <Stack.Screen
        name="AddPost"
        component={AddPostContentCont}
      />
      <Stack.Screen
        name="AddPostPermissions"
        component={AddPostPermissionsCont}
      />
      <Stack.Screen
        name="Post"
        component={PostContainer}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsContainer}
      />
      <Stack.Screen
        name="AddFriend"
        component={AddFriendContainer}
      />
      <Stack.Screen
        name="EditGroup"
        component={EditGroupContainer}
      />
    </Stack.Navigator>
  );
}


function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      headerMode="none"
      screenOptions={{gestureEnabled:false, animationTypeForReplace: 'pop'}}
    >
      <Stack.Screen
        name="App"
        component={AppStack}
      />
      <Stack.Screen
        name="Auth"
        component={AuthStack}
      />
    </Stack.Navigator>
  );
}


export default function ModalStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="none"
      mode="modal"
      screenOptions={{
        cardStyle: {backgroundColor: 'transparent'}
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainStack}
      />
      <Stack.Screen
        name="Modal"
        component={UserPopupContainer}
      />
    </Stack.Navigator>
  );
}


export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
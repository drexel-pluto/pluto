import React from "react";
import { registerRootComponent } from "expo";
import { SafeAreaView, StyleSheet } from "react-native";
import {Provider} from 'react-redux';
import store from './src/redux/store';
import { Colors, Typography, Layouts, Mixins } from "./src/styles/index";
import Home from "./src/screens/Home";
import GroupFeed from "./src/screens/GroupFeed";
import Post from "./src/screens/Post";
import Profile from "./src/screens/Profile";
import AddFriend from "./src/screens/AddFriend";
import EditGroup from "./src/screens/EditGroup";
import Search from "./src/screens/Search";
import AddPost from "./src/screens/AddPost";
import AddPostPermission from "./src/screens/AddPostPermission";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <SafeAreaView style={Layouts.FLEX_CONTAINER}>
        <Home />
        {/* <GroupFeed /> */}
        {/* <Post /> */}
        {/* <Profile /> */}
        {/* <AddFriend /> */}
        {/* <EditGroup /> */}
        {/* <Search /> */}
        {/* <AddPost /> */}
        {/* <AddPostPermission /> */}
      </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;

registerRootComponent(App);

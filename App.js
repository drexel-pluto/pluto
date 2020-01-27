import React from "react";
import { registerRootComponent } from "expo";
import { SafeAreaView, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "./src/styles/index";
import Home from "./src/screens/Home";
import GroupFeed from "./src/screens/GroupFeed";
import Post from "./src/screens/Post";
import Profile from "./src/screens/Profile";
import AddFriend from "./src/screens/AddFriend";

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={Layouts.FLEX_CONTAINER}>
        {/* <Home /> */}
        {/* <GroupFeed /> */}
        {/* <Post /> */}
        {/* <Profile /> */}
        <AddFriend />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default App;

registerRootComponent(App);

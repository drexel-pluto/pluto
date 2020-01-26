import React from "react";
import { registerRootComponent } from "expo";
import { SafeAreaView, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "./src/styles/index";
import Home from "./src/screens/Home";
import GroupFeed from "./src/screens/GroupFeed";

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={Layouts.FLEX_CONTAINER}>
        {/* <Home /> */}
        <GroupFeed />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default App;

registerRootComponent(App);

import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";
import Circle from "./../components/Circle";
import GroupPanel from "./../components/GroupPanel";
import TopIconBar from "./../components/TopIconBar";

class App extends React.Component {
  render() {
    return (
      <View style={[styles.homeScreen, Layouts.FLEX_CONTAINER]}>
        <TopIconBar />
        <Circle />
        <GroupPanel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeScreen: {
    justifyContent: "space-between"
  }
});

export default App;

import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";
import ScreenHeader from "../components/ScreenHeader";
import CircleContainer from "../components/CircleContainer";
import GroupPanel from "./../components/GroupPanel";
import { Circle } from "react-native-svg";

class Home extends React.Component {
  render() {
    return (
      <View style={[styles.homeScreen, Layouts.FLEX_CONTAINER]}>
        <ScreenHeader />
        <CircleContainer />
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

export default Home;

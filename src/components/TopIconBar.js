import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

export default Circle = props => {
  return <View style={styles.topIconBar} />;
};

const styles = StyleSheet.create({
  topIconBar: {
    width: "100%",
    height: Mixins.scaleSize(60),
    backgroundColor: Colors.GRAY_LIGHT
  }
});

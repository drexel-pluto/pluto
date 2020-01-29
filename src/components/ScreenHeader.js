import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

export default ScreenHeader = props => {
  return (
    <View style={styles.screenHeader}>
      <Text>Screen Header: navigation, icons</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenHeader: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.GRAY_LIGHT
  }
});

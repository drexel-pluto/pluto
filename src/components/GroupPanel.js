import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

export default GroupPanel = props => {
  return (
    <View style={styles.groupPanel}>
      <Text style={[styles.groupPanel__title, Typography.F_H2]}>
        Group Title
      </Text>
      <Text style={[styles.groupPanel__detail]}>Updates from group</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPanel: {
    width: "100%",
    height: Mixins.scaleSize(150),
    backgroundColor: Colors.GRAY_LIGHT
  },
  groupPanel__title: {},
  groupPanel__detail: {}
});

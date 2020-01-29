import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

export default AddPostInput = props => {
  return (
    <View style={styles.addPostInput}>
      <Text>Content Input</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addPostInput: {
    flexGrow: 1,
    backgroundColor: Colors.GRAY_MEDIUM
  }
});

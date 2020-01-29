import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

export default AddPostOptionBar = props => {
  return (
    <View style={styles.addPostOptionBar}>
      <Text>Add Post Option Bar</Text>
      <View style={styles.option_container}>
        <TouchableOpacity style={styles.option}></TouchableOpacity>
        <TouchableOpacity style={styles.option}></TouchableOpacity>
        <TouchableOpacity style={styles.option}></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addPostOptionBar: {
    backgroundColor: Colors.GRAY_LIGHT
  },
  option_container: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  option: {
    width: 50,
    height: 50,
    backgroundColor: Colors.GRAY_DARK
  }
});

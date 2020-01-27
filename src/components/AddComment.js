import React from "react";
import { View, Input, TouchableHighlight, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

class AddComment extends React.Component {
  render() {
    return <View style={styles.addComment}></View>;
  }
}

const styles = StyleSheet.create({
  addComment: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.GRAY_LIGHT
  }
});

export default AddComment;

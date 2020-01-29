import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

export default Tag = props => {
  const { id, tagName } = props;
  return (
    <TouchableHighlight style={styles.tag}>
      <Text>{tagName}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 20,
    backgroundColor: Colors.GRAY_LIGHT
  }
});

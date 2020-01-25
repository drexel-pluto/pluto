import React from "react";
import { TouchableHighlight, Image, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

export default Circle = props => {
  return (
    <TouchableHighlight style={styles.circle}>
      <Image
        style={styles.circle__image}
        source={{ uri: "https://picsum.photos/id/237/300/300" }}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 110,
    height: 110,
    borderRadius: 50
  },
  circle__image: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});

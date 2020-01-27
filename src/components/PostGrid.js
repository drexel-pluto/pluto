import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

class PostGrid extends React.Component {
  render() {
    return (
      <View style={styles.postGrid}>
        <Text>Post Gried - Flatlist</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postGrid: {
    backgroundColor: Colors.GRAY_DARK,
    height: 1000
  }
});

export default PostGrid;

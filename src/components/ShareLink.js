import React from "react";
import { View, Text, TouchableHightlight, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

class ShareLink extends React.Component {
  render() {
    return (
      <View style={styles.sharelink}>
        <Text>Share Link</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sharelink: {
    backgroundColor: Colors.GRAY_LIGHT,
    height: 100
  }
});

export default ShareLink;
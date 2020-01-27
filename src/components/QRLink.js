import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

class QRLink extends React.Component {
  render() {
    return (
      <View style={styles.link}>
        <Text>Invitation Center</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    backgroundColor: Colors.GRAY_DARK,
    height: 300
  }
});

export default QRLink;

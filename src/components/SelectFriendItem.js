import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

class SelectFriendItem extends React.Component {
  render() {
    return (
      <View style={styles.selectFriendItem}>
        <Text>Friend Select Item</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectFriendItem: {
    margin: 15,
    height: 50,
    backgroundColor: Colors.GRAY_LIGHT
  }
});

export default SelectFriendItem;

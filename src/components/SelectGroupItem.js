import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";
import SelectFriendItem from "./SelectFriendItem";

class SelectGroupItem extends React.Component {
  render() {
    return (
      <View style={styles.selectGroupItem}>
        <Text style={styles.selectGroupItem__title}>Group Name</Text>
        <View style={styles.selectGroupItem__friend_wrapper}>
          {
            // this is dropdown
            // <SelectFriendItem />
            // <SelectFriendItem />
            // <SelectFriendItem />
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectGroupItem: {
    margin: 15,
    height: 50,
    backgroundColor: Colors.GRAY_LIGHT
  }
});

export default SelectGroupItem;

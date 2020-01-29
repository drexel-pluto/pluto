import React from "react";
import { View, ScrollView, FlatList, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";
import SelectGroupItem from "./SelectGroupItem";

export default SelectGroupList = props => {
  return (
    <ScrollView style={styles.selectGroupList}>
      <Text>Griend Select List</Text>
      <SelectGroupItem />
      <SelectGroupItem />
      <SelectGroupItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  selectGroupList: {
    backgroundColor: Colors.GRAY_DARK
  }
});

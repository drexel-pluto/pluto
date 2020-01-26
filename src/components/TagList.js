import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";
import Tag from "./Tag";

export default TagList = props => {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => <Tag tagName={item.tagName} />}
      keyExtractor={item => item.id}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({});

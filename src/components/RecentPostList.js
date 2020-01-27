import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";
import PostTeaser from "./PostTeaser";

export default RecentPostList = props => {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => <PostTeaser content={item.content} />}
      keyExtractor={item => item.id}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({});

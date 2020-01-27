import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";
import ScreenHeader from "./../components/ScreenHeader";
import AddPostOptionBar from "../components/AddPostOptionBar";
import AddPostInput from "../components/AddPostInput";

class AddPost extends React.Component {
  render() {
    return (
      <View style={Layouts.FLEX_CONTAINER}>
        <ScreenHeader />
        <AddPostInput />
        <AddPostOptionBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default AddPost;

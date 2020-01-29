import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

export default UserProfile = props => {
  return (
    <View style={[styles.userProfile, Layouts.FLEX_CONTAINER_CENTER]}>
      <Image
        style={styles.userProfile__image}
        source={{ uri: "https://picsum.photos/id/237/300/300" }}
      />
      <Text>User Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userProfile: {},
  userProfile__image: {
    width: 200,
    height: 200,
    borderRadius: 100
  }
});

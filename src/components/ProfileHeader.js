import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";
import UserProfile from "./UserProfile";

class ProfileHeader extends React.Component {
  render() {
    return (
      <View style={styles.ProfileHeader}>
        <Text>Profile Header</Text>
        <UserProfile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ProfileHeader: {
    width: "100%",
    backgroundColor: Colors.GRAY_MEDIUM
  }
});

export default ProfileHeader;
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";
import ScreenHeader from "./../components/ScreenHeader";
import QRLink from "./../components/QRLink";
import ShareLink from "./../components/ShareLink";
import InvitationCenter from "./../components/InvitationCenter";

class AddFriend extends React.Component {
  render() {
    return (
      <ScrollView>
        <ScreenHeader />
        <QRLink />
        <ShareLink />
        <InvitationCenter />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

export default AddFriend;

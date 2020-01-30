import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

export default Comment = props => {
  const { id, author, content } = props;
  return (
    <View style={styles.comment}>
      <View style={styles.comment__author}>
        <Image
          style={styles.comment__author__image}
          source={
            author.image
              ? { uri: author.image }
              : { uri: "https://picsum.photos/id/237/300/300" }
          }
        />
        <Text>{author.name}</Text>
      </View>
      <View style={styles.comment__content}>
        <Text>{content.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.GRAY_MEDIUM
  },
  comment__author: {
    flex: 1,
    flexDirection: "row"
  },
  comment__author__image: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
});
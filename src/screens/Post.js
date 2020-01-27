import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";
import ScreenHeader from "../components/ScreenHeader";
import TagList from "../components/TagList";
import CommentList from "../components/CommentList";
import { TAG_DATA, COMMENT_DATA } from "./../assets/data";

class Post extends React.Component {
  render() {
    return (
      <ScrollView style={[styles.post, Layouts.FLEX_CONTAINER]}>
        <ScreenHeader />
        <View style={styles.post__content}>
          <View style={styles.post__image_wrapper}>
            <Image
              style={styles.post__image}
              source={{ uri: "https://picsum.photos/id/237/300/300" }}
            />
          </View>
          <View style={styles.post__text_wrapper}>
            <Text style={styles.post__text}>
              lorem ipsum blash blash blash blash
            </Text>
          </View>
          <View style={styles.post__tag_wrapper}>
            <TagList data={TAG_DATA} />
          </View>
        </View>
        <CommentList data={COMMENT_DATA} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  post: {},
  post__content: {
    width: "100%"
  },
  post__image: {
    width: "100%",
    height: 500
  }
});

export default Post;

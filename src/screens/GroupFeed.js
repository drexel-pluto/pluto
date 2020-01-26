import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";
import ScreenHeader from "../components/ScreenHeader";
import CircleList from "./../components/CircleList";
import RecentPostList from "../components/RecentPostList";
import TagList from "./../components/TagList";
import PostFeed from "./../components/PostFeed";

const CIRCLE_DATA = [
  {
    id: "1",
    image: "https://picsum.photos/id/237/300/300"
  },
  {
    id: "2",
    image: "https://picsum.photos/id/238/300/300"
  },
  {
    id: "3",
    image: "https://picsum.photos/id/239/300/300"
  },
  {
    id: "4",
    image: "https://picsum.photos/id/240/300/300"
  },
  {
    id: "5",
    image: "https://picsum.photos/id/241/300/300"
  }
];

const POST_DATA = [
  {
    id: "1",
    image: "https://picsum.photos/id/237/300/300",
    author: "author1",
    content: "Just wanted to show this amazing view..."
  },
  {
    id: "2",
    image: "https://picsum.photos/id/238/300/300",
    author: "author2",
    content: null
  },
  {
    id: "3",
    image: null,
    author: "author3",
    content: ""
  }
];

const TAG_DATA = [
  {
    id: "1",
    tagName: "tag1"
  },
  {
    id: "2",
    tagName: "tag2"
  },
  {
    id: "3",
    tagName: "tag3"
  }
];

class GroupFeed extends React.Component {
  render() {
    return (
      <ScrollView style={[styles.groupFeedScreen, Layouts.FLEX_CONTAINER]}>
        <View style={styles.row}>
          <ScreenHeader />
        </View>
        <View style={styles.row}>
          <CircleList data={CIRCLE_DATA} />
        </View>
        <View style={styles.row}>
          <RecentPostList data={POST_DATA} />
        </View>
        <View style={styles.row}>
          <TagList data={TAG_DATA} />
        </View>
        <View style={styles.row}>
          <PostFeed data={POST_DATA} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  groupFeedScreen: {},
  row: {
    marginBottom: 30
  }
});

export default GroupFeed;

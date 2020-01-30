import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CircleList from './../components/CircleList'
import RecentPostList from '../components/RecentPostList'
import TagList from './../components/TagList'
import PostFeed from './../components/PostFeed'
import { TAG_DATA, POST_DATA, CIRCLE_DATA } from './../assets/data'

class GroupFeed extends React.Component {
  render() {
    return (
      <ScrollView style={[styles.groupFeedScreen, Layouts.FLEX_CONTAINER]}>
        <ScreenHeader />
        <CircleList
          data={CIRCLE_DATA}
          navigation={this.props.navigation}
          size={80}
        />
        <RecentPostList data={POST_DATA} />
        <TagList data={TAG_DATA} />
        <PostFeed data={POST_DATA} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  groupFeedScreen: {},
})

export default GroupFeed
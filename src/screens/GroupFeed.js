import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CircleList from './../components/CircleList'
import RecentPostList from '../components/RecentPostList'
import TagList from './../components/TagList'
import PostFeed from './../components/PostFeed'
import IconButton from './../components/iconButton/IconButton'
import { LinearGradient } from 'expo-linear-gradient'
import { TAG_DATA, POST_DATA, CIRCLE_DATA } from './../assets/data'

class GroupFeed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const leftHeaderItems = [
      <IconButton type="back" _onPress={this.props.navigation.goBack} />,
    ]

    const rightHeaderItems = [
      <IconButton type="search" />,
      <IconButton type="filter" />,
    ]

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          stickyHeaderIndices={[0]}
          style={[styles.groupFeedScreen, Layouts.FLEX_CONTAINER]}
        >
          <ScreenHeader
            isFixed={true}
            title={'Group Feed'}
            leftItems={leftHeaderItems}
            rightItems={rightHeaderItems}
          />
          <CircleList
            data={this.props.group.members}
            navigation={this.props.navigation}
            size={50}
          />
          <RecentPostList data={this.props.group.posts} />
          <TagList data={TAG_DATA} />
          <PostFeed data={this.props.group.posts} />
        </ScrollView>
        <LinearGradient
          colors={[Colors.TRANSPARENT, Colors.rgba(Colors.BLACK_ROCK, 0.5)]}
          style={styles.addPost_wrapper}
        >
          <IconButton type="addPost" />
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  groupFeedScreen: {},
  addPost_wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: Mixins.scaleSize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default GroupFeed

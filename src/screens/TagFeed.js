import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CircleList from './../components/CircleList'
import RecentPostList from '../components/RecentPostList'
import TagList from './../components/TagList'
import TagListSkeleton from '../components/skeleton/TagList.skeleton'
import PostFeed from './../components/PostFeed'
import IconButton from '../components/iconButton/IconButton'
import ContainerTail from './../assets/images/containerTail--pearl.svg'
import { TAG_DATA } from './../assets/data'

class TagFeed extends React.Component {
  render() {
    const leftHeaderItems = (
      <>
        <IconButton type="back" _onPress={this.props.navigation.goBack} />
      </>
    )

    return (
      <View style={{ flex: 1 }}>
        <ScreenHeader
          isFixed={true}
          headerColor={Colors.PEARL}
          title={"#" + this.props.tag}
          leftItems={leftHeaderItems}
        />
        <ScrollView
          style={[styles.groupFeedScreen, Layouts.FLEX_CONTAINER]}
          contentContainerStyle={{ paddingBottom: Layouts.PAD_BOTTOM }}
        >
          <PostFeed
            data={this.props.posts}
            openPost={this.props.openPost}
            loading={this.props.loading}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  groupFeedScreen: {}
})

export default TagFeed

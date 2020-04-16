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

class GroupFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groupMembers: this.setGroupMembers(),
    }
  }

  setGroupMembers() {
    let groupMembers = [...this.props.group.members]
    let index = groupMembers
      .map(function(item) {
        return item._id
      })
      .indexOf(this.props.user.id)
    groupMembers.splice(index, 1)

    return groupMembers
  }

  render() {
    console.log(this.props.group)
    const leftHeaderItems = [
      <IconButton type="back" _onPress={this.props.navigation.goBack} />,
    ]

    const rightHeaderItems = [
      <IconButton type="searchItem" />,
      <IconButton type="settings" _onPress={() => this.props.showOptions()}/>,
    ]

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          stickyHeaderIndices={[0]}
          style={[styles.groupFeedScreen, Layouts.FLEX_CONTAINER]}
          contentContainerStyle={{ paddingBottom: Layouts.PAD_BOTTOM }}
        >
          <ScreenHeader
            isFixed={true}
            headerColor={Colors.PEARL}
            title={this.props.group.title}
            leftItems={leftHeaderItems}
            rightItems={rightHeaderItems}
          />
          <View style={Styles.shadow('black')}>
            <View
              style={{
                backgroundColor: Colors.PEARL,
                borderBottomRightRadius: Mixins.scaleSize(20),
              }}
            >
              <CircleList
                data={this.state.groupMembers}
                navigation={this.props.navigation}
              />
            </View>
            <ContainerTail
              fill={Colors.PEARL}
              style={{
                position: 'absolute',
                left: 0,
                top: '99.9%',
              }}
            />
          </View>
          <RecentPostList
            data={this.props.group.posts}
            openPost={this.props.openPost}
            loading={this.props.loading}
          />
          {this.props.loading === true ? (
            <TagListSkeleton />
          ) : (
            <TagList data={TAG_DATA} />
          )}
          <PostFeed
            data={this.props.group.posts}
            openPost={this.props.openPost}
            loading={this.props.loading}
          />
        </ScrollView>
        {/* <LinearGradient
          colors={[Colors.TRANSPARENT, Colors.rgba(Colors.BLACK_ROCK, 0.5)]}
          style={styles.bottom_overlay}
        ></LinearGradient> */}
        <View style={Layouts.BOTTOM_WRAPPER_RIGHT}>
          <IconButton
            type="addPost"
            _onPress={() => {
              this.props.navigation.navigate('AddPost', {
                defaultRecipients: this.state.groupMembers,
              })
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  groupFeedScreen: {},
  bottom_overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: Mixins.scaleSize(100),
  },
})

export default GroupFeed

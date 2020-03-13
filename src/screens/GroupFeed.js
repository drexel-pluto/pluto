import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CircleList from './../components/CircleList'
import RecentPostList from '../components/RecentPostList'
import TagList from './../components/TagList'
import PostFeed from './../components/PostFeed'
import IconButton from '../components/iconButton/IconButton'
import { LinearGradient } from 'expo-linear-gradient'
import ContainerTail from './../assets/images/containerTail--pearl.svg'
import { TAG_DATA, POST_DATA, CIRCLE_DATA } from './../assets/data'

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
    const leftHeaderItems = [
      <IconButton type="back" _onPress={this.props.navigation.goBack} />,
    ]

    const rightHeaderItems = [
      <IconButton type="searchItem" />,
      <IconButton type="settings" />,
    ]

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          stickyHeaderIndices={[0]}
          style={[styles.groupFeedScreen, Layouts.FLEX_CONTAINER]}
          contentContainerStyle={{ paddingBottom: Mixins.scaleSize(100) }}
        >
          <ScreenHeader
            isFixed={true}
            headerColor={Colors.PEARL}
            title={'Group Feed'}
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
          />
          <TagList data={TAG_DATA} />
          <PostFeed
            data={this.props.group.posts}
            openPost={this.props.openPost}
          />
        </ScrollView>
        {/* <LinearGradient
          colors={[Colors.TRANSPARENT, Colors.rgba(Colors.BLACK_ROCK, 0.5)]}
          style={styles.bottom_overlay}
        ></LinearGradient> */}
        <View style={[Layouts.BOTTOM_WRAPPER, styles.addPost_wrapper]}>
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
  addPost_wrapper: {
    paddingBottom: Mixins.scaleSize(30),
    paddingHorizontal: Layouts.PAD_HORZ,
    alignItems: 'flex-end',
  },
})

export default GroupFeed

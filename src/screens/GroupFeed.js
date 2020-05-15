import React from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CircleList from './../components/CircleList'
import RecentPostList from '../components/RecentPostList'
import TagList from './../components/TagList'
import TagListSkeleton from '../components/skeleton/TagList.skeleton'
import PostFeed from './../components/PostFeed'
import IconButton from '../components/iconButton/IconButton'
import ContainerTail from './../assets/images/containerTail--pearl.svg'

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
    const leftHeaderItems = (
      <>
        <IconButton type="back" _onPress={this.props.navigation.goBack} />
      </>
    )

    const rightHeaderItems = (
      <>
        {/* <IconButton type="searchItem" /> */}
        {this.props.group.id !== -1 && (
          <IconButton
            type="settings"
            _onPress={() => this.props.showOptions()}
          />
        )}
      </>
    )


    const feedHeader = (
        <View
          style={[
            Styles.shadow('black'),
            {
              marginBottom: Layouts.PAD_VERT * 2,
            },
          ]}
        >
          <View 
            style={{
              backgroundColor: Colors.PEARL,
              height: 600,
              position: 'absolute',
              top: -600,
              left: 0,
              right: 0
            }} 
          />
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
    )

    return (
      <View style={{ flex: 1 }}>
          <ScreenHeader
            isFixed={true}
            headerColor={Colors.PEARL}
            title={this.props.group.title}
            leftItems={leftHeaderItems}
            rightItems={rightHeaderItems}
          />
          {/* <RecentPostList
            data={this.props.group.posts}
            openPost={this.props.openPost}
            loading={this.props.loading}
          />
          {this.props.loading === true ? (
            <TagListSkeleton />
          ) : (
            <TagList data={TAG_DATA} />
          )} */}
          {this.state.groupMembers.length > 0 ? (
            <PostFeed
              data={this.props.group.posts}
              openPost={this.props.openPost}
              loading={this.props.loading}
              endIndex={this.props.endIndex}
              loadMore={this.props.loadMore}
              header={feedHeader}
            />
          ) : (
            <View
              style={{
                position: 'relative',
                top: '50%',
                alignItems: 'center',
                paddingHorizontal: Layouts.PAD_HORZ,
              }}
            >
              <Text style={Typography.F_H2}>nothing to see here...</Text>
              <Text style={[Typography.F_H3, { lineHeight: 25 }]}>
                add friends to start browsing content!
              </Text>
            </View>
          )}
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

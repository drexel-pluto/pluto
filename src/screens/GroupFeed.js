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
                data={this.props.group.members}
                navigation={this.props.navigation}
                user={this.props.user}
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
        <LinearGradient
          colors={[Colors.TRANSPARENT, Colors.rgba(Colors.BLACK_ROCK, 0.5)]}
          style={styles.bottom_overlay}
        ></LinearGradient>
        <View style={[Layouts.BOTTOM_WRAPPER, styles.addPost_wrapper]}>
          <IconButton
            type="addPost"
            _onPress={() => {
              this.props.navigation.navigate('AddPost', {
                defaultRecipients: this.props.group.members,
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
    alignItems: 'center',
  },
})

export default GroupFeed

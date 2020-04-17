import React from 'react'
import {
  View,
  ScrollView,
  FlatList,
  Text,
  Animated,
  StyleSheet,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import SelectFriendItem from './SelectFriendItem'
import SearchInput from './SearchInput'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

class SelectFriendList extends React.Component {
  constructor(props) {
    super(props)

    this.animatedHeightValue = Mixins.scaleSize(350)
    this.animatedHeightValueCompleted = Mixins.scaleSize(500)

    this.state = {
      searchText: '',
      animatedHeightValue: new Animated.Value(this.animatedHeightValue),
    }
  }

  onChangeText(text) {
    this.setState({ searchText: text })
  }

  swipeUpAnimate() {
    // expand
    this.state.animatedHeightValue.setValue(this.animatedHeightValue)
    Animated.spring(this.state.animatedHeightValue, {
      toValue: this.animatedHeightValueCompleted,
      duration: 200,
      friction: 5,
      tension: 35,
    }).start()
  }

  swipeDownAnimate() {
    //collapse
    this.state.animatedHeightValue.setValue(this.animatedHeightValueCompleted)
    Animated.spring(this.state.animatedHeightValue, {
      toValue: this.animatedHeightValue,
      duration: 200,
      friction: 5,
      tension: 35,
    }).start()
  }

  render() {
    var friends = this.props.friends

    if (this.state.searchText != '') {
      friends = this.props.friends.filter(item => {
        var friend = item.friend
        return (
          friend.username.includes(this.state.searchText) ||
          friend.name.includes(this.state.searchText)
        )
      })
    }

    const animatedStyleHeight = {
      height: this.state.animatedHeightValue,
    }

    return (
      <Animated.View
        style={[styles.FriendSelectList, animatedStyleHeight]}
        stickyHeaderIndices={[0]}
      >
        <GestureRecognizer
          onSwipeUp={() => {
            this.swipeUpAnimate()
          }}
          onSwipeDown={() => {
            this.swipeDownAnimate()
          }}
        >
          <View
            style={{
              paddingTop: Mixins.scaleSize(10),
              paddingBottom: Mixins.scaleSize(20),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 50,
                height: 3,
                borderRadius: 1,
                backgroundColor: Colors.GRAY_LIGHT,
                marginBottom: Mixins.scaleSize(15),
              }}
            ></View>
            <SearchInput
              placeholder="search for friends..."
              onChangeText={text => this.onChangeText(text)}
            />
          </View>
        </GestureRecognizer>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingBottom: Mixins.scaleSize(50),
          }}
          data={friends}
          renderItem={({ item }) => (
            <SelectFriendItem
              friend={item.friend}
              onPress={() => this.props.toggleMember(item.friend)}
              checked={this.props.members.includes(item.friend._id)}
            />
          )}
          extraData={this.props.members}
          keyExtractor={item => item.friend._id}
        />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  FriendSelectList: {
    backgroundColor: Colors.UI_BG,
    borderTopLeftRadius: Mixins.scaleSize(35),
    borderTopRightRadius: Mixins.scaleSize(35),
    backgroundColor: Colors.CREAM,
    paddingHorizontal: Layouts.PAD_HORZ,
  },
})

export default SelectFriendList

import React from 'react'
import { View, ScrollView, FlatList, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import SelectFriendItem from './SelectFriendItem'
import SearchInput from './SearchInput'

class SelectFriendList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    }
  }
  onChangeText(text) {
    console.log(text);
    this.setState({searchText: text});
  }

  render() {
    var friends = this.props.friends;

    if (this.state.searchText != "") {
      friends = this.props.friends.filter((item) => {
        var friend = item.friend;
        return friend.username.includes(this.state.searchText) ||
          friend.name.includes(this.state.searchText);
      });
    }

    return (
      <View style={styles.FriendSelect}>
        <SearchInput placeholder="search for friends..." onChangeText={(text)=>this.onChangeText(text)}/>
        <FlatList
          data={friends}
          renderItem={({ item }) => (
            <SelectFriendItem 
              friend={item.friend}
              onPress={() => this.props.toggleMember(item.friend._id)}
              checked={this.props.members.includes(item.friend._id)}/>
          )}
          extraData={this.props.members}
          keyExtractor={item => item.friend._id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  FriendSelect: {
    // height: 100,
    paddingTop: Layouts.PAD_VERT,
    backgroundColor: Colors.UI_BG,
    height: Mixins.scaleSize(35),
    borderTopLeftRadius: Mixins.scaleSize(35),
    borderTopRightRadius: Mixins.scaleSize(35),
    backgroundColor: Colors.CREAM,
    paddingHorizontal: Layouts.PAD_HORZ,
    flex: 1
  },
})


export default SelectFriendList;
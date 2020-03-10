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
      <ScrollView style={styles.FriendSelectList} stickyHeaderIndices={[0]}>
        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: Mixins.scaleSize(20),
          }}
        >
          <SearchInput placeholder="search for friends..." onChangeText={(text)=>this.onChangeText(text)}/>
        </View>
        <FlatList
          contentContainerStyle={{
            paddingBottom: Mixins.scaleSize(50),
            flex: 1,
          }}
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
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  FriendSelectList: {
    backgroundColor: Colors.UI_BG,
    height: '50%',
    borderTopLeftRadius: Mixins.scaleSize(35),
    borderTopRightRadius: Mixins.scaleSize(35),
    backgroundColor: Colors.CREAM,
    paddingHorizontal: Layouts.PAD_HORZ,
    flex: 1
  },
})


export default SelectFriendList;
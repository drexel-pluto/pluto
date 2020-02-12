import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import CheckBox from 'react-native-check-box'

class SelectFriendItem extends React.Component {
  constructor(props) {
    super(props)
  }

  toggleChecked() {
    this.props.setRecipient(
      this.props.friend._id,
      !this.props.recipients[this.props.friend._id]
    )
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.toggleChecked()
        }}
      >
        <View style={styles.selectFriendItem}>
          <View style={styles.friend_wrapper}>
            <Image
              style={styles.image}
              source={{ uri: 'https://picsum.photos/id/237/300/300' }}
            />
            <Text>{this.props.friend.name}</Text>
          </View>
          <CheckBox
            style={styles.friendCheck}
            isChecked={this.props.recipients[this.props.friend._id]}
            onClick={() => {
              this.toggleChecked()
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

SelectFriendItem.defaultProps = {
  isChecked: false,
}

const styles = StyleSheet.create({
  selectFriendItem: {
    margin: Mixins.scaleSize(15),
    height: Mixins.scaleSize(50),
    // backgroundColor: Colors.GRAY_LIGHT,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  friend_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: Mixins.scaleSize(50),
    height: Mixins.scaleSize(50),
    borderRadius: Mixins.scaleSize(50 / 2),
    marginRight: Mixins.scaleSize(15),
  },
  friendCheck: {},
})

export default SelectFriendItem

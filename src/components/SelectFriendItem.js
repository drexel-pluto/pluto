import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import CircleCheckBox from 'react-native-circle-checkbox'

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
            <Text style={Typography.F_BODY}>{this.props.friend.name}</Text>
          </View>
          <CircleCheckBox
            checked={this.props.recipients[this.props.friend._id]}
            outerColor={Colors.VIOLET.dark}
            innerColor={Colors.VIOLET.dark}
            filterColor={Colors.PLUTO_WHITE}
            onToggle={() => {
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
    margin: Mixins.scaleSize(10),
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
    width: Mixins.scaleSize(45),
    height: Mixins.scaleSize(45),
    borderRadius: Mixins.scaleSize(45 / 2),
    marginRight: Mixins.scaleSize(15),
  },
  friendCheck: {
    borderRadius: 999,
  },
})

export default SelectFriendItem

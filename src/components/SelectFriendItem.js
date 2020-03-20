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

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.onPress()
        }}
      >
        <View style={styles.selectFriendItem}>
          <View style={styles.friend_wrapper}>
            <Image
              style={styles.image}
              source={
                this.props.friend.profilePicURL
                  ? { uri: this.props.friend.profilePicURL }
                  : { uri: 'https://picsum.photos/id/237/300/300' }
              }
            />
            <Text style={Typography.F_BODY}>{this.props.friend.name}</Text>
          </View>
          <CircleCheckBox
            checked={this.props.checked}
            outerColor={Colors.VIOLET.dark}
            innerColor={Colors.VIOLET.dark}
            filterColor={Colors.PLUTO_WHITE}
            onToggle={() => {
              this.props.onPress()
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

SelectFriendItem.defaultProps = {
  isChecked: false,
  friend: {
    name: '',
    id: '',
  },
  checked: false,
  onPress: () => {},
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

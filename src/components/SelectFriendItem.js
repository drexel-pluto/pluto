import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import CheckBox from 'react-native-check-box'

class SelectFriendItem extends React.Component {
  state = {
    checked: false,
  }

  toggleChecked() {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return (
      <TouchableWithoutFeedback
        style={styles.selectFriendItem}
        onPress={() => {
          this.toggleChecked()
        }}
      >
        <Image
          style={styles.image}
          source={{ uri: 'https://picsum.photos/id/237/300/300' }}
        />
        <Text>Friend Name</Text>
        <CheckBox
          isChecked={this.state.checked}
          onClick={() => {
            this.toggleChecked()
          }}
        />
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  selectFriendItem: {
    margin: 15,
    height: 50,
    // backgroundColor: Colors.GRAY_LIGHT,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
})

export default SelectFriendItem

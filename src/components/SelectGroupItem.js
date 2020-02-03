import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import CheckBox from 'react-native-check-box'
import SelectFriendItem from './SelectFriendItem'

class SelectGroupItem extends React.Component {
  state = {
    expanded: false,
    groupChecked: false,
  }

  toggleExpand() {
    this.setState({ expanded: !this.state.expanded })
  }

  toggleGroupChecked() {
    this.setState({ groupChecked: !this.state.groupChecked })
  }

  render() {
    return (
      <View style={styles.selectGroupItem}>
        <View style={styles.title_wrapper}>
          <TouchableWithoutFeedback
            style={styles.title}
            onPress={() => {
              this.toggleExpand()
            }}
          >
            <Text>Group Name</Text>
            <Text>ICON</Text>
            <Text>1/10</Text>
          </TouchableWithoutFeedback>
          <CheckBox
            style={styles.groupCheck}
            isChecked={this.state.groupChecked}
            onClick={() => {
              this.toggleGroupChecked()
            }}
          />
        </View>
        <ScrollView
          style={[
            styles.friend_wrapper,
            this.state.expanded ? styles.expanded : '',
          ]}
        >
          <SelectFriendItem />
          <SelectFriendItem />
          <SelectFriendItem />
          <SelectFriendItem />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selectGroupItem: {
    margin: Mixins.scaleSize(15),
  },
  title_wrapper: {
    height: Mixins.scaleSize(50),
    backgroundColor: Colors.GRAY_MEDIUM,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    flexGrow: 1,
  },
  groupCheck: {
    paddingHorizontal: Mixins.scaleSize(20),
    backgroundColor: 'red',
  },
  friend_wrapper: {
    maxHeight: Mixins.scaleSize(200),
    backgroundColor: Colors.GRAY_LIGHT,
    display: 'none',
  },
  expanded: {
    display: 'flex',
  },
})

export default SelectGroupItem

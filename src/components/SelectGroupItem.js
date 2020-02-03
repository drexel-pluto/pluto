import React from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import CheckBox from 'react-native-check-box'
import SelectFriendItem from './SelectFriendItem'

class SelectGroupItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false,
      isGroupChecked: false,
    }
  }

  toggleExpand() {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  toggleGroupChecked() {
    this.setState({ isGroupChecked: !this.state.isGroupChecked })
  }

  render() {
    return (
      <View style={styles.selectGroupItem}>
        <View style={styles.title_wrapper}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.toggleExpand()
            }}
          >
            <View style={styles.title}>
              {
                // limit the width for group title
                // or set char limit on it
              }
              <Text>Group Name</Text>
              <Text>ICON</Text>
              <Text>1/10</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              this.toggleGroupChecked()
            }}
          >
            <View style={styles.groupCheck}>
              <CheckBox
                isChecked={this.state.isGroupChecked}
                onClick={() => {
                  this.toggleGroupChecked()
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView
          style={[
            styles.friend_wrapper,
            this.state.isExpanded ? styles.isExpanded : '',
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
    width: Mixins.scaleSize(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  friend_wrapper: {
    maxHeight: Mixins.scaleSize(200),
    backgroundColor: Colors.GRAY_LIGHT,
    display: 'none',
  },
  isExpanded: {
    display: 'flex',
  },
})

export default SelectGroupItem

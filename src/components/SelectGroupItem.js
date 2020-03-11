import React from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import CircleCheckBox from 'react-native-circle-checkbox'
import SelectFriendItem from './SelectFriendItem'

class SelectGroupItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false,
      groupMembers: this.setGroupMembers(),
    }
  }

  setGroupMembers() {
    let groupMembers = [...this.props.group.members]
    let index = groupMembers
      .map(function(item) {
        return item._id
      })
      .indexOf(this.props.user.id)

    if (index != -1) groupMembers.splice(index, 1)

    return groupMembers
  }

  componentDidMount = () => {
    this.updateGroupChecked()
  }

  toggleGroupChecked() {
    const isChecked = !this.updateGroupChecked()

    for (let member of this.state.groupMembers) {
      this.props.setRecipient(member._id, isChecked)
    }
  }

  toggleExpand = () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  updateSelectedMember = () => {
    let selectedMember = this.state.groupMembers.reduce((total, member) => {
      return this.props.recipients[member._id] ? total + 1 : total
    }, 0)

    return selectedMember
  }

  updateGroupChecked() {
    let isChecked = this.state.groupMembers.every(
      member => this.props.recipients[member._id]
    )

    return isChecked
  }

  render() {
    const selectedMember = this.updateSelectedMember()
    const updatedGroupChecked = this.updateGroupChecked()

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
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={Typography.F_H3}>{this.props.group.title}</Text>
                <Text style={{ marginLeft: Mixins.scaleSize(10) }}>
                  {this.state.isExpanded ? 'close' : 'open'}
                </Text>
              </View>
              <Text>
                {selectedMember} / {this.state.groupMembers.length}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              this.toggleGroupChecked()
            }}
          >
            <View style={styles.groupCheck}>
              <CircleCheckBox
                outerColor={Colors.VIOLET.dark}
                innerColor={Colors.VIOLET.dark}
                filterColor={Colors.PLUTO_WHITE}
                checked={updatedGroupChecked}
                onToggle={() => {
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
          <FlatList
            style={styles.postFeed}
            data={this.state.groupMembers}
            extraData={this.props.recipients}
            renderItem={({ item }) =>
              this.props.user.id != item._id ? (
                <SelectFriendItem
                  friend={item}
                  onPress={() => {
                    this.props.setRecipient(
                      item._id,
                      !this.props.recipients[item._id]
                    )
                  }}
                  checked={this.props.recipients[item._id]}
                />
              ) : null
            }
            keyExtractor={item => item._id}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selectGroupItem: {
    marginVertical: Mixins.scaleSize(10),
    borderRadius: Mixins.scaleSize(30),
    paddingVertical: Mixins.scaleSize(5),
    paddingHorizontal: Mixins.scaleSize(20),
    borderWidth: 1,
    borderColor: Colors.BLACK_ROCK,
  },
  title_wrapper: {
    height: Mixins.scaleSize(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
  groupCheck: {
    width: Mixins.scaleSize(40),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  friend_wrapper: {
    maxHeight: Mixins.scaleSize(200),
    display: 'none',
  },
  isExpanded: {
    display: 'flex',
  },
})

export default SelectGroupItem

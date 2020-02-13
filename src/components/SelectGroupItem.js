import React from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList,
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

  componentDidMount = () => {
    const isGroupChecked = (isChecked = this.props.group.members.every(
      member => this.props.recipients[member._id]
    ))

    this.setState({ isGroupChecked })
  }

  updateSelectedMember = () => {
    let selectedMember = this.props.group.members.reduce(
      (total, member) =>
        this.props.recipients[member._id] ? total + 1 : total,
      0
    )

    return selectedMember
  }

  toggleExpand = () => {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  toggleGroupChecked() {
    // let isChecked = this.props.group.members.every(
    //   member => this.props.recipients[member._id]
    // )
    const isGroupChecked = !this.state.isGroupChecked
    this.setState({ isGroupChecked })

    for (let member of this.props.group.members) {
      this.props.setRecipient(member._id, isGroupChecked)
    }

    this.updateSelectedMember()
  }

  render() {
    // let isChecked = this.props.group.members.every(
    //   member => this.props.recipients[member._id]
    // )
    let selectedMember = this.updateSelectedMember()

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
              <Text>{this.props.group.title}</Text>
              <Text>ICON</Text>
              <Text>
                {selectedMember} / {this.props.group.members.length}
              </Text>
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
          <FlatList
            style={styles.postFeed}
            data={this.props.group.members}
            extraData={this.props.recipients}
            renderItem={({ item }) => (
              <SelectFriendItem
                friend={item}
                setRecipient={this.props.setRecipient}
                recipients={this.props.recipients}
                updateSelectedMember={this.updateSelectedMember}
              />
            )}
            keyExtractor={item => item._id}
          />
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
    flexDirection: 'row',
    flexGrow: 1,
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
    backgroundColor: Colors.GRAY_LIGHT,
    display: 'none',
  },
  isExpanded: {
    display: 'flex',
  },
})

export default SelectGroupItem

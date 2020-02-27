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
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={Typography.F_H3}>{this.props.group.title}</Text>
                <Text style={{ marginLeft: Mixins.scaleSize(10) }}>
                  {this.state.isExpanded ? 'close' : 'open'}
                </Text>
              </View>
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
              <CircleCheckBox
                outerColor={Colors.VIOLET.dark}
                innerColor={Colors.VIOLET.dark}
                filterColor={Colors.PLUTO_WHITE}
                checked={this.state.isGroupChecked}
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

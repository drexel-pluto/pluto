import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import Physics from '../components/physics'
import IconButton from './../components/iconButton/IconButton'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: -1,
    }
  }

  setIndex(index) {
    this.setState({ index })
  }

  render() {
    const rightHeaderItems = [
      <IconButton type="search" />,
      <IconButton type="noti" />,
      <IconButton
        type="profile"
        _onPress={() => {
          this.props.navigation.navigate('Profile', {
            userId: this.props.userId,
          })
        }}
      />,
    ]

    return (
      <View style={[styles.homeScreen, Layouts.FLEX_CONTAINER]}>
        <Physics
          style={{ position: 'absolute', left: 0, top: 0, bottom: 0, right: 0 }}
          groups={this.props.groups}
          friends={this.props.friends}
          setIndex={index => this.setIndex(index)}
        />
        <ScreenHeader rightItems={rightHeaderItems} />
        <View style={styles.group_wrapper}>
          <TouchableOpacity
            onPress={() => {
              if (this.state.index == -1) {
                //TODO fetch posts from ALL friends instead of group 0
                this.props.openGroup(this.props.groups[0]._id)
              } else {
                this.props.openGroup(this.props.groups[this.state.index]._id)
              }
            }}
          >
            <Text style={[Typography.F_H1, { textAlign: 'center' }]}>
              {this.state.index == -1
                ? 'everyone'
                : this.props.groups[this.state.index].title}
            </Text>
            <Text style={{ textAlign: 'center' }}>view posts</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.action_wrapper}>
          <IconButton
            type="addPost"
            _onPress={() => {
              this.props.navigation.navigate('AddPost')
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  group_wrapper: {},
  action_wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '5%',
  },
})

export default Home

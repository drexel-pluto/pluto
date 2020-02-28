import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import Physics from '../components/physics'
import IconButton from './../components/iconButton/IconButton'

const pageDots = (total, current) => {
  let dot_total = total + 1
  let dot_current = current + 1
  let dots = []

  for (let index = 0; index < dot_total; index++) {
    dots.push(
      <View
        style={[
          Styles.shadow(Colors.VIOLET.dark),
          {
            width: Mixins.scaleSize(10),
            height: Mixins.scaleSize(10),
            borderRadius: Mixins.scaleSize(10) / 2,
            backgroundColor: Colors.VIOLET.dark,
            margin: Mixins.scaleSize(7),
            opacity: dot_current === index ? 1 : 0.5,
          },
        ]}
      ></View>
    )
  }

  return dots
}

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
        <ScreenHeader
          leftItems={<IconButton type="search" />}
          rightItems={rightHeaderItems}
        />
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
            <Text style={{ textAlign: 'center', color: Colors.VIOLET.dark }}>
              view posts >
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <View style={styles.action_wrapper}>
            <IconButton
              type="addPost"
              _onPress={() => {
                this.props.navigation.navigate('AddPost', {
                  defaultRecipients:
                    this.state.index > -1
                      ? this.props.groups[this.state.index].members
                      : this.props.friends,
                })
              }}
            />
          </View>
          <View style={styles.dot_wrapper}>
            {pageDots(this.props.groups.length, this.state.index)}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  group_wrapper: {
    paddingVertical: Mixins.scaleSize(40),
  },
  action_wrapper: {
    paddingBottom: Mixins.scaleSize(50),
    paddingHorizontal: Layouts.PAD_HORZ,
    // alignItems: 'flex-end',
    alignItems: 'center',
  },
  dot_wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: '5%',
    left: 0,
    width: '100%',
  },
})

export default Home

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import Physics from '../components/physics'
import IconButton from './../components/iconButton/IconButton'
import SvgSwipe from '../components/physics/SvgSwipe'

const min = 0

const pageDots = (total, current) => {
  let dot_total = total
  let dot_current = current
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
      index: min,
      swipe: {
        active: false,
        x: 0,
      },
    }

    this.swipe = React.createRef()
  }

  setIndex(index) {
    this.setState({ index })
  }

  toProfile(id) {
    this.props.navigation.navigate('Profile', {
      userId: id,
    })
  }

  render() {
    const rightHeaderItems = [
      <IconButton type="notiCenter" />,
      <IconButton
        type="myProfile"
        _onPress={() => {
          this.toProfile(this.props.userId)
        }}
      />,
    ]

    return (
      <View style={[styles.homeScreen, Layouts.FLEX_CONTAINER]}>
        <SvgSwipe
          ref={input => {
            this.swipe = input
          }}
          style={{ position: 'absolute', zIndex: 1 }}
          isLeft={true}
          color={'#FFFAAA'}
        />
        <Physics
          style={{ position: 'absolute', left: 0, top: 0, bottom: 0, right: 0 }}
          groups={this.props.groups}
          friends={this.props.friends}
          setIndex={index => this.setIndex(index)}
          newGroup={() => console.log('new group')}
          startSwipe={x => this.startSwipe(x)}
          moveSwipe={(x, y) => this.moveSwipe(x, y)}
          endSwipe={cancel => this.endSwipe(cancel)}
          toProfile={id => {
            this.toProfile(id)
          }}
        />
        <ScreenHeader
          leftItems={<IconButton type="searchItem" />}
          rightItems={rightHeaderItems}
        />
        <View style={styles.group_wrapper}>
          <TouchableOpacity
            onPress={() => {
              this.props.openGroup(this.props.groups[this.state.index]._id)
            }}
          >
            <Text style={[Typography.F_H1, { textAlign: 'center' }]}>
              {this.props.groups[this.state.index].title}
            </Text>
            <Text style={{ textAlign: 'center', color: Colors.VIOLET.dark }}>
              view posts >
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Layouts.BOTTOM_WRAPPER}>
          <View style={styles.action_wrapper}>
            <IconButton
              type="addFriend"
              requestNum={this.props.requestNum}
              _onPress={() => {
                this.props.navigation.navigate('AddFriend')
              }}
            />
            <IconButton
              type="addPost"
              _onPress={() => {
                this.props.navigation.navigate('AddPost', {
                  defaultRecipients: this.props.groups[this.state.index]
                    .members,
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

  startSwipe(x) {
    if (this.state.index !== min) return
    this.setState({
      swipe: {
        active: true,
        x,
      },
    })
  }

  moveSwipe(x, y) {
    if (this.state.index !== min) return

    this.swipe.setTargetPos({ x: x - this.state.swipe.x, y })
  }

  endSwipe(cancel) {
    if (this.state.index !== min) return

    if (!cancel) {
      this.swipe.animateToEdge(cancel, () => {
        this.props.navigation.navigate('EditGroup', {
          onBack: () => {
            this.endSwipe(true)
          },
        })
      })
    } else {
      this.swipe.animateToEdge(cancel)
    }

    this.setState({
      swipeTouch: {
        active: false,
        x: 0,
      },
    })
  }
}

const styles = StyleSheet.create({
  group_wrapper: {
    paddingVertical: Mixins.scaleSize(40),
  },
  action_wrapper: {
    paddingBottom: Mixins.scaleSize(40),
    paddingHorizontal: Layouts.PAD_HORZ,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

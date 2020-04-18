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
        key={index}
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
      swipe: {
        active: false,
        x: 0,
      },
      resetting: false,
    }

    this.swipe = React.createRef()
  }

  setIndex(index) {
    this.props.setSwipeIndex(index)
  }

  toProfile(id) {
    this.props.navigation.navigate('Profile', {
      userId: id,
    })
  }

  render() {
    const rightHeaderItems = (
      <>
        <IconButton
          type="notiCenter"
          _onPress={() => {
            this.props.navigation.navigate('Notifications')
          }}
        />
        <IconButton
          type="myProfile"
          _onPress={() => {
            this.toProfile(this.props.userId)
          }}
        />
      </>
    )

    return (
      <View style={[styles.homeScreen, Layouts.FLEX_CONTAINER]}>
        <SvgSwipe
          ref={input => {
            this.swipe = input
          }}
          style={{ position: 'absolute', zIndex: 1 }}
          isLeft={true}
          color={Colors.VIOLET.light}
        />
        <Physics
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            opacity: this.state.resetting ? 0 : 1,
          }}
          groups={this.props.groups}
          friends={this.props.friends}
          setIndex={index => this.props.setSwipeIndex(index)}
          newGroup={() => console.log('new group')}
          startSwipe={x => this.startSwipe(x)}
          moveSwipe={(x, y) => this.moveSwipe(x, y)}
          endSwipe={cancel => this.endSwipe(cancel)}
          key={this.props.physicsKey}
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
              this.props.openGroup(this.props.groups[this.props.swipeIndex]._id)
            }}
          >
            <Text style={[Typography.F_H1, { textAlign: 'center' }]}>
              {this.props.groups[this.props.swipeIndex].title}
            </Text>
            <Text style={{ textAlign: 'center', color: Colors.VIOLET.dark }}>
              view posts >
            </Text>
          </TouchableOpacity>
        </View>

        {
          // bottom fixed items
          // needs to be positioned separately to avoid blocking the touch in b/t
        }
        <View style={Layouts.BOTTOM_WRAPPER_LEFT}>
          <IconButton
            type="addFriend"
            requestNum={this.props.requestNum}
            _onPress={() => {
              this.props.goToAddFriend(() => this.reset())
            }}
          />
        </View>
        <View style={Layouts.BOTTOM_WRAPPER_RIGHT}>
          <IconButton
            type="addPost"
            _onPress={() => {
              this.props.navigation.navigate('AddPost', {
                defaultRecipients: this.props.groups[this.props.swipeIndex]
                  .members,
              })
            }}
          />
        </View>
        <View style={[Layouts.BOTTOM_WRAPPER_CENTER, styles.dot_wrapper]}>
          {pageDots(this.props.groups.length, this.props.swipeIndex)}
        </View>
      </View>
    )
  }

  startSwipe(x) {
    if (this.props.swipeIndex !== min) return
    this.setState({
      swipe: {
        active: true,
        x,
      },
    })
  }

  moveSwipe(x, y) {
    if (this.props.swipeIndex !== min) return

    this.swipe.setTargetPos({ x: x - this.state.swipe.x, y })
  }

  endSwipe(cancel) {
    if (this.props.swipeIndex !== min) return

    if (!cancel) {
      this.swipe.animateToEdge(cancel, () => {
        this.props.navigation.navigate('EditGroup', {
          onBack: () => {
            this.endSwipe(true)
          },
          reset: () => {
            this.reset()
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

  reset() {
    this.setState({ resetting: true })
    this.props.reset().then(() => {
      this.setState(state => ({
        resetting: false,
      }))
    })
  }
}

const styles = StyleSheet.create({
  group_wrapper: {
    paddingVertical: Mixins.scaleSize(40),
  },
  dot_wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 0,
    paddingBottom: Layouts.PAD_BOTTOM,
  },
})

export default Home

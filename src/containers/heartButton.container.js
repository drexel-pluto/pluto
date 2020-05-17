import React from 'react'
import { Text, View, Vibration } from 'react-native'
import { connect } from 'react-redux'
import { sendReact } from '../redux/reducers/post.reducer'
import HeartButton from '../components/iconButton/HeartButton'
import { Mixins } from './../styles/index'
import * as Haptics from 'expo-haptics'

/**
 * floating heart animation:
 * below resource used with modifications
 * https://github.com/underscopeio/react-native-floating-hearts/blob/master/FloatingHearts.js
 */

class HeartButtonContainer extends React.Component {
  constructor(props) {
    super(props)

    this.react = this.debounce(this._sendReact, 500)
    this.state = {
      likes: this.props.likes,
      count: 0,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.likes !== prevProps.likes) {
      this.setState({
        likes: this.props.likes,
      })
    }
  }

  debounce(callback, wait, context = this) {
    let timeout = null
    let callbackArgs = null

    const later = () => callback.apply(context, callbackArgs)

    return function() {
      callbackArgs = arguments
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  _sendReact = () => {
    const newLikes = this.state.likes - this.props.likes
    this.props.sendReact(this.props._id, newLikes)
  }

  updateReact() {
    this.setState({
      likes: this.state.likes + 1,
      count: this.state.likes > 0 ? this.state.count + 1 : this.state.count,
    })
    this.react()
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <HeartButton
          isLiked={this.state.likes > 0 ? true : false}
          count={this.state.count}
          _onPress={() => {
            this.updateReact()
          }}
        />
        <Text style={{ paddingLeft: Mixins.scaleSize(5) }}>
          {this.state.likes}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  sendReact,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeartButtonContainer)

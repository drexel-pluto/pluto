import React from 'react'
import { Text, View, Vibration } from 'react-native'
import { connect } from 'react-redux'
import { sendReact } from '../redux/reducers/post.reducer'
import HeartButton from '../components/iconButton/HeartButton'
import { Mixins } from './../styles/index'
import * as Haptics from 'expo-haptics'

class HeartButtonContainer extends React.Component {
  constructor(props) {
    super(props)

    this.react = this.debounce(this._sendReact, 500)
    this.state = {
      likes: this.props.likes,
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
    this.setState({ likes: this.state.likes + 1 })
    this.react()
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <HeartButton
          isLiked={this.state.likes > 0 ? true : false}
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

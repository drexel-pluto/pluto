import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Button,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../../styles/index'
import ScreenHeader from '../../components/ScreenHeader'
import AddPostOptionBar from '../../components/AddPostOptionBar'
import { Header } from 'react-navigation-stack'

class AddPost extends React.Component {
  constructor(props) {
    super(props)
    this.textInputRef = null
    this.state = {
      text: '',
    }
  }

  onFocusFunction = () => {
    setTimeout(() => {
      this.textInputRef.focus()
    }, 100)
  }

  componentWillUnmount() {
    this.focusListener.remove()
  }

  componentDidMount() {
    this.onFocusFunction()
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.onFocusFunction()
    })
  }

  submitPost() {
    this.props.submitPost(this.state.text)
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={Header.HEIGHT}
      >
        <ScreenHeader
          rightItem={<Button title="post" onPress={() => this.submitPost()} />}
        />
        <TextInput
          ref={ref => (this.textInputRef = ref)}
          placeholder="Quiz Deck Title"
          autoFocus={true}
          style={{ flex: 1 }}
          onChangeText={text => this.setState({ text })}
        />
        <AddPostOptionBar
          navigation={this.props.navigation}
          addImage={this.props.addImage}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default AddPost

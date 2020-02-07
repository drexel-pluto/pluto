import React from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../../styles/index'
import ScreenHeader from '../../components/ScreenHeader'
import AddPostOptionBar from '../../components/AddPostOptionBar'
import { Header } from 'react-navigation-stack'
import { NavigationEvents } from 'react-navigation'

class AddPost extends React.Component {
  constructor(props) {
    super(props)
    this.textInputRef = null
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
      console.log('DID FOCUS')
    })
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={Layouts.FLEX_CONTAINER}
        behavior="padding"
        keyboardVerticalOffset={Header.HEIGHT}
      >
        <ScreenHeader />
        <TextInput
          ref={ref => (this.textInputRef = ref)}
          placeholder="Quiz Deck Title"
          autoFocus={true}
          style={{ flex: 1 }}
        />
        <AddPostOptionBar navigation={this.props.navigation} />
      </KeyboardAvoidingView>
    )
  }
}

export default AddPost

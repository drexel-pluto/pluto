import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import InputHeader from './InputHeader'

class AddComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: undefined, // user's input
    }
  }

  onChangeText = text => this.setState({ text })

  onSubmit = () => {
    const { text } = this.state
    if (text) {
      // pass the comment and reset input

      if (this.props.commentId != undefined) {
        this.props.sendComment(text, this.props.commentId).then(action => {
          if (action.type.endsWith('SUCCESS')) {
            this.setState({ text: undefined })
          } else {
            //ERROR POSTING
          }
        })
      } else {
        this.props.sendComment(text).then(action => {
          if (action.type.endsWith('SUCCESS')) {
            this.setState({ text: undefined })
          } else {
            //ERROR POSTING
          }
        })
      }
    }

    Keyboard.dismiss()
  }

  render() {
    return (
      <View style={styles.addComment}>
        <InputHeader
          multiline={true}
          placeholder={'enter a reply...'}
          text={this.state.text}
          onChangeText={this.onChangeText}
          buttonText={'reply'}
          onSubmit={this.onSubmit}
          extraPadding={true}
          disabled={this.props.sending}
        />
      </View>
    )
  }
}

AddComment.defaultProps = {
  commentId: undefined,
}

const styles = StyleSheet.create({
  addComment: {
    paddingVertical: Layouts.PAD_VERT,
  },
})

export default AddComment

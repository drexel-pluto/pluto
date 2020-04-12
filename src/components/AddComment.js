import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
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

      this.props.sendComment(text).then(action => {
        if (action.type.endsWith('SUCCESS')) {
          this.setState({ text: undefined })
        } else {
          //ERROR POSTING
        }
      })
    } else {
      alert('Please enter your comment first')
    }
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
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  addComment: {
    paddingHorizontal: Mixins.scaleSize(5),
    paddingVertical: Layouts.PAD_VERT,
    paddingHorizontal: Layouts.PAD_HORZ_SM,
  },
})

export default AddComment

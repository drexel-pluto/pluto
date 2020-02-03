import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import Color from 'color'

class AddComment extends React.Component {
  state = {
    text: undefined, // user's input
  }

  onChangeText = text => this.setState({ text })

  submit = () => {
    const { text } = this.state
    if (text) {
      this.setState({ text: undefined }, () => this.props.onSubmit(text))
    } else {
      alert('Please enter your comment first')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          multiline
          placeholder="Add a comment..."
          keyboardType="twitter" // keyboard with no return button
          style={styles.input}
          value={this.state.text}
          onChangeText={this.onChangeText} // handle input changes
        />
        <TouchableHighlight style={styles.button} onPress={this.submit}>
          <Text style={[styles.text, !this.state.text ? styles.inactive : []]}>
            reply
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#EEE',
    alignItems: 'center',
    paddingLeft: Mixins.scaleSize(15),
  },
  input: {
    flex: 1,
    height: Mixins.scaleSize(40),
    fontSize: Mixins.scaleFont(15),
  },
  button: {
    height: Mixins.scaleSize(40),
    paddingHorizontal: Mixins.scaleSize(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactive: {
    color: '#CCC',
  },
  text: {
    color: '#3F51B5',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: Mixins.scaleFont(15),
  },
})

export default AddComment

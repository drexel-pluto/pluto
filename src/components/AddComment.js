import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

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
      <View style={styles.addComment}>
        <TextInput
          multiline={true}
          placeholder="Add a comment..."
          style={styles.input}
          value={this.state.text}
          onChangeText={this.onChangeText} // handle input changes
        />
        <TouchableOpacity style={styles.button} onPress={this.submit}>
          <Text
            style={[
              styles.button__text,
              !this.state.text ? styles.inactive : [],
            ]}
          >
            reply
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  addComment: {
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
    paddingTop: Mixins.scaleSize(10),
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
  button__text: {
    color: '#3F51B5',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: Mixins.scaleFont(15),
  },
})

export default AddComment

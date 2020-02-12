import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import InputHeader from './InputHeader'

class SearchInput extends React.Component {
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
      // pass the search keywoard and reset input
      // onSubmit should be coming from screen js
      // might change depending on how we use redux
      this.setState({ text: undefined }, () => this.props.onSubmit(text))
    } else {
      alert('Please enter your comment first')
    }
  }

  render() {
    return (
      <InputHeader
        placeholder={'enter a keyword...'}
        text={this.state.text}
        onChangeText={this.onChangeText}
        buttonText={'search'}
        onSubmit={this.onSubmit}
      />
    )
  }
}

const styles = StyleSheet.create({
  // searchInput: {
  //   flexDirection: 'row',
  //   borderWidth: 1,
  //   borderColor: Colors.GRAY_DARK,
  //   alignItems: 'center',
  //   borderRadius: 50,
  //   paddingLeft: Mixins.scaleSize(15),
  // },
  // button: {
  //   height: Mixins.scaleSize(40),
  //   paddingHorizontal: Mixins.scaleSize(20),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // inactive: {
  //   color: '#CCC',
  // },
  // button__text: {
  //   color: '#3F51B5',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   fontSize: Mixins.scaleFont(15),
  // },
})

export default SearchInput

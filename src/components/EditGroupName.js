import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
// import InputHeader from './InputHeader'
import { PAD_HORZ } from '../styles/layouts'
import IconButton from './iconButton/IconButton'

class EditGroupName extends React.Component {
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
      alert('Please enter the name first')
    }
  }

  render() {
    return (
      <View style={styles.inputName}>
      <TextInput           
      style={[
            styles.input,Typography.F_H3,
            this.props.extraPadding
              ? { paddingTop: Mixins.scaleSize(12) }
              : null,
          ]}
          multiline={this.props.multiline}
          placeholder={'enter a group name...'}
          value={this.props.text}
          onChangeText={this.props.onChangeText} // handle input changes
      />
      <IconButton/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputName: {
    paddingHorizontal: Layouts.PAD_HORZ, 
    paddingVertical: Layouts.PAD_VERT,
    flexDirection: 'row',
    paddingHorizontal: Layouts.PAD_HORZ,
    
    justifyContent: 'space-around',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.VIOLET.dark,
    // borderRadius: Mixins.scaleSize(30),
  },
  // searchInput: {
  //     flexDirection: 'row',
  //     borderWidth: 1,
  //     borderColor: Colors.GRAY_DARK,
  //     alignItems: 'center',
  //     borderRadius: 50,
  //     paddingLeft: Mixins.scaleSize(15),
  // },
  // button: {
  //     height: Mixins.scaleSize(40),
  //     paddingHorizontal: Mixins.scaleSize(20),
  //     alignItems: 'center',
  //     justifyContent: 'center',
  // },
  // inactive: {
  //     color: '#CCC',
  // },
  // button__text: {
  //     color: '#3F51B5',
  //     fontWeight: 'bold',
  //     textAlign: 'center',
  //     fontSize: Mixins.scaleFont(15),
  // },
})

export default EditGroupName

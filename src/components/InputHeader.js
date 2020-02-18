import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'

class InputHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.input_wrapper}>
        <TextInput
          style={styles.input}
          multiline={this.props.multiline}
          placeholder={this.props.placeholder}
          value={this.props.text}
          onChangeText={this.props.onChangeText} // handle input changes
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.onSubmit()
          }}
        >
          <Text
            style={[
              styles.button__text,
              !this.props.text ? styles.inactive : [],
            ]}
          >
            {this.props.buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

InputHeader.defaultProps = {
  placeholder: 'enter...',
  multiline: false,
}

const styles = StyleSheet.create({
  input_wrapper: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: Colors.GRAY_DARK,
    // borderRadius: 50,
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
  button__text: {
    color: '#3F51B5',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: Mixins.scaleFont(15),
  },
})

export default InputHeader

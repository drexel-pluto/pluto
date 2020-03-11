import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import Button from './Button'

class InputHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[styles.inputHeader, Styles.shadow(Colors.VIOLET.dark)]}>
        <TextInput
          style={[
            styles.input,
            this.props.extraPadding
              ? { paddingTop: Mixins.scaleSize(12) }
              : null,
          ]}
          multiline={this.props.multiline}
          placeholder={this.props.placeholder}
          value={this.props.text}
          onChangeText={this.props.onChangeText} // handle input changes
        />

        <View
          style={[
            styles.button_wrapper,
            !this.props.text ? styles.inactive : null,
          ]}
        >
          <Button
            text={this.props.buttonText}
            type={'small'}
            isBold={true}
            _onPress={this.props.onSubmit}
          />
        </View>
      </View>
    )
  }
}

InputHeader.defaultProps = {
  placeholder: 'enter...',
  multiline: false,
}

const styles = StyleSheet.create({
  inputHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Mixins.scaleSize(15),
    borderWidth: 1,
    borderColor: Colors.VIOLET.med,
    borderRadius: Mixins.scaleSize(30),
  },
  input: {
    flex: 1,
    height: Mixins.scaleSize(40),
    fontSize: Mixins.scaleFont(15),
  },
  button_wrapper: {
    paddingHorizontal: Mixins.scaleSize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactive: {
    // color: '#CCC',
    opacity: 0.5,
  },
})

export default InputHeader

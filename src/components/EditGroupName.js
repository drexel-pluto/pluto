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
  render() {
    return (
      <View style={styles.inputName}>
      <TextInput           
      style={[
              Typography.F_H3,
              { paddingTop: Mixins.scaleSize(12) },
              styles.input
          ]}
          placeholder={'enter a group name...'}
          value={this.props.value}
          onChangeText={this.props.onChange} // handle input changes
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputName: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.VIOLET.dark,
    width: 120,
  },
})

export default EditGroupName

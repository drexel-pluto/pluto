import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

export default AddPostOptionBar = props => {
  openImagePickerAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status == 'denied') {
      alert('Sorry, we need camera roll permissions to make this work!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    })

    if (pickerResult.uri) {
      let data = {
        uri: pickerResult.uri,
        type: pickerResult.type,
      }
      props.addImage(data)
    }
  }

  openCameraAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    if (status == 'denied') {
      alert('Sorry, we need camera permissions to make this work!')
      return
    }

    let pickerResult = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    })

    if (pickerResult.uri) {
      let data = {
        uri: pickerResult.uri,
        type: pickerResult.type,
      }
      props.addImage(data)
    }
  }

  return (
    <View style={styles.addPostOptionBar}>
      <Text>Add Post Option Bar</Text>
      <View style={styles.option_wrapper}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => this.openCameraAsync()}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => this.openImagePickerAsync()}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => props.navigation.navigate('AddPostPermissions')}
        ></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  addPostOptionBar: {
    backgroundColor: Colors.GRAY_LIGHT,
  },
  option_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  option: {
    width: Mixins.scaleSize(50),
    height: Mixins.scaleSize(50),
    borderRadius: Mixins.scaleSize(25),
    backgroundColor: Colors.GRAY_DARK,
  },
})

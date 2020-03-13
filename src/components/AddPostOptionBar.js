import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import IconButton from './../components/iconButton/IconButton'

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
      <View style={styles.option_wrapper}>
        <View style={styles.option}>
          <IconButton type="uploadImage" _onPress={this.openCameraAsync} />
        </View>
        <View style={styles.option}>
          <IconButton type="chooseImage" _onPress={this.openImagePickerAsync} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  addPostOptionBar: {
    marginHorizontal: Layouts.PAD_HORZ,
    marginVertical: Layouts.PAD_VERT,
  },
  option_wrapper: {
    flexDirection: 'row',
  },
  option: {
    marginRight: Mixins.scaleSize(15),
    backgroundColor: Colors.VIOLET.dark,
    width: Mixins.scaleSize(50),
    borderRadius: Mixins.scaleSize(17),
    alignItems: 'center',
    justifyContent: 'center',
  },
})

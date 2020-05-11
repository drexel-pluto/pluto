import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

class Profile extends React.Component {
  constructor(props) {
    super(props)

    user = this.props.route.params?.user ?? {}

    this.state = {
      username: user.username,
      name: user.name,
      imageUri: user.profilePicURL,
      bio: user.bio,
    }
  }

  getDifferent() {
    original = this.props.route.params?.user ?? {}
    obj = {}

    this.state.username != original.username &&
      (obj.username = this.state.username)
    this.state.name != original.name && (obj.name = this.state.name)
    this.state.imageUri != original.profilePicURL &&
      (obj.imageUri = this.state.imageUri)
    this.state.bio != original.bio && (obj.bio = this.state.bio)

    if (Object.keys(obj).length === 0) return null

    return obj
  }

  openImagePickerAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status == 'denied') {
      alert('Sorry, we need camera roll permissions to make this work!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
    })

    if (pickerResult.uri) {
      this.setState({ imageUri: pickerResult.uri })
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior={'padding'}>
        <ScreenHeader
          leftItems={
            <Button
              type="text"
              text="cancel"
              color="Colors.BLACK_ROCK"
              _onPress={() => this.props.navigation.goBack()}
            />
          }
          rightItems={
            <Button
              type="outline"
              text={this.props.isNew ? 'create' : 'update'}
              color="Colors.BLACK_ROCK"
              _onPress={() => {
                if (this.getDifferent()) this.props.submit(this.getDifferent())
              }}
            />
          }
        />
        <TouchableOpacity onPress={() => this.openImagePickerAsync()}>
          <View style={styles.image_wrapper}>
            <Image
              source={{
                uri: this.state.imageUri,
              }}
              style={{
                width: Mixins.scaleSize(120),
                height: Mixins.scaleSize(120),
                borderRadius: Mixins.scaleSize(120 / 2),
                backgroundColor: Colors.GRAY_LIGHT
              }}
            />
          </View>
          <Text style={{
            fontWeight: "bold",
            color: Colors.VIOLET.dark,
            alignSelf: "center"
          }}>change profile pic</Text>
        </TouchableOpacity>
        <View style={styles.input_section}>
          <View style={styles.input_wrapper}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              placeholder={'enter your name'}
              style={styles.input}
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </View>
          <View style={styles.input_wrapper}>
            <Text style={styles.label}>Bio:</Text>
            <TextInput
              placeholder={'enter your bio'}
              style={[styles.input, { maxHeight: Mixins.scaleSize(250) }]}
              value={this.state.bio}
              onChangeText={bio => this.setState({ bio })}
              multiline={true}
              scrollEnabled={false}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  image_wrapper: {
    alignItems: 'center',
    marginBottom: Layouts.PAD_VERT,
  },
  input_section: {
    paddingHorizontal: Layouts.PAD_HORZ,
    marginTop: 20,
  },
  input_wrapper: {
    flexDirection: 'row',
    paddingVertical: Layouts.PAD_VERT,
    borderTopColor: Colors.GRAY_LIGHT,
    borderTopWidth: 1,
  },
  label: {
    width: Mixins.scaleSize(80),
    fontSize: 16,
    fontWeight: '600',
    color: Colors.BLACK_ROCK,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '300',
    color: Colors.BLACK_ROCK,
  },
})

export default Profile

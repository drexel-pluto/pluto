import React, { Component } from 'react'
import { Button, TextInput, View, Text, TouchableOpacity, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

export default class CreateProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      name: '',
      gender: 'male',
      imageUri: '',
    }
  }


  openImagePickerAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status == 'denied') {
      alert('Sorry, we need camera roll permissions to make this work!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.uri) {
      this.setState({imageUri: pickerResult.uri})
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
        {this.props.error.length > 0 && (
          <View style={{ backgroundColor: 'red' }}>
            <Text>{this.props.error}</Text>
          </View>
        )}
        <TouchableOpacity onPress={() => this.openImagePickerAsync()}>
          <Image source={{ uri: this.state.imageUri ? this.state.imageUri : 'https://via.placeholder.com/200' }} style={{width: 200, height: 200}} />
        </TouchableOpacity>
        <TextInput
          style={{
            height: 40,
            width: '60%',
            backgroundColor: '#EEE',
            marginBottom: 6,
          }}
          placeholder="Insert username"
          onChangeText={username => this.setState({ username })}
          autoCompleteType="username"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="username"
        />
        <TextInput
          style={{
            height: 40,
            width: '60%',
            backgroundColor: '#EEE',
            marginBottom: 6,
          }}
          placeholder="Insert Email"
          onChangeText={email => this.setState({ email })}
          autoCompleteType="email"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="email"
          keyboardType="email-address"
        />
        <TextInput
          style={{
            height: 40,
            width: '60%',
            backgroundColor: '#EEE',
            marginBottom: 6,
          }}
          placeholder="Insert Full Name"
          onChangeText={name => this.setState({ name })}
          autoCompleteType="name"
          autoCapitalize="words"
          autoCorrect={false}
          textContentType="name"
        />
        <TextInput
          style={{
            height: 40,
            width: '60%',
            backgroundColor: '#EEE',
            marginBottom: 6,
          }}
          placeholder="Insert password"
          onChangeText={password => this.setState({ password })}
          autoCompleteType="password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry={true}
        />
        <Button
          onPress={() =>
            this.props.create({
              username: this.state.username,
              email: this.state.email,
              name: this.state.name,
              password: this.state.password,
              gender: this.state.gender,
            }, this.state.imageUri)
          }
          title="Click here to create profile"
        />
        <Button onPress={() => this.props.setIsCreate(false)} title="login" />
      </View>
    )
  }
}

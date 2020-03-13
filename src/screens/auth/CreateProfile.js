import React, { Component } from 'react'
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import PlutoLogo from './../../assets/images/plutoLogo.svg'
import { LinearGradient } from 'expo-linear-gradient'
import {
  Colors,
  Typography,
  Mixins,
  Layouts,
  Styles,
} from './../../styles/index'
import Button from './../../components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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

    let pickerResult = await ImagePicker.launchImageLibraryAsync()

    if (pickerResult.uri) {
      this.setState({ imageUri: pickerResult.uri })
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <LinearGradient
          colors={Colors.gradient.light(Colors.VIOLET)}
          style={{ flex: 1 }}
        >
          <View style={[styles.create, Styles.shadow(Colors.VIOLET.dark)]}>
            <TouchableOpacity onPress={() => this.openImagePickerAsync()}>
              <View style={styles.image_wrapper}>
                {this.state.imageUri ? (
                  <Image
                    source={{
                      uri: this.state.imageUri,
                    }}
                    style={{
                      width: Mixins.scaleSize(180),
                      height: Mixins.scaleSize(180),
                    }}
                  />
                ) : (
                  <View
                    style={{
                      width: Mixins.scaleSize(180),
                      height: Mixins.scaleSize(180),
                      backgroundColor: Colors.rgba(Colors.BLACK_ROCK, 0.5),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={[Typography.F_H3, { color: 'white' }]}>
                      upload photo
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>

            {// error
            this.props.error.length > 0 > 0 && (
              <View style={{ backgroundColor: Colors.MELON.dark }}>
                <Text style={{ color: 'white' }}>{this.props.error}</Text>
              </View>
            )}

            <View
              style={{
                paddingVertical: Layouts.PAD_VERT,
                width: '100%',
                alignItems: 'center',
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="Insert username"
                onChangeText={username => this.setState({ username })}
                autoCompleteType="username"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="username"
              />
              <TextInput
                style={styles.input}
                placeholder="Insert email"
                onChangeText={email => this.setState({ email })}
                autoCompleteType="email"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="email"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Insert full name"
                onChangeText={name => this.setState({ name })}
                autoCompleteType="name"
                autoCapitalize="words"
                autoCorrect={false}
                textContentType="name"
              />
              <TextInput
                style={styles.input}
                placeholder="Insert password"
                onChangeText={password => this.setState({ password })}
                autoCompleteType="password"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry={true}
              />
            </View>
            <View>
              <Button
                style={{ marginBottom: Layouts.PAD_VERT }}
                _onPress={() =>
                  this.props.create(
                    {
                      username: this.state.username,
                      email: this.state.email,
                      name: this.state.name,
                      password: this.state.password,
                      gender: this.state.gender,
                    },
                    this.state.imageUri
                  )
                }
                text="create"
                color={Colors.MELON}
              />
              <Button
                _onPress={() => this.props.setIsCreate(false)}
                text="login"
                type="outline"
              />
            </View>
          </View>
        </LinearGradient>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  create: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image_wrapper: {
    borderRadius: 999,
    overflow: 'hidden',
    marginBottom: Layouts.PAD_VERT,
  },
  input: {
    height: Mixins.scaleSize(40),
    width: '70%',
    marginBottom: 6,
    borderRadius: Mixins.scaleSize(20),
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: Mixins.scaleSize(5),
    paddingHorizontal: Mixins.scaleSize(15),
  },
})

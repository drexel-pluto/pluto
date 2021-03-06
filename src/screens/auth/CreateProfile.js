import React, { Component } from 'react'
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  Animated,
  ActivityIndicator
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import {
  Colors,
  Typography,
  Mixins,
  Layouts,
  Styles,
} from './../../styles/index'

import CircleCheckBox from 'react-native-circle-checkbox'
import Button from '../../components/Button'
import EULA from '../../components/EULA'

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
      bio: '',
      pageOffset: new Animated.Value(0),
      agreed: false
    }
  }

  openImagePickerAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status == 'denied') {
      alert('Sorry, we need camera roll permissions to make this work!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({allowsEditing: true})

    if (pickerResult.uri) {
      this.setState({ imageUri: pickerResult.uri })
    }
  }

  setPageOffset( index ) {
    Animated.spring(this.state.pageOffset, {
      toValue: -index * Dimensions.get('window').width,
      friction: 10
    }).start()
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1, 
          backgroundColor: Colors.PLUTO_WHITE, 
          marginTop: 120,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
      >
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{
            flexGrow: 1, 
            justifyContent: "center",
          }}
          alwaysBounceVertical={false}
        >
          {this.props.loading 
          ? <ActivityIndicator size="large" />
          : <Animated.View style={{
              width: "100%",
              flexDirection: "row",
              flex: 1,
              left: this.state.pageOffset,
              alignItems: "center"
            }}>
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

                <View
                  style={{
                    paddingVertical: Layouts.PAD_VERT,
                    width: '100%',
                    alignItems: 'center',
                  }}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="username"
                    onChangeText={username => this.setState({ username })}
                    autoCompleteType="username"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="username"
                    placeholderTextColor={Colors.BLACK_ROCK + "88"}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="email"
                    onChangeText={email => this.setState({ email })}
                    autoCompleteType="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="email"
                    keyboardType="email-address"
                    placeholderTextColor={Colors.BLACK_ROCK + "88"}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="password"
                    onChangeText={password => this.setState({ password })}
                    autoCompleteType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    secureTextEntry={true}
                    placeholderTextColor={Colors.BLACK_ROCK + "88"}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="full name"
                    onChangeText={name => this.setState({ name })}
                    autoCompleteType="name"
                    autoCapitalize="words"
                    autoCorrect={false}
                    textContentType="name"
                    placeholderTextColor={Colors.BLACK_ROCK + "88"}
                  />
                  <TextInput
                    style={styles.multiLineInput}
                    placeholder="bio"
                    onChangeText={bio => this.setState({ bio })}
                    multiline={true}
                    placeholderTextColor={Colors.BLACK_ROCK + "88"}
                  />
                </View>
                <View style={{flexDirection: "row", alignItems: "baseline"}}>
                  <Button
                    _onPress={() => this.props.setIsCreate(false)}
                    text="back"
                    type="text"
                    style={{marginRight: 20}}
                  />
                  <Button
                    style={{ marginBottom: Layouts.PAD_VERT }}
                    _onPress={() => this.setPageOffset(1)}
                    text="next"
                    color={Colors.VIOLET}
                  />
                  {/* <Button
                    style={{ marginBottom: Layouts.PAD_VERT }}
                    _onPress={() =>
                      this.props.create(
                        {
                          username: this.state.username,
                          email: this.state.email,
                          name: this.state.name,
                          password: this.state.password,
                          gender: this.state.gender,
                          bio: this.state.bio,
                        },
                        this.state.imageUri
                      )
                    }
                    text="create"
                    color={Colors.VIOLET}
                  /> */}
                </View>
              </View>
            
              <View style={[styles.create, {
                justifyContent: "flex-start"
              }]}>
                <EULA/>
                <View style={{flexDirection: "row", alignItems: "center", marginVertical: Layouts.PAD_VERT * 2}}>
                  <CircleCheckBox
                    checked={this.state.agreed}
                    outerColor={Colors.VIOLET.dark}
                    innerColor={Colors.VIOLET.dark}
                    filterColor={Colors.PLUTO_WHITE}
                    onToggle={() => {
                      this.setState((state) => ({
                        agreed: !state.agreed
                      }))
                    }}
                  />
                  <Text style={[Typography.F_SIZE_16, {marginLeft: 16}]}>
                    I agree to the pluto terms of service
                  </Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "baseline", marginBottom: 30}}>
                  <Button
                    _onPress={() => this.setPageOffset(0)}
                    text="back"
                    type="text"
                    style={{marginRight: 20}}
                  />
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
                          bio: this.state.bio,
                        },
                        this.state.imageUri
                      )
                    }
                    text="create account"
                    color={Colors.VIOLET}
                    disabled={!this.state.agreed}
                  />
                </View>
              </View>
            </Animated.View> }
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  create: {
    alignItems: 'center',
    justifyContent: "center",
    marginVertical: Mixins.scaleSize(40),
    width: "100%",
  },
  image_wrapper: {
    borderRadius: 999,
    overflow: 'hidden',
    marginBottom: Layouts.PAD_VERT,
  },
  input: {
    height: Mixins.scaleSize(40),
    width: '70%',
    marginBottom: Layouts.PAD_VERT,
    borderRadius: Mixins.scaleSize(20),
    borderWidth: 1,
    borderColor: Colors.BLUE.dark,
    paddingVertical: Mixins.scaleSize(5),
    paddingHorizontal: Mixins.scaleSize(15),
  },
  multiLineInput: {
    height: Mixins.scaleSize(80),
    width: '70%',
    marginBottom: Layouts.PAD_VERT,
    borderRadius: Mixins.scaleSize(20),
    borderWidth: 1,
    borderColor: Colors.BLUE.dark,
    paddingVertical: Mixins.scaleSize(5),
    paddingHorizontal: Mixins.scaleSize(15),
  },
})

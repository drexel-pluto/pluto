import React, { Component } from 'react'
import { 
  TextInput, 
  View, 
  Text, 
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import {
  Colors,
  Typography,
  Mixins,
  Layouts,
  Styles,
} from './../../styles/index'
import { VIOLET } from '../../styles/colors'
import Button from './../../components/Button'
import PlutoLogo from './../../assets/images/plutoLogo.svg'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
  }

  login = (username, password) => {
    this.props
      .login(username, password)
      .then(action => {
        this.props.navigation.navigate('App')
      })
      .catch(response => {})
  }

  render() {
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={Colors.gradient.light(VIOLET)}
      >
        <KeyboardAvoidingView
          style={{flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
        >
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}
          >
            <View style={[styles.login, Styles.shadow(Colors.VIOLET.dark)]}>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: Mixins.scaleSize(20),
                }}
              >
                <PlutoLogo />
              </View>
              <Text
                style={[
                  Typography.F_H1,
                  { color: 'white', marginBottom: Layouts.PAD_VERT },
                ]}
              >
                log in
              </Text>
              {this.props.error.length > 0 && (
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
                  placeholderTextColor={Colors.BLACK_ROCK + "88"}
                  placeholder="password"
                  onChangeText={password => this.setState({ password })}
                  autoCompleteType="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  secureTextEntry={true}
                />
              </View>
              <View style={{ paddingVertical: Layouts.PAD_VERT }}>
                <Button
                  style={{ marginBottom: Layouts.PAD_VERT }}
                  _onPress={() =>
                    this.props.login(this.state.username, this.state.password)
                  }
                  text="login"
                  color={Colors.MELON}
                />
                <Button
                  _onPress={() => this.props.setIsCreate(true)}
                  text="create account"
                  type="outline"
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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

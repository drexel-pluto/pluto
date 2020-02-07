import React, { Component } from 'react'
import { Button, TextInput, View, Text } from 'react-native'

export default class CreateProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      name: '',
      gender: 'male',
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
            })
          }
          title="Click here to create profile"
        />
        <Button onPress={() => this.props.setIsCreate(false)} title="login" />
      </View>
    )
  }
}

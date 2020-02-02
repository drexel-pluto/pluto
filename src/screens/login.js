import React, { Component } from 'react'
import { Button, TextInput, View, Text } from 'react-native'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
  }

  login = (username, password) => {
    this.props
      .login(username, password)
      .then(action => {
        console.log('success!')
        this.props.navigation.navigate('App')
      })
      .catch(response => {
        console.log(response)
      })
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
        />
        <Button
          onPress={() =>
            this.props.login(this.state.username, this.state.password)
          }
          title="Click here to login"
        />
      </View>
    )
  }
}

import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'

export default class AuthLoadingScreen extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

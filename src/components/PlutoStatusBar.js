import React from 'react'
import { View, StatusBar } from 'react-native'
export default PlutoStatusBar = props => {
  // we can add more customizations later on as to status bar bg/font colors
  return (
    <View>
      <StatusBar barStyle="dark-content" />
    </View>
  )
}

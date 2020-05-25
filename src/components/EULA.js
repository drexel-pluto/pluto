import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import { WebView } from 'react-native-webview';
const eulaHTML = require('../assets/misc/eula.html');

export default EULA = props => {
  return (
    <WebView source={eulaHTML} style={styles.webview}
    originWhitelist={['*']}
    automaticallyAdjustContentInsets={false}
    scalesPageToFit={false}
    bounces={false} />
  )
}

const styles = StyleSheet.create({
  webview: {
    flexGrow:1,
    borderRadius: 20,
    borderColor: Colors.BLUE.dark,
    borderWidth:1,
    width: Mixins.scaleSize(300),
  }
})

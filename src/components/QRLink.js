import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'

class QRLink extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.link}>
        <Text>QR Link</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  link: {
    backgroundColor: Colors.GRAY_DARK,
    height: 300,
  },
})

export default QRLink

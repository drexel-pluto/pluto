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
          <Text style={[styles.heading, Typography.F_H1]}>your QR code</Text>
          <View style={styles.qr}>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  link: {
    alignItems: 'center',
    paddingVertical: Layouts.PAD_VERT,
  },
  heading: {
    paddingVertical: Layouts.PAD_VERT,
    textAlign: 'center',
  },
  qr: {
    height: Mixins.scaleSize(200),
    width: Mixins.scaleSize(200), 
    backgroundColor: Colors.GRAY_MEDIUM,
  },
})

export default QRLink

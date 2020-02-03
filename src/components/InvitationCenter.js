import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

class InvitationCenter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.invitationCenter}>
        <Text>Invitation Center</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  invitationCenter: {
    backgroundColor: Colors.GRAY_MEDIUM,
    height: 600,
  },
})

export default InvitationCenter

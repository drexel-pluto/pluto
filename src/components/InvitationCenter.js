import React from 'react'
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import IconButton from './iconButton/IconButton'
import { LinearGradient } from 'expo-linear-gradient'

class InvitationCenter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={styles.invitationCenter}>
        <LinearGradient
          colors={Colors.UI_BG_GRADIENT}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0, 0.5]}
          style={{
            padding: Mixins.scaleSize(15),
          }}
        >
          <View>
            <Text style={[styles.invitationHeading, Typography.F_H2]}>
              friend requests
            </Text>
          </View>
          <View style={styles.requestContainer}>
            <View style={styles.requestContent}>
              <Text style={[styles.requestText, Typography.F_BODY]}>
                friendly person
              </Text>
              <IconButton />
              <IconButton />
            </View>
          </View>
          <View style={styles.requestContainer}>
            <View style={styles.requestContent}>
              <Text style={[styles.requestText, Typography.F_BODY]}>
                friendly person
              </Text>
              <IconButton />
              <IconButton />
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  invitationHeading: {
    paddingVertical: Layouts.PAD_VERT,
    textAlign: 'center',
  },
  invitationCenter: {
    alignItems: 'center',
    height: Mixins.scaleSize(520),
  },
  requestContainer: {
    paddingBottom: Layouts.PAD_VERT,
  },
  requestContent: {
    flexDirection: 'row',
    width: Mixins.scaleSize(320),
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: Mixins.scaleSize(20),
    borderWidth: Mixins.scaleSize(1),
    borderColor: Colors.VIOLET.dark,
  },
  requestText: {
    paddingVertical: Layouts.PAD_VERT,
  },
})

export default InvitationCenter

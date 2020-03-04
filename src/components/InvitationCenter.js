import React from 'react'
import { View, Image, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import IconButton from './iconButton/IconButton'
import { LinearGradient } from 'expo-linear-gradient'

class InvitationCenter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.invitationCenter}>
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
            <IconButton type="accept" />
            <IconButton type="decline" />
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
        <View style={styles.requestContainer}>
          <View style={styles.requestContent}>
            <Text style={[styles.requestText, Typography.F_BODY]}>
              friendly person
              </Text>
            <IconButton />
            <IconButton />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  invitationHeading: {
    paddingVertical: Layouts.PAD_VERT,
    textAlign: 'center',
  },
  invitationCenter: {
    alignItems: "center",
    paddingBottom: Layouts.PAD_VERT * 2
  },
  requestContainer: {
    paddingBottom: Layouts.PAD_VERT
  },
  requestContent: {
    flexDirection: 'row',
    width: Mixins.scaleSize(320),
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: Mixins.scaleSize(60),
    borderWidth: Mixins.scaleSize(1),
    borderColor: Colors.VIOLET.dark,
    paddingHorizontal: Layouts.PAD_HORZ
  },
  requestText: {
    paddingVertical: Layouts.PAD_VERT,
    flex: 1
  },
})

export default InvitationCenter

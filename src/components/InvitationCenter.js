import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import IconButton from './iconButton/IconButton'
import { LinearGradient } from 'expo-linear-gradient'

class InvitationCenter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text style={[styles.invitationHeading, Typography.F_H2]}>
          friend requests
        </Text>
        <ScrollView contentContainerStyle={styles.invitationCenter}>
          {this.props.requests.map(request => (
            <View style={styles.requestContainer}>
              <View style={styles.requestContent}>
                <Text style={[styles.requestText, Typography.F_BODY]}>
                  {request.from.name}
                </Text>
                <IconButton
                  type="accept"
                  _onPress={() => this.props.accept(request.from.username)}
                />
                <IconButton
                  type="reject"
                  _onPress={() => this.props.reject(request.from.username)}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
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
    paddingBottom: Layouts.PAD_VERT * 2,
  },
  requestContainer: {
    paddingBottom: Layouts.PAD_VERT,
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
    paddingHorizontal: Layouts.PAD_HORZ,
  },
  requestText: {
    paddingVertical: Layouts.PAD_VERT,
    flex: 1,
  },
})

export default InvitationCenter

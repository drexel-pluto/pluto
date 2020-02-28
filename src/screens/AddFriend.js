import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from './../components/ScreenHeader'
import QRLink from './../components/QRLink'
import ShareLink from './../components/ShareLink'
import InvitationCenter from './../components/InvitationCenter'
import { LinearGradient } from 'expo-linear-gradient'

class AddFriend extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView stickyHeaderIndices={[0]}>
        <ScreenHeader
          isFixed={true}
          leftItems={
            <IconButton type="back"/>
          }
        />
        <LinearGradient
          colors={Colors.UI_BG_GRADIENT}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0, 0.5]}
        >
        <View >
          <View style={[styles.topContainer, Styles.shadow(Colors.VIOLET.dark)]}>
            <QRLink/>
            <ShareLink/>
          </View>
        </View>
        <InvitationCenter/>
        </LinearGradient>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    borderBottomLeftRadius: Mixins.scaleSize(35),
    borderBottomRightRadius: Mixins.scaleSize(35),
    backgroundColor: 'white',
    overflow: 'hidden',
  },
})

export default AddFriend

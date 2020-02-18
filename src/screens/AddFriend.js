import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from './../components/ScreenHeader'
import QRLink from './../components/QRLink'
import ShareLink from './../components/ShareLink'
import InvitationCenter from './../components/InvitationCenter'

class AddFriend extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView stickyHeaderIndices={[0]}>
        <ScreenHeader isFixed={true} />
        <QRLink />
        <ShareLink />
        <InvitationCenter />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})

export default AddFriend

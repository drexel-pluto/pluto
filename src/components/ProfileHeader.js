import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import UserProfile from './UserProfile'

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.ProfileHeader}>
        <UserProfile profile={this.props.profile} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ProfileHeader: {
    width: '100%',
    paddingVertical: Layouts.PAD_VERT,
  },
})

export default ProfileHeader

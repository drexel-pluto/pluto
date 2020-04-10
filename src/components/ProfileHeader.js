import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import UserProfile from './UserProfile'
import UserProfileSkeleton from './skeleton/UserProfile.skeleton'

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[styles.ProfileHeader, Styles.shadow('black')]}>
        {this.props.loading
          ? <UserProfileSkeleton />
          : <UserProfile profile={this.props.profile} />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ProfileHeader: {
    width: '100%',
    paddingVertical: Layouts.PAD_VERT,
    marginBottom: Mixins.scaleSize(20),
    backgroundColor: Colors.PEARL,
    borderBottomLeftRadius: Mixins.scaleSize(20),
    borderBottomRightRadius: Mixins.scaleSize(20),
  },
})

export default ProfileHeader

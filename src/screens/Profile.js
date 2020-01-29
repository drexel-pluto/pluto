import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import ScreenHeader from './../components/ScreenHeader'
import ProfileHeader from '../components/ProfileHeader'
import PostGrid from '../components/PostGrid'

class Profile extends React.Component {
  render() {
    return (
      <ScrollView>
        <ScreenHeader />
        <ProfileHeader />
        <PostGrid />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})

export default Profile

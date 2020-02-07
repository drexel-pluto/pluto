import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import ScreenHeader from './../components/ScreenHeader'
import ProfileHeader from '../components/ProfileHeader'
import PostGrid from '../components/PostGrid'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <ScreenHeader />
        <ProfileHeader profile={this.props.profile} />
        <PostGrid />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})

export default Profile

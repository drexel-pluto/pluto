import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import ScreenHeader from './../components/ScreenHeader'
import ProfileHeader from '../components/ProfileHeader'
import PostGrid from '../components/PostGrid'
import { POST_DATA } from './../assets/data'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <ScreenHeader
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
        />
        <ProfileHeader profile={this.props.profile} />
        <PostGrid data={POST_DATA} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})

export default Profile

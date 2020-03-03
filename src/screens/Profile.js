import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from './../components/ScreenHeader'
import ProfileHeader from '../components/ProfileHeader'
import PostGrid from '../components/PostGrid'
import IconButton from './../components/iconButton/IconButton'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView stickyHeaderIndices={[0]}>
        <ScreenHeader
          isFixed={true}
          headerColor={Colors.PEARL}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
          rightItems={(this.props.profile.id == this.props.myId) && <IconButton type="settings" _onPress={() => this.props.navigation.navigate('Settings')}/>}
        />
        <ProfileHeader profile={this.props.profile} />
        <PostGrid data={this.props.profile.posts} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})

export default Profile

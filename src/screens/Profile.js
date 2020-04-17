import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from './../components/ScreenHeader'
import ProfileHeader from '../components/ProfileHeader'
import PostGrid from '../components/PostGrid'
import PostGridSkeleton from '../components/skeleton/PostGrid.skeleton'
import IconButton from './../components/iconButton/IconButton'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView
        stickyHeaderIndices={[0]}
        contentContainerStyle={{ paddingBottom: Layouts.PAD_BOTTOM }}
      >
        <ScreenHeader
          isFixed={true}
          headerColor={Colors.PEARL}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
          rightItems={
            <IconButton
              type="settings"
              _onPress={() => {
                if (this.props.profile.id == this.props.myId) {
                  // this.props.navigation.navigate('Settings', {
                  //   user: this.props.profile,
                  // })
                  alert('feature in progress')
                } else {
                  this.props.openOptions()
                }
              }}
            />
          }
        />
        <ProfileHeader
          profile={this.props.profile}
          loading={this.props.loading}
        />
        {this.props.loading ? (
          <PostGridSkeleton />
        ) : (
          <PostGrid
            data={this.props.profile.posts}
            openPost={this.props.openPost}
          />
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})

export default Profile

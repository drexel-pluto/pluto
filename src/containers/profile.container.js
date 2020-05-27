import React from 'react'
import {Alert} from 'react-native'
import { connect } from 'react-redux'
import Profile from '../screens/Profile.js'
import { fetchUser, removeFriend, blockUser } from '../redux/reducers/profile.reducer'
import { openPost } from '../redux/reducers/post.reducer'
import { getMe } from '../redux/reducers/user.reducer'
import { connectActionSheet } from '@expo/react-native-action-sheet'
import { CommonActions } from '@react-navigation/native'

class ProfileContainer extends React.Component {
  componentWillMount() {
    const { params } = this.props.route
    const userId = params ? params.userId : null

    if (userId) {
      this.props.fetchUser(userId)
    }
  }

  removeFriend() {
    this.props
      .removeFriend(this.props.profile.id)
      .then(action => {
        if (action.type.endsWith('SUCCESS')) {
          return this.props.getMe()
        }
      })
      .then(action => {
        if (action.type.endsWith('SUCCESS')) {
          this.props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: 'Home' }],
            })
          )
        }
      })
  }

  showBlockAlert() {
    Alert.alert(
      "Are you sure you want to block " + this.props.profile.name + "?",
      "They will be removed from your friend list and cannot request to be friends again in the future.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "Block", 
          onPress: () => this.blockUser(),
          style: 'destructive', 
        }
      ],
      { cancelable: false }
    );
  }

  blockUser() {
    this.props
      .blockUser(this.props.profile.id)
      .then(action => {
        if (action.type.endsWith('SUCCESS')) {
          return this.props.getMe()
        } else {
          console.log(action)
        }
      })
      .then(action => {
        if (action.type.endsWith('SUCCESS')) {
          this.props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: 'Home' }],
            })
          )
        }
      })
  }

  _openPost(post_id, poster) {
    this.props.openPost(post_id, poster)
    this.props.navigation.navigate('Post')
  }

  openOptions() {
    const options = ['Remove Friend', 'Block User', 'Cancel']
    const destructiveButtonIndex = 0
    const cancelButtonIndex = 2

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex: [0, 1],
      },
      buttonIndex => {
        if (buttonIndex == 0) {
          this.removeFriend()
        }

        if (buttonIndex == 1) {
          this.showBlockAlert()
        }
      }
    )
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        navigation={this.props.navigation}
        route={this.props.route}
        myId={this.props.myId}
        openPost={(id, poster) => this._openPost(id, poster)}
        loading={this.props.loading}
        openOptions={() => this.openOptions()}
      />
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  myId: state.user.userData.id,
  loading: state.profile.loading,
})

const mapDispatchToProps = {
  fetchUser,
  openPost,
  removeFriend,
  getMe,
  blockUser
}

export default connectActionSheet(
  connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
)

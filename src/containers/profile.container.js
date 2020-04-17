import React from 'react'
import { connect } from 'react-redux'
import Profile from '../screens/Profile.js'
import { fetchUser, removeFriend } from '../redux/reducers/profile.reducer'
import { openPost } from '../redux/reducers/post.reducer'
import { getMe } from '../redux/reducers/user.reducer'
import { connectActionSheet } from '@expo/react-native-action-sheet'
import { CommonActions } from '@react-navigation/native';

class ProfileContainer extends React.Component {
  componentWillMount() {
    const { params } = this.props.route
    const userId = params ? params.userId : null

    if (userId) {
      this.props.fetchUser(userId)
    }
  }

  removeFriend() {
    this.props.removeFriend(this.props.profile.username).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        return this.props.getMe();
      } 
    }).then((action) => {
      if (action.type.endsWith('SUCCESS')) {
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              { name: 'Home' },
            ],
          })
        );
      } 
    });
  }

  _openPost(post_id, poster) {
    this.props.openPost(post_id, poster)
    this.props.navigation.navigate('Post')
  }

  openOptions() {
    const options = ['Remove Friend', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex == destructiveButtonIndex) {
          this.removeFriend();
        }
      },
    );
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
  loading: state.profile.loading
})

const mapDispatchToProps = {
  fetchUser,
  openPost,
  removeFriend,
  getMe
}

export default connectActionSheet(
  connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
);

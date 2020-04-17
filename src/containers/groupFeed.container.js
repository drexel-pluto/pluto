import React from 'react'
import { connect } from 'react-redux'
import GroupFeed from '../screens/GroupFeed.js'
import { openPost } from '../redux/reducers/post.reducer'
import { deleteGroup } from '../redux/reducers/group.reducer'
import { connectActionSheet } from '@expo/react-native-action-sheet'
import { resetHome, getMe } from '../redux/reducers/user.reducer'
import { setGroup } from '../redux/reducers/editGroup.reducer'

class GroupFeedContainer extends React.Component {
  _openPost(post_id, poster) {
    this.props.openPost(post_id, poster)
    this.props.navigation.navigate('Post')
  }

  deleteGroup() {
    this.props.deleteGroup(this.props.group.id).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        return this.props.getMe().then(
          this.props.navigation.navigate('Home')
        );
      } 
    });
  }

  editGroup() {
    this.props.setGroup(this.props.group)
    this.props.navigation.navigate('EditGroup')
  }

  showOptions() {
    const options = ['Delete Group', 'Edit Group', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex == destructiveButtonIndex) {
          this.deleteGroup();
        } else if (buttonIndex == 1) {
          this.editGroup();
        }
      },
    );
  }

  render() {
    return (
      <GroupFeed
        group={this.props.group}
        navigation={this.props.navigation}
        route={this.props.route}
        openPost={(id, poster) => this._openPost(id, poster)}
        user={this.props.user}
        loading={this.props.loading}
        showOptions={() => this.showOptions()}
      />
    )
  }
}


const mapStateToProps = state => ({
  group: state.group,
  user: state.user.userData,
  loading: state.group.loading,
})

const mapDispatchToProps = {
  openPost,
  deleteGroup,
  resetHome,
  getMe,
  setGroup
}

export default connectActionSheet(connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupFeedContainer))

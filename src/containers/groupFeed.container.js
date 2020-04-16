import React from 'react'
import { connect } from 'react-redux'
import GroupFeed from '../screens/GroupFeed.js'
import { openPost } from '../redux/reducers/post.reducer'
import { connectActionSheet } from '@expo/react-native-action-sheet'

class GroupFeedContainer extends React.Component {
  _openPost(post_id, poster) {
    this.props.openPost(post_id, poster)
    this.props.navigation.navigate('Post')
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
          // TODO: delete group
        } else if (buttonIndex == 1) {
          // TODO: edit group
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
}

export default connectActionSheet(connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupFeedContainer))

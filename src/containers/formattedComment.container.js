import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import AuthorHeader from './../components/AuthorHeader'
import IconButton from './../components/iconButton/IconButton'
import { connect } from 'react-redux'
import { deleteComment } from '../redux/reducers/post.reducer'
import { connectActionSheet } from '@expo/react-native-action-sheet'

class FormattedComment extends React.Component {
  showCommentOptions(comment_id) {
    const options = ['Delete Comment', 'Cancel']
    const destructiveButtonIndex = 0
    const cancelButtonIndex = 1

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex == destructiveButtonIndex) {
          this.props.deleteComment(comment_id).then(action => {
            if (action.type.endsWith('SUCCESS')) {
              //   alert(JSON.stringify(this.props.comments))
            }
          })
        }
      }
    )
  }

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: Mixins.scaleSize(15),
          }}
        >
          <AuthorHeader
            author={this.props.data.poster}
            time={this.props.data.postedAt}
          />
          {this.props.data.poster._id === this.props.userId && (
            <TouchableOpacity
              onPress={() => {
                this.showCommentOptions(this.props.data._id)
              }}
            >
              <View style={styles.moreIcon}>
                <View style={styles.circle}></View>
                <View
                  style={[
                    styles.circle,
                    { marginVertical: Mixins.scaleSize(5) },
                  ]}
                ></View>
                <View style={styles.circle}></View>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View>
          <Text>{this.props.data.text}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  circle: {
    width: Mixins.scaleSize(3),
    height: Mixins.scaleSize(3),
    borderRadius: Mixins.scaleSize(1.5),
    backgroundColor: Colors.BLACK_ROCK,
  },
  moreIcon: {
    width: Mixins.scaleSize(25),
    height: Mixins.scaleSize(25),
    alignItems: 'center',
  },
})

const mapStateToProps = state => ({
  comments: state.post.comments,
  loading: state.post.loading,
  userId: state.user.userData.id,
})

const mapDispatchToProps = {
  deleteComment,
}

export default connectActionSheet(
  connect(mapStateToProps, mapDispatchToProps)(FormattedComment)
)

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CommentList from '../components/CommentList'
import IconButton from '../components/iconButton/IconButton'
import PostContent from './../components/PostContent'
import PostTeaserFullSkeleton from '../components/skeleton/PostTeaserFull.skeleton'
import AddComment from '../components/AddComment'
import Modal from 'react-native-modal'
import FormattedComment from './../containers/formattedComment.container'

const CommentDetailView = props => {
  return (
    <Modal
      isVisible={props.visible}
      backdropColor={Colors.PLUTO_WHITE}
      backdropOpacity={1}
      style={{ margin: 0 }}
    >
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
          }}
          keyboardShouldPersistTaps="handled"
          behavior="height"
        >
          <ScreenHeader
            rightItems={
              <IconButton
                type="cancel"
                _onPress={() => {
                  props.toggleModal()
                }}
              />
            }
          />
          <ScrollView
            style={{
              paddingVertical: Layouts.PAD_VERT,
              paddingHorizontal: Layouts.PAD_HORZ_SM,
            }}
            contentContainerStyle={{ paddingBottom: Mixins.scaleSize(70) }}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.VIOLET.med,
                borderRadius: Mixins.scaleSize(25),
                padding: Mixins.scaleSize(15),
              }}
            >
              <FormattedComment data={props.data} />
            </View>
            <View
              style={{
                marginTop: Mixins.scaleSize(30),
                marginLeft: Layouts.PAD_HORZ,
                paddingLeft: Mixins.scaleSize(20),
                borderLeftColor: Colors.VIOLET.dark,
                borderLeftWidth: 1,
              }}
            >
              {props.data.replies.map(reply => {
                return (
                  <View
                    style={{
                      transform: [{ scale: 0.9 }],
                      paddingVertical: Layouts.PAD_VERT,
                    }}
                  >
                    <FormattedComment data={reply} isSub={true} />
                  </View>
                )
              })}
            </View>
          </ScrollView>
          <View
            style={{
              paddingHorizontal: Layouts.PAD_HORZ_SM,
              paddingBottom: Layouts.PAD_BOTTOM,
            }}
          >
            <AddComment
              sendComment={props.sendComment}
              commentId={props.data._id}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  )
}

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      commentForModal: undefined,
    }

    this.updateModal = this.updateModal.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.comments !== prevProps.data.comments) {
      if (this.state.commentForModal != undefined) {
        let activeCommentId = this.state.commentForModal._id
        let activeCommentContent = this.props.data.comments.filter(
          comment => comment._id === activeCommentId
        )

        this.updateModal(activeCommentContent[0], false)
      }
    }
  }

  updateModal(comment, triggerToggle = true) {
    this.setState({ commentForModal: comment })
    if (triggerToggle) {
      this.toggleModal()
    }
  }

  toggleModal() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <>
        <KeyboardAvoidingView
          style={{
            flex: 1,
          }}
          keyboardShouldPersistTaps="handled"
          behavior="height"
        >
          <ScrollView
            stickyHeaderIndices={[0]}
            contentContainerStyle={{ paddingBottom: Mixins.scaleSize(70) }}
          >
            <ScreenHeader
              isFixed={true}
              leftItems={
                <IconButton
                  type="back"
                  _onPress={this.props.navigation.goBack}
                />
              }
              rightItems={
                this.props.data.poster._id === this.props.userId && (
                  <IconButton
                    type="settings"
                    _onPress={() => this.props.showOptions()}
                  />
                )
              }
            />

            <View style={{ paddingHorizontal: Layouts.PAD_HORZ_SM }}>
              {this.props.loading ? (
                <PostTeaserFullSkeleton />
              ) : (
                <PostContent
                  _id={this.props.data.id}
                  media={this.props.data.mediaURLs}
                  text={this.props.data.text}
                  tags={this.props.data.tags}
                  postedAt={this.props.data.postedAt}
                  author={this.props.data.poster}
                  likes={this.props.data.likes}
                  showLightbox={true}
                />
              )}
            </View>
            <CommentList
              data={this.props.data.comments}
              loading={this.props.loading}
              updateModal={this.updateModal}
            />
          </ScrollView>
          <View style={styles.fixedComment}>
            <AddComment sendComment={this.props.sendComment} />
          </View>
        </KeyboardAvoidingView>
        {this.state.commentForModal !== undefined && (
          <CommentDetailView
            visible={this.state.visible}
            data={this.state.commentForModal}
            sendComment={this.props.sendComment}
            updateModal={this.updateModal}
            toggleModal={this.toggleModal}
          />
        )}
      </>
    )
  }
}

const styles = StyleSheet.create({
  fixedComment: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.PLUTO_WHITE,
    paddingBottom: Layouts.PAD_BOTTOM,
    paddingHorizontal: Layouts.PAD_HORZ_SM,
  },
})

export default Post

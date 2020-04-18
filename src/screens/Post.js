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
import TagList from '../components/TagList'
import CommentList from '../components/CommentList'
import AuthorHeader from '../components/AuthorHeader'
import IconButton from '../components/iconButton/IconButton'
import { TAG_DATA, COMMENT_DATA } from './../assets/data'
import PostContent from './../components/PostContent'
import PostTeaserFullSkeleton from '../components/skeleton/PostTeaserFull.skeleton'
import AddComment from '../components/AddComment'

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
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
            />
          </ScrollView>

          <View style={styles.fixedComment}>
            <AddComment sendComment={this.props.sendComment} />
          </View>
      </KeyboardAvoidingView>
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
  },
})

export default Post

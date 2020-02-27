import React from 'react'
import {
  View,
  ScrollView,
  Text,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import TagList from '../components/TagList'
import CommentList from '../components/CommentList'
import AuthorHeader from '../components/AuthorHeader'
import IconButton from '../components/iconButton/IconButton'
import { TAG_DATA, COMMENT_DATA } from './../assets/data'
import PostMedia from '../components/PostMedia'

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.data)
    return (
      <ScrollView stickyHeaderIndices={[0]} style={styles.post}>
        <ScreenHeader
          isFixed={true}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
        />
        <KeyboardAvoidingView behavior="position">
          <View style={styles.header_wrapper}>
            <AuthorHeader
              time={this.props.data.postedAt}
              author={this.props.data.poster}
            />
            <IconButton type="like" />
          </View>
          <View style={styles.content}>
            {// render text if exists
            this.props.data.text ? (
              <View style={styles.text_wrapper}>
                <Text style={[styles.text, Typography.F_BODY]}>
                  {this.props.data.text}
                </Text>
              </View>
            ) : null}
            {// render img if exists
            this.props.data.mediaURLs.length > 0 ? (
              <PostMedia media={this.props.data.mediaURLs} />
            ) : null}
          </View>
          <View style={styles.tag_wrapper}>
            <TagList data={TAG_DATA} />
          </View>
          <CommentList data={this.props.data.comments}  sendComment={this.props.sendComment}/>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  post: {},
  content: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
    width: '100%',
    position: 'relative',
  },
  text_wrapper: { paddingBottom: Layouts.PAD_VERT },
  image: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
    width: '100%',
    height: 500,
    borderRadius: Mixins.scaleSize(25),
  },
  header_wrapper: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default Post

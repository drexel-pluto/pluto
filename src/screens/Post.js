import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import TagList from '../components/TagList'
import CommentList from '../components/CommentList'
import AuthorHeader from '../components/AuthorHeader'
import IconButton from '../components/iconButton/IconButton'
import { TAG_DATA, COMMENT_DATA } from './../assets/data'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PostContent from './../components/PostContent'

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.data)
    return (
      <KeyboardAwareScrollView
        stickyHeaderIndices={[0]}
        keyboardShouldPersistTaps="always"
      >
        <ScreenHeader
          isFixed={true}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
        />

        <View style={{ paddingHorizontal: Layouts.PAD_HORZ_SM }}>
          <PostContent
            _id={this.props.data.id}
            media={this.props.data.mediaURLs}
            text={this.props.data.text}
            tags={this.props.data.tags}
            postedAt={this.props.data.postedAt}
            author={this.props.data.poster}
            likes={this.props.data.likes}
          />
        </View>

        <View style={styles.tag_wrapper}>
          <TagList data={TAG_DATA} />
        </View>
        <CommentList
          data={this.props.data.comments}
          sendComment={this.props.sendComment}
        />
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({})

export default Post

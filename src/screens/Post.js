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
import PostTeaserFullSkeleton from "../components/skeleton/PostTeaserFull.skeleton"

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardAwareScrollView
        stickyHeaderIndices={[0]}
        keyboardShouldPersistTaps="handled"
      >
        <ScreenHeader
          isFixed={true}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
        />

        <View style={{ paddingHorizontal: Layouts.PAD_HORZ_SM }}>
          {this.props.loading
            ? <PostTeaserFullSkeleton />
            : <PostContent
                _id={this.props.data.id}
                media={this.props.data.mediaURLs}
                text={this.props.data.text}
                tags={this.props.data.tags}
                postedAt={this.props.data.postedAt}
                author={this.props.data.poster}
                likes={this.props.data.likes}
              />
          }
          
        </View>
        <CommentList
          data={this.props.data.comments}
          sendComment={this.props.sendComment}
          loading={this.props.loading}
        />
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({})

export default Post

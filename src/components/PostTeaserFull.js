import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import AuthorHeader from './AuthorHeader'
import IconButton from './iconButton/IconButton'
import PostMedia from './PostMedia'

class PostTeaserFull extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.openPost(this.props.key, this.props.poster)}
      >
        <View style={styles.postTeaserFull}>
          <View style={styles.header_wrapper}>
            <AuthorHeader
              isCompact={false}
              author={this.props.poster}
              time={this.props.postedAt}
            />
            <IconButton type="like" customColor={Colors.ACCENT} />
          </View>
          {// render text if exists
          this.props.text ? (
            <View style={styles.text_wrapper}>
              <Text style={[styles.text, Typography.F_BODY]}>
                {this.props.text}
              </Text>
            </View>
          ) : null}
          {// render img if exists
          this.props.media.length > 0 ? (
            <PostMedia media={this.props.media} />
          ) : null}
          <View style={styles.comment_wrapper}>
            <TouchableOpacity>
              <Text style={{ color: Colors.ACCENT }}>replies</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

PostTeaserFull.defaultProps = {
  id: -1,
  content: {
    image: null,
    text: null,
  },
  author: {
    image: null,
    name: null,
  },
}

const styles = StyleSheet.create({
  postTeaserFull: {
    width: '100%',
    paddingVertical: Mixins.scaleSize(20),
  },
  text_wrapper: {
    bottom: 0,
    width: '100%',
    marginBottom: Mixins.scaleSize(20),
  },
  header_wrapper: {
    marginBottom: Mixins.scaleSize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  comment_wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})

export default PostTeaserFull

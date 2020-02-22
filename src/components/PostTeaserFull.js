import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import AuthorHeader from './AuthorHeader'
import IconButton from './iconButton/IconButton'
import PostMedia from './PostMedia'
import { LinearGradient } from 'expo-linear-gradient'

class PostTeaserFull extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.openPost(this.props.key, this.props.poster)}
      >
        <LinearGradient
          colors={Colors.UI_BG}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0, 0.1]}
          style={styles.postTeaserFull}
        >
          <View style={styles.top}>
            <View style={styles.author_wrapper}>
              <AuthorHeader
                isCompact={false}
                author={this.props.poster}
                time={this.props.postedAt}
              />
            </View>
            {// render text if exists
            this.props.text ? (
              <View style={styles.text_wrapper}>
                <Text style={[styles.text, Typography.F_BODY]}>
                  {this.props.text}
                </Text>
              </View>
            ) : null}
          </View>
          <View style={styles.bottom}>
            {// render img if exists
            this.props.media.length > 0 ? (
              <View style={styles.image_wrapper}>
                <PostMedia media={this.props.media} />
              </View>
            ) : null}
            <View style={styles.action_wrapper}>
              <TouchableWithoutFeedback>
                <Text style={{ color: Colors.ACCENT }}>replies</Text>
              </TouchableWithoutFeedback>
              <IconButton type="like" customColor={Colors.ACCENT} />
            </View>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
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
    backgroundColor: Colors.VIOLET.light,
    marginBottom: Mixins.scaleSize(20),
    borderRadius: Mixins.scaleSize(20),
  },
  author_wrapper: {
    marginBottom: Mixins.scaleSize(20),
  },
  text_wrapper: {
    bottom: 0,
    width: '100%',
  },
  image_wrapper: {},
  action_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Mixins.scaleSize(15),
  },
  top: {
    padding: Mixins.scaleSize(15),
  },
  bottom: {},
})

export default PostTeaserFull

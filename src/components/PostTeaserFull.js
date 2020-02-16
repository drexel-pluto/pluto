import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import AuthorHeader from './AuthorHeader'
import IconButton from './IconButton/IconButton'

class PostTeaserFull extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const prevBgIndex =
      this.props.bgIndex === Colors.POST_BG.length - 1
        ? 0
        : this.props.bgIndex + 1

    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={{ backgroundColor: Colors.POST_BG[prevBgIndex] }}>
          <View
            style={[
              styles.postTeaserFull,
              { backgroundColor: Colors.POST_BG[this.props.bgIndex] },
            ]}
          >
            <View style={styles.author_wrapper}>
              <AuthorHeader isCompact={false} timeStamp={'20 minutes ago'} />
            </View>
            {// render img if exists
            this.props.content.image ? (
              <View style={styles.image_wrapper}>
                <Image
                  style={styles.image}
                  source={{ uri: this.props.content.image }}
                />
              </View>
            ) : null}
            {// render text if exists
            this.props.content.text ? (
              <View style={styles.text_wrapper}>
                <Text style={[styles.text, Typography.F_BODY]}>
                  {this.props.content.text}
                </Text>
              </View>
            ) : null}
            <View style={styles.action_wrapper}>
              <IconButton type="comment" />
              <IconButton type="like" />
            </View>
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
    borderBottomRightRadius: Mixins.scaleSize(20),
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Mixins.scaleSize(20),
    width: '100%',
    // overflow: 'hidden',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: Mixins.scaleSize(20),
  },
  text_wrapper: {
    bottom: 0,
    width: '100%',
    marginBottom: Mixins.scaleSize(20),
  },
  author_wrapper: {
    marginBottom: Mixins.scaleSize(20),
  },
  action_wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})

export default PostTeaserFull

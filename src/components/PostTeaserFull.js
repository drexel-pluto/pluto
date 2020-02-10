import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import AuthorHeader from './AuthorHeader'

class PostTeaserFull extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.postTeaserFull}>
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
          <View
            style={[
              styles.text_wrapper,
              !this.props.content.image
                ? { paddingTop: Mixins.scaleSize(75) }
                : null,
            ]}
          >
            <Text style={styles.text}>{this.props.content.text}</Text>
          </View>
        ) : null}
        <View style={styles.author_wrapper}>
          <AuthorHeader isCompact={false} />
        </View>
      </View>
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
    marginRight: Mixins.scaleSize(15),
    marginBottom: Mixins.scaleSize(20),
    borderRadius: Mixins.scaleSize(15),
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  text_wrapper: {
    padding: Mixins.scaleSize(10),
    backgroundColor: Colors.GRAY_LIGHT,
    bottom: 0,
    width: '100%',
  },
  author_wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: Mixins.scaleSize(10),
    paddingVertical: Mixins.scaleSize(10),
  },
})

export default PostTeaserFull

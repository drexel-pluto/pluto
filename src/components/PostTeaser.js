import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import AuthorHeader from './AuthorHeader'

class PostTeaser extends React.Component {
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
        <View
          style={[
            styles.postTeaser,
            { backgroundColor: Colors.POST_BG[prevBgIndex] },
          ]}
        >
          {// render img if exists
          this.props.content.image ? (
            <View style={styles.image_wrapper}>
              <Image
                style={[{ width: '100%', height: '100%' }]}
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
                  ? { paddingTop: Mixins.scaleSize(55), height: '100%' }
                  : { height: '40%' },
              ]}
            >
              <Text
                style={[styles.text, Typography.F_BODY]}
                ellipsizeMode="tail"
                numberOfLines={!this.props.content.image ? 4 : 999}
              >
                {this.props.content.text}
              </Text>
            </View>
          ) : null}
          <View style={styles.author_wrapper}>
            <AuthorHeader isCompact={true} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

PostTeaser.defaultProps = {
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
  postTeaser: {
    marginRight: Mixins.scaleSize(15),
    borderRadius: Mixins.scaleSize(10),
    width: Mixins.scaleSize(150),
    height: Mixins.scaleSize(200),
    overflow: 'hidden',
  },
  text_wrapper: {
    padding: Mixins.scaleSize(10),
    bottom: 0,
    width: '100%',
    position: 'absolute',
  },
  author_wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: Mixins.scaleSize(10),
    paddingVertical: Mixins.scaleSize(10),
  },
})

export default PostTeaser

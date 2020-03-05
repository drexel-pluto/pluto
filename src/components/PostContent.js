import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import PostMedia from '../components/PostMedia'

class PostContent extends React.Component {
  constructor(props) {
    super(props)
  }

  onPressHash() {
    alert('go to hash album!')
  }

  linkHash(text) {
    return (
      <Text
        style={[Typography.F_BOLD, styles.tag]}
        onPress={() => {
          this.onPressHash()
        }}
      >
        #{text}
      </Text>
    )
  }

  renderText() {
    const text = this.props.text
    const tags = this.props.tags ? [...this.props.tags] : []
    let result = []
    let beginIndex = 0

    tags.map(tag => {
      result.push(text.substring(beginIndex, tag.indices[0]))
      result.push(this.linkHash(tag.name))
      beginIndex = tag.indices[1]
    })

    result.push(text.substring(beginIndex, text.length))
    return result
  }

  render() {
    return (
      <View style={styles.content}>
        {// render text if exists
        this.props.text ? (
          <View style={styles.text_wrapper}>
            <Text style={[styles.text, Typography.F_BODY]}>
              {this.renderText()}
            </Text>
          </View>
        ) : null}
        {// render img if exists
        this.props.media.length > 0 ? (
          <PostMedia media={this.props.media} />
        ) : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
    width: '100%',
    position: 'relative',
  },
  text_wrapper: { paddingBottom: Layouts.PAD_VERT },
  tag: {
    color: Colors.VIOLET.dark,
  },
})

export default PostContent

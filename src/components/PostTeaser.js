import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import AuthorHeader from './AuthorHeader'

class PostTeaser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View
        style={[
          styles.postTeaser,
          this.props.isFull ? styles.isFull : styles.isSmall,
        ]}
      >
        {this.props.content.image ? (
          <View style={styles.image_wrapper}>
            <Image
              style={styles.image}
              source={{ uri: this.props.content.image }}
            />
          </View>
        ) : null}
        {this.props.content.text ? (
          <View style={styles.text_wrapper}>
            <Text style={styles.text}>{this.props.content.text}</Text>
          </View>
        ) : null}
        <View style={styles.author_wrapper}>
          {
            // if not full teaser, display compact version
          }
          <AuthorHeader isCompact={this.props.isFull ? false : true} />
        </View>
      </View>
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
    overflow: 'hidden',
  },
  isSmall: {
    width: Mixins.scaleSize(150),
    height: Mixins.scaleSize(200),
  },
  isFull: {
    width: '100%',
    height: Mixins.scaleSize(450),
    marginBottom: Mixins.scaleSize(20),
    borderRadius: Mixins.scaleSize(15),
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text_wrapper: {
    padding: Mixins.scaleSize(10),
    backgroundColor: Colors.GRAY_LIGHT,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexGrow: 1,
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

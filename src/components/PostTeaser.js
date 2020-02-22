import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import AuthorHeader from './AuthorHeader'
import StyledContainer from './StyledContainer'

class PostTeaser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.openPost(this.props._id, this.props.poster)}
      >
        <StyledContainer>
          <View style={[styles.postTeaser, Styles.STYLED_BORDER]}>
            {// render img if exists
            this.props.media.length > 0 ? (
              <View style={styles.image_wrapper}>
                <Image
                  style={[{ width: '100%', height: '100%' }]}
                  source={{ uri: this.props.media[0] }}
                />
              </View>
            ) : null}
            {// render text if exists and image doesn't exist
            this.props.text && !this.props.media.length > 0 ? (
              <View style={styles.text_wrapper}>
                <Text
                  style={[styles.text, Typography.F_BODY]}
                  ellipsizeMode="tail"
                  numberOfLines={7}
                >
                  {this.props.text}
                </Text>
              </View>
            ) : null}
            <View style={styles.author_wrapper}>
              <AuthorHeader isCompact={true} author={this.props.poster} />
            </View>
          </View>
        </StyledContainer>
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
    borderRadius: Mixins.scaleSize(15),
    width: Mixins.scaleSize(130),
    height: Mixins.scaleSize(200),
    backgroundColor: Colors.PLUTO_WHITE,
    overflow: 'hidden',
  },
  text_wrapper: {
    padding: Mixins.scaleSize(10),
    bottom: 0,
    width: '100%',
    position: 'absolute',
    paddingTop: Mixins.scaleSize(55),
    height: '100%',
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

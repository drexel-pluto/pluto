import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import PostMedia from '../components/PostMedia'
import ContainerTail from './../assets/images/containerTail.svg'
import AuthorHeader from './AuthorHeader'
import IconButton from './iconButton/IconButton'
import HeartButtonContainer from './../containers/heartButton.container'

class PostContent extends React.Component {
  constructor(props) {
    super(props)
  }

  onPressHash(tag) {
    console.log('hashtag clicked:', tag)
  }

  linkHash(text) {
    return (
      <Text
        style={[Typography.F_BOLD, styles.tag]}
        onPress={() => {
          this.onPressHash(text)
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
        {
          //top
        }

        <View style={[Styles.shadow('black'), { zIndex: 2 }]}>
          <View
            style={{
              borderBottomRightRadius: Mixins.scaleSize(20),
              overflow: 'hidden',
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                padding: Mixins.scaleSize(15),
              }}
            >
              <View style={styles.author_wrapper}>
                <AuthorHeader
                  isCompact={false}
                  author={this.props.author}
                  authorId={this.props.author._id}
                  time={this.props.postedAt}
                />
              </View>
              {// render text if exists
              this.props.text ? (
                <View style={styles.text_wrapper}>
                  <Text style={[styles.text, Typography.F_BODY]}>
                    {this.renderText()}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
          <ContainerTail
            style={{
              position: 'absolute',
              left: 0,
              top: '99.9%',
            }}
          />
        </View>

        {
          //bottom
        }

        <View style={{ backgroundColor: Colors.PEARL }}>
          {// render img if exists
          this.props.media.length > 0 ? (
            <View style={styles.image_wrapper}>
              <PostMedia media={this.props.media} />
            </View>
          ) : null}
          <View style={styles.action_wrapper}>
            <View style={styles.actions}>
              {/* <IconButton
                type="heartPost"
                isLiked={this.props.isLiked}
                customColor={Colors.ACCENT}
              /> */}
              <HeartButtonContainer
                likes={this.props.likes}
                _id={this.props._id}
              />
              {this.props.leftItem || null}
            </View>

            <View style={styles.actions}>{this.props.rightItem || null}</View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    marginBottom: Mixins.scaleSize(20),
    borderRadius: Mixins.scaleSize(20),
    overflow: 'hidden',
    backgroundColor: Colors.PEARL,
    borderWidth: 1,
    borderColor: Colors.VIOLET.med,
  },
  tag: {
    color: Colors.VIOLET.dark,
  },
  author_wrapper: {
    marginBottom: Mixins.scaleSize(20),
  },
  text_wrapper: {
    width: '100%',
    paddingBottom: Layouts.PAD_VERT,
  },
  image_wrapper: {
    paddingHorizontal: Mixins.scaleSize(5),
    paddingVertical: Mixins.scaleSize(10),
  },
  action_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Mixins.scaleSize(15),
  },
  actions: {
    flexDirection: 'row',
  },
})

export default PostContent

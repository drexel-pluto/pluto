import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import AuthorHeader from './AuthorHeader'
import IconButton from './iconButton/IconButton'
import PostMedia from './PostMedia'
import { LinearGradient } from 'expo-linear-gradient'
import ContainerTail from './../assets/images/containerTail.svg'
import PostContent from './PostContent'
import CommentButton from './iconButton/CommentButton'

class PostTeaserFull extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate() {
    return false;
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.openPost(this.props._id, this.props.poster)}
      >
        <View>
          <PostContent
            _id={this.props._id}
            media={this.props.media}
            text={this.props.text}
            tags={this.props.tags}
            postedAt={this.props.postedAt}
            author={this.props.poster}
            likes={this.props.likes}
            hasMaxTextLine={true}
            index={this.props.index || 0}
            leftItem={
              <CommentButton
                _onPress={() =>
                  this.props.openPost(this.props._id, this.props.poster)
                }
                comments={this.props.comments}
              />
            }
          />
        </View>

        {/* <View style={styles.postTeaserFull}>
          {
            // top section
          }
          <View style={[Styles.shadow('black'), { zIndex: 2 }]}>
            <View
              style={{
                borderBottomRightRadius: Mixins.scaleSize(20),
                overflow: 'hidden',
              }}
            >
              <LinearGradient
                colors={Colors.UI_BG_GRADIENT}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                locations={[0, 0.1]}
                style={{
                  padding: Mixins.scaleSize(15),
                }}
              >
                <View style={styles.author_wrapper}>
                  <AuthorHeader
                    isCompact={false}
                    authorId={this.props.poster._id}
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
              </LinearGradient>
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
            // bottom section
          }
          <LinearGradient
            colors={Colors.UI_BG_GRADIENT}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.1]}
          >
            {// render img if exists
            this.props.media.length > 0 ? (
              <View style={styles.image_wrapper}>
                <PostMedia media={this.props.media} />
              </View>
            ) : null}
            <View style={styles.action_wrapper}>
              <View style={styles.heart_wrapper}>
                <IconButton type="heartPost" customColor={Colors.ACCENT} />
              </View>
              <IconButton type="comment" customColor={Colors.ACCENT} />
            </View>
          </LinearGradient>
        </View> */}
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
    backgroundColor: Colors.UI_BG,
    marginBottom: Mixins.scaleSize(20),
    borderRadius: Mixins.scaleSize(20),
    overflow: 'hidden',
  },
  author_wrapper: {
    marginBottom: Mixins.scaleSize(20),
  },
  text_wrapper: {
    bottom: 0,
    width: '100%',
  },
  image_wrapper: {
    paddingHorizontal: Mixins.scaleSize(5),
    paddingVertical: Mixins.scaleSize(10),
  },
  action_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Mixins.scaleSize(15),
  },

  heart_wrapper: {
    paddingRight: Mixins.scaleSize(15),
  },
})

export default PostTeaserFull

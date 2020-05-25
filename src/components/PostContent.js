import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import PostMedia from '../components/PostMedia'
import ContainerTail from './../assets/images/containerTail.svg'
import AuthorHeader from './AuthorHeader'
import IconButton from './iconButton/IconButton'
import Button from './Button'
import HeartButtonContainer from './../containers/heartButton.container'
import * as RootNavigation from '../navigation'
import { connectActionSheet } from '@expo/react-native-action-sheet'
import { connect } from 'react-redux'

class PostContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animValue: new Animated.Value(0),
    }
  }

  showOptions() {
    let cancelButtonIndex = 2
    let options = ['Hide Post', 'Report Post', 'Cancel']
    
    if (this.props.author._id == this.props.userId) {
      cancelButtonIndex = 1
      options = ['Delete Post', 'Cancel']
    }

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex: this.props.author._id == this.props.userId ? 0 : null,
      },
      buttonIndex => {
        if (this.props.author._id == this.props.userId) {
          if (buttonIndex == 0) { // DELETE POST
            console.log("delete")
          }
        } else {
          if (buttonIndex == 0 ) { // HIDE POST 
            console.log("hide")
          } else if (buttonIndex == 1) { //REPORT POST
            console.log("report")
          }
        }
      }
    )
  }

  deletePost() {
    this.props.deletePost(this.props.post._id).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        return this.props
          .getPosts(this.props.lastGroupId)
          .then(this.props.navigation.goBack())
      }
    })
  }

  reportPost() {
    this.props.deletePost(this.props.post._id).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        return this.props
          .getPosts(this.props.lastGroupId)
          .then(this.props.navigation.goBack())
      }
    })
  }

  hidePost() {
    this.props.deletePost(this.props.post._id).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        return this.props
          .getPosts(this.props.lastGroupId)
          .then(this.props.navigation.goBack())
      }
    })
  }

  componentDidMount() {
    Animated.timing(this.state.animValue, {
      toValue: 1,
      duration: 1400,
      delay: this.props.index * 200,
      easing: Easing.out(Easing.exp),
    }).start()
  }

  onPressHash(tag) {
    RootNavigation.navigate('TagFeed', {
      tag,
    })
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
      if (!tag.indices) return
      result.push(text.substring(beginIndex, tag.indices[0]))
      result.push(this.linkHash(tag.name))
      beginIndex = tag.indices[1]
    })

    result.push(text.substring(beginIndex, text.length))
    return result
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.content,
          {
            opacity: this.state.animValue,
            top: this.state.animValue.interpolate({
              inputRange: [0, 1],
              outputRange: [40, 0],
            }),
          },
        ]}
      >
        {
          //top
        }

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
              <IconButton 
                type="options"
                isSmall
                style={{opacity: 0.6}}
                _onPress={() => this.showOptions()}
              />
            </View>
            {// render text if exists
            this.props.text ? (
              <View style={styles.text_wrapper}>
                <Text
                  numberOfLines={this.props.hasMaxTextLine ? 10 : null}
                  style={[styles.text, Typography.F_BODY]}
                >
                  {this.renderText()}
                </Text>
              </View>
            ) : null}
          </View>
        </View>

        {
          //bottom
        }
        <View style={{ backgroundColor: Colors.PEARL }}>
          <View>
            <ContainerTail
              style={{
                position: 'absolute',
                left: 0,
                top: '99.9%',
              }}
            />
          </View>
          {// render img if exists
          this.props.media.length > 0 ? (
            <View style={styles.image_wrapper}>
              <PostMedia
                media={this.props.media}
                showLightbox={this.props.showLightbox}
              />
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
              <View style={{ paddingLeft: Mixins.scaleSize(20) }}>
                {this.props.leftItem || null}
              </View>
            </View>

            <View style={styles.actions}>{this.props.rightItem || null}</View>
          </View>
        </View>
      </Animated.View>
    )
  }
}

PostMedia.defaultProps = {
  showLightbox: false,
  hasMaxTextLine: false,
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
    flexDirection: "row",
    alignItems: "flex-start",
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
    alignItems: 'center',
  },
})

// export default PostContent

const mapStateToProps = state => ({
  userId : state.user.userData.id
})

const mapDispatchToProps = {
}

export default connectActionSheet(
  connect(mapStateToProps, mapDispatchToProps)(PostContent)
)
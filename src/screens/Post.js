import React from 'react'
import {
  View,
  ScrollView,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import TagList from '../components/TagList'
import CommentList from '../components/CommentList'
import AuthorHeader from '../components/AuthorHeader'
import IconButton from '../components/iconButton/IconButton'
import { TAG_DATA, COMMENT_DATA } from './../assets/data'

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        style={[styles.post, Layouts.FLEX_CONTAINER]}
      >
        <ScrollView stickyHeaderIndices={[0]}>
          <ScreenHeader
            isFixed={true}
            leftItems={
              <IconButton type="back" _onPress={this.props.navigation.goBack} />
            }
          />
          <View style={styles.content}>
            <View style={styles.image_wrapper}>
              <Image
                style={styles.image}
                source={{ uri: 'https://picsum.photos/id/237/300/300' }}
              />
            </View>
            <View style={styles.text_wrapper}>
              <Text style={styles.text}>
                lorem ipsum blash blash blash blash
              </Text>
            </View>
            <View style={styles.tag_wrapper}>
              <TagList data={TAG_DATA} />
            </View>
            <View style={styles.author_wrapper}>
              <AuthorHeader />
            </View>
          </View>
          <CommentList data={COMMENT_DATA} />
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  post: {},
  content: {
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 500,
  },
  author_wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: Mixins.scaleSize(10),
    paddingVertical: Mixins.scaleSize(10),
  },
})

export default Post

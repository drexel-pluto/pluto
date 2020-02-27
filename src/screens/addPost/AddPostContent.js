import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Text,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import ScreenHeader from '../../components/ScreenHeader'
import AddPostOptionBar from '../../components/AddPostOptionBar'
import IconButton from './../../components/iconButton/IconButton'
import Button from './../../components/Button'
import CircleList from './../../components/CircleList'

class AddPost extends React.Component {
  constructor(props) {
    super(props)
    this.textInputRef = null
    this.state = {
      text: '',
    }
  }

  onFocusFunction = () => {
    setTimeout(() => {
      this.textInputRef.focus()
    }, 100)
  }

  componentWillUnmount() {
    this.focusListener.remove()
  }

  componentDidMount() {
    this.onFocusFunction()
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.onFocusFunction()
    })
  }

  submitPost() {
    this.props.submitPost(this.state.text)
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScreenHeader
          title={'New Post'}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
          rightItems={
            <Button text="post" type="outline" onPress={this.submitPost} />
          }
        />
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate('AddPostPermissions')
          }}
        >
          <View
            style={{
              marginVertical: Layouts.PAD_VERT,
              marginLeft: Layouts.PAD_HORZ,
              backgroundColor: Colors.VIOLET.light,
              borderTopLeftRadius: Mixins.scaleSize(20),
              borderBottomLeftRadius: Mixins.scaleSize(20),
              height: 85,
            }}
          >
            <Text>edit permission</Text>
            <CircleList />
          </View>
        </TouchableWithoutFeedback>
        {this.props.media.length > 0 && (
          <PostMedia
            media={this.props.media}
            removeImage={index => this.props.removeImage(index)}
          />
        )}
        <TextInput
          ref={ref => (this.textInputRef = ref)}
          placeholder="Quiz Deck Title"
          autoFocus={true}
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          multiline
        />
        <AddPostOptionBar
          navigation={this.props.navigation}
          addImage={uri => {
            this.props.addImage(uri)
          }}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginHorizontal: Layouts.PAD_HORZ,
    marginVertical: Layouts.PAD_VERT,
    padding: Layouts.PAD_HORZ,
    paddingTop: Layouts.PAD_HORZ,
    borderWidth: 1,
    borderColor: Colors.VIOLET.dark,
    borderRadius: Mixins.scaleSize(20),
  },
})

export default AddPost

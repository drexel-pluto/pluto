import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../../styles/index'
import ScreenHeader from '../../components/ScreenHeader'
import AddPostOptionBar from '../../components/AddPostOptionBar'
import { RichEditor } from 'react-native-pell-rich-editor'
import { Header } from 'react-navigation-stack'
import { NavigationEvents } from 'react-navigation'

class AddPost extends React.Component {
  constructor(props) {
    super(props)
    this.textInputRef = null
  }

  onFocusFunction = () => {
    setTimeout(() => {
      this.textInputRef.focusContentEditor()
    }, 100)
  }

  componentWillUnmount() {
    // this.focusListener.remove()
  }

  componentDidMount() {
    this.onFocusFunction()
    // this.focusListener = this.props.navigation.addListener('didFocus', () => {
    //   this.onFocusFunction()
    //   console.log('DID FOCUS')
    // })
  }

  save = async () => {
    let html = await this.textInputRef.getContentHtml()
    console.log(html)
    alert(html)
  }

  addMedia = () => {
    // insert URL
    this.textInputRef.insertImage(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png'
    )
    // insert base64
    // this.textInputRef.insertImage(`data:${image.mime};base64,${image.data}`);
    this.textInputRef.blurContentEditor()
  }

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader />
        <RichEditor
          ref={rf => (this.textInputRef = rf)}
          initialContentHTML={'what are you up to?'}
          style={styles.rich}
        />
        <KeyboardAvoidingView behavior="position">
          <AddPostOptionBar
            navigation={this.props.navigation}
            addMedia={this.addMedia}
          />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  rich: {
    minHeight: 300,
    flex: 1,
  },
  richBar: {
    height: 50,
    backgroundColor: '#F5FCFF',
  },
  scroll: {
    backgroundColor: '#ffffff',
  },
})

export default AddPost

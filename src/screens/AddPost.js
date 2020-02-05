import React from 'react'
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor'
import ScreenHeader from './../components/ScreenHeader'
// import AddPostInput from './../components/AddPostInput'
// import AddPostOptionBar from './../components/AddPostOptionBar'

class AddPost extends React.Component {
  save = async () => {
    // Get the data here and call the interface to save the data
    let html = await this.richText.getContentHtml()
    // console.log(html);
    alert(html)
  }

  onPressAddImage = () => {
    // for multiple images,
    // might need to format it into grid

    // insert URL
    this.richText.insertImage(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png'
    )
    // insert base64
    // this.richText.insertImage(`data:${image.mime};base64,${image.data}`);
    this.richText.blurContentEditor()
  }

  render() {
    let that = this
    return (
      <View style={styles.container}>
        <ScreenHeader />
        <ScrollView style={styles.scroll}>
          <RichEditor
            ref={rf => (that.richText = rf)}
            initialContentHTML={'what are you up to?'}
            style={styles.rich}
          />
        </ScrollView>
        <KeyboardAvoidingView behavior={'padding'}>
          <RichToolbar
            style={styles.richBar}
            getEditor={() => that.richText}
            iconTint={'#000033'}
            selectedIconTint={'#2095F2'}
            selectedButtonStyle={{ backgroundColor: 'transparent' }}
            onPressAddImage={that.onPressAddImage}
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

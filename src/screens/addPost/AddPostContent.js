import React from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import ScreenHeader from '../../components/ScreenHeader'
import AddPostOptionBar from '../../components/AddPostOptionBar'
import IconButton from './../../components/iconButton/IconButton'
import Button from './../../components/Button'
import Circle from './../../components/Circle'

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

    // default selected group
    this.props.resetRecipient()
    let defaultRecipients = {
      ...this.props.navigation.getParam('defaultRecipients', {}),
    }
    Object.keys(defaultRecipients).map(index => {
      if (defaultRecipients[index].friend) {
        this.props.setRecipient(defaultRecipients[index].friend._id, true)
      } else {
        this.props.setRecipient(defaultRecipients[index]._id, true)
      }
    })
  }

  submitPost() {
    this.props.submitPost(this.state.text)
  }

  render() {
    let selectedFriends = this.props.friends.reduce(
      (total, friend) =>
        this.props.recipients[friend.friend._id] ? total + 1 : total,
      0
    )

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
        <View>
          <View
            style={{
              marginVertical: Layouts.PAD_VERT,
              marginLeft: Layouts.PAD_HORZ,
              paddingLeft: Layouts.PAD_HORZ,
              paddingVertical: Layouts.PAD_VERT,
              backgroundColor: Colors.VIOLET.light,
              borderTopLeftRadius: Mixins.scaleSize(20),
              borderBottomLeftRadius: Mixins.scaleSize(20),
              justifyContent: 'center',
              minHeight: Mixins.scaleSize(100),
            }}
          >
            {
              // CircleList for addPost...
              // let's keep this here for now since it works ;p
            }
            <FlatList
              data={this.props.friends}
              extraData={this.props.recipients}
              renderItem={item => {
                if (this.props.recipients[item.item.friend._id]) {
                  return (
                    <View
                      style={{
                        marginRight: Mixins.scaleSize(10),
                        justifyContent: 'center',
                      }}
                    >
                      <Circle
                        user={item.item.friend}
                        navigation={this.props.navigation}
                        size={40}
                      />
                    </View>
                  )
                } else {
                  return null
                }
              }}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: Mixins.scaleSize(15),
              }}
            >
              <Text style={{ marginRight: Mixins.scaleSize(10) }}>
                {selectedFriends} recipients
              </Text>
              <Button
                text="edit"
                type="small"
                _onPress={() => {
                  this.props.navigation.navigate('AddPostPermissions')
                }}
              />
            </View>
          </View>
        </View>
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
    // maxHeight: Mixins.scaleSize(250),
  },
})

export default AddPost

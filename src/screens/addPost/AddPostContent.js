import React from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import ScreenHeader from '../../components/ScreenHeader'
import AddPostOptionBar from '../../components/AddPostOptionBar'
import IconButton from './../../components/iconButton/IconButton'
import Button from './../../components/Button'
import Circle from './../../components/Circle'
import PostMedia from '../../components/PostMediaUpload'
import Modal from 'react-native-modal'
import LottieView from 'lottie-react-native'

class AddPost extends React.Component {
  constructor(props) {
    super(props)
    this.textInputRef = null
    this.state = {
      text: '',
      tags: [],
      submitted: false,
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.textInputRef.focus();
    });

    // reset for new draft
    this.props.resetMedia()
    this.props.resetRecipient()

    // default selected group
    let defaultRecipients = this.props.route.params?.defaultRecipients ?? {}

    Object.keys(defaultRecipients).map(index => {
      this.props.setRecipient(defaultRecipients[index]._id, true)
    })
  }

  submitPost() {
    this.setState({ submitted: true })
    this.props
      .submitPost(this.state.text, this.state.tags)
      .then(this.setState({ submitted: false }))
  }

  onChangeText(text) {
    const hashRegEx = /\B#\w*[a-zA-Z0-9]+\w*/g
    let tags = []
    let match = []

    while ((match = hashRegEx.exec(text))) {
      tags.push({
        name: match[0].substring(1, match[0].length),
        indices: [match.index, match.index + match[0].length],
      })
    }

    this.setState({ text, tags })
  }

  render() {
    let selectedFriends = this.props.friends.reduce(
      (total, friend) =>
        this.props.recipients[friend.friend._id] ? total + 1 : total,
      0
    )

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="height"
        contentContainerStyle={{ paddingBottom: Layouts.PAD_BOTTOM }}
      >
        <ScreenHeader
          isFixed={true}
          title={'New Post'}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
          rightItems={
            <Button
              text="post"
              type="outline"
              disabled={this.props.pendingSubmission}
              _onPress={() => this.submitPost()}
            />
          }
        />
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={{ flex: 1, marginBottom: Mixins.scaleSize(54) }}
          contentContainerStyle={{ flexGrow: 1 }}>

          <TouchableOpacity
            style={styles.recipients_wrapper}
            onPress={() => {
              this.props.navigation.navigate('AddPostPermissions')
            }}>
            {
              // CircleList for addPost...
              // let's keep this here for now since it works ;p
            }
            <FlatList
              data={this.props.friends}
              extraData={this.props.recipients}
              keyboardShouldPersistTaps="always"
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
                        disabled={true}
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
            >
              <View style={{ paddingVertical: Layouts.PAD_VERT }}>
                <Text style={Typography.F_REGULAR}>
                  {selectedFriends} recipients{' '}
                  <Text style={Typography.F_BOLD}>edit</Text>
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <TextInput
              ref={ref => (this.textInputRef = ref)}
              placeholder="what are you up to?"
              style={styles.input}
              onChangeText={text => {
                this.onChangeText(text)
              }}
              multiline
              scrollEnabled={false}
              autoFocus
            />
            {this.props.media.length > 0 && (
              <PostMedia
                media={this.props.media}
                removeImage={index => this.props.removeImage(index)}
              />
            )}
          </View>
        </ScrollView>
        <Modal
          isVisible={this.props.pendingSubmission}
          backdropColor={Colors.BLACK}
          backdropOpacity={0.6}
          style={{ margin: 0 }}
          animatedIn="none"
          animatedOut="none"
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            {Platform.OS === "ios" &&
              <LottieView
                ref={animation => {
                  this.loadingAnimation = animation
                }}
                style={{
                  width: 50,
                  height: 50,
                }}
                autoPlay
                source={require('./../../assets/lottie/loading--pluto.json')}
              />}
          </View>
        </Modal>
        <View style={styles.options_wrapper}>
          <AddPostOptionBar
            navigation={this.props.navigation}
            addImage={uri => {
              this.props.addImage(uri)
            }}
            callback={() => {
              this.textInputRef.focus();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    minHeight: Mixins.scaleSize(80),
    marginHorizontal: Layouts.PAD_HORZ,
    marginVertical: Layouts.PAD_VERT,
    padding: Layouts.PAD_HORZ,
    paddingTop: Layouts.PAD_HORZ,
    borderWidth: 1,
    borderColor: Colors.VIOLET.dark,
    borderRadius: Mixins.scaleSize(20),
  },
  recipients_wrapper: {
    marginVertical: Layouts.PAD_VERT,
    marginLeft: Layouts.PAD_HORZ,
    paddingLeft: Layouts.PAD_HORZ,
    paddingTop: Layouts.PAD_VERT,
    backgroundColor: Colors.VIOLET.light,
    borderTopLeftRadius: Mixins.scaleSize(20),
    borderBottomLeftRadius: Mixins.scaleSize(20),
    justifyContent: 'center',
    minHeight: Mixins.scaleSize(100),
  },
  options_wrapper: {
    position: "absolute",
    bottom: 0
  }
})

export default AddPost

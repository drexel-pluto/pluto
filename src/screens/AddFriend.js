import React from 'react'
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import QRLink from '../components/QRLink'
import ShareLink from '../components/ShareLink'
import InvitationCenter from '../components/InvitationCenter'
import InputHeader from '../components/InputHeader'
import { LinearGradient } from 'expo-linear-gradient'
import { Linking } from 'expo'

class AddFriend extends React.Component {
  constructor(props) {
    super(props)

    var url = Linking.makeUrl('addfriend', { username: this.props.username })

    this.state = {
      url,
      text: ""
    }
  }

  onChangeText(text) {
    this.setState({text});
  }

  render() {
    return (
      <View style={{ flex: 1, paddingBottom: Layouts.PAD_BOTTOM }}>
        <ScreenHeader
          isFixed={true}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
        />
        <LinearGradient
          colors={Colors.UI_BG_GRADIENT}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0, 0.5]}
        >
          <View>
            <View
              style={[styles.topContainer, Styles.shadow(Colors.VIOLET.dark)]}
            >
              <QRLink url={this.state.url} />
              <InputHeader
                placeholder={'username...'}
                buttonText={'send request'}
                onSubmit={() => this.props.onSubmit(this.state.text)}
                onChangeText={(text)=>this.onChangeText(text)}
                text={this.state.text}
                style={{
                  margin : Layouts.PAD_HORZ,
                }}
              />
            </View>
          </View>
          <InvitationCenter
            requests={this.props.requests}
            sent={this.props.sent}
            accept={this.props.accept}
            reject={this.props.reject}
            cancel={this.props.cancel}
          />
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    borderBottomLeftRadius: Mixins.scaleSize(35),
    borderBottomRightRadius: Mixins.scaleSize(35),
    backgroundColor: Colors.PLUTO_WHITE,
    marginBottom: Layouts.PAD_VERT,
  },

})

export default AddFriend

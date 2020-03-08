import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { BlurView } from 'expo-blur';
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import Circle from '../components/Circle'
import Button from "../components/Button"

class UserPopup extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BlurView style={[Layouts.FLEX_CONTAINER_CENTER]} tint="default" intensity={100}>
        <View style={styles.wrapper}>
          <View style={[styles.listSpacing, styles.userInfo]}>
            <Circle size={70} user={this.props.user} style={{marginRight: Layouts.PAD_HORZ_SM}}/>
            <Text >{this.props.user.name ?? "Name"}</Text>
            <Text >{this.props.user.username ?? "Username"}</Text>
          </View>
          <Button _onPress={this.props.send} text="send friend request" style={styles.listSpacing}/>
          <Button _onPress={this.props.cancel} text="cancel" color={Colors.MELON}/>
        </View>
      </BlurView>
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.PLUTO_WHITE,
    marginHorizontal: Layouts.PAD_HORZ,
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_HORZ,
    borderColor: Colors.VIOLET.med,
    borderWidth: 1,
    borderRadius: 16,
  },
  listSpacing: {
    marginBottom: Layouts.PAD_VERT
  },
  userInfo: {
    flexWrap: "wrap",
    height: 70,
    justifyContent: "center",
    marginBottom: 30
  }
})

export default UserPopup

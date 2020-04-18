import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { BlurView } from 'expo-blur'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import Circle from '../components/Circle'
import Button from '../components/Button'

class UserPopup extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BlurView
        style={[Layouts.FLEX_CONTAINER_CENTER]}
        tint="default"
        intensity={100}
      >
        <View style={styles.wrapper}>
          <View style={[styles.listSpacing, styles.userInfo]}>
            <Circle
              size={70}
              user={this.props.user}
              style={{ marginRight: Layouts.PAD_HORZ_SM }}
            />
            <Text style={Typography.F_H3}>
              {this.props.user.name ?? 'Name'}
            </Text>
            <Text>{this.props.user.username ?? 'Username'}</Text>
          </View>
          <View style={styles.buttonRow}>
            <Button
              _onPress={this.props.send}
              text="send friend request"
              style={styles.listSpacing}
            />
            <Button
              _onPress={this.props.cancel}
              text="cancel"
              color={Colors.MELON}
            />
          </View>
        </View>
      </BlurView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.CREAM,
    marginHorizontal: Layouts.PAD_HORZ,
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_HORZ,
    borderRadius: 16,
  },
  listSpacing: {
    marginRight: Layouts.PAD_HORZ,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  userInfo: {
    flexWrap: 'wrap',
    height: 70,
    justifyContent: 'center',
    marginBottom: 30,
  },
})

export default UserPopup

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import AddPostButton from './AddPostButton'
import AddFriendButton from './AddFriendButton'
import HeartButton from './HeartButton'
import SearchItem from '../../assets/images/iconSearch.svg'
import NotiCenter from '../../assets/images/iconNotif.svg'
import MyProfile from '../../assets/images/iconProfile.svg'

export default IconButton = props => {
  const { type, customColor, _onPress } = props

  switch (type) {
    case 'addPost':
      return (
        <AddPostButton
          _onPress={() => {
            _onPress()
          }}
        />
      )
    case 'addFriend':
      return (
        <AddFriendButton
          requestNum={props.requestNum}
          _onPress={() => {
            _onPress()
          }}
        />
      )
    case 'searchItem':
      return (
        <TouchableOpacity
          onPress={() => {
            _onPress()
          }}
        >
          <SearchItem />
        </TouchableOpacity>
      )
    case 'notiCenter':
      return (
        <TouchableOpacity
          onPress={() => {
            _onPress()
          }}
        >
          <NotiCenter />
        </TouchableOpacity>
      )

    case 'myProfile':
      return (
        <TouchableOpacity
          onPress={() => {
            _onPress()
          }}
        >
          <MyProfile />
        </TouchableOpacity>
      )
    default:
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            type == 'back' ? _onPress(null) : _onPress()
          }}
        >
          <Text
            style={[
              Typography.F_CAPTION,
              customColor ? { color: customColor } : null,
            ]}
          >
            {type}
          </Text>
        </TouchableOpacity>
      )
  }
}

IconButton.defaultProps = {
  type: 'icon',
  _onPress: () => {},
}

const styles = StyleSheet.create({
  iconButton: {
    padding: Mixins.scaleSize(5),
  },
})

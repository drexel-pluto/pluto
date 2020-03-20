import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import AddPostButton from './AddPostButton'
import AddFriendButton from './AddFriendButton'
import HeartButton from './HeartButton'
import SearchItem from '../../assets/images/iconSearch.svg'
import NotiCenter from '../../assets/images/iconNotif.svg'
import MyProfile from '../../assets/images/iconProfile.svg'
import Settings from '../../assets/images/iconSettings.svg'
import Filter from '../../assets/images/iconFilter.svg'
import Back from '../../assets/images/iconBack.svg'
import Comment from '../../assets/images/iconComment.svg'
import Cancel from '../../assets/images/iconCancel.svg'
import UploadImage from '../../assets/images/iconCamera.svg'
import ChooseImage from '../../assets/images/iconImage.svg'

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
    case 'heartPost':
      return <HeartButton />

    case 'settings':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <Settings />
        </TouchableOpacity>
      )

    case 'filter':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <Filter />
        </TouchableOpacity>
      )

    case 'searchItem':
      return (
        <TouchableOpacity
          style={styles.iconButton}
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
          style={styles.iconButton}
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
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <MyProfile />
        </TouchableOpacity>
      )

    case 'comment':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <Comment />
        </TouchableOpacity>
      )

    case 'chooseImage':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <ChooseImage />
        </TouchableOpacity>
      )

    case 'uploadImage':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <UploadImage />
        </TouchableOpacity>
      )

    case 'cancel':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <Cancel />
        </TouchableOpacity>
      )
    case 'back':
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress(null)
          }}
        >
          <Back />
        </TouchableOpacity>
      )
    default:
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            _onPress()
          }}
        >
          <Text>{type}</Text>
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

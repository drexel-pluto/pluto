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
import EditImage from '../../assets/images/iconEdit.svg'
import Confirm from '../../assets/images/iconConfirm.svg'

export default IconButton = props => {
  const { type, isSmall, _onPress, style, customColor } = props
  const smallIconSize = 0.8

  switch (type) {
    case 'addPost':
      return (
        <AddPostButton
          _onPress={() => {
            _onPress()
          }}
        />
      )

    case 'edit':
      return (
        <TouchableOpacity
          style={[
            styles.iconButton,
            { transform: [{ scale: isSmall ? smallIconSize : 1 }] },
            style,
          ]}
          onPress={() => {
            _onPress()
          }}
        >
          <EditImage />
        </TouchableOpacity>
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
          style={[
            styles.iconButton,
            { transform: [{ scale: isSmall ? smallIconSize : 1 }] },
            style,
          ]}
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
          style={[
            styles.iconButton,
            { transform: [{ scale: isSmall ? smallIconSize : 1 }] },
            style,
          ]}
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
          style={[
            styles.iconButton,
            { transform: [{ scale: isSmall ? smallIconSize : 1 }] },
            style,
          ]}
          onPress={() => {
            // _onPress()
            alert('feature in progress')
          }}
        >
          <SearchItem />
        </TouchableOpacity>
      )
    case 'notiCenter':
      return (
        <TouchableOpacity
          style={[
            styles.iconButton,
            { transform: [{ scale: isSmall ? smallIconSize : 1 }] },
            style,
          ]}
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
          style={[
            styles.iconButton,
            { transform: [{ scale: isSmall ? smallIconSize : 1 }] },
            style,
          ]}
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
          style={[
            styles.iconButton,
            { transform: [{ scale: isSmall ? smallIconSize : 1 }] },
            style,
          ]}
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
          style={(styles.iconButton, styles.iconChooseImage)}
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
          style={styles.iconUploadImg}
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
          style={[
            styles.iconButton,
            { transform: [{ scale: isSmall ? smallIconSize : 1 }] },
            style,
          ]}
          onPress={() => {
            _onPress()
          }}
        >
          <Cancel stroke={customColor} />
        </TouchableOpacity>
      )

    case 'confirm':
      return (
        <TouchableOpacity
          style={[
            styles.iconButton,
            { transform: [{ scale: isSmall ? smallIconSize : 1 }] },
            style,
          ]}
          onPress={() => {
            _onPress()
          }}
        >
          <Confirm stroke={customColor} />
        </TouchableOpacity>
      )
    case 'back':
      return (
        <TouchableOpacity
          style={[
            styles.iconButton,
            { transform: [{ scale: isSmall ? smallIconSize : 1 }] },
            style,
          ]}
          onPress={() => {
            _onPress(null)
          }}
        >
          <Back />
        </TouchableOpacity>
      )

    case 'options':
      return (
        <TouchableOpacity
          style={[
            styles.iconButton,
            { transform: [{ scale: isSmall ? 0.7 : 1 }, {rotate: Math.PI / -2}] },
            style,
          ]}
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
          style={[
            styles.iconButton,
            { transform: [{ scale: isSmall ? smallIconSize : 1 }] },
            style,
          ]}
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
  isSmall: false,
  customColor: Colors.BLACK_ROCK,
  _onPress: () => {},
}

const styles = StyleSheet.create({
  iconButton: {
    padding: Mixins.scaleSize(5),
  },
  iconChooseImage: {
    paddingTop: '7%',
    paddingLeft: '5%',
  },
  iconUploadImg: {
    padding: Mixins.scaleSize(5),
    paddingLeft: '13%',
  },
})

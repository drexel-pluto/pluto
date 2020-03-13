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
      return (

        <HeartButton />
      )

      case 'settings':
        return (
  
        <Settings
          _onPress={() => {
            _onPress()
          }}
        />
        )

      case 'filter':
        return (

          <Filter />

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

      case 'comment':
      return (
    
          <Comment />
        
      )

      case 'chooseImage':
      return (
    
          <ChooseImage />
        
      )

      case 'uploadImage':
      return (


        <UploadImage 
        _onPress={this.openCameraAsync} 
        />

      )

      case 'cancel':
      return (
        <Cancel
        />
      )
    default:
      return (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            type == 'back' ? _onPress(null) : _onPress()
          }}
        >
          <Back />
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

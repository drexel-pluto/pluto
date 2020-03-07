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
  
          <Settings />
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

      case 'cancel':
      return (
        <AddPostButton
          _onPress={() => {
            _onPress()
          }}
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

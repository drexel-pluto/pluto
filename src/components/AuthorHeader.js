import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import { getFriendById } from '../redux/store'
import { useNavigation } from '@react-navigation/native'

const anonProfiles = [
  require("../assets/images/anon_profiles/prof_01.png"),
  require("../assets/images/anon_profiles/prof_02.png"),
  require("../assets/images/anon_profiles/prof_03.png"),
  require("../assets/images/anon_profiles/prof_04.png"),
  require("../assets/images/anon_profiles/prof_05.png"),
]

const AuthorHeader = props => {
  const navigation = useNavigation()
  const { author, isCompact, authorId } = props
  var authInfo
  if (author) {
    authInfo = author
  } else {
    authInfo = getFriendById(authorId)
  }

  return (
    <View style={styles.author}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile', { userId: authInfo._id })
        }}
        disabled={authInfo.name == null}
      >
        <Image
          style={[styles.author__image, isCompact ? styles.isCompact : '']}
          source={ authInfo.profilePicURL 
            ? {uri: authInfo.profilePicURL}
            : anonProfiles[hashString(JSON.stringify(authInfo))]
          }
        />
      </TouchableOpacity>
      {isCompact ? null : (
        <View>
          <Text style={[Typography.F_BODY, Typography.F_BOLD]}>
            {authInfo.name ?? authInfo}
          </Text>
          <Text style={[Typography.F_SUBTITLE, { opacity: 0.7 }]}>
            {calcTimeDif(props.time)}
          </Text>
        </View>
      )}
    </View>
  )
}

export default AuthorHeader

export const calcTimeDif = time => {
  if (!time) return ''

  const date = new Date(time)

  var seconds = Math.floor((new Date() - date) / 1000)

  var interval = Math.floor(seconds / 31536000)

  if (interval > 1) {
    return interval + ' years ago'
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return interval + ' months ago'
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return interval + ' days ago'
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return interval + ' hours ago'
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return interval + ' minutes ago'
  }
  return Math.floor(seconds) + ' seconds ago'
}

const hashString = function(str) {
  var hash = 0, i, chr, len;
  if (str.length === 0) return hash;
  for (i = 0, len = str.length; i < len; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash) % anonProfiles.length;
};

const styles = StyleSheet.create({
  author: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  author__image: {
    width: Mixins.scaleSize(45),
    height: Mixins.scaleSize(45),
    borderRadius: Mixins.scaleSize(45) / 2,
    marginRight: Mixins.scaleSize(15),
    borderWidth: 1,
    borderColor: 'white',
  },
  isCompact: {
    width: Mixins.scaleSize(30),
    height: Mixins.scaleSize(30),
    borderRadius: Mixins.scaleSize(15),
  },
})

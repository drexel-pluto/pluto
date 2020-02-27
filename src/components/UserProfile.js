import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'

export default UserProfile = props => {
  return (
    <View style={[styles.userProfile, Layouts.FLEX_CONTAINER_CENTER]}>
      <Image
        style={styles.image}
        source={{
          uri: props.profile.profilePicURL,
        }}
      />
      <View style={[styles.text_wrapper, Layouts.FLEX_CONTAINER_CENTER]}>
        <Text style={[styles.title, Typography.F_H1]}>
          {props.profile.name}
        </Text>
        <Text style={[styles.bio, Typography.F_SUBTITLE]}>
          Lali ho! Hosting another event at Redcaps, be there or be- well I
          don’t need to tell you dweebs!
        </Text>
      </View>
    </View>
  )
}

UserProfile.defaultProps = {
  profile: {
    image: 'https://picsum.photos/id/237/300/300',
  },
}

const styles = StyleSheet.create({
  userProfile: {
    paddingVertical: Layouts.PAD_VERT,
  },
  text_wrapper: {},
  title: {
    marginVertical: Mixins.scaleSize(10),
  },
  bio: {
    textAlign: 'center',
    width: '75%',
    maxWidth: Mixins.scaleSize(300),
  },
  image: {
    width: Mixins.scaleSize(100),
    height: Mixins.scaleSize(100),
    borderRadius: Mixins.scaleSize(100 / 2),
    backgroundColor: Colors.GRAY_DARK,
  },
})

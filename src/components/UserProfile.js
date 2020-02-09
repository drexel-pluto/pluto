import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

export default UserProfile = props => {
  return (
    <View style={[styles.userProfile, Layouts.FLEX_CONTAINER_CENTER]}>
      <Image
        style={styles.image}
        source={{
          uri: props.profile.image,
        }}
      />
      <View style={[styles.text_wrapper, Layouts.FLEX_CONTAINER_CENTER]}>
        <Text style={Typography.F_H2}>{props.profile.name}</Text>
        <Text style={Typography.F_BODY}>
          some bio information...lorem ipsum stuff...
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
  userProfile: {},
  text_wrapper: {},
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
})

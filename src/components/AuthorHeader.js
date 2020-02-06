import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

export default AuthorHeader = props => {
  const { author, isCompact } = props

  return (
    <TouchableOpacity>
      <View style={styles.author}>
        <Image
          style={[styles.author__image, isCompact ? styles.isCompact : '']}
          source={{ uri: author.image }}
        />
        {isCompact ? null : <Text>{author.name}</Text>}
      </View>
    </TouchableOpacity>
  )
}

AuthorHeader.defaultProps = {
  author: {
    image: 'https://picsum.photos/id/237/300/300',
    name: 'author name',
  },
}

const styles = StyleSheet.create({
  author: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  author__image: {
    width: Mixins.scaleSize(50),
    height: Mixins.scaleSize(50),
    borderRadius: Mixins.scaleSize(25),
    marginRight: Mixins.scaleSize(15),
  },
  isCompact: {
    width: Mixins.scaleSize(30),
    height: Mixins.scaleSize(30),
    borderRadius: Mixins.scaleSize(15),
  },
})

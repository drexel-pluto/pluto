import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'

export default AuthorHeader = props => {
  const { author, timeStamp, isCompact } = props

  return (
    <TouchableOpacity>
      <View style={styles.author}>
        <Image
          style={[styles.author__image, isCompact ? styles.isCompact : '']}
          source={{ uri: author.image }}
        />
        {isCompact ? null : (
          <View>
            <Text style={[Typography.F_BODY, { fontWeight: '600' }]}>
              {author.name}
            </Text>
            <Text style={Typography.F_SUBTITLE}>{timeStamp}</Text>
          </View>
        )}
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

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import RNMasonryScroll from 'react-native-masonry-scrollview'
import AutoHeightImage from 'react-native-auto-height-image'

const PostGridItem = props => {
  const itemWidth =
    Mixins.resWidthPercent(50) - Mixins.scaleSize(Layouts.PAD_HORZ + 15)
  const { author, content } = props

  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.outer}>
        <View style={styles.inner}>
          <View style={styles.postGridItem}>
            {content.image ? (
              <AutoHeightImage
                width={itemWidth}
                style={styles.postGridItem__image}
                source={{ uri: content.image }}
              />
            ) : (
              <Text style={[styles.postGridItem__text, { width: itemWidth }]}>
                {content.text}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PostGrid = props => {
  return (
    <View style={styles.postGrid}>
      <RNMasonryScroll columns={2}>
        {props.data.map(item => {
          return <PostGridItem author={item.author} content={item.content} />
        })}
      </RNMasonryScroll>
      <Text
        style={[
          { textAlign: 'center', paddingVertical: Mixins.scaleSize(30) },
          Typography.F_SUBTITLE,
        ]}
      >
        You've reached the end of the feed!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  postGrid: {
    flex: 1,
    paddingVertical: Layouts.PAD_VERT,
    paddingHorizontal: Layouts.PAD_HORZ,
  },
  postGridItem: {
    maxHeight: Mixins.scaleSize(200),
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: Mixins.scaleSize(15),
    margin: Mixins.scaleSize(7),
    overflow: 'hidden',
  },
  postGridItem__image: {},
  postGridItem__text: {
    padding: Mixins.scaleSize(15),
  },
  outer: {
    borderRadius: Mixins.scaleSize(15),
    shadowOffset: { width: 4, height: 4 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  inner: {
    borderRadius: Mixins.scaleSize(15),
    shadowOffset: { width: -2, height: -2 },
    shadowColor: '#ffffff',
    shadowOpacity: 1,
    shadowRadius: 2,
  },
})

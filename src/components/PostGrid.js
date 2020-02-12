import React from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import RNMasonryScroll from 'react-native-masonry-scrollview'
import AutoHeightImage from 'react-native-auto-height-image'

const PostGridItem = props => {
  const itemWidth = Mixins.resWidthPercent(50) - Mixins.scaleSize(20)
  const { author, content } = props

  return (
    <TouchableHighlight>
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
    </TouchableHighlight>
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
    </View>
  )
}

const styles = StyleSheet.create({
  postGrid: {
    backgroundColor: Colors.GRAY_DARK,
    flex: 1,
    padding: Mixins.scaleSize(10),
  },
  postGridItem: {
    maxHeight: Mixins.scaleSize(200),
    backgroundColor: Colors.GRAY_LIGHT,
    margin: Mixins.scaleSize(5),
    overflow: 'hidden',
  },
  postGridItem__image: {},
  postGridItem__text: {
    padding: Mixins.scaleSize(15),
  },
})

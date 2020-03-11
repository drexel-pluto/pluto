import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import RNMasonryScroll from 'react-native-masonry-scrollview'
import AutoHeightImage from 'react-native-auto-height-image'
import StyledContainer from './StyledContainer'

const PostGridItem = props => {
  const itemWidth =
    Mixins.resWidthPercent(50) - Mixins.scaleSize(Layouts.PAD_HORZ + 15)
  const { _id, author, media, text, openPost } = props

  return (
    <TouchableOpacity
      onPress={() => {
        openPost(_id, author)
      }}
    >
      <StyledContainer>
        <View style={[styles.postGridItem, Styles.STYLED_BORDER]}>
          {media.length > 0 ? (
            <AutoHeightImage
              width={itemWidth}
              style={styles.postGridItem__image}
              source={{ uri: media[0] }} // use first image as thumb if multiple images
            />
          ) : (
            <Text style={[styles.postGridItem__text, { width: itemWidth }]}>
              {text}
            </Text>
          )}
        </View>
      </StyledContainer>
    </TouchableOpacity>
  )
}

export default PostGrid = props => {
  return (
    <View style={styles.postGrid}>
      <RNMasonryScroll columns={2}>
        {props.data.map(item => {
          return (
            <PostGridItem
              _id={item._id}
              author={item.poster}
              media={item.mediaURLs}
              text={item.text}
              openPost={props.openPost}
            />
          )
        })}
      </RNMasonryScroll>
    </View>
  )
}

const styles = StyleSheet.create({
  postGrid: {
    flex: 1,
    paddingTop: Layouts.PAD_VERT,
    paddingBottom: Mixins.scaleSize(20),
    paddingHorizontal: Layouts.PAD_HORZ,
  },
  postGridItem: {
    // maxHeight: Mixins.scaleSize(200),
    backgroundColor: Colors.PLUTO_WHITE,
    borderRadius: Mixins.scaleSize(15),
    margin: Mixins.scaleSize(7),
    overflow: 'hidden',
  },
  postGridItem__image: {},
  postGridItem__text: {
    padding: Mixins.scaleSize(15),
  },
})

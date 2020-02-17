import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import RNMasonryScroll from 'react-native-masonry-scrollview'
import AutoHeightImage from 'react-native-auto-height-image'
import StyledContainer from './StyledContainer'

const PostGridItem = props => {
  const itemWidth =
    Mixins.resWidthPercent(50) - Mixins.scaleSize(Layouts.PAD_HORZ + 13)
  const { author, content } = props

  return (
    <TouchableOpacity onPress={() => {}}>
      <StyledContainer>
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
      </StyledContainer>
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
    // maxHeight: Mixins.scaleSize(200),
    backgroundColor: 'white',
    borderRadius: Mixins.scaleSize(15),
    margin: Mixins.scaleSize(7),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.CREAM,
  },
  postGridItem__image: {},
  postGridItem__text: {
    padding: Mixins.scaleSize(15),
  },
})

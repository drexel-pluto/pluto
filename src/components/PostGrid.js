import React, { useRef, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import RNMasonryScroll from 'react-native-masonry-scrollview'
import AutoHeightImage from 'react-native-auto-height-image'
import StyledContainer from './StyledContainer'

const PostGridItem = React.memo(props => {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.exp),
        delay: props.index * 50
      }
    ).start();
  }, [])

  const itemWidth =
    Mixins.resWidthPercent(50) - Mixins.scaleSize(Layouts.PAD_HORZ + 15)
  const { _id, author, media, text, openPost } = props
  return (
    <Animated.View
    style={{
      opacity: fadeAnim,
      top: fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [80, 0]
      })
    }}>
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
            <View
              style={[
                styles.postGridItem__text,
                { width: itemWidth, maxHeight: Mixins.scaleSize(200) },
              ]}
            >
              <Text numberOfLines={8}>{text}</Text>
            </View>
          )}
        </View>
      </StyledContainer>
    </TouchableOpacity>

    </Animated.View>
  )
});

export default PostGrid = props => {
  return (
    <View style={styles.postGrid}>
      <RNMasonryScroll columns={2}>
        {props.data.map((item, index) => {
          return (
            <PostGridItem
              _id={item._id}
              author={item.poster}
              media={item.mediaURLs}
              text={item.text}
              openPost={props.openPost}
              key={index}
              index={index}
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
    minHeight: Mixins.scaleSize(70),
    overflow: 'hidden',
  },
  postGridItem__image: {
  },
  postGridItem__text: {
    padding: Mixins.scaleSize(15),
  },
})

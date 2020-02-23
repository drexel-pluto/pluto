import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Mixins, Colors, Layouts } from '../styles/index'
import LightBox from 'react-native-lightbox'
import Carousel from 'react-native-looped-carousel'
import IconButton from './iconButton/IconButton'

const renderCarousel = (images, currentImg) => (
  <View style={{ flex: 1 }}>
    <Carousel style={{ flex: 1 }} currentPage={currentImg} autoplay={false}>
      {images.map(imgUrl => (
        <Image
          style={{ flex: 1 }}
          resizeMode="contain"
          source={{ uri: imgUrl }}
          key={imgUrl}
        />
      ))}
    </Carousel>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: Layouts.PAD_VERT,
        paddingBottom: Mixins.scaleSize(30),
      }}
    >
      <IconButton type="like" />
      <IconButton type="replies" />
    </View>
  </View>
)

const renderHeader = close => (
  <View
    style={{
      paddingVertical: Layouts.PAD_VERT,
      paddingHorizontal: Layouts.PAD_HORZ,
      alignItems: 'flex-end',
      paddingTop: Layouts.HEAD_PAD_VERT,
    }}
  >
    <IconButton type="close" _onPress={close} />
  </View>
)

export default PostMedia = props => {
  return (
    <View style={styles.postMediaWrapper}>
      {props.media.map((imgUrl, index) => {
        return (
          <LightBox
            style={styles.mediaItem}
            renderContent={() => renderCarousel(props.media, index)}
            renderHeader={close => renderHeader(close)}
            swipeToDismiss={false}
            backgroundColor={Colors.PEARL}
            underlayColor={Colors.TRANSPARENT}
          >
            <Image
              source={{ uri: imgUrl }}
              key={index}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: Mixins.scaleSize(20),
              }}
            />
          </LightBox>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  postMediaWrapper: {
    height: Mixins.scaleSize(250),
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'stretch',
    padding: 0,
  },
  mediaItem: {
    margin: 0,
    width: '40%',
    flexGrow: 1,
    paddingHorizontal: Mixins.scaleSize(5),
  },
})

import React from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { Mixins, Colors, Layouts } from '../styles/index'
import Carousel from 'react-native-looped-carousel'
import IconButton from './iconButton/IconButton'
import Modal from 'react-native-modal'

const CarouselView = props => {
  const { images, currentImg, toggle } = props

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          top: 0,
          paddingVertical: Layouts.PAD_VERT,
          paddingHorizontal: Layouts.PAD_HORZ,
          alignItems: 'flex-end',
          zIndex: 10,
        }}
      >
        <IconButton type="close" _onPress={toggle} />
      </View>
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
          width: '100%',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: Layouts.PAD_VERT,
        }}
      >
        <IconButton type="like" />
        <IconButton type="replies" />
      </View>
    </View>
  )
}

class PostMedia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lightBoxVisible: false,
      selectedImg: 0,
    }
  }

  toggleLightBox = index => {
    this.setState({
      lightBoxVisible: !this.state.lightBoxVisible,
      selectedImg: index,
    })
  }

  render() {
    let currentImg = 0
    return (
      <View style={styles.postMediaWrapper}>
        <Modal
          isVisible={this.state.lightBoxVisible}
          backdropColor={Colors.PEARL}
          backdropOpacity={1}
          style={{ marginHorizontal: 0 }}
          // swipeDirection={['down', 'up']}
          // onSwipeComplete={() => {
          //   this.toggleLightBox()
          // }}
        >
          <CarouselView
            images={this.props.media}
            currentImg={this.state.selectedImg}
            toggle={this.toggleLightBox}
          />
        </Modal>
        {this.props.media.map((imgUrl, index) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                this.toggleLightBox(index)
              }}
              style={styles.mediaItem}
            >
              <View style={styles.mediaItem}>
                <Image
                  source={{ uri: imgUrl }}
                  key={index}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: Mixins.scaleSize(20),
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          )
        })}
      </View>
    )
  }
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

export default PostMedia

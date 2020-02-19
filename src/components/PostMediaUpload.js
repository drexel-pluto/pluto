import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import { FLEX_CONTAINER } from '../styles/layouts'

const MediaItem = props => (
  <View>
    <Image source={{ uri: props.uri }} style={props.style} />
    <TouchableOpacity style={styles.iconWrapper} onPress={props.onPress}>
      <Text style={{ color: 'white' }}>X</Text>
    </TouchableOpacity>
  </View>
)

export default PostMedia = props => {
  if (props.media.length == 1) {
    return (
      <View style={styles.singleWrapper}>
        <MediaItem
          uri={props.media[0].uri}
          style={styles.singleMediaItem}
          onPress={() => props.removeImage(0)}
        />
      </View>
    )
  }

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.postMediaWrapper}
      snapToInterval={240 + Layouts.PAD}
      snapToAlignment="center"
      decelerationRate="fast"
      style={{ flexGrow: 0 }}
      showsHorizontalScrollIndicator={false}
    >
      {props.media.map((img, key) => {
        return (
          <MediaItem
            onPress={() => props.removeImage(key)}
            uri={img.uri}
            key={key}
            style={styles.mediaItem}
          />
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  postMediaWrapper: {
    height: 150,
    padding: Layouts.PAD / 2,
  },
  mediaItem: {
    margin: Layouts.PAD / 2,
    width: 240,
    flexGrow: 1,
    borderRadius: 14,
  },
  singleMediaItem: {
    margin: Layouts.PAD / 2,
    height: 150 - Layouts.PAD * 2,
    borderRadius: 14,
  },
  singleWrapper: {
    height: 150,
    padding: Layouts.PAD / 2,
  },
  iconWrapper: {
    width: 26,
    height: 26,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
    position: 'absolute',
    right: 10,
    top: 10,
    opacity: 0.8,
  },
})

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
import IconButton from './iconButton/IconButton'

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

  let snapIntervalVal = Mixins.scaleSize(240) + Layouts.PAD_HORZ

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.postMediaWrapper}
      snapToInterval={snapIntervalVal}
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
    height: Mixins.scaleSize(220),
    padding: Layouts.PAD_HORZ / 2,
  },
  mediaItem: {
    margin: Layouts.PAD_HORZ / 2,
    width: Mixins.scaleSize(240),
    flexGrow: 1,
    borderRadius: Mixins.scaleSize(14),
  },
  singleMediaItem: {
    margin: Layouts.PAD_HORZ / 2,
    height: Mixins.scaleSize(220 - Layouts.PAD_HORZ * 2),
    borderRadius: Mixins.scaleSize(14),
  },
  singleWrapper: {
    height: Mixins.scaleSize(220),
    padding: Layouts.PAD_HORZ / 2,
  },
  iconWrapper: {
    width: Mixins.scaleSize(26),
    height: Mixins.scaleSize(26),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Mixins.scaleSize(26),
    position: 'absolute',
    right: Mixins.scaleSize(13),
    top: Mixins.scaleSize(13),
    opacity: 0.8,
  },
})

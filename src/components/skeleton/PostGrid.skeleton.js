import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles'
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder'
import RNMasonryScroll from 'react-native-masonry-scrollview'

export default TagListSkeleton = props => {
  var row1 = []
  var row2 = []

  for (let i = 0; i < 12; i++) {
    row1.push(
      <PlaceholderMedia
        style={[
          {
            height: 60 + (i % 4) * 20,
            width: '100%',
          },
          styles.postGridItem,
        ]}
      />
    )
    row2.push(
      <PlaceholderMedia
        style={[
          {
            height: 60 + ((i + 2) % 4) * 20,
            width: '100%',
          },
          styles.postGridItem,
        ]}
      />
    )
  }

  return (
    <Placeholder Animation={Fade}>
      <View style={styles.postGrid}>
        <View style={{ width: '50%', paddingHorizontal: Mixins.scaleSize(7) }}>
          {row1}
        </View>
        <View style={{ width: '50%', paddingHorizontal: Mixins.scaleSize(7) }}>
          {row2}
        </View>
      </View>
    </Placeholder>
  )
}

const styles = StyleSheet.create({
  postGrid: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingTop: Layouts.PAD_VERT,
    paddingBottom: Mixins.scaleSize(20),
    paddingHorizontal: Layouts.PAD_HORZ,
  },
  postGridItem: {
    borderRadius: Mixins.scaleSize(15),
    marginVertical: Mixins.scaleSize(7),
  },
})

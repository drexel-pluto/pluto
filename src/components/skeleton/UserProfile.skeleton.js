import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles'
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder'

export default TagListSkeleton = props => {
  return (
    <Placeholder
      Animation={Fade}
      style={{
        paddingHorizontal: Layouts.PAD_HORZ,
        paddingVertical: Layouts.PAD_VERT,
      }}
    >
      <View style={[styles.userProfile, Layouts.FLEX_CONTAINER_CENTER]}>
        <PlaceholderMedia style={styles.image} />
        <View style={[styles.text_wrapper, Layouts.FLEX_CONTAINER_CENTER]}>
          <PlaceholderLine
            height={30}
            width={200}
            style={{ height: 30, width: 200, marginBottom: 20, marginTop: 16 }}
          />

          <PlaceholderLine
            height={20}
            width={240}
            style={{ height: 20, width: 280, marginBottom: 10 }}
          />
          <PlaceholderLine
            height={20}
            width={240}
            style={{ height: 20, width: 280, marginBottom: 10 }}
          />
        </View>
      </View>
    </Placeholder>
  )
}

const styles = StyleSheet.create({
  image: {
    width: Mixins.scaleSize(100),
    height: Mixins.scaleSize(100),
    borderRadius: Mixins.scaleSize(100 / 2),
  },
})

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
  color = 'green'
  return (
    <Placeholder
      Animation={Fade}
      style={{
        paddingHorizontal: Layouts.PAD_HORZ,
        paddingVertical: Layouts.PAD_VERT,
      }}
      Left={props => (
        <>
          <PlaceholderMedia
            height={200}
            width={130}
            style={{
              marginRight: Mixins.scaleSize(20),
              borderRadius: Mixins.scaleSize(18),
              width: Mixins.scaleSize(80),
              height: Mixins.scaleSize(40),
            }}
          />
          <PlaceholderMedia
            height={200}
            width={130}
            style={{
              marginRight: Mixins.scaleSize(20),
              borderRadius: Mixins.scaleSize(18),
              width: Mixins.scaleSize(80),
              height: Mixins.scaleSize(40),
            }}
          />
          <PlaceholderMedia
            height={200}
            width={130}
            style={{
              marginRight: Mixins.scaleSize(20),
              borderRadius: Mixins.scaleSize(18),
              width: Mixins.scaleSize(80),
              height: Mixins.scaleSize(40),
            }}
          />
        </>
      )}
    ></Placeholder>
  )
}

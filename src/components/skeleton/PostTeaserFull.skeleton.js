import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles'
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder'

export default PostTeaserSkeleton = props => {
  color = 'green'
  return (
    <View
      style={{
        paddingHorizontal: Layouts.PAD_HORZ,
        paddingVertical: Layouts.PAD_VERT,
      }}
    >
      <Placeholder
        Animation={Fade}
        Left={props => (
          <PlaceholderMedia
            isRound={true}
            width={45}
            height={45}
            style={[
              {
                width: Mixins.scaleSize(45),
                height: Mixins.scaleSize(45),
                borderRadius: Mixins.scaleSize(45),
              },
              props.style,
            ]}
          />
        )}
      >
        <PlaceholderLine width={50} height={16} style={{ marginBottom: 10 }} />
        <PlaceholderLine width={40} height={16} />
      </Placeholder>
      <Placeholder Animation={Fade} style={{ marginTop: 18 }}>
        <PlaceholderMedia
          height={250}
          width={250}
          style={{
            borderRadius: Mixins.scaleSize(20),
            height: 250,
            width: '100%',
          }}
        />
      </Placeholder>
    </View>
  )
}

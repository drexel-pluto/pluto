import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'

export default Tag = props => {
  const { id, bgColor, tagName } = props

  return (
    <TouchableOpacity>
      <View
        style={[
          // Styles.shadow(bgColor.dark),
          styles.tag,
          {
            backgroundColor:
              bgColor === Colors.VIOLET || bgColor === Colors.CARBONE
                ? bgColor.light
                : bgColor.med,
          },
        ]}
      >
        <Text
          style={{
            color: bgColor === Colors.BLUE ? '#354B9C' : bgColor.dark,
            fontWeight: '600',
          }}
        >
          #{tagName}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: Mixins.scaleSize(20),
    paddingVertical: Mixins.scaleSize(10),
    marginRight: Mixins.scaleSize(20),
    borderRadius: Mixins.scaleSize(18),
  },
})

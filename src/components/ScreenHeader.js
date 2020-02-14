import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'

export default ScreenHeader = props => {
  const { title, rightItems, leftItems } = props

  return (
    <View style={styles.screenHeader}>
      <View style={styles.leftItems}>
        {leftItems}
        {title ? (
          <Text style={[Typography.F_H1, styles.title]}>{title}</Text>
        ) : null}
      </View>
      <View style={styles.rightItems}>{rightItems}</View>
    </View>
  )
}

ScreenHeader.defaultProps = {
  title: null,
  rightItems: null,
  leftItems: null,
}

const styles = StyleSheet.create({
  screenHeader: {
    width: '100%',
    height: Mixins.scaleSize(60),
    backgroundColor: Colors.GRAY_LIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Layouts.PAD,
  },
  title: {
    marginLeft: Mixins.scaleSize(10),
  },
  leftItems: { flexDirection: 'row' },
  rightItems: { flexDirection: 'row' },
})

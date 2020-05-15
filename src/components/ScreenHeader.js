import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'

export default ScreenHeader = props => {
  const { isFixed, headerColor, title, rightItems, leftItems } = props

  return (
    <View
      style={[
        styles.screenHeader,
        isFixed ? { backgroundColor: headerColor, zIndex: 100 } : null,
      ]}
    >
      <View style={styles.leftItems}>
        {leftItems}
        {title ? (
          <Text numberOfLines={1} style={[Typography.F_H1, styles.title]}>
            {title}
          </Text>
        ) : null}
      </View>
      <View style={styles.rightItems}>{rightItems}</View>
    </View>
  )
}

ScreenHeader.defaultProps = {
  headerColor: Colors.PLUTO_WHITE,
  title: null,
  rightItems: null,
  leftItems: null,
}

const styles = StyleSheet.create({
  screenHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingTop: Layouts.HEAD_PAD_VERT,
    paddingBottom: Layouts.PAD_VERT,
    minHeight: Mixins.scaleSize(35),
  },
  title: {
    marginLeft: Mixins.scaleSize(10),
    maxWidth: '80%',
  },
  leftItems: { flexDirection: 'row', alignItems: 'center' },
  rightItems: { flexDirection: 'row', alignItems: 'center' },
})

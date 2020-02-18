import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import Circle from './Circle'

export default CircleList = props => {
  return (
    <FlatList
      style={styles.circleList}
      data={props.data}
      renderItem={({ item, index }) => (
        <View
          style={{
            marginRight: Mixins.scaleSize(20),
            justifyContent: 'center',
          }}
        >
          <Circle
            user={item}
            navigation={props.navigation}
            size={props.size}
            isActive={index == 1 ? true : false} // for testing purpose
          />
        </View>
      )}
      keyExtractor={item => item.id}
      horizontal={true}
    />
  )
}

const styles = StyleSheet.create({
  circleList: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
  },
})

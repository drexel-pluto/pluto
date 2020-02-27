import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import Circle from './Circle'

export default CircleList = props => {
  // if (Object.keys(props.extraData).length === 0) {
  //   const recipients = { ...props.extraData }
  //   return (
  //     <FlatList
  //       style={styles.circleList}
  //       data={props.data}
  //       renderItem={item => {
  //         console.log(item)
  //         if (recipients[item.item.friend._id]) {
  //           console.log(recipients[item.item.friend._id])
  //           return <Circle user={item.item.friend} />
  //         } else {
  //           return null
  //         }
  //       }}
  //       keyExtractor={item => item.id}
  //       horizontal={true}
  //       showsHorizontalScrollIndicator={false}
  //     />
  //   )
  // } else {
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
      showsHorizontalScrollIndicator={false}
    />
  )
  // }
}

CircleList.defaultProps = {
  extraData: {},
  data: [],
}

const styles = StyleSheet.create({
  circleList: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
  },
})

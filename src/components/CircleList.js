import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import Circle from './Circle'

export default CircleList = props => {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => (
        <View style={{ marginRight: Mixins.scaleSize(10) }}>
          <Circle user={item} navigation={props.navigation} size={props.size} />
        </View>
      )}
      keyExtractor={item => item.id}
      horizontal={true}
    />
  )
}

const styles = StyleSheet.create({})

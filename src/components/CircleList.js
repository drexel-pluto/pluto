import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import Circle from './Circle'

export default CircleList = props => {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => (
        <Circle
          user={item.user_data}
          navigation={props.navigation}
          size={props.size}
        />
      )}
      keyExtractor={item => item.id}
      horizontal={true}
    />
  )
}

const styles = StyleSheet.create({})

import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import {
  Colors,
  Typography,
  Layouts,
  Mixins,
  Styles,
} from './../../styles/index'
import Comment from '../../assets/images/iconComment.svg'
import { LinearGradient } from 'expo-linear-gradient'

export default CommentButton = props => {
  const { _onPress, comments, isSmall } = props
  return (
    <TouchableOpacity
      onPress={() => {
        _onPress()
      }}
    >
      <View style={isSmall ? { transform: [{ scale: 0.9 }] } : null}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Comment />
            <LinearGradient
              colors={Colors.gradient.light(Colors.CARBONE)}
              style={[
                {
                  borderRadius: Mixins.scaleSize(8),
                  zIndex: -1,
                  position: 'absolute',
                  width: Mixins.scaleSize(15),
                  height: Mixins.scaleSize(15),
                  right: Mixins.scaleSize(-4),
                  top: Mixins.scaleSize(-2),
                },
              ]}
            ></LinearGradient>
          </View>
          <Text style={{ paddingLeft: Mixins.scaleSize(10) }}>{comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})

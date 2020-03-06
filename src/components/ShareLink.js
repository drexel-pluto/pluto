import React from 'react'
import { View, Text, TouchableHightlight, StyleSheet, Share } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import Button from './Button'

class ShareLink extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[styles.sharelinkContent]}>
        <Text 
          style={[styles.link, Typography.F_CAPTION]}
          numberOfLines={1}
        >{this.props.url}</Text>
        <Button 
          text={'share link'}
          _onPress={() => {Share.share({
              url: this.props.url
            })}}
          isBold={false}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sharelinkContent: {
    height:  Mixins.scaleSize(100),
    flexDirection: 'row',
    width: Mixins.scaleSize(375),
    justifyContent: 'space-around',
    paddingHorizontal: Layouts.PAD_HORZ,
    alignItems: 'center',
  },
  link: {
    paddingHorizontal: Layouts.PAD_HORZ,
    overflow: "hidden",
    width: 200
  },
})

export default ShareLink

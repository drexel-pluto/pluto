import React from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CircleContainer from '../components/CircleContainer'
import GroupPanel from './../components/GroupPanel'

class Home extends React.Component {
  render() {
    return (
      <View style={[styles.homeScreen, Layouts.FLEX_CONTAINER]}>
        <ScreenHeader />
        <CircleContainer />
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('GroupFeed')}
        >
          <GroupPanel />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeScreen: {
    justifyContent: 'space-between',
  },
})

export default Home

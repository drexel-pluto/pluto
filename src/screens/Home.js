import React from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CircleContainer from '../components/CircleContainer'
import GroupPanel from './../components/GroupPanel'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[styles.homeScreen, Layouts.FLEX_CONTAINER]}>
        <ScreenHeader />
        <CircleContainer />
        <TouchableHighlight
          onPress={() => {
            this.props.openGroup(this.props.groups[0]._id)
          }}
        >
          <GroupPanel />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate('AddPost')
          }}
        >
          <View style={styles.createButton} />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeScreen: {
    justifyContent: 'space-between',
  },
  createButton: {
    backgroundColor: '#888888',
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 100,
    right: 20,
    borderRadius: 80,
  },
})

export default Home

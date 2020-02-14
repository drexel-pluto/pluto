import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
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
            this.props.navigation.navigate('AddPost')
          }}
        >
          <Text style={styles.createButton}>Create Post</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            this.props.openGroup(this.props.groups[0]._id)
          }}
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
  createButton: {
    backgroundColor: '#888888',
    height: 50,
  },
})

export default Home

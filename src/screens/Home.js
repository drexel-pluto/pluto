import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import CircleContainer from '../components/CircleContainer'
import GroupPanel from './../components/GroupPanel'
import IconButton from './../components/IconButton/IconButton'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const rightHeaderItems = [
      <IconButton type="search" />,
      <IconButton type="noti" />,
      <IconButton type="profile" />,
    ]

    return (
      <View style={[styles.homeScreen, Layouts.FLEX_CONTAINER]}>
        <ScreenHeader rightItems={rightHeaderItems} />
        <CircleContainer />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('AddPost')
          }}
        >
          <Text style={styles.createButton}>Create Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.openGroup(this.props.groups[0]._id)
          }}
        >
          <GroupPanel />
        </TouchableOpacity>
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

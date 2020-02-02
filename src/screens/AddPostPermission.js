import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import DecaySlider from '../components/DecaySlider'
import SelectGroupList from '../components/SelectGroupList'

class AddPostPermission extends React.Component {
  render() {
    return (
      <ScrollView style={Layouts.FLEX_CONTAINER}>
        <ScreenHeader />
        <SelectGroupList />
        <DecaySlider />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})

export default AddPostPermission

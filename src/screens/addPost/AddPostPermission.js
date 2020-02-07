import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../../styles/index'
import DecaySlider from '../../components/DecaySlider'
import SelectGroupList from '../../components/SelectGroupList'

class AddPostPermission extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView style={Layouts.FLEX_CONTAINER}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={{ padding: 10, fontSize: 30 }}>Back</Text>
        </TouchableOpacity>
        <SelectGroupList />
        <DecaySlider />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})

export default AddPostPermission

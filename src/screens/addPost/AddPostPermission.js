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
import ScreenHeader from '../../components/ScreenHeader'

class AddPostPermission extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView style={Layouts.FLEX_CONTAINER}>
        <ScreenHeader
          title={'Permission'}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
        />
        <SelectGroupList
          groups={this.props.groups}
          recipients={this.props.recipients}
          setRecipient={this.props.setRecipient}
        />
        <DecaySlider />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})

export default AddPostPermission

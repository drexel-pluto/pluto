import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import DecaySlider from '../../components/DecaySlider'
import SelectGroupList from '../../components/SelectGroupList'
import ScreenHeader from '../../components/ScreenHeader'
import IconButton from './../../components/iconButton/IconButton'

class AddPostPermission extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView stickyHeaderIndices={[0]} style={Layouts.FLEX_CONTAINER}>
        <ScreenHeader
          isFixed={true}
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

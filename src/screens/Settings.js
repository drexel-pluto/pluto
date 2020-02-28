import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'

class Settings extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={[Layouts.FLEX_CONTAINER]}>
        <ScreenHeader
          isFixed={true}
          headerColor={Colors.PEARL}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
        />
        <Button title="Logout" color="red" onPress={this.props.logout}/>
      </View>
    )
  }
}


export default Settings

import React from 'react'
import { View, Text,StyleSheet, Button } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import DecaySlider from '../components/DecaySlider'
// import Button from '../components/Button'


class Settings extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={Layouts.FLEX_CONTAINER}>
        <ScreenHeader
          isFixed={true}
          headerColor={Colors.PEARL}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
        />
        <View style={styles.settings}>
          <Text style={[Typography.F_H1, styles.header]}>settings</Text>
          <View style={{paddingVertical: Layouts.PAD_VERT}}>
            <View style={styles.accountContainer}>
              <Text style={[Typography.F_H3, styles.header]}>account credentials</Text>
              <View style={[styles.accountInfo]}>
                <View style={{paddingVertical: Layouts.PAD_VERT}}>
                  <Text style={[Typography.F_BODY,{paddingVertical: Layouts.PAD_VERT}]}>username</Text>
                  <Text style={[Typography.F_BODY,{paddingVertical: Layouts.PAD_VERT}]}>e-mail</Text>
                  <Text style={[Typography.F_BODY,{paddingVertical: Layouts.PAD_VERT}]}>password</Text>
                </View>
                <View style={{paddingVertical: Layouts.PAD_VERT}}>
                  <Text style={[Typography.F_BODY,{paddingVertical: Layouts.PAD_VERT}]}>happycat</Text>
                  <Text style={[Typography.F_BODY,{paddingVertical: Layouts.PAD_VERT}]}>happycat03@yahoo.com</Text>
                  <Text style={[Typography.F_BODY,{paddingVertical: Layouts.PAD_VERT}]}>**********</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{paddingVertical: Layouts.PAD_VERT}}>
            <View style={styles.postDecay}>
              <Text style={[Typography.F_H3, styles.header]}>post decay time</Text>
              <DecaySlider />
            </View>
          </View>
          {/* <Button text="contact support"/> */}
          <Button title="Logout" color="red" onPress={this.props.logout}/>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  settings: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
    justifyContent: 'space-around',
  },
  header: {
    textAlign: 'center',
  },
  accountContainer: {
    // backgroundColor: 'red',
    paddingVertical: Layouts.PAD_VERT,
    borderRadius: Mixins.scaleSize(25),
    borderWidth: 2,
    borderColor: Colors.VIOLET.dark,
  },
  accountInfo: {
    paddingLeft: Layouts.PAD_HORZ,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  postDecay: {
    paddingVertical: Layouts.PAD_VERT,
    borderRadius: Mixins.scaleSize(25),
    borderWidth: 2,
    borderColor: Colors.CARBONE.dark,
  }
  

})

export default Settings

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import ScreenHeader from '../components/ScreenHeader'
import DecaySlider from '../components/DecaySlider'
import Button from '../components/Button'

class Settings extends React.Component {
  constructor(props) {
    super(props)

    this.user = this.props.route.params?.user ?? {}
  }
  render() {
    return (
      <View style={Layouts.FLEX_CONTAINER}>
        <ScreenHeader
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
        />
        <View style={styles.settings}>
          <Text style={[Typography.F_H1, styles.header]}>settings</Text>
          <View style={{ paddingVertical: Layouts.PAD_VERT }}>
            <View style={styles.accountContainer}>
              <Text style={[Typography.F_H3, styles.header]}>
                account credentials
              </Text>
              <View style={[styles.accountInfo]}>
                <View style={{ paddingVertical: Layouts.PAD_VERT }}>
                  <Text
                    style={[
                      Typography.F_BODY,
                      { paddingVertical: Layouts.PAD_VERT },
                    ]}
                  >
                    username
                  </Text>
                  <Text
                    style={[
                      Typography.F_BODY,
                      { paddingVertical: Layouts.PAD_VERT },
                    ]}
                  >
                    e-mail
                  </Text>
                  <Text
                    style={[
                      Typography.F_BODY,
                      { paddingVertical: Layouts.PAD_VERT },
                    ]}
                  >
                    password
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: Layouts.PAD_VERT,
                    paddingLeft: Mixins.scaleSize(45),
                    flex: 1,
                  }}
                >
                  <Text
                    style={[
                      Typography.F_BODY,
                      { paddingVertical: Layouts.PAD_VERT },
                    ]}
                  >
                    {this.user.username}
                  </Text>
                  <Text
                    style={[
                      Typography.F_BODY,
                      { paddingVertical: Layouts.PAD_VERT },
                      this.user.email
                        ? null
                        : { opacity: 0.6, fontStyle: 'italic' },
                    ]}
                  >
                    {this.user.email ? this.user.email : 'add email'}
                  </Text>
                  <Text
                    style={[
                      Typography.F_BODY,
                      { paddingVertical: Layouts.PAD_VERT },
                    ]}
                  >
                    **********
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ paddingVertical: Layouts.PAD_VERT }}>
            <View style={styles.postDecay}>
              <Text style={[Typography.F_H3, styles.header]}>
                post decay time
              </Text>
              <DecaySlider />
            </View>
          </View>
          {/* <Button text="contact support"/> */}
          <View
            style={{
              paddingVertical: Layouts.PAD_VERT,
              alignItems: 'center',
            }}
          >
            <Button
              text="logout"
              color={Colors.MELON}
              _onPress={this.props.logout}
            />
          </View>
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
    paddingHorizontal: Layouts.PAD_HORZ,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postDecay: {
    paddingVertical: Layouts.PAD_VERT,
    borderRadius: Mixins.scaleSize(25),
    borderWidth: 2,
    borderColor: Colors.CARBONE.dark,
  },
})

export default Settings

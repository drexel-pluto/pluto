import React from 'react'
import { View, StyleSheet, Text, TextInput, Image } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles/index'
import { LinearGradient } from 'expo-linear-gradient'
import Button from '../../components/Button'

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
  }

  login = (username, password) => {
    this.props
      .login(username, password)
      .then(action => {
        this.props.navigation.navigate('App')
      })
      .catch(response => {})
  }

  render() {
    return ( 
    
    <LinearGradient
        colors={Colors.gradient.light(Colors.VIOLET)} style={{flex:1}}>
      <View style={[styles.screenContainer]}>
        <Text style={[Typography.F_H1,{color: Colors.CREAM, paddingBottom: Layouts.PAD_VERT}] }>login</Text>
        <View style={{paddingBottom: Layouts.PAD_VERT}}>
          <View style={{paddingBottom: Layouts.PAD_VERT}}>        
            <TextInput
              style={[styles.input, Typography.F_BODY]}
              placeholder="username/email/phone"
              placeholderTextColor={Colors.CREAM}
              onChangeText={username => this.setState({ username })}
              autoCompleteType="username"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="username"
            />
          </View>
          <View style={{paddingBottom: Layouts.PAD_VERT}}>        
            <TextInput
              style={[styles.input, Typography.F_BODY]}
              placeholder="password"
              placeholderTextColor={Colors.CREAM}
              onChangeText={password => this.setState({ password })}
              autoCompleteType="password"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={{paddingBottom: Layouts.PAD_VERT}}>
          {this.props.error.length >-0 && (
            <View style={styles.error}>
              <Text style={{color: Colors.MELON.dark}}>{this.props.error}</Text>
            </View>
          )}
        </View>
        <View style={{paddingBottom: Layouts.PAD_VERT}}>
        <Button
          _onPress={() =>
            this.props.login(this.state.username, this.state.password)
          }
          text="login"
        />
        </View>
        <Button
          _onPress={() => this.props.setIsCreate(true)}
          text="create account"
          type="outline"
        />
      </View>
      </LinearGradient>
    )
  }
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, 
    alignItems: 'center', 
    paddingVertical: 90,
    // backgroundColor: Colors.VIOLET.dark,
  },
  input: {
    height: 40,
    paddingVertical: Layouts.PAD_VERT,
    paddingHorizontal: Layouts.PAD_HORZ,
    width: Mixins.scaleSize(220),
    borderRadius: Mixins.scaleSize(60),
    borderWidth: Mixins.scaleSize(1),
    borderColor: Colors.CREAM,   
  },
  error: {
    paddingVertical: Layouts.PAD_VERT,
    color: Colors.MELON.dark,
  },
})
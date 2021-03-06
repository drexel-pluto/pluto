import React from 'react'
import { Modal, View} from 'react-native'
import { connect } from 'react-redux'
import LoginScreen from '../screens/auth/Login'
import CreateScreen from '../screens/auth/CreateProfile'
import {
  login,
  createProfile,
  setIsCreate,
  saveUserToken,
  getMe,
  initLinkListener,
  setPushToken,
} from '../redux/reducers/user.reducer'
import { newToast } from '../redux/reducers/toast.reducer'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';


class AuthContainer extends React.Component {
  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.navigation.navigate('App')
    }
  }

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      return token;
    }
  };

  login(username, password) {
    this.props.login({ username, password })
    .then(
      action => {
        if (action.type.endsWith('SUCCESS')) {
          return this.props.getMe()
        } else {
          console.log("calling new toast")
          this.props.newToast({content: "invalid username or password"});
        }
      }
    )
    .then(action => {
      if (action.type.endsWith('SUCCESS')) {
        this.registerForPushNotificationsAsync().then(
          (token) => this.props.setPushToken(token)
        );
        this.props.navigation.navigate('App')
        this.props.initLinkListener()
        this.props.saveUserToken(this.props.token)
      }
    })
  }

  create(userData, profilePic) {
    this.props.createProfile(userData, profilePic).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        this.login(userData.username, userData.password)
      } else {
        this.props.newToast({content: action.error.response?.data?.errMessage ?? "error creating profile"})
      }
    })
  }

  render() {
    return (
    <View style={{flex: 1, zIndex: 0}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.isCreate}
        style={{ zIndex: 2 }}
      >
        <CreateScreen
          create={(userData, profilePic) => this.create(userData, profilePic)}
          error={this.props.error}
          setIsCreate={bool => this.props.setIsCreate(bool)}
          loading={this.props.loading}
        />
      </Modal>
      <LoginScreen
        login={(username, password) => this.login(username, password)}
        error={this.props.error}
        setIsCreate={bool => this.props.setIsCreate(bool)}
        isCreate={this.props.isCreate}
        loading={this.props.loading}
      />
    </View>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  error: state.user.error,
  isCreate: state.user.isCreate,
  token: state.user.authToken,
  loading: state.user.loading
})

const mapDispatchToProps = {
  login,
  createProfile,
  setIsCreate,
  saveUserToken,
  getMe,
  initLinkListener,
  setPushToken,
  newToast
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)

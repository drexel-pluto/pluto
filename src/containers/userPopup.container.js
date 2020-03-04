import React from 'react'
import { Modal, View, Text } from 'react-native'
import { connect } from 'react-redux'
import Profile from '../screens/Profile.js'
import { fetchUser } from '../redux/reducers/profile.reducer'

class UserPopupContainer extends React.Component {
  render() {
    return (
      <View>
        <View style={{width:100, height: 100}}>
            <Text>test</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPopupContainer)

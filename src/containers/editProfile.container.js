import React from 'react'
import { connect } from 'react-redux'
import EditProfle from '../screens/EditProfile'
import { updateProfile } from '../redux/reducers/profile.reducer'

class EditProfileContainer extends React.Component {
  submit(newData) {
    console.log(newData)
  }

  render() {
    return (
      <EditProfle
        navigation={this.props.navigation}
        route={this.props.route}
        submit={dat =>
          this.props.updateProfile(dat).then(() => {
            return this.props.navigation.goBack()
          })
        }
      />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  updateProfile,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileContainer)

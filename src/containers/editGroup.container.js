import React from 'react'
import { connect } from 'react-redux'
import EditGroup from '../screens/EditGroup'

class EditGroupContainer extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <EditGroup
        navigation={this.props.navigation}
        route={this.props.route}
        friends={this.props.friends}
      />
    )
  }
}

const mapStateToProps = state => ({
  friends: state.user.friends,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupContainer)

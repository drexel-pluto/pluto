import React from 'react'
import { connect } from 'react-redux'
import Post from '../screens/Post'

class PostContainer extends React.Component {
  render() {
    return <Post navigation={this.props.navigation} data={this.props.post} />
  }
}

const mapStateToProps = state => ({
  post: state.post,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)

import React from 'react'
import { connect } from 'react-redux'
import Post from '../screens/Post'
import { sendComment } from '../redux/reducers/post.reducer'

class PostContainer extends React.Component {
  render() {
    return <Post 
            navigation={this.props.navigation} 
            route={this.props.route} 
            data={this.props.post} 
            sendComment={this.props.sendComment}
            loading={this.props.loading}
          />
  }
}

const mapStateToProps = state => ({
  post: state.post,
  loading: state.post.loading
})

const mapDispatchToProps = {
  sendComment
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)

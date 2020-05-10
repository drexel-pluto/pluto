import React from 'react'
import { connect } from 'react-redux'
import TagFeed from '../screens/TagFeed.js'
import { fetchPostsForTag } from '../redux/reducers/tagFeed.reducer'
import { openPost } from '../redux/reducers/post.reducer'

class SettingsContainer extends React.Component {
  componentWillMount() {
    const { params } = this.props.route
    const tag = params ? params.tag : null

    if (tag) {
      this.props.fetchPostsForTag(tag);
    }
  }

  _openPost(post_id, poster) {
    this.props.openPost(post_id, poster)
    this.props.navigation.navigate('Post')
  }

  render() {
    return (
      <TagFeed
        navigation={this.props.navigation}
        route={this.props.route}
        openPost={(id, poster) => this._openPost(id, poster)}
        loading={this.props.loading}
        posts={this.props.posts}
        tag={this.props.tag}
      />
    )
  }
}

const mapStateToProps = state => ({
  loading: state.tagFeed.loading,
  posts: state.tagFeed.posts,
  tag: state.tagFeed.tag,
})

const mapDispatchToProps = {
  fetchPostsForTag,
  openPost
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)

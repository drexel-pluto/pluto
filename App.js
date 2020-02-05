import React from 'react'
import { registerRootComponent } from 'expo'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Navigation from './src/navigators/RootNavigator'

import EditGroup from './src/screens/EditGroup'
import AddPostPermission from './src/screens/AddPostPermission'
import Post from './src/screens/Post'
import Search from './src/screens/Search'
import GroupFeed from './src/screens/GroupFeed'
import AddPost from './src/screens/AddPost'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>

      // Testing screens
      // <AddPostPermission />
      // <GroupFeed />
      // <Post />
      // <Search />
      // <EditGroup />
      // <AddPost />
    )
  }
}

export default App

registerRootComponent(App)

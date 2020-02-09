import React from 'react'
import { registerRootComponent } from 'expo'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Navigation from './src/navigators/RootNavigator'
import AddPost from './src/screens/addPost/AddPostContent'

class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
      //   <Navigation style={{ flex: 1 }} />
      // </Provider>

      <AddPost />
    )
  }
}

export default App

registerRootComponent(App)

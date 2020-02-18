import React from 'react'
import { registerRootComponent } from 'expo'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Navigation from './src/navigators/RootNavigator'
import PlutoStatusBar from './src/components/PlutoStatusBar'

class App extends React.Component {
  render() {
    return (
      <>
        <PlutoStatusBar />
        <Provider store={store}>
          <Navigation style={{ flex: 1 }} />
        </Provider>
      </>
    )
  }
}

export default App

registerRootComponent(App)

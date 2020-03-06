import React from 'react'
import { registerRootComponent } from 'expo'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import PlutoStatusBar from './src/components/PlutoStatusBar'
import { NavigationContainer } from '@react-navigation/native';
import RootStack, { navigationRef } from './src/navigation'
import { Colors } from './src/styles/index'

class App extends React.Component {
  render() {
    console.disableYellowBox = true
    return (
      <>
        <PlutoStatusBar />
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <RootStack />
          </NavigationContainer>
        </Provider>
      </>
    )
  }
}

export default App

registerRootComponent(App)

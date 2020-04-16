import React from 'react'
import { registerRootComponent } from 'expo'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import PlutoStatusBar from './src/components/PlutoStatusBar'
import { NavigationContainer } from '@react-navigation/native';
import RootStack, { navigationRef } from './src/navigation'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { Colors } from './src/styles/index'
import * as Font from 'expo-font'

class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'europa-regular': require('./src/assets/fonts/europa-regular-webfont.ttf'),
      'europa-light': require('./src/assets/fonts/europa-light-webfont.ttf'),
      'europa-bold': require('./src/assets/fonts/europa-bold-webfont.ttf'),
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    console.disableYellowBox = true
    return (
      <>
        <PlutoStatusBar />
        {this.state.fontLoaded ? (
          <Provider store={store}>
            <ActionSheetProvider>
              <NavigationContainer ref={navigationRef}>
                <RootStack />
              </NavigationContainer>
            </ActionSheetProvider>
          </Provider>
        ) : null}
      </>
    )
  }
}

export default App

registerRootComponent(App)

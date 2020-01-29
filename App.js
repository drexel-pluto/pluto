import React from "react";
import { registerRootComponent } from "expo";
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Navigation from './src/navigators/RootNavigator'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;

registerRootComponent(App);

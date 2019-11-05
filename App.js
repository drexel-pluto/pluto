import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { registerRootComponent } from 'expo';

import Physics from "./physics";

class App extends React.Component {
  render() {

    return (
          <Physics />
    );
  };
}

export default App;

registerRootComponent(App);
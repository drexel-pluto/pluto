import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { registerRootComponent } from 'expo';

//import Physics from "./physics";
import SvgSwipe from './SvgSwipe';

class App extends React.Component {
  render() {
    return (
          //<Physics />
          <SvgSwipe />
    );
  };
}

export default App;

registerRootComponent(App);
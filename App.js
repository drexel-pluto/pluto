import React from 'react';
import { registerRootComponent } from 'expo';

import Physics from "./physics/index";

class App extends React.Component {
  render() {
    return (
      <Physics />
    );
  };
}

export default App;

registerRootComponent(App);
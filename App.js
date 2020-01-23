import React from 'react';
import { View } from "react-native";
import { registerRootComponent } from 'expo';

class App extends React.Component {

  render() {
    return (
      <View>

      </View>
    );
  };
}

export default App;

registerRootComponent(App);
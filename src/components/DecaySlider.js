import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

export default DecaySlider = props => {
  return (
    <View style={styles.decaySlider}>
      <Text>Decay Slider</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  decaySlider: {
    height: 100,
    backgroundColor: Colors.GRAY_LIGHT
  }
});

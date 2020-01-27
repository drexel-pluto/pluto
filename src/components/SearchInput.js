import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography, Layouts, Mixins } from "../styles/index";

class SearchInput extends React.Component {
  render() {
    return (
      <View style={styles.searchInput}>
        <Text>Search Input</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchInput: {
    height: 70,
    backgroundColor: Colors.GRAY_LIGHT
  }
});

export default SearchInput;

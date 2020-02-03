import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import SnapSlider from 'react-native-snap-slider'

class DecaySlider extends React.Component {
  state = {
    defaultOption: 0,
    selectedOption: 0,
  }

  sliderOptions = [
    { value: 0, label: 'archived' },
    { value: 1, label: '30 days' },
    { value: 2, label: '60 days' },
    { value: 3, label: '90 days' },
  ]

  slidingComplete() {
    this.setState({ selectedOption: this.refs.slider.state.item })
  }

  render() {
    return (
      <View style={styles.decaySlider}>
        <Text style={Typography.F_H1}>Decay Slider</Text>
        <SnapSlider
          ref="slider"
          // containerStyle={styles.snapsliderContainer}
          // style={styles.snapslider}
          // itemWrapperStyle={styles.snapsliderItemWrapper}
          // itemStyle={styles.snapsliderItem}
          items={this.sliderOptions}
          labelPosition="bottom"
          defaultItem={this.state.defaultOption}
          onSlidingComplete={() => {
            this.slidingComplete()
          }}
        />
        <Text>testing slider value: {this.state.selectedOption}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  decaySlider: {
    height: 100,
    backgroundColor: Colors.GRAY_LIGHT,
  },
})

export default DecaySlider

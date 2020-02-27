import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import SnapSlider from 'react-native-snap-slider'

class DecaySlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultOption: 0,
      selectedOption: 0,
    }
  }

  sliderOptions = [
    { value: 0, label: 'infinite' },
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: Mixins.scaleSize(10),
          }}
        >
          <Text style={Typography.F_H2}>decay control:</Text>
          <Text
            style={[
              Typography.F_H2,
              {
                fontWeight: '600',
                marginLeft: Mixins.scaleSize(10),
                color: Colors.CARBONE.dark,
              },
            ]}
          >
            {this.sliderOptions.map(option => {
              if (option.value === this.state.selectedOption) {
                return option.label
              }
            })}
          </Text>
        </View>
        <SnapSlider
          ref="slider"
          thumbTintColor={Colors.CARBONE.dark}
          minimumTrackTintColor={Colors.CARBONE.med}
          style={{ paddingVertical: 20 }}
          // containerStyle={{ height: 100 }}
          itemWrapperStyle={{ paddingTop: Mixins.scaleSize(10) }}
          // itemStyle={{}}
          items={this.sliderOptions}
          labelPosition="bottom"
          defaultItem={this.state.defaultOption}
          onSlidingComplete={() => {
            this.slidingComplete()
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  decaySlider: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
  },
})

export default DecaySlider

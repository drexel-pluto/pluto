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
    { value: 0, label: '30 days' },
    { value: 1, label: '180 days' },
    { value: 2, label: 'infinite' },
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
              Typography.F_BOLD,
              {
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
        <Text style={{ paddingTop: 20, fontSize: 12 }}>
          * this will not take effect for the current build
        </Text>
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

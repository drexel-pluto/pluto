import React, { Component } from "react";
import { 
  View, 
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Animated
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'

class Toast extends Component {
  state = {
    slideAnim: new Animated.Value(-200)
  };

  slideIn() {
    Animated.spring(this.state.slideAnim, {
      toValue: 0,
      friction: 6,
      tension: 80
    }).start();
  }

  slideOut() {
    Animated.spring(this.state.slideAnim, {
      toValue: - 200
    }).start();
  }

  componentWillMount() {
    this.slideIn();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hide !== this.props.hide && nextProps.hide == true) {
      this.slideOut();
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <Animated.View style={[styles.toast, Styles.shadow, {
          top: this.state.slideAnim
        }]}>
          <Text style={[Typography.F_BODY, styles.content]}>{this.props.content}</Text>
          <Button onPress={this.props.onDismissClick} style={Typography.F_BODY} title="x"/>
        </Animated.View>
      </SafeAreaView>
    );
  }

  shouldComponentUpdate() {
    return false;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: Layouts.PAD_HORZ_SM,
    position: "absolute",
    left: 0,
    right: 0
  },
  toast: {
    backgroundColor: Colors.UI_BG,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    padding: Layouts.PAD_HORZ_SM
  },
  content: {
    flex: 1,
    marginRight: Layouts.PAD_HORZ
  }
})


export default Toast;
import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native'
import { Colors, Typography, Layouts, Mixins } from '../styles/index'
import IconButton from './iconButton/IconButton'


const screenWidth = Dimensions.get('window').width;

class HeadingWrapper extends Component  {
  state = {
    targets: {
      l: {
        x: 0,
        w: 0
      },
      r: {
        x: 0,
        w: 0
      }
    }
  }

  constructor(props) {
    super(props);
    this.reqs = React.createRef();
    this.sent = React.createRef();
  }

  setPosVars ({nativeEvent}, left = false) {
    this.setState((state) => ({
      targets: {
        ...state.targets,
        [left ? "l" : "r"]: {
          x: nativeEvent.layout.x,
          w: nativeEvent.layout.width - (left ? 20 : 0)
        }
      }
    }));
  }
  
  render() {
    return (
      <View style={styles.headingWrapper}>
        <TouchableOpacity 
          onLayout={(e) => {this.setPosVars(e, true)}} 
          onPress={() => this.props.onPress(true)}>
          <Text style={[Typography.F_H3, Typography.F_BOLD, {
            marginRight: 20,
            marginBottom: 4
          }]}>
            friend requests
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onLayout={(e) => {this.setPosVars(e)}}
          onPress={() => this.props.onPress(false)}>
          <Text style={[Typography.F_H3, Typography.F_BOLD]}>
            sent requests
          </Text>
        </TouchableOpacity>
        <Animated.View style={[styles.underline, {
          left: this.props.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [this.state.targets.l.x, this.state.targets.r.x]
          }),
          width: this.props.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [this.state.targets.l.w, this.state.targets.r.w]
          }),
        }]}/>
      </View>
    )
  }
}


const RequestList = (props) => {
  return (
    <ScrollView style={props.style} contentContainerStyle={styles.invitationCenter}>
      { props.requests.length > 0
      ? props.requests.map((request, index) => (
        <View style={styles.requestContainer} key={index}>
          <View style={styles.requestContent}>
            <Text style={[styles.requestText, Typography.F_BODY]}>
              {props.cancel ? request.to.username : request.from.name}
            </Text>
            {props.cancel  
              ? <IconButton
                  type=" cancel"
                  _onPress={() => props.cancel(request.to.username)}
                />
              : <>
                  <IconButton
                    type="accept"
                    _onPress={() => props.accept(request.from.username)}
                  />
                  <IconButton
                    type="reject"
                    _onPress={() => props.reject(request.from.username)}
                  />
                </>
              }
            </View>
          </View>
        )) 
      : <Text 
          style={[
            Typography.F_H3,
            Typography.F_REGULAR,
            {
              textAlign: 'center',
              opacity: 0.5,
              paddingVertical: Layouts.PAD_VERT,
            },
          ]}>No pending requests</Text> }
    </ScrollView>
  )
}

class InvitationCenter extends Component {
  state = {
    swipeDist: new Animated.Value(0)
  }

  onScroll ({nativeEvent}) {
    this.state.swipeDist.setValue(nativeEvent.contentOffset.x / screenWidth);
  }

  headerPress (isLeft) {
    if (isLeft) {
      this.scrollView.scrollTo({animated: true, x:0});
    } else {
      this.scrollView.scrollTo({animated: true, x: screenWidth});
    }
  }

  render() {
    return (
      <View>
        <HeadingWrapper progress={this.state.swipeDist} onPress={(isLeft) => this.headerPress(isLeft)}/>
        <ScrollView 
          onScroll={(e) => {this.onScroll(e)}}
          ref={(view) => {
            this.scrollView = view;
          }}
          scrollEventThrottle={16}
          horizontal={true} 
          snapToInterval={screenWidth} 
          decelerationRate={0}
          snapToAlignment={"center"}
          showsHorizontalScrollIndicator={false}
          style={{height: "100%"}}>
          <RequestList 
            accept={this.props.accept} 
            reject={this.props.reject} 
            requests={this.props.requests}
            style={{ width: screenWidth}}/>
          <RequestList 
            cancel={this.props.cancel}
            requests={this.props.sent}
            style={{ width: screenWidth}}/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  invitationHeading: {
    paddingVertical: Layouts.PAD_VERT,
    textAlign: 'center',
  },
  invitationCenter: {
    alignItems: 'center',
    paddingBottom: Layouts.PAD_VERT * 2,
  },
  requestContainer: {
    paddingBottom: Layouts.PAD_VERT,
  },
  requestContent: {
    flexDirection: 'row',
    width: Mixins.scaleSize(320),
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: Mixins.scaleSize(60),
    borderWidth: Mixins.scaleSize(1),
    borderColor: Colors.VIOLET.dark,
    paddingHorizontal: Layouts.PAD_HORZ,
  },
  requestText: {
    paddingVertical: Layouts.PAD_VERT,
    flex: 1,
  },
  headingWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: Layouts.PAD_VERT * 2,
    marginTop: Layouts.PAD_VERT,
  },
  underline: {
    backgroundColor: Colors.VIOLET.dark,
    height: 4,
    position: "absolute",
    bottom: 0,
    borderRadius: 2,
  }
})

export default InvitationCenter

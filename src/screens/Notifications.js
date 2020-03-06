import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import { LinearGradient } from 'expo-linear-gradient'
import IconButton from '../components/iconButton/IconButton'



class Notifications extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <View style={[Layouts.FLEX_CONTAINER]}>
            <LinearGradient
            colors={Colors.UI_BG_GRADIENT}
            style={{flex: 1}}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.5]}
            >
            <View style={styles.heading}>
                <Text style={Typography.F_H1}>notifications</Text>
                <IconButton type="x"/>
            </View>
          
          </LinearGradient>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        paddingTop: 80
    },
  })
  
  
  export default Notifications
import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import { LinearGradient } from 'expo-linear-gradient'
import IconButton from '../components/iconButton/IconButton'
import AuthorHeader from '../components/AuthorHeader'


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
            <View style={styles.screenContainer}>
                <View style={styles.heading}>
                    <Text style={Typography.F_H1}>notifications</Text>
                    <IconButton type="cancel"/>
                </View>
                <View style={{paddingBottom: Layouts.PAD_VERT}}>
                    <View style={styles.notificationContainer}>
                        <Image
                            style={[styles.image]}
                            source={{
                                uri: 'https://picsum.photos/id/237/300/300',
                            }}
                            />
                        <View>
                            <Text style={[Typography.F_BODY, {maxWidth: Mixins.scaleSize(230)}]}>Friendly Person liked your post</Text>
                            <Text style={Typography.F_CAPTION}>2 hrs ago</Text>
                        </View>
                    </View>
                </View>
               

            </View>
          </LinearGradient>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    screenContainer: {
        paddingHorizontal: Layouts.PAD_HORZ,
    },
    heading: {
        flexDirection: 'row',
        paddingTop: Mixins.scaleSize(60),
        paddingHorizontal: Layouts.PAD_HORZ,
        justifyContent: 'space-between',
    },
    notificationContainer: {
        backgroundColor: Colors.CREAM,
        paddingHorizontal: Layouts.PAD_HORZ,
        paddingVertical: Layouts.PAD_VERT,
        borderRadius: Mixins.scaleSize(60),
        borderWidth: Mixins.scaleSize(1),
        borderColor: Colors.MELON.dark,
        flexDirection: 'row',
    }, 
    image: {
        width: Mixins.scaleSize(45),
        height: Mixins.scaleSize(45),
        borderRadius: Mixins.scaleSize(45) / 2,
        marginRight: Mixins.scaleSize(15),
      },
  })
  
  
  export default Notifications
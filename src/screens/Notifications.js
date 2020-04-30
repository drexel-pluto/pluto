import React from 'react'
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import { LinearGradient } from 'expo-linear-gradient'
import IconButton from '../components/iconButton/IconButton'
import AuthorHeader from '../components/AuthorHeader'
import { FlatList } from 'react-native-gesture-handler'
import { calcTimeDif } from '../components/AuthorHeader'


const NotificationItem = (props) => {
  return (
    <View style={styles.notificationContainer}>
      <Image
        style={[styles.image]}
        source={{
          uri: props.data?.from?.profilePicURL ?? 'https://picsum.photos/id/237/300/300',
        }}
      />
      <View>
        <Text
          style={[
            Typography.F_BODY,
            { maxWidth: Mixins.scaleSize(230) },
          ]}
        >
          {props.data.text}
        </Text>
        <Text style={Typography.F_CAPTION}>{calcTimeDif(props.data.createdAt)}</Text>
      </View>
    </View>
  )
}

class Notifications extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <ScreenHeader
          isFixed={true}
          title={'notifications'}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
        />
        <ScrollView
          style={[Layouts.FLEX_CONTAINER]}
          contentContainerStyle={{ paddingBottom: Layouts.PAD_BOTTOM }}
        >
          <View style={styles.screenContainer}>
            {/* <Text style={[Typography.F_H1, {paddingVertical: Layouts.PAD_VERT}]}>notifications</Text> */}
            <FlatList
              data={this.props.notifications}
              renderItem={({ item, index }) => {
                return (
                  <NotificationItem
                    data={item}
                    key={item._id}
                  />
                )
              }}
            />
          </View>
        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
  },
  notificationContainer: {
    // backgroundColor: Colors.CREAM,
    paddingHorizontal: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
    borderRadius: Mixins.scaleSize(60),
    borderWidth: 1,
    marginBottom: Layouts.PAD_VERT,
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

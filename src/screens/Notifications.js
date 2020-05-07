import React from 'react'
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import { LinearGradient } from 'expo-linear-gradient'
import IconButton from '../components/iconButton/IconButton'
import AuthorHeader from '../components/AuthorHeader'
import { FlatList } from 'react-native-gesture-handler'
import { calcTimeDif } from '../components/AuthorHeader'


const NotificationItem = (props) => {
  let onTap;
  
  switch (props.data.type) {
    case "comment":

  }
  switch (props.data.type) {
    case "comment":
      onTap = () => {
        props.navigation.navigate('Post', {
          postId: props.data.postId
        });
      };
      break;
    case "recieveFriendReq":
      onTap = () => {
        props.navigation.navigate('AddFriend');
      };
      break;
    case "confirmFriendReq":
      onTap = () => {
        props.navigation.navigate('Profile', {
          userId: props.data.fromId
        });
      }
      break;
    default:
      onTap = ()=>{};
  }

  return (
    <TouchableOpacity onPress={onTap} style={styles.notificationContainer}>
      <Image
        style={styles.image}
        source={{
          uri: props.data?.from?.profilePicURL ?? 'https://picsum.photos/id/237/300/300',
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={[
            Typography.F_BODY,
            styles.notiText
          ]}
        >
          {props.data.text}
        </Text>
        <Text style={Typography.F_CAPTION}>{calcTimeDif(props.data.createdAt)}</Text>
      </View>
    </TouchableOpacity>
  )
}

class Notifications extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.screenContainer}>
        <ScreenHeader
          isFixed={true}
          title={'notifications'}
          headerColor={Colors.UI_BG}
          leftItems={
            <IconButton type="back" _onPress={this.props.navigation.goBack} />
          }
        />
        <ScrollView
          style={[Layouts.FLEX_CONTAINER]}
          contentContainerStyle={{ 
            paddingBottom: Layouts.PAD_BOTTOM,
            paddingVertical: Layouts.PAD_VERT,
          }}
        >
            <FlatList
              data={this.props.notifications}
              contentContainerStyle={{ paddingHorizontal: Layouts.PAD_HORZ}}
              renderItem={({ item, index }) => {
                return (
                  <NotificationItem
                    data={item}
                    key={item._id}
                    navigation={this.props.navigation}
                  />
                )
              }}
            />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.UI_BG,
  },
  notificationContainer: {
    backgroundColor: Colors.CREAM,
    paddingHorizontal: Layouts.PAD_VERT,
    paddingVertical: Layouts.PAD_VERT,
    borderRadius: Mixins.scaleSize(24),
    borderWidth: 1,
    borderColor: Colors.MELON.dark,
    marginBottom: Layouts.PAD_VERT * 2,
    flexDirection: 'row',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: Colors.BLACK_ROCK,
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  notiText: {
    maxWidth: "100%",
    marginBottom: 6,
    lineHeight: Mixins.scaleFont(20),
    fontSize: Mixins.scaleFont(16),
  },
  image: {
    width: Mixins.scaleSize(45),
    height: Mixins.scaleSize(45),
    borderRadius: Mixins.scaleSize(45) / 2,
    marginRight: Mixins.scaleSize(15),
  },
})

export default Notifications

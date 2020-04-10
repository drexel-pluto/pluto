import React from 'react'
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import PostTeaser from './PostTeaser'
import PostTeaserSkeleton from './skeleton/PostTeaser.skeleton'

export default RecentPostList = props => {
  return (
    <View>
      <Text
        style={[
          Typography.F_H2,
          Typography.F_BOLD,
          {
            marginBottom: Mixins.scaleSize(10),
            paddingHorizontal: Layouts.PAD_HORZ,
            paddingVertical: Layouts.PAD_VERT,
          },
        ]}
      >
        top picks
      </Text>
      {props.isLoaded === false 
        ? <View 
            style={{
              paddingHorizontal: Layouts.PAD_HORZ,
              paddingVertical: Layouts.PAD_VERT,
            }}
          >
          <PostTeaserSkeleton />
          </View>
        : <FlatList
            contentContainerStyle={{
              paddingHorizontal: Layouts.PAD_HORZ,
              paddingVertical: Layouts.PAD_VERT,
            }}
            data={props.data}
            renderItem={({ item }) => (
              <PostTeaser
                key={item._id}
                _id={item._id}
                media={item.mediaURLs}
                text={item.text}
                poster={item.poster}
                openPost={props.openPost}
              />
            )}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  recentPostList: {},
})

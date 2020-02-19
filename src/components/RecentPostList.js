import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import PostTeaser from './PostTeaser'

export default RecentPostList = props => {
  return (
    <View style={styles.recentPostList}>
      <Text
        style={[
          Typography.F_H2,
          { marginBottom: Mixins.scaleSize(10), fontWeight: '600' },
        ]}
      >
        top picks
      </Text>
      <FlatList
        style={{ paddingVertical: Mixins.scaleSize(10) }}
        data={props.data}
        renderItem={({ item }) => (
          <PostTeaser
            content={item.post}
            poster={item.poster}
            openPost={props.openPost}
          />
        )}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  recentPostList: {
    paddingLeft: Layouts.PAD_HORZ,
    paddingVertical: Layouts.PAD_VERT,
  },
})

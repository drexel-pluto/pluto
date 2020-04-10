import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles'
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";

export default PostTeaserSkeleton = props => {
  color = "green";
  return (
    <Placeholder
      Animation={Fade}
      Left={props => (
        <>
        <PlaceholderMedia height={200} width={130} 
          style={{
            marginRight: Mixins.scaleSize(15),
            paddingRight: 0,
            borderRadius: Mixins.scaleSize(15),
            width: Mixins.scaleSize(130),
            height: Mixins.scaleSize(200),
          }}
        />
        <PlaceholderMedia height={200} width={130} 
          style={{
            marginRight: Mixins.scaleSize(15),
            paddingRight: 0,
            borderRadius: Mixins.scaleSize(15),
            width: Mixins.scaleSize(130),
            height: Mixins.scaleSize(200),
          }}
        />
        <PlaceholderMedia height={200} width={130} 
          style={{
            marginRight: Mixins.scaleSize(15),
            paddingRight: 0,
            borderRadius: Mixins.scaleSize(15),
            width: Mixins.scaleSize(130),
            height: Mixins.scaleSize(200),
          }}
        />
        <PlaceholderMedia height={200} width={130} 
          style={{
            marginRight: Mixins.scaleSize(15),
            paddingRight: 0,
            borderRadius: Mixins.scaleSize(15),
            width: Mixins.scaleSize(130),
            height: Mixins.scaleSize(200),
          }}
        />
        </>
      )}
    >
    </Placeholder>
  );
};

import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../../styles'
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";

export default CommentListSkeleton = props => {
  color = "green";
  var comments = [];

  for (let i = 0; i < 3; i++) {
    comments.push(
      <View style={{marginBottom: 20}}>
        <Placeholder
          Animation={Fade}
          Left={ props => (
            <PlaceholderMedia
              isRound={true}
              width={45}
              height={45}
              style={[{
                  width: Mixins.scaleSize(45), 
                  height: Mixins.scaleSize(45), 
                  borderRadius: Mixins.scaleSize(45),
                }
                , props.style]
              }
            />
          )}
        >
          <PlaceholderLine width={50} height={16} style={{marginBottom: 10}}/>
          <PlaceholderLine width={40} height={16} />
        </Placeholder>
        <Placeholder
          Animation={Fade}
          style={{marginVertical: 8}}
        >
          <PlaceholderLine width={80} height={16} style={{marginBottom: 10}}/>
        </Placeholder>
      </View>
    )
  }

  return (
    <View
      style={{
        paddingHorizontal: Layouts.PAD_HORZ,
        paddingVertical: Layouts.PAD_VERT,
      }}
    >
      {comments}
    </View>
  );
};

import React, { useEffect } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import { Colors, Typography, Layouts, Mixins, Styles } from '../styles/index'
import AuthorHeader from './AuthorHeader'
import CommentButton from './iconButton/CommentButton'

export const FormattedComment = props => {
  return (
    <View>
      <View style={styles.header_wrapper}>
        <AuthorHeader author={props.data.poster} time={props.data.postedAt} />
      </View>
      <View style={styles.content}>
        <Text>{props.data.text}</Text>
      </View>
    </View>
  )
}

export default class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.data.replies !== prevProps.data.replies) {
  //     this.props.updateModal(this.props.data, false)
  //   }
  // }

  render() {
    return (
      <View style={styles.comment}>
        <FormattedComment data={this.props.data} />
        <View style={{ alignItems: 'flex-end' }}>
          <CommentButton
            isSmall={true}
            comments={this.props.data.replies.length}
            _onPress={() => {
              this.props.updateModal(this.props.data)
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  comment: {
    marginBottom: Mixins.scaleSize(10),
    borderWidth: 1,
    borderColor: Colors.VIOLET.med,
    borderRadius: Mixins.scaleSize(25),
    padding: Mixins.scaleSize(15),
    paddingVertical: Mixins.scaleSize(20),
  },
  header_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Mixins.scaleSize(15),
  },
})

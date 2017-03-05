import React from 'react'
import {
  View,
  Text,
} from 'react-native'

export default class ChatHistoryScreen extends React.Component {
  static navigationOptions = {
    title: ({state}) => {
      return `Chat history with ${state.params.name}`
    },
  }

  render() {
    const { params } = this.props.navigation.state

    return (
      <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
        <Text>
          We do not have a history with {params.name} yet...
        </Text>
      </View>
    )
  }
}

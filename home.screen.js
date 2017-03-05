import React from 'react'

import {
  View,
  Text,
  Button,
} from 'react-native'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Quantum Chat',
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
        <Text style={{ padding: 20, fontStyle: 'italic' }}>
          This chat application uses quantum entanglement of quantum mechanics to let you talk with people in real-time no matter what is the distance.
          {'\n\n'}
          The cost is very low. About 1 cents per message.
          {'\n'}
        </Text>
        <ChatLink name='Inanc' navigate={navigate} />
        <ChatLink name='Lina' navigate={navigate}  />
        <ChatLink name='Ebru' navigate={navigate}  />
      </View>
    )
  }
}

const ChatLink = ({name, navigate}) =>
  <Button
    title={`Chat with ${name}`}
    onPress={() => navigate('Chat', { name })}
  />

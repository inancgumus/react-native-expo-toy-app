import React from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'

import Image from 'react-native-image-progress'
import * as Progress from 'react-native-progress'

import { ChatScreenHeaderRightButton } from
  './chat.main.screen.header.right.button.js'

export default class ChatMainScreen extends React.Component {
  static navigationOptions = {
    title: ({ state }) =>
      configureChatMainScreenTitle(state),

    header: ({ state, setParams }) =>
      configureChatMainScreenHeader(state, setParams)
  }

  render() {
    const { params } = this.props.navigation.state

    return (
      <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
        <Text>You are now talking to {params.name}...</Text>

        {
          (params.mode && params.mode === 'who') &&
          <Image
            source={{
              uri: 'https://i.giphy.com/JltOMwYmi0VrO.gif'
            }}
            indicator={ Progress.Circle }
            style={{
              width: 375,
              height: 402,
            }}
          />
        }
      </View>
    )
  }
}


const configureChatMainScreenTitle = state => {
  const name = state.params.name

  if (state.params.mode === 'who') {
    return `Who is ${name}?`
  }
  return `Chatting with ${name}`
}


const configureChatMainScreenHeader = (state, setParams) => {
  let button = (state.params.mode === 'who')
    ? { icon: 'checkmark', mode: 'none' }
    : { icon: 'help', mode: 'who' }

  return {
    right:
      <ChatScreenHeaderRightButton
        button={button}
        setParams={setParams}
      />
  }
}

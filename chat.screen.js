import React from 'react'
import { TabNavigator } from 'react-navigation'

import ChatMainScreen from './chat.main.screen.js'
import ChatHistoryScreen from './chat.history.screen.js'

export const ChatScreenNavigator = TabNavigator({
  Main: { screen: ChatMainScreen },
  History: { screen: ChatHistoryScreen },
})

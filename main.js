import React from 'react'
import Exponent from 'exponent'

import { StackNavigator } from 'react-navigation'

import HomeScreen from './home.screen.js'
import { ChatScreenNavigator } from './chat.screen.js'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreenNavigator },
})

Exponent.registerRootComponent(App)

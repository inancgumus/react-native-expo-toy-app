import React from 'react'
import {
  TouchableOpacity,
} from 'react-native'
import {
  Ionicons
} from '@exponent/vector-icons'

export const ChatScreenHeaderRightButton = ({ button, setParams }) =>
  <TouchableOpacity
    onPress={ () => setParams({ mode: button.mode }) }
  >
    <Ionicons
      name={`md-${button.icon}`}
      size={16}
      color='blue'
      style={{ marginRight: 20 }} />
  </TouchableOpacity>

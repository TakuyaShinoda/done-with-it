import React, { useState } from 'react'
import { Text, TextInput } from 'react-native'

import Screen from './app/components/Screen'
import colors from './app/config/colors'
import AppTextInput from './app/components/AppTextInput'

const App = () => {
  const [firstName, setFirstName] = useState('')

  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  )
}

export default App

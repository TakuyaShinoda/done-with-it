import React, { useState } from 'react'
import { Text, TextInput } from 'react-native'

import Screen from './app/components/Screen'
import colors from './app/config/colors'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'

const App = () => {
  const [firstName, setFirstName] = useState('')

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  )
}

export default App

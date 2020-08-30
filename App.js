import React, { useState } from 'react'

import Screen from './app/components/Screen'
import LoginScreen from './app/screens/LoginScreen'
import AppTextInput from './app/components/AppTextInput'

const App = () => {
  const [category, setCategory] = useState()

  return <LoginScreen />
}

export default App

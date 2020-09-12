import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './app/navigation/AppNavigator'
import navigationTheme from './app/navigation/NavigationTheme'

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App

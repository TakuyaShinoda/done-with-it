import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigation from './app/navigation/AuthNavigation'
import navigationTheme from './app/navigation/NavigationTheme'

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigation />
    </NavigationContainer>
  )
}

export default App

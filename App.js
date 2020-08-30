import React from 'react'
import Screen from './app/components/Secreen'
import Icon from './app/components/Icon'

const App = () => {
  return (
    <Screen>
      <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
    </Screen>
  )
}

export default App

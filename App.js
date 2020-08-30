import React from 'react'
import Screen from './app/components/Secreen'
import ListItem from './app/components/ListItem'
import Icon from './app/components/Icon'

const App = () => {
  return (
    <Screen>
      <ListItem title="My Title" imageComponent={<Icon name="email" />} />
    </Screen>
  )
}

export default App

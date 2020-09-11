import React, { useEffect, useState } from 'react'

import Screen from './app/components/Screen'
import AppFormImagePicker from './app/components/forms/FormImagePicker'
import ListingEditScreen from './app/screens/ListingEditScreen'
import ImageInputList from './app/components/ImageInputList'

const App = () => {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  )
}

export default App

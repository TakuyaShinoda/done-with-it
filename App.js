import React, { useEffect, useState } from 'react'
import { Button, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import Screen from './app/components/Screen'
import ImageInput from './app/components/ImageInput'

const App = () => {
  const [imageUri, setImageUri] = useState()

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!granted) alert('You need to enable permission to access te library.')
  }

  useEffect(() => {
    requestPermission()
  }, [])

  return (
    <Screen>
      <ImageInput imageUri={imageUri} onChangeImage={uri => setImageUri(uri)} />
    </Screen>
  )
}

export default App

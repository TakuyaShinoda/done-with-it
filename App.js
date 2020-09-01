import React, { useEffect, useState } from 'react'
import { Button, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import Screen from './app/components/Screen'

const App = () => {
  const [imageUri, setImageUri] = useState()

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!granted) alert('You need to enable permission to access te library.')
  }

  useEffect(() => {
    requestPermission()
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled) setImageUri(result.uri)
    } catch (error) {
      console.log('Error reading an Image', error)
    }
  }

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  )
}

export default App

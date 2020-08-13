import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import AppButton from './app/components/AppButton'

const App = () => {
  return <WelcomeScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App

import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import WelcomeScreen from './app/screens/WelcomeScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
})

const App = () => {
  return <WelcomeScreen />
}

export default App

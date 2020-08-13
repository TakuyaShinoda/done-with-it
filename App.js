import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import AppButton from './app/components/AppButton'
import Card from './app/components/Card'

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#f8f4f4',
        flex: 1,
        padding: 20,
        paddingTop: 60,
      }}
    >
      <Card
        title="Red jacket for Sale!"
        subTitle="$100"
        image={require('./app/assets/jacket.jpg')}
      />
      <Card
        title="Red jacket for Sale!"
        subTitle="$100"
        image={require('./app/assets/jacket.jpg')}
      />
    </View>
  )
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

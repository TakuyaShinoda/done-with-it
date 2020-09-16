import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import * as Progress from 'react-native-progress'

import colors from '../config/colors'

const UploadScreen = ({ progress, visible }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar progress={progress} color={colors.primary} width={200} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

export default UploadScreen

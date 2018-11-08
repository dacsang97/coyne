import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useScreens } from 'react-native-screens'
import MainNavigator from './navigation/MainNavigator'

useScreens()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default () => (
  <View style={styles.container}>
    <MainNavigator />
  </View>
)

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Constants } from 'expo'
import { BLACK_DARKER } from '../../constants/colors'

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: BLACK_DARKER,
    height: Constants.statusBarHeight,
  },
})

export default () => <View style={styles.statusBar} />

/* eslint-disable import/no-named-as-default-member */
import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { useScreens } from 'react-native-screens'
// eslint-disable-next-line import/no-named-as-default
import MainNavigator from './navigation/MainNavigator'
import { StatusBar } from './components/atoms'
import * as colors from './constants/colors'

useScreens()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.BLACK,
    accent: colors.BLACK_DARKER,
    text: colors.WHITE,
    error: colors.RED,
    disabled: colors.GRAY,
  },
}

export default () => (
  <PaperProvider theme={theme}>
    <StatusBar />
    <MainNavigator />
  </PaperProvider>
)

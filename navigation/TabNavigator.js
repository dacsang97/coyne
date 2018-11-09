/* eslint-disable import/named */
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { AntDesign } from '@expo/vector-icons'
import { Home, History, AddTransaction, HomePage } from '../screens'
import { PlusIcon } from '../components/monocules'

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: <AntDesign name="wallet" color="#fff" size={22} />,
      },
    },
    AddTransaction: {
      screen: AddTransaction,
      navigationOptions: {
        title: '',
        tabBarOnPress: () => {},
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarIcon: <AntDesign name="linechart" color="#fff" size={22} />,
      },
    },
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        tabBarIcon: <AntDesign name="linechart" color="#fff" size={22} />,
      },
    },
  },
  {
    headerMode: 'none',
  },
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ({ navigation }) => (
  <View style={styles.container}>
    <TabNavigator />
    <PlusIcon onPress={() => navigation.navigate('AddTransaction')} />
  </View>
)

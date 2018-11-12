import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { AntDesign } from '@expo/vector-icons'
import { Home, History, AddTransaction } from '../screens'
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

export default class TabNavigatorScreen extends PureComponent {
  static router = TabNavigator.router

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <TabNavigator navigation={navigation} />
        <PlusIcon onPress={() => navigation.navigate('AddTransaction')} />
      </View>
    )
  }
}

import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { AntDesign } from '@expo/vector-icons'
import Modal from 'react-native-modal'
import { Home, History, AddTransaction } from '../screens'
import { PlusIcon } from '../components/monocules'
import { ListAccount } from '../components/organisms'
import { SPACING } from '../constants/unit'

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: <AntDesign name="wallet" color="#fff" size={22} />,
      },
    },
    Transaction: {
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

  state = {
    chooseAccount: false,
  }

  hideChooseAccount = () => {
    this.setState({
      chooseAccount: false,
    })
  }

  showChooseAccount = () => {
    this.setState({
      chooseAccount: true,
    })
  }

  render() {
    const { navigation } = this.props
    const { chooseAccount } = this.state
    return (
      <View style={styles.container}>
        <TabNavigator navigation={navigation} />
        <Modal
          useNativeDriver
          isVisible={chooseAccount}
          onBackButtonPress={this.hideChooseAccount}
          onBackdropPress={this.hideChooseAccount}
          style={{ margin: 0, padding: SPACING, justifyContent: 'flex-end' }}
        >
          <ListAccount />
        </Modal>
        <PlusIcon onLongPress={this.showChooseAccount} onPress={() => navigation.navigate('AddTransaction')} />
      </View>
    )
  }
}

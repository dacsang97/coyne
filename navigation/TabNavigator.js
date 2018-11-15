import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { AntDesign } from '@expo/vector-icons'
import Modal from 'react-native-modal'
import { Portal } from 'react-native-paper'
import { observer } from 'mobx-react'
import { Home, History, AddTransaction } from '../screens'
import { PlusIcon } from '../components/monocules'
import { ListWallet, AddWallet } from '../components/organisms'
import { SPACING } from '../constants/unit'
import store from '../store'

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

@observer
class TabNavigatorScreen extends Component {
  static router = TabNavigator.router

  state = {
    showModal: false,
    chooseWallet: false,
  }

  hideChooseWallet = () => {
    this.setState({
      showModal: false,
    })
  }

  showChooseWallet = () => {
    this.setState({
      showModal: true,
      chooseWallet: true,
    })
  }

  showAddWallet = () => {
    this.setState({
      chooseWallet: false,
    })
  }

  walletClicked = id => {
    store.changeCurrentWallet(id)
    this.hideChooseWallet()
  }

  render() {
    const { navigation } = this.props
    const { chooseWallet, showModal } = this.state
    return (
      <View style={styles.container}>
        <TabNavigator navigation={navigation} />
        <Portal>
          <Modal
            useNativeDriver
            animationOut={chooseWallet ? 'slideOutDown' : 'slideOutUp'}
            isVisible={showModal}
            onBackButtonPress={this.hideChooseWallet}
            onBackdropPress={this.hideChooseWallet}
            style={{ margin: 0, padding: SPACING, justifyContent: chooseWallet ? 'flex-end' : 'flex-start' }}
          >
            {chooseWallet ? (
              <ListWallet onWalletPress={this.walletClicked} onAddPress={this.showAddWallet} />
            ) : (
              <AddWallet />
            )}
          </Modal>
        </Portal>
        <PlusIcon onLongPress={this.showChooseWallet} onPress={() => navigation.navigate('AddTransaction')} />
      </View>
    )
  }
}

export default TabNavigatorScreen

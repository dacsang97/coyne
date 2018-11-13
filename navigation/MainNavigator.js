import { createStackNavigator } from 'react-navigation'
import AddSubMoney from '../screens/AddSubMoney'
import TabNavigator from './TabNavigator'
import { Test, AddTransaction } from '../screens'

const MainNavigator = createStackNavigator(
  {
    TabNavigator,
    Test: {
      screen: Test,
      navigationOptions: {},
    },
    AddSubMoney: {
      screen: AddSubMoney,
    },
    AddTransaction,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'TabNavigator',
  },
)

export default MainNavigator

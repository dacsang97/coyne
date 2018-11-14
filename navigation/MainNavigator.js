import { createStackNavigator } from 'react-navigation'
import TabNavigator from './TabNavigator'
import { Test, AddTransaction } from '../screens'

const MainNavigator = createStackNavigator(
  {
    TabNavigator,
    Test: {
      screen: Test,
      navigationOptions: {},
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

import { createStackNavigator } from 'react-navigation'
import Test from '../screens/Test'
import TabNavigator from './TabNavigator'
import { AddTransaction } from '../screens'

const MainNavigator = createStackNavigator(
  {
    Test: {
      screen: Test,
    },
    TabNavigator,
    AddTransaction,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'TabNavigator',
  },
)

export default MainNavigator

import { createStackNavigator } from 'react-navigation'
import TabNavigator from './TabNavigator'
import { AddTransaction } from '../screens'

const MainNavigator = createStackNavigator(
  {
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

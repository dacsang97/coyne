import { createStackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Test from '../screens/Test'
import HomePage from '../screens/HomePage'
import History from '../screens/History'
import TabNavigator from './TabNavigator'
import { AddTransaction } from '../screens'

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Ahihi',
      },
    },
    Test: {
      screen: Test,
    },
    HomePage: {
      screen: HomePage,
    },
    History: {
      screen: History,
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

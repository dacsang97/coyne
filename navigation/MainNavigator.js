import { createStackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Test from '../screens/Test'
import HomePage from '../screens/HomePage'
import History from '../screens/History'

export default createStackNavigator(
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
  },
  {
    headerMode: 'none',
  },
)

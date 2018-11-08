import { createStackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Test from '../screens/Test'

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
  },
  {
    headerMode: 'none',
  },
)

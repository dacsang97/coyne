import { createStackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Test from '../screens/Test'
import AddSubMoney from '../screens/AddSubMoney'

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
    AddSubMoney: {
      screen: AddSubMoney,
    },
  },
  {
    headerMode: 'none',
  },
)

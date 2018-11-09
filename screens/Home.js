import React, { PureComponent } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'
import { RectButton } from 'react-native-gesture-handler'
import { BLACK } from '../constants/colors'
import { Text } from '../components/atoms'

const { event, Value, interpolate, Extrapolate, set, block, cond, call, greaterOrEq, lessOrEq } = Animated

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
})

class Home extends PureComponent {
  gestureState = new Value(-1)

  offset = new Value(0)

  opacityTop = interpolate(this.offset, {
    inputRange: [-80, 0],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  })

  opacityBottom = interpolate(this.offset, {
    inputRange: [0, 80],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  })

  constructor(props) {
    super(props)
    this.handleScroll = event([
      {
        nativeEvent: ({ contentOffset: { y } }) =>
          block([
            cond(greaterOrEq(this.offset, 80), call([], this.navigateToIncome)),
            cond(lessOrEq(this.offset, -80), call([], this.navigateToIncome)),
            set(this.offset, y),
          ]),
      },
    ])
  }

  navigateToIncome = () => {
    const { navigation } = this.props
    navigation.navigate('Test')
  }

  log = ([x]) => {
    console.log(x)
  }

  render() {
    const { navigation } = this.props
    return (
      // eslint-disable-next-line react/jsx-no-undef
      <ScrollView style={styles.container} onScroll={this.handleScroll} scrollEventThrottle={16}>
        <Text style={{ fontSize: 26 }} medium upper color="red">
          Home Screen
        </Text>
        <RectButton
          onPress={() => {
            navigation.navigate('Test')
          }}
        >
          <View>
            <Ionicons name="ios-microphone" />
            <Text weight="medium">Go to Test Screen</Text>
          </View>
        </RectButton>
        <RectButton
          onPress={() => {
            navigation.navigate('HomePage')
          }}
        >
          <View>
            <Text weight="medium">Go to Home Page</Text>
          </View>
        </RectButton>
        <RectButton
          onPress={() => {
            navigation.navigate('History')
          }}
        >
          <View>
            <Text weight="medium">Go to History Page</Text>
          </View>
        </RectButton>
      </ScrollView>
    )
  }
}

export default Home

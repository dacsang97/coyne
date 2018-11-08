import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'
import { RectButton } from 'react-native-gesture-handler'
import { BLACK } from '../constants/colors'
import { Text } from '../components/atoms'
import { Toast } from '../components/monocules'

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
      <Animated.View style={styles.container}>
        <Animated.ScrollView backgroundColor={BLACK} onScroll={this.handleScroll} scrollEventThrottle={16}>
          <Animated.Text style={{ fontSize: this.sizeTop }} medium upper color="red">
            Home Screen
          </Animated.Text>
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
        </Animated.ScrollView>
        <Toast position="top" style={{ opacity: this.opacityTop }} />
        <Toast position="bottom" style={{ opacity: this.opacityBottom }} />
      </Animated.View>
    )
  }
}

export default Home

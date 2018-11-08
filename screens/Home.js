import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { BLACK_DARKER } from '../constants/colors'
import { Text } from '../components/atoms'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK_DARKER,
  },
})

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll = ({ nativeEvent }) => {
    const { navigation } = this.props
    const {
      contentOffset: { y },
    } = nativeEvent
    console.log({ nativeEvent })
    if (y < -80) {
      navigation.navigate('AddSubMoney', { isSub: false })
    }
    if (y > 80) {
      navigation.navigate('AddSubMoney', { isSub: true })
    }
  }

  render() {
    const { navigation } = this.props
    return (
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
      </ScrollView>
    )
  }
}

export default Home

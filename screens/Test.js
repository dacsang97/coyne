import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { SPACING } from '../constants/unit'

const styles = StyleSheet.create({
  screen: {
    padding: SPACING,
  },
})

export default class Test extends PureComponent {
  back = () => {
    const { navigation } = this.props
    navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>Test Screen</Text>
        <RectButton onPress={this.back}>
          <Text>Back</Text>
        </RectButton>
      </View>
    )
  }
}

import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export default class Test extends PureComponent {
  constructor(props) {
    super(props)
    console.log('Ahihi')
  }

  back = () => {
    const { navigation } = this.props
    navigation.navigate('Home')
  }

  render() {
    return (
      <View>
        <Text>Test Screen</Text>
        <RectButton onPress={this.back}>
          <Text>Back</Text>
        </RectButton>
      </View>
    )
  }
}

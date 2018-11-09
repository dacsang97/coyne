import React, { PureComponent } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { BLACK } from '../constants/colors'
import { Text, Button } from '../components/atoms'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
})

class Home extends PureComponent {
  navigateToIncome = () => {
    const { navigation } = this.props
    navigation.navigate('Test')
  }

  render() {
    const { navigation } = this.props
    return (
      <ScrollView
        style={styles.container}
        backgroundColor={BLACK}
        onScroll={this.handleScroll}
        scrollEventThrottle={16}
      >
        <Text style={{ fontSize: 26 }} medium upper color="red">
          Home Screen
        </Text>
        <Button
          onPress={() => {
            navigation.navigate('Test')
          }}
        >
          <View>
            <Ionicons name="ios-microphone" />
            <Text weight="medium">Go to Test Screen</Text>
          </View>
        </Button>
      </ScrollView>
    )
  }
}

export default Home

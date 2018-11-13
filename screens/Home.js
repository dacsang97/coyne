import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { observer } from 'mobx-react'
import { Text, Button } from '../components/atoms'
import { Today, CardMoney } from '../components/monocules'
import { BLACK_DARKER } from '../constants/colors'

import store from '../store'

const WIDTH = Dimensions.get('window').width

const SPACING = 10

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BLACK_DARKER,
    padding: SPACING,
  },
  saveMoney: {
    flexDirection: 'row',
    marginTop: 2 * SPACING,
    justifyContent: 'space-between',
  },
  cardMoney: {
    width: (WIDTH - SPACING * 3) / 2,
  },
  pinnedContainer: {
    marginTop: SPACING,
    flex: 1,
  },
  testArea: {
    marginTop: SPACING,
    flex: 1,
  },
  pinned: {
    fontSize: 13,
  },
})
@observer
class Home extends Component {
  navigate(screenName, props = {}) {
    const { navigation } = this.props
    navigation.navigate(screenName, {
      ...props,
    })
  }

  render() {
    const {
      currentWallet: { income, expense, balance, unit },
    } = store

    return (
      <ScrollView style={styles.screen}>
        <Today />
        <View style={styles.saveMoney}>
          <CardMoney style={styles.cardMoney} unit={unit} money={income.toString()} title="income" />
          <CardMoney style={styles.cardMoney} unit={unit} money={expense.toString()} title="expense" />
        </View>
        <CardMoney unit={unit} money={balance.toString()} title="balance" />
        <View style={styles.pinnedContainer}>
          <Text color="gray" medium upper>
            Pinned
          </Text>
        </View>
        <View style={styles.testArea}>
          <Text color="gray" medium upper>
            Test area
          </Text>
          <Button onPress={() => this.navigate('Test')}>
            <Text>Go to Test screen</Text>
          </Button>
          <Button onPress={() => this.navigate('AddSubMoney')}>
            <Text>Go to Add-Sub Money screen</Text>
          </Button>
        </View>
      </ScrollView>
    )
  }
}

export default Home

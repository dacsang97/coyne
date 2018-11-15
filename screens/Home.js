/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native'
import { observer } from 'mobx-react'
import { Text, Button } from '../components/atoms'
import { Today, CardMoney, Pinned } from '../components/monocules'
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
  keyExtractor = item => `${item.id}`

  navigate(screenName, props = {}) {
    const { navigation } = this.props
    this.setPinned = this.setPinned.bind(this)
    navigation.navigate(screenName, {
      ...props,
    })
  }

  render() {
    const {
      currentWallet: { income, expense, balance, unit, pinned },
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
          <FlatList
            data={pinned}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) => {
              console.log(item.setPinned)
              return (
                <Pinned
                  unit={unit}
                  note={item.note}
                  type={item.type}
                  icon={item.icon}
                  money={item.money}
                  pinned={item.setPinned}
                />
              )
            }}
          />
        </View>
        <View style={styles.testArea}>
          <Text color="gray" medium upper>
            Test area
          </Text>
          <Button onPress={() => this.navigate('Test')}>
            <Text>Go to Test screen</Text>
          </Button>
        </View>
      </ScrollView>
    )
  }
}

export default Home

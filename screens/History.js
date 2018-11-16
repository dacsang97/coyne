import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { observer } from 'mobx-react'
import { Text } from '../components/atoms'
import { BLACK_DARKER, BLACK } from '../constants/colors'
import store from '../store'
import { getDay } from '../utils/date'
import { CardHistory } from '../components/monocules'

const SPACING = 10

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BLACK_DARKER,
    padding: SPACING,
  },
  checkHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SPACING,
    paddingHorizontal: SPACING,
  },
  rightHistory: {
    alignItems: 'flex-end',
  },
  cash: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: BLACK,
    alignItems: 'center',
    padding: SPACING,
  },
  childCash: {
    alignItems: 'flex-end',
  },
  money: {
    fontSize: 24,
  },
  icon: {
    marginLeft: SPACING,
  },
  date: {
    fontSize: 11,
    marginTop: SPACING / 2,
  },
})
@observer
class History extends Component {
  keyExtractor = item => `${item.id}`

  navigate(screenName, props = {}) {
    const { navigation } = this.props
    navigation.navigate(screenName, {
      ...props,
    })
  }

  render() {
    const day = getDay()
    const {
      currentWallet: { name, income, expense, unit, transactions },
    } = store
    return (
      <View style={styles.screen}>
        <View style={styles.checkHistory}>
          <View style={styles.leftHistory}>
            <Text color="blue" medium>
              {unit}
              {income.toString()}
            </Text>
            <Text color="red" medium>
              - {unit}
              {expense.toString()}
            </Text>
          </View>
          <View style={styles.rightHistory}>
            <Text color="white" medium upper>
              {name}
            </Text>
            <Text color="gray" medium>
              {day}
            </Text>
          </View>
        </View>
        <FlatList
          data={transactions}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <CardHistory unit={unit} category={item.category} type={item.type} icon={item.icon} money={item.money} />
          )}
        />
      </View>
    )
  }
}
export default History

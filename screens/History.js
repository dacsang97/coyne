/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { TextInput, View, StyleSheet, FlatList } from 'react-native'
import Emoji from 'react-native-emoji'
import { observer } from 'mobx-react'
import { Text } from '../components/atoms'
import { BLACK_DARKER, BLACK } from '../constants/colors'
import store from '../store'
import { getDayOfWeek, getDay } from '../utils/date'

const SPACING = 10

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BLACK_DARKER,
    padding: SPACING,
  },
  searchInput: {
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: BLACK,
    backgroundColor: BLACK,
    height: 30,
    paddingLeft: 10,
    color: 'white',
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
    const weekDay = getDayOfWeek()
    const day = getDay()
    const {
      currentWallet: { income, expense, unit, transactions },
    } = store
    return (
      <View style={styles.screen}>
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="#9e9e9e"
          placeholder="e.g .."
          onChangeText={text => console.log(text)}
        />
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
            <Text color="white" medium>
              {weekDay}
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
            <View>
              <View style={styles.cash}>
                <View style={styles.icon}>
                  <Emoji name={item.icon} style={{ fontSize: 30 }} />
                </View>
                <View style={styles.childCash}>
                  <Text style={styles.money}>
                    {unit} {item.type === 'expense' && '-'}
                    {item.money}
                  </Text>
                  <Text color="gray" upper medium>
                    {item.note}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.date} medium color="gray">
                  {weekDay}, {day}, 2018
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}
export default History

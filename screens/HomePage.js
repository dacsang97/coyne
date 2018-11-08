import React, { PureComponent } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons'
import { View, StyleSheet } from 'react-native'
import { Text } from '../components/atoms'
import { BLACK_DARKER, WHITE, GRAY, RED, BLUE, BLACK } from '../constants/colors'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BLACK_DARKER,
  },
  dateView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  date: {
    color: WHITE,
    fontSize: 26,
    fontWeight: 'bold',
  },
  time: {
    color: GRAY,
    fontSize: 26,
  },
  saveMoney: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  childMoney: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: BLACK,
    width: '46%',
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 10,
    paddingRight: 10,
    backgroundColor: BLACK,
  },
  childEx: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: BLACK,
    width: '46%',
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10,
    paddingRight: 10,
    backgroundColor: BLACK,
  },
  number: {
    color: WHITE,
    fontSize: 24,
  },
  income: {
    fontSize: 13,
    color: BLUE,
  },
  expense: {
    color: RED,
    fontSize: 13,
  },
  allBalance: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: 50,
    backgroundColor: BLACK,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: BLACK,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  printed: {
    flex: 8,
    marginTop: 30,
    marginLeft: 10,
  },
  pinned: {
    color: GRAY,
    fontSize: 13,
  },
  balance: {
    color: GRAY,
  },
  footer: {
    marginBottom: -10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    marginLeft: 10,
  },
  footerRight: {
    flexDirection: 'row',
  },
  finger: {
    marginRight: 10,
    marginLeft: 20,
  },
})

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends PureComponent {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.dateView}>
          <View>
            <Text style={styles.date}>Friday,</Text>
          </View>
          <View>
            <Text style={styles.time}>November 2</Text>
          </View>
        </View>
        <View style={styles.saveMoney}>
          <View style={styles.childMoney}>
            <View>
              <Text style={styles.number}>$ 66888.66</Text>
            </View>
            <View>
              <Text style={styles.income} upper>
                Income
              </Text>
            </View>
          </View>
          <View style={styles.childEx}>
            <View>
              <Text style={styles.number}>-$ 000.00</Text>
            </View>
            <View>
              <Text style={styles.expense} upper>
                Expense
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.allBalance}>
          <View>
            <Text style={styles.number}>$ 66888.66</Text>
          </View>
          <View>
            <Text style={styles.balance} upper>
              Balance
            </Text>
          </View>
        </View>
        <View style={styles.printed}>
          <Text style={styles.pinned}>PINNED</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.search}>
            <Ionicons name="ios-search" size={32} color="#9e9e9e" />
          </View>
          <View style={styles.footerRight}>
            <Ionicons name="md-more" size={32} color="#9e9e9e" />
            <Ionicons name="ios-finger-print" size={32} color="#d84315" style={styles.finger} />
          </View>
        </View>
      </View>
    )
  }
}
export default HomePage

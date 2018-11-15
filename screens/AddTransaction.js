import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { observer } from 'mobx-react'
import Emoji from 'react-native-emoji'
import { Text } from '../components/atoms'
import * as colors from '../constants/colors'

import store from '../store'

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const operators = ['+', '-', '×', '÷']

const buttonList = [['1', '2', '3', '÷'], ['4', '5', '6', '×'], ['7', '8', '9', '-'], ['C', '0', '<', '+']]

const categoryList = [
  {
    icon: 'moneybag',
    category: 'investments',
  },
  {
    icon: 'tada',
    category: 'Hack',
  },
  {
    icon: 'gift',
    category: 'gifts',
  },
  {
    icon: 'womans_clothes',
    category: 'clothes',
  },
  {
    icon: 'coffee',
    category: 'coffee',
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
    justifyContent: 'space-between',
    padding: 10,
  },
  moneyContainer: {
    alignItems: 'flex-end',
  },
  money: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  moneyWrapper: {
    height: 54,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listWrapper: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.BLACK_DARKER,
    borderRadius: 5,
  },
  listCategory: {
    flex: 1,
  },
  category: {
    width: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  selected: {
    backgroundColor: '#0F1012',
  },
  icon: {
    height: 30,
    marginBottom: 10,
  },
  calculator: {
    backgroundColor: colors.BLACK_DARKER,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  disabled: {
    color: colors.GRAY,
  },
  clearButton: {
    color: colors.RED,
  },
})

@observer
class AddSubMoney extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'income',
      money: 0,
      // eslint-disable-next-line
      savedMoney: 0,
      current: '', // string of current number
      currentString: '', // full current string with operater
      currentOperator: '',
      category: '',
    }
  }

  onButtonPress(sign) {
    const { current, currentOperator, currentString, savedMoney } = this.state
    if (sign === 'C') {
      this.setState(() => ({
        money: 0,
        savedMoney: 0,
        current: '',
        currentString: '',
        currentOperator: '',
      }))
      return
    }
    this.setState(prev => {
      if (sign !== '<') {
        return { currentString: prev.currentString + sign }
      }
      return {
        currentString:
          current.length > 0 ? prev.currentString.substring(0, prev.currentString.length - 1) : prev.currentString,
      }
    })
    if (operators.includes(sign)) {
      this.setState(prev => ({
        currentOperator: sign,
        savedMoney: prev.money,
        current: '',
      }))
    } else if (numbers.includes(sign) || sign === '<') {
      this.setState(prev => ({
        current: sign === '<' ? prev.current.substring(0, prev.current.length - 1) : prev.current + sign,
      }))
      const currentMoney = sign === '<' ? current.substring(0, current.length - 1) : current + sign
      // break if current is empty
      if (currentMoney === '') {
        // not have an operator yet, money is current string convert to number, current = ''
        if (currentString.length === 1) {
          this.setState(() => ({
            money: 0,
          }))
        } else {
          // had some operator, current = ''
          this.setState(() => ({
            money: savedMoney,
          }))
        }
        return
      }
      // if current is not empty, execute operator
      if (currentOperator === '') {
        this.setState(() => ({
          money: parseInt(currentMoney, 10),
        }))
      } else if (currentOperator === '+') {
        this.setState(prev => ({
          money: prev.savedMoney + parseInt(currentMoney, 10),
        }))
      } else if (currentOperator === '-') {
        this.setState(prev => ({
          money: prev.savedMoney - parseInt(currentMoney, 10),
        }))
      } else if (currentOperator === '×') {
        this.setState(prev => ({
          money: prev.savedMoney * parseInt(currentMoney, 10),
        }))
      } else {
        this.setState(prev => ({
          money: prev.savedMoney / parseInt(currentMoney, 10),
        }))
      }
    } else {
      this.setState(() => ({
        money: 0,
        savedMoney: 0,
      }))
    }
  }

  onSelectCategory(cat) {
    this.setState(() => cat)
  }

  onSelectTransaction(type) {
    this.setState(() => ({ type }))
  }

  addTransaction() {
    const {
      currentWallet: { add },
    } = store

    const { navigation } = this.props

    const { icon, category, type, money } = this.state

    const time = new Date()

    add({ icon, category, type, money, time })
    navigation.navigate('Home')
  }

  disableButton(sign) {
    const { current } = this.state
    if (current === '' && (operators.includes(sign) || sign === '<' || sign === '0')) {
      return true
    }
    return false
  }

  render() {
    const { money, currentString, category, type } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.moneyContainer}>
          <View style={styles.money}>
            <View style={styles.moneyWrapper}>
              <Text color="white" fontWeight="light" size={64} lh={64}>
                {money.toFixed(0)}
              </Text>
            </View>
            <Text color="gray">USD</Text>
          </View>
          <Text color="gray">{currentString}</Text>
          <Text color="blue" size={18}>
            {type.toUpperCase()}
          </Text>
        </View>
        <View style={{ height: 140 }}>
          <View style={styles.buttonRow}>
            <TouchableRipple>
              <Text color="gray">New Category</Text>
            </TouchableRipple>
            <View style={{ flexDirection: 'row' }}>
              <TouchableRipple onPress={() => this.onSelectTransaction('income')} style={{ marginRight: 8 }}>
                <Text color={type === 'income' ? 'blue' : 'gray'}>Income</Text>
              </TouchableRipple>
              <TouchableRipple onPress={() => this.onSelectTransaction('expense')}>
                <Text color={type === 'expense' ? 'blue' : 'gray'}>Expense</Text>
              </TouchableRipple>
            </View>
          </View>
          <View style={styles.listWrapper}>
            <ScrollView style={styles.listCategory} horizontal>
              {categoryList.map(cat => (
                <TouchableRipple
                  onPress={() => this.onSelectCategory(cat)}
                  key={`category_${cat.category}`}
                  style={[styles.category, cat.category === category && styles.selected]}
                >
                  <View>
                    <Emoji name={cat.icon} style={{ fontSize: 24 }} />
                    <Text color="gray" size="18">
                      {cat.category}
                    </Text>
                  </View>
                </TouchableRipple>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.calculator}>
          {buttonList.map(row => (
            <View key={`button_${row}`} style={styles.row}>
              {row.map(sign => (
                <TouchableRipple
                  onPress={() => this.onButtonPress(sign)}
                  disabled={this.disableButton(sign)}
                  key={`button_${sign}`}
                  style={styles.button}
                >
                  <Text
                    size={32}
                    fontWeight="light"
                    color="white"
                    style={[
                      styles.buttonText,
                      sign === 'C' && styles.clearButton,
                      this.disableButton(sign) && styles.disabled,
                    ]}
                  >
                    {sign}
                  </Text>
                </TouchableRipple>
              ))}
            </View>
          ))}
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableRipple onPress={() => this.addTransaction()}>
            <Text size={18} color="blue">
              ADD TRANSACTION
            </Text>
          </TouchableRipple>
        </View>
      </View>
    )
  }
}

export default AddSubMoney

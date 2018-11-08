import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Image } from 'react-native'
import { Button, Text } from '../components/atoms'
import * as colors from '../constants/colors'

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const operators = ['+', '-', '×', '÷']

const buttonList = [['1', '2', '3', '÷'], ['4', '5', '6', '×'], ['7', '8', '9', '-'], ['C', '0', '<', '+']]

const categoryList = [
  /* eslint-disable global-require */
  {
    icon: require('../assets/icons/business.png'),
    name: 'investments',
  },
  {
    icon: require('../assets/icons/hack.png'),
    name: 'Hack',
  },
  {
    icon: require('../assets/icons/gift.png'),
    name: 'gifts',
  },
  {
    icon: require('../assets/icons/clothes.png'),
    name: 'clothes',
  },
  {
    icon: require('../assets/icons/cafe.png'),
    name: 'coffee',
  },
  /* eslint-enable global-require */
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
  listWrapper: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.BLACK_DARKER,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: { width: 1, height: 1 },
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
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: { width: 2, height: 2 },
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
  buttonText: {
    fontFamily: 'Helvetica Neue',
  },
  disabled: {
    color: colors.GRAY,
  },
  clearButton: {
    color: colors.RED,
  },
})

export default class AddSubMoney extends Component {
  constructor(props) {
    super(props)
    this.state = {
      money: 0,
      // eslint-disable-next-line
      savedMoney: 0,
      current: '',
      currentString: '',
      currentOperator: '',
      category: '',
    }
  }

  onButtonPress(sign) {
    const { current, currentOperator } = this.state
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
    this.setState(prev => ({
      currentString:
        sign === '<' ? prev.currentString.substring(0, prev.currentString.length - 1) : prev.currentString + sign,
    }))
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

  onSelectCategory(name) {
    this.setState(() => ({
      category: name,
    }))
  }

  disableButton(sign) {
    const { current } = this.state
    if (current === '' && (operators.includes(sign) || sign === '<' || sign === '0')) {
      return true
    }
    return false
  }

  render() {
    // eslint-disable-next-line
    const { isSub } = this.props.navigation.state.params
    const { money, currentString, category } = this.state
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
            {isSub ? 'OUTCOME' : 'INCOME'}
          </Text>
        </View>
        <View style={{ height: 150 }}>
          <Button>
            <Text color="gray">New Category</Text>
          </Button>
          <View style={styles.listWrapper}>
            <ScrollView style={styles.listCategory} horizontal>
              {categoryList.map(cat => (
                <Button
                  onPress={() => this.onSelectCategory(cat.name)}
                  key={`category_${cat.name}`}
                  style={[styles.category, cat.name === category && styles.selected]}
                >
                  <Image resizeMode="contain" source={cat.icon} style={styles.icon} />
                  <Text color="gray" size="18">
                    {cat.name}
                  </Text>
                </Button>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.calculator}>
          {buttonList.map(row => (
            <View key={`button_${row}`} style={styles.row}>
              {row.map(sign => (
                <Button
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
                </Button>
              ))}
            </View>
          ))}
        </View>
      </View>
    )
  }
}

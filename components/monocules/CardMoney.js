import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Card, Text } from '../atoms'
import { BLACK } from '../../constants/colors'
import { SPACING } from '../../constants/unit'

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: SPACING,
    alignItems: 'flex-end',
    padding: SPACING,
    backgroundColor: BLACK,
    marginBottom: SPACING,
  },
  number: {
    fontSize: 24,
  },
})

const CardMoney = ({ money, title, unit, style, ...props }) => {
  let colorTitle

  switch (title) {
    case 'income':
      colorTitle = 'blue'
      break
    case 'expense':
      colorTitle = 'red'
      break
    case 'balance':
      colorTitle = 'gray'
      break
    default:
      colorTitle = 'blue'
  }
  return (
    <Card style={style} {...props}>
      <Text style={styles.number}>
        {unit} {title === 'expense' && '-'}
        {money}
      </Text>
      <Text upper color={colorTitle} medium>
        {title}
      </Text>
    </Card>
  )
}

CardMoney.propTypes = {
  money: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
}

export default CardMoney

import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Card, Text } from '../atoms'
import { CARD_COLORS } from '../../constants/colors'
import { SPACING } from '../../constants/unit'

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
  },
  money: {
    fontSize: 24,
  },
  active: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ffe867',
    top: 10,
    left: 10,
  },
  name: {
    color: 'rgba(255,255,255, 0.8)',
  },
  unit: {
    color: 'rgba(255,255,255, 0.8)',
  },
})

const CardAccount = ({ width, height, amount, name, unit, color, active }) => (
  <Card
    style={[
      styles.wrapper,
      { backgroundColor: CARD_COLORS[color], marginBottom: 0, marginRight: SPACING / 2, height, width },
    ]}
  >
    {active && <View style={styles.active} />}
    <Text style={styles.money}>
      <Text style={styles.unit}>{unit}</Text> <Text>{amount}</Text>
    </Text>
    <Text style={styles.name} upper>
      {name}
    </Text>
  </Card>
)

CardAccount.propTypes = {
  amount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
}

export default CardAccount

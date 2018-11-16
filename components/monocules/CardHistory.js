import React from 'react'
import PropTypes from 'prop-types'
import Emoji from 'react-native-emoji'
import { StyleSheet, View } from 'react-native'
import { BLACK } from '../../constants/colors'
import { Text } from '../atoms'
import { getDayOfWeek, getDay } from '../../utils/date'

const SPACING = 10

const styles = StyleSheet.create({
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
const weekDay = getDayOfWeek()
const day = getDay()

const CardHistory = ({ icon, unit, money, type, category }) => (
  <View>
    <View style={styles.cash}>
      <View style={styles.icon}>
        <Emoji name={icon} style={{ fontSize: 30 }} />
      </View>
      <View style={styles.childCash}>
        <Text style={styles.money}>
          {unit} {type === 'expense' && '-'}
          {money}
        </Text>
        <Text color="gray" upper medium>
          {category}
        </Text>
      </View>
    </View>
    <View>
      <Text style={styles.date} medium color="gray">
        {weekDay}, {day}, 2018
      </Text>
    </View>
  </View>
)

CardHistory.propTypes = {
  money: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
export default CardHistory

import React from 'react'
import PropTypes from 'prop-types'
import { AntDesign } from '@expo/vector-icons'
import Emoji from 'react-native-emoji'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { BLACK, GRAY } from '../../constants/colors'
import { Text } from '../atoms'

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
    marginTop: SPACING / 2,
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
  iconX: {
    marginRight: -140,
  },
  date: {
    fontSize: 11,
    marginTop: SPACING / 2,
  },
})

const Pinned = ({ icon, unit, money, type, category, pinned }) => (
  <View>
    <View style={styles.cash}>
      <View style={styles.iconX}>
        <TouchableOpacity onPress={() => pinned(false)}>
          <AntDesign name="closecircle" size={24} color={GRAY} />
        </TouchableOpacity>
      </View>
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
  </View>
)

Pinned.propTypes = {
  money: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  pinned: PropTypes.func.isRequired,
}
export default Pinned

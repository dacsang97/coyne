import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../atoms'
import { getDayOfWeek, getDay } from '../../utils/date'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  day: {
    fontSize: 26,
  },
})

export default () => {
  const weekDay = getDayOfWeek()
  const day = getDay()
  return (
    <View style={styles.wrapper}>
      <Text style={styles.day} medium>
        {weekDay},
      </Text>
      <Text style={styles.day} color="gray">
        {day}
      </Text>
    </View>
  )
}

import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TextInput, View, StyleSheet } from 'react-native'
import { Text } from '../components/atoms'
import { BLACK_DARKER, BLACK } from '../constants/colors'

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
export default () => (
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
          $ 66888.66
        </Text>
        <Text color="red" medium>
          -$ 0.00
        </Text>
      </View>
      <View style={styles.rightHistory}>
        <Text color="white" medium>
          NOVEMBER
        </Text>
        <Text color="gray" medium>
          2018
        </Text>
      </View>
    </View>
    <View style={styles.cash}>
      <View style={styles.icon}>
        <Ionicons name="md-search" size={32} color="#9e9e9e" />
      </View>
      <View style={styles.childCash}>
        <Text style={styles.money}>$ 66888.666</Text>
        <Text color="gray" upper medium>
          Cash
        </Text>
      </View>
    </View>
    <View>
      <Text style={styles.date} medium color="gray">
        Saturday, November 3, 2018
      </Text>
    </View>
  </View>
)

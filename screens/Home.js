import React, { PureComponent } from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Text, Button } from '../components/atoms'
import { BLACK_DARKER, BLACK } from '../constants/colors'

const WIDTH = Dimensions.get('window').width

const SPACING = 10

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BLACK_DARKER,
    padding: SPACING,
  },
  dateView: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 26,
  },
  time: {
    fontSize: 26,
  },
  saveMoney: {
    flexDirection: 'row',
    marginTop: 2 * SPACING,
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: SPACING,
    alignItems: 'flex-end',
    padding: SPACING,
    backgroundColor: BLACK,
    marginBottom: SPACING,
  },
  cardMoney: {
    width: (WIDTH - SPACING * 3) / 2,
  },
  number: {
    fontSize: 24,
  },
  pinnedContainer: {
    marginTop: SPACING,
    flex: 1,
  },
  testArea: {
    marginTop: SPACING,
    flex: 1,
  },
  pinned: {
    fontSize: 13,
  },
})

export default class Home extends PureComponent {
  navigate(screenName, props = {}) {
    const { navigation } = this.props
    navigation.navigate(screenName, {
      ...props,
    })
  }

  render() {
    return (
      <ScrollView style={styles.screen}>
        <View style={styles.dateView}>
          <View>
            <Text style={styles.date} medium>
              Friday,
            </Text>
          </View>
          <View>
            <Text style={styles.time} color="gray">
              November 2
            </Text>
          </View>
        </View>
        <View style={styles.saveMoney}>
          <View style={[styles.card, styles.cardMoney]}>
            <Text style={styles.number}>$ 66888.66</Text>
            <Text upper color="blue" medium>
              Income
            </Text>
          </View>
          <View style={[styles.card, styles.cardMoney]}>
            <View>
              <Text style={styles.number}>-$ 000.00</Text>
            </View>
            <View>
              <Text upper color="red" medium>
                Expense
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.number}>$ 66888.66</Text>
          <Text upper color="gray" medium>
            Balance
          </Text>
        </View>
        <View style={styles.pinnedContainer}>
          <Text color="gray" medium upper>
            Pinned
          </Text>
        </View>
        <View style={styles.testArea}>
          <Text color="gray" medium upper>
            Test area
          </Text>
          <Button onPress={() => this.navigate('Test')}>
            <Text>Go to Test screen</Text>
          </Button>
          <Button onPress={() => this.navigate('AddSubMoney')}>
            <Text>Go to Add-Sub Money screen</Text>
          </Button>
        </View>
      </ScrollView>
    )
  }
}

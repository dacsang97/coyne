import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Constants } from 'expo'
import { Text, Input } from '../atoms'
import { SPACING } from '../../constants/unit'
import { CARD_COLORS } from '../../constants/colors'
import { CardColorButton } from '../monocules'

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    padding: SPACING,
    borderRadius: SPACING,
    marginTop: Constants.statusBarHeight,
  },
  buttons: {
    marginTop: SPACING,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colors: {
    flexDirection: 'row',
  },
})

export default () => (
  <View style={styles.wrapper}>
    <Input placeholder="e.g Cash" />
    <View style={styles.buttons}>
      <View style={styles.colors}>
        {Object.keys(CARD_COLORS).map(key => (
          <CardColorButton color={key} key={key} style={{ marginRight: SPACING }} />
        ))}
      </View>
      <CardColorButton
        color="blue"
        onPress={() => {
          console.log('hihi')
        }}
      >
        <Text medium>$</Text>
      </CardColorButton>
    </View>
  </View>
)

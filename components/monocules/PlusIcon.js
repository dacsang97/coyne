import React from 'react'
import { StyleSheet, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { LongPressGestureHandler, State } from 'react-native-gesture-handler'
import { Button } from '../atoms'
import { BLUE } from '../../constants/colors'

const SIZE = 70

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    bottom: SIZE / 5,
    left: '50%',
    transform: [
      {
        translateX: -SIZE / 2,
      },
    ],
    backgroundColor: BLUE,
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
})

export default props => (
  <LongPressGestureHandler
    minDurationMs={800}
    onHandlerStateChange={({ nativeEvent }) => {
      if (nativeEvent.state === State.ACTIVE) {
        Alert.alert("I'm being pressed for so long")
      }
    }}
  >
    <Button style={styles.icon} {...props}>
      <AntDesign name="plus" color="#fff" size={32} />
    </Button>
  </LongPressGestureHandler>
)

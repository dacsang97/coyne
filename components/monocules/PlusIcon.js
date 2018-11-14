import React from 'react'
import { StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import PropTypes from 'prop-types'
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

const PlusIcon = ({ onPress, onLongPress }) => (
  <LongPressGestureHandler
    minDurationMs={400}
    onHandlerStateChange={({ nativeEvent }) => {
      if (nativeEvent.state === State.ACTIVE) {
        onLongPress()
      }
    }}
  >
    <Button style={styles.icon} onPress={onPress}>
      <AntDesign name="plus" color="#fff" size={32} />
    </Button>
  </LongPressGestureHandler>
)

PlusIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func.isRequired,
}

export default PlusIcon

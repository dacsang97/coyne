import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { TapGestureHandler, State } from 'react-native-gesture-handler'
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

class PlusIcon extends PureComponent {
  doubleTapRef = React.createRef()

  onSingleTap = event => {
    const { onPress } = this.props
    if (event.nativeEvent.state === State.ACTIVE) {
      onPress()
    }
  }

  onDoubleTap = event => {
    const { onLongPress } = this.props
    if (event.nativeEvent.state === State.ACTIVE) {
      onLongPress()
    }
  }

  render() {
    return (
      <TapGestureHandler onHandlerStateChange={this.onSingleTap} waitFor={this.doubleTapRef}>
        <TapGestureHandler ref={this.doubleTapRef} onHandlerStateChange={this.onDoubleTap} numberOfTaps={2}>
          <View style={styles.icon}>
            <AntDesign name="plus" color="#fff" size={32} />
          </View>
        </TapGestureHandler>
      </TapGestureHandler>
    )
  }
}

PlusIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func.isRequired,
}

export default PlusIcon

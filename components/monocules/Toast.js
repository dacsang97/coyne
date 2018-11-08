import React from 'react'

import styled, { css } from 'styled-components/native'
import { prop, switchProp } from 'styled-tools'
import { AntDesign } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'
import { RED, BLUE } from '../../constants/colors'
import { Text } from '../atoms'

const Toast = styled(Animated.View)`
  ${switchProp(prop('position', 'top'), {
    top: css`
      background-color: ${BLUE};
      top: 0;
    `,
    bottom: css`
      background-color: ${RED};
      bottom: 0;
    `,
  })}
  left: 0;
  right: 0;
  height: 50px;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`

export default ({ position, ...props }) => (
  <Toast position={position} {...props}>
    {position === 'top' ? (
      <React.Fragment>
        <AntDesign name="plus" color="white" />
        <Text color="white" upper>
          income
        </Text>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <AntDesign name="minus" color="white" />
        <Text color="white" upper>
          outcome
        </Text>
      </React.Fragment>
    )}
  </Toast>
)

import React from 'react'
import styled, { css } from 'styled-components/native'
import { withProp, prop, ifProp } from 'styled-tools'
import * as colors from '../../constants/colors'

const weights = {
  light: '300',
  medium: '500',
}

const TextWrapper = styled.Text`
  color: ${withProp(prop('color', 'white'), color => colors[color.toUpperCase()])};
  font-weight: ${ifProp('medium', weights.medium, weights.light)};
  text-transform: ${ifProp('upper', 'uppercase', 'none')};
  font-size: ${prop('size', 16)};
  ${ifProp(
    'lh',
    withProp(
      'lh',
      lh => css`
        line-height: ${lh};
      `,
    ),
  )}
`

export default ({ children, ...props }) => <TextWrapper {...props}>{children}</TextWrapper>

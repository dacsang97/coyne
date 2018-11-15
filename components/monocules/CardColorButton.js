import styled, { css } from 'styled-components/native'
import { withProp, ifProp } from 'styled-tools'
import { Button } from '../atoms'
import { SPACING } from '../../constants/unit'
import { CARD_COLORS, BLACK } from '../../constants/colors'

export default styled(Button)`
  width: ${SPACING * 2.5}px;
  height: ${SPACING * 2.5}px;
  border-radius: ${SPACING / 2}px;
  background-color: ${withProp('color', color => CARD_COLORS[color])};
  justify-content: center;
  align-items: center;
  ${ifProp(
    'active',
    withProp(
      'active',
      () => css`
        border-width: 2px;
        border-color: ${BLACK};
      `,
    ),
  )}
`

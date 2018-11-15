import styled from 'styled-components/native'
import { withProp } from 'styled-tools'
import { Button } from '../atoms'
import { SPACING } from '../../constants/unit'
import { CARD_COLORS } from '../../constants/colors'

export default styled(Button)`
  width: ${SPACING * 2.5}px;
  height: ${SPACING * 2.5}px;
  border-radius: ${SPACING / 2}px;
  background-color: ${withProp('color', color => CARD_COLORS[color])};
  justify-content: center;
  align-items: center;
`

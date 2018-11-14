import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { FlatList, Dimensions, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Card } from '../atoms'
import { CardAccount } from '../monocules'
import store from '../../store'
import { SPACING } from '../../constants/unit'
import { modelOf } from '../../utils/mst'
import Wallet from '../../store/model/Wallet'

const { width: DeviceWidth } = Dimensions.get('window')

const HEIGHT = 100
const WIDTH = 70

const Wrapper = styled(Card)`
  align-items: flex-start;
  padding: 0;
  flex-direction: row;
  height: ${HEIGHT}px;
  overflow: hidden;
`

const AddAccountWrapper = styled.View`
  align-items: center;
  justify-content: center;
  height: ${HEIGHT}px;
  width: ${WIDTH}px;
`

const styles = StyleSheet.create({
  flatlist: {
    overflow: 'hidden',
    borderRadius: SPACING,
  },
})

export default observer(() => {
  const { wallets, current } = store
  const keyExtractor = item => item.id
  const renderItem = ({ item, index }) => {
    const width = (DeviceWidth - WIDTH - SPACING * 3) / 2
    return (
      <CardAccount
        width={width}
        height={HEIGHT}
        amount={item.balance}
        unit={item.unit}
        name={item.name}
        color={item.color}
        active={index === current}
      />
    )
  }
  renderItem.propTypes = {
    item: modelOf(Wallet).isRequired,
    index: PropTypes.number.isRequired,
  }
  return (
    <Wrapper>
      <AddAccountWrapper>
        <AntDesign name="plus" color="#fff" size={30} />
      </AddAccountWrapper>
      <FlatList style={styles.flatlist} data={wallets} keyExtractor={keyExtractor} horizontal renderItem={renderItem} />
    </Wrapper>
  )
})

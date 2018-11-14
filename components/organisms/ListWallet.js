import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { FlatList, Dimensions, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Card } from '../atoms'
import { CardWallet } from '../monocules'
import store from '../../store'
import { SPACING } from '../../constants/unit'

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

const AddWalletWrapper = styled.View`
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

@observer
class ListWallet extends Component {
  keyExtractor = item => item.id

  renderItem = ({ item, index }) => {
    const { current } = store
    const width = (DeviceWidth - WIDTH - SPACING * 3) / 2
    const { onWalletPress } = this.props
    return (
      <CardWallet
        width={width}
        height={HEIGHT}
        amount={item.balance}
        unit={item.unit}
        name={item.name}
        color={item.color}
        active={index === current}
        onPress={() => onWalletPress(index)}
      />
    )
  }

  render() {
    const { wallets } = store

    return (
      <Wrapper>
        <AddWalletWrapper>
          <AntDesign name="plus" color="#fff" size={30} />
        </AddWalletWrapper>
        <FlatList
          style={styles.flatlist}
          data={wallets}
          keyExtractor={this.keyExtractor}
          horizontal
          renderItem={this.renderItem}
        />
      </Wrapper>
    )
  }
}

ListWallet.propTypes = {
  onWalletPress: PropTypes.func.isRequired,
}

export default ListWallet

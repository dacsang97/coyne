import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Constants } from 'expo'
import { observer } from 'mobx-react'
import { AntDesign } from '@expo/vector-icons'
import shortid from 'shortid'
import { Text, Input, Button } from '../atoms'
import { SPACING } from '../../constants/unit'
import { CARD_COLORS, BLACK } from '../../constants/colors'
import { CardColorButton } from '../monocules'
import Wallet from '../../store/model/Wallet'
import store from '../../store'

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
  bottomBar: {
    height: 50,
    marginLeft: -SPACING,
    marginRight: -SPACING,
    marginBottom: -SPACING,
    backgroundColor: BLACK,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    padding: SPACING,
  },
  next: {
    alignItems: 'flex-end',
  },
})

@observer
class AddWallet extends Component {
  state = {
    wallet: Wallet.create({
      id: shortid.generate(),
      name: '',
      unit: 'đ',
    }),
  }

  onColorClicked = color => {
    const { wallet } = this.state
    wallet.setColor(color)
  }

  onChangeName = name => {
    const { wallet } = this.state
    wallet.setName(name)
  }

  onChangeUnit = () => {
    const { wallet } = this.state
    const { unit } = wallet
    wallet.setUnit(unit === '$' ? 'đ' : '$')
  }

  onBackPress = () => {
    const { hideModal } = this.props
    hideModal()
  }

  onNextPress = () => {
    const { hideModal } = this.props
    const { wallet } = this.state
    const { addWallet } = store
    addWallet(wallet)
    hideModal()
  }

  render() {
    const { wallet } = this.state
    const { color, name } = wallet
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={styles.wrapper}>
          <Input value={name} placeholder="e.g Cash" onChange={this.onChangeName} />
          <View style={styles.buttons}>
            <View style={styles.colors}>
              {Object.keys(CARD_COLORS).map(key => (
                <CardColorButton
                  active={key === color}
                  color={key}
                  key={key}
                  style={{ marginRight: SPACING }}
                  onPress={() => this.onColorClicked(key)}
                />
              ))}
            </View>
            <CardColorButton color="blue" onPress={this.onChangeUnit}>
              <Text medium>{wallet.unit}</Text>
            </CardColorButton>
          </View>
        </View>
        <View style={styles.bottomBar}>
          <Button style={[styles.button]} onPress={this.onBackPress}>
            <AntDesign name="plus" color="white" size={30} />
          </Button>
          <Button style={[styles.button, styles.next]} onPress={this.onNextPress}>
            <AntDesign name="arrowright" color="white" size={30} />
          </Button>
        </View>
      </View>
    )
  }
}

AddWallet.propTypes = {
  hideModal: PropTypes.func.isRequired,
}

export default AddWallet

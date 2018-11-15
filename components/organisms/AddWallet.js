import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Constants } from 'expo'
import { observer } from 'mobx-react'
import { AntDesign } from '@expo/vector-icons'
import { Text, Input } from '../atoms'
import { SPACING } from '../../constants/unit'
import { CARD_COLORS, BLACK } from '../../constants/colors'
import { CardColorButton } from '../monocules'
import Wallet from '../../store/model/Wallet'

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
    backgroundColor: BLACK,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

@observer
class AddWallet extends Component {
  state = {
    wallet: Wallet.create({
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
            <CardColorButton
              color="blue"
              onPress={() => {
                console.log('hihi')
              }}
            >
              <Text medium>{wallet.unit}</Text>
            </CardColorButton>
          </View>
        </View>
        <View style={styles.bottomBar}>
          <AntDesign name="plus" />
        </View>
      </View>
    )
  }
}

export default AddWallet

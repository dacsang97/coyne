import { types } from 'mobx-state-tree'
import Wallet from './Wallet'

const Store = types
  .model({
    current: types.number,
    wallets: types.optional(types.array(Wallet), []),
  })
  .views(self => ({
    get currentWallet() {
      return self.wallets[self.current]
    },
  }))
  .actions(self => ({
    changeCurrentWallet(id) {
      self.current = id
    },
    addWallet(wallet) {
      self.wallets.push(wallet)
    },
  }))

export default Store

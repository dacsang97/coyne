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
    changeAccount(id) {
      self.current = id
    },
  }))

export default Store

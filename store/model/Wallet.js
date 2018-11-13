import { types } from 'mobx-state-tree'
import Transaction from './Transaction'

const Wallet = types
  .model({
    name: types.string,
    unit: types.string,
    transactions: types.optional(types.array(Transaction), []),
  })
  .views(self => ({
    get income() {
      return self.transactions
        .filter(transaction => transaction.type === 'income')
        .reduce((sum, transaction) => sum + transaction.money, 0)
    },
    get expense() {
      return self.transactions
        .filter(transaction => transaction.type === 'expense')
        .reduce((sum, transaction) => sum + transaction.money, 0)
    },
    get balance() {
      return self.income - self.expense
    },
  }))
  .actions(self => ({
    add(transaction) {
      self.transactions.push(transaction)
    },
  }))

export default Wallet

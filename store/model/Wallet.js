import { types } from 'mobx-state-tree'
import Transaction from './Transaction'

const Wallet = types
  .model({
    id: types.string,
    name: types.string,
    unit: types.string,
    color: types.optional(types.enumeration(['black', 'blue', 'green', 'yellow', 'orange', 'red']), 'black'),
    transactions: types.optional(types.array(Transaction), []),
  })
  .views(self => ({
    get income() {
      return self.transactions
        .filter(transaction => transaction.type === 'income')
        .reduce((sum, transaction) => sum + transaction.money, 0)
    },
    get pinned() {
      return self.transactions.filter(transaction => transaction.pinned === true)
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
    setUnit(unit) {
      self.unit = unit
    },
    setColor(color) {
      self.color = color
    },
    setName(name) {
      self.name = name
    },
  }))

export default Wallet

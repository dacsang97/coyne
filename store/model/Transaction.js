import { types } from 'mobx-state-tree'

const Transaction = types
  .model({
    id: types.number,
    icon: types.optional(types.string, ''),
    category: types.optional(types.string, ''),
    type: types.enumeration(['income', 'expense']),
    money: types.number,
    note: types.optional(types.string, ''),
    time: types.Date,
    pinned: types.optional(types.boolean, false),
  })

  .actions(self => ({
    setPinned(pinned) {
      self.pinned = pinned
    },
  }))
export default Transaction

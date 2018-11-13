import { types } from 'mobx-state-tree'

const Transaction = types.model({
  icon: types.optional(types.string, ''),
  category: types.optional(types.string, ''),
  type: types.enumeration(['income', 'expense']),
  money: types.number,
  note: types.optional(types.string, ''),
  time: types.Date,
  pinned: types.optional(types.boolean, false),
})

export default Transaction

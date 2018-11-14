import Store from './model/Store'

const initialState = {
  current: 0,
  wallets: [
    {
      id: '1',
      name: 'Default',
      unit: '$',
      color: 'green',
      transactions: [
        {
          type: 'income',
          money: 6000000,
          note: 'Tiền lương',
          time: new Date(),
          pinned: true,
        },
        {
          type: 'expense',
          money: 20000,
          note: 'Ăn sáng',
          time: new Date(),
          pinned: false,
        },
        {
          type: 'expense',
          money: 15000,
          note: 'Vá xe',
          time: new Date(),
          pinned: false,
        },
        {
          type: 'income',
          money: 500000,
          note: 'Tiết kiệm',
          time: new Date(),
          pinned: false,
        },
      ],
    },
    {
      id: '2',
      name: 'Quỹ đen',
      unit: 'đ',
      color: 'orange',
      transactions: [
        {
          type: 'income',
          money: 6000000,
          note: 'Tiền lương',
          time: new Date(),
          pinned: true,
        },
        {
          type: 'expense',
          money: 20000,
          note: 'Ăn sáng',
          time: new Date(),
          pinned: false,
        },
        {
          type: 'expense',
          money: 25000,
          note: 'Vá lốp',
          time: new Date(),
          pinned: false,
        },
        {
          type: 'income',
          money: 500000,
          note: 'Tiết kiệm',
          time: new Date(),
          pinned: false,
        },
      ],
    },
    {
      id: '3',
      name: 'ATM',
      unit: '$',
      color: 'green',
      transactions: [
        {
          type: 'income',
          money: 6000000,
          note: 'Tiền lương',
          time: new Date(),
          pinned: true,
        },
        {
          type: 'expense',
          money: 20000,
          note: 'Ăn sáng',
          time: new Date(),
          pinned: false,
        },
        {
          type: 'expense',
          money: 15000,
          note: 'Vá xe',
          time: new Date(),
          pinned: false,
        },
        {
          type: 'income',
          money: 500000,
          note: 'Tiết kiệm',
          time: new Date(),
          pinned: false,
        },
      ],
    },
  ],
}

const store = Store.create(initialState)

export default store

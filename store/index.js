import Store from './model/Store'

const initialState = {
  current: 0,
  wallets: [
    {
      name: 'Default',
      unit: '$',
      transactions: [
        {
          id: 1,
          type: 'income',
          icon: '100',
          money: 6000000,
          note: 'Tiền lương',
          time: new Date(),
          pinned: true,
        },
        {
          id: 2,
          type: 'expense',
          icon: 'comet',
          money: 20000,
          note: 'Ăn sáng',
          time: new Date(),
          pinned: false,
        },
        {
          id: 3,
          type: 'expense',
          icon: 'bike',
          money: 15000,
          note: 'Vá xe',
          time: new Date(),
          pinned: false,
        },
        {
          id: 4,
          type: 'income',
          icon: 'moneybag',
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

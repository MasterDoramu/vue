import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {id: 1, title: 'сходить в магазин', date: new Date("2021-06-19"), comleted: false},
      {id: 2, title: 'сходить на собеседование', date: new Date("2021-06-21"), comleted: false},
      {id: 3, title: 'сходить за водой', date: new Date("2021-06-20"), comleted: false},
      {id: 4, title: 'заниматься программировнием', date: new Date(), comleted: false},
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})

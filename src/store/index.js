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
    addTask1(state, task){
      state.tasks.push(task)
    },
    deleteTask1(state, id){
      state.tasks = state.tasks.filter(item => item.id != id)
    },
  },
  actions: {
    addTasks(ctx, title){
      const task = {
        id: Date.now(), 
        title: title, 
        date: new Date(), 
        comleted: false
      }
      ctx.commit('addTask1', task)
    },
    deleteTasks(ctx, id){
      ctx.commit('deleteTask1', id)
    },
  },
  getters: {
    allTasks(state){
      return state.tasks
    }
  }
})

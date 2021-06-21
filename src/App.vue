<template>
  <div class="container">
    <div class="nav">
      <router-link class="link" to="/">Главная</router-link>
      <router-link class="link" to="/day">День</router-link>
      <router-link class="link" to="/week">Неделя</router-link>
      <router-link class="link" to="/month">Месяц</router-link>
      <router-link class="link" to="/settings">Настройки</router-link>
    </div>
    <div class="main">
      <router-view :tasks="tasks" @add-task="addTask" @delete-task="deleteTask"/>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      tasks: [
        {id: 1, title: 'сходить в магазин', date: new Date("2021-06-19"), comleted: false},
        {id: 2, title: 'сходить на собеседование', date: new Date("2021-06-21"), comleted: false},
        {id: 3, title: 'сходить за водой', date: new Date("2021-06-20"), comleted: false},
        {id: 4, title: 'заниматься программировнием', date: new Date(), comleted: false},
      ]
    }
  },
  methods: {
    addTask(task){
      this.tasks.push(task)
    },
    deleteTask(id){
      this.tasks = this.tasks.filter(item => item.id != id)
    },
  }
}
</script>


<style lang="scss" >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main{
  padding: 20px;

}

.nav{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: #FFB6C1;
  padding: 10px;
  height: 100vh;
}
.container{
  display: flex;
  justify-content: flex-start;
  background-color: #FDD9B5;
  // height: 100%;
}
.link{
 font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 26px;
  letter-spacing: 0px;
  word-spacing: 1.2px;
  color: #000000;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;
  text-transform: uppercase;
}
</style>

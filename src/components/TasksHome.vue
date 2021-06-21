<template>
  <div > 
    <div v-for="(task, index) in allTasks" :key="task.id" class="home__tasks">
      <input type="checkbox" v-model="task.comleted">
        Выполнено
      <p :class="{'home__task': task.comleted}" class="home__padding">{{index + 1}} - {{task.title}} | время: {{task.date.getDate()}}-{{task.date.getMonth()}}-{{task.date.getFullYear()}} {{task.date.getHours()}}:{{task.date.getMinutes()}}</p>
      <input type="checkbox"  @click="deleteTasks(task.id)">
        Удалить
    </div>

  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'tasks-home',
    computed: {
    ...mapGetters(["allTasks"])
  },
  methods: {
    ...mapActions(['deleteTasks']),

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
// <style lang="scss">
.home{
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 18px;

  color: #000000;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;

  &__title{
    font-size: 26px;
  }

  &__task{
    text-decoration: line-through;
    padding-left: 5px;
  }
  &__tasks{
    display: flex;
  }
  &__padding{
    padding: 0 25px;
  }
}

</style>

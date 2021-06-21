<template>
<div>
    <br>
    <div>Добавить новую задачу:</div>
    <input type="text" v-model="title" @keyup.enter="addTask">
</div>

</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'add-task',
  data() {
      return{
          title: ''
      }
  },
  methods: {
      ...mapActions(['addTasks']),
      addTask(){
          this.addTasks(this.title)
          this.title = ''
      }
  }
}
</script>
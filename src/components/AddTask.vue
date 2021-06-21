<template>
<div>
    <br>
    <div>Добавить новую задачу:</div>
    <input type="text" v-model="title" @keyup.enter="addTask">
</div>

</template>

<script>
export default {
  name: 'add-task',
  data() {
      return{
          title: ''
      }
  },
  methods: {
      addTask(){
          const task = {
              id: Date.now(), 
              title: this.title, 
              date: new Date(), 
              comleted: false
          }
          this.$emit('add-task', task)
          this.title = ''
      }
  }
}
</script>
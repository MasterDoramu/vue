<template>
<div class="home">
  <div class="home__title">
    Добро пожаловать в электронный планировщик, здесь вы можете научиться управлять своим временем<br><br>
    Здесь отображены все задачи:
  </div>
  <TasksHome/>
  <AddTask />
</div>

</template>

<script>
// @ is an alias to /src
import TasksHome from '@/components/TasksHome.vue'
import AddTask from '@/components/AddTask.vue'

export default {
  name: 'home',
  components: {
    TasksHome, 
    AddTask
  }
}
</script>

<style lang="scss" >
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
    display: flex;;
  }
}

</style>
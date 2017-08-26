<!--
 * Created by sam on 2017. 8. 26..
-->
<template>
  <ul>
    <todo-item
      v-for="(item, i) in items"
      :key="i"
      :name="item"
    ></todo-item>
  </ul>
</template>
    
<script lang="ts">
  import TodoItem from "./TodoItem.vue";

  export default {
    name: 'TodoList',
    components: {TodoItem},
    data() {
      return {
        items: ['A', 'B', 'C']
      }
    }
  }
</script>
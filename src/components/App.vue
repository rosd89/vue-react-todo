<!-- src/components/App.vue -->
<template>
    <todo-content>
        <todo-list></todo-list>
    </todo-content>
</template>

<script lang="ts">
    import TodoContent from "./todo/TodoContent.vue";
    import TodoList from "./todo/TodoList.vue";

    export default {
      components: {TodoList, TodoContent},
    };
</script>
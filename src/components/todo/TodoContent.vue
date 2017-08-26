<!--
 * Created by sam on 2017. 8. 26..
-->
<template>
  <div class="todo-content">
    <h1>Todo List</h1>
    <slot></slot>
  </div>
</template>
    
<style>
  .todo-content {
    width: 720px;
    background: #dddddd;
    margin: 0 auto;
  }
</style>
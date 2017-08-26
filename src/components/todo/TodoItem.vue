<!--
 * Created by sam on 2017. 8. 26..
-->
<template>
  <li>
    {{name}}
    <button class="btn"></button>
  </li>
</template>
    
<script lang="ts">
  export default {
    name: 'TodoItem',
    props: ['name']
  }
</script>

<style>
  .completed {
    text-decoration: line-through;
  }
</style>
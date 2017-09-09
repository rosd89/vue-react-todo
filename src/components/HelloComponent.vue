<!--
 * Created by sam on 2017. 9. 2..
-->
<template>
  <div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button @click="descrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
  import HelloComponent from './HelloComponent.ts'
  export default HelloComponent
</script>

<style>
  .greeting {
    font-size: 20px;
  }
</style>
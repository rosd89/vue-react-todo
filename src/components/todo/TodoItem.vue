<!--
 * Created by sam on 2017. 8. 26..
-->
<template>
  <li>{{name}}</li>
</template>
    
<script lang="ts">
  export default {
    name: 'TodoItem',
    props: ['name']
  }
</script>
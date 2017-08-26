<!-- src/components/App.vue -->
<template>
    <div>hello {{str}}</div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                str: "World"
            }
        }
    };
</script>
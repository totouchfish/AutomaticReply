<template>
  <div>
    <div>{{ message }}</div>
  </div>
</template>
<script setup>
import { reactive, ref, toRefs } from 'vue';

const message = 'Now you can use Composition API !';
const state = reactive({
  arr: ['a', '3'],
});
const { arr } = toRefs(state);
console.log(arr, arr.value);
</script>

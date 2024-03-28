<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="flex">
      <el-input
        class="input"
        v-model="message"
        placeholder="请输入内容"
      ></el-input>
      <el-button type="primary" class="send" @click="send()" :disabled="disable"
        >Element</el-button
      >
    </div>
    <div class="flex">
      <a-input v-model="message" class="input" placeholder="请输入内容" />
      <a-button type="primary" class="send" @click="send()" :disabled="disable">
        AntD
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const message = ref('');
const disable = computed(() => {
  return message.value === '' ? true : false;
});
function send() {
  console.log(message.value);
  if (message.value === '') {
    console.log('未获取到内容');
  } else {
    console.log('已触发发送');
  }
}
</script>
<style lang="less" scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>

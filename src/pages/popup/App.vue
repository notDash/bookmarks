<template>
  <Home />
  <Loading />
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import Home from './Home.vue'
</script>
<style  lang='less'>
@import "@/style/main.css";
* {
  margin: 0;
  padding: 0;
}
html {
  width: 800px;
  height: 600px;
  background: #FFFFFF;
  overflow: hidden;
}
</style>
<template>
  <header>
  </header>
</template>
<script setup lang='ts'>
import { ref, onMounted } from "vue";
const msg = ref("");
import { axios, useChrome } from "@/hooks";
// axios("test", {}, function () {
//   console.log(arguments);
// });
// useChrome(
//   "notifications.create",
//   {
//     type: "basic",
//     title: "主要标题",
//     message: "要显示的主要消息",
//     iconUrl: "static/img/icon.png",
//   },
//   (a) => {
//     console.log(a);
//   }
// );
useChrome("cookies.getAll", {
  url:'https://www.baidu.com'
}, (res) => {
  console.log(res);
  console.log('>>>>>>>>>>>>*****>>>>>');
});
</script>
<style  lang='less'>
</style>
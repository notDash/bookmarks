<template>
  <div v-if="loadingStore.getLoadingStatus" class="loading-wrapper">
    <svg t="1661216697948" class="loading-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11037" width="60" height="60"><path d="M563.2 819.2a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8z m-320.4608-153.6a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m592.7936 25.6a102.4 102.4 0 1 1 0 204.8 102.4 102.4 0 0 1 0-204.8zM947.2 477.1328a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 0 1 0-153.6zM128 307.2a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m782.6432-40.6016a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4zM409.6 0a153.6 153.6 0 1 1 0 307.2 153.6 153.6 0 0 1 0-307.2z m384 153.6a25.6 25.6 0 1 1 0 51.2 25.6 25.6 0 0 1 0-51.2z" fill="#1296db" p-id="11038"></path></svg>
  </div>
</template>
<script>
import { useLoadingStore } from '@/pages/popup/store/modules/loading'

export default {
  setup(props) {
    const loadingStore = useLoadingStore()
    return {
      loadingStore
    }
  }
}
</script>
<style scoped>
.loading-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10002;
  background: rgb(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes loading {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
.loading-icon {
  animation: loading 2s linear infinite;
}
</style>
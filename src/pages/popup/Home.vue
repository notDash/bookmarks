<template>
  <div>
    Home
  </div>
</template>
<script>

import { ref } from 'vue'

export default {
  setup(props) {

    const bookmarkTreeNodes = ref({})

    chrome.bookmarks.getTree((bookmarkTreeNodes) => {
      console.log('bookmarkTreeNodes: ', bookmarkTreeNodes)
      bookmarkTreeNodes.value = bookmarkTreeNodes
    });

    const remove = (id) => {
      chrome.bookmarks.remove(id)
    }

    const create = (config) => {
      chrome.bookmarks.create({
        parentId: '',
        title: '',
        url: ''
      })
    }

    const update = (id, config) => {
      chrome.bookmarks.update(id, {
        title: ''
      })
    }
    
    return {
      bookmarkTreeNodes,
      remove,
      create,
      update
    }
  }
}
</script>
<style scoped>

</style>
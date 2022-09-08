<template>
  <div class="page-home">
      <n-tabs type="line" animated>
        <n-tab-pane name="首页" tab="首页">
          <n-layout has-sider>
            <n-layout-sider
              collapse-mode="width"
              :width="400"
              content-style="padding: 24px;"
              bordered
            >
              <n-input round placeholder="输入名称进行搜索">
              </n-input>
              <n-divider title-placement="left" dashed>
              点击热门 Top5
              </n-divider>
              <n-divider title-placement="left" dashed>
              自定义常用标签
              </n-divider>
            </n-layout-sider>
            <n-layout-content content-style="padding: 24px;">
              平山道
            </n-layout-content>
          </n-layout>
        </n-tab-pane>
        <n-tab-pane name="书签管理" tab="书签管理">
          Hey Jude
        </n-tab-pane>
      </n-tabs>
  </div>
</template>
<script>

import { ref } from 'vue'
import { 
  NTabs, 
  NTabPane, 
  NInput, 
  NDivider, 
  NLayout,
  NLayoutSider,
  NLayoutContent
 } from 'naive-ui'

export default {
  components: {
    NInput,
    NTabs,
    NTabPane,
    NDivider,
    NLayout,
    NLayoutSider,
    NLayoutContent
  },
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
.page-home {
  padding: 20px;
}
</style>
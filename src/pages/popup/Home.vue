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
              <n-input v-model:value="pattern" round placeholder="输入名称进行搜索">
              </n-input>
              <n-divider title-placement="left" dashed>
              热门点击 Top5
              </n-divider>
              <n-divider title-placement="left" dashed>
              自定义常用标签
              </n-divider>
            </n-layout-sider>
            <n-layout-content content-style="padding: 24px;height: 500px;">
              <n-tree
                ref="treeInstRef"
                block-line
                :data="bookmarkTreeNodes"
                default-expand-all
                virtual-scroll
                style="height: 440px"
                :node-props="nodeProps"
              />
            </n-layout-content>
          </n-layout>
        </n-tab-pane>
        <n-tab-pane name="书签管理" tab="书签管理">
          Hey Jude
        </n-tab-pane>
      </n-tabs>
  </div>
</template>

<script lang="ts">

import { ref, defineComponent } from 'vue'
import { 
  NTabs, 
  NTabPane, 
  NInput, 
  NDivider, 
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NTree,
  TreeOption
 } from 'naive-ui'


export default defineComponent({
  components: {
    NInput,
    NTabs,
    NTabPane,
    NDivider,
    NLayout,
    NLayoutSider,
    NLayoutContent,
    NTree
  },
  setup(props) {

    const pattern = ref('')
    const bookmarkTreeNodes = ref<any[]>([])
  
    const formatTree = (tree: Array<any>, parentKey: string) => {
      let result = tree
      if (result && result.length > 0) {
        result = result.map((node, index) => {
          node.label = node.title
          if (!parentKey && !node.label) {
            node.label = '全部'
          }
          if (parentKey) {
            node.key = `${parentKey}-${index}`
          } else {
             node.key = '0'
          }
          
          if (node.children) {
            node.children = formatTree(node.children, node.key)
          }
          return node
        })
      }
      
      return result
    }

    chrome.bookmarks.getTree((bmTreeNodes: Array<any>) => {
      bookmarkTreeNodes.value = formatTree(bmTreeNodes, '')
    });

    const remove = (id: string) => {
      chrome.bookmarks.remove(id)
    }

    const create = () => {
      chrome.bookmarks.create({
        parentId: '',
        title: '',
        url: ''
      })
    }

    const update = (id: string) => {
      chrome.bookmarks.update(id, {
        title: ''
      })
    }

    const nodeProps = ({ option }: { option: TreeOption }) => {
        return {
          onClick () {
          }
        }
      }
    
    return {
      showIrrelevantNodes: ref(true),
      pattern,
      bookmarkTreeNodes,
      remove,
      create,
      update,
      nodeProps
    }
  }
})
</script>
<style scoped>
.page-home {
  padding: 20px;
}
</style>
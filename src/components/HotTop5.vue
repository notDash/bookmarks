<template>
    <div class="hot-top-5">
        <div v-for="(item, index) in searchHotItems" :key="index" class="bookmark-item">
            <a :href="item.url">{{item.title}}</a><n-icon @click="() => onItemDel(item)" class="icon-delete" :size="16"><TrashOutline /></n-icon>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { TrashOutline } from '@vicons/ionicons5'
import { NIcon } from "naive-ui"
import formItemDark from 'naive-ui/es/form/styles/dark'

export default defineComponent({
    components: {
        TrashOutline,
        NIcon
    },
    setup(props, context) {
        console.log(props)

        const searchHotIds = ref([])

        const searchHotItems = ref<any[]>([])

        /**
         * 热门书签前5个
         * @returns 热门书签前5个
         */
        const getSearchHotIds = (len: Number) => {
            const searchhots = localStorage.getItem('SEARCH_HOT_INS')
            const limitLen = len ? len : 5
            let hotIds = []
            let result = []
            if (searchhots) {
                hotIds = JSON.parse(searchhots)
               
                // 遍历， 拿到点击次数最多的5个。暂未考虑性能
                if (hotIds.length > limitLen) {
                    result = hotIds.sort(function(a: any, b: any) {
                        return b.times - a.times
                    }).slice(0, limitLen).map(function(item: any) {
                        return item
                    })
                    searchHotItems.value = result
                } else {
                    searchHotItems.value = hotIds
                }
            }
            console.log('result: .>>', result)
            searchHotIds.value = result
        }

        const nodeGet = (ids: Array<any>, cb: Function) => {
            const gettingBookmarks = chrome.bookmarks.get(ids)
            gettingBookmarks.then(cb, cb)
        }
        
        const initSearchHot = () => {
            getSearchHotIds(5)
            // if (searchHotIds.value && searchHotIds.value.length > 0) {    
            //     nodeGet(searchHotIds.value, (res: Array<any>) => {
            //         searchHotItems.value = res
            //     })
            // }
        }

        initSearchHot()
        
        const onItemDel = (item: any) => {
            const searchhots = localStorage.getItem('SEARCH_HOT_INS') || ''
            const hotIns = JSON.parse(searchhots)
            if (hotIns) {
                const res = hotIns.filter((data: any) => {
                    return data.id !== item.id
                })
                localStorage.setItem('SEARCH_HOT_INS', JSON.stringify(res))
                initSearchHot()
            }
        }


        return {
            onItemDel,
            getSearchHotIds,
            searchHotIds,
            searchHotItems,
            initSearchHot
        }
    },
})
</script>
<style lang="less" scoped>
.bookmark-item {
    display: flex;
    align-items: center;
    border-bottom: solid 1px #eee;
    padding: 6px 0;
}
.bookmark-item a {
    margin-right: 10px;
    text-decoration: none;
}
.icon-delete {
    cursor: pointer;
}
</style>
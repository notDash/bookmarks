<template>
    <div class="hot-top-5">
        <div v-for="(item, index) in searchHotItems" :key="index" class="bookmark-item">
            <a :href="item.url">{{item.title}}</a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
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
                searchHotItems.value = hotIds
                // 遍历， 拿到点击次数最多的5个。暂未考虑性能
                if (hotIds.length > limitLen) {
                    result = hotIds.sort(function(a: any, b: any) {
                        return b.times - a.times
                    }).slice(0, limitLen).map(function(item: any) {
                        return item.id + ''
                    })
                } else {
                    result = hotIds.map(function(item: any) {
                        return item.id + ''
                    })
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
        



        return {
            getSearchHotIds,
            searchHotIds,
            searchHotItems,
            initSearchHot
        }
    },
})
</script>

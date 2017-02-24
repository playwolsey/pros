<style>
.mwork-item {width:7rem;position:absolute;top:.05rem;bottom:.05rem;left:.05rem;right:.05rem;}
.mwork-item img {width:100%;}
</style>

<template>
<div id="mwork">
    <waterfall :line-gap="gap" :watch="works">
        <waterfall-slot v-for="(work, index) in works" :width="work.width" :height="work.height" :order="index" :key="work.id">
            <div class="mwork-item">
                <router-link :to="{name:'mdetail', params: {id:work.id}}"><img class="lazy" :src="work.cover" :alt="work.desc.name"></router-link>
            </div>
        </waterfall-slot>
    </waterfall>
</div>
</template>

<script>
import Waterfall from 'vue-waterfall/lib/waterfall.vue'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot.vue'

export default {
    data() {
        return {
            works: [],
            gap: 288 
        }
    },
    watch: {
        '$route': 'getWorks'
    },
    created() {
        this.getWorks();
        this.getGap();
    },
    methods: {
        getWorks() {
            let path = this.$route.path.split('/m/')[1];

            if (!path || path === 'all') {
                path = "work";
            }

            this.$http.jsonp('/res/data/' + path + '.json', {
                jsonp: "callback", 
                jsonpCallback: path 
            }, {
                emulateJSON: true
            }).then(response => {
                this.works = response.data.works
            }, response => {
                console.log(response)
            });
        },
        getGap() {
            this.gap = 7.2 *(+window.document.documentElement.style.fontSize.split('px')[0]);
        }
    },
    components: { Waterfall, WaterfallSlot }
}
</script>

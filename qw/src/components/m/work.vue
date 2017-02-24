<style>
.mwork-item {width:7rem;position:absolute;top:2px;bottom:2px;left:2px;right:2px;}
.mwork-item img {width:100%;}
</style>

<template>
<div id="mwork">
    <waterfall :line="line" :line-gap="288" :watch="works">
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
            works: []
        }
    },
    watch: {
        '$route': 'getWorks'
    },
    created() {
        this.getWorks();
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
        }
    },
    components: { Waterfall, WaterfallSlot }
}
</script>

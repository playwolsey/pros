<style>
.mwork-item {width:7rem;float:left;}
.mwork-item:nth-child(2n-1) {margin-right:.4rem;}
.mwork-item img {width:100%;}
</style>

<template>
<div id="mwork">
    <div class="mwork-wrap">
        <div class="mwork-item" v-for="work in works">
            <router-link :to="{name:'mdetail', params: {id:work.id}}"><img class="lazy" :src="work.cover" :alt="work.desc.name"></router-link>
        </div>
    </div>
</div>
</template>

<script>
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
    }
}
</script>

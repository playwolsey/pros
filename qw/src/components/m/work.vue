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
    mounted() {
        this.$http.jsonp('/res/data/work.json', {
            jsonp: "callback", 
            jsonpCallback: "work"
        }, {
            emulateJSON: true
        }).then(response => {
            console.log(response)
            this.works = response.data.works
        }, response => {
            console.log(response)
        })
    }
}
</script>

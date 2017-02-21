<style></style>

<template>
<div id="mwork">
    <div class="mwork-wrap">
        <div class="mwork-item" v-for="work in works">
            <router-link :to="{name:'mdetail', params: {id:work.id}}"><img class="lazy" src="/upfile/20170220/58aa5fbb39ce0.jpg"></router-link>
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


<template>
<div id="mwork">
    i am mwork
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
        this.$http.jsonp('/res/data/works.json', {
            jsonp: "callback", 
            jsonpCallback: "works"
        }, {
            emulateJSON: true
        }).then(response => {
            this.works = response.data.works
        }, response => {
            console.log(response)
        });
    }
}
</script>

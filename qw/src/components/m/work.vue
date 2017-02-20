
<template>
<div id="mwork">
</div>
</template>

<script>
import flexible from '../../javascript/flexible.js'

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
            this.works = response.data.works
        }, response => {
            console.log(response)
        });
    }
}
</script>

<style>
.detail-article-wrap .m-section {width:500px;}
.detail-article-wrap p {font-weight:600;}
.detail-img-wrap {margin-top:30px;}
.detail-img-wrap img {width:700px;margin:10px 0;}
</style>

<template>
<div id="detail">
    <div class="article-wrap detail-article-wrap">
        <article class="m-article">
            <h5 class="m-title">{{details.name}}</h5>
            <h5 class="m-title">{{details.ename}}</h5>
            <section class="m-section">
                <p>DESINGER：{{details.designer}}</p>
                <p>YEAR: {{details.year}}</p>
                <p>CLIENT: {{details.client}}</p>
            </section>
            <section class="m-section">
                <p v-for="desc in details.descs">{{desc}}</p>
            </section>
            <ul class="detail-img-wrap">
                <li v-for="img in details.imgs"><img :src="img"></li>
            </ul>
        </article>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            details: {}
        }
    },
    created() {
        let id = this.$route.path.split('/detail/')[1];

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location = "/m/detail/" + id;
        }

        this.getDetails(id);
    },
    methods: {
        getDetails(id) {
            this.$http.jsonp('/res/data/' + id + '.json', {
                jsonp: "callback", 
                jsonpCallback: id 
            }, {
                emulateJSON: true
            }).then(response => {
                this.details = response.data
            }, response => {
                console.log(response)
            });
        }
    }
}
</script>

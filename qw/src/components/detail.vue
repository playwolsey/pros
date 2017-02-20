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
            <h5 class="m-title">临平日料店</h5>
            <h5 class="m-title">LINPING SAKATE LZAKAYA</h5>
            <section class="m-section">
                <p>DESINER：Sun Quanwen</p>
                <p>YEAR: 2016</p>
                <p>CLIENT: LinPing Sakate Lzakaya</p>
            </section>
            <section class="m-section">
                <p>酒田居酒屋位于杭州临平。</p>
                <p>我们延续的日本传统居酒屋的精神、功能及美学理念，用现代的手法抽减传统。每一个日式元素我们都尽量简化，这种做减法的方式，在营造居酒屋传统浓郁氛围的同时，也透露出现代的精致感。</p>
            </section>
            <ul class="detail-img-wrap">
                <li><img src="http://www.quanwends.com/uploads/allimg/160726/2-160H6111624.jpg" alt=""></li>
                <li><img src="http://www.quanwends.com/uploads/allimg/160726/2-160H6111G6.jpg" alt=""></li>
                <li><img src="http://www.quanwends.com/uploads/allimg/160726/2-160H6111624.jpg" alt=""></li>
                <li><img src="http://www.quanwends.com/uploads/allimg/160726/2-160H6111G6.jpg" alt=""></li>
            </ul>
        </article>
    </div>
</div>
</template>

<script>
//export default {
//    data() {
//        return {
//            works: []
//        }
//    },
//    created() {
//        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//            window.location = "/m/detail";
//        }
//
//        this.getDetails();
//    },
//    methods: {
//        getDetails() {
//            let path = this.$route.path.split('/')[1];
//
//            this.$http.jsonp('/res/data/' + path + '.json', {
//                jsonp: "callback", 
//                jsonpCallback: path 
//            }, {
//                emulateJSON: true
//            }).then(response => {
//                this.works = response.data.works
//            }, response => {
//                console.log(response)
//            });
//        }
//    }
//}
</script>

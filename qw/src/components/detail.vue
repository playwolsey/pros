<style>
.detail-article-wrap .m-section {width:500px;}
.detail-article-wrap p {font-weight:600;}
.detail-img-wrap {margin-top:30px;}
.detail-img-wrap img {width:700px;margin:10px 0;}
#detail .copyright {color:#000;border-top:1px solid #DCDCDC;padding:20px 0 30px;}
.swiper-wrap {width:700px;margin:80px 0 30px;position:relative;}
.swiper-wrap img {width:213px;height:213px;}
div.swiper-button-next, div.swiper-button-prev {width:32px;height:32px;background-size:32px 32px;position:absolute;top:-20px;}
div.swiper-button-next {background-image:url(/res/img/next.png);}
div.swiper-button-prev {background-image:url(/res/img/back.png);}
.swiper-slide-next + div, .swiper-slide-active {-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:grayscale(100%);filter:gray;}
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
        <div class="swiper-wrap">
            <swiper :options="swiperOption">
                <swiper-slide v-for="slide in details.imgs"><img :src="slide"></swiper-slide>
            </swiper>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
    </div>
    <!--<div class="copyright">Copyrights of Hangzhou Quanwen Interior Design C,Ltd.</div>-->
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data() {
        return {
            details: {},
            swiperOption: {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    },
    created() {
        let id = this.$route.path.split('/detail/')[1];

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.$router.push({ name: 'mdetail', params: { id: id }})
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
    },
    components: { swiper, swiperSlide }
}
</script>

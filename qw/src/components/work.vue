<style>
.work-item {float:left;width:255px;margin-right:20px;position:relative;}
.work-item:nth-child(4n) {margin-right:0;}
.work-item img {width:255px;height:100%;min-height:30px;}
.work-item .work-item-cover {
    width: 100%;
    height: 100%;
    background: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, #000000 100%);
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: background .5s ease;
    -moz-transition: background .5s ease;
    -o-transition: background .5s ease;
    transition: background .5s ease;
    line-height: 1;
    color: #FFF;
}
.work-item a:hover .work-item-cover {opacity:1;filter:alpha(opacity=1);}
.work-item .work-item-cover .desc {position:absolute;left:20px;}
.work-item .work-item-cover .hd {font-size:13px;bottom:56px;}
.work-item .work-item-cover .bd {font-size:15px;bottom:38px;}
.work-item .work-item-cover .ft {font-size:12px;bottom:18px;}
</style>

<template>
<div id="work">
    <section class="work-wrap">
        <div class="work-item" v-for="work in works">
            <router-link :to="{path:'detail/work.id', query: {id:work.id}}">
                <img class="lazy" :src="work.cover" :alt="work.desc.name">
                <div class="work-item-cover">
                    <div class="desc hd"><p>{{work.desc.name}}</p></div>
                    <div class="desc bd"><p>{{work.desc.ename}}</p></div>
                    <div class="desc ft"><p>{{work.desc.tag}}</p></div>
                </div>
            </router-link>
        </div>
    </section>
    <!--<waterfall :line-gap="200" :watch="works">
        <waterfall-slot v-for="(item, index) in works" :width="255" :height="100" :order="index" :key="item.id">
            <div class="work-item" >
                <a href="/detail/3">
                    <img class="lazy" src="http://www.bobchen.cn/upfile/20161102/5819a05905d5f.jpg" alt="FOURS">
                    <div class="work-item-cover">
                        <div class="desc hd"><p>临平日料店</p></div>
                        <div class="desc bd"><p>LINPING SAKATE LZAKAYA</p></div>
                        <div class="desc ft"><p>2016 2016 Interior</p></div>
                    </div>
                </a>
            </div>
        </waterfall-slot>
        </waterfall>-->
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
    created() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.replace = "/m/work";
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
    },
    components: {
        Waterfall,
        WaterfallSlot
    }
}
</script>

<style>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, button, input, textarea, th, td {margin:0;padding:0;}
body, button, input, select, textarea {font: 12px/1 Avenir, Helvetica, "Mircosoft Yahei", Tahoma, Arial, "\5b8b\4f53", sans-serif;}
h1, h2, h3, h4, h5, h6 {font-family:Avenir-Black, Helvetica, "Microsoft Yahei"}
h1 {font-size:18px;}
h2 {font-size:16px;}
h3 {font-size:14px;}
h4, h5, h6 {font-size:100%;}
ul, ol { list-style: none; }
a, a:hover { text-decoration: none; }
fieldset, img { border: none; }
button, input, select, textarea { font-size: 100%; }
table {border-collapse:collapse;border-spacing:0;}
html {overflow-y:scroll;}
.view {width:1080px;margin:90px auto 0;}
.article-wrap {float:left;}
.m-article {margin-top:30px;}
.m-title, .m-section {font-size:13px;line-height:20px;}
.m-title {font-weight:bold;}
.m-section {margin-top:20px;}
.m-section p {font-family:Avenir, Helvetica, "Mircosoft Yahei";}
.m-line {border-bottom: 2px solid #000;width:15px;margin-top:15px;}
</style>

<template>
    <div id="app">
        <navbar v-show="!isMobile"></navbar>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
    name: 'app',
    data() {
        return {
            isMobile: false
        }
    },
    created() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.isMobile = true;
        }
    },
    components: { navbar }
}
</script>

<style>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, button, input, textarea, th, td {margin:0;padding:0;}
body, button, input, select, textarea {font: 12px/1 Avenir, Helvetica, "Mircosoft Yahei", Tahoma, Arial, "\5b8b\4f53", sans-serif;}
h1, h2, h3, h4, h5, h6 {font-family:Avenir-Black, Helvetica, "Microsoft Yahei"}
h1, h2, h3, h4, h5, h6 {font-size:100%;}
ul, ol {list-style:none;}
a, a:hover {text-decoration:none;}
fieldset, img {border:none;}
button, input, select, textarea {font-size:100%;}
table {border-collapse:collapse;border-spacing:0;}
html {overflow-y:scroll;}
[data-dpr="1"] body {font-size:12px;}
[data-dpr="2"] body {font-size:24px;}
[data-dpr="3"] body {font-size:36px;}
.view {width:1065px;margin:90px auto 0;}
.view .article-wrap {float:left;}
.view .m-article {margin-top:30px;}
.view .m-title, .view .m-section {font-size:13px;line-height:20px;}
.view .m-title {font-weight:bold;}
.view .m-section {margin-top:20px;}
.view .m-section p, mview .m-section p {font-family:Avenir, Helvetica, "Mircosoft Yahei";}
.view .m-line {border-bottom: 1.5px solid #000;width:15px;margin-top:15px;}
.mview {width:14.2rem;margin:.8rem auto 0;}
.mview .m-article {margin-top:.75rem;}
.mview .m-title, .mview .m-section {font-size:.3rem;line-height:1.125rem;}
.mview .m-section {margin-top:.5rem;}
.mview .m-line {border-bottom: 1.5px solid #000;width:.75rem;margin-top:.375rem;}
</style>

<template>
    <div id="app">
        <navbar v-show="!isMobile"></navbar>
        <mnavbar v-show="isMobile"></mnavbar>
        <router-view :class="[isMobile ? 'mview' : 'view']"></router-view>
    </div>
</template>

<script>
import navbar from './components/navbar.vue'
import mnavbar from './components/m/navbar.vue'

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
            this.flexible()
        }
    },
    methods: {
        flexible() {
            var h;
            var dpr = window.navigator.appVersion.match(/iphone/gi)?window.devicePixelRatio:1;
            var scale = 1 / dpr;
            var docEl = document.documentElement;
            var metaEl = document.createElement('meta');

            function setUnitA() {
                window.rem = docEl.getBoundingClientRect().width / 16;
                docEl.style.fontSize = window.rem + 'px';
            }

            window.dpr = dpr;
            window.addEventListener('resize', function() {
                clearTimeout(h);
                h = setTimeout(setUnitA, 300);
            }, false);
            window.addEventListener('pageshow', function(e) {
                if (e.persisted) {
                    clearTimeout(h);
                    h = setTimeout(setUnitA, 300);
                }
            }, false);

            docEl.setAttribute('data-dpr', dpr);
            metaEl.setAttribute('name', 'viewport');
            metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
            if (docEl.firstElementChild) {
                docEl.firstElementChild.appendChild(metaEl);
            } else {
                var wrap = document.createElement('div');
                wrap.appendChild(metaEl);
                document.write(wrap.innerHTML);
            }

            setUnitA()
        }
    },
    components: { 
        navbar,
        mnavbar
    }
}
</script>

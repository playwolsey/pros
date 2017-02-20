<style>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, fieldset, lengend, button, input, textarea, th, td {margin:0;padding:0;}
body, button, input, select, textarea {font: 12px/1 Avenir, Helvetica, "Mircosoft Yahei", Tahoma, Arial, "\5b8b\4f53", sans-serif;}
h1, h2, h3, h4, h5, h6 {font-family:Avenir-Black, Helvetica, "Microsoft Yahei"}
h1 {font-size:18px;}
h2 {font-size:16px;}
h3 {font-size:14px;}
h4, h5, h6 {font-size:100%;}
address, cite, dfn, em, var {font-style:normal;} 
code, kbd, pre, samp, tt {font-family: "Courier New", Courier, monospace;}
small { font-size: 12px; } 
ul, ol { list-style: none; }
a { text-decoration: none; }
a:hover { text-decoration: none; }
legend { color: #000; }
fieldset, img { border: none; }
button, input, select, textarea { font-size: 100%; }
table {border-collapse:collapse;border-spacing:0;}
hr {border:none;height:1px;}
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
        <navbar></navbar>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
    name: 'app',
    components: { navbar }
}
</script>


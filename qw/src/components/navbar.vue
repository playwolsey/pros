<style>
.navbar-wrap {height:80px;background:rgba(255,255,255,0.94);box-shadow:0px 6px 20px 0px rgba(0,0,0,0.12);position:fixed;z-index:99;left:0;top:0;right:0;}
.navbar-wrap.no-shadow {box-shadow:0 0 0 0;}
.navbar {height:24px;padding:30px 0;margin-bottom:10px;width:1080px;margin:0 auto;}
.navbar .navbar-brand {color:#000;letter-spacing:1.23px;float:left;height:24px;line-height:24px;font-weight:bold;font-size:16px;width:252px;position:relative;}
.navbar .navbar-brand h1 {font-size:16px;position:absolute;}
.navbar .navbar-brand .nav-brand-back {opacity:0;}
.navbar .navbar-brand:hover .nav-brand-back {opacity:1;}
.navbar .navbar-brand:hover .nav-brand-front {opacity:0;}
.navbar .nav {list-style:none;float:right;}
.navbar .nav li {float:left;color:#969696;}
.navbar .nav li a {font-size:16px;color:#969696;line-height:24px;padding:0 15px;}
.navbar .nav li:nth-child(4) a {padding-right:0;}
.navbar .nav li a:hover {color:#000;font-weight:600;}
.navbar .nav li a.router-link-active {color:#000;font-weight:600;}
.navbar .nav .subnav {float:right;height:24px;overflow:hidden;position:relative;line-height:24px;}
.navbar .subnav div a {float:none;color:#969696;padding:0 5px 10px;}
.slide-fade-enter-active {transition:all .5s ease;}
.slide-fade-leave {transition:all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0));}
.slide-fade-enter {transform:translateX(10px);opacity:0;}
.slide-fade-leave {transform:translate(-10px);opacity:0;}
 
</style>

<template>
<div id="navbar">
    <div :class="[isWork ? noShadowClass : '', wrapClass]"> 
        <div class="navbar"> 
            <a href="/" class="navbar-brand">
                <h1 class="nav-brand-front">QUANWEN DESIGN OFFICE.</h1>
                <h1 class="nav-brand-back">杭州全文室内设计</h1>
            </a>
            <ul class="nav"> 
                <li @mouseover="show=true" @mouseleave="show=false">
                    <router-link to="/work"><span class="nav-icon-text">WORK</span></router-link>
                    <transition name="slide-fade">
                        <div v-if="show" class="subnav">
                            <div>
                                <router-link to="/interior">Interior</router-link>
                                <router-link to="/architecture">Architecture</router-link>
                                <router-link to="/visual">Visual Design</router-link>
                            </div>
                        </div>
                    </transition>
                </li>  
                <li><span>/</span><router-link to="/about"><span class="nav-icon-text">ABOUT</span></router-link><span>/</span></li>  
                <li><router-link to="/contact"><span class="nav-icon-text">CONTACT</span></router-link><span>/</span></li>
                <li><router-link to="/job"><span class="nav-icon-text">JOB</span></router-link></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            wrapClass: 'navbar-wrap',
            noShadowClass: 'no-shadow',
            show: false,
            isWork: true
        }
    },
    created() {
        this.getIsWork();
    },
    watch: {
        '$route': 'getIsWork'
    },
    methods: {
        getIsWork() {
            let path = this.$route.path.split('/')[1];
            path || (path = 'work');

            if (path === 'work' || path === 'interior' || path === 'architecture' || path === 'visual') {
                this.isWork = true;
            } else {
                this.isWork = false;
            }
        }
    }
}
</script>

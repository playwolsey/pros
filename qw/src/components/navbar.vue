<style>
.navbar-wrap {height:90px;background:rgba(255,255,255,0.94);box-shadow:0px 6px 20px 0px rgba(0,0,0,0.12);position:fixed;z-index:99;left:0;top:0;right:0;}
.navbar {height:24px;padding:30px 0;margin-bottom:10px;width:1080px;margin:0 auto;}
.navbar h1 {float:left;height:24px;line-height:24px;font-weight:bold;font-size:16px;}
.navbar h1 .navbar-brand {color:#000;letter-spacing:1.23px;}
.navbar .nav {list-style:none;float:right;}
.navbar .nav > li {float:left;color:#969696;}
.navbar .nav > li > a {font-size:16px;color:#969696;line-height:24px;padding:0 15px;}
.navbar .nav > li > a:hover {color:#000;}
.navbar .nav > li > a.router-link-active {color:#000;font-weight:600;}
.navbar .nav .subnav {float:right;height:24px;overflow:hidden;position:relative;line-height:24px;width:0;}
.navbar .subnav div a {
    float:none;color:#969696;
    padding-bottom: 10px;
    -webkit-transition: none .5s ease;
    -moz-transition: none .5s ease;
    -o-transition: none .5s ease;
    transition: none .5s ease;}
</style>

<template>
<div id="navbar">
    <div class="navbar-wrap"> 
        <div class="navbar"> 
            <h1><a href="/" class="navbar-brand" @mouseover="showCompany" @mouseleave="showOrigin">{{company}}</a></h1>
            <ul class="nav"> 
                <li>
                    <router-link to="/work"><span class="nav-icon-text">WORK</span></router-link>
                    <div class="subnav">
                        <div>
                            <router-link to="/interior">Interior</router-link>
                            <router-link to="/architecture">Architecture</router-link>
                            <router-link to="/visual">Visual Design</router-link>
                        </div>
                    </div>
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
    data () {
        return {
            company: 'QUANWEN DESIGN OFFICE.'
        }
    },
    methods: {
        showCompany() {
            this.company = '杭州全文室内设计';
        },
        showOrigin() {
            this.company = 'QUANWEN DESIGN OFFICE.';
        }
    }
}
</script>

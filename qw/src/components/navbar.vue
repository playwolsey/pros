<style>
.navbar {height:24px;padding:30px 0;margin-bottom:10px;position:fixed;z-index:99;left:0;top:0;right:0;width:1080px;margin:0 auto;}
.navbar h1 {float:left;height:24px;line-height:24px;font-weight:normal;font-size:16px;}
.navbar h1 .navbar-brand {color:#000;}
.navbar .nav {list-style:none;float:right;}
.navbar .nav > li {float:left;}
.navbar .nav > li > a {display:block;color:#969696;font-size:16px;line-height:24px;padding:0 15px;}
.navbar .nav > li > a:hover {color:#000;}
.navbar .nav > li > a.router-link-active {color:#000;}
</style>

<template>
<div id="navbar">
    <div class="navbar"> 
        <h1><a href="/" class="navbar-brand" @mouseover="showCompany" @mouseleave="showOrigin">{{company}}</a></h1>
        <ul class="nav"> 
            <li><router-link to="/work"><span class="nav-icon-text">WORK</span></router-link></li>  
            <li><router-link to="/about"><span class="nav-icon-text">ABOUT</span></router-link></li>  
            <li><router-link to="/contact"><span class="nav-icon-text">CONTACT</span></router-link></li>
            <li><router-link to="/job"><span class="nav-icon-text">JOB</span></router-link></li>
        </ul>
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

<style>
.mnavbar-wrap {width:14.4rem;margin:0 auto;}
.mnavbar-wrap .mnavbar {font-size:.9rem;line-height:1rem;letter-spacing:1px;padding:.36rem 0;position:relative;border-bottom:8px solid #000000;}
.mnavbar-wrap .mnavbar .menu {font-size:.3375rem;position:absolute;right:10px;bottom:.33rem;}
.mnavbar-wrap .mnavbar .menu span {width:.925rem;height:3px;background:#000;margin-bottom:.15rem;-webkit-transition:all 0.3s ease;-moz-transition:all 0.3s ease;transition:all 0.3s ease;display:block;}
.mnavbar-wrap .menubox {font-size:1.35rem;line-height:1.8rem;margin-top:.3rem;}
.mnavbar-wrap .menubox a {color:#DCDCDC;}
.menubox-fade-enter-active {transition:all .5s cubic-bezier(0,0.5,0,1);}
.menubox-fade-leave-active {transition:all .5s cubic-bezier(0, 0, 5, 0, 1);}
.menubox-fade-enter, .slide-fade-leave-active {transform:translateY(-100px);opacity:0;}
.menu.open span:nth-child(1) {-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg);-moz-transform-origin:0 .2rem;-webkit-transform-origin:0 .2rem;transform-origin:0 .2rem}
.menu.open span:nth-child(2) {opacity:0;}
.menu.open span:nth-child(3) {-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform: rotate(-45deg);-moz-transform-origin:.34rem 0;-webkit-transform-origin:.34rem 0;transform-origin:.34rem 0;}
</style>

<template>
<div id="mnavbar">
    <div class="mnavbar-wrap">
        <div class="mnavbar"> 
            <h1>QUANWEN<br>DESIGN<br>OFFICE.</h1>
            <div :class="[show ? openClass : '', menuClass]" @click="show=!show">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <transition name="menubox-fade">
            <div class="menubox" v-if="show">
                <ul>
                    <li><router-link to="/m/work">Work</router-link></li>
                    <li><router-link to="/m/about">About</router-link></li>
                    <li><router-link to="/m/contact">Contact</router-link></li>
                    <li><router-link to="/m/job">Job</router-link></li>
                </ul>
            </div>
        </transition>
    </div>
</div>
</template>

<script>
export default {
    name: 'mnavbar',
    data() {
        return {
            menuClass: 'menu',
            openClass: 'open',
            show: false 
        }
    }
}
</script>

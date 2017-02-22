<style>
.mnavbar-wrap {width:14.4rem;margin:0 auto;}
.mnavbar-wrap .mnavbar {font-size:.9rem;line-height:1rem;letter-spacing:1px;padding:.36rem 0;position:relative;border-bottom:8px solid #000000;}
.mnavbar-wrap .mnavbar .back {width:1.6rem;height:1.6rem;background:url(/res/img/back.png) no-repeat center center;background-size:100% 100%;margin:.7rem 0 .7rem;}
.mnavbar-wrap .mnavbar .menu {font-size:.3375rem;position:absolute;right:10px;bottom:.33rem;}
.mnavbar-wrap .mnavbar .menu span {width:.925rem;height:0.1125rem;background:#000;margin-bottom:.15rem;-webkit-transition:all 0.3s ease;-moz-transition:all 0.3s ease;transition:all 0.3s ease;display:block;}
.mnavbar-wrap .menubox {font-size:1.35rem;line-height:1.35rem;margin-top:.5rem;}
.mnavbar-wrap .menubox a {color:#DCDCDC;}
.mnavbar-wrap .menubox a.router-link-active {color:#000;}
.menubox-fade-enter-active {transition:all .5s cubic-bezier(0,0.5,0,1);}
.menubox-fade-leave-active {transition:all .5s cubic-bezier(0, 0, 5, 0, 1);}
.menubox-fade-enter, .slide-fade-leave-active {transform:translateY(-100px);opacity:0;}
.menu.open span:nth-child(1) {-webkit-transform:rotate(38deg);transform:rotate(38deg);-webkit-transform-origin:left top;transform-origin:left top;}
.menu.open span:nth-child(2) {opacity:0;}
.menu.open span:nth-child(3) {-webkit-transform:rotate(-38deg);transform: rotate(-38deg);-webkit-transform-origin:left bottom;transform-origin:left bottom;}
</style>

<template>
<div id="mnavbar">
    <div class="mnavbar-wrap">
        <div class="mnavbar"> 
            <div v-if="!isDetail">
                <h1>QUANWEN<br>DESIGN<br>OFFICE.</h1>
                <div :class="[show ? openClass : '', menuClass]" @click="show=!show">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="back" v-if="isDetail" @click="back"></div>
        </div>
        <transition name="menubox-fade">
            <div class="menubox" v-if="show">
                <ul v-if="!isWork">
                    <li><router-link to="/m/work">Work</router-link></li>
                    <li><router-link to="/m/about">About</router-link></li>
                    <li><router-link to="/m/contact">Contact</router-link></li>
                    <li><router-link to="/m/job">Job</router-link></li>
                </ul>
                <ul v-if="isWork">
                    <li><router-link to="/m/interior">Interior</router-link></li>
                    <li><router-link to="/m/architecture">Architecture</router-link></li>
                    <li><router-link to="/m/visual">Visual Design</router-link></li>
                    <li><router-link to="/m/all">All</router-link></li>
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
            show: false,
            isWork: false,
            isDetail: false
        }
    },
    watch: {
        '$route': 'getIsDetail'
    },
    created() {
        this.getIsDetail();
    },
    methods: {
        getIsDetail() {
            let path = this.$route.path;

            if (path.indexOf('detail') > -1) {
                this.isDetail = true;
                this.show = false;
            } else {
                this.isDetail = false;
            }

            if (path.indexOf('work') > -1) {
                this.isWork = true;
            } else {
                this.isWork = false;
            }
        },
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

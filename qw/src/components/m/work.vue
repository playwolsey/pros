
<template>
<div id="mwork">
</div>
</template>

<script>
//import flexible from '../../javascript/flexible.js'

export default {
    data() {
        return {
            works: []
        }
    },
    mounted() {
        this.flexible()

        this.$http.jsonp('/res/data/work.json', {
            jsonp: "callback", 
            jsonpCallback: "work"
        }, {
            emulateJSON: true
        }).then(response => {
            this.works = response.data.works
        }, response => {
            console.log(response)
        })
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
    }
}
</script>

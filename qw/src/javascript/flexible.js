function flexible() {
    function b() {
        window.rem = f.getBoundingClientRect().width / 16, f.style.fontSize = window.rem + "px"
    }
    var c, d = window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1,
        e = 1 / d,
        f = document.documentElement,
        g = document.createElement("meta");
    if (window.dpr = d, window.addEventListener("resize", function() {
        clearTimeout(c), c = setTimeout(b, 300)
    }, !1), window.addEventListener("pageshow", function(a) {
        window.persisted && (clearTimeout(c), c = setTimeout(b, 300))
    }, !1), f.setAttribute("data-dpr", d), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + e + ", maximum-scale=" + e + ", minimum-scale=" + e + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g);
    else {
        var h = document.createElement("div");
        h.appendChild(g), document.write(h.innerHTML)
    }
    b()
}

export default {
    flexible    
}

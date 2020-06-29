window.Modernizr = function(e, t, n) {
    function r(e) {
        b.cssText = e
    }
    function o(e, t) {
        return r(S.join(e + ";") + (t || ""))
    }
    function a(e, t) {
        return typeof e === t
    }
    function i(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function c(e, t) {
        for (var r in e) {
            var o = e[r];
            if (!i(o, "-") && b[o] !== n)
                return "pfx" == t ? o : !0
        }
        return !1
    }
    function s(e, t, r) {
        for (var o in e) {
            var i = t[e[o]];
            if (i !== n)
                return r === !1 ? e[o] : a(i, "function") ? i.bind(r || t) : i
        }
        return !1
    }
    function u(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1)
          , o = (e + " " + k.join(r + " ") + r).split(" ");
        return a(t, "string") || a(t, "undefined") ? c(o, t) : (o = (e + " " + T.join(r + " ") + r).split(" "),
        s(o, t, n))
    }
    function l() {
        p.input = function(n) {
            for (var r = 0, o = n.length; o > r; r++)
                j[n[r]] = !!(n[r] in E);
            return j.list && (j.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)),
            j
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        p.inputtypes = function(e) {
            for (var r, o, a, i = 0, c = e.length; c > i; i++)
                E.setAttribute("type", o = e[i]),
                r = "text" !== E.type,
                r && (E.value = x,
                E.style.cssText = "position:absolute;visibility:hidden;",
                /^range$/.test(o) && E.style.WebkitAppearance !== n ? (g.appendChild(E),
                a = t.defaultView,
                r = a.getComputedStyle && "textfield" !== a.getComputedStyle(E, null ).WebkitAppearance && 0 !== E.offsetHeight,
                g.removeChild(E)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? E.checkValidity && E.checkValidity() === !1 : E.value != x)),
                P[e[i]] = !!r;
            return P
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d, f, m = "2.8.3", p = {}, h = !0, g = t.documentElement, v = "modernizr", y = t.createElement(v), b = y.style, E = t.createElement("input"), x = ":)", w = {}.toString, S = " -webkit- -moz- -o- -ms- ".split(" "), C = "Webkit Moz O ms", k = C.split(" "), T = C.toLowerCase().split(" "), N = {
        svg: "http://www.w3.org/2000/svg"
    }, M = {}, P = {}, j = {}, $ = [], D = $.slice, F = function(e, n, r, o) {
        var a, i, c, s, u = t.createElement("div"), l = t.body, d = l || t.createElement("body");
        if (parseInt(r, 10))
            for (; r--; )
                c = t.createElement("div"),
                c.id = o ? o[r] : v + (r + 1),
                u.appendChild(c);
        return a = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""),
        u.id = v,
        (l ? u : d).innerHTML += a,
        d.appendChild(u),
        l || (d.style.background = "",
        d.style.overflow = "hidden",
        s = g.style.overflow,
        g.style.overflow = "hidden",
        g.appendChild(d)),
        i = n(u, e),
        l ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d),
        g.style.overflow = s),
        !!i
    }
    , z = function(t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n)
            return n(t) && n(t).matches || !1;
        var r;
        return F("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
            r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null ) : t.currentStyle).position
        }),
        r
    }
    , A = function() {
        function e(e, o) {
            o = o || t.createElement(r[e] || "div"),
            e = "on" + e;
            var i = e in o;
            return i || (o.setAttribute || (o = t.createElement("div")),
            o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""),
            i = a(o[e], "function"),
            a(o[e], "undefined") || (o[e] = n),
            o.removeAttribute(e))),
            o = null ,
            i
        }
        var r = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e
    }(), L = {}.hasOwnProperty;
    f = a(L, "undefined") || a(L.call, "undefined") ? function(e, t) {
        return t in e && a(e.constructor.prototype[t], "undefined")
    }
     : function(e, t) {
        return L.call(e, t)
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t)
            throw new TypeError;
        var n = D.call(arguments, 1)
          , r = function() {
            if (this instanceof r) {
                var o = function() {}
                ;
                o.prototype = t.prototype;
                var a = new o
                  , i = t.apply(a, n.concat(D.call(arguments)));
                return Object(i) === i ? i : a
            }
            return t.apply(e, n.concat(D.call(arguments)))
        }
        ;
        return r
    }
    ),
    M.flexbox = function() {
        return u("flexWrap")
    }
    ,
    M.flexboxlegacy = function() {
        return u("boxDirection")
    }
    ,
    M.canvas = function() {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }
    ,
    M.canvastext = function() {
        return !(!p.canvas || !a(t.createElement("canvas").getContext("2d").fillText, "function"))
    }
    ,
    M.webgl = function() {
        return !!e.WebGLRenderingContext
    }
    ,
    M.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : F(["@media (", S.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = 9 === e.offsetTop
        }),
        n
    }
    ,
    M.geolocation = function() {
        return "geolocation" in navigator
    }
    ,
    M.postmessage = function() {
        return !!e.postMessage
    }
    ,
    M.websqldatabase = function() {
        return !!e.openDatabase
    }
    ,
    M.indexedDB = function() {
        return !!u("indexedDB", e)
    }
    ,
    M.hashchange = function() {
        return A("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }
    ,
    M.history = function() {
        return !(!e.history || !history.pushState)
    }
    ,
    M.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }
    ,
    M.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e
    }
    ,
    M.rgba = function() {
        return r("background-color:rgba(150,255,150,.5)"),
        i(b.backgroundColor, "rgba")
    }
    ,
    M.hsla = function() {
        return r("background-color:hsla(120,40%,100%,.5)"),
        i(b.backgroundColor, "rgba") || i(b.backgroundColor, "hsla")
    }
    ,
    M.multiplebgs = function() {
        return r("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(b.background)
    }
    ,
    M.backgroundsize = function() {
        return u("backgroundSize")
    }
    ,
    M.borderimage = function() {
        return u("borderImage")
    }
    ,
    M.borderradius = function() {
        return u("borderRadius")
    }
    ,
    M.boxshadow = function() {
        return u("boxShadow")
    }
    ,
    M.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }
    ,
    M.opacity = function() {
        return o("opacity:.55"),
        /^0.55$/.test(b.opacity)
    }
    ,
    M.cssanimations = function() {
        return u("animationName")
    }
    ,
    M.csscolumns = function() {
        return u("columnCount")
    }
    ,
    M.cssgradients = function() {
        var e = "background-image:"
          , t = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
          , n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + S.join(n + e)).slice(0, -e.length)),
        i(b.backgroundImage, "gradient")
    }
    ,
    M.cssreflections = function() {
        return u("boxReflect")
    }
    ,
    M.csstransforms = function() {
        return !!u("transform")
    }
    ,
    M.csstransforms3d = function() {
        var e = !!u("perspective");
        return e && "webkitPerspective" in g.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }),
        e
    }
    ,
    M.csstransitions = function() {
        return u("transition")
    }
    ,
    M.fontface = function() {
        var e;
        return F('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
            var o = t.getElementById("smodernizr")
              , a = o.sheet || o.styleSheet
              , i = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "";
            e = /src/i.test(i) && 0 === i.indexOf(r.split(" ")[0])
        }),
        e
    }
    ,
    M.generatedcontent = function() {
        var e;
        return F(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = t.offsetHeight >= 3
        }),
        e
    }
    ,
    M.video = function() {
        var e = t.createElement("video")
          , n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n),
            n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {}
        return n
    }
    ,
    M.audio = function() {
        var e = t.createElement("audio")
          , n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n),
            n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) {}
        return n
    }
    ,
    M.localstorage = function() {
        try {
            return localStorage.setItem(v, v),
            localStorage.removeItem(v),
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    M.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v),
            sessionStorage.removeItem(v),
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    M.webworkers = function() {
        return !!e.Worker
    }
    ,
    M.applicationcache = function() {
        return !!e.applicationCache
    }
    ,
    M.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
    }
    ,
    M.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>",
        (e.firstChild && e.firstChild.namespaceURI) == N.svg
    }
    ,
    M.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(N.svg, "animate")))
    }
    ,
    M.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")))
    }
    ;
    for (var H in M)
        f(M, H) && (d = H.toLowerCase(),
        p[d] = M[H](),
        $.push((p[d] ? "" : "no-") + d));
    return p.input || l(),
    p.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var r in e)
                f(e, r) && p.addTest(r, e[r]);
        else {
            if (e = e.toLowerCase(),
            p[e] !== n)
                return p;
            t = "function" == typeof t ? t() : t,
            "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e),
            p[e] = t
        }
        return p
    }
    ,
    r(""),
    y = E = null ,
    function(e, t) {
        function n(e, t) {
            var n = e.createElement("p")
              , r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            r.insertBefore(n.lastChild, r.firstChild)
        }
        function r() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function o(e) {
            var t = v[e[h]];
            return t || (t = {},
            g++,
            e[h] = g,
            v[g] = t),
            t
        }
        function a(e, n, r) {
            if (n || (n = t),
            l)
                return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e),
            !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }
        function i(e, n) {
            if (e || (e = t),
            l)
                return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, c = r(), s = c.length; s > i; i++)
                a.createElement(c[i]);
            return a
        }
        function c(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(n) {
                return y.shivMethods ? a(n, e, t) : t.createElem(n)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(y, t.frag)
        }
        function s(e) {
            e || (e = t);
            var r = o(e);
            return !y.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            l || c(e, r),
            e
        }
        var u, l, d = "3.7.0", f = e.html5 || {}, m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h = "_html5shiv", g = 0, v = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                u = "hidden" in e,
                l = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                u = !0,
                l = !0
            }
        }();
        var y = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: d,
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: l,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: s,
            createElement: a,
            createDocumentFragment: i
        };
        e.html5 = y,
        s(t)
    }(this, t),
    p._version = m,
    p._prefixes = S,
    p._domPrefixes = T,
    p._cssomPrefixes = k,
    p.mq = z,
    p.hasEvent = A,
    p.testProp = function(e) {
        return c([e])
    }
    ,
    p.testAllProps = u,
    p.testStyles = F,
    p.prefixed = function(e, t, n) {
        return t ? u(e, t, n) : u(e, "pfx")
    }
    ,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + $.join(" ") : ""),
    p
}(this, this.document);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 * 
 * HERO: Customized to support raw cookie values (no escaping)
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    
    var pluses = /\+/g;
    
    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }
    
    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }
    
    function stringifyCookieValue(value, raw) {
        // HERO: added raw
        if (raw)
            return value;
        return encode(config.json ? JSON.stringify(value) : String(value));
    }
    
    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        
        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }
    
    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    
    var config = $.cookie = function(key, value, options) {
        
        // Write
        
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            
            if (typeof options.expires === 'number') {
                var days = options.expires
                  , t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }
            
            return ( document.cookie = [
            encode(key), '=', stringifyCookieValue(value, options.raw), // HERO: added raw
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '', 
            options.domain ? '; domain=' + options.domain : '', 
            options.secure ? '; secure' : ''
            ].join('')) ;
        }
        
        // Read
        
        var result = key ? undefined : {};
        
        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');
            
            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }
            
            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        
        return result;
    }
    ;
    
    config.defaults = {};
    
    $.removeCookie = function(key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }
        
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, {
            expires: -1
        }));
        return !$.cookie(key);
    }
    ;

}));

/*!
 * Knockout JavaScript library v3.2.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {
    (function(p) {
        var s = this || (0,
        eval)("this")
          , v = s.document
          , L = s.navigator
          , w = s.jQuery
          , D = s.JSON;
        (function(p) {
            "function" === typeof require && "object" === typeof exports && "object" === typeof module ? p(module.exports || exports, require) : "function" === typeof define && define.amd ? define(["exports", "require"], p) : p(s.ko = {})
        })(function(M, N) {
            function H(a, d) {
                return null  === a || typeof a in R ? a === d : !1
            }
            function S(a, d) {
                var c;
                return function() {
                    c || (c = setTimeout(function() {
                        c = p;
                        a()
                    }, d))
                }
            }
            function T(a, d) {
                var c;
                return function() {
                    clearTimeout(c);
                    c = setTimeout(a, d)
                }
            }
            function I(b, d, c, e) {
                a.d[b] = {
                    init: function(b, h, k, f, m) {
                        var l, q;
                        a.s(function() {
                            var f = a.a.c(h())
                              , k = !c !== !f
                              , z = !q;
                            if (z || d || k !== l)
                                z && a.Y.la() && (q = a.a.ia(a.f.childNodes(b), !0)),
                                k ? (z || a.f.T(b, a.a.ia(q)),
                                a.Ca(e ? e(m, f) : m, b)) : a.f.ja(b),
                                l = k
                        }, null , {
                            o: b
                        });
                        return {
                            controlsDescendantBindings: !0
                        }
                    }
                };
                a.h.ha[b] = !1;
                a.f.Q[b] = !0
            }
            var a = "undefined" !== typeof M ? M : {};
            a.b = function(b, d) {
                for (var c = b.split("."), e = a, g = 0; g < c.length - 1; g++)
                    e = e[c[g]];
                e[c[c.length - 1]] = d
            }
            ;
            a.A = function(a, d, c) {
                a[d] = c
            }
            ;
            a.version = "3.2.0";
            a.b("version", a.version);
            a.a = function() {
                function b(a, b) {
                    for (var c in a)
                        a.hasOwnProperty(c) && b(c, a[c])
                }
                function d(a, b) {
                    if (b)
                        for (var c in b)
                            b.hasOwnProperty(c) && (a[c] = b[c]);
                    return a
                }
                function c(a, b) {
                    a.__proto__ = b;
                    return a
                }
                var e = {
                    __proto__: []
                } instanceof Array
                  , g = {}
                  , h = {};
                g[L && /Firefox\/2/i.test(L.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                g.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                b(g, function(a, b) {
                    if (b.length)
                        for (var c = 
                        0, d = b.length; c < d; c++)
                            h[b[c]] = a
                });
                var k = {
                    propertychange: !0
                }
                  , f = v && function() {
                    for (var a = 3, b = v.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e",
                    c[0]; )
                        ;
                    return 4 < a ? a : p
                }();
                return {
                    vb: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                    u: function(a, b) {
                        for (var c = 0, d = a.length; c < d; c++)
                            b(a[c], c)
                    },
                    m: function(a, b) {
                        if ("function" == typeof Array.prototype.indexOf)
                            return Array.prototype.indexOf.call(a, b);
                        for (var c = 0, d = a.length; c < d; c++)
                            if (a[c] === 
                            b)
                                return c;
                        return -1
                    },
                    qb: function(a, b, c) {
                        for (var d = 0, f = a.length; d < f; d++)
                            if (b.call(c, a[d], d))
                                return a[d];
                        return null 
                    },
                    ua: function(m, b) {
                        var c = a.a.m(m, b);
                        0 < c ? m.splice(c, 1) : 0 === c && m.shift()
                    },
                    rb: function(m) {
                        m = m || [];
                        for (var b = [], c = 0, d = m.length; c < d; c++)
                            0 > a.a.m(b, m[c]) && b.push(m[c]);
                        return b
                    },
                    Da: function(a, b) {
                        a = a || [];
                        for (var c = [], d = 0, f = a.length; d < f; d++)
                            c.push(b(a[d], d));
                        return c
                    },
                    ta: function(a, b) {
                        a = a || [];
                        for (var c = [], d = 0, f = a.length; d < f; d++)
                            b(a[d], d) && c.push(a[d]);
                        return c
                    },
                    ga: function(a, b) {
                        if (b instanceof 
                        Array)
                            a.push.apply(a, b);
                        else
                            for (var c = 0, d = b.length; c < d; c++)
                                a.push(b[c]);
                        return a
                    },
                    ea: function(b, c, d) {
                        var f = a.a.m(a.a.Xa(b), c);
                        0 > f ? d && b.push(c) : d || b.splice(f, 1)
                    },
                    xa: e,
                    extend: d,
                    za: c,
                    Aa: e ? c : d,
                    G: b,
                    na: function(a, b) {
                        if (!a)
                            return a;
                        var c = {}, d;
                        for (d in a)
                            a.hasOwnProperty(d) && (c[d] = b(a[d], d, a));
                        return c
                    },
                    Ka: function(b) {
                        for (; b.firstChild; )
                            a.removeNode(b.firstChild)
                    },
                    oc: function(b) {
                        b = a.a.S(b);
                        for (var c = v.createElement("div"), d = 0, f = b.length; d < f; d++)
                            c.appendChild(a.R(b[d]));
                        return c
                    },
                    ia: function(b, c) {
                        for (var d = 
                        0, f = b.length, e = []; d < f; d++) {
                            var k = b[d].cloneNode(!0);
                            e.push(c ? a.R(k) : k)
                        }
                        return e
                    },
                    T: function(b, c) {
                        a.a.Ka(b);
                        if (c)
                            for (var d = 0, f = c.length; d < f; d++)
                                b.appendChild(c[d])
                    },
                    Lb: function(b, c) {
                        var d = b.nodeType ? [b] : b;
                        if (0 < d.length) {
                            for (var f = d[0], e = f.parentNode, k = 0, g = c.length; k < g; k++)
                                e.insertBefore(c[k], f);
                            k = 0;
                            for (g = d.length; k < g; k++)
                                a.removeNode(d[k])
                        }
                    },
                    ka: function(a, b) {
                        if (a.length) {
                            for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b; )
                                a.shift();
                            if (1 < a.length) {
                                var c = a[0]
                                  , d = a[a.length - 1];
                                for (a.length = 
                                0; c !== d; )
                                    if (a.push(c),
                                    c = c.nextSibling,
                                    !c)
                                        return;
                                a.push(d)
                            }
                        }
                        return a
                    },
                    Nb: function(a, b) {
                        7 > f ? a.setAttribute("selected", b) : a.selected = b
                    },
                    cb: function(a) {
                        return null  === a || a === p ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    },
                    vc: function(a, b) {
                        a = a || "";
                        return b.length > a.length ? !1 : a.substring(0, b.length) === b
                    },
                    cc: function(a, b) {
                        if (a === b)
                            return !0;
                        if (11 === a.nodeType)
                            return !1;
                        if (b.contains)
                            return b.contains(3 === a.nodeType ? a.parentNode : a);
                        if (b.compareDocumentPosition)
                            return 16 == (b.compareDocumentPosition(a) & 
                            16);
                        for (; a && a != b; )
                            a = a.parentNode;
                        return !!a
                    },
                    Ja: function(b) {
                        return a.a.cc(b, b.ownerDocument.documentElement)
                    },
                    ob: function(b) {
                        return !!a.a.qb(b, a.a.Ja)
                    },
                    t: function(a) {
                        return a && a.tagName && a.tagName.toLowerCase()
                    },
                    n: function(b, c, d) {
                        var e = f && k[c];
                        if (!e && w)
                            w(b).bind(c, d);
                        else if (e || "function" != typeof b.addEventListener)
                            if ("undefined" != typeof b.attachEvent) {
                                var g = function(a) {
                                    d.call(b, a)
                                }
                                  , h = "on" + c;
                                b.attachEvent(h, g);
                                a.a.w.da(b, function() {
                                    b.detachEvent(h, g)
                                })
                            } else
                                throw Error("Browser doesn't support addEventListener or attachEvent");
                        else
                            b.addEventListener(c, d, !1)
                    },
                    oa: function(b, c) {
                        if (!b || !b.nodeType)
                            throw Error("element must be a DOM node when calling triggerEvent");
                        var d;
                        "input" === a.a.t(b) && b.type && "click" == c.toLowerCase() ? (d = b.type,
                        d = "checkbox" == d || "radio" == d) : d = !1;
                        if (w && !d)
                            w(b).trigger(c);
                        else if ("function" == typeof v.createEvent)
                            if ("function" == typeof b.dispatchEvent)
                                d = v.createEvent(h[c] || "HTMLEvents"),
                                d.initEvent(c, !0, !0, s, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b),
                                b.dispatchEvent(d);
                            else
                                throw Error("The supplied element doesn't support dispatchEvent");
                        else if (d && b.click)
                            b.click();
                        else if ("undefined" != typeof b.fireEvent)
                            b.fireEvent("on" + c);
                        else
                            throw Error("Browser doesn't support triggering events");
                    },
                    c: function(b) {
                        return a.C(b) ? b() : b
                    },
                    Xa: function(b) {
                        return a.C(b) ? b.v() : b
                    },
                    Ba: function(b, c, d) {
                        if (c) {
                            var f = /\S+/g
                              , e = b.className.match(f) || [];
                            a.a.u(c.match(f), function(b) {
                                a.a.ea(e, b, d)
                            });
                            b.className = e.join(" ")
                        }
                    },
                    bb: function(b, c) {
                        var d = a.a.c(c);
                        if (null  === d || d === p)
                            d = "";
                        var f = a.f.firstChild(b);
                        !f || 3 != f.nodeType || a.f.nextSibling(f) ? a.f.T(b, [b.ownerDocument.createTextNode(d)]) : 
                        f.data = d;
                        a.a.fc(b)
                    },
                    Mb: function(a, b) {
                        a.name = b;
                        if (7 >= f)
                            try {
                                a.mergeAttributes(v.createElement("<input name='" + a.name + "'/>"), !1)
                            } catch (c) {}
                    },
                    fc: function(a) {
                        9 <= f && (a = 1 == a.nodeType ? a : a.parentNode,
                        a.style && (a.style.zoom = a.style.zoom))
                    },
                    dc: function(a) {
                        if (f) {
                            var b = a.style.width;
                            a.style.width = 0;
                            a.style.width = b
                        }
                    },
                    sc: function(b, c) {
                        b = a.a.c(b);
                        c = a.a.c(c);
                        for (var d = [], f = b; f <= c; f++)
                            d.push(f);
                        return d
                    },
                    S: function(a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++)
                            b.push(a[c]);
                        return b
                    },
                    yc: 6 === f,
                    zc: 7 === f,
                    L: f,
                    xb: function(b, c) {
                        for (var d = 
                        a.a.S(b.getElementsByTagName("input")).concat(a.a.S(b.getElementsByTagName("textarea"))), f = "string" == typeof c ? function(a) {
                            return a.name === c
                        }
                         : function(a) {
                            return c.test(a.name)
                        }
                        , e = [], k = d.length - 1; 0 <= k; k--)
                            f(d[k]) && e.push(d[k]);
                        return e
                    },
                    pc: function(b) {
                        return "string" == typeof b && (b = a.a.cb(b)) ? D && D.parse ? D.parse(b) : (new Function("return " + b))() : null 
                    },
                    eb: function(b, c, d) {
                        if (!D || !D.stringify)
                            throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return D.stringify(a.a.c(b), c, d)
                    },
                    qc: function(c, d, f) {
                        f = f || {};
                        var e = f.params || {}
                          , k = f.includeFields || this.vb
                          , g = c;
                        if ("object" == typeof c && "form" === a.a.t(c))
                            for (var g = c.action, h = k.length - 1; 0 <= h; h--)
                                for (var r = a.a.xb(c, k[h]), E = r.length - 1; 0 <= E; E--)
                                    e[r[E].name] = r[E].value;
                        d = a.a.c(d);
                        var y = v.createElement("form");
                        y.style.display = "none";
                        y.action = g;
                        y.method = "post";
                        for (var p in d)
                            c = v.createElement("input"),
                            c.type = "hidden",
                            c.name = p,
                            c.value = a.a.eb(a.a.c(d[p])),
                            y.appendChild(c);
                        b(e, function(a, b) {
                            var c = v.createElement("input");
                            c.type = "hidden";
                            c.name = a;
                            c.value = b;
                            y.appendChild(c)
                        });
                        v.body.appendChild(y);
                        f.submitter ? f.submitter(y) : y.submit();
                        setTimeout(function() {
                            y.parentNode.removeChild(y)
                        }, 0)
                    }
                }
            }();
            a.b("utils", a.a);
            a.b("utils.arrayForEach", a.a.u);
            a.b("utils.arrayFirst", a.a.qb);
            a.b("utils.arrayFilter", a.a.ta);
            a.b("utils.arrayGetDistinctValues", a.a.rb);
            a.b("utils.arrayIndexOf", a.a.m);
            a.b("utils.arrayMap", a.a.Da);
            a.b("utils.arrayPushAll", a.a.ga);
            a.b("utils.arrayRemoveItem", a.a.ua);
            a.b("utils.extend", a.a.extend);
            a.b("utils.fieldsIncludedWithJsonPost", 
            a.a.vb);
            a.b("utils.getFormFields", a.a.xb);
            a.b("utils.peekObservable", a.a.Xa);
            a.b("utils.postJson", a.a.qc);
            a.b("utils.parseJson", a.a.pc);
            a.b("utils.registerEventHandler", a.a.n);
            a.b("utils.stringifyJson", a.a.eb);
            a.b("utils.range", a.a.sc);
            a.b("utils.toggleDomNodeCssClass", a.a.Ba);
            a.b("utils.triggerEvent", a.a.oa);
            a.b("utils.unwrapObservable", a.a.c);
            a.b("utils.objectForEach", a.a.G);
            a.b("utils.addOrRemoveItem", a.a.ea);
            a.b("unwrap", a.a.c);
            Function.prototype.bind || (Function.prototype.bind = function(a) {
                var d = 
                this
                  , c = Array.prototype.slice.call(arguments);
                a = c.shift();
                return function() {
                    return d.apply(a, c.concat(Array.prototype.slice.call(arguments)))
                }
            }
            );
            a.a.e = new function() {
                function a(b, h) {
                    var k = b[c];
                    if (!k || "null" === k || !e[k]) {
                        if (!h)
                            return p;
                        k = b[c] = "ko" + d++;
                        e[k] = {}
                    }
                    return e[k]
                }
                var d = 0
                  , c = "__ko__" + (new Date).getTime()
                  , e = {};
                return {
                    get: function(c, d) {
                        var e = a(c, !1);
                        return e === p ? p : e[d]
                    },
                    set: function(c, d, e) {
                        if (e !== p || a(c, !1) !== p)
                            a(c, !0)[d] = e
                    },
                    clear: function(a) {
                        var b = a[c];
                        return b ? (delete e[b],
                        a[c] = null ,
                        !0) : !1
                    },
                    F: function() {
                        return d++ + 
                        c
                    }
                }
            }
            ;
            a.b("utils.domData", a.a.e);
            a.b("utils.domData.clear", a.a.e.clear);
            a.a.w = new function() {
                function b(b, d) {
                    var f = a.a.e.get(b, c);
                    f === p && d && (f = [],
                    a.a.e.set(b, c, f));
                    return f
                }
                function d(c) {
                    var e = b(c, !1);
                    if (e)
                        for (var e = e.slice(0), f = 0; f < e.length; f++)
                            e[f](c);
                    a.a.e.clear(c);
                    a.a.w.cleanExternalData(c);
                    if (g[c.nodeType])
                        for (e = c.firstChild; c = e; )
                            e = c.nextSibling,
                            8 === c.nodeType && d(c)
                }
                var c = a.a.e.F()
                  , e = {
                    1: !0,
                    8: !0,
                    9: !0
                }
                  , g = {
                    1: !0,
                    9: !0
                };
                return {
                    da: function(a, c) {
                        if ("function" != typeof c)
                            throw Error("Callback must be a function");
                        b(a, !0).push(c)
                    },
                    Kb: function(d, e) {
                        var f = b(d, !1);
                        f && (a.a.ua(f, e),
                        0 == f.length && a.a.e.set(d, c, p))
                    },
                    R: function(b) {
                        if (e[b.nodeType] && (d(b),
                        g[b.nodeType])) {
                            var c = [];
                            a.a.ga(c, b.getElementsByTagName("*"));
                            for (var f = 0, m = c.length; f < m; f++)
                                d(c[f])
                        }
                        return b
                    },
                    removeNode: function(b) {
                        a.R(b);
                        b.parentNode && b.parentNode.removeChild(b)
                    },
                    cleanExternalData: function(a) {
                        w && "function" == typeof w.cleanData && w.cleanData([a])
                    }
                }
            }
            ;
            a.R = a.a.w.R;
            a.removeNode = a.a.w.removeNode;
            a.b("cleanNode", a.R);
            a.b("removeNode", a.removeNode);
            a.b("utils.domNodeDisposal", 
            a.a.w);
            a.b("utils.domNodeDisposal.addDisposeCallback", a.a.w.da);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.w.Kb);
            (function() {
                a.a.ba = function(b) {
                    var d;
                    if (w)
                        if (w.parseHTML)
                            d = w.parseHTML(b) || [];
                        else {
                            if ((d = w.clean([b])) && d[0]) {
                                for (b = d[0]; b.parentNode && 11 !== b.parentNode.nodeType; )
                                    b = b.parentNode;
                                b.parentNode && b.parentNode.removeChild(b)
                            }
                        }
                    else {
                        var c = a.a.cb(b).toLowerCase();
                        d = v.createElement("div");
                        c = c.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !c.indexOf("<tr") && [2, "<table><tbody>", 
                        "</tbody></table>"] || (!c.indexOf("<td") || !c.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
                        b = "ignored<div>" + c[1] + b + c[2] + "</div>";
                        for ("function" == typeof s.innerShiv ? d.appendChild(s.innerShiv(b)) : d.innerHTML = b; c[0]--; )
                            d = d.lastChild;
                        d = a.a.S(d.lastChild.childNodes)
                    }
                    return d
                }
                ;
                a.a.$a = function(b, d) {
                    a.a.Ka(b);
                    d = a.a.c(d);
                    if (null  !== d && d !== p)
                        if ("string" != typeof d && (d = d.toString()),
                        w)
                            w(b).html(d);
                        else
                            for (var c = a.a.ba(d), e = 0; e < c.length; e++)
                                b.appendChild(c[e])
                }
            })();
            a.b("utils.parseHtmlFragment", 
            a.a.ba);
            a.b("utils.setHtml", a.a.$a);
            a.D = function() {
                function b(c, d) {
                    if (c)
                        if (8 == c.nodeType) {
                            var g = a.D.Gb(c.nodeValue);
                            null  != g && d.push({
                                bc: c,
                                mc: g
                            })
                        } else if (1 == c.nodeType)
                            for (var g = 0, h = c.childNodes, k = h.length; g < k; g++)
                                b(h[g], d)
                }
                var d = {};
                return {
                    Ua: function(a) {
                        if ("function" != typeof a)
                            throw Error("You can only pass a function to ko.memoization.memoize()");
                        var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        d[b] = a;
                        return "\x3c!--[ko_memo:" + 
                        b + "]--\x3e"
                    },
                    Rb: function(a, b) {
                        var g = d[a];
                        if (g === p)
                            throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
                        try {
                            return g.apply(null , b || []),
                            !0
                        } finally {
                            delete d[a]
                        }
                    },
                    Sb: function(c, d) {
                        var g = [];
                        b(c, g);
                        for (var h = 0, k = g.length; h < k; h++) {
                            var f = g[h].bc
                              , m = [f];
                            d && a.a.ga(m, d);
                            a.D.Rb(g[h].mc, m);
                            f.nodeValue = "";
                            f.parentNode && f.parentNode.removeChild(f)
                        }
                    },
                    Gb: function(a) {
                        return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null 
                    }
                }
            }();
            a.b("memoization", a.D);
            a.b("memoization.memoize", a.D.Ua);
            a.b("memoization.unmemoize", a.D.Rb);
            a.b("memoization.parseMemoText", a.D.Gb);
            a.b("memoization.unmemoizeDomNodeAndDescendants", a.D.Sb);
            a.La = {
                throttle: function(b, d) {
                    b.throttleEvaluation = d;
                    var c = null ;
                    return a.j({
                        read: b,
                        write: function(a) {
                            clearTimeout(c);
                            c = setTimeout(function() {
                                b(a)
                            }, d)
                        }
                    })
                },
                rateLimit: function(a, d) {
                    var c, e, g;
                    "number" == typeof d ? c = d : (c = d.timeout,
                    e = d.method);
                    g = "notifyWhenChangesStop" == e ? T : S;
                    a.Ta(function(a) {
                        return g(a, c)
                    })
                },
                notify: function(a, d) {
                    a.equalityComparer = "always" == d ? null  : H
                }
            };
            var R = 
            {
                undefined: 1,
                "boolean": 1,
                number: 1,
                string: 1
            };
            a.b("extenders", a.La);
            a.Pb = function(b, d, c) {
                this.target = b;
                this.wa = d;
                this.ac = c;
                this.Cb = !1;
                a.A(this, "dispose", this.K)
            }
            ;
            a.Pb.prototype.K = function() {
                this.Cb = !0;
                this.ac()
            }
            ;
            a.P = function() {
                a.a.Aa(this, a.P.fn);
                this.M = {}
            }
            ;
            var G = "change"
              , A = {
                U: function(b, d, c) {
                    var e = this;
                    c = c || G;
                    var g = new a.Pb(e,d ? b.bind(d) : b,function() {
                        a.a.ua(e.M[c], g);
                        e.nb && e.nb()
                    }
                    );
                    e.va && e.va(c);
                    e.M[c] || (e.M[c] = []);
                    e.M[c].push(g);
                    return g
                },
                notifySubscribers: function(b, d) {
                    d = d || G;
                    if (this.Ab(d))
                        try {
                            a.k.Ea();
                            for (var c = this.M[d].slice(0), e = 0, g; g = c[e]; ++e)
                                g.Cb || g.wa(b)
                        } finally {
                            a.k.end()
                        }
                },
                Ta: function(b) {
                    var d = this, c = a.C(d), e, g, h;
                    d.qa || (d.qa = d.notifySubscribers,
                    d.notifySubscribers = function(a, b) {
                        b && b !== G ? "beforeChange" === b ? d.kb(a) : d.qa(a, b) : d.lb(a)
                    }
                    );
                    var k = b(function() {
                        c && h === d && (h = d());
                        e = !1;
                        d.Pa(g, h) && d.qa(g = h)
                    });
                    d.lb = function(a) {
                        e = !0;
                        h = a;
                        k()
                    }
                    ;
                    d.kb = function(a) {
                        e || (g = a,
                        d.qa(a, "beforeChange"))
                    }
                },
                Ab: function(a) {
                    return this.M[a] && this.M[a].length
                },
                yb: function() {
                    var b = 0;
                    a.a.G(this.M, function(a, c) {
                        b += c.length
                    });
                    return b
                },
                Pa: function(a, d) {
                    return !this.equalityComparer || !this.equalityComparer(a, d)
                },
                extend: function(b) {
                    var d = this;
                    b && a.a.G(b, function(b, e) {
                        var g = a.La[b];
                        "function" == typeof g && (d = g(d, e) || d)
                    });
                    return d
                }
            };
            a.A(A, "subscribe", A.U);
            a.A(A, "extend", A.extend);
            a.A(A, "getSubscriptionsCount", A.yb);
            a.a.xa && a.a.za(A, Function.prototype);
            a.P.fn = A;
            a.Db = function(a) {
                return null  != a && "function" == typeof a.U && "function" == typeof a.notifySubscribers
            }
            ;
            a.b("subscribable", a.P);
            a.b("isSubscribable", a.Db);
            a.Y = a.k = function() {
                function b(a) {
                    c.push(e);
                    e = a
                }
                function d() {
                    e = c.pop()
                }
                var c = [], e, g = 0;
                return {
                    Ea: b,
                    end: d,
                    Jb: function(b) {
                        if (e) {
                            if (!a.Db(b))
                                throw Error("Only subscribable things can act as dependencies");
                            e.wa(b, b.Vb || (b.Vb = ++g))
                        }
                    },
                    B: function(a, c, f) {
                        try {
                            return b(),
                            a.apply(c, f || [])
                        } finally {
                            d()
                        }
                    },
                    la: function() {
                        if (e)
                            return e.s.la()
                    },
                    ma: function() {
                        if (e)
                            return e.ma
                    }
                }
            }();
            a.b("computedContext", a.Y);
            a.b("computedContext.getDependenciesCount", a.Y.la);
            a.b("computedContext.isInitial", a.Y.ma);
            a.b("computedContext.isSleeping", a.Y.Ac);
            a.p = function(b) {
                function d() {
                    if (0 < 
                    arguments.length)
                        return d.Pa(c, arguments[0]) && (d.X(),
                        c = arguments[0],
                        d.W()),
                        this;
                    a.k.Jb(d);
                    return c
                }
                var c = b;
                a.P.call(d);
                a.a.Aa(d, a.p.fn);
                d.v = function() {
                    return c
                }
                ;
                d.W = function() {
                    d.notifySubscribers(c)
                }
                ;
                d.X = function() {
                    d.notifySubscribers(c, "beforeChange")
                }
                ;
                a.A(d, "peek", d.v);
                a.A(d, "valueHasMutated", d.W);
                a.A(d, "valueWillMutate", d.X);
                return d
            }
            ;
            a.p.fn = {
                equalityComparer: H
            };
            var F = a.p.rc = "__ko_proto__";
            a.p.fn[F] = a.p;
            a.a.xa && a.a.za(a.p.fn, a.P.fn);
            a.Ma = function(b, d) {
                return null  === b || b === p || b[F] === p ? !1 : b[F] === 
                d ? !0 : a.Ma(b[F], d)
            }
            ;
            a.C = function(b) {
                return a.Ma(b, a.p)
            }
            ;
            a.Ra = function(b) {
                return "function" == typeof b && b[F] === a.p || "function" == typeof b && b[F] === a.j && b.hc ? !0 : !1
            }
            ;
            a.b("observable", a.p);
            a.b("isObservable", a.C);
            a.b("isWriteableObservable", a.Ra);
            a.b("isWritableObservable", a.Ra);
            a.aa = function(b) {
                b = b || [];
                if ("object" != typeof b || !("length" in b))
                    throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                b = a.p(b);
                a.a.Aa(b, a.aa.fn);
                return b.extend({
                    trackArrayChanges: !0
                })
            }
            ;
            a.aa.fn = {
                remove: function(b) {
                    for (var d = this.v(), c = [], e = "function" != typeof b || a.C(b) ? function(a) {
                        return a === b
                    }
                     : b, g = 0; g < d.length; g++) {
                        var h = d[g];
                        e(h) && (0 === c.length && this.X(),
                        c.push(h),
                        d.splice(g, 1),
                        g--)
                    }
                    c.length && this.W();
                    return c
                },
                removeAll: function(b) {
                    if (b === p) {
                        var d = this.v()
                          , c = d.slice(0);
                        this.X();
                        d.splice(0, d.length);
                        this.W();
                        return c
                    }
                    return b ? this.remove(function(c) {
                        return 0 <= a.a.m(b, c)
                    }) : []
                },
                destroy: function(b) {
                    var d = this.v()
                      , c = "function" != typeof b || a.C(b) ? function(a) {
                        return a === b
                    }
                     : b;
                    this.X();
                    for (var e = d.length - 1; 0 <= e; e--)
                        c(d[e]) && (d[e]._destroy = !0);
                    this.W()
                },
                destroyAll: function(b) {
                    return b === p ? this.destroy(function() {
                        return !0
                    }) : b ? this.destroy(function(d) {
                        return 0 <= a.a.m(b, d)
                    }) : []
                },
                indexOf: function(b) {
                    var d = this();
                    return a.a.m(d, b)
                },
                replace: function(a, d) {
                    var c = this.indexOf(a);
                    0 <= c && (this.X(),
                    this.v()[c] = d,
                    this.W())
                }
            };
            a.a.u("pop push reverse shift sort splice unshift".split(" "), function(b) {
                a.aa.fn[b] = function() {
                    var a = this.v();
                    this.X();
                    this.sb(a, b, arguments);
                    a = a[b].apply(a, arguments);
                    this.W();
                    return a
                }
            });
            a.a.u(["slice"], function(b) {
                a.aa.fn[b] = function() {
                    var a = this();
                    return a[b].apply(a, arguments)
                }
            });
            a.a.xa && a.a.za(a.aa.fn, a.p.fn);
            a.b("observableArray", a.aa);
            var J = "arrayChange";
            a.La.trackArrayChanges = function(b) {
                function d() {
                    if (!c) {
                        c = !0;
                        var d = b.notifySubscribers;
                        b.notifySubscribers = function(a, b) {
                            b && b !== G || ++g;
                            return d.apply(this, arguments)
                        }
                        ;
                        var f = [].concat(b.v() || []);
                        e = null ;
                        b.U(function(c) {
                            c = [].concat(c || []);
                            if (b.Ab(J)) {
                                var d;
                                if (!e || 1 < g)
                                    e = a.a.Fa(f, c, {
                                        sparse: !0
                                    });
                                d = e;
                                d.length && b.notifySubscribers(d, 
                                J)
                            }
                            f = c;
                            e = null ;
                            g = 0
                        })
                    }
                }
                if (!b.sb) {
                    var c = !1
                      , e = null 
                      , g = 0
                      , h = b.U;
                    b.U = b.subscribe = function(a, b, c) {
                        c === J && d();
                        return h.apply(this, arguments)
                    }
                    ;
                    b.sb = function(b, d, m) {
                        function l(a, b, c) {
                            return q[q.length] = {
                                status: a,
                                value: b,
                                index: c
                            }
                        }
                        if (c && !g) {
                            var q = []
                              , h = b.length
                              , t = m.length
                              , z = 0;
                            switch (d) {
                            case "push":
                                z = h;
                            case "unshift":
                                for (d = 0; d < t; d++)
                                    l("added", m[d], z + d);
                                break;
                            case "pop":
                                z = h - 1;
                            case "shift":
                                h && l("deleted", b[z], z);
                                break;
                            case "splice":
                                d = Math.min(Math.max(0, 0 > m[0] ? h + m[0] : m[0]), h);
                                for (var h = 1 === t ? h : Math.min(d + (m[1] || 0), 
                                h), t = d + t - 2, z = Math.max(h, t), u = [], r = [], E = 2; d < z; ++d,
                                ++E)
                                    d < h && r.push(l("deleted", b[d], d)),
                                    d < t && u.push(l("added", m[E], d));
                                a.a.wb(r, u);
                                break;
                            default:
                                return
                            }
                            e = q
                        }
                    }
                }
            }
            ;
            a.s = a.j = function(b, d, c) {
                function e() {
                    a.a.G(v, function(a, b) {
                        b.K()
                    });
                    v = {}
                }
                function g() {
                    e();
                    C = 0;
                    u = !0;
                    n = !1
                }
                function h() {
                    var a = f.throttleEvaluation;
                    a && 0 <= a ? (clearTimeout(P),
                    P = setTimeout(k, a)) : f.ib ? f.ib() : k()
                }
                function k(b) {
                    if (t) {
                        if (E)
                            throw Error("A 'pure' computed must not be called recursively");
                    } else if (!u) {
                        if (w && w()) {
                            if (!z) {
                                s();
                                return
                            }
                        } else
                            z = !1;
                        t = !0;
                        if (y)
                            try {
                                var c = {};
                                a.k.Ea({
                                    wa: function(a, b) {
                                        c[b] || (c[b] = 1,
                                        ++C)
                                    },
                                    s: f,
                                    ma: p
                                });
                                C = 0;
                                q = r.call(d)
                            } finally {
                                a.k.end(),
                                t = !1
                            }
                        else
                            try {
                                var e = v
                                  , m = C;
                                a.k.Ea({
                                    wa: function(a, b) {
                                        u || (m && e[b] ? (v[b] = e[b],
                                        ++C,
                                        delete e[b],
                                        --m) : v[b] || (v[b] = a.U(h),
                                        ++C))
                                    },
                                    s: f,
                                    ma: E ? p : !C
                                });
                                v = {};
                                C = 0;
                                try {
                                    var l = d ? r.call(d) : r()
                                } finally {
                                    a.k.end(),
                                    m && a.a.G(e, function(a, b) {
                                        b.K()
                                    }),
                                    n = !1
                                }
                                f.Pa(q, l) && (f.notifySubscribers(q, "beforeChange"),
                                q = l,
                                !0 !== b && f.notifySubscribers(q))
                            } finally {
                                t = !1
                            }
                        C || s()
                    }
                }
                function f() {
                    if (0 < arguments.length) {
                        if ("function" === typeof O)
                            O.apply(d, 
                            arguments);
                        else
                            throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this
                    }
                    a.k.Jb(f);
                    n && k(!0);
                    return q
                }
                function m() {
                    n && !C && k(!0);
                    return q
                }
                function l() {
                    return n || 0 < C
                }
                var q, n = !0, t = !1, z = !1, u = !1, r = b, E = !1, y = !1;
                r && "object" == typeof r ? (c = r,
                r = c.read) : (c = c || {},
                r || (r = c.read));
                if ("function" != typeof r)
                    throw Error("Pass a function that returns the value of the ko.computed");
                var O = c.write
                  , x = c.disposeWhenNodeIsRemoved || 
                c.o || null 
                  , B = c.disposeWhen || c.Ia
                  , w = B
                  , s = g
                  , v = {}
                  , C = 0
                  , P = null ;
                d || (d = c.owner);
                a.P.call(f);
                a.a.Aa(f, a.j.fn);
                f.v = m;
                f.la = function() {
                    return C
                }
                ;
                f.hc = "function" === typeof c.write;
                f.K = function() {
                    s()
                }
                ;
                f.Z = l;
                var A = f.Ta;
                f.Ta = function(a) {
                    A.call(f, a);
                    f.ib = function() {
                        f.kb(q);
                        n = !0;
                        f.lb(f)
                    }
                }
                ;
                c.pure ? (y = E = !0,
                f.va = function() {
                    y && (y = !1,
                    k(!0))
                }
                ,
                f.nb = function() {
                    f.yb() || (e(),
                    y = n = !0)
                }
                ) : c.deferEvaluation && (f.va = function() {
                    m();
                    delete f.va
                }
                );
                a.A(f, "peek", f.v);
                a.A(f, "dispose", f.K);
                a.A(f, "isActive", f.Z);
                a.A(f, "getDependenciesCount", 
                f.la);
                x && (z = !0,
                x.nodeType && (w = function() {
                    return !a.a.Ja(x) || B && B()
                }
                ));
                y || c.deferEvaluation || k();
                x && l() && x.nodeType && (s = function() {
                    a.a.w.Kb(x, s);
                    g()
                }
                ,
                a.a.w.da(x, s));
                return f
            }
            ;
            a.jc = function(b) {
                return a.Ma(b, a.j)
            }
            ;
            A = a.p.rc;
            a.j[A] = a.p;
            a.j.fn = {
                equalityComparer: H
            };
            a.j.fn[A] = a.j;
            a.a.xa && a.a.za(a.j.fn, a.P.fn);
            a.b("dependentObservable", a.j);
            a.b("computed", a.j);
            a.b("isComputed", a.jc);
            a.Ib = function(b, d) {
                if ("function" === typeof b)
                    return a.s(b, d, {
                        pure: !0
                    });
                b = a.a.extend({}, b);
                b.pure = !0;
                return a.s(b, d)
            }
            ;
            a.b("pureComputed", 
            a.Ib);
            (function() {
                function b(a, g, h) {
                    h = h || new c;
                    a = g(a);
                    if ("object" != typeof a || null  === a || a === p || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean)
                        return a;
                    var k = a instanceof Array ? [] : {};
                    h.save(a, k);
                    d(a, function(c) {
                        var d = g(a[c]);
                        switch (typeof d) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "function":
                            k[c] = d;
                            break;
                        case "object":
                        case "undefined":
                            var l = h.get(d);
                            k[c] = l !== p ? l : b(d, g, h)
                        }
                    });
                    return k
                }
                function d(a, b) {
                    if (a instanceof Array) {
                        for (var c = 0; c < a.length; c++)
                            b(c);
                        "function" == 
                        typeof a.toJSON && b("toJSON")
                    } else
                        for (c in a)
                            b(c)
                }
                function c() {
                    this.keys = [];
                    this.hb = []
                }
                a.Qb = function(c) {
                    if (0 == arguments.length)
                        throw Error("When calling ko.toJS, pass the object you want to convert.");
                    return b(c, function(b) {
                        for (var c = 0; a.C(b) && 10 > c; c++)
                            b = b();
                        return b
                    })
                }
                ;
                a.toJSON = function(b, c, d) {
                    b = a.Qb(b);
                    return a.a.eb(b, c, d)
                }
                ;
                c.prototype = {
                    save: function(b, c) {
                        var d = a.a.m(this.keys, b);
                        0 <= d ? this.hb[d] = c : (this.keys.push(b),
                        this.hb.push(c))
                    },
                    get: function(b) {
                        b = a.a.m(this.keys, b);
                        return 0 <= b ? this.hb[b] : p
                    }
                }
            })();
            a.b("toJS", a.Qb);
            a.b("toJSON", a.toJSON);
            (function() {
                a.i = {
                    q: function(b) {
                        switch (a.a.t(b)) {
                        case "option":
                            return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.e.get(b, a.d.options.Va) : 7 >= a.a.L ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                        case "select":
                            return 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) : p;
                        default:
                            return b.value
                        }
                    },
                    ca: function(b, d, c) {
                        switch (a.a.t(b)) {
                        case "option":
                            switch (typeof d) {
                            case "string":
                                a.a.e.set(b, a.d.options.Va, p);
                                "__ko__hasDomDataOptionValue__" in 
                                b && delete b.__ko__hasDomDataOptionValue__;
                                b.value = d;
                                break;
                            default:
                                a.a.e.set(b, a.d.options.Va, d),
                                b.__ko__hasDomDataOptionValue__ = !0,
                                b.value = "number" === typeof d ? d : ""
                            }
                            break;
                        case "select":
                            if ("" === d || null  === d)
                                d = p;
                            for (var e = -1, g = 0, h = b.options.length, k; g < h; ++g)
                                if (k = a.i.q(b.options[g]),
                                k == d || "" == k && d === p) {
                                    e = g;
                                    break
                                }
                            if (c || 0 <= e || d === p && 1 < b.size)
                                b.selectedIndex = e;
                            break;
                        default:
                            if (null  === d || d === p)
                                d = "";
                            b.value = d
                        }
                    }
                }
            })();
            a.b("selectExtensions", a.i);
            a.b("selectExtensions.readValue", a.i.q);
            a.b("selectExtensions.writeValue", 
            a.i.ca);
            a.h = function() {
                function b(b) {
                    b = a.a.cb(b);
                    123 === b.charCodeAt(0) && (b = b.slice(1, -1));
                    var c = [], d = b.match(e), k, n, t = 0;
                    if (d) {
                        d.push(",");
                        for (var z = 0, u; u = d[z]; ++z) {
                            var r = u.charCodeAt(0);
                            if (44 === r) {
                                if (0 >= t) {
                                    k && c.push(n ? {
                                        key: k,
                                        value: n.join("")
                                    } : {
                                        unknown: k
                                    });
                                    k = n = t = 0;
                                    continue
                                }
                            } else if (58 === r) {
                                if (!n)
                                    continue
                            } else if (47 === r && z && 1 < u.length)
                                (r = d[z - 1].match(g)) && !h[r[0]] && (b = b.substr(b.indexOf(u) + 1),
                                d = b.match(e),
                                d.push(","),
                                z = -1,
                                u = "/");
                            else if (40 === r || 123 === r || 91 === r)
                                ++t;
                            else if (41 === r || 125 === r || 93 === r)
                                --t;
                            else if (!k && !n) {
                                k = 34 === r || 39 === r ? u.slice(1, -1) : u;
                                continue
                            }
                            n ? n.push(u) : n = [u]
                        }
                    }
                    return c
                }
                var d = ["true", "false", "null", "undefined"]
                  , c = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i
                  , e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g")
                  , g = /[\])"'A-Za-z0-9_$]+$/
                  , h = {
                    "in": 1,
                    "return": 1,
                    "typeof": 1
                }
                  , k = {};
                return {
                    ha: [],
                    V: k,
                    Wa: b,
                    ya: function(f, m) {
                        function e(b, m) {
                            var f;
                            if (!z) {
                                var u = a.getBindingHandler(b);
                                if (u && u.preprocess && 
                                !(m = u.preprocess(m, b, e)))
                                    return;
                                if (u = k[b])
                                    f = m,
                                    0 <= a.a.m(d, f) ? f = !1 : (u = f.match(c),
                                    f = null  === u ? !1 : u[1] ? "Object(" + u[1] + ")" + u[2] : f),
                                    u = f;
                                u && h.push("'" + b + "':function(_z){" + f + "=_z}")
                            }
                            t && (m = "function(){return " + m + " }");
                            g.push("'" + b + "':" + m)
                        }
                        m = m || {};
                        var g = []
                          , h = []
                          , t = m.valueAccessors
                          , z = m.bindingParams
                          , u = "string" === typeof f ? b(f) : f;
                        a.a.u(u, function(a) {
                            e(a.key || a.unknown, a.value)
                        });
                        h.length && e("_ko_property_writers", "{" + h.join(",") + " }");
                        return g.join(",")
                    },
                    lc: function(a, b) {
                        for (var c = 0; c < a.length; c++)
                            if (a[c].key == 
                            b)
                                return !0;
                        return !1
                    },
                    pa: function(b, c, d, e, k) {
                        if (b && a.C(b))
                            !a.Ra(b) || k && b.v() === e || b(e);
                        else if ((b = c.get("_ko_property_writers")) && b[d])
                            b[d](e)
                    }
                }
            }();
            a.b("expressionRewriting", a.h);
            a.b("expressionRewriting.bindingRewriteValidators", a.h.ha);
            a.b("expressionRewriting.parseObjectLiteral", a.h.Wa);
            a.b("expressionRewriting.preProcessBindings", a.h.ya);
            a.b("expressionRewriting._twoWayBindings", a.h.V);
            a.b("jsonExpressionRewriting", a.h);
            a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.h.ya);
            (function() {
                function b(a) {
                    return 8 == 
                    a.nodeType && h.test(g ? a.text : a.nodeValue)
                }
                function d(a) {
                    return 8 == a.nodeType && k.test(g ? a.text : a.nodeValue)
                }
                function c(a, c) {
                    for (var f = a, e = 1, k = []; f = f.nextSibling; ) {
                        if (d(f) && (e--,
                        0 === e))
                            return k;
                        k.push(f);
                        b(f) && e++
                    }
                    if (!c)
                        throw Error("Cannot find closing comment tag to match: " + a.nodeValue);
                    return null 
                }
                function e(a, b) {
                    var d = c(a, b);
                    return d ? 0 < d.length ? d[d.length - 1].nextSibling : a.nextSibling : null 
                }
                var g = v && "\x3c!--test--\x3e" === v.createComment("test").text
                  , h = g ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/
                  , 
                k = g ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/
                  , f = {
                    ul: !0,
                    ol: !0
                };
                a.f = {
                    Q: {},
                    childNodes: function(a) {
                        return b(a) ? c(a) : a.childNodes
                    },
                    ja: function(c) {
                        if (b(c)) {
                            c = a.f.childNodes(c);
                            for (var d = 0, f = c.length; d < f; d++)
                                a.removeNode(c[d])
                        } else
                            a.a.Ka(c)
                    },
                    T: function(c, d) {
                        if (b(c)) {
                            a.f.ja(c);
                            for (var f = c.nextSibling, e = 0, k = d.length; e < k; e++)
                                f.parentNode.insertBefore(d[e], f)
                        } else
                            a.a.T(c, d)
                    },
                    Hb: function(a, c) {
                        b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c)
                    },
                    Bb: function(c, 
                    d, f) {
                        f ? b(c) ? c.parentNode.insertBefore(d, f.nextSibling) : f.nextSibling ? c.insertBefore(d, f.nextSibling) : c.appendChild(d) : a.f.Hb(c, d)
                    },
                    firstChild: function(a) {
                        return b(a) ? !a.nextSibling || d(a.nextSibling) ? null  : a.nextSibling : a.firstChild
                    },
                    nextSibling: function(a) {
                        b(a) && (a = e(a));
                        return a.nextSibling && d(a.nextSibling) ? null  : a.nextSibling
                    },
                    gc: b,
                    xc: function(a) {
                        return (a = (g ? a.text : a.nodeValue).match(h)) ? a[1] : null 
                    },
                    Fb: function(c) {
                        if (f[a.a.t(c)]) {
                            var k = c.firstChild;
                            if (k) {
                                do
                                    if (1 === k.nodeType) {
                                        var g;
                                        g = k.firstChild;
                                        var h = null ;
                                        if (g) {
                                            do
                                                if (h)
                                                    h.push(g);
                                                else if (b(g)) {
                                                    var t = e(g, !0);
                                                    t ? g = t : h = [g]
                                                } else
                                                    d(g) && (h = [g]);
                                            while (g = g.nextSibling)
                                        }
                                        if (g = h)
                                            for (h = k.nextSibling,
                                            t = 0; t < g.length; t++)
                                                h ? c.insertBefore(g[t], h) : c.appendChild(g[t])
                                    }
                                while (k = k.nextSibling)
                            }
                        }
                    }
                }
            })();
            a.b("virtualElements", a.f);
            a.b("virtualElements.allowedBindings", a.f.Q);
            a.b("virtualElements.emptyNode", a.f.ja);
            a.b("virtualElements.insertAfter", a.f.Bb);
            a.b("virtualElements.prepend", a.f.Hb);
            a.b("virtualElements.setDomNodeChildren", a.f.T);
            (function() {
                a.J = function() {
                    this.Yb = 
                    {}
                }
                ;
                a.a.extend(a.J.prototype, {
                    nodeHasBindings: function(b) {
                        switch (b.nodeType) {
                        case 1:
                            return null  != b.getAttribute("data-bind") || a.g.getComponentNameForNode(b);
                        case 8:
                            return a.f.gc(b);
                        default:
                            return !1
                        }
                    },
                    getBindings: function(b, d) {
                        var c = this.getBindingsString(b, d)
                          , c = c ? this.parseBindingsString(c, d, b) : null ;
                        return a.g.mb(c, b, d, !1)
                    },
                    getBindingAccessors: function(b, d) {
                        var c = this.getBindingsString(b, d)
                          , c = c ? this.parseBindingsString(c, d, b, {
                            valueAccessors: !0
                        }) : null ;
                        return a.g.mb(c, b, d, !0)
                    },
                    getBindingsString: function(b) {
                        switch (b.nodeType) {
                        case 1:
                            return b.getAttribute("data-bind");
                        case 8:
                            return a.f.xc(b);
                        default:
                            return null 
                        }
                    },
                    parseBindingsString: function(b, d, c, e) {
                        try {
                            var g = this.Yb, h = b + (e && e.valueAccessors || ""), k;
                            if (!(k = g[h])) {
                                var f, m = "with($context){with($data||{}){return{" + a.h.ya(b, e) + "}}}";
                                f = new Function("$context","$element",m);
                                k = g[h] = f
                            }
                            return k(d, c)
                        } catch (l) {
                            throw l.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + l.message,
                            l;
                        }
                    }
                });
                a.J.instance = new a.J
            })();
            a.b("bindingProvider", a.J);
            (function() {
                function b(a) {
                    return function() {
                        return a
                    }
                }
                function d(a) {
                    return a()
                }
                function c(b) {
                    return a.a.na(a.k.B(b), function(a, c) {
                        return function() {
                            return b()[c]
                        }
                    })
                }
                function e(a, b) {
                    return c(this.getBindings.bind(this, a, b))
                }
                function g(b, c, d) {
                    var f, e = a.f.firstChild(c), k = a.J.instance, g = k.preprocessNode;
                    if (g) {
                        for (; f = e; )
                            e = a.f.nextSibling(f),
                            g.call(k, f);
                        e = a.f.firstChild(c)
                    }
                    for (; f = e; )
                        e = a.f.nextSibling(f),
                        h(b, f, d)
                }
                function h(b, c, d) {
                    var e = !0
                      , k = 1 === c.nodeType;
                    k && a.f.Fb(c);
                    if (k && d || a.J.instance.nodeHasBindings(c))
                        e = f(c, null , b, d).shouldBindDescendants;
                    e && !l[a.a.t(c)] && g(b, c, !k)
                }
                function k(b) {
                    var c = 
                    []
                      , d = {}
                      , f = [];
                    a.a.G(b, function y(e) {
                        if (!d[e]) {
                            var k = a.getBindingHandler(e);
                            k && (k.after && (f.push(e),
                            a.a.u(k.after, function(c) {
                                if (b[c]) {
                                    if (-1 !== a.a.m(f, c))
                                        throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + f.join(", "));
                                    y(c)
                                }
                            }),
                            f.length--),
                            c.push({
                                key: e,
                                zb: k
                            }));
                            d[e] = !0
                        }
                    });
                    return c
                }
                function f(b, c, f, g) {
                    var m = a.a.e.get(b, q);
                    if (!c) {
                        if (m)
                            throw Error("You cannot apply bindings multiple times to the same element.");
                        a.a.e.set(b, q, !0)
                    }
                    !m && g && a.Ob(b, f);
                    var l;
                    if (c && "function" !== 
                    typeof c)
                        l = c;
                    else {
                        var h = a.J.instance
                          , n = h.getBindingAccessors || e
                          , s = a.j(function() {
                            (l = c ? c(f, b) : n.call(h, b, f)) && f.I && f.I();
                            return l
                        }, null , {
                            o: b
                        });
                        l && s.Z() || (s = null )
                    }
                    var v;
                    if (l) {
                        var w = s ? function(a) {
                            return function() {
                                return d(s()[a])
                            }
                        }
                         : function(a) {
                            return l[a]
                        }
                          , A = function() {
                            return a.a.na(s ? s() : l, d)
                        }
                        ;
                        A.get = function(a) {
                            return l[a] && d(w(a))
                        }
                        ;
                        A.has = function(a) {
                            return a in l
                        }
                        ;
                        g = k(l);
                        a.a.u(g, function(c) {
                            var d = c.zb.init
                              , e = c.zb.update
                              , k = c.key;
                            if (8 === b.nodeType && !a.f.Q[k])
                                throw Error("The binding '" + k + "' cannot be used with virtual elements");
                            try {
                                "function" == typeof d && a.k.B(function() {
                                    var a = d(b, w(k), A, f.$data, f);
                                    if (a && a.controlsDescendantBindings) {
                                        if (v !== p)
                                            throw Error("Multiple bindings (" + v + " and " + k + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                        v = k
                                    }
                                }),
                                "function" == typeof e && a.j(function() {
                                    e(b, w(k), A, f.$data, f)
                                }, null , {
                                    o: b
                                })
                            } catch (g) {
                                throw g.message = 'Unable to process binding "' + k + ": " + l[k] + '"\nMessage: ' + g.message,
                                g;
                            }
                        })
                    }
                    return {
                        shouldBindDescendants: v === p
                    }
                }
                function m(b) {
                    return b && b instanceof a.N ? b : new a.N(b)
                }
                a.d = {};
                var l = {
                    script: !0
                };
                a.getBindingHandler = function(b) {
                    return a.d[b]
                }
                ;
                a.N = function(b, c, d, f) {
                    var e = this, k = "function" == typeof b && !a.C(b), g, m = a.j(function() {
                        var g = k ? b() : b
                          , l = a.a.c(g);
                        c ? (c.I && c.I(),
                        a.a.extend(e, c),
                        m && (e.I = m)) : (e.$parents = [],
                        e.$root = l,
                        e.ko = a);
                        e.$rawData = g;
                        e.$data = l;
                        d && (e[d] = l);
                        f && f(e, c, l);
                        return e.$data
                    }, null , {
                        Ia: function() {
                            return g && !a.a.ob(g)
                        },
                        o: !0
                    });
                    m.Z() && (e.I = m,
                    m.equalityComparer = null ,
                    g = [],
                    m.Tb = function(b) {
                        g.push(b);
                        a.a.w.da(b, 
                        function(b) {
                            a.a.ua(g, b);
                            g.length || (m.K(),
                            e.I = m = p)
                        })
                    }
                    )
                }
                ;
                a.N.prototype.createChildContext = function(b, c, d) {
                    return new a.N(b,this,c,function(a, b) {
                        a.$parentContext = b;
                        a.$parent = b.$data;
                        a.$parents = (b.$parents || []).slice(0);
                        a.$parents.unshift(a.$parent);
                        d && d(a)
                    }
                    )
                }
                ;
                a.N.prototype.extend = function(b) {
                    return new a.N(this.I || this.$data,this,null ,function(c, d) {
                        c.$rawData = d.$rawData;
                        a.a.extend(c, "function" == typeof b ? b() : b)
                    }
                    )
                }
                ;
                var q = a.a.e.F()
                  , n = a.a.e.F();
                a.Ob = function(b, c) {
                    if (2 == arguments.length)
                        a.a.e.set(b, n, c),
                        c.I && c.I.Tb(b);
                    else
                        return a.a.e.get(b, n)
                }
                ;
                a.ra = function(b, c, d) {
                    1 === b.nodeType && a.f.Fb(b);
                    return f(b, c, m(d), !0)
                }
                ;
                a.Wb = function(d, f, e) {
                    e = m(e);
                    return a.ra(d, "function" === typeof f ? c(f.bind(null , e, d)) : a.a.na(f, b), e)
                }
                ;
                a.Ca = function(a, b) {
                    1 !== b.nodeType && 8 !== b.nodeType || g(m(a), b, !0)
                }
                ;
                a.pb = function(a, b) {
                    !w && s.jQuery && (w = s.jQuery);
                    if (b && 1 !== b.nodeType && 8 !== b.nodeType)
                        throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    b = b || s.document.body;
                    h(m(a), 
                    b, !0)
                }
                ;
                a.Ha = function(b) {
                    switch (b.nodeType) {
                    case 1:
                    case 8:
                        var c = a.Ob(b);
                        if (c)
                            return c;
                        if (b.parentNode)
                            return a.Ha(b.parentNode)
                    }
                    return p
                }
                ;
                a.$b = function(b) {
                    return (b = a.Ha(b)) ? b.$data : p
                }
                ;
                a.b("bindingHandlers", a.d);
                a.b("applyBindings", a.pb);
                a.b("applyBindingsToDescendants", a.Ca);
                a.b("applyBindingAccessorsToNode", a.ra);
                a.b("applyBindingsToNode", a.Wb);
                a.b("contextFor", a.Ha);
                a.b("dataFor", a.$b)
            })();
            (function(b) {
                function d(d, f) {
                    var e = g.hasOwnProperty(d) ? g[d] : b, l;
                    e || (e = g[d] = new a.P,
                    c(d, function(a) {
                        h[d] = a;
                        delete g[d];
                        l ? e.notifySubscribers(a) : setTimeout(function() {
                            e.notifySubscribers(a)
                        }, 0)
                    }),
                    l = !0);
                    e.U(f)
                }
                function c(a, b) {
                    e("getConfig", [a], function(c) {
                        c ? e("loadComponent", [a, c], function(a) {
                            b(a)
                        }) : b(null )
                    })
                }
                function e(c, d, g, l) {
                    l || (l = a.g.loaders.slice(0));
                    var h = l.shift();
                    if (h) {
                        var n = h[c];
                        if (n) {
                            var t = !1;
                            if (n.apply(h, d.concat(function(a) {
                                t ? g(null ) : null  !== a ? g(a) : e(c, d, g, l)
                            })) !== b && (t = !0,
                            !h.suppressLoaderExceptions))
                                throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                        } else
                            e(c, d, g, l)
                    } else
                        g(null )
                }
                var g = {}
                  , h = {};
                a.g = {
                    get: function(a, c) {
                        var e = h.hasOwnProperty(a) ? h[a] : b;
                        e ? setTimeout(function() {
                            c(e)
                        }, 0) : d(a, c)
                    },
                    tb: function(a) {
                        delete h[a]
                    },
                    jb: e
                };
                a.g.loaders = [];
                a.b("components", a.g);
                a.b("components.get", a.g.get);
                a.b("components.clearCachedDefinition", a.g.tb)
            })();
            (function() {
                function b(b, c, d, e) {
                    function k() {
                        0 === --u && e(h)
                    }
                    var h = {}
                      , u = 2
                      , r = d.template;
                    d = d.viewModel;
                    r ? g(c, r, function(c) {
                        a.g.jb("loadTemplate", [b, c], function(a) {
                            h.template = a;
                            k()
                        })
                    }) : k();
                    d ? g(c, d, function(c) {
                        a.g.jb("loadViewModel", 
                        [b, c], function(a) {
                            h[f] = a;
                            k()
                        })
                    }) : k()
                }
                function d(a, b, c) {
                    if ("function" === typeof b)
                        c(function(a) {
                            return new b(a)
                        });
                    else if ("function" === typeof b[f])
                        c(b[f]);
                    else if ("instance" in b) {
                        var e = b.instance;
                        c(function() {
                            return e
                        })
                    } else
                        "viewModel" in b ? d(a, b.viewModel, c) : a("Unknown viewModel value: " + b)
                }
                function c(b) {
                    switch (a.a.t(b)) {
                    case "script":
                        return a.a.ba(b.text);
                    case "textarea":
                        return a.a.ba(b.value);
                    case "template":
                        if (e(b.content))
                            return a.a.ia(b.content.childNodes)
                    }
                    return a.a.ia(b.childNodes)
                }
                function e(a) {
                    return s.DocumentFragment ? 
                    a instanceof DocumentFragment : a && 11 === a.nodeType
                }
                function g(a, b, c) {
                    "string" === typeof b.require ? N || s.require ? (N || s.require)([b.require], c) : a("Uses require, but no AMD loader is present") : c(b)
                }
                function h(a) {
                    return function(b) {
                        throw Error("Component '" + a + "': " + b);
                    }
                }
                var k = {};
                a.g.tc = function(b, c) {
                    if (!c)
                        throw Error("Invalid configuration for " + b);
                    if (a.g.Qa(b))
                        throw Error("Component " + b + " is already registered");
                    k[b] = c
                }
                ;
                a.g.Qa = function(a) {
                    return a in k
                }
                ;
                a.g.wc = function(b) {
                    delete k[b];
                    a.g.tb(b)
                }
                ;
                a.g.ub = {
                    getConfig: function(a, 
                    b) {
                        b(k.hasOwnProperty(a) ? k[a] : null )
                    },
                    loadComponent: function(a, c, d) {
                        var e = h(a);
                        g(e, c, function(c) {
                            b(a, e, c, d)
                        })
                    },
                    loadTemplate: function(b, d, f) {
                        b = h(b);
                        if ("string" === typeof d)
                            f(a.a.ba(d));
                        else if (d instanceof Array)
                            f(d);
                        else if (e(d))
                            f(a.a.S(d.childNodes));
                        else if (d.element)
                            if (d = d.element,
                            s.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType)
                                f(c(d));
                            else if ("string" === typeof d) {
                                var k = v.getElementById(d);
                                k ? f(c(k)) : b("Cannot find element with ID " + d)
                            } else
                                b("Unknown element type: " + d);
                        else
                            b("Unknown template value: " + 
                            d)
                    },
                    loadViewModel: function(a, b, c) {
                        d(h(a), b, c)
                    }
                };
                var f = "createViewModel";
                a.b("components.register", a.g.tc);
                a.b("components.isRegistered", a.g.Qa);
                a.b("components.unregister", a.g.wc);
                a.b("components.defaultLoader", a.g.ub);
                a.g.loaders.push(a.g.ub);
                a.g.Ub = k
            })();
            (function() {
                function b(b, e) {
                    var g = b.getAttribute("params");
                    if (g) {
                        var g = d.parseBindingsString(g, e, b, {
                            valueAccessors: !0,
                            bindingParams: !0
                        })
                          , g = a.a.na(g, function(d) {
                            return a.s(d, null , {
                                o: b
                            })
                        })
                          , h = a.a.na(g, function(d) {
                            return d.Z() ? a.s(function() {
                                return a.a.c(d())
                            }, 
                            null , {
                                o: b
                            }) : d.v()
                        });
                        h.hasOwnProperty("$raw") || (h.$raw = g);
                        return h
                    }
                    return {
                        $raw: {}
                    }
                }
                a.g.getComponentNameForNode = function(b) {
                    b = a.a.t(b);
                    return a.g.Qa(b) && b
                }
                ;
                a.g.mb = function(c, d, g, h) {
                    if (1 === d.nodeType) {
                        var k = a.g.getComponentNameForNode(d);
                        if (k) {
                            c = c || {};
                            if (c.component)
                                throw Error('Cannot use the "component" binding on a custom element matching a component');
                            var f = {
                                name: k,
                                params: b(d, g)
                            };
                            c.component = h ? function() {
                                return f
                            }
                             : f
                        }
                    }
                    return c
                }
                ;
                var d = new a.J;
                9 > a.a.L && (a.g.register = function(a) {
                    return function(b) {
                        v.createElement(b);
                        return a.apply(this, arguments)
                    }
                }(a.g.register),
                v.createDocumentFragment = function(b) {
                    return function() {
                        var d = b(), g = a.g.Ub, h;
                        for (h in g)
                            g.hasOwnProperty(h) && d.createElement(h);
                        return d
                    }
                }(v.createDocumentFragment))
            })();
            (function() {
                var b = 0;
                a.d.component = {
                    init: function(d, c, e, g, h) {
                        function k() {
                            var a = f && f.dispose;
                            "function" === typeof a && a.call(f);
                            m = null 
                        }
                        var f, m;
                        a.a.w.da(d, k);
                        a.s(function() {
                            var e = a.a.c(c()), g, n;
                            "string" === typeof e ? g = e : (g = a.a.c(e.name),
                            n = a.a.c(e.params));
                            if (!g)
                                throw Error("No component name specified");
                            var t = m = ++b;
                            a.g.get(g, function(b) {
                                if (m === t) {
                                    k();
                                    if (!b)
                                        throw Error("Unknown component '" + g + "'");
                                    var c = b.template;
                                    if (!c)
                                        throw Error("Component '" + g + "' has no template");
                                    c = a.a.ia(c);
                                    a.f.T(d, c);
                                    var c = n
                                      , e = b.createViewModel;
                                    b = e ? e.call(b, c, {
                                        element: d
                                    }) : c;
                                    c = h.createChildContext(b);
                                    f = b;
                                    a.Ca(c, d)
                                }
                            })
                        }, null , {
                            o: d
                        });
                        return {
                            controlsDescendantBindings: !0
                        }
                    }
                };
                a.f.Q.component = !0
            })();
            var Q = {
                "class": "className",
                "for": "htmlFor"
            };
            a.d.attr = {
                update: function(b, d) {
                    var c = a.a.c(d()) || {};
                    a.a.G(c, function(c, d) {
                        d = a.a.c(d);
                        var h = 
                        !1 === d || null  === d || d === p;
                        h && b.removeAttribute(c);
                        8 >= a.a.L && c in Q ? (c = Q[c],
                        h ? b.removeAttribute(c) : b[c] = d) : h || b.setAttribute(c, d.toString());
                        "name" === c && a.a.Mb(b, h ? "" : d.toString())
                    })
                }
            };
            (function() {
                a.d.checked = {
                    after: ["value", "attr"],
                    init: function(b, d, c) {
                        function e() {
                            var e = b.checked
                              , k = q ? h() : e;
                            if (!a.Y.ma() && (!f || e)) {
                                var g = a.k.B(d);
                                m ? l !== k ? (e && (a.a.ea(g, k, !0),
                                a.a.ea(g, l, !1)),
                                l = k) : a.a.ea(g, k, e) : a.h.pa(g, c, "checked", k, !0)
                            }
                        }
                        function g() {
                            var c = a.a.c(d());
                            b.checked = m ? 0 <= a.a.m(c, h()) : k ? c : h() === c
                        }
                        var h = a.Ib(function() {
                            return c.has("checkedValue") ? 
                            a.a.c(c.get("checkedValue")) : c.has("value") ? a.a.c(c.get("value")) : b.value
                        })
                          , k = "checkbox" == b.type
                          , f = "radio" == b.type;
                        if (k || f) {
                            var m = k && a.a.c(d()) instanceof Array
                              , l = m ? h() : p
                              , q = f || m;
                            f && !b.name && a.d.uniqueName.init(b, function() {
                                return !0
                            });
                            a.s(e, null , {
                                o: b
                            });
                            a.a.n(b, "click", e);
                            a.s(g, null , {
                                o: b
                            })
                        }
                    }
                };
                a.h.V.checked = !0;
                a.d.checkedValue = {
                    update: function(b, d) {
                        b.value = a.a.c(d())
                    }
                }
            })();
            a.d.css = {
                update: function(b, d) {
                    var c = a.a.c(d());
                    "object" == typeof c ? a.a.G(c, function(c, d) {
                        d = a.a.c(d);
                        a.a.Ba(b, c, d)
                    }) : (c = String(c || ""),
                    a.a.Ba(b, b.__ko__cssValue, !1),
                    b.__ko__cssValue = c,
                    a.a.Ba(b, c, !0))
                }
            };
            a.d.enable = {
                update: function(b, d) {
                    var c = a.a.c(d());
                    c && b.disabled ? b.removeAttribute("disabled") : c || b.disabled || (b.disabled = !0)
                }
            };
            a.d.disable = {
                update: function(b, d) {
                    a.d.enable.update(b, function() {
                        return !a.a.c(d())
                    })
                }
            };
            a.d.event = {
                init: function(b, d, c, e, g) {
                    var h = d() || {};
                    a.a.G(h, function(k) {
                        "string" == typeof k && a.a.n(b, k, function(b) {
                            var h, l = d()[k];
                            if (l) {
                                try {
                                    var q = a.a.S(arguments);
                                    e = g.$data;
                                    q.unshift(e);
                                    h = l.apply(e, q)
                                } finally {
                                    !0 !== h && (b.preventDefault ? 
                                    b.preventDefault() : b.returnValue = !1)
                                }
                                !1 === c.get(k + "Bubble") && (b.cancelBubble = !0,
                                b.stopPropagation && b.stopPropagation())
                            }
                        })
                    })
                }
            };
            a.d.foreach = {
                Eb: function(b) {
                    return function() {
                        var d = b()
                          , c = a.a.Xa(d);
                        if (!c || "number" == typeof c.length)
                            return {
                                foreach: d,
                                templateEngine: a.O.Oa
                            };
                        a.a.c(d);
                        return {
                            foreach: c.data,
                            as: c.as,
                            includeDestroyed: c.includeDestroyed,
                            afterAdd: c.afterAdd,
                            beforeRemove: c.beforeRemove,
                            afterRender: c.afterRender,
                            beforeMove: c.beforeMove,
                            afterMove: c.afterMove,
                            templateEngine: a.O.Oa
                        }
                    }
                },
                init: function(b, 
                d) {
                    return a.d.template.init(b, a.d.foreach.Eb(d))
                },
                update: function(b, d, c, e, g) {
                    return a.d.template.update(b, a.d.foreach.Eb(d), c, e, g)
                }
            };
            a.h.ha.foreach = !1;
            a.f.Q.foreach = !0;
            a.d.hasfocus = {
                init: function(b, d, c) {
                    function e(e) {
                        b.__ko_hasfocusUpdating = !0;
                        var f = b.ownerDocument;
                        if ("activeElement" in f) {
                            var g;
                            try {
                                g = f.activeElement
                            } catch (h) {
                                g = f.body
                            }
                            e = g === b
                        }
                        f = d();
                        a.h.pa(f, c, "hasfocus", e, !0);
                        b.__ko_hasfocusLastValue = e;
                        b.__ko_hasfocusUpdating = !1
                    }
                    var g = e.bind(null , !0)
                      , h = e.bind(null , !1);
                    a.a.n(b, "focus", g);
                    a.a.n(b, "focusin", 
                    g);
                    a.a.n(b, "blur", h);
                    a.a.n(b, "focusout", h)
                },
                update: function(b, d) {
                    var c = !!a.a.c(d());
                    b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === c || (c ? b.focus() : b.blur(),
                    a.k.B(a.a.oa, null , [b, c ? "focusin" : "focusout"]))
                }
            };
            a.h.V.hasfocus = !0;
            a.d.hasFocus = a.d.hasfocus;
            a.h.V.hasFocus = !0;
            a.d.html = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(b, d) {
                    a.a.$a(b, d())
                }
            };
            I("if");
            I("ifnot", !1, !0);
            I("with", !0, !1, function(a, d) {
                return a.createChildContext(d)
            });
            var K = {};
            a.d.options = {
                init: function(b) {
                    if ("select" !== 
                    a.a.t(b))
                        throw Error("options binding applies only to SELECT elements");
                    for (; 0 < b.length; )
                        b.remove(0);
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(b, d, c) {
                    function e() {
                        return a.a.ta(b.options, function(a) {
                            return a.selected
                        })
                    }
                    function g(a, b, c) {
                        var d = typeof b;
                        return "function" == d ? b(a) : "string" == d ? a[b] : c
                    }
                    function h(c, d) {
                        if (q.length) {
                            var e = 0 <= a.a.m(q, a.i.q(d[0]));
                            a.a.Nb(d[0], e);
                            n && !e && a.k.B(a.a.oa, null , [b, "change"])
                        }
                    }
                    var k = 0 != b.length && b.multiple ? b.scrollTop : null 
                      , f = a.a.c(d())
                      , m = c.get("optionsIncludeDestroyed");
                    d = {};
                    var l, q;
                    q = b.multiple ? a.a.Da(e(), a.i.q) : 0 <= b.selectedIndex ? [a.i.q(b.options[b.selectedIndex])] : [];
                    f && ("undefined" == typeof f.length && (f = [f]),
                    l = a.a.ta(f, function(b) {
                        return m || b === p || null  === b || !a.a.c(b._destroy)
                    }),
                    c.has("optionsCaption") && (f = a.a.c(c.get("optionsCaption")),
                    null  !== f && f !== p && l.unshift(K)));
                    var n = !1;
                    d.beforeRemove = function(a) {
                        b.removeChild(a)
                    }
                    ;
                    f = h;
                    c.has("optionsAfterRender") && (f = function(b, d) {
                        h(0, d);
                        a.k.B(c.get("optionsAfterRender"), null , [d[0], b !== K ? b : p])
                    }
                    );
                    a.a.Za(b, l, function(d, e, f) {
                        f.length && 
                        (q = f[0].selected ? [a.i.q(f[0])] : [],
                        n = !0);
                        e = b.ownerDocument.createElement("option");
                        d === K ? (a.a.bb(e, c.get("optionsCaption")),
                        a.i.ca(e, p)) : (f = g(d, c.get("optionsValue"), d),
                        a.i.ca(e, a.a.c(f)),
                        d = g(d, c.get("optionsText"), f),
                        a.a.bb(e, d));
                        return [e]
                    }, d, f);
                    a.k.B(function() {
                        c.get("valueAllowUnset") && c.has("value") ? a.i.ca(b, a.a.c(c.get("value")), !0) : (b.multiple ? q.length && e().length < q.length : q.length && 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) !== q[0] : q.length || 0 <= b.selectedIndex) && a.a.oa(b, "change")
                    });
                    a.a.dc(b);
                    k && 20 < Math.abs(k - b.scrollTop) && (b.scrollTop = k)
                }
            };
            a.d.options.Va = a.a.e.F();
            a.d.selectedOptions = {
                after: ["options", "foreach"],
                init: function(b, d, c) {
                    a.a.n(b, "change", function() {
                        var e = d()
                          , g = [];
                        a.a.u(b.getElementsByTagName("option"), function(b) {
                            b.selected && g.push(a.i.q(b))
                        });
                        a.h.pa(e, c, "selectedOptions", g)
                    })
                },
                update: function(b, d) {
                    if ("select" != a.a.t(b))
                        throw Error("values binding applies only to SELECT elements");
                    var c = a.a.c(d());
                    c && "number" == typeof c.length && a.a.u(b.getElementsByTagName("option"), 
                    function(b) {
                        var d = 0 <= a.a.m(c, a.i.q(b));
                        a.a.Nb(b, d)
                    })
                }
            };
            a.h.V.selectedOptions = !0;
            a.d.style = {
                update: function(b, d) {
                    var c = a.a.c(d() || {});
                    a.a.G(c, function(c, d) {
                        d = a.a.c(d);
                        if (null  === d || d === p || !1 === d)
                            d = "";
                        b.style[c] = d
                    })
                }
            };
            a.d.submit = {
                init: function(b, d, c, e, g) {
                    if ("function" != typeof d())
                        throw Error("The value for a submit binding must be a function");
                    a.a.n(b, "submit", function(a) {
                        var c, e = d();
                        try {
                            c = e.call(g.$data, b)
                        } finally {
                            !0 !== c && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                        }
                    })
                }
            };
            a.d.text = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(b, d) {
                    a.a.bb(b, d())
                }
            };
            a.f.Q.text = !0;
            (function() {
                if (s && s.navigator)
                    var b = function(a) {
                        if (a)
                            return parseFloat(a[1])
                    }
                      , d = s.opera && s.opera.version && parseInt(s.opera.version())
                      , c = s.navigator.userAgent
                      , e = b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i))
                      , g = b(c.match(/Firefox\/([^ ]*)/));
                if (10 > a.a.L)
                    var h = a.a.e.F()
                      , k = a.a.e.F()
                      , f = function(b) {
                        var c = this.activeElement;
                        (c = c && a.a.e.get(c, k)) && c(b)
                    }
                      , m = function(b, c) {
                        var d = b.ownerDocument;
                        a.a.e.get(d, h) || (a.a.e.set(d, h, !0),
                        a.a.n(d, "selectionchange", 
                        f));
                        a.a.e.set(b, k, c)
                    }
                    ;
                a.d.textInput = {
                    init: function(b, c, f) {
                        function k(c, d) {
                            a.a.n(b, c, d)
                        }
                        function h() {
                            var d = a.a.c(c());
                            if (null  === d || d === p)
                                d = "";
                            v !== p && d === v ? setTimeout(h, 4) : b.value !== d && (s = d,
                            b.value = d)
                        }
                        function u() {
                            y || (v = b.value,
                            y = setTimeout(r, 4))
                        }
                        function r() {
                            clearTimeout(y);
                            v = y = p;
                            var d = b.value;
                            s !== d && (s = d,
                            a.h.pa(c(), f, "textInput", d))
                        }
                        var s = b.value, y, v;
                        10 > a.a.L ? (k("propertychange", function(a) {
                            "value" === a.propertyName && r()
                        }),
                        8 == a.a.L && (k("keyup", r),
                        k("keydown", r)),
                        8 <= a.a.L && (m(b, r),
                        k("dragend", u))) : 
                        (k("input", r),
                        5 > e && "textarea" === a.a.t(b) ? (k("keydown", u),
                        k("paste", u),
                        k("cut", u)) : 11 > d ? k("keydown", u) : 4 > g && (k("DOMAutoComplete", r),
                        k("dragdrop", r),
                        k("drop", r)));
                        k("change", r);
                        a.s(h, null , {
                            o: b
                        })
                    }
                };
                a.h.V.textInput = !0;
                a.d.textinput = {
                    preprocess: function(a, b, c) {
                        c("textInput", a)
                    }
                }
            })();
            a.d.uniqueName = {
                init: function(b, d) {
                    if (d()) {
                        var c = "ko_unique_" + ++a.d.uniqueName.Zb;
                        a.a.Mb(b, c)
                    }
                }
            };
            a.d.uniqueName.Zb = 0;
            a.d.value = {
                after: ["options", "foreach"],
                init: function(b, d, c) {
                    if ("input" != b.tagName.toLowerCase() || "checkbox" != 
                    b.type && "radio" != b.type) {
                        var e = ["change"]
                          , g = c.get("valueUpdate")
                          , h = !1
                          , k = null ;
                        g && ("string" == typeof g && (g = [g]),
                        a.a.ga(e, g),
                        e = a.a.rb(e));
                        var f = function() {
                            k = null ;
                            h = !1;
                            var e = d()
                              , f = a.i.q(b);
                            a.h.pa(e, c, "value", f)
                        }
                        ;
                        !a.a.L || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.m(e, "propertychange") || (a.a.n(b, "propertychange", function() {
                            h = !0
                        }),
                        a.a.n(b, "focus", function() {
                            h = !1
                        }),
                        a.a.n(b, "blur", function() {
                            h && f()
                        }));
                        a.a.u(e, function(c) {
                            var d = f;
                            a.a.vc(c, 
                            "after") && (d = function() {
                                k = a.i.q(b);
                                setTimeout(f, 0)
                            }
                            ,
                            c = c.substring(5));
                            a.a.n(b, c, d)
                        });
                        var m = function() {
                            var e = a.a.c(d())
                              , f = a.i.q(b);
                            if (null  !== k && e === k)
                                setTimeout(m, 0);
                            else if (e !== f)
                                if ("select" === a.a.t(b)) {
                                    var g = c.get("valueAllowUnset")
                                      , f = function() {
                                        a.i.ca(b, e, g)
                                    }
                                    ;
                                    f();
                                    g || e === a.i.q(b) ? setTimeout(f, 0) : a.k.B(a.a.oa, null , [b, "change"])
                                } else
                                    a.i.ca(b, e)
                        }
                        ;
                        a.s(m, null , {
                            o: b
                        })
                    } else
                        a.ra(b, {
                            checkedValue: d
                        })
                },
                update: function() {}
            };
            a.h.V.value = !0;
            a.d.visible = {
                update: function(b, d) {
                    var c = a.a.c(d())
                      , e = "none" != b.style.display;
                    c && !e ? b.style.display = "" : !c && e && (b.style.display = "none")
                }
            };
            (function(b) {
                a.d[b] = {
                    init: function(d, c, e, g, h) {
                        return a.d.event.init.call(this, d, function() {
                            var a = {};
                            a[b] = c();
                            return a
                        }, e, g, h)
                    }
                }
            })("click");
            a.H = function() {}
            ;
            a.H.prototype.renderTemplateSource = function() {
                throw Error("Override renderTemplateSource");
            }
            ;
            a.H.prototype.createJavaScriptEvaluatorBlock = function() {
                throw Error("Override createJavaScriptEvaluatorBlock");
            }
            ;
            a.H.prototype.makeTemplateSource = function(b, d) {
                if ("string" == typeof b) {
                    d = d || v;
                    var c = 
                    d.getElementById(b);
                    if (!c)
                        throw Error("Cannot find template with ID " + b);
                    return new a.r.l(c)
                }
                if (1 == b.nodeType || 8 == b.nodeType)
                    return new a.r.fa(b);
                throw Error("Unknown template type: " + b);
            }
            ;
            a.H.prototype.renderTemplate = function(a, d, c, e) {
                a = this.makeTemplateSource(a, e);
                return this.renderTemplateSource(a, d, c)
            }
            ;
            a.H.prototype.isTemplateRewritten = function(a, d) {
                return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, d).data("isRewritten")
            }
            ;
            a.H.prototype.rewriteTemplate = function(a, d, c) {
                a = this.makeTemplateSource(a, 
                c);
                d = d(a.text());
                a.text(d);
                a.data("isRewritten", !0)
            }
            ;
            a.b("templateEngine", a.H);
            a.fb = function() {
                function b(b, c, d, k) {
                    b = a.h.Wa(b);
                    for (var f = a.h.ha, m = 0; m < b.length; m++) {
                        var l = b[m].key;
                        if (f.hasOwnProperty(l)) {
                            var q = f[l];
                            if ("function" === typeof q) {
                                if (l = q(b[m].value))
                                    throw Error(l);
                            } else if (!q)
                                throw Error("This template engine does not support the '" + l + "' binding within its templates");
                        }
                    }
                    d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.h.ya(b, {
                        valueAccessors: !0
                    }) + " } })()},'" + d.toLowerCase() + 
                    "')";
                    return k.createJavaScriptEvaluatorBlock(d) + c
                }
                var d = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi
                  , c = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return {
                    ec: function(b, c, d) {
                        c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function(b) {
                            return a.fb.nc(b, c)
                        }, d)
                    },
                    nc: function(a, g) {
                        return a.replace(d, function(a, c, d, e, l) {
                            return b(l, c, d, g)
                        }).replace(c, function(a, c) {
                            return b(c, "\x3c!-- ko --\x3e", "#comment", g)
                        })
                    },
                    Xb: function(b, c) {
                        return a.D.Ua(function(d, 
                        k) {
                            var f = d.nextSibling;
                            f && f.nodeName.toLowerCase() === c && a.ra(f, b, k)
                        })
                    }
                }
            }();
            a.b("__tr_ambtns", a.fb.Xb);
            (function() {
                a.r = {};
                a.r.l = function(a) {
                    this.l = a
                }
                ;
                a.r.l.prototype.text = function() {
                    var b = a.a.t(this.l)
                      , b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML";
                    if (0 == arguments.length)
                        return this.l[b];
                    var d = arguments[0];
                    "innerHTML" === b ? a.a.$a(this.l, d) : this.l[b] = d
                }
                ;
                var b = a.a.e.F() + "_";
                a.r.l.prototype.data = function(c) {
                    if (1 === arguments.length)
                        return a.a.e.get(this.l, b + c);
                    a.a.e.set(this.l, b + c, arguments[1])
                }
                ;
                var d = a.a.e.F();
                a.r.fa = function(a) {
                    this.l = a
                }
                ;
                a.r.fa.prototype = new a.r.l;
                a.r.fa.prototype.text = function() {
                    if (0 == arguments.length) {
                        var b = a.a.e.get(this.l, d) || {};
                        b.gb === p && b.Ga && (b.gb = b.Ga.innerHTML);
                        return b.gb
                    }
                    a.a.e.set(this.l, d, {
                        gb: arguments[0]
                    })
                }
                ;
                a.r.l.prototype.nodes = function() {
                    if (0 == arguments.length)
                        return (a.a.e.get(this.l, d) || {}).Ga;
                    a.a.e.set(this.l, d, {
                        Ga: arguments[0]
                    })
                }
                ;
                a.b("templateSources", a.r);
                a.b("templateSources.domElement", a.r.l);
                a.b("templateSources.anonymousTemplate", a.r.fa)
            })();
            (function() {
                function b(b, 
                c, d) {
                    var e;
                    for (c = a.f.nextSibling(c); b && (e = b) !== c; )
                        b = a.f.nextSibling(e),
                        d(e, b)
                }
                function d(c, d) {
                    if (c.length) {
                        var e = c[0]
                          , g = c[c.length - 1]
                          , h = e.parentNode
                          , n = a.J.instance
                          , t = n.preprocessNode;
                        if (t) {
                            b(e, g, function(a, b) {
                                var c = a.previousSibling
                                  , d = t.call(n, a);
                                d && (a === e && (e = d[0] || b),
                                a === g && (g = d[d.length - 1] || c))
                            });
                            c.length = 0;
                            if (!e)
                                return;
                            e === g ? c.push(e) : (c.push(e, g),
                            a.a.ka(c, h))
                        }
                        b(e, g, function(b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.pb(d, b)
                        });
                        b(e, g, function(b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.D.Sb(b, [d])
                        });
                        a.a.ka(c, 
                        h)
                    }
                }
                function c(a) {
                    return a.nodeType ? a : 0 < a.length ? a[0] : null 
                }
                function e(b, e, h, l, q) {
                    q = q || {};
                    var n = b && c(b)
                      , n = n && n.ownerDocument
                      , t = q.templateEngine || g;
                    a.fb.ec(h, t, n);
                    h = t.renderTemplate(h, l, q, n);
                    if ("number" != typeof h.length || 0 < h.length && "number" != typeof h[0].nodeType)
                        throw Error("Template engine must return an array of DOM nodes");
                    n = !1;
                    switch (e) {
                    case "replaceChildren":
                        a.f.T(b, h);
                        n = !0;
                        break;
                    case "replaceNode":
                        a.a.Lb(b, h);
                        n = !0;
                        break;
                    case "ignoreTargetNode":
                        break;
                    default:
                        throw Error("Unknown renderMode: " + 
                        e);
                    }
                    n && (d(h, l),
                    q.afterRender && a.k.B(q.afterRender, null , [h, l.$data]));
                    return h
                }
                var g;
                a.ab = function(b) {
                    if (b != p && !(b instanceof a.H))
                        throw Error("templateEngine must inherit from ko.templateEngine");
                    g = b
                }
                ;
                a.Ya = function(b, d, h, l, q) {
                    h = h || {};
                    if ((h.templateEngine || g) == p)
                        throw Error("Set a template engine before calling renderTemplate");
                    q = q || "replaceChildren";
                    if (l) {
                        var n = c(l);
                        return a.j(function() {
                            var g = d && d instanceof a.N ? d : new a.N(a.a.c(d))
                              , p = a.C(b) ? b() : "function" === typeof b ? b(g.$data, g) : b
                              , g = e(l, q, p, g, h);
                            "replaceNode" == q && (l = g,
                            n = c(l))
                        }, null , {
                            Ia: function() {
                                return !n || !a.a.Ja(n)
                            },
                            o: n && "replaceNode" == q ? n.parentNode : n
                        })
                    }
                    return a.D.Ua(function(c) {
                        a.Ya(b, d, h, c, "replaceNode")
                    })
                }
                ;
                a.uc = function(b, c, g, h, q) {
                    function n(a, b) {
                        d(b, s);
                        g.afterRender && g.afterRender(b, a)
                    }
                    function t(c, d) {
                        s = q.createChildContext(c, g.as, function(a) {
                            a.$index = d
                        });
                        var f = a.C(b) ? b() : "function" === typeof b ? b(c, s) : b;
                        return e(null , "ignoreTargetNode", f, s, g)
                    }
                    var s;
                    return a.j(function() {
                        var b = a.a.c(c) || [];
                        "undefined" == typeof b.length && (b = [b]);
                        b = a.a.ta(b, 
                        function(b) {
                            return g.includeDestroyed || b === p || null  === b || !a.a.c(b._destroy)
                        });
                        a.k.B(a.a.Za, null , [h, b, t, g, n])
                    }, null , {
                        o: h
                    })
                }
                ;
                var h = a.a.e.F();
                a.d.template = {
                    init: function(b, c) {
                        var d = a.a.c(c());
                        "string" == typeof d || d.name ? a.f.ja(b) : (d = a.f.childNodes(b),
                        d = a.a.oc(d),
                        (new a.r.fa(b)).nodes(d));
                        return {
                            controlsDescendantBindings: !0
                        }
                    },
                    update: function(b, c, d, e, g) {
                        var n = c(), t;
                        c = a.a.c(n);
                        d = !0;
                        e = null ;
                        "string" == typeof c ? c = {} : (n = c.name,
                        "if" in c && (d = a.a.c(c["if"])),
                        d && "ifnot" in c && (d = !a.a.c(c.ifnot)),
                        t = a.a.c(c.data));
                        "foreach" in c ? e = a.uc(n || b, d && c.foreach || [], c, b, g) : d ? (g = "data" in c ? g.createChildContext(t, c.as) : g,
                        e = a.Ya(n || b, g, c, b)) : a.f.ja(b);
                        g = e;
                        (t = a.a.e.get(b, h)) && "function" == typeof t.K && t.K();
                        a.a.e.set(b, h, g && g.Z() ? g : p)
                    }
                };
                a.h.ha.template = function(b) {
                    b = a.h.Wa(b);
                    return 1 == b.length && b[0].unknown || a.h.lc(b, "name") ? null  : "This template engine does not support anonymous templates nested within its templates"
                }
                ;
                a.f.Q.template = !0
            })();
            a.b("setTemplateEngine", a.ab);
            a.b("renderTemplate", a.Ya);
            a.a.wb = function(a, d, c) {
                if (a.length && 
                d.length) {
                    var e, g, h, k, f;
                    for (e = g = 0; (!c || e < c) && (k = a[g]); ++g) {
                        for (h = 0; f = d[h]; ++h)
                            if (k.value === f.value) {
                                k.moved = f.index;
                                f.moved = k.index;
                                d.splice(h, 1);
                                e = h = 0;
                                break
                            }
                        e += h
                    }
                }
            }
            ;
            a.a.Fa = function() {
                function b(b, c, e, g, h) {
                    var k = Math.min, f = Math.max, m = [], l, q = b.length, n, p = c.length, s = p - q || 1, u = q + p + 1, r, v, w;
                    for (l = 0; l <= q; l++)
                        for (v = r,
                        m.push(r = []),
                        w = k(p, l + s),
                        n = f(0, l - 1); n <= w; n++)
                            r[n] = n ? l ? b[l - 1] === c[n - 1] ? v[n - 1] : k(v[n] || u, r[n - 1] || u) + 1 : n + 1 : l + 1;
                    k = [];
                    f = [];
                    s = [];
                    l = q;
                    for (n = p; l || n; )
                        p = m[l][n] - 1,
                        n && p === m[l][n - 1] ? f.push(k[k.length] = {
                            status: e,
                            value: c[--n],
                            index: n
                        }) : l && p === m[l - 1][n] ? s.push(k[k.length] = {
                            status: g,
                            value: b[--l],
                            index: l
                        }) : (--n,
                        --l,
                        h.sparse || k.push({
                            status: "retained",
                            value: c[n]
                        }));
                    a.a.wb(f, s, 10 * q);
                    return k.reverse()
                }
                return function(a, c, e) {
                    e = "boolean" === typeof e ? {
                        dontLimitMoves: e
                    } : e || {};
                    a = a || [];
                    c = c || [];
                    return a.length <= c.length ? b(a, c, "added", "deleted", e) : b(c, a, "deleted", "added", e)
                }
            }();
            a.b("utils.compareArrays", a.a.Fa);
            (function() {
                function b(b, d, g, h, k) {
                    var f = []
                      , m = a.j(function() {
                        var l = d(g, k, a.a.ka(f, b)) || [];
                        0 < f.length && (a.a.Lb(f, 
                        l),
                        h && a.k.B(h, null , [g, l, k]));
                        f.length = 0;
                        a.a.ga(f, l)
                    }, null , {
                        o: b,
                        Ia: function() {
                            return !a.a.ob(f)
                        }
                    });
                    return {
                        $: f,
                        j: m.Z() ? m : p
                    }
                }
                var d = a.a.e.F();
                a.a.Za = function(c, e, g, h, k) {
                    function f(b, d) {
                        x = q[d];
                        r !== d && (A[b] = x);
                        x.Na(r++);
                        a.a.ka(x.$, c);
                        s.push(x);
                        w.push(x)
                    }
                    function m(b, c) {
                        if (b)
                            for (var d = 0, e = c.length; d < e; d++)
                                c[d] && a.a.u(c[d].$, function(a) {
                                    b(a, d, c[d].sa)
                                })
                    }
                    e = e || [];
                    h = h || {};
                    var l = a.a.e.get(c, d) === p
                      , q = a.a.e.get(c, d) || []
                      , n = a.a.Da(q, function(a) {
                        return a.sa
                    })
                      , t = a.a.Fa(n, e, h.dontLimitMoves)
                      , s = []
                      , u = 0
                      , r = 0
                      , v = []
                      , w = [];
                    e = 
                    [];
                    for (var A = [], n = [], x, B = 0, D, F; D = t[B]; B++)
                        switch (F = D.moved,
                        D.status) {
                        case "deleted":
                            F === p && (x = q[u],
                            x.j && x.j.K(),
                            v.push.apply(v, a.a.ka(x.$, c)),
                            h.beforeRemove && (e[B] = x,
                            w.push(x)));
                            u++;
                            break;
                        case "retained":
                            f(B, u++);
                            break;
                        case "added":
                            F !== p ? f(B, F) : (x = {
                                sa: D.value,
                                Na: a.p(r++)
                            },
                            s.push(x),
                            w.push(x),
                            l || (n[B] = x))
                        }
                    m(h.beforeMove, A);
                    a.a.u(v, h.beforeRemove ? a.R : a.removeNode);
                    for (var B = 0, l = a.f.firstChild(c), G; x = w[B]; B++) {
                        x.$ || a.a.extend(x, b(c, g, x.sa, k, x.Na));
                        for (u = 0; t = x.$[u]; l = t.nextSibling,
                        G = t,
                        u++)
                            t !== l && a.f.Bb(c, 
                            t, G);
                        !x.ic && k && (k(x.sa, x.$, x.Na),
                        x.ic = !0)
                    }
                    m(h.beforeRemove, e);
                    m(h.afterMove, A);
                    m(h.afterAdd, n);
                    a.a.e.set(c, d, s)
                }
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Za);
            a.O = function() {
                this.allowTemplateRewriting = !1
            }
            ;
            a.O.prototype = new a.H;
            a.O.prototype.renderTemplateSource = function(b) {
                var d = (9 > a.a.L ? 0 : b.nodes) ? b.nodes() : null ;
                if (d)
                    return a.a.S(d.cloneNode(!0).childNodes);
                b = b.text();
                return a.a.ba(b)
            }
            ;
            a.O.Oa = new a.O;
            a.ab(a.O.Oa);
            a.b("nativeTemplateEngine", a.O);
            (function() {
                a.Sa = function() {
                    var a = this.kc = 
                    function() {
                        if (!w || !w.tmpl)
                            return 0;
                        try {
                            if (0 <= w.tmpl.tag.tmpl.open.toString().indexOf("__"))
                                return 2
                        } catch (a) {}
                        return 1
                    }();
                    this.renderTemplateSource = function(b, e, g) {
                        g = g || {};
                        if (2 > a)
                            throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var h = b.data("precompiled");
                        h || (h = b.text() || "",
                        h = w.template(null , "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"),
                        b.data("precompiled", h));
                        b = [e.$data];
                        e = w.extend({
                            koBindingContext: e
                        }, g.templateOptions);
                        e = w.tmpl(h, 
                        b, e);
                        e.appendTo(v.createElement("div"));
                        w.fragments = {};
                        return e
                    }
                    ;
                    this.createJavaScriptEvaluatorBlock = function(a) {
                        return "{{ko_code ((function() { return " + a + " })()) }}"
                    }
                    ;
                    this.addTemplate = function(a, b) {
                        v.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>")
                    }
                    ;
                    0 < a && (w.tmpl.tag.ko_code = {
                        open: "__.push($1 || '');"
                    },
                    w.tmpl.tag.ko_with = {
                        open: "with($1) {",
                        close: "} "
                    })
                }
                ;
                a.Sa.prototype = new a.H;
                var b = new a.Sa;
                0 < b.kc && a.ab(b);
                a.b("jqueryTmplTemplateEngine", a.Sa)
            })()
        })
    })();
})();

/*=============================================================================
    Author:         Eric M. Barnard - @ericmbarnard                             
    License:        MIT (http://opensource.org/licenses/mit-license.php)        
                                                                                
    Description:    Validation Library for KnockoutJS                           
    Version:        2.0.0-pre.3                                         
===============================================================================
*/
/*globals require: false, exports: false, define: false, ko: false */

(function(factory) {
    // Module systems magic dance.
    
    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        // CommonJS or Node: hard-coded dependency on "knockout"
        factory(require("knockout"), exports);
    } else if (typeof define === "function" && define["amd"]) {
        // AMD anonymous module with hard-coded dependency on "knockout"
        define(["knockout", "exports"], factory);
    } else {
        // <script> tag: use the global `ko` object, attaching a `mapping` property
        factory(ko, ko.validation = {});
    }
}(function(ko, exports) {
    
    if (typeof (ko) === 'undefined') {
        throw 'Knockout is required, please ensure it is loaded before loading this validation plug-in';
    }
    
    // create our namespace object
    ko.validation = exports;
    
    var kv = ko.validation
      , 
    koUtils = ko.utils
      , 
    unwrap = koUtils.unwrapObservable
      , 
    forEach = koUtils.arrayForEach
      , 
    extend = koUtils.extend;
    ;/*global ko: false*/
    
    var defaults = {
        registerExtenders: true,
        messagesOnModified: true,
        errorsAsTitle: true,
        // enables/disables showing of errors as title attribute of the target element.
        errorsAsTitleOnModified: false,
        // shows the error when hovering the input field (decorateElement must be true)
        messageTemplate: null ,
        insertMessages: true,
        // automatically inserts validation messages as <span></span>
        parseInputAttributes: false,
        // parses the HTML5 validation attribute from a form element and adds that to the object
        writeInputAttributes: false,
        // adds HTML5 input validation attributes to form elements that ko observable's are bound to
        decorateInputElement: false,
        // false to keep backward compatibility
        decorateElementOnModified: true,
        // true to keep backward compatibility
        errorClass: null ,
        // single class for error message and element
        errorElementClass: 'validationElement',
        // class to decorate error element
        errorMessageClass: 'validationMessage',
        // class to decorate error message
        allowHtmlMessages: false,
        // allows HTML in validation messages
        grouping: {
            deep: false,
            //by default grouping is shallow
            observable: true,
            //and using observables
            live: false //react to changes to observableArrays if observable === true
        },
        validate: {
        // throttle: 10
        }
    };
    
    // make a copy  so we can use 'reset' later
    var configuration = extend({}, defaults);
    
    configuration.html5Attributes = ['required', 'pattern', 'min', 'max', 'step'];
    configuration.html5InputTypes = ['email', 'number', 'date'];
    
    configuration.reset = function() {
        extend(configuration, defaults);
    }
    ;
    
    kv.configuration = configuration;
    ;kv.utils = (function() {
        var seedId = new Date().getTime();
        
        var domData = {};
        //hash of data objects that we reference from dom elements
        var domDataKey = '__ko_validation__';
        
        return {
            isArray: function(o) {
                return o.isArray || Object.prototype.toString.call(o) === '[object Array]';
            },
            isObject: function(o) {
                return o !== null  && typeof o === 'object';
            },
            isNumber: function(o) {
                return !isNaN(o);
            },
            isObservableArray: function(instance) {
                return !!instance && 
                typeof instance["remove"] === "function" && 
                typeof instance["removeAll"] === "function" && 
                typeof instance["destroy"] === "function" && 
                typeof instance["destroyAll"] === "function" && 
                typeof instance["indexOf"] === "function" && 
                typeof instance["replace"] === "function";
            },
            values: function(o) {
                var r = [];
                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        r.push(o[i]);
                    }
                }
                return r;
            },
            getValue: function(o) {
                return ( typeof o === 'function' ? o() : o) ;
            },
            hasAttribute: function(node, attr) {
                return node.getAttribute(attr) !== null ;
            },
            getAttribute: function(element, attr) {
                return element.getAttribute(attr);
            },
            setAttribute: function(element, attr, value) {
                return element.setAttribute(attr, value);
            },
            isValidatable: function(o) {
                return !!(o && o.rules && o.isValid && o.isModified);
            },
            insertAfter: function(node, newNode) {
                node.parentNode.insertBefore(newNode, node.nextSibling);
            },
            newId: function() {
                return seedId += 1;
            },
            getConfigOptions: function(element) {
                var options = kv.utils.contextFor(element);
                
                return options || kv.configuration;
            },
            setDomData: function(node, data) {
                var key = node[domDataKey];
                
                if (!key) {
                    node[domDataKey] = key = kv.utils.newId();
                }
                
                domData[key] = data;
            },
            getDomData: function(node) {
                var key = node[domDataKey];
                
                if (!key) {
                    return undefined;
                }
                
                return domData[key];
            },
            contextFor: function(node) {
                switch (node.nodeType) {
                case 1:
                case 8:
                    var context = kv.utils.getDomData(node);
                    if (context) {
                        return context;
                    }
                    if (node.parentNode) {
                        return kv.utils.contextFor(node.parentNode);
                    }
                    break;
                }
                return undefined;
            },
            isEmptyVal: function(val) {
                if (val === undefined) {
                    return true;
                }
                if (val === null ) {
                    return true;
                }
                if (val === "") {
                    return true;
                }
            },
            getOriginalElementTitle: function(element) {
                var savedOriginalTitle = kv.utils.getAttribute(element, 'data-orig-title')
                  , 
                currentTitle = element.title
                  , 
                hasSavedOriginalTitle = kv.utils.hasAttribute(element, 'data-orig-title');
                
                return hasSavedOriginalTitle ? 
                savedOriginalTitle : currentTitle;
            },
            async: function(expr) {
                if (window.setImmediate) {
                    window.setImmediate(expr);
                } 
                else {
                    window.setTimeout(expr, 0);
                }
            },
            forEach: function(object, callback) {
                if (kv.utils.isArray(object)) {
                    return forEach(object, callback);
                }
                for (var prop in object) {
                    if (object.hasOwnProperty(prop)) {
                        callback(object[prop], prop);
                    }
                }
            }
        };
    }());
    ;var api = (function() {
        
        var isInitialized = 0
          , 
        configuration = kv.configuration
          , 
        utils = kv.utils;
        
        function cleanUpSubscriptions(context) {
            forEach(context.subscriptions, function(subscription) {
                subscription.dispose();
            });
            context.subscriptions = [];
        }
        
        function dispose(context) {
            if (context.options.deep) {
                forEach(context.flagged, function(obj) {
                    delete obj.__kv_traversed;
                });
                context.flagged.length = 0;
            }
            
            if (!context.options.live) {
                cleanUpSubscriptions(context);
            }
        }
        
        function runTraversal(obj, context) {
            context.validatables = [];
            cleanUpSubscriptions(context);
            traverseGraph(obj, context);
            dispose(context);
        }
        
        function traverseGraph(obj, context, level) {
            var objValues = []
              , 
            val = obj.peek ? obj.peek() : obj;
            
            if (obj.__kv_traversed === true) {
                return;
            }
            
            if (context.options.deep) {
                obj.__kv_traversed = true;
                context.flagged.push(obj);
            }
            
            //default level value depends on deep option.
            level = (level !== undefined ? level : context.options.deep ? 1 : -1);
            
            // if object is observable then add it to the list
            if (ko.isObservable(obj)) {
                
                //make sure it is validatable object
                if (!obj.isValid) {
                    obj.extend({
                        validatable: true
                    });
                }
                context.validatables.push(obj);
                
                if (context.options.live && utils.isObservableArray(obj)) {
                    context.subscriptions.push(obj.subscribe(function() {
                        context.graphMonitor.valueHasMutated();
                    }));
                }
            }
            
            //get list of values either from array or object but ignore non-objects
            // and destroyed objects
            if (val && !val._destroy) {
                if (utils.isArray(val)) {
                    objValues = val;
                } else if (utils.isObject(val)) {
                    objValues = utils.values(val);
                }
            }
            
            //process recurisvely if it is deep grouping
            if (level !== 0) {
                utils.forEach(objValues, function(observable) {
                    
                    //but not falsy things and not HTML Elements
                    if (observable && !observable.nodeType) {
                        traverseGraph(observable, context, level + 1);
                    }
                });
            }
        }
        
        function collectErrors(array) {
            var errors = [];
            forEach(array, function(observable) {
                if (!observable.isValid()) {
                    errors.push(observable.error());
                }
            });
            return errors;
        }
        
        return {
            //Call this on startup
            //any config can be overridden with the passed in options
            init: function(options, force) {
                //done run this multiple times if we don't really want to
                if (isInitialized > 0 && !force) {
                    return;
                }
                
                //becuase we will be accessing options properties it has to be an object at least
                options = options || {};
                //if specific error classes are not provided then apply generic errorClass
                //it has to be done on option so that options.errorClass can override default
                //errorElementClass and errorMessage class but not those provided in options
                options.errorElementClass = options.errorElementClass || options.errorClass || configuration.errorElementClass;
                options.errorMessageClass = options.errorMessageClass || options.errorClass || configuration.errorMessageClass;
                
                extend(configuration, options);
                
                if (configuration.registerExtenders) {
                    kv.registerExtenders();
                }
                
                isInitialized = 1;
            },
            // backwards compatability
            configure: function(options) {
                kv.init(options);
            },
            
            // resets the config back to its original state
            reset: kv.configuration.reset,
            
            // recursivly walks a viewModel and creates an object that
            // provides validation information for the entire viewModel
            // obj -> the viewModel to walk
            // options -> {
            //    deep: false, // if true, will walk past the first level of viewModel properties
            //    observable: false // if true, returns a computed observable indicating if the viewModel is valid
            // }
            group: function group(obj, options) {
                // array of observables or viewModel
                options = extend(extend({}, configuration.grouping), options);
                
                var context = {
                    options: options,
                    graphMonitor: ko.observable(),
                    flagged: [],
                    subscriptions: [],
                    validatables: []
                };
                
                var result = null ;
                
                //if using observables then traverse structure once and add observables
                if (options.observable) {
                    runTraversal(obj, context);
                    
                    result = ko.computed(function() {
                        context.graphMonitor();
                        //register dependency
                        runTraversal(obj, context);
                        
                        return collectErrors(context.validatables);
                    });
                
                } else {
                    //if not using observables then every call to error() should traverse the structure
                    result = function() {
                        runTraversal(obj, context);
                        
                        return collectErrors(context.validatables);
                    }
                    ;
                }
                
                result.showAllMessages = function(show) {
                    // thanks @heliosPortal
                    if (show === undefined) {
                        //default to true
                        show = true;
                    }
                    
                    // ensure we have latest changes
                    result();
                    
                    forEach(context.validatables, function(observable) {
                        observable.isModified(show);
                    });
                }
                ;
                
                result.isAnyMessageShown = function() {
                    var invalidAndModifiedPresent = false;
                    
                    // ensure we have latest changes
                    result();
                    
                    invalidAndModifiedPresent = !!koUtils.arrayFirst(context.validatables, function(observable) {
                        return !observable.isValid() && observable.isModified();
                    });
                    return invalidAndModifiedPresent;
                }
                ;
                
                return result;
            },
            
            formatMessage: function(message, params, observable) {
                if (utils.isObject(params) && params.typeAttr) {
                    params = params.value;
                }
                if (typeof (message) === 'function') {
                    return message(params, observable);
                }
                var replacements = unwrap(params) || [];
                if (!utils.isArray(replacements)) {
                    replacements = [replacements];
                }
                return message.replace(/{(\d+)}/gi, function(match, index) {
                    if (typeof replacements[index] !== 'undefined') {
                        return replacements[index];
                    }
                    return match;
                });
            },
            
            // addRule:
            // This takes in a ko.observable and a Rule Context - which is just a rule name and params to supply to the validator
            // ie: kv.addRule(myObservable, {
            //        rule: 'required',
            //        params: true
            //    });
            //
            addRule: function(observable, rule) {
                observable.extend({
                    validatable: true
                });
                
                //push a Rule Context to the observables local array of Rule Contexts
                observable.rules.push(rule);
                return observable;
            },
            
            // addAnonymousRule:
            // Anonymous Rules essentially have all the properties of a Rule, but are only specific for a certain property
            // and developers typically are wanting to add them on the fly or not register a rule with the 'kv.rules' object
            //
            // Example:
            // var test = ko.observable('something').extend{(
            //    validation: {
            //        validator: function(val, someOtherVal){
            //            return true;
            //        },
            //        message: "Something must be really wrong!',
            //        params: true
            //    }
            //  )};
            addAnonymousRule: function(observable, ruleObj) {
                if (ruleObj['message'] === undefined) {
                    ruleObj['message'] = 'Error';
                }
                
                //make sure onlyIf is honoured
                if (ruleObj.onlyIf) {
                    ruleObj.condition = ruleObj.onlyIf;
                }
                
                //add the anonymous rule to the observable
                kv.addRule(observable, ruleObj);
            },
            
            addExtender: function(ruleName) {
                ko.extenders[ruleName] = function(observable, params) {
                    //params can come in a few flavors
                    // 1. Just the params to be passed to the validator
                    // 2. An object containing the Message to be used and the Params to pass to the validator
                    // 3. A condition when the validation rule to be applied
                    //
                    // Example:
                    // var test = ko.observable(3).extend({
                    //    max: {
                    //        message: 'This special field has a Max of {0}',
                    //        params: 2,
                    //        onlyIf: function() {
                    //                    return specialField.IsVisible();
                    //                }
                    //    }
                    //  )};
                    //
                    if (params && (params.message || params.onlyIf)) {
                        //if it has a message or condition object, then its an object literal to use
                        return kv.addRule(observable, {
                            rule: ruleName,
                            message: params.message,
                            params: utils.isEmptyVal(params.params) ? true : params.params,
                            condition: params.onlyIf
                        });
                    } else {
                        return kv.addRule(observable, {
                            rule: ruleName,
                            params: params
                        });
                    }
                }
                ;
            },
            
            // loops through all kv.rules and adds them as extenders to
            // ko.extenders
            registerExtenders: function() {
                // root extenders optional, use 'validation' extender if would cause conflicts
                if (configuration.registerExtenders) {
                    for (var ruleName in kv.rules) {
                        if (kv.rules.hasOwnProperty(ruleName)) {
                            if (!ko.extenders[ruleName]) {
                                kv.addExtender(ruleName);
                            }
                        }
                    }
                }
            },
            
            //creates a span next to the @element with the specified error class
            insertValidationMessage: function(element) {
                var span = document.createElement('SPAN');
                span.className = utils.getConfigOptions(element).errorMessageClass;
                utils.insertAfter(element, span);
                return span;
            },
            
            // if html-5 validation attributes have been specified, this parses
            // the attributes on @element
            parseInputValidationAttributes: function(element, valueAccessor) {
                forEach(kv.configuration.html5Attributes, function(attr) {
                    if (utils.hasAttribute(element, attr)) {
                        
                        var params = element.getAttribute(attr) || true;
                        
                        if (attr === 'min' || attr === 'max') 
                        {
                            // If we're validating based on the min and max attributes, we'll
                            // need to know what the 'type' attribute is set to
                            var typeAttr = element.getAttribute('type');
                            if (typeof typeAttr === "undefined" || !typeAttr) 
                            {
                                // From http://www.w3.org/TR/html-markup/input:
                                //   An input element with no type attribute specified represents the
                                //   same thing as an input element with its type attribute set to "text".
                                typeAttr = "text";
                            }
                            params = {
                                typeAttr: typeAttr,
                                value: params
                            };
                        }
                        
                        kv.addRule(valueAccessor(), {
                            rule: attr,
                            params: params
                        });
                    }
                });
                
                var currentType = element.getAttribute('type');
                forEach(kv.configuration.html5InputTypes, function(type) {
                    if (type === currentType) {
                        kv.addRule(valueAccessor(), {
                            rule: (type === 'date') ? 'dateISO' : type,
                            params: true
                        });
                    }
                });
            },
            
            // writes html5 validation attributes on the element passed in
            writeInputValidationAttributes: function(element, valueAccessor) {
                var observable = valueAccessor();
                
                if (!observable || !observable.rules) {
                    return;
                }
                
                var contexts = observable.rules();
                // observable array
                
                // loop through the attributes and add the information needed
                forEach(kv.configuration.html5Attributes, function(attr) {
                    var params;
                    var ctx = koUtils.arrayFirst(contexts, function(ctx) {
                        return ctx.rule && ctx.rule.toLowerCase() === attr.toLowerCase();
                    });
                    
                    if (!ctx) {
                        return;
                    }
                    
                    params = ctx.params;
                    
                    // we have to do some special things for the pattern validation
                    if (ctx.rule === "pattern") {
                        if (ctx.params instanceof RegExp) {
                            params = ctx.params.source;
                            // we need the pure string representation of the RegExpr without the //gi stuff
                        }
                    }
                    
                    // we have a rule matching a validation attribute at this point
                    // so lets add it to the element along with the params
                    element.setAttribute(attr, params);
                });
                
                contexts = null ;
            },
            
            //take an existing binding handler and make it cause automatic validations
            makeBindingHandlerValidatable: function(handlerName) {
                var init = ko.bindingHandlers[handlerName].init;
                
                ko.bindingHandlers[handlerName].init = function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    
                    init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
                    
                    return ko.bindingHandlers['validationCore'].init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
                }
                ;
            },
            
            // visit an objects properties and apply validation rules from a definition
            setRules: function(target, definition) {
                var setRules = function(target, definition) {
                    if (!target || !definition) {
                        return;
                    }
                    
                    for (var prop in definition) {
                        if (!definition.hasOwnProperty(prop)) {
                            continue;
                        }
                        var ruleDefinitions = definition[prop];
                        
                        //check the target property exists and has a value
                        if (!target[prop]) {
                            continue;
                        }
                        var targetValue = target[prop]
                          , 
                        unwrappedTargetValue = unwrap(targetValue)
                          , 
                        rules = {}
                          , 
                        nonRules = {};
                        
                        for (var rule in ruleDefinitions) {
                            if (!ruleDefinitions.hasOwnProperty(rule)) {
                                continue;
                            }
                            if (kv.rules[rule]) {
                                rules[rule] = ruleDefinitions[rule];
                            } else {
                                nonRules[rule] = ruleDefinitions[rule];
                            }
                        }
                        
                        //apply rules
                        if (ko.isObservable(targetValue)) {
                            targetValue.extend(rules);
                        }
                        
                        //then apply child rules
                        //if it's an array, apply rules to all children
                        if (unwrappedTargetValue && utils.isArray(unwrappedTargetValue)) {
                            for (var i = 0; i < unwrappedTargetValue.length; i++) {
                                setRules(unwrappedTargetValue[i], nonRules);
                            }
                            //otherwise, just apply to this property
                        } else {
                            setRules(unwrappedTargetValue, nonRules);
                        }
                    }
                }
                ;
                setRules(target, definition);
            }
        };
    
    }());
    
    // expose api publicly
    extend(ko.validation, api);
    ;//Validation Rules:
    // You can view and override messages or rules via:
    // kv.rules[ruleName]
    //
    // To implement a custom Rule, simply use this template:
    // kv.rules['<custom rule name>'] = {
    //      validator: function (val, param) {
    //          <custom logic>
    //          return <true or false>;
    //      },
    //      message: '<custom validation message>' //optionally you can also use a '{0}' to denote a placeholder that will be replaced with your 'param'
    // };
    //
    // Example:
    // kv.rules['mustEqual'] = {
    //      validator: function( val, mustEqualVal ){
    //          return val === mustEqualVal;
    //      },
    //      message: 'This field must equal {0}'
    // };
    //
    kv.rules = {};
    kv.rules['required'] = {
        validator: function(val, required) {
            var stringTrimRegEx = /^\s+|\s+$/g, 
            testVal;
            
            if (val === undefined || val === null ) {
                return !required;
            }
            
            testVal = val;
            if (typeof (val) === "string") {
                testVal = val.replace(stringTrimRegEx, '');
            }
            
            if (!required) {
                // if they passed: { required: false }, then don't require this
                return true;
            }
            
            return ( (testVal + '').length > 0) ;
        },
        message: 'This field is required.'
    };
    
    function minMaxValidatorFactory(validatorName) {
        var isMaxValidation = validatorName === "max";
        
        return function(val, options) {
            if (kv.utils.isEmptyVal(val)) {
                return true;
            }
            
            var comparisonValue, type;
            if (options.typeAttr === undefined) {
                // This validator is being called from javascript rather than
                // being bound from markup
                type = "text";
                comparisonValue = options;
            } else {
                type = options.typeAttr;
                comparisonValue = options.value;
            }
            
            // From http://www.w3.org/TR/2012/WD-html5-20121025/common-input-element-attributes.html#attr-input-min,
            // if the value is parseable to a number, then the minimum should be numeric
            if (!isNaN(comparisonValue) && !(comparisonValue instanceof Date)) {
                type = "number";
            }
            
            var regex, valMatches, comparisonValueMatches;
            switch (type.toLowerCase()) {
            case "week":
                regex = /^(\d{4})-W(\d{2})$/;
                valMatches = val.match(regex);
                if (valMatches === null ) {
                    throw "Invalid value for " + validatorName + " attribute for week input.  Should look like " + 
                    "'2000-W33' http://www.w3.org/TR/html-markup/input.week.html#input.week.attrs.min";
                }
                comparisonValueMatches = comparisonValue.match(regex);
                // If no regex matches were found, validation fails
                if (!comparisonValueMatches) {
                    return false;
                }
                
                if (isMaxValidation) {
                    return (valMatches[1] < comparisonValueMatches[1]) || // older year
                    // same year, older week
                    ((valMatches[1] === comparisonValueMatches[1]) && (valMatches[2] <= comparisonValueMatches[2]));
                } else {
                    return (valMatches[1] > comparisonValueMatches[1]) || // newer year
                    // same year, newer week
                    ((valMatches[1] === comparisonValueMatches[1]) && (valMatches[2] >= comparisonValueMatches[2]));
                }
                break;
            
            case "month":
                regex = /^(\d{4})-(\d{2})$/;
                valMatches = val.match(regex);
                if (valMatches === null ) {
                    throw "Invalid value for " + validatorName + " attribute for month input.  Should look like " + 
                    "'2000-03' http://www.w3.org/TR/html-markup/input.month.html#input.month.attrs.min";
                }
                comparisonValueMatches = comparisonValue.match(regex);
                // If no regex matches were found, validation fails
                if (!comparisonValueMatches) {
                    return false;
                }
                
                if (isMaxValidation) {
                    return ( (valMatches[1] < comparisonValueMatches[1]) || // older year
                    // same year, older month
                    ((valMatches[1] === comparisonValueMatches[1]) && (valMatches[2] <= comparisonValueMatches[2]))) ;
                } else {
                    return (valMatches[1] > comparisonValueMatches[1]) || // newer year
                    // same year, newer month
                    ((valMatches[1] === comparisonValueMatches[1]) && (valMatches[2] >= comparisonValueMatches[2]));
                }
                break;
            
            case "number":
            case "range":
                if (isMaxValidation) {
                    return ( !isNaN(val) && parseFloat(val) <= parseFloat(comparisonValue)) ;
                } else {
                    return ( !isNaN(val) && parseFloat(val) >= parseFloat(comparisonValue)) ;
                }
                break;
            
            default:
                if (isMaxValidation) {
                    return val <= comparisonValue;
                } else {
                    return val >= comparisonValue;
                }
            }
        }
        ;
    }
    
    kv.rules['min'] = {
        validator: minMaxValidatorFactory("min"),
        message: 'Please enter a value greater than or equal to {0}.'
    };
    
    kv.rules['max'] = {
        validator: minMaxValidatorFactory("max"),
        message: 'Please enter a value less than or equal to {0}.'
    };
    
    kv.rules['minLength'] = {
        validator: function(val, minLength) {
            if (kv.utils.isEmptyVal(val)) {
                return true;
            }
            var normalizedVal = kv.utils.isNumber(val) ? ('' + val) : val;
            return normalizedVal.length >= minLength;
        },
        message: 'Please enter at least {0} characters.'
    };
    
    kv.rules['maxLength'] = {
        validator: function(val, maxLength) {
            if (kv.utils.isEmptyVal(val)) {
                return true;
            }
            var normalizedVal = kv.utils.isNumber(val) ? ('' + val) : val;
            return normalizedVal.length <= maxLength;
        },
        message: 'Please enter no more than {0} characters.'
    };
    
    kv.rules['pattern'] = {
        validator: function(val, regex) {
            return kv.utils.isEmptyVal(val) || val.toString().match(regex) !== null ;
        },
        message: 'Please check this value.'
    };
    
    kv.rules['step'] = {
        validator: function(val, step) {
            
            // in order to handle steps of .1 & .01 etc.. Modulus won't work
            // if the value is a decimal, so we have to correct for that
            if (kv.utils.isEmptyVal(val) || step === 'any') {
                return true;
            }
            var dif = (val * 100) % (step * 100);
            return Math.abs(dif) < 0.00001 || Math.abs(1 - dif) < 0.00001;
        },
        message: 'The value must increment by {0}.'
    };
    
    kv.rules['email'] = {
        validator: function(val, validate) {
            if (!validate) {
                return true;
            }
            
            //I think an empty email address is also a valid entry
            //if one want's to enforce entry it should be done with 'required: true'
            return kv.utils.isEmptyVal(val) || (
            // jquery validate regex - thanks Scott Gonzalez
            validate && /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(val)
            );
        },
        message: 'Please enter a proper email address.'
    };
    
    kv.rules['date'] = {
        validator: function(value, validate) {
            if (!validate) {
                return true;
            }
            return kv.utils.isEmptyVal(value) || (validate && !/Invalid|NaN/.test(new Date(value)));
        },
        message: 'Please enter a proper date.'
    };
    
    kv.rules['dateISO'] = {
        validator: function(value, validate) {
            if (!validate) {
                return true;
            }
            return kv.utils.isEmptyVal(value) || (validate && /^\d{4}[-/](?:0?[1-9]|1[012])[-/](?:0?[1-9]|[12][0-9]|3[01])$/.test(value));
        },
        message: 'Please enter a proper date.'
    };
    
    kv.rules['number'] = {
        validator: function(value, validate) {
            if (!validate) {
                return true;
            }
            return kv.utils.isEmptyVal(value) || (validate && /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value));
        },
        message: 'Please enter a number.'
    };
    
    kv.rules['digit'] = {
        validator: function(value, validate) {
            if (!validate) {
                return true;
            }
            return kv.utils.isEmptyVal(value) || (validate && /^\d+$/.test(value));
        },
        message: 'Please enter a digit.'
    };
    
    kv.rules['phoneUS'] = {
        validator: function(phoneNumber, validate) {
            if (!validate) {
                return true;
            }
            if (kv.utils.isEmptyVal(phoneNumber)) {
                return true;
            }
            // makes it optional, use 'required' rule if it should be required
            if (typeof (phoneNumber) !== 'string') {
                return false;
            }
            phoneNumber = phoneNumber.replace(/\s+/g, "");
            return validate && phoneNumber.length > 9 && phoneNumber.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
        },
        message: 'Please specify a valid phone number.'
    };
    
    kv.rules['equal'] = {
        validator: function(val, params) {
            var otherValue = params;
            return val === kv.utils.getValue(otherValue);
        },
        message: 'Values must equal.'
    };
    
    kv.rules['notEqual'] = {
        validator: function(val, params) {
            var otherValue = params;
            return val !== kv.utils.getValue(otherValue);
        },
        message: 'Please choose another value.'
    };
    
    //unique in collection
    // options are:
    //    collection: array or function returning (observable) array
    //              in which the value has to be unique
    //    valueAccessor: function that returns value from an object stored in collection
    //              if it is null the value is compared directly
    //    external: set to true when object you are validating is automatically updating collection
    kv.rules['unique'] = {
        validator: function(val, options) {
            var c = kv.utils.getValue(options.collection)
              , 
            external = kv.utils.getValue(options.externalValue)
              , 
            counter = 0;
            
            if (!val || !c) {
                return true;
            }
            
            koUtils.arrayFilter(c, function(item) {
                if (val === (options.valueAccessor ? options.valueAccessor(item) : item)) {
                    counter++;
                }
            });
            // if value is external even 1 same value in collection means the value is not unique
            return counter < (!!external ? 1 : 2);
        },
        message: 'Please make sure the value is unique.'
    };
    
    
    //now register all of these!
    (function() {
        kv.registerExtenders();
    }());
    ;// The core binding handler
    // this allows us to setup any value binding that internally always
    // performs the same functionality
    ko.bindingHandlers['validationCore'] = (function() {
        
        return {
            init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var config = kv.utils.getConfigOptions(element);
                var observable = valueAccessor();
                
                // parse html5 input validation attributes, optional feature
                if (config.parseInputAttributes) {
                    kv.utils.async(function() {
                        kv.parseInputValidationAttributes(element, valueAccessor);
                    });
                }
                
                // if requested insert message element and apply bindings
                if (config.insertMessages && kv.utils.isValidatable(observable)) {
                    
                    // insert the <span></span>
                    var validationMessageElement = kv.insertValidationMessage(element);
                    
                    // if we're told to use a template, make sure that gets rendered
                    if (config.messageTemplate) {
                        ko.renderTemplate(config.messageTemplate, {
                            field: observable
                        }, null , validationMessageElement, 'replaceNode');
                    } else {
                        ko.applyBindingsToNode(validationMessageElement, {
                            validationMessage: observable
                        });
                    }
                }
                
                // write the html5 attributes if indicated by the config
                if (config.writeInputAttributes && kv.utils.isValidatable(observable)) {
                    
                    kv.writeInputValidationAttributes(element, valueAccessor);
                }
                
                // if requested, add binding to decorate element
                if (config.decorateInputElement && kv.utils.isValidatable(observable)) {
                    ko.applyBindingsToNode(element, {
                        validationElement: observable
                    });
                }
            }
        };
    
    }());
    
    // override for KO's default 'value', 'checked', 'textInput' and selectedOptions bindings
    kv.makeBindingHandlerValidatable("value");
    kv.makeBindingHandlerValidatable("checked");
    if (ko.bindingHandlers.textInput) {
        kv.makeBindingHandlerValidatable("textInput");
    }
    kv.makeBindingHandlerValidatable("selectedOptions");
    
    
    ko.bindingHandlers['validationMessage'] = {
        // individual error message, if modified or post binding
        update: function(element, valueAccessor) {
            var obsv = valueAccessor()
              , 
            config = kv.utils.getConfigOptions(element)
              , 
            val = unwrap(obsv)
              , 
            msg = null 
              , 
            isModified = false
              , 
            isValid = false;
            
            if (obsv === null  || typeof obsv === 'undefined') {
                throw new Error('Cannot bind validationMessage to undefined value. data-bind expression: ' + 
                element.getAttribute('data-bind'));
            }
            
            if (!obsv.isValid || !obsv.isModified) {
                throw new Error("Observable is not validatable");
            }
            
            isModified = obsv.isModified();
            isValid = obsv.isValid();
            
            var error = null ;
            if (!config.messagesOnModified || isModified) {
                error = isValid ? null  : obsv.error;
            }
            
            var isVisible = !config.messagesOnModified || isModified ? !isValid : false;
            var isCurrentlyVisible = element.style.display !== "none";
            
            if (config.allowHtmlMessages) {
                koUtils.setHtml(element, error);
            } else {
                ko.bindingHandlers.text.update(element, function() {
                    return error;
                });
            }
            
            if (isCurrentlyVisible && !isVisible) {
                element.style.display = 'none';
            } else if (!isCurrentlyVisible && isVisible) {
                element.style.display = '';
            }
        }
    };
    
    ko.bindingHandlers['validationElement'] = {
        update: function(element, valueAccessor, allBindingsAccessor) {
            var obsv = valueAccessor()
              , 
            config = kv.utils.getConfigOptions(element)
              , 
            val = unwrap(obsv)
              , 
            msg = null 
              , 
            isModified = false
              , 
            isValid = false;
            
            if (obsv === null  || typeof obsv === 'undefined') {
                throw new Error('Cannot bind validationElement to undefined value. data-bind expression: ' + 
                element.getAttribute('data-bind'));
            }
            
            if (!obsv.isValid || !obsv.isModified) {
                throw new Error("Observable is not validatable");
            }
            
            isModified = obsv.isModified();
            isValid = obsv.isValid();
            
            // create an evaluator function that will return something like:
            // css: { validationElement: true }
            var cssSettingsAccessor = function() {
                var css = {};
                
                var shouldShow = ((!config.decorateElementOnModified || isModified) ? !isValid : false);
                
                // css: { validationElement: false }
                css[config.errorElementClass] = shouldShow;
                
                return css;
            }
            ;
            
            //add or remove class on the element;
            ko.bindingHandlers.css.update(element, cssSettingsAccessor, allBindingsAccessor);
            if (!config.errorsAsTitle) {
                return;
            }
            
            ko.bindingHandlers.attr.update(element, function() {
                var 
                hasModification = !config.errorsAsTitleOnModified || isModified
                  , 
                title = kv.utils.getOriginalElementTitle(element);
                
                if (hasModification && !isValid) {
                    return {
                        title: obsv.error,
                        'data-orig-title': title
                    };
                } else if (!hasModification || isValid) {
                    return {
                        title: title,
                        'data-orig-title': null 
                    };
                }
            });
        }
    };
    
    // ValidationOptions:
    // This binding handler allows you to override the initial config by setting any of the options for a specific element or context of elements
    //
    // Example:
    // <div data-bind="validationOptions: { insertMessages: true, messageTemplate: 'customTemplate', errorMessageClass: 'mySpecialClass'}">
    //      <input type="text" data-bind="value: someValue"/>
    //      <input type="text" data-bind="value: someValue2"/>
    // </div>
    ko.bindingHandlers['validationOptions'] = (function() {
        return {
            init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var options = unwrap(valueAccessor());
                if (options) {
                    var newConfig = extend({}, kv.configuration);
                    extend(newConfig, options);
                    
                    //store the validation options on the node so we can retrieve it later
                    kv.utils.setDomData(element, newConfig);
                }
            }
        };
    }());
    ;// Validation Extender:
    // This is for creating custom validation logic on the fly
    // Example:
    // var test = ko.observable('something').extend{(
    //      validation: {
    //          validator: function(val, someOtherVal){
    //              return true;
    //          },
    //          message: "Something must be really wrong!',
    //          params: true
    //      }
    //  )};
    ko.extenders['validation'] = function(observable, rules) {
        // allow single rule or array
        forEach(kv.utils.isArray(rules) ? rules : [rules], function(rule) {
            // the 'rule' being passed in here has no name to identify a core Rule,
            // so we add it as an anonymous rule
            // If the developer is wanting to use a core Rule, but use a different message see the 'addExtender' logic for examples
            kv.addAnonymousRule(observable, rule);
        });
        return observable;
    }
    ;
    
    //This is the extender that makes a Knockout Observable also 'Validatable'
    //examples include:
    // 1. var test = ko.observable('something').extend({validatable: true});
    // this will ensure that the Observable object is setup properly to respond to rules
    //
    // 2. test.extend({validatable: false});
    // this will remove the validation properties from the Observable object should you need to do that.
    ko.extenders['validatable'] = function(observable, options) {
        if (!kv.utils.isObject(options)) {
            options = {
                enable: options
            };
        }
        
        if (!('enable' in options)) {
            options.enable = true;
        }
        
        if (options.enable && !kv.utils.isValidatable(observable)) {
            var config = kv.configuration.validate || {};
            var validationOptions = {
                throttleEvaluation: options.throttle || config.throttle
            };
            
            observable.error = ko.observable(null );
            // holds the error message, we only need one since we stop processing validators when one is invalid
            
            // observable.rules:
            // ObservableArray of Rule Contexts, where a Rule Context is simply the name of a rule and the params to supply to it
            //
            // Rule Context = { rule: '<rule name>', params: '<passed in params>', message: '<Override of default Message>' }
            observable.rules = ko.observableArray();
            //holds the rule Contexts to use as part of validation
            
            //in case async validation is occuring
            observable.isValidating = ko.observable(false);
            
            //the true holder of whether the observable is valid or not
            observable.__valid__ = ko.observable(true);
            
            observable.isModified = ko.observable(false);
            
            // a semi-protected observable
            observable.isValid = ko.computed(observable.__valid__);
            
            //manually set error state
            observable.setError = function(error) {
                observable.error(error);
                observable.__valid__(false);
            }
            ;
            
            //manually clear error state
            observable.clearError = function() {
                observable.error(null );
                observable.__valid__(true);
                return observable;
            }
            ;
            
            //subscribe to changes in the observable
            var h_change = observable.subscribe(function() {
                observable.isModified(true);
            });
            
            // we use a computed here to ensure that anytime a dependency changes, the
            // validation logic evaluates
            var h_obsValidationTrigger = ko.computed(extend({
                read: function() {
                    var obs = observable()
                      , 
                    ruleContexts = observable.rules();
                    
                    kv.validateObservable(observable);
                    
                    return true;
                }
            }, validationOptions));
            
            extend(h_obsValidationTrigger, validationOptions);
            
            observable._disposeValidation = function() {
                //first dispose of the subscriptions
                observable.isValid.dispose();
                observable.rules.removeAll();
                if (observable.isModified.getSubscriptionsCount() > 0) {
                    observable.isModified._subscriptions['change'] = [];
                }
                if (observable.isValidating.getSubscriptionsCount() > 0) {
                    observable.isValidating._subscriptions['change'] = [];
                }
                if (observable.__valid__.getSubscriptionsCount() > 0) {
                    observable.__valid__._subscriptions['change'] = [];
                }
                h_change.dispose();
                h_obsValidationTrigger.dispose();
                
                delete observable['rules'];
                delete observable['error'];
                delete observable['isValid'];
                delete observable['isValidating'];
                delete observable['__valid__'];
                delete observable['isModified'];
            }
            ;
        } else if (options.enable === false && observable._disposeValidation) {
            observable._disposeValidation();
        }
        return observable;
    }
    ;
    
    function validateSync(observable, rule, ctx) {
        //Execute the validator and see if its valid
        if (!rule.validator(observable(), (ctx.params === undefined ? true : unwrap(ctx.params)))) {
            // default param is true, eg. required = true
            
            //not valid, so format the error message and stick it in the 'error' variable
            observable.setError(kv.formatMessage(
            ctx.message || rule.message, 
            unwrap(ctx.params), 
            observable));
            return false;
        } else {
            return true;
        }
    }
    
    function validateAsync(observable, rule, ctx) {
        observable.isValidating(true);
        
        var callBack = function(valObj) {
            var isValid = false
              , 
            msg = '';
            
            if (!observable.__valid__()) {
                
                // since we're returning early, make sure we turn this off
                observable.isValidating(false);
                
                return;
                //if its already NOT valid, don't add to that
            }
            
            //we were handed back a complex object
            if (valObj['message']) {
                isValid = valObj.isValid;
                msg = valObj.message;
            } else {
                isValid = valObj;
            }
            
            if (!isValid) {
                //not valid, so format the error message and stick it in the 'error' variable
                observable.error(kv.formatMessage(
                msg || ctx.message || rule.message, 
                unwrap(ctx.params), 
                observable));
                observable.__valid__(isValid);
            }
            
            // tell it that we're done
            observable.isValidating(false);
        }
        ;
        
        //fire the validator and hand it the callback
        rule.validator(observable(), unwrap(ctx.params || true), callBack);
    }
    
    kv.validateObservable = function(observable) {
        var i = 0, 
        rule, // the rule validator to execute
        ctx, // the current Rule Context for the loop
        ruleContexts = observable.rules(), //cache for iterator
        len = ruleContexts.length;
        //cache for iterator
        
        for (; i < len; i++) {
            
            //get the Rule Context info to give to the core Rule
            ctx = ruleContexts[i];
            
            // checks an 'onlyIf' condition
            if (ctx.condition && !ctx.condition()) {
                continue;
            }
            
            //get the core Rule to use for validation
            rule = ctx.rule ? kv.rules[ctx.rule] : ctx;
            
            if (rule['async'] || ctx['async']) {
                //run async validation
                validateAsync(observable, rule, ctx);
            
            } else {
                //run normal sync validation
                if (!validateSync(observable, rule, ctx)) {
                    return false;
                    //break out of the loop
                }
            }
        }
        //finally if we got this far, make the observable valid again!
        observable.clearError();
        return true;
    }
    ;
    ;
    //quick function to override rule messages
    kv.localize = function(msgTranslations) {
        
        var msg, rule;
        
        //loop the properties in the object and assign the msg to the rule
        for (rule in msgTranslations) {
            if (kv.rules.hasOwnProperty(rule)) {
                kv.rules[rule].message = msgTranslations[rule];
            }
        }
    }
    ;
    ;/**
 * Possible invocations:
 *      applyBindingsWithValidation(viewModel)
 *      applyBindingsWithValidation(viewModel, options)
 *      applyBindingsWithValidation(viewModel, rootNode)
 *      applyBindingsWithValidation(viewModel, rootNode, options)
 */
    ko.applyBindingsWithValidation = function(viewModel, rootNode, options) {
        var node = document.body, 
        config;
        
        if (rootNode && rootNode.nodeType) {
            node = rootNode;
            config = options;
        } 
        else {
            config = rootNode;
        }
        
        kv.init();
        
        if (config) {
            config = extend(extend({}, kv.configuration), config);
            kv.utils.setDomData(node, config);
        }
        
        ko.applyBindings(viewModel, rootNode);
    }
    ;
    
    //override the original applyBindings so that we can ensure all new rules and what not are correctly registered
    var origApplyBindings = ko.applyBindings;
    ko.applyBindings = function(viewModel, rootNode) {
        
        kv.init();
        
        origApplyBindings(viewModel, rootNode);
    }
    ;
    
    ko.validatedObservable = function(initialValue, options) {
        if (!kv.utils.isObject(initialValue)) {
            return ko.observable(initialValue).extend({
                validatable: true
            });
        }
        
        var obsv = ko.observable(initialValue);
        obsv.errors = kv.group(initialValue, options);
        obsv.isValid = ko.observable(obsv.errors().length === 0);
        
        
        if (ko.isObservable(obsv.errors)) {
            obsv.errors.subscribe(function(errors) {
                obsv.isValid(errors.length === 0);
            });
        } 
        else {
            ko.computed(obsv.errors).subscribe(function(errors) {
                obsv.isValid(errors.length === 0);
            });
        }
        
        return obsv;
    }
    ;
    ;
}));

/// Knockout Mapping plugin v2.4.1
/// (c) 2013 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
/// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function(factory) {
    // Module systems magic dance.
    
    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        // CommonJS or Node: hard-coded dependency on "knockout"
        factory(require("knockout"), exports);
    } else if (typeof define === "function" && define["amd"]) {
        // AMD anonymous module with hard-coded dependency on "knockout"
        define(["knockout", "exports"], factory);
    } else {
        // <script> tag: use the global `ko` object, attaching a `mapping` property
        factory(ko, ko.mapping = {});
    }
}(function(ko, exports) {
    var DEBUG = true;
    var mappingProperty = "__ko_mapping__";
    var realKoDependentObservable = ko.dependentObservable;
    var mappingNesting = 0;
    var dependentObservables;
    var visitedObjects;
    var recognizedRootProperties = ["create", "update", "key", "arrayChanged"];
    var emptyReturn = {};
    
    var _defaultOptions = {
        include: ["_destroy"],
        ignore: [],
        copy: [],
        observe: []
    };
    var defaultOptions = _defaultOptions;
    
    // Author: KennyTM @ StackOverflow
    function unionArrays(x, y) {
        var obj = {};
        for (var i = x.length - 1; i >= 0; --i)
            obj[x[i]] = x[i];
        for (var i = y.length - 1; i >= 0; --i)
            obj[y[i]] = y[i];
        var res = [];
        
        for (var k in obj) {
            res.push(obj[k]);
        }
        ;
        
        return res;
    }
    
    function extendObject(destination, source) {
        var destType;
        
        for (var key in source) {
            if (source.hasOwnProperty(key) && source[key]) {
                destType = exports.getType(destination[key]);
                if (key && destination[key] && destType !== "array" && destType !== "string") {
                    extendObject(destination[key], source[key]);
                } else {
                    var bothArrays = exports.getType(destination[key]) === "array" && exports.getType(source[key]) === "array";
                    if (bothArrays) {
                        destination[key] = unionArrays(destination[key], source[key]);
                    } else {
                        destination[key] = source[key];
                    }
                }
            }
        }
    }
    
    function merge(obj1, obj2) {
        var merged = {};
        extendObject(merged, obj1);
        extendObject(merged, obj2);
        
        return merged;
    }
    
    exports.isMapped = function(viewModel) {
        var unwrapped = ko.utils.unwrapObservable(viewModel);
        return unwrapped && unwrapped[mappingProperty];
    }
    
    exports.fromJS = function(jsObject /*, inputOptions, target*/) {
        if (arguments.length == 0)
            throw new Error("When calling ko.fromJS, pass the object you want to convert.");
        
        try {
            if (!mappingNesting++) {
                dependentObservables = [];
                visitedObjects = new objectLookup();
            }
            
            var options;
            var target;
            
            if (arguments.length == 2) {
                if (arguments[1][mappingProperty]) {
                    target = arguments[1];
                } else {
                    options = arguments[1];
                }
            }
            if (arguments.length == 3) {
                options = arguments[1];
                target = arguments[2];
            }
            
            if (target) {
                options = merge(options, target[mappingProperty]);
            }
            options = fillOptions(options);
            
            var result = updateViewModel(target, jsObject, options);
            if (target) {
                result = target;
            }
            
            // Evaluate any dependent observables that were proxied.
            // Do this after the model's observables have been created
            if (!--mappingNesting) {
                while (dependentObservables.length) {
                    var DO = dependentObservables.pop();
                    if (DO) {
                        DO();
                        
                        // Move this magic property to the underlying dependent observable
                        DO.__DO["throttleEvaluation"] = DO["throttleEvaluation"];
                    }
                }
            }
            
            // Save any new mapping options in the view model, so that updateFromJS can use them later.
            result[mappingProperty] = merge(result[mappingProperty], options);
            
            return result;
        } catch (e) {
            mappingNesting = 0;
            throw e;
        }
    }
    ;
    
    exports.fromJSON = function(jsonString /*, options, target*/) {
        var parsed = ko.utils.parseJson(jsonString);
        arguments[0] = parsed;
        return exports.fromJS.apply(this, arguments);
    }
    ;
    
    exports.updateFromJS = function(viewModel) {
        throw new Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");
    }
    ;
    
    exports.updateFromJSON = function(viewModel) {
        throw new Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");
    }
    ;
    
    exports.toJS = function(rootObject, options) {
        if (!defaultOptions)
            exports.resetDefaultOptions();
        
        if (arguments.length == 0)
            throw new Error("When calling ko.mapping.toJS, pass the object you want to convert.");
        if (exports.getType(defaultOptions.ignore) !== "array")
            throw new Error("ko.mapping.defaultOptions().ignore should be an array.");
        if (exports.getType(defaultOptions.include) !== "array")
            throw new Error("ko.mapping.defaultOptions().include should be an array.");
        if (exports.getType(defaultOptions.copy) !== "array")
            throw new Error("ko.mapping.defaultOptions().copy should be an array.");
        
        // Merge in the options used in fromJS
        options = fillOptions(options, rootObject[mappingProperty]);
        
        // We just unwrap everything at every level in the object graph
        return exports.visitModel(rootObject, function(x) {
            return ko.utils.unwrapObservable(x)
        }, options);
    }
    ;
    
    exports.toJSON = function(rootObject, options) {
        var plainJavaScriptObject = exports.toJS(rootObject, options);
        return ko.utils.stringifyJson(plainJavaScriptObject);
    }
    ;
    
    exports.defaultOptions = function() {
        if (arguments.length > 0) {
            defaultOptions = arguments[0];
        } else {
            return defaultOptions;
        }
    }
    ;
    
    exports.resetDefaultOptions = function() {
        defaultOptions = {
            include: _defaultOptions.include.slice(0),
            ignore: _defaultOptions.ignore.slice(0),
            copy: _defaultOptions.copy.slice(0)
        };
    }
    ;
    
    exports.getType = function(x) {
        if ((x) && (typeof (x) === "object")) {
            if (x.constructor === Date)
                return "date";
            if (x.constructor === Array)
                return "array";
        }
        return typeof x;
    }
    
    function fillOptions(rawOptions, otherOptions) {
        var options = merge({}, rawOptions);
        
        // Move recognized root-level properties into a root namespace
        for (var i = recognizedRootProperties.length - 1; i >= 0; i--) {
            var property = recognizedRootProperties[i];
            
            // Carry on, unless this property is present
            if (!options[property])
                continue;
            
            // Move the property into the root namespace
            if (!(options[""] instanceof Object))
                options[""] = {};
            options[""][property] = options[property];
            delete options[property];
        }
        
        if (otherOptions) {
            options.ignore = mergeArrays(otherOptions.ignore, options.ignore);
            options.include = mergeArrays(otherOptions.include, options.include);
            options.copy = mergeArrays(otherOptions.copy, options.copy);
            options.observe = mergeArrays(otherOptions.observe, options.observe);
        }
        options.ignore = mergeArrays(options.ignore, defaultOptions.ignore);
        options.include = mergeArrays(options.include, defaultOptions.include);
        options.copy = mergeArrays(options.copy, defaultOptions.copy);
        options.observe = mergeArrays(options.observe, defaultOptions.observe);
        
        options.mappedProperties = options.mappedProperties || {};
        options.copiedProperties = options.copiedProperties || {};
        return options;
    }
    
    function mergeArrays(a, b) {
        if (exports.getType(a) !== "array") {
            if (exports.getType(a) === "undefined")
                a = [];
            else
                a = [a];
        }
        if (exports.getType(b) !== "array") {
            if (exports.getType(b) === "undefined")
                b = [];
            else
                b = [b];
        }
        
        return ko.utils.arrayGetDistinctValues(a.concat(b));
    }
    
    // When using a 'create' callback, we proxy the dependent observable so that it doesn't immediately evaluate on creation.
    // The reason is that the dependent observables in the user-specified callback may contain references to properties that have not been mapped yet.
    function withProxyDependentObservable(dependentObservables, callback) {
        var localDO = ko.dependentObservable;
        ko.dependentObservable = function(read, owner, options) {
            options = options || {};
            
            if (read && typeof read == "object") {
                // mirrors condition in knockout implementation of DO's
                options = read;
            }
            
            var realDeferEvaluation = options.deferEvaluation;
            
            var isRemoved = false;
            
            // We wrap the original dependent observable so that we can remove it from the 'dependentObservables' list we need to evaluate after mapping has
            // completed if the user already evaluated the DO themselves in the meantime.
            var wrap = function(DO) {
                // Temporarily revert ko.dependentObservable, since it is used in ko.isWriteableObservable
                var tmp = ko.dependentObservable;
                ko.dependentObservable = realKoDependentObservable;
                var isWriteable = ko.isWriteableObservable(DO);
                ko.dependentObservable = tmp;
                
                var wrapped = realKoDependentObservable({
                    read: function() {
                        if (!isRemoved) {
                            ko.utils.arrayRemoveItem(dependentObservables, DO);
                            isRemoved = true;
                        }
                        return DO.apply(DO, arguments);
                    },
                    write: isWriteable && function(val) {
                        return DO(val);
                    }
                    ,
                    deferEvaluation: true
                });
                if (DEBUG)
                    wrapped._wrapper = true;
                wrapped.__DO = DO;
                return wrapped;
            }
            ;
            
            options.deferEvaluation = true;
            // will either set for just options, or both read/options.
            var realDependentObservable = new realKoDependentObservable(read,owner,options);
            
            if (!realDeferEvaluation) {
                realDependentObservable = wrap(realDependentObservable);
                dependentObservables.push(realDependentObservable);
            }
            
            return realDependentObservable;
        }
        ko.dependentObservable.fn = realKoDependentObservable.fn;
        ko.computed = ko.dependentObservable;
        var result = callback();
        ko.dependentObservable = localDO;
        ko.computed = ko.dependentObservable;
        return result;
    }
    
    function updateViewModel(mappedRootObject, rootObject, options, parentName, parent, parentPropertyName, mappedParent) {
        var isArray = exports.getType(ko.utils.unwrapObservable(rootObject)) === "array";
        
        parentPropertyName = parentPropertyName || "";
        
        // If this object was already mapped previously, take the options from there and merge them with our existing ones.
        if (exports.isMapped(mappedRootObject)) {
            var previousMapping = ko.utils.unwrapObservable(mappedRootObject)[mappingProperty];
            options = merge(previousMapping, options);
        }
        
        var callbackParams = {
            data: rootObject,
            parent: mappedParent || parent
        };
        
        var hasCreateCallback = function() {
            return options[parentName] && options[parentName].create instanceof Function;
        }
        ;
        
        var createCallback = function(data) {
            return withProxyDependentObservable(dependentObservables, function() {
                
                if (ko.utils.unwrapObservable(parent) instanceof Array) {
                    return options[parentName].create({
                        data: data || callbackParams.data,
                        parent: callbackParams.parent,
                        skip: emptyReturn
                    });
                } else {
                    return options[parentName].create({
                        data: data || callbackParams.data,
                        parent: callbackParams.parent
                    });
                }
            });
        }
        ;
        
        var hasUpdateCallback = function() {
            return options[parentName] && options[parentName].update instanceof Function;
        }
        ;
        
        var updateCallback = function(obj, data) {
            var params = {
                data: data || callbackParams.data,
                parent: callbackParams.parent,
                target: ko.utils.unwrapObservable(obj)
            };
            
            if (ko.isWriteableObservable(obj)) {
                params.observable = obj;
            }
            
            return options[parentName].update(params);
        }
        
        var alreadyMapped = visitedObjects.get(rootObject);
        if (alreadyMapped) {
            return alreadyMapped;
        }
        
        parentName = parentName || "";
        
        if (!isArray) {
            // For atomic types, do a direct update on the observable
            if (!canHaveProperties(rootObject)) {
                switch (exports.getType(rootObject)) {
                case "function":
                    if (hasUpdateCallback()) {
                        if (ko.isWriteableObservable(rootObject)) {
                            rootObject(updateCallback(rootObject));
                            mappedRootObject = rootObject;
                        } else {
                            mappedRootObject = updateCallback(rootObject);
                        }
                    } else {
                        mappedRootObject = rootObject;
                    }
                    break;
                default:
                    if (ko.isWriteableObservable(mappedRootObject)) {
                        if (hasUpdateCallback()) {
                            var valueToWrite = updateCallback(mappedRootObject);
                            mappedRootObject(valueToWrite);
                            return valueToWrite;
                        } else {
                            var valueToWrite = ko.utils.unwrapObservable(rootObject);
                            mappedRootObject(valueToWrite);
                            return valueToWrite;
                        }
                    } else {
                        var hasCreateOrUpdateCallback = hasCreateCallback() || hasUpdateCallback();
                        
                        if (hasCreateCallback()) {
                            mappedRootObject = createCallback();
                        } else {
                            mappedRootObject = ko.observable(ko.utils.unwrapObservable(rootObject));
                        }
                        
                        if (hasUpdateCallback()) {
                            mappedRootObject(updateCallback(mappedRootObject));
                        }
                        
                        if (hasCreateOrUpdateCallback)
                            return mappedRootObject;
                    }
                }
            
            } else {
                mappedRootObject = ko.utils.unwrapObservable(mappedRootObject);
                if (!mappedRootObject) {
                    if (hasCreateCallback()) {
                        var result = createCallback();
                        
                        if (hasUpdateCallback()) {
                            result = updateCallback(result);
                        }
                        
                        return result;
                    } else {
                        if (hasUpdateCallback()) {
                            return updateCallback(result);
                        }
                        
                        mappedRootObject = {};
                    }
                }
                
                if (hasUpdateCallback()) {
                    mappedRootObject = updateCallback(mappedRootObject);
                }
                
                visitedObjects.save(rootObject, mappedRootObject);
                if (hasUpdateCallback())
                    return mappedRootObject;
                
                // For non-atomic types, visit all properties and update recursively
                visitPropertiesOrArrayEntries(rootObject, function(indexer) {
                    var fullPropertyName = parentPropertyName.length ? parentPropertyName + "." + indexer : indexer;
                    
                    if (ko.utils.arrayIndexOf(options.ignore, fullPropertyName) != -1) {
                        return;
                    }
                    
                    if (ko.utils.arrayIndexOf(options.copy, fullPropertyName) != -1) {
                        mappedRootObject[indexer] = rootObject[indexer];
                        return;
                    }
                    
                    if (typeof rootObject[indexer] != "object" && typeof rootObject[indexer] != "array" && options.observe.length > 0 && ko.utils.arrayIndexOf(options.observe, fullPropertyName) == -1) 
                    {
                        mappedRootObject[indexer] = rootObject[indexer];
                        options.copiedProperties[fullPropertyName] = true;
                        return;
                    }
                    
                    // In case we are adding an already mapped property, fill it with the previously mapped property value to prevent recursion.
                    // If this is a property that was generated by fromJS, we should use the options specified there
                    var prevMappedProperty = visitedObjects.get(rootObject[indexer]);
                    var retval = updateViewModel(mappedRootObject[indexer], rootObject[indexer], options, indexer, mappedRootObject, fullPropertyName, mappedRootObject);
                    var value = prevMappedProperty || retval;
                    
                    if (options.observe.length > 0 && ko.utils.arrayIndexOf(options.observe, fullPropertyName) == -1) 
                    {
                        mappedRootObject[indexer] = value();
                        options.copiedProperties[fullPropertyName] = true;
                        return;
                    }
                    
                    if (ko.isWriteableObservable(mappedRootObject[indexer])) {
                        value = ko.utils.unwrapObservable(value);
                        if (mappedRootObject[indexer]() !== value) {
                            mappedRootObject[indexer](value);
                        }
                    } else {
                        value = mappedRootObject[indexer] === undefined ? value : ko.utils.unwrapObservable(value);
                        mappedRootObject[indexer] = value;
                    }
                    
                    options.mappedProperties[fullPropertyName] = true;
                });
            }
        } else {
            //mappedRootObject is an array
            var changes = [];
            
            var hasKeyCallback = false;
            var keyCallback = function(x) {
                return x;
            }
            if (options[parentName] && options[parentName].key) {
                keyCallback = options[parentName].key;
                hasKeyCallback = true;
            }
            
            if (!ko.isObservable(mappedRootObject)) {
                // When creating the new observable array, also add a bunch of utility functions that take the 'key' of the array items into account.
                mappedRootObject = ko.observableArray([]);
                
                mappedRootObject.mappedRemove = function(valueOrPredicate) {
                    var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function(value) {
                        return value === keyCallback(valueOrPredicate);
                    }
                    ;
                    return mappedRootObject.remove(function(item) {
                        return predicate(keyCallback(item));
                    });
                }
                
                mappedRootObject.mappedRemoveAll = function(arrayOfValues) {
                    var arrayOfKeys = filterArrayByKey(arrayOfValues, keyCallback);
                    return mappedRootObject.remove(function(item) {
                        return ko.utils.arrayIndexOf(arrayOfKeys, keyCallback(item)) != -1;
                    });
                }
                
                mappedRootObject.mappedDestroy = function(valueOrPredicate) {
                    var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function(value) {
                        return value === keyCallback(valueOrPredicate);
                    }
                    ;
                    return mappedRootObject.destroy(function(item) {
                        return predicate(keyCallback(item));
                    });
                }
                
                mappedRootObject.mappedDestroyAll = function(arrayOfValues) {
                    var arrayOfKeys = filterArrayByKey(arrayOfValues, keyCallback);
                    return mappedRootObject.destroy(function(item) {
                        return ko.utils.arrayIndexOf(arrayOfKeys, keyCallback(item)) != -1;
                    });
                }
                
                mappedRootObject.mappedIndexOf = function(item) {
                    var keys = filterArrayByKey(mappedRootObject(), keyCallback);
                    var key = keyCallback(item);
                    return ko.utils.arrayIndexOf(keys, key);
                }
                
                mappedRootObject.mappedGet = function(item) {
                    return mappedRootObject()[mappedRootObject.mappedIndexOf(item)];
                }
                
                mappedRootObject.mappedCreate = function(value) {
                    if (mappedRootObject.mappedIndexOf(value) !== -1) {
                        throw new Error("There already is an object with the key that you specified.");
                    }
                    
                    var item = hasCreateCallback() ? createCallback(value) : value;
                    if (hasUpdateCallback()) {
                        var newValue = updateCallback(item, value);
                        if (ko.isWriteableObservable(item)) {
                            item(newValue);
                        } else {
                            item = newValue;
                        }
                    }
                    mappedRootObject.push(item);
                    return item;
                }
            }
            
            var currentArrayKeys = filterArrayByKey(ko.utils.unwrapObservable(mappedRootObject), keyCallback).sort();
            var newArrayKeys = filterArrayByKey(rootObject, keyCallback);
            if (hasKeyCallback)
                newArrayKeys.sort();
            var editScript = ko.utils.compareArrays(currentArrayKeys, newArrayKeys);
            
            var ignoreIndexOf = {};
            
            var i, j;
            
            var unwrappedRootObject = ko.utils.unwrapObservable(rootObject);
            var itemsByKey = {};
            var optimizedKeys = true;
            for (i = 0,
            j = unwrappedRootObject.length; i < j; i++) {
                var key = keyCallback(unwrappedRootObject[i]);
                if (key === undefined || key instanceof Object) {
                    optimizedKeys = false;
                    break;
                }
                itemsByKey[key] = unwrappedRootObject[i];
            }
            
            var newContents = [];
            var passedOver = 0;
            for (i = 0,
            j = editScript.length; i < j; i++) {
                var key = editScript[i];
                var mappedItem;
                var fullPropertyName = parentPropertyName + "[" + i + "]";
                switch (key.status) {
                case "added":
                    var item = optimizedKeys ? itemsByKey[key.value] : getItemByKey(ko.utils.unwrapObservable(rootObject), key.value, keyCallback);
                    mappedItem = updateViewModel(undefined, item, options, parentName, mappedRootObject, fullPropertyName, parent);
                    if (!hasCreateCallback()) {
                        mappedItem = ko.utils.unwrapObservable(mappedItem);
                    }
                    
                    var index = ignorableIndexOf(ko.utils.unwrapObservable(rootObject), item, ignoreIndexOf);
                    
                    if (mappedItem === emptyReturn) {
                        passedOver++;
                    } else {
                        newContents[index - passedOver] = mappedItem;
                    }
                    
                    ignoreIndexOf[index] = true;
                    break;
                case "retained":
                    var item = optimizedKeys ? itemsByKey[key.value] : getItemByKey(ko.utils.unwrapObservable(rootObject), key.value, keyCallback);
                    mappedItem = getItemByKey(mappedRootObject, key.value, keyCallback);
                    updateViewModel(mappedItem, item, options, parentName, mappedRootObject, fullPropertyName, parent);
                    
                    var index = ignorableIndexOf(ko.utils.unwrapObservable(rootObject), item, ignoreIndexOf);
                    newContents[index] = mappedItem;
                    ignoreIndexOf[index] = true;
                    break;
                case "deleted":
                    mappedItem = getItemByKey(mappedRootObject, key.value, keyCallback);
                    break;
                }
                
                changes.push({
                    event: key.status,
                    item: mappedItem
                });
            }
            
            mappedRootObject(newContents);
            
            if (options[parentName] && options[parentName].arrayChanged) {
                ko.utils.arrayForEach(changes, function(change) {
                    options[parentName].arrayChanged(change.event, change.item);
                });
            }
        }
        
        return mappedRootObject;
    }
    
    function ignorableIndexOf(array, item, ignoreIndices) {
        for (var i = 0, j = array.length; i < j; i++) {
            if (ignoreIndices[i] === true)
                continue;
            if (array[i] === item)
                return i;
        }
        return null ;
    }
    
    function mapKey(item, callback) {
        var mappedItem;
        if (callback)
            mappedItem = callback(item);
        if (exports.getType(mappedItem) === "undefined")
            mappedItem = item;
        
        return ko.utils.unwrapObservable(mappedItem);
    }
    
    function getItemByKey(array, key, callback) {
        array = ko.utils.unwrapObservable(array);
        for (var i = 0, j = array.length; i < j; i++) {
            var item = array[i];
            if (mapKey(item, callback) === key)
                return item;
        }
        
        throw new Error("When calling ko.update*, the key '" + key + "' was not found!");
    }
    
    function filterArrayByKey(array, callback) {
        return ko.utils.arrayMap(ko.utils.unwrapObservable(array), function(item) {
            if (callback) {
                return mapKey(item, callback);
            } else {
                return item;
            }
        });
    }
    
    function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
        if (exports.getType(rootObject) === "array") {
            for (var i = 0; i < rootObject.length; i++)
                visitorCallback(i);
        } else {
            for (var propertyName in rootObject)
                visitorCallback(propertyName);
        }
    }
    ;
    
    function canHaveProperties(object) {
        var type = exports.getType(object);
        return ((type === "object") || (type === "array")) && (object !== null );
    }
    
    // Based on the parentName, this creates a fully classified name of a property
    
    function getPropertyName(parentName, parent, indexer) {
        var propertyName = parentName || "";
        if (exports.getType(parent) === "array") {
            if (parentName) {
                propertyName += "[" + indexer + "]";
            }
        } else {
            if (parentName) {
                propertyName += ".";
            }
            propertyName += indexer;
        }
        return propertyName;
    }
    
    exports.visitModel = function(rootObject, callback, options) {
        options = options || {};
        options.visitedObjects = options.visitedObjects || new objectLookup();
        
        var mappedRootObject;
        var unwrappedRootObject = ko.utils.unwrapObservable(rootObject);
        
        if (!canHaveProperties(unwrappedRootObject)) {
            return callback(rootObject, options.parentName);
        } else {
            options = fillOptions(options, unwrappedRootObject[mappingProperty]);
            
            // Only do a callback, but ignore the results
            callback(rootObject, options.parentName);
            mappedRootObject = exports.getType(unwrappedRootObject) === "array" ? [] : {};
        }
        
        options.visitedObjects.save(rootObject, mappedRootObject);
        
        var parentName = options.parentName;
        visitPropertiesOrArrayEntries(unwrappedRootObject, function(indexer) {
            if (options.ignore && ko.utils.arrayIndexOf(options.ignore, indexer) != -1)
                return;
            
            var propertyValue = unwrappedRootObject[indexer];
            options.parentName = getPropertyName(parentName, unwrappedRootObject, indexer);
            
            // If we don't want to explicitly copy the unmapped property...
            if (ko.utils.arrayIndexOf(options.copy, indexer) === -1) {
                // ...find out if it's a property we want to explicitly include
                if (ko.utils.arrayIndexOf(options.include, indexer) === -1) {
                    // The mapped properties object contains all the properties that were part of the original object.
                    // If a property does not exist, and it is not because it is part of an array (e.g. "myProp[3]"), then it should not be unmapped.
                    if (unwrappedRootObject[mappingProperty] 
                    && unwrappedRootObject[mappingProperty].mappedProperties && !unwrappedRootObject[mappingProperty].mappedProperties[indexer] 
                    && unwrappedRootObject[mappingProperty].copiedProperties && !unwrappedRootObject[mappingProperty].copiedProperties[indexer] 
                    && !(exports.getType(unwrappedRootObject) === "array")) {
                        return;
                    }
                }
            }
            
            var outputProperty;
            switch (exports.getType(ko.utils.unwrapObservable(propertyValue))) {
            case "object":
            case "array":
            case "undefined":
                var previouslyMappedValue = options.visitedObjects.get(propertyValue);
                mappedRootObject[indexer] = (exports.getType(previouslyMappedValue) !== "undefined") ? previouslyMappedValue : exports.visitModel(propertyValue, callback, options);
                break;
            default:
                mappedRootObject[indexer] = callback(propertyValue, options.parentName);
            }
        });
        
        return mappedRootObject;
    }
    
    function simpleObjectLookup() {
        var keys = [];
        var values = [];
        this.save = function(key, value) {
            var existingIndex = ko.utils.arrayIndexOf(keys, key);
            if (existingIndex >= 0)
                values[existingIndex] = value;
            else {
                keys.push(key);
                values.push(value);
            }
        }
        ;
        this.get = function(key) {
            var existingIndex = ko.utils.arrayIndexOf(keys, key);
            var value = (existingIndex >= 0) ? values[existingIndex] : undefined;
            return value;
        }
        ;
    }
    ;
    
    function objectLookup() {
        var buckets = {};
        
        var findBucket = function(key) {
            var bucketKey;
            try {
                bucketKey = key;
                //JSON.stringify(key);
            } 
            catch (e) {
                bucketKey = "$$$";
            }
            
            var bucket = buckets[bucketKey];
            if (bucket === undefined) {
                bucket = new simpleObjectLookup();
                buckets[bucketKey] = bucket;
            }
            return bucket;
        }
        ;
        
        this.save = function(key, value) {
            findBucket(key).save(key, value);
        }
        ;
        this.get = function(key) {
            return findBucket(key).get(key);
        }
        ;
    }
    ;
}));

/*
 * Utility method for validating a view model and displaying error messages if view model has invalid fields.
 */
ko.validation.vmIsValid = function(viewModel, messageFunc) {
    // ko.validation.group returns a function that returns an array
    // function also has functions 'showAllMessages' and 'isAnyMessageShown'
    
    var errorsFunc = ko.validation.group(viewModel, {
        deep: true
    });
    var errorsArr = errorsFunc();
    if (errorsArr.length) {
        messageFunc(null );
        messageFunc(errorsArr[0]);
        errorsFunc.showAllMessages();
        return false;
    }
    return true;
}

ko.subscribable.fn.subscribeChanged = function(callback) {
    var oldValue;
    this.subscribe(function(_oldValue) {
        oldValue = _oldValue;
    }, this, 'beforeChange');
    
    this.subscribe(function(newValue) {
        callback(newValue, oldValue);
    });
}
;

/*
 * Custom function (not directly part of knockout framework) for geting value from variable that may be a function.
 */
ko.getValue = function(o) {
    return ( typeof o === 'function' ? o() : o) ;
}

/*
 * Ensures a field has the same value as another field (E.g. "Confirm Password" same as "Password"
 * Parameter: otherField: the field to compare to
 * Example
 *
 * viewModel = {
 *   var vm = this;
 *   vm.password = ko.observable();
 *   vm.confirmPassword = ko.observable();
 * }   
 * viewModel.confirmPassword.extend( areSame: { params: viewModel.password, message: "Confirm password must match password" });
 */
ko.validation.rules['areSame'] = {
    validator: function(val, otherField) {
        return val === ko.getValue(otherField);
    },
    message: Granite.I18n.get('The fields must have the same value.')
};

/*
 * Checks password criteria required by Okta. 'no parts of your username' is verified server side.
 */
ko.validation.rules['passwordComplexity'] = {
    validator: function(val) {
        // return /(?=^[^\s]{8,128}$)((?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^\w\d\s]))^.*/.test('' + val + ''); // upper, lower, number, special, 8+
        return /(?=^[^\s]{8,128}$)((?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z]))^.*/.test('' + val + '');
        // upper, lower, number, 8+
    },
    message: Granite.I18n.get('Passwords must have at least 8 characters, a lowercase letter, an uppercase letter, a number, and no parts of your username.')
};

/*
 * Validate phone number. Used on edit profile.
 * @param context: object which contains 'phone' property with value being one of 'usPhone', 'required', or other (meaning no validation)
 * @param canBeEmpty: this means phone is valid if empty OR if passes validation rules. This overrides the 'required' phone property above.
 */
ko.validation.rules['phone'] = {
    validator: function(val, options) {
        var context = ko.getValue(options.context);
        var canBeEmpty = ko.getValue(options.canBeEmpty);
        if (!context)
            return true;
        if (val || !canBeEmpty) {
            if (context.phone === 'usPhone') {
                if (!val)
                    return false;
                val = val.replace(/\s+/g, "");
                return val.length > 9 && val.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}\s?(x|x\.|ext|ext\.|extension)?\s?\d{0,5}$/);
            } else if (context.phone === 'required') {
                return ( val && val.length > 0 && val.match(/[0-9 \-()]+/)) ;
            }
        } else {
            return canBeEmpty || context.phone !== 'required';
        }
    },
    message: function(options) {
        var context = ko.getValue(options.context());
        if (context.phone === 'usPhone') {
            return Granite.I18n.get('Please enter a valid phone number.');
        } else {
            return Granite.I18n.get('Please enter your telephone number.');
        }
    }
};

/*
 * Validate postal code. Used on edit profile.
 * @param context: object which contains 'postal' property with value being type of postal code or other (meaning no validation)
 */
ko.validation.rules['postal'] = {
    validator: function(val, options) {
        var context = ko.getValue(options.context);
        if (!context)
            return true;
        var re = null ;
        if (context.postal === 'sevenDigits') {
            re = new RegExp("^\\d{7}$");
        } else if (context.postal === 'sixDigits') {
            re = new RegExp("^\\d{6}$");
        } else if (context.postal === 'fiveDigits') {
            re = new RegExp("^\\d{5}$");
        } else if (context.postal === 'fourDigits') {
            re = new RegExp("^\\d{4}$");
        } else if (context.postal === 'usPostal') {
            re = new RegExp("^\\d{5}([-]\\d{4})?$");
        } else if (context.postal === 'portugalPostal') {
            re = new RegExp("^\\d{5}-\\d{4}$");
        } else if (context.postal === 'ukPostal') {
            re = new RegExp("^([A-Z]{1,2}[0-9][A-Z0-9]? [0-9][ABD-HJLNP-UW-Z]{2})*$");
        } else if (context.postal === 'nlPostal') {
            re = new RegExp("^\\d{4}\\s[a-zA-Z]{2}$");
        } else if (context.postal === 'caPostal') {
            re = new RegExp("^[a-zA-Z]\\d[a-zA-Z]\\s?\\d[a-zA-Z]\\d$");
        } else if (context.postal === 'required') {
            re = new RegExp(".+");
        } else {
            return true;
        }
        return val && re.test(val);
    },
    message: function(options) {
        var context = ko.getValue(options.context);
        if (context.postal === 'sevenDigits') {
            return Granite.I18n.get("Please enter a 7 digit Postal Code.");
        } else if (context.postal === 'sixDigits') {
            return Granite.I18n.get("Please enter a 6 digit Postal Code.");
        } else if (context.postal === 'fiveDigits') {
            return Granite.I18n.get("Please enter a 5 digit Postal Code.");
        } else if (context.postal === 'fourDigits') {
            return Granite.I18n.get("Please enter a 4 digit Postal Code.");
        } else if (context.postal === 'usPostal') {
            return Granite.I18n.get("Please enter a valid US Postal Code.");
        } else if (context.postal === 'portugalPostal') {
            return Granite.I18n.get("Please enter a Postal Code in the form XXXXX-XXXX.");
        } else if (context.postal === 'ukPostal') {
            return Granite.I18n.get("Please enter a valid Postal Code.");
        } else if (context.postal === 'nlPostal') {
            return Granite.I18n.get("Please enter a Postal Code in the form XXXX XX.");
        } else if (context.postal === 'caPostal') {
            return Granite.I18n.get("Please enter a valid Canadian Postal Code.");
        } else if (context.postal === 'required') {
            return Granite.I18n.get("Please enter your postal code.");
        }
    }
}

ko.validation.rules['checked'] = {
    validator: function(value) {
        console.log(value);
        if (!value) {
            return false;
        }
        return true;
    }
};

// register above validation rules
ko.validation.registerExtenders();

// define emailvalidate namespace
var emailvalidate = emailvalidate || {};

(function() {
    var showSuccess = function(formElement) {
        $(formElement).hide();
        var successelem = $(formElement).data('successelem');
        if (successelem)
            $('#' + successelem).show();
        $('.hide-on-submit').hide();
    }
    
    emailvalidate.Form = function() {
        var email = ko.observable().extend({
            email: {
                message: Granite.I18n.get('Please enter a valid email address.')
            },
            required: {
                message: Granite.I18n.get('Please enter a valid email address.')
            }
        });
        var message = ko.observable();
        var emailSent = ko.observable(false);
        
        var reset = function() {
            email('');
            email.clearError();
            message('');
            emailSent(false);
        }
        
        var sendEmail = function(formElement) {
            var self = this;
            
            if (!ko.validation.vmIsValid(self, message)) {
                $().showLoading('complete');
                return;
            }
            
            message('');
            // clear messages
            
            var data = $(formElement).serialize();
            
            $.ajax({
                url: $(formElement).attr('action'),
                type: $(formElement).attr('method'),
                data: data,
                dataType: "json",
                cache: false
            }).done(function(data, status, jqXHR) {
                if (data && data.redirect) {
                    window.location.href = data.redirect;
                } else if (data && data.success) {
                    emailSent(true);
                    showSuccess(formElement);
                } else {
                    message(Granite.I18n.get('An unexpected error occurred.'));
                }
            }).fail(function(jqXHR, textStatus, errorThrown) {
                infaUtils.handleFail(jqXHR, textStatus, errorThrown, message);
            }).always(function() {
                $().showLoading('complete');
            });
        }
        ;
        
        return {
            email: email,
            message: message,
            sendEmail: sendEmail,
            emailSent: emailSent,
            reset: reset
        };
    }
})();

// define register namespace
var register = register || {};

$(function() {
    if ($('#register_form').length) {
        
        register.RegisterForm = function() {
            var email = ko.observable().extend({
                email: {
                    message: Granite.I18n.get('Please enter a valid email address.')
                },
                required: {
                    message: Granite.I18n.get('Please enter a valid email address.')
                }
            });
            var firstName = ko.observable().extend({
                required: {
                    message: Granite.I18n.get('Please provide a first name.')
                }
            });
            var lastName = ko.observable().extend({
                required: {
                    message: Granite.I18n.get('Please provide a last name.')
                }
            });
            var company = ko.observable().extend({
                required: {
                    message: Granite.I18n.get('Please provide a company.')
                }
            });
            var country = ko.observable("").extend({
                required: {
                    message: Granite.I18n.get('Please enter your country.')
                }
            });
            var countryOptions = ko.observableArray(modprofile.countries);
            var password = ko.observable().extend({
                passwordComplexity: true
            });
            var passwordconf = ko.observable().extend({
                required: {
                    message: Granite.I18n.get('Please provide a password.')
                },
                areSame: {
                    params: password,
                    message: Granite.I18n.get("Passwords do not match.")
                }
            });
            var agreeToTerms = ko.observable(false).extend({
                checked: {
                    message: Granite.I18n.get('Please agree to the Terms and Conditions to complete your registration.')
                }
            });
            var message = ko.observable();
            
            var doRegister = function(formElement) {
                var self = this;
                
                if (!ko.validation.vmIsValid(self, message)) {
                    $().showLoading('complete');
                    return;
                }
                
                message('');
                // clear messages
                
                var data = $(formElement).serialize();
                
                $.ajax({
                    url: $(formElement).attr('action'),
                    type: $(formElement).attr('method'),
                    data: data,
                    dataType: "json",
                    cache: false
                }).done(function(data, status, jqXHR) {
                    if (data && data.redirect) {
                        window.location.href = data.redirect;
                    } else if (data && data.status === 'PROVISIONED') {
                        message(Granite.I18n.get('A new user has been provisioned. Please check your email: ') + email());
                        $().showLoading('complete');
                    } else if (data && data.status === 'ACTIVE') {
                        _login(formElement);
                    } else {
                        message(Granite.I18n.get('An unexpected error occurred. Please try logging in with your new account or try again.'));
                        $().showLoading('complete');
                    }
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    infaUtils.handleFail(jqXHR, textStatus, errorThrown, message);
                    $().showLoading('complete');
                }).always(function() {
                
                });
            }
            ;
            
            var _setRedirectCookie = function() {
                var redirect = register.dashboardLink;
                if (!redirect) {
                    redirect = infa.homeUrl;
                }
                $.cookie('saml_request_path', redirect, {
                    path: '/',
                    raw: true
                });
            }
            
            var _login = function(formElement) {
                _setRedirectCookie();
                var username = $(formElement).find("input[name='email']").val();
                var password = $(formElement).find("input[name='password']").val();
                $.ajax({
                    url: infa.rootUrl + '/api/v1/public/user/login.ws.json',
                    type: 'POST',
                    data: {
                        username: username,
                        password: password
                    },
                    dataType: "json",
                    cache: false
                }).done(function(data, status, jqXHR) {
                    if (data && data.redirect) {
                        window.location.href = data.redirect;
                    } else {
                        error(Granite.I18n.get("An unexpected error occurred during login. Please try again."));
                    }
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    infaUtils.handleFail(jqXHR, textStatus, errorThrown, message);
                });
            }
            ;
            
            return {
                firstName: firstName,
                lastName: lastName,
                company: company,
                country: country,
                countryOptions: countryOptions,
                message: message,
                register: doRegister,
                password: password,
                passwordconf: passwordconf,
                agreeToTerms: agreeToTerms
            };
        }
        
        register.viewModel = (function() {
            var registerform = new register.RegisterForm();
            
            var marketoLoad = function() {
                var marketo = CQ_Analytics.MarketoLeadStoreMgr.getData();
                if (marketo) {
                    registerform.firstName(marketo.FirstName);
                    registerform.lastName(marketo.LastName);
                    registerform.company(marketo.Company);
                }
            }
            ;
            
            if (CQ_Analytics.MarketoLeadStoreMgr) {
                CQ_Analytics.MarketoLeadStoreMgr.addListener("update", marketoLoad);
            }
            
            return {
                registerformVM: registerform
            };
        })();
        
        ko.applyBindings(register.viewModel, $('#register_form')[0]);
        $('#register_form input').on('invalid', function(e) {
            $().showLoading('complete');
        });
    }
});

// define login namespace
var login = login || {};

$(function() {
    if ($('#login-form').length) {
        
        var setRedirectCookie = function() {
            var redirect = infaUtils.getUrlParameter("redirect");
            var forgotPasswordPath = $('#fplink').attr('href');
            if (!redirect) {
                var curPath = window.location.pathname;
                if (forgotPasswordPath && forgotPasswordPath == curPath) {
                    redirect = infa.homeUrl;
                } else {
                    redirect = infa.rootUrl + window.location.pathname;
                }
            }
            $.cookie('saml_request_path', redirect, {
                path: '/',
                raw: true
            });
        }
        
        var checkOktaForSession = function() {
            // login.idpDomain set in sightly
            if (!login.idpDomain) {
                console.log("misssing idp configuration");
                return $.Deferred().reject().promise();
            }
            
            var apiUrl = 'https://' + login.idpDomain + '/api/v1/users/me';
            return $.ajax({
                url: apiUrl,
                type: "GET",
                cache: false,
                dataType: "json",
                xhrFields: {
                    withCredentials: true
                }
            });
        }
        
        var getSoftLoginUrl = function(data, status, jqXHR) {
            if (!data.id) {
                console.log("missing userId");
                return $.Deferred().reject().promise();
            }
            if (data.status !== 'ACTIVE') {
                console.log("use not active");
                return $.Deferred().reject().promise();
            }
            
            return $.ajax({
                url: infa.rootUrl + '/api/v1/public/user/login/soft.ws.json',
                type: "POST",
                cache: false,
                dataType: "json",
                data: {
                    userId: data.id
                }
            });
        }
        
        var doSoftLogin = function(data, status, jqXHR) {
            if (data.redirect) {
                setRedirectCookie();
                window.location.href = data.redirect;
            } else {
                console.log("missing redirect");
                return $.Deferred().reject().promise();
            }
        }
        
        var showLoginLightbox = function() {
            $('#modal-login').modal();
        }
        
        login.showLogin = function() {
            checkOktaForSession()
            .then(getSoftLoginUrl, showLoginLightbox)
            .then(doSoftLogin, showLoginLightbox)
            .then(null , showLoginLightbox);
        }
        
        login.Credentials = function() {
            var username = ko.observable().extend({
                required: {
                    message: Granite.I18n.get("Please enter a valid user name.")
                }
            });
            var password = ko.observable().extend({
                required: {
                    message: Granite.I18n.get("Please enter your password.")
                }
            });
            var error = ko.observable();
            
            var reset = function() {
                username('');
                username.clearError();
                password('');
                password.clearError();
                error('');
            }
            
            var login = function(formElement) {
                var self = this;
                
                if (!ko.validation.vmIsValid(self, error)) {
                    $().showLoading('complete');
                    return;
                }
                
                // clear out any error message
                error("");
                
                var data = $(formElement).serializeArray();
                
                $.ajax({
                    url: $(formElement).attr('action'),
                    type: $(formElement).attr('method'),
                    data: $.param(data),
                    dataType: "json",
                    cache: false
                }).done(function(data, status, jqXHR) {
                    if (data && data.redirect) {
                        setRedirectCookie();
                        window.location.href = data.redirect;
                    } else {
                        error(Granite.I18n.get("An unexpected error occurred during login. Please try again."));
                    }
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    infaUtils.handleFail(jqXHR, textStatus, errorThrown, error);
                }).always(function() {
                    $().showLoading('complete');
                });
            }
            ;
            
            return {
                username: username,
                password: password,
                error: error,
                login: login,
                reset: reset
            };
        }
        
        login.viewModel = (function() {
            var credentials = new login.Credentials();
            
            $(document).on('hidden.bs.modal', '.modal', function() {
                credentials.reset();
            });
            
            return {
                credentialsVM: credentials
            };
        })();
        
        ko.applyBindings(login.viewModel, $('#login-form')[0]);
        $('#login-form input').on('invalid', function(e) {
            $().showLoading('complete');
        });
        
        if (infaUtils.getUrlParameter("login")) {
            login.showLogin();
        }
    }
});


// define pwdreset namespace
var pwdreset = pwdreset || {};

$(function() {
    if ($('#forgot-password-form').length) {
        
        pwdreset.PwdResetForm = function() {
            var password = ko.observable().extend({
                passwordComplexity: true
            });
            var passwordconf = ko.observable().extend({
                required: {
                    message: Granite.I18n.get('Please provide a password.')
                },
                areSame: {
                    params: password,
                    message: Granite.I18n.get("Passwords do not match.")
                }
            });
            var message = ko.observable();
            var passwordReset = ko.observable(false);
            
            var resetPassword = function(formElement) {
                var self = this;
                
                if (!ko.validation.vmIsValid(self, message)) {
                    $().showLoading('complete');
                    return;
                }
                
                message('');
                // clear messages
                
                var data = $(formElement).serialize();
                
                $.ajax({
                    url: $(formElement).attr('action'),
                    type: $(formElement).attr('method'),
                    data: data,
                    dataType: "json",
                    cache: false
                }).done(function(data, status, jqXHR) {
                    if (data && data.redirect) {
                        window.location.href = data.redirect;
                    } else if (data) {
                        message('');
                        passwordReset(true);
                    } else {
                        message(Granite.I18n.get('An unexpected error occurred. Please try again.'));
                    }
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    infaUtils.handleFail(jqXHR, textStatus, errorThrown, message);
                }).always(function() {
                    $().showLoading('complete');
                });
            }
            ;
            
            return {
                message: message,
                resetPassword: resetPassword,
                password: password,
                passwordconf: passwordconf,
                passwordReset: passwordReset
            };
        }
        
        pwdreset.viewModel = (function() {
            var pwdresetform = new pwdreset.PwdResetForm();
            return {
                pwdresetformVM: pwdresetform
            };
        })();
        
        ko.applyBindings(pwdreset.viewModel, $('#forgot-password-form')[0]);
    }
});


var modprofile = modprofile || {};

$(function() {
    if ($('#modprofile-container').length) {
        
        modprofile.Form = function() {
            var firstName = ko.observable().extend({
                required: {
                    message: Granite.I18n.get("Please enter your first name.")
                },
                maxLength: {
                    params: 25,
                    message: Granite.I18n.get("First name must be less than 25 characters.")
                }
            });
            var lastName = ko.observable().extend({
                required: {
                    message: Granite.I18n.get("Please enter your last name.")
                },
                maxLength: {
                    params: 40,
                    message: Granite.I18n.get("Last name must be less than 40 characters.")
                }
            });
            var email = ko.observable();
            var company = ko.observable().extend({
                required: {
                    message: Granite.I18n.get("Please enter your company.")
                },
                maxLength: {
                    params: 100,
                    message: Granite.I18n.get("Company must be less than 100 characters.")
                }
            });
            var jobTitle = ko.observable().extend({
                maxLength: {
                    params: 50,
                    message: Granite.I18n.get("Job title must be less than 50 characters.")
                },
                pattern: {
                    params: /^(?:(?:\s*\S+\s*)+|)$/,
                    message: Granite.I18n.get("Please enter a valid job title.")
                }
            });
            var address = ko.observable().extend({
                maxLength: {
                    params: 1000,
                    message: Granite.I18n.get("Address must be less than 1000 characters.")
                },
                pattern: {
                    params: /^(?:(?:\s*\S+\s*)+|)$/,
                    message: Granite.I18n.get("Please enter a valid address.")
                }
            });
            var country = ko.observable().extend({
                required: {
                    message: Granite.I18n.get("Please enter your country.")
                }
            });
            var countryOptions = ko.observableArray(modprofile.countries);
            var cityRequired = ko.computed(function() {
                var countryObj = modprofile.countryMap[country()];
                return ( countryObj && countryObj.city === 'required') ;
            });
            var city = ko.observable().extend({
                required: {
                    message: Granite.I18n.get("Please enter your city."),
                    onlyIf: function() {
                        return cityRequired();
                    }
                },
                maxLength: {
                    params: 75,
                    message: Granite.I18n.get("City must be less than 75 characters.")
                }
            });
            var cityVisible = ko.computed(function() {
                var countryObj = modprofile.countryMap[country()];
                if (countryObj && countryObj.city === 'none') {
                    return false;
                }
                return true;
            });
            var provinceType = ko.computed(function() {
                var countryObj = modprofile.countryMap[country()];
                if (countryObj) {
                    return countryObj.province;
                }
                return 'optional';
            });
            var provinceUSRequired = ko.computed(function() {
                var countryObj = modprofile.countryMap[country()];
                return ( countryObj && countryObj.province === 'usState') ;
            });
            var provinceUS = ko.observable("").extend({
                required: {
                    message: Granite.I18n.get("Please update your state or province."),
                    onlyIf: function() {
                        return provinceUSRequired();
                    }
                }
            });
            var provinceUSOptions = ko.observableArray(modprofile.usState);
            var provinceCARequired = ko.computed(function() {
                var countryObj = modprofile.countryMap[country()];
                return ( countryObj && countryObj.province === 'caState') ;
            });
            var provinceCA = ko.observable("").extend({
                required: {
                    message: Granite.I18n.get("Please update your state or province."),
                    onlyIf: function() {
                        return provinceCARequired();
                    }
                }
            });
            var provinceCAOptions = ko.observableArray(modprofile.caState);
            var provinceAnyRequired = ko.computed(function() {
                var countryObj = modprofile.countryMap[country()];
                return ( countryObj && ['ukState', 'required'].indexOf(countryObj.province) > -1) ;
            });
            var provinceAny = ko.observable().extend({
                required: {
                    message: Granite.I18n.get("Please update your state or province."),
                    onlyIf: function() {
                        return provinceAnyRequired();
                    }
                },
                maxLength: {
                    params: 75,
                    message: Granite.I18n.get("Province must be less than 75 characters.")
                }
            });
            var province = ko.computed(function() {
                var pType = provinceType();
                var anyVal = provinceAny();
                var usVal = provinceUS();
                var caVal = provinceCA();
                var ukVal = provinceAny();
                if (pType == 'none')
                    return '';
                if (pType == 'optional')
                    return anyVal;
                if (pType == 'usState')
                    return usVal;
                if (pType == 'caState')
                    return caVal;
                if (pType == 'ukState')
                    return anyVal;
                return anyVal;
            });
            var postalCodeRequired = ko.computed(function() {
                var info = modprofile.countryMap[country()];
                return info && !(info.postal === 'optional' || info.postal === 'none');
            });
            var postalCode = ko.observable().extend({
                postal: {
                    context: function() {
                        return modprofile.countryMap[country()]
                    }
                }
            });
            var phonePrimaryRequired = ko.computed(function() {
                var info = modprofile.countryMap[country()];
                return info && (info.phone === 'required' || info.phone === 'usPhone');
            })
            var phonePrimary = ko.observable().extend({
                phone: {
                    context: function() {
                        return modprofile.countryMap[country()]
                    }
                }
            });
            var phoneSecondaryRequired = ko.computed(function() {
                return false;
            });
            var phoneSecondary = ko.observable().extend({
                phone: {
                    context: function() {
                        return modprofile.countryMap[country()]
                    },
                    canBeEmpty: true
                }
            });
            var fullName = ko.computed(function() {
                return firstName() + " " + lastName();
            });
            var message = ko.observable();
            
            var updateProfile = function(formElement) {
                var self = this;
                
                if (!ko.validation.vmIsValid(self, message)) {
                    $().showLoading('complete');
                    return;
                }
                
                // clear out any messages
                message("");
                
                var data = $(formElement).serializeArray();
                
                $.ajax({
                    url: $(formElement).attr('action'),
                    type: $(formElement).attr('method'),
                    data: $.param(data),
                    dataType: "json",
                    cache: false
                }).done(function(data, status, jqXHR) {
                    if (data) {
                        ko.mapping.fromJS(data, null , self);
                        if (modprofile.dashboardLink) {
                            window.location.href = modprofile.dashboardLink + '?message=' + encodeURI(Granite.I18n.get("Your profile has been updated."));
                        }
                    } else {
                        message(Granite.I18n.get("An unexpected error occurred. Please try again."));
                    }
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    infaUtils.handleFail(jqXHR, textStatus, errorThrown, message);
                    $().showLoading('complete');
                }).always(function() {
                
                });
            }
            ;
            
            return {
                firstName: firstName,
                lastName: lastName,
                email: email,
                company: company,
                jobTitle: jobTitle,
                address: address,
                
                city: city,
                cityRequired: cityRequired,
                cityVisible: cityVisible,
                
                country: country,
                countryOptions: countryOptions,
                
                province: province,
                provinceType: provinceType,
                provinceUS: provinceUS,
                provinceUSRequired: provinceUSRequired,
                provinceUSOptions: provinceUSOptions,
                provinceCA: provinceCA,
                provinceCARequired: provinceCARequired,
                provinceCAOptions: provinceCAOptions,
                provinceAny: provinceAny,
                provinceAnyRequired: provinceAnyRequired,
                
                postalCode: postalCode,
                postalCodeRequired: postalCodeRequired,
                phonePrimary: phonePrimary,
                phonePrimaryRequired: phonePrimaryRequired,
                phoneSecondary: phoneSecondary,
                phoneSecondaryRequired: phoneSecondaryRequired,
                updateProfile: updateProfile,
                message: message
            };
        }
        ;
        
        var cleanServerProfileData = function(data) {
            // expand server side province to the base observable fields
            if (data && typeof data.province !== 'undefined') {
                var value = data.province;
                data.provinceAny = value;
                data.provinceCA = value;
                data.provinceUS = value;
                delete data.province;
            }
        }
        ;
        
        modprofile.viewModel = (function() {
            var fetchProfile = function(viewModel) {
                $.ajax({
                    url: infa.rootUrl + '/api/v1/secure/user/profile.ws.json',
                    type: 'GET',
                    dataType: "json",
                    cache: false
                }).done(function(data, status, jqXHR) {
                    if (!infaUtils.hasError(data, viewModel.message)) {
                        cleanServerProfileData(data);
                        ko.mapping.fromJS(data, null , viewModel);
                        $('#modprofile-form').fadeIn();
                    }
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    infaUtils.handleFail(jqXHR, textStatus, errorThrown, viewModel.message);
                });
            }
            ;
            
            var vm = new modprofile.Form();
            fetchProfile(vm);
            return {
                modprofileVM: vm
            };
        })();
        
        ko.applyBindings(modprofile.viewModel, $('#modprofile-container')[0]);
        $('#modprofile-container input').on('invalid', function(e) {
            $().showLoading('complete');
        });
    }
});

modprofile.caState = [
{
    id: "AB",
    name: "Alberta"
}, 
{
    id: "BC",
    name: "British Columbia"
}, 
{
    id: "MB",
    name: "Manitoba"
}, 
{
    id: "NB",
    name: "New Brunswick"
}, 
{
    id: "NF",
    name: "Newfoundland"
}, 
{
    id: "NT",
    name: "Northwest Territories"
}, 
{
    id: "NS",
    name: "Nova Scotia"
}, 
{
    id: "NU",
    name: "Nunavut"
}, 
{
    id: "ON",
    name: "Ontario"
}, 
{
    id: "PE",
    name: "Prince Edward Island"
}, 
{
    id: "QC",
    name: "Quebec"
}, 
{
    id: "SK",
    name: "Saskatchewan"
}, 
{
    id: "YT",
    name: "Yukon Territory "
}
];

modprofile.usState = [
{
    id: "AL",
    name: 'Alabama'
}, 
{
    id: "AK",
    name: 'Alaska'
}, 
{
    id: "AZ",
    name: 'Arizona'
}, 
{
    id: "AR",
    name: 'Arkansas'
}, 
{
    id: "CA",
    name: 'California'
}, 
{
    id: "CO",
    name: 'Colorado'
}, 
{
    id: "CT",
    name: 'Connecticut'
}, 
{
    id: "DE",
    name: 'Delaware'
}, 
{
    id: "DC",
    name: 'District Of Columbia'
}, 
{
    id: "FL",
    name: 'Florida'
}, 
{
    id: "GA",
    name: 'Georgia'
}, 
{
    id: "HI",
    name: 'Hawaii'
}, 
{
    id: "ID",
    name: 'Idaho'
}, 
{
    id: "IL",
    name: 'Illinois'
}, 
{
    id: "IN",
    name: 'Indiana'
}, 
{
    id: "IA",
    name: 'Iowa'
}, 
{
    id: "KS",
    name: 'Kansas'
}, 
{
    id: "KY",
    name: 'Kentucky'
}, 
{
    id: "LA",
    name: 'Louisiana'
}, 
{
    id: "ME",
    name: 'Maine'
}, 
{
    id: "MD",
    name: 'Maryland'
}, 
{
    id: "MA",
    name: 'Massachusetts'
}, 
{
    id: "MI",
    name: 'Michigan'
}, 
{
    id: "MN",
    name: 'Minnesota'
}, 
{
    id: "MS",
    name: 'Mississippi'
}, 
{
    id: "MO",
    name: 'Missouri'
}, 
{
    id: "MT",
    name: 'Montana'
}, 
{
    id: "NE",
    name: 'Nebraska'
}, 
{
    id: "NV",
    name: 'Nevada'
}, 
{
    id: "NH",
    name: 'New Hampshire'
}, 
{
    id: "NJ",
    name: 'New Jersey'
}, 
{
    id: "NM",
    name: 'New Mexico'
}, 
{
    id: "NY",
    name: 'New York'
}, 
{
    id: "NC",
    name: 'North Carolina'
}, 
{
    id: "ND",
    name: 'North Dakota'
}, 
{
    id: "OH",
    name: 'Ohio'
}, 
{
    id: "OK",
    name: 'Oklahoma'
}, 
{
    id: "OR",
    name: 'Oregon'
}, 
{
    id: "PA",
    name: 'Pennsylvania'
}, 
{
    id: "PR",
    name: 'Puerto Rico'
}, 
{
    id: "RI",
    name: 'Rhode Island'
}, 
{
    id: "SC",
    name: 'South Carolina'
}, 
{
    id: "SD",
    name: 'South Dakota'
}, 
{
    id: "TN",
    name: 'Tennessee'
}, 
{
    id: "TX",
    name: 'Texas'
}, 
{
    id: "UT",
    name: 'Utah'
}, 
{
    id: "VT",
    name: 'Vermont'
}, 
{
    id: "VI",
    name: 'Virgin Islands'
}, 
{
    id: "VA",
    name: 'Virginia'
}, 
{
    id: "WA",
    name: 'Washington'
}, 
{
    id: "WV",
    name: 'West Virginia'
}, 
{
    id: "WI",
    name: 'Wisconsin'
}, 
{
    id: "WY",
    name: 'Wyoming'
}
];

modprofile.countries = [
{
    id: "",
    name: Granite.I18n.get("Select"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, // default value
{
    id: "US",
    name: Granite.I18n.get("United States"),
    city: "required",
    province: "usState",
    postal: "usPostal",
    phone: "usPhone"
}, 
{
    id: "CA",
    name: Granite.I18n.get("Canada"),
    city: "required",
    province: "caState",
    postal: "caPostal",
    phone: "usPhone"
}, 
{
    id: "AL",
    name: Granite.I18n.get("Albania"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "DZ",
    name: Granite.I18n.get("Algeria"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "AR",
    name: Granite.I18n.get("Argentina"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "AM",
    name: Granite.I18n.get("Armenia"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "AU",
    name: Granite.I18n.get("Australia"),
    city: "required",
    province: "required",
    postal: "fourDigits",
    phone: "required"
}, 
{
    id: "AT",
    name: Granite.I18n.get("Austria"),
    city: "required",
    province: "none",
    postal: "fourDigits",
    phone: "required"
}, 
{
    id: "BH",
    name: Granite.I18n.get("Bahrain"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "BY",
    name: Granite.I18n.get("Belarus"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "BE",
    name: Granite.I18n.get("Belgium"),
    city: "required",
    province: "none",
    postal: "fourDigits",
    phone: "required"
}, 
{
    id: "BA",
    name: Granite.I18n.get("Bosnia and Herzegovina"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "BO",
    name: Granite.I18n.get("Bolivia, Plurinational State of"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "BR",
    name: Granite.I18n.get("Brazil"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "BG",
    name: Granite.I18n.get("Bulgaria"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "TD",
    name: Granite.I18n.get("Chad"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "CL",
    name: Granite.I18n.get("Chile"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "CN",
    name: Granite.I18n.get("China"),
    city: "required",
    province: "none",
    postal: "sixDigits",
    phone: "required"
}, 
{
    id: "CO",
    name: Granite.I18n.get("Colombia"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "CG",
    name: Granite.I18n.get("Congo"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "CR",
    name: Granite.I18n.get("Costa Rica"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "HR",
    name: Granite.I18n.get("Croatia"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "CU",
    name: Granite.I18n.get("Cuba"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "CY",
    name: Granite.I18n.get("Cyprus"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "CZ",
    name: Granite.I18n.get("Czech Republic"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "DK",
    name: Granite.I18n.get("Denmark"),
    city: "required",
    province: "none",
    postal: "fourDigits",
    phone: "required"
}, 
{
    id: "DO",
    name: Granite.I18n.get("Dominican Republic"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "EC",
    name: Granite.I18n.get("Ecuador"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "EG",
    name: Granite.I18n.get("Egypt"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "SV",
    name: Granite.I18n.get("El Salvador"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "EE",
    name: Granite.I18n.get("Estonia"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "FI",
    name: Granite.I18n.get("Finland"),
    city: "required",
    province: "none",
    postal: "fiveDigits",
    phone: "required"
}, 
{
    id: "FR",
    name: Granite.I18n.get("France"),
    city: "required",
    province: "none",
    postal: "fiveDigits",
    phone: "required"
}, 
{
    id: "GE",
    name: Granite.I18n.get("Georgia"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "DE",
    name: Granite.I18n.get("Germany"),
    city: "required",
    province: "none",
    postal: "fiveDigits",
    phone: "required"
}, 
{
    id: "GR",
    name: Granite.I18n.get("Greece"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "GL",
    name: Granite.I18n.get("Greenland"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "GT",
    name: Granite.I18n.get("Guatemala"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "HT",
    name: Granite.I18n.get("Haiti"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "HN",
    name: Granite.I18n.get("Honduras"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "HK",
    name: Granite.I18n.get("Hong Kong"),
    city: "required",
    province: "optional",
    postal: "none",
    phone: "required"
}, 
{
    id: "HU",
    name: Granite.I18n.get("Hungary"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "IS",
    name: Granite.I18n.get("Iceland"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "IN",
    name: Granite.I18n.get("India"),
    city: "required",
    province: "optional",
    postal: "sixDigits",
    phone: "required"
}, 
{
    id: "ID",
    name: Granite.I18n.get("Indonesia"),
    city: "required",
    province: "optional",
    postal: "optional",
    phone: "required"
}, 
{
    id: "IE",
    name: Granite.I18n.get("Ireland"),
    city: "required",
    province: "ukState",
    postal: "none",
    phone: "required"
}, 
{
    id: "IL",
    name: Granite.I18n.get("Israel"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "IT",
    name: Granite.I18n.get("Italy"),
    city: "required",
    province: "none",
    postal: "fiveDigits",
    phone: "required"
}, 
{
    id: "JP",
    name: Granite.I18n.get("Japan"),
    city: "required",
    province: "none",
    postal: "sevenDigits",
    phone: "required"
}, 
{
    id: "JO",
    name: Granite.I18n.get("Jordan"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "KZ",
    name: Granite.I18n.get("Kazakhstan"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "KE",
    name: Granite.I18n.get("Kenya"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "KR",
    name: Granite.I18n.get("Korea, Republic of"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "KW",
    name: Granite.I18n.get("Kuwait"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "LV",
    name: Granite.I18n.get("Latvia"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "LB",
    name: Granite.I18n.get("Lebanon"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "LR",
    name: Granite.I18n.get("Liberia"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "LT",
    name: Granite.I18n.get("Lithuania"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "LU",
    name: Granite.I18n.get("Luxembourg"),
    city: "required",
    province: "none",
    postal: "fourDigits",
    phone: "required"
}, 
{
    id: "MK",
    name: Granite.I18n.get("Macedonia, the former Yugoslav Republic of"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "MY",
    name: Granite.I18n.get("Malaysia"),
    city: "required",
    province: "required",
    postal: "fiveDigits",
    phone: "required"
}, 
{
    id: "MT",
    name: Granite.I18n.get("Malta"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "MX",
    name: Granite.I18n.get("Mexico"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "MD",
    name: Granite.I18n.get("Moldova, Republic of"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "MC",
    name: Granite.I18n.get("Monaco"),
    city: "required",
    province: "none",
    postal: "fiveDigits",
    phone: "required"
}, 
{
    id: "NL",
    name: Granite.I18n.get("Netherlands"),
    city: "required",
    province: "none",
    postal: "nlPostal",
    phone: "required"
}, 
{
    id: "NZ",
    name: Granite.I18n.get("New Zealand"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "NI",
    name: Granite.I18n.get("Nicaragua"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "NG",
    name: Granite.I18n.get("Nigeria"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "NO",
    name: Granite.I18n.get("Norway"),
    city: "required",
    province: "none",
    postal: "fourDigits",
    phone: "required"
}, 
{
    id: "OM",
    name: Granite.I18n.get("Oman"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "PA",
    name: Granite.I18n.get("Panama"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "PY",
    name: Granite.I18n.get("Paraguay"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "PE",
    name: Granite.I18n.get("Peru"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "PH",
    name: Granite.I18n.get("Philippines"),
    city: "required",
    province: "optional",
    postal: "optional",
    phone: "required"
}, 
{
    id: "PL",
    name: Granite.I18n.get("Poland"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "PT",
    name: Granite.I18n.get("Portugal"),
    city: "required",
    province: "none",
    postal: "sevenDigits",
    phone: "required"
}, 
{
    id: "QA",
    name: Granite.I18n.get("Qatar"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "RO",
    name: Granite.I18n.get("Romania"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "RU",
    name: Granite.I18n.get("Russian Federation"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "SA",
    name: Granite.I18n.get("Saudi Arabia"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "RS",
    name: Granite.I18n.get("Serbia"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "SG",
    name: Granite.I18n.get("Singapore"),
    city: "none",
    province: "none",
    postal: "sixDigits",
    phone: "required"
}, 
{
    id: "SK",
    name: Granite.I18n.get("Slovakia"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "SI",
    name: Granite.I18n.get("Slovenia"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "ZA",
    name: Granite.I18n.get("South Africa"),
    city: "required",
    province: "none",
    postal: "fourDigits",
    phone: "required"
}, 
{
    id: "ES",
    name: Granite.I18n.get("Spain"),
    city: "required",
    province: "none",
    postal: "fiveDigits",
    phone: "required"
}, 
{
    id: "SE",
    name: Granite.I18n.get("Sweden"),
    city: "required",
    province: "none",
    postal: "fiveDigits",
    phone: "required"
}, 
{
    id: "CH",
    name: Granite.I18n.get("Switzerland"),
    city: "required",
    province: "none",
    postal: "fourDigits",
    phone: "required"
}, 
{
    id: "TW",
    name: Granite.I18n.get("Taiwan, Province of China"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "TH",
    name: Granite.I18n.get("Thailand"),
    city: "required",
    province: "optional",
    postal: "optional",
    phone: "required"
}, 
{
    id: "TR",
    name: Granite.I18n.get("Turkey"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "UA",
    name: Granite.I18n.get("Ukraine"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "AE",
    name: Granite.I18n.get("United Arab Emirates"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "GB",
    name: Granite.I18n.get("United Kingdom"),
    city: "required",
    province: "ukState",
    postal: "ukPostal",
    phone: "required"
}, 
{
    id: "UY",
    name: Granite.I18n.get("Uruguay"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "VE",
    name: Granite.I18n.get("Venezuela, Bolivarian Republic of"),
    city: "required",
    province: "optional",
    postal: "required",
    phone: "required"
}, 
{
    id: "YE",
    name: Granite.I18n.get("Yemen"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}, 
{
    id: "ZM",
    name: Granite.I18n.get("Zambia"),
    city: "required",
    province: "none",
    postal: "optional",
    phone: "required"
}
];

modprofile.countryMap = {};
for (var i = 0; i < modprofile.countries.length; i++) {
    var id = modprofile.countries[i].id;
    modprofile.countryMap[id] = modprofile.countries[i];
}

var dashboard = dashboard || {};

dashboard.guide = function(guideModel, force) {
    $.ajax({
        url: infa.rootUrl + '/api/v1/secure/user/dashboardGuideVersion.ws.json',
        type: 'GET',
        dataType: "json",
        cache: false
    }).done(function(data, status, jqXHR) {
        if (data && (typeof data.version != 'undefined')) {
            if (force) {
                $('[data-component="overlay-intro"]').overlayIntro(guideModel.items);
            } else if (data.version < guideModel.version) {
                $('[data-component="overlay-intro"]').overlayIntro(guideModel.items);
                $.ajax({
                    url: infa.rootUrl + '/api/v1/secure/user/dashboardGuideVersion.ws.json?version=' + guideModel.version,
                    type: 'POST',
                    dataType: "json",
                    cache: false
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    if (console && console.log)
                        infaUtils.handleFail(jqXHR, textStatus, errorThrown, console.log);
                });
            }
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        if (console && console.log)
            infaUtils.handleFail(jqXHR, textStatus, errorThrown, console.log);
    });
}

$(function() {
    if ($('#dashboard-container').length) {
        
        dashboard.Model = function() {
            
            var firstName = ko.observable();
            var jobTitle = ko.observable();
            var city = ko.observable();
            var province = ko.observable();
            var message = ko.observable();
            var cityState = ko.computed(function() {
                var cityStr = city();
                var stateStr = province();
                if (cityStr && cityStr.length > 25)
                    cityStr = cityStr.substr(0, 22) + '...';
                if (stateStr && stateStr.length > 25)
                    stateStr = stateStr.substr(0, 22) + '...';
                if (cityStr && stateStr) {
                    return cityStr + ', ' + stateStr;
                } else if (cityStr) {
                    return cityStr;
                } else if (stateStr) {
                    return stateStr;
                }
                return '';
            });
            var jobTitleDisplay = ko.computed(function() {
                var jobTitleDisplay = jobTitle();
                if (jobTitleDisplay && jobTitleDisplay.length > 25) {
                    jobTitleDisplay = jobTitleDisplay.substr(0, 22) + '...';
                }
                return jobTitleDisplay;
            });
            
            return {
                firstName: firstName,
                jobTitle: jobTitle,
                city: city,
                province: province,
                message: message,
                cityState: cityState,
                jobTitleDisplay: jobTitleDisplay
            };
        }
        ;
        
        dashboard.viewModel = (function() {
            var fetchProfile = function(viewModel) {
                $.ajax({
                    url: infa.rootUrl + '/api/v1/secure/user/profile.ws.json',
                    type: 'GET',
                    dataType: "json",
                    cache: false
                }).done(function(data, status, jqXHR) {
                    if (!infaUtils.hasError(data, viewModel.message)) {
                        ko.mapping.fromJS(data, null , viewModel);
                    }
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    infaUtils.handleFail(jqXHR, textStatus, errorThrown, viewModel.message);
                });
            }
            ;
            
            var initMessage = function(viewModel) {
                var urlMsg = infaUtils.getUrlParameter('message');
                if (urlMsg)
                    viewModel.message(urlMsg);
            }
            
            var vm = new dashboard.Model();
            fetchProfile(vm);
            initMessage(vm);
            return {
                dashboardVM: vm
            };
        })();
        
        ko.applyBindings(dashboard.viewModel, $('#dashboard-container')[0]);
    }
});

// define login namespace
var modpass = modpass || {};

$(function() {
    if ($('#modpassword-form').length) {
        
        modpass.Form = function() {
            var oldPassword = ko.observable().extend({
                required: {
                    message: Granite.I18n.get('Please enter current password.')
                }
            });
            var newPassword = ko.observable().extend({
                passwordComplexity: true
            });
            var newPasswordConfirm = ko.observable().extend({
                required: {
                    message: Granite.I18n.get('Please provide a password.')
                },
                areSame: {
                    params: newPassword,
                    message: Granite.I18n.get("Passwords do not match.")
                }
            });
            var message = ko.observable();
            
            var changePassword = function(formElement) {
                var self = this;
                
                if (!ko.validation.vmIsValid(self, message)) {
                    $().showLoading('complete');
                    return;
                }
                
                // clear out any messages
                message("");
                
                var data = $(formElement).serializeArray();
                
                $.ajax({
                    url: $(formElement).attr('action'),
                    type: $(formElement).attr('method'),
                    data: $.param(data),
                    dataType: "json",
                    cache: false
                }).done(function(data, status, jqXHR) {
                    if (data && data.password) {
                        // data.password will be empty
                        if (modpassword.dashboardLink) {
                            window.location.href = modpassword.dashboardLink + '?message=' + encodeURI(Granite.I18n.get("Password successfully updated."));
                        }
                    } else {
                        message(Granite.I18n.get("An unexpected error occurred during password update. Please try again."));
                    }
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    infaUtils.handleFail(jqXHR, textStatus, errorThrown, message);
                }).always(function() {
                    console.log($(formElement));
                    $().showLoading('complete');
                });
            }
            ;
            
            return {
                oldPassword: oldPassword,
                newPassword: newPassword,
                newPasswordConfirm: newPasswordConfirm,
                message: message,
                changePassword: changePassword
            };
        }
        
        modpass.viewModel = (function() {
            var vm = new modpass.Form();
            return {
                modPasswordVM: vm
            };
        })();
        
        ko.applyBindings(modpass.viewModel, $('#modpassword-form')[0]);
        $('#modpassword-form input').on('invalid', function(e) {
            $().showLoading('complete');
        });
    }
});

!function(a) {
    function b(b) {
        var c = a(this)
          , d = null 
          , e = []
          , f = null 
          , g = null 
          , h = a.extend({
            rowSelector: "> li",
            submenuSelector: "*",
            submenuDirection: "right",
            tolerance: 400,
            enter: a.noop,
            exit: a.noop,
            activate: a.noop,
            deactivate: a.noop,
            exitMenu: a.noop
        }, b)
          , i = 4
          , j = 1e3
          , k = function(a) {
            e.push({
                x: a.pageX,
                y: a.pageY
            }),
            e.length > i && e.shift()
        }
          , l = function() {
            g && clearTimeout(g),
            h.exitMenu(this) && (d && h.deactivate(d),
            d = null )
        }
          , m = function() {
            g && clearTimeout(g),
            h.enter(this),
            q(this)
        }
          , n = function() {
            h.exit(this)
        }
          , o = function() {
            p(this)
        }
          , p = function(a) {
            a == d && h.activate(a),
            d && h.deactivate(d),
            h.activate(a),
            d = a
        }
          , q = function(a) {
            var b = r();
            b ? g = setTimeout(function() {
                q(a)
            }, b) : p(a)
        }
          , r = function() {
            function b(a, b) {
                return (b.y - a.y) / (b.x - a.x)
            }
            if (!d || !a(d).is(h.submenuSelector))
                return 0;
            var g = c.offset()
              , i = {
                x: g.left,
                y: g.top
            }
              , k = {
                x: g.left + c.outerWidth(),
                y: i.y
            }
              , l = {
                x: g.left,
                y: g.top + c.outerHeight()
            }
              , m = {
                x: g.left + c.outerWidth(),
                y: l.y
            }
              , n = e[e.length - 1]
              , o = e[0];
            if (!n)
                return 0;
            if (o || (o = n),
            "right" == h.submenuDirection ? (k.y -= h.tolerance,
            m.y += h.tolerance) : "left" == h.submenuDirection ? (i.y -= h.tolerance,
            l.y += h.tolerance) : "above" == h.submenuDirection ? (i.x -= h.tolerance,
            k.x += h.tolerance) : "below" == h.submenuDirection && (l.x -= h.tolerance,
            m.x += h.tolerance),
            o.x < g.left || o.x > m.x || o.y < g.top || o.y > m.y)
                return 0;
            if (f && n.x == f.x && n.y == f.y)
                return 0;
            var p = k
              , q = m;
            "left" == h.submenuDirection ? (p = l,
            q = i) : "below" == h.submenuDirection ? (p = m,
            q = l) : "above" == h.submenuDirection && (p = i,
            q = k);
            var r = b(n, p)
              , s = b(n, q)
              , t = b(o, p)
              , u = b(o, q);
            return t > r && s > u ? (f = n,
            j) : (f = null ,
            0)
        }
        ;
        c.mouseleave(l).find(h.rowSelector).mouseenter(m).mouseleave(n).click(o),
        a(document).mousemove(k)
    }
    a.fn.menuAim = function(a) {
        return this.each(function() {
            b.call(this, a)
        }),
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.affix")
              , f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this,f)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d),
        this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(b),
        this.affixed = this.unpin = this.pinnedOffset = null ,
        this.checkPosition()
    }
    ;
    c.VERSION = "3.3.1",
    c.RESET = "affix affix-top affix-bottom",
    c.DEFAULTS = {
        offset: 0,
        target: window
    },
    c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop()
          , f = this.$element.offset()
          , g = this.$target.height();
        if (null  != c && "top" == this.affixed)
            return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
            return null  != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null  == this.affixed
          , i = h ? e : f.top
          , j = h ? g : b;
        return null  != c && c >= i ? "top" : null  != d && i + j >= a - d ? "bottom" : !1
    }
    ,
    c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop()
          , b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }
    ,
    c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }
    ,
    c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height()
              , d = this.options.offset
              , e = d.top
              , f = d.bottom
              , g = a("body").height();
            "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null  != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : "")
                  , j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j),
                j.isDefaultPrevented())
                    return;
                this.affixed = h,
                this.unpin = "bottom" == h ? this.getPinnedOffset() : null ,
                this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    }
    ;
    var d = a.fn.affix;
    a.fn.affix = b,
    a.fn.affix.Constructor = c,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = d,
        this
    }
    ,
    a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this)
              , d = c.data();
            d.offset = d.offset || {},
            null  != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null  != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d)
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this)
              , e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)),
            "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]'
      , d = function(b) {
        a(b).on("click", c, this.close)
    }
    ;
    d.VERSION = "3.3.1",
    d.TRANSITION_DURATION = 150,
    d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this)
          , f = e.attr("data-target");
        f || (f = e.attr("href"),
        f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(),
        g.length || (g = e.closest(".alert")),
        g.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (g.removeClass("in"),
        a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    }
    ;
    var e = a.fn.alert;
    a.fn.alert = b,
    a.fn.alert.Constructor = d,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = e,
        this
    }
    ,
    a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(),
        a(f).each(function() {
            var d = a(this)
              , e = c(d)
              , f = {
                relatedTarget: this
            };
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)),
            b.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
            e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"),
        c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    function d(b) {
        return this.each(function() {
            var c = a(this)
              , d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)),
            "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop"
      , f = '[data-toggle="dropdown"]'
      , g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    }
    ;
    g.VERSION = "3.3.1",
    g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e)
              , g = f.hasClass("open");
            if (b(),
            !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)),
                d.isDefaultPrevented())
                    return;
                e.trigger("focus").attr("aria-expanded", "true"),
                f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }
    ,
    g.prototype.keydown = function(b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(),
            b.stopPropagation(),
            !d.is(".disabled, :disabled")) {
                var e = c(d)
                  , g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which)
                    return 27 == b.which && e.find(f).trigger("focus"),
                    d.trigger("click");
                var h = " li:not(.divider):visible a"
                  , i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--,
                    40 == b.which && j < i.length - 1 && j++,
                    ~j || (j = 0),
                    i.eq(j).trigger("focus")
                }
            }
        }
    }
    ;
    var h = a.fn.dropdown;
    a.fn.dropdown = d,
    a.fn.dropdown.Constructor = g,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h,
        this
    }
    ,
    a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery),
+function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this)
              , f = e.data("bs.modal")
              , g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this,g)),
            "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c,
        this.$body = a(document.body),
        this.$element = a(b),
        this.$backdrop = this.isShown = null ,
        this.scrollbarWidth = 0,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    }
    ;
    c.VERSION = "3.3.1",
    c.TRANSITION_DURATION = 300,
    c.BACKDROP_TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }
    ,
    c.prototype.show = function(b) {
        var d = this
          , e = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(e),
        this.isShown || e.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
        this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body),
            d.$element.show().scrollTop(0),
            d.options.backdrop && d.adjustBackdrop(),
            d.adjustDialog(),
            e && d.$element[0].offsetWidth,
            d.$element.addClass("in").attr("aria-hidden", !1),
            d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }
    ,
    c.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        a(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").attr("aria-hidden", !0),
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }
    ,
    c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.$body.removeClass("modal-open"),
            a.resetAdjustments(),
            a.resetScrollbar(),
            a.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null 
    }
    ,
    c.prototype.backdrop = function(b) {
        var d = this
          , e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
                return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(),
                b && b()
            }
            ;
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else
            b && b()
    }
    ,
    c.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(),
        this.adjustDialog()
    }
    ,
    c.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }
    ,
    c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }
    ,
    c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    c.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }
    ,
    c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }
    ,
    c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure",
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a),
        b
    }
    ;
    var d = a.fn.modal;
    a.fn.modal = b,
    a.fn.modal.Constructor = c,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = d,
        this
    }
    ,
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this)
          , e = d.attr("href")
          , f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, ""))
          , g = f.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        d.is("a") && c.preventDefault(),
        f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }),
        b.call(f, g, this)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"),
        this.$scrollElement = a(a(c).is("body") ? window : c),
        this.options = a.extend({}, b.DEFAULTS, d),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null ,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", e),
        this.refresh(),
        this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.scrollspy")
              , f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.1",
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    b.prototype.refresh = function() {
        var b = "offset"
          , c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position",
        c = this.$scrollElement.scrollTop()),
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this)
              , e = d.data("target") || d.attr("href")
              , f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null 
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]),
            d.targets.push(this[1])
        })
    }
    ,
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(),
        b >= d)
            return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])
            return this.activeTarget = null ,
            this.clear();
        for (a = e.length; a--; )
            g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }
    ,
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'
          , d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate.bs.scrollspy")
    }
    ,
    b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c,
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d,
        this
    }
    ,
    a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    }
    ;
    c.VERSION = "3.3.1",
    c.TRANSITION_DURATION = 150,
    c.prototype.show = function() {
        var b = this.element
          , c = b.closest("ul:not(.dropdown-menu)")
          , d = b.data("target");
        if (d || (d = b.attr("href"),
        d = d && d.replace(/.*(?=#[^\s]*$)/, "")),
        !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")
              , f = a.Event("hide.bs.tab", {
                relatedTarget: b[0]
            })
              , g = a.Event("show.bs.tab", {
                relatedTarget: e[0]
            });
            if (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c),
                this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }),
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }
    ,
    c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            h ? (b[0].offsetWidth,
            b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            e && e()
        }
        var g = d.find("> .active")
          , h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(),
        g.removeClass("in")
    }
    ;
    var d = a.fn.tab;
    a.fn.tab = b,
    a.fn.tab.Constructor = c,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = d,
        this
    }
    ;
    var e = function(c) {
        c.preventDefault(),
        b.call(a(this), "show")
    }
    ;
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery),
+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap")
          , b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)
            if (void 0 !== a.style[c])
                return {
                    end: b[c]
                };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1
          , d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        }
        ;
        return setTimeout(e, b),
        this
    }
    ,
    a(function() {
        a.support.transition = b(),
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function(a) {
    var b = -1
      , c = -1
      , d = function(a) {
        return parseFloat(a) || 0
    }
      , e = function(b) {
        var c = 1
          , e = a(b)
          , f = null 
          , g = [];
        return e.each(function() {
            var b = a(this)
              , e = b.offset().top - d(b.css("margin-top"))
              , h = g.length > 0 ? g[g.length - 1] : null ;
            null  === h ? g.push(b) : Math.floor(Math.abs(f - e)) <= c ? g[g.length - 1] = h.add(b) : g.push(b),
            f = e
        }),
        g
    }
      , f = function(b) {
        var c = {
            byRow: !0,
            property: "height",
            target: null ,
            remove: !1
        };
        return "object" == typeof b ? a.extend(c, b) : ("boolean" == typeof b ? c.byRow = b : "remove" === b && (c.remove = !0),
        c)
    }
      , g = a.fn.matchHeight = function(b) {
        var c = f(b);
        if (c.remove) {
            var d = this;
            return this.css(c.property, ""),
            a.each(g._groups, function(a, b) {
                b.elements = b.elements.not(d)
            }),
            this
        }
        return this.length <= 1 && !c.target ? this : (g._groups.push({
            elements: this,
            options: c
        }),
        g._apply(this, c),
        this)
    }
    ;
    g._groups = [],
    g._throttle = 80,
    g._maintainScroll = !1,
    g._beforeUpdate = null ,
    g._afterUpdate = null ,
    g._apply = function(b, c) {
        var h = f(c)
          , i = a(b)
          , j = [i]
          , k = a(window).scrollTop()
          , l = a("html").outerHeight(!0)
          , m = i.parents().filter(":hidden");
        return m.each(function() {
            var b = a(this);
            b.data("style-cache", b.attr("style"))
        }),
        m.css("display", "block"),
        h.byRow && !h.target && (i.each(function() {
            var b = a(this)
              , c = "inline-block" === b.css("display") ? "inline-block" : "block";
            b.data("style-cache", b.attr("style")),
            b.css({
                display: c,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px"
            })
        }),
        j = e(i),
        i.each(function() {
            var b = a(this);
            b.attr("style", b.data("style-cache") || "")
        })),
        a.each(j, function(b, c) {
            var e = a(c)
              , f = 0;
            if (h.target)
                f = h.target.outerHeight(!1);
            else {
                if (h.byRow && e.length <= 1)
                    return void e.css(h.property, "");
                e.each(function() {
                    var b = a(this)
                      , c = "inline-block" === b.css("display") ? "inline-block" : "block"
                      , d = {
                        display: c
                    };
                    d[h.property] = "",
                    b.css(d),
                    b.outerHeight(!1) > f && (f = b.outerHeight(!1)),
                    b.css("display", "")
                })
            }
            e.each(function() {
                var b = a(this)
                  , c = 0;
                h.target && b.is(h.target) || ("border-box" !== b.css("box-sizing") && (c += d(b.css("border-top-width")) + d(b.css("border-bottom-width")),
                c += d(b.css("padding-top")) + d(b.css("padding-bottom"))),
                b.css(h.property, f - c))
            })
        }),
        m.each(function() {
            var b = a(this);
            b.attr("style", b.data("style-cache") || null )
        }),
        g._maintainScroll && a(window).scrollTop(k / l * a("html").outerHeight(!0)),
        this
    }
    ,
    g._applyDataApi = function() {
        var b = {};
        a("[data-match-height], [data-mh]").each(function() {
            var c = a(this)
              , d = c.attr("data-mh") || c.attr("data-match-height");
            b[d] = d in b ? b[d].add(c) : c
        }),
        a.each(b, function() {
            this.matchHeight(!0)
        })
    }
    ;
    var h = function(b) {
        g._beforeUpdate && g._beforeUpdate(b, g._groups),
        a.each(g._groups, function() {
            g._apply(this.elements, this.options)
        }),
        g._afterUpdate && g._afterUpdate(b, g._groups)
    }
    ;
    g._update = function(d, e) {
        if (e && "resize" === e.type) {
            var f = a(window).width();
            if (f === b)
                return;
            b = f
        }
        d ? -1 === c && (c = setTimeout(function() {
            h(e),
            c = -1
        }, g._throttle)) : h(e)
    }
    ,
    a(g._applyDataApi),
    a(window).bind("load", function(a) {
        g._update(!1, a)
    }),
    a(window).bind("resize orientationchange", function(a) {
        g._update(!0, a)
    })
}(jQuery),
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function b(b, d) {
            var e, f, g = this;
            if (g.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(b),
                appendDots: a(b),
                arrows: !0,
                asNavFor: null ,
                prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(a, b) {
                    return '<button type="button" data-role="none">' + (b + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                onBeforeChange: null ,
                onAfterChange: null ,
                onInit: null ,
                onReInit: null ,
                onSetPosition: null ,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null ,
                rtl: !1,
                slide: "div",
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                variableWidth: !1,
                vertical: !1,
                waitForAnimate: !0
            },
            g.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null ,
                currentDirection: 0,
                currentLeft: null ,
                currentSlide: 0,
                direction: 1,
                $dots: null ,
                listWidth: null ,
                listHeight: null ,
                loadIndex: 0,
                $nextArrow: null ,
                $prevArrow: null ,
                slideCount: null ,
                slideWidth: null ,
                $slideTrack: null ,
                $slides: null ,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null ,
                $list: null ,
                touchObject: {},
                transformsEnabled: !1
            },
            a.extend(g, g.initials),
            g.activeBreakpoint = null ,
            g.animType = null ,
            g.animProp = null ,
            g.breakpoints = [],
            g.breakpointSettings = [],
            g.cssTransitions = !1,
            g.paused = !1,
            g.positionProp = null ,
            g.respondTo = null ,
            g.shouldClick = !0,
            g.$slider = a(b),
            g.$slidesCache = null ,
            g.transformType = null ,
            g.transitionType = null ,
            g.windowWidth = 0,
            g.windowTimer = null ,
            g.options = a.extend({}, g.defaults, d),
            g.currentSlide = g.options.initialSlide,
            g.originalSettings = g.options,
            e = g.options.responsive || null ,
            e && e.length > -1) {
                g.respondTo = g.options.respondTo || "window";
                for (f in e)
                    e.hasOwnProperty(f) && (g.breakpoints.push(e[f].breakpoint),
                    g.breakpointSettings[e[f].breakpoint] = e[f].settings);
                g.breakpoints.sort(function(a, b) {
                    return b - a
                })
            }
            g.autoPlay = a.proxy(g.autoPlay, g),
            g.autoPlayClear = a.proxy(g.autoPlayClear, g),
            g.changeSlide = a.proxy(g.changeSlide, g),
            g.clickHandler = a.proxy(g.clickHandler, g),
            g.selectHandler = a.proxy(g.selectHandler, g),
            g.setPosition = a.proxy(g.setPosition, g),
            g.swipeHandler = a.proxy(g.swipeHandler, g),
            g.dragHandler = a.proxy(g.dragHandler, g),
            g.keyHandler = a.proxy(g.keyHandler, g),
            g.autoPlayIterator = a.proxy(g.autoPlayIterator, g),
            g.instanceUid = c++,
            g.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            g.init(),
            g.checkResponsive()
        }
        var c = 0;
        return b
    }(),
    b.prototype.addSlide = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c)
            d = c,
            c = null ;
        else if (0 > c || c >= e.slideCount)
            return !1;
        e.unload(),
        "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack),
        e.$slides = e.$slideTrack.children(this.options.slide),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slideTrack.append(e.$slides),
        e.$slides.each(function(b, c) {
            a(c).attr("index", b)
        }),
        e.$slidesCache = e.$slides,
        e.reinit()
    }
    ,
    b.prototype.animateSlide = function(b, c) {
        var d = {}
          , e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var f = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: f
            }, e.options.speed)
        }
        e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
        e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)",
                e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)",
                e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        }) : (e.applyTransition(),
        d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)",
        e.$slideTrack.css(d),
        c && setTimeout(function() {
            e.disableTransition(),
            c.call()
        }, e.options.speed))
    }
    ,
    b.prototype.asNavFor = function(b) {
        var c = this
          , d = null  != c.options.asNavFor ? a(c.options.asNavFor).getSlick() : null ;
        null  != d && d.slideHandler(b, !0)
    }
    ,
    b.prototype.applyTransition = function(a) {
        var b = this
          , c = {};
        c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase,
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer),
        a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }
    ,
    b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }
    ,
    b.prototype.autoPlayIterator = function() {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0),
        a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1),
        a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }
    ,
    b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow),
        b.$nextArrow = a(b.options.nextArrow),
        b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows),
        b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows),
        b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
    }
    ,
    b.prototype.buildDots = function() {
        var b, c, d = this;
        if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
            for (c = '<ul class="' + d.options.dotsClass + '">',
            b = 0; b <= d.getDotCount(); b += 1)
                c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
            c += "</ul>",
            d.$dots = a(c).appendTo(d.options.appendDots),
            d.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.$slides.each(function(b, c) {
            a(c).attr("index", b)
        }),
        b.$slidesCache = b.$slides,
        b.$slider.addClass("slick-slider"),
        b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(),
        b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        b.$slideTrack.css("opacity", 0),
        b.options.centerMode === !0 && (b.options.slidesToScroll = 1),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.updateDots(),
        b.options.accessibility === !0 && b.$list.prop("tabIndex", 0),
        b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0),
        b.options.draggable === !0 && b.$list.addClass("draggable")
    }
    ,
    b.prototype.checkResponsive = function() {
        var b, c, d, e = this, f = e.$slider.width(), g = window.innerWidth || a(window).width();
        if ("window" === e.respondTo ? d = g : "slider" === e.respondTo ? d = f : "min" === e.respondTo && (d = Math.min(g, f)),
        e.originalSettings.responsive && e.originalSettings.responsive.length > -1 && null  !== e.originalSettings.responsive) {
            c = null ;
            for (b in e.breakpoints)
                e.breakpoints.hasOwnProperty(b) && d < e.breakpoints[b] && (c = e.breakpoints[b]);
            null  !== c ? null  !== e.activeBreakpoint ? c !== e.activeBreakpoint && (e.activeBreakpoint = c,
            e.options = a.extend({}, e.originalSettings, e.breakpointSettings[c]),
            e.refresh()) : (e.activeBreakpoint = c,
            e.options = a.extend({}, e.originalSettings, e.breakpointSettings[c]),
            e.refresh()) : null  !== e.activeBreakpoint && (e.activeBreakpoint = null ,
            e.options = e.originalSettings,
            e.refresh())
        }
    }
    ,
    b.prototype.changeSlide = function(b, c) {
        var d, e, f, g, h, i = this, j = a(b.target);
        switch (j.is("a") && b.preventDefault(),
        f = 0 !== i.slideCount % i.options.slidesToScroll,
        d = f ? 0 : (i.slideCount - i.currentSlide) % i.options.slidesToScroll,
        b.data.message) {
        case "previous":
            e = 0 === d ? i.options.slidesToScroll : i.options.slidesToShow - d,
            i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide - e, !1, c);
            break;
        case "next":
            e = 0 === d ? i.options.slidesToScroll : d,
            i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide + e, !1, c);
            break;
        case "index":
            var k = 0 === b.data.index ? 0 : b.data.index || a(b.target).parent().index() * i.options.slidesToScroll;
            if (g = i.getNavigableIndexes(),
            h = 0,
            g[k] && g[k] === k)
                if (k > g[g.length - 1])
                    k = g[g.length - 1];
                else
                    for (var l in g) {
                        if (k < g[l]) {
                            k = h;
                            break
                        }
                        h = g[l]
                    }
            i.slideHandler(k, !1, c);
        default:
            return
        }
    }
    ,
    b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(),
        a.stopPropagation(),
        a.preventDefault())
    }
    ,
    b.prototype.destroy = function() {
        var b = this;
        b.autoPlayClear(),
        b.touchObject = {},
        a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(),
        b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(),
        b.$slides.parent().hasClass("slick-track") && b.$slides.unwrap().unwrap(),
        b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("index").css({
            position: "",
            left: "",
            top: "",
            zIndex: "",
            opacity: "",
            width: ""
        }),
        b.$slider.removeClass("slick-slider"),
        b.$slider.removeClass("slick-initialized"),
        b.$list.off(".slick"),
        a(window).off(".slick-" + b.instanceUid),
        a(document).off(".slick-" + b.instanceUid)
    }
    ,
    b.prototype.disableTransition = function(a) {
        var b = this
          , c = {};
        c[b.transitionType] = "",
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }
    ,
    b.prototype.fadeSlide = function(a, b, c) {
        var d = this;
        d.cssTransitions === !1 ? (d.$slides.eq(b).css({
            zIndex: 1e3
        }),
        d.$slides.eq(b).animate({
            opacity: 1
        }, d.options.speed, d.options.easing, c),
        d.$slides.eq(a).animate({
            opacity: 0
        }, d.options.speed, d.options.easing)) : (d.applyTransition(b),
        d.applyTransition(a),
        d.$slides.eq(b).css({
            opacity: 1,
            zIndex: 1e3
        }),
        d.$slides.eq(a).css({
            opacity: 0
        }),
        c && setTimeout(function() {
            d.disableTransition(b),
            d.disableTransition(a),
            c.call()
        }, d.options.speed))
    }
    ,
    b.prototype.filterSlides = function(a) {
        var b = this;
        null  !== a && (b.unload(),
        b.$slideTrack.children(this.options.slide).detach(),
        b.$slidesCache.filter(a).appendTo(b.$slideTrack),
        b.reinit())
    }
    ,
    b.prototype.getCurrent = function() {
        var a = this;
        return a.currentSlide
    }
    ,
    b.prototype.getDotCount = function() {
        var a = this
          , b = 0
          , c = 0
          , d = 0;
        if (a.options.infinite === !0)
            d = Math.ceil(a.slideCount / a.options.slidesToScroll);
        else
            for (; b < a.slideCount; )
                ++d,
                b = c + a.options.slidesToShow,
                c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1
    }
    ,
    b.prototype.getLeft = function(a) {
        var b, c, d, e = this, f = 0;
        return e.slideOffset = 0,
        c = e.$slides.first().outerHeight(),
        e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = -1 * e.slideWidth * e.options.slidesToShow,
        f = -1 * c * e.options.slidesToShow),
        0 !== e.slideCount % e.options.slidesToScroll && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = -1 * (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth,
        f = -1 * (e.options.slidesToShow - (a - e.slideCount)) * c) : (e.slideOffset = -1 * e.slideCount % e.options.slidesToScroll * e.slideWidth,
        f = -1 * e.slideCount % e.options.slidesToScroll * c))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth,
        f = (a + e.options.slidesToShow - e.slideCount) * c),
        e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0,
        f = 0),
        e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0,
        e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)),
        b = e.options.vertical === !1 ? -1 * a * e.slideWidth + e.slideOffset : -1 * a * c + f,
        e.options.variableWidth === !0 && (d = e.$slideTrack.children(".slick-slide").eq(e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? a : a + e.options.slidesToShow),
        b = d[0] ? -1 * d[0].offsetLeft : 0,
        e.options.centerMode === !0 && (d = e.$slideTrack.children(".slick-slide").eq(e.options.infinite === !1 ? a : a + e.options.slidesToShow + 1),
        b = d[0] ? -1 * d[0].offsetLeft : 0,
        b += (e.$list.width() - d.outerWidth()) / 2)),
        b
    }
    ,
    b.prototype.getNavigableIndexes = function() {
        for (var a = this, b = 0, c = 0, d = []; b < a.slideCount; )
            d.push(b),
            b = c + a.options.slidesToScroll,
            c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }
    ,
    b.prototype.getSlideCount = function() {
        var b, c = this;
        if (c.options.swipeToSlide === !0) {
            var d = null ;
            return c.$slideTrack.find(".slick-slide").each(function(b, e) {
                return e.offsetLeft + a(e).outerWidth() / 2 > -1 * c.swipeLeft ? (d = e,
                !1) : void 0
            }),
            b = Math.abs(a(d).attr("index") - c.currentSlide)
        }
        return c.options.slidesToScroll
    }
    ,
    b.prototype.init = function() {
        var b = this;
        a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"),
        b.buildOut(),
        b.setProps(),
        b.startLoad(),
        b.loadSlider(),
        b.initializeEvents(),
        b.updateArrows(),
        b.updateDots()),
        null  !== b.options.onInit && b.options.onInit.call(this, b)
    }
    ,
    b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        }, a.changeSlide),
        a.$nextArrow.on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }
    ,
    b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide),
        b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", function() {
            b.paused = !0,
            b.autoPlayClear()
        }).on("mouseleave.slick", function() {
            b.paused = !1,
            b.autoPlay()
        })
    }
    ,
    b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(),
        b.initDotEvents(),
        b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler),
        b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler),
        b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler),
        b.$list.on("click.slick", b.clickHandler),
        b.options.pauseOnHover === !0 && b.options.autoplay === !0 && (b.$list.on("mouseenter.slick", function() {
            b.paused = !0,
            b.autoPlayClear()
        }),
        b.$list.on("mouseleave.slick", function() {
            b.paused = !1,
            b.autoPlay()
        })),
        b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 && a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler),
        a(window).on("orientationchange.slick.slick-" + b.instanceUid, function() {
            b.checkResponsive(),
            b.setPosition()
        }),
        a(window).on("resize.slick.slick-" + b.instanceUid, function() {
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay),
            b.windowDelay = window.setTimeout(function() {
                b.windowWidth = a(window).width(),
                b.checkResponsive(),
                b.setPosition()
            }, 50))
        }),
        a("*[draggable!=true]", b.$slideTrack).on("dragstart", function(a) {
            a.preventDefault()
        }),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }
    ,
    b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(),
        a.$nextArrow.show()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(),
        a.options.autoplay === !0 && a.autoPlay()
    }
    ,
    b.prototype.keyHandler = function(a) {
        var b = this;
        37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    b.prototype.lazyLoad = function() {
        function b(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this)
                  , c = a(this).attr("data-lazy");
                b.load(function() {
                    b.animate({
                        opacity: 1
                    }, 200)
                }).css({
                    opacity: 0
                }).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }
        var c, d, e, f, g = this;
        g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1),
        f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)),
        f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide,
        f = e + g.options.slidesToShow,
        g.options.fade === !0 && (e > 0 && e--,
        f <= g.slideCount && f++)),
        c = g.$slider.find(".slick-slide").slice(e, f),
        b(c),
        g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"),
        b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow),
        b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow),
        b(d))
    }
    ,
    b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(),
        a.$slideTrack.css({
            opacity: 1
        }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }
    ,
    b.prototype.postSlide = function(a) {
        var b = this;
        null  !== b.options.onAfterChange && b.options.onAfterChange.call(this, b, a),
        b.animating = !1,
        b.setPosition(),
        b.swipeLeft = null ,
        b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
    }
    ,
    b.prototype.progressiveLazyLoad = function() {
        var b, c, d = this;
        b = a("img[data-lazy]", d.$slider).length,
        b > 0 && (c = a("img[data-lazy]", d.$slider).first(),
        c.attr("src", c.attr("data-lazy")).removeClass("slick-loading").load(function() {
            c.removeAttr("data-lazy"),
            d.progressiveLazyLoad()
        }).error(function() {
            c.removeAttr("data-lazy"),
            d.progressiveLazyLoad()
        }))
    }
    ,
    b.prototype.refresh = function() {
        var b = this
          , c = b.currentSlide;
        b.destroy(),
        a.extend(b, b.initials),
        b.init(),
        b.changeSlide({
            data: {
                message: "index",
                index: c
            }
        }, !0)
    }
    ,
    b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"),
        b.slideCount = b.$slides.length,
        b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.options.focusOnSelect === !0 && a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler),
        b.setSlideClasses(0),
        b.setPosition(),
        null  !== b.options.onReInit && b.options.onReInit.call(this, b)
    }
    ,
    b.prototype.removeSlide = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a,
        a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a,
        d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(),
        c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(),
        d.$slides = d.$slideTrack.children(this.options.slide),
        d.$slideTrack.children(this.options.slide).detach(),
        d.$slideTrack.append(d.$slides),
        d.$slidesCache = d.$slides,
        void d.reinit())
    }
    ,
    b.prototype.setCSS = function(a) {
        var b, c, d = this, e = {};
        d.options.rtl === !0 && (a = -a),
        b = "left" == d.positionProp ? a + "px" : "0px",
        c = "top" == d.positionProp ? a + "px" : "0px",
        e[d.positionProp] = a,
        d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {},
        d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")",
        d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)",
        d.$slideTrack.css(e)))
    }
    ,
    b.prototype.setDimensions = function() {
        var b = this;
        if (b.options.vertical === !1 ? b.options.centerMode === !0 && b.$list.css({
            padding: "0px " + b.options.centerPadding
        }) : (b.$list.height(b.$slides.first().outerHeight(!0) * b.options.slidesToShow),
        b.options.centerMode === !0 && b.$list.css({
            padding: b.options.centerPadding + " 0px"
        })),
        b.listWidth = b.$list.width(),
        b.listHeight = b.$list.height(),
        b.options.vertical === !1 && b.options.variableWidth === !1)
            b.slideWidth = Math.ceil(b.listWidth / b.options.slidesToShow),
            b.$slideTrack.width(Math.ceil(b.slideWidth * b.$slideTrack.children(".slick-slide").length));
        else if (b.options.variableWidth === !0) {
            var c = 0;
            b.slideWidth = Math.ceil(b.listWidth / b.options.slidesToShow),
            b.$slideTrack.children(".slick-slide").each(function() {
                c += Math.ceil(a(this).outerWidth(!0))
            }),
            b.$slideTrack.width(Math.ceil(c) + 1)
        } else
            b.slideWidth = Math.ceil(b.listWidth),
            b.$slideTrack.height(Math.ceil(b.$slides.first().outerHeight(!0) * b.$slideTrack.children(".slick-slide").length));
        var d = b.$slides.first().outerWidth(!0) - b.$slides.first().width();
        b.options.variableWidth === !1 && b.$slideTrack.children(".slick-slide").width(b.slideWidth - d)
    }
    ,
    b.prototype.setFade = function() {
        var b, c = this;
        c.$slides.each(function(d, e) {
            b = -1 * c.slideWidth * d,
            a(e).css(c.options.rtl === !0 ? {
                position: "relative",
                right: b,
                top: 0,
                zIndex: 800,
                opacity: 0
            } : {
                position: "relative",
                left: b,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        }),
        c.$slides.eq(c.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    }
    ,
    b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }
    ,
    b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(),
        a.setHeight(),
        a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(),
        null  !== a.options.onSetPosition && a.options.onSetPosition.call(this, a)
    }
    ,
    b.prototype.setProps = function() {
        var a = this
          , b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left",
        "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
        (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0),
        void 0 !== b.OTransform && (a.animType = "OTransform",
        a.transformType = "-o-transform",
        a.transitionType = "OTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.MozTransform && (a.animType = "MozTransform",
        a.transformType = "-moz-transform",
        a.transitionType = "MozTransition",
        void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
        void 0 !== b.webkitTransform && (a.animType = "webkitTransform",
        a.transformType = "-webkit-transform",
        a.transitionType = "webkitTransition",
        void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
        void 0 !== b.msTransform && (a.animType = "msTransform",
        a.transformType = "-ms-transform",
        a.transitionType = "msTransition",
        void 0 === b.msTransform && (a.animType = !1)),
        void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform",
        a.transformType = "transform",
        a.transitionType = "transition"),
        a.transformsEnabled = null  !== a.animType && a.animType !== !1
    }
    ,
    b.prototype.setSlideClasses = function(a) {
        var b, c, d, e, f = this;
        f.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),
        c = f.$slider.find(".slick-slide"),
        f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2),
        f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active") : (d = f.options.slidesToShow + a,
        c.slice(d - b + 1, d + b + 2).addClass("slick-active")),
        0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")),
        f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active") : c.length <= f.options.slidesToShow ? c.addClass("slick-active") : (e = f.slideCount % f.options.slidesToShow,
        d = f.options.infinite === !0 ? f.options.slidesToShow + a : a,
        f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active")),
        "ondemand" === f.options.lazyLoad && f.lazyLoad()
    }
    ,
    b.prototype.setupInfinite = function() {
        var b, c, d, e = this;
        if (e.options.fade === !0 && (e.options.centerMode = !1),
        e.options.infinite === !0 && e.options.fade === !1 && (c = null ,
        e.slideCount > e.options.slidesToShow)) {
            for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow,
            b = e.slideCount; b > e.slideCount - d; b -= 1)
                c = b - 1,
                a(e.$slides[c]).clone(!0).attr("id", "").attr("index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
            for (b = 0; d > b; b += 1)
                c = b,
                a(e.$slides[c]).clone(!0).attr("id", "").attr("index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
            e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }
    ,
    b.prototype.selectHandler = function(b) {
        var c = this
          , d = parseInt(a(b.target).parents(".slick-slide").attr("index"));
        return d || (d = 0),
        c.slideCount <= c.options.slidesToShow ? (c.$slider.find(".slick-slide").removeClass("slick-active"),
        c.$slides.eq(d).addClass("slick-active"),
        c.options.centerMode === !0 && (c.$slider.find(".slick-slide").removeClass("slick-center"),
        c.$slides.eq(d).addClass("slick-center")),
        void c.asNavFor(d)) : void c.slideHandler(d)
    }
    ,
    b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, h = null , i = this;
        return b = b || !1,
        i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a),
        d = a,
        h = i.getLeft(d),
        g = i.getLeft(i.currentSlide),
        i.currentLeft = null  === i.swipeLeft ? g : i.swipeLeft,
        i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide,
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide,
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer),
        e = 0 > d ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : d - i.slideCount : d,
        i.animating = !0,
        null  !== i.options.onBeforeChange && a !== i.currentSlide && i.options.onBeforeChange.call(this, i, i.currentSlide, e),
        f = i.currentSlide,
        i.currentSlide = e,
        i.setSlideClasses(i.currentSlide),
        i.updateDots(),
        i.updateArrows(),
        i.options.fade === !0 ? void (c !== !0 ? i.fadeSlide(f, e, function() {
            i.postSlide(e)
        }) : i.postSlide(e)) : void (c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }
    ,
    b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(),
        a.$nextArrow.hide()),
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
        a.$slider.addClass("slick-loading")
    }
    ,
    b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX,
        b = e.touchObject.startY - e.touchObject.curY,
        c = Math.atan2(b, a),
        d = Math.round(180 * c / Math.PI),
        0 > d && (d = 360 - Math.abs(d)),
        45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : "vertical"
    }
    ,
    b.prototype.swipeEnd = function() {
        var a = this;
        if (a.dragging = !1,
        a.shouldClick = a.touchObject.swipeLength > 10 ? !1 : !0,
        void 0 === a.touchObject.curX)
            return !1;
        if (a.touchObject.swipeLength >= a.touchObject.minSwipe)
            switch (a.swipeDirection()) {
            case "left":
                a.slideHandler(a.currentSlide + a.getSlideCount()),
                a.currentDirection = 0,
                a.touchObject = {};
                break;
            case "right":
                a.slideHandler(a.currentSlide - a.getSlideCount()),
                a.currentDirection = 1,
                a.touchObject = {}
            }
        else
            a.touchObject.startX !== a.touchObject.curX && (a.slideHandler(a.currentSlide),
            a.touchObject = {})
    }
    ,
    b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))
            switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1,
            b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold,
            a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
            }
    }
    ,
    b.prototype.swipeMove = function(a) {
        var b, c, d, e, f = this;
        return e = void 0 !== a.originalEvent ? a.originalEvent.touches : null ,
        !f.dragging || e && 1 !== e.length ? !1 : (b = f.getLeft(f.currentSlide),
        f.touchObject.curX = void 0 !== e ? e[0].pageX : a.clientX,
        f.touchObject.curY = void 0 !== e ? e[0].pageY : a.clientY,
        f.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(f.touchObject.curX - f.touchObject.startX, 2))),
        c = f.swipeDirection(),
        "vertical" !== c ? (void 0 !== a.originalEvent && f.touchObject.swipeLength > 4 && a.preventDefault(),
        d = (f.options.rtl === !1 ? 1 : -1) * (f.touchObject.curX > f.touchObject.startX ? 1 : -1),
        f.swipeLeft = f.options.vertical === !1 ? b + f.touchObject.swipeLength * d : b + f.touchObject.swipeLength * (f.$list.height() / f.listWidth) * d,
        f.options.fade === !0 || f.options.touchMove === !1 ? !1 : f.animating === !0 ? (f.swipeLeft = null ,
        !1) : void f.setCSS(f.swipeLeft)) : void 0)
    }
    ,
    b.prototype.swipeStart = function(a) {
        var b, c = this;
        return 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {},
        !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]),
        c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX,
        c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY,
        void (c.dragging = !0))
    }
    ,
    b.prototype.unfilterSlides = function() {
        var a = this;
        null  !== a.$slidesCache && (a.unload(),
        a.$slideTrack.children(this.options.slide).detach(),
        a.$slidesCache.appendTo(a.$slideTrack),
        a.reinit())
    }
    ,
    b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(),
        b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(),
        b.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
    }
    ,
    b.prototype.updateArrows = function() {
        var a, b = this;
        a = Math.floor(b.options.slidesToShow / 2),
        b.options.arrows === !0 && b.options.infinite !== !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow.removeClass("slick-disabled"),
        b.$nextArrow.removeClass("slick-disabled"),
        0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled"),
        b.$nextArrow.removeClass("slick-disabled")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled"),
        b.$prevArrow.removeClass("slick-disabled")) : b.currentSlide > b.slideCount - b.options.slidesToShow + a && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled"),
        b.$prevArrow.removeClass("slick-disabled")))
    }
    ,
    b.prototype.updateDots = function() {
        var a = this;
        null  !== a.$dots && (a.$dots.find("li").removeClass("slick-active"),
        a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    a.fn.slick = function(a) {
        var c = this;
        return c.each(function(c, d) {
            d.slick = new b(d,a)
        })
    }
    ,
    a.fn.slickAdd = function(a, b, c) {
        var d = this;
        return d.each(function(d, e) {
            e.slick.addSlide(a, b, c)
        })
    }
    ,
    a.fn.slickCurrentSlide = function() {
        var a = this;
        return a.get(0).slick.getCurrent()
    }
    ,
    a.fn.slickFilter = function(a) {
        var b = this;
        return b.each(function(b, c) {
            c.slick.filterSlides(a)
        })
    }
    ,
    a.fn.slickGoTo = function(a, b) {
        var c = this;
        return c.each(function(c, d) {
            d.slick.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(a)
                }
            }, b)
        })
    }
    ,
    a.fn.slickNext = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.changeSlide({
                data: {
                    message: "next"
                }
            })
        })
    }
    ,
    a.fn.slickPause = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.autoPlayClear(),
            b.slick.paused = !0
        })
    }
    ,
    a.fn.slickPlay = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.paused = !1,
            b.slick.autoPlay()
        })
    }
    ,
    a.fn.slickPrev = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.changeSlide({
                data: {
                    message: "previous"
                }
            })
        })
    }
    ,
    a.fn.slickRemove = function(a, b) {
        var c = this;
        return c.each(function(c, d) {
            d.slick.removeSlide(a, b)
        })
    }
    ,
    a.fn.slickRemoveAll = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.removeSlide(null , null , !0)
        })
    }
    ,
    a.fn.slickGetOption = function(a) {
        var b = this;
        return b.get(0).slick.options[a]
    }
    ,
    a.fn.slickSetOption = function(a, b, c) {
        var d = this;
        return d.each(function(d, e) {
            e.slick.options[a] = b,
            c === !0 && (e.slick.unload(),
            e.slick.reinit())
        })
    }
    ,
    a.fn.slickUnfilter = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick.unfilterSlides()
        })
    }
    ,
    a.fn.unslick = function() {
        var a = this;
        return a.each(function(a, b) {
            b.slick && b.slick.destroy()
        })
    }
    ,
    a.fn.getSlick = function() {
        var a = null 
          , b = this;
        return b.each(function(b, c) {
            a = c.slick
        }),
        a
    }
});
var CollapseSection = {};
CollapseSection.btn = ".collapsible-btn",
CollapseSection.btn_label = ".btn-text",
CollapseSection.panel = ".collapsible-panel",
CollapseSection.collapsible = function(a, b) {
    var c = $(a)
      , d = c.find(CollapseSection.btn)
      , e = c.find(CollapseSection.panel);
    $(d).on("click", function(d) {
        d.preventDefault();
        var f = $(this).find(CollapseSection.btn_label);
        $(this).toggleClass("active"),
        f.text($(this).hasClass("active") ? $(this).data("labelActive") : $(this).data("label")),
        "#" == a.charAt(0) ? ($(e).slideToggle("slow", CollapseSection.scrollToTarget(a, b)),
        $(c).toggleClass("in")) : ($(e).slideToggle("slow"),
        $(c).toggleClass("in"))
    })
}
,
CollapseSection.scrollToTarget = function(a, b) {
    $("html, body").animate({
        scrollTop: $(a).offset().top - b
    }, 1e3)
}
,
$(document).ready(function() {
    CollapseSection.collapsible("#mainCollapsible", 40)
});
var ContentSlider = {};
ContentSlider.id = "carousel_items",
ContentSlider.nav_id = "nav.carousel",
ContentSlider.obj = !1,
ContentSlider.updateNav = function() {
    $(ContentSlider.nav_id).find("li").removeClass("selected");
    var a = ContentSlider.obj.slickCurrentSlide();
    $(ContentSlider.nav_id).find("li").eq(a).addClass("selected")
}
,
ContentSlider.navClick = function() {
    $(ContentSlider.nav_id).find("li").removeClass("selected");
    var a = $(this).index();
    ContentSlider.obj.slickGoTo(a)
}
,
+function(a) {
    "use strict";
    function b() {
        var b;
        Modernizr.touch ? a(".dropdown").off("mouseover").off("mouseout") : a(".dropdown").on("mouseenter", function() {
            var c = !1;
            a(this).hasClass("closing") && (c = !0);
            a(".closing").length;
            a(".dropdown").removeClass("closing"),
            c && a(this).addClass("closing"),
            window.clearTimeout(b),
            a(this).hasClass("closing") || a(".dropdown-toggle", this).trigger("click")
        }).on("mouseleave", function() {
            a(this).addClass("closing"),
            b = window.setTimeout(function() {
                a(".dropdown.open .dropdown-toggle").dropdown("toggle"),
                a(".closing").removeClass("closing")
            }, 400)
        })
    }
    a.fn.closeDropdown = function(b) {
        void 0 === b ? a(".dropdown").removeClass("open") : b.removeClass("open"),
        a("body").removeClass("dropdown-active").removeAttr("style")
    }
    ,
    a.fn.closeDropdownOnEvent = function(b, c) {
        var c = {
            dropdown: ".dropdown",
            menu: ".dropdown-menu",
            button: ".dropdown-toggle"
        }
          , d = 1
          , e = (a(c.dropdown),
        a(c.menu))
          , f = a(c.button);
        return "on" === b ? (e.on("touchstart click", function() {
            d = 0
        }),
        f.on("touchstart click", function() {
            d = 0
        }),
        a(document).on("touchstart click", function() {
            d && a().closeDropdown(),
            d = 1
        })) : (e.off("touchstart click", function() {
            d = 0
        }),
        f.off("touchstart click", function() {
            d = 0
        })),
        a(e)
    }
    ,
    a(".dropdown").on("show.bs.dropdown", function() {
        a("li.maintainHover").removeClass("maintainHover"),
        a(".slide").hasClass("open") && (a(".slide").removeClass("open").addClass("close"),
        a("body").removeClass("mega-nav-mobile-open").addClass("mega-nav-mobile-close dropdown-active").css("top", -document.documentElement.scrollTop + "px")),
        a("#searchform > input").blur(),
        a("body").addClass("dropdown-active"),
        a(".modal-video").disablescroll()
    }),
    a(".dropdown").on("hide.bs.dropdown", function() {
        a().closeDropdown(),
        a(".modal-video").disablescroll("undo")
    }),
    b(),
    a(window).resize(b)
}(jQuery),
+function(a) {
    "use strict";
    jQuery.fn.getContrast = function(a) {
        if ("string" == typeof a || a instanceof String) {
            var b = a
              , c = parseInt(b.substr(0, 2), 16)
              , d = parseInt(b.substr(2, 2), 16)
              , e = parseInt(b.substr(4, 2), 16)
              , f = (299 * c + 587 * d + 114 * e) / 1e3;
            this.addClass(f >= 128 ? "dark" : "light")
        } else
            this.addClass("dark")
    }
    ,
    jQuery.fn.hasBgImg = function() {
        var b = a(this)
          , c = b.css("background-image");
        b.addClass("none" == c ? "no-img-bg" : "img-bg")
    }
    ,
    jQuery.fn.clickOutside = function(b) {
        var c = 1
          , d = a(this);
        return d.cb = b,
        this.on("click", function() {
            c = 0
        }),
        a(document).on("click", function() {
            c && d.cb(),
            c = 1
        }),
        a(this)
    }
    ,
    jQuery.fn.touchOutside = function(b) {
        var c = 1
          , d = a(this);
        return d.cb = b,
        this.on("touchstart", function() {
            c = 0
        }),
        a(document).on("touchstart", function() {
            c && d.cb(),
            c = 1
        }),
        a(this)
    }
    ,
    a(document).ready(function() {
        a(".two-column-circle").hasBgImg(),
        a("#searchform .yui-ac-input").attr("placeholder", "Search"),
        a("#searchform").on("submit", function(b) {
            a(this).find("#q").val() || b.preventDefault()
        }),
        1 === a(".content-type-press-release").length && 0 === a(".text-image-banner").length && (console.log("press release breacrumbs fix"),
        a(".breadcrumbs-wrapper").css("margin-bottom", 28),
        a(".content-type-press-release").css("padding-bottom", 30))
    }),
    a(function() {
        a("[data-hide]").on("click", function() {
            a(this).closest("." + a(this).attr("data-hide")).hide()
        })
    }),
    a(".box-list-component > .pure-g > div").matchHeight()
}(jQuery),
+function(a) {
    "use strict";
    var b = {};
    b.check = "#landingMenu",
    b.wrapper = ".site-wrapper",
    b.header = ".site-header",
    b.footer = ".site-footer",
    b.landing_banner = ".text-image-banner",
    b.landing_menu = ".landing-menu-wrapper",
    b.break_point_1 = 1024,
    b.break_point_2 = 768,
    b.break_point_3 = 568,
    b.init = function() {
        var c;
        c = a(b.check).parents(".site-content"),
        a(b.wrapper).addClass("homepage"),
        b.calcScreenArea(c),
        a(window).resize(function() {
            b.calcScreenArea(c)
        })
    }
    ,
    b.calcScreenArea = function() {
        var c, d, e, f, g;
        c = a(b.header).height(),
        d = a(b.landing_menu).height();
        var f = a(window).height()
          , h = a(window).width();
        h < b.break_point_2 && (d /= 2),
        g = f - c,
        e = f - (c + d),
        a(b.landing_banner).css({
            "min-height": Math.floor(e) + "px"
        })
    }
    ,
    0 != a(b.check).length && b.init()
}(jQuery),
+function(a) {
    "use strict";
    a.fn.showLoading = function(b) {
        a(this).on("click", function() {
            "true" === a(this).attr("data-infaLoadingOverlay") ? (a(this).addClass("disabled"),
            a(this).attr("data-infaLoading", !0),
            a('<div class="overlay-loading"><div class="loading"></div></div>').appendTo("body")) : (a(this).addClass("disabled"),
            a(this).attr("data-infaLoading", !0),
            a('<div class="loading"></div>').insertAfter(this))
        }),
        "complete" === b && (a('[data-infaLoadingOverlay="false"]').attr("data-infaLoading", !1).removeClass("disabled"),
        a('[data-infaLoadingOverlay="true"]').attr("data-infaLoading", !1).removeClass("disabled"),
        a(".loading").remove(),
        a(".overlay-loading").remove())
    }
    ,
    a(document).ready(function() {
        a('[data-infaLoading="false"]').showLoading()
    })
}(jQuery),
+function(a) {
    "use strict";
    var b = {
        create: function() {
            a(".related-col").each(function() {
                a(this).attr("data-component-visibility", "hidden")
            })
        },
        set: function(a, b) {
            this.create(),
            a.attr("data-component-visibility", b)
        }
    };
    b.create(),
    a.fn.megaNavDesktop = function(c) {
        function d(b) {
            var c = a(b)
              , d = (a(b).find(".level-2"),
            c.index());
            a(".level-1 > li").each(function() {
                a(this).index() != d && (a(this).find(".level-2 li").removeClass("maintainHover"),
                a(this).find("ul").removeClass("open"))
            }),
            a("#searchform > input").blur(),
            a().closeDropdown(),
            c.addClass("maintainHover")
        }
        function e(b) {
            {
                var c = a(b);
                a(b).find(".level-2")
            }
            return c.removeClass("maintainHover"),
            !0
        }
        function f(c) {
            var d = a(c)
              , e = a(c).find(".level-3")
              , f = a(c).find(".level-2-related-content");
            b.set(f, "visible"),
            a(".related-col").removeClass("open"),
            a(".level-3 li").removeClass("maintainHover"),
            a(".level-3").removeClass("open"),
            a("#searchform > input").blur(),
            e.addClass("open"),
            d.addClass("maintainHover"),
            a(c).find(".level-3").addClass("open")
        }
        function g(c) {
            var d = a(c)
              , e = a(c).find(".level-3")
              , f = a(c).find(".level-2-related-content");
            b.set(f, "hidden"),
            e.removeClass("open"),
            d.removeClass("maintainHover")
        }
        function h(c) {
            var d = a(c)
              , e = a(c).find(".level-3-related-content");
            b.set(e, "visible"),
            a("#searchform > input").blur(),
            a(".related-col").removeClass("open"),
            e.addClass("open"),
            d.addClass("maintainHover")
        }
        function i(c) {
            var d = a(c)
              , e = a(c).find(".level-3-related-content");
            b.set(e, "hidden"),
            e.removeClass("open"),
            d.removeClass("maintainHover")
        }
        a(c).removeAttr("style"),
        a(c + " .related-col a").attr("rel", "nofollow"),
        a(c + " .level-3 a").attr("rel", "nofollow"),
        a(c + " li").each(function() {
            var b = a(this).find("ul");
            0 != b.length && a(this).addClass("parent");
            var c = a(this).children(".related-col");
            0 != c.length && (a(this).hasClass("level-3") && c.addClass("lvl3-related-col"),
            a(this).addClass("with-related-articles"))
        }),
        a(".level-1 > li").each(function() {
            a(this).attr("id", a(this).index())
        }),
        a(c + " .level-2").each(function() {
            "" !== a(this).find(".level-2-separator").length && a(this).append('<span class="level-2-separator"></span>')
        }),
        Modernizr.touch ? (a(c + " .level-1 > li > a").each(function() {
            var b = a(this).attr("href");
            a(this).attr("href", "#"),
            a(this).data("href", b)
        }),
        a(c + " .level-2 > li > a").each(function() {
            var b = a(this).attr("href");
            a(this).attr("href", "#"),
            a(this).data("href", b)
        }),
        a(c).addClass("touch-nav"),
        a(c + " .level-1 > li > a").on("touchstart mouseenter focus", function(b) {
            b.stopImmediatePropagation(),
            b.preventDefault();
            var c = a(this).parent("li");
            return c.hasClass("maintainHover") ? (e(c),
            void (window.location.href = a(this).data("href"))) : (a(".level-1 > li").removeClass("maintainHover"),
            d(c),
            !1)
        }),
        a(c + " .level-2 > li > a").on("touchstart mouseenter focus", function(b) {
            b.stopImmediatePropagation(),
            b.preventDefault();
            var c = a(this).parent("li");
            return c.hasClass("maintainHover") ? (g(c),
            void (window.location.href = a(this).data("href"))) : (a(".level-2 > li").removeClass("maintainHover"),
            f(c),
            !1)
        }),
        a(c + " .level-3 > li > a").on("touchstart mouseenter focus", function() {
            var b = a(this).parent("li");
            a(".level-3 > li").removeClass("maintainHover"),
            f(b)
        })) : (a(c + " .level-1").on("mouseleave", function() {
            a(this).find("ul").removeClass("open"),
            a(this).find("li").removeClass("maintainHover"),
            b.create()
        }),
        a(c + " .level-1").menuAim({
            activate: d,
            deactivate: e,
            submenuDirection: "below"
        }),
        a(c + " .level-2").menuAim({
            activate: f,
            deactivate: g
        }),
        a(c + " .level-3").menuAim({
            activate: h,
            deactivate: i
        }))
    }
    ,
    a.fn.megaNavMobile = function(b) {
        function c() {
            var a = !1;
            return function(b) {
                (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
            }(navigator.userAgent || navigator.vendor || window.opera),
            a
        }
        function d() {
            a("#searchform > input").blur(),
            a().closeDropdown(),
            a(".slide").removeClass("close").addClass("open"),
            a("body").removeClass("mega-nav-mobile-close").addClass("mega-nav-mobile-open"),
            a("html").addClass("mega-nav-mobile-open")
        }
        function e() {
            a(".slide").removeClass("open").addClass("close"),
            a("body").removeClass("mega-nav-mobile-open").addClass("mega-nav-mobile-close"),
            a("html").removeClass("mega-nav-mobile-open"),
            a("#searchform > input").blur()
        }
        var f = '<span class="infa-icon infa-icon-caret-right"></span>';
        
        a(b).removeAttr("style"),
        a(b + " .related-col a").attr("rel", "nofollow"),
        a(b + " .level-3 a").attr("rel", "nofollow"),
        a(b).addClass("slide"),
        a("#mobile-menu-btn").addClass("slide"),
        a(".site-wrapper").addClass("slide");
        var g = a(".slide")
          , h = a(".site-content")
          , i = c() ? "touchstart" : "click";
        a("#mobile-menu-btn").on(i, function(b) {
            b.stopPropagation(),
            b.preventDefault(),
            a(this).hasClass("open") ? e() : d()
        }),
        a(".nav_close_btn").on("click", function() {
            h.hasClass("open") && e()
        });
        var j, k;
        a(b).addClass("off_canvas"),
        a(b + " ul li").each(function() {
            a(this).has("ul").addClass("has_levels")
        }),
        a("nav.off_canvas > ul").addClass("nav_level_current"),
        a(".site-wrapper").addClass("mega-nav-mobile-home"),
        a(".has_levels > a").append('<span class="nav_next_btn">' + f + "</span>"),
        a(b).on("click", ".nav_next_btn", function(b) {
            b.preventDefault(),
            a(this).closest("ul").hasClass("nav_level_current") && a(this).closest("ul").removeClass("nav_level_current").addClass("nav_level_prev"),
            a(this).closest("li").children("ul").addClass("nav_level_current"),
            a(".nav_prev_btn").fadeIn(400),
            a(".site-wrapper").removeClass("mega-nav-mobile-home"),
            a(this).parent().siblings("ul").find(".mobile-child-nav").length || (j = a(this).parent("a").text(),
            k = a(this).parent("a").attr("href"),
            a(this).parent().siblings("ul").prepend('<li class="mobile-child-nav mobile-only"><a class="mobile-nav-back nav_prev_btn" alt="back"></a><a class="mobile-clicked-link nav_prev_btn" href="#">' + j + "</a></li>"))
        }),
        a(b).on("click", ".nav_prev_btn", function(b) {
            b.preventDefault();
            var c = a(".nav_level_current");
            c.closest("li").closest("ul").hasClass("nav_level_prev") ? c.closest("li").closest("ul").removeClass("nav_level_prev").addClass("nav_level_current") : (a(".nav_prev_btn").fadeOut(400),
            a(".site-wrapper").addClass("mega-nav-mobile-home")),
            a("nav.off_canvas > ul").hasClass("nav_level_current") && (a(".nav_prev_btn").fadeOut(400),
            a(".site-wrapper").addClass("mega-nav-mobile-home")),
            c.removeClass("nav_level_current")
        }),
        a(window).resize(function() {
            "none" === a("#mobile-menu-btn").css("display") && a(g).removeClass("open close"),
            a(window).height() < 330 && a("#searchform > input").on("focusin", function() {
                a(".social-share-wrapper").hide()
            }).on("focusout", function() {
                a(".social-share-wrapper").show()
            })
        })
    }
    ,
    a(document).on("click", function() {
        a("li.maintainHover").removeClass("maintainHover")
    }),
    a(document).ready(function() {
        a.fn.megaNavMobile("#mega-nav-mobile"),
        a.fn.megaNavDesktop("#mega-nav-desktop");
        var c = function() {
            a("li.maintainHover").removeClass("maintainHover"),
            b.set(a(".related-col"), "hidden")
        }
        ;
        a("#mega-nav-desktop").touchOutside(c),
        a("#mega-nav-desktop").on("mouseleave", function() {
            c()
        })
    }),
    a(window).on("orientationchange", function() {
        a(window).width() >= 768 && (a("body").removeClass("mega-nav-mobile-open"),
        a("html").removeClass("mega-nav-mobile-open"))
    })
}(jQuery),
+function(a) {
    "use strict";
    var b = a('<div class="modal modal-default fade" tabindex="-1" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">\r\n            <div class="modal-dialog modal-lg modal-dialog-default">\r\n                <div class="modal-content">\r\n                    <div class="modal-header">\r\n                        <button type="button" class="btn close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n                        <h2 class="modal-title"></h2>\r\n                    </div>\r\n                    <div class="modal-body">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>')
      , c = a('<div class="modal modal-image fade" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel" aria-hidden="true">\r\n            <div class="modal-dialog modal-dialog-image">\r\n                <div class="modal-content">\r\n                    <div class="modal-header">\r\n                        <button type="button" class="btn close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n                    </div>\r\n                    <div class="image-placeholder">\r\n                        <img class="image-src" src="" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>')
      , d = a('<div class="modal modal-video fade" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel" aria-hidden="true">\r\n            <div class="modal-dialog modal-lg modal-dialog-video">\r\n                <div class="modal-content">\r\n                    <div class="modal-header">\r\n                        <button type="button" class="btn close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n                    </div>\r\n                    <div class="video-placeholder">\r\n                        <div id="player"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>');
    a.fn.modalDefault = function() {
        this.on("click", function(c) {
            c.preventDefault(),
            a("body").append(b),
            a(".modal-default .hide").show(),
            a(".modal-default").modal();
            var d = a(".modal-default")
              , e = a(".modal-default .modal-body")
              , f = a(this).data("modal-title");
            a(".modal").find(".modal-title").text(f);
            var g = a(this).data("modal-title-image");
            a(".modal").find(".modal-header").css("background-image", "url(" + g + ")"),
            d.on("show.bs.modal", function() {
                e.load(c.currentTarget.href)
            }).modal(),
            c.preventDefault()
        }),
        a("body").on("hidden.bs.modal", ".modal-default", function() {
            a(this).removeData("bs.modal"),
            a(this).find(".modal").html(""),
            a(this).remove()
        })
    }
    ,
    a.fn.modalImage = function() {
        this.on("click", function(b) {
            b.preventDefault(),
            a("body").append(c),
            a(".modal-image .hide").show(),
            a(".modal-image").modal();
            var d = (a(".modal-image"),
            a(".modal-image .modal-body"),
            a(this).data("modal-title"));
            a(".modal").find(".modal-title").text(d);
            var e = a(this).data("modal-image");
            a(".modal").find("img").attr("src", e)
        }),
        a("body").on("hidden.bs.modal", ".modal-image", function() {
            a(this).removeData("bs.modal"),
            a(this).find(".modal").html(""),
            a(this).remove()
        })
    }
    ,
    a.fn.modalVideo = function() {
        a("body").append(d),
        a(".modal-video .hide").show(),
        a(".modal-video").modal();
        var b = (a(".modal-video"),
        a("#player"),
        a(".modal-video").find(".video-placeholder"),
        a(this).data("video-type"))
          , c = a(this).data("video-id")
          , e = a(this).data("video-thumb");
        "youtube" == b ? ("" == e && (e = "http://img.youtube.com/vi/" + c + "/hqdefault.jpg"),
        a.getScript("https://jwpsrv.com/library/gfuk0H+7EeSiSg6sC0aurw.js").done(function() {
            jwplayer("player").setup({
                primary: "html5",
                width: "100%",
                aspectratio: "16:9",
                autostart: !0,
                logo: {
                    file: video_logo,
                    link: video_logo_link,
                    position: "top-left"
                },
                playlist: [{
                    file: "http://www.youtube.com/watch?v=" + c,
                    title: c,
                    image: e,
                    format: b
                }]
            }),
            "undefined" != typeof window.analytics && "undefined" != typeof window.analytics.track && analytics.track({
                event: {
                    eventType: "video_tracking"
                },
                video: {
                    divID: "player"
                }
            }),
            jwplayer("player").play()
        })) : a.getScript("https://jwpsrv.com/library/gfuk0H+7EeSiSg6sC0aurw.js").done("akamai" == b ? function() {
            var a = "/manifest.f4m";
            c.indexOf("_,") > 0 && (a = ".csmil/manifest.f4m"),
            jwplayer("player").setup({
                playlist: [{
                    file: "http://informatica-vh.akamaihd.net/z/delivery/" + c + a,
                    image: e,
                    provider: "http://players.edgesuite.net/flash/plugins/jw/v3.6/AkamaiAdvancedJWStreamProvider.swf",
                    type: "mp4",
                    title: c,
                    format: b
                }],
                logo: {
                    file: video_logo,
                    link: video_logo_link,
                    position: "top-left"
                },
                primary: "flash",
                width: "100%",
                aspectratio: "16:9",
                autostart: !0
            }),
            "undefined" != typeof window.analytics && "undefined" != typeof window.analytics.track && analytics.track({
                event: {
                    eventType: "video_tracking"
                },
                video: {
                    divID: "player"
                }
            }),
            jwplayer("player").play()
        }
         : function() {
            jwplayer("player").setup({
                playlist: [{
                    file: c,
                    image: e,
                    provider: "http://players.edgesuite.net/flash/plugins/jw/v3.6/AkamaiAdvancedJWStreamProvider.swf",
                    type: "mp4",
                    title: c,
                    format: b
                }],
                logo: {
                    file: video_logo,
                    link: video_logo_link,
                    position: "top-left"
                },
                primary: "flash",
                width: "100%",
                aspectratio: "16:9",
                autostart: !0
            }),
            "undefined" != typeof window.analytics && "undefined" != typeof window.analytics.track && analytics.track({
                event: {
                    eventType: "video_tracking"
                },
                video: {
                    divID: "player"
                }
            }),
            jwplayer("player").play()
        }
        ),
        a("body").on("hidden.bs.modal", ".modal-video", function() {
            a(this).removeData("bs.modal"),
            a(this).find(".modal-body").html(""),
            a(this).remove(),
            jwplayer().stop()
        })
    }
    ,
    a('[data-modal-type="modal-default"]').modalDefault(),
    a('[data-modal-type="modal-image"]').modalImage(),
    a(document).on("click", '[data-modal-type="modal-video"]', function(b) {
        return b.preventDefault(),
        a(this).modalVideo(),
        !1
    }),
    a("#register_btn").on("click", function() {
        a(this).parents(".modal-dialog").addClass("form-submitted")
    }),
    a(".modal").each(function() {
        var b = a(this)
          , c = b.find(".modal-dialog")
          , d = b.is(".fade") ? "fade" : "";
        b.removeClass("fade").addClass("invisible").css("display", "block"),
        c.data("height", c.height()),
        b.css("display", "").removeClass("invisible").addClass(d)
    }),
    a(document).on("show.bs.modal", ".modal", function() {
        a(".modal.in").removeClass("fade").modal("hide")
    })
}(jQuery),
function(a) {
    var b;
    a.fn.overlayIntro = function(c) {
        function d() {
            a(g).append('<button class="btn btn-get-started" id="getStarted">Get Started</button>'),
            a("#getStarted").on("click touchend", function() {
                a('[data-component="overlay-intro"]').hide()
            })
        }
        function e(b) {
            a(b.demo_item_id);
            a(".overlay-intro").append('<div data-target-demo="' + b.demo_item_id + '" class="tip-holder ' + b.demo_position_y + " " + b.demo_position_x + '"><div class="tip-content"><p>' + b.description + "</p></div></div>")
        }
        function f() {
            var b, c;
            b = a(window).width(),
            c = a(window).height(),
            a(".tip-holder").each(function() {
                var c = a(this)
                  , d = a(this).attr("data-target-demo")
                  , e = a(d);
                if (0 !== e.length) {
                    console.log("position for", d),
                    e.offset();
                    var f, g, h = e.offset(), i = e.outerHeight(), j = e.outerWidth();
                    567 >= b ? (f = 180,
                    g = 0) : 768 >= b ? (f = 260,
                    g = 0) : 1024 >= b ? (f = 320,
                    g = 80) : (f = 400,
                    g = 80),
                    c.removeAttr("style");
                    var k, l;
                    c.hasClass("bottom") ? (k = h.top - g,
                    c.css("top", k)) : (k = h.top + i / 2,
                    c.css("top", k)),
                    c.hasClass("right") ? (l = b - h.left,
                    10 > l ? l = 10 : l + j >= b && (l = 10),
                    c.css("right", l)) : (l = h.left,
                    l > b / 2 && (l -= f,
                    a("#tip_" + c.demo_item_id).addClass("on-2nd-half")),
                    10 > l ? l = 10 : l + j >= b && (l = 10),
                    c.css("left", l))
                }
            })
        }
        if (0 !== a('[data-component="overlay-intro"]').length) {
            if ("object" == typeof c) {
                if (a(".overlay-intro").show(),
                0 === c.length)
                    return void a(".overlay-intro").hide()
            } else {
                var c = JSON.parse(c);
                if ("object" != typeof c)
                    return void a(".overlay-intro").hide();
                if (a(".overlay-intro").show(),
                0 === c.length)
                    return void a(".overlay-intro").hide()
            }
            for (var g = a(this), h = 0; h < c.length; ++h)
                e(c[h]);
            f(),
            d(),
            a(window).resize(function() {
                clearTimeout(b),
                b = setTimeout(function() {
                    f()
                }, 250)
            })
        }
    }
}(jQuery),
function(a) {
    "use strict";
    a.fn.heroPIN = function() {
        var b = function(a) {
            return b = "function" == typeof Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
                var b = -1
                  , c = -1;
                for (b = 0; b < this.length; b++)
                    if (this[b] === a) {
                        c = b;
                        break
                    }
                return c
            }
            ,
            b.call(this, a)
        }
        ;
        a(".pin-nav-wrapper").height(a(".pin-nav").outerHeight());
        var c, d, e, f = 1, g = !1, h = 30, i = [], j = a(".pin-nav ul").width(), k = a(".pin-nav ul li").length, l = Math.floor(j / k);
        if (0 !== k) {
            a(".nav li").each(function() {
                a(this).width()
            });
            do {
                var m = 0
                  , n = 0
                  , o = 0;
                a(".nav li").each(function() {
                    var d = a(this).width();
                    m = m + d + h,
                    n = n + this.offsetWidth + h,
                    d > l ? (a(this).addClass("oversized"),
                    c = b.call(i, this),
                    -1 === c && i.push(this)) : o = o + d + h
                }),
                m > j ? h > 14 ? (a(".nav li").each(function() {
                    a(this).css("margin-right", h)
                }),
                h--,
                m = 0,
                a(".nav li").each(function() {
                    var b = a(this).width();
                    m = m + b + h
                })) : (d = j - o - (h - 6) * i.length,
                e = d / i.length,
                a(".oversized").css("margin-right", h - 4),
                a(".oversized").find("a").width(Math.floor(e)),
                m = 0,
                a(".nav li").each(function() {
                    var b = a(this).width();
                    m = m + b + h
                }),
                g = !0) : g = !0,
                f++,
                a(".nav li:last").css("margin-right", 0),
                a(".pin-nav ul").fadeIn().addClass("rendered")
            } while (g === !1)
        }
        if (a("body").scrollspy({
            target: ".pin-nav",
            offset: 48
        }),
        a(".pin-nav").length > 0)
            var p = a(".pin-nav").offset().top;
        a(".site-footer").outerHeight(!0);
        a(".pin-nav").affix({
            offset: {
                top: function() {
                    return p
                }
            }
        }),
        a(".nav li > a").on("touchstart click", function(b) {
            if (b.preventDefault(),
            location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var c = a(this.hash);
                if (c = c.length ? c : a("[name=" + this.hash.slice(1) + "]"),
                c.length)
                    return a("html,body").animate({
                        scrollTop: c.offset().top - 45
                    }, 500),
                    !1
            }
        }),
        a("body").each(function() {
            a(this).scrollspy("refresh")
        })
    }
    ,
    a(window).load(function() {
        a(".pin-nav ul").fadeOut(),
        a(".pin").heroPIN()
    })
}(jQuery),
function(a) {
    "use strict";
    function b(b, c) {
        this.opts = a.extend({
            handleWheel: !0,
            handleScrollbar: !0,
            handleKeys: !0,
            scrollEventKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
        }, c),
        this.$container = b,
        this.$document = a(document),
        this.lockToScrollPos = [0, 0],
        this.disable()
    }
    var c, d;
    d = b.prototype,
    d.disable = function() {
        var a = this;
        a.opts.handleWheel && a.$container.on("mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll", a._handleWheel),
        a.opts.handleScrollbar && (a.lockToScrollPos = [a.$container.scrollLeft(), a.$container.scrollTop()],
        a.$container.on("scroll.disablescroll", function() {
            a._handleScrollbar.call(a)
        })),
        a.opts.handleKeys && a.$document.on("keydown.disablescroll", function(b) {
            a._handleKeydown.call(a, b)
        })
    }
    ,
    d.undo = function() {
        var a = this;
        a.$container.off(".disablescroll"),
        a.opts.handleKeys && a.$document.off(".disablescroll")
    }
    ,
    d._handleWheel = function(a) {
        a.preventDefault()
    }
    ,
    d._handleScrollbar = function() {
        this.$container.scrollLeft(this.lockToScrollPos[0]),
        this.$container.scrollTop(this.lockToScrollPos[1])
    }
    ,
    d._handleKeydown = function(a) {
        for (var b = 0; b < this.opts.scrollEventKeys.length; b++)
            if (a.keyCode === this.opts.scrollEventKeys[b])
                return void a.preventDefault()
    }
    ,
    a.fn.disablescroll = function(a) {
        c || "object" != typeof a && a || (c = new b(this,a)),
        c && "undefined" == typeof a ? c.disable() : c && c[a] && c[a].call(c)
    }
    ,
    window.UserScrollDisabler = b
}(jQuery),
function(a) {
    a.fn.heroScrollToTop = function() {
        this.on("click", function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var b = a(this.hash);
                return b = b.length ? b : a("[name=" + this.hash.slice(1) + "]"),
                b.length ? (a("html,body").animate({
                    scrollTop: b.offset().top
                }, 1e3),
                !1) : (a("html,body").animate({
                    scrollTop: 0
                }, 1e3),
                !1)
            }
            return a("html,body").animate({
                scrollTop: 0
            }, 1e3),
            !1
        })
    }
}(jQuery),
$(document).ready(function() {
    $(".scroll-to-top").heroScrollToTop()
}),
function(a, b) {
    function c(a, b, c) {
        var d = a.children()
          , e = !1;
        a.empty();
        for (var g = 0, h = d.length; h > g; g++) {
            var i = d.eq(g);
            if (a.append(i),
            c && a.append(c),
            f(a, b)) {
                i.remove(),
                e = !0;
                break
            }
            c && c.detach()
        }
        return e
    }
    function d(b, c, g, h, i) {
        var j = !1
          , k = "a table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style"
          , l = "script, .dotdotdot-keep";
        return b.contents().detach().each(function() {
            var m = this
              , n = a(m);
            if ("undefined" == typeof m || 3 == m.nodeType && 0 == a.trim(m.data).length)
                return !0;
            if (n.is(l))
                b.append(n);
            else {
                if (j)
                    return !0;
                b.append(n),
                !i || n.is(h.after) || n.find(h.after).length || b[b.is(k) ? "after" : "append"](i),
                f(g, h) && (j = 3 == m.nodeType ? e(n, c, g, h, i) : d(n, c, g, h, i),
                j || (n.detach(),
                j = !0)),
                j || i && i.detach()
            }
        }),
        j
    }
    function e(b, c, d, e, h) {
        var k = b[0];
        if (!k)
            return !1;
        var m = j(k)
          , n = -1 !== m.indexOf(" ") ? " " : "　"
          , o = "letter" == e.wrap ? "" : n
          , p = m.split(o)
          , q = -1
          , r = -1
          , s = 0
          , t = p.length - 1;
        for (e.fallbackToLetter && 0 == s && 0 == t && (o = "",
        p = m.split(o),
        t = p.length - 1); t >= s && (0 != s || 0 != t); ) {
            var u = Math.floor((s + t) / 2);
            if (u == r)
                break;
            r = u,
            i(k, p.slice(0, r + 1).join(o) + e.ellipsis),
            f(d, e) ? (t = r,
            e.fallbackToLetter && 0 == s && 0 == t && (o = "",
            p = p[0].split(o),
            q = -1,
            r = -1,
            s = 0,
            t = p.length - 1)) : (q = r,
            s = r)
        }
        if (-1 == q || 1 == p.length && 0 == p[0].length) {
            var v = b.parent();
            b.detach();
            var w = h && h.closest(v).length ? h.length : 0;
            v.contents().length > w ? k = l(v.contents().eq(-1 - w), c) : (k = l(v, c, !0),
            w || v.detach()),
            k && (m = g(j(k), e),
            i(k, m),
            w && h && a(k).parent().append(h))
        } else
            m = g(p.slice(0, q + 1).join(o), e),
            i(k, m);
        return !0
    }
    function f(a, b) {
        return a.innerHeight() > b.maxHeight
    }
    function g(b, c) {
        for (; a.inArray(b.slice(-1), c.lastCharacter.remove) > -1; )
            b = b.slice(0, -1);
        return a.inArray(b.slice(-1), c.lastCharacter.noEllipsis) < 0 && (b += c.ellipsis),
        b
    }
    function h(a) {
        return {
            width: a.innerWidth(),
            height: a.innerHeight()
        }
    }
    function i(a, b) {
        a.innerText ? a.innerText = b : a.nodeValue ? a.nodeValue = b : a.textContent && (a.textContent = b)
    }
    function j(a) {
        return a.innerText ? a.innerText : a.nodeValue ? a.nodeValue : a.textContent ? a.textContent : ""
    }
    function k(a) {
        do
            a = a.previousSibling;
        while (a && 1 !== a.nodeType && 3 !== a.nodeType);return a
    }
    function l(b, c, d) {
        var e, f = b && b[0];
        if (f) {
            if (!d) {
                if (3 === f.nodeType)
                    return f;
                if (a.trim(b.text()))
                    return l(b.contents().last(), c)
            }
            for (e = k(f); !e; ) {
                if (b = b.parent(),
                b.is(c) || !b.length)
                    return !1;
                e = k(b[0])
            }
            if (e)
                return l(a(e), c)
        }
        return !1
    }
    function m(b, c) {
        return b ? "string" == typeof b ? (b = a(b, c),
        b.length ? b : !1) : b.jquery ? b : !1 : !1
    }
    function n(a) {
        for (var b = a.innerHeight(), c = ["paddingTop", "paddingBottom"], d = 0, e = c.length; e > d; d++) {
            var f = parseInt(a.css(c[d]), 10);
            isNaN(f) && (f = 0),
            b -= f
        }
        return b
    }
    if (!a.fn.dotdotdot) {
        a.fn.dotdotdot = function(b) {
            if (0 == this.length)
                return a.fn.dotdotdot.debug('No element found for "' + this.selector + '".'),
                this;
            if (this.length > 1)
                return this.each(function() {
                    a(this).dotdotdot(b)
                });
            var e = this;
            e.data("dotdotdot") && e.trigger("destroy.dot"),
            e.data("dotdotdot-style", e.attr("style") || ""),
            e.css("word-wrap", "break-word"),
            "nowrap" === e.css("white-space") && e.css("white-space", "normal"),
            e.bind_events = function() {
                return e.bind("update.dot", function(b, h) {
                    b.preventDefault(),
                    b.stopPropagation(),
                    i.maxHeight = "number" == typeof i.height ? i.height : n(e),
                    i.maxHeight += i.tolerance,
                    "undefined" != typeof h && (("string" == typeof h || "nodeType" in h && 1 === h.nodeType) && (h = a("<div />").append(h).contents()),
                    h instanceof a && (g = h)),
                    p = e.wrapInner('<div class="dotdotdot" />').children(),
                    p.contents().detach().end().append(g.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var k = !1
                      , l = !1;
                    return j.afterElement && (k = j.afterElement.clone(!0),
                    k.show(),
                    j.afterElement.detach()),
                    f(p, i) && (l = "children" == i.wrap ? c(p, i, k) : d(p, e, p, i, k)),
                    p.replaceWith(p.contents()),
                    p = null ,
                    a.isFunction(i.callback) && i.callback.call(e[0], l, g),
                    j.isTruncated = l,
                    l
                }).bind("isTruncated.dot", function(a, b) {
                    return a.preventDefault(),
                    a.stopPropagation(),
                    "function" == typeof b && b.call(e[0], j.isTruncated),
                    j.isTruncated
                }).bind("originalContent.dot", function(a, b) {
                    return a.preventDefault(),
                    a.stopPropagation(),
                    "function" == typeof b && b.call(e[0], g),
                    g
                }).bind("destroy.dot", function(a) {
                    a.preventDefault(),
                    a.stopPropagation(),
                    e.unwatch().unbind_events().contents().detach().end().append(g).attr("style", e.data("dotdotdot-style") || "").data("dotdotdot", !1)
                }),
                e
            }
            ,
            e.unbind_events = function() {
                return e.unbind(".dot"),
                e
            }
            ,
            e.watch = function() {
                if (e.unwatch(),
                "window" == i.watch) {
                    var b = a(window)
                      , c = b.width()
                      , d = b.height();
                    b.bind("resize.dot" + j.dotId, function() {
                        c == b.width() && d == b.height() && i.windowResizeFix || (c = b.width(),
                        d = b.height(),
                        l && clearInterval(l),
                        l = setTimeout(function() {
                            e.trigger("update.dot")
                        }, 100))
                    })
                } else
                    k = h(e),
                    l = setInterval(function() {
                        if (e.is(":visible")) {
                            var a = h(e);
                            (k.width != a.width || k.height != a.height) && (e.trigger("update.dot"),
                            k = a)
                        }
                    }, 500);
                return e
            }
            ,
            e.unwatch = function() {
                return a(window).unbind("resize.dot" + j.dotId),
                l && clearInterval(l),
                e
            }
            ;
            var g = e.contents()
              , i = a.extend(!0, {}, a.fn.dotdotdot.defaults, b)
              , j = {}
              , k = {}
              , l = null 
              , p = null ;
            return i.lastCharacter.remove instanceof Array || (i.lastCharacter.remove = a.fn.dotdotdot.defaultArrays.lastCharacter.remove),
            i.lastCharacter.noEllipsis instanceof Array || (i.lastCharacter.noEllipsis = a.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),
            j.afterElement = m(i.after, e),
            j.isTruncated = !1,
            j.dotId = o++,
            e.data("dotdotdot", !0).bind_events().trigger("update.dot"),
            i.watch && e.watch(),
            e
        }
        ,
        a.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null ,
            after: null ,
            height: null ,
            watch: !1,
            windowResizeFix: !0
        },
        a.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: [" ", "　", ",", ";", ".", "!", "?"],
                noEllipsis: []
            }
        },
        a.fn.dotdotdot.debug = function() {}
        ;
        var o = 1
          , p = a.fn.html;
        a.fn.html = function(c) {
            return c != b && !a.isFunction(c) && this.data("dotdotdot") ? this.trigger("update", [c]) : p.apply(this, arguments)
        }
        ;
        var q = a.fn.text;
        a.fn.text = function(c) {
            return c != b && !a.isFunction(c) && this.data("dotdotdot") ? (c = a("<div />").text(c).html(),
            this.trigger("update", [c])) : q.apply(this, arguments)
        }
    }
}(jQuery);
//var video_logo = infa.rootUrl + "/etc/designs/informatica-com/clientlibs/i/static/video_player_logo.png"
  //, video_logo_link = infa.rootUrl;
!function(a) {
    a.fn.containerVideo = function() {
        return this.each(function(b) {
            var c = a(this).data("video-type")
              , d = a(this).data("video-id")
              , e = a(this).data("video-thumb")
              , f = a(this).find(".video-placeholder");
            "youtube" == c ? (f.html('<div id="player' + b + '"></div>'),
            "" == e && (e = "http://img.youtube.com/vi/" + d + "/hqdefault.jpg"),
            a.getScript("https://jwpsrv.com/library/gfuk0H+7EeSiSg6sC0aurw.js").done(function() {
                jwplayer("player" + b).setup({
                    primary: "html5",
                    width: "100%",
                    aspectratio: "16:9",
                    logo: {
                        file: video_logo,
                        link: video_logo_link,
                        position: "top-left"
                    },
                    playlist: [{
                        file: "http://www.youtube.com/watch?v=" + d,
                        title: d,
                        image: e,
                        format: c
                    }]
                }),
                "undefined" != typeof window.analytics && "undefined" != typeof window.analytics.track && analytics.track({
                    event: {
                        eventType: "video_tracking"
                    },
                    video: {
                        divID: "player"
                    }
                })
            })) : "akamai" == c ? (f.html('<div id="player' + b + '"></div>'),
            a.getScript("https://jwpsrv.com/library/gfuk0H+7EeSiSg6sC0aurw.js").done(function() {
                var a = "/manifest.f4m";
                d.indexOf("_,") > 0 && (a = ".csmil/manifest.f4m"),
                jwplayer("player" + b).setup({
                    playlist: [{
                        file: "http://informatica-vh.akamaihd.net/z/delivery/" + d + a,
                        image: e,
                        provider: "http://players.edgesuite.net/flash/plugins/jw/v3.6/AkamaiAdvancedJWStreamProvider.swf",
                        type: "mp4",
                        title: d,
                        format: c
                    }],
                    logo: {
                        file: video_logo,
                        link: video_logo_link,
                        position: "top-left"
                    },
                    primary: "flash",
                    width: "100%",
                    aspectratio: "16:9"
                }),
                "undefined" != typeof window.analytics && "undefined" != typeof window.analytics.track && analytics.track({
                    event: {
                        eventType: "video_tracking"
                    },
                    video: {
                        divID: "player"
                    }
                })
            })) : (f.html('<div id="player' + b + '"></div>'),
            a.getScript("https://jwpsrv.com/library/gfuk0H+7EeSiSg6sC0aurw.js").done(function() {
                jwplayer("player" + b).setup({
                    playlist: [{
                        file: d,
                        image: e,
                        provider: "http://players.edgesuite.net/flash/plugins/jw/v3.6/AkamaiAdvancedJWStreamProvider.swf",
                        type: "mp4",
                        title: d,
                        format: c
                    }],
                    logo: {
                        file: video_logo,
                        link: video_logo_link,
                        position: "top-left"
                    },
                    primary: "flash",
                    width: "100%",
                    aspectratio: "16:9"
                }),
                "undefined" != typeof window.analytics && "undefined" != typeof window.analytics.track && analytics.track({
                    event: {
                        eventType: "video_tracking"
                    },
                    video: {
                        divID: "player"
                    }
                })
            }))
        })
    }
}(jQuery),
$(document).ready(function() {
    $("[data-modal-type='gated-video']").containerVideo()
});

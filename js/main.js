! function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: !1
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = !0, module.exports
    }
    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "/wp-content/themes/paypr/assets/compiled/", __webpack_require__(0)
}([function(module, exports, __webpack_require__) {
    "use strict";
    __webpack_require__(28), __webpack_require__(27).polyfill(), __webpack_require__(18), __webpack_require__(21), __webpack_require__(15), __webpack_require__(13), __webpack_require__(4), __webpack_require__(24), __webpack_require__(25), __webpack_require__(23), __webpack_require__(22), __webpack_require__(20), __webpack_require__(26), __webpack_require__(12), __webpack_require__(6), __webpack_require__(5), __webpack_require__(17), __webpack_require__(14), __webpack_require__(10), __webpack_require__(9)
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
    ! function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        function s(a) {
            var b = !!a && "length" in a && a.length,
                c = n.type(a);
            return "function" !== c && !n.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }

        function z(a, b, c) {
            if (n.isFunction(b)) return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return n.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (y.test(b)) return n.filter(b, a, c);
                b = n.filter(b, a)
            }
            return n.grep(a, function(a) {
                return h.call(b, a) > -1 !== c
            })
        }

        function F(a, b) {
            for (;
                (a = a[b]) && 1 !== a.nodeType;);
            return a
        }

        function H(a) {
            var b = {};
            return n.each(a.match(G) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function J() {
            d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
        }

        function M() {
            this.expando = n.expando + M.uid++
        }

        function R(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c)
                    } catch (e) {}
                    O.set(a, b, c)
                } else c = void 0;
            return c
        }

        function W(a, b, c, d) {
            var e, f = 1,
                g = 20,
                h = d ? function() {
                    return d.cur()
                } : function() {
                    return n.css(a, b, "")
                },
                i = h(),
                j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
                k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
            if (k && k[3] !== j) {
                j = j || k[3], c = c || [], k = +i || 1;
                do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
            }
            return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
        }

        function _(a, b) {
            var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
        }

        function aa(a, b) {
            for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
        }

        function ca(a, b, c, d, e) {
            for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
                if (f = a[o], f || 0 === f)
                    if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                    else if (ba.test(f)) {
                for (g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
                n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
            } else m.push(b.createTextNode(f));
            for (l.textContent = "", o = 0; f = m[o++];)
                if (d && n.inArray(f, d) > -1) e && e.push(f);
                else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c)
                for (k = 0; f = g[k++];) Z.test(f.type || "") && c.push(f);
            return l
        }

        function ga() {
            return !0
        }

        function ha() {
            return !1
        }

        function ia() {
            try {
                return d.activeElement
            } catch (a) {}
        }

        function ja(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) {
                "string" != typeof c && (d = d || c, c = void 0);
                for (h in b) ja(a, h, c, d, b[h], f);
                return a
            }
            if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
            else if (!e) return a;
            return 1 === f && (g = e, e = function(a) {
                return n().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
                n.event.add(this, b, e, d, c)
            })
        }

        function pa(a, b) {
            return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function qa(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function ra(a) {
            var b = na.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function sa(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
                }
                O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
            }
        }

        function ta(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }

        function ua(a, b, c, d) {
            b = f.apply([], b);
            var e, g, h, i, j, k, m = 0,
                o = a.length,
                p = o - 1,
                q = b[0],
                r = n.isFunction(q);
            if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
            });
            if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
                for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
                if (i)
                    for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
            }
            return a
        }

        function va(a, b, c) {
            for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
            return a
        }

        function ya(a, b) {
            var c = n(b.createElement(a)).appendTo(b.body),
                d = n.css(c[0], "display");
            return c.detach(), d
        }

        function za(a) {
            var b = d,
                c = xa[a];
            return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
        }

        function Fa(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
        }

        function Ga(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function Ma(a) {
            if (a in La) return a;
            for (var b = a[0].toUpperCase() + a.slice(1), c = Ka.length; c--;)
                if (a = Ka[c] + b, a in La) return a
        }

        function Na(a, b, c) {
            var d = T.exec(b);
            return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
        }

        function Oa(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
            return g
        }

        function Pa(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ca(a),
                g = "border-box" === n.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
                d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function Qa(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function Ra(a, b, c, d, e) {
            return new Ra.prototype.init(a, b, c, d, e)
        }

        function Wa() {
            return a.setTimeout(function() {
                Sa = void 0
            }), Sa = n.now()
        }

        function Xa(a, b) {
            var c, d = 0,
                e = {
                    height: a
                };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e
        }

        function Ya(a, b, c) {
            for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function Za(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = {},
                o = a.style,
                p = a.nodeType && V(a),
                q = N.get(a, "fxshow");
            c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, l.always(function() {
                l.always(function() {
                    h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], Ua.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                        if ("show" !== e || !q || void 0 === q[d]) continue;
                        p = !0
                    }
                    m[d] = q && q[d] || n.style(a, d)
                } else j = void 0;
            if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
            else {
                q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                    n(a).hide()
                }), l.done(function() {
                    var b;
                    N.remove(a, "fxshow");
                    for (b in m) n.style(a, b, m[b])
                });
                for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function $a(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function _a(a, b, c) {
            var d, e, f = 0,
                g = _a.prefilters.length,
                h = n.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: n.extend({}, b),
                    opts: n.extend(!0, {
                        specialEasing: {},
                        easing: n.easing._default
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: Sa || Wa(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for ($a(k, j.opts.specialEasing); g > f; f++)
                if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
            return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function fb(a) {
            return a.getAttribute && a.getAttribute("class") || ""
        }

        function wb(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(G) || [];
                if (n.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function xb(a, b, c, d) {
            function g(h) {
                var i;
                return e[h] = !0, n.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
                }), i
            }
            var e = {},
                f = a === tb;
            return g(b.dataTypes[0]) || !e["*"] && g("*")
        }

        function yb(a, b) {
            var c, d, e = n.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && n.extend(!0, a, d), a
        }

        function zb(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function Ab(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }

        function Gb(a, b, c, d) {
            var e;
            if (n.isArray(b)) n.each(b, function(b, e) {
                c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== n.type(b)) d(a, b);
            else
                for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
        }

        function Mb(a) {
            return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var c = [],
            d = a.document,
            e = c.slice,
            f = c.concat,
            g = c.push,
            h = c.indexOf,
            i = {},
            j = i.toString,
            k = i.hasOwnProperty,
            l = {},
            m = "2.2.4",
            n = function(a, b) {
                return new n.fn.init(a, b)
            },
            o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            p = /^-ms-/,
            q = /-([\da-z])/gi,
            r = function(a, b) {
                return b.toUpperCase()
            };
        n.fn = n.prototype = {
            jquery: m,
            constructor: n,
            selector: "",
            length: 0,
            toArray: function() {
                return e.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
            },
            pushStack: function(a) {
                var b = n.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a) {
                return n.each(this, a)
            },
            map: function(a) {
                return this.pushStack(n.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(e.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: g,
            sort: c.sort,
            splice: c.splice
        }, n.extend = n.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }, n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === n.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                var b = a && a.toString();
                return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
            },
            isPlainObject: function(a) {
                var b;
                if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (b in a);
                return void 0 === b || k.call(a, b)
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
            },
            globalEval: function(a) {
                var b, c = eval;
                a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
            },
            camelCase: function(a) {
                return a.replace(p, "ms-").replace(q, r)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b) {
                var c, d = 0;
                if (s(a))
                    for (c = a.length; c > d && b.call(a[d], d, a[d]) !== !1; d++);
                else
                    for (d in a)
                        if (b.call(a[d], d, a[d]) === !1) break; return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(o, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : h.call(b, a, c)
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, c) {
                var d, e, g = 0,
                    h = [];
                if (s(a))
                    for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
                else
                    for (g in a) e = b(a[g], g, c), null != e && h.push(e);
                return f.apply([], h)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, f;
                return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                    return a.apply(b || this, d.concat(e.call(arguments)))
                }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
            },
            now: Date.now,
            support: l
        }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
            i["[object " + b + "]"] = b.toLowerCase()
        });
        var t = function(a) {
            function fa(a, b, d, e) {
                var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                    x = b ? b.nodeType : 9;
                if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
                if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                    if (11 !== x && (o = $.exec(a)))
                        if (f = o[1]) {
                            if (9 === x) {
                                if (!(j = b.getElementById(f))) return d;
                                if (j.id === f) return d.push(j), d
                            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                        } else {
                            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                        }
                    if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                        if (1 !== x) w = b, s = a;
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            for ((k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']"; h--;) r[h] = l + " " + qa(r[h]);
                            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                        }
                        if (s) try {
                            return H.apply(d, w.querySelectorAll(s)), d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                    }
                }
                return i(a.replace(Q, "$1"), b, d, e)
            }

            function ga() {
                function b(c, e) {
                    return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
                }
                var a = [];
                return b
            }

            function ha(a) {
                return a[u] = !0, a
            }

            function ia(a) {
                var b = n.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function ja(a, b) {
                for (var c = a.split("|"), e = c.length; e--;) d.attrHandle[c[e]] = b
            }

            function ka(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function la(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function ma(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function na(a) {
                return ha(function(b) {
                    return b = +b, ha(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function oa(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function pa() {}

            function qa(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function ra(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = x++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j, k = [w, f];
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                                if (i[d] = k, k[2] = a(b, c, g)) return !0
                            }
                }
            }

            function sa(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function ta(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
                return c
            }

            function ua(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g
            }

            function va(a, b, c, d, e, f) {
                return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || !f && b ? p : ua(p, m, a, h, i),
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i), d)
                        for (j = ua(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    if (f) {
                        if (e || a) {
                            if (e) {
                                for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            for (k = r.length; k--;)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                })
            }

            function wa(a) {
                for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                        return a === b
                    }, h, !0), l = ra(function(a) {
                        return J(b, a) > -1
                    }, h, !0), m = [function(a, c, d) {
                        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        return b = null, e
                    }]; f > i; i++)
                    if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                    else {
                        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                            for (e = ++i; f > e && !d.relative[a[e].type]; e++);
                            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                        }
                        m.push(c)
                    }
                return sa(m)
            }

            function xa(a, b) {
                var c = b.length > 0,
                    e = a.length > 0,
                    f = function(f, g, h, i, k) {
                        var l, o, q, r = 0,
                            s = "0",
                            t = f && [],
                            u = [],
                            v = j,
                            x = f || e && d.find.TAG("*", k),
                            y = w += null == v ? 1 : Math.random() || .1,
                            z = x.length;
                        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                            if (e && l) {
                                for (o = 0, g || l.ownerDocument === n || (m(l), h = !p); q = a[o++];)
                                    if (q(l, g || n, h)) {
                                        i.push(l);
                                        break
                                    }
                                k && (w = y)
                            }
                            c && ((l = !q && l) && r--, f && t.push(l))
                        }
                        if (r += s, c && s !== r) {
                            for (o = 0; q = b[o++];) q(t, u, g, h);
                            if (f) {
                                if (r > 0)
                                    for (; s--;) t[s] || u[s] || (u[s] = F.call(i));
                                u = ua(u)
                            }
                            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                        }
                        return k && (w = y, j = v), t
                    };
                return c ? ha(f) : f
            }
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
                v = a.document,
                w = 0,
                x = 0,
                y = ga(),
                z = ga(),
                A = ga(),
                B = function(a, b) {
                    return a === b && (l = !0), 0
                },
                C = 1 << 31,
                D = {}.hasOwnProperty,
                E = [],
                F = E.pop,
                G = E.push,
                H = E.push,
                I = E.slice,
                J = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                L = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
                O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
                P = new RegExp(L + "+", "g"),
                Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                R = new RegExp("^" + L + "*," + L + "*"),
                S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                U = new RegExp(O),
                V = new RegExp("^" + M + "$"),
                W = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + N),
                    PSEUDO: new RegExp("^" + O),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                },
                X = /^(?:input|select|textarea|button)$/i,
                Y = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                _ = /[+~]/,
                aa = /'|\\/g,
                ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                ca = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                da = function() {
                    m()
                };
            try {
                H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
            } catch (ea) {
                H = {
                    apply: E.length ? function(a, b) {
                        G.apply(a, I.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            c = fa.support = {}, f = fa.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }, m = fa.setDocument = function(a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = ia(function(a) {
                    return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                    return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
                }), c.getById ? (d.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete d.find.ID, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), ia(function(a) {
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, B = b ? function(a, b) {
                    if (a === b) return l = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return l = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        g = [a],
                        h = [b];
                    if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                    if (e === f) return ka(a, b);
                    for (c = a; c = c.parentNode;) g.unshift(c);
                    for (c = b; c = c.parentNode;) h.unshift(c);
                    for (; g[d] === h[d];) d++;
                    return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                }, n) : n
            }, fa.matches = function(a, b) {
                return fa(a, null, null, b)
            }, fa.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return fa(b, n, null, [a]).length > 0
            }, fa.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b)
            }, fa.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }, fa.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, fa.uniqueSort = function(a) {
                var b, d = [],
                    e = 0,
                    f = 0;
                if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                    for (; b = a[f++];) b === a[f] && (e = d.push(f));
                    for (; e--;) a.splice(d[e], 1)
                }
                return k = null, a
            }, e = fa.getText = function(a) {
                var b, c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                    } else if (3 === f || 4 === f) return a.nodeValue
                } else
                    for (; b = a[d++];) c += e(b);
                return c
            }, d = fa.selectors = {
                cacheLength: 50,
                createPseudo: ha,
                match: W,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(ba, ca).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = fa.attr(d, a);
                            return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (m = b; m = m[p];)
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [w, n, t];
                                            break
                                        }
                                } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                    for (;
                                        (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m !== b)););
                                return t -= e, t === d || t % d === 0 && t / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                            for (var d, f = e(a, b), g = f.length; g--;) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }) : function(a) {
                            return e(a, 0, c)
                        }) : e
                    }
                },
                pseudos: {
                    not: ha(function(a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(Q, "$1"));
                        return d[u] ? ha(function(a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: ha(function(a) {
                        return function(b) {
                            return fa(a, b).length > 0
                        }
                    }),
                    contains: ha(function(a) {
                        return a = a.replace(ba, ca),
                            function(b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                            }
                    }),
                    lang: ha(function(a) {
                        return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === o
                    },
                    focus: function(a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function(a) {
                        return Y.test(a.nodeName)
                    },
                    input: function(a) {
                        return X.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: na(function() {
                        return [0]
                    }),
                    last: na(function(a, b) {
                        return [b - 1]
                    }),
                    eq: na(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: na(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: na(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: na(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a;
                    }),
                    gt: na(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, d.pseudos.nth = d.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) d.pseudos[b] = la(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) d.pseudos[b] = ma(b);
            return pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                for (h = a, i = [], j = d.preFilter; h;) {
                    c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(Q, " ")
                    }), h = h.slice(c.length));
                    for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                    if (!c) break
                }
                return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
            }, h = fa.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    for (b || (b = g(a)), c = b.length; c--;) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                    f = A(a, xa(e, d)), f.selector = a
                }
                return f
            }, i = fa.select = function(a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a,
                    o = !f && g(a = n.selector || a);
                if (e = e || [], 1 === o.length) {
                    if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                        n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                    }
                    for (i = W.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]);)
                        if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                            break
                        }
                }
                return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
            }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"))
            }), ia(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || ja("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), c.attributes && ia(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || ja("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), ia(function(a) {
                return null == a.getAttribute("disabled")
            }) || ja(K, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), fa
        }(a);
        n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
        var u = function(a, b, c) {
                for (var d = [], e = void 0 !== c;
                    (a = a[b]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) {
                        if (e && n(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            v = function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            },
            w = n.expr.match.needsContext,
            x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            y = /^.[^:#\[\.,]*$/;
        n.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, n.fn.extend({
            find: function(a) {
                var b, c = this.length,
                    d = [],
                    e = this;
                if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this)) return !0
                }));
                for (b = 0; c > b; b++) n.find(a, e[b], d);
                return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
            },
            filter: function(a) {
                return this.pushStack(z(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(z(this, a || [], !0))
            },
            is: function(a) {
                return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
            }
        });
        var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            C = n.fn.init = function(a, b, c) {
                var e, f;
                if (!a) return this;
                if (c = c || A, "string" == typeof a) {
                    if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    if (e[1]) {
                        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                            for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                        return this
                    }
                    return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
            };
        C.prototype = n.fn, A = n(d);
        var D = /^(?:parents|prev(?:Until|All))/,
            E = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        n.fn.extend({
            has: function(a) {
                var b = n(a, this),
                    c = b.length;
                return this.filter(function() {
                    for (var a = 0; c > a; a++)
                        if (n.contains(this, b[a])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), n.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return u(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return u(a, "parentNode", c)
            },
            next: function(a) {
                return F(a, "nextSibling")
            },
            prev: function(a) {
                return F(a, "previousSibling")
            },
            nextAll: function(a) {
                return u(a, "nextSibling")
            },
            prevAll: function(a) {
                return u(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return u(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return u(a, "previousSibling", c)
            },
            siblings: function(a) {
                return v((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return v(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || n.merge([], a.childNodes)
            }
        }, function(a, b) {
            n.fn[a] = function(c, d) {
                var e = n.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
            }
        });
        var G = /\S+/g;
        n.Callbacks = function(a) {
            a = "string" == typeof a ? H(a) : n.extend({}, a);
            var b, c, d, e, f = [],
                g = [],
                h = -1,
                i = function() {
                    for (e = a.once, d = b = !0; g.length; h = -1)
                        for (c = g.shift(); ++h < f.length;) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
                    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
                },
                j = {
                    add: function() {
                        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                            n.each(b, function(b, c) {
                                n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                            })
                        }(arguments), c && !b && i()), this
                    },
                    remove: function() {
                        return n.each(arguments, function(a, b) {
                            for (var c;
                                (c = n.inArray(b, f, c)) > -1;) f.splice(c, 1), h >= c && h--
                        }), this
                    },
                    has: function(a) {
                        return a ? n.inArray(a, f) > -1 : f.length > 0
                    },
                    empty: function() {
                        return f && (f = []), this
                    },
                    disable: function() {
                        return e = g = [], f = c = "", this
                    },
                    disabled: function() {
                        return !f
                    },
                    lock: function() {
                        return e = g = [], c || (f = c = ""), this
                    },
                    locked: function() {
                        return !!e
                    },
                    fireWith: function(a, c) {
                        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                    },
                    fire: function() {
                        return j.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return j
        }, n.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", n.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return n.Deferred(function(c) {
                                n.each(b, function(b, f) {
                                    var g = n.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? n.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, n.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var i, j, k, b = 0,
                    c = e.call(arguments),
                    d = c.length,
                    f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                    g = 1 === f ? a : n.Deferred(),
                    h = function(a, b, c) {
                        return function(d) {
                            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                        }
                    };
                if (d > 1)
                    for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
                return f || g.resolveWith(k, c), g.promise()
            }
        });
        var I;
        n.fn.ready = function(a) {
            return n.ready.promise().done(a), this
        }, n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? n.readyWait++ : n.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
            }
        }), n.ready.promise = function(b) {
            return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
        }, n.ready.promise();
        var K = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === n.type(c)) {
                    e = !0;
                    for (h in c) K(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(n(a), c)
                    })), b))
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            L = function(a) {
                return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
            };
        M.uid = 1, M.prototype = {
            register: function(a, b) {
                var c = b || {};
                return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                    value: c,
                    writable: !0,
                    configurable: !0
                }), a[this.expando]
            },
            cache: function(a) {
                if (!L(a)) return {};
                var b = a[this.expando];
                return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0
                }))), b
            },
            set: function(a, b, c) {
                var d, e = this.cache(a);
                if ("string" == typeof b) e[b] = c;
                else
                    for (d in b) e[d] = b[d];
                return e
            },
            get: function(a, b) {
                return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
            },
            access: function(a, b, c) {
                var d;
                return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
            },
            remove: function(a, b) {
                var c, d, e, f = a[this.expando];
                if (void 0 !== f) {
                    if (void 0 === b) this.register(a);
                    else {
                        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                        for (; c--;) delete f[d[c]]
                    }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
                }
            },
            hasData: function(a) {
                var b = a[this.expando];
                return void 0 !== b && !n.isEmptyObject(b)
            }
        };
        var N = new M,
            O = new M,
            P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Q = /[A-Z]/g;
        n.extend({
            hasData: function(a) {
                return O.hasData(a) || N.hasData(a)
            },
            data: function(a, b, c) {
                return O.access(a, b, c)
            },
            removeData: function(a, b) {
                O.remove(a, b)
            },
            _data: function(a, b, c) {
                return N.access(a, b, c)
            },
            _removeData: function(a, b) {
                N.remove(a, b)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                        N.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    O.set(this, a)
                }) : K(this, function(b) {
                    var c, d;
                    if (f && void 0 === b) {
                        if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                        if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                        if (c = R(f, d, void 0), void 0 !== c) return c
                    } else d = n.camelCase(a), this.each(function() {
                        var c = O.get(this, d);
                        O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                    })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    O.remove(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return N.get(a, c) || N.access(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        N.remove(a, [b + "queue", c])
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
            U = ["Top", "Right", "Bottom", "Left"],
            V = function(a, b) {
                return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
            },
            X = /^(?:checkbox|radio)$/i,
            Y = /<([\w:-]+)/,
            Z = /^$|\/(?:java|ecma)script/i,
            $ = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;
        var ba = /<|&#?\w+;/;
        ! function() {
            var a = d.createDocumentFragment(),
                b = a.appendChild(d.createElement("div")),
                c = d.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var da = /^key/,
            ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            fa = /^([^.]*)(?:\.(.+)|)/;
        n.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
                if (r)
                    for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                            return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                        }), b = (b || "").match(G) || [""], j = b.length; j--;) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
                if (r && (i = r.events)) {
                    for (b = (b || "").match(G) || [""], j = b.length; j--;)
                        if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                            for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                        } else
                            for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                    n.isEmptyObject(i) && N.remove(a, "handle events")
                }
            },
            dispatch: function(a) {
                a = n.event.fix(a);
                var b, c, d, f, g, h = [],
                    i = e.call(arguments),
                    j = (N.get(this, "events") || {})[a.type] || [],
                    k = n.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    for (h = n.event.handlers.call(this, a, j), b = 0;
                        (f = h[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = f.elem, c = 0;
                            (g = f.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                    for (; i !== this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, e, f, g = b.button;
                    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[n.expando]) return a;
                var b, c, e, f = a.type,
                    g = a,
                    h = this.fixHooks[f];
                for (h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length; b--;) c = e[b], a[c] = g[c];
                return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === ia() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return n.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            }
        }, n.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        }, n.Event = function(a, b) {
            return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
        }, n.Event.prototype = {
            constructor: n.Event,
            isDefaultPrevented: ha,
            isPropagationStopped: ha,
            isImmediatePropagationStopped: ha,
            isSimulated: !1,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, n.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            n.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), n.fn.extend({
            on: function(a, b, c, d) {
                return ja(this, a, b, c, d)
            },
            one: function(a, b, c, d) {
                return ja(this, a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                    n.event.remove(this, a, c, b)
                })
            }
        });
        var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            la = /<script|<style|<link/i,
            ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
            na = /^true\/(.*)/,
            oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        n.extend({
            htmlPrefilter: function(a) {
                return a.replace(ka, "<$1></$2>")
            },
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = n.contains(a.ownerDocument, a);
                if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                    for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                    else sa(a, h);
                return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
            },
            cleanData: function(a) {
                for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                    if (L(c)) {
                        if (b = c[N.expando]) {
                            if (b.events)
                                for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                            c[N.expando] = void 0
                        }
                        c[O.expando] && (c[O.expando] = void 0)
                    }
            }
        }), n.fn.extend({
            domManip: ua,
            detach: function(a) {
                return va(this, a, !0)
            },
            remove: function(a) {
                return va(this, a)
            },
            text: function(a) {
                return K(this, function(a) {
                    return void 0 === a ? n.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function() {
                return ua(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = pa(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return ua(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = pa(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return ua(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return ua(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null != a && a, b = null == b ? a : b, this.map(function() {
                    return n.clone(this, a, b)
                })
            },
            html: function(a) {
                return K(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = n.htmlPrefilter(a);
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = [];
                return ua(this, arguments, function(b) {
                    var c = this.parentNode;
                    n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
                }, a)
            }
        }), n.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            n.fn[a] = function(a) {
                for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var wa, xa = {
                HTML: "block",
                BODY: "block"
            },
            Aa = /^margin/,
            Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
            Ca = function(b) {
                var c = b.ownerDocument.defaultView;
                return c && c.opener || (c = a), c.getComputedStyle(b)
            },
            Da = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            },
            Ea = d.documentElement;
        ! function() {
            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
            }
            var b, c, e, f, g = d.createElement("div"),
                h = d.createElement("div");
            h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), n.extend(l, {
                pixelPosition: function() {
                    return i(), b
                },
                boxSizingReliable: function() {
                    return null == c && i(), c
                },
                pixelMarginRight: function() {
                    return null == c && i(), e
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                }
            }))
        }();
        var Ha = /^(none|table(?!-c[ea]).+)/,
            Ia = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ja = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ka = ["Webkit", "O", "Moz", "ms"],
            La = d.createElement("div").style;
        n.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = Fa(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = n.camelCase(b),
                        i = a.style;
                    return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), void(null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = n.camelCase(b);
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
            }
        }), n.each(["height", "width"], function(a, b) {
            n.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                        return Pa(a, b, d)
                    }) : Pa(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e, f = d && Ca(a),
                        g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                    return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
                }
            }
        }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
            return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            })) + "px" : void 0
        }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
            return b ? Da(a, {
                display: "inline-block"
            }, Fa, [a, "marginRight"]) : void 0
        }), n.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            n.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
        }), n.fn.extend({
            css: function(a, b) {
                return K(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (n.isArray(b)) {
                        for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return Qa(this, !0)
            },
            hide: function() {
                return Qa(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    V(this) ? n(this).show() : n(this).hide()
                })
            }
        }), n.Tween = Ra, Ra.prototype = {
            constructor: Ra,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = Ra.propHooks[this.prop];
                return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = Ra.propHooks[this.prop];
                return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
            }
        }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                },
                set: function(a) {
                    n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, n.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            _default: "swing"
        }, n.fx = Ra.prototype.init, n.fx.step = {};
        var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
            Va = /queueHooks$/;
        n.Animation = n.extend(_a, {
                tweeners: {
                    "*": [function(a, b) {
                        var c = this.createTween(a, b);
                        return W(c.elem, a, T.exec(b), c), c
                    }]
                },
                tweener: function(a, b) {
                    n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
                },
                prefilters: [Za],
                prefilter: function(a, b) {
                    b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
                }
            }), n.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? n.extend({}, a) : {
                    complete: c || !c && b || n.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !n.isFunction(b) && b
                };
                return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
                }, d
            }, n.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(V).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = n.isEmptyObject(a),
                        f = n.speed(b, c, d),
                        g = function() {
                            var b = _a(this, n.extend({}, a), f);
                            (e || N.get(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = n.timers,
                            g = N.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        !b && c || n.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = N.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = n.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), n.each(["toggle", "show", "hide"], function(a, b) {
                var c = n.fn[b];
                n.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
                }
            }), n.each({
                slideDown: Xa("show"),
                slideUp: Xa("hide"),
                slideToggle: Xa("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                n.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), n.timers = [], n.fx.tick = function() {
                var a, b = 0,
                    c = n.timers;
                for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                c.length || n.fx.stop(), Sa = void 0
            }, n.fx.timer = function(a) {
                n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
            }, n.fx.interval = 13, n.fx.start = function() {
                Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
            }, n.fx.stop = function() {
                a.clearInterval(Ta), Ta = null
            }, n.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, n.fn.delay = function(b, c) {
                return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function() {
                        a.clearTimeout(e)
                    }
                })
            },
            function() {
                var a = d.createElement("input"),
                    b = d.createElement("select"),
                    c = b.appendChild(d.createElement("option"));
                a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
            }();
        var ab, bb = n.expr.attrHandle;
        n.fn.extend({
            attr: function(a, b) {
                return K(this, n.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    n.removeAttr(this, a)
                })
            }
        }), n.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(G);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
            }
        }), ab = {
            set: function(a, b, c) {
                return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = bb[b] || n.find.attr;
            bb[b] = function(a, b, d) {
                var e, f;
                return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
            }
        });
        var cb = /^(?:input|select|textarea|button)$/i,
            db = /^(?:a|area)$/i;
        n.fn.extend({
            prop: function(a, b) {
                return K(this, n.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[n.propFix[a] || a]
                })
            }
        }), n.extend({
            prop: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = n.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), l.optSelected || (n.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            },
            set: function(a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
            }
        }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            n.propFix[this.toLowerCase()] = this
        });
        var eb = /[\t\r\n\f]/g;
        n.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).addClass(a.call(this, b, fb(this)))
                });
                if ("string" == typeof a && a)
                    for (b = a.match(G) || []; c = this[i++];)
                        if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                            for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            h = n.trim(d), e !== h && c.setAttribute("class", h)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (n.isFunction(a)) return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, fb(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof a && a)
                    for (b = a.match(G) || []; c = this[i++];)
                        if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                            for (g = 0; f = b[g++];)
                                for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                            h = n.trim(d), e !== h && c.setAttribute("class", h)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                    n(this).toggleClass(a.call(this, c, fb(this), b), b)
                }) : this.each(function() {
                    var b, d, e, f;
                    if ("string" === c)
                        for (d = 0, e = n(this), f = a.match(G) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
                })
            },
            hasClass: function(a) {
                var b, c, d = 0;
                for (b = " " + a + " "; c = this[d++];)
                    if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
                return !1
            }
        });
        var gb = /\r/g,
            hb = /[\x20\t\r\n\f]+/g;
        n.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)) : void 0
            }
        }), n.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = n.find.attr(a, "value");
                        return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                                if (b = n(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), n.each(["radio", "checkbox"], function() {
            n.valHooks[this] = {
                set: function(a, b) {
                    return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
                }
            }, l.checkOn || (n.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var ib = /^(?:focusinfocus|focusoutblur)$/;
        n.extend(n.event, {
            trigger: function(b, c, e, f) {
                var g, h, i, j, l, m, o, p = [e || d],
                    q = k.call(b, "type") ? b.type : b,
                    r = k.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                    if (!f && !o.noBubble && !n.isWindow(e)) {
                        for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                        i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                    }
                    for (g = 0;
                        (h = p[g++]) && !b.isPropagationStopped();) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                    return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
                }
            },
            simulate: function(a, b, c) {
                var d = n.extend(new n.Event, c, {
                    type: a,
                    isSimulated: !0
                });
                n.event.trigger(d, null, b)
            }
        }), n.fn.extend({
            trigger: function(a, b) {
                return this.each(function() {
                    n.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0
            }
        }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            n.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), n.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), l.focusin = "onfocusin" in a, l.focusin || n.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                n.event.simulate(b, a.target, n.event.fix(a))
            };
            n.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = N.access(d, b);
                    e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = N.access(d, b) - 1;
                    e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
                }
            }
        });
        var jb = a.location,
            kb = n.now(),
            lb = /\?/;
        n.parseJSON = function(a) {
            return JSON.parse(a + "")
        }, n.parseXML = function(b) {
            var c;
            if (!b || "string" != typeof b) return null;
            try {
                c = (new a.DOMParser).parseFromString(b, "text/xml")
            } catch (d) {
                c = void 0
            }
            return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
        };
        var mb = /#.*$/,
            nb = /([?&])_=[^&]*/,
            ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            qb = /^(?:GET|HEAD)$/,
            rb = /^\/\//,
            sb = {},
            tb = {},
            ub = "*/".concat("*"),
            vb = d.createElement("a");
        vb.href = jb.href, n.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: jb.href,
                type: "GET",
                isLocal: pb.test(jb.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ub,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": n.parseJSON,
                    "text xml": n.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
            },
            ajaxPrefilter: wb(sb),
            ajaxTransport: wb(tb),
            ajax: function(b, c) {
                function z(b, c, d, h) {
                    var j, l, t, u, w, y = c;
                    2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
                }
                "object" == typeof b && (c = b, b = void 0), c = c || {};
                var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                    o = m.context || m,
                    p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                    q = n.Deferred(),
                    r = n.Callbacks("once memory"),
                    s = m.statusCode || {},
                    t = {},
                    u = {},
                    v = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === v) {
                                if (!h)
                                    for (h = {}; b = ob.exec(g);) h[b[1].toLowerCase()] = b[2];
                                b = h[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === v ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return v || (a = u[c] = u[c] || a, t[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return v || (m.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > v)
                                    for (b in a) s[b] = [s[b], a[b]];
                                else x.always(a[x.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || w;
                            return e && e.abort(b), z(0, b), this
                        }
                    };
                if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                    j = d.createElement("a");
                    try {
                        j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                    } catch (y) {
                        m.crossDomain = !0
                    }
                }
                if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
                k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
                for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
                if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
                w = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[l](m[l]);
                if (e = xb(tb, m, c, x)) {
                    if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                    m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                        x.abort("timeout")
                    }, m.timeout));
                    try {
                        v = 1, e.send(t, z)
                    } catch (y) {
                        if (!(2 > v)) throw y;
                        z(-1, y)
                    }
                } else z(-1, "No Transport");
                return x
            },
            getJSON: function(a, b, c) {
                return n.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return n.get(a, void 0, b, "script")
            }
        }), n.each(["get", "post"], function(a, b) {
            n[b] = function(a, c, d, e) {
                return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                }, n.isPlainObject(a) && a))
            }
        }), n._evalUrl = function(a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, n.fn.extend({
            wrapAll: function(a) {
                var b;
                return n.isFunction(a) ? this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this)
            },
            wrapInner: function(a) {
                return n.isFunction(a) ? this.each(function(b) {
                    n(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = n(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = n.isFunction(a);
                return this.each(function(c) {
                    n(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                }).end()
            }
        }), n.expr.filters.hidden = function(a) {
            return !n.expr.filters.visible(a)
        }, n.expr.filters.visible = function(a) {
            return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
        };
        var Bb = /%20/g,
            Cb = /\[\]$/,
            Db = /\r?\n/g,
            Eb = /^(?:submit|button|image|reset|file)$/i,
            Fb = /^(?:input|select|textarea|keygen)/i;
        n.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) Gb(c, a[c], b, e);
            return d.join("&").replace(Bb, "+")
        }, n.fn.extend({
            serialize: function() {
                return n.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = n.prop(this, "elements");
                    return a ? n.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
                }).map(function(a, b) {
                    var c = n(this).val();
                    return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Db, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Db, "\r\n")
                    }
                }).get()
            }
        }), n.ajaxSettings.xhr = function() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        };
        var Hb = {
                0: 200,
                1223: 204
            },
            Ib = n.ajaxSettings.xhr();
        l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
            var c, d;
            return l.cors || Ib && !b.crossDomain ? {
                send: function(e, f) {
                    var g, h = b.xhr();
                    if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (g in b.xhrFields) h[g] = b.xhrFields[g];
                    b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    for (g in e) h.setRequestHeader(g, e[g]);
                    c = function(a) {
                        return function() {
                            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                                binary: h.response
                            } : {
                                text: h.responseText
                            }, h.getAllResponseHeaders()))
                        }
                    }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                        4 === h.readyState && a.setTimeout(function() {
                            c && d()
                        })
                    }, c = c("abort");
                    try {
                        h.send(b.hasContent && b.data || null)
                    } catch (i) {
                        if (c) throw i
                    }
                },
                abort: function() {
                    c && c()
                }
            } : void 0
        }), n.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(a) {
                    return n.globalEval(a), a
                }
            }
        }), n.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), n.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(e, f) {
                        b = n("<script>").prop({
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                        }), d.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var Jb = [],
            Kb = /(=)\?(?=&|$)|\?\?/;
        n.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Jb.pop() || n.expando + "_" + kb++;
                return this[a] = !0, a
            }
        }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || n.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), n.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || d;
            var e = x.exec(a),
                f = !c && [];
            return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
        };
        var Lb = n.fn.load;
        n.fn.load = function(a, b, c) {
            if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
            }).always(c && function(a, b) {
                g.each(function() {
                    c.apply(this, f || [a.responseText, b, a])
                })
            }), this
        }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            n.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), n.expr.filters.animated = function(a) {
            return n.grep(n.timers, function(b) {
                return a === b.elem
            }).length
        }, n.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = n.css(a, "position"),
                    l = n(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, n.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
                var b, c, d = this[0],
                    e = {
                        top: 0,
                        left: 0
                    },
                    f = d && d.ownerDocument;
                return f ? (b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e) : void 0
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - n.css(c, "marginTop", !0),
                        left: b.left - d.left - n.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent; a && "static" === n.css(a, "position");) a = a.offsetParent;
                    return a || Ea
                })
            }
        }), n.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = "pageYOffset" === b;
            n.fn[a] = function(d) {
                return K(this, function(a, d, e) {
                    var f = Mb(a);
                    return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
                }, a, d, arguments.length)
            }
        }), n.each(["top", "left"], function(a, b) {
            n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
                return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
            })
        }), n.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            n.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                n.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return K(this, function(b, c, d) {
                        var e;
                        return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), n.fn.extend({
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            },
            size: function() {
                return this.length
            }
        }), n.fn.andSelf = n.fn.addBack, __webpack_require__(7) && (__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return n
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
        var Nb = a.jQuery,
            Ob = a.$;
        return n.noConflict = function(b) {
            return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
        }, b || (a.jQuery = a.$ = n), n
    })
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(global) {
        /*!
         * VERSION: 1.18.5
         * DATE: 2016-05-24
         * UPDATES AND DOCS AT: http://greensock.com
         * 
         * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
         *
         * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         * 
         * @author: Jack Doyle, jack@greensock.com
         **/
        var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
        (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
                "use strict";
                _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                        var d = function(a) {
                                var b, c = [],
                                    d = a.length;
                                for (b = 0; b !== d; c.push(a[b++]));
                                return c
                            },
                            e = function(a, b, c) {
                                var d, e, f = a.cycle;
                                for (d in f) e = f[d], a[d] = "function" == typeof e ? e.call(b[c], c) : e[c % e.length];
                                delete a.cycle
                            },
                            f = function(a, b, d) {
                                c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = f.prototype.render
                            },
                            g = 1e-10,
                            h = c._internals,
                            i = h.isSelector,
                            j = h.isArray,
                            k = f.prototype = c.to({}, .1, {}),
                            l = [];
                        f.version = "1.18.5", k.constructor = f, k.kill()._gc = !1, f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf, f.getTweensOf = c.getTweensOf, f.lagSmoothing = c.lagSmoothing, f.ticker = c.ticker, f.render = c.render, k.invalidate = function() {
                            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this)
                        }, k.updateTo = function(a, b) {
                            var d, e = this.ratio,
                                f = this.vars.immediateRender || a.immediateRender;
                            b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                            for (d in a) this.vars[d] = a[d];
                            if (this._initted || f)
                                if (b) this._initted = !1, f && this.render(0, !0, !0);
                                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                                var g = this._totalTime;
                                this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1)
                            } else if (this._initted = !1, this._init(), this._time > 0 || f)
                                for (var h, i = 1 / (1 - e), j = this._firstPT; j;) h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next;
                            return this
                        }, k.render = function(a, b, c) {
                            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                            var d, e, f, i, j, k, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration,
                                o = this._time,
                                p = this._totalTime,
                                q = this._cycle,
                                r = this._duration,
                                s = this._rawPrevTime;
                            if (a >= n - 1e-7 ? (this._totalTime = n, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = r, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === r && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > s || 0 >= a && a >= -1e-7 || s === g && "isPause" !== this.data) && s !== a && (c = !0, s > g && (e = "onReverseComplete")), this._rawPrevTime = m = !b || a || s === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === r && s > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === r && (this._initted || !this.vars.lazy || c) && (s >= 0 && (c = !0), this._rawPrevTime = m = !b || a || s === a ? a : g)), this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (i = r + this._repeatDelay, this._cycle = this._totalTime / i >> 0, 0 !== this._cycle && this._cycle === this._totalTime / i && a >= p && this._cycle--, this._time = this._totalTime - this._cycle * i, this._yoyo && 0 !== (1 & this._cycle) && (this._time = r - this._time), this._time > r ? this._time = r : this._time < 0 && (this._time = 0)), this._easeType ? (j = this._time / r, k = this._easeType, l = this._easePower, (1 === k || 3 === k && j >= .5) && (j = 1 - j), 3 === k && (j *= 2), 1 === l ? j *= j : 2 === l ? j *= j * j : 3 === l ? j *= j * j * j : 4 === l && (j *= j * j * j * j), 1 === k ? this.ratio = 1 - j : 2 === k ? this.ratio = j : this._time / r < .5 ? this.ratio = j / 2 : this.ratio = 1 - j / 2) : this.ratio = this._ease.getRatio(this._time / r)), o === this._time && !c && q === this._cycle) return void(p !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = o, this._totalTime = p, this._rawPrevTime = s, this._cycle = q, h.lazyTweens.push(this), void(this._lazy = [a, b]);
                                this._time && !d ? this.ratio = this._ease.getRatio(this._time / r) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && a >= 0 && (this._active = !0), 0 === p && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === r) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                            this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._totalTime !== p || e) && this._callback("onUpdate")), this._cycle !== q && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === r && this._rawPrevTime === g && m !== g && (this._rawPrevTime = 0))
                        }, f.to = function(a, b, c) {
                            return new f(a, b, c)
                        }, f.from = function(a, b, c) {
                            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new f(a, b, c)
                        }, f.fromTo = function(a, b, c, d) {
                            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new f(a, b, d)
                        }, f.staggerTo = f.allTo = function(a, b, g, h, k, m, n) {
                            h = h || 0;
                            var o, p, q, r, s = 0,
                                t = [],
                                u = function() {
                                    g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l)
                                },
                                v = g.cycle,
                                w = g.startAt && g.startAt.cycle;
                            for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && (a = d(a), a.reverse(), h *= -1), o = a.length - 1, q = 0; o >= q; q++) {
                                p = {};
                                for (r in g) p[r] = g[r];
                                if (v && (e(p, a, q), null != p.duration && (b = p.duration, delete p.duration)), w) {
                                    w = p.startAt = {};
                                    for (r in g.startAt) w[r] = g.startAt[r];
                                    e(p.startAt, a, q)
                                }
                                p.delay = s + (p.delay || 0), q === o && k && (p.onComplete = u), t[q] = new f(a[q], b, p), s += h
                            }
                            return t
                        }, f.staggerFrom = f.allFrom = function(a, b, c, d, e, g, h) {
                            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, f.staggerTo(a, b, c, d, e, g, h)
                        }, f.staggerFromTo = f.allFromTo = function(a, b, c, d, e, g, h, i) {
                            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, f.staggerTo(a, b, d, e, g, h, i)
                        }, f.delayedCall = function(a, b, c, d, e) {
                            return new f(b, 0, {
                                delay: a,
                                onComplete: b,
                                onCompleteParams: c,
                                callbackScope: d,
                                onReverseComplete: b,
                                onReverseCompleteParams: c,
                                immediateRender: !1,
                                useFrames: e,
                                overwrite: 0
                            })
                        }, f.set = function(a, b) {
                            return new f(a, 0, b)
                        }, f.isTweening = function(a) {
                            return c.getTweensOf(a, !0).length > 0
                        };
                        var m = function(a, b) {
                                for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(m(f, b)), e = d.length), f = f._next;
                                return d
                            },
                            n = f.getAllTweens = function(b) {
                                return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b))
                            };
                        f.killAll = function(a, c, d, e) {
                            null == c && (c = !0), null == d && (d = !0);
                            var f, g, h, i = n(0 != e),
                                j = i.length,
                                k = c && d && e;
                            for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
                        }, f.killChildTweensOf = function(a, b) {
                            if (null != a) {
                                var e, g, k, l, m, n = h.tweenLookup;
                                if ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a))
                                    for (l = a.length; --l > -1;) f.killChildTweensOf(a[l], b);
                                else {
                                    e = [];
                                    for (k in n)
                                        for (g = n[k].target.parentNode; g;) g === a && (e = e.concat(n[k].tweens)), g = g.parentNode;
                                    for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1)
                                }
                            }
                        };
                        var o = function(a, c, d, e) {
                            c = c !== !1, d = d !== !1, e = e !== !1;
                            for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
                        };
                        return f.pauseAll = function(a, b, c) {
                            o(!0, a, b, c)
                        }, f.resumeAll = function(a, b, c) {
                            o(!1, a, b, c)
                        }, f.globalTimeScale = function(b) {
                            var d = a._rootTimeline,
                                e = c.ticker.time;
                            return arguments.length ? (b = b || g, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
                        }, k.progress = function(a, b) {
                            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
                        }, k.totalProgress = function(a, b) {
                            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
                        }, k.time = function(a, b) {
                            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                        }, k.duration = function(b) {
                            return arguments.length ? a.prototype.duration.call(this, b) : this._duration
                        }, k.totalDuration = function(a) {
                            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                        }, k.repeat = function(a) {
                            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                        }, k.repeatDelay = function(a) {
                            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                        }, k.yoyo = function(a) {
                            return arguments.length ? (this._yoyo = a, this) : this._yoyo
                        }, f
                    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                        var d = function(a) {
                                b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                                var c, d, e = this.vars;
                                for (d in e) c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                                i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
                            },
                            e = 1e-10,
                            f = c._internals,
                            g = d._internals = {},
                            h = f.isSelector,
                            i = f.isArray,
                            j = f.lazyTweens,
                            k = f.lazyRender,
                            l = _gsScope._gsDefine.globals,
                            m = function(a) {
                                var b, c = {};
                                for (b in a) c[b] = a[b];
                                return c
                            },
                            n = function(a, b, c) {
                                var d, e, f = a.cycle;
                                for (d in f) e = f[d], a[d] = "function" == typeof e ? e.call(b[c], c) : e[c % e.length];
                                delete a.cycle
                            },
                            o = g.pauseCallback = function() {},
                            p = function(a) {
                                var b, c = [],
                                    d = a.length;
                                for (b = 0; b !== d; c.push(a[b++]));
                                return c
                            },
                            q = d.prototype = new b;
                        return d.version = "1.18.5", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function(a, b, d, e) {
                            var f = d.repeat && l.TweenMax || c;
                            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
                        }, q.from = function(a, b, d, e) {
                            return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e)
                        }, q.fromTo = function(a, b, d, e, f) {
                            var g = e.repeat && l.TweenMax || c;
                            return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
                        }, q.staggerTo = function(a, b, e, f, g, i, j, k) {
                            var l, o, q = new d({
                                    onComplete: i,
                                    onCompleteParams: j,
                                    callbackScope: k,
                                    smoothChildTiming: this.smoothChildTiming
                                }),
                                r = e.cycle;
                            for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), o = 0; o < a.length; o++) l = m(e), l.startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, o * f);
                            return this.add(q, g)
                        }, q.staggerFrom = function(a, b, c, d, e, f, g, h) {
                            return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
                        }, q.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
                            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
                        }, q.call = function(a, b, d, e) {
                            return this.add(c.delayedCall(0, a, b, d), e)
                        }, q.set = function(a, b, d) {
                            return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
                        }, d.exportRoot = function(a, b) {
                            a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                            var e, f, g = new d(a),
                                h = g._timeline;
                            for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, e = h._first; e;) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), e = f;
                            return h.add(g, 0), g
                        }, q.add = function(e, f, g, h) {
                            var j, k, l, m, n, o;
                            if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                                if (e instanceof Array || e && e.push && i(e)) {
                                    for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d({
                                        tweens: m
                                    })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
                                    return this._uncache(!0)
                                }
                                if ("string" == typeof e) return this.addLabel(e, f);
                                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                                e = c.delayedCall(0, e)
                            }
                            if (b.prototype.add.call(this, e, f), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                                for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
                            return this
                        }, q.remove = function(b) {
                            if (b instanceof a) {
                                this._remove(b, !1);
                                var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                                return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this
                            }
                            if (b instanceof Array || b && b.push && i(b)) {
                                for (var d = b.length; --d > -1;) this.remove(b[d]);
                                return this
                            }
                            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                        }, q._remove = function(a, c) {
                            b.prototype._remove.call(this, a, c);
                            var d = this._last;
                            return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                        }, q.append = function(a, b) {
                            return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                        }, q.insert = q.insertMultiple = function(a, b, c, d) {
                            return this.add(a, b || 0, c, d)
                        }, q.appendMultiple = function(a, b, c, d) {
                            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                        }, q.addLabel = function(a, b) {
                            return this._labels[a] = this._parseTimeOrLabel(b), this
                        }, q.addPause = function(a, b, d, e) {
                            var f = c.delayedCall(0, o, d, e || this);
                            return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a)
                        }, q.removeLabel = function(a) {
                            return delete this._labels[a], this
                        }, q.getLabelTime = function(a) {
                            return null != this._labels[a] ? this._labels[a] : -1
                        }, q._parseTimeOrLabel = function(b, c, d, e) {
                            var f;
                            if (e instanceof a && e.timeline === this) this.remove(e);
                            else if (e && (e instanceof Array || e.push && i(e)))
                                for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
                            if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
                            if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
                            else {
                                if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                                c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
                            }
                            return Number(b) + c
                        }, q.seek = function(a, b) {
                            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
                        }, q.stop = function() {
                            return this.paused(!0)
                        }, q.gotoAndPlay = function(a, b) {
                            return this.play(a, b)
                        }, q.gotoAndStop = function(a, b) {
                            return this.pause(a, b)
                        }, q.render = function(a, b, c) {
                            this._gc && this._enabled(!0, !1);
                            var d, f, g, h, i, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration,
                                o = this._time,
                                p = this._startTime,
                                q = this._timeScale,
                                r = this._paused;
                            if (a >= n - 1e-7) this._totalTime = this._time = n, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = n + 1e-4;
                            else if (1e-7 > a)
                                if (this._totalTime = this._time = 0, (0 !== o || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a;
                                else {
                                    if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                                        for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                                    a = 0, this._initted || (i = !0)
                                } else {
                                if (this._hasPause && !this._forcingPlayhead && !b) {
                                    if (a >= o)
                                        for (d = this._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next;
                                    else
                                        for (d = this._last; d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
                                    l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                                }
                                this._totalTime = this._time = this._rawPrevTime = a
                            }
                            if (this._time !== o && this._first || c || i || l) {
                                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== o && a > 0 && (this._active = !0), 0 === o && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")), m = this._time, m >= o)
                                    for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));)(d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                                else
                                    for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));) {
                                        if (d._active || d._startTime <= o && !d._paused && !d._gc) {
                                            if (l === d) {
                                                for (l = d._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
                                                l = null, this.pause()
                                            }
                                            d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                                        }
                                        d = g
                                    }
                                this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)))
                            }
                        }, q._hasPausedChild = function() {
                            for (var a = this._first; a;) {
                                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                                a = a._next
                            }
                            return !1
                        }, q.getChildren = function(a, b, d, e) {
                            e = e || -9999999999;
                            for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
                            return f
                        }, q.getTweensOf = function(a, b) {
                            var d, e, f = this._gc,
                                g = [],
                                h = 0;
                            for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
                            return f && this._enabled(!1, !0), g
                        }, q.recent = function() {
                            return this._recent
                        }, q._contains = function(a) {
                            for (var b = a.timeline; b;) {
                                if (b === this) return !0;
                                b = b.timeline
                            }
                            return !1
                        }, q.shiftChildren = function(a, b, c) {
                            c = c || 0;
                            for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                            if (b)
                                for (d in f) f[d] >= c && (f[d] += a);
                            return this._uncache(!0)
                        }, q._kill = function(a, b) {
                            if (!a && !b) return this._enabled(!1, !1);
                            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
                            return e
                        }, q.clear = function(a) {
                            var b = this.getChildren(!1, !0, !0),
                                c = b.length;
                            for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                            return a !== !1 && (this._labels = {}), this._uncache(!0)
                        }, q.invalidate = function() {
                            for (var b = this._first; b;) b.invalidate(), b = b._next;
                            return a.prototype.invalidate.call(this)
                        }, q._enabled = function(a, c) {
                            if (a === this._gc)
                                for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                            return b.prototype._enabled.call(this, a, c)
                        }, q.totalTime = function(b, c, d) {
                            this._forcingPlayhead = !0;
                            var e = a.prototype.totalTime.apply(this, arguments);
                            return this._forcingPlayhead = !1, e
                        }, q.duration = function(a) {
                            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
                        }, q.totalDuration = function(a) {
                            if (!arguments.length) {
                                if (this._dirty) {
                                    for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                                    this._duration = this._totalDuration = d, this._dirty = !1
                                }
                                return this._totalDuration
                            }
                            return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
                        }, q.paused = function(b) {
                            if (!b)
                                for (var c = this._first, d = this._time; c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
                            return a.prototype.paused.apply(this, arguments)
                        }, q.usesFrames = function() {
                            for (var b = this._timeline; b._timeline;) b = b._timeline;
                            return b === a._rootFramesTimeline
                        }, q.rawTime = function() {
                            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                        }, d
                    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
                        var d = function(b) {
                                a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                            },
                            e = 1e-10,
                            f = b._internals,
                            g = f.lazyTweens,
                            h = f.lazyRender,
                            i = new c(null, null, 1, 0),
                            j = d.prototype = new a;
                        return j.constructor = d, j.kill()._gc = !1, d.version = "1.18.5", j.invalidate = function() {
                            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
                        }, j.addCallback = function(a, c, d, e) {
                            return this.add(b.delayedCall(0, a, d, e), c)
                        }, j.removeCallback = function(a, b) {
                            if (a)
                                if (null == b) this._kill(null, a);
                                else
                                    for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                            return this
                        }, j.removePause = function(b) {
                            return this.removeCallback(a._internals.pauseCallback, b)
                        }, j.tweenTo = function(a, c) {
                            c = c || {};
                            var d, e, f, g = {
                                ease: i,
                                useFrames: this.usesFrames(),
                                immediateRender: !1
                            };
                            for (e in c) g[e] = c[e];
                            return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new b(this, d, g), g.onStart = function() {
                                f.target.paused(!0), f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale), c.onStart && f._callback("onStart")
                            }, f
                        }, j.tweenFromTo = function(a, b, c) {
                            c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                                onComplete: this.seek,
                                onCompleteParams: [a],
                                callbackScope: this
                            }, c.immediateRender = c.immediateRender !== !1;
                            var d = this.tweenTo(b, c);
                            return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                        }, j.render = function(a, b, c) {
                            this._gc && this._enabled(!0, !1);
                            var d, f, i, j, k, l, m, n, o = this._dirty ? this.totalDuration() : this._totalDuration,
                                p = this._duration,
                                q = this._time,
                                r = this._totalTime,
                                s = this._startTime,
                                t = this._timeScale,
                                u = this._rawPrevTime,
                                v = this._paused,
                                w = this._cycle;
                            if (a >= o - 1e-7) this._locked || (this._totalTime = o, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, j = "onComplete", k = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0, u > e && (j = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = p, a = p + 1e-4);
                            else if (1e-7 > a)
                                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== q || 0 === p && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0, j = "onReverseComplete") : u >= 0 && this._first && (k = !0), this._rawPrevTime = a;
                                else {
                                    if (this._rawPrevTime = p || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                                        for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                                    a = 0, this._initted || (k = !0)
                                } else if (0 === p && 0 > u && (k = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (l = p + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, a = p + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b) {
                                if (a = this._time, a >= q)
                                    for (d = this._first; d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d), d = d._next;
                                else
                                    for (d = this._last; d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
                                m && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                            }
                            if (this._cycle !== w && !this._locked) {
                                var x = this._yoyo && 0 !== (1 & w),
                                    y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                                    z = this._totalTime,
                                    A = this._cycle,
                                    B = this._rawPrevTime,
                                    C = this._time;
                                if (this._totalTime = w * p, this._cycle < w ? x = !x : this._totalTime += p, this._time = q, this._rawPrevTime = 0 === p ? u - 1e-4 : u, this._cycle = w, this._locked = !0, q = x ? 0 : p, this.render(q, b, 0 === p), b || this._gc || this.vars.onRepeat && this._callback("onRepeat"), q !== this._time) return;
                                if (y && (q = x ? p + 1e-4 : -1e-4, this.render(q, !0, !1)), this._locked = !1, this._paused && !v) return;
                                this._time = C, this._totalTime = z, this._cycle = A, this._rawPrevTime = B
                            }
                            if (!(this._time !== q && this._first || c || k || m)) return void(r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0), 0 === r && this.vars.onStart && (0 === this._totalTime && this._totalDuration || b || this._callback("onStart")), n = this._time, n >= q)
                                for (d = this._first; d && (i = d._next, n === this._time && (!this._paused || v));)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
                            else
                                for (d = this._last; d && (i = d._prev, n === this._time && (!this._paused || v));) {
                                    if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                                        if (m === d) {
                                            for (m = d._prev; m && m.endTime() > this._time;) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
                                            m = null, this.pause()
                                        }
                                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                                    }
                                    d = i
                                }
                            this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this._callback(j)))
                        }, j.getActive = function(a, b, c) {
                            null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                            var d, e, f = [],
                                g = this.getChildren(a, b, c),
                                h = 0,
                                i = g.length;
                            for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
                            return f
                        }, j.getLabelAfter = function(a) {
                            a || 0 !== a && (a = this._time);
                            var b, c = this.getLabelsArray(),
                                d = c.length;
                            for (b = 0; d > b; b++)
                                if (c[b].time > a) return c[b].name;
                            return null
                        }, j.getLabelBefore = function(a) {
                            null == a && (a = this._time);
                            for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                                if (b[c].time < a) return b[c].name;
                            return null
                        }, j.getLabelsArray = function() {
                            var a, b = [],
                                c = 0;
                            for (a in this._labels) b[c++] = {
                                time: this._labels[a],
                                name: a
                            };
                            return b.sort(function(a, b) {
                                return a.time - b.time
                            }), b
                        }, j.progress = function(a, b) {
                            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
                        }, j.totalProgress = function(a, b) {
                            return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
                        }, j.totalDuration = function(b) {
                            return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                        }, j.time = function(a, b) {
                            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                        }, j.repeat = function(a) {
                            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                        }, j.repeatDelay = function(a) {
                            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                        }, j.yoyo = function(a) {
                            return arguments.length ? (this._yoyo = a, this) : this._yoyo
                        }, j.currentLabel = function(a) {
                            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
                        }, d
                    }, !0),
                    function() {
                        var a = 180 / Math.PI,
                            b = [],
                            c = [],
                            d = [],
                            e = {},
                            f = _gsScope._gsDefine.globals,
                            g = function(a, b, c, d) {
                                c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                            },
                            h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                            i = function(a, b, c, d) {
                                var e = {
                                        a: a
                                    },
                                    f = {},
                                    g = {},
                                    h = {
                                        c: d
                                    },
                                    i = (a + b) / 2,
                                    j = (b + c) / 2,
                                    k = (c + d) / 2,
                                    l = (i + j) / 2,
                                    m = (j + k) / 2,
                                    n = (m - l) / 8;
                                return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                            },
                            j = function(a, e, f, g, h) {
                                var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                                    x = 0,
                                    y = a[0].a;
                                for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                                n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
                            },
                            k = function(a, d, e, f) {
                                var h, i, j, k, l, m, n = [];
                                if (f)
                                    for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof(m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                                if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[-1 > h ? 0 : 1][d]), n;
                                for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
                                return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n
                            },
                            l = function(a, f, g, i, l, m) {
                                var n, o, p, q, r, s, t, u, v = {},
                                    w = [],
                                    x = m || a[0];
                                l = "string" == typeof l ? "," + l + "," : h, null == f && (f = 1);
                                for (o in a[0]) w.push(o);
                                if (a.length > 1) {
                                    for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                                        if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                                            t = !1;
                                            break
                                        }
                                    t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                                }
                                for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
                                for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
                                if (!i) {
                                    for (n = w.length; --n > -1;)
                                        if (e[o])
                                            for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r;
                                    for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
                                }
                                for (n = w.length, q = g ? 4 : 1; --n > -1;) o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                                return v
                            },
                            m = function(a, b, c) {
                                b = b || "soft";
                                var d, e, f, h, i, j, k, l, m, n, o, p = {},
                                    q = "cubic" === b ? 3 : 2,
                                    r = "soft" === b,
                                    s = [];
                                if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
                                for (m in a[0]) s.push(m);
                                for (j = s.length; --j > -1;) {
                                    for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof(o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                                    for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                                    i.length = n
                                }
                                return p
                            },
                            n = function(a, b, c) {
                                for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                                    for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
                            },
                            o = function(a, b) {
                                b = b >> 0 || 6;
                                var c, d, e, f, g = [],
                                    h = [],
                                    i = 0,
                                    j = 0,
                                    k = b - 1,
                                    l = [],
                                    m = [];
                                for (c in a) n(a[c], g, b);
                                for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
                                return {
                                    length: j,
                                    lengths: h,
                                    segments: l
                                }
                            },
                            p = _gsScope._gsDefine.plugin({
                                propName: "bezier",
                                priority: -1,
                                version: "1.3.6",
                                API: 2,
                                global: !0,
                                init: function(a, b, c) {
                                    this._target = a, b instanceof Array && (b = {
                                        values: b
                                    }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                                    var d, e, f, g, h, i = b.values || [],
                                        j = {},
                                        k = i[0],
                                        n = b.autoRotate || c.vars.orientToBezier;
                                    this._autoRotate = n ? n instanceof Array ? n : [
                                        ["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]
                                    ] : null;
                                    for (d in k) this._props.push(d);
                                    for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                                    if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                                        var p = o(this._beziers, this._timeRes);
                                        this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                    }
                                    if (n = this._autoRotate)
                                        for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
                                            for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] && a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)];
                                            d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0
                                        }
                                    return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
                                },
                                set: function(b) {
                                    var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                                        n = this._func,
                                        o = this._target,
                                        p = b !== this._startRatio;
                                    if (this._timeRes) {
                                        if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                                            for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;);
                                            this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                                        } else if (b < this._l1 && e > 0) {
                                            for (; e > 0 && (this._l1 = k[--e]) >= b;);
                                            0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                                        }
                                        if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
                                            for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;);
                                            this._s1 = l[e - 1], this._si = e
                                        } else if (b < this._s1 && e > 0) {
                                            for (; e > 0 && (this._s1 = l[--e]) >= b;);
                                            0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                                        }
                                        h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                                    } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                                    for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._round[f] && (i = Math.round(i)), n[f] ? o[f](i) : o[f] = i;
                                    if (this._autoRotate) {
                                        var q, r, s, t, u, v, w, x = this._autoRotate;
                                        for (e = x.length; --e > -1;) f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], n[f] ? o[f](i) : o[f] = i)
                                    }
                                }
                            }),
                            q = p.prototype;
                        p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function(a, b, c) {
                            return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                        }, p._cssRegister = function() {
                            var a = f.CSSPlugin;
                            if (a) {
                                var b = a._internals,
                                    c = b._parseToProxy,
                                    d = b._setPluginRatio,
                                    e = b.CSSPropTween;
                                b._registerComplexSpecialProp("bezier", {
                                    parser: function(a, b, f, g, h, i) {
                                        b instanceof Array && (b = {
                                            values: b
                                        }), i = new p;
                                        var j, k, l, m = b.values,
                                            n = m.length - 1,
                                            o = [],
                                            q = {};
                                        if (0 > n) return h;
                                        for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                                        for (k in b) q[k] = b[k];
                                        return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                                            ["left", "top", "rotation", j, !1]
                                        ] : null != l.end.x && [
                                            ["x", "y", "rotation", j, !1]
                                        ]), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0), i._onInitTween(l.proxy, q, g._tween), h
                                    }
                                })
                            }
                        }, q._roundProps = function(a, b) {
                            for (var c = this._overwriteProps, d = c.length; --d > -1;)(a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
                        }, q._kill = function(a) {
                            var b, c, d = this._props;
                            for (b in this._beziers)
                                if (b in a)
                                    for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
                            return this._super._kill.call(this, a)
                        }
                    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
                        var c, d, e, f, g = function() {
                                a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
                            },
                            h = _gsScope._gsDefine.globals,
                            i = {},
                            j = g.prototype = new a("css");
                        j.constructor = g, g.version = "1.18.5", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
                            top: j,
                            right: j,
                            bottom: j,
                            left: j,
                            width: j,
                            height: j,
                            fontSize: j,
                            padding: j,
                            margin: j,
                            perspective: j,
                            lineHeight: ""
                        };
                        var k, l, m, n, o, p, q = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                            r = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                            s = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                            t = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                            u = /(?:\d|\-|\+|=|#|\.)*/g,
                            v = /opacity *= *([^)]*)/i,
                            w = /opacity:([^;]*)/i,
                            x = /alpha\(opacity *=.+?\)/i,
                            y = /^(rgb|hsl)/,
                            z = /([A-Z])/g,
                            A = /-([a-z])/gi,
                            B = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                            C = function(a, b) {
                                return b.toUpperCase()
                            },
                            D = /(?:Left|Right|Width)/i,
                            E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                            F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                            G = /,(?=[^\)]*(?:\(|$))/gi,
                            H = /[\s,\(]/i,
                            I = Math.PI / 180,
                            J = 180 / Math.PI,
                            K = {},
                            L = document,
                            M = function(a) {
                                return L.createElementNS ? L.createElementNS("http://www.w3.org/1999/xhtml", a) : L.createElement(a)
                            },
                            N = M("div"),
                            O = M("img"),
                            P = g._internals = {
                                _specialProps: i
                            },
                            Q = navigator.userAgent,
                            R = function() {
                                var a = Q.indexOf("Android"),
                                    b = M("a");
                                return m = -1 !== Q.indexOf("Safari") && -1 === Q.indexOf("Chrome") && (-1 === a || Number(Q.substr(a + 8, 1)) > 3), o = m && Number(Q.substr(Q.indexOf("Version/") + 8, 1)) < 6, n = -1 !== Q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Q)) && (p = parseFloat(RegExp.$1)), !!b && (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity))
                            }(),
                            S = function(a) {
                                return v.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                            },
                            T = function(a) {
                                window.console && console.log(a)
                            },
                            U = "",
                            V = "",
                            W = function(a, b) {
                                b = b || N;
                                var c, d, e = b.style;
                                if (void 0 !== e[a]) return a;
                                for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                                return d >= 0 ? (V = 3 === d ? "ms" : c[d], U = "-" + V.toLowerCase() + "-", V + a) : null
                            },
                            X = L.defaultView ? L.defaultView.getComputedStyle : function() {},
                            Y = g.getStyle = function(a, b, c, d, e) {
                                var f;
                                return R || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || X(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(z, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : S(a)
                            },
                            Z = P.convertToPixels = function(a, c, d, e, f) {
                                if ("px" === e || !e) return d;
                                if ("auto" === e || !d) return 0;
                                var h, i, j, k = D.test(c),
                                    l = a,
                                    m = N.style,
                                    n = 0 > d,
                                    o = 1 === d;
                                if (n && (d = -d), o && (d *= 100), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                                else {
                                    if (m.cssText = "border:0 solid red;position:" + Y(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                                    else {
                                        if (l = a.parentNode || L.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                                        m[k ? "width" : "height"] = d + e
                                    }
                                    l.appendChild(N), h = parseFloat(N[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(N), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = Z(a, c, d, e, !0))
                                }
                                return o && (h /= 100), n ? -h : h
                            },
                            $ = P.calculateOffset = function(a, b, c) {
                                if ("absolute" !== Y(a, "position", c)) return 0;
                                var d = "left" === b ? "Left" : "Top",
                                    e = Y(a, "margin" + d, c);
                                return a["offset" + d] - (Z(a, b, parseFloat(e), e.replace(u, "")) || 0)
                            },
                            _ = function(a, b) {
                                var c, d, e, f = {};
                                if (b = b || X(a, null))
                                    if (c = b.length)
                                        for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Aa === e) && (f[e.replace(A, C)] = b.getPropertyValue(e));
                                    else
                                        for (c in b)(-1 === c.indexOf("Transform") || za === c) && (f[c] = b[c]);
                                else if (b = a.currentStyle || a.style)
                                    for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(A, C)] = b[c]);
                                return R || (f.opacity = S(a)), d = Na(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Ca && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
                            },
                            aa = function(a, b, c, d, e) {
                                var f, g, h, i = {},
                                    j = a.style;
                                for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(t, "") ? f : 0 : $(a, g), void 0 !== j[g] && (h = new pa(j, g, j[g], h)));
                                if (d)
                                    for (g in d) "className" !== g && (i[g] = d[g]);
                                return {
                                    difs: i,
                                    firstMPT: h
                                }
                            },
                            ba = {
                                width: ["Left", "Right"],
                                height: ["Top", "Bottom"]
                            },
                            ca = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                            da = function(a, b, c) {
                                if ("svg" === (a.nodeName + "").toLowerCase()) return (c || X(a))[b] || 0;
                                if (a.getBBox && Ka(a)) return a.getBBox()[b] || 0;
                                var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                                    e = ba[b],
                                    f = e.length;
                                for (c = c || X(a, null); --f > -1;) d -= parseFloat(Y(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(Y(a, "border" + e[f] + "Width", c, !0)) || 0;
                                return d
                            },
                            ea = function(a, b) {
                                if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                                (null == a || "" === a) && (a = "0 0");
                                var c, d = a.split(" "),
                                    e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                                    f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                                if (d.length > 3 && !b) {
                                    for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ea(d[c]));
                                    return a.join(",")
                                }
                                return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(t, "")), b.oy = parseFloat(f.replace(t, "")), b.v = a), b || a
                            },
                            fa = function(a, b) {
                                return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
                            },
                            ga = function(a, b) {
                                return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
                            },
                            ha = function(a, b, c, d) {
                                var e, f, g, h, i, j = 1e-6;
                                return null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : J) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
                            },
                            ia = {
                                aqua: [0, 255, 255],
                                lime: [0, 255, 0],
                                silver: [192, 192, 192],
                                black: [0, 0, 0],
                                maroon: [128, 0, 0],
                                teal: [0, 128, 128],
                                blue: [0, 0, 255],
                                navy: [0, 0, 128],
                                white: [255, 255, 255],
                                fuchsia: [255, 0, 255],
                                olive: [128, 128, 0],
                                yellow: [255, 255, 0],
                                orange: [255, 165, 0],
                                gray: [128, 128, 128],
                                purple: [128, 0, 128],
                                green: [0, 128, 0],
                                red: [255, 0, 0],
                                pink: [255, 192, 203],
                                cyan: [0, 255, 255],
                                transparent: [255, 255, 255, 0]
                            },
                            ja = function(a, b, c) {
                                return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
                            },
                            ka = g.parseColor = function(a, b) {
                                var c, d, e, f, g, h, i, j, k, l, m;
                                if (a)
                                    if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
                                    else {
                                        if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), ia[a]) c = ia[a];
                                        else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
                                        else if ("hsl" === a.substr(0, 3))
                                            if (c = m = a.match(q), b) {
                                                if (-1 !== a.indexOf("=")) return a.match(r)
                                            } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(a[3])), c[0] = ja(g + 1 / 3, d, e), c[1] = ja(g, d, e), c[2] = ja(g - 1 / 3, d, e);
                                        else c = a.match(q) || ia.transparent;
                                        c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
                                    } else c = ia.black;
                                return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
                            },
                            la = function(a, b) {
                                var c, d, e, f = a.match(ma) || [],
                                    g = 0,
                                    h = f.length ? "" : a;
                                for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = ka(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                                return h + a.substr(g)
                            },
                            ma = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                        for (j in ia) ma += "|" + j + "\\b";
                        ma = new RegExp(ma + ")", "gi"), g.colorStringFilter = function(a) {
                            var b, c = a[0] + a[1];
                            ma.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = la(a[0], b), a[1] = la(a[1], b)), ma.lastIndex = 0
                        }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
                        var na = function(a, b, c, d) {
                                if (null == a) return function(a) {
                                    return a
                                };
                                var e, f = b ? (a.match(ma) || [""])[0] : "",
                                    g = a.split(f).join("").match(s) || [],
                                    h = a.substr(0, a.indexOf(g[0])),
                                    i = ")" === a.charAt(a.length - 1) ? ")" : "",
                                    j = -1 !== a.indexOf(" ") ? " " : ",",
                                    k = g.length,
                                    l = k > 0 ? g[0].replace(q, "") : "";
                                return k ? e = b ? function(a) {
                                    var b, m, n, o;
                                    if ("number" == typeof a) a += l;
                                    else if (d && G.test(a)) {
                                        for (o = a.replace(G, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                                        return o.join(",")
                                    }
                                    if (b = (a.match(ma) || [f])[0], m = a.split(b).join("").match(s) || [], n = m.length, k > n--)
                                        for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                                    return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                                } : function(a) {
                                    var b, f, m;
                                    if ("number" == typeof a) a += l;
                                    else if (d && G.test(a)) {
                                        for (f = a.replace(G, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                                        return f.join(",")
                                    }
                                    if (b = a.match(s) || [], m = b.length, k > m--)
                                        for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                                    return h + b.join(j) + i
                                } : function(a) {
                                    return a
                                }
                            },
                            oa = function(a) {
                                return a = a.split(","),
                                    function(b, c, d, e, f, g, h) {
                                        var i, j = (c + "").split(" ");
                                        for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                                        return e.parse(b, h, f, g)
                                    }
                            },
                            pa = (P._setPluginRatio = function(a) {
                                this.plugin.setRatio(a);
                                for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
                                if (g.autoRotate && (g.autoRotate.rotation = h.rotation), 1 === a || 0 === a)
                                    for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                                        if (c = i.t, c.type) {
                                            if (1 === c.type) {
                                                for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                                c[f] = e
                                            }
                                        } else c[f] = c.s + c.xs0;
                                        i = i._next
                                    }
                            }, function(a, b, c, d, e) {
                                this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                            }),
                            qa = (P._parseToProxy = function(a, b, c, d, e, f) {
                                var g, h, i, j, k, l = d,
                                    m = {},
                                    n = {},
                                    o = c._transform,
                                    p = K;
                                for (c._transform = null, K = b, d = k = c.parse(a, b, d, e), K = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                                    if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new pa(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                                        for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new pa(d, i, h, j, d.rxp[i]));
                                    d = d._next
                                }
                                return {
                                    proxy: m,
                                    end: n,
                                    firstMPT: j,
                                    pt: k
                                }
                            }, P.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                                this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof qa || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
                            }),
                            ra = function(a, b, c, d, e, f) {
                                var g = new qa(a, b, c, d - c, e, (-1), f);
                                return g.b = c, g.e = g.xs0 = d, g
                            },
                            sa = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
                                c = c || f || "", h = new qa(a, b, 0, 0, h, l ? 2 : 1, null, (!1), i, c, d), d += "", e && ma.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
                                var m, n, o, p, s, t, u, v, w, x, y, z, A, B = c.split(", ").join(",").split(" "),
                                    C = d.split(", ").join(",").split(" "),
                                    D = B.length,
                                    E = k !== !1;
                                for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (B = B.join(" ").replace(G, ", ").split(" "), C = C.join(" ").replace(G, ", ").split(" "), D = B.length), D !== C.length && (B = (f || "").split(" "), D = B.length), h.plugin = j, h.setRatio = l, ma.lastIndex = 0, m = 0; D > m; m++)
                                    if (p = B[m], s = C[m], v = parseFloat(p), v || 0 === v) h.appendXtra("", v, fa(s, v), s.replace(r, ""), E && -1 !== s.indexOf("px"), !0);
                                    else if (e && ma.test(p)) z = s.indexOf(")") + 1, z = ")" + (z ? s.substr(z) : ""), A = -1 !== s.indexOf("hsl") && R, p = ka(p, A), s = ka(s, A), w = p.length + s.length > 6, w && !R && 0 === s[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(C[m]).join("transparent")) : (R || (w = !1), A ? h.appendXtra(w ? "hsla(" : "hsl(", p[0], fa(s[0], p[0]), ",", !1, !0).appendXtra("", p[1], fa(s[1], p[1]), "%,", !1).appendXtra("", p[2], fa(s[2], p[2]), w ? "%," : "%" + z, !1) : h.appendXtra(w ? "rgba(" : "rgb(", p[0], s[0] - p[0], ",", !0, !0).appendXtra("", p[1], s[1] - p[1], ",", !0).appendXtra("", p[2], s[2] - p[2], w ? "," : z, !0), w && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (s.length < 4 ? 1 : s[3]) - p, z, !1))), ma.lastIndex = 0;
                                else if (t = p.match(q)) {
                                    if (u = s.match(r), !u || u.length !== t.length) return h;
                                    for (o = 0, n = 0; n < t.length; n++) y = t[n], x = p.indexOf(y, o), h.appendXtra(p.substr(o, x - o), Number(y), fa(u[n], y), "", E && "px" === p.substr(x + y.length, 2), 0 === n), o = x + y.length;
                                    h["xs" + h.l] += p.substr(o)
                                } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + s : s;
                                if (-1 !== d.indexOf("=") && h.data) {
                                    for (z = h.xs0 + h.data.s, m = 1; m < h.l; m++) z += h["xs" + m] + h.data["xn" + m];
                                    h.e = z + h["xs" + m]
                                }
                                return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
                            },
                            ta = 9;
                        for (j = qa.prototype, j.l = j.pr = 0; --ta > 0;) j["xn" + ta] = 0, j["xs" + ta] = "";
                        j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a, b, c, d, e, f) {
                            var g = this,
                                h = g.l;
                            return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new qa(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                                s: b + c
                            }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                        };
                        var ua = function(a, b) {
                                b = b || {}, this.p = b.prefix ? W(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || na(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                            },
                            va = P._registerComplexSpecialProp = function(a, b, c) {
                                "object" != typeof b && (b = {
                                    parser: c
                                });
                                var d, e, f = a.split(","),
                                    g = b.defaultValue;
                                for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new ua(f[d], b)
                            },
                            wa = function(a) {
                                if (!i[a]) {
                                    var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                                    va(a, {
                                        parser: function(a, c, d, e, f, g, j) {
                                            var k = h.com.greensock.plugins[b];
                                            return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (T("Error: " + b + " js file not loaded."), f)
                                        }
                                    })
                                }
                            };
                        j = ua.prototype, j.parseComplex = function(a, b, c, d, e, f) {
                            var g, h, i, j, k, l, m = this.keyword;
                            if (this.multi && (G.test(c) || G.test(b) ? (h = b.replace(G, "|").split("|"), i = c.replace(G, "|").split("|")) : m && (h = [b], i = [c])), i) {
                                for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                                b = h.join(", "), c = i.join(", ")
                            }
                            return sa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                        }, j.parse = function(a, b, c, d, f, g, h) {
                            return this.parseComplex(a.style, this.format(Y(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
                        }, g.registerSpecialProp = function(a, b, c) {
                            va(a, {
                                parser: function(a, d, e, f, g, h, i) {
                                    var j = new qa(a, e, 0, 0, g, 2, e, (!1), c);
                                    return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                                },
                                priority: c
                            })
                        }, g.useSVGTransformAttr = m || n;
                        var xa, ya = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                            za = W("transform"),
                            Aa = U + "transform",
                            Ba = W("transformOrigin"),
                            Ca = null !== W("perspective"),
                            Da = P.Transform = function() {
                                this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = !(g.defaultForce3D === !1 || !Ca) && (g.defaultForce3D || "auto")
                            },
                            Ea = window.SVGElement,
                            Fa = function(a, b, c) {
                                var d, e = L.createElementNS("http://www.w3.org/2000/svg", a),
                                    f = /([a-z])([A-Z])/g;
                                for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                                return b.appendChild(e), e
                            },
                            Ga = L.documentElement,
                            Ha = function() {
                                var a, b, c, d = p || /Android/i.test(Q) && !window.chrome;
                                return L.createElementNS && !d && (a = Fa("svg", Ga), b = Fa("rect", a, {
                                    width: 100,
                                    height: 50,
                                    x: 100
                                }), c = b.getBoundingClientRect().width, b.style[Ba] = "50% 50%", b.style[za] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Ca), Ga.removeChild(a)), d
                            }(),
                            Ia = function(a, b, c, d, e, f) {
                                var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
                                    w = Ma(a, !0);
                                v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), b = ea(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== La && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
                            },
                            Ja = function(a) {
                                try {
                                    return a.getBBox()
                                } catch (a) {}
                            },
                            Ka = function(a) {
                                return !!(Ea && a.getBBox && a.getCTM && Ja(a) && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM))
                            },
                            La = [1, 0, 0, 1, 0, 0],
                            Ma = function(a, b) {
                                var c, d, e, f, g, h, i = a._gsTransform || new Da,
                                    j = 1e5,
                                    k = a.style;
                                if (za ? d = Y(a, Aa, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(E), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, c && za && ((h = "none" === X(a).display) || !a.parentNode) && (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ga.appendChild(a)), d = Y(a, Aa, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Ra(k, "display"), g && Ga.removeChild(a)), (i.svg || a.getBBox && Ka(a)) && (c && -1 !== (k[za] + "").indexOf("matrix") && (d = k[za], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c = 0))), c) return La;
                                for (e = (d || "").match(q) || [], ta = e.length; --ta > -1;) f = Number(e[ta]), e[ta] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
                                return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
                            },
                            Na = P.getTransform = function(a, c, d, e) {
                                if (a._gsTransform && d && !e) return a._gsTransform;
                                var f, h, i, j, k, l, m = d ? a._gsTransform || new Da : new Da,
                                    n = m.scaleX < 0,
                                    o = 2e-5,
                                    p = 1e5,
                                    q = Ca ? parseFloat(Y(a, Ba, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                                    r = parseFloat(g.defaultTransformPerspective) || 0;
                                if (m.svg = !(!a.getBBox || !Ka(a)), m.svg && (Ia(a, Y(a, Ba, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), xa = g.useSVGTransformAttr || Ha), f = Ma(a), f !== La) {
                                    if (16 === f.length) {
                                        var s, t, u, v, w, x = f[0],
                                            y = f[1],
                                            z = f[2],
                                            A = f[3],
                                            B = f[4],
                                            C = f[5],
                                            D = f[6],
                                            E = f[7],
                                            F = f[8],
                                            G = f[9],
                                            H = f[10],
                                            I = f[12],
                                            K = f[13],
                                            L = f[14],
                                            M = f[11],
                                            N = Math.atan2(D, H);
                                        m.zOrigin && (L = -m.zOrigin, I = F * L - f[12], K = G * L - f[13], L = H * L + m.zOrigin - f[14]), m.rotationX = N * J, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * J, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * J, N && (v = Math.cos(-N), w = Math.sin(-N), x = x * v + B * w, t = y * v + C * w, C = y * -w + C * v, D = z * -w + D * v, y = t), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), m.scaleX = (Math.sqrt(x * x + y * y) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + G * G) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(D * D + H * H) * p + .5 | 0) / p, m.rotationX || m.rotationY ? m.skewX = 0 : (m.skewX = B || C ? Math.atan2(B, C) * J + m.rotation : m.skewX || 0, Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180))), m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = K, m.z = L, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
                                    } else if (!Ca || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                                        var O = f.length >= 6,
                                            P = O ? f[0] : 1,
                                            Q = f[1] || 0,
                                            R = f[2] || 0,
                                            S = O ? f[3] : 1;
                                        m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * J : m.rotation || 0, l = R || S ? Math.atan2(R, S) * J + k : m.skewX || 0, Math.abs(l) > 90 && Math.abs(l) < 270 && (n ? (i *= -1, l += 0 >= k ? 180 : -180, k += 0 >= k ? 180 : -180) : (j *= -1, l += 0 >= l ? 180 : -180)), m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Ca && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
                                    }
                                    m.zOrigin = q;
                                    for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
                                }
                                return d && (a._gsTransform = m, m.svg && (xa && a.style[za] ? b.delayedCall(.001, function() {
                                    Ra(a.style, za)
                                }) : !xa && a.getAttribute("transform") && b.delayedCall(.001, function() {
                                    a.removeAttribute("transform")
                                }))), m
                            },
                            Oa = function(a) {
                                var b, c, d = this.data,
                                    e = -d.rotation * I,
                                    f = e + d.skewX * I,
                                    g = 1e5,
                                    h = (Math.cos(e) * d.scaleX * g | 0) / g,
                                    i = (Math.sin(e) * d.scaleX * g | 0) / g,
                                    j = (Math.sin(f) * -d.scaleY * g | 0) / g,
                                    k = (Math.cos(f) * d.scaleY * g | 0) / g,
                                    l = this.t.style,
                                    m = this.t.currentStyle;
                                if (m) {
                                    c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                                    var n, o, q = this.t.offsetWidth,
                                        r = this.t.offsetHeight,
                                        s = "absolute" !== m.position,
                                        t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                        w = d.x + q * d.xPercent / 100,
                                        x = d.y + r * d.yPercent / 100;
                                    if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, w += n - (n * h + o * i), x += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + w) + ", Dy=" + (o - (n * j + o * k) + x) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(F, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || v.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                                        var y, z, A, B = 8 > p ? 1 : -1;
                                        for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), ta = 0; 4 > ta; ta++) z = ca[ta], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : Z(this.t, z, parseFloat(y), y.replace(u, "")) || 0, A = c !== d[z] ? 2 > ta ? -d.ieOffsetX : -d.ieOffsetY : 2 > ta ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === ta || 2 === ta ? 1 : B))) + "px"
                                    }
                                }
                            },
                            Pa = P.set3DTransformRatio = P.setTransformRatio = function(a) {
                                var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
                                    A = this.t.style,
                                    B = z.rotation,
                                    C = z.rotationX,
                                    D = z.rotationY,
                                    E = z.scaleX,
                                    F = z.scaleY,
                                    G = z.scaleZ,
                                    H = z.x,
                                    J = z.y,
                                    K = z.z,
                                    L = z.svg,
                                    M = z.perspective,
                                    N = z.force3D;
                                if (((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !K && !M && !D && !C && 1 === G || xa && L || !Ca) return void(B || z.skewX || L ? (B *= I, x = z.skewX * I, y = 1e5, b = Math.cos(B) * E, e = Math.sin(B) * E, c = Math.sin(B - x) * -F, f = Math.cos(B - x) * F, x && "simple" === z.skewType && (s = Math.tan(x), s = Math.sqrt(1 + s * s), c *= s, f *= s, z.skewY && (b *= s, e *= s)), L && (H += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset, J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset, xa && (z.xPercent || z.yPercent) && (p = this.t.getBBox(), H += .01 * z.xPercent * p.width, J += .01 * z.yPercent * p.height), p = 1e-6, p > H && H > -p && (H = 0), p > J && J > -p && (J = 0)), u = (b * y | 0) / y + "," + (e * y | 0) / y + "," + (c * y | 0) / y + "," + (f * y | 0) / y + "," + H + "," + J + ")", L && xa ? this.t.setAttribute("transform", "matrix(" + u) : A[za] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[za] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + J + ")");
                                if (n && (p = 1e-4, p > E && E > -p && (E = G = 2e-5), p > F && F > -p && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || z.skewX) B *= I, q = b = Math.cos(B), r = e = Math.sin(B), z.skewX && (B -= z.skewX * I, q = Math.cos(B), r = Math.sin(B), "simple" === z.skewType && (s = Math.tan(z.skewX * I), s = Math.sqrt(1 + s * s), q *= s, r *= s, z.skewY && (b *= s, e *= s))), c = -r, f = q;
                                else {
                                    if (!(D || C || 1 !== G || M || L)) return void(A[za] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + J + "px," + K + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                                    b = f = 1, c = e = 0
                                }
                                j = 1, d = g = h = i = k = l = 0, m = M ? -1 / M : 0, o = z.zOrigin, p = 1e-6, v = ",", w = "0", B = D * I, B && (q = Math.cos(B), r = Math.sin(B), h = -r, k = m * -r, d = b * r, g = e * r, j = q, m *= q, b *= q, e *= q), B = C * I, B && (q = Math.cos(B), r = Math.sin(B), s = c * q + d * r, t = f * q + g * r, i = j * r, l = m * r, d = c * -r + d * q, g = f * -r + g * q, j *= q, m *= q, c = s, f = t), 1 !== G && (d *= G, g *= G, j *= G, m *= G), 1 !== F && (c *= F, f *= F, i *= F, l *= F), 1 !== E && (b *= E, e *= E, h *= E, k *= E), (o || L) && (o && (H += d * -o, J += g * -o, K += j * -o + o), L && (H += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset, J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset), p > H && H > -p && (H = w), p > J && J > -p && (J = w), p > K && K > -p && (K = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (p > b && b > -p ? w : b) + v + (p > e && e > -p ? w : e) + v + (p > h && h > -p ? w : h), u += v + (p > k && k > -p ? w : k) + v + (p > c && c > -p ? w : c) + v + (p > f && f > -p ? w : f), C || D || 1 !== G ? (u += v + (p > i && i > -p ? w : i) + v + (p > l && l > -p ? w : l) + v + (p > d && d > -p ? w : d), u += v + (p > g && g > -p ? w : g) + v + (p > j && j > -p ? w : j) + v + (p > m && m > -p ? w : m) + v) : u += ",0,0,0,0,1,0,", u += H + v + J + v + K + v + (M ? 1 + -K / M : 1) + ")", A[za] = u
                            };
                        j = Da.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, va("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                            parser: function(a, b, c, d, f, h, i) {
                                if (d._lastParsedTransform === i) return f;
                                d._lastParsedTransform = i;
                                var j, k, l, m, n, o, p, q, r, s = a._gsTransform,
                                    t = a.style,
                                    u = 1e-6,
                                    v = ya.length,
                                    w = i,
                                    x = {},
                                    y = "transformOrigin",
                                    z = Na(a, e, !0, i.parseTransform);
                                if (d._transform = z, "string" == typeof w.transform && za) k = N.style, k[za] = w.transform, k.display = "block", k.position = "absolute", L.body.appendChild(N), j = Na(N, null, !1), z.svg && (p = z.xOrigin, q = z.yOrigin, j.x -= z.xOffset, j.y -= z.yOffset, (w.transformOrigin || w.svgOrigin) && (l = {}, Ia(a, ea(w.transformOrigin), l, w.svgOrigin, w.smoothOrigin, !0), p = l.xOrigin, q = l.yOrigin, j.x -= l.xOffset - z.xOffset, j.y -= l.yOffset - z.yOffset), (p || q) && (r = Ma(N, !0), j.x -= p - (p * r[0] + q * r[2]), j.y -= q - (p * r[1] + q * r[3]))), L.body.removeChild(N), j.perspective || (j.perspective = z.perspective), null != w.xPercent && (j.xPercent = ga(w.xPercent, z.xPercent)), null != w.yPercent && (j.yPercent = ga(w.yPercent, z.yPercent));
                                else if ("object" == typeof w) {
                                    if (j = {
                                            scaleX: ga(null != w.scaleX ? w.scaleX : w.scale, z.scaleX),
                                            scaleY: ga(null != w.scaleY ? w.scaleY : w.scale, z.scaleY),
                                            scaleZ: ga(w.scaleZ, z.scaleZ),
                                            x: ga(w.x, z.x),
                                            y: ga(w.y, z.y),
                                            z: ga(w.z, z.z),
                                            xPercent: ga(w.xPercent, z.xPercent),
                                            yPercent: ga(w.yPercent, z.yPercent),
                                            perspective: ga(w.transformPerspective, z.perspective)
                                        }, o = w.directionalRotation, null != o)
                                        if ("object" == typeof o)
                                            for (k in o) w[k] = o[k];
                                        else w.rotation = o;
                                        "string" == typeof w.x && -1 !== w.x.indexOf("%") && (j.x = 0, j.xPercent = ga(w.x, z.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (j.y = 0, j.yPercent = ga(w.y, z.yPercent)), j.rotation = ha("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : z.rotation - z.skewY, z.rotation - z.skewY, "rotation", x), Ca && (j.rotationX = ha("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : z.rotationX || 0, z.rotationX, "rotationX", x), j.rotationY = ha("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : z.rotationY || 0, z.rotationY, "rotationY", x)), j.skewX = ha(w.skewX, z.skewX - z.skewY), (j.skewY = ha(w.skewY, z.skewY)) && (j.skewX += j.skewY, j.rotation += j.skewY)
                                }
                                for (Ca && null != w.force3D && (z.force3D = w.force3D, n = !0), z.skewType = w.skewType || z.skewType || g.defaultSkewType, m = z.force3D || z.z || z.rotationX || z.rotationY || j.z || j.rotationX || j.rotationY || j.perspective, m || null == w.scale || (j.scaleZ = 1); --v > -1;) c = ya[v], l = j[c] - z[c], (l > u || -u > l || null != w[c] || null != K[c]) && (n = !0, f = new qa(z, c, z[c], l, f), c in x && (f.e = x[c]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                                return l = w.transformOrigin, z.svg && (l || w.svgOrigin) && (p = z.xOffset, q = z.yOffset, Ia(a, ea(l), j, w.svgOrigin, w.smoothOrigin), f = ra(z, "xOrigin", (s ? z : j).xOrigin, j.xOrigin, f, y), f = ra(z, "yOrigin", (s ? z : j).yOrigin, j.yOrigin, f, y), (p !== z.xOffset || q !== z.yOffset) && (f = ra(z, "xOffset", s ? p : z.xOffset, z.xOffset, f, y), f = ra(z, "yOffset", s ? q : z.yOffset, z.yOffset, f, y)), l = xa ? null : "0px 0px"), (l || Ca && m && z.zOrigin) && (za ? (n = !0, c = Ba, l = (l || Y(a, c, e, !1, "50% 50%")) + "", f = new qa(t, c, 0, 0, f, (-1), y), f.b = t[c], f.plugin = h, Ca ? (k = z.zOrigin, l = l.split(" "), z.zOrigin = (l.length > 2 && (0 === k || "0px" !== l[2]) ? parseFloat(l[2]) : k) || 0,
                                    f.xs0 = f.e = l[0] + " " + (l[1] || "50%") + " 0px", f = new qa(z, "zOrigin", 0, 0, f, (-1), f.n), f.b = k, f.xs0 = f.e = z.zOrigin) : f.xs0 = f.e = l) : ea(l + "", z)), n && (d._transformType = z.svg && xa || !m && 3 !== this._transformType ? 2 : 3), f
                            },
                            prefix: !0
                        }), va("boxShadow", {
                            defaultValue: "0px 0px 0px 0px #999",
                            prefix: !0,
                            color: !0,
                            multi: !0,
                            keyword: "inset"
                        }), va("borderRadius", {
                            defaultValue: "0px",
                            parser: function(a, b, c, f, g, h) {
                                b = this.format(b);
                                var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                    z = a.style;
                                for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = W(y[j])), m = l = Y(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = Z(a, "borderLeft", o, t), w = Z(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = Z(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = sa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                                return g
                            },
                            prefix: !0,
                            formatter: na("0px 0px 0px 0px", !1, !0)
                        }), va("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                            defaultValue: "0px",
                            parser: function(a, b, c, d, f, g) {
                                return sa(a.style, c, this.format(Y(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
                            },
                            prefix: !0,
                            formatter: na("0px 0px", !1, !0)
                        }), va("backgroundPosition", {
                            defaultValue: "0 0",
                            parser: function(a, b, c, d, f, g) {
                                var h, i, j, k, l, m, n = "background-position",
                                    o = e || X(a, null),
                                    q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                                    r = this.format(b);
                                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = Y(a, "backgroundImage").replace(B, ""), m && "none" !== m)) {
                                    for (h = q.split(" "), i = r.split(" "), O.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - O.width : a.offsetHeight - O.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                                    q = h.join(" ")
                                }
                                return this.parseComplex(a.style, q, r, f, g)
                            },
                            formatter: ea
                        }), va("backgroundSize", {
                            defaultValue: "0 0",
                            formatter: ea
                        }), va("perspective", {
                            defaultValue: "0px",
                            prefix: !0
                        }), va("perspectiveOrigin", {
                            defaultValue: "50% 50%",
                            prefix: !0
                        }), va("transformStyle", {
                            prefix: !0
                        }), va("backfaceVisibility", {
                            prefix: !0
                        }), va("userSelect", {
                            prefix: !0
                        }), va("margin", {
                            parser: oa("marginTop,marginRight,marginBottom,marginLeft")
                        }), va("padding", {
                            parser: oa("paddingTop,paddingRight,paddingBottom,paddingLeft")
                        }), va("clip", {
                            defaultValue: "rect(0px,0px,0px,0px)",
                            parser: function(a, b, c, d, f, g) {
                                var h, i, j;
                                return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(Y(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                            }
                        }), va("textShadow", {
                            defaultValue: "0px 0px 0px #999",
                            color: !0,
                            multi: !0
                        }), va("autoRound,strictUnits", {
                            parser: function(a, b, c, d, e) {
                                return e
                            }
                        }), va("border", {
                            defaultValue: "0px solid #000",
                            parser: function(a, b, c, d, f, g) {
                                var h = Y(a, "borderTopWidth", e, !1, "0px"),
                                    i = this.format(b).split(" "),
                                    j = i[0].replace(u, "");
                                return "px" !== j && (h = parseFloat(h) / Z(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + Y(a, "borderTopStyle", e, !1, "solid") + " " + Y(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
                            },
                            color: !0,
                            formatter: function(a) {
                                var b = a.split(" ");
                                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ma) || ["#000"])[0]
                            }
                        }), va("borderWidth", {
                            parser: oa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                        }), va("float,cssFloat,styleFloat", {
                            parser: function(a, b, c, d, e, f) {
                                var g = a.style,
                                    h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                                return new qa(g, h, 0, 0, e, (-1), c, (!1), 0, g[h], b)
                            }
                        });
                        var Qa = function(a) {
                            var b, c = this.t,
                                d = c.filter || Y(this.data, "filter") || "",
                                e = this.s + this.c * a | 0;
                            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !Y(this.data, "filter")) : (c.filter = d.replace(x, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(v, "opacity=" + e))
                        };
                        va("opacity,alpha,autoAlpha", {
                            defaultValue: "1",
                            parser: function(a, b, c, d, f, g) {
                                var h = parseFloat(Y(a, "opacity", e, !1, "1")),
                                    i = a.style,
                                    j = "autoAlpha" === c;
                                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === Y(a, "visibility", e) && 0 !== b && (h = 0), R ? f = new qa(i, "opacity", h, b - h, f) : (f = new qa(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Qa), j && (f = new qa(i, "visibility", 0, 0, f, (-1), null, (!1), 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
                            }
                        });
                        var Ra = function(a, b) {
                                b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(z, "-$1").toLowerCase())) : a.removeAttribute(b))
                            },
                            Sa = function(a) {
                                if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                                    this.t.setAttribute("class", 0 === a ? this.b : this.e);
                                    for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Ra(c, b.p), b = b._next;
                                    1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                            };
                        va("className", {
                            parser: function(a, b, d, f, g, h, i) {
                                var j, k, l, m, n, o = a.getAttribute("class") || "",
                                    p = a.style.cssText;
                                if (g = f._classNamePT = new qa(a, d, 0, 0, g, 2), g.setRatio = Sa, g.pr = -11, c = !0, g.b = o, k = _(a, e), l = a._gsClassPT) {
                                    for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                                    l.setRatio(1)
                                }
                                return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = aa(a, k, _(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
                            }
                        });
                        var Ta = function(a) {
                            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                                var b, c, d, e, f, g = this.t.style,
                                    h = i.transform.parse;
                                if ("all" === this.e) g.cssText = "", e = !0;
                                else
                                    for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ba : i[c].p), Ra(g, c);
                                e && (Ra(g, za), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                            }
                        };
                        for (va("clearProps", {
                                parser: function(a, b, d, e, f) {
                                    return f = new qa(a, d, 0, 0, f, 2), f.setRatio = Ta, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                                }
                            }), j = "bezier,throwProps,physicsProps,physics2D".split(","), ta = j.length; ta--;) wa(j[ta]);
                        j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h) {
                            if (!a.nodeType) return !1;
                            this._target = a, this._tween = h, this._vars = b, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = X(a, ""), f = this._overwriteProps;
                            var j, n, p, q, r, s, t, u, v, x = a.style;
                            if (l && "" === x.zIndex && (j = Y(a, "zIndex", e), ("auto" === j || "" === j) && this._addLazySet(x, "zIndex", 0)), "string" == typeof b && (q = x.cssText, j = _(a, e), x.cssText = q + ";" + b, j = aa(a, j, _(a)).difs, !R && w.test(b) && (j.opacity = parseFloat(RegExp.$1)), b = j, x.cssText = q), b.className ? this._firstPT = n = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = n = this.parse(a, b, null), this._transformType) {
                                for (v = 3 === this._transformType, za ? m && (l = !0, "" === x.zIndex && (t = Y(a, "zIndex", e), ("auto" === t || "" === t) && this._addLazySet(x, "zIndex", 0)), o && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (v ? "visible" : "hidden"))) : x.zoom = 1, p = n; p && p._next;) p = p._next;
                                u = new qa(a, "transform", 0, 0, null, 2), this._linkCSSP(u, null, p), u.setRatio = za ? Pa : Oa, u.data = this._transform || Na(a, e, !0), u.tween = h, u.pr = -1, f.pop()
                            }
                            if (c) {
                                for (; n;) {
                                    for (s = n._next, p = q; p && p.pr > n.pr;) p = p._next;
                                    (n._prev = p ? p._prev : r) ? n._prev._next = n: q = n, (n._next = p) ? p._prev = n : r = n, n = s
                                }
                                this._firstPT = q
                            }
                            return !0
                        }, j.parse = function(a, b, c, f) {
                            var g, h, j, l, m, n, o, p, q, r, s = a.style;
                            for (g in b) n = b[g], h = i[g], h ? c = h.parse(a, n, g, this, c, f, b) : (m = Y(a, g, e) + "", q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && y.test(n) ? (q || (n = ka(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = sa(s, g, m, n, !0, "transparent", c, 0, f)) : q && H.test(n) ? c = sa(s, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = da(a, g, e), o = "px") : "left" === g || "top" === g ? (j = $(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(u, "")) : (l = parseFloat(n), p = q ? n.replace(u, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (r ? l + j : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && j && (j = Z(a, g, j, o), "%" === p ? (j /= Z(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= Z(a, g, 1, p) : "px" !== p && (l = Z(a, g, l, p), p = "px"), r && (l || 0 === l) && (n = l + j + p)), r && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== s[g] && (n || n + "" != "NaN" && null != n) ? (c = new qa(s, g, l || j || 0, 0, c, (-1), g, (!1), 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : T("invalid " + g + " tween value: " + b[g]) : (c = new qa(s, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))), f && c && !c.plugin && (c.plugin = f);
                            return c
                        }, j.setRatio = function(a) {
                            var b, c, d, e = this._firstPT,
                                f = 1e-6;
                            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                                    for (; e;) {
                                        if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
                                            if (1 === e.type)
                                                if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                                else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                        else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                        else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                        else {
                                            for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                            e.t[e.p] = c
                                        } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                        else e.t[e.p] = b + e.xs0;
                                        e = e._next
                                    } else
                                        for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                                else
                                    for (; e;) {
                                        if (2 !== e.type)
                                            if (e.r && -1 !== e.type)
                                                if (b = Math.round(e.s + e.c), e.type) {
                                                    if (1 === e.type) {
                                                        for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                        e.t[e.p] = c
                                                    }
                                                } else e.t[e.p] = b + e.xs0;
                                        else e.t[e.p] = e.e;
                                        else e.setRatio(a);
                                        e = e._next
                                    }
                        }, j._enableTransforms = function(a) {
                            this._transform = this._transform || Na(this._target, e, !0), this._transformType = this._transform.svg && xa || !a && 3 !== this._transformType ? 2 : 3
                        };
                        var Ua = function(a) {
                            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                        };
                        j._addLazySet = function(a, b, c) {
                            var d = this._firstPT = new qa(a, b, 0, 0, this._firstPT, 2);
                            d.e = c, d.setRatio = Ua, d.data = this
                        }, j._linkCSSP = function(a, b, c, d) {
                            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
                        }, j._kill = function(b) {
                            var c, d, e, f = b;
                            if (b.autoAlpha || b.alpha) {
                                f = {};
                                for (d in b) f[d] = b[d];
                                f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                            }
                            return b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), a.prototype._kill.call(this, f)
                        };
                        var Va = function(a, b, c) {
                            var d, e, f, g;
                            if (a.slice)
                                for (e = a.length; --e > -1;) Va(a[e], b, c);
                            else
                                for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(_(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Va(f, b, c)
                        };
                        return g.cascadeTo = function(a, c, d) {
                            var e, f, g, h, i = b.to(a, c, d),
                                j = [i],
                                k = [],
                                l = [],
                                m = [],
                                n = b._internals.reservedProps;
                            for (a = i._targets || i.target, Va(a, k, m), i.render(c, !0, !0), Va(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
                                if (f = aa(m[e], k[e], l[e]), f.firstMPT) {
                                    f = f.difs;
                                    for (g in d) n[g] && (f[g] = d[g]);
                                    h = {};
                                    for (g in f) h[g] = k[e][g];
                                    j.push(b.fromTo(m[e], c, h, f))
                                }
                            return j
                        }, a.activate([g]), g
                    }, !0),
                    function() {
                        var a = _gsScope._gsDefine.plugin({
                                propName: "roundProps",
                                version: "1.5",
                                priority: -1,
                                API: 2,
                                init: function(a, b, c) {
                                    return this._tween = c, !0
                                }
                            }),
                            b = function(a) {
                                for (; a;) a.f || a.blob || (a.r = 1), a = a._next
                            },
                            c = a.prototype;
                        c._onInitAllProps = function() {
                            for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1;) h[f[g]] = 1;
                            for (g = f.length; --g > -1;)
                                for (a = f[g], c = e._firstPT; c;) d = c._next, c.pg ? c.t._roundProps(h, !0) : c.n === a && (2 === c.f && c.t ? b(c.t._firstPT) : (this._add(c.t, a, c.s, c.c), d && (d._prev = c._prev), c._prev ? c._prev._next = d : e._firstPT === c && (e._firstPT = d), c._next = c._prev = null, e._propLookup[a] = i)), c = d;
                            return !1
                        }, c._add = function(a, b, c, d) {
                            this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b)
                        }
                    }(),
                    function() {
                        _gsScope._gsDefine.plugin({
                            propName: "attr",
                            API: 2,
                            version: "0.5.0",
                            init: function(a, b, c) {
                                var d;
                                if ("function" != typeof a.setAttribute) return !1;
                                for (d in b) this._addTween(a, "setAttribute", a.getAttribute(d) + "", b[d] + "", d, !1, d), this._overwriteProps.push(d);
                                return !0
                            }
                        })
                    }(), _gsScope._gsDefine.plugin({
                        propName: "directionalRotation",
                        version: "0.2.1",
                        API: 2,
                        init: function(a, b, c) {
                            "object" != typeof b && (b = {
                                rotation: b
                            }), this.finals = {};
                            var d, e, f, g, h, i, j = b.useRadians === !0 ? 2 * Math.PI : 360,
                                k = 1e-6;
                            for (d in b) "useRadians" !== d && (i = (b[d] + "").split("_"), e = i[0], f = parseFloat("function" != typeof a[d] ? a[d] : a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]()), g = this.finals[d] = "string" == typeof e && "=" === e.charAt(1) ? f + parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) : Number(e) || 0, h = g - f, i.length && (e = i.join("_"), -1 !== e.indexOf("short") && (h %= j, h !== h % (j / 2) && (h = 0 > h ? h + j : h - j)), -1 !== e.indexOf("_cw") && 0 > h ? h = (h + 9999999999 * j) % j - (h / j | 0) * j : -1 !== e.indexOf("ccw") && h > 0 && (h = (h - 9999999999 * j) % j - (h / j | 0) * j)), (h > k || -k > h) && (this._addTween(a, d, f, f + h, d), this._overwriteProps.push(d)));
                            return !0
                        },
                        set: function(a) {
                            var b;
                            if (1 !== a) this._super.setRatio.call(this, a);
                            else
                                for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                        }
                    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
                        var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope,
                            f = e.com.greensock,
                            g = 2 * Math.PI,
                            h = Math.PI / 2,
                            i = f._class,
                            j = function(b, c) {
                                var d = i("easing." + b, function() {}, !0),
                                    e = d.prototype = new a;
                                return e.constructor = d, e.getRatio = c, d
                            },
                            k = a.register || function() {},
                            l = function(a, b, c, d, e) {
                                var f = i("easing." + a, {
                                    easeOut: new b,
                                    easeIn: new c,
                                    easeInOut: new d
                                }, !0);
                                return k(f, a), f
                            },
                            m = function(a, b, c) {
                                this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                            },
                            n = function(b, c) {
                                var d = i("easing." + b, function(a) {
                                        this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                                    }, !0),
                                    e = d.prototype = new a;
                                return e.constructor = d, e.getRatio = c, e.config = function(a) {
                                    return new d(a)
                                }, d
                            },
                            o = l("Back", n("BackOut", function(a) {
                                return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                            }), n("BackIn", function(a) {
                                return a * a * ((this._p1 + 1) * a - this._p1)
                            }), n("BackInOut", function(a) {
                                return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                            })),
                            p = i("easing.SlowMo", function(a, b, c) {
                                b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
                            }, !0),
                            q = p.prototype = new a;
                        return q.constructor = p, q.getRatio = function(a) {
                            var b = a + (.5 - a) * this._p;
                            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                        }, p.ease = new p(.7, .7), q.config = p.config = function(a, b, c) {
                            return new p(a, b, c)
                        }, b = i("easing.SteppedEase", function(a) {
                            a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
                        }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function(a) {
                            return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
                        }, q.config = b.config = function(a) {
                            return new b(a)
                        }, c = i("easing.RoughEase", function(b) {
                            b = b || {};
                            for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                                x: c,
                                y: d
                            };
                            for (j.sort(function(a, b) {
                                    return a.x - b.x
                                }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
                            this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
                        }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function(a) {
                            var b = this._prev;
                            if (a > b.t) {
                                for (; b.next && a >= b.t;) b = b.next;
                                b = b.prev
                            } else
                                for (; b.prev && a <= b.t;) b = b.prev;
                            return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                        }, q.config = function(a) {
                            return new c(a)
                        }, c.ease = new c, l("Bounce", j("BounceOut", function(a) {
                            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                        }), j("BounceIn", function(a) {
                            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                        }), j("BounceInOut", function(a) {
                            var b = .5 > a;
                            return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
                        })), l("Circ", j("CircOut", function(a) {
                            return Math.sqrt(1 - (a -= 1) * a)
                        }), j("CircIn", function(a) {
                            return -(Math.sqrt(1 - a * a) - 1)
                        }), j("CircInOut", function(a) {
                            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                        })), d = function(b, c, d) {
                            var e = i("easing." + b, function(a, b) {
                                    this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0), this._p2 = g / this._p2
                                }, !0),
                                f = e.prototype = new a;
                            return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                                return new e(a, b)
                            }, e
                        }, l("Elastic", d("ElasticOut", function(a) {
                            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
                        }, .3), d("ElasticIn", function(a) {
                            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
                        }, .3), d("ElasticInOut", function(a) {
                            return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
                        }, .45)), l("Expo", j("ExpoOut", function(a) {
                            return 1 - Math.pow(2, -10 * a)
                        }), j("ExpoIn", function(a) {
                            return Math.pow(2, 10 * (a - 1)) - .001
                        }), j("ExpoInOut", function(a) {
                            return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                        })), l("Sine", j("SineOut", function(a) {
                            return Math.sin(a * h)
                        }), j("SineIn", function(a) {
                            return -Math.cos(a * h) + 1
                        }), j("SineInOut", function(a) {
                            return -.5 * (Math.cos(Math.PI * a) - 1)
                        })), i("easing.EaseLookup", {
                            find: function(b) {
                                return a.map[b]
                            }
                        }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
                    }, !0)
            }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
            function(a, b) {
                "use strict";
                var c = {},
                    d = a.GreenSockGlobals = a.GreenSockGlobals || a;
                if (!d.TweenLite) {
                    var e, f, g, h, i, j = function(a) {
                            var b, c = a.split("."),
                                e = d;
                            for (b = 0; b < c.length; b++) e[c[b]] = e = e[c[b]] || {};
                            return e
                        },
                        k = j("com.greensock"),
                        l = 1e-10,
                        m = function(a) {
                            var b, c = [],
                                d = a.length;
                            for (b = 0; b !== d; c.push(a[b++]));
                            return c
                        },
                        n = function() {},
                        o = function() {
                            var a = Object.prototype.toString,
                                b = a.call([]);
                            return function(c) {
                                return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                            }
                        }(),
                        p = {},
                        q = function(e, f, g, h) {
                            this.sc = p[e] ? p[e].sc : [], p[e] = this, this.gsClass = null, this.func = g;
                            var i = [];
                            this.check = function(k) {
                                for (var l, m, n, o, r, s = f.length, t = s; --s > -1;)(l = p[f[s]] || new q(f[s], [])).gsClass ? (i[s] = l.gsClass, t--) : k && l.sc.push(this);
                                if (0 === t && g) {
                                    if (m = ("com.greensock." + e).split("."), n = m.pop(), o = j(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
                                        if (d[n] = o, r = "undefined" != typeof module && module.exports, r || 0 || !__webpack_require__(7)) {
                                            if (r)
                                                if (e === b) {
                                                    module.exports = c[b] = o;
                                                    for (s in c) o[s] = c[s]
                                                } else c[b] && (c[b][n] = o)
                                        } else __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                                            return o
                                        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                                    for (s = 0; s < this.sc.length; s++) this.sc[s].check()
                                }
                            }, this.check(!0)
                        },
                        r = a._gsDefine = function(a, b, c, d) {
                            return new q(a, b, c, d)
                        },
                        s = k._class = function(a, b, c) {
                            return b = b || function() {}, r(a, [], function() {
                                return b
                            }, c), b
                        };
                    r.globals = d;
                    var t = [0, 0, 1, 1],
                        u = [],
                        v = s("easing.Ease", function(a, b, c, d) {
                            this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? t.concat(b) : t
                        }, !0),
                        w = v.map = {},
                        x = v.register = function(a, b, c, d) {
                            for (var e, f, g, h, i = b.split(","), j = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                                for (f = i[j], e = d ? s("easing." + f, null, !0) : k.easing[f] || {}, g = l.length; --g > -1;) h = l[g], w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a
                        };
                    for (g = v.prototype, g._calcEnd = !1, g.getRatio = function(a) {
                            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                            var b = this._type,
                                c = this._power,
                                d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
                        }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], f = e.length; --f > -1;) g = e[f] + ",Power" + f, x(new v(null, null, 1, f), g, "easeOut", !0), x(new v(null, null, 2, f), g, "easeIn" + (0 === f ? ",easeNone" : "")), x(new v(null, null, 3, f), g, "easeInOut");
                    w.linear = k.easing.Linear.easeIn, w.swing = k.easing.Quad.easeInOut;
                    var y = s("events.EventDispatcher", function(a) {
                        this._listeners = {}, this._eventTarget = a || this
                    });
                    g = y.prototype, g.addEventListener = function(a, b, c, d, e) {
                        e = e || 0;
                        var f, g, j = this._listeners[a],
                            k = 0;
                        for (this !== h || i || h.wake(), null == j && (this._listeners[a] = j = []), g = j.length; --g > -1;) f = j[g], f.c === b && f.s === c ? j.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
                        j.splice(k, 0, {
                            c: b,
                            s: c,
                            up: d,
                            pr: e
                        })
                    }, g.removeEventListener = function(a, b) {
                        var c, d = this._listeners[a];
                        if (d)
                            for (c = d.length; --c > -1;)
                                if (d[c].c === b) return void d.splice(c, 1)
                    }, g.dispatchEvent = function(a) {
                        var b, c, d, e = this._listeners[a];
                        if (e)
                            for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
                                type: a,
                                target: c
                            }) : d.c.call(d.s || c))
                    };
                    var z = a.requestAnimationFrame,
                        A = a.cancelAnimationFrame,
                        B = Date.now || function() {
                            return (new Date).getTime()
                        },
                        C = B();
                    for (e = ["ms", "moz", "webkit", "o"], f = e.length; --f > -1 && !z;) z = a[e[f] + "RequestAnimationFrame"], A = a[e[f] + "CancelAnimationFrame"] || a[e[f] + "CancelRequestAnimationFrame"];
                    s("Ticker", function(a, b) {
                        var c, d, e, f, g, j = this,
                            k = B(),
                            m = !(b === !1 || !z) && "auto",
                            o = 500,
                            p = 33,
                            q = "tick",
                            r = function(a) {
                                var b, h, i = B() - C;
                                i > o && (k += i - p), C += i, j.time = (C - k) / 1e3, b = j.time - g, (!c || b > 0 || a === !0) && (j.frame++, g += b + (b >= f ? .004 : f - b), h = !0), a !== !0 && (e = d(r)), h && j.dispatchEvent(q)
                            };
                        y.call(j), j.time = j.frame = 0, j.tick = function() {
                            r(!0)
                        }, j.lagSmoothing = function(a, b) {
                            o = a || 1 / l, p = Math.min(b, o, 0)
                        }, j.sleep = function() {
                            null != e && (m && A ? A(e) : clearTimeout(e), d = n, e = null, j === h && (i = !1))
                        }, j.wake = function(a) {
                            null !== e ? j.sleep() : a ? k += -C + (C = B()) : j.frame > 10 && (C = B() - o + 5), d = 0 === c ? n : m && z ? z : function(a) {
                                return setTimeout(a, 1e3 * (g - j.time) + 1 | 0)
                            }, j === h && (i = !0), r(2)
                        }, j.fps = function(a) {
                            return arguments.length ? (c = a, f = 1 / (c || 60), g = this.time + f, void j.wake()) : c
                        }, j.useRAF = function(a) {
                            return arguments.length ? (j.sleep(), m = a, void j.fps(c)) : m
                        }, j.fps(a), setTimeout(function() {
                            "auto" === m && j.frame < 5 && "hidden" !== document.visibilityState && j.useRAF(!1)
                        }, 1500)
                    }), g = k.Ticker.prototype = new k.events.EventDispatcher, g.constructor = k.Ticker;
                    var D = s("core.Animation", function(a, b) {
                        if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, W) {
                            i || h.wake();
                            var c = this.vars.useFrames ? V : W;
                            c.add(this, c._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    h = D.ticker = new k.Ticker, g = D.prototype, g._dirty = g._gc = g._initted = g._paused = !1, g._totalTime = g._time = 0, g._rawPrevTime = -1, g._next = g._last = g._onUpdate = g._timeline = g.timeline = null, g._paused = !1;
                    var E = function() {
                        i && B() - C > 2e3 && h.wake(), setTimeout(E, 2e3)
                    };
                    E(), g.play = function(a, b) {
                        return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
                    }, g.pause = function(a, b) {
                        return null != a && this.seek(a, b), this.paused(!0)
                    }, g.resume = function(a, b) {
                        return null != a && this.seek(a, b), this.paused(!1)
                    }, g.seek = function(a, b) {
                        return this.totalTime(Number(a), b !== !1)
                    }, g.restart = function(a, b) {
                        return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
                    }, g.reverse = function(a, b) {
                        return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
                    }, g.render = function(a, b, c) {}, g.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
                    }, g.isActive = function() {
                        var a, b = this._timeline,
                            c = this._startTime;
                        return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale
                    }, g._enabled = function(a, b) {
                        return i || h.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
                    }, g._kill = function(a, b) {
                        return this._enabled(!1, !1)
                    }, g.kill = function(a, b) {
                        return this._kill(a, b), this
                    }, g._uncache = function(a) {
                        for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
                        return this
                    }, g._swapSelfInParams = function(a) {
                        for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
                        return c
                    }, g._callback = function(a) {
                        var b = this.vars;
                        b[a].apply(b[a + "Scope"] || b.callbackScope || this, b[a + "Params"] || u)
                    }, g.eventCallback = function(a, b, c, d) {
                        if ("on" === (a || "").substr(0, 2)) {
                            var e = this.vars;
                            if (1 === arguments.length) return e[a];
                            null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = o(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
                        }
                        return this
                    }, g.delay = function(a) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
                    }, g.duration = function(a) {
                        return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, g.totalDuration = function(a) {
                        return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
                    }, g.time = function(a, b) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
                    }, g.totalTime = function(a, b, c) {
                        if (i || h.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var d = this._totalDuration,
                                    e = this._timeline;
                                if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                                    for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                            }
                            this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Y(), this.render(a, b, !1), J.length && Y())
                        }
                        return this
                    }, g.progress = g.totalProgress = function(a, b) {
                        var c = this.duration();
                        return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
                    }, g.startTime = function(a) {
                        return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
                    }, g.endTime = function(a) {
                        return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
                    }, g.timeScale = function(a) {
                        if (!arguments.length) return this._timeScale;
                        if (a = a || l, this._timeline && this._timeline.smoothChildTiming) {
                            var b = this._pauseTime,
                                c = b || 0 === b ? b : this._timeline.totalTime();
                            this._startTime = c - (c - this._startTime) * this._timeScale / a
                        }
                        return this._timeScale = a, this._uncache(!1)
                    }, g.reversed = function(a) {
                        return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, g.paused = function(a) {
                        if (!arguments.length) return this._paused;
                        var b, c, d = this._timeline;
                        return a != this._paused && d && (i || a || h.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
                    };
                    var F = s("core.SimpleTimeline", function(a) {
                        D.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    g = F.prototype = new D, g.constructor = F, g.kill()._gc = !1, g._first = g._last = g._recent = null, g._sortChildren = !1, g.add = g.insert = function(a, b, c, d) {
                        var e, f;
                        if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                            for (f = a._startTime; e && e._startTime > f;) e = e._prev;
                        return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
                    }, g._remove = function(a, b) {
                        return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, g.render = function(a, b, c) {
                        var d, e = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
                    }, g.rawTime = function() {
                        return i || h.wake(), this._totalTime
                    };
                    var G = s("TweenLite", function(b, c, d) {
                            if (D.call(this, c, d), this.render = G.prototype.render, null == b) throw "Cannot tween a null target.";
                            this.target = b = "string" != typeof b ? b : G.selector(b) || b;
                            var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                                i = this.vars.overwrite;
                            if (this._overwrite = i = null == i ? U[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : U[i], (h || b instanceof Array || b.push && o(b)) && "number" != typeof b[0])
                                for (this._targets = g = m(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(m(f))) : (this._siblings[e] = Z(f, this, !1), 1 === i && this._siblings[e].length > 1 && _(f, this, null, 1, this._siblings[e])) : (f = g[e--] = G.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                            else this._propLookup = {}, this._siblings = Z(b, this, !1), 1 === i && this._siblings.length > 1 && _(b, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -l, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        H = function(b) {
                            return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
                        },
                        I = function(a, b) {
                            var c, d = {};
                            for (c in a) T[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!Q[c] || Q[c] && Q[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                            a.css = d
                        };
                    g = G.prototype = new D, g.constructor = G, g.kill()._gc = !1, g.ratio = 0, g._firstPT = g._targets = g._overwrittenProps = g._startAt = null, g._notifyPluginsOfEnabled = g._lazy = !1, G.version = "1.18.5", G.defaultEase = g._ease = new v(null, null, 1, 1), G.defaultOverwrite = "auto", G.ticker = h, G.autoSleep = 120, G.lagSmoothing = function(a, b) {
                        h.lagSmoothing(a, b)
                    }, G.selector = a.$ || a.jQuery || function(b) {
                        var c = a.$ || a.jQuery;
                        return c ? (G.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
                    };
                    var J = [],
                        K = {},
                        L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        M = function(a) {
                            for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s, c.r ? b = Math.round(b) : d > b && b > -d && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
                        },
                        N = function(a, b, c, d) {
                            var e, f, g, h, i, j, k, l = [a, b],
                                m = 0,
                                n = "",
                                o = 0;
                            for (l.start = a, c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(L) || [], f = b.match(L) || [], d && (d._next = null, d.blob = 1, l._firstPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
                                _next: l._firstPT,
                                t: l,
                                p: l.length - 1,
                                s: g,
                                c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                                f: 0,
                                r: o && 4 > o
                            }), m += k.length;
                            return n += b.substr(m), n && l.push(n), l.setRatio = M, l
                        },
                        O = function(a, b, c, d, e, f, g, h) {
                            var i, j, k = "get" === c ? a[b] : c,
                                l = typeof a[b],
                                m = "string" == typeof d && "=" === d.charAt(1),
                                n = {
                                    t: a,
                                    p: b,
                                    s: k,
                                    f: "function" === l,
                                    pg: 0,
                                    n: e || b,
                                    r: f,
                                    pr: 0,
                                    c: m ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - k || 0
                                };
                            return "number" !== l && ("function" === l && "get" === c && (j = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), n.s = k = g ? a[j](g) : a[j]()), "string" == typeof k && (g || isNaN(k)) ? (n.fp = g, i = N(k, d, h || G.defaultStringFilter, n), n = {
                                t: i,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 2,
                                pg: 0,
                                n: e || b,
                                pr: 0
                            }) : m || (n.s = parseFloat(k), n.c = parseFloat(d) - n.s || 0)), n.c ? ((n._next = this._firstPT) && (n._next._prev = n), this._firstPT = n, n) : void 0
                        },
                        P = G._internals = {
                            isArray: o,
                            isSelector: H,
                            lazyTweens: J,
                            blobDif: N
                        },
                        Q = G._plugins = {},
                        R = P.tweenLookup = {},
                        S = 0,
                        T = P.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1
                        },
                        U = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            "true": 1,
                            "false": 0
                        },
                        V = D._rootFramesTimeline = new F,
                        W = D._rootTimeline = new F,
                        X = 30,
                        Y = P.lazyRender = function() {
                            var a, b = J.length;
                            for (K = {}; --b > -1;) a = J[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                            J.length = 0
                        };
                    W._startTime = h.time, V._startTime = h.frame, W._active = V._active = !0, setTimeout(Y, 1), D._updateRoot = G.render = function() {
                        var a, b, c;
                        if (J.length && Y(), W.render((h.time - W._startTime) * W._timeScale, !1, !1), V.render((h.frame - V._startTime) * V._timeScale, !1, !1), J.length && Y(), h.frame >= X) {
                            X = h.frame + (parseInt(G.autoSleep, 10) || 120);
                            for (c in R) {
                                for (b = R[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                                0 === b.length && delete R[c]
                            }
                            if (c = W._first, (!c || c._paused) && G.autoSleep && !V._first && 1 === h._listeners.tick.length) {
                                for (; c && c._paused;) c = c._next;
                                c || h.sleep()
                            }
                        }
                    }, h.addEventListener("tick", D._updateRoot);
                    var Z = function(a, b, c) {
                            var d, e, f = a._gsTweenID;
                            if (R[f || (a._gsTweenID = f = "t" + S++)] || (R[f] = {
                                    target: a,
                                    tweens: []
                                }), b && (d = R[f].tweens, d[e = d.length] = b, c))
                                for (; --e > -1;) d[e] === b && d.splice(e, 1);
                            return R[f].tweens
                        },
                        $ = function(a, b, c, d) {
                            var e, f, g = a.vars.onOverwrite;
                            return g && (e = g(a, b, c, d)), g = G.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
                        },
                        _ = function(a, b, c, d, e) {
                            var f, g, h, i;
                            if (1 === d || d >= 4) {
                                for (i = e.length, f = 0; i > f; f++)
                                    if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                                    else if (5 === d) break;
                                return g
                            }
                            var j, k = b._startTime + l,
                                m = [],
                                n = 0,
                                o = 0 === b._duration;
                            for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || aa(b, 0, o), 0 === aa(h, j, o) && (m[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (m[n++] = h)));
                            for (f = n; --f > -1;)
                                if (h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                                    if (2 !== d && !$(h, b)) continue;
                                    h._enabled(!1, !1) && (g = !0)
                                }
                            return g
                        },
                        aa = function(a, b, c) {
                            for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                                if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                                d = d._timeline
                            }
                            return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * l > f - b ? l : (f += a.totalDuration() / a._timeScale / e) > b + l ? 0 : f - b - l
                        };
                    g._init = function() {
                        var a, b, c, d, e, f = this.vars,
                            g = this._overwrittenProps,
                            h = this._duration,
                            i = !!f.immediateRender,
                            j = f.ease;
                        if (f.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                            for (d in f.startAt) e[d] = f.startAt[d];
                            if (e.overwrite = !1, e.immediateRender = !0, e.lazy = i && f.lazy !== !1, e.startAt = e.delay = null, this._startAt = G.to(this.target, 0, e), i)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== h) return
                        } else if (f.runBackwards && 0 !== h)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                0 !== this._time && (i = !1), c = {};
                                for (d in f) T[d] && "autoCSS" !== d || (c[d] = f[d]);
                                if (c.overwrite = 0, c.data = "isFromStart", c.lazy = i && f.lazy !== !1, c.immediateRender = i, this._startAt = G.to(this.target, 0, c), i) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            }
                        if (this._ease = j = j ? j instanceof v ? j : "function" == typeof j ? new v(j, f.easeParams) : w[j] || G.defaultEase : G.defaultEase, f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0);
                        else b = this._initProps(this.target, this._propLookup, this._siblings, g);
                        if (b && G._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), f.runBackwards)
                            for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                        this._onUpdate = f.onUpdate, this._initted = !0
                    }, g._initProps = function(b, c, d, e) {
                        var f, g, h, i, j, k;
                        if (null == b) return !1;
                        K[b._gsTweenID] && Y(), this.vars.css || b.style && b !== a && b.nodeType && Q.css && this.vars.autoCSS !== !1 && I(this.vars, b);
                        for (f in this.vars)
                            if (k = this.vars[f], T[f]) k && (k instanceof Array || k.push && o(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                            else if (Q[f] && (i = new Q[f])._onInitTween(b, this.vars[f], this)) {
                            for (this._firstPT = j = {
                                    _next: this._firstPT,
                                    t: i,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: f,
                                    pg: 1,
                                    pr: i._priority
                                }, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
                            (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0), j._next && (j._next._prev = j)
                        } else c[f] = O.call(this, b, f, "get", k, f, 0, null, this.vars.stringFilter);
                        return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && _(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0), h)
                    }, g.render = function(a, b, c) {
                        var d, e, f, g, h = this._time,
                            i = this._duration,
                            j = this._rawPrevTime;
                        if (a >= i - 1e-7) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === l && "isPause" !== this.data) && j !== a && (c = !0, j > l && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : l);
                        else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== l || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : l)), this._initted || (c = !0);
                        else if (this._totalTime = this._time = a, this._easeType) {
                            var k = a / i,
                                m = this._easeType,
                                n = this._easePower;
                            (1 === m || 3 === m && k >= .5) && (k = 1 - k), 3 === m && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === m ? this.ratio = 1 - k : 2 === m ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2
                        } else this.ratio = this._ease.getRatio(a / i);
                        if (this._time !== h || c) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, J.push(this), void(this._lazy = [a, b]);
                                this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                            this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === l && g !== l && (this._rawPrevTime = 0))
                        }
                    }, g._kill = function(a, b, c) {
                        if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
                        var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
                        if ((o(b) || H(b)) && "number" != typeof b[0])
                            for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
                        else {
                            if (this._targets) {
                                for (d = this._targets.length; --d > -1;)
                                    if (b === this._targets[d]) {
                                        h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                                        break
                                    }
                            } else {
                                if (b !== this.target) return !1;
                                h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                            }
                            if (h) {
                                if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (G.onOverwrite || this.vars.onOverwrite)) {
                                    for (f in j) h[f] && (l || (l = []), l.push(f));
                                    if ((l || !a) && !$(this, c, b, l)) return !1
                                }
                                for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return i
                    }, g.invalidate = function() {
                        return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -l, this.render(Math.min(0, -this._delay))), this
                    }, g._enabled = function(a, b) {
                        if (i || h.wake(), a && this._gc) {
                            var c, d = this._targets;
                            if (d)
                                for (c = d.length; --c > -1;) this._siblings[c] = Z(d[c], this, !0);
                            else this._siblings = Z(this.target, this, !0)
                        }
                        return D.prototype._enabled.call(this, a, b), !(!this._notifyPluginsOfEnabled || !this._firstPT) && G._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
                    }, G.to = function(a, b, c) {
                        return new G(a, b, c)
                    }, G.from = function(a, b, c) {
                        return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new G(a, b, c)
                    }, G.fromTo = function(a, b, c, d) {
                        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new G(a, b, d)
                    }, G.delayedCall = function(a, b, c, d, e) {
                        return new G(b, 0, {
                            delay: a,
                            onComplete: b,
                            onCompleteParams: c,
                            callbackScope: d,
                            onReverseComplete: b,
                            onReverseCompleteParams: c,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: e,
                            overwrite: 0
                        })
                    }, G.set = function(a, b) {
                        return new G(a, 0, b)
                    }, G.getTweensOf = function(a, b) {
                        if (null == a) return [];
                        a = "string" != typeof a ? a : G.selector(a) || a;
                        var c, d, e, f;
                        if ((o(a) || H(a)) && "number" != typeof a[0]) {
                            for (c = a.length, d = []; --c > -1;) d = d.concat(G.getTweensOf(a[c], b));
                            for (c = d.length; --c > -1;)
                                for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
                        } else
                            for (d = Z(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                        return d
                    }, G.killTweensOf = G.killDelayedCallsTo = function(a, b, c) {
                        "object" == typeof b && (c = b, b = !1);
                        for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
                    };
                    var ba = s("plugins.TweenPlugin", function(a, b) {
                        this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ba.prototype
                    }, !0);
                    if (g = ba.prototype, ba.version = "1.18.0", ba.API = 2, g._firstPT = null, g._addTween = O, g.setRatio = M, g._kill = function(a) {
                            var b, c = this._overwriteProps,
                                d = this._firstPT;
                            if (null != a[this._propName]) this._overwriteProps = [];
                            else
                                for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                            for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                            return !1
                        }, g._roundProps = function(a, b) {
                            for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
                        }, G._onPluginEvent = function(a, b) {
                            var c, d, e, f, g, h = b._firstPT;
                            if ("_onInitAllProps" === a) {
                                for (; h;) {
                                    for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                                    (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                                }
                                h = b._firstPT = e
                            }
                            for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                            return c
                        }, ba.activate = function(a) {
                            for (var b = a.length; --b > -1;) a[b].API === ba.API && (Q[(new a[b])._propName] = a[b]);
                            return !0
                        }, r.plugin = function(a) {
                            if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                            var b, c = a.propName,
                                d = a.priority || 0,
                                e = a.overwriteProps,
                                f = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_roundProps",
                                    initAll: "_onInitAllProps"
                                },
                                g = s("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                                    ba.call(this, c, d), this._overwriteProps = e || []
                                }, a.global === !0),
                                h = g.prototype = new ba(c);
                            h.constructor = g, g.API = a.API;
                            for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                            return g.version = a.version, ba.activate([g]), g
                        }, e = a._gsQueue) {
                        for (f = 0; f < e.length; f++) e[f]();
                        for (g in p) p[g].func || a.console.log("GSAP encountered missing dependency: com.greensock." + g)
                    }
                    i = !1
                }
            }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax")
    }).call(exports, function() {
        return this
    }())
}, function(module, exports, __webpack_require__) {
    (function(setImmediate, clearImmediate) {
        function Timeout(id, clearFn) {
            this._id = id, this._clearFn = clearFn
        }
        var nextTick = __webpack_require__(8).nextTick,
            apply = Function.prototype.apply,
            slice = Array.prototype.slice,
            immediateIds = {},
            nextImmediateId = 0;
        exports.setTimeout = function() {
            return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout)
        }, exports.setInterval = function() {
            return new Timeout(apply.call(setInterval, window, arguments), clearInterval)
        }, exports.clearTimeout = exports.clearInterval = function(timeout) {
            timeout.close()
        }, Timeout.prototype.unref = Timeout.prototype.ref = function() {}, Timeout.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }, exports.enroll = function(item, msecs) {
            clearTimeout(item._idleTimeoutId), item._idleTimeout = msecs
        }, exports.unenroll = function(item) {
            clearTimeout(item._idleTimeoutId), item._idleTimeout = -1
        }, exports._unrefActive = exports.active = function(item) {
            clearTimeout(item._idleTimeoutId);
            var msecs = item._idleTimeout;
            msecs >= 0 && (item._idleTimeoutId = setTimeout(function() {
                item._onTimeout && item._onTimeout()
            }, msecs))
        }, exports.setImmediate = "function" == typeof setImmediate ? setImmediate : function(fn) {
            var id = nextImmediateId++,
                args = !(arguments.length < 2) && slice.call(arguments, 1);
            return immediateIds[id] = !0, nextTick(function() {
                immediateIds[id] && (args ? fn.apply(null, args) : fn.call(null), exports.clearImmediate(id))
            }), id
        }, exports.clearImmediate = "function" == typeof clearImmediate ? clearImmediate : function(id) {
            delete immediateIds[id]
        }
    }).call(exports, __webpack_require__(3).setImmediate, __webpack_require__(3).clearImmediate)
}, function(module, exports, __webpack_require__) {
    "use strict";
    var $ = __webpack_require__(1),
        mixpanel = __webpack_require__(34),
        mixpanelID = $("meta[name=mpID]").attr("content"),
        api = {
            setAppId: function(id) {
                if (!("string" == typeof id && id.length > 0)) throw new Error("Invalid mixpanel App ID.");
                mixpanel.init(id)
            },
            track: function(trackingCode, properties, cb) {
                mixpanel.track(trackingCode, properties, cb)
            },
            sendReminderEmail: function(yourName, theirName, email, subscribe, cb) {
                var nameParts = theirName.split(" "),
                    lastName = nameParts > 1 ? nameParts.pop() : "",
                    firstName = nameParts.join(" ");
                email = email.toLowerCase(), mixpanel.identify(email), mixpanel.people.set({
                    $first_name: firstName,
                    $last_name: lastName,
                    $email: email,
                    subscribeToNewsletter: subscribe,
                    invitedBy: yourName
                }), this.track("payprReminder", null, cb), mixpanel.reset()
            },
            blogSignup: function(name, email, cb) {
                var nameParts = name.split(" "),
                    lastName = nameParts > 1 ? nameParts.pop() : "",
                    firstName = nameParts.join(" ");
                email = email.toLowerCase(), mixpanel.identify(email), mixpanel.people.set({
                    $first_name: firstName,
                    $last_name: lastName,
                    $email: email,
                    subscribeToNewsletter: !0
                }), this.track("newsletterSubscription", null, cb), mixpanel.reset()
            }
        };
    api.setAppId(mixpanelID), module.exports = api
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
    }
    var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
            }
        }(),
        $ = __webpack_require__(1),
        GifishScene = function() {
            function GifishScene($el) {
                _classCallCheck(this, GifishScene), this.$container = $el, this.animations = [], this.delay = 800, this.timeout;
                var self = this;
                this.$container.find("[data-animate]").each(function(index, el) {
                    var $el = $(el);
                    self.animations.push(new Gifish($el))
                }), this.reset()
            }
            return _createClass(GifishScene, [{
                key: "reset",
                value: function() {
                    this.animations.forEach(function(animation) {
                        animation.reset()
                    })
                }
            }, {
                key: "play",
                value: function() {
                    this.reset();
                    var self = this;
                    this.timeout = setTimeout(function() {
                        self.animations.forEach(function(animation) {
                            animation.play()
                        })
                    }, this.delay)
                }
            }, {
                key: "pause",
                value: function() {
                    this.t && clearTimeout(t), this.animations.forEach(function(animation) {
                        animation.pause()
                    })
                }
            }]), GifishScene
        }(),
        Gifish = function() {
            function Gifish($el) {
                _classCallCheck(this, Gifish), this.$container = $el, this.$images = $el.children(), this.frameCount = this.$images.length, this.duration = parseInt($el.attr("data-duration")), this.offset = parseInt($el.attr("data-offset")) || 0, this.once = !!$el.attr("data-once"), this.interval = this.duration / this.frameCount, this.playing = !1, this.start, this.frame, this.timeout, this.preload()
            }
            return _createClass(Gifish, [{
                key: "reset",
                value: function() {
                    this.$images.each(function(index, el) {
                        $(el).css({
                            visibility: 0 != index ? "hidden" : "visible"
                        })
                    })
                }
            }, {
                key: "preload",
                value: function() {
                    this.$images.each(function(index, el) {
                        var image = $(el).find("img");
                        if (image.length) {
                            var tmpImage = new Image;
                            tmpImage.src = image.attr("src")
                        }
                    })
                }
            }, {
                key: "play",
                value: function() {
                    var self = this;
                    this.timeout = setTimeout(function() {
                        self.playing = !0, self.start = Date.now(), self.loop()
                    }, self.offset)
                }
            }, {
                key: "pause",
                value: function() {
                    this.playing = !1, this.frame && cancelAnimationFrame(this.frame), this.timeout && clearTimeout(this.timeout)
                }
            }, {
                key: "loop",
                value: function() {
                    var self = this;
                    this.frame = requestAnimationFrame(function() {
                        var elapsed = Date.now() - self.start,
                            progress = elapsed % self.duration,
                            showIndex = Math.floor(progress / self.interval);
                        self.once && elapsed >= self.duration ? self.pause() : (self.$images.each(function(index, image) {
                            var $image = $(image);
                            $image.css({
                                visibility: index == showIndex ? "visible" : "hidden"
                            })
                        }), self.loop())
                    })
                }
            }]), Gifish
        }();
    module.exports = {
        GifishScene: GifishScene,
        Gifish: Gifish
    }
}, function(module, exports, __webpack_require__) {
    "use strict";

    function createScramble(selector, messages, timing, timing_per_letter_show, timing_per_letter_down, leftToRight) {
        function _progress() {
            _updateWord(current, word)
        }

        function _updateWord(index, word) {
            function _draw() {
                var count, substring;
                count = isDisplaying ? obj.length : obj.pathLength - obj.length, substring = leftToRight ? isDisplaying ? message.substring(Math.round(obj.pathLength - obj.length)) : message.substring(Math.round(obj.length)) : message.substring(0, Math.round(count)), word.innerHTML = substring
            }
            var message = messages[index],
                num_letter = message.length,
                duration = isDisplaying ? num_letter * timing_per_letter_show / 1e3 : num_letter * timing_per_letter_down / 1e3,
                obj = {
                    length: 0,
                    pathLength: num_letter
                },
                t = TweenLite.to(obj, duration, {
                    length: obj.pathLength,
                    onUpdate: _draw,
                    onComplete: function() {
                        isDisplaying = !isDisplaying, isDisplaying ? (current++, current %= messages.length, _progress()) : setTimeout(_progress, timing)
                    }
                });
            t.play()
        }
        timing = timing || 2500, timing_per_letter_down = timing_per_letter_down || 40, timing_per_letter_show = timing_per_letter_show || 100, leftToRight = leftToRight || !1;
        var word = document.querySelector(selector);
        if (null !== word && void 0 === instances[selector]) {
            var isDisplaying = !1,
                current = 0;
            instances[selector] = !0, setTimeout(_progress, timing)
        }
    }
    var TweenLite = (__webpack_require__(1), __webpack_require__(2)),
        instances = {};
    module.exports = createScramble
}, function(module, exports) {
    (function(__webpack_amd_options__) {
        module.exports = __webpack_amd_options__
    }).call(exports, {})
}, function(module, exports) {
    function cleanUpNextTick() {
        draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue())
    }

    function drainQueue() {
        if (!draining) {
            var timeout = cachedSetTimeout(cleanUpNextTick);
            draining = !0;
            for (var len = queue.length; len;) {
                for (currentQueue = queue, queue = []; ++queueIndex < len;) currentQueue && currentQueue[queueIndex].run();
                queueIndex = -1, len = queue.length
            }
            currentQueue = null, draining = !1, cachedClearTimeout(timeout)
        }
    }

    function Item(fun, array) {
        this.fun = fun, this.array = array
    }

    function noop() {}
    var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
    ! function() {
        try {
            cachedSetTimeout = setTimeout
        } catch (e) {
            cachedSetTimeout = function() {
                throw new Error("setTimeout is not defined")
            }
        }
        try {
            cachedClearTimeout = clearTimeout
        } catch (e) {
            cachedClearTimeout = function() {
                throw new Error("clearTimeout is not defined")
            }
        }
    }();
    var currentQueue, queue = [],
        draining = !1,
        queueIndex = -1;
    process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
        queue.push(new Item(fun, args)), 1 !== queue.length || draining || cachedSetTimeout(drainQueue, 0)
    }, Item.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, process.emit = noop, process.binding = function(name) {
        throw new Error("process.binding is not supported")
    }, process.cwd = function() {
        return "/"
    }, process.chdir = function(dir) {
        throw new Error("process.chdir is not supported")
    }, process.umask = function() {
        return 0
    }
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }
    var _jquery = __webpack_require__(1),
        _jquery2 = _interopRequireDefault(_jquery),
        _pngFrame = __webpack_require__(5),
        _pngFrame2 = _interopRequireDefault(_pngFrame);
    __webpack_require__(32);
    var ipadW = 1024,
        isFeaturesPage = (0, _jquery2["default"])("body").hasClass("is-features-page");
    if (isFeaturesPage) {
        var enabled, scenes, scenesByName, scenesByIndex, mouseVal, canScroll, threshold, timeout, currentScene, toScene, sceneCount, touchStartPos, sceneTimeLengths, bottomScrollVal, $bottomEl, $scrollContainer, bh, bodyW, ignoreHashChange;
        ! function() {
            var scrollTimeout = function(dir) {
                    clearTimeout(timeout), timeout = setTimeout(function() {
                        setTimeout(function() {
                            canScroll = !0, checkPosition()
                        }, 100 * sceneTimeLengths[currentScene]), mouseVal = 0
                    }, 900)
                },
                setSceneFromHash = function() {
                    if (ignoreHashChange) return void(ignoreHashChange = !1);
                    var sceneName = window.location.hash.substr(1),
                        sceneNumber = scenesByName[sceneName];
                    sceneNumber && !isNaN(sceneNumber) && sceneNumber >= 0 && sceneNumber < sceneCount && setScene(sceneNumber)
                },
                sceneChange = function(val) {
                    currentScene += val, (0, _jquery2["default"])(".stages-fixed").html("stage: " + currentScene);
                    for (var classStr = val > 0 ? "forwards " : "backwards ", i = -1; i < currentScene; i++) classStr += "stage-" + (i + 1) + " ";
                    (0, _jquery2["default"])("#stageWrap").attr("class", classStr);
                    var sceneIndex = currentScene - 1,
                        oldIndex = sceneIndex - val;
                    oldIndex in scenes && scenes[oldIndex].pause(), sceneIndex in scenes && scenes[sceneIndex].play()
                },
                checkPosition = function() {
                    if (currentScene != toScene) {
                        var diff = toScene - currentScene;
                        canScroll = !1, sceneChange(diff), scrollTimeout(diff), ignoreHashChange = !0, window.location.hash = scenesByIndex[toScene] ? scenesByIndex[toScene] : ""
                    }
                },
                setScene = function(i) {
                    var time = 0;
                    toScene = i === currentScene ? i + 1 : i, 0 !== bottomScrollVal && (bottomScrollVal = 0, canScroll = !1, setTimeout(function() {
                        canScroll = !0, $scrollContainer.attr("style", "")
                    }, 800), mouseVal = 0, TweenMax.to($bottomEl, .5, {
                        y: bottomScrollVal
                    }), TweenMax.to($scrollContainer, .5, {
                        y: bottomScrollVal
                    }), time = 500), setTimeout(checkPosition, time)
                };
            enabled = (0, _jquery2["default"])("body").width() > ipadW, scenes = [], scenesByName = {}, scenesByIndex = {}, (0, _jquery2["default"])("[data-scene]").each(function(index, el) {
                    var $el = (0, _jquery2["default"])(el);
                    scenes.push(new _pngFrame2["default"].GifishScene($el)), scenesByName[$el.data("scene-name")] = parseInt($el.data("scene"), 10), scenesByIndex[parseInt($el.data("scene"), 10)] = $el.data("scene-name")
                }), mouseVal = 0, canScroll = !0, threshold = 50, currentScene = 0, toScene = 0, sceneCount = scenes.length, touchStartPos = 0, sceneTimeLengths = [0, 2, 2, 2, 3, 2, 2, 2, 2, 2], bottomScrollVal = 0, $bottomEl = (0, _jquery2["default"])(".bottom-el"), $scrollContainer = (0, _jquery2["default"])(".ft-scroll-container"), bh = 0, bodyW = (0, _jquery2["default"])("body").width(), ignoreHashChange = !1, (0, _jquery2["default"])(window).on("load resize", function() {
                    bh = $bottomEl.height(), bodyW = (0, _jquery2["default"])("body").width(), enabled = !(bodyW <= ipadW)
                }), setSceneFromHash(), (0, _jquery2["default"])(window).on("hashchange", function() {
                    setSceneFromHash()
                }), (0, _jquery2["default"])(window).on("mousewheel", function(e) {
                    if (enabled) {
                        e.preventDefault();
                        var shiftDir;
                        if (!canScroll) return;
                        if (mouseVal += e.deltaY * e.deltaFactor * -1, 0 == e.deltaY) return;
                        if (e.deltaY > 0 && bottomScrollVal < 0 && 10 == currentScene || e.deltaY < 0 && 10 == currentScene && bottomScrollVal < 1) return bottomScrollVal += e.deltaY * e.deltaFactor, bottomScrollVal = Math.max(bottomScrollVal, -bh), TweenMax.set($bottomEl, {
                            y: bottomScrollVal
                        }), void TweenMax.set($scrollContainer, {
                            y: bottomScrollVal
                        });
                        if (0 !== bottomScrollVal) return bottomScrollVal = 0, canScroll = !1, setTimeout(function() {
                            canScroll = !0
                        }, 500), mouseVal = 0, TweenMax.set($bottomEl, {
                            y: bottomScrollVal
                        }), TweenMax.set($scrollContainer, {
                            y: bottomScrollVal
                        }), void $scrollContainer.attr("style", "");
                        if (mouseVal > threshold) shiftDir = 1;
                        else {
                            if (!(Math.abs(mouseVal) > threshold)) return;
                            shiftDir = -1
                        }
                        toScene += shiftDir, toScene = Math.max(0, Math.min(toScene, sceneCount - 1)), checkPosition()
                    }
                }), (0, _jquery2["default"])(".ft-nav li").on("click", function() {
                    var i = (0, _jquery2["default"])(this).index();
                    setScene(i + 1)
                }), (0, _jquery2["default"])(".ft-nav__arrow.-right").on("click", function(e) {
                    e.preventDefault(), currentScene !== sceneCount - 1 && setScene(currentScene)
                }), (0, _jquery2["default"])(".ft-nav__arrow.-left").on("click", function(e) {
                    e.preventDefault(), 0 !== currentScene && setScene(currentScene - 1)
                }), (0, _jquery2["default"])(".ft-explore-features").on("click", function(e) {
                    e.preventDefault(), 0 === currentScene && setScene(currentScene)
                }),
                function() {
                    function touchStart(e) {
                        if (enabled && !(0, _jquery2["default"])(e.target).is("a, button"))
                            if (touchStarted = !0, touchStartTime = (new Date).getTime(), e.originalEvent.changedTouches) {
                                var touch = e.originalEvent.changedTouches[0];
                                touchStartX = touch.pageX, touchStartY = touch.pageY
                            } else touchStartX = e.pageX, touchStartY = e.pageY
                    }

                    function touchEnd(e) {
                        if (touchStarted) {
                            var touch = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0] : {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                },
                                distX = touch.pageX - touchStartX,
                                distY = touch.pageY - touchStartY,
                                elapsedTime = (new Date).getTime() - touchStartTime,
                                swipedir = "none";
                            if (elapsedTime <= allowedSwipeTime && (Math.abs(distX) >= touchDistanceThreshold && Math.abs(distY) <= touchRestraint ? swipedir = distX < 0 ? "left" : "right" : Math.abs(distY) >= touchDistanceThreshold && Math.abs(distX) <= touchRestraint && (swipedir = distY < 0 ? "up" : "down")), "up" === swipedir) {
                                if (currentScene === sceneCount - 1) return;
                                setScene(currentScene)
                            } else if ("down" === swipedir) {
                                if (0 === currentScene || bottomScrollVal < 0) return;
                                setScene(currentScene - 1)
                            }
                            touchStarted = !1
                        }
                    }

                    function touchMove(e) {
                        touchStarted && e.preventDefault()
                    }
                    var touchStartTime, touchStartX, touchStartY, touchStarted = !1,
                        allowedSwipeTime = 400,
                        touchDistanceThreshold = 150,
                        touchRestraint = 100;
                    $scrollContainer.on("pointerdown", function(e) {
                        touchStart(e)
                    }), $scrollContainer.on("touchstart", function(e) {
                        window.PointerEvent || touchStart(e)
                    }), (0, _jquery2["default"])(window).on("pointerup", function(e) {
                        touchEnd(e)
                    }), (0, _jquery2["default"])(window).on("touchend", function(e) {
                        window.PointerEvent || touchEnd(e)
                    }), (0, _jquery2["default"])(window).on("pointermove", function(e) {
                        touchMove(e)
                    }), (0, _jquery2["default"])(window).on("touchmove", function(e) {
                        window.PointerEvent || touchMove(e)
                    })
                }(),
                function() {
                    function tap(e) {
                        enabled && !(0, _jquery2["default"])(e.target).is("a, button") && currentScene >= sceneCount - 1 && (pressed = !0, reference = ypos(e), velocity = amplitude = 0, frame = offset, timestamp = Date.now(), clearInterval(ticker), ticker = setInterval(track, 100), e.preventDefault())
                    }

                    function track() {
                        var now, elapsed, delta, v;
                        now = Date.now(), elapsed = now - timestamp, timestamp = now, delta = offset - frame, frame = offset, v = 1e3 * delta / (1 + elapsed), velocity = .8 * v + .2 * velocity, console.log(velocity)
                    }

                    function release(e) {
                        pressed && (pressed = !1, console.log(e), clearInterval(ticker), (velocity > 10 || velocity < -10) && (amplitude = .8 * velocity, target = Math.round(offset + amplitude), timestamp = Date.now(), requestAnimationFrame(autoScroll)), e.preventDefault())
                    }

                    function drag(e) {
                        var y, delta;
                        pressed && bottomScrollVal < 1 && (y = ypos(e), delta = reference - y, (delta > 2 || delta < -2) && (reference = y, scroll(offset + delta))), pressed && e.preventDefault()
                    }

                    function autoScroll() {
                        var elapsed, delta;
                        amplitude && (elapsed = Date.now() - timestamp, delta = -amplitude * Math.exp(-elapsed / timeConstant), delta > .5 || delta < -.5 ? (scroll(target + delta), requestAnimationFrame(autoScroll)) : scroll(target))
                    }

                    function ypos(e) {
                        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.pageY
                    }

                    function scroll(y) {
                        bottomScrollVal = -y, bottomScrollVal = Math.max(bottomScrollVal, -bh), bottomScrollVal = Math.min(bottomScrollVal, 0), offset = -bottomScrollVal, TweenMax.set($bottomEl, {
                            y: bottomScrollVal
                        }), TweenMax.set($scrollContainer, {
                            y: bottomScrollVal
                        }), 0 === Math.abs(bottomScrollVal) && $scrollContainer.attr("style", "")
                    }
                    var reference, velocity, frame, timestamp, ticker, target, pressed = !1,
                        amplitude = 0,
                        timeConstant = 325,
                        offset = 0,
                        $body = (0, _jquery2["default"])("body");
                    $scrollContainer.on("pointerdown", function(e) {
                        tap(e.originalEvent)
                    }), $bottomEl.on("pointerdown", function(e) {
                        tap(e.originalEvent)
                    }), $body.on("pointermove", function(e) {
                        drag(e.originalEvent)
                    }), $body.on("pointerup", function(e) {
                        release(e.originalEvent)
                    }), window.PointerEvent || ($scrollContainer.on("touchstart", function(e) {
                        tap(e.originalEvent)
                    }), $bottomEl.on("touchstart", function(e) {
                        tap(e.originalEvent)
                    }), $body.on("touchmove", function(e) {
                        drag(e.originalEvent)
                    }), $body.on("touchend", function(e) {
                        release(e.originalEvent)
                    }))
                }()
        }()
    }
}, function(module, exports, __webpack_require__) {
    "use strict";

    function preload(images) {
        return new Promise(function(success) {
            var l = images.length,
                count = 0;
            images.forEach(function(img) {
                var image = new Image;
                $(image).on("load", function() {
                    count++, count == l && success()
                }), image.src = img
            })
        })
    }

    function runFrame() {
        animPos.x += (mousePos.x - animPos.x) / 10, animPos.y += (mousePos.y - animPos.y) / 10;
        var perc = {
            x: 1 / windowWidth * animPos.x,
            y: 1 / windowHeight * animPos.y
        };
        Math.floor(100 * animPos.x) == Math.floor(100 * mousePos.x) && Math.floor(100 * animPos.y) == Math.floor(100 * mousePos.y) && af.stop();
        var x, y, sx, rotZ;
        animData.forEach(function(o) {
            x = -o.movex / 2 + o.movex / 1.5 * perc.x, y = o.movey / 2 * perc.y * (.5 + perc.x / 2), sx = o.scalexMin + (o.scalexMax - o.scalexMin) * (1 - perc.x), rotZ = -20 + 20 * (o.scalexMin + (o.scalexMax - o.scalexMin) * perc.y);
            var animStr = "translate3d(" + x + "px," + y + "px,0) scaleX(" + sx + ") rotateZ(" + rotZ + "deg)";
            o.el.css({
                "-ms-transform": animStr,
                "-webkit-transform": animStr,
                "-moz-transform": animStr,
                "-o-transform": animStr,
                transform: animStr
            })
        })
    }
    var parallaxItems, windowWidth, windowHeight, halfWindowWidth, halfWindowHeight, container, $ = __webpack_require__(1),
        startScramble = __webpack_require__(6),
        af = (__webpack_require__(2), __webpack_require__(2), __webpack_require__(11)),
        mousePos = {
            x: 1,
            y: 0
        },
        containerPos = {
            x: 0,
            y: 0
        },
        animPos = {
            x: 1,
            y: 0
        },
        st = 0,
        animData = [],
        init = function() {
            var images = [];
            container = $(".parallax-container"), parallaxItems = container.find(".parallax-item"), parallaxItems.each(function() {
                var obj = {},
                    el = $(this);
                obj.el = el, obj.movex = parseFloat(el.attr("data-speed-x")), obj.movey = parseFloat(el.attr("data-speed-y")), obj.scalexMin = parseFloat(el.attr("data-scale-x-min")), obj.scalexMax = parseFloat(el.attr("data-scale-x-max"));
                var img = el.find("img").attr("src");
                images.push(img), animData.push(obj)
            }), af.add("parallax", function() {
                runFrame()
            }), startScramble("#byline", ["wallet", "shoebox", "glove-box", "handbag", "pocket", "drawer"]), parallaxItems.length > 0 && preload(images).then(function() {
                parallaxItems.each(function(i) {
                    0 == i && (i += 3), setTimeout(function() {
                        $(this).find("img").css({
                            "transform-origin": -(100 + 10 * i) + "% 50%"
                        }), $(this).addClass("show")
                    }.bind(this), 100 * i + i * i * 10)
                }), $(".shad").addClass("show"), calculateSizes(), startParallax(), runFrame()
            })
        },
        calculateSizes = function() {
        },
        startParallax = function() {
            $(window).on("mousemove", function(e) {
                mousePos.x = e.pageX, mousePos.y = e.pageY, st < windowHeight && af.stopped && af.start()
            })
        };
    window.onload = function() {
        $("body").is(".is-home-page , .is-home-xero-page") && (init(), $(window).resize(function() {
            calculateSizes()
        }), $(window).on("scroll", function() {
            st = $("document").scrollTop()
        }), startScramble("#hero-title", ["Paymark,", "Petrol,", "Beers,", "Pies,", "Lunch,", "Taxi,", "Coffee,", "Muffin,"], 2500, 100, 40, !0))
    }
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
        var queue = [],
            fn = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
                window.setTimeout(callback, 100)
            };
        return {
            stopped: !0,
            add: function(name, callback) {
                var theAnim = {
                    name: name,
                    callback: callback,
                    stopped: !1
                };
                queue.push(theAnim)
            },
            remove: function(name) {
                for (var i = 0; i < queue.length; i++) queue[i].name === name && queue.splice(i, 1)
            },
            anim: function() {
                var scope = this;
                if (!this.stopped) {
                    for (var callback, i = 0; i < queue.length; i++) queue[i].stopped || (callback = queue[i].callback)();
                    fn(function() {
                        scope.anim()
                    })
                }
            },
            start: function(name) {
                if ("undefined" == typeof name) this.stopped !== !1 && (this.stopped = !1, this.anim());
                else
                    for (var i = 0; i < queue.length; i++) queue[i].name === name && (queue[i].stopped = !1)
            },
            stop: function(name) {
                if ("undefined" == typeof name) this.stopped = !0;
                else
                    for (var i = 0; i < queue.length; i++) queue[i].name === name && (queue[i].stopped = !0)
            },
            clearQueue: function(stop) {
                queue = [], stop && (this.stopped = !0)
            }
        }
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(module, exports, __webpack_require__) {
    "use strict";
    var $ = __webpack_require__(1),
        siteURL = $("meta[name=siteURL]").attr("content");
    if (Function("/*@cc_on return document.documentMode===10@*/")()) {
        var updateLocation = siteURL + "/browser-update",
            currentLocation = window.location.href;
        currentLocation.indexOf(updateLocation) < 0 && (window.location = updateLocation)
    }
}, function(module, exports, __webpack_require__) {
    "use strict";
    var $ = __webpack_require__(1);
    $(".faq-list").on("click", ".topic-toggler", function() {
        var el = $(this),
            contentBlock = el.siblings("dl").first();
        el.hasClass("open") ? (el.removeClass("open"), contentBlock.removeClass("open")) : (el.addClass("open"), contentBlock.addClass("open"))
    })
}, function(module, exports, __webpack_require__) {
    "use strict";
    var $ = __webpack_require__(1),
        isFaqPage = 1 === $("body.is-frequently-asked-questions-page").length;
    if (isFaqPage) {
        var hashValue = window.location.hash,
            hashId = hashValue ? hashValue.replace(/^#/, "") : null;
        if (hashId) {
            var hashLink = $("#" + hashId);
            1 === hashLink.length && (hashLink.find("div").first().addClass("open"), hashLink.find("dl").first().addClass("open"), setTimeout(function() {
                var topPosition = hashLink.offset().top - 80;
                $(window).scrollTop(topPosition)
            }, 1e3))
        }
    }
}, function(module, exports, __webpack_require__) {
    "use strict";
    var $ = __webpack_require__(1),
        formValidator = __webpack_require__(16),
        mixpanelManager = __webpack_require__(4),
        faqForm = $("#faqForm"),
        reminderForm = $("#reminderForm"),
        subscribeForm = $("#subscribeForm");
    if (1 === faqForm.length) var rules = {
            faqName: {
                required: !0
            },
            faqEmail: {
                required: !0,
                email: !0
            },
            faqQuestion: {
                required: !0
            },
            "g-recaptcha-response": {
                required: function() {
                    return "" == grecaptcha.getResponse()
                }
            }
        },
        faqValidator = formValidator(faqForm.first(), rules, function() {
            faqValidator.lockForm();
            var requestConfig = {
                method: "POST",
                url: faqForm.attr("action"),
                data: {
                    faqName: faqForm.find("#faqName").val(),
                    faqEmail: faqForm.find("#faqEmail").val(),
                    faqQuestion: faqForm.find("#faqQuestion").val(),
                    "g-recaptcha-response": faqForm.find("#g-recaptcha-response").val(),
                    _wpnonce: faqForm.find("#_wpnonce").val()
                }
            };
            $.ajax(requestConfig).done(function(response, statusText, xhr) {
                1 == response.sent ? (faqValidator.addSuccessMessage(), faqValidator.resetForm()) : faqValidator.addErrorMessage()
            }).fail(function(xhr, statusText, satus) {
                faqValidator.addErrorMessage()
            }).always(function(response, statusText, xhr) {
                faqValidator.updateNonce(response.nonce), faqValidator.unlockForm(1 == response.sent), grecaptcha.reset()
            })
        });
    if (1 === reminderForm.length) var rules = {
            yourName: {
                required: !0
            },
            reminderName: {
                required: !0
            },
            reminderEmail: {
                required: !0,
                email: !0
            }
        },
        reminderValidator = formValidator(reminderForm.first(), rules, function() {
            reminderValidator.lockForm();
            var yourName = reminderForm.find("#yourName").val(),
                theirName = reminderForm.find("#reminderName").val(),
                email = reminderForm.find("#reminderEmail").val(),
                getUpdates = reminderForm.find("#checkbox").is(":checked");
            mixpanelManager.sendReminderEmail(yourName, theirName, email, getUpdates, function() {
                reminderValidator.addSuccessMessage(), reminderValidator.unlockForm(!0), reminderValidator.resetForm()
            })
        });
    if (1 === subscribeForm.length) var rules = {
            subscribeName: {
                required: !0
            },
            subscribeEmail: {
                required: !0,
                email: !0
            },
            privacy: {
                required: !0
            }
        },
        subscribeValidator = formValidator(subscribeForm.first(), rules, function(e) {
            subscribeValidator.lockForm();
            var name = subscribeForm.find("#subscribeName").val(),
                email = subscribeForm.find("#subscribeEmail").val();
            subscribeForm.find("#privacy").is(":checked");
            mixpanelManager.blogSignup(name, email, function() {
                subscribeValidator.addSuccessMessage(), subscribeValidator.unlockForm(!0), subscribeForm.find("#privacy").removeAttr("checked"), subscribeValidator.resetForm()
            })
        })
}, function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj
        },
        $ = __webpack_require__(1),
        validField = (__webpack_require__(33), function(field, rules) {
            var validateOptions = createValidatorOptions(rules),
                validator = field.closest("form").validate(validateOptions),
                valid = validator.element(field);
            return fieldFeedback(field, valid, rules), valid
        }),
        fieldFeedback = function(field, valid, rules) {
            var container = field.closest("div");
            field.attr("id");
            container.hasClass("validated") || field.on("keyup", function() {
                validField(field, rules)
            }), container.removeClass(valid ? "invalid" : "valid").addClass(valid ? "validated valid" : "validated invalid")
        },
        createValidatorOptions = function(rules, extendedOptions) {
            var options = {
                rules: rules,
                ignore: "",
                errorElement: "span",
                errorClass: "input-error",
                invalidHandler: function(event, validator) {
                    for (var k in validator.errorList) {
                        var field = $(validator.errorList[k].element);
                        fieldFeedback(field, !1, rules)
                    }
                    for (var k in validator.successList) {
                        var field = $(validator.successList[k].element);
                        fieldFeedback(field, !0, rules)
                    }
                },
                errorPlacement: function(error, element) {
                    var afterElement = element.siblings("label").first();
                    0 === afterElement.length && (afterElement = element), error.insertAfter(afterElement)
                }
            };
            if ("object" === ("undefined" == typeof extendedOptions ? "undefined" : _typeof(extendedOptions)))
                for (var k in extendedOptions) options[k] = extendedOptions[k];
            return options
        },
        _lockForm = function(form) {
            var submitButton = form.find("button[type='submit']");
            submitButton.text("Submitting...").attr("disabled", "disabled").addClass("submitting")
        },
        _unlockForm = function(form, successfulSubmission) {
            var submitButton = form.find("button[type='submit']");
            submitButton.removeAttr("disabled").text("Submit").removeClass("submitting")
        },
        addFormMessage = function(form, successfulSubmission, title, message) {
            var messageContainer = form.find(".form-message"),
                submitButton = form.find("button[type='submit']");
            title || (title = submitButton.data(successfulSubmission ? "success-title" : "error-title"), title || (title = successfulSubmission ? "Success" : "There was an issue")), message || (message = submitButton.data(successfulSubmission ? "success-message" : "error-message"), message || (message = successfulSubmission ? "Submitted" : "There was an error. Please try again.")), messageContainer.empty(), messageContainer.append($('<p class="title ' + (successfulSubmission ? "" : " error") + '">' + title + "</p>")), messageContainer.append($('<p class="' + (successfulSubmission ? "" : " error") + '">' + message + "</p>"))
        },
        _resetForm = function(form) {
            form.find("input, textarea").val("")
        },
        _updateNonce = function(form, nonce) {
            form.find("#_wpnonce").val(nonce)
        },
        attachValidator = function(form, rules, extendedOptions, submitFunction) {
            return "function" == typeof extendedOptions ? (submitFunction = extendedOptions, extendedOptions = {}) : extendedOptions || (extendedOptions = {}), extendedOptions.submitHandler || (extendedOptions.submitHandler = submitFunction), form.validate(createValidatorOptions(rules, extendedOptions)), form.on("blur focus", "input, textarea", function(e) {
                var inputEl = $(e.target),
                    container = inputEl.closest("div");
                "focusin" === e.type ? (container.addClass("dirty"), container.addClass("focused")) : "focusout" === e.type && 0 === inputEl.val().length ? (container.removeClass("dirty"), container.removeClass("focused")) : "focusout" === e.type && (container.removeClass("focused"), validField(inputEl, rules))
            }), {
                lockForm: function() {
                    _lockForm(form)
                },
                unlockForm: function(successfulSubmission) {
                    _unlockForm(form, successfulSubmission)
                },
                addSuccessMessage: function(title, message) {
                    addFormMessage(form, !0, message)
                },
                addErrorMessage: function(title, message) {
                    addFormMessage(form, !1, title, message)
                },
                resetForm: function() {
                    _resetForm(form)
                },
                updateNonce: function(nonce) {
                    _updateNonce(form, nonce)
                }
            }
        };
    module.exports = attachValidator
}, function(module, exports) {
    "use strict";
    ! function(w, d, s, l, i) {
        w[l] = w[l] || [], w[l].push({
            "gtm.start": (new Date).getTime(),
            event: "gtm.js"
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = "dataLayer" != l ? "&l=" + l : "";
        j.async = !0, j.src = "//www.googletagmanager.com/gtm.js?id=" + i + dl, f.parentNode.insertBefore(j, f)
    }(window, document, "script", "dataLayer", "GTM-PVC5KR")
}, function(module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        }
    }
    var _imagesloaded = __webpack_require__(30),
        _imagesloaded2 = _interopRequireDefault(_imagesloaded),
        _jquery = __webpack_require__(1),
        _jquery2 = _interopRequireDefault(_jquery),
        imgLoad = (0, _imagesloaded2["default"])(document.body);
    imgLoad.on("progress", function(instance, image) {
        (0, _jquery2["default"])(image.img).addClass(image.isLoaded ? "image-loaded" : "image-broken")
    })
}, function(module, exports) {
    "use strict";
    module.exports = {
        set: function(keyName, value, expiry) {
            var storedExpiry = expiry ? (new Date).getTime() + 1e3 * expiry : null,
                storedValue = {
                    data: value,
                    expiry: storedExpiry
                };
            window.localStorage.setItem(keyName, JSON.stringify(storedValue))
        },
        get: function(keyName) {
            var item = window.localStorage.getItem(keyName);
            if (item) {
                var storedItem = JSON.parse(item);
                if (storedItem) return storedItem.expiry && (new Date).getTime() > storedItem.expiry ? (this.remove(keyName), null) : storedItem.data
            }
            return null
        },
        remove: function(keyName) {
            window.localStorage.removeItem(keyName)
        }
    }
}, function(module, exports, __webpack_require__) {
    "use strict";
    var $ = __webpack_require__(1);
    $(".nav-icon").click(function(e) {
        e.preventDefault(), $(".header__container").toggleClass("open")
    })
}, function(module, exports, __webpack_require__) {
    "use strict";
    var $ = __webpack_require__(1),
        ls = __webpack_require__(19),
        displayModal = (__webpack_require__(35), function(targetModal) {
            var modalInstance, modalEl = $("[data-remodal-id=" + targetModal + "]"),
                modalCloseBtn = modalEl.find(".dismiss"),
                modalOverlay = $(".remodal-overlay"),
                linkInModal = 1 === $(this).closest(".remodal").length,
                videoModal = modalEl.hasClass("remodal-video"),
                options = {
                    hashTracking: !1
                };
            if (modalEl) {
                if (modalInstance = modalEl.remodal(options), modalCloseBtn.length > 0 && modalCloseBtn.on("click", function() {
                        modalInstance.close()
                    }), linkInModal && (modalOverlay.addClass("disable-is-opening"), setTimeout(function() {
                        modalOverlay.removeClass("disable-is-opening")
                    }, 500)), videoModal) {
                    var iframe = modalEl.find("iframe"),
                        reloadFrame = function reloadFrame() {
                            iframe.attr("src", iframe.attr("src")), $(document).off("closing", ".remodal", reloadFrame)
                        };
                    $(document).on("closing", ".remodal", reloadFrame)
                }
                return modalInstance.open(), modalInstance
            }
            return null
        });
    $(".modal-launcher").on("click", function(e) {
        e.preventDefault();
        var targetModal = $(this).data("modal-id");
        targetModal && displayModal(targetModal)
    });
    var isDownModal = $(".modal.is-down");
    isDownModal && isDownModal.each(function() {
        setTimeout(function() {
            var modalDismissed = ls.get("isDown");
            if (modalDismissed !== !0) {
                displayModal("is-down");
                $(document).on("closed", ".remodal", function(e) {
                    $(this).hasClass("is-down") && ls.set("isDown", !0, 1800)
                })
            }
        }, 0)
    })
}, function(module, exports, __webpack_require__) {
    "use strict";
    var $ = __webpack_require__(1),
        $header = $(".header"),
        $headerContainer = $(".header__container");
    $(window).scroll(function() {
        var headerH = $header.outerHeight(),
            scroll = $(document).scrollTop();
        scroll >= headerH && !$headerContainer.hasClass("fixed") ? ($headerContainer.addClass("fixed"), setTimeout(function() {
            $headerContainer.addClass("slide-in-ready slide-in")
        }, 200)) : 0 == scroll && $headerContainer.removeClass("fixed slide-in-ready slide-in")
    })
}, function(module, exports, __webpack_require__) {
    "use strict";

    function progressLogic(e) {
        var $progParent = $(".range-slider"),
            progParentW = $progParent.width(),
            offsetPx = e.pageX - $progParent.offset().left,
            progressPercentage = offsetPx / progParentW * 100;
        progressPercentage = 10 * Math.round(progressPercentage / 10), progressPercentage < 10 && (progressPercentage = 10);
        var userCount = Math.round(offsetPx / progParentW * 10),
            price = 12 * userCount;
        if (lastProgressPrecentage != progressPercentage) {
            lastProgressPrecentage = progressPercentage, progressPercentage = boundInteger(0, progressPercentage, 100), userCount = boundInteger(0, userCount, 10), price = boundInteger(0, price, 120), setPositions(progressPercentage, $handle), setPositions(progressPercentage, $progressBar);
            var usersText = "";
            switch (userCount) {
                case 0:
                case 1:
                    usersText = "1 user";
                    break;
                case 10:
                    usersText = "10+ users";
                    break;
                default:
                    usersText = userCount + " users"
            }
            $userCountOutput.html(usersText), 100 == progressPercentage ? $priceContentBlock.html('10 users or more? <a href="/frequently-asked-questions#get-in-touch" class="orange">Talk to us about custom plans</a>') : $priceContentBlock.html('<span class="range-slider__price-output">$' + price + '*</span> for <span class="range-slider__user-output">' + usersText + "</span> billed monthly")
        }
    }
    var $ = __webpack_require__(1),
        $handle = $(".range-slider__handle"),
        $progressBar = $(".range-slider__progress"),
        $userCountOutput = $(".range-slider__user"),
        $priceContentBlock = $(".range-slider__output-container h2"),
        isSelected = !1,
        lastProgressPrecentage = 10;
    $handle.on("mousedown", function(e) {
        e.preventDefault(), isSelected = !0
    }), $(window).on("mousemove", function(e) {
        isSelected && (e.preventDefault(), progressLogic(e))
    }), $(window).on("mouseup", function(e) {
        isSelected && (isSelected = !1)
    }), $("#rangeSlider").on("click", function(e) {
        progressLogic(e)
    }), $handle.on("touchstart pointerdown", function(e) {
        e.preventDefault(), isSelected = !0
    }), $(window).on("touchend pointerup", function(e) {
        isSelected && (isSelected = !1)
    }), $(window).on("touchmove pointermove", function(e) {
        if (isSelected) {
            var touches = e.originalEvent.targetTouches;
            progressLogic(touches && touches.length > 0 ? touches[0] : e)
        }
    });
    var setPositions = function(progressPercentage, $el) {
            $el.css({
                left: progressPercentage + "%"
            })
        },
        boundInteger = function(minBound, foo, maxBound) {
            return Math.max(Math.min(foo, maxBound), minBound)
        }
}, function(module, exports, __webpack_require__) {
    "use strict";
    var $ = __webpack_require__(1);
    $(".share").on("click", function(e) {
        e.preventDefault();
        var el = $(this),
            shareTypes = {
                facebook: {
                    linkBuilder: function(url) {
                        return "http://www.facebook.com/sharer/sharer.php?u=" + url
                    },
                    width: 550,
                    height: 400
                },
                twitter: {
                    linkBuilder: function(url) {
                        return "https://twitter.com/intent/tweet?original_referer=" + url + "&url=" + url + "&via=payprnz"
                    },
                    width: 600,
                    height: 280
                }
            },
            type = el.data("type"),
            link = shareTypes[type].linkBuilder(el.attr("href")),
            width = shareTypes[type].width,
            height = shareTypes[type].height,
            leftPosition = (screen.width - width) / 2,
            topPosition = (screen.height - height) / 2,
            popupWindow = window.open(link, "_blank", "top=" + topPosition + ",left=" + leftPosition + ",width=" + width + ",height=" + height);
        popupWindow.focus()
    })
}, function(module, exports, __webpack_require__) {
    "use strict";
    var $ = window.jQuery = __webpack_require__(1),
        options = (__webpack_require__(29), {
            animation: "fade",
            slideshow: !0,
            slideshowSpeed: 5e3,
            controlNav: !1,
            prevText: "",
            nextText: ""
        });
    $(".flexslider").flexslider(options)
}, function(module, exports, __webpack_require__) {
    "use strict";

    function checkInView() {
        var wh = $window.height(),
            wTop = $window.scrollTop(),
            wBot = wTop + wh;
        $.each($textPop, function() {
            var $el = $(this),
                elHeight = $el.outerHeight(),
                elTop = $el.offset().top,
                elBot = elTop + elHeight;
            elBot >= wTop && elTop <= wBot ? $el.addClass("in-view") : $el.removeClass("in-view")
        })
    }
    var $ = __webpack_require__(1),
        $textPop = $(".-text-pop"),
        $window = $(window);
    $window.on("scroll resize", checkInView), $window.trigger("scroll")
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    (function(process, global, module) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
         * @version   3.2.1
         */
        (function() {
            "use strict";

            function lib$es6$promise$utils$$objectOrFunction(x) {
                return "function" == typeof x || "object" == typeof x && null !== x
            }

            function lib$es6$promise$utils$$isFunction(x) {
                return "function" == typeof x
            }

            function lib$es6$promise$asap$$setScheduler(scheduleFn) {
                lib$es6$promise$asap$$customSchedulerFn = scheduleFn
            }

            function lib$es6$promise$asap$$setAsap(asapFn) {
                lib$es6$promise$asap$$asap = asapFn
            }

            function lib$es6$promise$asap$$useNextTick() {
                return function() {
                    process.nextTick(lib$es6$promise$asap$$flush)
                }
            }

            function lib$es6$promise$asap$$useVertxTimer() {
                return function() {
                    lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush)
                }
            }

            function lib$es6$promise$asap$$useMutationObserver() {
                var iterations = 0,
                    observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush),
                    node = document.createTextNode("");
                return observer.observe(node, {
                        characterData: !0
                    }),
                    function() {
                        node.data = iterations = ++iterations % 2
                    }
            }

            function lib$es6$promise$asap$$useMessageChannel() {
                var channel = new MessageChannel;
                return channel.port1.onmessage = lib$es6$promise$asap$$flush,
                    function() {
                        channel.port2.postMessage(0)
                    }
            }

            function lib$es6$promise$asap$$useSetTimeout() {
                return function() {
                    setTimeout(lib$es6$promise$asap$$flush, 1)
                }
            }

            function lib$es6$promise$asap$$flush() {
                for (var i = 0; i < lib$es6$promise$asap$$len; i += 2) {
                    var callback = lib$es6$promise$asap$$queue[i],
                        arg = lib$es6$promise$asap$$queue[i + 1];
                    callback(arg), lib$es6$promise$asap$$queue[i] = void 0, lib$es6$promise$asap$$queue[i + 1] = void 0
                }
                lib$es6$promise$asap$$len = 0
            }

            function lib$es6$promise$asap$$attemptVertx() {
                try {
                    var vertx = __webpack_require__(38);
                    return lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext, lib$es6$promise$asap$$useVertxTimer()
                } catch (e) {
                    return lib$es6$promise$asap$$useSetTimeout()
                }
            }

            function lib$es6$promise$then$$then(onFulfillment, onRejection) {
                var parent = this,
                    child = new this.constructor(lib$es6$promise$$internal$$noop);
                void 0 === child[lib$es6$promise$$internal$$PROMISE_ID] && lib$es6$promise$$internal$$makePromise(child);
                var state = parent._state;
                if (state) {
                    var callback = arguments[state - 1];
                    lib$es6$promise$asap$$asap(function() {
                        lib$es6$promise$$internal$$invokeCallback(state, child, callback, parent._result)
                    })
                } else lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
                return child
            }

            function lib$es6$promise$promise$resolve$$resolve(object) {
                var Constructor = this;
                if (object && "object" == typeof object && object.constructor === Constructor) return object;
                var promise = new Constructor(lib$es6$promise$$internal$$noop);
                return lib$es6$promise$$internal$$resolve(promise, object), promise
            }

            function lib$es6$promise$$internal$$noop() {}

            function lib$es6$promise$$internal$$selfFulfillment() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function lib$es6$promise$$internal$$cannotReturnOwn() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function lib$es6$promise$$internal$$getThen(promise) {
                try {
                    return promise.then
                } catch (error) {
                    return lib$es6$promise$$internal$$GET_THEN_ERROR.error = error, lib$es6$promise$$internal$$GET_THEN_ERROR
                }
            }

            function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
                try {
                    then.call(value, fulfillmentHandler, rejectionHandler)
                } catch (e) {
                    return e
                }
            }

            function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
                lib$es6$promise$asap$$asap(function(promise) {
                    var sealed = !1,
                        error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
                            sealed || (sealed = !0, thenable !== value ? lib$es6$promise$$internal$$resolve(promise, value) : lib$es6$promise$$internal$$fulfill(promise, value))
                        }, function(reason) {
                            sealed || (sealed = !0, lib$es6$promise$$internal$$reject(promise, reason))
                        }, "Settle: " + (promise._label || " unknown promise"));
                    !sealed && error && (sealed = !0, lib$es6$promise$$internal$$reject(promise, error))
                }, promise)
            }

            function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
                thenable._state === lib$es6$promise$$internal$$FULFILLED ? lib$es6$promise$$internal$$fulfill(promise, thenable._result) : thenable._state === lib$es6$promise$$internal$$REJECTED ? lib$es6$promise$$internal$$reject(promise, thenable._result) : lib$es6$promise$$internal$$subscribe(thenable, void 0, function(value) {
                    lib$es6$promise$$internal$$resolve(promise, value)
                }, function(reason) {
                    lib$es6$promise$$internal$$reject(promise, reason)
                })
            }

            function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
                maybeThenable.constructor === promise.constructor && then === lib$es6$promise$then$$default && constructor.resolve === lib$es6$promise$promise$resolve$$default ? lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable) : then === lib$es6$promise$$internal$$GET_THEN_ERROR ? lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error) : void 0 === then ? lib$es6$promise$$internal$$fulfill(promise, maybeThenable) : lib$es6$promise$utils$$isFunction(then) ? lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then) : lib$es6$promise$$internal$$fulfill(promise, maybeThenable)
            }

            function lib$es6$promise$$internal$$resolve(promise, value) {
                promise === value ? lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment()) : lib$es6$promise$utils$$objectOrFunction(value) ? lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value)) : lib$es6$promise$$internal$$fulfill(promise, value)
            }

            function lib$es6$promise$$internal$$publishRejection(promise) {
                promise._onerror && promise._onerror(promise._result), lib$es6$promise$$internal$$publish(promise)
            }

            function lib$es6$promise$$internal$$fulfill(promise, value) {
                promise._state === lib$es6$promise$$internal$$PENDING && (promise._result = value, promise._state = lib$es6$promise$$internal$$FULFILLED, 0 !== promise._subscribers.length && lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise))
            }

            function lib$es6$promise$$internal$$reject(promise, reason) {
                promise._state === lib$es6$promise$$internal$$PENDING && (promise._state = lib$es6$promise$$internal$$REJECTED, promise._result = reason, lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise))
            }

            function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
                var subscribers = parent._subscribers,
                    length = subscribers.length;
                parent._onerror = null, subscribers[length] = child, subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment, subscribers[length + lib$es6$promise$$internal$$REJECTED] = onRejection, 0 === length && parent._state && lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent)
            }

            function lib$es6$promise$$internal$$publish(promise) {
                var subscribers = promise._subscribers,
                    settled = promise._state;
                if (0 !== subscribers.length) {
                    for (var child, callback, detail = promise._result, i = 0; i < subscribers.length; i += 3) child = subscribers[i], callback = subscribers[i + settled], child ? lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail) : callback(detail);
                    promise._subscribers.length = 0
                }
            }

            function lib$es6$promise$$internal$$ErrorObject() {
                this.error = null
            }

            function lib$es6$promise$$internal$$tryCatch(callback, detail) {
                try {
                    return callback(detail)
                } catch (e) {
                    return lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e, lib$es6$promise$$internal$$TRY_CATCH_ERROR
                }
            }

            function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
                var value, error, succeeded, failed, hasCallback = lib$es6$promise$utils$$isFunction(callback);
                if (hasCallback) {
                    if (value = lib$es6$promise$$internal$$tryCatch(callback, detail), value === lib$es6$promise$$internal$$TRY_CATCH_ERROR ? (failed = !0, error = value.error, value = null) : succeeded = !0, promise === value) return void lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn())
                } else value = detail, succeeded = !0;
                promise._state !== lib$es6$promise$$internal$$PENDING || (hasCallback && succeeded ? lib$es6$promise$$internal$$resolve(promise, value) : failed ? lib$es6$promise$$internal$$reject(promise, error) : settled === lib$es6$promise$$internal$$FULFILLED ? lib$es6$promise$$internal$$fulfill(promise, value) : settled === lib$es6$promise$$internal$$REJECTED && lib$es6$promise$$internal$$reject(promise, value))
            }

            function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
                try {
                    resolver(function(value) {
                        lib$es6$promise$$internal$$resolve(promise, value)
                    }, function(reason) {
                        lib$es6$promise$$internal$$reject(promise, reason)
                    })
                } catch (e) {
                    lib$es6$promise$$internal$$reject(promise, e)
                }
            }

            function lib$es6$promise$$internal$$nextId() {
                return lib$es6$promise$$internal$$id++
            }

            function lib$es6$promise$$internal$$makePromise(promise) {
                promise[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$id++, promise._state = void 0, promise._result = void 0, promise._subscribers = []
            }

            function lib$es6$promise$promise$all$$all(entries) {
                return new lib$es6$promise$enumerator$$default(this, entries).promise
            }

            function lib$es6$promise$promise$race$$race(entries) {
                var Constructor = this;
                return new Constructor(lib$es6$promise$utils$$isArray(entries) ? function(resolve, reject) {
                    for (var length = entries.length, i = 0; i < length; i++) Constructor.resolve(entries[i]).then(resolve, reject)
                } : function(resolve, reject) {
                    reject(new TypeError("You must pass an array to race."))
                })
            }

            function lib$es6$promise$promise$reject$$reject(reason) {
                var Constructor = this,
                    promise = new Constructor(lib$es6$promise$$internal$$noop);
                return lib$es6$promise$$internal$$reject(promise, reason), promise
            }

            function lib$es6$promise$promise$$needsResolver() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function lib$es6$promise$promise$$needsNew() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function lib$es6$promise$promise$$Promise(resolver) {
                this[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$nextId(), this._result = this._state = void 0, this._subscribers = [], lib$es6$promise$$internal$$noop !== resolver && ("function" != typeof resolver && lib$es6$promise$promise$$needsResolver(), this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew())
            }

            function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
                this._instanceConstructor = Constructor, this.promise = new Constructor(lib$es6$promise$$internal$$noop), this.promise[lib$es6$promise$$internal$$PROMISE_ID] || lib$es6$promise$$internal$$makePromise(this.promise), lib$es6$promise$utils$$isArray(input) ? (this._input = input, this.length = input.length, this._remaining = input.length, this._result = new Array(this.length), 0 === this.length ? lib$es6$promise$$internal$$fulfill(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && lib$es6$promise$$internal$$fulfill(this.promise, this._result))) : lib$es6$promise$$internal$$reject(this.promise, lib$es6$promise$enumerator$$validationError())
            }

            function lib$es6$promise$enumerator$$validationError() {
                return new Error("Array Methods must be provided an Array")
            }

            function lib$es6$promise$polyfill$$polyfill() {
                var local;
                if ("undefined" != typeof global) local = global;
                else if ("undefined" != typeof self) local = self;
                else try {
                    local = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var P = local.Promise;
                P && "[object Promise]" === Object.prototype.toString.call(P.resolve()) && !P.cast || (local.Promise = lib$es6$promise$promise$$default)
            }
            var lib$es6$promise$utils$$_isArray;
            lib$es6$promise$utils$$_isArray = Array.isArray ? Array.isArray : function(x) {
                return "[object Array]" === Object.prototype.toString.call(x)
            };
            var lib$es6$promise$asap$$vertxNext, lib$es6$promise$asap$$customSchedulerFn, lib$es6$promise$asap$$scheduleFlush, lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray,
                lib$es6$promise$asap$$len = 0,
                lib$es6$promise$asap$$asap = function(callback, arg) {
                    lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback, lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg, lib$es6$promise$asap$$len += 2, 2 === lib$es6$promise$asap$$len && (lib$es6$promise$asap$$customSchedulerFn ? lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush) : lib$es6$promise$asap$$scheduleFlush())
                },
                lib$es6$promise$asap$$browserWindow = "undefined" != typeof window ? window : void 0,
                lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {},
                lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver,
                lib$es6$promise$asap$$isNode = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                lib$es6$promise$asap$$isWorker = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                lib$es6$promise$asap$$queue = new Array(1e3);
            lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$isNode ? lib$es6$promise$asap$$useNextTick() : lib$es6$promise$asap$$BrowserMutationObserver ? lib$es6$promise$asap$$useMutationObserver() : lib$es6$promise$asap$$isWorker ? lib$es6$promise$asap$$useMessageChannel() : void 0 === lib$es6$promise$asap$$browserWindow ? lib$es6$promise$asap$$attemptVertx() : lib$es6$promise$asap$$useSetTimeout();
            var lib$es6$promise$then$$default = lib$es6$promise$then$$then,
                lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve,
                lib$es6$promise$$internal$$PROMISE_ID = Math.random().toString(36).substring(16),
                lib$es6$promise$$internal$$PENDING = void 0,
                lib$es6$promise$$internal$$FULFILLED = 1,
                lib$es6$promise$$internal$$REJECTED = 2,
                lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject,
                lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject,
                lib$es6$promise$$internal$$id = 0,
                lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all,
                lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race,
                lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject,
                lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
            lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default, lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default, lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default, lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default, lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler, lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap, lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap, lib$es6$promise$promise$$Promise.prototype = {
                constructor: lib$es6$promise$promise$$Promise,
                then: lib$es6$promise$then$$default,
                "catch": function(onRejection) {
                    return this.then(null, onRejection)
                }
            };
            var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
            lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
                for (var length = this.length, input = this._input, i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) this._eachEntry(input[i], i)
            }, lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
                var c = this._instanceConstructor,
                    resolve = c.resolve;
                if (resolve === lib$es6$promise$promise$resolve$$default) {
                    var then = lib$es6$promise$$internal$$getThen(entry);
                    if (then === lib$es6$promise$then$$default && entry._state !== lib$es6$promise$$internal$$PENDING) this._settledAt(entry._state, i, entry._result);
                    else if ("function" != typeof then) this._remaining--, this._result[i] = entry;
                    else if (c === lib$es6$promise$promise$$default) {
                        var promise = new c(lib$es6$promise$$internal$$noop);
                        lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then), this._willSettleAt(promise, i)
                    } else this._willSettleAt(new c(function(resolve) {
                        resolve(entry)
                    }), i)
                } else this._willSettleAt(resolve(entry), i)
            }, lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
                var promise = this.promise;
                promise._state === lib$es6$promise$$internal$$PENDING && (this._remaining--, state === lib$es6$promise$$internal$$REJECTED ? lib$es6$promise$$internal$$reject(promise, value) : this._result[i] = value), 0 === this._remaining && lib$es6$promise$$internal$$fulfill(promise, this._result)
            }, lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
                var enumerator = this;
                lib$es6$promise$$internal$$subscribe(promise, void 0, function(value) {
                    enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value)
                }, function(reason) {
                    enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason)
                })
            };
            var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill,
                lib$es6$promise$umd$$ES6Promise = {
                    Promise: lib$es6$promise$promise$$default,
                    polyfill: lib$es6$promise$polyfill$$default
                };
            __webpack_require__(36).amd ? (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return lib$es6$promise$umd$$ES6Promise
            }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))) : "undefined" != typeof module && module.exports ? module.exports = lib$es6$promise$umd$$ES6Promise : "undefined" != typeof this && (this.ES6Promise = lib$es6$promise$umd$$ES6Promise), lib$es6$promise$polyfill$$default()
        }).call(this)
    }).call(exports, __webpack_require__(8), function() {
        return this
    }(), __webpack_require__(37)(module))
}, function(module, exports) {}, function(module, exports, __webpack_require__) {
    (function(setImmediate) {
        ! function($) {
            var e = !0;
            $.flexslider = function(t, a) {
                var n = $(t);
                n.vars = $.extend({}, $.flexslider.defaults, a);
                var c, i = n.vars.namespace,
                    s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                    r = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
                    o = "click touchend MSPointerUp keyup",
                    l = "",
                    d = "vertical" === n.vars.direction,
                    u = n.vars.reverse,
                    v = n.vars.itemWidth > 0,
                    p = "fade" === n.vars.animation,
                    m = "" !== n.vars.asNavFor,
                    f = {};
                $.data(t, "flexslider", n), f = {
                    init: function() {
                        n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = $(n.vars.selector, n), n.container = $(n.containerSelector, n), n.count = n.slides.length, n.syncExists = $(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function() {
                            var e = document.createElement("div"),
                                t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                            for (var a in t)
                                if (void 0 !== e.style[t[a]]) return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                            return !1
                        }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = $(n.vars.controlsContainer).length > 0 && $(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = $(n.vars.manualControls).length > 0 && $(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === $(n.vars.customDirectionNav).length && $(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function() {
                            return Math.round(Math.random()) - .5
                        }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === $(n.containerSelector).length || n.vars.multipleKeyboard) && $(document).bind("keyup", function(e) {
                            var t = e.keyCode;
                            if (!n.animating && (39 === t || 37 === t)) {
                                var a = 39 === t ? n.getTarget("next") : 37 === t && n.getTarget("prev");
                                n.flexAnimate(a, n.vars.pauseOnAction)
                            }
                        }), n.vars.mousewheel && n.bind("mousewheel", function(e, t, a, i) {
                            e.preventDefault();
                            var s = 0 > t ? n.getTarget("next") : n.getTarget("prev");
                            n.flexAnimate(s, n.vars.pauseOnAction)
                        }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
                            n.manualPlay || n.manualPause || n.pause()
                        }, function() {
                            n.manualPause || n.manualPlay || n.stopped || n.play()
                        }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), r && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && $(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function() {
                            n.vars.start(n)
                        }, 200)
                    },
                    asNav: {
                        setup: function() {
                            n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(i + "active-slide").eq(n.currentItem).addClass(i + "active-slide"), s ? (t._slider = n, n.slides.each(function() {
                                var e = this;
                                e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(e) {
                                    e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                                }, !1), e.addEventListener("MSGestureTap", function(e) {
                                    e.preventDefault();
                                    var t = $(this),
                                        a = t.index();
                                    $(n.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
                                })
                            })) : n.slides.on(o, function(e) {
                                e.preventDefault();
                                var t = $(this),
                                    a = t.index(),
                                    s = t.offset().left - $(n).scrollLeft();
                                0 >= s && t.hasClass(i + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : $(n.vars.asNavFor).data("flexslider").animating || t.hasClass(i + "active-slide") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
                            })
                        }
                    },
                    controlNav: {
                        setup: function() {
                            n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                        },
                        setupPaging: function() {
                            var a, s, e = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
                                t = 1;
                            if (n.controlNavScaffold = $('<ol class="' + i + "control-nav " + i + e + '"></ol>'), n.pagingCount > 1)
                                for (var r = 0; r < n.pagingCount; r++) {
                                    if (s = n.slides.eq(r), void 0 === s.attr("data-thumb-alt") && s.attr("data-thumb-alt", ""), altText = "" !== s.attr("data-thumb-alt") ? altText = ' alt="' + s.attr("data-thumb-alt") + '"' : "", a = "thumbnails" === n.vars.controlNav ? '<img src="' + s.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + t + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                        var c = s.attr("data-thumbcaption");
                                        "" !== c && void 0 !== c && (a += '<span class="' + i + 'caption">' + c + "</span>")
                                    }
                                    n.controlNavScaffold.append("<li>" + a + "</li>"), t++
                                }
                            n.controlsContainer ? $(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", o, function(e) {
                                if (e.preventDefault(), "" === l || l === e.type) {
                                    var t = $(this),
                                        a = n.controlNav.index(t);
                                    t.hasClass(i + "active") || (n.direction = a > n.currentSlide ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction))
                                }
                                "" === l && (l = e.type), f.setToClearWatchedEvent()
                            })
                        },
                        setupManual: function() {
                            n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(o, function(e) {
                                if (e.preventDefault(), "" === l || l === e.type) {
                                    var t = $(this),
                                        a = n.controlNav.index(t);
                                    t.hasClass(i + "active") || (a > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(a, n.vars.pauseOnAction))
                                }
                                "" === l && (l = e.type), f.setToClearWatchedEvent()
                            })
                        },
                        set: function() {
                            var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
                            n.controlNav = $("." + i + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n)
                        },
                        active: function() {
                            n.controlNav.removeClass(i + "active").eq(n.animatingTo).addClass(i + "active")
                        },
                        update: function(e, t) {
                            n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append($('<li><a href="#">' + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(t).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(t, e) : f.controlNav.active()
                        }
                    },
                    directionNav: {
                        setup: function() {
                            var e = $('<ul class="' + i + 'direction-nav"><li class="' + i + 'nav-prev"><a class="' + i + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + i + 'nav-next"><a class="' + i + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                            n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? ($(n.controlsContainer).append(e), n.directionNav = $("." + i + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = $("." + i + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(o, function(e) {
                                e.preventDefault();
                                var t;
                                ("" === l || l === e.type) && (t = $(this).hasClass(i + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(t, n.vars.pauseOnAction)), "" === l && (l = e.type), f.setToClearWatchedEvent()
                            })
                        },
                        update: function() {
                            var e = i + "disabled";
                            1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
                        }
                    },
                    pausePlay: {
                        setup: function() {
                            var e = $('<div class="' + i + 'pauseplay"><a href="#"></a></div>');
                            n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = $("." + i + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = $("." + i + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? i + "pause" : i + "play"), n.pausePlay.bind(o, function(e) {
                                e.preventDefault(), ("" === l || l === e.type) && ($(this).hasClass(i + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === l && (l = e.type), f.setToClearWatchedEvent()
                            })
                        },
                        update: function(e) {
                            "play" === e ? n.pausePlay.removeClass(i + "pause").addClass(i + "play").html(n.vars.playText) : n.pausePlay.removeClass(i + "play").addClass(i + "pause").html(n.vars.pauseText)
                        }
                    },
                    touch: function() {
                        function e(e) {
                            e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), T = 0, c = d ? n.h : n.w, f = Number(new Date), l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c)
                        }

                        function a(e) {
                            e.stopPropagation();
                            var a = e.target._slider;
                            if (a) {
                                var n = -e.translationX,
                                    i = -e.translationY;
                                return T += d ? i : n, m = T, x = d ? Math.abs(T) < Math.abs(-n) : Math.abs(T) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                    t._gesture.stop()
                                }) : void((!x || Number(new Date) - f > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (m = T / (0 === a.currentSlide && 0 > T || a.currentSlide === a.last && T > 0 ? Math.abs(T) / c + 2 : 1)), a.setProps(l + m, "setTouch"))))
                            }
                        }

                        function i(e) {
                            e.stopPropagation();
                            var t = e.target._slider;
                            if (t) {
                                if (t.animatingTo === t.currentSlide && !x && null !== m) {
                                    var a = u ? -m : m,
                                        n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
                                    t.canAdvance(n) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                                }
                                r = null, o = null, m = null, l = null, T = 0
                            }
                        }
                        var r, o, l, c, m, f, g, h, S, x = !1,
                            y = 0,
                            b = 0,
                            T = 0;
                        s ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", e, !1), t._slider = n, t.addEventListener("MSGestureChange", a, !1), t.addEventListener("MSGestureEnd", i, !1)) : (g = function(e) {
                            n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), c = d ? n.h : n.w, f = Number(new Date), y = e.touches[0].pageX, b = e.touches[0].pageY, l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c, r = d ? b : y, o = d ? y : b, t.addEventListener("touchmove", h, !1), t.addEventListener("touchend", S, !1))
                        }, h = function(e) {
                            y = e.touches[0].pageX, b = e.touches[0].pageY, m = d ? r - b : r - y, x = d ? Math.abs(m) < Math.abs(y - o) : Math.abs(m) < Math.abs(b - o);
                            var t = 500;
                            (!x || Number(new Date) - f > t) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (m /= 0 === n.currentSlide && 0 > m || n.currentSlide === n.last && m > 0 ? Math.abs(m) / c + 2 : 1), n.setProps(l + m, "setTouch")))
                        }, S = function(e) {
                            if (t.removeEventListener("touchmove", h, !1), n.animatingTo === n.currentSlide && !x && null !== m) {
                                var a = u ? -m : m,
                                    i = a > 0 ? n.getTarget("next") : n.getTarget("prev");
                                n.canAdvance(i) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? n.flexAnimate(i, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                            }
                            t.removeEventListener("touchend", S, !1), r = null, o = null, m = null, l = null
                        }, t.addEventListener("touchstart", g, !1))
                    },
                    resize: function() {
                        !n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
                    },
                    smoothHeight: function(e) {
                        if (!d || p) {
                            var t = p ? n : n.viewport;
                            e ? t.animate({
                                height: n.slides.eq(n.animatingTo).height()
                            }, e) : t.height(n.slides.eq(n.animatingTo).height())
                        }
                    },
                    sync: function(e) {
                        var t = $(n.vars.sync).data("flexslider"),
                            a = n.animatingTo;
                        switch (e) {
                            case "animate":
                                t.flexAnimate(a, n.vars.pauseOnAction, !1, !0);
                                break;
                            case "play":
                                t.playing || t.asNav || t.play();
                                break;
                            case "pause":
                                t.pause()
                        }
                    },
                    uniqueID: function(e) {
                        return e.filter("[id]").add(e.find("[id]")).each(function() {
                            var e = $(this);
                            e.attr("id", e.attr("id") + "_clone")
                        }), e
                    },
                    pauseInvisible: {
                        visProp: null,
                        init: function() {
                            var e = f.pauseInvisible.getHiddenProp();
                            if (e) {
                                var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                                document.addEventListener(t, function() {
                                    f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                                })
                            }
                        },
                        isHidden: function() {
                            var e = f.pauseInvisible.getHiddenProp();
                            return !!e && document[e]
                        },
                        getHiddenProp: function() {
                            var e = ["webkit", "moz", "ms", "o"];
                            if ("hidden" in document) return "hidden";
                            for (var t = 0; t < e.length; t++)
                                if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                            return null
                        }
                    },
                    setToClearWatchedEvent: function() {
                        clearTimeout(c), c = setTimeout(function() {
                            l = ""
                        }, 3e3)
                    }
                }, n.flexAnimate = function(e, t, a, s, o) {
                    if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, o) || a) && n.is(":visible")) {
                        if (m && s) {
                            var l = $(n.vars.asNavFor).data("flexslider");
                            if (n.atEnd = 0 === e || e === n.count - 1, l.flexAnimate(e, !0, !1, !0, o), n.direction = n.currentItem < e ? "next" : "prev", l.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), !1;
                            n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), e = Math.floor(e / n.visible)
                        }
                        if (n.animating = !0, n.animatingTo = e, t && n.pause(), n.vars.before(n), n.syncExists && !o && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && f.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) r ? (n.slides.eq(n.currentSlide).css({
                            opacity: 0,
                            zIndex: 1
                        }), n.slides.eq(e).css({
                            opacity: 1,
                            zIndex: 2
                        }), n.wrapup(c)) : (n.slides.eq(n.currentSlide).css({
                            zIndex: 1
                        }).animate({
                            opacity: 0
                        }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({
                            zIndex: 2
                        }).animate({
                            opacity: 1
                        }, n.vars.animationSpeed, n.vars.easing, n.wrapup));
                        else {
                            var g, h, S, c = d ? n.slides.filter(":first").height() : n.computedW;
                            v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * c : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * c : u ? (n.count - 1 - e + n.cloneOffset) * c : (e + n.cloneOffset) * c, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function() {
                                clearTimeout(n.ensureAnimationEnd), n.wrapup(c)
                            }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function() {
                                n.wrapup(c)
                            }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function() {
                                n.wrapup(c)
                            })
                        }
                        n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
                    }
                }, n.wrapup = function(e) {
                    p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
                }, n.animateSlides = function() {
                    !n.animating && e && n.flexAnimate(n.getTarget("next"))
                }, n.pause = function() {
                    clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
                }, n.play = function() {
                    n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
                }, n.stop = function() {
                    n.pause(), n.stopped = !0
                }, n.canAdvance = function(e, t) {
                    var a = m ? n.pagingCount - 1 : n.last;
                    return !!t || (!(!m || n.currentItem !== n.count - 1 || 0 !== e || "prev" !== n.direction) || (!m || 0 !== n.currentItem || e !== n.pagingCount - 1 || "next" === n.direction) && (!(e === n.currentSlide && !m) && (!!n.vars.animationLoop || (!n.atEnd || 0 !== n.currentSlide || e !== a || "next" === n.direction) && (!n.atEnd || n.currentSlide !== a || 0 !== e || "next" !== n.direction))))
                }, n.getTarget = function(e) {
                    return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
                }, n.setProps = function(e, t, a) {
                    var i = function() {
                        var a = e ? e : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo,
                            i = function() {
                                if (v) return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
                                switch (t) {
                                    case "setTotal":
                                        return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
                                    case "setTouch":
                                        return u ? e : e;
                                    case "jumpEnd":
                                        return u ? e : n.count * e;
                                    case "jumpStart":
                                        return u ? n.count * e : e;
                                    default:
                                        return e
                                }
                            }();
                        return -1 * i + "px"
                    }();
                    n.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
                }, n.setup = function(e) {
                    if (p) n.slides.css({
                        width: "100%",
                        "float": "left",
                        marginRight: "-100%",
                        position: "relative"
                    }), "init" === e && (r ? n.slides.css({
                        opacity: 0,
                        display: "block",
                        webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                        zIndex: 1
                    }).eq(n.currentSlide).css({
                        opacity: 1,
                        zIndex: 2
                    }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                        opacity: 0,
                        display: "block",
                        zIndex: 1
                    }).eq(n.currentSlide).css({
                        zIndex: 2
                    }).css({
                        opacity: 1
                    }) : n.slides.css({
                        opacity: 0,
                        display: "block",
                        zIndex: 1
                    }).eq(n.currentSlide).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight();
                    else {
                        var t, a;
                        "init" === e && (n.viewport = $('<div class="' + i + 'viewport"></div>').css({
                            overflow: "hidden",
                            position: "relative"
                        }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (a = $.makeArray(n.slides).reverse(), n.slides = $(a), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = $(n.vars.selector, n), t = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                            n.newSlides.css({
                                display: "block"
                            }), n.doMath(), n.viewport.height(n.h), n.setProps(t * n.h, "init")
                        }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(t * n.computedW, "init"), setTimeout(function() {
                            n.doMath(), n.newSlides.css({
                                width: n.computedW,
                                marginRight: n.computedM,
                                "float": "left",
                                display: "block"
                            }), n.vars.smoothHeight && f.smoothHeight()
                        }, "init" === e ? 100 : 0))
                    }
                    v || n.slides.removeClass(i + "active-slide").eq(n.currentSlide).addClass(i + "active-slide"), n.vars.init(n)
                }, n.doMath = function() {
                    var e = n.slides.first(),
                        t = n.vars.itemMargin,
                        a = n.vars.minItems,
                        i = n.vars.maxItems;
                    n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.itemM = t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.itemM = t, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding, n.computedM = n.itemM
                }, n.update = function(e, t) {
                    n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
                }, n.addSlide = function(e, t) {
                    var a = $(e);
                    n.count += 1, n.last = n.count - 1, d && u ? void 0 !== t ? n.slides.eq(n.count - t).after(a) : n.container.prepend(a) : void 0 !== t ? n.slides.eq(t).before(a) : n.container.append(a), n.update(t, "add"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
                }, n.removeSlide = function(e) {
                    var t = isNaN(e) ? n.slides.index($(e)) : e;
                    n.count -= 1, n.last = n.count - 1, isNaN(e) ? $(e, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(t, "remove"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
                }, f.init()
            }, $(window).blur(function(t) {
                e = !1
            }).focus(function(t) {
                e = !0
            }), $.flexslider.defaults = {
                namespace: "flex-",
                selector: ".slides > li",
                animation: "fade",
                easing: "swing",
                direction: "horizontal",
                reverse: !1,
                animationLoop: !0,
                smoothHeight: !1,
                startAt: 0,
                slideshow: !0,
                slideshowSpeed: 7e3,
                animationSpeed: 600,
                initDelay: 0,
                randomize: !1,
                fadeFirstSlide: !0,
                thumbCaptions: !1,
                pauseOnAction: !0,
                pauseOnHover: !1,
                pauseInvisible: !0,
                useCSS: !0,
                touch: !0,
                video: !1,
                controlNav: !0,
                directionNav: !0,
                prevText: "Previous",
                nextText: "Next",
                keyboard: !0,
                multipleKeyboard: !1,
                mousewheel: !1,
                pausePlay: !1,
                pauseText: "Pause",
                playText: "Play",
                controlsContainer: "",
                manualControls: "",
                customDirectionNav: "",
                sync: "",
                asNavFor: "",
                itemWidth: 0,
                itemMargin: 0,
                minItems: 1,
                maxItems: 0,
                move: 0,
                allowOneSlide: !0,
                start: function() {},
                before: function() {},
                after: function() {},
                end: function() {},
                added: function() {},
                removed: function() {},
                init: function() {}
            }, $.fn.flexslider = function(e) {
                if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
                    var t = $(this),
                        a = e.selector ? e.selector : ".slides > li",
                        n = t.find(a);
                    1 === n.length && e.allowOneSlide === !0 || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e)
                });
                var t = $(this).data("flexslider");
                switch (e) {
                    case "play":
                        t.play();
                        break;
                    case "pause":
                        t.pause();
                        break;
                    case "stop":
                        t.stop();
                        break;
                    case "next":
                        t.flexAnimate(t.getTarget("next"), !0);
                        break;
                    case "prev":
                    case "previous":
                        t.flexAnimate(t.getTarget("prev"), !0);
                        break;
                    default:
                        "number" == typeof e && t.flexAnimate(e, !0)
                }
            }
        }(jQuery)
    }).call(exports, __webpack_require__(3).setImmediate)
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
     * imagesLoaded v4.1.0
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    ! function(window, factory) {
        "use strict";
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(31)], __WEBPACK_AMD_DEFINE_RESULT__ = function(EvEmitter) {
            return factory(window, EvEmitter)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }(window, function(window, EvEmitter) {
        "use strict";

        function extend(a, b) {
            for (var prop in b) a[prop] = b[prop];
            return a
        }

        function makeArray(obj) {
            var ary = [];
            if (Array.isArray(obj)) ary = obj;
            else if ("number" == typeof obj.length)
                for (var i = 0; i < obj.length; i++) ary.push(obj[i]);
            else ary.push(obj);
            return ary
        }

        function ImagesLoaded(elem, options, onAlways) {
            return this instanceof ImagesLoaded ? ("string" == typeof elem && (elem = document.querySelectorAll(elem)), this.elements = makeArray(elem), this.options = extend({}, this.options), "function" == typeof options ? onAlways = options : extend(this.options, options), onAlways && this.on("always", onAlways), this.getImages(), $ && (this.jqDeferred = new $.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new ImagesLoaded(elem, options, onAlways)
        }

        function LoadingImage(img) {
            this.img = img
        }

        function Background(url, element) {
            this.url = url, this.element = element, this.img = new Image
        }
        var $ = window.jQuery,
            console = window.console;
        ImagesLoaded.prototype = Object.create(EvEmitter.prototype), ImagesLoaded.prototype.options = {}, ImagesLoaded.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, ImagesLoaded.prototype.addElementImages = function(elem) {
            "IMG" == elem.nodeName && this.addImage(elem), this.options.background === !0 && this.addElementBackgroundImages(elem);
            var nodeType = elem.nodeType;
            if (nodeType && elementNodeTypes[nodeType]) {
                for (var childImgs = elem.querySelectorAll("img"), i = 0; i < childImgs.length; i++) {
                    var img = childImgs[i];
                    this.addImage(img)
                }
                if ("string" == typeof this.options.background) {
                    var children = elem.querySelectorAll(this.options.background);
                    for (i = 0; i < children.length; i++) {
                        var child = children[i];
                        this.addElementBackgroundImages(child)
                    }
                }
            }
        };
        var elementNodeTypes = {
            1: !0,
            9: !0,
            11: !0
        };
        return ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
            var style = getComputedStyle(elem);
            if (style)
                for (var reURL = /url\((['"])?(.*?)\1\)/gi, matches = reURL.exec(style.backgroundImage); null !== matches;) {
                    var url = matches && matches[2];
                    url && this.addBackground(url, elem), matches = reURL.exec(style.backgroundImage)
                }
        }, ImagesLoaded.prototype.addImage = function(img) {
            var loadingImage = new LoadingImage(img);
            this.images.push(loadingImage)
        }, ImagesLoaded.prototype.addBackground = function(url, elem) {
            var background = new Background(url, elem);
            this.images.push(background)
        }, ImagesLoaded.prototype.check = function() {
            function onProgress(image, elem, message) {
                setTimeout(function() {
                    _this.progress(image, elem, message)
                })
            }
            var _this = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(loadingImage) {
                loadingImage.once("progress", onProgress), loadingImage.check()
            }) : void this.complete()
        }, ImagesLoaded.prototype.progress = function(image, elem, message) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded, this.emitEvent("progress", [this, image, elem]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, image), this.progressedCount == this.images.length && this.complete(), this.options.debug && console && console.log("progress: " + message, image, elem)
        }, ImagesLoaded.prototype.complete = function() {
            var eventName = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(eventName, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[jqMethod](this)
            }
        }, LoadingImage.prototype = Object.create(EvEmitter.prototype), LoadingImage.prototype.check = function() {
            var isComplete = this.getIsImageComplete();
            return isComplete ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, LoadingImage.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, LoadingImage.prototype.confirm = function(isLoaded, message) {
            this.isLoaded = isLoaded, this.emitEvent("progress", [this, this.img, message])
        }, LoadingImage.prototype.handleEvent = function(event) {
            var method = "on" + event.type;
            this[method] && this[method](event)
        }, LoadingImage.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, LoadingImage.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, LoadingImage.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, Background.prototype = Object.create(LoadingImage.prototype), Background.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var isComplete = this.getIsImageComplete();
            isComplete && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, Background.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, Background.prototype.confirm = function(isLoaded, message) {
            this.isLoaded = isLoaded, this.emitEvent("progress", [this, this.element, message])
        }, ImagesLoaded.makeJQueryPlugin = function(jQuery) {
            jQuery = jQuery || window.jQuery, jQuery && ($ = jQuery, $.fn.imagesLoaded = function(options, callback) {
                var instance = new ImagesLoaded(this, options, callback);
                return instance.jqDeferred.promise($(this))
            })
        }, ImagesLoaded.makeJQueryPlugin(), ImagesLoaded
    })
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    ! function(global, factory) {
        __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }("undefined" != typeof window ? window : this, function() {
        "use strict";

        function EvEmitter() {}
        var proto = EvEmitter.prototype;
        return proto.on = function(eventName, listener) {
            if (eventName && listener) {
                var events = this._events = this._events || {},
                    listeners = events[eventName] = events[eventName] || [];
                return listeners.indexOf(listener) == -1 && listeners.push(listener), this
            }
        }, proto.once = function(eventName, listener) {
            if (eventName && listener) {
                this.on(eventName, listener);
                var onceEvents = this._onceEvents = this._onceEvents || {},
                    onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
                return onceListeners[listener] = !0, this
            }
        }, proto.off = function(eventName, listener) {
            var listeners = this._events && this._events[eventName];
            if (listeners && listeners.length) {
                var index = listeners.indexOf(listener);
                return index != -1 && listeners.splice(index, 1), this
            }
        }, proto.emitEvent = function(eventName, args) {
            var listeners = this._events && this._events[eventName];
            if (listeners && listeners.length) {
                var i = 0,
                    listener = listeners[i];
                args = args || [];
                for (var onceListeners = this._onceEvents && this._onceEvents[eventName]; listener;) {
                    var isOnce = onceListeners && onceListeners[listener];
                    isOnce && (this.off(eventName, listener), delete onceListeners[listener]), listener.apply(this, args), i += isOnce ? 0 : 1, listener = listeners[i]
                }
                return this
            }
        }, EvEmitter
    })
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
     * jQuery Mousewheel 3.1.13
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     */
    ! function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }(function($) {
        function handler(event) {
            var orgEvent = event || window.event,
                args = slice.call(arguments, 1),
                delta = 0,
                deltaX = 0,
                deltaY = 0,
                absDelta = 0,
                offsetX = 0,
                offsetY = 0;
            if (event = $.event.fix(orgEvent), event.type = "mousewheel", "detail" in orgEvent && (deltaY = orgEvent.detail * -1), "wheelDelta" in orgEvent && (deltaY = orgEvent.wheelDelta), "wheelDeltaY" in orgEvent && (deltaY = orgEvent.wheelDeltaY), "wheelDeltaX" in orgEvent && (deltaX = orgEvent.wheelDeltaX * -1), "axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS && (deltaX = deltaY * -1, deltaY = 0), delta = 0 === deltaY ? deltaX : deltaY, "deltaY" in orgEvent && (deltaY = orgEvent.deltaY * -1, delta = deltaY), "deltaX" in orgEvent && (deltaX = orgEvent.deltaX, 0 === deltaY && (delta = deltaX * -1)), 0 !== deltaY || 0 !== deltaX) {
                if (1 === orgEvent.deltaMode) {
                    var lineHeight = $.data(this, "mousewheel-line-height");
                    delta *= lineHeight, deltaY *= lineHeight, deltaX *= lineHeight
                } else if (2 === orgEvent.deltaMode) {
                    var pageHeight = $.data(this, "mousewheel-page-height");
                    delta *= pageHeight, deltaY *= pageHeight, deltaX *= pageHeight
                }
                if (absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX)), (!lowestDelta || absDelta < lowestDelta) && (lowestDelta = absDelta, shouldAdjustOldDeltas(orgEvent, absDelta) && (lowestDelta /= 40)), shouldAdjustOldDeltas(orgEvent, absDelta) && (delta /= 40, deltaX /= 40, deltaY /= 40), delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta), deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta), deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta), special.settings.normalizeOffset && this.getBoundingClientRect) {
                    var boundingRect = this.getBoundingClientRect();
                    offsetX = event.clientX - boundingRect.left, offsetY = event.clientY - boundingRect.top
                }
                return event.deltaX = deltaX, event.deltaY = deltaY, event.deltaFactor = lowestDelta, event.offsetX = offsetX, event.offsetY = offsetY, event.deltaMode = 0, args.unshift(event, delta, deltaX, deltaY), nullLowestDeltaTimeout && clearTimeout(nullLowestDeltaTimeout), nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200), ($.event.dispatch || $.event.handle).apply(this, args)
            }
        }

        function nullLowestDelta() {
            lowestDelta = null
        }

        function shouldAdjustOldDeltas(orgEvent, absDelta) {
            return special.settings.adjustOldDeltas && "mousewheel" === orgEvent.type && absDelta % 120 === 0
        }
        var nullLowestDeltaTimeout, lowestDelta, toFix = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            toBind = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            slice = Array.prototype.slice;
        if ($.event.fixHooks)
            for (var i = toFix.length; i;) $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        var special = $.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var i = toBind.length; i;) this.addEventListener(toBind[--i], handler, !1);
                else this.onmousewheel = handler;
                $.data(this, "mousewheel-line-height", special.getLineHeight(this)), $.data(this, "mousewheel-page-height", special.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var i = toBind.length; i;) this.removeEventListener(toBind[--i], handler, !1);
                else this.onmousewheel = null;
                $.removeData(this, "mousewheel-line-height"), $.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(elem) {
                var $elem = $(elem),
                    $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
                return $parent.length || ($parent = $("body")), parseInt($parent.css("fontSize"), 10) || parseInt($elem.css("fontSize"), 10) || 16
            },
            getPageHeight: function(elem) {
                return $(elem).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        $.fn.extend({
            mousewheel: function(fn) {
                return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel")
            },
            unmousewheel: function(fn) {
                return this.unbind("mousewheel", fn)
            }
        })
    })
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
     * jQuery Validation Plugin v1.15.0
     *
     * http://jqueryvalidation.org/
     *
     * Copyright (c) 2016 JÃ¶rn Zaefferer
     * Released under the MIT license
     */
    ! function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }(function($) {
        $.extend($.fn, {
            validate: function(options) {
                if (!this.length) return void(options && options.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var validator = $.data(this[0], "validator");
                return validator ? validator : (this.attr("novalidate", "novalidate"), validator = new $.validator(options, this[0]), $.data(this[0], "validator", validator), validator.settings.onsubmit && (this.on("click.validate", ":submit", function(event) {
                    validator.settings.submitHandler && (validator.submitButton = event.target), $(this).hasClass("cancel") && (validator.cancelSubmit = !0), void 0 !== $(this).attr("formnovalidate") && (validator.cancelSubmit = !0)
                }), this.on("submit.validate", function(event) {
                    function handle() {
                        var hidden, result;
                        return !validator.settings.submitHandler || (validator.submitButton && (hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm)), result = validator.settings.submitHandler.call(validator, validator.currentForm, event), validator.submitButton && hidden.remove(), void 0 !== result && result)
                    }
                    return validator.settings.debug && event.preventDefault(), validator.cancelSubmit ? (validator.cancelSubmit = !1, handle()) : validator.form() ? validator.pendingRequest ? (validator.formSubmitted = !0, !1) : handle() : (validator.focusInvalid(), !1)
                })), validator)
            },
            valid: function() {
                var valid, validator, errorList;
                return $(this[0]).is("form") ? valid = this.validate().form() : (errorList = [], valid = !0, validator = $(this[0].form).validate(), this.each(function() {
                    valid = validator.element(this) && valid, valid || (errorList = errorList.concat(validator.errorList))
                }), validator.errorList = errorList), valid
            },
            rules: function(command, argument) {
                if (this.length) {
                    var settings, staticRules, existingRules, data, param, filtered, element = this[0];
                    if (command) switch (settings = $.data(element.form, "validator").settings, staticRules = settings.rules, existingRules = $.validator.staticRules(element), command) {
                        case "add":
                            $.extend(existingRules, $.validator.normalizeRule(argument)), delete existingRules.messages, staticRules[element.name] = existingRules, argument.messages && (settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages));
                            break;
                        case "remove":
                            return argument ? (filtered = {}, $.each(argument.split(/\s/), function(index, method) {
                                filtered[method] = existingRules[method], delete existingRules[method], "required" === method && $(element).removeAttr("aria-required")
                            }), filtered) : (delete staticRules[element.name], existingRules)
                    }
                    return data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element), data.required && (param = data.required, delete data.required, data = $.extend({
                        required: param
                    }, data), $(element).attr("aria-required", "true")), data.remote && (param = data.remote, delete data.remote, data = $.extend(data, {
                        remote: param
                    })), data
                }
            }
        }), $.extend($.expr[":"], {
            blank: function(a) {
                return !$.trim("" + $(a).val())
            },
            filled: function(a) {
                var val = $(a).val();
                return null !== val && !!$.trim("" + val)
            },
            unchecked: function(a) {
                return !$(a).prop("checked")
            }
        }), $.validator = function(options, form) {
            this.settings = $.extend(!0, {}, $.validator.defaults, options), this.currentForm = form, this.init()
        }, $.validator.format = function(source, params) {
            return 1 === arguments.length ? function() {
                var args = $.makeArray(arguments);
                return args.unshift(source), $.validator.format.apply(this, args)
            } : void 0 === params ? source : (arguments.length > 2 && params.constructor !== Array && (params = $.makeArray(arguments).slice(1)), params.constructor !== Array && (params = [params]), $.each(params, function(i, n) {
                source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
                    return n
                })
            }), source)
        }, $.extend($.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: $([]),
                errorLabelContainer: $([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(element) {
                    this.lastActive = element, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(element)))
                },
                onfocusout: function(element) {
                    this.checkable(element) || !(element.name in this.submitted) && this.optional(element) || this.element(element)
                },
                onkeyup: function(element, event) {
                    var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === event.which && "" === this.elementValue(element) || $.inArray(event.keyCode, excludedKeys) !== -1 || (element.name in this.submitted || element.name in this.invalid) && this.element(element)
                },
                onclick: function(element) {
                    element.name in this.submitted ? this.element(element) : element.parentNode.name in this.submitted && this.element(element.parentNode)
                },
                highlight: function(element, errorClass, validClass) {
                    "radio" === element.type ? this.findByName(element.name).addClass(errorClass).removeClass(validClass) : $(element).addClass(errorClass).removeClass(validClass)
                },
                unhighlight: function(element, errorClass, validClass) {
                    "radio" === element.type ? this.findByName(element.name).removeClass(errorClass).addClass(validClass) : $(element).removeClass(errorClass).addClass(validClass)
                }
            },
            setDefaults: function(settings) {
                $.extend($.validator.defaults, settings)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: $.validator.format("Please enter no more than {0} characters."),
                minlength: $.validator.format("Please enter at least {0} characters."),
                rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
                range: $.validator.format("Please enter a value between {0} and {1}."),
                max: $.validator.format("Please enter a value less than or equal to {0}."),
                min: $.validator.format("Please enter a value greater than or equal to {0}."),
                step: $.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function delegate(event) {
                        var validator = $.data(this.form, "validator"),
                            eventType = "on" + event.type.replace(/^validate/, ""),
                            settings = validator.settings;
                        settings[eventType] && !$(this).is(settings.ignore) && settings[eventType].call(validator, this, event)
                    }
                    this.labelContainer = $(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm), this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var rules, groups = this.groups = {};
                    $.each(this.settings.groups, function(key, value) {
                        "string" == typeof value && (value = value.split(/\s/)), $.each(value, function(index, name) {
                            groups[name] = key
                        })
                    }), rules = this.settings.rules, $.each(rules, function(key, value) {
                        rules[key] = $.validator.normalizeRule(value)
                    }), $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", delegate).on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate), this.settings.invalidHandler && $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() {
                    return this.checkForm(), $.extend(this.submitted, this.errorMap), this.invalid = $.extend({}, this.errorMap), this.valid() || $(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) this.check(elements[i]);
                    return this.valid()
                },
                element: function(element) {
                    var rs, group, cleanElement = this.clean(element),
                        checkElement = this.validationTargetFor(cleanElement),
                        v = this,
                        result = !0;
                    return void 0 === checkElement ? delete this.invalid[cleanElement.name] : (this.prepareElement(checkElement), this.currentElements = $(checkElement), group = this.groups[checkElement.name], group && $.each(this.groups, function(name, testgroup) {
                        testgroup === group && name !== checkElement.name && (cleanElement = v.validationTargetFor(v.clean(v.findByName(name))), cleanElement && cleanElement.name in v.invalid && (v.currentElements.push(cleanElement), result = result && v.check(cleanElement)))
                    }), rs = this.check(checkElement) !== !1, result = result && rs, rs ? this.invalid[checkElement.name] = !1 : this.invalid[checkElement.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), $(element).attr("aria-invalid", !rs)), result
                },
                showErrors: function(errors) {
                    if (errors) {
                        var validator = this;
                        $.extend(this.errorMap, errors), this.errorList = $.map(this.errorMap, function(message, name) {
                            return {
                                message: message,
                                element: validator.findByName(name)[0]
                            }
                        }), this.successList = $.grep(this.successList, function(element) {
                            return !(element.name in errors)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    $.fn.resetForm && $(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(elements)
                },
                resetElements: function(elements) {
                    var i;
                    if (this.settings.unhighlight)
                        for (i = 0; elements[i]; i++) this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, ""), this.findByName(elements[i].name).removeClass(this.settings.validClass);
                    else elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(obj) {
                    var i, count = 0;
                    for (i in obj) obj[i] && count++;
                    return count
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(errors) {
                    errors.not(this.containers).text(""), this.addWrapper(errors).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var lastActive = this.lastActive;
                    return lastActive && 1 === $.grep(this.errorList, function(n) {
                        return n.element.name === lastActive.name
                    }).length && lastActive
                },
                elements: function() {
                    var validator = this,
                        rulesCache = {};
                    return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        var name = this.name || $(this).attr("name");
                        return !name && validator.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = $(this).closest("form")[0]), !(name in rulesCache || !validator.objectLength($(this).rules())) && (rulesCache[name] = !0, !0)
                    })
                },
                clean: function(selector) {
                    return $(selector)[0]
                },
                errors: function() {
                    var errorClass = this.settings.errorClass.split(" ").join(".");
                    return $(this.settings.errorElement + "." + errorClass, this.errorContext)
                },
                resetInternals: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = $([]), this.toHide = $([])
                },
                reset: function() {
                    this.resetInternals(), this.currentElements = $([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(element) {
                    this.reset(), this.toHide = this.errorsFor(element)
                },
                elementValue: function(element) {
                    var val, idx, $element = $(element),
                        type = element.type;
                    return "radio" === type || "checkbox" === type ? this.findByName(element.name).filter(":checked").val() : "number" === type && "undefined" != typeof element.validity ? element.validity.badInput ? "NaN" : $element.val() : (val = element.hasAttribute("contenteditable") ? $element.text() : $element.val(), "file" === type ? "C:\\fakepath\\" === val.substr(0, 12) ? val.substr(12) : (idx = val.lastIndexOf("/"), idx >= 0 ? val.substr(idx + 1) : (idx = val.lastIndexOf("\\"), idx >= 0 ? val.substr(idx + 1) : val)) : "string" == typeof val ? val.replace(/\r/g, "") : val)
                },
                check: function(element) {
                    element = this.validationTargetFor(this.clean(element));
                    var result, method, rule, rules = $(element).rules(),
                        rulesCount = $.map(rules, function(n, i) {
                            return i
                        }).length,
                        dependencyMismatch = !1,
                        val = this.elementValue(element);
                    if ("function" == typeof rules.normalizer) {
                        if (val = rules.normalizer.call(element, val), "string" != typeof val) throw new TypeError("The normalizer should return a string value.");
                        delete rules.normalizer
                    }
                    for (method in rules) {
                        rule = {
                            method: method,
                            parameters: rules[method]
                        };
                        try {
                            if (result = $.validator.methods[method].call(this, val, element, rule.parameters), "dependency-mismatch" === result && 1 === rulesCount) {
                                dependencyMismatch = !0;
                                continue
                            }
                            if (dependencyMismatch = !1, "pending" === result) return void(this.toHide = this.toHide.not(this.errorsFor(element)));
                            if (!result) return this.formatAndAdd(element, rule), !1
                        } catch (e) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method."), e
                        }
                    }
                    if (!dependencyMismatch) return this.objectLength(rules) && this.successList.push(element), !0
                },
                customDataMessage: function(element, method) {
                    return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg")
                },
                customMessage: function(name, method) {
                    var m = this.settings.messages[name];
                    return m && (m.constructor === String ? m : m[method])
                },
                findDefined: function() {
                    for (var i = 0; i < arguments.length; i++)
                        if (void 0 !== arguments[i]) return arguments[i]
                },
                defaultMessage: function(element, rule) {
                    var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method), !this.settings.ignoreTitle && element.title || void 0, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>"),
                        theregex = /\$?\{(\d+)\}/g;
                    return "function" == typeof message ? message = message.call(this, rule.parameters, element) : theregex.test(message) && (message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters)), message
                },
                formatAndAdd: function(element, rule) {
                    var message = this.defaultMessage(element, rule);
                    this.errorList.push({
                        message: message,
                        element: element,
                        method: rule.method
                    }), this.errorMap[element.name] = message, this.submitted[element.name] = message
                },
                addWrapper: function(toToggle) {
                    return this.settings.wrapper && (toToggle = toToggle.add(toToggle.parent(this.settings.wrapper))), toToggle
                },
                defaultShowErrors: function() {
                    var i, elements, error;
                    for (i = 0; this.errorList[i]; i++) error = this.errorList[i], this.settings.highlight && this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass), this.showLabel(error.element, error.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (i = 0; this.successList[i]; i++) this.showLabel(this.successList[i]);
                    if (this.settings.unhighlight)
                        for (i = 0, elements = this.validElements(); elements[i]; i++) this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return $(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(element, message) {
                    var place, group, errorID, v, error = this.errorsFor(element),
                        elementID = this.idOrName(element),
                        describedBy = $(element).attr("aria-describedby");
                    error.length ? (error.removeClass(this.settings.validClass).addClass(this.settings.errorClass), error.html(message)) : (error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || ""), place = error, this.settings.wrapper && (place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(place) : this.settings.errorPlacement ? this.settings.errorPlacement(place, $(element)) : place.insertAfter(element), error.is("label") ? error.attr("for", elementID) : 0 === error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length && (errorID = error.attr("id"), describedBy ? describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b")) || (describedBy += " " + errorID) : describedBy = errorID, $(element).attr("aria-describedby", describedBy), group = this.groups[element.name], group && (v = this, $.each(v.groups, function(name, testgroup) {
                        testgroup === group && $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"))
                    })))), !message && this.settings.success && (error.text(""), "string" == typeof this.settings.success ? error.addClass(this.settings.success) : this.settings.success(error, element)), this.toShow = this.toShow.add(error)
                },
                errorsFor: function(element) {
                    var name = this.escapeCssMeta(this.idOrName(element)),
                        describer = $(element).attr("aria-describedby"),
                        selector = "label[for='" + name + "'], label[for='" + name + "'] *";
                    return describer && (selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #")), this.errors().filter(selector)
                },
                escapeCssMeta: function(string) {
                    return string.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function(element) {
                    return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name)
                },
                validationTargetFor: function(element) {
                    return this.checkable(element) && (element = this.findByName(element.name)), $(element).not(this.settings.ignore)[0]
                },
                checkable: function(element) {
                    return /radio|checkbox/i.test(element.type)
                },
                findByName: function(name) {
                    return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']")
                },
                getLength: function(value, element) {
                    switch (element.nodeName.toLowerCase()) {
                        case "select":
                            return $("option:selected", element).length;
                        case "input":
                            if (this.checkable(element)) return this.findByName(element.name).filter(":checked").length
                    }
                    return value.length
                },
                depend: function(param, element) {
                    return !this.dependTypes[typeof param] || this.dependTypes[typeof param](param, element)
                },
                dependTypes: {
                    "boolean": function(param) {
                        return param
                    },
                    string: function(param, element) {
                        return !!$(param, element.form).length
                    },
                    "function": function(param, element) {
                        return param(element)
                    }
                },
                optional: function(element) {
                    var val = this.elementValue(element);
                    return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch"
                },
                startRequest: function(element) {
                    this.pending[element.name] || (this.pendingRequest++, $(element).addClass(this.settings.pendingClass), this.pending[element.name] = !0)
                },
                stopRequest: function(element, valid) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[element.name], $(element).removeClass(this.settings.pendingClass), valid && 0 === this.pendingRequest && this.formSubmitted && this.form() ? ($(this.currentForm).submit(), this.formSubmitted = !1) : !valid && 0 === this.pendingRequest && this.formSubmitted && ($(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(element, method) {
                    return $.data(element, "previousValue") || $.data(element, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(element, {
                            method: method
                        })
                    })
                },
                destroy: function() {
                    this.resetForm(), $(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(className, rules) {
                className.constructor === String ? this.classRuleSettings[className] = rules : $.extend(this.classRuleSettings, className)
            },
            classRules: function(element) {
                var rules = {},
                    classes = $(element).attr("class");
                return classes && $.each(classes.split(" "), function() {
                    this in $.validator.classRuleSettings && $.extend(rules, $.validator.classRuleSettings[this])
                }), rules
            },
            normalizeAttributeRule: function(rules, type, method, value) {
                /min|max|step/.test(method) && (null === type || /number|range|text/.test(type)) && (value = Number(value), isNaN(value) && (value = void 0)), value || 0 === value ? rules[method] = value : type === method && "range" !== type && (rules[method] = !0)
            },
            attributeRules: function(element) {
                var method, value, rules = {},
                    $element = $(element),
                    type = element.getAttribute("type");
                for (method in $.validator.methods) "required" === method ? (value = element.getAttribute(method), "" === value && (value = !0), value = !!value) : value = $element.attr(method), this.normalizeAttributeRule(rules, type, method, value);
                return rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength) && delete rules.maxlength, rules
            },
            dataRules: function(element) {
                var method, value, rules = {},
                    $element = $(element),
                    type = element.getAttribute("type");
                for (method in $.validator.methods) value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()), this.normalizeAttributeRule(rules, type, method, value);
                return rules
            },
            staticRules: function(element) {
                var rules = {},
                    validator = $.data(element.form, "validator");
                return validator.settings.rules && (rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {}), rules
            },
            normalizeRules: function(rules, element) {
                return $.each(rules, function(prop, val) {
                    if (val === !1) return void delete rules[prop];
                    if (val.param || val.depends) {
                        var keepRule = !0;
                        switch (typeof val.depends) {
                            case "string":
                                keepRule = !!$(val.depends, element.form).length;
                                break;
                            case "function":
                                keepRule = val.depends.call(element, element)
                        }
                        keepRule ? rules[prop] = void 0 === val.param || val.param : ($.data(element.form, "validator").resetElements($(element)), delete rules[prop])
                    }
                }), $.each(rules, function(rule, parameter) {
                    rules[rule] = $.isFunction(parameter) && "normalizer" !== rule ? parameter(element) : parameter
                }), $.each(["minlength", "maxlength"], function() {
                    rules[this] && (rules[this] = Number(rules[this]))
                }), $.each(["rangelength", "range"], function() {
                    var parts;
                    rules[this] && ($.isArray(rules[this]) ? rules[this] = [Number(rules[this][0]), Number(rules[this][1])] : "string" == typeof rules[this] && (parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/), rules[this] = [Number(parts[0]), Number(parts[1])]))
                }), $.validator.autoCreateRanges && (null != rules.min && null != rules.max && (rules.range = [rules.min, rules.max], delete rules.min, delete rules.max), null != rules.minlength && null != rules.maxlength && (rules.rangelength = [rules.minlength, rules.maxlength], delete rules.minlength, delete rules.maxlength)), rules
            },
            normalizeRule: function(data) {
                if ("string" == typeof data) {
                    var transformed = {};
                    $.each(data.split(/\s/), function() {
                        transformed[this] = !0
                    }), data = transformed
                }
                return data
            },
            addMethod: function(name, method, message) {
                $.validator.methods[name] = method, $.validator.messages[name] = void 0 !== message ? message : $.validator.messages[name], method.length < 3 && $.validator.addClassRules(name, $.validator.normalizeRule(name))
            },
            methods: {
                required: function(value, element, param) {
                    if (!this.depend(param, element)) return "dependency-mismatch";
                    if ("select" === element.nodeName.toLowerCase()) {
                        var val = $(element).val();
                        return val && val.length > 0
                    }
                    return this.checkable(element) ? this.getLength(value, element) > 0 : value.length > 0
                },
                email: function(value, element) {
                    return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
                },
                url: function(value, element) {
                    return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(value)
                },
                date: function(value, element) {
                    return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString())
                },
                dateISO: function(value, element) {
                    return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
                },
                number: function(value, element) {
                    return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
                },
                digits: function(value, element) {
                    return this.optional(element) || /^\d+$/.test(value)
                },
                minlength: function(value, element, param) {
                    var length = $.isArray(value) ? value.length : this.getLength(value, element);
                    return this.optional(element) || length >= param
                },
                maxlength: function(value, element, param) {
                    var length = $.isArray(value) ? value.length : this.getLength(value, element);
                    return this.optional(element) || length <= param
                },
                rangelength: function(value, element, param) {
                    var length = $.isArray(value) ? value.length : this.getLength(value, element);
                    return this.optional(element) || length >= param[0] && length <= param[1]
                },
                min: function(value, element, param) {
                    return this.optional(element) || value >= param
                },
                max: function(value, element, param) {
                    return this.optional(element) || value <= param
                },
                range: function(value, element, param) {
                    return this.optional(element) || value >= param[0] && value <= param[1]
                },
                step: function(value, element, param) {
                    var type = $(element).attr("type"),
                        errorMessage = "Step attribute on input type " + type + " is not supported.",
                        supportedTypes = ["text", "number", "range"],
                        re = new RegExp("\\b" + type + "\\b"),
                        notSupported = type && !re.test(supportedTypes.join());
                    if (notSupported) throw new Error(errorMessage);
                    return this.optional(element) || value % param === 0
                },
                equalTo: function(value, element, param) {
                    var target = $(param);
                    return this.settings.onfocusout && target.not(".validate-equalTo-blur").length && target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        $(element).valid()
                    }), value === target.val()
                },
                remote: function(value, element, param, method) {
                    if (this.optional(element)) return "dependency-mismatch";
                    method = "string" == typeof method && method || "remote";
                    var validator, data, optionDataString, previous = this.previousValue(element, method);
                    return this.settings.messages[element.name] || (this.settings.messages[element.name] = {}), previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method], this.settings.messages[element.name][method] = previous.message, param = "string" == typeof param && {
                        url: param
                    } || param, optionDataString = $.param($.extend({
                        data: value
                    }, param.data)), previous.old === optionDataString ? previous.valid : (previous.old = optionDataString, validator = this, this.startRequest(element), data = {}, data[element.name] = value, $.ajax($.extend(!0, {
                        mode: "abort",
                        port: "validate" + element.name,
                        dataType: "json",
                        data: data,
                        context: validator.currentForm,
                        success: function(response) {
                            var errors, message, submitted, valid = response === !0 || "true" === response;
                            validator.settings.messages[element.name][method] = previous.originalMessage, valid ? (submitted = validator.formSubmitted, validator.resetInternals(), validator.toHide = validator.errorsFor(element), validator.formSubmitted = submitted, validator.successList.push(element), validator.invalid[element.name] = !1, validator.showErrors()) : (errors = {}, message = response || validator.defaultMessage(element, {
                                method: method,
                                parameters: value
                            }), errors[element.name] = previous.message = message, validator.invalid[element.name] = !0, validator.showErrors(errors)), previous.valid = valid, validator.stopRequest(element, valid)
                        }
                    }, param)), "pending")
                }
            }
        });
        var ajax, pendingRequests = {};
        $.ajaxPrefilter ? $.ajaxPrefilter(function(settings, _, xhr) {
            var port = settings.port;
            "abort" === settings.mode && (pendingRequests[port] && pendingRequests[port].abort(), pendingRequests[port] = xhr)
        }) : (ajax = $.ajax, $.ajax = function(settings) {
            var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
                port = ("port" in settings ? settings : $.ajaxSettings).port;
            return "abort" === mode ? (pendingRequests[port] && pendingRequests[port].abort(), pendingRequests[port] = ajax.apply(this, arguments), pendingRequests[port]) : ajax.apply(this, arguments)
        })
    })
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        "use strict";

        function init_as_module() {
            return init_type = INIT_MODULE, mixpanel_master = new MixpanelLib, override_mp_init_func(), mixpanel_master.init(), add_dom_loaded_handler(), mixpanel_master
        }
        var init_type, mixpanel_master, LIB_VERSION = "2.8.1",
            INIT_MODULE = 0,
            INIT_SNIPPET = 1,
            ArrayProto = Array.prototype,
            FuncProto = Function.prototype,
            ObjProto = Object.prototype,
            slice = ArrayProto.slice,
            toString = ObjProto.toString,
            hasOwnProperty = ObjProto.hasOwnProperty,
            windowConsole = window.console,
            navigator = window.navigator,
            document = window.document,
            userAgent = navigator.userAgent,
            PRIMARY_INSTANCE_NAME = "mixpanel",
            SET_QUEUE_KEY = "__mps",
            SET_ONCE_QUEUE_KEY = "__mpso",
            ADD_QUEUE_KEY = "__mpa",
            APPEND_QUEUE_KEY = "__mpap",
            UNION_QUEUE_KEY = "__mpu",
            SET_ACTION = "$set",
            SET_ONCE_ACTION = "$set_once",
            ADD_ACTION = "$add",
            APPEND_ACTION = "$append",
            UNION_ACTION = "$union",
            PEOPLE_DISTINCT_ID_KEY = "$people_distinct_id",
            ALIAS_ID_KEY = "__alias",
            CAMPAIGN_IDS_KEY = "__cmpns",
            EVENT_TIMERS_KEY = "__timers",
            RESERVED_PROPERTIES = [SET_QUEUE_KEY, SET_ONCE_QUEUE_KEY, ADD_QUEUE_KEY, APPEND_QUEUE_KEY, UNION_QUEUE_KEY, PEOPLE_DISTINCT_ID_KEY, ALIAS_ID_KEY, CAMPAIGN_IDS_KEY, EVENT_TIMERS_KEY],
            HTTP_PROTOCOL = "https:" == document.location.protocol ? "https://" : "http://",
            USE_XHR = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
            ENQUEUE_REQUESTS = !USE_XHR && userAgent.indexOf("MSIE") == -1 && userAgent.indexOf("Mozilla") == -1,
            _ = {},
            DEBUG = !1,
            DEFAULT_CONFIG = {
                api_host: HTTP_PROTOCOL + "api.mixpanel.com",
                cross_subdomain_cookie: !0,
                persistence: "cookie",
                persistence_name: "",
                cookie_name: "",
                loaded: function() {},
                store_google: !0,
                save_referrer: !0,
                test: !1,
                verbose: !1,
                img: !1,
                track_pageview: !0,
                debug: !1,
                track_links_timeout: 300,
                cookie_expiration: 365,
                upgrade: !1,
                disable_persistence: !1,
                disable_cookie: !1,
                secure_cookie: !1,
                ip: !0,
                property_blacklist: []
            },
            DOM_LOADED = !1;
        ! function() {
            var nativeBind = FuncProto.bind,
                nativeForEach = ArrayProto.forEach,
                nativeIndexOf = ArrayProto.indexOf,
                nativeIsArray = Array.isArray,
                breaker = {};
            _.bind = function(func, context) {
                var args, bound;
                if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
                if (!_.isFunction(func)) throw new TypeError;
                return args = slice.call(arguments, 2), bound = function() {
                    if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
                    ctor.prototype = func.prototype;
                    var self = new ctor;
                    ctor.prototype = null;
                    var result = func.apply(self, args.concat(slice.call(arguments)));
                    return Object(result) === result ? result : self
                }
            }, _.bind_instance_methods = function(obj) {
                for (var func in obj) "function" == typeof obj[func] && (obj[func] = _.bind(obj[func], obj))
            };
            var each = _.each = function(obj, iterator, context) {
                if (null != obj)
                    if (nativeForEach && obj.forEach === nativeForEach) obj.forEach(iterator, context);
                    else if (obj.length === +obj.length) {
                    for (var i = 0, l = obj.length; i < l; i++)
                        if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return
                } else
                    for (var key in obj)
                        if (hasOwnProperty.call(obj, key) && iterator.call(context, obj[key], key, obj) === breaker) return
            };
            _.escapeHTML = function(s) {
                var escaped = s;
                return escaped && _.isString(escaped) && (escaped = escaped.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")), escaped
            }, _.extend = function(obj) {
                return each(slice.call(arguments, 1), function(source) {
                    for (var prop in source) void 0 !== source[prop] && (obj[prop] = source[prop])
                }), obj
            }, _.isArray = nativeIsArray || function(obj) {
                return "[object Array]" === toString.call(obj)
            }, _.isFunction = function(f) {
                try {
                    return /^\s*\bfunction\b/.test(f);
                } catch (x) {
                    return !1
                }
            }, _.isArguments = function(obj) {
                return !(!obj || !hasOwnProperty.call(obj, "callee"))
            }, _.toArray = function(iterable) {
                return iterable ? iterable.toArray ? iterable.toArray() : _.isArray(iterable) ? slice.call(iterable) : _.isArguments(iterable) ? slice.call(iterable) : _.values(iterable) : []
            }, _.values = function(obj) {
                var results = [];
                return null == obj ? results : (each(obj, function(value) {
                    results[results.length] = value
                }), results)
            }, _.identity = function(value) {
                return value
            }, _.include = function(obj, target) {
                var found = !1;
                return null == obj ? found : nativeIndexOf && obj.indexOf === nativeIndexOf ? obj.indexOf(target) != -1 : (each(obj, function(value) {
                    if (found || (found = value === target)) return breaker
                }), found)
            }, _.includes = function(str, needle) {
                return str.indexOf(needle) !== -1
            }
        }(), _.inherit = function(subclass, superclass) {
            return subclass.prototype = new superclass, subclass.prototype.constructor = subclass, subclass.superclass = superclass.prototype, subclass
        }, _.isObject = function(obj) {
            return obj === Object(obj) && !_.isArray(obj)
        }, _.isEmptyObject = function(obj) {
            if (_.isObject(obj)) {
                for (var key in obj)
                    if (hasOwnProperty.call(obj, key)) return !1;
                return !0
            }
            return !1
        }, _.isUndefined = function(obj) {
            return void 0 === obj
        }, _.isString = function(obj) {
            return "[object String]" == toString.call(obj)
        }, _.isDate = function(obj) {
            return "[object Date]" == toString.call(obj)
        }, _.isNumber = function(obj) {
            return "[object Number]" == toString.call(obj)
        }, _.isElement = function(obj) {
            return !(!obj || 1 !== obj.nodeType)
        }, _.encodeDates = function(obj) {
            return _.each(obj, function(v, k) {
                _.isDate(v) ? obj[k] = _.formatDate(v) : _.isObject(v) && (obj[k] = _.encodeDates(v))
            }), obj
        }, _.formatDate = function(d) {
            function pad(n) {
                return n < 10 ? "0" + n : n
            }
            return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds())
        }, _.safewrap = function(f) {
            return function() {
                try {
                    f.apply(this, arguments)
                } catch (e) {
                    console.critical("Implementation error. Please contact support@mixpanel.com.")
                }
            }
        }, _.safewrap_class = function(klass, functions) {
            for (var i = 0; i < functions.length; i++) klass.prototype[functions[i]] = _.safewrap(klass.prototype[functions[i]])
        }, _.strip_empty_properties = function(p) {
            var ret = {};
            return _.each(p, function(v, k) {
                _.isString(v) && v.length > 0 && (ret[k] = v)
            }), ret
        }, _.truncate = function(obj, length) {
            var ret;
            return "string" == typeof obj ? ret = obj.slice(0, length) : _.isArray(obj) ? (ret = [], _.each(obj, function(val) {
                ret.push(_.truncate(val, length))
            })) : _.isObject(obj) ? (ret = {}, _.each(obj, function(val, key) {
                ret[key] = _.truncate(val, length)
            })) : ret = obj, ret
        }, _.JSONEncode = function() {
            return function(mixed_val) {
                var value = mixed_val,
                    quote = function(string) {
                        var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                            meta = {
                                "\b": "\\b",
                                "\t": "\\t",
                                "\n": "\\n",
                                "\f": "\\f",
                                "\r": "\\r",
                                '"': '\\"',
                                "\\": "\\\\"
                            };
                        return escapable.lastIndex = 0, escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                            var c = meta[a];
                            return "string" == typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + string + '"'
                    },
                    str = function(key, holder) {
                        var gap = "",
                            indent = "    ",
                            i = 0,
                            k = "",
                            v = "",
                            length = 0,
                            mind = gap,
                            partial = [],
                            value = holder[key];
                        switch (value && "object" == typeof value && "function" == typeof value.toJSON && (value = value.toJSON(key)), typeof value) {
                            case "string":
                                return quote(value);
                            case "number":
                                return isFinite(value) ? String(value) : "null";
                            case "boolean":
                            case "null":
                                return String(value);
                            case "object":
                                if (!value) return "null";
                                if (gap += indent, partial = [], "[object Array]" === toString.apply(value)) {
                                    for (length = value.length, i = 0; i < length; i += 1) partial[i] = str(i, value) || "null";
                                    return v = 0 === partial.length ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]", gap = mind, v
                                }
                                for (k in value) hasOwnProperty.call(value, k) && (v = str(k, value), v && partial.push(quote(k) + (gap ? ": " : ":") + v));
                                return v = 0 === partial.length ? "{}" : gap ? "{" + partial.join(",") + mind + "}" : "{" + partial.join(",") + "}", gap = mind, v
                        }
                    };
                return str("", {
                    "": value
                })
            }
        }(), _.JSONDecode = function() {
            var at, ch, text, value, escapee = {
                    '"': '"',
                    "\\": "\\",
                    "/": "/",
                    b: "\b",
                    f: "\f",
                    n: "\n",
                    r: "\r",
                    t: "\t"
                },
                error = function(m) {
                    throw {
                        name: "SyntaxError",
                        message: m,
                        at: at,
                        text: text
                    }
                },
                next = function(c) {
                    return c && c !== ch && error("Expected '" + c + "' instead of '" + ch + "'"), ch = text.charAt(at), at += 1, ch
                },
                number = function() {
                    var number, string = "";
                    for ("-" === ch && (string = "-", next("-")); ch >= "0" && ch <= "9";) string += ch, next();
                    if ("." === ch)
                        for (string += "."; next() && ch >= "0" && ch <= "9";) string += ch;
                    if ("e" === ch || "E" === ch)
                        for (string += ch, next(), "-" !== ch && "+" !== ch || (string += ch, next()); ch >= "0" && ch <= "9";) string += ch, next();
                    return number = +string, isFinite(number) ? number : void error("Bad number")
                },
                string = function() {
                    var hex, i, uffff, string = "";
                    if ('"' === ch)
                        for (; next();) {
                            if ('"' === ch) return next(), string;
                            if ("\\" === ch)
                                if (next(), "u" === ch) {
                                    for (uffff = 0, i = 0; i < 4 && (hex = parseInt(next(), 16), isFinite(hex)); i += 1) uffff = 16 * uffff + hex;
                                    string += String.fromCharCode(uffff)
                                } else {
                                    if ("string" != typeof escapee[ch]) break;
                                    string += escapee[ch]
                                } else string += ch
                        }
                    error("Bad string")
                },
                white = function() {
                    for (; ch && ch <= " ";) next()
                },
                word = function() {
                    switch (ch) {
                        case "t":
                            return next("t"), next("r"), next("u"), next("e"), !0;
                        case "f":
                            return next("f"), next("a"), next("l"), next("s"), next("e"), !1;
                        case "n":
                            return next("n"), next("u"), next("l"), next("l"), null
                    }
                    error("Unexpected '" + ch + "'")
                },
                array = function() {
                    var array = [];
                    if ("[" === ch) {
                        if (next("["), white(), "]" === ch) return next("]"), array;
                        for (; ch;) {
                            if (array.push(value()), white(), "]" === ch) return next("]"), array;
                            next(","), white()
                        }
                    }
                    error("Bad array")
                },
                object = function() {
                    var key, object = {};
                    if ("{" === ch) {
                        if (next("{"), white(), "}" === ch) return next("}"), object;
                        for (; ch;) {
                            if (key = string(), white(), next(":"), Object.hasOwnProperty.call(object, key) && error('Duplicate key "' + key + '"'), object[key] = value(), white(), "}" === ch) return next("}"), object;
                            next(","), white()
                        }
                    }
                    error("Bad object")
                };
            return value = function() {
                    switch (white(), ch) {
                        case "{":
                            return object();
                        case "[":
                            return array();
                        case '"':
                            return string();
                        case "-":
                            return number();
                        default:
                            return ch >= "0" && ch <= "9" ? number() : word()
                    }
                },
                function(source) {
                    var result;
                    return text = source, at = 0, ch = " ", result = value(), white(), ch && error("Syntax error"), result
                }
        }(), _.base64Encode = function(data) {
            var o1, o2, o3, h1, h2, h3, h4, bits, b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                i = 0,
                ac = 0,
                enc = "",
                tmp_arr = [];
            if (!data) return data;
            data = _.utf8Encode(data);
            do o1 = data.charCodeAt(i++), o2 = data.charCodeAt(i++), o3 = data.charCodeAt(i++), bits = o1 << 16 | o2 << 8 | o3, h1 = bits >> 18 & 63, h2 = bits >> 12 & 63, h3 = bits >> 6 & 63, h4 = 63 & bits, tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4); while (i < data.length);
            switch (enc = tmp_arr.join(""), data.length % 3) {
                case 1:
                    enc = enc.slice(0, -2) + "==";
                    break;
                case 2:
                    enc = enc.slice(0, -1) + "="
            }
            return enc
        }, _.utf8Encode = function(string) {
            string = (string + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
            var start, end, n, utftext = "",
                stringl = 0;
            for (start = end = 0, stringl = string.length, n = 0; n < stringl; n++) {
                var c1 = string.charCodeAt(n),
                    enc = null;
                c1 < 128 ? end++ : enc = c1 > 127 && c1 < 2048 ? String.fromCharCode(c1 >> 6 | 192, 63 & c1 | 128) : String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, 63 & c1 | 128), null !== enc && (end > start && (utftext += string.substring(start, end)), utftext += enc, start = end = n + 1)
            }
            return end > start && (utftext += string.substring(start, string.length)), utftext
        }, _.UUID = function() {
            var T = function() {
                    for (var d = 1 * new Date, i = 0; d == 1 * new Date;) i++;
                    return d.toString(16) + i.toString(16)
                },
                R = function() {
                    return Math.random().toString(16).replace(".", "")
                },
                UA = function(n) {
                    function xor(result, byte_array) {
                        var j, tmp = 0;
                        for (j = 0; j < byte_array.length; j++) tmp |= buffer[j] << 8 * j;
                        return result ^ tmp
                    }
                    var i, ch, ua = userAgent,
                        buffer = [],
                        ret = 0;
                    for (i = 0; i < ua.length; i++) ch = ua.charCodeAt(i), buffer.unshift(255 & ch), buffer.length >= 4 && (ret = xor(ret, buffer), buffer = []);
                    return buffer.length > 0 && (ret = xor(ret, buffer)), ret.toString(16)
                };
            return function() {
                var se = (screen.height * screen.width).toString(16);
                return T() + "-" + R() + "-" + UA() + "-" + se + "-" + T()
            }
        }(), _.isBlockedUA = function(ua) {
            return !!/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp)/i.test(ua)
        }, _.HTTPBuildQuery = function(formdata, arg_separator) {
            var use_val, use_key, tmp_arr = [];
            return _.isUndefined(arg_separator) && (arg_separator = "&"), _.each(formdata, function(val, key) {
                use_val = encodeURIComponent(val.toString()), use_key = encodeURIComponent(key), tmp_arr[tmp_arr.length] = use_key + "=" + use_val
            }), tmp_arr.join(arg_separator)
        }, _.getQueryParam = function(url, param) {
            param = param.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regexS = "[\\?&]" + param + "=([^&#]*)",
                regex = new RegExp(regexS),
                results = regex.exec(url);
            return null === results || results && "string" != typeof results[1] && results[1].length ? "" : decodeURIComponent(results[1]).replace(/\+/g, " ")
        }, _.cookie = {
            get: function(name) {
                for (var nameEQ = name + "=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
                    for (var c = ca[i];
                        " " == c.charAt(0);) c = c.substring(1, c.length);
                    if (0 == c.indexOf(nameEQ)) return decodeURIComponent(c.substring(nameEQ.length, c.length))
                }
                return null
            },
            parse: function(name) {
                var cookie;
                try {
                    cookie = _.JSONDecode(_.cookie.get(name)) || {}
                } catch (err) {}
                return cookie
            },
            set: function(name, value, days, cross_subdomain, is_secure) {
                var cdomain = "",
                    expires = "",
                    secure = "";
                if (cross_subdomain) {
                    var matches = document.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),
                        domain = matches ? matches[0] : "";
                    cdomain = domain ? "; domain=." + domain : ""
                }
                if (days) {
                    var date = new Date;
                    date.setTime(date.getTime() + 24 * days * 60 * 60 * 1e3), expires = "; expires=" + date.toGMTString()
                }
                is_secure && (secure = "; secure"), document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/" + cdomain + secure
            },
            remove: function(name, cross_subdomain) {
                _.cookie.set(name, "", -1, cross_subdomain)
            }
        }, _.localStorage = {
            error: function(msg) {
                console.error("localStorage error: " + msg)
            },
            get: function(name) {
                try {
                    return window.localStorage.getItem(name)
                } catch (err) {
                    _.localStorage.error(err)
                }
                return null
            },
            parse: function(name) {
                try {
                    return _.JSONDecode(_.localStorage.get(name)) || {}
                } catch (err) {}
                return null
            },
            set: function(name, value) {
                try {
                    window.localStorage.setItem(name, value)
                } catch (err) {
                    _.localStorage.error(err)
                }
            },
            remove: function(name) {
                try {
                    window.localStorage.removeItem(name)
                } catch (err) {
                    _.localStorage.error(err)
                }
            }
        }, _.register_event = function() {
            function makeHandler(element, new_handler, old_handlers) {
                var handler = function(event) {
                    if (event = event || fixEvent(window.event)) {
                        var old_result, new_result, ret = !0;
                        return _.isFunction(old_handlers) && (old_result = old_handlers(event)), new_result = new_handler.call(element, event), !1 !== old_result && !1 !== new_result || (ret = !1), ret
                    }
                };
                return handler
            }

            function fixEvent(event) {
                return event && (event.preventDefault = fixEvent.preventDefault, event.stopPropagation = fixEvent.stopPropagation), event
            }
            var register_event = function(element, type, handler, oldSchool) {
                if (!element) return void console.error("No valid element provided to register_event");
                if (element.addEventListener && !oldSchool) element.addEventListener(type, handler, !1);
                else {
                    var ontype = "on" + type,
                        old_handler = element[ontype];
                    element[ontype] = makeHandler(element, handler, old_handler)
                }
            };
            return fixEvent.preventDefault = function() {
                this.returnValue = !1
            }, fixEvent.stopPropagation = function() {
                this.cancelBubble = !0
            }, register_event
        }(), _.dom_query = function() {
            function getAllChildren(e) {
                return e.all ? e.all : e.getElementsByTagName("*")
            }

            function hasClass(elem, selector) {
                var className = " " + selector + " ";
                return (" " + elem.className + " ").replace(bad_whitespace, " ").indexOf(className) >= 0
            }

            function getElementsBySelector(selector) {
                if (!document.getElementsByTagName) return new Array;
                for (var token, tokens = selector.split(" "), currentContext = new Array(document), i = 0; i < tokens.length; i++)
                    if (token = tokens[i].replace(/^\s+/, "").replace(/\s+$/, ""), token.indexOf("#") > -1) {
                        var bits = token.split("#"),
                            tagName = bits[0],
                            id = bits[1],
                            element = document.getElementById(id);
                        if (!element || tagName && element.nodeName.toLowerCase() != tagName) return new Array;
                        currentContext = new Array(element)
                    } else if (token.indexOf(".") > -1) {
                    var bits = token.split("."),
                        tagName = bits[0],
                        className = bits[1];
                    tagName || (tagName = "*");
                    for (var found = new Array, foundCount = 0, h = 0; h < currentContext.length; h++) {
                        var elements;
                        elements = "*" == tagName ? getAllChildren(currentContext[h]) : currentContext[h].getElementsByTagName(tagName);
                        for (var j = 0; j < elements.length; j++) found[foundCount++] = elements[j]
                    }
                    currentContext = new Array;
                    for (var currentContextIndex = 0, k = 0; k < found.length; k++) found[k].className && _.isString(found[k].className) && hasClass(found[k], className) && (currentContext[currentContextIndex++] = found[k])
                } else {
                    var token_match = token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/);
                    if (token_match) {
                        var tagName = token_match[1],
                            attrName = token_match[2],
                            attrOperator = token_match[3],
                            attrValue = token_match[4];
                        tagName || (tagName = "*");
                        for (var found = new Array, foundCount = 0, h = 0; h < currentContext.length; h++) {
                            var elements;
                            elements = "*" == tagName ? getAllChildren(currentContext[h]) : currentContext[h].getElementsByTagName(tagName);
                            for (var j = 0; j < elements.length; j++) found[foundCount++] = elements[j]
                        }
                        currentContext = new Array;
                        var checkFunction, currentContextIndex = 0;
                        switch (attrOperator) {
                            case "=":
                                checkFunction = function(e) {
                                    return e.getAttribute(attrName) == attrValue
                                };
                                break;
                            case "~":
                                checkFunction = function(e) {
                                    return e.getAttribute(attrName).match(new RegExp("\\b" + attrValue + "\\b"))
                                };
                                break;
                            case "|":
                                checkFunction = function(e) {
                                    return e.getAttribute(attrName).match(new RegExp("^" + attrValue + "-?"))
                                };
                                break;
                            case "^":
                                checkFunction = function(e) {
                                    return 0 == e.getAttribute(attrName).indexOf(attrValue)
                                };
                                break;
                            case "$":
                                checkFunction = function(e) {
                                    return e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length
                                };
                                break;
                            case "*":
                                checkFunction = function(e) {
                                    return e.getAttribute(attrName).indexOf(attrValue) > -1
                                };
                                break;
                            default:
                                checkFunction = function(e) {
                                    return e.getAttribute(attrName)
                                }
                        }
                        currentContext = new Array, currentContextIndex = 0;
                        for (var k = 0; k < found.length; k++) checkFunction(found[k]) && (currentContext[currentContextIndex++] = found[k])
                    } else {
                        tagName = token;
                        for (var found = new Array, foundCount = 0, h = 0; h < currentContext.length; h++)
                            for (var elements = currentContext[h].getElementsByTagName(tagName), j = 0; j < elements.length; j++) found[foundCount++] = elements[j];
                        currentContext = found
                    }
                }
                return currentContext
            }
            var bad_whitespace = /[\t\r\n]/g;
            return function(query) {
                return _.isElement(query) ? [query] : _.isObject(query) && !_.isUndefined(query.length) ? query : getElementsBySelector.call(this, query)
            }
        }(), _.info = {
            campaignParams: function() {
                var campaign_keywords = "utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
                    kw = "",
                    params = {};
                return _.each(campaign_keywords, function(kwkey) {
                    kw = _.getQueryParam(document.URL, kwkey), kw.length && (params[kwkey] = kw)
                }), params
            },
            searchEngine: function(referrer) {
                return 0 === referrer.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === referrer.search("https?://(.*)bing.com") ? "bing" : 0 === referrer.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === referrer.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null
            },
            searchInfo: function(referrer) {
                var search = _.info.searchEngine(referrer),
                    param = "yahoo" != search ? "q" : "p",
                    ret = {};
                if (null !== search) {
                    ret.$search_engine = search;
                    var keyword = _.getQueryParam(referrer, param);
                    keyword.length && (ret.mp_keyword = keyword)
                }
                return ret
            },
            browser: function(user_agent, vendor, opera) {
                var vendor = vendor || "";
                return opera || _.includes(user_agent, " OPR/") ? _.includes(user_agent, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(user_agent) ? "BlackBerry" : _.includes(user_agent, "IEMobile") || _.includes(user_agent, "WPDesktop") ? "Internet Explorer Mobile" : _.includes(user_agent, "Edge") ? "Microsoft Edge" : _.includes(user_agent, "FBIOS") ? "Facebook Mobile" : _.includes(user_agent, "Chrome") ? "Chrome" : _.includes(user_agent, "CriOS") ? "Chrome iOS" : _.includes(user_agent, "FxiOS") ? "Firefox iOS" : _.includes(vendor, "Apple") ? _.includes(user_agent, "Mobile") ? "Mobile Safari" : "Safari" : _.includes(user_agent, "Android") ? "Android Mobile" : _.includes(user_agent, "Konqueror") ? "Konqueror" : _.includes(user_agent, "Firefox") ? "Firefox" : _.includes(user_agent, "MSIE") || _.includes(user_agent, "Trident/") ? "Internet Explorer" : _.includes(user_agent, "Gecko") ? "Mozilla" : ""
            },
            browserVersion: function(userAgent, vendor, opera) {
                var browser = _.info.browser(userAgent, vendor, opera),
                    versionRegexs = {
                        "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                        "Microsoft Edge": /Edge\/(\d+(\.\d+)?)/,
                        Chrome: /Chrome\/(\d+(\.\d+)?)/,
                        "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                        Safari: /Version\/(\d+(\.\d+)?)/,
                        "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                        Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                        Firefox: /Firefox\/(\d+(\.\d+)?)/,
                        "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                        Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                        BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                        "Android Mobile": /android\s(\d+(\.\d+)?)/,
                        "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                        Mozilla: /rv:(\d+(\.\d+)?)/
                    },
                    regex = versionRegexs[browser];
                if (void 0 == regex) return null;
                var matches = userAgent.match(regex);
                return matches ? parseFloat(matches[matches.length - 2]) : null
            },
            os: function() {
                var a = userAgent;
                return /Windows/i.test(a) ? /Phone/.test(a) || /WPDesktop/.test(a) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(a) ? "iOS" : /Android/.test(a) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(a) ? "BlackBerry" : /Mac/i.test(a) ? "Mac OS X" : /Linux/.test(a) ? "Linux" : ""
            },
            device: function(user_agent) {
                return /Windows Phone/i.test(user_agent) || /WPDesktop/.test(user_agent) ? "Windows Phone" : /iPad/.test(user_agent) ? "iPad" : /iPod/.test(user_agent) ? "iPod Touch" : /iPhone/.test(user_agent) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(user_agent) ? "BlackBerry" : /Android/.test(user_agent) ? "Android" : ""
            },
            referringDomain: function(referrer) {
                var split = referrer.split("/");
                return split.length >= 3 ? split[2] : ""
            },
            properties: function() {
                return _.extend(_.strip_empty_properties({
                    $os: _.info.os(),
                    $browser: _.info.browser(userAgent, navigator.vendor, window.opera),
                    $referrer: document.referrer,
                    $referring_domain: _.info.referringDomain(document.referrer),
                    $device: _.info.device(userAgent)
                }), {
                    $current_url: window.location.href,
                    $browser_version: _.info.browserVersion(userAgent, navigator.vendor, window.opera),
                    $screen_height: screen.height,
                    $screen_width: screen.width,
                    mp_lib: "web",
                    $lib_version: LIB_VERSION
                })
            },
            people_properties: function() {
                return _.extend(_.strip_empty_properties({
                    $os: _.info.os(),
                    $browser: _.info.browser(userAgent, navigator.vendor, window.opera)
                }), {
                    $browser_version: _.info.browserVersion(userAgent, navigator.vendor, window.opera)
                })
            },
            pageviewInfo: function(page) {
                return _.strip_empty_properties({
                    mp_page: page,
                    mp_referrer: document.referrer,
                    mp_browser: _.info.browser(userAgent, navigator.vendor, window.opera),
                    mp_platform: _.info.os()
                })
            }
        };
        var console = {
                log: function() {
                    if (DEBUG && !_.isUndefined(windowConsole) && windowConsole) try {
                        windowConsole.log.apply(windowConsole, arguments)
                    } catch (err) {
                        _.each(arguments, function(arg) {
                            windowConsole.log(arg)
                        })
                    }
                },
                error: function() {
                    if (DEBUG && !_.isUndefined(windowConsole) && windowConsole) {
                        var args = ["Mixpanel error:"].concat(_.toArray(arguments));
                        try {
                            windowConsole.error.apply(windowConsole, args)
                        } catch (err) {
                            _.each(args, function(arg) {
                                windowConsole.error(arg)
                            })
                        }
                    }
                },
                critical: function() {
                    if (!_.isUndefined(windowConsole) && windowConsole) {
                        var args = ["Mixpanel error:"].concat(_.toArray(arguments));
                        try {
                            windowConsole.error.apply(windowConsole, args)
                        } catch (err) {
                            _.each(args, function(arg) {
                                windowConsole.error(arg)
                            })
                        }
                    }
                }
            },
            DomTracker = function() {};
        DomTracker.prototype.create_properties = function() {}, DomTracker.prototype.event_handler = function() {}, DomTracker.prototype.after_track_handler = function() {}, DomTracker.prototype.init = function(mixpanel_instance) {
            return this.mp = mixpanel_instance, this
        }, DomTracker.prototype.track = function(query, event_name, properties, user_callback) {
            var that = this,
                elements = _.dom_query(query);
            return 0 == elements.length ? void console.error("The DOM query (" + query + ") returned 0 elements") : (_.each(elements, function(element) {
                _.register_event(element, this.override_event, function(e) {
                    var options = {},
                        props = that.create_properties(properties, this),
                        timeout = that.mp.get_config("track_links_timeout");
                    that.event_handler(e, this, options), window.setTimeout(that.track_callback(user_callback, props, options, !0), timeout), that.mp.track(event_name, props, that.track_callback(user_callback, props, options))
                })
            }, this), !0)
        }, DomTracker.prototype.track_callback = function(user_callback, props, options, timeout_occured) {
            timeout_occured = timeout_occured || !1;
            var that = this;
            return function() {
                options.callback_fired || (options.callback_fired = !0, user_callback && user_callback(timeout_occured, props) === !1 || that.after_track_handler(props, options, timeout_occured))
            }
        }, DomTracker.prototype.create_properties = function(properties, element) {
            var props;
            return props = "function" == typeof properties ? properties(element) : _.extend({}, properties)
        };
        var LinkTracker = function() {
            this.override_event = "click"
        };
        _.inherit(LinkTracker, DomTracker), LinkTracker.prototype.create_properties = function(properties, element) {
            var props = LinkTracker.superclass.create_properties.apply(this, arguments);
            return element.href && (props.url = element.href), props
        }, LinkTracker.prototype.event_handler = function(evt, element, options) {
            options.new_tab = 2 === evt.which || evt.metaKey || evt.ctrlKey || "_blank" === element.target, options.href = element.href, options.new_tab || evt.preventDefault()
        }, LinkTracker.prototype.after_track_handler = function(props, options, timeout_occured) {
            options.new_tab || setTimeout(function() {
                window.location = options.href
            }, 0)
        };
        var FormTracker = function() {
            this.override_event = "submit"
        };
        _.inherit(FormTracker, DomTracker), FormTracker.prototype.event_handler = function(evt, element, options) {
            options.element = element, evt.preventDefault()
        }, FormTracker.prototype.after_track_handler = function(props, options, timeout_occured) {
            setTimeout(function() {
                options.element.submit()
            }, 0)
        };
        var MixpanelPersistence = function(config) {
            this.props = {}, this.campaign_params_saved = !1, config.persistence_name ? this.name = "mp_" + config.persistence_name : this.name = "mp_" + config.token + "_mixpanel";
            var storage_type = config.persistence;
            "cookie" !== storage_type && "localStorage" !== storage_type && (console.critical('Unknown persistence type "' + storage_type + '"; falling back to "cookie"'), storage_type = config.persistence = "cookie");
            var localStorage_supported = function() {
                var supported = !0;
                try {
                    var key = "__mplssupport__",
                        val = "xyz";
                    _.localStorage.set(key, val), _.localStorage.get(key) !== val && (supported = !1), _.localStorage.remove(key)
                } catch (err) {
                    supported = !1
                }
                return supported || console.error("localStorage unsupported; falling back to cookie store"), supported
            };
            "localStorage" === storage_type && localStorage_supported() ? this.storage = _.localStorage : this.storage = _.cookie, this.load(), this.update_config(config), this.upgrade(config), this.save()
        };
        MixpanelPersistence.prototype.properties = function() {
            var p = {};
            return _.each(this.props, function(v, k) {
                _.include(RESERVED_PROPERTIES, k) || (p[k] = v)
            }), p
        }, MixpanelPersistence.prototype.load = function() {
            if (!this.disabled) {
                var entry = this.storage.parse(this.name);
                entry && (this.props = _.extend({}, entry))
            }
        }, MixpanelPersistence.prototype.upgrade = function(config) {
            var old_cookie_name, old_cookie, upgrade_from_old_lib = config.upgrade;
            upgrade_from_old_lib && (old_cookie_name = "mp_super_properties", "string" == typeof upgrade_from_old_lib && (old_cookie_name = upgrade_from_old_lib), old_cookie = this.storage.parse(old_cookie_name), this.storage.remove(old_cookie_name), this.storage.remove(old_cookie_name, !0), old_cookie && (this.props = _.extend(this.props, old_cookie.all, old_cookie.events))), config.cookie_name || "mixpanel" === config.name || (old_cookie_name = "mp_" + config.token + "_" + config.name, old_cookie = this.storage.parse(old_cookie_name), old_cookie && (this.storage.remove(old_cookie_name), this.storage.remove(old_cookie_name, !0), this.register_once(old_cookie))), this.storage === _.localStorage && (old_cookie = _.cookie.parse(this.name), _.cookie.remove(this.name), _.cookie.remove(this.name, !0), old_cookie && this.register_once(old_cookie))
        }, MixpanelPersistence.prototype.save = function() {
            this.disabled || (this._expire_notification_campaigns(), this.storage.set(this.name, _.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure))
        }, MixpanelPersistence.prototype.remove = function() {
            this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
        }, MixpanelPersistence.prototype.clear = function() {
            this.remove(), this.props = {}
        }, MixpanelPersistence.prototype.register_once = function(props, default_value, days) {
            return !!_.isObject(props) && ("undefined" == typeof default_value && (default_value = "None"), this.expire_days = "undefined" == typeof days ? this.default_expiry : days, _.each(props, function(val, prop) {
                this.props[prop] && this.props[prop] !== default_value || (this.props[prop] = val)
            }, this), this.save(), !0)
        }, MixpanelPersistence.prototype.register = function(props, days) {
            return !!_.isObject(props) && (this.expire_days = "undefined" == typeof days ? this.default_expiry : days, _.extend(this.props, props), this.save(), !0)
        }, MixpanelPersistence.prototype.unregister = function(prop) {
            prop in this.props && (delete this.props[prop], this.save())
        }, MixpanelPersistence.prototype._expire_notification_campaigns = _.safewrap(function() {
            var campaigns_shown = this.props[CAMPAIGN_IDS_KEY],
                EXPIRY_TIME = DEBUG ? 6e4 : 36e5;
            if (campaigns_shown) {
                for (var campaign_id in campaigns_shown) 1 * new Date - campaigns_shown[campaign_id] > EXPIRY_TIME && delete campaigns_shown[campaign_id];
                _.isEmptyObject(campaigns_shown) && delete this.props[CAMPAIGN_IDS_KEY]
            }
        }), MixpanelPersistence.prototype.update_campaign_params = function() {
            this.campaign_params_saved || (this.register_once(_.info.campaignParams()), this.campaign_params_saved = !0)
        }, MixpanelPersistence.prototype.update_search_keyword = function(referrer) {
            this.register(_.info.searchInfo(referrer))
        }, MixpanelPersistence.prototype.update_referrer_info = function(referrer) {
            this.register_once({
                $initial_referrer: referrer || "$direct",
                $initial_referring_domain: _.info.referringDomain(referrer) || "$direct"
            }, "")
        }, MixpanelPersistence.prototype.get_referrer_info = function() {
            return _.strip_empty_properties({
                $initial_referrer: this.props.$initial_referrer,
                $initial_referring_domain: this.props.$initial_referring_domain
            })
        }, MixpanelPersistence.prototype.safe_merge = function(props) {
            return _.each(this.props, function(val, prop) {
                prop in props || (props[prop] = val)
            }), props
        }, MixpanelPersistence.prototype.update_config = function(config) {
            this.default_expiry = this.expire_days = config.cookie_expiration, this.set_disabled(config.disable_persistence), this.set_cross_subdomain(config.cross_subdomain_cookie), this.set_secure(config.secure_cookie)
        }, MixpanelPersistence.prototype.set_disabled = function(disabled) {
            this.disabled = disabled, this.disabled && this.remove()
        }, MixpanelPersistence.prototype.set_cross_subdomain = function(cross_subdomain) {
            cross_subdomain !== this.cross_subdomain && (this.cross_subdomain = cross_subdomain, this.remove(), this.save())
        }, MixpanelPersistence.prototype.get_cross_subdomain = function() {
            return this.cross_subdomain
        }, MixpanelPersistence.prototype.set_secure = function(secure) {
            secure !== this.secure && (this.secure = !!secure, this.remove(), this.save())
        }, MixpanelPersistence.prototype._add_to_people_queue = function(queue, data) {
            var q_key = this._get_queue_key(queue),
                q_data = data[queue],
                set_q = this._get_or_create_queue(SET_ACTION),
                set_once_q = this._get_or_create_queue(SET_ONCE_ACTION),
                add_q = this._get_or_create_queue(ADD_ACTION),
                union_q = this._get_or_create_queue(UNION_ACTION),
                append_q = this._get_or_create_queue(APPEND_ACTION, []);
            q_key === SET_QUEUE_KEY ? (_.extend(set_q, q_data), this._pop_from_people_queue(ADD_ACTION, q_data), this._pop_from_people_queue(UNION_ACTION, q_data)) : q_key === SET_ONCE_QUEUE_KEY ? _.each(q_data, function(v, k) {
                k in set_once_q || (set_once_q[k] = v)
            }) : q_key === ADD_QUEUE_KEY ? _.each(q_data, function(v, k) {
                k in set_q ? set_q[k] += v : (k in add_q || (add_q[k] = 0), add_q[k] += v)
            }, this) : q_key === UNION_QUEUE_KEY ? _.each(q_data, function(v, k) {
                _.isArray(v) && (k in union_q || (union_q[k] = []), union_q[k] = union_q[k].concat(v))
            }) : q_key === APPEND_QUEUE_KEY && append_q.push(q_data), console.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), console.log(data), this.save()
        }, MixpanelPersistence.prototype._pop_from_people_queue = function(queue, data) {
            var q = this._get_queue(queue);
            _.isUndefined(q) || (_.each(data, function(v, k) {
                delete q[k]
            }, this), this.save())
        }, MixpanelPersistence.prototype._get_queue_key = function(queue) {
            return queue === SET_ACTION ? SET_QUEUE_KEY : queue === SET_ONCE_ACTION ? SET_ONCE_QUEUE_KEY : queue === ADD_ACTION ? ADD_QUEUE_KEY : queue === APPEND_ACTION ? APPEND_QUEUE_KEY : queue === UNION_ACTION ? UNION_QUEUE_KEY : void console.error("Invalid queue:", queue)
        }, MixpanelPersistence.prototype._get_queue = function(queue) {
            return this.props[this._get_queue_key(queue)]
        }, MixpanelPersistence.prototype._get_or_create_queue = function(queue, default_val) {
            var key = this._get_queue_key(queue),
                default_val = _.isUndefined(default_val) ? {} : default_val;
            return this.props[key] || (this.props[key] = default_val)
        }, MixpanelPersistence.prototype.set_event_timer = function(event_name, timestamp) {
            var timers = this.props[EVENT_TIMERS_KEY] || {};
            timers[event_name] = timestamp, this.props[EVENT_TIMERS_KEY] = timers, this.save()
        }, MixpanelPersistence.prototype.remove_event_timer = function(event_name) {
            var timers = this.props[EVENT_TIMERS_KEY] || {},
                timestamp = timers[event_name];
            return _.isUndefined(timestamp) || (delete this.props[EVENT_TIMERS_KEY][event_name], this.save()), timestamp
        };
        var create_mplib = function(token, config, name) {
                var instance, target = name === PRIMARY_INSTANCE_NAME ? mixpanel_master : mixpanel_master[name];
                if (target && init_type === INIT_MODULE) instance = target;
                else {
                    if (target && !_.isArray(target)) return void console.error("You have already initialized " + name);
                    instance = new MixpanelLib
                }
                instance._init(token, config, name), instance.people = new MixpanelPeople, instance.people._init(instance), DEBUG = DEBUG || instance.get_config("debug"), !_.isUndefined(target) && _.isArray(target) && (instance._execute_array.call(instance.people, target.people), instance._execute_array(target));
                try {
                    add_dom_event_handlers(instance)
                } catch (e) {
                    console.error(e)
                }
                return instance
            },
            MixpanelLib = function() {};
        MixpanelLib.prototype.init = function(token, config, name) {
            if (_.isUndefined(name)) return void console.error("You must name your new library: init(token, config, name)");
            if (name === PRIMARY_INSTANCE_NAME) return void console.error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
            var instance = create_mplib(token, config, name);
            return mixpanel_master[name] = instance, instance._loaded(), instance
        }, MixpanelLib.prototype._init = function(token, config, name) {
            this.__loaded = !0, this.config = {}, this.set_config(_.extend({}, DEFAULT_CONFIG, config, {
                name: name,
                token: token,
                callback_fn: (name === PRIMARY_INSTANCE_NAME ? name : PRIMARY_INSTANCE_NAME + "." + name) + "._jsc"
            })), this._jsc = function() {}, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                disable_all_events: !1,
                identify_called: !1
            }, this.persistence = this.cookie = new MixpanelPersistence(this.config), this.register_once({
                distinct_id: _.UUID()
            }, "")
        }, MixpanelLib.prototype._loaded = function() {
            this.get_config("loaded")(this), this.get_config("track_pageview") && this.track_pageview()
        }, MixpanelLib.prototype._dom_loaded = function() {
            _.each(this.__dom_loaded_queue, function(item) {
                this._track_dom.apply(this, item)
            }, this), _.each(this.__request_queue, function(item) {
                this._send_request.apply(this, item)
            }, this), delete this.__dom_loaded_queue, delete this.__request_queue
        }, MixpanelLib.prototype._track_dom = function(DomClass, args) {
            if (this.get_config("img")) return console.error("You can't use DOM tracking functions with img = true."), !1;
            if (!DOM_LOADED) return this.__dom_loaded_queue.push([DomClass, args]), !1;
            var dt = (new DomClass).init(this);
            return dt.track.apply(dt, args)
        }, MixpanelLib.prototype._prepare_callback = function(callback, data) {
            if (_.isUndefined(callback)) return null;
            if (USE_XHR) {
                var callback_function = function(response) {
                    callback(response, data)
                };
                return callback_function
            }
            var jsc = this._jsc,
                randomized_cb = "" + Math.floor(1e8 * Math.random()),
                callback_string = this.get_config("callback_fn") + '["' + randomized_cb + '"]';
            return jsc[randomized_cb] = function(response) {
                delete jsc[randomized_cb], callback(response, data)
            }, callback_string
        }, MixpanelLib.prototype._send_request = function(url, data, callback) {
            if (ENQUEUE_REQUESTS) return void this.__request_queue.push(arguments);
            var verbose_mode = this.get_config("verbose");
            if (data.verbose && (verbose_mode = !0), this.get_config("test") && (data.test = 1), verbose_mode && (data.verbose = 1), this.get_config("img") && (data.img = 1), USE_XHR || (callback ? data.callback = callback : (verbose_mode || this.get_config("test")) && (data.callback = "(function(){})")),
                data.ip = this.get_config("ip") ? 1 : 0, data._ = (new Date).getTime().toString(), url += "?" + _.HTTPBuildQuery(data), "img" in data) {
                var img = document.createElement("img");
                img.src = url, document.body.appendChild(img)
            } else if (USE_XHR) try {
                var req = new XMLHttpRequest;
                req.open("GET", url, !0), req.withCredentials = !0, req.onreadystatechange = function(e) {
                    if (4 === req.readyState)
                        if (200 === req.status) callback && callback(verbose_mode ? _.JSONDecode(req.responseText) : Number(req.responseText));
                        else {
                            var error = "Bad HTTP status: " + req.status + " " + req.statusText;
                            console.error(error), callback && callback(verbose_mode ? {
                                status: 0,
                                error: error
                            } : 0)
                        }
                }, req.send(null)
            } catch (e) {
                console.error(e)
            } else {
                var script = document.createElement("script");
                script.type = "text/javascript", script.async = !0, script.defer = !0, script.src = url;
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(script, s)
            }
        }, MixpanelLib.prototype._execute_array = function(array) {
            var fn_name, alias_calls = [],
                other_calls = [],
                tracking_calls = [];
            _.each(array, function(item) {
                item && (fn_name = item[0], "function" == typeof item ? item.call(this) : _.isArray(item) && "alias" === fn_name ? alias_calls.push(item) : _.isArray(item) && fn_name.indexOf("track") != -1 && "function" == typeof this[fn_name] ? tracking_calls.push(item) : other_calls.push(item))
            }, this);
            var execute = function(calls, context) {
                _.each(calls, function(item) {
                    this[item[0]].apply(this, item.slice(1))
                }, context)
            };
            execute(alias_calls, this), execute(other_calls, this), execute(tracking_calls, this)
        }, MixpanelLib.prototype.push = function(item) {
            this._execute_array([item])
        }, MixpanelLib.prototype.disable = function(events) {
            "undefined" == typeof events ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(events)
        }, MixpanelLib.prototype.track = function(event_name, properties, callback) {
            if (_.isUndefined(event_name)) return void console.error("No event name provided to mixpanel.track");
            if (this._event_is_disabled(event_name)) return void("undefined" != typeof callback && callback(0));
            properties = properties || {}, properties.token = this.get_config("token");
            var start_timestamp = this.persistence.remove_event_timer(event_name);
            if (!_.isUndefined(start_timestamp)) {
                var duration_in_ms = (new Date).getTime() - start_timestamp;
                properties.$duration = parseFloat((duration_in_ms / 1e3).toFixed(3))
            }
            this.persistence.update_search_keyword(document.referrer), this.get_config("store_google") && this.persistence.update_campaign_params(), this.get_config("save_referrer") && this.persistence.update_referrer_info(document.referrer), properties = _.extend({}, _.info.properties(), this.persistence.properties(), properties);
            try {
                if (this.mp_counts && "mp_page_view" !== event_name && "$create_alias" !== event_name) {
                    properties = _.extend({}, properties, this.mp_counts), this.mp_counts = {}, this.mp_counts.$__c = 0, this.mp_counts.$__c3 = 0, this.mp_counts.$__c4 = 0, this.mp_counts.$__c5 = 0;
                    var name = this.get_config("name");
                    _.cookie.set("mp_" + name + "__c", 0, 1, !0), _.cookie.set("mp_" + name + "__c3", 0, 1, !0), _.cookie.set("mp_" + name + "__c4", 0, 1, !0), _.cookie.set("mp_" + name + "__c5", 0, 1, !0)
                }
            } catch (e) {
                console.error(e)
            }
            var property_blacklist = this.get_config("property_blacklist");
            _.isArray(property_blacklist) ? _.each(property_blacklist, function(blacklisted_prop) {
                delete properties[blacklisted_prop]
            }) : console.error("Invalid value for property_blacklist config: " + property_blacklist);
            var data = {
                    event: event_name,
                    properties: properties
                },
                truncated_data = _.truncate(data, 255),
                json_data = _.JSONEncode(truncated_data),
                encoded_data = _.base64Encode(json_data);
            return console.log("MIXPANEL REQUEST:"), console.log(truncated_data), this._send_request(this.get_config("api_host") + "/track/", {
                data: encoded_data
            }, this._prepare_callback(callback, truncated_data)), truncated_data
        }, MixpanelLib.prototype.track_pageview = function(page) {
            _.isUndefined(page) && (page = document.location.href), this.track("mp_page_view", _.info.pageviewInfo(page))
        }, MixpanelLib.prototype.track_links = function() {
            return this._track_dom.call(this, LinkTracker, arguments)
        }, MixpanelLib.prototype.track_forms = function() {
            return this._track_dom.call(this, FormTracker, arguments)
        }, MixpanelLib.prototype.time_event = function(event_name) {
            return _.isUndefined(event_name) ? void console.error("No event name provided to mixpanel.time_event") : void(this._event_is_disabled(event_name) || this.persistence.set_event_timer(event_name, (new Date).getTime()))
        }, MixpanelLib.prototype.register = function(props, days) {
            this.persistence.register(props, days)
        }, MixpanelLib.prototype.register_once = function(props, default_value, days) {
            this.persistence.register_once(props, default_value, days)
        }, MixpanelLib.prototype.unregister = function(property) {
            this.persistence.unregister(property)
        }, MixpanelLib.prototype._register_single = function(prop, value) {
            var props = {};
            props[prop] = value, this.register(props)
        }, MixpanelLib.prototype.identify = function(unique_id, _set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback) {
            unique_id != this.get_distinct_id() && unique_id != this.get_property(ALIAS_ID_KEY) && (this.unregister(ALIAS_ID_KEY), this._register_single("distinct_id", unique_id)), this._check_and_handle_notifications(this.get_distinct_id()), this._flags.identify_called = !0, this.people._flush(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback)
        }, MixpanelLib.prototype.reset = function() {
            this.persistence.clear(), this._flags.identify_called = !1, this.register_once({
                distinct_id: _.UUID()
            }, "")
        }, MixpanelLib.prototype.get_distinct_id = function() {
            return this.get_property("distinct_id")
        }, MixpanelLib.prototype.alias = function(alias, original) {
            if (alias === this.get_property(PEOPLE_DISTINCT_ID_KEY)) return console.critical("Attempting to create alias for existing People user - aborting."), -2;
            var _this = this;
            return _.isUndefined(original) && (original = this.get_distinct_id()), alias !== original ? (this._register_single(ALIAS_ID_KEY, alias), this.track("$create_alias", {
                alias: alias,
                distinct_id: original
            }, function(response) {
                _this.identify(alias)
            })) : (console.error("alias matches current distinct_id - skipping api call."), this.identify(alias), -1)
        }, MixpanelLib.prototype.name_tag = function(name_tag) {
            this._register_single("mp_name_tag", name_tag)
        }, MixpanelLib.prototype.set_config = function(config) {
            _.isObject(config) && (_.extend(this.config, config), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), DEBUG = DEBUG || this.get_config("debug"))
        }, MixpanelLib.prototype.get_config = function(prop_name) {
            return this.config[prop_name]
        }, MixpanelLib.prototype.get_property = function(property_name) {
            return this.persistence.props[property_name]
        }, MixpanelLib.prototype.toString = function() {
            var name = this.get_config("name");
            return name !== PRIMARY_INSTANCE_NAME && (name = PRIMARY_INSTANCE_NAME + "." + name), name
        }, MixpanelLib.prototype._event_is_disabled = function(event_name) {
            return _.isBlockedUA(userAgent) || this._flags.disable_all_events || _.include(this.__disabled_events, event_name)
        }, MixpanelLib.prototype._check_and_handle_notifications = function(distinct_id) {
            if (distinct_id && !this._flags.identify_called && !this.get_config("disable_notifications")) {
                console.log("MIXPANEL NOTIFICATION CHECK");
                var data = {
                        verbose: !0,
                        version: "1",
                        lib: "web",
                        token: this.get_config("token"),
                        distinct_id: distinct_id
                    },
                    self = this;
                this._send_request(this.get_config("api_host") + "/decide/", data, this._prepare_callback(function(r) {
                    r.notifications && r.notifications.length > 0 && self._show_notification.call(self, r.notifications[0])
                }))
            }
        }, MixpanelLib.prototype._show_notification = function(notification_data) {
            var notification = new MPNotif(notification_data, this);
            notification.show()
        };
        var MixpanelPeople = function() {};
        MixpanelPeople.prototype._init = function(mixpanel_instance) {
            this._mixpanel = mixpanel_instance
        }, MixpanelPeople.prototype.set = function(prop, to, callback) {
            var data = {},
                $set = {};
            return _.isObject(prop) ? (_.each(prop, function(v, k) {
                this._is_reserved_property(k) || ($set[k] = v)
            }, this), callback = to) : $set[prop] = to, this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), $set = _.extend({}, _.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), $set), data[SET_ACTION] = $set, this._send_request(data, callback)
        }, MixpanelPeople.prototype.set_once = function(prop, to, callback) {
            var data = {},
                $set_once = {};
            return _.isObject(prop) ? (_.each(prop, function(v, k) {
                this._is_reserved_property(k) || ($set_once[k] = v)
            }, this), callback = to) : $set_once[prop] = to, data[SET_ONCE_ACTION] = $set_once, this._send_request(data, callback)
        }, MixpanelPeople.prototype.increment = function(prop, by, callback) {
            var data = {},
                $add = {};
            return _.isObject(prop) ? (_.each(prop, function(v, k) {
                if (!this._is_reserved_property(k)) {
                    if (isNaN(parseFloat(v))) return void console.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                    $add[k] = v
                }
            }, this), callback = by) : (_.isUndefined(by) && (by = 1), $add[prop] = by), data[ADD_ACTION] = $add, this._send_request(data, callback)
        }, MixpanelPeople.prototype.append = function(list_name, value, callback) {
            var data = {},
                $append = {};
            return _.isObject(list_name) ? (_.each(list_name, function(v, k) {
                this._is_reserved_property(k) || ($append[k] = v)
            }, this), callback = value) : $append[list_name] = value, data[APPEND_ACTION] = $append, this._send_request(data, callback)
        }, MixpanelPeople.prototype.union = function(list_name, values, callback) {
            var data = {},
                $union = {};
            return _.isObject(list_name) ? (_.each(list_name, function(v, k) {
                this._is_reserved_property(k) || ($union[k] = _.isArray(v) ? v : [v])
            }, this), callback = values) : $union[list_name] = _.isArray(values) ? values : [values], data[UNION_ACTION] = $union, this._send_request(data, callback)
        }, MixpanelPeople.prototype.track_charge = function(amount, properties, callback) {
            return !_.isNumber(amount) && (amount = parseFloat(amount), isNaN(amount)) ? void console.error("Invalid value passed to mixpanel.people.track_charge - must be a number") : this.append("$transactions", _.extend({
                $amount: amount
            }, properties), callback)
        }, MixpanelPeople.prototype.clear_charges = function(callback) {
            return this.set("$transactions", [], callback)
        }, MixpanelPeople.prototype.delete_user = function() {
            if (!this._identify_called()) return void console.error("mixpanel.people.delete_user() requires you to call identify() first");
            var data = {
                $delete: this._mixpanel.get_distinct_id()
            };
            return this._send_request(data)
        }, MixpanelPeople.prototype.toString = function() {
            return this._mixpanel.toString() + ".people"
        }, MixpanelPeople.prototype._send_request = function(data, callback) {
            data.$token = this._get_config("token"), data.$distinct_id = this._mixpanel.get_distinct_id();
            var date_encoded_data = _.encodeDates(data),
                truncated_data = _.truncate(date_encoded_data, 255),
                json_data = _.JSONEncode(date_encoded_data),
                encoded_data = _.base64Encode(json_data);
            return this._identify_called() ? (console.log("MIXPANEL PEOPLE REQUEST:"), console.log(truncated_data), this._mixpanel._send_request(this._get_config("api_host") + "/engage/", {
                data: encoded_data
            }, this._mixpanel._prepare_callback(callback, truncated_data)), truncated_data) : (this._enqueue(data), _.isUndefined(callback) || callback(this._get_config("verbose") ? {
                status: -1,
                error: null
            } : -1), truncated_data)
        }, MixpanelPeople.prototype._get_config = function(conf_var) {
            return this._mixpanel.get_config(conf_var)
        }, MixpanelPeople.prototype._identify_called = function() {
            return this._mixpanel._flags.identify_called === !0
        }, MixpanelPeople.prototype._enqueue = function(data) {
            SET_ACTION in data ? this._mixpanel.persistence._add_to_people_queue(SET_ACTION, data) : SET_ONCE_ACTION in data ? this._mixpanel.persistence._add_to_people_queue(SET_ONCE_ACTION, data) : ADD_ACTION in data ? this._mixpanel.persistence._add_to_people_queue(ADD_ACTION, data) : APPEND_ACTION in data ? this._mixpanel.persistence._add_to_people_queue(APPEND_ACTION, data) : UNION_ACTION in data ? this._mixpanel.persistence._add_to_people_queue(UNION_ACTION, data) : console.error("Invalid call to _enqueue():", data)
        }, MixpanelPeople.prototype._flush = function(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback) {
            var _this = this,
                $set_queue = _.extend({}, this._mixpanel.persistence._get_queue(SET_ACTION)),
                $set_once_queue = _.extend({}, this._mixpanel.persistence._get_queue(SET_ONCE_ACTION)),
                $add_queue = _.extend({}, this._mixpanel.persistence._get_queue(ADD_ACTION)),
                $append_queue = this._mixpanel.persistence._get_queue(APPEND_ACTION),
                $union_queue = _.extend({}, this._mixpanel.persistence._get_queue(UNION_ACTION));
            if (_.isUndefined($set_queue) || !_.isObject($set_queue) || _.isEmptyObject($set_queue) || (_this._mixpanel.persistence._pop_from_people_queue(SET_ACTION, $set_queue), this.set($set_queue, function(response, data) {
                    0 == response && _this._mixpanel.persistence._add_to_people_queue(SET_ACTION, $set_queue), _.isUndefined(_set_callback) || _set_callback(response, data)
                })), _.isUndefined($set_once_queue) || !_.isObject($set_once_queue) || _.isEmptyObject($set_once_queue) || (_this._mixpanel.persistence._pop_from_people_queue(SET_ONCE_ACTION, $set_once_queue), this.set_once($set_once_queue, function(response, data) {
                    0 == response && _this._mixpanel.persistence._add_to_people_queue(SET_ONCE_ACTION, $set_once_queue), _.isUndefined(_set_once_callback) || _set_once_callback(response, data)
                })), _.isUndefined($add_queue) || !_.isObject($add_queue) || _.isEmptyObject($add_queue) || (_this._mixpanel.persistence._pop_from_people_queue(ADD_ACTION, $add_queue), this.increment($add_queue, function(response, data) {
                    0 == response && _this._mixpanel.persistence._add_to_people_queue(ADD_ACTION, $add_queue), _.isUndefined(_add_callback) || _add_callback(response, data)
                })), _.isUndefined($union_queue) || !_.isObject($union_queue) || _.isEmptyObject($union_queue) || (_this._mixpanel.persistence._pop_from_people_queue(UNION_ACTION, $union_queue), this.union($union_queue, function(response, data) {
                    0 == response && _this._mixpanel.persistence._add_to_people_queue(UNION_ACTION, $union_queue), _.isUndefined(_union_callback) || _union_callback(response, data)
                })), !_.isUndefined($append_queue) && _.isArray($append_queue) && $append_queue.length) {
                for (var i = $append_queue.length - 1; i >= 0; i--) {
                    var $append_item = $append_queue.pop();
                    _this.append($append_item, function(response, data) {
                        0 == response && _this._mixpanel.persistence._add_to_people_queue(APPEND_ACTION, $append_item), _.isUndefined(_append_callback) || _append_callback(response, data)
                    })
                }
                _this._mixpanel.persistence.save()
            }
        }, MixpanelPeople.prototype._is_reserved_property = function(prop) {
            return "$distinct_id" === prop || "$token" === prop
        }, MixpanelLib._Notification = function(notif_data, mixpanel_instance) {
            _.bind_instance_methods(this), this.mixpanel = mixpanel_instance, this.persistence = this.mixpanel.persistence, this.campaign_id = _.escapeHTML(notif_data.id), this.message_id = _.escapeHTML(notif_data.message_id), this.body = (_.escapeHTML(notif_data.body) || "").replace(/\n/g, "<br/>"), this.cta = _.escapeHTML(notif_data.cta) || "Close", this.dest_url = _.escapeHTML(notif_data.cta_url) || null, this.image_url = _.escapeHTML(notif_data.image_url) || null, this.notif_type = _.escapeHTML(notif_data.type) || "takeover", this.style = _.escapeHTML(notif_data.style) || "light", this.thumb_image_url = _.escapeHTML(notif_data.thumb_image_url) || null, this.title = _.escapeHTML(notif_data.title) || "", this.video_url = _.escapeHTML(notif_data.video_url) || null, this.video_width = MPNotif.VIDEO_WIDTH, this.video_height = MPNotif.VIDEO_HEIGHT, this.clickthrough = !0, this.dest_url || (this.dest_url = "#dismiss", this.clickthrough = !1), this.mini = "mini" === this.notif_type, this.mini || (this.notif_type = "takeover"), this.notif_width = this.mini ? MPNotif.NOTIF_WIDTH_MINI : MPNotif.NOTIF_WIDTH, this._set_client_config(), this.imgs_to_preload = this._init_image_html(), this._init_video()
        };
        var MPNotif = MixpanelLib._Notification;
        MPNotif.ANIM_TIME = 200, MPNotif.MARKUP_PREFIX = "mixpanel-notification", MPNotif.BG_OPACITY = .6, MPNotif.NOTIF_TOP = 25, MPNotif.NOTIF_START_TOP = 200, MPNotif.NOTIF_WIDTH = 388, MPNotif.NOTIF_WIDTH_MINI = 420, MPNotif.NOTIF_HEIGHT_MINI = 85, MPNotif.THUMB_BORDER_SIZE = 5, MPNotif.THUMB_IMG_SIZE = 60, MPNotif.THUMB_OFFSET = Math.round(MPNotif.THUMB_IMG_SIZE / 2), MPNotif.VIDEO_WIDTH = 595, MPNotif.VIDEO_HEIGHT = 334, MPNotif.prototype.show = function() {
            var self = this;
            return this._set_client_config(), this.body_el ? (this._init_styles(), this._init_notification_el(), void this._preload_images(this._attach_and_animate)) : void setTimeout(function() {
                self.show()
            }, 300)
        }, MPNotif.prototype.dismiss = _.safewrap(function() {
            this.marked_as_shown || this._mark_delivery({
                invisible: !0
            });
            var exiting_el = this.showing_video ? this._get_el("video") : this._get_notification_display_el();
            if (this.use_transitions) this._remove_class("bg", "visible"), this._add_class(exiting_el, "exiting"), setTimeout(this._remove_notification_el, MPNotif.ANIM_TIME);
            else {
                var notif_attr, notif_start, notif_goal;
                this.mini ? (notif_attr = "right", notif_start = 20, notif_goal = -100) : (notif_attr = "top", notif_start = MPNotif.NOTIF_TOP, notif_goal = MPNotif.NOTIF_START_TOP + MPNotif.NOTIF_TOP), this._animate_els([{
                    el: this._get_el("bg"),
                    attr: "opacity",
                    start: MPNotif.BG_OPACITY,
                    goal: 0
                }, {
                    el: exiting_el,
                    attr: "opacity",
                    start: 1,
                    goal: 0
                }, {
                    el: exiting_el,
                    attr: notif_attr,
                    start: notif_start,
                    goal: notif_goal
                }], MPNotif.ANIM_TIME, this._remove_notification_el)
            }
        }), MPNotif.prototype._add_class = _.safewrap(function(el, class_name) {
            class_name = MPNotif.MARKUP_PREFIX + "-" + class_name, "string" == typeof el && (el = this._get_el(el)), el.className ? ~(" " + el.className + " ").indexOf(" " + class_name + " ") || (el.className += " " + class_name) : el.className = class_name
        }), MPNotif.prototype._remove_class = _.safewrap(function(el, class_name) {
            class_name = MPNotif.MARKUP_PREFIX + "-" + class_name, "string" == typeof el && (el = this._get_el(el)), el.className && (el.className = (" " + el.className + " ").replace(" " + class_name + " ", "").replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, ""))
        }), MPNotif.prototype._animate_els = _.safewrap(function(anims, mss, done_cb, start_time) {
            var ai, anim, time_diff, self = this,
                in_progress = !1,
                cur_time = 1 * new Date;
            for (start_time = start_time || cur_time, time_diff = cur_time - start_time, ai = 0; ai < anims.length; ai++)
                if (anim = anims[ai], "undefined" == typeof anim.val && (anim.val = anim.start), anim.val !== anim.goal) {
                    in_progress = !0;
                    var anim_diff = anim.goal - anim.start,
                        anim_dir = anim.goal >= anim.start ? 1 : -1;
                    anim.val = anim.start + anim_diff * time_diff / mss, "opacity" !== anim.attr && (anim.val = Math.round(anim.val)), (anim_dir > 0 && anim.val >= anim.goal || anim_dir < 0 && anim.val <= anim.goal) && (anim.val = anim.goal)
                }
            if (!in_progress) return void(done_cb && done_cb());
            for (ai = 0; ai < anims.length; ai++)
                if (anim = anims[ai], anim.el) {
                    var suffix = "opacity" === anim.attr ? "" : "px";
                    anim.el.style[anim.attr] = String(anim.val) + suffix
                }
            setTimeout(function() {
                self._animate_els(anims, mss, done_cb, start_time)
            }, 10)
        }), MPNotif.prototype._attach_and_animate = _.safewrap(function() {
            var self = this;
            if (!this.shown && !this._get_shown_campaigns()[this.campaign_id]) {
                this.shown = !0, this.body_el.appendChild(this.notification_el), setTimeout(function() {
                    var notif_el = self._get_notification_display_el();
                    if (self.use_transitions) self.mini || self._add_class("bg", "visible"), self._add_class(notif_el, "visible"), self._mark_as_shown();
                    else {
                        var notif_attr, notif_start, notif_goal;
                        self.mini ? (notif_attr = "right", notif_start = -100, notif_goal = 20) : (notif_attr = "top", notif_start = MPNotif.NOTIF_START_TOP + MPNotif.NOTIF_TOP, notif_goal = MPNotif.NOTIF_TOP), self._animate_els([{
                            el: self._get_el("bg"),
                            attr: "opacity",
                            start: 0,
                            goal: MPNotif.BG_OPACITY
                        }, {
                            el: notif_el,
                            attr: "opacity",
                            start: 0,
                            goal: 1
                        }, {
                            el: notif_el,
                            attr: notif_attr,
                            start: notif_start,
                            goal: notif_goal
                        }], MPNotif.ANIM_TIME, self._mark_as_shown)
                    }
                }, 100), _.register_event(self._get_el("cancel"), "click", function(e) {
                    e.preventDefault(), self.dismiss()
                });
                var click_el = self._get_el("button") || self._get_el("mini-content");
                _.register_event(click_el, "click", function(e) {
                    e.preventDefault(), self.show_video ? (self._track_event("$campaign_open", {
                        $resource_type: "video"
                    }), self._switch_to_video()) : (self.dismiss(), self.clickthrough && self._track_event("$campaign_open", {
                        $resource_type: "link"
                    }, function() {
                        window.location.href = self.dest_url
                    }))
                })
            }
        }), MPNotif.prototype._get_el = function(id) {
            return document.getElementById(MPNotif.MARKUP_PREFIX + "-" + id)
        }, MPNotif.prototype._get_notification_display_el = function() {
            return this._get_el(this.notif_type)
        }, MPNotif.prototype._get_shown_campaigns = function() {
            return this.persistence.props[CAMPAIGN_IDS_KEY] || (this.persistence.props[CAMPAIGN_IDS_KEY] = {})
        }, MPNotif.prototype._browser_lte = function(browser, version) {
            return this.browser_versions[browser] && this.browser_versions[browser] <= version
        }, MPNotif.prototype._init_image_html = function() {
            var imgs_to_preload = [];
            return this.mini ? (this.thumb_image_url = this.thumb_image_url || "//cdn.mxpnl.com/site_media/images/icons/notifications/mini-news-dark.png", imgs_to_preload.push(this.thumb_image_url)) : (this.image_url ? (imgs_to_preload.push(this.image_url), this.img_html = '<img id="img" src="' + this.image_url + '"/>') : this.img_html = "", this.thumb_image_url ? (imgs_to_preload.push(this.thumb_image_url), this.thumb_img_html = '<div id="thumbborder-wrapper"><div id="thumbborder"></div></div><img id="thumbnail" src="' + this.thumb_image_url + '" width="' + MPNotif.THUMB_IMG_SIZE + '" height="' + MPNotif.THUMB_IMG_SIZE + '"/><div id="thumbspacer"></div>') : this.thumb_img_html = ""), imgs_to_preload
        }, MPNotif.prototype._init_notification_el = function() {
            var notification_html = "",
                video_src = "",
                video_html = "",
                cancel_html = '<div id="cancel"><div id="cancel-icon"></div></div>';
            if (this.notification_el = document.createElement("div"), this.notification_el.id = MPNotif.MARKUP_PREFIX + "-wrapper", this.mini) notification_html = '<div id="mini"><div id="mainbox">' + cancel_html + '<div id="mini-content"><div id="mini-icon"><div id="mini-icon-img"></div></div><div id="body"><div id="body-text"><div>' + this.body + '</div></div></div></div></div><div id="mini-border"></div></div>';
            else {
                var close_html = this.clickthrough || this.show_video ? "" : '<div id="button-close"></div>',
                    play_html = this.show_video ? '<div id="button-play"></div>' : "";
                this._browser_lte("ie", 7) && (close_html = "", play_html = ""), notification_html = '<div id="takeover">' + this.thumb_img_html + '<div id="mainbox">' + cancel_html + '<div id="content">' + this.img_html + '<div id="title">' + this.title + '</div><div id="body">' + this.body + '</div><div id="tagline"><a href="http://mixpanel.com?from=inapp" target="_blank">POWERED BY MIXPANEL</a></div></div><div id="button">' + close_html + '<a id="button-link" href="' + this.dest_url + '">' + this.cta + "</a>" + play_html + "</div></div></div>"
            }
            this.youtube_video ? (video_src = "//www.youtube.com/embed/" + this.youtube_video + "?wmode=transparent&showinfo=0&modestbranding=0&rel=0&autoplay=1&loop=0&vq=hd1080", this.yt_custom && (video_src += "&enablejsapi=1&html5=1&controls=0", video_html = '<div id="video-controls"><div id="video-progress" class="video-progress-el"><div id="video-progress-total" class="video-progress-el"></div><div id="video-elapsed" class="video-progress-el"></div></div><div id="video-time" class="video-progress-el"></div></div>')) : this.vimeo_video && (video_src = "//player.vimeo.com/video/" + this.vimeo_video + "?autoplay=1&title=0&byline=0&portrait=0"), this.show_video && (this.video_iframe = '<iframe id="' + MPNotif.MARKUP_PREFIX + '-video-frame" width="' + this.video_width + '" height="' + this.video_height + '"  src="' + video_src + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen="1" scrolling="no"></iframe>', video_html = '<div id="video-' + (this.flip_animate ? "" : "no") + 'flip"><div id="video"><div id="video-holder"></div>' + video_html + "</div></div>");
            var main_html = video_html + notification_html;
            this.flip_animate && (main_html = (this.mini ? notification_html : "") + '<div id="flipcontainer"><div id="flipper">' + (this.mini ? video_html : main_html) + "</div></div>"), this.notification_el.innerHTML = ('<div id="overlay" class="' + this.notif_type + '"><div id="campaignid-' + this.campaign_id + '"><div id="bgwrapper"><div id="bg"></div>' + main_html + "</div></div></div>").replace(/class=\"/g, 'class="' + MPNotif.MARKUP_PREFIX + "-").replace(/id=\"/g, 'id="' + MPNotif.MARKUP_PREFIX + "-")
        }, MPNotif.prototype._init_styles = function() {
            "dark" === this.style ? this.style_vals = {
                bg: "#1d1f25",
                bg_actions: "#282b32",
                bg_hover: "#3a4147",
                bg_light: "#4a5157",
                border_gray: "#32353c",
                cancel_opacity: "0.4",
                mini_hover: "#2a3137",
                text_title: "#fff",
                text_main: "#9498a3",
                text_tagline: "#464851",
                text_hover: "#ddd"
            } : this.style_vals = {
                bg: "#fff",
                bg_actions: "#e7eaee",
                bg_hover: "#eceff3",
                bg_light: "#f5f5f5",
                border_gray: "#e4ecf2",
                cancel_opacity: "1.0",
                mini_hover: "#fafafa",
                text_title: "#5c6578",
                text_main: "#8b949b",
                text_tagline: "#ced9e6",
                text_hover: "#7c8598"
            };
            var shadow = "0px 0px 35px 0px rgba(45, 49, 56, 0.7)",
                video_shadow = shadow,
                mini_shadow = shadow,
                thumb_total_size = MPNotif.THUMB_IMG_SIZE + 2 * MPNotif.THUMB_BORDER_SIZE,
                anim_seconds = MPNotif.ANIM_TIME / 1e3 + "s";
            this.mini && (shadow = "none");
            var notif_media_queries = {},
                min_width = MPNotif.NOTIF_WIDTH_MINI + 20;
            notif_media_queries["@media only screen and (max-width: " + (min_width - 1) + "px)"] = {
                "#overlay": {
                    display: "none"
                }
            };
            var notif_styles = {
                ".flipped": {
                    transform: "rotateY(180deg)"
                },
                "#overlay": {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    overflow: "auto",
                    "text-align": "center",
                    "z-index": "10000",
                    "font-family": '"Helvetica", "Arial", sans-serif',
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale"
                },
                "#overlay.mini": {
                    height: "0",
                    overflow: "visible"
                },
                "#overlay a": {
                    width: "initial",
                    padding: "0",
                    "text-decoration": "none",
                    "text-transform": "none",
                    color: "inherit"
                },
                "#bgwrapper": {
                    position: "relative",
                    width: "100%",
                    height: "100%"
                },
                "#bg": {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    "min-width": 4 * this.doc_width + "px",
                    "min-height": 4 * this.doc_height + "px",
                    "background-color": "black",
                    opacity: "0.0",
                    "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",
                    filter: "alpha(opacity=60)",
                    transition: "opacity " + anim_seconds
                },
                "#bg.visible": {
                    opacity: MPNotif.BG_OPACITY
                },
                ".mini #bg": {
                    width: "0",
                    height: "0",
                    "min-width": "0"
                },
                "#flipcontainer": {
                    perspective: "1000px",
                    position: "absolute",
                    width: "100%"
                },
                "#flipper": {
                    position: "relative",
                    "transform-style": "preserve-3d",
                    transition: "0.3s"
                },
                "#takeover": {
                    position: "absolute",
                    left: "50%",
                    width: MPNotif.NOTIF_WIDTH + "px",
                    "margin-left": Math.round(-MPNotif.NOTIF_WIDTH / 2) + "px",
                    "backface-visibility": "hidden",
                    transform: "rotateY(0deg)",
                    opacity: "0.0",
                    top: MPNotif.NOTIF_START_TOP + "px",
                    transition: "opacity " + anim_seconds + ", top " + anim_seconds
                },
                "#takeover.visible": {
                    opacity: "1.0",
                    top: MPNotif.NOTIF_TOP + "px"
                },
                "#takeover.exiting": {
                    opacity: "0.0",
                    top: MPNotif.NOTIF_START_TOP + "px"
                },
                "#thumbspacer": {
                    height: MPNotif.THUMB_OFFSET + "px"
                },
                "#thumbborder-wrapper": {
                    position: "absolute",
                    top: -MPNotif.THUMB_BORDER_SIZE + "px",
                    left: MPNotif.NOTIF_WIDTH / 2 - MPNotif.THUMB_OFFSET - MPNotif.THUMB_BORDER_SIZE + "px",
                    width: thumb_total_size + "px",
                    height: thumb_total_size / 2 + "px",
                    overflow: "hidden"
                },
                "#thumbborder": {
                    position: "absolute",
                    width: thumb_total_size + "px",
                    height: thumb_total_size + "px",
                    "border-radius": thumb_total_size + "px",
                    "background-color": this.style_vals.bg_actions,
                    opacity: "0.5"
                },
                "#thumbnail": {
                    position: "absolute",
                    top: "0px",
                    left: MPNotif.NOTIF_WIDTH / 2 - MPNotif.THUMB_OFFSET + "px",
                    width: MPNotif.THUMB_IMG_SIZE + "px",
                    height: MPNotif.THUMB_IMG_SIZE + "px",
                    overflow: "hidden",
                    "z-index": "100",
                    "border-radius": MPNotif.THUMB_IMG_SIZE + "px"
                },
                "#mini": {
                    position: "absolute",
                    right: "20px",
                    top: MPNotif.NOTIF_TOP + "px",
                    width: this.notif_width + "px",
                    height: 2 * MPNotif.NOTIF_HEIGHT_MINI + "px",
                    "margin-top": 20 - MPNotif.NOTIF_HEIGHT_MINI + "px",
                    "backface-visibility": "hidden",
                    opacity: "0.0",
                    transform: "rotateX(90deg)",
                    transition: "opacity 0.3s, transform 0.3s, right 0.3s"
                },
                "#mini.visible": {
                    opacity: "1.0",
                    transform: "rotateX(0deg)"
                },
                "#mini.exiting": {
                    opacity: "0.0",
                    right: "-150px"
                },
                "#mainbox": {
                    "border-radius": "4px",
                    "box-shadow": shadow,
                    "text-align": "center",
                    "background-color": this.style_vals.bg,
                    "font-size": "14px",
                    color: this.style_vals.text_main
                },
                "#mini #mainbox": {
                    height: MPNotif.NOTIF_HEIGHT_MINI + "px",
                    "margin-top": MPNotif.NOTIF_HEIGHT_MINI + "px",
                    "border-radius": "3px",
                    transition: "background-color " + anim_seconds
                },
                "#mini-border": {
                    height: MPNotif.NOTIF_HEIGHT_MINI + 6 + "px",
                    width: MPNotif.NOTIF_WIDTH_MINI + 6 + "px",
                    position: "absolute",
                    top: "-3px",
                    left: "-3px",
                    "margin-top": MPNotif.NOTIF_HEIGHT_MINI + "px",
                    "border-radius": "6px",
                    opacity: "0.25",
                    "background-color": "#fff",
                    "z-index": "-1",
                    "box-shadow": mini_shadow
                },
                "#mini-icon": {
                    position: "relative",
                    display: "inline-block",
                    width: "75px",
                    height: MPNotif.NOTIF_HEIGHT_MINI + "px",
                    "border-radius": "3px 0 0 3px",
                    "background-color": this.style_vals.bg_actions,
                    background: "linear-gradient(135deg, " + this.style_vals.bg_light + " 0%, " + this.style_vals.bg_actions + " 100%)",
                    transition: "background-color " + anim_seconds
                },
                "#mini:hover #mini-icon": {
                    "background-color": this.style_vals.mini_hover
                },
                "#mini:hover #mainbox": {
                    "background-color": this.style_vals.mini_hover
                },
                "#mini-icon-img": {
                    position: "absolute",
                    "background-image": "url(" + this.thumb_image_url + ")",
                    width: "48px",
                    height: "48px",
                    top: "20px",
                    left: "12px"
                },
                "#content": {
                    padding: "30px 20px 0px 20px"
                },
                "#mini-content": {
                    "text-align": "left",
                    height: MPNotif.NOTIF_HEIGHT_MINI + "px",
                    cursor: "pointer"
                },
                "#img": {
                    width: "328px",
                    "margin-top": "30px",
                    "border-radius": "5px"
                },
                "#title": {
                    "max-height": "600px",
                    overflow: "hidden",
                    "word-wrap": "break-word",
                    padding: "25px 0px 20px 0px",
                    "font-size": "19px",
                    "font-weight": "bold",
                    color: this.style_vals.text_title
                },
                "#body": {
                    "max-height": "600px",
                    "margin-bottom": "25px",
                    overflow: "hidden",
                    "word-wrap": "break-word",
                    "line-height": "21px",
                    "font-size": "15px",
                    "font-weight": "normal",
                    "text-align": "left"
                },
                "#mini #body": {
                    display: "inline-block",
                    "max-width": "250px",
                    margin: "0 0 0 30px",
                    height: MPNotif.NOTIF_HEIGHT_MINI + "px",
                    "font-size": "16px",
                    "letter-spacing": "0.8px",
                    color: this.style_vals.text_title
                },
                "#mini #body-text": {
                    display: "table",
                    height: MPNotif.NOTIF_HEIGHT_MINI + "px"
                },
                "#mini #body-text div": {
                    display: "table-cell",
                    "vertical-align": "middle"
                },
                "#tagline": {
                    "margin-bottom": "15px",
                    "font-size": "10px",
                    "font-weight": "600",
                    "letter-spacing": "0.8px",
                    color: "#ccd7e0",
                    "text-align": "left"
                },
                "#tagline a": {
                    color: this.style_vals.text_tagline,
                    transition: "color " + anim_seconds
                },
                "#tagline a:hover": {
                    color: this.style_vals.text_hover
                },
                "#cancel": {
                    position: "absolute",
                    right: "0",
                    width: "8px",
                    height: "8px",
                    padding: "10px",
                    "border-radius": "20px",
                    margin: "12px 12px 0 0",
                    "box-sizing": "content-box",
                    cursor: "pointer",
                    transition: "background-color " + anim_seconds
                },
                "#mini #cancel": {
                    margin: "7px 7px 0 0"
                },
                "#cancel-icon": {
                    width: "8px",
                    height: "8px",
                    overflow: "hidden",
                    "background-image": "url(//cdn.mxpnl.com/site_media/images/icons/notifications/cancel-x.png)",
                    opacity: this.style_vals.cancel_opacity
                },
                "#cancel:hover": {
                    "background-color": this.style_vals.bg_hover
                },
                "#button": {
                    display: "block",
                    height: "60px",
                    "line-height": "60px",
                    "text-align": "center",
                    "background-color": this.style_vals.bg_actions,
                    "border-radius": "0 0 4px 4px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "background-color " + anim_seconds
                },
                "#button-close": {
                    display: "inline-block",
                    width: "9px",
                    height: "60px",
                    "margin-right": "8px",
                    "vertical-align": "top",
                    "background-image": "url(//cdn.mxpnl.com/site_media/images/icons/notifications/close-x-" + this.style + ".png)",
                    "background-repeat": "no-repeat",
                    "background-position": "0px 25px"
                },
                "#button-play": {
                    display: "inline-block",
                    width: "30px",
                    height: "60px",
                    "margin-left": "15px",
                    "background-image": "url(//cdn.mxpnl.com/site_media/images/icons/notifications/play-" + this.style + "-small.png)",
                    "background-repeat": "no-repeat",
                    "background-position": "0px 15px"
                },
                "a#button-link": {
                    display: "inline-block",
                    "vertical-align": "top",
                    "text-align": "center",
                    "font-size": "17px",
                    "font-weight": "bold",
                    overflow: "hidden",
                    "word-wrap": "break-word",
                    color: this.style_vals.text_title,
                    transition: "color " + anim_seconds
                },
                "#button:hover": {
                    "background-color": this.style_vals.bg_hover,
                    color: this.style_vals.text_hover
                },
                "#button:hover a": {
                    color: this.style_vals.text_hover
                },
                "#video-noflip": {
                    position: "relative",
                    top: 2 * -this.video_height + "px"
                },
                "#video-flip": {
                    "backface-visibility": "hidden",
                    transform: "rotateY(180deg)"
                },
                "#video": {
                    position: "absolute",
                    width: this.video_width - 1 + "px",
                    height: this.video_height + "px",
                    top: MPNotif.NOTIF_TOP + "px",
                    "margin-top": "100px",
                    left: "50%",
                    "margin-left": Math.round(-this.video_width / 2) + "px",
                    overflow: "hidden",
                    "border-radius": "5px",
                    "box-shadow": video_shadow,
                    transform: "translateZ(1px)",
                    transition: "opacity " + anim_seconds + ", top " + anim_seconds
                },
                "#video.exiting": {
                    opacity: "0.0",
                    top: this.video_height + "px"
                },
                "#video-holder": {
                    position: "absolute",
                    width: this.video_width - 1 + "px",
                    height: this.video_height + "px",
                    overflow: "hidden",
                    "border-radius": "5px"
                },
                "#video-frame": {
                    "margin-left": "-1px",
                    width: this.video_width + "px"
                },
                "#video-controls": {
                    opacity: "0",
                    transition: "opacity 0.5s"
                },
                "#video:hover #video-controls": {
                    opacity: "1.0"
                },
                "#video .video-progress-el": {
                    position: "absolute",
                    bottom: "0",
                    height: "25px",
                    "border-radius": "0 0 0 5px"
                },
                "#video-progress": {
                    width: "90%"
                },
                "#video-progress-total": {
                    width: "100%",
                    "background-color": this.style_vals.bg,
                    opacity: "0.7"
                },
                "#video-elapsed": {
                    width: "0",
                    "background-color": "#6cb6f5",
                    opacity: "0.9"
                },
                "#video #video-time": {
                    width: "10%",
                    right: "0",
                    "font-size": "11px",
                    "line-height": "25px",
                    color: this.style_vals.text_main,
                    "background-color": "#666",
                    "border-radius": "0 0 5px 0"
                }
            };
            this._browser_lte("ie", 8) && _.extend(notif_styles, {
                "* html #overlay": {
                    position: "absolute"
                },
                "* html #bg": {
                    position: "absolute"
                },
                "html, body": {
                    height: "100%"
                }
            }), this._browser_lte("ie", 7) && _.extend(notif_styles, {
                "#mini #body": {
                    display: "inline",
                    zoom: "1",
                    border: "1px solid " + this.style_vals.bg_hover
                },
                "#mini #body-text": {
                    padding: "20px"
                },
                "#mini #mini-icon": {
                    display: "none"
                }
            });
            var VENDOR_STYLES = ["backface-visibility", "border-radius", "box-shadow", "opacity", "perspective", "transform", "transform-style", "transition"],
                VENDOR_PREFIXES = ["khtml", "moz", "ms", "o", "webkit"];
            for (var selector in notif_styles)
                for (var si = 0; si < VENDOR_STYLES.length; si++) {
                    var prop = VENDOR_STYLES[si];
                    if (prop in notif_styles[selector])
                        for (var val = notif_styles[selector][prop], pi = 0; pi < VENDOR_PREFIXES.length; pi++) notif_styles[selector]["-" + VENDOR_PREFIXES[pi] + "-" + prop] = val
                }
            var inject_styles = function(styles, media_queries) {
                var create_style_text = function(style_defs) {
                        var st = "";
                        for (var selector in style_defs) {
                            var mp_selector = selector.replace(/#/g, "#" + MPNotif.MARKUP_PREFIX + "-").replace(/\./g, "." + MPNotif.MARKUP_PREFIX + "-");
                            st += "\n" + mp_selector + " {";
                            var props = style_defs[selector];
                            for (var k in props) st += k + ":" + props[k] + ";";
                            st += "}"
                        }
                        return st
                    },
                    create_media_query_text = function(mq_defs) {
                        var mqt = "";
                        for (var mq in mq_defs) mqt += "\n" + mq + " {" + create_style_text(mq_defs[mq]) + "\n}";
                        return mqt
                    },
                    style_text = create_style_text(styles) + create_media_query_text(media_queries),
                    head_el = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                    style_el = document.createElement("style");
                head_el.appendChild(style_el), style_el.setAttribute("type", "text/css"), style_el.styleSheet ? style_el.styleSheet.cssText = style_text : style_el.textContent = style_text
            };
            inject_styles(notif_styles, notif_media_queries)
        }, MPNotif.prototype._init_video = _.safewrap(function() {
            if (this.video_url) {
                var self = this;
                self.yt_custom = "postMessage" in window;
                document.createElement("div").style;
                self.dest_url = self.video_url;
                var youtube_match = self.video_url.match(/(?:youtube(?:-nocookie)?\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i),
                    vimeo_match = self.video_url.match(/vimeo\.com\/.*?(\d+)/i);
                if (youtube_match) {
                    if (self.show_video = !0, self.youtube_video = youtube_match[1], self.yt_custom) {
                        window.onYouTubeIframeAPIReady = function() {
                            self._get_el("video-frame") && self._yt_video_ready()
                        };
                        var tag = document.createElement("script");
                        tag.src = "//www.youtube.com/iframe_api";
                        var firstScriptTag = document.getElementsByTagName("script")[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
                    }
                } else vimeo_match && (self.show_video = !0, self.vimeo_video = vimeo_match[1]);
                (self._browser_lte("ie", 7) || self._browser_lte("firefox", 3)) && (self.show_video = !1, self.clickthrough = !0)
            }
        }), MPNotif.prototype._mark_as_shown = _.safewrap(function() {
            var self = this;
            _.register_event(self._get_el("bg"), "click", function(e) {
                self.dismiss()
            });
            var get_style = function(el, style_name) {
                var styles = {};
                return document.defaultView && document.defaultView.getComputedStyle ? styles = document.defaultView.getComputedStyle(el, null) : el.currentStyle && (styles = el.currentStyle), styles[style_name]
            };
            if (this.campaign_id) {
                var notif_el = this._get_el("overlay");
                notif_el && "hidden" !== get_style(notif_el, "visibility") && "none" !== get_style(notif_el, "display") && this._mark_delivery()
            }
        }), MPNotif.prototype._mark_delivery = _.safewrap(function(extra_props) {
            this.marked_as_shown || (this.marked_as_shown = !0, this.campaign_id && (this._get_shown_campaigns()[this.campaign_id] = 1 * new Date, this.persistence.save()), this._track_event("$campaign_delivery", extra_props), this.mixpanel.people.append({
                $campaigns: this.campaign_id,
                $notifications: {
                    campaign_id: this.campaign_id,
                    message_id: this.message_id,
                    type: "web",
                    time: new Date
                }
            }))
        }), MPNotif.prototype._preload_images = function(all_loaded_cb) {
            var self = this;
            if (0 === this.imgs_to_preload.length) return void all_loaded_cb();
            for (var preloaded_imgs = 0, img_objs = [], i = 0; i < this.imgs_to_preload.length; i++) {
                var img = new Image,
                    onload = function() {
                        preloaded_imgs++, preloaded_imgs === self.imgs_to_preload.length && all_loaded_cb && (all_loaded_cb(), all_loaded_cb = null)
                    };
                img.onload = onload, img.src = this.imgs_to_preload[i], img.complete && onload(), img_objs.push(img)
            }
            this._browser_lte("ie", 7) && setTimeout(function() {
                var imgs_loaded = !0;
                for (i = 0; i < img_objs.length; i++) img_objs[i].complete || (imgs_loaded = !1);
                imgs_loaded && all_loaded_cb && (all_loaded_cb(), all_loaded_cb = null)
            }, 500)
        }, MPNotif.prototype._remove_notification_el = _.safewrap(function() {
            window.clearInterval(this._video_progress_checker), this.notification_el.style.visibility = "hidden", this.body_el.removeChild(this.notification_el)
        }), MPNotif.prototype._set_client_config = function() {
            var get_browser_version = function(browser_ex) {
                var match = navigator.userAgent.match(browser_ex);
                return match && match[1]
            };
            this.browser_versions = {}, this.browser_versions.chrome = get_browser_version(/Chrome\/(\d+)/), this.browser_versions.firefox = get_browser_version(/Firefox\/(\d+)/), this.browser_versions.ie = get_browser_version(/MSIE (\d+).+/), !this.browser_versions.ie && !window.ActiveXObject && "ActiveXObject" in window && (this.browser_versions.ie = 11), this.body_el = document.body || document.getElementsByTagName("body")[0], this.body_el && (this.doc_width = Math.max(this.body_el.scrollWidth, document.documentElement.scrollWidth, this.body_el.offsetWidth, document.documentElement.offsetWidth, this.body_el.clientWidth, document.documentElement.clientWidth), this.doc_height = Math.max(this.body_el.scrollHeight, document.documentElement.scrollHeight, this.body_el.offsetHeight, document.documentElement.offsetHeight, this.body_el.clientHeight, document.documentElement.clientHeight));
            var ie_ver = this.browser_versions.ie,
                sample_styles = document.createElement("div").style,
                is_css_compatible = function(rule) {
                    if (rule in sample_styles) return !0;
                    if (!ie_ver) {
                        rule = rule[0].toUpperCase() + rule.slice(1);
                        for (var props = ["O" + rule, "Webkit" + rule, "Moz" + rule], i = 0; i < props.length; i++)
                            if (props[i] in sample_styles) return !0
                    }
                    return !1
                };
            this.use_transitions = this.body_el && is_css_compatible("transition") && is_css_compatible("transform"), this.flip_animate = (this.browser_versions.chrome >= 33 || this.browser_versions.firefox >= 15) && this.body_el && is_css_compatible("backfaceVisibility") && is_css_compatible("perspective") && is_css_compatible("transform")
        }, MPNotif.prototype._switch_to_video = _.safewrap(function() {
            var self = this,
                anims = [{
                    el: self._get_notification_display_el(),
                    attr: "opacity",
                    start: 1,
                    goal: 0
                }, {
                    el: self._get_notification_display_el(),
                    attr: "top",
                    start: MPNotif.NOTIF_TOP,
                    goal: -500
                }, {
                    el: self._get_el("video-noflip"),
                    attr: "opacity",
                    start: 0,
                    goal: 1
                }, {
                    el: self._get_el("video-noflip"),
                    attr: "top",
                    start: 2 * -self.video_height,
                    goal: 0
                }];
            if (self.mini) {
                var bg = self._get_el("bg"),
                    overlay = self._get_el("overlay");
                bg.style.width = "100%", bg.style.height = "100%", overlay.style.width = "100%", self._add_class(self._get_notification_display_el(), "exiting"), self._add_class(bg, "visible"), anims.push({
                    el: self._get_el("bg"),
                    attr: "opacity",
                    start: 0,
                    goal: MPNotif.BG_OPACITY
                })
            }
            var video_el = self._get_el("video-holder");
            video_el.innerHTML = self.video_iframe;
            var video_ready = function() {
                window.YT && window.YT.loaded && self._yt_video_ready(), self.showing_video = !0, self._get_notification_display_el().style.visibility = "hidden"
            };
            self.flip_animate ? (self._add_class("flipper", "flipped"), setTimeout(video_ready, MPNotif.ANIM_TIME)) : self._animate_els(anims, MPNotif.ANIM_TIME, video_ready)
        }), MPNotif.prototype._track_event = function(event_name, properties, cb) {
            this.campaign_id ? (properties = properties || {}, properties = _.extend(properties, {
                campaign_id: this.campaign_id,
                message_id: this.message_id,
                message_type: "web_inapp",
                message_subtype: this.notif_type
            }), this.mixpanel.track(event_name, properties, cb)) : cb && cb.call()
        }, MPNotif.prototype._yt_video_ready = _.safewrap(function() {
            var self = this;
            if (!self.video_inited) {
                self.video_inited = !0;
                var progress_bar = self._get_el("video-elapsed"),
                    progress_time = self._get_el("video-time"),
                    progress_el = self._get_el("video-progress");
                new window.YT.Player(MPNotif.MARKUP_PREFIX + "-video-frame", {
                    events: {
                        onReady: function(event) {
                            var ytplayer = event.target,
                                video_duration = ytplayer.getDuration(),
                                pad = function(i) {
                                    return ("00" + i).slice(-2)
                                },
                                update_video_time = function(current_time) {
                                    var secs = Math.round(video_duration - current_time),
                                        mins = Math.floor(secs / 60),
                                        hours = Math.floor(mins / 60);
                                    secs -= 60 * mins, mins -= 60 * hours, progress_time.innerHTML = "-" + (hours ? hours + ":" : "") + pad(mins) + ":" + pad(secs)
                                };
                            update_video_time(0), self._video_progress_checker = window.setInterval(function() {
                                var current_time = ytplayer.getCurrentTime();
                                progress_bar.style.width = current_time / video_duration * 100 + "%", update_video_time(current_time)
                            }, 250), _.register_event(progress_el, "click", function(e) {
                                var clickx = Math.max(0, e.pageX - progress_el.getBoundingClientRect().left);
                                ytplayer.seekTo(video_duration * clickx / progress_el.clientWidth, !0)
                            })
                        }
                    }
                })
            }
        }), _.toArray = _.toArray, _.isObject = _.isObject, _.JSONEncode = _.JSONEncode, _.JSONDecode = _.JSONDecode, _.isBlockedUA = _.isBlockedUA, _.isEmptyObject = _.isEmptyObject, _.info = _.info, _.info.device = _.info.device, _.info.browser = _.info.browser, _.info.properties = _.info.properties, MixpanelLib.prototype.init = MixpanelLib.prototype.init, MixpanelLib.prototype.reset = MixpanelLib.prototype.reset, MixpanelLib.prototype.disable = MixpanelLib.prototype.disable, MixpanelLib.prototype.time_event = MixpanelLib.prototype.time_event, MixpanelLib.prototype.track = MixpanelLib.prototype.track, MixpanelLib.prototype.track_links = MixpanelLib.prototype.track_links, MixpanelLib.prototype.track_forms = MixpanelLib.prototype.track_forms, MixpanelLib.prototype.track_pageview = MixpanelLib.prototype.track_pageview, MixpanelLib.prototype.register = MixpanelLib.prototype.register, MixpanelLib.prototype.register_once = MixpanelLib.prototype.register_once, MixpanelLib.prototype.unregister = MixpanelLib.prototype.unregister, MixpanelLib.prototype.identify = MixpanelLib.prototype.identify, MixpanelLib.prototype.alias = MixpanelLib.prototype.alias, MixpanelLib.prototype.name_tag = MixpanelLib.prototype.name_tag, MixpanelLib.prototype.set_config = MixpanelLib.prototype.set_config, MixpanelLib.prototype.get_config = MixpanelLib.prototype.get_config, MixpanelLib.prototype.get_property = MixpanelLib.prototype.get_property, MixpanelLib.prototype.get_distinct_id = MixpanelLib.prototype.get_distinct_id, MixpanelLib.prototype.toString = MixpanelLib.prototype.toString, MixpanelLib.prototype._check_and_handle_notifications = MixpanelLib.prototype._check_and_handle_notifications, MixpanelLib.prototype._show_notification = MixpanelLib.prototype._show_notification, MixpanelPersistence.prototype.properties = MixpanelPersistence.prototype.properties, MixpanelPersistence.prototype.update_search_keyword = MixpanelPersistence.prototype.update_search_keyword, MixpanelPersistence.prototype.update_referrer_info = MixpanelPersistence.prototype.update_referrer_info, MixpanelPersistence.prototype.get_cross_subdomain = MixpanelPersistence.prototype.get_cross_subdomain, MixpanelPersistence.prototype.clear = MixpanelPersistence.prototype.clear, MixpanelPeople.prototype.set = MixpanelPeople.prototype.set, MixpanelPeople.prototype.set_once = MixpanelPeople.prototype.set_once, MixpanelPeople.prototype.increment = MixpanelPeople.prototype.increment, MixpanelPeople.prototype.append = MixpanelPeople.prototype.append, MixpanelPeople.prototype.union = MixpanelPeople.prototype.union, MixpanelPeople.prototype.track_charge = MixpanelPeople.prototype.track_charge, MixpanelPeople.prototype.clear_charges = MixpanelPeople.prototype.clear_charges, MixpanelPeople.prototype.delete_user = MixpanelPeople.prototype.delete_user, MixpanelPeople.prototype.toString = MixpanelPeople.prototype.toString, _.safewrap_class(MixpanelLib, ["identify", "_check_and_handle_notifications", "_show_notification"]);
        var instances = {},
            extend_mp = function() {
                _.each(instances, function(instance, name) {
                    name !== PRIMARY_INSTANCE_NAME && (mixpanel_master[name] = instance)
                }), mixpanel_master._ = _
            },
            override_mp_init_func = function() {
                mixpanel_master.init = function(token, config, name) {
                    if (name) return mixpanel_master[name] || (mixpanel_master[name] = instances[name] = create_mplib(token, config, name), mixpanel_master[name]._loaded()), mixpanel_master[name];
                    var instance = mixpanel_master;
                    instances[PRIMARY_INSTANCE_NAME] ? instance = instances[PRIMARY_INSTANCE_NAME] : token && (instance = create_mplib(token, config, PRIMARY_INSTANCE_NAME), instance._loaded(), instances[PRIMARY_INSTANCE_NAME] = instance), mixpanel_master = instance, init_type === INIT_SNIPPET && (window[PRIMARY_INSTANCE_NAME] = mixpanel_master), extend_mp()
                }
            },
            add_dom_loaded_handler = function() {
                function dom_loaded_handler() {
                    dom_loaded_handler.done || (dom_loaded_handler.done = !0, DOM_LOADED = !0, ENQUEUE_REQUESTS = !1, _.each(instances, function(inst) {
                        inst._dom_loaded()
                    }))
                }

                function do_scroll_check() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(do_scroll_check, 1)
                    }
                    dom_loaded_handler()
                }
                if (document.addEventListener) "complete" == document.readyState ? dom_loaded_handler() : document.addEventListener("DOMContentLoaded", dom_loaded_handler, !1);
                else if (document.attachEvent) {
                    document.attachEvent("onreadystatechange", dom_loaded_handler);
                    var toplevel = !1;
                    try {
                        toplevel = null == window.frameElement
                    } catch (e) {}
                    document.documentElement.doScroll && toplevel && do_scroll_check()
                }
                _.register_event(window, "load", dom_loaded_handler, !0)
            },
            add_dom_event_handlers = function(instance) {
                var name = instance.get_config("name");
                instance.mp_counts = instance.mp_counts || {}, instance.mp_counts.$__c = parseInt(_.cookie.get("mp_" + name + "__c")) || 0, instance.mp_counts.$__c3 = parseInt(_.cookie.get("mp_" + name + "__c3")) || 0, instance.mp_counts.$__c4 = parseInt(_.cookie.get("mp_" + name + "__c4")) || 0, instance.mp_counts.$__c5 = parseInt(_.cookie.get("mp_" + name + "__c5")) || 0;
                var increment_count = function(els, size, filtered_size) {
                        instance.mp_counts.$__c = (instance.mp_counts.$__c || 0) + 1, instance.mp_counts.$__c3 = (instance.mp_counts.$__c3 || 0) + size, instance.mp_counts.$__c4 = (instance.mp_counts.$__c4 || 0) + filtered_size, instance.mp_counts.$__c5 = (instance.mp_counts.$__c5 || 0) + els, _.cookie.set("mp_" + name + "__c", instance.mp_counts.$__c, 1, !0), _.cookie.set("mp_" + name + "__c3", instance.mp_counts.$__c3, 1, !0), _.cookie.set("mp_" + name + "__c4", instance.mp_counts.$__c4, 1, !0), _.cookie.set("mp_" + name + "__c5", instance.mp_counts.$__c5, 1, !0)
                    },
                    process = function(target, filter) {
                        for (var processed = [], element = target; element && element !== document.body;) {
                            for (var props = {
                                    attributes: [],
                                    classes: "string" == typeof element.className ? element.className.split(" ") : [],
                                    id: element.id,
                                    tagName: element.tagName,
                                    textContent: element === target ? element.textContent.trim().substring(0, 255) : ""
                                }, i = 0; i < (element.attributes || []).length; i++) {
                                var attr = element.attributes[i],
                                    attrsToFilter = ["id", "class"];
                                filter && (attrsToFilter = attrsToFilter.concat(["href", "title", "style", "for", "value", "checked", "selected"])), attrsToFilter.indexOf(attr.name) === -1 && props.attributes.push({
                                    name: attr.name,
                                    value: attr.value
                                })
                            }
                            for (var nthOfType = 1, nthChild = 1, curNode = element; curNode.previousElementSibling;) curNode = curNode.previousElementSibling, nthChild++, curNode.tagName === element.tagName && nthOfType++;
                            props.nthChild = nthChild, props.nthOfType = nthOfType, processed.push(props), element = element.parentNode
                        }
                        return processed
                    },
                    evtCallback = function(e) {
                        try {
                            var processed = process(e.target),
                                processed_filtered = process(e.target, !0),
                                size = JSON.stringify(processed).length,
                                size_filtered = JSON.stringify(processed_filtered).length;
                            instance.mp_counts = instance.mp_counts || {}, increment_count(processed.length, size, size_filtered)
                        } catch (e) {
                            console.error(e)
                        }
                    };
                _.register_event(document, "submit", evtCallback), _.register_event(document, "change", evtCallback);
                var mousedownTarget = null;
                _.register_event(document, "mousedown", function(e) {
                    mousedownTarget = e.target
                }), _.register_event(document, "mouseup", function(e) {
                    e.target === mousedownTarget && evtCallback(e)
                })
            },
            mixpanel = init_as_module();
        return mixpanel
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    ! function(root, factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function($) {
            return factory(root, $)
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }(this, function(global, $) {
        "use strict";

        function getAnimationDuration($elem) {
            if (IS_ANIMATION && "none" === $elem.css("animation-name") && "none" === $elem.css("-webkit-animation-name") && "none" === $elem.css("-moz-animation-name") && "none" === $elem.css("-o-animation-name") && "none" === $elem.css("-ms-animation-name")) return 0;
            var max, len, num, i, duration = $elem.css("animation-duration") || $elem.css("-webkit-animation-duration") || $elem.css("-moz-animation-duration") || $elem.css("-o-animation-duration") || $elem.css("-ms-animation-duration") || "0s",
                delay = $elem.css("animation-delay") || $elem.css("-webkit-animation-delay") || $elem.css("-moz-animation-delay") || $elem.css("-o-animation-delay") || $elem.css("-ms-animation-delay") || "0s",
                iterationCount = $elem.css("animation-iteration-count") || $elem.css("-webkit-animation-iteration-count") || $elem.css("-moz-animation-iteration-count") || $elem.css("-o-animation-iteration-count") || $elem.css("-ms-animation-iteration-count") || "1";
            for (duration = duration.split(", "), delay = delay.split(", "), iterationCount = iterationCount.split(", "), i = 0, len = duration.length, max = Number.NEGATIVE_INFINITY; i < len; i++) num = parseFloat(duration[i]) * parseInt(iterationCount[i], 10) + parseFloat(delay[i]), num > max && (max = num);
            return max
        }

        function getScrollbarWidth() {
            if ($(document.body).height() <= $(window).height()) return 0;
            var widthNoScroll, widthWithScroll, outer = document.createElement("div"),
                inner = document.createElement("div");
            return outer.style.visibility = "hidden", outer.style.width = "100px", document.body.appendChild(outer), widthNoScroll = outer.offsetWidth, outer.style.overflow = "scroll", inner.style.width = "100%", outer.appendChild(inner), widthWithScroll = inner.offsetWidth, outer.parentNode.removeChild(outer), widthNoScroll - widthWithScroll
        }

        function lockScreen() {
            if (!IS_IOS) {
                var paddingRight, $body, $html = $("html"),
                    lockedClass = namespacify("is-locked");
                $html.hasClass(lockedClass) || ($body = $(document.body), paddingRight = parseInt($body.css("padding-right"), 10) + getScrollbarWidth(), $body.css("padding-right", paddingRight + "px"), $html.addClass(lockedClass))
            }
        }

        function unlockScreen() {
            if (!IS_IOS) {
                var paddingRight, $body, $html = $("html"),
                    lockedClass = namespacify("is-locked");
                $html.hasClass(lockedClass) && ($body = $(document.body), paddingRight = parseInt($body.css("padding-right"), 10) - getScrollbarWidth(), $body.css("padding-right", paddingRight + "px"), $html.removeClass(lockedClass))
            }
        }

        function setState(instance, state, isSilent, reason) {
            var newState = namespacify("is", state),
                allStates = [namespacify("is", STATES.CLOSING), namespacify("is", STATES.OPENING), namespacify("is", STATES.CLOSED), namespacify("is", STATES.OPENED)].join(" ");
            instance.$bg.removeClass(allStates).addClass(newState), instance.$overlay.removeClass(allStates).addClass(newState), instance.$wrapper.removeClass(allStates).addClass(newState), instance.$modal.removeClass(allStates).addClass(newState), instance.state = state, !isSilent && instance.$modal.trigger({
                type: state,
                reason: reason
            }, [{
                reason: reason
            }])
        }

        function syncWithAnimation(doBeforeAnimation, doAfterAnimation, instance) {
            var runningAnimationsCount = 0,
                handleAnimationStart = function(e) {
                    e.target === this && runningAnimationsCount++
                },
                handleAnimationEnd = function(e) {
                    e.target === this && 0 === --runningAnimationsCount && ($.each(["$bg", "$overlay", "$wrapper", "$modal"], function(index, elemName) {
                        instance[elemName].off(ANIMATIONSTART_EVENTS + " " + ANIMATIONEND_EVENTS)
                    }), doAfterAnimation())
                };
            $.each(["$bg", "$overlay", "$wrapper", "$modal"], function(index, elemName) {
                instance[elemName].on(ANIMATIONSTART_EVENTS, handleAnimationStart).on(ANIMATIONEND_EVENTS, handleAnimationEnd)
            }), doBeforeAnimation(), 0 === getAnimationDuration(instance.$bg) && 0 === getAnimationDuration(instance.$overlay) && 0 === getAnimationDuration(instance.$wrapper) && 0 === getAnimationDuration(instance.$modal) && ($.each(["$bg", "$overlay", "$wrapper", "$modal"], function(index, elemName) {
                instance[elemName].off(ANIMATIONSTART_EVENTS + " " + ANIMATIONEND_EVENTS)
            }), doAfterAnimation())
        }

        function halt(instance) {
            instance.state !== STATES.CLOSED && ($.each(["$bg", "$overlay", "$wrapper", "$modal"], function(index, elemName) {
                instance[elemName].off(ANIMATIONSTART_EVENTS + " " + ANIMATIONEND_EVENTS)
            }), instance.$bg.removeClass(instance.settings.modifier), instance.$overlay.removeClass(instance.settings.modifier).hide(), instance.$wrapper.hide(), unlockScreen(), setState(instance, STATES.CLOSED, !0))
        }

        function parseOptions(str) {
            var arr, len, val, i, obj = {};
            for (str = str.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ","), arr = str.split(","), i = 0, len = arr.length; i < len; i++) arr[i] = arr[i].split(":"), val = arr[i][1], ("string" == typeof val || val instanceof String) && (val = "true" === val || "false" !== val && val), ("string" == typeof val || val instanceof String) && (val = isNaN(val) ? val : +val), obj[arr[i][0]] = val;
            return obj
        }

        function namespacify() {
            for (var result = NAMESPACE, i = 0; i < arguments.length; ++i) result += "-" + arguments[i];
            return result
        }

        function handleHashChangeEvent() {
            var instance, $elem, id = location.hash.replace("#", "");
            if (id) {
                try {
                    $elem = $('[data-remodal-id="' + id + '"]')
                } catch (err) {}
                $elem && $elem.length && (instance = $[PLUGIN_NAME].lookup[$elem.data(PLUGIN_NAME)], instance && instance.settings.hashTracking && instance.open())
            } else current && current.state === STATES.OPENED && current.settings.hashTracking && current.close()
        }

        function Remodal($modal, options) {
            var $body = $(document.body),
                $appendTo = $body,
                remodal = this;
            remodal.settings = $.extend({}, DEFAULTS, options), remodal.index = $[PLUGIN_NAME].lookup.push(remodal) - 1, remodal.state = STATES.CLOSED, remodal.$overlay = $("." + namespacify("overlay")), null !== remodal.settings.appendTo && remodal.settings.appendTo.length && ($appendTo = $(remodal.settings.appendTo)), remodal.$overlay.length || (remodal.$overlay = $("<div>").addClass(namespacify("overlay") + " " + namespacify("is", STATES.CLOSED)).hide(), $appendTo.append(remodal.$overlay)), remodal.$bg = $("." + namespacify("bg")).addClass(namespacify("is", STATES.CLOSED)), remodal.$modal = $modal.addClass(NAMESPACE + " " + namespacify("is-initialized") + " " + remodal.settings.modifier + " " + namespacify("is", STATES.CLOSED)).attr("tabindex", "-1"), remodal.$wrapper = $("<div>").addClass(namespacify("wrapper") + " " + remodal.settings.modifier + " " + namespacify("is", STATES.CLOSED)).hide().append(remodal.$modal), $appendTo.append(remodal.$wrapper), remodal.$wrapper.on("click." + NAMESPACE, '[data-remodal-action="close"]', function(e) {
                e.preventDefault(), remodal.close()
            }), remodal.$wrapper.on("click." + NAMESPACE, '[data-remodal-action="cancel"]', function(e) {
                e.preventDefault(), remodal.$modal.trigger(STATE_CHANGE_REASONS.CANCELLATION), remodal.settings.closeOnCancel && remodal.close(STATE_CHANGE_REASONS.CANCELLATION)
            }), remodal.$wrapper.on("click." + NAMESPACE, '[data-remodal-action="confirm"]', function(e) {
                e.preventDefault(), remodal.$modal.trigger(STATE_CHANGE_REASONS.CONFIRMATION), remodal.settings.closeOnConfirm && remodal.close(STATE_CHANGE_REASONS.CONFIRMATION)
            }), remodal.$wrapper.on("click." + NAMESPACE, function(e) {
                var $target = $(e.target);
                $target.hasClass(namespacify("wrapper")) && remodal.settings.closeOnOutsideClick && remodal.close()
            })
        }
        var current, scrollTop, PLUGIN_NAME = "remodal",
            NAMESPACE = global.REMODAL_GLOBALS && global.REMODAL_GLOBALS.NAMESPACE || PLUGIN_NAME,
            ANIMATIONSTART_EVENTS = $.map(["animationstart", "webkitAnimationStart", "MSAnimationStart", "oAnimationStart"], function(eventName) {
                return eventName + "." + NAMESPACE
            }).join(" "),
            ANIMATIONEND_EVENTS = $.map(["animationend", "webkitAnimationEnd", "MSAnimationEnd", "oAnimationEnd"], function(eventName) {
                return eventName + "." + NAMESPACE
            }).join(" "),
            DEFAULTS = $.extend({
                hashTracking: !0,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                closeOnEscape: !0,
                closeOnOutsideClick: !0,
                modifier: "",
                appendTo: null
            }, global.REMODAL_GLOBALS && global.REMODAL_GLOBALS.DEFAULTS),
            STATES = {
                CLOSING: "closing",
                CLOSED: "closed",
                OPENING: "opening",
                OPENED: "opened"
            },
            STATE_CHANGE_REASONS = {
                CONFIRMATION: "confirmation",
                CANCELLATION: "cancellation"
            },
            IS_ANIMATION = function() {
                var style = document.createElement("div").style;
                return void 0 !== style.animationName || void 0 !== style.WebkitAnimationName || void 0 !== style.MozAnimationName || void 0 !== style.msAnimationName || void 0 !== style.OAnimationName
            }(),
            IS_IOS = /iPad|iPhone|iPod/.test(navigator.platform);
        Remodal.prototype.open = function() {
            var id, remodal = this;
            remodal.state !== STATES.OPENING && remodal.state !== STATES.CLOSING && (id = remodal.$modal.attr("data-remodal-id"), id && remodal.settings.hashTracking && (scrollTop = $(window).scrollTop(), location.hash = id), current && current !== remodal && halt(current), current = remodal, lockScreen(), remodal.$bg.addClass(remodal.settings.modifier), remodal.$overlay.addClass(remodal.settings.modifier).show(), remodal.$wrapper.show().scrollTop(0), remodal.$modal.focus(), syncWithAnimation(function() {
                setState(remodal, STATES.OPENING)
            }, function() {
                setState(remodal, STATES.OPENED)
            }, remodal))
        }, Remodal.prototype.close = function(reason) {
            var remodal = this;
            remodal.state !== STATES.OPENING && remodal.state !== STATES.CLOSING && (remodal.settings.hashTracking && remodal.$modal.attr("data-remodal-id") === location.hash.substr(1) && (location.hash = "", $(window).scrollTop(scrollTop)), syncWithAnimation(function() {
                setState(remodal, STATES.CLOSING, !1, reason)
            }, function() {
                remodal.$bg.removeClass(remodal.settings.modifier), remodal.$overlay.removeClass(remodal.settings.modifier).hide(), remodal.$wrapper.hide(), unlockScreen(), setState(remodal, STATES.CLOSED, !1, reason)
            }, remodal))
        }, Remodal.prototype.getState = function() {
            return this.state
        }, Remodal.prototype.destroy = function() {
            var instanceCount, lookup = $[PLUGIN_NAME].lookup;
            halt(this), this.$wrapper.remove(), delete lookup[this.index], instanceCount = $.grep(lookup, function(instance) {
                return !!instance
            }).length, 0 === instanceCount && (this.$overlay.remove(), this.$bg.removeClass(namespacify("is", STATES.CLOSING) + " " + namespacify("is", STATES.OPENING) + " " + namespacify("is", STATES.CLOSED) + " " + namespacify("is", STATES.OPENED)))
        }, $[PLUGIN_NAME] = {
            lookup: []
        }, $.fn[PLUGIN_NAME] = function(opts) {
            var instance, $elem;
            return this.each(function(index, elem) {
                $elem = $(elem), null == $elem.data(PLUGIN_NAME) ? (instance = new Remodal($elem, opts), $elem.data(PLUGIN_NAME, instance.index), instance.settings.hashTracking && $elem.attr("data-remodal-id") === location.hash.substr(1) && instance.open()) : instance = $[PLUGIN_NAME].lookup[$elem.data(PLUGIN_NAME)]
            }), instance
        }, $(document).ready(function() {
            $(document).on("click", "[data-remodal-target]", function(e) {
                e.preventDefault();
                var elem = e.currentTarget,
                    id = elem.getAttribute("data-remodal-target"),
                    $target = $('[data-remodal-id="' + id + '"]');
                $[PLUGIN_NAME].lookup[$target.data(PLUGIN_NAME)].open()
            }), $(document).find("." + NAMESPACE).each(function(i, container) {
                var $container = $(container),
                    options = $container.data("remodal-options");
                options ? ("string" == typeof options || options instanceof String) && (options = parseOptions(options)) : options = {}, $container[PLUGIN_NAME](options)
            }), $(document).on("keydown." + NAMESPACE, function(e) {
                current && current.settings.closeOnEscape && current.state === STATES.OPENED && 27 === e.keyCode && current.close()
            }), $(window).on("hashchange." + NAMESPACE, handleHashChangeEvent)
        })
    })
}, function(module, exports) {
    module.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}, function(module, exports) {
    module.exports = function(module) {
        return module.webpackPolyfill || (module.deprecate = function() {}, module.paths = [], module.children = [], module.webpackPolyfill = 1), module
    }
}, function(module, exports) {}]);
//# sourceMappingURL=main.js.map
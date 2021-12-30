/*
 RequireJS 2.1.16 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
let requirejs; let require; let define;
(function (ba) {
    function G(b) { return K.call(b) === '[object Function]'; } function H(b) { return K.call(b) === '[object Array]'; } function v(b, c) { if (b) { let d; for (d = 0; d < b.length && (!b[d] || !c(b[d], d, b)); d += 1); } } function T(b, c) { if (b) { let d; for (d = b.length - 1; d > -1 && (!b[d] || !c(b[d], d, b)); d -= 1); } } function t(b, c) { return fa.call(b, c); } function m(b, c) { return t(b, c) && b[c]; } function B(b, c) { for (const d in b) if (t(b, d) && c(b[d], d)) break; } function U(b, c, d, e) {
        c && B(c, (c, g) => {
            if (d || !t(b, g)) {
                e && typeof c === 'object' && c && !H(c) && !G(c) && !(c instanceof
RegExp) ? (b[g] || (b[g] = {}), U(b[g], c, d, e)) : b[g] = c;
            }
        }); return b; 
    } function u(b, c) { return function () { return c.apply(b, arguments); }; } function ca(b) { throw b; } function da(b) { if (!b) return b; let c = ba; v(b.split('.'), b => { c = c[b]; }); return c; } function C(b, c, d, e) { c = Error(`${c}\nhttp://requirejs.org/docs/errors.html#${b}`); c.requireType = b; c.requireModules = e; d && (c.originalError = d); return c; } function ga(b) {
        function c(a, k, b) {
            let f; let l; let c; let d; let e; let g; let i; let p; var k = k && k.split('/'); const h = j.map; const n = h && h['*']; if (a) {
                a = a.split('/'); l = a.length - 1; j.nodeIdCompat &&
Q.test(a[l]) && (a[l] = a[l].replace(Q, '')); a[0].charAt(0) === '.' && k && (l = k.slice(0, k.length - 1), a = l.concat(a)); l = a; for (c = 0; c < l.length; c++) if (d = l[c], d === '.')l.splice(c, 1), c -= 1; else if (d === '..' && !(c === 0 || c == 1 && l[2] === '..' || l[c - 1] === '..') && c > 0)l.splice(c - 1, 2), c -= 2; a = a.join('/');
            } if (b && h && (k || n)) {
                l = a.split('/'); c = l.length; a:for (;c > 0; c -= 1) { e = l.slice(0, c).join('/'); if (k) for (d = k.length; d > 0; d -= 1) if (b = m(h, k.slice(0, d).join('/'))) if (b = m(b, e)) { f = b; g = c; break a; }!i && (n && m(n, e)) && (i = m(n, e), p = c); }!f && i && (f = i, g = p); f && (l.splice(0,
                    g, f), a = l.join('/'));
            } return (f = m(j.pkgs, a)) ? f : a; 
        } function d(a) { z && v(document.getElementsByTagName('script'), k => { if (k.getAttribute('data-requiremodule') === a && k.getAttribute('data-requirecontext') === i.contextName) return k.parentNode.removeChild(k), !0; }); } function e(a) { const k = m(j.paths, a); if (k && H(k) && k.length > 1) return k.shift(), i.require.undef(a), i.makeRequire(null, { skipMap: !0 })([a]), !0; } function n(a) { let k; const c = a ? a.indexOf('!') : -1; c > -1 && (k = a.substring(0, c), a = a.substring(c + 1, a.length)); return [k, a]; } function p(a,
            k, b, f) { let l; let d; let e = null; const g = k ? k.name : null; const j = a; let p = !0; let h = ''; a || (p = !1, a = `_@r${K += 1}`); a = n(a); e = a[0]; a = a[1]; e && (e = c(e, g, f), d = m(r, e)); a && (e ? h = d && d.normalize ? d.normalize(a, a => c(a, g, f)) : a.indexOf('!') === -1 ? c(a, g, f) : a : (h = c(a, g, f), a = n(h), e = a[0], h = a[1], b = !0, l = i.nameToUrl(h))); b = e && !d && !b ? `_unnormalized${O += 1}` : ''; return { prefix: e, name: h, parentMap: k, unnormalized: !!b, url: l, originalName: j, isDefine: p, id: (e ? `${e}!${h}` : h) + b }; } function s(a) { const k = a.id; let b = m(h, k); b || (b = h[k] = new i.Module(a)); return b; } function q(a,
            k, b) { const f = a.id; let c = m(h, f); if (t(r, f) && (!c || c.defineEmitComplete))k === 'defined' && b(r[f]); else if (c = s(a), c.error && k === 'error')b(c.error); else c.on(k, b); } function w(a, b) { const c = a.requireModules; let f = !1; if (b)b(a); else if (v(c, b => { if (b = m(h, b))b.error = a, b.events.error && (f = !0, b.emit('error', a)); }), !f)g.onError(a); } function x() { R.length && (ha.apply(A, [A.length, 0].concat(R)), R = []); } function y(a) { delete h[a]; delete V[a]; } function F(a, b, c) {
            const f = a.map.id; a.error ? a.emit('error', a.error) : (b[f] = !0, v(a.depMaps, (f,
                d) => { const e = f.id; const g = m(h, e); g && (!a.depMatched[d] && !c[e]) && (m(b, e) ? (a.defineDep(d, r[e]), a.check()) : F(g, b, c)); }), c[f] = !0);
        } function D() {
            let a; let b; const c = (a = 1E3 * j.waitSeconds) && i.startTime + a < (new Date()).getTime(); const f = []; const l = []; let g = !1; let h = !0; if (!W) {
                W = !0; B(V, a => { const i = a.map; const j = i.id; if (a.enabled && (i.isDefine || l.push(a), !a.error)) if (!a.inited && c)e(j) ? g = b = !0 : (f.push(j), d(j)); else if (!a.inited && (a.fetched && i.isDefine) && (g = !0, !i.prefix)) return h = !1; }); if (c && f.length) {
                    return a = C('timeout', `Load timeout for modules: ${f}`, null,
                        f), a.contextName = i.contextName, w(a); 
                } h && v(l, a => { F(a, {}, {}); }); if ((!c || b) && g) if ((z || ea) && !X)X = setTimeout(() => { X = 0; D(); }, 50); W = !1;
            }
        } function E(a) { t(r, a[0]) || s(p(a[0], null, !0)).init(a[1], a[2]); } function I(a) { var a = a.currentTarget || a.srcElement; let b = i.onScriptLoad; a.detachEvent && !Y ? a.detachEvent('onreadystatechange', b) : a.removeEventListener('load', b, !1); b = i.onScriptError; (!a.detachEvent || Y) && a.removeEventListener('error', b, !1); return { node: a, id: a && a.getAttribute('data-requiremodule') }; } function J() {
            let a;
            for (x(); A.length;) { a = A.shift(); if (a[0] === null) return w(C('mismatch', `Mismatched anonymous define() module: ${a[a.length - 1]}`)); E(a); } 
        } let W; let Z; let i; let L; let X; var j = { waitSeconds: 7, baseUrl: './', paths: {}, bundles: {}, pkgs: {}, shim: {}, config: {} }; var h = {}; var V = {}; const $ = {}; var A = []; var r = {}; const S = {}; const aa = {}; var K = 1; var O = 1; L = { require(a) { return a.require ? a.require : a.require = i.makeRequire(a.map); },
            exports(a) { a.usingExports = !0; if (a.map.isDefine) return a.exports ? r[a.map.id] = a.exports : a.exports = r[a.map.id] = {}; },
            module(a) {
                return a.module ?
                    a.module : a.module = { id: a.map.id, uri: a.map.url, config() { return m(j.config, a.map.id) || {}; }, exports: a.exports || (a.exports = {}) };
            } }; Z = function (a) { this.events = m($, a.id) || {}; this.map = a; this.shim = m(j.shim, a.id); this.depExports = []; this.depMaps = []; this.depMatched = []; this.pluginMaps = {}; this.depCount = 0; }; Z.prototype = { init(a, b, c, f) {
            f = f || {}; if (!this.inited) {
                this.factory = b; if (c) this.on('error', c); else this.events.error && (c = u(this, function (a) { this.emit('error', a); })); this.depMaps = a && a.slice(0); this.errback =
c; this.inited = !0; this.ignore = f.ignore; f.enabled || this.enabled ? this.enable() : this.check();
            }
        },
        defineDep(a, b) { this.depMatched[a] || (this.depMatched[a] = !0, this.depCount -= 1, this.depExports[a] = b); },
        fetch() { if (!this.fetched) { this.fetched = !0; i.startTime = (new Date()).getTime(); const a = this.map; if (this.shim)i.makeRequire(this.map, { enableBuildCallback: !0 })(this.shim.deps || [], u(this, function () { return a.prefix ? this.callPlugin() : this.load(); })); else return a.prefix ? this.callPlugin() : this.load(); } },
        load() {
            const a =
this.map.url; S[a] || (S[a] = !0, i.load(this.map.id, a)); 
        },
        check() {
            if (this.enabled && !this.enabling) {
                let a; let b; const c = this.map.id; b = this.depExports; let f = this.exports; const l = this.factory; if (this.inited) {
                    if (this.error) this.emit('error', this.error); else if (!this.defining) {
                        this.defining = !0; if (this.depCount < 1 && !this.defined) {
                            if (G(l)) {
                                if (this.events.error && this.map.isDefine || g.onError !== ca) try { f = i.execCb(c, l, b, f); } catch (d) { a = d; } else f = i.execCb(c, l, b, f); this.map.isDefine && void 0 === f && ((b = this.module) ? f = b.exports : this.usingExports &&
(f = this.exports)); if (a) return a.requireMap = this.map, a.requireModules = this.map.isDefine ? [this.map.id] : null, a.requireType = this.map.isDefine ? 'define' : 'require', w(this.error = a);
                            } else f = l; this.exports = f; if (this.map.isDefine && !this.ignore && (r[c] = f, g.onResourceLoad))g.onResourceLoad(i, this.map, this.depMaps); y(c); this.defined = !0;
                        } this.defining = !1; this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit('defined', this.exports), this.defineEmitComplete = !0); 
                    } 
                } else this.fetch();
            }
        },
        callPlugin() {
            const a =
this.map; const b = a.id; const d = p(a.prefix); this.depMaps.push(d); q(d, 'defined', u(this, function (f) {
                let l; let d; d = m(aa, this.map.id); let e = this.map.name; const P = this.map.parentMap ? this.map.parentMap.name : null; const n = i.makeRequire(a.parentMap, { enableBuildCallback: !0 }); if (this.map.unnormalized) {
                    if (f.normalize && (e = f.normalize(e, a => c(a, P, !0)) || ''), f = p(`${a.prefix}!${e}`, this.map.parentMap), q(f, 'defined', u(this, function (a) { this.init([], () => a, null, { enabled: !0, ignore: !0 }); })), d = m(h, f.id)) {
                        this.depMaps.push(f);
                        if (this.events.error)d.on('error', u(this, function (a) { this.emit('error', a); })); d.enable(); 
                    }
                } else {
                    d ? (this.map.url = i.nameToUrl(d), this.load()) : (l = u(this, function (a) { this.init([], () => a, null, { enabled: !0 }); }), l.error = u(this, function (a) { this.inited = !0; this.error = a; a.requireModules = [b]; B(h, a => { a.map.id.indexOf(`${b}_unnormalized`) === 0 && y(a.map.id); }); w(a); }), l.fromText = u(this, function (f, c) {
                        const d = a.name; const e = p(d); const P = M; c && (f = c); P && (M = !1); s(e); t(j.config, b) && (j.config[d] = j.config[b]); try { g.exec(f); } catch (h) {
                            return w(C('fromtexteval',
                                `fromText eval for ${b} failed: ${h}`, h, [b])); 
                        }P && (M = !0); this.depMaps.push(e); i.completeLoad(d); n([d], l); 
                    }), f.load(a.name, n, l, j)); 
                }
            })); i.enable(d, this); this.pluginMaps[d.id] = d;
        },
        enable() {
            V[this.map.id] = this; this.enabling = this.enabled = !0; v(this.depMaps, u(this, function (a, b) {
                let c; let f; if (typeof a === 'string') {
                    a = p(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap); this.depMaps[b] = a; if (c = m(L, a.id)) { this.depExports[b] = c(this); return; } this.depCount += 1; q(a, 'defined', u(this, function (a) {
                        this.defineDep(b,
                            a); this.check(); 
                    })); this.errback ? q(a, 'error', u(this, this.errback)) : this.events.error && q(a, 'error', u(this, function (a) { this.emit('error', a); })); 
                }c = a.id; f = h[c]; !t(L, c) && (f && !f.enabled) && i.enable(a, this);
            })); B(this.pluginMaps, u(this, function (a) { const b = m(h, a.id); b && !b.enabled && i.enable(a, this); })); this.enabling = !1; this.check(); 
        },
        on(a, b) { let c = this.events[a]; c || (c = this.events[a] = []); c.push(b); },
        emit(a, b) { v(this.events[a], a => { a(b); }); a === 'error' && delete this.events[a]; } }; i = { config: j,
            contextName: b,
            registry: h,
            defined: r,
            urlFetched: S,
            defQueue: A,
            Module: Z,
            makeModuleMap: p,
            nextTick: g.nextTick,
            onError: w,
            configure(a) {
                a.baseUrl && a.baseUrl.charAt(a.baseUrl.length - 1) !== '/' && (a.baseUrl += '/'); const b = j.shim; const c = { paths: !0, bundles: !0, config: !0, map: !0 }; B(a, (a, b) => { c[b] ? (j[b] || (j[b] = {}), U(j[b], a, !0, !0)) : j[b] = a; }); a.bundles && B(a.bundles, (a, b) => { v(a, a => { a !== b && (aa[a] = b); }); }); a.shim && (B(a.shim, (a, c) => {
                    H(a) && (a = { deps: a }); if ((a.exports || a.init) && !a.exportsFn)a.exportsFn = i.makeShimExports(a);
                    b[c] = a; 
                }), j.shim = b); a.packages && v(a.packages, a => { let b; var a = typeof a === 'string' ? { name: a } : a; b = a.name; a.location && (j.paths[b] = a.location); j.pkgs[b] = `${a.name}/${(a.main || 'main').replace(ia, '').replace(Q, '')}`; }); B(h, (a, b) => { !a.inited && !a.map.unnormalized && (a.map = p(b)); }); if (a.deps || a.callback)i.require(a.deps || [], a.callback); 
            },
            makeShimExports(a) { return function () { let b; a.init && (b = a.init.apply(ba, arguments)); return b || a.exports && da(a.exports); }; },
            makeRequire(a, e) {
                function j(c, d, m) {
                    let n;
                    let q; e.enableBuildCallback && (d && G(d)) && (d.__requireJsBuild = !0); if (typeof c === 'string') { if (G(d)) return w(C('requireargs', 'Invalid require call'), m); if (a && t(L, c)) return L[c](h[a.id]); if (g.get) return g.get(i, c, a, j); n = p(c, a, !1, !0); n = n.id; return !t(r, n) ? w(C('notloaded', `Module name "${n}" has not been loaded yet for context: ${b}${a ? '' : '. Use require([])'}`)) : r[n]; }J(); i.nextTick(() => { J(); q = s(p(null, a)); q.skipMap = e.skipMap; q.init(c, d, m, { enabled: !0 }); D(); }); return j;
                }e = e || {}; U(j, { isBrowser: z,
                    toUrl(b) {
                        let d;
                        const e = b.lastIndexOf('.'); const k = b.split('/')[0]; if (e !== -1 && (!(k === '.' || k === '..') || e > 1))d = b.substring(e, b.length), b = b.substring(0, e); return i.nameToUrl(c(b, a && a.id, !0), d, !0); 
                    },
                    defined(b) { return t(r, p(b, a, !1, !0).id); },
                    specified(b) { b = p(b, a, !1, !0).id; return t(r, b) || t(h, b); } }); a || (j.undef = function (b) { x(); const c = p(b, a, !0); const e = m(h, b); d(b); delete r[b]; delete S[c.url]; delete $[b]; T(A, (a, c) => { a[0] === b && A.splice(c, 1); }); e && (e.events.defined && ($[b] = e.events), y(b)); }); return j;
            },
            enable(a) {
                m(h, a.id) &&
s(a).enable();
            },
            completeLoad(a) { let b; let c; const d = m(j.shim, a) || {}; const g = d.exports; for (x(); A.length;) { c = A.shift(); if (c[0] === null) { c[0] = a; if (b) break; b = !0; } else c[0] === a && (b = !0); E(c); }c = m(h, a); if (!b && !t(r, a) && c && !c.inited) { if (j.enforceDefine && (!g || !da(g))) return e(a) ? void 0 : w(C('nodefine', `No define call for ${a}`, null, [a])); E([a, d.deps || [], d.exportsFn]); }D(); },
            nameToUrl(a, b, c) {
                let d; let e; let h; (d = m(j.pkgs, a)) && (a = d); if (d = m(aa, a)) return i.nameToUrl(d, b, c); if (g.jsExtRegExp.test(a))d = a + (b || ''); else {
                    d = j.paths;
                    a = a.split('/'); for (e = a.length; e > 0; e -= 1) if (h = a.slice(0, e).join('/'), h = m(d, h)) { H(h) && (h = h[0]); a.splice(0, e, h); break; }d = a.join('/'); d += b || (/^data\:|\?/.test(d) || c ? '' : '.js'); d = (d.charAt(0) === '/' || d.match(/^[\w\+\.\-]+:/) ? '' : j.baseUrl) + d; 
                } return j.urlArgs ? d + ((d.indexOf('?') === -1 ? '?' : '&') + j.urlArgs) : d; 
            },
            load(a, b) { g.load(i, a, b); },
            execCb(a, b, c, d) { return b.apply(d, c); },
            onScriptLoad(a) { if (a.type === 'load' || ja.test((a.currentTarget || a.srcElement).readyState))N = null, a = I(a), i.completeLoad(a.id); },
            onScriptError(a) { const b = I(a); if (!e(b.id)) return w(C('scripterror', `Script error for: ${b.id}`, a, [b.id])); } }; i.require = i.makeRequire(); return i;
    } let g; let x; let y; let D; let I; let E; let N; let J; let s; let O; const ka = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg; const la = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g; var Q = /\.js$/; var ia = /^\.\//; x = Object.prototype; var K = x.toString; var fa = x.hasOwnProperty; var ha = Array.prototype.splice; var z = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document); var ea = !z && typeof importScripts !== 'undefined'; var ja =
z && navigator.platform === 'PLAYSTATION 3' ? /^complete$/ : /^(complete|loaded)$/; var Y = typeof opera !== 'undefined' && opera.toString() === '[object Opera]'; const F = {}; let q = {}; var R = []; var M = !1; if (typeof define === 'undefined') {
        if (typeof requirejs !== 'undefined') { if (G(requirejs)) return; q = requirejs; requirejs = void 0; } typeof require !== 'undefined' && !G(require) && (q = require, require = void 0); g = requirejs = function (b, c, d, e) {
            let n; let p = '_'; !H(b) && typeof b !== 'string' && (n = b, H(c) ? (b = c, c = d, d = e) : b = []); n && n.context && (p = n.context); (e = m(F, p)) || (e = F[p] = g.s.newContext(p));
            n && e.configure(n); return e.require(b, c, d); 
        }; g.config = function (b) { return g(b); }; g.nextTick = typeof setTimeout !== 'undefined' ? function (b) { setTimeout(b, 4); } : function (b) { b(); }; require || (require = g); g.version = '2.1.16'; g.jsExtRegExp = /^\/|:|\?|\.js$/; g.isBrowser = z; x = g.s = { contexts: F, newContext: ga }; g({}); v(['toUrl', 'undef', 'defined', 'specified'], b => { g[b] = function () { const c = F._; return c.require[b].apply(c, arguments); }; }); if (z && (y = x.head = document.getElementsByTagName('head')[0], D = document.getElementsByTagName('base')[0])) {
            y =
x.head = D.parentNode; 
        }g.onError = ca; g.createNode = function (b) { const c = b.xhtml ? document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') : document.createElement('script'); c.type = b.scriptType || 'text/javascript'; c.charset = 'utf-8'; c.async = !0; return c; }; g.load = function (b, c, d) {
            let e = b && b.config || {}; if (z) {
                return e = g.createNode(e, c, d), e.setAttribute('data-requirecontext', b.contextName), e.setAttribute('data-requiremodule', c), e.attachEvent && !(e.attachEvent.toString && e.attachEvent.toString().indexOf('[native code') < 0) &&
!Y ? (M = !0, e.attachEvent('onreadystatechange', b.onScriptLoad)) : (e.addEventListener('load', b.onScriptLoad, !1), e.addEventListener('error', b.onScriptError, !1)), e.src = d, J = e, D ? y.insertBefore(e, D) : y.appendChild(e), J = null, e;
            } if (ea) try { importScripts(d), b.completeLoad(c); } catch (m) { b.onError(C('importscripts', `importScripts failed for ${c} at ${d}`, m, [c])); }
        }; z && !q.skipDataMain && T(document.getElementsByTagName('script'), b => {
            y || (y = b.parentNode); if (I = b.getAttribute('data-main')) {
                return s = I, q.baseUrl || (E = s.split('/'),
                s = E.pop(), O = E.length ? `${E.join('/')}/` : './', q.baseUrl = O), s = s.replace(Q, ''), g.jsExtRegExp.test(s) && (s = I), q.deps = q.deps ? q.deps.concat(s) : [s], !0; 
            }
        }); define = function (b, c, d) {
            let e; let g; typeof b !== 'string' && (d = c, c = b, b = null); H(c) || (d = c, c = null); !c && G(d) && (c = [], d.length && (d.toString().replace(ka, '').replace(la, (b, d) => { c.push(d); }), c = (d.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(c))); if (M) {
                if (!(e = J)) {
                    N && N.readyState === 'interactive' || T(document.getElementsByTagName('script'), b => {
                        if (b.readyState ===
'interactive') return N = b;
                    }), e = N; 
                }e && (b || (b = e.getAttribute('data-requiremodule')), g = F[e.getAttribute('data-requirecontext')]);
            }(g ? g.defQueue : R).push([b, c, d]); 
        }; define.amd = { jQuery: !0 }; g.exec = function (b) { return eval(b); }; g(q);
    } 
}(this));
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(require("@firebase/app"))
      : "function" == typeof define && define.amd
      ? define(["@firebase/app"], e)
      : e((t = t || self).firebase);
  })(this, function (sd) {
    "use strict";
    try {
      (function () {
        sd =
          sd && Object.prototype.hasOwnProperty.call(sd, "default")
            ? sd.default
            : sd;
        var r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        };
        function t(t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }
        var e,
          o,
          n,
          f = function () {
            return (f =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }).apply(this, arguments);
          };
        function p(t, s, u, a) {
          return new (u = u || Promise)(function (e, n) {
            function r(t) {
              try {
                o(a.next(t));
              } catch (t) {
                n(t);
              }
            }
            function i(t) {
              try {
                o(a.throw(t));
              } catch (t) {
                n(t);
              }
            }
            function o(t) {
              t.done
                ? e(t.value)
                : (function (e) {
                    return e instanceof u
                      ? e
                      : new u(function (t) {
                          t(e);
                        });
                  })(t.value).then(r, i);
            }
            o((a = a.apply(t, s || [])).next());
          });
        }
        function v(n, r) {
          var i,
            o,
            s,
            t,
            u = {
              label: 0,
              sent: function () {
                if (1 & s[0]) throw s[1];
                return s[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (t = { next: e(0), throw: e(1), return: e(2) }),
            "function" == typeof Symbol &&
              (t[Symbol.iterator] = function () {
                return this;
              }),
            t
          );
          function e(e) {
            return function (t) {
              return (function (e) {
                if (i) throw new TypeError("Generator is already executing.");
                for (; u; )
                  try {
                    if (
                      ((i = 1),
                      o &&
                        (s =
                          2 & e[0]
                            ? o.return
                            : e[0]
                            ? o.throw || ((s = o.return) && s.call(o), 0)
                            : o.next) &&
                        !(s = s.call(o, e[1])).done)
                    )
                      return s;
                    switch (((o = 0), s && (e = [2 & e[0], s.value]), e[0])) {
                      case 0:
                      case 1:
                        s = e;
                        break;
                      case 4:
                        return u.label++, { value: e[1], done: !1 };
                      case 5:
                        u.label++, (o = e[1]), (e = [0]);
                        continue;
                      case 7:
                        (e = u.ops.pop()), u.trys.pop();
                        continue;
                      default:
                        if (
                          !(s = 0 < (s = u.trys).length && s[s.length - 1]) &&
                          (6 === e[0] || 2 === e[0])
                        ) {
                          u = 0;
                          continue;
                        }
                        if (3 === e[0] && (!s || (e[1] > s[0] && e[1] < s[3]))) {
                          u.label = e[1];
                          break;
                        }
                        if (6 === e[0] && u.label < s[1]) {
                          (u.label = s[1]), (s = e);
                          break;
                        }
                        if (s && u.label < s[2]) {
                          (u.label = s[2]), u.ops.push(e);
                          break;
                        }
                        s[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    e = r.call(n, u);
                  } catch (t) {
                    (e = [6, t]), (o = 0);
                  } finally {
                    i = s = 0;
                  }
                if (5 & e[0]) throw e[1];
                return { value: e[0] ? e[1] : void 0, done: !0 };
              })([e, t]);
            };
          }
        }
        function s() {
          for (var t = 0, e = 0, n = arguments.length; e < n; e++)
            t += arguments[e].length;
          var r = Array(t),
            i = 0;
          for (e = 0; e < n; e++)
            for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++)
              r[i] = o[s];
          return r;
        }
        function u() {
          for (var t = 0, e = 0, n = arguments.length; e < n; e++)
            t += arguments[e].length;
          var r = Array(t),
            i = 0;
          for (e = 0; e < n; e++)
            for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++)
              r[i] = o[s];
          return r;
        }
        ((n = o = o || {})[(n.DEBUG = 0)] = "DEBUG"),
          (n[(n.VERBOSE = 1)] = "VERBOSE"),
          (n[(n.INFO = 2)] = "INFO"),
          (n[(n.WARN = 3)] = "WARN"),
          (n[(n.ERROR = 4)] = "ERROR"),
          (n[(n.SILENT = 5)] = "SILENT");
        o.DEBUG, o.VERBOSE, o.INFO, o.WARN, o.ERROR, o.SILENT;
        function i(t, e) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          if (!(e < t.logLevel)) {
            var i = new Date().toISOString(),
              o = h[e];
            if (!o)
              throw new Error(
                "Attempted to log a message with an invalid logType (value: " +
                  e +
                  ")"
              );
            console[o].apply(console, u(["[" + i + "]  " + t.name + ":"], n));
          }
        }
        var a = o.INFO,
          h =
            (((e = {})[o.DEBUG] = "log"),
            (e[o.VERBOSE] = "log"),
            (e[o.INFO] = "info"),
            (e[o.WARN] = "warn"),
            (e[o.ERROR] = "error"),
            e),
          c =
            (Object.defineProperty(l.prototype, "logLevel", {
              get: function () {
                return this._logLevel;
              },
              set: function (t) {
                if (!(t in o))
                  throw new TypeError("Invalid value assigned to `logLevel`");
                this._logLevel = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(l.prototype, "logHandler", {
              get: function () {
                return this._logHandler;
              },
              set: function (t) {
                if ("function" != typeof t)
                  throw new TypeError(
                    "Value assigned to `logHandler` must be a function"
                  );
                this._logHandler = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(l.prototype, "userLogHandler", {
              get: function () {
                return this._userLogHandler;
              },
              set: function (t) {
                this._userLogHandler = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (l.prototype.debug = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, u([this, o.DEBUG], t)),
                this._logHandler.apply(this, u([this, o.DEBUG], t));
            }),
            (l.prototype.log = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, u([this, o.VERBOSE], t)),
                this._logHandler.apply(this, u([this, o.VERBOSE], t));
            }),
            (l.prototype.info = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, u([this, o.INFO], t)),
                this._logHandler.apply(this, u([this, o.INFO], t));
            }),
            (l.prototype.warn = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, u([this, o.WARN], t)),
                this._logHandler.apply(this, u([this, o.WARN], t));
            }),
            (l.prototype.error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._userLogHandler &&
                this._userLogHandler.apply(this, u([this, o.ERROR], t)),
                this._logHandler.apply(this, u([this, o.ERROR], t));
            }),
            l);
        function l(t) {
          (this.name = t),
            (this._logLevel = a),
            (this._logHandler = i),
            (this._userLogHandler = null);
        }
        function d() {
          return "undefined" != typeof navigator &&
            "string" == typeof navigator.userAgent
            ? navigator.userAgent
            : "";
        }
        var y,
          m = (t(g, (y = Error)), g);
        function g(t, e) {
          var n = y.call(this, e) || this;
          return (
            (n.code = t),
            (n.name = "FirebaseError"),
            Object.setPrototypeOf(n, g.prototype),
            Error.captureStackTrace &&
              Error.captureStackTrace(n, w.prototype.create),
            n
          );
        }
        var w =
          ((b.prototype.create = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            for (
              var r = e[0] || {},
                i = this.service + "/" + t,
                o = this.errors[t],
                s = o
                  ? (function (t, r) {
                      return t.replace(E, function (t, e) {
                        var n = r[e];
                        return null != n ? n.toString() : "<" + e + "?>";
                      });
                    })(o, r)
                  : "Error",
                u = this.serviceName + ": " + s + " (" + i + ").",
                a = new m(i, u),
                h = 0,
                c = Object.keys(r);
              h < c.length;
              h++
            ) {
              var f = c[h];
              "_" !== f.slice(-1) &&
                (f in a &&
                  console.warn(
                    'Overwriting FirebaseError base field "' +
                      f +
                      '" can cause unexpected behavior.'
                  ),
                (a[f] = r[f]));
            }
            return a;
          }),
          b);
        function b(t, e, n) {
          (this.service = t), (this.serviceName = e), (this.errors = n);
        }
        var E = /\{\$([^}]+)}/g,
          I =
            ((T.prototype.setInstantiationMode = function (t) {
              return (this.instantiationMode = t), this;
            }),
            (T.prototype.setMultipleInstances = function (t) {
              return (this.multipleInstances = t), this;
            }),
            (T.prototype.setServiceProps = function (t) {
              return (this.serviceProps = t), this;
            }),
            T);
        function T(t, e, n) {
          (this.name = t),
            (this.instanceFactory = e),
            (this.type = n),
            (this.multipleInstances = !1),
            (this.serviceProps = {}),
            (this.instantiationMode = "LAZY");
        }
        var N,
          A =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : {},
          S = S || {},
          D = A;
        function k(t) {
          return "string" == typeof t;
        }
        function O(t) {
          return "number" == typeof t;
        }
        function R(t, e) {
          (t = t.split(".")), (e = e || D);
          for (var n = 0; n < t.length; n++)
            if (null == (e = e[t[n]])) return null;
          return e;
        }
        function C() {}
        function x(t) {
          var e = typeof t;
          if ("object" == e) {
            if (!t) return "null";
            if (t instanceof Array) return "array";
            if (t instanceof Object) return e;
            var n = Object.prototype.toString.call(t);
            if ("[object Window]" == n) return "object";
            if (
              "[object Array]" == n ||
              ("number" == typeof t.length &&
                void 0 !== t.splice &&
                void 0 !== t.propertyIsEnumerable &&
                !t.propertyIsEnumerable("splice"))
            )
              return "array";
            if (
              "[object Function]" == n ||
              (void 0 !== t.call &&
                void 0 !== t.propertyIsEnumerable &&
                !t.propertyIsEnumerable("call"))
            )
              return "function";
          } else if ("function" == e && void 0 === t.call) return "object";
          return e;
        }
        function L(t) {
          return "array" == x(t);
        }
        function P(t) {
          var e = x(t);
          return "array" == e || ("object" == e && "number" == typeof t.length);
        }
        function _(t) {
          var e = typeof t;
          return ("object" == e && null != t) || "function" == e;
        }
        var U = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
          M = 0;
        function q(t, e, n) {
          return t.call.apply(t.bind, arguments);
        }
        function F(e, n, t) {
          if (!e) throw Error();
          if (2 < arguments.length) {
            var r = Array.prototype.slice.call(arguments, 2);
            return function () {
              var t = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(t, r), e.apply(n, t);
            };
          }
          return function () {
            return e.apply(n, arguments);
          };
        }
        function V(t, e, n) {
          return (V =
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf("native code")
              ? q
              : F).apply(null, arguments);
        }
        function G(e, t) {
          var n = Array.prototype.slice.call(arguments, 1);
          return function () {
            var t = n.slice();
            return t.push.apply(t, arguments), e.apply(this, t);
          };
        }
        var j =
          Date.now ||
          function () {
            return +new Date();
          };
        function B(t, o) {
          function e() {}
          (e.prototype = o.prototype),
            (t.N = o.prototype),
            (t.prototype = new e()),
            ((t.prototype.constructor = t).yb = function (t, e, n) {
              for (
                var r = Array(arguments.length - 2), i = 2;
                i < arguments.length;
                i++
              )
                r[i - 2] = arguments[i];
              return o.prototype[e].apply(t, r);
            });
        }
        function H() {
          (this.j = this.j), (this.i = this.i);
        }
        (H.prototype.j = !1),
          (H.prototype.la = function () {
            if (!this.j && ((this.j = !0), this.G(), 0))
              this[U] || (this[U] = ++M);
          }),
          (H.prototype.G = function () {
            if (this.i) for (; this.i.length; ) this.i.shift()();
          });
        var z = Array.prototype.indexOf
            ? function (t, e) {
                return Array.prototype.indexOf.call(t, e, void 0);
              }
            : function (t, e) {
                if (k(t)) return k(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
                for (var n = 0; n < t.length; n++)
                  if (n in t && t[n] === e) return n;
                return -1;
              },
          W = Array.prototype.forEach
            ? function (t, e, n) {
                Array.prototype.forEach.call(t, e, n);
              }
            : function (t, e, n) {
                for (
                  var r = t.length, i = k(t) ? t.split("") : t, o = 0;
                  o < r;
                  o++
                )
                  o in i && e.call(n, i[o], o, t);
              };
        function Q(t) {
          return Array.prototype.concat.apply([], arguments);
        }
        function Y(t) {
          var e = t.length;
          if (0 < e) {
            for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
            return n;
          }
          return [];
        }
        function K(t) {
          return /^[\s\xa0]*$/.test(t);
        }
        var J,
          X = String.prototype.trim
            ? function (t) {
                return t.trim();
              }
            : function (t) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
              };
        function $(t, e) {
          return -1 != t.indexOf(e);
        }
        function Z(t, e) {
          return t < e ? -1 : e < t ? 1 : 0;
        }
        t: {
          var tt = D.navigator;
          if (tt) {
            var et = tt.userAgent;
            if (et) {
              J = et;
              break t;
            }
          }
          J = "";
        }
        function nt(t, e, n) {
          for (var r in t) e.call(n, t[r], r, t);
        }
        function rt(t) {
          var e,
            n = {};
          for (e in t) n[e] = t[e];
          return n;
        }
        var it = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
          " "
        );
        function ot(t, e) {
          for (var n, r, i = 1; i < arguments.length; i++) {
            for (n in (r = arguments[i])) t[n] = r[n];
            for (var o = 0; o < it.length; o++)
              (n = it[o]),
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
        }
        function st(t) {
          return st[" "](t), t;
        }
        st[" "] = C;
        var ut,
          at,
          ht = $(J, "Opera"),
          ct = $(J, "Trident") || $(J, "MSIE"),
          ft = $(J, "Edge"),
          lt = ft || ct,
          pt =
            $(J, "Gecko") &&
            !($(J.toLowerCase(), "webkit") && !$(J, "Edge")) &&
            !($(J, "Trident") || $(J, "MSIE")) &&
            !$(J, "Edge"),
          dt = $(J.toLowerCase(), "webkit") && !$(J, "Edge");
        function vt() {
          var t = D.document;
          return t ? t.documentMode : void 0;
        }
        t: {
          var yt = "",
            mt =
              ((at = J),
              pt
                ? /rv:([^\);]+)(\)|;)/.exec(at)
                : ft
                ? /Edge\/([\d\.]+)/.exec(at)
                : ct
                ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(at)
                : dt
                ? /WebKit\/(\S+)/.exec(at)
                : ht
                ? /(?:Version)[ \/]?(\S+)/.exec(at)
                : void 0);
          if ((mt && (yt = mt ? mt[1] : ""), ct)) {
            var gt = vt();
            if (null != gt && gt > parseFloat(yt)) {
              ut = String(gt);
              break t;
            }
          }
          ut = yt;
        }
        var wt,
          bt = {};
        function Et(u) {
          return (function (t, e) {
            var n = bt;
            return Object.prototype.hasOwnProperty.call(n, t)
              ? n[t]
              : (n[t] = e(t));
          })(u, function () {
            for (
              var t = 0,
                e = X(String(ut)).split("."),
                n = X(String(u)).split("."),
                r = Math.max(e.length, n.length),
                i = 0;
              0 == t && i < r;
              i++
            ) {
              var o = e[i] || "",
                s = n[i] || "";
              do {
                if (
                  ((o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""]),
                  (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""]),
                  0 == o[0].length && 0 == s[0].length)
                )
                  break;
                (t =
                  Z(
                    0 == o[1].length ? 0 : parseInt(o[1], 10),
                    0 == s[1].length ? 0 : parseInt(s[1], 10)
                  ) ||
                  Z(0 == o[2].length, 0 == s[2].length) ||
                  Z(o[2], s[2])),
                  (o = o[3]),
                  (s = s[3]);
              } while (0 == t);
            }
            return 0 <= t;
          });
        }
        var It = D.document;
        wt =
          It && ct
            ? vt() || ("CSS1Compat" == It.compatMode ? parseInt(ut, 10) : 5)
            : void 0;
        var Tt = !ct || 9 <= Number(wt),
          Nt = ct && !Et("9"),
          At = (function () {
            if (!D.addEventListener || !Object.defineProperty) return !1;
            var t = !1,
              e = Object.defineProperty({}, "passive", {
                get: function () {
                  t = !0;
                },
              });
            try {
              D.addEventListener("test", C, e),
                D.removeEventListener("test", C, e);
            } catch (t) {}
            return t;
          })();
        function St(t, e) {
          (this.type = t), (this.a = this.target = e), (this.Ia = !0);
        }
        function Dt(t, e) {
          if (
            (St.call(this, t ? t.type : ""),
            (this.relatedTarget = this.a = this.target = null),
            (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
            (this.key = ""),
            (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
            (this.pointerId = 0),
            (this.pointerType = ""),
            (this.c = null),
            t)
          ) {
            var n = (this.type = t.type),
              r =
                t.changedTouches && t.changedTouches.length
                  ? t.changedTouches[0]
                  : null;
            if (
              ((this.target = t.target || t.srcElement),
              (this.a = e),
              (e = t.relatedTarget))
            ) {
              if (pt) {
                t: {
                  try {
                    st(e.nodeName);
                    var i = !0;
                    break t;
                  } catch (t) {}
                  i = !1;
                }
                i || (e = null);
              }
            } else
              "mouseover" == n
                ? (e = t.fromElement)
                : "mouseout" == n && (e = t.toElement);
            (this.relatedTarget = e),
              r
                ? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
                  (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
                  (this.screenX = r.screenX || 0),
                  (this.screenY = r.screenY || 0))
                : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
                  (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                  (this.screenX = t.screenX || 0),
                  (this.screenY = t.screenY || 0)),
              (this.button = t.button),
              (this.key = t.key || ""),
              (this.ctrlKey = t.ctrlKey),
              (this.altKey = t.altKey),
              (this.shiftKey = t.shiftKey),
              (this.metaKey = t.metaKey),
              (this.pointerId = t.pointerId || 0),
              (this.pointerType = k(t.pointerType)
                ? t.pointerType
                : kt[t.pointerType] || ""),
              (this.c = t).defaultPrevented && this.b();
          }
        }
        (St.prototype.b = function () {
          this.Ia = !1;
        }),
          B(Dt, St);
        var kt = { 2: "touch", 3: "pen", 4: "mouse" };
        Dt.prototype.b = function () {
          Dt.N.b.call(this);
          var t = this.c;
          if (t.preventDefault) t.preventDefault();
          else if (((t.returnValue = !1), Nt))
            try {
              (t.ctrlKey || (112 <= t.keyCode && t.keyCode <= 123)) &&
                (t.keyCode = -1);
            } catch (t) {}
        };
        var Ot = "closure_listenable_" + ((1e6 * Math.random()) | 0),
          Rt = 0;
        function Ct(t, e, n, r, i) {
          (this.listener = t),
            (this.proxy = null),
            (this.src = e),
            (this.type = n),
            (this.capture = !!r),
            (this.da = i),
            (this.key = ++Rt),
            (this.X = this.Z = !1);
        }
        function xt(t) {
          (t.X = !0),
            (t.listener = null),
            (t.proxy = null),
            (t.src = null),
            (t.da = null);
        }
        function Lt(t) {
          (this.src = t), (this.a = {}), (this.b = 0);
        }
        function Pt(t, e) {
          var n = e.type;
          if (n in t.a) {
            var r,
              i = t.a[n],
              o = z(i, e);
            (r = 0 <= o) && Array.prototype.splice.call(i, o, 1),
              r && (xt(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
          }
        }
        function _t(t, e, n, r) {
          for (var i = 0; i < t.length; ++i) {
            var o = t[i];
            if (!o.X && o.listener == e && o.capture == !!n && o.da == r)
              return i;
          }
          return -1;
        }
        Lt.prototype.add = function (t, e, n, r, i) {
          var o = t.toString();
          (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
          var s = _t(t, e, r, i);
          return (
            -1 < s
              ? ((e = t[s]), n || (e.Z = !1))
              : (((e = new Ct(e, this.src, o, !!r, i)).Z = n), t.push(e)),
            e
          );
        };
        var Ut = "closure_lm_" + ((1e6 * Math.random()) | 0),
          Mt = {};
        function qt(t, e, n, r, i) {
          if (r && r.once)
            return (function t(e, n, r, i, o) {
              if (L(n)) {
                for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
                return null;
              }
              r = Wt(r);
              return e && e[Ot]
                ? e.Aa(n, r, _(i) ? !!i.capture : !!i, o)
                : Ft(e, n, r, !0, i, o);
            })(t, e, n, r, i);
          if (L(e)) {
            for (var o = 0; o < e.length; o++) qt(t, e[o], n, r, i);
            return null;
          }
          return (
            (n = Wt(n)),
            t && t[Ot]
              ? t.za(e, n, _(r) ? !!r.capture : !!r, i)
              : Ft(t, e, n, !1, r, i)
          );
        }
        function Ft(t, e, n, r, i, o) {
          if (!e) throw Error("Invalid event type");
          var s = _(i) ? !!i.capture : !!i;
          if (s && !Tt) return null;
          var u = Ht(t);
          if ((u || (t[Ut] = u = new Lt(t)), (n = u.add(e, n, r, s, o)).proxy))
            return n;
          if (
            ((r = (function () {
              var e = Bt,
                n = Tt
                  ? function (t) {
                      return e.call(n.src, n.listener, t);
                    }
                  : function (t) {
                      if (!(t = e.call(n.src, n.listener, t))) return t;
                    };
              return n;
            })()),
            ((n.proxy = r).src = t),
            (r.listener = n),
            t.addEventListener)
          )
            At || (i = s),
              void 0 === i && (i = !1),
              t.addEventListener(e.toString(), r, i);
          else if (t.attachEvent) t.attachEvent(Gt(e.toString()), r);
          else {
            if (!t.addListener || !t.removeListener)
              throw Error("addEventListener and attachEvent are unavailable.");
            t.addListener(r);
          }
          return n;
        }
        function Vt(t) {
          if (!O(t) && t && !t.X) {
            var e = t.src;
            if (e && e[Ot]) Pt(e.c, t);
            else {
              var n = t.type,
                r = t.proxy;
              e.removeEventListener
                ? e.removeEventListener(n, r, t.capture)
                : e.detachEvent
                ? e.detachEvent(Gt(n), r)
                : e.addListener && e.removeListener && e.removeListener(r),
                (n = Ht(e))
                  ? (Pt(n, t), 0 == n.b && ((n.src = null), (e[Ut] = null)))
                  : xt(t);
            }
          }
        }
        function Gt(t) {
          return t in Mt ? Mt[t] : (Mt[t] = "on" + t);
        }
        function jt(t, e) {
          var n = t.listener,
            r = t.da || t.src;
          return t.Z && Vt(t), n.call(r, e);
        }
        function Bt(t, e) {
          return (
            !!t.X ||
            (Tt
              ? jt(t, new Dt(e, this))
              : jt(t, (e = new Dt(e || R("window.event"), this))))
          );
        }
        function Ht(t) {
          return (t = t[Ut]) instanceof Lt ? t : null;
        }
        var zt = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
        function Wt(e) {
          return "function" == x(e)
            ? e
            : (e[zt] ||
                (e[zt] = function (t) {
                  return e.handleEvent(t);
                }),
              e[zt]);
        }
        function Qt() {
          H.call(this), (this.c = new Lt(this)), ((this.J = this).B = null);
        }
        function Yt(t, e, n, r) {
          if (!(e = t.c.a[String(e)])) return !0;
          e = e.concat();
          for (var i = !0, o = 0; o < e.length; ++o) {
            var s = e[o];
            if (s && !s.X && s.capture == n) {
              var u = s.listener,
                a = s.da || s.src;
              s.Z && Pt(t.c, s), (i = !1 !== u.call(a, r) && i);
            }
          }
          return i && 0 != r.Ia;
        }
        B(Qt, H),
          (Qt.prototype[Ot] = !0),
          ((N = Qt.prototype).addEventListener = function (t, e, n, r) {
            qt(this, t, e, n, r);
          }),
          (N.removeEventListener = function (t, e, n, r) {
            !(function t(e, n, r, i, o) {
              if (L(n)) for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
              else
                (i = _(i) ? !!i.capture : !!i),
                  (r = Wt(r)),
                  e && e[Ot]
                    ? ((e = e.c),
                      (n = String(n).toString()) in e.a &&
                        -1 < (r = _t((s = e.a[n]), r, i, o)) &&
                        (xt(s[r]),
                        Array.prototype.splice.call(s, r, 1),
                        0 == s.length && (delete e.a[n], e.b--)))
                    : (e = e && Ht(e)) &&
                      ((n = e.a[n.toString()]),
                      (e = -1),
                      n && (e = _t(n, r, i, o)),
                      (r = -1 < e ? n[e] : null) && Vt(r));
            })(this, t, e, n, r);
          }),
          (N.dispatchEvent = function (t) {
            var e,
              n = this.B;
            if (n) for (e = []; n; n = n.B) e.push(n);
            n = this.J;
            var r = t.type || t;
            if (k(t)) t = new St(t, n);
            else if (t instanceof St) t.target = t.target || n;
            else {
              var i = t;
              ot((t = new St(r, n)), i);
            }
            if (((i = !0), e))
              for (var o = e.length - 1; 0 <= o; o--) {
                var s = (t.a = e[o]);
                i = Yt(s, r, !0, t) && i;
              }
            if (
              ((i = Yt((s = t.a = n), r, !0, t) && i),
              (i = Yt(s, r, !1, t) && i),
              e)
            )
              for (o = 0; o < e.length; o++)
                i = Yt((s = t.a = e[o]), r, !1, t) && i;
            return i;
          }),
          (N.G = function () {
            if ((Qt.N.G.call(this), this.c)) {
              var t,
                e = this.c;
              for (t in e.a) {
                for (var n = e.a[t], r = 0; r < n.length; r++) xt(n[r]);
                delete e.a[t], e.b--;
              }
            }
            this.B = null;
          }),
          (N.za = function (t, e, n, r) {
            return this.c.add(String(t), e, !1, n, r);
          }),
          (N.Aa = function (t, e, n, r) {
            return this.c.add(String(t), e, !0, n, r);
          });
        var Kt = D.JSON.stringify;
        function Jt(t, e) {
          (this.c = t), (this.f = e), (this.b = 0), (this.a = null);
        }
        function Xt() {
          this.b = this.a = null;
        }
        Jt.prototype.get = function () {
          if (0 < this.b) {
            this.b--;
            var t = this.a;
            (this.a = t.next), (t.next = null);
          } else t = this.c();
          return t;
        };
        var $t,
          Zt = new Jt(
            function () {
              return new te();
            },
            function (t) {
              t.reset();
            }
          );
        function te() {
          this.next = this.b = this.a = null;
        }
        function ee(t) {
          D.setTimeout(function () {
            throw t;
          }, 0);
        }
        function ne(t, e) {
          $t ||
            (function () {
              var t = D.Promise.resolve(void 0);
              $t = function () {
                t.then(oe);
              };
            })(),
            re || ($t(), (re = !0)),
            ie.add(t, e);
        }
        (Xt.prototype.add = function (t, e) {
          var n = Zt.get();
          n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n);
        }),
          (te.prototype.set = function (t, e) {
            (this.a = t), (this.b = e), (this.next = null);
          });
        var re = !(te.prototype.reset = function () {
            this.next = this.b = this.a = null;
          }),
          ie = new Xt();
        function oe() {
          for (
            var t;
            (r = n = void 0),
              (r = null),
              (n = ie).a &&
                ((r = n.a),
                (n.a = n.a.next),
                n.a || (n.b = null),
                (r.next = null)),
              (t = r);
  
          ) {
            try {
              t.a.call(t.b);
            } catch (t) {
              ee(t);
            }
            var e = Zt;
            e.f(t), e.b < 100 && (e.b++, (t.next = e.a), (e.a = t));
          }
          var n, r;
          re = !1;
        }
        function se(t, e) {
          Qt.call(this),
            (this.b = t || 1),
            (this.a = e || D),
            (this.f = V(this.gb, this)),
            (this.g = j());
        }
        function ue(t) {
          (t.ba = !1), t.L && (t.a.clearTimeout(t.L), (t.L = null));
        }
        function ae(t, e, n) {
          if ("function" == x(t)) n && (t = V(t, n));
          else {
            if (!t || "function" != typeof t.handleEvent)
              throw Error("Invalid listener argument");
            t = V(t.handleEvent, t);
          }
          return 2147483647 < Number(e) ? -1 : D.setTimeout(t, e || 0);
        }
        function he(t, e, n) {
          H.call(this),
            (this.f = null != n ? V(t, n) : t),
            (this.c = e),
            (this.b = V(this.$a, this)),
            (this.a = []);
        }
        function ce(t) {
          (t.U = ae(t.b, t.c)), t.f.apply(null, t.a);
        }
        function fe(t) {
          H.call(this), (this.b = t), (this.a = {});
        }
        B(se, Qt),
          ((N = se.prototype).ba = !1),
          (N.L = null),
          (N.gb = function () {
            if (this.ba) {
              var t = j() - this.g;
              0 < t && t < 0.8 * this.b
                ? (this.L = this.a.setTimeout(this.f, this.b - t))
                : (this.L && (this.a.clearTimeout(this.L), (this.L = null)),
                  this.dispatchEvent("tick"),
                  this.ba && (ue(this), this.start()));
            }
          }),
          (N.start = function () {
            (this.ba = !0),
              this.L ||
                ((this.L = this.a.setTimeout(this.f, this.b)), (this.g = j()));
          }),
          (N.G = function () {
            se.N.G.call(this), ue(this), delete this.a;
          }),
          B(he, H),
          ((N = he.prototype).ea = !1),
          (N.U = null),
          (N.Ta = function (t) {
            (this.a = arguments), this.U ? (this.ea = !0) : ce(this);
          }),
          (N.G = function () {
            he.N.G.call(this),
              this.U &&
                (D.clearTimeout(this.U),
                (this.U = null),
                (this.ea = !1),
                (this.a = []));
          }),
          (N.$a = function () {
            (this.U = null), this.ea && ((this.ea = !1), ce(this));
          }),
          B(fe, H);
        var le = [];
        function pe(t, e, n, r) {
          L(n) || (n && (le[0] = n.toString()), (n = le));
          for (var i = 0; i < n.length; i++) {
            var o = qt(e, n[i], r || t.handleEvent, !1, t.b || t);
            if (!o) break;
            t.a[o.key] = o;
          }
        }
        function de(t) {
          nt(
            t.a,
            function (t, e) {
              this.a.hasOwnProperty(e) && Vt(t);
            },
            t
          ),
            (t.a = {});
        }
        function ve() {}
        (fe.prototype.G = function () {
          fe.N.G.call(this), de(this);
        }),
          (fe.prototype.handleEvent = function () {
            throw Error("EventHandler.handleEvent not implemented");
          });
        var ye = new Qt();
        function me(t) {
          St.call(this, "serverreachability", t);
        }
        function ge(t) {
          ye.dispatchEvent(new me(ye, t));
        }
        function we(t) {
          St.call(this, "statevent", t);
        }
        function be(t) {
          ye.dispatchEvent(new we(ye, t));
        }
        function Ee(t) {
          St.call(this, "timingevent", t);
        }
        function Ie(t, e) {
          if ("function" != x(t))
            throw Error("Fn must not be null and must be a function");
          return D.setTimeout(function () {
            t();
          }, e);
        }
        B(me, St), B(we, St), B(Ee, St);
        var Te = {
            NO_ERROR: 0,
            hb: 1,
            ob: 2,
            nb: 3,
            kb: 4,
            mb: 5,
            pb: 6,
            La: 7,
            TIMEOUT: 8,
            sb: 9,
          },
          Ne = {
            jb: "complete",
            wb: "success",
            Ma: "error",
            La: "abort",
            ub: "ready",
            vb: "readystatechange",
            TIMEOUT: "timeout",
            qb: "incrementaldata",
            tb: "progress",
            lb: "downloadprogress",
            xb: "uploadprogress",
          };
        function Ae() {}
        function Se(t) {
          var e;
          return (e = t.a) || (e = t.a = {}), e;
        }
        function De() {}
        Ae.prototype.a = null;
        var ke,
          Oe = { OPEN: "a", ib: "b", Ma: "c", rb: "d" };
        function Re() {
          St.call(this, "d");
        }
        function Ce() {
          St.call(this, "c");
        }
        function xe() {}
        function Le(t, e, n) {
          (this.g = t),
            (this.W = e),
            (this.V = n || 1),
            (this.I = new fe(this)),
            (this.O = Pe),
            (t = lt ? 125 : void 0),
            (this.P = new se(t)),
            (this.h = null),
            (this.b = !1),
            (this.l = this.D = this.f = this.F = this.v = this.R = this.i = null),
            (this.j = []),
            (this.a = null),
            (this.A = 0),
            (this.c = this.w = null),
            (this.o = -1),
            (this.m = !1),
            (this.J = 0),
            (this.B = null),
            (this.s = this.S = this.H = !1);
        }
        B(Re, St), B(Ce, St), B(xe, Ae), (ke = new xe());
        var Pe = 45e3,
          _e = {},
          Ue = {};
        function Me(t, e, n) {
          (t.F = 1), (t.f = hn(en(e))), (t.l = n), (t.H = !0), Fe(t, null);
        }
        function qe(t, e, n, r) {
          (t.F = 1), (t.f = hn(en(e))), (t.l = null), (t.H = n), Fe(t, r);
        }
        function Fe(t, e) {
          (t.v = j()),
            je(t),
            (t.D = en(t.f)),
            an(t.D, "t", t.V),
            (t.A = 0),
            (t.a = t.g.$(t.g.Y() ? e : null)),
            0 < t.J && (t.B = new he(V(t.Ja, t, t.a), t.J)),
            pe(t.I, t.a, "readystatechange", t.cb),
            (e = t.h ? rt(t.h) : {}),
            t.l
              ? (t.w || (t.w = "POST"),
                (e["Content-Type"] = "application/x-www-form-urlencoded"),
                t.a.ca(t.D, t.w, t.l, e))
              : ((t.w = "GET"), t.a.ca(t.D, t.w, null, e)),
            ge(1);
        }
        function Ve(t, e, n) {
          for (var r = !0; !t.m && t.A < n.length; ) {
            var i = Ge(t, n);
            if (i == Ue) {
              4 == e && ((t.c = 4), be(14), (r = !1));
              break;
            }
            if (i == _e) {
              (t.c = 4), be(15), (r = !1);
              break;
            }
            Qe(t, i);
          }
          4 == e && 0 == n.length && ((t.c = 1), be(16), (r = !1)),
            (t.b = t.b && r),
            r || (We(t), ze(t));
        }
        function Ge(t, e) {
          var n = t.A,
            r = e.indexOf("\n", n);
          return -1 == r
            ? Ue
            : ((n = Number(e.substring(n, r))),
              isNaN(n)
                ? _e
                : (r += 1) + n > e.length
                ? Ue
                : ((e = e.substr(r, n)), (t.A = r + n), e));
        }
        function je(t) {
          (t.R = j() + t.O), Be(t, t.O);
        }
        function Be(t, e) {
          if (null != t.i) throw Error("WatchDog timer not null");
          t.i = Ie(V(t.ab, t), e);
        }
        function He(t) {
          t.i && (D.clearTimeout(t.i), (t.i = null));
        }
        function ze(t) {
          t.g.Ca() || t.m || t.g.na(t);
        }
        function We(t) {
          He(t);
          var e = t.B;
          e && "function" == typeof e.la && e.la(),
            (t.B = null),
            ue(t.P),
            de(t.I),
            t.a && ((e = t.a), (t.a = null), e.abort(), e.la());
        }
        function Qe(t, e) {
          try {
            t.g.Fa(t, e), ge(4);
          } catch (t) {}
        }
        function Ye(t, e) {
          if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
          else if (P(t) || k(t)) W(t, e, void 0);
          else {
            if (t.K && "function" == typeof t.K) var n = t.K();
            else if (t.C && "function" == typeof t.C) n = void 0;
            else if (P(t) || k(t)) {
              n = [];
              for (var r = t.length, i = 0; i < r; i++) n.push(i);
            } else for (i in ((n = []), (r = 0), t)) n[r++] = i;
            i = (r = (function (t) {
              if (t.C && "function" == typeof t.C) return t.C();
              if (k(t)) return t.split("");
              if (P(t)) {
                for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
                return e;
              }
              for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
              return e;
            })(t)).length;
            for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t);
          }
        }
        function Ke(t, e) {
          (this.b = {}), (this.a = []), (this.c = 0);
          var n = arguments.length;
          if (1 < n) {
            if (n % 2) throw Error("Uneven number of arguments");
            for (var r = 0; r < n; r += 2)
              this.set(arguments[r], arguments[r + 1]);
          } else if (t)
            if (t instanceof Ke)
              for (n = t.K(), r = 0; r < n.length; r++)
                this.set(n[r], t.get(n[r]));
            else for (r in t) this.set(r, t[r]);
        }
        function Je(t, e) {
          $e(t.b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && Xe(t));
        }
        function Xe(t) {
          if (t.c != t.a.length) {
            for (var e = 0, n = 0; e < t.a.length; ) {
              var r = t.a[e];
              $e(t.b, r) && (t.a[n++] = r), e++;
            }
            t.a.length = n;
          }
          if (t.c != t.a.length) {
            var i = {};
            for (n = e = 0; e < t.a.length; )
              $e(i, (r = t.a[e])) || (i[(t.a[n++] = r)] = 1), e++;
            t.a.length = n;
          }
        }
        function $e(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        ((N = Le.prototype).setTimeout = function (t) {
          this.O = t;
        }),
          (N.cb = function (t) {
            t = t.target;
            var e = this.B;
            e && 3 == er(t) ? e.Ta() : this.Ja(t);
          }),
          (N.Ja = function (t) {
            try {
              if (t == this.a)
                t: {
                  var e = er(this.a),
                    n = this.a.ya(),
                    r = this.a.T();
                  if (!(e < 3 || (3 == e && !lt && !this.a.aa()))) {
                    this.m || 4 != e || 7 == n || ge(8 == n || r <= 0 ? 3 : 2),
                      He(this);
                    var i = this.a.T();
                    this.o = i;
                    var o = this.a.aa();
                    if ((this.b = 200 == i)) {
                      if (this.S && !this.s) {
                        e: {
                          if (this.a) {
                            var s = nr(this.a, "X-HTTP-Initial-Response");
                            if (s && !K(s)) {
                              var u = s;
                              break e;
                            }
                          }
                          u = null;
                        }
                        if (!u) {
                          (this.b = !1), (this.c = 3), be(12), We(this), ze(this);
                          break t;
                        }
                        (this.s = !0), Qe(this, u);
                      }
                      this.H
                        ? (Ve(this, e, o),
                          lt &&
                            this.b &&
                            3 == e &&
                            (pe(this.I, this.P, "tick", this.bb), this.P.start()))
                        : Qe(this, o),
                        4 == e && We(this),
                        this.b &&
                          !this.m &&
                          (4 == e ? this.g.na(this) : ((this.b = !1), je(this)));
                    } else
                      400 == i && 0 < o.indexOf("Unknown SID")
                        ? ((this.c = 3), be(12))
                        : ((this.c = 0), be(13)),
                        We(this),
                        ze(this);
                  }
                }
            } catch (t) {}
          }),
          (N.bb = function () {
            if (this.a) {
              var t = er(this.a),
                e = this.a.aa();
              this.A < e.length &&
                (He(this), Ve(this, t, e), this.b && 4 != t && je(this));
            }
          }),
          (N.cancel = function () {
            (this.m = !0), We(this);
          }),
          (N.ab = function () {
            this.i = null;
            var t = j();
            0 <= t - this.R
              ? (2 != this.F && (ge(3), be(17)), We(this), (this.c = 2), ze(this))
              : Be(this, this.R - t);
          }),
          ((N = Ke.prototype).C = function () {
            Xe(this);
            for (var t = [], e = 0; e < this.a.length; e++)
              t.push(this.b[this.a[e]]);
            return t;
          }),
          (N.K = function () {
            return Xe(this), this.a.concat();
          }),
          (N.get = function (t, e) {
            return $e(this.b, t) ? this.b[t] : e;
          }),
          (N.set = function (t, e) {
            $e(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
          }),
          (N.forEach = function (t, e) {
            for (var n = this.K(), r = 0; r < n.length; r++) {
              var i = n[r],
                o = this.get(i);
              t.call(e, o, i, this);
            }
          });
        var Ze = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        function tn(t, e) {
          var n;
          (this.b = this.j = this.f = ""),
            (this.i = null),
            (this.g = this.a = ""),
            (this.h = !1),
            t instanceof tn
              ? ((this.h = void 0 !== e ? e : t.h),
                nn(this, t.f),
                (this.j = t.j),
                rn(this, t.b),
                on(this, t.i),
                (this.a = t.a),
                sn(this, Tn(t.c)),
                (this.g = t.g))
              : t && (n = String(t).match(Ze))
              ? ((this.h = !!e),
                nn(this, n[1] || "", !0),
                (this.j = cn(n[2] || "")),
                rn(this, n[3] || "", !0),
                on(this, n[4]),
                (this.a = cn(n[5] || "", !0)),
                sn(this, n[6] || "", !0),
                (this.g = cn(n[7] || "")))
              : ((this.h = !!e), (this.c = new gn(null, this.h)));
        }
        function en(t) {
          return new tn(t);
        }
        function nn(t, e, n) {
          (t.f = n ? cn(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ""));
        }
        function rn(t, e, n) {
          t.b = n ? cn(e, !0) : e;
        }
        function on(t, e) {
          if (e) {
            if (((e = Number(e)), isNaN(e) || e < 0))
              throw Error("Bad port number " + e);
            t.i = e;
          } else t.i = null;
        }
        function sn(t, e, n) {
          e instanceof gn
            ? ((t.c = e),
              (function (t, e) {
                e &&
                  !t.f &&
                  (wn(t),
                  (t.c = null),
                  t.a.forEach(function (t, e) {
                    var n = e.toLowerCase();
                    e != n && (bn(this, e), In(this, n, t));
                  }, t)),
                  (t.f = e);
              })(t.c, t.h))
            : (n || (e = fn(e, yn)), (t.c = new gn(e, t.h)));
        }
        function un(t, e, n) {
          t.c.set(e, n);
        }
        function an(t, e, n) {
          L(n) || (n = [String(n)]), In(t.c, e, n);
        }
        function hn(t) {
          return (
            un(
              t,
              "zx",
              Math.floor(2147483648 * Math.random()).toString(36) +
                Math.abs(Math.floor(2147483648 * Math.random()) ^ j()).toString(
                  36
                )
            ),
            t
          );
        }
        function cn(t, e) {
          return t
            ? e
              ? decodeURI(t.replace(/%25/g, "%2525"))
              : decodeURIComponent(t)
            : "";
        }
        function fn(t, e, n) {
          return k(t)
            ? ((t = encodeURI(t).replace(e, ln)),
              n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
              t)
            : null;
        }
        function ln(t) {
          return (
            "%" +
            (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
            (15 & t).toString(16)
          );
        }
        (tn.prototype.toString = function () {
          var t = [],
            e = this.f;
          e && t.push(fn(e, pn, !0), ":");
          var n = this.b;
          return (
            (!n && "file" != e) ||
              (t.push("//"),
              (e = this.j) && t.push(fn(e, pn, !0), "@"),
              t.push(
                encodeURIComponent(String(n)).replace(
                  /%25([0-9a-fA-F]{2})/g,
                  "%$1"
                )
              ),
              null != (n = this.i) && t.push(":", String(n))),
            (n = this.a) &&
              (this.b && "/" != n.charAt(0) && t.push("/"),
              t.push(fn(n, "/" == n.charAt(0) ? vn : dn, !0))),
            (n = this.c.toString()) && t.push("?", n),
            (n = this.g) && t.push("#", fn(n, mn)),
            t.join("")
          );
        }),
          (tn.prototype.resolve = function (t) {
            var e = en(this),
              n = !!t.f;
            n ? nn(e, t.f) : (n = !!t.j),
              n ? (e.j = t.j) : (n = !!t.b),
              n ? rn(e, t.b) : (n = null != t.i);
            var r = t.a;
            if (n) on(e, t.i);
            else if ((n = !!t.a)) {
              if ("/" != r.charAt(0))
                if (this.b && !this.a) r = "/" + r;
                else {
                  var i = e.a.lastIndexOf("/");
                  -1 != i && (r = e.a.substr(0, i + 1) + r);
                }
              if (".." == (i = r) || "." == i) r = "";
              else if ($(i, "./") || $(i, "/.")) {
                (r = 0 == i.lastIndexOf("/", 0)), (i = i.split("/"));
                for (var o = [], s = 0; s < i.length; ) {
                  var u = i[s++];
                  "." == u
                    ? r && s == i.length && o.push("")
                    : ".." == u
                    ? ((1 < o.length || (1 == o.length && "" != o[0])) && o.pop(),
                      r && s == i.length && o.push(""))
                    : (o.push(u), (r = !0));
                }
                r = o.join("/");
              } else r = i;
            }
            return (
              n ? (e.a = r) : (n = "" !== t.c.toString()),
              n ? sn(e, Tn(t.c)) : (n = !!t.g),
              n && (e.g = t.g),
              e
            );
          });
        var pn = /[#\/\?@]/g,
          dn = /[#\?:]/g,
          vn = /[#\?]/g,
          yn = /[#\?@]/g,
          mn = /#/g;
        function gn(t, e) {
          (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
        }
        function wn(n) {
          n.a ||
            ((n.a = new Ke()),
            (n.b = 0),
            n.c &&
              (function (t, e) {
                if (t) {
                  t = t.split("&");
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n].indexOf("="),
                      i = null;
                    if (0 <= r) {
                      var o = t[n].substring(0, r);
                      i = t[n].substring(r + 1);
                    } else o = t[n];
                    e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
                  }
                }
              })(n.c, function (t, e) {
                n.add(decodeURIComponent(t.replace(/\+/g, " ")), e);
              }));
        }
        function bn(t, e) {
          wn(t),
            (e = Nn(t, e)),
            $e(t.a.b, e) &&
              ((t.c = null), (t.b -= t.a.get(e).length), Je(t.a, e));
        }
        function En(t, e) {
          return wn(t), (e = Nn(t, e)), $e(t.a.b, e);
        }
        function In(t, e, n) {
          bn(t, e),
            0 < n.length &&
              ((t.c = null), t.a.set(Nn(t, e), Y(n)), (t.b += n.length));
        }
        function Tn(t) {
          var e = new gn();
          return (e.c = t.c), t.a && ((e.a = new Ke(t.a)), (e.b = t.b)), e;
        }
        function Nn(t, e) {
          return (e = String(e)), t.f && (e = e.toLowerCase()), e;
        }
        function An(t) {
          (this.a = t),
            (this.b = this.h = null),
            (this.g = !1),
            (this.i = null),
            (this.c = -1),
            (this.l = this.f = null);
        }
        function Sn(t) {
          var e = t.a.F.a;
          if (null != e)
            be(4), e ? (be(10), dr(t.a, t, !1)) : (be(11), dr(t.a, t, !0));
          else {
            (t.b = new Le(t, void 0, void 0)),
              (t.b.h = t.h),
              (e = wr((e = t.a), e.Y() ? t.f : null, t.i)),
              be(4),
              an(e, "TYPE", "xmlhttp");
            var n = t.a.j,
              r = t.a.I;
            n && r && un(e, n, r), qe(t.b, e, !1, t.f);
          }
        }
        function Dn() {
          this.a = this.b = null;
        }
        function kn() {
          this.a = new Ke();
        }
        function On(t) {
          var e = typeof t;
          return ("object" == e && t) || "function" == e
            ? "o" + (t[U] || (t[U] = ++M))
            : e.charAt(0) + t;
        }
        function Rn(t, e) {
          (this.b = t), (this.a = e);
        }
        function Cn(t) {
          (this.g = t || xn),
            (t = D.PerformanceNavigationTiming
              ? 0 < (t = D.performance.getEntriesByType("navigation")).length &&
                ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol)
              : !!(D.ka && D.ka.Da && D.ka.Da() && D.ka.Da().zb)),
            (this.f = t ? this.g : 1),
            (this.a = null),
            1 < this.f && (this.a = new kn()),
            (this.b = null),
            (this.c = []);
        }
        ((N = gn.prototype).add = function (t, e) {
          wn(this), (this.c = null), (t = Nn(this, t));
          var n = this.a.get(t);
          return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
        }),
          (N.forEach = function (n, r) {
            wn(this),
              this.a.forEach(function (t, e) {
                W(
                  t,
                  function (t) {
                    n.call(r, t, e, this);
                  },
                  this
                );
              }, this);
          }),
          (N.K = function () {
            wn(this);
            for (
              var t = this.a.C(), e = this.a.K(), n = [], r = 0;
              r < e.length;
              r++
            )
              for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
            return n;
          }),
          (N.C = function (t) {
            wn(this);
            var e = [];
            if (k(t)) En(this, t) && (e = Q(e, this.a.get(Nn(this, t))));
            else {
              t = this.a.C();
              for (var n = 0; n < t.length; n++) e = Q(e, t[n]);
            }
            return e;
          }),
          (N.set = function (t, e) {
            return (
              wn(this),
              (this.c = null),
              En(this, (t = Nn(this, t))) && (this.b -= this.a.get(t).length),
              this.a.set(t, [e]),
              (this.b += 1),
              this
            );
          }),
          (N.get = function (t, e) {
            return t && 0 < (t = this.C(t)).length ? String(t[0]) : e;
          }),
          (N.toString = function () {
            if (this.c) return this.c;
            if (!this.a) return "";
            for (var t = [], e = this.a.K(), n = 0; n < e.length; n++) {
              var r = e[n],
                i = encodeURIComponent(String(r));
              r = this.C(r);
              for (var o = 0; o < r.length; o++) {
                var s = i;
                "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))),
                  t.push(s);
              }
            }
            return (this.c = t.join("&"));
          }),
          B(
            function () {},
            function () {}
          ),
          ((N = An.prototype).M = null),
          (N.$ = function (t) {
            return this.a.$(t);
          }),
          (N.abort = function () {
            this.b && (this.b.cancel(), (this.b = null)), (this.c = -1);
          }),
          (N.Ca = function () {
            return !1;
          }),
          (N.Fa = function (t, e) {
            if (((this.c = t.o), 0 == this.M)) {
              if (!this.a.o && (t = t.a)) {
                var n = nr(t, "X-Client-Wire-Protocol");
                (this.l = n || null),
                  this.a.j && (t = nr(t, "X-HTTP-Session-Id")) && (this.a.I = t);
              }
              if (e) {
                try {
                  var r = this.a.ja.a.parse(e);
                } catch (t) {
                  return ((e = this.a).m = this.c), void mr(e, 2);
                }
                this.f = r[0];
              } else ((e = this.a).m = this.c), mr(e, 2);
            } else
              1 == this.M &&
                (this.g
                  ? be(6)
                  : "11111" == e
                  ? (be(5),
                    (this.g = !0),
                    (!ct || 10 <= Number(wt)) &&
                      ((this.c = 200),
                      this.b.cancel(),
                      be(11),
                      dr(this.a, this, !0)))
                  : (be(7), (this.g = !1)));
          }),
          (N.na = function () {
            if (((this.c = this.b.o), this.b.b))
              0 == this.M
                ? ((this.M = 1), Sn(this))
                : 1 == this.M &&
                  (this.g
                    ? (be(11), dr(this.a, this, !0))
                    : (be(10), dr(this.a, this, !1)));
            else {
              0 == this.M ? be(8) : 1 == this.M && be(9);
              var t = this.a;
              (t.m = this.c), mr(t, 2);
            }
          }),
          (N.Y = function () {
            return this.a.Y();
          }),
          (N.ma = function () {
            return this.a.ma();
          }),
          (kn.prototype.add = function (t) {
            this.a.set(On(t), t);
          }),
          (kn.prototype.C = function () {
            return this.a.C();
          });
        var xn = 10;
        function Ln(t, e) {
          !t.a &&
            ($(e, "spdy") || $(e, "quic") || $(e, "h2")) &&
            ((t.f = t.g), (t.a = new kn()), t.b && (Mn(t, t.b), (t.b = null)));
        }
        function Pn(t) {
          return !!t.b || (!!t.a && t.a.a.c >= t.f);
        }
        function _n(t) {
          return t.b ? 1 : t.a ? t.a.a.c : 0;
        }
        function Un(t, e) {
          return (t = t.b ? t.b == e : !!t.a && ((e = On(e)), $e(t.a.a.b, e)));
        }
        function Mn(t, e) {
          t.a ? t.a.add(e) : (t.b = e);
        }
        function qn(t, e) {
          var n;
          t.b && t.b == e
            ? (t.b = null)
            : ((n = t.a) && ((n = On(e)), (n = $e(t.a.a.b, n))),
              n && Je(t.a.a, On(e)));
        }
        function Fn(t) {
          if (null != t.b) return t.c.concat(t.b.j);
          if (null == t.a || 0 == t.a.a.c) return Y(t.c);
          var e = t.c;
          return (
            W(t.a.C(), function (t) {
              e = e.concat(t.j);
            }),
            e
          );
        }
        function Vn() {}
        function Gn() {
          this.a = new Vn();
        }
        function jn(t, r, e) {
          var i = e || "";
          try {
            Ye(t, function (t, e) {
              var n = t;
              _(t) && (n = Kt(t)), r.push(i + e + "=" + encodeURIComponent(n));
            });
          } catch (t) {
            throw (r.push(i + "type=" + encodeURIComponent("_badmap")), t);
          }
        }
        function Bn(t, e, n, r, i) {
          try {
            (e.onload = null),
              (e.onerror = null),
              (e.onabort = null),
              (e.ontimeout = null),
              i(r);
          } catch (t) {}
        }
        (Cn.prototype.cancel = function () {
          (this.c = Fn(this)),
            this.b
              ? (this.b.cancel(), (this.b = null))
              : this.a &&
                0 != this.a.a.c &&
                (W(this.a.C(), function (t) {
                  t.cancel();
                }),
                (function (t) {
                  (t.b = {}), (t.a.length = 0), (t.c = 0);
                })(this.a.a));
        }),
          (Vn.prototype.stringify = function (t) {
            return D.JSON.stringify(t, void 0);
          }),
          (Vn.prototype.parse = function (t) {
            return D.JSON.parse(t, void 0);
          });
        var Hn = D.JSON.parse;
        function zn(t) {
          Qt.call(this),
            (this.headers = new Ke()),
            (this.H = t || null),
            (this.b = !1),
            (this.s = this.a = null),
            (this.A = ""),
            (this.h = 0),
            (this.f = ""),
            (this.g = this.w = this.l = this.v = !1),
            (this.o = 0),
            (this.m = null),
            (this.I = Wn),
            (this.D = this.F = !1);
        }
        B(zn, Qt);
        var Wn = "",
          Qn = /^https?$/i,
          Yn = ["POST", "PUT"];
        function Kn(t) {
          return "content-type" == t.toLowerCase();
        }
        function Jn(t, e) {
          (t.b = !1),
            t.a && ((t.g = !0), t.a.abort(), (t.g = !1)),
            (t.f = e),
            (t.h = 5),
            Xn(t),
            Zn(t);
        }
        function Xn(t) {
          t.v ||
            ((t.v = !0), t.dispatchEvent("complete"), t.dispatchEvent("error"));
        }
        function $n(t) {
          if (t.b && void 0 !== S && (!t.s[1] || 4 != er(t) || 2 != t.T()))
            if (t.l && 4 == er(t)) ae(t.Ea, 0, t);
            else if ((t.dispatchEvent("readystatechange"), 4 == er(t))) {
              t.b = !1;
              try {
                var e,
                  n = t.T();
                t: switch (n) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var r = !0;
                    break t;
                  default:
                    r = !1;
                }
                if (!(e = r)) {
                  var i;
                  if ((i = 0 === n)) {
                    var o = String(t.A).match(Ze)[1] || null;
                    if (!o && D.self && D.self.location) {
                      var s = D.self.location.protocol;
                      o = s.substr(0, s.length - 1);
                    }
                    i = !Qn.test(o ? o.toLowerCase() : "");
                  }
                  e = i;
                }
                if (e) t.dispatchEvent("complete"), t.dispatchEvent("success");
                else {
                  t.h = 6;
                  try {
                    var u = 2 < er(t) ? t.a.statusText : "";
                  } catch (t) {
                    u = "";
                  }
                  (t.f = u + " [" + t.T() + "]"), Xn(t);
                }
              } finally {
                Zn(t);
              }
            }
        }
        function Zn(t, e) {
          if (t.a) {
            tr(t);
            var n = t.a,
              r = t.s[0] ? C : null;
            (t.a = null), (t.s = null), e || t.dispatchEvent("ready");
            try {
              n.onreadystatechange = r;
            } catch (t) {}
          }
        }
        function tr(t) {
          t.a && t.D && (t.a.ontimeout = null),
            t.m && (D.clearTimeout(t.m), (t.m = null));
        }
        function er(t) {
          return t.a ? t.a.readyState : 0;
        }
        function nr(t, e) {
          return t.a ? t.a.getResponseHeader(e) : null;
        }
        function rr(t, e, n) {
          t: {
            for (r in n) {
              var r = !1;
              break t;
            }
            r = !0;
          }
          if (r) return t;
          if (
            ((n = (function (t) {
              var n = "";
              return (
                nt(t, function (t, e) {
                  (n += e), (n += ":"), (n += t), (n += "\r\n");
                }),
                n
              );
            })(n)),
            k(t))
          ) {
            if (
              ((e = encodeURIComponent(String(e))),
              (e += n = null != n ? "=" + encodeURIComponent(String(n)) : ""))
            ) {
              if (
                ((n = t.indexOf("#")) < 0 && (n = t.length),
                (r = t.indexOf("?")) < 0 || n < r)
              ) {
                r = n;
                var i = "";
              } else i = t.substring(r + 1, n);
              (n = (t = [t.substr(0, r), i, t.substr(n)])[1]),
                (t[1] = e ? (n ? n + "&" + e : e) : n),
                (t = t[0] + (t[1] ? "?" + t[1] : "") + t[2]);
            }
            return t;
          }
          return un(t, e, n), t;
        }
        function ir(t) {
          (this.f = []),
            (this.F = new Dn()),
            (this.ga = this.pa = this.B = this.ha = this.a = this.I = this.j = this.V = this.g = this.J = this.i = null),
            (this.Qa = this.P = 0),
            (this.Oa = !!R("internalChannelParams.failFast", t)),
            (this.ia = this.w = this.s = this.l = this.h = this.c = null),
            (this.oa = !0),
            (this.m = this.ra = this.O = -1),
            (this.S = this.v = this.A = 0),
            (this.Na = R("internalChannelParams.baseRetryDelayMs", t) || 5e3),
            (this.Ra = R("internalChannelParams.retryDelaySeedMs", t) || 1e4),
            (this.Pa =
              R("internalChannelParams.forwardChannelMaxRetries", t) || 2),
            (this.qa =
              R("internalChannelParams.forwardChannelRequestTimeoutMs", t) ||
              2e4),
            (this.Ka = (t && t.Ab) || void 0),
            (this.D = void 0),
            (this.R = (t && t.supportsCrossDomainXhr) || !1),
            (this.H = ""),
            (this.b = new Cn(t && t.concurrentRequestLimit)),
            (this.ja = new Gn()),
            (this.o =
              !t ||
              void 0 === t.backgroundChannelTest ||
              t.backgroundChannelTest),
            (this.W = (t && t.fastHandshake) || !1) && !this.o && (this.o = !0),
            t && t.forceLongPolling && (this.oa = !1),
            (this.fa = void 0);
        }
        function or(t) {
          if ((sr(t), 3 == t.u)) {
            var e = t.P++,
              n = en(t.B);
            un(n, "SID", t.H),
              un(n, "RID", e),
              un(n, "TYPE", "terminate"),
              cr(t, n),
              ((e = new Le(t, e, void 0)).F = 2),
              (e.f = hn(en(n))),
              (n = !1),
              D.navigator &&
                D.navigator.sendBeacon &&
                (n = D.navigator.sendBeacon(e.f.toString(), "")),
              !n && D.Image && ((new Image().src = e.f), (n = !0)),
              n || ((e.a = e.g.$(null)), e.a.ca(e.f)),
              (e.v = j()),
              je(e);
          }
          gr(t);
        }
        function sr(t) {
          t.w && (t.w.abort(), (t.w = null)),
            t.a && (t.a.cancel(), (t.a = null)),
            t.l && (D.clearTimeout(t.l), (t.l = null)),
            vr(t),
            t.b.cancel(),
            t.h && (O(t.h) && D.clearTimeout(t.h), (t.h = null));
        }
        function ur(t, e) {
          t.f.push(new Rn(t.Qa++, e)), 3 == t.u && ar(t);
        }
        function ar(t) {
          Pn(t.b) || t.h || ((t.h = !0), ne(t.Ha, t), (t.A = 0));
        }
        function hr(t, e) {
          var n;
          n = e ? e.W : t.P++;
          var r = en(t.B);
          un(r, "SID", t.H),
            un(r, "RID", n),
            un(r, "AID", t.O),
            cr(t, r),
            t.g && t.i && rr(r, t.g, t.i),
            (n = new Le(t, n, t.A + 1)),
            null === t.g && (n.h = t.i),
            e && (t.f = e.j.concat(t.f)),
            (e = fr(t, n, 1e3)),
            n.setTimeout(
              Math.round(0.5 * t.qa) + Math.round(0.5 * t.qa * Math.random())
            ),
            Mn(t.b, n),
            Me(n, r, e);
        }
        function cr(t, n) {
          t.c &&
            Ye({}, function (t, e) {
              un(n, e, t);
            });
        }
        function fr(t, e, n) {
          n = Math.min(t.f.length, n);
          var r = t.c ? V(t.c.Sa, t.c, t) : null;
          t: for (var i = t.f, o = -1; ; ) {
            var s = ["count=" + n];
            -1 == o
              ? 0 < n
                ? ((o = i[0].b), s.push("ofs=" + o))
                : (o = 0)
              : s.push("ofs=" + o);
            for (var u = !0, a = 0; a < n; a++) {
              var h = i[a].b,
                c = i[a].a;
              if ((h -= o) < 0) (o = Math.max(0, i[a].b - 100)), (u = !1);
              else
                try {
                  jn(c, s, "req" + h + "_");
                } catch (t) {
                  r && r(c);
                }
            }
            if (u) {
              r = s.join("&");
              break t;
            }
          }
          return (t = t.f.splice(0, n)), (e.j = t), r;
        }
        function lr(t) {
          t.a || t.l || ((t.S = 1), ne(t.Ga, t), (t.v = 0));
        }
        function pr(t) {
          return (
            !(t.a || t.l || 3 <= t.v) &&
            (t.S++, (t.l = Ie(V(t.Ga, t), yr(t, t.v))), t.v++, !0)
          );
        }
        function dr(t, e, n) {
          var r = e.l;
          r && Ln(t.b, r),
            (t.ia = t.oa && n),
            (t.m = e.c),
            (t.B = wr(t, null, t.ha)),
            ar(t);
        }
        function vr(t) {
          null != t.s && (D.clearTimeout(t.s), (t.s = null));
        }
        function yr(t, e) {
          var n = t.Na + Math.floor(Math.random() * t.Ra);
          return t.ma() || (n *= 2), n * e;
        }
        function mr(t, e) {
          if (2 == e) {
            var n = null;
            t.c && (n = null);
            var r = V(t.eb, t);
            n ||
              ((n = new tn("//www.google.com/images/cleardot.gif")),
              (D.location && "http" == D.location.protocol) || nn(n, "https"),
              hn(n)),
              (function (t, e) {
                var n = new ve();
                if (D.Image) {
                  var r = new Image();
                  (r.onload = G(Bn, n, r, "TestLoadImage: loaded", !0, e)),
                    (r.onerror = G(Bn, n, r, "TestLoadImage: error", !1, e)),
                    (r.onabort = G(Bn, n, r, "TestLoadImage: abort", !1, e)),
                    (r.ontimeout = G(Bn, n, r, "TestLoadImage: timeout", !1, e)),
                    D.setTimeout(function () {
                      r.ontimeout && r.ontimeout();
                    }, 1e4),
                    (r.src = t);
                } else e(!1);
              })(n.toString(), r);
          } else be(2);
          (t.u = 0), t.c && t.c.ta(e), gr(t), sr(t);
        }
        function gr(t) {
          (t.u = 0),
            (t.m = -1),
            t.c &&
              ((0 == Fn(t.b).length && 0 == t.f.length) ||
                ((t.b.c.length = 0), Y(t.f), (t.f.length = 0)),
              t.c.sa());
        }
        function wr(t, e, n) {
          var r = (function (t) {
            return t instanceof tn ? en(t) : new tn(t, void 0);
          })(n);
          if ("" != r.b) e && rn(r, e + "." + r.b), on(r, r.i);
          else {
            var i,
              o = D.location;
            (i = e ? e + "." + o.hostname : o.hostname),
              (r = (function (t, e, n, r) {
                var i = new tn(null, void 0);
                return (
                  t && nn(i, t), e && rn(i, e), n && on(i, n), r && (i.a = r), i
                );
              })(o.protocol, i, +o.port, n));
          }
          return (
            t.V &&
              nt(t.V, function (t, e) {
                un(r, e, t);
              }),
            (e = t.j),
            (n = t.I),
            e && n && un(r, e, n),
            un(r, "VER", t.wa),
            cr(t, r),
            r
          );
        }
        function br() {}
        function Er() {
          if (ct && !(10 <= Number(wt)))
            throw Error("Environmental error: no available transport.");
        }
        function Ir(t, e) {
          Qt.call(this),
            (this.a = new ir(e)),
            (this.g = t),
            (this.m =
              e && e.fb
                ? e.fb
                : (function (t) {
                    for (var e = t, n = 1; n < arguments.length; n++) {
                      var r,
                        i = arguments[n];
                      if (0 == i.lastIndexOf("/", 0)) e = i;
                      else
                        (r = "" == e) ||
                          (r = 0 <= (r = e.length - 1) && e.indexOf("/", r) == r),
                          (e += r ? i : "/" + i);
                    }
                    return e;
                  })(this.g, "test")),
            (this.b = (e && e.messageUrlParams) || null),
            (t = (e && e.messageHeaders) || null),
            e &&
              e.clientProtocolHeaderRequired &&
              (t
                ? (t["X-Client-Protocol"] = "webchannel")
                : (t = { "X-Client-Protocol": "webchannel" })),
            (this.a.i = t),
            (t = (e && e.initMessageHeaders) || null),
            e &&
              e.messageContentType &&
              (t
                ? (t["X-WebChannel-Content-Type"] = e.messageContentType)
                : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
            e &&
              e.xa &&
              (t
                ? (t["X-WebChannel-Client-Profile"] = e.xa)
                : (t = { "X-WebChannel-Client-Profile": e.xa })),
            (this.a.J = t),
            (t = e && e.httpHeadersOverwriteParam) && !K(t) && (this.a.g = t),
            (this.l = (e && e.supportsCrossDomainXhr) || !1),
            (this.h = (e && e.sendRawJson) || !1),
            (e = e && e.httpSessionIdParam) &&
              !K(e) &&
              ((this.a.j = e),
              null !== (t = this.b) &&
                e in t &&
                e in (t = this.b) &&
                delete t[e]),
            (this.f = new Ar(this));
        }
        function Tr(t) {
          Re.call(this);
          var e = t.__sm__;
          if (e) {
            t: {
              for (var n in e) {
                t = n;
                break t;
              }
              t = void 0;
            }
            (this.c = t)
              ? ((t = this.c), (this.data = null !== e && t in e ? e[t] : void 0))
              : (this.data = e);
          } else this.data = t;
        }
        function Nr() {
          Ce.call(this), (this.status = 1);
        }
        function Ar(t) {
          this.a = t;
        }
        ((N = zn.prototype).ca = function (t, e, n, r) {
          if (this.a)
            throw Error(
              "[goog.net.XhrIo] Object is active with another request=" +
                this.A +
                "; newUri=" +
                t
            );
          (e = e ? e.toUpperCase() : "GET"),
            (this.A = t),
            (this.f = ""),
            (this.h = 0),
            (this.v = !1),
            (this.b = !0),
            (this.a = new XMLHttpRequest()),
            (this.s = this.H ? Se(this.H) : Se(ke)),
            (this.a.onreadystatechange = V(this.Ea, this));
          try {
            (this.w = !0), this.a.open(e, String(t), !0), (this.w = !1);
          } catch (t) {
            return void Jn(this, t);
          }
          t = n || "";
          var i = new Ke(this.headers);
          r &&
            Ye(r, function (t, e) {
              i.set(e, t);
            }),
            (r = (function (t) {
              t: {
                for (
                  var e = Kn, n = t.length, r = k(t) ? t.split("") : t, i = 0;
                  i < n;
                  i++
                )
                  if (i in r && e.call(void 0, r[i], i, t)) {
                    e = i;
                    break t;
                  }
                e = -1;
              }
              return e < 0 ? null : k(t) ? t.charAt(e) : t[e];
            })(i.K())),
            (n = D.FormData && t instanceof D.FormData),
            0 <= z(Yn, e) &&
              !r &&
              !n &&
              i.set(
                "Content-Type",
                "application/x-www-form-urlencoded;charset=utf-8"
              ),
            i.forEach(function (t, e) {
              this.a.setRequestHeader(e, t);
            }, this),
            this.I && (this.a.responseType = this.I),
            "withCredentials" in this.a &&
              this.a.withCredentials !== this.F &&
              (this.a.withCredentials = this.F);
          try {
            tr(this),
              0 < this.o &&
                ((this.D = (function (t) {
                  return ct && Et(9) && O(t.timeout) && void 0 !== t.ontimeout;
                })(this.a))
                  ? ((this.a.timeout = this.o),
                    (this.a.ontimeout = V(this.Ba, this)))
                  : (this.m = ae(this.Ba, this.o, this))),
              (this.l = !0),
              this.a.send(t),
              (this.l = !1);
          } catch (t) {
            Jn(this, t);
          }
        }),
          (N.Ba = function () {
            void 0 !== S &&
              this.a &&
              ((this.f = "Timed out after " + this.o + "ms, aborting"),
              (this.h = 8),
              this.dispatchEvent("timeout"),
              this.abort(8));
          }),
          (N.abort = function (t) {
            this.a &&
              this.b &&
              ((this.b = !1),
              (this.g = !0),
              this.a.abort(),
              (this.g = !1),
              (this.h = t || 7),
              this.dispatchEvent("complete"),
              this.dispatchEvent("abort"),
              Zn(this));
          }),
          (N.G = function () {
            this.a &&
              (this.b &&
                ((this.b = !1), (this.g = !0), this.a.abort(), (this.g = !1)),
              Zn(this, !0)),
              zn.N.G.call(this);
          }),
          (N.Ea = function () {
            this.j || (this.w || this.l || this.g ? $n(this) : this.Za());
          }),
          (N.Za = function () {
            $n(this);
          }),
          (N.T = function () {
            try {
              return 2 < er(this) ? this.a.status : -1;
            } catch (t) {
              return -1;
            }
          }),
          (N.aa = function () {
            try {
              return this.a ? this.a.responseText : "";
            } catch (t) {
              return "";
            }
          }),
          (N.Ua = function (t) {
            if (this.a) {
              var e = this.a.responseText;
              return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), Hn(e);
            }
          }),
          (N.ya = function () {
            return this.h;
          }),
          (N.Xa = function () {
            return k(this.f) ? this.f : String(this.f);
          }),
          ((N = ir.prototype).wa = 8),
          (N.u = 1),
          (N.Ca = function () {
            return 0 == this.u;
          }),
          (N.Ha = function (t) {
            if (this.h)
              if (((this.h = null), 1 == this.u)) {
                if (!t) {
                  (this.P = Math.floor(1e5 * Math.random())), (t = this.P++);
                  var e,
                    n = new Le(this, t, void 0),
                    r = this.i;
                  if (
                    (this.J && (r ? ot((r = rt(r)), this.J) : (r = this.J)),
                    null === this.g && (n.h = r),
                    this.W)
                  )
                    t: {
                      for (var i = (e = 0); i < this.f.length; i++) {
                        var o = this.f[i];
                        if (
                          void 0 ===
                          (o =
                            "__data__" in o.a && k((o = o.a.__data__))
                              ? o.length
                              : void 0)
                        )
                          break;
                        if (4096 < (e += o)) {
                          e = i;
                          break t;
                        }
                        if (4096 === e || i === this.f.length - 1) {
                          e = i + 1;
                          break t;
                        }
                      }
                      e = 1e3;
                    }
                  else e = 1e3;
                  (e = fr(this, n, e)),
                    un((i = en(this.B)), "RID", t),
                    un(i, "CVER", 22),
                    this.o && this.j && un(i, "X-HTTP-Session-Id", this.j),
                    cr(this, i),
                    this.g && r && rr(i, this.g, r),
                    Mn(this.b, n),
                    this.W
                      ? (un(i, "$req", e),
                        un(i, "SID", "null"),
                        (n.S = !0),
                        Me(n, i, null))
                      : Me(n, i, e),
                    (this.u = 2);
                }
              } else
                3 == this.u &&
                  (t
                    ? hr(this, t)
                    : 0 == this.f.length || Pn(this.b) || hr(this));
          }),
          (N.Ga = function () {
            (this.l = null),
              (this.a = new Le(this, "rpc", this.S)),
              null === this.g && (this.a.h = this.i),
              (this.a.J = 0);
            var t = en(this.pa);
            un(t, "RID", "rpc"),
              un(t, "SID", this.H),
              un(t, "CI", this.ia ? "0" : "1"),
              un(t, "AID", this.O),
              cr(this, t),
              un(t, "TYPE", "xmlhttp"),
              this.g && this.i && rr(t, this.g, this.i),
              this.D && this.a.setTimeout(this.D),
              qe(this.a, t, !0, this.ga);
          }),
          (N.Fa = function (t, e) {
            if (0 != this.u && (this.a == t || Un(this.b, t)))
              if (((this.m = t.o), !t.s && Un(this.b, t) && 3 == this.u)) {
                try {
                  var n = this.ja.a.parse(e);
                } catch (t) {
                  n = null;
                }
                if (L(n) && 3 == n.length) {
                  if (0 == (e = n)[0]) {
                    t: if (!this.l) {
                      if (this.a) {
                        if (!(this.a.v + 3e3 < t.v)) break t;
                        vr(this), this.a.cancel(), (this.a = null);
                      }
                      pr(this), be(18);
                    }
                  } else
                    (this.ra = e[1]),
                      0 < this.ra - this.O &&
                        e[2] < 37500 &&
                        this.ia &&
                        0 == this.v &&
                        !this.s &&
                        (this.s = Ie(V(this.Ya, this), 6e3));
                  if (_n(this.b) <= 1 && this.fa) {
                    try {
                      this.fa();
                    } catch (t) {}
                    this.fa = void 0;
                  }
                } else mr(this, 11);
              } else if (((!t.s && this.a != t) || vr(this), !K(e)))
                for (e = n = this.ja.a.parse(e), n = 0; n < e.length; n++) {
                  var r = e[n];
                  if (((this.O = r[0]), (r = r[1]), 2 == this.u))
                    if ("c" == r[0]) {
                      (this.H = r[1]), (this.ga = r[2]);
                      var i = r[3];
                      null != i && (this.wa = i),
                        null != (r = r[5]) && O(r) && 0 < r && (this.D = 1.5 * r),
                        this.o &&
                          (r = t.a) &&
                          ((i = nr(r, "X-Client-Wire-Protocol")) && Ln(this.b, i),
                          this.j && (r = nr(r, "X-HTTP-Session-Id"))) &&
                          ((this.I = r), un(this.B, this.j, r)),
                        (this.u = 3),
                        this.c && this.c.va(),
                        (r = t),
                        (this.pa = wr(this, this.Y() ? this.ga : null, this.ha)),
                        r.s
                          ? (qn(this.b, r),
                            (i = this.D) && r.setTimeout(i),
                            r.i && (He(r), je(r)),
                            (this.a = r))
                          : lr(this),
                        0 < this.f.length && ar(this);
                    } else ("stop" != r[0] && "close" != r[0]) || mr(this, 7);
                  else
                    3 == this.u &&
                      ("stop" == r[0] || "close" == r[0]
                        ? "stop" == r[0]
                          ? mr(this, 7)
                          : or(this)
                        : "noop" != r[0] && this.c && this.c.ua(r),
                      (this.v = 0));
                }
          }),
          (N.Ya = function () {
            null != this.s &&
              ((this.s = null),
              this.a.cancel(),
              (this.a = null),
              pr(this),
              be(19));
          }),
          (N.na = function (t) {
            var e = null;
            if (this.a == t) {
              vr(this), (this.a = null);
              var n = 2;
            } else {
              if (!Un(this.b, t)) return;
              (e = t.j), qn(this.b, t), (n = 1);
            }
            if (((this.m = t.o), 0 != this.u))
              if (t.b)
                1 == n
                  ? ((e = j() - t.v),
                    ye.dispatchEvent(new Ee(ye, t.l ? t.l.length : 0, e, this.A)),
                    ar(this))
                  : lr(this);
              else {
                var r = t.c;
                if (
                  3 == r ||
                  (0 == r && 0 < this.m) ||
                  !(
                    (1 == n &&
                      (function (t, e) {
                        return (
                          !(_n(t.b) >= t.b.f - (t.h ? 1 : 0)) &&
                          (t.h
                            ? ((t.f = e.j.concat(t.f)), !0)
                            : !(
                                1 == t.u ||
                                2 == t.u ||
                                t.A >= (t.Oa ? 0 : t.Pa)
                              ) &&
                              ((t.h = Ie(V(t.Ha, t, e), yr(t, t.A))), t.A++, !0))
                        );
                      })(this, t)) ||
                    (2 == n && pr(this))
                  )
                )
                  switch (
                    (e && 0 < e.length && ((t = this.b), (t.c = t.c.concat(e))),
                    r)
                  ) {
                    case 1:
                      mr(this, 5);
                      break;
                    case 4:
                      mr(this, 10);
                      break;
                    case 3:
                      mr(this, 6);
                      break;
                    default:
                      mr(this, 2);
                  }
              }
          }),
          (N.eb = function (t) {
            be(t ? 2 : 1);
          }),
          (N.$ = function (t) {
            if (t && !this.R)
              throw Error("Can't create secondary domain capable XhrIo object.");
            return ((t = new zn(this.Ka)).F = this.R), t;
          }),
          (N.ma = function () {
            return !!this.c && !0;
          }),
          (N.Y = function () {
            return this.R;
          }),
          ((N = br.prototype).va = function () {}),
          (N.ua = function () {}),
          (N.ta = function () {}),
          (N.sa = function () {}),
          (N.Sa = function () {}),
          (Er.prototype.a = function (t, e) {
            return new Ir(t, e);
          }),
          B(Ir, Qt),
          ((N = Ir.prototype).addEventListener = function (t, e, n, r) {
            Ir.N.addEventListener.call(this, t, e, n, r);
          }),
          (N.removeEventListener = function (t, e, n, r) {
            Ir.N.removeEventListener.call(this, t, e, n, r);
          }),
          (N.Va = function () {
            (this.a.c = this.f), this.l && (this.a.R = !0);
            var t = this.a,
              e = this.m,
              n = this.g,
              r = this.b || void 0;
            be(0),
              (t.ha = n),
              (t.V = r || {}),
              t.o && ((t.F.b = []), (t.F.a = !1)),
              (t.w = new An(t)),
              null === t.g && (t.w.h = t.i),
              (n = e),
              t.g && t.i && (n = rr(e, t.g, t.i)),
              ((t = t.w).i = n),
              (e = wr(t.a, null, t.i)),
              be(3),
              null != (n = t.a.F.b)
                ? ((t.f = n[0]), (t.M = 1), Sn(t))
                : (an(e, "MODE", "init"),
                  !t.a.o && t.a.j && an(e, "X-HTTP-Session-Id", t.a.j),
                  (t.b = new Le(t, void 0, void 0)),
                  (t.b.h = t.h),
                  qe(t.b, e, !1, null),
                  (t.M = 0));
          }),
          (N.close = function () {
            or(this.a);
          }),
          (N.Wa = function (t) {
            if (k(t)) {
              var e = {};
              (e.__data__ = t), ur(this.a, e);
            } else
              this.h
                ? (((e = {}).__data__ = Kt(t)), ur(this.a, e))
                : ur(this.a, t);
          }),
          (N.G = function () {
            (this.a.c = null),
              delete this.f,
              or(this.a),
              delete this.a,
              Ir.N.G.call(this);
          }),
          B(Tr, Re),
          B(Nr, Ce),
          B(Ar, br),
          (Ar.prototype.va = function () {
            this.a.dispatchEvent("a");
          }),
          (Ar.prototype.ua = function (t) {
            this.a.dispatchEvent(new Tr(t));
          }),
          (Ar.prototype.ta = function (t) {
            this.a.dispatchEvent(new Nr(t));
          }),
          (Ar.prototype.sa = function () {
            this.a.dispatchEvent("b");
          });
        var Sr = G(function (t, e) {
          function n() {}
          n.prototype = t.prototype;
          var r = new n();
          return t.apply(r, Array.prototype.slice.call(arguments, 1)), r;
        }, Er);
        (Er.prototype.createWebChannel = Er.prototype.a),
          (Ir.prototype.send = Ir.prototype.Wa),
          (Ir.prototype.open = Ir.prototype.Va),
          (Ir.prototype.close = Ir.prototype.close),
          (Te.NO_ERROR = 0),
          (Te.TIMEOUT = 8),
          (Te.HTTP_ERROR = 6),
          (Ne.COMPLETE = "complete"),
          ((De.EventType = Oe).OPEN = "a"),
          (Oe.CLOSE = "b"),
          (Oe.ERROR = "c"),
          (Oe.MESSAGE = "d"),
          (Qt.prototype.listen = Qt.prototype.za),
          (zn.prototype.listenOnce = zn.prototype.Aa),
          (zn.prototype.getLastError = zn.prototype.Xa),
          (zn.prototype.getLastErrorCode = zn.prototype.ya),
          (zn.prototype.getStatus = zn.prototype.T),
          (zn.prototype.getResponseJson = zn.prototype.Ua),
          (zn.prototype.getResponseText = zn.prototype.aa),
          (zn.prototype.send = zn.prototype.ca);
        var Dr = {
            createWebChannelTransport: Sr,
            ErrorCode: Te,
            EventType: Ne,
            WebChannel: De,
            XhrIo: zn,
          },
          kr = Dr.createWebChannelTransport,
          Or = Dr.ErrorCode,
          Rr = Dr.EventType,
          Cr = Dr.WebChannel,
          xr = Dr.XhrIo,
          Lr = sd.SDK_VERSION,
          Pr = new c("@firebase/firestore");
        function _r() {
          return Pr.logLevel === o.DEBUG ? 0 : Pr.logLevel === o.SILENT ? 2 : 1;
        }
        function Ur(t) {
          switch (t) {
            case 0:
              Pr.logLevel = o.DEBUG;
              break;
            case 1:
              Pr.logLevel = o.ERROR;
              break;
            case 2:
              Pr.logLevel = o.SILENT;
              break;
            default:
              Pr.error(
                "Firestore (" + Lr + "): Invalid value passed to `setLogLevel`"
              );
          }
        }
        function Mr(t, e) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          if (Pr.logLevel <= o.DEBUG) {
            var i = n.map(Fr);
            Pr.debug.apply(
              Pr,
              s(["Firestore (" + Lr + ") [" + t + "]: " + e], i)
            );
          }
        }
        function qr(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          if (Pr.logLevel <= o.ERROR) {
            var r = e.map(Fr);
            Pr.error.apply(Pr, s(["Firestore (" + Lr + "): " + t], r));
          }
        }
        function Fr(t) {
          if ("string" == typeof t) return t;
          var e = Ta.t();
          try {
            return e.i(t);
          } catch (e) {
            return t;
          }
        }
        function Vr(t) {
          var e = "FIRESTORE (" + Lr + ") INTERNAL ASSERTION FAILED: " + t;
          throw (qr(e), new Error(e));
        }
        function Gr(t, e) {
          t || Vr(e);
        }
        var jr =
          ((Br.u = function () {
            for (
              var t =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                e = "",
                n = 0;
              n < 20;
              n++
            )
              e += t.charAt(Math.floor(Math.random() * t.length));
            return Gr(20 === e.length, "Invalid auto ID: " + e), e;
          }),
          Br);
        function Br() {}
        function Hr(t, e) {
          return t < e ? -1 : e < t ? 1 : 0;
        }
        function zr(t, e) {
          if (t.length !== e.length) return !1;
          for (var n = 0; n < t.length; n++) if (!t[n].isEqual(e[n])) return !1;
          return !0;
        }
        function Wr(t) {
          return t + "\0";
        }
        function Qr(t, e, n, r, i) {
          (this.s = t),
            (this.persistenceKey = e),
            (this.host = n),
            (this.ssl = r),
            (this.forceLongPolling = i);
        }
        function Yr(t, e) {
          (this.user = e),
            (this.type = "OAuth"),
            (this.g = {}),
            (this.g.Authorization = "Bearer " + t);
        }
        var Kr,
          Jr =
            (Object.defineProperty(ci.prototype, "o", {
              get: function () {
                return "(default)" === this.database;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (ci.prototype.isEqual = function (t) {
              return (
                t instanceof ci &&
                t.projectId === this.projectId &&
                t.database === this.database
              );
            }),
            (ci.prototype.h = function (t) {
              return (
                Hr(this.projectId, t.projectId) || Hr(this.database, t.database)
              );
            }),
            ci),
          Xr =
            ((hi.prototype.l = function () {
              return null != this.uid;
            }),
            (hi.prototype.v = function () {
              return this.l() ? "uid:" + this.uid : "anonymous-user";
            }),
            (hi.prototype.isEqual = function (t) {
              return t.uid === this.uid;
            }),
            (hi.UNAUTHENTICATED = new hi(null)),
            (hi.m = new hi("google-credentials-uid")),
            (hi.p = new hi("first-party-uid")),
            hi),
          $r = {
            OK: "ok",
            CANCELLED: "cancelled",
            UNKNOWN: "unknown",
            INVALID_ARGUMENT: "invalid-argument",
            DEADLINE_EXCEEDED: "deadline-exceeded",
            NOT_FOUND: "not-found",
            ALREADY_EXISTS: "already-exists",
            PERMISSION_DENIED: "permission-denied",
            UNAUTHENTICATED: "unauthenticated",
            RESOURCE_EXHAUSTED: "resource-exhausted",
            FAILED_PRECONDITION: "failed-precondition",
            ABORTED: "aborted",
            OUT_OF_RANGE: "out-of-range",
            UNIMPLEMENTED: "unimplemented",
            INTERNAL: "internal",
            UNAVAILABLE: "unavailable",
            DATA_LOSS: "data-loss",
          },
          Zr = (t(ai, (Kr = Error)), ai),
          ti =
            ((ui.prototype.getToken = function () {
              return Promise.resolve(null);
            }),
            (ui.prototype.I = function () {}),
            (ui.prototype.T = function (t) {
              Gr(!this._, "Can only call setChangeListener() once."),
                (this._ = t)(Xr.UNAUTHENTICATED);
            }),
            (ui.prototype.D = function () {
              Gr(
                null !== this._,
                "removeChangeListener() when no listener registered"
              ),
                (this._ = null);
            }),
            ui),
          ei =
            ((si.prototype.getToken = function () {
              var e = this;
              Gr(
                null != this.S,
                "getToken cannot be called after listener removed."
              );
              var n = this.C,
                t = this.forceRefresh;
              return (
                (this.forceRefresh = !1),
                this.auth
                  ? this.auth.getToken(t).then(function (t) {
                      if (e.C !== n)
                        throw new Zr(
                          $r.ABORTED,
                          "getToken aborted due to token change."
                        );
                      return t
                        ? (Gr(
                            "string" == typeof t.accessToken,
                            "Invalid tokenData returned from getToken():" + t
                          ),
                          new Yr(t.accessToken, e.currentUser))
                        : null;
                    })
                  : Promise.resolve(null)
              );
            }),
            (si.prototype.I = function () {
              this.forceRefresh = !0;
            }),
            (si.prototype.T = function (t) {
              Gr(!this._, "Can only call setChangeListener() once."),
                (this._ = t),
                this.R && t(this.currentUser);
            }),
            (si.prototype.D = function () {
              Gr(null != this.S, "removeChangeListener() called twice"),
                Gr(
                  null !== this._,
                  "removeChangeListener() called when no listener registered"
                ),
                this.auth && this.auth.removeAuthTokenListener(this.S),
                (this.S = null),
                (this._ = null);
            }),
            (si.prototype.A = function () {
              var t = this.auth && this.auth.getUid();
              return (
                Gr(
                  null === t || "string" == typeof t,
                  "Received invalid UID: " + t
                ),
                new Xr(t)
              );
            }),
            si),
          ni =
            (Object.defineProperty(oi.prototype, "g", {
              get: function () {
                var t = { "X-Goog-AuthUser": this.k },
                  e = this.P.auth.N([]);
                return e && (t.Authorization = e), t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            oi),
          ri =
            ((ii.prototype.getToken = function () {
              return Promise.resolve(new ni(this.P, this.k));
            }),
            (ii.prototype.T = function (t) {
              t(Xr.p);
            }),
            (ii.prototype.D = function () {}),
            (ii.prototype.I = function () {}),
            ii);
        function ii(t, e) {
          (this.P = t), (this.k = e);
        }
        function oi(t, e) {
          (this.P = t),
            (this.k = e),
            (this.type = "FirstParty"),
            (this.user = Xr.p);
        }
        function si(t) {
          var e = this;
          (this.S = null),
            (this.currentUser = Xr.UNAUTHENTICATED),
            (this.R = !1),
            (this.C = 0),
            (this._ = null),
            (this.forceRefresh = !1),
            (this.S = function () {
              e.C++,
                (e.currentUser = e.A()),
                (e.R = !0),
                e._ && e._(e.currentUser);
            }),
            (this.C = 0),
            (this.auth = t.getImmediate({ optional: !0 })),
            this.auth
              ? this.auth.addAuthTokenListener(this.S)
              : (this.S(null),
                t.get().then(
                  function (t) {
                    (e.auth = t), e.S && e.auth.addAuthTokenListener(e.S);
                  },
                  function () {}
                ));
        }
        function ui() {
          this._ = null;
        }
        function ai(t, e) {
          var n = Kr.call(this, e) || this;
          return (
            (n.code = t),
            (n.message = e),
            (n.name = "FirebaseError"),
            (n.toString = function () {
              return n.name + ": [code=" + n.code + "]: " + n.message;
            }),
            n
          );
        }
        function hi(t) {
          this.uid = t;
        }
        function ci(t, e) {
          (this.projectId = t), (this.database = e || "(default)");
        }
        function fi(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        function li(t, e) {
          return void 0 !== t ? t : e;
        }
        function pi(t, e) {
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              var r = Number(n);
              isNaN(r) || e(r, t[n]);
            }
        }
        function di(t, e) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
        }
        function vi(t) {
          for (var e in (Gr(
            null != t && "object" == typeof t,
            "isEmpty() expects object parameter."
          ),
          t))
            if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
          return !0;
        }
        function yi(t, e) {
          if (0 !== e.length)
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Function " +
                t +
                "() does not support arguments, but was called with " +
                Li(e.length, "argument") +
                "."
            );
        }
        function mi(t, e, n) {
          if (e.length !== n)
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Function " +
                t +
                "() requires " +
                Li(n, "argument") +
                ", but was called with " +
                Li(e.length, "argument") +
                "."
            );
        }
        function gi(t, e, n) {
          if (e.length < n)
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Function " +
                t +
                "() requires at least " +
                Li(n, "argument") +
                ", but was called with " +
                Li(e.length, "argument") +
                "."
            );
        }
        function wi(t, e, n, r) {
          if (e.length < n || e.length > r)
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Function " +
                t +
                "() requires between " +
                n +
                " and " +
                r +
                " arguments, but was called with " +
                Li(e.length, "argument") +
                "."
            );
        }
        function bi(t, e, n, r) {
          Ai(t, e, xi(n) + " argument", r);
        }
        function Ei(t, e, n, r) {
          void 0 !== r && bi(t, e, n, r);
        }
        function Ii(t, e, n, r) {
          Ai(t, e, n + " option", r);
        }
        function Ti(t, e, n, r) {
          void 0 !== r && Ii(t, e, n, r);
        }
        function Ni(t, e, n, r, h) {
          void 0 !== r &&
            (function (t, e, n, r) {
              for (var i = [], o = 0, s = h; o < s.length; o++) {
                var u = s[o];
                if (u === r) return;
                i.push(Di(u));
              }
              var a = Di(r);
              throw new Zr(
                $r.INVALID_ARGUMENT,
                "Invalid value " +
                  a +
                  " provided to function " +
                  t +
                  '() for option "' +
                  n +
                  '". Acceptable values: ' +
                  i.join(", ")
              );
            })(t, 0, n, r);
        }
        function Ai(t, e, n, r) {
          if (
            !("object" === e
              ? Si(r)
              : "non-empty string" === e
              ? "string" == typeof r && "" !== r
              : typeof r === e)
          ) {
            var i = Di(r);
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Function " +
                t +
                "() requires its " +
                n +
                " to be of type " +
                e +
                ", but it was: " +
                i
            );
          }
        }
        function Si(t) {
          return (
            "object" == typeof t &&
            null !== t &&
            (Object.getPrototypeOf(t) === Object.prototype ||
              null === Object.getPrototypeOf(t))
          );
        }
        function Di(t) {
          if (void 0 === t) return "undefined";
          if (null === t) return "null";
          if ("string" == typeof t)
            return (
              20 < t.length && (t = t.substring(0, 20) + "..."), JSON.stringify(t)
            );
          if ("number" == typeof t || "boolean" == typeof t) return "" + t;
          if ("object" != typeof t)
            return "function" == typeof t
              ? "a function"
              : Vr("Unknown wrong type: " + typeof t);
          if (t instanceof Array) return "an array";
          var e = (function (t) {
            if (t.constructor) {
              var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
              if (e && 1 < e.length) return e[1];
            }
            return null;
          })(t);
          return e ? "a custom " + e + " object" : "an object";
        }
        function ki(t, e, n) {
          if (void 0 === n)
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Function " +
                t +
                "() requires a valid " +
                xi(e) +
                " argument, but it was undefined."
            );
        }
        function Oi(n, t, r) {
          di(t, function (t, e) {
            if (r.indexOf(t) < 0)
              throw new Zr(
                $r.INVALID_ARGUMENT,
                "Unknown option '" +
                  t +
                  "' passed to function " +
                  n +
                  "(). Available options: " +
                  r.join(", ")
              );
          });
        }
        function Ri(t, e, n, r) {
          var i = Di(r);
          return new Zr(
            $r.INVALID_ARGUMENT,
            "Function " +
              t +
              "() requires its " +
              xi(n) +
              " argument to be a " +
              e +
              ", but it was: " +
              i
          );
        }
        function Ci(t, e, n) {
          if (n <= 0)
            throw new Zr(
              $r.INVALID_ARGUMENT,
              'Function "' +
                t +
                '()" requires its ' +
                xi(e) +
                " argument to be a positive number, but it was: " +
                n +
                "."
            );
        }
        function xi(t) {
          switch (t) {
            case 1:
              return "first";
            case 2:
              return "second";
            case 3:
              return "third";
            default:
              return t + "th";
          }
        }
        function Li(t, e) {
          return t + " " + e + (1 === t ? "" : "s");
        }
        var Pi,
          _i,
          Ui =
            (Object.defineProperty(io.prototype, "latitude", {
              get: function () {
                return this.F;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(io.prototype, "longitude", {
              get: function () {
                return this.V;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (io.prototype.isEqual = function (t) {
              return this.F === t.F && this.V === t.V;
            }),
            (io.prototype.U = function (t) {
              return Hr(this.F, t.F) || Hr(this.V, t.V);
            }),
            io),
          Mi =
            ((ro.now = function () {
              return ro.fromMillis(Date.now());
            }),
            (ro.fromDate = function (t) {
              return ro.fromMillis(t.getTime());
            }),
            (ro.fromMillis = function (t) {
              var e = Math.floor(t / 1e3);
              return new ro(e, 1e6 * (t - 1e3 * e));
            }),
            (ro.prototype.toDate = function () {
              return new Date(this.toMillis());
            }),
            (ro.prototype.toMillis = function () {
              return 1e3 * this.seconds + this.nanoseconds / 1e6;
            }),
            (ro.prototype.U = function (t) {
              return this.seconds === t.seconds
                ? Hr(this.nanoseconds, t.nanoseconds)
                : Hr(this.seconds, t.seconds);
            }),
            (ro.prototype.isEqual = function (t) {
              return (
                t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
              );
            }),
            (ro.prototype.toString = function () {
              return (
                "Timestamp(seconds=" +
                this.seconds +
                ", nanoseconds=" +
                this.nanoseconds +
                ")"
              );
            }),
            (ro.prototype.valueOf = function () {
              var t = this.seconds - -62135596800;
              return (
                String(t).padStart(12, "0") +
                "." +
                String(this.nanoseconds).padStart(9, "0")
              );
            }),
            ro),
          qi =
            ((no.j = function (t) {
              var e = Math.floor(t / 1e6);
              return new no(new Mi(e, (t % 1e6) * 1e3));
            }),
            (no.L = function (t) {
              return new no(t);
            }),
            (no.q = function () {
              return no.MIN;
            }),
            (no.prototype.h = function (t) {
              return this.timestamp.U(t.timestamp);
            }),
            (no.prototype.isEqual = function (t) {
              return this.timestamp.isEqual(t.timestamp);
            }),
            (no.prototype.B = function () {
              return (
                1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
              );
            }),
            (no.prototype.toString = function () {
              return "SnapshotVersion(" + this.timestamp.toString() + ")";
            }),
            (no.prototype.M = function () {
              return this.timestamp;
            }),
            (no.MIN = new no(new Mi(0, 0))),
            no),
          Fi =
            (Object.defineProperty(eo.prototype, "length", {
              get: function () {
                return this.len;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (eo.prototype.isEqual = function (t) {
              return 0 === eo.G(this, t);
            }),
            (eo.prototype.child = function (t) {
              var e = this.segments.slice(this.offset, this.limit());
              return (
                t instanceof eo
                  ? t.forEach(function (t) {
                      e.push(t);
                    })
                  : e.push(t),
                this.W(e)
              );
            }),
            (eo.prototype.limit = function () {
              return this.offset + this.length;
            }),
            (eo.prototype.K = function (t) {
              return (
                (t = void 0 === t ? 1 : t),
                Gr(this.length >= t, "Can't call popFirst() with less segments"),
                this.W(this.segments, this.offset + t, this.length - t)
              );
            }),
            (eo.prototype.H = function () {
              return (
                Gr(!this.J(), "Can't call popLast() on empty path"),
                this.W(this.segments, this.offset, this.length - 1)
              );
            }),
            (eo.prototype.Y = function () {
              return (
                Gr(!this.J(), "Can't call firstSegment() on empty path"),
                this.segments[this.offset]
              );
            }),
            (eo.prototype.X = function () {
              return this.get(this.length - 1);
            }),
            (eo.prototype.get = function (t) {
              return (
                Gr(t < this.length, "Index out of range"),
                this.segments[this.offset + t]
              );
            }),
            (eo.prototype.J = function () {
              return 0 === this.length;
            }),
            (eo.prototype.$ = function (t) {
              if (t.length < this.length) return !1;
              for (var e = 0; e < this.length; e++)
                if (this.get(e) !== t.get(e)) return !1;
              return !0;
            }),
            (eo.prototype.Z = function (t) {
              if (this.length + 1 !== t.length) return !1;
              for (var e = 0; e < this.length; e++)
                if (this.get(e) !== t.get(e)) return !1;
              return !0;
            }),
            (eo.prototype.forEach = function (t) {
              for (var e = this.offset, n = this.limit(); e < n; e++)
                t(this.segments[e]);
            }),
            (eo.prototype.tt = function () {
              return this.segments.slice(this.offset, this.limit());
            }),
            (eo.G = function (t, e) {
              for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                var i = t.get(r),
                  o = e.get(r);
                if (i < o) return -1;
                if (o < i) return 1;
              }
              return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
            }),
            eo),
          Vi =
            (t(to, (_i = Fi)),
            (to.prototype.W = function (t, e, n) {
              return new to(t, e, n);
            }),
            (to.prototype.nt = function () {
              return this.tt().join("/");
            }),
            (to.prototype.toString = function () {
              return this.nt();
            }),
            (to.it = function (t) {
              if (0 <= t.indexOf("//"))
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Invalid path (" + t + "). Paths must not contain // in them."
                );
              return new to(
                t.split("/").filter(function (t) {
                  return 0 < t.length;
                })
              );
            }),
            (to.et = new to([])),
            to),
          Gi = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
          ji =
            (t(Zi, (Pi = Fi)),
            (Zi.prototype.W = function (t, e, n) {
              return new Zi(t, e, n);
            }),
            (Zi.rt = function (t) {
              return Gi.test(t);
            }),
            (Zi.prototype.nt = function () {
              return this.tt()
                .map(function (t) {
                  return (
                    (t = t.replace("\\", "\\\\").replace("`", "\\`")),
                    Zi.rt(t) || (t = "`" + t + "`"),
                    t
                  );
                })
                .join(".");
            }),
            (Zi.prototype.toString = function () {
              return this.nt();
            }),
            (Zi.prototype.ut = function () {
              return 1 === this.length && "__name__" === this.get(0);
            }),
            (Zi.st = function () {
              return new Zi(["__name__"]);
            }),
            (Zi.ot = function (t) {
              for (
                var e = [],
                  n = "",
                  r = 0,
                  i = function () {
                    if (0 === n.length)
                      throw new Zr(
                        $r.INVALID_ARGUMENT,
                        "Invalid field path (" +
                          t +
                          "). Paths must not be empty, begin with '.', end with '.', or contain '..'"
                      );
                    e.push(n), (n = "");
                  },
                  o = !1;
                r < t.length;
  
              ) {
                var s = t[r];
                if ("\\" === s) {
                  if (r + 1 === t.length)
                    throw new Zr(
                      $r.INVALID_ARGUMENT,
                      "Path has trailing escape character: " + t
                    );
                  var u = t[r + 1];
                  if ("\\" !== u && "." !== u && "`" !== u)
                    throw new Zr(
                      $r.INVALID_ARGUMENT,
                      "Path has invalid escape sequence: " + t
                    );
                  (n += u), (r += 2);
                } else
                  "`" === s ? (o = !o) : "." !== s || o ? (n += s) : i(), r++;
              }
              if ((i(), o))
                throw new Zr($r.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
              return new Zi(e);
            }),
            (Zi.et = new Zi([])),
            Zi),
          Bi =
            (($i.prototype.ct = function (t) {
              return (
                2 <= this.path.length && this.path.get(this.path.length - 2) === t
              );
            }),
            ($i.prototype.isEqual = function (t) {
              return null !== t && 0 === Vi.G(this.path, t.path);
            }),
            ($i.prototype.toString = function () {
              return this.path.toString();
            }),
            ($i.G = function (t, e) {
              return Vi.G(t.path, e.path);
            }),
            ($i.ht = function (t) {
              return t.length % 2 == 0;
            }),
            ($i.at = function (t) {
              return new $i(new Vi(t.slice()));
            }),
            ($i.ft = function (t) {
              return new $i(Vi.it(t));
            }),
            ($i.EMPTY = new $i(new Vi([]))),
            $i),
          Hi =
            ((Xi.prototype.lt = function (t, e) {
              return new Xi(
                this.G,
                this.root.lt(t, e, this.G).copy(null, null, Wi.dt, null, null)
              );
            }),
            (Xi.prototype.remove = function (t) {
              return new Xi(
                this.G,
                this.root.remove(t, this.G).copy(null, null, Wi.dt, null, null)
              );
            }),
            (Xi.prototype.get = function (t) {
              for (var e = this.root; !e.J(); ) {
                var n = this.G(t, e.key);
                if (0 === n) return e.value;
                n < 0 ? (e = e.left) : 0 < n && (e = e.right);
              }
              return null;
            }),
            (Xi.prototype.indexOf = function (t) {
              for (var e = 0, n = this.root; !n.J(); ) {
                var r = this.G(t, n.key);
                if (0 === r) return e + n.left.size;
                n = r < 0 ? n.left : ((e += n.left.size + 1), n.right);
              }
              return -1;
            }),
            (Xi.prototype.J = function () {
              return this.root.J();
            }),
            Object.defineProperty(Xi.prototype, "size", {
              get: function () {
                return this.root.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Xi.prototype.vt = function () {
              return this.root.vt();
            }),
            (Xi.prototype.wt = function () {
              return this.root.wt();
            }),
            (Xi.prototype.pt = function (t) {
              return this.root.pt(t);
            }),
            (Xi.prototype.forEach = function (n) {
              this.pt(function (t, e) {
                return n(t, e), !1;
              });
            }),
            (Xi.prototype.toString = function () {
              var n = [];
              return (
                this.pt(function (t, e) {
                  return n.push(t + ":" + e), !1;
                }),
                "{" + n.join(", ") + "}"
              );
            }),
            (Xi.prototype.gt = function (t) {
              return this.root.gt(t);
            }),
            (Xi.prototype.bt = function () {
              return new zi(this.root, null, this.G, !1);
            }),
            (Xi.prototype.yt = function (t) {
              return new zi(this.root, t, this.G, !1);
            }),
            (Xi.prototype._t = function () {
              return new zi(this.root, null, this.G, !0);
            }),
            (Xi.prototype.It = function (t) {
              return new zi(this.root, t, this.G, !0);
            }),
            Xi),
          zi =
            ((Ji.prototype.Dt = function () {
              Gr(
                0 < this.Et.length,
                "getNext() called on iterator when hasNext() is false."
              );
              var t = this.Et.pop(),
                e = { key: t.key, value: t.value };
              if (this.Tt)
                for (t = t.left; !t.J(); ) this.Et.push(t), (t = t.right);
              else for (t = t.right; !t.J(); ) this.Et.push(t), (t = t.left);
              return e;
            }),
            (Ji.prototype.St = function () {
              return 0 < this.Et.length;
            }),
            (Ji.prototype.Rt = function () {
              if (0 === this.Et.length) return null;
              var t = this.Et[this.Et.length - 1];
              return { key: t.key, value: t.value };
            }),
            Ji),
          Wi =
            ((Ki.prototype.copy = function (t, e, n, r, i) {
              return new Ki(
                null != t ? t : this.key,
                null != e ? e : this.value,
                null != n ? n : this.color,
                null != r ? r : this.left,
                null != i ? i : this.right
              );
            }),
            (Ki.prototype.J = function () {
              return !1;
            }),
            (Ki.prototype.pt = function (t) {
              return (
                this.left.pt(t) || t(this.key, this.value) || this.right.pt(t)
              );
            }),
            (Ki.prototype.gt = function (t) {
              return (
                this.right.gt(t) || t(this.key, this.value) || this.left.gt(t)
              );
            }),
            (Ki.prototype.min = function () {
              return this.left.J() ? this : this.left.min();
            }),
            (Ki.prototype.vt = function () {
              return this.min().key;
            }),
            (Ki.prototype.wt = function () {
              return this.right.J() ? this.key : this.right.wt();
            }),
            (Ki.prototype.lt = function (t, e, n) {
              var r = this,
                i = n(t, r.key);
              return (r =
                i < 0
                  ? r.copy(null, null, null, r.left.lt(t, e, n), null)
                  : 0 === i
                  ? r.copy(null, e, null, null, null)
                  : r.copy(null, null, null, null, r.right.lt(t, e, n))).Ct();
            }),
            (Ki.prototype.At = function () {
              if (this.left.J()) return Ki.EMPTY;
              var t = this;
              return (
                t.left.Pt() || t.left.left.Pt() || (t = t.kt()),
                (t = t.copy(null, null, null, t.left.At(), null)).Ct()
              );
            }),
            (Ki.prototype.remove = function (t, e) {
              var n,
                r = this;
              if (e(t, r.key) < 0)
                r.left.J() || r.left.Pt() || r.left.left.Pt() || (r = r.kt()),
                  (r = r.copy(null, null, null, r.left.remove(t, e), null));
              else {
                if (
                  (r.left.Pt() && (r = r.Nt()),
                  r.right.J() ||
                    r.right.Pt() ||
                    r.right.left.Pt() ||
                    (r = r.Ot()),
                  0 === e(t, r.key))
                ) {
                  if (r.right.J()) return Ki.EMPTY;
                  (n = r.right.min()),
                    (r = r.copy(n.key, n.value, null, null, r.right.At()));
                }
                r = r.copy(null, null, null, null, r.right.remove(t, e));
              }
              return r.Ct();
            }),
            (Ki.prototype.Pt = function () {
              return this.color;
            }),
            (Ki.prototype.Ct = function () {
              var t = this;
              return (
                t.right.Pt() && !t.left.Pt() && (t = t.Ft()),
                t.left.Pt() && t.left.left.Pt() && (t = t.Nt()),
                t.left.Pt() && t.right.Pt() && (t = t.Vt()),
                t
              );
            }),
            (Ki.prototype.kt = function () {
              var t = this.Vt();
              return (
                t.right.left.Pt() &&
                  (t = (t = (t = t.copy(
                    null,
                    null,
                    null,
                    null,
                    t.right.Nt()
                  )).Ft()).Vt()),
                t
              );
            }),
            (Ki.prototype.Ot = function () {
              var t = this.Vt();
              return t.left.left.Pt() && (t = (t = t.Nt()).Vt()), t;
            }),
            (Ki.prototype.Ft = function () {
              var t = this.copy(null, null, Ki.RED, null, this.right.left);
              return this.right.copy(null, null, this.color, t, null);
            }),
            (Ki.prototype.Nt = function () {
              var t = this.copy(null, null, Ki.RED, this.left.right, null);
              return this.left.copy(null, null, this.color, null, t);
            }),
            (Ki.prototype.Vt = function () {
              var t = this.left.copy(null, null, !this.left.color, null, null),
                e = this.right.copy(null, null, !this.right.color, null, null);
              return this.copy(null, null, !this.color, t, e);
            }),
            (Ki.prototype.Ut = function () {
              var t = this.xt();
              return Math.pow(2, t) <= this.size + 1;
            }),
            (Ki.prototype.xt = function () {
              if (this.Pt() && this.left.Pt())
                throw Vr(
                  "Red node has red child(" + this.key + "," + this.value + ")"
                );
              if (this.right.Pt())
                throw Vr(
                  "Right child of (" + this.key + "," + this.value + ") is red"
                );
              var t = this.left.xt();
              if (t !== this.right.xt()) throw Vr("Black depths differ");
              return t + (this.Pt() ? 0 : 1);
            }),
            (Ki.EMPTY = null),
            (Ki.RED = !0),
            (Ki.dt = !1),
            Ki),
          Qi =
            (Object.defineProperty(Yi.prototype, "key", {
              get: function () {
                throw Vr("LLRBEmptyNode has no key.");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Yi.prototype, "value", {
              get: function () {
                throw Vr("LLRBEmptyNode has no value.");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Yi.prototype, "color", {
              get: function () {
                throw Vr("LLRBEmptyNode has no color.");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Yi.prototype, "left", {
              get: function () {
                throw Vr("LLRBEmptyNode has no left child.");
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Yi.prototype, "right", {
              get: function () {
                throw Vr("LLRBEmptyNode has no right child.");
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Yi.prototype.copy = function (t, e, n, r, i) {
              return this;
            }),
            (Yi.prototype.lt = function (t, e, n) {
              return new Wi(t, e);
            }),
            (Yi.prototype.remove = function (t, e) {
              return this;
            }),
            (Yi.prototype.J = function () {
              return !0;
            }),
            (Yi.prototype.pt = function (t) {
              return !1;
            }),
            (Yi.prototype.gt = function (t) {
              return !1;
            }),
            (Yi.prototype.vt = function () {
              return null;
            }),
            (Yi.prototype.wt = function () {
              return null;
            }),
            (Yi.prototype.Pt = function () {
              return !1;
            }),
            (Yi.prototype.Ut = function () {
              return !0;
            }),
            (Yi.prototype.xt = function () {
              return 0;
            }),
            Yi);
        function Yi() {
          this.size = 0;
        }
        function Ki(t, e, n, r, i) {
          (this.key = t),
            (this.value = e),
            (this.color = null != n ? n : Ki.RED),
            (this.left = null != r ? r : Ki.EMPTY),
            (this.right = null != i ? i : Ki.EMPTY),
            (this.size = this.left.size + 1 + this.right.size);
        }
        function Ji(t, e, n, r) {
          (this.Tt = r), (this.Et = []);
          for (var i = 1; !t.J(); )
            if (((i = e ? n(t.key, e) : 1), r && (i *= -1), i < 0))
              t = this.Tt ? t.left : t.right;
            else {
              if (0 === i) {
                this.Et.push(t);
                break;
              }
              this.Et.push(t), (t = this.Tt ? t.right : t.left);
            }
        }
        function Xi(t, e) {
          (this.G = t), (this.root = e || Wi.EMPTY);
        }
        function $i(t) {
          (this.path = t),
            Gr(
              $i.ht(t),
              "Invalid DocumentKey with an odd number of segments: " +
                t.tt().join("/")
            );
        }
        function Zi() {
          return (null !== Pi && Pi.apply(this, arguments)) || this;
        }
        function to() {
          return (null !== _i && _i.apply(this, arguments)) || this;
        }
        function eo(t, e, n) {
          void 0 === e
            ? (e = 0)
            : e > t.length && Vr("offset " + e + " out of range " + t.length),
            void 0 === n
              ? (n = t.length - e)
              : n > t.length - e &&
                Vr("length " + n + " out of range " + (t.length - e)),
            (this.segments = t),
            (this.offset = e),
            (this.len = n);
        }
        function no(t) {
          this.timestamp = t;
        }
        function ro(t, e) {
          if (((this.seconds = t), (this.nanoseconds = e) < 0))
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Timestamp nanoseconds out of range: " + e
            );
          if (1e9 <= e)
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Timestamp nanoseconds out of range: " + e
            );
          if (t < -62135596800)
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Timestamp seconds out of range: " + t
            );
          if (253402300800 <= t)
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Timestamp seconds out of range: " + t
            );
        }
        function io(t, e) {
          if (
            (mi("GeoPoint", arguments, 2),
            bi("GeoPoint", "number", 1, t),
            bi("GeoPoint", "number", 2, e),
            !isFinite(t) || t < -90 || 90 < t)
          )
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Latitude must be a number between -90 and 90, but was: " + t
            );
          if (!isFinite(e) || e < -180 || 180 < e)
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Longitude must be a number between -180 and 180, but was: " + e
            );
          (this.F = t), (this.V = e);
        }
        Wi.EMPTY = new Qi();
        var oo =
            ((mo.jt = function (t) {
              var e = new mo(t.G);
              return (
                t.forEach(function (t) {
                  e = e.add(t);
                }),
                e
              );
            }),
            (mo.prototype.has = function (t) {
              return null !== this.data.get(t);
            }),
            (mo.prototype.first = function () {
              return this.data.vt();
            }),
            (mo.prototype.last = function () {
              return this.data.wt();
            }),
            Object.defineProperty(mo.prototype, "size", {
              get: function () {
                return this.data.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (mo.prototype.indexOf = function (t) {
              return this.data.indexOf(t);
            }),
            (mo.prototype.forEach = function (n) {
              this.data.pt(function (t, e) {
                return n(t), !1;
              });
            }),
            (mo.prototype.Lt = function (t, e) {
              for (var n = this.data.yt(t[0]); n.St(); ) {
                var r = n.Dt();
                if (0 <= this.G(r.key, t[1])) return;
                e(r.key);
              }
            }),
            (mo.prototype.qt = function (t, e) {
              var n;
              for (n = void 0 !== e ? this.data.yt(e) : this.data.bt(); n.St(); )
                if (!t(n.Dt().key)) return;
            }),
            (mo.prototype.Bt = function (t) {
              var e = this.data.yt(t);
              return e.St() ? e.Dt().key : null;
            }),
            (mo.prototype.bt = function () {
              return new so(this.data.bt());
            }),
            (mo.prototype.yt = function (t) {
              return new so(this.data.yt(t));
            }),
            (mo.prototype.add = function (t) {
              return this.copy(this.data.remove(t).lt(t, !0));
            }),
            (mo.prototype.delete = function (t) {
              return this.has(t) ? this.copy(this.data.remove(t)) : this;
            }),
            (mo.prototype.J = function () {
              return this.data.J();
            }),
            (mo.prototype.Mt = function (t) {
              var e = this;
              return (
                e.size < t.size && ((e = t), (t = this)),
                t.forEach(function (t) {
                  e = e.add(t);
                }),
                e
              );
            }),
            (mo.prototype.isEqual = function (t) {
              if (!(t instanceof mo)) return !1;
              if (this.size !== t.size) return !1;
              for (var e = this.data.bt(), n = t.data.bt(); e.St(); ) {
                var r = e.Dt().key,
                  i = n.Dt().key;
                if (0 !== this.G(r, i)) return !1;
              }
              return !0;
            }),
            (mo.prototype.tt = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                e
              );
            }),
            (mo.prototype.toString = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  return e.push(t);
                }),
                "SortedSet(" + e.toString() + ")"
              );
            }),
            (mo.prototype.copy = function (t) {
              var e = new mo(this.G);
              return (e.data = t), e;
            }),
            mo),
          so =
            ((yo.prototype.Dt = function () {
              return this.Qt.Dt().key;
            }),
            (yo.prototype.St = function () {
              return this.Qt.St();
            }),
            yo),
          uo =
            ((vo.prototype.Gt = function (t, e) {
              return new bs(e, t);
            }),
            (vo.prototype.Wt = function (t, e) {
              return e;
            }),
            (vo.prototype.zt = function (t) {
              return null;
            }),
            (vo.prototype.isEqual = function (t) {
              return t instanceof vo;
            }),
            (vo.instance = new vo()),
            vo),
          ao =
            ((po.prototype.Gt = function (t, e) {
              return this.apply(t);
            }),
            (po.prototype.Wt = function (t, e) {
              return this.apply(t);
            }),
            (po.prototype.apply = function (t) {
              for (
                var n = go(t),
                  e = function (e) {
                    n.find(function (t) {
                      return t.isEqual(e);
                    }) || n.push(e);
                  },
                  r = 0,
                  i = this.elements;
                r < i.length;
                r++
              )
                e(i[r]);
              return new Ss(n);
            }),
            (po.prototype.zt = function (t) {
              return null;
            }),
            (po.prototype.isEqual = function (t) {
              return t instanceof po && zr(t.elements, this.elements);
            }),
            po),
          ho =
            ((lo.prototype.Gt = function (t, e) {
              return this.apply(t);
            }),
            (lo.prototype.Wt = function (t, e) {
              return this.apply(t);
            }),
            (lo.prototype.apply = function (t) {
              for (
                var n = go(t),
                  e = function (e) {
                    n = n.filter(function (t) {
                      return !t.isEqual(e);
                    });
                  },
                  r = 0,
                  i = this.elements;
                r < i.length;
                r++
              )
                e(i[r]);
              return new Ss(n);
            }),
            (lo.prototype.zt = function (t) {
              return null;
            }),
            (lo.prototype.isEqual = function (t) {
              return t instanceof lo && zr(t.elements, this.elements);
            }),
            lo),
          co =
            ((fo.prototype.Gt = function (t, e) {
              var n = this.zt(t);
              if (n instanceof ys && this.Kt instanceof ys) {
                var r = n.Ht + this.Kt.Ht;
                return new ys(r);
              }
              return (r = n.Ht + this.Kt.Ht), new ms(r);
            }),
            (fo.prototype.Wt = function (t, e) {
              return (
                Gr(
                  null !== e,
                  "Didn't receive transformResult for NUMERIC_ADD transform"
                ),
                e
              );
            }),
            (fo.prototype.zt = function (t) {
              return t instanceof Go ? t : new ys(0);
            }),
            (fo.prototype.isEqual = function (t) {
              return t instanceof fo && this.Kt.isEqual(t.Kt);
            }),
            fo);
        function fo(t) {
          this.Kt = t;
        }
        function lo(t) {
          this.elements = t;
        }
        function po(t) {
          this.elements = t;
        }
        function vo() {}
        function yo(t) {
          this.Qt = t;
        }
        function mo(t) {
          (this.G = t), (this.data = new Hi(this.G));
        }
        function go(t) {
          return t instanceof Ss ? t.Ht.slice() : [];
        }
        function wo(t, e) {
          (this.version = t), (this.transformResults = e);
        }
        var bo,
          Eo,
          Io,
          To,
          No,
          Ao,
          So,
          Do,
          ko =
            ((es.Jt = function (t) {
              return new es(t);
            }),
            (es.Yt = function (t) {
              var e = new oo(ji.G);
              return (
                t.forEach(function (t) {
                  return (e = e.add(t));
                }),
                new es(e)
              );
            }),
            (es.prototype.Xt = function (e) {
              var n = !1;
              return (
                this.fields.forEach(function (t) {
                  t.$(e) && (n = !0);
                }),
                n
              );
            }),
            (es.prototype.isEqual = function (t) {
              return this.fields.isEqual(t.fields);
            }),
            es),
          Oo =
            ((ts.prototype.isEqual = function (t) {
              return (
                this.field.isEqual(t.field) && this.transform.isEqual(t.transform)
              );
            }),
            ts),
          Ro =
            ((Zo.exists = function (t) {
              return new Zo(void 0, t);
            }),
            (Zo.updateTime = function (t) {
              return new Zo(t);
            }),
            Object.defineProperty(Zo.prototype, "$t", {
              get: function () {
                return void 0 === this.updateTime && void 0 === this.exists;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Zo.prototype.Zt = function (t) {
              return void 0 !== this.updateTime
                ? t instanceof ks && t.version.isEqual(this.updateTime)
                : void 0 !== this.exists
                ? this.exists === t instanceof ks
                : (Gr(this.$t, "Precondition should be empty"), !0);
            }),
            (Zo.prototype.isEqual = function (t) {
              return (
                (e = this.updateTime),
                (n = t.updateTime),
                (null != e ? !(!n || !e.isEqual(n)) : e === n) &&
                  this.exists === t.exists
              );
              var e, n;
            }),
            (Zo.NONE = new Zo()),
            Zo),
          Co =
            (($o.prototype.tn = function (t) {
              null != t &&
                Gr(
                  t.key.isEqual(this.key),
                  "Can only apply a mutation to a document with the same key"
                );
            }),
            ($o.nn = function (t) {
              return t instanceof ks ? t.version : qi.MIN;
            }),
            $o),
          xo =
            (t(Xo, (Do = Co)),
            (Xo.prototype.Wt = function (t, e) {
              this.tn(t),
                Gr(
                  null == e.transformResults,
                  "Transform results received by SetMutation."
                );
              var n = e.version;
              return new ks(
                this.key,
                n,
                { hasCommittedMutations: !0 },
                this.value
              );
            }),
            (Xo.prototype.Gt = function (t, e, n) {
              if ((this.tn(t), !this.in.Zt(t))) return t;
              var r = Co.nn(t);
              return new ks(this.key, r, { en: !0 }, this.value);
            }),
            (Xo.prototype.rn = function (t) {
              return null;
            }),
            (Xo.prototype.isEqual = function (t) {
              return (
                t instanceof Xo &&
                this.key.isEqual(t.key) &&
                this.value.isEqual(t.value) &&
                this.in.isEqual(t.in)
              );
            }),
            Xo),
          Lo =
            (t(Jo, (So = Co)),
            (Jo.prototype.Wt = function (t, e) {
              if (
                (this.tn(t),
                Gr(
                  null == e.transformResults,
                  "Transform results received by PatchMutation."
                ),
                !this.in.Zt(t))
              )
                return new Rs(this.key, e.version);
              var n = this.sn(t);
              return new ks(
                this.key,
                e.version,
                { hasCommittedMutations: !0 },
                n
              );
            }),
            (Jo.prototype.Gt = function (t, e, n) {
              if ((this.tn(t), !this.in.Zt(t))) return t;
              var r = Co.nn(t),
                i = this.sn(t);
              return new ks(this.key, r, { en: !0 }, i);
            }),
            (Jo.prototype.rn = function (t) {
              return null;
            }),
            (Jo.prototype.isEqual = function (t) {
              return (
                t instanceof Jo &&
                this.key.isEqual(t.key) &&
                this.un.isEqual(t.un) &&
                this.in.isEqual(t.in)
              );
            }),
            (Jo.prototype.sn = function (t) {
              var e;
              return (e = t instanceof ks ? t.data() : Ns.EMPTY), this.on(e);
            }),
            (Jo.prototype.on = function (t) {
              var n = this,
                r = t.hn();
              return (
                this.un.fields.forEach(function (t) {
                  if (!t.J()) {
                    var e = n.data.field(t);
                    null !== e ? r.set(t, e) : r.delete(t);
                  }
                }),
                r.cn()
              );
            }),
            Jo),
          Po =
            (t(Ko, (Ao = Co)),
            (Ko.prototype.Wt = function (t, e) {
              if (
                (this.tn(t),
                Gr(
                  null != e.transformResults,
                  "Transform results missing for TransformMutation."
                ),
                !this.in.Zt(t))
              )
                return new Rs(this.key, e.version);
              var n = this.an(t),
                r = this.fn(t, e.transformResults),
                i = e.version,
                o = this.ln(n.data(), r);
              return new ks(this.key, i, { hasCommittedMutations: !0 }, o);
            }),
            (Ko.prototype.Gt = function (t, e, n) {
              if ((this.tn(t), !this.in.Zt(t))) return t;
              var r = this.an(t),
                i = this.dn(n, t, e),
                o = this.ln(r.data(), i);
              return new ks(this.key, r.version, { en: !0 }, o);
            }),
            (Ko.prototype.rn = function (t) {
              for (
                var e = null, n = 0, r = this.fieldTransforms;
                n < r.length;
                n++
              ) {
                var i = r[n],
                  o = t instanceof ks ? t.field(i.field) : void 0,
                  s = i.transform.zt(o || null);
                null != s &&
                  (e = null == e ? Ns.vn().set(i.field, s) : e.set(i.field, s));
              }
              return e ? e.cn() : null;
            }),
            (Ko.prototype.isEqual = function (t) {
              return (
                t instanceof Ko &&
                this.key.isEqual(t.key) &&
                zr(this.fieldTransforms, t.fieldTransforms) &&
                this.in.isEqual(t.in)
              );
            }),
            (Ko.prototype.an = function (t) {
              return (
                Gr(t instanceof ks, "Unknown MaybeDocument type " + t),
                Gr(
                  t.key.isEqual(this.key),
                  "Can only transform a document with the same key"
                ),
                t
              );
            }),
            (Ko.prototype.fn = function (t, e) {
              var n = [];
              Gr(
                this.fieldTransforms.length === e.length,
                "server transform result count (" +
                  e.length +
                  ") should match field transform count (" +
                  this.fieldTransforms.length +
                  ")"
              );
              for (var r = 0; r < e.length; r++) {
                var i = this.fieldTransforms[r],
                  o = i.transform,
                  s = null;
                t instanceof ks && (s = t.field(i.field)), n.push(o.Wt(s, e[r]));
              }
              return n;
            }),
            (Ko.prototype.dn = function (t, e, n) {
              for (
                var r = [], i = 0, o = this.fieldTransforms;
                i < o.length;
                i++
              ) {
                var s = o[i],
                  u = s.transform,
                  a = null;
                e instanceof ks && (a = e.field(s.field)),
                  null === a && n instanceof ks && (a = n.field(s.field)),
                  r.push(u.Gt(a, t));
              }
              return r;
            }),
            (Ko.prototype.ln = function (t, e) {
              Gr(
                e.length === this.fieldTransforms.length,
                "TransformResults length mismatch."
              );
              for (var n = t.hn(), r = 0; r < this.fieldTransforms.length; r++) {
                var i = this.fieldTransforms[r].field;
                n.set(i, e[r]);
              }
              return n.cn();
            }),
            Ko),
          _o =
            (t(Yo, (No = Co)),
            (Yo.prototype.Wt = function (t, e) {
              return (
                this.tn(t),
                Gr(
                  null == e.transformResults,
                  "Transform results received by DeleteMutation."
                ),
                new Os(this.key, e.version, { hasCommittedMutations: !0 })
              );
            }),
            (Yo.prototype.Gt = function (t, e, n) {
              return (
                this.tn(t),
                this.in.Zt(t)
                  ? (t &&
                      Gr(
                        t.key.isEqual(this.key),
                        "Can only apply mutation to document with same key"
                      ),
                    new Os(this.key, qi.q()))
                  : t
              );
            }),
            (Yo.prototype.rn = function (t) {
              return null;
            }),
            (Yo.prototype.isEqual = function (t) {
              return (
                t instanceof Yo &&
                this.key.isEqual(t.key) &&
                this.in.isEqual(t.in)
              );
            }),
            Yo),
          Uo =
            (t(Qo, (To = Co)),
            (Qo.prototype.Wt = function (t, e) {
              Vr("VerifyMutation should only be used in Transactions.");
            }),
            (Qo.prototype.Gt = function (t, e, n) {
              Vr("VerifyMutation should only be used in Transactions.");
            }),
            (Qo.prototype.rn = function (t) {
              Vr("VerifyMutation should only be used in Transactions.");
            }),
            (Qo.prototype.isEqual = function (t) {
              return (
                t instanceof Qo &&
                this.key.isEqual(t.key) &&
                this.in.isEqual(t.in)
              );
            }),
            Qo),
          Mo =
            ((Wo.mn = function (t, e) {
              switch (t.serverTimestamps) {
                case "estimate":
                  return new Wo(1, e);
                case "previous":
                  return new Wo(2, e);
                case "none":
                case void 0:
                  return new Wo(0, e);
                default:
                  return Vr("fromSnapshotOptions() called with invalid options.");
              }
            }),
            Wo),
          qo =
            ((zo.prototype.toString = function () {
              var t = this.value();
              return null === t ? "null" : t.toString();
            }),
            (zo.prototype.pn = function (t) {
              return (
                Gr(
                  this.gn !== t.gn,
                  "Default compareTo should not be used for values of same type."
                ),
                Hr(this.gn, t.gn)
              );
            }),
            zo),
          Fo =
            (t(Ho, (Io = qo)),
            (Ho.prototype.value = function (t) {
              return null;
            }),
            (Ho.prototype.isEqual = function (t) {
              return t instanceof Ho;
            }),
            (Ho.prototype.h = function (t) {
              return t instanceof Ho ? 0 : this.pn(t);
            }),
            (Ho.prototype.bn = function () {
              return 4;
            }),
            (Ho.yn = new Ho()),
            Ho),
          Vo =
            (t(Bo, (Eo = qo)),
            (Bo.prototype.value = function (t) {
              return this.Ht;
            }),
            (Bo.prototype.isEqual = function (t) {
              return t instanceof Bo && this.Ht === t.Ht;
            }),
            (Bo.prototype.h = function (t) {
              return t instanceof Bo ? Hr(this.Ht, t.Ht) : this.pn(t);
            }),
            (Bo.prototype.bn = function () {
              return 4;
            }),
            (Bo.of = function (t) {
              return t ? Bo._n : Bo.In;
            }),
            (Bo._n = new Bo(!0)),
            (Bo.In = new Bo(!1)),
            Bo),
          Go =
            (t(jo, (bo = qo)),
            (jo.prototype.value = function (t) {
              return this.Ht;
            }),
            (jo.prototype.h = function (t) {
              return t instanceof jo
                ? (e = this.Ht) < (n = t.Ht)
                  ? -1
                  : n < e
                  ? 1
                  : e === n
                  ? 0
                  : isNaN(e)
                  ? isNaN(n)
                    ? 0
                    : -1
                  : 1
                : this.pn(t);
              var e, n;
            }),
            (jo.prototype.bn = function () {
              return 8;
            }),
            jo);
        function jo(t) {
          var e = bo.call(this) || this;
          return (e.Ht = t), (e.gn = 2), e;
        }
        function Bo(t) {
          var e = Eo.call(this) || this;
          return (e.Ht = t), (e.gn = 1), e;
        }
        function Ho() {
          var t = Io.call(this) || this;
          return (t.gn = 0), (t.Ht = null), t;
        }
        function zo() {}
        function Wo(t, e) {
          (this.wn = t), (this.timestampsInSnapshots = e);
        }
        function Qo(t, e) {
          var n = To.call(this) || this;
          return (n.key = t), (n.in = e), (n.type = 4), n;
        }
        function Yo(t, e) {
          var n = No.call(this) || this;
          return (n.key = t), (n.in = e), (n.type = 3), n;
        }
        function Ko(t, e) {
          var n = Ao.call(this) || this;
          return (
            (n.key = t),
            (n.fieldTransforms = e),
            (n.type = 2),
            (n.in = Ro.exists(!0)),
            n
          );
        }
        function Jo(t, e, n, r) {
          var i = So.call(this) || this;
          return (
            (i.key = t), (i.data = e), (i.un = n), (i.in = r), (i.type = 1), i
          );
        }
        function Xo(t, e, n) {
          var r = Do.call(this) || this;
          return (r.key = t), (r.value = e), (r.in = n), (r.type = 0), r;
        }
        function $o() {}
        function Zo(t, e) {
          (this.updateTime = t),
            (this.exists = e),
            Gr(
              void 0 === t || void 0 === e,
              'Precondition can specify "exists" or "updateTime" but not both'
            );
        }
        function ts(t, e) {
          (this.field = t), (this.transform = e);
        }
        function es(t) {
          this.fields = t;
        }
        function ns(t, e) {
          return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
        }
        var rs,
          is,
          os,
          ss,
          us,
          as,
          hs,
          cs,
          fs,
          ls,
          ps,
          ds,
          vs,
          ys =
            (t(zs, (vs = Go)),
            (zs.prototype.isEqual = function (t) {
              return t instanceof zs && ns(this.Ht, t.Ht);
            }),
            zs),
          ms =
            (t(Hs, (ds = Go)),
            (Hs.prototype.isEqual = function (t) {
              return t instanceof Hs && ns(this.Ht, t.Ht);
            }),
            (Hs.Tn = new Hs(NaN)),
            (Hs.POSITIVE_INFINITY = new Hs(1 / 0)),
            (Hs.NEGATIVE_INFINITY = new Hs(-1 / 0)),
            Hs),
          gs =
            (t(Bs, (ps = qo)),
            (Bs.prototype.value = function (t) {
              return this.Ht;
            }),
            (Bs.prototype.isEqual = function (t) {
              return t instanceof Bs && this.Ht === t.Ht;
            }),
            (Bs.prototype.h = function (t) {
              return t instanceof Bs ? Hr(this.Ht, t.Ht) : this.pn(t);
            }),
            (Bs.prototype.bn = function () {
              return 2 * this.Ht.length;
            }),
            Bs),
          ws =
            (t(js, (ls = qo)),
            (js.prototype.value = function (t) {
              return !t || t.timestampsInSnapshots ? this.Ht : this.Ht.toDate();
            }),
            (js.prototype.isEqual = function (t) {
              return t instanceof js && this.Ht.isEqual(t.Ht);
            }),
            (js.prototype.h = function (t) {
              return t instanceof js
                ? this.Ht.U(t.Ht)
                : t instanceof bs
                ? -1
                : this.pn(t);
            }),
            (js.prototype.bn = function () {
              return 16;
            }),
            js),
          bs =
            (t(Gs, (fs = qo)),
            (Gs.prototype.value = function (t) {
              return t && 1 === t.wn
                ? new ws(this.En).value(t)
                : t && 2 === t.wn && this.previousValue
                ? this.previousValue.value(t)
                : null;
            }),
            (Gs.prototype.isEqual = function (t) {
              return t instanceof Gs && this.En.isEqual(t.En);
            }),
            (Gs.prototype.h = function (t) {
              return t instanceof Gs
                ? this.En.U(t.En)
                : t instanceof ws
                ? 1
                : this.pn(t);
            }),
            (Gs.prototype.toString = function () {
              return "<ServerTimestamp localTime=" + this.En.toString() + ">";
            }),
            (Gs.prototype.bn = function () {
              return 16 + (this.previousValue ? this.previousValue.bn() : 0);
            }),
            Gs),
          Es =
            (t(Vs, (cs = qo)),
            (Vs.prototype.value = function (t) {
              return this.Ht;
            }),
            (Vs.prototype.isEqual = function (t) {
              return t instanceof Vs && this.Ht.isEqual(t.Ht);
            }),
            (Vs.prototype.h = function (t) {
              return t instanceof Vs ? this.Ht.U(t.Ht) : this.pn(t);
            }),
            (Vs.prototype.bn = function () {
              return this.Ht.Dn();
            }),
            Vs),
          Is =
            (t(Fs, (hs = qo)),
            (Fs.prototype.value = function (t) {
              return this.key;
            }),
            (Fs.prototype.isEqual = function (t) {
              return (
                t instanceof Fs && this.key.isEqual(t.key) && this.s.isEqual(t.s)
              );
            }),
            (Fs.prototype.h = function (t) {
              if (t instanceof Fs) {
                var e = this.s.h(t.s);
                return 0 !== e ? e : Bi.G(this.key, t.key);
              }
              return this.pn(t);
            }),
            (Fs.prototype.bn = function () {
              return (
                this.s.projectId.length +
                this.s.database.length +
                this.key.toString().length
              );
            }),
            Fs),
          Ts =
            (t(qs, (as = qo)),
            (qs.prototype.value = function (t) {
              return this.Ht;
            }),
            (qs.prototype.isEqual = function (t) {
              return t instanceof qs && this.Ht.isEqual(t.Ht);
            }),
            (qs.prototype.h = function (t) {
              return t instanceof qs ? this.Ht.U(t.Ht) : this.pn(t);
            }),
            (qs.prototype.bn = function () {
              return 16;
            }),
            qs),
          Ns =
            (t(Ms, (us = qo)),
            (Ms.vn = function () {
              return new As(Ms.EMPTY.Ht);
            }),
            (Ms.prototype.value = function (n) {
              var r = {};
              return (
                this.Ht.pt(function (t, e) {
                  r[t] = e.value(n);
                }),
                r
              );
            }),
            (Ms.prototype.forEach = function (t) {
              this.Ht.pt(t);
            }),
            (Ms.prototype.isEqual = function (t) {
              if (t instanceof Ms) {
                for (var e = this.Ht.bt(), n = t.Ht.bt(); e.St() && n.St(); ) {
                  var r = e.Dt(),
                    i = n.Dt();
                  if (r.key !== i.key || !r.value.isEqual(i.value)) return !1;
                }
                return !e.St() && !n.St();
              }
              return !1;
            }),
            (Ms.prototype.h = function (t) {
              if (t instanceof Ms) {
                for (var e = this.Ht.bt(), n = t.Ht.bt(); e.St() && n.St(); ) {
                  var r = e.Dt(),
                    i = n.Dt(),
                    o = Hr(r.key, i.key) || r.value.h(i.value);
                  if (o) return o;
                }
                return Hr(e.St(), n.St());
              }
              return this.pn(t);
            }),
            (Ms.prototype.contains = function (t) {
              return null !== this.field(t);
            }),
            (Ms.prototype.field = function (t) {
              Gr(!t.J(), "Can't get field of empty path");
              var e = this;
              return (
                t.forEach(function (t) {
                  e = e instanceof Ms ? e.Ht.get(t) : null;
                }),
                e
              );
            }),
            (Ms.prototype.un = function () {
              var i = new oo(ji.G);
              return (
                this.Ht.forEach(function (t, e) {
                  var n = new ji([t]);
                  if (e instanceof Ms) {
                    var r = e.un().fields;
                    r.J()
                      ? (i = i.add(n))
                      : r.forEach(function (t) {
                          i = i.add(n.child(t));
                        });
                  } else i = i.add(n);
                }),
                ko.Jt(i)
              );
            }),
            (Ms.prototype.bn = function () {
              var n = 0;
              return (
                this.Ht.pt(function (t, e) {
                  n += t.length + e.bn();
                }),
                n
              );
            }),
            (Ms.prototype.toString = function () {
              return this.Ht.toString();
            }),
            (Ms.prototype.hn = function () {
              return new As(this.Ht);
            }),
            (Ms.EMPTY = new Ms(new Hi(Hr))),
            Ms),
          As =
            ((Us.prototype.set = function (t, e) {
              Gr(!t.J(), "Cannot set field for empty path on ObjectValue");
              var n = t.Y();
              if (1 === t.length) this.Ht = this.Ht.lt(n, e);
              else {
                var r = this.Ht.get(n),
                  i = (r instanceof Ns ? r : Ns.EMPTY).hn().set(t.K(), e).cn();
                this.Ht = this.Ht.lt(n, i);
              }
              return this;
            }),
            (Us.prototype.delete = function (t) {
              Gr(!t.J(), "Cannot delete field for empty path on ObjectValue");
              var e = t.Y();
              if (1 === t.length) this.Ht = this.Ht.remove(e);
              else {
                var n = this.Ht.get(e);
                if (n instanceof Ns) {
                  var r = n.hn().delete(t.K()).cn();
                  this.Ht = this.Ht.lt(t.Y(), r);
                }
              }
              return this;
            }),
            (Us.prototype.cn = function () {
              return new Ns(this.Ht);
            }),
            Us),
          Ss =
            (t(_s, (ss = qo)),
            (_s.prototype.value = function (e) {
              return this.Ht.map(function (t) {
                return t.value(e);
              });
            }),
            (_s.prototype.contains = function (t) {
              for (var e = 0, n = this.Ht; e < n.length; e++)
                if (n[e].isEqual(t)) return !0;
              return !1;
            }),
            (_s.prototype.forEach = function (t) {
              this.Ht.forEach(t);
            }),
            (_s.prototype.isEqual = function (t) {
              if (t instanceof _s) {
                if (this.Ht.length !== t.Ht.length) return !1;
                for (var e = 0; e < this.Ht.length; e++)
                  if (!this.Ht[e].isEqual(t.Ht[e])) return !1;
                return !0;
              }
              return !1;
            }),
            (_s.prototype.h = function (t) {
              if (t instanceof _s) {
                for (
                  var e = Math.min(this.Ht.length, t.Ht.length), n = 0;
                  n < e;
                  n++
                ) {
                  var r = this.Ht[n].h(t.Ht[n]);
                  if (r) return r;
                }
                return Hr(this.Ht.length, t.Ht.length);
              }
              return this.pn(t);
            }),
            (_s.prototype.bn = function () {
              return this.Ht.reduce(function (t, e) {
                return t + e.bn();
              }, 0);
            }),
            (_s.prototype.toString = function () {
              return (
                "[" +
                this.Ht.map(function (t) {
                  return t.toString();
                }).join(",") +
                "]"
              );
            }),
            _s),
          Ds =
            ((Ps.Sn = function (t, e) {
              return Bi.G(t.key, e.key);
            }),
            Ps),
          ks =
            (t(Ls, (os = Ds)),
            (Ls.prototype.field = function (t) {
              if (this.Rn) return this.Rn.field(t);
              this.Cn || (this.Cn = new Map());
              var e = t.nt(),
                n = this.Cn.get(e);
              if (void 0 === n) {
                var r = this.An(t);
                (n = void 0 === r ? null : this.converter(r)), this.Cn.set(e, n);
              }
              return n;
            }),
            (Ls.prototype.data = function () {
              var n = this;
              if (!this.Rn) {
                var r = Ns.vn();
                di(this.proto.fields || {}, function (t, e) {
                  r.set(new ji([t]), n.converter(e));
                }),
                  (this.Rn = r.cn()),
                  (this.Cn = void 0);
              }
              return this.Rn;
            }),
            (Ls.prototype.value = function () {
              return this.data().value();
            }),
            (Ls.prototype.isEqual = function (t) {
              return (
                t instanceof Ls &&
                this.key.isEqual(t.key) &&
                this.version.isEqual(t.version) &&
                this.en === t.en &&
                this.hasCommittedMutations === t.hasCommittedMutations &&
                this.data().isEqual(t.data())
              );
            }),
            (Ls.prototype.toString = function () {
              return (
                "Document(" +
                this.key +
                ", " +
                this.version +
                ", " +
                this.data().toString() +
                ", {hasLocalMutations: " +
                this.en +
                "}), {hasCommittedMutations: " +
                this.hasCommittedMutations +
                "})"
              );
            }),
            Object.defineProperty(Ls.prototype, "hasPendingWrites", {
              get: function () {
                return this.en || this.hasCommittedMutations;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Ls.prototype.An = function (t) {
              Gr(
                void 0 !== this.proto,
                "Can only call getProtoField() when proto is defined"
              );
              for (
                var e = this.proto.fields ? this.proto.fields[t.Y()] : void 0,
                  n = 1;
                n < t.length;
                ++n
              ) {
                if (!e || !e.mapValue || !e.mapValue.fields) return;
                e = e.mapValue.fields[t.get(n)];
              }
              return e;
            }),
            (Ls.Pn = function (t, e, n) {
              var r = e.field(t),
                i = n.field(t);
              return null !== r && null !== i
                ? r.h(i)
                : Vr("Trying to compare documents on fields that don't exist");
            }),
            Ls),
          Os =
            (t(xs, (is = Ds)),
            (xs.prototype.toString = function () {
              return "NoDocument(" + this.key + ", " + this.version + ")";
            }),
            Object.defineProperty(xs.prototype, "hasPendingWrites", {
              get: function () {
                return this.hasCommittedMutations;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (xs.prototype.isEqual = function (t) {
              return (
                t instanceof xs &&
                t.hasCommittedMutations === this.hasCommittedMutations &&
                t.version.isEqual(this.version) &&
                t.key.isEqual(this.key)
              );
            }),
            xs),
          Rs =
            (t(Cs, (rs = Ds)),
            (Cs.prototype.toString = function () {
              return "UnknownDocument(" + this.key + ", " + this.version + ")";
            }),
            Object.defineProperty(Cs.prototype, "hasPendingWrites", {
              get: function () {
                return !0;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Cs.prototype.isEqual = function (t) {
              return (
                t instanceof Cs &&
                t.version.isEqual(this.version) &&
                t.key.isEqual(this.key)
              );
            }),
            Cs);
        function Cs() {
          return (null !== rs && rs.apply(this, arguments)) || this;
        }
        function xs(t, e, n) {
          var r = is.call(this, t, e) || this;
          return (r.hasCommittedMutations = !(!n || !n.hasCommittedMutations)), r;
        }
        function Ls(t, e, n, r, i, o) {
          var s = os.call(this, t, e) || this;
          return (
            (s.Rn = r),
            (s.proto = i),
            (s.converter = o),
            Gr(
              void 0 !== s.Rn || (void 0 !== s.proto && void 0 !== s.converter),
              "If objectValue is not defined, proto and converter need to be set."
            ),
            (s.en = !!n.en),
            (s.hasCommittedMutations = !!n.hasCommittedMutations),
            s
          );
        }
        function Ps(t, e) {
          (this.key = t), (this.version = e);
        }
        function _s(t) {
          var e = ss.call(this) || this;
          return (e.Ht = t), (e.gn = 8), e;
        }
        function Us(t) {
          this.Ht = t;
        }
        function Ms(t) {
          var e = us.call(this) || this;
          return (e.Ht = t), (e.gn = 9), e;
        }
        function qs(t) {
          var e = as.call(this) || this;
          return (e.Ht = t), (e.gn = 7), e;
        }
        function Fs(t, e) {
          var n = hs.call(this) || this;
          return (n.s = t), (n.key = e), (n.gn = 6), n;
        }
        function Vs(t) {
          var e = cs.call(this) || this;
          return (e.Ht = t), (e.gn = 5), e;
        }
        function Gs(t, e) {
          var n = fs.call(this) || this;
          return (n.En = t), (n.previousValue = e), (n.gn = 3), n;
        }
        function js(t) {
          var e = ls.call(this) || this;
          return (e.Ht = t), (e.gn = 3), e;
        }
        function Bs(t) {
          var e = ps.call(this) || this;
          return (e.Ht = t), (e.gn = 4), e;
        }
        function Hs() {
          return (null !== ds && ds.apply(this, arguments)) || this;
        }
        function zs() {
          return (null !== vs && vs.apply(this, arguments)) || this;
        }
        function Ws(t) {
          return null == t;
        }
        function Qs(t) {
          return -0 === t && 1 / t == -1 / 0;
        }
        function Ys(t) {
          return (
            "number" == typeof t &&
            Number.isInteger(t) &&
            !Qs(t) &&
            t <= Number.MAX_SAFE_INTEGER &&
            t >= Number.MIN_SAFE_INTEGER
          );
        }
        var Ks,
          Js,
          Xs,
          $s,
          Zs,
          tu,
          eu =
            ((ku.prototype.canonicalId = function () {
              if (null === this.kn) {
                var t = this.path.nt();
                null !== this.collectionGroup &&
                  (t += "|cg:" + this.collectionGroup),
                  (t += "|f:");
                for (var e = 0, n = this.filters; e < n.length; e++)
                  (t += n[e].canonicalId()), (t += ",");
                t += "|ob:";
                for (var r = 0, i = this.orderBy; r < i.length; r++)
                  (t += i[r].canonicalId()), (t += ",");
                Ws(this.limit) || ((t += "|l:"), (t += this.limit)),
                  this.startAt &&
                    ((t += "|lb:"), (t += this.startAt.canonicalId())),
                  this.endAt && ((t += "|ub:"), (t += this.endAt.canonicalId())),
                  (this.kn = t);
              }
              return this.kn;
            }),
            (ku.prototype.toString = function () {
              var t = this.path.nt();
              return (
                null !== this.collectionGroup &&
                  (t += " collectionGroup=" + this.collectionGroup),
                0 < this.filters.length &&
                  (t += ", filters: [" + this.filters.join(", ") + "]"),
                Ws(this.limit) || (t += ", limit: " + this.limit),
                0 < this.orderBy.length &&
                  (t += ", orderBy: [" + this.orderBy.join(", ") + "]"),
                this.startAt && (t += ", startAt: " + this.startAt.canonicalId()),
                this.endAt && (t += ", endAt: " + this.endAt.canonicalId()),
                "Target(" + t + ")"
              );
            }),
            (ku.prototype.isEqual = function (t) {
              if (this.limit !== t.limit) return !1;
              if (this.orderBy.length !== t.orderBy.length) return !1;
              for (var e = 0; e < this.orderBy.length; e++)
                if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
              if (this.filters.length !== t.filters.length) return !1;
              for (e = 0; e < this.filters.length; e++)
                if (!this.filters[e].isEqual(t.filters[e])) return !1;
              return (
                this.collectionGroup === t.collectionGroup &&
                !!this.path.isEqual(t.path) &&
                !(null !== this.startAt
                  ? !this.startAt.isEqual(t.startAt)
                  : null !== t.startAt) &&
                (null !== this.endAt
                  ? this.endAt.isEqual(t.endAt)
                  : null === t.endAt)
              );
            }),
            (ku.prototype.Nn = function () {
              return (
                Bi.ht(this.path) &&
                null === this.collectionGroup &&
                0 === this.filters.length
              );
            }),
            ku),
          nu =
            ((Du.jn = function (t) {
              return new Du(t);
            }),
            Object.defineProperty(Du.prototype, "orderBy", {
              get: function () {
                if (null === this.Vn) {
                  var t = this.Ln(),
                    e = this.qn();
                  if (null !== t && null === e)
                    t.ut() ? (this.Vn = [pu]) : (this.Vn = [new lu(t), pu]);
                  else {
                    Gr(
                      null === t || (null !== e && t.isEqual(e)),
                      "First orderBy should match inequality field."
                    );
                    for (
                      var n = !(this.Vn = []), r = 0, i = this.On;
                      r < i.length;
                      r++
                    ) {
                      var o = i[r];
                      this.Vn.push(o), o.field.ut() && (n = !0);
                    }
                    if (!n) {
                      var s =
                        0 < this.On.length
                          ? this.On[this.On.length - 1].dir
                          : cu.ASCENDING;
                      this.Vn.push(s === cu.ASCENDING ? pu : du);
                    }
                  }
                }
                return this.Vn;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Du.prototype.Bn = function (t) {
              Gr(
                null == this.Ln() ||
                  !(t instanceof iu) ||
                  !t.Mn() ||
                  t.field.isEqual(this.Ln()),
                "Query must only have one inequality field."
              ),
                Gr(!this.Nn(), "No filtering allowed for document query");
              var e = this.filters.concat([t]);
              return new Du(
                this.path,
                this.collectionGroup,
                this.On.slice(),
                e,
                this.limit,
                this.Fn,
                this.startAt,
                this.endAt
              );
            }),
            (Du.prototype.Qn = function (t) {
              Gr(
                !this.startAt && !this.endAt,
                "Bounds must be set after orderBy"
              );
              var e = this.On.concat([t]);
              return new Du(
                this.path,
                this.collectionGroup,
                e,
                this.filters.slice(),
                this.limit,
                this.Fn,
                this.startAt,
                this.endAt
              );
            }),
            (Du.prototype.Gn = function (t) {
              return new Du(
                this.path,
                this.collectionGroup,
                this.On.slice(),
                this.filters.slice(),
                t,
                "F",
                this.startAt,
                this.endAt
              );
            }),
            (Du.prototype.Wn = function (t) {
              return new Du(
                this.path,
                this.collectionGroup,
                this.On.slice(),
                this.filters.slice(),
                t,
                "L",
                this.startAt,
                this.endAt
              );
            }),
            (Du.prototype.zn = function (t) {
              return new Du(
                this.path,
                this.collectionGroup,
                this.On.slice(),
                this.filters.slice(),
                this.limit,
                this.Fn,
                t,
                this.endAt
              );
            }),
            (Du.prototype.Kn = function (t) {
              return new Du(
                this.path,
                this.collectionGroup,
                this.On.slice(),
                this.filters.slice(),
                this.limit,
                this.Fn,
                this.startAt,
                t
              );
            }),
            (Du.prototype.Hn = function (t) {
              return new Du(
                t,
                null,
                this.On.slice(),
                this.filters.slice(),
                this.limit,
                this.Fn,
                this.startAt,
                this.endAt
              );
            }),
            (Du.prototype.Jn = function () {
              return (
                0 === this.filters.length &&
                null === this.limit &&
                null == this.startAt &&
                null == this.endAt &&
                (0 === this.On.length ||
                  (1 === this.On.length && this.On[0].field.ut()))
              );
            }),
            (Du.prototype.canonicalId = function () {
              return this.Yn().canonicalId() + "|lt:" + this.Fn;
            }),
            (Du.prototype.toString = function () {
              return (
                "Query(target=" +
                this.Yn().toString() +
                "; limitType=" +
                this.Fn +
                ")"
              );
            }),
            (Du.prototype.isEqual = function (t) {
              return this.Yn().isEqual(t.Yn()) && this.Fn === t.Fn;
            }),
            (Du.prototype.Xn = function (t, e) {
              for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
                var o = i[r],
                  s = o.compare(t, e);
                if (0 !== s) return s;
                n = n || o.field.ut();
              }
              return Gr(n, "orderBy used that doesn't compare on key field"), 0;
            }),
            (Du.prototype.matches = function (t) {
              return this.$n(t) && this.Zn(t) && this.ti(t) && this.ni(t);
            }),
            (Du.prototype.ii = function () {
              return !Ws(this.limit) && "F" === this.Fn;
            }),
            (Du.prototype.ei = function () {
              return !Ws(this.limit) && "L" === this.Fn;
            }),
            (Du.prototype.qn = function () {
              return 0 < this.On.length ? this.On[0].field : null;
            }),
            (Du.prototype.Ln = function () {
              for (var t = 0, e = this.filters; t < e.length; t++) {
                var n = e[t];
                if (n instanceof iu && n.Mn()) return n.field;
              }
              return null;
            }),
            (Du.prototype.ri = function (t) {
              for (var e = 0, n = this.filters; e < n.length; e++) {
                var r = n[e];
                if (r instanceof iu && 0 <= t.indexOf(r.op)) return r.op;
              }
              return null;
            }),
            (Du.prototype.Nn = function () {
              return this.Yn().Nn();
            }),
            (Du.prototype.ui = function () {
              return null !== this.collectionGroup;
            }),
            (Du.prototype.Yn = function () {
              if (!this.Un)
                if ("F" === this.Fn)
                  this.Un = new eu(
                    this.path,
                    this.collectionGroup,
                    this.orderBy,
                    this.filters,
                    this.limit,
                    this.startAt,
                    this.endAt
                  );
                else {
                  for (var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
                    var r = n[e],
                      i = r.dir === cu.DESCENDING ? cu.ASCENDING : cu.DESCENDING;
                    t.push(new lu(r.field, i));
                  }
                  var o = this.endAt
                      ? new fu(this.endAt.position, !this.endAt.before)
                      : null,
                    s = this.startAt
                      ? new fu(this.startAt.position, !this.startAt.before)
                      : null;
                  this.Un = new eu(
                    this.path,
                    this.collectionGroup,
                    t,
                    this.filters,
                    this.limit,
                    o,
                    s
                  );
                }
              return this.Un;
            }),
            (Du.prototype.$n = function (t) {
              var e = t.key.path;
              return null !== this.collectionGroup
                ? t.key.ct(this.collectionGroup) && this.path.$(e)
                : Bi.ht(this.path)
                ? this.path.isEqual(e)
                : this.path.Z(e);
            }),
            (Du.prototype.Zn = function (t) {
              for (var e = 0, n = this.On; e < n.length; e++) {
                var r = n[e];
                if (!r.field.ut() && null === t.field(r.field)) return !1;
              }
              return !0;
            }),
            (Du.prototype.ti = function (t) {
              for (var e = 0, n = this.filters; e < n.length; e++)
                if (!n[e].matches(t)) return !1;
              return !0;
            }),
            (Du.prototype.ni = function (t) {
              return !(
                (this.startAt && !this.startAt.si(this.orderBy, t)) ||
                (this.endAt && this.endAt.si(this.orderBy, t))
              );
            }),
            (Du.prototype.xn = function (t) {
              Gr(
                t.position.length <= this.orderBy.length,
                "Bound is longer than orderBy"
              );
            }),
            Du),
          ru =
            ((Su.it = function (t) {
              switch (t) {
                case "<":
                  return Su.LESS_THAN;
                case "<=":
                  return Su.LESS_THAN_OR_EQUAL;
                case "==":
                  return Su.EQUAL;
                case ">=":
                  return Su.GREATER_THAN_OR_EQUAL;
                case ">":
                  return Su.GREATER_THAN;
                case "array-contains":
                  return Su.ARRAY_CONTAINS;
                case "in":
                  return Su.IN;
                case "array-contains-any":
                  return Su.ARRAY_CONTAINS_ANY;
                default:
                  return Vr("Unknown FieldFilter operator: " + t);
              }
            }),
            (Su.prototype.toString = function () {
              return this.name;
            }),
            (Su.prototype.isEqual = function (t) {
              return this.name === t.name;
            }),
            (Su.LESS_THAN = new Su("<")),
            (Su.LESS_THAN_OR_EQUAL = new Su("<=")),
            (Su.EQUAL = new Su("==")),
            (Su.GREATER_THAN = new Su(">")),
            (Su.GREATER_THAN_OR_EQUAL = new Su(">=")),
            (Su.ARRAY_CONTAINS = new Su("array-contains")),
            (Su.IN = new Su("in")),
            (Su.ARRAY_CONTAINS_ANY = new Su("array-contains-any")),
            Su),
          iu =
            (t(Au, (tu = function () {})),
            (Au.create = function (t, e, n) {
              if (t.ut())
                return e === ru.IN
                  ? (Gr(
                      n instanceof Ss,
                      "Comparing on key with IN, but filter value not an ArrayValue"
                    ),
                    Gr(
                      n.Ht.every(function (t) {
                        return t instanceof Is;
                      }),
                      "Comparing on key with IN, but an array value was not a RefValue"
                    ),
                    new su(t, n))
                  : (Gr(
                      n instanceof Is,
                      "Comparing on key, but filter value not a RefValue"
                    ),
                    Gr(
                      e !== ru.ARRAY_CONTAINS && e !== ru.ARRAY_CONTAINS_ANY,
                      "'" +
                        e.toString() +
                        "' queries don't make sense on document keys."
                    ),
                    new ou(t, e, n));
              if (n.isEqual(Fo.yn)) {
                if (e !== ru.EQUAL)
                  throw new Zr(
                    $r.INVALID_ARGUMENT,
                    "Invalid query. Null supports only equality comparisons."
                  );
                return new Au(t, e, n);
              }
              if (n.isEqual(ms.Tn)) {
                if (e !== ru.EQUAL)
                  throw new Zr(
                    $r.INVALID_ARGUMENT,
                    "Invalid query. NaN supports only equality comparisons."
                  );
                return new Au(t, e, n);
              }
              return e === ru.ARRAY_CONTAINS
                ? new uu(t, n)
                : e === ru.IN
                ? (Gr(
                    n instanceof Ss,
                    "IN filter has invalid value: " + n.toString()
                  ),
                  new au(t, n))
                : e === ru.ARRAY_CONTAINS_ANY
                ? (Gr(
                    n instanceof Ss,
                    "ARRAY_CONTAINS_ANY filter has invalid value: " + n.toString()
                  ),
                  new hu(t, n))
                : new Au(t, e, n);
            }),
            (Au.prototype.matches = function (t) {
              var e = t.field(this.field);
              return (
                null !== e && this.value.gn === e.gn && this.oi(e.h(this.value))
              );
            }),
            (Au.prototype.oi = function (t) {
              switch (this.op) {
                case ru.LESS_THAN:
                  return t < 0;
                case ru.LESS_THAN_OR_EQUAL:
                  return t <= 0;
                case ru.EQUAL:
                  return 0 === t;
                case ru.GREATER_THAN:
                  return 0 < t;
                case ru.GREATER_THAN_OR_EQUAL:
                  return 0 <= t;
                default:
                  return Vr("Unknown FieldFilter operator: " + this.op);
              }
            }),
            (Au.prototype.Mn = function () {
              return (
                0 <=
                [
                  ru.LESS_THAN,
                  ru.LESS_THAN_OR_EQUAL,
                  ru.GREATER_THAN,
                  ru.GREATER_THAN_OR_EQUAL,
                ].indexOf(this.op)
              );
            }),
            (Au.prototype.canonicalId = function () {
              return this.field.nt() + this.op.toString() + this.value.toString();
            }),
            (Au.prototype.isEqual = function (t) {
              return (
                t instanceof Au &&
                this.op.isEqual(t.op) &&
                this.field.isEqual(t.field) &&
                this.value.isEqual(t.value)
              );
            }),
            (Au.prototype.toString = function () {
              return this.field.nt() + " " + this.op + " " + this.value.value();
            }),
            Au),
          ou =
            (t(Nu, (Zs = iu)),
            (Nu.prototype.matches = function (t) {
              var e = this.value,
                n = Bi.G(t.key, e.key);
              return this.oi(n);
            }),
            Nu),
          su =
            (t(Tu, ($s = iu)),
            (Tu.prototype.matches = function (e) {
              return this.value.Ht.some(function (t) {
                return e.key.isEqual(t.key);
              });
            }),
            Tu),
          uu =
            (t(Iu, (Xs = iu)),
            (Iu.prototype.matches = function (t) {
              var e = t.field(this.field);
              return e instanceof Ss && e.contains(this.value);
            }),
            Iu),
          au =
            (t(Eu, (Js = iu)),
            (Eu.prototype.matches = function (t) {
              var e = this.value,
                n = t.field(this.field);
              return null !== n && e.contains(n);
            }),
            Eu),
          hu =
            (t(bu, (Ks = iu)),
            (bu.prototype.matches = function (t) {
              var e = this,
                n = t.field(this.field);
              return (
                n instanceof Ss &&
                n.Ht.some(function (t) {
                  return e.value.contains(t);
                })
              );
            }),
            bu),
          cu =
            ((wu.prototype.toString = function () {
              return this.name;
            }),
            (wu.ASCENDING = new wu("asc")),
            (wu.DESCENDING = new wu("desc")),
            wu),
          fu =
            ((gu.prototype.canonicalId = function () {
              for (
                var t = this.before ? "b:" : "a:", e = 0, n = this.position;
                e < n.length;
                e++
              )
                t += n[e].toString();
              return t;
            }),
            (gu.prototype.si = function (t, e) {
              Gr(
                this.position.length <= t.length,
                "Bound has more components than query's orderBy"
              );
              for (var n = 0, r = 0; r < this.position.length; r++) {
                var i = t[r],
                  o = this.position[r];
                if (i.field.ut())
                  Gr(
                    o instanceof Is,
                    "Bound has a non-key value where the key path is being used."
                  ),
                    (n = Bi.G(o.key, e.key));
                else {
                  var s = e.field(i.field);
                  Gr(
                    null !== s,
                    "Field should exist since document matched the orderBy already."
                  ),
                    (n = o.h(s));
                }
                if ((i.dir === cu.DESCENDING && (n *= -1), 0 !== n)) break;
              }
              return this.before ? n <= 0 : n < 0;
            }),
            (gu.prototype.isEqual = function (t) {
              if (null === t) return !1;
              if (
                this.before !== t.before ||
                this.position.length !== t.position.length
              )
                return !1;
              for (var e = 0; e < this.position.length; e++) {
                var n = this.position[e],
                  r = t.position[e];
                if (!n.isEqual(r)) return !1;
              }
              return !0;
            }),
            gu),
          lu =
            ((mu.prototype.compare = function (t, e) {
              var n = this.hi ? ks.Sn(t, e) : ks.Pn(this.field, t, e);
              switch (this.dir) {
                case cu.ASCENDING:
                  return n;
                case cu.DESCENDING:
                  return -1 * n;
                default:
                  return Vr("Unknown direction: " + this.dir);
              }
            }),
            (mu.prototype.canonicalId = function () {
              return this.field.nt() + this.dir.toString();
            }),
            (mu.prototype.toString = function () {
              return this.field.nt() + " (" + this.dir + ")";
            }),
            (mu.prototype.isEqual = function (t) {
              return this.dir === t.dir && this.field.isEqual(t.field);
            }),
            mu),
          pu = new lu(ji.st(), cu.ASCENDING),
          du = new lu(ji.st(), cu.DESCENDING),
          vu =
            ((yu.fromBase64String = function (t) {
              return new yu(Ta.t().atob(t));
            }),
            (yu.fromUint8Array = function (t) {
              return new yu(Ou(t));
            }),
            (yu.prototype.toBase64 = function () {
              return Ta.t().btoa(this.ci);
            }),
            (yu.prototype.toUint8Array = function () {
              return Ru(this.ci);
            }),
            (yu.prototype.bn = function () {
              return 2 * this.ci.length;
            }),
            (yu.prototype.isEqual = function (t) {
              return this.ci === t.ci;
            }),
            (yu.ai = new yu("")),
            yu);
        function yu(t) {
          this.ci = t;
        }
        function mu(t, e) {
          (this.field = t),
            void 0 === e && (e = cu.ASCENDING),
            (this.dir = e),
            (this.hi = t.ut());
        }
        function gu(t, e) {
          (this.position = t), (this.before = e);
        }
        function wu(t) {
          this.name = t;
        }
        function bu(t, e) {
          var n = Ks.call(this, t, ru.ARRAY_CONTAINS_ANY, e) || this;
          return (n.value = e), n;
        }
        function Eu(t, e) {
          var n = Js.call(this, t, ru.IN, e) || this;
          return (n.value = e), n;
        }
        function Iu(t, e) {
          return Xs.call(this, t, ru.ARRAY_CONTAINS, e) || this;
        }
        function Tu(t, e) {
          var n = $s.call(this, t, ru.IN, e) || this;
          return (n.value = e), n;
        }
        function Nu() {
          return (null !== Zs && Zs.apply(this, arguments)) || this;
        }
        function Au(t, e, n) {
          var r = tu.call(this) || this;
          return (r.field = t), (r.op = e), (r.value = n), r;
        }
        function Su(t) {
          this.name = t;
        }
        function Du(t, e, n, r, i, o, s, u) {
          void 0 === e && (e = null),
            void 0 === n && (n = []),
            void 0 === r && (r = []),
            void 0 === i && (i = null),
            void 0 === o && (o = "F"),
            void 0 === s && (s = null),
            void 0 === u && (u = null),
            (this.path = t),
            (this.collectionGroup = e),
            (this.On = n),
            (this.filters = r),
            (this.limit = i),
            (this.Fn = o),
            (this.startAt = s),
            (this.endAt = u),
            (this.Vn = null),
            (this.Un = null),
            this.startAt && this.xn(this.startAt),
            this.endAt && this.xn(this.endAt);
        }
        function ku(t, e, n, r, i, o, s) {
          void 0 === e && (e = null),
            void 0 === n && (n = []),
            void 0 === r && (r = []),
            void 0 === i && (i = null),
            void 0 === o && (o = null),
            void 0 === s && (s = null),
            (this.path = t),
            (this.collectionGroup = e),
            (this.orderBy = n),
            (this.filters = r),
            (this.limit = i),
            (this.startAt = o),
            (this.endAt = s),
            (this.kn = null);
        }
        function Ou(t) {
          for (var e = "", n = 0; n < t.length; ++n)
            e += String.fromCharCode(t[n]);
          return e;
        }
        function Ru(t) {
          for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
            e[n] = t.charCodeAt(n);
          return e;
        }
        var Cu,
          xu,
          Lu =
            ((Uu.prototype.di = function (t) {
              return new Uu(
                this.target,
                this.targetId,
                this.fi,
                t,
                this.li,
                this.lastLimboFreeSnapshotVersion,
                this.resumeToken
              );
            }),
            (Uu.prototype.vi = function (t, e) {
              return new Uu(
                this.target,
                this.targetId,
                this.fi,
                this.sequenceNumber,
                e,
                this.lastLimboFreeSnapshotVersion,
                t
              );
            }),
            (Uu.prototype.wi = function (t) {
              return new Uu(
                this.target,
                this.targetId,
                this.fi,
                this.sequenceNumber,
                this.li,
                t,
                this.resumeToken
              );
            }),
            (Uu.prototype.isEqual = function (t) {
              return (
                this.targetId === t.targetId &&
                this.fi === t.fi &&
                this.sequenceNumber === t.sequenceNumber &&
                this.li.isEqual(t.li) &&
                this.lastLimboFreeSnapshotVersion.isEqual(
                  t.lastLimboFreeSnapshotVersion
                ) &&
                this.resumeToken.isEqual(t.resumeToken) &&
                this.target.isEqual(t.target)
              );
            }),
            Uu),
          Pu =
            ((_u.prototype.isEqual = function (t) {
              return t && t.count === this.count;
            }),
            _u);
        function _u(t) {
          this.count = t;
        }
        function Uu(t, e, n, r, i, o, s) {
          void 0 === i && (i = qi.MIN),
            void 0 === o && (o = qi.MIN),
            void 0 === s && (s = vu.ai),
            (this.target = t),
            (this.targetId = e),
            (this.fi = n),
            (this.sequenceNumber = r),
            (this.li = i),
            (this.lastLimboFreeSnapshotVersion = o),
            (this.resumeToken = s);
        }
        function Mu(t) {
          switch (t) {
            case $r.OK:
              return Vr("Treated status OK as error");
            case $r.CANCELLED:
            case $r.UNKNOWN:
            case $r.DEADLINE_EXCEEDED:
            case $r.RESOURCE_EXHAUSTED:
            case $r.INTERNAL:
            case $r.UNAVAILABLE:
            case $r.UNAUTHENTICATED:
              return !1;
            case $r.INVALID_ARGUMENT:
            case $r.NOT_FOUND:
            case $r.ALREADY_EXISTS:
            case $r.PERMISSION_DENIED:
            case $r.FAILED_PRECONDITION:
            case $r.ABORTED:
            case $r.OUT_OF_RANGE:
            case $r.UNIMPLEMENTED:
            case $r.DATA_LOSS:
              return !0;
            default:
              return Vr("Unknown status code: " + t);
          }
        }
        function qu(t) {
          if (void 0 === t) return qr("GRPC error has no .code"), $r.UNKNOWN;
          switch (t) {
            case Cu.OK:
              return $r.OK;
            case Cu.CANCELLED:
              return $r.CANCELLED;
            case Cu.UNKNOWN:
              return $r.UNKNOWN;
            case Cu.DEADLINE_EXCEEDED:
              return $r.DEADLINE_EXCEEDED;
            case Cu.RESOURCE_EXHAUSTED:
              return $r.RESOURCE_EXHAUSTED;
            case Cu.INTERNAL:
              return $r.INTERNAL;
            case Cu.UNAVAILABLE:
              return $r.UNAVAILABLE;
            case Cu.UNAUTHENTICATED:
              return $r.UNAUTHENTICATED;
            case Cu.INVALID_ARGUMENT:
              return $r.INVALID_ARGUMENT;
            case Cu.NOT_FOUND:
              return $r.NOT_FOUND;
            case Cu.ALREADY_EXISTS:
              return $r.ALREADY_EXISTS;
            case Cu.PERMISSION_DENIED:
              return $r.PERMISSION_DENIED;
            case Cu.FAILED_PRECONDITION:
              return $r.FAILED_PRECONDITION;
            case Cu.ABORTED:
              return $r.ABORTED;
            case Cu.OUT_OF_RANGE:
              return $r.OUT_OF_RANGE;
            case Cu.UNIMPLEMENTED:
              return $r.UNIMPLEMENTED;
            case Cu.DATA_LOSS:
              return $r.DATA_LOSS;
            default:
              return Vr("Unknown status code: " + t);
          }
        }
        ((xu = Cu = Cu || {})[(xu.OK = 0)] = "OK"),
          (xu[(xu.CANCELLED = 1)] = "CANCELLED"),
          (xu[(xu.UNKNOWN = 2)] = "UNKNOWN"),
          (xu[(xu.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
          (xu[(xu.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
          (xu[(xu.NOT_FOUND = 5)] = "NOT_FOUND"),
          (xu[(xu.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
          (xu[(xu.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
          (xu[(xu.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
          (xu[(xu.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
          (xu[(xu.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
          (xu[(xu.ABORTED = 10)] = "ABORTED"),
          (xu[(xu.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
          (xu[(xu.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
          (xu[(xu.INTERNAL = 13)] = "INTERNAL"),
          (xu[(xu.UNAVAILABLE = 14)] = "UNAVAILABLE"),
          (xu[(xu.DATA_LOSS = 15)] = "DATA_LOSS");
        var Fu = new Hi(Bi.G);
        function Vu() {
          return Fu;
        }
        function Gu() {
          return Vu();
        }
        var ju = new Hi(Bi.G);
        function Bu() {
          return ju;
        }
        var Hu = new Hi(Bi.G);
        function zu() {
          return Hu;
        }
        var Wu = new oo(Bi.G);
        function Qu() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          for (var n = Wu, r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            n = n.add(o);
          }
          return n;
        }
        var Yu = new oo(Hr);
        function Ku() {
          return Yu;
        }
        function Ju(t, e, n, r) {
          (this.Ui = t),
            (this.removedTargetIds = e),
            (this.key = n),
            (this.xi = r);
        }
        function Xu(t, e) {
          (this.targetId = t), (this.ji = e);
        }
        function $u(t, e, n, r) {
          void 0 === n && (n = vu.ai),
            void 0 === r && (r = null),
            (this.state = t),
            (this.targetIds = e),
            (this.resumeToken = n),
            (this.cause = r);
        }
        var Zu =
            ((la.gi = function (t) {
              return new la(t.G);
            }),
            (la.prototype.has = function (t) {
              return null != this.mi.get(t);
            }),
            (la.prototype.get = function (t) {
              return this.mi.get(t);
            }),
            (la.prototype.first = function () {
              return this.pi.vt();
            }),
            (la.prototype.last = function () {
              return this.pi.wt();
            }),
            (la.prototype.J = function () {
              return this.pi.J();
            }),
            (la.prototype.indexOf = function (t) {
              var e = this.mi.get(t);
              return e ? this.pi.indexOf(e) : -1;
            }),
            Object.defineProperty(la.prototype, "size", {
              get: function () {
                return this.pi.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (la.prototype.forEach = function (n) {
              this.pi.pt(function (t, e) {
                return n(t), !1;
              });
            }),
            (la.prototype.add = function (t) {
              var e = this.delete(t.key);
              return e.copy(e.mi.lt(t.key, t), e.pi.lt(t, null));
            }),
            (la.prototype.delete = function (t) {
              var e = this.get(t);
              return e ? this.copy(this.mi.remove(t), this.pi.remove(e)) : this;
            }),
            (la.prototype.isEqual = function (t) {
              if (!(t instanceof la)) return !1;
              if (this.size !== t.size) return !1;
              for (var e = this.pi.bt(), n = t.pi.bt(); e.St(); ) {
                var r = e.Dt().key,
                  i = n.Dt().key;
                if (!r.isEqual(i)) return !1;
              }
              return !0;
            }),
            (la.prototype.toString = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t.toString());
                }),
                0 === e.length
                  ? "DocumentSet ()"
                  : "DocumentSet (\n  " + e.join("  \n") + "\n)"
              );
            }),
            (la.prototype.copy = function (t, e) {
              var n = new la();
              return (n.G = this.G), (n.mi = t), (n.pi = e), n;
            }),
            la),
          ta =
            ((fa.prototype.track = function (t) {
              var e = t.doc.key,
                n = this.bi.get(e);
              n
                ? 0 !== t.type && 3 === n.type
                  ? (this.bi = this.bi.lt(e, t))
                  : 3 === t.type && 1 !== n.type
                  ? (this.bi = this.bi.lt(e, { type: n.type, doc: t.doc }))
                  : 2 === t.type && 2 === n.type
                  ? (this.bi = this.bi.lt(e, { type: 2, doc: t.doc }))
                  : 2 === t.type && 0 === n.type
                  ? (this.bi = this.bi.lt(e, { type: 0, doc: t.doc }))
                  : 1 === t.type && 0 === n.type
                  ? (this.bi = this.bi.remove(e))
                  : 1 === t.type && 2 === n.type
                  ? (this.bi = this.bi.lt(e, { type: 1, doc: n.doc }))
                  : 0 === t.type && 1 === n.type
                  ? (this.bi = this.bi.lt(e, { type: 2, doc: t.doc }))
                  : Vr(
                      "unsupported combination of changes: " +
                        JSON.stringify(t) +
                        " after " +
                        JSON.stringify(n)
                    )
                : (this.bi = this.bi.lt(e, t));
            }),
            (fa.prototype.yi = function () {
              var n = [];
              return (
                this.bi.pt(function (t, e) {
                  n.push(e);
                }),
                n
              );
            }),
            fa),
          ea =
            ((ca.Di = function (t, e, n, r) {
              var i = [];
              return (
                e.forEach(function (t) {
                  i.push({ type: 0, doc: t });
                }),
                new ca(t, e, Zu.gi(e), i, n, r, !0, !1)
              );
            }),
            Object.defineProperty(ca.prototype, "hasPendingWrites", {
              get: function () {
                return !this.Ii.J();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (ca.prototype.isEqual = function (t) {
              if (
                !(
                  this.fromCache === t.fromCache &&
                  this.Ti === t.Ti &&
                  this.Ii.isEqual(t.Ii) &&
                  this.query.isEqual(t.query) &&
                  this.docs.isEqual(t.docs) &&
                  this._i.isEqual(t._i)
                )
              )
                return !1;
              var e = this.docChanges,
                n = t.docChanges;
              if (e.length !== n.length) return !1;
              for (var r = 0; r < e.length; r++)
                if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc))
                  return !1;
              return !0;
            }),
            ca),
          na =
            ((ha.Pi = function (t, e) {
              var n,
                r = (((n = {})[t] = ra.ki(t, e)), n);
              return new ha(qi.MIN, r, Ku(), Vu(), Qu());
            }),
            ha),
          ra =
            ((aa.ki = function (t, e) {
              return new aa(vu.ai, e, Qu(), Qu(), Qu());
            }),
            aa),
          ia =
            (Object.defineProperty(ua.prototype, "Ni", {
              get: function () {
                return this.Mi;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(ua.prototype, "resumeToken", {
              get: function () {
                return this.Bi;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(ua.prototype, "Gi", {
              get: function () {
                return 0 !== this.Li;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(ua.prototype, "Wi", {
              get: function () {
                return this.Qi;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (ua.prototype.zi = function (t) {
              0 < t.bn() && ((this.Qi = !0), (this.Bi = t));
            }),
            (ua.prototype.Ki = function () {
              var n = Qu(),
                r = Qu(),
                i = Qu();
              return (
                this.qi.forEach(function (t, e) {
                  switch (e) {
                    case 0:
                      n = n.add(t);
                      break;
                    case 2:
                      r = r.add(t);
                      break;
                    case 1:
                      i = i.add(t);
                      break;
                    default:
                      Vr("Encountered invalid change type: " + e);
                  }
                }),
                new ra(this.Bi, this.Mi, n, r, i)
              );
            }),
            (ua.prototype.Hi = function () {
              (this.Qi = !1), (this.qi = da());
            }),
            (ua.prototype.Ji = function (t, e) {
              (this.Qi = !0), (this.qi = this.qi.lt(t, e));
            }),
            (ua.prototype.Yi = function (t) {
              (this.Qi = !0), (this.qi = this.qi.remove(t));
            }),
            (ua.prototype.Xi = function () {
              this.Li += 1;
            }),
            (ua.prototype.$i = function () {
              this.Li -= 1;
            }),
            (ua.prototype.Zi = function () {
              (this.Qi = !0), (this.Mi = !0);
            }),
            ua),
          oa =
            ((sa.prototype.ue = function (t) {
              for (var e = 0, n = t.Ui; e < n.length; e++) {
                var r = n[e];
                t.xi instanceof ks
                  ? this.se(r, t.xi)
                  : t.xi instanceof Os && this.oe(r, t.key, t.xi);
              }
              for (var i = 0, o = t.removedTargetIds; i < o.length; i++)
                (r = o[i]), this.oe(r, t.key, t.xi);
            }),
            (sa.prototype.he = function (n) {
              var r = this;
              this.ce(n, function (t) {
                var e = r.ae(t);
                switch (n.state) {
                  case 0:
                    r.fe(t) && e.zi(n.resumeToken);
                    break;
                  case 1:
                    e.$i(), e.Gi || e.Hi(), e.zi(n.resumeToken);
                    break;
                  case 2:
                    e.$i(),
                      e.Gi || r.removeTarget(t),
                      Gr(
                        !n.cause,
                        "WatchChangeAggregator does not handle errored targets"
                      );
                    break;
                  case 3:
                    r.fe(t) && (e.Zi(), e.zi(n.resumeToken));
                    break;
                  case 4:
                    r.fe(t) && (r.le(t), e.zi(n.resumeToken));
                    break;
                  default:
                    Vr("Unknown target watch change state: " + n.state);
                }
              });
            }),
            (sa.prototype.ce = function (t, e) {
              0 < t.targetIds.length ? t.targetIds.forEach(e) : pi(this.ne, e);
            }),
            (sa.prototype.de = function (t) {
              var e = t.targetId,
                n = t.ji.count,
                r = this.ve(e);
              if (r) {
                var i = r.target;
                if (i.Nn())
                  if (0 === n) {
                    var o = new Bi(i.path);
                    this.oe(e, o, new Os(o, qi.q()));
                  } else
                    Gr(
                      1 === n,
                      "Single document existence filter with count: " + n
                    );
                else this.we(e) !== n && (this.le(e), (this.re = this.re.add(e)));
              }
            }),
            (sa.prototype.me = function (i) {
              var o = this,
                s = {};
              pi(this.ne, function (t, e) {
                var n = o.ve(t);
                if (n) {
                  if (e.Ni && n.target.Nn()) {
                    var r = new Bi(n.target.path);
                    null !== o.ie.get(r) ||
                      o.pe(t, r) ||
                      o.oe(t, r, new Os(r, i));
                  }
                  e.Wi && ((s[t] = e.Ki()), e.Hi());
                }
              });
              var r = Qu();
              this.ee.forEach(function (t, e) {
                var n = !0;
                e.qt(function (t) {
                  var e = o.ve(t);
                  return !e || 2 === e.fi || (n = !1);
                }),
                  n && (r = r.add(t));
              });
              var t = new na(i, s, this.re, this.ie, r);
              return (
                (this.ie = Vu()), (this.ee = pa()), (this.re = new oo(Hr)), t
              );
            }),
            (sa.prototype.se = function (t, e) {
              if (this.fe(t)) {
                var n = this.pe(t, e.key) ? 2 : 0;
                this.ae(t).Ji(e.key, n),
                  (this.ie = this.ie.lt(e.key, e)),
                  (this.ee = this.ee.lt(e.key, this.ge(e.key).add(t)));
              }
            }),
            (sa.prototype.oe = function (t, e, n) {
              if (this.fe(t)) {
                var r = this.ae(t);
                this.pe(t, e) ? r.Ji(e, 1) : r.Yi(e),
                  (this.ee = this.ee.lt(e, this.ge(e).delete(t))),
                  n && (this.ie = this.ie.lt(e, n));
              }
            }),
            (sa.prototype.removeTarget = function (t) {
              delete this.ne[t];
            }),
            (sa.prototype.we = function (t) {
              var e = this.ae(t).Ki();
              return this.te.be(t).size + e.Oi.size - e.Vi.size;
            }),
            (sa.prototype.Xi = function (t) {
              this.ae(t).Xi();
            }),
            (sa.prototype.ae = function (t) {
              return this.ne[t] || (this.ne[t] = new ia()), this.ne[t];
            }),
            (sa.prototype.ge = function (t) {
              var e = this.ee.get(t);
              return e || ((e = new oo(Hr)), (this.ee = this.ee.lt(t, e))), e;
            }),
            (sa.prototype.fe = function (t) {
              var e = null !== this.ve(t);
              return (
                e || Mr("WatchChangeAggregator", "Detected inactive target", t), e
              );
            }),
            (sa.prototype.ve = function (t) {
              var e = this.ne[t];
              return e && e.Gi ? null : this.te.ye(t);
            }),
            (sa.prototype.le = function (e) {
              var n = this;
              Gr(!this.ne[e].Gi, "Should only reset active targets"),
                (this.ne[e] = new ia()),
                this.te.be(e).forEach(function (t) {
                  n.oe(e, t, null);
                });
            }),
            (sa.prototype.pe = function (t, e) {
              return this.te.be(t).has(e);
            }),
            sa);
        function sa(t) {
          (this.te = t),
            (this.ne = {}),
            (this.ie = Vu()),
            (this.ee = pa()),
            (this.re = new oo(Hr));
        }
        function ua() {
          (this.Li = 0),
            (this.qi = da()),
            (this.Bi = vu.ai),
            (this.Mi = !1),
            (this.Qi = !0);
        }
        function aa(t, e, n, r, i) {
          (this.resumeToken = t),
            (this.Ni = e),
            (this.Oi = n),
            (this.Fi = r),
            (this.Vi = i);
        }
        function ha(t, e, n, r, i) {
          (this.li = t),
            (this.Si = e),
            (this.Ri = n),
            (this.Ci = r),
            (this.Ai = i);
        }
        function ca(t, e, n, r, i, o, s, u) {
          (this.query = t),
            (this.docs = e),
            (this._i = n),
            (this.docChanges = r),
            (this.Ii = i),
            (this.fromCache = o),
            (this.Ti = s),
            (this.Ei = u);
        }
        function fa() {
          this.bi = new Hi(Bi.G);
        }
        function la(n) {
          (this.G = n
            ? function (t, e) {
                return n(t, e) || Bi.G(t.key, e.key);
              }
            : function (t, e) {
                return Bi.G(t.key, e.key);
              }),
            (this.mi = Bu()),
            (this.pi = new Hi(this.G));
        }
        function pa() {
          return new Hi(Bi.G);
        }
        function da() {
          return new Hi(Bi.G);
        }
        var va,
          ya,
          ma =
            (((va = {})[cu.ASCENDING.name] = "ASCENDING"),
            (va[cu.DESCENDING.name] = "DESCENDING"),
            va),
          ga =
            (((ya = {})[ru.LESS_THAN.name] = "LESS_THAN"),
            (ya[ru.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL"),
            (ya[ru.GREATER_THAN.name] = "GREATER_THAN"),
            (ya[ru.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL"),
            (ya[ru.EQUAL.name] = "EQUAL"),
            (ya[ru.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS"),
            (ya[ru.IN.name] = "IN"),
            (ya[ru.ARRAY_CONTAINS_ANY.name] = "ARRAY_CONTAINS_ANY"),
            ya),
          wa = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
        function ba(t, e) {
          Gr(!Ws(t), e + " is missing");
        }
        function Ea(t) {
          return "number" == typeof t
            ? t
            : "string" == typeof t
            ? Number(t)
            : Vr("can't parse " + t);
        }
        var Ia =
            ((Aa.prototype._e = function (t) {
              var e = void 0 === t.code ? $r.UNKNOWN : qu(t.code);
              return new Zr(e, t.message || "");
            }),
            (Aa.prototype.Ie = function (t) {
              return this.options.Te || Ws(t) ? t : { value: t };
            }),
            (Aa.prototype.Ee = function (t) {
              var e;
              return Ws((e = "object" == typeof t ? t.value : t)) ? null : e;
            }),
            (Aa.prototype.M = function (t) {
              return this.options.Te
                ? new Date(1e3 * t.seconds)
                    .toISOString()
                    .replace(/\.\d*/, "")
                    .replace("Z", "") +
                    "." +
                    ("000000000" + t.nanoseconds).slice(-9) +
                    "Z"
                : { seconds: "" + t.seconds, nanos: t.nanoseconds };
            }),
            (Aa.prototype.L = function (t) {
              if ("string" == typeof t) return this.De(t);
              Gr(!!t, "Cannot deserialize null or undefined timestamp.");
              var e = Ea(t.seconds || "0"),
                n = t.nanos || 0;
              return new Mi(e, n);
            }),
            (Aa.prototype.De = function (t) {
              var e = 0,
                n = wa.exec(t);
              if ((Gr(!!n, "invalid timestamp: " + t), n[1])) {
                var r = n[1];
                (r = (r + "000000000").substr(0, 9)), (e = Number(r));
              }
              var i = new Date(t),
                o = Math.floor(i.getTime() / 1e3);
              return new Mi(o, e);
            }),
            (Aa.prototype.Se = function (t) {
              return this.options.Te ? t.toBase64() : t.toUint8Array();
            }),
            (Aa.prototype.Re = function (t) {
              return this.options.Te
                ? (Gr(
                    void 0 === t || "string" == typeof t,
                    "value must be undefined or a string when using proto3 Json"
                  ),
                  vu.fromBase64String(t || ""))
                : (Gr(
                    void 0 === t || t instanceof Uint8Array,
                    "value must be undefined or Uint8Array"
                  ),
                  vu.fromUint8Array(t || new Uint8Array()));
            }),
            (Aa.prototype.Ce = function (t) {
              return "string" == typeof t
                ? (Gr(
                    this.options.Te,
                    "Expected bytes to be passed in as Uint8Array, but got a string instead."
                  ),
                  Ra.fromBase64String(t))
                : (Gr(
                    !this.options.Te,
                    "Expected bytes to be passed in as Uint8Array, but got a string instead."
                  ),
                  Ra.fromUint8Array(t));
            }),
            (Aa.prototype.toVersion = function (t) {
              return this.M(t.M());
            }),
            (Aa.prototype.fromVersion = function (t) {
              return (
                Gr(!!t, "Trying to deserialize version that isn't set"),
                qi.L(this.L(t))
              );
            }),
            (Aa.prototype.Ae = function (t, e) {
              return this.Pe(t).child("documents").child(e).nt();
            }),
            (Aa.prototype.ke = function (t) {
              var e = Vi.it(t);
              return (
                Gr(
                  this.Ne(e),
                  "Tried to deserialize invalid key " + e.toString()
                ),
                e
              );
            }),
            (Aa.prototype.Oe = function (t) {
              return this.Ae(this.s, t.path);
            }),
            (Aa.prototype.Fe = function (t) {
              var e = this.ke(t);
              return (
                Gr(
                  e.get(1) === this.s.projectId,
                  "Tried to deserialize key from different project: " +
                    e.get(1) +
                    " vs " +
                    this.s.projectId
                ),
                Gr(
                  (!e.get(3) && !this.s.database) || e.get(3) === this.s.database,
                  "Tried to deserialize key from different database: " +
                    e.get(3) +
                    " vs " +
                    this.s.database
                ),
                new Bi(this.Ve(e))
              );
            }),
            (Aa.prototype.Ue = function (t) {
              return this.Ae(this.s, t);
            }),
            (Aa.prototype.xe = function (t) {
              var e = this.ke(t);
              return 4 === e.length ? Vi.et : this.Ve(e);
            }),
            Object.defineProperty(Aa.prototype, "je", {
              get: function () {
                return new Vi([
                  "projects",
                  this.s.projectId,
                  "databases",
                  this.s.database,
                ]).nt();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Aa.prototype.Pe = function (t) {
              return new Vi(["projects", t.projectId, "databases", t.database]);
            }),
            (Aa.prototype.Ve = function (t) {
              return (
                Gr(
                  4 < t.length && "documents" === t.get(4),
                  "tried to deserialize invalid key " + t.toString()
                ),
                t.K(5)
              );
            }),
            (Aa.prototype.Ne = function (t) {
              return (
                4 <= t.length &&
                "projects" === t.get(0) &&
                "databases" === t.get(2)
              );
            }),
            (Aa.prototype.Le = function (t) {
              if (t instanceof Fo) return { nullValue: "NULL_VALUE" };
              if (t instanceof Vo) return { booleanValue: t.value() };
              if (t instanceof ys) return { integerValue: "" + t.value() };
              if (t instanceof ms) {
                var e = t.value();
                if (this.options.Te) {
                  if (isNaN(e)) return { doubleValue: "NaN" };
                  if (e === 1 / 0) return { doubleValue: "Infinity" };
                  if (e === -1 / 0) return { doubleValue: "-Infinity" };
                  if (Qs(e)) return { doubleValue: "-0" };
                }
                return { doubleValue: t.value() };
              }
              return t instanceof gs
                ? { stringValue: t.value() }
                : t instanceof Ns
                ? { mapValue: this.qe(t) }
                : t instanceof Ss
                ? { arrayValue: this.Be(t) }
                : t instanceof ws
                ? { timestampValue: this.M(t.Ht) }
                : t instanceof Ts
                ? {
                    geoPointValue: {
                      latitude: t.value().latitude,
                      longitude: t.value().longitude,
                    },
                  }
                : t instanceof Es
                ? { bytesValue: this.Se(t.value()) }
                : t instanceof Is
                ? { referenceValue: this.Ae(t.s, t.key.path) }
                : Vr("Unknown FieldValue " + JSON.stringify(t));
            }),
            (Aa.prototype.Me = function (t) {
              var e = this;
              if ("nullValue" in t) return Fo.yn;
              if ("booleanValue" in t) return Vo.of(t.booleanValue);
              if ("integerValue" in t) return new ys(Ea(t.integerValue));
              if ("doubleValue" in t) {
                if (this.options.Te) {
                  if ("NaN" === t.doubleValue) return ms.Tn;
                  if ("Infinity" === t.doubleValue) return ms.POSITIVE_INFINITY;
                  if ("-Infinity" === t.doubleValue) return ms.NEGATIVE_INFINITY;
                  if ("-0" === t.doubleValue) return new ms(-0);
                }
                return new ms(t.doubleValue);
              }
              if ("stringValue" in t) return new gs(t.stringValue);
              if ("mapValue" in t) return this.Qe(t.mapValue.fields || {});
              if ("arrayValue" in t) {
                ba(t.arrayValue, "arrayValue");
                var n = t.arrayValue.values || [];
                return new Ss(
                  n.map(function (t) {
                    return e.Me(t);
                  })
                );
              }
              if ("timestampValue" in t)
                return (
                  ba(t.timestampValue, "timestampValue"),
                  new ws(this.L(t.timestampValue))
                );
              if ("geoPointValue" in t) {
                ba(t.geoPointValue, "geoPointValue");
                var r = t.geoPointValue.latitude || 0,
                  i = t.geoPointValue.longitude || 0;
                return new Ts(new Ui(r, i));
              }
              if ("bytesValue" in t) {
                ba(t.bytesValue, "bytesValue");
                var o = this.Ce(t.bytesValue);
                return new Es(o);
              }
              if ("referenceValue" in t) {
                ba(t.referenceValue, "referenceValue");
                var s = this.ke(t.referenceValue),
                  u = new Jr(s.get(1), s.get(3)),
                  a = new Bi(this.Ve(s));
                return new Is(u, a);
              }
              return Vr("Unknown Value proto " + JSON.stringify(t));
            }),
            (Aa.prototype.Ge = function (t, e) {
              return { name: this.Oe(t), fields: this.We(e) };
            }),
            (Aa.prototype.ze = function (t) {
              return (
                Gr(!t.en, "Can't serialize documents with mutations."),
                {
                  name: this.Oe(t.key),
                  fields: this.We(t.data()),
                  updateTime: this.M(t.version.M()),
                }
              );
            }),
            (Aa.prototype.Ke = function (t, e) {
              var n = this,
                r = this.Fe(t.name),
                i = this.fromVersion(t.updateTime);
              return new ks(
                r,
                i,
                { hasCommittedMutations: !!e },
                void 0,
                t,
                function (t) {
                  return n.Me(t);
                }
              );
            }),
            (Aa.prototype.We = function (t) {
              var n = this,
                r = {};
              return (
                t.forEach(function (t, e) {
                  r[t] = n.Le(e);
                }),
                r
              );
            }),
            (Aa.prototype.Qe = function (t) {
              var n = this,
                e = t,
                r = Ns.vn();
              return (
                di(e, function (t, e) {
                  r.set(new ji([t]), n.Me(e));
                }),
                r.cn()
              );
            }),
            (Aa.prototype.qe = function (t) {
              return { fields: this.We(t) };
            }),
            (Aa.prototype.Be = function (t) {
              var e = this,
                n = [];
              return (
                t.forEach(function (t) {
                  n.push(e.Le(t));
                }),
                { values: n }
              );
            }),
            (Aa.prototype.He = function (t) {
              var e = this;
              Gr(
                !!t.found,
                "Tried to deserialize a found document from a missing document."
              ),
                ba(t.found.name, "doc.found.name"),
                ba(t.found.updateTime, "doc.found.updateTime");
              var n = this.Fe(t.found.name),
                r = this.fromVersion(t.found.updateTime);
              return new ks(n, r, {}, void 0, t.found, function (t) {
                return e.Me(t);
              });
            }),
            (Aa.prototype.Je = function (t) {
              Gr(
                !!t.missing,
                "Tried to deserialize a missing document from a found document."
              ),
                Gr(
                  !!t.readTime,
                  "Tried to deserialize a missing document without a read time."
                );
              var e = this.Fe(t.missing),
                n = this.fromVersion(t.readTime);
              return new Os(e, n);
            }),
            (Aa.prototype.Ye = function (t) {
              return "found" in t
                ? this.He(t)
                : "missing" in t
                ? this.Je(t)
                : Vr("invalid batch get response: " + JSON.stringify(t));
            }),
            (Aa.prototype.Xe = function (t) {
              switch (t) {
                case 1:
                  return "ADD";
                case 3:
                  return "CURRENT";
                case 0:
                  return "NO_CHANGE";
                case 2:
                  return "REMOVE";
                case 4:
                  return "RESET";
                default:
                  return Vr("Unknown WatchTargetChangeState: " + t);
              }
            }),
            (Aa.prototype.$e = function (t) {
              if (t instanceof Xu)
                return { filter: { count: t.ji.count, targetId: t.targetId } };
              if (t instanceof Ju) {
                if (t.xi instanceof ks) {
                  var e = t.xi;
                  return {
                    documentChange: {
                      document: {
                        name: this.Oe(e.key),
                        fields: this.We(e.data()),
                        updateTime: this.toVersion(e.version),
                      },
                      targetIds: t.Ui,
                      removedTargetIds: t.removedTargetIds,
                    },
                  };
                }
                if (t.xi instanceof Os)
                  return (
                    (e = t.xi),
                    {
                      documentDelete: {
                        document: this.Oe(e.key),
                        readTime: this.toVersion(e.version),
                        removedTargetIds: t.removedTargetIds,
                      },
                    }
                  );
                if (null === t.xi)
                  return {
                    documentRemove: {
                      document: this.Oe(t.key),
                      removedTargetIds: t.removedTargetIds,
                    },
                  };
              }
              if (t instanceof $u) {
                var n = void 0;
                return (
                  t.cause &&
                    (n = {
                      code: (function (t) {
                        if (void 0 === t) return Cu.OK;
                        switch (t) {
                          case $r.OK:
                            return Cu.OK;
                          case $r.CANCELLED:
                            return Cu.CANCELLED;
                          case $r.UNKNOWN:
                            return Cu.UNKNOWN;
                          case $r.DEADLINE_EXCEEDED:
                            return Cu.DEADLINE_EXCEEDED;
                          case $r.RESOURCE_EXHAUSTED:
                            return Cu.RESOURCE_EXHAUSTED;
                          case $r.INTERNAL:
                            return Cu.INTERNAL;
                          case $r.UNAVAILABLE:
                            return Cu.UNAVAILABLE;
                          case $r.UNAUTHENTICATED:
                            return Cu.UNAUTHENTICATED;
                          case $r.INVALID_ARGUMENT:
                            return Cu.INVALID_ARGUMENT;
                          case $r.NOT_FOUND:
                            return Cu.NOT_FOUND;
                          case $r.ALREADY_EXISTS:
                            return Cu.ALREADY_EXISTS;
                          case $r.PERMISSION_DENIED:
                            return Cu.PERMISSION_DENIED;
                          case $r.FAILED_PRECONDITION:
                            return Cu.FAILED_PRECONDITION;
                          case $r.ABORTED:
                            return Cu.ABORTED;
                          case $r.OUT_OF_RANGE:
                            return Cu.OUT_OF_RANGE;
                          case $r.UNIMPLEMENTED:
                            return Cu.UNIMPLEMENTED;
                          case $r.DATA_LOSS:
                            return Cu.DATA_LOSS;
                          default:
                            return Vr("Unknown status code: " + t);
                        }
                      })(t.cause.code),
                      message: t.cause.message,
                    }),
                  {
                    targetChange: {
                      targetChangeType: this.Xe(t.state),
                      targetIds: t.targetIds,
                      resumeToken: this.Se(t.resumeToken),
                      cause: n,
                    },
                  }
                );
              }
              return Vr("Unrecognized watch change: " + JSON.stringify(t));
            }),
            (Aa.prototype.Ze = function (t) {
              var e,
                n = this;
              if ("targetChange" in t) {
                ba(t.targetChange, "targetChange");
                var r = this.tr(t.targetChange.targetChangeType || "NO_CHANGE"),
                  i = t.targetChange.targetIds || [],
                  o = this.Re(t.targetChange.resumeToken),
                  s = t.targetChange.cause,
                  u = s && this._e(s);
                e = new $u(r, i, o, u || null);
              } else if ("documentChange" in t) {
                ba(t.documentChange, "documentChange");
                var a = t.documentChange;
                ba(a.document, "documentChange.name"),
                  ba(a.document.name, "documentChange.document.name"),
                  ba(a.document.updateTime, "documentChange.document.updateTime");
                var h = this.Fe(a.document.name),
                  c = this.fromVersion(a.document.updateTime),
                  f = new ks(h, c, {}, void 0, a.document, function (t) {
                    return n.Me(t);
                  }),
                  l = a.targetIds || [],
                  p = a.removedTargetIds || [];
                e = new Ju(l, p, f.key, f);
              } else if ("documentDelete" in t) {
                ba(t.documentDelete, "documentDelete");
                var d = t.documentDelete;
                ba(d.document, "documentDelete.document"),
                  (h = this.Fe(d.document)),
                  (c = d.readTime ? this.fromVersion(d.readTime) : qi.q()),
                  (f = new Os(h, c)),
                  (p = d.removedTargetIds || []),
                  (e = new Ju([], p, f.key, f));
              } else if ("documentRemove" in t) {
                ba(t.documentRemove, "documentRemove");
                var v = t.documentRemove;
                ba(v.document, "documentRemove"),
                  (h = this.Fe(v.document)),
                  (p = v.removedTargetIds || []),
                  (e = new Ju([], p, h, null));
              } else {
                if (!("filter" in t))
                  return Vr("Unknown change type " + JSON.stringify(t));
                ba(t.filter, "filter");
                var y = t.filter;
                ba(y.targetId, "filter.targetId");
                var m = y.count || 0,
                  g = new Pu(m),
                  w = y.targetId;
                e = new Xu(w, g);
              }
              return e;
            }),
            (Aa.prototype.tr = function (t) {
              return "NO_CHANGE" === t
                ? 0
                : "ADD" === t
                ? 1
                : "REMOVE" === t
                ? 2
                : "CURRENT" === t
                ? 3
                : "RESET" === t
                ? 4
                : Vr("Got unexpected TargetChange.state: " + t);
            }),
            (Aa.prototype.nr = function (t) {
              if (!("targetChange" in t)) return qi.MIN;
              var e = t.targetChange;
              return e.targetIds && e.targetIds.length
                ? qi.MIN
                : e.readTime
                ? this.fromVersion(e.readTime)
                : qi.MIN;
            }),
            (Aa.prototype.ir = function (t) {
              var e,
                n = this;
              if (t instanceof xo) e = { update: this.Ge(t.key, t.value) };
              else if (t instanceof _o) e = { delete: this.Oe(t.key) };
              else if (t instanceof Lo)
                e = { update: this.Ge(t.key, t.data), updateMask: this.er(t.un) };
              else if (t instanceof Po)
                e = {
                  transform: {
                    document: this.Oe(t.key),
                    fieldTransforms: t.fieldTransforms.map(function (t) {
                      return n.rr(t);
                    }),
                  },
                };
              else {
                if (!(t instanceof Uo))
                  return Vr("Unknown mutation type " + t.type);
                e = { verify: this.Oe(t.key) };
              }
              return t.in.$t || (e.currentDocument = this.ur(t.in)), e;
            }),
            (Aa.prototype.sr = function (t) {
              var e = this,
                n = t.currentDocument ? this.or(t.currentDocument) : Ro.NONE;
              if (t.update) {
                ba(t.update.name, "name");
                var r = this.Fe(t.update.name),
                  i = this.Qe(t.update.fields || {});
                if (t.updateMask) {
                  var o = this.hr(t.updateMask);
                  return new Lo(r, i, o, n);
                }
                return new xo(r, i, n);
              }
              if (t.delete) return (r = this.Fe(t.delete)), new _o(r, n);
              if (t.transform) {
                r = this.Fe(t.transform.document);
                var s = t.transform.fieldTransforms.map(function (t) {
                  return e.cr(t);
                });
                return (
                  Gr(
                    !0 === n.exists,
                    'Transforms only support precondition "exists == true"'
                  ),
                  new Po(r, s)
                );
              }
              return t.verify
                ? ((r = this.Fe(t.verify)), new Uo(r, n))
                : Vr("unknown mutation proto: " + JSON.stringify(t));
            }),
            (Aa.prototype.ur = function (t) {
              return (
                Gr(!t.$t, "Can't serialize an empty precondition"),
                void 0 !== t.updateTime
                  ? { updateTime: this.toVersion(t.updateTime) }
                  : void 0 !== t.exists
                  ? { exists: t.exists }
                  : Vr("Unknown precondition")
              );
            }),
            (Aa.prototype.or = function (t) {
              return void 0 !== t.updateTime
                ? Ro.updateTime(this.fromVersion(t.updateTime))
                : void 0 !== t.exists
                ? Ro.exists(t.exists)
                : Ro.NONE;
            }),
            (Aa.prototype.ar = function (t, e) {
              var n = this,
                r = t.updateTime
                  ? this.fromVersion(t.updateTime)
                  : this.fromVersion(e);
              r.isEqual(qi.MIN) && (r = this.fromVersion(e));
              var i = null;
              return (
                t.transformResults &&
                  0 < t.transformResults.length &&
                  (i = t.transformResults.map(function (t) {
                    return n.Me(t);
                  })),
                new wo(r, i)
              );
            }),
            (Aa.prototype.lr = function (t, e) {
              var n = this;
              return t && 0 < t.length
                ? (Gr(
                    void 0 !== e,
                    "Received a write result without a commit time"
                  ),
                  t.map(function (t) {
                    return n.ar(t, e);
                  }))
                : [];
            }),
            (Aa.prototype.rr = function (t) {
              var e = this,
                n = t.transform;
              if (n instanceof uo)
                return {
                  fieldPath: t.field.nt(),
                  setToServerValue: "REQUEST_TIME",
                };
              if (n instanceof ao)
                return {
                  fieldPath: t.field.nt(),
                  appendMissingElements: {
                    values: n.elements.map(function (t) {
                      return e.Le(t);
                    }),
                  },
                };
              if (n instanceof ho)
                return {
                  fieldPath: t.field.nt(),
                  removeAllFromArray: {
                    values: n.elements.map(function (t) {
                      return e.Le(t);
                    }),
                  },
                };
              if (n instanceof co)
                return { fieldPath: t.field.nt(), increment: this.Le(n.Kt) };
              throw Vr("Unknown transform: " + t.transform);
            }),
            (Aa.prototype.cr = function (t) {
              var e = this,
                n = null;
              if ("setToServerValue" in t)
                Gr(
                  "REQUEST_TIME" === t.setToServerValue,
                  "Unknown server value transform proto: " + JSON.stringify(t)
                ),
                  (n = uo.instance);
              else if ("appendMissingElements" in t) {
                var r = t.appendMissingElements.values || [];
                n = new ao(
                  r.map(function (t) {
                    return e.Me(t);
                  })
                );
              } else if ("removeAllFromArray" in t)
                (r = t.removeAllFromArray.values || []),
                  (n = new ho(
                    r.map(function (t) {
                      return e.Me(t);
                    })
                  ));
              else if ("increment" in t) {
                var i = this.Me(t.increment);
                Gr(
                  i instanceof Go,
                  "NUMERIC_ADD transform requires a NumberValue"
                ),
                  (n = new co(i));
              } else Vr("Unknown transform proto: " + JSON.stringify(t));
              var o = ji.ot(t.fieldPath);
              return new Oo(o, n);
            }),
            (Aa.prototype.dr = function (t) {
              return { documents: [this.Ue(t.path)] };
            }),
            (Aa.prototype.vr = function (t) {
              var e = t.documents.length;
              Gr(
                1 === e,
                "DocumentsTarget contained other than 1 document: " + e
              );
              var n = t.documents[0];
              return nu.jn(this.xe(n)).Yn();
            }),
            (Aa.prototype.wr = function (t) {
              var e = { structuredQuery: {} },
                n = t.path;
              null !== t.collectionGroup
                ? (Gr(
                    n.length % 2 == 0,
                    "Collection Group queries should be within a document path or root."
                  ),
                  (e.parent = this.Ue(n)),
                  (e.structuredQuery.from = [
                    { collectionId: t.collectionGroup, allDescendants: !0 },
                  ]))
                : (Gr(
                    n.length % 2 != 0,
                    "Document queries with filters are not supported."
                  ),
                  (e.parent = this.Ue(n.H())),
                  (e.structuredQuery.from = [{ collectionId: n.X() }]));
              var r = this.mr(t.filters);
              r && (e.structuredQuery.where = r);
              var i = this.pr(t.orderBy);
              i && (e.structuredQuery.orderBy = i);
              var o = this.Ie(t.limit);
              return (
                null !== o && (e.structuredQuery.limit = o),
                t.startAt && (e.structuredQuery.startAt = this.gr(t.startAt)),
                t.endAt && (e.structuredQuery.endAt = this.gr(t.endAt)),
                e
              );
            }),
            (Aa.prototype.br = function (t) {
              var e = this.xe(t.parent),
                n = t.structuredQuery,
                r = n.from ? n.from.length : 0,
                i = null;
              if (0 < r) {
                Gr(
                  1 === r,
                  "StructuredQuery.from with more than one collection is not supported."
                );
                var o = n.from[0];
                o.allDescendants
                  ? (i = o.collectionId)
                  : (e = e.child(o.collectionId));
              }
              var s = [];
              n.where && (s = this.yr(n.where));
              var u = [];
              n.orderBy && (u = this._r(n.orderBy));
              var a = null;
              n.limit && (a = this.Ee(n.limit));
              var h = null;
              n.startAt && (h = this.Ir(n.startAt));
              var c = null;
              return (
                n.endAt && (c = this.Ir(n.endAt)),
                new nu(e, i, u, s, a, "F", h, c).Yn()
              );
            }),
            (Aa.prototype.Tr = function (t) {
              var e = this.Er(t.fi);
              return null == e ? null : { "goog-listen-tags": e };
            }),
            (Aa.prototype.Er = function (t) {
              switch (t) {
                case 0:
                  return null;
                case 1:
                  return "existence-filter-mismatch";
                case 2:
                  return "limbo-document";
                default:
                  return Vr("Unrecognized query purpose: " + t);
              }
            }),
            (Aa.prototype.Yn = function (t) {
              var e,
                n = t.target;
              return (
                ((e = n.Nn()
                  ? { documents: this.dr(n) }
                  : { query: this.wr(n) }).targetId = t.targetId),
                0 < t.resumeToken.bn() &&
                  (e.resumeToken = this.Se(t.resumeToken)),
                e
              );
            }),
            (Aa.prototype.mr = function (t) {
              var e = this;
              if (0 !== t.length) {
                var n = t.map(function (t) {
                  return t instanceof iu
                    ? e.Dr(t)
                    : Vr("Unrecognized filter: " + JSON.stringify(t));
                });
                return 1 === n.length
                  ? n[0]
                  : { compositeFilter: { op: "AND", filters: n } };
              }
            }),
            (Aa.prototype.yr = function (t) {
              var e = this;
              return t
                ? void 0 !== t.unaryFilter
                  ? [this.Sr(t)]
                  : void 0 !== t.fieldFilter
                  ? [this.Rr(t)]
                  : void 0 !== t.compositeFilter
                  ? t.compositeFilter.filters
                      .map(function (t) {
                        return e.yr(t);
                      })
                      .reduce(function (t, e) {
                        return t.concat(e);
                      })
                  : Vr("Unknown filter: " + JSON.stringify(t))
                : [];
            }),
            (Aa.prototype.pr = function (t) {
              var e = this;
              if (0 !== t.length)
                return t.map(function (t) {
                  return e.Cr(t);
                });
            }),
            (Aa.prototype._r = function (t) {
              var e = this;
              return t.map(function (t) {
                return e.Ar(t);
              });
            }),
            (Aa.prototype.gr = function (t) {
              var e = this;
              return {
                before: t.before,
                values: t.position.map(function (t) {
                  return e.Le(t);
                }),
              };
            }),
            (Aa.prototype.Ir = function (t) {
              var e = this,
                n = !!t.before,
                r = t.values.map(function (t) {
                  return e.Me(t);
                });
              return new fu(r, n);
            }),
            (Aa.prototype.Pr = function (t) {
              return ma[t.name];
            }),
            (Aa.prototype.kr = function (t) {
              switch (t) {
                case "ASCENDING":
                  return cu.ASCENDING;
                case "DESCENDING":
                  return cu.DESCENDING;
                default:
                  return;
              }
            }),
            (Aa.prototype.Nr = function (t) {
              return ga[t.name];
            }),
            (Aa.prototype.Or = function (t) {
              switch (t) {
                case "EQUAL":
                  return ru.EQUAL;
                case "GREATER_THAN":
                  return ru.GREATER_THAN;
                case "GREATER_THAN_OR_EQUAL":
                  return ru.GREATER_THAN_OR_EQUAL;
                case "LESS_THAN":
                  return ru.LESS_THAN;
                case "LESS_THAN_OR_EQUAL":
                  return ru.LESS_THAN_OR_EQUAL;
                case "ARRAY_CONTAINS":
                  return ru.ARRAY_CONTAINS;
                case "IN":
                  return ru.IN;
                case "ARRAY_CONTAINS_ANY":
                  return ru.ARRAY_CONTAINS_ANY;
                case "OPERATOR_UNSPECIFIED":
                  return Vr("Unspecified operator");
                default:
                  return Vr("Unknown operator");
              }
            }),
            (Aa.prototype.Fr = function (t) {
              return { fieldPath: t.nt() };
            }),
            (Aa.prototype.Vr = function (t) {
              return ji.ot(t.fieldPath);
            }),
            (Aa.prototype.Cr = function (t) {
              return { field: this.Fr(t.field), direction: this.Pr(t.dir) };
            }),
            (Aa.prototype.Ar = function (t) {
              return new lu(this.Vr(t.field), this.kr(t.direction));
            }),
            (Aa.prototype.Rr = function (t) {
              return iu.create(
                this.Vr(t.fieldFilter.field),
                this.Or(t.fieldFilter.op),
                this.Me(t.fieldFilter.value)
              );
            }),
            (Aa.prototype.Dr = function (t) {
              if (t.op === ru.EQUAL) {
                if (t.value.isEqual(ms.Tn))
                  return {
                    unaryFilter: { field: this.Fr(t.field), op: "IS_NAN" },
                  };
                if (t.value.isEqual(Fo.yn))
                  return {
                    unaryFilter: { field: this.Fr(t.field), op: "IS_NULL" },
                  };
              }
              return {
                fieldFilter: {
                  field: this.Fr(t.field),
                  op: this.Nr(t.op),
                  value: this.Le(t.value),
                },
              };
            }),
            (Aa.prototype.Sr = function (t) {
              switch (t.unaryFilter.op) {
                case "IS_NAN":
                  var e = this.Vr(t.unaryFilter.field);
                  return iu.create(e, ru.EQUAL, ms.Tn);
                case "IS_NULL":
                  var n = this.Vr(t.unaryFilter.field);
                  return iu.create(n, ru.EQUAL, Fo.yn);
                case "OPERATOR_UNSPECIFIED":
                  return Vr("Unspecified filter");
                default:
                  return Vr("Unknown filter");
              }
            }),
            (Aa.prototype.er = function (t) {
              var e = [];
              return (
                t.fields.forEach(function (t) {
                  return e.push(t.nt());
                }),
                { fieldPaths: e }
              );
            }),
            (Aa.prototype.hr = function (t) {
              var e = (t.fieldPaths || []).map(function (t) {
                return ji.ot(t);
              });
              return ko.Yt(e);
            }),
            Aa),
          Ta =
            ((Na.Ur = function (t) {
              Na.platform && Vr("Platform already defined"), (Na.platform = t);
            }),
            (Na.t = function () {
              return Na.platform || Vr("Platform not set"), Na.platform;
            }),
            Na);
        function Na() {}
        function Aa(t, e) {
          (this.s = t), (this.options = e);
        }
        function Sa(t, e) {
          function n() {
            var t = "This constructor is private.";
            throw (e && ((t += " "), (t += e)), new Zr($r.INVALID_ARGUMENT, t));
          }
          return (n.prototype = t.prototype), Object.assign(n, t), n;
        }
        function Da() {
          if ("undefined" == typeof Uint8Array)
            throw new Zr(
              $r.UNIMPLEMENTED,
              "Uint8Arrays are not available in this environment."
            );
        }
        function ka() {
          if (!Ta.t().xr)
            throw new Zr(
              $r.UNIMPLEMENTED,
              "Blobs are unavailable in Firestore in this environment."
            );
        }
        function Oa() {
          var n = this;
          this.promise = new Promise(function (t, e) {
            (n.resolve = t), (n.reject = e);
          });
        }
        var Ra =
            ((qa.fromBase64String = function (t) {
              mi("Blob.fromBase64String", arguments, 1),
                bi("Blob.fromBase64String", "string", 1, t),
                ka();
              try {
                return new qa(Ta.t().atob(t));
              } catch (t) {
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Failed to construct Blob from Base64 string: " + t
                );
              }
            }),
            (qa.fromUint8Array = function (t) {
              if (
                (mi("Blob.fromUint8Array", arguments, 1),
                Da(),
                !(t instanceof Uint8Array))
              )
                throw Ri("Blob.fromUint8Array", "Uint8Array", 1, t);
              return new qa(Ou(t));
            }),
            (qa.prototype.toBase64 = function () {
              return (
                mi("Blob.toBase64", arguments, 0), ka(), Ta.t().btoa(this.ci)
              );
            }),
            (qa.prototype.toUint8Array = function () {
              return mi("Blob.toUint8Array", arguments, 0), Da(), Ru(this.ci);
            }),
            (qa.prototype.toString = function () {
              return "Blob(base64: " + this.toBase64() + ")";
            }),
            (qa.prototype.isEqual = function (t) {
              return this.ci === t.ci;
            }),
            (qa.prototype.Dn = function () {
              return 2 * this.ci.length;
            }),
            (qa.prototype.U = function (t) {
              return Hr(this.ci, t.ci);
            }),
            qa),
          Ca = Sa(
            Ra,
            "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."
          ),
          xa =
            ((Ma.prototype.Lr = function (t) {
              return (
                (this.previousValue = Math.max(t, this.previousValue)),
                this.previousValue
              );
            }),
            (Ma.prototype.next = function () {
              var t = ++this.previousValue;
              return this.qr && this.qr(t), t;
            }),
            (Ma.Mr = -1),
            Ma),
          La =
            ((Ua.Hr = function (t, e, n, r, i) {
              var o = new Ua(t, e, Date.now() + n, r, i);
              return o.start(n), o;
            }),
            (Ua.prototype.start = function (t) {
              var e = this;
              this.Jr = setTimeout(function () {
                return e.Yr();
              }, t);
            }),
            (Ua.prototype.Xr = function () {
              return this.Yr();
            }),
            (Ua.prototype.cancel = function (t) {
              null !== this.Jr &&
                (this.clearTimeout(),
                this.Kr.reject(
                  new Zr(
                    $r.CANCELLED,
                    "Operation cancelled" + (t ? ": " + t : "")
                  )
                ));
            }),
            (Ua.prototype.Yr = function () {
              var e = this;
              this.Qr.$r(function () {
                return null !== e.Jr
                  ? (e.clearTimeout(),
                    e.op().then(function (t) {
                      return e.Kr.resolve(t);
                    }))
                  : Promise.resolve();
              });
            }),
            (Ua.prototype.clearTimeout = function () {
              null !== this.Jr &&
                (this.zr(this), clearTimeout(this.Jr), (this.Jr = null));
            }),
            Ua),
          Pa =
            (Object.defineProperty(_a.prototype, "uu", {
              get: function () {
                return this.tu;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (_a.prototype.$r = function (t) {
              this.enqueue(t);
            }),
            (_a.prototype.su = function (t) {
              this.ou(), this.hu(t);
            }),
            (_a.prototype.cu = function (t) {
              return this.ou(), this.hu(t);
            }),
            (_a.prototype.au = function (e) {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.ou(),
                        this.tu ? [3, 2] : ((this.tu = !0), [4, this.cu(e)])
                      );
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (_a.prototype.enqueue = function (t) {
              return (
                this.ou(), this.tu ? new Promise(function (t) {}) : this.hu(t)
              );
            }),
            (_a.prototype.hu = function (t) {
              var n = this,
                e = this.Zr.then(function () {
                  return (
                    (n.eu = !0),
                    t()
                      .catch(function (t) {
                        (n.iu = t), (n.eu = !1);
                        var e = t.stack || t.message || "";
                        throw (
                          (qr("INTERNAL UNHANDLED ERROR: ", e),
                          e.indexOf("Firestore Test Simulated Error") < 0 &&
                            setTimeout(function () {
                              throw t;
                            }, 0),
                          t)
                        );
                      })
                      .then(function (t) {
                        return (n.eu = !1), t;
                      })
                  );
                });
              return (this.Zr = e);
            }),
            (_a.prototype.fu = function (t, e, n) {
              var r = this;
              this.ou(),
                Gr(
                  0 <= e,
                  "Attempted to schedule an operation with a negative delay of " +
                    e
                ),
                -1 < this.ru.indexOf(t) && (e = 0);
              var i = La.Hr(this, t, e, n, function (t) {
                return r.lu(t);
              });
              return this.nu.push(i), i;
            }),
            (_a.prototype.ou = function () {
              this.iu &&
                Vr(
                  "AsyncQueue is already failed: " +
                    (this.iu.stack || this.iu.message)
                );
            }),
            (_a.prototype.du = function () {
              Gr(
                this.eu,
                "verifyOpInProgress() called when no op in progress on this queue."
              );
            }),
            (_a.prototype.vu = function () {
              return p(this, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, (e = this.Zr)];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      if (e !== this.Zr) return [3, 0];
                      t.label = 3;
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (_a.prototype.wu = function (t) {
              for (var e = 0, n = this.nu; e < n.length; e++)
                if (n[e].Gr === t) return !0;
              return !1;
            }),
            (_a.prototype.mu = function (r) {
              var i = this;
              return this.vu().then(function () {
                Gr(
                  "all" === r || i.wu(r),
                  "Attempted to drain to missing operation " + r
                ),
                  i.nu.sort(function (t, e) {
                    return t.Wr - e.Wr;
                  });
                for (var t = 0, e = i.nu; t < e.length; t++) {
                  var n = e[t];
                  if ((n.Xr(), "all" !== r && n.Gr === r)) break;
                }
                return i.vu();
              });
            }),
            (_a.prototype.pu = function (t) {
              this.ru.push(t);
            }),
            (_a.prototype.lu = function (t) {
              var e = this.nu.indexOf(t);
              Gr(0 <= e, "Delayed operation not found."), this.nu.splice(e, 1);
            }),
            _a);
        function _a() {
          (this.Zr = Promise.resolve()),
            (this.tu = !1),
            (this.nu = []),
            (this.iu = null),
            (this.eu = !1),
            (this.ru = []);
        }
        function Ua(t, e, n, r, i) {
          (this.Qr = t),
            (this.Gr = e),
            (this.Wr = n),
            (this.op = r),
            (this.zr = i),
            (this.Kr = new Oa()),
            (this.then = this.Kr.promise.then.bind(this.Kr.promise)),
            (this.catch = this.Kr.promise.catch.bind(this.Kr.promise)),
            this.Kr.promise.catch(function (t) {});
        }
        function Ma(t, e) {
          var n = this;
          (this.previousValue = t),
            e &&
              ((e.jr = function (t) {
                return n.Lr(t);
              }),
              (this.qr = function (t) {
                return e.Br(t);
              }));
        }
        function qa(t) {
          ka(), (this.ci = t);
        }
        function Fa(t) {
          for (var e = "", n = 0; n < t.length; n++)
            0 < e.length && (e = Ga(e)), (e = Va(t.get(n), e));
          return Ga(e);
        }
        function Va(t, e) {
          for (var n = e, r = t.length, i = 0; i < r; i++) {
            var o = t.charAt(i);
            switch (o) {
              case "\0":
                n += "";
                break;
              case "":
                n += "";
                break;
              default:
                n += o;
            }
          }
          return n;
        }
        function Ga(t) {
          return t + "";
        }
        function ja(t) {
          var e = t.length;
          if ((Gr(2 <= e, "Invalid path " + t), 2 === e))
            return (
              Gr(
                "" === t.charAt(0) && "" === t.charAt(1),
                "Non-empty path " + t + " had length 2"
              ),
              Vi.et
            );
          for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
            var s = t.indexOf("", o);
            switch (
              ((s < 0 || n < s) &&
                Vr('Invalid encoded resource path: "' + t + '"'),
              t.charAt(s + 1))
            ) {
              case "":
                var u = t.substring(o, s),
                  a = void 0;
                0 === i.length ? (a = u) : ((a = i += u), (i = "")), r.push(a);
                break;
              case "":
                (i += t.substring(o, s)), (i += "\0");
                break;
              case "":
                i += t.substring(o, s + 1);
                break;
              default:
                Vr('Invalid encoded resource path: "' + t + '"');
            }
            o = s + 2;
          }
          return new Vi(r);
        }
        var Ba =
            ((ph.prototype.Wt = function (t, e, n) {
              e &&
                Gr(
                  e.key.isEqual(t),
                  "applyToRemoteDocument: key " +
                    t +
                    " should match maybeDoc key\n        " +
                    e.key
                );
              var r = n.gu;
              Gr(
                r.length === this.mutations.length,
                "Mismatch between mutations length\n      (" +
                  this.mutations.length +
                  ") and mutation results length\n      (" +
                  r.length +
                  ")."
              );
              for (var i = 0; i < this.mutations.length; i++) {
                var o = this.mutations[i];
                if (o.key.isEqual(t)) {
                  var s = r[i];
                  e = o.Wt(e, s);
                }
              }
              return e;
            }),
            (ph.prototype.Gt = function (t, e) {
              e &&
                Gr(
                  e.key.isEqual(t),
                  "applyToLocalDocument: key " +
                    t +
                    " should match maybeDoc key\n        " +
                    e.key
                );
              for (var n = 0, r = this.baseMutations; n < r.length; n++)
                (u = r[n]).key.isEqual(t) && (e = u.Gt(e, e, this.En));
              for (var i = e, o = 0, s = this.mutations; o < s.length; o++) {
                var u;
                (u = s[o]).key.isEqual(t) && (e = u.Gt(e, i, this.En));
              }
              return e;
            }),
            (ph.prototype.bu = function (n) {
              var r = this,
                i = n;
              return (
                this.mutations.forEach(function (t) {
                  var e = r.Gt(t.key, n.get(t.key));
                  e && (i = i.lt(t.key, e));
                }),
                i
              );
            }),
            (ph.prototype.keys = function () {
              return this.mutations.reduce(function (t, e) {
                return t.add(e.key);
              }, Qu());
            }),
            (ph.prototype.isEqual = function (t) {
              return (
                this.batchId === t.batchId &&
                zr(this.mutations, t.mutations) &&
                zr(this.baseMutations, t.baseMutations)
              );
            }),
            ph),
          Ha =
            ((lh.from = function (t, e, n, r) {
              Gr(
                t.mutations.length === n.length,
                "Mutations sent " +
                  t.mutations.length +
                  " must equal results received " +
                  n.length
              );
              for (var i = zu(), o = t.mutations, s = 0; s < o.length; s++)
                i = i.lt(o[s].key, n[s].version);
              return new lh(t, e, n, r, i);
            }),
            lh),
          za =
            ((fh.prototype.J = function () {
              return this.Iu.J();
            }),
            (fh.prototype.Du = function (t, e) {
              var n = new Wa(t, e);
              (this.Iu = this.Iu.add(n)), (this.Tu = this.Tu.add(n));
            }),
            (fh.prototype.Su = function (t, e) {
              var n = this;
              t.forEach(function (t) {
                return n.Du(t, e);
              });
            }),
            (fh.prototype.Ru = function (t, e) {
              this.Cu(new Wa(t, e));
            }),
            (fh.prototype.Au = function (t, e) {
              var n = this;
              t.forEach(function (t) {
                return n.Ru(t, e);
              });
            }),
            (fh.prototype.Pu = function (t) {
              var e = this,
                n = Bi.EMPTY,
                r = new Wa(n, t),
                i = new Wa(n, t + 1),
                o = [];
              return (
                this.Tu.Lt([r, i], function (t) {
                  e.Cu(t), o.push(t.key);
                }),
                o
              );
            }),
            (fh.prototype.ku = function () {
              var e = this;
              this.Iu.forEach(function (t) {
                return e.Cu(t);
              });
            }),
            (fh.prototype.Cu = function (t) {
              (this.Iu = this.Iu.delete(t)), (this.Tu = this.Tu.delete(t));
            }),
            (fh.prototype.Nu = function (t) {
              var e = Bi.EMPTY,
                n = new Wa(e, t),
                r = new Wa(e, t + 1),
                i = Qu();
              return (
                this.Tu.Lt([n, r], function (t) {
                  i = i.add(t.key);
                }),
                i
              );
            }),
            (fh.prototype.Ou = function (t) {
              var e = new Wa(t, 0),
                n = this.Iu.Bt(e);
              return null !== n && t.isEqual(n.key);
            }),
            fh),
          Wa =
            ((ch.Sn = function (t, e) {
              return Bi.G(t.key, e.key) || Hr(t.Fu, e.Fu);
            }),
            (ch.Eu = function (t, e) {
              return Hr(t.Fu, e.Fu) || Bi.G(t.key, e.key);
            }),
            ch),
          Qa =
            ((hh.prototype.get = function (t) {
              var e = this.Vu(t),
                n = this.Uu[e];
              if (void 0 !== n)
                for (var r = 0, i = n; r < i.length; r++) {
                  var o = i[r],
                    s = o[0],
                    u = o[1];
                  if (s.isEqual(t)) return u;
                }
            }),
            (hh.prototype.has = function (t) {
              return void 0 !== this.get(t);
            }),
            (hh.prototype.set = function (t, e) {
              var n = this.Vu(t),
                r = this.Uu[n];
              if (void 0 !== r) {
                for (var i = 0; i < r.length; i++)
                  if (r[i][0].isEqual(t)) return void (r[i] = [t, e]);
                r.push([t, e]);
              } else this.Uu[n] = [[t, e]];
            }),
            (hh.prototype.delete = function (t) {
              var e = this.Vu(t),
                n = this.Uu[e];
              if (void 0 === n) return !1;
              for (var r = 0; r < n.length; r++)
                if (n[r][0].isEqual(t))
                  return 1 === n.length ? delete this.Uu[e] : n.splice(r, 1), !0;
              return !1;
            }),
            (hh.prototype.forEach = function (u) {
              di(this.Uu, function (t, e) {
                for (var n = 0, r = e; n < r.length; n++) {
                  var i = r[n],
                    o = i[0],
                    s = i[1];
                  u(o, s);
                }
              });
            }),
            (hh.prototype.J = function () {
              return vi(this.Uu);
            }),
            hh),
          Ya =
            ((ah.prototype.catch = function (t) {
              return this.next(void 0, t);
            }),
            (ah.prototype.next = function (r, i) {
              var o = this;
              return (
                this.qu &&
                  Vr("Called next() or catch() twice for PersistencePromise"),
                (this.qu = !0),
                this.Lu
                  ? this.error
                    ? this.Bu(i, this.error)
                    : this.Mu(r, this.result)
                  : new ah(function (e, n) {
                      (o.xu = function (t) {
                        o.Mu(r, t).next(e, n);
                      }),
                        (o.ju = function (t) {
                          o.Bu(i, t).next(e, n);
                        });
                    })
              );
            }),
            (ah.prototype.Qu = function () {
              var n = this;
              return new Promise(function (t, e) {
                n.next(t, e);
              });
            }),
            (ah.prototype.Gu = function (t) {
              try {
                var e = t();
                return e instanceof ah ? e : ah.resolve(e);
              } catch (t) {
                return ah.reject(t);
              }
            }),
            (ah.prototype.Mu = function (t, e) {
              return t
                ? this.Gu(function () {
                    return t(e);
                  })
                : ah.resolve(e);
            }),
            (ah.prototype.Bu = function (t, e) {
              return t
                ? this.Gu(function () {
                    return t(e);
                  })
                : ah.reject(e);
            }),
            (ah.resolve = function (n) {
              return new ah(function (t, e) {
                t(n);
              });
            }),
            (ah.reject = function (n) {
              return new ah(function (t, e) {
                e(n);
              });
            }),
            (ah.Wu = function (t) {
              return new ah(function (e, n) {
                var r = 0,
                  i = 0,
                  o = !1;
                t.forEach(function (t) {
                  ++r,
                    t.next(
                      function () {
                        ++i, o && i === r && e();
                      },
                      function (t) {
                        return n(t);
                      }
                    );
                }),
                  (o = !0),
                  i === r && e();
              });
            }),
            (ah.zu = function (t) {
              for (
                var n = ah.resolve(!1),
                  e = function (e) {
                    n = n.next(function (t) {
                      return t ? ah.resolve(t) : e();
                    });
                  },
                  r = 0,
                  i = t;
                r < i.length;
                r++
              )
                e(i[r]);
              return n;
            }),
            (ah.forEach = function (t, n) {
              var r = this,
                i = [];
              return (
                t.forEach(function (t, e) {
                  i.push(n.call(r, t, e));
                }),
                this.Wu(i)
              );
            }),
            ah),
          Ka =
            (Object.defineProperty(uh.prototype, "readTime", {
              get: function () {
                return (
                  Gr(
                    void 0 !== this.Ju,
                    "Read time is not set. All removeEntry() calls must include a readTime if `trackRemovals` is used."
                  ),
                  this.Ju
                );
              },
              set: function (t) {
                Gr(
                  void 0 === this.Ju || this.Ju.isEqual(t),
                  "All changes in a RemoteDocumentChangeBuffer must have the same read time"
                ),
                  (this.Ju = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (uh.prototype.Yu = function (t, e) {
              this.Xu(), (this.readTime = e), this.Ku.set(t.key, t);
            }),
            (uh.prototype.$u = function (t, e) {
              this.Xu(), e && (this.readTime = e), this.Ku.set(t, null);
            }),
            (uh.prototype.Zu = function (t, e) {
              this.Xu();
              var n = this.Ku.get(e);
              return void 0 !== n ? Ya.resolve(n) : this.ts(t, e);
            }),
            (uh.prototype.getEntries = function (t, e) {
              return this.ns(t, e);
            }),
            (uh.prototype.apply = function (t) {
              return this.Xu(), (this.Hu = !0), this.es(t);
            }),
            (uh.prototype.Xu = function () {
              Gr(!this.Hu, "Changes have already been applied.");
            }),
            uh),
          Ja =
            "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
          Xa =
            ((sh.prototype.us = function (t) {
              this.rs.push(t);
            }),
            (sh.prototype.ss = function () {
              this.rs.forEach(function (t) {
                return t();
              });
            }),
            sh),
          $a =
            ((oh.hs = function (o, t, s) {
              return (
                Gr(oh.cs(), "IndexedDB not supported in current environment."),
                Mr("SimpleDb", "Opening database:", o),
                new Ya(function (n, r) {
                  var i = window.indexedDB.open(o, t);
                  (i.onsuccess = function (t) {
                    var e = t.target.result;
                    n(new oh(e));
                  }),
                    (i.onblocked = function () {
                      r(
                        new Zr(
                          $r.FAILED_PRECONDITION,
                          "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."
                        )
                      );
                    }),
                    (i.onerror = function (t) {
                      var e = t.target.error;
                      "VersionError" === e.name
                        ? r(
                            new Zr(
                              $r.FAILED_PRECONDITION,
                              "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh."
                            )
                          )
                        : r(e);
                    }),
                    (i.onupgradeneeded = function (t) {
                      Mr(
                        "SimpleDb",
                        'Database "' + o + '" requires upgrade from version:',
                        t.oldVersion
                      );
                      var e = t.target.result;
                      s.createOrUpgrade(e, i.transaction, t.oldVersion, oc).next(
                        function () {
                          Mr(
                            "SimpleDb",
                            "Database upgrade to version " + oc + " complete"
                          );
                        }
                      );
                    });
                }).Qu()
              );
            }),
            (oh.delete = function (t) {
              return (
                Mr("SimpleDb", "Removing database:", t),
                dh(window.indexedDB.deleteDatabase(t)).Qu()
              );
            }),
            (oh.cs = function () {
              if ("undefined" == typeof window || null == window.indexedDB)
                return !1;
              if (oh.as()) return !0;
              if (void 0 === window.navigator) return !1;
              var t = d(),
                e = oh.os(t),
                n = 0 < e && e < 10,
                r = oh.fs(t),
                i = 0 < r && r < 4.5;
              return !(
                0 < t.indexOf("MSIE ") ||
                0 < t.indexOf("Trident/") ||
                0 < t.indexOf("Edge/") ||
                n ||
                i
              );
            }),
            (oh.as = function () {
              var t;
              return (
                "undefined" != typeof process &&
                "YES" ===
                  (null === (t = process.env) || void 0 === t ? void 0 : t.ls)
              );
            }),
            (oh.ds = function (t, e) {
              return t.store(e);
            }),
            (oh.os = function (t) {
              var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
                n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
              return Number(n);
            }),
            (oh.fs = function (t) {
              var e = t.match(/Android ([\d.]+)/i),
                n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
              return Number(n);
            }),
            (oh.prototype.vs = function (e) {
              this.db.onversionchange = function (t) {
                return e(t);
              };
            }),
            (oh.prototype.runTransaction = function (r, h, c) {
              return p(this, void 0, void 0, function () {
                var o, s, u, e, a, n;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      (o = r.startsWith("readonly")),
                        (s = r.endsWith("idempotent")),
                        (u = 0),
                        (e = function () {
                          var e, n, r, i;
                          return v(this, function (t) {
                            switch (t.label) {
                              case 0:
                                ++u,
                                  (e = th.open(
                                    a.db,
                                    o ? "readonly" : "readwrite",
                                    h
                                  )),
                                  (t.label = 1);
                              case 1:
                                return (
                                  t.trys.push([1, 3, , 4]),
                                  (n = c(e)
                                    .catch(function (t) {
                                      return e.abort(t), Ya.reject(t);
                                    })
                                    .Qu()).catch(function () {}),
                                  [4, e.ws]
                                );
                              case 2:
                                return t.sent(), [2, { value: n }];
                              case 3:
                                return (
                                  (r = t.sent()),
                                  (i = s && "FirebaseError" !== r.name && u < 3),
                                  Mr(
                                    "SimpleDb",
                                    "Transaction failed with error: %s. Retrying: %s.",
                                    r.message,
                                    i
                                  ),
                                  i ? [3, 4] : [2, { value: Promise.reject(r) }]
                                );
                              case 4:
                                return [2];
                            }
                          });
                        }),
                        (a = this),
                        (t.label = 1);
                    case 1:
                      return [5, e()];
                    case 2:
                      return "object" == typeof (n = t.sent())
                        ? [2, n.value]
                        : [3, 1];
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (oh.prototype.close = function () {
              this.db.close();
            }),
            oh),
          Za =
            (Object.defineProperty(ih.prototype, "Lu", {
              get: function () {
                return this.ps;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(ih.prototype, "bs", {
              get: function () {
                return this.gs;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(ih.prototype, "cursor", {
              set: function (t) {
                this.ms = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (ih.prototype.done = function () {
              this.ps = !0;
            }),
            (ih.prototype.ys = function (t) {
              this.gs = t;
            }),
            (ih.prototype.delete = function () {
              return dh(this.ms.delete());
            }),
            ih),
          th =
            ((rh.open = function (t, e, n) {
              return new rh(t.transaction(n, e));
            }),
            Object.defineProperty(rh.prototype, "ws", {
              get: function () {
                return this._s.promise;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (rh.prototype.abort = function (t) {
              t && this._s.reject(t),
                this.aborted ||
                  (Mr(
                    "SimpleDb",
                    "Aborting transaction:",
                    t ? t.message : "Client-initiated abort"
                  ),
                  (this.aborted = !0),
                  this.transaction.abort());
            }),
            (rh.prototype.store = function (t) {
              var e = this.transaction.objectStore(t);
              return (
                Gr(!!e, "Object store not part of transaction: " + t), new eh(e)
              );
            }),
            rh),
          eh =
            ((nh.prototype.put = function (t, e) {
              return dh(
                void 0 !== e
                  ? (Mr("SimpleDb", "PUT", this.store.name, t, e),
                    this.store.put(e, t))
                  : (Mr("SimpleDb", "PUT", this.store.name, "<auto-key>", t),
                    this.store.put(t))
              );
            }),
            (nh.prototype.add = function (t) {
              return (
                Mr("SimpleDb", "ADD", this.store.name, t, t),
                dh(this.store.add(t))
              );
            }),
            (nh.prototype.get = function (e) {
              var n = this;
              return dh(this.store.get(e)).next(function (t) {
                return (
                  void 0 === t && (t = null),
                  Mr("SimpleDb", "GET", n.store.name, e, t),
                  t
                );
              });
            }),
            (nh.prototype.delete = function (t) {
              return (
                Mr("SimpleDb", "DELETE", this.store.name, t),
                dh(this.store.delete(t))
              );
            }),
            (nh.prototype.count = function () {
              return (
                Mr("SimpleDb", "COUNT", this.store.name), dh(this.store.count())
              );
            }),
            (nh.prototype.Is = function (t, e) {
              var n = this.cursor(this.options(t, e)),
                r = [];
              return this.Ts(n, function (t, e) {
                r.push(e);
              }).next(function () {
                return r;
              });
            }),
            (nh.prototype.Es = function (t, e) {
              Mr("SimpleDb", "DELETE ALL", this.store.name);
              var n = this.options(t, e);
              n.Ds = !1;
              var r = this.cursor(n);
              return this.Ts(r, function (t, e, n) {
                return n.delete();
              });
            }),
            (nh.prototype.Ss = function (t, e) {
              var n;
              e ? (n = t) : ((n = {}), (e = t));
              var r = this.cursor(n);
              return this.Ts(r, e);
            }),
            (nh.prototype.Rs = function (i) {
              var t = this.cursor({});
              return new Ya(function (n, r) {
                (t.onerror = function (t) {
                  var e = yh(t.target.error);
                  r(e);
                }),
                  (t.onsuccess = function (t) {
                    var e = t.target.result;
                    e
                      ? i(e.primaryKey, e.value).next(function (t) {
                          t ? e.continue() : n();
                        })
                      : n();
                  });
              });
            }),
            (nh.prototype.Ts = function (t, s) {
              var u = [];
              return new Ya(function (o, e) {
                (t.onerror = function (t) {
                  e(t.target.error);
                }),
                  (t.onsuccess = function (t) {
                    var e = t.target.result;
                    if (e) {
                      var n = new Za(e),
                        r = s(e.primaryKey, e.value, n);
                      if (r instanceof Ya) {
                        var i = r.catch(function (t) {
                          return n.done(), Ya.reject(t);
                        });
                        u.push(i);
                      }
                      n.Lu
                        ? o()
                        : null === n.bs
                        ? e.continue()
                        : e.continue(n.bs);
                    } else o();
                  });
              }).next(function () {
                return Ya.Wu(u);
              });
            }),
            (nh.prototype.options = function (t, e) {
              var n = void 0;
              return (
                void 0 !== t &&
                  ("string" == typeof t
                    ? (n = t)
                    : (Gr(
                        void 0 === e,
                        "3rd argument must not be defined if 2nd is a range."
                      ),
                      (e = t))),
                { index: n, range: e }
              );
            }),
            (nh.prototype.cursor = function (t) {
              var e = "next";
              if ((t.reverse && (e = "prev"), t.index)) {
                var n = this.store.index(t.index);
                return t.Ds
                  ? n.openKeyCursor(t.range, e)
                  : n.openCursor(t.range, e);
              }
              return this.store.openCursor(t.range, e);
            }),
            nh);
        function nh(t) {
          this.store = t;
        }
        function rh(t) {
          var n = this;
          (this.transaction = t),
            (this.aborted = !1),
            (this._s = new Oa()),
            (this.transaction.oncomplete = function () {
              n._s.resolve();
            }),
            (this.transaction.onabort = function () {
              t.error ? n._s.reject(t.error) : n._s.resolve();
            }),
            (this.transaction.onerror = function (t) {
              var e = yh(t.target.error);
              n._s.reject(e);
            });
        }
        function ih(t) {
          (this.ms = t), (this.ps = !1), (this.gs = null);
        }
        function oh(t) {
          (this.db = t),
            12.2 === oh.os(d()) &&
              qr(
                "Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
              );
        }
        function sh() {
          this.rs = [];
        }
        function uh() {
          (this.Ku = new Qa(function (t) {
            return t.toString();
          })),
            (this.Hu = !1);
        }
        function ah(t) {
          var e = this;
          (this.xu = null),
            (this.ju = null),
            (this.result = void 0),
            (this.error = void 0),
            (this.Lu = !1),
            (this.qu = !1),
            t(
              function (t) {
                (e.Lu = !0), (e.result = t), e.xu && e.xu(t);
              },
              function (t) {
                (e.Lu = !0), (e.error = t), e.ju && e.ju(t);
              }
            );
        }
        function hh(t) {
          (this.Vu = t), (this.Uu = {});
        }
        function ch(t, e) {
          (this.key = t), (this.Fu = e);
        }
        function fh() {
          (this.Iu = new oo(Wa.Sn)), (this.Tu = new oo(Wa.Eu));
        }
        function lh(t, e, n, r, i) {
          (this.batch = t),
            (this.yu = e),
            (this.gu = n),
            (this.streamToken = r),
            (this._u = i);
        }
        function ph(t, e, n, r) {
          (this.batchId = t),
            (this.En = e),
            (this.baseMutations = n),
            Gr(
              0 < (this.mutations = r).length,
              "Cannot create an empty mutation batch"
            );
        }
        function dh(t) {
          return new Ya(function (n, r) {
            (t.onsuccess = function (t) {
              var e = t.target.result;
              n(e);
            }),
              (t.onerror = function (t) {
                var e = yh(t.target.error);
                r(e);
              });
          });
        }
        var vh = !1;
        function yh(t) {
          var e = $a.os(d());
          if (12.2 <= e && e < 13) {
            var n =
              "An internal error was encountered in the Indexed Database server";
            if (0 <= t.message.indexOf(n)) {
              var r = new Zr(
                "internal",
                "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" +
                  n +
                  "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
              );
              return (
                vh ||
                  ((vh = !0),
                  setTimeout(function () {
                    throw r;
                  }, 0)),
                r
              );
            }
          }
          return t;
        }
        var mh =
          ((gh.ks = function (t, e, n, r) {
            return (
              Gr("" !== t.uid, "UserID must not be an empty string."),
              new gh(t.l() ? t.uid : "", e, n, r)
            );
          }),
          (gh.prototype.Ns = function (t) {
            var r = !0,
              e = IDBKeyRange.bound(
                [this.userId, Number.NEGATIVE_INFINITY],
                [this.userId, Number.POSITIVE_INFINITY]
              );
            return Eh(t)
              .Ss({ index: dc.userMutationsIndex, range: e }, function (t, e, n) {
                (r = !1), n.done();
              })
              .next(function () {
                return r;
              });
          }),
          (gh.prototype.Os = function (e, t, n) {
            return this.Fs(e).next(function (t) {
              return (t.lastStreamToken = n.toBase64()), Th(e).put(t);
            });
          }),
          (gh.prototype.Vs = function (t) {
            return this.Fs(t).next(function (t) {
              return vu.fromBase64String(t.lastStreamToken);
            });
          }),
          (gh.prototype.Us = function (e, n) {
            return this.Fs(e).next(function (t) {
              return (t.lastStreamToken = n.toBase64()), Th(e).put(t);
            });
          }),
          (gh.prototype.xs = function (h, c, f, l) {
            var p = this,
              d = Ih(h),
              v = Eh(h);
            return v.add({}).next(function (t) {
              Gr("number" == typeof t, "Auto-generated key is not a number");
              for (
                var e = new Ba(t, c, f, l),
                  n = p.serializer.js(p.userId, e),
                  r = [],
                  i = new oo(function (t, e) {
                    return Hr(t.nt(), e.nt());
                  }),
                  o = 0,
                  s = l;
                o < s.length;
                o++
              ) {
                var u = s[o],
                  a = mc.key(p.userId, u.key.path, t);
                (i = i.add(u.key.path.H())),
                  r.push(v.put(n)),
                  r.push(d.put(a, mc.PLACEHOLDER));
              }
              return (
                i.forEach(function (t) {
                  r.push(p.Cs.Ls(h, t));
                }),
                h.us(function () {
                  p.Ps[t] = e.keys();
                }),
                Ya.Wu(r).next(function () {
                  return e;
                })
              );
            });
          }),
          (gh.prototype.qs = function (t, e) {
            var n = this;
            return Eh(t)
              .get(e)
              .next(function (t) {
                return t
                  ? (Gr(
                      t.userId === n.userId,
                      "Unexpected user '" + t.userId + "' for mutation batch " + e
                    ),
                    n.serializer.Bs(t))
                  : null;
              });
          }),
          (gh.prototype.Ms = function (t, n) {
            var r = this;
            return this.Ps[n]
              ? Ya.resolve(this.Ps[n])
              : this.qs(t, n).next(function (t) {
                  if (t) {
                    var e = t.keys();
                    return (r.Ps[n] = e);
                  }
                  return null;
                });
          }),
          (gh.prototype.Qs = function (t, e) {
            var r = this,
              i = e + 1,
              n = IDBKeyRange.lowerBound([this.userId, i]),
              o = null;
            return Eh(t)
              .Ss({ index: dc.userMutationsIndex, range: n }, function (t, e, n) {
                e.userId === r.userId &&
                  (Gr(e.batchId >= i, "Should have found mutation after " + i),
                  (o = r.serializer.Bs(e))),
                  n.done();
              })
              .next(function () {
                return o;
              });
          }),
          (gh.prototype.Gs = function (t) {
            var e = IDBKeyRange.upperBound([
                this.userId,
                Number.POSITIVE_INFINITY,
              ]),
              r = -1;
            return Eh(t)
              .Ss(
                { index: dc.userMutationsIndex, range: e, reverse: !0 },
                function (t, e, n) {
                  (r = e.batchId), n.done();
                }
              )
              .next(function () {
                return r;
              });
          }),
          (gh.prototype.Ws = function (t) {
            var e = this,
              n = IDBKeyRange.bound(
                [this.userId, -1],
                [this.userId, Number.POSITIVE_INFINITY]
              );
            return Eh(t)
              .Is(dc.userMutationsIndex, n)
              .next(function (t) {
                return t.map(function (t) {
                  return e.serializer.Bs(t);
                });
              });
          }),
          (gh.prototype.zs = function (u, a) {
            var h = this,
              t = mc.prefixForPath(this.userId, a.path),
              e = IDBKeyRange.lowerBound(t),
              c = [];
            return Ih(u)
              .Ss({ range: e }, function (e, t, n) {
                var r = e[0],
                  i = e[1],
                  o = e[2],
                  s = ja(i);
                if (r === h.userId && a.path.isEqual(s))
                  return Eh(u)
                    .get(o)
                    .next(function (t) {
                      if (!t)
                        throw Vr(
                          "Dangling document-mutation reference found: " +
                            e +
                            " which points to " +
                            o
                        );
                      Gr(
                        t.userId === h.userId,
                        "Unexpected user '" +
                          t.userId +
                          "' for mutation batch " +
                          o
                      ),
                        c.push(h.serializer.Bs(t));
                    });
                n.done();
              })
              .next(function () {
                return c;
              });
          }),
          (gh.prototype.Ks = function (r, t) {
            var a = this,
              h = new oo(Hr),
              i = [];
            return (
              t.forEach(function (u) {
                var t = mc.prefixForPath(a.userId, u.path),
                  e = IDBKeyRange.lowerBound(t),
                  n = Ih(r).Ss({ range: e }, function (t, e, n) {
                    var r = t[0],
                      i = t[1],
                      o = t[2],
                      s = ja(i);
                    r === a.userId && u.path.isEqual(s)
                      ? (h = h.add(o))
                      : n.done();
                  });
                i.push(n);
              }),
              Ya.Wu(i).next(function () {
                return a.Hs(r, h);
              })
            );
          }),
          (gh.prototype.Js = function (t, e) {
            var u = this;
            Gr(!e.Nn(), "Document queries shouldn't go down this path"),
              Gr(
                !e.ui(),
                "CollectionGroup queries should be handled in LocalDocumentsView"
              );
            var a = e.path,
              h = a.length + 1,
              n = mc.prefixForPath(this.userId, a),
              r = IDBKeyRange.lowerBound(n),
              c = new oo(Hr);
            return Ih(t)
              .Ss({ range: r }, function (t, e, n) {
                var r = t[0],
                  i = t[1],
                  o = t[2],
                  s = ja(i);
                r === u.userId && a.$(s)
                  ? s.length === h && (c = c.add(o))
                  : n.done();
              })
              .next(function () {
                return u.Hs(t, c);
              });
          }),
          (gh.prototype.Hs = function (t, e) {
            var n = this,
              r = [],
              i = [];
            return (
              e.forEach(function (e) {
                i.push(
                  Eh(t)
                    .get(e)
                    .next(function (t) {
                      if (null === t)
                        throw Vr(
                          "Dangling document-mutation reference found, which points to " +
                            e
                        );
                      Gr(
                        t.userId === n.userId,
                        "Unexpected user '" +
                          t.userId +
                          "' for mutation batch " +
                          e
                      ),
                        r.push(n.serializer.Bs(t));
                    })
                );
              }),
              Ya.Wu(i).next(function () {
                return r;
              })
            );
          }),
          (gh.prototype.Ys = function (e, n) {
            var r = this;
            return bh(e.Xs, this.userId, n).next(function (t) {
              return (
                e.us(function () {
                  r.$s(n.batchId);
                }),
                Ya.forEach(t, function (t) {
                  return r.As.Zs(e, t);
                })
              );
            });
          }),
          (gh.prototype.$s = function (t) {
            delete this.Ps[t];
          }),
          (gh.prototype.to = function (n) {
            var o = this;
            return this.Ns(n).next(function (t) {
              if (!t) return Ya.resolve();
              var e = IDBKeyRange.lowerBound(mc.prefixForUser(o.userId)),
                i = [];
              return Ih(n)
                .Ss({ range: e }, function (t, e, n) {
                  if (t[0] === o.userId) {
                    var r = ja(t[1]);
                    i.push(r);
                  } else n.done();
                })
                .next(function () {
                  Gr(
                    0 === i.length,
                    "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " +
                      i.map(function (t) {
                        return t.nt();
                      })
                  );
                });
            });
          }),
          (gh.prototype.Ou = function (t, e) {
            return wh(t, this.userId, e);
          }),
          (gh.prototype.Fs = function (t) {
            var e = this;
            return Th(t)
              .get(this.userId)
              .next(function (t) {
                return t || new pc(e.userId, -1, "");
              });
          }),
          gh);
        function gh(t, e, n, r) {
          (this.userId = t),
            (this.serializer = e),
            (this.Cs = n),
            (this.As = r),
            (this.Ps = {});
        }
        function wh(t, o, e) {
          var n = mc.prefixForPath(o, e.path),
            s = n[1],
            r = IDBKeyRange.lowerBound(n),
            u = !1;
          return Ih(t)
            .Ss({ range: r, Ds: !0 }, function (t, e, n) {
              var r = t[0],
                i = t[1];
              t[2], r === o && i === s && (u = !0), n.done();
            })
            .next(function () {
              return u;
            });
        }
        function bh(t, e, n) {
          var r = t.store(dc.store),
            i = t.store(mc.store),
            o = [],
            s = IDBKeyRange.only(n.batchId),
            u = 0,
            a = r.Ss({ range: s }, function (t, e, n) {
              return u++, n.delete();
            });
          o.push(
            a.next(function () {
              Gr(
                1 === u,
                "Dangling document-mutation reference found: Missing batch " +
                  n.batchId
              );
            })
          );
          for (var h = [], c = 0, f = n.mutations; c < f.length; c++) {
            var l = f[c],
              p = mc.key(e, l.key.path, n.batchId);
            o.push(i.delete(p)), h.push(l.key);
          }
          return Ya.Wu(o).next(function () {
            return h;
          });
        }
        function Eh(t) {
          return zc.ds(t, dc.store);
        }
        function Ih(t) {
          return zc.ds(t, mc.store);
        }
        function Th(t) {
          return zc.ds(t, pc.store);
        }
        var Nh =
            ((Ch.prototype.next = function () {
              var t = this.eo;
              return (this.eo += 2), t;
            }),
            (Ch.prototype.after = function (t) {
              return this.io(t + 2), this.next();
            }),
            (Ch.prototype.io = function (t) {
              Gr(
                (1 & t) === this.no,
                "Cannot supply target ID from different generator ID"
              ),
                (this.eo = t);
            }),
            (Ch.ro = function () {
              return new Ch(0, 2);
            }),
            (Ch.uo = function () {
              return new Ch(1);
            }),
            Ch),
          Ah =
            ((Rh.prototype.ho = function (e, n) {
              var r = this;
              return this.oo.zs(e, n).next(function (t) {
                return r.co(e, n, t);
              });
            }),
            (Rh.prototype.co = function (t, r, i) {
              return this.so.Zu(t, r).next(function (t) {
                for (var e = 0, n = i; e < n.length; e++) t = n[e].Gt(r, t);
                return t;
              });
            }),
            (Rh.prototype.ao = function (t, e, i) {
              var o = Gu();
              return (
                e.forEach(function (t, e) {
                  for (var n = 0, r = i; n < r.length; n++) e = r[n].Gt(t, e);
                  o = o.lt(t, e);
                }),
                o
              );
            }),
            (Rh.prototype.fo = function (e, t) {
              var n = this;
              return this.so.getEntries(e, t).next(function (t) {
                return n.lo(e, t);
              });
            }),
            (Rh.prototype.lo = function (r, i) {
              var o = this;
              return this.oo.Ks(r, i).next(function (t) {
                var e = o.ao(r, i, t),
                  n = Vu();
                return (
                  e.forEach(function (t, e) {
                    (e = e || new Os(t, qi.q())), (n = n.lt(t, e));
                  }),
                  n
                );
              });
            }),
            (Rh.prototype.do = function (t, e, n) {
              return e.Nn()
                ? this.vo(t, e.path)
                : e.ui()
                ? this.wo(t, e, n)
                : this.mo(t, e, n);
            }),
            (Rh.prototype.vo = function (t, e) {
              return this.ho(t, new Bi(e)).next(function (t) {
                var e = Bu();
                return t instanceof ks && (e = e.lt(t.key, t)), e;
              });
            }),
            (Rh.prototype.wo = function (n, r, i) {
              var o = this;
              Gr(
                r.path.J(),
                "Currently we only support collection group queries at the root."
              );
              var s = r.collectionGroup,
                u = Bu();
              return this.Cs.po(n, s).next(function (t) {
                return Ya.forEach(t, function (t) {
                  var e = r.Hn(t.child(s));
                  return o.mo(n, e, i).next(function (t) {
                    t.forEach(function (t, e) {
                      u = u.lt(t, e);
                    });
                  });
                }).next(function () {
                  return u;
                });
              });
            }),
            (Rh.prototype.mo = function (e, n, t) {
              var c,
                f,
                r = this;
              return this.so
                .do(e, n, t)
                .next(function (t) {
                  return (c = t), r.oo.Js(e, n);
                })
                .next(function (t) {
                  return (
                    (f = t),
                    r.bo(e, f, c).next(function (t) {
                      c = t;
                      for (var e = 0, n = f; e < n.length; e++)
                        for (
                          var r = n[e], i = 0, o = r.mutations;
                          i < o.length;
                          i++
                        ) {
                          var s = o[i],
                            u = s.key,
                            a = c.get(u),
                            h = s.Gt(a, a, r.En);
                          c = h instanceof ks ? c.lt(u, h) : c.remove(u);
                        }
                    })
                  );
                })
                .next(function () {
                  return (
                    c.forEach(function (t, e) {
                      n.matches(e) || (c = c.remove(t));
                    }),
                    c
                  );
                });
            }),
            (Rh.prototype.bo = function (t, e, n) {
              for (var r = Qu(), i = 0, o = e; i < o.length; i++)
                for (var s = 0, u = o[i].mutations; s < u.length; s++) {
                  var a = u[s];
                  a instanceof Lo && null === n.get(a.key) && (r = r.add(a.key));
                }
              var h = n;
              return this.so.getEntries(t, r).next(function (t) {
                return (
                  t.forEach(function (t, e) {
                    null !== e && e instanceof ks && (h = h.lt(t, e));
                  }),
                  h
                );
              });
            }),
            Rh),
          Sh =
            ((Oh.Io = function (t, e) {
              for (
                var n = Qu(), r = Qu(), i = 0, o = e.docChanges;
                i < o.length;
                i++
              ) {
                var s = o[i];
                switch (s.type) {
                  case 0:
                    n = n.add(s.doc.key);
                    break;
                  case 1:
                    r = r.add(s.doc.key);
                }
              }
              return new Oh(t, e.fromCache, n, r);
            }),
            Oh),
          Dh =
            ((kh.prototype.start = function () {
              return this.jo();
            }),
            (kh.prototype.Lo = function (i) {
              return p(this, void 0, void 0, function () {
                var e,
                  y,
                  n,
                  r = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = this.oo),
                        (y = this.Vo),
                        [
                          4,
                          this.persistence.runTransaction(
                            "Handle user change",
                            "readonly-idempotent",
                            function (d) {
                              var v;
                              return r.oo
                                .Ws(d)
                                .next(function (t) {
                                  return (
                                    (v = t),
                                    (e = r.persistence.Po(i)),
                                    (y = new Ah(r.ko, e, r.persistence.Uo())),
                                    e.Ws(d)
                                  );
                                })
                                .next(function (t) {
                                  for (
                                    var e = [], n = [], r = Qu(), i = 0, o = v;
                                    i < o.length;
                                    i++
                                  ) {
                                    var s = o[i];
                                    e.push(s.batchId);
                                    for (
                                      var u = 0, a = s.mutations;
                                      u < a.length;
                                      u++
                                    ) {
                                      var h = a[u];
                                      r = r.add(h.key);
                                    }
                                  }
                                  for (var c = 0, f = t; c < f.length; c++) {
                                    (s = f[c]), n.push(s.batchId);
                                    for (
                                      var l = 0, p = s.mutations;
                                      l < p.length;
                                      l++
                                    )
                                      (h = p[l]), (r = r.add(h.key));
                                  }
                                  return y.fo(d, r).next(function (t) {
                                    return { qo: t, Bo: e, Mo: n };
                                  });
                                });
                            }
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (n = t.sent()),
                        (this.oo = e),
                        (this.Vo = y),
                        this.To.xo(this.Vo),
                        [2, n]
                      );
                  }
                });
              });
            }),
            (kh.prototype.Qo = function (u) {
              var a,
                h = this,
                c = Mi.now(),
                t = u.reduce(function (t, e) {
                  return t.add(e.key);
                }, Qu());
              return this.persistence
                .runTransaction(
                  "Locally write mutations",
                  "readwrite-idempotent",
                  function (s) {
                    return h.Vo.fo(s, t).next(function (t) {
                      a = t;
                      for (var e = [], n = 0, r = u; n < r.length; n++) {
                        var i = r[n],
                          o = i.rn(a.get(i.key));
                        null != o &&
                          e.push(new Lo(i.key, o, o.un(), Ro.exists(!0)));
                      }
                      return h.oo.xs(s, c, e, u);
                    });
                  }
                )
                .then(function (t) {
                  var e = t.bu(a);
                  return { batchId: t.batchId, Ku: e };
                });
            }),
            (kh.prototype.Go = function (t) {
              var n = this;
              return this.persistence.runTransaction(
                "Lookup mutation documents",
                "readonly-idempotent",
                function (e) {
                  return n.oo.Ms(e, t).next(function (t) {
                    return t ? n.Vo.fo(e, t) : Ya.resolve(null);
                  });
                }
              );
            }),
            (kh.prototype.Os = function (r) {
              var i = this;
              return this.persistence.runTransaction(
                "Acknowledge batch",
                "readwrite-primary-idempotent",
                function (t) {
                  var e = r.batch.keys(),
                    n = i.ko.Wo({ zo: !0 });
                  return i.oo
                    .Os(t, r.batch, r.streamToken)
                    .next(function () {
                      return i.Ko(t, r, n);
                    })
                    .next(function () {
                      return n.apply(t);
                    })
                    .next(function () {
                      return i.oo.to(t);
                    })
                    .next(function () {
                      return i.Vo.fo(t, e);
                    });
                }
              );
            }),
            (kh.prototype.Ho = function (t) {
              var r = this;
              return this.persistence.runTransaction(
                "Reject batch",
                "readwrite-primary-idempotent",
                function (e) {
                  var n;
                  return r.oo
                    .qs(e, t)
                    .next(function (t) {
                      return (
                        Gr(null !== t, "Attempt to reject nonexistent batch!"),
                        (n = t.keys()),
                        r.oo.Ys(e, t)
                      );
                    })
                    .next(function () {
                      return r.oo.to(e);
                    })
                    .next(function () {
                      return r.Vo.fo(e, n);
                    });
                }
              );
            }),
            (kh.prototype.Gs = function () {
              var e = this;
              return this.persistence.runTransaction(
                "Get highest unacknowledged batch id",
                "readonly-idempotent",
                function (t) {
                  return e.oo.Gs(t);
                }
              );
            }),
            (kh.prototype.Vs = function () {
              var e = this;
              return this.persistence.runTransaction(
                "Get last stream token",
                "readonly-idempotent",
                function (t) {
                  return e.oo.Vs(t);
                }
              );
            }),
            (kh.prototype.Us = function (e) {
              var n = this;
              return this.persistence.runTransaction(
                "Set last stream token",
                "readwrite-primary-idempotent",
                function (t) {
                  return n.oo.Us(t, e);
                }
              );
            }),
            (kh.prototype.Jo = function () {
              var e = this;
              return this.persistence.runTransaction(
                "Get last remote snapshot version",
                "readonly-idempotent",
                function (t) {
                  return e.Oo.Jo(t);
                }
              );
            }),
            (kh.prototype.Yo = function (a) {
              var h = this,
                c = a.li,
                f = this.Do;
              return this.persistence
                .runTransaction(
                  "Apply remote event",
                  "readwrite-primary-idempotent",
                  function (o) {
                    var i = h.ko.Wo({ zo: !0 });
                    f = h.Do;
                    var s = [];
                    pi(a.Si, function (t, e) {
                      var n = f.get(t);
                      if (n) {
                        s.push(
                          h.Oo.Xo(o, e.Vi, t).next(function () {
                            return h.Oo.$o(o, e.Oi, t);
                          })
                        );
                        var r = e.resumeToken;
                        if (0 < r.bn()) {
                          var i = n.vi(r, c).di(o.Zo);
                          (f = f.lt(t, i)),
                            kh.th(n, i, e) && s.push(h.Oo.nh(o, i));
                        }
                      }
                    });
                    var u = Vu(),
                      n = Qu();
                    if (
                      (a.Ci.forEach(function (t, e) {
                        n = n.add(t);
                      }),
                      s.push(
                        i.getEntries(o, n).next(function (r) {
                          a.Ci.forEach(function (t, e) {
                            var n = r.get(t);
                            e instanceof Os && e.version.isEqual(qi.MIN)
                              ? (i.$u(t, c), (u = u.lt(t, e)))
                              : null == n ||
                                0 < e.version.h(n.version) ||
                                (0 === e.version.h(n.version) &&
                                  n.hasPendingWrites)
                              ? (Gr(
                                  !qi.MIN.isEqual(c),
                                  "Cannot add a document when the remote version is zero"
                                ),
                                i.Yu(e, c),
                                (u = u.lt(t, e)))
                              : Mr(
                                  "LocalStore",
                                  "Ignoring outdated watch update for ",
                                  t,
                                  ". Current version:",
                                  n.version,
                                  " Watch version:",
                                  e.version
                                ),
                              a.Ai.has(t) && s.push(h.persistence.As.ih(o, t));
                          });
                        })
                      ),
                      !c.isEqual(qi.MIN))
                    ) {
                      var t = h.Oo.Jo(o).next(function (t) {
                        return (
                          Gr(
                            0 <= c.h(t),
                            "Watch stream reverted to previous snapshot?? " +
                              c +
                              " < " +
                              t
                          ),
                          h.Oo.eh(o, o.Zo, c)
                        );
                      });
                      s.push(t);
                    }
                    return Ya.Wu(s)
                      .next(function () {
                        return i.apply(o);
                      })
                      .next(function () {
                        return h.Vo.lo(o, u);
                      });
                  }
                )
                .then(function (t) {
                  return (h.Do = f), t;
                });
            }),
            (kh.th = function (t, e, n) {
              return (
                Gr(
                  0 < e.resumeToken.bn(),
                  "Attempted to persist target data with no resume token"
                ),
                0 === t.resumeToken.bn() ||
                  e.li.B() - t.li.B() >= this.rh ||
                  0 < n.Oi.size + n.Fi.size + n.Vi.size
              );
            }),
            (kh.prototype.uh = function (t) {
              for (var n = this, e = 0, r = t; e < r.length; e++) {
                var i = r[e],
                  o = i.targetId;
                if ((this.Eo.Su(i.yo, o), this.Eo.Au(i._o, o), !i.fromCache)) {
                  var s = this.Do.get(o);
                  Gr(
                    null !== s,
                    "Can't set limbo-free snapshot version for unknown target: " +
                      o
                  );
                  var u = s.li,
                    a = s.wi(u);
                  this.Do = this.Do.lt(o, a);
                }
              }
              return this.persistence.runTransaction(
                "notifyLocalViewChanges",
                "readwrite-idempotent",
                function (e) {
                  return Ya.forEach(t, function (t) {
                    return Ya.forEach(t._o, function (t) {
                      return n.persistence.As.Ru(e, t);
                    });
                  });
                }
              );
            }),
            (kh.prototype.sh = function (e) {
              var n = this;
              return this.persistence.runTransaction(
                "Get next mutation batch",
                "readonly-idempotent",
                function (t) {
                  return void 0 === e && (e = -1), n.oo.Qs(t, e);
                }
              );
            }),
            (kh.prototype.oh = function (e) {
              var n = this;
              return this.persistence.runTransaction(
                "read document",
                "readonly-idempotent",
                function (t) {
                  return n.Vo.ho(t, e);
                }
              );
            }),
            (kh.prototype.hh = function (r) {
              var i = this;
              return this.persistence
                .runTransaction(
                  "Allocate target",
                  "readwrite-idempotent",
                  function (e) {
                    var n;
                    return i.Oo.ah(e, r).next(function (t) {
                      return t
                        ? ((n = t), Ya.resolve(n))
                        : i.Oo.fh(e).next(function (t) {
                            return (
                              (n = new Lu(r, t, 0, e.Zo)),
                              i.Oo.lh(e, n).next(function () {
                                return n;
                              })
                            );
                          });
                    });
                  }
                )
                .then(function (t) {
                  return (
                    null === i.Do.get(t.targetId) &&
                      ((i.Do = i.Do.lt(t.targetId, t)), i.So.set(r, t.targetId)),
                    t
                  );
                });
            }),
            (kh.prototype.ah = function (t, e) {
              var n = this.So.get(e);
              return void 0 !== n ? Ya.resolve(this.Do.get(n)) : this.Oo.ah(t, e);
            }),
            (kh.prototype.dh = function (n, r) {
              var i = this,
                o = this.Do.get(n);
              Gr(null !== o, "Tried to release nonexistent target: " + n);
              var t = r ? "readwrite-idempotent" : "readwrite-primary-idempotent";
              return this.persistence
                .runTransaction("Release target", t, function (e) {
                  var t = i.Eo.Pu(n);
                  return r
                    ? Ya.resolve()
                    : Ya.forEach(t, function (t) {
                        return i.persistence.As.Ru(e, t);
                      }).next(function () {
                        i.persistence.As.removeTarget(e, o);
                      });
                })
                .then(function () {
                  (i.Do = i.Do.remove(n)), i.So.delete(o.target);
                });
            }),
            (kh.prototype.vh = function (t, n) {
              var r = this,
                i = qi.MIN,
                o = Qu();
              return this.persistence.runTransaction(
                "Execute query",
                "readonly-idempotent",
                function (e) {
                  return r
                    .ah(e, t.Yn())
                    .next(function (t) {
                      if (t)
                        return (
                          (i = t.lastLimboFreeSnapshotVersion),
                          r.Oo.wh(e, t.targetId).next(function (t) {
                            o = t;
                          })
                        );
                    })
                    .next(function () {
                      return r.To.do(e, t, n ? i : qi.MIN, n ? o : Qu());
                    })
                    .next(function (t) {
                      return { documents: t, mh: o };
                    });
                }
              );
            }),
            (kh.prototype.ph = function (e) {
              var n = this;
              return this.persistence.runTransaction(
                "Remote document keys",
                "readonly-idempotent",
                function (t) {
                  return n.Oo.wh(t, e);
                }
              );
            }),
            (kh.prototype.gh = function () {
              return this.persistence.gh();
            }),
            (kh.prototype.bh = function (t) {
              this.oo.$s(t);
            }),
            (kh.prototype.yh = function (t) {
              this.persistence.yh(t);
            }),
            (kh.prototype.Ko = function (t, i, o) {
              var e = this,
                s = i.batch,
                n = s.keys(),
                u = Ya.resolve();
              return (
                n.forEach(function (r) {
                  u = u
                    .next(function () {
                      return o.Zu(t, r);
                    })
                    .next(function (t) {
                      var e = t,
                        n = i._u.get(r);
                      Gr(
                        null !== n,
                        "ackVersions should contain every doc in the write."
                      ),
                        (!e || e.version.h(n) < 0) &&
                          ((e = s.Wt(r, e, i))
                            ? o.Yu(e, i.yu)
                            : Gr(
                                !t,
                                "Mutation batch " +
                                  s +
                                  " applied to document " +
                                  t +
                                  " resulted in null"
                              ));
                    });
                }),
                u.next(function () {
                  return e.oo.Ys(t, s);
                })
              );
            }),
            (kh.prototype._h = function (e) {
              var n = this;
              return this.persistence.runTransaction(
                "Collect garbage",
                "readwrite-primary-idempotent",
                function (t) {
                  return e.Ih(t, n.Do);
                }
              );
            }),
            (kh.prototype.Th = function (e) {
              var n = this,
                t = this.Do.get(e);
              return t
                ? Promise.resolve(t.target)
                : this.persistence.runTransaction(
                    "Get target data",
                    "readonly-idempotent",
                    function (t) {
                      return n.Oo.ye(t, e).next(function (t) {
                        return t ? t.target : null;
                      });
                    }
                  );
            }),
            (kh.prototype.Eh = function () {
              var r = this;
              return this.persistence
                .runTransaction(
                  "Get new document changes",
                  "readonly-idempotent",
                  function (t) {
                    return r.ko.Eh(t, r.Ro);
                  }
                )
                .then(function (t) {
                  var e = t.Dh,
                    n = t.readTime;
                  return (r.Ro = n), e;
                });
            }),
            (kh.prototype.jo = function () {
              return p(this, void 0, void 0, function () {
                var e,
                  n = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        (e = this).persistence.runTransaction(
                          "Synchronize last document change read time",
                          "readonly-idempotent",
                          function (t) {
                            return n.ko.Sh(t);
                          }
                        ),
                      ];
                    case 1:
                      return (e.Ro = t.sent()), [2];
                  }
                });
              });
            }),
            (kh.rh = 3e8),
            kh);
        function kh(t, e, n) {
          (this.persistence = t),
            (this.To = e),
            (this.Eo = new za()),
            (this.Do = new Hi(Hr)),
            (this.So = new Qa(function (t) {
              return t.canonicalId();
            })),
            (this.Ro = qi.MIN),
            Gr(
              t.Co,
              "LocalStore was passed an unstarted persistence implementation"
            ),
            this.persistence.As.Ao(this.Eo),
            (this.oo = t.Po(n)),
            (this.ko = t.No()),
            (this.Oo = t.Fo()),
            (this.Vo = new Ah(this.ko, this.oo, this.persistence.Uo())),
            this.To.xo(this.Vo);
        }
        function Oh(t, e, n, r) {
          (this.targetId = t), (this.fromCache = e), (this.yo = n), (this._o = r);
        }
        function Rh(t, e, n) {
          (this.so = t), (this.oo = e), (this.Cs = n);
        }
        function Ch(t, e) {
          Gr(
            (1 & (this.no = t)) === t,
            "Generator ID " + t + " contains more than 1 reserved bits"
          ),
            this.io(void 0 !== e ? e : this.no);
        }
        function xh(e) {
          return p(this, void 0, void 0, function () {
            return v(this, function (t) {
              if (e.code !== $r.FAILED_PRECONDITION || e.message !== Ja) throw e;
              return Mr("LocalStore", "Unexpectedly lost primary lease"), [2];
            });
          });
        }
        function Lh(t, e) {
          var n = t[0],
            r = t[1],
            i = e[0],
            o = e[1],
            s = Hr(n, i);
          return 0 === s ? Hr(r, o) : s;
        }
        var Ph =
            ((Hh.prototype.Ah = function () {
              return ++this.Ch;
            }),
            (Hh.prototype.Ph = function (t) {
              var e = [t, this.Ah()];
              if (this.buffer.size < this.Rh) this.buffer = this.buffer.add(e);
              else {
                var n = this.buffer.last();
                Lh(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
              }
            }),
            Object.defineProperty(Hh.prototype, "maxValue", {
              get: function () {
                return this.buffer.last()[0];
              },
              enumerable: !0,
              configurable: !0,
            }),
            Hh),
          _h = { kh: !1, Nh: 0, Oh: 0, Fh: 0 },
          Uh =
            ((Bh.jh = function (t) {
              return new Bh(t, Bh.Lh, Bh.qh);
            }),
            (Bh.Bh = -1),
            (Bh.Mh = 1048576),
            (Bh.Gh = new Bh((Bh.Qh = 41943040), (Bh.Lh = 10), (Bh.qh = 1e3))),
            (Bh.DISABLED = new Bh(Bh.Bh, 0, 0)),
            Bh),
          Mh =
            ((jh.prototype.start = function () {
              Gr(
                null === this.Hh,
                "Cannot start an already started LruScheduler"
              ),
                this.Wh.params.Vh !== Uh.Bh && this.Jh();
            }),
            (jh.prototype.stop = function () {
              this.Hh && (this.Hh.cancel(), (this.Hh = null));
            }),
            Object.defineProperty(jh.prototype, "Co", {
              get: function () {
                return null !== this.Hh;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (jh.prototype.Jh = function () {
              var t = this;
              Gr(null === this.Hh, "Cannot schedule GC while a task is pending");
              var e = this.Kh ? 3e5 : 6e4;
              Mr(
                "LruGarbageCollector",
                "Garbage collection scheduled in " + e + "ms"
              ),
                (this.Hh = this.Qr.fu("lru_garbage_collection", e, function () {
                  return (
                    (t.Hh = null),
                    (t.Kh = !0),
                    t.zh
                      ._h(t.Wh)
                      .then(function () {
                        return t.Jh();
                      })
                      .catch(xh)
                  );
                }));
            }),
            jh),
          qh =
            ((Gh.prototype.Xh = function (t, e) {
              return this.Yh.$h(t).next(function (t) {
                return Math.floor((e / 100) * t);
              });
            }),
            (Gh.prototype.Zh = function (t, e) {
              var n = this;
              if (0 === e) return Ya.resolve(xa.Mr);
              var r = new Ph(e);
              return this.Yh.ce(t, function (t) {
                return r.Ph(t.sequenceNumber);
              })
                .next(function () {
                  return n.Yh.tc(t, function (t) {
                    return r.Ph(t);
                  });
                })
                .next(function () {
                  return r.maxValue;
                });
            }),
            (Gh.prototype.nc = function (t, e, n) {
              return this.Yh.nc(t, e, n);
            }),
            (Gh.prototype.ic = function (t, e) {
              return this.Yh.ic(t, e);
            }),
            (Gh.prototype.Ih = function (e, n) {
              var r = this;
              return this.params.Vh === Uh.Bh
                ? (Mr(
                    "LruGarbageCollector",
                    "Garbage collection skipped; disabled"
                  ),
                  Ya.resolve(_h))
                : this.ec(e).next(function (t) {
                    return t < r.params.Vh
                      ? (Mr(
                          "LruGarbageCollector",
                          "Garbage collection skipped; Cache size " +
                            t +
                            " is lower than threshold " +
                            r.params.Vh
                        ),
                        _h)
                      : r.rc(e, n);
                  });
            }),
            (Gh.prototype.ec = function (t) {
              return this.Yh.ec(t);
            }),
            (Gh.prototype.rc = function (e, n) {
              var r,
                i,
                o,
                s,
                u,
                a,
                h,
                c = this,
                f = Date.now();
              return this.Xh(e, this.params.Uh)
                .next(function (t) {
                  return (
                    (i =
                      t > c.params.xh
                        ? (Mr(
                            "LruGarbageCollector",
                            "Capping sequence numbers to collect down to the maximum of " +
                              c.params.xh +
                              " from " +
                              t
                          ),
                          c.params.xh)
                        : t),
                    (s = Date.now()),
                    c.Zh(e, i)
                  );
                })
                .next(function (t) {
                  return (r = t), (u = Date.now()), c.nc(e, r, n);
                })
                .next(function (t) {
                  return (o = t), (a = Date.now()), c.ic(e, r);
                })
                .next(function (t) {
                  return (
                    (h = Date.now()),
                    _r() <= 0 &&
                      Mr(
                        "LruGarbageCollector",
                        "LRU Garbage Collection\n\tCounted targets in " +
                          (s - f) +
                          "ms\n\tDetermined least recently used " +
                          i +
                          " in " +
                          (u - s) +
                          "ms\n\tRemoved " +
                          o +
                          " targets in " +
                          (a - u) +
                          "ms\n\tRemoved " +
                          t +
                          " documents in " +
                          (h - a) +
                          "ms\nTotal Duration: " +
                          (h - f) +
                          "ms"
                      ),
                    Ya.resolve({ kh: !0, Nh: i, Oh: o, Fh: t })
                  );
                });
            }),
            Gh),
          Fh =
            ((Vh.prototype.fh = function (e) {
              var n = this;
              return this.sc(e).next(function (t) {
                return (
                  (t.highestTargetId = n.uc.after(t.highestTargetId)),
                  n.oc(e, t).next(function () {
                    return t.highestTargetId;
                  })
                );
              });
            }),
            (Vh.prototype.Jo = function (t) {
              return this.sc(t).next(function (t) {
                return qi.L(
                  new Mi(
                    t.lastRemoteSnapshotVersion.seconds,
                    t.lastRemoteSnapshotVersion.nanoseconds
                  )
                );
              });
            }),
            (Vh.prototype.hc = function (t) {
              return Qh(t.Xs);
            }),
            (Vh.prototype.eh = function (e, n, r) {
              var i = this;
              return this.sc(e).next(function (t) {
                return (
                  (t.highestListenSequenceNumber = n),
                  r && (t.lastRemoteSnapshotVersion = r.M()),
                  n > t.highestListenSequenceNumber &&
                    (t.highestListenSequenceNumber = n),
                  i.oc(e, t)
                );
              });
            }),
            (Vh.prototype.lh = function (e, n) {
              var r = this;
              return this.cc(e, n).next(function () {
                return r.sc(e).next(function (t) {
                  return (t.targetCount += 1), r.ac(n, t), r.oc(e, t);
                });
              });
            }),
            (Vh.prototype.nh = function (t, e) {
              return this.cc(t, e);
            }),
            (Vh.prototype.fc = function (e, t) {
              var n = this;
              return this.lc(e, t.targetId)
                .next(function () {
                  return zh(e).delete(t.targetId);
                })
                .next(function () {
                  return n.sc(e);
                })
                .next(function (t) {
                  return (
                    Gr(0 < t.targetCount, "Removing from an empty target cache"),
                    (t.targetCount -= 1),
                    n.oc(e, t)
                  );
                });
            }),
            (Vh.prototype.nc = function (r, i, o) {
              var s = this,
                u = 0,
                a = [];
              return zh(r)
                .Ss(function (t, e) {
                  var n = s.serializer.dc(e);
                  n.sequenceNumber <= i &&
                    null === o.get(n.targetId) &&
                    (u++, a.push(s.fc(r, n)));
                })
                .next(function () {
                  return Ya.Wu(a);
                })
                .next(function () {
                  return u;
                });
            }),
            (Vh.prototype.ce = function (t, r) {
              var i = this;
              return zh(t).Ss(function (t, e) {
                var n = i.serializer.dc(e);
                r(n);
              });
            }),
            (Vh.prototype.sc = function (t) {
              return Wh(t.Xs);
            }),
            (Vh.prototype.oc = function (t, e) {
              return ((n = t), zc.ds(n, Dc.store)).put(Dc.key, e);
              var n;
            }),
            (Vh.prototype.cc = function (t, e) {
              return zh(t).put(this.serializer.vc(e));
            }),
            (Vh.prototype.ac = function (t, e) {
              var n = !1;
              return (
                t.targetId > e.highestTargetId &&
                  ((e.highestTargetId = t.targetId), (n = !0)),
                t.sequenceNumber > e.highestListenSequenceNumber &&
                  ((e.highestListenSequenceNumber = t.sequenceNumber), (n = !0)),
                n
              );
            }),
            (Vh.prototype.wc = function (t) {
              return this.sc(t).next(function (t) {
                return t.targetCount;
              });
            }),
            (Vh.prototype.ah = function (t, i) {
              var o = this,
                e = i.canonicalId(),
                n = IDBKeyRange.bound(
                  [e, Number.NEGATIVE_INFINITY],
                  [e, Number.POSITIVE_INFINITY]
                ),
                s = null;
              return zh(t)
                .Ss({ range: n, index: Ac.queryTargetsIndexName }, function (
                  t,
                  e,
                  n
                ) {
                  var r = o.serializer.dc(e);
                  i.isEqual(r.target) && ((s = r), n.done());
                })
                .next(function () {
                  return s;
                });
            }),
            (Vh.prototype.$o = function (n, t, r) {
              var i = this,
                o = [],
                s = Yh(n);
              return (
                t.forEach(function (t) {
                  var e = Fa(t.path);
                  o.push(s.put(new Sc(r, e))), o.push(i.As.Du(n, t));
                }),
                Ya.Wu(o)
              );
            }),
            (Vh.prototype.Xo = function (n, t, r) {
              var i = this,
                o = Yh(n);
              return Ya.forEach(t, function (t) {
                var e = Fa(t.path);
                return Ya.Wu([o.delete([r, e]), i.As.Ru(n, t)]);
              });
            }),
            (Vh.prototype.lc = function (t, e) {
              var n = Yh(t),
                r = IDBKeyRange.bound([e], [e + 1], !1, !0);
              return n.delete(r);
            }),
            (Vh.prototype.wh = function (t, e) {
              var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
                r = Yh(t),
                o = Qu();
              return r
                .Ss({ range: n, Ds: !0 }, function (t, e, n) {
                  var r = ja(t[1]),
                    i = new Bi(r);
                  o = o.add(i);
                })
                .next(function () {
                  return o;
                });
            }),
            (Vh.prototype.Ou = function (t, e) {
              var n = Fa(e.path),
                r = IDBKeyRange.bound([n], [Wr(n)], !1, !0),
                i = 0;
              return Yh(t)
                .Ss(
                  { index: Sc.documentTargetsIndex, Ds: !0, range: r },
                  function (t, e, n) {
                    var r = t[0];
                    t[1], 0 !== r && (i++, n.done());
                  }
                )
                .next(function () {
                  return 0 < i;
                });
            }),
            (Vh.prototype.ye = function (t, e) {
              var n = this;
              return zh(t)
                .get(e)
                .next(function (t) {
                  return t ? n.serializer.dc(t) : null;
                });
            }),
            Vh);
        function Vh(t, e) {
          (this.As = t), (this.serializer = e), (this.uc = Nh.ro());
        }
        function Gh(t, e) {
          (this.Yh = t), (this.params = e);
        }
        function jh(t, e, n) {
          (this.Wh = t),
            (this.Qr = e),
            (this.zh = n),
            (this.Kh = !1),
            (this.Hh = null);
        }
        function Bh(t, e, n) {
          (this.Vh = t), (this.Uh = e), (this.xh = n);
        }
        function Hh(t) {
          (this.Rh = t), (this.buffer = new oo(Lh)), (this.Ch = 0);
        }
        function zh(t) {
          return zc.ds(t, Ac.store);
        }
        function Wh(t) {
          return $a
            .ds(t, Dc.store)
            .get(Dc.key)
            .next(function (t) {
              return Gr(null !== t, "Missing metadata row."), t;
            });
        }
        function Qh(t) {
          return Wh(t).next(function (t) {
            return t.highestListenSequenceNumber;
          });
        }
        function Yh(t) {
          return zc.ds(t, Sc.store);
        }
        var Kh,
          Jh =
            ((Xh.prototype.Yu = function (t, e, n) {
              return tc(t).put(ec(e), n);
            }),
            (Xh.prototype.$u = function (t, e) {
              var n = tc(t),
                r = ec(e);
              return n.delete(r);
            }),
            (Xh.prototype.updateMetadata = function (e, n) {
              var r = this;
              return this.getMetadata(e).next(function (t) {
                return (t.byteSize += n), r.mc(e, t);
              });
            }),
            (Xh.prototype.Zu = function (t, e) {
              var n = this;
              return tc(t)
                .get(ec(e))
                .next(function (t) {
                  return n.pc(t);
                });
            }),
            (Xh.prototype.gc = function (t, e) {
              var n = this;
              return tc(t)
                .get(ec(e))
                .next(function (t) {
                  var e = n.pc(t);
                  return e ? { bc: e, size: nc(t) } : null;
                });
            }),
            (Xh.prototype.getEntries = function (t, e) {
              var r = this,
                i = Gu();
              return this.yc(t, e, function (t, e) {
                var n = r.pc(e);
                i = i.lt(t, n);
              }).next(function () {
                return i;
              });
            }),
            (Xh.prototype._c = function (t, e) {
              var r = this,
                i = Gu(),
                o = new Hi(Bi.G);
              return this.yc(t, e, function (t, e) {
                var n = r.pc(e);
                o = n
                  ? ((i = i.lt(t, n)), o.lt(t, nc(e)))
                  : ((i = i.lt(t, null)), o.lt(t, 0));
              }).next(function () {
                return { Ic: i, Tc: o };
              });
            }),
            (Xh.prototype.yc = function (t, e, i) {
              if (e.J()) return Ya.resolve();
              var n = IDBKeyRange.bound(e.first().path.tt(), e.last().path.tt()),
                o = e.bt(),
                s = o.Dt();
              return tc(t)
                .Ss({ range: n }, function (t, e, n) {
                  for (var r = Bi.at(t); s && Bi.G(s, r) < 0; )
                    i(s, null), (s = o.Dt());
                  s && s.isEqual(r) && (i(s, e), (s = o.St() ? o.Dt() : null)),
                    s ? n.ys(s.path.tt()) : n.done();
                })
                .next(function () {
                  for (; s; ) i(s, null), (s = o.St() ? o.Dt() : null);
                });
            }),
            (Xh.prototype.do = function (t, i, e) {
              var o = this;
              Gr(
                !i.ui(),
                "CollectionGroup queries should be handled in LocalDocumentsView"
              );
              var s = Bu(),
                u = i.path.length + 1,
                n = {};
              if (e.isEqual(qi.MIN)) {
                var r = i.path.tt();
                n.range = IDBKeyRange.lowerBound(r);
              } else {
                var a = i.path.tt(),
                  h = this.serializer.Ec(e);
                (n.range = IDBKeyRange.lowerBound([a, h], !0)),
                  (n.index = Ec.collectionReadTimeIndex);
              }
              return tc(t)
                .Ss(n, function (t, e, n) {
                  if (t.length === u) {
                    var r = o.serializer.Dc(e);
                    i.path.$(r.key.path)
                      ? r instanceof ks && i.matches(r) && (s = s.lt(r.key, r))
                      : n.done();
                  }
                })
                .next(function () {
                  return s;
                });
            }),
            (Xh.prototype.Eh = function (t, e) {
              var r = this,
                i = Vu(),
                o = this.serializer.Ec(e),
                n = tc(t),
                s = IDBKeyRange.lowerBound(o, !0);
              return n
                .Ss({ index: Ec.readTimeIndex, range: s }, function (t, e) {
                  var n = r.serializer.Dc(e);
                  (i = i.lt(n.key, n)), (o = e.readTime);
                })
                .next(function () {
                  return { Dh: i, readTime: r.serializer.Sc(o) };
                });
            }),
            (Xh.prototype.Sh = function (t) {
              var r = this,
                e = tc(t),
                i = qi.MIN;
              return e
                .Ss({ index: Ec.readTimeIndex, reverse: !0 }, function (t, e, n) {
                  e.readTime && (i = r.serializer.Sc(e.readTime)), n.done();
                })
                .next(function () {
                  return i;
                });
            }),
            (Xh.prototype.Wo = function (t) {
              return new Xh.Rc(this, !!t && t.zo);
            }),
            (Xh.prototype.Cc = function (t) {
              return this.getMetadata(t).next(function (t) {
                return t.byteSize;
              });
            }),
            (Xh.prototype.getMetadata = function (t) {
              return Zh(t)
                .get(Ic.key)
                .next(function (t) {
                  return Gr(!!t, "Missing document cache metadata"), t;
                });
            }),
            (Xh.prototype.mc = function (t, e) {
              return Zh(t).put(Ic.key, e);
            }),
            (Xh.prototype.pc = function (t) {
              if (t) {
                var e = this.serializer.Dc(t);
                return e instanceof Os && e.version.isEqual(qi.q()) ? null : e;
              }
              return null;
            }),
            (Xh.Rc =
              (t($h, (Kh = Ka)),
              ($h.prototype.es = function (s) {
                var u = this,
                  a = [],
                  h = 0,
                  c = new oo(function (t, e) {
                    return Hr(t.nt(), e.nt());
                  });
                return (
                  this.Ku.forEach(function (t, e) {
                    var n = u.Pc.get(t);
                    if (
                      (Gr(
                        void 0 !== n,
                        "Cannot modify a document that wasn't read (for " +
                          t +
                          ")"
                      ),
                      e)
                    ) {
                      Gr(
                        !u.readTime.isEqual(qi.MIN),
                        "Cannot add a document with a read time of zero"
                      );
                      var r = u.Ac.serializer.kc(e, u.readTime);
                      c = c.add(t.path.H());
                      var i = nc(r);
                      (h += i - n), a.push(u.Ac.Yu(s, t, r));
                    } else if (((h -= n), u.zo)) {
                      var o = u.Ac.serializer.kc(new Os(t, qi.q()), u.readTime);
                      a.push(u.Ac.Yu(s, t, o));
                    } else a.push(u.Ac.$u(s, t));
                  }),
                  c.forEach(function (t) {
                    a.push(u.Ac.Cs.Ls(s, t));
                  }),
                  a.push(this.Ac.updateMetadata(s, h)),
                  Ya.Wu(a)
                );
              }),
              ($h.prototype.ts = function (t, e) {
                var n = this;
                return this.Ac.gc(t, e).next(function (t) {
                  return null === t
                    ? (n.Pc.set(e, 0), null)
                    : (n.Pc.set(e, t.size), t.bc);
                });
              }),
              ($h.prototype.ns = function (t, e) {
                var n = this;
                return this.Ac._c(t, e).next(function (t) {
                  var e = t.Ic;
                  return (
                    t.Tc.forEach(function (t, e) {
                      n.Pc.set(t, e);
                    }),
                    e
                  );
                });
              }),
              $h)),
            Xh);
        function Xh(t, e) {
          (this.serializer = t), (this.Cs = e);
        }
        function $h(t, e) {
          var n = Kh.call(this) || this;
          return (
            (n.Ac = t),
            (n.zo = e),
            (n.Pc = new Qa(function (t) {
              return t.toString();
            })),
            n
          );
        }
        function Zh(t) {
          return zc.ds(t, Ic.store);
        }
        function tc(t) {
          return zc.ds(t, Ec.store);
        }
        function ec(t) {
          return t.path.tt();
        }
        function nc(t) {
          var e;
          if (t.document) e = t.document;
          else if (t.unknownDocument) e = t.unknownDocument;
          else {
            if (!t.noDocument) throw Vr("Unknown remote document type");
            e = t.noDocument;
          }
          return JSON.stringify(e).length;
        }
        var rc =
            ((hc.prototype.Ls = function (t, e) {
              return this.Nc.add(e), Ya.resolve();
            }),
            (hc.prototype.po = function (t, e) {
              return Ya.resolve(this.Nc.getEntries(e));
            }),
            hc),
          ic =
            ((ac.prototype.add = function (t) {
              Gr(t.length % 2 == 1, "Expected a collection path.");
              var e = t.X(),
                n = t.H(),
                r = this.index[e] || new oo(Vi.G),
                i = !r.has(n);
              return (this.index[e] = r.add(n)), i;
            }),
            (ac.prototype.has = function (t) {
              var e = t.X(),
                n = t.H(),
                r = this.index[e];
              return r && r.has(n);
            }),
            (ac.prototype.getEntries = function (t) {
              return (this.index[t] || new oo(Vi.G)).tt();
            }),
            ac),
          oc = 9,
          sc =
            ((uc.prototype.createOrUpgrade = function (n, r, t, e) {
              var i = this;
              Gr(
                t < e && 0 <= t && e <= oc,
                "Unexpected schema upgrade from v" + t + " to v{toVersion}."
              );
              var o,
                s = new th(r);
              t < 1 &&
                1 <= e &&
                (n.createObjectStore(fc.store),
                (o = n).createObjectStore(pc.store, { keyPath: pc.keyPath }),
                o
                  .createObjectStore(dc.store, {
                    keyPath: dc.keyPath,
                    autoIncrement: !0,
                  })
                  .createIndex(dc.userMutationsIndex, dc.userMutationsKeyPath, {
                    unique: !0,
                  }),
                o.createObjectStore(mc.store),
                Lc(n),
                n.createObjectStore(Ec.store));
              var u,
                a = Ya.resolve();
              return (
                t < 3 &&
                  3 <= e &&
                  (0 !== t &&
                    ((u = n).deleteObjectStore(Sc.store),
                    u.deleteObjectStore(Ac.store),
                    u.deleteObjectStore(Dc.store),
                    Lc(n)),
                  (a = a.next(function () {
                    return (
                      (t = s.store(Dc.store)),
                      (e = new Dc(0, 0, qi.MIN.M(), 0)),
                      t.put(Dc.key, e)
                    );
                    var t, e;
                  }))),
                t < 4 &&
                  4 <= e &&
                  (0 !== t &&
                    (a = a.next(function () {
                      return (
                        (r = n),
                        (i = s)
                          .store(dc.store)
                          .Is()
                          .next(function (t) {
                            r.deleteObjectStore(dc.store),
                              r
                                .createObjectStore(dc.store, {
                                  keyPath: dc.keyPath,
                                  autoIncrement: !0,
                                })
                                .createIndex(
                                  dc.userMutationsIndex,
                                  dc.userMutationsKeyPath,
                                  { unique: !0 }
                                );
                            var e = i.store(dc.store),
                              n = t.map(function (t) {
                                return e.put(t);
                              });
                            return Ya.Wu(n);
                          })
                      );
                      var r, i;
                    })),
                  (a = a.next(function () {
                    n.createObjectStore(Pc.store, { keyPath: Pc.keyPath });
                  }))),
                t < 5 &&
                  5 <= e &&
                  (a = a.next(function () {
                    return i.removeAcknowledgedMutations(s);
                  })),
                t < 6 &&
                  6 <= e &&
                  (a = a.next(function () {
                    return n.createObjectStore(Ic.store), i.addDocumentGlobal(s);
                  })),
                t < 7 &&
                  7 <= e &&
                  (a = a.next(function () {
                    return i.ensureSequenceNumbers(s);
                  })),
                t < 8 &&
                  8 <= e &&
                  (a = a.next(function () {
                    return i.createCollectionParentIndex(n, s);
                  })),
                t < 9 &&
                  9 <= e &&
                  (a = a.next(function () {
                    var t, e;
                    (e = n).objectStoreNames.contains("remoteDocumentChanges") &&
                      e.deleteObjectStore("remoteDocumentChanges"),
                      (t = r.objectStore(Ec.store)).createIndex(
                        Ec.readTimeIndex,
                        Ec.readTimeIndexPath,
                        { unique: !1 }
                      ),
                      t.createIndex(
                        Ec.collectionReadTimeIndex,
                        Ec.collectionReadTimeIndexPath,
                        { unique: !1 }
                      );
                  })),
                a
              );
            }),
            (uc.prototype.addDocumentGlobal = function (e) {
              var n = 0;
              return e
                .store(Ec.store)
                .Ss(function (t, e) {
                  n += nc(e);
                })
                .next(function () {
                  var t = new Ic(n);
                  return e.store(Ic.store).put(Ic.key, t);
                });
            }),
            (uc.prototype.removeAcknowledgedMutations = function (r) {
              var i = this,
                t = r.store(pc.store),
                e = r.store(dc.store);
              return t.Is().next(function (t) {
                return Ya.forEach(t, function (n) {
                  var t = IDBKeyRange.bound(
                    [n.userId, -1],
                    [n.userId, n.lastAcknowledgedBatchId]
                  );
                  return e.Is(dc.userMutationsIndex, t).next(function (t) {
                    return Ya.forEach(t, function (t) {
                      Gr(
                        t.userId === n.userId,
                        "Cannot process batch " +
                          t.batchId +
                          " from unexpected user"
                      );
                      var e = i.serializer.Bs(t);
                      return bh(r, n.userId, e).next(function () {});
                    });
                  });
                });
              });
            }),
            (uc.prototype.ensureSequenceNumbers = function (t) {
              var s = t.store(Sc.store),
                e = t.store(Ec.store);
              return Qh(t).next(function (i) {
                var o = [];
                return e
                  .Ss(function (t, e) {
                    var n = new Vi(t),
                      r = [0, Fa(n)];
                    o.push(
                      s.get(r).next(function (t) {
                        return t
                          ? Ya.resolve()
                          : ((e = n), s.put(new Sc(0, Fa(e), i)));
                        var e;
                      })
                    );
                  })
                  .next(function () {
                    return Ya.Wu(o);
                  });
              });
            }),
            (uc.prototype.createCollectionParentIndex = function (t, e) {
              function i(t) {
                if (o.add(t)) {
                  var e = t.X(),
                    n = t.H();
                  return r.put({ collectionId: e, parent: Fa(n) });
                }
              }
              t.createObjectStore(kc.store, { keyPath: kc.keyPath });
              var r = e.store(kc.store),
                o = new ic();
              return e
                .store(Ec.store)
                .Ss({ Ds: !0 }, function (t, e) {
                  var n = new Vi(t);
                  return i(n.H());
                })
                .next(function () {
                  return e.store(mc.store).Ss({ Ds: !0 }, function (t, e) {
                    t[0];
                    var n = t[1],
                      r = (t[2], ja(n));
                    return i(r.H());
                  });
                });
            }),
            uc);
        function uc(t) {
          this.serializer = t;
        }
        function ac() {
          this.index = {};
        }
        function hc() {
          this.Nc = new ic();
        }
        function cc(t, e) {
          (this.seconds = t), (this.nanoseconds = e);
        }
        var fc = ((lc.store = "owner"), (lc.key = "owner"), lc);
        function lc(t, e, n) {
          (this.ownerId = t),
            (this.allowTabSynchronization = e),
            (this.leaseTimestampMs = n);
        }
        var pc = ((yc.store = "mutationQueues"), (yc.keyPath = "userId"), yc),
          dc =
            ((vc.store = "mutations"),
            (vc.keyPath = "batchId"),
            (vc.userMutationsIndex = "userMutationsIndex"),
            (vc.userMutationsKeyPath = ["userId", "batchId"]),
            vc);
        function vc(t, e, n, r, i) {
          (this.userId = t),
            (this.batchId = e),
            (this.localWriteTimeMs = n),
            (this.baseMutations = r),
            (this.mutations = i);
        }
        function yc(t, e, n) {
          (this.userId = t),
            (this.lastAcknowledgedBatchId = e),
            (this.lastStreamToken = n);
        }
        var mc =
          ((gc.prefixForUser = function (t) {
            return [t];
          }),
          (gc.prefixForPath = function (t, e) {
            return [t, Fa(e)];
          }),
          (gc.key = function (t, e, n) {
            return [t, Fa(e), n];
          }),
          (gc.store = "documentMutations"),
          (gc.PLACEHOLDER = new gc()),
          gc);
        function gc() {}
        function wc(t, e) {
          (this.path = t), (this.readTime = e);
        }
        function bc(t, e) {
          (this.path = t), (this.version = e);
        }
        var Ec =
            ((Nc.store = "remoteDocuments"),
            (Nc.readTimeIndex = "readTimeIndex"),
            (Nc.readTimeIndexPath = "readTime"),
            (Nc.collectionReadTimeIndex = "collectionReadTimeIndex"),
            (Nc.collectionReadTimeIndexPath = ["parentPath", "readTime"]),
            Nc),
          Ic =
            ((Tc.store = "remoteDocumentGlobal"),
            (Tc.key = "remoteDocumentGlobalKey"),
            Tc);
        function Tc(t) {
          this.byteSize = t;
        }
        function Nc(t, e, n, r, i, o) {
          (this.unknownDocument = t),
            (this.noDocument = e),
            (this.document = n),
            (this.hasCommittedMutations = r),
            (this.readTime = i),
            (this.parentPath = o);
        }
        var Ac =
            ((xc.store = "targets"),
            (xc.keyPath = "targetId"),
            (xc.queryTargetsIndexName = "queryTargetsIndex"),
            (xc.queryTargetsKeyPath = ["canonicalId", "targetId"]),
            xc),
          Sc =
            ((Cc.store = "targetDocuments"),
            (Cc.keyPath = ["targetId", "path"]),
            (Cc.documentTargetsIndex = "documentTargetsIndex"),
            (Cc.documentTargetsKeyPath = ["path", "targetId"]),
            Cc),
          Dc = ((Rc.key = "targetGlobalKey"), (Rc.store = "targetGlobal"), Rc),
          kc =
            ((Oc.store = "collectionParents"),
            (Oc.keyPath = ["collectionId", "parent"]),
            Oc);
        function Oc(t, e) {
          (this.collectionId = t), (this.parent = e);
        }
        function Rc(t, e, n, r) {
          (this.highestTargetId = t),
            (this.highestListenSequenceNumber = e),
            (this.lastRemoteSnapshotVersion = n),
            (this.targetCount = r);
        }
        function Cc(t, e, n) {
          (this.targetId = t),
            (this.path = e),
            Gr(
              (0 === t) == (void 0 !== (this.sequenceNumber = n)),
              "A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number"
            );
        }
        function xc(t, e, n, r, i, o, s) {
          (this.targetId = t),
            (this.canonicalId = e),
            (this.readTime = n),
            (this.resumeToken = r),
            (this.lastListenSequenceNumber = i),
            (this.lastLimboFreeSnapshotVersion = o),
            (this.query = s);
        }
        function Lc(t) {
          t
            .createObjectStore(Sc.store, { keyPath: Sc.keyPath })
            .createIndex(Sc.documentTargetsIndex, Sc.documentTargetsKeyPath, {
              unique: !0,
            }),
            t
              .createObjectStore(Ac.store, { keyPath: Ac.keyPath })
              .createIndex(Ac.queryTargetsIndexName, Ac.queryTargetsKeyPath, {
                unique: !0,
              }),
            t.createObjectStore(Dc.store);
        }
        var Pc = ((_c.store = "clientMetadata"), (_c.keyPath = "clientId"), _c);
        function _c(t, e, n, r) {
          (this.clientId = t),
            (this.updateTimeMs = e),
            (this.networkEnabled = n),
            (this.inForeground = r);
        }
        var Uc = s(
            s(
              s(
                [
                  pc.store,
                  dc.store,
                  mc.store,
                  Ec.store,
                  Ac.store,
                  fc.store,
                  Dc.store,
                  Sc.store,
                ],
                [Pc.store]
              ),
              [Ic.store]
            ),
            [kc.store]
          ),
          Mc =
            ((qc.prototype.Ls = function (t, e) {
              var n = this;
              if (
                (Gr(e.length % 2 == 1, "Expected a collection path."),
                this.Oc.has(e))
              )
                return Ya.resolve();
              var r = e.X(),
                i = e.H();
              t.us(function () {
                n.Oc.add(e);
              });
              var o = { collectionId: r, parent: Fa(i) };
              return Fc(t).put(o);
            }),
            (qc.prototype.po = function (t, i) {
              var o = [],
                e = IDBKeyRange.bound([i, ""], [Wr(i), ""], !1, !0);
              return Fc(t)
                .Is(e)
                .next(function (t) {
                  for (var e = 0, n = t; e < n.length; e++) {
                    var r = n[e];
                    if (r.collectionId !== i) break;
                    o.push(ja(r.parent));
                  }
                  return o;
                });
            }),
            qc);
        function qc() {
          this.Oc = new ic();
        }
        function Fc(t) {
          return zc.ds(t, kc.store);
        }
        var Vc =
          ((Gc.prototype.Dc = function (t) {
            if (t.document)
              return this.Fc.Ke(t.document, !!t.hasCommittedMutations);
            if (t.noDocument) {
              var e = Bi.at(t.noDocument.path),
                n = this.Vc(t.noDocument.readTime);
              return new Os(e, n, {
                hasCommittedMutations: !!t.hasCommittedMutations,
              });
            }
            return t.unknownDocument
              ? ((e = Bi.at(t.unknownDocument.path)),
                (n = this.Vc(t.unknownDocument.version)),
                new Rs(e, n))
              : Vr("Unexpected DbRemoteDocument");
          }),
          (Gc.prototype.kc = function (t, e) {
            var n = this.Ec(e),
              r = t.key.path.H().tt();
            if (t instanceof ks) {
              var i = t.proto ? t.proto : this.Fc.ze(t),
                o = t.hasCommittedMutations;
              return new Ec(null, null, i, o, n, r);
            }
            if (t instanceof Os) {
              var s = t.key.path.tt(),
                u = this.Uc(t.version);
              return (
                (o = t.hasCommittedMutations),
                new Ec(null, new wc(s, u), null, o, n, r)
              );
            }
            if (t instanceof Rs) {
              s = t.key.path.tt();
              var a = this.Uc(t.version);
              return new Ec(new bc(s, a), null, null, !0, n, r);
            }
            return Vr("Unexpected MaybeDocument");
          }),
          (Gc.prototype.Ec = function (t) {
            var e = t.M();
            return [e.seconds, e.nanoseconds];
          }),
          (Gc.prototype.Sc = function (t) {
            var e = new Mi(t[0], t[1]);
            return qi.L(e);
          }),
          (Gc.prototype.Uc = function (t) {
            var e = t.M();
            return new cc(e.seconds, e.nanoseconds);
          }),
          (Gc.prototype.Vc = function (t) {
            var e = new Mi(t.seconds, t.nanoseconds);
            return qi.L(e);
          }),
          (Gc.prototype.js = function (t, e) {
            var n = this,
              r = e.baseMutations.map(function (t) {
                return n.Fc.ir(t);
              }),
              i = e.mutations.map(function (t) {
                return n.Fc.ir(t);
              });
            return new dc(t, e.batchId, e.En.toMillis(), r, i);
          }),
          (Gc.prototype.Bs = function (t) {
            var e = this,
              n = (t.baseMutations || []).map(function (t) {
                return e.Fc.sr(t);
              }),
              r = t.mutations.map(function (t) {
                return e.Fc.sr(t);
              }),
              i = Mi.fromMillis(t.localWriteTimeMs);
            return new Ba(t.batchId, i, n, r);
          }),
          (Gc.prototype.xc = function (t) {
            var e = [];
            return (
              t.forEach(function (t) {
                e.push(Fa(t.path));
              }),
              e
            );
          }),
          (Gc.prototype.jc = function (t) {
            for (var e = Qu(), n = 0, r = t; n < r.length; n++) {
              var i = r[n];
              e = e.add(new Bi(ja(i)));
            }
            return e;
          }),
          (Gc.prototype.dc = function (t) {
            var e,
              n = this.Vc(t.readTime),
              r =
                void 0 !== t.lastLimboFreeSnapshotVersion
                  ? this.Vc(t.lastLimboFreeSnapshotVersion)
                  : qi.MIN;
            return (
              (e =
                void 0 !== t.query.documents
                  ? this.Fc.vr(t.query)
                  : this.Fc.br(t.query)),
              new Lu(
                e,
                t.targetId,
                0,
                t.lastListenSequenceNumber,
                n,
                r,
                vu.fromBase64String(t.resumeToken)
              )
            );
          }),
          (Gc.prototype.vc = function (t) {
            Gr(
              0 === t.fi,
              "Only queries with purpose 0 may be stored, got " + t.fi
            );
            var e,
              n = this.Uc(t.li),
              r = this.Uc(t.lastLimboFreeSnapshotVersion);
            e = t.target.Nn() ? this.Fc.dr(t.target) : this.Fc.wr(t.target);
            var i = t.resumeToken.toBase64();
            return new Ac(
              t.targetId,
              t.target.canonicalId(),
              n,
              i,
              t.sequenceNumber,
              r,
              e
            );
          }),
          Gc);
        function Gc(t) {
          this.Fc = t;
        }
        var jc,
          Bc =
            "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.",
          Hc = (t(Qc, (jc = Xa)), Qc),
          zc =
            ((Wc.ds = function (t, e) {
              if (t instanceof Hc) return $a.ds(t.Xs, e);
              throw Vr(
                "IndexedDbPersistence must use instances of IndexedDbTransaction"
              );
            }),
            (Wc.Yc = function (n) {
              return p(this, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (!Wc.cs())
                        throw new Zr(
                          $r.UNIMPLEMENTED,
                          "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled."
                        );
                      return [
                        4,
                        (e = new Wc(
                          n.allowTabSynchronization,
                          n.persistenceKey,
                          n.clientId,
                          n.platform,
                          n.Xc,
                          n.Lc,
                          n.serializer,
                          n.qc
                        )).start(),
                      ];
                    case 1:
                      return t.sent(), [2, e];
                  }
                });
              });
            }),
            (Wc.prototype.start = function () {
              var e = this;
              return (
                Gr(!this.Co, "IndexedDbPersistence double-started!"),
                Gr(null !== this.window, "Expected 'window' to be defined"),
                $a
                  .hs(this.Kc, oc, new sc(this.serializer))
                  .then(function (t) {
                    return (e.$c = t), e.Zc();
                  })
                  .then(function () {
                    return (
                      e.ta(),
                      e.na(),
                      e.ia(),
                      e.$c.runTransaction(
                        "readonly-idempotent",
                        [Dc.store],
                        function (t) {
                          return Qh(t);
                        }
                      )
                    );
                  })
                  .then(function (t) {
                    e.ea = new xa(t, e.qc);
                  })
                  .then(function () {
                    e.Bc = !0;
                  })
                  .catch(function (t) {
                    return e.$c && e.$c.close(), Promise.reject(t);
                  })
              );
            }),
            (Wc.prototype.ra = function (n) {
              var t = this;
              return (
                (this.zc = function (e) {
                  return p(t, void 0, void 0, function () {
                    return v(this, function (t) {
                      return this.Co ? [2, n(e)] : [2];
                    });
                  });
                }),
                n(this.isPrimary)
              );
            }),
            (Wc.prototype.ua = function (n) {
              var t = this;
              this.$c.vs(function (e) {
                return p(t, void 0, void 0, function () {
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return null !== e.newVersion ? [3, 2] : [4, n()];
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              });
            }),
            (Wc.prototype.yh = function (t) {
              var e = this;
              this.networkEnabled !== t &&
                ((this.networkEnabled = t),
                this.Lc.$r(function () {
                  return p(e, void 0, void 0, function () {
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return this.Co ? [4, this.Zc()] : [3, 2];
                        case 1:
                          t.sent(), (t.label = 2);
                        case 2:
                          return [2];
                      }
                    });
                  });
                }));
            }),
            (Wc.prototype.Zc = function () {
              var n = this;
              return this.$c
                .runTransaction("readwrite-idempotent", Uc, function (e) {
                  return Kc(e)
                    .put(
                      new Pc(
                        n.clientId,
                        Date.now(),
                        n.networkEnabled,
                        n.inForeground
                      )
                    )
                    .next(function () {
                      if (n.isPrimary)
                        return n.sa(e).next(function (t) {
                          t ||
                            ((n.isPrimary = !1),
                            n.Lc.$r(function () {
                              return n.zc(!1);
                            }));
                        });
                    })
                    .next(function () {
                      return n.oa(e);
                    })
                    .next(function (t) {
                      return n.isPrimary && !t
                        ? n.ha(e).next(function () {
                            return !1;
                          })
                        : !!t &&
                            n.ca(e).next(function () {
                              return !0;
                            });
                    });
                })
                .catch(function (t) {
                  if (!n.allowTabSynchronization) throw t;
                  return (
                    Mr(
                      "IndexedDbPersistence",
                      "Releasing owner lease after error during lease refresh",
                      t
                    ),
                    !1
                  );
                })
                .then(function (t) {
                  n.isPrimary !== t &&
                    n.Lc.$r(function () {
                      return n.zc(t);
                    }),
                    (n.isPrimary = t);
                });
            }),
            (Wc.prototype.sa = function (t) {
              var e = this;
              return Yc(t)
                .get(fc.key)
                .next(function (t) {
                  return Ya.resolve(e.aa(t));
                });
            }),
            (Wc.prototype.fa = function (t) {
              return Kc(t).delete(this.clientId);
            }),
            (Wc.prototype.la = function () {
              return p(this, void 0, void 0, function () {
                var i = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return !this.isPrimary || this.da(this.Wc, 18e5)
                        ? [3, 2]
                        : ((this.Wc = Date.now()),
                          [
                            4,
                            this.runTransaction(
                              "maybeGarbageCollectMultiClientState",
                              "readwrite-primary-idempotent",
                              function (t) {
                                var r = Wc.ds(t, Pc.store);
                                return r.Is().next(function (t) {
                                  var e = i.va(t, 18e5),
                                    n = t.filter(function (t) {
                                      return -1 === e.indexOf(t);
                                    });
                                  return Ya.forEach(n, function (t) {
                                    return r.delete(t.clientId);
                                  }).next(function () {
                                    return n;
                                  });
                                });
                              }
                            ).catch(function () {
                              return [];
                            }),
                          ]);
                    case 1:
                      t.sent().forEach(function (t) {
                        i.window.localStorage.removeItem(i.wa(t.clientId));
                      }),
                        (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (Wc.prototype.ia = function () {
              var t = this;
              this.Gc = this.Lc.fu("client_metadata_refresh", 4e3, function () {
                return t
                  .Zc()
                  .then(function () {
                    return t.la();
                  })
                  .then(function () {
                    return t.ia();
                  });
              });
            }),
            (Wc.prototype.aa = function (t) {
              return !!t && t.ownerId === this.clientId;
            }),
            (Wc.prototype.oa = function (e) {
              var i = this;
              return Yc(e)
                .get(fc.key)
                .next(function (t) {
                  if (
                    null !== t &&
                    i.da(t.leaseTimestampMs, 5e3) &&
                    !i.ma(t.ownerId)
                  ) {
                    if (i.aa(t) && i.networkEnabled) return !0;
                    if (!i.aa(t)) {
                      if (!t.allowTabSynchronization)
                        throw new Zr($r.FAILED_PRECONDITION, Bc);
                      return !1;
                    }
                  }
                  return (
                    !(!i.networkEnabled || !i.inForeground) ||
                    Kc(e)
                      .Is()
                      .next(function (t) {
                        return (
                          void 0 ===
                          i.va(t, 5e3).find(function (t) {
                            if (i.clientId !== t.clientId) {
                              var e = !i.networkEnabled && t.networkEnabled,
                                n = !i.inForeground && t.inForeground,
                                r = i.networkEnabled === t.networkEnabled;
                              if (e || (n && r)) return !0;
                            }
                            return !1;
                          })
                        );
                      })
                  );
                })
                .next(function (t) {
                  return (
                    i.isPrimary !== t &&
                      Mr(
                        "IndexedDbPersistence",
                        "Client " +
                          (t ? "is" : "is not") +
                          " eligible for a primary lease."
                      ),
                    t
                  );
                });
            }),
            (Wc.prototype.shutdown = function () {
              return p(this, void 0, void 0, function () {
                var e = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (this.Bc = !1),
                        this.pa(),
                        this.Gc && (this.Gc.cancel(), (this.Gc = null)),
                        this.ga(),
                        this.ba(),
                        [
                          4,
                          this.$c.runTransaction(
                            "readwrite-idempotent",
                            [fc.store, Pc.store],
                            function (t) {
                              return e.ha(t).next(function () {
                                return e.fa(t);
                              });
                            }
                          ),
                        ]
                      );
                    case 1:
                      return t.sent(), this.$c.close(), this.ya(), [2];
                  }
                });
              });
            }),
            (Wc.prototype.va = function (t, e) {
              var n = this;
              return t.filter(function (t) {
                return n.da(t.updateTimeMs, e) && !n.ma(t.clientId);
              });
            }),
            (Wc.prototype.gh = function () {
              var e = this;
              return this.$c.runTransaction(
                "readonly-idempotent",
                [Pc.store],
                function (t) {
                  return Kc(t)
                    .Is()
                    .next(function (t) {
                      return e.va(t, 18e5).map(function (t) {
                        return t.clientId;
                      });
                    });
                }
              );
            }),
            (Wc.clearPersistence = function (n) {
              return p(this, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return Wc.cs()
                        ? ((e = n + Wc.Hc), [4, $a.delete(e)])
                        : [2, Promise.resolve()];
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            Object.defineProperty(Wc.prototype, "Co", {
              get: function () {
                return this.Bc;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Wc.prototype.Po = function (t) {
              return (
                Gr(
                  this.Co,
                  "Cannot initialize MutationQueue before persistence is started."
                ),
                mh.ks(t, this.serializer, this.Cs, this.As)
              );
            }),
            (Wc.prototype.Fo = function () {
              return (
                Gr(
                  this.Co,
                  "Cannot initialize TargetCache before persistence is started."
                ),
                this.Oo
              );
            }),
            (Wc.prototype.No = function () {
              return (
                Gr(
                  this.Co,
                  "Cannot initialize RemoteDocumentCache before persistence is started."
                ),
                this.so
              );
            }),
            (Wc.prototype.Uo = function () {
              return (
                Gr(
                  this.Co,
                  "Cannot initialize IndexManager before persistence is started."
                ),
                this.Cs
              );
            }),
            (Wc.prototype.runTransaction = function (n, t, r) {
              var i = this;
              Mr("IndexedDbPersistence", "Starting transaction:", n);
              var o,
                e = t.endsWith("idempotent"),
                s = t.startsWith("readonly")
                  ? e
                    ? "readonly-idempotent"
                    : "readonly"
                  : e
                  ? "readwrite-idempotent"
                  : "readwrite";
              return this.$c
                .runTransaction(s, Uc, function (e) {
                  return (
                    (o = new Hc(e, i.ea.next())),
                    "readwrite-primary" === t ||
                    "readwrite-primary-idempotent" === t
                      ? i
                          .sa(e)
                          .next(function (t) {
                            return !!t || i.oa(e);
                          })
                          .next(function (t) {
                            if (!t)
                              throw (
                                (qr(
                                  "Failed to obtain primary lease for action '" +
                                    n +
                                    "'."
                                ),
                                (i.isPrimary = !1),
                                i.Lc.$r(function () {
                                  return i.zc(!1);
                                }),
                                new Zr($r.FAILED_PRECONDITION, Ja))
                              );
                            return r(o);
                          })
                          .next(function (t) {
                            return i.ca(e).next(function () {
                              return t;
                            });
                          })
                      : i._a(e).next(function () {
                          return r(o);
                        })
                  );
                })
                .then(function (t) {
                  return o.ss(), t;
                });
            }),
            (Wc.prototype._a = function (t) {
              var e = this;
              return Yc(t)
                .get(fc.key)
                .next(function (t) {
                  if (
                    null !== t &&
                    e.da(t.leaseTimestampMs, 5e3) &&
                    !e.ma(t.ownerId) &&
                    !e.aa(t) &&
                    !t.allowTabSynchronization
                  )
                    throw new Zr($r.FAILED_PRECONDITION, Bc);
                });
            }),
            (Wc.prototype.ca = function (t) {
              var e = new fc(
                this.clientId,
                this.allowTabSynchronization,
                Date.now()
              );
              return Yc(t).put(fc.key, e);
            }),
            (Wc.cs = function () {
              return $a.cs();
            }),
            (Wc.Ia = function (t) {
              var e = t.s.projectId;
              return (
                t.s.o || (e += "." + t.s.database),
                "firestore/" + t.persistenceKey + "/" + e + "/"
              );
            }),
            (Wc.prototype.ha = function (t) {
              var e = this,
                n = Yc(t);
              return n.get(fc.key).next(function (t) {
                return e.aa(t)
                  ? (Mr("IndexedDbPersistence", "Releasing primary lease."),
                    n.delete(fc.key))
                  : Ya.resolve();
              });
            }),
            (Wc.prototype.da = function (t, e) {
              var n = Date.now();
              return !(
                t < n - e ||
                (n < t &&
                  (qr(
                    "Detected an update time that is in the future: " +
                      t +
                      " > " +
                      n
                  ),
                  1))
              );
            }),
            (Wc.prototype.ta = function () {
              var t = this;
              null !== this.document &&
                "function" == typeof this.document.addEventListener &&
                ((this.Qc = function () {
                  t.Lc.$r(function () {
                    return (
                      (t.inForeground = "visible" === t.document.visibilityState),
                      t.Zc()
                    );
                  });
                }),
                this.document.addEventListener("visibilitychange", this.Qc),
                (this.inForeground =
                  "visible" === this.document.visibilityState));
            }),
            (Wc.prototype.ga = function () {
              this.Qc &&
                (Gr(
                  null !== this.document &&
                    "function" == typeof this.document.addEventListener,
                  "Expected 'document.addEventListener' to be a function"
                ),
                this.document.removeEventListener("visibilitychange", this.Qc),
                (this.Qc = null));
            }),
            (Wc.prototype.na = function () {
              var t = this;
              "function" == typeof this.window.addEventListener &&
                ((this.Mc = function () {
                  t.pa(),
                    t.Lc.$r(function () {
                      return t.shutdown();
                    });
                }),
                this.window.addEventListener("unload", this.Mc));
            }),
            (Wc.prototype.ba = function () {
              this.Mc &&
                (Gr(
                  "function" == typeof this.window.removeEventListener,
                  "Expected 'window.removeEventListener' to be a function"
                ),
                this.window.removeEventListener("unload", this.Mc),
                (this.Mc = null));
            }),
            (Wc.prototype.ma = function (t) {
              try {
                var e = null !== this.Jc.getItem(this.wa(t));
                return (
                  Mr(
                    "IndexedDbPersistence",
                    "Client '" +
                      t +
                      "' " +
                      (e ? "is" : "is not") +
                      " zombied in LocalStorage"
                  ),
                  e
                );
              } catch (t) {
                return (
                  qr(
                    "IndexedDbPersistence",
                    "Failed to get zombied client id.",
                    t
                  ),
                  !1
                );
              }
            }),
            (Wc.prototype.pa = function () {
              try {
                this.Jc.setItem(this.wa(this.clientId), String(Date.now()));
              } catch (t) {
                qr("Failed to set zombie client id.", t);
              }
            }),
            (Wc.prototype.ya = function () {
              try {
                this.Jc.removeItem(this.wa(this.clientId));
              } catch (t) {}
            }),
            (Wc.prototype.wa = function (t) {
              return "firestore_zombie_" + this.persistenceKey + "_" + t;
            }),
            (Wc.Hc = "main"),
            Wc);
        function Wc(t, e, n, r, i, o, s, u) {
          if (
            ((this.allowTabSynchronization = t),
            (this.persistenceKey = e),
            (this.clientId = n),
            (this.Lc = o),
            (this.qc = u),
            (this.Bc = !1),
            (this.isPrimary = !1),
            (this.networkEnabled = !0),
            (this.Mc = null),
            (this.inForeground = !1),
            (this.Qc = null),
            (this.Gc = null),
            (this.Wc = Number.NEGATIVE_INFINITY),
            (this.zc = function (t) {
              return Promise.resolve();
            }),
            (this.As = new Jc(this, i)),
            (this.Kc = e + Wc.Hc),
            (this.serializer = new Vc(s)),
            (this.document = r.document),
            (this.Oo = new Fh(this.As, this.serializer)),
            (this.Cs = new Mc()),
            (this.so = new Jh(this.serializer, this.Cs)),
            !r.window || !r.window.localStorage)
          )
            throw new Zr(
              $r.UNIMPLEMENTED,
              "IndexedDB persistence is only available on platforms that support LocalStorage."
            );
          (this.window = r.window), (this.Jc = this.window.localStorage);
        }
        function Qc(t, e) {
          var n = jc.call(this) || this;
          return (n.Xs = t), (n.Zo = e), n;
        }
        function Yc(t) {
          return t.store(fc.store);
        }
        function Kc(t) {
          return t.store(Pc.store);
        }
        var Jc =
          ((Xc.prototype.$h = function (t) {
            var n = this.Ea(t);
            return this.db
              .Fo()
              .wc(t)
              .next(function (e) {
                return n.next(function (t) {
                  return e + t;
                });
              });
          }),
          (Xc.prototype.Ea = function (t) {
            var e = 0;
            return this.tc(t, function (t) {
              e++;
            }).next(function () {
              return e;
            });
          }),
          (Xc.prototype.ce = function (t, e) {
            return this.db.Fo().ce(t, e);
          }),
          (Xc.prototype.tc = function (t, n) {
            return this.Da(t, function (t, e) {
              return n(e);
            });
          }),
          (Xc.prototype.Ao = function (t) {
            this.Ta = t;
          }),
          (Xc.prototype.Du = function (t, e) {
            return $c(t, e);
          }),
          (Xc.prototype.Ru = function (t, e) {
            return $c(t, e);
          }),
          (Xc.prototype.nc = function (t, e, n) {
            return this.db.Fo().nc(t, e, n);
          }),
          (Xc.prototype.Zs = function (t, e) {
            return $c(t, e);
          }),
          (Xc.prototype.Sa = function (t, e) {
            return this.Ta.Ou(e)
              ? Ya.resolve(!0)
              : ((r = e),
                (i = !1),
                Th((n = t))
                  .Rs(function (t) {
                    return wh(n, t, r).next(function (t) {
                      return t && (i = !0), Ya.resolve(!t);
                    });
                  })
                  .next(function () {
                    return i;
                  }));
            var n, r, i;
          }),
          (Xc.prototype.ic = function (r, i) {
            var o = this,
              s = this.db.No().Wo(),
              u = [],
              a = 0;
            return this.Da(r, function (e, t) {
              if (t <= i) {
                var n = o.Sa(r, e).next(function (t) {
                  if (!t)
                    return (
                      a++,
                      s.Zu(r, e).next(function () {
                        return s.$u(e), Yh(r).delete([0, Fa(e.path)]);
                      })
                    );
                });
                u.push(n);
              }
            })
              .next(function () {
                return Ya.Wu(u);
              })
              .next(function () {
                return s.apply(r);
              })
              .next(function () {
                return a;
              });
          }),
          (Xc.prototype.removeTarget = function (t, e) {
            var n = e.di(t.Zo);
            return this.db.Fo().nh(t, n);
          }),
          (Xc.prototype.ih = function (t, e) {
            return $c(t, e);
          }),
          (Xc.prototype.Da = function (t, o) {
            var s,
              e = Yh(t),
              u = xa.Mr;
            return e
              .Ss({ index: Sc.documentTargetsIndex }, function (t, e) {
                var n = t[0],
                  r = (t[1], e.path),
                  i = e.sequenceNumber;
                0 === n
                  ? (u !== xa.Mr && o(new Bi(ja(s)), u), (u = i), (s = r))
                  : (u = xa.Mr);
              })
              .next(function () {
                u !== xa.Mr && o(new Bi(ja(s)), u);
              });
          }),
          (Xc.prototype.ec = function (t) {
            return this.db.No().Cc(t);
          }),
          Xc);
        function Xc(t, e) {
          (this.db = t), (this.Ta = null), (this.Wh = new qh(this, e));
        }
        function $c(t, e) {
          return Yh(t).put(((n = e), (r = t.Zo), new Sc(0, Fa(n.path), r)));
          var n, r;
        }
        var Zc =
            ((nf.prototype.xo = function (t) {
              this.Ra = t;
            }),
            (nf.prototype.do = function (e, r, i, o) {
              var s = this;
              return (
                Gr(void 0 !== this.Ra, "setLocalDocumentsView() not called"),
                r.Jn() || i.isEqual(qi.MIN)
                  ? this.Ca(e, r)
                  : this.Ra.fo(e, o).next(function (t) {
                      var n = s.Aa(r, t);
                      return (r.ii() || r.ei()) && s.Pa(r.Fn, n, o, i)
                        ? s.Ca(e, r)
                        : (_r() <= 0 &&
                            Mr(
                              "IndexFreeQueryEngine",
                              "Re-using previous result from %s to execute query: %s",
                              i.toString(),
                              r.toString()
                            ),
                          s.Ra.do(e, r, i).next(function (e) {
                            return (
                              n.forEach(function (t) {
                                e = e.lt(t.key, t);
                              }),
                              e
                            );
                          }));
                    })
              );
            }),
            (nf.prototype.Aa = function (n, t) {
              var r = new oo(function (t, e) {
                return n.Xn(t, e);
              });
              return (
                t.forEach(function (t, e) {
                  e instanceof ks && n.matches(e) && (r = r.add(e));
                }),
                r
              );
            }),
            (nf.prototype.Pa = function (t, e, n, r) {
              if (n.size !== e.size) return !0;
              var i = "F" === t ? e.last() : e.first();
              return !!i && (i.hasPendingWrites || 0 < i.version.h(r));
            }),
            (nf.prototype.Ca = function (t, e) {
              return (
                _r() <= 0 &&
                  Mr(
                    "IndexFreeQueryEngine",
                    "Using full collection scan to execute query: %s",
                    e.toString()
                  ),
                this.Ra.do(t, e, qi.MIN)
              );
            }),
            nf),
          tf =
            ((ef.prototype.Ns = function (t) {
              return Ya.resolve(0 === this.oo.length);
            }),
            (ef.prototype.Os = function (t, e, n) {
              var r = e.batchId,
                i = this.Oa(r, "acknowledged");
              Gr(
                0 === i,
                "Can only acknowledge the first batch in the mutation queue"
              );
              var o = this.oo[i];
              return (
                Gr(
                  r === o.batchId,
                  "Queue ordering failure: expected batch " +
                    r +
                    ", got batch " +
                    o.batchId
                ),
                (this.lastStreamToken = n),
                Ya.resolve()
              );
            }),
            (ef.prototype.Vs = function (t) {
              return Ya.resolve(this.lastStreamToken);
            }),
            (ef.prototype.Us = function (t, e) {
              return (this.lastStreamToken = e), Ya.resolve();
            }),
            (ef.prototype.xs = function (t, e, n, r) {
              Gr(0 !== r.length, "Mutation batches should not be empty");
              var i = this.ka;
              this.ka++,
                0 < this.oo.length &&
                  Gr(
                    this.oo[this.oo.length - 1].batchId < i,
                    "Mutation batchIDs must be monotonically increasing order"
                  );
              var o = new Ba(i, e, n, r);
              this.oo.push(o);
              for (var s = 0, u = r; s < u.length; s++) {
                var a = u[s];
                (this.Na = this.Na.add(new Wa(a.key, i))),
                  this.Cs.Ls(t, a.key.path.H());
              }
              return Ya.resolve(o);
            }),
            (ef.prototype.qs = function (t, e) {
              return Ya.resolve(this.Fa(e));
            }),
            (ef.prototype.Ms = function (t, e) {
              var n = this.Fa(e);
              return (
                Gr(null != n, "Failed to find local mutation batch."),
                Ya.resolve(n.keys())
              );
            }),
            (ef.prototype.Qs = function (t, e) {
              var n = e + 1,
                r = this.Va(n),
                i = r < 0 ? 0 : r;
              return Ya.resolve(this.oo.length > i ? this.oo[i] : null);
            }),
            (ef.prototype.Gs = function () {
              return Ya.resolve(0 === this.oo.length ? -1 : this.ka - 1);
            }),
            (ef.prototype.Ws = function (t) {
              return Ya.resolve(this.oo.slice());
            }),
            (ef.prototype.zs = function (t, n) {
              var r = this,
                e = new Wa(n, 0),
                i = new Wa(n, Number.POSITIVE_INFINITY),
                o = [];
              return (
                this.Na.Lt([e, i], function (t) {
                  Gr(
                    n.isEqual(t.key),
                    "Should only iterate over a single key's batches"
                  );
                  var e = r.Fa(t.Fu);
                  Gr(
                    null !== e,
                    "Batches in the index must exist in the main table"
                  ),
                    o.push(e);
                }),
                Ya.resolve(o)
              );
            }),
            (ef.prototype.Ks = function (t, e) {
              var r = this,
                i = new oo(Hr);
              return (
                e.forEach(function (e) {
                  var t = new Wa(e, 0),
                    n = new Wa(e, Number.POSITIVE_INFINITY);
                  r.Na.Lt([t, n], function (t) {
                    Gr(
                      e.isEqual(t.key),
                      "For each key, should only iterate over a single key's batches"
                    ),
                      (i = i.add(t.Fu));
                  });
                }),
                Ya.resolve(this.Ua(i))
              );
            }),
            (ef.prototype.Js = function (t, e) {
              Gr(
                !e.ui(),
                "CollectionGroup queries should be handled in LocalDocumentsView"
              );
              var n = e.path,
                r = n.length + 1,
                i = n;
              Bi.ht(i) || (i = i.child(""));
              var o = new Wa(new Bi(i), 0),
                s = new oo(Hr);
              return (
                this.Na.qt(function (t) {
                  var e = t.key.path;
                  return !!n.$(e) && (e.length === r && (s = s.add(t.Fu)), !0);
                }, o),
                Ya.resolve(this.Ua(s))
              );
            }),
            (ef.prototype.Ua = function (t) {
              var n = this,
                r = [];
              return (
                t.forEach(function (t) {
                  var e = n.Fa(t);
                  null !== e && r.push(e);
                }),
                r
              );
            }),
            (ef.prototype.Ys = function (n, r) {
              var i = this;
              Gr(
                0 === this.Oa(r.batchId, "removed"),
                "Can only remove the first entry of the mutation queue"
              ),
                this.oo.shift();
              var o = this.Na;
              return Ya.forEach(r.mutations, function (t) {
                var e = new Wa(t.key, r.batchId);
                return (o = o.delete(e)), i.As.Zs(n, t.key);
              }).next(function () {
                i.Na = o;
              });
            }),
            (ef.prototype.$s = function (t) {}),
            (ef.prototype.Ou = function (t, e) {
              var n = new Wa(e, 0),
                r = this.Na.Bt(n);
              return Ya.resolve(e.isEqual(r && r.key));
            }),
            (ef.prototype.to = function (t) {
              return (
                0 === this.oo.length &&
                  Gr(
                    this.Na.J(),
                    "Document leak -- detected dangling mutation references when queue is empty."
                  ),
                Ya.resolve()
              );
            }),
            (ef.prototype.Oa = function (t, e) {
              var n = this.Va(t);
              return (
                Gr(0 <= n && n < this.oo.length, "Batches must exist to be " + e),
                n
              );
            }),
            (ef.prototype.Va = function (t) {
              return 0 === this.oo.length ? 0 : t - this.oo[0].batchId;
            }),
            (ef.prototype.Fa = function (t) {
              var e = this.Va(t);
              if (e < 0 || e >= this.oo.length) return null;
              var n = this.oo[e];
              return Gr(n.batchId === t, "If found batch must match"), n;
            }),
            ef);
        function ef(t, e) {
          (this.Cs = t),
            (this.As = e),
            (this.oo = []),
            (this.ka = 1),
            (this.lastStreamToken = vu.ai),
            (this.Na = new oo(Wa.Sn));
        }
        function nf() {}
        var rf,
          of,
          sf,
          uf,
          af =
            ((xf.prototype.Yu = function (t, e, n) {
              Gr(
                !n.isEqual(qi.MIN),
                "Cannot add a document with a read time of zero"
              );
              var r = e.key,
                i = this.docs.get(r),
                o = i ? i.size : 0,
                s = this.xa(e);
              return (
                (this.docs = this.docs.lt(r, { bc: e, size: s, readTime: n })),
                (this.size += s - o),
                this.Cs.Ls(t, r.path.H())
              );
            }),
            (xf.prototype.$u = function (t) {
              var e = this.docs.get(t);
              e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
            }),
            (xf.prototype.Zu = function (t, e) {
              var n = this.docs.get(e);
              return Ya.resolve(n ? n.bc : null);
            }),
            (xf.prototype.getEntries = function (t, e) {
              var n = this,
                r = Gu();
              return (
                e.forEach(function (t) {
                  var e = n.docs.get(t);
                  r = r.lt(t, e ? e.bc : null);
                }),
                Ya.resolve(r)
              );
            }),
            (xf.prototype.do = function (t, e, n) {
              Gr(
                !e.ui(),
                "CollectionGroup queries should be handled in LocalDocumentsView"
              );
              for (
                var r = Bu(), i = new Bi(e.path.child("")), o = this.docs.yt(i);
                o.St();
  
              ) {
                var s = o.Dt(),
                  u = s.key,
                  a = s.value,
                  h = a.bc,
                  c = a.readTime;
                if (!e.path.$(u.path)) break;
                c.h(n) <= 0 ||
                  (h instanceof ks && e.matches(h) && (r = r.lt(h.key, h)));
              }
              return Ya.resolve(r);
            }),
            (xf.prototype.ja = function (t, e) {
              return Ya.forEach(this.docs, function (t) {
                return e(t);
              });
            }),
            (xf.prototype.Eh = function (t, e) {
              throw new Error(
                "getNewDocumentChanges() is not supported with MemoryPersistence"
              );
            }),
            (xf.prototype.Sh = function (t) {
              return Ya.resolve(qi.MIN);
            }),
            (xf.prototype.Wo = function (t) {
              return new xf.Rc(this);
            }),
            (xf.prototype.Cc = function (t) {
              return Ya.resolve(this.size);
            }),
            (xf.Rc =
              (t(Lf, (uf = Ka)),
              (Lf.prototype.es = function (n) {
                var r = this,
                  i = [];
                return (
                  this.Ku.forEach(function (t, e) {
                    e ? i.push(r.Ac.Yu(n, e, r.readTime)) : r.Ac.$u(t);
                  }),
                  Ya.Wu(i)
                );
              }),
              (Lf.prototype.ts = function (t, e) {
                return this.Ac.Zu(t, e);
              }),
              (Lf.prototype.ns = function (t, e) {
                return this.Ac.getEntries(t, e);
              }),
              Lf)),
            xf),
          hf =
            ((Cf.prototype.ce = function (t, n) {
              return (
                this.La.forEach(function (t, e) {
                  return n(e);
                }),
                Ya.resolve()
              );
            }),
            (Cf.prototype.Jo = function (t) {
              return Ya.resolve(this.lastRemoteSnapshotVersion);
            }),
            (Cf.prototype.hc = function (t) {
              return Ya.resolve(this.qa);
            }),
            (Cf.prototype.fh = function (t) {
              var e = this.uc.after(this.highestTargetId);
              return (this.highestTargetId = e), Ya.resolve(e);
            }),
            (Cf.prototype.eh = function (t, e, n) {
              return (
                n && (this.lastRemoteSnapshotVersion = n),
                e > this.qa && (this.qa = e),
                Ya.resolve()
              );
            }),
            (Cf.prototype.cc = function (t) {
              this.La.set(t.target, t);
              var e = t.targetId;
              e > this.highestTargetId && (this.highestTargetId = e),
                t.sequenceNumber > this.qa && (this.qa = t.sequenceNumber);
            }),
            (Cf.prototype.lh = function (t, e) {
              return (
                Gr(!this.La.has(e.target), "Adding a target that already exists"),
                this.cc(e),
                (this.targetCount += 1),
                Ya.resolve()
              );
            }),
            (Cf.prototype.nh = function (t, e) {
              return (
                Gr(this.La.has(e.target), "Updating a non-existent target"),
                this.cc(e),
                Ya.resolve()
              );
            }),
            (Cf.prototype.fc = function (t, e) {
              return (
                Gr(0 < this.targetCount, "Removing a target from an empty cache"),
                Gr(
                  this.La.has(e.target),
                  "Removing a non-existent target from the cache"
                ),
                this.La.delete(e.target),
                this.Ba.Pu(e.targetId),
                (this.targetCount -= 1),
                Ya.resolve()
              );
            }),
            (Cf.prototype.nc = function (n, r, i) {
              var o = this,
                s = 0,
                u = [];
              return (
                this.La.forEach(function (t, e) {
                  e.sequenceNumber <= r &&
                    null === i.get(e.targetId) &&
                    (o.La.delete(t), u.push(o.lc(n, e.targetId)), s++);
                }),
                Ya.Wu(u).next(function () {
                  return s;
                })
              );
            }),
            (Cf.prototype.wc = function (t) {
              return Ya.resolve(this.targetCount);
            }),
            (Cf.prototype.ah = function (t, e) {
              var n = this.La.get(e) || null;
              return Ya.resolve(n);
            }),
            (Cf.prototype.ye = function (t, e) {
              return Vr("Not yet implemented.");
            }),
            (Cf.prototype.$o = function (e, t, n) {
              this.Ba.Su(t, n);
              var r = this.persistence.As,
                i = [];
              return (
                r &&
                  t.forEach(function (t) {
                    i.push(r.Du(e, t));
                  }),
                Ya.Wu(i)
              );
            }),
            (Cf.prototype.Xo = function (e, t, n) {
              this.Ba.Au(t, n);
              var r = this.persistence.As,
                i = [];
              return (
                r &&
                  t.forEach(function (t) {
                    i.push(r.Ru(e, t));
                  }),
                Ya.Wu(i)
              );
            }),
            (Cf.prototype.lc = function (t, e) {
              return this.Ba.Pu(e), Ya.resolve();
            }),
            (Cf.prototype.wh = function (t, e) {
              var n = this.Ba.Nu(e);
              return Ya.resolve(n);
            }),
            (Cf.prototype.Ou = function (t, e) {
              return Ya.resolve(this.Ba.Ou(e));
            }),
            Cf),
          cf =
            ((Rf.Ga = function (t, e) {
              return new Rf(t, function (t) {
                return new pf(t, e);
              });
            }),
            (Rf.Wa = function (t) {
              return new Rf(t, function (t) {
                return new lf(t);
              });
            }),
            (Rf.prototype.shutdown = function () {
              return (this.Bc = !1), Promise.resolve();
            }),
            Object.defineProperty(Rf.prototype, "Co", {
              get: function () {
                return this.Bc;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Rf.prototype.gh = function () {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  return [2, [this.clientId]];
                });
              });
            }),
            (Rf.prototype.ra = function (t) {
              return t(!0);
            }),
            (Rf.prototype.ua = function () {}),
            (Rf.prototype.yh = function (t) {}),
            (Rf.prototype.Uo = function () {
              return this.Cs;
            }),
            (Rf.prototype.Po = function (t) {
              var e = this.Ma[t.v()];
              return (
                e || ((e = new tf(this.Cs, this.As)), (this.Ma[t.v()] = e)), e
              );
            }),
            (Rf.prototype.Fo = function () {
              return this.Oo;
            }),
            (Rf.prototype.No = function () {
              return this.so;
            }),
            (Rf.prototype.runTransaction = function (t, e, n) {
              var r = this;
              Mr("MemoryPersistence", "Starting transaction:", t);
              var i = new ff(this.ea.next());
              return (
                this.As.za(),
                n(i)
                  .next(function (t) {
                    return r.As.Ka(i).next(function () {
                      return t;
                    });
                  })
                  .Qu()
                  .then(function (t) {
                    return i.ss(), t;
                  })
              );
            }),
            (Rf.prototype.Ha = function (e, n) {
              return Ya.zu(
                ((t = this.Ma),
                (r = []),
                di(t, function (t, e) {
                  return r.push(e);
                }),
                r).map(function (t) {
                  return function () {
                    return t.Ou(e, n);
                  };
                })
              );
              var t, r;
            }),
            Rf),
          ff = (t(Of, (sf = Xa)), Of),
          lf =
            (Object.defineProperty(kf.prototype, "Ya", {
              get: function () {
                if (this.Ja) return this.Ja;
                throw Vr("orphanedDocuments is only valid during a transaction.");
              },
              enumerable: !0,
              configurable: !0,
            }),
            (kf.prototype.Ao = function (t) {
              this.Ta = t;
            }),
            (kf.prototype.Du = function (t, e) {
              return this.Ya.delete(e), Ya.resolve();
            }),
            (kf.prototype.Ru = function (t, e) {
              return this.Ya.add(e), Ya.resolve();
            }),
            (kf.prototype.Zs = function (t, e) {
              return this.Ya.add(e), Ya.resolve();
            }),
            (kf.prototype.removeTarget = function (t, e) {
              var n = this,
                r = this.persistence.Fo();
              return r
                .wh(t, e.targetId)
                .next(function (t) {
                  t.forEach(function (t) {
                    return n.Ya.add(t);
                  });
                })
                .next(function () {
                  return r.fc(t, e);
                });
            }),
            (kf.prototype.za = function () {
              this.Ja = new Set();
            }),
            (kf.prototype.Ka = function (t) {
              var n = this,
                r = this.persistence.No().Wo();
              return Ya.forEach(this.Ya, function (e) {
                return n.Xa(t, e).next(function (t) {
                  t || r.$u(e);
                });
              }).next(function () {
                return (n.Ja = null), r.apply(t);
              });
            }),
            (kf.prototype.ih = function (t, e) {
              var n = this;
              return this.Xa(t, e).next(function (t) {
                t ? n.Ya.delete(e) : n.Ya.add(e);
              });
            }),
            (kf.prototype.Qa = function (t) {
              return 0;
            }),
            (kf.prototype.Xa = function (t, e) {
              var n = this;
              return Ya.zu([
                function () {
                  return n.persistence.Fo().Ou(t, e);
                },
                function () {
                  return n.persistence.Ha(t, e);
                },
                function () {
                  return Ya.resolve(n.Ta.Ou(e));
                },
              ]);
            }),
            kf),
          pf =
            ((Df.prototype.za = function () {}),
            (Df.prototype.Ka = function (t) {
              return Ya.resolve();
            }),
            (Df.prototype.ce = function (t, e) {
              return this.persistence.Fo().ce(t, e);
            }),
            (Df.prototype.$h = function (t) {
              var n = this.Za(t);
              return this.persistence
                .Fo()
                .wc(t)
                .next(function (e) {
                  return n.next(function (t) {
                    return e + t;
                  });
                });
            }),
            (Df.prototype.Za = function (t) {
              var e = 0;
              return this.tc(t, function (t) {
                e++;
              }).next(function () {
                return e;
              });
            }),
            (Df.prototype.tc = function (n, r) {
              var i = this;
              return Ya.forEach(this.$a, function (t, e) {
                return i.Sa(n, t, e).next(function (t) {
                  return t ? Ya.resolve() : r(e);
                });
              });
            }),
            (Df.prototype.Ao = function (t) {
              this.Ta = t;
            }),
            (Df.prototype.nc = function (t, e, n) {
              return this.persistence.Fo().nc(t, e, n);
            }),
            (Df.prototype.ic = function (t, n) {
              var r = this,
                i = 0,
                e = this.persistence.No(),
                o = e.Wo();
              return e
                .ja(t, function (e) {
                  return r.Sa(t, e, n).next(function (t) {
                    t || (i++, o.$u(e));
                  });
                })
                .next(function () {
                  return o.apply(t);
                })
                .next(function () {
                  return i;
                });
            }),
            (Df.prototype.Zs = function (t, e) {
              return this.$a.set(e, t.Zo), Ya.resolve();
            }),
            (Df.prototype.removeTarget = function (t, e) {
              var n = e.di(t.Zo);
              return this.persistence.Fo().nh(t, n);
            }),
            (Df.prototype.Du = function (t, e) {
              return this.$a.set(e, t.Zo), Ya.resolve();
            }),
            (Df.prototype.Ru = function (t, e) {
              return this.$a.set(e, t.Zo), Ya.resolve();
            }),
            (Df.prototype.ih = function (t, e) {
              return this.$a.set(e, t.Zo), Ya.resolve();
            }),
            (Df.prototype.Qa = function (t) {
              var e = t.key.toString().length;
              return t instanceof ks && (e += t.data().bn()), e;
            }),
            (Df.prototype.Sa = function (t, e, n) {
              var r = this;
              return Ya.zu([
                function () {
                  return r.persistence.Ha(t, e);
                },
                function () {
                  return Ya.resolve(r.Ta.Ou(e));
                },
                function () {
                  return r.persistence.Fo().Ou(t, e);
                },
                function () {
                  var t = r.$a.get(e);
                  return Ya.resolve(void 0 !== t && n < t);
                },
              ]);
            }),
            (Df.prototype.ec = function (t) {
              return this.persistence.No().Cc(t);
            }),
            Df),
          df =
            ((Sf.prototype.reset = function () {
              this.ef = 0;
            }),
            (Sf.prototype.sf = function () {
              this.ef = this.if;
            }),
            (Sf.prototype.hf = function (t) {
              var e = this;
              this.cancel();
              var n = Math.floor(this.ef + this.cf()),
                r = Math.max(0, Date.now() - this.uf),
                i = Math.max(0, n - r);
              0 < this.ef &&
                Mr(
                  "ExponentialBackoff",
                  "Backing off for " +
                    i +
                    " ms (base delay: " +
                    this.ef +
                    " ms, delay with jitter: " +
                    n +
                    " ms, last attempt: " +
                    r +
                    " ms ago)"
                ),
                (this.rf = this.Lc.fu(this.Gr, i, function () {
                  return (e.uf = Date.now()), t();
                })),
                (this.ef *= this.nf),
                this.ef < this.tf && (this.ef = this.tf),
                this.ef > this.if && (this.ef = this.if);
            }),
            (Sf.prototype.cancel = function () {
              null !== this.rf && (this.rf.cancel(), (this.rf = null));
            }),
            (Sf.prototype.cf = function () {
              return (Math.random() - 0.5) * this.ef;
            }),
            Sf),
          vf =
            ((Af.prototype.wf = function () {
              return 1 === this.state || 2 === this.state || 4 === this.state;
            }),
            (Af.prototype.mf = function () {
              return 2 === this.state;
            }),
            (Af.prototype.start = function () {
              3 !== this.state
                ? (Gr(0 === this.state, "Already started"), this.auth())
                : this.pf();
            }),
            (Af.prototype.stop = function () {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.wf() ? [4, this.close(0)] : [3, 2];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (Af.prototype.gf = function () {
              Gr(!this.wf(), "Can only inhibit backoff in a stopped state"),
                (this.state = 0),
                this.vf.reset();
            }),
            (Af.prototype.bf = function () {
              var t = this;
              this.mf() &&
                null === this.df &&
                (this.df = this.Lc.fu(this.af, 6e4, function () {
                  return t.yf();
                }));
            }),
            (Af.prototype._f = function (t) {
              this.If(), this.stream.send(t);
            }),
            (Af.prototype.yf = function () {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  return this.mf() ? [2, this.close(0)] : [2];
                });
              });
            }),
            (Af.prototype.If = function () {
              this.df && (this.df.cancel(), (this.df = null));
            }),
            (Af.prototype.close = function (e, n) {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        Gr(this.wf(), "Only started streams should be closed."),
                        Gr(
                          3 === e || Ws(n),
                          "Can't provide an error when not in an error state."
                        ),
                        this.If(),
                        this.vf.cancel(),
                        this.lf++,
                        3 !== e
                          ? this.vf.reset()
                          : n && n.code === $r.RESOURCE_EXHAUSTED
                          ? (qr(n.toString()),
                            qr(
                              "Using maximum backoff delay to prevent overloading the backend."
                            ),
                            this.vf.sf())
                          : n && n.code === $r.UNAUTHENTICATED && this.ff.I(),
                        null !== this.stream &&
                          (this.Tf(), this.stream.close(), (this.stream = null)),
                        (this.state = e),
                        [4, this.listener.Ef(n)]
                      );
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (Af.prototype.Tf = function () {}),
            (Af.prototype.auth = function () {
              var n = this;
              Gr(0 === this.state, "Must be in initial state to auth"),
                (this.state = 1);
              var t = this.Df(this.lf),
                e = this.lf;
              this.ff.getToken().then(
                function (t) {
                  n.lf === e && n.Sf(t);
                },
                function (e) {
                  t(function () {
                    var t = new Zr(
                      $r.UNKNOWN,
                      "Fetching auth token failed: " + e.message
                    );
                    return n.Rf(t);
                  });
                }
              );
            }),
            (Af.prototype.Sf = function (t) {
              var e = this;
              Gr(
                1 === this.state,
                "Trying to start stream in a non-starting state"
              );
              var n = this.Df(this.lf);
              (this.stream = this.Cf(t)),
                this.stream.Af(function () {
                  n(function () {
                    return (
                      Gr(
                        1 === e.state,
                        "Expected stream to be in state Starting, but was " +
                          e.state
                      ),
                      (e.state = 2),
                      e.listener.Af()
                    );
                  });
                }),
                this.stream.Ef(function (t) {
                  n(function () {
                    return e.Rf(t);
                  });
                }),
                this.stream.onMessage(function (t) {
                  n(function () {
                    return e.onMessage(t);
                  });
                });
            }),
            (Af.prototype.pf = function () {
              var t = this;
              Gr(
                3 === this.state,
                "Should only perform backoff when in Error state"
              ),
                (this.state = 4),
                this.vf.hf(function () {
                  return p(t, void 0, void 0, function () {
                    return v(this, function (t) {
                      return (
                        Gr(
                          4 === this.state,
                          "Backoff elapsed but state is now: " + this.state
                        ),
                        (this.state = 0),
                        this.start(),
                        Gr(this.wf(), "PersistentStream should have started"),
                        [2]
                      );
                    });
                  });
                });
            }),
            (Af.prototype.Rf = function (t) {
              return (
                Gr(this.wf(), "Can't handle server close on non-started stream"),
                Mr("PersistentStream", "close with error: " + t),
                (this.stream = null),
                this.close(3, t)
              );
            }),
            (Af.prototype.Df = function (e) {
              var n = this;
              return function (t) {
                n.Lc.$r(function () {
                  return n.lf === e
                    ? t()
                    : (Mr(
                        "PersistentStream",
                        "stream callback skipped by getCloseGuardedDispatcher."
                      ),
                      Promise.resolve());
                });
              };
            }),
            Af),
          yf =
            (t(Nf, (of = vf)),
            (Nf.prototype.Cf = function (t) {
              return this.connection.Pf("Listen", t);
            }),
            (Nf.prototype.onMessage = function (t) {
              this.vf.reset();
              var e = this.serializer.Ze(t),
                n = this.serializer.nr(t);
              return this.listener.kf(e, n);
            }),
            (Nf.prototype.watch = function (t) {
              var e = {};
              (e.database = this.serializer.je),
                (e.addTarget = this.serializer.Yn(t));
              var n = this.serializer.Tr(t);
              n && (e.labels = n), this._f(e);
            }),
            (Nf.prototype.Nf = function (t) {
              var e = {};
              (e.database = this.serializer.je), (e.removeTarget = t), this._f(e);
            }),
            Nf),
          mf =
            (t(Tf, (rf = vf)),
            Object.defineProperty(Tf.prototype, "Ff", {
              get: function () {
                return this.Of;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Tf.prototype.start = function () {
              (this.Of = !1), rf.prototype.start.call(this);
            }),
            (Tf.prototype.Tf = function () {
              this.Of && this.Vf([]);
            }),
            (Tf.prototype.Cf = function (t) {
              return this.connection.Pf("Write", t);
            }),
            (Tf.prototype.onMessage = function (t) {
              if (
                (Gr(
                  !!t.streamToken,
                  "Got a write response without a stream token"
                ),
                (this.lastStreamToken = this.serializer.Re(t.streamToken)),
                this.Of)
              ) {
                this.vf.reset();
                var e = this.serializer.lr(t.writeResults, t.commitTime),
                  n = this.serializer.fromVersion(t.commitTime);
                return this.listener.Uf(n, e);
              }
              return (
                Gr(
                  !t.writeResults || 0 === t.writeResults.length,
                  "Got mutation results for handshake"
                ),
                (this.Of = !0),
                this.listener.xf()
              );
            }),
            (Tf.prototype.jf = function () {
              Gr(this.mf(), "Writing handshake requires an opened stream"),
                Gr(!this.Of, "Handshake already completed");
              var t = {};
              (t.database = this.serializer.je), this._f(t);
            }),
            (Tf.prototype.Vf = function (t) {
              var e = this;
              Gr(this.mf(), "Writing mutations requires an opened stream"),
                Gr(
                  this.Of,
                  "Handshake must be complete before writing mutations"
                ),
                Gr(
                  0 < this.lastStreamToken.bn(),
                  "Trying to write mutation without a token"
                );
              var n = {
                streamToken: this.serializer.Se(this.lastStreamToken),
                writes: t.map(function (t) {
                  return e.serializer.ir(t);
                }),
              };
              this._f(n);
            }),
            Tf),
          gf =
            ((If.prototype.Lf = function (t) {
              return new mf(
                this.Lc,
                this.connection,
                this.credentials,
                this.serializer,
                t
              );
            }),
            (If.prototype.qf = function (t) {
              return new yf(
                this.Lc,
                this.connection,
                this.credentials,
                this.serializer,
                t
              );
            }),
            (If.prototype.commit = function (t) {
              var e = this,
                n = {
                  database: this.serializer.je,
                  writes: t.map(function (t) {
                    return e.serializer.ir(t);
                  }),
                };
              return this.Bf("Commit", n).then(function (t) {
                return e.serializer.lr(t.writeResults, t.commitTime);
              });
            }),
            (If.prototype.lookup = function (e) {
              var i = this,
                t = {
                  database: this.serializer.je,
                  documents: e.map(function (t) {
                    return i.serializer.Oe(t);
                  }),
                };
              return this.Mf("BatchGetDocuments", t).then(function (t) {
                var n = Vu();
                t.forEach(function (t) {
                  var e = i.serializer.Ye(t);
                  n = n.lt(e.key, e);
                });
                var r = [];
                return (
                  e.forEach(function (t) {
                    var e = n.get(t);
                    Gr(!!e, "Missing entity in write response for " + t),
                      r.push(e);
                  }),
                  r
                );
              });
            }),
            (If.prototype.Bf = function (e, n) {
              var r = this;
              return this.credentials
                .getToken()
                .then(function (t) {
                  return r.connection.Bf(e, n, t);
                })
                .catch(function (t) {
                  throw (t.code === $r.UNAUTHENTICATED && r.credentials.I(), t);
                });
            }),
            (If.prototype.Mf = function (e, n) {
              var r = this;
              return this.credentials
                .getToken()
                .then(function (t) {
                  return r.connection.Mf(e, n, t);
                })
                .catch(function (t) {
                  throw (t.code === $r.UNAUTHENTICATED && r.credentials.I(), t);
                });
            }),
            If),
          wf =
            ((Ef.documentId = function () {
              return Ef.Gf;
            }),
            (Ef.prototype.isEqual = function (t) {
              if (!(t instanceof Ef)) throw Ri("isEqual", "FieldPath", 1, t);
              return this.Qf.isEqual(t.Qf);
            }),
            (Ef.Gf = new Ef(ji.st().nt())),
            Ef),
          bf = new RegExp("[~\\*/\\[\\]]");
        function Ef() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          !(function (t, e, n, r) {
            if (!(e instanceof Array) || e.length < r)
              throw new Zr(
                $r.INVALID_ARGUMENT,
                "Function " +
                  t +
                  "() requires its " +
                  n +
                  " argument to be an array with at least " +
                  Li(r, "element") +
                  "."
              );
          })("FieldPath", t, "fieldNames", 1);
          for (var n = 0; n < t.length; ++n)
            if ((bi("FieldPath", "string", n, t[n]), 0 === t[n].length))
              throw new Zr(
                $r.INVALID_ARGUMENT,
                "Invalid field name at argument $(i + 1). Field names must not be empty."
              );
          this.Qf = new ji(t);
        }
        function If(t, e, n, r) {
          (this.Lc = t),
            (this.connection = e),
            (this.credentials = n),
            (this.serializer = r);
        }
        function Tf(t, e, n, r, i) {
          var o =
            rf.call(
              this,
              t,
              "write_stream_connection_backoff",
              "write_stream_idle",
              e,
              n,
              i
            ) || this;
          return (o.serializer = r), (o.Of = !1), (o.lastStreamToken = vu.ai), o;
        }
        function Nf(t, e, n, r, i) {
          var o =
            of.call(
              this,
              t,
              "listen_stream_connection_backoff",
              "listen_stream_idle",
              e,
              n,
              i
            ) || this;
          return (o.serializer = r), o;
        }
        function Af(t, e, n, r, i, o) {
          (this.Lc = t),
            (this.af = n),
            (this.connection = r),
            (this.ff = i),
            (this.listener = o),
            (this.state = 0),
            (this.lf = 0),
            (this.df = null),
            (this.stream = null),
            (this.vf = new df(t, e));
        }
        function Sf(t, e, n, r, i) {
          void 0 === n && (n = 1e3),
            void 0 === r && (r = 1.5),
            void 0 === i && (i = 6e4),
            (this.Lc = t),
            (this.Gr = e),
            (this.tf = n),
            (this.nf = r),
            (this.if = i),
            (this.ef = 0),
            (this.rf = null),
            (this.uf = Date.now()),
            this.reset();
        }
        function Df(t, e) {
          (this.persistence = t),
            (this.Ta = null),
            (this.$a = new Qa(function (t) {
              return Fa(t.path);
            })),
            (this.Wh = new qh(this, e));
        }
        function kf(t) {
          (this.persistence = t), (this.Ta = null), (this.Ja = null);
        }
        function Of(t) {
          var e = sf.call(this) || this;
          return (e.Zo = t), e;
        }
        function Rf(t, e) {
          var n = this;
          (this.clientId = t),
            (this.Ma = {}),
            (this.ea = new xa(0)),
            (this.Bc = !1),
            (this.Bc = !0),
            (this.As = e(this)),
            (this.Oo = new hf(this)),
            (this.Cs = new rc()),
            (this.so = new af(this.Cs, function (t) {
              return n.As.Qa(t);
            }));
        }
        function Cf(t) {
          (this.persistence = t),
            (this.La = new Qa(function (t) {
              return t.canonicalId();
            })),
            (this.lastRemoteSnapshotVersion = qi.MIN),
            (this.highestTargetId = 0),
            (this.qa = 0),
            (this.Ba = new za()),
            (this.targetCount = 0),
            (this.uc = Nh.ro());
        }
        function xf(t, e) {
          (this.Cs = t),
            (this.xa = e),
            (this.docs = new Hi(Bi.G)),
            (this.size = 0);
        }
        function Lf(t) {
          var e = uf.call(this) || this;
          return (e.Ac = t), e;
        }
        var Pf,
          _f,
          Uf,
          Mf,
          qf,
          Ff =
            ((nl.delete = function () {
              return yi("FieldValue.delete", arguments), Vf.instance;
            }),
            (nl.serverTimestamp = function () {
              return yi("FieldValue.serverTimestamp", arguments), Gf.instance;
            }),
            (nl.arrayUnion = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return gi("FieldValue.arrayUnion", arguments, 1), new jf(t);
            }),
            (nl.arrayRemove = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return gi("FieldValue.arrayRemove", arguments, 1), new Bf(t);
            }),
            (nl.increment = function (t) {
              return (
                bi("FieldValue.increment", "number", 1, t),
                mi("FieldValue.increment", arguments, 1),
                new Hf(t)
              );
            }),
            (nl.prototype.isEqual = function (t) {
              return this === t;
            }),
            nl),
          Vf = (t(el, (qf = Ff)), (el.instance = new el()), el),
          Gf = (t(tl, (Mf = Ff)), (tl.instance = new tl()), tl),
          jf = (t(Zf, (Uf = Ff)), Zf),
          Bf = (t($f, (_f = Ff)), $f),
          Hf = (t(Xf, (Pf = Ff)), Xf),
          zf = Sa(Ff, "Use FieldValue.<field>() instead."),
          Wf = /^__.*__$/,
          Qf =
            ((Jf.prototype.Hf = function (t, e) {
              var n = [];
              return (
                null !== this.un
                  ? n.push(new Lo(t, this.data, this.un, e))
                  : n.push(new xo(t, this.data, e)),
                0 < this.fieldTransforms.length &&
                  n.push(new Po(t, this.fieldTransforms)),
                n
              );
            }),
            Jf),
          Yf =
            ((Kf.prototype.Hf = function (t, e) {
              var n = [new Lo(t, this.data, this.un, e)];
              return (
                0 < this.fieldTransforms.length &&
                  n.push(new Po(t, this.fieldTransforms)),
                n
              );
            }),
            Kf);
        function Kf(t, e, n) {
          (this.data = t), (this.un = e), (this.fieldTransforms = n);
        }
        function Jf(t, e, n) {
          (this.data = t), (this.un = e), (this.fieldTransforms = n);
        }
        function Xf(t) {
          var e = Pf.call(this, "FieldValue.increment") || this;
          return (e.Kf = t), e;
        }
        function $f(t) {
          var e = _f.call(this, "FieldValue.arrayRemove") || this;
          return (e.zf = t), e;
        }
        function Zf(t) {
          var e = Uf.call(this, "FieldValue.arrayUnion") || this;
          return (e.zf = t), e;
        }
        function tl() {
          return Mf.call(this, "FieldValue.serverTimestamp") || this;
        }
        function el() {
          return qf.call(this, "FieldValue.delete") || this;
        }
        function nl(t) {
          this.Wf = t;
        }
        function rl(t) {
          switch (t) {
            case 0:
            case 2:
            case 1:
              return !0;
            case 3:
            case 4:
              return !1;
            default:
              throw Vr("Unexpected case for UserDataSource: " + t);
          }
        }
        var il =
            ((al.prototype.$f = function (t) {
              var e = null == this.path ? null : this.path.child(t),
                n = new al(
                  this.Jf,
                  this.methodName,
                  e,
                  !1,
                  this.fieldTransforms,
                  this.un
                );
              return n.Zf(t), n;
            }),
            (al.prototype.tl = function (t) {
              var e = null == this.path ? null : this.path.child(t),
                n = new al(
                  this.Jf,
                  this.methodName,
                  e,
                  !1,
                  this.fieldTransforms,
                  this.un
                );
              return n.Xf(), n;
            }),
            (al.prototype.nl = function (t) {
              return new al(
                this.Jf,
                this.methodName,
                null,
                !0,
                this.fieldTransforms,
                this.un
              );
            }),
            (al.prototype.il = function (t) {
              var e =
                null === this.path || this.path.J()
                  ? ""
                  : " (found in field " + this.path.toString() + ")";
              return new Zr(
                $r.INVALID_ARGUMENT,
                "Function " +
                  this.methodName +
                  "() called with invalid data. " +
                  t +
                  e
              );
            }),
            (al.prototype.contains = function (e) {
              return (
                void 0 !==
                  this.un.find(function (t) {
                    return e.$(t);
                  }) ||
                void 0 !==
                  this.fieldTransforms.find(function (t) {
                    return e.$(t.field);
                  })
              );
            }),
            (al.prototype.Xf = function () {
              if (null !== this.path)
                for (var t = 0; t < this.path.length; t++)
                  this.Zf(this.path.get(t));
            }),
            (al.prototype.Zf = function (t) {
              if (0 === t.length)
                throw this.il("Document fields must not be empty");
              if (rl(this.Jf) && Wf.test(t))
                throw this.il('Document fields cannot begin and end with "__"');
            }),
            al),
          ol = function (t, e) {
            (this.s = t), (this.key = e);
          },
          sl =
            ((ul.prototype.rl = function (t, e) {
              var n = new il(0, t, ji.et);
              cl("Data must be an object, but it was:", n, e);
              var r = this.ul(e, n);
              return new Qf(r, null, n.fieldTransforms);
            }),
            (ul.prototype.sl = function (t, e, n) {
              var r = new il(2, t, ji.et);
              cl("Data must be an object, but it was:", r, e);
              var i,
                o,
                s = this.ul(e, r);
              if (n) {
                for (var u = new oo(ji.G), a = 0, h = n; a < h.length; a++) {
                  var c = h[a],
                    f = void 0;
                  if (c instanceof wf) f = c.Qf;
                  else {
                    if ("string" != typeof c)
                      throw Vr(
                        "Expected stringOrFieldPath to be a string or a FieldPath"
                      );
                    f = ll(t, c);
                  }
                  if (!r.contains(f))
                    throw new Zr(
                      $r.INVALID_ARGUMENT,
                      "Field '" +
                        f +
                        "' is specified in your field mask but missing from your input data."
                    );
                  u = u.add(f);
                }
                (i = ko.Jt(u)),
                  (o = r.fieldTransforms.filter(function (t) {
                    return i.Xt(t.field);
                  }));
              } else (i = ko.Yt(r.un)), (o = r.fieldTransforms);
              return new Qf(s, i, o);
            }),
            (ul.prototype.ol = function (o, t) {
              var s = this,
                u = new il(1, o, ji.et);
              cl("Data must be an object, but it was:", u, t);
              var a = new oo(ji.G),
                h = Ns.vn();
              di(t, function (t, e) {
                var n = ll(o, t),
                  r = u.tl(n);
                if ((e = s.hl(e, r)) instanceof Vf) a = a.add(n);
                else {
                  var i = s.ul(e, r);
                  null != i && ((a = a.add(n)), h.set(n, i));
                }
              });
              var e = ko.Jt(a);
              return new Yf(h.cn(), e, u.fieldTransforms);
            }),
            (ul.prototype.cl = function (t, e, n, r) {
              var i = new il(1, t, ji.et),
                o = [fl(t, e)],
                s = [n];
              if (r.length % 2 != 0)
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Function " +
                    t +
                    "() needs to be called with an even number of arguments that alternate between field names and values."
                );
              for (var u = 0; u < r.length; u += 2)
                o.push(fl(t, r[u])), s.push(r[u + 1]);
              var a = new oo(ji.G),
                h = Ns.vn();
              for (u = 0; u < o.length; ++u) {
                var c = o[u],
                  f = i.tl(c),
                  l = this.hl(s[u], f);
                if (l instanceof Vf) a = a.add(c);
                else {
                  var p = this.ul(l, f);
                  null != p && ((a = a.add(c)), h.set(c, p));
                }
              }
              var d = ko.Jt(a);
              return new Yf(h.cn(), d, i.fieldTransforms);
            }),
            (ul.prototype.al = function (t, e, n) {
              void 0 === n && (n = !1);
              var r = new il(n ? 4 : 3, t, ji.et),
                i = this.ul(e, r);
              return (
                Gr(null != i, "Parsed data should not be null."),
                Gr(
                  0 === r.fieldTransforms.length,
                  "Field transforms should have been disallowed."
                ),
                i
              );
            }),
            (ul.prototype.hl = function (t, e) {
              try {
                return this.el(t);
              } catch (t) {
                var n = pl(t);
                throw e.il(n);
              }
            }),
            (ul.prototype.ul = function (t, e) {
              if (hl((t = this.hl(t, e))))
                return cl("Unsupported field value:", e, t), this.fl(t, e);
              if (t instanceof Ff) return this.ll(t, e), null;
              if ((e.path && e.un.push(e.path), t instanceof Array)) {
                if (e.Yf && 4 !== e.Jf)
                  throw e.il("Nested arrays are not supported");
                return this.dl(t, e);
              }
              return this.vl(t, e);
            }),
            (ul.prototype.fl = function (t, r) {
              var i = this,
                o = new Hi(Hr);
              return (
                vi(t)
                  ? r.path && 0 < r.path.length && r.un.push(r.path)
                  : di(t, function (t, e) {
                      var n = i.ul(e, r.$f(t));
                      null != n && (o = o.lt(t, n));
                    }),
                new Ns(o)
              );
            }),
            (ul.prototype.dl = function (t, e) {
              for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var s = o[i],
                  u = this.ul(s, e.nl(r));
                null == u && (u = Fo.yn), n.push(u), r++;
              }
              return new Ss(n);
            }),
            (ul.prototype.ll = function (t, e) {
              if (!rl(e.Jf))
                throw e.il(t.Wf + "() can only be used with update() and set()");
              if (null === e.path)
                throw e.il(t.Wf + "() is not currently supported inside arrays");
              if (t instanceof Vf) {
                if (2 !== e.Jf)
                  throw 1 === e.Jf
                    ? (Gr(
                        0 < e.path.length,
                        "FieldValue.delete() at the top level should have already been handled."
                      ),
                      e.il(
                        "FieldValue.delete() can only appear at the top level of your update data"
                      ))
                    : e.il(
                        "FieldValue.delete() cannot be used with set() unless you pass {merge:true}"
                      );
                e.un.push(e.path);
              } else if (t instanceof Gf)
                e.fieldTransforms.push(new Oo(e.path, uo.instance));
              else if (t instanceof jf) {
                var n = this.wl(t.Wf, t.zf),
                  r = new ao(n);
                e.fieldTransforms.push(new Oo(e.path, r));
              } else if (t instanceof Bf) {
                n = this.wl(t.Wf, t.zf);
                var i = new ho(n);
                e.fieldTransforms.push(new Oo(e.path, i));
              } else if (t instanceof Hf) {
                var o = this.al("FieldValue.increment", t.Kf),
                  s = new co(o);
                e.fieldTransforms.push(new Oo(e.path, s));
              } else Vr("Unknown FieldValue type: " + t);
            }),
            (ul.prototype.vl = function (t, e) {
              if (null === t) return Fo.yn;
              if ("number" == typeof t) return Ys(t) ? new ys(t) : new ms(t);
              if ("boolean" == typeof t) return Vo.of(t);
              if ("string" == typeof t) return new gs(t);
              if (t instanceof Date) return new ws(Mi.fromDate(t));
              if (t instanceof Mi)
                return new ws(
                  new Mi(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))
                );
              if (t instanceof Ui) return new Ts(t);
              if (t instanceof Ra) return new Es(t);
              if (t instanceof ol) return new Is(t.s, t.key);
              throw e.il("Unsupported field value: " + Di(t));
            }),
            (ul.prototype.wl = function (r, t) {
              var i = this;
              return t.map(function (t, e) {
                var n = new il(3, r, ji.et);
                return i.ul(t, n.nl(e));
              });
            }),
            ul);
        function ul(t) {
          this.el = t;
        }
        function al(t, e, n, r, i, o) {
          (this.Jf = t),
            (this.methodName = e),
            (this.path = n),
            (this.Yf = r),
            void 0 === i && this.Xf(),
            (this.Yf = void 0 !== r && r),
            (this.fieldTransforms = i || []),
            (this.un = o || []);
        }
        function hl(t) {
          return !(
            "object" != typeof t ||
            null === t ||
            t instanceof Array ||
            t instanceof Date ||
            t instanceof Mi ||
            t instanceof Ui ||
            t instanceof Ra ||
            t instanceof ol ||
            t instanceof Ff
          );
        }
        function cl(t, e, n) {
          if (!hl(n) || !Si(n)) {
            var r = Di(n);
            throw "an object" === r
              ? e.il(t + " a custom object")
              : e.il(t + " " + r);
          }
        }
        function fl(t, e) {
          if (e instanceof wf) return e.Qf;
          if ("string" == typeof e) return ll(t, e);
          throw new Zr(
            $r.INVALID_ARGUMENT,
            "Function " +
              t +
              "() called with invalid data. Field path arguments must be of type string or FieldPath."
          );
        }
        function ll(e, t) {
          try {
            return (function (e) {
              if (0 <= e.search(bf))
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Invalid field path (" +
                    e +
                    "). Paths must not contain '~', '*', '/', '[', or ']'"
                );
              try {
                return new (wf.bind.apply(wf, s([void 0], e.split("."))))();
              } catch (t) {
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Invalid field path (" +
                    e +
                    "). Paths must not be empty, begin with '.', end with '.', or contain '..'"
                );
              }
            })(t).Qf;
          } catch (t) {
            var n = pl(t);
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Function " + e + "() called with invalid data. " + n
            );
          }
        }
        function pl(t) {
          return t instanceof Error ? t.message : t.toString();
        }
        var dl =
            ((wl.prototype.lookup = function (r) {
              return p(this, void 0, void 0, function () {
                var e,
                  n = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if ((this._l(), 0 < this.mutations.length))
                        throw new Zr(
                          $r.INVALID_ARGUMENT,
                          "Firestore transactions require all reads to be executed before all writes."
                        );
                      return [4, this.ml.lookup(r)];
                    case 1:
                      return (
                        (e = t.sent()).forEach(function (t) {
                          t instanceof Os || t instanceof ks
                            ? n.Il(t)
                            : Vr(
                                "Document in a transaction was a " +
                                  t.constructor.name
                              );
                        }),
                        [2, e]
                      );
                  }
                });
              });
            }),
            (wl.prototype.set = function (t, e) {
              this.write(e.Hf(t, this.in(t))), this.yl.add(t);
            }),
            (wl.prototype.update = function (t, e) {
              try {
                this.write(e.Hf(t, this.Tl(t)));
              } catch (t) {
                this.bl = t;
              }
              this.yl.add(t);
            }),
            (wl.prototype.delete = function (t) {
              this.write([new _o(t, this.in(t))]), this.yl.add(t);
            }),
            (wl.prototype.commit = function () {
              return p(this, void 0, void 0, function () {
                var e,
                  n = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if ((this._l(), this.bl)) throw this.bl;
                      return (
                        (e = this.pl),
                        this.mutations.forEach(function (t) {
                          e = e.remove(t.key);
                        }),
                        e.forEach(function (t, e) {
                          n.mutations.push(new Uo(t, n.in(t)));
                        }),
                        [4, this.ml.commit(this.mutations)]
                      );
                    case 1:
                      return t.sent(), (this.gl = !0), [2];
                  }
                });
              });
            }),
            (wl.prototype.Il = function (t) {
              var e;
              if (t instanceof ks) e = t.version;
              else {
                if (!(t instanceof Os))
                  throw Vr(
                    "Document in a transaction was a " + t.constructor.name
                  );
                e = qi.q();
              }
              var n = this.pl.get(t.key);
              if (null !== n) {
                if (!e.isEqual(n))
                  throw new Zr(
                    $r.ABORTED,
                    "Document version changed between two reads."
                  );
              } else this.pl = this.pl.lt(t.key, e);
            }),
            (wl.prototype.in = function (t) {
              var e = this.pl.get(t);
              return !this.yl.has(t) && e ? Ro.updateTime(e) : Ro.NONE;
            }),
            (wl.prototype.Tl = function (t) {
              var e = this.pl.get(t);
              if (this.yl.has(t) || !e) return Ro.exists(!0);
              if (e.isEqual(qi.q()))
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Can't update a document that doesn't exist."
                );
              return Ro.updateTime(e);
            }),
            (wl.prototype.write = function (t) {
              this._l(), (this.mutations = this.mutations.concat(t));
            }),
            (wl.prototype._l = function () {
              Gr(
                !this.gl,
                "A transaction object cannot be used after its update callback has been invoked."
              );
            }),
            wl),
          vl =
            ((gl.prototype.Cl = function () {
              var t = this;
              0 === this.Dl &&
                (this.Al("Unknown"),
                Gr(null === this.Sl, "onlineStateTimer shouldn't be started yet"),
                (this.Sl = this.Qr.fu("online_state_timeout", 1e4, function () {
                  return (
                    (t.Sl = null),
                    Gr(
                      "Unknown" === t.state,
                      "Timer should be canceled if we transitioned to a different state."
                    ),
                    t.Pl("Backend didn't respond within 10 seconds."),
                    t.Al("Offline"),
                    Promise.resolve()
                  );
                })));
            }),
            (gl.prototype.kl = function (t) {
              "Online" === this.state
                ? (this.Al("Unknown"),
                  Gr(0 === this.Dl, "watchStreamFailures must be 0"),
                  Gr(null === this.Sl, "onlineStateTimer must be null"))
                : (this.Dl++,
                  1 <= this.Dl &&
                    (this.Nl(),
                    this.Pl(
                      "Connection failed 1 times. Most recent error: " +
                        t.toString()
                    ),
                    this.Al("Offline")));
            }),
            (gl.prototype.set = function (t) {
              this.Nl(),
                (this.Dl = 0),
                "Online" === t && (this.Rl = !1),
                this.Al(t);
            }),
            (gl.prototype.Al = function (t) {
              t !== this.state && ((this.state = t), this.El(t));
            }),
            (gl.prototype.Pl = function (t) {
              var e =
                "Could not reach Cloud Firestore backend. " +
                t +
                "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
              this.Rl ? (qr(e), (this.Rl = !1)) : Mr("OnlineStateTracker", e);
            }),
            (gl.prototype.Nl = function () {
              null !== this.Sl && (this.Sl.cancel(), (this.Sl = null));
            }),
            gl),
          yl =
            ((ml.prototype.start = function () {
              return this.enableNetwork();
            }),
            (ml.prototype.enableNetwork = function () {
              return p(this, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (this.networkEnabled = !0),
                        this.jl() ? ((e = this.Wl), [4, this.zh.Vs()]) : [3, 3]
                      );
                    case 1:
                      return (
                        (e.lastStreamToken = t.sent()),
                        this.Jl() ? this.Yl() : this.ql.set("Unknown"),
                        [4, this.Xl()]
                      );
                    case 2:
                      t.sent(), (t.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (ml.prototype.disableNetwork = function () {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (this.networkEnabled = !1), [4, this.$l()];
                    case 1:
                      return t.sent(), this.ql.set("Offline"), [2];
                  }
                });
              });
            }),
            (ml.prototype.$l = function () {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.Wl.stop()];
                    case 1:
                      return t.sent(), [4, this.Bl.stop()];
                    case 2:
                      return (
                        t.sent(),
                        0 < this.Ol.length &&
                          (Mr(
                            "RemoteStore",
                            "Stopping write stream with " +
                              this.Ol.length +
                              " pending writes"
                          ),
                          (this.Ol = [])),
                        this.Zl(),
                        [2]
                      );
                  }
                });
              });
            }),
            (ml.prototype.shutdown = function () {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        Mr("RemoteStore", "RemoteStore shutting down."),
                        (this.networkEnabled = !1),
                        [4, this.$l()]
                      );
                    case 1:
                      return (
                        t.sent(), this.Ul.shutdown(), this.ql.set("Unknown"), [2]
                      );
                  }
                });
              });
            }),
            (ml.prototype.listen = function (t) {
              fi(this.Fl, t.targetId) ||
                ((this.Fl[t.targetId] = t),
                this.Jl() ? this.Yl() : this.Bl.mf() && this.td(t));
            }),
            (ml.prototype.nd = function (t) {
              Gr(
                fi(this.Fl, t),
                "unlisten called on target no currently watched: " + t
              ),
                delete this.Fl[t],
                this.Bl.mf() && this.ed(t),
                vi(this.Fl) &&
                  (this.Bl.mf()
                    ? this.Bl.bf()
                    : this.jl() && this.ql.set("Unknown"));
            }),
            (ml.prototype.ye = function (t) {
              return this.Fl[t] || null;
            }),
            (ml.prototype.be = function (t) {
              return this.rd.be(t);
            }),
            (ml.prototype.td = function (t) {
              this.Vl.Xi(t.targetId), this.Bl.watch(t);
            }),
            (ml.prototype.ed = function (t) {
              this.Vl.Xi(t), this.Bl.Nf(t);
            }),
            (ml.prototype.Yl = function () {
              Gr(
                this.Jl(),
                "startWatchStream() called when shouldStartWatchStream() is false."
              ),
                (this.Vl = new oa(this)),
                this.Bl.start(),
                this.ql.Cl();
            }),
            (ml.prototype.Jl = function () {
              return this.jl() && !this.Bl.wf() && !vi(this.Fl);
            }),
            (ml.prototype.jl = function () {
              return this.isPrimary && this.networkEnabled;
            }),
            (ml.prototype.Zl = function () {
              this.Vl = null;
            }),
            (ml.prototype.Ml = function () {
              return p(this, void 0, void 0, function () {
                var n = this;
                return v(this, function (t) {
                  return (
                    pi(this.Fl, function (t, e) {
                      n.td(e);
                    }),
                    [2]
                  );
                });
              });
            }),
            (ml.prototype.Ql = function (e) {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  return (
                    void 0 === e &&
                      Gr(
                        !this.Jl(),
                        "Watch stream was stopped gracefully while still needed."
                      ),
                    this.Zl(),
                    this.Jl()
                      ? (this.ql.kl(e), this.Yl())
                      : this.ql.set("Unknown"),
                    [2]
                  );
                });
              });
            }),
            (ml.prototype.Gl = function (n, r) {
              return p(this, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.ql.set("Online"),
                        n instanceof $u && 2 === n.state && n.cause
                          ? [2, this.ud(n)]
                          : (n instanceof Ju
                              ? this.Vl.ue(n)
                              : n instanceof Xu
                              ? this.Vl.de(n)
                              : (Gr(
                                  n instanceof $u,
                                  "Expected watchChange to be an instance of WatchTargetChange"
                                ),
                                this.Vl.he(n)),
                            r.isEqual(qi.MIN) ? [3, 3] : [4, this.zh.Jo()])
                      );
                    case 1:
                      return (
                        (e = t.sent()), 0 <= r.h(e) ? [4, this.sd(r)] : [3, 3]
                      );
                    case 2:
                      t.sent(), (t.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (ml.prototype.sd = function (r) {
              var i = this;
              Gr(
                !r.isEqual(qi.MIN),
                "Can't raise event for unknown SnapshotVersion"
              );
              var t = this.Vl.me(r);
              return (
                pi(t.Si, function (t, e) {
                  if (0 < e.resumeToken.bn()) {
                    var n = i.Fl[t];
                    n && (i.Fl[t] = n.vi(e.resumeToken, r));
                  }
                }),
                t.Ri.forEach(function (t) {
                  var e = i.Fl[t];
                  if (e) {
                    (i.Fl[t] = e.vi(vu.ai, e.li)), i.ed(t);
                    var n = new Lu(e.target, t, 1, e.sequenceNumber);
                    i.td(n);
                  }
                }),
                this.rd.Yo(t)
              );
            }),
            (ml.prototype.ud = function (t) {
              var n = this;
              Gr(!!t.cause, "Handling target error without a cause");
              var r = t.cause,
                i = Promise.resolve();
              return (
                t.targetIds.forEach(function (e) {
                  i = i.then(function () {
                    return p(n, void 0, void 0, function () {
                      return v(this, function (t) {
                        return fi(this.Fl, e)
                          ? (delete this.Fl[e],
                            this.Vl.removeTarget(e),
                            [2, this.rd.od(e, r)])
                          : [2];
                      });
                    });
                  });
                }),
                i
              );
            }),
            (ml.prototype.Xl = function () {
              return p(this, void 0, void 0, function () {
                var e, n;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.hd()
                        ? ((e =
                            0 < this.Ol.length
                              ? this.Ol[this.Ol.length - 1].batchId
                              : -1),
                          [4, this.zh.sh(e)])
                        : [3, 4];
                    case 1:
                      return null !== (n = t.sent())
                        ? [3, 2]
                        : (0 === this.Ol.length && this.Wl.bf(), [3, 4]);
                    case 2:
                      return this.ad(n), [4, this.Xl()];
                    case 3:
                      t.sent(), (t.label = 4);
                    case 4:
                      return this.fd() && this.ld(), [2];
                  }
                });
              });
            }),
            (ml.prototype.hd = function () {
              return this.jl() && this.Ol.length < 10;
            }),
            (ml.prototype.dd = function () {
              return this.Ol.length;
            }),
            (ml.prototype.ad = function (t) {
              Gr(this.hd(), "addToWritePipeline called when pipeline is full"),
                this.Ol.push(t),
                this.Wl.mf() && this.Wl.Ff && this.Wl.Vf(t.mutations);
            }),
            (ml.prototype.fd = function () {
              return this.jl() && !this.Wl.wf() && 0 < this.Ol.length;
            }),
            (ml.prototype.ld = function () {
              Gr(
                this.fd(),
                "startWriteStream() called when shouldStartWriteStream() is false."
              ),
                this.Wl.start();
            }),
            (ml.prototype.zl = function () {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  return this.Wl.jf(), [2];
                });
              });
            }),
            (ml.prototype.Hl = function () {
              var r = this;
              return this.zh
                .Us(this.Wl.lastStreamToken)
                .then(function () {
                  for (var t = 0, e = r.Ol; t < e.length; t++) {
                    var n = e[t];
                    r.Wl.Vf(n.mutations);
                  }
                })
                .catch(xh);
            }),
            (ml.prototype.Uf = function (t, e) {
              var n = this;
              Gr(0 < this.Ol.length, "Got result for empty write pipeline");
              var r = this.Ol.shift(),
                i = Ha.from(r, t, e, this.Wl.lastStreamToken);
              return this.rd.vd(i).then(function () {
                return n.Xl();
              });
            }),
            (ml.prototype.Kl = function (n) {
              return p(this, void 0, void 0, function () {
                var e = this;
                return v(this, function (t) {
                  return (
                    void 0 === n &&
                      Gr(
                        !this.fd(),
                        "Write stream was stopped gracefully while still needed."
                      ),
                    n && 0 < this.Ol.length
                      ? [
                          2,
                          (this.Wl.Ff ? this.wd(n) : this.md(n)).then(
                            function () {
                              e.fd() && e.ld();
                            }
                          ),
                        ]
                      : [2]
                  );
                });
              });
            }),
            (ml.prototype.md = function (e) {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  return Mu(e.code)
                    ? (Mr(
                        "RemoteStore",
                        "RemoteStore error before completed handshake; resetting stream token: ",
                        this.Wl.lastStreamToken
                      ),
                      (this.Wl.lastStreamToken = vu.ai),
                      [2, this.zh.Us(vu.ai).catch(xh)])
                    : [2];
                });
              });
            }),
            (ml.prototype.wd = function (i) {
              return p(this, void 0, void 0, function () {
                var n,
                  r = this;
                return v(this, function (t) {
                  return Mu((e = i.code)) && e !== $r.ABORTED
                    ? ((n = this.Ol.shift()),
                      this.Wl.gf(),
                      [
                        2,
                        this.rd.pd(n.batchId, i).then(function () {
                          return r.Xl();
                        }),
                      ])
                    : [2];
                  var e;
                });
              });
            }),
            (ml.prototype.gd = function () {
              return new dl(this.ml);
            }),
            (ml.prototype.Ll = function () {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (this.networkEnabled = !1), [4, this.$l()];
                    case 1:
                      return (
                        t.sent(),
                        this.ql.set("Unknown"),
                        [4, this.enableNetwork()]
                      );
                    case 2:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (ml.prototype.bd = function () {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.jl()
                        ? (Mr(
                            "RemoteStore",
                            "RemoteStore restarting streams for new credential"
                          ),
                          [4, this.Ll()])
                        : [3, 2];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (ml.prototype.yd = function (e) {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (this.isPrimary = e) && this.networkEnabled
                        ? [4, this.enableNetwork()]
                        : [3, 2];
                    case 1:
                      return t.sent(), [3, 4];
                    case 2:
                      return e ? [3, 4] : [4, this.$l()];
                    case 3:
                      t.sent(), this.ql.set("Unknown"), (t.label = 4);
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            ml);
        function ml(t, e, n, r, i) {
          var o = this;
          (this.zh = t),
            (this.ml = e),
            (this.Ol = []),
            (this.Fl = {}),
            (this.Vl = null),
            (this.networkEnabled = !1),
            (this.isPrimary = !1),
            (this.Ul = i),
            this.Ul.xl(function (t) {
              n.$r(function () {
                return p(o, void 0, void 0, function () {
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return this.jl()
                          ? (Mr(
                              "RemoteStore",
                              "Restarting streams for network reachability change."
                            ),
                            [4, this.Ll()])
                          : [3, 2];
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              });
            }),
            (this.ql = new vl(n, r)),
            (this.Bl = this.ml.qf({
              Af: this.Ml.bind(this),
              Ef: this.Ql.bind(this),
              kf: this.Gl.bind(this),
            })),
            (this.Wl = this.ml.Lf({
              Af: this.zl.bind(this),
              Ef: this.Kl.bind(this),
              xf: this.Hl.bind(this),
              Uf: this.Uf.bind(this),
            }));
        }
        function gl(t, e) {
          (this.Qr = t),
            (this.El = e),
            (this.state = "Unknown"),
            (this.Dl = 0),
            (this.Sl = null),
            (this.Rl = !0);
        }
        function wl(t) {
          (this.ml = t),
            (this.pl = zu()),
            (this.mutations = []),
            (this.gl = !1),
            (this.bl = null),
            (this.yl = new Set());
        }
        function bl(t, e) {
          return (
            Gr(
              -1 === e.indexOf("_"),
              "Client key cannot contain '_', but was '" + e + "'"
            ),
            "firestore_clients_" + t + "_" + e
          );
        }
        function El(t, e, n) {
          var r = "firestore_mutations_" + t + "_" + n;
          return e.l() && (r += "_" + e.uid), r;
        }
        function Il(t, e) {
          return "firestore_targets_" + t + "_" + e;
        }
        var Tl =
            ((Pl._d = function (t, e, n) {
              var r = JSON.parse(n),
                i =
                  "object" == typeof r &&
                  -1 !==
                    ["pending", "acknowledged", "rejected"].indexOf(r.state) &&
                  (void 0 === r.error || "object" == typeof r.error),
                o = void 0;
              return (
                i &&
                  r.error &&
                  (i =
                    "string" == typeof r.error.message &&
                    "string" == typeof r.error.code) &&
                  (o = new Zr(r.error.code, r.error.message)),
                i
                  ? new Pl(t, e, r.state, o)
                  : (qr(
                      "SharedClientState",
                      "Failed to parse mutation state for ID '" + e + "': " + n
                    ),
                    null)
              );
            }),
            (Pl.prototype.Id = function () {
              var t = { state: this.state, updateTimeMs: Date.now() };
              return (
                this.error &&
                  (t.error = {
                    code: this.error.code,
                    message: this.error.message,
                  }),
                JSON.stringify(t)
              );
            }),
            Pl),
          Nl =
            ((Ll._d = function (t, e) {
              var n = JSON.parse(e),
                r =
                  "object" == typeof n &&
                  -1 !==
                    ["not-current", "current", "rejected"].indexOf(n.state) &&
                  (void 0 === n.error || "object" == typeof n.error),
                i = void 0;
              return (
                r &&
                  n.error &&
                  (r =
                    "string" == typeof n.error.message &&
                    "string" == typeof n.error.code) &&
                  (i = new Zr(n.error.code, n.error.message)),
                r
                  ? new Ll(t, n.state, i)
                  : (qr(
                      "SharedClientState",
                      "Failed to parse target state for ID '" + t + "': " + e
                    ),
                    null)
              );
            }),
            (Ll.prototype.Id = function () {
              var t = { state: this.state, updateTimeMs: Date.now() };
              return (
                this.error &&
                  (t.error = {
                    code: this.error.code,
                    message: this.error.message,
                  }),
                JSON.stringify(t)
              );
            }),
            Ll),
          Al =
            ((xl._d = function (t, e) {
              for (
                var n = JSON.parse(e),
                  r = "object" == typeof n && n.activeTargetIds instanceof Array,
                  i = Ku(),
                  o = 0;
                r && o < n.activeTargetIds.length;
                ++o
              )
                (r = Ys(n.activeTargetIds[o])), (i = i.add(n.activeTargetIds[o]));
              return r
                ? new xl(t, i)
                : (qr(
                    "SharedClientState",
                    "Failed to parse client data for instance '" + t + "': " + e
                  ),
                  null);
            }),
            xl),
          Sl =
            ((Cl._d = function (t) {
              var e = JSON.parse(t);
              return "object" == typeof e &&
                -1 !== ["Unknown", "Online", "Offline"].indexOf(e.onlineState) &&
                "string" == typeof e.clientId
                ? new Cl(e.clientId, e.onlineState)
                : (qr("SharedClientState", "Failed to parse online state: " + t),
                  null);
            }),
            Cl),
          Dl =
            ((Rl.prototype.Td = function (t) {
              this.activeTargetIds = this.activeTargetIds.add(t);
            }),
            (Rl.prototype.Ed = function (t) {
              this.activeTargetIds = this.activeTargetIds.delete(t);
            }),
            (Rl.prototype.Id = function () {
              var t = {
                activeTargetIds: this.activeTargetIds.tt(),
                updateTimeMs: Date.now(),
              };
              return JSON.stringify(t);
            }),
            Rl),
          kl =
            ((Ol.cs = function (t) {
              return !(!t.window || null == t.window.localStorage);
            }),
            (Ol.prototype.start = function () {
              return p(this, void 0, void 0, function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  s,
                  u,
                  a,
                  h,
                  c,
                  f,
                  l = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        Gr(
                          !this.Co,
                          "WebStorageSharedClientState already started"
                        ),
                        Gr(
                          null !== this.rd,
                          "syncEngine property must be set before calling start()"
                        ),
                        Gr(
                          null !== this.El,
                          "onlineStateHandler property must be set before calling start()"
                        ),
                        [4, this.rd.gh()]
                      );
                    case 1:
                      for (e = t.sent(), n = 0, r = e; n < r.length; n++)
                        (i = r[n]) !== this.Dd &&
                          (o = this.getItem(bl(this.persistenceKey, i))) &&
                          (s = Al._d(i, o)) &&
                          (this.Sd[s.clientId] = s);
                      for (
                        this.Ud(),
                          (u = this.storage.getItem(this.Vd)) &&
                            (a = this.xd(u)) &&
                            this.jd(a),
                          h = 0,
                          c = this.Ad;
                        h < c.length;
                        h++
                      )
                        (f = c[h]), this.Cd(f);
                      return (
                        (this.Ad = []),
                        this.platform.window.addEventListener(
                          "unload",
                          function () {
                            return l.shutdown();
                          }
                        ),
                        (this.Co = !0),
                        [2]
                      );
                  }
                });
              });
            }),
            (Ol.prototype.Br = function (t) {
              this.setItem(this.kd, JSON.stringify(t));
            }),
            (Ol.prototype.Ld = function () {
              var n = Ku();
              return (
                di(this.Sd, function (t, e) {
                  n = n.Mt(e.activeTargetIds);
                }),
                n
              );
            }),
            (Ol.prototype.qd = function (t) {
              for (var e in this.Sd)
                if (
                  this.Sd.hasOwnProperty(e) &&
                  this.Sd[e].activeTargetIds.has(t)
                )
                  return !0;
              return !1;
            }),
            (Ol.prototype.Bd = function (t) {
              this.Md(t, "pending");
            }),
            (Ol.prototype.Qd = function (t, e, n) {
              this.Md(t, e, n), this.Gd(t);
            }),
            (Ol.prototype.Wd = function (t) {
              var e = "not-current";
              if (this.qd(t)) {
                var n = this.storage.getItem(Il(this.persistenceKey, t));
                if (n) {
                  var r = Nl._d(t, n);
                  r && (e = r.state);
                }
              }
              return this.zd.Td(t), this.Ud(), e;
            }),
            (Ol.prototype.Kd = function (t) {
              this.zd.Ed(t), this.Ud();
            }),
            (Ol.prototype.Hd = function (t) {
              return this.zd.activeTargetIds.has(t);
            }),
            (Ol.prototype.Jd = function (t) {
              this.removeItem(Il(this.persistenceKey, t));
            }),
            (Ol.prototype.Yd = function (t, e, n) {
              this.Xd(t, e, n);
            }),
            (Ol.prototype.Lo = function (t, e, n) {
              var r = this;
              e.forEach(function (t) {
                r.Gd(t);
              }),
                (this.currentUser = t),
                n.forEach(function (t) {
                  r.Bd(t);
                });
            }),
            (Ol.prototype.$d = function (t) {
              this.Zd(t);
            }),
            (Ol.prototype.shutdown = function () {
              this.Co &&
                (this.platform.window.removeEventListener("storage", this.Rd),
                this.removeItem(this.Pd),
                (this.Co = !1));
            }),
            (Ol.prototype.getItem = function (t) {
              var e = this.storage.getItem(t);
              return Mr("SharedClientState", "READ", t, e), e;
            }),
            (Ol.prototype.setItem = function (t, e) {
              Mr("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
            }),
            (Ol.prototype.removeItem = function (t) {
              Mr("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
            }),
            (Ol.prototype.Cd = function (u) {
              var t = this;
              if (u.storageArea === this.storage) {
                if (
                  (Mr("SharedClientState", "EVENT", u.key, u.newValue),
                  u.key === this.Pd)
                )
                  return void qr(
                    "Received WebStorage notification for local change. Another client might have garbage-collected our state"
                  );
                this.Lc.$r(function () {
                  return p(t, void 0, void 0, function () {
                    var e, n, r, i, o, s;
                    return v(this, function (t) {
                      if (!this.Co) return this.Ad.push(u), [2];
                      if (null === u.key) return [2];
                      if (this.Nd.test(u.key)) {
                        if (null == u.newValue)
                          return (n = this.tv(u.key)), [2, this.nv(n, null)];
                        if ((e = this.iv(u.key, u.newValue)))
                          return [2, this.nv(e.clientId, e)];
                      } else if (this.Od.test(u.key)) {
                        if (
                          null !== u.newValue &&
                          (r = this.ev(u.key, u.newValue))
                        )
                          return [2, this.rv(r)];
                      } else if (this.Fd.test(u.key)) {
                        if (
                          null !== u.newValue &&
                          (i = this.uv(u.key, u.newValue))
                        )
                          return [2, this.sv(i)];
                      } else if (u.key === this.Vd) {
                        if (null !== u.newValue && (o = this.xd(u.newValue)))
                          return [2, this.jd(o)];
                      } else
                        u.key === this.kd &&
                          (Gr(!!this.jr, "Missing sequenceNumberHandler"),
                          (s = (function (t) {
                            var e = xa.Mr;
                            if (null != t)
                              try {
                                var n = JSON.parse(t);
                                Gr(
                                  "number" == typeof n,
                                  "Found non-numeric sequence number"
                                ),
                                  (e = n);
                              } catch (t) {
                                qr(
                                  "SharedClientState",
                                  "Failed to read sequence number from WebStorage",
                                  t
                                );
                              }
                            return e;
                          })(u.newValue)) !== xa.Mr && this.jr(s));
                      return [2];
                    });
                  });
                });
              }
            }),
            Object.defineProperty(Ol.prototype, "zd", {
              get: function () {
                return this.Sd[this.Dd];
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Ol.prototype.Ud = function () {
              this.setItem(this.Pd, this.zd.Id());
            }),
            (Ol.prototype.Md = function (t, e, n) {
              var r = new Tl(this.currentUser, t, e, n),
                i = El(this.persistenceKey, this.currentUser, t);
              this.setItem(i, r.Id());
            }),
            (Ol.prototype.Gd = function (t) {
              var e = El(this.persistenceKey, this.currentUser, t);
              this.removeItem(e);
            }),
            (Ol.prototype.Zd = function (t) {
              var e = { clientId: this.Dd, onlineState: t };
              this.storage.setItem(this.Vd, JSON.stringify(e));
            }),
            (Ol.prototype.Xd = function (t, e, n) {
              var r = Il(this.persistenceKey, t),
                i = new Nl(t, e, n);
              this.setItem(r, i.Id());
            }),
            (Ol.prototype.tv = function (t) {
              var e = this.Nd.exec(t);
              return e ? e[1] : null;
            }),
            (Ol.prototype.iv = function (t, e) {
              var n = this.tv(t);
              return (
                Gr(null !== n, "Cannot parse client state key '" + t + "'"),
                Al._d(n, e)
              );
            }),
            (Ol.prototype.ev = function (t, e) {
              var n = this.Od.exec(t);
              Gr(null !== n, "Cannot parse mutation batch key '" + t + "'");
              var r = Number(n[1]),
                i = void 0 !== n[2] ? n[2] : null;
              return Tl._d(new Xr(i), r, e);
            }),
            (Ol.prototype.uv = function (t, e) {
              var n = this.Fd.exec(t);
              Gr(null !== n, "Cannot parse query target key '" + t + "'");
              var r = Number(n[1]);
              return Nl._d(r, e);
            }),
            (Ol.prototype.xd = function (t) {
              return Sl._d(t);
            }),
            (Ol.prototype.rv = function (e) {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  return e.user.uid !== this.currentUser.uid
                    ? (Mr(
                        "SharedClientState",
                        "Ignoring mutation for non-active user " + e.user.uid
                      ),
                      [2])
                    : [2, this.rd.ov(e.batchId, e.state, e.error)];
                });
              });
            }),
            (Ol.prototype.sv = function (t) {
              return this.rd.hv(t.targetId, t.state, t.error);
            }),
            (Ol.prototype.nv = function (t, e) {
              var n = this,
                r = this.Ld();
              e ? (this.Sd[t] = e) : delete this.Sd[t];
              var i = this.Ld(),
                o = [],
                s = [];
              return (
                i.forEach(function (e) {
                  return p(n, void 0, void 0, function () {
                    return v(this, function (t) {
                      return r.has(e) || o.push(e), [2];
                    });
                  });
                }),
                r.forEach(function (e) {
                  return p(n, void 0, void 0, function () {
                    return v(this, function (t) {
                      return i.has(e) || s.push(e), [2];
                    });
                  });
                }),
                this.rd.cv(o, s)
              );
            }),
            (Ol.prototype.jd = function (t) {
              this.Sd[t.clientId] && this.El(t.onlineState);
            }),
            Ol);
        function Ol(t, e, n, r, i) {
          if (
            ((this.Lc = t),
            (this.platform = e),
            (this.persistenceKey = n),
            (this.Dd = r),
            (this.rd = null),
            (this.El = null),
            (this.jr = null),
            (this.Sd = {}),
            (this.Rd = this.Cd.bind(this)),
            (this.Co = !1),
            (this.Ad = []),
            !Ol.cs(this.platform))
          )
            throw new Zr(
              $r.UNIMPLEMENTED,
              "LocalStorage is not available on this platform."
            );
          var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          (this.storage = this.platform.window.localStorage),
            (this.currentUser = i),
            (this.Pd = bl(this.persistenceKey, this.Dd)),
            (this.kd = "firestore_sequence_number_" + this.persistenceKey),
            (this.Sd[this.Dd] = new Dl()),
            (this.Nd = new RegExp("^firestore_clients_" + o + "_([^_]*)$")),
            (this.Od = new RegExp(
              "^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"
            )),
            (this.Fd = new RegExp("^firestore_targets_" + o + "_(\\d+)$")),
            (this.Vd = "firestore_online_state_" + this.persistenceKey),
            this.platform.window.addEventListener("storage", this.Rd);
        }
        function Rl() {
          this.activeTargetIds = Ku();
        }
        function Cl(t, e) {
          (this.clientId = t), (this.onlineState = e);
        }
        function xl(t, e) {
          (this.clientId = t), (this.activeTargetIds = e);
        }
        function Ll(t, e, n) {
          (this.targetId = t),
            (this.state = e),
            Gr(
              (void 0 !== (this.error = n)) == ("rejected" === e),
              "QueryTargetMetadata must contain an error iff state is 'rejected'"
            );
        }
        function Pl(t, e, n, r) {
          (this.user = t),
            (this.batchId = e),
            (this.state = n),
            Gr(
              (void 0 !== (this.error = r)) == ("rejected" === n),
              "MutationMetadata must contain an error iff state is 'rejected'"
            );
        }
        function _l(t) {
          this.key = t;
        }
        function Ul(t) {
          this.key = t;
        }
        var Ml =
            ((Vl.prototype.Bd = function (t) {}),
            (Vl.prototype.Qd = function (t, e, n) {}),
            (Vl.prototype.Wd = function (t) {
              return this.av.Td(t), this.fv[t] || "not-current";
            }),
            (Vl.prototype.Yd = function (t, e, n) {
              this.fv[t] = e;
            }),
            (Vl.prototype.Kd = function (t) {
              this.av.Ed(t);
            }),
            (Vl.prototype.Hd = function (t) {
              return this.av.activeTargetIds.has(t);
            }),
            (Vl.prototype.Jd = function (t) {
              delete this.fv[t];
            }),
            (Vl.prototype.Ld = function () {
              return this.av.activeTargetIds;
            }),
            (Vl.prototype.qd = function (t) {
              return this.av.activeTargetIds.has(t);
            }),
            (Vl.prototype.start = function () {
              return (this.av = new Dl()), Promise.resolve();
            }),
            (Vl.prototype.Lo = function (t, e, n) {}),
            (Vl.prototype.$d = function (t) {}),
            (Vl.prototype.shutdown = function () {}),
            (Vl.prototype.Br = function (t) {}),
            Vl),
          ql =
            (Object.defineProperty(Fl.prototype, "mv", {
              get: function () {
                return this.lv;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Fl.prototype.pv = function (t, e) {
              var u = this,
                a = e ? e.gv : new ta(),
                h = e ? e.wv : this.wv,
                c = e ? e.Ii : this.Ii,
                f = h,
                l = !1,
                p =
                  this.query.ii() && h.size === this.query.limit
                    ? h.last()
                    : null,
                d =
                  this.query.ei() && h.size === this.query.limit
                    ? h.first()
                    : null;
              if (
                (t.pt(function (t, e) {
                  var n = h.get(t),
                    r = e instanceof ks ? e : null;
                  r &&
                    (Gr(
                      t.isEqual(r.key),
                      "Mismatching keys found in document changes: " +
                        t +
                        " != " +
                        r.key
                    ),
                    (r = u.query.matches(r) ? r : null));
                  var i = !!n && u.Ii.has(n.key),
                    o =
                      !!r &&
                      (r.en || (u.Ii.has(r.key) && r.hasCommittedMutations)),
                    s = !1;
                  n && r
                    ? n.data().isEqual(r.data())
                      ? i !== o && (a.track({ type: 3, doc: r }), (s = !0))
                      : u.bv(n, r) ||
                        (a.track({ type: 2, doc: r }),
                        (s = !0),
                        ((p && 0 < u.query.Xn(r, p)) ||
                          (d && u.query.Xn(r, d) < 0)) &&
                          (l = !0))
                    : !n && r
                    ? (a.track({ type: 0, doc: r }), (s = !0))
                    : n &&
                      !r &&
                      (a.track({ type: 1, doc: n }),
                      (s = !0),
                      (p || d) && (l = !0)),
                    s &&
                      (c = r
                        ? ((f = f.add(r)), o ? c.add(t) : c.delete(t))
                        : ((f = f.delete(t)), c.delete(t)));
                }),
                this.query.ii() || this.query.ei())
              )
                for (; f.size > this.query.limit; ) {
                  var n = this.query.ii() ? f.last() : f.first();
                  (f = f.delete(n.key)),
                    (c = c.delete(n.key)),
                    a.track({ type: 1, doc: n });
                }
              return (
                Gr(
                  !l || !e,
                  "View was refilled using docs that themselves needed refilling."
                ),
                { wv: f, gv: a, Pa: l, Ii: c }
              );
            }),
            (Fl.prototype.bv = function (t, e) {
              return t.en && e.hasCommittedMutations && !e.en;
            }),
            (Fl.prototype.es = function (t, e, n) {
              var o = this;
              Gr(!t.Pa, "Cannot apply changes that need a refill");
              var r = this.wv;
              (this.wv = t.wv), (this.Ii = t.Ii);
              var i = t.gv.yi();
              i.sort(function (t, e) {
                return (
                  (r = t.type),
                  (i = e.type),
                  n(r) - n(i) || o.query.Xn(t.doc, e.doc)
                );
                function n(t) {
                  switch (t) {
                    case 0:
                      return 1;
                    case 2:
                    case 3:
                      return 2;
                    case 1:
                      return 0;
                    default:
                      return Vr("Unknown ChangeType: " + t);
                  }
                }
                var r, i;
              }),
                this.yv(n);
              var s = e ? this._v() : [],
                u = 0 === this.vv.size && this.Ni ? 1 : 0,
                a = u !== this.dv;
              return (
                (this.dv = u),
                0 !== i.length || a
                  ? {
                      snapshot: new ea(
                        this.query,
                        t.wv,
                        r,
                        i,
                        t.Ii,
                        0 == u,
                        a,
                        !1
                      ),
                      Iv: s,
                    }
                  : { Iv: s }
              );
            }),
            (Fl.prototype.Tv = function (t) {
              return this.Ni && "Offline" === t
                ? ((this.Ni = !1),
                  this.es({ wv: this.wv, gv: new ta(), Ii: this.Ii, Pa: !1 }, !1))
                : { Iv: [] };
            }),
            (Fl.prototype.Ev = function (t) {
              return !this.lv.has(t) && !!this.wv.has(t) && !this.wv.get(t).en;
            }),
            (Fl.prototype.yv = function (t) {
              var e = this;
              t &&
                (t.Oi.forEach(function (t) {
                  return (e.lv = e.lv.add(t));
                }),
                t.Fi.forEach(function (t) {
                  return Gr(
                    e.lv.has(t),
                    "Modified document " + t + " not found in view."
                  );
                }),
                t.Vi.forEach(function (t) {
                  return (e.lv = e.lv.delete(t));
                }),
                (this.Ni = t.Ni));
            }),
            (Fl.prototype._v = function () {
              var e = this;
              if (!this.Ni) return [];
              var n = this.vv;
              (this.vv = Qu()),
                this.wv.forEach(function (t) {
                  e.Ev(t.key) && (e.vv = e.vv.add(t.key));
                });
              var r = [];
              return (
                n.forEach(function (t) {
                  e.vv.has(t) || r.push(new Ul(t));
                }),
                this.vv.forEach(function (t) {
                  n.has(t) || r.push(new _l(t));
                }),
                r
              );
            }),
            (Fl.prototype.Dv = function (t) {
              (this.lv = t.mh), (this.vv = Qu());
              var e = this.pv(t.documents);
              return this.es(e, !0);
            }),
            (Fl.prototype.Sv = function () {
              return ea.Di(this.query, this.wv, this.Ii, 0 === this.dv);
            }),
            Fl);
        function Fl(t, e) {
          (this.query = t),
            (this.lv = e),
            (this.dv = null),
            (this.Ni = !1),
            (this.vv = Qu()),
            (this.Ii = Qu()),
            (this.wv = new Zu(t.Xn.bind(t)));
        }
        function Vl() {
          (this.av = new Dl()),
            (this.fv = {}),
            (this.rd = null),
            (this.El = null),
            (this.jr = null);
        }
        function Gl(t, e, n) {
          (this.query = t), (this.targetId = e), (this.view = n);
        }
        function jl(t) {
          (this.key = t), (this.Ov = !1);
        }
        function Bl() {
          (this.aw = null), (this.targetId = 0), (this.listeners = []);
        }
        function Hl() {}
        var zl =
            ((ip.prototype.run = function () {
              this.Av();
            }),
            (ip.prototype.Av = function () {
              var t = this;
              this.vf.hf(function () {
                return p(t, void 0, void 0, function () {
                  var e,
                    n,
                    r = this;
                  return v(this, function (t) {
                    return (
                      (e = this.Rv.gd()),
                      (n = this.Pv(e)) &&
                        n
                          .then(function (t) {
                            r.Qr.$r(function () {
                              return e
                                .commit()
                                .then(function () {
                                  r.Kr.resolve(t);
                                })
                                .catch(function (t) {
                                  r.kv(t);
                                });
                            });
                          })
                          .catch(function (t) {
                            r.kv(t);
                          }),
                      [2]
                    );
                  });
                });
              });
            }),
            (ip.prototype.Pv = function (t) {
              try {
                var e = this.updateFunction(t);
                return !Ws(e) && e.catch && e.then
                  ? e
                  : (this.Kr.reject(
                      Error("Transaction callback must return a Promise")
                    ),
                    null);
              } catch (t) {
                return this.Kr.reject(t), null;
              }
            }),
            (ip.prototype.kv = function (t) {
              var e = this;
              0 < this.Cv && this.Nv(t)
                ? ((this.Cv -= 1),
                  this.Qr.$r(function () {
                    return e.Av(), Promise.resolve();
                  }))
                : this.Kr.reject(t);
            }),
            (ip.prototype.Nv = function (t) {
              if ("FirebaseError" !== t.name) return !1;
              var e = t.code;
              return "aborted" === e || "failed-precondition" === e || !Mu(e);
            }),
            ip),
          Wl =
            (Object.defineProperty(rp.prototype, "Gv", {
              get: function () {
                return !0 === this.isPrimary;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (rp.prototype.subscribe = function (t) {
              Gr(null !== t, "SyncEngine listener cannot be null"),
                Gr(null === this.Vv, "SyncEngine already has a subscriber."),
                (this.Vv = t);
            }),
            (rp.prototype.listen = function (s) {
              return p(this, void 0, void 0, function () {
                var e, n, r, i, o;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.Wv("listen()"),
                        (r = this.Uv.get(s))
                          ? ((e = r.targetId),
                            this.Fv.Wd(e),
                            (n = r.view.Sv()),
                            [3, 4])
                          : [3, 1]
                      );
                    case 1:
                      return [4, this.zh.hh(s.Yn())];
                    case 2:
                      return (
                        (i = t.sent()),
                        (o = this.Fv.Wd(i.targetId)),
                        (e = i.targetId),
                        [4, this.zv(s, e, "current" === o)]
                      );
                    case 3:
                      (n = t.sent()),
                        this.isPrimary && this.Rv.listen(i),
                        (t.label = 4);
                    case 4:
                      return this.Vv.kf([n]), [2, e];
                  }
                });
              });
            }),
            (rp.prototype.zv = function (u, a, h) {
              return p(this, void 0, void 0, function () {
                var e, n, r, i, o, s;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.zh.vh(u, !0)];
                    case 1:
                      return (
                        (e = t.sent()),
                        (n = new ql(u, e.mh)),
                        (r = n.pv(e.documents)),
                        (i = ra.ki(a, h && "Offline" !== this.onlineState)),
                        Gr(
                          0 === (o = n.es(r, !0 === this.isPrimary, i)).Iv.length,
                          "View returned limbo docs before target ack from the server."
                        ),
                        Gr(
                          !!o.snapshot,
                          "applyChanges for new view should always return a snapshot"
                        ),
                        (s = new Gl(u, a, n)),
                        this.Uv.set(u, s),
                        this.xv[a] || (this.xv[a] = []),
                        this.xv[a].push(u),
                        [2, o.snapshot]
                      );
                  }
                });
              });
            }),
            (rp.prototype.Kv = function (r) {
              return p(this, void 0, void 0, function () {
                var e, n;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.zh.vh(r.query, !0)];
                    case 1:
                      return (
                        (e = t.sent()),
                        (n = r.view.Dv(e)),
                        this.isPrimary && this.Hv(r.targetId, n.Iv),
                        [2, n]
                      );
                  }
                });
              });
            }),
            (rp.prototype.nd = function (i) {
              return p(this, void 0, void 0, function () {
                var e,
                  n,
                  r = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.Wv("unlisten()"),
                        Gr(
                          !!(e = this.Uv.get(i)),
                          "Trying to unlisten on query not found:" + i
                        ),
                        1 < (n = this.xv[e.targetId]).length
                          ? ((this.xv[e.targetId] = n.filter(function (t) {
                              return !t.isEqual(i);
                            })),
                            this.Uv.delete(i),
                            [2])
                          : this.isPrimary
                          ? (this.Fv.Kd(e.targetId),
                            this.Fv.qd(e.targetId)
                              ? [3, 2]
                              : [
                                  4,
                                  this.zh
                                    .dh(e.targetId, !1)
                                    .then(function () {
                                      r.Fv.Jd(e.targetId),
                                        r.Rv.nd(e.targetId),
                                        r.Jv(e.targetId);
                                    })
                                    .catch(xh),
                                ])
                          : [3, 3]
                      );
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [3, 5];
                    case 3:
                      return this.Jv(e.targetId), [4, this.zh.dh(e.targetId, !0)];
                    case 4:
                      t.sent(), (t.label = 5);
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (rp.prototype.write = function (n, r) {
              return p(this, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.Wv("write()"), [4, this.zh.Qo(n)];
                    case 1:
                      return (
                        (e = t.sent()),
                        this.Fv.Bd(e.batchId),
                        this.Yv(e.batchId, r),
                        [4, this.Xv(e.Ku)]
                      );
                    case 2:
                      return t.sent(), [4, this.Rv.Xl()];
                    case 3:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (rp.prototype.runTransaction = function (t, e, n) {
              new zl(t, this.Rv, e, n).run();
            }),
            (rp.prototype.Yo = function (n) {
              return p(this, void 0, void 0, function () {
                var e,
                  r = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      this.Wv("applyRemoteEvent()"), (t.label = 1);
                    case 1:
                      return t.trys.push([1, 4, , 6]), [4, this.zh.Yo(n)];
                    case 2:
                      return (
                        (e = t.sent()),
                        di(n.Si, function (t, e) {
                          var n = r.Lv[Number(t)];
                          n &&
                            (Gr(
                              e.Oi.size + e.Fi.size + e.Vi.size <= 1,
                              "Limbo resolution for single document contains multiple changes."
                            ),
                            0 < e.Oi.size
                              ? (n.Ov = !0)
                              : 0 < e.Fi.size
                              ? Gr(
                                  n.Ov,
                                  "Received change for limbo target document without add."
                                )
                              : 0 < e.Vi.size &&
                                (Gr(
                                  n.Ov,
                                  "Received remove for limbo target document without add."
                                ),
                                (n.Ov = !1)));
                        }),
                        [4, this.Xv(e, n)]
                      );
                    case 3:
                      return t.sent(), [3, 6];
                    case 4:
                      return [4, xh(t.sent())];
                    case 5:
                      return t.sent(), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (rp.prototype.Tv = function (r, t) {
              if ((this.isPrimary && 0 === t) || (!this.isPrimary && 1 === t)) {
                this.Wv("applyOnlineStateChange()");
                var i = [];
                this.Uv.forEach(function (t, e) {
                  var n = e.view.Tv(r);
                  Gr(
                    0 === n.Iv.length,
                    "OnlineState should not affect limbo documents."
                  ),
                    n.snapshot && i.push(n.snapshot);
                }),
                  this.Vv.$v(r),
                  this.Vv.kf(i),
                  (this.onlineState = r),
                  this.isPrimary && this.Fv.$d(r);
              }
            }),
            (rp.prototype.od = function (u, a) {
              return p(this, void 0, void 0, function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  s = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.Wv("rejectListens()"),
                        this.Fv.Yd(u, "rejected", a),
                        (e = this.Lv[u]),
                        (n = e && e.key)
                          ? ((this.jv = this.jv.remove(n)),
                            delete this.Lv[u],
                            (r = (r = new Hi(Bi.G)).lt(n, new Os(n, qi.q()))),
                            (i = Qu().add(n)),
                            (o = new na(qi.MIN, {}, new oo(Hr), r, i)),
                            [2, this.Yo(o)])
                          : [3, 1]
                      );
                    case 1:
                      return [
                        4,
                        this.zh
                          .dh(u, !1)
                          .then(function () {
                            return s.Jv(u, a);
                          })
                          .catch(xh),
                      ];
                    case 2:
                      t.sent(), (t.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (rp.prototype.ov = function (n, r, i) {
              return p(this, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.Wv("applyBatchState()"), [4, this.zh.Go(n)];
                    case 1:
                      return null === (e = t.sent())
                        ? (Mr(
                            "SyncEngine",
                            "Cannot apply mutation batch with id: " + n
                          ),
                          [2])
                        : "pending" !== r
                        ? [3, 3]
                        : [4, this.Rv.Xl()];
                    case 2:
                      return t.sent(), [3, 4];
                    case 3:
                      "acknowledged" === r || "rejected" === r
                        ? (this.Zv(n, i || null), this.zh.bh(n))
                        : Vr("Unknown batchState: " + r),
                        (t.label = 4);
                    case 4:
                      return [4, this.Xv(e)];
                    case 5:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (rp.prototype.vd = function (r) {
              return p(this, void 0, void 0, function () {
                var e, n;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      this.Wv("applySuccessfulWrite()"),
                        (e = r.batch.batchId),
                        this.Zv(e, null),
                        this.tw(e),
                        (t.label = 1);
                    case 1:
                      return t.trys.push([1, 4, , 6]), [4, this.zh.Os(r)];
                    case 2:
                      return (
                        (n = t.sent()),
                        this.Fv.Qd(e, "acknowledged"),
                        [4, this.Xv(n)]
                      );
                    case 3:
                      return t.sent(), [3, 6];
                    case 4:
                      return [4, xh(t.sent())];
                    case 5:
                      return t.sent(), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (rp.prototype.pd = function (n, r) {
              return p(this, void 0, void 0, function () {
                var e;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      this.Wv("rejectFailedWrite()"),
                        this.Zv(n, r),
                        this.tw(n),
                        (t.label = 1);
                    case 1:
                      return t.trys.push([1, 4, , 6]), [4, this.zh.Ho(n)];
                    case 2:
                      return (
                        (e = t.sent()),
                        this.Fv.Qd(n, "rejected", r),
                        [4, this.Xv(e)]
                      );
                    case 3:
                      return t.sent(), [3, 6];
                    case 4:
                      return [4, xh(t.sent())];
                    case 5:
                      return t.sent(), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (rp.prototype.nw = function (r) {
              return p(this, void 0, void 0, function () {
                var e, n;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.Rv.jl() ||
                          Mr(
                            "SyncEngine",
                            "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."
                          ),
                        [4, this.zh.Gs()]
                      );
                    case 1:
                      return (
                        -1 === (e = t.sent())
                          ? r.resolve()
                          : ((n = this.Mv.get(e) || []).push(r),
                            this.Mv.set(e, n)),
                        [2]
                      );
                  }
                });
              });
            }),
            (rp.prototype.tw = function (t) {
              (this.Mv.get(t) || []).forEach(function (t) {
                t.resolve();
              }),
                this.Mv.delete(t);
            }),
            (rp.prototype.iw = function (e) {
              this.Mv.forEach(function (t) {
                t.forEach(function (t) {
                  t.reject(new Zr($r.CANCELLED, e));
                });
              }),
                this.Mv.clear();
            }),
            (rp.prototype.Yv = function (t, e) {
              var n = this.Bv[this.currentUser.v()];
              (n = (n = n || new Hi(Hr)).lt(t, e)),
                (this.Bv[this.currentUser.v()] = n);
            }),
            (rp.prototype.Zv = function (t, e) {
              var n = this.Bv[this.currentUser.v()];
              if (n) {
                var r = n.get(t);
                r &&
                  (Gr(t === n.vt(), "Mutation callbacks processed out-of-order?"),
                  e ? r.reject(e) : r.resolve(),
                  (n = n.remove(t))),
                  (this.Bv[this.currentUser.v()] = n);
              }
            }),
            (rp.prototype.Jv = function (t, e) {
              var n = this;
              void 0 === e && (e = null),
                this.Fv.Kd(t),
                Gr(
                  this.xv[t] && 0 !== this.xv[t].length,
                  "There are no queries mapped to target id " + t
                );
              for (var r = 0, i = this.xv[t]; r < i.length; r++) {
                var o = i[r];
                this.Uv.delete(o), e && this.Vv.ew(o, e);
              }
              if ((delete this.xv[t], this.isPrimary)) {
                var s = this.qv.Nu(t);
                this.qv.Pu(t),
                  s.forEach(function (t) {
                    n.qv.Ou(t) || n.rw(t);
                  });
              }
            }),
            (rp.prototype.rw = function (t) {
              var e = this.jv.get(t);
              null !== e &&
                (this.Rv.nd(e), (this.jv = this.jv.remove(t)), delete this.Lv[e]);
            }),
            (rp.prototype.Hv = function (t, e) {
              for (var n = 0, r = e; n < r.length; n++) {
                var i = r[n];
                i instanceof _l
                  ? (this.qv.Du(i.key, t), this.uw(i))
                  : i instanceof Ul
                  ? (Mr("SyncEngine", "Document no longer in limbo: " + i.key),
                    this.qv.Ru(i.key, t),
                    this.qv.Ou(i.key) || this.rw(i.key))
                  : Vr("Unknown limbo change: " + JSON.stringify(i));
              }
            }),
            (rp.prototype.uw = function (t) {
              var e = t.key;
              if (!this.jv.get(e)) {
                Mr("SyncEngine", "New document in limbo: " + e);
                var n = this.Qv.next(),
                  r = nu.jn(e.path);
                (this.Lv[n] = new jl(e)),
                  this.Rv.listen(new Lu(r.Yn(), n, 2, xa.Mr)),
                  (this.jv = this.jv.lt(e, n));
              }
            }),
            (rp.prototype.sw = function () {
              return this.jv;
            }),
            (rp.prototype.Xv = function (r, a) {
              return p(this, void 0, void 0, function () {
                var o,
                  s,
                  e,
                  u = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (o = []),
                        (s = []),
                        (e = []),
                        this.Uv.forEach(function (t, i) {
                          e.push(
                            Promise.resolve()
                              .then(function () {
                                var n = i.view.pv(r);
                                return n.Pa
                                  ? u.zh.vh(i.query, !1).then(function (t) {
                                      var e = t.documents;
                                      return i.view.pv(e, n);
                                    })
                                  : n;
                              })
                              .then(function (t) {
                                var e = a && a.Si[i.targetId],
                                  n = i.view.es(t, !0 === u.isPrimary, e);
                                if ((u.Hv(i.targetId, n.Iv), n.snapshot)) {
                                  u.isPrimary &&
                                    u.Fv.Yd(
                                      i.targetId,
                                      n.snapshot.fromCache
                                        ? "not-current"
                                        : "current"
                                    ),
                                    o.push(n.snapshot);
                                  var r = Sh.Io(i.targetId, n.snapshot);
                                  s.push(r);
                                }
                              })
                          );
                        }),
                        [4, Promise.all(e)]
                      );
                    case 1:
                      return t.sent(), this.Vv.kf(o), [4, this.zh.uh(s)];
                    case 2:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (rp.prototype.Wv = function (t) {
              Gr(
                null !== this.Vv,
                "Trying to call " + t + " before calling subscribe()."
              );
            }),
            (rp.prototype.bd = function (r) {
              return p(this, void 0, void 0, function () {
                var e, n;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = !this.currentUser.isEqual(r)),
                        (this.currentUser = r),
                        e
                          ? (this.iw(
                              "'waitForPendingWrites' promise is rejected due to a user change."
                            ),
                            [4, this.zh.Lo(r)])
                          : [3, 3]
                      );
                    case 1:
                      return (
                        (n = t.sent()),
                        this.Fv.Lo(r, n.Bo, n.Mo),
                        [4, this.Xv(n.qo)]
                      );
                    case 2:
                      t.sent(), (t.label = 3);
                    case 3:
                      return [4, this.Rv.bd()];
                    case 4:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (rp.prototype.yd = function (a) {
              return p(this, void 0, void 0, function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  s,
                  u = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return !0 !== a || !0 === this.isPrimary
                        ? [3, 3]
                        : ((this.isPrimary = !0), [4, this.Rv.yd(!0)]);
                    case 1:
                      return t.sent(), (o = this.Fv.Ld()), [4, this.ow(o.tt())];
                    case 2:
                      for (e = t.sent(), n = 0, r = e; n < r.length; n++)
                        (i = r[n]), this.Rv.listen(i);
                      return [3, 7];
                    case 3:
                      return !1 !== a || !1 === this.isPrimary
                        ? [3, 7]
                        : ((this.isPrimary = !1),
                          (o = []),
                          (s = Promise.resolve()),
                          pi(this.xv, function (t, e) {
                            u.Fv.Hd(t)
                              ? o.push(t)
                              : (s = s.then(function () {
                                  return u.Jv(t), u.zh.dh(t, !0);
                                })),
                              u.Rv.nd(t);
                          }),
                          [4, s]);
                    case 4:
                      return t.sent(), [4, this.ow(o)];
                    case 5:
                      return t.sent(), this.hw(), [4, this.Rv.yd(!1)];
                    case 6:
                      t.sent(), (t.label = 7);
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (rp.prototype.hw = function () {
              var e = this;
              pi(this.Lv, function (t) {
                e.Rv.nd(t);
              }),
                this.qv.ku(),
                (this.Lv = []),
                (this.jv = new Hi(Bi.G));
            }),
            (rp.prototype.ow = function (d) {
              return p(this, void 0, void 0, function () {
                var e, n, r, i, o, s, u, a, h, c, f, l, p;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      (e = []), (n = []), (r = 0), (i = d), (t.label = 1);
                    case 1:
                      return r < i.length
                        ? ((o = i[r]),
                          (s = void 0),
                          (u = this.xv[o]) && 0 !== u.length
                            ? [4, this.zh.dh(o, !0)]
                            : [3, 8])
                        : [3, 14];
                    case 2:
                      return t.sent(), [4, this.zh.hh(u[0].Yn())];
                    case 3:
                      (s = t.sent()), (a = 0), (h = u), (t.label = 4);
                    case 4:
                      return a < h.length
                        ? ((c = h[a]),
                          Gr(
                            !!(f = this.Uv.get(c)),
                            "No query view found for " + c
                          ),
                          [4, this.Kv(f)])
                        : [3, 7];
                    case 5:
                      (l = t.sent()).snapshot && n.push(l.snapshot),
                        (t.label = 6);
                    case 6:
                      return a++, [3, 4];
                    case 7:
                      return [3, 12];
                    case 8:
                      return (
                        Gr(
                          !0 === this.isPrimary,
                          "A secondary tab should never have an active target without an active query."
                        ),
                        [4, this.zh.Th(o)]
                      );
                    case 9:
                      return (
                        Gr(!!(p = t.sent()), "Target for id " + o + " not found"),
                        [4, this.zh.hh(p)]
                      );
                    case 10:
                      return (s = t.sent()), [4, this.zv(this.cw(p), o, !1)];
                    case 11:
                      t.sent(), (t.label = 12);
                    case 12:
                      e.push(s), (t.label = 13);
                    case 13:
                      return r++, [3, 1];
                    case 14:
                      return this.Vv.kf(n), [2, e];
                  }
                });
              });
            }),
            (rp.prototype.cw = function (t) {
              return new nu(
                t.path,
                t.collectionGroup,
                t.orderBy,
                t.filters,
                t.limit,
                "F",
                t.startAt,
                t.endAt
              );
            }),
            (rp.prototype.gh = function () {
              return this.zh.gh();
            }),
            (rp.prototype.hv = function (r, i, o) {
              return p(this, void 0, void 0, function () {
                var e, n;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (this.isPrimary)
                        return (
                          Mr(
                            "SyncEngine",
                            "Ignoring unexpected query state notification."
                          ),
                          [2]
                        );
                      if (!this.xv[r]) return [3, 7];
                      switch (i) {
                        case "current":
                        case "not-current":
                          return [3, 1];
                        case "rejected":
                          return [3, 4];
                      }
                      return [3, 6];
                    case 1:
                      return [4, this.zh.Eh()];
                    case 2:
                      return (
                        (e = t.sent()),
                        (n = na.Pi(r, "current" === i)),
                        [4, this.Xv(e, n)]
                      );
                    case 3:
                      return t.sent(), [3, 7];
                    case 4:
                      return [4, this.zh.dh(r, !0)];
                    case 5:
                      return t.sent(), this.Jv(r, o), [3, 7];
                    case 6:
                      Vr("Unexpected target state: " + i), (t.label = 7);
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (rp.prototype.cv = function (f, l) {
              return p(this, void 0, void 0, function () {
                var e,
                  n,
                  r,
                  i,
                  o,
                  s,
                  u,
                  a,
                  h,
                  c = this;
                return v(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (!this.isPrimary) return [2];
                      (e = 0), (n = f), (t.label = 1);
                    case 1:
                      return e < n.length
                        ? ((h = n[e]),
                          Gr(
                            !this.xv[h],
                            "Trying to add an already active target"
                          ),
                          [4, this.zh.Th(h)])
                        : [3, 6];
                    case 2:
                      return (
                        Gr(
                          !!(r = t.sent()),
                          "Query data for active target " + h + " not found"
                        ),
                        [4, this.zh.hh(r)]
                      );
                    case 3:
                      return (
                        (i = t.sent()), [4, this.zv(this.cw(r), i.targetId, !1)]
                      );
                    case 4:
                      t.sent(), this.Rv.listen(i), (t.label = 5);
                    case 5:
                      return e++, [3, 1];
                    case 6:
                      (o = function (e) {
                        return v(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return s.xv[e]
                                ? [
                                    4,
                                    s.zh
                                      .dh(e, !1)
                                      .then(function () {
                                        c.Rv.nd(e), c.Jv(e);
                                      })
                                      .catch(xh),
                                  ]
                                : [2, "continue"];
                            case 1:
                              return t.sent(), [2];
                          }
                        });
                      }),
                        (s = this),
                        (u = 0),
                        (a = l),
                        (t.label = 7);
                    case 7:
                      return u < a.length ? ((h = a[u]), [5, o(h)]) : [3, 10];
                    case 8:
                      t.sent(), (t.label = 9);
                    case 9:
                      return u++, [3, 7];
                    case 10:
                      return [2];
                  }
                });
              });
            }),
            (rp.prototype.enableNetwork = function () {
              return this.zh.yh(!0), this.Rv.enableNetwork();
            }),
            (rp.prototype.disableNetwork = function () {
              return this.zh.yh(!1), this.Rv.disableNetwork();
            }),
            (rp.prototype.be = function (t) {
              var e = this.Lv[t];
              if (e && e.Ov) return Qu().add(e.key);
              var n = Qu(),
                r = this.xv[t];
              if (!r) return n;
              for (var i = 0, o = r; i < o.length; i++) {
                var s = o[i],
                  u = this.Uv.get(s);
                Gr(!!u, "No query view found for " + s), (n = n.Mt(u.view.mv));
              }
              return n;
            }),
            rp),
          Ql =
            ((np.prototype.listen = function (t) {
              var e = t.query,
                n = !1,
                r = this.fw.get(e);
              return (
                r || ((n = !0), (r = new Bl()), this.fw.set(e, r)),
                r.listeners.push(t),
                Gr(
                  !t.Tv(this.onlineState),
                  "applyOnlineStateChange() shouldn't raise an event for brand-new listeners."
                ),
                r.aw && t.dw(r.aw) && this.vw(),
                n
                  ? this.rd.listen(e).then(function (t) {
                      return (r.targetId = t);
                    })
                  : Promise.resolve(r.targetId)
              );
            }),
            (np.prototype.nd = function (o) {
              return p(this, void 0, void 0, function () {
                var e, n, r, i;
                return v(this, function (t) {
                  return (
                    (e = o.query),
                    (n = !1),
                    (r = this.fw.get(e)) &&
                      0 <= (i = r.listeners.indexOf(o)) &&
                      (r.listeners.splice(i, 1), (n = 0 === r.listeners.length)),
                    n ? (this.fw.delete(e), [2, this.rd.nd(e)]) : [2]
                  );
                });
              });
            }),
            (np.prototype.kf = function (t) {
              for (var e = !1, n = 0, r = t; n < r.length; n++) {
                var i = r[n],
                  o = i.query,
                  s = this.fw.get(o);
                if (s) {
                  for (var u = 0, a = s.listeners; u < a.length; u++)
                    a[u].dw(i) && (e = !0);
                  s.aw = i;
                }
              }
              e && this.vw();
            }),
            (np.prototype.ew = function (t, e) {
              var n = this.fw.get(t);
              if (n)
                for (var r = 0, i = n.listeners; r < i.length; r++)
                  i[r].onError(e);
              this.fw.delete(t);
            }),
            (np.prototype.$v = function (i) {
              this.onlineState = i;
              var o = !1;
              this.fw.forEach(function (t, e) {
                for (var n = 0, r = e.listeners; n < r.length; n++)
                  r[n].Tv(i) && (o = !0);
              }),
                o && this.vw();
            }),
            (np.prototype.ww = function (t) {
              this.lw.add(t), t.next();
            }),
            (np.prototype.mw = function (t) {
              this.lw.delete(t);
            }),
            (np.prototype.vw = function () {
              this.lw.forEach(function (t) {
                t.next();
              });
            }),
            np),
          Yl =
            ((ep.prototype.dw = function (t) {
              if (
                (Gr(
                  0 < t.docChanges.length || t.Ti,
                  "We got a new snapshot with no changes?"
                ),
                !this.options.includeMetadataChanges)
              ) {
                for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                  var i = r[n];
                  3 !== i.type && e.push(i);
                }
                t = new ea(t.query, t.docs, t._i, e, t.Ii, t.fromCache, t.Ti, !0);
              }
              var o = !1;
              return (
                this.gw
                  ? this.yw(t) && (this.pw.next(t), (o = !0))
                  : this._w(t, this.onlineState) && (this.Iw(t), (o = !0)),
                (this.bw = t),
                o
              );
            }),
            (ep.prototype.onError = function (t) {
              this.pw.error(t);
            }),
            (ep.prototype.Tv = function (t) {
              this.onlineState = t;
              var e = !1;
              return (
                this.bw &&
                  !this.gw &&
                  this._w(this.bw, t) &&
                  (this.Iw(this.bw), (e = !0)),
                e
              );
            }),
            (ep.prototype._w = function (t, e) {
              if (
                (Gr(
                  !this.gw,
                  "Determining whether to raise first event but already had first event"
                ),
                !t.fromCache)
              )
                return !0;
              var n = "Offline" !== e;
              return this.options.Tw && n
                ? (Gr(
                    t.fromCache,
                    "Waiting for sync, but snapshot is not from cache"
                  ),
                  !1)
                : !t.docs.J() || "Offline" === e;
            }),
            (ep.prototype.yw = function (t) {
              if (0 < t.docChanges.length) return !0;
              var e = this.bw && this.bw.hasPendingWrites !== t.hasPendingWrites;
              return !(!t.Ti && !e) && !0 === this.options.includeMetadataChanges;
            }),
            (ep.prototype.Iw = function (t) {
              Gr(!this.gw, "Trying to raise initial events for second time"),
                (t = ea.Di(t.query, t.docs, t.Ii, t.fromCache)),
                (this.gw = !0),
                this.pw.next(t);
            }),
            ep),
          Kl =
            ((tp.prototype.Xc = function () {
              return Uh.jh(this.cacheSizeBytes);
            }),
            tp),
          Jl =
            ((Zl.prototype.start = function (t) {
              var n = this;
              this.Dw();
              var r = new Oa(),
                i = new Oa(),
                o = !1;
              return (
                this.credentials.T(function (e) {
                  o
                    ? n.Qr.$r(function () {
                        return n.bd(e);
                      })
                    : ((o = !0),
                      n
                        .Sw(t, i, e)
                        .then(function (t) {
                          return n.Rw(e, t);
                        })
                        .then(r.resolve, r.reject));
                }),
                this.Qr.$r(function () {
                  return r.promise;
                }),
                i.promise
              );
            }),
            (Zl.prototype.enableNetwork = function () {
              var t = this;
              return (
                this.Dw(),
                this.Qr.enqueue(function () {
                  return t.rd.enableNetwork();
                })
              );
            }),
            (Zl.prototype.Sw = function (t, e, n) {
              var r = this;
              return t instanceof Kl
                ? this.Cw(n, t)
                    .then(function (t) {
                      return e.resolve(), t;
                    })
                    .catch(function (t) {
                      if ((e.reject(t), !r.Aw(t))) throw t;
                      return (
                        console.warn(
                          "Error enabling offline persistence. Falling back to persistence disabled: " +
                            t
                        ),
                        r.Pw()
                      );
                    })
                : (e.resolve(), this.Pw());
            }),
            (Zl.prototype.Aw = function (t) {
              return t instanceof Zr
                ? t.code === $r.FAILED_PRECONDITION || t.code === $r.UNIMPLEMENTED
                : !(
                    "undefined" != typeof DOMException &&
                    t instanceof DOMException
                  ) ||
                    22 === t.code ||
                    20 === t.code ||
                    11 === t.code;
            }),
            (Zl.prototype.Dw = function () {
              if (this.Qr.uu)
                throw new Zr(
                  $r.FAILED_PRECONDITION,
                  "The client has already been terminated."
                );
            }),
            (Zl.prototype.Cw = function (r, i) {
              var t = this,
                o = zc.Ia(this.Ew),
                s = new Ia(this.Ew.s, { Te: !0 });
              return Promise.resolve().then(function () {
                return p(t, void 0, void 0, function () {
                  var e, n;
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if (i.synchronizeTabs && !kl.cs(this.platform))
                          throw new Zr(
                            $r.UNIMPLEMENTED,
                            "IndexedDB persistence is only available on platforms that support LocalStorage."
                          );
                        return (
                          (e = i.Xc()),
                          (this.Fv = i.synchronizeTabs
                            ? new kl(this.Qr, this.platform, o, this.clientId, r)
                            : new Ml()),
                          [
                            4,
                            zc.Yc({
                              allowTabSynchronization: i.synchronizeTabs,
                              persistenceKey: o,
                              clientId: this.clientId,
                              platform: this.platform,
                              Lc: this.Qr,
                              serializer: s,
                              Xc: e,
                              qc: this.Fv,
                            }),
                          ]
                        );
                      case 1:
                        return (n = t.sent()), [2, (this.persistence = n).As.Wh];
                    }
                  });
                });
              });
            }),
            (Zl.prototype.Pw = function () {
              return (
                (this.persistence = cf.Wa(this.clientId)),
                (this.Fv = new Ml()),
                Promise.resolve(null)
              );
            }),
            (Zl.prototype.Rw = function (h, c) {
              var t = this;
              return (
                Mr("FirestoreClient", "Initializing. user=", h.uid),
                this.platform.kw(this.Ew).then(function (a) {
                  return p(t, void 0, void 0, function () {
                    var e,
                      n,
                      r,
                      i,
                      o,
                      s,
                      u = this;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return (
                            (e = new Zc()),
                            (this.zh = new Dh(this.persistence, e, h)),
                            [4, this.zh.start()]
                          );
                        case 1:
                          return (
                            t.sent(),
                            c && (this.Nw = new Mh(c, this.Qr, this.zh)),
                            (n = this.platform.Ow()),
                            (r = this.platform.Fw(this.Ew.s)),
                            (i = new gf(this.Qr, a, this.credentials, r)),
                            (o = function (t) {
                              return u.rd.Tv(t, 0);
                            }),
                            (s = function (t) {
                              return u.rd.Tv(t, 1);
                            }),
                            (this.Rv = new yl(this.zh, i, this.Qr, o, n)),
                            (this.rd = new Wl(this.zh, this.Rv, this.Fv, h)),
                            (this.Fv.El = s),
                            (this.Rv.rd = this.rd),
                            (this.Fv.rd = this.rd),
                            (this.Vw = new Ql(this.rd)),
                            [4, this.Fv.start()]
                          );
                        case 2:
                          return t.sent(), [4, this.Rv.start()];
                        case 3:
                          return (
                            t.sent(),
                            [
                              4,
                              this.persistence.ra(function (e) {
                                return p(u, void 0, void 0, function () {
                                  return v(this, function (t) {
                                    switch (t.label) {
                                      case 0:
                                        return [4, this.rd.yd(e)];
                                      case 1:
                                        return (
                                          t.sent(),
                                          this.Nw &&
                                            (e && !this.Nw.Co
                                              ? this.Nw.start()
                                              : e || this.Nw.stop()),
                                          [2]
                                        );
                                    }
                                  });
                                });
                              }),
                            ]
                          );
                        case 4:
                          return (
                            t.sent(),
                            [
                              4,
                              this.persistence.ua(function () {
                                return p(u, void 0, void 0, function () {
                                  return v(this, function (t) {
                                    switch (t.label) {
                                      case 0:
                                        return [4, this.terminate()];
                                      case 1:
                                        return t.sent(), [2];
                                    }
                                  });
                                });
                              }),
                            ]
                          );
                        case 5:
                          return t.sent(), [2];
                      }
                    });
                  });
                })
              );
            }),
            (Zl.prototype.bd = function (t) {
              return (
                this.Qr.du(),
                Mr(
                  "FirestoreClient",
                  "Credential Changed. Current user: " + t.uid
                ),
                this.rd.bd(t)
              );
            }),
            (Zl.prototype.disableNetwork = function () {
              var t = this;
              return (
                this.Dw(),
                this.Qr.enqueue(function () {
                  return t.rd.disableNetwork();
                })
              );
            }),
            (Zl.prototype.terminate = function () {
              var t = this;
              return this.Qr.au(function () {
                return p(t, void 0, void 0, function () {
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return this.Nw && this.Nw.stop(), [4, this.Rv.shutdown()];
                      case 1:
                        return t.sent(), [4, this.Fv.shutdown()];
                      case 2:
                        return t.sent(), [4, this.persistence.shutdown()];
                      case 3:
                        return t.sent(), this.credentials.D(), [2];
                    }
                  });
                });
              });
            }),
            (Zl.prototype.waitForPendingWrites = function () {
              var t = this;
              this.Dw();
              var e = new Oa();
              return (
                this.Qr.$r(function () {
                  return t.rd.nw(e);
                }),
                e.promise
              );
            }),
            (Zl.prototype.listen = function (t, e, n) {
              var r = this;
              this.Dw();
              var i = new Yl(t, e, n);
              return (
                this.Qr.$r(function () {
                  return r.Vw.listen(i);
                }),
                i
              );
            }),
            (Zl.prototype.nd = function (t) {
              var e = this;
              this.Uw ||
                this.Qr.$r(function () {
                  return e.Vw.nd(t);
                });
            }),
            (Zl.prototype.xw = function (t) {
              var e = this;
              return (
                this.Dw(),
                this.Qr.enqueue(function () {
                  return e.zh.oh(t);
                }).then(function (t) {
                  if (t instanceof ks) return t;
                  if (t instanceof Os) return null;
                  throw new Zr(
                    $r.UNAVAILABLE,
                    "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
                  );
                })
              );
            }),
            (Zl.prototype.jw = function (i) {
              var t = this;
              return (
                this.Dw(),
                this.Qr.enqueue(function () {
                  return p(t, void 0, void 0, function () {
                    var e, n, r;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, this.zh.vh(i, !0)];
                        case 1:
                          return (
                            (e = t.sent()),
                            (n = new ql(i, e.mh)),
                            (r = n.pv(e.documents)),
                            [2, n.es(r, !1).snapshot]
                          );
                      }
                    });
                  });
                })
              );
            }),
            (Zl.prototype.write = function (t) {
              var e = this;
              this.Dw();
              var n = new Oa();
              return (
                this.Qr.$r(function () {
                  return e.rd.write(t, n);
                }),
                n.promise
              );
            }),
            (Zl.prototype.s = function () {
              return this.Ew.s;
            }),
            (Zl.prototype.ww = function (t) {
              var e = this;
              this.Dw(),
                this.Qr.$r(function () {
                  return e.Vw.ww(t), Promise.resolve();
                });
            }),
            (Zl.prototype.mw = function (t) {
              this.Uw || this.Vw.mw(t);
            }),
            Object.defineProperty(Zl.prototype, "Uw", {
              get: function () {
                return this.Qr.uu;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Zl.prototype.transaction = function (t) {
              var e = this;
              this.Dw();
              var n = new Oa();
              return (
                this.Qr.$r(function () {
                  return e.rd.runTransaction(e.Qr, t, n), Promise.resolve();
                }),
                n.promise
              );
            }),
            Zl),
          Xl =
            (($l.prototype.next = function (t) {
              this.Lw(this.observer.next, t);
            }),
            ($l.prototype.error = function (t) {
              this.Lw(this.observer.error, t);
            }),
            ($l.prototype.qw = function () {
              this.muted = !0;
            }),
            ($l.prototype.Lw = function (t, e) {
              var n = this;
              this.muted ||
                setTimeout(function () {
                  n.muted || t(e);
                }, 0);
            }),
            $l);
        function $l(t) {
          (this.observer = t), (this.muted = !1);
        }
        function Zl(t, e, n, r) {
          (this.platform = t),
            (this.Ew = e),
            (this.credentials = n),
            (this.Qr = r),
            (this.clientId = jr.u());
        }
        function tp(t, e) {
          (this.cacheSizeBytes = t), (this.synchronizeTabs = e);
        }
        function ep(t, e, n) {
          (this.query = t),
            (this.pw = e),
            (this.gw = !1),
            (this.bw = null),
            (this.onlineState = "Unknown"),
            (this.options = n || {});
        }
        function np(t) {
          (this.rd = t),
            (this.fw = new Qa(function (t) {
              return t.canonicalId();
            })),
            (this.onlineState = "Unknown"),
            (this.lw = new Set()),
            this.rd.subscribe(this);
        }
        function rp(t, e, n, r) {
          (this.zh = t),
            (this.Rv = e),
            (this.Fv = n),
            (this.currentUser = r),
            (this.Vv = null),
            (this.Uv = new Qa(function (t) {
              return t.canonicalId();
            })),
            (this.xv = {}),
            (this.jv = new Hi(Bi.G)),
            (this.Lv = {}),
            (this.qv = new za()),
            (this.Bv = {}),
            (this.Mv = new Map()),
            (this.Qv = Nh.uo()),
            (this.isPrimary = void 0),
            (this.onlineState = "Unknown");
        }
        function ip(t, e, n, r) {
          (this.Qr = t),
            (this.Rv = e),
            (this.updateFunction = n),
            (this.Kr = r),
            (this.Cv = 5),
            (this.vf = new df(this.Qr, "retry_transaction"));
        }
        function op(i) {
          return (function () {
            if ("object" != typeof i || null === i) return !1;
            for (
              var t = i, e = 0, n = ["next", "error", "complete"];
              e < n.length;
              e++
            ) {
              var r = n[e];
              if (r in t && "function" == typeof t[r]) return !0;
            }
            return !1;
          })();
        }
        var sp,
          up = Uh.Bh,
          ap =
            ((Dp.prototype.isEqual = function (t) {
              return (
                this.host === t.host &&
                this.ssl === t.ssl &&
                this.timestampsInSnapshots === t.timestampsInSnapshots &&
                this.credentials === t.credentials &&
                this.cacheSizeBytes === t.cacheSizeBytes &&
                this.forceLongPolling === t.forceLongPolling
              );
            }),
            Dp),
          hp =
            ((Sp.prototype.settings = function (t) {
              if (
                (mi("Firestore.settings", arguments, 1),
                bi("Firestore.settings", "object", 1, t),
                fi(t, "persistence"))
              )
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  '"persistence" is now specified with a separate call to firestore.enablePersistence().'
                );
              var e = new ap(t);
              if (this.Gw && !this.Jw.isEqual(e))
                throw new Zr(
                  $r.FAILED_PRECONDITION,
                  "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object."
                );
              void 0 !== (this.Jw = e).credentials &&
                (this.Hw = (function (t) {
                  if (!t) return new ti();
                  switch (t.type) {
                    case "gapi":
                      var e = t.O;
                      return (
                        Gr(
                          !(
                            "object" != typeof e ||
                            null === e ||
                            !e.auth ||
                            !e.auth.getAuthHeaderValueForFirstParty
                          ),
                          "unexpected gapi interface"
                        ),
                        new ri(e, t.k || "0")
                      );
                    case "provider":
                      return t.O;
                    default:
                      throw new Zr(
                        $r.INVALID_ARGUMENT,
                        "makeCredentialsProvider failed due to invalid credential type"
                      );
                  }
                })(e.credentials));
            }),
            (Sp.prototype.enableNetwork = function () {
              return this.Qw(), this.Gw.enableNetwork();
            }),
            (Sp.prototype.disableNetwork = function () {
              return this.Qw(), this.Gw.disableNetwork();
            }),
            (Sp.prototype.enablePersistence = function (t) {
              if (this.Gw)
                throw new Zr(
                  $r.FAILED_PRECONDITION,
                  "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object."
                );
              var e = !1;
              return (
                t &&
                  (void 0 !== t.experimentalTabSynchronization &&
                    qr(
                      "The 'experimentalTabSynchronization' setting has been renamed to 'synchronizeTabs'. In a future release, the setting will be removed and it is recommended that you update your firestore.enablePersistence() call to use 'synchronizeTabs'."
                    ),
                  (e = li(
                    void 0 !== t.synchronizeTabs
                      ? t.synchronizeTabs
                      : t.experimentalTabSynchronization,
                    !1
                  ))),
                this.$w(new Kl(this.Jw.cacheSizeBytes, e))
              );
            }),
            (Sp.prototype.clearPersistence = function () {
              var t = this,
                n = zc.Ia(this.Zw()),
                r = new Oa();
              return (
                this.Mw.su(function () {
                  return p(t, void 0, void 0, function () {
                    var e;
                    return v(this, function (t) {
                      switch (t.label) {
                        case 0:
                          if (
                            (t.trys.push([0, 2, , 3]),
                            void 0 !== this.Gw && !this.Gw.Uw)
                          )
                            throw new Zr(
                              $r.FAILED_PRECONDITION,
                              "Persistence cannot be cleared after this Firestore instance is initialized."
                            );
                          return [4, zc.clearPersistence(n)];
                        case 1:
                          return t.sent(), r.resolve(), [3, 3];
                        case 2:
                          return (e = t.sent()), r.reject(e), [3, 3];
                        case 3:
                          return [2];
                      }
                    });
                  });
                }),
                r.promise
              );
            }),
            (Sp.prototype.terminate = function () {
              return (
                this.app._removeServiceInstance("firestore"),
                this.INTERNAL.delete()
              );
            }),
            Object.defineProperty(Sp.prototype, "tm", {
              get: function () {
                return this.Qw(), this.Gw.Uw;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Sp.prototype.waitForPendingWrites = function () {
              return this.Qw(), this.Gw.waitForPendingWrites();
            }),
            (Sp.prototype.onSnapshotsInSync = function (t) {
              if ((this.Qw(), op(t))) return this.nm(t);
              bi("Firestore.onSnapshotsInSync", "function", 1, t);
              var e = { next: t };
              return this.nm(e);
            }),
            (Sp.prototype.nm = function (t) {
              var e = this,
                n = new Xl({
                  next: function () {
                    t.next && t.next();
                  },
                  error: function (t) {
                    throw Vr("Uncaught Error in onSnapshotsInSync");
                  },
                });
              return (
                this.Gw.ww(n),
                function () {
                  n.qw(), e.Gw.mw(n);
                }
              );
            }),
            (Sp.prototype.Qw = function () {
              return this.Gw || this.$w(new Hl()), this.Gw;
            }),
            (Sp.prototype.Zw = function () {
              return new Qr(
                this.Ww,
                this.Kw,
                this.Jw.host,
                this.Jw.ssl,
                this.Jw.forceLongPolling
              );
            }),
            (Sp.prototype.$w = function (t) {
              Gr(!!this.Jw.host, "FirestoreSettings.host is not set"),
                Gr(!this.Gw, "configureClient() called multiple times");
              var e = this.Zw();
              return (
                (this.Gw = new Jl(Ta.t(), e, this.Hw, this.Mw)), this.Gw.start(t)
              );
            }),
            (Sp.prototype.Xw = function (r) {
              return new sl(function (t) {
                if (t instanceof lp) {
                  var e = r,
                    n = t.firestore.Ww;
                  if (!n.isEqual(e))
                    throw new Zr(
                      $r.INVALID_ARGUMENT,
                      "Document reference is for database " +
                        n.projectId +
                        "/" +
                        n.database +
                        " but should be for database " +
                        e.projectId +
                        "/" +
                        e.database
                    );
                  return new ol(r, t.im);
                }
                return t;
              });
            }),
            (Sp.zw = function (t) {
              var e = t.options;
              if (!fi(e, "projectId"))
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  '"projectId" not provided in firebase.initializeApp.'
                );
              var n = e.projectId;
              if (!n || "string" != typeof n)
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "projectId must be a string in FirebaseApp.options"
                );
              return new Jr(n);
            }),
            Object.defineProperty(Sp.prototype, "app", {
              get: function () {
                if (!this.Bw)
                  throw new Zr(
                    $r.FAILED_PRECONDITION,
                    "Firestore was not initialized using the Firebase SDK. 'app' is not available"
                  );
                return this.Bw;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Sp.prototype.collection = function (t) {
              return (
                mi("Firestore.collection", arguments, 1),
                bi("Firestore.collection", "non-empty string", 1, t),
                this.Qw(),
                new Op(Vi.it(t), this)
              );
            }),
            (Sp.prototype.doc = function (t) {
              return (
                mi("Firestore.doc", arguments, 1),
                bi("Firestore.doc", "non-empty string", 1, t),
                this.Qw(),
                lp.em(Vi.it(t), this)
              );
            }),
            (Sp.prototype.collectionGroup = function (t) {
              if (
                (mi("Firestore.collectionGroup", arguments, 1),
                bi("Firestore.collectionGroup", "non-empty string", 1, t),
                0 <= t.indexOf("/"))
              )
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Invalid collection ID '" +
                    t +
                    "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'."
                );
              return this.Qw(), new yp(new nu(Vi.et, t), this);
            }),
            (Sp.prototype.runTransaction = function (e) {
              var n = this;
              return (
                mi("Firestore.runTransaction", arguments, 1),
                bi("Firestore.runTransaction", "function", 1, e),
                this.Qw().transaction(function (t) {
                  return e(new cp(n, t));
                })
              );
            }),
            (Sp.prototype.batch = function () {
              return this.Qw(), new fp(this);
            }),
            Object.defineProperty(Sp, "logLevel", {
              get: function () {
                switch (_r()) {
                  case 0:
                    return "debug";
                  case 1:
                    return "error";
                  case 2:
                    return "silent";
                  default:
                    return Vr("Unknown log level: " + _r());
                }
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Sp.setLogLevel = function (t) {
              switch (
                (mi("Firestore.setLogLevel", arguments, 1),
                bi("Firestore.setLogLevel", "non-empty string", 1, t),
                t)
              ) {
                case "debug":
                  Ur(0);
                  break;
                case "error":
                  Ur(1);
                  break;
                case "silent":
                  Ur(2);
                  break;
                default:
                  throw new Zr($r.INVALID_ARGUMENT, "Invalid log level: " + t);
              }
            }),
            (Sp.prototype.rm = function () {
              return this.Jw.timestampsInSnapshots;
            }),
            Sp),
          cp =
            ((Ap.prototype.get = function (t) {
              var n = this;
              mi("Transaction.get", arguments, 1);
              var r = Pp("Transaction.get", t, this.um);
              return this.sm.lookup([r.im]).then(function (t) {
                if (!t || 1 !== t.length)
                  return Vr("Mismatch in docs returned from document lookup.");
                var e = t[0];
                if (e instanceof Os)
                  return new dp(n.um, r.im, null, !1, !1, r.om);
                if (e instanceof ks) return new dp(n.um, r.im, e, !1, !1, r.om);
                throw Vr(
                  "BatchGetDocumentsRequest returned unexpected document type: " +
                    e.constructor.name
                );
              });
            }),
            (Ap.prototype.set = function (t, e, n) {
              wi("Transaction.set", arguments, 2, 3);
              var r = Pp("Transaction.set", t, this.um);
              n = Cp("Transaction.set", n);
              var i = _p(r.om, e, "Transaction.set"),
                o = i[0],
                s = i[1],
                u =
                  n.merge || n.mergeFields
                    ? this.um.Yw.sl(s, o, n.mergeFields)
                    : this.um.Yw.rl(s, o);
              return this.sm.set(r.im, u), this;
            }),
            (Ap.prototype.update = function (t, e, n) {
              for (var r, i, o = [], s = 3; s < arguments.length; s++)
                o[s - 3] = arguments[s];
              return (
                (i =
                  "string" == typeof e || e instanceof wf
                    ? (gi("Transaction.update", arguments, 3),
                      (r = Pp("Transaction.update", t, this.um)),
                      this.um.Yw.cl("Transaction.update", e, n, o))
                    : (mi("Transaction.update", arguments, 2),
                      (r = Pp("Transaction.update", t, this.um)),
                      this.um.Yw.ol("Transaction.update", e))),
                this.sm.update(r.im, i),
                this
              );
            }),
            (Ap.prototype.delete = function (t) {
              mi("Transaction.delete", arguments, 1);
              var e = Pp("Transaction.delete", t, this.um);
              return this.sm.delete(e.im), this;
            }),
            Ap),
          fp =
            ((Np.prototype.set = function (t, e, n) {
              wi("WriteBatch.set", arguments, 2, 3), this.am();
              var r = Pp("WriteBatch.set", t, this.um);
              n = Cp("WriteBatch.set", n);
              var i = _p(r.om, e, "WriteBatch.set"),
                o = i[0],
                s = i[1],
                u =
                  n.merge || n.mergeFields
                    ? this.um.Yw.sl(s, o, n.mergeFields)
                    : this.um.Yw.rl(s, o);
              return (this.hm = this.hm.concat(u.Hf(r.im, Ro.NONE))), this;
            }),
            (Np.prototype.update = function (t, e, n) {
              for (var r, i, o = [], s = 3; s < arguments.length; s++)
                o[s - 3] = arguments[s];
              return (
                this.am(),
                (i =
                  "string" == typeof e || e instanceof wf
                    ? (gi("WriteBatch.update", arguments, 3),
                      (r = Pp("WriteBatch.update", t, this.um)),
                      this.um.Yw.cl("WriteBatch.update", e, n, o))
                    : (mi("WriteBatch.update", arguments, 2),
                      (r = Pp("WriteBatch.update", t, this.um)),
                      this.um.Yw.ol("WriteBatch.update", e))),
                (this.hm = this.hm.concat(i.Hf(r.im, Ro.exists(!0)))),
                this
              );
            }),
            (Np.prototype.delete = function (t) {
              mi("WriteBatch.delete", arguments, 1), this.am();
              var e = Pp("WriteBatch.delete", t, this.um);
              return (this.hm = this.hm.concat(new _o(e.im, Ro.NONE))), this;
            }),
            (Np.prototype.commit = function () {
              return p(this, void 0, void 0, function () {
                return v(this, function (t) {
                  return (
                    this.am(),
                    (this.cm = !0),
                    0 < this.hm.length ? [2, this.um.Qw().write(this.hm)] : [2]
                  );
                });
              });
            }),
            (Np.prototype.am = function () {
              if (this.cm)
                throw new Zr(
                  $r.FAILED_PRECONDITION,
                  "A write batch can no longer be used after commit() has been called."
                );
            }),
            Np),
          lp =
            ((Tp.em = function (t, e, n) {
              if (t.length % 2 != 0)
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Invalid document reference. Document references must have an even number of segments, but " +
                    t.nt() +
                    " has " +
                    t.length
                );
              return new Tp(new Bi(t), e, n);
            }),
            Object.defineProperty(Tp.prototype, "id", {
              get: function () {
                return this.im.path.X();
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Tp.prototype, "parent", {
              get: function () {
                return new Op(this.im.path.H(), this.firestore, this.om);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Tp.prototype, "path", {
              get: function () {
                return this.im.path.nt();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Tp.prototype.collection = function (t) {
              if (
                (mi("DocumentReference.collection", arguments, 1),
                bi("DocumentReference.collection", "non-empty string", 1, t),
                !t)
              )
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Must provide a non-empty collection name to collection()"
                );
              var e = Vi.it(t);
              return new Op(this.im.path.child(e), this.firestore);
            }),
            (Tp.prototype.isEqual = function (t) {
              if (!(t instanceof Tp))
                throw Ri("isEqual", "DocumentReference", 1, t);
              return (
                this.firestore === t.firestore &&
                this.im.isEqual(t.im) &&
                this.om === t.om
              );
            }),
            (Tp.prototype.set = function (t, e) {
              wi("DocumentReference.set", arguments, 1, 2),
                (e = Cp("DocumentReference.set", e));
              var n = _p(this.om, t, "DocumentReference.set"),
                r = n[0],
                i = n[1],
                o =
                  e.merge || e.mergeFields
                    ? this.firestore.Yw.sl(i, r, e.mergeFields)
                    : this.firestore.Yw.rl(i, r);
              return this.Gw.write(o.Hf(this.im, Ro.NONE));
            }),
            (Tp.prototype.update = function (t, e) {
              for (var n, r = [], i = 2; i < arguments.length; i++)
                r[i - 2] = arguments[i];
              return (
                (n =
                  "string" == typeof t || t instanceof wf
                    ? (gi("DocumentReference.update", arguments, 2),
                      this.firestore.Yw.cl("DocumentReference.update", t, e, r))
                    : (mi("DocumentReference.update", arguments, 1),
                      this.firestore.Yw.ol("DocumentReference.update", t))),
                this.Gw.write(n.Hf(this.im, Ro.exists(!0)))
              );
            }),
            (Tp.prototype.delete = function () {
              return (
                mi("DocumentReference.delete", arguments, 0),
                this.Gw.write([new _o(this.im, Ro.NONE)])
              );
            }),
            (Tp.prototype.onSnapshot = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              wi("DocumentReference.onSnapshot", arguments, 1, 4);
              var n,
                r = { includeMetadataChanges: !1 },
                i = 0;
              "object" != typeof t[i] ||
                op(t[i]) ||
                (Oi("DocumentReference.onSnapshot", (r = t[i]), [
                  "includeMetadataChanges",
                ]),
                Ti(
                  "DocumentReference.onSnapshot",
                  "boolean",
                  "includeMetadataChanges",
                  r.includeMetadataChanges
                ),
                i++);
              var o = { includeMetadataChanges: r.includeMetadataChanges };
              return (
                (n = op(t[i])
                  ? t[i]
                  : (bi("DocumentReference.onSnapshot", "function", i, t[i]),
                    Ei(
                      "DocumentReference.onSnapshot",
                      "function",
                      i + 1,
                      t[i + 1]
                    ),
                    Ei(
                      "DocumentReference.onSnapshot",
                      "function",
                      i + 2,
                      t[i + 2]
                    ),
                    { next: t[i], error: t[i + 1], complete: t[i + 2] })),
                this.fm(o, n)
              );
            }),
            (Tp.prototype.fm = function (t, n) {
              var r = this,
                e = function (t) {
                  console.error("Uncaught Error in onSnapshot:", t);
                };
              n.error && (e = n.error.bind(n));
              var i = new Xl({
                  next: function (t) {
                    if (n.next) {
                      Gr(
                        t.docs.size <= 1,
                        "Too many documents returned on a document query"
                      );
                      var e = t.docs.get(r.im);
                      n.next(
                        new dp(
                          r.firestore,
                          r.im,
                          e,
                          t.fromCache,
                          t.hasPendingWrites,
                          r.om
                        )
                      );
                    }
                  },
                  error: e,
                }),
                o = this.Gw.listen(nu.jn(this.im.path), i, t);
              return function () {
                i.qw(), r.Gw.nd(o);
              };
            }),
            (Tp.prototype.get = function (n) {
              var r = this;
              return (
                wi("DocumentReference.get", arguments, 0, 1),
                Lp("DocumentReference.get", n),
                new Promise(function (e, t) {
                  n && "cache" === n.source
                    ? r.firestore
                        .Qw()
                        .xw(r.im)
                        .then(function (t) {
                          e(
                            new dp(
                              r.firestore,
                              r.im,
                              t,
                              !0,
                              t instanceof ks && t.en,
                              r.om
                            )
                          );
                        }, t)
                    : r.lm(e, t, n);
                })
              );
            }),
            (Tp.prototype.lm = function (e, n, r) {
              var i = this.fm(
                { includeMetadataChanges: !0, Tw: !0 },
                {
                  next: function (t) {
                    i(),
                      !t.exists && t.metadata.fromCache
                        ? n(
                            new Zr(
                              $r.UNAVAILABLE,
                              "Failed to get document because the client is offline."
                            )
                          )
                        : t.exists &&
                          t.metadata.fromCache &&
                          r &&
                          "server" === r.source
                        ? n(
                            new Zr(
                              $r.UNAVAILABLE,
                              'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                            )
                          )
                        : e(t);
                  },
                  error: n,
                }
              );
            }),
            (Tp.prototype.withConverter = function (t) {
              return new Tp(this.im, this.firestore, t);
            }),
            Tp),
          pp =
            ((Ip.prototype.isEqual = function (t) {
              return (
                this.hasPendingWrites === t.hasPendingWrites &&
                this.fromCache === t.fromCache
              );
            }),
            Ip),
          dp =
            ((Ep.prototype.data = function (t) {
              if (
                (wi("DocumentSnapshot.data", arguments, 0, 1),
                (t = xp("DocumentSnapshot.data", t)),
                this.dm)
              ) {
                if (this.om) {
                  var e = new vp(this.um, this.im, this.dm, this.vm, this.wm);
                  return this.om.fromFirestore(e, t);
                }
                return this.mm(this.dm.data(), Mo.mn(t, this.um.rm()));
              }
            }),
            (Ep.prototype.get = function (t, e) {
              if (
                (wi("DocumentSnapshot.get", arguments, 1, 2),
                (e = xp("DocumentSnapshot.get", e)),
                this.dm)
              ) {
                var n = this.dm.data().field(fl("DocumentSnapshot.get", t));
                if (null !== n) return this.pm(n, Mo.mn(e, this.um.rm()));
              }
            }),
            Object.defineProperty(Ep.prototype, "id", {
              get: function () {
                return this.im.path.X();
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Ep.prototype, "ref", {
              get: function () {
                return new lp(this.im, this.um, this.om);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Ep.prototype, "exists", {
              get: function () {
                return null !== this.dm;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Ep.prototype, "metadata", {
              get: function () {
                return new pp(this.wm, this.vm);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Ep.prototype.isEqual = function (t) {
              if (!(t instanceof Ep))
                throw Ri("isEqual", "DocumentSnapshot", 1, t);
              return (
                this.um === t.um &&
                this.vm === t.vm &&
                this.im.isEqual(t.im) &&
                (null === this.dm ? null === t.dm : this.dm.isEqual(t.dm)) &&
                this.om === t.om
              );
            }),
            (Ep.prototype.mm = function (t, n) {
              var r = this,
                i = {};
              return (
                t.forEach(function (t, e) {
                  i[t] = r.pm(e, n);
                }),
                i
              );
            }),
            (Ep.prototype.pm = function (t, e) {
              if (t instanceof Ns) return this.mm(t, e);
              if (t instanceof Ss) return this.gm(t, e);
              if (t instanceof Is) {
                var n = t.value(e),
                  r = this.um.Qw().s();
                return (
                  t.s.isEqual(r) ||
                    qr(
                      "Document " +
                        this.im.path +
                        " contains a document reference within a different database (" +
                        t.s.projectId +
                        "/" +
                        t.s.database +
                        ") which is not supported. It will be treated as a reference in the current database (" +
                        r.projectId +
                        "/" +
                        r.database +
                        ") instead."
                    ),
                  new lp(n, this.um, this.om)
                );
              }
              return t.value(e);
            }),
            (Ep.prototype.gm = function (t, e) {
              var n = this;
              return t.Ht.map(function (t) {
                return n.pm(t, e);
              });
            }),
            Ep),
          vp =
            (t(bp, (sp = dp)),
            (bp.prototype.data = function (t) {
              var e = sp.prototype.data.call(this, t);
              return (
                Gr(
                  void 0 !== e,
                  "Document in a QueryDocumentSnapshot should exist"
                ),
                e
              );
            }),
            bp),
          yp =
            ((wp.prototype.where = function (t, e, n) {
              var r;
              mi("Query.where", arguments, 3),
                ki("Query.where", 3, n),
                (function (t, e, n, r) {
                  if (
                    !e.some(function (t) {
                      return t === r;
                    })
                  )
                    throw new Zr(
                      $r.INVALID_ARGUMENT,
                      "Invalid value " +
                        Di(r) +
                        " provided to function " +
                        t +
                        "() for its " +
                        xi(n) +
                        " argument. Acceptable values: " +
                        e.join(", ")
                    );
                })(
                  "Query.where",
                  [
                    "<",
                    "<=",
                    "==",
                    ">=",
                    ">",
                    "array-contains",
                    "in",
                    "array-contains-any",
                  ],
                  2,
                  e
                );
              var i = fl("Query.where", t),
                o = ru.it(e);
              if (i.ut()) {
                if (o === ru.ARRAY_CONTAINS || o === ru.ARRAY_CONTAINS_ANY)
                  throw new Zr(
                    $r.INVALID_ARGUMENT,
                    "Invalid Query. You can't perform '" +
                      o.toString() +
                      "' queries on FieldPath.documentId()."
                  );
                if (o === ru.IN) {
                  this.ym(n, o);
                  for (var s = [], u = 0, a = n; u < a.length; u++) {
                    var h = a[u];
                    s.push(this._m(h));
                  }
                  r = new Ss(s);
                } else r = this._m(n);
              } else
                (o !== ru.IN && o !== ru.ARRAY_CONTAINS_ANY) || this.ym(n, o),
                  (r = this.firestore.Yw.al("Query.where", n, o === ru.IN));
              var c = iu.create(i, o, r);
              return this.Im(c), new wp(this.bm.Bn(c), this.firestore, this.om);
            }),
            (wp.prototype.orderBy = function (t, e) {
              var n;
              if (
                (wi("Query.orderBy", arguments, 1, 2),
                Ei("Query.orderBy", "non-empty string", 2, e),
                void 0 === e || "asc" === e)
              )
                n = cu.ASCENDING;
              else {
                if ("desc" !== e)
                  throw new Zr(
                    $r.INVALID_ARGUMENT,
                    "Function Query.orderBy() has unknown direction '" +
                      e +
                      "', expected 'asc' or 'desc'."
                  );
                n = cu.DESCENDING;
              }
              if (null !== this.bm.startAt)
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy()."
                );
              if (null !== this.bm.endAt)
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy()."
                );
              var r = fl("Query.orderBy", t),
                i = new lu(r, n);
              return this.Tm(i), new wp(this.bm.Qn(i), this.firestore, this.om);
            }),
            (wp.prototype.limit = function (t) {
              return (
                mi("Query.limit", arguments, 1),
                bi("Query.limit", "number", 1, t),
                Ci("Query.limit", 1, t),
                new wp(this.bm.Gn(t), this.firestore, this.om)
              );
            }),
            (wp.prototype.limitToLast = function (t) {
              return (
                mi("Query.limitToLast", arguments, 1),
                bi("Query.limitToLast", "number", 1, t),
                Ci("Query.limitToLast", 1, t),
                new wp(this.bm.Wn(t), this.firestore, this.om)
              );
            }),
            (wp.prototype.startAt = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              gi("Query.startAt", arguments, 1);
              var r = this.Em("Query.startAt", t, e, !0);
              return new wp(this.bm.zn(r), this.firestore, this.om);
            }),
            (wp.prototype.startAfter = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              gi("Query.startAfter", arguments, 1);
              var r = this.Em("Query.startAfter", t, e, !1);
              return new wp(this.bm.zn(r), this.firestore, this.om);
            }),
            (wp.prototype.endBefore = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              gi("Query.endBefore", arguments, 1);
              var r = this.Em("Query.endBefore", t, e, !0);
              return new wp(this.bm.Kn(r), this.firestore, this.om);
            }),
            (wp.prototype.endAt = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              gi("Query.endAt", arguments, 1);
              var r = this.Em("Query.endAt", t, e, !1);
              return new wp(this.bm.Kn(r), this.firestore, this.om);
            }),
            (wp.prototype.isEqual = function (t) {
              if (!(t instanceof wp)) throw Ri("isEqual", "Query", 1, t);
              return this.firestore === t.firestore && this.bm.isEqual(t.bm);
            }),
            (wp.prototype.withConverter = function (t) {
              return new wp(this.bm, this.firestore, t);
            }),
            (wp.prototype.Em = function (t, e, n, r) {
              if ((ki(t, 1, e), e instanceof dp)) {
                if (0 < n.length)
                  throw new Zr(
                    $r.INVALID_ARGUMENT,
                    "Too many arguments provided to " + t + "()."
                  );
                var i = e;
                if (!i.exists)
                  throw new Zr(
                    $r.NOT_FOUND,
                    "Can't use a DocumentSnapshot that doesn't exist for " +
                      t +
                      "()."
                  );
                return this.Dm(t, i.dm, r);
              }
              var o = [e].concat(n);
              return this.Sm(t, o, r);
            }),
            (wp.prototype.Dm = function (t, e, n) {
              for (var r = [], i = 0, o = this.bm.orderBy; i < o.length; i++) {
                var s = o[i];
                if (s.field.ut()) r.push(new Is(this.firestore.Ww, e.key));
                else {
                  var u = e.field(s.field);
                  if (u instanceof bs)
                    throw new Zr(
                      $r.INVALID_ARGUMENT,
                      'Invalid query. You are trying to start or end a query using a document for which the field "' +
                        s.field +
                        '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
                    );
                  if (null === u) {
                    var a = s.field.nt();
                    throw new Zr(
                      $r.INVALID_ARGUMENT,
                      "Invalid query. You are trying to start or end a query using a document for which the field '" +
                        a +
                        "' (used as the orderBy) does not exist."
                    );
                  }
                  r.push(u);
                }
              }
              return new fu(r, n);
            }),
            (wp.prototype.Sm = function (t, e, n) {
              var r = this.bm.On;
              if (e.length > r.length)
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Too many arguments provided to " +
                    t +
                    "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses"
                );
              for (var i = [], o = 0; o < e.length; o++) {
                var s = e[o];
                if (r[o].field.ut()) {
                  if ("string" != typeof s)
                    throw new Zr(
                      $r.INVALID_ARGUMENT,
                      "Invalid query. Expected a string for document ID in " +
                        t +
                        "(), but got a " +
                        typeof s
                    );
                  if (!this.bm.ui() && -1 !== s.indexOf("/"))
                    throw new Zr(
                      $r.INVALID_ARGUMENT,
                      "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " +
                        t +
                        "() must be a plain document ID, but '" +
                        s +
                        "' contains a slash."
                    );
                  var u = this.bm.path.child(Vi.it(s));
                  if (!Bi.ht(u))
                    throw new Zr(
                      $r.INVALID_ARGUMENT,
                      "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " +
                        t +
                        "() must result in a valid document path, but '" +
                        u +
                        "' is not because it contains an odd number of segments."
                    );
                  var a = new Bi(u);
                  i.push(new Is(this.firestore.Ww, a));
                } else {
                  var h = this.firestore.Yw.al(t, s);
                  i.push(h);
                }
              }
              return new fu(i, n);
            }),
            (wp.prototype.onSnapshot = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              wi("Query.onSnapshot", arguments, 1, 4);
              var n,
                r = {},
                i = 0;
              return (
                "object" != typeof t[i] ||
                  op(t[i]) ||
                  (Oi("Query.onSnapshot", (r = t[i]), ["includeMetadataChanges"]),
                  Ti(
                    "Query.onSnapshot",
                    "boolean",
                    "includeMetadataChanges",
                    r.includeMetadataChanges
                  ),
                  i++),
                (n = op(t[i])
                  ? t[i]
                  : (bi("Query.onSnapshot", "function", i, t[i]),
                    Ei("Query.onSnapshot", "function", i + 1, t[i + 1]),
                    Ei("Query.onSnapshot", "function", i + 2, t[i + 2]),
                    { next: t[i], error: t[i + 1], complete: t[i + 2] })),
                this.Rm(this.bm),
                this.fm(r, n)
              );
            }),
            (wp.prototype.fm = function (t, e) {
              var n = this,
                r = function (t) {
                  console.error("Uncaught Error in onSnapshot:", t);
                };
              e.error && (r = e.error.bind(e));
              var i = new Xl({
                  next: function (t) {
                    e.next && e.next(new mp(n.firestore, n.bm, t, n.om));
                  },
                  error: r,
                }),
                o = this.firestore.Qw(),
                s = o.listen(this.bm, i, t);
              return function () {
                i.qw(), o.nd(s);
              };
            }),
            (wp.prototype.Rm = function (t) {
              if (t.ei() && 0 === t.On.length)
                throw new Zr(
                  $r.UNIMPLEMENTED,
                  "limitToLast() queries require specifying at least one orderBy() clause"
                );
            }),
            (wp.prototype.get = function (n) {
              var r = this;
              return (
                wi("Query.get", arguments, 0, 1),
                Lp("Query.get", n),
                this.Rm(this.bm),
                new Promise(function (e, t) {
                  n && "cache" === n.source
                    ? r.firestore
                        .Qw()
                        .jw(r.bm)
                        .then(function (t) {
                          e(new mp(r.firestore, r.bm, t, r.om));
                        }, t)
                    : r.lm(e, t, n);
                })
              );
            }),
            (wp.prototype.lm = function (e, n, r) {
              var i = this.fm(
                { includeMetadataChanges: !0, Tw: !0 },
                {
                  next: function (t) {
                    i(),
                      t.metadata.fromCache && r && "server" === r.source
                        ? n(
                            new Zr(
                              $r.UNAVAILABLE,
                              'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                            )
                          )
                        : e(t);
                  },
                  error: n,
                }
              );
            }),
            (wp.prototype._m = function (t) {
              if ("string" == typeof t) {
                if ("" === t)
                  throw new Zr(
                    $r.INVALID_ARGUMENT,
                    "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string."
                  );
                if (!this.bm.ui() && -1 !== t.indexOf("/"))
                  throw new Zr(
                    $r.INVALID_ARGUMENT,
                    "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" +
                      t +
                      "' contains a '/' character."
                  );
                var e = this.bm.path.child(Vi.it(t));
                if (!Bi.ht(e))
                  throw new Zr(
                    $r.INVALID_ARGUMENT,
                    "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
                      e +
                      "' is not because it has an odd number of segments (" +
                      e.length +
                      ")."
                  );
                return new Is(this.firestore.Ww, new Bi(e));
              }
              if (t instanceof lp) {
                var n = t;
                return new Is(this.firestore.Ww, n.im);
              }
              throw new Zr(
                $r.INVALID_ARGUMENT,
                "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " +
                  Di(t) +
                  "."
              );
            }),
            (wp.prototype.ym = function (t, e) {
              if (!Array.isArray(t) || 0 === t.length)
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Invalid Query. A non-empty array is required for '" +
                    e.toString() +
                    "' filters."
                );
              if (10 < t.length)
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Invalid Query. '" +
                    e.toString() +
                    "' filters support a maximum of 10 elements in the value array."
                );
              if (0 <= t.indexOf(null))
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Invalid Query. '" +
                    e.toString() +
                    "' filters cannot contain 'null' in the value array."
                );
              if (
                0 <
                t.filter(function (t) {
                  return Number.isNaN(t);
                }).length
              )
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Invalid Query. '" +
                    e.toString() +
                    "' filters cannot contain 'NaN' in the value array."
                );
            }),
            (wp.prototype.Im = function (t) {
              if (t instanceof iu) {
                var e = [ru.ARRAY_CONTAINS, ru.ARRAY_CONTAINS_ANY],
                  n = [ru.IN, ru.ARRAY_CONTAINS_ANY],
                  r = 0 <= e.indexOf(t.op),
                  i = 0 <= n.indexOf(t.op);
                if (t.Mn()) {
                  var o = this.bm.Ln();
                  if (null !== o && !o.isEqual(t.field))
                    throw new Zr(
                      $r.INVALID_ARGUMENT,
                      "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" +
                        o.toString() +
                        "' and '" +
                        t.field.toString() +
                        "'"
                    );
                  var s = this.bm.qn();
                  null !== s && this.Cm(t.field, s);
                } else if (i || r) {
                  var u = null;
                  if (
                    (i && (u = this.bm.ri(n)),
                    null === u && r && (u = this.bm.ri(e)),
                    null != u)
                  )
                    throw u === t.op
                      ? new Zr(
                          $r.INVALID_ARGUMENT,
                          "Invalid query. You cannot use more than one '" +
                            t.op.toString() +
                            "' filter."
                        )
                      : new Zr(
                          $r.INVALID_ARGUMENT,
                          "Invalid query. You cannot use '" +
                            t.op.toString() +
                            "' filters with '" +
                            u.toString() +
                            "' filters."
                        );
                }
              }
            }),
            (wp.prototype.Tm = function (t) {
              if (null === this.bm.qn()) {
                var e = this.bm.Ln();
                null !== e && this.Cm(e, t.field);
              }
            }),
            (wp.prototype.Cm = function (t, e) {
              if (!e.isEqual(t))
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" +
                    t.toString() +
                    "' and so you must also use '" +
                    t.toString() +
                    "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" +
                    e.toString() +
                    "' instead."
                );
            }),
            wp),
          mp =
            (Object.defineProperty(gp.prototype, "docs", {
              get: function () {
                var e = [];
                return (
                  this.forEach(function (t) {
                    return e.push(t);
                  }),
                  e
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(gp.prototype, "empty", {
              get: function () {
                return this.Pm.docs.J();
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(gp.prototype, "size", {
              get: function () {
                return this.Pm.docs.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (gp.prototype.forEach = function (e, n) {
              var r = this;
              wi("QuerySnapshot.forEach", arguments, 1, 2),
                bi("QuerySnapshot.forEach", "function", 1, e),
                this.Pm.docs.forEach(function (t) {
                  e.call(n, r.Om(t));
                });
            }),
            Object.defineProperty(gp.prototype, "query", {
              get: function () {
                return new yp(this.Am, this.um, this.om);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (gp.prototype.docChanges = function (t) {
              t &&
                (Oi("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]),
                Ti(
                  "QuerySnapshot.docChanges",
                  "boolean",
                  "includeMetadataChanges",
                  t.includeMetadataChanges
                ));
              var e = !(!t || !t.includeMetadataChanges);
              if (e && this.Pm.Ei)
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
                );
              return (
                (this.km && this.Nm === e) ||
                  ((this.km = (function (i, e, o, s) {
                    if (o._i.J()) {
                      var n,
                        r = 0;
                      return o.docChanges.map(function (t) {
                        var e = new vp(
                          i,
                          t.doc.key,
                          t.doc,
                          o.fromCache,
                          o.Ii.has(t.doc.key),
                          s
                        );
                        return (
                          Gr(
                            0 === t.type,
                            "Invalid event type for first snapshot"
                          ),
                          Gr(
                            !n || o.query.Xn(n, t.doc) < 0,
                            "Got added events in wrong order"
                          ),
                          (n = t.doc),
                          { type: "added", doc: e, oldIndex: -1, newIndex: r++ }
                        );
                      });
                    }
                    var u = o._i;
                    return o.docChanges
                      .filter(function (t) {
                        return e || 3 !== t.type;
                      })
                      .map(function (t) {
                        var e = new vp(
                            i,
                            t.doc.key,
                            t.doc,
                            o.fromCache,
                            o.Ii.has(t.doc.key),
                            s
                          ),
                          n = -1,
                          r = -1;
                        return (
                          0 !== t.type &&
                            (Gr(
                              0 <= (n = u.indexOf(t.doc.key)),
                              "Index for document not found"
                            ),
                            (u = u.delete(t.doc.key))),
                          1 !== t.type &&
                            (r = (u = u.add(t.doc)).indexOf(t.doc.key)),
                          {
                            type: (function (t) {
                              switch (t) {
                                case 0:
                                  return "added";
                                case 2:
                                case 3:
                                  return "modified";
                                case 1:
                                  return "removed";
                                default:
                                  return Vr("Unknown change type: " + t);
                              }
                            })(t.type),
                            doc: e,
                            oldIndex: n,
                            newIndex: r,
                          }
                        );
                      });
                  })(this.um, e, this.Pm, this.om)),
                  (this.Nm = e)),
                this.km
              );
            }),
            (gp.prototype.isEqual = function (t) {
              if (!(t instanceof gp)) throw Ri("isEqual", "QuerySnapshot", 1, t);
              return (
                this.um === t.um &&
                this.Am.isEqual(t.Am) &&
                this.Pm.isEqual(t.Pm) &&
                this.om === t.om
              );
            }),
            (gp.prototype.Om = function (t) {
              return new vp(
                this.um,
                t.key,
                t,
                this.metadata.fromCache,
                this.Pm.Ii.has(t.key),
                this.om
              );
            }),
            gp);
        function gp(t, e, n, r) {
          (this.um = t),
            (this.Am = e),
            (this.Pm = n),
            (this.om = r),
            (this.km = null),
            (this.Nm = null),
            (this.metadata = new pp(n.hasPendingWrites, n.fromCache));
        }
        function wp(t, e, n) {
          (this.bm = t), (this.firestore = e), (this.om = n);
        }
        function bp() {
          return (null !== sp && sp.apply(this, arguments)) || this;
        }
        function Ep(t, e, n, r, i, o) {
          (this.um = t),
            (this.im = e),
            (this.dm = n),
            (this.vm = r),
            (this.wm = i),
            (this.om = o);
        }
        function Ip(t, e) {
          (this.hasPendingWrites = t), (this.fromCache = e);
        }
        function Tp(t, e, n) {
          (this.im = t),
            (this.firestore = e),
            (this.om = n),
            (this.Gw = this.firestore.Qw());
        }
        function Np(t) {
          (this.um = t), (this.hm = []), (this.cm = !1);
        }
        function Ap(t, e) {
          (this.um = t), (this.sm = e);
        }
        function Sp(t, e) {
          var n = this;
          if (
            ((this.Bw = null),
            (this.Mw = new Pa()),
            (this.INTERNAL = {
              delete: function () {
                return p(n, void 0, void 0, function () {
                  return v(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return this.Qw(), [4, this.Gw.terminate()];
                      case 1:
                        return t.sent(), [2];
                    }
                  });
                });
              },
            }),
            "object" == typeof t.options)
          ) {
            var r = t;
            (this.Bw = r),
              (this.Ww = Sp.zw(r)),
              (this.Kw = r.name),
              (this.Hw = new ei(e));
          } else {
            var i = t;
            if (!i.projectId)
              throw new Zr($r.INVALID_ARGUMENT, "Must provide projectId");
            (this.Ww = new Jr(i.projectId, i.database)),
              (this.Kw = "[DEFAULT]"),
              (this.Hw = new ti());
          }
          (this.Jw = new ap({})), (this.Yw = this.Xw(this.Ww));
        }
        function Dp(t) {
          if (void 0 === t.host) {
            if (void 0 !== t.ssl)
              throw new Zr(
                $r.INVALID_ARGUMENT,
                "Can't provide ssl option if host option is not set"
              );
            (this.host = "firestore.googleapis.com"), (this.ssl = !0);
          } else
            Ii("settings", "non-empty string", "host", t.host),
              (this.host = t.host),
              Ti("settings", "boolean", "ssl", t.ssl),
              (this.ssl = li(t.ssl, !0));
          if (
            (Oi("settings", t, [
              "host",
              "ssl",
              "credentials",
              "timestampsInSnapshots",
              "cacheSizeBytes",
              "experimentalForceLongPolling",
            ]),
            Ti("settings", "object", "credentials", t.credentials),
            (this.credentials = t.credentials),
            Ti(
              "settings",
              "boolean",
              "timestampsInSnapshots",
              t.timestampsInSnapshots
            ),
            !0 === t.timestampsInSnapshots
              ? qr(
                  "\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now."
                )
              : !1 === t.timestampsInSnapshots &&
                qr(
                  "\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."
                ),
            (this.timestampsInSnapshots = li(t.timestampsInSnapshots, !0)),
            Ti("settings", "number", "cacheSizeBytes", t.cacheSizeBytes),
            void 0 === t.cacheSizeBytes)
          )
            this.cacheSizeBytes = Uh.Qh;
          else {
            if (t.cacheSizeBytes !== up && t.cacheSizeBytes < Uh.Mh)
              throw new Zr(
                $r.INVALID_ARGUMENT,
                "cacheSizeBytes must be at least " + Uh.Mh
              );
            this.cacheSizeBytes = t.cacheSizeBytes;
          }
          Ti(
            "settings",
            "boolean",
            "experimentalForceLongPolling",
            t.experimentalForceLongPolling
          ),
            (this.forceLongPolling =
              void 0 !== t.experimentalForceLongPolling &&
              t.experimentalForceLongPolling);
        }
        s(
          ["length", "forEach", "map"],
          "undefined" != typeof Symbol ? [Symbol.iterator] : []
        ).forEach(function (t) {
          try {
            Object.defineProperty(mp.prototype.docChanges, t, {
              get: function () {
                return (function () {
                  throw new Zr(
                    $r.INVALID_ARGUMENT,
                    'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"'
                  );
                })();
              },
            });
          } catch (t) {}
        });
        var kp,
          Op =
            (t(Rp, (kp = yp)),
            Object.defineProperty(Rp.prototype, "id", {
              get: function () {
                return this.bm.path.X();
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Rp.prototype, "parent", {
              get: function () {
                var t = this.bm.path.H();
                return t.J() ? null : new lp(new Bi(t), this.firestore);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(Rp.prototype, "path", {
              get: function () {
                return this.bm.path.nt();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (Rp.prototype.doc = function (t) {
              if (
                (wi("CollectionReference.doc", arguments, 0, 1),
                0 === arguments.length && (t = jr.u()),
                bi("CollectionReference.doc", "non-empty string", 1, t),
                "" === t)
              )
                throw new Zr(
                  $r.INVALID_ARGUMENT,
                  "Document path must be a non-empty string"
                );
              var e = Vi.it(t);
              return lp.em(this.bm.path.child(e), this.firestore, this.om);
            }),
            (Rp.prototype.add = function (t) {
              mi("CollectionReference.add", arguments, 1),
                bi(
                  "CollectionReference.add",
                  "object",
                  1,
                  this.om ? this.om.toFirestore(t) : t
                );
              var e = this.doc();
              return e.set(t).then(function () {
                return e;
              });
            }),
            (Rp.prototype.withConverter = function (t) {
              return new Rp(this.Fm, this.firestore, t);
            }),
            Rp);
        function Rp(t, e, n) {
          var r = kp.call(this, nu.jn(t), e, n) || this;
          if ((r.Fm = t).length % 2 != 1)
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Invalid collection reference. Collection references must have an odd number of segments, but " +
                t.nt() +
                " has " +
                t.length
            );
          return r;
        }
        function Cp(t, e) {
          if (void 0 === e) return { merge: !1 };
          if (
            (Oi(t, e, ["merge", "mergeFields"]),
            Ti(t, "boolean", "merge", e.merge),
            (function (t, e, n, r, i) {
              void 0 !== r &&
                (function (t, e, n, r, i) {
                  if (!(r instanceof Array))
                    throw new Zr(
                      $r.INVALID_ARGUMENT,
                      "Function " +
                        t +
                        "() requires its " +
                        e +
                        " option to be an array, but it was: " +
                        Di(r)
                    );
                  for (var o = 0; o < r.length; ++o)
                    if (!i(r[o]))
                      throw new Zr(
                        $r.INVALID_ARGUMENT,
                        "Function " +
                          t +
                          "() requires all " +
                          e +
                          " elements to be " +
                          n +
                          ", but the value at index " +
                          o +
                          " was: " +
                          Di(r[o])
                      );
                })(t, e, n, r, i);
            })(
              t,
              "mergeFields",
              "a string or a FieldPath",
              e.mergeFields,
              function (t) {
                return "string" == typeof t || t instanceof wf;
              }
            ),
            void 0 !== e.mergeFields && void 0 !== e.merge)
          )
            throw new Zr(
              $r.INVALID_ARGUMENT,
              "Invalid options passed to function " +
                t +
                '(): You cannot specify both "merge" and "mergeFields".'
            );
          return e;
        }
        function xp(t, e) {
          return void 0 === e
            ? {}
            : (Oi(t, e, ["serverTimestamps"]),
              Ni(t, 0, "serverTimestamps", e.serverTimestamps, [
                "estimate",
                "previous",
                "none",
              ]),
              e);
        }
        function Lp(t, e) {
          Ei(t, "object", 1, e),
            e &&
              (Oi(t, e, ["source"]),
              Ni(t, 0, "source", e.source, ["default", "server", "cache"]));
        }
        function Pp(t, e, n) {
          if (e instanceof lp) {
            if (e.firestore !== n)
              throw new Zr(
                $r.INVALID_ARGUMENT,
                "Provided document reference is from a different Firestore instance."
              );
            return e;
          }
          throw Ri(t, "DocumentReference", 1, e);
        }
        function _p(t, e, n) {
          var r;
          return (
            t ? ((r = t.toFirestore(e)), (n = "toFirestore() in " + n)) : (r = e),
            [r, n]
          );
        }
        var Up = Sa(hp, "Use firebase.firestore() instead."),
          Mp = Sa(cp, "Use firebase.firestore().runTransaction() instead."),
          qp = Sa(fp, "Use firebase.firestore().batch() instead."),
          Fp = Sa(lp, "Use firebase.firestore().doc() instead."),
          Vp = Sa(dp),
          Gp = Sa(vp),
          jp = Sa(yp),
          Bp = Sa(mp),
          Hp = Sa(Op, "Use firebase.firestore().collection() instead."),
          zp = {
            Firestore: Up,
            GeoPoint: Ui,
            Timestamp: Mi,
            Blob: Ca,
            Transaction: Mp,
            WriteBatch: qp,
            DocumentReference: Fp,
            DocumentSnapshot: Vp,
            Query: jp,
            QueryDocumentSnapshot: Gp,
            QuerySnapshot: Bp,
            CollectionReference: Hp,
            FieldPath: wf,
            FieldValue: zf,
            setLogLevel: hp.setLogLevel,
            CACHE_SIZE_UNLIMITED: up,
          };
        var Wp,
          Qp,
          Yp =
            ((od.prototype.xl = function (t) {}),
            (od.prototype.shutdown = function () {}),
            od),
          Kp =
            ((id.prototype.xl = function (t) {
              this.Lm.push(t);
            }),
            (id.prototype.shutdown = function () {
              window.removeEventListener("online", this.Vm),
                window.removeEventListener("offline", this.xm);
            }),
            (id.prototype.qm = function () {
              window.addEventListener("online", this.Vm),
                window.addEventListener("offline", this.xm);
            }),
            (id.prototype.Um = function () {
              Mr(
                "ConnectivityMonitor",
                "Network connectivity changed: AVAILABLE"
              );
              for (var t = 0, e = this.Lm; t < e.length; t++) (0, e[t])(0);
            }),
            (id.prototype.jm = function () {
              Mr(
                "ConnectivityMonitor",
                "Network connectivity changed: UNAVAILABLE"
              );
              for (var t = 0, e = this.Lm; t < e.length; t++) (0, e[t])(1);
            }),
            (id.cs = function () {
              return (
                "undefined" != typeof window &&
                void 0 !== window.addEventListener &&
                void 0 !== window.removeEventListener
              );
            }),
            id),
          Jp =
            ((rd.prototype.Af = function (t) {
              Gr(!this.Qm, "Called onOpen on stream twice!"), (this.Qm = t);
            }),
            (rd.prototype.Ef = function (t) {
              Gr(!this.Gm, "Called onClose on stream twice!"), (this.Gm = t);
            }),
            (rd.prototype.onMessage = function (t) {
              Gr(!this.Wm, "Called onMessage on stream twice!"), (this.Wm = t);
            }),
            (rd.prototype.close = function () {
              this.Mm();
            }),
            (rd.prototype.send = function (t) {
              this.Bm(t);
            }),
            (rd.prototype.zm = function () {
              Gr(
                void 0 !== this.Qm,
                "Cannot call onOpen because no callback was set"
              ),
                this.Qm();
            }),
            (rd.prototype.Km = function (t) {
              Gr(
                void 0 !== this.Gm,
                "Cannot call onClose because no callback was set"
              ),
                this.Gm(t);
            }),
            (rd.prototype.Hm = function (t) {
              Gr(
                void 0 !== this.Wm,
                "Cannot call onMessage because no callback was set"
              ),
                this.Wm(t);
            }),
            rd),
          Xp = { BatchGetDocuments: "batchGet", Commit: "commit" },
          $p = "gl-js/ fire/" + Lr,
          Zp =
            ((nd.prototype.Ym = function (t, e) {
              if (e) for (var n in e.g) e.g.hasOwnProperty(n) && (t[n] = e.g[n]);
              t["X-Goog-Api-Client"] = $p;
            }),
            (nd.prototype.Bf = function (a, r, i) {
              var h = this,
                c = this.Xm(a);
              return new Promise(function (o, s) {
                var u = new xr();
                u.listenOnce(Rr.COMPLETE, function () {
                  try {
                    switch (u.getLastErrorCode()) {
                      case Or.NO_ERROR:
                        var t = u.getResponseJson();
                        Mr("Connection", "XHR received:", JSON.stringify(t)),
                          o(t);
                        break;
                      case Or.TIMEOUT:
                        Mr("Connection", 'RPC "' + a + '" timed out'),
                          s(new Zr($r.DEADLINE_EXCEEDED, "Request time out"));
                        break;
                      case Or.HTTP_ERROR:
                        var e = u.getStatus();
                        if (
                          (Mr(
                            "Connection",
                            'RPC "' + a + '" failed with status:',
                            e,
                            "response text:",
                            u.getResponseText()
                          ),
                          0 < e)
                        ) {
                          var n = u.getResponseJson().error;
                          if (n && n.status && n.message) {
                            var r =
                              ((i = n.status.toLowerCase().replace("_", "-")),
                              0 <= Object.values($r).indexOf(i) ? i : $r.UNKNOWN);
                            s(new Zr(r, n.message));
                          } else
                            s(
                              new Zr(
                                $r.UNKNOWN,
                                "Server responded with status " + u.getStatus()
                              )
                            );
                        } else Mr("Connection", 'RPC "' + a + '" failed'), s(new Zr($r.UNAVAILABLE, "Connection failed."));
                        break;
                      default:
                        Vr(
                          'RPC "' +
                            a +
                            '" failed with unanticipated webchannel error ' +
                            u.getLastErrorCode() +
                            ": " +
                            u.getLastError() +
                            ", giving up."
                        );
                    }
                  } finally {
                    Mr("Connection", 'RPC "' + a + '" completed.');
                  }
                  var i;
                });
                var t = f({}, r);
                delete t.database;
                var e = JSON.stringify(t);
                Mr("Connection", "XHR sending: ", c + " " + e);
                var n = { "Content-Type": "text/plain" };
                h.Ym(n, i), u.send(c, "POST", e, n, 15);
              });
            }),
            (nd.prototype.Mf = function (t, e, n) {
              return this.Bf(t, e, n);
            }),
            (nd.prototype.Pf = function (t, e) {
              var n = [
                  this.Jm,
                  "/",
                  "google.firestore.v1.Firestore",
                  "/",
                  t,
                  "/channel",
                ],
                r = kr(),
                i = {
                  httpSessionIdParam: "gsessionid",
                  initMessageHeaders: {},
                  messageUrlParams: {
                    database:
                      "projects/" +
                      this.s.projectId +
                      "/databases/" +
                      this.s.database,
                  },
                  sendRawJson: !0,
                  supportsCrossDomainXhr: !0,
                  internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
                  forceLongPolling: this.forceLongPolling,
                };
              this.Ym(i.initMessageHeaders, e),
                ("undefined" != typeof window &&
                  (window.cordova || window.phonegap || window.PhoneGap) &&
                  /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
                    d()
                  )) ||
                  ("object" == typeof navigator &&
                    "ReactNative" === navigator.product) ||
                  0 <= d().indexOf("Electron/") ||
                  (function () {
                    var t = d();
                    return 0 <= t.indexOf("MSIE ") || 0 <= t.indexOf("Trident/");
                  })() ||
                  0 <= d().indexOf("MSAppHost/") ||
                  (function () {
                    var t =
                      "object" == typeof chrome
                        ? chrome.runtime
                        : "object" == typeof browser
                        ? browser.runtime
                        : void 0;
                    return "object" == typeof t && void 0 !== t.id;
                  })() ||
                  (i.httpHeadersOverwriteParam = "$httpHeaders");
              var o = n.join("");
              function s(t, e) {
                a.listen(t, function (t) {
                  try {
                    e(t);
                  } catch (t) {
                    setTimeout(function () {
                      throw t;
                    }, 0);
                  }
                });
              }
              Mr("Connection", "Creating WebChannel: " + o + " " + i);
              var a = r.createWebChannel(o, i),
                u = !1,
                h = !1,
                c = new Jp({
                  Bm: function (t) {
                    h
                      ? Mr(
                          "Connection",
                          "Not sending because WebChannel is closed:",
                          t
                        )
                      : (u ||
                          (Mr("Connection", "Opening WebChannel transport."),
                          a.open(),
                          (u = !0)),
                        Mr("Connection", "WebChannel sending:", t),
                        a.send(t));
                  },
                  Mm: function () {
                    return a.close();
                  },
                });
              return (
                s(Cr.EventType.OPEN, function () {
                  h || Mr("Connection", "WebChannel transport opened.");
                }),
                s(Cr.EventType.CLOSE, function () {
                  h ||
                    ((h = !0),
                    Mr("Connection", "WebChannel transport closed"),
                    c.Km());
                }),
                s(Cr.EventType.ERROR, function (t) {
                  h ||
                    ((h = !0),
                    Mr("Connection", "WebChannel transport errored:", t),
                    c.Km(
                      new Zr(
                        $r.UNAVAILABLE,
                        "The operation could not be completed"
                      )
                    ));
                }),
                s(Cr.EventType.MESSAGE, function (t) {
                  var e;
                  if (!h) {
                    var n = t.data[0];
                    Gr(!!n, "Got a webchannel message without data.");
                    var r = n,
                      i =
                        r.error ||
                        (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                    if (i) {
                      Mr("Connection", "WebChannel received error:", i);
                      var o = i.status,
                        s = (function () {
                          var t = Cu[o];
                          if (void 0 !== t) return qu(t);
                        })(),
                        u = i.message;
                      void 0 === s &&
                        ((s = $r.INTERNAL),
                        (u =
                          "Unknown error status: " +
                          o +
                          " with message " +
                          i.message)),
                        (h = !0),
                        c.Km(new Zr(s, u)),
                        a.close();
                    } else Mr("Connection", "WebChannel received:", n), c.Hm(n);
                  }
                }),
                setTimeout(function () {
                  c.zm();
                }, 0),
                c
              );
            }),
            (nd.prototype.Xm = function (t) {
              var e = Xp[t];
              return (
                Gr(void 0 !== e, "Unknown REST mapping for: " + t),
                this.Jm +
                  "/v1/projects/" +
                  this.s.projectId +
                  "/databases/" +
                  this.s.database +
                  "/documents:" +
                  e
              );
            }),
            nd),
          td =
            (Object.defineProperty(ed.prototype, "document", {
              get: function () {
                return "undefined" != typeof document ? document : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(ed.prototype, "window", {
              get: function () {
                return "undefined" != typeof window ? window : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (ed.prototype.kw = function (t) {
              return Promise.resolve(new Zp(t));
            }),
            (ed.prototype.Ow = function () {
              return Kp.cs() ? new Kp() : new Yp();
            }),
            (ed.prototype.Fw = function (t) {
              return new Ia(t, { Te: !0 });
            }),
            (ed.prototype.i = function (t) {
              return JSON.stringify(t);
            }),
            (ed.prototype.atob = function (t) {
              return atob(t);
            }),
            (ed.prototype.btoa = function (t) {
              return btoa(t);
            }),
            ed);
        function ed() {
          this.xr = "undefined" != typeof atob;
        }
        function nd(t) {
          this.s = t.s;
          var e = t.ssl ? "https" : "http";
          (this.Jm = e + "://" + t.host),
            (this.forceLongPolling = t.forceLongPolling);
        }
        function rd(t) {
          (this.Bm = t.Bm), (this.Mm = t.Mm);
        }
        function id() {
          var t = this;
          (this.Vm = function () {
            return t.Um();
          }),
            (this.xm = function () {
              return t.jm();
            }),
            (this.Lm = []),
            this.qm();
        }
        function od() {}
        Ta.Ur(new td()),
          (Qp = sd).INTERNAL.registerComponent(
            new I(
              "firestore",
              function (t) {
                var e = t.getProvider("app").getImmediate();
                return new hp(e, t.getProvider("auth-internal"));
              },
              "PUBLIC"
            ).setServiceProps(
              (Gr(
                (Wp = zp) && "object" == typeof Wp,
                "shallowCopy() expects object parameter."
              ),
              f({}, Wp))
            )
          ),
          Qp.registerVersion("@firebase/firestore", "1.12.2");
      }.apply(this, arguments));
    } catch (t) {
      throw (
        (console.error(t),
        new Error(
          "Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first."
        ))
      );
    }
  });
  //# sourceMappingURL=firebase-firestore.js.map
  
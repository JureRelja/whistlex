!(function (n, e) {
    for (var r in e) n[r] = e[r];
  })(
    window,
    (function (n) {
      var e = {};
      function r(t) {
        if (e[t]) return e[t].exports;
        var o = (e[t] = { i: t, l: !1, exports: {} });
        return n[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
      }
      return (
        (r.m = n),
        (r.c = e),
        (r.d = function (n, e, t) {
          r.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
        }),
        (r.r = function (n) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(n, "__esModule", { value: !0 });
        }),
        (r.t = function (n, e) {
          if ((1 & e && (n = r(n)), 8 & e)) return n;
          if (4 & e && "object" == typeof n && n && n.__esModule) return n;
          var t = Object.create(null);
          if (
            (r.r(t),
            Object.defineProperty(t, "default", { enumerable: !0, value: n }),
            2 & e && "string" != typeof n)
          )
            for (var o in n)
              r.d(
                t,
                o,
                function (e) {
                  return n[e];
                }.bind(null, o)
              );
          return t;
        }),
        (r.n = function (n) {
          var e =
            n && n.__esModule
              ? function () {
                  return n.default;
                }
              : function () {
                  return n;
                };
          return r.d(e, "a", e), e;
        }),
        (r.o = function (n, e) {
          return {}.hasOwnProperty.call(n, e);
        }),
        (r.p = ""),
        r((r.s = 2))
      );
    })([
      function (n, e, r) {
        n.exports = r(1);
      },
      function (n, e, r) {
        var t;
        "undefined" != typeof self && self,
          (t = function () {
            return (function (n) {
              var e = {};
              function r(t) {
                if (e[t]) return e[t].exports;
                var o = (e[t] = { i: t, l: !1, exports: {} });
                return (
                  n[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
                );
              }
              return (
                (r.m = n),
                (r.c = e),
                (r.d = function (n, e, t) {
                  r.o(n, e) ||
                    Object.defineProperty(n, e, { enumerable: !0, get: t });
                }),
                (r.r = function (n) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(n, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(n, "__esModule", { value: !0 });
                }),
                (r.t = function (n, e) {
                  if ((1 & e && (n = r(n)), 8 & e)) return n;
                  if (4 & e && "object" == typeof n && n && n.__esModule)
                    return n;
                  var t = Object.create(null);
                  if (
                    (r.r(t),
                    Object.defineProperty(t, "default", {
                      enumerable: !0,
                      value: n,
                    }),
                    2 & e && "string" != typeof n)
                  )
                    for (var o in n)
                      r.d(
                        t,
                        o,
                        function (e) {
                          return n[e];
                        }.bind(null, o)
                      );
                  return t;
                }),
                (r.n = function (n) {
                  var e =
                    n && n.__esModule
                      ? function () {
                          return n.default;
                        }
                      : function () {
                          return n;
                        };
                  return r.d(e, "a", e), e;
                }),
                (r.o = function (n, e) {
                  return {}.hasOwnProperty.call(n, e);
                }),
                (r.p = ""),
                r((r.s = 0))
              );
            })([
              function (n, e, r) {
                "use strict";
                r.r(e);
                var t = {
                  ELEMENT: "element",
                  TEXT: "text",
                  COMPONENT: "component",
                  FRAGMENT: "fragment",
                };
                function o(n, e) {
                  for (var r = [], t = 0; t < n.length; t++) {
                    var o = n[t].render(e);
                    if (o)
                      if (Array.isArray(o))
                        for (var i = 0; i < o.length; i++) {
                          var a = o[i];
                          a && r.push(a);
                        }
                      else r.push(o);
                  }
                  return r;
                }
                var i = (function () {
                    function n(n, e, r) {
                      (this.type = t.ELEMENT),
                        (this.name = void 0),
                        (this.props = void 0),
                        (this.children = void 0),
                        (this.onRender = void 0),
                        (this.name = n),
                        (this.props = e),
                        (this.children = r);
                      var o = e.onRender;
                      "function" == typeof o &&
                        ((this.onRender = o), delete e.onRender);
                    }
                    var e = n.prototype;
                    return (
                      (e.render = function (n) {
                        var e = n(this);
                        return this.onRender && this.onRender(e), e;
                      }),
                      (e.renderChildren = function (n) {
                        return o(this.children, n);
                      }),
                      n
                    );
                  })(),
                  a = (function () {
                    function n(n) {
                      (this.type = t.FRAGMENT),
                        (this.children = void 0),
                        (this.children = n);
                    }
                    return (
                      (n.prototype.render = function (n) {
                        return o(this.children, n);
                      }),
                      n
                    );
                  })(),
                  u = (function () {
                    function n(n) {
                      (this.type = t.TEXT), (this.text = void 0), (this.text = n);
                    }
                    return (
                      (n.prototype.render = function (n) {
                        return n(this);
                      }),
                      n
                    );
                  })(),
                  s = (function () {
                    function n(n, e, r) {
                      (this.type = t.COMPONENT),
                        (this.component = void 0),
                        (this.props = void 0),
                        (this.children = void 0),
                        (this.component = n),
                        (this.props = e),
                        (this.children = r);
                    }
                    var e = n.prototype;
                    return (
                      (e.renderComponent = function (n) {
                        var e = (function (n) {
                          var e = c(Array.isArray(n) ? n : [n]);
                          return 1 === e.length
                            ? e[0]
                            : e.length > 1
                            ? new a(e)
                            : void 0;
                        })(this.component(this.props, this.children));
                        if (e) return e.render(n);
                      }),
                      (e.render = function (n) {
                        return n(this);
                      }),
                      (e.renderChildren = function (n) {
                        return o(this.children, n);
                      }),
                      n
                    );
                  })();
                function c(n) {
                  for (var e = [], r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (o)
                      if ("string" == typeof o) e.push(new u(o));
                      else if (Array.isArray(o))
                        for (var i = 0, a = c(o); i < a.length; i++) e.push(a[i]);
                      else {
                        if (
                          !o ||
                          (o.type !== t.ELEMENT &&
                            o.type !== t.TEXT &&
                            o.type !== t.COMPONENT)
                        )
                          throw new TypeError(
                            "Unrecognized node type: " + typeof o
                          );
                        e.push(o);
                      }
                  }
                  return e;
                }
                var l,
                  d = function (n, e) {
                    for (
                      var r = arguments.length,
                        t = new Array(r > 2 ? r - 2 : 0),
                        o = 2;
                      o < r;
                      o++
                    )
                      t[o - 2] = arguments[o];
                    if (((e = e || {}), (t = c(t)), "string" == typeof n))
                      return new i(n, e, t);
                    if ("function" == typeof n) return new s(n, e, t);
                    throw new TypeError(
                      "Expected jsx element to be a string or a function"
                    );
                  },
                  f = function (n, e) {
                    if (n && Object.keys(n).length)
                      throw new Error("Do not pass props to Fragment");
                    return e;
                  },
                  p =
                    (((l = {}).iframe = function (n, e) {
                      var r = e.children[0];
                      if (
                        1 !== e.children.length ||
                        !r ||
                        r.type !== t.ELEMENT ||
                        "html" !== r.name
                      )
                        throw new Error(
                          "Expected only single html element node as child of iframe element"
                        );
                      n.addEventListener("load", function () {
                        var e = n.contentWindow;
                        if (!e)
                          throw new Error("Expected frame to have contentWindow");
                        for (
                          var t = e.document, o = t.documentElement;
                          o.children && o.children.length;
  
                        )
                          o.removeChild(o.children[0]);
                        for (var i = r.render(h({ doc: t })); i.children.length; )
                          o.appendChild(i.children[0]);
                      });
                    }),
                    (l.script = function (n, e) {
                      var r = e.children[0];
                      if (1 !== e.children.length || !r || r.type !== t.TEXT)
                        throw new Error(
                          "Expected only single text node as child of script element"
                        );
                      n.text = r.text;
                    }),
                    (l.default = function (n, e, r) {
                      for (var t = 0, o = e.renderChildren(r); t < o.length; t++)
                        n.appendChild(o[t]);
                    }),
                    l);
                function h(n) {
                  void 0 === n && (n = {});
                  var e = n.doc,
                    r = void 0 === e ? document : e;
                  return function n(e) {
                    if (e.type === t.COMPONENT) return e.renderComponent(n);
                    if (e.type === t.TEXT)
                      return (function (n, e) {
                        return n.createTextNode(e.text);
                      })(r, e);
                    if (e.type === t.ELEMENT) {
                      var o = (function (n, e) {
                        return e.props.el ? e.props.el : n.createElement(e.name);
                      })(r, e);
                      return (
                        (function (n, e) {
                          for (
                            var r = e.props, t = 0, o = Object.keys(r);
                            t < o.length;
                            t++
                          ) {
                            var i = o[t],
                              a = r[i];
                            null != a &&
                              "el" !== i &&
                              "innerHTML" !== i &&
                              (i.match(/^on[A-Z][a-z]/) && "function" == typeof a
                                ? n.addEventListener(i.slice(2).toLowerCase(), a)
                                : "string" == typeof a || "number" == typeof a
                                ? n.setAttribute(i, a.toString())
                                : "boolean" == typeof a &&
                                  !0 === a &&
                                  n.setAttribute(i, ""));
                          }
                          "iframe" !== n.tagName.toLowerCase() ||
                            r.id ||
                            n.setAttribute(
                              "id",
                              "jsx-iframe-" +
                                "xxxxxxxxxx".replace(/./g, function () {
                                  return "0123456789abcdef".charAt(
                                    Math.floor(
                                      Math.random() * "0123456789abcdef".length
                                    )
                                  );
                                })
                            );
                        })(o, e),
                        (function (n, e, r, t) {
                          if (e.props.hasOwnProperty("innerHTML")) {
                            if (e.children.length)
                              throw new Error(
                                "Expected no children to be passed when innerHTML prop is set"
                              );
                            var o = e.props.innerHTML;
                            if ("string" != typeof o)
                              throw new TypeError(
                                "innerHTML prop must be string"
                              );
                            "script" === e.name
                              ? (n.text = o)
                              : ((n.innerHTML = o),
                                (function (n, e) {
                                  void 0 === e && (e = window.document);
                                  for (
                                    var r = 0, t = n.querySelectorAll("script");
                                    r < t.length;
                                    r++
                                  ) {
                                    var o = t[r],
                                      i = o.parentNode;
                                    if (i) {
                                      var a = e.createElement("script");
                                      (a.text = o.textContent),
                                        i.replaceChild(a, o);
                                    }
                                  }
                                })(n, r));
                          } else (p[e.name] || p.default)(n, e, t);
                        })(o, e, r, n),
                        o
                      );
                    }
                    throw new TypeError("Unhandleable node");
                  };
                }
                function m() {
                  return (m =
                    Object.assign ||
                    function (n) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var t in r)
                          ({}.hasOwnProperty.call(r, t) && (n[t] = r[t]));
                      }
                      return n;
                    }).apply(this, arguments);
                }
                function y(n, e) {
                  if (null == n) return {};
                  var r,
                    t,
                    o = {},
                    i = Object.keys(n);
                  for (t = 0; t < i.length; t++)
                    e.indexOf((r = i[t])) >= 0 || (o[r] = n[r]);
                  return o;
                }
                function g(n) {
                  var e = (void 0 === n ? {} : n).React;
                  if (!e)
                    throw new Error("Must pass React library to react renderer");
                  return function n(r) {
                    if (r.type === t.COMPONENT)
                      return e.createElement.apply(
                        e,
                        [
                          function () {
                            return r.renderComponent(n) || null;
                          },
                          r.props,
                        ].concat(r.renderChildren(n))
                      );
                    if (r.type === t.ELEMENT)
                      return e.createElement.apply(
                        e,
                        [
                          r.name,
                          ((o = r.props),
                          (i = o.innerHTML),
                          m(
                            {
                              dangerouslySetInnerHTML: i ? { __html: i } : null,
                              className: o.class,
                            },
                            y(o, ["innerHTML", "class"])
                          )),
                        ].concat(r.renderChildren(n))
                      );
                    var o, i;
                    if (r.type === t.TEXT) return r.text;
                    throw new TypeError("Unhandleable node");
                  };
                }
                var w = { br: !0 };
                function v(n) {
                  return n
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#39;")
                    .replace(/\//g, "&#x2F;");
                }
                function C() {
                  return function n(e) {
                    if (e.type === t.COMPONENT)
                      return [].concat(e.renderComponent(n)).join("");
                    if (e.type === t.ELEMENT) {
                      var r =
                        ((i = e.props),
                        (a = Object.keys(i).filter(function (n) {
                          var e = i[n];
                          return (
                            "innerHTML" !== n &&
                            !!e &&
                            ("string" == typeof e ||
                              "number" == typeof e ||
                              !0 === e)
                          );
                        })).length
                          ? " " +
                            a
                              .map(function (n) {
                                var e = i[n];
                                if (!0 === e) return "" + v(n);
                                if ("string" != typeof e && "number" != typeof e)
                                  throw new TypeError(
                                    "Unexpected prop type: " + typeof e
                                  );
                                return v(n) + '="' + v(e.toString()) + '"';
                              })
                              .join(" ")
                          : "");
                      if (w[e.name]) return "<" + e.name + r + " />";
                      var o =
                        "string" == typeof e.props.innerHTML
                          ? e.props.innerHTML
                          : e.renderChildren(n).join("");
                      return "<" + e.name + r + ">" + o + "</" + e.name + ">";
                    }
                    var i, a;
                    if (e.type === t.TEXT) return v(e.text);
                    throw new TypeError("Unhandleable node: " + e.type);
                  };
                }
                function b(n) {
                  var e = (void 0 === n ? {} : n).Preact;
                  if (!e)
                    throw new Error("Must pass Preact library to react renderer");
                  return function n(r) {
                    if (r.type === t.COMPONENT)
                      return e.h.apply(
                        e,
                        [
                          function () {
                            return r.renderComponent(n) || null;
                          },
                          r.props,
                        ].concat(r.renderChildren(n))
                      );
                    if (r.type === t.ELEMENT)
                      return e.h.apply(
                        e,
                        [
                          r.name,
                          ((o = r.props),
                          (i = o.innerHTML),
                          m(
                            { dangerouslySetInnerHTML: i ? { __html: i } : null },
                            y(o, ["innerHTML"])
                          )),
                        ].concat(r.renderChildren(n))
                      );
                    var o, i;
                    if (r.type === t.TEXT) return r.text;
                    throw new TypeError("Unhandleable node");
                  };
                }
                r.d(e, "ElementNode", function () {
                  return i;
                }),
                  r.d(e, "FragmentNode", function () {
                    return a;
                  }),
                  r.d(e, "TextNode", function () {
                    return u;
                  }),
                  r.d(e, "ComponentNode", function () {
                    return s;
                  }),
                  r.d(e, "node", function () {
                    return d;
                  }),
                  r.d(e, "Fragment", function () {
                    return f;
                  }),
                  r.d(e, "dom", function () {
                    return h;
                  }),
                  r.d(e, "react", function () {
                    return g;
                  }),
                  r.d(e, "html", function () {
                    return C;
                  }),
                  r.d(e, "preact", function () {
                    return b;
                  }),
                  r.d(e, "NODE_TYPE", function () {
                    return t;
                  });
              },
            ]);
          }),
          (n.exports = t());
      },
      function (n, e, r) {
        "use strict";
        r.r(e);
        var t = {};
        r.r(t),
          r.d(t, "FUNDING", function () {
            return Ae;
          }),
          r.d(t, "setup", function () {
            return br;
          });
        var o = {};
        r.r(o),
          r.d(o, "Promise", function () {
            return E;
          }),
          r.d(o, "TYPES", function () {
            return ht;
          }),
          r.d(o, "ProxyWindow", function () {
            return Hr;
          }),
          r.d(o, "setup", function () {
            return ft;
          }),
          r.d(o, "destroy", function () {
            return pt;
          }),
          r.d(o, "serializeMessage", function () {
            return st;
          }),
          r.d(o, "deserializeMessage", function () {
            return ct;
          }),
          r.d(o, "createProxyWindow", function () {
            return lt;
          }),
          r.d(o, "toProxyWindow", function () {
            return dt;
          }),
          r.d(o, "on", function () {
            return it;
          }),
          r.d(o, "once", function () {
            return at;
          }),
          r.d(o, "send", function () {
            return ut;
          }),
          r.d(o, "markWindowKnown", function () {
            return Sr;
          }),
          r.d(o, "cleanUpWindow", function () {
            return mt;
          }),
          r.d(o, "bridge", function () {});
        var i = {};
        r.r(i),
          r.d(i, "Buttons", function () {
            return Yi;
          }),
          r.d(i, "Checkout", function () {
            return Ki;
          }),
          r.d(i, "CardFields", function () {
            return Xi;
          }),
          r.d(i, "Menu", function () {
            return Ji;
          }),
          r.d(i, "Modal", function () {
            return $i;
          }),
          r.d(i, "ButtonsTemplate", function () {
            return Qi;
          }),
          r.d(i, "PopupOpenError", function () {
            return na;
          }),
          r.d(i, "allowIframe", function () {
            return ea;
          }),
          r.d(i, "forceIframe", function () {
            return ra;
          }),
          r.d(i, "destroyAll", function () {
            return ta;
          }),
          r.d(i, "setup", function () {
            return oa;
          }),
          r.d(i, "destroy", function () {
            return ia;
          });
        var a = {};
        r.r(a),
          r.d(a, "ThreeDomainSecure", function () {
            return ua;
          }),
          r.d(a, "postRobot", function () {
            return sa;
          });
        var u = {};
        function s(n, e) {
          if (null == n) return {};
          var r,
            t,
            o = {},
            i = Object.keys(n);
          for (t = 0; t < i.length; t++)
            e.indexOf((r = i[t])) >= 0 || (o[r] = n[r]);
          return o;
        }
        function c() {
          return window.navigator.mockUserAgent || window.navigator.userAgent;
        }
        function l(n) {
          return (
            void 0 === n && (n = c()),
            !!n.match(
              /Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i
            )
          );
        }
        function d(n) {
          return void 0 === n && (n = c()), n.indexOf("Opera Mini") > -1;
        }
        function f(n) {
          return void 0 === n && (n = c()), /iPhone|iPod|iPad/.test(n);
        }
        function p(n) {
          return (
            void 0 === n && (n = c()),
            !(
              (function (n) {
                return (
                  void 0 === n && (n = c()),
                  !!f(n) &&
                    (!!(function (n) {
                      return void 0 === n && (n = c()), /\bGSA\b/.test(n);
                    })(n) ||
                      /.+AppleWebKit(?!.*Safari)/.test(n))
                );
              })(n) ||
              (function (n) {
                return (
                  void 0 === n && (n = c()),
                  !!(function (n) {
                    return void 0 === n && (n = c()), /Android/.test(n);
                  })(n) &&
                    /Version\/[\d.]+/.test(n) &&
                    !d(n)
                );
              })(n) ||
              d(n) ||
              (function (n) {
                return void 0 === n && (n = c()), /FxiOS/i.test(n);
              })(n) ||
              (function (n) {
                return void 0 === n && (n = c()), /EdgiOS/i.test(n);
              })(n) ||
              (function (n) {
                return (
                  void 0 === n && (n = c()),
                  -1 !== n.indexOf("FBAN") || -1 !== n.indexOf("FBAV")
                );
              })(n) ||
              (function (n) {
                return void 0 === n && (n = c()), /QQBrowser/.test(n);
              })(n) ||
              ("undefined" != typeof process &&
                process.versions &&
                process.versions.electron) ||
              ((e = c()), /Macintosh.*AppleWebKit(?!.*Safari)/i.test(e)) ||
              !0 === window.navigator.standalone ||
              window.matchMedia("(display-mode: standalone)").matches
            )
          );
          var e;
        }
        function h() {
          return (h =
            Object.assign ||
            function (n) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var t in r) ({}.hasOwnProperty.call(r, t) && (n[t] = r[t]));
              }
              return n;
            }).apply(this, arguments);
        }
        function m(n) {
          try {
            if (!n) return !1;
            if ("undefined" != typeof Promise && n instanceof Promise) return !0;
            if (
              "undefined" != typeof window &&
              "function" == typeof window.Window &&
              n instanceof window.Window
            )
              return !1;
            if (
              "undefined" != typeof window &&
              "function" == typeof window.constructor &&
              n instanceof window.constructor
            )
              return !1;
            var e = {}.toString;
            if (e) {
              var r = e.call(n);
              if (
                "[object Window]" === r ||
                "[object global]" === r ||
                "[object DOMWindow]" === r
              )
                return !1;
            }
            if ("function" == typeof n.then) return !0;
          } catch (n) {
            return !1;
          }
          return !1;
        }
        r.r(u),
          r.d(u, "setup", function () {
            return ca;
          });
        var y,
          g = [],
          w = [],
          v = 0;
        function C() {
          if (!v && y) {
            var n = y;
            (y = null), n.resolve();
          }
        }
        function b() {
          v += 1;
        }
        function L() {
          (v -= 1), C();
        }
        var E = (function () {
          function n(n) {
            var e = this;
            if (
              ((this.resolved = void 0),
              (this.rejected = void 0),
              (this.errorHandled = void 0),
              (this.value = void 0),
              (this.error = void 0),
              (this.handlers = void 0),
              (this.dispatching = void 0),
              (this.stack = void 0),
              (this.resolved = !1),
              (this.rejected = !1),
              (this.errorHandled = !1),
              (this.handlers = []),
              n)
            ) {
              var r,
                t,
                o = !1,
                i = !1,
                a = !1;
              b();
              try {
                n(
                  function (n) {
                    a ? e.resolve(n) : ((o = !0), (r = n));
                  },
                  function (n) {
                    a ? e.reject(n) : ((i = !0), (t = n));
                  }
                );
              } catch (n) {
                return L(), void this.reject(n);
              }
              L(), (a = !0), o ? this.resolve(r) : i && this.reject(t);
            }
          }
          var e = n.prototype;
          return (
            (e.resolve = function (n) {
              if (this.resolved || this.rejected) return this;
              if (m(n))
                throw new Error("Can not resolve promise with another promise");
              return (
                (this.resolved = !0), (this.value = n), this.dispatch(), this
              );
            }),
            (e.reject = function (n) {
              var e = this;
              if (this.resolved || this.rejected) return this;
              if (m(n))
                throw new Error("Can not reject promise with another promise");
              if (!n) {
                var r =
                  n && "function" == typeof n.toString
                    ? n.toString()
                    : {}.toString.call(n);
                n = new Error(
                  "Expected reject to be called with Error, got " + r
                );
              }
              return (
                (this.rejected = !0),
                (this.error = n),
                this.errorHandled ||
                  setTimeout(function () {
                    e.errorHandled ||
                      (function (n, e) {
                        if (-1 === g.indexOf(n)) {
                          g.push(n),
                            setTimeout(function () {
                              throw n;
                            }, 1);
                          for (var r = 0; r < w.length; r++) w[r](n, e);
                        }
                      })(n, e);
                  }, 1),
                this.dispatch(),
                this
              );
            }),
            (e.asyncReject = function (n) {
              return (this.errorHandled = !0), this.reject(n), this;
            }),
            (e.dispatch = function () {
              var e = this.resolved,
                r = this.rejected,
                t = this.handlers;
              if (!this.dispatching && (e || r)) {
                (this.dispatching = !0), b();
                for (
                  var o = function (n, e) {
                      return n.then(
                        function (n) {
                          e.resolve(n);
                        },
                        function (n) {
                          e.reject(n);
                        }
                      );
                    },
                    i = 0;
                  i < t.length;
                  i++
                ) {
                  var a = t[i],
                    u = a.onSuccess,
                    s = a.onError,
                    c = a.promise,
                    l = void 0;
                  if (e)
                    try {
                      l = u ? u(this.value) : this.value;
                    } catch (n) {
                      c.reject(n);
                      continue;
                    }
                  else if (r) {
                    if (!s) {
                      c.reject(this.error);
                      continue;
                    }
                    try {
                      l = s(this.error);
                    } catch (n) {
                      c.reject(n);
                      continue;
                    }
                  }
                  l instanceof n && (l.resolved || l.rejected)
                    ? (l.resolved ? c.resolve(l.value) : c.reject(l.error),
                      (l.errorHandled = !0))
                    : m(l)
                    ? l instanceof n && (l.resolved || l.rejected)
                      ? l.resolved
                        ? c.resolve(l.value)
                        : c.reject(l.error)
                      : o(l, c)
                    : c.resolve(l);
                }
                (t.length = 0), (this.dispatching = !1), L();
              }
            }),
            (e.then = function (e, r) {
              if (e && "function" != typeof e && !e.call)
                throw new Error(
                  "Promise.then expected a function for success handler"
                );
              if (r && "function" != typeof r && !r.call)
                throw new Error(
                  "Promise.then expected a function for error handler"
                );
              var t = new n();
              return (
                this.handlers.push({ promise: t, onSuccess: e, onError: r }),
                (this.errorHandled = !0),
                this.dispatch(),
                t
              );
            }),
            (e.catch = function (n) {
              return this.then(void 0, n);
            }),
            (e.finally = function (e) {
              if (e && "function" != typeof e && !e.call)
                throw new Error("Promise.finally expected a function");
              return this.then(
                function (r) {
                  return n.try(e).then(function () {
                    return r;
                  });
                },
                function (r) {
                  return n.try(e).then(function () {
                    throw r;
                  });
                }
              );
            }),
            (e.timeout = function (n, e) {
              var r = this;
              if (this.resolved || this.rejected) return this;
              var t = setTimeout(function () {
                r.resolved ||
                  r.rejected ||
                  r.reject(e || new Error("Promise timed out after " + n + "ms"));
              }, n);
              return this.then(function (n) {
                return clearTimeout(t), n;
              });
            }),
            (e.toPromise = function () {
              if ("undefined" == typeof Promise)
                throw new TypeError("Could not find Promise");
              return Promise.resolve(this);
            }),
            (n.resolve = function (e) {
              return e instanceof n
                ? e
                : m(e)
                ? new n(function (n, r) {
                    return e.then(n, r);
                  })
                : new n().resolve(e);
            }),
            (n.reject = function (e) {
              return new n().reject(e);
            }),
            (n.asyncReject = function (e) {
              return new n().asyncReject(e);
            }),
            (n.all = function (e) {
              var r = new n(),
                t = e.length,
                o = [];
              if (!t) return r.resolve(o), r;
              for (
                var i = function (n, e, i) {
                    return e.then(
                      function (e) {
                        (o[n] = e), 0 == (t -= 1) && r.resolve(o);
                      },
                      function (n) {
                        i.reject(n);
                      }
                    );
                  },
                  a = 0;
                a < e.length;
                a++
              ) {
                var u = e[a];
                if (u instanceof n) {
                  if (u.resolved) {
                    (o[a] = u.value), (t -= 1);
                    continue;
                  }
                } else if (!m(u)) {
                  (o[a] = u), (t -= 1);
                  continue;
                }
                i(a, n.resolve(u), r);
              }
              return 0 === t && r.resolve(o), r;
            }),
            (n.hash = function (e) {
              var r = {};
              return n
                .all(
                  Object.keys(e).map(function (t) {
                    return n.resolve(e[t]).then(function (n) {
                      r[t] = n;
                    });
                  })
                )
                .then(function () {
                  return r;
                });
            }),
            (n.map = function (e, r) {
              return n.all(e.map(r));
            }),
            (n.onPossiblyUnhandledException = function (n) {
              return (function (n) {
                return (
                  w.push(n),
                  {
                    cancel: function () {
                      w.splice(w.indexOf(n), 1);
                    },
                  }
                );
              })(n);
            }),
            (n.try = function (e, r, t) {
              if (e && "function" != typeof e && !e.call)
                throw new Error("Promise.try expected a function");
              var o;
              b();
              try {
                o = e.apply(r, t || []);
              } catch (e) {
                return L(), n.reject(e);
              }
              return L(), n.resolve(o);
            }),
            (n.delay = function (e) {
              return new n(function (n) {
                setTimeout(n, e);
              });
            }),
            (n.isPromise = function (e) {
              return !!(e && e instanceof n) || m(e);
            }),
            (n.flush = function () {
              return (e = y = y || new n()), C(), e;
              var e;
            }),
            n
          );
        })();
        function x(n) {
          return "[object RegExp]" === {}.toString.call(n);
        }
        var O = { IFRAME: "iframe", POPUP: "popup" },
          T = "Call was rejected by callee.\r\n";
        function _(n) {
          return void 0 === n && (n = window), "about:" === n.location.protocol;
        }
        function P(n) {
          if ((void 0 === n && (n = window), n))
            try {
              if (n.parent && n.parent !== n) return n.parent;
            } catch (n) {}
        }
        function k(n) {
          if ((void 0 === n && (n = window), n && !P(n)))
            try {
              return n.opener;
            } catch (n) {}
        }
        function A(n) {
          try {
            return !0;
          } catch (n) {}
          return !1;
        }
        function M(n) {
          void 0 === n && (n = window);
          var e = n.location;
          if (!e) throw new Error("Can not read window location");
          var r = e.protocol;
          if (!r) throw new Error("Can not read window protocol");
          if ("file:" === r) return "file://";
          if ("about:" === r) {
            var t = P(n);
            return t && A() ? M(t) : "about://";
          }
          var o = e.host;
          if (!o) throw new Error("Can not read window host");
          return r + "//" + o;
        }
        function N(n) {
          void 0 === n && (n = window);
          var e = M(n);
          return e && n.mockDomain && 0 === n.mockDomain.indexOf("mock:")
            ? n.mockDomain
            : e;
        }
        function S(n) {
          if (
            !(function (n) {
              try {
                if (n === window) return !0;
              } catch (n) {}
              try {
                var e = Object.getOwnPropertyDescriptor(n, "location");
                if (e && !1 === e.enumerable) return !1;
              } catch (n) {}
              try {
                if (_(n) && A()) return !0;
              } catch (n) {}
              try {
                if (M(n) === M(window)) return !0;
              } catch (n) {}
              return !1;
            })(n)
          )
            return !1;
          try {
            if (n === window) return !0;
            if (_(n) && A()) return !0;
            if (N(window) === N(n)) return !0;
          } catch (n) {}
          return !1;
        }
        function z(n) {
          if (!S(n)) throw new Error("Expected window to be same domain");
          return n;
        }
        function F(n, e) {
          if (!n || !e) return !1;
          var r = P(e);
          return r
            ? r === n
            : -1 !==
                (function (n) {
                  var e = [];
                  try {
                    for (; n.parent !== n; ) e.push(n.parent), (n = n.parent);
                  } catch (n) {}
                  return e;
                })(e).indexOf(n);
        }
        function R(n) {
          var e,
            r,
            t = [];
          try {
            e = n.frames;
          } catch (r) {
            e = n;
          }
          try {
            r = e.length;
          } catch (n) {}
          if (0 === r) return t;
          if (r) {
            for (var o = 0; o < r; o++) {
              var i = void 0;
              try {
                i = e[o];
              } catch (n) {
                continue;
              }
              t.push(i);
            }
            return t;
          }
          for (var a = 0; a < 100; a++) {
            var u = void 0;
            try {
              u = e[a];
            } catch (n) {
              return t;
            }
            if (!u) return t;
            t.push(u);
          }
          return t;
        }
        function j(n) {
          for (var e = [], r = 0, t = R(n); r < t.length; r++) {
            var o = t[r];
            e.push(o);
            for (var i = 0, a = j(o); i < a.length; i++) e.push(a[i]);
          }
          return e;
        }
        function I(n) {
          void 0 === n && (n = window);
          try {
            if (n.top) return n.top;
          } catch (n) {}
          if (P(n) === n) return n;
          try {
            if (F(window, n) && window.top) return window.top;
          } catch (n) {}
          try {
            if (F(n, window) && window.top) return window.top;
          } catch (n) {}
          for (var e = 0, r = j(n); e < r.length; e++) {
            var t = r[e];
            try {
              if (t.top) return t.top;
            } catch (n) {}
            if (P(t) === t) return t;
          }
        }
        function D(n) {
          var e = I(n);
          if (!e) throw new Error("Can not determine top window");
          var r = [].concat(j(e), [e]);
          return -1 === r.indexOf(n) && (r = [].concat(r, [n], j(n))), r;
        }
        var B = [],
          W = [];
        function U(n, e) {
          void 0 === e && (e = !0);
          try {
            if (n === window) return !1;
          } catch (n) {
            return !0;
          }
          try {
            if (!n) return !0;
          } catch (n) {
            return !0;
          }
          try {
            if (n.closed) return !0;
          } catch (n) {
            return !n || n.message !== T;
          }
          if (e && S(n))
            try {
              if (n.mockclosed) return !0;
            } catch (n) {}
          try {
            if (!n.parent || !n.top) return !0;
          } catch (n) {}
          var r = (function (n, e) {
            for (var r = 0; r < n.length; r++)
              try {
                if (n[r] === e) return r;
              } catch (n) {}
            return -1;
          })(B, n);
          if (-1 !== r) {
            var t = W[r];
            if (
              t &&
              (function (n) {
                if (!n.contentWindow) return !0;
                if (!n.parentNode) return !0;
                var e = n.ownerDocument;
                if (e && e.documentElement && !e.documentElement.contains(n)) {
                  for (var r = n; r.parentNode && r.parentNode !== r; )
                    r = r.parentNode;
                  if (!r.host || !e.documentElement.contains(r.host)) return !0;
                }
                return !1;
              })(t)
            )
              return !0;
          }
          return !1;
        }
        function q(n) {
          return (
            void 0 === n && (n = window), k((n = n || window)) || P(n) || void 0
          );
        }
        function H(n, e) {
          for (var r = 0; r < n.length; r++)
            for (var t = n[r], o = 0; o < e.length; o++)
              if (t === e[o]) return !0;
          return !1;
        }
        function G(n) {
          void 0 === n && (n = window);
          for (var e = 0, r = n; r; ) (r = P(r)) && (e += 1);
          return e;
        }
        function Z(n, e) {
          var r = I(n) || n,
            t = I(e) || e;
          try {
            if (r && t) return r === t;
          } catch (n) {}
          var o = D(n),
            i = D(e);
          if (H(o, i)) return !0;
          var a = k(r),
            u = k(t);
          return (a && H(D(a), i)) || (u && H(D(u), o)), !1;
        }
        function V(n, e) {
          if ("string" == typeof n) {
            if ("string" == typeof e) return "*" === n || e === n;
            if (x(e)) return !1;
            if (Array.isArray(e)) return !1;
          }
          return x(n)
            ? x(e)
              ? n.toString() === e.toString()
              : !Array.isArray(e) && Boolean(e.match(n))
            : !!Array.isArray(n) &&
                (Array.isArray(e)
                  ? JSON.stringify(n) === JSON.stringify(e)
                  : !x(e) &&
                    n.some(function (n) {
                      return V(n, e);
                    }));
        }
        function Y(n) {
          return n.match(/^(https?|mock|file):\/\//)
            ? n.split("/").slice(0, 3).join("/")
            : N();
        }
        function K(n, e, r, t) {
          var o;
          return (
            void 0 === r && (r = 1e3),
            void 0 === t && (t = 1 / 0),
            (function i() {
              if (U(n)) return o && clearTimeout(o), e();
              t <= 0 ? clearTimeout(o) : ((t -= r), (o = setTimeout(i, r)));
            })(),
            {
              cancel: function () {
                o && clearTimeout(o);
              },
            }
          );
        }
        function X(n) {
          try {
            if (n === window) return !0;
          } catch (n) {
            if (n && n.message === T) return !0;
          }
          try {
            if ("[object Window]" === {}.toString.call(n)) return !0;
          } catch (n) {
            if (n && n.message === T) return !0;
          }
          try {
            if (window.Window && n instanceof window.Window) return !0;
          } catch (n) {
            if (n && n.message === T) return !0;
          }
          try {
            if (n && n.self === n) return !0;
          } catch (n) {
            if (n && n.message === T) return !0;
          }
          try {
            if (n && n.parent === n) return !0;
          } catch (n) {
            if (n && n.message === T) return !0;
          }
          try {
            if (n && n.top === n) return !0;
          } catch (n) {
            if (n && n.message === T) return !0;
          }
          try {
            if (
              n &&
              "__unlikely_value__" === n.__cross_domain_utils_window_check__
            )
              return !1;
          } catch (n) {
            return !0;
          }
          return !1;
        }
        function J(n) {
          try {
            n.close();
          } catch (n) {}
        }
        function $(n, e) {
          for (var r = 0; r < n.length; r++)
            try {
              if (n[r] === e) return r;
            } catch (n) {}
          return -1;
        }
        var Q,
          nn = (function () {
            function n() {
              if (
                ((this.name = void 0),
                (this.weakmap = void 0),
                (this.keys = void 0),
                (this.values = void 0),
                (this.name = "__weakmap_" + ((1e9 * Math.random()) >>> 0) + "__"),
                (function () {
                  if ("undefined" == typeof WeakMap) return !1;
                  if (void 0 === Object.freeze) return !1;
                  try {
                    var n = new WeakMap(),
                      e = {};
                    return (
                      Object.freeze(e),
                      n.set(e, "__testvalue__"),
                      "__testvalue__" === n.get(e)
                    );
                  } catch (n) {
                    return !1;
                  }
                })())
              )
                try {
                  this.weakmap = new WeakMap();
                } catch (n) {}
              (this.keys = []), (this.values = []);
            }
            var e = n.prototype;
            return (
              (e._cleanupClosedWindows = function () {
                for (
                  var n = this.weakmap, e = this.keys, r = 0;
                  r < e.length;
                  r++
                ) {
                  var t = e[r];
                  if (X(t) && U(t)) {
                    if (n)
                      try {
                        n.delete(t);
                      } catch (n) {}
                    e.splice(r, 1), this.values.splice(r, 1), (r -= 1);
                  }
                }
              }),
              (e.isSafeToReadWrite = function (n) {
                return !X(n);
              }),
              (e.set = function (n, e) {
                if (!n) throw new Error("WeakMap expected key");
                var r = this.weakmap;
                if (r)
                  try {
                    r.set(n, e);
                  } catch (n) {
                    delete this.weakmap;
                  }
                if (this.isSafeToReadWrite(n))
                  try {
                    var t = this.name,
                      o = n[t];
                    return void (o && o[0] === n
                      ? (o[1] = e)
                      : Object.defineProperty(n, t, {
                          value: [n, e],
                          writable: !0,
                        }));
                  } catch (n) {}
                this._cleanupClosedWindows();
                var i = this.keys,
                  a = this.values,
                  u = $(i, n);
                -1 === u ? (i.push(n), a.push(e)) : (a[u] = e);
              }),
              (e.get = function (n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e)
                  try {
                    if (e.has(n)) return e.get(n);
                  } catch (n) {
                    delete this.weakmap;
                  }
                if (this.isSafeToReadWrite(n))
                  try {
                    var r = n[this.name];
                    return r && r[0] === n ? r[1] : void 0;
                  } catch (n) {}
                this._cleanupClosedWindows();
                var t = $(this.keys, n);
                if (-1 !== t) return this.values[t];
              }),
              (e.delete = function (n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e)
                  try {
                    e.delete(n);
                  } catch (n) {
                    delete this.weakmap;
                  }
                if (this.isSafeToReadWrite(n))
                  try {
                    var r = n[this.name];
                    r && r[0] === n && (r[0] = r[1] = void 0);
                  } catch (n) {}
                this._cleanupClosedWindows();
                var t = this.keys,
                  o = $(t, n);
                -1 !== o && (t.splice(o, 1), this.values.splice(o, 1));
              }),
              (e.has = function (n) {
                if (!n) throw new Error("WeakMap expected key");
                var e = this.weakmap;
                if (e)
                  try {
                    if (e.has(n)) return !0;
                  } catch (n) {
                    delete this.weakmap;
                  }
                if (this.isSafeToReadWrite(n))
                  try {
                    var r = n[this.name];
                    return !(!r || r[0] !== n);
                  } catch (n) {}
                return this._cleanupClosedWindows(), -1 !== $(this.keys, n);
              }),
              (e.getOrSet = function (n, e) {
                if (this.has(n)) return this.get(n);
                var r = e();
                return this.set(n, r), r;
              }),
              n
            );
          })();
        function en(n) {
          return n.name || n.__name__ || n.displayName || "anonymous";
        }
        function rn(n, e) {
          try {
            delete n.name, (n.name = e);
          } catch (n) {}
          return (n.__name__ = n.displayName = e), n;
        }
        function tn(n) {
          if ("function" == typeof btoa)
            return btoa(
              encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, function (n, e) {
                return String.fromCharCode(parseInt(e, 16));
              })
            );
          if ("undefined" != typeof Buffer)
            return Buffer.from(n, "utf8").toString("base64");
          throw new Error("Can not find window.btoa or Buffer");
        }
        function on(n) {
          if ("function" == typeof atob)
            return decodeURIComponent(
              [].map
                .call(atob(n), function (n) {
                  return "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
            );
          if ("undefined" != typeof Buffer)
            return Buffer.from(n, "base64").toString("utf8");
          throw new Error("Can not find window.atob or Buffer");
        }
        function an() {
          var n = "0123456789abcdef";
          return (
            "xxxxxxxxxx".replace(/./g, function () {
              return n.charAt(Math.floor(Math.random() * n.length));
            }) +
            "_" +
            tn(new Date().toISOString().slice(11, 19).replace("T", "."))
              .replace(/[^a-zA-Z0-9]/g, "")
              .toLowerCase()
          );
        }
        function un() {
          if ("undefined" != typeof window) return window;
          if ("undefined" != typeof window) return window;
          if ("undefined" != typeof global) return global;
          throw new Error("No global found");
        }
        function sn(n) {
          try {
            return JSON.stringify([].slice.call(n), function (n, e) {
              return "function" == typeof e
                ? "memoize[" +
                    (function (n) {
                      if (
                        ((Q = Q || new nn()),
                        null == n ||
                          ("object" != typeof n && "function" != typeof n))
                      )
                        throw new Error("Invalid object");
                      var e = Q.get(n);
                      return e || ((e = typeof n + ":" + an()), Q.set(n, e)), e;
                    })(e) +
                    "]"
                : e;
            });
          } catch (n) {
            throw new Error(
              "Arguments not serializable -- can not be used to memoize"
            );
          }
        }
        var cn,
          ln = [];
        function dn(n, e) {
          var r = this;
          void 0 === e && (e = {});
          var t = new nn(),
            o = function () {
              for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                o[i] = arguments[i];
              var a = t.getOrSet(e.thisNamespace ? this : n, function () {
                  return {};
                }),
                u = sn(o),
                s = e.time;
              if ((a[u] && s && Date.now() - a[u].time < s && delete a[u], a[u]))
                return a[u].value;
              var c = Date.now(),
                l = n.apply(this, arguments);
              return (a[u] = { time: c, value: l }), a[u].value;
            };
          return (
            (o.reset = function () {
              t.delete(e.thisNamespace ? r : n);
            }),
            ln.push(o),
            rn(o, (e.name || en(n)) + "::memoized")
          );
        }
        function fn(n) {
          var e = {};
          function r() {
            for (
              var r = arguments,
                t = this,
                o = arguments.length,
                i = new Array(o),
                a = 0;
              a < o;
              a++
            )
              i[a] = arguments[a];
            var u = sn(i);
            return (
              e.hasOwnProperty(u) ||
                (e[u] = E.try(function () {
                  return n.apply(t, r);
                }).finally(function () {
                  delete e[u];
                })),
              e[u]
            );
          }
          return (
            (r.reset = function () {
              e = {};
            }),
            rn(r, en(n) + "::promiseMemoized")
          );
        }
        function pn(n, e, r) {
          void 0 === r && (r = []);
          var t = (n.__inline_memoize_cache__ = n.__inline_memoize_cache__ || {}),
            o = sn(r);
          return t.hasOwnProperty(o) ? t[o] : (t[o] = e.apply(void 0, r));
        }
        function hn() {}
        function mn(n) {
          var e = !1;
          return rn(function () {
            if (!e) return (e = !0), n.apply(this, arguments);
          }, en(n) + "::once");
        }
        function yn(n, e) {
          if ((void 0 === e && (e = 1), e >= 3))
            return "stringifyError stack overflow";
          try {
            if (!n) return "<unknown error: " + {}.toString.call(n) + ">";
            if ("string" == typeof n) return n;
            if (n instanceof Error) {
              var r = n && n.stack,
                t = n && n.message;
              if (r && t) return -1 !== r.indexOf(t) ? r : t + "\n" + r;
              if (r) return r;
              if (t) return t;
            }
            return n && n.toString && "function" == typeof n.toString
              ? n.toString()
              : {}.toString.call(n);
          } catch (n) {
            return "Error while stringifying error: " + yn(n, e + 1);
          }
        }
        function gn(n) {
          var e = "<unknown error: " + {}.toString.call(n) + ">";
          return n
            ? n instanceof Error
              ? n.message || e
              : ("string" == typeof n.message && n.message) || e
            : e;
        }
        function wn(n) {
          return "string" == typeof n
            ? n
            : n && n.toString && "function" == typeof n.toString
            ? n.toString()
            : {}.toString.call(n);
        }
        function vn(n, e) {
          if (!e) return n;
          if (Object.assign) return Object.assign(n, e);
          for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
          return n;
        }
        function Cn(n) {
          var e = [];
          for (var r in n) n.hasOwnProperty(r) && e.push(n[r]);
          return e;
        }
        function bn(n, e) {
          return Math.round((n * e) / 100);
        }
        function Ln() {
          return Math.max.apply(Math, arguments);
        }
        function En(n) {
          return "data:image/svg+xml;base64," + tn(n);
        }
        function xn(n, e) {
          void 0 === e && (e = Boolean);
          var r = {};
          for (var t in n) n.hasOwnProperty(t) && e(n[t], t) && (r[t] = n[t]);
          return r;
        }
        function On(n) {
          return n;
        }
        function Tn(n, e) {
          var r;
          return (
            (function t() {
              r = setTimeout(function () {
                n(), t();
              }, e);
            })(),
            {
              cancel: function () {
                clearTimeout(r);
              },
            }
          );
        }
        function _n() {
          var n = {},
            e = {};
          return {
            on: function (n, r) {
              var t = (e[n] = e[n] || []);
              t.push(r);
              var o = !1;
              return {
                cancel: function () {
                  o || ((o = !0), t.splice(t.indexOf(r), 1));
                },
              };
            },
            once: function (n, e) {
              var r = this.on(n, function () {
                r.cancel(), e();
              });
              return r;
            },
            trigger: function (n) {
              for (
                var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                t[o - 1] = arguments[o];
              var i = e[n],
                a = [];
              if (i)
                for (
                  var u = function (n) {
                      var e = i[n];
                      a.push(
                        E.try(function () {
                          return e.apply(void 0, t);
                        })
                      );
                    },
                    s = 0;
                  s < i.length;
                  s++
                )
                  u(s);
              return E.all(a).then(hn);
            },
            triggerOnce: function (e) {
              if (n[e]) return E.resolve();
              n[e] = !0;
              for (
                var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1;
                o < r;
                o++
              )
                t[o - 1] = arguments[o];
              return this.trigger.apply(this, [e].concat(t));
            },
            reset: function () {
              e = {};
            },
          };
        }
        function Pn(n) {
          return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
        }
        function kn(n, e, r) {
          if (Array.isArray(n)) {
            if ("number" != typeof e)
              throw new TypeError("Array key must be number");
          } else if ("object" == typeof n && null !== n && "string" != typeof e)
            throw new TypeError("Object key must be string");
          Object.defineProperty(n, e, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              delete n[e];
              var t = r();
              return (n[e] = t), t;
            },
            set: function (r) {
              delete n[e], (n[e] = r);
            },
          });
        }
        function An(n) {
          return [].slice.call(n);
        }
        function Mn(n) {
          return (
            "object" == typeof (e = n) &&
            null !== e &&
            "[object Object]" === {}.toString.call(n)
          );
          var e;
        }
        function Nn(n) {
          if (!Mn(n)) return !1;
          var e = n.constructor;
          if ("function" != typeof e) return !1;
          var r = e.prototype;
          return !!Mn(r) && !!r.hasOwnProperty("isPrototypeOf");
        }
        function Sn(n, e, r) {
          if ((void 0 === r && (r = ""), Array.isArray(n))) {
            for (
              var t = n.length,
                o = [],
                i = function (t) {
                  kn(o, t, function () {
                    var o = r ? r + "." + t : "" + t,
                      i = e(n[t], t, o);
                    return (Nn(i) || Array.isArray(i)) && (i = Sn(i, e, o)), i;
                  });
                },
                a = 0;
              a < t;
              a++
            )
              i(a);
            return o;
          }
          if (Nn(n)) {
            var u = {},
              s = function (t) {
                if (!n.hasOwnProperty(t)) return "continue";
                kn(u, t, function () {
                  var o = r ? r + "." + t : "" + t,
                    i = e(n[t], t, o);
                  return (Nn(i) || Array.isArray(i)) && (i = Sn(i, e, o)), i;
                });
              };
            for (var c in n) s(c);
            return u;
          }
          throw new Error("Pass an object or array");
        }
        function zn(n) {
          return null != n;
        }
        function Fn(n) {
          return "[object RegExp]" === {}.toString.call(n);
        }
        function Rn(n, e, r) {
          if (n.hasOwnProperty(e)) return n[e];
          var t = r();
          return (n[e] = t), t;
        }
        function jn(n) {
          var e = [],
            r = !1;
          return {
            set: function (e, t) {
              return (
                r ||
                  ((n[e] = t),
                  this.register(function () {
                    delete n[e];
                  })),
                t
              );
            },
            register: function (n) {
              r ? n() : e.push(mn(n));
            },
            all: function () {
              var n = [];
              for (r = !0; e.length; ) {
                var t = e.shift();
                n.push(t());
              }
              return E.all(n).then(hn);
            },
          };
        }
        function In(n, e) {
          if (null == e) throw new Error("Expected " + n + " to be present");
          return e;
        }
        function Dn() {
          return Boolean(document.body) && "complete" === document.readyState;
        }
        function Bn(n) {
          return n
            .replace(/\?/g, "%3F")
            .replace(/&/g, "%26")
            .replace(/#/g, "%23")
            .replace(/\+/g, "%2B");
        }
        function Wn() {
          return pn(Wn, function () {
            return new E(function (n) {
              Dn() && n(),
                window.addEventListener("load", function () {
                  return n();
                });
            });
          });
        }
        function Un() {
          return pn(Un, function () {
            return new E(function (n) {
              if (Dn()) return n();
              var e = setInterval(function () {
                if (Dn()) return clearInterval(e), n();
              }, 10);
            });
          });
        }
        function qn(n) {
          return pn(
            qn,
            function () {
              var e = {};
              if (!n) return e;
              if (-1 === n.indexOf("=")) return e;
              for (var r = 0, t = n.split("&"); r < t.length; r++) {
                var o = t[r];
                (o = o.split("="))[0] &&
                  o[1] &&
                  (e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]));
              }
              return e;
            },
            [n]
          );
        }
        function Hn(n, e) {
          return (
            void 0 === e && (e = {}),
            e && Object.keys(e).length
              ? (void 0 === (r = h({}, qn(n), {}, e)) && (r = {}),
                Object.keys(r)
                  .filter(function (n) {
                    return "string" == typeof r[n];
                  })
                  .map(function (n) {
                    return Bn(n) + "=" + Bn(r[n]);
                  })
                  .join("&"))
              : n
          );
          var r;
        }
        function Gn(n, e) {
          var r,
            t,
            o = e.query || {},
            i = e.hash || {},
            a = n.split("#");
          t = a[1];
          var u = (r = a[0]).split("?");
          r = u[0];
          var s = Hn(u[1], o),
            c = Hn(t, i);
          return s && (r = r + "?" + s), c && (r = r + "#" + c), r;
        }
        function Zn() {
          return pn(Zn, function () {
            var n = window.performance;
            if (
              n &&
              n.now &&
              n.timing &&
              n.timing.connectEnd &&
              n.timing.navigationStart &&
              Math.abs(n.now() - Date.now()) > 1e3 &&
              n.now() - (n.timing.connectEnd - n.timing.navigationStart) > 0
            )
              return n;
          });
        }
        function Vn() {
          return "undefined" != typeof window;
        }
        function Yn(n) {
          var e = n.host,
            r = void 0 === e ? window.location.host : e,
            t = n.path;
          return pn(
            Yn,
            function () {
              for (
                var n = "" + r + t,
                  e = [].slice.call(document.getElementsByTagName("script")),
                  o = 0;
                o < e.length;
                o++
              ) {
                var i = e[o];
                if (
                  i.src &&
                  i.src.replace(/^https?:\/\//, "").split("?")[0] === n
                )
                  return i;
              }
            },
            [t]
          );
        }
        function Kn() {
          return pn(Kn, function () {
            try {
              if ("undefined" == typeof window) return !1;
              if (window.localStorage) {
                var n = Math.random().toString();
                window.localStorage.setItem("__test__localStorage__", n);
                var e = window.localStorage.getItem("__test__localStorage__");
                if (
                  (window.localStorage.removeItem("__test__localStorage__"),
                  n === e)
                )
                  return !0;
              }
            } catch (n) {}
            return !1;
          });
        }
        function Xn() {
          var n = window.navigator,
            e = n.languages ? [].concat(n.languages) : [];
          return (
            n.language && e.push(n.language),
            n.userLanguage && e.push(n.userLanguage),
            e
              .map(function (n) {
                if (n && n.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                  var e = n.split(/[-_]/);
                  return { country: e[1], lang: e[0] };
                }
                return n && n.match(/^[a-z]{2}$/) ? { lang: n } : null;
              })
              .filter(Boolean)
          );
        }
        function Jn(n, e) {
          n.appendChild(e);
        }
        function $n(n) {
          return (
            n instanceof window.Element ||
            (null !== n &&
              "object" == typeof n &&
              1 === n.nodeType &&
              "object" == typeof n.style &&
              "object" == typeof n.ownerDocument)
          );
        }
        function Qn(n, e) {
          return (
            void 0 === e && (e = document),
            $n(n) ? n : "string" == typeof n ? e.querySelector(n) : void 0
          );
        }
        function ne(n, e) {
          void 0 === e && (e = document);
          var r = Qn(n, e);
          if (r) return r;
          throw new Error("Can not find element: " + wn(n));
        }
        function ee(n) {
          this.message = n;
        }
        function re(n, e) {
          var r = (e = e || {}).width,
            t = e.height,
            o = 0,
            i = 0;
          r &&
            (window.outerWidth
              ? (i = Math.round((window.outerWidth - r) / 2) + window.screenX)
              : window.screen.width &&
                (i = Math.round((window.screen.width - r) / 2))),
            t &&
              (window.outerHeight
                ? (o = Math.round((window.outerHeight - t) / 2) + window.screenY)
                : window.screen.height &&
                  (o = Math.round((window.screen.height - t) / 2))),
            r &&
              t &&
              (e = h(
                {
                  top: o,
                  left: i,
                  width: r,
                  height: t,
                  status: 1,
                  toolbar: 0,
                  menubar: 0,
                  resizable: 1,
                  scrollbars: 1,
                },
                e
              ));
          var a = e.name || "";
          delete e.name;
          var u,
            s,
            c = Object.keys(e)
              .map(function (n) {
                if (null != e[n]) return n + "=" + wn(e[n]);
              })
              .filter(Boolean)
              .join(",");
          try {
            u = window.open(n, a, c, !0);
          } catch (s) {
            throw new ee("Can not open popup window - " + (s.stack || s.message));
          }
          if (U(u)) throw new ee("Can not open popup window - blocked");
          return (
            window.addEventListener("unload", function () {
              return u.close();
            }),
            u
          );
        }
        function te(n, e) {
          var r = e.tagName.toLowerCase();
          if ("html" !== r)
            throw new Error("Expected element to be html, got " + r);
          for (
            var t = n.document.documentElement, o = 0, i = An(t.children);
            o < i.length;
            o++
          )
            t.removeChild(i[o]);
          for (var a = 0, u = An(e.children); a < u.length; a++)
            t.appendChild(u[a]);
        }
        function oe(n) {
          if ((cn = cn || new nn()).has(n)) {
            var e = cn.get(n);
            if (e) return e;
          }
          var r = new E(function (e, r) {
            n.addEventListener("load", function () {
              (function (n) {
                if (
                  ((function () {
                    for (var n = 0; n < B.length; n++) {
                      var e = !1;
                      try {
                        e = B[n].closed;
                      } catch (n) {}
                      e && (W.splice(n, 1), B.splice(n, 1));
                    }
                  })(),
                  n && n.contentWindow)
                )
                  try {
                    B.push(n.contentWindow), W.push(n);
                  } catch (n) {}
              })(n),
                e(n);
            }),
              n.addEventListener("error", function (t) {
                n.contentWindow ? e(n) : r(t);
              });
          });
          return cn.set(n, r), r;
        }
        function ie(n) {
          return oe(n).then(function (n) {
            if (!n.contentWindow)
              throw new Error("Could not find window in iframe");
            return n.contentWindow;
          });
        }
        function ae(n, e) {
          void 0 === n && (n = {});
          var r = n.style || {},
            t = (function (n, e, r) {
              void 0 === n && (n = "div"),
                void 0 === e && (e = {}),
                (n = n.toLowerCase());
              var t,
                o,
                i,
                a = document.createElement(n);
              if (
                (e.style && vn(a.style, e.style),
                e.class && (a.className = e.class.join(" ")),
                e.id && a.setAttribute("id", e.id),
                e.attributes)
              )
                for (
                  var u = 0, s = Object.keys(e.attributes);
                  u < s.length;
                  u++
                ) {
                  var c = s[u];
                  a.setAttribute(c, e.attributes[c]);
                }
              if (
                (e.styleSheet &&
                  ((t = a),
                  (o = e.styleSheet),
                  void 0 === i && (i = window.document),
                  t.styleSheet
                    ? (t.styleSheet.cssText = o)
                    : t.appendChild(i.createTextNode(o))),
                e.html)
              ) {
                if ("iframe" === n)
                  throw new Error(
                    "Iframe html can not be written unless container provided and iframe in DOM"
                  );
                a.innerHTML = e.html;
              }
              return a;
            })("iframe", {
              attributes: h({ allowTransparency: "true" }, n.attributes || {}),
              style: h({ backgroundColor: "transparent", border: "none" }, r),
              html: n.html,
              class: n.class,
            }),
            o = window.navigator.userAgent.match(/MSIE|Edge/i);
          return (
            t.hasAttribute("id") || t.setAttribute("id", an()),
            oe(t),
            e && ne(e).appendChild(t),
            (n.url || o) && t.setAttribute("src", n.url || "about:blank"),
            t
          );
        }
        function ue(n, e, r) {
          return (
            n.addEventListener(e, r),
            {
              cancel: function () {
                n.removeEventListener(e, r);
              },
            }
          );
        }
        function se(n, e, r) {
          r = mn(r);
          for (var t = 0; t < e.length; t++) n.addEventListener(e[t], r);
          return {
            cancel: mn(function () {
              for (var t = 0; t < e.length; t++) n.removeEventListener(e[t], r);
            }),
          };
        }
        (dn.clear = function () {
          for (var n = 0; n < ln.length; n++) ln[n].reset();
        }),
          (ee.prototype = Object.create(Error.prototype));
        var ce = ["webkit", "moz", "ms", "o"],
          le = [
            "animationstart",
            "webkitAnimationStart",
            "oAnimationStart",
            "MSAnimationStart",
          ],
          de = [
            "animationend",
            "webkitAnimationEnd",
            "oAnimationEnd",
            "MSAnimationEnd",
          ];
        function fe(n, e, r, t) {
          return (
            void 0 === t && (t = 1e3),
            new E(function (o, i) {
              var a = ne(n);
              if (!a) return o();
              var u,
                s,
                c,
                l,
                d = !1;
              function f() {
                clearTimeout(u), clearTimeout(s), c.cancel(), l.cancel();
              }
              (c = se(a, le, function (n) {
                n.target === a &&
                  n.animationName === e &&
                  (clearTimeout(u),
                  n.stopPropagation(),
                  c.cancel(),
                  (d = !0),
                  (s = setTimeout(function () {
                    f(), o();
                  }, t)));
              })),
                (l = se(a, de, function (n) {
                  if (n.target === a && n.animationName === e)
                    return (
                      f(),
                      "string" == typeof n.animationName && n.animationName !== e
                        ? i(
                            "Expected animation name to be " +
                              e +
                              ", found " +
                              n.animationName
                          )
                        : o()
                    );
                })),
                (function (n, e, r) {
                  n.style[e] = r;
                  for (var t = Pn(e), o = 0; o < ce.length; o++)
                    n.style["" + ce[o] + t] = r;
                })(a, "animationName", e),
                (u = setTimeout(function () {
                  if (!d) return f(), o();
                }, 200)),
                r && r(f);
            })
          );
        }
        function pe(n) {
          n.style.setProperty("display", "");
        }
        function he(n) {
          n.style.setProperty("display", "none", "important");
        }
        function me(n) {
          n && n.parentNode && n.parentNode.removeChild(n);
        }
        function ye(n) {
          return !n || !n.parentNode;
        }
        function ge(n, e, r) {
          var t = void 0 === r ? {} : r,
            o = t.width,
            i = void 0 === o || o,
            a = t.height,
            u = void 0 === a || a,
            s = t.interval,
            c = void 0 === s ? 100 : s,
            l = t.win,
            d = void 0 === l ? window : l,
            f = n.offsetWidth,
            p = n.offsetHeight;
          e({ width: f, height: p });
          var h,
            m,
            y = function () {
              var r = n.offsetWidth,
                t = n.offsetHeight;
              ((i && r !== f) || (u && t !== p)) && e({ width: r, height: t }),
                (f = r),
                (p = t);
            };
          return (
            void 0 !== d.ResizeObserver
              ? (h = new d.ResizeObserver(y)).observe(n)
              : void 0 !== d.MutationObserver
              ? ((h = new d.MutationObserver(y)).observe(n, {
                  attributes: !0,
                  childList: !0,
                  subtree: !0,
                  characterData: !1,
                }),
                d.addEventListener("resize", y))
              : (function n() {
                  y(), (m = setTimeout(n, c));
                })(),
            {
              cancel: function () {
                h.disconnect(),
                  window.removeEventListener("resize", y),
                  clearTimeout(m);
              },
            }
          );
        }
        function we(n) {
          for (; n.parentNode; ) n = n.parentNode;
          return "[object ShadowRoot]" === n.toString();
        }
        function ve(n) {
          var e = n.name,
            r = n.lifetime,
            t = void 0 === r ? 12e5 : r;
          return pn(
            ve,
            function () {
              var n,
                r = "__" + e + "_storage__";
              function o(e) {
                var t,
                  o = Kn();
                if ((n && (t = n), !t && o)) {
                  var i = window.localStorage.getItem(r);
                  i && (t = JSON.parse(i));
                }
                t || (t = un()[r]),
                  t || (t = { id: an() }),
                  t.id || (t.id = an()),
                  (n = t);
                var a = e(t);
                return (
                  o
                    ? window.localStorage.setItem(r, JSON.stringify(t))
                    : (un()[r] = t),
                  (n = null),
                  a
                );
              }
              function i(n) {
                return o(function (e) {
                  var r = e.__session__,
                    o = Date.now();
                  return (
                    r && o - r.created > t && (r = null),
                    r || (r = { guid: an(), created: o }),
                    (e.__session__ = r),
                    n(r)
                  );
                });
              }
              return {
                getState: o,
                getID: function () {
                  return o(function (n) {
                    return n.id;
                  });
                },
                getSessionState: function (n) {
                  return i(function (e) {
                    return (e.state = e.state || {}), n(e.state);
                  });
                },
                getSessionID: function () {
                  return i(function (n) {
                    return n.guid;
                  });
                },
              };
            },
            [{ name: e, lifetime: t }]
          );
        }
        var Ce = [];
        function be(n) {
          return "string" == typeof n && /^[0-9]+%$/.test(n);
        }
        function Le(n) {
          if ("number" == typeof n) return n;
          var e = n.match(/^([0-9]+)(px|%)$/);
          if (!e) throw new Error("Could not match css value from " + n);
          return parseInt(e[1], 10);
        }
        function Ee(n) {
          return Le(n) + "px";
        }
        function xe(n) {
          return "number" == typeof n ? Ee(n) : be(n) ? n : Ee(n);
        }
        function Oe(n, e) {
          if ("number" == typeof n) return n;
          if (be(n))
            return (function (n, e) {
              return parseInt((n * Le(e)) / 100, 10);
            })(e, n);
          if ("string" == typeof (r = n) && /^[0-9]+px$/.test(r)) return Le(n);
          var r;
          throw new Error("Can not normalize dimension: " + n);
        }
        var Te = {
            AD: "AD",
            AE: "AE",
            AG: "AG",
            AI: "AI",
            AL: "AL",
            AM: "AM",
            AN: "AN",
            AO: "AO",
            AR: "AR",
            AT: "AT",
            AU: "AU",
            AW: "AW",
            AZ: "AZ",
            BA: "BA",
            BB: "BB",
            BE: "BE",
            BF: "BF",
            BG: "BG",
            BH: "BH",
            BI: "BI",
            BJ: "BJ",
            BM: "BM",
            BN: "BN",
            BO: "BO",
            BR: "BR",
            BS: "BS",
            BT: "BT",
            BW: "BW",
            BY: "BY",
            BZ: "BZ",
            CA: "CA",
            CD: "CD",
            CG: "CG",
            CH: "CH",
            CI: "CI",
            CK: "CK",
            CL: "CL",
            CM: "CM",
            CN: "CN",
            CO: "CO",
            CR: "CR",
            CV: "CV",
            CY: "CY",
            CZ: "CZ",
            DE: "DE",
            DJ: "DJ",
            DK: "DK",
            DM: "DM",
            DO: "DO",
            DZ: "DZ",
            EC: "EC",
            EE: "EE",
            EG: "EG",
            ER: "ER",
            ES: "ES",
            ET: "ET",
            FI: "FI",
            FJ: "FJ",
            FK: "FK",
            FM: "FM",
            FO: "FO",
            FR: "FR",
            GA: "GA",
            GB: "GB",
            GD: "GD",
            GE: "GE",
            GF: "GF",
            GI: "GI",
            GL: "GL",
            GM: "GM",
            GN: "GN",
            GP: "GP",
            GR: "GR",
            GT: "GT",
            GW: "GW",
            GY: "GY",
            HK: "HK",
            HN: "HN",
            HR: "HR",
            HU: "HU",
            ID: "ID",
            IE: "IE",
            IL: "IL",
            IN: "IN",
            IS: "IS",
            IT: "IT",
            JM: "JM",
            JO: "JO",
            JP: "JP",
            KE: "KE",
            KG: "KG",
            KH: "KH",
            KI: "KI",
            KM: "KM",
            KN: "KN",
            KR: "KR",
            KW: "KW",
            KY: "KY",
            KZ: "KZ",
            LA: "LA",
            LC: "LC",
            LI: "LI",
            LK: "LK",
            LS: "LS",
            LT: "LT",
            LU: "LU",
            LV: "LV",
            MA: "MA",
            MC: "MC",
            MD: "MD",
            ME: "ME",
            MG: "MG",
            MH: "MH",
            MK: "MK",
            ML: "ML",
            MN: "MN",
            MQ: "MQ",
            MR: "MR",
            MS: "MS",
            MT: "MT",
            MU: "MU",
            MV: "MV",
            MW: "MW",
            MX: "MX",
            MY: "MY",
            MZ: "MZ",
            NA: "NA",
            NC: "NC",
            NE: "NE",
            NF: "NF",
            NG: "NG",
            NI: "NI",
            NL: "NL",
            NO: "NO",
            NP: "NP",
            NR: "NR",
            NU: "NU",
            NZ: "NZ",
            OM: "OM",
            PA: "PA",
            PE: "PE",
            PF: "PF",
            PG: "PG",
            PH: "PH",
            PL: "PL",
            PM: "PM",
            PN: "PN",
            PT: "PT",
            PW: "PW",
            PY: "PY",
            QA: "QA",
            RE: "RE",
            RO: "RO",
            RS: "RS",
            RU: "RU",
            RW: "RW",
            SA: "SA",
            SB: "SB",
            SC: "SC",
            SE: "SE",
            SG: "SG",
            SH: "SH",
            SI: "SI",
            SJ: "SJ",
            SK: "SK",
            SL: "SL",
            SM: "SM",
            SN: "SN",
            SO: "SO",
            SR: "SR",
            ST: "ST",
            SV: "SV",
            SZ: "SZ",
            TC: "TC",
            TD: "TD",
            TG: "TG",
            TH: "TH",
            TJ: "TJ",
            TM: "TM",
            TN: "TN",
            TO: "TO",
            TR: "TR",
            TT: "TT",
            TV: "TV",
            TW: "TW",
            TZ: "TZ",
            UA: "UA",
            UG: "UG",
            US: "US",
            UY: "UY",
            VA: "VA",
            VC: "VC",
            VE: "VE",
            VG: "VG",
            VN: "VN",
            VU: "VU",
            WF: "WF",
            WS: "WS",
            YE: "YE",
            YT: "YT",
            ZA: "ZA",
            ZM: "ZM",
            ZW: "ZW",
          },
          _e = {
            AD: ["en", "fr", "es", "zh"],
            AE: ["en", "fr", "es", "zh", "ar"],
            AG: ["en", "fr", "es", "zh"],
            AI: ["en", "fr", "es", "zh"],
            AL: ["en"],
            AM: ["en", "fr", "es", "zh"],
            AN: ["en", "fr", "es", "zh"],
            AO: ["en", "fr", "es", "zh"],
            AR: ["es", "en"],
            AT: ["de", "en"],
            AU: ["en"],
            AW: ["en", "fr", "es", "zh"],
            AZ: ["en", "fr", "es", "zh"],
            BA: ["en"],
            BB: ["en", "fr", "es", "zh"],
            BE: ["en", "nl", "fr"],
            BF: ["fr", "en", "es", "zh"],
            BG: ["en"],
            BH: ["ar", "en", "fr", "es", "zh"],
            BI: ["fr", "en", "es", "zh"],
            BJ: ["fr", "en", "es", "zh"],
            BM: ["en", "fr", "es", "zh"],
            BN: ["en"],
            BO: ["es", "en", "fr", "zh"],
            BR: ["pt", "en"],
            BS: ["en", "fr", "es", "zh"],
            BT: ["en"],
            BW: ["en", "fr", "es", "zh"],
            BY: ["en"],
            BZ: ["en", "es", "fr", "zh"],
            CA: ["en", "fr"],
            CD: ["fr", "en", "es", "zh"],
            CG: ["en", "fr", "es", "zh"],
            CH: ["de", "fr", "en"],
            CI: ["fr", "en"],
            CK: ["en", "fr", "es", "zh"],
            CL: ["es", "en", "fr", "zh"],
            CM: ["fr", "en"],
            CN: ["zh"],
            CO: ["es", "en", "fr", "zh"],
            CR: ["es", "en", "fr", "zh"],
            CV: ["en", "fr", "es", "zh"],
            CY: ["en"],
            CZ: ["cs", "en", "fr", "es", "zh"],
            DE: ["de", "en"],
            DJ: ["fr", "en", "es", "zh"],
            DK: ["da", "en"],
            DM: ["en", "fr", "es", "zh"],
            DO: ["es", "en", "fr", "zh"],
            DZ: ["ar", "en", "fr", "es", "zh"],
            EC: ["es", "en", "fr", "zh"],
            EE: ["en", "ru", "fr", "es", "zh"],
            EG: ["ar", "en", "fr", "es", "zh"],
            ER: ["en", "fr", "es", "zh"],
            ES: ["es", "en"],
            ET: ["en", "fr", "es", "zh"],
            FI: ["fi", "en", "fr", "es", "zh"],
            FJ: ["en", "fr", "es", "zh"],
            FK: ["en", "fr", "es", "zh"],
            FM: ["en"],
            FO: ["da", "en", "fr", "es", "zh"],
            FR: ["fr", "en"],
            GA: ["fr", "en", "es", "zh"],
            GB: ["en"],
            GD: ["en", "fr", "es", "zh"],
            GE: ["en", "fr", "es", "zh"],
            GF: ["en", "fr", "es", "zh"],
            GI: ["en", "fr", "es", "zh"],
            GL: ["da", "en", "fr", "es", "zh"],
            GM: ["en", "fr", "es", "zh"],
            GN: ["fr", "en", "es", "zh"],
            GP: ["en", "fr", "es", "zh"],
            GR: ["el", "en", "fr", "es", "zh"],
            GT: ["es", "en", "fr", "zh"],
            GW: ["en", "fr", "es", "zh"],
            GY: ["en", "fr", "es", "zh"],
            HK: ["en", "zh"],
            HN: ["es", "en", "fr", "zh"],
            HR: ["en"],
            HU: ["hu", "en", "fr", "es", "zh"],
            ID: ["id", "en"],
            IE: ["en", "fr", "es", "zh"],
            IL: ["he", "en"],
            IN: ["en"],
            IS: ["en"],
            IT: ["it", "en"],
            JM: ["en", "es", "fr", "zh"],
            JO: ["ar", "en", "fr", "es", "zh"],
            JP: ["ja", "en"],
            KE: ["en", "fr", "es", "zh"],
            KG: ["en", "fr", "es", "zh"],
            KH: ["en"],
            KI: ["en", "fr", "es", "zh"],
            KM: ["fr", "en", "es", "zh"],
            KN: ["en", "fr", "es", "zh"],
            KR: ["ko", "en"],
            KW: ["ar", "en", "fr", "es", "zh"],
            KY: ["en", "fr", "es", "zh"],
            KZ: ["en", "fr", "es", "zh"],
            LA: ["en"],
            LC: ["en", "fr", "es", "zh"],
            LI: ["en", "fr", "es", "zh"],
            LK: ["en"],
            LS: ["en", "fr", "es", "zh"],
            LT: ["en", "ru", "fr", "es", "zh"],
            LU: ["en", "de", "fr", "es", "zh"],
            LV: ["en", "ru", "fr", "es", "zh"],
            MA: ["ar", "en", "fr", "es", "zh"],
            MC: ["fr", "en"],
            MD: ["en"],
            ME: ["en"],
            MG: ["en", "fr", "es", "zh"],
            MH: ["en", "fr", "es", "zh"],
            MK: ["en"],
            ML: ["fr", "en", "es", "zh"],
            MN: ["en"],
            MQ: ["en", "fr", "es", "zh"],
            MR: ["en", "fr", "es", "zh"],
            MS: ["en", "fr", "es", "zh"],
            MT: ["en"],
            MU: ["en", "fr", "es", "zh"],
            MV: ["en"],
            MW: ["en", "fr", "es", "zh"],
            MX: ["es", "en"],
            MY: ["en"],
            MZ: ["en", "fr", "es", "zh"],
            NA: ["en", "fr", "es", "zh"],
            NC: ["en", "fr", "es", "zh"],
            NE: ["fr", "en", "es", "zh"],
            NF: ["en", "fr", "es", "zh"],
            NG: ["en"],
            NI: ["es", "en", "fr", "zh"],
            NL: ["nl", "en"],
            NO: ["no", "en"],
            NP: ["en"],
            NR: ["en", "fr", "es", "zh"],
            NU: ["en", "fr", "es", "zh"],
            NZ: ["en", "fr", "es", "zh"],
            OM: ["ar", "en", "fr", "es", "zh"],
            PA: ["es", "en", "fr", "zh"],
            PE: ["es", "en", "fr", "zh"],
            PF: ["en", "fr", "es", "zh"],
            PG: ["en", "fr", "es", "zh"],
            PH: ["en"],
            PL: ["pl", "en"],
            PM: ["en", "fr", "es", "zh"],
            PN: ["en", "fr", "es", "zh"],
            PT: ["pt", "en"],
            PW: ["en", "fr", "es", "zh"],
            PY: ["es", "en"],
            QA: ["en", "fr", "es", "zh", "ar"],
            RE: ["en", "fr", "es", "zh"],
            RO: ["en", "fr", "es", "zh"],
            RS: ["en", "fr", "es", "zh"],
            RU: ["ru", "en"],
            RW: ["fr", "en", "es", "zh"],
            SA: ["ar", "en", "fr", "es", "zh"],
            SB: ["en", "fr", "es", "zh"],
            SC: ["fr", "en", "es", "zh"],
            SE: ["sv", "en"],
            SG: ["en"],
            SH: ["en", "fr", "es", "zh"],
            SI: ["en", "fr", "es", "zh"],
            SJ: ["en", "fr", "es", "zh"],
            SK: ["sk", "en", "fr", "es", "zh"],
            SL: ["en", "fr", "es", "zh"],
            SM: ["en", "fr", "es", "zh"],
            SN: ["fr", "en", "es", "zh"],
            SO: ["en", "fr", "es", "zh"],
            SR: ["en", "fr", "es", "zh"],
            ST: ["en", "fr", "es", "zh"],
            SV: ["es", "en", "fr", "zh"],
            SZ: ["en", "fr", "es", "zh"],
            TC: ["en", "fr", "es", "zh"],
            TD: ["fr", "en", "es", "zh"],
            TG: ["fr", "en", "es", "zh"],
            TH: ["th", "en"],
            TJ: ["en", "fr", "es", "zh"],
            TM: ["en", "fr", "es", "zh"],
            TN: ["ar", "en", "fr", "es", "zh"],
            TO: ["en"],
            TR: ["tr", "en"],
            TT: ["en", "fr", "es", "zh"],
            TV: ["en", "fr", "es", "zh"],
            TW: ["zh", "en"],
            TZ: ["en", "fr", "es", "zh"],
            UA: ["en", "ru", "fr", "es", "zh"],
            UG: ["en", "fr", "es", "zh"],
            US: ["en", "fr", "es", "zh"],
            UY: ["es", "en", "fr", "zh"],
            VA: ["en", "fr", "es", "zh"],
            VC: ["en", "fr", "es", "zh"],
            VE: ["es", "en", "fr", "zh"],
            VG: ["en", "fr", "es", "zh"],
            VN: ["en"],
            VU: ["en", "fr", "es", "zh"],
            WF: ["en", "fr", "es", "zh"],
            WS: ["en"],
            YE: ["ar", "en", "fr", "es", "zh"],
            YT: ["en", "fr", "es", "zh"],
            ZA: ["en", "fr", "es", "zh"],
            ZM: ["en", "fr", "es", "zh"],
            ZW: ["en"],
          },
          Pe = {
            LOCAL: "local",
            STAGE: "stage",
            SANDBOX: "sandbox",
            PRODUCTION: "production",
            TEST: "test",
          },
          ke = { DESKTOP: "desktop", MOBILE: "mobile" },
          Ae = {
            PAYPAL: "paypal",
            VENMO: "venmo",
            ITAU: "itau",
            CREDIT: "credit",
            CARD: "card",
            IDEAL: "ideal",
            SEPA: "sepa",
            BANCONTACT: "bancontact",
            GIROPAY: "giropay",
            SOFORT: "sofort",
            EPS: "eps",
            MYBANK: "mybank",
            P24: "p24",
            VERKKOPANKKI: "verkkopankki",
            PAYU: "payu",
            BLIK: "blik",
            TRUSTLY: "trustly",
            ZIMPLER: "zimpler",
            MAXIMA: "maxima",
            OXXO: "oxxo",
            BOLETO: "boleto",
            WECHATPAY: "wechatpay",
          },
          Me = {
            VISA: "visa",
            MASTERCARD: "mastercard",
            AMEX: "amex",
            DISCOVER: "discover",
            HIPER: "hiper",
            ELO: "elo",
            JCB: "jcb",
            CUP: "cup",
          };
        function Ne() {
          return "sandbox";
        }
        function Se() {
          return "5.0.117";
        }
        function ze() {
          return "9ef76fbd695e5";
        }
        function Fe() {
          return !1;
        }
        function Re() {
          return ["buttons"];
        }
        function je() {
          return l() ? ke.MOBILE : ke.DESKTOP;
        }
        var Ie = {
          sb:
            "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R",
        };
        function De() {
          return pn(De, function () {
            var n =
                "sandbox" === Pe.SANDBOX
                  ? "www.paypal.com"
                  : "www.sandbox.paypal.com",
              e = Yn({ host: n, path: "/sdk/js" });
            if (!e)
              throw new Error(
                'PayPal Payments SDK script not present on page! Excected to find <script src="https://' +
                  n +
                  '/sdk/js">'
              );
            return e;
          });
        }
        function Be() {
          return pn(Be, function () {
            for (var n = {}, e = 0, r = De().attributes; e < r.length; e++) {
              var t = r[e];
              0 === t.name.indexOf("data-") && (n[t.name] = t.value);
            }
            return n;
          });
        }
        function We(n, e) {
          return Be()[n] || e;
        }
        function Ue(n, e) {
          return qn(De().src.split("?")[1] || "")[n] || e;
        }
        function qe() {
          var n = De().getAttribute("src");
          if (!n) throw new Error("Can not find src for sdk script");
          return n;
        }
        function He(n, e) {
          return "true" === Ue(n, e ? e.toString() : "false");
        }
        function Ge() {
          var n = Ue("client-id");
          if (!n) throw new Error("Expected client-id parameter in sdk url");
          return Ie[n] ? Ie[n] : n;
        }
        function Ze() {
          var n = Ue("merchant-id");
          if ("*" === n) {
            if (!(n = We("data-merchant-id")))
              throw new Error(
                "Must pass data-merchant-id when merchant-id=* passed in url"
              );
            if ((n = n.split(",")).length <= 1)
              throw new Error(
                "Must pass multiple merchant ids to data-merchant-id. If passing a single id, pass merchant-id=XYZ in url"
              );
            if (
              n.some(function (e, r) {
                return n && n.indexOf(e) !== r;
              })
            )
              throw new Error(
                "Duplicates data-merchant-id. Must pass unique merchant ids to data-merchant-id."
              );
            return n;
          }
          return n ? n.split(",") : [];
        }
        function Ve() {
          return Ue("intent", "capture");
        }
        function Ye() {
          return He("commit", (Ve(), !0));
        }
        function Ke() {
          return He("vault", !1);
        }
        function Xe() {
          return Ue("currency", "USD");
        }
        function Je() {
          var n = Ue("disable-funding");
          return n ? n.split(",") : [];
        }
        function $e() {
          var n = Ue("disable-card");
          return n ? n.split(",") : [];
        }
        function Qe() {
          return Ue("buyer-country");
        }
        function nr() {
          return We("data-namespace") || "paypal";
        }
        function er() {
          var n = We("data-client-access-token");
          if (n) return n;
          var e = We("data-client-token");
          return e ? JSON.parse(on(e)).paypal.accessToken : void 0;
        }
        function rr() {
          return We("data-partner-attribution-id");
        }
        function tr() {
          return We("data-stage-host", null);
        }
        function or() {
          return We("data-api-stage-host", null);
        }
        function ir() {
          var n = Ue("locale");
          if (n) {
            var e = n.split("_");
            return { lang: e[0], country: e[1] };
          }
          for (var r = 0, t = Xn(); r < t.length; r++) {
            var o = t[r],
              i = o.country,
              a = o.lang;
            if (_e.hasOwnProperty(i) && -1 !== _e[i].indexOf(a))
              return { country: i, lang: a };
          }
          for (var u = 0, s = Xn(); u < s.length; u++) {
            var c = s[u].country;
            if (_e.hasOwnProperty(c)) return { country: c, lang: _e[c][0] };
          }
          return { lang: "en", country: Te.US };
        }
        function ar() {
          return We("data-csp-nonce");
        }
        function ur() {
          return Be().hasOwnProperty("data-enable-3ds");
        }
        function sr(n) {
          var e = (function (n, e) {
            if ("object" != typeof n || null === n) return n;
            var r = n[Symbol.toPrimitive];
            if (void 0 !== r) {
              var t = r.call(n, "string");
              if ("object" != typeof t) return t;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n);
          })(n);
          return "symbol" == typeof e ? e : String(e);
        }
        function cr() {
          return tr(), "https://www.sandbox.paypal.com";
        }
        function lr() {
          return Boolean(N().match(/\.paypal\.com(:\d+)?$/));
        }
        var dr = ["warn", "error"],
          fr = ["error", "warn", "info", "debug"];
        function pr(n) {
          return (function (n) {
            var e = n.url,
              r = n.method,
              t = void 0 === r ? "get" : r,
              o = n.headers,
              i = void 0 === o ? {} : o,
              a = n.json,
              u = n.data,
              s = n.body,
              c = n.win,
              l = void 0 === c ? window : c,
              d = n.timeout,
              f = void 0 === d ? 0 : d;
            return new E(function (n, r) {
              if ((a && u) || (a && s) || (u && a))
                throw new Error(
                  "Only options.json or options.data or options.body should be passed"
                );
              for (var o = {}, c = 0, d = Object.keys(i); c < d.length; c++) {
                var p = d[c];
                o[p.toLowerCase()] = i[p];
              }
              a
                ? (o["content-type"] = o["content-type"] || "application/json")
                : (u || s) &&
                  (o["content-type"] =
                    o["content-type"] ||
                    "application/x-www-form-urlencoded; charset=utf-8"),
                (o.accept = o.accept || "application/json");
              for (var h = 0; h < Ce.length; h++)
                for (
                  var m = (0, Ce[h])(), y = 0, g = Object.keys(m);
                  y < g.length;
                  y++
                ) {
                  var w = g[y];
                  o[w.toLowerCase()] = m[w];
                }
              var v = new l.XMLHttpRequest();
              for (var C in (v.addEventListener(
                "load",
                function () {
                  var o = (function (n) {
                    void 0 === n && (n = "");
                    for (
                      var e = {}, r = 0, t = n.trim().split("\n");
                      r < t.length;
                      r++
                    ) {
                      var o = t[r].split(":"),
                        i = o[0],
                        a = o.slice(1);
                      e[i.toLowerCase()] = a.join(":").trim();
                    }
                    return e;
                  })(this.getAllResponseHeaders());
                  if (!this.status)
                    return r(
                      new Error(
                        "Request to " +
                          t.toLowerCase() +
                          " " +
                          e +
                          " failed: no response status code."
                      )
                    );
                  var i = o["content-type"],
                    a =
                      i &&
                      (0 === i.indexOf("application/json") ||
                        0 === i.indexOf("text/json")),
                    u = this.responseText;
                  try {
                    u = JSON.parse(u);
                  } catch (n) {
                    if (a)
                      return r(
                        new Error("Invalid json: " + this.responseText + ".")
                      );
                  }
                  return n({ status: this.status, headers: o, body: u });
                },
                !1
              ),
              v.addEventListener(
                "error",
                function (n) {
                  r(
                    new Error(
                      "Request to " +
                        t.toLowerCase() +
                        " " +
                        e +
                        " failed: " +
                        n.toString() +
                        "."
                    )
                  );
                },
                !1
              ),
              v.open(t, e, !0),
              o))
                o.hasOwnProperty(C) && v.setRequestHeader(C, o[C]);
              a
                ? (s = JSON.stringify(a))
                : u &&
                  (s = Object.keys(u)
                    .map(function (n) {
                      return (
                        encodeURIComponent(n) +
                        "=" +
                        (u ? encodeURIComponent(u[n]) : "")
                      );
                    })
                    .join("&")),
                (v.timeout = f),
                (v.ontimeout = function () {
                  r(
                    new Error(
                      "Request to " + t.toLowerCase() + " " + e + " has timed out"
                    )
                  );
                }),
                v.send(s);
            });
          })({
            url: n.url,
            method: n.method,
            headers: n.headers,
            json: n.json,
          }).then(hn);
        }
        function hr(n, e) {
          for (var r in e) e.hasOwnProperty(r) && e[r] && !n[r] && (n[r] = e[r]);
        }
        function mr() {
          return ve({ name: nr() });
        }
        function yr() {
          return mr().getSessionID();
        }
        function gr(n) {
          return mr().getState(n);
        }
        function wr() {
          return pn(wr, function () {
            return (function (n) {
              var e = n.url,
                r = n.prefix,
                t = n.logLevel,
                o = void 0 === t ? "warn" : t,
                i = n.transport,
                a = void 0 === i ? pr : i,
                u = n.flushInterval,
                s = void 0 === u ? 6e4 : u,
                c = [],
                l = [],
                d = [],
                f = [],
                p = [],
                m = [];
              function y(n, e, r) {
                if (
                  Vn() &&
                  window.console &&
                  window.console.log &&
                  !(fr.indexOf(n) > fr.indexOf(o))
                ) {
                  var t = [e];
                  t.push(r),
                    (r.error || r.warning) &&
                      t.push("\n\n", r.error || r.warning);
                  try {
                    window.console[n] && window.console[n].apply
                      ? window.console[n].apply(window.console, t)
                      : window.console.log &&
                        window.console.log.apply &&
                        window.console.log.apply(window.console, t);
                  } catch (n) {}
                }
              }
              function g() {
                return E.try(function () {
                  if (
                    Vn() &&
                    "file:" !== window.location.protocol &&
                    (c.length || l.length)
                  ) {
                    for (var n = {}, r = 0; r < f.length; r++)
                      hr(n, (0, f[r])(n));
                    for (var t = {}, o = 0; o < m.length; o++)
                      hr(t, (0, m[o])(t));
                    var i = a({
                      method: "POST",
                      url: e,
                      headers: t,
                      json: { events: c, meta: n, tracking: l },
                    });
                    return (c = []), (l = []), i.then(hn);
                  }
                });
              }
              var w,
                v,
                C,
                b,
                L =
                  (void 0 === v && (v = 50),
                  rn(function () {
                    b && clearTimeout(b);
                    var n = (C = C || new E());
                    return (
                      (b = setTimeout(function () {
                        (C = null),
                          (b = null),
                          E.try(w).then(
                            function (e) {
                              n.resolve(e);
                            },
                            function (e) {
                              n.reject(e);
                            }
                          );
                      }, v)),
                      n
                    );
                  }, en((w = g)) + "::promiseDebounced"));
              function x(n, e, t) {
                if ((void 0 === t && (t = {}), !Vn())) return T;
                r && (e = r + "_" + e);
                for (
                  var o = h({}, xn(t), { timestamp: Date.now().toString() }),
                    i = 0;
                  i < d.length;
                  i++
                )
                  hr(o, (0, d[i])(o));
                return (
                  (function (n, e, r) {
                    c.push({ level: n, event: e, payload: r }),
                      -1 !== dr.indexOf(n) && L();
                  })(n, e, o),
                  y(n, e, o),
                  T
                );
              }
              function O(n, e) {
                return n.push(e), T;
              }
              Vn() && Tn(L, s);
              var T = {
                debug: function (n, e) {
                  return x("debug", n, e);
                },
                info: function (n, e) {
                  return x("info", n, e);
                },
                warn: function (n, e) {
                  return x("warn", n, e);
                },
                error: function (n, e) {
                  return x("error", n, e);
                },
                track: function (n) {
                  if ((void 0 === n && (n = {}), !Vn())) return T;
                  for (var e = xn(n), r = 0; r < p.length; r++)
                    hr(e, (0, p[r])(e));
                  return y("debug", "track", e), l.push(e), T;
                },
                flush: L,
                immediateFlush: g,
                addPayloadBuilder: function (n) {
                  return O(d, n);
                },
                addMetaBuilder: function (n) {
                  return O(f, n);
                },
                addTrackingBuilder: function (n) {
                  return O(p, n);
                },
                addHeaderBuilder: function (n) {
                  return O(m, n);
                },
                setTransport: function (n) {
                  return (a = n), T;
                },
              };
              return T;
            })({
              url:
                (void 0 === (n = "/xoplatform/logger/api/logger") && (n = ""),
                "" + cr() + n),
            });
            var n;
          });
        }
        function vr() {
          return tn(
            JSON.stringify({ url: qe(), stageHost: tr(), apiStageHost: or() })
          ).replace(/\=+$/, "");
        }
        function Cr() {
          return pn(Cr, function () {
            return _n();
          });
        }
        function br() {
          var n;
          De(),
            (n = wr()),
            Date.now(),
            n.addPayloadBuilder(function () {
              return { referer: window.location.host, uid: yr(), env: "sandbox" };
            }),
            n.addTrackingBuilder(function () {
              var n,
                e = ir(),
                r = e.lang,
                t = e.country,
                o = Ze();
              return (
                ((n = {}).feed_name = "payments_sdk"),
                (n.serverside_data_source = "checkout"),
                (n.client_id = Ge()),
                (n.seller_id = o && o.toString()),
                (n.page_session_id = yr()),
                (n.referer_url = window.location.host),
                (n.locale = r + "_" + t),
                (n.integration_identifier = Ge()),
                (n.bn_code = rr()),
                (n.sdk_name = "payments_sdk"),
                (n.sdk_version = "5.0.117"),
                (n.user_agent = window.navigator && window.navigator.userAgent),
                (n.user_action = Ye() ? "commit" : "continue"),
                (n.context_correlation_id = "9ef76fbd695e5"),
                (n.sdk_integration_source = We("data-sdk-integration-source")),
                n
              );
            }),
            E.onPossiblyUnhandledException(function (e) {
              var r;
              n.track(
                (((r = {}).ext_error_code = "payments_sdk_error"),
                (r.ext_error_desc = gn(e)),
                r)
              ),
                n.error("unhandled_error", { err: yn(e) }),
                n.flush().catch(hn);
            }),
            Wn().then(function () {
              var e,
                r,
                t = (function (n) {
                  var e = Zn();
                  if (e && "function" == typeof e.getEntries)
                    for (var r = e.getEntries(), t = 0; t < r.length; t++) {
                      var o = r[t];
                      if (
                        o &&
                        o.name &&
                        0 === o.name.indexOf(n) &&
                        "number" == typeof o.duration
                      )
                        return Math.floor(o.duration);
                    }
                })(De().src);
              (r =
                0 === t
                  ? "sdk_client_cache_hit"
                  : "number" == typeof t
                  ? "sdk_client_cache_miss"
                  : "sdk_client_cache_unknown"),
                n
                  .info("setup_sandbox")
                  .info(r)
                  .track(
                    ((e = {}),
                    (e.transition_name = "process_js_sdk_init_client"),
                    (e.sdk_load_time =
                      "number" == typeof t ? t.toString() : void 0),
                    (e.sdk_cache = r),
                    e)
                  )
                  .flush(),
                (function () {
                  if (window.document.documentMode)
                    try {
                      var n = window.status;
                      return (
                        (window.status = "testIntranetMode"),
                        "testIntranetMode" === window.status &&
                          ((window.status = n), !0)
                      );
                    } catch (n) {
                      return !1;
                    }
                  return !1;
                })() && n.warn("ie_intranet_mode");
            });
        }
        function Lr(n) {
          return (
            void 0 === n && (n = window),
            n !== window
              ? n.__post_robot_10_0_31__
              : (n.__post_robot_10_0_31__ = n.__post_robot_10_0_31__ || {})
          );
        }
        var Er = function () {
          return {};
        };
        function xr(n, e) {
          return (
            void 0 === n && (n = "store"),
            void 0 === e && (e = Er),
            Rn(Lr(), n, function () {
              var n = e();
              return {
                has: function (e) {
                  return n.hasOwnProperty(e);
                },
                get: function (e, r) {
                  return n.hasOwnProperty(e) ? n[e] : r;
                },
                set: function (e, r) {
                  return (n[e] = r), r;
                },
                del: function (e) {
                  delete n[e];
                },
                getOrSet: function (e, r) {
                  return Rn(n, e, r);
                },
                reset: function () {
                  n = e();
                },
                keys: function () {
                  return Object.keys(n);
                },
              };
            })
          );
        }
        var Or,
          Tr = function () {};
        function _r() {
          var n = Lr();
          return (
            (n.WINDOW_WILDCARD = n.WINDOW_WILDCARD || new Tr()), n.WINDOW_WILDCARD
          );
        }
        function Pr(n, e) {
          return (
            void 0 === n && (n = "store"),
            void 0 === e && (e = Er),
            xr("windowStore").getOrSet(n, function () {
              var r = new nn(),
                t = function (n) {
                  return r.getOrSet(n, e);
                };
              return {
                has: function (e) {
                  return t(e).hasOwnProperty(n);
                },
                get: function (e, r) {
                  var o = t(e);
                  return o.hasOwnProperty(n) ? o[n] : r;
                },
                set: function (e, r) {
                  return (t(e)[n] = r), r;
                },
                del: function (e) {
                  delete t(e)[n];
                },
                getOrSet: function (e, r) {
                  return Rn(t(e), n, r);
                },
              };
            })
          );
        }
        function kr() {
          return xr("instance").getOrSet("instanceID", an);
        }
        function Ar(n, e) {
          var r = e.domain,
            t = Pr("helloPromises"),
            o = t.get(n);
          o && o.resolve({ domain: r });
          var i = E.resolve({ domain: r });
          return t.set(n, i), i;
        }
        function Mr(n, e) {
          return (0, e.send)(
            n,
            "postrobot_hello",
            { instanceID: kr() },
            { domain: "*", timeout: -1 }
          ).then(function (e) {
            var r = e.origin,
              t = e.data.instanceID;
            return Ar(n, { domain: r }), { win: n, domain: r, instanceID: t };
          });
        }
        function Nr(n, e) {
          var r = e.send;
          return Pr("windowInstanceIDPromises").getOrSet(n, function () {
            return Mr(n, { send: r }).then(function (n) {
              return n.instanceID;
            });
          });
        }
        function Sr(n) {
          Pr("knownWindows").set(n, !0);
        }
        function zr(n) {
          return (
            "object" == typeof n && null !== n && "string" == typeof n.__type__
          );
        }
        function Fr(n) {
          return void 0 === n
            ? "undefined"
            : null === n
            ? "null"
            : Array.isArray(n)
            ? "array"
            : "function" == typeof n
            ? "function"
            : "object" == typeof n
            ? n instanceof Error
              ? "error"
              : "function" == typeof n.then
              ? "promise"
              : "[object RegExp]" === {}.toString.call(n)
              ? "regex"
              : "[object Date]" === {}.toString.call(n)
              ? "date"
              : "object"
            : "string" == typeof n
            ? "string"
            : "number" == typeof n
            ? "number"
            : "boolean" == typeof n
            ? "boolean"
            : void 0;
        }
        function Rr(n, e) {
          return { __type__: n, __val__: e };
        }
        var jr,
          Ir =
            (((Or = {}).function = function () {}),
            (Or.error = function (n) {
              return Rr("error", {
                message: n.message,
                stack: n.stack,
                code: n.code,
              });
            }),
            (Or.promise = function () {}),
            (Or.regex = function (n) {
              return Rr("regex", n.source);
            }),
            (Or.date = function (n) {
              return Rr("date", n.toJSON());
            }),
            (Or.array = function (n) {
              return n;
            }),
            (Or.object = function (n) {
              return n;
            }),
            (Or.string = function (n) {
              return n;
            }),
            (Or.number = function (n) {
              return n;
            }),
            (Or.boolean = function (n) {
              return n;
            }),
            (Or.null = function (n) {
              return n;
            }),
            Or),
          Dr = {},
          Br =
            (((jr = {}).function = function () {
              throw new Error(
                "Function serialization is not implemented; nothing to deserialize"
              );
            }),
            (jr.error = function (n) {
              var e = n.stack,
                r = n.code,
                t = new Error(n.message);
              return (t.code = r), (t.stack = e + "\n\n" + t.stack), t;
            }),
            (jr.promise = function () {
              throw new Error(
                "Promise serialization is not implemented; nothing to deserialize"
              );
            }),
            (jr.regex = function (n) {
              return new RegExp(n);
            }),
            (jr.date = function (n) {
              return new Date(n);
            }),
            (jr.array = function (n) {
              return n;
            }),
            (jr.object = function (n) {
              return n;
            }),
            (jr.string = function (n) {
              return n;
            }),
            (jr.number = function (n) {
              return n;
            }),
            (jr.boolean = function (n) {
              return n;
            }),
            (jr.null = function (n) {
              return n;
            }),
            jr),
          Wr = {};
        function Ur() {
          for (
            var n = xr("idToProxyWindow"), e = 0, r = n.keys();
            e < r.length;
            e++
          ) {
            var t = r[e];
            n.get(t).shouldClean() && n.del(t);
          }
        }
        function qr(n, e) {
          var r = e.send,
            t = e.id,
            o = void 0 === t ? an() : t,
            i = n.then(function (n) {
              if (S(n)) return z(n).name;
            });
          return {
            id: o,
            getType: function () {
              return n.then(function (n) {
                return k(n) ? O.POPUP : O.IFRAME;
              });
            },
            getInstanceID: fn(function () {
              return n.then(function (n) {
                return Nr(n, { send: r });
              });
            }),
            close: function () {
              return n.then(J);
            },
            getName: function () {
              return n.then(function (n) {
                if (!U(n)) return S(n) ? z(n).name : i;
              });
            },
            focus: function () {
              return n.then(function (n) {
                n.focus();
              });
            },
            isClosed: function () {
              return n.then(function (n) {
                return U(n);
              });
            },
            setLocation: function (e) {
              return n.then(function (n) {
                if (S(n))
                  try {
                    if (n.location && "function" == typeof n.location.replace)
                      return void n.location.replace(e);
                  } catch (n) {}
                n.location = e;
              });
            },
            setName: function (e) {
              return n.then(function (n) {
                var r = S(n),
                  t = (function (n) {
                    if (S(n)) return z(n).frameElement;
                    for (
                      var e = 0, r = document.querySelectorAll("iframe");
                      e < r.length;
                      e++
                    ) {
                      var t = r[e];
                      if (t && t.contentWindow && t.contentWindow === n) return t;
                    }
                  })(n);
                if (!r)
                  throw new Error(
                    "Can not set name for cross-domain window: " + e
                  );
                (z(n).name = e),
                  t && t.setAttribute("name", e),
                  (i = E.resolve(e));
              });
            },
          };
        }
        new E(function (n) {
          if (window.document && window.document.body)
            return n(window.document.body);
          var e = setInterval(function () {
            if (window.document && window.document.body)
              return clearInterval(e), n(window.document.body);
          }, 10);
        });
        var Hr = (function () {
          function n(n) {
            var e = n.send,
              r = n.win,
              t = n.serializedWindow;
            (this.id = void 0),
              (this.isProxyWindow = !0),
              (this.serializedWindow = void 0),
              (this.actualWindow = void 0),
              (this.actualWindowPromise = void 0),
              (this.send = void 0),
              (this.name = void 0),
              (this.actualWindowPromise = new E()),
              (this.serializedWindow =
                t || qr(this.actualWindowPromise, { send: e })),
              xr("idToProxyWindow").set(this.getID(), this),
              r && this.setWindow(r, { send: e });
          }
          var e = n.prototype;
          return (
            (e.getID = function () {
              return this.serializedWindow.id;
            }),
            (e.getType = function () {
              return this.serializedWindow.getType();
            }),
            (e.isPopup = function () {
              return this.getType().then(function (n) {
                return n === O.POPUP;
              });
            }),
            (e.setLocation = function (n) {
              var e = this;
              return this.serializedWindow.setLocation(n).then(function () {
                return e;
              });
            }),
            (e.getName = function () {
              return this.serializedWindow.getName();
            }),
            (e.setName = function (n) {
              var e = this;
              return this.serializedWindow.setName(n).then(function () {
                return e;
              });
            }),
            (e.close = function () {
              var n = this;
              return this.serializedWindow.close().then(function () {
                return n;
              });
            }),
            (e.focus = function () {
              var n = this,
                e = this.isPopup(),
                r = this.getName(),
                t = E.hash({ isPopup: e, name: r }).then(function (n) {
                  var e = n.name;
                  n.isPopup && e && window.open("", e);
                }),
                o = this.serializedWindow.focus();
              return E.all([t, o]).then(function () {
                return n;
              });
            }),
            (e.isClosed = function () {
              return this.serializedWindow.isClosed();
            }),
            (e.getWindow = function () {
              return this.actualWindow;
            }),
            (e.setWindow = function (n, e) {
              var r = e.send;
              (this.actualWindow = n),
                this.actualWindowPromise.resolve(this.actualWindow),
                (this.serializedWindow = qr(this.actualWindowPromise, {
                  send: r,
                  id: this.getID(),
                })),
                Pr("winToProxyWindow").set(n, this);
            }),
            (e.awaitWindow = function () {
              return this.actualWindowPromise;
            }),
            (e.matchWindow = function (n, e) {
              var r = this,
                t = e.send;
              return E.try(function () {
                return r.actualWindow
                  ? n === r.actualWindow
                  : E.hash({
                      proxyInstanceID: r.getInstanceID(),
                      knownWindowInstanceID: Nr(n, { send: t }),
                    }).then(function (e) {
                      var o = e.proxyInstanceID === e.knownWindowInstanceID;
                      return o && r.setWindow(n, { send: t }), o;
                    });
              });
            }),
            (e.unwrap = function () {
              return this.actualWindow || this;
            }),
            (e.getInstanceID = function () {
              return this.serializedWindow.getInstanceID();
            }),
            (e.shouldClean = function () {
              return Boolean(this.actualWindow && U(this.actualWindow));
            }),
            (e.serialize = function () {
              return this.serializedWindow;
            }),
            (n.unwrap = function (e) {
              return n.isProxyWindow(e) ? e.unwrap() : e;
            }),
            (n.serialize = function (e, r) {
              var t = r.send;
              return Ur(), n.toProxyWindow(e, { send: t }).serialize();
            }),
            (n.deserialize = function (e, r) {
              var t = r.send;
              return (
                Ur(),
                xr("idToProxyWindow").get(e.id) ||
                  new n({ serializedWindow: e, send: t })
              );
            }),
            (n.isProxyWindow = function (n) {
              return Boolean(n && !X(n) && n.isProxyWindow);
            }),
            (n.toProxyWindow = function (e, r) {
              var t = r.send;
              if ((Ur(), n.isProxyWindow(e))) return e;
              var o = e;
              return Pr("winToProxyWindow").get(o) || new n({ win: o, send: t });
            }),
            n
          );
        })();
        function Gr(n, e, r, t, o) {
          var i = Pr("methodStore"),
            a = xr("proxyWindowMethods");
          Hr.isProxyWindow(t)
            ? a.set(n, { val: e, name: r, domain: o, source: t })
            : (a.del(n),
              (i.getOrSet(t, function () {
                return {};
              })[n] = { domain: o, name: r, val: e, source: t }));
        }
        function Zr(n, e) {
          var r = Pr("methodStore"),
            t = xr("proxyWindowMethods");
          return (
            r.getOrSet(n, function () {
              return {};
            })[e] || t.get(e)
          );
        }
        function Vr(n, e, r, t, o) {
          var i, a, u;
          (a = (i = { on: o.on, send: o.send }).on),
            (u = i.send),
            xr("builtinListeners").getOrSet("functionCalls", function () {
              return a("postrobot_method", { domain: "*" }, function (n) {
                var e = n.source,
                  r = n.origin,
                  t = n.data,
                  o = t.id,
                  i = t.name,
                  a = Zr(e, o);
                if (!a)
                  throw new Error(
                    "Could not find method '" +
                      i +
                      "' with id: " +
                      t.id +
                      " in " +
                      N(window)
                  );
                var s = a.source,
                  c = a.domain,
                  l = a.val;
                return E.try(function () {
                  if (!V(c, r))
                    throw new Error(
                      "Method '" +
                        t.name +
                        "' domain " +
                        JSON.stringify(
                          Fn(a.domain) ? a.domain.source : a.domain
                        ) +
                        " does not match origin " +
                        r +
                        " in " +
                        N(window)
                    );
                  if (Hr.isProxyWindow(s))
                    return s.matchWindow(e, { send: u }).then(function (n) {
                      if (!n)
                        throw new Error(
                          "Method call '" +
                            t.name +
                            "' failed - proxy window does not match source in " +
                            N(window)
                        );
                    });
                })
                  .then(
                    function () {
                      return l.apply({ source: e, origin: r }, t.args);
                    },
                    function (n) {
                      return E.try(function () {
                        if (l.onError) return l.onError(n);
                      }).then(function () {
                        var e;
                        throw (
                          (n.stack &&
                            (n.stack =
                              "Remote call to " +
                              i +
                              "(" +
                              (void 0 === (e = t.args) && (e = []),
                              An(e)
                                .map(function (n) {
                                  return "string" == typeof n
                                    ? "'" + n + "'"
                                    : void 0 === n
                                    ? "undefined"
                                    : null === n
                                    ? "null"
                                    : "boolean" == typeof n
                                    ? n.toString()
                                    : Array.isArray(n)
                                    ? "[ ... ]"
                                    : "object" == typeof n
                                    ? "{ ... }"
                                    : "function" == typeof n
                                    ? "() => { ... }"
                                    : "<" + typeof n + ">";
                                })
                                .join(", ")) +
                              ") failed\n\n" +
                              n.stack),
                          n)
                        );
                      });
                    }
                  )
                  .then(function (n) {
                    return { result: n, id: o, name: i };
                  });
              });
            });
          var s = r.__id__ || an();
          n = Hr.unwrap(n);
          var c = r.__name__ || r.name || t;
          return (
            "string" == typeof c &&
              "function" == typeof c.indexOf &&
              0 === c.indexOf("anonymous::") &&
              (c = c.replace("anonymous::", t + "::")),
            Hr.isProxyWindow(n)
              ? (Gr(s, r, c, n, e),
                n.awaitWindow().then(function (n) {
                  Gr(s, r, c, n, e);
                }))
              : Gr(s, r, c, n, e),
            Rr("cross_domain_function", { id: s, name: c })
          );
        }
        function Yr(n, e, r, t) {
          var o,
            i = t.on,
            a = t.send;
          return (function (n, e) {
            void 0 === e && (e = Dr);
            var r = JSON.stringify(n, function (n) {
              var r = this[n];
              if (zr(this)) return r;
              var t = Fr(r);
              if (!t) return r;
              var o = e[t] || Ir[t];
              return o ? o(r, n) : r;
            });
            return void 0 === r ? "undefined" : r;
          })(
            r,
            (((o = {}).promise = function (r, t) {
              return (function (n, e, r, t, o) {
                return Rr("cross_domain_zalgo_promise", {
                  then: Vr(
                    n,
                    e,
                    function (n, e) {
                      return r.then(n, e);
                    },
                    t,
                    { on: o.on, send: o.send }
                  ),
                });
              })(n, e, r, t, { on: i, send: a });
            }),
            (o.function = function (r, t) {
              return Vr(n, e, r, t, { on: i, send: a });
            }),
            (o.object = function (n) {
              return X(n) || Hr.isProxyWindow(n)
                ? Rr("cross_domain_window", Hr.serialize(n, { send: a }))
                : n;
            }),
            o)
          );
        }
        function Kr(n, e, r, t) {
          var o,
            i = t.on,
            a = t.send;
          return (function (n, e) {
            if ((void 0 === e && (e = Wr), "undefined" !== n))
              return JSON.parse(n, function (n, r) {
                if (zr(this)) return r;
                var t, o;
                if (
                  (zr(r)
                    ? ((t = r.__type__), (o = r.__val__))
                    : ((t = Fr(r)), (o = r)),
                  !t)
                )
                  return o;
                var i = e[t] || Br[t];
                return i ? i(o, n) : o;
              });
          })(
            r,
            (((o = {}).cross_domain_zalgo_promise = function (n) {
              return (function (n, e, r) {
                return new E(r.then);
              })(0, 0, n);
            }),
            (o.cross_domain_function = function (r) {
              return (function (n, e, r, t) {
                var o = r.id,
                  i = r.name,
                  a = t.send,
                  u = function (r) {
                    function t() {
                      var u = arguments;
                      return Hr.toProxyWindow(n, { send: a })
                        .awaitWindow()
                        .then(function (n) {
                          var s = Zr(n, o);
                          if (s && s.val !== t)
                            return s.val.apply(
                              { source: window, origin: N() },
                              u
                            );
                          var c = { domain: e, fireAndForget: r.fireAndForget },
                            l = [].slice.call(u);
                          return a(
                            n,
                            "postrobot_method",
                            { id: o, name: i, args: l },
                            c
                          ).then(function (n) {
                            if (!r.fireAndForget) return n.data.result;
                          });
                        })
                        .catch(function (n) {
                          throw n;
                        });
                    }
                    return (
                      void 0 === r && (r = {}),
                      (t.__name__ = i),
                      (t.__origin__ = e),
                      (t.__source__ = n),
                      (t.__id__ = o),
                      (t.origin = e),
                      t
                    );
                  },
                  s = u();
                return (s.fireAndForget = u({ fireAndForget: !0 })), s;
              })(n, e, r, { on: i, send: a });
            }),
            (o.cross_domain_window = function (n) {
              return Hr.deserialize(n, { send: a });
            }),
            o)
          );
        }
        var Xr,
          Jr = {};
        function $r(n, e, r, t) {
          var o,
            i = t.on,
            a = t.send;
          if (U(n)) throw new Error("Window is closed");
          for (
            var u = Yr(
                n,
                e,
                (((o = {}).__post_robot_10_0_31__ = h(
                  { id: an(), origin: N(window) },
                  r
                )),
                o),
                { on: i, send: a }
              ),
              s = Object.keys(Jr),
              c = [],
              l = 0;
            l < s.length;
            l++
          ) {
            var d = s[l];
            try {
              Jr[d](n, u, e);
            } catch (n) {
              c.push(n);
            }
          }
          if (c.length === s.length)
            throw new Error(
              "All post-robot messaging strategies failed:\n\n" +
                c
                  .map(function (n, e) {
                    return e + ". " + yn(n);
                  })
                  .join("\n\n")
            );
        }
        function Qr(n) {
          return xr("responseListeners").get(n);
        }
        function nt(n) {
          xr("responseListeners").del(n);
        }
        function et(n) {
          return xr("erroredResponseListeners").has(n);
        }
        function rt(n) {
          var e = n.name,
            r = n.win,
            t = n.domain,
            o = Pr("requestListeners");
          if (("*" === r && (r = null), "*" === t && (t = null), !e))
            throw new Error("Name required to get request listener");
          for (var i = 0, a = [r, _r()]; i < a.length; i++) {
            var u = a[i];
            if (u) {
              var s = o.get(u);
              if (s) {
                var c = s[e];
                if (c) {
                  if (t && "string" == typeof t) {
                    if (c[t]) return c[t];
                    if (c.__domain_regex__)
                      for (var l = 0, d = c.__domain_regex__; l < d.length; l++) {
                        var f = d[l],
                          p = f.listener;
                        if (V(f.regex, t)) return p;
                      }
                  }
                  if (c["*"]) return c["*"];
                }
              }
            }
          }
        }
        (Jr.postrobot_post_message = function (n, e, r) {
          (Array.isArray(r) ? r : "string" == typeof r ? [r] : ["*"])
            .map(function (n) {
              return 0 === n.indexOf("file:") ? "*" : n;
            })
            .forEach(function (r) {
              n.postMessage(e, r);
            });
        }),
          (Jr.postrobot_global = function (n, e) {
            if (
              !(function (n) {
                return (
                  (n = n || window).navigator.mockUserAgent ||
                  n.navigator.userAgent
                );
              })(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)
            )
              throw new Error("Global messaging not needed for browser");
            if (!S(n))
              throw new Error(
                "Post message through global disabled between different domain windows"
              );
            if (!1 !== Z(window, n))
              throw new Error(
                "Can only use global to communicate between two different windows, not between frames"
              );
            var r = Lr(n);
            if (!r)
              throw new Error("Can not find postRobot global on foreign window");
            r.receiveMessage({ source: window, origin: N(), data: e });
          });
        var tt =
          (((Xr = {}).postrobot_message_request = function (n, e, r, t) {
            var o = t.on,
              i = t.send,
              a = rt({ name: r.name, win: n, domain: e }),
              u =
                "postrobot_method" === r.name &&
                r.data &&
                "string" == typeof r.data.name
                  ? r.data.name + "()"
                  : r.name;
            function s(t, a, s) {
              if ((void 0 === s && (s = {}), !r.fireAndForget && !U(n)))
                try {
                  $r(
                    n,
                    e,
                    h({ type: t, ack: a, hash: r.hash, name: r.name }, s),
                    { on: o, send: i }
                  );
                } catch (n) {
                  throw new Error(
                    "Send response message failed for " +
                      u +
                      " in " +
                      N() +
                      "\n\n" +
                      yn(n)
                  );
                }
            }
            return E.all([
              s("postrobot_message_ack"),
              E.try(function () {
                if (!a)
                  throw new Error(
                    "No handler found for post message: " +
                      r.name +
                      " from " +
                      e +
                      " in " +
                      window.location.protocol +
                      "//" +
                      window.location.host +
                      window.location.pathname
                  );
                if (!V(a.domain, e))
                  throw new Error(
                    "Request origin " +
                      e +
                      " does not match domain " +
                      a.domain.toString()
                  );
                return a.handler({ source: n, origin: e, data: r.data });
              }).then(
                function (n) {
                  return s("postrobot_message_response", "success", { data: n });
                },
                function (n) {
                  return s("postrobot_message_response", "error", { error: n });
                }
              ),
            ])
              .then(hn)
              .catch(function (n) {
                if (a && a.handleError) return a.handleError(n);
                throw n;
              });
          }),
          (Xr.postrobot_message_ack = function (n, e, r) {
            if (!et(r.hash)) {
              var t = Qr(r.hash);
              if (!t)
                throw new Error(
                  "No handler found for post message ack for message: " +
                    r.name +
                    " from " +
                    e +
                    " in " +
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    window.location.pathname
                );
              try {
                if (!V(t.domain, e))
                  throw new Error(
                    "Ack origin " +
                      e +
                      " does not match domain " +
                      t.domain.toString()
                  );
                if (n !== t.win)
                  throw new Error("Ack source does not match registered window");
              } catch (n) {
                t.promise.reject(n);
              }
              t.ack = !0;
            }
          }),
          (Xr.postrobot_message_response = function (n, e, r) {
            if (!et(r.hash)) {
              var t,
                o = Qr(r.hash);
              if (!o)
                throw new Error(
                  "No handler found for post message response for message: " +
                    r.name +
                    " from " +
                    e +
                    " in " +
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    window.location.pathname
                );
              if (!V(o.domain, e))
                throw new Error(
                  "Response origin " +
                    e +
                    " does not match domain " +
                    ((t = o.domain),
                    Array.isArray(t)
                      ? "(" + t.join(" | ") + ")"
                      : x(t)
                      ? "RegExp(" + t.toString()
                      : t.toString())
                );
              if (n !== o.win)
                throw new Error(
                  "Response source does not match registered window"
                );
              nt(r.hash),
                "error" === r.ack
                  ? o.promise.reject(r.error)
                  : "success" === r.ack &&
                    o.promise.resolve({ source: n, origin: e, data: r.data });
            }
          }),
          Xr);
        function ot(n, e) {
          var r = e.on,
            t = e.send,
            o = xr("receivedMessages");
          try {
            if (!window || window.closed || !n.source) return;
          } catch (n) {
            return;
          }
          var i = n.source,
            a = n.origin,
            u = (function (n, e, r, t) {
              var o,
                i = t.on,
                a = t.send;
              try {
                o = Kr(e, r, n, { on: i, send: a });
              } catch (n) {
                return;
              }
              if (
                o &&
                "object" == typeof o &&
                null !== o &&
                (o = o.__post_robot_10_0_31__) &&
                "object" == typeof o &&
                null !== o &&
                o.type &&
                "string" == typeof o.type &&
                tt[o.type]
              )
                return o;
            })(n.data, i, a, { on: r, send: t });
          u &&
            (Sr(i),
            o.has(u.id) ||
              (o.set(u.id, !0),
              (U(i) && !u.fireAndForget) ||
                (0 === u.origin.indexOf("file:") && (a = "file://"),
                tt[u.type](i, a, u, { on: r, send: t }))));
        }
        function it(n, e, r) {
          if (!n) throw new Error("Expected name");
          if (("function" == typeof e && ((r = e), (e = {})), !r))
            throw new Error("Expected handler");
          ((e = e || {}).name = n), (e.handler = r || e.handler);
          var t = e.window,
            o = e.domain,
            i = (function n(e, r) {
              var t = e.name,
                o = e.win,
                i = e.domain,
                a = Pr("requestListeners");
              if (!t || "string" != typeof t)
                throw new Error("Name required to add request listener");
              if (Array.isArray(o)) {
                for (var u = [], s = 0, c = o; s < c.length; s++)
                  u.push(n({ name: t, domain: i, win: c[s] }, r));
                return {
                  cancel: function () {
                    for (var n = 0; n < u.length; n++) u[n].cancel();
                  },
                };
              }
              if (Array.isArray(i)) {
                for (var l = [], d = 0, f = i; d < f.length; d++)
                  l.push(n({ name: t, win: o, domain: f[d] }, r));
                return {
                  cancel: function () {
                    for (var n = 0; n < l.length; n++) l[n].cancel();
                  },
                };
              }
              var p = rt({ name: t, win: o, domain: i });
              if (((o && "*" !== o) || (o = _r()), (i = i || "*"), p))
                throw o && i
                  ? new Error(
                      "Request listener already exists for " +
                        t +
                        " on domain " +
                        i.toString() +
                        " for " +
                        (o === _r() ? "wildcard" : "specified") +
                        " window"
                    )
                  : o
                  ? new Error(
                      "Request listener already exists for " +
                        t +
                        " for " +
                        (o === _r() ? "wildcard" : "specified") +
                        " window"
                    )
                  : i
                  ? new Error(
                      "Request listener already exists for " +
                        t +
                        " on domain " +
                        i.toString()
                    )
                  : new Error("Request listener already exists for " + t);
              var h,
                m,
                y = a.getOrSet(o, function () {
                  return {};
                }),
                g = Rn(y, t, function () {
                  return {};
                }),
                w = i.toString();
              return (
                Fn(i)
                  ? (h = Rn(g, "__domain_regex__", function () {
                      return [];
                    })).push((m = { regex: i, listener: r }))
                  : (g[w] = r),
                {
                  cancel: function () {
                    delete g[w],
                      m &&
                        (h.splice(h.indexOf(m, 1)),
                        h.length || delete g.__domain_regex__),
                      Object.keys(g).length || delete y[t],
                      o && !Object.keys(y).length && a.del(o);
                  },
                }
              );
            })(
              { name: n, win: t, domain: o },
              {
                handler: e.handler,
                handleError:
                  e.errorHandler ||
                  function (n) {
                    throw n;
                  },
                window: t,
                domain: o || "*",
                name: n,
              }
            );
          return {
            cancel: function () {
              i.cancel();
            },
          };
        }
        function at(n, e, r) {
          "function" == typeof (e = e || {}) && ((r = e), (e = {}));
          var t,
            o = new E();
          return (
            (e.errorHandler = function (n) {
              t.cancel(), o.reject(n);
            }),
            (t = it(n, e, function (n) {
              if ((t.cancel(), o.resolve(n), r)) return r(n);
            })),
            (o.cancel = t.cancel),
            o
          );
        }
        var ut = function n(e, r, t, o) {
          var i = (o = o || {}).domain || "*",
            a = o.timeout || -1,
            u = o.timeout || 5e3,
            s = o.fireAndForget || !1;
          return E.try(function () {
            if (
              ((function (n, e, r) {
                if (!n) throw new Error("Expected name");
                if (r && "string" != typeof r && !Array.isArray(r) && !Fn(r))
                  throw new TypeError(
                    "Expected domain to be a string, array, or regex"
                  );
                if (U(e)) throw new Error("Target window is closed");
              })(r, e, i),
              (function (n, e) {
                var r = q(e);
                if (r) return r === n;
                if (e === n) return !1;
                if (I(e) === e) return !1;
                for (var t = 0, o = R(n); t < o.length; t++)
                  if (o[t] === e) return !0;
                return !1;
              })(window, e))
            )
              return (function (n, e, r) {
                void 0 === e && (e = 5e3), void 0 === r && (r = "Window");
                var t = (function (n) {
                  return Pr("helloPromises").getOrSet(n, function () {
                    return new E();
                  });
                })(n);
                return (
                  -1 !== e &&
                    (t = t.timeout(
                      e,
                      new Error(r + " did not load after " + e + "ms")
                    )),
                  t
                );
              })(e, u);
          })
            .then(function (r) {
              return (function (n, e, r, t) {
                var o = t.send;
                return "string" == typeof e
                  ? E.resolve(e)
                  : E.try(function () {
                      return (
                        r ||
                        Mr(n, { send: o }).then(function (n) {
                          return n.domain;
                        })
                      );
                    }).then(function (n) {
                      if (!V(e, e))
                        throw new Error(
                          "Domain " + wn(e) + " does not match " + wn(e)
                        );
                      return n;
                    });
              })(e, i, (void 0 === r ? {} : r).domain, { send: n });
            })
            .then(function (o) {
              i = o;
              var u =
                  "postrobot_method" === r && t && "string" == typeof t.name
                    ? t.name + "()"
                    : r,
                c = new E(),
                l = r + "_" + an();
              if (!s) {
                var d = { name: r, win: e, domain: i, promise: c };
                !(function (n, e) {
                  xr("responseListeners").set(n, e);
                })(l, d);
                var f = Pr("requestPromises").getOrSet(e, function () {
                  return [];
                });
                f.push(c),
                  c.catch(function () {
                    !(function (n) {
                      xr("erroredResponseListeners").set(n, !0);
                    })(l),
                      nt(l);
                  });
                var p = (function (n) {
                    return Pr("knownWindows").get(n, !1);
                  })(e)
                    ? 1e4
                    : 2e3,
                  h = a,
                  m = p,
                  y = h,
                  g = Tn(function () {
                    return U(e)
                      ? c.reject(
                          new Error(
                            "Window closed for " +
                              r +
                              " before " +
                              (d.ack ? "response" : "ack")
                          )
                        )
                      : d.cancelled
                      ? c.reject(
                          new Error("Response listener was cancelled for " + r)
                        )
                      : ((m = Math.max(m - 500, 0)),
                        -1 !== y && (y = Math.max(y - 500, 0)),
                        d.ack || 0 !== m
                          ? 0 === y
                            ? c.reject(
                                new Error(
                                  "No response for postMessage " +
                                    u +
                                    " in " +
                                    N() +
                                    " in " +
                                    h +
                                    "ms"
                                )
                              )
                            : void 0
                          : c.reject(
                              new Error(
                                "No ack for postMessage " +
                                  u +
                                  " in " +
                                  N() +
                                  " in " +
                                  p +
                                  "ms"
                              )
                            ));
                  }, 500);
                c.finally(function () {
                  g.cancel(), f.splice(f.indexOf(c, 1));
                }).catch(hn);
              }
              try {
                $r(
                  e,
                  i,
                  {
                    type: "postrobot_message_request",
                    hash: l,
                    name: r,
                    data: t,
                    fireAndForget: s,
                  },
                  { on: it, send: n }
                );
              } catch (n) {
                throw new Error(
                  "Send request message failed for " +
                    u +
                    " in " +
                    N() +
                    "\n\n" +
                    yn(n)
                );
              }
              return s ? c.resolve() : c;
            });
        };
        function st(n, e, r) {
          return Yr(n, e, r, { on: it, send: ut });
        }
        function ct(n, e, r) {
          return Kr(n, e, r, { on: it, send: ut });
        }
        function lt(n) {
          return new Hr({ send: ut, win: n });
        }
        function dt(n) {
          return Hr.toProxyWindow(n, { send: ut });
        }
        function ft() {
          var n, e, r;
          Lr().initialized ||
            ((Lr().initialized = !0),
            (function (n) {
              var e = n.on,
                r = n.send,
                t = Lr();
              t.receiveMessage =
                t.receiveMessage ||
                function (n) {
                  return ot(n, { on: e, send: r });
                };
            })({ on: it, send: ut }),
            (e = (n = { on: it, send: ut }).on),
            (r = n.send),
            xr().getOrSet("postMessageListener", function () {
              return ue(window, "message", function (n) {
                !(function (n, e) {
                  var r = e.on,
                    t = e.send,
                    o = n.source || n.sourceElement,
                    i = n.origin || (n.originalEvent && n.originalEvent.origin),
                    a = n.data;
                  if (("null" === i && (i = "file://"), o)) {
                    if (!i)
                      throw new Error("Post message did not have origin domain");
                    ot({ source: o, origin: i, data: a }, { on: r, send: t });
                  }
                })(n, { on: e, send: r });
              });
            }),
            (function (n) {
              var e = n.on,
                r = n.send;
              xr("builtinListeners").getOrSet("helloListener", function () {
                var n = e("postrobot_hello", { domain: "*" }, function (n) {
                    return (
                      Ar(n.source, { domain: n.origin }), { instanceID: kr() }
                    );
                  }),
                  t = q();
                return t && Mr(t, { send: r }).catch(hn), n;
              });
            })({ on: it, send: ut }));
        }
        function pt() {
          var n;
          !(function () {
            for (
              var n = xr("responseListeners"), e = 0, r = n.keys();
              e < r.length;
              e++
            ) {
              var t = r[e],
                o = n.get(t);
              o && (o.cancelled = !0), n.del(t);
            }
          })(),
            (n = xr().get("postMessageListener")) && n.cancel(),
            delete window.__post_robot_10_0_31__;
        }
        var ht = !0;
        function mt(n) {
          for (var e = 0, r = Pr("requestPromises").get(n, []); e < r.length; e++)
            r[e]
              .reject(
                new Error(
                  "Window " +
                    (U(n) ? "closed" : "cleaned up") +
                    " before response"
                )
              )
              .catch(hn);
        }
        function yt(n) {
          if ((void 0 === n && (n = window), !S(n)))
            throw new Error("Can not get global for window on different domain");
          return n.__zoid_9_0_42__ || (n.__zoid_9_0_42__ = {}), n.__zoid_9_0_42__;
        }
        function gt(n) {
          return {
            get: function () {
              var e = this;
              return E.try(function () {
                if (e.source && e.source !== window)
                  throw new Error(
                    "Can not call get on proxy object from a remote window"
                  );
                return n;
              });
            },
          };
        }
        ft();
        var wt = O;
        function vt(n, e, r, t, o) {
          if (!n.hasOwnProperty(r)) return t;
          var i = n[r];
          return "function" == typeof i.childDecorate
            ? i.childDecorate({
                value: t,
                close: o.close,
                focus: o.focus,
                onError: o.onError,
                onProps: o.onProps,
                resize: o.resize,
                getParent: o.getParent,
                getParentDomain: o.getParentDomain,
                show: o.show,
                hide: o.hide,
              })
            : t;
        }
        function Ct(n) {
          return pn(
            Ct,
            function () {
              if (!n) throw new Error("No window name");
              var e = n.split("__"),
                r = e[1],
                t = e[2],
                o = e[3];
              if ("zoid" !== r)
                throw new Error("Window not rendered by zoid - got " + r);
              if (!t) throw new Error("Expected component name");
              if (!o) throw new Error("Expected encoded payload");
              try {
                return JSON.parse(on(o));
              } catch (n) {
                throw new Error(
                  "Can not decode window name payload: " + o + ": " + yn(n)
                );
              }
            },
            [n]
          );
        }
        function bt() {
          try {
            return Ct(window.name);
          } catch (n) {}
        }
        function Lt() {
          return E.try(function () {
            window.focus();
          });
        }
        function Et() {
          return E.try(function () {
            window.close();
          });
        }
        function xt(n, e, r) {
          return E.try(function () {
            return "function" == typeof n.queryParam
              ? n.queryParam({ value: r })
              : "string" == typeof n.queryParam
              ? n.queryParam
              : e;
          });
        }
        function Ot(n, e, r) {
          return E.try(function () {
            return "function" == typeof n.queryValue && zn(r)
              ? n.queryValue({ value: r })
              : r;
          });
        }
        function Tt(n, e, r) {
          void 0 === e && (e = {}), void 0 === r && (r = window);
          var t,
            o,
            i,
            a = n.propsDef,
            u = n.containerTemplate,
            s = n.prerenderTemplate,
            c = n.tag,
            l = n.name,
            d = n.attributes,
            f = n.dimensions,
            p = n.autoResize,
            m = n.url,
            y = n.domain,
            g = new E(),
            w = [],
            v = jn(),
            C = {},
            b = e.event ? e.event : _n(),
            L = e.props ? e.props : {},
            x = !0,
            O = e.onError,
            T = e.getProxyContainer,
            _ = e.show,
            P = e.hide,
            k = e.close,
            A = e.renderContainer,
            M = e.getProxyWindow,
            F = e.setProxyWin,
            R = e.openFrame,
            j = e.openPrerenderFrame,
            I = e.prerender,
            D = e.open,
            B = e.openPrerender,
            W = e.watchForUnload,
            q = function (n) {
              for (var e = {}, r = 0, t = Object.keys(L); r < t.length; r++) {
                var o = t[r],
                  i = a[o];
                (i && !1 === i.sendToChild) ||
                  (i && i.sameDomain && !V(n, N(window))) ||
                  (e[o] = L[o]);
              }
              return e;
            },
            H = function () {
              return M
                ? M()
                : E.try(function () {
                    var n = L.window;
                    if (n) {
                      var e = dt(n);
                      return (
                        v.register(function () {
                          return n.close();
                        }),
                        e
                      );
                    }
                    return new Hr({ send: ut });
                  });
            },
            X = function (n) {
              return T
                ? T(n)
                : E.try(function () {
                    return (
                      (e = n),
                      new E(function (n, r) {
                        var t = wn(e),
                          o = Qn(e);
                        if (o) return n(o);
                        if (Dn())
                          return r(
                            new Error(
                              "Document is ready and element " +
                                t +
                                " does not exist"
                            )
                          );
                        var i = setInterval(function () {
                          return (o = Qn(e))
                            ? (clearInterval(i), n(o))
                            : Dn()
                            ? (clearInterval(i),
                              r(
                                new Error(
                                  "Document is ready and element " +
                                    t +
                                    " does not exist"
                                )
                              ))
                            : void 0;
                        }, 10);
                      })
                    );
                    var e;
                  }).then(function (n) {
                    return (
                      we(n) &&
                        (n = (function (n) {
                          var e = (function (n) {
                            var e = (function (n) {
                              for (; n.parentNode; ) n = n.parentNode;
                              if (we(n)) return n;
                            })(n);
                            if (e.host) return e.host;
                          })(n);
                          if (!e) throw new Error("Element is not in shadow dom");
                          if (we(e))
                            throw new Error("Host element is also in shadow dom");
                          var r = "shadow-slot-" + an(),
                            t = document.createElement("slot");
                          t.setAttribute("name", r), n.appendChild(t);
                          var o = document.createElement("div");
                          return o.setAttribute("slot", r), e.appendChild(o), o;
                        })(n)),
                      gt(n)
                    );
                  });
            },
            $ = function (n, e, r, t) {
              var o = st(n, r, q(r)),
                i =
                  e === N() ? { type: "uid", uid: t } : { type: "raw", value: o };
              if ("uid" === i.type) {
                var a = yt(window);
                (a.props = a.props || {}),
                  (a.props[t] = o),
                  v.register(function () {
                    delete a.props[t];
                  });
              }
              return i;
            },
            Q = function (n) {
              return F
                ? F(n)
                : E.try(function () {
                    t = n;
                  });
            },
            nn = function () {
              return _
                ? _()
                : E.try(function () {
                    if (((x = !0), o)) return o.get().then(pe);
                  });
            },
            en = function () {
              return P
                ? P()
                : E.try(function () {
                    if (((x = !1), o)) return o.get().then(he);
                  });
            },
            rn = function () {
              return "function" == typeof m ? m({ props: L }) : m;
            },
            on = function () {
              return y && "string" == typeof y ? y : Y(rn());
            },
            un = function () {
              return y && Fn(y) ? y : on();
            },
            sn = function (n, e) {
              var r = e.windowName;
              return R
                ? R(n, { windowName: r })
                : E.try(function () {
                    if (n === wt.IFRAME)
                      return gt(
                        ae({ attributes: h({ name: r, title: l }, d.iframe) })
                      );
                  });
            },
            cn = function (n) {
              return j
                ? j(n)
                : E.try(function () {
                    if (n === wt.IFRAME)
                      return gt(
                        ae({
                          attributes: h(
                            {
                              name:
                                "__zoid_prerender_frame__" +
                                l +
                                "_" +
                                an() +
                                "__",
                              title: "prerender__" + l,
                            },
                            d.iframe
                          ),
                        })
                      );
                  });
            },
            ln = function (n, e, r) {
              return B
                ? B(n, e, r)
                : E.try(function () {
                    if (n === wt.IFRAME) {
                      if (!r)
                        throw new Error("Expected proxy frame to be passed");
                      return r.get().then(function (n) {
                        return (
                          v.register(function () {
                            return me(n);
                          }),
                          ie(n)
                            .then(function (n) {
                              return z(n);
                            })
                            .then(function (n) {
                              return dt(n);
                            })
                        );
                      });
                    }
                    if (n === wt.POPUP) return e;
                    throw new Error("No render target found");
                  });
            },
            dn = function () {
              return E.try(function () {
                if (t)
                  return E.all([b.trigger("zoid-focus"), t.focus()]).then(hn);
              });
            },
            fn = function (n, e, r, t) {
              if (e === N(window)) {
                var o = yt(window);
                return (
                  (o.windows = o.windows || {}),
                  (o.windows[r] = window),
                  v.register(function () {
                    delete o.windows[r];
                  }),
                  { type: "global", uid: r }
                );
              }
              return t === wt.POPUP
                ? { type: "opener" }
                : { type: "parent", distance: G(window) };
            },
            pn = function (n) {
              return E.try(function () {
                (i = n),
                  g.resolve(),
                  v.register(function () {
                    return n.close.fireAndForget().catch(hn);
                  });
              });
            },
            gn = function (n) {
              var e = n.width,
                r = n.height;
              return E.try(function () {
                b.trigger("zoid-resize", { width: e, height: r });
              });
            },
            Cn = function (n) {
              return E.try(function () {
                return b.trigger("zoid-destroy");
              })
                .catch(hn)
                .then(function () {
                  return v.all();
                })
                .then(function () {
                  g.asyncReject(n || new Error("Component destroyed"));
                });
            },
            bn = function () {
              return k
                ? k()
                : E.try(function () {
                    return b.trigger("zoid-close");
                  }).then(function () {
                    return Cn(new Error("Window closed"));
                  });
            },
            Ln = function (n, e) {
              var r = e.proxyWin,
                t = e.proxyFrame,
                o = e.windowName;
              return D
                ? D(n, { proxyWin: r, proxyFrame: t, windowName: o })
                : E.try(function () {
                    if (n === wt.IFRAME) {
                      if (!t)
                        throw new Error("Expected proxy frame to be passed");
                      return t.get().then(function (n) {
                        return ie(n).then(function (e) {
                          var r,
                            t,
                            o,
                            i =
                              ((r = n),
                              (t = mn((t = bn))),
                              ye(r)
                                ? t()
                                : (o = Tn(function () {
                                    ye(r) && (o.cancel(), t());
                                  }, 50)),
                              {
                                cancel: function () {
                                  o && o.cancel();
                                },
                              });
                          return (
                            v.register(function () {
                              return i.cancel();
                            }),
                            v.register(function () {
                              return me(n);
                            }),
                            v.register(function () {
                              return mt(e);
                            }),
                            e
                          );
                        });
                      });
                    }
                    if (n === wt.POPUP) {
                      var e = f.width,
                        r = f.height;
                      (e = Oe(e, window.outerWidth)),
                        (r = Oe(r, window.outerWidth));
                      var i = re(
                        "",
                        h({ name: o, width: e, height: r }, d.popup)
                      );
                      return (
                        v.register(function () {
                          return J(i);
                        }),
                        v.register(function () {
                          return mt(i);
                        }),
                        i
                      );
                    }
                    throw new Error("No render target found");
                  }).then(function (n) {
                    return r.setWindow(n, { send: ut }), r;
                  });
            },
            En = function () {
              return E.try(function () {
                var n = ue(
                    window,
                    "unload",
                    mn(function () {
                      Cn(new Error("Window navigated away"));
                    })
                  ),
                  e = K(r, Cn, 3e3);
                if ((v.register(e.cancel), v.register(n.cancel), W)) return W();
              });
            },
            xn = function (n) {
              var e = !1;
              return n
                .isClosed()
                .then(function (r) {
                  return r
                    ? ((e = !0), bn())
                    : E.delay(200)
                        .then(function () {
                          return n.isClosed();
                        })
                        .then(function (n) {
                          if (n) return (e = !0), bn();
                        });
                })
                .then(function () {
                  return e;
                });
            },
            On = function (n) {
              return O
                ? O(n)
                : E.try(function () {
                    if (-1 === w.indexOf(n))
                      return (
                        w.push(n), g.asyncReject(n), b.trigger("zoid-error", n)
                      );
                  });
            };
          pn.onError = On;
          var Pn = function (n, e) {
              return n({
                container: e.container,
                context: e.context,
                uid: e.uid,
                doc: e.doc,
                frame: e.frame,
                prerenderFrame: e.prerenderFrame,
                focus: dn,
                close: bn,
                state: C,
                props: L,
                tag: c,
                dimensions: f,
                event: b,
              });
            },
            kn = function (n, e) {
              var r = e.context,
                t = e.uid;
              return I
                ? I(n, { context: r, uid: t })
                : E.try(function () {
                    if (s) {
                      var e = n.getWindow();
                      if (
                        e &&
                        S(e) &&
                        (function (n) {
                          try {
                            if (!n.location.href) return !0;
                            if ("about:blank" === n.location.href) return !0;
                          } catch (n) {}
                          return !1;
                        })(e)
                      ) {
                        var o = (e = z(e)).document,
                          i = Pn(s, { context: r, uid: t, doc: o });
                        if (i) {
                          if (i.ownerDocument !== o)
                            throw new Error(
                              "Expected prerender template to have been created with document from child window"
                            );
                          te(e, i);
                          var a = p.width,
                            u = void 0 !== a && a,
                            c = p.height,
                            l = void 0 !== c && c,
                            d = p.element,
                            f = void 0 === d ? "body" : d;
                          (f = Qn(f, o)) &&
                            (u || l) &&
                            ge(
                              f,
                              function (n) {
                                gn({
                                  width: u ? n.width : void 0,
                                  height: l ? n.height : void 0,
                                });
                              },
                              { width: u, height: l, win: e }
                            );
                        }
                      }
                    }
                  });
            },
            An = function (n, e) {
              var r = e.proxyFrame,
                t = e.proxyPrerenderFrame,
                i = e.context,
                a = e.uid;
              return A
                ? A(n, {
                    proxyFrame: r,
                    proxyPrerenderFrame: t,
                    context: i,
                    uid: a,
                  })
                : E.hash({
                    container: n.get(),
                    frame: r ? r.get() : null,
                    prerenderFrame: t ? t.get() : null,
                  }).then(function (n) {
                    var e = n.container,
                      r = Pn(u, {
                        context: i,
                        uid: a,
                        container: e,
                        frame: n.frame,
                        prerenderFrame: n.prerenderFrame,
                        doc: document,
                      });
                    if (r)
                      return (
                        x || he(r),
                        Jn(e, r),
                        v.register(function () {
                          return me(r);
                        }),
                        (o = gt(r))
                      );
                  });
            },
            Mn = function () {
              return {
                state: C,
                event: b,
                close: bn,
                focus: dn,
                resize: gn,
                onError: On,
                updateProps: Sn,
                show: nn,
                hide: en,
              };
            },
            Nn = function (n, e) {
              void 0 === e && (e = !1);
              var r = Mn();
              !(function (n, e, r, t, o) {
                void 0 === o && (o = !1), vn(e, (r = r || {}));
                for (
                  var i = o ? [] : [].concat(Object.keys(n)),
                    a = 0,
                    u = Object.keys(r);
                  a < u.length;
                  a++
                ) {
                  var s = u[a];
                  -1 === i.indexOf(s) && i.push(s);
                }
                for (
                  var c = [],
                    l = t.state,
                    d = t.close,
                    f = t.focus,
                    p = t.event,
                    h = t.onError,
                    m = 0;
                  m < i.length;
                  m++
                ) {
                  var y = i[m],
                    g = n[y],
                    w = r[y];
                  if (g) {
                    var v = g.alias;
                    if (
                      (v && (!zn(w) && zn(r[v]) && (w = r[v]), c.push(v)),
                      g.value &&
                        (w = g.value({
                          props: e,
                          state: l,
                          close: d,
                          focus: f,
                          event: p,
                          onError: h,
                        })),
                      !zn(w) &&
                        g.default &&
                        (w = g.default({
                          props: e,
                          state: l,
                          close: d,
                          focus: f,
                          event: p,
                          onError: h,
                        })),
                      zn(w) &&
                        ("array" === g.type
                          ? !Array.isArray(w)
                          : typeof w !== g.type))
                    )
                      throw new TypeError(
                        "Prop is not of type " + g.type + ": " + y
                      );
                    e[y] = w;
                  }
                }
                for (var C = 0; C < c.length; C++) delete e[c[C]];
                for (var b = 0, L = Object.keys(e); b < L.length; b++) {
                  var E = L[b],
                    x = n[E],
                    O = e[E];
                  x &&
                    zn(O) &&
                    x.decorate &&
                    (e[E] = x.decorate({
                      value: O,
                      props: e,
                      state: l,
                      close: d,
                      focus: f,
                      event: p,
                      onError: h,
                    }));
                }
                for (var T = 0, _ = Object.keys(n); T < _.length; T++) {
                  var P = _[T];
                  if (!1 !== n[P].required && !zn(e[P]))
                    throw new Error('Expected prop "' + P + '" to be defined');
                }
              })(a, L, n, r, e);
            },
            Sn = function (n) {
              return (
                Nn(n, !0),
                g.then(function () {
                  var n = t;
                  if (i && n)
                    return i.updateProps(q(un())).catch(function (e) {
                      return xn(n).then(function (n) {
                        if (!n) throw e;
                      });
                    });
                })
              );
            };
          return {
            init: function () {
              b.on("zoid-render", function () {
                return L.onRender();
              }),
                b.on("zoid-display", function () {
                  return L.onDisplay();
                }),
                b.on("zoid-rendered", function () {
                  return L.onRendered();
                }),
                b.on("zoid-close", function () {
                  return L.onClose();
                }),
                b.on("zoid-destroy", function () {
                  return L.onDestroy();
                }),
                b.on("zoid-resize", function () {
                  return L.onResize();
                }),
                b.on("zoid-focus", function () {
                  return L.onFocus();
                }),
                b.on("zoid-props", function (n) {
                  return L.onProps(n);
                }),
                b.on("zoid-error", function (n) {
                  return L && L.onError
                    ? L.onError(n)
                    : g.reject(n).then(function () {
                        setTimeout(function () {
                          throw n;
                        }, 1);
                      });
                }),
                v.register(b.reset);
            },
            render: function (n, e, r) {
              return E.try(function () {
                var o = "zoid-" + c + "-" + an(),
                  i = un(),
                  u = on();
                !(function (n, e, r) {
                  if (n !== window) {
                    if (!Z(window, n))
                      throw new Error("Can only renderTo an adjacent frame");
                    var t = N();
                    if (!V(e, t) && !S(n))
                      throw new Error(
                        "Can not render remotely to " +
                          e.toString() +
                          " - can only render to " +
                          t
                      );
                    if (r && "string" != typeof r)
                      throw new Error(
                        "Container passed to renderTo must be a string selector, got " +
                          typeof r +
                          " }"
                      );
                  }
                })(n, i, e);
                var s = E.try(function () {
                    if (n !== window)
                      return (function (n, e) {
                        for (
                          var r = {}, t = 0, o = Object.keys(L);
                          t < o.length;
                          t++
                        ) {
                          var i = o[t],
                            u = a[i];
                          u && u.allowDelegate && (r[i] = L[i]);
                        }
                        var s = ut(e, "zoid_delegate_" + l, {
                          overrides: {
                            props: r,
                            event: b,
                            close: bn,
                            onError: On,
                          },
                        })
                          .then(function (n) {
                            var r = n.data.parent;
                            return (
                              v.register(function () {
                                if (!U(e)) return r.destroy();
                              }),
                              r.getDelegateOverrides()
                            );
                          })
                          .catch(function (n) {
                            throw new Error(
                              "Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" +
                                yn(n)
                            );
                          });
                        return (
                          (T = function () {
                            for (
                              var n = arguments.length, e = new Array(n), r = 0;
                              r < n;
                              r++
                            )
                              e[r] = arguments[r];
                            return s.then(function (n) {
                              return n.getProxyContainer.apply(n, e);
                            });
                          }),
                          (A = function () {
                            for (
                              var n = arguments.length, e = new Array(n), r = 0;
                              r < n;
                              r++
                            )
                              e[r] = arguments[r];
                            return s.then(function (n) {
                              return n.renderContainer.apply(n, e);
                            });
                          }),
                          (_ = function () {
                            for (
                              var n = arguments.length, e = new Array(n), r = 0;
                              r < n;
                              r++
                            )
                              e[r] = arguments[r];
                            return s.then(function (n) {
                              return n.show.apply(n, e);
                            });
                          }),
                          (P = function () {
                            for (
                              var n = arguments.length, e = new Array(n), r = 0;
                              r < n;
                              r++
                            )
                              e[r] = arguments[r];
                            return s.then(function (n) {
                              return n.hide.apply(n, e);
                            });
                          }),
                          (W = function () {
                            for (
                              var n = arguments.length, e = new Array(n), r = 0;
                              r < n;
                              r++
                            )
                              e[r] = arguments[r];
                            return s.then(function (n) {
                              return n.watchForUnload.apply(n, e);
                            });
                          }),
                          n === wt.IFRAME
                            ? ((M = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    r = 0;
                                  r < n;
                                  r++
                                )
                                  e[r] = arguments[r];
                                return s.then(function (n) {
                                  return n.getProxyWindow.apply(n, e);
                                });
                              }),
                              (R = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    r = 0;
                                  r < n;
                                  r++
                                )
                                  e[r] = arguments[r];
                                return s.then(function (n) {
                                  return n.openFrame.apply(n, e);
                                });
                              }),
                              (j = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    r = 0;
                                  r < n;
                                  r++
                                )
                                  e[r] = arguments[r];
                                return s.then(function (n) {
                                  return n.openPrerenderFrame.apply(n, e);
                                });
                              }),
                              (I = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    r = 0;
                                  r < n;
                                  r++
                                )
                                  e[r] = arguments[r];
                                return s.then(function (n) {
                                  return n.prerender.apply(n, e);
                                });
                              }),
                              (D = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    r = 0;
                                  r < n;
                                  r++
                                )
                                  e[r] = arguments[r];
                                return s.then(function (n) {
                                  return n.open.apply(n, e);
                                });
                              }),
                              (B = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    r = 0;
                                  r < n;
                                  r++
                                )
                                  e[r] = arguments[r];
                                return s.then(function (n) {
                                  return n.openPrerender.apply(n, e);
                                });
                              }))
                            : n === wt.POPUP &&
                              (F = function () {
                                for (
                                  var n = arguments.length,
                                    e = new Array(n),
                                    r = 0;
                                  r < n;
                                  r++
                                )
                                  e[r] = arguments[r];
                                return s.then(function (n) {
                                  return n.setProxyWin.apply(n, e);
                                });
                              }),
                          s
                        );
                      })(r, n);
                  }),
                  d = L.window,
                  f = En(),
                  p = (function (n, e) {
                    var r = {},
                      t = Object.keys(e);
                    return E.all(
                      t.map(function (t) {
                        var o = n[t];
                        if (o)
                          return E.resolve()
                            .then(function () {
                              var n = e[t];
                              if (n && o.queryParam) return n;
                            })
                            .then(function (n) {
                              if (null != n)
                                return E.all([xt(o, t, n), Ot(o, 0, n)]).then(
                                  function (n) {
                                    var e,
                                      i = n[0],
                                      a = n[1];
                                    if ("boolean" == typeof a) e = a.toString();
                                    else if ("string" == typeof a)
                                      e = a.toString();
                                    else if ("object" == typeof a && null !== a) {
                                      if ("json" === o.serialization)
                                        e = JSON.stringify(a);
                                      else if ("base64" === o.serialization)
                                        e = btoa(JSON.stringify(a));
                                      else if (
                                        "dotify" === o.serialization ||
                                        !o.serialization
                                      ) {
                                        e = (function n(e, r, t) {
                                          for (var o in (void 0 === r && (r = ""),
                                          void 0 === t && (t = {}),
                                          (r = r ? r + "." : r),
                                          e))
                                            e.hasOwnProperty(o) &&
                                              null != e[o] &&
                                              "function" != typeof e[o] &&
                                              (e[o] &&
                                              Array.isArray(e[o]) &&
                                              e[o].length &&
                                              e[o].every(function (n) {
                                                return "object" != typeof n;
                                              })
                                                ? (t["" + r + o + "[]"] = e[
                                                    o
                                                  ].join(","))
                                                : e[o] && "object" == typeof e[o]
                                                ? (t = n(e[o], "" + r + o, t))
                                                : (t["" + r + o] = e[
                                                    o
                                                  ].toString()));
                                          return t;
                                        })(a, t);
                                        for (
                                          var u = 0, s = Object.keys(e);
                                          u < s.length;
                                          u++
                                        ) {
                                          var c = s[u];
                                          r[c] = e[c];
                                        }
                                        return;
                                      }
                                    } else
                                      "number" == typeof a && (e = a.toString());
                                    r[i] = e;
                                  }
                                );
                            });
                      })
                    ).then(function () {
                      return r;
                    });
                  })(a, L).then(function (n) {
                    return Gn(
                      (function (n) {
                        if (0 !== Y(n).indexOf("mock:")) return n;
                        throw new Error(
                          "Mock urls not supported out of test mode"
                        );
                      })(rn()),
                      { query: n }
                    );
                  }),
                  h = b.trigger("zoid-render"),
                  m = X(e),
                  y = H(),
                  w = y.then(function (e) {
                    return (function (n) {
                      var e,
                        r,
                        t,
                        o,
                        i,
                        a,
                        u,
                        s,
                        d =
                          ((o = (t =
                            void 0 ===
                            (e = {
                              proxyWin: n.proxyWin,
                              childDomain: n.childDomain,
                              domain: n.domain,
                              target: n.target,
                              context: n.context,
                              uid: n.uid,
                            })
                              ? {}
                              : e).proxyWin),
                          (i = t.childDomain),
                          (a = t.domain),
                          void 0 === t.target && window,
                          {
                            uid: (s = t.uid),
                            context: (u = t.context),
                            tag: c,
                            version: "9_0_42",
                            childDomain: i,
                            parentDomain: N(window),
                            parent: fn(0, i, s, u),
                            props: $(o, i, a, s),
                            exports: st(
                              o,
                              a,
                              ((r = o),
                              {
                                init: pn,
                                close: bn,
                                checkClose: function () {
                                  return xn(r);
                                },
                                resize: gn,
                                onError: On,
                                show: nn,
                                hide: en,
                              })
                            ),
                          });
                      return "__zoid__" + l + "__" + tn(JSON.stringify(d)) + "__";
                    })({
                      proxyWin: e,
                      childDomain: u,
                      domain: i,
                      target: n,
                      context: r,
                      uid: o,
                    });
                  }),
                  C = w.then(function (n) {
                    return sn(r, { windowName: n });
                  }),
                  x = cn(r),
                  O = E.hash({
                    proxyContainer: m,
                    proxyFrame: C,
                    proxyPrerenderFrame: x,
                  })
                    .then(function (n) {
                      return An(n.proxyContainer, {
                        context: r,
                        uid: o,
                        proxyFrame: n.proxyFrame,
                        proxyPrerenderFrame: n.proxyPrerenderFrame,
                      });
                    })
                    .then(function (n) {
                      return n;
                    }),
                  k = E.hash({ windowName: w, proxyFrame: C, proxyWin: y }).then(
                    function (n) {
                      var e = n.proxyWin;
                      return d
                        ? e
                        : Ln(r, {
                            windowName: n.windowName,
                            proxyWin: e,
                            proxyFrame: n.proxyFrame,
                          });
                    }
                  ),
                  z = E.hash({ proxyWin: k, proxyPrerenderFrame: x }).then(
                    function (n) {
                      return ln(r, n.proxyWin, n.proxyPrerenderFrame);
                    }
                  ),
                  q = k.then(function (n) {
                    return (t = n), Q(n);
                  }),
                  G = E.hash({ proxyPrerenderWin: z, state: q }).then(function (
                    n
                  ) {
                    return kn(n.proxyPrerenderWin, { context: r, uid: o });
                  }),
                  K = E.hash({ proxyWin: k, windowName: w }).then(function (n) {
                    if (d) return n.proxyWin.setName(n.windowName);
                  }),
                  J = E.hash({
                    proxyWin: k,
                    builtUrl: p,
                    windowName: K,
                    prerender: G,
                  }).then(function (n) {
                    return n.proxyWin.setLocation(n.builtUrl);
                  }),
                  dn = k.then(function (n) {
                    !(function n(e) {
                      var r = !1;
                      return (
                        v.register(function () {
                          r = !0;
                        }),
                        E.delay(2e3)
                          .then(function () {
                            return e.isClosed();
                          })
                          .then(function (t) {
                            return t ? bn() : r ? void 0 : n(e);
                          })
                      );
                    })(n);
                  }),
                  hn = E.hash({ container: O, prerender: G }).then(function () {
                    return b.trigger("zoid-display");
                  }),
                  mn = k.then(function (n) {}),
                  wn = J.then(function () {
                    return E.try(function () {
                      var n = L.timeout;
                      if (n)
                        return g.timeout(
                          n,
                          new Error(
                            "Loading component timed out after " +
                              n +
                              " milliseconds"
                          )
                        );
                    });
                  }),
                  vn = g.then(function () {
                    return b.trigger("zoid-rendered");
                  });
                return E.hash({
                  initPromise: g,
                  buildUrlPromise: p,
                  onRenderPromise: h,
                  getProxyContainerPromise: m,
                  openFramePromise: C,
                  openPrerenderFramePromise: x,
                  renderContainerPromise: O,
                  openPromise: k,
                  openPrerenderPromise: z,
                  setStatePromise: q,
                  prerenderPromise: G,
                  loadUrlPromise: J,
                  buildWindowNamePromise: w,
                  setWindowNamePromise: K,
                  watchForClosePromise: dn,
                  onDisplayPromise: hn,
                  openBridgePromise: mn,
                  runTimeoutPromise: wn,
                  onRenderedPromise: vn,
                  delegatePromise: s,
                  watchForUnloadPromise: f,
                });
              })
                .catch(function (n) {
                  return E.all([On(n), Cn(n)]).then(
                    function () {
                      throw n;
                    },
                    function () {
                      throw n;
                    }
                  );
                })
                .then(hn);
            },
            destroy: Cn,
            setProps: Nn,
            getHelpers: Mn,
            getDelegateOverrides: function () {
              return E.try(function () {
                return {
                  getProxyContainer: X,
                  show: nn,
                  hide: en,
                  renderContainer: An,
                  getProxyWindow: H,
                  watchForUnload: En,
                  openFrame: sn,
                  openPrerenderFrame: cn,
                  prerender: kn,
                  open: Ln,
                  openPrerender: ln,
                  setProxyWin: Q,
                };
              });
            },
          };
        }
        var _t = {
            register: function (n, e, r, t) {
              var o = t.React,
                i = t.ReactDOM;
              return (function (n) {
                var e, t;
                function a() {
                  return n.apply(this, arguments) || this;
                }
                (t = n),
                  ((e = a).prototype = Object.create(t.prototype)),
                  (e.prototype.constructor = e),
                  (e.__proto__ = t);
                var u = a.prototype;
                return (
                  (u.render = function () {
                    return o.createElement("div", null);
                  }),
                  (u.componentDidMount = function () {
                    var n = i.findDOMNode(this),
                      e = r(vn({}, this.props));
                    e.render(n, wt.IFRAME), this.setState({ parent: e });
                  }),
                  (u.componentDidUpdate = function () {
                    this.state &&
                      this.state.parent &&
                      this.state.parent.updateProps(vn({}, this.props)).catch(hn);
                  }),
                  a
                );
              })(o.Component);
            },
          },
          Pt = {
            register: function (n, e, r, t) {
              return t.component(n, {
                render: function (n) {
                  return n("div");
                },
                inheritAttrs: !1,
                mounted: function () {
                  var n = this.$el;
                  (this.parent = r(h({}, this.$attrs))),
                    this.parent.render(n, wt.IFRAME);
                },
                watch: {
                  $attrs: {
                    handler: function () {
                      this.parent &&
                        this.$attrs &&
                        this.parent.updateProps(h({}, this.$attrs)).catch(hn);
                    },
                    deep: !0,
                  },
                },
              });
            },
          },
          kt = {
            register: function (n, e, r, t) {
              return t.module(n, []).directive(
                n.replace(/-([a-z])/g, function (n) {
                  return n[1].toUpperCase();
                }),
                function () {
                  for (var n = {}, t = 0, o = Object.keys(e); t < o.length; t++)
                    n[o[t]] = "=";
                  return (
                    (n.props = "="),
                    {
                      scope: n,
                      restrict: "E",
                      controller: [
                        "$scope",
                        "$element",
                        function (n, e) {
                          function t() {
                            if (
                              "$apply" !== n.$root.$$phase &&
                              "$digest" !== n.$root.$$phase
                            )
                              try {
                                n.$apply();
                              } catch (n) {}
                          }
                          var o = function () {
                              return Sn(n.props, function (n) {
                                return "function" == typeof n
                                  ? function () {
                                      var e = n.apply(this, arguments);
                                      return t(), e;
                                    }
                                  : n;
                              });
                            },
                            i = r(o());
                          i.render(e[0], wt.IFRAME),
                            n.$watch(function () {
                              i.updateProps(o()).catch(hn);
                            });
                        },
                      ],
                    }
                  );
                }
              );
            },
          },
          At = {
            register: function (n, e, r, t) {
              var o = t.NgModule,
                i = t.ElementRef,
                a = t.NgZone,
                u = function (n) {
                  return Sn(h({}, n.internalProps, {}, n.props), function (e) {
                    return "function" == typeof e
                      ? function () {
                          var r = arguments,
                            t = this;
                          return n.zone.run(function () {
                            return e.apply(t, r);
                          });
                        }
                      : e;
                  });
                },
                s = (0, t.Component)({
                  selector: n,
                  template: "<div></div>",
                  inputs: ["props"],
                }).Class({
                  constructor: [
                    i,
                    a,
                    function (n, e) {
                      (this._props = {}), (this.elementRef = n), (this.zone = e);
                    },
                  ],
                  ngOnInit: function () {
                    var n = this.elementRef.nativeElement;
                    (this.parent = r(u(this))), this.parent.render(n, wt.IFRAME);
                  },
                  ngDoCheck: function () {
                    this.parent &&
                      !(function (n, e) {
                        var r = {};
                        for (var t in n)
                          if (n.hasOwnProperty(t) && ((r[t] = !0), n[t] !== e[t]))
                            return !1;
                        for (var o in e) if (!r[o]) return !1;
                        return !0;
                      })(this._props, this.props) &&
                      ((this._props = h({}, this.props)),
                      this.parent.updateProps(u(this)));
                  },
                });
              return o({ declarations: [s], exports: [s] }).Class({
                constructor: function () {},
              });
            },
          };
        function Mt(n) {
          var e = n.uid,
            r = n.frame,
            t = n.prerenderFrame,
            o = n.doc,
            i = n.props,
            a = n.event,
            u = n.dimensions,
            s = u.width,
            c = u.height;
          if (r && t) {
            var l = o.createElement("div");
            l.setAttribute("id", e);
            var d = o.createElement("style");
            return (
              i.cspNonce && d.setAttribute("nonce", i.cspNonce),
              d.appendChild(
                o.createTextNode(
                  "\n            #" +
                    e +
                    " {\n                display: inline-block;\n                position: relative;\n                width: " +
                    s +
                    ";\n                height: " +
                    c +
                    ";\n            }\n\n            #" +
                    e +
                    " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" +
                    e +
                    " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" +
                    e +
                    " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        "
                )
              ),
              l.appendChild(r),
              l.appendChild(t),
              l.appendChild(d),
              t.classList.add("zoid-visible"),
              r.classList.add("zoid-invisible"),
              a.on("zoid-rendered", function () {
                t.classList.remove("zoid-visible"),
                  t.classList.add("zoid-invisible"),
                  r.classList.remove("zoid-invisible"),
                  r.classList.add("zoid-visible"),
                  setTimeout(function () {
                    me(t);
                  }, 1);
              }),
              a.on("zoid-resize", function (n) {
                var e = n.width,
                  r = n.height;
                "number" == typeof e && (l.style.width = xe(e)),
                  "number" == typeof r && (l.style.height = xe(r));
              }),
              l
            );
          }
        }
        function Nt(n) {
          var e = n.doc,
            r = n.props,
            t = e.createElement("html"),
            o = e.createElement("body"),
            i = e.createElement("style"),
            a = e.createElement("div");
          return (
            a.classList.add("spinner"),
            r.cspNonce && i.setAttribute("nonce", r.cspNonce),
            t.appendChild(o),
            o.appendChild(a),
            o.appendChild(i),
            i.appendChild(
              e.createTextNode(
                "\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        "
              )
            ),
            t
          );
        }
        var St = function () {
            return hn;
          },
          zt = function (n) {
            return mn(n.value);
          },
          Ft = jn();
        function Rt(n) {
          var e = (function (n) {
              var e = n.tag,
                r = n.url,
                t = n.domain,
                o = n.bridgeUrl,
                i = n.props,
                a = void 0 === i ? {} : i,
                u = n.dimensions,
                s = void 0 === u ? {} : u,
                c = n.autoResize,
                l = void 0 === c ? {} : c,
                d = n.allowedParentDomains,
                f = void 0 === d ? "*" : d,
                p = n.attributes,
                m = void 0 === p ? {} : p,
                y = n.defaultContext,
                g = void 0 === y ? wt.IFRAME : y,
                w = n.containerTemplate,
                v = void 0 === w ? Mt : w,
                C = n.prerenderTemplate,
                b = void 0 === C ? Nt : C,
                L = n.validate,
                E = n.logger,
                x = void 0 === E ? { info: hn } : E,
                O = e.replace(/-/g, "_"),
                T = s.width,
                _ = void 0 === T ? "300px" : T,
                P = s.height,
                k = void 0 === P ? "150px" : P;
              if (
                ((a = h(
                  {},
                  {
                    window: {
                      type: "object",
                      sendToChild: !1,
                      required: !1,
                      allowDelegate: !0,
                      validate: function (n) {},
                      decorate: function (n) {
                        return dt(n.value);
                      },
                    },
                    timeout: { type: "number", required: !1, sendToChild: !1 },
                    close: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.close;
                      },
                    },
                    focus: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.focus;
                      },
                    },
                    resize: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.resize;
                      },
                    },
                    cspNonce: { type: "string", required: !1 },
                    getParent: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.getParent;
                      },
                    },
                    getParentDomain: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.getParentDomain;
                      },
                    },
                    show: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.show;
                      },
                    },
                    hide: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.hide;
                      },
                    },
                    onDisplay: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      allowDelegate: !0,
                      default: St,
                      decorate: zt,
                    },
                    onRendered: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      default: St,
                      decorate: zt,
                    },
                    onRender: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      default: St,
                      decorate: zt,
                    },
                    onClose: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      allowDelegate: !0,
                      default: St,
                      decorate: zt,
                    },
                    onDestroy: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      allowDelegate: !0,
                      default: St,
                      decorate: zt,
                    },
                    onResize: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      allowDelegate: !0,
                      default: St,
                    },
                    onFocus: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      allowDelegate: !0,
                      default: St,
                    },
                    onError: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      childDecorate: function (n) {
                        return n.onError;
                      },
                    },
                    onProps: {
                      type: "function",
                      required: !1,
                      sendToChild: !1,
                      default: St,
                      childDecorate: function (n) {
                        return n.onProps;
                      },
                    },
                  },
                  {},
                  a
                )),
                !v)
              )
                throw new Error("Container template required");
              return {
                name: O,
                tag: e,
                url: r,
                domain: t,
                bridgeUrl: o,
                propsDef: a,
                dimensions: { width: _, height: k },
                autoResize: l,
                allowedParentDomains: f,
                attributes: m,
                defaultContext: g,
                containerTemplate: v,
                prerenderTemplate: b,
                validate: L,
                logger: x,
              };
            })(n),
            r = e.name,
            t = e.tag,
            o = e.defaultContext,
            i = e.propsDef,
            a = yt(),
            u = {},
            s = function () {
              var n = bt();
              return Boolean(n && n.tag === t && n.childDomain === N());
            },
            c = dn(function () {
              if (s()) {
                if (window.xprops)
                  throw (
                    (delete a.components[t],
                    new Error(
                      "Can not register " +
                        r +
                        " as child - child already registered"
                    ))
                  );
                var n = (function (n) {
                  var e,
                    r = n.propsDef,
                    t = n.autoResize,
                    o = n.allowedParentDomains,
                    i = [],
                    a = bt();
                  if (!a) throw new Error("No child payload found");
                  if ("9_0_42" !== a.version)
                    throw new Error(
                      "Parent window has zoid version " +
                        a.version +
                        ", child window has version 9_0_42"
                    );
                  var u = a.parentDomain,
                    s = a.exports,
                    c = a.context,
                    l = a.props,
                    d = (function (n) {
                      var e,
                        r,
                        t = n.type;
                      if ("opener" === t) return In("opener", k(window));
                      if ("parent" === t && "number" == typeof n.distance)
                        return In(
                          "parent",
                          ((e = window),
                          void 0 === (r = n.distance) && (r = 1),
                          (function (n, e) {
                            void 0 === e && (e = 1);
                            for (var r = n, t = 0; t < e; t++) {
                              if (!r) return;
                              r = P(r);
                            }
                            return r;
                          })(e, G(e) - r))
                        );
                      if ("global" === t && n.uid && "string" == typeof n.uid) {
                        var o = n.uid,
                          i = q(window);
                        if (!i) throw new Error("Can not find ancestor window");
                        for (var a = 0, u = D(i); a < u.length; a++) {
                          var s = u[a];
                          if (S(s)) {
                            var c = yt(s);
                            if (c && c.windows && c.windows[o])
                              return c.windows[o];
                          }
                        }
                      }
                      throw new Error(
                        "Unable to find " + t + " parent component window"
                      );
                    })(a.parent),
                    f = ct(d, u, s),
                    p = f.show,
                    h = f.hide,
                    m = f.close,
                    y = function () {
                      return d;
                    },
                    g = function () {
                      return u;
                    },
                    w = function (n) {
                      i.push(n);
                    },
                    v = function (n) {
                      return E.try(function () {
                        if (f && f.onError) return f.onError(n);
                        throw n;
                      });
                    },
                    C = function (n) {
                      return f.resize.fireAndForget({
                        width: n.width,
                        height: n.height,
                      });
                    },
                    b = function (n, t, o) {
                      void 0 === o && (o = !1);
                      var a = (function (n, e, r, t, o, i) {
                        void 0 === i && (i = !1);
                        for (
                          var a = {}, u = 0, s = Object.keys(r);
                          u < s.length;
                          u++
                        ) {
                          var c = s[u],
                            l = e[c];
                          if (!l || !l.sameDomain || (t === N(window) && S(n))) {
                            var d = vt(e, 0, c, r[c], o);
                            (a[c] = d),
                              l && l.alias && !a[l.alias] && (a[l.alias] = d);
                          }
                        }
                        if (!i)
                          for (var f = 0, p = Object.keys(e); f < p.length; f++) {
                            var h = p[f];
                            r.hasOwnProperty(h) ||
                              (a[h] = vt(e, 0, h, void 0, o));
                          }
                        return a;
                      })(
                        d,
                        r,
                        n,
                        t,
                        {
                          show: p,
                          hide: h,
                          close: m,
                          focus: Lt,
                          onError: v,
                          resize: C,
                          onProps: w,
                          getParent: y,
                          getParentDomain: g,
                        },
                        o
                      );
                      e ? vn(e, a) : (e = a);
                      for (var u = 0; u < i.length; u++) (0, i[u])(e);
                    },
                    L = function (n) {
                      return E.try(function () {
                        return b(n, u, !0);
                      });
                    };
                  return {
                    init: function () {
                      return E.try(function () {
                        return (
                          (function (n, e) {
                            if (!V(n, e))
                              throw new Error(
                                "Can not be rendered by domain: " + e
                              );
                          })(o, u),
                          Sr(d),
                          window.addEventListener("beforeunload", function () {
                            f.checkClose.fireAndForget();
                          }),
                          window.addEventListener("unload", function () {
                            f.checkClose.fireAndForget();
                          }),
                          K(d, function () {
                            Et();
                          }),
                          f.init({ updateProps: L, close: Et })
                        );
                      })
                        .then(function () {
                          return Un()
                            .then(function () {
                              if (document.body) return document.body;
                              throw new Error(
                                "Document ready but document.body not present"
                              );
                            })
                            .then(function () {
                              var n = (function () {
                                  var n = t.width,
                                    e = t.height,
                                    r = t.element,
                                    o = void 0 === r ? "body" : r;
                                  return {
                                    width: void 0 !== n && n,
                                    height: void 0 !== e && e,
                                    element: (o = Qn(o)),
                                  };
                                })(),
                                e = n.width,
                                r = n.height,
                                o = n.element;
                              o &&
                                (e || r) &&
                                c !== wt.POPUP &&
                                ge(
                                  o,
                                  function (n) {
                                    C({
                                      width: e ? n.width : void 0,
                                      height: r ? n.height : void 0,
                                    });
                                  },
                                  { width: e, height: r }
                                );
                            });
                        })
                        .catch(function (n) {
                          v(n);
                        });
                    },
                    getProps: function () {
                      return (
                        e ||
                        (b(
                          (function (n, e, r) {
                            var t,
                              o = r.type,
                              i = r.uid;
                            if ("raw" === o) t = r.value;
                            else if ("uid" === o) {
                              if (!S(n))
                                throw new Error(
                                  "Parent component window is on a different domain - expected " +
                                    N() +
                                    " - can not retrieve props"
                                );
                              var a = yt(n);
                              t = In("props", a && a.props[i]);
                            }
                            if (!t) throw new Error("Could not find props");
                            return ct(n, e, t);
                          })(d, u, l),
                          u
                        ),
                        e)
                      );
                    },
                  };
                })(e);
                return n.init(), n;
              }
            }),
            l = function (n) {
              (n = n || {}).onDestroy = dn(n.onDestroy || hn);
              var r = Tt(e);
              r.init(),
                r.setProps(n),
                Ft.register(function () {
                  r.destroy(new Error("zoid destroyed all components"));
                });
              var t = function (e, t, i) {
                return E.try(function () {
                  if (!X(e)) throw new Error("Must pass window to renderTo");
                  return (function (n, e) {
                    return E.try(function () {
                      if (n.window) return dt(n.window).getType();
                      if (e) {
                        if (e !== wt.IFRAME && e !== wt.POPUP)
                          throw new Error("Unrecognized context: " + e);
                        return e;
                      }
                      return o;
                    });
                  })(n, i);
                })
                  .then(function (n) {
                    return (
                      (t = (function (n, e) {
                        if (e) {
                          if ("string" != typeof e && !$n(e))
                            throw new TypeError(
                              "Expected string or element selector to be passed"
                            );
                          return e;
                        }
                        if (n === wt.POPUP) return "body";
                        throw new Error(
                          "Expected element to be passed to render iframe"
                        );
                      })(n, t)),
                      r.render(e, t, n)
                    );
                  })
                  .catch(function (n) {
                    return r.destroy(n).then(function () {
                      throw n;
                    });
                  });
              };
              return h({}, r.getHelpers(), {
                render: function (n, e) {
                  return t(window, n, e);
                },
                renderTo: function (n, e, r) {
                  return t(n, e, r);
                },
              });
            };
          if (
            (c(),
            it("zoid_allow_delegate_" + r, function () {
              return !0;
            }),
            it("zoid_delegate_" + r, function (n) {
              return { parent: Tt(e, n.data.overrides, n.source) };
            }),
            (a.components = a.components || {}),
            a.components[t])
          )
            throw new Error(
              "Can not register multiple components with the same tag: " + t
            );
          return (
            (a.components[t] = !0),
            {
              init: l,
              driver: function (n, e) {
                var r = { react: _t, angular: kt, vue: Pt, angular2: At };
                if (!r[n])
                  throw new Error("Could not find driver for framework: " + n);
                return u[n] || (u[n] = r[n].register(t, i, l, e)), u[n];
              },
              isChild: s,
              canRenderTo: function (n) {
                return ut(n, "zoid_allow_delegate_" + r)
                  .then(function (n) {
                    return n.data;
                  })
                  .catch(function () {
                    return !1;
                  });
              },
              registerChild: c,
            }
          );
        }
        function jt(n) {
          ft();
          var e = Rt(n),
            r = function (n) {
              return e.init(n);
            };
          (r.driver = function (n, r) {
            return e.driver(n, r);
          }),
            (r.isChild = function () {
              return e.isChild();
            }),
            (r.canRenderTo = function (n) {
              return e.canRenderTo(n);
            });
          var t = e.registerChild();
          return t && (window.xprops = r.xprops = t.getProps()), r;
        }
        function It() {
          var n = Ft.all();
          return (Ft = jn()), n;
        }
        var Dt = It;
        function Bt() {
          return window.xprops && window.xprops.sessionID
            ? window.xprops.sessionID
            : yr();
        }
        function Wt() {
          if (!lr())
            throw new Error(
              "Can only determine if iframe rendering is allowed on paypal domain"
            );
          if (!p()) return !0;
          var n = window.xprops && window.xprops.getParent();
          return !(!n || !S(n));
        }
        function Ut(n, e) {
          for (var r = [], t = 0; t < n.length; t++) {
            var o = n[t].render(e);
            if (o)
              if (Array.isArray(o))
                for (var i = 0; i < o.length; i++) {
                  var a = o[i];
                  a && r.push(a);
                }
              else r.push(o);
          }
          return r;
        }
        var qt = (function () {
            function n(n, e, r) {
              (this.type = "element"),
                (this.name = void 0),
                (this.props = void 0),
                (this.children = void 0),
                (this.onRender = void 0),
                (this.name = n),
                (this.props = e),
                (this.children = r);
              var t = e.onRender;
              "function" == typeof t && ((this.onRender = t), delete e.onRender);
            }
            var e = n.prototype;
            return (
              (e.render = function (n) {
                var e = n(this);
                return this.onRender && this.onRender(e), e;
              }),
              (e.renderChildren = function (n) {
                return Ut(this.children, n);
              }),
              n
            );
          })(),
          Ht = (function () {
            function n(n) {
              (this.type = "fragment"),
                (this.children = void 0),
                (this.children = n);
            }
            return (
              (n.prototype.render = function (n) {
                return Ut(this.children, n);
              }),
              n
            );
          })(),
          Gt = (function () {
            function n(n) {
              (this.type = "text"), (this.text = void 0), (this.text = n);
            }
            return (
              (n.prototype.render = function (n) {
                return n(this);
              }),
              n
            );
          })(),
          Zt = (function () {
            function n(n, e, r) {
              (this.type = "component"),
                (this.component = void 0),
                (this.props = void 0),
                (this.children = void 0),
                (this.component = n),
                (this.props = e),
                (this.children = r);
            }
            var e = n.prototype;
            return (
              (e.renderComponent = function (n) {
                var e = (function (n) {
                  var e = Vt(Array.isArray(n) ? n : [n]);
                  return 1 === e.length
                    ? e[0]
                    : e.length > 1
                    ? new Ht(e)
                    : void 0;
                })(this.component(this.props, this.children));
                if (e) return e.render(n);
              }),
              (e.render = function (n) {
                return n(this);
              }),
              (e.renderChildren = function (n) {
                return Ut(this.children, n);
              }),
              n
            );
          })();
        function Vt(n) {
          for (var e = [], r = 0; r < n.length; r++) {
            var t = n[r];
            if (t)
              if ("string" == typeof t) e.push(new Gt(t));
              else if (Array.isArray(t))
                for (var o = 0, i = Vt(t); o < i.length; o++) e.push(i[o]);
              else {
                if (
                  !t ||
                  ("element" !== t.type &&
                    "text" !== t.type &&
                    "component" !== t.type)
                )
                  throw new TypeError("Unrecognized node type: " + typeof t);
                e.push(t);
              }
          }
          return e;
        }
        var Yt,
          Kt = function (n, e) {
            for (
              var r = arguments.length, t = new Array(r > 2 ? r - 2 : 0), o = 2;
              o < r;
              o++
            )
              t[o - 2] = arguments[o];
            if (((e = e || {}), (t = Vt(t)), "string" == typeof n))
              return new qt(n, e, t);
            if ("function" == typeof n) return new Zt(n, e, t);
            throw new TypeError(
              "Expected jsx element to be a string or a function"
            );
          },
          Xt = function (n, e) {
            if (n && Object.keys(n).length)
              throw new Error("Do not pass props to Fragment");
            return e;
          },
          Jt =
            (((Yt = {}).iframe = function (n, e) {
              var r = e.children[0];
              if (
                1 !== e.children.length ||
                !r ||
                "element" !== r.type ||
                "html" !== r.name
              )
                throw new Error(
                  "Expected only single html element node as child of iframe element"
                );
              n.addEventListener("load", function () {
                var e = n.contentWindow;
                if (!e) throw new Error("Expected frame to have contentWindow");
                for (
                  var t = e.document, o = t.documentElement;
                  o.children && o.children.length;
  
                )
                  o.removeChild(o.children[0]);
                for (var i = r.render($t({ doc: t })); i.children.length; )
                  o.appendChild(i.children[0]);
              });
            }),
            (Yt.script = function (n, e) {
              var r = e.children[0];
              if (1 !== e.children.length || !r || "text" !== r.type)
                throw new Error(
                  "Expected only single text node as child of script element"
                );
              n.text = r.text;
            }),
            (Yt.default = function (n, e, r) {
              for (var t = 0, o = e.renderChildren(r); t < o.length; t++)
                n.appendChild(o[t]);
            }),
            Yt);
        function $t(n) {
          void 0 === n && (n = {});
          var e = n.doc,
            r = void 0 === e ? document : e;
          return function n(e) {
            if ("component" === e.type) return e.renderComponent(n);
            if ("text" === e.type)
              return (function (n, e) {
                return n.createTextNode(e.text);
              })(r, e);
            if ("element" === e.type) {
              var t = (function (n, e) {
                return e.props.el ? e.props.el : n.createElement(e.name);
              })(r, e);
              return (
                (function (n, e) {
                  for (
                    var r = e.props, t = 0, o = Object.keys(r);
                    t < o.length;
                    t++
                  ) {
                    var i = o[t],
                      a = r[i];
                    null != a &&
                      "el" !== i &&
                      "innerHTML" !== i &&
                      (i.match(/^on[A-Z][a-z]/) && "function" == typeof a
                        ? n.addEventListener(i.slice(2).toLowerCase(), a)
                        : "string" == typeof a || "number" == typeof a
                        ? n.setAttribute(i, a.toString())
                        : "boolean" == typeof a &&
                          !0 === a &&
                          n.setAttribute(i, ""));
                  }
                  "iframe" !== n.tagName.toLowerCase() ||
                    r.id ||
                    n.setAttribute(
                      "id",
                      "jsx-iframe-" +
                        "xxxxxxxxxx".replace(/./g, function () {
                          return "0123456789abcdef".charAt(
                            Math.floor(Math.random() * "0123456789abcdef".length)
                          );
                        })
                    );
                })(t, e),
                (function (n, e, r, t) {
                  if (e.props.hasOwnProperty("innerHTML")) {
                    if (e.children.length)
                      throw new Error(
                        "Expected no children to be passed when innerHTML prop is set"
                      );
                    var o = e.props.innerHTML;
                    if ("string" != typeof o)
                      throw new TypeError("innerHTML prop must be string");
                    "script" === e.name
                      ? (n.text = o)
                      : ((n.innerHTML = o),
                        (function (n, e) {
                          void 0 === e && (e = window.document);
                          for (
                            var r = 0, t = n.querySelectorAll("script");
                            r < t.length;
                            r++
                          ) {
                            var o = t[r],
                              i = o.parentNode;
                            if (i) {
                              var a = e.createElement("script");
                              (a.text = o.textContent), i.replaceChild(a, o);
                            }
                          }
                        })(n, r));
                  } else (Jt[e.name] || Jt.default)(n, e, t);
                })(t, e, r, n),
                t
              );
            }
            throw new TypeError("Unhandleable node");
          };
        }
        var Qt,
          no,
          eo,
          ro,
          to,
          oo,
          io,
          ao,
          uo,
          so = { br: !0 };
        function co(n) {
          return n
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
            .replace(/\//g, "&#x2F;");
        }
        function lo(n) {
          var e = n.svg,
            r = s(n, ["svg"]);
          if (!e) throw new TypeError("Expected svg prop");
          if (
            "string" !=
            typeof (e = e.render(function n(e) {
              if ("component" === e.type)
                return [].concat(e.renderComponent(n)).join("");
              if ("element" === e.type) {
                var r =
                  ((o = e.props),
                  (i = Object.keys(o).filter(function (n) {
                    var e = o[n];
                    return (
                      "innerHTML" !== n &&
                      !!e &&
                      ("string" == typeof e || "number" == typeof e || !0 === e)
                    );
                  })).length
                    ? " " +
                      i
                        .map(function (n) {
                          var e = o[n];
                          if (!0 === e) return "" + co(n);
                          if ("string" != typeof e && "number" != typeof e)
                            throw new TypeError(
                              "Unexpected prop type: " + typeof e
                            );
                          return co(n) + '="' + co(e.toString()) + '"';
                        })
                        .join(" ")
                    : "");
                if (so[e.name]) return "<" + e.name + r + " />";
                var t =
                  "string" == typeof e.props.innerHTML
                    ? e.props.innerHTML
                    : e.renderChildren(n).join("");
                return "<" + e.name + r + ">" + t + "</" + e.name + ">";
              }
              var o, i;
              if ("text" === e.type) return co(e.text);
              throw new TypeError("Unhandleable node: " + e.type);
            }))
          )
            throw new TypeError("Expected svg prop to be a string or jsx node");
          return Kt("img", h({ src: En(e) }, r));
        }
        function fo(n) {
          var e = n.render,
            r = n.name,
            t = n.alt,
            o = n.logoColor,
            i = s(n, ["render", "name", "alt", "logoColor"]);
          return Kt(
            lo,
            h({}, i, {
              svg: e(),
              alt: t || Pn(r),
              class:
                "paypal-logo paypal-logo-" +
                r +
                " " +
                (o ? "paypal-logo-color-" + o : ""),
            })
          );
        }
        function po(n) {
          var e = n.render,
            r = n.name,
            t = s(n, ["render", "name"]);
          return Kt(
            lo,
            h({}, t, {
              svg: e(),
              alt: Pn(r),
              class: "paypal-logo-card paypal-logo-card-" + r,
            })
          );
        }
        function ho(n, e, r) {
          var t = r ? e[r] : e.default;
          if (!t)
            throw new Error(
              "No " + (r || "default") + " logo available for " + n
            );
          return t;
        }
        function mo(n) {
          var e = h({}, void 0 === n ? {} : n);
          return Kt(
            po,
            h({}, e, {
              name: Me.AMEX,
              render: function () {
                return Kt(
                  "svg",
                  {
                    width: "40",
                    height: "24",
                    viewBox: "0 0 40 24",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  Kt("path", {
                    d:
                      "M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z",
                    fill: "rgb(20, 119, 190)",
                  }),
                  Kt("path", {
                    d:
                      "M6.26 12.32h2.313L7.415 9.66M27.353 9.977h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z",
                    fill: "rgb(255, 255, 255)",
                  }),
                  Kt("path", {
                    d:
                      "M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575V15.1zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328H29.53l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z",
                    fill: "rgb(255, 255, 255)",
                  })
                );
              },
            })
          );
        }
        function yo(n) {
          var e = h({}, void 0 === n ? {} : n);
          return Kt(
            po,
            h({}, e, {
              name: Me.MASTERCARD,
              render: function () {
                return Kt(
                  "svg",
                  {
                    width: "40",
                    height: "24",
                    viewBox: "0 0 40 24",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  Kt("path", {
                    d:
                      "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
                    fill: "rgb(62, 57, 57)",
                  }),
                  Kt("path", {
                    fill: "rgb(255, 95, 0)",
                    d:
                      "M 22.205 3.901 L 15.688 3.901 L 15.688 15.589 L 22.205 15.589",
                  }),
                  Kt("path", {
                    d:
                      "M 16.1 9.747 C 16.1 7.371 17.218 5.265 18.935 3.901 C 17.67 2.912 16.078 2.312 14.342 2.312 C 10.223 2.312 6.892 5.636 6.892 9.746 C 6.892 13.853 10.223 17.178 14.342 17.178 C 16.078 17.178 17.67 16.58 18.935 15.588 C 17.216 14.246 16.099 12.119 16.099 9.745 Z",
                    fill: "rgb(235, 0, 27)",
                  }),
                  Kt("path", {
                    d:
                      "M 30.996 9.747 C 30.996 13.854 27.663 17.179 23.547 17.179 C 21.81 17.179 20.216 16.581 18.954 15.589 C 20.691 14.227 21.788 12.12 21.788 9.746 C 21.788 7.37 20.671 5.264 18.954 3.9 C 20.216 2.911 21.81 2.311 23.547 2.311 C 27.663 2.311 30.996 5.657 30.996 9.745 Z",
                    fill: "rgb(247, 158, 27)",
                  }),
                  Kt("path", {
                    d:
                      "M 7.167 22.481 L 7.167 20.43 C 7.167 19.641 6.685 19.127 5.857 19.127 C 5.443 19.127 4.993 19.262 4.683 19.71 C 4.44 19.332 4.096 19.127 3.579 19.127 C 3.233 19.127 2.888 19.23 2.612 19.607 L 2.612 19.197 L 1.886 19.197 L 1.886 22.481 L 2.612 22.481 L 2.612 20.668 C 2.612 20.086 2.921 19.812 3.406 19.812 C 3.888 19.812 4.131 20.121 4.131 20.669 L 4.131 22.481 L 4.856 22.481 L 4.856 20.668 C 4.856 20.086 5.204 19.812 5.651 19.812 C 6.137 19.812 6.377 20.121 6.377 20.669 L 6.377 22.481 L 7.171 22.481 Z M 17.909 19.197 L 16.734 19.197 L 16.734 18.204 L 16.007 18.204 L 16.007 19.197 L 15.352 19.197 L 15.352 19.845 L 16.007 19.845 L 16.007 21.351 C 16.007 22.106 16.319 22.551 17.146 22.551 C 17.459 22.551 17.804 22.449 18.044 22.309 L 17.839 21.695 C 17.632 21.831 17.389 21.867 17.216 21.867 C 16.872 21.867 16.734 21.66 16.734 21.319 L 16.734 19.847 L 17.909 19.847 L 17.909 19.198 Z M 24.053 19.127 C 23.639 19.127 23.364 19.332 23.191 19.607 L 23.191 19.197 L 22.465 19.197 L 22.465 22.481 L 23.191 22.481 L 23.191 20.633 C 23.191 20.086 23.434 19.777 23.882 19.777 C 24.018 19.777 24.192 19.812 24.33 19.847 L 24.538 19.162 C 24.401 19.127 24.192 19.127 24.052 19.127 Z M 14.765 19.469 C 14.42 19.229 13.937 19.127 13.418 19.127 C 12.588 19.127 12.036 19.538 12.036 20.188 C 12.036 20.736 12.453 21.044 13.175 21.146 L 13.524 21.181 C 13.903 21.249 14.108 21.351 14.108 21.523 C 14.108 21.765 13.832 21.934 13.35 21.934 C 12.864 21.934 12.484 21.764 12.244 21.592 L 11.898 22.139 C 12.278 22.411 12.794 22.549 13.313 22.549 C 14.28 22.549 14.831 22.105 14.831 21.488 C 14.831 20.908 14.383 20.599 13.692 20.496 L 13.348 20.462 C 13.037 20.428 12.795 20.36 12.795 20.155 C 12.795 19.914 13.038 19.777 13.418 19.777 C 13.83 19.777 14.245 19.949 14.453 20.052 L 14.764 19.469 Z M 34.033 19.127 C 33.618 19.127 33.342 19.332 33.171 19.607 L 33.171 19.197 L 32.445 19.197 L 32.445 22.481 L 33.171 22.481 L 33.171 20.633 C 33.171 20.086 33.414 19.777 33.862 19.777 C 33.998 19.777 34.17 19.812 34.307 19.847 L 34.515 19.162 C 34.38 19.127 34.172 19.127 34.033 19.127 Z M 24.779 20.838 C 24.779 21.834 25.47 22.551 26.54 22.551 C 27.025 22.551 27.369 22.449 27.715 22.173 L 27.369 21.593 C 27.092 21.798 26.816 21.901 26.504 21.901 C 25.919 21.901 25.505 21.49 25.505 20.84 C 25.505 20.226 25.919 19.813 26.507 19.78 C 26.816 19.78 27.092 19.883 27.369 20.089 L 27.715 19.507 C 27.369 19.233 27.024 19.13 26.54 19.13 C 25.47 19.13 24.779 19.85 24.779 20.841 Z M 31.478 20.838 L 31.478 19.198 L 30.75 19.198 L 30.75 19.608 C 30.51 19.3 30.165 19.128 29.717 19.128 C 28.784 19.128 28.058 19.848 28.058 20.84 C 28.058 21.835 28.784 22.552 29.716 22.552 C 30.197 22.552 30.543 22.382 30.748 22.074 L 30.748 22.484 L 31.477 22.484 L 31.477 20.84 Z M 28.818 20.838 C 28.818 20.259 29.196 19.779 29.819 19.779 C 30.406 19.779 30.821 20.224 30.821 20.84 C 30.821 21.424 30.406 21.902 29.819 21.902 C 29.196 21.869 28.818 21.424 28.818 20.841 Z M 20.148 19.128 C 19.183 19.128 18.494 19.813 18.494 20.84 C 18.494 21.869 19.183 22.552 20.185 22.552 C 20.671 22.552 21.154 22.417 21.533 22.108 L 21.188 21.595 C 20.914 21.799 20.565 21.937 20.222 21.937 C 19.772 21.937 19.323 21.732 19.219 21.149 L 21.671 21.149 L 21.671 20.878 C 21.705 19.815 21.083 19.13 20.15 19.13 Z M 20.148 19.748 C 20.6 19.748 20.911 20.019 20.98 20.532 L 19.253 20.532 C 19.321 20.087 19.633 19.748 20.148 19.748 Z M 38.141 20.84 L 38.141 17.898 L 37.412 17.898 L 37.412 19.61 C 37.173 19.302 36.828 19.13 36.38 19.13 C 35.446 19.13 34.721 19.85 34.721 20.841 C 34.721 21.837 35.446 22.554 36.379 22.554 C 36.861 22.554 37.206 22.383 37.41 22.076 L 37.41 22.486 L 38.14 22.486 L 38.14 20.841 Z M 35.481 20.84 C 35.481 20.261 35.861 19.78 36.484 19.78 C 37.069 19.78 37.486 20.226 37.486 20.841 C 37.486 21.426 37.069 21.904 36.484 21.904 C 35.861 21.87 35.481 21.426 35.481 20.843 Z M 11.237 20.84 L 11.237 19.2 L 10.515 19.2 L 10.515 19.61 C 10.272 19.302 9.928 19.13 9.478 19.13 C 8.545 19.13 7.82 19.85 7.82 20.841 C 7.82 21.837 8.545 22.554 9.477 22.554 C 9.96 22.554 10.304 22.383 10.512 22.076 L 10.512 22.486 L 11.236 22.486 L 11.236 20.841 Z M 8.546 20.84 C 8.546 20.261 8.926 19.78 9.548 19.78 C 10.134 19.78 10.55 20.226 10.55 20.841 C 10.55 21.426 10.134 21.904 9.548 21.904 C 8.926 21.87 8.546 21.426 8.546 20.843 Z",
                    fill: "rgb(255, 255, 255)",
                  })
                );
              },
            })
          );
        }
        function go(n) {
          var e = h({}, void 0 === n ? {} : n);
          return Kt(
            po,
            h({}, e, {
              name: Me.VISA,
              render: function () {
                return Kt(
                  "svg",
                  {
                    width: "40",
                    height: "24",
                    viewBox: "0 0 40 24",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  Kt("path", {
                    d:
                      "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
                    fill: "rgb(33, 86, 154)",
                  }),
                  Kt("path", {
                    d:
                      "M19.596 7.885l-2.11 9.478H14.93l2.11-9.478h2.554zm10.743 6.12l1.343-3.56.773 3.56H30.34zm2.85 3.358h2.36l-2.063-9.478H31.31c-.492 0-.905.274-1.088.695l-3.832 8.783h2.682l.532-1.415h3.276l.31 1.415zm-6.667-3.094c.01-2.502-3.6-2.64-3.577-3.76.008-.338.345-.7 1.083-.793.365-.045 1.373-.08 2.517.425l.448-2.01c-.615-.214-1.405-.42-2.39-.42-2.523 0-4.3 1.288-4.313 3.133-.016 1.364 1.268 2.125 2.234 2.58.996.464 1.33.762 1.325 1.177-.006.636-.793.918-1.526.928-1.285.02-2.03-.333-2.623-.6l-.462 2.08c.598.262 1.7.49 2.84.502 2.682 0 4.437-1.273 4.445-3.243zM15.948 7.884l-4.138 9.478h-2.7L7.076 9.8c-.123-.466-.23-.637-.606-.834-.615-.32-1.63-.62-2.52-.806l.06-.275h4.345c.554 0 1.052.354 1.178.966l1.076 5.486 2.655-6.45h2.683z",
                    fill: "rgb(255, 255, 255)",
                  })
                );
              },
            })
          );
        }
        function wo(n) {
          var e = void 0 === n ? {} : n,
            r = e.color,
            t = void 0 === r ? "#000000" : r,
            o = s(e, ["color"]);
          return Kt(
            po,
            h({}, o, {
              name: "",
              render: function () {
                return Kt(
                  "svg",
                  {
                    width: "24px",
                    height: "18px",
                    viewBox: "0 0 24 18",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  Kt(
                    "g",
                    {
                      stroke: "none",
                      "stroke-width": "1",
                      fill: "none",
                      "fill-rule": "evenodd",
                    },
                    Kt(
                      "g",
                      {
                        transform: "translate(-3.000000, -6.000000)",
                        fill: t,
                        "fill-rule": "nonzero",
                      },
                      Kt("path", {
                        d:
                          "M8.27521338,12.5122653 C7.93003542,12.5122653 7.65021338,12.2324432 7.65021338,11.8872653 C7.65021338,11.5420873 7.93003542,11.2622653 8.27521338,11.2622653 L24.7879042,11.2622653 C25.5955939,11.2622653 26.25,11.9175905 26.25,12.7255368 L26.25,22.2867284 C26.25,23.0946748 25.5955939,23.75 24.7879042,23.75 L5.21231302,23.75 C4.40462325,23.75 3.75,23.0946748 3.75,22.2867397 L3.75,7.71327152 C3.75,6.90532518 4.40440608,6.25 5.21227212,6.25 L24.7880664,6.25552163 C25.5956079,6.25573147 26.25,6.91099507 26.25,7.71870362 L26.25,9.23577161 C26.25,9.58094958 25.9702675,9.86081168 25.6250895,9.86086112 C25.2799115,9.86091055 25.0000494,9.5811286 25,9.23595063 L24.9997827,7.71879313 C24.9997827,7.60083189 24.9046611,7.50555197 24.7877278,7.50552158 L5.21209583,7.49999998 C5.09515506,7.49999998 5,7.59528868 5,7.71326028 L5.00021718,22.2867284 C5.00021718,22.4047113 5.09537223,22.5 5.21231302,22.5 L24.7879042,22.5 C24.904845,22.5 25,22.4047113 25,22.2867284 L25,12.7255368 C25,12.607554 24.9048449,12.5122653 24.7879042,12.5122653 L8.27521338,12.5122653 Z",
                        id: "Stroke-1",
                      })
                    )
                  )
                );
              },
            })
          );
        }
        ((Qt = {}).default = { primary: "#005498", secondary: "#FFD800" }),
          (Qt.white = { primary: "#ffffff", secondary: "#ffffff" }),
          (Qt.black = { primary: "#005498", secondary: "#FFD800" }),
          ((no = {}).default = { primary: "#003087" }),
          (no.blue = { primary: "#003087" }),
          (no.white = { primary: "#ffffff" }),
          (no.black = { primary: "#333030" }),
          ((eo = {}).default = { primary: "#c8036f", secondary: "#71706f" }),
          (eo.white = { primary: "#ffffff", secondary: "#ffffff" }),
          (eo.black = { primary: "#71706F", secondary: "#C8036F" }),
          ((ro = {}).default = {
            primary: "#ED1C24",
            secondary: "#ffffff",
            tertiary: "#003a7d",
          }),
          (ro.white = {
            primary: "#ffffff",
            secondary: "#ffffff",
            tertiary: "#ffffff",
          }),
          (ro.black = {
            primary: "#FFFFFF",
            secondary: "#000000",
            tertiary: "#FFFFFF",
          }),
          ((to = {}).default = {
            primary: "#000000",
            secondary: "#cd0067",
            tertiary: "#ffffff",
          }),
          (to.white = {
            primary: "#ffffff",
            secondary: "#ffffff",
            tertiary: "#ffffff",
          }),
          (to.black = {
            primary: "#000000",
            secondary: "#FFFFFF",
            tertiary: "#CD0067",
          }),
          ((oo = {}).default = { primary: "#00C0EE", secondary: "#1a4b67" }),
          (oo.white = { primary: "#ffffff", secondary: "#ffffff" }),
          (oo.black = { primary: "#1A4B67", secondary: "#00C0EE" }),
          ((io = {}).default = { primary: "#d03238", secondary: "#b3b1b1" }),
          (io.white = { primary: "#ffffff", secondary: "#ffffff" }),
          (io.black = { primary: "#d03238", secondary: "#b3b1b1" });
        var vo =
          (((ao = {}).default = { primary: "#003087", secondary: "#009cde" }),
          (ao.blue = { primary: "#003087", secondary: "#009cde" }),
          (ao.white = { primary: "#ffffff", secondary: "#ffffff" }),
          (ao.black = { primary: "#333030", secondary: "#636363" }),
          ao);
        function Co(n) {
          var e = n.logoColor,
            r = void 0 === e ? "default" : e,
            t = s(n, ["logoColor"]),
            o = ho("paypal", vo, r),
            i = o.primary,
            a = o.secondary;
          return Kt(
            fo,
            h({}, t, t, {
              name: "paypal",
              alt: "PayPal",
              logoColor: r,
              render: function () {
                return Kt(
                  "svg",
                  {
                    width: "100",
                    height: "32",
                    viewBox: "0 0 100 32",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  Kt("path", {
                    fill: i,
                    d:
                      "M 12.237 2.444 L 4.437 2.444 C 3.937 2.444 3.437 2.844 3.337 3.344 L 0.237 23.344 C 0.137 23.744 0.437 24.044 0.837 24.044 L 4.537 24.044 C 5.037 24.044 5.537 23.644 5.637 23.144 L 6.437 17.744 C 6.537 17.244 6.937 16.844 7.537 16.844 L 10.037 16.844 C 15.137 16.844 18.137 14.344 18.937 9.444 C 19.237 7.344 18.937 5.644 17.937 4.444 C 16.837 3.144 14.837 2.444 12.237 2.444 Z M 13.137 9.744 C 12.737 12.544 10.537 12.544 8.537 12.544 L 7.337 12.544 L 8.137 7.344 C 8.137 7.044 8.437 6.844 8.737 6.844 L 9.237 6.844 C 10.637 6.844 11.937 6.844 12.637 7.644 C 13.137 8.044 13.337 8.744 13.137 9.744 Z",
                  }),
                  Kt("path", {
                    fill: i,
                    d:
                      "M 35.437 9.644 L 31.737 9.644 C 31.437 9.644 31.137 9.844 31.137 10.144 L 30.937 11.144 L 30.637 10.744 C 29.837 9.544 28.037 9.144 26.237 9.144 C 22.137 9.144 18.637 12.244 17.937 16.644 C 17.537 18.844 18.037 20.944 19.337 22.344 C 20.437 23.644 22.137 24.244 24.037 24.244 C 27.337 24.244 29.237 22.144 29.237 22.144 L 29.037 23.144 C 28.937 23.544 29.237 23.944 29.637 23.944 L 33.037 23.944 C 33.537 23.944 34.037 23.544 34.137 23.044 L 36.137 10.244 C 36.237 10.044 35.837 9.644 35.437 9.644 Z M 30.337 16.844 C 29.937 18.944 28.337 20.444 26.137 20.444 C 25.037 20.444 24.237 20.144 23.637 19.444 C 23.037 18.744 22.837 17.844 23.037 16.844 C 23.337 14.744 25.137 13.244 27.237 13.244 C 28.337 13.244 29.137 13.644 29.737 14.244 C 30.237 14.944 30.437 15.844 30.337 16.844 Z",
                  }),
                  Kt("path", {
                    fill: i,
                    d:
                      "M 55.337 9.644 L 51.637 9.644 C 51.237 9.644 50.937 9.844 50.737 10.144 L 45.537 17.744 L 43.337 10.444 C 43.237 9.944 42.737 9.644 42.337 9.644 L 38.637 9.644 C 38.237 9.644 37.837 10.044 38.037 10.544 L 42.137 22.644 L 38.237 28.044 C 37.937 28.444 38.237 29.044 38.737 29.044 L 42.437 29.044 C 42.837 29.044 43.137 28.844 43.337 28.544 L 55.837 10.544 C 56.137 10.244 55.837 9.644 55.337 9.644 Z",
                  }),
                  Kt("path", {
                    fill: a,
                    d:
                      "M 67.737 2.444 L 59.937 2.444 C 59.437 2.444 58.937 2.844 58.837 3.344 L 55.737 23.244 C 55.637 23.644 55.937 23.944 56.337 23.944 L 60.337 23.944 C 60.737 23.944 61.037 23.644 61.037 23.344 L 61.937 17.644 C 62.037 17.144 62.437 16.744 63.037 16.744 L 65.537 16.744 C 70.637 16.744 73.637 14.244 74.437 9.344 C 74.737 7.244 74.437 5.544 73.437 4.344 C 72.237 3.144 70.337 2.444 67.737 2.444 Z M 68.637 9.744 C 68.237 12.544 66.037 12.544 64.037 12.544 L 62.837 12.544 L 63.637 7.344 C 63.637 7.044 63.937 6.844 64.237 6.844 L 64.737 6.844 C 66.137 6.844 67.437 6.844 68.137 7.644 C 68.637 8.044 68.737 8.744 68.637 9.744 Z",
                  }),
                  Kt("path", {
                    fill: a,
                    d:
                      "M 90.937 9.644 L 87.237 9.644 C 86.937 9.644 86.637 9.844 86.637 10.144 L 86.437 11.144 L 86.137 10.744 C 85.337 9.544 83.537 9.144 81.737 9.144 C 77.637 9.144 74.137 12.244 73.437 16.644 C 73.037 18.844 73.537 20.944 74.837 22.344 C 75.937 23.644 77.637 24.244 79.537 24.244 C 82.837 24.244 84.737 22.144 84.737 22.144 L 84.537 23.144 C 84.437 23.544 84.737 23.944 85.137 23.944 L 88.537 23.944 C 89.037 23.944 89.537 23.544 89.637 23.044 L 91.637 10.244 C 91.637 10.044 91.337 9.644 90.937 9.644 Z M 85.737 16.844 C 85.337 18.944 83.737 20.444 81.537 20.444 C 80.437 20.444 79.637 20.144 79.037 19.444 C 78.437 18.744 78.237 17.844 78.437 16.844 C 78.737 14.744 80.537 13.244 82.637 13.244 C 83.737 13.244 84.537 13.644 85.137 14.244 C 85.737 14.944 85.937 15.844 85.737 16.844 Z",
                  }),
                  Kt("path", {
                    fill: a,
                    d:
                      "M 95.337 2.944 L 92.137 23.244 C 92.037 23.644 92.337 23.944 92.737 23.944 L 95.937 23.944 C 96.437 23.944 96.937 23.544 97.037 23.044 L 100.237 3.144 C 100.337 2.744 100.037 2.444 99.637 2.444 L 96.037 2.444 C 95.637 2.444 95.437 2.644 95.337 2.944 Z",
                  })
                );
              },
            })
          );
        }
        var bo,
          Lo,
          Eo,
          xo,
          Oo,
          To,
          _o,
          Po,
          ko =
            (((uo = {}).default = {
              primary: "#009cde",
              secondary: "#012169",
              tertiary: "#003087",
            }),
            (uo.blue = {
              primary: "#009cde",
              secondary: "#012169",
              tertiary: "#003087",
            }),
            (uo.white = {
              primary: "#ffffff",
              primaryOpacity: "0.7",
              secondary: "#ffffff",
              secondaryOpacity: "0.7",
              tertiary: "#ffffff",
            }),
            uo);
        function Ao(n) {
          var e = n.logoColor,
            r = void 0 === e ? "default" : e,
            t = s(n, ["logoColor"]),
            o = ho("pp", ko, r),
            i = o.primary,
            a = o.secondary,
            u = o.tertiary,
            c = o.primaryOpacity,
            l = void 0 === c ? "1" : c,
            d = o.secondaryOpacity,
            f = void 0 === d ? "1" : d,
            p = o.tertiaryOpacity,
            m = void 0 === p ? "1" : p;
          return Kt(
            fo,
            h({}, t, t, {
              name: "pp",
              alt: "PP",
              logoColor: r,
              render: function () {
                return Kt(
                  "svg",
                  {
                    width: "24",
                    height: "32",
                    viewBox: "0 0 24 32",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  Kt("path", {
                    fill: i,
                    opacity: l,
                    d:
                      "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157",
                  }),
                  Kt("path", {
                    fill: a,
                    opacity: f,
                    d:
                      "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157",
                  }),
                  Kt("path", {
                    fill: u,
                    opacity: m,
                    d:
                      "M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z",
                  })
                );
              },
            })
          );
        }
        ((bo = {}).default = { main: "#005DA0", card: "#AEB1BC" }),
          (bo.white = { main: "#FFFFFF", card: "#FFFFFF" }),
          (bo.black = { main: "#333030", card: "#333030" }),
          ((Lo = {}).default = { primary: "#FFFFFF", secondary: "#EB6F93" }),
          (Lo.white = { primary: "#FFFFFF", secondary: "#2C2E2F" }),
          (Lo.black = { primary: "#FFFFFF", secondary: "#EB6F93" }),
          ((Eo = {}).default = { primary: "#3D93CE" }),
          (Eo.blue = { primary: "#3D93CE" }),
          (Eo.white = { primary: "#ffffff" }),
          (Eo.black = { primary: "#333030" }),
          ((xo = {}).default = { primary: "#ffffff" }),
          (xo.blue = { primary: "#003087" }),
          (xo.white = { primary: "#ffffff" }),
          (xo.black = { primary: "#333030" }),
          ((Oo = {}).default = { primary: "#1AAD19", secondary: "#4D4D4D" }),
          (Oo.white = { primary: "#FFFFFF", secondary: "#FFFFFF" }),
          (Oo.black = { primary: "#333030", secondary: "#333030" }),
          ((To = {}).default = { primary: "#00A599" }),
          (To.white = { primary: "#FFFFFF" }),
          (To.black = { primary: "#00A599" }),
          ((_o = {}).default = {
            primary: "#A6d71c",
            secondary: "#3C932A",
            tertiary: "#6CC62E",
            quaternary: "#278D30",
          }),
          (_o.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
            tertiary: "#000000",
            quaternary: "#FFFFFF",
          }),
          (_o.black = {
            primary: "#333030",
            secondary: "#333030",
            tertiary: "#ffffff",
            quaternary: "#333030",
          });
        var Mo,
          No,
          So,
          zo,
          Fo,
          Ro =
            (((Po = {}).default = {
              primary: "#FFFFFF",
              secondary: "#CACCC8",
              tertiary: "#2D59A1",
              quaternary: "#1F3364",
              quinary: "#4E4E4E",
              senary: "#1B4482",
            }),
            (Po.white = {
              primary: "#FFFFFF",
              secondary: "#CACCC8",
              tertiary: "#2D59A1",
              quaternary: "#1F3364",
              quinary: "#4E4E4E",
              senary: "#1B4482",
            }),
            (Po.black = {
              primary: "#000000",
              secondary: "#000000",
              tertiary: "#FFFFFF",
              quaternary: "#FFFFFF",
              quinary: "#000000",
              senary: "#000000",
            }),
            Po);
        function jo(n) {
          var e,
            r = n.context,
            t = n.close,
            o = n.focus,
            i = n.event,
            a = n.frame,
            u = n.prerenderFrame,
            s = n.content,
            c = void 0 === s ? {} : s,
            l = "paypal-overlay-" + an(),
            d = function (n) {
              return function (e) {
                i.on("zoid-display", function () {
                  return fe(e, "show-" + n, hn);
                }),
                  i.on("zoid-close", function () {
                    return fe(e, "hide-" + n, hn);
                  });
              };
            };
          return (
            a &&
              u &&
              (a.classList.add("component-frame"),
              u.classList.add("prerender-frame"),
              u.classList.add("visible"),
              a.classList.add("invisible"),
              i.on("zoid-rendered", function () {
                u.classList.remove("visible"),
                  u.classList.add("invisible"),
                  a.classList.remove("invisible"),
                  a.classList.add("visible"),
                  setTimeout(function () {
                    me(u);
                  }, 1);
              }),
              (e = Kt(
                "div",
                { class: "outlet", onRender: d("component") },
                Kt("node", { el: a }),
                Kt("node", { el: u })
              ))),
            Kt(
              "div",
              {
                id: l,
                onRender: d("container"),
                class: "paypal-checkout-sandbox",
              },
              Kt(
                "style",
                null,
                (function (n) {
                  var e = n.uid;
                  return (
                    "\n        #" +
                    e +
                    ".paypal-checkout-sandbox {\n            display: block;\n            position: fixed;\n            top: 0;\n            left: 0;\n\n            width: 100%;\n            height: 100%;\n            width: 100vw;\n            height: 100vh;\n            max-width: 100%;\n            max-height: 100%;\n            min-width: 100%;\n            min-height: 100%;\n\n            z-index: 2147483647;\n\n            animation-duration: 0.3s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards !important;\n            opacity: 0;\n        }\n\n        #" +
                    e +
                    ".paypal-checkout-sandbox .paypal-checkout-sandbox-iframe {\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-container {\n            from {\n                opacity: 0;\n            }\n\n            to {\n                opacity: 1;\n            }\n        }\n\n        @keyframes hide-container {\n            from {\n                opacity: 1;\n            }\n\n            50% {\n                opacity: 1;\n            }\n\n            to {\n                opacity: 0;\n            }\n        }\n    "
                  );
                })({ uid: l })
              ),
              Kt(
                "iframe",
                {
                  title: "PayPal Checkout Overlay",
                  name: "__paypal_checkout_sandbox_" + l + "__",
                  scrolling: "no",
                  class: "paypal-checkout-sandbox-iframe",
                },
                Kt(
                  "html",
                  null,
                  Kt(
                    "body",
                    null,
                    Kt(
                      "div",
                      {
                        id: l,
                        onClick: function (n) {
                          n.preventDefault(),
                            n.stopPropagation(),
                            f()
                              ? window.alert(
                                  "Please switch tabs to reactivate the PayPal window"
                                )
                              : o();
                        },
                        class:
                          "paypal-overlay-context-" +
                          r +
                          " paypal-checkout-overlay",
                      },
                      Kt("a", {
                        href: "#",
                        class: "paypal-checkout-close",
                        onClick: function (n) {
                          n.preventDefault(), n.stopPropagation(), t();
                        },
                        "aria-label": "close",
                        role: "button",
                      }),
                      Kt(
                        "div",
                        { class: "paypal-checkout-modal" },
                        Kt(
                          "div",
                          { class: "paypal-checkout-logo" },
                          Kt(Ao, { logoColor: "white" }),
                          Kt(Co, { logoColor: "white" })
                        ),
                        c.windowMessage &&
                          Kt(
                            "div",
                            { class: "paypal-checkout-message" },
                            c.windowMessage
                          ),
                        c.continueMessage &&
                          Kt(
                            "div",
                            { class: "paypal-checkout-continue" },
                            Kt("a", { onClick: o, href: "#" }, c.continueMessage)
                          ),
                        Kt(
                          "div",
                          { class: "paypal-checkout-loader" },
                          Kt("div", { class: "paypal-spinner" })
                        )
                      ),
                      Kt("div", { class: "paypal-checkout-iframe-container" }, e),
                      Kt(
                        "style",
                        null,
                        (function (n) {
                          var e = n.uid;
                          return (
                            "\n        #" +
                            e +
                            " {\n            position: absolute;\n            z-index: 2147483647;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n\n            transform: translate3d(0, 0, 0);\n\n            background-color: black;\n            background-color: rgba(0, 0, 0, 0.8);\n            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n\n            color: #fff;\n        }\n\n        #" +
                            e +
                            " a {\n            color: #fff;\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-close:before,\n        #" +
                            e +
                            " .paypal-checkout-close:after {\n            background-color: #fff;\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.POPUP +
                            " {\n            cursor: pointer;\n        }\n\n        #" +
                            e +
                            " a {\n            text-decoration: none;\n        }\n\n        #" +
                            e +
                            ' .paypal-checkout-modal {\n            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n            font-size: 14px;\n            text-align: center;\n\n            box-sizing: border-box;\n            max-width: 350px;\n            top: 50%;\n            left: 50%;\n            position: absolute;\n            transform: translateX(-50%) translateY(-50%);\n            cursor: pointer;\n            text-align: center;\n        }\n\n        #' +
                            e +
                            ".paypal-overlay-loading .paypal-checkout-message, #" +
                            e +
                            ".paypal-overlay-loading .paypal-checkout-continue {\n            display: none;\n        }\n\n        .paypal-checkout-loader {\n            display: none;\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-loading .paypal-checkout-loader {\n            display: block;\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-modal .paypal-checkout-logo {\n            cursor: pointer;\n            margin-bottom: 30px;\n            display: inline-block;\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-modal .paypal-checkout-logo img {\n            height: 36px;\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-modal .paypal-checkout-logo img.paypal-checkout-logo-pp {\n            margin-right: 10px;\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-modal .paypal-checkout-message {\n            font-size: 15px;\n            line-height: 1.5;\n            padding: 10px 0;\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .paypal-checkout-message, #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .paypal-checkout-continue {\n            display: none;\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-modal .paypal-checkout-continue {\n            font-size: 15px;\n            line-height: 1.35;\n            padding: 10px 0;\n            font-weight: bold;\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-modal .paypal-checkout-continue a {\n            border-bottom: 1px solid white;\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-close {\n            position: absolute;\n            right: 16px;\n            top: 16px;\n            width: 16px;\n            height: 16px;\n            opacity: 0.6;\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-loading .paypal-checkout-close {\n            display: none;\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-close:hover {\n            opacity: 1;\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-close:before, .paypal-checkout-close:after {\n            position: absolute;\n            left: 8px;\n            content: ' ';\n            height: 16px;\n            width: 2px;\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-close:before {\n            transform: rotate(45deg);\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-close:after {\n            transform: rotate(-45deg);\n        }\n\n        #" +
                            e +
                            " .paypal-checkout-iframe-container {\n            display: none;\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .paypal-checkout-iframe-container,\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .paypal-checkout-iframe-container > .outlet,\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .paypal-checkout-iframe-container > .outlet > iframe {\n            max-height: 95vh;\n            max-width: 95vw;\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .paypal-checkout-iframe-container {\n\n            display: block;\n\n            position: absolute;\n\n            top: 50%;\n            left: 50%;\n\n            min-width: 450px;\n\n            transform: translate(-50%, -50%);\n            transform: translate3d(-50%, -50%, 0);\n\n            border-radius: 10px;\n            overflow: hidden;\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .outlet {\n\n            position: relative;\n\n            transition: all 0.3s ease;\n            animation-duration: 0.3s;\n            animation-fill-mode: forwards !important;\n\n            min-width: 450px;\n            max-width: 450px;\n            width: 450px;\n            height: 535px;\n\n            background-color: white;\n\n            overflow: auto;\n\n            opacity: 0;\n            transform: scale3d(.3, .3, .3);\n\n            -webkit-overflow-scrolling: touch;\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .outlet > iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            transition: opacity .4s ease-in-out;\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .outlet > iframe.component-frame {\n            z-index: 100;\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .outlet > iframe.prerender-frame {\n            z-index: 200;\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .outlet > iframe.visible {\n            opacity: 1;\n            z-index: 200;\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .outlet > iframe.invisible {\n            opacity: 0;\n            z-index: 100;\n        }\n\n        @media screen and (max-width: 470px) {\n\n            #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .paypal-checkout-iframe-container,\n            #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .outlet {\n                min-width: 100%;\n                min-width: calc(100% - 20px);\n\n                max-width: 100%;\n                max-width: calc(100% - 20px);\n            }\n        }\n\n        #" +
                            e +
                            ".paypal-overlay-context-" +
                            wt.IFRAME +
                            " .outlet iframe {\n            width: 1px;\n            min-width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-component {\n            from {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n\n            to {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n        }\n\n        @keyframes hide-component {\n            from {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n\n            to {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n        }\n\n        .paypal-spinner {\n            height: 30px;\n            width: 30px;\n            display: inline-block;\n            box-sizing: content-box;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            animation: rotation .7s infinite linear;\n            border-left: 8px solid rgba(0, 0, 0, .2);\n            border-right: 8px solid rgba(0, 0, 0, .2);\n            border-bottom: 8px solid rgba(0, 0, 0, .2);\n            border-top: 8px solid #fff;\n            border-radius: 100%\n        }\n\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    "
                          );
                        })({ uid: l })
                      )
                    )
                  )
                )
              )
            )
          );
        }
        ((Mo = {}).default = {
          primary: "#4D4D4F",
          secondary: "#000000",
          tertiary: "#FF0000",
          quaternary: "#E83E49",
          quinary: "#FF00FF",
          senary: "#FFFFFF",
        }),
          (Mo.white = {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
            tertiary: "#000000",
            quaternary: "#000000",
            quinary: "#000000",
            senary: "#000000",
          }),
          (Mo.black = {
            primary: "#4D4D4F",
            secondary: "#000000",
            tertiary: "#FF0000",
            quaternary: "#E83E49",
            quinary: "#FF00FF",
            senary: "#FFFFFF",
          }),
          ((No = {}).default = { primary: "#020202", secondary: "#64CC07" }),
          (No.white = { primary: "#FFFFFF", secondary: "#FFFFFF" }),
          (No.black = { primary: "#000000", secondary: "#000000" }),
          ((So = {}).default = {
            primary: "#EC1D24",
            secondary: "#EDA42D",
            tertiary: "#FEFEFE",
          }),
          (So.white = {
            primary: "#EC1D24",
            secondary: "#EDA42D",
            tertiary: "#FEFEFE",
          }),
          (So.black = {
            primary: "#EC1D24",
            secondary: "#EDA42D",
            tertiary: "#FEFEFE",
          }),
          ((zo = {}).default = { primary: "#1A1919", secondary: "#FFFFFE" }),
          (zo.white = { primary: "#1A1919", secondary: "#FFFFFE" }),
          (zo.black = { primary: "#1A1919", secondary: "#FFFFFE" }),
          ((Fo = {}).default = { primary: "#004A91", secondary: "#ED1921" }),
          (Fo.white = { primary: "#004A91", secondary: "#ED1921" }),
          (Fo.black = { primary: "#004A91", secondary: "#ED1921" });
        function Io() {
          return cr() + "/webapps/helios";
        }
        function Do() {
          return pn(Do, function () {
            var n = jt({
              tag: "three-domain-secure",
              url: Io,
              attributes: { iframe: { scrolling: "no" } },
              containerTemplate: function (n) {
                var e = n.doc;
                return Kt(jo, {
                  context: n.context,
                  close: n.close,
                  focus: n.focus,
                  event: n.event,
                  frame: n.frame,
                  prerenderFrame: n.prerenderFrame,
                  content: n.props.content,
                }).render($t({ doc: e }));
              },
              props: {
                action: {
                  type: "string",
                  queryParam: !0,
                  value: function () {
                    return "verify";
                  },
                },
                xcomponent: {
                  type: "string",
                  queryParam: !0,
                  value: function () {
                    return "1";
                  },
                },
                flow: {
                  type: "string",
                  queryParam: !0,
                  value: function () {
                    return "3ds";
                  },
                },
                createOrder: {
                  type: "function",
                  queryParam: "cart_id",
                  queryValue: function (n) {
                    return E.try(n.value);
                  },
                },
                clientID: { type: "string", value: Ge, queryParam: !0 },
                onSuccess: {
                  type: "function",
                  alias: "onContingencyResult",
                  decorate: function (n) {
                    var e = n.value,
                      r = n.onError;
                    return function (n, t) {
                      return n ? r(n) : e(t);
                    };
                  },
                },
                sdkMeta: {
                  type: "string",
                  queryParam: !0,
                  sendToChild: !1,
                  value: vr,
                },
                content: { type: "object", required: !1 },
                userType: { type: "string", required: !1 },
              },
            });
            return (
              n.isChild() && (window.xchild = { props: n.xprops, close: hn }), n
            );
          });
        }
        function Bo(n, e) {
          var r = n.nonce;
          return Kt(
            "html",
            null,
            Kt(
              "head",
              null,
              Kt("title", null, "PayPal"),
              Kt("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
              })
            ),
            Kt(
              "body",
              null,
              Kt(
                "div",
                { class: "preloader spinner" },
                Kt("style", {
                  nonce: r,
                  innerHTML:
                    "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n",
                }),
                Kt(
                  "div",
                  { class: "spinWrap" },
                  Kt("p", { class: "spinnerImage" }),
                  Kt("p", { class: "loader" })
                )
              ),
              e
            )
          );
        }
        var Wo = {
          de: {
            windowMessage:
              "Sie sehen das sichere Browserfenster von PayPal nicht? Hier können Sie es wieder öffnen und Ihren Einkauf abschließen",
            continueMessage: "Weiter",
          },
          en: {
            windowMessage:
              "Don’t see the secure PayPal browser? We’ll help you re-launch the window to complete your purchase",
            continueMessage: "Click to Continue",
          },
          zh: {
            windowMessage:
              "没有找到安全的PayPal浏览器？我们将帮助您重启窗口以完成付款",
            continueMessage: "继续",
          },
          es: {
            windowMessage:
              "¿No ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra",
            continueMessage: "Continuar",
          },
          fr: {
            windowMessage:
              "Le navigateur sécurisé de PayPal n’apparaît pas ? Nous allons vous aider à rouvrir la fenêtre pour finaliser votre achat",
            continueMessage: "Continuer",
          },
          ar: {
            windowMessage:
              "لا ترى متصفح PayPal الآمن؟ سنساعدك في إعادة فتح النافذة لاستكمال مشترياتك",
            continueMessage: "متابعة",
          },
          da: {
            windowMessage:
              "Kan du ikke se PayPals sikre browser? Vi hjælper dig med at genstarte vinduet, så du kan betale",
            continueMessage: "Fortsæt",
          },
          ru: {
            windowMessage:
              "Не отображается безопасная страница PayPal в браузере? Мы поможем вам повторно загрузить окно, чтобы завершить покупку",
            continueMessage: "Продолжить",
          },
          tr: {
            windowMessage:
              "Güvenli PayPal tarayıcısını görmüyor musunuz? Alışverişinizi tamamlamak için pencereyi yeniden başlatmanıza yardımcı olacağız",
            continueMessage: "Devam",
          },
          th: {
            windowMessage:
              "ถ้าคุณไม่เห็นเบราว์เซอร์ที่มีระบบความปลอดภัยของ PayPal เราจะช่วยคุณเปิดหน้าต่างอีกครั้งเพื่อชำระเงินให้เรียบร้อย",
            continueMessage: "ดำเนินการต่อ",
          },
          sk: {
            windowMessage:
              "Nezobrazuje sa vám zabezpečený prehliadač PayPal? Pomôžeme vám znova otvoriť okno, aby ste mohli nákup dokončiť",
            continueMessage: "Pokračovať",
          },
          sv: {
            windowMessage:
              "Ser du inte den säkra PayPal-webbläsaren? Vi hjälper dig att starta om fönstret för att slutföra ditt köp",
            continueMessage: "Fortsätt",
          },
          pt: {
            windowMessage:
              "Não está vendo o navegador seguro do PayPal? Ajudaremos você a reabrir a janela para concluir a compra",
            continueMessage: "Continuar",
          },
          pl: {
            windowMessage:
              "Nie widzisz bezpiecznej przeglądarki PayPal? Pomożemy Ci ponownie uruchomić to okno w celu dokonania zakupu",
            continueMessage: "Kontynuuj",
          },
          no: {
            windowMessage:
              "Ser du ikke den sikre PayPal-nettleseren? Vi hjelper deg med å starte vinduet på nytt så du kan fullføre kjøpet",
            continueMessage: "Fortsett",
          },
          nl: {
            windowMessage:
              "Ziet u de beveiligde PayPal-browser niet? We helpen u het venster opnieuw te openen om uw aankoop te voltooien",
            continueMessage: "Doorgaan",
          },
          ko: {
            windowMessage:
              "보안 PayPal 브라우저가 보이지 않으신가요? 창을 다시 실행하여 결제를 완료할 수 있도록 도와드리겠습니다",
            continueMessage: "계속",
          },
          ja: {
            windowMessage:
              "セキュアなブラウザが表示されない場合は、ウィンドウを再起動して、支払いを完了できるようお手伝いいたします",
            continueMessage: "続行",
          },
          it: {
            windowMessage:
              "Non vedi la pagina sicura di PayPal? Ti aiuteremo a riaprire la finestra per completare l’acquisto",
            continueMessage: "Continua",
          },
          he: {
            windowMessage:
              "לא רואה את דפדפן PayPal המאובטח? נעזור לך לפתוח מחדש את החלון כדי להשלים את הקנייה שלך",
            continueMessage: "המשך",
          },
          hu: {
            windowMessage:
              "Nem látja a biztonságos PayPal-böngészőt? Segítünk újra betölteni az ablakot, hogy befejezhesse a vásárlást",
            continueMessage: "Folytatás",
          },
          id: {
            windowMessage:
              "Browser PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendela untuk menyelesaikan pembayaran Anda",
            continueMessage: "Lanjutkan",
          },
          el: {
            windowMessage:
              "Δεν βλέπετε το ασφαλές πρόγραμμα περιήγησης PayPal; Θα σας βοηθήσουμε να επανεκκινήσετε το παράθυρο για να ολοκληρώσετε την αγορά σας",
            continueMessage: "Συνέχεια",
          },
          fi: {
            windowMessage:
              "Eikö suojattua PayPal-selainta näy? Autamme avaamaan ikkunan uudelleen oston viimeistelyä varten",
            continueMessage: "Jatka",
          },
          cs: {
            windowMessage:
              "Nezobrazuje se vám bezpečný prohlížeč PayPal? Pomůžeme vám okno znovu otevřít, abyste mohli nákup dokončit",
            continueMessage: "Pokračovat",
          },
        };
        function Uo() {
          return pn(Uo, function () {
            var n = jt({
              tag: "paypal-checkout",
              url: function () {
                return "" + cr() + (window.__CHECKOUT_URI__ || "/checkoutnow");
              },
              attributes: { iframe: { scrolling: "yes" } },
              defaultContext: p() ? wt.POPUP : wt.IFRAME,
              domain: /\.paypal\.com(:\d+)?$/,
              logger: wr(),
              prerenderTemplate: function (n) {
                var e = n.doc;
                return Kt(Bo, { nonce: n.props.nonce }).render($t({ doc: e }));
              },
              containerTemplate: function (n) {
                var e = n.doc;
                return Kt(jo, {
                  context: n.context,
                  close: n.close,
                  focus: n.focus,
                  event: n.event,
                  frame: n.frame,
                  prerenderFrame: n.prerenderFrame,
                  content: Wo[n.props.locale.lang],
                }).render($t({ doc: e }));
              },
              props: {
                clientID: {
                  type: "string",
                  value: function () {
                    return Ge();
                  },
                  queryParam: !0,
                },
                sessionID: { type: "string", value: Bt, queryParam: !0 },
                buttonSessionID: { type: "string", queryParam: !0, required: !1 },
                env: { type: "string", queryParam: !0, value: Ne },
                sdkMeta: { type: "string", queryParam: !0, value: vr },
                nonce: { type: "string", required: !1, value: ar },
                buyerCountry: {
                  type: "string",
                  queryParam: !0,
                  required: !1,
                  default: Qe,
                },
                locale: {
                  type: "object",
                  queryParam: "locale.x",
                  allowDelegate: !0,
                  queryValue: function (n) {
                    var e = n.value;
                    return e.lang + "_" + e.country;
                  },
                  value: ir,
                },
                createOrder: {
                  type: "function",
                  queryParam: "token",
                  alias: "payment",
                  queryValue: function (n) {
                    return E.try(n.value);
                  },
                  decorate: function (n) {
                    return dn(n.value);
                  },
                },
                xcomponent: {
                  type: "string",
                  queryParam: !0,
                  value: function () {
                    return "1";
                  },
                },
                version: { type: "string", queryParam: !0, value: Se },
                commit: { type: "boolean", queryParam: !0, value: Ye },
                fundingSource: {
                  type: "string",
                  queryParam: !0,
                  default: function () {
                    return Ae.PAYPAL;
                  },
                },
                onApprove: { type: "function", alias: "onAuthorize" },
                onShippingChange: { type: "function", required: !1 },
                onAuth: { type: "function", required: !1, sameDomain: !0 },
                accessToken: { type: "string", required: !1 },
                onCancel: { type: "function", required: !1 },
                onFocused: {
                  type: "function",
                  value: function (n) {
                    var e = n.event;
                    return function (n) {
                      return e.on("zoid-focus", n);
                    };
                  },
                },
                test: {
                  type: "object",
                  default: function () {
                    return window.__test__ || { action: "checkout" };
                  },
                },
              },
              dimensions: l()
                ? { width: "100%", height: "590px" }
                : { width: "500px", height: "590px" },
            });
            return (
              n.isChild() &&
                ((window.xchild = { props: n.xprops, show: hn, hide: hn }),
                (function () {
                  try {
                    if (!window.injector) return;
                    var n = window.injector.get("$util");
                    if (!n || !n.redirect) return;
                    var e = n.redirect;
                    n.redirect = function (n) {
                      try {
                        -1 !== n.indexOf("/ppcreditapply") &&
                          -1 !== n.indexOf("key=") &&
                          -1 === n.indexOf("sdkMeta") &&
                          (n += "&sdkMeta=" + vr());
                      } catch (n) {}
                      for (
                        var r = arguments.length,
                          t = new Array(r > 1 ? r - 1 : 0),
                          o = 1;
                        o < r;
                        o++
                      )
                        t[o - 1] = arguments[o];
                      return e.call.apply(e, [this, n].concat(t));
                    };
                  } catch (n) {}
                })()),
              n
            );
          });
        }
        var qo = [
            Ae.PAYPAL,
            Ae.VENMO,
            Ae.ITAU,
            Ae.CREDIT,
            Ae.IDEAL,
            Ae.SEPA,
            Ae.BANCONTACT,
            Ae.GIROPAY,
            Ae.EPS,
            Ae.SOFORT,
            Ae.MYBANK,
            Ae.BLIK,
            Ae.P24,
            Ae.ZIMPLER,
            Ae.WECHATPAY,
            Ae.PAYU,
            Ae.VERKKOPANKKI,
            Ae.TRUSTLY,
            Ae.OXXO,
            Ae.BOLETO,
            Ae.MAXIMA,
            Ae.CARD,
          ],
          Ho = [Ae.PAYPAL, Ae.VENMO, Ae.ITAU],
          Go = function () {
            return gr(function (n) {
              return (
                (n.funding = n.funding || {}),
                Object.keys(n.funding).filter(function (e) {
                  var r = n.funding[e];
                  return !(
                    (r.expiry && Date.now() > r.expiry) ||
                    !n.funding[e].remembered
                  );
                })
              );
            });
          };
        function Zo(n) {
          return -1 !== Go().indexOf(n);
        }
        var Vo,
          Yo,
          Ko,
          Xo,
          Jo = function () {
            for (
              var n = Object({
                  paypal: Object({ eligible: !0, vaultable: !0 }),
                  card: Object({
                    eligible: !0,
                    branded: !0,
                    vendors: Object({
                      visa: Object({ eligible: !0, vaultable: !0 }),
                      mastercard: Object({ eligible: !0, vaultable: !0 }),
                      amex: Object({ eligible: !0, vaultable: !0 }),
                      discover: Object({ eligible: !1, vaultable: !0 }),
                      hiper: Object({ eligible: !1, vaultable: !1 }),
                      elo: Object({ eligible: !1, vaultable: !0 }),
                      jcb: Object({ eligible: !1, vaultable: !0 }),
                    }),
                  }),
                  venmo: Object({ eligible: !1 }),
                  itau: Object({ eligible: !1 }),
                  credit: Object({ eligible: !1 }),
                  sepa: Object({ eligible: !1 }),
                  ideal: Object({ eligible: !1 }),
                  bancontact: Object({ eligible: !1 }),
                  giropay: Object({ eligible: !1 }),
                  eps: Object({ eligible: !1 }),
                  sofort: Object({ eligible: !1 }),
                  mybank: Object({ eligible: !1 }),
                  p24: Object({ eligible: !1 }),
                  zimpler: Object({ eligible: !1 }),
                  wechatpay: Object({ eligible: !1 }),
                  payu: Object({ eligible: !1 }),
                  blik: Object({ eligible: !1 }),
                  trustly: Object({ eligible: !1 }),
                  oxxo: Object({ eligible: !1 }),
                  maxima: Object({ eligible: !1 }),
                  boleto: Object({ eligible: !1 }),
                }),
                e = 0;
              e < Ho.length;
              e++
            ) {
              var r,
                t = Ho[e];
              if (Zo(t)) {
                var o = n[t];
                o &&
                  (n = h(
                    {},
                    n,
                    (((r = {})[t] = h({}, o, { eligible: !0, recommended: !0 })),
                    r)
                  ));
              }
            }
            return n;
          },
          $o = {
            PAYPAL: "paypal",
            CHECKOUT: "checkout",
            BUYNOW: "buynow",
            PAY: "pay",
            INSTALLMENT: "installment",
            SUBSCRIBE: "subscribe",
          },
          Qo = {
            TINY: "tiny",
            SMALL: "small",
            MEDIUM: "medium",
            LARGE: "large",
            HUGE: "huge",
            RESPONSIVE: "responsive",
          },
          ni = { HORIZONTAL: "horizontal", VERTICAL: "vertical" },
          ei = {
            CONTAINER: "paypal-button-container",
            BUTTON: "paypal-button",
            BUTTON_LABEL: "paypal-button-label-container",
            LABEL: "paypal-button-label",
            COLOR: "paypal-button-color",
            TEXT_COLOR: "paypal-button-text-color",
            SHAPE: "paypal-button-shape",
            LAYOUT: "paypal-button-layout",
            NUMBER: "paypal-button-number",
            ENV: "paypal-button-env",
            VAULT: "paypal-button-vault",
            LOADING: "paypal-button-loading",
            SPINNER: "paypal-button-spinner",
            TAGLINE: "paypal-button-tagline",
            POWERED_BY: "paypal-powered-by",
            TEXT: "paypal-button-text",
            SPACE: "paypal-button-space",
            CARD: "paypal-button-card",
            PERSONALIZATION_TEXT: "paypal-personalization-text",
            VAULT_LABEL: "paypal-vault-label",
            VAULT_HEADER: "paypal-vault-header",
            MENU_TOGGLE: "menu-toggle",
            SEPARATOR: "paypal-separator",
            DOM_READY: "dom-ready",
            HIDDEN: "hidden",
          };
        function ri(n, e) {
          var r = n.optional,
            t = n.className;
          return Kt(
            "span",
            {
              class: [ei.TEXT].concat(void 0 === t ? [] : t).join(" "),
              optional: r,
            },
            e
          );
        }
        function ti() {
          return Kt("span", { class: [ei.SPACE].join(" ") }, " ");
        }
        function oi(n) {
          return n.logo;
        }
        r(0);
        var ii = {
          layouts: [ni.VERTICAL],
          platforms: [ke.DESKTOP, ke.MOBILE],
          colors: ["silver", "black", "white"],
          logoColors: ((Vo = {}), (Vo.black = "white"), Vo),
          shapes: ["rect", "pill"],
          textColors:
            ((Yo = {}),
            (Yo.default = "black"),
            (Yo.blue = "white"),
            (Yo.black = "white"),
            (Yo.darkblue = "white"),
            Yo),
          secondaryColors:
            ((Ko = {}),
            (Ko.default = "silver"),
            (Ko.black = "black"),
            (Ko.white = "white"),
            Ko),
          secondaryVaultColors:
            ((Xo = {}),
            (Xo.default = "silver"),
            (Xo.black = "black"),
            (Xo.white = "white"),
            Xo),
          Logo: function () {
            throw new Error("Not implemented");
          },
          Label: oi,
        };
        function ai(n) {
          var e = n.url;
          return Kt(
            Xt,
            null,
            Kt("style", {
              nonce: n.nonce,
              innerHTML:
                "\n                    .tracking-beacon {\n                        visibility: hidden;\n                        position: absolute;\n                        height: 1px;\n                        width: 1px;\n                    }\n                ",
            }),
            Kt("img", { class: "tracking-beacon", src: e })
          );
        }
        var ui,
          si,
          ci,
          li = "\n    max-width: 0%;\n    opacity: 0;\n    overflow: hidden;\n",
          di =
            "\n\n    ." +
            ei.BUTTON +
            " ." +
            ei.TEXT +
            " {\n        \n    position: absolute;\n    visibility: hidden;\n\n    }\n\n    ." +
            ei.BUTTON +
            " ." +
            ei.VAULT_LABEL +
            " {\n        max-width: 60%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n    }\n\n    ." +
            ei.DOM_READY +
            " ." +
            ei.BUTTON +
            " ." +
            ei.TEXT +
            ":not(." +
            ei.PERSONALIZATION_TEXT +
            "):not(." +
            ei.HIDDEN +
            ") {\n        \n    position: static;\n    visibility: visible;\n\n        " +
            li +
            "\n        animation: show-text 1s 0s forwards;\n    }\n\n    @keyframes show-text {\n        0% { " +
            li +
            " }\n        100% { \n    max-width: 100%;\n    opacity: 1;\n }\n    }\n";
        function fi(n) {
          var e = n.logoColor;
          return Kt(
            Xt,
            null,
            Kt(Ao, { logoColor: e }),
            Kt(ti, null),
            Kt(Co, { logoColor: e })
          );
        }
        function pi(n) {}
        function hi(n) {
          return Kt(Xt, null, Kt(oi, n), Kt(pi, n));
        }
        function mi(n) {
          var e = n.label;
          return Kt(
            Xt,
            null,
            Kt(Ao, { logoColor: n.logoColor, optional: !0 }),
            " ",
            Kt(ri, { className: ei.VAULT_LABEL }, e)
          );
        }
        function yi(n) {
          return null;
        }
        function gi() {
          return pn(gi, function () {
            var n, e;
            return (
              ((n = {})[Ae.PAYPAL] = h({}, ii, {
                layouts: [ni.VERTICAL, ni.HORIZONTAL],
                colors: ["gold", "blue", "silver", "black", "white"],
                logoColors:
                  ((e = {}),
                  (e.gold = "blue"),
                  (e.silver = "blue"),
                  (e.blue = "white"),
                  (e.black = "white"),
                  (e.white = "blue"),
                  e),
                Logo: fi,
                Label: hi,
                VaultLabel: mi,
                Tag: yi,
              })),
              (n[Ae.VENMO] = null),
              (n[Ae.ITAU] = null),
              (n[Ae.CREDIT] = null),
              (n[Ae.CARD] = (function () {
                var n,
                  e,
                  r,
                  t,
                  o =
                    (((t = {})[Me.VISA] = { Label: go }),
                    (t[Me.AMEX] = { Label: mo }),
                    (t[Me.MASTERCARD] = { Label: yo }),
                    (t[Me.DISCOVER] = null),
                    (t[Me.JCB] = null),
                    (t[Me.ELO] = null),
                    (t[Me.HIPER] = null),
                    t),
                  i = (((n = {})[Te.BR] = 5), n);
                return h({}, ii, {
                  eligible: function (n) {
                    var e = n.fundingSource,
                      r = n.fundingEligibility.card,
                      t = r && r.vendors,
                      o = Boolean(-1 !== n.components.indexOf("hosted-fields")),
                      i = Boolean(r && r.eligible),
                      a = Boolean(r && r.branded),
                      u = Boolean(
                        t &&
                          Object.keys(t).some(function (n) {
                            return Boolean(
                              t[n] &&
                                t[n].vaultedInstruments &&
                                t[n].vaultedInstruments.length
                            );
                          })
                      );
                    return !(!i || (!a && !u && e !== Ae.CARD && o));
                  },
                  layouts: [ni.VERTICAL],
                  maxCards: i,
                  vendors: o,
                  colors: ["black", "white"],
                  secondaryColors: h(
                    {},
                    ii.secondaryColors,
                    ((e = {}), (e.default = "black"), e)
                  ),
                  logoColors:
                    ((r = {}), (r.white = "black"), (r.default = "white"), r),
                  Logo: function (n) {
                    return Kt(wo, { color: n.logoColor });
                  },
                  Label: function (n) {
                    var e,
                      r = n.logo,
                      t = n.content,
                      o = "he" === (e = n.locale.lang) || "ar" === e;
                    return Kt(
                      Xt,
                      null,
                      o
                        ? Kt(
                            Xt,
                            null,
                            Kt(ri, { optional: !0 }, t.payWithDebitOrCreditCard),
                            Kt(ti, null)
                          )
                        : null,
                      r,
                      o
                        ? null
                        : Kt(
                            Xt,
                            null,
                            Kt(ti, null),
                            Kt(ri, { optional: !0 }, t.payWithDebitOrCreditCard)
                          )
                    );
                  },
                  VaultLabel: function (n) {
                    var e = n.vendor,
                      r = n.label;
                    if (!e)
                      throw new Error("Vendor required for card vault label");
                    var t = o[e];
                    if (!t)
                      throw new Error("Could not find vendor config for " + e);
                    return Kt(
                      Xt,
                      null,
                      Kt(t.Label, { optional: !0 }),
                      " ",
                      Kt(ri, { className: ei.VAULT_LABEL }, r)
                    );
                  },
                });
              })()),
              (n[Ae.IDEAL] = null),
              (n[Ae.SEPA] = null),
              (n[Ae.BANCONTACT] = null),
              (n[Ae.GIROPAY] = null),
              (n[Ae.SOFORT] = null),
              (n[Ae.EPS] = null),
              (n[Ae.MYBANK] = null),
              (n[Ae.P24] = null),
              (n[Ae.PAYU] = null),
              (n[Ae.VERKKOPANKKI] =
                void 0 !==
                  Object({
                    paypal: Object({ eligible: !0, vaultable: !0 }),
                    card: Object({
                      eligible: !0,
                      branded: !0,
                      vendors: Object({
                        visa: Object({ eligible: !0, vaultable: !0 }),
                        mastercard: Object({ eligible: !0, vaultable: !0 }),
                        amex: Object({ eligible: !0, vaultable: !0 }),
                        discover: Object({ eligible: !1, vaultable: !0 }),
                        hiper: Object({ eligible: !1, vaultable: !1 }),
                        elo: Object({ eligible: !1, vaultable: !0 }),
                        jcb: Object({ eligible: !1, vaultable: !0 }),
                      }),
                    }),
                    venmo: Object({ eligible: !1 }),
                    itau: Object({ eligible: !1 }),
                    credit: Object({ eligible: !1 }),
                    sepa: Object({ eligible: !1 }),
                    ideal: Object({ eligible: !1 }),
                    bancontact: Object({ eligible: !1 }),
                    giropay: Object({ eligible: !1 }),
                    eps: Object({ eligible: !1 }),
                    sofort: Object({ eligible: !1 }),
                    mybank: Object({ eligible: !1 }),
                    p24: Object({ eligible: !1 }),
                    zimpler: Object({ eligible: !1 }),
                    wechatpay: Object({ eligible: !1 }),
                    payu: Object({ eligible: !1 }),
                    blik: Object({ eligible: !1 }),
                    trustly: Object({ eligible: !1 }),
                    oxxo: Object({ eligible: !1 }),
                    maxima: Object({ eligible: !1 }),
                    boleto: Object({ eligible: !1 }),
                  }).verkkopankki &&
                Object({
                  paypal: Object({ eligible: !0, vaultable: !0 }),
                  card: Object({
                    eligible: !0,
                    branded: !0,
                    vendors: Object({
                      visa: Object({ eligible: !0, vaultable: !0 }),
                      mastercard: Object({ eligible: !0, vaultable: !0 }),
                      amex: Object({ eligible: !0, vaultable: !0 }),
                      discover: Object({ eligible: !1, vaultable: !0 }),
                      hiper: Object({ eligible: !1, vaultable: !1 }),
                      elo: Object({ eligible: !1, vaultable: !0 }),
                      jcb: Object({ eligible: !1, vaultable: !0 }),
                    }),
                  }),
                  venmo: Object({ eligible: !1 }),
                  itau: Object({ eligible: !1 }),
                  credit: Object({ eligible: !1 }),
                  sepa: Object({ eligible: !1 }),
                  ideal: Object({ eligible: !1 }),
                  bancontact: Object({ eligible: !1 }),
                  giropay: Object({ eligible: !1 }),
                  eps: Object({ eligible: !1 }),
                  sofort: Object({ eligible: !1 }),
                  mybank: Object({ eligible: !1 }),
                  p24: Object({ eligible: !1 }),
                  zimpler: Object({ eligible: !1 }),
                  wechatpay: Object({ eligible: !1 }),
                  payu: Object({ eligible: !1 }),
                  blik: Object({ eligible: !1 }),
                  trustly: Object({ eligible: !1 }),
                  oxxo: Object({ eligible: !1 }),
                  maxima: Object({ eligible: !1 }),
                  boleto: Object({ eligible: !1 }),
                }).verkkopankki.eligible
                  ? h({}, ii, {
                      layouts: [ni.VERTICAL],
                      shippingChange: !1,
                      Logo: function (n) {
                        return (function (n) {
                          var e = n.logoColor,
                            r = void 0 === e ? "default" : e,
                            t = s(n, ["logoColor"]),
                            o = ho("verkkopankki", Ro, r),
                            i = o.primary,
                            a = o.secondary,
                            u = o.tertiary,
                            c = o.quaternary,
                            l = o.quinary,
                            d = o.senary;
                          return Kt(
                            fo,
                            h({}, t, {
                              name: "verkkopankki",
                              logoColor: r,
                              render: function () {
                                return Kt(
                                  "svg",
                                  {
                                    width: "83px",
                                    height: "32px",
                                    viewBox: "0 0 83 32",
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                  Kt(
                                    "defs",
                                    null,
                                    Kt("path", {
                                      d:
                                        "M6.75,0.0879407407 C3.0375,0.0879407407 0,2.96794074 0,6.48794074 L0,6.48794074 L0,24.5027556 C0,28.0227556 3.0375,30.9027556 6.75,30.9027556 L6.75,30.9027556 L25.75025,30.9027556 C29.4625,30.9027556 32.5,28.0227556 32.5,24.5027556 L32.5,24.5027556 L32.5,6.48794074 C32.5,2.96794074 29.4625,0.0879407407 25.75025,0.0879407407 L25.75025,0.0879407407 L6.75,0.0879407407 Z",
                                      id: "path-1",
                                    }),
                                    Kt(
                                      "linearGradient",
                                      {
                                        x1: "80.3415915%",
                                        y1: "2.75555705%",
                                        x2: "19.6584085%",
                                        y2: "97.2445831%",
                                        id: "linearGradient-3",
                                      },
                                      Kt("stop", {
                                        "stop-color": i,
                                        offset: "0%",
                                      }),
                                      Kt("stop", {
                                        "stop-color": a,
                                        offset: "100%",
                                      })
                                    ),
                                    Kt("path", {
                                      d:
                                        "M6.6155,0.206459259 C3.04575,0.206459259 0.125,2.97576296 0.125,6.36041481 L0.125,6.36041481 L0.125,23.6821333 C0.125,27.0670222 3.04575,29.8360889 6.6155,29.8360889 L6.6155,29.8360889 L24.8845,29.8360889 C28.45425,29.8360889 31.375,27.0670222 31.375,23.6821333 L31.375,23.6821333 L31.375,6.36041481 C31.375,2.97576296 28.45425,0.206459259 24.8845,0.206459259 L24.8845,0.206459259 L6.6155,0.206459259 Z",
                                      id: "path-4",
                                    }),
                                    Kt(
                                      "linearGradient",
                                      {
                                        x1: "6.10096128%",
                                        y1: "89.4646408%",
                                        x2: "93.8990386%",
                                        y2: "10.5354941%",
                                        id: "linearGradient-6",
                                      },
                                      Kt("stop", {
                                        "stop-color": i,
                                        offset: "0%",
                                      }),
                                      Kt("stop", {
                                        "stop-color": a,
                                        offset: "100%",
                                      })
                                    ),
                                    Kt("polygon", {
                                      id: "path-7",
                                      points:
                                        "6.5 0.206459259 6.5 10.8330667 0.125 10.8330667 0.125 19.129363 6.5 19.129363 6.5 29.8360889 15.25 29.8360889 15.25 19.129363 31.375 19.129363 31.375 10.8330667 15.25 10.8330667 15.25 0.206459259",
                                    }),
                                    Kt(
                                      "linearGradient",
                                      {
                                        x1: "6.26612168%",
                                        y1: "82.243184%",
                                        x2: "78.1338463%",
                                        y2: "17.635184%",
                                        id: "linearGradient-9",
                                      },
                                      Kt("stop", {
                                        "stop-color": u,
                                        offset: "0%",
                                      }),
                                      Kt("stop", {
                                        "stop-color": c,
                                        offset: "100%",
                                      })
                                    ),
                                    Kt("polygon", {
                                      id: "path-10",
                                      points:
                                        "0.106675 0.228266667 3.17249309 0.228266667 3.17249309 6.24822519 0.106675 6.24822519",
                                    }),
                                    Kt("polygon", {
                                      id: "path-12",
                                      points:
                                        "0.2434 0.228266667 3.30921809 0.228266667 3.30921809 6.24822519 0.2434 6.24822519",
                                    }),
                                    Kt("polygon", {
                                      id: "path-14",
                                      points:
                                        "0.0454 0.228266667 3.11102683 0.228266667 3.11102683 6.24822519 0.0454 6.24822519",
                                    }),
                                    Kt("polygon", {
                                      id: "path-16",
                                      points:
                                        "0.181875 0.228266667 3.24775183 0.228266667 3.24775183 6.24822519 0.181875 6.24822519",
                                    }),
                                    Kt("polygon", {
                                      id: "path-18",
                                      points:
                                        "0.1455 0.211057778 0.90525 0.211057778 0.90525 1.20969481 0.1455 1.20969481",
                                    }),
                                    Kt("polygon", {
                                      id: "path-20",
                                      points:
                                        "0 31.762963 82.90525 31.762963 82.90525 0.228266667 0 0.228266667",
                                    })
                                  ),
                                  Kt(
                                    "g",
                                    {
                                      stroke: "none",
                                      "stroke-width": "1",
                                      fill: "none",
                                      "fill-rule": "evenodd",
                                    },
                                    Kt(
                                      "g",
                                      {
                                        transform:
                                          "translate(-219.000000, -536.000000)",
                                      },
                                      Kt(
                                        "g",
                                        {
                                          transform:
                                            "translate(219.000000, 536.000000)",
                                        },
                                        Kt(
                                          "g",
                                          {
                                            transform:
                                              "translate(0.000000, 0.482844)",
                                          },
                                          Kt(
                                            "mask",
                                            { fill: i },
                                            Kt("use", { href: "#path-1" })
                                          ),
                                          Kt("path", {
                                            d:
                                              "M6.75,0.0879407407 C3.0375,0.0879407407 0,2.96794074 0,6.48794074 L0,6.48794074 L0,24.5027556 C0,28.0227556 3.0375,30.9027556 6.75,30.9027556 L6.75,30.9027556 L25.75025,30.9027556 C29.4625,30.9027556 32.5,28.0227556 32.5,24.5027556 L32.5,24.5027556 L32.5,6.48794074 C32.5,2.96794074 29.4625,0.0879407407 25.75025,0.0879407407 L25.75025,0.0879407407 L6.75,0.0879407407 Z",
                                            fill: "url(#linearGradient-3)",
                                            mask: "url(#mask-2)",
                                          })
                                        ),
                                        Kt(
                                          "g",
                                          {
                                            transform:
                                              "translate(0.500000, 0.956919)",
                                          },
                                          Kt(
                                            "mask",
                                            { fill: i },
                                            Kt("use", { href: "#path-4" })
                                          ),
                                          Kt("path", {
                                            d:
                                              "M6.6155,0.206459259 C3.04575,0.206459259 0.125,2.97576296 0.125,6.36041481 L0.125,6.36041481 L0.125,23.6821333 C0.125,27.0670222 3.04575,29.8360889 6.6155,29.8360889 L6.6155,29.8360889 L24.8845,29.8360889 C28.45425,29.8360889 31.375,27.0670222 31.375,23.6821333 L31.375,23.6821333 L31.375,6.36041481 C31.375,2.97576296 28.45425,0.206459259 24.8845,0.206459259 L24.8845,0.206459259 L6.6155,0.206459259 Z",
                                            fill: "url(#linearGradient-6)",
                                            mask: "url(#mask-5)",
                                          })
                                        ),
                                        Kt(
                                          "g",
                                          {
                                            transform:
                                              "translate(0.500000, 0.956919)",
                                          },
                                          Kt(
                                            "mask",
                                            { id: "mask-8", fill: i },
                                            Kt("use", { href: "#path-7" })
                                          ),
                                          Kt("polygon", {
                                            id: "Fill-7",
                                            fill: "url(#linearGradient-9)",
                                            mask: "url(#mask-8)",
                                            points:
                                              "6.5 0.206459259 6.5 10.8330667 0.125 10.8330667 0.125 19.129363 6.5 19.129363 6.5 29.8360889 15.25 29.8360889 15.25 19.129363 31.375 19.129363 31.375 10.8330667 15.25 10.8330667 15.25 0.206459259",
                                          })
                                        ),
                                        Kt(
                                          "g",
                                          {
                                            transform:
                                              "translate(0.000000, 0.008770)",
                                          },
                                          Kt("path", {
                                            d:
                                              "M41.86625,0.448142222 L41.4055,0.448142222 C41.353,0.448142222 41.30625,0.480142222 41.2895,0.527312593 L39.593,5.31949037 L37.89675,0.527312593 C37.88,0.480142222 37.83325,0.448142222 37.7805,0.448142222 L37.312,0.448142222 C37.2725,0.448142222 37.2355,0.466157037 37.2125,0.496734815 C37.1895,0.527075556 37.1835,0.566186667 37.196,0.601505185 L39.18525,6.16926815 C39.202,6.21643852 39.24875,6.24820148 39.30125,6.24820148 L39.877,6.24820148 C39.9295,6.24820148 39.97625,6.21643852 39.993,6.16926815 L41.98225,0.601505185 C41.995,0.566186667 41.9887546,0.527075556 41.96575,0.496734815 C41.94275,0.466157037 41.90575,0.448142222 41.86625,0.448142222",
                                            fill: l,
                                          }),
                                          Kt("path", {
                                            d:
                                              "M42.770925,3.87662222 C42.776925,3.51656296 42.812175,3.23591111 42.875675,3.04106667 C42.940925,2.84148148 43.045425,2.7058963 43.194675,2.62648889 C43.352175,2.54305185 43.589175,2.50085926 43.899175,2.50085926 C44.163925,2.50085926 44.371675,2.52764444 44.515675,2.58026667 C44.645425,2.62767407 44.736675,2.70684444 44.795175,2.82228148 C44.858175,2.94625185 44.890175,3.12853333 44.890175,3.3632 C44.890175,3.5634963 44.845925,3.69884444 44.758675,3.76616296 C44.663925,3.83964444 44.498675,3.87662222 44.267925,3.87662222 L42.770925,3.87662222 Z M45.209425,4.16983704 C45.430425,3.99845926 45.542675,3.72681481 45.542675,3.3632 C45.542675,3.01238519 45.483675,2.72865185 45.366925,2.52005926 C45.245425,2.30364444 45.058675,2.14767407 44.811175,2.05641481 C44.578175,1.97084444 44.271425,1.92722963 43.899175,1.92722963 C43.455925,1.92722963 43.099425,1.99312593 42.840175,2.12278519 C42.569425,2.25742222 42.372675,2.48995556 42.255175,2.81374815 C42.143675,3.12047407 42.087175,3.55306667 42.087175,4.09896296 C42.087175,4.64035556 42.140925,5.07105185 42.246925,5.37896296 C42.358175,5.70417778 42.548675,5.94168889 42.813175,6.08462222 C43.068925,6.22305185 43.426425,6.29345185 43.876175,6.29345185 C44.339425,6.29345185 44.832675,6.26500741 45.341925,6.2093037 C45.403675,6.20266667 45.450425,6.15312593 45.450425,6.09386667 L45.450425,5.82838519 C45.450425,5.76438519 45.395425,5.71223704 45.327925,5.71223704 L43.975925,5.71223704 C43.640425,5.71223704 43.385175,5.66767407 43.217675,5.57925926 C43.057675,5.49463704 42.949425,5.36260741 42.886925,5.17511111 C42.826425,4.99377778 42.790425,4.74014815 42.780175,4.41991111 L44.298675,4.41991111 C44.689925,4.41991111 44.996175,4.33576296 45.209425,4.16983704 L45.209425,4.16983704 Z",
                                            fill: l,
                                          }),
                                          Kt("path", {
                                            d:
                                              "M48.8798,1.97755259 C48.7618,1.94413037 48.6158,1.92730074 48.4458,1.92730074 C48.1323,1.92730074 47.8433,2.00196741 47.58705,2.14893037 C47.40355,2.25441185 47.2248,2.39118222 47.0538,2.55734519 L46.97705,2.0716563 C46.96805,2.01476741 46.9163,1.97257481 46.8558,1.97257481 L46.52555,1.97257481 C46.4578,1.97257481 46.40305,2.02472296 46.40305,2.08896 L46.40305,6.1318637 C46.40305,6.19610074 46.4578,6.24824889 46.52555,6.24824889 L46.97105,6.24824889 C47.0388,6.24824889 47.09355,6.19610074 47.09355,6.1318637 L47.09355,3.20730074 C47.32605,2.99610074 47.5388,2.84178963 47.7263,2.74934519 C47.9178,2.65476741 48.1468,2.60712296 48.40705,2.60712296 C48.5178,2.60712296 48.65755,2.62181926 48.82255,2.65073778 C48.85805,2.65713778 48.8953,2.64789333 48.9233,2.62584889 C48.95105,2.60380444 48.96755,2.57109333 48.96755,2.53648593 L48.96755,2.08896 C48.96755,2.03752296 48.9318,1.99224889 48.8798,1.97755259",
                                            fill: l,
                                          }),
                                          Kt(
                                            "g",
                                            {
                                              transform:
                                                "translate(49.500000, 0.000000)",
                                            },
                                            Kt(
                                              "mask",
                                              { id: "mask-11", fill: i },
                                              Kt("use", { href: "#path-10" })
                                            ),
                                            Kt("path", {
                                              d:
                                                "M1.301675,3.9731437 L3.039925,2.16715852 C3.072675,2.13302519 3.080925,2.08395852 3.061425,2.04200296 C3.041925,2.00004741 2.997925,1.97278815 2.949425,1.97278815 L2.373425,1.97278815 C2.338925,1.97278815 2.306425,1.98629926 2.283175,2.01047704 L0.797175,3.54979556 L0.797175,0.344343704 C0.797175,0.280343704 0.742425,0.228195556 0.674675,0.228195556 L0.229175,0.228195556 C0.161425,0.228195556 0.106675,0.280343704 0.106675,0.344343704 L0.106675,6.13184 C0.106675,6.19607704 0.161425,6.24822519 0.229175,6.24822519 L0.674675,6.24822519 C0.742425,6.24822519 0.797175,6.19607704 0.797175,6.13184 L0.797175,4.41948444 L2.370925,6.20650667 C2.394175,6.23281778 2.428675,6.24822519 2.464925,6.24822519 L3.049925,6.24822519 C3.097675,6.24822519 3.140675,6.22191407 3.160925,6.18090667 C3.181175,6.14037333 3.174425,6.09178074 3.143925,6.05741037 L1.301675,3.9731437 Z",
                                              fill: l,
                                              mask: "url(#mask-11)",
                                            })
                                          ),
                                          Kt(
                                            "g",
                                            {
                                              transform:
                                                "translate(53.250000, 0.000000)",
                                            },
                                            Kt(
                                              "mask",
                                              { id: "mask-13", fill: i },
                                              Kt("use", { href: "#path-12" })
                                            ),
                                            Kt("path", {
                                              d:
                                                "M1.4384,3.9731437 L3.1764,2.16715852 C3.20915,2.13302519 3.2174,2.08395852 3.1979,2.04200296 C3.1784,2.00004741 3.1344,1.97278815 3.0859,1.97278815 L2.51015,1.97278815 C2.47565,1.97278815 2.44315,1.98629926 2.4199,2.01047704 L0.9339,3.54979556 L0.9339,0.344343704 C0.9339,0.280343704 0.87915,0.228195556 0.8114,0.228195556 L0.3659,0.228195556 C0.29815,0.228195556 0.2434,0.280343704 0.2434,0.344343704 L0.2434,6.13184 C0.2434,6.19607704 0.29815,6.24822519 0.3659,6.24822519 L0.8114,6.24822519 C0.87915,6.24822519 0.9339,6.19607704 0.9339,6.13184 L0.9339,4.41948444 L2.5074,6.20650667 C2.53065,6.23281778 2.56515,6.24822519 2.6014,6.24822519 L3.18665,6.24822519 C3.2344,6.24822519 3.2774,6.22191407 3.29765,6.18090667 C3.3179,6.14037333 3.31115,6.09178074 3.28065,6.05741037 L1.4384,3.9731437 Z",
                                              fill: l,
                                              mask: "url(#mask-13)",
                                            })
                                          ),
                                          Kt(
                                            "g",
                                            {
                                              transform:
                                                "translate(74.500000, 0.000000)",
                                            },
                                            Kt(
                                              "mask",
                                              { id: "mask-15", fill: i },
                                              Kt("use", { href: "#path-14" })
                                            ),
                                            Kt("path", {
                                              d:
                                                "M1.2404,3.9731437 L2.9784,2.16715852 C3.01115,2.13302519 3.0194,2.08395852 2.9999,2.04200296 C2.9804,2.00004741 2.9364,1.97278815 2.8879,1.97278815 L2.3119,1.97278815 C2.2774,1.97278815 2.2449,1.98629926 2.22165,2.01047704 L0.7359,3.54955852 L0.7359,0.344343704 C0.7359,0.280343704 0.68115,0.228195556 0.6134,0.228195556 L0.1679,0.228195556 C0.10015,0.228195556 0.0454,0.280343704 0.0454,0.344343704 L0.0454,6.13184 C0.0454,6.19607704 0.10015,6.24822519 0.1679,6.24822519 L0.6134,6.24822519 C0.68115,6.24822519 0.7359,6.19607704 0.7359,6.13184 L0.7359,4.41995852 L2.3094,6.20650667 C2.33265,6.23281778 2.36715,6.24822519 2.4034,6.24822519 L2.9884,6.24822519 C3.03615,6.24822519 3.07915,6.22191407 3.09965,6.18090667 C3.11965,6.14037333 3.1129,6.09178074 3.0824,6.05741037 L1.2404,3.9731437 Z",
                                              fill: l,
                                              mask: "url(#mask-15)",
                                            })
                                          ),
                                          Kt(
                                            "g",
                                            {
                                              transform:
                                                "translate(78.250000, 0.000000)",
                                            },
                                            Kt(
                                              "mask",
                                              { id: "mask-17", fill: i },
                                              Kt("use", { href: "#path-16" })
                                            ),
                                            Kt("path", {
                                              d:
                                                "M1.377125,3.9731437 L3.115125,2.16715852 C3.147875,2.13302519 3.156125,2.08395852 3.136625,2.04200296 C3.117125,2.00004741 3.073125,1.97278815 3.024625,1.97278815 L2.448625,1.97278815 C2.414125,1.97278815 2.381625,1.98629926 2.358375,2.01047704 L0.872375,3.54979556 L0.872375,0.344343704 C0.872375,0.280343704 0.817625,0.228195556 0.749875,0.228195556 L0.304375,0.228195556 C0.236625,0.228195556 0.181875,0.280343704 0.181875,0.344343704 L0.181875,6.13184 C0.181875,6.19607704 0.236625,6.24822519 0.304375,6.24822519 L0.749875,6.24822519 C0.817625,6.24822519 0.872375,6.19607704 0.872375,6.13184 L0.872375,4.41948444 L2.446125,6.20650667 C2.469375,6.23281778 2.503875,6.24822519 2.540125,6.24822519 L3.125125,6.24822519 C3.172875,6.24822519 3.215875,6.22191407 3.236375,6.18090667 C3.256375,6.14037333 3.249625,6.09178074 3.219125,6.05741037 L1.377125,3.9731437 Z",
                                              fill: l,
                                              mask: "url(#mask-17)",
                                            })
                                          ),
                                          Kt("path", {
                                            d:
                                              "M58.732575,5.68936296 C58.439825,5.68936296 58.209325,5.65238519 58.047825,5.57937778 C57.899325,5.51253333 57.782075,5.37078519 57.699325,5.15863704 C57.610075,4.9298963 57.564825,4.576 57.564825,4.10642963 C57.564825,3.63733333 57.610075,3.28201481 57.699325,3.05042963 C57.781825,2.83685926 57.898825,2.69534815 58.046575,2.63063704 C58.209075,2.55952593 58.439825,2.52373333 58.732575,2.52373333 C59.020325,2.52373333 59.250075,2.55952593 59.415075,2.63063704 C59.565825,2.69582222 59.685075,2.83757037 59.769575,3.05161481 C59.861575,3.28248889 59.907825,3.63733333 59.907825,4.10642963 C59.907825,4.57576296 59.861575,4.92942222 59.769825,5.15768889 C59.685075,5.37007407 59.565075,5.51205926 59.414325,5.57914074 C59.249825,5.65238519 59.020575,5.68936296 58.732575,5.68936296 M59.771825,2.10512593 C59.508075,1.98731852 59.158325,1.92734815 58.732575,1.92734815 C58.306325,1.92734815 57.958325,1.9858963 57.697825,2.1010963 C57.424575,2.22222222 57.215075,2.44835556 57.075325,2.77333333 C56.942075,3.08432593 56.874325,3.5328 56.874325,4.10642963 C56.874325,4.6701037 56.942075,5.11478519 57.075325,5.42814815 C57.214825,5.7554963 57.425075,5.98542222 57.700075,6.11128889 C57.964575,6.23217778 58.311575,6.29357037 58.732575,6.29357037 C59.158575,6.29357037 59.508575,6.23217778 59.772825,6.11128889 C60.048325,5.98518519 60.258325,5.75668148 60.397325,5.43217778 C60.530575,5.12118519 60.598575,4.67508148 60.598575,4.10642963 C60.598575,3.53848889 60.530575,3.09238519 60.397325,2.78068148 C60.258075,2.45617778 60.047825,2.22885926 59.771825,2.10512593",
                                            fill: l,
                                          }),
                                          Kt("path", {
                                            d:
                                              "M64.20645,4.09908148 C64.20645,5.1693037 63.87745,5.68936296 63.19995,5.68936296 C62.8272,5.68936296 62.43195,5.5808 62.0247,5.36651852 L62.0247,2.85771852 C62.2282,2.75958519 62.4192,2.67922963 62.59295,2.61902222 C62.7757,2.5554963 62.97995,2.52373333 63.19995,2.52373333 C63.4832,2.52373333 63.7147,2.64557037 63.90745,2.89682963 C64.10595,3.15591111 64.20645,3.56077037 64.20645,4.09908148 M63.2997,1.92734815 C63.0547,1.92734815 62.78745,1.98115556 62.5057,2.08734815 C62.30445,2.16296296 62.12945,2.24284444 61.9832,2.32533333 L61.92195,2.06364444 C61.9097,2.01031111 61.8597,1.97262222 61.80245,1.97262222 L61.4567,1.97262222 C61.38895,1.97262222 61.3342,2.02477037 61.3342,2.08900741 L61.3342,7.9296 C61.3342,7.99383704 61.38895,8.04574815 61.4567,8.04574815 L61.9022,8.04574815 C61.96995,8.04574815 62.0247,7.99383704 62.0247,7.9296 L62.0247,5.96077037 C62.19345,6.04562963 62.3712,6.11721481 62.55545,6.17386667 C62.8122,6.25327407 63.0627,6.29357037 63.2997,6.29357037 C64.35945,6.29357037 64.8972,5.5552 64.8972,4.09908148 C64.8972,3.49985185 64.77145,2.98808889 64.52345,2.57754074 C64.2632,2.14613333 63.85145,1.92734815 63.2997,1.92734815",
                                            fill: l,
                                          }),
                                          Kt("path", {
                                            d:
                                              "M67.38835,5.62915556 C66.91085,5.75265185 66.61485,5.74459259 66.3756,5.56325926 C66.2516,5.46915556 66.19135,5.31531852 66.19135,5.0925037 L66.19135,4.90311111 C66.19135,4.69973333 66.25035,4.54234074 66.37235,4.42216296 C66.4921,4.30364444 66.6886,4.23917037 66.95685,4.23016296 L68.2581,4.18204444 L68.2581,5.35348148 L67.9846,5.45042963 C67.8086,5.51253333 67.6081,5.5725037 67.38835,5.62915556 M67.4206,1.90435556 C66.95785,1.90435556 66.46885,1.93801481 65.96735,2.00414815 C65.90685,2.01220741 65.86185,2.06127407 65.86185,2.11911111 L65.86185,2.38459259 C65.86185,2.44882963 65.9166,2.50097778 65.98435,2.50097778 L67.26685,2.50097778 C67.6521,2.50097778 67.9166,2.56379259 68.05385,2.68847407 C68.18935,2.8114963 68.2581,3.00562963 68.2581,3.26447407 L68.2581,3.70962963 L66.8831,3.70962963 C66.4486,3.70962963 66.1066,3.81700741 65.86635,4.02915556 C65.62385,4.2432 65.50085,4.53475556 65.50085,4.89528889 L65.50085,5.16859259 C65.50085,5.51324444 65.61035,5.7901037 65.8256,5.99087407 C66.04035,6.19164444 66.3211,6.29357037 66.66035,6.29357037 C66.8921,6.29357037 67.14185,6.2546963 67.40285,6.17813333 C67.65735,6.10394074 67.88985,6.02168889 68.0931,5.93422222 C68.1851,5.89463704 68.2541,5.86405926 68.30635,5.83988148 L68.3676,6.15324444 C68.37835,6.208 68.42885,6.24805926 68.48785,6.24805926 L68.82585,6.24805926 C68.8936,6.24805926 68.94835,6.19614815 68.94835,6.13191111 L68.94835,3.24195556 C68.94835,2.79585185 68.8216,2.45712593 68.5716,2.23573333 C68.32385,2.016 67.93635,1.90435556 67.4206,1.90435556",
                                            fill: l,
                                          }),
                                          Kt("path", {
                                            d:
                                              "M72.05925,1.90440296 C71.77425,1.90440296 71.48575,1.95702519 71.20125,2.0601363 C70.9805,2.14049185 70.7715,2.2393363 70.5785,2.35477333 L70.50425,2.06179556 C70.49125,2.00941037 70.44175,1.97266963 70.38525,1.97266963 L70.055,1.97266963 C69.9875,1.97266963 69.9325,2.02481778 69.9325,2.08881778 L69.9325,6.13195852 C69.9325,6.19595852 69.9875,6.24810667 70.055,6.24810667 L70.5005,6.24810667 C70.568,6.24810667 70.623,6.19595852 70.623,6.13195852 L70.623,2.91536593 C70.86175,2.78926222 71.07525,2.69515852 71.2585,2.63471407 C71.4525,2.57118815 71.6805,2.53895111 71.9365,2.53895111 C72.18875,2.53895111 72.3835,2.61646222 72.53225,2.77646222 C72.68475,2.94049185 72.75875,3.14481778 72.75875,3.40105481 L72.75875,6.13195852 C72.75875,6.19595852 72.81375,6.24810667 72.88125,6.24810667 L73.3265,6.24810667 C73.39425,6.24810667 73.44925,6.19595852 73.44925,6.13195852 L73.44925,3.3555437 C73.44925,2.9561363 73.33025,2.61243259 73.096,2.33462519 C72.855,2.04923259 72.506,1.90440296 72.05925,1.90440296",
                                            fill: l,
                                          }),
                                          Kt("path", {
                                            d:
                                              "M82.751875,1.97269333 L82.306375,1.97269333 C82.238625,1.97269333 82.183875,2.02484148 82.183875,2.08884148 L82.183875,6.13198222 C82.183875,6.19598222 82.238625,6.24813037 82.306375,6.24813037 L82.751875,6.24813037 C82.819625,6.24813037 82.874375,6.19598222 82.874375,6.13198222 L82.874375,2.08884148 C82.874375,2.02484148 82.819625,1.97269333 82.751875,1.97269333",
                                            fill: l,
                                          }),
                                          Kt(
                                            "g",
                                            {
                                              transform:
                                                "translate(82.000000, 0.237037)",
                                            },
                                            Kt(
                                              "mask",
                                              { id: "mask-19", fill: i },
                                              Kt("use", { href: "#path-18" })
                                            ),
                                            Kt("path", {
                                              d:
                                                "M0.68275,0.211057778 L0.38325,0.211057778 C0.239,0.211057778 0.1455,0.301368889 0.1455,0.441220741 L0.1455,0.979531852 C0.1455,1.0617837 0.1805,1.11393185 0.21,1.14308741 C0.2405,1.17342815 0.29525,1.20969481 0.38325,1.20969481 L0.68275,1.20969481 C0.78525,1.20969481 0.90525,1.14925037 0.90525,0.979531852 L0.90525,0.441220741 C0.90525,0.271502222 0.78525,0.211057778 0.68275,0.211057778 L0.68275,0.211057778 Z",
                                              fill: l,
                                              mask: "url(#mask-19)",
                                            })
                                          ),
                                          Kt("polygon", {
                                            fill: d,
                                            points:
                                              "54.410575 25.6368119 53.503075 25.6368119 51.980825 27.2138193 51.980825 23.8924563 51.290325 23.8924563 51.290325 29.9122489 51.980825 29.9122489 51.980825 28.0835081 53.591325 29.9122489 54.496075 29.9122489 52.485575 27.6371674",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M38.2935,12.7641126 L40.91225,12.7261867 L40.91225,12.171283 L38.2935,12.133357 L38.2935,10.654957 C38.2935,10.4489719 38.344,10.2948978 38.4435,10.1967644 C38.5435,10.098157 38.68275,10.0505126 38.86975,10.0505126 L41.235,10.0505126 L41.235,9.48233481 L41.1185,9.47688296 C40.2725,9.43658667 39.47975,9.41596444 38.76225,9.41596444 C38.44075,9.41596444 38.16525,9.51149037 37.9435,9.69969778 C37.7175,9.89146074 37.603,10.1948681 37.603,10.6016237 L37.603,15.2160237 L38.2935,15.2160237 L38.2935,12.7641126 Z",
                                            fill: d,
                                          }),
                                          Kt("path", {
                                            d:
                                              "M42.21085,10.3483733 C42.24135,10.3787141 42.2961,10.4145067 42.3836,10.4145067 L42.68335,10.4145067 C42.78585,10.4145067 42.9056,10.3540622 42.9056,10.1845807 L42.9056,9.64603259 C42.9056,9.47631407 42.78585,9.41586963 42.68335,9.41586963 L42.3836,9.41586963 C42.23935,9.41586963 42.1461,9.50618074 42.1461,9.64603259 L42.1461,10.1845807 C42.1461,10.2665956 42.1811,10.3189807 42.2106,10.3481363 L42.21085,10.3483733 Z",
                                            fill: d,
                                          }),
                                          Kt(
                                            "mask",
                                            { id: "mask-21", fill: i },
                                            Kt("use", { href: "#path-20" })
                                          ),
                                          Kt("polygon", {
                                            fill: d,
                                            mask: "url(#mask-21)",
                                            points:
                                              "42.1845 15.2158815 42.875 15.2158815 42.875 10.9404444 42.1845 10.9404444",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M47.4611,15.2159763 L47.4611,12.3236504 C47.4611,11.9240059 47.3421,11.5805393 47.10785,11.3027319 C46.86635,11.0171022 46.5176,10.8722726 46.07085,10.8722726 C45.78635,10.8722726 45.4976,10.9246578 45.21335,11.0280059 C44.9921,11.1083615 44.7831,11.2072059 44.59035,11.322643 L44.49335,10.9405393 L43.94435,10.9405393 L43.94435,15.2159763 L44.6346,15.2159763 L44.6346,11.8829985 C44.8736,11.7568948 45.08735,11.6627911 45.2701,11.6028207 C45.46435,11.5388207 45.6926,11.5068207 45.9481,11.5068207 C46.20035,11.5068207 46.39535,11.5843319 46.5441,11.7443319 C46.6966,11.9083615 46.7706,12.1126874 46.7706,12.3689244 L46.7706,15.2159763 L47.4611,15.2159763 Z",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M51.33365,15.2159763 L52.02415,15.2159763 L52.02415,12.3236504 C52.02415,11.9240059 51.90515,11.5805393 51.67115,11.3027319 C51.42965,11.0171022 51.0809,10.8722726 50.63415,10.8722726 C50.34915,10.8722726 50.06065,10.9246578 49.7764,11.0280059 C49.5554,11.1083615 49.3464,11.2072059 49.1534,11.322643 L49.05665,10.9405393 L48.50715,10.9405393 L48.50715,15.2159763 L49.1979,15.2159763 L49.1979,11.8829985 C49.4369,11.7568948 49.65065,11.6627911 49.83365,11.6028207 C50.02715,11.5388207 50.2554,11.5068207 50.5114,11.5068207 C50.76365,11.5068207 50.9584,11.5843319 51.10715,11.7443319 C51.25965,11.9083615 51.33365,12.1126874 51.33365,12.3689244 L51.33365,15.2159763 Z",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("polygon", {
                                            fill: d,
                                            mask: "url(#mask-21)",
                                            points:
                                              "53.07025 15.2158815 53.761 15.2158815 53.761 10.9404444 53.07025 10.9404444",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M53.2697,10.4145778 L53.5692,10.4145778 C53.6717,10.4145778 53.7917,10.3541333 53.7917,10.1844148 L53.7917,9.6461037 C53.7917,9.47638519 53.6717,9.41594074 53.5692,9.41594074 L53.2697,9.41594074 C53.12545,9.41594074 53.03195,9.50625185 53.03195,9.6461037 L53.03195,10.1844148 C53.03195,10.2666667 53.06695,10.3190519 53.0967,10.3482074 C53.1272,10.3785481 53.1817,10.4145778 53.2697,10.4145778",
                                            id: "Fill-52",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M55.15935,13.1527822 C55.3896,13.3137304 55.7216,13.3952711 56.1461,13.3952711 L56.6991,13.3952711 C56.9451,13.3952711 57.12785,13.4412563 57.24285,13.5318044 C57.3526,13.6180859 57.40585,13.7439526 57.40585,13.9165156 L57.40585,14.1137304 C57.40585,14.3467378 57.34735,14.4984415 57.23135,14.5638637 C57.0951,14.6409007 56.87735,14.6800119 56.5836,14.6800119 L54.82535,14.6800119 L54.82535,15.1588267 L54.9261,15.1761304 C55.0501,15.1972267 55.28985,15.2164267 55.65985,15.2346785 C56.0211,15.2522193 56.3111,15.2614637 56.52235,15.2614637 C56.99485,15.2614637 57.36685,15.1813452 57.6286,15.0234785 C57.90835,14.8549452 58.05035,14.5565156 58.05035,14.1362489 L58.05035,13.8785896 C58.05035,13.5313304 57.93135,13.2580267 57.6966,13.0662637 C57.46735,12.8790044 57.15235,12.7837156 56.76035,12.7837156 L56.19985,12.7837156 C55.9266,12.7837156 55.7246,12.7474489 55.59885,12.6751526 C55.49285,12.6147081 55.43935,12.4812563 55.43935,12.2781156 L55.43935,12.1034193 C55.43935,11.8753896 55.4986,11.717997 55.6161,11.6357452 C55.74485,11.54496 55.95435,11.4989748 56.2381,11.4989748 L57.8966,11.4989748 L57.8966,11.0111526 L57.7936,10.9952711 C57.6266,10.9696711 57.3876,10.9473896 57.08285,10.9293748 C56.77935,10.9118341 56.5161,10.9028267 56.29985,10.9028267 C55.78935,10.9028267 55.42085,10.9971674 55.17335,11.1910637 C54.92235,11.3880415 54.79485,11.6950044 54.79485,12.1034193 L54.79485,12.3082193 C54.79485,12.6998044 54.9176,12.9840119 55.15935,13.1527822",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M61.668375,12.3615763 L61.668375,15.2159763 L62.358875,15.2159763 L62.358875,12.3236504 C62.358875,11.9138133 62.238125,11.5672652 62.000375,11.2939615 C61.756875,11.0140207 61.409875,10.8722726 60.968875,10.8722726 C60.683875,10.8722726 60.394125,10.9246578 60.107625,11.0277689 C59.902625,11.1017244 59.709875,11.1910874 59.532625,11.2944356 L59.532625,9.1961837 L58.841875,9.1961837 L58.841875,15.2159763 L59.532625,15.2159763 L59.532625,11.8829985 C59.771625,11.7571319 59.985125,11.6630281 60.167875,11.6028207 C60.361625,11.5388207 60.590125,11.5068207 60.846125,11.5068207 C61.098375,11.5068207 61.293125,11.5843319 61.441625,11.7440948 C61.594125,11.9085985 61.668375,12.1105541 61.668375,12.3615763",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M41.2896,19.6944356 C41.2896,20.3666726 41.2346,20.874643 41.1261,21.2031763 C41.0241,21.5127467 40.8696,21.7208652 40.66735,21.821843 C40.45385,21.9285096 40.13585,21.9825541 39.72235,21.9825541 C39.2936,21.9825541 38.96785,21.9285096 38.7541,21.821843 C38.5526,21.7211022 38.40235,21.515117 38.3076,21.2093393 C38.20635,20.8829393 38.1551,20.3730726 38.1551,19.6944356 C38.1551,19.0020504 38.2151,18.4784356 38.33335,18.1380504 C38.44535,17.815443 38.6046,17.6018726 38.80685,17.5032652 C39.0211,17.3982578 39.3291,17.3453985 39.72235,17.3453985 C40.13585,17.3453985 40.4541,17.3982578 40.6686,17.5032652 C40.86985,17.6013985 41.02385,17.8116504 41.12585,18.1280948 C41.23435,18.4646874 41.2896,18.9916207 41.2896,19.6944356 M41.01035,16.9474133 C40.6946,16.7957096 40.26135,16.7184356 39.72235,16.7184356 C39.19885,16.7184356 38.77185,16.7957096 38.45385,16.9471763 C38.1241,17.1045689 37.87285,17.4070281 37.70635,17.8460207 C37.5461,18.2684207 37.46485,18.8904059 37.46485,19.6944356 C37.46485,20.4982281 37.54485,21.1149985 37.7026,21.527917 C37.86685,21.9579022 38.11535,22.2501689 38.44085,22.3971319 C38.75285,22.5379319 39.18385,22.609517 39.72235,22.609517 C40.2606,22.609517 40.6916,22.5379319 41.00385,22.3971319 C41.3296,22.2499319 41.57785,21.9576652 41.7421,21.527917 C41.89985,21.1149985 41.97985,20.4982281 41.97985,19.6944356 C41.97985,18.8863763 41.90135,18.263443 41.74635,17.8429393 C41.5851,17.406317 41.3376,17.1048059 41.01035,16.9474133",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M45.212575,18.2203733 C44.927325,18.2203733 44.638825,18.2729956 44.354825,18.3761067 C44.133575,18.4564622 43.924825,18.5553067 43.731825,18.6705067 L43.634825,18.28864 L43.085575,18.28864 L43.085575,22.564077 L43.776325,22.564077 L43.776325,19.2313363 C44.015325,19.1049956 44.228825,19.0108919 44.411825,18.9509215 C44.605575,18.8871585 44.833825,18.8549215 45.089825,18.8549215 C45.342325,18.8549215 45.536825,18.9324326 45.685575,19.0924326 C45.838075,19.2566993 45.912325,19.4610252 45.912325,19.7170252 L45.912325,22.564077 L46.602825,22.564077 L46.602825,19.6717511 C46.602825,19.2723437 46.483825,18.928877 46.249075,18.6508326 C46.007825,18.365203 45.658825,18.2203733 45.212575,18.2203733",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M50.09245,16.7641126 L49.79295,16.7641126 C49.64845,16.7641126 49.55495,16.8544237 49.55495,16.9942756 L49.55495,17.5325867 C49.55495,17.6143644 49.5897,17.6665126 49.61895,17.6959052 L49.61995,17.6968533 C49.65045,17.726957 49.70545,17.7627496 49.79295,17.7627496 L50.09245,17.7627496 C50.19495,17.7627496 50.31495,17.7023052 50.31495,17.5325867 L50.31495,16.9942756 C50.31495,16.824557 50.19495,16.7641126 50.09245,16.7641126",
                                            id: "Fill-57",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("polygon", {
                                            fill: d,
                                            mask: "url(#mask-21)",
                                            points:
                                              "49.59325 22.5640296 50.284 22.5640296 50.284 18.2885926 49.59325 18.2885926",
                                          }),
                                          Kt("polygon", {
                                            fill: d,
                                            mask: "url(#mask-21)",
                                            points:
                                              "47.71725 22.5640296 48.408 22.5640296 48.408 16.544 47.71725 16.544",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M53.753575,18.2203733 C53.468325,18.2203733 53.179825,18.2729956 52.895825,18.3761067 C52.674575,18.4564622 52.465825,18.5553067 52.272825,18.6705067 L52.175825,18.28864 L51.626575,18.28864 L51.626575,22.564077 L52.317325,22.564077 L52.317325,19.2313363 C52.556325,19.1052326 52.769575,19.0111289 52.952575,18.9509215 C53.146325,18.8871585 53.374575,18.8549215 53.630825,18.8549215 C53.883075,18.8549215 54.077575,18.9324326 54.226325,19.0924326 C54.378825,19.2566993 54.453075,19.4610252 54.453075,19.7170252 L54.453075,22.564077 L55.143575,22.564077 L55.143575,19.6717511 C55.143575,19.2723437 55.024575,18.928877 54.790075,18.6508326 C54.548825,18.365203 54.200075,18.2203733 53.753575,18.2203733",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M58.651775,19.6791704 C58.651775,19.8792296 58.607525,20.0148148 58.520275,20.0821333 C58.425525,20.1556148 58.260275,20.1925926 58.029275,20.1925926 L56.532025,20.1925926 C56.538275,19.8330074 56.573525,19.5523556 56.637025,19.357037 C56.702275,19.1572148 56.806525,19.0218667 56.956025,18.9426963 C57.114025,18.8590222 57.351025,18.8168296 57.660775,18.8168296 C57.925525,18.8168296 58.133025,18.8436148 58.276775,18.896237 C58.406775,18.9438815 58.498025,19.0230519 58.556275,19.1382519 C58.619775,19.2629333 58.651775,19.4452148 58.651775,19.6791704 M59.103275,22.5252741 L59.211525,22.5134222 L59.211525,22.0282074 L57.737525,22.0282074 C57.401775,22.0282074 57.146525,21.9836444 56.979025,21.8952296 C56.818775,21.8106074 56.710775,21.6785778 56.648275,21.4913185 C56.588025,21.3095111 56.552275,21.0558815 56.541775,20.7361185 L58.060275,20.7361185 C58.451025,20.7361185 58.757525,20.6519704 58.970775,20.4858074 C59.191775,20.3146667 59.303775,20.0430222 59.303775,19.6791704 C59.303775,19.3285926 59.244775,19.0446222 59.128275,18.8360296 C59.007025,18.6196148 58.820275,18.4636444 58.572775,18.3723852 C58.339025,18.2868148 58.032275,18.2432 57.660775,18.2432 C57.217775,18.2432 56.861275,18.3090963 56.601275,18.4387556 C56.330525,18.5741037 56.133775,18.8064 56.016775,19.1294815 C55.905275,19.4359704 55.848525,19.868563 55.848525,20.4149333 C55.848525,20.9563259 55.902275,21.3867852 56.008275,21.6949333 C56.119775,22.0203852 56.310525,22.2578963 56.574525,22.4008296 C56.830275,22.5392593 57.188025,22.6094222 57.637525,22.6094222 C58.101025,22.6094222 58.594025,22.5809778 59.103275,22.5252741",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M38.2935,26.6307793 L38.2935,24.7392237 L39.707,24.7392237 C40.294,24.7392237 40.5675,25.0253274 40.5675,25.6392533 C40.5675,25.94432 40.489,26.1901274 40.334,26.3700385 C40.183,26.545683 39.993,26.6307793 39.753,26.6307793 L38.2935,26.6307793 Z M38.2935,27.2195793 L39.7685,27.2195793 C40.061,27.2195793 40.29575,27.3034904 40.4865,27.4755793 C40.6755,27.646483 40.76725,27.87712 40.76725,28.1805274 C40.76725,28.6060089 40.68275,28.8994607 40.51625,29.0528237 C40.349,29.2071348 40.09725,29.285357 39.7685,29.285357 L38.2935,29.285357 L38.2935,27.2195793 Z M40.63425,26.8919941 C40.76925,26.8064237 40.88875,26.6893274 40.99175,26.5416533 C41.158,26.3034311 41.2425,26.0023941 41.2425,25.6470756 C41.2425,24.6429867 40.71425,24.1124978 39.71475,24.1124978 L37.603,24.1124978 L37.603,29.91232 L39.77625,29.91232 C40.313,29.91232 40.7285,29.7857422 41.0115,29.5361422 C41.29725,29.2844089 41.44225,28.8513422 41.44225,28.2487941 C41.44225,27.8166756 41.327,27.4762904 41.0995,27.2380681 C40.95575,27.0873126 40.80025,26.9714015 40.63425,26.8919941 L40.63425,26.8919941 Z",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M44.049475,29.2935111 C43.567225,29.4170074 43.274725,29.4084741 43.036725,29.2276148 C42.912725,29.1337481 42.852725,28.9801481 42.852725,28.7568593 L42.852725,28.5674667 C42.852725,28.3636148 42.911725,28.2064593 43.033475,28.0862815 C43.152975,27.968 43.349475,27.9035259 43.617975,27.8945185 L44.919225,27.8464 L44.919225,29.017837 L44.645225,29.1145481 C44.471975,29.1759407 44.271725,29.2361481 44.049475,29.2935111 M44.081725,25.5687111 C43.617225,25.5687111 43.128225,25.6023704 42.628475,25.6685037 L42.522975,25.6827259 L42.522975,26.1653333 L43.927975,26.1653333 C44.313225,26.1653333 44.577975,26.2281481 44.714975,26.3528296 C44.850475,26.4758519 44.919225,26.6699852 44.919225,26.9288296 L44.919225,27.3739852 L43.544225,27.3739852 C43.109475,27.3739852 42.767475,27.4816 42.527475,27.6935111 C42.284975,27.9073185 42.161975,28.1988741 42.161975,28.5596444 L42.161975,28.8329481 C42.161975,29.1771259 42.271225,29.4537481 42.486475,29.6549926 C42.701475,29.856 42.982475,29.9579259 43.321475,29.9579259 C43.552225,29.9579259 43.801975,29.9190519 44.063975,29.8424889 C44.318475,29.7682963 44.550975,29.6860444 44.754475,29.5985778 C44.846475,29.5589926 44.915225,29.5281778 44.967475,29.504237 L45.047225,29.9121778 L45.609475,29.9121778 L45.609475,26.9063111 C45.609475,26.4602074 45.482725,26.1214815 45.232725,25.8998519 C44.984975,25.6801185 44.597725,25.5687111 44.081725,25.5687111",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M48.907625,25.5687585 C48.622625,25.5687585 48.334125,25.6213807 48.049875,25.7244919 C47.828875,25.8046104 47.620125,25.9034548 47.426875,26.0191289 L47.329875,25.6370252 L46.780625,25.6370252 L46.780625,29.9122252 L47.471375,29.9122252 L47.471375,26.5797215 C47.709125,26.4538548 47.922875,26.3597511 48.107125,26.2990696 C48.300125,26.2355437 48.528125,26.2033067 48.784875,26.2033067 C49.037125,26.2033067 49.231875,26.2808178 49.380625,26.4408178 C49.533125,26.6046104 49.607125,26.8089363 49.607125,27.0654104 L49.607125,29.9122252 L50.297625,29.9122252 L50.297625,27.0198993 C50.297625,26.6204919 50.178625,26.2772622 49.944375,25.9989807 C49.703375,25.7135881 49.354375,25.5687585 48.907625,25.5687585",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("polygon", {
                                            fill: d,
                                            mask: "url(#mask-21)",
                                            points:
                                              "55.21725 29.9121778 55.908 29.9121778 55.908 25.6369778 55.21725 25.6369778",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M55.716225,24.1124978 L55.416725,24.1124978 C55.272475,24.1124978 55.178975,24.2028089 55.178975,24.3424237 L55.178975,24.8809719 C55.178975,24.9632237 55.213975,25.0153719 55.243475,25.0445274 C55.273975,25.0751052 55.328475,25.1108978 55.416725,25.1108978 L55.716225,25.1108978 C55.818725,25.1108978 55.938725,25.0506904 55.938725,24.8809719 L55.938725,24.3424237 C55.938725,24.1727052 55.818725,24.1124978 55.716225,24.1124978",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M59.166675,25.5687585 C58.881425,25.5687585 58.592925,25.6213807 58.308925,25.7244919 C58.087675,25.8048474 57.878675,25.9036919 57.685675,26.0191289 L57.588675,25.6370252 L57.039675,25.6370252 L57.039675,29.9122252 L57.730425,29.9122252 L57.730425,26.5797215 C57.967675,26.4540919 58.181175,26.3599881 58.365675,26.2990696 C58.559175,26.2355437 58.787175,26.2033067 59.043925,26.2033067 C59.296175,26.2033067 59.490675,26.2808178 59.639425,26.4408178 C59.791925,26.6046104 59.865925,26.8089363 59.865925,27.0654104 L59.865925,29.9122252 L60.556425,29.9122252 L60.556425,27.0198993 C60.556425,26.6204919 60.437425,26.2767881 60.203175,25.9989807 C59.962175,25.7135881 59.613175,25.5687585 59.166675,25.5687585",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          }),
                                          Kt("path", {
                                            d:
                                              "M62.08805,30.3800889 C62.08805,30.1537185 62.16505,29.9894519 62.32305,29.8778074 C62.49205,29.7581037 62.6943,29.7000296 62.94105,29.7000296 L64.07005,29.7000296 C64.4113,29.7000296 64.65005,29.7550222 64.7798,29.8640593 C64.90705,29.9707259 64.9688,30.1274074 64.9688,30.342163 L64.9688,30.5166222 C64.9688,30.7420444 64.89005,30.9063111 64.7278,31.0179556 C64.55505,31.1367111 64.3028,31.1969185 63.97805,31.1969185 L62.98705,31.1969185 C62.6868,31.1969185 62.4558,31.1454815 62.30055,31.0433185 C62.1573,30.9489778 62.08805,30.7941926 62.08805,30.5697185 L62.08805,30.3800889 Z M64.54655,27.1184593 C64.54655,27.6655407 64.2463,27.9201185 63.60155,27.9201185 L63.13305,27.9201185 C62.5773,27.9201185 62.31855,27.6463407 62.31855,27.0577778 C62.31855,26.7550815 62.3953,26.5367704 62.5463,26.4087704 C62.7018,26.2772148 62.93555,26.2106074 63.24055,26.2106074 L63.6783,26.2106074 C64.27055,26.2106074 64.54655,26.4990815 64.54655,27.1184593 L64.54655,27.1184593 Z M65.62855,25.6293926 L63.3248,25.6293926 C61.9478,25.6293926 61.6588,26.3978667 61.6588,27.0426074 C61.6588,27.3180444 61.72155,27.5721481 61.8453,27.7980444 C61.9318,27.9552 62.05855,28.0865185 62.22355,28.1912889 C61.8153,28.3617185 61.72005,28.6679704 61.72005,28.9161481 C61.72005,29.0702222 61.76205,29.2079407 61.8443,29.3257481 C61.88505,29.3838222 61.9348,29.4359704 61.9928,29.4814815 C61.85355,29.561363 61.73455,29.6623407 61.6378,29.7825185 C61.4938,29.9614815 61.42055,30.1831111 61.42055,30.4407704 L61.42055,30.6379852 C61.42055,31.0037333 61.56005,31.2874667 61.8348,31.481837 C62.0983,31.6683852 62.45505,31.762963 62.89505,31.762963 L64.01605,31.762963 C64.52405,31.762963 64.92255,31.6532148 65.20005,31.4368 C65.4843,31.2146963 65.62855,30.8977778 65.62855,30.4938667 L65.62855,30.3118222 C65.62855,29.9185778 65.50005,29.6168296 65.24705,29.4153481 C64.99955,29.2183704 64.6218,29.1185778 64.1238,29.1185778 L62.6953,29.1185778 C62.59755,29.1185778 62.51655,29.0958222 62.4473,29.049363 C62.41205,29.0251852 62.36455,28.9796741 62.36455,28.8632889 C62.36455,28.6926222 62.4413,28.6312296 62.49905,28.5997037 C62.61005,28.5394963 62.78455,28.5089185 63.01805,28.5089185 L63.64755,28.5089185 C64.1883,28.5089185 64.58855,28.3761778 64.8368,28.1137778 C65.08205,27.8554074 65.2063,27.5358815 65.2063,27.1642074 C65.2063,26.918163 65.1723,26.7121778 65.1053,26.5521778 C65.03605,26.3872 64.95555,26.2665481 64.85905,26.1833481 C64.8503,26.1755259 64.8413,26.1677037 64.83205,26.1601185 L65.62855,26.1124741 L65.62855,25.6293926 Z",
                                            fill: d,
                                            mask: "url(#mask-21)",
                                          })
                                        )
                                      )
                                    )
                                  )
                                );
                              },
                            })
                          );
                        })({ logoColor: n.logoColor, optional: n.optional });
                      },
                    })
                  : null),
              (n[Ae.BLIK] = null),
              (n[Ae.TRUSTLY] = null),
              (n[Ae.ZIMPLER] = null),
              (n[Ae.WECHATPAY] = null),
              (n[Ae.OXXO] = null),
              (n[Ae.BOLETO] = null),
              (n[Ae.MAXIMA] = null),
              n
            );
          });
        }
        function wi(n, e) {
          var r = e.layout,
            t = e.platform,
            o = e.fundingSource,
            i = e.fundingEligibility,
            a = e.components,
            u = e.onShippingChange;
          if (!i[n] || !i[n].eligible) return !1;
          var s = gi()[n];
          return !(
            !s ||
            (s.eligible &&
              !s.eligible({
                components: a,
                fundingSource: o,
                fundingEligibility: i,
                layout: r,
              })) ||
            (r && s.layouts && -1 === s.layouts.indexOf(r)) ||
            (s.platforms && -1 === s.platforms.indexOf(t)) ||
            (!1 === s.shippingChange && u)
          );
        }
        var vi =
            (((ui = {})[ni.HORIZONTAL] = Qo.SMALL),
            (ui[ni.VERTICAL] = Qo.MEDIUM),
            ui),
          Ci =
            (((si = {})[ni.HORIZONTAL] = Qo.HUGE),
            (si[ni.VERTICAL] = Qo.HUGE),
            si),
          bi =
            (((ci = {})[Qo.TINY] = {
              defaultWidth: 75,
              defaultHeight: 25,
              minWidth: 75,
              maxWidth: 150,
              minHeight: 25,
              maxHeight: 30,
            }),
            (ci[Qo.SMALL] = {
              defaultWidth: 150,
              defaultHeight: 25,
              minWidth: 150,
              maxWidth: 200,
              minHeight: 25,
              maxHeight: 55,
            }),
            (ci[Qo.MEDIUM] = {
              defaultWidth: 250,
              defaultHeight: 35,
              minWidth: 200,
              maxWidth: 300,
              minHeight: 35,
              maxHeight: 55,
            }),
            (ci[Qo.LARGE] = {
              defaultWidth: 350,
              defaultHeight: 45,
              minWidth: 300,
              maxWidth: 500,
              minHeight: 30,
              maxHeight: 55,
            }),
            (ci[Qo.HUGE] = {
              defaultWidth: 500,
              defaultHeight: 55,
              minWidth: 500,
              maxWidth: 750,
              minHeight: 40,
              maxHeight: 55,
            }),
            ci),
          Li = {
            LOCALE: { country: Te.US, lang: "en" },
            COMMIT: !0,
            VAULT: !1,
            INTENT: "capture",
            ENV: Pe.PRODUCTION,
            PLATFORM: ke.DESKTOP,
          };
        function Ei(n, e) {
          if (!e) throw new Error("Expected props.style to be set");
          var r = n.fundingSource,
            t = gi(),
            o = t[r || Ae.PAYPAL] || t[Ae.PAYPAL];
          if (!o)
            throw new Error("Expected " + (r || Ae.PAYPAL) + " to be eligible");
          var i = e.label,
            a = e.layout,
            u = void 0 === a ? (r ? ni.HORIZONTAL : o.layouts[0]) : a,
            s = e.color,
            c = void 0 === s ? o.colors[0] : s,
            l = e.shape,
            d = void 0 === l ? o.shapes[0] : l,
            f = e.tagline,
            p = void 0 === f ? u === ni.HORIZONTAL && !r : f,
            h = e.height,
            m = e.period;
          if (-1 === Cn(ni).indexOf(u)) throw new Error("Invalid layout: " + u);
          if (i && -1 === Cn($o).indexOf(i))
            throw new Error("Invalid label: " + i);
          if (c && -1 === o.colors.indexOf(c))
            throw new Error(
              "Unexpected style.color for " +
                Ae.PAYPAL +
                " button: " +
                c +
                ", expected " +
                o.colors.join(", ")
            );
          if (d && -1 === o.shapes.indexOf(d))
            throw new Error(
              "Unexpected style.shape for " +
                Ae.PAYPAL +
                " button: " +
                d +
                ", expected " +
                o.shapes.join(", ")
            );
          if (void 0 !== h) {
            if ("number" != typeof h)
              throw new TypeError(
                "Expected style.height to be a number, got: " + h
              );
            var y = [bi[Qo.SMALL].minHeight, bi[Qo.HUGE].maxHeight],
              g = y[0],
              w = y[1];
            if (h < g || h > w)
              throw new Error(
                "Expected style.height to be between " +
                  g +
                  "px and " +
                  w +
                  "px - got " +
                  h +
                  "px"
              );
          }
          if (u === ni.VERTICAL && p)
            throw new Error(
              "style.tagline is not allowed for " + ni.VERTICAL + " layout"
            );
          return {
            label: i,
            layout: u,
            color: c,
            shape: d,
            tagline: p,
            height: h,
            period: m,
          };
        }
        var xi = Cn(Te),
          Oi = Cn(Ae),
          Ti = Cn(Pe),
          _i = Cn(ke);
        function Pi(n) {
          var e = n.uid,
            r = n.props,
            t = n.tag,
            o = n.context,
            i = n.frame,
            a = n.prerenderFrame,
            u = n.doc,
            s = n.container,
            c = n.event;
          if (i && a) {
            if (s && "button" === s.tagName.toLowerCase())
              throw new Error(
                "Do not render the PayPal button into a button element"
              );
            i.classList.add("component-frame"),
              a.classList.add("prerender-frame"),
              i.classList.add("invisible"),
              a.classList.add("visible"),
              c.on("zoid-rendered", function () {
                a.classList.remove("visible"),
                  a.classList.add("invisible"),
                  i.classList.remove("invisible"),
                  i.classList.add("visible"),
                  setTimeout(function () {
                    me(a);
                  }, 1e3);
              });
            var l = r.style,
              d = l.label,
              f = l.layout,
              p = l.height,
              h = vi[f],
              m = Ci[f];
            if (p) {
              var y = Cn(Qo).filter(function (n) {
                return bi[n] && p && bi[n].minHeight <= p && bi[n].maxHeight >= p;
              });
              y.sort(function (n, e) {
                return bi[n].defaultWidth - bi[e].defaultWidth;
              }),
                (h = y[0]);
            }
            var g = Kt(
              "div",
              {
                id: e,
                onRender: function (n) {
                  c.on("zoid-resize", function (e) {
                    var r = e.width,
                      t = e.height;
                    "number" == typeof r && (n.style.width = xe(r)),
                      "number" == typeof t && (n.style.height = xe(t));
                  });
                },
                class:
                  t +
                  " " +
                  t +
                  "-context-" +
                  o +
                  " " +
                  t +
                  "-label-" +
                  d +
                  " " +
                  t +
                  "-layout-" +
                  f,
              },
              Kt(
                "style",
                null,
                "\n                    #" +
                  e +
                  " {\n                        position: relative;\n                        display: inline-block;\n                        width: 100%;\n                        min-height: " +
                  bi[h].minHeight +
                  "px;\n                        min-width: " +
                  bi[h].minWidth +
                  "px;\n                        max-width: " +
                  bi[m].maxWidth +
                  "px;\n                        font-size: 0;\n                    }\n\n                    #" +
                  e +
                  " > iframe {\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                    }\n\n                    #" +
                  e +
                  " > iframe.component-frame {\n                        z-index: 100;\n                    }\n\n                    #" +
                  e +
                  " > iframe.prerender-frame {\n                        transition: opacity .2s linear;\n                        z-index: 200;\n                    }\n\n                    #" +
                  e +
                  " > iframe.visible {\n                        opacity: 1;\n                    }\n\n                    #" +
                  e +
                  " > iframe.invisible {\n                        opacity: 0;\n                        pointer-events: none;\n                    }\n\n                    #" +
                  e +
                  " > .smart-menu {\n                        position: absolute;\n                        z-index: 300;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                    }\n                "
              ),
              Kt("node", { el: i }),
              Kt("node", { el: a }),
              Kt("div", { id: "smart-menu", class: "smart-menu" })
            ).render($t({ doc: u }));
            return (
              c.on("zoid-rendered", function () {
                setTimeout(function () {
                  g.style.transition = "all 0.2s ease-in-out";
                }, 1e3);
              }),
              g
            );
          }
        }
        var ki =
            "\n    html, body {\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        overflow: hidden;\n        text-align: center;\n    }\n\n    body {\n        display: inline-block;\n        vertical-align: top;\n        border-collapse: collapse;\n    }\n\n    * {\n        touch-callout: none;\n        user-select: none;\n        cursor: default;\n        box-sizing: border-box;\n    }\n\n    ." +
            ei.HIDDEN +
            " {\n        position: absolute;\n        visibility: hidden;\n    }\n",
          Ai =
            "\n\n    ." +
            ei.CONTAINER +
            ' {\n        display: block;\n        white-space: nowrap;\n        margin: 0;\n        background: 0;\n        border: 0;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        text-transform: none;\n        font-weight: 500;\n        font-smoothing: antialiased;\n        z-index: 0;\n        font-size: 0;\n        width: 100%;\n        box-sizing: border-box;\n    }\n\n    .' +
            ei.BUTTON +
            " {\n        border: 1px solid transparent;\n        border-radius: 0 3px 3px 0;\n        position: relative;\n        width: 100%;\n        box-sizing: border-box;\n        border: none;\n        vertical-align: top;\n        cursor: pointer;\n        overflow: hidden;\n    }\n\n    ." +
            ei.BUTTON +
            " * {\n        cursor: pointer;\n    }\n\n    ." +
            ei.CONTAINER +
            "." +
            ei.ENV +
            "-" +
            Pe.TEST +
            " ." +
            ei.TEXT +
            " {\n        font-family: Arial !important;\n        background: rgba(0, 0, 0, 0.5) !important;\n        color: transparent  !important;\n        text-shadow: none  !important;\n    }\n\n    ." +
            ei.CARD +
            " {\n        cursor: pointer;\n    }\n\n    .paypal-logo {\n        padding: 0;\n        display: inline-block;\n        background: none;\n        border: none;\n        width: auto;\n    }\n\n    ." +
            ei.TEXT +
            ", ." +
            ei.SPACE +
            " {\n        display: inline-block;\n        white-space: pre;\n    }\n\n    ." +
            ei.BUTTON +
            " > ." +
            ei.BUTTON_LABEL +
            " {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    ." +
            ei.BUTTON +
            " > ." +
            ei.BUTTON_LABEL +
            " > * {\n        vertical-align: top;\n        height: 100%;\n        text-align: left;\n    }\n    \n    ." +
            ei.TAGLINE +
            " {\n        max-width: 100%;\n        font-weight: normal;\n        display: block;\n        text-align: center;\n        width: auto;\n    }\n\n    ." +
            ei.BUTTON +
            " ." +
            ei.SPINNER +
            " {\n        position: absolute;\n        height: 40px;\n        width: 40px;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        box-sizing: border-box;\n        border: 3px solid rgba(0, 0, 0, .2);\n        border-top-color: rgba(33, 128, 192, 0.8);\n        border-radius: 100%;\n        animation: " +
            ei.SPINNER +
            "-rotation .7s infinite linear;\n    }\n\n    @keyframes " +
            ei.SPINNER +
            "-rotation {\n        from {\n            transform: translateX(-50%) translateY(-50%) rotate(0deg);\n        }\n        to {\n            transform: translateX(-50%) translateY(-50%) rotate(359deg);\n        }\n    }\n\n    ." +
            ei.BUTTON +
            " ." +
            ei.SPINNER +
            " {\n        display: none !important;\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.LOADING +
            " * {\n        display: none !important;\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.LOADING +
            " ." +
            ei.SPINNER +
            " {\n        display: block !important;\n    }\n\n    ." +
            ei.CONTAINER +
            " ." +
            ei.VAULT_HEADER +
            " {\n        margin-top: 10px;\n    }\n",
          Mi =
            "\n\n\n    ." +
            ei.BUTTON +
            "." +
            ei.TEXT_COLOR +
            "-black {\n        color: #2C2E2F;\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.TEXT_COLOR +
            "-white {\n        color: #fff;\n    }\n\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-gold {\n        background: #ffc439;\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-gold:hover {\n        filter: brightness(0.95);\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-gold:focus {\n        outline: none;\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n\n\n\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-blue {\n        background: #009cde;\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-blue:hover {\n        filter: brightness(0.95);\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-blue:focus {\n        outline: none;\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n\n\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-silver {\n        background: #eee;\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-silver:hover {\n        filter: brightness(0.95);\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-silver:focus {\n        outline: none;\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n\n\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-darkblue {\n        background: #003087;\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-darkblue:hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-darkblue:focus {\n        outline: none;\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n\n\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-black {\n        background: #2C2E2F;\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-black:hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-black:focus {\n        outline: none;\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n\n\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-white {\n        background: #fff;\n        border: 1px solid #2C2E2F;\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-white:hover {\n        filter: brightness(0.95);\n    }\n\n    ." +
            ei.BUTTON +
            "." +
            ei.COLOR +
            "-white:focus {\n        outline: none;\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n\n\n    ." +
            ei.BUTTON +
            " ." +
            ei.CARD +
            " {\n        position: relative;\n    }\n\n    ." +
            ei.BUTTON +
            " ." +
            ei.CARD +
            "::after {\n        content: '';\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    ." +
            ei.BUTTON +
            " ." +
            ei.CARD +
            ":hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
            ei.BUTTON +
            " ." +
            ei.CARD +
            ":focus {\n        outline: none;\n    }\n\n    ." +
            ei.BUTTON +
            " ." +
            ei.CARD +
            ":focus::after {\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n";
        function Ni(n) {
          var e = n.nonce,
            r = (function (n) {
              return (
                "\n        " +
                ki +
                "\n        " +
                Ai +
                "\n        " +
                Mi +
                "\n        " +
                di +
                "\n        " +
                (function (n) {
                  var e = n.height;
                  return Object.keys(bi)
                    .map(function (n) {
                      var r = bi[n],
                        t = e || r.defaultHeight,
                        o = Math.round(2.8 * t * 2);
                      return (
                        "\n\n            @media only screen and (min-width: " +
                        r.minWidth +
                        "px) {\n\n                ." +
                        ei.CONTAINER +
                        " {\n                    min-width: " +
                        r.minWidth +
                        "px;\n                    max-width: " +
                        r.maxWidth +
                        "px;\n                    font-size: " +
                        Ln(bn(t, 32), 10) +
                        "px;\n                }\n\n                ." +
                        ei.BUTTON +
                        " {\n                    height: " +
                        t +
                        "px;\n                    min-height: " +
                        (e || r.minHeight) +
                        "px;\n                    max-height: " +
                        (e || r.maxHeight) +
                        "px;\n                }\n                \n                ." +
                        ei.BUTTON +
                        " ." +
                        ei.SPINNER +
                        " {\n                    height: " +
                        bn(t, 50) +
                        "px;\n                    width: " +
                        bn(t, 50) +
                        "px;\n                }\n\n                ." +
                        ei.BUTTON +
                        " > ." +
                        ei.BUTTON_LABEL +
                        " {\n                    height: " +
                        (bn(t, 35) + 5) +
                        "px;\n                    max-height: " +
                        bn(t, 60) +
                        "px;\n                    min-height: " +
                        bn(t, 40) +
                        "px;\n                }\n\n                ." +
                        ei.BUTTON +
                        "[data-funding-source=" +
                        Ae.EPS +
                        "] ." +
                        ei.BUTTON_LABEL +
                        ",\n                ." +
                        ei.BUTTON +
                        "[data-funding-source=" +
                        Ae.MYBANK +
                        "] ." +
                        ei.BUTTON_LABEL +
                        " {\n                    height: " +
                        (bn(t, 50) + 5) +
                        "px;\n                    max-height: " +
                        bn(t, 70) +
                        "px;\n                    min-height: " +
                        bn(t, 40) +
                        "px;\n                }\n\n                ." +
                        ei.BUTTON +
                        "." +
                        ei.SHAPE +
                        "-rect {\n                    border-radius: 4px;\n                }\n\n                ." +
                        ei.BUTTON +
                        "." +
                        ei.SHAPE +
                        "-pill {\n                    border-radius: " +
                        Math.ceil(t / 2) +
                        "px;\n                }\n\n                ." +
                        ei.BUTTON +
                        "." +
                        ei.LAYOUT +
                        "-" +
                        ni.VERTICAL +
                        " {\n                    margin-bottom: " +
                        bn(t, 30) +
                        "px;\n                }\n\n                ." +
                        ei.BUTTON +
                        "." +
                        ei.LAYOUT +
                        "-" +
                        ni.VERTICAL +
                        ":last-of-type {\n                    margin-bottom: 0;\n                }\n                \n                ." +
                        ei.TAGLINE +
                        " ." +
                        ei.TEXT +
                        " {\n                    height: " +
                        bn(t, 50) +
                        "px;\n                    line-height: " +
                        bn(t, 50) +
                        "px;\n                }\n\n                ." +
                        ei.CARD +
                        " {\n                    display: inline-block;\n                    height: 100%;\n                }\n\n                ." +
                        ei.MENU_TOGGLE +
                        " {\n                    position: absolute;\n                    height: 100%;\n                    right: 0;\n                    top: 0;\n                    width: " +
                        t +
                        "px;\n                    border-left: 1px solid rgba(100, 100, 100, 0.1);\n                }\n\n                ." +
                        ei.MENU_TOGGLE +
                        ":hover {\n                    background: rgba(100, 100, 100, 0.1);\n                }\n\n                ." +
                        ei.MENU_TOGGLE +
                        " img {\n                    width: 30%;\n                    position: absolute;\n                    top: 50%;\n                    left: 50%;\n                    transform: translateX(-50%) translateY(-50%);\n                }\n            }\n\n            @media only screen and (min-width: " +
                        r.minWidth +
                        "px) and (max-width: " +
                        o +
                        "px) {\n\n                ." +
                        ei.BUTTON +
                        "." +
                        ei.LAYOUT +
                        "-" +
                        ni.HORIZONTAL +
                        "." +
                        ei.NUMBER +
                        "-multiple." +
                        ei.NUMBER +
                        "-0 {\n                    width: 100%;\n                    margin-right: 0;\n                }\n\n                ." +
                        ei.BUTTON +
                        "." +
                        ei.LAYOUT +
                        "-" +
                        ni.HORIZONTAL +
                        "." +
                        ei.NUMBER +
                        "-multiple." +
                        ei.NUMBER +
                        "-1 {\n                    display: none;\n                }\n\n                ." +
                        ei.CONTAINER +
                        "." +
                        ei.LAYOUT +
                        "-" +
                        ni.HORIZONTAL +
                        "." +
                        ei.NUMBER +
                        "-multiple ." +
                        ei.TAGLINE +
                        " {\n                    display: none;\n                }\n            }\n\n            @media only screen and (min-width: " +
                        Ln(r.minWidth, o) +
                        "px) {\n\n                ." +
                        ei.BUTTON +
                        "." +
                        ei.LAYOUT +
                        "-" +
                        ni.HORIZONTAL +
                        "." +
                        ei.NUMBER +
                        "-multiple." +
                        ei.NUMBER +
                        "-0 {\n                    display: inline-block;\n                    width: calc(50% - 2px);\n                    margin-right: 4px;\n                }\n\n                ." +
                        ei.BUTTON +
                        "." +
                        ei.LAYOUT +
                        "-" +
                        ni.HORIZONTAL +
                        "." +
                        ei.NUMBER +
                        "-multiple." +
                        ei.NUMBER +
                        "-1 {\n                    display: inline-block;\n                    width: calc(50% - 2px);\n                }\n\n                ." +
                        ei.CONTAINER +
                        "." +
                        ei.LAYOUT +
                        "-" +
                        ni.HORIZONTAL +
                        "." +
                        ei.NUMBER +
                        "-multiple ." +
                        ei.TAGLINE +
                        " {\n                    display: block;\n                }\n            }\n        "
                      );
                    })
                    .join("\n");
                })({ height: n.height }) +
                "\n    "
              );
            })({ height: n.style.height });
          return Kt("style", { nonce: e, innerHTML: r });
        }
        function Si() {
          return Kt("div", { class: ei.SPINNER });
        }
        function zi(n) {
          var e = (void 0 === n ? {} : n).color,
            r = void 0 === e ? "#848484" : e;
          return Kt(fo, {
            name: "chevron",
            render: function () {
              return Kt(
                "svg",
                {
                  width: "256",
                  height: "158.18601989746094",
                  viewBox: "-1.935 0.221 256 158.186",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                Kt("polygon", {
                  points:
                    "223.878 0.221 126.065 98.034 28.252 0.221 -1.935 30.407 126.065 158.407 254.065 30.407",
                  transform: "matrix(1, 0, 0, 1, 0, 0)",
                  fill: r,
                })
              );
            },
          });
        }
        function Fi(n) {
          var e,
            r = (void 0 === n ? {} : n).color,
            t = void 0 === r ? "black" : r;
          return Kt(
            "div",
            h({}, (((e = {})["data-menu"] = !0), e), { class: ei.MENU_TOGGLE }),
            Kt(zi, { color: t })
          );
        }
        function Ri(n) {
          var e,
            r = n.fundingSource,
            t = n.style,
            o = n.multiple,
            i = n.locale,
            a = n.env,
            u = n.fundingEligibility,
            s = n.i,
            c = n.nonce,
            l = n.clientAccessToken,
            d = n.personalization,
            f = n.onShippingChange,
            p = n.onClick,
            m = void 0 === p ? hn : p,
            y = n.content,
            g = n.tagline,
            w = gi()[r];
          if (!w) throw new Error("Can not find funding config for " + r);
          var v = w.colors,
            C = w.secondaryColors || {},
            b =
              (function (n) {
                if (!n.onShippingChange) {
                  var e = n.fundingEligibility[n.fundingSource];
                  if (e) {
                    if (e.vaultedInstruments && e.vaultedInstruments.length)
                      return { vaultedInstrument: e.vaultedInstruments[0] };
                    if (e.vendors)
                      for (
                        var r = 0, t = Object.keys(e.vendors);
                        r < t.length;
                        r++
                      ) {
                        var o = t[r],
                          i = e.vendors[o];
                        if (
                          i &&
                          i.vaultedInstruments &&
                          i.vaultedInstruments.length
                        )
                          return {
                            vendor: o,
                            vaultedInstrument: i.vaultedInstruments[0],
                          };
                      }
                  }
                }
              })({
                fundingEligibility: u,
                fundingSource: r,
                onShippingChange: f,
              }) || {},
            L = b.vaultedInstrument,
            E = b.vendor,
            x = t.color,
            O = void 0 === x ? v[0] : x,
            T = t.period,
            _ = t.label;
          o && s > 0 && (O = C[O] || C.default || v[0]);
          var P = w.logoColors,
            k = w.textColors,
            A = P[O] || P.default || "default",
            M = k[O] || k.default || "default",
            N = w.Label,
            S = w.VaultLabel,
            z = function (n, e) {
              n.preventDefault(),
                n.stopPropagation(),
                n.target.blur(),
                m(n, h({ fundingSource: r }, e));
            },
            F = function (n, e) {
              (13 !== n.keyCode && 32 !== n.keyCode) || z(n, e);
            },
            R = t.layout,
            j = t.shape,
            I = Kt(w.Logo, {
              label: _,
              locale: i,
              logoColor: A,
              fundingEligibility: u,
              onClick: z,
              onKeyPress: F,
              nonce: c,
            }),
            D =
              L && S
                ? Kt(S, {
                    nonce: c,
                    logoColor: A,
                    label: L.label.description,
                    vendor: E,
                  })
                : Kt(N, {
                    i: s,
                    logo: I,
                    label: _,
                    nonce: c,
                    locale: i,
                    logoColor: A,
                    period: T,
                    layout: R,
                    multiple: o,
                    fundingEligibility: u,
                    onClick: z,
                    onKeyPress: F,
                    clientAccessToken: l,
                    personalization: d,
                    tagline: g,
                    content: y,
                  });
          return Kt(
            "div",
            h(
              { role: "button" },
              (((e = {})["data-button"] = !0),
              (e["data-funding-source"] = r),
              (e["data-payment-method-id"] = L ? L.id : null),
              e),
              {
                class: [
                  ei.BUTTON,
                  ei.NUMBER + "-" + s,
                  ei.LAYOUT + "-" + R,
                  ei.SHAPE + "-" + j,
                  ei.NUMBER + "-" + (o ? "multiple" : "single"),
                  ei.ENV + "-" + a,
                  ei.COLOR + "-" + O,
                  ei.TEXT_COLOR + "-" + M,
                  "paypal-logo-color-" + A,
                ].join(" "),
                onClick: z,
                onKeyPress: F,
                tabindex: "0",
              }
            ),
            Kt("div", { class: ei.BUTTON_LABEL }, D),
            Kt(Si, null),
            L ? Kt(Fi, { color: M }) : null
          );
        }
        function ji(n) {
          var e = n.fundingSource,
            r = n.locale,
            t = n.multiple,
            o = n.nonce,
            i = n.personalization,
            a = n.style.label,
            u = gi()[e];
          if (!u) throw new Error("Can not get config for " + e);
          var s = u.Tag;
          if (s) {
            var c = i && i.tagline;
            return Kt(
              "div",
              { class: ei.TAGLINE },
              c && !t
                ? Kt(
                    Xt,
                    null,
                    Kt(
                      "span",
                      null,
                      c.Component ? Kt(c.Component, null) : c.text
                    ),
                    c.tracking &&
                      c.tracking.impression &&
                      Kt(ai, { url: c.tracking.impression, nonce: o })
                  )
                : Kt(s, { label: a, nonce: o, locale: r, multiple: t })
            );
          }
        }
        function Ii(n) {
          return Kt("script", {
            nonce: n.nonce,
            innerHTML:
              "(" +
              function () {
                var n = "*",
                  e = "[optional]";
                function r(n) {
                  return [].slice.call(n);
                }
                function t(n, e) {
                  return r((e = e || document).querySelectorAll(n)).filter(
                    function (n) {
                      return "style" !== n.tagName.toLowerCase();
                    }
                  );
                }
                function o(n) {
                  return parseInt(n.getAttribute("optional") || 0, 10);
                }
                function i(n) {
                  return (function (n) {
                    for (var e = 0, r = 0; r < n.length; r++) e += n[r];
                    return e;
                  })(
                    n.map(function (n) {
                      return n.offsetWidth;
                    })
                  );
                }
                var a = (function (n) {
                  for (var e = [], r = 0; r < n.length; r++) {
                    var t = n[r];
                    -1 === e.indexOf(t) && e.push(t);
                  }
                  return e;
                })(
                  t(e)
                    .map(function (n) {
                      return n.parentElement;
                    })
                    .filter(Boolean)
                ).map(function (i) {
                  return {
                    optionalParent: i,
                    allChildren: t(n, i),
                    optionalChildren: r(t(e, i)).sort(function (n, e) {
                      return o(n) - o(e);
                    }),
                  };
                });
                function u() {
                  for (var n = 0; n < a.length; n++)
                    for (
                      var e = a[n],
                        r = e.optionalChildren,
                        t = e.optionalParent.offsetWidth,
                        o = i(e.allChildren) - i(r),
                        u = 0;
                      u < r.length;
                      u++
                    ) {
                      var s = r[u];
                      (o += s.offsetWidth) > t
                        ? s.classList.add("hidden")
                        : s.classList.remove("hidden");
                    }
                }
                var s,
                  c,
                  l,
                  d = (function (n) {
                    var e = !1;
                    return function () {
                      e || ((e = !0), n.apply(void 0, arguments));
                    };
                  })(
                    ((s = function () {
                      window.addEventListener("resize", u),
                        document.body && document.body.classList.add("dom-ready");
                    }),
                    void 0 === c && (c = 50),
                    function () {
                      for (
                        var n = arguments.length, e = new Array(n), r = 0;
                        r < n;
                        r++
                      )
                        e[r] = arguments[r];
                      clearTimeout(l),
                        (l = setTimeout(function () {
                          s.apply(void 0, e);
                        }, c));
                    })
                  ),
                  f = function () {
                    u(), d();
                  };
                u(),
                  document.addEventListener("DOMContentLoaded", f),
                  window.addEventListener("load", f),
                  window.addEventListener("resize", f);
              }.toString() +
              ")()",
          });
        }
        var Di =
          "\n    ." +
          ei.POWERED_BY +
          " {\n        text-align: center;\n        margin: 10px auto;\n        height: 14px;\n        font-family: PayPal-Sans, HelveticaNeue, sans-serif;\n        font-size: 11px;\n        font-weight: normal;\n        font-style: italic;\n        font-stretch: normal;\n        color: #7b8388;\n        position: relative;\n        margin-right: 3px;\n        bottom: 3px;\n    }\n    \n    ." +
          ei.POWERED_BY +
          " > ." +
          ei.TEXT +
          ",\n    ." +
          ei.POWERED_BY +
          " > .paypal-logo {\n        display: inline-block;\n        vertical-align: middle;\n        height: 16px;\n        line-height: 16px;\n    }\n";
        function Bi(n) {
          return Kt(
            "div",
            { class: ei.POWERED_BY },
            Kt("style", { innerHTML: Di }),
            Kt(ri, null)
          );
        }
        function Wi(n) {
          var e = n.onClick,
            r = void 0 === e ? hn : e,
            t = (function (n) {
              if (!n) throw new Error("Expected props");
              var e = n.clientID,
                r = n.fundingSource,
                t = n.style,
                o = void 0 === t ? {} : t,
                i = n.remembered,
                a = void 0 === i ? [] : i,
                u = n.locale,
                s = void 0 === u ? Li.LOCALE : u,
                c = n.env,
                l = void 0 === c ? Li.ENV : c,
                d = n.platform,
                f = void 0 === d ? Li.PLATFORM : d,
                p = n.commit,
                h = void 0 === p ? Li.COMMIT : p,
                m = n.fundingEligibility,
                y = n.sessionID,
                g = void 0 === y ? an() : y,
                w = n.buttonSessionID,
                v = void 0 === w ? an() : w,
                C = n.csp,
                b = void 0 === C ? {} : C,
                L = n.components,
                E = void 0 === L ? ["buttons"] : L,
                x = n.nonce,
                O = void 0 === x ? "" : x,
                T = n.onShippingChange,
                _ = n.personalization,
                P = n.clientAccessToken,
                k = n.content,
                A = void 0 === k ? {} : k,
                M = s.country,
                N = s.lang;
              if (!M || -1 === xi.indexOf(M))
                throw new Error(
                  "Expected valid country, got " + (M || "undefined")
                );
              if (!N || -1 === _e[M].indexOf(N))
                throw new Error("Expected valid lang, got " + (N || "undefined"));
              if (
                a.some(function (n) {
                  return -1 === Oi.indexOf(n);
                })
              )
                throw new Error(
                  "Expected valid funding sources, got " + JSON.stringify(a)
                );
              if (-1 === Ti.indexOf(l))
                throw new Error("Expected valid env, got " + (l || "undefined"));
              if (!m) throw new Error("Expected fundingEligibility");
              if (-1 === _i.indexOf(f))
                throw new Error(
                  "Expected valid platform, got " + (f || "undefined")
                );
              if ((b && b.nonce && (O = b.nonce), r)) {
                if (-1 === qo.indexOf(r))
                  throw new Error("Invalid funding source: " + r);
                if (
                  !wi(r, {
                    platform: f,
                    fundingSource: r,
                    fundingEligibility: m,
                    components: E,
                    onShippingChange: T,
                  })
                )
                  throw new Error("Funding Source not eligible: " + r);
              }
              return {
                clientID: e,
                fundingSource: r,
                style: (o = Ei(n, o)),
                locale: s,
                remembered: a,
                env: l,
                fundingEligibility: m,
                platform: f,
                clientAccessToken: P,
                buttonSessionID: v,
                commit: h,
                sessionID: g,
                nonce: O,
                components: E,
                onShippingChange: T,
                personalization: _,
                content: A,
              };
            })(n),
            o = t.fundingSource,
            i = t.style,
            a = t.locale,
            u = t.env,
            s = t.fundingEligibility,
            c = t.nonce,
            l = t.onShippingChange,
            d = t.personalization,
            f = t.clientAccessToken,
            p = t.content,
            h = i.layout,
            m = i.shape,
            y = i.tagline,
            g = (function (n) {
              var e = n.fundingSource,
                r = n.layout,
                t = n.platform,
                o = n.remembered,
                i = n.fundingEligibility,
                a = n.components,
                u = n.onShippingChange;
              if (e) return [e];
              var s = qo.filter(function (n) {
                return wi(n, {
                  layout: r,
                  platform: t,
                  remembered: o,
                  fundingSource: e,
                  fundingEligibility: i,
                  components: a,
                  onShippingChange: u,
                });
              });
              return r === ni.HORIZONTAL && (s = s.slice(0, 2)), s;
            })({
              fundingSource: o,
              layout: h,
              remembered: t.remembered,
              platform: t.platform,
              fundingEligibility: s,
              components: t.components,
              onShippingChange: l,
            }),
            w = g.length > 1;
          if (!g.length)
            throw new Error(
              "No eligible funding fundingSources found to render buttons:\n\n" +
                JSON.stringify(s, null, 4)
            );
          return Kt(
            "div",
            {
              class: [
                ei.CONTAINER,
                ei.LAYOUT + "-" + h,
                ei.SHAPE + "-" + m,
                ei.NUMBER + "-" + (w ? "multiple" : "single"),
                ei.ENV + "-" + u,
              ].join(" "),
            },
            Kt(Ni, { nonce: c, style: i, locale: a }),
            g.map(function (n, e) {
              return Kt(Ri, {
                content: p,
                i: e,
                style: i,
                fundingSource: n,
                multiple: w,
                env: u,
                locale: a,
                nonce: c,
                fundingEligibility: s,
                onShippingChange: l,
                onClick: r,
                clientAccessToken: f,
                personalization: d,
                tagline: y,
              });
            }),
            y && h === ni.HORIZONTAL && !o
              ? Kt(ji, {
                  fundingSource: g[0],
                  style: i,
                  locale: a,
                  multiple: w,
                  nonce: c,
                  personalization: d,
                })
              : null,
            h === ni.VERTICAL && -1 !== g.indexOf(Ae.CARD)
              ? Kt(Bi, { locale: a })
              : null,
            Kt(Ii, { nonce: c })
          );
        }
        function Ui(n) {
          var e = n.nonce,
            r = n.onRenderCheckout;
          return Kt(
            "html",
            null,
            Kt(
              "body",
              null,
              Kt(
                Wi,
                h({}, n.props, {
                  onClick: function (n, t) {
                    var o = t.fundingSource,
                      i = t.card;
                    if (p()) {
                      var a = z(re("", { width: 500, height: 590 })),
                        u = window.document;
                      te(a, Kt(Bo, { nonce: e }).render($t({ doc: u }))),
                        r({ win: a, fundingSource: o, card: i });
                    } else r({ fundingSource: o, card: i });
                  },
                })
              )
            )
          );
        }
        var qi = dn(function () {
          var n = jt({
              tag: "paypal-buttons",
              url: function () {
                return "" + cr() + (window.__CHECKOUT_URI__ || "/smart/buttons");
              },
              domain: /\.paypal\.com(:\d+)?$/,
              autoResize: { width: !1, height: !0 },
              containerTemplate: Pi,
              logger: wr(),
              prerenderTemplate: function (n) {
                var e = n.state,
                  r = n.props,
                  t = n.doc;
                return Kt(Ui, {
                  nonce: r.nonce,
                  props: r,
                  onRenderCheckout: function (n) {
                    e.prerenderDetails = {
                      win: n.win,
                      fundingSource: n.fundingSource,
                      card: n.card,
                    };
                  },
                }).render($t({ doc: t }));
              },
              attributes: {
                iframe: {
                  allowpaymentrequest: "allowpaymentrequest",
                  scrolling: "no",
                },
              },
              props: {
                style: {
                  type: "object",
                  queryParam: !0,
                  required: !1,
                  decorate: function (n) {
                    return Ei(n.props, n.value);
                  },
                  validate: function (n) {
                    var e = n.value;
                    Ei(n.props, void 0 === e ? {} : e);
                  },
                  default: function () {
                    return {};
                  },
                },
                components: { type: "array", queryParam: !0, value: Re },
                locale: { type: "object", queryParam: !0, value: ir },
                fundingSource: { type: "string", queryParam: !0, required: !1 },
                sdkMeta: {
                  type: "string",
                  queryParam: !0,
                  sendToChild: !1,
                  value: vr,
                },
                createOrder: { type: "function", required: !1 },
                createBillingAgreement: { type: "function", required: !1 },
                createSubscription: { type: "function", required: !1 },
                onApprove: { type: "function", required: !1 },
                onShippingChange: {
                  type: "function",
                  required: !1,
                  queryParam: !0,
                  queryValue: function (n) {
                    return n.value ? "true" : "false";
                  },
                },
                onCancel: { type: "function", required: !1 },
                onClick: { type: "function", required: !1 },
                getPrerenderDetails: {
                  type: "function",
                  value: function (n) {
                    var e = n.state;
                    return function () {
                      return e.prerenderDetails;
                    };
                  },
                },
                getPopupBridge: {
                  type: "function",
                  required: !1,
                  value: function () {
                    return function () {
                      if (window.popupBridge)
                        return {
                          nativeUrl: window.popupBridge.getReturnUrlPrefix(),
                          start: function (n) {
                            return new E(function (e, r) {
                              (window.popupBridge.onComplete = function (n, t) {
                                return n ? r(n) : e(t.queryItems);
                              }),
                                window.popupBridge.open(n);
                            });
                          },
                        };
                    };
                  },
                },
                clientID: { type: "string", value: Ge, queryParam: !0 },
                clientAccessToken: {
                  type: "string",
                  required: !1,
                  queryParam: !0,
                  value: er,
                },
                partnerAttributionID: { type: "string", required: !1, value: rr },
                enableThreeDomainSecure: { type: "boolean", value: ur },
                correlationID: { type: "string", required: !1, value: ze },
                sessionID: { type: "string", value: Bt, queryParam: !0 },
                buttonSessionID: { type: "string", value: an, queryParam: !0 },
                enableVault: { type: "boolean", required: !1, queryParam: !0 },
                env: { type: "string", queryParam: !0, value: Ne },
                stageHost: { type: "string", value: tr, required: !1 },
                apiStageHost: { type: "string", value: or, required: !1 },
                fundingEligibility: {
                  type: "object",
                  value: function () {
                    var n = Jo();
                    try {
                      if (
                        (n.paypal && delete n.paypal.vaultable,
                        n.card && n.card.vendors)
                      )
                        for (var e = 0, r = Cn(Me); e < r.length; e++) {
                          var t = r[e];
                          n.card.vendors[t] && delete n.card.vendors[t].vaultable;
                        }
                      "AaXrMQuzMiglUVTF6DWsGEXij4fOW_IQU5dZ49WvIGs-lBMiUtPW9PSVX8jQbwZZsDP10xEpAjUllgcr" ===
                        Ge() &&
                        n &&
                        n.credit &&
                        n.credit.eligible &&
                        (n.credit.eligible = !1);
                    } catch (n) {}
                    return n;
                  },
                  queryParam: !0,
                  serialization: "base64",
                },
                platform: { type: "string", queryParam: !0, value: je },
                remembered: { type: "array", queryParam: !0, value: Go },
                remember: {
                  type: "function",
                  value: function () {
                    return function (n) {
                      return (function (n, e) {
                        void 0 === e && (e = {});
                        var r = Cn(Ae),
                          t = e.cookie,
                          o = void 0 === t || t,
                          i = e.expiry;
                        if (!n || !n.length)
                          throw new Error("Pass array of funding sources");
                        for (var a = 0; a < n.length; a++) {
                          var u = n[a];
                          if (-1 === r.indexOf(u))
                            throw new Error("Invalid funding source: " + u);
                        }
                        o &&
                          !lr() &&
                          (function (n, e) {
                            var r;
                            void 0 === e && (e = {});
                            var t = e.expiry,
                              o = document.createElement("iframe");
                            (o.style.display = "none"),
                              o.setAttribute("sandbox", "allow-scripts"),
                              o.setAttribute(
                                "src",
                                Gn(cr() + "/smart/funding/remember", {
                                  query:
                                    ((r = {}),
                                    (r.domain = N()),
                                    (r["client-id"] = Ge()),
                                    (r.sdkMeta = vr()),
                                    (r["funding-sources"] = n.join(",")),
                                    (r.expiry = (t || "").toString()),
                                    r),
                                })
                              );
                            var i = document.body;
                            if (!i) throw new Error("Can not find body");
                            i.appendChild(o);
                          })(n, { expiry: i }),
                          gr(function (e) {
                            e.funding = e.fundingConfig || {};
                            for (var r = 0; r < n.length; r++) {
                              var t = n[r],
                                o = (e.funding[t] = e.funding[t] || {});
                              (o.remembered = !0),
                                i && (o.expiry = Date.now() + 1e3 * i);
                            }
                          });
                      })(n, { cookie: !1 });
                    };
                  },
                },
                currency: { type: "string", queryParam: !0, value: Xe },
                intent: { type: "string", queryParam: !0, value: Ve },
                buyerCountry: {
                  type: "string",
                  queryParam: !0,
                  required: !1,
                  value: Qe,
                },
                commit: { type: "boolean", queryParam: !0, value: Ye },
                vault: { type: "boolean", queryParam: !0, value: Ke },
                disableFunding: { type: "array", queryParam: !0, value: Je },
                disableCard: { type: "array", queryParam: !0, value: $e },
                merchantID: { type: "array", queryParam: !0, value: Ze },
                csp: {
                  type: "object",
                  required: !1,
                  value: function () {
                    return { nonce: ar() };
                  },
                },
                getPageUrl: {
                  type: "function",
                  value: function () {
                    return function () {
                      return window.location.href;
                    };
                  },
                },
                debug: { type: "boolean", value: Fe, queryParam: !0 },
                test: {
                  type: "object",
                  default: function () {
                    return { action: "checkout" };
                  },
                },
              },
            }),
            e = [],
            r = function r(t) {
              var o;
              void 0 === t && (t = {});
              var i = t.onDestroy || hn;
              return (
                (t.onDestroy = function () {
                  return (
                    o && e.splice(e.indexOf(o), 1), i.apply(void 0, arguments)
                  );
                }),
                (o = n(t)),
                e.push(o),
                (o.isEligible = function () {
                  var n = t.fundingSource,
                    e = t.onShippingChange,
                    r = t.style,
                    o = (void 0 === r ? {} : r).layout,
                    i = je(),
                    a = Jo();
                  return (
                    !n ||
                    wi(n, {
                      layout: o,
                      platform: i,
                      fundingSource: n,
                      fundingEligibility: a,
                      components: ["buttons"],
                      onShippingChange: e,
                    })
                  );
                }),
                (o.clone = function (n) {
                  var e = (void 0 === n ? {} : n).decorate;
                  return r((void 0 === e ? On : e)(t));
                }),
                o
              );
            };
          return (
            (r.driver = n.driver),
            (r.isChild = n.isChild),
            (r.canRenderTo = n.canRenderTo),
            (r.instances = e),
            r
          );
        });
        function Hi() {
          return pn(Hi, function () {
            return jt({
              tag: "paypal-card-fields",
              url: function () {
                return (
                  "" + cr() + (window.__CHECKOUT_URI__ || "/smart/card-fields")
                );
              },
              dimensions: { height: "300px", width: "100%" },
              attributes: {
                iframe: {
                  allowpaymentrequest: "allowpaymentrequest",
                  scrolling: "no",
                },
              },
              autoResize: { height: !0, width: !1 },
              props: {
                sessionID: {
                  type: "string",
                  required: !1,
                  def: Bt,
                  queryParam: !0,
                },
                createOrder: {
                  type: "function",
                  queryParam: "token",
                  alias: "payment",
                  queryValue: function (n) {
                    return E.try(n.value);
                  },
                },
                buttonSessionID: { type: "string", queryParam: !0 },
                commit: { type: "boolean", queryParam: !0, value: Ye },
                env: { type: "string", queryParam: !0, value: Ne },
                locale: {
                  type: "object",
                  queryParam: "locale.x",
                  allowDelegate: !0,
                  queryValue: function (n) {
                    var e = n.value;
                    return e.lang + "_" + e.country;
                  },
                  value: ir,
                },
                onApprove: { type: "function", alias: "onAuthorize" },
                onAuth: { type: "function", required: !1, sameDomain: !0 },
                onCancel: { type: "function", required: !1 },
                sdkMeta: { type: "string", queryParam: !0, value: vr },
                style: { type: "object", required: !1, queryParam: !0 },
                disableCard: {
                  type: "array",
                  queryParam: "disable-card",
                  allowDelegate: !0,
                  queryValue: function (n) {
                    return n.value.join(",");
                  },
                  value: $e,
                },
              },
            });
          });
        }
        function Gi() {
          return pn(Gi, function () {
            return jt({
              tag: "paypal-menu",
              url: function () {
                return "" + cr() + (window.__CHECKOUT_URI__ || "/smart/menu");
              },
              domain: /\.paypal\.com(:\d+)?$/,
              autoResize: { width: !1, height: !0 },
              dimensions: { width: "100%", height: "150px" },
              logger: wr(),
              prerenderTemplate: function () {
                return null;
              },
              attributes: { iframe: { scrolling: "no" } },
              props: {
                sdkMeta: {
                  type: "string",
                  queryParam: !0,
                  sendToChild: !1,
                  value: vr,
                },
                clientID: { type: "string", queryParam: !0 },
              },
            });
          });
        }
        function Zi() {
          return pn(Zi, function () {
            return jt({
              tag: "paypal-modal",
              url: function () {
                return "" + cr() + (window.__CHECKOUT_URI__ || "/smart/modal");
              },
              domain: /\.paypal\.com(:\d+)?$/,
              dimensions: { width: "100%", height: "100%" },
              logger: wr(),
              containerTemplate: function (n) {
                var e = n.frame,
                  r = n.prerenderFrame,
                  t = n.doc,
                  o = n.uid,
                  i = n.event;
                if (e && r) {
                  var a = n.props.cspNonce;
                  return (
                    r.classList.add("visible"),
                    e.classList.add("invisible"),
                    i.on("zoid-rendered", function () {
                      r.classList.remove("visible"),
                        r.classList.add("invisible"),
                        e.classList.remove("invisible"),
                        e.classList.add("visible"),
                        setTimeout(function () {
                          me(r);
                        }, 1);
                    }),
                    Kt(
                      "div",
                      {
                        id: o,
                        onRender: function (n) {
                          i.on("zoid-resize", function (e) {
                            var r = e.width,
                              t = e.height;
                            "number" == typeof r && (n.style.width = xe(r)),
                              "number" == typeof t && (n.style.height = xe(t));
                          });
                        },
                      },
                      Kt("style", {
                        nonce: a,
                        innerHTML:
                          "\n                                #" +
                          o +
                          " {\n                                    display: block;\n                                    position: fixed;\n                                    width: 100%;\n                                    height: 100%;\n                                    top: 0;\n                                    left: 0;\n                                    z-index: 200000;\n                                }\n\n                                #" +
                          o +
                          " > iframe {\n                                    display: inline-block;\n                                    position: absolute;\n                                    width: 100%;\n                                    height: 100%;\n                                    top: 0;\n                                    left: 0;\n                                    transition: opacity .2s ease-in-out;\n                                }\n                                #" +
                          o +
                          " > iframe.invisible {\n                                    opacity: 0;\n                                }\n                                #" +
                          o +
                          " > iframe.visible {\n                                    opacity: 1;\n                                }\n                            ",
                      }),
                      Kt("node", { el: e }),
                      Kt("node", { el: r })
                    ).render($t({ doc: t }))
                  );
                }
              },
              prerenderTemplate: function () {
                return null;
              },
              attributes: { iframe: { scrolling: "no" } },
              props: {
                sdkMeta: {
                  type: "string",
                  queryParam: !0,
                  sendToChild: !1,
                  value: vr,
                },
                clientID: { type: "string", queryParam: !0 },
                orderID: { type: "string", queryParam: !0 },
                customerID: { type: "string", queryParam: !0 },
              },
            });
          });
        }
        function Vi(n) {
          if (lr()) return n;
        }
        var Yi = {
            __get__: function () {
              return qi();
            },
          },
          Ki = {
            __get__: function () {
              return Vi(Uo());
            },
          },
          Xi = {
            __get__: function () {
              return Vi(Hi());
            },
          },
          Ji = {
            __get__: function () {
              return Vi(Gi());
            },
          },
          $i = {
            __get__: function () {
              return Vi(Zi());
            },
          },
          Qi = {
            __get__: function () {
              return Vi(Wi);
            },
          },
          na = {
            __get__: function () {
              return Vi(ee);
            },
          },
          ea = {
            __get__: function () {
              return Vi(Wt);
            },
          },
          ra = {
            __get__: function () {
              return Vi(Wt);
            },
          },
          ta = {
            __get__: function () {
              return Vi(Dt);
            },
          };
        function oa() {
          qi(), Uo();
        }
        function ia() {
          It(), delete window.__zoid_9_0_42__, pt();
        }
        function aa(n) {
          if (lr()) return n;
        }
        var ua = {
            __get__: function () {
              return aa(Do());
            },
          },
          sa = {
            __get__: function () {
              return aa(o);
            },
          };
        function ca() {
          document.addEventListener("DOMContentLoaded", function () {
            !(function (n, e) {
              void 0 === n && (n = "sandbox"), void 0 === e && (e = !1);
              try {
                if ("mock://www.paypal.com" !== window.mockDomain && !lr()) {
                  if (n === Pe.SANDBOX && !0 !== e) return;
                  var r = (function () {
                      var n = Ze();
                      if (n.length && "unknown" !== n[0]) return n[0];
                    })(),
                    t = Ge(),
                    o = window.location.hostname,
                    i = cr(),
                    a = document.createElement("script"),
                    u = document.querySelector("head"),
                    s = (function (n, e, r, t) {
                      var o =
                        n +
                        "/tagmanager/pptm.js?id=" +
                        t +
                        "&t=xo&v=5.0.117&source=payments_sdk";
                      return (
                        e && (o += "&mrid=" + e), r && (o += "&client_id=" + r), o
                      );
                    })(i, r, t, o);
                  (a.src = s),
                    (a.id = "xo-pptm"),
                    (a.async = !0),
                    u && u.appendChild(a);
                }
              } catch (n) {
                !(function (n, e) {
                  try {
                    var r,
                      t = wr();
                    t.track(
                      (((r = {}).ext_error_code = "paypal-muse-components"),
                      (r.ext_error_desc = JSON.stringify({
                        name: n,
                        error: gn(e),
                      })),
                      r)
                    ),
                      t.error(n, { err: yn(e) }),
                      t.flush().catch(hn);
                  } catch (e) {
                    var o,
                      i = wr();
                    i.track(
                      (((o = {}).ext_error_code = "paypal-muse-components"),
                      (o.ext_error_desc = "Error logging error event for " + n),
                      o)
                    ),
                      i.error("logger_error", { err: yn(e) }),
                      i.flush().catch(hn);
                  }
                })("insertPPTM", n);
              }
            })("sandbox", !1);
          }),
            Cr().on("button_render", function () {
              (window.paypalDDL = window.paypalDDL || []),
                0 ===
                  window.paypalDDL.filter(function (n) {
                    return "paypalButtonRender" === n.event;
                  }).length &&
                  window.paypalDDL.push({ event: "paypalButtonRender" });
            });
        }
        !(function (n) {
          var e = nr(),
            r = window[e];
          if (r) {
            if (!r.__internal_destroy__)
              throw new Error(
                "Attempted to load sdk version 5.0.117 on page, but version " +
                  ((r && r.version) || "unknown") +
                  ' already loaded.\n\nTo load this sdk alongside the existing version, please specify a different namespace in the script tag, e.g. <script src="https://www.paypal.com/sdk/js?client-id=CLIENT_ID" data-namespace="paypal_sdk"></script>, then use the paypal_sdk namespace in place of paypal in your code.'
              );
            r.__internal_destroy__(), delete window[e];
          }
          (window[e] = window[e] || {}), (window[e].version = "5.0.117");
          for (
            var t = [],
              o = function (r) {
                var o = n[r],
                  i = o.name,
                  a = o.requirer,
                  u = o.setupHandler;
                try {
                  var c = a(),
                    l = c[u],
                    d = c.setup,
                    f = c.destroy,
                    p = s(c, [u, "setup", "destroy"].map(sr));
                  l ? l() : d && d(), f && t.push(f);
                  for (var h = 0, m = Object.keys(p); h < m.length; h++) {
                    var y = m[h],
                      g = p[y];
                    g && g.__get__ && (g = g.__get__()), g && (window[e][y] = g);
                  }
                } catch (n) {
                  return (
                    setTimeout(function () {
                      throw new Error(
                        "Bootstrap Error for " +
                          i +
                          ":\n\n" +
                          n.message +
                          "\n\n" +
                          n.stack
                      );
                    }, 1),
                    "continue"
                  );
                }
              },
              i = 0;
            i < n.length;
            i++
          )
            o(i);
          Object.defineProperty(window[e], "__internal_destroy__", {
            enumerable: !1,
            value: function () {
              t.forEach(function (n) {
                return n();
              }),
                me(De()),
                delete window[e];
            },
          });
        })([
          {
            name: "__paypal-sdk-client__",
            setupHandler: "setupClient",
            requirer: function () {
              return t;
            },
          },
          {
            name: "buttons",
            setupHandler: "setupButtons",
            requirer: function () {
              return i;
            },
          },
          {
            name: "common",
            setupHandler: null,
            requirer: function () {
              return a;
            },
          },
          {
            name: "muse",
            setupHandler: null,
            requirer: function () {
              return u;
            },
          },
        ]);
      },
    ])
  );
  
!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ""),
    t((t.s = 28));
})([
  function (e, t, n) {
    var r = n(24)("wks"),
      i = n(12),
      o = n(1).Symbol,
      a = "function" == typeof o;
    (e.exports = function (e) {
      return r[e] || (r[e] = (a && o[e]) || (a ? o : i)("Symbol." + e));
    }).store = r;
  },
  function (e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  function (e, t) {
    var n = (e.exports = { version: "2.5.3" });
    "number" == typeof __e && (__e = n);
  },
  function (e, t, n) {
    var r = n(5),
      i = n(11);
    e.exports = n(7)
      ? function (e, t, n) {
          return r.f(e, t, i(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t, n) {
    var r = n(6),
      i = n(48),
      o = n(49),
      a = Object.defineProperty;
    t.f = n(7)
      ? Object.defineProperty
      : function (e, t, n) {
          if ((r(e), (t = o(t, !0)), r(n), i))
            try {
              return a(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    var r = n(10);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function (e, t, n) {
    e.exports = !n(17)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++n + r).toString(36)
      );
    };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    var r = n(24)("keys"),
      i = n(12);
    e.exports = function (e) {
      return r[e] || (r[e] = i(e));
    };
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    var r = n(1),
      i = n(3),
      o = n(4),
      a = n(19),
      s = n(20),
      c = function (e, t, n) {
        var l,
          u,
          f,
          d,
          p = e & c.F,
          g = e & c.G,
          m = e & c.S,
          h = e & c.P,
          b = e & c.B,
          v = g ? r : m ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
          E = g ? i : i[t] || (i[t] = {}),
          _ = E.prototype || (E.prototype = {});
        g && (n = t);
        for (l in n)
          (u = !p && v && void 0 !== v[l]),
            (f = (u ? v : n)[l]),
            (d =
              b && u
                ? s(f, r)
                : h && "function" == typeof f
                ? s(Function.call, f)
                : f),
            v && a(v, l, f, e & c.U),
            E[l] != f && o(E, l, d),
            h && _[l] != f && (_[l] = f);
      };
    (r.core = i),
      (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (e.exports = c);
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, n) {
    var r = n(10),
      i = n(1).document,
      o = r(i) && r(i.createElement);
    e.exports = function (e) {
      return o ? i.createElement(e) : {};
    };
  },
  function (e, t, n) {
    var r = n(1),
      i = n(4),
      o = n(2),
      a = n(12)("src"),
      s = Function.toString,
      c = ("" + s).split("toString");
    (n(3).inspectSource = function (e) {
      return s.call(e);
    }),
      (e.exports = function (e, t, n, s) {
        var l = "function" == typeof n;
        l && (o(n, "name") || i(n, "name", t)),
          e[t] !== n &&
            (l && (o(n, a) || i(n, a, e[t] ? "" + e[t] : c.join(String(t)))),
            e === r
              ? (e[t] = n)
              : s
              ? e[t]
                ? (e[t] = n)
                : i(e, t, n)
              : (delete e[t], i(e, t, n)));
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && this[a]) || s.call(this);
      });
  },
  function (e, t, n) {
    var r = n(50);
    e.exports = function (e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  function (e, t, n) {
    var r = n(56),
      i = n(9);
    e.exports = function (e) {
      return r(i(e));
    };
  },
  function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  function (e, t, n) {
    var r = n(8),
      i = Math.min;
    e.exports = function (e) {
      return e > 0 ? i(r(e), 9007199254740991) : 0;
    };
  },
  function (e, t, n) {
    var r = n(1),
      i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    e.exports = function (e) {
      return i[e] || (i[e] = {});
    };
  },
  function (e, t) {
    e.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
  },
  function (e, t, n) {
    var r = n(5).f,
      i = n(2),
      o = n(0)("toStringTag");
    e.exports = function (e, t, n) {
      e &&
        !i((e = n ? e : e.prototype), o) &&
        r(e, o, { configurable: !0, value: t });
    };
  },
  function (e, t, n) {
    var r = n(9);
    e.exports = function (e) {
      return Object(r(e));
    };
  },
  function (e, t, n) {
    e.exports = n(29);
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function i(e, t) {
      var n = e.className
        .split(" ")
        .filter(function (e) {
          return e !== t;
        })
        .filter(Boolean);
      n.push(t), (e.className = n.join(" "));
    }
    function o(e, t) {
      var n = e.className
        .split(" ")
        .filter(function (e) {
          return e !== t;
        })
        .filter(Boolean);
      e.className = n.join(" ");
    }
    var a = n(30),
      s = r(a),
      c = n(31),
      l = r(c),
      u = n(32),
      f = r(u),
      d = n(33),
      p = r(d),
      g = n(34),
      m = r(g),
      h = n(35),
      b = r(h),
      v = n(36),
      E = r(v),
      _ = n(37),
      y = r(_),
      w = n(38),
      O = r(w),
      N = n(39),
      x = r(N),
      M = n(41),
      C = r(M),
      T = n(42),
      S = r(T);
    n(43);
    var L = n(68),
      A = r(L);
    s.default.registerLanguage("csharp", l.default),
      s.default.registerLanguage("javascript", f.default),
      s.default.registerLanguage("java", p.default),
      s.default.registerLanguage("php", m.default),
      s.default.registerLanguage("python", b.default),
      s.default.registerLanguage("ruby", E.default),
      s.default.registerLanguage("shell", y.default),
      s.default.registerLanguage("swift", O.default),
      !NodeList.prototype.forEach &&
        Array.prototype.forEach &&
        (NodeList.prototype.forEach = Array.prototype.forEach),
      document.addEventListener("DOMContentLoaded", function () {
        var e = document.querySelector("body");
        document
          .querySelectorAll(".header__controls_group")
          .forEach(function (e) {
            var t = e.querySelector(".header__controls_label"),
              n = e.querySelector(".header__controls_dropdown"),
              r = null;
            (0, x.default)(
              e,
              function () {},
              function () {
                r &&
                  (n.classList.remove("header__controls_dropdown--active"),
                  window.setTimeout(function () {
                    return r.destroy();
                  }, 500));
              }
            ).options({ sensitivity: 10, interval: 150, timeout: 300 }),
              t.addEventListener("click", function (e) {
                n.classList.add("header__controls_dropdown--active"),
                  (r = new C.default(e.target, n));
              });
          });
        var t = document.getElementById("about-this-modal-trigger"),
          n = document.getElementById("about-this-modal"),
          r = document.querySelectorAll("#about-this-modal .close");
        t.addEventListener("click", function () {
          n.classList.add("modal--visible"), i(e, "modal-open");
        }),
          r.forEach(function (t) {
            t.addEventListener("click", function () {
              n.classList.remove("modal--visible"), o(e, "modal-open");
            });
          }),
          s.default.initHighlightingOnLoad(),
          (0, S.default)(
            document.getElementsByClassName("module-highlighted-course__title"),
            { minFontSize: 20, multiLine: !1 }
          ),
          Array.from(
            document.getElementsByClassName("lesson-module-code")
          ).forEach(function (e) {
            var t = Array.from(
                e.getElementsByClassName("lesson-module-code__trigger")
              ),
              n = Array.from(
                e.getElementsByClassName("lesson-module-code__code")
              ),
              r = function (e) {
                var r = e.target.getAttribute("data-target");
                t.forEach(function (e) {
                  e.classList.remove("lesson-module-code__trigger--active");
                }),
                  e.target.classList.add("lesson-module-code__trigger--active"),
                  n.forEach(function (e) {
                    e.classList.remove("lesson-module-code__code--active"),
                      e.id === r &&
                        e.classList.add("lesson-module-code__code--active");
                  });
              };
            t.forEach(function (e) {
              e.onclick = r;
            });
          });
        var a = document.querySelector(".status-block__sharelink");
        a &&
          a.addEventListener("click", function (e) {
            e.preventDefault();
            var t = e.target.getAttribute("href"),
              n = document.createElement("input");
            (n.value = t), document.body.appendChild(n), n.select();
            try {
              document.execCommand("copy");
            } catch (e) {
              alert(
                "Unable to copy text. Please right click and copy link target."
              );
            }
            document.body.removeChild(n);
          }),
          (0, A.default)();
      });
  },
  function (e, t, n) {
    !(function (e) {
      ("object" == typeof window && window) ||
        ("object" == typeof self && self);
      e(t);
    })(function (e) {
      function t(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function n(e) {
        return e.nodeName.toLowerCase();
      }
      function r(e, t) {
        var n = e && e.exec(t);
        return n && 0 === n.index;
      }
      function i(e) {
        return M.test(e);
      }
      function o(e) {
        var t,
          n,
          r,
          o,
          a = e.className + " ";
        if (
          ((a += e.parentNode ? e.parentNode.className : ""), (n = C.exec(a)))
        )
          return y(n[1]) ? n[1] : "no-highlight";
        for (a = a.split(/\s+/), t = 0, r = a.length; t < r; t++)
          if (((o = a[t]), i(o) || y(o))) return o;
      }
      function a(e) {
        var t,
          n = {},
          r = Array.prototype.slice.call(arguments, 1);
        for (t in e) n[t] = e[t];
        return (
          r.forEach(function (e) {
            for (t in e) n[t] = e[t];
          }),
          n
        );
      }
      function s(e) {
        var t = [];
        return (
          (function e(r, i) {
            for (var o = r.firstChild; o; o = o.nextSibling)
              3 === o.nodeType
                ? (i += o.nodeValue.length)
                : 1 === o.nodeType &&
                  (t.push({ event: "start", offset: i, node: o }),
                  (i = e(o, i)),
                  n(o).match(/br|hr|img|input/) ||
                    t.push({ event: "stop", offset: i, node: o }));
            return i;
          })(e, 0),
          t
        );
      }
      function c(e, r, i) {
        function o() {
          return e.length && r.length
            ? e[0].offset !== r[0].offset
              ? e[0].offset < r[0].offset
                ? e
                : r
              : "start" === r[0].event
              ? e
              : r
            : e.length
            ? e
            : r;
        }
        function a(e) {
          function r(e) {
            return (
              " " + e.nodeName + '="' + t(e.value).replace('"', "&quot;") + '"'
            );
          }
          u += "<" + n(e) + w.map.call(e.attributes, r).join("") + ">";
        }
        function s(e) {
          u += "</" + n(e) + ">";
        }
        function c(e) {
          ("start" === e.event ? a : s)(e.node);
        }
        for (var l = 0, u = "", f = []; e.length || r.length; ) {
          var d = o();
          if (
            ((u += t(i.substring(l, d[0].offset))), (l = d[0].offset), d === e)
          ) {
            f.reverse().forEach(s);
            do {
              c(d.splice(0, 1)[0]), (d = o());
            } while (d === e && d.length && d[0].offset === l);
            f.reverse().forEach(a);
          } else
            "start" === d[0].event ? f.push(d[0].node) : f.pop(),
              c(d.splice(0, 1)[0]);
        }
        return u + t(i.substr(l));
      }
      function l(e) {
        return (
          e.variants &&
            !e.cached_variants &&
            (e.cached_variants = e.variants.map(function (t) {
              return a(e, { variants: null }, t);
            })),
          e.cached_variants || (e.endsWithParent && [a(e)]) || [e]
        );
      }
      function u(e) {
        function t(e) {
          return (e && e.source) || e;
        }
        function n(n, r) {
          return new RegExp(
            t(n),
            "m" + (e.case_insensitive ? "i" : "") + (r ? "g" : "")
          );
        }
        function r(i, o) {
          if (!i.compiled) {
            if (
              ((i.compiled = !0),
              (i.keywords = i.keywords || i.beginKeywords),
              i.keywords)
            ) {
              var a = {},
                s = function (t, n) {
                  e.case_insensitive && (n = n.toLowerCase()),
                    n.split(" ").forEach(function (e) {
                      var n = e.split("|");
                      a[n[0]] = [t, n[1] ? Number(n[1]) : 1];
                    });
                };
              "string" == typeof i.keywords
                ? s("keyword", i.keywords)
                : O(i.keywords).forEach(function (e) {
                    s(e, i.keywords[e]);
                  }),
                (i.keywords = a);
            }
            (i.lexemesRe = n(i.lexemes || /\w+/, !0)),
              o &&
                (i.beginKeywords &&
                  (i.begin =
                    "\\b(" + i.beginKeywords.split(" ").join("|") + ")\\b"),
                i.begin || (i.begin = /\B|\b/),
                (i.beginRe = n(i.begin)),
                i.end || i.endsWithParent || (i.end = /\B|\b/),
                i.end && (i.endRe = n(i.end)),
                (i.terminator_end = t(i.end) || ""),
                i.endsWithParent &&
                  o.terminator_end &&
                  (i.terminator_end += (i.end ? "|" : "") + o.terminator_end)),
              i.illegal && (i.illegalRe = n(i.illegal)),
              null == i.relevance && (i.relevance = 1),
              i.contains || (i.contains = []),
              (i.contains = Array.prototype.concat.apply(
                [],
                i.contains.map(function (e) {
                  return l("self" === e ? i : e);
                })
              )),
              i.contains.forEach(function (e) {
                r(e, i);
              }),
              i.starts && r(i.starts, o);
            var c = i.contains
              .map(function (e) {
                return e.beginKeywords ? "\\.?(" + e.begin + ")\\.?" : e.begin;
              })
              .concat([i.terminator_end, i.illegal])
              .map(t)
              .filter(Boolean);
            i.terminators = c.length
              ? n(c.join("|"), !0)
              : {
                  exec: function () {
                    return null;
                  },
                };
          }
        }
        r(e);
      }
      function f(e, n, i, o) {
        function a(e, t) {
          var n, i;
          for (n = 0, i = t.contains.length; n < i; n++)
            if (r(t.contains[n].beginRe, e)) return t.contains[n];
        }
        function s(e, t) {
          if (r(e.endRe, t)) {
            for (; e.endsParent && e.parent; ) e = e.parent;
            return e;
          }
          if (e.endsWithParent) return s(e.parent, t);
        }
        function c(e, t) {
          return !i && r(t.illegalRe, e);
        }
        function l(e, t) {
          var n = E.case_insensitive ? t[0].toLowerCase() : t[0];
          return e.keywords.hasOwnProperty(n) && e.keywords[n];
        }
        function p(e, t, n, r) {
          var i = r ? "" : L.classPrefix,
            o = '<span class="' + i,
            a = n ? "" : S;
          return (o += e + '">') + t + a;
        }
        function g() {
          var e, n, r, i;
          if (!w.keywords) return t(M);
          for (
            i = "", n = 0, w.lexemesRe.lastIndex = 0, r = w.lexemesRe.exec(M);
            r;

          )
            (i += t(M.substring(n, r.index))),
              (e = l(w, r)),
              e ? ((C += e[1]), (i += p(e[0], t(r[0])))) : (i += t(r[0])),
              (n = w.lexemesRe.lastIndex),
              (r = w.lexemesRe.exec(M));
          return i + t(M.substr(n));
        }
        function m() {
          var e = "string" == typeof w.subLanguage;
          if (e && !N[w.subLanguage]) return t(M);
          var n = e
            ? f(w.subLanguage, M, !0, O[w.subLanguage])
            : d(M, w.subLanguage.length ? w.subLanguage : void 0);
          return (
            w.relevance > 0 && (C += n.relevance),
            e && (O[w.subLanguage] = n.top),
            p(n.language, n.value, !1, !0)
          );
        }
        function h() {
          (x += null != w.subLanguage ? m() : g()), (M = "");
        }
        function b(e) {
          (x += e.className ? p(e.className, "", !0) : ""),
            (w = Object.create(e, { parent: { value: w } }));
        }
        function v(e, t) {
          if (((M += e), null == t)) return h(), 0;
          var n = a(t, w);
          if (n)
            return (
              n.skip
                ? (M += t)
                : (n.excludeBegin && (M += t),
                  h(),
                  n.returnBegin || n.excludeBegin || (M = t)),
              b(n, t),
              n.returnBegin ? 0 : t.length
            );
          var r = s(w, t);
          if (r) {
            var i = w;
            i.skip
              ? (M += t)
              : (i.returnEnd || i.excludeEnd || (M += t),
                h(),
                i.excludeEnd && (M = t));
            do {
              w.className && (x += S),
                w.skip || (C += w.relevance),
                (w = w.parent);
            } while (w !== r.parent);
            return r.starts && b(r.starts, ""), i.returnEnd ? 0 : t.length;
          }
          if (c(t, w))
            throw new Error(
              'Illegal lexeme "' +
                t +
                '" for mode "' +
                (w.className || "<unnamed>") +
                '"'
            );
          return (M += t), t.length || 1;
        }
        var E = y(e);
        if (!E) throw new Error('Unknown language: "' + e + '"');
        u(E);
        var _,
          w = o || E,
          O = {},
          x = "";
        for (_ = w; _ !== E; _ = _.parent)
          _.className && (x = p(_.className, "", !0) + x);
        var M = "",
          C = 0;
        try {
          for (var T, A, R = 0; ; ) {
            if (((w.terminators.lastIndex = R), !(T = w.terminators.exec(n))))
              break;
            (A = v(n.substring(R, T.index), T[0])), (R = T.index + A);
          }
          for (v(n.substr(R)), _ = w; _.parent; _ = _.parent)
            _.className && (x += S);
          return { relevance: C, value: x, language: e, top: w };
        } catch (e) {
          if (e.message && -1 !== e.message.indexOf("Illegal"))
            return { relevance: 0, value: t(n) };
          throw e;
        }
      }
      function d(e, n) {
        n = n || L.languages || O(N);
        var r = { relevance: 0, value: t(e) },
          i = r;
        return (
          n.filter(y).forEach(function (t) {
            var n = f(t, e, !1);
            (n.language = t),
              n.relevance > i.relevance && (i = n),
              n.relevance > r.relevance && ((i = r), (r = n));
          }),
          i.language && (r.second_best = i),
          r
        );
      }
      function p(e) {
        return L.tabReplace || L.useBR
          ? e.replace(T, function (e, t) {
              return L.useBR && "\n" === e
                ? "<br>"
                : L.tabReplace
                ? t.replace(/\t/g, L.tabReplace)
                : "";
            })
          : e;
      }
      function g(e, t, n) {
        var r = t ? x[t] : n,
          i = [e.trim()];
        return (
          e.match(/\bhljs\b/) || i.push("hljs"),
          -1 === e.indexOf(r) && i.push(r),
          i.join(" ").trim()
        );
      }
      function m(e) {
        var t,
          n,
          r,
          a,
          l,
          u = o(e);
        i(u) ||
          (L.useBR
            ? ((t = document.createElementNS(
                "http://www.w3.org/1999/xhtml",
                "div"
              )),
              (t.innerHTML = e.innerHTML
                .replace(/\n/g, "")
                .replace(/<br[ \/]*>/g, "\n")))
            : (t = e),
          (l = t.textContent),
          (r = u ? f(u, l, !0) : d(l)),
          (n = s(t)),
          n.length &&
            ((a = document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "div"
            )),
            (a.innerHTML = r.value),
            (r.value = c(n, s(a), l))),
          (r.value = p(r.value)),
          (e.innerHTML = r.value),
          (e.className = g(e.className, u, r.language)),
          (e.result = { language: r.language, re: r.relevance }),
          r.second_best &&
            (e.second_best = {
              language: r.second_best.language,
              re: r.second_best.relevance,
            }));
      }
      function h(e) {
        L = a(L, e);
      }
      function b() {
        if (!b.called) {
          b.called = !0;
          var e = document.querySelectorAll("pre code");
          w.forEach.call(e, m);
        }
      }
      function v() {
        addEventListener("DOMContentLoaded", b, !1),
          addEventListener("load", b, !1);
      }
      function E(t, n) {
        var r = (N[t] = n(e));
        r.aliases &&
          r.aliases.forEach(function (e) {
            x[e] = t;
          });
      }
      function _() {
        return O(N);
      }
      function y(e) {
        return (e = (e || "").toLowerCase()), N[e] || N[x[e]];
      }
      var w = [],
        O = Object.keys,
        N = {},
        x = {},
        M = /^(no-?highlight|plain|text)$/i,
        C = /\blang(?:uage)?-([\w-]+)\b/i,
        T = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
        S = "</span>",
        L = {
          classPrefix: "hljs-",
          tabReplace: null,
          useBR: !1,
          languages: void 0,
        };
      return (
        (e.highlight = f),
        (e.highlightAuto = d),
        (e.fixMarkup = p),
        (e.highlightBlock = m),
        (e.configure = h),
        (e.initHighlighting = b),
        (e.initHighlightingOnLoad = v),
        (e.registerLanguage = E),
        (e.listLanguages = _),
        (e.getLanguage = y),
        (e.inherit = a),
        (e.IDENT_RE = "[a-zA-Z]\\w*"),
        (e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*"),
        (e.NUMBER_RE = "\\b\\d+(\\.\\d+)?"),
        (e.C_NUMBER_RE =
          "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
        (e.BINARY_NUMBER_RE = "\\b(0b[01]+)"),
        (e.RE_STARTERS_RE =
          "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
        (e.BACKSLASH_ESCAPE = { begin: "\\\\[\\s\\S]", relevance: 0 }),
        (e.APOS_STRING_MODE = {
          className: "string",
          begin: "'",
          end: "'",
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE],
        }),
        (e.QUOTE_STRING_MODE = {
          className: "string",
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE],
        }),
        (e.PHRASAL_WORDS_MODE = {
          begin:
            /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
        }),
        (e.COMMENT = function (t, n, r) {
          var i = e.inherit(
            { className: "comment", begin: t, end: n, contains: [] },
            r || {}
          );
          return (
            i.contains.push(e.PHRASAL_WORDS_MODE),
            i.contains.push({
              className: "doctag",
              begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
              relevance: 0,
            }),
            i
          );
        }),
        (e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$")),
        (e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/")),
        (e.HASH_COMMENT_MODE = e.COMMENT("#", "$")),
        (e.NUMBER_MODE = {
          className: "number",
          begin: e.NUMBER_RE,
          relevance: 0,
        }),
        (e.C_NUMBER_MODE = {
          className: "number",
          begin: e.C_NUMBER_RE,
          relevance: 0,
        }),
        (e.BINARY_NUMBER_MODE = {
          className: "number",
          begin: e.BINARY_NUMBER_RE,
          relevance: 0,
        }),
        (e.CSS_NUMBER_MODE = {
          className: "number",
          begin:
            e.NUMBER_RE +
            "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
          relevance: 0,
        }),
        (e.REGEXP_MODE = {
          className: "regexp",
          begin: /\//,
          end: /\/[gimuy]*/,
          illegal: /\n/,
          contains: [
            e.BACKSLASH_ESCAPE,
            {
              begin: /\[/,
              end: /\]/,
              relevance: 0,
              contains: [e.BACKSLASH_ESCAPE],
            },
          ],
        }),
        (e.TITLE_MODE = {
          className: "title",
          begin: e.IDENT_RE,
          relevance: 0,
        }),
        (e.UNDERSCORE_TITLE_MODE = {
          className: "title",
          begin: e.UNDERSCORE_IDENT_RE,
          relevance: 0,
        }),
        (e.METHOD_GUARD = {
          begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE,
          relevance: 0,
        }),
        e
      );
    });
  },
  function (e, t) {
    e.exports = function (e) {
      var t = {
          keyword:
            "abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
          literal: "null false true",
        },
        n = {
          className: "string",
          begin: '@"',
          end: '"',
          contains: [{ begin: '""' }],
        },
        r = e.inherit(n, { illegal: /\n/ }),
        i = { className: "subst", begin: "{", end: "}", keywords: t },
        o = e.inherit(i, { illegal: /\n/ }),
        a = {
          className: "string",
          begin: /\$"/,
          end: '"',
          illegal: /\n/,
          contains: [{ begin: "{{" }, { begin: "}}" }, e.BACKSLASH_ESCAPE, o],
        },
        s = {
          className: "string",
          begin: /\$@"/,
          end: '"',
          contains: [{ begin: "{{" }, { begin: "}}" }, { begin: '""' }, i],
        },
        c = e.inherit(s, {
          illegal: /\n/,
          contains: [{ begin: "{{" }, { begin: "}}" }, { begin: '""' }, o],
        });
      (i.contains = [
        s,
        a,
        n,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        e.C_NUMBER_MODE,
        e.C_BLOCK_COMMENT_MODE,
      ]),
        (o.contains = [
          c,
          a,
          r,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.C_NUMBER_MODE,
          e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ }),
        ]);
      var l = { variants: [s, a, n, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE] },
        u =
          e.IDENT_RE +
          "(<" +
          e.IDENT_RE +
          "(\\s*,\\s*" +
          e.IDENT_RE +
          ")*>)?(\\[\\])?";
      return {
        aliases: ["csharp"],
        keywords: t,
        illegal: /::/,
        contains: [
          e.COMMENT("///", "$", {
            returnBegin: !0,
            contains: [
              {
                className: "doctag",
                variants: [
                  { begin: "///", relevance: 0 },
                  { begin: "\x3c!--|--\x3e" },
                  { begin: "</?", end: ">" },
                ],
              },
            ],
          }),
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            className: "meta",
            begin: "#",
            end: "$",
            keywords: {
              "meta-keyword":
                "if else elif endif define undef warning error line region endregion pragma checksum",
            },
          },
          l,
          e.C_NUMBER_MODE,
          {
            beginKeywords: "class interface",
            end: /[{;=]/,
            illegal: /[^\s:]/,
            contains: [
              e.TITLE_MODE,
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
            ],
          },
          {
            beginKeywords: "namespace",
            end: /[{;=]/,
            illegal: /[^\s:]/,
            contains: [
              e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }),
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
            ],
          },
          {
            className: "meta",
            begin: "^\\s*\\[",
            excludeBegin: !0,
            end: "\\]",
            excludeEnd: !0,
            contains: [{ className: "meta-string", begin: /"/, end: /"/ }],
          },
          { beginKeywords: "new return throw await else", relevance: 0 },
          {
            className: "function",
            begin: "(" + u + "\\s+)+" + e.IDENT_RE + "\\s*\\(",
            returnBegin: !0,
            end: /[{;=]/,
            excludeEnd: !0,
            keywords: t,
            contains: [
              {
                begin: e.IDENT_RE + "\\s*\\(",
                returnBegin: !0,
                contains: [e.TITLE_MODE],
                relevance: 0,
              },
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: t,
                relevance: 0,
                contains: [l, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE],
              },
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
            ],
          },
        ],
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = "[A-Za-z$_][0-9A-Za-z$_]*",
        n = {
          keyword:
            "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
          literal: "true false null undefined NaN Infinity",
          built_in:
            "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise",
        },
        r = {
          className: "number",
          variants: [
            { begin: "\\b(0[bB][01]+)" },
            { begin: "\\b(0[oO][0-7]+)" },
            { begin: e.C_NUMBER_RE },
          ],
          relevance: 0,
        },
        i = {
          className: "subst",
          begin: "\\$\\{",
          end: "\\}",
          keywords: n,
          contains: [],
        },
        o = {
          className: "string",
          begin: "`",
          end: "`",
          contains: [e.BACKSLASH_ESCAPE, i],
        };
      i.contains = [
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        o,
        r,
        e.REGEXP_MODE,
      ];
      var a = i.contains.concat([
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE,
      ]);
      return {
        aliases: ["js", "jsx"],
        keywords: n,
        contains: [
          {
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/,
          },
          { className: "meta", begin: /^#!/, end: /$/ },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          o,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          r,
          {
            begin: /[{,]\s*/,
            relevance: 0,
            contains: [
              {
                begin: t + "\\s*:",
                returnBegin: !0,
                relevance: 0,
                contains: [{ className: "attr", begin: t, relevance: 0 }],
              },
            ],
          },
          {
            begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
            keywords: "return throw case",
            contains: [
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              e.REGEXP_MODE,
              {
                className: "function",
                begin: "(\\(.*?\\)|" + t + ")\\s*=>",
                returnBegin: !0,
                end: "\\s*=>",
                contains: [
                  {
                    className: "params",
                    variants: [
                      { begin: t },
                      { begin: /\(\s*\)/ },
                      {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: n,
                        contains: a,
                      },
                    ],
                  },
                ],
              },
              {
                begin: /</,
                end: /(\/\w+|\w+\/)>/,
                subLanguage: "xml",
                contains: [
                  { begin: /<\w+\s*\/>/, skip: !0 },
                  {
                    begin: /<\w+/,
                    end: /(\/\w+|\w+\/)>/,
                    skip: !0,
                    contains: [{ begin: /<\w+\s*\/>/, skip: !0 }, "self"],
                  },
                ],
              },
            ],
            relevance: 0,
          },
          {
            className: "function",
            beginKeywords: "function",
            end: /\{/,
            excludeEnd: !0,
            contains: [
              e.inherit(e.TITLE_MODE, { begin: t }),
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                contains: a,
              },
            ],
            illegal: /\[|%/,
          },
          { begin: /\$[(.]/ },
          e.METHOD_GUARD,
          {
            className: "class",
            beginKeywords: "class",
            end: /[{;=]/,
            excludeEnd: !0,
            illegal: /[:"\[\]]/,
            contains: [{ beginKeywords: "extends" }, e.UNDERSCORE_TITLE_MODE],
          },
          { beginKeywords: "constructor", end: /\{/, excludeEnd: !0 },
        ],
        illegal: /#(?!!)/,
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t =
          "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
        n = {
          className: "number",
          begin:
            "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
          relevance: 0,
        };
      return {
        aliases: ["jsp"],
        keywords: t,
        illegal: /<\/|#/,
        contains: [
          e.COMMENT("/\\*\\*", "\\*/", {
            relevance: 0,
            contains: [
              { begin: /\w+@/, relevance: 0 },
              { className: "doctag", begin: "@[A-Za-z]+" },
            ],
          }),
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          {
            className: "class",
            beginKeywords: "class interface",
            end: /[{;=]/,
            excludeEnd: !0,
            keywords: "class interface",
            illegal: /[:"\[\]]/,
            contains: [
              { beginKeywords: "extends implements" },
              e.UNDERSCORE_TITLE_MODE,
            ],
          },
          { beginKeywords: "new throw return else", relevance: 0 },
          {
            className: "function",
            begin:
              "([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+" +
              e.UNDERSCORE_IDENT_RE +
              "\\s*\\(",
            returnBegin: !0,
            end: /[{;=]/,
            excludeEnd: !0,
            keywords: t,
            contains: [
              {
                begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                returnBegin: !0,
                relevance: 0,
                contains: [e.UNDERSCORE_TITLE_MODE],
              },
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: t,
                relevance: 0,
                contains: [
                  e.APOS_STRING_MODE,
                  e.QUOTE_STRING_MODE,
                  e.C_NUMBER_MODE,
                  e.C_BLOCK_COMMENT_MODE,
                ],
              },
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
            ],
          },
          n,
          { className: "meta", begin: "@[A-Za-z]+" },
        ],
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = { begin: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*" },
        n = { className: "meta", begin: /<\?(php)?|\?>/ },
        r = {
          className: "string",
          contains: [e.BACKSLASH_ESCAPE, n],
          variants: [
            { begin: 'b"', end: '"' },
            { begin: "b'", end: "'" },
            e.inherit(e.APOS_STRING_MODE, { illegal: null }),
            e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
          ],
        },
        i = { variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE] };
      return {
        aliases: ["php3", "php4", "php5", "php6"],
        case_insensitive: !0,
        keywords:
          "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        contains: [
          e.HASH_COMMENT_MODE,
          e.COMMENT("//", "$", { contains: [n] }),
          e.COMMENT("/\\*", "\\*/", {
            contains: [{ className: "doctag", begin: "@[A-Za-z]+" }],
          }),
          e.COMMENT("__halt_compiler.+?;", !1, {
            endsWithParent: !0,
            keywords: "__halt_compiler",
            lexemes: e.UNDERSCORE_IDENT_RE,
          }),
          {
            className: "string",
            begin: /<<<['"]?\w+['"]?$/,
            end: /^\w+;?$/,
            contains: [
              e.BACKSLASH_ESCAPE,
              {
                className: "subst",
                variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }],
              },
            ],
          },
          n,
          { className: "keyword", begin: /\$this\b/ },
          t,
          { begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
          {
            className: "function",
            beginKeywords: "function",
            end: /[;{]/,
            excludeEnd: !0,
            illegal: "\\$|\\[|%",
            contains: [
              e.UNDERSCORE_TITLE_MODE,
              {
                className: "params",
                begin: "\\(",
                end: "\\)",
                contains: ["self", t, e.C_BLOCK_COMMENT_MODE, r, i],
              },
            ],
          },
          {
            className: "class",
            beginKeywords: "class interface",
            end: "{",
            excludeEnd: !0,
            illegal: /[:\(\$"]/,
            contains: [
              { beginKeywords: "extends implements" },
              e.UNDERSCORE_TITLE_MODE,
            ],
          },
          {
            beginKeywords: "namespace",
            end: ";",
            illegal: /[\.']/,
            contains: [e.UNDERSCORE_TITLE_MODE],
          },
          {
            beginKeywords: "use",
            end: ";",
            contains: [e.UNDERSCORE_TITLE_MODE],
          },
          { begin: "=>" },
          r,
          i,
        ],
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = {
          keyword:
            "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
          built_in: "Ellipsis NotImplemented",
        },
        n = { className: "meta", begin: /^(>>>|\.\.\.) / },
        r = {
          className: "subst",
          begin: /\{/,
          end: /\}/,
          keywords: t,
          illegal: /#/,
        },
        i = {
          className: "string",
          contains: [e.BACKSLASH_ESCAPE],
          variants: [
            { begin: /(u|b)?r?'''/, end: /'''/, contains: [n], relevance: 10 },
            { begin: /(u|b)?r?"""/, end: /"""/, contains: [n], relevance: 10 },
            { begin: /(fr|rf|f)'''/, end: /'''/, contains: [n, r] },
            { begin: /(fr|rf|f)"""/, end: /"""/, contains: [n, r] },
            { begin: /(u|r|ur)'/, end: /'/, relevance: 10 },
            { begin: /(u|r|ur)"/, end: /"/, relevance: 10 },
            { begin: /(b|br)'/, end: /'/ },
            { begin: /(b|br)"/, end: /"/ },
            { begin: /(fr|rf|f)'/, end: /'/, contains: [r] },
            { begin: /(fr|rf|f)"/, end: /"/, contains: [r] },
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
          ],
        },
        o = {
          className: "number",
          relevance: 0,
          variants: [
            { begin: e.BINARY_NUMBER_RE + "[lLjJ]?" },
            { begin: "\\b(0o[0-7]+)[lLjJ]?" },
            { begin: e.C_NUMBER_RE + "[lLjJ]?" },
          ],
        },
        a = {
          className: "params",
          begin: /\(/,
          end: /\)/,
          contains: ["self", n, o, i],
        };
      return (
        (r.contains = [i, o, n]),
        {
          aliases: ["py", "gyp"],
          keywords: t,
          illegal: /(<\/|->|\?)|=>/,
          contains: [
            n,
            o,
            i,
            e.HASH_COMMENT_MODE,
            {
              variants: [
                { className: "function", beginKeywords: "def" },
                { className: "class", beginKeywords: "class" },
              ],
              end: /:/,
              illegal: /[${=;\n,]/,
              contains: [
                e.UNDERSCORE_TITLE_MODE,
                a,
                { begin: /->/, endsWithParent: !0, keywords: "None" },
              ],
            },
            { className: "meta", begin: /^[\t ]*@/, end: /$/ },
            { begin: /\b(print|exec)\(/ },
          ],
        }
      );
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t =
          "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
        n = {
          keyword:
            "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
          literal: "true false nil",
        },
        r = { className: "doctag", begin: "@[A-Za-z]+" },
        i = { begin: "#<", end: ">" },
        o = [
          e.COMMENT("#", "$", { contains: [r] }),
          e.COMMENT("^\\=begin", "^\\=end", { contains: [r], relevance: 10 }),
          e.COMMENT("^__END__", "\\n$"),
        ],
        a = { className: "subst", begin: "#\\{", end: "}", keywords: n },
        s = {
          className: "string",
          contains: [e.BACKSLASH_ESCAPE, a],
          variants: [
            { begin: /'/, end: /'/ },
            { begin: /"/, end: /"/ },
            { begin: /`/, end: /`/ },
            { begin: "%[qQwWx]?\\(", end: "\\)" },
            { begin: "%[qQwWx]?\\[", end: "\\]" },
            { begin: "%[qQwWx]?{", end: "}" },
            { begin: "%[qQwWx]?<", end: ">" },
            { begin: "%[qQwWx]?/", end: "/" },
            { begin: "%[qQwWx]?%", end: "%" },
            { begin: "%[qQwWx]?-", end: "-" },
            { begin: "%[qQwWx]?\\|", end: "\\|" },
            {
              begin:
                /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/,
            },
            { begin: /<<(-?)\w+$/, end: /^\s*\w+$/ },
          ],
        },
        c = {
          className: "params",
          begin: "\\(",
          end: "\\)",
          endsParent: !0,
          keywords: n,
        },
        l = [
          s,
          i,
          {
            className: "class",
            beginKeywords: "class module",
            end: "$|;",
            illegal: /=/,
            contains: [
              e.inherit(e.TITLE_MODE, {
                begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",
              }),
              {
                begin: "<\\s*",
                contains: [{ begin: "(" + e.IDENT_RE + "::)?" + e.IDENT_RE }],
              },
            ].concat(o),
          },
          {
            className: "function",
            beginKeywords: "def",
            end: "$|;",
            contains: [e.inherit(e.TITLE_MODE, { begin: t }), c].concat(o),
          },
          { begin: e.IDENT_RE + "::" },
          {
            className: "symbol",
            begin: e.UNDERSCORE_IDENT_RE + "(\\!|\\?)?:",
            relevance: 0,
          },
          {
            className: "symbol",
            begin: ":(?!\\s)",
            contains: [s, { begin: t }],
            relevance: 0,
          },
          {
            className: "number",
            begin:
              "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            relevance: 0,
          },
          { begin: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" },
          { className: "params", begin: /\|/, end: /\|/, keywords: n },
          {
            begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
            keywords: "unless",
            contains: [
              i,
              {
                className: "regexp",
                contains: [e.BACKSLASH_ESCAPE, a],
                illegal: /\n/,
                variants: [
                  { begin: "/", end: "/[a-z]*" },
                  { begin: "%r{", end: "}[a-z]*" },
                  { begin: "%r\\(", end: "\\)[a-z]*" },
                  { begin: "%r!", end: "![a-z]*" },
                  { begin: "%r\\[", end: "\\][a-z]*" },
                ],
              },
            ].concat(o),
            relevance: 0,
          },
        ].concat(o);
      (a.contains = l), (c.contains = l);
      var u = [
        { begin: /^\s*=>/, starts: { end: "$", contains: l } },
        {
          className: "meta",
          begin:
            "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
          starts: { end: "$", contains: l },
        },
      ];
      return {
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        keywords: n,
        illegal: /\/\*/,
        contains: o.concat(u).concat(l),
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return {
        aliases: ["console"],
        contains: [
          {
            className: "meta",
            begin: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",
            starts: { end: "$", subLanguage: "bash" },
          },
        ],
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = {
          keyword:
            "__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
          literal: "true false nil",
          built_in:
            "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip",
        },
        n = { className: "type", begin: "\\b[A-Z][\\wÀ-ʸ']*", relevance: 0 },
        r = e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
        i = {
          className: "subst",
          begin: /\\\(/,
          end: "\\)",
          keywords: t,
          contains: [],
        },
        o = {
          className: "number",
          begin:
            "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
          relevance: 0,
        },
        a = e.inherit(e.QUOTE_STRING_MODE, {
          contains: [i, e.BACKSLASH_ESCAPE],
        });
      return (
        (i.contains = [o]),
        {
          keywords: t,
          contains: [
            a,
            e.C_LINE_COMMENT_MODE,
            r,
            n,
            o,
            {
              className: "function",
              beginKeywords: "func",
              end: "{",
              excludeEnd: !0,
              contains: [
                e.inherit(e.TITLE_MODE, { begin: /[A-Za-z$_][0-9A-Za-z$_]*/ }),
                { begin: /</, end: />/ },
                {
                  className: "params",
                  begin: /\(/,
                  end: /\)/,
                  endsParent: !0,
                  keywords: t,
                  contains: [
                    "self",
                    o,
                    a,
                    e.C_BLOCK_COMMENT_MODE,
                    { begin: ":" },
                  ],
                  illegal: /["']/,
                },
              ],
              illegal: /\[|%/,
            },
            {
              className: "class",
              beginKeywords: "struct protocol class extension enum",
              keywords: t,
              end: "\\{",
              excludeEnd: !0,
              contains: [
                e.inherit(e.TITLE_MODE, {
                  begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/,
                }),
              ],
            },
            {
              className: "meta",
              begin:
                "(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)",
            },
            {
              beginKeywords: "import",
              end: /$/,
              contains: [e.C_LINE_COMMENT_MODE, r],
            },
          ],
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(40);
    e.exports = function (e, t, n) {
      function i(e, t) {
        return m && (m = clearTimeout(m)), (g = 0), n.call(e, t);
      }
      function o(e) {
        (l = e.clientX), (u = e.clientY);
      }
      function a(e, n) {
        if (
          (m && (m = clearTimeout(m)),
          Math.abs(f - l) + Math.abs(d - u) < h.sensitivity)
        )
          return (g = 1), t.call(e, n);
        (f = l),
          (d = u),
          (m = setTimeout(function () {
            a(e, n);
          }, h.interval));
      }
      function s(t) {
        return (
          m && (m = clearTimeout(m)),
          e.removeEventListener("mousemove", o, !1),
          1 !== g &&
            ((f = t.clientX),
            (d = t.clientY),
            e.addEventListener("mousemove", o, !1),
            (m = setTimeout(function () {
              a(e, t);
            }, h.interval))),
          this
        );
      }
      function c(t) {
        return (
          m && (m = clearTimeout(m)),
          e.removeEventListener("mousemove", o, !1),
          1 === g &&
            (m = setTimeout(function () {
              i(e, t);
            }, h.timeout)),
          this
        );
      }
      var l,
        u,
        f,
        d,
        p = {},
        g = 0,
        m = 0,
        h = { sensitivity: 7, interval: 100, timeout: 0 };
      return (
        (p.options = function (e) {
          return (h = r({}, h, e)), p;
        }),
        (p.remove = function () {
          e &&
            (e.removeEventListener("mouseover", s, !1),
            e.removeEventListener("mouseout", c, !1));
        }),
        e &&
          (e.addEventListener("mouseover", s, !1),
          e.addEventListener("mouseout", c, !1)),
        p
      );
    };
  },
  function (e, t) {
    function n() {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) r.call(n, i) && (e[i] = n[i]);
      }
      return e;
    }
    e.exports = n;
    var r = Object.prototype.hasOwnProperty;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      function (e) {
        function n(e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function () {
                (t = !1), e();
              }));
          };
        }
        function r(e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                (t = !1), e();
              }, le));
          };
        }
        function i(e) {
          var t = {};
          return e && "[object Function]" === t.toString.call(e);
        }
        function o(e, t) {
          if (1 !== e.nodeType) return [];
          var n = getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function a(e) {
          return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function s(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case "HTML":
            case "BODY":
              return e.ownerDocument.body;
            case "#document":
              return e.body;
          }
          var t = o(e),
            n = t.overflow,
            r = t.overflowX;
          return /(auto|scroll)/.test(n + t.overflowY + r) ? e : s(a(e));
        }
        function c(e) {
          var t = e && e.offsetParent,
            n = t && t.nodeName;
          return n && "BODY" !== n && "HTML" !== n
            ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) &&
              "static" === o(t, "position")
              ? c(t)
              : t
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
        }
        function l(e) {
          var t = e.nodeName;
          return "BODY" !== t && ("HTML" === t || c(e.firstElementChild) === e);
        }
        function u(e) {
          return null !== e.parentNode ? u(e.parentNode) : e;
        }
        function f(e, t) {
          if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
          var n =
              e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            r = n ? e : t,
            i = n ? t : e,
            o = document.createRange();
          o.setStart(r, 0), o.setEnd(i, 0);
          var a = o.commonAncestorContainer;
          if ((e !== a && t !== a) || r.contains(i)) return l(a) ? a : c(a);
          var s = u(e);
          return s.host ? f(s.host, t) : f(e, u(t).host);
        }
        function d(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top",
            n = "top" === t ? "scrollTop" : "scrollLeft",
            r = e.nodeName;
          if ("BODY" === r || "HTML" === r) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[n];
          }
          return e[n];
        }
        function p(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = d(t, "top"),
            i = d(t, "left"),
            o = n ? -1 : 1;
          return (
            (e.top += r * o),
            (e.bottom += r * o),
            (e.left += i * o),
            (e.right += i * o),
            e
          );
        }
        function g(e, t) {
          var n = "x" === t ? "Left" : "Top",
            r = "Left" === n ? "Right" : "Bottom";
          return (
            parseFloat(e["border" + n + "Width"], 10) +
            parseFloat(e["border" + r + "Width"], 10)
          );
        }
        function m(e, t, n, r) {
          return Math.max(
            t["offset" + e],
            t["scroll" + e],
            n["client" + e],
            n["offset" + e],
            n["scroll" + e],
            ge()
              ? n["offset" + e] +
                  r["margin" + ("Height" === e ? "Top" : "Left")] +
                  r["margin" + ("Height" === e ? "Bottom" : "Right")]
              : 0
          );
        }
        function h() {
          var e = document.body,
            t = document.documentElement,
            n = ge() && getComputedStyle(t);
          return { height: m("Height", e, t, n), width: m("Width", e, t, n) };
        }
        function b(e) {
          return ve({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height,
          });
        }
        function v(e) {
          var t = {};
          if (ge())
            try {
              t = e.getBoundingClientRect();
              var n = d(e, "top"),
                r = d(e, "left");
              (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
            } catch (e) {}
          else t = e.getBoundingClientRect();
          var i = {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top,
            },
            a = "HTML" === e.nodeName ? h() : {},
            s = a.width || e.clientWidth || i.right - i.left,
            c = a.height || e.clientHeight || i.bottom - i.top,
            l = e.offsetWidth - s,
            u = e.offsetHeight - c;
          if (l || u) {
            var f = o(e);
            (l -= g(f, "x")), (u -= g(f, "y")), (i.width -= l), (i.height -= u);
          }
          return b(i);
        }
        function E(e, t) {
          var n = ge(),
            r = "HTML" === t.nodeName,
            i = v(e),
            a = v(t),
            c = s(e),
            l = o(t),
            u = parseFloat(l.borderTopWidth, 10),
            f = parseFloat(l.borderLeftWidth, 10),
            d = b({
              top: i.top - a.top - u,
              left: i.left - a.left - f,
              width: i.width,
              height: i.height,
            });
          if (((d.marginTop = 0), (d.marginLeft = 0), !n && r)) {
            var g = parseFloat(l.marginTop, 10),
              m = parseFloat(l.marginLeft, 10);
            (d.top -= u - g),
              (d.bottom -= u - g),
              (d.left -= f - m),
              (d.right -= f - m),
              (d.marginTop = g),
              (d.marginLeft = m);
          }
          return (
            (n ? t.contains(c) : t === c && "BODY" !== c.nodeName) &&
              (d = p(d, t)),
            d
          );
        }
        function _(e) {
          var t = e.ownerDocument.documentElement,
            n = E(e, t),
            r = Math.max(t.clientWidth, window.innerWidth || 0),
            i = Math.max(t.clientHeight, window.innerHeight || 0),
            o = d(t),
            a = d(t, "left");
          return b({
            top: o - n.top + n.marginTop,
            left: a - n.left + n.marginLeft,
            width: r,
            height: i,
          });
        }
        function y(e) {
          var t = e.nodeName;
          return (
            "BODY" !== t &&
            "HTML" !== t &&
            ("fixed" === o(e, "position") || y(a(e)))
          );
        }
        function w(e, t, n, r) {
          var i = { top: 0, left: 0 },
            o = f(e, t);
          if ("viewport" === r) i = _(o);
          else {
            var c = void 0;
            "scrollParent" === r
              ? ((c = s(a(t))),
                "BODY" === c.nodeName && (c = e.ownerDocument.documentElement))
              : (c = "window" === r ? e.ownerDocument.documentElement : r);
            var l = E(c, o);
            if ("HTML" !== c.nodeName || y(o)) i = l;
            else {
              var u = h(),
                d = u.height,
                p = u.width;
              (i.top += l.top - l.marginTop),
                (i.bottom = d + l.top),
                (i.left += l.left - l.marginLeft),
                (i.right = p + l.left);
            }
          }
          return (
            (i.left += n), (i.top += n), (i.right -= n), (i.bottom -= n), i
          );
        }
        function O(e) {
          return e.width * e.height;
        }
        function N(e, t, n, r, i) {
          var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e.indexOf("auto")) return e;
          var a = w(n, r, o, i),
            s = {
              top: { width: a.width, height: t.top - a.top },
              right: { width: a.right - t.right, height: a.height },
              bottom: { width: a.width, height: a.bottom - t.bottom },
              left: { width: t.left - a.left, height: a.height },
            },
            c = Object.keys(s)
              .map(function (e) {
                return ve({ key: e }, s[e], { area: O(s[e]) });
              })
              .sort(function (e, t) {
                return t.area - e.area;
              }),
            l = c.filter(function (e) {
              var t = e.width,
                r = e.height;
              return t >= n.clientWidth && r >= n.clientHeight;
            }),
            u = l.length > 0 ? l[0].key : c[0].key,
            f = e.split("-")[1];
          return u + (f ? "-" + f : "");
        }
        function x(e, t, n) {
          return E(n, f(t, n));
        }
        function M(e) {
          var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
          return { width: e.offsetWidth + r, height: e.offsetHeight + n };
        }
        function C(e) {
          var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
          });
        }
        function T(e, t, n) {
          n = n.split("-")[0];
          var r = M(e),
            i = { width: r.width, height: r.height },
            o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            c = o ? "height" : "width",
            l = o ? "width" : "height";
          return (
            (i[a] = t[a] + t[c] / 2 - r[c] / 2),
            (i[s] = n === s ? t[s] - r[l] : t[C(s)]),
            i
          );
        }
        function S(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function L(e, t, n) {
          if (Array.prototype.findIndex)
            return e.findIndex(function (e) {
              return e[t] === n;
            });
          var r = S(e, function (e) {
            return e[t] === n;
          });
          return e.indexOf(r);
        }
        function A(e, t, n) {
          return (
            (void 0 === n ? e : e.slice(0, L(e, "name", n))).forEach(function (
              e
            ) {
              e.function &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!"
                );
              var n = e.function || e.fn;
              e.enabled &&
                i(n) &&
                ((t.offsets.popper = b(t.offsets.popper)),
                (t.offsets.reference = b(t.offsets.reference)),
                (t = n(t, e)));
            }),
            t
          );
        }
        function R() {
          if (!this.state.isDestroyed) {
            var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {},
            };
            (e.offsets.reference = x(this.state, this.popper, this.reference)),
              (e.placement = N(
                this.options.placement,
                e.offsets.reference,
                this.popper,
                this.reference,
                this.options.modifiers.flip.boundariesElement,
                this.options.modifiers.flip.padding
              )),
              (e.originalPlacement = e.placement),
              (e.offsets.popper = T(
                this.popper,
                e.offsets.reference,
                e.placement
              )),
              (e.offsets.popper.position = "absolute"),
              (e = A(this.modifiers, e)),
              this.state.isCreated
                ? this.options.onUpdate(e)
                : ((this.state.isCreated = !0), this.options.onCreate(e));
          }
        }
        function D(e, t) {
          return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t;
          });
        }
        function I(e) {
          for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
              n = e.charAt(0).toUpperCase() + e.slice(1),
              r = 0;
            r < t.length - 1;
            r++
          ) {
            var i = t[r],
              o = i ? "" + i + n : e;
            if (void 0 !== document.body.style[o]) return o;
          }
          return null;
        }
        function B() {
          return (
            (this.state.isDestroyed = !0),
            D(this.modifiers, "applyStyle") &&
              (this.popper.removeAttribute("x-placement"),
              (this.popper.style.left = ""),
              (this.popper.style.position = ""),
              (this.popper.style.top = ""),
              (this.popper.style[I("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
              this.popper.parentNode.removeChild(this.popper),
            this
          );
        }
        function k(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function P(e, t, n, r) {
          var i = "BODY" === e.nodeName,
            o = i ? e.ownerDocument.defaultView : e;
          o.addEventListener(t, n, { passive: !0 }),
            i || P(s(o.parentNode), t, n, r),
            r.push(o);
        }
        function j(e, t, n, r) {
          (n.updateBound = r),
            k(e).addEventListener("resize", n.updateBound, { passive: !0 });
          var i = s(e);
          return (
            P(i, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = i),
            (n.eventsEnabled = !0),
            n
          );
        }
        function F() {
          this.state.eventsEnabled ||
            (this.state = j(
              this.reference,
              this.options,
              this.state,
              this.scheduleUpdate
            ));
        }
        function U(e, t) {
          return (
            k(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function (e) {
              e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
          );
        }
        function H() {
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = U(this.reference, this.state)));
        }
        function K(e) {
          return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function z(e, t) {
          Object.keys(t).forEach(function (n) {
            var r = "";
            -1 !==
              ["width", "height", "top", "right", "bottom", "left"].indexOf(
                n
              ) &&
              K(t[n]) &&
              (r = "px"),
              (e.style[n] = t[n] + r);
          });
        }
        function W(e, t) {
          Object.keys(t).forEach(function (n) {
            !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
          });
        }
        function $(e) {
          return (
            z(e.instance.popper, e.styles),
            W(e.instance.popper, e.attributes),
            e.arrowElement &&
              Object.keys(e.arrowStyles).length &&
              z(e.arrowElement, e.arrowStyles),
            e
          );
        }
        function q(e, t, n, r, i) {
          var o = x(i, t, e),
            a = N(
              n.placement,
              o,
              t,
              e,
              n.modifiers.flip.boundariesElement,
              n.modifiers.flip.padding
            );
          return (
            t.setAttribute("x-placement", a), z(t, { position: "absolute" }), n
          );
        }
        function G(e, t) {
          var n = t.x,
            r = t.y,
            i = e.offsets.popper,
            o = S(e.instance.modifiers, function (e) {
              return "applyStyle" === e.name;
            }).gpuAcceleration;
          void 0 !== o &&
            console.warn(
              "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
            );
          var a = void 0 !== o ? o : t.gpuAcceleration,
            s = c(e.instance.popper),
            l = v(s),
            u = { position: i.position },
            f = {
              left: Math.floor(i.left),
              top: Math.floor(i.top),
              bottom: Math.floor(i.bottom),
              right: Math.floor(i.right),
            },
            d = "bottom" === n ? "top" : "bottom",
            p = "right" === r ? "left" : "right",
            g = I("transform"),
            m = void 0,
            h = void 0;
          if (
            ((h = "bottom" === d ? -l.height + f.bottom : f.top),
            (m = "right" === p ? -l.width + f.right : f.left),
            a && g)
          )
            (u[g] = "translate3d(" + m + "px, " + h + "px, 0)"),
              (u[d] = 0),
              (u[p] = 0),
              (u.willChange = "transform");
          else {
            var b = "bottom" === d ? -1 : 1,
              E = "right" === p ? -1 : 1;
            (u[d] = h * b), (u[p] = m * E), (u.willChange = d + ", " + p);
          }
          var _ = { "x-placement": e.placement };
          return (
            (e.attributes = ve({}, _, e.attributes)),
            (e.styles = ve({}, u, e.styles)),
            (e.arrowStyles = ve({}, e.offsets.arrow, e.arrowStyles)),
            e
          );
        }
        function V(e, t, n) {
          var r = S(e, function (e) {
              return e.name === t;
            }),
            i =
              !!r &&
              e.some(function (e) {
                return e.name === n && e.enabled && e.order < r.order;
              });
          if (!i) {
            var o = "`" + t + "`",
              a = "`" + n + "`";
            console.warn(
              a +
                " modifier is required by " +
                o +
                " modifier in order to work, be sure to include it before " +
                o +
                "!"
            );
          }
          return i;
        }
        function Z(e, t) {
          var n;
          if (!V(e.instance.modifiers, "arrow", "keepTogether")) return e;
          var r = t.element;
          if ("string" == typeof r) {
            if (!(r = e.instance.popper.querySelector(r))) return e;
          } else if (!e.instance.popper.contains(r))
            return (
              console.warn(
                "WARNING: `arrow.element` must be child of its popper element!"
              ),
              e
            );
          var i = e.placement.split("-")[0],
            a = e.offsets,
            s = a.popper,
            c = a.reference,
            l = -1 !== ["left", "right"].indexOf(i),
            u = l ? "height" : "width",
            f = l ? "Top" : "Left",
            d = f.toLowerCase(),
            p = l ? "left" : "top",
            g = l ? "bottom" : "right",
            m = M(r)[u];
          c[g] - m < s[d] && (e.offsets.popper[d] -= s[d] - (c[g] - m)),
            c[d] + m > s[g] && (e.offsets.popper[d] += c[d] + m - s[g]),
            (e.offsets.popper = b(e.offsets.popper));
          var h = c[d] + c[u] / 2 - m / 2,
            v = o(e.instance.popper),
            E = parseFloat(v["margin" + f], 10),
            _ = parseFloat(v["border" + f + "Width"], 10),
            y = h - e.offsets.popper[d] - E - _;
          return (
            (y = Math.max(Math.min(s[u] - m, y), 0)),
            (e.arrowElement = r),
            (e.offsets.arrow =
              ((n = {}), be(n, d, Math.round(y)), be(n, p, ""), n)),
            e
          );
        }
        function Q(e) {
          return "end" === e ? "start" : "start" === e ? "end" : e;
        }
        function Y(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = _e.indexOf(e),
            r = _e.slice(n + 1).concat(_e.slice(0, n));
          return t ? r.reverse() : r;
        }
        function X(e, t) {
          if (D(e.instance.modifiers, "inner")) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var n = w(
              e.instance.popper,
              e.instance.reference,
              t.padding,
              t.boundariesElement
            ),
            r = e.placement.split("-")[0],
            i = C(r),
            o = e.placement.split("-")[1] || "",
            a = [];
          switch (t.behavior) {
            case ye.FLIP:
              a = [r, i];
              break;
            case ye.CLOCKWISE:
              a = Y(r);
              break;
            case ye.COUNTERCLOCKWISE:
              a = Y(r, !0);
              break;
            default:
              a = t.behavior;
          }
          return (
            a.forEach(function (s, c) {
              if (r !== s || a.length === c + 1) return e;
              (r = e.placement.split("-")[0]), (i = C(r));
              var l = e.offsets.popper,
                u = e.offsets.reference,
                f = Math.floor,
                d =
                  ("left" === r && f(l.right) > f(u.left)) ||
                  ("right" === r && f(l.left) < f(u.right)) ||
                  ("top" === r && f(l.bottom) > f(u.top)) ||
                  ("bottom" === r && f(l.top) < f(u.bottom)),
                p = f(l.left) < f(n.left),
                g = f(l.right) > f(n.right),
                m = f(l.top) < f(n.top),
                h = f(l.bottom) > f(n.bottom),
                b =
                  ("left" === r && p) ||
                  ("right" === r && g) ||
                  ("top" === r && m) ||
                  ("bottom" === r && h),
                v = -1 !== ["top", "bottom"].indexOf(r),
                E =
                  !!t.flipVariations &&
                  ((v && "start" === o && p) ||
                    (v && "end" === o && g) ||
                    (!v && "start" === o && m) ||
                    (!v && "end" === o && h));
              (d || b || E) &&
                ((e.flipped = !0),
                (d || b) && (r = a[c + 1]),
                E && (o = Q(o)),
                (e.placement = r + (o ? "-" + o : "")),
                (e.offsets.popper = ve(
                  {},
                  e.offsets.popper,
                  T(e.instance.popper, e.offsets.reference, e.placement)
                )),
                (e = A(e.instance.modifiers, e, "flip")));
            }),
            e
          );
        }
        function J(e) {
          var t = e.offsets,
            n = t.popper,
            r = t.reference,
            i = e.placement.split("-")[0],
            o = Math.floor,
            a = -1 !== ["top", "bottom"].indexOf(i),
            s = a ? "right" : "bottom",
            c = a ? "left" : "top",
            l = a ? "width" : "height";
          return (
            n[s] < o(r[c]) && (e.offsets.popper[c] = o(r[c]) - n[l]),
            n[c] > o(r[s]) && (e.offsets.popper[c] = o(r[s])),
            e
          );
        }
        function ee(e, t, n, r) {
          var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +i[1],
            a = i[2];
          if (!o) return e;
          if (0 === a.indexOf("%")) {
            var s = void 0;
            switch (a) {
              case "%p":
                s = n;
                break;
              case "%":
              case "%r":
              default:
                s = r;
            }
            return (b(s)[t] / 100) * o;
          }
          if ("vh" === a || "vw" === a) {
            return (
              (("vh" === a
                ? Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                  )
                : Math.max(
                    document.documentElement.clientWidth,
                    window.innerWidth || 0
                  )) /
                100) *
              o
            );
          }
          return o;
        }
        function te(e, t, n, r) {
          var i = [0, 0],
            o = -1 !== ["right", "left"].indexOf(r),
            a = e.split(/(\+|\-)/).map(function (e) {
              return e.trim();
            }),
            s = a.indexOf(
              S(a, function (e) {
                return -1 !== e.search(/,|\s/);
              })
            );
          a[s] &&
            -1 === a[s].indexOf(",") &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
          var c = /\s*,\s*|\s+/,
            l =
              -1 !== s
                ? [
                    a.slice(0, s).concat([a[s].split(c)[0]]),
                    [a[s].split(c)[1]].concat(a.slice(s + 1)),
                  ]
                : [a];
          return (
            (l = l.map(function (e, r) {
              var i = (1 === r ? !o : o) ? "height" : "width",
                a = !1;
              return e
                .reduce(function (e, t) {
                  return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                    ? ((e[e.length - 1] = t), (a = !0), e)
                    : a
                    ? ((e[e.length - 1] += t), (a = !1), e)
                    : e.concat(t);
                }, [])
                .map(function (e) {
                  return ee(e, i, t, n);
                });
            })),
            l.forEach(function (e, t) {
              e.forEach(function (n, r) {
                K(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1));
              });
            }),
            i
          );
        }
        function ne(e, t) {
          var n = t.offset,
            r = e.placement,
            i = e.offsets,
            o = i.popper,
            a = i.reference,
            s = r.split("-")[0],
            c = void 0;
          return (
            (c = K(+n) ? [+n, 0] : te(n, o, a, s)),
            "left" === s
              ? ((o.top += c[0]), (o.left -= c[1]))
              : "right" === s
              ? ((o.top += c[0]), (o.left += c[1]))
              : "top" === s
              ? ((o.left += c[0]), (o.top -= c[1]))
              : "bottom" === s && ((o.left += c[0]), (o.top += c[1])),
            (e.popper = o),
            e
          );
        }
        function re(e, t) {
          var n = t.boundariesElement || c(e.instance.popper);
          e.instance.reference === n && (n = c(n));
          var r = w(e.instance.popper, e.instance.reference, t.padding, n);
          t.boundaries = r;
          var i = t.priority,
            o = e.offsets.popper,
            a = {
              primary: function (e) {
                var n = o[e];
                return (
                  o[e] < r[e] &&
                    !t.escapeWithReference &&
                    (n = Math.max(o[e], r[e])),
                  be({}, e, n)
                );
              },
              secondary: function (e) {
                var n = "right" === e ? "left" : "top",
                  i = o[n];
                return (
                  o[e] > r[e] &&
                    !t.escapeWithReference &&
                    (i = Math.min(
                      o[n],
                      r[e] - ("right" === e ? o.width : o.height)
                    )),
                  be({}, n, i)
                );
              },
            };
          return (
            i.forEach(function (e) {
              var t =
                -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
              o = ve({}, o, a[t](e));
            }),
            (e.offsets.popper = o),
            e
          );
        }
        function ie(e) {
          var t = e.placement,
            n = t.split("-")[0],
            r = t.split("-")[1];
          if (r) {
            var i = e.offsets,
              o = i.reference,
              a = i.popper,
              s = -1 !== ["bottom", "top"].indexOf(n),
              c = s ? "left" : "top",
              l = s ? "width" : "height",
              u = {
                start: be({}, c, o[c]),
                end: be({}, c, o[c] + o[l] - a[l]),
              };
            e.offsets.popper = ve({}, a, u[r]);
          }
          return e;
        }
        function oe(e) {
          if (!V(e.instance.modifiers, "hide", "preventOverflow")) return e;
          var t = e.offsets.reference,
            n = S(e.instance.modifiers, function (e) {
              return "preventOverflow" === e.name;
            }).boundaries;
          if (
            t.bottom < n.top ||
            t.left > n.right ||
            t.top > n.bottom ||
            t.right < n.left
          ) {
            if (!0 === e.hide) return e;
            (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
          } else {
            if (!1 === e.hide) return e;
            (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
          }
          return e;
        }
        function ae(e) {
          var t = e.placement,
            n = t.split("-")[0],
            r = e.offsets,
            i = r.popper,
            o = r.reference,
            a = -1 !== ["left", "right"].indexOf(n),
            s = -1 === ["top", "left"].indexOf(n);
          return (
            (i[a ? "left" : "top"] =
              o[n] - (s ? i[a ? "width" : "height"] : 0)),
            (e.placement = C(t)),
            (e.offsets.popper = b(i)),
            e
          );
        }
        for (
          var se =
              "undefined" != typeof window && "undefined" != typeof document,
            ce = ["Edge", "Trident", "Firefox"],
            le = 0,
            ue = 0;
          ue < ce.length;
          ue += 1
        )
          if (se && navigator.userAgent.indexOf(ce[ue]) >= 0) {
            le = 1;
            break;
          }
        var fe = se && window.Promise,
          de = fe ? n : r,
          pe = void 0,
          ge = function () {
            return (
              void 0 === pe &&
                (pe = -1 !== navigator.appVersion.indexOf("MSIE 10")),
              pe
            );
          },
          me = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          he = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          be = function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          },
          ve =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          Ee = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
          ],
          _e = Ee.slice(3),
          ye = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise",
          },
          we = {
            shift: { order: 100, enabled: !0, fn: ie },
            offset: { order: 200, enabled: !0, fn: ne, offset: 0 },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: re,
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent",
            },
            keepTogether: { order: 400, enabled: !0, fn: J },
            arrow: { order: 500, enabled: !0, fn: Z, element: "[x-arrow]" },
            flip: {
              order: 600,
              enabled: !0,
              fn: X,
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport",
            },
            inner: { order: 700, enabled: !1, fn: ae },
            hide: { order: 800, enabled: !0, fn: oe },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: G,
              gpuAcceleration: !0,
              x: "bottom",
              y: "right",
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: $,
              onLoad: q,
              gpuAcceleration: void 0,
            },
          },
          Oe = {
            placement: "bottom",
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: we,
          },
          Ne = (function () {
            function e(t, n) {
              var r = this,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              me(this, e),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(r.update);
                }),
                (this.update = de(this.update.bind(this))),
                (this.options = ve({}, e.Defaults, o)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(ve({}, e.Defaults.modifiers, o.modifiers)).forEach(
                  function (t) {
                    r.options.modifiers[t] = ve(
                      {},
                      e.Defaults.modifiers[t] || {},
                      o.modifiers ? o.modifiers[t] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (e) {
                    return ve({ name: e }, r.options.modifiers[e]);
                  })
                  .sort(function (e, t) {
                    return e.order - t.order;
                  })),
                this.modifiers.forEach(function (e) {
                  e.enabled &&
                    i(e.onLoad) &&
                    e.onLoad(r.reference, r.popper, r.options, e, r.state);
                }),
                this.update();
              var a = this.options.eventsEnabled;
              a && this.enableEventListeners(), (this.state.eventsEnabled = a);
            }
            return (
              he(e, [
                {
                  key: "update",
                  value: function () {
                    return R.call(this);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return B.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value: function () {
                    return F.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value: function () {
                    return H.call(this);
                  },
                },
              ]),
              e
            );
          })();
        (Ne.Utils = ("undefined" != typeof window ? window : e).PopperUtils),
          (Ne.placements = Ee),
          (Ne.Defaults = Oe),
          (t.default = Ne);
      }.call(t, n(15));
  },
  function (e, t, n) {
    (function (n) {
      var r, i, o;
      !(function (n, a) {
        "use strict";
        (i = []),
          (r = a),
          void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) &&
            (e.exports = o);
      })(0, function () {
        "use strict";
        function e(e, a) {
          if (!r(e) || (!a.reProcess && e.getAttribute("textFitted")))
            return !1;
          a.reProcess || e.setAttribute("textFitted", 1);
          var s, c, l, u, f, d, p;
          if (
            ((l = e.innerHTML),
            (u = n(e)),
            (c = t(e)),
            !u || (!a.widthOnly && !c))
          )
            throw a.widthOnly
              ? new Error(
                  "Set a static width on the target element " +
                    e.outerHTML +
                    " before using textFit!"
                )
              : new Error(
                  "Set a static height and width on the target element " +
                    e.outerHTML +
                    " before using textFit!"
                );
          -1 === l.indexOf("textFitted")
            ? ((s = document.createElement("span")),
              (s.className = "textFitted"),
              (s.style.display = "inline-block"),
              (s.innerHTML = l),
              (e.innerHTML = ""),
              e.appendChild(s))
            : ((s = e.querySelector("span.textFitted")),
              i(s, "textFitAlignVert") &&
                ((s.className = s.className.replace("textFitAlignVert", "")),
                (s.style.height = ""),
                e.className.replace("textFitAlignVertFlex", ""))),
            a.alignHoriz &&
              ((e.style["text-align"] = "center"),
              (s.style["text-align"] = "center"));
          var g = a.multiLine;
          for (
            a.detectMultiLine &&
              !g &&
              s.scrollHeight >=
                2 * parseInt(window.getComputedStyle(s)["font-size"], 10) &&
              (g = !0),
              g || (e.style["white-space"] = "nowrap"),
              f = a.minFontSize + 1,
              p = a.maxFontSize + 1;
            f <= p;

          )
            (d = parseInt((f + p) / 2, 10)),
              (s.style.fontSize = d + "px"),
              s.scrollWidth <= u && (a.widthOnly || s.scrollHeight <= c)
                ? (f = d + 1)
                : (p = d - 1);
          if (((s.style.fontSize = d - 1 + "px"), a.alignVert)) {
            o();
            var m = s.scrollHeight;
            "static" === window.getComputedStyle(e).position &&
              (e.style.position = "relative"),
              i(s, "textFitAlignVert") ||
                (s.className = s.className + " textFitAlignVert"),
              (s.style.height = m + "px"),
              a.alignVertWithFlexbox &&
                !i(e, "textFitAlignVertFlex") &&
                (e.className = e.className + " textFitAlignVertFlex");
          }
        }
        function t(e) {
          var t = window.getComputedStyle(e, null);
          return (
            e.clientHeight -
            parseInt(t.getPropertyValue("padding-top"), 10) -
            parseInt(t.getPropertyValue("padding-bottom"), 10)
          );
        }
        function n(e) {
          var t = window.getComputedStyle(e, null);
          return (
            e.clientWidth -
            parseInt(t.getPropertyValue("padding-left"), 10) -
            parseInt(t.getPropertyValue("padding-right"), 10)
          );
        }
        function r(e) {
          return "object" == typeof HTMLElement
            ? e instanceof HTMLElement
            : e &&
                "object" == typeof e &&
                null !== e &&
                1 === e.nodeType &&
                "string" == typeof e.nodeName;
        }
        function i(e, t) {
          return (" " + e.className + " ").indexOf(" " + t + " ") > -1;
        }
        function o() {
          if (!document.getElementById("textFitStyleSheet")) {
            var e = [
                ".textFitAlignVert{",
                "position: absolute;",
                "top: 0; right: 0; bottom: 0; left: 0;",
                "margin: auto;",
                "display: flex;",
                "justify-content: center;",
                "flex-direction: column;",
                "}",
                ".textFitAlignVertFlex{",
                "display: flex;",
                "}",
                ".textFitAlignVertFlex .textFitAlignVert{",
                "position: static;",
                "}",
              ].join(""),
              t = document.createElement("style");
            (t.type = "text/css"),
              (t.id = "textFitStyleSheet"),
              (t.innerHTML = e),
              document.body.appendChild(t);
          }
        }
        var a = {
          alignVert: !1,
          alignHoriz: !1,
          multiLine: !1,
          detectMultiLine: !0,
          minFontSize: 6,
          maxFontSize: 80,
          reProcess: !0,
          widthOnly: !1,
          alignVertWithFlexbox: !1,
        };
        return function (t, n) {
          n || (n = {});
          var r = {};
          for (var i in a) n.hasOwnProperty(i) ? (r[i] = n[i]) : (r[i] = a[i]);
          "function" == typeof t.toArray && (t = t.toArray());
          var o = Object.prototype.toString.call(t);
          "[object Array]" !== o &&
            "[object NodeList]" !== o &&
            "[object HTMLCollection]" !== o &&
            (t = [t]);
          for (var s = 0; s < t.length; s++) e(t[s], r);
        };
      });
    }.call(t, n(15)));
  },
  function (e, t, n) {
    n(44), n(61), (e.exports = n(3).Array.from);
  },
  function (e, t, n) {
    "use strict";
    var r = n(45)(!0);
    n(46)(
      String,
      "String",
      function (e) {
        (this._t = String(e)), (this._i = 0);
      },
      function () {
        var e,
          t = this._t,
          n = this._i;
        return n >= t.length
          ? { value: void 0, done: !0 }
          : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
      }
    );
  },
  function (e, t, n) {
    var r = n(8),
      i = n(9);
    e.exports = function (e) {
      return function (t, n) {
        var o,
          a,
          s = String(i(t)),
          c = r(n),
          l = s.length;
        return c < 0 || c >= l
          ? e
            ? ""
            : void 0
          : ((o = s.charCodeAt(c)),
            o < 55296 ||
            o > 56319 ||
            c + 1 === l ||
            (a = s.charCodeAt(c + 1)) < 56320 ||
            a > 57343
              ? e
                ? s.charAt(c)
                : o
              : e
              ? s.slice(c, c + 2)
              : a - 56320 + ((o - 55296) << 10) + 65536);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(47),
      i = n(16),
      o = n(19),
      a = n(4),
      s = n(2),
      c = n(13),
      l = n(51),
      u = n(26),
      f = n(60),
      d = n(0)("iterator"),
      p = !([].keys && "next" in [].keys()),
      g = function () {
        return this;
      };
    e.exports = function (e, t, n, m, h, b, v) {
      l(n, t, m);
      var E,
        _,
        y,
        w = function (e) {
          if (!p && e in M) return M[e];
          switch (e) {
            case "keys":
            case "values":
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this, e);
          };
        },
        O = t + " Iterator",
        N = "values" == h,
        x = !1,
        M = e.prototype,
        C = M[d] || M["@@iterator"] || (h && M[h]),
        T = (!p && C) || w(h),
        S = h ? (N ? w("entries") : T) : void 0,
        L = "Array" == t ? M.entries || C : C;
      if (
        (L &&
          (y = f(L.call(new e()))) !== Object.prototype &&
          y.next &&
          (u(y, O, !0), r || s(y, d) || a(y, d, g)),
        N &&
          C &&
          "values" !== C.name &&
          ((x = !0),
          (T = function () {
            return C.call(this);
          })),
        (r && !v) || (!p && !x && M[d]) || a(M, d, T),
        (c[t] = T),
        (c[O] = g),
        h)
      )
        if (
          ((E = {
            values: N ? T : w("values"),
            keys: b ? T : w("keys"),
            entries: S,
          }),
          v)
        )
          for (_ in E) _ in M || o(M, _, E[_]);
        else i(i.P + i.F * (p || x), t, E);
      return E;
    };
  },
  function (e, t) {
    e.exports = !1;
  },
  function (e, t, n) {
    e.exports =
      !n(7) &&
      !n(17)(function () {
        return (
          7 !=
          Object.defineProperty(n(18)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var r = n(10);
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(52),
      i = n(11),
      o = n(26),
      a = {};
    n(4)(a, n(0)("iterator"), function () {
      return this;
    }),
      (e.exports = function (e, t, n) {
        (e.prototype = r(a, { next: i(1, n) })), o(e, t + " Iterator");
      });
  },
  function (e, t, n) {
    var r = n(6),
      i = n(53),
      o = n(25),
      a = n(14)("IE_PROTO"),
      s = function () {},
      c = function () {
        var e,
          t = n(18)("iframe"),
          r = o.length;
        for (
          t.style.display = "none",
            n(59).appendChild(t),
            t.src = "javascript:",
            e = t.contentWindow.document,
            e.open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            c = e.F;
          r--;

        )
          delete c.prototype[o[r]];
        return c();
      };
    e.exports =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((s.prototype = r(e)),
              (n = new s()),
              (s.prototype = null),
              (n[a] = e))
            : (n = c()),
          void 0 === t ? n : i(n, t)
        );
      };
  },
  function (e, t, n) {
    var r = n(5),
      i = n(6),
      o = n(54);
    e.exports = n(7)
      ? Object.defineProperties
      : function (e, t) {
          i(e);
          for (var n, a = o(t), s = a.length, c = 0; s > c; )
            r.f(e, (n = a[c++]), t[n]);
          return e;
        };
  },
  function (e, t, n) {
    var r = n(55),
      i = n(25);
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, i);
      };
  },
  function (e, t, n) {
    var r = n(2),
      i = n(21),
      o = n(57)(!1),
      a = n(14)("IE_PROTO");
    e.exports = function (e, t) {
      var n,
        s = i(e),
        c = 0,
        l = [];
      for (n in s) n != a && r(s, n) && l.push(n);
      for (; t.length > c; ) r(s, (n = t[c++])) && (~o(l, n) || l.push(n));
      return l;
    };
  },
  function (e, t, n) {
    var r = n(22);
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" == r(e) ? e.split("") : Object(e);
        };
  },
  function (e, t, n) {
    var r = n(21),
      i = n(23),
      o = n(58);
    e.exports = function (e) {
      return function (t, n, a) {
        var s,
          c = r(t),
          l = i(c.length),
          u = o(a, l);
        if (e && n != n) {
          for (; l > u; ) if ((s = c[u++]) != s) return !0;
        } else
          for (; l > u; u++)
            if ((e || u in c) && c[u] === n) return e || u || 0;
        return !e && -1;
      };
    };
  },
  function (e, t, n) {
    var r = n(8),
      i = Math.max,
      o = Math.min;
    e.exports = function (e, t) {
      return (e = r(e)), e < 0 ? i(e + t, 0) : o(e, t);
    };
  },
  function (e, t, n) {
    var r = n(1).document;
    e.exports = r && r.documentElement;
  },
  function (e, t, n) {
    var r = n(2),
      i = n(27),
      o = n(14)("IE_PROTO"),
      a = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = i(e)),
          r(e, o)
            ? e[o]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? a
            : null
        );
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(20),
      i = n(16),
      o = n(27),
      a = n(62),
      s = n(63),
      c = n(23),
      l = n(64),
      u = n(65);
    i(
      i.S +
        i.F *
          !n(67)(function (e) {
            Array.from(e);
          }),
      "Array",
      {
        from: function (e) {
          var t,
            n,
            i,
            f,
            d = o(e),
            p = "function" == typeof this ? this : Array,
            g = arguments.length,
            m = g > 1 ? arguments[1] : void 0,
            h = void 0 !== m,
            b = 0,
            v = u(d);
          if (
            (h && (m = r(m, g > 2 ? arguments[2] : void 0, 2)),
            void 0 == v || (p == Array && s(v)))
          )
            for (t = c(d.length), n = new p(t); t > b; b++)
              l(n, b, h ? m(d[b], b) : d[b]);
          else
            for (f = v.call(d), n = new p(); !(i = f.next()).done; b++)
              l(n, b, h ? a(f, m, [i.value, b], !0) : i.value);
          return (n.length = b), n;
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(6);
    e.exports = function (e, t, n, i) {
      try {
        return i ? t(r(n)[0], n[1]) : t(n);
      } catch (t) {
        var o = e.return;
        throw (void 0 !== o && r(o.call(e)), t);
      }
    };
  },
  function (e, t, n) {
    var r = n(13),
      i = n(0)("iterator"),
      o = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (r.Array === e || o[i] === e);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      i = n(11);
    e.exports = function (e, t, n) {
      t in e ? r.f(e, t, i(0, n)) : (e[t] = n);
    };
  },
  function (e, t, n) {
    var r = n(66),
      i = n(0)("iterator"),
      o = n(13);
    e.exports = n(3).getIteratorMethod = function (e) {
      if (void 0 != e) return e[i] || e["@@iterator"] || o[r(e)];
    };
  },
  function (e, t, n) {
    var r = n(22),
      i = n(0)("toStringTag"),
      o =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        ),
      a = function (e, t) {
        try {
          return e[t];
        } catch (e) {}
      };
    e.exports = function (e) {
      var t, n, s;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" == typeof (n = a((t = Object(e)), i))
        ? n
        : o
        ? r(t)
        : "Object" == (s = r(t)) && "function" == typeof t.callee
        ? "Arguments"
        : s;
    };
  },
  function (e, t, n) {
    var r = n(0)("iterator"),
      i = !1;
    try {
      var o = [7][r]();
      (o.return = function () {
        i = !0;
      }),
        Array.from(o, function () {
          throw 2;
        });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !i) return !1;
      var n = !1;
      try {
        var o = [7],
          a = o[r]();
        (a.next = function () {
          return { done: (n = !0) };
        }),
          (o[r] = function () {
            return a;
          }),
          e(o);
      } catch (e) {}
      return n;
    };
  },
  function (e, t) {
    function n(e, t) {
      var n = t.getAttribute("xlink:href");
      if ("#" === n[0]) return e;
      u.href = n;
      var r = u.hash,
        i = u.href.split(r)[0];
      e[i] || (e[i] = { nodes: [], fragments: [] });
      var o = e[i];
      return (
        o.nodes.push({ element: t, fragment: r }),
        -1 === o.fragments.indexOf(r) && o.fragments.push(r),
        e
      );
    }
    function r(e, t) {
      return Array.prototype.slice
        .call(e.querySelectorAll(t.join(",")))
        .reduce(function (e, t) {
          return (e[["#", t.id].join("")] = t), e;
        }, {});
    }
    function i(e, t) {
      var n = e.parentNode;
      if (n && t) {
        n.getAttribute("viewBox") ||
          n.setAttribute("viewBox", t.getAttribute("viewBox"));
        for (
          var r = document.createDocumentFragment(), i = t.cloneNode(!0);
          i.childNodes.length;

        )
          r.appendChild(i.firstChild);
        n.replaceChild(r, e);
      }
    }
    function o(e, t) {
      var n = e.response;
      if (4 === e.readyState && n && Boolean(n.documentElement)) {
        var o = r(n.documentElement, t.fragments);
        t.nodes.forEach(function (e) {
          i(e.element, o[e.fragment]);
        });
      }
    }
    function a(e, t) {
      var n = new XMLHttpRequest();
      n.addEventListener("load", t),
        n.addEventListener("error", console.error),
        n.open("GET", e),
        (n.responseType = "document"),
        n.send();
    }
    function s(e, t, r) {
      var i = t
          .map(function (e) {
            return [":not(", e, ")"].join("");
          })
          .join(""),
        s = i ? [e, ">", i, r].join(" ") : [e, r].join(" "),
        c = document.querySelector(e),
        l = c.querySelectorAll(s),
        u = Array.prototype.slice.call(l).reduce(n, {});
      Object.keys(u).forEach(function (e) {
        var t = u[e];
        a(e, function () {
          o(this, t);
        });
      });
    }
    function c() {
      return Boolean(document.documentMode);
    }
    function l(e, t) {
      c() && ((e = e || "body"), (t = t || []), s(e, t, "use"));
    }
    var u = document.createElement("a");
    e.exports = l;
  },
]);

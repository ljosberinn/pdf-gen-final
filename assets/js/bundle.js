"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.bulmaCalendar = t() : e.bulmaCalendar = t();
}("undefined" != typeof self ? self : undefined, function () {
  return function (a) {
    var n = {};function s(e) {
      if (n[e]) return n[e].exports;var t = n[e] = { i: e, l: !1, exports: {} };return a[e].call(t.exports, t, t.exports, s), t.l = !0, t.exports;
    }return s.m = a, s.c = n, s.d = function (e, t, a) {
      s.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: a });
    }, s.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return s.d(t, "a", t), t;
    }, s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, s.p = "", s(s.s = 124);
  }([function (e, t, Ia) {
    (function (Ra) {
      var e;e = function e() {
        "use strict";
        var e, s;function l() {
          return e.apply(null, arguments);
        }function d(e) {
          return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
        }function _(e) {
          return null != e && "[object Object]" === Object.prototype.toString.call(e);
        }function o(e) {
          return void 0 === e;
        }function u(e) {
          return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
        }function m(e) {
          return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
        }function h(e, t) {
          var a,
              n = [];for (a = 0; a < e.length; ++a) {
            n.push(t(e[a], a));
          }return n;
        }function c(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }function M(e, t) {
          for (var a in t) {
            c(t, a) && (e[a] = t[a]);
          }return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e;
        }function L(e, t, a, n) {
          return wt(e, t, a, n, !0).utc();
        }function y(e) {
          return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf;
        }function Y(e) {
          if (null == e._isValid) {
            var t = y(e),
                a = s.call(t.parsedDateParts, function (e) {
              return null != e;
            }),
                n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;e._isValid = n;
          }return e._isValid;
        }function f(e) {
          var t = L(NaN);return null != e ? M(y(t), e) : y(t).userInvalidated = !0, t;
        }s = Array.prototype.some ? Array.prototype.some : function (e) {
          for (var t = Object(this), a = t.length >>> 0, n = 0; n < a; n++) {
            if (n in t && e.call(this, t[n], n, t)) return !0;
          }return !1;
        };var r = l.momentProperties = [];function p(e, t) {
          var a, n, s;if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = y(t)), o(t._locale) || (e._locale = t._locale), 0 < r.length) for (a = 0; a < r.length; a++) {
            o(s = t[n = r[a]]) || (e[n] = s);
          }return e;
        }var t = !1;function k(e) {
          p(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, l.updateOffset(this), t = !1);
        }function D(e) {
          return e instanceof k || null != e && null != e._isAMomentObject;
        }function T(e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
        }function g(e) {
          var t = +e,
              a = 0;return 0 !== t && isFinite(t) && (a = T(t)), a;
        }function i(e, t, a) {
          var n,
              s = Math.min(e.length, t.length),
              r = Math.abs(e.length - t.length),
              i = 0;for (n = 0; n < s; n++) {
            (a && e[n] !== t[n] || !a && g(e[n]) !== g(t[n])) && i++;
          }return i + r;
        }function v(e) {
          !1 === l.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e);
        }function a(s, r) {
          var i = !0;return M(function () {
            if (null != l.deprecationHandler && l.deprecationHandler(null, s), i) {
              for (var e, t = [], a = 0; a < arguments.length; a++) {
                if (e = "", "object" == _typeof(arguments[a])) {
                  for (var n in e += "\n[" + a + "] ", arguments[0]) {
                    e += n + ": " + arguments[0][n] + ", ";
                  }e = e.slice(0, -2);
                } else e = arguments[a];t.push(e);
              }v(s + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + new Error().stack), i = !1;
            }return r.apply(this, arguments);
          }, r);
        }var n,
            w = {};function b(e, t) {
          null != l.deprecationHandler && l.deprecationHandler(e, t), w[e] || (v(t), w[e] = !0);
        }function S(e) {
          return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
        }function H(e, t) {
          var a,
              n = M({}, e);for (a in t) {
            c(t, a) && (_(e[a]) && _(t[a]) ? (n[a] = {}, M(n[a], e[a]), M(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
          }for (a in e) {
            c(e, a) && !c(t, a) && _(e[a]) && (n[a] = M({}, n[a]));
          }return n;
        }function j(e) {
          null != e && this.set(e);
        }l.suppressDeprecationWarnings = !1, l.deprecationHandler = null, n = Object.keys ? Object.keys : function (e) {
          var t,
              a = [];for (t in e) {
            c(e, t) && a.push(t);
          }return a;
        };var x = {};function P(e, t) {
          var a = e.toLowerCase();x[a] = x[a + "s"] = x[t] = e;
        }function O(e) {
          return "string" == typeof e ? x[e] || x[e.toLowerCase()] : void 0;
        }function W(e) {
          var t,
              a,
              n = {};for (a in e) {
            c(e, a) && (t = O(a)) && (n[t] = e[a]);
          }return n;
        }var E = {};function A(e, t) {
          E[e] = t;
        }function F(e, t, a) {
          var n = "" + Math.abs(e),
              s = t - n.length;return (0 <= e ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n;
        }var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            C = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            N = {},
            J = {};function R(e, t, a, n) {
          var s = n;"string" == typeof n && (s = function s() {
            return this[n]();
          }), e && (J[e] = s), t && (J[t[0]] = function () {
            return F(s.apply(this, arguments), t[1], t[2]);
          }), a && (J[a] = function () {
            return this.localeData().ordinal(s.apply(this, arguments), e);
          });
        }function I(e, t) {
          return e.isValid() ? (t = G(t, e.localeData()), N[t] = N[t] || function (n) {
            var e,
                s,
                t,
                r = n.match(z);for (e = 0, s = r.length; e < s; e++) {
              J[r[e]] ? r[e] = J[r[e]] : r[e] = (t = r[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
            }return function (e) {
              var t,
                  a = "";for (t = 0; t < s; t++) {
                a += S(r[t]) ? r[t].call(e, n) : r[t];
              }return a;
            };
          }(t), N[t](e)) : e.localeData().invalidDate();
        }function G(e, t) {
          var a = 5;function n(e) {
            return t.longDateFormat(e) || e;
          }for (C.lastIndex = 0; 0 <= a && C.test(e);) {
            e = e.replace(C, n), C.lastIndex = 0, a -= 1;
          }return e;
        }var U = /\d/,
            V = /\d\d/,
            q = /\d{3}/,
            B = /\d{4}/,
            K = /[+-]?\d{6}/,
            $ = /\d\d?/,
            Z = /\d\d\d\d?/,
            Q = /\d\d\d\d\d\d?/,
            X = /\d{1,3}/,
            ee = /\d{1,4}/,
            te = /[+-]?\d{1,6}/,
            ae = /\d+/,
            ne = /[+-]?\d+/,
            se = /Z|[+-]\d\d:?\d\d/gi,
            re = /Z|[+-]\d\d(?::?\d\d)?/gi,
            ie = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            de = {};function _e(e, a, n) {
          de[e] = S(a) ? a : function (e, t) {
            return e && n ? n : a;
          };
        }function oe(e, t) {
          return c(de, e) ? de[e](t._strict, t._locale) : new RegExp(ue(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, a, n, s) {
            return t || a || n || s;
          })));
        }function ue(e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }var me = {};function le(e, a) {
          var t,
              n = a;for ("string" == typeof e && (e = [e]), u(a) && (n = function n(e, t) {
            t[a] = g(e);
          }), t = 0; t < e.length; t++) {
            me[e[t]] = n;
          }
        }function he(e, s) {
          le(e, function (e, t, a, n) {
            a._w = a._w || {}, s(e, a._w, a, n);
          });
        }var ce = 0,
            Me = 1,
            Le = 2,
            ye = 3,
            Ye = 4,
            fe = 5,
            pe = 6,
            ke = 7,
            De = 8;function Te(e) {
          return ge(e) ? 366 : 365;
        }function ge(e) {
          return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
        }R("Y", 0, 0, function () {
          var e = this.year();return e <= 9999 ? "" + e : "+" + e;
        }), R(0, ["YY", 2], 0, function () {
          return this.year() % 100;
        }), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), A("year", 1), _e("Y", ne), _e("YY", $, V), _e("YYYY", ee, B), _e("YYYYY", te, K), _e("YYYYYY", te, K), le(["YYYYY", "YYYYYY"], ce), le("YYYY", function (e, t) {
          t[ce] = 2 === e.length ? l.parseTwoDigitYear(e) : g(e);
        }), le("YY", function (e, t) {
          t[ce] = l.parseTwoDigitYear(e);
        }), le("Y", function (e, t) {
          t[ce] = parseInt(e, 10);
        }), l.parseTwoDigitYear = function (e) {
          return g(e) + (68 < g(e) ? 1900 : 2e3);
        };var ve,
            we = be("FullYear", !0);function be(t, a) {
          return function (e) {
            return null != e ? (He(this, t, e), l.updateOffset(this, a), this) : Se(this, t);
          };
        }function Se(e, t) {
          return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
        }function He(e, t, a) {
          e.isValid() && !isNaN(a) && ("FullYear" === t && ge(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](a, e.month(), je(a, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](a));
        }function je(e, t) {
          if (isNaN(e) || isNaN(t)) return NaN;var a,
              n = (t % (a = 12) + a) % a;return e += (t - n) / 12, 1 === n ? ge(e) ? 29 : 28 : 31 - n % 7 % 2;
        }ve = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
          var t;for (t = 0; t < this.length; ++t) {
            if (this[t] === e) return t;
          }return -1;
        }, R("M", ["MM", 2], "Mo", function () {
          return this.month() + 1;
        }), R("MMM", 0, 0, function (e) {
          return this.localeData().monthsShort(this, e);
        }), R("MMMM", 0, 0, function (e) {
          return this.localeData().months(this, e);
        }), P("month", "M"), A("month", 8), _e("M", $), _e("MM", $, V), _e("MMM", function (e, t) {
          return t.monthsShortRegex(e);
        }), _e("MMMM", function (e, t) {
          return t.monthsRegex(e);
        }), le(["M", "MM"], function (e, t) {
          t[Me] = g(e) - 1;
        }), le(["MMM", "MMMM"], function (e, t, a, n) {
          var s = a._locale.monthsParse(e, n, a._strict);null != s ? t[Me] = s : y(a).invalidMonth = e;
        });var xe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Oe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function We(e, t) {
          var a;if (!e.isValid()) return e;if ("string" == typeof t) if (/^\d+$/.test(t)) t = g(t);else if (!u(t = e.localeData().monthsParse(t))) return e;return a = Math.min(e.date(), je(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e;
        }function Ee(e) {
          return null != e ? (We(this, e), l.updateOffset(this, !0), this) : Se(this, "Month");
        }var Ae = ie;var Fe = ie;function ze() {
          function e(e, t) {
            return t.length - e.length;
          }var t,
              a,
              n = [],
              s = [],
              r = [];for (t = 0; t < 12; t++) {
            a = L([2e3, t]), n.push(this.monthsShort(a, "")), s.push(this.months(a, "")), r.push(this.months(a, "")), r.push(this.monthsShort(a, ""));
          }for (n.sort(e), s.sort(e), r.sort(e), t = 0; t < 12; t++) {
            n[t] = ue(n[t]), s[t] = ue(s[t]);
          }for (t = 0; t < 24; t++) {
            r[t] = ue(r[t]);
          }this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
        }function Ce(e) {
          var t = new Date(Date.UTC.apply(null, arguments));return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t;
        }function Ne(e, t, a) {
          var n = 7 + t - a;return -((7 + Ce(e, 0, n).getUTCDay() - t) % 7) + n - 1;
        }function Je(e, t, a, n, s) {
          var r,
              i,
              d = 1 + 7 * (t - 1) + (7 + a - n) % 7 + Ne(e, n, s);return d <= 0 ? i = Te(r = e - 1) + d : d > Te(e) ? (r = e + 1, i = d - Te(e)) : (r = e, i = d), { year: r, dayOfYear: i };
        }function Re(e, t, a) {
          var n,
              s,
              r = Ne(e.year(), t, a),
              i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;return i < 1 ? n = i + Ie(s = e.year() - 1, t, a) : i > Ie(e.year(), t, a) ? (n = i - Ie(e.year(), t, a), s = e.year() + 1) : (s = e.year(), n = i), { week: n, year: s };
        }function Ie(e, t, a) {
          var n = Ne(e, t, a),
              s = Ne(e + 1, t, a);return (Te(e) - n + s) / 7;
        }R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), A("week", 5), A("isoWeek", 5), _e("w", $), _e("ww", $, V), _e("W", $), _e("WW", $, V), he(["w", "ww", "W", "WW"], function (e, t, a, n) {
          t[n.substr(0, 1)] = g(e);
        });R("d", 0, "do", "day"), R("dd", 0, 0, function (e) {
          return this.localeData().weekdaysMin(this, e);
        }), R("ddd", 0, 0, function (e) {
          return this.localeData().weekdaysShort(this, e);
        }), R("dddd", 0, 0, function (e) {
          return this.localeData().weekdays(this, e);
        }), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), A("day", 11), A("weekday", 11), A("isoWeekday", 11), _e("d", $), _e("e", $), _e("E", $), _e("dd", function (e, t) {
          return t.weekdaysMinRegex(e);
        }), _e("ddd", function (e, t) {
          return t.weekdaysShortRegex(e);
        }), _e("dddd", function (e, t) {
          return t.weekdaysRegex(e);
        }), he(["dd", "ddd", "dddd"], function (e, t, a, n) {
          var s = a._locale.weekdaysParse(e, n, a._strict);null != s ? t.d = s : y(a).invalidWeekday = e;
        }), he(["d", "e", "E"], function (e, t, a, n) {
          t[n] = g(e);
        });var Ge = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ue = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var Ve = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");var qe = ie;var Be = ie;var Ke = ie;function $e() {
          function e(e, t) {
            return t.length - e.length;
          }var t,
              a,
              n,
              s,
              r,
              i = [],
              d = [],
              _ = [],
              o = [];for (t = 0; t < 7; t++) {
            a = L([2e3, 1]).day(t), n = this.weekdaysMin(a, ""), s = this.weekdaysShort(a, ""), r = this.weekdays(a, ""), i.push(n), d.push(s), _.push(r), o.push(n), o.push(s), o.push(r);
          }for (i.sort(e), d.sort(e), _.sort(e), o.sort(e), t = 0; t < 7; t++) {
            d[t] = ue(d[t]), _[t] = ue(_[t]), o[t] = ue(o[t]);
          }this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
        }function Ze() {
          return this.hours() % 12 || 12;
        }function Qe(e, t) {
          R(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
          });
        }function Xe(e, t) {
          return t._meridiemParse;
        }R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, Ze), R("k", ["kk", 2], 0, function () {
          return this.hours() || 24;
        }), R("hmm", 0, 0, function () {
          return "" + Ze.apply(this) + F(this.minutes(), 2);
        }), R("hmmss", 0, 0, function () {
          return "" + Ze.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2);
        }), R("Hmm", 0, 0, function () {
          return "" + this.hours() + F(this.minutes(), 2);
        }), R("Hmmss", 0, 0, function () {
          return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2);
        }), Qe("a", !0), Qe("A", !1), P("hour", "h"), A("hour", 13), _e("a", Xe), _e("A", Xe), _e("H", $), _e("h", $), _e("k", $), _e("HH", $, V), _e("hh", $, V), _e("kk", $, V), _e("hmm", Z), _e("hmmss", Q), _e("Hmm", Z), _e("Hmmss", Q), le(["H", "HH"], ye), le(["k", "kk"], function (e, t, a) {
          var n = g(e);t[ye] = 24 === n ? 0 : n;
        }), le(["a", "A"], function (e, t, a) {
          a._isPm = a._locale.isPM(e), a._meridiem = e;
        }), le(["h", "hh"], function (e, t, a) {
          t[ye] = g(e), y(a).bigHour = !0;
        }), le("hmm", function (e, t, a) {
          var n = e.length - 2;t[ye] = g(e.substr(0, n)), t[Ye] = g(e.substr(n)), y(a).bigHour = !0;
        }), le("hmmss", function (e, t, a) {
          var n = e.length - 4,
              s = e.length - 2;t[ye] = g(e.substr(0, n)), t[Ye] = g(e.substr(n, 2)), t[fe] = g(e.substr(s)), y(a).bigHour = !0;
        }), le("Hmm", function (e, t, a) {
          var n = e.length - 2;t[ye] = g(e.substr(0, n)), t[Ye] = g(e.substr(n));
        }), le("Hmmss", function (e, t, a) {
          var n = e.length - 4,
              s = e.length - 2;t[ye] = g(e.substr(0, n)), t[Ye] = g(e.substr(n, 2)), t[fe] = g(e.substr(s));
        });var et,
            tt = be("Hours", !0),
            at = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Pe, monthsShort: Oe, week: { dow: 0, doy: 6 }, weekdays: Ge, weekdaysMin: Ve, weekdaysShort: Ue, meridiemParse: /[ap]\.?m?\.?/i },
            nt = {},
            st = {};function rt(e) {
          return e ? e.toLowerCase().replace("_", "-") : e;
        }function it(e) {
          var t = null;if (!nt[e] && void 0 !== Ra && Ra && Ra.exports) try {
            t = et._abbr;Ia(127)("./" + e), dt(t);
          } catch (e) {}return nt[e];
        }function dt(e, t) {
          var a;return e && ((a = o(t) ? ot(e) : _t(e, t)) ? et = a : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), et._abbr;
        }function _t(e, t) {
          if (null !== t) {
            var a,
                n = at;if (t.abbr = e, null != nt[e]) b("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = nt[e]._config;else if (null != t.parentLocale) if (null != nt[t.parentLocale]) n = nt[t.parentLocale]._config;else {
              if (null == (a = it(t.parentLocale))) return st[t.parentLocale] || (st[t.parentLocale] = []), st[t.parentLocale].push({ name: e, config: t }), null;n = a._config;
            }return nt[e] = new j(H(n, t)), st[e] && st[e].forEach(function (e) {
              _t(e.name, e.config);
            }), dt(e), nt[e];
          }return delete nt[e], null;
        }function ot(e) {
          var t;if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return et;if (!d(e)) {
            if (t = it(e)) return t;e = [e];
          }return function (e) {
            for (var t, a, n, s, r = 0; r < e.length;) {
              for (t = (s = rt(e[r]).split("-")).length, a = (a = rt(e[r + 1])) ? a.split("-") : null; 0 < t;) {
                if (n = it(s.slice(0, t).join("-"))) return n;if (a && a.length >= t && i(s, a, !0) >= t - 1) break;t--;
              }r++;
            }return et;
          }(e);
        }function ut(e) {
          var t,
              a = e._a;return a && -2 === y(e).overflow && (t = a[Me] < 0 || 11 < a[Me] ? Me : a[Le] < 1 || a[Le] > je(a[ce], a[Me]) ? Le : a[ye] < 0 || 24 < a[ye] || 24 === a[ye] && (0 !== a[Ye] || 0 !== a[fe] || 0 !== a[pe]) ? ye : a[Ye] < 0 || 59 < a[Ye] ? Ye : a[fe] < 0 || 59 < a[fe] ? fe : a[pe] < 0 || 999 < a[pe] ? pe : -1, y(e)._overflowDayOfYear && (t < ce || Le < t) && (t = Le), y(e)._overflowWeeks && -1 === t && (t = ke), y(e)._overflowWeekday && -1 === t && (t = De), y(e).overflow = t), e;
        }function mt(e, t, a) {
          return null != e ? e : null != t ? t : a;
        }function lt(e) {
          var t,
              a,
              n,
              s,
              r,
              i = [];if (!e._d) {
            var d, _;for (d = e, _ = new Date(l.now()), n = d._useUTC ? [_.getUTCFullYear(), _.getUTCMonth(), _.getUTCDate()] : [_.getFullYear(), _.getMonth(), _.getDate()], e._w && null == e._a[Le] && null == e._a[Me] && function (e) {
              var t, a, n, s, r, i, d, _;if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, i = 4, a = mt(t.GG, e._a[ce], Re(bt(), 1, 4).year), n = mt(t.W, 1), ((s = mt(t.E, 1)) < 1 || 7 < s) && (_ = !0);else {
                r = e._locale._week.dow, i = e._locale._week.doy;var o = Re(bt(), r, i);a = mt(t.gg, e._a[ce], o.year), n = mt(t.w, o.week), null != t.d ? ((s = t.d) < 0 || 6 < s) && (_ = !0) : null != t.e ? (s = t.e + r, (t.e < 0 || 6 < t.e) && (_ = !0)) : s = r;
              }n < 1 || n > Ie(a, r, i) ? y(e)._overflowWeeks = !0 : null != _ ? y(e)._overflowWeekday = !0 : (d = Je(a, n, s, r, i), e._a[ce] = d.year, e._dayOfYear = d.dayOfYear);
            }(e), null != e._dayOfYear && (r = mt(e._a[ce], n[ce]), (e._dayOfYear > Te(r) || 0 === e._dayOfYear) && (y(e)._overflowDayOfYear = !0), a = Ce(r, 0, e._dayOfYear), e._a[Me] = a.getUTCMonth(), e._a[Le] = a.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) {
              e._a[t] = i[t] = n[t];
            }for (; t < 7; t++) {
              e._a[t] = i[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            }24 === e._a[ye] && 0 === e._a[Ye] && 0 === e._a[fe] && 0 === e._a[pe] && (e._nextDay = !0, e._a[ye] = 0), e._d = (e._useUTC ? Ce : function (e, t, a, n, s, r, i) {
              var d = new Date(e, t, a, n, s, r, i);return e < 100 && 0 <= e && isFinite(d.getFullYear()) && d.setFullYear(e), d;
            }).apply(null, i), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ye] = 24), e._w && void 0 !== e._w.d && e._w.d !== s && (y(e).weekdayMismatch = !0);
          }
        }var ht = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            ct = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Mt = /Z|[+-]\d\d(?::?\d\d)?/,
            Lt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
            yt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
            Yt = /^\/?Date\((\-?\d+)/i;function ft(e) {
          var t,
              a,
              n,
              s,
              r,
              i,
              d = e._i,
              _ = ht.exec(d) || ct.exec(d);if (_) {
            for (y(e).iso = !0, t = 0, a = Lt.length; t < a; t++) {
              if (Lt[t][1].exec(_[1])) {
                s = Lt[t][0], n = !1 !== Lt[t][2];break;
              }
            }if (null == s) return void (e._isValid = !1);if (_[3]) {
              for (t = 0, a = yt.length; t < a; t++) {
                if (yt[t][1].exec(_[3])) {
                  r = (_[2] || " ") + yt[t][0];break;
                }
              }if (null == r) return void (e._isValid = !1);
            }if (!n && null != r) return void (e._isValid = !1);if (_[4]) {
              if (!Mt.exec(_[4])) return void (e._isValid = !1);i = "Z";
            }e._f = s + (r || "") + (i || ""), gt(e);
          } else e._isValid = !1;
        }var pt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function kt(e, t, a, n, s, r) {
          var i = [function (e) {
            var t = parseInt(e, 10);{
              if (t <= 49) return 2e3 + t;if (t <= 999) return 1900 + t;
            }return t;
          }(e), Oe.indexOf(t), parseInt(a, 10), parseInt(n, 10), parseInt(s, 10)];return r && i.push(parseInt(r, 10)), i;
        }var Dt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };function Tt(e) {
          var t,
              a,
              n,
              s = pt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));if (s) {
            var r = kt(s[4], s[3], s[2], s[5], s[6], s[7]);if (t = s[1], a = r, n = e, t && Ue.indexOf(t) !== new Date(a[0], a[1], a[2]).getDay() && (y(n).weekdayMismatch = !0, !(n._isValid = !1))) return;e._a = r, e._tzm = function (e, t, a) {
              if (e) return Dt[e];if (t) return 0;var n = parseInt(a, 10),
                  s = n % 100;return (n - s) / 100 * 60 + s;
            }(s[8], s[9], s[10]), e._d = Ce.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), y(e).rfc2822 = !0;
          } else e._isValid = !1;
        }function gt(e) {
          if (e._f !== l.ISO_8601) {
            if (e._f !== l.RFC_2822) {
              e._a = [], y(e).empty = !0;var t,
                  a,
                  n,
                  s,
                  r,
                  i,
                  d,
                  _,
                  o = "" + e._i,
                  u = o.length,
                  m = 0;for (n = G(e._f, e._locale).match(z) || [], t = 0; t < n.length; t++) {
                s = n[t], (a = (o.match(oe(s, e)) || [])[0]) && (0 < (r = o.substr(0, o.indexOf(a))).length && y(e).unusedInput.push(r), o = o.slice(o.indexOf(a) + a.length), m += a.length), J[s] ? (a ? y(e).empty = !1 : y(e).unusedTokens.push(s), i = s, _ = e, null != (d = a) && c(me, i) && me[i](d, _._a, _, i)) : e._strict && !a && y(e).unusedTokens.push(s);
              }y(e).charsLeftOver = u - m, 0 < o.length && y(e).unusedInput.push(o), e._a[ye] <= 12 && !0 === y(e).bigHour && 0 < e._a[ye] && (y(e).bigHour = void 0), y(e).parsedDateParts = e._a.slice(0), y(e).meridiem = e._meridiem, e._a[ye] = function (e, t, a) {
                var n;if (null == a) return t;return null != e.meridiemHour ? e.meridiemHour(t, a) : (null != e.isPM && ((n = e.isPM(a)) && t < 12 && (t += 12), n || 12 !== t || (t = 0)), t);
              }(e._locale, e._a[ye], e._meridiem), lt(e), ut(e);
            } else Tt(e);
          } else ft(e);
        }function vt(e) {
          var t,
              a,
              n,
              s,
              r = e._i,
              i = e._f;return e._locale = e._locale || ot(e._l), null === r || void 0 === i && "" === r ? f({ nullInput: !0 }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), D(r) ? new k(ut(r)) : (m(r) ? e._d = r : d(i) ? function (e) {
            var t, a, n, s, r;if (0 === e._f.length) return y(e).invalidFormat = !0, e._d = new Date(NaN);for (s = 0; s < e._f.length; s++) {
              r = 0, t = p({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[s], gt(t), Y(t) && (r += y(t).charsLeftOver, r += 10 * y(t).unusedTokens.length, y(t).score = r, (null == n || r < n) && (n = r, a = t));
            }M(e, a || t);
          }(e) : i ? gt(e) : o(a = (t = e)._i) ? t._d = new Date(l.now()) : m(a) ? t._d = new Date(a.valueOf()) : "string" == typeof a ? (n = t, null === (s = Yt.exec(n._i)) ? (ft(n), !1 === n._isValid && (delete n._isValid, Tt(n), !1 === n._isValid && (delete n._isValid, l.createFromInputFallback(n)))) : n._d = new Date(+s[1])) : d(a) ? (t._a = h(a.slice(0), function (e) {
            return parseInt(e, 10);
          }), lt(t)) : _(a) ? function (e) {
            if (!e._d) {
              var t = W(e._i);e._a = h([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                return e && parseInt(e, 10);
              }), lt(e);
            }
          }(t) : u(a) ? t._d = new Date(a) : l.createFromInputFallback(t), Y(e) || (e._d = null), e));
        }function wt(e, t, a, n, s) {
          var r,
              i = {};return !0 !== a && !1 !== a || (n = a, a = void 0), (_(e) && function (e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;var t;for (t in e) {
              if (e.hasOwnProperty(t)) return !1;
            }return !0;
          }(e) || d(e) && 0 === e.length) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = s, i._l = a, i._i = e, i._f = t, i._strict = n, (r = new k(ut(vt(i))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r;
        }function bt(e, t, a, n) {
          return wt(e, t, a, n, !1);
        }l.createFromInputFallback = a("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
          e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
        }), l.ISO_8601 = function () {}, l.RFC_2822 = function () {};var St = a("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
          var e = bt.apply(null, arguments);return this.isValid() && e.isValid() ? e < this ? this : e : f();
        }),
            Ht = a("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
          var e = bt.apply(null, arguments);return this.isValid() && e.isValid() ? this < e ? this : e : f();
        });function jt(e, t) {
          var a, n;if (1 === t.length && d(t[0]) && (t = t[0]), !t.length) return bt();for (a = t[0], n = 1; n < t.length; ++n) {
            t[n].isValid() && !t[n][e](a) || (a = t[n]);
          }return a;
        }var xt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];function Pt(e) {
          var t = W(e),
              a = t.year || 0,
              n = t.quarter || 0,
              s = t.month || 0,
              r = t.week || 0,
              i = t.day || 0,
              d = t.hour || 0,
              _ = t.minute || 0,
              o = t.second || 0,
              u = t.millisecond || 0;this._isValid = function (e) {
            for (var t in e) {
              if (-1 === ve.call(xt, t) || null != e[t] && isNaN(e[t])) return !1;
            }for (var a = !1, n = 0; n < xt.length; ++n) {
              if (e[xt[n]]) {
                if (a) return !1;parseFloat(e[xt[n]]) !== g(e[xt[n]]) && (a = !0);
              }
            }return !0;
          }(t), this._milliseconds = +u + 1e3 * o + 6e4 * _ + 1e3 * d * 60 * 60, this._days = +i + 7 * r, this._months = +s + 3 * n + 12 * a, this._data = {}, this._locale = ot(), this._bubble();
        }function Ot(e) {
          return e instanceof Pt;
        }function Wt(e) {
          return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
        }function Et(e, a) {
          R(e, 0, 0, function () {
            var e = this.utcOffset(),
                t = "+";return e < 0 && (e = -e, t = "-"), t + F(~~(e / 60), 2) + a + F(~~e % 60, 2);
          });
        }Et("Z", ":"), Et("ZZ", ""), _e("Z", re), _e("ZZ", re), le(["Z", "ZZ"], function (e, t, a) {
          a._useUTC = !0, a._tzm = Ft(re, e);
        });var At = /([\+\-]|\d\d)/gi;function Ft(e, t) {
          var a = (t || "").match(e);if (null === a) return null;var n = ((a[a.length - 1] || []) + "").match(At) || ["-", 0, 0],
              s = 60 * n[1] + g(n[2]);return 0 === s ? 0 : "+" === n[0] ? s : -s;
        }function zt(e, t) {
          var a, n;return t._isUTC ? (a = t.clone(), n = (D(e) || m(e) ? e.valueOf() : bt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + n), l.updateOffset(a, !1), a) : bt(e).local();
        }function Ct(e) {
          return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
        }function Nt() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }l.updateOffset = function () {};var Jt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Rt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function It(e, t) {
          var a,
              n,
              s,
              r = e,
              i = null;return Ot(e) ? r = { ms: e._milliseconds, d: e._days, M: e._months } : u(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (i = Jt.exec(e)) ? (a = "-" === i[1] ? -1 : 1, r = { y: 0, d: g(i[Le]) * a, h: g(i[ye]) * a, m: g(i[Ye]) * a, s: g(i[fe]) * a, ms: g(Wt(1e3 * i[pe])) * a }) : (i = Rt.exec(e)) ? (a = "-" === i[1] ? -1 : (i[1], 1), r = { y: Gt(i[2], a), M: Gt(i[3], a), w: Gt(i[4], a), d: Gt(i[5], a), h: Gt(i[6], a), m: Gt(i[7], a), s: Gt(i[8], a) }) : null == r ? r = {} : "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && ("from" in r || "to" in r) && (s = function (e, t) {
            var a;if (!e.isValid() || !t.isValid()) return { milliseconds: 0, months: 0 };t = zt(t, e), e.isBefore(t) ? a = Ut(e, t) : ((a = Ut(t, e)).milliseconds = -a.milliseconds, a.months = -a.months);return a;
          }(bt(r.from), bt(r.to)), (r = {}).ms = s.milliseconds, r.M = s.months), n = new Pt(r), Ot(e) && c(e, "_locale") && (n._locale = e._locale), n;
        }function Gt(e, t) {
          var a = e && parseFloat(e.replace(",", "."));return (isNaN(a) ? 0 : a) * t;
        }function Ut(e, t) {
          var a = { milliseconds: 0, months: 0 };return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a;
        }function Vt(n, s) {
          return function (e, t) {
            var a;return null === t || isNaN(+t) || (b(s, "moment()." + s + "(period, number) is deprecated. Please use moment()." + s + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = e, e = t, t = a), qt(this, It(e = "string" == typeof e ? +e : e, t), n), this;
          };
        }function qt(e, t, a, n) {
          var s = t._milliseconds,
              r = Wt(t._days),
              i = Wt(t._months);e.isValid() && (n = null == n || n, i && We(e, Se(e, "Month") + i * a), r && He(e, "Date", Se(e, "Date") + r * a), s && e._d.setTime(e._d.valueOf() + s * a), n && l.updateOffset(e, r || i));
        }It.fn = Pt.prototype, It.invalid = function () {
          return It(NaN);
        };var Bt = Vt(1, "add"),
            Kt = Vt(-1, "subtract");function $t(e, t) {
          var a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              n = e.clone().add(a, "months");return -(a + (t - n < 0 ? (t - n) / (n - e.clone().add(a - 1, "months")) : (t - n) / (e.clone().add(a + 1, "months") - n))) || 0;
        }function Zt(e) {
          var t;return void 0 === e ? this._locale._abbr : (null != (t = ot(e)) && (this._locale = t), this);
        }l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";var Qt = a("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
          return void 0 === e ? this.localeData() : this.locale(e);
        });function Xt() {
          return this._locale;
        }function ea(e, t) {
          R(0, [e, e.length], 0, t);
        }function ta(e, t, a, n, s) {
          var r;return null == e ? Re(this, n, s).year : ((r = Ie(e, n, s)) < t && (t = r), function (e, t, a, n, s) {
            var r = Je(e, t, a, n, s),
                i = Ce(r.year, 0, r.dayOfYear);return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
          }.call(this, e, t, a, n, s));
        }R(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100;
        }), R(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100;
        }), ea("gggg", "weekYear"), ea("ggggg", "weekYear"), ea("GGGG", "isoWeekYear"), ea("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), A("weekYear", 1), A("isoWeekYear", 1), _e("G", ne), _e("g", ne), _e("GG", $, V), _e("gg", $, V), _e("GGGG", ee, B), _e("gggg", ee, B), _e("GGGGG", te, K), _e("ggggg", te, K), he(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, a, n) {
          t[n.substr(0, 2)] = g(e);
        }), he(["gg", "GG"], function (e, t, a, n) {
          t[n] = l.parseTwoDigitYear(e);
        }), R("Q", 0, "Qo", "quarter"), P("quarter", "Q"), A("quarter", 7), _e("Q", U), le("Q", function (e, t) {
          t[Me] = 3 * (g(e) - 1);
        }), R("D", ["DD", 2], "Do", "date"), P("date", "D"), A("date", 9), _e("D", $), _e("DD", $, V), _e("Do", function (e, t) {
          return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
        }), le(["D", "DD"], Le), le("Do", function (e, t) {
          t[Le] = g(e.match($)[0]);
        });var aa = be("Date", !0);R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), A("dayOfYear", 4), _e("DDD", X), _e("DDDD", q), le(["DDD", "DDDD"], function (e, t, a) {
          a._dayOfYear = g(e);
        }), R("m", ["mm", 2], 0, "minute"), P("minute", "m"), A("minute", 14), _e("m", $), _e("mm", $, V), le(["m", "mm"], Ye);var na = be("Minutes", !1);R("s", ["ss", 2], 0, "second"), P("second", "s"), A("second", 15), _e("s", $), _e("ss", $, V), le(["s", "ss"], fe);var sa,
            ra = be("Seconds", !1);for (R("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }), R(0, ["SS", 2], 0, function () {
          return ~~(this.millisecond() / 10);
        }), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, function () {
          return 10 * this.millisecond();
        }), R(0, ["SSSSS", 5], 0, function () {
          return 100 * this.millisecond();
        }), R(0, ["SSSSSS", 6], 0, function () {
          return 1e3 * this.millisecond();
        }), R(0, ["SSSSSSS", 7], 0, function () {
          return 1e4 * this.millisecond();
        }), R(0, ["SSSSSSSS", 8], 0, function () {
          return 1e5 * this.millisecond();
        }), R(0, ["SSSSSSSSS", 9], 0, function () {
          return 1e6 * this.millisecond();
        }), P("millisecond", "ms"), A("millisecond", 16), _e("S", X, U), _e("SS", X, V), _e("SSS", X, q), sa = "SSSS"; sa.length <= 9; sa += "S") {
          _e(sa, ae);
        }function ia(e, t) {
          t[pe] = g(1e3 * ("0." + e));
        }for (sa = "S"; sa.length <= 9; sa += "S") {
          le(sa, ia);
        }var da = be("Milliseconds", !1);R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");var _a = k.prototype;function oa(e) {
          return e;
        }_a.add = Bt, _a.calendar = function (e, t) {
          var a = e || bt(),
              n = zt(a, this).startOf("day"),
              s = l.calendarFormat(this, n) || "sameElse",
              r = t && (S(t[s]) ? t[s].call(this, a) : t[s]);return this.format(r || this.localeData().calendar(s, this, bt(a)));
        }, _a.clone = function () {
          return new k(this);
        }, _a.diff = function (e, t, a) {
          var n, s, r;if (!this.isValid()) return NaN;if (!(n = zt(e, this)).isValid()) return NaN;switch (s = 6e4 * (n.utcOffset() - this.utcOffset()), t = O(t)) {case "year":
              r = $t(this, n) / 12;break;case "month":
              r = $t(this, n);break;case "quarter":
              r = $t(this, n) / 3;break;case "second":
              r = (this - n) / 1e3;break;case "minute":
              r = (this - n) / 6e4;break;case "hour":
              r = (this - n) / 36e5;break;case "day":
              r = (this - n - s) / 864e5;break;case "week":
              r = (this - n - s) / 6048e5;break;default:
              r = this - n;}return a ? r : T(r);
        }, _a.endOf = function (e) {
          return void 0 === (e = O(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"));
        }, _a.format = function (e) {
          e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);var t = I(this, e);return this.localeData().postformat(t);
        }, _a.from = function (e, t) {
          return this.isValid() && (D(e) && e.isValid() || bt(e).isValid()) ? It({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
        }, _a.fromNow = function (e) {
          return this.from(bt(), e);
        }, _a.to = function (e, t) {
          return this.isValid() && (D(e) && e.isValid() || bt(e).isValid()) ? It({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
        }, _a.toNow = function (e) {
          return this.to(bt(), e);
        }, _a.get = function (e) {
          return S(this[e = O(e)]) ? this[e]() : this;
        }, _a.invalidAt = function () {
          return y(this).overflow;
        }, _a.isAfter = function (e, t) {
          var a = D(e) ? e : bt(e);return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = O(o(t) ? "millisecond" : t)) ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf());
        }, _a.isBefore = function (e, t) {
          var a = D(e) ? e : bt(e);return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = O(o(t) ? "millisecond" : t)) ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf());
        }, _a.isBetween = function (e, t, a, n) {
          return ("(" === (n = n || "()")[0] ? this.isAfter(e, a) : !this.isBefore(e, a)) && (")" === n[1] ? this.isBefore(t, a) : !this.isAfter(t, a));
        }, _a.isSame = function (e, t) {
          var a,
              n = D(e) ? e : bt(e);return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = O(t || "millisecond")) ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()));
        }, _a.isSameOrAfter = function (e, t) {
          return this.isSame(e, t) || this.isAfter(e, t);
        }, _a.isSameOrBefore = function (e, t) {
          return this.isSame(e, t) || this.isBefore(e, t);
        }, _a.isValid = function () {
          return Y(this);
        }, _a.lang = Qt, _a.locale = Zt, _a.localeData = Xt, _a.max = Ht, _a.min = St, _a.parsingFlags = function () {
          return M({}, y(this));
        }, _a.set = function (e, t) {
          if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var a = function (e) {
            var t = [];for (var a in e) {
              t.push({ unit: a, priority: E[a] });
            }return t.sort(function (e, t) {
              return e.priority - t.priority;
            }), t;
          }(e = W(e)), n = 0; n < a.length; n++) {
            this[a[n].unit](e[a[n].unit]);
          } else if (S(this[e = O(e)])) return this[e](t);return this;
        }, _a.startOf = function (e) {
          switch (e = O(e)) {case "year":
              this.month(0);case "quarter":case "month":
              this.date(1);case "week":case "isoWeek":case "day":case "date":
              this.hours(0);case "hour":
              this.minutes(0);case "minute":
              this.seconds(0);case "second":
              this.milliseconds(0);}return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this;
        }, _a.subtract = Kt, _a.toArray = function () {
          var e = this;return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
        }, _a.toObject = function () {
          var e = this;return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() };
        }, _a.toDate = function () {
          return new Date(this.valueOf());
        }, _a.toISOString = function (e) {
          if (!this.isValid()) return null;var t = !0 !== e,
              a = t ? this.clone().utc() : this;return a.year() < 0 || 9999 < a.year() ? I(a, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", I(a, "Z")) : I(a, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }, _a.inspect = function () {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";var e = "moment",
              t = "";this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");var a = "[" + e + '("]',
              n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
              s = t + '[")]';return this.format(a + n + "-MM-DD[T]HH:mm:ss.SSS" + s);
        }, _a.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }, _a.toString = function () {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }, _a.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }, _a.valueOf = function () {
          return this._d.valueOf() - 6e4 * (this._offset || 0);
        }, _a.creationData = function () {
          return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
        }, _a.year = we, _a.isLeapYear = function () {
          return ge(this.year());
        }, _a.weekYear = function (e) {
          return ta.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }, _a.isoWeekYear = function (e) {
          return ta.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
        }, _a.quarter = _a.quarters = function (e) {
          return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
        }, _a.month = Ee, _a.daysInMonth = function () {
          return je(this.year(), this.month());
        }, _a.week = _a.weeks = function (e) {
          var t = this.localeData().week(this);return null == e ? t : this.add(7 * (e - t), "d");
        }, _a.isoWeek = _a.isoWeeks = function (e) {
          var t = Re(this, 1, 4).week;return null == e ? t : this.add(7 * (e - t), "d");
        }, _a.weeksInYear = function () {
          var e = this.localeData()._week;return Ie(this.year(), e.dow, e.doy);
        }, _a.isoWeeksInYear = function () {
          return Ie(this.year(), 1, 4);
        }, _a.date = aa, _a.day = _a.days = function (e) {
          if (!this.isValid()) return null != e ? this : NaN;var t,
              a,
              n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != e ? (t = e, a = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = a.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - n, "d")) : n;
        }, _a.weekday = function (e) {
          if (!this.isValid()) return null != e ? this : NaN;var t = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == e ? t : this.add(e - t, "d");
        }, _a.isoWeekday = function (e) {
          if (!this.isValid()) return null != e ? this : NaN;if (null != e) {
            var t = (a = e, n = this.localeData(), "string" == typeof a ? n.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a);return this.day(this.day() % 7 ? t : t - 7);
          }return this.day() || 7;var a, n;
        }, _a.dayOfYear = function (e) {
          var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == e ? t : this.add(e - t, "d");
        }, _a.hour = _a.hours = tt, _a.minute = _a.minutes = na, _a.second = _a.seconds = ra, _a.millisecond = _a.milliseconds = da, _a.utcOffset = function (e, t, a) {
          var n,
              s = this._offset || 0;if (!this.isValid()) return null != e ? this : NaN;if (null != e) {
            if ("string" == typeof e) {
              if (null === (e = Ft(re, e))) return this;
            } else Math.abs(e) < 16 && !a && (e *= 60);return !this._isUTC && t && (n = Ct(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), s !== e && (!t || this._changeInProgress ? qt(this, It(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
          }return this._isUTC ? s : Ct(this);
        }, _a.utc = function (e) {
          return this.utcOffset(0, e);
        }, _a.local = function (e) {
          return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ct(this), "m")), this;
        }, _a.parseZone = function () {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
            var e = Ft(se, this._i);null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
          }return this;
        }, _a.hasAlignedHourOffset = function (e) {
          return !!this.isValid() && (e = e ? bt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
        }, _a.isDST = function () {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }, _a.isLocal = function () {
          return !!this.isValid() && !this._isUTC;
        }, _a.isUtcOffset = function () {
          return !!this.isValid() && this._isUTC;
        }, _a.isUtc = Nt, _a.isUTC = Nt, _a.zoneAbbr = function () {
          return this._isUTC ? "UTC" : "";
        }, _a.zoneName = function () {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }, _a.dates = a("dates accessor is deprecated. Use date instead.", aa), _a.months = a("months accessor is deprecated. Use month instead", Ee), _a.years = a("years accessor is deprecated. Use year instead", we), _a.zone = a("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
          return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
        }), _a.isDSTShifted = a("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
          if (!o(this._isDSTShifted)) return this._isDSTShifted;var e = {};if (p(e, this), (e = vt(e))._a) {
            var t = e._isUTC ? L(e._a) : bt(e._a);this._isDSTShifted = this.isValid() && 0 < i(e._a, t.toArray());
          } else this._isDSTShifted = !1;return this._isDSTShifted;
        });var ua = j.prototype;function ma(e, t, a, n) {
          var s = ot(),
              r = L().set(n, t);return s[a](r, e);
        }function la(e, t, a) {
          if (u(e) && (t = e, e = void 0), e = e || "", null != t) return ma(e, t, a, "month");var n,
              s = [];for (n = 0; n < 12; n++) {
            s[n] = ma(e, n, a, "month");
          }return s;
        }function ha(e, t, a, n) {
          "boolean" == typeof e ? u(t) && (a = t, t = void 0) : (t = e, e = !1, u(a = t) && (a = t, t = void 0)), t = t || "";var s,
              r = ot(),
              i = e ? r._week.dow : 0;if (null != a) return ma(t, (a + i) % 7, n, "day");var d = [];for (s = 0; s < 7; s++) {
            d[s] = ma(t, (s + i) % 7, n, "day");
          }return d;
        }ua.calendar = function (e, t, a) {
          var n = this._calendar[e] || this._calendar.sameElse;return S(n) ? n.call(t, a) : n;
        }, ua.longDateFormat = function (e) {
          var t = this._longDateFormat[e],
              a = this._longDateFormat[e.toUpperCase()];return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, function (e) {
            return e.slice(1);
          }), this._longDateFormat[e]);
        }, ua.invalidDate = function () {
          return this._invalidDate;
        }, ua.ordinal = function (e) {
          return this._ordinal.replace("%d", e);
        }, ua.preparse = oa, ua.postformat = oa, ua.relativeTime = function (e, t, a, n) {
          var s = this._relativeTime[a];return S(s) ? s(e, t, a, n) : s.replace(/%d/i, e);
        }, ua.pastFuture = function (e, t) {
          var a = this._relativeTime[0 < e ? "future" : "past"];return S(a) ? a(t) : a.replace(/%s/i, t);
        }, ua.set = function (e) {
          var t, a;for (a in e) {
            S(t = e[a]) ? this[a] = t : this["_" + a] = t;
          }this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
        }, ua.months = function (e, t) {
          return e ? d(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || xe).test(t) ? "format" : "standalone"][e.month()] : d(this._months) ? this._months : this._months.standalone;
        }, ua.monthsShort = function (e, t) {
          return e ? d(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[xe.test(t) ? "format" : "standalone"][e.month()] : d(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
        }, ua.monthsParse = function (e, t, a) {
          var n, s, r;if (this._monthsParseExact) return function (e, t, a) {
            var n,
                s,
                r,
                i = e.toLocaleLowerCase();if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) {
              r = L([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
            }return a ? "MMM" === t ? -1 !== (s = ve.call(this._shortMonthsParse, i)) ? s : null : -1 !== (s = ve.call(this._longMonthsParse, i)) ? s : null : "MMM" === t ? -1 !== (s = ve.call(this._shortMonthsParse, i)) ? s : -1 !== (s = ve.call(this._longMonthsParse, i)) ? s : null : -1 !== (s = ve.call(this._longMonthsParse, i)) ? s : -1 !== (s = ve.call(this._shortMonthsParse, i)) ? s : null;
          }.call(this, e, t, a);for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
            if (s = L([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;if (!a && this._monthsParse[n].test(e)) return n;
          }
        }, ua.monthsRegex = function (e) {
          return this._monthsParseExact ? (c(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Fe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
        }, ua.monthsShortRegex = function (e) {
          return this._monthsParseExact ? (c(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Ae), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
        }, ua.week = function (e) {
          return Re(e, this._week.dow, this._week.doy).week;
        }, ua.firstDayOfYear = function () {
          return this._week.doy;
        }, ua.firstDayOfWeek = function () {
          return this._week.dow;
        }, ua.weekdays = function (e, t) {
          return e ? d(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : d(this._weekdays) ? this._weekdays : this._weekdays.standalone;
        }, ua.weekdaysMin = function (e) {
          return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
        }, ua.weekdaysShort = function (e) {
          return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
        }, ua.weekdaysParse = function (e, t, a) {
          var n, s, r;if (this._weekdaysParseExact) return function (e, t, a) {
            var n,
                s,
                r,
                i = e.toLocaleLowerCase();if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) {
              r = L([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
            }return a ? "dddd" === t ? -1 !== (s = ve.call(this._weekdaysParse, i)) ? s : null : "ddd" === t ? -1 !== (s = ve.call(this._shortWeekdaysParse, i)) ? s : null : -1 !== (s = ve.call(this._minWeekdaysParse, i)) ? s : null : "dddd" === t ? -1 !== (s = ve.call(this._weekdaysParse, i)) ? s : -1 !== (s = ve.call(this._shortWeekdaysParse, i)) ? s : -1 !== (s = ve.call(this._minWeekdaysParse, i)) ? s : null : "ddd" === t ? -1 !== (s = ve.call(this._shortWeekdaysParse, i)) ? s : -1 !== (s = ve.call(this._weekdaysParse, i)) ? s : -1 !== (s = ve.call(this._minWeekdaysParse, i)) ? s : null : -1 !== (s = ve.call(this._minWeekdaysParse, i)) ? s : -1 !== (s = ve.call(this._weekdaysParse, i)) ? s : -1 !== (s = ve.call(this._shortWeekdaysParse, i)) ? s : null;
          }.call(this, e, t, a);for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
            if (s = L([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;if (!a && this._weekdaysParse[n].test(e)) return n;
          }
        }, ua.weekdaysRegex = function (e) {
          return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = qe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
        }, ua.weekdaysShortRegex = function (e) {
          return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Be), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
        }, ua.weekdaysMinRegex = function (e) {
          return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ke), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
        }, ua.isPM = function (e) {
          return "p" === (e + "").toLowerCase().charAt(0);
        }, ua.meridiem = function (e, t, a) {
          return 11 < e ? a ? "pm" : "PM" : a ? "am" : "AM";
        }, dt("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(e) {
            var t = e % 10;return e + (1 === g(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
          } }), l.lang = a("moment.lang is deprecated. Use moment.locale instead.", dt), l.langData = a("moment.langData is deprecated. Use moment.localeData instead.", ot);var ca = Math.abs;function Ma(e, t, a, n) {
          var s = It(t, a);return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble();
        }function La(e) {
          return e < 0 ? Math.floor(e) : Math.ceil(e);
        }function ya(e) {
          return 4800 * e / 146097;
        }function Ya(e) {
          return 146097 * e / 4800;
        }function fa(e) {
          return function () {
            return this.as(e);
          };
        }var pa = fa("ms"),
            ka = fa("s"),
            Da = fa("m"),
            Ta = fa("h"),
            ga = fa("d"),
            va = fa("w"),
            wa = fa("M"),
            ba = fa("y");function Sa(e) {
          return function () {
            return this.isValid() ? this._data[e] : NaN;
          };
        }var Ha = Sa("milliseconds"),
            ja = Sa("seconds"),
            xa = Sa("minutes"),
            Pa = Sa("hours"),
            Oa = Sa("days"),
            Wa = Sa("months"),
            Ea = Sa("years");var Aa = Math.round,
            Fa = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };var za = Math.abs;function Ca(e) {
          return (0 < e) - (e < 0) || +e;
        }function Na() {
          if (!this.isValid()) return this.localeData().invalidDate();var e,
              t,
              a = za(this._milliseconds) / 1e3,
              n = za(this._days),
              s = za(this._months);t = T((e = T(a / 60)) / 60), a %= 60, e %= 60;var r = T(s / 12),
              i = s %= 12,
              d = n,
              _ = t,
              o = e,
              u = a ? a.toFixed(3).replace(/\.?0+$/, "") : "",
              m = this.asSeconds();if (!m) return "P0D";var l = m < 0 ? "-" : "",
              h = Ca(this._months) !== Ca(m) ? "-" : "",
              c = Ca(this._days) !== Ca(m) ? "-" : "",
              M = Ca(this._milliseconds) !== Ca(m) ? "-" : "";return l + "P" + (r ? h + r + "Y" : "") + (i ? h + i + "M" : "") + (d ? c + d + "D" : "") + (_ || o || u ? "T" : "") + (_ ? M + _ + "H" : "") + (o ? M + o + "M" : "") + (u ? M + u + "S" : "");
        }var Ja = Pt.prototype;return Ja.isValid = function () {
          return this._isValid;
        }, Ja.abs = function () {
          var e = this._data;return this._milliseconds = ca(this._milliseconds), this._days = ca(this._days), this._months = ca(this._months), e.milliseconds = ca(e.milliseconds), e.seconds = ca(e.seconds), e.minutes = ca(e.minutes), e.hours = ca(e.hours), e.months = ca(e.months), e.years = ca(e.years), this;
        }, Ja.add = function (e, t) {
          return Ma(this, e, t, 1);
        }, Ja.subtract = function (e, t) {
          return Ma(this, e, t, -1);
        }, Ja.as = function (e) {
          if (!this.isValid()) return NaN;var t,
              a,
              n = this._milliseconds;if ("month" === (e = O(e)) || "year" === e) return t = this._days + n / 864e5, a = this._months + ya(t), "month" === e ? a : a / 12;switch (t = this._days + Math.round(Ya(this._months)), e) {case "week":
              return t / 7 + n / 6048e5;case "day":
              return t + n / 864e5;case "hour":
              return 24 * t + n / 36e5;case "minute":
              return 1440 * t + n / 6e4;case "second":
              return 86400 * t + n / 1e3;case "millisecond":
              return Math.floor(864e5 * t) + n;default:
              throw new Error("Unknown unit " + e);}
        }, Ja.asMilliseconds = pa, Ja.asSeconds = ka, Ja.asMinutes = Da, Ja.asHours = Ta, Ja.asDays = ga, Ja.asWeeks = va, Ja.asMonths = wa, Ja.asYears = ba, Ja.valueOf = function () {
          return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN;
        }, Ja._bubble = function () {
          var e,
              t,
              a,
              n,
              s,
              r = this._milliseconds,
              i = this._days,
              d = this._months,
              _ = this._data;return 0 <= r && 0 <= i && 0 <= d || r <= 0 && i <= 0 && d <= 0 || (r += 864e5 * La(Ya(d) + i), d = i = 0), _.milliseconds = r % 1e3, e = T(r / 1e3), _.seconds = e % 60, t = T(e / 60), _.minutes = t % 60, a = T(t / 60), _.hours = a % 24, d += s = T(ya(i += T(a / 24))), i -= La(Ya(s)), n = T(d / 12), d %= 12, _.days = i, _.months = d, _.years = n, this;
        }, Ja.clone = function () {
          return It(this);
        }, Ja.get = function (e) {
          return e = O(e), this.isValid() ? this[e + "s"]() : NaN;
        }, Ja.milliseconds = Ha, Ja.seconds = ja, Ja.minutes = xa, Ja.hours = Pa, Ja.days = Oa, Ja.weeks = function () {
          return T(this.days() / 7);
        }, Ja.months = Wa, Ja.years = Ea, Ja.humanize = function (e) {
          if (!this.isValid()) return this.localeData().invalidDate();var t,
              a,
              n,
              s,
              r,
              i,
              d,
              _,
              o,
              u,
              m,
              l = this.localeData(),
              h = (a = !e, n = l, s = It(t = this).abs(), r = Aa(s.as("s")), i = Aa(s.as("m")), d = Aa(s.as("h")), _ = Aa(s.as("d")), o = Aa(s.as("M")), u = Aa(s.as("y")), (m = r <= Fa.ss && ["s", r] || r < Fa.s && ["ss", r] || i <= 1 && ["m"] || i < Fa.m && ["mm", i] || d <= 1 && ["h"] || d < Fa.h && ["hh", d] || _ <= 1 && ["d"] || _ < Fa.d && ["dd", _] || o <= 1 && ["M"] || o < Fa.M && ["MM", o] || u <= 1 && ["y"] || ["yy", u])[2] = a, m[3] = 0 < +t, m[4] = n, function (e, t, a, n, s) {
            return s.relativeTime(t || 1, !!a, e, n);
          }.apply(null, m));return e && (h = l.pastFuture(+this, h)), l.postformat(h);
        }, Ja.toISOString = Na, Ja.toString = Na, Ja.toJSON = Na, Ja.locale = Zt, Ja.localeData = Xt, Ja.toIsoString = a("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Na), Ja.lang = Qt, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), _e("x", ne), _e("X", /[+-]?\d+(\.\d{1,3})?/), le("X", function (e, t, a) {
          a._d = new Date(1e3 * parseFloat(e, 10));
        }), le("x", function (e, t, a) {
          a._d = new Date(g(e));
        }), l.version = "2.22.2", e = bt, l.fn = _a, l.min = function () {
          return jt("isBefore", [].slice.call(arguments, 0));
        }, l.max = function () {
          return jt("isAfter", [].slice.call(arguments, 0));
        }, l.now = function () {
          return Date.now ? Date.now() : +new Date();
        }, l.utc = L, l.unix = function (e) {
          return bt(1e3 * e);
        }, l.months = function (e, t) {
          return la(e, t, "months");
        }, l.isDate = m, l.locale = dt, l.invalid = f, l.duration = It, l.isMoment = D, l.weekdays = function (e, t, a) {
          return ha(e, t, a, "weekdays");
        }, l.parseZone = function () {
          return bt.apply(null, arguments).parseZone();
        }, l.localeData = ot, l.isDuration = Ot, l.monthsShort = function (e, t) {
          return la(e, t, "monthsShort");
        }, l.weekdaysMin = function (e, t, a) {
          return ha(e, t, a, "weekdaysMin");
        }, l.defineLocale = _t, l.updateLocale = function (e, t) {
          if (null != t) {
            var a,
                n,
                s = at;null != (n = it(e)) && (s = n._config), (a = new j(t = H(s, t))).parentLocale = nt[e], nt[e] = a, dt(e);
          } else null != nt[e] && (null != nt[e].parentLocale ? nt[e] = nt[e].parentLocale : null != nt[e] && delete nt[e]);return nt[e];
        }, l.locales = function () {
          return n(nt);
        }, l.weekdaysShort = function (e, t, a) {
          return ha(e, t, a, "weekdaysShort");
        }, l.normalizeUnits = O, l.relativeTimeRounding = function (e) {
          return void 0 === e ? Aa : "function" == typeof e && (Aa = e, !0);
        }, l.relativeTimeThreshold = function (e, t) {
          return void 0 !== Fa[e] && (void 0 === t ? Fa[e] : (Fa[e] = t, "s" === e && (Fa.ss = t - 1), !0));
        }, l.calendarFormat = function (e, t) {
          var a = e.diff(t, "days", !0);return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse";
        }, l.prototype = _a, l.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "YYYY-[W]WW", MONTH: "YYYY-MM" }, l;
      }, Ra.exports = e();
    }).call(t, Ia(126)(e));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function isPM(e) {
          return (/^nm$/i.test(e)
          );
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? a ? "vm" : "VM" : a ? "nm" : "NM";
        }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[Môre om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", ss: "%d sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(e) {
          return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
          a = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
          d = function d(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5;
      },
          _ = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
          n = function n(i) {
        return function (e, t, a, n) {
          var s = d(e),
              r = _[i][d(e)];return 2 === s && (r = r[t ? 0 : 1]), r.replace(/%d/i, e);
        };
      },
          s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];e.defineLocale("ar", { months: s, monthsShort: s, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(e) {
          return "م" === e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "ص" : "م";
        }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: n("s"), ss: n("s"), m: n("m"), mm: n("m"), h: n("h"), hh: n("h"), d: n("d"), dd: n("d"), M: n("M"), MM: n("M"), y: n("y"), yy: n("y") }, preparse: function preparse(e) {
          return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
            return a[e];
          }).replace(/،/g, ",");
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          }).replace(/,/g, "،");
        }, week: { dow: 6, doy: 12 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ar-dz", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ar-kw", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 12 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
          d = function d(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5;
      },
          _ = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
          a = function a(i) {
        return function (e, t, a, n) {
          var s = d(e),
              r = _[i][d(e)];return 2 === s && (r = r[t ? 0 : 1]), r.replace(/%d/i, e);
        };
      },
          n = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];e.defineLocale("ar-ly", { months: n, monthsShort: n, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(e) {
          return "م" === e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "ص" : "م";
        }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: a("s"), ss: a("s"), m: a("m"), mm: a("m"), h: a("h"), hh: a("h"), d: a("d"), dd: a("d"), M: a("M"), MM: a("M"), y: a("y"), yy: a("y") }, preparse: function preparse(e) {
          return e.replace(/،/g, ",");
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          }).replace(/,/g, "،");
        }, week: { dow: 6, doy: 12 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ar-ma", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 6, doy: 12 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
          a = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" };e.defineLocale("ar-sa", { months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(e) {
          return "م" === e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "ص" : "م";
        }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, preparse: function preparse(e) {
          return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
            return a[e];
          }).replace(/،/g, ",");
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          }).replace(/,/g, "،");
        }, week: { dow: 0, doy: 6 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ar-tn", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var a = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı" };e.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gələn həftə] dddd [saat] LT", lastDay: "[dünən] LT", lastWeek: "[keçən həftə] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "birneçə saniyə", ss: "%d saniyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gecə|səhər|gündüz|axşam/, isPM: function isPM(e) {
          return (/^(gündüz|axşam)$/.test(e)
          );
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam";
        }, dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/, ordinal: function ordinal(e) {
          if (0 === e) return e + "-ıncı";var t = e % 10;return e + (a[t] || a[e % 100 - t] || a[100 <= e ? 100 : null]);
        }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a) {
        var n, s;return "m" === a ? t ? "хвіліна" : "хвіліну" : "h" === a ? t ? "гадзіна" : "гадзіну" : e + " " + (n = +e, s = { ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд", mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? s[0] : 2 <= n % 10 && n % 10 <= 4 && (n % 100 < 10 || 20 <= n % 100) ? s[1] : s[2]);
      }e.defineLocale("be", { months: { format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"), standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_") }, monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"), weekdays: { format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"), standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/ }, weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"), weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, calendar: { sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function nextWeek() {
            return "[У] dddd [ў] LT";
          }, lastWeek: function lastWeek() {
            switch (this.day()) {case 0:case 3:case 5:case 6:
                return "[У мінулую] dddd [ў] LT";case 1:case 2:case 4:
                return "[У мінулы] dddd [ў] LT";}
          }, sameElse: "L" }, relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: t, mm: t, h: t, hh: t, d: "дзень", dd: t, M: "месяц", MM: t, y: "год", yy: t }, meridiemParse: /ночы|раніцы|дня|вечара/, isPM: function isPM(e) {
          return (/^(дня|вечара)$/.test(e)
          );
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара";
        }, dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/, ordinal: function ordinal(e, t) {
          switch (t) {case "M":case "d":case "DDD":case "w":case "W":
              return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";case "D":
              return e + "-га";default:
              return e;}
        }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("bg", { months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Днес в] LT", nextDay: "[Утре в] LT", nextWeek: "dddd [в] LT", lastDay: "[Вчера в] LT", lastWeek: function lastWeek() {
            switch (this.day()) {case 0:case 3:case 6:
                return "[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:
                return "[В изминалия] dddd [в] LT";}
          }, sameElse: "L" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", ss: "%d секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дни", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" }, dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function ordinal(e) {
          var t = e % 10,
              a = e % 100;return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : 10 < a && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти";
        }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("bm", { months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"), monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"), weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm" }, calendar: { sameDay: "[Bi lɛrɛ] LT", nextDay: "[Sini lɛrɛ] LT", nextWeek: "dddd [don lɛrɛ] LT", lastDay: "[Kunu lɛrɛ] LT", lastWeek: "dddd [tɛmɛnen lɛrɛ] LT", sameElse: "L" }, relativeTime: { future: "%s kɔnɔ", past: "a bɛ %s bɔ", s: "sanga dama dama", ss: "sekondi %d", m: "miniti kelen", mm: "miniti %d", h: "lɛrɛ kelen", hh: "lɛrɛ %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" },
          a = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" };e.defineLocale("bn", { months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), longDateFormat: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, calendar: { sameDay: "[আজ] LT", nextDay: "[আগামীকাল] LT", nextWeek: "dddd, LT", lastDay: "[গতকাল] LT", lastWeek: "[গত] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", ss: "%d সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" }, preparse: function preparse(e) {
          return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
            return a[e];
          });
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        }, meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "রাত" === t && 4 <= e || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত";
        }, week: { dow: 0, doy: 6 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" },
          a = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" };e.defineLocale("bo", { months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[དི་རིང] LT", nextDay: "[སང་ཉིན] LT", nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT", lastDay: "[ཁ་སང] LT", lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ལ་", past: "%s སྔན་ལ", s: "ལམ་སང", ss: "%d སྐར་ཆ།", m: "སྐར་མ་གཅིག", mm: "%d སྐར་མ", h: "ཆུ་ཚོད་གཅིག", hh: "%d ཆུ་ཚོད", d: "ཉིན་གཅིག", dd: "%d ཉིན་", M: "ཟླ་བ་གཅིག", MM: "%d ཟླ་བ", y: "ལོ་གཅིག", yy: "%d ལོ" }, preparse: function preparse(e) {
          return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
            return a[e];
          });
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        }, meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "མཚན་མོ" === t && 4 <= e || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ";
        }, week: { dow: 0, doy: 6 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a) {
        return e + " " + function (e, t) {
          if (2 === t) return function (e) {
            var t = { m: "v", b: "v", d: "z" };if (void 0 === t[e.charAt(0)]) return e;return t[e.charAt(0)] + e.substring(1);
          }(e);return e;
        }({ mm: "munutenn", MM: "miz", dd: "devezh" }[a], e);
      }e.defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondennoù", ss: "%d eilenn", m: "ur vunutenn", mm: t, h: "un eur", hh: "%d eur", d: "un devezh", dd: t, M: "ur miz", MM: t, y: "ur bloaz", yy: function yy(e) {
            switch (function e(t) {
              return 9 < t ? e(t % 10) : t;
            }(e)) {case 1:case 3:case 4:case 5:case 9:
                return e + " bloaz";default:
                return e + " vloaz";}
          } }, dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/, ordinal: function ordinal(e) {
          return e + (1 === e ? "añ" : "vet");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a) {
        var n = e + " ";switch (a) {case "ss":
            return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";case "m":
            return t ? "jedna minuta" : "jedne minute";case "mm":
            return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";case "h":
            return t ? "jedan sat" : "jednog sata";case "hh":
            return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";case "dd":
            return n += 1 === e ? "dan" : "dana";case "MM":
            return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";case "yy":
            return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina";}
      }e.defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
            switch (this.day()) {case 0:
                return "[u] [nedjelju] [u] LT";case 3:
                return "[u] [srijedu] [u] LT";case 6:
                return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
                return "[u] dddd [u] LT";}
          }, lastDay: "[jučer u] LT", lastWeek: function lastWeek() {
            switch (this.day()) {case 0:case 3:
                return "[prošlu] dddd [u] LT";case 6:
                return "[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:
                return "[prošli] dddd [u] LT";}
          }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: t, m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ca", { months: { standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function sameDay() {
            return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          }, nextDay: function nextDay() {
            return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          }, nextWeek: function nextWeek() {
            return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          }, lastDay: function lastDay() {
            return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          }, lastWeek: function lastWeek() {
            return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          }, sameElse: "L" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", ss: "%d segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function ordinal(e, t) {
          var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";return "w" !== t && "W" !== t || (a = "a"), e + a;
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
          a = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");function r(e) {
        return 1 < e && e < 5 && 1 != ~~(e / 10);
      }function n(e, t, a, n) {
        var s = e + " ";switch (a) {case "s":
            return t || n ? "pár sekund" : "pár sekundami";case "ss":
            return t || n ? s + (r(e) ? "sekundy" : "sekund") : s + "sekundami";case "m":
            return t ? "minuta" : n ? "minutu" : "minutou";case "mm":
            return t || n ? s + (r(e) ? "minuty" : "minut") : s + "minutami";case "h":
            return t ? "hodina" : n ? "hodinu" : "hodinou";case "hh":
            return t || n ? s + (r(e) ? "hodiny" : "hodin") : s + "hodinami";case "d":
            return t || n ? "den" : "dnem";case "dd":
            return t || n ? s + (r(e) ? "dny" : "dní") : s + "dny";case "M":
            return t || n ? "měsíc" : "měsícem";case "MM":
            return t || n ? s + (r(e) ? "měsíce" : "měsíců") : s + "měsíci";case "y":
            return t || n ? "rok" : "rokem";case "yy":
            return t || n ? s + (r(e) ? "roky" : "let") : s + "lety";}
      }e.defineLocale("cs", { months: t, monthsShort: a, monthsParse: function (e, t) {
          var a,
              n = [];for (a = 0; a < 12; a++) {
            n[a] = new RegExp("^" + e[a] + "$|^" + t[a] + "$", "i");
          }return n;
        }(t, a), shortMonthsParse: function (e) {
          var t,
              a = [];for (t = 0; t < 12; t++) {
            a[t] = new RegExp("^" + e[t] + "$", "i");
          }return a;
        }(a), longMonthsParse: function (e) {
          var t,
              a = [];for (t = 0; t < 12; t++) {
            a[t] = new RegExp("^" + e[t] + "$", "i");
          }return a;
        }(t), weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function nextWeek() {
            switch (this.day()) {case 0:
                return "[v neděli v] LT";case 1:case 2:
                return "[v] dddd [v] LT";case 3:
                return "[ve středu v] LT";case 4:
                return "[ve čtvrtek v] LT";case 5:
                return "[v pátek v] LT";case 6:
                return "[v sobotu v] LT";}
          }, lastDay: "[včera v] LT", lastWeek: function lastWeek() {
            switch (this.day()) {case 0:
                return "[minulou neděli v] LT";case 1:case 2:
                return "[minulé] dddd [v] LT";case 3:
                return "[minulou středu v] LT";case 4:case 5:
                return "[minulý] dddd [v] LT";case 6:
                return "[minulou sobotu v] LT";}
          }, sameElse: "L" }, relativeTime: { future: "za %s", past: "před %s", s: n, ss: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("cv", { months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" }, calendar: { sameDay: "[Паян] LT [сехетре]", nextDay: "[Ыран] LT [сехетре]", lastDay: "[Ӗнер] LT [сехетре]", nextWeek: "[Ҫитес] dddd LT [сехетре]", lastWeek: "[Иртнӗ] dddd LT [сехетре]", sameElse: "L" }, relativeTime: { future: function future(e) {
            return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран");
          }, past: "%s каялла", s: "пӗр-ик ҫеккунт", ss: "%d ҫеккунт", m: "пӗр минут", mm: "%d минут", h: "пӗр сехет", hh: "%d сехет", d: "пӗр кун", dd: "%d кун", M: "пӗр уйӑх", MM: "%d уйӑх", y: "пӗр ҫул", yy: "%d ҫул" }, dayOfMonthOrdinalParse: /\d{1,2}-мӗш/, ordinal: "%d-мӗш", week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", ss: "%d eiliad", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function ordinal(e) {
          var t = "";return 20 < e ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : 0 < e && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t;
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "på dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a, n) {
        var s = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] };return t ? s[a][0] : s[a][1];
      }e.defineLocale("de", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a, n) {
        var s = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] };return t ? s[a][0] : s[a][1];
      }e.defineLocale("de-at", { months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a, n) {
        var s = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] };return t ? s[a][0] : s[a][1];
      }e.defineLocale("de-ch", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
          a = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];e.defineLocale("dv", { months: t, monthsShort: t, weekdays: a, weekdaysShort: a, weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /މކ|މފ/, isPM: function isPM(e) {
          return "މފ" === e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "މކ" : "މފ";
        }, calendar: { sameDay: "[މިއަދު] LT", nextDay: "[މާދަމާ] LT", nextWeek: "dddd LT", lastDay: "[އިއްޔެ] LT", lastWeek: "[ފާއިތުވި] dddd LT", sameElse: "L" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", ss: "d% ސިކުންތު", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" }, preparse: function preparse(e) {
          return e.replace(/،/g, ",");
        }, postformat: function postformat(e) {
          return e.replace(/,/g, "،");
        }, week: { dow: 7, doy: 12 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("el", { monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"), months: function months(e, t) {
          return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl;
        }, monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"), weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), meridiem: function meridiem(e, t, a) {
          return 11 < e ? a ? "μμ" : "ΜΜ" : a ? "πμ" : "ΠΜ";
        }, isPM: function isPM(e) {
          return "μ" === (e + "").toLowerCase()[0];
        }, meridiemParse: /[ΠΜ]\.?Μ?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendarEl: { sameDay: "[Σήμερα {}] LT", nextDay: "[Αύριο {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Χθες {}] LT", lastWeek: function lastWeek() {
            switch (this.day()) {case 6:
                return "[το προηγούμενο] dddd [{}] LT";default:
                return "[την προηγούμενη] dddd [{}] LT";}
          }, sameElse: "L" }, calendar: function calendar(e, t) {
          var a,
              n = this._calendarEl[e],
              s = t && t.hours();return ((a = n) instanceof Function || "[object Function]" === Object.prototype.toString.call(a)) && (n = n.apply(t)), n.replace("{}", s % 12 == 1 ? "στη" : "στις");
        }, relativeTime: { future: "σε %s", past: "%s πριν", s: "λίγα δευτερόλεπτα", ss: "%d δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χρόνος", yy: "%d χρόνια" }, dayOfMonthOrdinalParse: /\d{1,2}η/, ordinal: "%dη", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
          var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
          var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
        } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
          var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
          var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("en-il", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
          var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
        } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
          var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function isPM(e) {
          return "p" === e.charAt(0).toLowerCase();
        }, meridiem: function meridiem(e, t, a) {
          return 11 < e ? a ? "p.t.m." : "P.T.M." : a ? "a.t.m." : "A.T.M.";
        }, calendar: { sameDay: "[Hodiaŭ je] LT", nextDay: "[Morgaŭ je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hieraŭ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", ss: "%d sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
          n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          t = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
          s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(e, t) {
          return e ? /-MMM-/.test(t) ? n[e.month()] : a[e.month()] : a;
        }, monthsRegex: s, monthsShortRegex: s, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: t, longMonthsParse: t, shortMonthsParse: t, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function sameDay() {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, nextDay: function nextDay() {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, nextWeek: function nextWeek() {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, lastDay: function lastDay() {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, lastWeek: function lastWeek() {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
          n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          t = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
          s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(e, t) {
          return e ? /-MMM-/.test(t) ? n[e.month()] : a[e.month()] : a;
        }, monthsRegex: s, monthsShortRegex: s, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: t, longMonthsParse: t, shortMonthsParse: t, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function sameDay() {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, nextDay: function nextDay() {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, nextWeek: function nextWeek() {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, lastDay: function lastDay() {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, lastWeek: function lastWeek() {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
          n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");e.defineLocale("es-us", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(e, t) {
          return e ? /-MMM-/.test(t) ? n[e.month()] : a[e.month()] : a;
        }, monthsParseExact: !0, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "MMMM [de] D [de] YYYY", LLL: "MMMM [de] D [de] YYYY h:mm A", LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A" }, calendar: { sameDay: function sameDay() {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, nextDay: function nextDay() {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, nextWeek: function nextWeek() {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, lastDay: function lastDay() {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, lastWeek: function lastWeek() {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 0, doy: 6 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a, n) {
        var s = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], ss: [e + "sekundi", e + "sekundit"], m: ["ühe minuti", "üks minut"], mm: [e + " minuti", e + " minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [e + " tunni", e + " tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [e + " kuu", e + " kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [e + " aasta", e + " aastat"] };return t ? s[a][2] ? s[a][2] : s[a][1] : n ? s[a][0] : s[a][1];
      }e.defineLocale("et", { months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[Täna,] LT", nextDay: "[Homme,] LT", nextWeek: "[Järgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pärast", past: "%s tagasi", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: "%d päeva", M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", ss: "%d segundo", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" },
          a = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" };e.defineLocale("fa", { months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /قبل از ظهر|بعد از ظهر/, isPM: function isPM(e) {
          return (/بعد از ظهر/.test(e)
          );
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "قبل از ظهر" : "بعد از ظهر";
        }, calendar: { sameDay: "[امروز ساعت] LT", nextDay: "[فردا ساعت] LT", nextWeek: "dddd [ساعت] LT", lastDay: "[دیروز ساعت] LT", lastWeek: "dddd [پیش] [ساعت] LT", sameElse: "L" }, relativeTime: { future: "در %s", past: "%s پیش", s: "چند ثانیه", ss: "ثانیه d%", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" }, preparse: function preparse(e) {
          return e.replace(/[۰-۹]/g, function (e) {
            return a[e];
          }).replace(/،/g, ",");
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          }).replace(/,/g, "،");
        }, dayOfMonthOrdinalParse: /\d{1,2}م/, ordinal: "%dم", week: { dow: 6, doy: 12 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var d = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
          _ = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", d[7], d[8], d[9]];function t(e, t, a, n) {
        var s,
            r,
            i = "";switch (a) {case "s":
            return n ? "muutaman sekunnin" : "muutama sekunti";case "ss":
            return n ? "sekunnin" : "sekuntia";case "m":
            return n ? "minuutin" : "minuutti";case "mm":
            i = n ? "minuutin" : "minuuttia";break;case "h":
            return n ? "tunnin" : "tunti";case "hh":
            i = n ? "tunnin" : "tuntia";break;case "d":
            return n ? "päivän" : "päivä";case "dd":
            i = n ? "päivän" : "päivää";break;case "M":
            return n ? "kuukauden" : "kuukausi";case "MM":
            i = n ? "kuukauden" : "kuukautta";break;case "y":
            return n ? "vuoden" : "vuosi";case "yy":
            i = n ? "vuoden" : "vuotta";}return r = n, i = ((s = e) < 10 ? r ? _[s] : d[s] : s) + " " + i;
      }e.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[tänään] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s päästä", past: "%s sitten", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("fo", { months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[Í dag kl.] LT", nextDay: "[Í morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Í gjár kl.] LT", lastWeek: "[síðstu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", ss: "%d sekundir", m: "ein minutt", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaði", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("fr", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|)/, ordinal: function ordinal(e, t) {
          switch (t) {case "D":
              return e + (1 === e ? "er" : "");default:case "M":case "Q":case "DDD":case "d":
              return e + (1 === e ? "er" : "e");case "w":case "W":
              return e + (1 === e ? "re" : "e");}
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("fr-ca", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function ordinal(e, t) {
          switch (t) {default:case "M":case "Q":case "D":case "DDD":case "d":
              return e + (1 === e ? "er" : "e");case "w":case "W":
              return e + (1 === e ? "re" : "e");}
        } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("fr-ch", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function ordinal(e, t) {
          switch (t) {default:case "M":case "Q":case "D":case "DDD":case "d":
              return e + (1 === e ? "er" : "e");case "w":case "W":
              return e + (1 === e ? "re" : "e");}
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var a = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
          n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");e.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function monthsShort(e, t) {
          return e ? /-MMM-/.test(t) ? n[e.month()] : a[e.month()] : a;
        }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[ôfrûne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", ss: "%d sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(e) {
          return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("gd", { months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"], monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"], monthsParseExact: !0, weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-màireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-dè aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", ss: "%d diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function ordinal(e) {
          return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function sameDay() {
            return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
          }, nextDay: function nextDay() {
            return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
          }, nextWeek: function nextWeek() {
            return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
          }, lastDay: function lastDay() {
            return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
          }, lastWeek: function lastWeek() {
            return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT";
          }, sameElse: "L" }, relativeTime: { future: function future(e) {
            return 0 === e.indexOf("un") ? "n" + e : "en " + e;
          }, past: "hai %s", s: "uns segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a, n) {
        var s = { s: ["thodde secondanim", "thodde second"], ss: [e + " secondanim", e + " second"], m: ["eka mintan", "ek minute"], mm: [e + " mintanim", e + " mintam"], h: ["eka horan", "ek hor"], hh: [e + " horanim", e + " horam"], d: ["eka disan", "ek dis"], dd: [e + " disanim", e + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [e + " mhoineanim", e + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [e + " vorsanim", e + " vorsam"] };return t ? s[a][0] : s[a][1];
      }e.defineLocale("gom-latn", { months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" }, calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Ieta to] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fatlo] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s", past: "%s adim", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}(er)/, ordinal: function ordinal(e, t) {
          switch (t) {case "D":
              return e + "er";default:case "M":case "Q":case "DDD":case "d":case "w":case "W":
              return e;}
        }, week: { dow: 1, doy: 4 }, meridiemParse: /rati|sokalli|donparam|sanje/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? 12 < e ? e : e + 12 : "sanje" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati";
        } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "૧", 2: "૨", 3: "૩", 4: "૪", 5: "૫", 6: "૬", 7: "૭", 8: "૮", 9: "૯", 0: "૦" },
          a = { "૧": "1", "૨": "2", "૩": "3", "૪": "4", "૫": "5", "૬": "6", "૭": "7", "૮": "8", "૯": "9", "૦": "0" };e.defineLocale("gu", { months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"), monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"), monthsParseExact: !0, weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"), weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"), weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"), longDateFormat: { LT: "A h:mm વાગ્યે", LTS: "A h:mm:ss વાગ્યે", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm વાગ્યે", LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે" }, calendar: { sameDay: "[આજ] LT", nextDay: "[કાલે] LT", nextWeek: "dddd, LT", lastDay: "[ગઇકાલે] LT", lastWeek: "[પાછલા] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s મા", past: "%s પેહલા", s: "અમુક પળો", ss: "%d સેકંડ", m: "એક મિનિટ", mm: "%d મિનિટ", h: "એક કલાક", hh: "%d કલાક", d: "એક દિવસ", dd: "%d દિવસ", M: "એક મહિનો", MM: "%d મહિનો", y: "એક વર્ષ", yy: "%d વર્ષ" }, preparse: function preparse(e) {
          return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
            return a[e];
          });
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        }, meridiemParse: /રાત|બપોર|સવાર|સાંજ/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? 10 <= e ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત";
        }, week: { dow: 0, doy: 6 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("he", { months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"), weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[היום ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[אתמול ב־]LT", lastWeek: "[ביום] dddd [האחרון בשעה] LT", sameElse: "L" }, relativeTime: { future: "בעוד %s", past: "לפני %s", s: "מספר שניות", ss: "%d שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function hh(e) {
            return 2 === e ? "שעתיים" : e + " שעות";
          }, d: "יום", dd: function dd(e) {
            return 2 === e ? "יומיים" : e + " ימים";
          }, M: "חודש", MM: function MM(e) {
            return 2 === e ? "חודשיים" : e + " חודשים";
          }, y: "שנה", yy: function yy(e) {
            return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים";
          } }, meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i, isPM: function isPM(e) {
          return (/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
          );
        }, meridiem: function meridiem(e, t, a) {
          return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? a ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? a ? 'אחה"צ' : "אחרי הצהריים" : "בערב";
        } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
          a = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };e.defineLocale("hi", { months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, calendar: { sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", ss: "%d सेकंड", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" }, preparse: function preparse(e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return a[e];
          });
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        }, meridiemParse: /रात|सुबह|दोपहर|शाम/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? 10 <= e ? e : e + 12 : "शाम" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात";
        }, week: { dow: 0, doy: 6 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a) {
        var n = e + " ";switch (a) {case "ss":
            return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";case "m":
            return t ? "jedna minuta" : "jedne minute";case "mm":
            return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";case "h":
            return t ? "jedan sat" : "jednog sata";case "hh":
            return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";case "dd":
            return n += 1 === e ? "dan" : "dana";case "MM":
            return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";case "yy":
            return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina";}
      }e.defineLocale("hr", { months: { format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") }, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
            switch (this.day()) {case 0:
                return "[u] [nedjelju] [u] LT";case 3:
                return "[u] [srijedu] [u] LT";case 6:
                return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
                return "[u] dddd [u] LT";}
          }, lastDay: "[jučer u] LT", lastWeek: function lastWeek() {
            switch (this.day()) {case 0:case 3:
                return "[prošlu] dddd [u] LT";case 6:
                return "[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:
                return "[prošli] dddd [u] LT";}
          }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: t, m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function a(e, t, a, n) {
        var s = e;switch (a) {case "s":
            return n || t ? "néhány másodperc" : "néhány másodperce";case "ss":
            return s + (n || t) ? " másodperc" : " másodperce";case "m":
            return "egy" + (n || t ? " perc" : " perce");case "mm":
            return s + (n || t ? " perc" : " perce");case "h":
            return "egy" + (n || t ? " óra" : " órája");case "hh":
            return s + (n || t ? " óra" : " órája");case "d":
            return "egy" + (n || t ? " nap" : " napja");case "dd":
            return s + (n || t ? " nap" : " napja");case "M":
            return "egy" + (n || t ? " hónap" : " hónapja");case "MM":
            return s + (n || t ? " hónap" : " hónapja");case "y":
            return "egy" + (n || t ? " év" : " éve");case "yy":
            return s + (n || t ? " év" : " éve");}return "";
      }function n(e) {
        return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]";
      }e.defineLocale("hu", { months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function isPM(e) {
          return "u" === e.charAt(1).toLowerCase();
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? !0 === a ? "de" : "DE" : !0 === a ? "du" : "DU";
        }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function nextWeek() {
            return n.call(this, !0);
          }, lastDay: "[tegnap] LT[-kor]", lastWeek: function lastWeek() {
            return n.call(this, !1);
          }, sameElse: "L" }, relativeTime: { future: "%s múlva", past: "%s", s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("hy-am", { months: { format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_") }, monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, calendar: { sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function nextWeek() {
            return "dddd [օրը ժամը] LT";
          }, lastWeek: function lastWeek() {
            return "[անցած] dddd [օրը ժամը] LT";
          }, sameElse: "L" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", ss: "%d վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" }, meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/, isPM: function isPM(e) {
          return (/^(ցերեկվա|երեկոյան)$/.test(e)
          );
        }, meridiem: function meridiem(e) {
          return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան";
        }, dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/, ordinal: function ordinal(e, t) {
          switch (t) {case "DDD":case "w":case "W":case "DDDo":
              return 1 === e ? e + "-ին" : e + "-րդ";default:
              return e;}
        }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? 11 <= e ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
        }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", ss: "%d detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function r(e) {
        return e % 100 == 11 || e % 10 != 1;
      }function t(e, t, a, n) {
        var s = e + " ";switch (a) {case "s":
            return t || n ? "nokkrar sekúndur" : "nokkrum sekúndum";case "ss":
            return r(e) ? s + (t || n ? "sekúndur" : "sekúndum") : s + "sekúnda";case "m":
            return t ? "mínúta" : "mínútu";case "mm":
            return r(e) ? s + (t || n ? "mínútur" : "mínútum") : t ? s + "mínúta" : s + "mínútu";case "hh":
            return r(e) ? s + (t || n ? "klukkustundir" : "klukkustundum") : s + "klukkustund";case "d":
            return t ? "dagur" : n ? "dag" : "degi";case "dd":
            return r(e) ? t ? s + "dagar" : s + (n ? "daga" : "dögum") : t ? s + "dagur" : s + (n ? "dag" : "degi");case "M":
            return t ? "mánuður" : n ? "mánuð" : "mánuði";case "MM":
            return r(e) ? t ? s + "mánuðir" : s + (n ? "mánuði" : "mánuðum") : t ? s + "mánuður" : s + (n ? "mánuð" : "mánuði");case "y":
            return t || n ? "ár" : "ári";case "yy":
            return r(e) ? s + (t || n ? "ár" : "árum") : s + (t || n ? "ár" : "ári");}
      }e.defineLocale("is", { months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: t, ss: t, m: t, mm: t, h: "klukkustund", hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function lastWeek() {
            switch (this.day()) {case 0:
                return "[la scorsa] dddd [alle] LT";default:
                return "[lo scorso] dddd [alle] LT";}
          }, sameElse: "L" }, relativeTime: { future: function future(e) {
            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
          }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ja", { months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日(ddd) HH:mm" }, meridiemParse: /午前|午後/i, isPM: function isPM(e) {
          return "午後" === e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "午前" : "午後";
        }, calendar: { sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: function nextWeek(e) {
            return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT";
          }, lastDay: "[昨日] LT", lastWeek: function lastWeek(e) {
            return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT";
          }, sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}日/, ordinal: function ordinal(e, t) {
          switch (t) {case "d":case "D":case "DDD":
              return e + "日";default:
              return e;}
        }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", ss: "%d秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? 11 <= e ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu";
        }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", ss: "%d detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ka", { months: { standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_") }, monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekdays: { standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"), isFormat: /(წინა|შემდეგ)/ }, weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L" }, relativeTime: { future: function future(e) {
            return (/(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
            );
          }, past: function past(e) {
            return (/(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
            );
          }, s: "რამდენიმე წამი", ss: "%d წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათი", d: "დღე", dd: "%d დღე", M: "თვე", MM: "%d თვე", y: "წელი", yy: "%d წელი" }, dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/, ordinal: function ordinal(e) {
          return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე";
        }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 0: "-ші", 1: "-ші", 2: "-ші", 3: "-ші", 4: "-ші", 5: "-ші", 6: "-шы", 7: "-ші", 8: "-ші", 9: "-шы", 10: "-шы", 20: "-шы", 30: "-шы", 40: "-шы", 50: "-ші", 60: "-шы", 70: "-ші", 80: "-ші", 90: "-шы", 100: "-ші" };e.defineLocale("kk", { months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгін сағат] LT", nextDay: "[Ертең сағат] LT", nextWeek: "dddd [сағат] LT", lastDay: "[Кеше сағат] LT", lastWeek: "[Өткен аптаның] dddd [сағат] LT", sameElse: "L" }, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", ss: "%d секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/, ordinal: function ordinal(e) {
          return e + (t[e] || t[e % 10] || t[100 <= e ? 100 : null]);
        }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "១", 2: "២", 3: "៣", 4: "៤", 5: "៥", 6: "៦", 7: "៧", 8: "៨", 9: "៩", 0: "០" },
          a = { "១": "1", "២": "2", "៣": "3", "៤": "4", "៥": "5", "៦": "6", "៧": "7", "៨": "8", "៩": "9", "០": "0" };e.defineLocale("km", { months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"), weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /ព្រឹក|ល្ងាច/, isPM: function isPM(e) {
          return "ល្ងាច" === e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "ព្រឹក" : "ល្ងាច";
        }, calendar: { sameDay: "[ថ្ងៃនេះ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L" }, relativeTime: { future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", ss: "%d វិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ" }, dayOfMonthOrdinalParse: /ទី\d{1,2}/, ordinal: "ទី%d", preparse: function preparse(e) {
          return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
            return a[e];
          });
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦" },
          a = { "೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0" };e.defineLocale("kn", { months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"), monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"), monthsParseExact: !0, weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"), weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"), weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[ಇಂದು] LT", nextDay: "[ನಾಳೆ] LT", nextWeek: "dddd, LT", lastDay: "[ನಿನ್ನೆ] LT", lastWeek: "[ಕೊನೆಯ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ನಂತರ", past: "%s ಹಿಂದೆ", s: "ಕೆಲವು ಕ್ಷಣಗಳು", ss: "%d ಸೆಕೆಂಡುಗಳು", m: "ಒಂದು ನಿಮಿಷ", mm: "%d ನಿಮಿಷ", h: "ಒಂದು ಗಂಟೆ", hh: "%d ಗಂಟೆ", d: "ಒಂದು ದಿನ", dd: "%d ದಿನ", M: "ಒಂದು ತಿಂಗಳು", MM: "%d ತಿಂಗಳು", y: "ಒಂದು ವರ್ಷ", yy: "%d ವರ್ಷ" }, preparse: function preparse(e) {
          return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
            return a[e];
          });
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        }, meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? 10 <= e ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ";
        }, dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/, ordinal: function ordinal(e) {
          return e + "ನೇ";
        }, week: { dow: 0, doy: 6 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ko", { months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, calendar: { sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L" }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", ss: "%d초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" }, dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/, ordinal: function ordinal(e, t) {
          switch (t) {case "d":case "D":case "DDD":
              return e + "일";case "M":
              return e + "월";case "w":case "W":
              return e + "주";default:
              return e;}
        }, meridiemParse: /오전|오후/, isPM: function isPM(e) {
          return "오후" === e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "오전" : "오후";
        } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 0: "-чү", 1: "-чи", 2: "-чи", 3: "-чү", 4: "-чү", 5: "-чи", 6: "-чы", 7: "-чи", 8: "-чи", 9: "-чу", 10: "-чу", 20: "-чы", 30: "-чу", 40: "-чы", 50: "-чү", 60: "-чы", 70: "-чи", 80: "-чи", 90: "-чу", 100: "-чү" };e.defineLocale("ky", { months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"), weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"), weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгүн саат] LT", nextDay: "[Эртең саат] LT", nextWeek: "dddd [саат] LT", lastDay: "[Кече саат] LT", lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT", sameElse: "L" }, relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", ss: "%d секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" }, dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/, ordinal: function ordinal(e) {
          return e + (t[e] || t[e % 10] || t[100 <= e ? 100 : null]);
        }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a, n) {
        var s = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] };return t ? s[a][0] : s[a][1];
      }function a(e) {
        if (e = parseInt(e, 10), isNaN(e)) return !1;if (e < 0) return !0;if (e < 10) return 4 <= e && e <= 7;if (e < 100) {
          var t = e % 10;return a(0 === t ? e / 10 : t);
        }if (e < 1e4) {
          for (; 10 <= e;) {
            e /= 10;
          }return a(e);
        }return a(e /= 1e3);
      }e.defineLocale("lb", { months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[Gëschter um] LT", lastWeek: function lastWeek() {
            switch (this.day()) {case 2:case 4:
                return "[Leschten] dddd [um] LT";default:
                return "[Leschte] dddd [um] LT";}
          } }, relativeTime: { future: function future(e) {
            return a(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
          }, past: function past(e) {
            return a(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
          }, s: "e puer Sekonnen", ss: "%d Sekonnen", m: t, mm: "%d Minutten", h: t, hh: "%d Stonnen", d: t, dd: "%d Deeg", M: t, MM: "%d Méint", y: t, yy: "%d Joer" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("lo", { months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/, isPM: function isPM(e) {
          return "ຕອນແລງ" === e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
        }, calendar: { sameDay: "[ມື້ນີ້ເວລາ] LT", nextDay: "[ມື້ອື່ນເວລາ] LT", nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT", lastDay: "[ມື້ວານນີ້ເວລາ] LT", lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT", sameElse: "L" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", ss: "%d ວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" }, dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/, ordinal: function ordinal(e) {
          return "ທີ່" + e;
        } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { ss: "sekundė_sekundžių_sekundes", m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus" };function r(e, t, a, n) {
        return t ? d(a)[0] : n ? d(a)[1] : d(a)[2];
      }function i(e) {
        return e % 10 == 0 || 10 < e && e < 20;
      }function d(e) {
        return t[e].split("_");
      }function a(e, t, a, n) {
        var s = e + " ";return 1 === e ? s + r(0, t, a[0], n) : t ? s + (i(e) ? d(a)[1] : d(a)[0]) : n ? s + d(a)[1] : s + (i(e) ? d(a)[1] : d(a)[2]);
      }e.defineLocale("lt", { months: { format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieš %s", s: function s(e, t, a, n) {
            return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes";
          }, ss: a, m: r, mm: a, h: r, hh: a, d: r, dd: a, M: r, MM: a, y: r, yy: a }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function ordinal(e) {
          return e + "-oji";
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var n = { ss: "sekundes_sekundēm_sekunde_sekundes".split("_"), m: "minūtes_minūtēm_minūte_minūtes".split("_"), mm: "minūtes_minūtēm_minūte_minūtes".split("_"), h: "stundas_stundām_stunda_stundas".split("_"), hh: "stundas_stundām_stunda_stundas".split("_"), d: "dienas_dienām_diena_dienas".split("_"), dd: "dienas_dienām_diena_dienas".split("_"), M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };function s(e, t, a) {
        return a ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1];
      }function t(e, t, a) {
        return e + " " + s(n[a], e, t);
      }function a(e, t, a) {
        return s(n[a], e, t);
      }e.defineLocale("lv", { months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: function s(e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm";
          }, ss: t, m: a, mm: t, h: a, hh: t, d: a, dd: t, M: a, MM: t, y: a, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var s = { words: { ss: ["sekund", "sekunda", "sekundi"], m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function correctGrammaticalCase(e, t) {
          return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2];
        }, translate: function translate(e, t, a) {
          var n = s.words[a];return 1 === a.length ? t ? n[0] : n[1] : e + " " + s.correctGrammaticalCase(e, n);
        } };e.defineLocale("me", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function nextWeek() {
            switch (this.day()) {case 0:
                return "[u] [nedjelju] [u] LT";case 3:
                return "[u] [srijedu] [u] LT";case 6:
                return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
                return "[u] dddd [u] LT";}
          }, lastDay: "[juče u] LT", lastWeek: function lastWeek() {
            return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()];
          }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", ss: s.translate, m: s.translate, mm: s.translate, h: s.translate, hh: s.translate, d: "dan", dd: s.translate, M: "mjesec", MM: s.translate, y: "godinu", yy: s.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("mi", { months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", ss: "%d hēkona", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("mk", { months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Денес во] LT", nextDay: "[Утре во] LT", nextWeek: "[Во] dddd [во] LT", lastDay: "[Вчера во] LT", lastWeek: function lastWeek() {
            switch (this.day()) {case 0:case 3:case 6:
                return "[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:
                return "[Изминатиот] dddd [во] LT";}
          }, sameElse: "L" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", ss: "%d секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" }, dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function ordinal(e) {
          var t = e % 10,
              a = e % 100;return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : 10 < a && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти";
        }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ml", { months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), monthsParseExact: !0, weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), longDateFormat: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, calendar: { sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", ss: "%d സെക്കൻഡ്", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" }, meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "രാത്രി" === t && 4 <= e || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി";
        } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a, n) {
        switch (a) {case "s":
            return t ? "хэдхэн секунд" : "хэдхэн секундын";case "ss":
            return e + (t ? " секунд" : " секундын");case "m":case "mm":
            return e + (t ? " минут" : " минутын");case "h":case "hh":
            return e + (t ? " цаг" : " цагийн");case "d":case "dd":
            return e + (t ? " өдөр" : " өдрийн");case "M":case "MM":
            return e + (t ? " сар" : " сарын");case "y":case "yy":
            return e + (t ? " жил" : " жилийн");default:
            return e;}
      }e.defineLocale("mn", { months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"), monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"), monthsParseExact: !0, weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"), weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"), weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY оны MMMMын D", LLL: "YYYY оны MMMMын D HH:mm", LLLL: "dddd, YYYY оны MMMMын D HH:mm" }, meridiemParse: /ҮӨ|ҮХ/i, isPM: function isPM(e) {
          return "ҮХ" === e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "ҮӨ" : "ҮХ";
        }, calendar: { sameDay: "[Өнөөдөр] LT", nextDay: "[Маргааш] LT", nextWeek: "[Ирэх] dddd LT", lastDay: "[Өчигдөр] LT", lastWeek: "[Өнгөрсөн] dddd LT", sameElse: "L" }, relativeTime: { future: "%s дараа", past: "%s өмнө", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2} өдөр/, ordinal: function ordinal(e, t) {
          switch (t) {case "d":case "D":case "DDD":
              return e + " өдөр";default:
              return e;}
        } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
          a = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };function n(e, t, a, n) {
        var s = "";if (t) switch (a) {case "s":
            s = "काही सेकंद";break;case "ss":
            s = "%d सेकंद";break;case "m":
            s = "एक मिनिट";break;case "mm":
            s = "%d मिनिटे";break;case "h":
            s = "एक तास";break;case "hh":
            s = "%d तास";break;case "d":
            s = "एक दिवस";break;case "dd":
            s = "%d दिवस";break;case "M":
            s = "एक महिना";break;case "MM":
            s = "%d महिने";break;case "y":
            s = "एक वर्ष";break;case "yy":
            s = "%d वर्षे";} else switch (a) {case "s":
            s = "काही सेकंदां";break;case "ss":
            s = "%d सेकंदां";break;case "m":
            s = "एका मिनिटा";break;case "mm":
            s = "%d मिनिटां";break;case "h":
            s = "एका तासा";break;case "hh":
            s = "%d तासां";break;case "d":
            s = "एका दिवसा";break;case "dd":
            s = "%d दिवसां";break;case "M":
            s = "एका महिन्या";break;case "MM":
            s = "%d महिन्यां";break;case "y":
            s = "एका वर्षा";break;case "yy":
            s = "%d वर्षां";}return s.replace(/%d/i, e);
      }e.defineLocale("mr", { months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm वाजता", LLLL: "dddd, D MMMM YYYY, A h:mm वाजता" }, calendar: { sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L" }, relativeTime: { future: "%sमध्ये", past: "%sपूर्वी", s: n, ss: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, preparse: function preparse(e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return a[e];
          });
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        }, meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? 10 <= e ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री";
        }, week: { dow: 0, doy: 6 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? 11 <= e ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
        }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? 11 <= e ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
        }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("mt", { months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"), weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"), weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"), weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Illum fil-]LT", nextDay: "[Għada fil-]LT", nextWeek: "dddd [fil-]LT", lastDay: "[Il-bieraħ fil-]LT", lastWeek: "dddd [li għadda] [fil-]LT", sameElse: "L" }, relativeTime: { future: "f’ %s", past: "%s ilu", s: "ftit sekondi", ss: "%d sekondi", m: "minuta", mm: "%d minuti", h: "siegħa", hh: "%d siegħat", d: "ġurnata", dd: "%d ġranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" },
          a = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" };e.defineLocale("my", { months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", ss: "%d စက္ကန့်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" }, preparse: function preparse(e) {
          return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
            return a[e];
          });
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", ss: "%d sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
          a = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };e.defineLocale("ne", { months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), monthsParseExact: !0, weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" }, preparse: function preparse(e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return a[e];
          });
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        }, meridiemParse: /राति|बिहान|दिउँसो|साँझ/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? 10 <= e ? e : e + 12 : "साँझ" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति";
        }, calendar: { sameDay: "[आज] LT", nextDay: "[भोलि] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sमा", past: "%s अगाडि", s: "केही क्षण", ss: "%d सेकेण्ड", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष" }, week: { dow: 0, doy: 6 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
          n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          t = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
          s = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function monthsShort(e, t) {
          return e ? /-MMM-/.test(t) ? n[e.month()] : a[e.month()] : a;
        }, monthsRegex: s, monthsShortRegex: s, monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: t, longMonthsParse: t, shortMonthsParse: t, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(e) {
          return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
          n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          t = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
          s = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function monthsShort(e, t) {
          return e ? /-MMM-/.test(t) ? n[e.month()] : a[e.month()] : a;
        }, monthsRegex: s, monthsShortRegex: s, monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: t, longMonthsParse: t, shortMonthsParse: t, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(e) {
          return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", ss: "%d sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦" },
          a = { "੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0" };e.defineLocale("pa-in", { months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), longDateFormat: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, calendar: { sameDay: "[ਅਜ] LT", nextDay: "[ਕਲ] LT", nextWeek: "[ਅਗਲਾ] dddd, LT", lastDay: "[ਕਲ] LT", lastWeek: "[ਪਿਛਲੇ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", ss: "%d ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" }, preparse: function preparse(e) {
          return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
            return a[e];
          });
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        }, meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? 10 <= e ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ";
        }, week: { dow: 0, doy: 6 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
          n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");function s(e) {
        return e % 10 < 5 && 1 < e % 10 && ~~(e / 10) % 10 != 1;
      }function t(e, t, a) {
        var n = e + " ";switch (a) {case "ss":
            return n + (s(e) ? "sekundy" : "sekund");case "m":
            return t ? "minuta" : "minutę";case "mm":
            return n + (s(e) ? "minuty" : "minut");case "h":
            return t ? "godzina" : "godzinę";case "hh":
            return n + (s(e) ? "godziny" : "godzin");case "MM":
            return n + (s(e) ? "miesiące" : "miesięcy");case "yy":
            return n + (s(e) ? "lata" : "lat");}
      }e.defineLocale("pl", { months: function months(e, t) {
          return e ? "" === t ? "(" + n[e.month()] + "|" + a[e.month()] + ")" : /D MMMM/.test(t) ? n[e.month()] : a[e.month()] : a;
        }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: function nextWeek() {
            switch (this.day()) {case 0:
                return "[W niedzielę o] LT";case 2:
                return "[We wtorek o] LT";case 3:
                return "[W środę o] LT";case 6:
                return "[W sobotę o] LT";default:
                return "[W] dddd [o] LT";}
          }, lastDay: "[Wczoraj o] LT", lastWeek: function lastWeek() {
            switch (this.day()) {case 0:
                return "[W zeszłą niedzielę o] LT";case 3:
                return "[W zeszłą środę o] LT";case 6:
                return "[W zeszłą sobotę o] LT";default:
                return "[W zeszły] dddd [o] LT";}
          }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", ss: t, m: t, mm: t, h: t, hh: t, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: t, y: "rok", yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("pt", { months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function lastWeek() {
            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
          }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("pt-br", { months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function lastWeek() {
            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
          }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº" });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a) {
        var n = " ";return (20 <= e % 100 || 100 <= e && e % 100 == 0) && (n = " de "), e + n + { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }[a];
      }e.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s în urmă", s: "câteva secunde", ss: t, m: "un minut", mm: t, h: "o oră", hh: t, d: "o zi", dd: t, M: "o lună", MM: t, y: "un an", yy: t }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a) {
        var n, s;return "m" === a ? t ? "минута" : "минуту" : e + " " + (n = +e, s = { ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд", mm: t ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? s[0] : 2 <= n % 10 && n % 10 <= 4 && (n % 100 < 10 || 20 <= n % 100) ? s[1] : s[2]);
      }var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];e.defineLocale("ru", { months: { format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_") }, monthsShort: { format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_") }, weekdays: { standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"), isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/ }, weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), monthsParse: a, longMonthsParse: a, shortMonthsParse: a, monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i, monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i, monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i, monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, calendar: { sameDay: "[Сегодня, в] LT", nextDay: "[Завтра, в] LT", lastDay: "[Вчера, в] LT", nextWeek: function nextWeek(e) {
            if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";switch (this.day()) {case 0:
                return "[В следующее] dddd, [в] LT";case 1:case 2:case 4:
                return "[В следующий] dddd, [в] LT";case 3:case 5:case 6:
                return "[В следующую] dddd, [в] LT";}
          }, lastWeek: function lastWeek(e) {
            if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";switch (this.day()) {case 0:
                return "[В прошлое] dddd, [в] LT";case 1:case 2:case 4:
                return "[В прошлый] dddd, [в] LT";case 3:case 5:case 6:
                return "[В прошлую] dddd, [в] LT";}
          }, sameElse: "L" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", ss: t, m: t, mm: t, h: "час", hh: t, d: "день", dd: t, M: "месяц", MM: t, y: "год", yy: t }, meridiemParse: /ночи|утра|дня|вечера/i, isPM: function isPM(e) {
          return (/^(дня|вечера)$/.test(e)
          );
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера";
        }, dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/, ordinal: function ordinal(e, t) {
          switch (t) {case "M":case "d":case "DDD":
              return e + "-й";case "D":
              return e + "-го";case "w":case "W":
              return e + "-я";default:
              return e;}
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
          a = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];e.defineLocale("sd", { months: t, monthsShort: t, weekdays: a, weekdaysShort: a, weekdaysMin: a, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function isPM(e) {
          return "شام" === e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "صبح" : "شام";
        }, calendar: { sameDay: "[اڄ] LT", nextDay: "[سڀاڻي] LT", nextWeek: "dddd [اڳين هفتي تي] LT", lastDay: "[ڪالهه] LT", lastWeek: "[گزريل هفتي] dddd [تي] LT", sameElse: "L" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", ss: "%d سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" }, preparse: function preparse(e) {
          return e.replace(/،/g, ",");
        }, postformat: function postformat(e) {
          return e.replace(/,/g, "،");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("se", { months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", ss: "%d sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("si", { months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"), monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"), weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, calendar: { sameDay: "[අද] LT[ට]", nextDay: "[හෙට] LT[ට]", nextWeek: "dddd LT[ට]", lastDay: "[ඊයේ] LT[ට]", lastWeek: "[පසුගිය] dddd LT[ට]", sameElse: "L" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", ss: "තත්පර %d", m: "මිනිත්තුව", mm: "මිනිත්තු %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" }, dayOfMonthOrdinalParse: /\d{1,2} වැනි/, ordinal: function ordinal(e) {
          return e + " වැනි";
        }, meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./, isPM: function isPM(e) {
          return "ප.ව." === e || "පස් වරු" === e;
        }, meridiem: function meridiem(e, t, a) {
          return 11 < e ? a ? "ප.ව." : "පස් වරු" : a ? "පෙ.ව." : "පෙර වරු";
        } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
          a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");function r(e) {
        return 1 < e && e < 5;
      }function n(e, t, a, n) {
        var s = e + " ";switch (a) {case "s":
            return t || n ? "pár sekúnd" : "pár sekundami";case "ss":
            return t || n ? s + (r(e) ? "sekundy" : "sekúnd") : s + "sekundami";case "m":
            return t ? "minúta" : n ? "minútu" : "minútou";case "mm":
            return t || n ? s + (r(e) ? "minúty" : "minút") : s + "minútami";case "h":
            return t ? "hodina" : n ? "hodinu" : "hodinou";case "hh":
            return t || n ? s + (r(e) ? "hodiny" : "hodín") : s + "hodinami";case "d":
            return t || n ? "deň" : "dňom";case "dd":
            return t || n ? s + (r(e) ? "dni" : "dní") : s + "dňami";case "M":
            return t || n ? "mesiac" : "mesiacom";case "MM":
            return t || n ? s + (r(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";case "y":
            return t || n ? "rok" : "rokom";case "yy":
            return t || n ? s + (r(e) ? "roky" : "rokov") : s + "rokmi";}
      }e.defineLocale("sk", { months: t, monthsShort: a, weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" }, calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function nextWeek() {
            switch (this.day()) {case 0:
                return "[v nedeľu o] LT";case 1:case 2:
                return "[v] dddd [o] LT";case 3:
                return "[v stredu o] LT";case 4:
                return "[vo štvrtok o] LT";case 5:
                return "[v piatok o] LT";case 6:
                return "[v sobotu o] LT";}
          }, lastDay: "[včera o] LT", lastWeek: function lastWeek() {
            switch (this.day()) {case 0:
                return "[minulú nedeľu o] LT";case 1:case 2:
                return "[minulý] dddd [o] LT";case 3:
                return "[minulú stredu o] LT";case 4:case 5:
                return "[minulý] dddd [o] LT";case 6:
                return "[minulú sobotu o] LT";}
          }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: n, ss: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a, n) {
        var s = e + " ";switch (a) {case "s":
            return t || n ? "nekaj sekund" : "nekaj sekundami";case "ss":
            return s += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || n ? "sekundi" : "sekundah" : e < 5 ? t || n ? "sekunde" : "sekundah" : "sekund";case "m":
            return t ? "ena minuta" : "eno minuto";case "mm":
            return s += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || n ? "minuti" : "minutama" : e < 5 ? t || n ? "minute" : "minutami" : t || n ? "minut" : "minutami";case "h":
            return t ? "ena ura" : "eno uro";case "hh":
            return s += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || n ? "uri" : "urama" : e < 5 ? t || n ? "ure" : "urami" : t || n ? "ur" : "urami";case "d":
            return t || n ? "en dan" : "enim dnem";case "dd":
            return s += 1 === e ? t || n ? "dan" : "dnem" : 2 === e ? t || n ? "dni" : "dnevoma" : t || n ? "dni" : "dnevi";case "M":
            return t || n ? "en mesec" : "enim mesecem";case "MM":
            return s += 1 === e ? t || n ? "mesec" : "mesecem" : 2 === e ? t || n ? "meseca" : "mesecema" : e < 5 ? t || n ? "mesece" : "meseci" : t || n ? "mesecev" : "meseci";case "y":
            return t || n ? "eno leto" : "enim letom";case "yy":
            return s += 1 === e ? t || n ? "leto" : "letom" : 2 === e ? t || n ? "leti" : "letoma" : e < 5 ? t || n ? "leta" : "leti" : t || n ? "let" : "leti";}
      }e.defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function nextWeek() {
            switch (this.day()) {case 0:
                return "[v] [nedeljo] [ob] LT";case 3:
                return "[v] [sredo] [ob] LT";case 6:
                return "[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
                return "[v] dddd [ob] LT";}
          }, lastDay: "[včeraj ob] LT", lastWeek: function lastWeek() {
            switch (this.day()) {case 0:
                return "[prejšnjo] [nedeljo] [ob] LT";case 3:
                return "[prejšnjo] [sredo] [ob] LT";case 6:
                return "[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
                return "[prejšnji] dddd [ob] LT";}
          }, sameElse: "L" }, relativeTime: { future: "čez %s", past: "pred %s", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function isPM(e) {
          return "M" === e.charAt(0);
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "PD" : "MD";
        }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", ss: "%d sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var s = { words: { ss: ["sekunda", "sekunde", "sekundi"], m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function correctGrammaticalCase(e, t) {
          return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2];
        }, translate: function translate(e, t, a) {
          var n = s.words[a];return 1 === a.length ? t ? n[0] : n[1] : e + " " + s.correctGrammaticalCase(e, n);
        } };e.defineLocale("sr", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
            switch (this.day()) {case 0:
                return "[u] [nedelju] [u] LT";case 3:
                return "[u] [sredu] [u] LT";case 6:
                return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
                return "[u] dddd [u] LT";}
          }, lastDay: "[juče u] LT", lastWeek: function lastWeek() {
            return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()];
          }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", ss: s.translate, m: s.translate, mm: s.translate, h: s.translate, hh: s.translate, d: "dan", dd: s.translate, M: "mesec", MM: s.translate, y: "godinu", yy: s.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var s = { words: { ss: ["секунда", "секунде", "секунди"], m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"] }, correctGrammaticalCase: function correctGrammaticalCase(e, t) {
          return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2];
        }, translate: function translate(e, t, a) {
          var n = s.words[a];return 1 === a.length ? t ? n[0] : n[1] : e + " " + s.correctGrammaticalCase(e, n);
        } };e.defineLocale("sr-cyrl", { months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"), monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"), monthsParseExact: !0, weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"), weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"), weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function nextWeek() {
            switch (this.day()) {case 0:
                return "[у] [недељу] [у] LT";case 3:
                return "[у] [среду] [у] LT";case 6:
                return "[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:
                return "[у] dddd [у] LT";}
          }, lastDay: "[јуче у] LT", lastWeek: function lastWeek() {
            return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()];
          }, sameElse: "L" }, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", ss: s.translate, m: s.translate, mm: s.translate, h: s.translate, hh: s.translate, d: "дан", dd: s.translate, M: "месец", MM: s.translate, y: "годину", yy: s.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", ss: "%d mzuzwana", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function meridiem(e, t, a) {
          return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku";
        }, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? 11 <= e ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0;
        }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "[På] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}(e|a)/, ordinal: function ordinal(e) {
          var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", ss: "sekunde %d", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦" },
          a = { "௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0" };e.defineLocale("ta", { months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", ss: "%d விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" }, dayOfMonthOrdinalParse: /\d{1,2}வது/, ordinal: function ordinal(e) {
          return e + "வது";
        }, preparse: function preparse(e) {
          return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
            return a[e];
          });
        }, postformat: function postformat(e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        }, meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/, meridiem: function meridiem(e, t, a) {
          return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்";
        }, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && 10 <= e ? e : e + 12;
        }, week: { dow: 0, doy: 6 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("te", { months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), monthsParseExact: !0, weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[నేడు] LT", nextDay: "[రేపు] LT", nextWeek: "dddd, LT", lastDay: "[నిన్న] LT", lastWeek: "[గత] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", ss: "%d సెకన్లు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" }, dayOfMonthOrdinalParse: /\d{1,2}వ/, ordinal: "%dవ", meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? 10 <= e ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి";
        }, week: { dow: 0, doy: 6 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("tet", { months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", ss: "minutu %d", m: "minutu ida", mm: "minutu %d", h: "oras ida", hh: "oras %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(e) {
          var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = { 0: "-ум", 1: "-ум", 2: "-юм", 3: "-юм", 4: "-ум", 5: "-ум", 6: "-ум", 7: "-ум", 8: "-ум", 9: "-ум", 10: "-ум", 12: "-ум", 13: "-ум", 20: "-ум", 30: "-юм", 40: "-ум", 50: "-ум", 60: "-ум", 70: "-ум", 80: "-ум", 90: "-ум", 100: "-ум" };e.defineLocale("tg", { months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"), weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"), weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Имрӯз соати] LT", nextDay: "[Пагоҳ соати] LT", lastDay: "[Дирӯз соати] LT", nextWeek: "dddd[и] [ҳафтаи оянда соати] LT", lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT", sameElse: "L" }, relativeTime: { future: "баъди %s", past: "%s пеш", s: "якчанд сония", m: "як дақиқа", mm: "%d дақиқа", h: "як соат", hh: "%d соат", d: "як рӯз", dd: "%d рӯз", M: "як моҳ", MM: "%d моҳ", y: "як сол", yy: "%d сол" }, meridiemParse: /шаб|субҳ|рӯз|бегоҳ/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? 11 <= e ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб";
        }, dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/, ordinal: function ordinal(e) {
          return e + (t[e] || t[e % 10] || t[100 <= e ? 100 : null]);
        }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("th", { months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), monthsParseExact: !0, weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/, isPM: function isPM(e) {
          return "หลังเที่ยง" === e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
        }, calendar: { sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", ss: "%d วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", ss: "%d segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function ordinal(e) {
          return e;
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var r = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");function t(e, t, a, n) {
        var s = function (e) {
          var t = Math.floor(e % 1e3 / 100),
              a = Math.floor(e % 100 / 10),
              n = e % 10,
              s = "";0 < t && (s += r[t] + "vatlh");0 < a && (s += ("" !== s ? " " : "") + r[a] + "maH");0 < n && (s += ("" !== s ? " " : "") + r[n]);return "" === s ? "pagh" : s;
        }(e);switch (a) {case "ss":
            return s + " lup";case "mm":
            return s + " tup";case "hh":
            return s + " rep";case "dd":
            return s + " jaj";case "MM":
            return s + " jar";case "yy":
            return s + " DIS";}
      }e.defineLocale("tlh", { months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa’leS] LT", nextWeek: "LLL", lastDay: "[wa’Hu’] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: function future(e) {
            var t = e;return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq";
          }, past: function past(e) {
            var t = e;return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret";
          }, s: "puS lup", ss: t, m: "wa’ tup", mm: t, h: "wa’ rep", hh: t, d: "wa’ jaj", dd: t, M: "wa’ jar", MM: t, y: "wa’ DIS", yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var n = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" };e.defineLocale("tr", { months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinal: function ordinal(e, t) {
          switch (t) {case "d":case "D":case "Do":case "DD":
              return e;default:
              if (0 === e) return e + "'ıncı";var a = e % 10;return e + (n[a] || n[e % 100 - a] || n[100 <= e ? 100 : null]);}
        }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a, n) {
        var s = { s: ["viensas secunds", "'iensas secunds"], ss: [e + " secunds", e + " secunds"], m: ["'n míut", "'iens míut"], mm: [e + " míuts", e + " míuts"], h: ["'n þora", "'iensa þora"], hh: [e + " þoras", e + " þoras"], d: ["'n ziua", "'iensa ziua"], dd: [e + " ziuas", e + " ziuas"], M: ["'n mes", "'iens mes"], MM: [e + " mesen", e + " mesen"], y: ["'n ar", "'iens ar"], yy: [e + " ars", e + " ars"] };return n ? s[a][0] : t ? s[a][0] : s[a][1];
      }e.defineLocale("tzl", { months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function isPM(e) {
          return "d'o" === e.toLowerCase();
        }, meridiem: function meridiem(e, t, a) {
          return 11 < e ? a ? "d'o" : "D'O" : a ? "d'a" : "D'A";
        }, calendar: { sameDay: "[oxhi à] LT", nextDay: "[demà à] LT", nextWeek: "dddd [à] LT", lastDay: "[ieiri à] LT", lastWeek: "[sür el] dddd [lasteu à] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("tzm", { months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ⴰⵙⴷⵅ ⴴ] LT", nextDay: "[ⴰⵙⴽⴰ ⴴ] LT", nextWeek: "dddd [ⴴ] LT", lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT", lastWeek: "dddd [ⴴ] LT", sameElse: "L" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", ss: "%d ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" }, week: { dow: 6, doy: 12 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("tzm-latn", { months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", ss: "%d imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("ug-cn", { months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"), weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-يىلىM-ئاينىڭD-كۈنى", LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm", LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm" }, meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : 11 <= e ? e : e + 12;
        }, meridiem: function meridiem(e, t, a) {
          var n = 100 * e + t;return n < 600 ? "يېرىم كېچە" : n < 900 ? "سەھەر" : n < 1130 ? "چۈشتىن بۇرۇن" : n < 1230 ? "چۈش" : n < 1800 ? "چۈشتىن كېيىن" : "كەچ";
        }, calendar: { sameDay: "[بۈگۈن سائەت] LT", nextDay: "[ئەتە سائەت] LT", nextWeek: "[كېلەركى] dddd [سائەت] LT", lastDay: "[تۆنۈگۈن] LT", lastWeek: "[ئالدىنقى] dddd [سائەت] LT", sameElse: "L" }, relativeTime: { future: "%s كېيىن", past: "%s بۇرۇن", s: "نەچچە سېكونت", ss: "%d سېكونت", m: "بىر مىنۇت", mm: "%d مىنۇت", h: "بىر سائەت", hh: "%d سائەت", d: "بىر كۈن", dd: "%d كۈن", M: "بىر ئاي", MM: "%d ئاي", y: "بىر يىل", yy: "%d يىل" }, dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/, ordinal: function ordinal(e, t) {
          switch (t) {case "d":case "D":case "DDD":
              return e + "-كۈنى";case "w":case "W":
              return e + "-ھەپتە";default:
              return e;}
        }, preparse: function preparse(e) {
          return e.replace(/،/g, ",");
        }, postformat: function postformat(e) {
          return e.replace(/,/g, "،");
        }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      function t(e, t, a) {
        var n, s;return "m" === a ? t ? "хвилина" : "хвилину" : "h" === a ? t ? "година" : "годину" : e + " " + (n = +e, s = { ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд", mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: t ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? s[0] : 2 <= n % 10 && n % 10 <= 4 && (n % 100 < 10 || 20 <= n % 100) ? s[1] : s[2]);
      }function a(e) {
        return function () {
          return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
        };
      }e.defineLocale("uk", { months: { format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_") }, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekdays: function weekdays(e, t) {
          var a = { nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"), genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_") };return e ? a[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : a.nominative;
        }, weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" }, calendar: { sameDay: a("[Сьогодні "), nextDay: a("[Завтра "), lastDay: a("[Вчора "), nextWeek: a("[У] dddd ["), lastWeek: function lastWeek() {
            switch (this.day()) {case 0:case 3:case 5:case 6:
                return a("[Минулої] dddd [").call(this);case 1:case 2:case 4:
                return a("[Минулого] dddd [").call(this);}
          }, sameElse: "L" }, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", ss: t, m: t, mm: t, h: "годину", hh: t, d: "день", dd: t, M: "місяць", MM: t, y: "рік", yy: t }, meridiemParse: /ночі|ранку|дня|вечора/, isPM: function isPM(e) {
          return (/^(дня|вечора)$/.test(e)
          );
        }, meridiem: function meridiem(e, t, a) {
          return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора";
        }, dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/, ordinal: function ordinal(e, t) {
          switch (t) {case "M":case "d":case "DDD":case "w":case "W":
              return e + "-й";case "D":
              return e + "-го";default:
              return e;}
        }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
          a = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];e.defineLocale("ur", { months: t, monthsShort: t, weekdays: a, weekdaysShort: a, weekdaysMin: a, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function isPM(e) {
          return "شام" === e;
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? "صبح" : "شام";
        }, calendar: { sameDay: "[آج بوقت] LT", nextDay: "[کل بوقت] LT", nextWeek: "dddd [بوقت] LT", lastDay: "[گذشتہ روز بوقت] LT", lastWeek: "[گذشتہ] dddd [بوقت] LT", sameElse: "L" }, relativeTime: { future: "%s بعد", past: "%s قبل", s: "چند سیکنڈ", ss: "%d سیکنڈ", m: "ایک منٹ", mm: "%d منٹ", h: "ایک گھنٹہ", hh: "%d گھنٹے", d: "ایک دن", dd: "%d دن", M: "ایک ماہ", MM: "%d ماہ", y: "ایک سال", yy: "%d سال" }, preparse: function preparse(e) {
          return e.replace(/،/g, ",");
        }, postformat: function postformat(e) {
          return e.replace(/,/g, "،");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("uz", { months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Бугун соат] LT [да]", nextDay: "[Эртага] LT [да]", nextWeek: "dddd [куни соат] LT [да]", lastDay: "[Кеча соат] LT [да]", lastWeek: "[Утган] dddd [куни соат] LT [да]", sameElse: "L" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", ss: "%d фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", ss: "%d soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("vi", { months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function isPM(e) {
          return (/^ch$/i.test(e)
          );
        }, meridiem: function meridiem(e, t, a) {
          return e < 12 ? a ? "sa" : "SA" : a ? "ch" : "CH";
        }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", ss: "%d giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function ordinal(e) {
          return e;
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("x-pseudo", { months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), monthsParseExact: !0, weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~ódá~ý át] LT", nextDay: "[T~ómó~rró~w át] LT", nextWeek: "dddd [át] LT", lastDay: "[Ý~ést~érdá~ý át] LT", lastWeek: "[L~ást] dddd [át] LT", sameElse: "L" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", ss: "%d s~écóñ~ds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" }, dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(e) {
          var t = e % 10;return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
        }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("yo", { months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Ònì ni] LT", nextDay: "[Ọ̀la ni] LT", nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT", lastDay: "[Àna ni] LT", lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT", sameElse: "L" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", ss: "aayá %d", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" }, dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/, ordinal: "ọjọ́ %d", week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("zh-cn", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : 11 <= e ? e : e + 12;
        }, meridiem: function meridiem(e, t, a) {
          var n = 100 * e + t;return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上";
        }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/, ordinal: function ordinal(e, t) {
          switch (t) {case "d":case "D":case "DDD":
              return e + "日";case "M":
              return e + "月";case "w":case "W":
              return e + "周";default:
              return e;}
        }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", ss: "%d 秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, week: { dow: 1, doy: 4 } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("zh-hk", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? 11 <= e ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          var n = 100 * e + t;return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上";
        }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function ordinal(e, t) {
          switch (t) {case "d":case "D":case "DDD":
              return e + "日";case "M":
              return e + "月";case "w":case "W":
              return e + "週";default:
              return e;}
        }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", ss: "%d 秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } });
    })(a(0));
  }, function (e, t, a) {
    (function (e) {
      "use strict";
      e.defineLocale("zh-tw", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(e, t) {
          return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? 11 <= e ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0;
        }, meridiem: function meridiem(e, t, a) {
          var n = 100 * e + t;return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上";
        }, calendar: { sameDay: "[今天] LT", nextDay: "[明天] LT", nextWeek: "[下]dddd LT", lastDay: "[昨天] LT", lastWeek: "[上]dddd LT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function ordinal(e, t) {
          switch (t) {case "d":case "D":case "DDD":
              return e + "日";case "M":
              return e + "月";case "w":case "W":
              return e + "週";default:
              return e;}
        }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", ss: "%d 秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } });
    })(a(0));
  }, function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = a(125),
        n = a(0),
        L = a.n(n),
        i = a(128),
        d = a(129),
        _ = a(130),
        o = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];for (var n in a) {
          Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
      }return e;
    },
        u = function () {
      function n(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (e, t, a) {
        return t && n(e.prototype, t), a && n(e, a), e;
      };
    }();var m = Symbol("onToggleDatePicker"),
        l = Symbol("onCloseDatePicker"),
        h = Symbol("onPreviousYearDatePicker"),
        c = Symbol("onNextYearDatePicker"),
        M = Symbol("onPreviousMonthDatePicker"),
        y = Symbol("onNextMonthDatePicker"),
        Y = Symbol("onDateClickDatePicker"),
        f = Symbol("getDayNameDatePicker"),
        p = !1;try {
      var s = Object.defineProperty({}, "passive", { get: function get() {
          p = !0;
        } });window.addEventListener("testPassive", null, s), window.removeEventListener("testPassive", null, s);
    } catch (e) {}var k = function (e) {
      function s(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};!function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, s);var a = function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this));if (a.element = r.a(e) ? document.querySelector(e) : e, !a.element) throw new Error("An invalid selector or non-DOM node has been provided.");return a._clickEvents = ["click"], a.options = o({}, d.a, t), a[m] = a[m].bind(a), a[l] = a[l].bind(a), a[h] = a[h].bind(a), a[c] = a[c].bind(a), a[M] = a[M].bind(a), a[y] = a[y].bind(a), a[Y] = a[Y].bind(a), a[f] = a[f].bind(a), a._init(), a;
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(s, i["a"]), u(s, [{ key: "_init", value: function value() {
          return this._id = "datePicker" + new Date().getTime() + Math.floor(Math.random() * Math.floor(9999)), this.lang = this.options.lang, this.dateFormat = this.options.dateFormat = this.options.dateFormat || this.element.dataset.dataFormat || L.a.localeData().longDateFormat("L"), this.open = !1, this._build(), this._bindEvents(), this.emit("datepicker:ready", this._date), this;
        } }, { key: "_initDates", value: function value() {
          if (this.element.value ? "date" === this.element.getAttribute("type").toLowerCase() ? this.date = L()(this.element.value, "YYYY-MM-DD") : this.date = L()(this.element.value) : this.date = this.options.selectedDate ? L()(this.options.selectedDate) : L()(), this.minDate = this.options.minDate ? L()(this.options.minDate) : null, this.maxDate = this.options.maxDate ? L()(this.options.maxDate) : null, this.options.disabledDates) {
            Array.isArray(this.options.disabledDates) || (this.options.disabledDates = [this.options.disabledDates]);for (var e = 0; e < this.options.disabledDates.length; e++) {
              this.options.disabledDates[e] = L()(this.options.disabledDates[e]);
            }
          }
        } }, { key: "_build", value: function value() {
          var e = document.createRange().createContextualFragment(Object(_.a)(o({}, this.options, { id: this.id, date: this.date, month: L.a.months()[this.date.month()], getDayName: this[f] })));this.elementContainer = e.querySelector("#" + this.id), this.elementCalendar = this.elementContainer.querySelector(".calendar"), this.options.overlay && (this.elementOverlay = this.elementContainer.querySelector(".modal-background"), this.elementCloseButton = this.elementContainer.querySelector(".modal-close")), this.elementCalendarNav = this.elementCalendar.querySelector(".calendar-nav"), this.elementCalendarNavMonth = this.elementCalendar.querySelector(".calendar-month"), this.elementCalendarNavYear = this.elementCalendar.querySelector(".calendar-year"), this.elementCalendarNavDay = this.elementCalendar.querySelector(".calendar-day"), this.elementCalendarNavPreviousMonth = this.elementCalendarNav.querySelector(".calendar-nav-previous-month"), this.elementCalendarNavNextMonth = this.elementCalendarNav.querySelector(".calendar-nav-next-month"), this.elementCalendarNavPreviousYear = this.elementCalendarNav.querySelector(".calendar-nav-previous-year"), this.elementCalendarNavNextYear = this.elementCalendarNav.querySelector(".calendar-nav-next-year"), this.elementCalendarHeader = this.elementCalendar.querySelector(".calendar-header"), this.elementCalendarBody = this.elementCalendar.querySelector(".calendar-body"), document.body.appendChild(e);
        } }, { key: "_bindEvents", value: function value() {
          var t = this;!0 === this.options.toggleOnInputClick && this._clickEvents.forEach(function (e) {
            t.element.addEventListener(e, t[m]);
          }), this.options.overlay && (this.elementCloseButton && this._clickEvents.forEach(function (e) {
            t.elementCloseButton.addEventListener(e, t[l]);
          }), this.options.closeOnOverlayClick && this.elementOverlay && this._clickEvents.forEach(function (e) {
            t.elementOverlay.addEventListener(e, t[l]);
          })), this.elementCalendarNavPreviousYear && this._clickEvents.forEach(function (e) {
            t.elementCalendarNavPreviousYear.addEventListener(e, t[h]);
          }), this.elementCalendarNavNextYear && this._clickEvents.forEach(function (e) {
            t.elementCalendarNavNextYear.addEventListener(e, t[c]);
          }), this.elementCalendarNavPreviousMonth && this._clickEvents.forEach(function (e) {
            t.elementCalendarNavPreviousMonth.addEventListener(e, t[M]);
          }), this.elementCalendarNavNextMonth && this._clickEvents.forEach(function (e) {
            t.elementCalendarNavNextMonth.addEventListener(e, t[y]);
          });
        } }, { key: m, value: function value(e) {
          e.preventDefault(), this.open ? this.hide() : this.show();
        } }, { key: l, value: function value(e) {
          p || e.preventDefault(), this.hide();
        } }, { key: h, value: function value(e) {
          p || e.preventDefault(), this.prevYear();
        } }, { key: c, value: function value(e) {
          p || e.preventDefault(), this.nextYear();
        } }, { key: M, value: function value(e) {
          p || e.preventDefault(), this.prevMonth();
        } }, { key: y, value: function value(e) {
          p || e.preventDefault(), this.nextMonth();
        } }, { key: Y, value: function value(e) {
          p || e.preventDefault(), e.currentTarget.classList.contains("is-disabled") || (this.date = L()(e.currentTarget.dataset.date, this.dateFormat), this.emit("datepicker:date:selected", this), "date" === this.element.getAttribute("type").toLowerCase() ? this.element.value = this.date.format("YYYY-MM-DD") : this.element.value = this.date.format(this.dateFormat), this.options.closeOnSelect && this.hide());
        } }, { key: "_bindDaysEvents", value: function value() {
          var a = this;[].forEach.call(this.elementCalendarDays, function (t) {
            a._clickEvents.forEach(function (e) {
              t.addEventListener(e, a[Y]);
            });
          });
        } }, { key: f, value: function value(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];for (e += "number" != typeof this.options.weekStart && 0 <= this.options.weekStart && this.options.weekStart <= 6 ? this.options.weekStart : this.lang.weekStart; 7 <= e;) {
            e -= 7;
          }return t ? L.a.weekdaysShort()[e] : L.a.weekdays()[e];
        } }, { key: "_renderDay", value: function value(e, t, a, n, s, r, i, d, _, o) {
          return '\n      <div data-date="' + L()({ year: a, month: t, day: e }).format(this.dateFormat).toString() + '" class="calendar-date' + (r ? " is-disabled" : "") + (d ? " calendar-range" : "") + (_ ? " calendar-range-start" : "") + (o ? " calendar-range-end" : "") + '">\n        <button class="date-item' + (s ? " is-today" : "") + (n ? " is-active" : "") + '">' + e + "</button>\n      </div>\n    ";
        } }, { key: "_renderDays", value: function value() {
          var e = L()().hours(0).minutes(0).seconds(0).milliseconds(0),
              t = "",
              a = this.date.daysInMonth(),
              n = L()().year(this.date.year()).month(this.date.month()).date(1).day(),
              s = "number" != typeof this.options.weekStart && 0 <= this.options.weekStart && this.options.weekStart <= 6 ? this.options.weekStart : L()().startOf("week").day();0 < s && (n -= s) < 0 && (n += 7);for (var r = a + n, i = r; 7 < i;) {
            i -= 7;
          }r += 7 - i;for (var d = 0; d < r; d++) {
            var _ = L()().year(this.date.year()).month(this.date.month()).date(d - n + 1).hours(0).minutes(0).seconds(0).milliseconds(0),
                o = 0 == _.diff(this.date),
                u = !1,
                m = !1,
                l = 0 == _.diff(e),
                h = d < n || a + n <= d,
                c = !1;if (o || (m = u = !1), (_.month() !== this.date.month() || this.minDate && _.unix() < this.minDate.unix() || this.maxDate && _.unix() > this.maxDate.unix()) && (c = !0), this.options.disabledDates) for (var M = 0; M < this.options.disabledDates.length; M++) {
              _.unix() == this.options.disabledDates[M].unix() && (c = !0);
            }t += this._renderDay(_.date(), _.month(), _.year(), o, l, c, h, !1, u, m), this.emit("datepicker:rendered", this);
          }this.elementCalendarBody.insertAdjacentHTML("beforeend", t), this.elementCalendarDays = this.elementCalendarBody.querySelectorAll(".calendar-date"), this._bindDaysEvents();
        } }, { key: "prevMonth", value: function value() {
          this.date.subtract(1, "months"), this._refreshCalendar();
        } }, { key: "_disablePrevMonth", value: function value() {
          this.elementCalendarNavPreviousMonth.setAttribute("disabled", "disabled");
        } }, { key: "_enablePrevMonth", value: function value() {
          this.elementCalendarNavPreviousMonth.removeAttribute("disabled");
        } }, { key: "nextMonth", value: function value() {
          this.date.add(1, "months"), this._refreshCalendar();
        } }, { key: "_disableNextMonth", value: function value() {
          this.elementCalendarNavNextMonth.setAttribute("disabled", "disabled");
        } }, { key: "_enableNextMonth", value: function value() {
          this.elementCalendarNavNextMonth.removeAttribute("disabled");
        } }, { key: "prevYear", value: function value() {
          this.date.subtract(1, "y"), this._refreshCalendar();
        } }, { key: "_disablePrevYear", value: function value() {
          this.elementCalendarNavPreviousYear.setAttribute("disabled", "disabled");
        } }, { key: "_enablePrevYear", value: function value() {
          this.elementCalendarNavPreviousYear.removeAttribute("disabled");
        } }, { key: "nextYear", value: function value() {
          this.date.add(1, "y"), this._refreshCalendar();
        } }, { key: "_disableNextYear", value: function value() {
          this.elementCalendarNavNextYear.setAttribute("disabled", "disabled");
        } }, { key: "_enableNextYear", value: function value() {
          this.elementCalendarNavNextYear.removeAttribute("disabled");
        } }, { key: "isOpen", value: function value() {
          return this._open;
        } }, { key: "show", value: function value() {
          this.element.value && ("date" === this.element.getAttribute("type").toLowerCase() ? this.date = L()(this.element.value, "YYYY-MM-DD") : this.date = L()(this.element.value)), this._refreshCalendar(), this.emit("datepicker:show", this), this.elementContainer.classList.add("is-active"), this.options.overlay || this._adjustPosition(), this.open = !0;
        } }, { key: "hide", value: function value() {
          this.open = !1, this.emit("datepicker:hide", this), this.elementContainer.classList.remove("is-active");
        } }, { key: "_refreshCalendar", value: function value() {
          this.date.month < 0 && (this.date.year -= Math.ceil(Math.abs(this.date.month()) / 12), this.date.month += 12), 11 < this.date.month && (this.date.year += Math.floor(Math.abs(this.date.month()) / 12), this.date.month -= 12), this.elementCalendarNavMonth.innerHTML = L.a.months()[this.date.month()], this.elementCalendarNavYear.innerHTML = this.date.year(), this.elementCalendarNavDay.innerHTML = this.date.date(), this.elementCalendarBody.innerHTML = "";var e = 0,
              t = 0,
              a = 12,
              n = 9999;return this.minDate && (e = this.minDate.month(), t = this.minDate.year()), this.maxDate && (a = this.maxDate.month(), n = this.maxDate.year()), this.date.year() <= t ? this._disablePrevYear() : this._enablePrevYear(), this.date.year() >= n ? this._disableNextYear() : this._enableNextYear(), this.date.year() <= t && this.date.month() <= e ? this._disablePrevMonth() : this._enablePrevMonth(), this.date.year() >= n && this.date.month() >= a ? this._disableNextMonth() : this._enableNextMonth(), this._renderDays(), this;
        } }, { key: "_adjustPosition", value: function value() {
          var e = void 0,
              t = void 0,
              a = void 0;if ("function" == typeof this.element.getBoundingClientRect) e = (a = this.element.getBoundingClientRect()).left + window.pageXOffset, t = a.bottom + window.pageYOffset;else for (e = this.element.offsetLeft, t = this.element.offsetTop + this.element.offsetHeight; this.element = this.element.offsetParent;) {
            e += this.element.offsetLeft, t += this.element.offsetTop;
          }this.elementCalendar.style.position = "absolute", this.elementCalendar.style.left = e + "px", this.elementCalendar.style.top = t + "px";
        } }, { key: "destroy", value: function value() {
          this.elementCalendar.remove();
        } }, { key: "id", get: function get() {
          return this._id;
        } }, { key: "lang", get: function get() {
          return L.a.locale();
        }, set: function set() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "en";L.a.locale(e);
        } }, { key: "date", get: function get() {
          return this._date || L()();
        }, set: function set() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : L()();this._date = L()(e).hours(0).minutes(0).seconds(0).milliseconds(0);
        } }, { key: "minDate", get: function get() {
          return this._minDate;
        }, set: function set() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;this._minDate = e ? L()(e, this.dateFormat) : null;
        } }, { key: "maxDate", get: function get() {
          return this._maxDate;
        }, set: function set() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;this._maxDate = e ? L()(e, this.dateFormat) : null;
        } }, { key: "dateFormat", get: function get() {
          return this._dateFormat;
        }, set: function set(e) {
          return this._dateFormat = e, this._initDates(), this;
        } }], [{ key: "attach", value: function value() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'input[type="date"]',
              t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              a = new Array(),
              n = r.a(e) ? document.querySelectorAll(e) : Array.isArray(e) ? e : [e];return [].forEach.call(n, function (e) {
            setTimeout(function () {
              a.push(new s(e, t));
            }, 100);
          }), a;
        } }]), s;
    }();t.default = k;
  }, function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return s;
    });var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        s = function s(e) {
      return "string" == typeof e || !!e && "object" === (void 0 === e ? "undefined" : n(e)) && "[object String]" === Object.prototype.toString.call(e);
    };
  }, function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function get() {
          return e.l;
        } }), Object.defineProperty(e, "id", { enumerable: !0, get: function get() {
          return e.i;
        } }), e.webpackPolyfill = 1), e;
    };
  }, function (e, t, a) {
    var n = { "./af": 1, "./af.js": 1, "./ar": 2, "./ar-dz": 3, "./ar-dz.js": 3, "./ar-kw": 4, "./ar-kw.js": 4, "./ar-ly": 5, "./ar-ly.js": 5, "./ar-ma": 6, "./ar-ma.js": 6, "./ar-sa": 7, "./ar-sa.js": 7, "./ar-tn": 8, "./ar-tn.js": 8, "./ar.js": 2, "./az": 9, "./az.js": 9, "./be": 10, "./be.js": 10, "./bg": 11, "./bg.js": 11, "./bm": 12, "./bm.js": 12, "./bn": 13, "./bn.js": 13, "./bo": 14, "./bo.js": 14, "./br": 15, "./br.js": 15, "./bs": 16, "./bs.js": 16, "./ca": 17, "./ca.js": 17, "./cs": 18, "./cs.js": 18, "./cv": 19, "./cv.js": 19, "./cy": 20, "./cy.js": 20, "./da": 21, "./da.js": 21, "./de": 22, "./de-at": 23, "./de-at.js": 23, "./de-ch": 24, "./de-ch.js": 24, "./de.js": 22, "./dv": 25, "./dv.js": 25, "./el": 26, "./el.js": 26, "./en-au": 27, "./en-au.js": 27, "./en-ca": 28, "./en-ca.js": 28, "./en-gb": 29, "./en-gb.js": 29, "./en-ie": 30, "./en-ie.js": 30, "./en-il": 31, "./en-il.js": 31, "./en-nz": 32, "./en-nz.js": 32, "./eo": 33, "./eo.js": 33, "./es": 34, "./es-do": 35, "./es-do.js": 35, "./es-us": 36, "./es-us.js": 36, "./es.js": 34, "./et": 37, "./et.js": 37, "./eu": 38, "./eu.js": 38, "./fa": 39, "./fa.js": 39, "./fi": 40, "./fi.js": 40, "./fo": 41, "./fo.js": 41, "./fr": 42, "./fr-ca": 43, "./fr-ca.js": 43, "./fr-ch": 44, "./fr-ch.js": 44, "./fr.js": 42, "./fy": 45, "./fy.js": 45, "./gd": 46, "./gd.js": 46, "./gl": 47, "./gl.js": 47, "./gom-latn": 48, "./gom-latn.js": 48, "./gu": 49, "./gu.js": 49, "./he": 50, "./he.js": 50, "./hi": 51, "./hi.js": 51, "./hr": 52, "./hr.js": 52, "./hu": 53, "./hu.js": 53, "./hy-am": 54, "./hy-am.js": 54, "./id": 55, "./id.js": 55, "./is": 56, "./is.js": 56, "./it": 57, "./it.js": 57, "./ja": 58, "./ja.js": 58, "./jv": 59, "./jv.js": 59, "./ka": 60, "./ka.js": 60, "./kk": 61, "./kk.js": 61, "./km": 62, "./km.js": 62, "./kn": 63, "./kn.js": 63, "./ko": 64, "./ko.js": 64, "./ky": 65, "./ky.js": 65, "./lb": 66, "./lb.js": 66, "./lo": 67, "./lo.js": 67, "./lt": 68, "./lt.js": 68, "./lv": 69, "./lv.js": 69, "./me": 70, "./me.js": 70, "./mi": 71, "./mi.js": 71, "./mk": 72, "./mk.js": 72, "./ml": 73, "./ml.js": 73, "./mn": 74, "./mn.js": 74, "./mr": 75, "./mr.js": 75, "./ms": 76, "./ms-my": 77, "./ms-my.js": 77, "./ms.js": 76, "./mt": 78, "./mt.js": 78, "./my": 79, "./my.js": 79, "./nb": 80, "./nb.js": 80, "./ne": 81, "./ne.js": 81, "./nl": 82, "./nl-be": 83, "./nl-be.js": 83, "./nl.js": 82, "./nn": 84, "./nn.js": 84, "./pa-in": 85, "./pa-in.js": 85, "./pl": 86, "./pl.js": 86, "./pt": 87, "./pt-br": 88, "./pt-br.js": 88, "./pt.js": 87, "./ro": 89, "./ro.js": 89, "./ru": 90, "./ru.js": 90, "./sd": 91, "./sd.js": 91, "./se": 92, "./se.js": 92, "./si": 93, "./si.js": 93, "./sk": 94, "./sk.js": 94, "./sl": 95, "./sl.js": 95, "./sq": 96, "./sq.js": 96, "./sr": 97, "./sr-cyrl": 98, "./sr-cyrl.js": 98, "./sr.js": 97, "./ss": 99, "./ss.js": 99, "./sv": 100, "./sv.js": 100, "./sw": 101, "./sw.js": 101, "./ta": 102, "./ta.js": 102, "./te": 103, "./te.js": 103, "./tet": 104, "./tet.js": 104, "./tg": 105, "./tg.js": 105, "./th": 106, "./th.js": 106, "./tl-ph": 107, "./tl-ph.js": 107, "./tlh": 108, "./tlh.js": 108, "./tr": 109, "./tr.js": 109, "./tzl": 110, "./tzl.js": 110, "./tzm": 111, "./tzm-latn": 112, "./tzm-latn.js": 112, "./tzm.js": 111, "./ug-cn": 113, "./ug-cn.js": 113, "./uk": 114, "./uk.js": 114, "./ur": 115, "./ur.js": 115, "./uz": 116, "./uz-latn": 117, "./uz-latn.js": 117, "./uz.js": 116, "./vi": 118, "./vi.js": 118, "./x-pseudo": 119, "./x-pseudo.js": 119, "./yo": 120, "./yo.js": 120, "./zh-cn": 121, "./zh-cn.js": 121, "./zh-hk": 122, "./zh-hk.js": 122, "./zh-tw": 123, "./zh-tw.js": 123 };function s(e) {
      return a(r(e));
    }function r(e) {
      var t = n[e];if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");return t;
    }s.keys = function () {
      return Object.keys(n);
    }, s.resolve = r, (e.exports = s).id = 127;
  }, function (e, t, a) {
    "use strict";
    var n = function () {
      function n(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (e, t, a) {
        return t && n(e.prototype, t), a && n(e, a), e;
      };
    }();var s = function () {
      function t() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];!function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this._listeners = new Map(e), this._middlewares = new Map();
      }return n(t, [{ key: "listenerCount", value: function value(e) {
          return this._listeners.has(e) ? this._listeners.get(e).length : 0;
        } }, { key: "removeListeners", value: function value() {
          var t = this,
              e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
              a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];null !== e ? Array.isArray(e) ? name.forEach(function (e) {
            return t.removeListeners(e, a);
          }) : (this._listeners.delete(e), a && this.removeMiddleware(e)) : this._listeners = new Map();
        } }, { key: "middleware", value: function value(e, t) {
          var a = this;Array.isArray(e) ? name.forEach(function (e) {
            return a.middleware(e, t);
          }) : (Array.isArray(this._middlewares.get(e)) || this._middlewares.set(e, []), this._middlewares.get(e).push(t));
        } }, { key: "removeMiddleware", value: function value() {
          var t = this,
              e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;null !== e ? Array.isArray(e) ? name.forEach(function (e) {
            return t.removeMiddleware(e);
          }) : this._middlewares.delete(e) : this._middlewares = new Map();
        } }, { key: "on", value: function value(e, t) {
          var a = this,
              n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];if (Array.isArray(e)) e.forEach(function (e) {
            return a.on(e, t);
          });else {
            var s = (e = e.toString()).split(/,|, | /);1 < s.length ? s.forEach(function (e) {
              return a.on(e, t);
            }) : (Array.isArray(this._listeners.get(e)) || this._listeners.set(e, []), this._listeners.get(e).push({ once: n, callback: t }));
          }
        } }, { key: "once", value: function value(e, t) {
          this.on(e, t, !0);
        } }, { key: "emit", value: function value(a, n) {
          var s = this,
              r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];a = a.toString();var i = this._listeners.get(a),
              d = null,
              _ = 0,
              o = r;if (Array.isArray(i)) for (i.forEach(function (e, t) {
            r || (d = s._middlewares.get(a), Array.isArray(d) ? (d.forEach(function (e) {
              e(n, function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;null !== e && (n = e), _++;
              }, a);
            }), _ >= d.length && (o = !0)) : o = !0), o && (e.once && (i[t] = null), e.callback(n));
          }); -1 !== i.indexOf(null);) {
            i.splice(i.indexOf(null), 1);
          }
        } }]), t;
    }();t.a = s;
  }, function (e, t, a) {
    "use strict";
    var n = { selectedDate: new Date(), weekStart: null, minDate: null, maxDate: null, disabledDates: [], lang: "en", overlay: !1, closeOnOverlayClick: !0, closeOnSelect: !0, toggleOnInputClick: !0, icons: { month: { previous: '<svg viewBox="0 0 50 80" xml:space="preserve">\n        <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n      </svg>', next: '<svg viewBox="0 0 50 80" xml:space="preserve">\n        <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n      </svg>' }, year: { previous: '<svg viewBox="0 0 50 80" xml:space="preserve">\n        <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n      </svg>', next: '<svg viewBox="0 0 50 80" xml:space="preserve">\n        <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n      </svg>' } } };t.a = n;
  }, function (e, t, a) {
    "use strict";
    t.a = function (e) {
      return "<div id='" + e.id + "' class=\"datepicker " + (e.overlay ? "modal" : "") + '">\n    ' + (e.overlay ? '<div class="modal-background"></div>' : "") + '\n    <div class="calendar">\n      <div class="calendar-nav">\n        <div class="calendar-nav-month">\n          <button class="calendar-nav-previous-month button is-small is-text">' + e.icons.month.previous + '</button>\n          <div class="calendar-month">' + e.month + '</div>\n          <button class="calendar-nav-next-month button is-small is-text">' + e.icons.month.next + '</button>\n        </div>\n        <div class="calendar-nav-day">\n          <div class="calendar-day">' + e.date.day() + '</div>\n        </div>\n        <div class="calendar-nav-year">\n          <button class="calendar-nav-previous-year button is-small is-text">' + e.icons.year.previous + '</button>\n          <div class="calendar-year">' + e.date.year() + '</div>\n          <button class="calendar-nav-next-year button is-small is-text">' + e.icons.year.next + '</button>\n        </div>\n      </div>\n      <div class="calendar-container">\n        <div class="calendar-header">\n          <div class="calendar-date">' + e.getDayName(0, !0) + '</div>\n          <div class="calendar-date">' + e.getDayName(1, !0) + '</div>\n          <div class="calendar-date">' + e.getDayName(2, !0) + '</div>\n          <div class="calendar-date">' + e.getDayName(3, !0) + '</div>\n          <div class="calendar-date">' + e.getDayName(4, !0) + '</div>\n          <div class="calendar-date">' + e.getDayName(5, !0) + '</div>\n          <div class="calendar-date">' + e.getDayName(6, !0) + '</div>\n        </div>\n        <div class="calendar-body"></div>\n      </div>\n    </div>\n  </div>';
    };
  }]).default;
});
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var gearbeiteteMinuten = 0;
var arbeitszeit = 0;

/**
 * Scannt alle #creation-tbody-Felder nach Inhalten und gibt "true" zurück falls etwas eingegeben wurde
 *
 * @returns {boolean}
 */
var scanInputs = function scanInputs() {
  var hasValue = false;

  var els = [document.getElementById('von'), document.getElementById('bis'), document.getElementById('außer-haus')];

  [].concat(_toConsumableArray(document.querySelectorAll('#creation-tbody input'))).forEach(function (el) {
    return els.push(el);
  });

  els.forEach(function (el) {
    if (el.value !== '') {
      hasValue = true;
    }
  });

  return hasValue;
};

/**
 * Aktiviert oder deaktiviert den "Zeilen leeren"-Button sobald etwas zum leeren vorhanden ist
 *
 */
var toggleContentRemoveButton = function toggleContentRemoveButton() {
  document.getElementById('remove-contents').disabled = !scanInputs();
};

/**
 * Färbt Tagessumme abhängig von gearbeiteteMinuten und Arbeitszeit ein
 *
 */
var updateTagessumme = function updateTagessumme() {
  var tagessumme = document.getElementById('tagessumme').classList;

  gearbeiteteMinuten > arbeitszeit ? tagessumme.add('is-danger') : tagessumme.remove('is-danger');
};

/**
 * Aktualisiert den Posten 890
 *
 */
var update890Row = function update890Row() {
  var minuten890 = arbeitszeit - gearbeiteteMinuten;

  var row890 = document.getElementById('tr-890');
  var min890 = document.getElementById('minuten-890');

  if (row890 && min890) {
    min890.value = minuten890;

    if (minuten890 === 0) {
      row890.style.opacity = 0;
    } else {
      minuten890 < 0 ? min890.classList.add('is-danger') : min890.classList.remove('is-danger');
      row890.style.opacity = 1;
    }
  }
};

/**
 *  Gibt den Wert des Elements zurück; 0 falls 0 | NaN
 *
 * @param {HTMLElement} el
 */
var extractInputVal = function extractInputVal(el) {
  var val = 0;

  val = parseInt(el.value);

  if (!isNaN(val)) {
    return val;
  }
  return 0;
};

/**
 * Summiert Minuten
 *
 */
var minutesCalculator = function minutesCalculator() {
  var resultTarget = document.getElementById('tagessumme');
  var result = 0;

  [].concat(_toConsumableArray(document.querySelectorAll('[id^="minuten-"]'))).forEach(function (el) {
    if (el.id !== 'minuten-890') result += extractInputVal(el);
  });

  gearbeiteteMinuten = result;

  update890Row();
  updateTagessumme();

  resultTarget.value = result;
};

/**
 *  Fügt den eigentlichen EventListener hinzu
 *
 * @param {object} el [zu verarbeitendes Element]
 */
var minutesCalculatorEventListener = function minutesCalculatorEventListener(el) {
  el.addEventListener('input', function () {
    minutesCalculator();
    toggleContentRemoveButton();
  });
};

/**
 *  Sucht Zeilen ohne EventListener raus und übergibt das jeweilige Element
 *
 * @param {number} nextRowId [falls gesetzt, fügt nur der hinzugefügten Zeile einen neuen EventListener hinzu]
 */
var minutesCalculatorEventListenerHelper = function minutesCalculatorEventListenerHelper(nextRowId) {
  if (nextRowId) {
    minutesCalculatorEventListener(document.getElementById('minuten-' + nextRowId));
  } else {
    [].concat(_toConsumableArray(document.querySelectorAll('[id^="minuten-"]'))).forEach(function (el) {
      if (el.id !== 'minuten-890') minutesCalculatorEventListener(el);
    });
  }
};
/**
 * Aktiviert oder deaktiviert Buttons abhängig von Werten der ersten #creation-tbody-Zeile
 *
 */
var toggleSaveButtons = function toggleSaveButtons() {
  var buttons = [document.getElementById('later'), document.getElementById('now')];
  var inputs = [document.getElementById('von'), document.getElementById('bis')];

  var hasRequiredValues = false;

  inputs.forEach(function (el) {
    return hasRequiredValues = el.value.indexOf(':') !== -1;
  });

  buttons.forEach(function (button) {
    return button.disabled = !hasRequiredValues;
  });
};
/**
 * Fügt der neu hinzugefügten Reihe die üblichen EventListener hinzu
 *
 * @param {number} nextRowId
 */
var addTREventListeners = function addTREventListeners(nextRowId) {
  var elements = [].concat(_toConsumableArray(document.querySelectorAll('[id*="-' + nextRowId + '"]')));

  elements.forEach(function (el) {
    if (elements.indexOf(el) !== 5) {
      el.addEventListener('input', function () {
        toggleContentRemoveButton();
        toggleSaveButtons();
      });
    }
  });

  minutesCalculatorEventListenerHelper(nextRowId);
};

/**
 * Aktualisiert Anzeige der derzeitigen Arbeitszeit
 *
 */
var updateArbeitszeitValues = function updateArbeitszeitValues() {
  document.getElementById('arbeitszeit').value = 'von ' + arbeitszeit;
  document.getElementById('tagessumme').placeholder = arbeitszeit;
};

/**
 * Prüft, ob Frühstückspause angeklickt ist und gibt Wert in Minuten zurück
 *
 * @returns {number} Wert in Minuten
 */
var returnFrühstückspauseValue = function returnFrühstückspauseValue() {
  var checkbox = document.getElementById('frühstückspause');

  if (checkbox.checked) {
    return 15;
  }

  return 0;
};

/**
 * Prüft, ob Mittagspause angeklickt ist und gibt Wert in Minuten zurück
 *
 * @returns {number} Wert in Minuten
 */
var returnMittagspauseValue = function returnMittagspauseValue() {
  var checkbox = document.getElementById('mittagspause');

  if (checkbox.checked) {
    return 30;
  }

  return 0;
};

/**
 * Berechnet Arbeitszeit neu
 *
 */
var arbeitszeitCalculator = function arbeitszeitCalculator() {
  var vonValue = document.getElementById('von').value.split(':');
  var bisValue = document.getElementById('bis').value.split(':');

  var stundenToMinutes = (parseInt(bisValue[0]) - parseInt(vonValue[0])) * 60;
  var minutenToMinutes = parseInt(bisValue[1]) - parseInt(vonValue[1]);

  var newArbeitszeit = stundenToMinutes + minutenToMinutes - returnFrühstückspauseValue() - returnMittagspauseValue();

  if (!isNaN(newArbeitszeit)) arbeitszeit = newArbeitszeit;
};

var addAußerHausEventListener = function addAußerHausEventListener() {
  var außerHausEl = document.getElementById('außer-haus');

  if (außerHausEl) {
    außerHausEl.addEventListener('input', function () {
      var außerHausVal = extractInputVal(außerHausEl);
      if (außerHausVal > 0) {
        arbeitszeitCalculator();
        arbeitszeit -= außerHausVal;
        update890Row();
        updateArbeitszeitValues();
      }
    });
  }
};

/**

/**
 *  Fügt eine neue Zeile hinzu
 *
 */
var addTR = function addTR() {
  var tbody = document.querySelector('#creation-tbody');

  var currentTRCount = [].concat(_toConsumableArray(document.querySelectorAll('#creation-tbody tr'))).length;
  var nextRowId = currentTRCount + 1;

  var template = '\n  <tr>\n    <td data-label="Kostenstelle" title="Kostenstelle">\n      <div class="field">\n        <div class="control">\n          <input id="kostenstelle-' + nextRowId + '" name="kostenstelle-' + nextRowId + '" min="0" pattern="^(?!0+$)d+$" class="input" list="kostenstelle" type="number" placeholder="' + nextRowId + '">\n        </div>\n      </div>\n    </td>\n    <td data-label="Auftragsnummer" title="Auftragsnummer">\n      <div class="field">\n        <div class="control">\n          <input id="auftragsnummer-' + nextRowId + '" name="auftragsnummer-' + nextRowId + '" class="input" type="number" min="0" pattern="^(?!0+$)d+$">\n        </div>\n      </div>\n    </td>\n    <td data-label="Kunde" title="Kunde">\n      <div class="field">\n        <div class="control">\n          <input id="kunde-' + nextRowId + '" name="kunde-' + nextRowId + '" class="input" type="text">\n        </div>\n      </div>\n    </td>\n    <td data-label="Leistungsart" title="Leistungsart">\n      <div class="field">\n        <div class="control">\n          <input id="leistungsart-' + nextRowId + '" name="leistungsart-' + nextRowId + '" class="input" list="leistungsart" min="0" type="number" pattern="^(?!0+$)d+$">\n        </div>\n      </div>\n    </td>\n    <td data-label="Minuten" title="Minuten">\n      <div class="field">\n        <div class="control">\n          <input id="minuten-' + nextRowId + '" name="minuten-' + nextRowId + '" class="input" type="number" min="0" pattern="^(?!0+$)d+$">\n        </div>\n      </div>\n    </td>\n    <td data-label="Anzahl" title="Anzahl">\n      <div class="field">\n        <div class="control">\n          <input id="anzahl-' + nextRowId + '" name="anzahl-' + nextRowId + '" class="input" type="number" min="0" pattern="^(?!0+$)d+$">\n        </div>\n      </div>\n    </td>\n    <td data-label="Materialnummer" title="Materialnummer">\n      <div class="field">\n        <div class="control">\n          <input id="materialnummer-' + nextRowId + '" name="materialnummer-' + nextRowId + '" class="input" type="number" min="0" pattern="^(?!0+$)d+$">\n        </div>\n      </div>\n    </td>\n  </tr>';

  if (nextRowId <= 22) {
    tbody.insertAdjacentHTML('beforeend', template);
  } else {
    alert('Mehr als 22 Zeilen passen nicht auf einen Zettel.');
  }

  // add new event listeners
  addTREventListeners(nextRowId);
};

/**
 * Pflegt Daten des jeweiligen Zettels in Felder ein
  *
 * @param { object } response
  */
var insertEditData = function insertEditData(response) {
  document.getElementById('nav-new').click();
  document.getElementById('datepicker').value = response.day;
  document.getElementById('von').value = response.startTimestamp;
  document.getElementById('bis').value = response.endTimestamp;
  document.getElementById('mittagspause').checked = response.mittagspause !== 0;
  document.getElementById('frühstückspause').checked = response.frühstückspause !== 0;

  var fieldNames = ['kostenstelle', 'auftragsnummer', 'kunde', 'leistungsart', 'minuten', 'anzahl', 'materialnummer'];

  if (response['außer-haus'] > 0) document.getElementById('außer-haus').value = response['außer-haus'];

  var _loop = function _loop(i) {
    if (parseInt(response['minuten-' + i]) !== 0) {
      if (i > 5) addTR();

      fieldNames.forEach(function (fieldName) {
        var target = fieldName + '-' + i;
        if (response[target] !== 0) document.getElementById(target).value = response[target];
      });
    }
  };

  for (var i = 1; i <= 22; i += 1) {
    _loop(i);
  }

  arbeitszeitCalculator();
  updateArbeitszeitValues();
  minutesCalculator();
  toggleSaveButtons();
};

/**
 * Verändert aktuell angewähltes Navigationselement
 *
 * @param {string} selectedNav
 */
var switchActiveNavigationLink = function switchActiveNavigationLink(selectedNav) {
  [].concat(_toConsumableArray(document.querySelectorAll('.navbar-item[data-target]'))).forEach(function (navLink) {
    var target = document.getElementById(navLink.dataset.target).classList;

    selectedNav === navLink.id ? target.add('is-active') : target.contains('is-active') ? target.remove('is-active') : void 0;
  });
};

/**
 * Verändert Sichtbarkeit der Hauptmodule
 *
 * @param {string} targetId
 */
var switchActiveModule = function switchActiveModule(targetId) {
  [].concat(_toConsumableArray(document.querySelectorAll('main > div'))).forEach(function (moduleEl) {
    return moduleEl.style.display = targetId === moduleEl.id ? 'block' : 'none';
  });
};

/**
 * Löst Stateänderungen in der Navigation und bei den Hauptmodulen aus
 *
 * @param {string} selectedNav [id des geklickten Navigationselements]
 * @param {string} targetId [data-target-Attribut des geklickten Navigationselements]
 */
var toggleTab = function toggleTab(selectedNav, targetId) {
  switchActiveNavigationLink(selectedNav);
  switchActiveModule(targetId);
};

/**
 * Fügt den Checkboxen den EventListener hinzu
 *
 */
var addPausenListener = function addPausenListener() {
  var checkboxes = [document.getElementById('frühstückspause'), document.getElementById('mittagspause')];
  var pausenzeiten = [15, 30];

  checkboxes.forEach(function (el) {
    if (el) {
      el.addEventListener('change', function () {
        var i = checkboxes.indexOf(el);

        !this.checked ? arbeitszeit += pausenzeiten[i] : arbeitszeit -= pausenzeiten[i];

        minutesCalculator();
        arbeitszeitCalculator();
        updateArbeitszeitValues();
      });
    }
  });
};

/**
 * Setzt Tabelle zurück
 *
 */
var removeContent = function removeContent() {
  var elArray = [document.getElementById('von'), document.getElementById('bis'), document.getElementById('minuten-890'), document.getElementById('außer-haus')];

  [].concat(_toConsumableArray(document.querySelectorAll('#creation-tbody input'))).forEach(function (el) {
    return elArray.push(el);
  });

  elArray.forEach(function (el) {
    return el.value = '';
  });

  toggleContentRemoveButton();
  toggleSaveButtons();
};

/**
 * Initiiert Von-Bis-EventListener
 *
 */
var workEventListeners = function workEventListeners() {
  var von = document.getElementById('von');
  var bis = document.getElementById('bis');

  [von, bis].forEach(function (el) {
    if (el) {
      el.addEventListener('input', function () {
        arbeitszeitCalculator();
        minutesCalculator();
        updateArbeitszeitValues();
        toggleContentRemoveButton();
        toggleSaveButtons();
      });
    }
  });
};

var unhidePermSaveTRs = function unhidePermSaveTRs() {
  [].concat(_toConsumableArray(document.querySelectorAll('#perm-save tr'))).forEach(function (tr) {
    if (tr.classList.contains('hidden-tr')) tr.classList.remove('hidden-tr');
  });

  document.getElementById('perm-save-tr').remove();
};

var addDeletionEventListener = function addDeletionEventListener(el, mode) {
  el.addEventListener('click', function () {
    var tr = el.closest('tr');
    var pdfId = el.value;

    swal({
      title: 'Sicher?',
      text: 'Dieser Tageszettel wird dauerhaft gelöscht.',
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Abbrechen',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'löschen'
    }).then(function (result) {
      if (result.value) {
        fetch('api/deletePDF.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          credentials: 'same-origin',
          body: 'pdfId=' + pdfId + '&mode=' + mode
        });
        tr.style.opacity = 0;
      }
    });
  });
};

/**
 * Holt alte Daten ab
 *
 * @param {HTMLElement} el
 * @param {string} mode
 */
var addEditEventListener = function addEditEventListener(el, mode) {
  el.addEventListener('click', function () {
    fetch('api/editPDF.php?pdfId=' + el.value + '&mode=' + mode, { credentials: 'same-origin' }).then(function (response) {
      return response.json();
    }).then(function (response) {
      return insertEditData(response);
    });
  });
};

/**
 * Setzt Datepicker.value auf leer damit alle Datalist-Einträge auswählbar werden
 */
var silenceDatepicker = function silenceDatepicker() {
  this.value = '';
};

/**
 * Zeigt Dateinamen nach erfolgreichem Upload an
 */
var showUploadedFileName = function showUploadedFileName() {
  if (this.files.length > 0) {
    document.getElementsByClassName('file-name')[0].innerText = this.files[0].name;
    document.getElementById(this.id + '-btn').disabled = this.files.length === 0;
  }
};

/**
 * Aktiviert zugehörigen Button des Inputfeldes sobald Inhalt verfügbar ist
 */
var toggleButtonDisabledOnInput = function toggleButtonDisabledOnInput() {
  document.getElementById(this.id + '-btn').disabled = this.value.length === 0;
};

var adminToggleKSLAAdd = function adminToggleKSLAAdd(target) {
  var number = document.getElementById(target + '-number-add');
  var desc = document.getElementById(target + '-desc-add');

  if (number && desc) {
    [number, desc].forEach(function (el) {
      el.addEventListener('input', function () {
        document.getElementById(target + '-btn-add').disabled = !(number.value.length > 0 && desc.value.length > 0);
      });
    });
  }
};

var adminToggleKSLATarget = function adminToggleKSLATarget(target) {
  var select = document.getElementById(target + '-select');

  if (select) {
    select.addEventListener('change', function () {
      document.getElementById(target + '-btn-delete').disabled = false;
    });
  }
};

var capitalize = function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

var adminDeleteKSLAListener = function adminDeleteKSLAListener(target) {
  var deleteBtn = document.getElementById(target + '-btn-delete');

  if (deleteBtn) {
    var btnCL = deleteBtn.classList;
    deleteBtn.addEventListener('click', function (e) {
      e.preventDefault();

      var value = [].concat(_toConsumableArray(document.querySelector('#' + target + '-select').selectedOptions))[0].innerText.split(' – ')[0];

      swal({
        title: 'Sicher?',
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Abbrechen',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'löschen'
      }).then(function (result) {
        if (result.value) {
          btnCL.remove('is-danger');
          ['is-loading', 'is-warning'].forEach(function (className) {
            return btnCL.add(className);
          });

          fetch('api/options/deleteKSLA.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            credentials: 'same-origin',
            body: 'target=' + target + '&id=' + value
          }).then(function (response) {
            return response.json();
          }).then(function (json) {
            ['is-loading', 'is-warning'].forEach(function (className) {
              return btnCL.remove(className);
            });

            if (json.success) {
              var select = document.querySelector('#' + target + '-select');
              [].concat(_toConsumableArray(select.selectedOptions))[0].remove();
              select.selectedIndex = 0;
            }

            btnCL.add(json.success ? 'is-success' : 'is-danger');
            deleteBtn.innerText = json.success ? 'Erfolg' : 'Fehler! Info: ' + json.error;

            setTimeout(function () {
              if (btnCL.contains('is-success')) btnCL.replace('is-success', 'is-danger');
              deleteBtn.innerText = capitalize(target) + ' l\xF6schen';
            }, 5000);
          });
        }
      });
    });
  }
};

var adminAddKSLAListener = function adminAddKSLAListener(target) {
  var btn = document.getElementById(target + '-btn-add');

  if (btn) {
    var btnCL = btn.classList;

    btn.addEventListener('click', function (e) {
      e.preventDefault();

      btnCL.remove('is-success');
      ['is-loading', 'is-warning'].forEach(function (className) {
        return btnCL.add(className);
      });

      var value = document.getElementById(target + '-number-add').value;
      var desc = document.getElementById(target + '-desc-add').value;

      fetch('api/options/addKSLA.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        credentials: 'same-origin',
        body: 'target=' + target + '&id=' + value + '&desc=' + desc
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        ['is-loading', 'is-warning'].forEach(function (className) {
          return btnCL.remove(className);
        });

        btnCL.add(json.success ? 'is-success' : 'is-danger');
        btn.innerText = json.success ? 'Erfolg' : 'Fehler! Info: ' + json.error;

        setTimeout(function () {
          if (btnCL.contains('is-danger')) btnCL.replace('is-danger', 'is-success');
          btn.innerText = capitalize(target) + ' hinzuf\xFCgen';
        }, 5000);
      });
    });
  }
};

var faultyElementListener = function faultyElementListener() {
  this.classList.remove('is-danger');
  this.removeEventListener('input', faultyElementListener);
};

var adminHighlightFaultyElements = function adminHighlightFaultyElements(elements, btn) {
  elements[0].focus();
  elements.forEach(function (el) {
    el.classList.add('is-danger');
    el.addEventListener('input', faultyElementListener);
  });
  ['is-loading', 'is-warning'].forEach(function (className) {
    return btn.classList.remove(className);
  });
  btn.classList.add('is-primary');
};

var adminCreateNewUser = function adminCreateNewUser(inputs, btn) {
  var bodyString = '';

  inputs.forEach(function (input) {
    bodyString += input.name + '=' + input.value + '&';
  });

  bodyString = bodyString.slice(0, -1);

  fetch('api/options/createNewUser.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    credentials: 'same-origin',
    body: bodyString
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    ['is-loading', 'is-warning'].forEach(function (className) {
      return btn.classList.remove(className);
    });

    btn.classList.add(json.success ? 'is-success' : 'is-danger');
    btn.innerText = json.success ? 'Erfolg' : 'Fehler! Info: ' + json.error;

    setTimeout(function () {
      if (btn.classList.contains('is-success')) btn.classList.replace('is-success', 'is-primary');
      btn.innerText = 'Neuen Angestellten hinzufügen';
    }, 5000);
  });
};

var adminCreateUserListener = function adminCreateUserListener() {
  var btn = document.getElementById('create-user-btn');

  if (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      btn.classList.remove('is-primary');
      ['is-loading', 'is-warning'].forEach(function (className) {
        return btn.classList.add(className);
      });

      var formParent = 'form[action="api/options/createNewUser.php"]';

      var inputs = [].concat(_toConsumableArray(document.querySelectorAll(formParent + ' input, ' + formParent + ' select')));
      var faultyEls = inputs.filter(function (el) {
        return el.required && el.value.length === 0;
      });

      faultyEls.length === 0 ? adminCreateNewUser(inputs, btn) : adminHighlightFaultyElements(faultyEls, btn);
    });
  }
};

var adminEventListener = function adminEventListener() {
  ['kostenstelle', 'leistungsart'].forEach(function (target) {
    adminToggleKSLAAdd(target);
    adminToggleKSLATarget(target);
    adminDeleteKSLAListener(target);
    adminAddKSLAListener(target);
  });

  adminCreateUserListener();
};

/**
 * Mobile Nav Hamburger
 */
var initHamburger = function initHamburger() {
  var navbarBurgers = [].concat(_toConsumableArray(document.querySelectorAll('.navbar-burger')));

  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {
        [el, document.getElementById(el.dataset.target)].forEach(function (element) {
          return element.classList.toggle('is-active');
        });
      });
    });
  }
};

/**
 * Initiiert TabSwitcher...
 */
var initTabswitcher = function initTabswitcher() {
  [].concat(_toConsumableArray(document.querySelectorAll('.navbar-item[data-target'))).forEach(function (el) {
    el.addEventListener('click', function () {
      toggleTab(el.id, el.dataset.target);
    });
  });
};

var addEventListenerIfExists = function addEventListenerIfExists(id, type, eventListener) {
  var element = document.getElementById(id);
  if (element) element.addEventListener(type, eventListener);
};

var calendarListeners = function calendarListeners() {
  var buttons = [document.querySelector('.calendar-nav-previous-month button'), document.querySelector('.calendar-nav-next-month button')];
  var selects = [document.getElementById('calendar-month'), document.getElementById('calendar-year')];

  var currentMonth = parseInt(document.getElementById('calendar-month').value);
  var currentYear = parseInt(document.getElementById('calendar-year').value);

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      this.disabled = true;
      getCalendarData(currentYear, currentMonth + parseInt(this.dataset.action));
    });
  });

  selects.forEach(function (select) {
    select.addEventListener('change', function () {
      this.disabled = true;
      getCalendarData(selects[1].value, selects[0].value);
    });
  });
};

var getCalendarData = function getCalendarData(year, month) {
  fetch('api/calendar.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    credentials: 'same-origin',
    body: 'year=' + year + '&month=' + month
  }).then(function (response) {
    return response.text();
  }).then(function (response) {
    document.getElementById('calendar').innerHTML = response;
    calendarListeners();
  });
};

/**
 * Fügt alle relevanten EventListener hinzu
 */
var addEventListeners = function addEventListeners() {
  initHamburger();
  initTabswitcher();
  workEventListeners();

  var fileInput = document.querySelector('input[type="file"]');
  if (fileInput) fileInput.addEventListener('change', showUploadedFileName);

  addEventListenerIfExists('datepicker', 'click', silenceDatepicker);
  addEventListenerIfExists('add-tr', 'click', addTR);
  addEventListenerIfExists('remove-contents', 'click', removeContent);
  addEventListenerIfExists('perm-save-toggler', 'click', unhidePermSaveTRs);
  addEventListenerIfExists('überminuten', 'input', toggleButtonDisabledOnInput);

  // admin
  adminEventListener();

  var arbeitszeitEl = document.getElementById('arbeitszeit');
  if (arbeitszeitEl) arbeitszeit = parseInt(arbeitszeitEl.value.replace(/von /, ''));

  addPausenListener();
  addAußerHausEventListener();
  minutesCalculatorEventListenerHelper();

  calendarListeners();

  [].concat(_toConsumableArray(document.querySelectorAll('.perm-delete-btn'))).forEach(function (el) {
    return addDeletionEventListener(el, 'permanent');
  });
  [].concat(_toConsumableArray(document.querySelectorAll('.temp-delete-btn'))).forEach(function (el) {
    return addDeletionEventListener(el, 'temporary');
  });

  [].concat(_toConsumableArray(document.querySelectorAll('.perm-edit-btn'))).forEach(function (el) {
    return addEditEventListener(el, 'permanent');
  });
  [].concat(_toConsumableArray(document.querySelectorAll('.temp-edit-btn'))).forEach(function (el) {
    return addEditEventListener(el, 'temporary');
  });
};

// const returnDateWithLeadingZero = timestamp => `${`0${timestamp.getDate()}`.slice(-2)}.${`0${timestamp.getMonth() + 1}`.slice(-2)}.${timestamp.getFullYear()}`;

var datePicker = function datePicker() {
  var datePickertarget = document.querySelector('[name="datum"]');

  if (datePickertarget) {
    var datepickerOptions = {
      dateFormat: 'dd.mm.yyyy',
      lang: 'de'
    };

    bulmaCalendar.attach('[name="datum"]', datepickerOptions);

    setTimeout(function () {
      document.querySelector('[name="datum"]').click();
      document.querySelector('button.date-item.is-today.is-active').click();
    }, 1000);
  }
};

document.addEventListener('DOMContentLoaded', function () {
  addEventListeners();
  datePicker();
  update890Row();
});

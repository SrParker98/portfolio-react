function Ld(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const l = Object.getOwnPropertyDescriptor(r, i);
          l &&
            Object.defineProperty(
              e,
              i,
              l.get ? l : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function Ga(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var j = {},
  Md = {
    get exports() {
      return j;
    },
    set exports(e) {
      j = e;
    },
  },
  _i = {},
  R = {},
  Nd = {
    get exports() {
      return R;
    },
    set exports(e) {
      R = e;
    },
  },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hr = Symbol.for("react.element"),
  Od = Symbol.for("react.portal"),
  zd = Symbol.for("react.fragment"),
  Id = Symbol.for("react.strict_mode"),
  jd = Symbol.for("react.profiler"),
  Ad = Symbol.for("react.provider"),
  Dd = Symbol.for("react.context"),
  Rd = Symbol.for("react.forward_ref"),
  Bd = Symbol.for("react.suspense"),
  Fd = Symbol.for("react.memo"),
  Vd = Symbol.for("react.lazy"),
  So = Symbol.iterator;
function Hd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (So && e[So]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ua = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Wa = Object.assign,
  Qa = {};
function kn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qa),
    (this.updater = n || Ua);
}
kn.prototype.isReactComponent = {};
kn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ya() {}
Ya.prototype = kn.prototype;
function Cs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qa),
    (this.updater = n || Ua);
}
var ks = (Cs.prototype = new Ya());
ks.constructor = Cs;
Wa(ks, kn.prototype);
ks.isPureReactComponent = !0;
var wo = Array.isArray,
  qa = Object.prototype.hasOwnProperty,
  Ts = { current: null },
  Ka = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xa(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      qa.call(t, r) && !Ka.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var o = Array(a), c = 0; c < a; c++) o[c] = arguments[c + 2];
    i.children = o;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: hr,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: Ts.current,
  };
}
function $d(e, t) {
  return {
    $$typeof: hr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function _s(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hr;
}
function bd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xo = /\/+/g;
function $i(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? bd("" + e.key)
    : t.toString(36);
}
function Vr(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case hr:
          case Od:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + $i(s, 0) : r),
      wo(i)
        ? ((n = ""),
          e != null && (n = e.replace(xo, "$&/") + "/"),
          Vr(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (_s(i) &&
            (i = $d(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(xo, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), wo(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var o = r + $i(l, a);
      s += Vr(l, t, n, o, i);
    }
  else if (((o = Hd(e)), typeof o == "function"))
    for (e = o.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (o = r + $i(l, a++)), (s += Vr(l, t, n, o, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function xr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Vr(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function Gd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var he = { current: null },
  Hr = { transition: null },
  Ud = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: Hr,
    ReactCurrentOwner: Ts,
  };
B.Children = {
  map: xr,
  forEach: function (e, t, n) {
    xr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      xr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!_s(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = kn;
B.Fragment = zd;
B.Profiler = jd;
B.PureComponent = Cs;
B.StrictMode = Id;
B.Suspense = Bd;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ud;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Wa({}, e.props),
    i = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = Ts.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (o in t)
      qa.call(t, o) &&
        !Ka.hasOwnProperty(o) &&
        (r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    a = Array(o);
    for (var c = 0; c < o; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: hr, type: e.type, key: i, ref: l, props: r, _owner: s };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Dd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ad, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Xa;
B.createFactory = function (e) {
  var t = Xa.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Rd, render: e };
};
B.isValidElement = _s;
B.lazy = function (e) {
  return { $$typeof: Vd, _payload: { _status: -1, _result: e }, _init: Gd };
};
B.memo = function (e, t) {
  return { $$typeof: Fd, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Hr.transition;
  Hr.transition = {};
  try {
    e();
  } finally {
    Hr.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return he.current.useCallback(e, t);
};
B.useContext = function (e) {
  return he.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return he.current.useEffect(e, t);
};
B.useId = function () {
  return he.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return he.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return he.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return he.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return he.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return he.current.useRef(e);
};
B.useState = function (e) {
  return he.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return he.current.useTransition();
};
B.version = "18.2.0";
(function (e) {
  e.exports = B;
})(Nd);
const b = Ga(R),
  wl = Ld({ __proto__: null, default: b }, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wd = R,
  Qd = Symbol.for("react.element"),
  Yd = Symbol.for("react.fragment"),
  qd = Object.prototype.hasOwnProperty,
  Kd = Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Xd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ja(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) qd.call(t, r) && !Xd.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Qd,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: Kd.current,
  };
}
_i.Fragment = Yd;
_i.jsx = Ja;
_i.jsxs = Ja;
(function (e) {
  e.exports = _i;
})(Md);
var xl = {},
  El = {},
  Jd = {
    get exports() {
      return El;
    },
    set exports(e) {
      El = e;
    },
  },
  Le = {},
  Cl = {},
  Zd = {
    get exports() {
      return Cl;
    },
    set exports(e) {
      Cl = e;
    },
  },
  Za = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, I) {
    var A = N.length;
    N.push(I);
    e: for (; 0 < A; ) {
      var $ = (A - 1) >>> 1,
        Y = N[$];
      if (0 < i(Y, I)) (N[$] = I), (N[A] = Y), (A = $);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var I = N[0],
      A = N.pop();
    if (A !== I) {
      N[0] = A;
      e: for (var $ = 0, Y = N.length, Ke = Y >>> 1; $ < Ke; ) {
        var Xe = 2 * ($ + 1) - 1,
          Pn = N[Xe],
          Je = Xe + 1,
          Kt = N[Je];
        if (0 > i(Pn, A))
          Je < Y && 0 > i(Kt, Pn)
            ? ((N[$] = Kt), (N[Je] = A), ($ = Je))
            : ((N[$] = Pn), (N[Xe] = A), ($ = Xe));
        else if (Je < Y && 0 > i(Kt, A)) (N[$] = Kt), (N[Je] = A), ($ = Je);
        else break e;
      }
    }
    return I;
  }
  function i(N, I) {
    var A = N.sortIndex - I.sortIndex;
    return A !== 0 ? A : N.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var o = [],
    c = [],
    m = 1,
    p = null,
    h = 3,
    v = !1,
    g = !1,
    y = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    u = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(N) {
    for (var I = n(c); I !== null; ) {
      if (I.callback === null) r(c);
      else if (I.startTime <= N)
        r(c), (I.sortIndex = I.expirationTime), t(o, I);
      else break;
      I = n(c);
    }
  }
  function S(N) {
    if (((y = !1), f(N), !g))
      if (n(o) !== null) (g = !0), fe(T);
      else {
        var I = n(c);
        I !== null && ge(S, I.startTime - N);
      }
  }
  function T(N, I) {
    (g = !1), y && ((y = !1), u(w), (w = -1)), (v = !0);
    var A = h;
    try {
      for (
        f(I), p = n(o);
        p !== null && (!(p.expirationTime > I) || (N && !_()));

      ) {
        var $ = p.callback;
        if (typeof $ == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var Y = $(p.expirationTime <= I);
          (I = e.unstable_now()),
            typeof Y == "function" ? (p.callback = Y) : p === n(o) && r(o),
            f(I);
        } else r(o);
        p = n(o);
      }
      if (p !== null) var Ke = !0;
      else {
        var Xe = n(c);
        Xe !== null && ge(S, Xe.startTime - I), (Ke = !1);
      }
      return Ke;
    } finally {
      (p = null), (h = A), (v = !1);
    }
  }
  var x = !1,
    C = null,
    w = -1,
    E = 5,
    M = -1;
  function _() {
    return !(e.unstable_now() - M < E);
  }
  function P() {
    if (C !== null) {
      var N = e.unstable_now();
      M = N;
      var I = !0;
      try {
        I = C(!0, N);
      } finally {
        I ? O() : ((x = !1), (C = null));
      }
    } else x = !1;
  }
  var O;
  if (typeof d == "function")
    O = function () {
      d(P);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      H = D.port2;
    (D.port1.onmessage = P),
      (O = function () {
        H.postMessage(null);
      });
  } else
    O = function () {
      k(P, 0);
    };
  function fe(N) {
    (C = N), x || ((x = !0), O());
  }
  function ge(N, I) {
    w = k(function () {
      N(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), fe(T));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (E = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = h;
      }
      var A = h;
      h = I;
      try {
        return N();
      } finally {
        h = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, I) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var A = h;
      h = N;
      try {
        return I();
      } finally {
        h = A;
      }
    }),
    (e.unstable_scheduleCallback = function (N, I, A) {
      var $ = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? $ + A : $))
          : (A = $),
        N)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = A + Y),
        (N = {
          id: m++,
          callback: I,
          priorityLevel: N,
          startTime: A,
          expirationTime: Y,
          sortIndex: -1,
        }),
        A > $
          ? ((N.sortIndex = A),
            t(c, N),
            n(o) === null &&
              N === n(c) &&
              (y ? (u(w), (w = -1)) : (y = !0), ge(S, A - $)))
          : ((N.sortIndex = Y), t(o, N), g || v || ((g = !0), fe(T))),
        N
      );
    }),
    (e.unstable_shouldYield = _),
    (e.unstable_wrapCallback = function (N) {
      var I = h;
      return function () {
        var A = h;
        h = I;
        try {
          return N.apply(this, arguments);
        } finally {
          h = A;
        }
      };
    });
})(Za);
(function (e) {
  e.exports = Za;
})(Zd);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eu = R,
  Pe = Cl;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var tu = new Set(),
  Xn = {};
function Qt(e, t) {
  gn(e, t), gn(e + "Capture", t);
}
function gn(e, t) {
  for (Xn[e] = t, e = 0; e < t.length; e++) tu.add(t[e]);
}
var lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  kl = Object.prototype.hasOwnProperty,
  ef =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Eo = {},
  Co = {};
function tf(e) {
  return kl.call(Co, e)
    ? !0
    : kl.call(Eo, e)
    ? !1
    : ef.test(e)
    ? (Co[e] = !0)
    : ((Eo[e] = !0), !1);
}
function nf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function rf(e, t, n, r) {
  if (t === null || typeof t > "u" || nf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ve(e, t, n, r, i, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ps = /[\-:]([a-z])/g;
function Ls(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ps, Ls);
    oe[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ps, Ls);
    oe[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ps, Ls);
  oe[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ms(e, t, n, r) {
  var i = oe.hasOwnProperty(t) ? oe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (rf(t, n, i, r) && (n = null),
    r || i === null
      ? tf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ut = eu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Er = Symbol.for("react.element"),
  Jt = Symbol.for("react.portal"),
  Zt = Symbol.for("react.fragment"),
  Ns = Symbol.for("react.strict_mode"),
  Tl = Symbol.for("react.profiler"),
  nu = Symbol.for("react.provider"),
  ru = Symbol.for("react.context"),
  Os = Symbol.for("react.forward_ref"),
  _l = Symbol.for("react.suspense"),
  Pl = Symbol.for("react.suspense_list"),
  zs = Symbol.for("react.memo"),
  dt = Symbol.for("react.lazy"),
  iu = Symbol.for("react.offscreen"),
  ko = Symbol.iterator;
function Ln(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ko && e[ko]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  bi;
function Rn(e) {
  if (bi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      bi = (t && t[1]) || "";
    }
  return (
    `
` +
    bi +
    e
  );
}
var Gi = !1;
function Ui(e, t) {
  if (!e || Gi) return "";
  Gi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          l = r.stack.split(`
`),
          s = i.length - 1,
          a = l.length - 1;
        1 <= s && 0 <= a && i[s] !== l[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== l[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== l[a])) {
                var o =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    o.includes("<anonymous>") &&
                    (o = o.replace("<anonymous>", e.displayName)),
                  o
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Gi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Rn(e) : "";
}
function lf(e) {
  switch (e.tag) {
    case 5:
      return Rn(e.type);
    case 16:
      return Rn("Lazy");
    case 13:
      return Rn("Suspense");
    case 19:
      return Rn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ui(e.type, !1)), e;
    case 11:
      return (e = Ui(e.type.render, !1)), e;
    case 1:
      return (e = Ui(e.type, !0)), e;
    default:
      return "";
  }
}
function Ll(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zt:
      return "Fragment";
    case Jt:
      return "Portal";
    case Tl:
      return "Profiler";
    case Ns:
      return "StrictMode";
    case _l:
      return "Suspense";
    case Pl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ru:
        return (e.displayName || "Context") + ".Consumer";
      case nu:
        return (e._context.displayName || "Context") + ".Provider";
      case Os:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zs:
        return (
          (t = e.displayName || null), t !== null ? t : Ll(e.type) || "Memo"
        );
      case dt:
        (t = e._payload), (e = e._init);
        try {
          return Ll(e(t));
        } catch {}
    }
  return null;
}
function sf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ll(t);
    case 8:
      return t === Ns ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Lt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function lu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function of(e) {
  var t = lu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Cr(e) {
  e._valueTracker || (e._valueTracker = of(e));
}
function su(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = lu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ml(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function To(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Lt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ou(e, t) {
  (t = t.checked), t != null && Ms(e, "checked", t, !1);
}
function Nl(e, t) {
  ou(e, t);
  var n = Lt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ol(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ol(e, t.type, Lt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _o(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ol(e, t, n) {
  (t !== "number" || Zr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Bn = Array.isArray;
function dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function zl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Po(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Bn(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Lt(n) };
}
function au(e, t) {
  var n = Lt(t.value),
    r = Lt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Lo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function uu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Il(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? uu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var kr,
  cu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        kr = kr || document.createElement("div"),
          kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = kr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Jn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Hn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  af = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hn).forEach(function (e) {
  af.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hn[t] = Hn[e]);
  });
});
function du(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Hn.hasOwnProperty(e) && Hn[e])
    ? ("" + t).trim()
    : t + "px";
}
function fu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = du(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var uf = X(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function jl(e, t) {
  if (t) {
    if (uf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Al(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Dl = null;
function Is(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Rl = null,
  fn = null,
  pn = null;
function Mo(e) {
  if ((e = yr(e))) {
    if (typeof Rl != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Oi(t)), Rl(e.stateNode, e.type, t));
  }
}
function pu(e) {
  fn ? (pn ? pn.push(e) : (pn = [e])) : (fn = e);
}
function mu() {
  if (fn) {
    var e = fn,
      t = pn;
    if (((pn = fn = null), Mo(e), t)) for (e = 0; e < t.length; e++) Mo(t[e]);
  }
}
function hu(e, t) {
  return e(t);
}
function vu() {}
var Wi = !1;
function gu(e, t, n) {
  if (Wi) return e(t, n);
  Wi = !0;
  try {
    return hu(e, t, n);
  } finally {
    (Wi = !1), (fn !== null || pn !== null) && (vu(), mu());
  }
}
function Zn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Oi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Bl = !1;
if (lt)
  try {
    var Mn = {};
    Object.defineProperty(Mn, "passive", {
      get: function () {
        Bl = !0;
      },
    }),
      window.addEventListener("test", Mn, Mn),
      window.removeEventListener("test", Mn, Mn);
  } catch {
    Bl = !1;
  }
function cf(e, t, n, r, i, l, s, a, o) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var $n = !1,
  ei = null,
  ti = !1,
  Fl = null,
  df = {
    onError: function (e) {
      ($n = !0), (ei = e);
    },
  };
function ff(e, t, n, r, i, l, s, a, o) {
  ($n = !1), (ei = null), cf.apply(df, arguments);
}
function pf(e, t, n, r, i, l, s, a, o) {
  if ((ff.apply(this, arguments), $n)) {
    if ($n) {
      var c = ei;
      ($n = !1), (ei = null);
    } else throw Error(L(198));
    ti || ((ti = !0), (Fl = c));
  }
}
function Yt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function yu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function No(e) {
  if (Yt(e) !== e) throw Error(L(188));
}
function mf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yt(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return No(i), e;
        if (l === r) return No(i), t;
        l = l.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = l);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = l.child; a; ) {
          if (a === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Su(e) {
  return (e = mf(e)), e !== null ? wu(e) : null;
}
function wu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var xu = Pe.unstable_scheduleCallback,
  Oo = Pe.unstable_cancelCallback,
  hf = Pe.unstable_shouldYield,
  vf = Pe.unstable_requestPaint,
  Z = Pe.unstable_now,
  gf = Pe.unstable_getCurrentPriorityLevel,
  js = Pe.unstable_ImmediatePriority,
  Eu = Pe.unstable_UserBlockingPriority,
  ni = Pe.unstable_NormalPriority,
  yf = Pe.unstable_LowPriority,
  Cu = Pe.unstable_IdlePriority,
  Pi = null,
  Ye = null;
function Sf(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function")
    try {
      Ye.onCommitFiberRoot(Pi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var He = Math.clz32 ? Math.clz32 : Ef,
  wf = Math.log,
  xf = Math.LN2;
function Ef(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wf(e) / xf) | 0)) | 0;
}
var Tr = 64,
  _r = 4194304;
function Fn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ri(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Fn(a)) : ((l &= s), l !== 0 && (r = Fn(l)));
  } else (s = n & ~i), s !== 0 ? (r = Fn(s)) : l !== 0 && (r = Fn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - He(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Cf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - He(l),
      a = 1 << s,
      o = i[s];
    o === -1
      ? (!(a & n) || a & r) && (i[s] = Cf(a, t))
      : o <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Vl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ku() {
  var e = Tr;
  return (Tr <<= 1), !(Tr & 4194240) && (Tr = 64), e;
}
function Qi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - He(t)),
    (e[t] = n);
}
function Tf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - He(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function As(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var V = 0;
function Tu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var _u,
  Ds,
  Pu,
  Lu,
  Mu,
  Hl = !1,
  Pr = [],
  St = null,
  wt = null,
  xt = null,
  er = new Map(),
  tr = new Map(),
  pt = [],
  _f =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function zo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      St = null;
      break;
    case "dragenter":
    case "dragleave":
      wt = null;
      break;
    case "mouseover":
    case "mouseout":
      xt = null;
      break;
    case "pointerover":
    case "pointerout":
      er.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      tr.delete(t.pointerId);
  }
}
function Nn(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = yr(t)), t !== null && Ds(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Pf(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (St = Nn(St, e, t, n, r, i)), !0;
    case "dragenter":
      return (wt = Nn(wt, e, t, n, r, i)), !0;
    case "mouseover":
      return (xt = Nn(xt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return er.set(l, Nn(er.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), tr.set(l, Nn(tr.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Nu(e) {
  var t = At(e.target);
  if (t !== null) {
    var n = Yt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = yu(n)), t !== null)) {
          (e.blockedOn = t),
            Mu(e.priority, function () {
              Pu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $r(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Dl = r), n.target.dispatchEvent(r), (Dl = null);
    } else return (t = yr(n)), t !== null && Ds(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Io(e, t, n) {
  $r(e) && n.delete(t);
}
function Lf() {
  (Hl = !1),
    St !== null && $r(St) && (St = null),
    wt !== null && $r(wt) && (wt = null),
    xt !== null && $r(xt) && (xt = null),
    er.forEach(Io),
    tr.forEach(Io);
}
function On(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Hl ||
      ((Hl = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, Lf)));
}
function nr(e) {
  function t(i) {
    return On(i, e);
  }
  if (0 < Pr.length) {
    On(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
      var r = Pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    St !== null && On(St, e),
      wt !== null && On(wt, e),
      xt !== null && On(xt, e),
      er.forEach(t),
      tr.forEach(t),
      n = 0;
    n < pt.length;
    n++
  )
    (r = pt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pt.length && ((n = pt[0]), n.blockedOn === null); )
    Nu(n), n.blockedOn === null && pt.shift();
}
var mn = ut.ReactCurrentBatchConfig,
  ii = !0;
function Mf(e, t, n, r) {
  var i = V,
    l = mn.transition;
  mn.transition = null;
  try {
    (V = 1), Rs(e, t, n, r);
  } finally {
    (V = i), (mn.transition = l);
  }
}
function Nf(e, t, n, r) {
  var i = V,
    l = mn.transition;
  mn.transition = null;
  try {
    (V = 4), Rs(e, t, n, r);
  } finally {
    (V = i), (mn.transition = l);
  }
}
function Rs(e, t, n, r) {
  if (ii) {
    var i = $l(e, t, n, r);
    if (i === null) rl(e, t, r, li, n), zo(e, r);
    else if (Pf(i, e, t, n, r)) r.stopPropagation();
    else if ((zo(e, r), t & 4 && -1 < _f.indexOf(e))) {
      for (; i !== null; ) {
        var l = yr(i);
        if (
          (l !== null && _u(l),
          (l = $l(e, t, n, r)),
          l === null && rl(e, t, r, li, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else rl(e, t, r, null, n);
  }
}
var li = null;
function $l(e, t, n, r) {
  if (((li = null), (e = Is(r)), (e = At(e)), e !== null))
    if (((t = Yt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = yu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (li = e), null;
}
function Ou(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (gf()) {
        case js:
          return 1;
        case Eu:
          return 4;
        case ni:
        case yf:
          return 16;
        case Cu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ht = null,
  Bs = null,
  br = null;
function zu() {
  if (br) return br;
  var e,
    t = Bs,
    n = t.length,
    r,
    i = "value" in ht ? ht.value : ht.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return (br = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Gr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Lr() {
  return !0;
}
function jo() {
  return !1;
}
function Me(e) {
  function t(n, r, i, l, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Lr
        : jo),
      (this.isPropagationStopped = jo),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Lr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Lr));
      },
      persist: function () {},
      isPersistent: Lr,
    }),
    t
  );
}
var Tn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fs = Me(Tn),
  gr = X({}, Tn, { view: 0, detail: 0 }),
  Of = Me(gr),
  Yi,
  qi,
  zn,
  Li = X({}, gr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Vs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== zn &&
            (zn && e.type === "mousemove"
              ? ((Yi = e.screenX - zn.screenX), (qi = e.screenY - zn.screenY))
              : (qi = Yi = 0),
            (zn = e)),
          Yi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : qi;
    },
  }),
  Ao = Me(Li),
  zf = X({}, Li, { dataTransfer: 0 }),
  If = Me(zf),
  jf = X({}, gr, { relatedTarget: 0 }),
  Ki = Me(jf),
  Af = X({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Df = Me(Af),
  Rf = X({}, Tn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Bf = Me(Rf),
  Ff = X({}, Tn, { data: 0 }),
  Do = Me(Ff),
  Vf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Hf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  $f = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function bf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $f[e]) ? !!t[e] : !1;
}
function Vs() {
  return bf;
}
var Gf = X({}, gr, {
    key: function (e) {
      if (e.key) {
        var t = Vf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Hf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vs,
    charCode: function (e) {
      return e.type === "keypress" ? Gr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Gr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Uf = Me(Gf),
  Wf = X({}, Li, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ro = Me(Wf),
  Qf = X({}, gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vs,
  }),
  Yf = Me(Qf),
  qf = X({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kf = Me(qf),
  Xf = X({}, Li, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Jf = Me(Xf),
  Zf = [9, 13, 27, 32],
  Hs = lt && "CompositionEvent" in window,
  bn = null;
lt && "documentMode" in document && (bn = document.documentMode);
var ep = lt && "TextEvent" in window && !bn,
  Iu = lt && (!Hs || (bn && 8 < bn && 11 >= bn)),
  Bo = String.fromCharCode(32),
  Fo = !1;
function ju(e, t) {
  switch (e) {
    case "keyup":
      return Zf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Au(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function tp(e, t) {
  switch (e) {
    case "compositionend":
      return Au(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fo = !0), Bo);
    case "textInput":
      return (e = t.data), e === Bo && Fo ? null : e;
    default:
      return null;
  }
}
function np(e, t) {
  if (en)
    return e === "compositionend" || (!Hs && ju(e, t))
      ? ((e = zu()), (br = Bs = ht = null), (en = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Iu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Vo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rp[e.type] : t === "textarea";
}
function Du(e, t, n, r) {
  pu(r),
    (t = si(t, "onChange")),
    0 < t.length &&
      ((n = new Fs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Gn = null,
  rr = null;
function ip(e) {
  Qu(e, 0);
}
function Mi(e) {
  var t = rn(e);
  if (su(t)) return e;
}
function lp(e, t) {
  if (e === "change") return t;
}
var Ru = !1;
if (lt) {
  var Xi;
  if (lt) {
    var Ji = "oninput" in document;
    if (!Ji) {
      var Ho = document.createElement("div");
      Ho.setAttribute("oninput", "return;"),
        (Ji = typeof Ho.oninput == "function");
    }
    Xi = Ji;
  } else Xi = !1;
  Ru = Xi && (!document.documentMode || 9 < document.documentMode);
}
function $o() {
  Gn && (Gn.detachEvent("onpropertychange", Bu), (rr = Gn = null));
}
function Bu(e) {
  if (e.propertyName === "value" && Mi(rr)) {
    var t = [];
    Du(t, rr, e, Is(e)), gu(ip, t);
  }
}
function sp(e, t, n) {
  e === "focusin"
    ? ($o(), (Gn = t), (rr = n), Gn.attachEvent("onpropertychange", Bu))
    : e === "focusout" && $o();
}
function op(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Mi(rr);
}
function ap(e, t) {
  if (e === "click") return Mi(t);
}
function up(e, t) {
  if (e === "input" || e === "change") return Mi(t);
}
function cp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var be = typeof Object.is == "function" ? Object.is : cp;
function ir(e, t) {
  if (be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!kl.call(t, i) || !be(e[i], t[i])) return !1;
  }
  return !0;
}
function bo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Go(e, t) {
  var n = bo(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = bo(n);
  }
}
function Fu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Fu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Vu() {
  for (var e = window, t = Zr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zr(e.document);
  }
  return t;
}
function $s(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function dp(e) {
  var t = Vu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Fu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && $s(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = Go(n, l));
        var s = Go(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fp = lt && "documentMode" in document && 11 >= document.documentMode,
  tn = null,
  bl = null,
  Un = null,
  Gl = !1;
function Uo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gl ||
    tn == null ||
    tn !== Zr(r) ||
    ((r = tn),
    "selectionStart" in r && $s(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Un && ir(Un, r)) ||
      ((Un = r),
      (r = si(bl, "onSelect")),
      0 < r.length &&
        ((t = new Fs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tn))));
}
function Mr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var nn = {
    animationend: Mr("Animation", "AnimationEnd"),
    animationiteration: Mr("Animation", "AnimationIteration"),
    animationstart: Mr("Animation", "AnimationStart"),
    transitionend: Mr("Transition", "TransitionEnd"),
  },
  Zi = {},
  Hu = {};
lt &&
  ((Hu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nn.animationend.animation,
    delete nn.animationiteration.animation,
    delete nn.animationstart.animation),
  "TransitionEvent" in window || delete nn.transitionend.transition);
function Ni(e) {
  if (Zi[e]) return Zi[e];
  if (!nn[e]) return e;
  var t = nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Hu) return (Zi[e] = t[n]);
  return e;
}
var $u = Ni("animationend"),
  bu = Ni("animationiteration"),
  Gu = Ni("animationstart"),
  Uu = Ni("transitionend"),
  Wu = new Map(),
  Wo =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Nt(e, t) {
  Wu.set(e, t), Qt(t, [e]);
}
for (var el = 0; el < Wo.length; el++) {
  var tl = Wo[el],
    pp = tl.toLowerCase(),
    mp = tl[0].toUpperCase() + tl.slice(1);
  Nt(pp, "on" + mp);
}
Nt($u, "onAnimationEnd");
Nt(bu, "onAnimationIteration");
Nt(Gu, "onAnimationStart");
Nt("dblclick", "onDoubleClick");
Nt("focusin", "onFocus");
Nt("focusout", "onBlur");
Nt(Uu, "onTransitionEnd");
gn("onMouseEnter", ["mouseout", "mouseover"]);
gn("onMouseLeave", ["mouseout", "mouseover"]);
gn("onPointerEnter", ["pointerout", "pointerover"]);
gn("onPointerLeave", ["pointerout", "pointerover"]);
Qt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Qt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Qt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Qt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Vn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  hp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));
function Qo(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), pf(r, t, void 0, e), (e.currentTarget = null);
}
function Qu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            o = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), o !== l && i.isPropagationStopped())) break e;
          Qo(i, a, c), (l = o);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (o = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            o !== l && i.isPropagationStopped())
          )
            break e;
          Qo(i, a, c), (l = o);
        }
    }
  }
  if (ti) throw ((e = Fl), (ti = !1), (Fl = null), e);
}
function U(e, t) {
  var n = t[ql];
  n === void 0 && (n = t[ql] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Yu(t, e, 2, !1), n.add(r));
}
function nl(e, t, n) {
  var r = 0;
  t && (r |= 4), Yu(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function lr(e) {
  if (!e[Nr]) {
    (e[Nr] = !0),
      tu.forEach(function (n) {
        n !== "selectionchange" && (hp.has(n) || nl(n, !1, e), nl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || ((t[Nr] = !0), nl("selectionchange", !1, t));
  }
}
function Yu(e, t, n, r) {
  switch (Ou(t)) {
    case 1:
      var i = Mf;
      break;
    case 4:
      i = Nf;
      break;
    default:
      i = Rs;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Bl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function rl(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var o = s.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = s.stateNode.containerInfo),
              o === i || (o.nodeType === 8 && o.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = At(a)), s === null)) return;
          if (((o = s.tag), o === 5 || o === 6)) {
            r = l = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  gu(function () {
    var c = l,
      m = Is(n),
      p = [];
    e: {
      var h = Wu.get(e);
      if (h !== void 0) {
        var v = Fs,
          g = e;
        switch (e) {
          case "keypress":
            if (Gr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Uf;
            break;
          case "focusin":
            (g = "focus"), (v = Ki);
            break;
          case "focusout":
            (g = "blur"), (v = Ki);
            break;
          case "beforeblur":
          case "afterblur":
            v = Ki;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Ao;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = If;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Yf;
            break;
          case $u:
          case bu:
          case Gu:
            v = Df;
            break;
          case Uu:
            v = Kf;
            break;
          case "scroll":
            v = Of;
            break;
          case "wheel":
            v = Jf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Bf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ro;
        }
        var y = (t & 4) !== 0,
          k = !y && e === "scroll",
          u = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var d = c, f; d !== null; ) {
          f = d;
          var S = f.stateNode;
          if (
            (f.tag === 5 &&
              S !== null &&
              ((f = S),
              u !== null && ((S = Zn(d, u)), S != null && y.push(sr(d, S, f)))),
            k)
          )
            break;
          d = d.return;
        }
        0 < y.length &&
          ((h = new v(h, g, null, n, m)), p.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Dl &&
            (g = n.relatedTarget || n.fromElement) &&
            (At(g) || g[st]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            m.window === m
              ? m
              : (h = m.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = c),
              (g = g ? At(g) : null),
              g !== null &&
                ((k = Yt(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = c)),
          v !== g)
        ) {
          if (
            ((y = Ao),
            (S = "onMouseLeave"),
            (u = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Ro),
              (S = "onPointerLeave"),
              (u = "onPointerEnter"),
              (d = "pointer")),
            (k = v == null ? h : rn(v)),
            (f = g == null ? h : rn(g)),
            (h = new y(S, d + "leave", v, n, m)),
            (h.target = k),
            (h.relatedTarget = f),
            (S = null),
            At(m) === c &&
              ((y = new y(u, d + "enter", g, n, m)),
              (y.target = f),
              (y.relatedTarget = k),
              (S = y)),
            (k = S),
            v && g)
          )
            t: {
              for (y = v, u = g, d = 0, f = y; f; f = Xt(f)) d++;
              for (f = 0, S = u; S; S = Xt(S)) f++;
              for (; 0 < d - f; ) (y = Xt(y)), d--;
              for (; 0 < f - d; ) (u = Xt(u)), f--;
              for (; d--; ) {
                if (y === u || (u !== null && y === u.alternate)) break t;
                (y = Xt(y)), (u = Xt(u));
              }
              y = null;
            }
          else y = null;
          v !== null && Yo(p, h, v, y, !1),
            g !== null && k !== null && Yo(p, k, g, y, !0);
        }
      }
      e: {
        if (
          ((h = c ? rn(c) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var T = lp;
        else if (Vo(h))
          if (Ru) T = up;
          else {
            T = op;
            var x = sp;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (T = ap);
        if (T && (T = T(e, c))) {
          Du(p, T, n, m);
          break e;
        }
        x && x(e, h, c),
          e === "focusout" &&
            (x = h._wrapperState) &&
            x.controlled &&
            h.type === "number" &&
            Ol(h, "number", h.value);
      }
      switch (((x = c ? rn(c) : window), e)) {
        case "focusin":
          (Vo(x) || x.contentEditable === "true") &&
            ((tn = x), (bl = c), (Un = null));
          break;
        case "focusout":
          Un = bl = tn = null;
          break;
        case "mousedown":
          Gl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Gl = !1), Uo(p, n, m);
          break;
        case "selectionchange":
          if (fp) break;
        case "keydown":
        case "keyup":
          Uo(p, n, m);
      }
      var C;
      if (Hs)
        e: {
          switch (e) {
            case "compositionstart":
              var w = "onCompositionStart";
              break e;
            case "compositionend":
              w = "onCompositionEnd";
              break e;
            case "compositionupdate":
              w = "onCompositionUpdate";
              break e;
          }
          w = void 0;
        }
      else
        en
          ? ju(e, n) && (w = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (w = "onCompositionStart");
      w &&
        (Iu &&
          n.locale !== "ko" &&
          (en || w !== "onCompositionStart"
            ? w === "onCompositionEnd" && en && (C = zu())
            : ((ht = m),
              (Bs = "value" in ht ? ht.value : ht.textContent),
              (en = !0))),
        (x = si(c, w)),
        0 < x.length &&
          ((w = new Do(w, e, null, n, m)),
          p.push({ event: w, listeners: x }),
          C ? (w.data = C) : ((C = Au(n)), C !== null && (w.data = C)))),
        (C = ep ? tp(e, n) : np(e, n)) &&
          ((c = si(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new Do("onBeforeInput", "beforeinput", null, n, m)),
            p.push({ event: m, listeners: c }),
            (m.data = C)));
    }
    Qu(p, t);
  });
}
function sr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function si(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Zn(e, n)),
      l != null && r.unshift(sr(e, l, i)),
      (l = Zn(e, t)),
      l != null && r.push(sr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function Xt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yo(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      o = a.alternate,
      c = a.stateNode;
    if (o !== null && o === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((o = Zn(n, l)), o != null && s.unshift(sr(n, o, a)))
        : i || ((o = Zn(n, l)), o != null && s.push(sr(n, o, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var vp = /\r\n?/g,
  gp = /\u0000|\uFFFD/g;
function qo(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      vp,
      `
`
    )
    .replace(gp, "");
}
function Or(e, t, n) {
  if (((t = qo(t)), qo(e) !== t && n)) throw Error(L(425));
}
function oi() {}
var Ul = null,
  Wl = null;
function Ql(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Yl = typeof setTimeout == "function" ? setTimeout : void 0,
  yp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ko = typeof Promise == "function" ? Promise : void 0,
  Sp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ko < "u"
      ? function (e) {
          return Ko.resolve(null).then(e).catch(wp);
        }
      : Yl;
function wp(e) {
  setTimeout(function () {
    throw e;
  });
}
function il(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), nr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  nr(t);
}
function Et(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Xo(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var _n = Math.random().toString(36).slice(2),
  We = "__reactFiber$" + _n,
  or = "__reactProps$" + _n,
  st = "__reactContainer$" + _n,
  ql = "__reactEvents$" + _n,
  xp = "__reactListeners$" + _n,
  Ep = "__reactHandles$" + _n;
function At(e) {
  var t = e[We];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[st] || n[We])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Xo(e); e !== null; ) {
          if ((n = e[We])) return n;
          e = Xo(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function yr(e) {
  return (
    (e = e[We] || e[st]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Oi(e) {
  return e[or] || null;
}
var Kl = [],
  ln = -1;
function Ot(e) {
  return { current: e };
}
function W(e) {
  0 > ln || ((e.current = Kl[ln]), (Kl[ln] = null), ln--);
}
function G(e, t) {
  ln++, (Kl[ln] = e.current), (e.current = t);
}
var Mt = {},
  de = Ot(Mt),
  we = Ot(!1),
  Ht = Mt;
function yn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function xe(e) {
  return (e = e.childContextTypes), e != null;
}
function ai() {
  W(we), W(de);
}
function Jo(e, t, n) {
  if (de.current !== Mt) throw Error(L(168));
  G(de, t), G(we, n);
}
function qu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, sf(e) || "Unknown", i));
  return X({}, n, r);
}
function ui(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mt),
    (Ht = de.current),
    G(de, e),
    G(we, we.current),
    !0
  );
}
function Zo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = qu(e, t, Ht)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(we),
      W(de),
      G(de, e))
    : W(we),
    G(we, n);
}
var tt = null,
  zi = !1,
  ll = !1;
function Ku(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
function Cp(e) {
  (zi = !0), Ku(e);
}
function zt() {
  if (!ll && tt !== null) {
    ll = !0;
    var e = 0,
      t = V;
    try {
      var n = tt;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (tt = null), (zi = !1);
    } catch (i) {
      throw (tt !== null && (tt = tt.slice(e + 1)), xu(js, zt), i);
    } finally {
      (V = t), (ll = !1);
    }
  }
  return null;
}
var sn = [],
  on = 0,
  ci = null,
  di = 0,
  Oe = [],
  ze = 0,
  $t = null,
  nt = 1,
  rt = "";
function It(e, t) {
  (sn[on++] = di), (sn[on++] = ci), (ci = e), (di = t);
}
function Xu(e, t, n) {
  (Oe[ze++] = nt), (Oe[ze++] = rt), (Oe[ze++] = $t), ($t = e);
  var r = nt;
  e = rt;
  var i = 32 - He(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - He(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (nt = (1 << (32 - He(t) + i)) | (n << i) | r),
      (rt = l + e);
  } else (nt = (1 << l) | (n << i) | r), (rt = e);
}
function bs(e) {
  e.return !== null && (It(e, 1), Xu(e, 1, 0));
}
function Gs(e) {
  for (; e === ci; )
    (ci = sn[--on]), (sn[on] = null), (di = sn[--on]), (sn[on] = null);
  for (; e === $t; )
    ($t = Oe[--ze]),
      (Oe[ze] = null),
      (rt = Oe[--ze]),
      (Oe[ze] = null),
      (nt = Oe[--ze]),
      (Oe[ze] = null);
}
var _e = null,
  Te = null,
  Q = !1,
  Ve = null;
function Ju(e, t) {
  var n = Ie(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ea(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (_e = e), (Te = Et(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (Te = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = $t !== null ? { id: nt, overflow: rt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_e = e),
            (Te = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Xl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jl(e) {
  if (Q) {
    var t = Te;
    if (t) {
      var n = t;
      if (!ea(e, t)) {
        if (Xl(e)) throw Error(L(418));
        t = Et(n.nextSibling);
        var r = _e;
        t && ea(e, t)
          ? Ju(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (_e = e));
      }
    } else {
      if (Xl(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (_e = e);
    }
  }
}
function ta(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _e = e;
}
function zr(e) {
  if (e !== _e) return !1;
  if (!Q) return ta(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ql(e.type, e.memoizedProps))),
    t && (t = Te))
  ) {
    if (Xl(e)) throw (Zu(), Error(L(418)));
    for (; t; ) Ju(e, t), (t = Et(t.nextSibling));
  }
  if ((ta(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Te = Et(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Te = null;
    }
  } else Te = _e ? Et(e.stateNode.nextSibling) : null;
  return !0;
}
function Zu() {
  for (var e = Te; e; ) e = Et(e.nextSibling);
}
function Sn() {
  (Te = _e = null), (Q = !1);
}
function Us(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
var kp = ut.ReactCurrentBatchConfig;
function Be(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var fi = Ot(null),
  pi = null,
  an = null,
  Ws = null;
function Qs() {
  Ws = an = pi = null;
}
function Ys(e) {
  var t = fi.current;
  W(fi), (e._currentValue = t);
}
function Zl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function hn(e, t) {
  (pi = e),
    (Ws = an = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Se = !0), (e.firstContext = null));
}
function Ae(e) {
  var t = e._currentValue;
  if (Ws !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), an === null)) {
      if (pi === null) throw Error(L(308));
      (an = e), (pi.dependencies = { lanes: 0, firstContext: e });
    } else an = an.next = e;
  return t;
}
var Dt = null;
function qs(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function ec(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), qs(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    ot(e, r)
  );
}
function ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ft = !1;
function Ks(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function tc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function it(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      ot(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), qs(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ot(e, n)
  );
}
function Ur(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), As(e, n);
  }
}
function na(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function mi(e, t, n, r) {
  var i = e.updateQueue;
  ft = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var o = a,
      c = o.next;
    (o.next = null), s === null ? (l = c) : (s.next = c), (s = o);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (a = m.lastBaseUpdate),
      a !== s &&
        (a === null ? (m.firstBaseUpdate = c) : (a.next = c),
        (m.lastBaseUpdate = o)));
  }
  if (l !== null) {
    var p = i.baseState;
    (s = 0), (m = c = o = null), (a = l);
    do {
      var h = a.lane,
        v = a.eventTime;
      if ((r & h) === h) {
        m !== null &&
          (m = m.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            y = a;
          switch (((h = t), (v = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                p = g.call(v, p, h);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (h = typeof g == "function" ? g.call(v, p, h) : g),
                h == null)
              )
                break e;
              p = X({}, p, h);
              break e;
            case 2:
              ft = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          m === null ? ((c = m = v), (o = p)) : (m = m.next = v),
          (s |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (o = p),
      (i.baseState = o),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = m),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (Gt |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function ra(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(L(191, i));
        i.call(r);
      }
    }
}
var nc = new eu.Component().refs;
function es(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ii = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Tt(e),
      l = it(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Ct(e, l, i)),
      t !== null && ($e(t, e, i, r), Ur(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Tt(e),
      l = it(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Ct(e, l, i)),
      t !== null && ($e(t, e, i, r), Ur(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = Tt(e),
      i = it(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ct(e, i, r)),
      t !== null && ($e(t, e, r, n), Ur(t, e, r));
  },
};
function ia(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ir(n, r) || !ir(i, l)
      : !0
  );
}
function rc(e, t, n) {
  var r = !1,
    i = Mt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ae(l))
      : ((i = xe(t) ? Ht : de.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? yn(e, i) : Mt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ii),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function la(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ii.enqueueReplaceState(t, t.state, null);
}
function ts(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = nc), Ks(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = Ae(l))
    : ((l = xe(t) ? Ht : de.current), (i.context = yn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (es(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ii.enqueueReplaceState(i, i.state, null),
      mi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function In(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === nc && (a = i.refs = {}),
              s === null ? delete a[l] : (a[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Ir(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sa(e) {
  var t = e._init;
  return t(e._payload);
}
function ic(e) {
  function t(u, d) {
    if (e) {
      var f = u.deletions;
      f === null ? ((u.deletions = [d]), (u.flags |= 16)) : f.push(d);
    }
  }
  function n(u, d) {
    if (!e) return null;
    for (; d !== null; ) t(u, d), (d = d.sibling);
    return null;
  }
  function r(u, d) {
    for (u = new Map(); d !== null; )
      d.key !== null ? u.set(d.key, d) : u.set(d.index, d), (d = d.sibling);
    return u;
  }
  function i(u, d) {
    return (u = _t(u, d)), (u.index = 0), (u.sibling = null), u;
  }
  function l(u, d, f) {
    return (
      (u.index = f),
      e
        ? ((f = u.alternate),
          f !== null
            ? ((f = f.index), f < d ? ((u.flags |= 2), d) : f)
            : ((u.flags |= 2), d))
        : ((u.flags |= 1048576), d)
    );
  }
  function s(u) {
    return e && u.alternate === null && (u.flags |= 2), u;
  }
  function a(u, d, f, S) {
    return d === null || d.tag !== 6
      ? ((d = fl(f, u.mode, S)), (d.return = u), d)
      : ((d = i(d, f)), (d.return = u), d);
  }
  function o(u, d, f, S) {
    var T = f.type;
    return T === Zt
      ? m(u, d, f.props.children, S, f.key)
      : d !== null &&
        (d.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === dt &&
            sa(T) === d.type))
      ? ((S = i(d, f.props)), (S.ref = In(u, d, f)), (S.return = u), S)
      : ((S = Xr(f.type, f.key, f.props, null, u.mode, S)),
        (S.ref = In(u, d, f)),
        (S.return = u),
        S);
  }
  function c(u, d, f, S) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== f.containerInfo ||
      d.stateNode.implementation !== f.implementation
      ? ((d = pl(f, u.mode, S)), (d.return = u), d)
      : ((d = i(d, f.children || [])), (d.return = u), d);
  }
  function m(u, d, f, S, T) {
    return d === null || d.tag !== 7
      ? ((d = Vt(f, u.mode, S, T)), (d.return = u), d)
      : ((d = i(d, f)), (d.return = u), d);
  }
  function p(u, d, f) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = fl("" + d, u.mode, f)), (d.return = u), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Er:
          return (
            (f = Xr(d.type, d.key, d.props, null, u.mode, f)),
            (f.ref = In(u, null, d)),
            (f.return = u),
            f
          );
        case Jt:
          return (d = pl(d, u.mode, f)), (d.return = u), d;
        case dt:
          var S = d._init;
          return p(u, S(d._payload), f);
      }
      if (Bn(d) || Ln(d))
        return (d = Vt(d, u.mode, f, null)), (d.return = u), d;
      Ir(u, d);
    }
    return null;
  }
  function h(u, d, f, S) {
    var T = d !== null ? d.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return T !== null ? null : a(u, d, "" + f, S);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Er:
          return f.key === T ? o(u, d, f, S) : null;
        case Jt:
          return f.key === T ? c(u, d, f, S) : null;
        case dt:
          return (T = f._init), h(u, d, T(f._payload), S);
      }
      if (Bn(f) || Ln(f)) return T !== null ? null : m(u, d, f, S, null);
      Ir(u, f);
    }
    return null;
  }
  function v(u, d, f, S, T) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (u = u.get(f) || null), a(d, u, "" + S, T);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Er:
          return (u = u.get(S.key === null ? f : S.key) || null), o(d, u, S, T);
        case Jt:
          return (u = u.get(S.key === null ? f : S.key) || null), c(d, u, S, T);
        case dt:
          var x = S._init;
          return v(u, d, f, x(S._payload), T);
      }
      if (Bn(S) || Ln(S)) return (u = u.get(f) || null), m(d, u, S, T, null);
      Ir(d, S);
    }
    return null;
  }
  function g(u, d, f, S) {
    for (
      var T = null, x = null, C = d, w = (d = 0), E = null;
      C !== null && w < f.length;
      w++
    ) {
      C.index > w ? ((E = C), (C = null)) : (E = C.sibling);
      var M = h(u, C, f[w], S);
      if (M === null) {
        C === null && (C = E);
        break;
      }
      e && C && M.alternate === null && t(u, C),
        (d = l(M, d, w)),
        x === null ? (T = M) : (x.sibling = M),
        (x = M),
        (C = E);
    }
    if (w === f.length) return n(u, C), Q && It(u, w), T;
    if (C === null) {
      for (; w < f.length; w++)
        (C = p(u, f[w], S)),
          C !== null &&
            ((d = l(C, d, w)), x === null ? (T = C) : (x.sibling = C), (x = C));
      return Q && It(u, w), T;
    }
    for (C = r(u, C); w < f.length; w++)
      (E = v(C, u, w, f[w], S)),
        E !== null &&
          (e && E.alternate !== null && C.delete(E.key === null ? w : E.key),
          (d = l(E, d, w)),
          x === null ? (T = E) : (x.sibling = E),
          (x = E));
    return (
      e &&
        C.forEach(function (_) {
          return t(u, _);
        }),
      Q && It(u, w),
      T
    );
  }
  function y(u, d, f, S) {
    var T = Ln(f);
    if (typeof T != "function") throw Error(L(150));
    if (((f = T.call(f)), f == null)) throw Error(L(151));
    for (
      var x = (T = null), C = d, w = (d = 0), E = null, M = f.next();
      C !== null && !M.done;
      w++, M = f.next()
    ) {
      C.index > w ? ((E = C), (C = null)) : (E = C.sibling);
      var _ = h(u, C, M.value, S);
      if (_ === null) {
        C === null && (C = E);
        break;
      }
      e && C && _.alternate === null && t(u, C),
        (d = l(_, d, w)),
        x === null ? (T = _) : (x.sibling = _),
        (x = _),
        (C = E);
    }
    if (M.done) return n(u, C), Q && It(u, w), T;
    if (C === null) {
      for (; !M.done; w++, M = f.next())
        (M = p(u, M.value, S)),
          M !== null &&
            ((d = l(M, d, w)), x === null ? (T = M) : (x.sibling = M), (x = M));
      return Q && It(u, w), T;
    }
    for (C = r(u, C); !M.done; w++, M = f.next())
      (M = v(C, u, w, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && C.delete(M.key === null ? w : M.key),
          (d = l(M, d, w)),
          x === null ? (T = M) : (x.sibling = M),
          (x = M));
    return (
      e &&
        C.forEach(function (P) {
          return t(u, P);
        }),
      Q && It(u, w),
      T
    );
  }
  function k(u, d, f, S) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Zt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case Er:
          e: {
            for (var T = f.key, x = d; x !== null; ) {
              if (x.key === T) {
                if (((T = f.type), T === Zt)) {
                  if (x.tag === 7) {
                    n(u, x.sibling),
                      (d = i(x, f.props.children)),
                      (d.return = u),
                      (u = d);
                    break e;
                  }
                } else if (
                  x.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === dt &&
                    sa(T) === x.type)
                ) {
                  n(u, x.sibling),
                    (d = i(x, f.props)),
                    (d.ref = In(u, x, f)),
                    (d.return = u),
                    (u = d);
                  break e;
                }
                n(u, x);
                break;
              } else t(u, x);
              x = x.sibling;
            }
            f.type === Zt
              ? ((d = Vt(f.props.children, u.mode, S, f.key)),
                (d.return = u),
                (u = d))
              : ((S = Xr(f.type, f.key, f.props, null, u.mode, S)),
                (S.ref = In(u, d, f)),
                (S.return = u),
                (u = S));
          }
          return s(u);
        case Jt:
          e: {
            for (x = f.key; d !== null; ) {
              if (d.key === x)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === f.containerInfo &&
                  d.stateNode.implementation === f.implementation
                ) {
                  n(u, d.sibling),
                    (d = i(d, f.children || [])),
                    (d.return = u),
                    (u = d);
                  break e;
                } else {
                  n(u, d);
                  break;
                }
              else t(u, d);
              d = d.sibling;
            }
            (d = pl(f, u.mode, S)), (d.return = u), (u = d);
          }
          return s(u);
        case dt:
          return (x = f._init), k(u, d, x(f._payload), S);
      }
      if (Bn(f)) return g(u, d, f, S);
      if (Ln(f)) return y(u, d, f, S);
      Ir(u, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        d !== null && d.tag === 6
          ? (n(u, d.sibling), (d = i(d, f)), (d.return = u), (u = d))
          : (n(u, d), (d = fl(f, u.mode, S)), (d.return = u), (u = d)),
        s(u))
      : n(u, d);
  }
  return k;
}
var wn = ic(!0),
  lc = ic(!1),
  Sr = {},
  qe = Ot(Sr),
  ar = Ot(Sr),
  ur = Ot(Sr);
function Rt(e) {
  if (e === Sr) throw Error(L(174));
  return e;
}
function Xs(e, t) {
  switch ((G(ur, t), G(ar, e), G(qe, Sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Il(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Il(t, e));
  }
  W(qe), G(qe, t);
}
function xn() {
  W(qe), W(ar), W(ur);
}
function sc(e) {
  Rt(ur.current);
  var t = Rt(qe.current),
    n = Il(t, e.type);
  t !== n && (G(ar, e), G(qe, n));
}
function Js(e) {
  ar.current === e && (W(qe), W(ar));
}
var q = Ot(0);
function hi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var sl = [];
function Zs() {
  for (var e = 0; e < sl.length; e++)
    sl[e]._workInProgressVersionPrimary = null;
  sl.length = 0;
}
var Wr = ut.ReactCurrentDispatcher,
  ol = ut.ReactCurrentBatchConfig,
  bt = 0,
  K = null,
  te = null,
  re = null,
  vi = !1,
  Wn = !1,
  cr = 0,
  Tp = 0;
function ae() {
  throw Error(L(321));
}
function eo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!be(e[n], t[n])) return !1;
  return !0;
}
function to(e, t, n, r, i, l) {
  if (
    ((bt = l),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wr.current = e === null || e.memoizedState === null ? Mp : Np),
    (e = n(r, i)),
    Wn)
  ) {
    l = 0;
    do {
      if (((Wn = !1), (cr = 0), 25 <= l)) throw Error(L(301));
      (l += 1),
        (re = te = null),
        (t.updateQueue = null),
        (Wr.current = Op),
        (e = n(r, i));
    } while (Wn);
  }
  if (
    ((Wr.current = gi),
    (t = te !== null && te.next !== null),
    (bt = 0),
    (re = te = K = null),
    (vi = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function no() {
  var e = cr !== 0;
  return (cr = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (K.memoizedState = re = e) : (re = re.next = e), re;
}
function De() {
  if (te === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = re === null ? K.memoizedState : re.next;
  if (t !== null) (re = t), (te = e);
  else {
    if (e === null) throw Error(L(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      re === null ? (K.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function al(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = te,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = l.next), (l.next = s);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var a = (s = null),
      o = null,
      c = l;
    do {
      var m = c.lane;
      if ((bt & m) === m)
        o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var p = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        o === null ? ((a = o = p), (s = r)) : (o = o.next = p),
          (K.lanes |= m),
          (Gt |= m);
      }
      c = c.next;
    } while (c !== null && c !== l);
    o === null ? (s = r) : (o.next = a),
      be(r, t.memoizedState) || (Se = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = o),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (K.lanes |= l), (Gt |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ul(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    be(l, t.memoizedState) || (Se = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function oc() {}
function ac(e, t) {
  var n = K,
    r = De(),
    i = t(),
    l = !be(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (Se = !0)),
    (r = r.queue),
    ro(dc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fr(9, cc.bind(null, n, r, i, t), void 0, null),
      ie === null)
    )
      throw Error(L(349));
    bt & 30 || uc(n, t, i);
  }
  return i;
}
function uc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function cc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), fc(t) && pc(e);
}
function dc(e, t, n) {
  return n(function () {
    fc(t) && pc(e);
  });
}
function fc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !be(e, n);
  } catch {
    return !0;
  }
}
function pc(e) {
  var t = ot(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function oa(e) {
  var t = Ue();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Lp.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function fr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function mc() {
  return De().memoizedState;
}
function Qr(e, t, n, r) {
  var i = Ue();
  (K.flags |= e),
    (i.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r));
}
function ji(e, t, n, r) {
  var i = De();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (te !== null) {
    var s = te.memoizedState;
    if (((l = s.destroy), r !== null && eo(r, s.deps))) {
      i.memoizedState = fr(t, n, l, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = fr(1 | t, n, l, r));
}
function aa(e, t) {
  return Qr(8390656, 8, e, t);
}
function ro(e, t) {
  return ji(2048, 8, e, t);
}
function hc(e, t) {
  return ji(4, 2, e, t);
}
function vc(e, t) {
  return ji(4, 4, e, t);
}
function gc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function yc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ji(4, 4, gc.bind(null, t, e), n)
  );
}
function io() {}
function Sc(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && eo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wc(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && eo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xc(e, t, n) {
  return bt & 21
    ? (be(n, t) || ((n = ku()), (K.lanes |= n), (Gt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Se = !0)), (e.memoizedState = n));
}
function _p(e, t) {
  var n = V;
  (V = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ol.transition;
  ol.transition = {};
  try {
    e(!1), t();
  } finally {
    (V = n), (ol.transition = r);
  }
}
function Ec() {
  return De().memoizedState;
}
function Pp(e, t, n) {
  var r = Tt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Cc(e))
  )
    kc(t, n);
  else if (((n = ec(e, t, n, r)), n !== null)) {
    var i = me();
    $e(n, e, r, i), Tc(n, t, r);
  }
}
function Lp(e, t, n) {
  var r = Tt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cc(e)) kc(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = l(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), be(a, s))) {
          var o = t.interleaved;
          o === null
            ? ((i.next = i), qs(t))
            : ((i.next = o.next), (o.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = ec(e, t, i, r)),
      n !== null && ((i = me()), $e(n, e, r, i), Tc(n, t, r));
  }
}
function Cc(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function kc(e, t) {
  Wn = vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Tc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), As(e, n);
  }
}
var gi = {
    readContext: Ae,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1,
  },
  Mp = {
    readContext: Ae,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ae,
    useEffect: aa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qr(4194308, 4, gc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Pp.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: oa,
    useDebugValue: io,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = oa(!1),
        t = e[0];
      return (e = _p.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = Ue();
      if (Q) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), ie === null)) throw Error(L(349));
        bt & 30 || uc(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        aa(dc.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        fr(9, cc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = ie.identifierPrefix;
      if (Q) {
        var n = rt,
          r = nt;
        (n = (r & ~(1 << (32 - He(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = cr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Tp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Np = {
    readContext: Ae,
    useCallback: Sc,
    useContext: Ae,
    useEffect: ro,
    useImperativeHandle: yc,
    useInsertionEffect: hc,
    useLayoutEffect: vc,
    useMemo: wc,
    useReducer: al,
    useRef: mc,
    useState: function () {
      return al(dr);
    },
    useDebugValue: io,
    useDeferredValue: function (e) {
      var t = De();
      return xc(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = al(dr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: oc,
    useSyncExternalStore: ac,
    useId: Ec,
    unstable_isNewReconciler: !1,
  },
  Op = {
    readContext: Ae,
    useCallback: Sc,
    useContext: Ae,
    useEffect: ro,
    useImperativeHandle: yc,
    useInsertionEffect: hc,
    useLayoutEffect: vc,
    useMemo: wc,
    useReducer: ul,
    useRef: mc,
    useState: function () {
      return ul(dr);
    },
    useDebugValue: io,
    useDeferredValue: function (e) {
      var t = De();
      return te === null ? (t.memoizedState = e) : xc(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = ul(dr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: oc,
    useSyncExternalStore: ac,
    useId: Ec,
    unstable_isNewReconciler: !1,
  };
function En(e, t) {
  try {
    var n = "",
      r = t;
    do (n += lf(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function cl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ns(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var zp = typeof WeakMap == "function" ? WeakMap : Map;
function _c(e, t, n) {
  (n = it(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Si || ((Si = !0), (fs = r)), ns(e, t);
    }),
    n
  );
}
function Pc(e, t, n) {
  (n = it(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ns(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ns(e, t),
          typeof r != "function" &&
            (kt === null ? (kt = new Set([this])) : kt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ua(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zp();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Wp.bind(null, e, t, n)), t.then(e, e));
}
function ca(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function da(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = it(-1, 1)), (t.tag = 2), Ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ip = ut.ReactCurrentOwner,
  Se = !1;
function pe(e, t, n, r) {
  t.child = e === null ? lc(t, null, n, r) : wn(t, e.child, n, r);
}
function fa(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    hn(t, i),
    (r = to(e, t, n, r, l, i)),
    (n = no()),
    e !== null && !Se
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        at(e, t, i))
      : (Q && n && bs(t), (t.flags |= 1), pe(e, t, r, i), t.child)
  );
}
function pa(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !po(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Lc(e, t, l, r, i))
      : ((e = Xr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ir), n(s, r) && e.ref === t.ref)
    )
      return at(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = _t(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Lc(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (ir(l, r) && e.ref === t.ref)
      if (((Se = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (Se = !0);
      else return (t.lanes = e.lanes), at(e, t, i);
  }
  return rs(e, t, n, r, i);
}
function Mc(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(cn, Ce),
        (Ce |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          G(cn, Ce),
          (Ce |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        G(cn, Ce),
        (Ce |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(cn, Ce),
      (Ce |= r);
  return pe(e, t, i, n), t.child;
}
function Nc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function rs(e, t, n, r, i) {
  var l = xe(n) ? Ht : de.current;
  return (
    (l = yn(t, l)),
    hn(t, i),
    (n = to(e, t, n, r, l, i)),
    (r = no()),
    e !== null && !Se
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        at(e, t, i))
      : (Q && r && bs(t), (t.flags |= 1), pe(e, t, n, i), t.child)
  );
}
function ma(e, t, n, r, i) {
  if (xe(n)) {
    var l = !0;
    ui(t);
  } else l = !1;
  if ((hn(t, i), t.stateNode === null))
    Yr(e, t), rc(t, n, r), ts(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var o = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ae(c))
      : ((c = xe(n) ? Ht : de.current), (c = yn(t, c)));
    var m = n.getDerivedStateFromProps,
      p =
        typeof m == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || o !== c) && la(t, s, r, c)),
      (ft = !1);
    var h = t.memoizedState;
    (s.state = h),
      mi(t, r, s, i),
      (o = t.memoizedState),
      a !== r || h !== o || we.current || ft
        ? (typeof m == "function" && (es(t, n, m, r), (o = t.memoizedState)),
          (a = ft || ia(t, n, a, r, h, o, c))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = o)),
          (s.props = r),
          (s.state = o),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      tc(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Be(t.type, a)),
      (s.props = c),
      (p = t.pendingProps),
      (h = s.context),
      (o = n.contextType),
      typeof o == "object" && o !== null
        ? (o = Ae(o))
        : ((o = xe(n) ? Ht : de.current), (o = yn(t, o)));
    var v = n.getDerivedStateFromProps;
    (m =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== p || h !== o) && la(t, s, r, o)),
      (ft = !1),
      (h = t.memoizedState),
      (s.state = h),
      mi(t, r, s, i);
    var g = t.memoizedState;
    a !== p || h !== g || we.current || ft
      ? (typeof v == "function" && (es(t, n, v, r), (g = t.memoizedState)),
        (c = ft || ia(t, n, c, r, h, g, o) || !1)
          ? (m ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, o),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, o)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = o),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return is(e, t, n, r, l, i);
}
function is(e, t, n, r, i, l) {
  Nc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Zo(t, n, !1), at(e, t, l);
  (r = t.stateNode), (Ip.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = wn(t, e.child, null, l)), (t.child = wn(t, null, a, l)))
      : pe(e, t, a, l),
    (t.memoizedState = r.state),
    i && Zo(t, n, !0),
    t.child
  );
}
function Oc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Jo(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Jo(e, t.context, !1),
    Xs(e, t.containerInfo);
}
function ha(e, t, n, r, i) {
  return Sn(), Us(i), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var ls = { dehydrated: null, treeContext: null, retryLane: 0 };
function ss(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zc(e, t, n) {
  var r = t.pendingProps,
    i = q.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    G(q, i & 1),
    e === null)
  )
    return (
      Jl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = Ri(s, r, 0, null)),
              (e = Vt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ss(n)),
              (t.memoizedState = ls),
              e)
            : lo(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return jp(e, t, s, r, a, i, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var o = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = o),
          (t.deletions = null))
        : ((r = _t(i, o)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (l = _t(a, l)) : ((l = Vt(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ss(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = ls),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = _t(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function lo(e, t) {
  return (
    (t = Ri({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jr(e, t, n, r) {
  return (
    r !== null && Us(r),
    wn(t, e.child, null, n),
    (e = lo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jp(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = cl(Error(L(422)))), jr(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = Ri({ mode: "visible", children: r.children }, i, 0, null)),
        (l = Vt(l, i, s, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && wn(t, e.child, null, s),
        (t.child.memoizedState = ss(s)),
        (t.memoizedState = ls),
        l);
  if (!(t.mode & 1)) return jr(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(L(419))), (r = cl(l, r, void 0)), jr(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Se || a)) {
    if (((r = ie), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), ot(e, i), $e(r, e, i, -1));
    }
    return fo(), (r = cl(Error(L(421)))), jr(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Qp.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Te = Et(i.nextSibling)),
      (_e = t),
      (Q = !0),
      (Ve = null),
      e !== null &&
        ((Oe[ze++] = nt),
        (Oe[ze++] = rt),
        (Oe[ze++] = $t),
        (nt = e.id),
        (rt = e.overflow),
        ($t = t)),
      (t = lo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function va(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zl(e.return, t, n);
}
function dl(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function Ic(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((pe(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && va(e, n, t);
        else if (e.tag === 19) va(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((G(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && hi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          dl(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && hi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        dl(t, !0, n, null, l);
        break;
      case "together":
        dl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Yr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function at(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ap(e, t, n) {
  switch (t.tag) {
    case 3:
      Oc(t), Sn();
      break;
    case 5:
      sc(t);
      break;
    case 1:
      xe(t.type) && ui(t);
      break;
    case 4:
      Xs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      G(fi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? zc(e, t, n)
          : (G(q, q.current & 1),
            (e = at(e, t, n)),
            e !== null ? e.sibling : null);
      G(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ic(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        G(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Mc(e, t, n);
  }
  return at(e, t, n);
}
var jc, os, Ac, Dc;
jc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
os = function () {};
Ac = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Rt(qe.current);
    var l = null;
    switch (n) {
      case "input":
        (i = Ml(e, i)), (r = Ml(e, r)), (l = []);
        break;
      case "select":
        (i = X({}, i, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = zl(e, i)), (r = zl(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = oi);
    }
    jl(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Xn.hasOwnProperty(c)
              ? l || (l = [])
              : (l = l || []).push(c, null));
    for (c in r) {
      var o = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && o !== a && (o != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (o && o.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in o)
              o.hasOwnProperty(s) &&
                a[s] !== o[s] &&
                (n || (n = {}), (n[s] = o[s]));
          } else n || (l || (l = []), l.push(c, n)), (n = o);
        else
          c === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0),
              (a = a ? a.__html : void 0),
              o != null && a !== o && (l = l || []).push(c, o))
            : c === "children"
            ? (typeof o != "string" && typeof o != "number") ||
              (l = l || []).push(c, "" + o)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Xn.hasOwnProperty(c)
                ? (o != null && c === "onScroll" && U("scroll", e),
                  l || a === o || (l = []))
                : (l = l || []).push(c, o));
    }
    n && (l = l || []).push("style", n);
    var c = l;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Dc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jn(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Dp(e, t, n) {
  var r = t.pendingProps;
  switch ((Gs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return xe(t.type) && ai(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        xn(),
        W(we),
        W(de),
        Zs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ve !== null && (hs(Ve), (Ve = null)))),
        os(e, t),
        ue(t),
        null
      );
    case 5:
      Js(t);
      var i = Rt(ur.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ac(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return ue(t), null;
        }
        if (((e = Rt(qe.current)), zr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[We] = t), (r[or] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Vn.length; i++) U(Vn[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              To(r, l), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Po(r, l), U("invalid", r);
          }
          jl(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Or(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Or(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Xn.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              Cr(r), _o(r, l, !0);
              break;
            case "textarea":
              Cr(r), Lo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = oi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = uu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[We] = t),
            (e[or] = r),
            jc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Al(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Vn.length; i++) U(Vn[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                To(e, r), (i = Ml(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = X({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Po(e, r), (i = zl(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            jl(n, i), (a = i);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var o = a[l];
                l === "style"
                  ? fu(e, o)
                  : l === "dangerouslySetInnerHTML"
                  ? ((o = o ? o.__html : void 0), o != null && cu(e, o))
                  : l === "children"
                  ? typeof o == "string"
                    ? (n !== "textarea" || o !== "") && Jn(e, o)
                    : typeof o == "number" && Jn(e, "" + o)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Xn.hasOwnProperty(l)
                      ? o != null && l === "onScroll" && U("scroll", e)
                      : o != null && Ms(e, l, o, s));
              }
            switch (n) {
              case "input":
                Cr(e), _o(e, r, !1);
                break;
              case "textarea":
                Cr(e), Lo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? dn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      dn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = oi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) Dc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Rt(ur.current)), Rt(qe.current), zr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[We] = t),
            (l = r.nodeValue !== n) && ((e = _e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Or(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Or(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[We] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (W(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Te !== null && t.mode & 1 && !(t.flags & 128))
          Zu(), Sn(), (t.flags |= 98560), (l = !1);
        else if (((l = zr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(L(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(L(317));
            l[We] = t;
          } else
            Sn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (l = !1);
        } else Ve !== null && (hs(Ve), (Ve = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? ne === 0 && (ne = 3) : fo())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        xn(), os(e, t), e === null && lr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return Ys(t.type._context), ue(t), null;
    case 17:
      return xe(t.type) && ai(), ue(t), null;
    case 19:
      if ((W(q), (l = t.memoizedState), l === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) jn(l, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = hi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    jn(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Z() > Cn &&
            ((t.flags |= 128), (r = !0), jn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = hi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !Q)
            )
              return ue(t), null;
          } else
            2 * Z() - l.renderingStartTime > Cn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), jn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Z()),
          (t.sibling = null),
          (n = q.current),
          G(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        co(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ce & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function Rp(e, t) {
  switch ((Gs(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && ai(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        xn(),
        W(we),
        W(de),
        Zs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Js(t), null;
    case 13:
      if ((W(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(L(340));
        Sn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(q), null;
    case 4:
      return xn(), null;
    case 10:
      return Ys(t.type._context), null;
    case 22:
    case 23:
      return co(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ar = !1,
  ce = !1,
  Bp = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function as(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var ga = !1;
function Fp(e, t) {
  if (((Ul = ii), (e = Vu()), $s(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            o = -1,
            c = 0,
            m = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (i !== 0 && p.nodeType !== 3) || (a = s + i),
                p !== l || (r !== 0 && p.nodeType !== 3) || (o = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (h = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++c === i && (a = s),
                h === l && ++m === r && (o = s),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = v;
          }
          n = a === -1 || o === -1 ? null : { start: a, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wl = { focusedElem: e, selectionRange: n }, ii = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    k = g.memoizedState,
                    u = t.stateNode,
                    d = u.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Be(t.type, y),
                      k
                    );
                  u.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (S) {
          J(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (g = ga), (ga = !1), g;
}
function Qn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && as(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ai(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function us(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Rc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Rc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[We], delete t[or], delete t[ql], delete t[xp], delete t[Ep])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Bc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ya(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function cs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = oi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cs(e, t, n), e = e.sibling; e !== null; ) cs(e, t, n), (e = e.sibling);
}
function ds(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ds(e, t, n), e = e.sibling; e !== null; ) ds(e, t, n), (e = e.sibling);
}
var le = null,
  Fe = !1;
function ct(e, t, n) {
  for (n = n.child; n !== null; ) Fc(e, t, n), (n = n.sibling);
}
function Fc(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function")
    try {
      Ye.onCommitFiberUnmount(Pi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ce || un(n, t);
    case 6:
      var r = le,
        i = Fe;
      (le = null),
        ct(e, t, n),
        (le = r),
        (Fe = i),
        le !== null &&
          (Fe
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Fe
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? il(e.parentNode, n)
              : e.nodeType === 1 && il(e, n),
            nr(e))
          : il(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (i = Fe),
        (le = n.stateNode.containerInfo),
        (Fe = !0),
        ct(e, t, n),
        (le = r),
        (Fe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            s = l.destroy;
          (l = l.tag),
            s !== void 0 && (l & 2 || l & 4) && as(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      ct(e, t, n);
      break;
    case 1:
      if (
        !ce &&
        (un(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          J(n, t, a);
        }
      ct(e, t, n);
      break;
    case 21:
      ct(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ce = (r = ce) || n.memoizedState !== null), ct(e, t, n), (ce = r))
        : ct(e, t, n);
      break;
    default:
      ct(e, t, n);
  }
}
function Sa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Bp()),
      t.forEach(function (r) {
        var i = Yp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (le = a.stateNode), (Fe = !1);
              break e;
            case 3:
              (le = a.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (le = a.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          a = a.return;
        }
        if (le === null) throw Error(L(160));
        Fc(l, s, i), (le = null), (Fe = !1);
        var o = i.alternate;
        o !== null && (o.return = null), (i.return = null);
      } catch (c) {
        J(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Vc(t, e), (t = t.sibling);
}
function Vc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), Ge(e), r & 4)) {
        try {
          Qn(3, e, e.return), Ai(3, e);
        } catch (y) {
          J(e, e.return, y);
        }
        try {
          Qn(5, e, e.return);
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 1:
      Re(t, e), Ge(e), r & 512 && n !== null && un(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        Ge(e),
        r & 512 && n !== null && un(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Jn(i, "");
        } catch (y) {
          J(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          a = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && ou(i, l),
              Al(a, s);
            var c = Al(a, l);
            for (s = 0; s < o.length; s += 2) {
              var m = o[s],
                p = o[s + 1];
              m === "style"
                ? fu(i, p)
                : m === "dangerouslySetInnerHTML"
                ? cu(i, p)
                : m === "children"
                ? Jn(i, p)
                : Ms(i, m, p, c);
            }
            switch (a) {
              case "input":
                Nl(i, l);
                break;
              case "textarea":
                au(i, l);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null
                  ? dn(i, !!l.multiple, v, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null
                      ? dn(i, !!l.multiple, l.defaultValue, !0)
                      : dn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[or] = l;
          } catch (y) {
            J(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Re(t, e), Ge(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          nr(t.containerInfo);
        } catch (y) {
          J(e, e.return, y);
        }
      break;
    case 4:
      Re(t, e), Ge(e);
      break;
    case 13:
      Re(t, e),
        Ge(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ao = Z())),
        r & 4 && Sa(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ce = (c = ce) || m), Re(t, e), (ce = c)) : Re(t, e),
        Ge(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (z = e, m = e.child; m !== null; ) {
            for (p = z = m; z !== null; ) {
              switch (((h = z), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qn(4, h, h.return);
                  break;
                case 1:
                  un(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      J(r, n, y);
                    }
                  }
                  break;
                case 5:
                  un(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    xa(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (z = v)) : xa(p);
            }
            m = m.sibling;
          }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                (i = p.stateNode),
                  c
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = p.stateNode),
                      (o = p.memoizedProps.style),
                      (s =
                        o != null && o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (a.style.display = du("display", s)));
              } catch (y) {
                J(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (m === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (y) {
                J(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            m === p && (m = null), (p = p.return);
          }
          m === p && (m = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), Ge(e), r & 4 && Sa(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Jn(i, ""), (r.flags &= -33));
          var l = ya(e);
          ds(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = ya(e);
          cs(e, a, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (o) {
      J(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vp(e, t, n) {
  (z = e), Hc(e);
}
function Hc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var i = z,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ar;
      if (!s) {
        var a = i.alternate,
          o = (a !== null && a.memoizedState !== null) || ce;
        a = Ar;
        var c = ce;
        if (((Ar = s), (ce = o) && !c))
          for (z = i; z !== null; )
            (s = z),
              (o = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Ea(i)
                : o !== null
                ? ((o.return = s), (z = o))
                : Ea(i);
        for (; l !== null; ) (z = l), Hc(l), (l = l.sibling);
        (z = i), (Ar = a), (ce = c);
      }
      wa(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (z = l)) : wa(e);
  }
}
function wa(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ce || Ai(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ce)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && ra(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ra(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var o = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && n.focus();
                    break;
                  case "img":
                    o.src && (n.src = o.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var p = m.dehydrated;
                    p !== null && nr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        ce || (t.flags & 512 && us(t));
      } catch (h) {
        J(t, t.return, h);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function xa(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ea(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ai(4, t);
          } catch (o) {
            J(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              J(t, i, o);
            }
          }
          var l = t.return;
          try {
            us(t);
          } catch (o) {
            J(t, l, o);
          }
          break;
        case 5:
          var s = t.return;
          try {
            us(t);
          } catch (o) {
            J(t, s, o);
          }
      }
    } catch (o) {
      J(t, t.return, o);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var Hp = Math.ceil,
  yi = ut.ReactCurrentDispatcher,
  so = ut.ReactCurrentOwner,
  je = ut.ReactCurrentBatchConfig,
  F = 0,
  ie = null,
  ee = null,
  se = 0,
  Ce = 0,
  cn = Ot(0),
  ne = 0,
  pr = null,
  Gt = 0,
  Di = 0,
  oo = 0,
  Yn = null,
  ye = null,
  ao = 0,
  Cn = 1 / 0,
  et = null,
  Si = !1,
  fs = null,
  kt = null,
  Dr = !1,
  vt = null,
  wi = 0,
  qn = 0,
  ps = null,
  qr = -1,
  Kr = 0;
function me() {
  return F & 6 ? Z() : qr !== -1 ? qr : (qr = Z());
}
function Tt(e) {
  return e.mode & 1
    ? F & 2 && se !== 0
      ? se & -se
      : kp.transition !== null
      ? (Kr === 0 && (Kr = ku()), Kr)
      : ((e = V),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ou(e.type))),
        e)
    : 1;
}
function $e(e, t, n, r) {
  if (50 < qn) throw ((qn = 0), (ps = null), Error(L(185)));
  vr(e, n, r),
    (!(F & 2) || e !== ie) &&
      (e === ie && (!(F & 2) && (Di |= n), ne === 4 && mt(e, se)),
      Ee(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Cn = Z() + 500), zi && zt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  kf(e, t);
  var r = ri(e, e === ie ? se : 0);
  if (r === 0)
    n !== null && Oo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Oo(n), t === 1))
      e.tag === 0 ? Cp(Ca.bind(null, e)) : Ku(Ca.bind(null, e)),
        Sp(function () {
          !(F & 6) && zt();
        }),
        (n = null);
    else {
      switch (Tu(r)) {
        case 1:
          n = js;
          break;
        case 4:
          n = Eu;
          break;
        case 16:
          n = ni;
          break;
        case 536870912:
          n = Cu;
          break;
        default:
          n = ni;
      }
      n = qc(n, $c.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function $c(e, t) {
  if (((qr = -1), (Kr = 0), F & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (vn() && e.callbackNode !== n) return null;
  var r = ri(e, e === ie ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xi(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var l = Gc();
    (ie !== e || se !== t) && ((et = null), (Cn = Z() + 500), Ft(e, t));
    do
      try {
        Gp();
        break;
      } catch (a) {
        bc(e, a);
      }
    while (1);
    Qs(),
      (yi.current = l),
      (F = i),
      ee !== null ? (t = 0) : ((ie = null), (se = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Vl(e)), i !== 0 && ((r = i), (t = ms(e, i)))), t === 1)
    )
      throw ((n = pr), Ft(e, 0), mt(e, r), Ee(e, Z()), n);
    if (t === 6) mt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !$p(i) &&
          ((t = xi(e, r)),
          t === 2 && ((l = Vl(e)), l !== 0 && ((r = l), (t = ms(e, l)))),
          t === 1))
      )
        throw ((n = pr), Ft(e, 0), mt(e, r), Ee(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          jt(e, ye, et);
          break;
        case 3:
          if (
            (mt(e, r), (r & 130023424) === r && ((t = ao + 500 - Z()), 10 < t))
          ) {
            if (ri(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Yl(jt.bind(null, e, ye, et), t);
            break;
          }
          jt(e, ye, et);
          break;
        case 4:
          if ((mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - He(r);
            (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
          }
          if (
            ((r = i),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Hp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Yl(jt.bind(null, e, ye, et), r);
            break;
          }
          jt(e, ye, et);
          break;
        case 5:
          jt(e, ye, et);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Ee(e, Z()), e.callbackNode === n ? $c.bind(null, e) : null;
}
function ms(e, t) {
  var n = Yn;
  return (
    e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256),
    (e = xi(e, t)),
    e !== 2 && ((t = ye), (ye = n), t !== null && hs(t)),
    e
  );
}
function hs(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function $p(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!be(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function mt(e, t) {
  for (
    t &= ~oo,
      t &= ~Di,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - He(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ca(e) {
  if (F & 6) throw Error(L(327));
  vn();
  var t = ri(e, 0);
  if (!(t & 1)) return Ee(e, Z()), null;
  var n = xi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vl(e);
    r !== 0 && ((t = r), (n = ms(e, r)));
  }
  if (n === 1) throw ((n = pr), Ft(e, 0), mt(e, t), Ee(e, Z()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jt(e, ye, et),
    Ee(e, Z()),
    null
  );
}
function uo(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Cn = Z() + 500), zi && zt());
  }
}
function Ut(e) {
  vt !== null && vt.tag === 0 && !(F & 6) && vn();
  var t = F;
  F |= 1;
  var n = je.transition,
    r = V;
  try {
    if (((je.transition = null), (V = 1), e)) return e();
  } finally {
    (V = r), (je.transition = n), (F = t), !(F & 6) && zt();
  }
}
function co() {
  (Ce = cn.current), W(cn);
}
function Ft(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yp(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((Gs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ai();
          break;
        case 3:
          xn(), W(we), W(de), Zs();
          break;
        case 5:
          Js(r);
          break;
        case 4:
          xn();
          break;
        case 13:
          W(q);
          break;
        case 19:
          W(q);
          break;
        case 10:
          Ys(r.type._context);
          break;
        case 22:
        case 23:
          co();
      }
      n = n.return;
    }
  if (
    ((ie = e),
    (ee = e = _t(e.current, null)),
    (se = Ce = t),
    (ne = 0),
    (pr = null),
    (oo = Di = Gt = 0),
    (ye = Yn = null),
    Dt !== null)
  ) {
    for (t = 0; t < Dt.length; t++)
      if (((n = Dt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Dt = null;
  }
  return e;
}
function bc(e, t) {
  do {
    var n = ee;
    try {
      if ((Qs(), (Wr.current = gi), vi)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        vi = !1;
      }
      if (
        ((bt = 0),
        (re = te = K = null),
        (Wn = !1),
        (cr = 0),
        (so.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (pr = t), (ee = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          a = n,
          o = t;
        if (
          ((t = se),
          (a.flags |= 32768),
          o !== null && typeof o == "object" && typeof o.then == "function")
        ) {
          var c = o,
            m = a,
            p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = m.alternate;
            h
              ? ((m.updateQueue = h.updateQueue),
                (m.memoizedState = h.memoizedState),
                (m.lanes = h.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var v = ca(s);
          if (v !== null) {
            (v.flags &= -257),
              da(v, s, a, l, t),
              v.mode & 1 && ua(l, c, t),
              (t = v),
              (o = c);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(o), (t.updateQueue = y);
            } else g.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              ua(l, c, t), fo();
              break e;
            }
            o = Error(L(426));
          }
        } else if (Q && a.mode & 1) {
          var k = ca(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              da(k, s, a, l, t),
              Us(En(o, a));
            break e;
          }
        }
        (l = o = En(o, a)),
          ne !== 4 && (ne = 2),
          Yn === null ? (Yn = [l]) : Yn.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var u = _c(l, o, t);
              na(l, u);
              break e;
            case 1:
              a = o;
              var d = l.type,
                f = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (kt === null || !kt.has(f))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = Pc(l, a, t);
                na(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Wc(n);
    } catch (T) {
      (t = T), ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Gc() {
  var e = yi.current;
  return (yi.current = gi), e === null ? gi : e;
}
function fo() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    ie === null || (!(Gt & 268435455) && !(Di & 268435455)) || mt(ie, se);
}
function xi(e, t) {
  var n = F;
  F |= 2;
  var r = Gc();
  (ie !== e || se !== t) && ((et = null), Ft(e, t));
  do
    try {
      bp();
      break;
    } catch (i) {
      bc(e, i);
    }
  while (1);
  if ((Qs(), (F = n), (yi.current = r), ee !== null)) throw Error(L(261));
  return (ie = null), (se = 0), ne;
}
function bp() {
  for (; ee !== null; ) Uc(ee);
}
function Gp() {
  for (; ee !== null && !hf(); ) Uc(ee);
}
function Uc(e) {
  var t = Yc(e.alternate, e, Ce);
  (e.memoizedProps = e.pendingProps),
    t === null ? Wc(e) : (ee = t),
    (so.current = null);
}
function Wc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Rp(n, t)), n !== null)) {
        (n.flags &= 32767), (ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (ee = null);
        return;
      }
    } else if (((n = Dp(n, t, Ce)), n !== null)) {
      ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function jt(e, t, n) {
  var r = V,
    i = je.transition;
  try {
    (je.transition = null), (V = 1), Up(e, t, n, r);
  } finally {
    (je.transition = i), (V = r);
  }
  return null;
}
function Up(e, t, n, r) {
  do vn();
  while (vt !== null);
  if (F & 6) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Tf(e, l),
    e === ie && ((ee = ie = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dr ||
      ((Dr = !0),
      qc(ni, function () {
        return vn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = je.transition), (je.transition = null);
    var s = V;
    V = 1;
    var a = F;
    (F |= 4),
      (so.current = null),
      Fp(e, n),
      Vc(n, e),
      dp(Wl),
      (ii = !!Ul),
      (Wl = Ul = null),
      (e.current = n),
      Vp(n),
      vf(),
      (F = a),
      (V = s),
      (je.transition = l);
  } else e.current = n;
  if (
    (Dr && ((Dr = !1), (vt = e), (wi = i)),
    (l = e.pendingLanes),
    l === 0 && (kt = null),
    Sf(n.stateNode),
    Ee(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Si) throw ((Si = !1), (e = fs), (fs = null), e);
  return (
    wi & 1 && e.tag !== 0 && vn(),
    (l = e.pendingLanes),
    l & 1 ? (e === ps ? qn++ : ((qn = 0), (ps = e))) : (qn = 0),
    zt(),
    null
  );
}
function vn() {
  if (vt !== null) {
    var e = Tu(wi),
      t = je.transition,
      n = V;
    try {
      if (((je.transition = null), (V = 16 > e ? 16 : e), vt === null))
        var r = !1;
      else {
        if (((e = vt), (vt = null), (wi = 0), F & 6)) throw Error(L(331));
        var i = F;
        for (F |= 4, z = e.current; z !== null; ) {
          var l = z,
            s = l.child;
          if (z.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var o = 0; o < a.length; o++) {
                var c = a[o];
                for (z = c; z !== null; ) {
                  var m = z;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qn(8, m, l);
                  }
                  var p = m.child;
                  if (p !== null) (p.return = m), (z = p);
                  else
                    for (; z !== null; ) {
                      m = z;
                      var h = m.sibling,
                        v = m.return;
                      if ((Rc(m), m === c)) {
                        z = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (z = h);
                        break;
                      }
                      z = v;
                    }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var k = y.sibling;
                    (y.sibling = null), (y = k);
                  } while (y !== null);
                }
              }
              z = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (z = s);
          else
            e: for (; z !== null; ) {
              if (((l = z), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qn(9, l, l.return);
                }
              var u = l.sibling;
              if (u !== null) {
                (u.return = l.return), (z = u);
                break e;
              }
              z = l.return;
            }
        }
        var d = e.current;
        for (z = d; z !== null; ) {
          s = z;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null) (f.return = s), (z = f);
          else
            e: for (s = d; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ai(9, a);
                  }
                } catch (T) {
                  J(a, a.return, T);
                }
              if (a === s) {
                z = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (z = S);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((F = i), zt(), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        )
          try {
            Ye.onPostCommitFiberRoot(Pi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (V = n), (je.transition = t);
    }
  }
  return !1;
}
function ka(e, t, n) {
  (t = En(n, t)),
    (t = _c(e, t, 1)),
    (e = Ct(e, t, 1)),
    (t = me()),
    e !== null && (vr(e, 1, t), Ee(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) ka(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ka(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (kt === null || !kt.has(r)))
        ) {
          (e = En(n, e)),
            (e = Pc(t, e, 1)),
            (t = Ct(t, e, 1)),
            (e = me()),
            t !== null && (vr(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Wp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (se & n) === n &&
      (ne === 4 || (ne === 3 && (se & 130023424) === se && 500 > Z() - ao)
        ? Ft(e, 0)
        : (oo |= n)),
    Ee(e, t);
}
function Qc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _r), (_r <<= 1), !(_r & 130023424) && (_r = 4194304))
      : (t = 1));
  var n = me();
  (e = ot(e, t)), e !== null && (vr(e, t, n), Ee(e, n));
}
function Qp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Qc(e, n);
}
function Yp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), Qc(e, n);
}
var Yc;
Yc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) Se = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Se = !1), Ap(e, t, n);
      Se = !!(e.flags & 131072);
    }
  else (Se = !1), Q && t.flags & 1048576 && Xu(t, di, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Yr(e, t), (e = t.pendingProps);
      var i = yn(t, de.current);
      hn(t, n), (i = to(null, t, r, e, i, n));
      var l = no();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((l = !0), ui(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ks(t),
            (i.updater = Ii),
            (t.stateNode = i),
            (i._reactInternals = t),
            ts(t, r, e, n),
            (t = is(null, t, r, !0, l, n)))
          : ((t.tag = 0), Q && l && bs(t), pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Yr(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Kp(r)),
          (e = Be(r, e)),
          i)
        ) {
          case 0:
            t = rs(null, t, r, e, n);
            break e;
          case 1:
            t = ma(null, t, r, e, n);
            break e;
          case 11:
            t = fa(null, t, r, e, n);
            break e;
          case 14:
            t = pa(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        rs(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        ma(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Oc(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          tc(e, t),
          mi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = En(Error(L(423)), t)), (t = ha(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = En(Error(L(424)), t)), (t = ha(e, t, r, n, i));
            break e;
          } else
            for (
              Te = Et(t.stateNode.containerInfo.firstChild),
                _e = t,
                Q = !0,
                Ve = null,
                n = lc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Sn(), r === i)) {
            t = at(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sc(t),
        e === null && Jl(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Ql(r, i) ? (s = null) : l !== null && Ql(r, l) && (t.flags |= 32),
        Nc(e, t),
        pe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Jl(t), null;
    case 13:
      return zc(e, t, n);
    case 4:
      return (
        Xs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = wn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        fa(e, t, r, i, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (s = i.value),
          G(fi, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (be(l.value, s)) {
            if (l.children === i.children && !we.current) {
              t = at(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                s = l.child;
                for (var o = a.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (l.tag === 1) {
                      (o = it(-1, n & -n)), (o.tag = 2);
                      var c = l.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (o.next = o)
                          : ((o.next = m.next), (m.next = o)),
                          (c.pending = o);
                      }
                    }
                    (l.lanes |= n),
                      (o = l.alternate),
                      o !== null && (o.lanes |= n),
                      Zl(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  o = o.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(L(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Zl(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        hn(t, n),
        (i = Ae(i)),
        (r = r(i)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Be(r, t.pendingProps)),
        (i = Be(r.type, i)),
        pa(e, t, r, i, n)
      );
    case 15:
      return Lc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        Yr(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), ui(t)) : (e = !1),
        hn(t, n),
        rc(t, r, i),
        ts(t, r, i, n),
        is(null, t, r, !0, e, n)
      );
    case 19:
      return Ic(e, t, n);
    case 22:
      return Mc(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function qc(e, t) {
  return xu(e, t);
}
function qp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ie(e, t, n, r) {
  return new qp(e, t, n, r);
}
function po(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Kp(e) {
  if (typeof e == "function") return po(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Os)) return 11;
    if (e === zs) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Xr(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) po(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Zt:
        return Vt(n.children, i, l, t);
      case Ns:
        (s = 8), (i |= 8);
        break;
      case Tl:
        return (
          (e = Ie(12, n, t, i | 2)), (e.elementType = Tl), (e.lanes = l), e
        );
      case _l:
        return (e = Ie(13, n, t, i)), (e.elementType = _l), (e.lanes = l), e;
      case Pl:
        return (e = Ie(19, n, t, i)), (e.elementType = Pl), (e.lanes = l), e;
      case iu:
        return Ri(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case nu:
              s = 10;
              break e;
            case ru:
              s = 9;
              break e;
            case Os:
              s = 11;
              break e;
            case zs:
              s = 14;
              break e;
            case dt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ie(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Vt(e, t, n, r) {
  return (e = Ie(7, e, r, t)), (e.lanes = n), e;
}
function Ri(e, t, n, r) {
  return (
    (e = Ie(22, e, r, t)),
    (e.elementType = iu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fl(e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e;
}
function pl(e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Xp(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qi(0)),
    (this.expirationTimes = Qi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function mo(e, t, n, r, i, l, s, a, o) {
  return (
    (e = new Xp(e, t, n, a, o)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ie(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ks(l),
    e
  );
}
function Jp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Kc(e) {
  if (!e) return Mt;
  e = e._reactInternals;
  e: {
    if (Yt(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return qu(e, n, t);
  }
  return t;
}
function Xc(e, t, n, r, i, l, s, a, o) {
  return (
    (e = mo(n, r, !0, e, i, l, s, a, o)),
    (e.context = Kc(null)),
    (n = e.current),
    (r = me()),
    (i = Tt(n)),
    (l = it(r, i)),
    (l.callback = t ?? null),
    Ct(n, l, i),
    (e.current.lanes = i),
    vr(e, i, r),
    Ee(e, r),
    e
  );
}
function Bi(e, t, n, r) {
  var i = t.current,
    l = me(),
    s = Tt(i);
  return (
    (n = Kc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = it(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ct(i, t, s)),
    e !== null && ($e(e, i, s, l), Ur(e, i, s)),
    s
  );
}
function Ei(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ta(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ho(e, t) {
  Ta(e, t), (e = e.alternate) && Ta(e, t);
}
function Zp() {
  return null;
}
var Jc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vo(e) {
  this._internalRoot = e;
}
Fi.prototype.render = vo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Bi(e, t, null, null);
};
Fi.prototype.unmount = vo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function () {
      Bi(null, e, null, null);
    }),
      (t[st] = null);
  }
};
function Fi(e) {
  this._internalRoot = e;
}
Fi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pt.length && t !== 0 && t < pt[n].priority; n++);
    pt.splice(n, 0, e), n === 0 && Nu(e);
  }
};
function go(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Vi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _a() {}
function em(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var c = Ei(s);
        l.call(c);
      };
    }
    var s = Xc(t, r, e, 0, null, !1, !1, "", _a);
    return (
      (e._reactRootContainer = s),
      (e[st] = s.current),
      lr(e.nodeType === 8 ? e.parentNode : e),
      Ut(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Ei(o);
      a.call(c);
    };
  }
  var o = mo(e, 0, !1, null, null, !1, !1, "", _a);
  return (
    (e._reactRootContainer = o),
    (e[st] = o.current),
    lr(e.nodeType === 8 ? e.parentNode : e),
    Ut(function () {
      Bi(t, o, n, r);
    }),
    o
  );
}
function Hi(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var o = Ei(s);
        a.call(o);
      };
    }
    Bi(t, s, e, i);
  } else s = em(n, t, e, i, r);
  return Ei(s);
}
_u = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fn(t.pendingLanes);
        n !== 0 &&
          (As(t, n | 1), Ee(t, Z()), !(F & 6) && ((Cn = Z() + 500), zt()));
      }
      break;
    case 13:
      Ut(function () {
        var r = ot(e, 1);
        if (r !== null) {
          var i = me();
          $e(r, e, 1, i);
        }
      }),
        ho(e, 1);
  }
};
Ds = function (e) {
  if (e.tag === 13) {
    var t = ot(e, 134217728);
    if (t !== null) {
      var n = me();
      $e(t, e, 134217728, n);
    }
    ho(e, 134217728);
  }
};
Pu = function (e) {
  if (e.tag === 13) {
    var t = Tt(e),
      n = ot(e, t);
    if (n !== null) {
      var r = me();
      $e(n, e, t, r);
    }
    ho(e, t);
  }
};
Lu = function () {
  return V;
};
Mu = function (e, t) {
  var n = V;
  try {
    return (V = e), t();
  } finally {
    V = n;
  }
};
Rl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Nl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Oi(r);
            if (!i) throw Error(L(90));
            su(r), Nl(r, i);
          }
        }
      }
      break;
    case "textarea":
      au(e, n);
      break;
    case "select":
      (t = n.value), t != null && dn(e, !!n.multiple, t, !1);
  }
};
hu = uo;
vu = Ut;
var tm = { usingClientEntryPoint: !1, Events: [yr, rn, Oi, pu, mu, uo] },
  An = {
    findFiberByHostInstance: At,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  nm = {
    bundleType: An.bundleType,
    version: An.version,
    rendererPackageName: An.rendererPackageName,
    rendererConfig: An.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Su(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: An.findFiberByHostInstance || Zp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber)
    try {
      (Pi = Rr.inject(nm)), (Ye = Rr);
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tm;
Le.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!go(t)) throw Error(L(200));
  return Jp(e, t, null, n);
};
Le.createRoot = function (e, t) {
  if (!go(e)) throw Error(L(299));
  var n = !1,
    r = "",
    i = Jc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = mo(e, 1, !1, null, null, n, !1, r, i)),
    (e[st] = t.current),
    lr(e.nodeType === 8 ? e.parentNode : e),
    new vo(t)
  );
};
Le.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Su(t)), (e = e === null ? null : e.stateNode), e;
};
Le.flushSync = function (e) {
  return Ut(e);
};
Le.hydrate = function (e, t, n) {
  if (!Vi(t)) throw Error(L(200));
  return Hi(null, e, t, !0, n);
};
Le.hydrateRoot = function (e, t, n) {
  if (!go(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    s = Jc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Xc(t, null, e, 1, n ?? null, i, !1, l, s)),
    (e[st] = t.current),
    lr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Fi(t);
};
Le.render = function (e, t, n) {
  if (!Vi(t)) throw Error(L(200));
  return Hi(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function (e) {
  if (!Vi(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Ut(function () {
        Hi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[st] = null);
        });
      }),
      !0)
    : !1;
};
Le.unstable_batchedUpdates = uo;
Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Vi(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Hi(e, t, n, !1, r);
};
Le.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Le);
})(Jd);
var Pa = El;
(xl.createRoot = Pa.createRoot), (xl.hydrateRoot = Pa.hydrateRoot);
const rm = "./assets/Longlogo-055eeb1b.png",
  im = "./assets/logo-ca4a6162.png",
  lm = "./assets/world-087a0807.svg";
var Zc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  La = b.createContext && b.createContext(Zc),
  Pt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Pt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        Pt.apply(this, arguments)
      );
    },
  sm =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      return n;
    };
function ed(e) {
  return (
    e &&
    e.map(function (t, n) {
      return b.createElement(t.tag, Pt({ key: n }, t.attr), ed(t.child));
    })
  );
}
function wr(e) {
  return function (t) {
    return b.createElement(om, Pt({ attr: Pt({}, e.attr) }, t), ed(e.child));
  };
}
function om(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      l = e.title,
      s = sm(e, ["attr", "size", "title"]),
      a = i || n.size || "1em",
      o;
    return (
      n.className && (o = n.className),
      e.className && (o = (o ? o + " " : "") + e.className),
      b.createElement(
        "svg",
        Pt(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: o,
            style: Pt(Pt({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        l && b.createElement("title", null, l),
        e.children
      )
    );
  };
  return La !== void 0
    ? b.createElement(La.Consumer, null, function (n) {
        return t(n);
      })
    : t(Zc);
}
function am(e) {
  return wr({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2zm974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2 18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2zm0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2z",
        },
      },
    ],
  })(e);
}
function um(e) {
  return wr({
    tag: "svg",
    attr: { viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z",
        },
      },
    ],
  })(e);
}
var td = {},
  vs = {},
  cm = {
    get exports() {
      return vs;
    },
    set exports(e) {
      vs = e;
    },
  };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var l = arguments[i];
        if (l) {
          var s = typeof l;
          if (s === "string" || s === "number") r.push(l);
          else if (Array.isArray(l)) {
            if (l.length) {
              var a = n.apply(null, l);
              a && r.push(a);
            }
          } else if (s === "object") {
            if (
              l.toString !== Object.prototype.toString &&
              !l.toString.toString().includes("[native code]")
            ) {
              r.push(l.toString());
              continue;
            }
            for (var o in l) t.call(l, o) && l[o] && r.push(o);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(cm);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = l(R),
    n = r(vs);
  function r(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function i() {
    if (typeof WeakMap != "function") return null;
    var x = new WeakMap();
    return (
      (i = function () {
        return x;
      }),
      x
    );
  }
  function l(x) {
    if (x && x.__esModule) return x;
    if (x === null || (s(x) !== "object" && typeof x != "function"))
      return { default: x };
    var C = i();
    if (C && C.has(x)) return C.get(x);
    var w = {},
      E = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var M in x)
      if (Object.prototype.hasOwnProperty.call(x, M)) {
        var _ = E ? Object.getOwnPropertyDescriptor(x, M) : null;
        _ && (_.get || _.set) ? Object.defineProperty(w, M, _) : (w[M] = x[M]);
      }
    return (w.default = x), C && C.set(x, w), w;
  }
  function s(x) {
    return (
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? (s = function (w) {
            return typeof w;
          })
        : (s = function (w) {
            return w &&
              typeof Symbol == "function" &&
              w.constructor === Symbol &&
              w !== Symbol.prototype
              ? "symbol"
              : typeof w;
          }),
      s(x)
    );
  }
  function a() {
    return (
      (a =
        Object.assign ||
        function (x) {
          for (var C = 1; C < arguments.length; C++) {
            var w = arguments[C];
            for (var E in w)
              Object.prototype.hasOwnProperty.call(w, E) && (x[E] = w[E]);
          }
          return x;
        }),
      a.apply(this, arguments)
    );
  }
  function o(x, C) {
    var w = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var E = Object.getOwnPropertySymbols(x);
      C &&
        (E = E.filter(function (M) {
          return Object.getOwnPropertyDescriptor(x, M).enumerable;
        })),
        w.push.apply(w, E);
    }
    return w;
  }
  function c(x) {
    for (var C = 1; C < arguments.length; C++) {
      var w = arguments[C] != null ? arguments[C] : {};
      C % 2
        ? o(w, !0).forEach(function (E) {
            m(x, E, w[E]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(w))
        : o(w).forEach(function (E) {
            Object.defineProperty(x, E, Object.getOwnPropertyDescriptor(w, E));
          });
    }
    return x;
  }
  function m(x, C, w) {
    return (
      C in x
        ? Object.defineProperty(x, C, {
            value: w,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (x[C] = w),
      x
    );
  }
  function p(x, C) {
    if (!(x instanceof C))
      throw new TypeError("Cannot call a class as a function");
  }
  function h(x, C) {
    for (var w = 0; w < C.length; w++) {
      var E = C[w];
      (E.enumerable = E.enumerable || !1),
        (E.configurable = !0),
        "value" in E && (E.writable = !0),
        Object.defineProperty(x, E.key, E);
    }
  }
  function v(x, C, w) {
    return C && h(x.prototype, C), w && h(x, w), x;
  }
  function g(x, C) {
    return C && (s(C) === "object" || typeof C == "function") ? C : k(x);
  }
  function y(x) {
    return (
      (y = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (w) {
            return w.__proto__ || Object.getPrototypeOf(w);
          }),
      y(x)
    );
  }
  function k(x) {
    if (x === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return x;
  }
  function u(x, C) {
    if (typeof C != "function" && C !== null)
      throw new TypeError("Super expression must either be null or a function");
    (x.prototype = Object.create(C && C.prototype, {
      constructor: { value: x, writable: !0, configurable: !0 },
    })),
      C && d(x, C);
  }
  function d(x, C) {
    return (
      (d =
        Object.setPrototypeOf ||
        function (E, M) {
          return (E.__proto__ = M), E;
        }),
      d(x, C)
    );
  }
  var f = "Select...",
    S = (function (x) {
      u(C, x);
      function C(w) {
        var E;
        return (
          p(this, C),
          (E = g(this, y(C).call(this, w))),
          (E.state = {
            selected: E.parseValue(w.value, w.options) || {
              label: typeof w.placeholder > "u" ? f : w.placeholder,
              value: "",
            },
            isOpen: !1,
          }),
          (E.dropdownRef = (0, t.createRef)()),
          (E.mounted = !0),
          (E.handleDocumentClick = E.handleDocumentClick.bind(k(E))),
          (E.fireChangeEvent = E.fireChangeEvent.bind(k(E))),
          E
        );
      }
      return (
        v(C, [
          {
            key: "componentDidUpdate",
            value: function (E) {
              if (this.props.value !== E.value)
                if (this.props.value) {
                  var M = this.parseValue(this.props.value, this.props.options);
                  M !== this.state.selected && this.setState({ selected: M });
                } else
                  this.setState({
                    selected: {
                      label:
                        typeof this.props.placeholder > "u"
                          ? f
                          : this.props.placeholder,
                      value: "",
                    },
                  });
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              document.addEventListener("click", this.handleDocumentClick, !1),
                document.addEventListener(
                  "touchend",
                  this.handleDocumentClick,
                  !1
                );
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              (this.mounted = !1),
                document.removeEventListener(
                  "click",
                  this.handleDocumentClick,
                  !1
                ),
                document.removeEventListener(
                  "touchend",
                  this.handleDocumentClick,
                  !1
                );
            },
          },
          {
            key: "handleMouseDown",
            value: function (E) {
              this.props.onFocus &&
                typeof this.props.onFocus == "function" &&
                this.props.onFocus(this.state.isOpen),
                !(E.type === "mousedown" && E.button !== 0) &&
                  (E.stopPropagation(),
                  E.preventDefault(),
                  this.props.disabled ||
                    this.setState({ isOpen: !this.state.isOpen }));
            },
          },
          {
            key: "parseValue",
            value: function (E, M) {
              var _;
              if (typeof E == "string")
                for (var P = 0, O = M.length; P < O; P++)
                  if (M[P].type === "group") {
                    var D = M[P].items.filter(function (H) {
                      return H.value === E;
                    });
                    D.length && (_ = D[0]);
                  } else
                    typeof M[P].value < "u" && M[P].value === E && (_ = M[P]);
              return _ || E;
            },
          },
          {
            key: "setValue",
            value: function (E, M) {
              var _ = { selected: { value: E, label: M }, isOpen: !1 };
              this.fireChangeEvent(_), this.setState(_);
            },
          },
          {
            key: "fireChangeEvent",
            value: function (E) {
              E.selected !== this.state.selected &&
                this.props.onChange &&
                this.props.onChange(E.selected);
            },
          },
          {
            key: "renderOption",
            value: function (E) {
              var M,
                _ = E.value;
              typeof _ > "u" && (_ = E.label || E);
              var P = E.label || E.value || E,
                O =
                  _ === this.state.selected.value || _ === this.state.selected,
                D =
                  ((M = {}),
                  m(M, "".concat(this.props.baseClassName, "-option"), !0),
                  m(M, E.className, !!E.className),
                  m(M, "is-selected", O),
                  M),
                H = (0, n.default)(D),
                fe = Object.keys(E.data || {}).reduce(function (ge, N) {
                  return c({}, ge, m({}, "data-".concat(N), E.data[N]));
                }, {});
              return t.default.createElement(
                "div",
                a(
                  {
                    key: _,
                    className: H,
                    onMouseDown: this.setValue.bind(this, _, P),
                    onClick: this.setValue.bind(this, _, P),
                    role: "option",
                    "aria-selected": O ? "true" : "false",
                  },
                  fe
                ),
                P
              );
            },
          },
          {
            key: "buildMenu",
            value: function () {
              var E = this,
                M = this.props,
                _ = M.options,
                P = M.baseClassName,
                O = _.map(function (D) {
                  if (D.type === "group") {
                    var H = t.default.createElement(
                        "div",
                        { className: "".concat(P, "-title") },
                        D.name
                      ),
                      fe = D.items.map(function (ge) {
                        return E.renderOption(ge);
                      });
                    return t.default.createElement(
                      "div",
                      {
                        className: "".concat(P, "-group"),
                        key: D.name,
                        role: "listbox",
                        tabIndex: "-1",
                      },
                      H,
                      fe
                    );
                  } else return E.renderOption(D);
                });
              return O.length
                ? O
                : t.default.createElement(
                    "div",
                    { className: "".concat(P, "-noresults") },
                    "No options found"
                  );
            },
          },
          {
            key: "handleDocumentClick",
            value: function (E) {
              this.mounted &&
                (this.dropdownRef.current.contains(E.target) ||
                  (this.state.isOpen && this.setState({ isOpen: !1 })));
            },
          },
          {
            key: "isValueSelected",
            value: function () {
              return (
                typeof this.state.selected == "string" ||
                this.state.selected.value !== ""
              );
            },
          },
          {
            key: "render",
            value: function () {
              var E,
                M,
                _,
                P,
                O,
                D = this.props,
                H = D.baseClassName,
                fe = D.controlClassName,
                ge = D.placeholderClassName,
                N = D.menuClassName,
                I = D.arrowClassName,
                A = D.arrowClosed,
                $ = D.arrowOpen,
                Y = D.className,
                Ke = this.props.disabled ? "Dropdown-disabled" : "",
                Xe =
                  typeof this.state.selected == "string"
                    ? this.state.selected
                    : this.state.selected.label,
                Pn = (0, n.default)(
                  ((E = {}),
                  m(E, "".concat(H, "-root"), !0),
                  m(E, Y, !!Y),
                  m(E, "is-open", this.state.isOpen),
                  E)
                ),
                Je = (0, n.default)(
                  ((M = {}),
                  m(M, "".concat(H, "-control"), !0),
                  m(M, fe, !!fe),
                  m(M, Ke, !!Ke),
                  M)
                ),
                Kt = (0, n.default)(
                  ((_ = {}),
                  m(_, "".concat(H, "-placeholder"), !0),
                  m(_, ge, !!ge),
                  m(_, "is-selected", this.isValueSelected()),
                  _)
                ),
                kd = (0, n.default)(
                  ((P = {}), m(P, "".concat(H, "-menu"), !0), m(P, N, !!N), P)
                ),
                Td = (0, n.default)(
                  ((O = {}), m(O, "".concat(H, "-arrow"), !0), m(O, I, !!I), O)
                ),
                _d = t.default.createElement("div", { className: Kt }, Xe),
                Pd = this.state.isOpen
                  ? t.default.createElement(
                      "div",
                      { className: kd, "aria-expanded": "true" },
                      this.buildMenu()
                    )
                  : null;
              return t.default.createElement(
                "div",
                { ref: this.dropdownRef, className: Pn },
                t.default.createElement(
                  "div",
                  {
                    className: Je,
                    onMouseDown: this.handleMouseDown.bind(this),
                    onTouchEnd: this.handleMouseDown.bind(this),
                    "aria-haspopup": "listbox",
                  },
                  _d,
                  t.default.createElement(
                    "div",
                    { className: "".concat(H, "-arrow-wrapper") },
                    $ && A
                      ? this.state.isOpen
                        ? $
                        : A
                      : t.default.createElement("span", { className: Td })
                  )
                ),
                Pd
              );
            },
          },
        ]),
        C
      );
    })(t.Component);
  S.defaultProps = { baseClassName: "Dropdown" };
  var T = S;
  e.default = T;
})(td);
const dm = Ga(td);
function fm(e) {
  return wr({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      { tag: "path", attr: { d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" } },
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z",
        },
      },
    ],
  })(e);
}
function nd(e) {
  return wr({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z",
        },
      },
    ],
  })(e);
}
function pm() {
  const e = ["Registrarse", "Iniciar Sesión", "Ser anfitrión", "Ayuda"];
  return j.jsx(dm, {
    placeholder: j.jsx(fm, { className: "icon-right-topbar" }),
    arrowClassName: "myArrowClassName",
    options: e,
  });
}
const mm = [
  {
    label: "Amazing",
    imgSrc:
      "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
  },
  {
    label: "Top mountain",
    imgSrc:
      "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
  },
  {
    label: "Farms",
    imgSrc:
      "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
  },
  {
    label: "Surfing",
    imgSrc:
      "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
  },
  {
    label: "Lakefront",
    imgSrc:
      "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
  },
];
function hm({ selectedFilter: e, setSelectedFilter: t }) {
  return j.jsx("div", {
    className: "filter-div ",
    children: mm.map((n, r) =>
      j.jsxs(
        "div",
        {
          className: `links-box ${r === e && "selected-box"}`,
          onClick: () => {
            console.log("selecting key", r), t(r);
          },
          children: [
            j.jsx("img", { src: n.imgSrc, className: "links-img" }),
            j.jsx("p", {
              className: `links-label ${r === e && "selected-label"}`,
              children: n.label,
            }),
          ],
        },
        r
      )
    ),
  });
}
function vm() {
  return j.jsx("div", {
    className: "right-filter",
    children: j.jsxs("h2", {
      className: "right-filter-content b",
      children: [
        j.jsx(nd, {}),
        j.jsx("span", { className: "media-filtros", children: "Filtros" }),
      ],
    }),
  });
}
function gm() {
  return j.jsxs("div", {
    className: "main-header",
    children: [
      j.jsx("img", { src: rm, alt: "logo", className: "navbar-logo" }),
      j.jsx("img", {
        src: im,
        alt: "logo",
        className: "navbar-logo logo-responsive",
      }),
      j.jsxs("div", {
        className: "search-bar",
        children: [
          j.jsx(vm, {}),
          j.jsx("a", {
            className: "b",
            href: "",
            children: "Cualquier lugar |",
          }),
          j.jsx("a", {
            className: "b",
            href: "",
            children: "Cualquier semana |",
          }),
          j.jsx("a", { className: "", href: "", children: "Añade viajeros" }),
          j.jsxs("span", {
            className: "pink-capsule",
            children: [" ", j.jsx(um, { className: "lupa" }), " "],
          }),
        ],
      }),
      j.jsxs("div", {
        className: "search-bar-right",
        children: [
          j.jsx("a", {
            className: "b",
            href: "",
            children: "Pon tu casa en Airbnb",
          }),
          j.jsx("img", { className: "world-svg", src: lm, alt: "" }),
          j.jsxs("div", {
            className: "user-right-topbar",
            children: [
              j.jsx(am, { className: "icon-right-topbar" }),
              j.jsx(pm, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
const ym = [
  {
    rating: "4 ",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1541435469116-8ce8ccc4ff85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lpibo-ew-1656015868.jpg",
      "https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg",
      "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683",
    ],
    price: "20000",
    date: "15-20 May",
    title: "Las arenas  ",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "30000",
    date: "25-20 May",
    title: "Navarro's",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://st.depositphotos.com/2288675/2455/i/950/depositphotos_24553989-stock-photo-hotel.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "45000",
    date: "10-20 Oct",
    title: "Rich",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg",
      "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "20000",
    date: "15-20 May",
    title: "La casa del terror",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "20000",
    date: "15-20 May",
    title: "Maria la madalena",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "30000",
    date: "25-20 May",
    title: "Horchata",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "45000",
    date: "10-20 Oct",
    title: "Almendras",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      "https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg",
      "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "20000",
    date: "15-20 May",
    title: "Aladin",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "20000",
    date: "15-20 May",
    title: "Bling Bling",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "20000",
    date: "15-20 May",
    title: "Eminem Palace",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg",
      "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "20000",
    date: "15-20 May",
    title: "Hohana katana",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg",
      "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "20000",
    date: "15-20 May",
    title: "Las Barricas",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg",
      "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "20000",
    date: "15-20 May",
    title: "Casa Pepe",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg",
      "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "20000",
    date: "15-20 May",
    title: "Pekin duck",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg",
      "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "20000",
    date: "15-20 May",
    title: "Hiroshima hotel",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg",
      "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "20000",
    date: "15-20 May",
    title: "Mario il pizzieri",
  },
  {
    rating: "4",
    desc: "Beach and Sunset Views",
    imgSrc: [
      "https://plus.unsplash.com/premium_photo-1661926818635-3d413932f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
      "https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg",
      "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg5siFywtSULLeH0eaN3k6cBQy_HSnJpJGQ&usqp=CAU",
    ],
    price: "20000",
    date: "15-20 May",
    title: "Luigi di Burrata",
  },
];
function Sm(e) {
  return wr({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
        },
      },
    ],
  })(e);
}
function Ma(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function yo(e = {}, t = {}) {
  Object.keys(t).forEach((n) => {
    typeof e[n] > "u"
      ? (e[n] = t[n])
      : Ma(t[n]) && Ma(e[n]) && Object.keys(t[n]).length > 0 && yo(e[n], t[n]);
  });
}
const rd = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function qt() {
  const e = typeof document < "u" ? document : {};
  return yo(e, rd), e;
}
const wm = {
  document: rd,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Ne() {
  const e = typeof window < "u" ? window : {};
  return yo(e, wm), e;
}
function xm(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function gs(e, t = 0) {
  return setTimeout(e, t);
}
function Ci() {
  return Date.now();
}
function Em(e) {
  const t = Ne();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function Cm(e, t = "x") {
  const n = Ne();
  let r, i, l;
  const s = Em(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = s.transform || s.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (l = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((l =
          s.MozTransform ||
          s.OTransform ||
          s.MsTransform ||
          s.msTransform ||
          s.transform ||
          s
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = l.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = l.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = l.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Br(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function km(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function ke(...e) {
  const t = Object(e[0]),
    n = ["__proto__", "constructor", "prototype"];
  for (let r = 1; r < e.length; r += 1) {
    const i = e[r];
    if (i != null && !km(i)) {
      const l = Object.keys(Object(i)).filter((s) => n.indexOf(s) < 0);
      for (let s = 0, a = l.length; s < a; s += 1) {
        const o = l[s],
          c = Object.getOwnPropertyDescriptor(i, o);
        c !== void 0 &&
          c.enumerable &&
          (Br(t[o]) && Br(i[o])
            ? i[o].__swiper__
              ? (t[o] = i[o])
              : ke(t[o], i[o])
            : !Br(t[o]) && Br(i[o])
            ? ((t[o] = {}), i[o].__swiper__ ? (t[o] = i[o]) : ke(t[o], i[o]))
            : (t[o] = i[o]));
      }
    }
  }
  return t;
}
function Fr(e, t, n) {
  e.style.setProperty(t, n);
}
function id({ swiper: e, targetPosition: t, side: n }) {
  const r = Ne(),
    i = -e.translate;
  let l = null,
    s;
  const a = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const o = t > i ? "next" : "prev",
    c = (p, h) => (o === "next" && p >= h) || (o === "prev" && p <= h),
    m = () => {
      (s = new Date().getTime()), l === null && (l = s);
      const p = Math.max(Math.min((s - l) / a, 1), 0),
        h = 0.5 - Math.cos(p * Math.PI) / 2;
      let v = i + h * (t - i);
      if ((c(v, t) && (v = t), e.wrapperEl.scrollTo({ [n]: v }), c(v, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [n]: v });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(m);
    };
  m();
}
function Qe(e, t = "") {
  return [...e.children].filter((n) => n.matches(t));
}
function ld(e, t = []) {
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
}
function Tm(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function _m(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function gt(e, t) {
  return Ne().getComputedStyle(e, null).getPropertyValue(t);
}
function ki(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function sd(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function ys(e, t, n) {
  const r = Ne();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
        )
    : e.offsetWidth;
}
let ml;
function Pm() {
  const e = Ne(),
    t = qt();
  return {
    smoothScroll:
      t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function od() {
  return ml || (ml = Pm()), ml;
}
let hl;
function Lm({ userAgent: e } = {}) {
  const t = od(),
    n = Ne(),
    r = n.navigator.platform,
    i = e || n.navigator.userAgent,
    l = { ios: !1, android: !1 },
    s = n.screen.width,
    a = n.screen.height,
    o = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = i.match(/(iPad).*OS\s([\d_]+)/);
  const m = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = r === "Win32";
  let v = r === "MacIntel";
  const g = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      v &&
      t.touch &&
      g.indexOf(`${s}x${a}`) >= 0 &&
      ((c = i.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (v = !1)),
    o && !h && ((l.os = "android"), (l.android = !0)),
    (c || p || m) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function Mm(e = {}) {
  return hl || (hl = Lm(e)), hl;
}
let vl;
function Nm() {
  const e = Ne();
  let t = !1;
  function n() {
    const r = e.navigator.userAgent.toLowerCase();
    return (
      r.indexOf("safari") >= 0 &&
      r.indexOf("chrome") < 0 &&
      r.indexOf("android") < 0
    );
  }
  if (n()) {
    const r = String(e.navigator.userAgent);
    if (r.includes("Version/")) {
      const [i, l] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((s) => Number(s));
      t = i < 16 || (i === 16 && l < 2);
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function Om() {
  return vl || (vl = Nm()), vl;
}
function zm({ swiper: e, on: t, emit: n }) {
  const r = Ne();
  let i = null,
    l = null;
  const s = () => {
      !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((i = new ResizeObserver((m) => {
          l = r.requestAnimationFrame(() => {
            const { width: p, height: h } = e;
            let v = p,
              g = h;
            m.forEach(({ contentBoxSize: y, contentRect: k, target: u }) => {
              (u && u !== e.el) ||
                ((v = k ? k.width : (y[0] || y).inlineSize),
                (g = k ? k.height : (y[0] || y).blockSize));
            }),
              (v !== p || g !== h) && s();
          });
        })),
        i.observe(e.el));
    },
    o = () => {
      l && r.cancelAnimationFrame(l),
        i && i.unobserve && e.el && (i.unobserve(e.el), (i = null));
    },
    c = () => {
      !e || e.destroyed || !e.initialized || n("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      a();
      return;
    }
    r.addEventListener("resize", s), r.addEventListener("orientationchange", c);
  }),
    t("destroy", () => {
      o(),
        r.removeEventListener("resize", s),
        r.removeEventListener("orientationchange", c);
    });
}
function Im({ swiper: e, extendParams: t, on: n, emit: r }) {
  const i = [],
    l = Ne(),
    s = (c, m = {}) => {
      const p = l.MutationObserver || l.WebkitMutationObserver,
        h = new p((v) => {
          if (e.__preventObserver__) return;
          if (v.length === 1) {
            r("observerUpdate", v[0]);
            return;
          }
          const g = function () {
            r("observerUpdate", v[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(g)
            : l.setTimeout(g, 0);
        });
      h.observe(c, {
        attributes: typeof m.attributes > "u" ? !0 : m.attributes,
        childList: typeof m.childList > "u" ? !0 : m.childList,
        characterData: typeof m.characterData > "u" ? !0 : m.characterData,
      }),
        i.push(h);
    },
    a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const c = sd(e.el);
          for (let m = 0; m < c.length; m += 1) s(c[m]);
        }
        s(e.el, { childList: e.params.observeSlideChildren }),
          s(e.wrapperEl, { attributes: !1 });
      }
    },
    o = () => {
      i.forEach((c) => {
        c.disconnect();
      }),
        i.splice(0, i.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    n("init", a),
    n("destroy", o);
}
const jm = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((l) => {
        r.eventsListeners[l] || (r.eventsListeners[l] = []),
          r.eventsListeners[l][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i(...l) {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, l);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, l) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(l, 1);
              });
        }),
      n
    );
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let n, r, i;
    return (
      typeof e[0] == "string" || Array.isArray(e[0])
        ? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
        : ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
      r.unshift(i),
      (Array.isArray(n) ? n : n.split(" ")).forEach((s) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((a) => {
            a.apply(i, [s, ...r]);
          }),
          t.eventsListeners &&
            t.eventsListeners[s] &&
            t.eventsListeners[s].forEach((a) => {
              a.apply(i, r);
            });
      }),
      t
    );
  },
};
function Am() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(gt(r, "padding-left") || 0, 10) -
        parseInt(gt(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(gt(r, "padding-top") || 0, 10) -
        parseInt(gt(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function Dm() {
  const e = this;
  function t(_) {
    return e.isHorizontal()
      ? _
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[_];
  }
  function n(_, P) {
    return parseFloat(_.getPropertyValue(t(P)) || 0);
  }
  const r = e.params,
    { wrapperEl: i, slidesEl: l, size: s, rtlTranslate: a, wrongRTL: o } = e,
    c = e.virtual && r.virtual.enabled,
    m = c ? e.virtual.slides.length : e.slides.length,
    p = Qe(l, `.${e.params.slideClass}, swiper-slide`),
    h = c ? e.virtual.slides.length : p.length;
  let v = [];
  const g = [],
    y = [];
  let k = r.slidesOffsetBefore;
  typeof k == "function" && (k = r.slidesOffsetBefore.call(e));
  let u = r.slidesOffsetAfter;
  typeof u == "function" && (u = r.slidesOffsetAfter.call(e));
  const d = e.snapGrid.length,
    f = e.slidesGrid.length;
  let S = r.spaceBetween,
    T = -k,
    x = 0,
    C = 0;
  if (typeof s > "u") return;
  typeof S == "string" &&
    S.indexOf("%") >= 0 &&
    (S = (parseFloat(S.replace("%", "")) / 100) * s),
    (e.virtualSize = -S),
    p.forEach((_) => {
      a ? (_.style.marginLeft = "") : (_.style.marginRight = ""),
        (_.style.marginBottom = ""),
        (_.style.marginTop = "");
    }),
    r.centeredSlides &&
      r.cssMode &&
      (Fr(i, "--swiper-centered-offset-before", ""),
      Fr(i, "--swiper-centered-offset-after", ""));
  const w = r.grid && r.grid.rows > 1 && e.grid;
  w && e.grid.initSlides(h);
  let E;
  const M =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (_) => typeof r.breakpoints[_].slidesPerView < "u"
    ).length > 0;
  for (let _ = 0; _ < h; _ += 1) {
    E = 0;
    let P;
    if (
      (p[_] && (P = p[_]),
      w && e.grid.updateSlide(_, P, h, t),
      !(p[_] && gt(P, "display") === "none"))
    ) {
      if (r.slidesPerView === "auto") {
        M && (p[_].style[t("width")] = "");
        const O = getComputedStyle(P),
          D = P.style.transform,
          H = P.style.webkitTransform;
        if (
          (D && (P.style.transform = "none"),
          H && (P.style.webkitTransform = "none"),
          r.roundLengths)
        )
          E = e.isHorizontal() ? ys(P, "width", !0) : ys(P, "height", !0);
        else {
          const fe = n(O, "width"),
            ge = n(O, "padding-left"),
            N = n(O, "padding-right"),
            I = n(O, "margin-left"),
            A = n(O, "margin-right"),
            $ = O.getPropertyValue("box-sizing");
          if ($ && $ === "border-box") E = fe + I + A;
          else {
            const { clientWidth: Y, offsetWidth: Ke } = P;
            E = fe + ge + N + I + A + (Ke - Y);
          }
        }
        D && (P.style.transform = D),
          H && (P.style.webkitTransform = H),
          r.roundLengths && (E = Math.floor(E));
      } else
        (E = (s - (r.slidesPerView - 1) * S) / r.slidesPerView),
          r.roundLengths && (E = Math.floor(E)),
          p[_] && (p[_].style[t("width")] = `${E}px`);
      p[_] && (p[_].swiperSlideSize = E),
        y.push(E),
        r.centeredSlides
          ? ((T = T + E / 2 + x / 2 + S),
            x === 0 && _ !== 0 && (T = T - s / 2 - S),
            _ === 0 && (T = T - s / 2 - S),
            Math.abs(T) < 1 / 1e3 && (T = 0),
            r.roundLengths && (T = Math.floor(T)),
            C % r.slidesPerGroup === 0 && v.push(T),
            g.push(T))
          : (r.roundLengths && (T = Math.floor(T)),
            (C - Math.min(e.params.slidesPerGroupSkip, C)) %
              e.params.slidesPerGroup ===
              0 && v.push(T),
            g.push(T),
            (T = T + E + S)),
        (e.virtualSize += E + S),
        (x = E),
        (C += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + u),
    a &&
      o &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      (i.style.width = `${e.virtualSize + r.spaceBetween}px`),
    r.setWrapperSize &&
      (i.style[t("width")] = `${e.virtualSize + r.spaceBetween}px`),
    w && e.grid.updateWrapperSize(E, v, t),
    !r.centeredSlides)
  ) {
    const _ = [];
    for (let P = 0; P < v.length; P += 1) {
      let O = v[P];
      r.roundLengths && (O = Math.floor(O)),
        v[P] <= e.virtualSize - s && _.push(O);
    }
    (v = _),
      Math.floor(e.virtualSize - s) - Math.floor(v[v.length - 1]) > 1 &&
        v.push(e.virtualSize - s);
  }
  if (c && r.loop) {
    const _ = y[0] + S;
    if (r.slidesPerGroup > 1) {
      const P = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup
        ),
        O = _ * r.slidesPerGroup;
      for (let D = 0; D < P; D += 1) v.push(v[v.length - 1] + O);
    }
    for (let P = 0; P < e.virtual.slidesBefore + e.virtual.slidesAfter; P += 1)
      r.slidesPerGroup === 1 && v.push(v[v.length - 1] + _),
        g.push(g[g.length - 1] + _),
        (e.virtualSize += _);
  }
  if ((v.length === 0 && (v = [0]), r.spaceBetween !== 0)) {
    const _ = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
    p.filter((P, O) =>
      !r.cssMode || r.loop ? !0 : O !== p.length - 1
    ).forEach((P) => {
      P.style[_] = `${S}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let _ = 0;
    y.forEach((O) => {
      _ += O + (r.spaceBetween ? r.spaceBetween : 0);
    }),
      (_ -= r.spaceBetween);
    const P = _ - s;
    v = v.map((O) => (O < 0 ? -k : O > P ? P + u : O));
  }
  if (r.centerInsufficientSlides) {
    let _ = 0;
    if (
      (y.forEach((P) => {
        _ += P + (r.spaceBetween ? r.spaceBetween : 0);
      }),
      (_ -= r.spaceBetween),
      _ < s)
    ) {
      const P = (s - _) / 2;
      v.forEach((O, D) => {
        v[D] = O - P;
      }),
        g.forEach((O, D) => {
          g[D] = O + P;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: p,
      snapGrid: v,
      slidesGrid: g,
      slidesSizesGrid: y,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    Fr(i, "--swiper-centered-offset-before", `${-v[0]}px`),
      Fr(
        i,
        "--swiper-centered-offset-after",
        `${e.size / 2 - y[y.length - 1] / 2}px`
      );
    const _ = -e.snapGrid[0],
      P = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((O) => O + _)),
      (e.slidesGrid = e.slidesGrid.map((O) => O + P));
  }
  if (
    (h !== m && e.emit("slidesLengthChange"),
    v.length !== d &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    g.length !== f && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !c && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const _ = `${r.containerModifierClass}backface-hidden`,
      P = e.el.classList.contains(_);
    h <= r.maxBackfaceHiddenSlides
      ? P || e.el.classList.add(_)
      : P && e.el.classList.remove(_);
  }
}
function Rm(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    l;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const s = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const a = t.activeIndex + l;
        if (a > t.slides.length && !r) break;
        n.push(s(a));
      }
  else n.push(s(t.activeIndex));
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < "u") {
      const a = n[l].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function Bm() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function Fm(e = (this && this.translate) || 0) {
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: l } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e),
    r.forEach((a) => {
      a.classList.remove(n.slideVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  for (let a = 0; a < r.length; a += 1) {
    const o = r[a];
    let c = o.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const m =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (o.swiperSlideSize + n.spaceBetween),
      p =
        (s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (o.swiperSlideSize + n.spaceBetween),
      h = -(s - c),
      v = h + t.slidesSizesGrid[a];
    ((h >= 0 && h < t.size - 1) ||
      (v > 1 && v <= t.size) ||
      (h <= 0 && v >= t.size)) &&
      (t.visibleSlides.push(o),
      t.visibleSlidesIndexes.push(a),
      r[a].classList.add(n.slideVisibleClass)),
      (o.progress = i ? -m : m),
      (o.originalProgress = i ? -p : p);
  }
}
function Vm(e) {
  const t = this;
  if (typeof e > "u") {
    const m = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * m) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: l, isEnd: s, progressLoop: a } = t;
  const o = l,
    c = s;
  if (r === 0) (i = 0), (l = !0), (s = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const m = Math.abs(e - t.minTranslate()) < 1,
      p = Math.abs(e - t.maxTranslate()) < 1;
    (l = m || i <= 0), (s = p || i >= 1), m && (i = 0), p && (i = 1);
  }
  if (n.loop) {
    const m = t.getSlideIndexByData(0),
      p = t.getSlideIndexByData(t.slides.length - 1),
      h = t.slidesGrid[m],
      v = t.slidesGrid[p],
      g = t.slidesGrid[t.slidesGrid.length - 1],
      y = Math.abs(e);
    y >= h ? (a = (y - h) / g) : (a = (y + g - v) / g), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: l, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !o && t.emit("reachBeginning toEdge"),
    s && !c && t.emit("reachEnd toEdge"),
    ((o && !l) || (c && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function Hm() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    l = e.virtual && n.virtual.enabled,
    s = (o) => Qe(r, `.${n.slideClass}${o}, swiper-slide${o}`)[0];
  t.forEach((o) => {
    o.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let a;
  if (l)
    if (n.loop) {
      let o = i - e.virtual.slidesBefore;
      o < 0 && (o = e.virtual.slides.length + o),
        o >= e.virtual.slides.length && (o -= e.virtual.slides.length),
        (a = s(`[data-swiper-slide-index="${o}"]`));
    } else a = s(`[data-swiper-slide-index="${i}"]`);
  else a = t[i];
  if (a) {
    a.classList.add(n.slideActiveClass);
    let o = _m(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !o && (o = t[0]), o && o.classList.add(n.slideNextClass);
    let c = Tm(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !c === 0 && (c = t[t.length - 1]),
      c && c.classList.add(n.slidePrevClass);
  }
  e.emitSlidesClasses();
}
const Jr = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      const i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      i && i.remove();
    }
  },
  Na = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Ss = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex,
      l = i + r - 1;
    if (e.params.rewind)
      for (let s = i - t; s <= l + t; s += 1) {
        const a = ((s % n) + n) % n;
        a !== i && a > l && Na(e, a);
      }
    else
      for (let s = Math.max(l - t, 0); s <= Math.min(l + t, n - 1); s += 1)
        s !== i && s > l && Na(e, s);
  };
function $m(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let l = 0; l < t.length; l += 1)
    typeof t[l + 1] < "u"
      ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
        ? (i = l)
        : r >= t[l] && r < t[l + 1] && (i = l + 1)
      : r >= t[l] && (i = l);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function bm(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: l, realIndex: s, snapIndex: a } = t;
  let o = e,
    c;
  const m = (h) => {
    let v = h - t.virtual.slidesBefore;
    return (
      v < 0 && (v = t.virtual.slides.length + v),
      v >= t.virtual.slides.length && (v -= t.virtual.slides.length),
      v
    );
  };
  if ((typeof o > "u" && (o = $m(t)), r.indexOf(n) >= 0)) c = r.indexOf(n);
  else {
    const h = Math.min(i.slidesPerGroupSkip, o);
    c = h + Math.floor((o - h) / i.slidesPerGroup);
  }
  if ((c >= r.length && (c = r.length - 1), o === l)) {
    c !== a && ((t.snapIndex = c), t.emit("snapIndexChange")),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = m(o));
    return;
  }
  let p;
  t.virtual && i.virtual.enabled && i.loop
    ? (p = m(o))
    : t.slides[o]
    ? (p = parseInt(
        t.slides[o].getAttribute("data-swiper-slide-index") || o,
        10
      ))
    : (p = o),
    Object.assign(t, {
      previousSnapIndex: a,
      snapIndex: c,
      previousRealIndex: s,
      realIndex: p,
      previousIndex: l,
      activeIndex: o,
    }),
    t.initialized && Ss(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    s !== p && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function Gm(e) {
  const t = this,
    n = t.params,
    r = e.closest(`.${n.slideClass}, swiper-slide`);
  let i = !1,
    l;
  if (r) {
    for (let s = 0; s < t.slides.length; s += 1)
      if (t.slides[s] === r) {
        (i = !0), (l = s);
        break;
      }
  }
  if (r && i)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(
            r.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (t.clickedIndex = l);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
const Um = {
  updateSize: Am,
  updateSlides: Dm,
  updateAutoHeight: Rm,
  updateSlidesOffset: Bm,
  updateSlidesProgress: Fm,
  updateProgress: Vm,
  updateSlidesClasses: Hm,
  updateActiveIndex: bm,
  updateClickedSlide: Gm,
};
function Wm(e = this.isHorizontal() ? "x" : "y") {
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = Cm(l, e);
  return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function Qm(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: l, progress: s } = n;
  let a = 0,
    o = 0;
  const c = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (o = e),
    i.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : o),
    i.cssMode
      ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -o)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (o -= n.cssOverflowAdjustment()),
        (l.style.transform = `translate3d(${a}px, ${o}px, ${c}px)`));
  let m;
  const p = n.maxTranslate() - n.minTranslate();
  p === 0 ? (m = 0) : (m = (e - n.minTranslate()) / p),
    m !== s && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function Ym() {
  return -this.snapGrid[0];
}
function qm() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Km(e = 0, t = this.params.speed, n = !0, r = !0, i) {
  const l = this,
    { params: s, wrapperEl: a } = l;
  if (l.animating && s.preventInteractionOnTransition) return !1;
  const o = l.minTranslate(),
    c = l.maxTranslate();
  let m;
  if (
    (r && e > o ? (m = o) : r && e < c ? (m = c) : (m = e),
    l.updateProgress(m),
    s.cssMode)
  ) {
    const p = l.isHorizontal();
    if (t === 0) a[p ? "scrollLeft" : "scrollTop"] = -m;
    else {
      if (!l.support.smoothScroll)
        return (
          id({ swiper: l, targetPosition: -m, side: p ? "left" : "top" }), !0
        );
      a.scrollTo({ [p ? "left" : "top"]: -m, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(m),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
      : (l.setTransition(t),
        l.setTranslate(m),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (h) {
              !l ||
                l.destroyed ||
                (h.target === this &&
                  (l.wrapperEl.removeEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  n && l.emit("transitionEnd")));
            }),
          l.wrapperEl.addEventListener(
            "transitionend",
            l.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const Xm = {
  getTranslate: Wm,
  setTranslate: Qm,
  minTranslate: Ym,
  maxTranslate: qm,
  translateTo: Km,
};
function Jm(e, t) {
  const n = this;
  n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`),
    n.emit("setTransition", e, t);
}
function ad({ swiper: e, runCallbacks: t, direction: n, step: r }) {
  const { activeIndex: i, previousIndex: l } = e;
  let s = n;
  if (
    (s || (i > l ? (s = "next") : i < l ? (s = "prev") : (s = "reset")),
    e.emit(`transition${r}`),
    t && i !== l)
  ) {
    if (s === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      s === "next"
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`);
  }
}
function Zm(e = !0, t) {
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    ad({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function eh(e = !0, t) {
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      ad({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
const th = { setTransition: Jm, transitionStart: Zm, transitionEnd: eh };
function nh(e = 0, t = this.params.speed, n = !0, r, i) {
  typeof e == "string" && (e = parseInt(e, 10));
  const l = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: c,
    previousIndex: m,
    activeIndex: p,
    rtlTranslate: h,
    wrapperEl: v,
    enabled: g,
  } = l;
  if ((l.animating && a.preventInteractionOnTransition) || (!g && !r && !i))
    return !1;
  const y = Math.min(l.params.slidesPerGroupSkip, s);
  let k = y + Math.floor((s - y) / l.params.slidesPerGroup);
  k >= o.length && (k = o.length - 1);
  const u = -o[k];
  if (a.normalizeSlideIndex)
    for (let f = 0; f < c.length; f += 1) {
      const S = -Math.floor(u * 100),
        T = Math.floor(c[f] * 100),
        x = Math.floor(c[f + 1] * 100);
      typeof c[f + 1] < "u"
        ? S >= T && S < x - (x - T) / 2
          ? (s = f)
          : S >= T && S < x && (s = f + 1)
        : S >= T && (s = f);
    }
  if (
    l.initialized &&
    s !== p &&
    ((!l.allowSlideNext && u < l.translate && u < l.minTranslate()) ||
      (!l.allowSlidePrev &&
        u > l.translate &&
        u > l.maxTranslate() &&
        (p || 0) !== s))
  )
    return !1;
  s !== (m || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(u);
  let d;
  if (
    (s > p ? (d = "next") : s < p ? (d = "prev") : (d = "reset"),
    (h && -u === l.translate) || (!h && u === l.translate))
  )
    return (
      l.updateActiveIndex(s),
      a.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      a.effect !== "slide" && l.setTranslate(u),
      d !== "reset" && (l.transitionStart(n, d), l.transitionEnd(n, d)),
      !1
    );
  if (a.cssMode) {
    const f = l.isHorizontal(),
      S = h ? u : -u;
    if (t === 0) {
      const T = l.virtual && l.params.virtual.enabled;
      T &&
        ((l.wrapperEl.style.scrollSnapType = "none"),
        (l._immediateVirtual = !0)),
        T && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
          ? ((l._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[f ? "scrollLeft" : "scrollTop"] = S;
            }))
          : (v[f ? "scrollLeft" : "scrollTop"] = S),
        T &&
          requestAnimationFrame(() => {
            (l.wrapperEl.style.scrollSnapType = ""), (l._immediateVirtual = !1);
          });
    } else {
      if (!l.support.smoothScroll)
        return (
          id({ swiper: l, targetPosition: S, side: f ? "left" : "top" }), !0
        );
      v.scrollTo({ [f ? "left" : "top"]: S, behavior: "smooth" });
    }
    return !0;
  }
  return (
    l.setTransition(t),
    l.setTranslate(u),
    l.updateActiveIndex(s),
    l.updateSlidesClasses(),
    l.emit("beforeTransitionStart", t, r),
    l.transitionStart(n, d),
    t === 0
      ? l.transitionEnd(n, d)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (S) {
            !l ||
              l.destroyed ||
              (S.target === this &&
                (l.wrapperEl.removeEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, d)));
          }),
        l.wrapperEl.addEventListener(
          "transitionend",
          l.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function rh(e = 0, t = this.params.speed, n = !0, r) {
  typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  let l = e;
  return (
    i.params.loop &&
      (i.virtual && i.params.virtual.enabled
        ? (l = l + i.virtual.slidesBefore)
        : (l = i.getSlideIndexByData(l))),
    i.slideTo(l, t, n, r)
  );
}
function ih(e = this.params.speed, t = !0, n) {
  const r = this,
    { enabled: i, params: l, animating: s } = r;
  if (!i) return r;
  let a = l.slidesPerGroup;
  l.slidesPerView === "auto" &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const o = r.activeIndex < l.slidesPerGroupSkip ? 1 : a,
    c = r.virtual && l.virtual.enabled;
  if (l.loop) {
    if (s && !c && l.loopPreventsSliding) return !1;
    r.loopFix({ direction: "next" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  return l.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + o, e, t, n);
}
function lh(e = this.params.speed, t = !0, n) {
  const r = this,
    {
      params: i,
      snapGrid: l,
      slidesGrid: s,
      rtlTranslate: a,
      enabled: o,
      animating: c,
    } = r;
  if (!o) return r;
  const m = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (c && !m && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const p = a ? r.translate : -r.translate;
  function h(u) {
    return u < 0 ? -Math.floor(Math.abs(u)) : Math.floor(u);
  }
  const v = h(p),
    g = l.map((u) => h(u));
  let y = l[g.indexOf(v) - 1];
  if (typeof y > "u" && i.cssMode) {
    let u;
    l.forEach((d, f) => {
      v >= d && (u = f);
    }),
      typeof u < "u" && (y = l[u > 0 ? u - 1 : u]);
  }
  let k = 0;
  if (
    (typeof y < "u" &&
      ((k = s.indexOf(y)),
      k < 0 && (k = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((k = k - r.slidesPerViewDynamic("previous", !0) + 1),
        (k = Math.max(k, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const u =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(u, e, t, n);
  }
  return r.slideTo(k, e, t, n);
}
function sh(e = this.params.speed, t = !0, n) {
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function oh(e = this.params.speed, t = !0, n, r = 0.5) {
  const i = this;
  let l = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, l),
    a = s + Math.floor((l - s) / i.params.slidesPerGroup),
    o = i.rtlTranslate ? i.translate : -i.translate;
  if (o >= i.snapGrid[a]) {
    const c = i.snapGrid[a],
      m = i.snapGrid[a + 1];
    o - c > (m - c) * r && (l += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[a - 1],
      m = i.snapGrid[a];
    o - c <= (m - c) * r && (l -= i.params.slidesPerGroup);
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, i.slidesGrid.length - 1)),
    i.slideTo(l, e, t, n)
  );
}
function ah() {
  const e = this,
    { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    l;
  const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (l = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Qe(n, `${s}[data-swiper-slide-index="${l}"]`)[0]
            )),
            gs(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            Qe(n, `${s}[data-swiper-slide-index="${l}"]`)[0]
          )),
          gs(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
const uh = {
  slideTo: nh,
  slideToLoop: rh,
  slideNext: ih,
  slidePrev: lh,
  slideReset: sh,
  slideToClosest: oh,
  slideToClickedSlide: ah,
};
function ch(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  Qe(r, `.${n.slideClass}, swiper-slide`).forEach((l, s) => {
    l.setAttribute("data-swiper-slide-index", s);
  }),
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : "next",
    });
}
function dh({
  slideRealIndex: e,
  slideTo: t = !0,
  direction: n,
  setTranslate: r,
  activeSlideIndex: i,
  byController: l,
  byMousewheel: s,
} = {}) {
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: o,
    allowSlidePrev: c,
    allowSlideNext: m,
    slidesEl: p,
    params: h,
  } = a;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && h.virtual.enabled)
  ) {
    t &&
      (!h.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : h.centeredSlides && a.snapIndex < h.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = c),
      (a.allowSlideNext = m),
      a.emit("loopFix");
    return;
  }
  const v =
    h.slidesPerView === "auto"
      ? a.slidesPerViewDynamic()
      : Math.ceil(parseFloat(h.slidesPerView, 10));
  let g = h.loopedSlides || v;
  g % h.slidesPerGroup !== 0 &&
    (g += h.slidesPerGroup - (g % h.slidesPerGroup)),
    (a.loopedSlides = g);
  const y = [],
    k = [];
  let u = a.activeIndex;
  typeof i > "u"
    ? (i = a.getSlideIndex(
        a.slides.filter((x) => x.classList.contains(h.slideActiveClass))[0]
      ))
    : (u = i);
  const d = n === "next" || !n,
    f = n === "prev" || !n;
  let S = 0,
    T = 0;
  if (i < g) {
    S = Math.max(g - i, h.slidesPerGroup);
    for (let x = 0; x < g - i; x += 1) {
      const C = x - Math.floor(x / o.length) * o.length;
      y.push(o.length - C - 1);
    }
  } else if (i > a.slides.length - g * 2) {
    T = Math.max(i - (a.slides.length - g * 2), h.slidesPerGroup);
    for (let x = 0; x < T; x += 1) {
      const C = x - Math.floor(x / o.length) * o.length;
      k.push(C);
    }
  }
  if (
    (f &&
      y.forEach((x) => {
        p.prepend(a.slides[x]);
      }),
    d &&
      k.forEach((x) => {
        p.append(a.slides[x]);
      }),
    a.recalcSlides(),
    h.slidesPerView === "auto" && a.updateSlides(),
    h.watchSlidesProgress && a.updateSlidesOffset(),
    t)
  ) {
    if (y.length > 0 && f)
      if (typeof e > "u") {
        const x = a.slidesGrid[u],
          w = a.slidesGrid[u + S] - x;
        s
          ? a.setTranslate(a.translate - w)
          : (a.slideTo(u + S, 0, !1, !0),
            r && (a.touches[a.isHorizontal() ? "startX" : "startY"] += w));
      } else r && a.slideToLoop(e, 0, !1, !0);
    else if (k.length > 0 && d)
      if (typeof e > "u") {
        const x = a.slidesGrid[u],
          w = a.slidesGrid[u - T] - x;
        s
          ? a.setTranslate(a.translate - w)
          : (a.slideTo(u - T, 0, !1, !0),
            r && (a.touches[a.isHorizontal() ? "startX" : "startY"] += w));
      } else a.slideToLoop(e, 0, !1, !0);
  }
  if (
    ((a.allowSlidePrev = c),
    (a.allowSlideNext = m),
    a.controller && a.controller.control && !l)
  ) {
    const x = {
      slideRealIndex: e,
      slideTo: !1,
      direction: n,
      setTranslate: r,
      activeSlideIndex: i,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((C) => {
          !C.destroyed && C.params.loop && C.loopFix(x);
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix(x);
  }
  a.emit("loopFix");
}
function fh() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const l =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[l] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
const ph = { loopCreate: ch, loopFix: dh, loopDestroy: fh };
function mh(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function hh() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
const vh = { setGrabCursor: mh, unsetGrabCursor: hh };
function gh(e, t = this) {
  function n(r) {
    if (!r || r === qt() || r === Ne()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function yh(e) {
  const t = this,
    n = qt(),
    r = Ne(),
    i = t.touchEventsData;
  i.evCache.push(e);
  const { params: l, touches: s, enabled: a } = t;
  if (
    !a ||
    (!l.simulateTouch && e.pointerType === "mouse") ||
    (t.animating && l.preventInteractionOnTransition)
  )
    return;
  !t.animating && l.cssMode && l.loop && t.loopFix();
  let o = e;
  o.originalEvent && (o = o.originalEvent);
  let c = o.target;
  if (
    (l.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(c)) ||
    ("which" in o && o.which === 3) ||
    ("button" in o && o.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const m = !!l.noSwipingClass && l.noSwipingClass !== "",
    p = e.composedPath ? e.composedPath() : e.path;
  m && o.target && o.target.shadowRoot && p && (c = p[0]);
  const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    v = !!(o.target && o.target.shadowRoot);
  if (l.noSwiping && (v ? gh(h, c) : c.closest(h))) {
    t.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !c.closest(l.swipeHandler)) return;
  (s.currentX = o.pageX), (s.currentY = o.pageY);
  const g = s.currentX,
    y = s.currentY,
    k = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
    u = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
  if (k && (g <= u || g >= r.innerWidth - u))
    if (k === "prevent") e.preventDefault();
    else return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (s.startX = g),
    (s.startY = y),
    (i.touchStartTime = Ci()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (i.allowThresholdMove = !1);
  let d = !0;
  c.matches(i.focusableElements) &&
    ((d = !1), c.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== c &&
      n.activeElement.blur();
  const f = d && t.allowTouchMove && l.touchStartPreventDefault;
  (l.touchStartForcePreventDefault || f) &&
    !c.isContentEditable &&
    o.preventDefault(),
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", o);
}
function Sh(e) {
  const t = qt(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: l, rtlTranslate: s, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let o = e;
  if ((o.originalEvent && (o = o.originalEvent), !r.isTouched)) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
    return;
  }
  const c = r.evCache.findIndex((x) => x.pointerId === o.pointerId);
  c >= 0 && (r.evCache[c] = o);
  const m = r.evCache.length > 1 ? r.evCache[0] : o,
    p = m.pageX,
    h = m.pageY;
  if (o.preventedByNestedSwiper) {
    (l.startX = p), (l.startY = h);
    return;
  }
  if (!n.allowTouchMove) {
    o.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(l, {
          startX: p,
          startY: h,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: p,
          currentY: h,
        }),
        (r.touchStartTime = Ci()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (h < l.startY && n.translate <= n.maxTranslate()) ||
        (h > l.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (p < l.startX && n.translate <= n.maxTranslate()) ||
      (p > l.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    o.target === t.activeElement &&
    o.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (r.allowTouchCallbacks && n.emit("touchMove", o),
    o.targetTouches && o.targetTouches.length > 1)
  )
    return;
  (l.currentX = p), (l.currentY = h);
  const v = l.currentX - l.startX,
    g = l.currentY - l.startY;
  if (n.params.threshold && Math.sqrt(v ** 2 + g ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let x;
    (n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (r.isScrolling = !1)
      : v * v + g * g >= 25 &&
        ((x = (Math.atan2(Math.abs(g), Math.abs(v)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? x > i.touchAngle
          : 90 - x > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", o),
    typeof r.startMoving > "u" &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        r.evCache.length > 1))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && o.cancelable && o.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && o.stopPropagation();
  let y = n.isHorizontal() ? v : g,
    k = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
  i.oneWayMovement &&
    ((y = Math.abs(y) * (s ? 1 : -1)), (k = Math.abs(k) * (s ? 1 : -1))),
    (l.diff = y),
    (y *= i.touchRatio),
    s && ((y = -y), (k = -k));
  const u = n.touchesDirection;
  (n.swipeDirection = y > 0 ? "prev" : "next"),
    (n.touchesDirection = k > 0 ? "prev" : "next");
  const d = n.params.loop && !i.cssMode;
  if (!r.isMoved) {
    if (
      (d && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const x = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(x);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o);
  }
  let f;
  r.isMoved &&
    u !== n.touchesDirection &&
    d &&
    Math.abs(y) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (f = !0)),
    n.emit("sliderMove", o),
    (r.isMoved = !0),
    (r.currentTranslate = y + r.startTranslate);
  let S = !0,
    T = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (T = 0),
    y > 0
      ? (d &&
          !f &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((S = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + y) ** T)))
      : y < 0 &&
        (d &&
          !f &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((S = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - y) ** T))),
    S && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (r.currentTranslate = r.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    n.params.freeMode &&
      i.freeMode.enabled &&
      n.freeMode &&
      n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function wh(e) {
  const t = this,
    n = t.touchEventsData,
    r = n.evCache.findIndex((f) => f.pointerId === e.pointerId);
  if (
    (r >= 0 && n.evCache.splice(r, 1),
    ["pointercancel", "pointerout", "pointerleave"].includes(e.type) &&
      !(
        e.type === "pointercancel" &&
        (t.browser.isSafari || t.browser.isWebView)
      ))
  )
    return;
  const {
    params: i,
    touches: l,
    rtlTranslate: s,
    slidesGrid: a,
    enabled: o,
  } = t;
  if (!o || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let c = e;
  if (
    (c.originalEvent && (c = c.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", c),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  i.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const m = Ci(),
    p = m - n.touchStartTime;
  if (t.allowClick) {
    const f = c.path || (c.composedPath && c.composedPath());
    t.updateClickedSlide((f && f[0]) || c.target),
      t.emit("tap click", c),
      p < 300 &&
        m - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", c);
  }
  if (
    ((n.lastClickTime = Ci()),
    gs(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      l.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let h;
  if (
    (i.followFinger
      ? (h = s ? t.translate : -t.translate)
      : (h = -n.currentTranslate),
    i.cssMode)
  )
    return;
  if (t.params.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: h });
    return;
  }
  let v = 0,
    g = t.slidesSizesGrid[0];
  for (
    let f = 0;
    f < a.length;
    f += f < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const S = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof a[f + S] < "u"
      ? h >= a[f] && h < a[f + S] && ((v = f), (g = a[f + S] - a[f]))
      : h >= a[f] && ((v = f), (g = a[a.length - 1] - a[a.length - 2]));
  }
  let y = null,
    k = null;
  i.rewind &&
    (t.isBeginning
      ? (k =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (y = 0));
  const u = (h - a[v]) / g,
    d = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (p > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (u >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? y : v + d)
        : t.slideTo(v)),
      t.swipeDirection === "prev" &&
        (u > 1 - i.longSwipesRatio
          ? t.slideTo(v + d)
          : k !== null && u < 0 && Math.abs(u) > i.longSwipesRatio
          ? t.slideTo(k)
          : t.slideTo(v));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
      ? c.target === t.navigation.nextEl
        ? t.slideTo(v + d)
        : t.slideTo(v)
      : (t.swipeDirection === "next" && t.slideTo(y !== null ? y : v + d),
        t.swipeDirection === "prev" && t.slideTo(k !== null ? k : v));
  }
}
function Oa() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e,
    s = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = s && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !s
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function xh(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Eh() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const l = e.maxTranslate() - e.minTranslate();
  l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function Ch(e) {
  const t = this;
  Jr(t, e.target), t.update();
}
let za = !1;
function kh() {}
const ud = (e, t) => {
  const n = qt(),
    { params: r, el: i, wrapperEl: l, device: s } = e,
    a = !!r.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    c = t;
  i[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[o]("click", e.onClick, !0),
    r.cssMode && l[o]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[c](
          s.ios || s.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Oa,
          !0
        )
      : e[c]("observerUpdate", Oa, !0),
    i[o]("load", e.onLoad, { capture: !0 });
};
function Th() {
  const e = this,
    t = qt(),
    { params: n } = e;
  (e.onTouchStart = yh.bind(e)),
    (e.onTouchMove = Sh.bind(e)),
    (e.onTouchEnd = wh.bind(e)),
    n.cssMode && (e.onScroll = Eh.bind(e)),
    (e.onClick = xh.bind(e)),
    (e.onLoad = Ch.bind(e)),
    za || (t.addEventListener("touchstart", kh), (za = !0)),
    ud(e, "on");
}
function _h() {
  ud(this, "off");
}
const Ph = { attachEvents: Th, detachEvents: _h },
  Ia = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Lh() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    l = r.breakpoints;
  if (!l || (l && Object.keys(l).length === 0)) return;
  const s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
  if (!s || e.currentBreakpoint === s) return;
  const o = (s in l ? l[s] : void 0) || e.originalParams,
    c = Ia(e, r),
    m = Ia(e, o),
    p = r.enabled;
  c && !m
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !c &&
      m &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((o.grid.fill && o.grid.fill === "column") ||
        (!o.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((y) => {
      const k = r[y] && r[y].enabled,
        u = o[y] && o[y].enabled;
      k && !u && e[y].disable(), !k && u && e[y].enable();
    });
  const h = o.direction && o.direction !== r.direction,
    v = r.loop && (o.slidesPerView !== r.slidesPerView || h);
  h && n && e.changeDirection(), ke(e.params, o);
  const g = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    p && !g ? e.disable() : !p && g && e.enable(),
    (e.currentBreakpoint = s),
    e.emit("_beforeBreakpoint", o),
    v && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
    e.emit("breakpoint", o);
}
function Mh(e, t = "window", n) {
  if (!e || (t === "container" && !n)) return;
  let r = !1;
  const i = Ne(),
    l = t === "window" ? i.innerHeight : n.clientHeight,
    s = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return { value: l * o, point: a };
      }
      return { value: a, point: a };
    });
  s.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < s.length; a += 1) {
    const { point: o, value: c } = s[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = o)
      : c <= n.clientWidth && (r = o);
  }
  return r || "max";
}
const Nh = { setBreakpoint: Lh, getBreakpoint: Mh };
function Oh(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function zh() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: l } = e,
    s = Oh(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: l.android },
        { ios: l.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function Ih() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
const jh = { addClasses: zh, removeClasses: Ih };
function Ah() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > l;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
const Dh = { checkOverflow: Ah },
  ja = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Rh(e, t) {
  return function (r = {}) {
    const i = Object.keys(r)[0],
      l = r[i];
    if (typeof l != "object" || l === null) {
      ke(t, r);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] === !0 &&
        (e[i] = { auto: !0 }),
      !(i in e && "enabled" in l))
    ) {
      ke(t, r);
      return;
    }
    e[i] === !0 && (e[i] = { enabled: !0 }),
      typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      ke(t, r);
  };
}
const gl = {
    eventsEmitter: jm,
    update: Um,
    translate: Xm,
    transition: th,
    slide: uh,
    loop: ph,
    grabCursor: vh,
    events: Ph,
    breakpoints: Nh,
    checkOverflow: Dh,
    classes: jh,
  },
  yl = {};
let mr = class Ze {
  constructor(...t) {
    let n, r;
    t.length === 1 &&
    t[0].constructor &&
    Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
      ? (r = t[0])
      : ([n, r] = t),
      r || (r = {}),
      (r = ke({}, r)),
      n && !r.el && (r.el = n);
    const i = qt();
    if (
      r.el &&
      typeof r.el == "string" &&
      i.querySelectorAll(r.el).length > 1
    ) {
      const o = [];
      return (
        i.querySelectorAll(r.el).forEach((c) => {
          const m = ke({}, r, { el: c });
          o.push(new Ze(m));
        }),
        o
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = od()),
      (l.device = Mm({ userAgent: r.userAgent })),
      (l.browser = Om()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      r.modules && Array.isArray(r.modules) && l.modules.push(...r.modules);
    const s = {};
    l.modules.forEach((o) => {
      o({
        params: r,
        swiper: l,
        extendParams: Rh(r, s),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const a = ke({}, ja, s);
    return (
      (l.params = ke({}, a, yl, r)),
      (l.originalParams = ke({}, l.params)),
      (l.passedParams = ke({}, r)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((o) => {
          l.on(o, l.params.on[o]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: n,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = Qe(n, `.${r.slideClass}, swiper-slide`),
      l = ki(i[0]);
    return ki(t) - l;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = Qe(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      s = (r.maxTranslate() - i) * t + i;
    r.translateTo(s, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t = "current", n = !1) {
    const r = this,
      {
        params: i,
        slides: l,
        slidesGrid: s,
        slidesSizesGrid: a,
        size: o,
        activeIndex: c,
      } = r;
    let m = 1;
    if (i.centeredSlides) {
      let p = l[c].swiperSlideSize,
        h;
      for (let v = c + 1; v < l.length; v += 1)
        l[v] &&
          !h &&
          ((p += l[v].swiperSlideSize), (m += 1), p > o && (h = !0));
      for (let v = c - 1; v >= 0; v -= 1)
        l[v] &&
          !h &&
          ((p += l[v].swiperSlideSize), (m += 1), p > o && (h = !0));
    } else if (t === "current")
      for (let p = c + 1; p < l.length; p += 1)
        (n ? s[p] + a[p] - s[c] < o : s[p] - s[c] < o) && (m += 1);
    else for (let p = c - 1; p >= 0; p -= 1) s[c] - s[p] < o && (m += 1);
    return m;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
        s.complete && Jr(t, s);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let l;
    if (t.params.freeMode && t.params.freeMode.enabled)
      i(), t.params.autoHeight && t.updateAutoHeight();
    else {
      if (
        (t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
      ) {
        const s =
          t.virtual && t.params.virtual.enabled ? t.virtual.slides : t.slides;
        l = t.slideTo(s.length - 1, 0, !1, !0);
      } else l = t.slideTo(t.activeIndex, 0, !1, !0);
      l || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n = !0) {
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((l) => {
          t === "vertical" ? (l.style.width = "") : (l.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n), r.shadowEl && (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let s = (() =>
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : Qe(r, i())[0])();
    return (
      !s &&
        n.params.createElements &&
        ((s = ld("div", n.params.wrapperClass)),
        r.append(s),
        Qe(r, `.${n.params.slideClass}`).forEach((a) => {
          s.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: s,
        slidesEl: n.isElement ? r : s,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || gt(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || gt(r, "direction") === "rtl"),
        wrongRTL: gt(s, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled
          ? n.slideTo(
              n.params.initialSlide + n.virtual.slidesBefore,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            ),
        n.params.loop && n.loopCreate(),
        n.attachEvents(),
        [...n.el.querySelectorAll('[loading="lazy"]')].forEach((i) => {
          i.complete
            ? Jr(n, i)
            : i.addEventListener("load", (l) => {
                Jr(n, l.target);
              });
        }),
        Ss(n),
        (n.initialized = !0),
        Ss(n),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(t = !0, n = !0) {
    const r = this,
      { params: i, el: l, wrapperEl: s, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          l.removeAttribute("style"),
          s.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((o) => {
              o.classList.remove(
                i.slideVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((o) => {
          r.off(o);
        }),
        t !== !1 && ((r.el.swiper = null), xm(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    ke(yl, t);
  }
  static get extendedDefaults() {
    return yl;
  }
  static get defaults() {
    return ja;
  }
  static installModule(t) {
    Ze.prototype.__modules__ || (Ze.prototype.__modules__ = []);
    const n = Ze.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Ze.installModule(n)), Ze)
      : (Ze.installModule(t), Ze);
  }
};
Object.keys(gl).forEach((e) => {
  Object.keys(gl[e]).forEach((t) => {
    mr.prototype[t] = gl[e][t];
  });
});
mr.use([zm, Im]);
function cd(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let l = Qe(e.el, `.${r[i]}`)[0];
          l || ((l = ld("div", r[i])), (l.className = r[i]), e.el.append(l)),
            (n[i] = l),
            (t[i] = l);
        }
      }),
    n
  );
}
function Bh({ swiper: e, extendParams: t, on: n, emit: r }) {
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  const i = (g) => (Array.isArray(g) || (g = [g].filter((y) => !!y)), g);
  function l(g) {
    let y;
    return g &&
      typeof g == "string" &&
      e.isElement &&
      ((y = e.el.shadowRoot.querySelector(g)), y)
      ? y
      : (g &&
          (typeof g == "string" && (y = [...document.querySelectorAll(g)]),
          e.params.uniqueNavElements &&
            typeof g == "string" &&
            y.length > 1 &&
            e.el.querySelectorAll(g).length === 1 &&
            (y = e.el.querySelector(g))),
        g && !y ? g : y);
  }
  function s(g, y) {
    const k = e.params.navigation;
    (g = i(g)),
      g.forEach((u) => {
        u &&
          (u.classList[y ? "add" : "remove"](...k.disabledClass.split(" ")),
          u.tagName === "BUTTON" && (u.disabled = y),
          e.params.watchOverflow &&
            e.enabled &&
            u.classList[e.isLocked ? "add" : "remove"](k.lockClass));
      });
  }
  function a() {
    const { nextEl: g, prevEl: y } = e.navigation;
    if (e.params.loop) {
      s(y, !1), s(g, !1);
      return;
    }
    s(y, e.isBeginning && !e.params.rewind), s(g, e.isEnd && !e.params.rewind);
  }
  function o(g) {
    g.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), r("navigationPrev"));
  }
  function c(g) {
    g.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), r("navigationNext"));
  }
  function m() {
    const g = e.params.navigation;
    if (
      ((e.params.navigation = cd(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(g.nextEl || g.prevEl))
    )
      return;
    let y = l(g.nextEl),
      k = l(g.prevEl);
    Object.assign(e.navigation, { nextEl: y, prevEl: k }),
      (y = i(y)),
      (k = i(k));
    const u = (d, f) => {
      d && d.addEventListener("click", f === "next" ? c : o),
        !e.enabled && d && d.classList.add(...g.lockClass.split(" "));
    };
    y.forEach((d) => u(d, "next")), k.forEach((d) => u(d, "prev"));
  }
  function p() {
    let { nextEl: g, prevEl: y } = e.navigation;
    (g = i(g)), (y = i(y));
    const k = (u, d) => {
      u.removeEventListener("click", d === "next" ? c : o),
        u.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    g.forEach((u) => k(u, "next")), y.forEach((u) => k(u, "prev"));
  }
  n("init", () => {
    e.params.navigation.enabled === !1 ? v() : (m(), a());
  }),
    n("toEdge fromEdge lock unlock", () => {
      a();
    }),
    n("destroy", () => {
      p();
    }),
    n("enable disable", () => {
      let { nextEl: g, prevEl: y } = e.navigation;
      (g = i(g)),
        (y = i(y)),
        [...g, ...y]
          .filter((k) => !!k)
          .forEach((k) =>
            k.classList[e.enabled ? "remove" : "add"](
              e.params.navigation.lockClass
            )
          );
    }),
    n("click", (g, y) => {
      let { nextEl: k, prevEl: u } = e.navigation;
      (k = i(k)), (u = i(u));
      const d = y.target;
      if (e.params.navigation.hideOnClick && !u.includes(d) && !k.includes(d)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === d || e.pagination.el.contains(d))
        )
          return;
        let f;
        k.length
          ? (f = k[0].classList.contains(e.params.navigation.hiddenClass))
          : u.length &&
            (f = u[0].classList.contains(e.params.navigation.hiddenClass)),
          r(f === !0 ? "navigationShow" : "navigationHide"),
          [...k, ...u]
            .filter((S) => !!S)
            .forEach((S) =>
              S.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const h = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        m(),
        a();
    },
    v = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        p();
    };
  Object.assign(e.navigation, {
    enable: h,
    disable: v,
    update: a,
    init: m,
    destroy: p,
  });
}
function Dn(e = "") {
  return `.${e
    .trim()
    .replace(/([\.:!+\/])/g, "\\$1")
    .replace(/ /g, ".")}`;
}
function Fh({ swiper: e, extendParams: t, on: n, emit: r }) {
  const i = "swiper-pagination";
  t({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (u) => u,
      formatFractionTotal: (u) => u,
      bulletClass: `${i}-bullet`,
      bulletActiveClass: `${i}-bullet-active`,
      modifierClass: `${i}-`,
      currentClass: `${i}-current`,
      totalClass: `${i}-total`,
      hiddenClass: `${i}-hidden`,
      progressbarFillClass: `${i}-progressbar-fill`,
      progressbarOppositeClass: `${i}-progressbar-opposite`,
      clickableClass: `${i}-clickable`,
      lockClass: `${i}-lock`,
      horizontalClass: `${i}-horizontal`,
      verticalClass: `${i}-vertical`,
      paginationDisabledClass: `${i}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] });
  let l,
    s = 0;
  const a = (u) => (Array.isArray(u) || (u = [u].filter((d) => !!d)), u);
  function o() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  function c(u, d) {
    const { bulletActiveClass: f } = e.params.pagination;
    u &&
      ((u = u[`${d === "prev" ? "previous" : "next"}ElementSibling`]),
      u &&
        (u.classList.add(`${f}-${d}`),
        (u = u[`${d === "prev" ? "previous" : "next"}ElementSibling`]),
        u && u.classList.add(`${f}-${d}-${d}`)));
  }
  function m(u) {
    const d = u.target.closest(Dn(e.params.pagination.bulletClass));
    if (!d) return;
    u.preventDefault();
    const f = ki(d) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === f) return;
      const S = e.getSlideIndexByData(f),
        T = e.getSlideIndexByData(e.realIndex);
      S > e.slides.length - e.loopedSlides &&
        e.loopFix({
          direction: S > T ? "next" : "prev",
          activeSlideIndex: S,
          slideTo: !1,
        }),
        e.slideToLoop(f);
    } else e.slideTo(f);
  }
  function p() {
    const u = e.rtl,
      d = e.params.pagination;
    if (o()) return;
    let f = e.pagination.el;
    f = a(f);
    let S, T;
    const x =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      C = e.params.loop
        ? Math.ceil(x / e.params.slidesPerGroup)
        : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((T = e.previousRealIndex || 0),
          (S =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex < "u"
        ? ((S = e.snapIndex), (T = e.previousSnapIndex))
        : ((T = e.previousIndex || 0), (S = e.activeIndex || 0)),
      d.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const w = e.pagination.bullets;
      let E, M, _;
      if (
        (d.dynamicBullets &&
          ((l = ys(w[0], e.isHorizontal() ? "width" : "height", !0)),
          f.forEach((P) => {
            P.style[e.isHorizontal() ? "width" : "height"] = `${
              l * (d.dynamicMainBullets + 4)
            }px`;
          }),
          d.dynamicMainBullets > 1 &&
            T !== void 0 &&
            ((s += S - (T || 0)),
            s > d.dynamicMainBullets - 1
              ? (s = d.dynamicMainBullets - 1)
              : s < 0 && (s = 0)),
          (E = Math.max(S - s, 0)),
          (M = E + (Math.min(w.length, d.dynamicMainBullets) - 1)),
          (_ = (M + E) / 2)),
        w.forEach((P) => {
          const O = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (D) => `${d.bulletActiveClass}${D}`
            ),
          ]
            .map((D) =>
              typeof D == "string" && D.includes(" ") ? D.split(" ") : D
            )
            .flat();
          P.classList.remove(...O);
        }),
        f.length > 1)
      )
        w.forEach((P) => {
          const O = ki(P);
          O === S && P.classList.add(...d.bulletActiveClass.split(" ")),
            d.dynamicBullets &&
              (O >= E &&
                O <= M &&
                P.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),
              O === E && c(P, "prev"),
              O === M && c(P, "next"));
        });
      else {
        const P = w[S];
        if (
          (P && P.classList.add(...d.bulletActiveClass.split(" ")),
          d.dynamicBullets)
        ) {
          const O = w[E],
            D = w[M];
          for (let H = E; H <= M; H += 1)
            w[H] &&
              w[H].classList.add(...`${d.bulletActiveClass}-main`.split(" "));
          c(O, "prev"), c(D, "next");
        }
      }
      if (d.dynamicBullets) {
        const P = Math.min(w.length, d.dynamicMainBullets + 4),
          O = (l * P - l) / 2 - _ * l,
          D = u ? "right" : "left";
        w.forEach((H) => {
          H.style[e.isHorizontal() ? D : "top"] = `${O}px`;
        });
      }
    }
    f.forEach((w, E) => {
      if (
        (d.type === "fraction" &&
          (w.querySelectorAll(Dn(d.currentClass)).forEach((M) => {
            M.textContent = d.formatFractionCurrent(S + 1);
          }),
          w.querySelectorAll(Dn(d.totalClass)).forEach((M) => {
            M.textContent = d.formatFractionTotal(C);
          })),
        d.type === "progressbar")
      ) {
        let M;
        d.progressbarOpposite
          ? (M = e.isHorizontal() ? "vertical" : "horizontal")
          : (M = e.isHorizontal() ? "horizontal" : "vertical");
        const _ = (S + 1) / C;
        let P = 1,
          O = 1;
        M === "horizontal" ? (P = _) : (O = _),
          w.querySelectorAll(Dn(d.progressbarFillClass)).forEach((D) => {
            (D.style.transform = `translate3d(0,0,0) scaleX(${P}) scaleY(${O})`),
              (D.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      d.type === "custom" && d.renderCustom
        ? ((w.innerHTML = d.renderCustom(e, S + 1, C)),
          E === 0 && r("paginationRender", w))
        : (E === 0 && r("paginationRender", w), r("paginationUpdate", w)),
        e.params.watchOverflow &&
          e.enabled &&
          w.classList[e.isLocked ? "add" : "remove"](d.lockClass);
    });
  }
  function h() {
    const u = e.params.pagination;
    if (o()) return;
    const d =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.slides.length;
    let f = e.pagination.el;
    f = a(f);
    let S = "";
    if (u.type === "bullets") {
      let T = e.params.loop
        ? Math.ceil(d / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && T > d && (T = d);
      for (let x = 0; x < T; x += 1)
        u.renderBullet
          ? (S += u.renderBullet.call(e, x, u.bulletClass))
          : (S += `<${u.bulletElement} class="${u.bulletClass}"></${u.bulletElement}>`);
    }
    u.type === "fraction" &&
      (u.renderFraction
        ? (S = u.renderFraction.call(e, u.currentClass, u.totalClass))
        : (S = `<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`)),
      u.type === "progressbar" &&
        (u.renderProgressbar
          ? (S = u.renderProgressbar.call(e, u.progressbarFillClass))
          : (S = `<span class="${u.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      f.forEach((T) => {
        u.type !== "custom" && (T.innerHTML = S || ""),
          u.type === "bullets" &&
            e.pagination.bullets.push(...T.querySelectorAll(Dn(u.bulletClass)));
      }),
      u.type !== "custom" && r("paginationRender", f[0]);
  }
  function v() {
    e.params.pagination = cd(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const u = e.params.pagination;
    if (!u.el) return;
    let d;
    typeof u.el == "string" &&
      e.isElement &&
      (d = e.el.shadowRoot.querySelector(u.el)),
      !d &&
        typeof u.el == "string" &&
        (d = [...document.querySelectorAll(u.el)]),
      d || (d = u.el),
      !(!d || d.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof u.el == "string" &&
          Array.isArray(d) &&
          d.length > 1 &&
          ((d = [...e.el.querySelectorAll(u.el)]),
          d.length > 1 &&
            (d = d.filter((f) => sd(f, ".swiper")[0] === e.el)[0])),
        Array.isArray(d) && d.length === 1 && (d = d[0]),
        Object.assign(e.pagination, { el: d }),
        (d = a(d)),
        d.forEach((f) => {
          u.type === "bullets" &&
            u.clickable &&
            f.classList.add(u.clickableClass),
            f.classList.add(u.modifierClass + u.type),
            f.classList.add(
              e.isHorizontal() ? u.horizontalClass : u.verticalClass
            ),
            u.type === "bullets" &&
              u.dynamicBullets &&
              (f.classList.add(`${u.modifierClass}${u.type}-dynamic`),
              (s = 0),
              u.dynamicMainBullets < 1 && (u.dynamicMainBullets = 1)),
            u.type === "progressbar" &&
              u.progressbarOpposite &&
              f.classList.add(u.progressbarOppositeClass),
            u.clickable && f.addEventListener("click", m),
            e.enabled || f.classList.add(u.lockClass);
        }));
  }
  function g() {
    const u = e.params.pagination;
    if (o()) return;
    let d = e.pagination.el;
    d &&
      ((d = a(d)),
      d.forEach((f) => {
        f.classList.remove(u.hiddenClass),
          f.classList.remove(u.modifierClass + u.type),
          f.classList.remove(
            e.isHorizontal() ? u.horizontalClass : u.verticalClass
          ),
          u.clickable && f.removeEventListener("click", m);
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((f) =>
          f.classList.remove(...u.bulletActiveClass.split(" "))
        );
  }
  n("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const u = e.params.pagination;
    let { el: d } = e.pagination;
    (d = a(d)),
      d.forEach((f) => {
        f.classList.remove(u.horizontalClass, u.verticalClass),
          f.classList.add(
            e.isHorizontal() ? u.horizontalClass : u.verticalClass
          );
      });
  }),
    n("init", () => {
      e.params.pagination.enabled === !1 ? k() : (v(), h(), p());
    }),
    n("activeIndexChange", () => {
      typeof e.snapIndex > "u" && p();
    }),
    n("snapIndexChange", () => {
      p();
    }),
    n("snapGridLengthChange", () => {
      h(), p();
    }),
    n("destroy", () => {
      g();
    }),
    n("enable disable", () => {
      let { el: u } = e.pagination;
      u &&
        ((u = a(u)),
        u.forEach((d) =>
          d.classList[e.enabled ? "remove" : "add"](
            e.params.pagination.lockClass
          )
        ));
    }),
    n("lock unlock", () => {
      p();
    }),
    n("click", (u, d) => {
      const f = d.target;
      let { el: S } = e.pagination;
      if (
        (Array.isArray(S) || (S = [S].filter((T) => !!T)),
        e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          S &&
          S.length > 0 &&
          !f.classList.contains(e.params.pagination.bulletClass))
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && f === e.navigation.nextEl) ||
            (e.navigation.prevEl && f === e.navigation.prevEl))
        )
          return;
        const T = S[0].classList.contains(e.params.pagination.hiddenClass);
        r(T === !0 ? "paginationShow" : "paginationHide"),
          S.forEach((x) => x.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const y = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: u } = e.pagination;
      u &&
        ((u = a(u)),
        u.forEach((d) =>
          d.classList.remove(e.params.pagination.paginationDisabledClass)
        )),
        v(),
        h(),
        p();
    },
    k = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: u } = e.pagination;
      u &&
        ((u = a(u)),
        u.forEach((d) =>
          d.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        g();
    };
  Object.assign(e.pagination, {
    enable: y,
    disable: k,
    render: h,
    update: p,
    init: v,
    destroy: g,
  });
}
function Wt(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function yt(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Wt(t[r]) && Wt(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : yt(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function dd(e = {}) {
  return (
    e.navigation &&
    typeof e.navigation.nextEl > "u" &&
    typeof e.navigation.prevEl > "u"
  );
}
function fd(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function pd(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function md(e = "") {
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function Vh(e = "") {
  return e
    ? e.includes("swiper-wrapper")
      ? e
      : `swiper-wrapper ${e}`
    : "swiper-wrapper";
}
const hd = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Hh(e = {}, t = !0) {
  const n = { on: {} },
    r = {},
    i = {};
  yt(n, mr.defaults),
    yt(n, mr.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1);
  const l = {},
    s = hd.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (s.indexOf(o) >= 0
          ? Wt(e[o])
            ? ((n[o] = {}), (i[o] = {}), yt(n[o], e[o]), yt(i[o], e[o]))
            : ((n[o] = e[o]), (i[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
          ? t
            ? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
          : (l[o] = e[o]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
    }),
    { params: n, passedParams: i, rest: l, events: r }
  );
}
function $h(
  { el: e, nextEl: t, prevEl: n, paginationEl: r, scrollbarEl: i, swiper: l },
  s
) {
  dd(s) &&
    t &&
    n &&
    ((l.params.navigation.nextEl = t),
    (l.originalParams.navigation.nextEl = t),
    (l.params.navigation.prevEl = n),
    (l.originalParams.navigation.prevEl = n)),
    fd(s) &&
      r &&
      ((l.params.pagination.el = r), (l.originalParams.pagination.el = r)),
    pd(s) &&
      i &&
      ((l.params.scrollbar.el = i), (l.originalParams.scrollbar.el = i)),
    l.init(e);
}
function bh(e, t, n, r, i) {
  const l = [];
  if (!t) return l;
  const s = (o) => {
    l.indexOf(o) < 0 && l.push(o);
  };
  if (n && r) {
    const o = r.map(i),
      c = n.map(i);
    o.join("") !== c.join("") && s("children"),
      r.length !== n.length && s("children");
  }
  return (
    hd
      .filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (Wt(e[o]) && Wt(t[o])) {
            const c = Object.keys(e[o]),
              m = Object.keys(t[o]);
            c.length !== m.length
              ? s(o)
              : (c.forEach((p) => {
                  e[o][p] !== t[o][p] && s(o);
                }),
                m.forEach((p) => {
                  e[o][p] !== t[o][p] && s(o);
                }));
          } else e[o] !== t[o] && s(o);
      }),
    l
  );
}
function vd(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function gd(e) {
  const t = [];
  return (
    b.Children.toArray(e).forEach((n) => {
      vd(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          gd(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function Gh(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    b.Children.toArray(e).forEach((r) => {
      if (vd(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = gd(r.props.children);
        i.length > 0 ? i.forEach((l) => t.push(l)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function Uh({
  swiper: e,
  slides: t,
  passedParams: n,
  changedParams: r,
  nextEl: i,
  prevEl: l,
  scrollbarEl: s,
  paginationEl: a,
}) {
  const o = r.filter(
      (w) => w !== "children" && w !== "direction" && w !== "wrapperClass"
    ),
    {
      params: c,
      pagination: m,
      navigation: p,
      scrollbar: h,
      virtual: v,
      thumbs: g,
    } = e;
  let y, k, u, d, f, S, T, x;
  r.includes("thumbs") &&
    n.thumbs &&
    n.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (y = !0),
    r.includes("controller") &&
      n.controller &&
      n.controller.control &&
      c.controller &&
      !c.controller.control &&
      (k = !0),
    r.includes("pagination") &&
      n.pagination &&
      (n.pagination.el || a) &&
      (c.pagination || c.pagination === !1) &&
      m &&
      !m.el &&
      (u = !0),
    r.includes("scrollbar") &&
      n.scrollbar &&
      (n.scrollbar.el || s) &&
      (c.scrollbar || c.scrollbar === !1) &&
      h &&
      !h.el &&
      (d = !0),
    r.includes("navigation") &&
      n.navigation &&
      (n.navigation.prevEl || l) &&
      (n.navigation.nextEl || i) &&
      (c.navigation || c.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (f = !0);
  const C = (w) => {
    e[w] &&
      (e[w].destroy(),
      w === "navigation"
        ? (e.isElement && (e[w].prevEl.remove(), e[w].nextEl.remove()),
          (c[w].prevEl = void 0),
          (c[w].nextEl = void 0),
          (e[w].prevEl = void 0),
          (e[w].nextEl = void 0))
        : (e.isElement && e[w].el.remove(),
          (c[w].el = void 0),
          (e[w].el = void 0)));
  };
  r.includes("loop") &&
    e.isElement &&
    (c.loop && !n.loop ? (S = !0) : !c.loop && n.loop ? (T = !0) : (x = !0)),
    o.forEach((w) => {
      if (Wt(c[w]) && Wt(n[w])) yt(c[w], n[w]);
      else {
        const E = n[w];
        (E === !0 || E === !1) &&
        (w === "navigation" || w === "pagination" || w === "scrollbar")
          ? E === !1 && C(w)
          : (c[w] = n[w]);
      }
    }),
    o.includes("controller") &&
      !k &&
      e.controller &&
      e.controller.control &&
      c.controller &&
      c.controller.control &&
      (e.controller.control = c.controller.control),
    r.includes("children") &&
      t &&
      v &&
      c.virtual.enabled &&
      ((v.slides = t), v.update(!0)),
    r.includes("children") && t && c.loop && (x = !0),
    y && g.init() && g.update(!0),
    k && (e.controller.control = c.controller.control),
    u &&
      (e.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        e.el.shadowEl.appendChild(a)),
      a && (c.pagination.el = a),
      m.init(),
      m.render(),
      m.update()),
    d &&
      (e.isElement &&
        (!s || typeof s == "string") &&
        ((s = document.createElement("div")),
        s.classList.add("swiper-scrollbar"),
        e.el.shadowEl.appendChild(s)),
      s && (c.scrollbar.el = s),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    f &&
      (e.isElement &&
        ((!i || typeof i == "string") &&
          ((i = document.createElement("div")),
          i.classList.add("swiper-button-next"),
          e.el.shadowEl.appendChild(i)),
        (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-prev"),
          e.el.shadowEl.appendChild(l))),
      i && (c.navigation.nextEl = i),
      l && (c.navigation.prevEl = l),
      p.init(),
      p.update()),
    r.includes("allowSlideNext") && (e.allowSlideNext = n.allowSlideNext),
    r.includes("allowSlidePrev") && (e.allowSlidePrev = n.allowSlidePrev),
    r.includes("direction") && e.changeDirection(n.direction, !1),
    (S || x) && e.loopDestroy(),
    (T || x) && e.loopCreate(),
    e.update();
}
function Wh(e, t, n) {
  if (!n) return null;
  const r = (m) => {
      let p = m;
      return (
        m < 0 ? (p = t.length + m) : p >= t.length && (p = p - t.length), p
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: l, to: s } = n,
    a = e.params.loop ? -t.length : 0,
    o = e.params.loop ? t.length * 2 : t.length,
    c = [];
  for (let m = a; m < o; m += 1) m >= l && m <= s && c.push(t[r(m)]);
  return c.map((m, p) =>
    b.cloneElement(m, { swiper: e, style: i, key: `slide-${p}` })
  );
}
const Qh = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Kn(e, t) {
  return typeof window > "u" ? R.useEffect(e, t) : R.useLayoutEffect(e, t);
}
const Aa = R.createContext(null),
  Yh = R.createContext(null);
function ws() {
  return (
    (ws = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ws.apply(this, arguments)
  );
}
const yd = R.forwardRef(function (e, t) {
  let {
      className: n,
      tag: r = "div",
      wrapperTag: i = "div",
      children: l,
      onSwiper: s,
      ...a
    } = e === void 0 ? {} : e,
    o = !1;
  const [c, m] = R.useState("swiper"),
    [p, h] = R.useState(null),
    [v, g] = R.useState(!1),
    y = R.useRef(!1),
    k = R.useRef(null),
    u = R.useRef(null),
    d = R.useRef(null),
    f = R.useRef(null),
    S = R.useRef(null),
    T = R.useRef(null),
    x = R.useRef(null),
    C = R.useRef(null),
    { params: w, passedParams: E, rest: M, events: _ } = Hh(a),
    { slides: P, slots: O } = Gh(l),
    D = () => {
      g(!v);
    };
  Object.assign(w.on, {
    _containerClasses(I, A) {
      m(A);
    },
  });
  const H = () => {
    Object.assign(w.on, _), (o = !0);
    const I = { ...w };
    if (
      (delete I.wrapperClass,
      (u.current = new mr(I)),
      u.current.virtual && u.current.params.virtual.enabled)
    ) {
      u.current.virtual.slides = P;
      const A = {
        cache: !1,
        slides: P,
        renderExternal: h,
        renderExternalUpdate: !1,
      };
      yt(u.current.params.virtual, A), yt(u.current.originalParams.virtual, A);
    }
  };
  k.current || H(), u.current && u.current.on("_beforeBreakpoint", D);
  const fe = () => {
      o ||
        !_ ||
        !u.current ||
        Object.keys(_).forEach((I) => {
          u.current.on(I, _[I]);
        });
    },
    ge = () => {
      !_ ||
        !u.current ||
        Object.keys(_).forEach((I) => {
          u.current.off(I, _[I]);
        });
    };
  R.useEffect(() => () => {
    u.current && u.current.off("_beforeBreakpoint", D);
  }),
    R.useEffect(() => {
      !y.current &&
        u.current &&
        (u.current.emitSlidesClasses(), (y.current = !0));
    }),
    Kn(() => {
      if ((t && (t.current = k.current), !!k.current))
        return (
          u.current.destroyed && H(),
          $h(
            {
              el: k.current,
              nextEl: S.current,
              prevEl: T.current,
              paginationEl: x.current,
              scrollbarEl: C.current,
              swiper: u.current,
            },
            w
          ),
          s && s(u.current),
          () => {
            u.current && !u.current.destroyed && u.current.destroy(!0, !1);
          }
        );
    }, []),
    Kn(() => {
      fe();
      const I = bh(E, d.current, P, f.current, (A) => A.key);
      return (
        (d.current = E),
        (f.current = P),
        I.length &&
          u.current &&
          !u.current.destroyed &&
          Uh({
            swiper: u.current,
            slides: P,
            passedParams: E,
            changedParams: I,
            nextEl: S.current,
            prevEl: T.current,
            scrollbarEl: C.current,
            paginationEl: x.current,
          }),
        () => {
          ge();
        }
      );
    }),
    Kn(() => {
      Qh(u.current);
    }, [p]);
  function N() {
    return w.virtual
      ? Wh(u.current, P, p)
      : P.map((I, A) =>
          b.cloneElement(I, { swiper: u.current, swiperSlideIndex: A })
        );
  }
  return b.createElement(
    r,
    ws({ ref: k, className: md(`${c}${n ? ` ${n}` : ""}`) }, M),
    b.createElement(
      Yh.Provider,
      { value: u.current },
      O["container-start"],
      b.createElement(
        i,
        { className: Vh(w.wrapperClass) },
        O["wrapper-start"],
        N(),
        O["wrapper-end"]
      ),
      dd(w) &&
        b.createElement(
          b.Fragment,
          null,
          b.createElement("div", { ref: T, className: "swiper-button-prev" }),
          b.createElement("div", { ref: S, className: "swiper-button-next" })
        ),
      pd(w) &&
        b.createElement("div", { ref: C, className: "swiper-scrollbar" }),
      fd(w) &&
        b.createElement("div", { ref: x, className: "swiper-pagination" }),
      O["container-end"]
    )
  );
});
yd.displayName = "Swiper";
function xs() {
  return (
    (xs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xs.apply(this, arguments)
  );
}
const Sd = R.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: l,
    zoom: s,
    lazy: a,
    virtualIndex: o,
    swiperSlideIndex: c,
    ...m
  } = e === void 0 ? {} : e;
  const p = R.useRef(null),
    [h, v] = R.useState("swiper-slide"),
    [g, y] = R.useState(!1);
  function k(S, T, x) {
    T === p.current && v(x);
  }
  Kn(() => {
    if (
      (typeof c < "u" && (p.current.swiperSlideIndex = c),
      t && (t.current = p.current),
      !(!p.current || !l))
    ) {
      if (l.destroyed) {
        h !== "swiper-slide" && v("swiper-slide");
        return;
      }
      return (
        l.on("_slideClass", k),
        () => {
          l && l.off("_slideClass", k);
        }
      );
    }
  }),
    Kn(() => {
      l && p.current && !l.destroyed && v(l.getSlideClasses(p.current));
    }, [l]);
  const u = {
      isActive: h.indexOf("swiper-slide-active") >= 0,
      isVisible: h.indexOf("swiper-slide-visible") >= 0,
      isPrev: h.indexOf("swiper-slide-prev") >= 0,
      isNext: h.indexOf("swiper-slide-next") >= 0,
    },
    d = () => (typeof r == "function" ? r(u) : r),
    f = () => {
      y(!0);
    };
  return b.createElement(
    n,
    xs(
      {
        ref: p,
        className: md(`${h}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": o,
        onLoad: f,
      },
      m
    ),
    s &&
      b.createElement(
        Aa.Provider,
        { value: u },
        b.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof s == "number" ? s : void 0,
          },
          d(),
          a &&
            !g &&
            b.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !s &&
      b.createElement(
        Aa.Provider,
        { value: u },
        d(),
        a &&
          !g &&
          b.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Sd.displayName = "SwiperSlide";
function qh() {
  const e = ym;
  return (
    console.log(e),
    j.jsx("ul", {
      className: "card-container",
      children: e.map((t, n) =>
        j.jsxs(
          "li",
          {
            className: "card-img",
            style: { maxWidth: "250px" },
            children: [
              j.jsx(yd, {
                modules: [Fh, Bh],
                slidesPerView: 1,
                pagination: !0,
                mousewheel: !0,
                children: t.imgSrc.map((r) =>
                  j.jsx(
                    Sd,
                    {
                      children: j.jsx("img", {
                        src: r,
                        className: "card-img img",
                      }),
                    },
                    r
                  )
                ),
              }),
              j.jsxs("div", {
                className: "card-title-rating",
                children: [
                  j.jsx("span", { className: "b", children: t.title }),
                  j.jsxs("span", {
                    className: " rating",
                    children: [" ", j.jsx(Sm, {}), t.rating],
                  }),
                ],
              }),
              j.jsxs("div", {
                className: "price",
                children: [
                  j.jsx("span", { className: "opacity-70", children: t.desc }),
                  j.jsxs("span", {
                    className: "b ",
                    children: [
                      t.price,
                      "$ ",
                      j.jsx("small", {
                        className: "weight",
                        children: "Night",
                      }),
                      " ",
                    ],
                  }),
                ],
              }),
            ],
          },
          n
        )
      ),
    })
  );
}
function Kh() {
  return j.jsx("div", {
    className: "right-filter-down media-filterbar",
    children: j.jsxs("h2", {
      className: "right-filter-content-down b",
      children: [
        j.jsx(nd, {}),
        j.jsx("span", { className: "media-filtros", children: "Filtros" }),
      ],
    }),
  });
}
function Xh() {
  return j.jsxs("div", {
    className: "main-filterbar",
    children: [j.jsx(hm, {}), j.jsx(Kh, {})],
  });
}
function Jh() {
  return j.jsxs("div", {
    children: [j.jsx(gm, {}), j.jsx(Xh, {}), j.jsx(qh, {})],
  });
}
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ti() {
  return (
    (Ti = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ti.apply(this, arguments)
  );
}
var Bt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Bt || (Bt = {}));
const Da = "popstate";
function Zh(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: l, search: s, hash: a } = r.location;
    return Es(
      "",
      { pathname: l, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : xd(i);
  }
  return tv(t, n, null, e);
}
function wd(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ev() {
  return Math.random().toString(36).substr(2, 8);
}
function Ra(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Es(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ti(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ed(t) : t,
      { state: n, key: (t && t.key) || r || ev() }
    )
  );
}
function xd(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ed(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function tv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: l = !1 } = r,
    s = i.history,
    a = Bt.Pop,
    o = null,
    c = m();
  c == null && ((c = 0), s.replaceState(Ti({}, s.state, { idx: c }), ""));
  function m() {
    return (s.state || { idx: null }).idx;
  }
  function p() {
    a = Bt.Pop;
    let k = m(),
      u = k == null ? null : k - c;
    (c = k), o && o({ action: a, location: y.location, delta: u });
  }
  function h(k, u) {
    a = Bt.Push;
    let d = Es(y.location, k, u);
    n && n(d, k), (c = m() + 1);
    let f = Ra(d, c),
      S = y.createHref(d);
    try {
      s.pushState(f, "", S);
    } catch {
      i.location.assign(S);
    }
    l && o && o({ action: a, location: y.location, delta: 1 });
  }
  function v(k, u) {
    a = Bt.Replace;
    let d = Es(y.location, k, u);
    n && n(d, k), (c = m());
    let f = Ra(d, c),
      S = y.createHref(d);
    s.replaceState(f, "", S),
      l && o && o({ action: a, location: y.location, delta: 0 });
  }
  function g(k) {
    let u = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof k == "string" ? k : xd(k);
    return (
      wd(
        u,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, u)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(k) {
      if (o) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Da, p),
        (o = k),
        () => {
          i.removeEventListener(Da, p), (o = null);
        }
      );
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: g,
    encodeLocation(k) {
      let u = g(k);
      return { pathname: u.pathname, search: u.search, hash: u.hash };
    },
    push: h,
    replace: v,
    go(k) {
      return s.go(k);
    },
  };
  return y;
}
var Ba;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ba || (Ba = {}));
function nv(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const iv = typeof Object.is == "function" ? Object.is : rv,
  { useState: lv, useEffect: sv, useLayoutEffect: ov, useDebugValue: av } = wl;
function uv(e, t, n) {
  const r = t(),
    [{ inst: i }, l] = lv({ inst: { value: r, getSnapshot: t } });
  return (
    ov(() => {
      (i.value = r), (i.getSnapshot = t), Sl(i) && l({ inst: i });
    }, [e, r, t]),
    sv(
      () => (
        Sl(i) && l({ inst: i }),
        e(() => {
          Sl(i) && l({ inst: i });
        })
      ),
      [e]
    ),
    av(r),
    r
  );
}
function Sl(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !iv(n, r);
  } catch {
    return !0;
  }
}
function cv(e, t, n) {
  return t();
}
const dv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  fv = !dv,
  pv = fv ? cv : uv;
"useSyncExternalStore" in wl && ((e) => e.useSyncExternalStore)(wl);
const mv = R.createContext(null),
  Cd = R.createContext(null);
function hv() {
  return R.useContext(Cd) != null;
}
var Fa;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(Fa || (Fa = {}));
var Va;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Va || (Va = {}));
function vv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Bt.Pop,
    navigator: l,
    static: s = !1,
  } = e;
  hv() && wd(!1);
  let a = t.replace(/^\/*/, "/"),
    o = R.useMemo(() => ({ basename: a, navigator: l, static: s }), [a, l, s]);
  typeof r == "string" && (r = Ed(r));
  let {
      pathname: c = "/",
      search: m = "",
      hash: p = "",
      state: h = null,
      key: v = "default",
    } = r,
    g = R.useMemo(() => {
      let y = nv(c, a);
      return y == null
        ? null
        : {
            location: { pathname: y, search: m, hash: p, state: h, key: v },
            navigationType: i,
          };
    }, [a, c, m, p, h, v, i]);
  return g == null
    ? null
    : R.createElement(
        mv.Provider,
        { value: o },
        R.createElement(Cd.Provider, { children: n, value: g })
      );
}
var Ha;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Ha || (Ha = {}));
new Promise(() => {});
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gv(e) {
  let { basename: t, children: n, window: r } = e,
    i = R.useRef();
  i.current == null && (i.current = Zh({ window: r, v5Compat: !0 }));
  let l = i.current,
    [s, a] = R.useState({ action: l.action, location: l.location });
  return (
    R.useLayoutEffect(() => l.listen(a), [l]),
    R.createElement(vv, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
    })
  );
}
var $a;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})($a || ($a = {}));
var ba;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ba || (ba = {}));
xl.createRoot(document.getElementById("root")).render(
  j.jsx(gv, { children: j.jsx(Jh, {}) })
);

function Ed(e, t) {
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
var D = {},
  Cd = {
    get exports() {
      return D;
    },
    set exports(e) {
      D = e;
    },
  },
  ki = {},
  A = {},
  kd = {
    get exports() {
      return A;
    },
    set exports(e) {
      A = e;
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
 */ var mr = Symbol.for("react.element"),
  Td = Symbol.for("react.portal"),
  _d = Symbol.for("react.fragment"),
  Pd = Symbol.for("react.strict_mode"),
  Md = Symbol.for("react.profiler"),
  Nd = Symbol.for("react.provider"),
  Ld = Symbol.for("react.context"),
  Od = Symbol.for("react.forward_ref"),
  zd = Symbol.for("react.suspense"),
  jd = Symbol.for("react.memo"),
  Id = Symbol.for("react.lazy"),
  vo = Symbol.iterator;
function Dd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vo && e[vo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $a = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Wa = Object.assign,
  ba = {};
function kn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ba),
    (this.updater = n || $a);
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
function Qa() {}
Qa.prototype = kn.prototype;
function Ss(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ba),
    (this.updater = n || $a);
}
var xs = (Ss.prototype = new Qa());
xs.constructor = Ss;
Wa(xs, kn.prototype);
xs.isPureReactComponent = !0;
var go = Array.isArray,
  Ya = Object.prototype.hasOwnProperty,
  Es = { current: null },
  qa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ka(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Ya.call(t, r) && !qa.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var o = Array(a), u = 0; u < a; u++) o[u] = arguments[u + 2];
    i.children = o;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: mr,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: Es.current,
  };
}
function Ad(e, t) {
  return {
    $$typeof: mr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Cs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mr;
}
function Rd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var yo = /\/+/g;
function Fi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Rd("" + e.key)
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
          case mr:
          case Td:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Fi(s, 0) : r),
      go(i)
        ? ((n = ""),
          e != null && (n = e.replace(yo, "$&/") + "/"),
          Vr(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Cs(i) &&
            (i = Ad(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(yo, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), go(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var o = r + Fi(l, a);
      s += Vr(l, t, n, o, i);
    }
  else if (((o = Dd(e)), typeof o == "function"))
    for (e = o.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (o = r + Fi(l, a++)), (s += Vr(l, t, n, o, i));
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
function Sr(e, t, n) {
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
function Bd(e) {
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
  Fr = { transition: null },
  Vd = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: Fr,
    ReactCurrentOwner: Es,
  };
B.Children = {
  map: Sr,
  forEach: function (e, t, n) {
    Sr(
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
      Sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Cs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = kn;
B.Fragment = _d;
B.Profiler = Md;
B.PureComponent = Ss;
B.StrictMode = Pd;
B.Suspense = zd;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vd;
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
      (t.ref !== void 0 && ((l = t.ref), (s = Es.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (o in t)
      Ya.call(t, o) &&
        !qa.hasOwnProperty(o) &&
        (r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    a = Array(o);
    for (var u = 0; u < o; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: mr, type: e.type, key: i, ref: l, props: r, _owner: s };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ld,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Nd, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Ka;
B.createFactory = function (e) {
  var t = Ka.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Od, render: e };
};
B.isValidElement = Cs;
B.lazy = function (e) {
  return { $$typeof: Id, _payload: { _status: -1, _result: e }, _init: Bd };
};
B.memo = function (e, t) {
  return { $$typeof: jd, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Fr.transition;
  Fr.transition = {};
  try {
    e();
  } finally {
    Fr.transition = t;
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
})(kd);
const U = Ga(A),
  yl = Ed({ __proto__: null, default: U }, [A]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd = A,
  Hd = Symbol.for("react.element"),
  Ud = Symbol.for("react.fragment"),
  Gd = Object.prototype.hasOwnProperty,
  $d = Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xa(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Gd.call(t, r) && !Wd.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Hd,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: $d.current,
  };
}
ki.Fragment = Ud;
ki.jsx = Xa;
ki.jsxs = Xa;
(function (e) {
  e.exports = ki;
})(Cd);
var wl = {},
  Sl = {},
  bd = {
    get exports() {
      return Sl;
    },
    set exports(e) {
      Sl = e;
    },
  },
  Me = {},
  xl = {},
  Qd = {
    get exports() {
      return xl;
    },
    set exports(e) {
      xl = e;
    },
  },
  Ja = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, z) {
    var j = L.length;
    L.push(z);
    e: for (; 0 < j; ) {
      var H = (j - 1) >>> 1,
        Q = L[H];
      if (0 < i(Q, z)) (L[H] = z), (L[j] = Q), (j = H);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var z = L[0],
      j = L.pop();
    if (j !== z) {
      L[0] = j;
      e: for (var H = 0, Q = L.length, qe = Q >>> 1; H < qe; ) {
        var Ke = 2 * (H + 1) - 1,
          Pn = L[Ke],
          Xe = Ke + 1,
          Kt = L[Xe];
        if (0 > i(Pn, j))
          Xe < Q && 0 > i(Kt, Pn)
            ? ((L[H] = Kt), (L[Xe] = j), (H = Xe))
            : ((L[H] = Pn), (L[Ke] = j), (H = Ke));
        else if (Xe < Q && 0 > i(Kt, j)) (L[H] = Kt), (L[Xe] = j), (H = Xe);
        else break e;
      }
    }
    return z;
  }
  function i(L, z) {
    var j = L.sortIndex - z.sortIndex;
    return j !== 0 ? j : L.id - z.id;
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
    u = [],
    p = 1,
    f = null,
    m = 3,
    v = !1,
    x = !1,
    w = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(L) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= L)
        r(u), (z.sortIndex = z.expirationTime), t(o, z);
      else break;
      z = n(u);
    }
  }
  function S(L) {
    if (((w = !1), h(L), !x))
      if (n(o) !== null) (x = !0), fe(k);
      else {
        var z = n(u);
        z !== null && ge(S, z.startTime - L);
      }
  }
  function k(L, z) {
    (x = !1), w && ((w = !1), c(y), (y = -1)), (v = !0);
    var j = m;
    try {
      for (
        h(z), f = n(o);
        f !== null && (!(f.expirationTime > z) || (L && !_()));

      ) {
        var H = f.callback;
        if (typeof H == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var Q = H(f.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Q == "function" ? (f.callback = Q) : f === n(o) && r(o),
            h(z);
        } else r(o);
        f = n(o);
      }
      if (f !== null) var qe = !0;
      else {
        var Ke = n(u);
        Ke !== null && ge(S, Ke.startTime - z), (qe = !1);
      }
      return qe;
    } finally {
      (f = null), (m = j), (v = !1);
    }
  }
  var g = !1,
    E = null,
    y = -1,
    C = 5,
    M = -1;
  function _() {
    return !(e.unstable_now() - M < C);
  }
  function N() {
    if (E !== null) {
      var L = e.unstable_now();
      M = L;
      var z = !0;
      try {
        z = E(!0, L);
      } finally {
        z ? I() : ((g = !1), (E = null));
      }
    } else g = !1;
  }
  var I;
  if (typeof d == "function")
    I = function () {
      d(N);
    };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(),
      J = R.port2;
    (R.port1.onmessage = N),
      (I = function () {
        J.postMessage(null);
      });
  } else
    I = function () {
      T(N, 0);
    };
  function fe(L) {
    (E = L), g || ((g = !0), I());
  }
  function ge(L, z) {
    y = T(function () {
      L(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || v || ((x = !0), fe(k));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (C = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (L) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var j = m;
      m = z;
      try {
        return L();
      } finally {
        m = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, z) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var j = m;
      m = L;
      try {
        return z();
      } finally {
        m = j;
      }
    }),
    (e.unstable_scheduleCallback = function (L, z, j) {
      var H = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? H + j : H))
          : (j = H),
        L)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = j + Q),
        (L = {
          id: p++,
          callback: z,
          priorityLevel: L,
          startTime: j,
          expirationTime: Q,
          sortIndex: -1,
        }),
        j > H
          ? ((L.sortIndex = j),
            t(u, L),
            n(o) === null &&
              L === n(u) &&
              (w ? (c(y), (y = -1)) : (w = !0), ge(S, j - H)))
          : ((L.sortIndex = Q), t(o, L), x || v || ((x = !0), fe(k))),
        L
      );
    }),
    (e.unstable_shouldYield = _),
    (e.unstable_wrapCallback = function (L) {
      var z = m;
      return function () {
        var j = m;
        m = z;
        try {
          return L.apply(this, arguments);
        } finally {
          m = j;
        }
      };
    });
})(Ja);
(function (e) {
  e.exports = Ja;
})(Qd);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Za = A,
  Pe = xl;
function P(e) {
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
var eu = new Set(),
  Kn = {};
function Qt(e, t) {
  gn(e, t), gn(e + "Capture", t);
}
function gn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) eu.add(t[e]);
}
var lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  El = Object.prototype.hasOwnProperty,
  Yd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wo = {},
  So = {};
function qd(e) {
  return El.call(So, e)
    ? !0
    : El.call(wo, e)
    ? !1
    : Yd.test(e)
    ? (So[e] = !0)
    : ((wo[e] = !0), !1);
}
function Kd(e, t, n, r) {
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
function Xd(e, t, n, r) {
  if (t === null || typeof t > "u" || Kd(e, t, n, r)) return !0;
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
var ks = /[\-:]([a-z])/g;
function Ts(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ks, Ts);
    oe[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ks, Ts);
    oe[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ks, Ts);
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
function _s(e, t, n, r) {
  var i = oe.hasOwnProperty(t) ? oe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Xd(t, n, i, r) && (n = null),
    r || i === null
      ? qd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var ut = Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xr = Symbol.for("react.element"),
  Jt = Symbol.for("react.portal"),
  Zt = Symbol.for("react.fragment"),
  Ps = Symbol.for("react.strict_mode"),
  Cl = Symbol.for("react.profiler"),
  tu = Symbol.for("react.provider"),
  nu = Symbol.for("react.context"),
  Ms = Symbol.for("react.forward_ref"),
  kl = Symbol.for("react.suspense"),
  Tl = Symbol.for("react.suspense_list"),
  Ns = Symbol.for("react.memo"),
  dt = Symbol.for("react.lazy"),
  ru = Symbol.for("react.offscreen"),
  xo = Symbol.iterator;
function Mn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xo && e[xo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  Hi;
function An(e) {
  if (Hi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hi = (t && t[1]) || "";
    }
  return (
    `
` +
    Hi +
    e
  );
}
var Ui = !1;
function Gi(e, t) {
  if (!e || Ui) return "";
  Ui = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
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
    (Ui = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? An(e) : "";
}
function Jd(e) {
  switch (e.tag) {
    case 5:
      return An(e.type);
    case 16:
      return An("Lazy");
    case 13:
      return An("Suspense");
    case 19:
      return An("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gi(e.type, !1)), e;
    case 11:
      return (e = Gi(e.type.render, !1)), e;
    case 1:
      return (e = Gi(e.type, !0)), e;
    default:
      return "";
  }
}
function _l(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zt:
      return "Fragment";
    case Jt:
      return "Portal";
    case Cl:
      return "Profiler";
    case Ps:
      return "StrictMode";
    case kl:
      return "Suspense";
    case Tl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case nu:
        return (e.displayName || "Context") + ".Consumer";
      case tu:
        return (e._context.displayName || "Context") + ".Provider";
      case Ms:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ns:
        return (
          (t = e.displayName || null), t !== null ? t : _l(e.type) || "Memo"
        );
      case dt:
        (t = e._payload), (e = e._init);
        try {
          return _l(e(t));
        } catch {}
    }
  return null;
}
function Zd(e) {
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
      return _l(t);
    case 8:
      return t === Ps ? "StrictMode" : "Mode";
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
function Mt(e) {
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
function iu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ef(e) {
  var t = iu(e) ? "checked" : "value",
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
function Er(e) {
  e._valueTracker || (e._valueTracker = ef(e));
}
function lu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = iu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pl(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Eo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function su(e, t) {
  (t = t.checked), t != null && _s(e, "checked", t, !1);
}
function Ml(e, t) {
  su(e, t);
  var n = Mt(t.value),
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
    ? Nl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Nl(e, t.type, Mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Co(e, t, n) {
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
function Nl(e, t, n) {
  (t !== "number" || Jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rn = Array.isArray;
function dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Mt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ll(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ko(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Mt(n) };
}
function ou(e, t) {
  var n = Mt(t.value),
    r = Mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function To(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function au(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ol(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? au(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Cr,
  uu = (function (e) {
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
        Cr = Cr || document.createElement("div"),
          Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Cr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = {
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
  tf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function (e) {
  tf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
  });
});
function cu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
    ? ("" + t).trim()
    : t + "px";
}
function du(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = cu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var nf = K(
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
function zl(e, t) {
  if (t) {
    if (nf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function jl(e, t) {
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
var Il = null;
function Ls(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Dl = null,
  fn = null,
  pn = null;
function _o(e) {
  if ((e = gr(e))) {
    if (typeof Dl != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = Ni(t)), Dl(e.stateNode, e.type, t));
  }
}
function fu(e) {
  fn ? (pn ? pn.push(e) : (pn = [e])) : (fn = e);
}
function pu() {
  if (fn) {
    var e = fn,
      t = pn;
    if (((pn = fn = null), _o(e), t)) for (e = 0; e < t.length; e++) _o(t[e]);
  }
}
function mu(e, t) {
  return e(t);
}
function hu() {}
var $i = !1;
function vu(e, t, n) {
  if ($i) return e(t, n);
  $i = !0;
  try {
    return mu(e, t, n);
  } finally {
    ($i = !1), (fn !== null || pn !== null) && (hu(), pu());
  }
}
function Jn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ni(n);
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
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var Al = !1;
if (lt)
  try {
    var Nn = {};
    Object.defineProperty(Nn, "passive", {
      get: function () {
        Al = !0;
      },
    }),
      window.addEventListener("test", Nn, Nn),
      window.removeEventListener("test", Nn, Nn);
  } catch {
    Al = !1;
  }
function rf(e, t, n, r, i, l, s, a, o) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var Hn = !1,
  Zr = null,
  ei = !1,
  Rl = null,
  lf = {
    onError: function (e) {
      (Hn = !0), (Zr = e);
    },
  };
function sf(e, t, n, r, i, l, s, a, o) {
  (Hn = !1), (Zr = null), rf.apply(lf, arguments);
}
function of(e, t, n, r, i, l, s, a, o) {
  if ((sf.apply(this, arguments), Hn)) {
    if (Hn) {
      var u = Zr;
      (Hn = !1), (Zr = null);
    } else throw Error(P(198));
    ei || ((ei = !0), (Rl = u));
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
function gu(e) {
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
function Po(e) {
  if (Yt(e) !== e) throw Error(P(188));
}
function af(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yt(e)), t === null)) throw Error(P(188));
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
        if (l === n) return Po(i), e;
        if (l === r) return Po(i), t;
        l = l.sibling;
      }
      throw Error(P(188));
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
        if (!s) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function yu(e) {
  return (e = af(e)), e !== null ? wu(e) : null;
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
var Su = Pe.unstable_scheduleCallback,
  Mo = Pe.unstable_cancelCallback,
  uf = Pe.unstable_shouldYield,
  cf = Pe.unstable_requestPaint,
  Z = Pe.unstable_now,
  df = Pe.unstable_getCurrentPriorityLevel,
  Os = Pe.unstable_ImmediatePriority,
  xu = Pe.unstable_UserBlockingPriority,
  ti = Pe.unstable_NormalPriority,
  ff = Pe.unstable_LowPriority,
  Eu = Pe.unstable_IdlePriority,
  Ti = null,
  Qe = null;
function pf(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function")
    try {
      Qe.onCommitFiberRoot(Ti, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var He = Math.clz32 ? Math.clz32 : vf,
  mf = Math.log,
  hf = Math.LN2;
function vf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((mf(e) / hf) | 0)) | 0;
}
var kr = 64,
  Tr = 4194304;
function Bn(e) {
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
function ni(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Bn(a)) : ((l &= s), l !== 0 && (r = Bn(l)));
  } else (s = n & ~i), s !== 0 ? (r = Bn(s)) : l !== 0 && (r = Bn(l));
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
function gf(e, t) {
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
function yf(e, t) {
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
      ? (!(a & n) || a & r) && (i[s] = gf(a, t))
      : o <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Bl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Cu() {
  var e = kr;
  return (kr <<= 1), !(kr & 4194240) && (kr = 64), e;
}
function Wi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - He(t)),
    (e[t] = n);
}
function wf(e, t) {
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
function zs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var F = 0;
function ku(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Tu,
  js,
  _u,
  Pu,
  Mu,
  Vl = !1,
  _r = [],
  wt = null,
  St = null,
  xt = null,
  Zn = new Map(),
  er = new Map(),
  pt = [],
  Sf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function No(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      wt = null;
      break;
    case "dragenter":
    case "dragleave":
      St = null;
      break;
    case "mouseover":
    case "mouseout":
      xt = null;
      break;
    case "pointerover":
    case "pointerout":
      Zn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      er.delete(t.pointerId);
  }
}
function Ln(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = gr(t)), t !== null && js(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function xf(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (wt = Ln(wt, e, t, n, r, i)), !0;
    case "dragenter":
      return (St = Ln(St, e, t, n, r, i)), !0;
    case "mouseover":
      return (xt = Ln(xt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return Zn.set(l, Ln(Zn.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), er.set(l, Ln(er.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Nu(e) {
  var t = Dt(e.target);
  if (t !== null) {
    var n = Yt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gu(n)), t !== null)) {
          (e.blockedOn = t),
            Mu(e.priority, function () {
              _u(n);
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
function Hr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Il = r), n.target.dispatchEvent(r), (Il = null);
    } else return (t = gr(n)), t !== null && js(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Lo(e, t, n) {
  Hr(e) && n.delete(t);
}
function Ef() {
  (Vl = !1),
    wt !== null && Hr(wt) && (wt = null),
    St !== null && Hr(St) && (St = null),
    xt !== null && Hr(xt) && (xt = null),
    Zn.forEach(Lo),
    er.forEach(Lo);
}
function On(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Vl ||
      ((Vl = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, Ef)));
}
function tr(e) {
  function t(i) {
    return On(i, e);
  }
  if (0 < _r.length) {
    On(_r[0], e);
    for (var n = 1; n < _r.length; n++) {
      var r = _r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    wt !== null && On(wt, e),
      St !== null && On(St, e),
      xt !== null && On(xt, e),
      Zn.forEach(t),
      er.forEach(t),
      n = 0;
    n < pt.length;
    n++
  )
    (r = pt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pt.length && ((n = pt[0]), n.blockedOn === null); )
    Nu(n), n.blockedOn === null && pt.shift();
}
var mn = ut.ReactCurrentBatchConfig,
  ri = !0;
function Cf(e, t, n, r) {
  var i = F,
    l = mn.transition;
  mn.transition = null;
  try {
    (F = 1), Is(e, t, n, r);
  } finally {
    (F = i), (mn.transition = l);
  }
}
function kf(e, t, n, r) {
  var i = F,
    l = mn.transition;
  mn.transition = null;
  try {
    (F = 4), Is(e, t, n, r);
  } finally {
    (F = i), (mn.transition = l);
  }
}
function Is(e, t, n, r) {
  if (ri) {
    var i = Fl(e, t, n, r);
    if (i === null) tl(e, t, r, ii, n), No(e, r);
    else if (xf(i, e, t, n, r)) r.stopPropagation();
    else if ((No(e, r), t & 4 && -1 < Sf.indexOf(e))) {
      for (; i !== null; ) {
        var l = gr(i);
        if (
          (l !== null && Tu(l),
          (l = Fl(e, t, n, r)),
          l === null && tl(e, t, r, ii, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else tl(e, t, r, null, n);
  }
}
var ii = null;
function Fl(e, t, n, r) {
  if (((ii = null), (e = Ls(r)), (e = Dt(e)), e !== null))
    if (((t = Yt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ii = e), null;
}
function Lu(e) {
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
      switch (df()) {
        case Os:
          return 1;
        case xu:
          return 4;
        case ti:
        case ff:
          return 16;
        case Eu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ht = null,
  Ds = null,
  Ur = null;
function Ou() {
  if (Ur) return Ur;
  var e,
    t = Ds,
    n = t.length,
    r,
    i = "value" in ht ? ht.value : ht.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return (Ur = i.slice(e, 1 < r ? 1 - r : void 0));
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
function Pr() {
  return !0;
}
function Oo() {
  return !1;
}
function Ne(e) {
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
        ? Pr
        : Oo),
      (this.isPropagationStopped = Oo),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Pr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pr));
      },
      persist: function () {},
      isPersistent: Pr,
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
  As = Ne(Tn),
  vr = K({}, Tn, { view: 0, detail: 0 }),
  Tf = Ne(vr),
  bi,
  Qi,
  zn,
  _i = K({}, vr, {
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
    getModifierState: Rs,
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
              ? ((bi = e.screenX - zn.screenX), (Qi = e.screenY - zn.screenY))
              : (Qi = bi = 0),
            (zn = e)),
          bi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qi;
    },
  }),
  zo = Ne(_i),
  _f = K({}, _i, { dataTransfer: 0 }),
  Pf = Ne(_f),
  Mf = K({}, vr, { relatedTarget: 0 }),
  Yi = Ne(Mf),
  Nf = K({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lf = Ne(Nf),
  Of = K({}, Tn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zf = Ne(Of),
  jf = K({}, Tn, { data: 0 }),
  jo = Ne(jf),
  If = {
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
  Df = {
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
  Af = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Af[e]) ? !!t[e] : !1;
}
function Rs() {
  return Rf;
}
var Bf = K({}, vr, {
    key: function (e) {
      if (e.key) {
        var t = If[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Df[e.keyCode] || "Unidentified"
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
    getModifierState: Rs,
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
  Vf = Ne(Bf),
  Ff = K({}, _i, {
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
  Io = Ne(Ff),
  Hf = K({}, vr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rs,
  }),
  Uf = Ne(Hf),
  Gf = K({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $f = Ne(Gf),
  Wf = K({}, _i, {
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
  bf = Ne(Wf),
  Qf = [9, 13, 27, 32],
  Bs = lt && "CompositionEvent" in window,
  Un = null;
lt && "documentMode" in document && (Un = document.documentMode);
var Yf = lt && "TextEvent" in window && !Un,
  zu = lt && (!Bs || (Un && 8 < Un && 11 >= Un)),
  Do = String.fromCharCode(32),
  Ao = !1;
function ju(e, t) {
  switch (e) {
    case "keyup":
      return Qf.indexOf(t.keyCode) !== -1;
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
function Iu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function qf(e, t) {
  switch (e) {
    case "compositionend":
      return Iu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ao = !0), Do);
    case "textInput":
      return (e = t.data), e === Do && Ao ? null : e;
    default:
      return null;
  }
}
function Kf(e, t) {
  if (en)
    return e === "compositionend" || (!Bs && ju(e, t))
      ? ((e = Ou()), (Ur = Ds = ht = null), (en = !1), e)
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
      return zu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Xf = {
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
function Ro(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Xf[e.type] : t === "textarea";
}
function Du(e, t, n, r) {
  fu(r),
    (t = li(t, "onChange")),
    0 < t.length &&
      ((n = new As("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Gn = null,
  nr = null;
function Jf(e) {
  bu(e, 0);
}
function Pi(e) {
  var t = rn(e);
  if (lu(t)) return e;
}
function Zf(e, t) {
  if (e === "change") return t;
}
var Au = !1;
if (lt) {
  var qi;
  if (lt) {
    var Ki = "oninput" in document;
    if (!Ki) {
      var Bo = document.createElement("div");
      Bo.setAttribute("oninput", "return;"),
        (Ki = typeof Bo.oninput == "function");
    }
    qi = Ki;
  } else qi = !1;
  Au = qi && (!document.documentMode || 9 < document.documentMode);
}
function Vo() {
  Gn && (Gn.detachEvent("onpropertychange", Ru), (nr = Gn = null));
}
function Ru(e) {
  if (e.propertyName === "value" && Pi(nr)) {
    var t = [];
    Du(t, nr, e, Ls(e)), vu(Jf, t);
  }
}
function ep(e, t, n) {
  e === "focusin"
    ? (Vo(), (Gn = t), (nr = n), Gn.attachEvent("onpropertychange", Ru))
    : e === "focusout" && Vo();
}
function tp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pi(nr);
}
function np(e, t) {
  if (e === "click") return Pi(t);
}
function rp(e, t) {
  if (e === "input" || e === "change") return Pi(t);
}
function ip(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == "function" ? Object.is : ip;
function rr(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!El.call(t, i) || !Ge(e[i], t[i])) return !1;
  }
  return !0;
}
function Fo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ho(e, t) {
  var n = Fo(e);
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
    n = Fo(n);
  }
}
function Bu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Bu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Vu() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function Vs(e) {
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
function lp(e) {
  var t = Vu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Bu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Vs(n)) {
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
          (i = Ho(n, l));
        var s = Ho(n, r);
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
var sp = lt && "documentMode" in document && 11 >= document.documentMode,
  tn = null,
  Hl = null,
  $n = null,
  Ul = !1;
function Uo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ul ||
    tn == null ||
    tn !== Jr(r) ||
    ((r = tn),
    "selectionStart" in r && Vs(r)
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
    ($n && rr($n, r)) ||
      (($n = r),
      (r = li(Hl, "onSelect")),
      0 < r.length &&
        ((t = new As("onSelect", "select", null, t, n)),
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
  Xi = {},
  Fu = {};
lt &&
  ((Fu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nn.animationend.animation,
    delete nn.animationiteration.animation,
    delete nn.animationstart.animation),
  "TransitionEvent" in window || delete nn.transitionend.transition);
function Mi(e) {
  if (Xi[e]) return Xi[e];
  if (!nn[e]) return e;
  var t = nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fu) return (Xi[e] = t[n]);
  return e;
}
var Hu = Mi("animationend"),
  Uu = Mi("animationiteration"),
  Gu = Mi("animationstart"),
  $u = Mi("transitionend"),
  Wu = new Map(),
  Go =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Lt(e, t) {
  Wu.set(e, t), Qt(t, [e]);
}
for (var Ji = 0; Ji < Go.length; Ji++) {
  var Zi = Go[Ji],
    op = Zi.toLowerCase(),
    ap = Zi[0].toUpperCase() + Zi.slice(1);
  Lt(op, "on" + ap);
}
Lt(Hu, "onAnimationEnd");
Lt(Uu, "onAnimationIteration");
Lt(Gu, "onAnimationStart");
Lt("dblclick", "onDoubleClick");
Lt("focusin", "onFocus");
Lt("focusout", "onBlur");
Lt($u, "onTransitionEnd");
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
  up = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));
function $o(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), of(r, t, void 0, e), (e.currentTarget = null);
}
function bu(e, t) {
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
            u = a.currentTarget;
          if (((a = a.listener), o !== l && i.isPropagationStopped())) break e;
          $o(i, a, u), (l = o);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (o = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            o !== l && i.isPropagationStopped())
          )
            break e;
          $o(i, a, u), (l = o);
        }
    }
  }
  if (ei) throw ((e = Rl), (ei = !1), (Rl = null), e);
}
function $(e, t) {
  var n = t[Ql];
  n === void 0 && (n = t[Ql] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Qu(t, e, 2, !1), n.add(r));
}
function el(e, t, n) {
  var r = 0;
  t && (r |= 4), Qu(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function ir(e) {
  if (!e[Nr]) {
    (e[Nr] = !0),
      eu.forEach(function (n) {
        n !== "selectionchange" && (up.has(n) || el(n, !1, e), el(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || ((t[Nr] = !0), el("selectionchange", !1, t));
  }
}
function Qu(e, t, n, r) {
  switch (Lu(t)) {
    case 1:
      var i = Cf;
      break;
    case 4:
      i = kf;
      break;
    default:
      i = Is;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Al ||
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
function tl(e, t, n, r, i) {
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
          if (((s = Dt(a)), s === null)) return;
          if (((o = s.tag), o === 5 || o === 6)) {
            r = l = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  vu(function () {
    var u = l,
      p = Ls(n),
      f = [];
    e: {
      var m = Wu.get(e);
      if (m !== void 0) {
        var v = As,
          x = e;
        switch (e) {
          case "keypress":
            if (Gr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Vf;
            break;
          case "focusin":
            (x = "focus"), (v = Yi);
            break;
          case "focusout":
            (x = "blur"), (v = Yi);
            break;
          case "beforeblur":
          case "afterblur":
            v = Yi;
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
            v = zo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Pf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Uf;
            break;
          case Hu:
          case Uu:
          case Gu:
            v = Lf;
            break;
          case $u:
            v = $f;
            break;
          case "scroll":
            v = Tf;
            break;
          case "wheel":
            v = bf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = zf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Io;
        }
        var w = (t & 4) !== 0,
          T = !w && e === "scroll",
          c = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var d = u, h; d !== null; ) {
          h = d;
          var S = h.stateNode;
          if (
            (h.tag === 5 &&
              S !== null &&
              ((h = S),
              c !== null && ((S = Jn(d, c)), S != null && w.push(lr(d, S, h)))),
            T)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((m = new v(m, x, null, n, p)), f.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Il &&
            (x = n.relatedTarget || n.fromElement) &&
            (Dt(x) || x[st]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((x = n.relatedTarget || n.toElement),
              (v = u),
              (x = x ? Dt(x) : null),
              x !== null &&
                ((T = Yt(x)), x !== T || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((v = null), (x = u)),
          v !== x)
        ) {
          if (
            ((w = zo),
            (S = "onMouseLeave"),
            (c = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Io),
              (S = "onPointerLeave"),
              (c = "onPointerEnter"),
              (d = "pointer")),
            (T = v == null ? m : rn(v)),
            (h = x == null ? m : rn(x)),
            (m = new w(S, d + "leave", v, n, p)),
            (m.target = T),
            (m.relatedTarget = h),
            (S = null),
            Dt(p) === u &&
              ((w = new w(c, d + "enter", x, n, p)),
              (w.target = h),
              (w.relatedTarget = T),
              (S = w)),
            (T = S),
            v && x)
          )
            t: {
              for (w = v, c = x, d = 0, h = w; h; h = Xt(h)) d++;
              for (h = 0, S = c; S; S = Xt(S)) h++;
              for (; 0 < d - h; ) (w = Xt(w)), d--;
              for (; 0 < h - d; ) (c = Xt(c)), h--;
              for (; d--; ) {
                if (w === c || (c !== null && w === c.alternate)) break t;
                (w = Xt(w)), (c = Xt(c));
              }
              w = null;
            }
          else w = null;
          v !== null && Wo(f, m, v, w, !1),
            x !== null && T !== null && Wo(f, T, x, w, !0);
        }
      }
      e: {
        if (
          ((m = u ? rn(u) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var k = Zf;
        else if (Ro(m))
          if (Au) k = rp;
          else {
            k = tp;
            var g = ep;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = np);
        if (k && (k = k(e, u))) {
          Du(f, k, n, p);
          break e;
        }
        g && g(e, m, u),
          e === "focusout" &&
            (g = m._wrapperState) &&
            g.controlled &&
            m.type === "number" &&
            Nl(m, "number", m.value);
      }
      switch (((g = u ? rn(u) : window), e)) {
        case "focusin":
          (Ro(g) || g.contentEditable === "true") &&
            ((tn = g), (Hl = u), ($n = null));
          break;
        case "focusout":
          $n = Hl = tn = null;
          break;
        case "mousedown":
          Ul = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ul = !1), Uo(f, n, p);
          break;
        case "selectionchange":
          if (sp) break;
        case "keydown":
        case "keyup":
          Uo(f, n, p);
      }
      var E;
      if (Bs)
        e: {
          switch (e) {
            case "compositionstart":
              var y = "onCompositionStart";
              break e;
            case "compositionend":
              y = "onCompositionEnd";
              break e;
            case "compositionupdate":
              y = "onCompositionUpdate";
              break e;
          }
          y = void 0;
        }
      else
        en
          ? ju(e, n) && (y = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (y = "onCompositionStart");
      y &&
        (zu &&
          n.locale !== "ko" &&
          (en || y !== "onCompositionStart"
            ? y === "onCompositionEnd" && en && (E = Ou())
            : ((ht = p),
              (Ds = "value" in ht ? ht.value : ht.textContent),
              (en = !0))),
        (g = li(u, y)),
        0 < g.length &&
          ((y = new jo(y, e, null, n, p)),
          f.push({ event: y, listeners: g }),
          E ? (y.data = E) : ((E = Iu(n)), E !== null && (y.data = E)))),
        (E = Yf ? qf(e, n) : Kf(e, n)) &&
          ((u = li(u, "onBeforeInput")),
          0 < u.length &&
            ((p = new jo("onBeforeInput", "beforeinput", null, n, p)),
            f.push({ event: p, listeners: u }),
            (p.data = E)));
    }
    bu(f, t);
  });
}
function lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function li(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Jn(e, n)),
      l != null && r.unshift(lr(e, l, i)),
      (l = Jn(e, t)),
      l != null && r.push(lr(e, l, i))),
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
function Wo(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      o = a.alternate,
      u = a.stateNode;
    if (o !== null && o === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((o = Jn(n, l)), o != null && s.unshift(lr(n, o, a)))
        : i || ((o = Jn(n, l)), o != null && s.push(lr(n, o, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var cp = /\r\n?/g,
  dp = /\u0000|\uFFFD/g;
function bo(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      cp,
      `
`
    )
    .replace(dp, "");
}
function Lr(e, t, n) {
  if (((t = bo(t)), bo(e) !== t && n)) throw Error(P(425));
}
function si() {}
var Gl = null,
  $l = null;
function Wl(e, t) {
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
var bl = typeof setTimeout == "function" ? setTimeout : void 0,
  fp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qo = typeof Promise == "function" ? Promise : void 0,
  pp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qo < "u"
      ? function (e) {
          return Qo.resolve(null).then(e).catch(mp);
        }
      : bl;
function mp(e) {
  setTimeout(function () {
    throw e;
  });
}
function nl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), tr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  tr(t);
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
function Yo(e) {
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
  be = "__reactFiber$" + _n,
  sr = "__reactProps$" + _n,
  st = "__reactContainer$" + _n,
  Ql = "__reactEvents$" + _n,
  hp = "__reactListeners$" + _n,
  vp = "__reactHandles$" + _n;
function Dt(e) {
  var t = e[be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[st] || n[be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Yo(e); e !== null; ) {
          if ((n = e[be])) return n;
          e = Yo(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function gr(e) {
  return (
    (e = e[be] || e[st]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Ni(e) {
  return e[sr] || null;
}
var Yl = [],
  ln = -1;
function Ot(e) {
  return { current: e };
}
function W(e) {
  0 > ln || ((e.current = Yl[ln]), (Yl[ln] = null), ln--);
}
function G(e, t) {
  ln++, (Yl[ln] = e.current), (e.current = t);
}
var Nt = {},
  de = Ot(Nt),
  Se = Ot(!1),
  Ht = Nt;
function yn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nt;
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
function oi() {
  W(Se), W(de);
}
function qo(e, t, n) {
  if (de.current !== Nt) throw Error(P(168));
  G(de, t), G(Se, n);
}
function Yu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, Zd(e) || "Unknown", i));
  return K({}, n, r);
}
function ai(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nt),
    (Ht = de.current),
    G(de, e),
    G(Se, Se.current),
    !0
  );
}
function Ko(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = Yu(e, t, Ht)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Se),
      W(de),
      G(de, e))
    : W(Se),
    G(Se, n);
}
var et = null,
  Li = !1,
  rl = !1;
function qu(e) {
  et === null ? (et = [e]) : et.push(e);
}
function gp(e) {
  (Li = !0), qu(e);
}
function zt() {
  if (!rl && et !== null) {
    rl = !0;
    var e = 0,
      t = F;
    try {
      var n = et;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (et = null), (Li = !1);
    } catch (i) {
      throw (et !== null && (et = et.slice(e + 1)), Su(Os, zt), i);
    } finally {
      (F = t), (rl = !1);
    }
  }
  return null;
}
var sn = [],
  on = 0,
  ui = null,
  ci = 0,
  Oe = [],
  ze = 0,
  Ut = null,
  tt = 1,
  nt = "";
function jt(e, t) {
  (sn[on++] = ci), (sn[on++] = ui), (ui = e), (ci = t);
}
function Ku(e, t, n) {
  (Oe[ze++] = tt), (Oe[ze++] = nt), (Oe[ze++] = Ut), (Ut = e);
  var r = tt;
  e = nt;
  var i = 32 - He(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - He(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (tt = (1 << (32 - He(t) + i)) | (n << i) | r),
      (nt = l + e);
  } else (tt = (1 << l) | (n << i) | r), (nt = e);
}
function Fs(e) {
  e.return !== null && (jt(e, 1), Ku(e, 1, 0));
}
function Hs(e) {
  for (; e === ui; )
    (ui = sn[--on]), (sn[on] = null), (ci = sn[--on]), (sn[on] = null);
  for (; e === Ut; )
    (Ut = Oe[--ze]),
      (Oe[ze] = null),
      (nt = Oe[--ze]),
      (Oe[ze] = null),
      (tt = Oe[--ze]),
      (Oe[ze] = null);
}
var _e = null,
  Te = null,
  b = !1,
  Fe = null;
function Xu(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Xo(e, t) {
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
          ? ((n = Ut !== null ? { id: tt, overflow: nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
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
function ql(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Kl(e) {
  if (b) {
    var t = Te;
    if (t) {
      var n = t;
      if (!Xo(e, t)) {
        if (ql(e)) throw Error(P(418));
        t = Et(n.nextSibling);
        var r = _e;
        t && Xo(e, t)
          ? Xu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (b = !1), (_e = e));
      }
    } else {
      if (ql(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (b = !1), (_e = e);
    }
  }
}
function Jo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _e = e;
}
function Or(e) {
  if (e !== _e) return !1;
  if (!b) return Jo(e), (b = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Wl(e.type, e.memoizedProps))),
    t && (t = Te))
  ) {
    if (ql(e)) throw (Ju(), Error(P(418)));
    for (; t; ) Xu(e, t), (t = Et(t.nextSibling));
  }
  if ((Jo(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
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
function Ju() {
  for (var e = Te; e; ) e = Et(e.nextSibling);
}
function wn() {
  (Te = _e = null), (b = !1);
}
function Us(e) {
  Fe === null ? (Fe = [e]) : Fe.push(e);
}
var yp = ut.ReactCurrentBatchConfig;
function Be(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var di = Ot(null),
  fi = null,
  an = null,
  Gs = null;
function $s() {
  Gs = an = fi = null;
}
function Ws(e) {
  var t = di.current;
  W(di), (e._currentValue = t);
}
function Xl(e, t, n) {
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
  (fi = e),
    (Gs = an = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (we = !0), (e.firstContext = null));
}
function De(e) {
  var t = e._currentValue;
  if (Gs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), an === null)) {
      if (fi === null) throw Error(P(308));
      (an = e), (fi.dependencies = { lanes: 0, firstContext: e });
    } else an = an.next = e;
  return t;
}
var At = null;
function bs(e) {
  At === null ? (At = [e]) : At.push(e);
}
function Zu(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), bs(t)) : ((n.next = i.next), (i.next = n)),
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
function Qs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ec(e, t) {
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
  if (((r = r.shared), V & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      ot(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), bs(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ot(e, n)
  );
}
function $r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zs(e, n);
  }
}
function Zo(e, t) {
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
function pi(e, t, n, r) {
  var i = e.updateQueue;
  ft = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var o = a,
      u = o.next;
    (o.next = null), s === null ? (l = u) : (s.next = u), (s = o);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== s &&
        (a === null ? (p.firstBaseUpdate = u) : (a.next = u),
        (p.lastBaseUpdate = o)));
  }
  if (l !== null) {
    var f = i.baseState;
    (s = 0), (p = u = o = null), (a = l);
    do {
      var m = a.lane,
        v = a.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            w = a;
          switch (((m = t), (v = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                f = x.call(v, f, m);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (m = typeof x == "function" ? x.call(v, f, m) : x),
                m == null)
              )
                break e;
              f = K({}, f, m);
              break e;
            case 2:
              ft = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [a]) : m.push(a));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          p === null ? ((u = p = v), (o = f)) : (p = p.next = v),
          (s |= m);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (o = f),
      (i.baseState = o),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = p),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    ($t |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function ea(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(P(191, i));
        i.call(r);
      }
    }
}
var tc = new Za.Component().refs;
function Jl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Oi = {
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
      t !== null && (Ue(t, e, i, r), $r(t, e, i));
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
      t !== null && (Ue(t, e, i, r), $r(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = Tt(e),
      i = it(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ct(e, i, r)),
      t !== null && (Ue(t, e, r, n), $r(t, e, r));
  },
};
function ta(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !rr(n, r) || !rr(i, l)
      : !0
  );
}
function nc(e, t, n) {
  var r = !1,
    i = Nt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = De(l))
      : ((i = xe(t) ? Ht : de.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? yn(e, i) : Nt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Oi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function na(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Oi.enqueueReplaceState(t, t.state, null);
}
function Zl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = tc), Qs(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = De(l))
    : ((l = xe(t) ? Ht : de.current), (i.context = yn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Jl(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Oi.enqueueReplaceState(i, i.state, null),
      pi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === tc && (a = i.refs = {}),
              s === null ? delete a[l] : (a[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function zr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ra(e) {
  var t = e._init;
  return t(e._payload);
}
function rc(e) {
  function t(c, d) {
    if (e) {
      var h = c.deletions;
      h === null ? ((c.deletions = [d]), (c.flags |= 16)) : h.push(d);
    }
  }
  function n(c, d) {
    if (!e) return null;
    for (; d !== null; ) t(c, d), (d = d.sibling);
    return null;
  }
  function r(c, d) {
    for (c = new Map(); d !== null; )
      d.key !== null ? c.set(d.key, d) : c.set(d.index, d), (d = d.sibling);
    return c;
  }
  function i(c, d) {
    return (c = _t(c, d)), (c.index = 0), (c.sibling = null), c;
  }
  function l(c, d, h) {
    return (
      (c.index = h),
      e
        ? ((h = c.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((c.flags |= 2), d) : h)
            : ((c.flags |= 2), d))
        : ((c.flags |= 1048576), d)
    );
  }
  function s(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function a(c, d, h, S) {
    return d === null || d.tag !== 6
      ? ((d = cl(h, c.mode, S)), (d.return = c), d)
      : ((d = i(d, h)), (d.return = c), d);
  }
  function o(c, d, h, S) {
    var k = h.type;
    return k === Zt
      ? p(c, d, h.props.children, S, h.key)
      : d !== null &&
        (d.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === dt &&
            ra(k) === d.type))
      ? ((S = i(d, h.props)), (S.ref = jn(c, d, h)), (S.return = c), S)
      : ((S = Kr(h.type, h.key, h.props, null, c.mode, S)),
        (S.ref = jn(c, d, h)),
        (S.return = c),
        S);
  }
  function u(c, d, h, S) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = dl(h, c.mode, S)), (d.return = c), d)
      : ((d = i(d, h.children || [])), (d.return = c), d);
  }
  function p(c, d, h, S, k) {
    return d === null || d.tag !== 7
      ? ((d = Ft(h, c.mode, S, k)), (d.return = c), d)
      : ((d = i(d, h)), (d.return = c), d);
  }
  function f(c, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = cl("" + d, c.mode, h)), (d.return = c), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case xr:
          return (
            (h = Kr(d.type, d.key, d.props, null, c.mode, h)),
            (h.ref = jn(c, null, d)),
            (h.return = c),
            h
          );
        case Jt:
          return (d = dl(d, c.mode, h)), (d.return = c), d;
        case dt:
          var S = d._init;
          return f(c, S(d._payload), h);
      }
      if (Rn(d) || Mn(d))
        return (d = Ft(d, c.mode, h, null)), (d.return = c), d;
      zr(c, d);
    }
    return null;
  }
  function m(c, d, h, S) {
    var k = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : a(c, d, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case xr:
          return h.key === k ? o(c, d, h, S) : null;
        case Jt:
          return h.key === k ? u(c, d, h, S) : null;
        case dt:
          return (k = h._init), m(c, d, k(h._payload), S);
      }
      if (Rn(h) || Mn(h)) return k !== null ? null : p(c, d, h, S, null);
      zr(c, h);
    }
    return null;
  }
  function v(c, d, h, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (c = c.get(h) || null), a(d, c, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case xr:
          return (c = c.get(S.key === null ? h : S.key) || null), o(d, c, S, k);
        case Jt:
          return (c = c.get(S.key === null ? h : S.key) || null), u(d, c, S, k);
        case dt:
          var g = S._init;
          return v(c, d, h, g(S._payload), k);
      }
      if (Rn(S) || Mn(S)) return (c = c.get(h) || null), p(d, c, S, k, null);
      zr(d, S);
    }
    return null;
  }
  function x(c, d, h, S) {
    for (
      var k = null, g = null, E = d, y = (d = 0), C = null;
      E !== null && y < h.length;
      y++
    ) {
      E.index > y ? ((C = E), (E = null)) : (C = E.sibling);
      var M = m(c, E, h[y], S);
      if (M === null) {
        E === null && (E = C);
        break;
      }
      e && E && M.alternate === null && t(c, E),
        (d = l(M, d, y)),
        g === null ? (k = M) : (g.sibling = M),
        (g = M),
        (E = C);
    }
    if (y === h.length) return n(c, E), b && jt(c, y), k;
    if (E === null) {
      for (; y < h.length; y++)
        (E = f(c, h[y], S)),
          E !== null &&
            ((d = l(E, d, y)), g === null ? (k = E) : (g.sibling = E), (g = E));
      return b && jt(c, y), k;
    }
    for (E = r(c, E); y < h.length; y++)
      (C = v(E, c, y, h[y], S)),
        C !== null &&
          (e && C.alternate !== null && E.delete(C.key === null ? y : C.key),
          (d = l(C, d, y)),
          g === null ? (k = C) : (g.sibling = C),
          (g = C));
    return (
      e &&
        E.forEach(function (_) {
          return t(c, _);
        }),
      b && jt(c, y),
      k
    );
  }
  function w(c, d, h, S) {
    var k = Mn(h);
    if (typeof k != "function") throw Error(P(150));
    if (((h = k.call(h)), h == null)) throw Error(P(151));
    for (
      var g = (k = null), E = d, y = (d = 0), C = null, M = h.next();
      E !== null && !M.done;
      y++, M = h.next()
    ) {
      E.index > y ? ((C = E), (E = null)) : (C = E.sibling);
      var _ = m(c, E, M.value, S);
      if (_ === null) {
        E === null && (E = C);
        break;
      }
      e && E && _.alternate === null && t(c, E),
        (d = l(_, d, y)),
        g === null ? (k = _) : (g.sibling = _),
        (g = _),
        (E = C);
    }
    if (M.done) return n(c, E), b && jt(c, y), k;
    if (E === null) {
      for (; !M.done; y++, M = h.next())
        (M = f(c, M.value, S)),
          M !== null &&
            ((d = l(M, d, y)), g === null ? (k = M) : (g.sibling = M), (g = M));
      return b && jt(c, y), k;
    }
    for (E = r(c, E); !M.done; y++, M = h.next())
      (M = v(E, c, y, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? y : M.key),
          (d = l(M, d, y)),
          g === null ? (k = M) : (g.sibling = M),
          (g = M));
    return (
      e &&
        E.forEach(function (N) {
          return t(c, N);
        }),
      b && jt(c, y),
      k
    );
  }
  function T(c, d, h, S) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Zt &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case xr:
          e: {
            for (var k = h.key, g = d; g !== null; ) {
              if (g.key === k) {
                if (((k = h.type), k === Zt)) {
                  if (g.tag === 7) {
                    n(c, g.sibling),
                      (d = i(g, h.props.children)),
                      (d.return = c),
                      (c = d);
                    break e;
                  }
                } else if (
                  g.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === dt &&
                    ra(k) === g.type)
                ) {
                  n(c, g.sibling),
                    (d = i(g, h.props)),
                    (d.ref = jn(c, g, h)),
                    (d.return = c),
                    (c = d);
                  break e;
                }
                n(c, g);
                break;
              } else t(c, g);
              g = g.sibling;
            }
            h.type === Zt
              ? ((d = Ft(h.props.children, c.mode, S, h.key)),
                (d.return = c),
                (c = d))
              : ((S = Kr(h.type, h.key, h.props, null, c.mode, S)),
                (S.ref = jn(c, d, h)),
                (S.return = c),
                (c = S));
          }
          return s(c);
        case Jt:
          e: {
            for (g = h.key; d !== null; ) {
              if (d.key === g)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(c, d.sibling),
                    (d = i(d, h.children || [])),
                    (d.return = c),
                    (c = d);
                  break e;
                } else {
                  n(c, d);
                  break;
                }
              else t(c, d);
              d = d.sibling;
            }
            (d = dl(h, c.mode, S)), (d.return = c), (c = d);
          }
          return s(c);
        case dt:
          return (g = h._init), T(c, d, g(h._payload), S);
      }
      if (Rn(h)) return x(c, d, h, S);
      if (Mn(h)) return w(c, d, h, S);
      zr(c, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(c, d.sibling), (d = i(d, h)), (d.return = c), (c = d))
          : (n(c, d), (d = cl(h, c.mode, S)), (d.return = c), (c = d)),
        s(c))
      : n(c, d);
  }
  return T;
}
var Sn = rc(!0),
  ic = rc(!1),
  yr = {},
  Ye = Ot(yr),
  or = Ot(yr),
  ar = Ot(yr);
function Rt(e) {
  if (e === yr) throw Error(P(174));
  return e;
}
function Ys(e, t) {
  switch ((G(ar, t), G(or, e), G(Ye, yr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ol(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ol(t, e));
  }
  W(Ye), G(Ye, t);
}
function xn() {
  W(Ye), W(or), W(ar);
}
function lc(e) {
  Rt(ar.current);
  var t = Rt(Ye.current),
    n = Ol(t, e.type);
  t !== n && (G(or, e), G(Ye, n));
}
function qs(e) {
  or.current === e && (W(Ye), W(or));
}
var Y = Ot(0);
function mi(e) {
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
var il = [];
function Ks() {
  for (var e = 0; e < il.length; e++)
    il[e]._workInProgressVersionPrimary = null;
  il.length = 0;
}
var Wr = ut.ReactCurrentDispatcher,
  ll = ut.ReactCurrentBatchConfig,
  Gt = 0,
  q = null,
  te = null,
  re = null,
  hi = !1,
  Wn = !1,
  ur = 0,
  wp = 0;
function ae() {
  throw Error(P(321));
}
function Xs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ge(e[n], t[n])) return !1;
  return !0;
}
function Js(e, t, n, r, i, l) {
  if (
    ((Gt = l),
    (q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wr.current = e === null || e.memoizedState === null ? Cp : kp),
    (e = n(r, i)),
    Wn)
  ) {
    l = 0;
    do {
      if (((Wn = !1), (ur = 0), 25 <= l)) throw Error(P(301));
      (l += 1),
        (re = te = null),
        (t.updateQueue = null),
        (Wr.current = Tp),
        (e = n(r, i));
    } while (Wn);
  }
  if (
    ((Wr.current = vi),
    (t = te !== null && te.next !== null),
    (Gt = 0),
    (re = te = q = null),
    (hi = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Zs() {
  var e = ur !== 0;
  return (ur = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (q.memoizedState = re = e) : (re = re.next = e), re;
}
function Ae() {
  if (te === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = re === null ? q.memoizedState : re.next;
  if (t !== null) (re = t), (te = e);
  else {
    if (e === null) throw Error(P(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      re === null ? (q.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function sl(e) {
  var t = Ae(),
    n = t.queue;
  if (n === null) throw Error(P(311));
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
      u = l;
    do {
      var p = u.lane;
      if ((Gt & p) === p)
        o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        o === null ? ((a = o = f), (s = r)) : (o = o.next = f),
          (q.lanes |= p),
          ($t |= p);
      }
      u = u.next;
    } while (u !== null && u !== l);
    o === null ? (s = r) : (o.next = a),
      Ge(r, t.memoizedState) || (we = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = o),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (q.lanes |= l), ($t |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ol(e) {
  var t = Ae(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    Ge(l, t.memoizedState) || (we = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function sc() {}
function oc(e, t) {
  var n = q,
    r = Ae(),
    i = t(),
    l = !Ge(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (we = !0)),
    (r = r.queue),
    eo(cc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      dr(9, uc.bind(null, n, r, i, t), void 0, null),
      ie === null)
    )
      throw Error(P(349));
    Gt & 30 || ac(n, t, i);
  }
  return i;
}
function ac(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function uc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), dc(t) && fc(e);
}
function cc(e, t, n) {
  return n(function () {
    dc(t) && fc(e);
  });
}
function dc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ge(e, n);
  } catch {
    return !0;
  }
}
function fc(e) {
  var t = ot(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function ia(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ep.bind(null, q, e)),
    [t.memoizedState, e]
  );
}
function dr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function pc() {
  return Ae().memoizedState;
}
function br(e, t, n, r) {
  var i = We();
  (q.flags |= e),
    (i.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r));
}
function zi(e, t, n, r) {
  var i = Ae();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (te !== null) {
    var s = te.memoizedState;
    if (((l = s.destroy), r !== null && Xs(r, s.deps))) {
      i.memoizedState = dr(t, n, l, r);
      return;
    }
  }
  (q.flags |= e), (i.memoizedState = dr(1 | t, n, l, r));
}
function la(e, t) {
  return br(8390656, 8, e, t);
}
function eo(e, t) {
  return zi(2048, 8, e, t);
}
function mc(e, t) {
  return zi(4, 2, e, t);
}
function hc(e, t) {
  return zi(4, 4, e, t);
}
function vc(e, t) {
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
function gc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), zi(4, 4, vc.bind(null, t, e), n)
  );
}
function to() {}
function yc(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wc(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sc(e, t, n) {
  return Gt & 21
    ? (Ge(n, t) || ((n = Cu()), (q.lanes |= n), ($t |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = n));
}
function Sp(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ll.transition;
  ll.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (ll.transition = r);
  }
}
function xc() {
  return Ae().memoizedState;
}
function xp(e, t, n) {
  var r = Tt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ec(e))
  )
    Cc(t, n);
  else if (((n = Zu(e, t, n, r)), n !== null)) {
    var i = me();
    Ue(n, e, r, i), kc(n, t, r);
  }
}
function Ep(e, t, n) {
  var r = Tt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ec(e)) Cc(t, i);
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
        if (((i.hasEagerState = !0), (i.eagerState = a), Ge(a, s))) {
          var o = t.interleaved;
          o === null
            ? ((i.next = i), bs(t))
            : ((i.next = o.next), (o.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Zu(e, t, i, r)),
      n !== null && ((i = me()), Ue(n, e, r, i), kc(n, t, r));
  }
}
function Ec(e) {
  var t = e.alternate;
  return e === q || (t !== null && t === q);
}
function Cc(e, t) {
  Wn = hi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function kc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zs(e, n);
  }
}
var vi = {
    readContext: De,
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
  Cp = {
    readContext: De,
    useCallback: function (e, t) {
      return (We().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: la,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        br(4194308, 4, vc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return br(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return br(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
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
        (e = e.dispatch = xp.bind(null, q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ia,
    useDebugValue: to,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = ia(!1),
        t = e[0];
      return (e = Sp.bind(null, e[1])), (We().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = q,
        i = We();
      if (b) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), ie === null)) throw Error(P(349));
        Gt & 30 || ac(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        la(cc.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        dr(9, uc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = ie.identifierPrefix;
      if (b) {
        var n = nt,
          r = tt;
        (n = (r & ~(1 << (32 - He(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ur++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = wp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  kp = {
    readContext: De,
    useCallback: yc,
    useContext: De,
    useEffect: eo,
    useImperativeHandle: gc,
    useInsertionEffect: mc,
    useLayoutEffect: hc,
    useMemo: wc,
    useReducer: sl,
    useRef: pc,
    useState: function () {
      return sl(cr);
    },
    useDebugValue: to,
    useDeferredValue: function (e) {
      var t = Ae();
      return Sc(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = sl(cr)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: sc,
    useSyncExternalStore: oc,
    useId: xc,
    unstable_isNewReconciler: !1,
  },
  Tp = {
    readContext: De,
    useCallback: yc,
    useContext: De,
    useEffect: eo,
    useImperativeHandle: gc,
    useInsertionEffect: mc,
    useLayoutEffect: hc,
    useMemo: wc,
    useReducer: ol,
    useRef: pc,
    useState: function () {
      return ol(cr);
    },
    useDebugValue: to,
    useDeferredValue: function (e) {
      var t = Ae();
      return te === null ? (t.memoizedState = e) : Sc(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = ol(cr)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: sc,
    useSyncExternalStore: oc,
    useId: xc,
    unstable_isNewReconciler: !1,
  };
function En(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Jd(r)), (r = r.return);
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
function al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function es(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var _p = typeof WeakMap == "function" ? WeakMap : Map;
function Tc(e, t, n) {
  (n = it(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yi || ((yi = !0), (cs = r)), es(e, t);
    }),
    n
  );
}
function _c(e, t, n) {
  (n = it(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        es(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        es(e, t),
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
function sa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _p();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Fp.bind(null, e, t, n)), t.then(e, e));
}
function oa(e) {
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
function aa(e, t, n, r, i) {
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
var Pp = ut.ReactCurrentOwner,
  we = !1;
function pe(e, t, n, r) {
  t.child = e === null ? ic(t, null, n, r) : Sn(t, e.child, n, r);
}
function ua(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    hn(t, i),
    (r = Js(e, t, n, r, l, i)),
    (n = Zs()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        at(e, t, i))
      : (b && n && Fs(t), (t.flags |= 1), pe(e, t, r, i), t.child)
  );
}
function ca(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !uo(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Pc(e, t, l, r, i))
      : ((e = Kr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : rr), n(s, r) && e.ref === t.ref)
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
function Pc(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (rr(l, r) && e.ref === t.ref)
      if (((we = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (we = !0);
      else return (t.lanes = e.lanes), at(e, t, i);
  }
  return ts(e, t, n, r, i);
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
function ts(e, t, n, r, i) {
  var l = xe(n) ? Ht : de.current;
  return (
    (l = yn(t, l)),
    hn(t, i),
    (n = Js(e, t, n, r, l, i)),
    (r = Zs()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        at(e, t, i))
      : (b && r && Fs(t), (t.flags |= 1), pe(e, t, n, i), t.child)
  );
}
function da(e, t, n, r, i) {
  if (xe(n)) {
    var l = !0;
    ai(t);
  } else l = !1;
  if ((hn(t, i), t.stateNode === null))
    Qr(e, t), nc(t, n, r), Zl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var o = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = De(u))
      : ((u = xe(n) ? Ht : de.current), (u = yn(t, u)));
    var p = n.getDerivedStateFromProps,
      f =
        typeof p == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || o !== u) && na(t, s, r, u)),
      (ft = !1);
    var m = t.memoizedState;
    (s.state = m),
      pi(t, r, s, i),
      (o = t.memoizedState),
      a !== r || m !== o || Se.current || ft
        ? (typeof p == "function" && (Jl(t, n, p, r), (o = t.memoizedState)),
          (a = ft || ta(t, n, a, r, m, o, u))
            ? (f ||
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
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      ec(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Be(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (m = s.context),
      (o = n.contextType),
      typeof o == "object" && o !== null
        ? (o = De(o))
        : ((o = xe(n) ? Ht : de.current), (o = yn(t, o)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || m !== o) && na(t, s, r, o)),
      (ft = !1),
      (m = t.memoizedState),
      (s.state = m),
      pi(t, r, s, i);
    var x = t.memoizedState;
    a !== f || m !== x || Se.current || ft
      ? (typeof v == "function" && (Jl(t, n, v, r), (x = t.memoizedState)),
        (u = ft || ta(t, n, u, r, m, x, o) || !1)
          ? (p ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, x, o),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, x, o)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (s.props = r),
        (s.state = x),
        (s.context = o),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ns(e, t, n, r, l, i);
}
function ns(e, t, n, r, i, l) {
  Nc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Ko(t, n, !1), at(e, t, l);
  (r = t.stateNode), (Pp.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Sn(t, e.child, null, l)), (t.child = Sn(t, null, a, l)))
      : pe(e, t, a, l),
    (t.memoizedState = r.state),
    i && Ko(t, n, !0),
    t.child
  );
}
function Lc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? qo(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qo(e, t.context, !1),
    Ys(e, t.containerInfo);
}
function fa(e, t, n, r, i) {
  return wn(), Us(i), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var rs = { dehydrated: null, treeContext: null, retryLane: 0 };
function is(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Oc(e, t, n) {
  var r = t.pendingProps,
    i = Y.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    G(Y, i & 1),
    e === null)
  )
    return (
      Kl(t),
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
                : (l = Di(s, r, 0, null)),
              (e = Ft(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = is(n)),
              (t.memoizedState = rs),
              e)
            : no(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Mp(e, t, s, r, a, i, n);
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
      a !== null ? (l = _t(a, l)) : ((l = Ft(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? is(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = rs),
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
function no(e, t) {
  return (
    (t = Di({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jr(e, t, n, r) {
  return (
    r !== null && Us(r),
    Sn(t, e.child, null, n),
    (e = no(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Mp(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = al(Error(P(422)))), jr(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = Di({ mode: "visible", children: r.children }, i, 0, null)),
        (l = Ft(l, i, s, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Sn(t, e.child, null, s),
        (t.child.memoizedState = is(s)),
        (t.memoizedState = rs),
        l);
  if (!(t.mode & 1)) return jr(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(P(419))), (r = al(l, r, void 0)), jr(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), we || a)) {
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
          ((l.retryLane = i), ot(e, i), Ue(r, e, i, -1));
    }
    return ao(), (r = al(Error(P(421)))), jr(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Hp.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Te = Et(i.nextSibling)),
      (_e = t),
      (b = !0),
      (Fe = null),
      e !== null &&
        ((Oe[ze++] = tt),
        (Oe[ze++] = nt),
        (Oe[ze++] = Ut),
        (tt = e.id),
        (nt = e.overflow),
        (Ut = t)),
      (t = no(t, r.children)),
      (t.flags |= 4096),
      t);
}
function pa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xl(e.return, t, n);
}
function ul(e, t, n, r, i) {
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
function zc(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((pe(e, t, r.children, n), (r = Y.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && pa(e, n, t);
        else if (e.tag === 19) pa(e, n, t);
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
  if ((G(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && mi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ul(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && mi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ul(t, !0, n, null, l);
        break;
      case "together":
        ul(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function at(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($t |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
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
function Np(e, t, n) {
  switch (t.tag) {
    case 3:
      Lc(t), wn();
      break;
    case 5:
      lc(t);
      break;
    case 1:
      xe(t.type) && ai(t);
      break;
    case 4:
      Ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      G(di, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Oc(e, t, n)
          : (G(Y, Y.current & 1),
            (e = at(e, t, n)),
            e !== null ? e.sibling : null);
      G(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return zc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        G(Y, Y.current),
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
var jc, ls, Ic, Dc;
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
ls = function () {};
Ic = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Rt(Ye.current);
    var l = null;
    switch (n) {
      case "input":
        (i = Pl(e, i)), (r = Pl(e, r)), (l = []);
        break;
      case "select":
        (i = K({}, i, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = Ll(e, i)), (r = Ll(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = si);
    }
    zl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Kn.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var o = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && o !== a && (o != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (o && o.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in o)
              o.hasOwnProperty(s) &&
                a[s] !== o[s] &&
                (n || (n = {}), (n[s] = o[s]));
          } else n || (l || (l = []), l.push(u, n)), (n = o);
        else
          u === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0),
              (a = a ? a.__html : void 0),
              o != null && a !== o && (l = l || []).push(u, o))
            : u === "children"
            ? (typeof o != "string" && typeof o != "number") ||
              (l = l || []).push(u, "" + o)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Kn.hasOwnProperty(u)
                ? (o != null && u === "onScroll" && $("scroll", e),
                  l || a === o || (l = []))
                : (l = l || []).push(u, o));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Dc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function In(e, t) {
  if (!b)
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
function Lp(e, t, n) {
  var r = t.pendingProps;
  switch ((Hs(t), t.tag)) {
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
      return xe(t.type) && oi(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        xn(),
        W(Se),
        W(de),
        Ks(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Or(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Fe !== null && (ps(Fe), (Fe = null)))),
        ls(e, t),
        ue(t),
        null
      );
    case 5:
      qs(t);
      var i = Rt(ar.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ic(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return ue(t), null;
        }
        if (((e = Rt(Ye.current)), Or(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[be] = t), (r[sr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Vn.length; i++) $(Vn[i], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              Eo(r, l), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              ko(r, l), $("invalid", r);
          }
          zl(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Lr(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Lr(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Kn.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              Er(r), Co(r, l, !0);
              break;
            case "textarea":
              Er(r), To(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = si);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = au(n)),
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
            (e[be] = t),
            (e[sr] = r),
            jc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = jl(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Vn.length; i++) $(Vn[i], e);
                i = r;
                break;
              case "source":
                $("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (i = r);
                break;
              case "details":
                $("toggle", e), (i = r);
                break;
              case "input":
                Eo(e, r), (i = Pl(e, r)), $("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = K({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                ko(e, r), (i = Ll(e, r)), $("invalid", e);
                break;
              default:
                i = r;
            }
            zl(n, i), (a = i);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var o = a[l];
                l === "style"
                  ? du(e, o)
                  : l === "dangerouslySetInnerHTML"
                  ? ((o = o ? o.__html : void 0), o != null && uu(e, o))
                  : l === "children"
                  ? typeof o == "string"
                    ? (n !== "textarea" || o !== "") && Xn(e, o)
                    : typeof o == "number" && Xn(e, "" + o)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Kn.hasOwnProperty(l)
                      ? o != null && l === "onScroll" && $("scroll", e)
                      : o != null && _s(e, l, o, s));
              }
            switch (n) {
              case "input":
                Er(e), Co(e, r, !1);
                break;
              case "textarea":
                Er(e), To(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mt(r.value));
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
                typeof i.onClick == "function" && (e.onclick = si);
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
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = Rt(ar.current)), Rt(Ye.current), Or(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[be] = t),
            (l = r.nodeValue !== n) && ((e = _e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Lr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Lr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[be] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (W(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (b && Te !== null && t.mode & 1 && !(t.flags & 128))
          Ju(), wn(), (t.flags |= 98560), (l = !1);
        else if (((l = Or(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(P(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(P(317));
            l[be] = t;
          } else
            wn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (l = !1);
        } else Fe !== null && (ps(Fe), (Fe = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? ne === 0 && (ne = 3) : ao())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        xn(), ls(e, t), e === null && ir(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return Ws(t.type._context), ue(t), null;
    case 17:
      return xe(t.type) && oi(), ue(t), null;
    case 19:
      if ((W(Y), (l = t.memoizedState), l === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) In(l, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = mi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    In(l, !1),
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
                return G(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Z() > Cn &&
            ((t.flags |= 128), (r = !0), In(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = mi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              In(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !b)
            )
              return ue(t), null;
          } else
            2 * Z() - l.renderingStartTime > Cn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), In(l, !1), (t.lanes = 4194304));
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
          (n = Y.current),
          G(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        oo(),
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
  throw Error(P(156, t.tag));
}
function Op(e, t) {
  switch ((Hs(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && oi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        xn(),
        W(Se),
        W(de),
        Ks(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return qs(t), null;
    case 13:
      if ((W(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(P(340));
        wn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(Y), null;
    case 4:
      return xn(), null;
    case 10:
      return Ws(t.type._context), null;
    case 22:
    case 23:
      return oo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ir = !1,
  ce = !1,
  zp = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function ss(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var ma = !1;
function jp(e, t) {
  if (((Gl = ri), (e = Vu()), Vs(e))) {
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
            u = 0,
            p = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== l || (r !== 0 && f.nodeType !== 3) || (o = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (m = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++u === i && (a = s),
                m === l && ++p === r && (o = s),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = v;
          }
          n = a === -1 || o === -1 ? null : { start: a, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($l = { focusedElem: e, selectionRange: n }, ri = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    T = x.memoizedState,
                    c = t.stateNode,
                    d = c.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Be(t.type, w),
                      T
                    );
                  c.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (S) {
          X(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (x = ma), (ma = !1), x;
}
function bn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && ss(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ji(e, t) {
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
function os(e) {
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
function Ac(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ac(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[be], delete t[sr], delete t[Ql], delete t[hp], delete t[vp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ha(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rc(e.return)) return null;
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
function as(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = si));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (as(e, t, n), e = e.sibling; e !== null; ) as(e, t, n), (e = e.sibling);
}
function us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (us(e, t, n), e = e.sibling; e !== null; ) us(e, t, n), (e = e.sibling);
}
var le = null,
  Ve = !1;
function ct(e, t, n) {
  for (n = n.child; n !== null; ) Bc(e, t, n), (n = n.sibling);
}
function Bc(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function")
    try {
      Qe.onCommitFiberUnmount(Ti, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ce || un(n, t);
    case 6:
      var r = le,
        i = Ve;
      (le = null),
        ct(e, t, n),
        (le = r),
        (Ve = i),
        le !== null &&
          (Ve
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Ve
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? nl(e.parentNode, n)
              : e.nodeType === 1 && nl(e, n),
            tr(e))
          : nl(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (i = Ve),
        (le = n.stateNode.containerInfo),
        (Ve = !0),
        ct(e, t, n),
        (le = r),
        (Ve = i);
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
            s !== void 0 && (l & 2 || l & 4) && ss(n, t, s),
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
          X(n, t, a);
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
function va(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zp()),
      t.forEach(function (r) {
        var i = Up.bind(null, e, r);
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
              (le = a.stateNode), (Ve = !1);
              break e;
            case 3:
              (le = a.stateNode.containerInfo), (Ve = !0);
              break e;
            case 4:
              (le = a.stateNode.containerInfo), (Ve = !0);
              break e;
          }
          a = a.return;
        }
        if (le === null) throw Error(P(160));
        Bc(l, s, i), (le = null), (Ve = !1);
        var o = i.alternate;
        o !== null && (o.return = null), (i.return = null);
      } catch (u) {
        X(i, t, u);
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
      if ((Re(t, e), $e(e), r & 4)) {
        try {
          bn(3, e, e.return), ji(3, e);
        } catch (w) {
          X(e, e.return, w);
        }
        try {
          bn(5, e, e.return);
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 1:
      Re(t, e), $e(e), r & 512 && n !== null && un(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        $e(e),
        r & 512 && n !== null && un(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Xn(i, "");
        } catch (w) {
          X(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          a = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && su(i, l),
              jl(a, s);
            var u = jl(a, l);
            for (s = 0; s < o.length; s += 2) {
              var p = o[s],
                f = o[s + 1];
              p === "style"
                ? du(i, f)
                : p === "dangerouslySetInnerHTML"
                ? uu(i, f)
                : p === "children"
                ? Xn(i, f)
                : _s(i, p, f, u);
            }
            switch (a) {
              case "input":
                Ml(i, l);
                break;
              case "textarea":
                ou(i, l);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null
                  ? dn(i, !!l.multiple, v, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? dn(i, !!l.multiple, l.defaultValue, !0)
                      : dn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[sr] = l;
          } catch (w) {
            X(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Re(t, e), $e(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          tr(t.containerInfo);
        } catch (w) {
          X(e, e.return, w);
        }
      break;
    case 4:
      Re(t, e), $e(e);
      break;
    case 13:
      Re(t, e),
        $e(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (lo = Z())),
        r & 4 && va(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ce = (u = ce) || p), Re(t, e), (ce = u)) : Re(t, e),
        $e(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for (O = e, p = e.child; p !== null; ) {
            for (f = O = p; O !== null; ) {
              switch (((m = O), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  bn(4, m, m.return);
                  break;
                case 1:
                  un(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      X(r, n, w);
                    }
                  }
                  break;
                case 5:
                  un(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ya(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (O = v)) : ya(f);
            }
            p = p.sibling;
          }
        e: for (p = null, f = e; ; ) {
          if (f.tag === 5) {
            if (p === null) {
              p = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = f.stateNode),
                      (o = f.memoizedProps.style),
                      (s =
                        o != null && o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (a.style.display = cu("display", s)));
              } catch (w) {
                X(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (p === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (w) {
                X(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            p === f && (p = null), (f = f.return);
          }
          p === f && (p = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), $e(e), r & 4 && va(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), $e(e);
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Xn(i, ""), (r.flags &= -33));
          var l = ha(e);
          us(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = ha(e);
          as(e, a, s);
          break;
        default:
          throw Error(P(161));
      }
    } catch (o) {
      X(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ip(e, t, n) {
  (O = e), Fc(e);
}
function Fc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ir;
      if (!s) {
        var a = i.alternate,
          o = (a !== null && a.memoizedState !== null) || ce;
        a = Ir;
        var u = ce;
        if (((Ir = s), (ce = o) && !u))
          for (O = i; O !== null; )
            (s = O),
              (o = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? wa(i)
                : o !== null
                ? ((o.return = s), (O = o))
                : wa(i);
        for (; l !== null; ) (O = l), Fc(l), (l = l.sibling);
        (O = i), (Ir = a), (ce = u);
      }
      ga(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (O = l)) : ga(e);
  }
}
function ga(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ce || ji(5, t);
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
              l !== null && ea(t, l, r);
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
                ea(t, s, n);
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
                var u = t.alternate;
                if (u !== null) {
                  var p = u.memoizedState;
                  if (p !== null) {
                    var f = p.dehydrated;
                    f !== null && tr(f);
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
              throw Error(P(163));
          }
        ce || (t.flags & 512 && os(t));
      } catch (m) {
        X(t, t.return, m);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function ya(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function wa(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ji(4, t);
          } catch (o) {
            X(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              X(t, i, o);
            }
          }
          var l = t.return;
          try {
            os(t);
          } catch (o) {
            X(t, l, o);
          }
          break;
        case 5:
          var s = t.return;
          try {
            os(t);
          } catch (o) {
            X(t, s, o);
          }
      }
    } catch (o) {
      X(t, t.return, o);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (O = a);
      break;
    }
    O = t.return;
  }
}
var Dp = Math.ceil,
  gi = ut.ReactCurrentDispatcher,
  ro = ut.ReactCurrentOwner,
  Ie = ut.ReactCurrentBatchConfig,
  V = 0,
  ie = null,
  ee = null,
  se = 0,
  Ce = 0,
  cn = Ot(0),
  ne = 0,
  fr = null,
  $t = 0,
  Ii = 0,
  io = 0,
  Qn = null,
  ye = null,
  lo = 0,
  Cn = 1 / 0,
  Ze = null,
  yi = !1,
  cs = null,
  kt = null,
  Dr = !1,
  vt = null,
  wi = 0,
  Yn = 0,
  ds = null,
  Yr = -1,
  qr = 0;
function me() {
  return V & 6 ? Z() : Yr !== -1 ? Yr : (Yr = Z());
}
function Tt(e) {
  return e.mode & 1
    ? V & 2 && se !== 0
      ? se & -se
      : yp.transition !== null
      ? (qr === 0 && (qr = Cu()), qr)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lu(e.type))),
        e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < Yn) throw ((Yn = 0), (ds = null), Error(P(185)));
  hr(e, n, r),
    (!(V & 2) || e !== ie) &&
      (e === ie && (!(V & 2) && (Ii |= n), ne === 4 && mt(e, se)),
      Ee(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((Cn = Z() + 500), Li && zt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  yf(e, t);
  var r = ni(e, e === ie ? se : 0);
  if (r === 0)
    n !== null && Mo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mo(n), t === 1))
      e.tag === 0 ? gp(Sa.bind(null, e)) : qu(Sa.bind(null, e)),
        pp(function () {
          !(V & 6) && zt();
        }),
        (n = null);
    else {
      switch (ku(r)) {
        case 1:
          n = Os;
          break;
        case 4:
          n = xu;
          break;
        case 16:
          n = ti;
          break;
        case 536870912:
          n = Eu;
          break;
        default:
          n = ti;
      }
      n = Yc(n, Hc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Hc(e, t) {
  if (((Yr = -1), (qr = 0), V & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (vn() && e.callbackNode !== n) return null;
  var r = ni(e, e === ie ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Si(e, r);
  else {
    t = r;
    var i = V;
    V |= 2;
    var l = Gc();
    (ie !== e || se !== t) && ((Ze = null), (Cn = Z() + 500), Vt(e, t));
    do
      try {
        Bp();
        break;
      } catch (a) {
        Uc(e, a);
      }
    while (1);
    $s(),
      (gi.current = l),
      (V = i),
      ee !== null ? (t = 0) : ((ie = null), (se = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Bl(e)), i !== 0 && ((r = i), (t = fs(e, i)))), t === 1)
    )
      throw ((n = fr), Vt(e, 0), mt(e, r), Ee(e, Z()), n);
    if (t === 6) mt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ap(i) &&
          ((t = Si(e, r)),
          t === 2 && ((l = Bl(e)), l !== 0 && ((r = l), (t = fs(e, l)))),
          t === 1))
      )
        throw ((n = fr), Vt(e, 0), mt(e, r), Ee(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          It(e, ye, Ze);
          break;
        case 3:
          if (
            (mt(e, r), (r & 130023424) === r && ((t = lo + 500 - Z()), 10 < t))
          ) {
            if (ni(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = bl(It.bind(null, e, ye, Ze), t);
            break;
          }
          It(e, ye, Ze);
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
                : 1960 * Dp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bl(It.bind(null, e, ye, Ze), r);
            break;
          }
          It(e, ye, Ze);
          break;
        case 5:
          It(e, ye, Ze);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Ee(e, Z()), e.callbackNode === n ? Hc.bind(null, e) : null;
}
function fs(e, t) {
  var n = Qn;
  return (
    e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256),
    (e = Si(e, t)),
    e !== 2 && ((t = ye), (ye = n), t !== null && ps(t)),
    e
  );
}
function ps(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function Ap(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!Ge(l(), i)) return !1;
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
    t &= ~io,
      t &= ~Ii,
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
function Sa(e) {
  if (V & 6) throw Error(P(327));
  vn();
  var t = ni(e, 0);
  if (!(t & 1)) return Ee(e, Z()), null;
  var n = Si(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bl(e);
    r !== 0 && ((t = r), (n = fs(e, r)));
  }
  if (n === 1) throw ((n = fr), Vt(e, 0), mt(e, t), Ee(e, Z()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    It(e, ye, Ze),
    Ee(e, Z()),
    null
  );
}
function so(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = n), V === 0 && ((Cn = Z() + 500), Li && zt());
  }
}
function Wt(e) {
  vt !== null && vt.tag === 0 && !(V & 6) && vn();
  var t = V;
  V |= 1;
  var n = Ie.transition,
    r = F;
  try {
    if (((Ie.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Ie.transition = n), (V = t), !(V & 6) && zt();
  }
}
function oo() {
  (Ce = cn.current), W(cn);
}
function Vt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), fp(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((Hs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && oi();
          break;
        case 3:
          xn(), W(Se), W(de), Ks();
          break;
        case 5:
          qs(r);
          break;
        case 4:
          xn();
          break;
        case 13:
          W(Y);
          break;
        case 19:
          W(Y);
          break;
        case 10:
          Ws(r.type._context);
          break;
        case 22:
        case 23:
          oo();
      }
      n = n.return;
    }
  if (
    ((ie = e),
    (ee = e = _t(e.current, null)),
    (se = Ce = t),
    (ne = 0),
    (fr = null),
    (io = Ii = $t = 0),
    (ye = Qn = null),
    At !== null)
  ) {
    for (t = 0; t < At.length; t++)
      if (((n = At[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    At = null;
  }
  return e;
}
function Uc(e, t) {
  do {
    var n = ee;
    try {
      if (($s(), (Wr.current = vi), hi)) {
        for (var r = q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        hi = !1;
      }
      if (
        ((Gt = 0),
        (re = te = q = null),
        (Wn = !1),
        (ur = 0),
        (ro.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (fr = t), (ee = null);
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
          var u = o,
            p = a,
            f = p.tag;
          if (!(p.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = oa(s);
          if (v !== null) {
            (v.flags &= -257),
              aa(v, s, a, l, t),
              v.mode & 1 && sa(l, u, t),
              (t = v),
              (o = u);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(o), (t.updateQueue = w);
            } else x.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              sa(l, u, t), ao();
              break e;
            }
            o = Error(P(426));
          }
        } else if (b && a.mode & 1) {
          var T = oa(s);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              aa(T, s, a, l, t),
              Us(En(o, a));
            break e;
          }
        }
        (l = o = En(o, a)),
          ne !== 4 && (ne = 2),
          Qn === null ? (Qn = [l]) : Qn.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var c = Tc(l, o, t);
              Zo(l, c);
              break e;
            case 1:
              a = o;
              var d = l.type,
                h = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (kt === null || !kt.has(h))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = _c(l, a, t);
                Zo(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Wc(n);
    } catch (k) {
      (t = k), ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Gc() {
  var e = gi.current;
  return (gi.current = vi), e === null ? vi : e;
}
function ao() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    ie === null || (!($t & 268435455) && !(Ii & 268435455)) || mt(ie, se);
}
function Si(e, t) {
  var n = V;
  V |= 2;
  var r = Gc();
  (ie !== e || se !== t) && ((Ze = null), Vt(e, t));
  do
    try {
      Rp();
      break;
    } catch (i) {
      Uc(e, i);
    }
  while (1);
  if (($s(), (V = n), (gi.current = r), ee !== null)) throw Error(P(261));
  return (ie = null), (se = 0), ne;
}
function Rp() {
  for (; ee !== null; ) $c(ee);
}
function Bp() {
  for (; ee !== null && !uf(); ) $c(ee);
}
function $c(e) {
  var t = Qc(e.alternate, e, Ce);
  (e.memoizedProps = e.pendingProps),
    t === null ? Wc(e) : (ee = t),
    (ro.current = null);
}
function Wc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Op(n, t)), n !== null)) {
        (n.flags &= 32767), (ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (ee = null);
        return;
      }
    } else if (((n = Lp(n, t, Ce)), n !== null)) {
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
function It(e, t, n) {
  var r = F,
    i = Ie.transition;
  try {
    (Ie.transition = null), (F = 1), Vp(e, t, n, r);
  } finally {
    (Ie.transition = i), (F = r);
  }
  return null;
}
function Vp(e, t, n, r) {
  do vn();
  while (vt !== null);
  if (V & 6) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (wf(e, l),
    e === ie && ((ee = ie = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dr ||
      ((Dr = !0),
      Yc(ti, function () {
        return vn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Ie.transition), (Ie.transition = null);
    var s = F;
    F = 1;
    var a = V;
    (V |= 4),
      (ro.current = null),
      jp(e, n),
      Vc(n, e),
      lp($l),
      (ri = !!Gl),
      ($l = Gl = null),
      (e.current = n),
      Ip(n),
      cf(),
      (V = a),
      (F = s),
      (Ie.transition = l);
  } else e.current = n;
  if (
    (Dr && ((Dr = !1), (vt = e), (wi = i)),
    (l = e.pendingLanes),
    l === 0 && (kt = null),
    pf(n.stateNode),
    Ee(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (yi) throw ((yi = !1), (e = cs), (cs = null), e);
  return (
    wi & 1 && e.tag !== 0 && vn(),
    (l = e.pendingLanes),
    l & 1 ? (e === ds ? Yn++ : ((Yn = 0), (ds = e))) : (Yn = 0),
    zt(),
    null
  );
}
function vn() {
  if (vt !== null) {
    var e = ku(wi),
      t = Ie.transition,
      n = F;
    try {
      if (((Ie.transition = null), (F = 16 > e ? 16 : e), vt === null))
        var r = !1;
      else {
        if (((e = vt), (vt = null), (wi = 0), V & 6)) throw Error(P(331));
        var i = V;
        for (V |= 4, O = e.current; O !== null; ) {
          var l = O,
            s = l.child;
          if (O.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var o = 0; o < a.length; o++) {
                var u = a[o];
                for (O = u; O !== null; ) {
                  var p = O;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bn(8, p, l);
                  }
                  var f = p.child;
                  if (f !== null) (f.return = p), (O = f);
                  else
                    for (; O !== null; ) {
                      p = O;
                      var m = p.sibling,
                        v = p.return;
                      if ((Ac(p), p === u)) {
                        O = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (O = m);
                        break;
                      }
                      O = v;
                    }
                }
              }
              var x = l.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var T = w.sibling;
                    (w.sibling = null), (w = T);
                  } while (w !== null);
                }
              }
              O = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (O = s);
          else
            e: for (; O !== null; ) {
              if (((l = O), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bn(9, l, l.return);
                }
              var c = l.sibling;
              if (c !== null) {
                (c.return = l.return), (O = c);
                break e;
              }
              O = l.return;
            }
        }
        var d = e.current;
        for (O = d; O !== null; ) {
          s = O;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (O = h);
          else
            e: for (s = d; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ji(9, a);
                  }
                } catch (k) {
                  X(a, a.return, k);
                }
              if (a === s) {
                O = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (O = S);
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((V = i), zt(), Qe && typeof Qe.onPostCommitFiberRoot == "function")
        )
          try {
            Qe.onPostCommitFiberRoot(Ti, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Ie.transition = t);
    }
  }
  return !1;
}
function xa(e, t, n) {
  (t = En(n, t)),
    (t = Tc(e, t, 1)),
    (e = Ct(e, t, 1)),
    (t = me()),
    e !== null && (hr(e, 1, t), Ee(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) xa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (kt === null || !kt.has(r)))
        ) {
          (e = En(n, e)),
            (e = _c(t, e, 1)),
            (t = Ct(t, e, 1)),
            (e = me()),
            t !== null && (hr(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Fp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (se & n) === n &&
      (ne === 4 || (ne === 3 && (se & 130023424) === se && 500 > Z() - lo)
        ? Vt(e, 0)
        : (io |= n)),
    Ee(e, t);
}
function bc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Tr), (Tr <<= 1), !(Tr & 130023424) && (Tr = 4194304))
      : (t = 1));
  var n = me();
  (e = ot(e, t)), e !== null && (hr(e, t, n), Ee(e, n));
}
function Hp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bc(e, n);
}
function Up(e, t) {
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
      throw Error(P(314));
  }
  r !== null && r.delete(t), bc(e, n);
}
var Qc;
Qc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) we = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (we = !1), Np(e, t, n);
      we = !!(e.flags & 131072);
    }
  else (we = !1), b && t.flags & 1048576 && Ku(t, ci, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qr(e, t), (e = t.pendingProps);
      var i = yn(t, de.current);
      hn(t, n), (i = Js(null, t, r, e, i, n));
      var l = Zs();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((l = !0), ai(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Qs(t),
            (i.updater = Oi),
            (t.stateNode = i),
            (i._reactInternals = t),
            Zl(t, r, e, n),
            (t = ns(null, t, r, !0, l, n)))
          : ((t.tag = 0), b && l && Fs(t), pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qr(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = $p(r)),
          (e = Be(r, e)),
          i)
        ) {
          case 0:
            t = ts(null, t, r, e, n);
            break e;
          case 1:
            t = da(null, t, r, e, n);
            break e;
          case 11:
            t = ua(null, t, r, e, n);
            break e;
          case 14:
            t = ca(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        ts(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        da(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Lc(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          ec(e, t),
          pi(t, r, null, n);
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
            (i = En(Error(P(423)), t)), (t = fa(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = En(Error(P(424)), t)), (t = fa(e, t, r, n, i));
            break e;
          } else
            for (
              Te = Et(t.stateNode.containerInfo.firstChild),
                _e = t,
                b = !0,
                Fe = null,
                n = ic(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((wn(), r === i)) {
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
        lc(t),
        e === null && Kl(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Wl(r, i) ? (s = null) : l !== null && Wl(r, l) && (t.flags |= 32),
        Nc(e, t),
        pe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Kl(t), null;
    case 13:
      return Oc(e, t, n);
    case 4:
      return (
        Ys(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        ua(e, t, r, i, n)
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
          G(di, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (Ge(l.value, s)) {
            if (l.children === i.children && !Se.current) {
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
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        p === null
                          ? (o.next = o)
                          : ((o.next = p.next), (p.next = o)),
                          (u.pending = o);
                      }
                    }
                    (l.lanes |= n),
                      (o = l.alternate),
                      o !== null && (o.lanes |= n),
                      Xl(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  o = o.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(P(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Xl(s, n, t),
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
        (i = De(i)),
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
        ca(e, t, r, i, n)
      );
    case 15:
      return Pc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Be(r, i)),
        Qr(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), ai(t)) : (e = !1),
        hn(t, n),
        nc(t, r, i),
        Zl(t, r, i, n),
        ns(null, t, r, !0, e, n)
      );
    case 19:
      return zc(e, t, n);
    case 22:
      return Mc(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Yc(e, t) {
  return Su(e, t);
}
function Gp(e, t, n, r) {
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
function je(e, t, n, r) {
  return new Gp(e, t, n, r);
}
function uo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $p(e) {
  if (typeof e == "function") return uo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ms)) return 11;
    if (e === Ns) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
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
function Kr(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) uo(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Zt:
        return Ft(n.children, i, l, t);
      case Ps:
        (s = 8), (i |= 8);
        break;
      case Cl:
        return (
          (e = je(12, n, t, i | 2)), (e.elementType = Cl), (e.lanes = l), e
        );
      case kl:
        return (e = je(13, n, t, i)), (e.elementType = kl), (e.lanes = l), e;
      case Tl:
        return (e = je(19, n, t, i)), (e.elementType = Tl), (e.lanes = l), e;
      case ru:
        return Di(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case tu:
              s = 10;
              break e;
            case nu:
              s = 9;
              break e;
            case Ms:
              s = 11;
              break e;
            case Ns:
              s = 14;
              break e;
            case dt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = je(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Ft(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function Di(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = ru),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function cl(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function dl(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Wp(e, t, n, r, i) {
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
    (this.eventTimes = Wi(0)),
    (this.expirationTimes = Wi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function co(e, t, n, r, i, l, s, a, o) {
  return (
    (e = new Wp(e, t, n, a, o)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = je(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qs(l),
    e
  );
}
function bp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qc(e) {
  if (!e) return Nt;
  e = e._reactInternals;
  e: {
    if (Yt(e) !== e || e.tag !== 1) throw Error(P(170));
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
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return Yu(e, n, t);
  }
  return t;
}
function Kc(e, t, n, r, i, l, s, a, o) {
  return (
    (e = co(n, r, !0, e, i, l, s, a, o)),
    (e.context = qc(null)),
    (n = e.current),
    (r = me()),
    (i = Tt(n)),
    (l = it(r, i)),
    (l.callback = t ?? null),
    Ct(n, l, i),
    (e.current.lanes = i),
    hr(e, i, r),
    Ee(e, r),
    e
  );
}
function Ai(e, t, n, r) {
  var i = t.current,
    l = me(),
    s = Tt(i);
  return (
    (n = qc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = it(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ct(i, t, s)),
    e !== null && (Ue(e, i, s, l), $r(e, i, s)),
    s
  );
}
function xi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ea(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fo(e, t) {
  Ea(e, t), (e = e.alternate) && Ea(e, t);
}
function Qp() {
  return null;
}
var Xc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function po(e) {
  this._internalRoot = e;
}
Ri.prototype.render = po.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Ai(e, t, null, null);
};
Ri.prototype.unmount = po.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wt(function () {
      Ai(null, e, null, null);
    }),
      (t[st] = null);
  }
};
function Ri(e) {
  this._internalRoot = e;
}
Ri.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pt.length && t !== 0 && t < pt[n].priority; n++);
    pt.splice(n, 0, e), n === 0 && Nu(e);
  }
};
function mo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Bi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ca() {}
function Yp(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = xi(s);
        l.call(u);
      };
    }
    var s = Kc(t, r, e, 0, null, !1, !1, "", Ca);
    return (
      (e._reactRootContainer = s),
      (e[st] = s.current),
      ir(e.nodeType === 8 ? e.parentNode : e),
      Wt(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = xi(o);
      a.call(u);
    };
  }
  var o = co(e, 0, !1, null, null, !1, !1, "", Ca);
  return (
    (e._reactRootContainer = o),
    (e[st] = o.current),
    ir(e.nodeType === 8 ? e.parentNode : e),
    Wt(function () {
      Ai(t, o, n, r);
    }),
    o
  );
}
function Vi(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var o = xi(s);
        a.call(o);
      };
    }
    Ai(t, s, e, i);
  } else s = Yp(n, t, e, i, r);
  return xi(s);
}
Tu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bn(t.pendingLanes);
        n !== 0 &&
          (zs(t, n | 1), Ee(t, Z()), !(V & 6) && ((Cn = Z() + 500), zt()));
      }
      break;
    case 13:
      Wt(function () {
        var r = ot(e, 1);
        if (r !== null) {
          var i = me();
          Ue(r, e, 1, i);
        }
      }),
        fo(e, 1);
  }
};
js = function (e) {
  if (e.tag === 13) {
    var t = ot(e, 134217728);
    if (t !== null) {
      var n = me();
      Ue(t, e, 134217728, n);
    }
    fo(e, 134217728);
  }
};
_u = function (e) {
  if (e.tag === 13) {
    var t = Tt(e),
      n = ot(e, t);
    if (n !== null) {
      var r = me();
      Ue(n, e, t, r);
    }
    fo(e, t);
  }
};
Pu = function () {
  return F;
};
Mu = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
Dl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ml(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = Ni(r);
            if (!i) throw Error(P(90));
            lu(r), Ml(r, i);
          }
        }
      }
      break;
    case "textarea":
      ou(e, n);
      break;
    case "select":
      (t = n.value), t != null && dn(e, !!n.multiple, t, !1);
  }
};
mu = so;
hu = Wt;
var qp = { usingClientEntryPoint: !1, Events: [gr, rn, Ni, fu, pu, so] },
  Dn = {
    findFiberByHostInstance: Dt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Kp = {
    bundleType: Dn.bundleType,
    version: Dn.version,
    rendererPackageName: Dn.rendererPackageName,
    rendererConfig: Dn.rendererConfig,
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
      return (e = yu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Dn.findFiberByHostInstance || Qp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ar.isDisabled && Ar.supportsFiber)
    try {
      (Ti = Ar.inject(Kp)), (Qe = Ar);
    } catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qp;
Me.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!mo(t)) throw Error(P(200));
  return bp(e, t, null, n);
};
Me.createRoot = function (e, t) {
  if (!mo(e)) throw Error(P(299));
  var n = !1,
    r = "",
    i = Xc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = co(e, 1, !1, null, null, n, !1, r, i)),
    (e[st] = t.current),
    ir(e.nodeType === 8 ? e.parentNode : e),
    new po(t)
  );
};
Me.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = yu(t)), (e = e === null ? null : e.stateNode), e;
};
Me.flushSync = function (e) {
  return Wt(e);
};
Me.hydrate = function (e, t, n) {
  if (!Bi(t)) throw Error(P(200));
  return Vi(null, e, t, !0, n);
};
Me.hydrateRoot = function (e, t, n) {
  if (!mo(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    s = Xc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Kc(t, null, e, 1, n ?? null, i, !1, l, s)),
    (e[st] = t.current),
    ir(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ri(t);
};
Me.render = function (e, t, n) {
  if (!Bi(t)) throw Error(P(200));
  return Vi(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function (e) {
  if (!Bi(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (Wt(function () {
        Vi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[st] = null);
        });
      }),
      !0)
    : !1;
};
Me.unstable_batchedUpdates = so;
Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Bi(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Vi(e, t, n, !1, r);
};
Me.version = "18.2.0-next-9e3b772b8-20220608";
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
  t(), (e.exports = Me);
})(bd);
var ka = Sl;
(wl.createRoot = ka.createRoot), (wl.hydrateRoot = ka.hydrateRoot);
const Xp = "./assets/Longlogo-055eeb1b.png",
  Jp = "./assets/logo-ca4a6162.png",
  Zp = "./assets/world-087a0807.svg";
var Jc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ta = U.createContext && U.createContext(Jc),
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
  em =
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
function Zc(e) {
  return (
    e &&
    e.map(function (t, n) {
      return U.createElement(t.tag, Pt({ key: n }, t.attr), Zc(t.child));
    })
  );
}
function wr(e) {
  return function (t) {
    return U.createElement(tm, Pt({ attr: Pt({}, e.attr) }, t), Zc(e.child));
  };
}
function tm(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      l = e.title,
      s = em(e, ["attr", "size", "title"]),
      a = i || n.size || "1em",
      o;
    return (
      n.className && (o = n.className),
      e.className && (o = (o ? o + " " : "") + e.className),
      U.createElement(
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
        l && U.createElement("title", null, l),
        e.children
      )
    );
  };
  return Ta !== void 0
    ? U.createElement(Ta.Consumer, null, function (n) {
        return t(n);
      })
    : t(Jc);
}
function nm(e) {
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
function rm(e) {
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
var ed = {},
  ms = {},
  im = {
    get exports() {
      return ms;
    },
    set exports(e) {
      ms = e;
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
})(im);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = l(A),
    n = r(ms);
  function r(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function i() {
    if (typeof WeakMap != "function") return null;
    var g = new WeakMap();
    return (
      (i = function () {
        return g;
      }),
      g
    );
  }
  function l(g) {
    if (g && g.__esModule) return g;
    if (g === null || (s(g) !== "object" && typeof g != "function"))
      return { default: g };
    var E = i();
    if (E && E.has(g)) return E.get(g);
    var y = {},
      C = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var M in g)
      if (Object.prototype.hasOwnProperty.call(g, M)) {
        var _ = C ? Object.getOwnPropertyDescriptor(g, M) : null;
        _ && (_.get || _.set) ? Object.defineProperty(y, M, _) : (y[M] = g[M]);
      }
    return (y.default = g), E && E.set(g, y), y;
  }
  function s(g) {
    return (
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? (s = function (y) {
            return typeof y;
          })
        : (s = function (y) {
            return y &&
              typeof Symbol == "function" &&
              y.constructor === Symbol &&
              y !== Symbol.prototype
              ? "symbol"
              : typeof y;
          }),
      s(g)
    );
  }
  function a() {
    return (
      (a =
        Object.assign ||
        function (g) {
          for (var E = 1; E < arguments.length; E++) {
            var y = arguments[E];
            for (var C in y)
              Object.prototype.hasOwnProperty.call(y, C) && (g[C] = y[C]);
          }
          return g;
        }),
      a.apply(this, arguments)
    );
  }
  function o(g, E) {
    var y = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(g);
      E &&
        (C = C.filter(function (M) {
          return Object.getOwnPropertyDescriptor(g, M).enumerable;
        })),
        y.push.apply(y, C);
    }
    return y;
  }
  function u(g) {
    for (var E = 1; E < arguments.length; E++) {
      var y = arguments[E] != null ? arguments[E] : {};
      E % 2
        ? o(y, !0).forEach(function (C) {
            p(g, C, y[C]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(y))
        : o(y).forEach(function (C) {
            Object.defineProperty(g, C, Object.getOwnPropertyDescriptor(y, C));
          });
    }
    return g;
  }
  function p(g, E, y) {
    return (
      E in g
        ? Object.defineProperty(g, E, {
            value: y,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (g[E] = y),
      g
    );
  }
  function f(g, E) {
    if (!(g instanceof E))
      throw new TypeError("Cannot call a class as a function");
  }
  function m(g, E) {
    for (var y = 0; y < E.length; y++) {
      var C = E[y];
      (C.enumerable = C.enumerable || !1),
        (C.configurable = !0),
        "value" in C && (C.writable = !0),
        Object.defineProperty(g, C.key, C);
    }
  }
  function v(g, E, y) {
    return E && m(g.prototype, E), y && m(g, y), g;
  }
  function x(g, E) {
    return E && (s(E) === "object" || typeof E == "function") ? E : T(g);
  }
  function w(g) {
    return (
      (w = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (y) {
            return y.__proto__ || Object.getPrototypeOf(y);
          }),
      w(g)
    );
  }
  function T(g) {
    if (g === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return g;
  }
  function c(g, E) {
    if (typeof E != "function" && E !== null)
      throw new TypeError("Super expression must either be null or a function");
    (g.prototype = Object.create(E && E.prototype, {
      constructor: { value: g, writable: !0, configurable: !0 },
    })),
      E && d(g, E);
  }
  function d(g, E) {
    return (
      (d =
        Object.setPrototypeOf ||
        function (C, M) {
          return (C.__proto__ = M), C;
        }),
      d(g, E)
    );
  }
  var h = "Select...",
    S = (function (g) {
      c(E, g);
      function E(y) {
        var C;
        return (
          f(this, E),
          (C = x(this, w(E).call(this, y))),
          (C.state = {
            selected: C.parseValue(y.value, y.options) || {
              label: typeof y.placeholder > "u" ? h : y.placeholder,
              value: "",
            },
            isOpen: !1,
          }),
          (C.dropdownRef = (0, t.createRef)()),
          (C.mounted = !0),
          (C.handleDocumentClick = C.handleDocumentClick.bind(T(C))),
          (C.fireChangeEvent = C.fireChangeEvent.bind(T(C))),
          C
        );
      }
      return (
        v(E, [
          {
            key: "componentDidUpdate",
            value: function (C) {
              if (this.props.value !== C.value)
                if (this.props.value) {
                  var M = this.parseValue(this.props.value, this.props.options);
                  M !== this.state.selected && this.setState({ selected: M });
                } else
                  this.setState({
                    selected: {
                      label:
                        typeof this.props.placeholder > "u"
                          ? h
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
            value: function (C) {
              this.props.onFocus &&
                typeof this.props.onFocus == "function" &&
                this.props.onFocus(this.state.isOpen),
                !(C.type === "mousedown" && C.button !== 0) &&
                  (C.stopPropagation(),
                  C.preventDefault(),
                  this.props.disabled ||
                    this.setState({ isOpen: !this.state.isOpen }));
            },
          },
          {
            key: "parseValue",
            value: function (C, M) {
              var _;
              if (typeof C == "string")
                for (var N = 0, I = M.length; N < I; N++)
                  if (M[N].type === "group") {
                    var R = M[N].items.filter(function (J) {
                      return J.value === C;
                    });
                    R.length && (_ = R[0]);
                  } else
                    typeof M[N].value < "u" && M[N].value === C && (_ = M[N]);
              return _ || C;
            },
          },
          {
            key: "setValue",
            value: function (C, M) {
              var _ = { selected: { value: C, label: M }, isOpen: !1 };
              this.fireChangeEvent(_), this.setState(_);
            },
          },
          {
            key: "fireChangeEvent",
            value: function (C) {
              C.selected !== this.state.selected &&
                this.props.onChange &&
                this.props.onChange(C.selected);
            },
          },
          {
            key: "renderOption",
            value: function (C) {
              var M,
                _ = C.value;
              typeof _ > "u" && (_ = C.label || C);
              var N = C.label || C.value || C,
                I =
                  _ === this.state.selected.value || _ === this.state.selected,
                R =
                  ((M = {}),
                  p(M, "".concat(this.props.baseClassName, "-option"), !0),
                  p(M, C.className, !!C.className),
                  p(M, "is-selected", I),
                  M),
                J = (0, n.default)(R),
                fe = Object.keys(C.data || {}).reduce(function (ge, L) {
                  return u({}, ge, p({}, "data-".concat(L), C.data[L]));
                }, {});
              return t.default.createElement(
                "div",
                a(
                  {
                    key: _,
                    className: J,
                    onMouseDown: this.setValue.bind(this, _, N),
                    onClick: this.setValue.bind(this, _, N),
                    role: "option",
                    "aria-selected": I ? "true" : "false",
                  },
                  fe
                ),
                N
              );
            },
          },
          {
            key: "buildMenu",
            value: function () {
              var C = this,
                M = this.props,
                _ = M.options,
                N = M.baseClassName,
                I = _.map(function (R) {
                  if (R.type === "group") {
                    var J = t.default.createElement(
                        "div",
                        { className: "".concat(N, "-title") },
                        R.name
                      ),
                      fe = R.items.map(function (ge) {
                        return C.renderOption(ge);
                      });
                    return t.default.createElement(
                      "div",
                      {
                        className: "".concat(N, "-group"),
                        key: R.name,
                        role: "listbox",
                        tabIndex: "-1",
                      },
                      J,
                      fe
                    );
                  } else return C.renderOption(R);
                });
              return I.length
                ? I
                : t.default.createElement(
                    "div",
                    { className: "".concat(N, "-noresults") },
                    "No options found"
                  );
            },
          },
          {
            key: "handleDocumentClick",
            value: function (C) {
              this.mounted &&
                (this.dropdownRef.current.contains(C.target) ||
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
              var C,
                M,
                _,
                N,
                I,
                R = this.props,
                J = R.baseClassName,
                fe = R.controlClassName,
                ge = R.placeholderClassName,
                L = R.menuClassName,
                z = R.arrowClassName,
                j = R.arrowClosed,
                H = R.arrowOpen,
                Q = R.className,
                qe = this.props.disabled ? "Dropdown-disabled" : "",
                Ke =
                  typeof this.state.selected == "string"
                    ? this.state.selected
                    : this.state.selected.label,
                Pn = (0, n.default)(
                  ((C = {}),
                  p(C, "".concat(J, "-root"), !0),
                  p(C, Q, !!Q),
                  p(C, "is-open", this.state.isOpen),
                  C)
                ),
                Xe = (0, n.default)(
                  ((M = {}),
                  p(M, "".concat(J, "-control"), !0),
                  p(M, fe, !!fe),
                  p(M, qe, !!qe),
                  M)
                ),
                Kt = (0, n.default)(
                  ((_ = {}),
                  p(_, "".concat(J, "-placeholder"), !0),
                  p(_, ge, !!ge),
                  p(_, "is-selected", this.isValueSelected()),
                  _)
                ),
                yd = (0, n.default)(
                  ((N = {}), p(N, "".concat(J, "-menu"), !0), p(N, L, !!L), N)
                ),
                wd = (0, n.default)(
                  ((I = {}), p(I, "".concat(J, "-arrow"), !0), p(I, z, !!z), I)
                ),
                Sd = t.default.createElement("div", { className: Kt }, Ke),
                xd = this.state.isOpen
                  ? t.default.createElement(
                      "div",
                      { className: yd, "aria-expanded": "true" },
                      this.buildMenu()
                    )
                  : null;
              return t.default.createElement(
                "div",
                { ref: this.dropdownRef, className: Pn },
                t.default.createElement(
                  "div",
                  {
                    className: Xe,
                    onMouseDown: this.handleMouseDown.bind(this),
                    onTouchEnd: this.handleMouseDown.bind(this),
                    "aria-haspopup": "listbox",
                  },
                  Sd,
                  t.default.createElement(
                    "div",
                    { className: "".concat(J, "-arrow-wrapper") },
                    H && j
                      ? this.state.isOpen
                        ? H
                        : j
                      : t.default.createElement("span", { className: wd })
                  )
                ),
                xd
              );
            },
          },
        ]),
        E
      );
    })(t.Component);
  S.defaultProps = { baseClassName: "Dropdown" };
  var k = S;
  e.default = k;
})(ed);
const lm = Ga(ed);
function sm(e) {
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
function td(e) {
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
function om() {
  return D.jsx(lm, {
    placeholder: D.jsx(sm, { className: "icon-right-topbar" }),
    arrowClassName: "myArrowClassName",
  });
}
const am = [
  {
    label: "Amazing",
    imgSrc:
      "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
  },
  {
    label: "Top of the world",
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
function um({ selectedFilter: e, setSelectedFilter: t }) {
  return D.jsx("div", {
    className: "filter-div ",
    children: am.map((n, r) =>
      D.jsxs(
        "div",
        {
          className: `links-box ${r === e && "selected-box"}`,
          onClick: () => {
            console.log("selecting key", r), t(r);
          },
          children: [
            D.jsx("img", { src: n.imgSrc, className: "links-img" }),
            D.jsx("p", {
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
function cm() {
  return D.jsx("div", {
    className: "right-filter",
    children: D.jsxs("h2", {
      className: "right-filter-content b",
      children: [
        D.jsx(td, {}),
        D.jsx("span", { className: "media-filtros", children: "Filtros" }),
      ],
    }),
  });
}
function dm() {
  return D.jsxs("div", {
    className: "main-header",
    children: [
      D.jsx("img", { src: Xp, alt: "logo", className: "navbar-logo" }),
      D.jsx("img", {
        src: Jp,
        alt: "logo",
        className: "navbar-logo logo-responsive",
      }),
      D.jsxs("div", {
        className: "search-bar",
        children: [
          D.jsx(cm, {}),
          D.jsx("a", {
            className: "b",
            href: "",
            children: "Cualquier lugar |",
          }),
          D.jsx("a", {
            className: "b",
            href: "",
            children: "Cualquier semana |",
          }),
          D.jsx("a", { className: "", href: "", children: "Añade viajeros" }),
          D.jsxs("span", {
            className: "pink-capsule",
            children: ["  ", D.jsx(rm, { className: "lupa" }), " "],
          }),
        ],
      }),
      D.jsxs("div", {
        className: "search-bar-right",
        children: [
          D.jsx("a", {
            className: "b",
            href: "",
            children: "Pon tu casa en Airbnb",
          }),
          D.jsx("img", { className: "world-svg", src: Zp, alt: "" }),
          D.jsxs("div", {
            className: "user-right-topbar",
            children: [
              D.jsx(nm, { className: "icon-right-topbar" }),
              D.jsx(om, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
const fm = [
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
function pm(e) {
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
function _a(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function ho(e = {}, t = {}) {
  Object.keys(t).forEach((n) => {
    typeof e[n] > "u"
      ? (e[n] = t[n])
      : _a(t[n]) && _a(e[n]) && Object.keys(t[n]).length > 0 && ho(e[n], t[n]);
  });
}
const nd = {
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
  return ho(e, nd), e;
}
const mm = {
  document: nd,
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
function Le() {
  const e = typeof window < "u" ? window : {};
  return ho(e, mm), e;
}
function hm(e) {
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
function hs(e, t = 0) {
  return setTimeout(e, t);
}
function Ei() {
  return Date.now();
}
function vm(e) {
  const t = Le();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function gm(e, t = "x") {
  const n = Le();
  let r, i, l;
  const s = vm(e);
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
function Rr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function ym(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function ke(...e) {
  const t = Object(e[0]),
    n = ["__proto__", "constructor", "prototype"];
  for (let r = 1; r < e.length; r += 1) {
    const i = e[r];
    if (i != null && !ym(i)) {
      const l = Object.keys(Object(i)).filter((s) => n.indexOf(s) < 0);
      for (let s = 0, a = l.length; s < a; s += 1) {
        const o = l[s],
          u = Object.getOwnPropertyDescriptor(i, o);
        u !== void 0 &&
          u.enumerable &&
          (Rr(t[o]) && Rr(i[o])
            ? i[o].__swiper__
              ? (t[o] = i[o])
              : ke(t[o], i[o])
            : !Rr(t[o]) && Rr(i[o])
            ? ((t[o] = {}), i[o].__swiper__ ? (t[o] = i[o]) : ke(t[o], i[o]))
            : (t[o] = i[o]));
      }
    }
  }
  return t;
}
function Br(e, t, n) {
  e.style.setProperty(t, n);
}
function rd({ swiper: e, targetPosition: t, side: n }) {
  const r = Le(),
    i = -e.translate;
  let l = null,
    s;
  const a = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const o = t > i ? "next" : "prev",
    u = (f, m) => (o === "next" && f >= m) || (o === "prev" && f <= m),
    p = () => {
      (s = new Date().getTime()), l === null && (l = s);
      const f = Math.max(Math.min((s - l) / a, 1), 0),
        m = 0.5 - Math.cos(f * Math.PI) / 2;
      let v = i + m * (t - i);
      if ((u(v, t) && (v = t), e.wrapperEl.scrollTo({ [n]: v }), u(v, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [n]: v });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(p);
    };
  p();
}
function rt(e, t = "") {
  return [...e.children].filter((n) => n.matches(t));
}
function wm(e, t = []) {
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
}
function Sm(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function xm(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function gt(e, t) {
  return Le().getComputedStyle(e, null).getPropertyValue(t);
}
function Pa(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Em(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function Ma(e, t, n) {
  const r = Le();
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
let fl;
function Cm() {
  const e = Le(),
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
function id() {
  return fl || (fl = Cm()), fl;
}
let pl;
function km({ userAgent: e } = {}) {
  const t = id(),
    n = Le(),
    r = n.navigator.platform,
    i = e || n.navigator.userAgent,
    l = { ios: !1, android: !1 },
    s = n.screen.width,
    a = n.screen.height,
    o = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = i.match(/(iPad).*OS\s([\d_]+)/);
  const p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    m = r === "Win32";
  let v = r === "MacIntel";
  const x = [
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
    !u &&
      v &&
      t.touch &&
      x.indexOf(`${s}x${a}`) >= 0 &&
      ((u = i.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (v = !1)),
    o && !m && ((l.os = "android"), (l.android = !0)),
    (u || f || p) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function Tm(e = {}) {
  return pl || (pl = km(e)), pl;
}
let ml;
function _m() {
  const e = Le();
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
function Pm() {
  return ml || (ml = _m()), ml;
}
function Mm({ swiper: e, on: t, emit: n }) {
  const r = Le();
  let i = null,
    l = null;
  const s = () => {
      !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((i = new ResizeObserver((p) => {
          l = r.requestAnimationFrame(() => {
            const { width: f, height: m } = e;
            let v = f,
              x = m;
            p.forEach(({ contentBoxSize: w, contentRect: T, target: c }) => {
              (c && c !== e.el) ||
                ((v = T ? T.width : (w[0] || w).inlineSize),
                (x = T ? T.height : (w[0] || w).blockSize));
            }),
              (v !== f || x !== m) && s();
          });
        })),
        i.observe(e.el));
    },
    o = () => {
      l && r.cancelAnimationFrame(l),
        i && i.unobserve && e.el && (i.unobserve(e.el), (i = null));
    },
    u = () => {
      !e || e.destroyed || !e.initialized || n("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      a();
      return;
    }
    r.addEventListener("resize", s), r.addEventListener("orientationchange", u);
  }),
    t("destroy", () => {
      o(),
        r.removeEventListener("resize", s),
        r.removeEventListener("orientationchange", u);
    });
}
function Nm({ swiper: e, extendParams: t, on: n, emit: r }) {
  const i = [],
    l = Le(),
    s = (u, p = {}) => {
      const f = l.MutationObserver || l.WebkitMutationObserver,
        m = new f((v) => {
          if (e.__preventObserver__) return;
          if (v.length === 1) {
            r("observerUpdate", v[0]);
            return;
          }
          const x = function () {
            r("observerUpdate", v[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(x)
            : l.setTimeout(x, 0);
        });
      m.observe(u, {
        attributes: typeof p.attributes > "u" ? !0 : p.attributes,
        childList: typeof p.childList > "u" ? !0 : p.childList,
        characterData: typeof p.characterData > "u" ? !0 : p.characterData,
      }),
        i.push(m);
    },
    a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const u = Em(e.el);
          for (let p = 0; p < u.length; p += 1) s(u[p]);
        }
        s(e.el, { childList: e.params.observeSlideChildren }),
          s(e.wrapperEl, { attributes: !1 });
      }
    },
    o = () => {
      i.forEach((u) => {
        u.disconnect();
      }),
        i.splice(0, i.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    n("init", a),
    n("destroy", o);
}
const Lm = {
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
function Om() {
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
function zm() {
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
  function n(_, N) {
    return parseFloat(_.getPropertyValue(t(N)) || 0);
  }
  const r = e.params,
    { wrapperEl: i, slidesEl: l, size: s, rtlTranslate: a, wrongRTL: o } = e,
    u = e.virtual && r.virtual.enabled,
    p = u ? e.virtual.slides.length : e.slides.length,
    f = rt(l, `.${e.params.slideClass}, swiper-slide`),
    m = u ? e.virtual.slides.length : f.length;
  let v = [];
  const x = [],
    w = [];
  let T = r.slidesOffsetBefore;
  typeof T == "function" && (T = r.slidesOffsetBefore.call(e));
  let c = r.slidesOffsetAfter;
  typeof c == "function" && (c = r.slidesOffsetAfter.call(e));
  const d = e.snapGrid.length,
    h = e.slidesGrid.length;
  let S = r.spaceBetween,
    k = -T,
    g = 0,
    E = 0;
  if (typeof s > "u") return;
  typeof S == "string" &&
    S.indexOf("%") >= 0 &&
    (S = (parseFloat(S.replace("%", "")) / 100) * s),
    (e.virtualSize = -S),
    f.forEach((_) => {
      a ? (_.style.marginLeft = "") : (_.style.marginRight = ""),
        (_.style.marginBottom = ""),
        (_.style.marginTop = "");
    }),
    r.centeredSlides &&
      r.cssMode &&
      (Br(i, "--swiper-centered-offset-before", ""),
      Br(i, "--swiper-centered-offset-after", ""));
  const y = r.grid && r.grid.rows > 1 && e.grid;
  y && e.grid.initSlides(m);
  let C;
  const M =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (_) => typeof r.breakpoints[_].slidesPerView < "u"
    ).length > 0;
  for (let _ = 0; _ < m; _ += 1) {
    C = 0;
    let N;
    if (
      (f[_] && (N = f[_]),
      y && e.grid.updateSlide(_, N, m, t),
      !(f[_] && gt(N, "display") === "none"))
    ) {
      if (r.slidesPerView === "auto") {
        M && (f[_].style[t("width")] = "");
        const I = getComputedStyle(N),
          R = N.style.transform,
          J = N.style.webkitTransform;
        if (
          (R && (N.style.transform = "none"),
          J && (N.style.webkitTransform = "none"),
          r.roundLengths)
        )
          C = e.isHorizontal() ? Ma(N, "width", !0) : Ma(N, "height", !0);
        else {
          const fe = n(I, "width"),
            ge = n(I, "padding-left"),
            L = n(I, "padding-right"),
            z = n(I, "margin-left"),
            j = n(I, "margin-right"),
            H = I.getPropertyValue("box-sizing");
          if (H && H === "border-box") C = fe + z + j;
          else {
            const { clientWidth: Q, offsetWidth: qe } = N;
            C = fe + ge + L + z + j + (qe - Q);
          }
        }
        R && (N.style.transform = R),
          J && (N.style.webkitTransform = J),
          r.roundLengths && (C = Math.floor(C));
      } else
        (C = (s - (r.slidesPerView - 1) * S) / r.slidesPerView),
          r.roundLengths && (C = Math.floor(C)),
          f[_] && (f[_].style[t("width")] = `${C}px`);
      f[_] && (f[_].swiperSlideSize = C),
        w.push(C),
        r.centeredSlides
          ? ((k = k + C / 2 + g / 2 + S),
            g === 0 && _ !== 0 && (k = k - s / 2 - S),
            _ === 0 && (k = k - s / 2 - S),
            Math.abs(k) < 1 / 1e3 && (k = 0),
            r.roundLengths && (k = Math.floor(k)),
            E % r.slidesPerGroup === 0 && v.push(k),
            x.push(k))
          : (r.roundLengths && (k = Math.floor(k)),
            (E - Math.min(e.params.slidesPerGroupSkip, E)) %
              e.params.slidesPerGroup ===
              0 && v.push(k),
            x.push(k),
            (k = k + C + S)),
        (e.virtualSize += C + S),
        (g = C),
        (E += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + c),
    a &&
      o &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      (i.style.width = `${e.virtualSize + r.spaceBetween}px`),
    r.setWrapperSize &&
      (i.style[t("width")] = `${e.virtualSize + r.spaceBetween}px`),
    y && e.grid.updateWrapperSize(C, v, t),
    !r.centeredSlides)
  ) {
    const _ = [];
    for (let N = 0; N < v.length; N += 1) {
      let I = v[N];
      r.roundLengths && (I = Math.floor(I)),
        v[N] <= e.virtualSize - s && _.push(I);
    }
    (v = _),
      Math.floor(e.virtualSize - s) - Math.floor(v[v.length - 1]) > 1 &&
        v.push(e.virtualSize - s);
  }
  if (u && r.loop) {
    const _ = w[0] + S;
    if (r.slidesPerGroup > 1) {
      const N = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup
        ),
        I = _ * r.slidesPerGroup;
      for (let R = 0; R < N; R += 1) v.push(v[v.length - 1] + I);
    }
    for (let N = 0; N < e.virtual.slidesBefore + e.virtual.slidesAfter; N += 1)
      r.slidesPerGroup === 1 && v.push(v[v.length - 1] + _),
        x.push(x[x.length - 1] + _),
        (e.virtualSize += _);
  }
  if ((v.length === 0 && (v = [0]), r.spaceBetween !== 0)) {
    const _ = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
    f.filter((N, I) =>
      !r.cssMode || r.loop ? !0 : I !== f.length - 1
    ).forEach((N) => {
      N.style[_] = `${S}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let _ = 0;
    w.forEach((I) => {
      _ += I + (r.spaceBetween ? r.spaceBetween : 0);
    }),
      (_ -= r.spaceBetween);
    const N = _ - s;
    v = v.map((I) => (I < 0 ? -T : I > N ? N + c : I));
  }
  if (r.centerInsufficientSlides) {
    let _ = 0;
    if (
      (w.forEach((N) => {
        _ += N + (r.spaceBetween ? r.spaceBetween : 0);
      }),
      (_ -= r.spaceBetween),
      _ < s)
    ) {
      const N = (s - _) / 2;
      v.forEach((I, R) => {
        v[R] = I - N;
      }),
        x.forEach((I, R) => {
          x[R] = I + N;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: f,
      snapGrid: v,
      slidesGrid: x,
      slidesSizesGrid: w,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    Br(i, "--swiper-centered-offset-before", `${-v[0]}px`),
      Br(
        i,
        "--swiper-centered-offset-after",
        `${e.size / 2 - w[w.length - 1] / 2}px`
      );
    const _ = -e.snapGrid[0],
      N = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((I) => I + _)),
      (e.slidesGrid = e.slidesGrid.map((I) => I + N));
  }
  if (
    (m !== p && e.emit("slidesLengthChange"),
    v.length !== d &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    x.length !== h && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !u && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const _ = `${r.containerModifierClass}backface-hidden`,
      N = e.el.classList.contains(_);
    m <= r.maxBackfaceHiddenSlides
      ? N || e.el.classList.add(_)
      : N && e.el.classList.remove(_);
  }
}
function jm(e) {
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
function Im() {
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
function Dm(e = (this && this.translate) || 0) {
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
    let u = o.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
    const p =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (o.swiperSlideSize + n.spaceBetween),
      f =
        (s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (o.swiperSlideSize + n.spaceBetween),
      m = -(s - u),
      v = m + t.slidesSizesGrid[a];
    ((m >= 0 && m < t.size - 1) ||
      (v > 1 && v <= t.size) ||
      (m <= 0 && v >= t.size)) &&
      (t.visibleSlides.push(o),
      t.visibleSlidesIndexes.push(a),
      r[a].classList.add(n.slideVisibleClass)),
      (o.progress = i ? -p : p),
      (o.originalProgress = i ? -f : f);
  }
}
function Am(e) {
  const t = this;
  if (typeof e > "u") {
    const p = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * p) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: l, isEnd: s, progressLoop: a } = t;
  const o = l,
    u = s;
  if (r === 0) (i = 0), (l = !0), (s = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const p = Math.abs(e - t.minTranslate()) < 1,
      f = Math.abs(e - t.maxTranslate()) < 1;
    (l = p || i <= 0), (s = f || i >= 1), p && (i = 0), f && (i = 1);
  }
  if (n.loop) {
    const p = t.getSlideIndexByData(0),
      f = t.getSlideIndexByData(t.slides.length - 1),
      m = t.slidesGrid[p],
      v = t.slidesGrid[f],
      x = t.slidesGrid[t.slidesGrid.length - 1],
      w = Math.abs(e);
    w >= m ? (a = (w - m) / x) : (a = (w + x - v) / x), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: l, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !o && t.emit("reachBeginning toEdge"),
    s && !u && t.emit("reachEnd toEdge"),
    ((o && !l) || (u && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function Rm() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    l = e.virtual && n.virtual.enabled,
    s = (o) => rt(r, `.${n.slideClass}${o}, swiper-slide${o}`)[0];
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
    let o = xm(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !o && (o = t[0]), o && o.classList.add(n.slideNextClass);
    let u = Sm(a, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !u === 0 && (u = t[t.length - 1]),
      u && u.classList.add(n.slidePrevClass);
  }
  e.emitSlidesClasses();
}
const Xr = (e, t) => {
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
  vs = (e) => {
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
function Bm(e) {
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
function Vm(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: l, realIndex: s, snapIndex: a } = t;
  let o = e,
    u;
  const p = (m) => {
    let v = m - t.virtual.slidesBefore;
    return (
      v < 0 && (v = t.virtual.slides.length + v),
      v >= t.virtual.slides.length && (v -= t.virtual.slides.length),
      v
    );
  };
  if ((typeof o > "u" && (o = Bm(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const m = Math.min(i.slidesPerGroupSkip, o);
    u = m + Math.floor((o - m) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), o === l)) {
    u !== a && ((t.snapIndex = u), t.emit("snapIndexChange")),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = p(o));
    return;
  }
  let f;
  t.virtual && i.virtual.enabled && i.loop
    ? (f = p(o))
    : t.slides[o]
    ? (f = parseInt(
        t.slides[o].getAttribute("data-swiper-slide-index") || o,
        10
      ))
    : (f = o),
    Object.assign(t, {
      previousSnapIndex: a,
      snapIndex: u,
      previousRealIndex: s,
      realIndex: f,
      previousIndex: l,
      activeIndex: o,
    }),
    t.initialized && vs(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    s !== f && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function Fm(e) {
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
const Hm = {
  updateSize: Om,
  updateSlides: zm,
  updateAutoHeight: jm,
  updateSlidesOffset: Im,
  updateSlidesProgress: Dm,
  updateProgress: Am,
  updateSlidesClasses: Rm,
  updateActiveIndex: Vm,
  updateClickedSlide: Fm,
};
function Um(e = this.isHorizontal() ? "x" : "y") {
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = gm(l, e);
  return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function Gm(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: l, progress: s } = n;
  let a = 0,
    o = 0;
  const u = 0;
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
        (l.style.transform = `translate3d(${a}px, ${o}px, ${u}px)`));
  let p;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (p = 0) : (p = (e - n.minTranslate()) / f),
    p !== s && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function $m() {
  return -this.snapGrid[0];
}
function Wm() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function bm(e = 0, t = this.params.speed, n = !0, r = !0, i) {
  const l = this,
    { params: s, wrapperEl: a } = l;
  if (l.animating && s.preventInteractionOnTransition) return !1;
  const o = l.minTranslate(),
    u = l.maxTranslate();
  let p;
  if (
    (r && e > o ? (p = o) : r && e < u ? (p = u) : (p = e),
    l.updateProgress(p),
    s.cssMode)
  ) {
    const f = l.isHorizontal();
    if (t === 0) a[f ? "scrollLeft" : "scrollTop"] = -p;
    else {
      if (!l.support.smoothScroll)
        return (
          rd({ swiper: l, targetPosition: -p, side: f ? "left" : "top" }), !0
        );
      a.scrollTo({ [f ? "left" : "top"]: -p, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(p),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
      : (l.setTransition(t),
        l.setTranslate(p),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (m) {
              !l ||
                l.destroyed ||
                (m.target === this &&
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
const Qm = {
  getTranslate: Um,
  setTranslate: Gm,
  minTranslate: $m,
  maxTranslate: Wm,
  translateTo: bm,
};
function Ym(e, t) {
  const n = this;
  n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`),
    n.emit("setTransition", e, t);
}
function ld({ swiper: e, runCallbacks: t, direction: n, step: r }) {
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
function qm(e = !0, t) {
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    ld({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Km(e = !0, t) {
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      ld({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
const Xm = { setTransition: Ym, transitionStart: qm, transitionEnd: Km };
function Jm(e = 0, t = this.params.speed, n = !0, r, i) {
  typeof e == "string" && (e = parseInt(e, 10));
  const l = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: u,
    previousIndex: p,
    activeIndex: f,
    rtlTranslate: m,
    wrapperEl: v,
    enabled: x,
  } = l;
  if ((l.animating && a.preventInteractionOnTransition) || (!x && !r && !i))
    return !1;
  const w = Math.min(l.params.slidesPerGroupSkip, s);
  let T = w + Math.floor((s - w) / l.params.slidesPerGroup);
  T >= o.length && (T = o.length - 1);
  const c = -o[T];
  if (a.normalizeSlideIndex)
    for (let h = 0; h < u.length; h += 1) {
      const S = -Math.floor(c * 100),
        k = Math.floor(u[h] * 100),
        g = Math.floor(u[h + 1] * 100);
      typeof u[h + 1] < "u"
        ? S >= k && S < g - (g - k) / 2
          ? (s = h)
          : S >= k && S < g && (s = h + 1)
        : S >= k && (s = h);
    }
  if (
    l.initialized &&
    s !== f &&
    ((!l.allowSlideNext && c < l.translate && c < l.minTranslate()) ||
      (!l.allowSlidePrev &&
        c > l.translate &&
        c > l.maxTranslate() &&
        (f || 0) !== s))
  )
    return !1;
  s !== (p || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(c);
  let d;
  if (
    (s > f ? (d = "next") : s < f ? (d = "prev") : (d = "reset"),
    (m && -c === l.translate) || (!m && c === l.translate))
  )
    return (
      l.updateActiveIndex(s),
      a.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      a.effect !== "slide" && l.setTranslate(c),
      d !== "reset" && (l.transitionStart(n, d), l.transitionEnd(n, d)),
      !1
    );
  if (a.cssMode) {
    const h = l.isHorizontal(),
      S = m ? c : -c;
    if (t === 0) {
      const k = l.virtual && l.params.virtual.enabled;
      k &&
        ((l.wrapperEl.style.scrollSnapType = "none"),
        (l._immediateVirtual = !0)),
        k && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
          ? ((l._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[h ? "scrollLeft" : "scrollTop"] = S;
            }))
          : (v[h ? "scrollLeft" : "scrollTop"] = S),
        k &&
          requestAnimationFrame(() => {
            (l.wrapperEl.style.scrollSnapType = ""), (l._immediateVirtual = !1);
          });
    } else {
      if (!l.support.smoothScroll)
        return (
          rd({ swiper: l, targetPosition: S, side: h ? "left" : "top" }), !0
        );
      v.scrollTo({ [h ? "left" : "top"]: S, behavior: "smooth" });
    }
    return !0;
  }
  return (
    l.setTransition(t),
    l.setTranslate(c),
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
function Zm(e = 0, t = this.params.speed, n = !0, r) {
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
function eh(e = this.params.speed, t = !0, n) {
  const r = this,
    { enabled: i, params: l, animating: s } = r;
  if (!i) return r;
  let a = l.slidesPerGroup;
  l.slidesPerView === "auto" &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const o = r.activeIndex < l.slidesPerGroupSkip ? 1 : a,
    u = r.virtual && l.virtual.enabled;
  if (l.loop) {
    if (s && !u && l.loopPreventsSliding) return !1;
    r.loopFix({ direction: "next" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  return l.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + o, e, t, n);
}
function th(e = this.params.speed, t = !0, n) {
  const r = this,
    {
      params: i,
      snapGrid: l,
      slidesGrid: s,
      rtlTranslate: a,
      enabled: o,
      animating: u,
    } = r;
  if (!o) return r;
  const p = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !p && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const f = a ? r.translate : -r.translate;
  function m(c) {
    return c < 0 ? -Math.floor(Math.abs(c)) : Math.floor(c);
  }
  const v = m(f),
    x = l.map((c) => m(c));
  let w = l[x.indexOf(v) - 1];
  if (typeof w > "u" && i.cssMode) {
    let c;
    l.forEach((d, h) => {
      v >= d && (c = h);
    }),
      typeof c < "u" && (w = l[c > 0 ? c - 1 : c]);
  }
  let T = 0;
  if (
    (typeof w < "u" &&
      ((T = s.indexOf(w)),
      T < 0 && (T = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((T = T - r.slidesPerViewDynamic("previous", !0) + 1),
        (T = Math.max(T, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const c =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(c, e, t, n);
  }
  return r.slideTo(T, e, t, n);
}
function nh(e = this.params.speed, t = !0, n) {
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function rh(e = this.params.speed, t = !0, n, r = 0.5) {
  const i = this;
  let l = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, l),
    a = s + Math.floor((l - s) / i.params.slidesPerGroup),
    o = i.rtlTranslate ? i.translate : -i.translate;
  if (o >= i.snapGrid[a]) {
    const u = i.snapGrid[a],
      p = i.snapGrid[a + 1];
    o - u > (p - u) * r && (l += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[a - 1],
      p = i.snapGrid[a];
    o - u <= (p - u) * r && (l -= i.params.slidesPerGroup);
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, i.slidesGrid.length - 1)),
    i.slideTo(l, e, t, n)
  );
}
function ih() {
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
              rt(n, `${s}[data-swiper-slide-index="${l}"]`)[0]
            )),
            hs(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            rt(n, `${s}[data-swiper-slide-index="${l}"]`)[0]
          )),
          hs(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
const lh = {
  slideTo: Jm,
  slideToLoop: Zm,
  slideNext: eh,
  slidePrev: th,
  slideReset: nh,
  slideToClosest: rh,
  slideToClickedSlide: ih,
};
function sh(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  rt(r, `.${n.slideClass}, swiper-slide`).forEach((l, s) => {
    l.setAttribute("data-swiper-slide-index", s);
  }),
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : "next",
    });
}
function oh({
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
    allowSlidePrev: u,
    allowSlideNext: p,
    slidesEl: f,
    params: m,
  } = a;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && m.virtual.enabled)
  ) {
    t &&
      (!m.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : m.centeredSlides && a.snapIndex < m.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = u),
      (a.allowSlideNext = p),
      a.emit("loopFix");
    return;
  }
  const v =
    m.slidesPerView === "auto"
      ? a.slidesPerViewDynamic()
      : Math.ceil(parseFloat(m.slidesPerView, 10));
  let x = m.loopedSlides || v;
  x % m.slidesPerGroup !== 0 &&
    (x += m.slidesPerGroup - (x % m.slidesPerGroup)),
    (a.loopedSlides = x);
  const w = [],
    T = [];
  let c = a.activeIndex;
  typeof i > "u"
    ? (i = a.getSlideIndex(
        a.slides.filter((g) => g.classList.contains(m.slideActiveClass))[0]
      ))
    : (c = i);
  const d = n === "next" || !n,
    h = n === "prev" || !n;
  let S = 0,
    k = 0;
  if (i < x) {
    S = Math.max(x - i, m.slidesPerGroup);
    for (let g = 0; g < x - i; g += 1) {
      const E = g - Math.floor(g / o.length) * o.length;
      w.push(o.length - E - 1);
    }
  } else if (i > a.slides.length - x * 2) {
    k = Math.max(i - (a.slides.length - x * 2), m.slidesPerGroup);
    for (let g = 0; g < k; g += 1) {
      const E = g - Math.floor(g / o.length) * o.length;
      T.push(E);
    }
  }
  if (
    (h &&
      w.forEach((g) => {
        f.prepend(a.slides[g]);
      }),
    d &&
      T.forEach((g) => {
        f.append(a.slides[g]);
      }),
    a.recalcSlides(),
    m.slidesPerView === "auto" && a.updateSlides(),
    m.watchSlidesProgress && a.updateSlidesOffset(),
    t)
  ) {
    if (w.length > 0 && h)
      if (typeof e > "u") {
        const g = a.slidesGrid[c],
          y = a.slidesGrid[c + S] - g;
        s
          ? a.setTranslate(a.translate - y)
          : (a.slideTo(c + S, 0, !1, !0),
            r && (a.touches[a.isHorizontal() ? "startX" : "startY"] += y));
      } else r && a.slideToLoop(e, 0, !1, !0);
    else if (T.length > 0 && d)
      if (typeof e > "u") {
        const g = a.slidesGrid[c],
          y = a.slidesGrid[c - k] - g;
        s
          ? a.setTranslate(a.translate - y)
          : (a.slideTo(c - k, 0, !1, !0),
            r && (a.touches[a.isHorizontal() ? "startX" : "startY"] += y));
      } else a.slideToLoop(e, 0, !1, !0);
  }
  if (
    ((a.allowSlidePrev = u),
    (a.allowSlideNext = p),
    a.controller && a.controller.control && !l)
  ) {
    const g = {
      slideRealIndex: e,
      slideTo: !1,
      direction: n,
      setTranslate: r,
      activeSlideIndex: i,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((E) => {
          !E.destroyed && E.params.loop && E.loopFix(g);
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix(g);
  }
  a.emit("loopFix");
}
function ah() {
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
const uh = { loopCreate: sh, loopFix: oh, loopDestroy: ah };
function ch(e) {
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
function dh() {
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
const fh = { setGrabCursor: ch, unsetGrabCursor: dh };
function ph(e, t = this) {
  function n(r) {
    if (!r || r === qt() || r === Le()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function mh(e) {
  const t = this,
    n = qt(),
    r = Le(),
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
  let u = o.target;
  if (
    (l.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(u)) ||
    ("which" in o && o.which === 3) ||
    ("button" in o && o.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const p = !!l.noSwipingClass && l.noSwipingClass !== "",
    f = e.composedPath ? e.composedPath() : e.path;
  p && o.target && o.target.shadowRoot && f && (u = f[0]);
  const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    v = !!(o.target && o.target.shadowRoot);
  if (l.noSwiping && (v ? ph(m, u) : u.closest(m))) {
    t.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !u.closest(l.swipeHandler)) return;
  (s.currentX = o.pageX), (s.currentY = o.pageY);
  const x = s.currentX,
    w = s.currentY,
    T = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
    c = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
  if (T && (x <= c || x >= r.innerWidth - c))
    if (T === "prevent") e.preventDefault();
    else return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (s.startX = x),
    (s.startY = w),
    (i.touchStartTime = Ei()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (i.allowThresholdMove = !1);
  let d = !0;
  u.matches(i.focusableElements) &&
    ((d = !1), u.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== u &&
      n.activeElement.blur();
  const h = d && t.allowTouchMove && l.touchStartPreventDefault;
  (l.touchStartForcePreventDefault || h) &&
    !u.isContentEditable &&
    o.preventDefault(),
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", o);
}
function hh(e) {
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
  const u = r.evCache.findIndex((g) => g.pointerId === o.pointerId);
  u >= 0 && (r.evCache[u] = o);
  const p = r.evCache.length > 1 ? r.evCache[0] : o,
    f = p.pageX,
    m = p.pageY;
  if (o.preventedByNestedSwiper) {
    (l.startX = f), (l.startY = m);
    return;
  }
  if (!n.allowTouchMove) {
    o.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(l, {
          startX: f,
          startY: m,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: f,
          currentY: m,
        }),
        (r.touchStartTime = Ei()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (m < l.startY && n.translate <= n.maxTranslate()) ||
        (m > l.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (f < l.startX && n.translate <= n.maxTranslate()) ||
      (f > l.startX && n.translate >= n.minTranslate())
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
  (l.currentX = f), (l.currentY = m);
  const v = l.currentX - l.startX,
    x = l.currentY - l.startY;
  if (n.params.threshold && Math.sqrt(v ** 2 + x ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let g;
    (n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (r.isScrolling = !1)
      : v * v + x * x >= 25 &&
        ((g = (Math.atan2(Math.abs(x), Math.abs(v)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? g > i.touchAngle
          : 90 - g > i.touchAngle));
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
  let w = n.isHorizontal() ? v : x,
    T = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
  i.oneWayMovement &&
    ((w = Math.abs(w) * (s ? 1 : -1)), (T = Math.abs(T) * (s ? 1 : -1))),
    (l.diff = w),
    (w *= i.touchRatio),
    s && ((w = -w), (T = -T));
  const c = n.touchesDirection;
  (n.swipeDirection = w > 0 ? "prev" : "next"),
    (n.touchesDirection = T > 0 ? "prev" : "next");
  const d = n.params.loop && !i.cssMode;
  if (!r.isMoved) {
    if (
      (d && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const g = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(g);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o);
  }
  let h;
  r.isMoved &&
    c !== n.touchesDirection &&
    d &&
    Math.abs(w) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (h = !0)),
    n.emit("sliderMove", o),
    (r.isMoved = !0),
    (r.currentTranslate = w + r.startTranslate);
  let S = !0,
    k = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (k = 0),
    w > 0
      ? (d &&
          !h &&
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
              (-n.minTranslate() + r.startTranslate + w) ** k)))
      : w < 0 &&
        (d &&
          !h &&
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
              (n.maxTranslate() - r.startTranslate - w) ** k))),
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
    if (Math.abs(w) > i.threshold || r.allowThresholdMove) {
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
function vh(e) {
  const t = this,
    n = t.touchEventsData,
    r = n.evCache.findIndex((h) => h.pointerId === e.pointerId);
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
  let u = e;
  if (
    (u.originalEvent && (u = u.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", u),
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
  const p = Ei(),
    f = p - n.touchStartTime;
  if (t.allowClick) {
    const h = u.path || (u.composedPath && u.composedPath());
    t.updateClickedSlide((h && h[0]) || u.target),
      t.emit("tap click", u),
      f < 300 &&
        p - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", u);
  }
  if (
    ((n.lastClickTime = Ei()),
    hs(() => {
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
  let m;
  if (
    (i.followFinger
      ? (m = s ? t.translate : -t.translate)
      : (m = -n.currentTranslate),
    i.cssMode)
  )
    return;
  if (t.params.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: m });
    return;
  }
  let v = 0,
    x = t.slidesSizesGrid[0];
  for (
    let h = 0;
    h < a.length;
    h += h < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const S = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof a[h + S] < "u"
      ? m >= a[h] && m < a[h + S] && ((v = h), (x = a[h + S] - a[h]))
      : m >= a[h] && ((v = h), (x = a[a.length - 1] - a[a.length - 2]));
  }
  let w = null,
    T = null;
  i.rewind &&
    (t.isBeginning
      ? (T =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (w = 0));
  const c = (m - a[v]) / x,
    d = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (f > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (c >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? w : v + d)
        : t.slideTo(v)),
      t.swipeDirection === "prev" &&
        (c > 1 - i.longSwipesRatio
          ? t.slideTo(v + d)
          : T !== null && c < 0 && Math.abs(c) > i.longSwipesRatio
          ? t.slideTo(T)
          : t.slideTo(v));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl)
      ? u.target === t.navigation.nextEl
        ? t.slideTo(v + d)
        : t.slideTo(v)
      : (t.swipeDirection === "next" && t.slideTo(w !== null ? w : v + d),
        t.swipeDirection === "prev" && t.slideTo(T !== null ? T : v));
  }
}
function La() {
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
function gh(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function yh() {
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
function wh(e) {
  const t = this;
  Xr(t, e.target), t.update();
}
let Oa = !1;
function Sh() {}
const sd = (e, t) => {
  const n = qt(),
    { params: r, el: i, wrapperEl: l, device: s } = e,
    a = !!r.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
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
      ? e[u](
          s.ios || s.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          La,
          !0
        )
      : e[u]("observerUpdate", La, !0),
    i[o]("load", e.onLoad, { capture: !0 });
};
function xh() {
  const e = this,
    t = qt(),
    { params: n } = e;
  (e.onTouchStart = mh.bind(e)),
    (e.onTouchMove = hh.bind(e)),
    (e.onTouchEnd = vh.bind(e)),
    n.cssMode && (e.onScroll = yh.bind(e)),
    (e.onClick = gh.bind(e)),
    (e.onLoad = wh.bind(e)),
    Oa || (t.addEventListener("touchstart", Sh), (Oa = !0)),
    sd(e, "on");
}
function Eh() {
  sd(this, "off");
}
const Ch = { attachEvents: xh, detachEvents: Eh },
  za = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function kh() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    l = r.breakpoints;
  if (!l || (l && Object.keys(l).length === 0)) return;
  const s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
  if (!s || e.currentBreakpoint === s) return;
  const o = (s in l ? l[s] : void 0) || e.originalParams,
    u = za(e, r),
    p = za(e, o),
    f = r.enabled;
  u && !p
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      p &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((o.grid.fill && o.grid.fill === "column") ||
        (!o.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((w) => {
      const T = r[w] && r[w].enabled,
        c = o[w] && o[w].enabled;
      T && !c && e[w].disable(), !T && c && e[w].enable();
    });
  const m = o.direction && o.direction !== r.direction,
    v = r.loop && (o.slidesPerView !== r.slidesPerView || m);
  m && n && e.changeDirection(), ke(e.params, o);
  const x = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    f && !x ? e.disable() : !f && x && e.enable(),
    (e.currentBreakpoint = s),
    e.emit("_beforeBreakpoint", o),
    v && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
    e.emit("breakpoint", o);
}
function Th(e, t = "window", n) {
  if (!e || (t === "container" && !n)) return;
  let r = !1;
  const i = Le(),
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
    const { point: o, value: u } = s[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = o)
      : u <= n.clientWidth && (r = o);
  }
  return r || "max";
}
const _h = { setBreakpoint: kh, getBreakpoint: Th };
function Ph(e, t) {
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
function Mh() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: l } = e,
    s = Ph(
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
function Nh() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
const Lh = { addClasses: Mh, removeClasses: Nh };
function Oh() {
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
const zh = { checkOverflow: Oh },
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
function jh(e, t) {
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
const hl = {
    eventsEmitter: Lm,
    update: Hm,
    translate: Qm,
    transition: Xm,
    slide: lh,
    loop: uh,
    grabCursor: fh,
    events: Ch,
    breakpoints: _h,
    checkOverflow: zh,
    classes: Lh,
  },
  vl = {};
let pr = class Je {
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
        i.querySelectorAll(r.el).forEach((u) => {
          const p = ke({}, r, { el: u });
          o.push(new Je(p));
        }),
        o
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = id()),
      (l.device = Tm({ userAgent: r.userAgent })),
      (l.browser = Pm()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      r.modules && Array.isArray(r.modules) && l.modules.push(...r.modules);
    const s = {};
    l.modules.forEach((o) => {
      o({
        params: r,
        swiper: l,
        extendParams: jh(r, s),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const a = ke({}, ja, s);
    return (
      (l.params = ke({}, a, vl, r)),
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
      i = rt(n, `.${r.slideClass}, swiper-slide`),
      l = Pa(i[0]);
    return Pa(t) - l;
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
    t.slides = rt(n, `.${r.slideClass}, swiper-slide`);
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
        activeIndex: u,
      } = r;
    let p = 1;
    if (i.centeredSlides) {
      let f = l[u].swiperSlideSize,
        m;
      for (let v = u + 1; v < l.length; v += 1)
        l[v] &&
          !m &&
          ((f += l[v].swiperSlideSize), (p += 1), f > o && (m = !0));
      for (let v = u - 1; v >= 0; v -= 1)
        l[v] &&
          !m &&
          ((f += l[v].swiperSlideSize), (p += 1), f > o && (m = !0));
    } else if (t === "current")
      for (let f = u + 1; f < l.length; f += 1)
        (n ? s[f] + a[f] - s[u] < o : s[f] - s[u] < o) && (p += 1);
    else for (let f = u - 1; f >= 0; f -= 1) s[u] - s[f] < o && (p += 1);
    return p;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
        s.complete && Xr(t, s);
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
        : rt(r, i())[0])();
    return (
      !s &&
        n.params.createElements &&
        ((s = wm("div", n.params.wrapperClass)),
        r.append(s),
        rt(r, `.${n.params.slideClass}`).forEach((a) => {
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
            ? Xr(n, i)
            : i.addEventListener("load", (l) => {
                Xr(n, l.target);
              });
        }),
        vs(n),
        (n.initialized = !0),
        vs(n),
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
        t !== !1 && ((r.el.swiper = null), hm(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    ke(vl, t);
  }
  static get extendedDefaults() {
    return vl;
  }
  static get defaults() {
    return ja;
  }
  static installModule(t) {
    Je.prototype.__modules__ || (Je.prototype.__modules__ = []);
    const n = Je.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Je.installModule(n)), Je)
      : (Je.installModule(t), Je);
  }
};
Object.keys(hl).forEach((e) => {
  Object.keys(hl[e]).forEach((t) => {
    pr.prototype[t] = hl[e][t];
  });
});
pr.use([Mm, Nm]);
function bt(e) {
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
        : bt(t[r]) && bt(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : yt(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function od(e = {}) {
  return (
    e.navigation &&
    typeof e.navigation.nextEl > "u" &&
    typeof e.navigation.prevEl > "u"
  );
}
function ad(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function ud(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function cd(e = "") {
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
function Ih(e = "") {
  return e
    ? e.includes("swiper-wrapper")
      ? e
      : `swiper-wrapper ${e}`
    : "swiper-wrapper";
}
const dd = [
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
function Dh(e = {}, t = !0) {
  const n = { on: {} },
    r = {},
    i = {};
  yt(n, pr.defaults),
    yt(n, pr.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1);
  const l = {},
    s = dd.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (s.indexOf(o) >= 0
          ? bt(e[o])
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
function Ah(
  { el: e, nextEl: t, prevEl: n, paginationEl: r, scrollbarEl: i, swiper: l },
  s
) {
  od(s) &&
    t &&
    n &&
    ((l.params.navigation.nextEl = t),
    (l.originalParams.navigation.nextEl = t),
    (l.params.navigation.prevEl = n),
    (l.originalParams.navigation.prevEl = n)),
    ad(s) &&
      r &&
      ((l.params.pagination.el = r), (l.originalParams.pagination.el = r)),
    ud(s) &&
      i &&
      ((l.params.scrollbar.el = i), (l.originalParams.scrollbar.el = i)),
    l.init(e);
}
function Rh(e, t, n, r, i) {
  const l = [];
  if (!t) return l;
  const s = (o) => {
    l.indexOf(o) < 0 && l.push(o);
  };
  if (n && r) {
    const o = r.map(i),
      u = n.map(i);
    o.join("") !== u.join("") && s("children"),
      r.length !== n.length && s("children");
  }
  return (
    dd
      .filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (bt(e[o]) && bt(t[o])) {
            const u = Object.keys(e[o]),
              p = Object.keys(t[o]);
            u.length !== p.length
              ? s(o)
              : (u.forEach((f) => {
                  e[o][f] !== t[o][f] && s(o);
                }),
                p.forEach((f) => {
                  e[o][f] !== t[o][f] && s(o);
                }));
          } else e[o] !== t[o] && s(o);
      }),
    l
  );
}
function fd(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function pd(e) {
  const t = [];
  return (
    U.Children.toArray(e).forEach((n) => {
      fd(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          pd(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function Bh(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    U.Children.toArray(e).forEach((r) => {
      if (fd(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = pd(r.props.children);
        i.length > 0 ? i.forEach((l) => t.push(l)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function Vh({
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
      (y) => y !== "children" && y !== "direction" && y !== "wrapperClass"
    ),
    {
      params: u,
      pagination: p,
      navigation: f,
      scrollbar: m,
      virtual: v,
      thumbs: x,
    } = e;
  let w, T, c, d, h, S, k, g;
  r.includes("thumbs") &&
    n.thumbs &&
    n.thumbs.swiper &&
    u.thumbs &&
    !u.thumbs.swiper &&
    (w = !0),
    r.includes("controller") &&
      n.controller &&
      n.controller.control &&
      u.controller &&
      !u.controller.control &&
      (T = !0),
    r.includes("pagination") &&
      n.pagination &&
      (n.pagination.el || a) &&
      (u.pagination || u.pagination === !1) &&
      p &&
      !p.el &&
      (c = !0),
    r.includes("scrollbar") &&
      n.scrollbar &&
      (n.scrollbar.el || s) &&
      (u.scrollbar || u.scrollbar === !1) &&
      m &&
      !m.el &&
      (d = !0),
    r.includes("navigation") &&
      n.navigation &&
      (n.navigation.prevEl || l) &&
      (n.navigation.nextEl || i) &&
      (u.navigation || u.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (h = !0);
  const E = (y) => {
    e[y] &&
      (e[y].destroy(),
      y === "navigation"
        ? (e.isElement && (e[y].prevEl.remove(), e[y].nextEl.remove()),
          (u[y].prevEl = void 0),
          (u[y].nextEl = void 0),
          (e[y].prevEl = void 0),
          (e[y].nextEl = void 0))
        : (e.isElement && e[y].el.remove(),
          (u[y].el = void 0),
          (e[y].el = void 0)));
  };
  r.includes("loop") &&
    e.isElement &&
    (u.loop && !n.loop ? (S = !0) : !u.loop && n.loop ? (k = !0) : (g = !0)),
    o.forEach((y) => {
      if (bt(u[y]) && bt(n[y])) yt(u[y], n[y]);
      else {
        const C = n[y];
        (C === !0 || C === !1) &&
        (y === "navigation" || y === "pagination" || y === "scrollbar")
          ? C === !1 && E(y)
          : (u[y] = n[y]);
      }
    }),
    o.includes("controller") &&
      !T &&
      e.controller &&
      e.controller.control &&
      u.controller &&
      u.controller.control &&
      (e.controller.control = u.controller.control),
    r.includes("children") &&
      t &&
      v &&
      u.virtual.enabled &&
      ((v.slides = t), v.update(!0)),
    r.includes("children") && t && u.loop && (g = !0),
    w && x.init() && x.update(!0),
    T && (e.controller.control = u.controller.control),
    c &&
      (e.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        e.el.shadowEl.appendChild(a)),
      a && (u.pagination.el = a),
      p.init(),
      p.render(),
      p.update()),
    d &&
      (e.isElement &&
        (!s || typeof s == "string") &&
        ((s = document.createElement("div")),
        s.classList.add("swiper-scrollbar"),
        e.el.shadowEl.appendChild(s)),
      s && (u.scrollbar.el = s),
      m.init(),
      m.updateSize(),
      m.setTranslate()),
    h &&
      (e.isElement &&
        ((!i || typeof i == "string") &&
          ((i = document.createElement("div")),
          i.classList.add("swiper-button-next"),
          e.el.shadowEl.appendChild(i)),
        (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-prev"),
          e.el.shadowEl.appendChild(l))),
      i && (u.navigation.nextEl = i),
      l && (u.navigation.prevEl = l),
      f.init(),
      f.update()),
    r.includes("allowSlideNext") && (e.allowSlideNext = n.allowSlideNext),
    r.includes("allowSlidePrev") && (e.allowSlidePrev = n.allowSlidePrev),
    r.includes("direction") && e.changeDirection(n.direction, !1),
    (S || g) && e.loopDestroy(),
    (k || g) && e.loopCreate(),
    e.update();
}
function Fh(e, t, n) {
  if (!n) return null;
  const r = (p) => {
      let f = p;
      return (
        p < 0 ? (f = t.length + p) : f >= t.length && (f = f - t.length), f
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: l, to: s } = n,
    a = e.params.loop ? -t.length : 0,
    o = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let p = a; p < o; p += 1) p >= l && p <= s && u.push(t[r(p)]);
  return u.map((p, f) =>
    U.cloneElement(p, { swiper: e, style: i, key: `slide-${f}` })
  );
}
const Hh = (e) => {
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
function qn(e, t) {
  return typeof window > "u" ? A.useEffect(e, t) : A.useLayoutEffect(e, t);
}
const Ia = A.createContext(null),
  Uh = A.createContext(null);
function gs() {
  return (
    (gs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gs.apply(this, arguments)
  );
}
const Gh = A.forwardRef(function (e, t) {
  let {
      className: n,
      tag: r = "div",
      wrapperTag: i = "div",
      children: l,
      onSwiper: s,
      ...a
    } = e === void 0 ? {} : e,
    o = !1;
  const [u, p] = A.useState("swiper"),
    [f, m] = A.useState(null),
    [v, x] = A.useState(!1),
    w = A.useRef(!1),
    T = A.useRef(null),
    c = A.useRef(null),
    d = A.useRef(null),
    h = A.useRef(null),
    S = A.useRef(null),
    k = A.useRef(null),
    g = A.useRef(null),
    E = A.useRef(null),
    { params: y, passedParams: C, rest: M, events: _ } = Dh(a),
    { slides: N, slots: I } = Bh(l),
    R = () => {
      x(!v);
    };
  Object.assign(y.on, {
    _containerClasses(z, j) {
      p(j);
    },
  });
  const J = () => {
    Object.assign(y.on, _), (o = !0);
    const z = { ...y };
    if (
      (delete z.wrapperClass,
      (c.current = new pr(z)),
      c.current.virtual && c.current.params.virtual.enabled)
    ) {
      c.current.virtual.slides = N;
      const j = {
        cache: !1,
        slides: N,
        renderExternal: m,
        renderExternalUpdate: !1,
      };
      yt(c.current.params.virtual, j), yt(c.current.originalParams.virtual, j);
    }
  };
  T.current || J(), c.current && c.current.on("_beforeBreakpoint", R);
  const fe = () => {
      o ||
        !_ ||
        !c.current ||
        Object.keys(_).forEach((z) => {
          c.current.on(z, _[z]);
        });
    },
    ge = () => {
      !_ ||
        !c.current ||
        Object.keys(_).forEach((z) => {
          c.current.off(z, _[z]);
        });
    };
  A.useEffect(() => () => {
    c.current && c.current.off("_beforeBreakpoint", R);
  }),
    A.useEffect(() => {
      !w.current &&
        c.current &&
        (c.current.emitSlidesClasses(), (w.current = !0));
    }),
    qn(() => {
      if ((t && (t.current = T.current), !!T.current))
        return (
          c.current.destroyed && J(),
          Ah(
            {
              el: T.current,
              nextEl: S.current,
              prevEl: k.current,
              paginationEl: g.current,
              scrollbarEl: E.current,
              swiper: c.current,
            },
            y
          ),
          s && s(c.current),
          () => {
            c.current && !c.current.destroyed && c.current.destroy(!0, !1);
          }
        );
    }, []),
    qn(() => {
      fe();
      const z = Rh(C, d.current, N, h.current, (j) => j.key);
      return (
        (d.current = C),
        (h.current = N),
        z.length &&
          c.current &&
          !c.current.destroyed &&
          Vh({
            swiper: c.current,
            slides: N,
            passedParams: C,
            changedParams: z,
            nextEl: S.current,
            prevEl: k.current,
            scrollbarEl: E.current,
            paginationEl: g.current,
          }),
        () => {
          ge();
        }
      );
    }),
    qn(() => {
      Hh(c.current);
    }, [f]);
  function L() {
    return y.virtual
      ? Fh(c.current, N, f)
      : N.map((z, j) =>
          U.cloneElement(z, { swiper: c.current, swiperSlideIndex: j })
        );
  }
  return U.createElement(
    r,
    gs({ ref: T, className: cd(`${u}${n ? ` ${n}` : ""}`) }, M),
    U.createElement(
      Uh.Provider,
      { value: c.current },
      I["container-start"],
      U.createElement(
        i,
        { className: Ih(y.wrapperClass) },
        I["wrapper-start"],
        L(),
        I["wrapper-end"]
      ),
      od(y) &&
        U.createElement(
          U.Fragment,
          null,
          U.createElement("div", { ref: k, className: "swiper-button-prev" }),
          U.createElement("div", { ref: S, className: "swiper-button-next" })
        ),
      ud(y) &&
        U.createElement("div", { ref: E, className: "swiper-scrollbar" }),
      ad(y) &&
        U.createElement("div", { ref: g, className: "swiper-pagination" }),
      I["container-end"]
    )
  );
});
Gh.displayName = "Swiper";
function ys() {
  return (
    (ys = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ys.apply(this, arguments)
  );
}
const $h = A.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: l,
    zoom: s,
    lazy: a,
    virtualIndex: o,
    swiperSlideIndex: u,
    ...p
  } = e === void 0 ? {} : e;
  const f = A.useRef(null),
    [m, v] = A.useState("swiper-slide"),
    [x, w] = A.useState(!1);
  function T(S, k, g) {
    k === f.current && v(g);
  }
  qn(() => {
    if (
      (typeof u < "u" && (f.current.swiperSlideIndex = u),
      t && (t.current = f.current),
      !(!f.current || !l))
    ) {
      if (l.destroyed) {
        m !== "swiper-slide" && v("swiper-slide");
        return;
      }
      return (
        l.on("_slideClass", T),
        () => {
          l && l.off("_slideClass", T);
        }
      );
    }
  }),
    qn(() => {
      l && f.current && !l.destroyed && v(l.getSlideClasses(f.current));
    }, [l]);
  const c = {
      isActive: m.indexOf("swiper-slide-active") >= 0,
      isVisible: m.indexOf("swiper-slide-visible") >= 0,
      isPrev: m.indexOf("swiper-slide-prev") >= 0,
      isNext: m.indexOf("swiper-slide-next") >= 0,
    },
    d = () => (typeof r == "function" ? r(c) : r),
    h = () => {
      w(!0);
    };
  return U.createElement(
    n,
    ys(
      {
        ref: f,
        className: cd(`${m}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": o,
        onLoad: h,
      },
      p
    ),
    s &&
      U.createElement(
        Ia.Provider,
        { value: c },
        U.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof s == "number" ? s : void 0,
          },
          d(),
          a &&
            !x &&
            U.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !s &&
      U.createElement(
        Ia.Provider,
        { value: c },
        d(),
        a &&
          !x &&
          U.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
$h.displayName = "SwiperSlide";
function Wh({ Card: e }) {
  const t = fm;
  return D.jsx("ul", {
    className: "card-container",
    children: t.map((n) =>
      D.jsxs("li", {
        className: "card-img",
        children: [
          D.jsx("img", { className: "img", src: n.imgSrc[0], alt: "images" }),
          D.jsxs("div", {
            className: "card-title-rating",
            children: [
              D.jsx("span", { className: "b", children: n.title }),
              D.jsxs("span", {
                className: " rating",
                children: [" ", D.jsx(pm, {}), n.rating],
              }),
            ],
          }),
          D.jsxs("div", {
            className: "price",
            children: [
              D.jsx("span", { className: "opacity-70", children: n.desc }),
              D.jsxs("span", {
                className: "b ",
                children: [
                  n.price,
                  "$ ",
                  D.jsx("small", { className: "weight", children: "Night" }),
                  " ",
                ],
              }),
            ],
          }),
        ],
      })
    ),
  });
}
function bh() {
  return D.jsx("div", {
    className: "right-filter-down media-filterbar",
    children: D.jsxs("h2", {
      className: "right-filter-content-down b",
      children: [
        D.jsx(td, {}),
        D.jsx("span", { className: "media-filtros", children: "Filtros" }),
      ],
    }),
  });
}
function Qh() {
  return D.jsxs("div", {
    className: "main-filterbar",
    children: [D.jsx(um, {}), D.jsx(bh, {})],
  });
}
function Yh() {
  return D.jsxs("div", {
    children: [D.jsx(dm, {}), D.jsx(Qh, {}), D.jsx(Wh, {})],
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
 */ function Ci() {
  return (
    (Ci = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ci.apply(this, arguments)
  );
}
var Bt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Bt || (Bt = {}));
const Da = "popstate";
function qh(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: l, search: s, hash: a } = r.location;
    return ws(
      "",
      { pathname: l, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : hd(i);
  }
  return Xh(t, n, null, e);
}
function md(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Kh() {
  return Math.random().toString(36).substr(2, 8);
}
function Aa(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ws(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ci(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? vd(t) : t,
      { state: n, key: (t && t.key) || r || Kh() }
    )
  );
}
function hd(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function vd(e) {
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
function Xh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: l = !1 } = r,
    s = i.history,
    a = Bt.Pop,
    o = null,
    u = p();
  u == null && ((u = 0), s.replaceState(Ci({}, s.state, { idx: u }), ""));
  function p() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = Bt.Pop;
    let T = p(),
      c = T == null ? null : T - u;
    (u = T), o && o({ action: a, location: w.location, delta: c });
  }
  function m(T, c) {
    a = Bt.Push;
    let d = ws(w.location, T, c);
    n && n(d, T), (u = p() + 1);
    let h = Aa(d, u),
      S = w.createHref(d);
    try {
      s.pushState(h, "", S);
    } catch {
      i.location.assign(S);
    }
    l && o && o({ action: a, location: w.location, delta: 1 });
  }
  function v(T, c) {
    a = Bt.Replace;
    let d = ws(w.location, T, c);
    n && n(d, T), (u = p());
    let h = Aa(d, u),
      S = w.createHref(d);
    s.replaceState(h, "", S),
      l && o && o({ action: a, location: w.location, delta: 0 });
  }
  function x(T) {
    let c = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof T == "string" ? T : hd(T);
    return (
      md(
        c,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, c)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(T) {
      if (o) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Da, f),
        (o = T),
        () => {
          i.removeEventListener(Da, f), (o = null);
        }
      );
    },
    createHref(T) {
      return t(i, T);
    },
    createURL: x,
    encodeLocation(T) {
      let c = x(T);
      return { pathname: c.pathname, search: c.search, hash: c.hash };
    },
    push: m,
    replace: v,
    go(T) {
      return s.go(T);
    },
  };
  return w;
}
var Ra;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ra || (Ra = {}));
function Jh(e, t) {
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
 */ function Zh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const e0 = typeof Object.is == "function" ? Object.is : Zh,
  { useState: t0, useEffect: n0, useLayoutEffect: r0, useDebugValue: i0 } = yl;
function l0(e, t, n) {
  const r = t(),
    [{ inst: i }, l] = t0({ inst: { value: r, getSnapshot: t } });
  return (
    r0(() => {
      (i.value = r), (i.getSnapshot = t), gl(i) && l({ inst: i });
    }, [e, r, t]),
    n0(
      () => (
        gl(i) && l({ inst: i }),
        e(() => {
          gl(i) && l({ inst: i });
        })
      ),
      [e]
    ),
    i0(r),
    r
  );
}
function gl(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !e0(n, r);
  } catch {
    return !0;
  }
}
function s0(e, t, n) {
  return t();
}
const o0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  a0 = !o0,
  u0 = a0 ? s0 : l0;
"useSyncExternalStore" in yl && ((e) => e.useSyncExternalStore)(yl);
const c0 = A.createContext(null),
  gd = A.createContext(null);
function d0() {
  return A.useContext(gd) != null;
}
var Ba;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(Ba || (Ba = {}));
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
function f0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Bt.Pop,
    navigator: l,
    static: s = !1,
  } = e;
  d0() && md(!1);
  let a = t.replace(/^\/*/, "/"),
    o = A.useMemo(() => ({ basename: a, navigator: l, static: s }), [a, l, s]);
  typeof r == "string" && (r = vd(r));
  let {
      pathname: u = "/",
      search: p = "",
      hash: f = "",
      state: m = null,
      key: v = "default",
    } = r,
    x = A.useMemo(() => {
      let w = Jh(u, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: p, hash: f, state: m, key: v },
            navigationType: i,
          };
    }, [a, u, p, f, m, v, i]);
  return x == null
    ? null
    : A.createElement(
        c0.Provider,
        { value: o },
        A.createElement(gd.Provider, { children: n, value: x })
      );
}
var Fa;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Fa || (Fa = {}));
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
 */ function p0(e) {
  let { basename: t, children: n, window: r } = e,
    i = A.useRef();
  i.current == null && (i.current = qh({ window: r, v5Compat: !0 }));
  let l = i.current,
    [s, a] = A.useState({ action: l.action, location: l.location });
  return (
    A.useLayoutEffect(() => l.listen(a), [l]),
    A.createElement(f0, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
    })
  );
}
var Ha;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Ha || (Ha = {}));
var Ua;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ua || (Ua = {}));
wl.createRoot(document.getElementById("root")).render(
  D.jsx(p0, { children: D.jsx(Yh, {}) })
);

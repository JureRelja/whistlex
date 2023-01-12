!(function (t, n) {
    "object" == typeof exports && "undefined" != typeof module
      ? n(require("@firebase/app"))
      : "function" == typeof define && define.amd
      ? define(["@firebase/app"], n)
      : n((t = t || self).firebase);
  })(this, function (Bl) {
    "use strict";
    try {
      (function () {
        (Bl =
          Bl && Object.prototype.hasOwnProperty.call(Bl, "default")
            ? Bl.default
            : Bl),
          function () {
            var t,
              o =
                "function" == typeof Object.defineProperties
                  ? Object.defineProperty
                  : function (t, n, e) {
                      t != Array.prototype &&
                        t != Object.prototype &&
                        (t[n] = e.value);
                    };
            var a = (function (t) {
              t = [
                "object" == typeof window && window,
                "object" == typeof self && self,
                "object" == typeof global && global,
                t,
              ];
              for (var n = 0; n < t.length; ++n) {
                var e = t[n];
                if (e && e.Math == Math) return e;
              }
              return globalThis;
            })(this);
            function c(t) {
              var n =
                "undefined" != typeof Symbol &&
                Symbol.iterator &&
                t[Symbol.iterator];
              return n
                ? n.call(t)
                : {
                    next: (function (t) {
                      var n = 0;
                      return function () {
                        return n < t.length
                          ? { done: !1, value: t[n++] }
                          : { done: !0 };
                      };
                    })(t),
                  };
            }
            !(function (t, n) {
              if (n) {
                var e = a;
                t = t.split(".");
                for (var i = 0; i < t.length - 1; i++) {
                  var r = t[i];
                  r in e || (e[r] = {}), (e = e[r]);
                }
                (n = n((i = e[(t = t[t.length - 1])]))) != i &&
                  null != n &&
                  o(e, t, { configurable: !0, writable: !0, value: n });
              }
            })("Promise", function (t) {
              function s(t) {
                (this.b = 0), (this.c = void 0), (this.a = []);
                var n = this.f();
                try {
                  t(n.resolve, n.reject);
                } catch (t) {
                  n.reject(t);
                }
              }
              function n() {
                this.a = null;
              }
              function u(n) {
                return n instanceof s
                  ? n
                  : new s(function (t) {
                      t(n);
                    });
              }
              if (t) return t;
              n.prototype.b = function (t) {
                if (null == this.a) {
                  this.a = [];
                  var n = this;
                  this.c(function () {
                    n.g();
                  });
                }
                this.a.push(t);
              };
              var e = a.setTimeout;
              (n.prototype.c = function (t) {
                e(t, 0);
              }),
                (n.prototype.g = function () {
                  for (; this.a && this.a.length; ) {
                    var t = this.a;
                    this.a = [];
                    for (var n = 0; n < t.length; ++n) {
                      var e = t[n];
                      t[n] = null;
                      try {
                        e();
                      } catch (t) {
                        this.f(t);
                      }
                    }
                  }
                  this.a = null;
                }),
                (n.prototype.f = function (t) {
                  this.c(function () {
                    throw t;
                  });
                }),
                (s.prototype.f = function () {
                  function t(n) {
                    return function (t) {
                      i || ((i = !0), n.call(e, t));
                    };
                  }
                  var e = this,
                    i = !1;
                  return { resolve: t(this.m), reject: t(this.g) };
                }),
                (s.prototype.m = function (t) {
                  if (t === this)
                    this.g(new TypeError("A Promise cannot resolve to itself"));
                  else if (t instanceof s) this.s(t);
                  else {
                    t: switch (typeof t) {
                      case "object":
                        var n = null != t;
                        break t;
                      case "function":
                        n = !0;
                        break t;
                      default:
                        n = !1;
                    }
                    n ? this.u(t) : this.h(t);
                  }
                }),
                (s.prototype.u = function (t) {
                  var n = void 0;
                  try {
                    n = t.then;
                  } catch (t) {
                    return void this.g(t);
                  }
                  "function" == typeof n ? this.w(n, t) : this.h(t);
                }),
                (s.prototype.g = function (t) {
                  this.i(2, t);
                }),
                (s.prototype.h = function (t) {
                  this.i(1, t);
                }),
                (s.prototype.i = function (t, n) {
                  if (0 != this.b)
                    throw Error(
                      "Cannot settle(" +
                        t +
                        ", " +
                        n +
                        "): Promise already settled in state" +
                        this.b
                    );
                  (this.b = t), (this.c = n), this.l();
                }),
                (s.prototype.l = function () {
                  if (null != this.a) {
                    for (var t = 0; t < this.a.length; ++t) r.b(this.a[t]);
                    this.a = null;
                  }
                });
              var r = new n();
              return (
                (s.prototype.s = function (t) {
                  var n = this.f();
                  t.Oa(n.resolve, n.reject);
                }),
                (s.prototype.w = function (t, n) {
                  var e = this.f();
                  try {
                    t.call(n, e.resolve, e.reject);
                  } catch (t) {
                    e.reject(t);
                  }
                }),
                (s.prototype.then = function (t, n) {
                  function e(n, t) {
                    return "function" == typeof n
                      ? function (t) {
                          try {
                            i(n(t));
                          } catch (t) {
                            r(t);
                          }
                        }
                      : t;
                  }
                  var i,
                    r,
                    o = new s(function (t, n) {
                      (i = t), (r = n);
                    });
                  return this.Oa(e(t, i), e(n, r)), o;
                }),
                (s.prototype.catch = function (t) {
                  return this.then(void 0, t);
                }),
                (s.prototype.Oa = function (t, n) {
                  function e() {
                    switch (i.b) {
                      case 1:
                        t(i.c);
                        break;
                      case 2:
                        n(i.c);
                        break;
                      default:
                        throw Error("Unexpected state: " + i.b);
                    }
                  }
                  var i = this;
                  null == this.a ? r.b(e) : this.a.push(e);
                }),
                (s.resolve = u),
                (s.reject = function (e) {
                  return new s(function (t, n) {
                    n(e);
                  });
                }),
                (s.race = function (r) {
                  return new s(function (t, n) {
                    for (var e = c(r), i = e.next(); !i.done; i = e.next())
                      u(i.value).Oa(t, n);
                  });
                }),
                (s.all = function (t) {
                  var o = c(t),
                    a = o.next();
                  return a.done
                    ? u([])
                    : new s(function (e, t) {
                        function n(n) {
                          return function (t) {
                            (i[n] = t), 0 == --r && e(i);
                          };
                        }
                        for (
                          var i = [], r = 0;
                          i.push(void 0),
                            r++,
                            u(a.value).Oa(n(i.length - 1), t),
                            !(a = o.next()).done;
  
                        );
                      });
                }),
                s
              );
            });
            var u = u || {},
              l = this || self,
              s = /^[\w+/_-]+[=]{0,2}$/,
              h = null;
            function f() {}
            function e(t) {
              var n = typeof t;
              if ("object" == n) {
                if (!t) return "null";
                if (t instanceof Array) return "array";
                if (t instanceof Object) return n;
                var e = Object.prototype.toString.call(t);
                if ("[object Window]" == e) return "object";
                if (
                  "[object Array]" == e ||
                  ("number" == typeof t.length &&
                    void 0 !== t.splice &&
                    void 0 !== t.propertyIsEnumerable &&
                    !t.propertyIsEnumerable("splice"))
                )
                  return "array";
                if (
                  "[object Function]" == e ||
                  (void 0 !== t.call &&
                    void 0 !== t.propertyIsEnumerable &&
                    !t.propertyIsEnumerable("call"))
                )
                  return "function";
              } else if ("function" == n && void 0 === t.call) return "object";
              return n;
            }
            function d(t) {
              var n = e(t);
              return (
                "array" == n || ("object" == n && "number" == typeof t.length)
              );
            }
            function p(t) {
              return "function" == e(t);
            }
            function v(t) {
              var n = typeof t;
              return ("object" == n && null != t) || "function" == n;
            }
            var n = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
              i = 0;
            function r(t, n, e) {
              return t.call.apply(t.bind, arguments);
            }
            function m(n, e, t) {
              if (!n) throw Error();
              if (2 < arguments.length) {
                var i = Array.prototype.slice.call(arguments, 2);
                return function () {
                  var t = Array.prototype.slice.call(arguments);
                  return Array.prototype.unshift.apply(t, i), n.apply(e, t);
                };
              }
              return function () {
                return n.apply(e, arguments);
              };
            }
            function g(t, n, e) {
              return (g =
                Function.prototype.bind &&
                -1 != Function.prototype.bind.toString().indexOf("native code")
                  ? r
                  : m).apply(null, arguments);
            }
            function b(n, t) {
              var e = Array.prototype.slice.call(arguments, 1);
              return function () {
                var t = e.slice();
                return t.push.apply(t, arguments), n.apply(this, t);
              };
            }
            var y =
              Date.now ||
              function () {
                return +new Date();
              };
            function w(t, n) {
              function e() {}
              (e.prototype = n.prototype),
                (t.Za = n.prototype),
                (t.prototype = new e()),
                (t.prototype.constructor = t);
            }
            function I(t, n, e) {
              (this.code = A + t),
                (this.message = n || k[t] || ""),
                (this.a = e || null);
            }
            function T(t) {
              var n = t && t.code;
              return n
                ? new I(n.substring(A.length), t.message, t.serverResponse)
                : null;
            }
            w(I, Error),
              (I.prototype.v = function () {
                var t = { code: this.code, message: this.message };
                return this.a && (t.serverResponse = this.a), t;
              }),
              (I.prototype.toJSON = function () {
                return this.v();
              });
            var E,
              A = "auth/",
              k = {
                "admin-restricted-operation":
                  "This operation is restricted to administrators only.",
                "argument-error": "",
                "app-not-authorized":
                  "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                "app-not-installed":
                  "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                "captcha-check-failed":
                  "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                "code-expired":
                  "The SMS code has expired. Please re-send the verification code to try again.",
                "cordova-not-ready": "Cordova framework is not ready.",
                "cors-unsupported": "This browser is not supported.",
                "credential-already-in-use":
                  "This credential is already associated with a different user account.",
                "custom-token-mismatch":
                  "The custom token corresponds to a different audience.",
                "requires-recent-login":
                  "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                "dynamic-link-not-activated":
                  "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                "email-change-needs-verification":
                  "Multi-factor users must always have a verified email.",
                "email-already-in-use":
                  "The email address is already in use by another account.",
                "expired-action-code": "The action code has expired. ",
                "cancelled-popup-request":
                  "This operation has been cancelled due to another conflicting popup being opened.",
                "internal-error": "An internal error has occurred.",
                "invalid-app-credential":
                  "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                "invalid-app-id":
                  "The mobile app identifier is not registed for the current project.",
                "invalid-user-token":
                  "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                "invalid-auth-event": "An internal error has occurred.",
                "invalid-verification-code":
                  "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
                "invalid-continue-uri":
                  "The continue URL provided in the request is invalid.",
                "invalid-cordova-configuration":
                  "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                "invalid-custom-token":
                  "The custom token format is incorrect. Please check the documentation.",
                "invalid-dynamic-link-domain":
                  "The provided dynamic link domain is not configured or authorized for the current project.",
                "invalid-email": "The email address is badly formatted.",
                "invalid-api-key":
                  "Your API key is invalid, please check you have copied it correctly.",
                "invalid-cert-hash":
                  "The SHA-1 certificate hash provided is invalid.",
                "invalid-credential":
                  "The supplied auth credential is malformed or has expired.",
                "invalid-message-payload":
                  "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                "invalid-multi-factor-session":
                  "The request does not contain a valid proof of first factor successful sign-in.",
                "invalid-oauth-provider":
                  "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                "invalid-oauth-client-id":
                  "The OAuth client ID provided is either invalid or does not match the specified API key.",
                "unauthorized-domain":
                  "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                "invalid-action-code":
                  "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                "wrong-password":
                  "The password is invalid or the user does not have a password.",
                "invalid-persistence-type":
                  "The specified persistence type is invalid. It can only be local, session or none.",
                "invalid-phone-number":
                  "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                "invalid-provider-id": "The specified provider ID is invalid.",
                "invalid-recipient-email":
                  "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                "invalid-sender":
                  "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                "invalid-verification-id":
                  "The verification ID used to create the phone auth credential is invalid.",
                "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                "multi-factor-info-not-found":
                  "The user does not have a second factor matching the identifier provided.",
                "multi-factor-auth-required":
                  "Proof of ownership of a second factor is required to complete sign-in.",
                "missing-android-pkg-name":
                  "An Android Package Name must be provided if the Android App is required to be installed.",
                "auth-domain-config-required":
                  "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                "missing-app-credential":
                  "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                "missing-verification-code":
                  "The phone auth credential was created with an empty SMS verification code.",
                "missing-continue-uri":
                  "A continue URL must be provided in the request.",
                "missing-iframe-start": "An internal error has occurred.",
                "missing-ios-bundle-id":
                  "An iOS Bundle ID must be provided if an App Store ID is provided.",
                "missing-multi-factor-info":
                  "No second factor identifier is provided.",
                "missing-multi-factor-session":
                  "The request is missing proof of first factor successful sign-in.",
                "missing-or-invalid-nonce":
                  "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
                "missing-phone-number":
                  "To send verification codes, provide a phone number for the recipient.",
                "missing-verification-id":
                  "The phone auth credential was created with an empty verification ID.",
                "app-deleted": "This instance of FirebaseApp has been deleted.",
                "account-exists-with-different-credential":
                  "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                "network-request-failed":
                  "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
                "no-auth-event": "An internal error has occurred.",
                "no-such-provider":
                  "User was not linked to an account with the given provider.",
                "null-user":
                  "A null user object was provided as the argument for an operation which requires a non-null user object.",
                "operation-not-allowed":
                  "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                "operation-not-supported-in-this-environment":
                  'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                "popup-blocked":
                  "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                "popup-closed-by-user":
                  "The popup has been closed by the user before finalizing the operation.",
                "provider-already-linked":
                  "User can only be linked to one identity for the given provider.",
                "quota-exceeded":
                  "The project's quota for this operation has been exceeded.",
                "redirect-cancelled-by-user":
                  "The redirect operation has been cancelled by the user before finalizing.",
                "redirect-operation-pending":
                  "A redirect sign-in operation is already pending.",
                "rejected-credential":
                  "The request contains malformed or mismatching credentials.",
                "second-factor-already-in-use":
                  "The second factor is already enrolled on this account.",
                "maximum-second-factor-count-exceeded":
                  "The maximum allowed number of second factors on a user has been exceeded.",
                "tenant-id-mismatch":
                  "The provided tenant ID does not match the Auth instance's tenant ID",
                timeout: "The operation has timed out.",
                "user-token-expired":
                  "The user's credential is no longer valid. The user must sign in again.",
                "too-many-requests":
                  "We have blocked all requests from this device due to unusual activity. Try again later.",
                "unauthorized-continue-uri":
                  "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                "unsupported-first-factor":
                  "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
                "unsupported-persistence-type":
                  "The current environment does not support the specified persistence type.",
                "unsupported-tenant-operation":
                  "This operation is not supported in a multi-tenant context.",
                "unverified-email": "The operation requires a verified email.",
                "user-cancelled":
                  "The user did not grant your application the permissions it requested.",
                "user-not-found":
                  "There is no user record corresponding to this identifier. The user may have been deleted.",
                "user-disabled":
                  "The user account has been disabled by an administrator.",
                "user-mismatch":
                  "The supplied credentials do not correspond to the previously signed in user.",
                "user-signed-out": "",
                "weak-password":
                  "The password must be 6 characters long or more.",
                "web-storage-unsupported":
                  "This browser is not supported or 3rd party cookies and data may be disabled.",
              },
              S = {
                hd: {
                  Ra:
                    "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                  Xa:
                    "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                  Ua:
                    "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                  id: "b",
                },
                pd: {
                  Ra:
                    "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                  Xa: "https://securetoken.googleapis.com/v1/token",
                  Ua: "https://identitytoolkit.googleapis.com/v2/",
                  id: "p",
                },
                rd: {
                  Ra:
                    "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                  Xa:
                    "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                  Ua:
                    "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                  id: "s",
                },
                sd: {
                  Ra:
                    "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                  Xa: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                  Ua: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
                  id: "t",
                },
              };
            function N(t) {
              for (var n in S)
                if (S[n].id === t)
                  return {
                    firebaseEndpoint: (t = S[n]).Ra,
                    secureTokenEndpoint: t.Xa,
                    identityPlatformEndpoint: t.Ua,
                  };
              return null;
            }
            function _(t) {
              if (!t) return !1;
              try {
                return !!t.$goog_Thenable;
              } catch (t) {
                return !1;
              }
            }
            function O(t) {
              if (Error.captureStackTrace) Error.captureStackTrace(this, O);
              else {
                var n = Error().stack;
                n && (this.stack = n);
              }
              t && (this.message = String(t));
            }
            function R(t, n) {
              for (
                var e = "", i = (t = t.split("%s")).length - 1, r = 0;
                r < i;
                r++
              )
                e += t[r] + (r < n.length ? n[r] : "%s");
              O.call(this, e + t[i]);
            }
            function P(t, n) {
              throw new R(
                "Failure" + (t ? ": " + t : ""),
                Array.prototype.slice.call(arguments, 1)
              );
            }
            function C(t, n) {
              (this.c = t), (this.f = n), (this.b = 0), (this.a = null);
            }
            function D(t, n) {
              t.f(n), t.b < 100 && (t.b++, (n.next = t.a), (t.a = n));
            }
            function L() {
              this.b = this.a = null;
            }
            (E = N("__EID__") ? "__EID__" : void 0),
              w(O, Error),
              (O.prototype.name = "CustomError"),
              w(R, O),
              (R.prototype.name = "AssertionError"),
              (C.prototype.get = function () {
                if (0 < this.b) {
                  this.b--;
                  var t = this.a;
                  (this.a = t.next), (t.next = null);
                } else t = this.c();
                return t;
              });
            var M = new C(
              function () {
                return new x();
              },
              function (t) {
                t.reset();
              }
            );
            function x() {
              this.next = this.b = this.a = null;
            }
            (L.prototype.add = function (t, n) {
              var e = M.get();
              e.set(t, n),
                this.b ? (this.b.next = e) : (this.a = e),
                (this.b = e);
            }),
              (x.prototype.set = function (t, n) {
                (this.a = t), (this.b = n), (this.next = null);
              }),
              (x.prototype.reset = function () {
                this.next = this.b = this.a = null;
              });
            var j = Array.prototype.indexOf
                ? function (t, n) {
                    return Array.prototype.indexOf.call(t, n, void 0);
                  }
                : function (t, n) {
                    if ("string" == typeof t)
                      return "string" != typeof n || 1 != n.length
                        ? -1
                        : t.indexOf(n, 0);
                    for (var e = 0; e < t.length; e++)
                      if (e in t && t[e] === n) return e;
                    return -1;
                  },
              U = Array.prototype.forEach
                ? function (t, n, e) {
                    Array.prototype.forEach.call(t, n, e);
                  }
                : function (t, n, e) {
                    for (
                      var i = t.length,
                        r = "string" == typeof t ? t.split("") : t,
                        o = 0;
                      o < i;
                      o++
                    )
                      o in r && n.call(e, r[o], o, t);
                  };
            var V = Array.prototype.filter
                ? function (t, n) {
                    return Array.prototype.filter.call(t, n, void 0);
                  }
                : function (t, n) {
                    for (
                      var e = t.length,
                        i = [],
                        r = 0,
                        o = "string" == typeof t ? t.split("") : t,
                        a = 0;
                      a < e;
                      a++
                    )
                      if (a in o) {
                        var s = o[a];
                        n.call(void 0, s, a, t) && (i[r++] = s);
                      }
                    return i;
                  },
              F = Array.prototype.map
                ? function (t, n) {
                    return Array.prototype.map.call(t, n, void 0);
                  }
                : function (t, n) {
                    for (
                      var e = t.length,
                        i = Array(e),
                        r = "string" == typeof t ? t.split("") : t,
                        o = 0;
                      o < e;
                      o++
                    )
                      o in r && (i[o] = n.call(void 0, r[o], o, t));
                    return i;
                  },
              q = Array.prototype.some
                ? function (t, n) {
                    return Array.prototype.some.call(t, n, void 0);
                  }
                : function (t, n) {
                    for (
                      var e = t.length,
                        i = "string" == typeof t ? t.split("") : t,
                        r = 0;
                      r < e;
                      r++
                    )
                      if (r in i && n.call(void 0, i[r], r, t)) return !0;
                    return !1;
                  };
            function K(t, n) {
              return 0 <= j(t, n);
            }
            function H(t, n) {
              var e;
              return (
                (e = 0 <= (n = j(t, n))) && Array.prototype.splice.call(t, n, 1),
                e
              );
            }
            function G(e, i) {
              !(function (t, n) {
                for (
                  var e = "string" == typeof t ? t.split("") : t,
                    i = t.length - 1;
                  0 <= i;
                  --i
                )
                  i in e && n.call(void 0, e[i], i, t);
              })(e, function (t, n) {
                i.call(void 0, t, n, e) &&
                  1 == Array.prototype.splice.call(e, n, 1).length &&
                  0;
              });
            }
            function B(t) {
              return Array.prototype.concat.apply([], arguments);
            }
            function W(t) {
              var n = t.length;
              if (0 < n) {
                for (var e = Array(n), i = 0; i < n; i++) e[i] = t[i];
                return e;
              }
              return [];
            }
            var X,
              J = String.prototype.trim
                ? function (t) {
                    return t.trim();
                  }
                : function (t) {
                    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
                  },
              Y = /&/g,
              z = /</g,
              $ = />/g,
              Z = /"/g,
              Q = /'/g,
              tt = /\x00/g,
              nt = /[\x00&<>"']/;
            function et(t, n) {
              return -1 != t.indexOf(n);
            }
            function it(t, n) {
              return t < n ? -1 : n < t ? 1 : 0;
            }
            t: {
              var rt = l.navigator;
              if (rt) {
                var ot = rt.userAgent;
                if (ot) {
                  X = ot;
                  break t;
                }
              }
              X = "";
            }
            function at(t) {
              return et(X, t);
            }
            function st(t, n) {
              for (var e in t) n.call(void 0, t[e], e, t);
            }
            function ut(t) {
              for (var n in t) return !1;
              return !0;
            }
            function ct(t) {
              var n,
                e = {};
              for (n in t) e[n] = t[n];
              return e;
            }
            var ht = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
              " "
            );
            function lt(t, n) {
              for (var e, i, r = 1; r < arguments.length; r++) {
                for (e in (i = arguments[r])) t[e] = i[e];
                for (var o = 0; o < ht.length; o++)
                  (e = ht[o]),
                    Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
              }
            }
            function ft(t, n) {
              t: {
                try {
                  var e = t && t.ownerDocument,
                    i = e && (e.defaultView || e.parentWindow);
                  if ((i = i || l).Element && i.Location) {
                    var r = i;
                    break t;
                  }
                } catch (t) {}
                r = null;
              }
              if (
                r &&
                void 0 !== r[n] &&
                (!t ||
                  (!(t instanceof r[n]) &&
                    (t instanceof r.Location || t instanceof r.Element)))
              ) {
                if (v(t))
                  try {
                    var o =
                      t.constructor.displayName ||
                      t.constructor.name ||
                      Object.prototype.toString.call(t);
                  } catch (t) {
                    o = "<object could not be stringified>";
                  }
                else
                  o = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
                P(
                  "Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                  n,
                  o
                );
              }
            }
            function dt(t, n) {
              (this.a = (t === mt && n) || ""), (this.b = vt);
            }
            function pt(t) {
              return t instanceof dt && t.constructor === dt && t.b === vt
                ? t.a
                : (P("expected object of type Const, got '" + t + "'"),
                  "type_error:Const");
            }
            (dt.prototype.ra = !0),
              (dt.prototype.qa = function () {
                return this.a;
              }),
              (dt.prototype.toString = function () {
                return "Const{" + this.a + "}";
              });
            var vt = {},
              mt = {},
              gt = new dt(mt, "");
            function bt(t, n) {
              (this.a = (t === At && n) || ""), (this.b = Et);
            }
            function yt(t) {
              return t instanceof bt && t.constructor === bt && t.b === Et
                ? t.a
                : (P(
                    "expected object of type TrustedResourceUrl, got '" +
                      t +
                      "' of type " +
                      e(t)
                  ),
                  "type_error:TrustedResourceUrl");
            }
            function wt(t, e) {
              var i = pt(t);
              if (!Tt.test(i))
                throw Error("Invalid TrustedResourceUrl format: " + i);
              return (
                (t = i.replace(It, function (t, n) {
                  if (!Object.prototype.hasOwnProperty.call(e, n))
                    throw Error(
                      'Found marker, "' +
                        n +
                        '", in format string, "' +
                        i +
                        '", but no valid label mapping found in args: ' +
                        JSON.stringify(e)
                    );
                  return (t = e[n]) instanceof dt
                    ? pt(t)
                    : encodeURIComponent(String(t));
                })),
                new bt(At, t)
              );
            }
            (bt.prototype.ra = !0),
              (bt.prototype.qa = function () {
                return this.a.toString();
              }),
              (bt.prototype.toString = function () {
                return "TrustedResourceUrl{" + this.a + "}";
              });
            var It = /%{(\w+)}/g,
              Tt = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
              Et = {},
              At = {};
            function kt(t, n) {
              (this.a = (t === Rt && n) || ""), (this.b = Ot);
            }
            function St(t) {
              return t instanceof kt && t.constructor === kt && t.b === Ot
                ? t.a
                : (P(
                    "expected object of type SafeUrl, got '" +
                      t +
                      "' of type " +
                      e(t)
                  ),
                  "type_error:SafeUrl");
            }
            (kt.prototype.ra = !0),
              (kt.prototype.qa = function () {
                return this.a.toString();
              }),
              (kt.prototype.toString = function () {
                return "SafeUrl{" + this.a + "}";
              });
            var Nt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
            function _t(t) {
              return t instanceof kt
                ? t
                : ((t = "object" == typeof t && t.ra ? t.qa() : String(t)),
                  Nt.test(t) || (t = "about:invalid#zClosurez"),
                  new kt(Rt, t));
            }
            var Ot = {},
              Rt = {};
            function Pt() {
              (this.a = ""), (this.b = Dt);
            }
            function Ct(t) {
              return t instanceof Pt && t.constructor === Pt && t.b === Dt
                ? t.a
                : (P(
                    "expected object of type SafeHtml, got '" +
                      t +
                      "' of type " +
                      e(t)
                  ),
                  "type_error:SafeHtml");
            }
            (Pt.prototype.ra = !0),
              (Pt.prototype.qa = function () {
                return this.a.toString();
              }),
              (Pt.prototype.toString = function () {
                return "SafeHtml{" + this.a + "}";
              });
            var Dt = {};
            function Lt(t) {
              var n = new Pt();
              return (n.a = t), n;
            }
            Lt("<!DOCTYPE html>");
            var Mt = Lt("");
            function xt(t, n) {
              for (
                var e = t.split("%s"),
                  i = "",
                  r = Array.prototype.slice.call(arguments, 1);
                r.length && 1 < e.length;
  
              )
                i += e.shift() + r.shift();
              return i + e.join("%s");
            }
            function jt(t) {
              return (
                nt.test(t) &&
                  (-1 != t.indexOf("&") && (t = t.replace(Y, "&amp;")),
                  -1 != t.indexOf("<") && (t = t.replace(z, "&lt;")),
                  -1 != t.indexOf(">") && (t = t.replace($, "&gt;")),
                  -1 != t.indexOf('"') && (t = t.replace(Z, "&quot;")),
                  -1 != t.indexOf("'") && (t = t.replace(Q, "&#39;")),
                  -1 != t.indexOf("\0") && (t = t.replace(tt, "&#0;"))),
                t
              );
            }
            function Ut(t) {
              return Ut[" "](t), t;
            }
            Lt("<br>"), (Ut[" "] = f);
            var Vt,
              Ft,
              qt = at("Opera"),
              Kt = at("Trident") || at("MSIE"),
              Ht = at("Edge"),
              Gt = Ht || Kt,
              Bt =
                at("Gecko") &&
                !(et(X.toLowerCase(), "webkit") && !at("Edge")) &&
                !(at("Trident") || at("MSIE")) &&
                !at("Edge"),
              Wt = et(X.toLowerCase(), "webkit") && !at("Edge");
            function Xt() {
              var t = l.document;
              return t ? t.documentMode : void 0;
            }
            t: {
              var Jt = "",
                Yt =
                  ((Ft = X),
                  Bt
                    ? /rv:([^\);]+)(\)|;)/.exec(Ft)
                    : Ht
                    ? /Edge\/([\d\.]+)/.exec(Ft)
                    : Kt
                    ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ft)
                    : Wt
                    ? /WebKit\/(\S+)/.exec(Ft)
                    : qt
                    ? /(?:Version)[ \/]?(\S+)/.exec(Ft)
                    : void 0);
              if ((Yt && (Jt = Yt ? Yt[1] : ""), Kt)) {
                var zt = Xt();
                if (null != zt && zt > parseFloat(Jt)) {
                  Vt = String(zt);
                  break t;
                }
              }
              Vt = Jt;
            }
            var $t,
              Zt = {};
            function Qt(s) {
              return (function (t, n) {
                var e = Zt;
                return Object.prototype.hasOwnProperty.call(e, t)
                  ? e[t]
                  : (e[t] = n(t));
              })(s, function () {
                for (
                  var t = 0,
                    n = J(String(Vt)).split("."),
                    e = J(String(s)).split("."),
                    i = Math.max(n.length, e.length),
                    r = 0;
                  0 == t && r < i;
                  r++
                ) {
                  var o = n[r] || "",
                    a = e[r] || "";
                  do {
                    if (
                      ((o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""]),
                      (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""]),
                      0 == o[0].length && 0 == a[0].length)
                    )
                      break;
                    (t =
                      it(
                        0 == o[1].length ? 0 : parseInt(o[1], 10),
                        0 == a[1].length ? 0 : parseInt(a[1], 10)
                      ) ||
                      it(0 == o[2].length, 0 == a[2].length) ||
                      it(o[2], a[2])),
                      (o = o[3]),
                      (a = a[3]);
                  } while (0 == t);
                }
                return 0 <= t;
              });
            }
            $t = l.document && Kt ? Xt() : void 0;
            try {
              new self.OffscreenCanvas(0, 0).getContext("2d");
            } catch (t) {}
            var tn = !Kt || 9 <= Number($t);
            function nn(t) {
              var n = document;
              return "string" == typeof t ? n.getElementById(t) : t;
            }
            function en(e, t) {
              st(t, function (t, n) {
                t && "object" == typeof t && t.ra && (t = t.qa()),
                  "style" == n
                    ? (e.style.cssText = t)
                    : "class" == n
                    ? (e.className = t)
                    : "for" == n
                    ? (e.htmlFor = t)
                    : an.hasOwnProperty(n)
                    ? e.setAttribute(an[n], t)
                    : 0 == n.lastIndexOf("aria-", 0) ||
                      0 == n.lastIndexOf("data-", 0)
                    ? e.setAttribute(n, t)
                    : (e[n] = t);
              });
            }
            var rn,
              on,
              an = {
                cellpadding: "cellPadding",
                cellspacing: "cellSpacing",
                colspan: "colSpan",
                frameborder: "frameBorder",
                height: "height",
                maxlength: "maxLength",
                nonce: "nonce",
                role: "role",
                rowspan: "rowSpan",
                type: "type",
                usemap: "useMap",
                valign: "vAlign",
                width: "width",
              };
            function sn(t, n, e) {
              var i = arguments,
                r = document,
                o = String(i[0]),
                a = i[1];
              if (!tn && a && (a.name || a.type)) {
                if (
                  ((o = ["<", o]),
                  a.name && o.push(' name="', jt(a.name), '"'),
                  a.type)
                ) {
                  o.push(' type="', jt(a.type), '"');
                  var s = {};
                  lt(s, a), delete s.type, (a = s);
                }
                o.push(">"), (o = o.join(""));
              }
              return (
                (o = un(r, o)),
                a &&
                  ("string" == typeof a
                    ? (o.className = a)
                    : Array.isArray(a)
                    ? (o.className = a.join(" "))
                    : en(o, a)),
                2 < i.length &&
                  (function (n, e, t) {
                    function i(t) {
                      t &&
                        e.appendChild(
                          "string" == typeof t ? n.createTextNode(t) : t
                        );
                    }
                    for (var r = 2; r < t.length; r++) {
                      var o = t[r];
                      !d(o) || (v(o) && 0 < o.nodeType)
                        ? i(o)
                        : U(cn(o) ? W(o) : o, i);
                    }
                  })(r, o, i),
                o
              );
            }
            function un(t, n) {
              return (
                (n = String(n)),
                "application/xhtml+xml" === t.contentType &&
                  (n = n.toLowerCase()),
                t.createElement(n)
              );
            }
            function cn(t) {
              if (t && "number" == typeof t.length) {
                if (v(t))
                  return "function" == typeof t.item || "string" == typeof t.item;
                if (p(t)) return "function" == typeof t.item;
              }
              return !1;
            }
            function hn(t) {
              l.setTimeout(function () {
                throw t;
              }, 0);
            }
            function ln() {
              var t = l.MessageChannel;
              if (
                (void 0 === t &&
                  "undefined" != typeof window &&
                  window.postMessage &&
                  window.addEventListener &&
                  !at("Presto") &&
                  (t = function () {
                    var t = un(document, "IFRAME");
                    (t.style.display = "none"),
                      (function (t) {
                        var n = new bt(At, pt(gt));
                        ft(t, "HTMLIFrameElement"), (t.src = yt(n).toString());
                      })(t),
                      document.documentElement.appendChild(t);
                    var n = t.contentWindow;
                    (t = n.document).open(), t.write(Ct(Mt)), t.close();
                    var e = "callImmediate" + Math.random(),
                      i =
                        "file:" == n.location.protocol
                          ? "*"
                          : n.location.protocol + "//" + n.location.host;
                    (t = g(function (t) {
                      ("*" != i && t.origin != i) ||
                        t.data != e ||
                        this.port1.onmessage();
                    }, this)),
                      n.addEventListener("message", t, !1),
                      (this.port1 = {}),
                      (this.port2 = {
                        postMessage: function () {
                          n.postMessage(e, i);
                        },
                      });
                  }),
                void 0 === t || at("Trident") || at("MSIE"))
              )
                return function (t) {
                  l.setTimeout(t, 0);
                };
              var n = new t(),
                e = {},
                i = e;
              return (
                (n.port1.onmessage = function () {
                  if (void 0 !== e.next) {
                    var t = (e = e.next).Db;
                    (e.Db = null), t();
                  }
                }),
                function (t) {
                  (i.next = { Db: t }), (i = i.next), n.port2.postMessage(0);
                }
              );
            }
            function fn(t, n) {
              on ||
                (function () {
                  if (l.Promise && l.Promise.resolve) {
                    var t = l.Promise.resolve(void 0);
                    on = function () {
                      t.then(vn);
                    };
                  } else
                    on = function () {
                      var t = vn;
                      !p(l.setImmediate) ||
                      (l.Window &&
                        l.Window.prototype &&
                        !at("Edge") &&
                        l.Window.prototype.setImmediate == l.setImmediate)
                        ? (rn = rn || ln())(t)
                        : l.setImmediate(t);
                    };
                })(),
                dn || (on(), (dn = !0)),
                pn.add(t, n);
            }
            var dn = !1,
              pn = new L();
            function vn() {
              for (
                var t;
                (e = n = void 0),
                  (e = null),
                  (n = pn).a &&
                    ((e = n.a),
                    (n.a = n.a.next),
                    n.a || (n.b = null),
                    (e.next = null)),
                  (t = e);
  
              ) {
                try {
                  t.a.call(t.b);
                } catch (t) {
                  hn(t);
                }
                D(M, t);
              }
              var n, e;
              dn = !1;
            }
            function mn(t, n) {
              if (
                ((this.a = gn),
                (this.i = void 0),
                (this.f = this.b = this.c = null),
                (this.g = this.h = !1),
                t != f)
              )
                try {
                  var e = this;
                  t.call(
                    n,
                    function (t) {
                      On(e, bn, t);
                    },
                    function (t) {
                      if (!(t instanceof xn))
                        try {
                          if (t instanceof Error) throw t;
                          throw Error("Promise rejected.");
                        } catch (t) {}
                      On(e, yn, t);
                    }
                  );
                } catch (t) {
                  On(this, yn, t);
                }
            }
            var gn = 0,
              bn = 2,
              yn = 3;
            function wn() {
              (this.next = this.f = this.b = this.g = this.a = null),
                (this.c = !1);
            }
            wn.prototype.reset = function () {
              (this.f = this.b = this.g = this.a = null), (this.c = !1);
            };
            var In = new C(
              function () {
                return new wn();
              },
              function (t) {
                t.reset();
              }
            );
            function Tn(t, n, e) {
              var i = In.get();
              return (i.g = t), (i.b = n), (i.f = e), i;
            }
            function En(t) {
              if (t instanceof mn) return t;
              var n = new mn(f);
              return On(n, bn, t), n;
            }
            function An(e) {
              return new mn(function (t, n) {
                n(e);
              });
            }
            function kn(t, n, e) {
              Rn(t, n, e, null) || fn(b(n, t));
            }
            function Sn(e) {
              return new mn(function (i) {
                var r = e.length,
                  o = [];
                if (r)
                  for (
                    var t = function (t, n, e) {
                        r--,
                          (o[t] = n
                            ? { Mb: !0, value: e }
                            : { Mb: !1, reason: e }),
                          0 == r && i(o);
                      },
                      n = 0;
                    n < e.length;
                    n++
                  )
                    kn(e[n], b(t, n, !0), b(t, n, !1));
                else i(o);
              });
            }
            function Nn(t, n) {
              t.b || (t.a != bn && t.a != yn) || Pn(t),
                t.f ? (t.f.next = n) : (t.b = n),
                (t.f = n);
            }
            function _n(t, r, o, a) {
              var n = Tn(null, null, null);
              return (
                (n.a = new mn(function (e, i) {
                  (n.g = r
                    ? function (t) {
                        try {
                          var n = r.call(a, t);
                          e(n);
                        } catch (t) {
                          i(t);
                        }
                      }
                    : e),
                    (n.b = o
                      ? function (t) {
                          try {
                            var n = o.call(a, t);
                            void 0 === n && t instanceof xn ? i(t) : e(n);
                          } catch (t) {
                            i(t);
                          }
                        }
                      : i);
                })),
                Nn((n.a.c = t), n),
                n.a
              );
            }
            function On(t, n, e) {
              t.a == gn &&
                (t === e &&
                  ((n = yn),
                  (e = new TypeError("Promise cannot resolve to itself"))),
                (t.a = 1),
                Rn(e, t.Yc, t.Zc, t) ||
                  ((t.i = e),
                  (t.a = n),
                  (t.c = null),
                  Pn(t),
                  n != yn ||
                    e instanceof xn ||
                    (function (t, n) {
                      (t.g = !0),
                        fn(function () {
                          t.g && Mn.call(null, n);
                        });
                    })(t, e)));
            }
            function Rn(t, n, e, i) {
              if (t instanceof mn) return Nn(t, Tn(n || f, e || null, i)), !0;
              if (_(t)) return t.then(n, e, i), !0;
              if (v(t))
                try {
                  var r = t.then;
                  if (p(r))
                    return (
                      (function (t, n, e, i, r) {
                        function o(t) {
                          a || ((a = !0), i.call(r, t));
                        }
                        var a = !1;
                        try {
                          n.call(
                            t,
                            function (t) {
                              a || ((a = !0), e.call(r, t));
                            },
                            o
                          );
                        } catch (t) {
                          o(t);
                        }
                      })(t, r, n, e, i),
                      !0
                    );
                } catch (t) {
                  return e.call(i, t), !0;
                }
              return !1;
            }
            function Pn(t) {
              t.h || ((t.h = !0), fn(t.ec, t));
            }
            function Cn(t) {
              var n = null;
              return (
                t.b && ((n = t.b), (t.b = n.next), (n.next = null)),
                t.b || (t.f = null),
                n
              );
            }
            function Dn(t, n, e, i) {
              if (e == yn && n.b && !n.c) for (; t && t.g; t = t.c) t.g = !1;
              if (n.a) (n.a.c = null), Ln(n, e, i);
              else
                try {
                  n.c ? n.g.call(n.f) : Ln(n, e, i);
                } catch (t) {
                  Mn.call(null, t);
                }
              D(In, n);
            }
            function Ln(t, n, e) {
              n == bn ? t.g.call(t.f, e) : t.b && t.b.call(t.f, e);
            }
            (mn.prototype.then = function (t, n, e) {
              return _n(this, p(t) ? t : null, p(n) ? n : null, e);
            }),
              (mn.prototype.$goog_Thenable = !0),
              ((t = mn.prototype).ma = function (t, n) {
                return ((t = Tn(t, t, n)).c = !0), Nn(this, t), this;
              }),
              (t.o = function (t, n) {
                return _n(this, null, t, n);
              }),
              (t.cancel = function (t) {
                if (this.a == gn) {
                  var n = new xn(t);
                  fn(function () {
                    !(function t(n, e) {
                      if (n.a == gn)
                        if (n.c) {
                          var i = n.c;
                          if (i.b) {
                            for (
                              var r = 0, o = null, a = null, s = i.b;
                              s &&
                              (s.c || (r++, s.a == n && (o = s), !(o && 1 < r)));
                              s = s.next
                            )
                              o || (a = s);
                            o &&
                              (i.a == gn && 1 == r
                                ? t(i, e)
                                : (a
                                    ? ((r = a).next == i.f && (i.f = r),
                                      (r.next = r.next.next))
                                    : Cn(i),
                                  Dn(i, o, yn, e)));
                          }
                          n.c = null;
                        } else On(n, yn, e);
                    })(this, n);
                  }, this);
                }
              }),
              (t.Yc = function (t) {
                (this.a = gn), On(this, bn, t);
              }),
              (t.Zc = function (t) {
                (this.a = gn), On(this, yn, t);
              }),
              (t.ec = function () {
                for (var t; (t = Cn(this)); ) Dn(this, t, this.a, this.i);
                this.h = !1;
              });
            var Mn = hn;
            function xn(t) {
              O.call(this, t);
            }
            function jn() {
              (this.wa = this.wa), (this.na = this.na);
            }
            w(xn, O);
            var Un = 0;
            function Vn(t) {
              if (!t.wa && ((t.wa = !0), t.Ba(), 0 != Un))
                (function (t) {
                  (Object.prototype.hasOwnProperty.call(t, n) && t[n]) ||
                    (t[n] = ++i);
                })(t);
            }
            (jn.prototype.wa = !(xn.prototype.name = "cancel")),
              (jn.prototype.Ba = function () {
                if (this.na) for (; this.na.length; ) this.na.shift()();
              });
            var Fn =
                Object.freeze ||
                function (t) {
                  return t;
                },
              qn = !Kt || 9 <= Number($t),
              Kn = Kt && !Qt("9"),
              Hn = (function () {
                if (!l.addEventListener || !Object.defineProperty) return !1;
                var t = !1,
                  n = Object.defineProperty({}, "passive", {
                    get: function () {
                      t = !0;
                    },
                  });
                try {
                  l.addEventListener("test", f, n),
                    l.removeEventListener("test", f, n);
                } catch (t) {}
                return t;
              })();
            function Gn(t, n) {
              (this.type = t),
                (this.b = this.target = n),
                (this.defaultPrevented = !1);
            }
            function Bn(t, n) {
              if (
                (Gn.call(this, t ? t.type : ""),
                (this.relatedTarget = this.b = this.target = null),
                (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
                (this.key = ""),
                (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
                (this.pointerId = 0),
                (this.pointerType = ""),
                (this.a = null),
                t)
              ) {
                var e = (this.type = t.type),
                  i =
                    t.changedTouches && t.changedTouches.length
                      ? t.changedTouches[0]
                      : null;
                if (
                  ((this.target = t.target || t.srcElement),
                  (this.b = n),
                  (n = t.relatedTarget))
                ) {
                  if (Bt) {
                    t: {
                      try {
                        Ut(n.nodeName);
                        var r = !0;
                        break t;
                      } catch (t) {}
                      r = !1;
                    }
                    r || (n = null);
                  }
                } else
                  "mouseover" == e
                    ? (n = t.fromElement)
                    : "mouseout" == e && (n = t.toElement);
                (this.relatedTarget = n),
                  i
                    ? ((this.clientX =
                        void 0 !== i.clientX ? i.clientX : i.pageX),
                      (this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY),
                      (this.screenX = i.screenX || 0),
                      (this.screenY = i.screenY || 0))
                    : ((this.clientX =
                        void 0 !== t.clientX ? t.clientX : t.pageX),
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
                  (this.pointerType =
                    "string" == typeof t.pointerType
                      ? t.pointerType
                      : Wn[t.pointerType] || ""),
                  (this.a = t).defaultPrevented && this.preventDefault();
              }
            }
            (Gn.prototype.preventDefault = function () {
              this.defaultPrevented = !0;
            }),
              w(Bn, Gn);
            var Wn = Fn({ 2: "touch", 3: "pen", 4: "mouse" });
            (Bn.prototype.preventDefault = function () {
              Bn.Za.preventDefault.call(this);
              var t = this.a;
              if (t.preventDefault) t.preventDefault();
              else if (((t.returnValue = !1), Kn))
                try {
                  (t.ctrlKey || (112 <= t.keyCode && t.keyCode <= 123)) &&
                    (t.keyCode = -1);
                } catch (t) {}
            }),
              (Bn.prototype.f = function () {
                return this.a;
              });
            var Xn = "closure_listenable_" + ((1e6 * Math.random()) | 0),
              Jn = 0;
            function Yn(t, n, e, i, r) {
              (this.listener = t),
                (this.proxy = null),
                (this.src = n),
                (this.type = e),
                (this.capture = !!i),
                (this.Ta = r),
                (this.key = ++Jn),
                (this.ua = this.Na = !1);
            }
            function zn(t) {
              (t.ua = !0),
                (t.listener = null),
                (t.proxy = null),
                (t.src = null),
                (t.Ta = null);
            }
            function $n(t) {
              (this.src = t), (this.a = {}), (this.b = 0);
            }
            function Zn(t, n) {
              var e = n.type;
              e in t.a &&
                H(t.a[e], n) &&
                (zn(n), 0 == t.a[e].length && (delete t.a[e], t.b--));
            }
            function Qn(t, n, e, i) {
              for (var r = 0; r < t.length; ++r) {
                var o = t[r];
                if (!o.ua && o.listener == n && o.capture == !!e && o.Ta == i)
                  return r;
              }
              return -1;
            }
            $n.prototype.add = function (t, n, e, i, r) {
              var o = t.toString();
              (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
              var a = Qn(t, n, i, r);
              return (
                -1 < a
                  ? ((n = t[a]), e || (n.Na = !1))
                  : (((n = new Yn(n, this.src, o, !!i, r)).Na = e), t.push(n)),
                n
              );
            };
            var te = "closure_lm_" + ((1e6 * Math.random()) | 0),
              ne = {};
            function ee(t, n, e, i, r) {
              if (i && i.once) re(t, n, e, i, r);
              else if (Array.isArray(n))
                for (var o = 0; o < n.length; o++) ee(t, n[o], e, i, r);
              else
                (e = de(e)),
                  t && t[Xn]
                    ? ve(t, n, e, v(i) ? !!i.capture : !!i, r)
                    : ie(t, n, e, !1, i, r);
            }
            function ie(t, n, e, i, r, o) {
              if (!n) throw Error("Invalid event type");
              var a = v(r) ? !!r.capture : !!r,
                s = le(t);
              if (
                (s || (t[te] = s = new $n(t)), !(e = s.add(n, e, i, a, o)).proxy)
              )
                if (
                  ((i = (function () {
                    var n = he,
                      e = qn
                        ? function (t) {
                            return n.call(e.src, e.listener, t);
                          }
                        : function (t) {
                            if (!(t = n.call(e.src, e.listener, t))) return t;
                          };
                    return e;
                  })()),
                  ((e.proxy = i).src = t),
                  (i.listener = e),
                  t.addEventListener)
                )
                  Hn || (r = a),
                    void 0 === r && (r = !1),
                    t.addEventListener(n.toString(), i, r);
                else if (t.attachEvent) t.attachEvent(se(n.toString()), i);
                else {
                  if (!t.addListener || !t.removeListener)
                    throw Error(
                      "addEventListener and attachEvent are unavailable."
                    );
                  t.addListener(i);
                }
            }
            function re(t, n, e, i, r) {
              if (Array.isArray(n))
                for (var o = 0; o < n.length; o++) re(t, n[o], e, i, r);
              else
                (e = de(e)),
                  t && t[Xn]
                    ? me(t, n, e, v(i) ? !!i.capture : !!i, r)
                    : ie(t, n, e, !0, i, r);
            }
            function oe(t, n, e, i, r) {
              if (Array.isArray(n))
                for (var o = 0; o < n.length; o++) oe(t, n[o], e, i, r);
              else
                (i = v(i) ? !!i.capture : !!i),
                  (e = de(e)),
                  t && t[Xn]
                    ? ((t = t.u),
                      (n = String(n).toString()) in t.a &&
                        -1 < (e = Qn((o = t.a[n]), e, i, r)) &&
                        (zn(o[e]),
                        Array.prototype.splice.call(o, e, 1),
                        0 == o.length && (delete t.a[n], t.b--)))
                    : (t = t && le(t)) &&
                      ((n = t.a[n.toString()]),
                      (t = -1),
                      n && (t = Qn(n, e, i, r)),
                      (e = -1 < t ? n[t] : null) && ae(e));
            }
            function ae(t) {
              if ("number" != typeof t && t && !t.ua) {
                var n = t.src;
                if (n && n[Xn]) Zn(n.u, t);
                else {
                  var e = t.type,
                    i = t.proxy;
                  n.removeEventListener
                    ? n.removeEventListener(e, i, t.capture)
                    : n.detachEvent
                    ? n.detachEvent(se(e), i)
                    : n.addListener && n.removeListener && n.removeListener(i),
                    (e = le(n))
                      ? (Zn(e, t), 0 == e.b && ((e.src = null), (n[te] = null)))
                      : zn(t);
                }
              }
            }
            function se(t) {
              return t in ne ? ne[t] : (ne[t] = "on" + t);
            }
            function ue(t, n, e, i) {
              var r = !0;
              if ((t = le(t)) && (n = t.a[n.toString()]))
                for (n = n.concat(), t = 0; t < n.length; t++) {
                  var o = n[t];
                  o &&
                    o.capture == e &&
                    !o.ua &&
                    ((o = ce(o, i)), (r = r && !1 !== o));
                }
              return r;
            }
            function ce(t, n) {
              var e = t.listener,
                i = t.Ta || t.src;
              return t.Na && ae(t), e.call(i, n);
            }
            function he(t, n) {
              if (t.ua) return !0;
              if (qn) return ce(t, new Bn(n, this));
              if (!n)
                t: {
                  n = ["window", "event"];
                  for (var e = l, i = 0; i < n.length; i++)
                    if (null == (e = e[n[i]])) {
                      n = null;
                      break t;
                    }
                  n = e;
                }
              if (
                ((n = new Bn((i = n), this)),
                (e = !0),
                !(i.keyCode < 0 || null != i.returnValue))
              ) {
                t: {
                  var r = !1;
                  if (0 == i.keyCode)
                    try {
                      i.keyCode = -1;
                      break t;
                    } catch (t) {
                      r = !0;
                    }
                  (!r && null != i.returnValue) || (i.returnValue = !0);
                }
                for (i = [], r = n.b; r; r = r.parentNode) i.push(r);
                for (t = t.type, r = i.length - 1; 0 <= r; r--) {
                  n.b = i[r];
                  var o = ue(i[r], t, !0, n);
                  e = e && o;
                }
                for (r = 0; r < i.length; r++)
                  (n.b = i[r]), (o = ue(i[r], t, !1, n)), (e = e && o);
              }
              return e;
            }
            function le(t) {
              return (t = t[te]) instanceof $n ? t : null;
            }
            var fe = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
            function de(n) {
              return p(n)
                ? n
                : (n[fe] ||
                    (n[fe] = function (t) {
                      return n.handleEvent(t);
                    }),
                  n[fe]);
            }
            function pe() {
              jn.call(this),
                (this.u = new $n(this)),
                ((this.Yb = this).eb = null);
            }
            function ve(t, n, e, i, r) {
              t.u.add(String(n), e, !1, i, r);
            }
            function me(t, n, e, i, r) {
              t.u.add(String(n), e, !0, i, r);
            }
            function ge(t, n, e, i) {
              if (!(n = t.u.a[String(n)])) return !0;
              n = n.concat();
              for (var r = !0, o = 0; o < n.length; ++o) {
                var a = n[o];
                if (a && !a.ua && a.capture == e) {
                  var s = a.listener,
                    u = a.Ta || a.src;
                  a.Na && Zn(t.u, a), (r = !1 !== s.call(u, i) && r);
                }
              }
              return r && !i.defaultPrevented;
            }
            function be(t, n, e) {
              if (p(t)) e && (t = g(t, e));
              else {
                if (!t || "function" != typeof t.handleEvent)
                  throw Error("Invalid listener argument");
                t = g(t.handleEvent, t);
              }
              return 2147483647 < Number(n) ? -1 : l.setTimeout(t, n || 0);
            }
            function ye(e) {
              var i = null;
              return new mn(function (t, n) {
                -1 ==
                  (i = be(function () {
                    t(void 0);
                  }, e)) && n(Error("Failed to schedule timer."));
              }).o(function (t) {
                throw (l.clearTimeout(i), t);
              });
            }
            function we(t) {
              if (t.V && "function" == typeof t.V) return t.V();
              if ("string" == typeof t) return t.split("");
              if (d(t)) {
                for (var n = [], e = t.length, i = 0; i < e; i++) n.push(t[i]);
                return n;
              }
              for (i in ((n = []), (e = 0), t)) n[e++] = t[i];
              return n;
            }
            function Ie(t) {
              if (t.X && "function" == typeof t.X) return t.X();
              if (!t.V || "function" != typeof t.V) {
                if (d(t) || "string" == typeof t) {
                  var n = [];
                  t = t.length;
                  for (var e = 0; e < t; e++) n.push(e);
                  return n;
                }
                for (var i in ((n = []), (e = 0), t)) n[e++] = i;
                return n;
              }
            }
            function Te(t, n) {
              (this.b = {}), (this.a = []), (this.c = 0);
              var e = arguments.length;
              if (1 < e) {
                if (e % 2) throw Error("Uneven number of arguments");
                for (var i = 0; i < e; i += 2)
                  this.set(arguments[i], arguments[i + 1]);
              } else if (t)
                if (t instanceof Te)
                  for (e = t.X(), i = 0; i < e.length; i++)
                    this.set(e[i], t.get(e[i]));
                else for (i in t) this.set(i, t[i]);
            }
            function Ee(t) {
              if (t.c != t.a.length) {
                for (var n = 0, e = 0; n < t.a.length; ) {
                  var i = t.a[n];
                  Ae(t.b, i) && (t.a[e++] = i), n++;
                }
                t.a.length = e;
              }
              if (t.c != t.a.length) {
                var r = {};
                for (e = n = 0; n < t.a.length; )
                  Ae(r, (i = t.a[n])) || (r[(t.a[e++] = i)] = 1), n++;
                t.a.length = e;
              }
            }
            function Ae(t, n) {
              return Object.prototype.hasOwnProperty.call(t, n);
            }
            w(pe, jn),
              (pe.prototype[Xn] = !0),
              (pe.prototype.addEventListener = function (t, n, e, i) {
                ee(this, t, n, e, i);
              }),
              (pe.prototype.removeEventListener = function (t, n, e, i) {
                oe(this, t, n, e, i);
              }),
              (pe.prototype.dispatchEvent = function (t) {
                var n,
                  e = this.eb;
                if (e) for (n = []; e; e = e.eb) n.push(e);
                e = this.Yb;
                var i = t.type || t;
                if ("string" == typeof t) t = new Gn(t, e);
                else if (t instanceof Gn) t.target = t.target || e;
                else {
                  var r = t;
                  lt((t = new Gn(i, e)), r);
                }
                if (((r = !0), n))
                  for (var o = n.length - 1; 0 <= o; o--) {
                    var a = (t.b = n[o]);
                    r = ge(a, i, !0, t) && r;
                  }
                if (
                  ((r = ge((a = t.b = e), i, !0, t) && r),
                  (r = ge(a, i, !1, t) && r),
                  n)
                )
                  for (o = 0; o < n.length; o++)
                    r = ge((a = t.b = n[o]), i, !1, t) && r;
                return r;
              }),
              (pe.prototype.Ba = function () {
                if ((pe.Za.Ba.call(this), this.u)) {
                  var t,
                    n = this.u;
                  for (t in n.a) {
                    for (var e = n.a[t], i = 0; i < e.length; i++) zn(e[i]);
                    delete n.a[t], n.b--;
                  }
                }
                this.eb = null;
              }),
              ((t = Te.prototype).V = function () {
                Ee(this);
                for (var t = [], n = 0; n < this.a.length; n++)
                  t.push(this.b[this.a[n]]);
                return t;
              }),
              (t.X = function () {
                return Ee(this), this.a.concat();
              }),
              (t.clear = function () {
                (this.b = {}), (this.c = this.a.length = 0);
              }),
              (t.get = function (t, n) {
                return Ae(this.b, t) ? this.b[t] : n;
              }),
              (t.set = function (t, n) {
                Ae(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = n);
              }),
              (t.forEach = function (t, n) {
                for (var e = this.X(), i = 0; i < e.length; i++) {
                  var r = e[i],
                    o = this.get(r);
                  t.call(n, o, r, this);
                }
              });
            var ke = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
            function Se(t, n) {
              var e;
              (this.b = this.i = this.f = ""),
                (this.l = null),
                (this.g = this.c = ""),
                (this.h = !1),
                t instanceof Se
                  ? ((this.h = void 0 !== n ? n : t.h),
                    Ne(this, t.f),
                    (this.i = t.i),
                    (this.b = t.b),
                    _e(this, t.l),
                    (this.c = t.c),
                    Oe(this, Je(t.a)),
                    (this.g = t.g))
                  : t && (e = String(t).match(ke))
                  ? ((this.h = !!n),
                    Ne(this, e[1] || "", !0),
                    (this.i = Le(e[2] || "")),
                    (this.b = Le(e[3] || "", !0)),
                    _e(this, e[4]),
                    (this.c = Le(e[5] || "", !0)),
                    Oe(this, e[6] || "", !0),
                    (this.g = Le(e[7] || "")))
                  : ((this.h = !!n), (this.a = new Ke(null, this.h)));
            }
            function Ne(t, n, e) {
              (t.f = e ? Le(n, !0) : n), t.f && (t.f = t.f.replace(/:$/, ""));
            }
            function _e(t, n) {
              if (n) {
                if (((n = Number(n)), isNaN(n) || n < 0))
                  throw Error("Bad port number " + n);
                t.l = n;
              } else t.l = null;
            }
            function Oe(t, n, e) {
              n instanceof Ke
                ? ((t.a = n),
                  (function (t, n) {
                    n &&
                      !t.f &&
                      (He(t),
                      (t.c = null),
                      t.a.forEach(function (t, n) {
                        var e = n.toLowerCase();
                        n != e && (Be(this, n), Xe(this, e, t));
                      }, t)),
                      (t.f = n);
                  })(t.a, t.h))
                : (e || (n = Me(n, Fe)), (t.a = new Ke(n, t.h)));
            }
            function Re(t, n, e) {
              t.a.set(n, e);
            }
            function Pe(t, n) {
              return t.a.get(n);
            }
            function Ce(t) {
              return t instanceof Se ? new Se(t) : new Se(t, void 0);
            }
            function De(t, n) {
              var e = new Se(null, void 0);
              return Ne(e, "https"), t && (e.b = t), n && (e.c = n), e;
            }
            function Le(t, n) {
              return t
                ? n
                  ? decodeURI(t.replace(/%25/g, "%2525"))
                  : decodeURIComponent(t)
                : "";
            }
            function Me(t, n, e) {
              return "string" == typeof t
                ? ((t = encodeURI(t).replace(n, xe)),
                  e && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                  t)
                : null;
            }
            function xe(t) {
              return (
                "%" +
                (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
                (15 & t).toString(16)
              );
            }
            (Se.prototype.toString = function () {
              var t = [],
                n = this.f;
              n && t.push(Me(n, je, !0), ":");
              var e = this.b;
              return (
                (!e && "file" != n) ||
                  (t.push("//"),
                  (n = this.i) && t.push(Me(n, je, !0), "@"),
                  t.push(
                    encodeURIComponent(String(e)).replace(
                      /%25([0-9a-fA-F]{2})/g,
                      "%$1"
                    )
                  ),
                  null != (e = this.l) && t.push(":", String(e))),
                (e = this.c) &&
                  (this.b && "/" != e.charAt(0) && t.push("/"),
                  t.push(Me(e, "/" == e.charAt(0) ? Ve : Ue, !0))),
                (e = this.a.toString()) && t.push("?", e),
                (e = this.g) && t.push("#", Me(e, qe)),
                t.join("")
              );
            }),
              (Se.prototype.resolve = function (t) {
                var n = new Se(this),
                  e = !!t.f;
                e ? Ne(n, t.f) : (e = !!t.i),
                  e ? (n.i = t.i) : (e = !!t.b),
                  e ? (n.b = t.b) : (e = null != t.l);
                var i = t.c;
                if (e) _e(n, t.l);
                else if ((e = !!t.c)) {
                  if ("/" != i.charAt(0))
                    if (this.b && !this.c) i = "/" + i;
                    else {
                      var r = n.c.lastIndexOf("/");
                      -1 != r && (i = n.c.substr(0, r + 1) + i);
                    }
                  if (".." == (r = i) || "." == r) i = "";
                  else if (et(r, "./") || et(r, "/.")) {
                    (i = 0 == r.lastIndexOf("/", 0)), (r = r.split("/"));
                    for (var o = [], a = 0; a < r.length; ) {
                      var s = r[a++];
                      "." == s
                        ? i && a == r.length && o.push("")
                        : ".." == s
                        ? ((1 < o.length || (1 == o.length && "" != o[0])) &&
                            o.pop(),
                          i && a == r.length && o.push(""))
                        : (o.push(s), (i = !0));
                    }
                    i = o.join("/");
                  } else i = r;
                }
                return (
                  e ? (n.c = i) : (e = "" !== t.a.toString()),
                  e ? Oe(n, Je(t.a)) : (e = !!t.g),
                  e && (n.g = t.g),
                  n
                );
              });
            var je = /[#\/\?@]/g,
              Ue = /[#\?:]/g,
              Ve = /[#\?]/g,
              Fe = /[#\?@]/g,
              qe = /#/g;
            function Ke(t, n) {
              (this.b = this.a = null), (this.c = t || null), (this.f = !!n);
            }
            function He(e) {
              e.a ||
                ((e.a = new Te()),
                (e.b = 0),
                e.c &&
                  (function (t, n) {
                    if (t) {
                      t = t.split("&");
                      for (var e = 0; e < t.length; e++) {
                        var i = t[e].indexOf("="),
                          r = null;
                        if (0 <= i) {
                          var o = t[e].substring(0, i);
                          r = t[e].substring(i + 1);
                        } else o = t[e];
                        n(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "");
                      }
                    }
                  })(e.c, function (t, n) {
                    e.add(decodeURIComponent(t.replace(/\+/g, " ")), n);
                  }));
            }
            function Ge(t) {
              var n = Ie(t);
              if (void 0 === n) throw Error("Keys are undefined");
              var e = new Ke(null, void 0);
              t = we(t);
              for (var i = 0; i < n.length; i++) {
                var r = n[i],
                  o = t[i];
                Array.isArray(o) ? Xe(e, r, o) : e.add(r, o);
              }
              return e;
            }
            function Be(t, n) {
              He(t),
                (n = Ye(t, n)),
                Ae(t.a.b, n) &&
                  ((t.c = null),
                  (t.b -= t.a.get(n).length),
                  Ae((t = t.a).b, n) &&
                    (delete t.b[n], t.c--, t.a.length > 2 * t.c && Ee(t)));
            }
            function We(t, n) {
              return He(t), (n = Ye(t, n)), Ae(t.a.b, n);
            }
            function Xe(t, n, e) {
              Be(t, n),
                0 < e.length &&
                  ((t.c = null), t.a.set(Ye(t, n), W(e)), (t.b += e.length));
            }
            function Je(t) {
              var n = new Ke();
              return (n.c = t.c), t.a && ((n.a = new Te(t.a)), (n.b = t.b)), n;
            }
            function Ye(t, n) {
              return (n = String(n)), t.f && (n = n.toLowerCase()), n;
            }
            function ze(t) {
              var n = [];
              return (
                (function t(n, e, i) {
                  if (null == e) i.push("null");
                  else {
                    if ("object" == typeof e) {
                      if (Array.isArray(e)) {
                        var r = e;
                        (e = r.length), i.push("[");
                        for (var o = "", a = 0; a < e; a++)
                          i.push(o), t(n, r[a], i), (o = ",");
                        return void i.push("]");
                      }
                      if (
                        !(
                          e instanceof String ||
                          e instanceof Number ||
                          e instanceof Boolean
                        )
                      ) {
                        for (r in (i.push("{"), (o = ""), e))
                          Object.prototype.hasOwnProperty.call(e, r) &&
                            "function" != typeof (a = e[r]) &&
                            (i.push(o),
                            ti(r, i),
                            i.push(":"),
                            t(n, a, i),
                            (o = ","));
                        return void i.push("}");
                      }
                      e = e.valueOf();
                    }
                    switch (typeof e) {
                      case "string":
                        ti(e, i);
                        break;
                      case "number":
                        i.push(isFinite(e) && !isNaN(e) ? String(e) : "null");
                        break;
                      case "boolean":
                        i.push(String(e));
                        break;
                      case "function":
                        i.push("null");
                        break;
                      default:
                        throw Error("Unknown type: " + typeof e);
                    }
                  }
                })(new $e(), t, n),
                n.join("")
              );
            }
            function $e() {}
            ((t = Ke.prototype).add = function (t, n) {
              He(this), (this.c = null), (t = Ye(this, t));
              var e = this.a.get(t);
              return e || this.a.set(t, (e = [])), e.push(n), (this.b += 1), this;
            }),
              (t.clear = function () {
                (this.a = this.c = null), (this.b = 0);
              }),
              (t.forEach = function (e, i) {
                He(this),
                  this.a.forEach(function (t, n) {
                    U(
                      t,
                      function (t) {
                        e.call(i, t, n, this);
                      },
                      this
                    );
                  }, this);
              }),
              (t.X = function () {
                He(this);
                for (
                  var t = this.a.V(), n = this.a.X(), e = [], i = 0;
                  i < n.length;
                  i++
                )
                  for (var r = t[i], o = 0; o < r.length; o++) e.push(n[i]);
                return e;
              }),
              (t.V = function (t) {
                He(this);
                var n = [];
                if ("string" == typeof t)
                  We(this, t) && (n = B(n, this.a.get(Ye(this, t))));
                else {
                  t = this.a.V();
                  for (var e = 0; e < t.length; e++) n = B(n, t[e]);
                }
                return n;
              }),
              (t.set = function (t, n) {
                return (
                  He(this),
                  (this.c = null),
                  We(this, (t = Ye(this, t))) && (this.b -= this.a.get(t).length),
                  this.a.set(t, [n]),
                  (this.b += 1),
                  this
                );
              }),
              (t.get = function (t, n) {
                return t && 0 < (t = this.V(t)).length ? String(t[0]) : n;
              }),
              (t.toString = function () {
                if (this.c) return this.c;
                if (!this.a) return "";
                for (var t = [], n = this.a.X(), e = 0; e < n.length; e++) {
                  var i = n[e],
                    r = encodeURIComponent(String(i));
                  i = this.V(i);
                  for (var o = 0; o < i.length; o++) {
                    var a = r;
                    "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))),
                      t.push(a);
                  }
                }
                return (this.c = t.join("&"));
              });
            var Ze = {
                '"': '\\"',
                "\\": "\\\\",
                "/": "\\/",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
                "\v": "\\u000b",
              },
              Qe = /\uffff/.test("￿")
                ? /[\\"\x00-\x1f\x7f-\uffff]/g
                : /[\\"\x00-\x1f\x7f-\xff]/g;
            function ti(t, n) {
              n.push(
                '"',
                t.replace(Qe, function (t) {
                  var n = Ze[t];
                  return (
                    n ||
                      ((n =
                        "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1)),
                      (Ze[t] = n)),
                    n
                  );
                }),
                '"'
              );
            }
            function ni() {
              var t = wi();
              return (Kt && !!$t && 11 == $t) || /Edge\/\d+/.test(t);
            }
            function ei() {
              return (
                (l.window && l.window.location.href) ||
                (self && self.location && self.location.href) ||
                ""
              );
            }
            function ii(t, n) {
              n = n || l.window;
              var e = "about:blank";
              t && (e = St(_t(t))), (n.location.href = e);
            }
            function ri(t) {
              return !!(
                (t = (t || wi()).toLowerCase()).match(/android/) ||
                t.match(/webos/) ||
                t.match(/iphone|ipad|ipod/) ||
                t.match(/blackberry/) ||
                t.match(/windows phone/) ||
                t.match(/iemobile/)
              );
            }
            function oi(t) {
              t = t || l.window;
              try {
                t.close();
              } catch (t) {}
            }
            function ai(t, n, e) {
              var i = Math.floor(1e9 * Math.random()).toString();
              (n = n || 500), (e = e || 600);
              var r = (window.screen.availHeight - e) / 2,
                o = (window.screen.availWidth - n) / 2;
              for (a in ((n = {
                width: n,
                height: e,
                top: 0 < r ? r : 0,
                left: 0 < o ? o : 0,
                location: !0,
                resizable: !0,
                statusbar: !0,
                toolbar: !1,
              }),
              (e = wi().toLowerCase()),
              i && ((n.target = i), et(e, "crios/") && (n.target = "_blank")),
              gi(wi()) == vi &&
                ((t = t || "http://localhost"), (n.scrollbars = !0)),
              (e = t || ""),
              (t = n) || (t = {}),
              (i = window),
              (n =
                e instanceof kt ? e : _t(void 0 !== e.href ? e.href : String(e))),
              (e = t.target || e.target),
              (r = []),
              t))
                switch (a) {
                  case "width":
                  case "height":
                  case "top":
                  case "left":
                    r.push(a + "=" + t[a]);
                    break;
                  case "target":
                  case "noopener":
                  case "noreferrer":
                    break;
                  default:
                    r.push(a + "=" + (t[a] ? 1 : 0));
                }
              var a = r.join(",");
              if (
                (((at("iPhone") && !at("iPod") && !at("iPad")) ||
                  at("iPad") ||
                  at("iPod")) &&
                i.navigator &&
                i.navigator.standalone &&
                e &&
                "_self" != e
                  ? (ft((a = un(document, "A")), "HTMLAnchorElement"),
                    n instanceof kt ||
                      n instanceof kt ||
                      ((n = "object" == typeof n && n.ra ? n.qa() : String(n)),
                      Nt.test(n) || (n = "about:invalid#zClosurez"),
                      (n = new kt(Rt, n))),
                    (a.href = St(n)),
                    a.setAttribute("target", e),
                    t.noreferrer && a.setAttribute("rel", "noreferrer"),
                    (t = document.createEvent("MouseEvent")).initMouseEvent(
                      "click",
                      !0,
                      !0,
                      i,
                      1
                    ),
                    a.dispatchEvent(t),
                    (a = {}))
                  : t.noreferrer
                  ? ((a = i.open("", e, a)),
                    (t = St(n)),
                    a &&
                      (Gt &&
                        et(t, ";") &&
                        (t = "'" + t.replace(/'/g, "%27") + "'"),
                      (a.opener = null),
                      (t = Lt(
                        '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                          jt(t) +
                          '">'
                      )),
                      (i = a.document)) &&
                      (i.write(Ct(t)), i.close()))
                  : (a = i.open(St(n), e, a)) && t.noopener && (a.opener = null),
                a)
              )
                try {
                  a.focus();
                } catch (t) {}
              return a;
            }
            var si = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
              ui = /^[^@]+@[^@]+$/;
            function ci() {
              var n = null;
              return new mn(function (t) {
                "complete" == l.document.readyState
                  ? t()
                  : ((n = function () {
                      t();
                    }),
                    re(window, "load", n));
              }).o(function (t) {
                throw (oe(window, "load", n), t);
              });
            }
            function hi(t) {
              return (
                (t = t || wi()),
                !(
                  ("file:" !== ki() && "ionic:" !== ki()) ||
                  !t.toLowerCase().match(/iphone|ipad|ipod|android/)
                )
              );
            }
            function li() {
              var t = l.window;
              try {
                return !(!t || t == t.top);
              } catch (t) {
                return !1;
              }
            }
            function fi() {
              return (
                void 0 !== l.WorkerGlobalScope &&
                "function" == typeof l.importScripts
              );
            }
            function di() {
              return Bl.INTERNAL.hasOwnProperty("reactNative")
                ? "ReactNative"
                : Bl.INTERNAL.hasOwnProperty("node")
                ? "Node"
                : fi()
                ? "Worker"
                : "Browser";
            }
            function pi() {
              var t = di();
              return "ReactNative" === t || "Node" === t;
            }
            var vi = "Firefox",
              mi = "Chrome";
            function gi(t) {
              var n = t.toLowerCase();
              return et(n, "opera/") || et(n, "opr/") || et(n, "opios/")
                ? "Opera"
                : et(n, "iemobile")
                ? "IEMobile"
                : et(n, "msie") || et(n, "trident/")
                ? "IE"
                : et(n, "edge/")
                ? "Edge"
                : et(n, "firefox/")
                ? vi
                : et(n, "silk/")
                ? "Silk"
                : et(n, "blackberry")
                ? "Blackberry"
                : et(n, "webos")
                ? "Webos"
                : !et(n, "safari/") ||
                  et(n, "chrome/") ||
                  et(n, "crios/") ||
                  et(n, "android")
                ? (!et(n, "chrome/") && !et(n, "crios/")) || et(n, "edge/")
                  ? et(n, "android")
                    ? "Android"
                    : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) &&
                      2 == t.length
                    ? t[1]
                    : "Other"
                  : mi
                : "Safari";
            }
            var bi = { jd: "FirebaseCore-web", ld: "FirebaseUI-web" };
            function yi(t, n) {
              n = n || [];
              var e,
                i = [],
                r = {};
              for (e in bi) r[bi[e]] = !0;
              for (e = 0; e < n.length; e++)
                void 0 !== r[n[e]] && (delete r[n[e]], i.push(n[e]));
              return (
                i.sort(),
                (n = i).length || (n = ["FirebaseCore-web"]),
                "Browser" === (i = di())
                  ? (i = gi((r = wi())))
                  : "Worker" === i && (i = gi((r = wi())) + "-" + i),
                i + "/JsCore/" + t + "/" + n.join(",")
              );
            }
            function wi() {
              return (l.navigator && l.navigator.userAgent) || "";
            }
            function Ii(t, n) {
              (t = t.split(".")), (n = n || l);
              for (
                var e = 0;
                e < t.length && "object" == typeof n && null != n;
                e++
              )
                n = n[t[e]];
              return e != t.length && (n = void 0), n;
            }
            function Ti() {
              try {
                var t = l.localStorage,
                  n = Ri();
                if (t)
                  return (
                    t.setItem(n, "1"), t.removeItem(n), !ni() || !!l.indexedDB
                  );
              } catch (t) {
                return fi() && !!l.indexedDB;
              }
              return !1;
            }
            function Ei() {
              return (
                (Ai() || "chrome-extension:" === ki() || hi()) &&
                !pi() &&
                Ti() &&
                !fi()
              );
            }
            function Ai() {
              return "http:" === ki() || "https:" === ki();
            }
            function ki() {
              return (l.location && l.location.protocol) || null;
            }
            function Si(t) {
              return !ri((t = t || wi())) && gi(t) != vi;
            }
            function Ni(t) {
              return void 0 === t ? null : ze(t);
            }
            function _i(t) {
              var n,
                e = {};
              for (n in t)
                t.hasOwnProperty(n) &&
                  null !== t[n] &&
                  void 0 !== t[n] &&
                  (e[n] = t[n]);
              return e;
            }
            function Oi(t) {
              if (null !== t) return JSON.parse(t);
            }
            function Ri(t) {
              return t || Math.floor(1e9 * Math.random()).toString();
            }
            function Pi(t) {
              return (
                "Safari" != gi((t = t || wi())) &&
                !t.toLowerCase().match(/iphone|ipad|ipod/)
              );
            }
            function Ci() {
              var t = l.___jsl;
              if (t && t.H)
                for (var n in t.H)
                  if (
                    ((t.H[n].r = t.H[n].r || []),
                    (t.H[n].L = t.H[n].L || []),
                    (t.H[n].r = t.H[n].L.concat()),
                    t.CP)
                  )
                    for (var e = 0; e < t.CP.length; e++) t.CP[e] = null;
            }
            function Di(t, n) {
              if (n < t)
                throw Error("Short delay should be less than long delay!");
              (this.a = t),
                (this.c = n),
                (t = wi()),
                (n = di()),
                (this.b = ri(t) || "ReactNative" === n);
            }
            function Li() {
              var t = l.document;
              return (
                !t ||
                void 0 === t.visibilityState ||
                "visible" == t.visibilityState
              );
            }
            function Mi(t) {
              try {
                var n = new Date(parseInt(t, 10));
                if (!isNaN(n.getTime()) && !/[^0-9]/.test(t))
                  return n.toUTCString();
              } catch (t) {}
              return null;
            }
            function xi() {
              return !(
                !Ii("fireauth.oauthhelper", l) && !Ii("fireauth.iframe", l)
              );
            }
            Di.prototype.get = function () {
              var t = l.navigator;
              return !t ||
                "boolean" != typeof t.onLine ||
                (!Ai() &&
                  "chrome-extension:" !== ki() &&
                  void 0 === t.connection) ||
                t.onLine
                ? this.b
                  ? this.c
                  : this.a
                : Math.min(5e3, this.a);
            };
            var ji,
              Ui = {};
            function Vi(t) {
              Ui[t] ||
                ((Ui[t] = !0),
                "undefined" != typeof console &&
                  "function" == typeof console.warn &&
                  console.warn(t));
            }
            try {
              var Fi = {};
              Object.defineProperty(Fi, "abcd", {
                configurable: !0,
                enumerable: !0,
                value: 1,
              }),
                Object.defineProperty(Fi, "abcd", {
                  configurable: !0,
                  enumerable: !0,
                  value: 2,
                }),
                (ji = 2 == Fi.abcd);
            } catch (t) {
              ji = !1;
            }
            function qi(t, n, e) {
              ji
                ? Object.defineProperty(t, n, {
                    configurable: !0,
                    enumerable: !0,
                    value: e,
                  })
                : (t[n] = e);
            }
            function Ki(t, n) {
              if (n) for (var e in n) n.hasOwnProperty(e) && qi(t, e, n[e]);
            }
            function Hi(t) {
              var n = {};
              return Ki(n, t), n;
            }
            function Gi(t) {
              var n = t;
              if ("object" == typeof t && null != t)
                for (var e in ((n = "length" in t ? [] : {}), t))
                  qi(n, e, Gi(t[e]));
              return n;
            }
            function Bi(t) {
              var n = t && (t[zi] ? "phone" : null);
              if (!(n && t && t[Yi]))
                throw new I(
                  "internal-error",
                  "Internal assert: invalid MultiFactorInfo object"
                );
              qi(this, "uid", t[Yi]), qi(this, "displayName", t[Xi] || null);
              var e = null;
              t[Ji] && (e = new Date(t[Ji]).toUTCString()),
                qi(this, "enrollmentTime", e),
                qi(this, "factorId", n);
            }
            function Wi(t) {
              try {
                var n = new $i(t);
              } catch (t) {
                n = null;
              }
              return n;
            }
            Bi.prototype.v = function () {
              return {
                uid: this.uid,
                displayName: this.displayName,
                factorId: this.factorId,
                enrollmentTime: this.enrollmentTime,
              };
            };
            var Xi = "displayName",
              Ji = "enrolledAt",
              Yi = "mfaEnrollmentId",
              zi = "phoneInfo";
            function $i(t) {
              Bi.call(this, t), qi(this, "phoneNumber", t[zi]);
            }
            function Zi(t) {
              var n = {},
                e = t[er],
                i = t[rr],
                r = t[or];
              if (
                ((t = Wi(t[ir])),
                !r ||
                  (r != tr && r != nr && !e) ||
                  (r == nr && !i) ||
                  (r == Qi && !t))
              )
                throw Error("Invalid checkActionCode response!");
              r == nr
                ? ((n[sr] = e || null), (n[cr] = e || null), (n[ar] = i))
                : ((n[sr] = i || null), (n[cr] = i || null), (n[ar] = e || null)),
                (n[ur] = t || null),
                qi(this, lr, r),
                qi(this, hr, Gi(n));
            }
            w($i, Bi),
              ($i.prototype.v = function () {
                var t = $i.Za.v.call(this);
                return (t.phoneNumber = this.phoneNumber), t;
              });
            var Qi = "REVERT_SECOND_FACTOR_ADDITION",
              tr = "EMAIL_SIGNIN",
              nr = "VERIFY_AND_CHANGE_EMAIL",
              er = "email",
              ir = "mfaInfo",
              rr = "newEmail",
              or = "requestType",
              ar = "email",
              sr = "fromEmail",
              ur = "multiFactorInfo",
              cr = "previousEmail",
              hr = "data",
              lr = "operation";
            function fr(t) {
              var n = Pe((t = Ce(t)), dr) || null,
                e = Pe(t, pr) || null,
                i = Pe(t, gr) || null;
              if (((i = (i && yr[i]) || null), !n || !e || !i))
                throw new I(
                  "argument-error",
                  dr +
                    ", " +
                    pr +
                    "and " +
                    gr +
                    " are required in a valid action code URL."
                );
              Ki(this, {
                apiKey: n,
                operation: i,
                code: e,
                continueUrl: Pe(t, vr) || null,
                languageCode: Pe(t, mr) || null,
                tenantId: Pe(t, br) || null,
              });
            }
            var dr = "apiKey",
              pr = "oobCode",
              vr = "continueUrl",
              mr = "languageCode",
              gr = "mode",
              br = "tenantId",
              yr = {
                recoverEmail: "RECOVER_EMAIL",
                resetPassword: "PASSWORD_RESET",
                revertSecondFactorAddition: Qi,
                signIn: tr,
                verifyAndChangeEmail: nr,
                verifyEmail: "VERIFY_EMAIL",
              };
            function wr(t) {
              try {
                return new fr(t);
              } catch (t) {
                return null;
              }
            }
            function Ir(t) {
              var n = t[Sr];
              if (void 0 === n) throw new I("missing-continue-uri");
              if ("string" != typeof n || ("string" == typeof n && !n.length))
                throw new I("invalid-continue-uri");
              (this.h = n), (this.b = this.a = null), (this.g = !1);
              var e = t[Tr];
              if (e && "object" == typeof e) {
                n = e[Or];
                var i = e[Nr];
                if (((e = e[_r]), "string" == typeof n && n.length)) {
                  if (((this.a = n), void 0 !== i && "boolean" != typeof i))
                    throw new I(
                      "argument-error",
                      Nr + " property must be a boolean when specified."
                    );
                  if (
                    ((this.g = !!i),
                    void 0 !== e &&
                      ("string" != typeof e ||
                        ("string" == typeof e && !e.length)))
                  )
                    throw new I(
                      "argument-error",
                      _r + " property must be a non empty string when specified."
                    );
                  this.b = e || null;
                } else {
                  if (void 0 !== n)
                    throw new I(
                      "argument-error",
                      Or + " property must be a non empty string when specified."
                    );
                  if (void 0 !== i || void 0 !== e)
                    throw new I("missing-android-pkg-name");
                }
              } else if (void 0 !== e)
                throw new I(
                  "argument-error",
                  Tr + " property must be a non null object when specified."
                );
              if (((this.f = null), (n = t[kr]) && "object" == typeof n)) {
                if ("string" == typeof (n = n[Rr]) && n.length) this.f = n;
                else if (void 0 !== n)
                  throw new I(
                    "argument-error",
                    Rr + " property must be a non empty string when specified."
                  );
              } else if (void 0 !== n)
                throw new I(
                  "argument-error",
                  kr + " property must be a non null object when specified."
                );
              if (void 0 !== (n = t[Ar]) && "boolean" != typeof n)
                throw new I(
                  "argument-error",
                  Ar + " property must be a boolean when specified."
                );
              if (
                ((this.c = !!n),
                void 0 !== (t = t[Er]) &&
                  ("string" != typeof t || ("string" == typeof t && !t.length)))
              )
                throw new I(
                  "argument-error",
                  Er + " property must be a non empty string when specified."
                );
              this.i = t || null;
            }
            var Tr = "android",
              Er = "dynamicLinkDomain",
              Ar = "handleCodeInApp",
              kr = "iOS",
              Sr = "url",
              Nr = "installApp",
              _r = "minimumVersion",
              Or = "packageName",
              Rr = "bundleId";
            function Pr(t) {
              var n = {};
              for (var e in ((n.continueUrl = t.h),
              (n.canHandleCodeInApp = t.c),
              (n.androidPackageName = t.a) &&
                ((n.androidMinimumVersion = t.b), (n.androidInstallApp = t.g)),
              (n.iOSBundleId = t.f),
              (n.dynamicLinkDomain = t.i),
              n))
                null === n[e] && delete n[e];
              return n;
            }
            var Cr = null;
            function Dr(t) {
              var n = "";
              return (
                (function (i, t) {
                  function n(t) {
                    for (; r < i.length; ) {
                      var n = i.charAt(r++),
                        e = Cr[n];
                      if (null != e) return e;
                      if (!/^[\s\xa0]*$/.test(n))
                        throw Error("Unknown base64 encoding at char: " + n);
                    }
                    return t;
                  }
                  !(function () {
                    if (!Cr) {
                      Cr = {};
                      for (
                        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                            ""
                          ),
                          n = ["+/=", "+/", "-_=", "-_.", "-_"],
                          e = 0;
                        e < 5;
                        e++
                      )
                        for (
                          var i = t.concat(n[e].split("")), r = 0;
                          r < i.length;
                          r++
                        ) {
                          var o = i[r];
                          void 0 === Cr[o] && (Cr[o] = r);
                        }
                    }
                  })();
                  for (var r = 0; ; ) {
                    var e = n(-1),
                      o = n(0),
                      a = n(64),
                      s = n(64);
                    if (64 === s && -1 === e) break;
                    t((e << 2) | (o >> 4)),
                      64 != a &&
                        (t(((o << 4) & 240) | (a >> 2)),
                        64 != s && t(((a << 6) & 192) | s));
                  }
                })(t, function (t) {
                  n += String.fromCharCode(t);
                }),
                n
              );
            }
            function Lr(t) {
              var n = xr(t);
              if (!(n && n.sub && n.iss && n.aud && n.exp))
                throw Error("Invalid JWT");
              (this.g = t),
                (this.c = n.exp),
                (this.h = n.sub),
                (this.a =
                  n.provider_id ||
                  (n.firebase && n.firebase.sign_in_provider) ||
                  null),
                (this.f = (n.firebase && n.firebase.tenant) || null),
                (this.b = !!n.is_anonymous || "anonymous" == this.a);
            }
            function Mr(t) {
              try {
                return new Lr(t);
              } catch (t) {
                return null;
              }
            }
            function xr(t) {
              if (!t) return null;
              if (3 != (t = t.split(".")).length) return null;
              for (var n = (4 - ((t = t[1]).length % 4)) % 4, e = 0; e < n; e++)
                t += ".";
              try {
                return JSON.parse(Dr(t));
              } catch (t) {}
              return null;
            }
            (Lr.prototype.S = function () {
              return this.f;
            }),
              (Lr.prototype.i = function () {
                return this.b;
              }),
              (Lr.prototype.toString = function () {
                return this.g;
              });
            var jr = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(
                " "
              ),
              Ur = [
                "client_id",
                "response_type",
                "scope",
                "redirect_uri",
                "state",
              ],
              Vr = {
                kd: {
                  Ha: "locale",
                  ta: 700,
                  sa: 600,
                  ea: "facebook.com",
                  Va: Ur,
                },
                md: { Ha: null, ta: 500, sa: 750, ea: "github.com", Va: Ur },
                nd: { Ha: "hl", ta: 515, sa: 680, ea: "google.com", Va: Ur },
                td: { Ha: "lang", ta: 485, sa: 705, ea: "twitter.com", Va: jr },
                gd: { Ha: "locale", ta: 600, sa: 600, ea: "apple.com", Va: [] },
              };
            function Fr(t) {
              for (var n in Vr) if (Vr[n].ea == t) return Vr[n];
              return null;
            }
            function qr(t) {
              var n = {};
              (n["facebook.com"] = Wr),
                (n["google.com"] = Jr),
                (n["github.com"] = Xr),
                (n["twitter.com"] = Yr);
              var e = t && t[Hr];
              try {
                if (e) return n[e] ? new n[e](t) : new Br(t);
                if (void 0 !== t[Kr]) return new Gr(t);
              } catch (t) {}
              return null;
            }
            var Kr = "idToken",
              Hr = "providerId";
            function Gr(t) {
              var n = t[Hr];
              if (!n && t[Kr]) {
                var e = Mr(t[Kr]);
                e && e.a && (n = e.a);
              }
              if (!n) throw Error("Invalid additional user info!");
              ("anonymous" != n && "custom" != n) || (n = null),
                (e = !1),
                void 0 !== t.isNewUser
                  ? (e = !!t.isNewUser)
                  : "identitytoolkit#SignupNewUserResponse" === t.kind &&
                    (e = !0),
                qi(this, "providerId", n),
                qi(this, "isNewUser", e);
            }
            function Br(t) {
              Gr.call(this, t),
                qi(this, "profile", Gi((t = Oi(t.rawUserInfo || "{}")) || {}));
            }
            function Wr(t) {
              if ((Br.call(this, t), "facebook.com" != this.providerId))
                throw Error("Invalid provider ID!");
            }
            function Xr(t) {
              if ((Br.call(this, t), "github.com" != this.providerId))
                throw Error("Invalid provider ID!");
              qi(this, "username", (this.profile && this.profile.login) || null);
            }
            function Jr(t) {
              if ((Br.call(this, t), "google.com" != this.providerId))
                throw Error("Invalid provider ID!");
            }
            function Yr(t) {
              if ((Br.call(this, t), "twitter.com" != this.providerId))
                throw Error("Invalid provider ID!");
              qi(this, "username", t.screenName || null);
            }
            function zr(t) {
              var n = Ce(t),
                e = Pe(n, "link"),
                i = Pe(Ce(e), "link");
              return (
                Pe(Ce((n = Pe(n, "deep_link_id"))), "link") || n || i || e || t
              );
            }
            function $r(t, n) {
              if (!t && !n)
                throw new I(
                  "internal-error",
                  "Internal assert: no raw session string available"
                );
              if (t && n)
                throw new I(
                  "internal-error",
                  "Internal assert: unable to determine the session type"
                );
              (this.a = t || null),
                (this.b = n || null),
                (this.type = this.a ? Zr : Qr);
            }
            w(Br, Gr), w(Wr, Br), w(Xr, Br), w(Jr, Br), w(Yr, Br);
            var Zr = "enroll",
              Qr = "signin";
            function to() {}
            function no(t, e) {
              return t
                .then(function (t) {
                  if (t[Ga]) {
                    var n = Mr(t[Ga]);
                    if (!n || e != n.h) throw new I("user-mismatch");
                    return t;
                  }
                  throw new I("user-mismatch");
                })
                .o(function (t) {
                  throw t && t.code && t.code == A + "user-not-found"
                    ? new I("user-mismatch")
                    : t;
                });
            }
            function eo(t, n) {
              if (!n)
                throw new I("internal-error", "failed to construct a credential");
              (this.a = n),
                qi(this, "providerId", t),
                qi(this, "signInMethod", t);
            }
            function io(t) {
              return { pendingToken: t.a, requestUri: "http://localhost" };
            }
            function ro(t) {
              if (
                t &&
                t.providerId &&
                t.signInMethod &&
                0 == t.providerId.indexOf("saml.") &&
                t.pendingToken
              )
                try {
                  return new eo(t.providerId, t.pendingToken);
                } catch (t) {}
              return null;
            }
            function oo(t, n, e) {
              if (((this.a = null), n.idToken || n.accessToken))
                n.idToken && qi(this, "idToken", n.idToken),
                  n.accessToken && qi(this, "accessToken", n.accessToken),
                  n.nonce && !n.pendingToken && qi(this, "nonce", n.nonce),
                  n.pendingToken && (this.a = n.pendingToken);
              else {
                if (!n.oauthToken || !n.oauthTokenSecret)
                  throw new I(
                    "internal-error",
                    "failed to construct a credential"
                  );
                qi(this, "accessToken", n.oauthToken),
                  qi(this, "secret", n.oauthTokenSecret);
              }
              qi(this, "providerId", t), qi(this, "signInMethod", e);
            }
            function ao(t) {
              var n = {};
              return (
                t.idToken && (n.id_token = t.idToken),
                t.accessToken && (n.access_token = t.accessToken),
                t.secret && (n.oauth_token_secret = t.secret),
                (n.providerId = t.providerId),
                t.nonce && !t.a && (n.nonce = t.nonce),
                (n = {
                  postBody: Ge(n).toString(),
                  requestUri: "http://localhost",
                }),
                t.a && (delete n.postBody, (n.pendingToken = t.a)),
                n
              );
            }
            function so(t) {
              if (t && t.providerId && t.signInMethod) {
                var n = {
                  idToken: t.oauthIdToken,
                  accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
                  oauthTokenSecret: t.oauthTokenSecret,
                  oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
                  nonce: t.nonce,
                  pendingToken: t.pendingToken,
                };
                try {
                  return new oo(t.providerId, n, t.signInMethod);
                } catch (t) {}
              }
              return null;
            }
            function uo(t, n) {
              (this.Oc = n || []),
                Ki(this, { providerId: t, isOAuthProvider: !0 }),
                (this.Fb = {}),
                (this.lb = (Fr(t) || {}).Ha || null),
                (this.kb = null);
            }
            function co(t) {
              if ("string" != typeof t || 0 != t.indexOf("saml."))
                throw new I(
                  "argument-error",
                  'SAML provider IDs must be prefixed with "saml."'
                );
              uo.call(this, t, []);
            }
            function ho(t) {
              uo.call(this, t, Ur), (this.a = []);
            }
            function lo() {
              ho.call(this, "facebook.com");
            }
            function fo(t) {
              if (!t)
                throw new I(
                  "argument-error",
                  "credential failed: expected 1 argument (the OAuth access token)."
                );
              var n = t;
              return (
                v(t) && (n = t.accessToken),
                new lo().credential({ accessToken: n })
              );
            }
            function po() {
              ho.call(this, "github.com");
            }
            function vo(t) {
              if (!t)
                throw new I(
                  "argument-error",
                  "credential failed: expected 1 argument (the OAuth access token)."
                );
              var n = t;
              return (
                v(t) && (n = t.accessToken),
                new po().credential({ accessToken: n })
              );
            }
            function mo() {
              ho.call(this, "google.com"), this.Aa("profile");
            }
            function go(t, n) {
              var e = t;
              return (
                v(t) && ((e = t.idToken), (n = t.accessToken)),
                new mo().credential({ idToken: e, accessToken: n })
              );
            }
            function bo() {
              uo.call(this, "twitter.com", jr);
            }
            function yo(t, n) {
              var e = t;
              if (
                (v(e) || (e = { oauthToken: t, oauthTokenSecret: n }),
                !e.oauthToken || !e.oauthTokenSecret)
              )
                throw new I(
                  "argument-error",
                  "credential failed: expected 2 arguments (the OAuth access token and secret)."
                );
              return new oo("twitter.com", e, "twitter.com");
            }
            function wo(t, n, e) {
              (this.a = t),
                (this.f = n),
                qi(this, "providerId", "password"),
                qi(
                  this,
                  "signInMethod",
                  e === To.EMAIL_LINK_SIGN_IN_METHOD
                    ? To.EMAIL_LINK_SIGN_IN_METHOD
                    : To.EMAIL_PASSWORD_SIGN_IN_METHOD
                );
            }
            function Io(t) {
              return t && t.email && t.password
                ? new wo(t.email, t.password, t.signInMethod)
                : null;
            }
            function To() {
              Ki(this, { providerId: "password", isOAuthProvider: !1 });
            }
            function Eo(t, n) {
              if (!(n = Ao(n)))
                throw new I("argument-error", "Invalid email link!");
              return new wo(t, n.code, To.EMAIL_LINK_SIGN_IN_METHOD);
            }
            function Ao(t) {
              return (t = wr((t = zr(t)))) && t.operation === tr ? t : null;
            }
            function ko(t) {
              if (!((t.bb && t.ab) || (t.Ja && t.da)))
                throw new I("internal-error");
              (this.a = t),
                qi(this, "providerId", "phone"),
                (this.ea = "phone"),
                qi(this, "signInMethod", "phone");
            }
            function So(n) {
              if (
                n &&
                "phone" === n.providerId &&
                ((n.verificationId && n.verificationCode) ||
                  (n.temporaryProof && n.phoneNumber))
              ) {
                var e = {};
                return (
                  U(
                    [
                      "verificationId",
                      "verificationCode",
                      "temporaryProof",
                      "phoneNumber",
                    ],
                    function (t) {
                      n[t] && (e[t] = n[t]);
                    }
                  ),
                  new ko(e)
                );
              }
              return null;
            }
            function No(t) {
              return t.a.Ja && t.a.da
                ? { temporaryProof: t.a.Ja, phoneNumber: t.a.da }
                : { sessionInfo: t.a.bb, code: t.a.ab };
            }
            function _o(t) {
              try {
                this.a = t || Bl.auth();
              } catch (t) {
                throw new I(
                  "argument-error",
                  "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp()."
                );
              }
              Ki(this, { providerId: "phone", isOAuthProvider: !1 });
            }
            function Oo(t, n) {
              if (!t) throw new I("missing-verification-id");
              if (!n) throw new I("missing-verification-code");
              return new ko({ bb: t, ab: n });
            }
            function Ro(t) {
              if (t.temporaryProof && t.phoneNumber)
                return new ko({ Ja: t.temporaryProof, da: t.phoneNumber });
              var n = t && t.providerId;
              if (!n || "password" === n) return null;
              var e = t && t.oauthAccessToken,
                i = t && t.oauthTokenSecret,
                r = t && t.nonce,
                o = t && t.oauthIdToken,
                a = t && t.pendingToken;
              try {
                switch (n) {
                  case "google.com":
                    return go(o, e);
                  case "facebook.com":
                    return fo(e);
                  case "github.com":
                    return vo(e);
                  case "twitter.com":
                    return yo(e, i);
                  default:
                    return e || i || o || a
                      ? a
                        ? 0 == n.indexOf("saml.")
                          ? new eo(n, a)
                          : new oo(
                              n,
                              {
                                pendingToken: a,
                                idToken: t.oauthIdToken,
                                accessToken: t.oauthAccessToken,
                              },
                              n
                            )
                        : new ho(n).credential({
                            idToken: o,
                            accessToken: e,
                            rawNonce: r,
                          })
                      : null;
                }
              } catch (t) {
                return null;
              }
            }
            function Po(t) {
              if (!t.isOAuthProvider) throw new I("invalid-oauth-provider");
            }
            function Co(t, n, e, i, r, o, a) {
              if (
                ((this.c = t),
                (this.b = n || null),
                (this.g = e || null),
                (this.f = i || null),
                (this.i = o || null),
                (this.h = a || null),
                (this.a = r || null),
                !this.g && !this.a)
              )
                throw new I("invalid-auth-event");
              if (this.g && this.a) throw new I("invalid-auth-event");
              if (this.g && !this.f) throw new I("invalid-auth-event");
            }
            function Do(t) {
              return (t = t || {}).type
                ? new Co(
                    t.type,
                    t.eventId,
                    t.urlResponse,
                    t.sessionId,
                    t.error && T(t.error),
                    t.postBody,
                    t.tenantId
                  )
                : null;
            }
            function Lo() {
              (this.b = null), (this.a = []);
            }
            ($r.prototype.Fa = function () {
              return this.a ? En(this.a) : En(this.b);
            }),
              ($r.prototype.v = function () {
                return this.type == Zr
                  ? { multiFactorSession: { idToken: this.a } }
                  : { multiFactorSession: { pendingCredential: this.b } };
              }),
              (to.prototype.ia = function () {}),
              (to.prototype.b = function () {}),
              (to.prototype.c = function () {}),
              (to.prototype.v = function () {}),
              (eo.prototype.ia = function (t) {
                return hs(t, io(this));
              }),
              (eo.prototype.b = function (t, n) {
                var e = io(this);
                return (e.idToken = n), ls(t, e);
              }),
              (eo.prototype.c = function (t, n) {
                return no(fs(t, io(this)), n);
              }),
              (eo.prototype.v = function () {
                return {
                  providerId: this.providerId,
                  signInMethod: this.signInMethod,
                  pendingToken: this.a,
                };
              }),
              (oo.prototype.ia = function (t) {
                return hs(t, ao(this));
              }),
              (oo.prototype.b = function (t, n) {
                var e = ao(this);
                return (e.idToken = n), ls(t, e);
              }),
              (oo.prototype.c = function (t, n) {
                return no(fs(t, ao(this)), n);
              }),
              (oo.prototype.v = function () {
                var t = {
                  providerId: this.providerId,
                  signInMethod: this.signInMethod,
                };
                return (
                  this.idToken && (t.oauthIdToken = this.idToken),
                  this.accessToken && (t.oauthAccessToken = this.accessToken),
                  this.secret && (t.oauthTokenSecret = this.secret),
                  this.nonce && (t.nonce = this.nonce),
                  this.a && (t.pendingToken = this.a),
                  t
                );
              }),
              (uo.prototype.Ia = function (t) {
                return (this.Fb = ct(t)), this;
              }),
              w(co, uo),
              w(ho, uo),
              (ho.prototype.Aa = function (t) {
                return K(this.a, t) || this.a.push(t), this;
              }),
              (ho.prototype.Nb = function () {
                return W(this.a);
              }),
              (ho.prototype.credential = function (t, n) {
                var e;
                if (
                  !(e = v(t)
                    ? {
                        idToken: t.idToken || null,
                        accessToken: t.accessToken || null,
                        nonce: t.rawNonce || null,
                      }
                    : { idToken: t || null, accessToken: n || null }).idToken &&
                  !e.accessToken
                )
                  throw new I(
                    "argument-error",
                    "credential failed: must provide the ID token and/or the access token."
                  );
                return new oo(this.providerId, e, this.providerId);
              }),
              w(lo, ho),
              qi(lo, "PROVIDER_ID", "facebook.com"),
              qi(lo, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"),
              w(po, ho),
              qi(po, "PROVIDER_ID", "github.com"),
              qi(po, "GITHUB_SIGN_IN_METHOD", "github.com"),
              w(mo, ho),
              qi(mo, "PROVIDER_ID", "google.com"),
              qi(mo, "GOOGLE_SIGN_IN_METHOD", "google.com"),
              w(bo, uo),
              qi(bo, "PROVIDER_ID", "twitter.com"),
              qi(bo, "TWITTER_SIGN_IN_METHOD", "twitter.com"),
              (wo.prototype.ia = function (t) {
                return this.signInMethod == To.EMAIL_LINK_SIGN_IN_METHOD
                  ? Xs(t, ws, { email: this.a, oobCode: this.f })
                  : Xs(t, Ks, { email: this.a, password: this.f });
              }),
              (wo.prototype.b = function (t, n) {
                return this.signInMethod == To.EMAIL_LINK_SIGN_IN_METHOD
                  ? Xs(t, Is, { idToken: n, email: this.a, oobCode: this.f })
                  : Xs(t, Ls, { idToken: n, email: this.a, password: this.f });
              }),
              (wo.prototype.c = function (t, n) {
                return no(this.ia(t), n);
              }),
              (wo.prototype.v = function () {
                return {
                  email: this.a,
                  password: this.f,
                  signInMethod: this.signInMethod,
                };
              }),
              Ki(To, { PROVIDER_ID: "password" }),
              Ki(To, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" }),
              Ki(To, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" }),
              (ko.prototype.ia = function (t) {
                return t.cb(No(this));
              }),
              (ko.prototype.b = function (t, n) {
                var e = No(this);
                return (e.idToken = n), Xs(t, Gs, e);
              }),
              (ko.prototype.c = function (t, n) {
                var e = No(this);
                return (e.operation = "REAUTH"), no((t = Xs(t, Bs, e)), n);
              }),
              (ko.prototype.v = function () {
                var t = { providerId: "phone" };
                return (
                  this.a.bb && (t.verificationId = this.a.bb),
                  this.a.ab && (t.verificationCode = this.a.ab),
                  this.a.Ja && (t.temporaryProof = this.a.Ja),
                  this.a.da && (t.phoneNumber = this.a.da),
                  t
                );
              }),
              (_o.prototype.cb = function (i, r) {
                var o = this.a.b;
                return En(r.verify()).then(function (n) {
                  if ("string" != typeof n)
                    throw new I(
                      "argument-error",
                      "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string."
                    );
                  switch (r.type) {
                    case "recaptcha":
                      var t = v(i) ? i.session : null,
                        e = v(i) ? i.phoneNumber : i;
                      return (t && t.type == Zr
                        ? t.Fa().then(function (t) {
                            return (function (t, n) {
                              return Xs(t, xs, n).then(function (t) {
                                return t.phoneSessionInfo.sessionInfo;
                              });
                            })(o, {
                              idToken: t,
                              phoneEnrollmentInfo: {
                                phoneNumber: e,
                                recaptchaToken: n,
                              },
                            });
                          })
                        : t && t.type == Qr
                        ? t.Fa().then(function (t) {
                            return (function (t, n) {
                              return Xs(t, js, n).then(function (t) {
                                return t.phoneResponseInfo.sessionInfo;
                              });
                            })(o, {
                              mfaPendingCredential: t,
                              mfaEnrollmentId:
                                (i.multiFactorHint && i.multiFactorHint.uid) ||
                                i.multiFactorUid,
                              phoneSignInInfo: { recaptchaToken: n },
                            });
                          })
                        : (function (t, n) {
                            return Xs(t, Cs, n);
                          })(o, { phoneNumber: e, recaptchaToken: n })
                      ).then(
                        function (t) {
                          return "function" == typeof r.reset && r.reset(), t;
                        },
                        function (t) {
                          throw ("function" == typeof r.reset && r.reset(), t);
                        }
                      );
                    default:
                      throw new I(
                        "argument-error",
                        'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
                      );
                  }
                });
              }),
              Ki(_o, { PROVIDER_ID: "phone" }),
              Ki(_o, { PHONE_SIGN_IN_METHOD: "phone" }),
              (Co.prototype.getUid = function () {
                var t = [];
                return (
                  t.push(this.c),
                  this.b && t.push(this.b),
                  this.f && t.push(this.f),
                  this.h && t.push(this.h),
                  t.join("-")
                );
              }),
              (Co.prototype.S = function () {
                return this.h;
              }),
              (Co.prototype.v = function () {
                return {
                  type: this.c,
                  eventId: this.b,
                  urlResponse: this.g,
                  sessionId: this.f,
                  postBody: this.i,
                  tenantId: this.h,
                  error: this.a && this.a.v(),
                };
              });
            var Mo,
              xo = null;
            function jo(t) {
              var n = "unauthorized-domain",
                e = void 0,
                i = Ce(t);
              (t = i.b),
                "chrome-extension" == (i = i.f)
                  ? (e = xt(
                      "This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",
                      t
                    ))
                  : "http" == i || "https" == i
                  ? (e = xt(
                      "This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",
                      t
                    ))
                  : (n = "operation-not-supported-in-this-environment"),
                I.call(this, n, e);
            }
            function Uo(t, n, e) {
              I.call(this, t, e),
                (t = n || {}).Gb && qi(this, "email", t.Gb),
                t.da && qi(this, "phoneNumber", t.da),
                t.credential && qi(this, "credential", t.credential),
                t.Wb && qi(this, "tenantId", t.Wb);
            }
            function Vo(t) {
              if (t.code) {
                var n = t.code || "";
                0 == n.indexOf(A) && (n = n.substring(A.length));
                var e = { credential: Ro(t), Wb: t.tenantId };
                if (t.email) e.Gb = t.email;
                else if (t.phoneNumber) e.da = t.phoneNumber;
                else if (!e.credential) return new I(n, t.message || void 0);
                return new Uo(n, e, t.message);
              }
              return null;
            }
            function Fo() {}
            function qo(t) {
              return t.c || (t.c = t.b());
            }
            function Ko() {}
            function Ho(t) {
              if (
                t.f ||
                "undefined" != typeof XMLHttpRequest ||
                "undefined" == typeof ActiveXObject
              )
                return t.f;
              for (
                var n = [
                    "MSXML2.XMLHTTP.6.0",
                    "MSXML2.XMLHTTP.3.0",
                    "MSXML2.XMLHTTP",
                    "Microsoft.XMLHTTP",
                  ],
                  e = 0;
                e < n.length;
                e++
              ) {
                var i = n[e];
                try {
                  return new ActiveXObject(i), (t.f = i);
                } catch (t) {}
              }
              throw Error(
                "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
              );
            }
            function Go() {}
            function Bo() {
              (this.a = new XDomainRequest()),
                (this.readyState = 0),
                (this.onreadystatechange = null),
                (this.responseType = this.responseText = this.response = ""),
                (this.status = -1),
                (this.statusText = ""),
                (this.a.onload = g(this.oc, this)),
                (this.a.onerror = g(this.Pb, this)),
                (this.a.onprogress = g(this.pc, this)),
                (this.a.ontimeout = g(this.tc, this));
            }
            function Wo(t, n) {
              (t.readyState = n), t.onreadystatechange && t.onreadystatechange();
            }
            function Xo(t, n, e) {
              this.reset(t, n, e, void 0, void 0);
            }
            function Jo(t) {
              (this.f = t), (this.b = this.c = this.a = null);
            }
            function Yo(t, n) {
              (this.name = t), (this.value = n);
            }
            w(jo, I),
              w(Uo, I),
              (Uo.prototype.v = function () {
                var t = { code: this.code, message: this.message };
                this.email && (t.email = this.email),
                  this.phoneNumber && (t.phoneNumber = this.phoneNumber),
                  this.tenantId && (t.tenantId = this.tenantId);
                var n = this.credential && this.credential.v();
                return n && lt(t, n), t;
              }),
              (Uo.prototype.toJSON = function () {
                return this.v();
              }),
              (Fo.prototype.c = null),
              w(Ko, Fo),
              (Ko.prototype.a = function () {
                var t = Ho(this);
                return t ? new ActiveXObject(t) : new XMLHttpRequest();
              }),
              (Ko.prototype.b = function () {
                var t = {};
                return Ho(this) && ((t[0] = !0), (t[1] = !0)), t;
              }),
              (Mo = new Ko()),
              w(Go, Fo),
              (Go.prototype.a = function () {
                var t = new XMLHttpRequest();
                if ("withCredentials" in t) return t;
                if ("undefined" != typeof XDomainRequest) return new Bo();
                throw Error("Unsupported browser");
              }),
              (Go.prototype.b = function () {
                return {};
              }),
              ((t = Bo.prototype).open = function (t, n, e) {
                if (null != e && !e)
                  throw Error("Only async requests are supported.");
                this.a.open(t, n);
              }),
              (t.send = function (t) {
                if (t) {
                  if ("string" != typeof t)
                    throw Error("Only string data is supported");
                  this.a.send(t);
                } else this.a.send();
              }),
              (t.abort = function () {
                this.a.abort();
              }),
              (t.setRequestHeader = function () {}),
              (t.getResponseHeader = function (t) {
                return "content-type" == t.toLowerCase()
                  ? this.a.contentType
                  : "";
              }),
              (t.oc = function () {
                (this.status = 200),
                  (this.response = this.responseText = this.a.responseText),
                  Wo(this, 4);
              }),
              (t.Pb = function () {
                (this.status = 500),
                  (this.response = this.responseText = ""),
                  Wo(this, 4);
              }),
              (t.tc = function () {
                this.Pb();
              }),
              (t.pc = function () {
                (this.status = 200), Wo(this, 1);
              }),
              (t.getAllResponseHeaders = function () {
                return "content-type: " + this.a.contentType;
              }),
              (Xo.prototype.a = null),
              (Xo.prototype.reset = function (t, n, e, i, r) {
                delete this.a;
              }),
              (Yo.prototype.toString = function () {
                return this.name;
              });
            var zo = new Yo("SEVERE", 1e3),
              $o = new Yo("WARNING", 900),
              Zo = new Yo("CONFIG", 700),
              Qo = new Yo("FINE", 500);
            Jo.prototype.log = function (t, n, e) {
              if (
                t.value >=
                (function t(n) {
                  return n.c
                    ? n.c
                    : n.a
                    ? t(n.a)
                    : (P("Root logger has no level set."), null);
                })(this).value
              )
                for (
                  p(n) && (n = n()),
                    t = new Xo(t, String(n), this.f),
                    e && (t.a = e),
                    e = this;
                  e;
  
                )
                  e = e.a;
            };
            var ta,
              na = {},
              ea = null;
            function ia(t) {
              var n;
              if (
                (ea || ((ea = new Jo("")), ((na[""] = ea).c = Zo)), !(n = na[t]))
              ) {
                n = new Jo(t);
                var e = t.lastIndexOf("."),
                  i = t.substr(e + 1);
                (e = ia(t.substr(0, e))).b || (e.b = {}),
                  ((e.b[i] = n).a = e),
                  (na[t] = n);
              }
              return n;
            }
            function ra(t, n) {
              t && t.log(Qo, n, void 0);
            }
            function oa(t) {
              this.f = t;
            }
            function aa(t) {
              pe.call(this),
                (this.s = t),
                (this.readyState = sa),
                (this.status = 0),
                (this.responseType = this.responseText = this.response = this.statusText =
                  ""),
                (this.onreadystatechange = null),
                (this.i = new Headers()),
                (this.b = null),
                (this.m = "GET"),
                (this.g = ""),
                (this.a = !1),
                (this.h = ia("goog.net.FetchXmlHttp")),
                (this.l = this.c = this.f = null);
            }
            w(oa, Fo),
              (oa.prototype.a = function () {
                return new aa(this.f);
              }),
              (oa.prototype.b =
                ((ta = {}),
                function () {
                  return ta;
                })),
              w(aa, pe);
            var sa = 0;
            function ua(t) {
              t.c.read().then(t.nc.bind(t)).catch(t.Sa.bind(t));
            }
            function ca(t, n) {
              n &&
                t.f &&
                ((t.status = t.f.status), (t.statusText = t.f.statusText)),
                (t.readyState = 4),
                (t.f = null),
                (t.c = null),
                (t.l = null),
                ha(t);
            }
            function ha(t) {
              t.onreadystatechange && t.onreadystatechange.call(t);
            }
            function la(t) {
              pe.call(this),
                (this.headers = new Te()),
                (this.D = t || null),
                (this.c = !1),
                (this.B = this.a = null),
                (this.h = this.P = this.l = ""),
                (this.f = this.O = this.i = this.N = !1),
                (this.g = 0),
                (this.s = null),
                (this.m = fa),
                (this.w = this.R = !1);
            }
            ((t = aa.prototype).open = function (t, n) {
              if (this.readyState != sa)
                throw (this.abort(), Error("Error reopening a connection"));
              (this.m = t), (this.g = n), (this.readyState = 1), ha(this);
            }),
              (t.send = function (t) {
                if (1 != this.readyState)
                  throw (this.abort(), Error("need to call open() first. "));
                this.a = !0;
                var n = {
                  headers: this.i,
                  method: this.m,
                  credentials: void 0,
                  cache: void 0,
                };
                t && (n.body = t),
                  this.s
                    .fetch(new Request(this.g, n))
                    .then(this.sc.bind(this), this.Sa.bind(this));
              }),
              (t.abort = function () {
                (this.response = this.responseText = ""),
                  (this.i = new Headers()),
                  (this.status = 0),
                  this.c && this.c.cancel("Request was aborted."),
                  1 <= this.readyState &&
                    this.a &&
                    4 != this.readyState &&
                    ((this.a = !1), ca(this, !1)),
                  (this.readyState = sa);
              }),
              (t.sc = function (t) {
                this.a &&
                  ((this.f = t),
                  this.b ||
                    ((this.b = t.headers), (this.readyState = 2), ha(this)),
                  this.a &&
                    ((this.readyState = 3),
                    ha(this),
                    this.a &&
                      ("arraybuffer" === this.responseType
                        ? t
                            .arrayBuffer()
                            .then(this.qc.bind(this), this.Sa.bind(this))
                        : void 0 !== l.ReadableStream && "body" in t
                        ? ((this.response = this.responseText = ""),
                          (this.c = t.body.getReader()),
                          (this.l = new TextDecoder()),
                          ua(this))
                        : t
                            .text()
                            .then(this.rc.bind(this), this.Sa.bind(this)))));
              }),
              (t.nc = function (t) {
                if (this.a) {
                  var n = this.l.decode(t.value ? t.value : new Uint8Array(0), {
                    stream: !t.done,
                  });
                  n && (this.response = this.responseText += n),
                    t.done ? ca(this, !0) : ha(this),
                    3 == this.readyState && ua(this);
                }
              }),
              (t.rc = function (t) {
                this.a && ((this.response = this.responseText = t), ca(this, !0));
              }),
              (t.qc = function (t) {
                this.a && ((this.response = t), ca(this, !0));
              }),
              (t.Sa = function (t) {
                var n = this.h;
                n &&
                  n.log(
                    $o,
                    "Failed to fetch url " + this.g,
                    t instanceof Error ? t : Error(t)
                  ),
                  this.a && ca(this, !0);
              }),
              (t.setRequestHeader = function (t, n) {
                this.i.append(t, n);
              }),
              (t.getResponseHeader = function (t) {
                return this.b
                  ? this.b.get(t.toLowerCase()) || ""
                  : ((t = this.h) &&
                      t.log(
                        $o,
                        "Attempting to get response header but no headers have been received for url: " +
                          this.g,
                        void 0
                      ),
                    "");
              }),
              (t.getAllResponseHeaders = function () {
                if (!this.b) {
                  var t = this.h;
                  return (
                    t &&
                      t.log(
                        $o,
                        "Attempting to get all response headers but no headers have been received for url: " +
                          this.g,
                        void 0
                      ),
                    ""
                  );
                }
                t = [];
                for (var n = this.b.entries(), e = n.next(); !e.done; )
                  (e = e.value), t.push(e[0] + ": " + e[1]), (e = n.next());
                return t.join("\r\n");
              }),
              w(la, pe);
            var fa = "";
            la.prototype.b = ia("goog.net.XhrIo");
            var da = /^https?$/i,
              pa = ["POST", "PUT"];
            function va(n, t, e, i, r) {
              if (n.a)
                throw Error(
                  "[goog.net.XhrIo] Object is active with another request=" +
                    n.l +
                    "; newUri=" +
                    t
                );
              (e = e ? e.toUpperCase() : "GET"),
                (n.l = t),
                (n.h = ""),
                (n.P = e),
                (n.N = !1),
                (n.c = !0),
                (n.a = n.D ? n.D.a() : Mo.a()),
                (n.B = n.D ? qo(n.D) : qo(Mo)),
                (n.a.onreadystatechange = g(n.Sb, n));
              try {
                ra(n.b, Aa(n, "Opening Xhr")),
                  (n.O = !0),
                  n.a.open(e, String(t), !0),
                  (n.O = !1);
              } catch (t) {
                return (
                  ra(n.b, Aa(n, "Error opening Xhr: " + t.message)), void ga(n, t)
                );
              }
              t = i || "";
              var o = new Te(n.headers);
              r &&
                (function (t, n) {
                  if (t.forEach && "function" == typeof t.forEach)
                    t.forEach(n, void 0);
                  else if (d(t) || "string" == typeof t) U(t, n, void 0);
                  else
                    for (
                      var e = Ie(t), i = we(t), r = i.length, o = 0;
                      o < r;
                      o++
                    )
                      n.call(void 0, i[o], e && e[o], t);
                })(r, function (t, n) {
                  o.set(n, t);
                }),
                (r = (function (t) {
                  t: {
                    for (
                      var n = ma,
                        e = t.length,
                        i = "string" == typeof t ? t.split("") : t,
                        r = 0;
                      r < e;
                      r++
                    )
                      if (r in i && n.call(void 0, i[r], r, t)) {
                        n = r;
                        break t;
                      }
                    n = -1;
                  }
                  return n < 0 ? null : "string" == typeof t ? t.charAt(n) : t[n];
                })(o.X())),
                (i = l.FormData && t instanceof l.FormData),
                !K(pa, e) ||
                  r ||
                  i ||
                  o.set(
                    "Content-Type",
                    "application/x-www-form-urlencoded;charset=utf-8"
                  ),
                o.forEach(function (t, n) {
                  this.a.setRequestHeader(n, t);
                }, n),
                n.m && (n.a.responseType = n.m),
                "withCredentials" in n.a &&
                  n.a.withCredentials !== n.R &&
                  (n.a.withCredentials = n.R);
              try {
                Ia(n),
                  0 < n.g &&
                    ((n.w = (function (t) {
                      return (
                        Kt &&
                        Qt(9) &&
                        "number" == typeof t.timeout &&
                        void 0 !== t.ontimeout
                      );
                    })(n.a)),
                    ra(
                      n.b,
                      Aa(
                        n,
                        "Will abort after " +
                          n.g +
                          "ms if incomplete, xhr2 " +
                          n.w
                      )
                    ),
                    n.w
                      ? ((n.a.timeout = n.g), (n.a.ontimeout = g(n.Ka, n)))
                      : (n.s = be(n.Ka, n.g, n))),
                  ra(n.b, Aa(n, "Sending request")),
                  (n.i = !0),
                  n.a.send(t),
                  (n.i = !1);
              } catch (t) {
                ra(n.b, Aa(n, "Send error: " + t.message)), ga(n, t);
              }
            }
            function ma(t) {
              return "content-type" == t.toLowerCase();
            }
            function ga(t, n) {
              (t.c = !1),
                t.a && ((t.f = !0), t.a.abort(), (t.f = !1)),
                (t.h = n),
                ba(t),
                wa(t);
            }
            function ba(t) {
              t.N ||
                ((t.N = !0),
                t.dispatchEvent("complete"),
                t.dispatchEvent("error"));
            }
            function ya(n) {
              if (n.c && void 0 !== u)
                if (n.B[1] && 4 == Ta(n) && 2 == Ea(n))
                  ra(n.b, Aa(n, "Local request error detected and ignored"));
                else if (n.i && 4 == Ta(n)) be(n.Sb, 0, n);
                else if ((n.dispatchEvent("readystatechange"), 4 == Ta(n))) {
                  ra(n.b, Aa(n, "Request complete")), (n.c = !1);
                  try {
                    var t,
                      e = Ea(n);
                    t: switch (e) {
                      case 200:
                      case 201:
                      case 202:
                      case 204:
                      case 206:
                      case 304:
                      case 1223:
                        var i = !0;
                        break t;
                      default:
                        i = !1;
                    }
                    if (!(t = i)) {
                      var r;
                      if ((r = 0 === e)) {
                        var o = String(n.l).match(ke)[1] || null;
                        if (!o && l.self && l.self.location) {
                          var a = l.self.location.protocol;
                          o = a.substr(0, a.length - 1);
                        }
                        r = !da.test(o ? o.toLowerCase() : "");
                      }
                      t = r;
                    }
                    if (t)
                      n.dispatchEvent("complete"), n.dispatchEvent("success");
                    else {
                      try {
                        var s = 2 < Ta(n) ? n.a.statusText : "";
                      } catch (t) {
                        ra(n.b, "Can not get status: " + t.message), (s = "");
                      }
                      (n.h = s + " [" + Ea(n) + "]"), ba(n);
                    }
                  } finally {
                    wa(n);
                  }
                }
            }
            function wa(n, t) {
              if (n.a) {
                Ia(n);
                var e = n.a,
                  i = n.B[0] ? f : null;
                (n.a = null), (n.B = null), t || n.dispatchEvent("ready");
                try {
                  e.onreadystatechange = i;
                } catch (t) {
                  (n = n.b) &&
                    n.log(
                      zo,
                      "Problem encountered resetting onreadystatechange: " +
                        t.message,
                      void 0
                    );
                }
              }
            }
            function Ia(t) {
              t.a && t.w && (t.a.ontimeout = null),
                t.s && (l.clearTimeout(t.s), (t.s = null));
            }
            function Ta(t) {
              return t.a ? t.a.readyState : 0;
            }
            function Ea(t) {
              try {
                return 2 < Ta(t) ? t.a.status : -1;
              } catch (t) {
                return -1;
              }
            }
            function Aa(t, n) {
              return n + " [" + t.P + " " + t.l + " " + Ea(t) + "]";
            }
            function ka(t) {
              var n = xa;
              (this.g = []),
                (this.w = n),
                (this.s = t || null),
                (this.f = this.a = !1),
                (this.c = void 0),
                (this.u = this.B = this.i = !1),
                (this.h = 0),
                (this.b = null),
                (this.l = 0);
            }
            function Sa(t, n, e) {
              (t.a = !0), (t.c = e), (t.f = !n), Ra(t);
            }
            function Na(t) {
              if (t.a) {
                if (!t.u) throw new Pa(t);
                t.u = !1;
              }
            }
            function _a(t, n, e, i) {
              t.g.push([n, e, i]), t.a && Ra(t);
            }
            function Oa(t) {
              return q(t.g, function (t) {
                return p(t[1]);
              });
            }
            function Ra(n) {
              if (n.h && n.a && Oa(n)) {
                var e = n.h,
                  i = La[e];
                i && (l.clearTimeout(i.a), delete La[e]), (n.h = 0);
              }
              n.b && (n.b.l--, delete n.b), (e = n.c);
              for (var t = (i = !1); n.g.length && !n.i; ) {
                var r = n.g.shift(),
                  o = r[0],
                  a = r[1];
                if (((r = r[2]), (o = n.f ? a : o)))
                  try {
                    var s = o.call(r || n.s, e);
                    void 0 !== s &&
                      ((n.f = n.f && (s == e || s instanceof Error)),
                      (n.c = e = s)),
                      (_(e) ||
                        ("function" == typeof l.Promise &&
                          e instanceof l.Promise)) &&
                        ((t = !0), (n.i = !0));
                  } catch (t) {
                    (e = t), (n.f = !0), Oa(n) || (i = !0);
                  }
              }
              (n.c = e),
                t &&
                  ((s = g(n.m, n, !0)),
                  (t = g(n.m, n, !1)),
                  e instanceof ka ? (_a(e, s, t), (e.B = !0)) : e.then(s, t)),
                i && ((e = new Da(e)), (La[e.a] = e), (n.h = e.a));
            }
            function Pa() {
              O.call(this);
            }
            function Ca() {
              O.call(this);
            }
            function Da(t) {
              (this.a = l.setTimeout(g(this.c, this), 0)), (this.b = t);
            }
            ((t = la.prototype).Ka = function () {
              void 0 !== u &&
                this.a &&
                ((this.h = "Timed out after " + this.g + "ms, aborting"),
                ra(this.b, Aa(this, this.h)),
                this.dispatchEvent("timeout"),
                this.abort(8));
            }),
              (t.abort = function () {
                this.a &&
                  this.c &&
                  (ra(this.b, Aa(this, "Aborting")),
                  (this.c = !1),
                  (this.f = !0),
                  this.a.abort(),
                  (this.f = !1),
                  this.dispatchEvent("complete"),
                  this.dispatchEvent("abort"),
                  wa(this));
              }),
              (t.Ba = function () {
                this.a &&
                  (this.c &&
                    ((this.c = !1), (this.f = !0), this.a.abort(), (this.f = !1)),
                  wa(this, !0)),
                  la.Za.Ba.call(this);
              }),
              (t.Sb = function () {
                this.wa || (this.O || this.i || this.f ? ya(this) : this.Hc());
              }),
              (t.Hc = function () {
                ya(this);
              }),
              (t.getResponse = function () {
                try {
                  if (!this.a) return null;
                  if ("response" in this.a) return this.a.response;
                  switch (this.m) {
                    case fa:
                    case "text":
                      return this.a.responseText;
                    case "arraybuffer":
                      if ("mozResponseArrayBuffer" in this.a)
                        return this.a.mozResponseArrayBuffer;
                  }
                  var t = this.b;
                  return (
                    t &&
                      t.log(
                        zo,
                        "Response type " +
                          this.m +
                          " is not supported on this browser",
                        void 0
                      ),
                    null
                  );
                } catch (t) {
                  return ra(this.b, "Can not get response: " + t.message), null;
                }
              }),
              (ka.prototype.cancel = function (t) {
                if (this.a) this.c instanceof ka && this.c.cancel();
                else {
                  if (this.b) {
                    var n = this.b;
                    delete this.b,
                      t ? n.cancel(t) : (n.l--, n.l <= 0 && n.cancel());
                  }
                  this.w ? this.w.call(this.s, this) : (this.u = !0),
                    this.a || ((t = new Ca(this)), Na(this), Sa(this, !1, t));
                }
              }),
              (ka.prototype.m = function (t, n) {
                (this.i = !1), Sa(this, t, n);
              }),
              (ka.prototype.then = function (t, n, e) {
                var i,
                  r,
                  o = new mn(function (t, n) {
                    (i = t), (r = n);
                  });
                return (
                  _a(this, i, function (t) {
                    t instanceof Ca ? o.cancel() : r(t);
                  }),
                  o.then(t, n, e)
                );
              }),
              (ka.prototype.$goog_Thenable = !0),
              w(Pa, O),
              (Pa.prototype.message = "Deferred has already fired"),
              (Pa.prototype.name = "AlreadyCalledError"),
              w(Ca, O),
              (Ca.prototype.message = "Deferred was canceled"),
              (Ca.prototype.name = "CanceledError"),
              (Da.prototype.c = function () {
                throw (delete La[this.a], this.b);
              });
            var La = {};
            function Ma(t) {
              var n,
                e = document,
                i = yt(t).toString(),
                r = un(document, "SCRIPT"),
                o = { Tb: r, Ka: void 0 },
                a = new ka(o);
              return (
                (n = window.setTimeout(function () {
                  ja(r, !0);
                  var t = new Fa(Va, "Timeout reached for loading script " + i);
                  Na(a), Sa(a, !1, t);
                }, 5e3)),
                (o.Ka = n),
                (r.onload = r.onreadystatechange = function () {
                  (r.readyState &&
                    "loaded" != r.readyState &&
                    "complete" != r.readyState) ||
                    (ja(r, !1, n), Na(a), Sa(a, !0, null));
                }),
                (r.onerror = function () {
                  ja(r, !0, n);
                  var t = new Fa(Ua, "Error while loading script " + i);
                  Na(a), Sa(a, !1, t);
                }),
                lt((o = {}), { type: "text/javascript", charset: "UTF-8" }),
                en(r, o),
                (function (t, n) {
                  ft(t, "HTMLScriptElement"),
                    (t.src = yt(n)),
                    null === h &&
                      (h =
                        (n =
                          (n = l.document).querySelector &&
                          n.querySelector("script[nonce]")) &&
                        (n = n.nonce || n.getAttribute("nonce")) &&
                        s.test(n)
                          ? n
                          : ""),
                    (n = h) && t.setAttribute("nonce", n);
                })(r, t),
                (function (t) {
                  var n;
                  return (n = (t || document).getElementsByTagName("HEAD")) &&
                    0 != n.length
                    ? n[0]
                    : t.documentElement;
                })(e).appendChild(r),
                a
              );
            }
            function xa() {
              if (this && this.Tb) {
                var t = this.Tb;
                t && "SCRIPT" == t.tagName && ja(t, !0, this.Ka);
              }
            }
            function ja(t, n, e) {
              null != e && l.clearTimeout(e),
                (t.onload = f),
                (t.onerror = f),
                (t.onreadystatechange = f),
                n &&
                  window.setTimeout(function () {
                    t && t.parentNode && t.parentNode.removeChild(t);
                  }, 0);
            }
            var Ua = 0,
              Va = 1;
            function Fa(t, n) {
              var e = "Jsloader error (code #" + t + ")";
              n && (e += ": " + n), O.call(this, e), (this.code = t);
            }
            function qa(t) {
              this.f = t;
            }
            function Ka(t, n, e) {
              if (
                ((this.c = t),
                (t = n || {}),
                (this.u =
                  t.secureTokenEndpoint ||
                  "https://securetoken.googleapis.com/v1/token"),
                (this.m = t.secureTokenTimeout || Ba),
                (this.g = ct(t.secureTokenHeaders || Wa)),
                (this.h =
                  t.firebaseEndpoint ||
                  "https://www.googleapis.com/identitytoolkit/v3/relyingparty/"),
                (this.l =
                  t.identityPlatformEndpoint ||
                  "https://identitytoolkit.googleapis.com/v2/"),
                (this.i = t.firebaseTimeout || Xa),
                (this.a = ct(t.firebaseHeaders || Ja)),
                e &&
                  ((this.a["X-Client-Version"] = e),
                  (this.g["X-Client-Version"] = e)),
                (e = "Node" == di()),
                !(e =
                  l.XMLHttpRequest ||
                  (e && Bl.INTERNAL.node && Bl.INTERNAL.node.XMLHttpRequest)) &&
                  !fi())
              )
                throw new I(
                  "internal-error",
                  "The XMLHttpRequest compatibility library was not found."
                );
              (this.f = void 0),
                fi()
                  ? (this.f = new oa(self))
                  : pi()
                  ? (this.f = new qa(e))
                  : (this.f = new Go()),
                (this.b = null);
            }
            w(Fa, O),
              w(qa, Fo),
              (qa.prototype.a = function () {
                return new this.f();
              }),
              (qa.prototype.b = function () {
                return {};
              });
            var Ha,
              Ga = "idToken",
              Ba = new Di(3e4, 6e4),
              Wa = { "Content-Type": "application/x-www-form-urlencoded" },
              Xa = new Di(3e4, 6e4),
              Ja = { "Content-Type": "application/json" };
            function Ya(t, n) {
              n
                ? (t.a["X-Firebase-Locale"] = n)
                : delete t.a["X-Firebase-Locale"];
            }
            function za(t, n) {
              n
                ? ((t.a["X-Client-Version"] = n), (t.g["X-Client-Version"] = n))
                : (delete t.a["X-Client-Version"],
                  delete t.g["X-Client-Version"]);
            }
            function $a(t, n, e, i, r, o, a) {
              (t =
                (function () {
                  var t = wi();
                  return (
                    !(
                      (t =
                        gi(t) != mi
                          ? null
                          : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length
                          ? parseInt(t[1], 10)
                          : null) && t < 30
                    ) &&
                    (!Kt || !$t || 9 < $t)
                  );
                })() || fi()
                  ? g(t.w, t)
                  : ((Ha =
                      Ha ||
                      new mn(function (t, n) {
                        !(function (t, n) {
                          if (((window.gapi || {}).client || {}).request) t();
                          else {
                            (l[Qa] = function () {
                              ((window.gapi || {}).client || {}).request
                                ? t()
                                : n(Error("CORS_UNSUPPORTED"));
                            }),
                              (function (t, n) {
                                _a(t, null, n, void 0);
                              })(Ma(wt(Za, { onload: Qa })), function () {
                                n(Error("CORS_UNSUPPORTED"));
                              });
                          }
                        })(t, n);
                      })),
                    g(t.s, t)))(n, e, i, r, o, a);
            }
            (Ka.prototype.S = function () {
              return this.b;
            }),
              (Ka.prototype.w = function (t, e, n, i, r, o) {
                if (
                  fi() &&
                  (void 0 === l.fetch ||
                    void 0 === l.Headers ||
                    void 0 === l.Request)
                )
                  throw new I(
                    "operation-not-supported-in-this-environment",
                    "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment."
                  );
                var a = new la(this.f);
                if (o) {
                  a.g = Math.max(0, o);
                  var s = setTimeout(function () {
                    a.dispatchEvent("timeout");
                  }, o);
                }
                ve(a, "complete", function () {
                  s && clearTimeout(s);
                  var n = null;
                  try {
                    n =
                      JSON.parse(
                        (function (n) {
                          try {
                            return n.a ? n.a.responseText : "";
                          } catch (t) {
                            return (
                              ra(n.b, "Can not get responseText: " + t.message),
                              ""
                            );
                          }
                        })(this)
                      ) || null;
                  } catch (t) {
                    n = null;
                  }
                  e && e(n);
                }),
                  me(a, "ready", function () {
                    s && clearTimeout(s), Vn(this);
                  }),
                  me(a, "timeout", function () {
                    s && clearTimeout(s), Vn(this), e && e(null);
                  }),
                  va(a, t, n, i, r);
              });
            var Za = new dt(
                mt,
                "https://apis.google.com/js/client.js?onload=%{onload}"
              ),
              Qa = "__fcb" + Math.floor(1e6 * Math.random()).toString();
            function ts(t, n, e, i, r, o, a) {
              var s = Ce(n + e);
              Re(s, "key", t.c), a && Re(s, "cb", y().toString());
              var u = "GET" == i;
              if (u) for (var c in r) r.hasOwnProperty(c) && Re(s, c, r[c]);
              return new mn(function (n, e) {
                $a(
                  t,
                  s.toString(),
                  function (t) {
                    t
                      ? t.error
                        ? e(Ys(t, o || {}))
                        : n(t)
                      : e(new I("network-request-failed"));
                  },
                  i,
                  u ? void 0 : ze(_i(r)),
                  t.a,
                  t.i.get()
                );
              });
            }
            function ns(t) {
              if ("string" != typeof (t = t.email) || !ui.test(t))
                throw new I("invalid-email");
            }
            function es(t) {
              "email" in t && ns(t);
            }
            function is(t) {
              if (!t[Ga]) {
                if (t.mfaPendingCredential)
                  throw new I("multi-factor-auth-required", null, ct(t));
                throw new I("internal-error");
              }
            }
            function rs(t) {
              if (t.phoneNumber || t.temporaryProof) {
                if (!t.phoneNumber || !t.temporaryProof)
                  throw new I("internal-error");
              } else {
                if (!t.sessionInfo) throw new I("missing-verification-id");
                if (!t.code) throw new I("missing-verification-code");
              }
            }
            (Ka.prototype.s = function (t, e, i, r, o) {
              var a = this;
              Ha.then(function () {
                window.gapi.client.setApiKey(a.c);
                var n = window.gapi.auth.getToken();
                window.gapi.auth.setToken(null),
                  window.gapi.client.request({
                    path: t,
                    method: i,
                    body: r,
                    headers: o,
                    authType: "none",
                    callback: function (t) {
                      window.gapi.auth.setToken(n), e && e(t);
                    },
                  });
              }).o(function (t) {
                e &&
                  e({
                    error: { message: (t && t.message) || "CORS_UNSUPPORTED" },
                  });
              });
            }),
              (Ka.prototype.vb = function () {
                return Xs(this, Ms, {});
              }),
              (Ka.prototype.xb = function (t, n) {
                return Xs(this, Ds, { idToken: t, email: n });
              }),
              (Ka.prototype.yb = function (t, n) {
                return Xs(this, Ls, { idToken: t, password: n });
              });
            var os = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };
            function as(t) {
              if (!t.phoneVerificationInfo) throw new I("internal-error");
              if (!t.phoneVerificationInfo.sessionInfo)
                throw new I("missing-verification-id");
              if (!t.phoneVerificationInfo.code)
                throw new I("missing-verification-code");
            }
            function ss(t) {
              if (
                !t.requestUri ||
                (!t.sessionId && !t.postBody && !t.pendingToken)
              )
                throw new I("internal-error");
            }
            function us(t, n) {
              return (
                n.oauthIdToken &&
                  n.providerId &&
                  0 == n.providerId.indexOf("oidc.") &&
                  !n.pendingToken &&
                  (t.sessionId
                    ? (n.nonce = t.sessionId)
                    : t.postBody &&
                      We((t = new Ke(t.postBody)), "nonce") &&
                      (n.nonce = t.get("nonce"))),
                n
              );
            }
            function cs(t) {
              var n = null;
              if (
                (t.needConfirmation
                  ? ((t.code = "account-exists-with-different-credential"),
                    (n = Vo(t)))
                  : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage
                  ? ((t.code = "credential-already-in-use"), (n = Vo(t)))
                  : "EMAIL_EXISTS" == t.errorMessage
                  ? ((t.code = "email-already-in-use"), (n = Vo(t)))
                  : t.errorMessage && (n = Js(t.errorMessage)),
                n)
              )
                throw n;
              is(t);
            }
            function hs(t, n) {
              return (n.returnIdpCredential = !0), Xs(t, Us, n);
            }
            function ls(t, n) {
              return (n.returnIdpCredential = !0), Xs(t, Fs, n);
            }
            function fs(t, n) {
              return (
                (n.returnIdpCredential = !0), (n.autoCreate = !1), Xs(t, Vs, n)
              );
            }
            function ds(t) {
              if (!t.oobCode) throw new I("invalid-action-code");
            }
            ((t = Ka.prototype).zb = function (t, i) {
              var r = { idToken: t },
                o = [];
              return (
                st(os, function (t, n) {
                  var e = i[n];
                  null === e ? o.push(t) : n in i && (r[n] = e);
                }),
                o.length && (r.deleteAttribute = o),
                Xs(this, Ds, r)
              );
            }),
              (t.rb = function (t, n) {
                return (
                  lt((t = { requestType: "PASSWORD_RESET", email: t }), n),
                  Xs(this, _s, t)
                );
              }),
              (t.sb = function (t, n) {
                return (
                  lt((t = { requestType: "EMAIL_SIGNIN", email: t }), n),
                  Xs(this, ks, t)
                );
              }),
              (t.qb = function (t, n) {
                return (
                  lt((t = { requestType: "VERIFY_EMAIL", idToken: t }), n),
                  Xs(this, Ss, t)
                );
              }),
              (t.Ab = function (t, n, e) {
                return (
                  lt(
                    (t = {
                      requestType: "VERIFY_AND_CHANGE_EMAIL",
                      idToken: t,
                      newEmail: n,
                    }),
                    e
                  ),
                  Xs(this, Ns, t)
                );
              }),
              (t.cb = function (t) {
                return Xs(this, Hs, t);
              }),
              (t.jb = function (t, n) {
                return Xs(this, Ps, { oobCode: t, newPassword: n });
              }),
              (t.Pa = function (t) {
                return Xs(this, vs, { oobCode: t });
              }),
              (t.fb = function (t) {
                return Xs(this, ps, { oobCode: t });
              });
            var ps = { endpoint: "setAccountInfo", A: ds, Y: "email", C: !0 },
              vs = {
                endpoint: "resetPassword",
                A: ds,
                G: function (t) {
                  var n = t.requestType;
                  if (
                    !n ||
                    (!t.email &&
                      "EMAIL_SIGNIN" != n &&
                      "VERIFY_AND_CHANGE_EMAIL" != n)
                  )
                    throw new I("internal-error");
                },
                C: !0,
              },
              ms = {
                endpoint: "signupNewUser",
                A: function (t) {
                  if ((ns(t), !t.password)) throw new I("weak-password");
                },
                G: is,
                U: !0,
                C: !0,
              },
              gs = { endpoint: "createAuthUri", C: !0 },
              bs = { endpoint: "deleteAccount", M: ["idToken"] },
              ys = {
                endpoint: "setAccountInfo",
                M: ["idToken", "deleteProvider"],
                A: function (t) {
                  if ("array" != e(t.deleteProvider))
                    throw new I("internal-error");
                },
              },
              ws = {
                endpoint: "emailLinkSignin",
                M: ["email", "oobCode"],
                A: ns,
                G: is,
                U: !0,
                C: !0,
              },
              Is = {
                endpoint: "emailLinkSignin",
                M: ["idToken", "email", "oobCode"],
                A: ns,
                G: is,
                U: !0,
              },
              Ts = {
                endpoint: "accounts/mfaEnrollment:finalize",
                M: ["idToken", "phoneVerificationInfo"],
                A: as,
                G: is,
                C: !0,
                La: !0,
              },
              Es = {
                endpoint: "accounts/mfaSignIn:finalize",
                M: ["mfaPendingCredential", "phoneVerificationInfo"],
                A: as,
                G: is,
                C: !0,
                La: !0,
              },
              As = { endpoint: "getAccountInfo" },
              ks = {
                endpoint: "getOobConfirmationCode",
                M: ["requestType"],
                A: function (t) {
                  if ("EMAIL_SIGNIN" != t.requestType)
                    throw new I("internal-error");
                  ns(t);
                },
                Y: "email",
                C: !0,
              },
              Ss = {
                endpoint: "getOobConfirmationCode",
                M: ["idToken", "requestType"],
                A: function (t) {
                  if ("VERIFY_EMAIL" != t.requestType)
                    throw new I("internal-error");
                },
                Y: "email",
                C: !0,
              },
              Ns = {
                endpoint: "getOobConfirmationCode",
                M: ["idToken", "newEmail", "requestType"],
                A: function (t) {
                  if ("VERIFY_AND_CHANGE_EMAIL" != t.requestType)
                    throw new I("internal-error");
                },
                Y: "email",
                C: !0,
              },
              _s = {
                endpoint: "getOobConfirmationCode",
                M: ["requestType"],
                A: function (t) {
                  if ("PASSWORD_RESET" != t.requestType)
                    throw new I("internal-error");
                  ns(t);
                },
                Y: "email",
                C: !0,
              },
              Os = { hb: !0, endpoint: "getProjectConfig", Rb: "GET" },
              Rs = {
                hb: !0,
                endpoint: "getRecaptchaParam",
                Rb: "GET",
                G: function (t) {
                  if (!t.recaptchaSiteKey) throw new I("internal-error");
                },
              },
              Ps = { endpoint: "resetPassword", A: ds, Y: "email", C: !0 },
              Cs = {
                endpoint: "sendVerificationCode",
                M: ["phoneNumber", "recaptchaToken"],
                Y: "sessionInfo",
                C: !0,
              },
              Ds = { endpoint: "setAccountInfo", M: ["idToken"], A: es, U: !0 },
              Ls = {
                endpoint: "setAccountInfo",
                M: ["idToken"],
                A: function (t) {
                  if ((es(t), !t.password)) throw new I("weak-password");
                },
                G: is,
                U: !0,
              },
              Ms = { endpoint: "signupNewUser", G: is, U: !0, C: !0 },
              xs = {
                endpoint: "accounts/mfaEnrollment:start",
                M: ["idToken", "phoneEnrollmentInfo"],
                A: function (t) {
                  if (!t.phoneEnrollmentInfo) throw new I("internal-error");
                  if (!t.phoneEnrollmentInfo.phoneNumber)
                    throw new I("missing-phone-number");
                  if (!t.phoneEnrollmentInfo.recaptchaToken)
                    throw new I("missing-app-credential");
                },
                G: function (t) {
                  if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo)
                    throw new I("internal-error");
                },
                C: !0,
                La: !0,
              },
              js = {
                endpoint: "accounts/mfaSignIn:start",
                M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
                A: function (t) {
                  if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken)
                    throw new I("missing-app-credential");
                },
                G: function (t) {
                  if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo)
                    throw new I("internal-error");
                },
                C: !0,
                La: !0,
              },
              Us = {
                endpoint: "verifyAssertion",
                A: ss,
                Wa: us,
                G: cs,
                U: !0,
                C: !0,
              },
              Vs = {
                endpoint: "verifyAssertion",
                A: ss,
                Wa: us,
                G: function (t) {
                  if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage)
                    throw new I("user-not-found");
                  if (t.errorMessage) throw Js(t.errorMessage);
                  is(t);
                },
                U: !0,
                C: !0,
              },
              Fs = {
                endpoint: "verifyAssertion",
                A: function (t) {
                  if ((ss(t), !t.idToken)) throw new I("internal-error");
                },
                Wa: us,
                G: cs,
                U: !0,
              },
              qs = {
                endpoint: "verifyCustomToken",
                A: function (t) {
                  if (!t.token) throw new I("invalid-custom-token");
                },
                G: is,
                U: !0,
                C: !0,
              },
              Ks = {
                endpoint: "verifyPassword",
                A: function (t) {
                  if ((ns(t), !t.password)) throw new I("wrong-password");
                },
                G: is,
                U: !0,
                C: !0,
              },
              Hs = { endpoint: "verifyPhoneNumber", A: rs, G: is, C: !0 },
              Gs = {
                endpoint: "verifyPhoneNumber",
                A: function (t) {
                  if (!t.idToken) throw new I("internal-error");
                  rs(t);
                },
                G: function (t) {
                  if (t.temporaryProof)
                    throw ((t.code = "credential-already-in-use"), Vo(t));
                  is(t);
                },
              },
              Bs = {
                Eb: { USER_NOT_FOUND: "user-not-found" },
                endpoint: "verifyPhoneNumber",
                A: rs,
                G: is,
                C: !0,
              },
              Ws = {
                endpoint: "accounts/mfaEnrollment:withdraw",
                M: ["idToken", "mfaEnrollmentId"],
                G: function (t) {
                  if (!!t[Ga] ^ !!t.refreshToken) throw new I("internal-error");
                },
                C: !0,
                La: !0,
              };
            function Xs(t, n, e) {
              if (
                !(function (t, n) {
                  if (!n || !n.length) return !0;
                  if (!t) return !1;
                  for (var e = 0; e < n.length; e++) {
                    var i = t[n[e]];
                    if (null == i || "" === i) return !1;
                  }
                  return !0;
                })(e, n.M)
              )
                return An(new I("internal-error"));
              var i,
                r = !!n.La,
                o = n.Rb || "POST";
              return En(e)
                .then(n.A)
                .then(function () {
                  return (
                    n.U && (e.returnSecureToken = !0),
                    n.C && t.b && void 0 === e.tenantId && (e.tenantId = t.b),
                    ts(t, r ? t.l : t.h, n.endpoint, o, e, n.Eb, n.hb || !1)
                  );
                })
                .then(function (t) {
                  return (i = t), n.Wa ? n.Wa(e, i) : i;
                })
                .then(n.G)
                .then(function () {
                  if (!n.Y) return i;
                  if (!(n.Y in i)) throw new I("internal-error");
                  return i[n.Y];
                });
            }
            function Js(t) {
              return Ys({
                error: { errors: [{ message: t }], code: 400, message: t },
              });
            }
            function Ys(t, n) {
              var e =
                  ((t.error && t.error.errors && t.error.errors[0]) || {})
                    .reason || "",
                i = {
                  keyInvalid: "invalid-api-key",
                  ipRefererBlocked: "app-not-authorized",
                };
              if ((e = i[e] ? new I(i[e]) : null)) return e;
              for (var r in ((e = (t.error && t.error.message) || ""),
              lt(
                (i = {
                  INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                  CREDENTIAL_MISMATCH: "custom-token-mismatch",
                  MISSING_CUSTOM_TOKEN: "internal-error",
                  INVALID_IDENTIFIER: "invalid-email",
                  MISSING_CONTINUE_URI: "internal-error",
                  INVALID_EMAIL: "invalid-email",
                  INVALID_PASSWORD: "wrong-password",
                  USER_DISABLED: "user-disabled",
                  MISSING_PASSWORD: "internal-error",
                  EMAIL_EXISTS: "email-already-in-use",
                  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                  INVALID_IDP_RESPONSE: "invalid-credential",
                  INVALID_PENDING_TOKEN: "invalid-credential",
                  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                  MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
                  INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                  INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                  INVALID_SENDER: "invalid-sender",
                  EMAIL_NOT_FOUND: "user-not-found",
                  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                  EXPIRED_OOB_CODE: "expired-action-code",
                  INVALID_OOB_CODE: "invalid-action-code",
                  MISSING_OOB_CODE: "internal-error",
                  INVALID_PROVIDER_ID: "invalid-provider-id",
                  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                  INVALID_ID_TOKEN: "invalid-user-token",
                  TOKEN_EXPIRED: "user-token-expired",
                  USER_NOT_FOUND: "user-token-expired",
                  CORS_UNSUPPORTED: "cors-unsupported",
                  DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                  INVALID_APP_ID: "invalid-app-id",
                  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                  WEAK_PASSWORD: "weak-password",
                  OPERATION_NOT_ALLOWED: "operation-not-allowed",
                  USER_CANCELLED: "user-cancelled",
                  CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                  INVALID_APP_CREDENTIAL: "invalid-app-credential",
                  INVALID_CODE: "invalid-verification-code",
                  INVALID_PHONE_NUMBER: "invalid-phone-number",
                  INVALID_SESSION_INFO: "invalid-verification-id",
                  INVALID_TEMPORARY_PROOF: "invalid-credential",
                  MISSING_APP_CREDENTIAL: "missing-app-credential",
                  MISSING_CODE: "missing-verification-code",
                  MISSING_PHONE_NUMBER: "missing-phone-number",
                  MISSING_SESSION_INFO: "missing-verification-id",
                  QUOTA_EXCEEDED: "quota-exceeded",
                  SESSION_EXPIRED: "code-expired",
                  REJECTED_CREDENTIAL: "rejected-credential",
                  INVALID_CONTINUE_URI: "invalid-continue-uri",
                  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                  MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                  INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
                  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                  INVALID_CERT_HASH: "invalid-cert-hash",
                  UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
                  INVALID_TENANT_ID: "invalid-tenant-id",
                  TENANT_ID_MISMATCH: "tenant-id-mismatch",
                  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                  EMAIL_CHANGE_NEEDS_VERIFICATION:
                    "email-change-needs-verification",
                  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                  SECOND_FACTOR_LIMIT_EXCEEDED:
                    "maximum-second-factor-count-exceeded",
                  UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
                  UNVERIFIED_EMAIL: "unverified-email",
                }),
                n || {}
              ),
              (n =
                (n = e.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < n.length
                  ? n[1]
                  : void 0),
              i))
                if (0 === e.indexOf(r)) return new I(i[r], n);
              return !n && t && (n = Ni(t)), new I("internal-error", n);
            }
            function zs(t) {
              (this.b = t),
                (this.a = null),
                (this.nb = (function (o) {
                  return (tu =
                    tu ||
                    new mn(function (t, n) {
                      function e() {
                        Ci(),
                          Ii("gapi.load")("gapi.iframes", {
                            callback: t,
                            ontimeout: function () {
                              Ci(), n(Error("Network Error"));
                            },
                            timeout: Zs.get(),
                          });
                      }
                      if (Ii("gapi.iframes.Iframe")) t();
                      else if (Ii("gapi.load")) e();
                      else {
                        var i =
                          "__iframefcb" +
                          Math.floor(1e6 * Math.random()).toString();
                        (l[i] = function () {
                          Ii("gapi.load") ? e() : n(Error("Network Error"));
                        }),
                          En(Ma((i = wt($s, { onload: i })))).o(function () {
                            n(Error("Network Error"));
                          });
                      }
                    }).o(function (t) {
                      throw ((tu = null), t);
                    })).then(function () {
                    return new mn(function (i, r) {
                      Ii("gapi.iframes.getContext")().open(
                        {
                          where: document.body,
                          url: o.b,
                          messageHandlersFilter: Ii(
                            "gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"
                          ),
                          attributes: {
                            style: {
                              position: "absolute",
                              top: "-100px",
                              width: "1px",
                              height: "1px",
                            },
                          },
                          dontclear: !0,
                        },
                        function (t) {
                          function n() {
                            clearTimeout(e), i();
                          }
                          (o.a = t), o.a.restyle({ setHideOnLeave: !1 });
                          var e = setTimeout(function () {
                            r(Error("Network Error"));
                          }, Qs.get());
                          t.ping(n).then(n, function () {
                            r(Error("Network Error"));
                          });
                        }
                      );
                    });
                  });
                })(this));
            }
            var $s = new dt(
                mt,
                "https://apis.google.com/js/api.js?onload=%{onload}"
              ),
              Zs = new Di(3e4, 6e4),
              Qs = new Di(5e3, 15e3),
              tu = null;
            function nu(t, n, e) {
              (this.i = t),
                (this.g = n),
                (this.h = e),
                (this.f = null),
                (this.a = De(this.i, "/__/auth/iframe")),
                Re(this.a, "apiKey", this.g),
                Re(this.a, "appName", this.h),
                (this.b = null),
                (this.c = []);
            }
            function eu(t, n, e, i, r) {
              (this.s = t),
                (this.m = n),
                (this.c = e),
                (this.u = i),
                (this.i = this.g = this.l = null),
                (this.a = r),
                (this.h = this.f = null);
            }
            function iu(t) {
              try {
                return Bl.app(t).auth().Ea();
              } catch (t) {
                return [];
              }
            }
            function ru(t, n, e, i, r) {
              (this.u = t),
                (this.f = n),
                (this.b = e),
                (this.c = i || null),
                (this.h = r || null),
                (this.m = this.s = this.w = null),
                (this.g = []),
                (this.l = this.a = null);
            }
            function ou(t) {
              var s = ei();
              return (function (t) {
                return Xs(t, Os, {}).then(function (t) {
                  return t.authorizedDomains || [];
                });
              })(t).then(function (t) {
                t: {
                  var n = Ce(s),
                    e = n.f;
                  n = n.b;
                  for (var i = 0; i < t.length; i++) {
                    var r = t[i],
                      o = n,
                      a = e;
                    if (
                      (o =
                        0 == r.indexOf("chrome-extension://")
                          ? Ce(r).b == o && "chrome-extension" == a
                          : ("http" == a || "https" == a) &&
                            (si.test(r)
                              ? o == r
                              : ((r = r.split(".").join("\\.")),
                                new RegExp(
                                  "^(.+\\." + r + "|" + r + ")$",
                                  "i"
                                ).test(o))))
                    ) {
                      t = !0;
                      break t;
                    }
                  }
                  t = !1;
                }
                if (!t) throw new jo(ei());
              });
            }
            function au(r) {
              return (
                r.l ||
                  (r.l = ci().then(function () {
                    if (!r.s) {
                      var t = r.c,
                        n = r.h,
                        e = iu(r.b),
                        i = new nu(r.u, r.f, r.b);
                      (i.f = t),
                        (i.b = n),
                        (i.c = W(e || [])),
                        (r.s = i.toString());
                    }
                    (r.i = new zs(r.s)),
                      (function (i) {
                        if (!i.i) throw Error("IfcHandler must be initialized!");
                        !(function (t, n) {
                          t.nb.then(function () {
                            t.a.register(
                              "authEvent",
                              n,
                              Ii("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")
                            );
                          });
                        })(i.i, function (t) {
                          var n = {};
                          if (t && t.authEvent) {
                            var e = !1;
                            for (t = Do(t.authEvent), n = 0; n < i.g.length; n++)
                              e = i.g[n](t) || e;
                            return ((n = {}).status = e ? "ACK" : "ERROR"), En(n);
                          }
                          return (n.status = "ERROR"), En(n);
                        });
                      })(r);
                  })),
                r.l
              );
            }
            function su(t) {
              return (
                t.m ||
                  ((t.w = t.c ? yi(t.c, iu(t.b)) : null),
                  (t.m = new Ka(t.f, N(t.h), t.w))),
                t.m
              );
            }
            function uu(t, n, e, i, r, o, a, s, u, c, h) {
              return (
                ((t = new eu(t, n, e, i, r)).l = o),
                (t.g = a),
                (t.i = s),
                (t.b = ct(u || null)),
                (t.f = c),
                t.ub(h).toString()
              );
            }
            function cu(t) {
              if (
                ((this.a =
                  t ||
                  (Bl.INTERNAL.reactNative &&
                    Bl.INTERNAL.reactNative.AsyncStorage)),
                !this.a)
              )
                throw new I(
                  "internal-error",
                  "The React Native compatibility library was not found."
                );
              this.type = "asyncStorage";
            }
            function hu(t) {
              (this.b = t), (this.a = {}), (this.f = g(this.c, this));
            }
            (nu.prototype.toString = function () {
              return (
                this.f ? Re(this.a, "v", this.f) : Be(this.a.a, "v"),
                this.b ? Re(this.a, "eid", this.b) : Be(this.a.a, "eid"),
                this.c.length
                  ? Re(this.a, "fw", this.c.join(","))
                  : Be(this.a.a, "fw"),
                this.a.toString()
              );
            }),
              (eu.prototype.ub = function (t) {
                return (this.h = t), this;
              }),
              (eu.prototype.toString = function () {
                var t = De(this.s, "/__/auth/handler");
                if (
                  (Re(t, "apiKey", this.m),
                  Re(t, "appName", this.c),
                  Re(t, "authType", this.u),
                  this.a.isOAuthProvider)
                ) {
                  var n = this.a;
                  try {
                    var e = Bl.app(this.c).auth().ja();
                  } catch (t) {
                    e = null;
                  }
                  for (var i in ((n.kb = e),
                  Re(t, "providerId", this.a.providerId),
                  (e = _i((n = this.a).Fb))))
                    e[i] = e[i].toString();
                  (i = n.Oc), (e = ct(e));
                  for (var r = 0; r < i.length; r++) {
                    var o = i[r];
                    o in e && delete e[o];
                  }
                  n.lb && n.kb && !e[n.lb] && (e[n.lb] = n.kb),
                    ut(e) || Re(t, "customParameters", Ni(e));
                }
                if (
                  ("function" == typeof this.a.Nb &&
                    (n = this.a.Nb()).length &&
                    Re(t, "scopes", n.join(",")),
                  this.l ? Re(t, "redirectUrl", this.l) : Be(t.a, "redirectUrl"),
                  this.g ? Re(t, "eventId", this.g) : Be(t.a, "eventId"),
                  this.i ? Re(t, "v", this.i) : Be(t.a, "v"),
                  this.b)
                )
                  for (var a in this.b)
                    this.b.hasOwnProperty(a) && !Pe(t, a) && Re(t, a, this.b[a]);
                return (
                  this.h ? Re(t, "tid", this.h) : Be(t.a, "tid"),
                  this.f ? Re(t, "eid", this.f) : Be(t.a, "eid"),
                  (a = iu(this.c)).length && Re(t, "fw", a.join(",")),
                  t.toString()
                );
              }),
              ((t = ru.prototype).Lb = function (n, e, t) {
                var i = new I("popup-closed-by-user"),
                  r = new I("web-storage-unsupported"),
                  o = this,
                  a = !1;
                return this.ka()
                  .then(function () {
                    (function (t) {
                      var n = { type: "webStorageSupport" };
                      return au(t)
                        .then(function () {
                          return (function (n, e) {
                            return n.nb.then(function () {
                              return new mn(function (t) {
                                n.a.send(
                                  e.type,
                                  e,
                                  t,
                                  Ii("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")
                                );
                              });
                            });
                          })(t.i, n);
                        })
                        .then(function (t) {
                          if (t && t.length && void 0 !== t[0].webStorageSupport)
                            return t[0].webStorageSupport;
                          throw Error();
                        });
                    })(o).then(function (t) {
                      t || (n && oi(n), e(r), (a = !0));
                    });
                  })
                  .o(function () {})
                  .then(function () {
                    if (!a)
                      return (function (e) {
                        return new mn(function (n) {
                          return (function t() {
                            ye(2e3).then(function () {
                              if (e && !e.closed) return t();
                              n();
                            });
                          })();
                        });
                      })(n);
                  })
                  .then(function () {
                    if (!a)
                      return ye(t).then(function () {
                        e(i);
                      });
                  });
              }),
              (t.Ub = function () {
                var t = wi();
                return !Si(t) && !Pi(t);
              }),
              (t.Qb = function () {
                return !1;
              }),
              (t.Jb = function (n, t, e, i, r, o, a, s) {
                if (!n) return An(new I("popup-blocked"));
                if (a && !Si())
                  return (
                    this.ka().o(function (t) {
                      oi(n), r(t);
                    }),
                    i(),
                    En()
                  );
                this.a || (this.a = ou(su(this)));
                var u = this;
                return this.a
                  .then(function () {
                    var t = u.ka().o(function (t) {
                      throw (oi(n), r(t), t);
                    });
                    return i(), t;
                  })
                  .then(function () {
                    Po(e),
                      a ||
                        ii(
                          uu(u.u, u.f, u.b, t, e, null, o, u.c, void 0, u.h, s),
                          n
                        );
                  })
                  .o(function (t) {
                    throw (
                      ("auth/network-request-failed" == t.code && (u.a = null), t)
                    );
                  });
              }),
              (t.Kb = function (t, n, e, i) {
                this.a || (this.a = ou(su(this)));
                var r = this;
                return this.a
                  .then(function () {
                    Po(n),
                      ii(uu(r.u, r.f, r.b, t, n, ei(), e, r.c, void 0, r.h, i));
                  })
                  .o(function (t) {
                    throw (
                      ("auth/network-request-failed" == t.code && (r.a = null), t)
                    );
                  });
              }),
              (t.ka = function () {
                var t = this;
                return au(this)
                  .then(function () {
                    return t.i.nb;
                  })
                  .o(function () {
                    throw ((t.a = null), new I("network-request-failed"));
                  });
              }),
              (t.Xb = function () {
                return !0;
              }),
              (t.Ca = function (t) {
                this.g.push(t);
              }),
              (t.Qa = function (n) {
                G(this.g, function (t) {
                  return t == n;
                });
              }),
              ((t = cu.prototype).get = function (t) {
                return En(this.a.getItem(t)).then(function (t) {
                  return t && Oi(t);
                });
              }),
              (t.set = function (t, n) {
                return En(this.a.setItem(t, Ni(n)));
              }),
              (t.T = function (t) {
                return En(this.a.removeItem(t));
              }),
              (t.ba = function () {}),
              (t.ha = function () {});
            var lu,
              fu = [];
            function du(t, n, e) {
              ut(t.a) && t.b.addEventListener("message", t.f),
                void 0 === t.a[n] && (t.a[n] = []),
                t.a[n].push(e);
            }
            function pu(t) {
              this.a = t;
            }
            function vu(t) {
              (this.c = t), (this.b = !1), (this.a = []);
            }
            function mu(i, t, n, e) {
              var r,
                o,
                a,
                s,
                u = n || {},
                c = null;
              if (i.b) return An(Error("connection_unavailable"));
              var h = e ? 800 : 50,
                l =
                  "undefined" != typeof MessageChannel
                    ? new MessageChannel()
                    : null;
              return new mn(function (n, e) {
                l
                  ? ((r = Math.floor(
                      Math.random() * Math.pow(10, 20)
                    ).toString()),
                    l.port1.start(),
                    (a = setTimeout(function () {
                      e(Error("unsupported_event"));
                    }, h)),
                    (c = {
                      messageChannel: l,
                      onMessage: (o = function (t) {
                        t.data.eventId === r &&
                          ("ack" === t.data.status
                            ? (clearTimeout(a),
                              (s = setTimeout(function () {
                                e(Error("timeout"));
                              }, 3e3)))
                            : "done" === t.data.status
                            ? (clearTimeout(s),
                              void 0 !== t.data.response
                                ? n(t.data.response)
                                : e(Error("unknown_error")))
                            : (clearTimeout(a),
                              clearTimeout(s),
                              e(Error("invalid_response"))));
                      }),
                    }),
                    i.a.push(c),
                    l.port1.addEventListener("message", o),
                    i.c.postMessage({ eventType: t, eventId: r, data: u }, [
                      l.port2,
                    ]))
                  : e(Error("connection_unavailable"));
              })
                .then(function (t) {
                  return gu(i, c), t;
                })
                .o(function (t) {
                  throw (gu(i, c), t);
                });
            }
            function gu(t, n) {
              if (n) {
                var e = n.messageChannel,
                  i = n.onMessage;
                e && (e.port1.removeEventListener("message", i), e.port1.close()),
                  G(t.a, function (t) {
                    return t == n;
                  });
              }
            }
            function bu() {
              if (!Iu()) throw new I("web-storage-unsupported");
              (this.c = {}),
                (this.a = []),
                (this.b = 0),
                (this.u = l.indexedDB),
                (this.type = "indexedDB"),
                (this.g = this.l = this.f = this.i = null),
                (this.s = !1),
                (this.h = null);
              var i = this;
              fi() && self
                ? ((this.l = (function () {
                    var n = fi() ? self : null;
                    if (
                      (U(fu, function (t) {
                        t.b == n && (e = t);
                      }),
                      !e)
                    ) {
                      var e = new hu(n);
                      fu.push(e);
                    }
                    return e;
                  })()),
                  du(this.l, "keyChanged", function (t, e) {
                    return Su(i).then(function (n) {
                      return (
                        0 < n.length &&
                          U(i.a, function (t) {
                            t(n);
                          }),
                        { keyProcessed: K(n, e.key) }
                      );
                    });
                  }),
                  du(this.l, "ping", function () {
                    return En(["keyChanged"]);
                  }))
                : (function () {
                    var t = l.navigator;
                    return t && t.serviceWorker
                      ? En()
                          .then(function () {
                            return t.serviceWorker.ready;
                          })
                          .then(function (t) {
                            return t.active || null;
                          })
                          .o(function () {
                            return null;
                          })
                      : En(null);
                  })().then(function (t) {
                    (i.h = t) &&
                      ((i.g = new vu(new pu(t))),
                      mu(i.g, "ping", null, !0)
                        .then(function (t) {
                          t[0].fulfilled &&
                            K(t[0].value, "keyChanged") &&
                            (i.s = !0);
                        })
                        .o(function () {}));
                  });
            }
            function yu(i) {
              return new mn(function (n, e) {
                var t = i.u.open("firebaseLocalStorageDb", 1);
                (t.onerror = function (t) {
                  try {
                    t.preventDefault();
                  } catch (t) {}
                  e(Error(t.target.error));
                }),
                  (t.onupgradeneeded = function (t) {
                    t = t.target.result;
                    try {
                      t.createObjectStore("firebaseLocalStorage", {
                        keyPath: "fbase_key",
                      });
                    } catch (t) {
                      e(t);
                    }
                  }),
                  (t.onsuccess = function (t) {
                    (t = t.target.result).objectStoreNames.contains(
                      "firebaseLocalStorage"
                    )
                      ? n(t)
                      : (function (i) {
                          return new mn(function (t, n) {
                            var e = i.u.deleteDatabase("firebaseLocalStorageDb");
                            (e.onsuccess = function () {
                              t();
                            }),
                              (e.onerror = function (t) {
                                n(Error(t.target.error));
                              });
                          });
                        })(i)
                          .then(function () {
                            return yu(i);
                          })
                          .then(function (t) {
                            n(t);
                          })
                          .o(function (t) {
                            e(t);
                          });
                  });
              });
            }
            function wu(t) {
              return t.m || (t.m = yu(t)), t.m;
            }
            function Iu() {
              try {
                return !!l.indexedDB;
              } catch (t) {
                return !1;
              }
            }
            function Tu(t) {
              return t.objectStore("firebaseLocalStorage");
            }
            function Eu(t, n) {
              return t.transaction(
                ["firebaseLocalStorage"],
                n ? "readwrite" : "readonly"
              );
            }
            function Au(t) {
              return new mn(function (n, e) {
                (t.onsuccess = function (t) {
                  t && t.target ? n(t.target.result) : n();
                }),
                  (t.onerror = function (t) {
                    e(t.target.error);
                  });
              });
            }
            function ku(t, n) {
              return t.g &&
                t.h &&
                (function () {
                  var t = l.navigator;
                  return (
                    (t && t.serviceWorker && t.serviceWorker.controller) || null
                  );
                })() === t.h
                ? mu(t.g, "keyChanged", { key: n }, t.s)
                    .then(function () {})
                    .o(function () {})
                : En();
            }
            function Su(i) {
              return wu(i)
                .then(function (t) {
                  var r = Tu(Eu(t, !1));
                  return r.getAll
                    ? Au(r.getAll())
                    : new mn(function (n, e) {
                        var i = [],
                          t = r.openCursor();
                        (t.onsuccess = function (t) {
                          (t = t.target.result)
                            ? (i.push(t.value), t.continue())
                            : n(i);
                        }),
                          (t.onerror = function (t) {
                            e(t.target.error);
                          });
                      });
                })
                .then(function (t) {
                  var n = {},
                    e = [];
                  if (0 == i.b) {
                    for (e = 0; e < t.length; e++) n[t[e].fbase_key] = t[e].value;
                    (e = (function t(n, e) {
                      var i,
                        r = [];
                      for (i in n)
                        i in e
                          ? typeof n[i] != typeof e[i]
                            ? r.push(i)
                            : "object" == typeof n[i] &&
                              null != n[i] &&
                              null != e[i]
                            ? 0 < t(n[i], e[i]).length && r.push(i)
                            : n[i] !== e[i] && r.push(i)
                          : r.push(i);
                      for (i in e) i in n || r.push(i);
                      return r;
                    })(i.c, n)),
                      (i.c = n);
                  }
                  return e;
                });
            }
            function Nu(t) {
              t.i && t.i.cancel("STOP_EVENT"),
                t.f && (clearTimeout(t.f), (t.f = null));
            }
            function _u(t) {
              var i = this,
                r = null;
              (this.a = []),
                (this.type = "indexedDB"),
                (this.c = t),
                (this.b = En()
                  .then(function () {
                    if (Iu()) {
                      var n = Ri(),
                        e = "__sak" + n;
                      return (
                        (lu = lu || new bu()),
                        (r = lu)
                          .set(e, n)
                          .then(function () {
                            return r.get(e);
                          })
                          .then(function (t) {
                            if (t !== n) throw Error("indexedDB not supported!");
                            return r.T(e);
                          })
                          .then(function () {
                            return r;
                          })
                          .o(function () {
                            return i.c;
                          })
                      );
                    }
                    return i.c;
                  })
                  .then(function (t) {
                    return (
                      (i.type = t.type),
                      t.ba(function (n) {
                        U(i.a, function (t) {
                          t(n);
                        });
                      }),
                      t
                    );
                  }));
            }
            function Ou() {
              (this.a = {}), (this.type = "inMemory");
            }
            function Ru() {
              if (
                !(function () {
                  var t = "Node" == di();
                  if (
                    !(t =
                      Pu() ||
                      (t && Bl.INTERNAL.node && Bl.INTERNAL.node.localStorage))
                  )
                    return !1;
                  try {
                    return t.setItem("__sak", "1"), t.removeItem("__sak"), !0;
                  } catch (t) {
                    return !1;
                  }
                })()
              ) {
                if ("Node" == di())
                  throw new I(
                    "internal-error",
                    "The LocalStorage compatibility library was not found."
                  );
                throw new I("web-storage-unsupported");
              }
              (this.a = Pu() || Bl.INTERNAL.node.localStorage),
                (this.type = "localStorage");
            }
            function Pu() {
              try {
                var t = l.localStorage,
                  n = Ri();
                return t && (t.setItem(n, "1"), t.removeItem(n)), t;
              } catch (t) {
                return null;
              }
            }
            function Cu() {
              this.type = "nullStorage";
            }
            function Du() {
              if (
                !(function () {
                  var t = "Node" == di();
                  if (
                    !(t =
                      Lu() ||
                      (t && Bl.INTERNAL.node && Bl.INTERNAL.node.sessionStorage))
                  )
                    return !1;
                  try {
                    return t.setItem("__sak", "1"), t.removeItem("__sak"), !0;
                  } catch (t) {
                    return !1;
                  }
                })()
              ) {
                if ("Node" == di())
                  throw new I(
                    "internal-error",
                    "The SessionStorage compatibility library was not found."
                  );
                throw new I("web-storage-unsupported");
              }
              (this.a = Lu() || Bl.INTERNAL.node.sessionStorage),
                (this.type = "sessionStorage");
            }
            function Lu() {
              try {
                var t = l.sessionStorage,
                  n = Ri();
                return t && (t.setItem(n, "1"), t.removeItem(n)), t;
              } catch (t) {
                return null;
              }
            }
            function Mu() {
              var t = {};
              (t.Browser = Uu),
                (t.Node = Vu),
                (t.ReactNative = Fu),
                (t.Worker = qu),
                (this.a = t[di()]);
            }
            (hu.prototype.c = function (e) {
              var i = e.data.eventType,
                r = e.data.eventId,
                t = this.a[i];
              if (t && 0 < t.length) {
                e.ports[0].postMessage({
                  status: "ack",
                  eventId: r,
                  eventType: i,
                  response: null,
                });
                var n = [];
                U(t, function (t) {
                  n.push(
                    En().then(function () {
                      return t(e.origin, e.data.data);
                    })
                  );
                }),
                  Sn(n).then(function (t) {
                    var n = [];
                    U(t, function (t) {
                      n.push({
                        fulfilled: t.Mb,
                        value: t.value,
                        reason: t.reason ? t.reason.message : void 0,
                      });
                    }),
                      U(n, function (t) {
                        for (var n in t) void 0 === t[n] && delete t[n];
                      }),
                      e.ports[0].postMessage({
                        status: "done",
                        eventId: r,
                        eventType: i,
                        response: n,
                      });
                  });
              }
            }),
              (pu.prototype.postMessage = function (t, n) {
                this.a.postMessage(t, n);
              }),
              (vu.prototype.close = function () {
                for (; 0 < this.a.length; ) gu(this, this.a[0]);
                this.b = !0;
              }),
              ((t = bu.prototype).set = function (e, i) {
                var r,
                  o = !1,
                  a = this;
                return wu(this)
                  .then(function (t) {
                    return Au((t = Tu(Eu((r = t), !0))).get(e));
                  })
                  .then(function (t) {
                    var n = Tu(Eu(r, !0));
                    return t
                      ? ((t.value = i), Au(n.put(t)))
                      : (a.b++,
                        (o = !0),
                        ((t = {}).fbase_key = e),
                        (t.value = i),
                        Au(n.add(t)));
                  })
                  .then(function () {
                    return (a.c[e] = i), ku(a, e);
                  })
                  .ma(function () {
                    o && a.b--;
                  });
              }),
              (t.get = function (n) {
                return wu(this)
                  .then(function (t) {
                    return Au(Tu(Eu(t, !1)).get(n));
                  })
                  .then(function (t) {
                    return t && t.value;
                  });
              }),
              (t.T = function (n) {
                var e = !1,
                  i = this;
                return wu(this)
                  .then(function (t) {
                    return (e = !0), i.b++, Au(Tu(Eu(t, !0)).delete(n));
                  })
                  .then(function () {
                    return delete i.c[n], ku(i, n);
                  })
                  .ma(function () {
                    e && i.b--;
                  });
              }),
              (t.ba = function (t) {
                0 == this.a.length &&
                  (function (t) {
                    Nu(t),
                      (function n() {
                        t.f = setTimeout(function () {
                          t.i = Su(t)
                            .then(function (n) {
                              0 < n.length &&
                                U(t.a, function (t) {
                                  t(n);
                                });
                            })
                            .then(function () {
                              n();
                            })
                            .o(function (t) {
                              "STOP_EVENT" != t.message && n();
                            });
                        }, 800);
                      })();
                  })(this),
                  this.a.push(t);
              }),
              (t.ha = function (n) {
                G(this.a, function (t) {
                  return t == n;
                }),
                  0 == this.a.length && Nu(this);
              }),
              ((t = _u.prototype).get = function (n) {
                return this.b.then(function (t) {
                  return t.get(n);
                });
              }),
              (t.set = function (n, e) {
                return this.b.then(function (t) {
                  return t.set(n, e);
                });
              }),
              (t.T = function (n) {
                return this.b.then(function (t) {
                  return t.T(n);
                });
              }),
              (t.ba = function (t) {
                this.a.push(t);
              }),
              (t.ha = function (n) {
                G(this.a, function (t) {
                  return t == n;
                });
              }),
              ((t = Ou.prototype).get = function (t) {
                return En(this.a[t]);
              }),
              (t.set = function (t, n) {
                return (this.a[t] = n), En();
              }),
              (t.T = function (t) {
                return delete this.a[t], En();
              }),
              (t.ba = function () {}),
              (t.ha = function () {}),
              ((t = Ru.prototype).get = function (t) {
                var n = this;
                return En().then(function () {
                  return Oi(n.a.getItem(t));
                });
              }),
              (t.set = function (n, e) {
                var i = this;
                return En().then(function () {
                  var t = Ni(e);
                  null === t ? i.T(n) : i.a.setItem(n, t);
                });
              }),
              (t.T = function (t) {
                var n = this;
                return En().then(function () {
                  n.a.removeItem(t);
                });
              }),
              (t.ba = function (t) {
                l.window && ee(l.window, "storage", t);
              }),
              (t.ha = function (t) {
                l.window && oe(l.window, "storage", t);
              }),
              ((t = Cu.prototype).get = function () {
                return En(null);
              }),
              (t.set = function () {
                return En();
              }),
              (t.T = function () {
                return En();
              }),
              (t.ba = function () {}),
              (t.ha = function () {}),
              ((t = Du.prototype).get = function (t) {
                var n = this;
                return En().then(function () {
                  return Oi(n.a.getItem(t));
                });
              }),
              (t.set = function (n, e) {
                var i = this;
                return En().then(function () {
                  var t = Ni(e);
                  null === t ? i.T(n) : i.a.setItem(n, t);
                });
              }),
              (t.T = function (t) {
                var n = this;
                return En().then(function () {
                  n.a.removeItem(t);
                });
              }),
              (t.ba = function () {}),
              (t.ha = function () {});
            var xu,
              ju,
              Uu = { F: Ru, $a: Du },
              Vu = { F: Ru, $a: Du },
              Fu = { F: cu, $a: Cu },
              qu = { F: Ru, $a: Cu },
              Ku = { od: "local", NONE: "none", qd: "session" };
            function Hu() {
              var t = !(Pi(wi()) || !li()),
                n = Si(),
                e = Ti();
              (this.m = t),
                (this.h = n),
                (this.l = e),
                (this.a = {}),
                (t = xu = xu || new Mu());
              try {
                this.g =
                  (!ni() && xi()) || !l.indexedDB
                    ? new t.a.F()
                    : new _u(fi() ? new Ou() : new t.a.F());
              } catch (t) {
                (this.g = new Ou()), (this.h = !0);
              }
              try {
                this.i = new t.a.$a();
              } catch (t) {
                this.i = new Ou();
              }
              (this.u = new Ou()), (this.f = g(this.Vb, this)), (this.b = {});
            }
            function Gu() {
              return (ju = ju || new Hu());
            }
            function Bu(t, n) {
              switch (n) {
                case "session":
                  return t.i;
                case "none":
                  return t.u;
                default:
                  return t.g;
              }
            }
            function Wu(t, n) {
              return "firebase:" + t.name + (n ? ":" + n : "");
            }
            function Xu(t, n, e) {
              return (
                (e = Wu(n, e)), "local" == n.F && (t.b[e] = null), Bu(t, n.F).T(e)
              );
            }
            function Ju(t) {
              t.c && (clearInterval(t.c), (t.c = null));
            }
            function Yu(t) {
              (this.a = t), (this.b = Gu());
            }
            ((t = Hu.prototype).get = function (t, n) {
              return Bu(this, t.F).get(Wu(t, n));
            }),
              (t.set = function (n, t, e) {
                var i = Wu(n, e),
                  r = this,
                  o = Bu(this, n.F);
                return o
                  .set(i, t)
                  .then(function () {
                    return o.get(i);
                  })
                  .then(function (t) {
                    "local" == n.F && (r.b[i] = t);
                  });
              }),
              (t.addListener = function (t, n, e) {
                (t = Wu(t, n)),
                  this.l && (this.b[t] = l.localStorage.getItem(t)),
                  ut(this.a) &&
                    (Bu(this, "local").ba(this.f),
                    this.h ||
                      ((ni() || !xi()) && l.indexedDB) ||
                      !this.l ||
                      (function (i) {
                        Ju(i),
                          (i.c = setInterval(function () {
                            for (var t in i.a) {
                              var n = l.localStorage.getItem(t),
                                e = i.b[t];
                              n != e &&
                                ((i.b[t] = n),
                                (n = new Bn({
                                  type: "storage",
                                  key: t,
                                  target: window,
                                  oldValue: e,
                                  newValue: n,
                                  a: !0,
                                })),
                                i.Vb(n));
                            }
                          }, 1e3));
                      })(this)),
                  this.a[t] || (this.a[t] = []),
                  this.a[t].push(e);
              }),
              (t.removeListener = function (t, n, e) {
                (t = Wu(t, n)),
                  this.a[t] &&
                    (G(this.a[t], function (t) {
                      return t == e;
                    }),
                    0 == this.a[t].length && delete this.a[t]),
                  ut(this.a) && (Bu(this, "local").ha(this.f), Ju(this));
              }),
              (t.Vb = function (t) {
                if (t && t.f) {
                  var n = t.a.key;
                  if (null == n)
                    for (var e in this.a) {
                      var i = this.b[e];
                      void 0 === i && (i = null);
                      var r = l.localStorage.getItem(e);
                      r !== i && ((this.b[e] = r), this.ib(e));
                    }
                  else if (0 == n.indexOf("firebase:") && this.a[n]) {
                    if (
                      (void 0 !== t.a.a ? Bu(this, "local").ha(this.f) : Ju(this),
                      this.m)
                    )
                      if (
                        ((e = l.localStorage.getItem(n)),
                        (i = t.a.newValue) !== e)
                      )
                        null !== i
                          ? l.localStorage.setItem(n, i)
                          : l.localStorage.removeItem(n);
                      else if (this.b[n] === i && void 0 === t.a.a) return;
                    var o = this;
                    (e = function () {
                      (void 0 === t.a.a &&
                        o.b[n] === l.localStorage.getItem(n)) ||
                        ((o.b[n] = l.localStorage.getItem(n)), o.ib(n));
                    }),
                      Kt &&
                      $t &&
                      10 == $t &&
                      l.localStorage.getItem(n) !== t.a.newValue &&
                      t.a.newValue !== t.a.oldValue
                        ? setTimeout(e, 10)
                        : e();
                  }
                } else U(t, g(this.ib, this));
              }),
              (t.ib = function (t) {
                this.a[t] &&
                  U(this.a[t], function (t) {
                    t();
                  });
              });
            var zu,
              $u = { name: "authEvent", F: "local" };
            function Zu() {
              this.a = Gu();
            }
            function Qu(t, n) {
              (this.b = tc),
                (this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b)),
                (this.g = this.c = 0),
                (this.a = []),
                (this.i = t),
                (this.h = n),
                (this.l = l.Int32Array ? new Int32Array(64) : Array(64)),
                void 0 === zu && (zu = l.Int32Array ? new Int32Array(sc) : sc),
                this.reset();
            }
            w(Qu, function () {
              this.b = -1;
            });
            for (var tc = 64, nc = tc - 1, ec = [], ic = 0; ic < nc; ic++)
              ec[ic] = 0;
            var rc = B(128, ec);
            function oc(t) {
              for (var n = t.f, e = t.l, i = 0, r = 0; r < n.length; )
                (e[i++] =
                  (n[r] << 24) | (n[r + 1] << 16) | (n[r + 2] << 8) | n[r + 3]),
                  (r = 4 * i);
              for (n = 16; n < 64; n++) {
                (r = 0 | e[n - 15]), (i = 0 | e[n - 2]);
                var o =
                    ((0 | e[n - 16]) +
                      (((r >>> 7) | (r << 25)) ^
                        ((r >>> 18) | (r << 14)) ^
                        (r >>> 3))) |
                    0,
                  a =
                    ((0 | e[n - 7]) +
                      (((i >>> 17) | (i << 15)) ^
                        ((i >>> 19) | (i << 13)) ^
                        (i >>> 10))) |
                    0;
                e[n] = (o + a) | 0;
              }
              (i = 0 | t.a[0]), (r = 0 | t.a[1]);
              var s = 0 | t.a[2],
                u = 0 | t.a[3],
                c = 0 | t.a[4],
                h = 0 | t.a[5],
                l = 0 | t.a[6];
              for (o = 0 | t.a[7], n = 0; n < 64; n++) {
                var f =
                  ((((i >>> 2) | (i << 30)) ^
                    ((i >>> 13) | (i << 19)) ^
                    ((i >>> 22) | (i << 10))) +
                    ((i & r) ^ (i & s) ^ (r & s))) |
                  0;
                (a =
                  ((o =
                    (o +
                      (((c >>> 6) | (c << 26)) ^
                        ((c >>> 11) | (c << 21)) ^
                        ((c >>> 25) | (c << 7)))) |
                    0) +
                    (((a = ((a = (c & h) ^ (~c & l)) + (0 | zu[n])) | 0) +
                      (0 | e[n])) |
                      0)) |
                  0),
                  (o = l),
                  (l = h),
                  (h = c),
                  (c = (u + a) | 0),
                  (u = s),
                  (s = r),
                  (r = i),
                  (i = (a + f) | 0);
              }
              (t.a[0] = (t.a[0] + i) | 0),
                (t.a[1] = (t.a[1] + r) | 0),
                (t.a[2] = (t.a[2] + s) | 0),
                (t.a[3] = (t.a[3] + u) | 0),
                (t.a[4] = (t.a[4] + c) | 0),
                (t.a[5] = (t.a[5] + h) | 0),
                (t.a[6] = (t.a[6] + l) | 0),
                (t.a[7] = (t.a[7] + o) | 0);
            }
            function ac(t, n, e) {
              void 0 === e && (e = n.length);
              var i = 0,
                r = t.c;
              if ("string" == typeof n)
                for (; i < e; )
                  (t.f[r++] = n.charCodeAt(i++)), r == t.b && (oc(t), (r = 0));
              else {
                if (!d(n)) throw Error("message must be string or array");
                for (; i < e; ) {
                  var o = n[i++];
                  if (
                    !("number" == typeof o && 0 <= o && o <= 255 && o == (0 | o))
                  )
                    throw Error("message must be a byte array");
                  (t.f[r++] = o), r == t.b && (oc(t), (r = 0));
                }
              }
              (t.c = r), (t.g += e);
            }
            Qu.prototype.reset = function () {
              (this.g = this.c = 0),
                (this.a = l.Int32Array ? new Int32Array(this.h) : W(this.h));
            };
            var sc = [
              1116352408,
              1899447441,
              3049323471,
              3921009573,
              961987163,
              1508970993,
              2453635748,
              2870763221,
              3624381080,
              310598401,
              607225278,
              1426881987,
              1925078388,
              2162078206,
              2614888103,
              3248222580,
              3835390401,
              4022224774,
              264347078,
              604807628,
              770255983,
              1249150122,
              1555081692,
              1996064986,
              2554220882,
              2821834349,
              2952996808,
              3210313671,
              3336571891,
              3584528711,
              113926993,
              338241895,
              666307205,
              773529912,
              1294757372,
              1396182291,
              1695183700,
              1986661051,
              2177026350,
              2456956037,
              2730485921,
              2820302411,
              3259730800,
              3345764771,
              3516065817,
              3600352804,
              4094571909,
              275423344,
              430227734,
              506948616,
              659060556,
              883997877,
              958139571,
              1322822218,
              1537002063,
              1747873779,
              1955562222,
              2024104815,
              2227730452,
              2361852424,
              2428436474,
              2756734187,
              3204031479,
              3329325298,
            ];
            function uc() {
              Qu.call(this, 8, cc);
            }
            w(uc, Qu);
            var cc = [
              1779033703,
              3144134277,
              1013904242,
              2773480762,
              1359893119,
              2600822924,
              528734635,
              1541459225,
            ];
            function hc(t, n, e, i, r) {
              (this.u = t),
                (this.i = n),
                (this.l = e),
                (this.m = i || null),
                (this.s = r || null),
                (this.h = n + ":" + e),
                (this.w = new Zu()),
                (this.g = new Yu(this.h)),
                (this.f = null),
                (this.b = []),
                (this.a = this.c = null);
            }
            function lc(t) {
              return new I("invalid-cordova-configuration", t);
            }
            function fc(t) {
              var n = new uc();
              ac(n, t), (t = []);
              var e = 8 * n.g;
              n.c < 56 ? ac(n, rc, 56 - n.c) : ac(n, rc, n.b - (n.c - 56));
              for (var i = 63; 56 <= i; i--) (n.f[i] = 255 & e), (e /= 256);
              for (oc(n), i = e = 0; i < n.i; i++)
                for (var r = 24; 0 <= r; r -= 8) t[e++] = (n.a[i] >> r) & 255;
              return (function (t) {
                return F(t, function (t) {
                  return 1 < (t = t.toString(16)).length ? t : "0" + t;
                }).join("");
              })(t);
            }
            function dc(t, n) {
              for (var e = 0; e < t.b.length; e++)
                try {
                  t.b[e](n);
                } catch (t) {}
            }
            function pc(i) {
              return (
                i.f ||
                  (i.f = i.ka().then(function () {
                    return new mn(function (e) {
                      i.Ca(function t(n) {
                        return e(n), i.Qa(t), !1;
                      }),
                        (function (r) {
                          function n(i) {
                            (t = !0),
                              e && e.cancel(),
                              vc(r).then(function (t) {
                                var n = o;
                                if (t && i && i.url) {
                                  var e = null;
                                  -1 !=
                                    (n = zr(i.url)).indexOf(
                                      "/__/auth/callback"
                                    ) &&
                                    (e = (e =
                                      "object" ==
                                      typeof (e = Oi(
                                        Pe((e = Ce(n)), "firebaseError") || null
                                      ))
                                        ? T(e)
                                        : null)
                                      ? new Co(
                                          t.c,
                                          t.b,
                                          null,
                                          null,
                                          e,
                                          null,
                                          t.S()
                                        )
                                      : new Co(
                                          t.c,
                                          t.b,
                                          n,
                                          t.f,
                                          null,
                                          null,
                                          t.S()
                                        )),
                                    (n = e || o);
                                }
                                dc(r, n);
                              });
                          }
                          var o = new Co(
                              "unknown",
                              null,
                              null,
                              null,
                              new I("no-auth-event")
                            ),
                            t = !1,
                            e = ye(500).then(function () {
                              return vc(r).then(function () {
                                t || dc(r, o);
                              });
                            }),
                            i = l.handleOpenURL;
                          (l.handleOpenURL = function (t) {
                            if (
                              (0 ==
                                t
                                  .toLowerCase()
                                  .indexOf(
                                    Ii("BuildInfo.packageName", l).toLowerCase() +
                                      "://"
                                  ) && n({ url: t }),
                              "function" == typeof i)
                            )
                              try {
                                i(t);
                              } catch (t) {
                                console.error(t);
                              }
                          }),
                            (xo = xo || new Lo()),
                            (function (t) {
                              var e = xo;
                              e.a.push(t),
                                e.b ||
                                  ((e.b = function (t) {
                                    for (var n = 0; n < e.a.length; n++)
                                      e.a[n](t);
                                  }),
                                  "function" ==
                                    typeof (t = Ii(
                                      "universalLinks.subscribe",
                                      l
                                    )) && t(null, e.b));
                            })(n);
                        })(i);
                    });
                  })),
                i.f
              );
            }
            function vc(n) {
              var e = null;
              return (function (t) {
                return t.b.get($u, t.a).then(function (t) {
                  return Do(t);
                });
              })(n.g)
                .then(function (t) {
                  return (e = t), Xu((t = n.g).b, $u, t.a);
                })
                .then(function () {
                  return e;
                });
            }
            function mc(t) {
              (this.a = t), (this.b = Gu());
            }
            ((t = hc.prototype).ka = function () {
              return this.Ga
                ? this.Ga
                : (this.Ga = (hi(void 0)
                    ? ci().then(function () {
                        return new mn(function (t, n) {
                          var e = l.document,
                            i = setTimeout(function () {
                              n(Error("Cordova framework is not ready."));
                            }, 1e3);
                          e.addEventListener(
                            "deviceready",
                            function () {
                              clearTimeout(i), t();
                            },
                            !1
                          );
                        });
                      })
                    : An(
                        Error(
                          "Cordova must run in an Android or iOS file scheme."
                        )
                      )
                  ).then(
                    function () {
                      if ("function" != typeof Ii("universalLinks.subscribe", l))
                        throw lc(
                          "cordova-universal-links-plugin-fix is not installed"
                        );
                      if (void 0 === Ii("BuildInfo.packageName", l))
                        throw lc("cordova-plugin-buildinfo is not installed");
                      if (
                        "function" !=
                        typeof Ii("cordova.plugins.browsertab.openUrl", l)
                      )
                        throw lc("cordova-plugin-browsertab is not installed");
                      if ("function" != typeof Ii("cordova.InAppBrowser.open", l))
                        throw lc("cordova-plugin-inappbrowser is not installed");
                    },
                    function () {
                      throw new I("cordova-not-ready");
                    }
                  ));
            }),
              (t.Lb = function (t, n) {
                return (
                  n(new I("operation-not-supported-in-this-environment")), En()
                );
              }),
              (t.Jb = function () {
                return An(new I("operation-not-supported-in-this-environment"));
              }),
              (t.Xb = function () {
                return !1;
              }),
              (t.Ub = function () {
                return !0;
              }),
              (t.Qb = function () {
                return !0;
              }),
              (t.Kb = function (t, n, e, i) {
                if (this.c) return An(new I("redirect-operation-pending"));
                var r = this,
                  o = l.document,
                  a = null,
                  s = null,
                  u = null,
                  c = null;
                return (this.c = En()
                  .then(function () {
                    return Po(n), pc(r);
                  })
                  .then(function () {
                    return (function (e, t, n, i, r) {
                      var o = (function () {
                          for (var t = 20, n = []; 0 < t; )
                            n.push(
                              "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
                                Math.floor(62 * Math.random())
                              )
                            ),
                              t--;
                          return n.join("");
                        })(),
                        a = new Co(
                          t,
                          i,
                          null,
                          o,
                          new I("no-auth-event"),
                          null,
                          r
                        ),
                        s = Ii("BuildInfo.packageName", l);
                      if ("string" != typeof s)
                        throw new I("invalid-cordova-configuration");
                      var u = Ii("BuildInfo.displayName", l),
                        c = {};
                      if (
                        wi()
                          .toLowerCase()
                          .match(/iphone|ipad|ipod/)
                      )
                        c.ibi = s;
                      else {
                        if (
                          !wi()
                            .toLowerCase()
                            .match(/android/)
                        )
                          return An(
                            new I("operation-not-supported-in-this-environment")
                          );
                        c.apn = s;
                      }
                      u && (c.appDisplayName = u), (o = fc(o)), (c.sessionId = o);
                      var h = uu(e.u, e.i, e.l, t, n, null, i, e.m, c, e.s, r);
                      return e
                        .ka()
                        .then(function () {
                          var t = e.h;
                          return e.w.a.set($u, a.v(), t);
                        })
                        .then(function () {
                          var t = Ii("cordova.plugins.browsertab.isAvailable", l);
                          if ("function" != typeof t)
                            throw new I("invalid-cordova-configuration");
                          var n = null;
                          t(function (t) {
                            if (t) {
                              if (
                                "function" !=
                                typeof (n = Ii(
                                  "cordova.plugins.browsertab.openUrl",
                                  l
                                ))
                              )
                                throw new I("invalid-cordova-configuration");
                              n(h);
                            } else {
                              if (
                                "function" !=
                                typeof (n = Ii("cordova.InAppBrowser.open", l))
                              )
                                throw new I("invalid-cordova-configuration");
                              (t = wi()),
                                (e.a = n(
                                  h,
                                  t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) ||
                                    t.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
                                    ? "_blank"
                                    : "_system",
                                  "location=yes"
                                ));
                            }
                          });
                        });
                    })(r, t, n, e, i);
                  })
                  .then(function () {
                    return new mn(function (n, t) {
                      (s = function () {
                        var t = Ii("cordova.plugins.browsertab.close", l);
                        return (
                          n(),
                          "function" == typeof t && t(),
                          r.a &&
                            "function" == typeof r.a.close &&
                            (r.a.close(), (r.a = null)),
                          !1
                        );
                      }),
                        r.Ca(s),
                        (u = function () {
                          a =
                            a ||
                            ye(2e3).then(function () {
                              t(new I("redirect-cancelled-by-user"));
                            });
                        }),
                        (c = function () {
                          Li() && u();
                        }),
                        o.addEventListener("resume", u, !1),
                        wi()
                          .toLowerCase()
                          .match(/android/) ||
                          o.addEventListener("visibilitychange", c, !1);
                    }).o(function (t) {
                      return vc(r).then(function () {
                        throw t;
                      });
                    });
                  })
                  .ma(function () {
                    u && o.removeEventListener("resume", u, !1),
                      c && o.removeEventListener("visibilitychange", c, !1),
                      a && a.cancel(),
                      s && r.Qa(s),
                      (r.c = null);
                  }));
              }),
              (t.Ca = function (n) {
                this.b.push(n),
                  pc(this).o(function (t) {
                    "auth/invalid-cordova-configuration" === t.code &&
                      ((t = new Co(
                        "unknown",
                        null,
                        null,
                        null,
                        new I("no-auth-event")
                      )),
                      n(t));
                  });
              }),
              (t.Qa = function (n) {
                G(this.b, function (t) {
                  return t == n;
                });
              });
            var gc = { name: "pendingRedirect", F: "session" };
            function bc(t) {
              return Xu(t.b, gc, t.a);
            }
            function yc(t, n, e) {
              (this.i = {}),
                (this.w = 0),
                (this.D = t),
                (this.u = n),
                (this.m = e),
                (this.h = []),
                (this.f = !1),
                (this.l = g(this.s, this)),
                (this.b = new Dc()),
                (this.B = new Uc()),
                (this.g = new mc(this.u + ":" + this.m)),
                (this.c = {}),
                (this.c.unknown = this.b),
                (this.c.signInViaRedirect = this.b),
                (this.c.linkViaRedirect = this.b),
                (this.c.reauthViaRedirect = this.b),
                (this.c.signInViaPopup = this.B),
                (this.c.linkViaPopup = this.B),
                (this.c.reauthViaPopup = this.B),
                (this.a = wc(this.D, this.u, this.m, E));
            }
            function wc(t, n, e, i) {
              var r = Bl.SDK_VERSION || null;
              return hi() ? new hc(t, n, e, r, i) : new ru(t, n, e, r, i);
            }
            function Ic(n) {
              n.f || ((n.f = !0), n.a.Ca(n.l));
              var e = n.a;
              return n.a.ka().o(function (t) {
                throw (n.a == e && n.reset(), t);
              });
            }
            function Tc(e) {
              e.a.Ub() &&
                Ic(e).o(function (t) {
                  var n = new Co(
                    "unknown",
                    null,
                    null,
                    null,
                    new I("operation-not-supported-in-this-environment")
                  );
                  _c(t) && e.s(n);
                }),
                e.a.Qb() || Lc(e.b);
            }
            function Ec(e, t) {
              K(e.h, t) || e.h.push(t),
                e.f ||
                  (function (t) {
                    return t.b.get(gc, t.a).then(function (t) {
                      return "pending" == t;
                    });
                  })(e.g)
                    .then(function (t) {
                      t
                        ? bc(e.g).then(function () {
                            Ic(e).o(function (t) {
                              var n = new Co(
                                "unknown",
                                null,
                                null,
                                null,
                                new I(
                                  "operation-not-supported-in-this-environment"
                                )
                              );
                              _c(t) && e.s(n);
                            });
                          })
                        : Tc(e);
                    })
                    .o(function () {
                      Tc(e);
                    });
            }
            function Ac(t, n) {
              G(t.h, function (t) {
                return t == n;
              });
            }
            (yc.prototype.reset = function () {
              (this.f = !1),
                this.a.Qa(this.l),
                (this.a = wc(this.D, this.u, this.m)),
                (this.i = {});
            }),
              (yc.prototype.s = function (t) {
                if (!t) throw new I("invalid-auth-event");
                if (
                  (6e5 <= y() - this.w && ((this.i = {}), (this.w = 0)),
                  t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
                )
                  return !1;
                for (var n = !1, e = 0; e < this.h.length; e++) {
                  var i = this.h[e];
                  if (i.Cb(t.c, t.b)) {
                    (n = this.c[t.c]) &&
                      (n.h(t, i),
                      t &&
                        (t.f || t.b) &&
                        ((this.i[t.getUid()] = !0), (this.w = y()))),
                      (n = !0);
                    break;
                  }
                }
                return Lc(this.b), n;
              });
            var kc = new Di(2e3, 1e4),
              Sc = new Di(3e4, 6e4);
            function Nc(t, n, e, i, r, o, a) {
              return t.a.Jb(
                n,
                e,
                i,
                function () {
                  t.f || ((t.f = !0), t.a.Ca(t.l));
                },
                function () {
                  t.reset();
                },
                r,
                o,
                a
              );
            }
            function _c(t) {
              return !(!t || "auth/cordova-not-ready" != t.code);
            }
            function Oc(n, t, e, i, r) {
              var o;
              return (function (t) {
                return t.b.set(gc, "pending", t.a);
              })(n.g).then(function () {
                return n.a
                  .Kb(t, e, i, r)
                  .o(function (t) {
                    if (_c(t))
                      throw new I("operation-not-supported-in-this-environment");
                    return (
                      (o = t),
                      bc(n.g).then(function () {
                        throw o;
                      })
                    );
                  })
                  .then(function () {
                    return n.a.Xb()
                      ? new mn(function () {})
                      : bc(n.g)
                          .then(function () {
                            return n.pa();
                          })
                          .then(function () {})
                          .o(function () {});
                  });
              });
            }
            function Rc(t, n, e, i, r) {
              return t.a.Lb(
                i,
                function (t) {
                  n.la(e, null, t, r);
                },
                kc.get()
              );
            }
            yc.prototype.pa = function () {
              return this.b.pa();
            };
            var Pc = {};
            function Cc(t, n, e) {
              var i = n + ":" + e;
              return Pc[i] || (Pc[i] = new yc(t, n, e)), Pc[i];
            }
            function Dc() {
              (this.b = null),
                (this.f = []),
                (this.c = []),
                (this.a = null),
                (this.i = this.g = !1);
            }
            function Lc(t) {
              t.g || ((t.g = !0), jc(t, !1, null, null));
            }
            function Mc(t) {
              t.g && !t.i && jc(t, !1, null, null);
            }
            function xc(t, n) {
              if (
                ((t.b = function () {
                  return En(n);
                }),
                t.f.length)
              )
                for (var e = 0; e < t.f.length; e++) t.f[e](n);
            }
            function jc(t, n, e, i) {
              n
                ? i
                  ? (function (t, n) {
                      if (
                        ((t.b = function () {
                          return An(n);
                        }),
                        t.c.length)
                      )
                        for (var e = 0; e < t.c.length; e++) t.c[e](n);
                    })(t, i)
                  : xc(t, e)
                : xc(t, { user: null }),
                (t.f = []),
                (t.c = []);
            }
            function Uc() {}
            function Vc() {
              (this.Bb = !1),
                Object.defineProperty(this, "appVerificationDisabled", {
                  get: function () {
                    return this.Bb;
                  },
                  set: function (t) {
                    this.Bb = t;
                  },
                  enumerable: !1,
                });
            }
            function Fc(t, n) {
              (this.a = n), qi(this, "verificationId", t);
            }
            function qc(t, n, e, i) {
              return new _o(t).cb(n, e).then(function (t) {
                return new Fc(t, i);
              });
            }
            function Kc(t) {
              var n = xr(t);
              if (!(n && n.exp && n.auth_time && n.iat))
                throw new I(
                  "internal-error",
                  "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation."
                );
              Ki(this, {
                token: t,
                expirationTime: Mi(1e3 * n.exp),
                authTime: Mi(1e3 * n.auth_time),
                issuedAtTime: Mi(1e3 * n.iat),
                signInProvider:
                  n.firebase && n.firebase.sign_in_provider
                    ? n.firebase.sign_in_provider
                    : null,
                signInSecondFactor:
                  n.firebase && n.firebase.sign_in_second_factor
                    ? n.firebase.sign_in_second_factor
                    : null,
                claims: n,
              });
            }
            function Hc(t, n, e) {
              var i = n && n[Bc];
              if (!i)
                throw new I(
                  "argument-error",
                  "Internal assert: Invalid MultiFactorResolver"
                );
              (this.a = t),
                (this.f = ct(n)),
                (this.g = e),
                (this.c = new $r(null, i)),
                (this.b = []);
              var r = this;
              U(n[Gc] || [], function (t) {
                (t = Wi(t)) && r.b.push(t);
              }),
                qi(this, "auth", this.a),
                qi(this, "session", this.c),
                qi(this, "hints", this.b);
            }
            (Dc.prototype.reset = function () {
              (this.b = null), this.a && (this.a.cancel(), (this.a = null));
            }),
              (Dc.prototype.h = function (t, n) {
                if (t) {
                  this.reset(), (this.g = !0);
                  var e = t.c,
                    i = t.b,
                    r = t.a && "auth/web-storage-unsupported" == t.a.code,
                    o =
                      t.a &&
                      "auth/operation-not-supported-in-this-environment" ==
                        t.a.code;
                  (this.i = !(!r && !o)),
                    "unknown" != e || r || o
                      ? t.a
                        ? (jc(this, !0, null, t.a), En())
                        : n.Da(e, i)
                        ? (function (n, t, e) {
                            e = e.Da(t.c, t.b);
                            var i = t.g,
                              r = t.f,
                              o = t.i,
                              a = t.S(),
                              s = !!t.c.match(/Redirect$/);
                            e(i, r, a, o)
                              .then(function (t) {
                                jc(n, s, t, null);
                              })
                              .o(function (t) {
                                jc(n, s, null, t);
                              });
                          })(this, t, n)
                        : An(new I("invalid-auth-event"))
                      : (jc(this, !1, null, null), En());
                } else An(new I("invalid-auth-event"));
              }),
              (Dc.prototype.pa = function () {
                var e = this;
                return new mn(function (t, n) {
                  e.b
                    ? e.b().then(t, n)
                    : (e.f.push(t),
                      e.c.push(n),
                      (function (t) {
                        var n = new I("timeout");
                        t.a && t.a.cancel(),
                          (t.a = ye(Sc.get()).then(function () {
                            t.b || ((t.g = !0), jc(t, !0, null, n));
                          }));
                      })(e));
                });
              }),
              (Uc.prototype.h = function (t, n) {
                if (t) {
                  var e = t.c,
                    i = t.b;
                  t.a
                    ? (n.la(t.c, null, t.a, t.b), En())
                    : n.Da(e, i)
                    ? (function (t, n) {
                        var e = t.b,
                          i = t.c;
                        n.Da(i, e)(t.g, t.f, t.S(), t.i)
                          .then(function (t) {
                            n.la(i, t, null, e);
                          })
                          .o(function (t) {
                            n.la(i, null, t, e);
                          });
                      })(t, n)
                    : An(new I("invalid-auth-event"));
                } else An(new I("invalid-auth-event"));
              }),
              (Fc.prototype.confirm = function (t) {
                return (t = Oo(this.verificationId, t)), this.a(t);
              });
            var Gc = "mfaInfo",
              Bc = "mfaPendingCredential";
            function Wc(t, n, e, i) {
              I.call(this, "multi-factor-auth-required", i, n),
                (this.b = new Hc(t, n, e)),
                qi(this, "resolver", this.b);
            }
            function Xc(t, n, e) {
              if (
                t &&
                v(t.serverResponse) &&
                "auth/multi-factor-auth-required" === t.code
              )
                try {
                  return new Wc(n, t.serverResponse, e, t.message);
                } catch (t) {}
              return null;
            }
            function Jc() {}
            function Yc(t) {
              qi(this, "factorId", t.ea), (this.a = t);
            }
            function zc(t) {
              if ((Yc.call(this, t), this.a.ea != _o.PROVIDER_ID))
                throw new I(
                  "argument-error",
                  "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential"
                );
            }
            function $c(t, n) {
              for (var e in (Gn.call(this, t), n)) this[e] = n[e];
            }
            function Zc(t, n) {
              (this.a = t),
                (this.b = []),
                (this.c = g(this.wc, this)),
                ee(this.a, "userReloaded", this.c);
              var i = [];
              n &&
                n.multiFactor &&
                n.multiFactor.enrolledFactors &&
                U(n.multiFactor.enrolledFactors, function (t) {
                  var n = null,
                    e = {};
                  if (t) {
                    t.uid && (e[Yi] = t.uid),
                      t.displayName && (e[Xi] = t.displayName),
                      t.enrollmentTime &&
                        (e[Ji] = new Date(t.enrollmentTime).toISOString()),
                      t.phoneNumber && (e[zi] = t.phoneNumber);
                    try {
                      n = new $i(e);
                    } catch (t) {}
                    t = n;
                  } else t = null;
                  t && i.push(t);
                }),
                Qc(this, i);
            }
            function Qc(t, n) {
              (t.b = n), qi(t, "enrolledFactors", n);
            }
            function th(t, n, e) {
              if (
                ((this.h = t),
                (this.i = n),
                (this.g = e),
                (this.c = 3e4),
                (this.f = 96e4),
                (this.b = null),
                (this.a = this.c),
                this.f < this.c)
              )
                throw Error(
                  "Proactive refresh lower bound greater than upper bound!"
                );
            }
            function nh(t, n) {
              return n
                ? ((t.a = t.c), t.g())
                : ((n = t.a), (t.a *= 2), t.a > t.f && (t.a = t.f), n);
            }
            function eh(t) {
              (this.c = t), (this.b = this.a = null);
            }
            function ih(t) {
              return (t.b && 1e3 * t.b.c) || 0;
            }
            function rh(t, n) {
              var e = n.refreshToken;
              (t.b = Mr(n[Ga] || "")), (t.a = e);
            }
            function oh(n, t) {
              return (function (t, i) {
                return new mn(function (n, e) {
                  ("refresh_token" == i.grant_type && i.refresh_token) ||
                  ("authorization_code" == i.grant_type && i.code)
                    ? $a(
                        t,
                        t.u + "?key=" + encodeURIComponent(t.c),
                        function (t) {
                          t
                            ? t.error
                              ? e(Ys(t))
                              : t.access_token && t.refresh_token
                              ? n(t)
                              : e(new I("internal-error"))
                            : e(new I("network-request-failed"));
                        },
                        "POST",
                        Ge(i).toString(),
                        t.g,
                        t.m.get()
                      )
                    : e(new I("internal-error"));
                });
              })(n.c, t)
                .then(function (t) {
                  return (
                    (n.b = Mr(t.access_token)),
                    (n.a = t.refresh_token),
                    { accessToken: n.b.toString(), refreshToken: n.a }
                  );
                })
                .o(function (t) {
                  throw ("auth/user-token-expired" == t.code && (n.a = null), t);
                });
            }
            function ah(t, n) {
              (this.a = t || null),
                (this.b = n || null),
                Ki(this, {
                  lastSignInTime: Mi(n || null),
                  creationTime: Mi(t || null),
                });
            }
            function sh(t, n, e, i, r, o) {
              Ki(this, {
                uid: t,
                displayName: i || null,
                photoURL: r || null,
                email: e || null,
                phoneNumber: o || null,
                providerId: n,
              });
            }
            function uh(t, n, e) {
              (this.N = []),
                (this.l = t.apiKey),
                (this.m = t.appName),
                (this.s = t.authDomain || null),
                (t = Bl.SDK_VERSION ? yi(Bl.SDK_VERSION) : null),
                (this.a = new Ka(this.l, N(E), t)),
                (this.b = new eh(this.a)),
                vh(this, n[Ga]),
                rh(this.b, n),
                qi(this, "refreshToken", this.b.a),
                bh(this, e || {}),
                pe.call(this),
                (this.P = !1),
                this.s && Ei() && (this.i = Cc(this.s, this.l, this.m)),
                (this.R = []),
                (this.h = null),
                (this.B = (function (n) {
                  return new th(
                    function () {
                      return n.I(!0);
                    },
                    function (t) {
                      return !(!t || "auth/network-request-failed" != t.code);
                    },
                    function () {
                      var t = ih(n.b) - y() - 3e5;
                      return 0 < t ? t : 0;
                    }
                  );
                })(this)),
                (this.Z = g(this.Ma, this));
              var i = this;
              (this.oa = null),
                (this.za = function (t) {
                  i.va(t.g);
                }),
                (this.aa = null),
                (this.W = []),
                (this.ya = function (t) {
                  hh(i, t.c);
                }),
                (this.$ = null),
                (this.O = new Zc(this, e)),
                qi(this, "multiFactor", this.O);
            }
            function ch(t, n) {
              t.aa && oe(t.aa, "languageCodeChanged", t.za),
                (t.aa = n) && ee(n, "languageCodeChanged", t.za);
            }
            function hh(t, n) {
              (t.W = n), za(t.a, Bl.SDK_VERSION ? yi(Bl.SDK_VERSION, t.W) : null);
            }
            function lh(t, n) {
              t.$ && oe(t.$, "frameworkChanged", t.ya),
                (t.$ = n) && ee(n, "frameworkChanged", t.ya);
            }
            function fh(n) {
              try {
                return Bl.app(n.m).auth();
              } catch (t) {
                throw new I(
                  "internal-error",
                  "No firebase.auth.Auth instance is available for the Firebase App '" +
                    n.m +
                    "'!"
                );
              }
            }
            function dh(t) {
              t.D ||
                t.B.b ||
                (t.B.start(),
                oe(t, "tokenChanged", t.Z),
                ee(t, "tokenChanged", t.Z));
            }
            function ph(t) {
              oe(t, "tokenChanged", t.Z), t.B.stop();
            }
            function vh(t, n) {
              (t.xa = n), qi(t, "_lat", n);
            }
            function mh(t) {
              for (var n = [], e = 0; e < t.R.length; e++) n.push(t.R[e](t));
              return Sn(n).then(function () {
                return t;
              });
            }
            function gh(t) {
              t.i && !t.P && ((t.P = !0), Ec(t.i, t));
            }
            function bh(t, n) {
              Ki(t, {
                uid: n.uid,
                displayName: n.displayName || null,
                photoURL: n.photoURL || null,
                email: n.email || null,
                emailVerified: n.emailVerified || !1,
                phoneNumber: n.phoneNumber || null,
                isAnonymous: n.isAnonymous || !1,
                tenantId: n.tenantId || null,
                metadata: new ah(n.createdAt, n.lastLoginAt),
                providerData: [],
              }),
                (t.a.b = t.tenantId);
            }
            function yh() {}
            function wh(t) {
              return En().then(function () {
                if (t.D) throw new I("app-deleted");
              });
            }
            function Ih(t) {
              return F(t.providerData, function (t) {
                return t.providerId;
              });
            }
            function Th(t, n) {
              n && (Eh(t, n.providerId), t.providerData.push(n));
            }
            function Eh(t, n) {
              G(t.providerData, function (t) {
                return t.providerId == n;
              });
            }
            function Ah(t, n, e) {
              ("uid" != n || e) && t.hasOwnProperty(n) && qi(t, n, e);
            }
            function kh(n, t) {
              n != t &&
                (Ki(n, {
                  uid: t.uid,
                  displayName: t.displayName,
                  photoURL: t.photoURL,
                  email: t.email,
                  emailVerified: t.emailVerified,
                  phoneNumber: t.phoneNumber,
                  isAnonymous: t.isAnonymous,
                  tenantId: t.tenantId,
                  providerData: [],
                }),
                t.metadata
                  ? qi(
                      n,
                      "metadata",
                      (function (t) {
                        return new ah(t.a, t.b);
                      })(t.metadata)
                    )
                  : qi(n, "metadata", new ah()),
                U(t.providerData, function (t) {
                  Th(n, t);
                }),
                (function (t, n) {
                  (t.b = n.b), (t.a = n.a);
                })(n.b, t.b),
                qi(n, "refreshToken", n.b.a),
                Qc(n.O, t.O.b));
            }
            function Sh(e) {
              return e.I().then(function (t) {
                var n = e.isAnonymous;
                return (function (t, n) {
                  return Xs(t.a, As, { idToken: n }).then(g(t.Ic, t));
                })(e, t).then(function () {
                  return n || Ah(e, "isAnonymous", !1), t;
                });
              });
            }
            function Nh(t, n) {
              n[Ga] &&
                t.xa != n[Ga] &&
                (rh(t.b, n),
                t.dispatchEvent(new $c("tokenChanged")),
                vh(t, n[Ga]),
                Ah(t, "refreshToken", t.b.a));
            }
            function _h(t, n) {
              return Sh(t).then(function () {
                if (K(Ih(t), n))
                  return mh(t).then(function () {
                    throw new I("provider-already-linked");
                  });
              });
            }
            function Oh(t, n, e) {
              return Hi({
                user: t,
                credential: Ro(n),
                additionalUserInfo: (n = qr(n)),
                operationType: e,
              });
            }
            function Rh(t, n) {
              return (
                Nh(t, n),
                t.reload().then(function () {
                  return t;
                })
              );
            }
            function Ph(e, i, t, n, r) {
              if (!Ei())
                return An(new I("operation-not-supported-in-this-environment"));
              if (e.h && !r) return An(e.h);
              var o = Fr(t.providerId),
                a = Ri(e.uid + ":::"),
                s = null;
              (!Si() || li()) &&
                e.s &&
                t.isOAuthProvider &&
                (s = uu(
                  e.s,
                  e.l,
                  e.m,
                  i,
                  t,
                  null,
                  a,
                  Bl.SDK_VERSION || null,
                  null,
                  null,
                  e.tenantId
                ));
              var u = ai(s, o && o.ta, o && o.sa);
              return (
                (n = n()
                  .then(function () {
                    if ((Dh(e), !r)) return e.I().then(function () {});
                  })
                  .then(function () {
                    return Nc(e.i, u, i, t, a, !!s, e.tenantId);
                  })
                  .then(function () {
                    return new mn(function (t, n) {
                      e.la(
                        i,
                        null,
                        new I("cancelled-popup-request"),
                        e.g || null
                      ),
                        (e.f = t),
                        (e.w = n),
                        (e.g = a),
                        (e.c = Rc(e.i, e, i, u, a));
                    });
                  })
                  .then(function (t) {
                    return u && oi(u), t ? Hi(t) : null;
                  })
                  .o(function (t) {
                    throw (u && oi(u), t);
                  })),
                Lh(e, n, r)
              );
            }
            function Ch(n, t, e, i, r) {
              if (!Ei())
                return An(new I("operation-not-supported-in-this-environment"));
              if (n.h && !r) return An(n.h);
              var o = null,
                a = Ri(n.uid + ":::");
              return (
                (i = i()
                  .then(function () {
                    if ((Dh(n), !r)) return n.I().then(function () {});
                  })
                  .then(function () {
                    return (n.fa = a), mh(n);
                  })
                  .then(function (t) {
                    return n.ga && (t = (t = n.ga).b.set(jh, n.v(), t.a)), t;
                  })
                  .then(function () {
                    return Oc(n.i, t, e, a, n.tenantId);
                  })
                  .o(function (t) {
                    if (((o = t), n.ga)) return Uh(n.ga);
                    throw o;
                  })
                  .then(function () {
                    if (o) throw o;
                  })),
                Lh(n, i, r)
              );
            }
            function Dh(t) {
              if (!t.i || !t.P) {
                if (t.i && !t.P) throw new I("internal-error");
                throw new I("auth-domain-config-required");
              }
            }
            function Lh(e, t, n) {
              var i = (function (n, t, e) {
                return n.h && !e
                  ? (t.cancel(), An(n.h))
                  : t.o(function (t) {
                      throw (
                        (!t ||
                          ("auth/user-disabled" != t.code &&
                            "auth/user-token-expired" != t.code) ||
                          (n.h || n.dispatchEvent(new $c("userInvalidated")),
                          (n.h = t)),
                        t)
                      );
                    });
              })(e, t, n);
              return (
                e.N.push(i),
                i.ma(function () {
                  H(e.N, i);
                }),
                i.o(function (t) {
                  var n = null;
                  throw (
                    (t &&
                      "auth/multi-factor-auth-required" === t.code &&
                      (n = Xc(t.v(), fh(e), g(e.hc, e))),
                    n || t)
                  );
                })
              );
            }
            function Mh(t) {
              if (!t.apiKey) return null;
              var n = {
                  apiKey: t.apiKey,
                  authDomain: t.authDomain,
                  appName: t.appName,
                },
                e = {};
              if (!t.stsTokenManager || !t.stsTokenManager.accessToken)
                return null;
              (e[Ga] = t.stsTokenManager.accessToken),
                (e.refreshToken = t.stsTokenManager.refreshToken || null);
              var i = new uh(n, e, t);
              return (
                t.providerData &&
                  U(t.providerData, function (t) {
                    t && Th(i, Hi(t));
                  }),
                t.redirectEventId && (i.fa = t.redirectEventId),
                i
              );
            }
            function xh(t) {
              (this.a = t), (this.b = Gu());
            }
            (Hc.prototype.Pc = function (t) {
              var e = this;
              return t.ob(this.a.b, this.c).then(function (t) {
                var n = ct(e.f);
                return delete n[Gc], delete n[Bc], lt(n, t), e.g(n);
              });
            }),
              w(Wc, I),
              (Jc.prototype.ob = function (t, n, e) {
                return n.type == Zr
                  ? (function (n, e, t, i) {
                      return t.Fa().then(function (t) {
                        return (
                          (t = { idToken: t }),
                          void 0 !== i && (t.displayName = i),
                          lt(t, { phoneVerificationInfo: No(n.a) }),
                          Xs(e, Ts, t)
                        );
                      });
                    })(this, t, n, e)
                  : (function (n, e, t) {
                      return t.Fa().then(function (t) {
                        return (
                          lt((t = { mfaPendingCredential: t }), {
                            phoneVerificationInfo: No(n.a),
                          }),
                          Xs(e, Es, t)
                        );
                      });
                    })(this, t, n);
              }),
              w(Yc, Jc),
              w(zc, Yc),
              w($c, Gn),
              ((t = Zc.prototype).wc = function (t) {
                Qc(
                  this,
                  (function (t) {
                    var n = [];
                    return (
                      U(t.mfaInfo || [], function (t) {
                        (t = Wi(t)) && n.push(t);
                      }),
                      n
                    );
                  })(t.ed)
                );
              }),
              (t.Ob = function () {
                return this.a.I().then(function (t) {
                  return new $r(t, null);
                });
              }),
              (t.dc = function (n, e) {
                var i = this,
                  r = this.a.a;
                return this.Ob()
                  .then(function (t) {
                    return n.ob(r, t, e);
                  })
                  .then(function (t) {
                    return Nh(i.a, t), i.a.reload();
                  });
              }),
              (t.$c = function (t) {
                var e = this,
                  i = "string" == typeof t ? t : t.uid,
                  n = this.a.a;
                return this.a
                  .I()
                  .then(function (t) {
                    return Xs(n, Ws, { idToken: t, mfaEnrollmentId: i });
                  })
                  .then(function (t) {
                    var n = V(e.b, function (t) {
                      return t.uid != i;
                    });
                    return (
                      Qc(e, n),
                      Nh(e.a, t),
                      e.a.reload().o(function (t) {
                        if ("auth/user-token-expired" != t.code) throw t;
                      })
                    );
                  });
              }),
              (t.v = function () {
                return {
                  multiFactor: {
                    enrolledFactors: F(this.b, function (t) {
                      return t.v();
                    }),
                  },
                };
              }),
              (th.prototype.start = function () {
                (this.a = this.c),
                  (function n(e, t) {
                    e.stop();
                    e.b = ye(nh(e, t))
                      .then(function () {
                        return (
                          (n = l.document),
                          (e = null),
                          Li() || !n
                            ? En()
                            : new mn(function (t) {
                                (e = function () {
                                  Li() &&
                                    (n.removeEventListener(
                                      "visibilitychange",
                                      e,
                                      !1
                                    ),
                                    t());
                                }),
                                  n.addEventListener("visibilitychange", e, !1);
                              }).o(function (t) {
                                throw (
                                  (n.removeEventListener(
                                    "visibilitychange",
                                    e,
                                    !1
                                  ),
                                  t)
                                );
                              })
                        );
                        var n, e;
                      })
                      .then(function () {
                        return e.h();
                      })
                      .then(function () {
                        n(e, !0);
                      })
                      .o(function (t) {
                        e.i(t) && n(e, !1);
                      });
                  })(this, !0);
              }),
              (th.prototype.stop = function () {
                this.b && (this.b.cancel(), (this.b = null));
              }),
              (eh.prototype.v = function () {
                return {
                  apiKey: this.c.c,
                  refreshToken: this.a,
                  accessToken: this.b && this.b.toString(),
                  expirationTime: ih(this),
                };
              }),
              (eh.prototype.getToken = function (t) {
                return (
                  (t = !!t),
                  this.b && !this.a
                    ? An(new I("user-token-expired"))
                    : t || !this.b || y() > ih(this) - 3e4
                    ? this.a
                      ? oh(this, {
                          grant_type: "refresh_token",
                          refresh_token: this.a,
                        })
                      : En(null)
                    : En({ accessToken: this.b.toString(), refreshToken: this.a })
                );
              }),
              (ah.prototype.v = function () {
                return { lastLoginAt: this.b, createdAt: this.a };
              }),
              w(uh, pe),
              (uh.prototype.va = function (t) {
                (this.oa = t), Ya(this.a, t);
              }),
              (uh.prototype.ja = function () {
                return this.oa;
              }),
              (uh.prototype.Ea = function () {
                return W(this.W);
              }),
              (uh.prototype.Ma = function () {
                this.B.b && (this.B.stop(), this.B.start());
              }),
              qi(uh.prototype, "providerId", "firebase"),
              ((t = uh.prototype).reload = function () {
                var t = this;
                return Lh(
                  this,
                  wh(this).then(function () {
                    return Sh(t)
                      .then(function () {
                        return mh(t);
                      })
                      .then(yh);
                  })
                );
              }),
              (t.mc = function (t) {
                return this.I(t).then(function (t) {
                  return new Kc(t);
                });
              }),
              (t.I = function (t) {
                var n = this;
                return Lh(
                  this,
                  wh(this)
                    .then(function () {
                      return n.b.getToken(t);
                    })
                    .then(function (t) {
                      if (!t) throw new I("internal-error");
                      return (
                        t.accessToken != n.xa &&
                          (vh(n, t.accessToken),
                          n.dispatchEvent(new $c("tokenChanged"))),
                        Ah(n, "refreshToken", t.refreshToken),
                        t.accessToken
                      );
                    })
                );
              }),
              (t.Ic = function (t) {
                if (!(t = t.users) || !t.length) throw new I("internal-error");
                bh(this, {
                  uid: (t = t[0]).localId,
                  displayName: t.displayName,
                  photoURL: t.photoUrl,
                  email: t.email,
                  emailVerified: !!t.emailVerified,
                  phoneNumber: t.phoneNumber,
                  lastLoginAt: t.lastLoginAt,
                  createdAt: t.createdAt,
                  tenantId: t.tenantId,
                });
                for (
                  var n = (function (t) {
                      return (t = t.providerUserInfo) && t.length
                        ? F(t, function (t) {
                            return new sh(
                              t.rawId,
                              t.providerId,
                              t.email,
                              t.displayName,
                              t.photoUrl,
                              t.phoneNumber
                            );
                          })
                        : [];
                    })(t),
                    e = 0;
                  e < n.length;
                  e++
                )
                  Th(this, n[e]);
                Ah(
                  this,
                  "isAnonymous",
                  !(
                    (this.email && t.passwordHash) ||
                    (this.providerData && this.providerData.length)
                  )
                ),
                  this.dispatchEvent(new $c("userReloaded", { ed: t }));
              }),
              (t.Jc = function (t) {
                return (
                  Vi(
                    "firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."
                  ),
                  this.pb(t)
                );
              }),
              (t.pb = function (t) {
                var n = this,
                  e = null;
                return Lh(
                  this,
                  t
                    .c(this.a, this.uid)
                    .then(function (t) {
                      return (
                        Nh(n, t),
                        (e = Oh(n, t, "reauthenticate")),
                        (n.h = null),
                        n.reload()
                      );
                    })
                    .then(function () {
                      return e;
                    }),
                  !0
                );
              }),
              (t.Ac = function (t) {
                return (
                  Vi(
                    "firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."
                  ),
                  this.mb(t)
                );
              }),
              (t.mb = function (n) {
                var e = this,
                  i = null;
                return Lh(
                  this,
                  _h(this, n.providerId)
                    .then(function () {
                      return e.I();
                    })
                    .then(function (t) {
                      return n.b(e.a, t);
                    })
                    .then(function (t) {
                      return (i = Oh(e, t, "link")), Rh(e, t);
                    })
                    .then(function () {
                      return i;
                    })
                );
              }),
              (t.Bc = function (t, n) {
                var e = this;
                return Lh(
                  this,
                  _h(this, "phone").then(function () {
                    return qc(fh(e), t, n, g(e.mb, e));
                  })
                );
              }),
              (t.Kc = function (t, n) {
                var e = this;
                return Lh(
                  this,
                  En().then(function () {
                    return qc(fh(e), t, n, g(e.pb, e));
                  }),
                  !0
                );
              }),
              (t.xb = function (n) {
                var e = this;
                return Lh(
                  this,
                  this.I()
                    .then(function (t) {
                      return e.a.xb(t, n);
                    })
                    .then(function (t) {
                      return Nh(e, t), e.reload();
                    })
                );
              }),
              (t.cd = function (n) {
                var e = this;
                return Lh(
                  this,
                  this.I()
                    .then(function (t) {
                      return n.b(e.a, t);
                    })
                    .then(function (t) {
                      return Nh(e, t), e.reload();
                    })
                );
              }),
              (t.yb = function (n) {
                var e = this;
                return Lh(
                  this,
                  this.I()
                    .then(function (t) {
                      return e.a.yb(t, n);
                    })
                    .then(function (t) {
                      return Nh(e, t), e.reload();
                    })
                );
              }),
              (t.zb = function (n) {
                if (void 0 === n.displayName && void 0 === n.photoURL)
                  return wh(this);
                var e = this;
                return Lh(
                  this,
                  this.I()
                    .then(function (t) {
                      return e.a.zb(t, {
                        displayName: n.displayName,
                        photoUrl: n.photoURL,
                      });
                    })
                    .then(function (t) {
                      return (
                        Nh(e, t),
                        Ah(e, "displayName", t.displayName || null),
                        Ah(e, "photoURL", t.photoUrl || null),
                        U(e.providerData, function (t) {
                          "password" === t.providerId &&
                            (qi(t, "displayName", e.displayName),
                            qi(t, "photoURL", e.photoURL));
                        }),
                        mh(e)
                      );
                    })
                    .then(yh)
                );
              }),
              (t.ad = function (n) {
                var e = this;
                return Lh(
                  this,
                  Sh(this).then(function (t) {
                    return K(Ih(e), n)
                      ? (function (t, n, e) {
                          return Xs(t, ys, { idToken: n, deleteProvider: e });
                        })(e.a, t, [n]).then(function (t) {
                          var n = {};
                          return (
                            U(t.providerUserInfo || [], function (t) {
                              n[t.providerId] = !0;
                            }),
                            U(Ih(e), function (t) {
                              n[t] || Eh(e, t);
                            }),
                            n[_o.PROVIDER_ID] || qi(e, "phoneNumber", null),
                            mh(e)
                          );
                        })
                      : mh(e).then(function () {
                          throw new I("no-such-provider");
                        });
                  })
                );
              }),
              (t.delete = function () {
                var n = this;
                return Lh(
                  this,
                  this.I()
                    .then(function (t) {
                      return Xs(n.a, bs, { idToken: t });
                    })
                    .then(function () {
                      n.dispatchEvent(new $c("userDeleted"));
                    })
                ).then(function () {
                  for (var t = 0; t < n.N.length; t++)
                    n.N[t].cancel("app-deleted");
                  ch(n, null),
                    lh(n, null),
                    (n.N = []),
                    (n.D = !0),
                    ph(n),
                    qi(n, "refreshToken", null),
                    n.i && Ac(n.i, n);
                });
              }),
              (t.Cb = function (t, n) {
                return !!(
                  ("linkViaPopup" == t && (this.g || null) == n && this.f) ||
                  ("reauthViaPopup" == t && (this.g || null) == n && this.f) ||
                  ("linkViaRedirect" == t && (this.fa || null) == n) ||
                  ("reauthViaRedirect" == t && (this.fa || null) == n)
                );
              }),
              (t.la = function (t, n, e, i) {
                ("linkViaPopup" != t && "reauthViaPopup" != t) ||
                  i != (this.g || null) ||
                  (e && this.w ? this.w(e) : n && !e && this.f && this.f(n),
                  this.c && (this.c.cancel(), (this.c = null)),
                  delete this.f,
                  delete this.w);
              }),
              (t.Da = function (t, n) {
                return "linkViaPopup" == t && n == (this.g || null)
                  ? g(this.Hb, this)
                  : "reauthViaPopup" == t && n == (this.g || null)
                  ? g(this.Ib, this)
                  : "linkViaRedirect" == t && (this.fa || null) == n
                  ? g(this.Hb, this)
                  : "reauthViaRedirect" == t && (this.fa || null) == n
                  ? g(this.Ib, this)
                  : null;
              }),
              (t.Cc = function (t) {
                var n = this;
                return Ph(
                  this,
                  "linkViaPopup",
                  t,
                  function () {
                    return _h(n, t.providerId).then(function () {
                      return mh(n);
                    });
                  },
                  !1
                );
              }),
              (t.Lc = function (t) {
                return Ph(
                  this,
                  "reauthViaPopup",
                  t,
                  function () {
                    return En();
                  },
                  !0
                );
              }),
              (t.Dc = function (t) {
                var n = this;
                return Ch(
                  this,
                  "linkViaRedirect",
                  t,
                  function () {
                    return _h(n, t.providerId);
                  },
                  !1
                );
              }),
              (t.Mc = function (t) {
                return Ch(
                  this,
                  "reauthViaRedirect",
                  t,
                  function () {
                    return En();
                  },
                  !0
                );
              }),
              (t.Hb = function (n, e, t, i) {
                var r = this;
                this.c && (this.c.cancel(), (this.c = null));
                var o = null;
                return (
                  (t = this.I()
                    .then(function (t) {
                      return ls(r.a, {
                        requestUri: n,
                        postBody: i,
                        sessionId: e,
                        idToken: t,
                      });
                    })
                    .then(function (t) {
                      return (o = Oh(r, t, "link")), Rh(r, t);
                    })
                    .then(function () {
                      return o;
                    })),
                  Lh(this, t)
                );
              }),
              (t.Ib = function (t, n, e, i) {
                var r = this;
                this.c && (this.c.cancel(), (this.c = null));
                var o = null;
                return Lh(
                  this,
                  En()
                    .then(function () {
                      return no(
                        fs(r.a, {
                          requestUri: t,
                          sessionId: n,
                          postBody: i,
                          tenantId: e,
                        }),
                        r.uid
                      );
                    })
                    .then(function (t) {
                      return (
                        (o = Oh(r, t, "reauthenticate")),
                        Nh(r, t),
                        (r.h = null),
                        r.reload()
                      );
                    })
                    .then(function () {
                      return o;
                    }),
                  !0
                );
              }),
              (t.qb = function (n) {
                var e = this,
                  i = null;
                return Lh(
                  this,
                  this.I()
                    .then(function (t) {
                      return (i = t), void 0 === n || ut(n) ? {} : Pr(new Ir(n));
                    })
                    .then(function (t) {
                      return e.a.qb(i, t);
                    })
                    .then(function (t) {
                      if (e.email != t) return e.reload();
                    })
                    .then(function () {})
                );
              }),
              (t.Ab = function (n, e) {
                var i = this,
                  r = null;
                return Lh(
                  this,
                  this.I()
                    .then(function (t) {
                      return (r = t), void 0 === e || ut(e) ? {} : Pr(new Ir(e));
                    })
                    .then(function (t) {
                      return i.a.Ab(r, n, t);
                    })
                    .then(function (t) {
                      if (i.email != t) return i.reload();
                    })
                    .then(function () {})
                );
              }),
              (t.hc = function (t) {
                var n = null,
                  e = this;
                return Lh(
                  this,
                  (t = no(En(t), e.uid)
                    .then(function (t) {
                      return (
                        (n = Oh(e, t, "reauthenticate")),
                        Nh(e, t),
                        (e.h = null),
                        e.reload()
                      );
                    })
                    .then(function () {
                      return n;
                    })),
                  !0
                );
              }),
              (t.toJSON = function () {
                return this.v();
              }),
              (t.v = function () {
                var n = {
                  uid: this.uid,
                  displayName: this.displayName,
                  photoURL: this.photoURL,
                  email: this.email,
                  emailVerified: this.emailVerified,
                  phoneNumber: this.phoneNumber,
                  isAnonymous: this.isAnonymous,
                  tenantId: this.tenantId,
                  providerData: [],
                  apiKey: this.l,
                  appName: this.m,
                  authDomain: this.s,
                  stsTokenManager: this.b.v(),
                  redirectEventId: this.fa || null,
                };
                return (
                  this.metadata && lt(n, this.metadata.v()),
                  U(this.providerData, function (t) {
                    n.providerData.push(
                      (function (t) {
                        var n,
                          e = {};
                        for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        return e;
                      })(t)
                    );
                  }),
                  lt(n, this.O.v()),
                  n
                );
              });
            var jh = { name: "redirectUser", F: "session" };
            function Uh(t) {
              return Xu(t.b, jh, t.a);
            }
            function Vh(t) {
              (this.a = t),
                (this.b = Gu()),
                (this.c = null),
                (this.f = (function (n) {
                  var e = Kh("local"),
                    i = Kh("session"),
                    r = Kh("none");
                  return (function (e, i, r) {
                    var o = Wu(i, r),
                      a = Bu(e, i.F);
                    return e.get(i, r).then(function (t) {
                      var n = null;
                      try {
                        n = Oi(l.localStorage.getItem(o));
                      } catch (t) {}
                      if (n && !t)
                        return l.localStorage.removeItem(o), e.set(i, n, r);
                      n &&
                        t &&
                        "localStorage" != a.type &&
                        l.localStorage.removeItem(o);
                    });
                  })(n.b, e, n.a)
                    .then(function () {
                      return n.b.get(i, n.a);
                    })
                    .then(function (t) {
                      return t
                        ? i
                        : n.b.get(r, n.a).then(function (t) {
                            return t
                              ? r
                              : n.b.get(e, n.a).then(function (t) {
                                  return t
                                    ? e
                                    : n.b.get(qh, n.a).then(function (t) {
                                        return t ? Kh(t) : e;
                                      });
                                });
                          });
                    })
                    .then(function (t) {
                      return (n.c = t), Fh(n, t.F);
                    })
                    .o(function () {
                      n.c || (n.c = e);
                    });
                })(this)),
                this.b.addListener(Kh("local"), this.a, g(this.g, this));
            }
            function Fh(t, n) {
              var e,
                i = [];
              for (e in Ku) Ku[e] !== n && i.push(Xu(t.b, Kh(Ku[e]), t.a));
              return (
                i.push(Xu(t.b, qh, t.a)),
                (function (s) {
                  return new mn(function (e, n) {
                    var i = s.length,
                      r = [];
                    if (i)
                      for (
                        var t = function (t, n) {
                            i--, (r[t] = n), 0 == i && e(r);
                          },
                          o = function (t) {
                            n(t);
                          },
                          a = 0;
                        a < s.length;
                        a++
                      )
                        kn(s[a], b(t, a), o);
                    else e(r);
                  });
                })(i)
              );
            }
            Vh.prototype.g = function () {
              var n = this,
                e = Kh("local");
              Wh(this, function () {
                return En()
                  .then(function () {
                    return n.c && "local" != n.c.F ? n.b.get(e, n.a) : null;
                  })
                  .then(function (t) {
                    if (t)
                      return Fh(n, "local").then(function () {
                        n.c = e;
                      });
                  });
              });
            };
            var qh = { name: "persistence", F: "session" };
            function Kh(t) {
              return { name: "authUser", F: t };
            }
            function Hh(t, n) {
              return Wh(t, function () {
                return t.b.set(t.c, n.v(), t.a);
              });
            }
            function Gh(t) {
              return Wh(t, function () {
                return Xu(t.b, t.c, t.a);
              });
            }
            function Bh(t, n) {
              return Wh(t, function () {
                return t.b.get(t.c, t.a).then(function (t) {
                  return t && n && (t.authDomain = n), Mh(t || {});
                });
              });
            }
            function Wh(t, n) {
              return (t.f = t.f.then(n, n)), t.f;
            }
            function Xh(t) {
              if (
                ((this.l = !1),
                qi(this, "settings", new Vc()),
                qi(this, "app", t),
                !nl(this).options || !nl(this).options.apiKey)
              )
                throw new I("invalid-api-key");
              (t = Bl.SDK_VERSION ? yi(Bl.SDK_VERSION) : null),
                (this.b = new Ka(
                  nl(this).options && nl(this).options.apiKey,
                  N(E),
                  t
                )),
                (this.P = []),
                (this.m = []),
                (this.O = []),
                (this.$b = Bl.INTERNAL.createSubscribe(g(this.xc, this))),
                (this.W = void 0),
                (this.ac = Bl.INTERNAL.createSubscribe(g(this.yc, this))),
                Qh(this, null),
                (this.i = new Vh(nl(this).options.apiKey + ":" + nl(this).name)),
                (this.B = new xh(nl(this).options.apiKey + ":" + nl(this).name)),
                (this.Z = ol(
                  this,
                  (function (e) {
                    var t = nl(e).options.authDomain,
                      n = (function (n) {
                        var t = (function (t, n) {
                          return t.b.get(jh, t.a).then(function (t) {
                            return t && n && (t.authDomain = n), Mh(t || {});
                          });
                        })(n.B, nl(n).options.authDomain).then(function (t) {
                          return (n.D = t) && (t.ga = n.B), Uh(n.B);
                        });
                        return ol(n, t);
                      })(e)
                        .then(function () {
                          return Bh(e.i, t);
                        })
                        .then(function (n) {
                          return n
                            ? ((n.ga = e.B),
                              e.D && (e.D.fa || null) == (n.fa || null)
                                ? n
                                : n
                                    .reload()
                                    .then(function () {
                                      return Hh(e.i, n).then(function () {
                                        return n;
                                      });
                                    })
                                    .o(function (t) {
                                      return "auth/network-request-failed" ==
                                        t.code
                                        ? n
                                        : Gh(e.i);
                                    }))
                            : null;
                        })
                        .then(function (t) {
                          Qh(e, t || null);
                        });
                    return ol(e, n);
                  })(this)
                )),
                (this.h = ol(
                  this,
                  (function (n) {
                    return n.Z.then(function () {
                      return $h(n);
                    })
                      .o(function () {})
                      .then(function () {
                        if (!n.l) return n.oa();
                      })
                      .o(function () {})
                      .then(function () {
                        if (!n.l) {
                          n.aa = !0;
                          var t = n.i;
                          t.b.addListener(Kh("local"), t.a, n.oa);
                        }
                      });
                  })(this)
                )),
                (this.aa = !1),
                (this.oa = g(this.Xc, this)),
                (this.Ma = g(this.ca, this)),
                (this.xa = g(this.jc, this)),
                (this.ya = g(this.uc, this)),
                (this.za = g(this.vc, this)),
                (this.a = null),
                (function (n) {
                  var e = nl(n).options.authDomain,
                    i = nl(n).options.apiKey;
                  e &&
                    Ei() &&
                    (n.Zb = n.Z.then(function () {
                      if (!n.l) {
                        if (
                          ((n.a = Cc(e, i, nl(n).name)),
                          Ec(n.a, n),
                          el(n) && gh(el(n)),
                          n.D)
                        ) {
                          gh(n.D);
                          var t = n.D;
                          t.va(n.ja()),
                            ch(t, n),
                            hh((t = n.D), n.N),
                            lh(t, n),
                            (n.D = null);
                        }
                        return n.a;
                      }
                    }));
                })(this),
                (this.INTERNAL = {}),
                (this.INTERNAL.delete = g(this.delete, this)),
                (this.INTERNAL.logFramework = g(this.Ec, this)),
                (this.s = 0),
                pe.call(this),
                (function (t) {
                  Object.defineProperty(t, "lc", {
                    get: function () {
                      return this.ja();
                    },
                    set: function (t) {
                      this.va(t);
                    },
                    enumerable: !1,
                  }),
                    (t.$ = null),
                    Object.defineProperty(t, "ti", {
                      get: function () {
                        return this.S();
                      },
                      set: function (t) {
                        this.ub(t);
                      },
                      enumerable: !1,
                    }),
                    (t.R = null);
                })(this),
                (this.N = []);
            }
            function Jh(t) {
              Gn.call(this, "languageCodeChanged"), (this.g = t);
            }
            function Yh(t) {
              Gn.call(this, "frameworkChanged"), (this.c = t);
            }
            function zh(t) {
              return t.Zb || An(new I("auth-domain-config-required"));
            }
            function $h(t) {
              if (!Ei())
                return An(new I("operation-not-supported-in-this-environment"));
              var n = zh(t)
                .then(function () {
                  return t.a.pa();
                })
                .then(function (t) {
                  return t ? Hi(t) : null;
                });
              return ol(t, n);
            }
            function Zh(n, t) {
              var e = {};
              return (
                (e.apiKey = nl(n).options.apiKey),
                (e.authDomain = nl(n).options.authDomain),
                (e.appName = nl(n).name),
                n.Z.then(function () {
                  return (function (t, n, e, i) {
                    var r = new uh(t, n);
                    return (
                      e && (r.ga = e),
                      i && hh(r, i),
                      r.reload().then(function () {
                        return r;
                      })
                    );
                  })(e, t, n.B, n.Ea());
                })
                  .then(function (t) {
                    return (
                      el(n) && t.uid == el(n).uid
                        ? kh(el(n), t)
                        : (Qh(n, t), gh(t)),
                      n.ca(t)
                    );
                  })
                  .then(function () {
                    rl(n);
                  })
              );
            }
            function Qh(t, n) {
              el(t) &&
                ((function (t, n) {
                  G(t.R, function (t) {
                    return t == n;
                  });
                })(el(t), t.Ma),
                oe(el(t), "tokenChanged", t.xa),
                oe(el(t), "userDeleted", t.ya),
                oe(el(t), "userInvalidated", t.za),
                ph(el(t))),
                n &&
                  (n.R.push(t.Ma),
                  ee(n, "tokenChanged", t.xa),
                  ee(n, "userDeleted", t.ya),
                  ee(n, "userInvalidated", t.za),
                  0 < t.s && dh(n)),
                qi(t, "currentUser", n),
                n && (n.va(t.ja()), ch(n, t), hh(n, t.N), lh(n, t));
            }
            function tl(e, t) {
              var n = null,
                i = null;
              return ol(
                e,
                t
                  .then(
                    function (t) {
                      return (n = Ro(t)), (i = qr(t)), Zh(e, t);
                    },
                    function (t) {
                      var n = null;
                      throw (
                        (t &&
                          "auth/multi-factor-auth-required" === t.code &&
                          (n = Xc(t.v(), e, g(e.ic, e))),
                        n || t)
                      );
                    }
                  )
                  .then(function () {
                    return Hi({
                      user: el(e),
                      credential: n,
                      additionalUserInfo: i,
                      operationType: "signIn",
                    });
                  })
              );
            }
            function nl(t) {
              return t.app;
            }
            function el(t) {
              return t.currentUser;
            }
            function il(t) {
              return (el(t) && el(t)._lat) || null;
            }
            function rl(t) {
              if (t.aa) {
                for (var n = 0; n < t.m.length; n++) t.m[n] && t.m[n](il(t));
                if (t.W !== t.getUid() && t.O.length)
                  for (t.W = t.getUid(), n = 0; n < t.O.length; n++)
                    t.O[n] && t.O[n](il(t));
              }
            }
            function ol(t, n) {
              return (
                t.P.push(n),
                n.ma(function () {
                  H(t.P, n);
                }),
                n
              );
            }
            function al() {}
            function sl() {
              (this.a = {}), (this.b = 1e12);
            }
            (Vh.prototype.tb = function (n) {
              var e = null,
                i = this;
              return (
                (function (t) {
                  var n = new I("invalid-persistence-type"),
                    e = new I("unsupported-persistence-type");
                  t: {
                    for (i in Ku)
                      if (Ku[i] == t) {
                        var i = !0;
                        break t;
                      }
                    i = !1;
                  }
                  if (!i || "string" != typeof t) throw n;
                  switch (di()) {
                    case "ReactNative":
                      if ("session" === t) throw e;
                      break;
                    case "Node":
                      if ("none" !== t) throw e;
                      break;
                    default:
                      if (!Ti() && "none" !== t) throw e;
                  }
                })(n),
                Wh(this, function () {
                  return n != i.c.F
                    ? i.b
                        .get(i.c, i.a)
                        .then(function (t) {
                          return (e = t), Fh(i, n);
                        })
                        .then(function () {
                          if (((i.c = Kh(n)), e)) return i.b.set(i.c, e, i.a);
                        })
                    : En();
                })
              );
            }),
              w(Xh, pe),
              w(Jh, Gn),
              w(Yh, Gn),
              ((t = Xh.prototype).tb = function (t) {
                return (t = this.i.tb(t)), ol(this, t);
              }),
              (t.va = function (t) {
                this.$ === t ||
                  this.l ||
                  ((this.$ = t),
                  Ya(this.b, this.$),
                  this.dispatchEvent(new Jh(this.ja())));
              }),
              (t.ja = function () {
                return this.$;
              }),
              (t.dd = function () {
                var t = l.navigator;
                this.va(
                  (t &&
                    ((t.languages && t.languages[0]) ||
                      t.language ||
                      t.userLanguage)) ||
                    null
                );
              }),
              (t.Ec = function (t) {
                this.N.push(t),
                  za(this.b, Bl.SDK_VERSION ? yi(Bl.SDK_VERSION, this.N) : null),
                  this.dispatchEvent(new Yh(this.N));
              }),
              (t.Ea = function () {
                return W(this.N);
              }),
              (t.ub = function (t) {
                this.R === t || this.l || ((this.R = t), (this.b.b = this.R));
              }),
              (t.S = function () {
                return this.R;
              }),
              (t.toJSON = function () {
                return {
                  apiKey: nl(this).options.apiKey,
                  authDomain: nl(this).options.authDomain,
                  appName: nl(this).name,
                  currentUser: el(this) && el(this).v(),
                };
              }),
              (t.Cb = function (t, n) {
                switch (t) {
                  case "unknown":
                  case "signInViaRedirect":
                    return !0;
                  case "signInViaPopup":
                    return this.g == n && !!this.f;
                  default:
                    return !1;
                }
              }),
              (t.la = function (t, n, e, i) {
                "signInViaPopup" == t &&
                  this.g == i &&
                  (e && this.w ? this.w(e) : n && !e && this.f && this.f(n),
                  this.c && (this.c.cancel(), (this.c = null)),
                  delete this.f,
                  delete this.w);
              }),
              (t.Da = function (t, n) {
                return "signInViaRedirect" == t ||
                  ("signInViaPopup" == t && this.g == n && this.f)
                  ? g(this.gc, this)
                  : null;
              }),
              (t.gc = function (t, n, e, i) {
                var r = this,
                  o = { requestUri: t, postBody: i, sessionId: n, tenantId: e };
                return (
                  this.c && (this.c.cancel(), (this.c = null)),
                  r.Z.then(function () {
                    return tl(r, hs(r.b, o));
                  })
                );
              }),
              (t.Vc = function (n) {
                if (!Ei())
                  return An(new I("operation-not-supported-in-this-environment"));
                var e = this,
                  t = Fr(n.providerId),
                  i = Ri(),
                  r = null;
                (!Si() || li()) &&
                  nl(this).options.authDomain &&
                  n.isOAuthProvider &&
                  (r = uu(
                    nl(this).options.authDomain,
                    nl(this).options.apiKey,
                    nl(this).name,
                    "signInViaPopup",
                    n,
                    null,
                    i,
                    Bl.SDK_VERSION || null,
                    null,
                    null,
                    this.S()
                  ));
                var o = ai(r, t && t.ta, t && t.sa);
                return ol(
                  this,
                  (t = zh(this)
                    .then(function (t) {
                      return Nc(t, o, "signInViaPopup", n, i, !!r, e.S());
                    })
                    .then(function () {
                      return new mn(function (t, n) {
                        e.la(
                          "signInViaPopup",
                          null,
                          new I("cancelled-popup-request"),
                          e.g
                        ),
                          (e.f = t),
                          (e.w = n),
                          (e.g = i),
                          (e.c = Rc(e.a, e, "signInViaPopup", o, i));
                      });
                    })
                    .then(function (t) {
                      return o && oi(o), t ? Hi(t) : null;
                    })
                    .o(function (t) {
                      throw (o && oi(o), t);
                    }))
                );
              }),
              (t.Wc = function (t) {
                if (!Ei())
                  return An(new I("operation-not-supported-in-this-environment"));
                var n = this;
                return ol(
                  this,
                  zh(this)
                    .then(function () {
                      return (function (t) {
                        return Wh(t, function () {
                          return t.b.set(qh, t.c.F, t.a);
                        });
                      })(n.i);
                    })
                    .then(function () {
                      return Oc(n.a, "signInViaRedirect", t, void 0, n.S());
                    })
                );
              }),
              (t.pa = function () {
                var n = this;
                return $h(this)
                  .then(function (t) {
                    return n.a && Mc(n.a.b), t;
                  })
                  .o(function (t) {
                    throw (n.a && Mc(n.a.b), t);
                  });
              }),
              (t.bd = function (t) {
                if (!t) return An(new I("null-user"));
                if (this.R != t.tenantId) return An(new I("tenant-id-mismatch"));
                var n = this,
                  e = {};
                (e.apiKey = nl(this).options.apiKey),
                  (e.authDomain = nl(this).options.authDomain),
                  (e.appName = nl(this).name);
                var i = (function (t, n, e, i) {
                  var r = t.b,
                    o = {};
                  return (
                    (o[Ga] = r.b && r.b.toString()),
                    (o.refreshToken = r.a),
                    (n = new uh(
                      n || { apiKey: t.l, authDomain: t.s, appName: t.m },
                      o
                    )),
                    e && (n.ga = e),
                    i && hh(n, i),
                    kh(n, t),
                    n
                  );
                })(t, e, n.B, n.Ea());
                return ol(
                  this,
                  this.h
                    .then(function () {
                      if (nl(n).options.apiKey != t.l) return i.reload();
                    })
                    .then(function () {
                      return el(n) && t.uid == el(n).uid
                        ? (kh(el(n), t), n.ca(t))
                        : (Qh(n, i), gh(i), n.ca(i));
                    })
                    .then(function () {
                      rl(n);
                    })
                );
              }),
              (t.wb = function () {
                var t = this,
                  n = this.h.then(function () {
                    return (
                      t.a && Mc(t.a.b),
                      el(t)
                        ? (Qh(t, null),
                          Gh(t.i).then(function () {
                            rl(t);
                          }))
                        : En()
                    );
                  });
                return ol(this, n);
              }),
              (t.Xc = function () {
                var i = this;
                return Bh(this.i, nl(this).options.authDomain).then(function (t) {
                  if (!i.l) {
                    var n;
                    if ((n = el(i) && t)) {
                      n = el(i).uid;
                      var e = t.uid;
                      n =
                        null != n && "" !== n && null != e && "" !== e && n == e;
                    }
                    if (n) return kh(el(i), t), el(i).I();
                    (el(i) || t) &&
                      (Qh(i, t),
                      t && (gh(t), (t.ga = i.B)),
                      i.a && Ec(i.a, i),
                      rl(i));
                  }
                });
              }),
              (t.ca = function (t) {
                return Hh(this.i, t);
              }),
              (t.jc = function () {
                rl(this), this.ca(el(this));
              }),
              (t.uc = function () {
                this.wb();
              }),
              (t.vc = function () {
                this.wb();
              }),
              (t.ic = function (t) {
                var n = this;
                return this.h.then(function () {
                  return tl(n, En(t));
                });
              }),
              (t.xc = function (t) {
                var n = this;
                this.addAuthTokenListener(function () {
                  t.next(el(n));
                });
              }),
              (t.yc = function (t) {
                var n = this;
                !(function (t, n) {
                  t.O.push(n),
                    ol(
                      t,
                      t.h.then(function () {
                        !t.l &&
                          K(t.O, n) &&
                          t.W !== t.getUid() &&
                          ((t.W = t.getUid()), n(il(t)));
                      })
                    );
                })(this, function () {
                  t.next(el(n));
                });
              }),
              (t.Gc = function (t, n, e) {
                var i = this;
                return (
                  this.aa &&
                    Promise.resolve().then(function () {
                      p(t) ? t(el(i)) : p(t.next) && t.next(el(i));
                    }),
                  this.$b(t, n, e)
                );
              }),
              (t.Fc = function (t, n, e) {
                var i = this;
                return (
                  this.aa &&
                    Promise.resolve().then(function () {
                      (i.W = i.getUid()),
                        p(t) ? t(el(i)) : p(t.next) && t.next(el(i));
                    }),
                  this.ac(t, n, e)
                );
              }),
              (t.kc = function (t) {
                var n = this,
                  e = this.h.then(function () {
                    return el(n)
                      ? el(n)
                          .I(t)
                          .then(function (t) {
                            return { accessToken: t };
                          })
                      : null;
                  });
                return ol(this, e);
              }),
              (t.Rc = function (t) {
                var e = this;
                return this.h
                  .then(function () {
                    return tl(e, Xs(e.b, qs, { token: t }));
                  })
                  .then(function (t) {
                    var n = t.user;
                    return Ah(n, "isAnonymous", !1), e.ca(n), t;
                  });
              }),
              (t.Sc = function (t, n) {
                var e = this;
                return this.h.then(function () {
                  return tl(e, Xs(e.b, Ks, { email: t, password: n }));
                });
              }),
              (t.cc = function (t, n) {
                var e = this;
                return this.h.then(function () {
                  return tl(e, Xs(e.b, ms, { email: t, password: n }));
                });
              }),
              (t.Ya = function (t) {
                var n = this;
                return this.h.then(function () {
                  return tl(n, t.ia(n.b));
                });
              }),
              (t.Qc = function (t) {
                return (
                  Vi(
                    "firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."
                  ),
                  this.Ya(t)
                );
              }),
              (t.vb = function () {
                var e = this;
                return this.h.then(function () {
                  var t = el(e);
                  return t && t.isAnonymous
                    ? Hi({
                        user: t,
                        credential: null,
                        additionalUserInfo: Hi({
                          providerId: null,
                          isNewUser: !1,
                        }),
                        operationType: "signIn",
                      })
                    : tl(e, e.b.vb()).then(function (t) {
                        var n = t.user;
                        return Ah(n, "isAnonymous", !0), e.ca(n), t;
                      });
                });
              }),
              (t.getUid = function () {
                return (el(this) && el(this).uid) || null;
              }),
              (t.bc = function (t) {
                this.addAuthTokenListener(t),
                  this.s++,
                  0 < this.s && el(this) && dh(el(this));
              }),
              (t.Nc = function (n) {
                var e = this;
                U(this.m, function (t) {
                  t == n && e.s--;
                }),
                  this.s < 0 && (this.s = 0),
                  0 == this.s && el(this) && ph(el(this)),
                  this.removeAuthTokenListener(n);
              }),
              (t.addAuthTokenListener = function (t) {
                var n = this;
                this.m.push(t),
                  ol(
                    this,
                    this.h.then(function () {
                      n.l || (K(n.m, t) && t(il(n)));
                    })
                  );
              }),
              (t.removeAuthTokenListener = function (n) {
                G(this.m, function (t) {
                  return t == n;
                });
              }),
              (t.delete = function () {
                this.l = !0;
                for (var t = 0; t < this.P.length; t++)
                  this.P[t].cancel("app-deleted");
                return (
                  (this.P = []),
                  this.i &&
                    (t = this.i).b.removeListener(Kh("local"), t.a, this.oa),
                  this.a && (Ac(this.a, this), Mc(this.a.b)),
                  Promise.resolve()
                );
              }),
              (t.fc = function (t) {
                return ol(
                  this,
                  (function (t, n) {
                    return Xs(t, gs, {
                      identifier: n,
                      continueUri: Ai() ? ei() : "http://localhost",
                    }).then(function (t) {
                      return t.signinMethods || [];
                    });
                  })(this.b, t)
                );
              }),
              (t.zc = function (t) {
                return !!Ao(t);
              }),
              (t.sb = function (n, e) {
                var i = this;
                return ol(
                  this,
                  En()
                    .then(function () {
                      var t = new Ir(e);
                      if (!t.c)
                        throw new I(
                          "argument-error",
                          Ar + " must be true when sending sign in link to email"
                        );
                      return Pr(t);
                    })
                    .then(function (t) {
                      return i.b.sb(n, t);
                    })
                    .then(function () {})
                );
              }),
              (t.fd = function (t) {
                return this.Pa(t).then(function (t) {
                  return t.data.email;
                });
              }),
              (t.jb = function (t, n) {
                return ol(
                  this,
                  this.b.jb(t, n).then(function () {})
                );
              }),
              (t.Pa = function (t) {
                return ol(
                  this,
                  this.b.Pa(t).then(function (t) {
                    return new Zi(t);
                  })
                );
              }),
              (t.fb = function (t) {
                return ol(
                  this,
                  this.b.fb(t).then(function () {})
                );
              }),
              (t.rb = function (n, t) {
                var e = this;
                return ol(
                  this,
                  En()
                    .then(function () {
                      return void 0 === t || ut(t) ? {} : Pr(new Ir(t));
                    })
                    .then(function (t) {
                      return e.b.rb(n, t);
                    })
                    .then(function () {})
                );
              }),
              (t.Uc = function (t, n) {
                return ol(this, qc(this, t, n, g(this.Ya, this)));
              }),
              (t.Tc = function (e, i) {
                var r = this;
                return ol(
                  this,
                  En().then(function () {
                    var t = i || ei(),
                      n = Eo(e, t);
                    if (!(t = Ao(t)))
                      throw new I("argument-error", "Invalid email link!");
                    if (t.tenantId !== r.S()) throw new I("tenant-id-mismatch");
                    return r.Ya(n);
                  })
                );
              }),
              (al.prototype.render = function () {}),
              (al.prototype.reset = function () {}),
              (al.prototype.getResponse = function () {}),
              (al.prototype.execute = function () {});
            var ul = null;
            function cl(t, n) {
              return ((n = hl(n)) && t.a[n]) || null;
            }
            function hl(t) {
              return (t = void 0 === t ? 1e12 : t) ? t.toString() : null;
            }
            function ll(t, n) {
              (this.g = !1),
                (this.c = n),
                (this.a = this.b = null),
                (this.h = "invisible" !== this.c.size),
                (this.f = nn(t));
              var e = this;
              (this.i = function () {
                e.execute();
              }),
                this.h ? this.execute() : ee(this.f, "click", this.i);
            }
            function fl(t) {
              if (t.g) throw Error("reCAPTCHA mock was already deleted!");
            }
            function dl() {}
            function pl() {}
            (sl.prototype.render = function (t, n) {
              return (this.a[this.b.toString()] = new ll(t, n)), this.b++;
            }),
              (sl.prototype.reset = function (t) {
                var n = cl(this, t);
                (t = hl(t)), n && t && (n.delete(), delete this.a[t]);
              }),
              (sl.prototype.getResponse = function (t) {
                return (t = cl(this, t)) ? t.getResponse() : null;
              }),
              (sl.prototype.execute = function (t) {
                (t = cl(this, t)) && t.execute();
              }),
              (ll.prototype.getResponse = function () {
                return fl(this), this.b;
              }),
              (ll.prototype.execute = function () {
                fl(this);
                var e = this;
                this.a ||
                  (this.a = setTimeout(function () {
                    e.b = (function () {
                      for (var t = 50, n = []; 0 < t; )
                        n.push(
                          "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
                            Math.floor(62 * Math.random())
                          )
                        ),
                          t--;
                      return n.join("");
                    })();
                    var t = e.c.callback,
                      n = e.c["expired-callback"];
                    if (t)
                      try {
                        t(e.b);
                      } catch (t) {}
                    e.a = setTimeout(function () {
                      if (((e.a = null), (e.b = null), n))
                        try {
                          n();
                        } catch (t) {}
                      e.h && e.execute();
                    }, 6e4);
                  }, 500));
              }),
              (ll.prototype.delete = function () {
                fl(this),
                  (this.g = !0),
                  clearTimeout(this.a),
                  (this.a = null),
                  oe(this.f, "click", this.i);
              }),
              qi(dl, "FACTOR_ID", "phone"),
              (pl.prototype.g = function () {
                return En((ul = ul || new sl()));
              }),
              (pl.prototype.c = function () {});
            var vl = null;
            function ml() {
              (this.b = l.grecaptcha ? 1 / 0 : 0),
                (this.f = null),
                (this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString());
            }
            var gl = new dt(
                mt,
                "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"
              ),
              bl = new Di(3e4, 6e4);
            (ml.prototype.g = function (r) {
              var o = this;
              return new mn(function (t, n) {
                var i = setTimeout(function () {
                  n(new I("network-request-failed"));
                }, bl.get());
                !l.grecaptcha || (r !== o.f && !o.b)
                  ? ((l[o.a] = function () {
                      if (l.grecaptcha) {
                        o.f = r;
                        var e = l.grecaptcha.render;
                        (l.grecaptcha.render = function (t, n) {
                          return (t = e(t, n)), o.b++, t;
                        }),
                          clearTimeout(i),
                          t(l.grecaptcha);
                      } else clearTimeout(i), n(new I("internal-error"));
                      delete l[o.a];
                    }),
                    En(Ma(wt(gl, { onload: o.a, hl: r || "" }))).o(function () {
                      clearTimeout(i),
                        n(
                          new I(
                            "internal-error",
                            "Unable to load external reCAPTCHA dependencies!"
                          )
                        );
                    }))
                  : (clearTimeout(i), t(l.grecaptcha));
              });
            }),
              (ml.prototype.c = function () {
                this.b--;
              });
            var yl = null;
            function wl(t, n, e, i, r, o, a) {
              if (
                (qi(this, "type", "recaptcha"),
                (this.c = this.f = null),
                (this.D = !1),
                (this.u = n),
                (this.g = null),
                (a = a ? (vl = vl || new pl()) : (yl = yl || new ml())),
                (this.m = a),
                (this.a = e || { theme: "light", type: "image" }),
                (this.h = []),
                this.a[El])
              )
                throw new I(
                  "argument-error",
                  "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project."
                );
              if (((this.i = "invisible" === this.a[Al]), !l.document))
                throw new I(
                  "operation-not-supported-in-this-environment",
                  "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support."
                );
              if (!nn(n) || (!this.i && nn(n).hasChildNodes()))
                throw new I(
                  "argument-error",
                  "reCAPTCHA container is either not found or already contains inner elements!"
                );
              (this.s = new Ka(t, o || null, r || null)),
                (this.w =
                  i ||
                  function () {
                    return null;
                  });
              var s = this;
              this.l = [];
              var u = this.a[Il];
              this.a[Il] = function (t) {
                if ((kl(s, t), "function" == typeof u)) u(t);
                else if ("string" == typeof u) {
                  var n = Ii(u, l);
                  "function" == typeof n && n(t);
                }
              };
              var c = this.a[Tl];
              this.a[Tl] = function () {
                if ((kl(s, null), "function" == typeof c)) c();
                else if ("string" == typeof c) {
                  var t = Ii(c, l);
                  "function" == typeof t && t();
                }
              };
            }
            var Il = "callback",
              Tl = "expired-callback",
              El = "sitekey",
              Al = "size";
            function kl(t, n) {
              for (var e = 0; e < t.l.length; e++)
                try {
                  t.l[e](n);
                } catch (t) {}
            }
            function Sl(t, n) {
              return (
                t.h.push(n),
                n.ma(function () {
                  H(t.h, n);
                }),
                n
              );
            }
            function Nl(t) {
              if (t.D)
                throw new I(
                  "internal-error",
                  "RecaptchaVerifier instance has been destroyed."
                );
            }
            function _l(t, n, e) {
              var i = !1;
              try {
                this.b = e || Bl.app();
              } catch (t) {
                throw new I(
                  "argument-error",
                  "No firebase.app.App instance is currently initialized."
                );
              }
              if (!this.b.options || !this.b.options.apiKey)
                throw new I("invalid-api-key");
              e = this.b.options.apiKey;
              var r = this,
                o = null;
              try {
                o = this.b.auth().Ea();
              } catch (t) {}
              try {
                i = this.b.auth().settings.appVerificationDisabledForTesting;
              } catch (t) {}
              (o = Bl.SDK_VERSION ? yi(Bl.SDK_VERSION, o) : null),
                wl.call(
                  this,
                  e,
                  t,
                  n,
                  function () {
                    try {
                      var n = r.b.auth().ja();
                    } catch (t) {
                      n = null;
                    }
                    return n;
                  },
                  o,
                  N(E),
                  i
                );
            }
            function Ol(t, n, e, i) {
              t: {
                e = Array.prototype.slice.call(e);
                for (var r = 0, o = !1, a = 0; a < n.length; a++)
                  if (n[a].optional) o = !0;
                  else {
                    if (o)
                      throw new I(
                        "internal-error",
                        "Argument validator encountered a required argument after an optional argument."
                      );
                    r++;
                  }
                if (((o = n.length), e.length < r || o < e.length))
                  i =
                    "Expected " +
                    (r == o
                      ? 1 == r
                        ? "1 argument"
                        : r + " arguments"
                      : r + "-" + o + " arguments") +
                    " but got " +
                    e.length +
                    ".";
                else {
                  for (r = 0; r < e.length; r++)
                    if (
                      ((o = n[r].optional && void 0 === e[r]),
                      !n[r].K(e[r]) && !o)
                    ) {
                      if (((n = n[r]), r < 0 || r >= Rl.length))
                        throw new I(
                          "internal-error",
                          "Argument validator received an unsupported number of arguments."
                        );
                      (e = Rl[r]),
                        (i =
                          (i ? "" : e + " argument ") +
                          (n.name ? '"' + n.name + '" ' : "") +
                          "must be " +
                          n.J +
                          ".");
                      break t;
                    }
                  i = null;
                }
              }
              if (i) throw new I("argument-error", t + " failed: " + i);
            }
            ((t = wl.prototype).Ga = function () {
              var n = this;
              return this.f
                ? this.f
                : (this.f = Sl(
                    this,
                    En()
                      .then(function () {
                        if (Ai() && !fi()) return ci();
                        throw new I(
                          "operation-not-supported-in-this-environment",
                          "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment."
                        );
                      })
                      .then(function () {
                        return n.m.g(n.w());
                      })
                      .then(function (t) {
                        return (n.g = t), Xs(n.s, Rs, {});
                      })
                      .then(function (t) {
                        n.a[El] = t.recaptchaSiteKey;
                      })
                      .o(function (t) {
                        throw ((n.f = null), t);
                      })
                  ));
            }),
              (t.render = function () {
                Nl(this);
                var e = this;
                return Sl(
                  this,
                  this.Ga().then(function () {
                    if (null === e.c) {
                      var t = e.u;
                      if (!e.i) {
                        var n = nn(t);
                        (t = sn("DIV")), n.appendChild(t);
                      }
                      e.c = e.g.render(t, e.a);
                    }
                    return e.c;
                  })
                );
              }),
              (t.verify = function () {
                Nl(this);
                var r = this;
                return Sl(
                  this,
                  this.render().then(function (i) {
                    return new mn(function (n) {
                      var t = r.g.getResponse(i);
                      if (t) n(t);
                      else {
                        var e = function (t) {
                          t &&
                            ((function (t, n) {
                              G(t.l, function (t) {
                                return t == n;
                              });
                            })(r, e),
                            n(t));
                        };
                        r.l.push(e), r.i && r.g.execute(r.c);
                      }
                    });
                  })
                );
              }),
              (t.reset = function () {
                Nl(this), null !== this.c && this.g.reset(this.c);
              }),
              (t.clear = function () {
                Nl(this), (this.D = !0), this.m.c();
                for (var t = 0; t < this.h.length; t++)
                  this.h[t].cancel(
                    "RecaptchaVerifier instance has been destroyed."
                  );
                if (!this.i) {
                  t = nn(this.u);
                  for (var n; (n = t.firstChild); ) t.removeChild(n);
                }
              }),
              w(_l, wl);
            var Rl = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(
              " "
            );
            function Pl(t, n) {
              return {
                name: t || "",
                J: "a valid string",
                optional: !!n,
                K: function (t) {
                  return "string" == typeof t;
                },
              };
            }
            function Cl(t, n) {
              return {
                name: t || "",
                J: "a boolean",
                optional: !!n,
                K: function (t) {
                  return "boolean" == typeof t;
                },
              };
            }
            function Dl(t, n) {
              return { name: t || "", J: "a valid object", optional: !!n, K: v };
            }
            function Ll(t, n) {
              return { name: t || "", J: "a function", optional: !!n, K: p };
            }
            function Ml(t, n) {
              return {
                name: t || "",
                J: "null",
                optional: !!n,
                K: function (t) {
                  return null === t;
                },
              };
            }
            function xl(e) {
              return {
                name: e ? e + "Credential" : "credential",
                J: e ? "a valid " + e + " credential" : "a valid credential",
                optional: !1,
                K: function (t) {
                  if (!t) return !1;
                  var n = !e || t.providerId === e;
                  return !(!t.ia || !n);
                },
              };
            }
            function jl(t, n) {
              return v(t) && "string" == typeof t.type && t.type === n && p(t.Fa);
            }
            function Ul(t) {
              return v(t) && "string" == typeof t.uid;
            }
            function Vl() {
              return {
                name: "applicationVerifier",
                J: "an implementation of firebase.auth.ApplicationVerifier",
                optional: !1,
                K: function (t) {
                  return !(!t || "string" != typeof t.type || !p(t.verify));
                },
              };
            }
            function Fl(n, e, t, i) {
              return {
                name: t || "",
                J: n.J + " or " + e.J,
                optional: !!i,
                K: function (t) {
                  return n.K(t) || e.K(t);
                },
              };
            }
            function ql(t, n) {
              for (var e in n) {
                var i = n[e].name;
                t[i] = Gl(i, t[e], n[e].j);
              }
            }
            function Kl(t, n) {
              for (var e in n) {
                var i = n[e].name;
                i !== e &&
                  Object.defineProperty(t, i, {
                    get: b(function (t) {
                      return this[t];
                    }, e),
                    set: b(
                      function (t, n, e, i) {
                        Ol(t, [e], [i], !0), (this[n] = i);
                      },
                      i,
                      e,
                      n[e].gb
                    ),
                    enumerable: !0,
                  });
              }
            }
            function Hl(t, n, e, i) {
              t[n] = Gl(n, e, i);
            }
            function Gl(t, n, e) {
              function i() {
                var t = Array.prototype.slice.call(arguments);
                return Ol(o, e, t), n.apply(this, t);
              }
              if (!e) return n;
              var r,
                o = (function (t) {
                  return (t = t.split("."))[t.length - 1];
                })(t);
              for (r in n) i[r] = n[r];
              for (r in n.prototype) i.prototype[r] = n.prototype[r];
              return i;
            }
            ql(Xh.prototype, {
              fb: { name: "applyActionCode", j: [Pl("code")] },
              Pa: { name: "checkActionCode", j: [Pl("code")] },
              jb: {
                name: "confirmPasswordReset",
                j: [Pl("code"), Pl("newPassword")],
              },
              cc: {
                name: "createUserWithEmailAndPassword",
                j: [Pl("email"), Pl("password")],
              },
              fc: { name: "fetchSignInMethodsForEmail", j: [Pl("email")] },
              pa: { name: "getRedirectResult", j: [] },
              zc: { name: "isSignInWithEmailLink", j: [Pl("emailLink")] },
              Fc: {
                name: "onAuthStateChanged",
                j: [
                  Fl(Dl(), Ll(), "nextOrObserver"),
                  Ll("opt_error", !0),
                  Ll("opt_completed", !0),
                ],
              },
              Gc: {
                name: "onIdTokenChanged",
                j: [
                  Fl(Dl(), Ll(), "nextOrObserver"),
                  Ll("opt_error", !0),
                  Ll("opt_completed", !0),
                ],
              },
              rb: {
                name: "sendPasswordResetEmail",
                j: [
                  Pl("email"),
                  Fl(
                    Dl("opt_actionCodeSettings", !0),
                    Ml(null, !0),
                    "opt_actionCodeSettings",
                    !0
                  ),
                ],
              },
              sb: {
                name: "sendSignInLinkToEmail",
                j: [Pl("email"), Dl("actionCodeSettings")],
              },
              tb: { name: "setPersistence", j: [Pl("persistence")] },
              Qc: { name: "signInAndRetrieveDataWithCredential", j: [xl()] },
              vb: { name: "signInAnonymously", j: [] },
              Ya: { name: "signInWithCredential", j: [xl()] },
              Rc: { name: "signInWithCustomToken", j: [Pl("token")] },
              Sc: {
                name: "signInWithEmailAndPassword",
                j: [Pl("email"), Pl("password")],
              },
              Tc: {
                name: "signInWithEmailLink",
                j: [Pl("email"), Pl("emailLink", !0)],
              },
              Uc: { name: "signInWithPhoneNumber", j: [Pl("phoneNumber"), Vl()] },
              Vc: {
                name: "signInWithPopup",
                j: [
                  {
                    name: "authProvider",
                    J: "a valid Auth provider",
                    optional: !1,
                    K: function (t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty("isOAuthProvider")
                      );
                    },
                  },
                ],
              },
              Wc: {
                name: "signInWithRedirect",
                j: [
                  {
                    name: "authProvider",
                    J: "a valid Auth provider",
                    optional: !1,
                    K: function (t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty("isOAuthProvider")
                      );
                    },
                  },
                ],
              },
              bd: {
                name: "updateCurrentUser",
                j: [
                  Fl(
                    {
                      name: "user",
                      J: "an instance of Firebase User",
                      optional: !1,
                      K: function (t) {
                        return !!(t && t instanceof uh);
                      },
                    },
                    Ml(),
                    "user"
                  ),
                ],
              },
              wb: { name: "signOut", j: [] },
              toJSON: { name: "toJSON", j: [Pl(null, !0)] },
              dd: { name: "useDeviceLanguage", j: [] },
              fd: { name: "verifyPasswordResetCode", j: [Pl("code")] },
            }),
              Kl(Xh.prototype, {
                lc: { name: "languageCode", gb: Fl(Pl(), Ml(), "languageCode") },
                ti: { name: "tenantId", gb: Fl(Pl(), Ml(), "tenantId") },
              }),
              ((Xh.Persistence = Ku).LOCAL = "local"),
              (Xh.Persistence.SESSION = "session"),
              (Xh.Persistence.NONE = "none"),
              ql(uh.prototype, {
                delete: { name: "delete", j: [] },
                mc: { name: "getIdTokenResult", j: [Cl("opt_forceRefresh", !0)] },
                I: { name: "getIdToken", j: [Cl("opt_forceRefresh", !0)] },
                Ac: { name: "linkAndRetrieveDataWithCredential", j: [xl()] },
                mb: { name: "linkWithCredential", j: [xl()] },
                Bc: { name: "linkWithPhoneNumber", j: [Pl("phoneNumber"), Vl()] },
                Cc: {
                  name: "linkWithPopup",
                  j: [
                    {
                      name: "authProvider",
                      J: "a valid Auth provider",
                      optional: !1,
                      K: function (t) {
                        return !!(
                          t &&
                          t.providerId &&
                          t.hasOwnProperty &&
                          t.hasOwnProperty("isOAuthProvider")
                        );
                      },
                    },
                  ],
                },
                Dc: {
                  name: "linkWithRedirect",
                  j: [
                    {
                      name: "authProvider",
                      J: "a valid Auth provider",
                      optional: !1,
                      K: function (t) {
                        return !!(
                          t &&
                          t.providerId &&
                          t.hasOwnProperty &&
                          t.hasOwnProperty("isOAuthProvider")
                        );
                      },
                    },
                  ],
                },
                Jc: {
                  name: "reauthenticateAndRetrieveDataWithCredential",
                  j: [xl()],
                },
                pb: { name: "reauthenticateWithCredential", j: [xl()] },
                Kc: {
                  name: "reauthenticateWithPhoneNumber",
                  j: [Pl("phoneNumber"), Vl()],
                },
                Lc: {
                  name: "reauthenticateWithPopup",
                  j: [
                    {
                      name: "authProvider",
                      J: "a valid Auth provider",
                      optional: !1,
                      K: function (t) {
                        return !!(
                          t &&
                          t.providerId &&
                          t.hasOwnProperty &&
                          t.hasOwnProperty("isOAuthProvider")
                        );
                      },
                    },
                  ],
                },
                Mc: {
                  name: "reauthenticateWithRedirect",
                  j: [
                    {
                      name: "authProvider",
                      J: "a valid Auth provider",
                      optional: !1,
                      K: function (t) {
                        return !!(
                          t &&
                          t.providerId &&
                          t.hasOwnProperty &&
                          t.hasOwnProperty("isOAuthProvider")
                        );
                      },
                    },
                  ],
                },
                reload: { name: "reload", j: [] },
                qb: {
                  name: "sendEmailVerification",
                  j: [
                    Fl(
                      Dl("opt_actionCodeSettings", !0),
                      Ml(null, !0),
                      "opt_actionCodeSettings",
                      !0
                    ),
                  ],
                },
                toJSON: { name: "toJSON", j: [Pl(null, !0)] },
                ad: { name: "unlink", j: [Pl("provider")] },
                xb: { name: "updateEmail", j: [Pl("email")] },
                yb: { name: "updatePassword", j: [Pl("password")] },
                cd: { name: "updatePhoneNumber", j: [xl("phone")] },
                zb: { name: "updateProfile", j: [Dl("profile")] },
                Ab: {
                  name: "verifyBeforeUpdateEmail",
                  j: [
                    Pl("email"),
                    Fl(
                      Dl("opt_actionCodeSettings", !0),
                      Ml(null, !0),
                      "opt_actionCodeSettings",
                      !0
                    ),
                  ],
                },
              }),
              ql(sl.prototype, {
                execute: { name: "execute" },
                render: { name: "render" },
                reset: { name: "reset" },
                getResponse: { name: "getResponse" },
              }),
              ql(al.prototype, {
                execute: { name: "execute" },
                render: { name: "render" },
                reset: { name: "reset" },
                getResponse: { name: "getResponse" },
              }),
              ql(mn.prototype, {
                ma: { name: "finally" },
                o: { name: "catch" },
                then: { name: "then" },
              }),
              Kl(Vc.prototype, {
                appVerificationDisabled: {
                  name: "appVerificationDisabledForTesting",
                  gb: Cl("appVerificationDisabledForTesting"),
                },
              }),
              ql(Fc.prototype, {
                confirm: { name: "confirm", j: [Pl("verificationCode")] },
              }),
              Hl(
                to,
                "fromJSON",
                function (t) {
                  t = "string" == typeof t ? JSON.parse(t) : t;
                  for (var n, e = [so, Io, So, ro], i = 0; i < e.length; i++)
                    if ((n = e[i](t))) return n;
                  return null;
                },
                [Fl(Pl(), Dl(), "json")]
              ),
              Hl(
                To,
                "credential",
                function (t, n) {
                  return new wo(t, n);
                },
                [Pl("email"), Pl("password")]
              ),
              ql(wo.prototype, { v: { name: "toJSON", j: [Pl(null, !0)] } }),
              ql(lo.prototype, {
                Aa: { name: "addScope", j: [Pl("scope")] },
                Ia: {
                  name: "setCustomParameters",
                  j: [Dl("customOAuthParameters")],
                },
              }),
              Hl(lo, "credential", fo, [Fl(Pl(), Dl(), "token")]),
              Hl(To, "credentialWithLink", Eo, [Pl("email"), Pl("emailLink")]),
              ql(po.prototype, {
                Aa: { name: "addScope", j: [Pl("scope")] },
                Ia: {
                  name: "setCustomParameters",
                  j: [Dl("customOAuthParameters")],
                },
              }),
              Hl(po, "credential", vo, [Fl(Pl(), Dl(), "token")]),
              ql(mo.prototype, {
                Aa: { name: "addScope", j: [Pl("scope")] },
                Ia: {
                  name: "setCustomParameters",
                  j: [Dl("customOAuthParameters")],
                },
              }),
              Hl(mo, "credential", go, [
                Fl(Pl(), Fl(Dl(), Ml()), "idToken"),
                Fl(Pl(), Ml(), "accessToken", !0),
              ]),
              ql(bo.prototype, {
                Ia: {
                  name: "setCustomParameters",
                  j: [Dl("customOAuthParameters")],
                },
              }),
              Hl(bo, "credential", yo, [
                Fl(Pl(), Dl(), "token"),
                Pl("secret", !0),
              ]),
              ql(ho.prototype, {
                Aa: { name: "addScope", j: [Pl("scope")] },
                credential: {
                  name: "credential",
                  j: [
                    Fl(Pl(), Fl(Dl(), Ml()), "optionsOrIdToken"),
                    Fl(Pl(), Ml(), "accessToken", !0),
                  ],
                },
                Ia: {
                  name: "setCustomParameters",
                  j: [Dl("customOAuthParameters")],
                },
              }),
              ql(oo.prototype, { v: { name: "toJSON", j: [Pl(null, !0)] } }),
              ql(eo.prototype, { v: { name: "toJSON", j: [Pl(null, !0)] } }),
              Hl(_o, "credential", Oo, [
                Pl("verificationId"),
                Pl("verificationCode"),
              ]),
              ql(_o.prototype, {
                cb: {
                  name: "verifyPhoneNumber",
                  j: [
                    Fl(
                      Pl(),
                      {
                        name: "phoneInfoOptions",
                        J: "valid phone info options",
                        optional: !1,
                        K: function (t) {
                          return (
                            !!t &&
                            (t.session && t.phoneNumber
                              ? jl(t.session, Zr) &&
                                "string" == typeof t.phoneNumber
                              : t.session && t.multiFactorHint
                              ? jl(t.session, Qr) && Ul(t.multiFactorHint)
                              : t.session && t.multiFactorUid
                              ? jl(t.session, Qr) &&
                                "string" == typeof t.multiFactorUid
                              : !!t.phoneNumber &&
                                "string" == typeof t.phoneNumber)
                          );
                        },
                      },
                      "phoneInfoOptions"
                    ),
                    Vl(),
                  ],
                },
              }),
              ql(ko.prototype, { v: { name: "toJSON", j: [Pl(null, !0)] } }),
              ql(I.prototype, { toJSON: { name: "toJSON", j: [Pl(null, !0)] } }),
              ql(Uo.prototype, { toJSON: { name: "toJSON", j: [Pl(null, !0)] } }),
              ql(jo.prototype, { toJSON: { name: "toJSON", j: [Pl(null, !0)] } }),
              ql(Wc.prototype, { toJSON: { name: "toJSON", j: [Pl(null, !0)] } }),
              ql(Hc.prototype, {
                Pc: {
                  name: "resolveSignIn",
                  j: [
                    {
                      name: "multiFactorAssertion",
                      J: "a valid multiFactorAssertion",
                      optional: !1,
                      K: function (t) {
                        return !!t && !!t.ob;
                      },
                    },
                  ],
                },
              }),
              ql(Zc.prototype, {
                Ob: { name: "getSession", j: [] },
                dc: {
                  name: "enroll",
                  j: [
                    {
                      name: "multiFactorAssertion",
                      J: "a valid multiFactorAssertion",
                      optional: !1,
                      K: function (t) {
                        return !!t && !!t.ob;
                      },
                    },
                    Pl("displayName", !0),
                  ],
                },
                $c: {
                  name: "unenroll",
                  j: [
                    Fl(
                      {
                        name: "multiFactorInfo",
                        J: "a valid multiFactorInfo",
                        optional: !1,
                        K: Ul,
                      },
                      Pl(),
                      "multiFactorInfoIdentifier"
                    ),
                  ],
                },
              }),
              ql(_l.prototype, {
                clear: { name: "clear", j: [] },
                render: { name: "render", j: [] },
                verify: { name: "verify", j: [] },
              }),
              Hl(fr, "parseLink", wr, [Pl("link")]),
              Hl(
                dl,
                "assertion",
                function (t) {
                  return new zc(t);
                },
                [xl("phone")]
              ),
              (function () {
                if (
                  void 0 === Bl ||
                  !Bl.INTERNAL ||
                  !Bl.INTERNAL.registerComponent
                )
                  throw Error(
                    "Cannot find the firebase namespace; be sure to include firebase-app.js before this library."
                  );
                var t = {
                  ActionCodeInfo: {
                    Operation: {
                      EMAIL_SIGNIN: tr,
                      PASSWORD_RESET: "PASSWORD_RESET",
                      RECOVER_EMAIL: "RECOVER_EMAIL",
                      REVERT_SECOND_FACTOR_ADDITION: Qi,
                      VERIFY_AND_CHANGE_EMAIL: nr,
                      VERIFY_EMAIL: "VERIFY_EMAIL",
                    },
                  },
                  Auth: Xh,
                  AuthCredential: to,
                  Error: I,
                };
                Hl(t, "EmailAuthProvider", To, []),
                  Hl(t, "FacebookAuthProvider", lo, []),
                  Hl(t, "GithubAuthProvider", po, []),
                  Hl(t, "GoogleAuthProvider", mo, []),
                  Hl(t, "TwitterAuthProvider", bo, []),
                  Hl(t, "OAuthProvider", ho, [Pl("providerId")]),
                  Hl(t, "SAMLAuthProvider", co, [Pl("providerId")]),
                  Hl(t, "PhoneAuthProvider", _o, [
                    {
                      name: "auth",
                      J: "an instance of Firebase Auth",
                      optional: !0,
                      K: function (t) {
                        return !!(t && t instanceof Xh);
                      },
                    },
                  ]),
                  Hl(t, "RecaptchaVerifier", _l, [
                    Fl(
                      Pl(),
                      {
                        name: "",
                        J: "an HTML element",
                        optional: !1,
                        K: function (t) {
                          return !!(t && t instanceof Element);
                        },
                      },
                      "recaptchaContainer"
                    ),
                    Dl("recaptchaParameters", !0),
                    {
                      name: "app",
                      J: "an instance of Firebase App",
                      optional: !0,
                      K: function (t) {
                        return !!(t && t instanceof Bl.app.App);
                      },
                    },
                  ]),
                  Hl(t, "ActionCodeURL", fr, []),
                  Hl(t, "PhoneMultiFactorGenerator", dl, []),
                  Bl.INTERNAL.registerComponent({
                    name: "auth",
                    instanceFactory: function (t) {
                      return new Xh((t = t.getProvider("app").getImmediate()));
                    },
                    multipleInstances: !1,
                    serviceProps: t,
                    instantiationMode: "LAZY",
                    type: "PUBLIC",
                  }),
                  Bl.INTERNAL.registerComponent({
                    name: "auth-internal",
                    instanceFactory: function (t) {
                      return {
                        getUid: g(
                          (t = t.getProvider("auth").getImmediate()).getUid,
                          t
                        ),
                        getToken: g(t.kc, t),
                        addAuthTokenListener: g(t.bc, t),
                        removeAuthTokenListener: g(t.Nc, t),
                      };
                    },
                    multipleInstances: !1,
                    instantiationMode: "LAZY",
                    type: "PRIVATE",
                  }),
                  Bl.registerVersion("@firebase/auth", "0.14.1"),
                  Bl.INTERNAL.extendNamespace({ User: uh });
              })();
          }.apply(
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          );
      }.apply(this, arguments));
    } catch (t) {
      throw (
        (console.error(t),
        new Error(
          "Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first."
        ))
      );
    }
  });
  //# sourceMappingURL=firebase-auth.js.map
  
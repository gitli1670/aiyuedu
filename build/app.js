(function(){
    
    var $app_define_wrap$ = $app_define_wrap$ || function() {}
    var manifestJson = {"package":"com.fbkj.youyuedu","name":"优阅读","versionName":"1.0.9","versionCode":10,"minPlatformVersion":1090,"icon":"/assets/you.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.webview"},{"name":"service.share"},{"name":"system.fetch"},{"name":"service.texttoaudio"},{"name":"system.geolocation"},{"name":"system.network"},{"name":"system.device"},{"name":"system.storage"},{"name":"system.clipboard"},{"name":"system.file"},{"name":"system.request"},{"name":"system.package"},{"name":"service.ad"},{"name":"service.account"},{"name":"system.cipher"},{"name":"system.share"}],"permissions":[{"origin":"*"}],"template/official":"book","config":{"logLevel":"debug","designWidth":1080,"data":{"umeng_appkey":"61d3e3cbe0f9bb492bb89bd2"}},"router":{"entry":"quicktask/splash","pages":{"quicktask/index":{"component":"index"},"quicktask/splash":{"component":"index"},"quicktask/web":{"component":"index"},"quicktask/cashout":{"component":"index"},"quicktask/about":{"component":"index"},"pages/main":{"component":"index"},"pages/search":{"component":"index"},"pages/book-detail":{"component":"index"},"pages/book-content":{"component":"index"},"pages/comment":{"component":"index"},"pages/comment-reply":{"component":"index"},"pages/comment-all":{"component":"index"},"pages/contents":{"component":"index"}}},"display":{"titleBar":true,"titleBarBackgroundColor":"#f4f6fa","titleBarTextColor":"#333333","menu":true,"pages":{"pages/main":{"titleBarText":"优阅读"},"pages/search":{"titleBarText":"查找"},"pages/book-detail":{"titleBarText":"图书详情"},"pages/book-content":{"titleBar":false,"fullScreen":true,"launchMode":"standard"},"pages/comment":{"titleBarText":""},"pages/comment-reply":{"titleBarText":""},"pages/comment-all":{"titleBarText":"评论列表"},"pages/contents":{"titleBarText":"目录","launchMode":"singleTask"},"quicktask/index":{"titleBarText":"","titleBar":false,"menuBarData":{"menuBar":false}},"quicktask/splash":{"titleBarText":""},"quicktask/web":{"titleBarText":""},"quicktask/cashout":{"titleBarText":""},"quicktask/about":{"titleBarText":""}}}}
    var createAppHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\manifest-loader.js?path=d:\\kuaiyingyon\\youyuedu\\src!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\manifest-loader.js?path=d:\kuaiyingyon\youyuedu\src!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helper = __webpack_require__(/*! ./helper */ "./src/helper/index.js");

var _backend = _interopRequireDefault(__webpack_require__(/*! ./api/backend.js */ "./src/api/backend.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const $manager = __webpack_require__(/*! ./quicktask/datamanager.js */ "./src/quicktask/datamanager.js").default;

const hook2global = __webpack_require__.g.__proto__ || __webpack_require__.g;
const injectRef = Object.getPrototypeOf(__webpack_require__.g) || __webpack_require__.g;
hook2global.$manager = $manager;
hook2global.$apis = _helper.$apis;
hook2global.$utils = _helper.$utils;
hook2global.$shelfList = [];
hook2global.servers = _backend.default;
injectRef.regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
var _default = {
  servers: _backend.default,
  $apis: _helper.$apis,
  $shelfList: hook2global.$shelfList,

  onCreate() {
    $manager.init(this);
    this.dataCache = {};
  },

  getAppData(key) {
    return this.dataCache[key];
  },

  setAppData(key, val) {
    this.dataCache[key] = val;
  }

};
exports.default = _default;}

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"package":"com.fbkj.youyuedu","name":"优阅读","versionName":"1.0.9","versionCode":10,"minPlatformVersion":1090,"icon":"/assets/you.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.webview"},{"name":"service.share"},{"name":"system.fetch"},{"name":"service.texttoaudio"},{"name":"system.geolocation"},{"name":"system.network"},{"name":"system.device"},{"name":"system.storage"},{"name":"system.clipboard"},{"name":"system.file"},{"name":"system.request"},{"name":"system.package"},{"name":"service.ad"},{"name":"service.account"},{"name":"system.cipher"},{"name":"system.share"}],"permissions":[{"origin":"*"}],"template/official":"book","config":{"logLevel":"debug","designWidth":1080,"data":{"umeng_appkey":"61d3e3cbe0f9bb492bb89bd2"}},"router":{"entry":"quicktask/splash","pages":{"quicktask/index":{"component":"index"},"quicktask/splash":{"component":"index"},"quicktask/web":{"component":"index"},"quicktask/cashout":{"component":"index"},"quicktask/about":{"component":"index"},"pages/main":{"component":"index"},"pages/search":{"component":"index"},"pages/book-detail":{"component":"index"},"pages/book-content":{"component":"index"},"pages/comment":{"component":"index"},"pages/comment-reply":{"component":"index"},"pages/comment-all":{"component":"index"},"pages/contents":{"component":"index"}}},"display":{"titleBar":true,"titleBarBackgroundColor":"#f4f6fa","titleBarTextColor":"#333333","menu":true,"pages":{"pages/main":{"titleBarText":"优阅读"},"pages/search":{"titleBarText":"查找"},"pages/book-detail":{"titleBarText":"图书详情"},"pages/book-content":{"titleBar":false,"fullScreen":true,"launchMode":"standard"},"pages/comment":{"titleBarText":""},"pages/comment-reply":{"titleBarText":""},"pages/comment-all":{"titleBarText":"评论列表"},"pages/contents":{"titleBarText":"目录","launchMode":"singleTask"},"quicktask/index":{"titleBarText":"","titleBar":false,"menuBarData":{"menuBar":false}},"quicktask/splash":{"titleBarText":""},"quicktask/web":{"titleBarText":""},"quicktask/cashout":{"titleBarText":""},"quicktask/about":{"titleBarText":""}}}}');

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/charenc/charenc.js":
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function (str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },
    // Convert a byte array to a string
    bytesToString: function (bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function (str) {
      for (var bytes = [], i = 0; i < str.length; i++) bytes.push(str.charCodeAt(i) & 0xFF);

      return bytes;
    },
    // Convert a byte array to a string
    bytesToString: function (bytes) {
      for (var str = [], i = 0; i < bytes.length; i++) str.push(String.fromCharCode(bytes[i]));

      return str.join('');
    }
  }
};
module.exports = charenc;

/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
/***/ ((module) => {

"use strict";


(function () {
  var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      crypt = {
    // Bit-wise rotation left
    rotl: function (n, b) {
      return n << b | n >>> 32 - b;
    },
    // Bit-wise rotation right
    rotr: function (n, b) {
      return n << 32 - b | n >>> b;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function (n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      } // Else, assume array and swap all items


      for (var i = 0; i < n.length; i++) n[i] = crypt.endian(n[i]);

      return n;
    },
    // Generate an array of any length of random bytes
    randomBytes: function (n) {
      for (var bytes = []; n > 0; n--) bytes.push(Math.floor(Math.random() * 256));

      return bytes;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function (bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8) words[b >>> 5] |= bytes[i] << 24 - b % 32;

      return words;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function (words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8) bytes.push(words[b >>> 5] >>> 24 - b % 32 & 0xFF);

      return bytes;
    },
    // Convert a byte array to a hex string
    bytesToHex: function (bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }

      return hex.join('');
    },
    // Convert a hex string to a byte array
    hexToBytes: function (hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2) bytes.push(parseInt(hex.substr(c, 2), 16));

      return bytes;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function (bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];

        for (var j = 0; j < 4; j++) if (i * 8 + j * 6 <= bytes.length * 8) base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 0x3F));else base64.push('=');
      }

      return base64.join('');
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function (base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
      }

      return bytes;
    }
  };
  module.exports = crypt;
})();

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
} // For Node v0.10 support. Remove this eventually.


function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),

/***/ "./node_modules/js-base64/base64.js":
/*!******************************************!*\
  !*** ./node_modules/js-base64/base64.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


//
// THIS FILE IS AUTOMATICALLY GENERATED! DO NOT EDIT BY HAND!
//
;

(function (global, factory) {
   true ? module.exports = factory() : 0;
})(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : void 0, function () {
  'use strict';
  /**
   *  base64.ts
   *
   *  Licensed under the BSD 3-Clause License.
   *    http://opensource.org/licenses/BSD-3-Clause
   *
   *  References:
   *    http://en.wikipedia.org/wiki/Base64
   *
   * @author Dan Kogai (https://github.com/dankogai)
   */

  var version = '3.7.2';
  /**
   * @deprecated use lowercase `version`.
   */

  var VERSION = version;

  var _hasatob = typeof atob === 'function';

  var _hasbtoa = typeof btoa === 'function';

  var _hasBuffer = typeof Buffer === 'function';

  var _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;

  var _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;

  var b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var b64chs = Array.prototype.slice.call(b64ch);

  var b64tab = function (a) {
    var tab = {};
    a.forEach(function (c, i) {
      return tab[c] = i;
    });
    return tab;
  }(b64chs);

  var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;

  var _fromCC = String.fromCharCode.bind(String);

  var _U8Afrom = typeof Uint8Array.from === 'function' ? Uint8Array.from.bind(Uint8Array) : function (it, fn) {
    if (fn === void 0) {
      fn = function (x) {
        return x;
      };
    }

    return new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
  };

  var _mkUriSafe = function (src) {
    return src.replace(/=/g, '').replace(/[+\/]/g, function (m0) {
      return m0 == '+' ? '-' : '_';
    });
  };

  var _tidyB64 = function (s) {
    return s.replace(/[^A-Za-z0-9\+\/]/g, '');
  };
  /**
   * polyfill version of `btoa`
   */


  var btoaPolyfill = function (bin) {
    // console.log('polyfilled');
    var u32,
        c0,
        c1,
        c2,
        asc = '';
    var pad = bin.length % 3;

    for (var i = 0; i < bin.length;) {
      if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255) throw new TypeError('invalid character found');
      u32 = c0 << 16 | c1 << 8 | c2;
      asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
    }

    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
  };
  /**
   * does what `window.btoa` of web browsers do.
   * @param {String} bin binary string
   * @returns {string} Base64-encoded string
   */


  var _btoa = _hasbtoa ? function (bin) {
    return btoa(bin);
  } : _hasBuffer ? function (bin) {
    return Buffer.from(bin, 'binary').toString('base64');
  } : btoaPolyfill;

  var _fromUint8Array = _hasBuffer ? function (u8a) {
    return Buffer.from(u8a).toString('base64');
  } : function (u8a) {
    // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
    var maxargs = 0x1000;
    var strs = [];

    for (var i = 0, l = u8a.length; i < l; i += maxargs) {
      strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
    }

    return _btoa(strs.join(''));
  };
  /**
   * converts a Uint8Array to a Base64 string.
   * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
   * @returns {string} Base64 string
   */


  var fromUint8Array = function (u8a, urlsafe) {
    if (urlsafe === void 0) {
      urlsafe = false;
    }

    return urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
  }; // This trick is found broken https://github.com/dankogai/js-base64/issues/130
  // const utob = (src: string) => unescape(encodeURIComponent(src));
  // reverting good old fationed regexp


  var cb_utob = function (c) {
    if (c.length < 2) {
      var cc = c.charCodeAt(0);
      return cc < 0x80 ? c : cc < 0x800 ? _fromCC(0xc0 | cc >>> 6) + _fromCC(0x80 | cc & 0x3f) : _fromCC(0xe0 | cc >>> 12 & 0x0f) + _fromCC(0x80 | cc >>> 6 & 0x3f) + _fromCC(0x80 | cc & 0x3f);
    } else {
      var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
      return _fromCC(0xf0 | cc >>> 18 & 0x07) + _fromCC(0x80 | cc >>> 12 & 0x3f) + _fromCC(0x80 | cc >>> 6 & 0x3f) + _fromCC(0x80 | cc & 0x3f);
    }
  };

  var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
  /**
   * @deprecated should have been internal use only.
   * @param {string} src UTF-8 string
   * @returns {string} UTF-16 string
   */

  var utob = function (u) {
    return u.replace(re_utob, cb_utob);
  }; //


  var _encode = _hasBuffer ? function (s) {
    return Buffer.from(s, 'utf8').toString('base64');
  } : _TE ? function (s) {
    return _fromUint8Array(_TE.encode(s));
  } : function (s) {
    return _btoa(utob(s));
  };
  /**
   * converts a UTF-8-encoded string to a Base64 string.
   * @param {boolean} [urlsafe] if `true` make the result URL-safe
   * @returns {string} Base64 string
   */


  var encode = function (src, urlsafe) {
    if (urlsafe === void 0) {
      urlsafe = false;
    }

    return urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
  };
  /**
   * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
   * @returns {string} Base64 string
   */


  var encodeURI = function (src) {
    return encode(src, true);
  }; // This trick is found broken https://github.com/dankogai/js-base64/issues/130
  // const btou = (src: string) => decodeURIComponent(escape(src));
  // reverting good old fationed regexp


  var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;

  var cb_btou = function (cccc) {
    switch (cccc.length) {
      case 4:
        var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3),
            offset = cp - 0x10000;
        return _fromCC((offset >>> 10) + 0xD800) + _fromCC((offset & 0x3FF) + 0xDC00);

      case 3:
        return _fromCC((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));

      default:
        return _fromCC((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
    }
  };
  /**
   * @deprecated should have been internal use only.
   * @param {string} src UTF-16 string
   * @returns {string} UTF-8 string
   */


  var btou = function (b) {
    return b.replace(re_btou, cb_btou);
  };
  /**
   * polyfill version of `atob`
   */


  var atobPolyfill = function (asc) {
    // console.log('polyfilled');
    asc = asc.replace(/\s+/g, '');
    if (!b64re.test(asc)) throw new TypeError('malformed base64.');
    asc += '=='.slice(2 - (asc.length & 3));
    var u24,
        bin = '',
        r1,
        r2;

    for (var i = 0; i < asc.length;) {
      u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
      bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }

    return bin;
  };
  /**
   * does what `window.atob` of web browsers do.
   * @param {String} asc Base64-encoded string
   * @returns {string} binary string
   */


  var _atob = _hasatob ? function (asc) {
    return atob(_tidyB64(asc));
  } : _hasBuffer ? function (asc) {
    return Buffer.from(asc, 'base64').toString('binary');
  } : atobPolyfill; //


  var _toUint8Array = _hasBuffer ? function (a) {
    return _U8Afrom(Buffer.from(a, 'base64'));
  } : function (a) {
    return _U8Afrom(_atob(a), function (c) {
      return c.charCodeAt(0);
    });
  };
  /**
   * converts a Base64 string to a Uint8Array.
   */


  var toUint8Array = function (a) {
    return _toUint8Array(_unURI(a));
  }; //


  var _decode = _hasBuffer ? function (a) {
    return Buffer.from(a, 'base64').toString('utf8');
  } : _TD ? function (a) {
    return _TD.decode(_toUint8Array(a));
  } : function (a) {
    return btou(_atob(a));
  };

  var _unURI = function (a) {
    return _tidyB64(a.replace(/[-_]/g, function (m0) {
      return m0 == '-' ? '+' : '/';
    }));
  };
  /**
   * converts a Base64 string to a UTF-8 string.
   * @param {String} src Base64 string.  Both normal and URL-safe are supported
   * @returns {string} UTF-8 string
   */


  var decode = function (src) {
    return _decode(_unURI(src));
  };
  /**
   * check if a value is a valid Base64 string
   * @param {String} src a value to check
    */


  var isValid = function (src) {
    if (typeof src !== 'string') return false;
    var s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
  }; //


  var _noEnum = function (v) {
    return {
      value: v,
      enumerable: false,
      writable: true,
      configurable: true
    };
  };
  /**
   * extend String.prototype with relevant methods
   */


  var extendString = function () {
    var _add = function (name, body) {
      return Object.defineProperty(String.prototype, name, _noEnum(body));
    };

    _add('fromBase64', function () {
      return decode(this);
    });

    _add('toBase64', function (urlsafe) {
      return encode(this, urlsafe);
    });

    _add('toBase64URI', function () {
      return encode(this, true);
    });

    _add('toBase64URL', function () {
      return encode(this, true);
    });

    _add('toUint8Array', function () {
      return toUint8Array(this);
    });
  };
  /**
   * extend Uint8Array.prototype with relevant methods
   */


  var extendUint8Array = function () {
    var _add = function (name, body) {
      return Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    };

    _add('toBase64', function (urlsafe) {
      return fromUint8Array(this, urlsafe);
    });

    _add('toBase64URI', function () {
      return fromUint8Array(this, true);
    });

    _add('toBase64URL', function () {
      return fromUint8Array(this, true);
    });
  };
  /**
   * extend Builtin prototypes with relevant methods
   */


  var extendBuiltins = function () {
    extendString();
    extendUint8Array();
  };

  var gBase64 = {
    version: version,
    VERSION: VERSION,
    atob: _atob,
    atobPolyfill: atobPolyfill,
    btoa: _btoa,
    btoaPolyfill: btoaPolyfill,
    fromBase64: decode,
    toBase64: encode,
    encode: encode,
    encodeURI: encodeURI,
    encodeURL: encodeURI,
    utob: utob,
    btou: btou,
    decode: decode,
    isValid: isValid,
    fromUint8Array: fromUint8Array,
    toUint8Array: toUint8Array,
    extendString: extendString,
    extendUint8Array: extendUint8Array,
    extendBuiltins: extendBuiltins
  }; //
  // export Base64 to the namespace
  //
  // ES5 is yet to have Object.assign() that may make transpilers unhappy.
  // gBase64.Base64 = Object.assign({}, gBase64);

  gBase64.Base64 = {};
  Object.keys(gBase64).forEach(function (k) {
    return gBase64.Base64[k] = gBase64[k];
  });
  return gBase64;
});

/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


(function () {
  var crypt = __webpack_require__(/*! crypt */ "./node_modules/crypt/crypt.js"),
      utf8 = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").utf8,
      isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js"),
      bin = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").bin,
      // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String) {
      if (options && options.encoding === 'binary') message = bin.stringToBytes(message);else message = utf8.stringToBytes(message);
    } else if (isBuffer(message)) message = Array.prototype.slice.call(message, 0);else if (!Array.isArray(message) && message.constructor !== Uint8Array) message = message.toString(); // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a = 1732584193,
        b = -271733879,
        c = -1732584194,
        d = 271733878; // Swap endian

    for (var i = 0; i < m.length; i++) {
      m[i] = (m[i] << 8 | m[i] >>> 24) & 0x00FF00FF | (m[i] << 24 | m[i] >>> 8) & 0xFF00FF00;
    } // Padding


    m[l >>> 5] |= 0x80 << l % 32;
    m[(l + 64 >>> 9 << 4) + 14] = l; // Method shortcuts

    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {
      var aa = a,
          bb = b,
          cc = c,
          dd = d;
      a = FF(a, b, c, d, m[i + 0], 7, -680876936);
      d = FF(d, a, b, c, m[i + 1], 12, -389564586);
      c = FF(c, d, a, b, m[i + 2], 17, 606105819);
      b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i + 4], 7, -176418897);
      d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
      c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i + 7], 22, -45705983);
      a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
      d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i + 10], 17, -42063);
      b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
      a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
      d = FF(d, a, b, c, m[i + 13], 12, -40341101);
      c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
      b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
      a = GG(a, b, c, d, m[i + 1], 5, -165796510);
      d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
      c = GG(c, d, a, b, m[i + 11], 14, 643717713);
      b = GG(b, c, d, a, m[i + 0], 20, -373897302);
      a = GG(a, b, c, d, m[i + 5], 5, -701558691);
      d = GG(d, a, b, c, m[i + 10], 9, 38016083);
      c = GG(c, d, a, b, m[i + 15], 14, -660478335);
      b = GG(b, c, d, a, m[i + 4], 20, -405537848);
      a = GG(a, b, c, d, m[i + 9], 5, 568446438);
      d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
      c = GG(c, d, a, b, m[i + 3], 14, -187363961);
      b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
      a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
      d = GG(d, a, b, c, m[i + 2], 9, -51403784);
      c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
      b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
      a = HH(a, b, c, d, m[i + 5], 4, -378558);
      d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
      b = HH(b, c, d, a, m[i + 14], 23, -35309556);
      a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
      d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
      c = HH(c, d, a, b, m[i + 7], 16, -155497632);
      b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
      a = HH(a, b, c, d, m[i + 13], 4, 681279174);
      d = HH(d, a, b, c, m[i + 0], 11, -358537222);
      c = HH(c, d, a, b, m[i + 3], 16, -722521979);
      b = HH(b, c, d, a, m[i + 6], 23, 76029189);
      a = HH(a, b, c, d, m[i + 9], 4, -640364487);
      d = HH(d, a, b, c, m[i + 12], 11, -421815835);
      c = HH(c, d, a, b, m[i + 15], 16, 530742520);
      b = HH(b, c, d, a, m[i + 2], 23, -995338651);
      a = II(a, b, c, d, m[i + 0], 6, -198630844);
      d = II(d, a, b, c, m[i + 7], 10, 1126891415);
      c = II(c, d, a, b, m[i + 14], 15, -1416354905);
      b = II(b, c, d, a, m[i + 5], 21, -57434055);
      a = II(a, b, c, d, m[i + 12], 6, 1700485571);
      d = II(d, a, b, c, m[i + 3], 10, -1894986606);
      c = II(c, d, a, b, m[i + 10], 15, -1051523);
      b = II(b, c, d, a, m[i + 1], 21, -2054922799);
      a = II(a, b, c, d, m[i + 8], 6, 1873313359);
      d = II(d, a, b, c, m[i + 15], 10, -30611744);
      c = II(c, d, a, b, m[i + 6], 15, -1560198380);
      b = II(b, c, d, a, m[i + 13], 21, 1309151649);
      a = II(a, b, c, d, m[i + 4], 6, -145523070);
      d = II(d, a, b, c, m[i + 11], 10, -1120210379);
      c = II(c, d, a, b, m[i + 2], 15, 718787259);
      b = II(b, c, d, a, m[i + 9], 21, -343485551);
      a = a + aa >>> 0;
      b = b + bb >>> 0;
      c = c + cc >>> 0;
      d = d + dd >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  }; // Auxiliary functions


  md5._ff = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };

  md5._gg = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };

  md5._hh = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };

  md5._ii = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  }; // Package private blocksize


  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null) throw new Error('Illegal argument ' + message);
    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
  };
})();

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : 0);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./src/api/ajax.js":
/*!*************************!*\
  !*** ./src/api/ajax.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestHandle(params) {
  return new Promise((resolve, reject) => {
    _system.default.fetch({
      url: params.url,
      method: params.method,
      data: params.data
    }).then(response => {
      const result = response.data;
      const content = JSON.parse(result.data);
      /* @desc: 可跟具体不同业务接口数据，返回你所需要的部分，使得使用尽可能便捷 */

      content.code === 200 ? resolve(content.result) : resolve(content.data);
    }).catch((error, code) => {
      console.log(`🐛 request fail, code = ${code}`);
      reject(error);
    });
  });
}
/* 此处只是处于示例代码的可运行性，实际项目中，此方法最好予以封装 & 提取 */


function queryString(url, query) {
  let str = [];

  for (let key in query) {
    if (typeof query[key] === 'object') {
      query[key] = JSON.stringify(query[key]);
    }

    str.push(key + '=' + query[key]);
  }

  let paramStr = str.join('&');
  return paramStr ? `${url}?${paramStr}` : url;
}

var _default = {
  post: function (url, params) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params
    });
  },
  get: function (url, params) {
    return requestHandle({
      method: 'get',
      url: url,
      data: params
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "./src/api/backend.js":
/*!****************************!*\
  !*** ./src/api/backend.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _ajax = _interopRequireDefault(__webpack_require__(/*! ./ajax */ "./src/api/ajax.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const baseUrl = 'http://yapi.fbkjapp.com/mock/47'测试请求接口
const baseUrl = 'http://xs.public.fbkjapp.com'; //线上请求接口

var _default = {
  listBook(data) {
    //所有书籍
    return _ajax.default.get(`${baseUrl}/books/book/`, data);
  },

  goodsDetail(data) {
    //商品详情
    return _ajax.default.get(`${baseUrl}/carousel/goodsDetail`, data);
  },

  recommendGoods(keyword, page, sort, hasCoupon) {
    //获取宠物列表
    return _ajax.default.get(`${baseUrl}/carousel/search2`, {
      keyword: keyword,
      page: page,
      sort: sort,
      hasCoupon: hasCoupon
    });
  },

  getPrivilegeLink: function (data) {
    //获取商品口令链接
    return _ajax.default.get(`${baseUrl}/carousel/getPrivilegeLink`, data);
  },
  loadGoodsByCate: function (subcid, page, sort) {
    //获取商品口令商品
    return _ajax.default.get(`${baseUrl}/carousel/loadGoodsByCate`, {
      subcid: subcid,
      page: page,
      sort: sort
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.zonstNativeId = exports.zonstAppKey = exports.zonstAppId = exports.userAgreement = exports.privacyPolicy = exports.pkg = exports.indexPath = exports.appId = exports.adconfig = void 0;
// 到时候需要替换成自己的广告位编码，清单由产品那边提供
const adconfig = {
  native188: {
    name: '188原生',
    key: 'native-188',
    type: '原生广告',
    adUnitId: {
      vivo: '8bd3a377d73a472abce07afbf161be2a',
      HUAWEI: 'q2aplxzmw6',
      OPPO: '428083'
    },
    placementId: 10043
  },
  native188Double: {
    name: '188双倍后的',
    key: 'native-188-double',
    type: '原生广告',
    adUnitId: {
      vivo: '7393e67710324398babced31e12bef64',
      HUAWEI: 'k8a6ilhl42',
      OPPO: '428069'
    },
    placementId: 10042
  },
  openRedBagRewardVideo: {
    name: '开红包激励视频',
    key: 'open-redbag-reward-ad',
    type: '激励视频',
    adUnitId: {
      vivo: 'd4e4e2167ff44c31988d9568e6612683',
      HUAWEI: 'z0f07z42ad',
      OPPO: '428061'
    },
    placementId: 10041
  },
  reward188Ad: {
    name: '188激励视频',
    key: 'watch-188-reward-ad',
    type: '激励视频',
    adUnitId: {
      vivo: '0da1ff547a8347cf980c51351bbf649d',
      HUAWEI: 'w919j6mqn0',
      OPPO: '428080'
    },
    placementId: 10040
  },
  watchAdNativeAd: {
    name: '看广告弹窗里的原生',
    key: 'watch-ad-native-ad',
    type: '原生广告',
    adUnitId: {
      vivo: '389379c209794a46a72381f67fdb0d3f',
      HUAWEI: 'd711armuxp',
      OPPO: '428064'
    },
    placementId: 10039
  },
  openRedBag: {
    name: '拆红包',
    key: 'chaihongbao-yuansheng',
    type: '原生广告',
    adUnitId: {
      vivo: '320ea8e27bef44aeb42c8b711c3011ce',
      HUAWEI: 'x803yucb2j',
      OPPO: '428078'
    },
    placementId: 10037
  },
  checkIn: {
    name: '签到框内',
    key: 'qiandao-kuangnei-yuansheng',
    type: '原生广告',
    adUnitId: {
      vivo: 'fd9d69e65f6a4d3f808acd5f7632cded',
      HUAWEI: 'x803yucb2j',
      OPPO: '407989'
    },
    placementId: 10036
  },
  checkInDouble: {
    name: '签到双倍',
    key: 'qiandao-shuangbei-jili',
    type: '激励视频',
    adUnitId: {
      vivo: '97f8ae9ed4f74e3e9671166b3510b785',
      HUAWEI: 'o4yvpcy5qw',
      OPPO: '428088'
    },
    placementId: 10035
  },
  taskRewardVideo: {
    name: '任务列表激励视频',
    key: 'renwuliebiao-jili',
    type: '激励视频',
    adUnitId: {
      vivo: '109cf0b3dc66427fa5f5e0b555ed6ad9',
      HUAWEI: 'p1pu803urw',
      OPPO: '428067'
    },
    placementId: 10034
  },
  backPressAdDialog: {
    name: '返回弹窗',
    key: 'fanhui-tanchuang-yuansheng',
    type: '原生广告',
    adUnitId: {
      vivo: 'b5bca7116123442486c1e57c39db06f6',
      HUAWEI: 's3wiwbsb6y',
      OPPO: '428047'
    },
    placementId: 10031
  },
  exitAdDialog: {
    name: '退出弹窗',
    key: 'tuichu-tanchuang-yuansheng',
    type: '原生广告',
    adUnitId: {
      vivo: '75259604c06b4defbf151c5bb4c84e0d',
      HUAWEI: 'v6rnf6uxrg',
      OPPO: '428057'
    },
    placementId: 10007
  },
  backPressRewardAd: {
    name: '返回弹窗激励',
    key: 'fanhui-tanc-jil',
    type: '激励视频',
    adUnitId: {
      vivo: '2f8f2c1bcd7d4a6aa51829ea2a3ae9b2',
      HUAWEI: 's3wiwbsb6y',
      OPPO: '419725'
    },
    placementId: 10045
  }
};
exports.adconfig = adconfig;
const pkg = "com.fbkj.youyuedu"; // 换成自己的包名

exports.pkg = pkg;
const indexPath = "/pages/main"; // 换成自己的主页的路径

exports.indexPath = indexPath;
const appId = '27'; // 换成自己的 appid

exports.appId = appId;
const userAgreement = "http://quickapp.uochen.com/xieyi/uochen-user.html?p=优阅读"; // 换成自己的用户协议

exports.userAgreement = userAgreement;
const privacyPolicy = "http://quickapp.uochen.com/xieyi/uochen-privilege.html?p=优阅读"; // 换成自己的隐私政策
// 中至广告信息，需要换成自己的

exports.privacyPolicy = privacyPolicy;
const zonstAppId = 'bd407bba9d0b85e7';
exports.zonstAppId = zonstAppId;
const zonstAppKey = '8a41a6be1b6e2731';
exports.zonstAppKey = zonstAppKey;
const zonstNativeId = "68";
exports.zonstNativeId = zonstNativeId;

/***/ }),

/***/ "./src/helper/ajax.js":
/*!****************************!*\
  !*** ./src/helper/ajax.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils */ "./src/helper/utils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestHandle(params) {
  console.log(`🤖 当前正在发起请求的 Url 是： ${params.url}`);
  return new Promise((resolve, reject) => {
    _system.default.fetch({
      url: params.url,
      method: params.method,
      data: params.data,
      success: data => {
        resolve(data);
      },
      fail: (data, code) => {
        console.log(`🐛 request fail, code = ${code} `, data);
        reject(data);
      },
      complete: data => {
        reject(data);
      }
    });
  });
}

var _default = {
  post: function (url, params, op) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params
    });
  },
  get: function (url, params = {}, op) {
    return requestHandle({
      method: 'get',
      url: _utils.default.queryString(url, params)
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "./src/helper/apis/common.js":
/*!***********************************!*\
  !*** ./src/helper/apis/common.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _ajax = _interopRequireDefault(__webpack_require__(/*! ../ajax */ "./src/helper/ajax.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  getPositionByLocation(data) {
    return _ajax.default.get('https://apis.map.qq.com/ws/geocoder/v1/', data);
  }

};
exports.default = _default;

/***/ }),

/***/ "./src/helper/apis/index.js":
/*!**********************************!*\
  !*** ./src/helper/apis/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

const files = __webpack_require__("./src/helper/apis sync recursive \\.js");

const modules = {};
files.keys().forEach(key => {
  if (key === './index.js') {
    return;
  }

  modules[key.replace(/(^\.\/|\.js$)/g, '')] = files(key).default;
});
var _default = modules;
exports.default = _default;

/***/ }),

/***/ "./src/helper/index.js":
/*!*****************************!*\
  !*** ./src/helper/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$utils = exports.$apis = exports.$ajax = void 0;

const $utils = __webpack_require__(/*! ./utils */ "./src/helper/utils.js").default;

exports.$utils = $utils;

const $ajax = __webpack_require__(/*! ./ajax */ "./src/helper/ajax.js").default;

exports.$ajax = $ajax;

const $apis = __webpack_require__(/*! ./apis */ "./src/helper/apis/index.js").default;

exports.$apis = $apis;

/***/ }),

/***/ "./src/helper/utils.js":
/*!*****************************!*\
  !*** ./src/helper/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

const prompt = $app_require$('@app-module/system.prompt');

const router = $app_require$('@app-module/system.router');

const storage = $app_require$('@app-module/system.storage');

const hook2global = __webpack_require__.g.__proto__ || __webpack_require__.g;

function queryString(url, query) {
  let str = [];

  for (let key in query) {
    str.push(key + '=' + query[key]);
  }

  let paramStr = str.join('&');
  return paramStr ? `${url}?${paramStr}` : url;
}

function setStorage(key, value) {
  // 设置storage
  storage.set({
    key,
    value: value,

    fail(data, code) {
      console.log(`setStorage fail, code = ${code}`);
    }

  });
}

function getStorage(key) {
  return new Promise((resolve, reject) => {
    // 获取storage
    storage.get({
      key,

      success(data) {
        if (data) {
          resolve(data);
        } else {
          resolve('');
        }
      },

      fail(data, code) {
        console.log(`getStorage fail, code = ${code}`);
        reject({
          data,
          code
        });
      }

    });
  });
}

var _default = {
  queryString,
  setStorage,
  getStorage,

  showToast(message = '', duration = 0) {
    if (!message) return;
    prompt.showToast({
      message: message,
      duration
    });
  },

  route2theUrl(url, params, clear = false) {
    router.push({
      uri: url,
      params: params
    });

    if (clear) {
      router.clear();
    }
  },

  routeReplacetheUrl(url, params) {
    router.replace({
      uri: url,
      params: params
    });
  },

  routerBack() {
    router.back();
  },

  setShelfList(list, storage = false) {
    hook2global.$shelfList = list;

    if (storage) {
      setStorage('bookshelf', JSON.stringify(list));
    }
  }

};
exports.default = _default;

/***/ }),

/***/ "./src/quicktask/datamanager.js":
/*!**************************************!*\
  !*** ./src/quicktask/datamanager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.storage"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.shortcut"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.device"));

__webpack_require__(/*! ./umenganalysis.es.min */ "./src/quicktask/umenganalysis.es.min.js");

var _config = __webpack_require__(/*! ../config */ "./src/config/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 有很多旧逻辑不再修改，即使很多重复读写之类的
class DataManager {
  constructor() {
    if (!DataManager._singleton) {
      this.pkg = "";
      this.channel = ""; // 渠道号

      this.token = ""; // 用户 token

      this.backDialogNormalMode = false; // 返回是否一般模式

      this.noBackDialog = false; // 是否没有返回弹窗

      this.dataCache = {}; // 用于在 web 回来后的数据传输

      this.showAddShortcut = false; // 是否显示添加快捷方式的 img (在一些 dialog 里)

      this.providerId = 0; // 厂商 id ，对应 toolbox 数据库的

      this.brand = ""; // 厂商名，比如 vivo , OPPO

      this.zonstEnabled = false; // 中至广告是否启用

      DataManager._singleton = this;
    }

    return DataManager._singleton;
  }

  init(context) {
    // 初始化友盟统计
    $umeng_stat.init(context);
    this.pkg = context.$def.manifest.package;
    console.log("pkg", this.pkg); // 从本地获取渠道号

    _system.default.get({
      key: 'channel',
      success: data => {
        if (data) {
          this.channel = data;
        }
      }
    }); // 是否第一次进来（之后再进来按返回弹窗的按钮是否正常模式，1 则是正常）


    _system.default.get({
      key: 'taskBackFirst',
      success: v => {
        if (v) {
          this.backDialogNormalMode = true;
          this.getAdSwitchFromServer();
        } else {
          this.initBackDialogMode();
        } // 随后设置值，下次进来就是 1 了


        _system.default.set({
          key: 'taskBackFirst',
          value: 1
        });
      }
    });

    _system2.default.fetch({
      url: "http://calltrack.fbkjapp.com/backmode",
      method: "GET",
      responseType: 'json',
      success: data => {
        console.log("backmode", data.data.data);

        if (data.data.data) {
          this.noBackDialog = true;
        }
      }
    });

    _system3.default.hasInstalled({
      success: installed => {
        console.log('hasInstalled handling success', installed);
        this.showAddShortcut = !installed;
      }
    });
  }

  getPkg() {
    return this.pkg;
  }
  /**
   * 根据 device 获取的厂商信息设置对应的 providerId
   * @param {*} callback  function 用作回调
   */


  getDeviceInfo(callback) {
    if (this.providerId == 0) {
      _system4.default.getInfo({
        success: ret => {
          this.brand = ret.brand;
          console.log("brand", this.brand);
          let providerId = 3;

          switch (this.brand) {
            case "vivo":
              {
                providerId = 3;
                break;
              }

            case "OPPO":
              {
                providerId = 4;
                break;
              }

            case "HUAWEI":
              {
                providerId = 5;
                break;
              }
          }

          this.providerId = providerId;
          callback();
        }
      });
    } else {
      callback();
    }
  }
  /**
   * 第二次回来返回模式的开关
   */


  getAdSwitchFromServer() {
    this.getDeviceInfo(() => {
      _system2.default.fetch({
        url: "http://api.idphoto.manager.fbkjapp.com/photo/adswitch/adSwitch?appid=" + _config.appId + "&providerid=" + this.providerId + "&placementid=" + 10047,
        responseType: 'json',
        method: "POST",
        success: response => {
          this.backDialogNormalMode = response.data.data != 1;
          this.initBackDialogMode(); // this.initZonstValue();
        },
        fail: () => {
          this.initBackDialogMode();
        }
      });
    });
  }

  initZonstValue() {
    this.getDeviceInfo(() => {
      _system2.default.fetch({
        url: "http://api.idphoto.manager.fbkjapp.com/photo/adswitch/adSwitch?appid=" + _config.appId + "&providerid=" + this.providerId + "&placementid=" + 10049,
        responseType: 'json',
        method: "POST",
        success: response => {
          this.zonstEnabled = response.data.data;
        }
      });
    });
  }
  /**
   * 返回模式的开关，最终以这个为准
   */


  initBackDialogMode() {
    this.getDeviceInfo(() => {
      _system2.default.fetch({
        url: "http://api.idphoto.manager.fbkjapp.com/photo/adswitch/adSwitch?appid=" + _config.appId + "&providerid=" + this.providerId + "&placementid=" + 10031,
        responseType: 'json',
        method: "POST",
        success: response => {
          this.backDialogNormalMode = response.data.data != 1;
        },
        fail: function (data, code) {
          console.log(`initBackModeFromServer fail, errMsg = ${data}, errCode = ${code}`);
        }
      });
    });
  }

  setChannel(channel) {
    this.channel = channel;
  }

  getChannel() {
    return this.channel;
  }

  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  setBackDialogNormalMode(normal) {
    this.backDialogNormalMode = normal;
  }
  /**
   * @returns 返回弹窗是否一般模式
   */


  getBackDialogNormalMode() {
    return this.backDialogNormalMode;
  }

  getAppData(key) {
    return this.dataCache[key];
  }

  setAppData(key, val) {
    this.dataCache[key] = val;
  }

  setNoBackDialog(no) {
    this.noBackDialog = no;
  }
  /**
   * @returns 是否无返回弹窗
   */


  getNoBackDialog() {
    return this.noBackDialog;
  }
  /**
   * @returns 是否显示添加快捷方式
   */


  getShowAddShortcut() {
    return this.showAddShortcut;
  }
  /**
   * @returns 厂商名
   */


  getBrand() {
    return this.brand;
  }
  /**
   * @returns 厂商 id
   */


  getProviderId() {
    return this.providerId;
  }

  isNative2() {
    console.log("xx", this.brand);
    return this.brand == "vivo";
  }

  getZonstEnabled() {
    return this.zonstEnabled;
  }

}

const manager = new DataManager();
var _default = manager;
exports.default = _default;

/***/ }),

/***/ "./src/quicktask/umenganalysis.es.min.js":
/*!***********************************************!*\
  !*** ./src/quicktask/umenganalysis.es.min.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.storage"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.device"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.network"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system5 = _interopRequireDefault($app_require$("@app-module/system.app"));

var _system6 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system7 = _interopRequireDefault($app_require$("@app-module/system.file"));

var _system8 = _interopRequireDefault($app_require$("@app-module/system.request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildUniqueId(t) {
  const e = [];
  e.push(DeviceUtil.getAdvertisingId()), e.push(DeviceUtil.getAndroidId()), Promise.all(e).then(e => {
    const n = e[0];
    const o = e[1];
    StorageUtil.putData(constants.MOBILE_ADVERTISING_ID, n);
    StorageUtil.putData(constants.MOBILE_ANDROID_ID, o);
    StorageUtil.putData("umeng_uniqueid", o || n);
    t(o ? o : n);
  });
}

function createCommonjsModule(t, e) {
  return e = {
    exports: {}
  }, t(e, e.exports), e.exports;
}

function MD5$1(t) {
  return MD5(t);
}

function encode(t) {
  return Base64_2.encode(t, !1);
}

function decode(t) {
  return Base64_2.decode(t);
}

function checkEmptyArgument(t) {
  return t.length && this.checkId(t[0]);
}

function checkId(t) {
  return t && "string" == typeof t;
}

function toStr(t) {
  let e = "";
  if (t) try {
    e = JSON.stringify(t);
  } catch (t) {}
  return e;
}

function stringToArray(t) {
  if (t) try {
    return JSON.parse(t);
  } catch (t) {}
  return [];
}

function toObject(t) {
  if (t) try {
    return JSON.parse(t);
  } catch (t) {}
  return null;
}

function checkAttrOrString(t) {
  return !(!t || "string" != typeof t && ("object" != typeof t || isArray(t)));
}

function isArray(t) {
  return "[object Array]" === {}.toString.call(t);
}

function isNotANumber(t) {
  return !isNaN(parseInt(t, 10));
}

function checkMD5(t, e) {
  try {
    return t === MD5(e);
  } catch (t) {
    return !1;
  }
}

function Looper() {}

function send(t) {
  _system3.default.getType({
    success(e) {
      "none" !== e.type && hasEnvelope(t, (e, n) => {
        if (e) {
          if (n) {
            const e = {
              md5Key: n,
              type: "second"
            };
            RequestHelper.getInstance().send(e, () => {
              StoreQueue.getInstance().handleMessage(null);
              realSend(t);
            });
          }
        } else realSend(t);
      });
    },

    fail() {}

  });
}

function hasEnvelope(t, e) {
  StorageUtil.getData(constants.KEY_NO_SEND_REQUEST_KEYS, n => {
    if (!n) return void e(!1, null);
    const o = UmengUtils.stringToArray(n);
    if (!o || 0 === o.length) return void e(!1, null);

    for (const n in o) if ({}.hasOwnProperty.call(o, n)) {
      const i = o[n];

      if (i) {
        const n = i.indexOf(constants.KEY_EVENT_PREFIX);
        if (0 === n && t === constants.REQUEST_TYPE_EVENT) return void e(!0, i);
        const o = i.indexOf(constants.KEY_HALF_SESSION_PREFIX);
        if (0 === o && t === constants.REQUEST_TYPE_SESSION_HALF) return void e(!0, i);
        const r = i.indexOf(constants.KEY_CLOSE_SESSION_PREFIX);
        if (0 === r && t === constants.REQUEST_TYPE_SESSION_CLOSE) return void e(!0, i);
      }
    }

    e(!1, null);
  });
}

function realSend(t) {
  if (RequestHelper.getInstance().paramsIsValid(t)) if (t === constants.REQUEST_TYPE_SESSION_HALF) {
    const e = RequestHelper.getInstance().buildSendContent(t, null),
          n = e.data;
    n.analytics && RequestHelper.getInstance().send(e, t => {
      t && -1 !== t.indexOf(constants.KEY_HALF_SESSION_PREFIX) && (Header.getInstance().setFirstSendFlag(), StorageUtil.putData(constants.APP_FIRST_OPEN_FLAG, "false"));
    });
  } else if (t === constants.REQUEST_TYPE_SESSION_CLOSE) {
    const e = RequestHelper.getInstance().buildSendContent(t, null);

    if (e && e.data) {
      const t = e.data;
      t.analytics && RequestHelper.getInstance().send(e);
    }
  } else t === constants.REQUEST_TYPE_EVENT && EventStoreQueue.getInstance().readEkvDatas(e => {
    if (!e || 0 === e.length) return;
    const n = RequestHelper.getInstance().buildSendContent(t, e);

    if (n) {
      const t = n.data;
      t.analytics && (RequestHelper.getInstance().send(n), EventController.getInstance().setSendTime());
    }
  });
}

function sendAll() {
  if (0 === time) {
    time = 10;
    const t = setInterval(() => {
      time -= 1;
      0 === time && clearInterval(t);
    }, 100);
    Header.getInstance().getHeader() ? (send(constants.REQUEST_TYPE_SESSION_HALF), send(constants.REQUEST_TYPE_SESSION_CLOSE), send(constants.REQUEST_TYPE_EVENT)) : setTimeout(sendAll, 100);
  }
}

function PageController() {
  this._pagelist = [], this._currentPage = {}, this.pageObject = {};
}

function UmengAnalysisLib() {
  this.pageController = new PageController();
}

function isInit() {
  return !!inited || (console.error("[app.ux] ==> onCreate not invoked init() method"), !1);
}

function sendDatas() {
  Header.getInstance().getHeader() ? (Request.send(constants.REQUEST_TYPE_SESSION_HALF), Request.send(constants.REQUEST_TYPE_SESSION_CLOSE), StorageUtil.getData(constants.EVENT_SEND_REPORT_POLICY, t => {
    t === constants.EVENT_SEND_REPORT_POLICY_START_SEND_VALUE && Request.send(constants.REQUEST_TYPE_EVENT);
  })) : setTimeout(sendDatas, 100);
}

function SdkUpdater() {
  this.url = constants.SDK_UPDATE_SERVER_ADDRESS;
}

function Page(t) {
  if (t) {
    const e = t.onShow;

    t.onShow = function (...t) {
      try {
        UmengAnalysis.resume(this);
      } catch (t) {}

      if (e) return e.apply(this, t);
    };

    const n = t.onHide;

    t.onHide = function (...t) {
      try {
        UmengAnalysis.pause(this);
      } catch (t) {}

      if (n) return n.apply(this, t);
    };
  }

  return t;
}

const StorageUtil = {
  putData(t, e, n, o) {
    _system.default.set({
      key: t,
      value: e,

      success(t) {
        n && n(t);
      },

      fail(t, e) {
        o && o(t, e);
      }

    });
  },

  getData(t, e, n) {
    _system.default.get({
      key: t,

      success(t) {
        e && e(t);
      },

      fail(t, e) {
        n && n(t, e);
      }

    });
  },

  deleteData(t, e) {
    _system.default.delete({
      key: t,

      success() {
        e && e(!0);
      },

      fail() {
        e && e(!1);
      }

    });
  }

},
      constants = {
  KEY_NO_SEND_REQUEST_KEYS: "umeng_key_no_send_request",
  SESSION_INTERVAL: 3e4,
  TEST_URL: "https://preulogs.umeng.com/unify_logs",
  RELEASE_URL: "https://ulogs.umeng.com/unify_logs",
  KEY_SESSION_PREFIX: "umeng_session_prefix_",
  KEY_EVENT_PREFIX: "umeng_event_prefix_",
  KEY_HALF_SESSION_PREFIX: "umeng_half_session_prefix_",
  KEY_CLOSE_SESSION_PREFIX: "umeng_close_session_prefix_",
  REQUEST_TYPE_SESSION_HALF: 1,
  REQUEST_TYPE_SESSION_CLOSE: 2,
  REQUEST_TYPE_EVENT: 3,
  IS_DEBUG: !1,
  SDK_VERSION: "2.0.0",
  APP_FIRST_OPEN_FLAG: "umeng_key_first_open_flag",
  MOBILE_ADVERTISING_ID: "umeng_mobile_advertising_id",
  MOBILE_ANDROID_ID: "umeng_android__id",
  EVENT_SEND_MIN_INTERVAL: 90,
  EVENT_SEND_MAX_INTERVAL: 86400,
  EVENT_LAST_SEND_TIME: "umeng_ekv_last_send_time",
  EVENT_SEND_REPORT_POLICY: "event_send_report_policy",
  EVENT_SEND_REPORT_INTERVAL_TIME: "event_send_report_interval_time",
  EVENT_SEND_REPORT_POLICY_START_SEND_VALUE: "1",
  EVENT_SEND_REPORT_POLICY_INTERVAL_VALUE: "6",
  DOWNLOAD_FILE_FIRST_CACHE: "umeng_sdk_update_firstCacheLevel",
  DOWNLOAD_FILE_SECOND_CACHE: "umeng_sdk_update_secondCacheLevel",
  SDK_UPDATE_SERVER_ADDRESS: "http://s.cnzz.com/sdk/quickapp",
  SDK_UPDATE_LOCAL_STORAGE_PATH: "internal://files/umengsdk/"
},
      DeviceUtil = {
  getBaseInfo() {
    return new Promise(t => {
      _system2.default.getInfo({
        success(e) {
          t(e);
        },

        fail() {
          t(null);
        }

      });
    });
  },

  getNetworkInfo(t) {
    _system3.default.getType({
      success(e) {
        t(e);
      }

    });
  },

  getAndroidId() {
    return new Promise(t => {
      _system2.default.getUserId({
        success(e) {
          t(e.userId);
        },

        fail() {
          t("");
        }

      });
    });
  },

  getAdvertisingId() {
    return new Promise(t => {
      _system2.default.getAdvertisingId({
        success(e) {
          t(e.advertisingId);
        },

        fail() {
          t("");
        }

      });
    });
  },

  getUniqueId() {
    return new Promise(t => {
      StorageUtil.getData("umeng_uniqueid", e => {
        e ? t(e) : buildUniqueId(t);
      }, () => {
        buildUniqueId(t);
      });
    });
  },

  getPageName() {
    try {
      const t = _system4.default.getState();

      return t.name;
    } catch (t) {}
  },

  getSystemBaseInfo(t, e) {
    _system2.default.getInfo({
      success(e) {
        t && t(e);
      },

      fail(t, n) {
        e && e(t, n);
      }

    });
  }

},
      Log = {
  d(t) {},

  i(t) {
    try {
      userDebug && console.info(t);
    } catch (t) {}
  },

  e(t) {},

  w(t) {},

  v(t) {}

};
var commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : {},
    MD5 = createCommonjsModule(function (t) {
  !function (e) {
    function n(t, e) {
      var n = (65535 & t) + (65535 & e);
      return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n;
    }

    function o(t, e) {
      return t << e | t >>> 32 - e;
    }

    function i(t, e, i, r, s, c) {
      return n(o(n(n(e, t), n(r, c)), s), i);
    }

    function r(t, e, n, o, r, s, c) {
      return i(e & n | ~e & o, t, e, r, s, c);
    }

    function s(t, e, n, o, r, s, c) {
      return i(e & o | n & ~o, t, e, r, s, c);
    }

    function c(t, e, n, o, r, s, c) {
      return i(e ^ n ^ o, t, e, r, s, c);
    }

    function a(t, e, n, o, r, s, c) {
      return i(n ^ (e | ~o), t, e, r, s, c);
    }

    function u(t, e) {
      t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
      var o,
          i,
          u,
          f,
          l,
          _ = 1732584193,
          E = -271733879,
          g = -1732584194,
          S = 271733878;

      for (o = 0; o < t.length; o += 16) i = _, u = E, f = g, l = S, E = a(E = a(E = a(E = a(E = c(E = c(E = c(E = c(E = s(E = s(E = s(E = s(E = r(E = r(E = r(E = r(E, g = r(g, S = r(S, _ = r(_, E, g, S, t[o], 7, -680876936), E, g, t[o + 1], 12, -389564586), _, E, t[o + 2], 17, 606105819), S, _, t[o + 3], 22, -1044525330), g = r(g, S = r(S, _ = r(_, E, g, S, t[o + 4], 7, -176418897), E, g, t[o + 5], 12, 1200080426), _, E, t[o + 6], 17, -1473231341), S, _, t[o + 7], 22, -45705983), g = r(g, S = r(S, _ = r(_, E, g, S, t[o + 8], 7, 1770035416), E, g, t[o + 9], 12, -1958414417), _, E, t[o + 10], 17, -42063), S, _, t[o + 11], 22, -1990404162), g = r(g, S = r(S, _ = r(_, E, g, S, t[o + 12], 7, 1804603682), E, g, t[o + 13], 12, -40341101), _, E, t[o + 14], 17, -1502002290), S, _, t[o + 15], 22, 1236535329), g = s(g, S = s(S, _ = s(_, E, g, S, t[o + 1], 5, -165796510), E, g, t[o + 6], 9, -1069501632), _, E, t[o + 11], 14, 643717713), S, _, t[o], 20, -373897302), g = s(g, S = s(S, _ = s(_, E, g, S, t[o + 5], 5, -701558691), E, g, t[o + 10], 9, 38016083), _, E, t[o + 15], 14, -660478335), S, _, t[o + 4], 20, -405537848), g = s(g, S = s(S, _ = s(_, E, g, S, t[o + 9], 5, 568446438), E, g, t[o + 14], 9, -1019803690), _, E, t[o + 3], 14, -187363961), S, _, t[o + 8], 20, 1163531501), g = s(g, S = s(S, _ = s(_, E, g, S, t[o + 13], 5, -1444681467), E, g, t[o + 2], 9, -51403784), _, E, t[o + 7], 14, 1735328473), S, _, t[o + 12], 20, -1926607734), g = c(g, S = c(S, _ = c(_, E, g, S, t[o + 5], 4, -378558), E, g, t[o + 8], 11, -2022574463), _, E, t[o + 11], 16, 1839030562), S, _, t[o + 14], 23, -35309556), g = c(g, S = c(S, _ = c(_, E, g, S, t[o + 1], 4, -1530992060), E, g, t[o + 4], 11, 1272893353), _, E, t[o + 7], 16, -155497632), S, _, t[o + 10], 23, -1094730640), g = c(g, S = c(S, _ = c(_, E, g, S, t[o + 13], 4, 681279174), E, g, t[o], 11, -358537222), _, E, t[o + 3], 16, -722521979), S, _, t[o + 6], 23, 76029189), g = c(g, S = c(S, _ = c(_, E, g, S, t[o + 9], 4, -640364487), E, g, t[o + 12], 11, -421815835), _, E, t[o + 15], 16, 530742520), S, _, t[o + 2], 23, -995338651), g = a(g, S = a(S, _ = a(_, E, g, S, t[o], 6, -198630844), E, g, t[o + 7], 10, 1126891415), _, E, t[o + 14], 15, -1416354905), S, _, t[o + 5], 21, -57434055), g = a(g, S = a(S, _ = a(_, E, g, S, t[o + 12], 6, 1700485571), E, g, t[o + 3], 10, -1894986606), _, E, t[o + 10], 15, -1051523), S, _, t[o + 1], 21, -2054922799), g = a(g, S = a(S, _ = a(_, E, g, S, t[o + 8], 6, 1873313359), E, g, t[o + 15], 10, -30611744), _, E, t[o + 6], 15, -1560198380), S, _, t[o + 13], 21, 1309151649), g = a(g, S = a(S, _ = a(_, E, g, S, t[o + 4], 6, -145523070), E, g, t[o + 11], 10, -1120210379), _, E, t[o + 2], 15, 718787259), S, _, t[o + 9], 21, -343485551), _ = n(_, i), E = n(E, u), g = n(g, f), S = n(S, l);

      return [_, E, g, S];
    }

    function f(t) {
      var e,
          n = "",
          o = 32 * t.length;

      for (e = 0; e < o; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);

      return n;
    }

    function l(t) {
      var e,
          n = [];

      for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;

      var o = 8 * t.length;

      for (e = 0; e < o; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;

      return n;
    }

    function _(t) {
      return f(u(l(t), 8 * t.length));
    }

    function E(t, e) {
      var n,
          o,
          i = l(t),
          r = [],
          s = [];

      for (r[15] = s[15] = void 0, i.length > 16 && (i = u(i, 8 * t.length)), n = 0; n < 16; n += 1) r[n] = 909522486 ^ i[n], s[n] = 1549556828 ^ i[n];

      return o = u(r.concat(l(e)), 512 + 8 * e.length), f(u(s.concat(o), 640));
    }

    function g(t) {
      var e,
          n,
          o = "";

      for (n = 0; n < t.length; n += 1) e = t.charCodeAt(n), o += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);

      return o;
    }

    function S(t) {
      return unescape(encodeURIComponent(t));
    }

    function d(t) {
      return _(S(t));
    }

    function p(t) {
      return g(d(t));
    }

    function h(t, e) {
      return E(S(t), S(e));
    }

    function U(t, e) {
      return g(h(t, e));
    }

    function N(t, e, n) {
      return e ? n ? h(e, t) : U(e, t) : n ? d(t) : p(t);
    }

    t.exports ? t.exports = N : e.md5 = N;
  }(commonjsGlobal);
}),
    Base64_1 = createCommonjsModule(function (module, exports) {
  !function (global, factory) {
    module.exports = function (global) {
      var _Base64 = global.Base64,
          version = "2.4.8",
          buffer;
      if (module.exports) try {
        buffer = eval("require('buffer').Buffer");
      } catch (t) {
        buffer = void 0;
      }

      var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          b64tab = function (t) {
        for (var e = {}, n = 0, o = t.length; n < o; n++) e[t.charAt(n)] = n;

        return e;
      }(b64chars),
          fromCharCode = String.fromCharCode,
          cb_utob = function (t) {
        if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? fromCharCode(192 | e >>> 6) + fromCharCode(128 | 63 & e) : fromCharCode(224 | e >>> 12 & 15) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e);
        var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
        return fromCharCode(240 | e >>> 18 & 7) + fromCharCode(128 | e >>> 12 & 63) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e);
      },
          re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
          utob = function (t) {
        return t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, cb_utob);
      },
          cb_encode = function (t) {
        var e = [0, 2, 1][t.length % 3],
            n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
        return [b64chars.charAt(n >>> 18), b64chars.charAt(n >>> 12 & 63), e >= 2 ? "=" : b64chars.charAt(n >>> 6 & 63), e >= 1 ? "=" : b64chars.charAt(63 & n)].join("");
      },
          btoa = global.btoa ? function (t) {
        return global.btoa(t);
      } : function (t) {
        return t.replace(/[\s\S]{1,3}/g, cb_encode);
      },
          _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (t) {
        return (t.constructor === buffer.constructor ? t : buffer.from(t)).toString("base64");
      } : function (t) {
        return (t.constructor === buffer.constructor ? t : new buffer(t)).toString("base64");
      } : function (t) {
        return btoa(utob(t));
      },
          encode = function (t, e) {
        return e ? _encode(String(t)).replace(/[+\/]/g, function (t) {
          return "+" == t ? "-" : "_";
        }).replace(/=/g, "") : _encode(String(t));
      },
          encodeURI = function (t) {
        return encode(t, !0);
      },
          re_btou = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
          cb_btou = function (t) {
        switch (t.length) {
          case 4:
            var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
            return fromCharCode(55296 + (e >>> 10)) + fromCharCode(56320 + (1023 & e));

          case 3:
            return fromCharCode((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));

          default:
            return fromCharCode((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
        }
      },
          btou = function (t) {
        return t.replace(re_btou, cb_btou);
      },
          cb_decode = function (t) {
        var e = t.length,
            n = e % 4,
            o = (e > 0 ? b64tab[t.charAt(0)] << 18 : 0) | (e > 1 ? b64tab[t.charAt(1)] << 12 : 0) | (e > 2 ? b64tab[t.charAt(2)] << 6 : 0) | (e > 3 ? b64tab[t.charAt(3)] : 0),
            i = [fromCharCode(o >>> 16), fromCharCode(o >>> 8 & 255), fromCharCode(255 & o)];
        return i.length -= [0, 0, 2, 1][n], i.join("");
      },
          atob = global.atob ? function (t) {
        return global.atob(t);
      } : function (t) {
        return t.replace(/[\s\S]{1,4}/g, cb_decode);
      },
          _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (t) {
        return (t.constructor === buffer.constructor ? t : buffer.from(t, "base64")).toString();
      } : function (t) {
        return (t.constructor === buffer.constructor ? t : new buffer(t, "base64")).toString();
      } : function (t) {
        return btou(atob(t));
      },
          decode = function (t) {
        return _decode(String(t).replace(/[-_]/g, function (t) {
          return "-" == t ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, ""));
      },
          noConflict = function () {
        var t = global.Base64;
        return global.Base64 = _Base64, t;
      };

      if (global.Base64 = {
        VERSION: "2.4.8",
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
      }, "function" == typeof Object.defineProperty) {
        var noEnum = function (t) {
          return {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          };
        };

        global.Base64.extendString = function () {
          Object.defineProperty(String.prototype, "fromBase64", noEnum(function () {
            return decode(this);
          })), Object.defineProperty(String.prototype, "toBase64", noEnum(function (t) {
            return encode(this, t);
          })), Object.defineProperty(String.prototype, "toBase64URI", noEnum(function () {
            return encode(this, !0);
          }));
        };
      }

      return global.Meteor && (Base64 = global.Base64), module.exports && (module.exports.Base64 = global.Base64), {
        Base64: global.Base64
      };
    }(global);
  }("undefined" != typeof self ? self : "undefined" != typeof window ? window : commonjsGlobal);
}),
    Base64_2 = Base64_1.Base64,
    UmengUtils = {
  MD5: MD5$1,
  encode: encode,
  decode: decode,
  checkEmptyArgument: checkEmptyArgument,
  checkId: checkId,
  stringToArray: stringToArray,
  toStr: toStr,
  toObject: toObject,
  checkAttrOrString: checkAttrOrString,
  isNotANumber: isNotANumber,
  checkMD5: checkMD5
};

const $JSON_UMENG_SESSIONS$ = "json_umeng_sessions",
      $JSON_UMENG_HALF_SESSIONS$ = "json_umeng_half_session",
      $JSON_UMENG_CURRENT_SESSION$ = "json_umeng_current_session",
      $JSON_UMENG_PAGE_END_TIME$ = "json_umeng_page_end_time",
      Session = function () {
  function t() {
    return {
      getCurrentSessionId() {
        return f;
      },

      getCurrentSession() {
        return a;
      },

      getSessions() {
        return l;
      },

      init(t) {
        this.appkey = t, o();
      },

      endSession() {
        a && (c = Date.now(), a.end_time = c, StorageUtil.putData($JSON_UMENG_CURRENT_SESSION$, UmengUtils.toStr(a)), StorageUtil.putData($JSON_UMENG_PAGE_END_TIME$, c));
      },

      clearSessions() {
        StorageUtil.deleteData($JSON_UMENG_SESSIONS$), l.splice(0, l.length), l = [];
      },

      setOnSessionListener(t) {
        this.sessionListener = t;
      },

      getHalfSessions() {
        return _;
      },

      clearHalfSession() {
        StorageUtil.deleteData($JSON_UMENG_HALF_SESSIONS$), _.splice(0, _.length), _ = [];
      }

    };
  }

  function e(t, e) {
    const n = Date.now();
    DeviceUtil.getUniqueId().then(t => {
      const o = UmengUtils.MD5(`${n}:::${Session.getInstance().appkey}:::${t}`);
      e(o);
    });
  }

  function n(t) {
    const e = {};
    return e.id = t, e.start_time = Date.now(), e;
  }

  function o() {
    const t = Date.now();
    a ? c && t - c > constants.SESSION_INTERVAL && (i(c), r(a)) : StorageUtil.getData($JSON_UMENG_CURRENT_SESSION$, e => {
      e && (a = UmengUtils.toObject(e)) ? StorageUtil.getData($JSON_UMENG_PAGE_END_TIME$, e => {
        e && t - e > constants.SESSION_INTERVAL ? (i(e), r(a)) : f = a.id;
      }) : r(null);
    });
  }

  function i(t) {
    try {
      a.end_time = parseInt(t, 10);
    } catch (e) {
      a.end_time = t;
    }

    const e = t - a.start_time;
    a.duration = e;
  }

  function r(t) {
    const o = t ? t.id : "",
          i = Session.getInstance().sessionListener(o);
    e(o, e => {
      a = n(e);
      StorageUtil.getData($JSON_UMENG_SESSIONS$, n => {
        l = UmengUtils.stringToArray(n);
        t ? i.pages(n => {
          n && n.length > 0 && (t.pages = n, t.$page_num = n.length);
          l.push(t);
          StorageUtil.putData($JSON_UMENG_SESSIONS$, UmengUtils.toStr(l));
          s(i, e);
        }) : s(i, e);
      });
      StorageUtil.putData($JSON_UMENG_CURRENT_SESSION$, UmengUtils.toStr(a));
      f = e;
    });
  }

  function s(t, e) {
    StorageUtil.getData($JSON_UMENG_HALF_SESSIONS$, n => {
      _ = UmengUtils.stringToArray(n);
      a && (_.push(JSON.parse(JSON.stringify(a))), StorageUtil.putData($JSON_UMENG_HALF_SESSIONS$, UmengUtils.toStr(_)), t.generateSessionAfterHandler(e));
    });
  }

  let c,
      a,
      u = null,
      f = "",
      l = [],
      _ = [];
  return {
    getInstance() {
      return u || (u = t()), u;
    }

  };
}(),
      $JSON_UMENG_HEADER$ = "json_umeng_header",
      $UMENG_KEY_IMPRINT$ = "umeng_key_imprint",
      MOBILE_NETWORK_2G = "2g",
      MOBILE_NETWORK_3G = "3g",
      MOBILE_NETWORK_4G = "4g",
      MOBILE_NETWORK_NONE = "none",
      BLANK_SPACE = " ",
      UMENG_ADVERTISTING_ID = "idfa",
      UMENG_ANDROID_ID = "android_id",
      Header = function () {
  function t() {
    return {
      init(t) {
        this.appkey = t, this.appInfo = _system5.default.getInfo(), e(t => {
          this.header = t;
          StorageUtil.putData($JSON_UMENG_HEADER$, UmengUtils.toStr(t));
        });
      },

      getHeader(t) {
        switch (t) {
          case constants.REQUEST_TYPE_SESSION_HALF:
            this.header.st = "1", !0 === s && delete this.header.atm;
            break;

          case constants.REQUEST_TYPE_SESSION_CLOSE:
          case constants.REQUEST_TYPE_EVENT:
            delete this.header.st, delete this.header.atm;
        }

        return this.header;
      },

      addHeaderAttr(t, e) {
        this.header && (this.header[t] = e);
      },

      getHeaderAttr(t) {
        return this.header && {}.hasOwnProperty.call(this.header, t) ? this.header[t] : null;
      },

      getPackageName() {
        try {
          return this.appInfo.packageName;
        } catch (t) {}

        return "";
      },

      setFirstSendFlag() {
        s = !0;
      }

    };
  }

  function e(t) {
    DeviceUtil.getBaseInfo().then(e => {
      DeviceUtil.getUniqueId().then(r => {
        DeviceUtil.getNetworkInfo(s => {
          let {
            type: type
          } = s;
          type === MOBILE_NETWORK_NONE && (type = "unknown");
          const c = i(e, r, type);
          StorageUtil.getData($UMENG_KEY_IMPRINT$, e => {
            0 !== e.length && (c.imprint = e);
            StorageUtil.getData(constants.APP_FIRST_OPEN_FLAG, e => {
              const i = "true" === e;
              let r = new Date();
              i && (r = new Date(), c.atm = "1");
              console.log(r);
              StorageUtil.getData(constants.MOBILE_ADVERTISING_ID, e => {
                if (e) {
                  const t = n(e);

                  if (t) {
                    const e = o(UMENG_ADVERTISTING_ID, t);
                    c.id_tracking = e;
                  }
                }

                StorageUtil.getData(constants.MOBILE_ANDROID_ID, e => {
                  if (e) {
                    const t = n(e);
                    if (t) if (c.id_tracking && c.id_tracking.snapshots) c.id_tracking.snapshots[UMENG_ANDROID_ID] = t;else {
                      const e = o(UMENG_ANDROID_ID, t);
                      c.id_tracking = e;
                    }
                  }

                  t(c);
                });
              });
            });
          });
        });
      });
    });
  }

  function n(t) {
    if (t) {
      const e = {
        identity: t,
        version: 1,
        ts: Date.now()
      };
      return e;
    }
  }

  function o(t, e) {
    const n = {
      snapshots: {}
    };
    return n.snapshots[t] = e, n;
  }

  function i(t, e, n) {
    let o = null;

    if (t) {
      const n = t.screenWidth,
            i = t.screenHeight,
            s = n > i ? `${n}*${i}` : `${i}*${n}`,
            {
        appInfo: appInfo
      } = r,
            {
        model: model,
        brand: brand
      } = t,
            c = brand.toLowerCase();
      o = {
        app_version: appInfo.versionName,
        version_code: appInfo.versionCode,
        app_source_extra: appInfo.source.extra,
        device_type: "Phone",
        package_name: appInfo.packageName,
        sdk_type: "Android",
        os: "Android",
        sdk_version: constants.SDK_VERSION,
        appkey: r.appkey,
        device_model: model.toLowerCase().indexOf(c) > -1 ? model : c + BLANK_SPACE + model,
        device_brand: brand,
        channel: c,
        device_manufacturer: t.manufacturer,
        device_manuid: model.toLowerCase().indexOf(c) > -1 ? model : c + BLANK_SPACE + model,
        device_name: t.product.toLowerCase().indexOf(c) > -1 ? t.product : c + BLANK_SPACE + t.product,
        os_version: t.osVersionName,
        resolution: s,
        language: t.language,
        display_name: t.name,
        idmd5: UmengUtils.MD5(e),
        platform: "quickapp",
        pro_ver: "1"
      };
    } else o = {
      app_version: r.appInfo.versionName,
      version_code: r.appInfo.versionCode,
      device_type: "Phone",
      package_name: r.appInfo.packageName,
      sdk_type: "Android",
      os: "Android",
      sdk_version: constants.SDK_VERSION,
      appkey: r.appkey,
      idmd5: UmengUtils.MD5(e),
      platform: "quickapp",
      pro_ver: "1"
    };

    switch (n) {
      case MOBILE_NETWORK_4G:
        o.access_subtype = "LTE", o.access = "2G/3G";
        break;

      case MOBILE_NETWORK_3G:
        o.access_subtype = "CDMA", o.access = "2G/3G";
        break;

      case MOBILE_NETWORK_2G:
        o.access_subtype = "GRPS", o.access = "2G/3G";
        break;

      default:
        o.access = n, delete o.access_subtype;
    }

    return o;
  }

  let r = null,
      s = !1;
  return {
    getInstance() {
      return r || (r = t()), r;
    }

  };
}();

Looper.prototype = {
  prepare(t) {
    this.queueObject = t, this.isRunning = !1, this.isForceStop = !1;
  },

  loop() {
    if (!this.isForceStop && this.queueObject && !this.isRunning) for (this.isRunning = !0; this.isRunning;) {
      if (!this.queueObject.isCanPop()) {
        this.isRunning = !1;
        break;
      }

      try {
        this.queueObject.dispatchMessage();
      } catch (t) {}
    }
  },

  wait() {
    this.isRunning = !1;
  },

  forceStop() {
    this.isForceStop = !0;
  },

  cancelForceStop() {
    this.isForceStop = !1, this.loop();
  }

};

const RequestQueue = function () {
  function t(t) {
    return !!t && (f.unshift(t), u.loop(), !0);
  }

  function e() {
    if (f.length > 0) return f.pop();
    const t = l.length;
    return t > 0 ? (1 === t && RequestHelper.getInstance().clearNoSendDatas(), l.pop()) : null;
  }

  function n(t, e) {
    const n = setTimeout(() => {
      o(t);
    }, 3e4),
          i = {
      key: t,
      timeOutFun: n,
      isExe: !1
    };
    g.push(i), e(t => {
      o(t);
    });
  }

  function o(t) {
    for (let e = g.length - 1; e >= 0; e--) {
      const n = g[e];

      if (n.key === t) {
        if (!n.isExe) {
          n.isExe = !0;
          const t = n.timeOutFun;
          t && clearTimeout(t), i(), g.splice(e, 1);
        }

        break;
      }
    }
  }

  function i() {
    (E -= 1) <= _ && u.loop();
  }

  function r(t) {
    const e = g.length,
          n = t.md5Key;

    for (let t = e - 1; t >= 0; t--) {
      const e = g[t];
      if (e.key === n) return i(), !0;
    }

    return !1;
  }

  function s() {
    RequestHelper.getInstance().onNoSendDatasListener(t => {
      if (!t || 0 === t.length) return;

      for (const e in t) if ({}.hasOwnProperty.call(t, e)) {
        const n = {
          md5Key: t[e],
          type: "second"
        };
        l.push(n);
      }

      u.loop();
    });
  }

  function c() {
    return s(), {
      handleMessage(e, n) {
        e && "second" === e.type && i(), e && e.data && (e.executeFunction = n, t(e));
      },

      dispatchMessage() {
        if (E > _) return void u.wait();
        E += 1;
        const t = e();
        r(t) || (t.data ? n(t.md5Key, t.executeFunction) : RequestHelper.getInstance().send(t), this.isCanPop() || u.wait());
      },

      isCanPop() {
        return f.length > 0 || l.length > 0;
      }

    };
  }

  let a, u;
  const f = [],
        l = [],
        _ = 3;
  let E = 1;
  const g = [];
  return {
    getInstance() {
      return a || (a = c(), (u = new Looper()).prepare(a)), a;
    }

  };
}(),
      StoreQueue = function () {
  function t(t) {
    if (!t) return !1;
    const e = {
      key: t,
      type: _
    };
    return u.unshift(e), a.loop(), !0;
  }

  function e() {
    if (u.length > 0) return u.pop();
    const t = f.length;

    if (t > 0) {
      const e = f.pop();
      return 0 === t && n(), e;
    }

    return n(), null;
  }

  function n() {
    g || (g = !0, StorageUtil.getData(constants.KEY_NO_SEND_REQUEST_KEYS, t => {
      g = !1;
      if (!t) return;
      const e = UmengUtils.stringToArray(t);

      const n = t => e => {
        e && '""' !== e || (e = {
          key: t,
          type: E
        }, f.push(e));
        f.length > 0 && a.loop();
      };

      for (const t in e) if ({}.hasOwnProperty.call(e, t)) {
        const o = e[t];
        StorageUtil.getData(o, n(o));
      }
    }, () => {
      g = !1;
    }));
  }

  function o(t) {
    StorageUtil.getData(constants.KEY_NO_SEND_REQUEST_KEYS, e => {
      e = e ? UmengUtils.toObject(e) : [];
      e.push(t);
      StorageUtil.putData(constants.KEY_NO_SEND_REQUEST_KEYS, UmengUtils.toStr(e), () => {
        r(t);
      }, () => {
        r(t);
      });
    }, () => {
      r(t);
    });
  }

  function i(t) {
    StorageUtil.getData(constants.KEY_NO_SEND_REQUEST_KEYS, e => {
      if (!e) return void r(t);
      e = UmengUtils.stringToArray(e);

      for (const n in e) if ({}.hasOwnProperty.call(e, n)) {
        const o = e[n];

        if (o === t) {
          e.splice(n, 1);
          break;
        }
      }

      StorageUtil.putData(constants.KEY_NO_SEND_REQUEST_KEYS, UmengUtils.toStr(e), () => {
        r(t);
      }, () => {
        r(t);
      });
    }, () => {
      r(t);
    });
  }

  function r() {
    (S -= 1) <= l && a.loop();
  }

  function s() {
    return n(), {
      handleMessage(e) {
        e ? t(e) : n();
      },

      dispatchMessage() {
        if (S > l) return void a.wait();
        S += 1;
        const t = e();
        if (!t || null === t) return void r();
        const {
          key: key
        } = t;
        t.type === _ ? o(key) : i(key), this.isCanPop() || a.wait();
      },

      isCanPop() {
        return u.length > 0 || f.length > 0;
      }

    };
  }

  let c, a;
  const u = [],
        f = [],
        l = 1,
        _ = "write",
        E = "delete";
  let g = !1,
      S = 1;
  return {
    getInstance() {
      return c || (c = s(), (a = new Looper()).prepare(c)), c;
    }

  };
}(),
      $UMENG_KEY_IMPRINT$$1 = "umeng_key_imprint";

let noSendRequestKeys = [];

const RequestHelper = function () {
  function t() {
    const t = [].concat(Session.getInstance().getSessions());
    if (t && 0 !== t.length) return Session.getInstance().clearSessions(), t;
  }

  function e() {
    const t = [].concat(Session.getInstance().getHalfSessions());
    if (t && 0 !== t.length) return Session.getInstance().clearHalfSession(), t;
  }

  function n(t) {
    StorageUtil.deleteData(t, t => {
      t && StoreQueue.getInstance().handleMessage(null);
    });
  }

  function o(t, e, o, r) {
    if (!t || '""' === t) return void (o && o(e));
    const s = constants.RELEASE_URL;

    _system6.default.fetch({
      url: s,
      method: "POST",
      data: UmengUtils.encode(t),
      header: {
        "Content-Type": "quickapp/json",
        "Msg-Type": "quickapp/json"
      },

      success(t) {
        if (200 === t.code) {
          Log.i("*** umeng_sdk *** request send success"), n(e), r && r(e);

          try {
            const e = UmengUtils.toObject(t.data);
            i(e.imprint);
          } catch (t) {}
        } else 413 === t.code && (Log.i("*** umeng_sdk *** request is to large!"), n(e), r && r(e));
      },

      fail: function (t, e) {
        Log.i("*** umeng_sdk *** request error, please check your permission! ");
      },

      complete() {
        o && o(e);
      }

    });
  }

  function i(t) {
    try {
      if (t) {
        StorageUtil.putData($UMENG_KEY_IMPRINT$$1, t), Header.getInstance().addHeaderAttr("imprint", t);
        const e = UmengUtils.toObject(UmengUtils.decode(t)),
              n = e.report_policy;

        if (n && UmengUtils.isNotANumber(n)) {
          if (StorageUtil.putData(constants.EVENT_SEND_REPORT_POLICY, n), n === constants.EVENT_SEND_REPORT_POLICY_INTERVAL_VALUE) {
            let t = e.report_interval;
            t && UmengUtils.isNotANumber(t) ? (t <= constants.EVENT_SEND_MIN_INTERVAL ? t = constants.EVENT_SEND_MIN_INTERVAL : t > constants.EVENT_SEND_MAX_INTERVAL && (t = constants.EVENT_SEND_MAX_INTERVAL), StorageUtil.putData(constants.EVENT_SEND_REPORT_INTERVAL_TIME, t)) : StorageUtil.putData(constants.EVENT_SEND_REPORT_POLICY, constants.EVENT_SEND_REPORT_POLICY_START_SEND_VALUE);
          }
        } else StorageUtil.putData(constants.EVENT_SEND_REPORT_POLICY, constants.EVENT_SEND_REPORT_POLICY_START_SEND_VALUE);
      }
    } catch (t) {}
  }

  function r(t, e) {
    const n = UmengUtils.toStr(e);
    let o = null;

    switch (t) {
      case constants.REQUEST_TYPE_SESSION_HALF:
        o = constants.KEY_HALF_SESSION_PREFIX;
        break;

      case constants.REQUEST_TYPE_SESSION_CLOSE:
        o = constants.KEY_CLOSE_SESSION_PREFIX;
        break;

      case constants.REQUEST_TYPE_EVENT:
        o = constants.KEY_EVENT_PREFIX;
    }

    const i = o + UmengUtils.MD5(n);
    return StorageUtil.putData(i, n), StoreQueue.getInstance().handleMessage(i), 0 === noSendRequestKeys.length && StorageUtil.getData(constants.KEY_NO_SEND_REQUEST_KEYS, t => {
      if (!t) return;
      const e = UmengUtils.stringToArray(t);
      0 === noSendRequestKeys.length && (noSendRequestKeys = e, a && a(noSendRequestKeys));
    }), i;
  }

  function s() {
    return {
      paramsIsValid(t) {
        return -1 !== [constants.REQUEST_TYPE_SESSION_HALF, constants.REQUEST_TYPE_SESSION_CLOSE, constants.REQUEST_TYPE_EVENT].indexOf(t);
      },

      buildSendContent(n, o) {
        if (Header.getInstance().getHeader(n)) {
          const i = {
            header: Header.getInstance().getHeader(n),
            analytics: null
          };

          switch (n) {
            case constants.REQUEST_TYPE_SESSION_HALF:
              {
                const t = e();
                if (!t) break;
                i.analytics = {
                  sessions: t
                };
                break;
              }

            case constants.REQUEST_TYPE_SESSION_CLOSE:
              {
                const e = t();
                if (!e) break;
                i.analytics = {
                  sessions: e
                };
                break;
              }

            case constants.REQUEST_TYPE_EVENT:
              o && o.length > 0 && (i.analytics = {
                ekv: o
              });
          }

          let s = "";
          return i.analytics && (s = r(n, i)), {
            data: i,
            md5Key: s
          };
        }
      },

      send(t, e) {
        const n = t.md5Key;
        n && ("second" === t.type ? StorageUtil.getData(n, n => {
          t.data = UmengUtils.toObject(n);
          t.data || e && e();
          RequestQueue.getInstance().handleMessage(t, n => {
            o(UmengUtils.toStr(t.data), t.md5Key, n, e);
          });
        }) : RequestQueue.getInstance().handleMessage(t, n => {
          o(UmengUtils.toStr(t.data), t.md5Key, n, e);
        }));
      },

      getNoSendRequestKeys() {
        return noSendRequestKeys;
      },

      onNoSendDatasListener(t) {
        a = t;
      },

      clearNoSendDatas() {
        noSendRequestKeys.splice(0, noSendRequestKeys.length), noSendRequestKeys = [];
      }

    };
  }

  let c, a;
  return {
    getInstance() {
      return c || (c = s()), c;
    }

  };
}(),
      EventStoreQueue = function () {
  function t(t) {
    if (t) {
      if (!Session.getInstance().getCurrentSessionId()) return void U.unshift(t);
      h.unshift(t), h.length >= _ && g.loop();
    }
  }

  function e() {
    return h.length < _ ? null : h.splice(0, _);
  }

  function n() {
    p && p.length > 0 && s(t => {
      for (const e in p) if ({}.hasOwnProperty.call(p, e)) try {
        p[e](t);
      } catch (t) {}
    }), (S -= 1) < 1 && (S = 1), S <= E && g.loop();
  }

  function o(t, e) {
    StorageUtil.putData(u, e, () => {
      StorageUtil.putData(f, UmengUtils.toStr(t), () => {
        n();
      }, () => {
        n();
      });
    }, () => {
      n();
    });
  }

  function i(t, e) {
    t && (p[t] = e);
  }

  function r(t) {
    t && delete p[t];
  }

  function s(t) {
    StorageUtil.getData(f, e => {
      StorageUtil.deleteData(f, () => {
        const n = c(UmengUtils.stringToArray(e), h);
        h.splice(0, h.length);
        t(n);
        g.cancelForceStop();
      });
    }, () => {
      t([]);
      g.cancelForceStop();
    });
  }

  function c(t, e) {
    const n = Session.getInstance().getCurrentSessionId();
    let o,
        i = -1;

    for (const e in t) if ({}.hasOwnProperty.call(t, e)) {
      const r = t[e];

      if (o = r[n]) {
        i = e;
        break;
      }
    }

    return -1 === i && (o = []), (o = o.concat(e)) && 0 !== o.length ? (-1 === i ? t.push({
      [n]: o
    }) : t[i][n] = o, t) : t;
  }

  function a() {
    return {
      saveEkvData(e) {
        t(e), Log.d(`[saveEkvData] data is ${UmengUtils.toStr(e)}`);
      },

      readEkvDatas(t) {
        t && (g.forceStop(), S <= E ? s(e => {
          t(e);
          g.cancelForceStop();
        }) : i("readEkvDatas", e => {
          t(e);
          r("readEkvDatas");
          g.cancelForceStop();
        }));
      },

      handlerNoSessionEkvDatas() {
        if (U && U.length > 0) {
          Log.d(`no sessionId event is ${JSON.stringify(U)}`);

          for (const t in U) ({}).hasOwnProperty.call(U, t) && this.saveEkvData(U[t]);

          U.splice(0, U.length);
        }
      },

      quitHandler() {
        0 !== h.length && (g.forceStop(), S <= E ? StorageUtil.getData(f, t => {
          const e = c(UmengUtils.stringToArray(t), h);
          StorageUtil.putData(f, UmengUtils.toStr(e));
          h.splice(0, h.length);
          g.cancelForceStop();
        }, () => {
          g.cancelForceStop();
        }) : i("quitHandler", t => {
          const e = UmengUtils.toStr(c(t, h));
          StorageUtil.putData(f, e);
          h.splice(0, h.length);
          r("quitHandler");
          g.cancelForceStop();
        }));
      },

      dispatchMessage() {
        if (S > E) return void g.wait();
        S += 1;
        const t = e();
        if (!t || 0 === t.length) return void n();
        StorageUtil.getData(u, e => {
          e || (e = 0);
          e >= l + t.length ? n() : StorageUtil.getData(f, n => {
            const i = c(UmengUtils.stringToArray(n), t);
            o(i, Number(e) + Number(t.length));
          }, () => {
            n();
          });
        }, () => {
          n();
        });
      },

      isCanPop() {
        return h.length >= _;
      }

    };
  }

  const u = "umeng_ekv_count_key",
        f = "umeng_key_ekvs",
        l = 1e4,
        _ = 5,
        E = 1;
  let g,
      S = 1,
      d = null;
  const p = {},
        h = [],
        U = [];
  return {
    getInstance() {
      return d || (d = new a(), (g = new Looper()).prepare(d)), d;
    }

  };
}(),
      EventController = function () {
  function t(t, e) {
    const n = {
      id: t,
      ts: Date.now()
    };

    switch (typeof e) {
      case "string":
        n[t] = e;
        break;

      case "object":
        for (const t in e) ({}).hasOwnProperty.call(e, t) && (n[t] = e[t]);

    }

    return n;
  }

  function e() {
    StorageUtil.getData(constants.EVENT_SEND_REPORT_POLICY, t => {
      t === constants.EVENT_SEND_REPORT_POLICY_INTERVAL_VALUE && StorageUtil.getData(constants.EVENT_SEND_REPORT_INTERVAL_TIME, t => {
        StorageUtil.getData(constants.EVENT_LAST_SEND_TIME, e => {
          if (t) {
            const n = Date.now();
            e && n - e > 1e3 * t && Request.sendAll();
          } else StorageUtil.putData(constants.EVENT_SEND_REPORT_POLICY, constants.EVENT_SEND_REPORT_POLICY_START_SEND_VALUE);
        });
      });
    });
  }

  function n() {
    return {
      addEvent(n, o) {
        const i = t(n, o);
        EventStoreQueue.getInstance().saveEkvData(i), e();
      },

      handlerNoSessionEkvDatas() {
        EventStoreQueue.getInstance().handlerNoSessionEkvDatas();
      },

      quitHandler() {
        EventStoreQueue.getInstance().quitHandler();
      },

      setSendTime() {
        StorageUtil.putData(constants.EVENT_LAST_SEND_TIME, Date.now());
      }

    };
  }

  let o;
  return {
    getInstance() {
      return o || (o = n()), o;
    }

  };
}();

let time = 0;
var Request = {
  send: send,
  sendAll: sendAll
};
const KEY_PRE_PAGE = "umeng_page_";
PageController.prototype = {
  addCurrentPage(t) {
    this._currentPage = {
      ts: Date.now(),
      page_name: DeviceUtil.getPageName()
    }, this.pageObject = t;
  },

  savePage(t, e) {
    if (t && e && this._currentPage.page_name && e === this.pageObject) {
      const e = Date.now() - this._currentPage.ts;

      this._currentPage.duration = Math.abs(e), this._pagelist = this._pagelist.concat(this._currentPage), this._currentPage = {}, this.pageObject = {}, this.saveStroragePages(t);
    }
  },

  saveStroragePages(t) {
    t && this._pagelist.length > 0 && this.updateStorage(KEY_PRE_PAGE + t, this._pagelist);
  },

  getPages(t, e) {
    StorageUtil.getData(KEY_PRE_PAGE + t, n => {
      const o = UmengUtils.stringToArray(n).concat(this._pagelist);
      this.clear(t);
      e && e(o);
    }, () => {
      e && e(null);
    });
  },

  updateStorage(t, e) {
    e && 0 !== e.length && StorageUtil.getData(t, n => {
      const o = UmengUtils.stringToArray(n).concat(e);
      StorageUtil.putData(t, UmengUtils.toStr(o), () => {
        this._pagelist = [];
      });
    });
  },

  clear(t) {
    StorageUtil.deleteData(KEY_PRE_PAGE + t), this._pagelist = [];
  }

};
let inited = !1;
UmengAnalysisLib.prototype = {
  init(t) {
    if (Log.i(`*** umeng_sdk *** sdk version is: ${constants.SDK_VERSION}`), !inited) {
      try {
        this.appkey = t.$data.umeng_appkey;
      } catch (t) {}

      if (!this.appkey) return inited = !1, void console.error("please set umeng_appkey : [manifest.json --\x3e config:{data:{umeng_appkey: xxx}}]");
      inited = !0, Header.getInstance().init(this.appkey);
      const e = this;
      if (Session.getInstance().setOnSessionListener(t => ({
        pages(n) {
          e.pageController.getPages(t, n);
        },

        generateSessionAfterHandler(t) {
          EventController.getInstance().handlerNoSessionEkvDatas(), sendDatas();
        }

      })), StorageUtil.getData(constants.APP_FIRST_OPEN_FLAG, t => {
        0 === t.length && StorageUtil.putData(constants.APP_FIRST_OPEN_FLAG, "true");
      }), StorageUtil.getData(constants.EVENT_SEND_REPORT_POLICY, t => {
        t || StorageUtil.putData(constants.EVENT_SEND_REPORT_POLICY, constants.EVENT_SEND_REPORT_POLICY_START_SEND_VALUE);
      }), StorageUtil.getData(constants.EVENT_LAST_SEND_TIME, t => {
        t || EventController.getInstance().setSendTime();
      }), t) try {
        Object.defineProperty(t, "_status", {
          set(t) {
            "destroy" === t && Request.sendAll();
          }

        });
      } catch (t) {}
    }
  },

  resume(t) {
    isInit() && t && (Log.i(`*** umeng_sdk *** page name: ${DeviceUtil.getPageName()}`), this.pageController.addCurrentPage(t), Session.getInstance().init(this.appkey));
  },

  pause(t) {
    isInit() && t && (this.pageController.savePage(Session.getInstance().getCurrentSessionId(), t), Session.getInstance().endSession(), EventController.getInstance().quitHandler());
  },

  trackEvent(t, e) {
    if (isInit()) return UmengUtils.checkId(t) ? e && !UmengUtils.checkAttrOrString(e) ? (console.error("error-----please check trackEvent attr. attr should be 'String' or 'Object'(not include 'Array')"), !1) : (Log.i(`*** umeng_sdk *** event id: ${UmengUtils.toStr(t)}${e ? ` || event attr: ${UmengUtils.toStr(e)}` : ""}`), EventController.getInstance().addEvent(t, e), !0) : (console.error("error-----please check trackEvent id. id should be 'String' and not null"), !1);
  }

};
const FileUtils = {
  getFile(t, e, n) {
    _system7.default.readText({
      uri: t,

      success(t) {
        e && e(t.text);
      },

      fail(t, e) {
        n && n(t, e);
      }

    });
  },

  moveFile(t, e, n, o) {
    _system7.default.move({
      srcUri: t,
      dstUri: e,

      success(t) {
        n && n(t);
      },

      fail(t, e) {
        o && o(t, e);
      }

    });
  },

  deleteFile(t, e, n) {
    _system7.default.delete({
      uri: t,

      success(t) {
        e && e(t);
      },

      fail(t, e) {
        n && n(t, e);
      }

    });
  }

},
      modules = {
  "@system.app": $app_require$("@app-module/system.app"),
  "@system.storage": $app_require$("@app-module/system.storage"),
  "@system.fetch": $app_require$("@app-module/system.fetch"),
  "@system.network": $app_require$("@app-module/system.network"),
  "@system.device": $app_require$("@app-module/system.device"),
  md5: __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js"),
  "js-base64": __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js"),
  "@system.router": $app_require$("@app-module/system.router")
},
      callQueue = [],
      umeng_stat_global = Object.getPrototypeOf(__webpack_require__.g) || __webpack_require__.g;
SdkUpdater.prototype = {
  init(t, e) {
    this.installApi(t, null);

    try {
      DeviceUtil.getSystemBaseInfo(t => {
        1e3 === t.platformVersionCode ? e(0) : StorageUtil.getData(constants.DOWNLOAD_FILE_FIRST_CACHE, t => {
          t ? this.getSdkFileContent(t, (t, n, o) => {
            t ? e(1, n, o) : this.getSecondCacheFile(e);
          }) : this.getSecondCacheFile(e);
        });
      });
    } catch (t) {
      e(0);
    }
  },

  getSecondCacheFile(t) {
    StorageUtil.getData(constants.DOWNLOAD_FILE_SECOND_CACHE, e => {
      e ? this.getSdkFileContent(e, t) : t(0);
    });
  },

  getSdkFileContent(t, e) {
    try {
      const n = UmengUtils.toObject(t);
      Log.d(`current sdk:${n.version}${n.md5}${n.filePath}`), FileUtils.getFile(n.filePath, t => {
        UmengUtils.checkMD5(n.md5, t) ? e(1, t, n.version) : e(0);
      }, (t, n) => {
        e(0);
      });
    } catch (t) {
      e(0);
    }

    return !1;
  },

  downloadFile(t, e, n, o, i) {
    try {
      _system8.default.download({
        url: t,

        success(t) {
          Log.d(`handling success ${t.token}`), _system8.default.onDownloadComplete({
            token: t.token,

            success(t) {
              try {
                const r = t.uri,
                      s = r.split("/"),
                      c = s[s.length - 1];
                let a = constants.SDK_UPDATE_LOCAL_STORAGE_PATH;
                a = `${a + Date.now()}/${c}`, FileUtils.moveFile(t.uri, a, t => {
                  const r = {
                    version: e,
                    md5: n,
                    filePath: t,
                    stable: o
                  };
                  i(r);
                });
              } catch (t) {}
            },

            fail(t, e) {}

          });
        },

        fail() {}

      });
    } catch (t) {}
  },

  storageFileInfo(t) {
    try {
      FileUtils.getFile(t.filePath, e => {
        Log.d(`---------${JSON.stringify(t)}-----------${UmengUtils.MD5(e)}`);
        e && t.md5 && t.md5 === UmengUtils.MD5(e) ? (StorageUtil.getData(constants.DOWNLOAD_FILE_FIRST_CACHE, e => {
          StorageUtil.putData(constants.DOWNLOAD_FILE_FIRST_CACHE, t, t => {
            if (e) {
              const t = UmengUtils.toObject(e);
              !t.stable && t.filePath && FileUtils.deleteFile(t.filePath);
            }
          });
        }), t.stable ? StorageUtil.getData(constants.DOWNLOAD_FILE_SECOND_CACHE, e => {
          StorageUtil.putData(constants.DOWNLOAD_FILE_SECOND_CACHE, t, () => {
            if (e) {
              const t = UmengUtils.toObject(e);
              t.filePath && FileUtils.deleteFile(t.filePath);
            }
          });
        }) : StorageUtil.putData(constants.DOWNLOAD_FILE_FIRST_CACHE, t)) : FileUtils.deleteFile(t.filePath, () => {});
      });
    } catch (t) {
      Log.d(`error message: ${t.toString()}`);
    }
  },

  checkVersionNew(t, e, n, o, i, r) {
    const s = {
      version: t,
      platform: "quickapp",
      appVersion: n,
      appKey: e,
      seedVersion: o,
      systemBaseInfo: i
    };

    _system6.default.fetch({
      url: this.url,
      method: "POST",
      data: s,

      success(t) {
        if (200 === t.code) try {
          const e = UmengUtils.toObject(t.data);

          if (200 === e.code && e.data.update) {
            const t = e.data.info;
            t && r(t);
          }
        } catch (t) {}
      },

      fail(t, e) {},

      complete() {}

    });
  },

  createMethod(t, e, n) {
    try {
      t[e] = n ? function (...t) {
        return n[e](...t);
      } : function (...t) {
        callQueue.push([e, t]);
      };
    } catch (t) {}
  },

  installApi(t, e) {
    try {
      const n = ["resume", "pause", "trackEvent"];

      for (let o = 0, i = n.length; o < i; o++) this.createMethod(t, n[o], e);

      if (e) for (let t = 0, n = callQueue.length; t < n; t++) {
        const n = callQueue[t];
        e[n[0]](...n[1]);
      }
    } catch (t) {}
  },

  compileModule(t, e) {
    try {
      const t = new Function("module", "exports", "require", e),
            n = {
        exports: {}
      },
            o = function (t) {
        return t in modules ? modules[t] : __webpack_require__("./src/quicktask sync recursive")(t);
      };

      return t(n, n.exports, o), n.exports;
    } catch (t) {}
  },

  loadModule(t, e) {
    try {
      let n;
      if (0 === t) n = UmengAnalysisLib;else try {
        n = this.compileModule(t, e);
      } catch (t) {
        n = UmengAnalysisLib;
      }
      return n;
    } catch (t) {}

    return null;
  }

};
const UmengAnalysis = {
  seed_version: "0.0.1",
  version: constants.SDK_VERSION,
  appKey: "",
  _impl: null,
  _inited: !1,

  init(t) {
    if (!this._inited) {
      this._inited = !0, umeng_stat_global.userDubug = !!t.$data.umeng_debug, this.appKey = t.$data.umeng_appkey;
      const e = new SdkUpdater();
      e.init(this, (n, o, i) => {
        const r = e.loadModule(n, o);

        if (r) {
          const n = new r();
          this._impl = n, n.init(t), e.installApi(this, n);
        }

        i || (i = this.version);
        DeviceUtil.getSystemBaseInfo(t => {
          if (1e3 === t.platformVersionCode) return;
          e.checkVersionNew(i, this.appKey, _system5.default.getInfo().versionName, this.seed_version, t, t => {
            t && e.downloadFile(t.fileUrl, t.version, t.fileMD5, t.stable, t => {
              e.storageFileInfo(t);
            });
          });
        });
      });
    }
  }

};
!function () {
  umeng_stat_global && (umeng_stat_global.$umeng_stat = UmengAnalysis, umeng_stat_global.Page = Page);
}();
var _default = UmengAnalysis;
exports.default = _default;

/***/ }),

/***/ "./src/helper/apis sync recursive \\.js":
/*!************************************!*\
  !*** ./src/helper/apis/ sync \.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./common.js": "./src/helper/apis/common.js",
	"./index.js": "./src/helper/apis/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/helper/apis sync recursive \\.js";

/***/ }),

/***/ "./src/quicktask sync recursive":
/*!*****************************!*\
  !*** ./src/quicktask/ sync ***!
  \*****************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src/quicktask sync recursive";
module.exports = webpackEmptyContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/

var $app_style$ = {}
var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\manifest-loader.js?path=d:\kuaiyingyon\youyuedu\src!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\manifest-loader.js?path=d:\\kuaiyingyon\\youyuedu\\src!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")

$app_define$('@app-application/app', [], function ($app_require$, $app_exports$, $app_module$) {
  
  $app_script$($app_module$, $app_exports$, $app_require$)
  if ($app_exports$.__esModule && $app_exports$.default) {
    $app_module$.exports = $app_exports$.default
  }
  $app_module$.exports.manifest = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json")
  $app_module$.exports.style = { list: [ $app_style$ ] }
  
})
$app_bootstrap$('@app-application/app', { packagerVersion: "1.9.8" })

})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createAppHandler();
    }
    else {
      window.createAppHandler = createAppHandler
      // H5注入manifest以获取features
      global.manifest = manifestJson;
    }
  })();
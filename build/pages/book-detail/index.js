(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/book-detail/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/book-detail/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bookList = __webpack_require__(/*! ../../assets/data/book-list.js */ "./src/assets/data/book-list.js");

var _comment = __webpack_require__(/*! ../../assets/data/comment.js */ "./src/assets/data/comment.js");

var _default = {
  public: {
    info: ''
  },
  private: {
    bookInfo: {},
    commentList: _comment.commentData.slice(0, 3),
    recommandBook: _bookList.bookListData.slice(0, 3),
    isInShelf: false,
    shelfList: []
  },

  onInit() {
    this.bookInfo = this.info ? JSON.parse(this.info) : {};
    this.shelfList = $shelfList;
    this.isInShelf = !!this.shelfList.filter(book => {
      return book.id === this.bookInfo.id;
    }).length;
  },

  goToComment() {
    $utils.route2theUrl('pages/comment-all', this.bookInfo);
  },

  goToContents() {
    $utils.route2theUrl('pages/contents', {
      bookId: this.bookInfo.id,
      bookTitle: this.bookInfo.title
    });
  },

  goToDetail(item) {
    console.log(item);
    $utils.routeReplacetheUrl('pages/book-detail', {
      info: JSON.stringify(item)
    });
  },

  goToContent() {
    $utils.route2theUrl('pages/book-content', {
      bookId: this.bookInfo.id,
      bookTitle: this.bookInfo.title,
      total: this.bookInfo.count
    });
  },

  addToShelf() {
    if (this.isInShelf) {
      return;
    }

    if (!this.bookInfo.id) {
      this.$child('toast').showToast({
        content: '图书信息有误',
        icon: 'warning'
      });
      return;
    }

    this.isInShelf = true;
    this.shelfList.push(this.bookInfo);
    $utils.setShelfList(this.shelfList, true);
    this.$child('toast').showToast({
      content: '已加入书架',
      icon: 'thumbs-up'
    });
  }

};
exports.default = _default;
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/icon/index.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/icon/index.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _icons = __webpack_require__(/*! ./icons */ "./node_modules/apex-ui/components/icon/icons.js");

var _default = {
  data() {
    return {
      iconMap: _icons.icons
    };
  },

  props: {
    type: {
      default: "empty"
    },
    size: {
      default: 14
    },
    color: {
      default: ""
    },
    ratio: {
      default: 750
    }
  },

  unescapeFontIconCode(iconCode = "") {
    return unescape(iconCode.replace(/&#x/g, "%u").replace(/;/g, ""));
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/toast/index.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/toast/index.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultData = {
  visible: false,
  content: "",
  icon: "",
  image: "",
  duration: 2,
  mask: true,
  type: "default"
};
let timmer = null;
var _default = {
  data() {
    return _objectSpread({}, defaultData);
  },

  onInit() {},

  showToast(options) {
    const {
      type = "default",
      duration = 2
    } = options;
    console.log("duration", duration);
    Object.assign(this._data, _objectSpread(_objectSpread({}, options), {}, {
      type: type,
      duration: duration,
      visible: true
    }));
    const d = this._data.duration * 1000;
    if (timmer) clearTimeout(timmer);

    if (d !== 0) {
      timmer = setTimeout(() => {
        this.hideToast();
        timmer = null;
      }, d);
    }
  },

  hideToast() {
    Object.assign(this._data, _objectSpread({}, defaultData));
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/book-detail/comment-item-simple.ux?uxType=comp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/components/book-detail/comment-item-simple.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: ['item']
};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/book-detail/info.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/components/book-detail/info.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    info: {
      type: Object,

      default() {
        return {
          id: '',
          image: '',
          title: '',
          author: '',
          description: '',
          count: '',
          score: ''
        };
      }

    }
  }
};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/icon/index.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/icon/index.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "@FONT-FACE": {
    "iconfont": {
      "fontFamily": "iconfont",
      "src": [
        "/node_modules/apex-ui/components/icon/iconfonts.ttf"
      ],
      "fontName": "iconfont",
      "fontSrc": [
        "/node_modules/apex-ui/components/icon/iconfonts.ttf"
      ]
    }
  },
  ".font-icon": {
    "fontFamily": "iconfont",
    "textAlign": "center"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/toast/index.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/toast/index.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".hide": {
    "display": "none"
  },
  ".show": {
    "display": "flex"
  },
  ".opacity-hide-to-show": {
    "animationName": "opacityHideToShow"
  },
  ".opacity-show-to-hide": {
    "animationName": "opacityShowToHide"
  },
  ".translate-left-to-center": {
    "animationName": "translateLeftToCenter"
  },
  ".translate-center-to-left": {
    "animationName": "translateCenterToLeft"
  },
  ".translate-right-to-center": {
    "animationName": "translateRightToCenter"
  },
  ".translate-center-to-right": {
    "animationName": "translateCenterToRight"
  },
  ".translate-top-to-center": {
    "animationName": "translateTopToCenter"
  },
  ".translate-center-to-top": {
    "animationName": "translateCenterToTop"
  },
  ".translate-bottom-to-center": {
    "animationName": "translateBottomToCenter"
  },
  ".translate-center-to-bottom": {
    "animationName": "translateCenterToBottom"
  },
  "@KEYFRAMES": {
    "opacityHideToShow": [
      {
        "opacity": 0,
        "time": 0
      },
      {
        "opacity": 1,
        "time": 100
      }
    ],
    "opacityShowToHide": [
      {
        "opacity": 1,
        "time": 0
      },
      {
        "opacity": 0,
        "time": 100
      }
    ],
    "translateLeftToCenter": [
      {
        "transform": "{\"translateX\":\"-100%\"}",
        "time": 0
      },
      {
        "transform": "{\"translateX\":\"0px\"}",
        "time": 100
      }
    ],
    "translateCenterToLeft": [
      {
        "transform": "{\"translateX\":\"0px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateX\":\"-100%\"}",
        "time": 100
      }
    ],
    "translateRightToCenter": [
      {
        "transform": "{\"translateX\":\"100%\"}",
        "time": 0
      },
      {
        "transform": "{\"translateX\":\"0px\"}",
        "time": 100
      }
    ],
    "translateCenterToRight": [
      {
        "transform": "{\"translateX\":\"0px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateX\":\"100%\"}",
        "time": 100
      }
    ],
    "translateTopToCenter": [
      {
        "transform": "{\"translateY\":\"-100%\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"0%\"}",
        "time": 100
      }
    ],
    "translateCenterToTop": [
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"-100%\"}",
        "time": 100
      }
    ],
    "translateBottomToCenter": [
      {
        "transform": "{\"translateY\":\"100%\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"0%\"}",
        "time": 100
      }
    ],
    "translateCenterToBottom": [
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"100%\"}",
        "time": 100
      }
    ]
  },
  ".wrap": {
    "position": "fixed",
    "height": "100%",
    "width": "100%",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".apex-toast": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0.7)",
    "paddingTop": "10px",
    "paddingRight": "18px",
    "paddingBottom": "10px",
    "paddingLeft": "18px",
    "borderRadius": "8px"
  },
  ".apex-toast text": {
    "color": "#ffffff",
    "textAlign": "center",
    "fontSize": "24px",
    "lines": 1,
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px",
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "apex-toast"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".apex-toast .loading": {
    "color": "#ffffff",
    "height": "60px",
    "width": "60px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "apex-toast"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "loading"
        }
      ]
    }
  },
  ".apex-toast .custom-icon": {
    "marginTop": "15px",
    "marginRight": "15px",
    "marginBottom": "15px",
    "marginLeft": "15px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "apex-toast"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "custom-icon"
        }
      ]
    }
  },
  ".apex-toast-type": {
    "justifyContent": "center",
    "marginTop": "15px",
    "marginRight": "15px",
    "marginBottom": "15px",
    "marginLeft": "15px"
  },
  ".apex-toast-mask": {
    "position": "fixed",
    "top": "0px",
    "bottom": "0px",
    "left": "0px",
    "right": "0px"
  },
  ".apex-toast-icon": {
    "fontSize": "38px",
    "marginBottom": "6px"
  },
  ".apex-toast-image": {
    "width": "100px",
    "height": "100px",
    "objectFit": "cover",
    "marginTop": "15px",
    "marginRight": "15px",
    "marginBottom": "15px",
    "marginLeft": "15px"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/book-detail/comment-item-simple.ux?uxType=comp":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/components/book-detail/comment-item-simple.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "@FONT-FACE": {
    "font1": {
      "fontFamily": "font1",
      "src": [
        "/assets/fonts/仓耳非白W02.ttf"
      ],
      "fontName": "font1",
      "fontSrc": [
        "/assets/fonts/仓耳非白W02.ttf"
      ]
    },
    "font2": {
      "fontFamily": "font2",
      "src": [
        "/assets/fonts/千图笔锋手写体.ttf"
      ],
      "fontName": "font2",
      "fontSrc": [
        "/assets/fonts/千图笔锋手写体.ttf"
      ]
    },
    "font3": {
      "fontFamily": "font3",
      "src": [
        "/assets/fonts/字体传奇南安体.ttf"
      ],
      "fontName": "font3",
      "fontSrc": [
        "/assets/fonts/字体传奇南安体.ttf"
      ]
    },
    "iconfont": {
      "fontFamily": "iconfont",
      "src": [
        "/assets/iconfont/iconfont.ttf"
      ],
      "fontName": "iconfont",
      "fontSrc": [
        "/assets/iconfont/iconfont.ttf"
      ]
    }
  },
  ".page-wrapper": {
    "width": "100%",
    "flexDirection": "column",
    "color": "#1a1a1a",
    "backgroundColor": "#f4f6fa"
  },
  ".page-container": {
    "flex": 1,
    "width": "100%",
    "flexDirection": "column"
  },
  ".page-container-white": {
    "flex": 1,
    "width": "100%",
    "flexDirection": "column",
    "backgroundColor": "#ffffff"
  },
  ".page-column": {
    "width": "100%",
    "flexDirection": "column"
  },
  ".text": {
    "fontSize": "30px"
  },
  ".text-black": {
    "fontSize": "30px",
    "color": "#1a1a1a"
  },
  ".text-warning": {
    "fontSize": "30px",
    "color": "#e78121"
  },
  ".text-primary": {
    "fontSize": "30px",
    "color": "#20a0ff"
  },
  ".text-remark": {
    "fontSize": "25px",
    "color": "#919394"
  },
  ".text-remark-black": {
    "fontSize": "25px",
    "color": "#1a1a1a"
  },
  ".text-remark-primary": {
    "fontSize": "25px",
    "color": "#20a0ff"
  },
  ".text-remark-big": {
    "fontSize": "30px",
    "color": "#919394"
  },
  ".text-remark-warning": {
    "fontSize": "30px",
    "color": "#e78121"
  },
  ".text-title": {
    "fontSize": "35px",
    "color": "#1a1a1a"
  },
  ".title": {
    "fontSize": "50px",
    "color": "#1a1a1a",
    "fontWeight": "bold"
  },
  ".list-title": {
    "width": "100%",
    "alignContent": "center",
    "paddingTop": "30px",
    "paddingRight": "0px",
    "paddingBottom": "30px",
    "paddingLeft": "0px",
    "fontSize": "35px",
    "color": "#1a1a1a",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".button": {
    "height": "50px",
    "width": "100%",
    "backgroundColor": "#e2efff",
    "paddingTop": "0px",
    "paddingRight": "15px",
    "paddingBottom": "0px",
    "paddingLeft": "15px",
    "color": "#20a0ff",
    "fontSize": "25px",
    "textAlign": "center",
    "borderRadius": "5px"
  },
  ".flex-1": {
    "flex": 1
  },
  ".space-between-line": {
    "width": "100%",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  ".section-container": {
    "width": "100%",
    "flexDirection": "column"
  },
  ".section": {
    "flexDirection": "column",
    "paddingBottom": "30px",
    "backgroundColor": "#ffffff"
  },
  ".section-title": {
    "width": "100%",
    "alignContent": "center",
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".section-title .section-title-line": {
    "width": "6px",
    "backgroundColor": "#20a0ff",
    "marginTop": "8px",
    "marginRight": "10px",
    "marginBottom": "8px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "section-title"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "section-title-line"
        }
      ]
    }
  },
  ".section-title-bordered": {
    "width": "100%",
    "alignContent": "center",
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#ffffff",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".section-title-bordered .section-title-line": {
    "width": "6px",
    "backgroundColor": "#20a0ff",
    "marginTop": "8px",
    "marginRight": "10px",
    "marginBottom": "8px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "section-title-bordered"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "section-title-line"
        }
      ]
    }
  },
  ".section-content": {
    "flexWrap": "wrap",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px"
  },
  ".section-label": {
    "fontSize": "25px",
    "borderRadius": "6px",
    "height": "80px",
    "width": "300px",
    "textAlign": "center",
    "marginTop": "10px",
    "marginRight": "10px",
    "marginBottom": "10px",
    "marginLeft": "10px",
    "backgroundColor": "#f4f6fa"
  },
  ".section-item-text": {
    "fontSize": "25px",
    "height": "60px",
    "textAlign": "center"
  },
  ".list-container": {
    "backgroundColor": "#ffffff",
    "width": "100%",
    "flex": 1,
    "paddingTop": "0px",
    "paddingRight": "40px",
    "paddingBottom": "0px",
    "paddingLeft": "40px"
  },
  ".list-item": {
    "width": "100%",
    "paddingTop": "30px",
    "paddingRight": "0px",
    "paddingBottom": "30px",
    "paddingLeft": "0px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".list-item .list-rank": {
    "width": "50px",
    "height": "50px",
    "backgroundColor": "#f4f6fa",
    "borderRadius": "25px",
    "marginRight": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-rank"
        }
      ]
    }
  },
  ".list-item .list-rank .list-rank-text": {
    "width": "100%",
    "textAlign": "center",
    "color": "#919394",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-rank"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-rank-text"
        }
      ]
    }
  },
  ".load-status": {
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "justifyContent": "center"
  },
  ".load-status .load-status-text": {
    "color": "#919394",
    "fontSize": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status-text"
        }
      ]
    }
  },
  ".title-bar": {
    "backgroundColor": "#ffffff",
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".title-bar-noline": {
    "backgroundColor": "#ffffff",
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  ".search": {
    "backgroundColor": "#f4f6fa",
    "flex": 1,
    "height": "70px",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px",
    "borderRadius": "8px",
    "justifyContent": "center",
    "alignContent": "center"
  },
  ".search .search-icon": {
    "width": "40px",
    "height": "70px",
    "fontSize": "25px",
    "color": "#20a0ff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-icon"
        }
      ]
    }
  },
  ".search .search-input": {
    "flex": 1,
    "fontSize": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-input"
        }
      ]
    }
  },
  ".bottom-bar": {
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".btn-primary": {
    "color": "#20a0ff",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#20a0ff",
    "borderRightColor": "#20a0ff",
    "borderBottomColor": "#20a0ff",
    "borderLeftColor": "#20a0ff",
    "borderRadius": "5px",
    "paddingTop": "15px",
    "paddingRight": "0px",
    "paddingBottom": "15px",
    "paddingLeft": "0px",
    "width": "200px",
    "textAlign": "center"
  },
  ".btn-disabled": {
    "color": "#919394",
    "borderTopColor": "#919394",
    "borderRightColor": "#919394",
    "borderBottomColor": "#919394",
    "borderLeftColor": "#919394"
  },
  ".comment-page .textarea": {
    "width": "100%",
    "height": "300px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#eaeaea",
    "borderRightColor": "#eaeaea",
    "borderBottomColor": "#eaeaea",
    "borderLeftColor": "#eaeaea",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "fontSize": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "textarea"
        }
      ]
    }
  },
  ".comment-page .text-line": {
    "paddingTop": "0px",
    "paddingRight": "40px",
    "paddingBottom": "0px",
    "paddingLeft": "40px",
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-line"
        }
      ]
    }
  },
  ".comment-page .btn-line": {
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "width": "100%",
    "justifyContent": "flex-end",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "btn-line"
        }
      ]
    }
  },
  ".comment-page .publish-btn": {
    "width": "150px",
    "height": "80px",
    "color": "#ffffff",
    "backgroundColor": "#20a0ff",
    "borderRadius": "4px",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "publish-btn"
        }
      ]
    }
  },
  ".iconfont": {
    "fontFamily": "iconfont"
  },
  ".comment-container": {
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "0px",
    "paddingLeft": "40px",
    "backgroundColor": "#ffffff",
    "width": "100%",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "flex-start"
  },
  ".comment-left": {
    "width": "60px",
    "fontSize": "40px",
    "paddingRight": "20px"
  },
  ".comment-right": {
    "flex": 1,
    "flexDirection": "column",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".comment-right .text-remark": {
    "marginBottom": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-right"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-remark"
        }
      ]
    }
  },
  ".comment-right .text-black": {
    "marginBottom": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-right"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-black"
        }
      ]
    }
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/book-detail/info.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/components/book-detail/info.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "@FONT-FACE": {
    "font1": {
      "fontFamily": "font1",
      "src": [
        "/assets/fonts/仓耳非白W02.ttf"
      ],
      "fontName": "font1",
      "fontSrc": [
        "/assets/fonts/仓耳非白W02.ttf"
      ]
    },
    "font2": {
      "fontFamily": "font2",
      "src": [
        "/assets/fonts/千图笔锋手写体.ttf"
      ],
      "fontName": "font2",
      "fontSrc": [
        "/assets/fonts/千图笔锋手写体.ttf"
      ]
    },
    "font3": {
      "fontFamily": "font3",
      "src": [
        "/assets/fonts/字体传奇南安体.ttf"
      ],
      "fontName": "font3",
      "fontSrc": [
        "/assets/fonts/字体传奇南安体.ttf"
      ]
    },
    "iconfont": {
      "fontFamily": "iconfont",
      "src": [
        "/assets/iconfont/iconfont.ttf"
      ],
      "fontName": "iconfont",
      "fontSrc": [
        "/assets/iconfont/iconfont.ttf"
      ]
    }
  },
  ".page-wrapper": {
    "width": "100%",
    "flexDirection": "column",
    "color": "#1a1a1a",
    "backgroundColor": "#f4f6fa"
  },
  ".page-container": {
    "flex": 1,
    "width": "100%",
    "flexDirection": "column"
  },
  ".page-container-white": {
    "flex": 1,
    "width": "100%",
    "flexDirection": "column",
    "backgroundColor": "#ffffff"
  },
  ".page-column": {
    "width": "100%",
    "flexDirection": "column"
  },
  ".text": {
    "fontSize": "30px"
  },
  ".text-black": {
    "fontSize": "30px",
    "color": "#1a1a1a"
  },
  ".text-warning": {
    "fontSize": "30px",
    "color": "#e78121"
  },
  ".text-primary": {
    "fontSize": "30px",
    "color": "#20a0ff"
  },
  ".text-remark": {
    "fontSize": "25px",
    "color": "#919394"
  },
  ".text-remark-black": {
    "fontSize": "25px",
    "color": "#1a1a1a"
  },
  ".text-remark-primary": {
    "fontSize": "25px",
    "color": "#20a0ff"
  },
  ".text-remark-big": {
    "fontSize": "30px",
    "color": "#919394"
  },
  ".text-remark-warning": {
    "fontSize": "30px",
    "color": "#e78121"
  },
  ".text-title": {
    "fontSize": "35px",
    "color": "#1a1a1a"
  },
  ".title": {
    "fontSize": "50px",
    "color": "#1a1a1a",
    "fontWeight": "bold"
  },
  ".list-title": {
    "width": "100%",
    "alignContent": "center",
    "paddingTop": "30px",
    "paddingRight": "0px",
    "paddingBottom": "30px",
    "paddingLeft": "0px",
    "fontSize": "35px",
    "color": "#1a1a1a",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".button": {
    "height": "50px",
    "width": "100%",
    "backgroundColor": "#e2efff",
    "paddingTop": "0px",
    "paddingRight": "15px",
    "paddingBottom": "0px",
    "paddingLeft": "15px",
    "color": "#20a0ff",
    "fontSize": "25px",
    "textAlign": "center",
    "borderRadius": "5px"
  },
  ".flex-1": {
    "flex": 1
  },
  ".space-between-line": {
    "width": "100%",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  ".section-container": {
    "width": "100%",
    "flexDirection": "column"
  },
  ".section": {
    "flexDirection": "column",
    "paddingBottom": "30px",
    "backgroundColor": "#ffffff"
  },
  ".section-title": {
    "width": "100%",
    "alignContent": "center",
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".section-title .section-title-line": {
    "width": "6px",
    "backgroundColor": "#20a0ff",
    "marginTop": "8px",
    "marginRight": "10px",
    "marginBottom": "8px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "section-title"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "section-title-line"
        }
      ]
    }
  },
  ".section-title-bordered": {
    "width": "100%",
    "alignContent": "center",
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#ffffff",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".section-title-bordered .section-title-line": {
    "width": "6px",
    "backgroundColor": "#20a0ff",
    "marginTop": "8px",
    "marginRight": "10px",
    "marginBottom": "8px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "section-title-bordered"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "section-title-line"
        }
      ]
    }
  },
  ".section-content": {
    "flexWrap": "wrap",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px"
  },
  ".section-label": {
    "fontSize": "25px",
    "borderRadius": "6px",
    "height": "80px",
    "width": "300px",
    "textAlign": "center",
    "marginTop": "10px",
    "marginRight": "10px",
    "marginBottom": "10px",
    "marginLeft": "10px",
    "backgroundColor": "#f4f6fa"
  },
  ".section-item-text": {
    "fontSize": "25px",
    "height": "60px",
    "textAlign": "center"
  },
  ".list-container": {
    "backgroundColor": "#ffffff",
    "width": "100%",
    "flex": 1,
    "paddingTop": "0px",
    "paddingRight": "40px",
    "paddingBottom": "0px",
    "paddingLeft": "40px"
  },
  ".list-item": {
    "width": "100%",
    "paddingTop": "30px",
    "paddingRight": "0px",
    "paddingBottom": "30px",
    "paddingLeft": "0px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".list-item .list-rank": {
    "width": "50px",
    "height": "50px",
    "backgroundColor": "#f4f6fa",
    "borderRadius": "25px",
    "marginRight": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-rank"
        }
      ]
    }
  },
  ".list-item .list-rank .list-rank-text": {
    "width": "100%",
    "textAlign": "center",
    "color": "#919394",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-rank"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-rank-text"
        }
      ]
    }
  },
  ".load-status": {
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "justifyContent": "center"
  },
  ".load-status .load-status-text": {
    "color": "#919394",
    "fontSize": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status-text"
        }
      ]
    }
  },
  ".title-bar": {
    "backgroundColor": "#ffffff",
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".title-bar-noline": {
    "backgroundColor": "#ffffff",
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  ".search": {
    "backgroundColor": "#f4f6fa",
    "flex": 1,
    "height": "70px",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px",
    "borderRadius": "8px",
    "justifyContent": "center",
    "alignContent": "center"
  },
  ".search .search-icon": {
    "width": "40px",
    "height": "70px",
    "fontSize": "25px",
    "color": "#20a0ff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-icon"
        }
      ]
    }
  },
  ".search .search-input": {
    "flex": 1,
    "fontSize": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-input"
        }
      ]
    }
  },
  ".bottom-bar": {
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".btn-primary": {
    "color": "#20a0ff",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#20a0ff",
    "borderRightColor": "#20a0ff",
    "borderBottomColor": "#20a0ff",
    "borderLeftColor": "#20a0ff",
    "borderRadius": "5px",
    "paddingTop": "15px",
    "paddingRight": "0px",
    "paddingBottom": "15px",
    "paddingLeft": "0px",
    "width": "200px",
    "textAlign": "center"
  },
  ".btn-disabled": {
    "color": "#919394",
    "borderTopColor": "#919394",
    "borderRightColor": "#919394",
    "borderBottomColor": "#919394",
    "borderLeftColor": "#919394"
  },
  ".comment-page .textarea": {
    "width": "100%",
    "height": "300px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#eaeaea",
    "borderRightColor": "#eaeaea",
    "borderBottomColor": "#eaeaea",
    "borderLeftColor": "#eaeaea",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "fontSize": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "textarea"
        }
      ]
    }
  },
  ".comment-page .text-line": {
    "paddingTop": "0px",
    "paddingRight": "40px",
    "paddingBottom": "0px",
    "paddingLeft": "40px",
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-line"
        }
      ]
    }
  },
  ".comment-page .btn-line": {
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "width": "100%",
    "justifyContent": "flex-end",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "btn-line"
        }
      ]
    }
  },
  ".comment-page .publish-btn": {
    "width": "150px",
    "height": "80px",
    "color": "#ffffff",
    "backgroundColor": "#20a0ff",
    "borderRadius": "4px",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "publish-btn"
        }
      ]
    }
  },
  ".iconfont": {
    "fontFamily": "iconfont"
  },
  ".info": {
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "width": "100%",
    "height": "330px",
    "marginBottom": "20px",
    "backgroundColor": "#ffffff"
  },
  ".info .info-left": {
    "width": "28%",
    "height": "100%",
    "borderRadius": "5px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info-left"
        }
      ]
    }
  },
  ".info .info-right": {
    "width": "60%",
    "paddingTop": "20px",
    "paddingRight": "40px",
    "paddingBottom": "20px",
    "paddingLeft": "40px",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info-right"
        }
      ]
    }
  },
  ".info .info-right .rate": {
    "width": "200px",
    "height": "40px",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "info-right"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rate"
        }
      ]
    }
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/book-detail/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/book-detail/index.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "@FONT-FACE": {
    "font1": {
      "fontFamily": "font1",
      "src": [
        "/assets/fonts/仓耳非白W02.ttf"
      ],
      "fontName": "font1",
      "fontSrc": [
        "/assets/fonts/仓耳非白W02.ttf"
      ]
    },
    "font2": {
      "fontFamily": "font2",
      "src": [
        "/assets/fonts/千图笔锋手写体.ttf"
      ],
      "fontName": "font2",
      "fontSrc": [
        "/assets/fonts/千图笔锋手写体.ttf"
      ]
    },
    "font3": {
      "fontFamily": "font3",
      "src": [
        "/assets/fonts/字体传奇南安体.ttf"
      ],
      "fontName": "font3",
      "fontSrc": [
        "/assets/fonts/字体传奇南安体.ttf"
      ]
    },
    "iconfont": {
      "fontFamily": "iconfont",
      "src": [
        "/assets/iconfont/iconfont.ttf"
      ],
      "fontName": "iconfont",
      "fontSrc": [
        "/assets/iconfont/iconfont.ttf"
      ]
    }
  },
  ".page-wrapper": {
    "width": "100%",
    "flexDirection": "column",
    "color": "#1a1a1a",
    "backgroundColor": "#f4f6fa"
  },
  ".page-container": {
    "flex": 1,
    "width": "100%",
    "flexDirection": "column"
  },
  ".page-container-white": {
    "flex": 1,
    "width": "100%",
    "flexDirection": "column",
    "backgroundColor": "#ffffff"
  },
  ".page-column": {
    "width": "100%",
    "flexDirection": "column"
  },
  ".text": {
    "fontSize": "30px"
  },
  ".text-black": {
    "fontSize": "30px",
    "color": "#1a1a1a"
  },
  ".text-warning": {
    "fontSize": "30px",
    "color": "#e78121"
  },
  ".text-primary": {
    "fontSize": "30px",
    "color": "#20a0ff"
  },
  ".text-remark": {
    "fontSize": "25px",
    "color": "#919394"
  },
  ".text-remark-black": {
    "fontSize": "25px",
    "color": "#1a1a1a"
  },
  ".text-remark-primary": {
    "fontSize": "25px",
    "color": "#20a0ff"
  },
  ".text-remark-big": {
    "fontSize": "30px",
    "color": "#919394"
  },
  ".text-remark-warning": {
    "fontSize": "30px",
    "color": "#e78121"
  },
  ".text-title": {
    "fontSize": "35px",
    "color": "#1a1a1a"
  },
  ".title": {
    "fontSize": "50px",
    "color": "#1a1a1a",
    "fontWeight": "bold"
  },
  ".list-title": {
    "width": "100%",
    "alignContent": "center",
    "paddingTop": "30px",
    "paddingRight": "0px",
    "paddingBottom": "30px",
    "paddingLeft": "0px",
    "fontSize": "35px",
    "color": "#1a1a1a",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".button": {
    "height": "50px",
    "width": "100%",
    "backgroundColor": "#e2efff",
    "paddingTop": "0px",
    "paddingRight": "15px",
    "paddingBottom": "0px",
    "paddingLeft": "15px",
    "color": "#20a0ff",
    "fontSize": "25px",
    "textAlign": "center",
    "borderRadius": "5px"
  },
  ".flex-1": {
    "flex": 1
  },
  ".space-between-line": {
    "width": "100%",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  ".section-container": {
    "width": "100%",
    "flexDirection": "column"
  },
  ".section": {
    "flexDirection": "column",
    "paddingBottom": "30px",
    "backgroundColor": "#ffffff"
  },
  ".section-title": {
    "width": "100%",
    "alignContent": "center",
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".section-title .section-title-line": {
    "width": "6px",
    "backgroundColor": "#20a0ff",
    "marginTop": "8px",
    "marginRight": "10px",
    "marginBottom": "8px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "section-title"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "section-title-line"
        }
      ]
    }
  },
  ".section-title-bordered": {
    "width": "100%",
    "alignContent": "center",
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#ffffff",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".section-title-bordered .section-title-line": {
    "width": "6px",
    "backgroundColor": "#20a0ff",
    "marginTop": "8px",
    "marginRight": "10px",
    "marginBottom": "8px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "section-title-bordered"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "section-title-line"
        }
      ]
    }
  },
  ".section-content": {
    "flexWrap": "wrap",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px"
  },
  ".section-label": {
    "fontSize": "25px",
    "borderRadius": "6px",
    "height": "80px",
    "width": "300px",
    "textAlign": "center",
    "marginTop": "10px",
    "marginRight": "10px",
    "marginBottom": "10px",
    "marginLeft": "10px",
    "backgroundColor": "#f4f6fa"
  },
  ".section-item-text": {
    "fontSize": "25px",
    "height": "60px",
    "textAlign": "center"
  },
  ".list-container": {
    "backgroundColor": "#ffffff",
    "width": "100%",
    "flex": 1,
    "paddingTop": "0px",
    "paddingRight": "40px",
    "paddingBottom": "0px",
    "paddingLeft": "40px"
  },
  ".list-item": {
    "width": "100%",
    "paddingTop": "30px",
    "paddingRight": "0px",
    "paddingBottom": "30px",
    "paddingLeft": "0px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".list-item .list-rank": {
    "width": "50px",
    "height": "50px",
    "backgroundColor": "#f4f6fa",
    "borderRadius": "25px",
    "marginRight": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-rank"
        }
      ]
    }
  },
  ".list-item .list-rank .list-rank-text": {
    "width": "100%",
    "textAlign": "center",
    "color": "#919394",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-rank"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-rank-text"
        }
      ]
    }
  },
  ".load-status": {
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "justifyContent": "center"
  },
  ".load-status .load-status-text": {
    "color": "#919394",
    "fontSize": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-status-text"
        }
      ]
    }
  },
  ".title-bar": {
    "backgroundColor": "#ffffff",
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  },
  ".title-bar-noline": {
    "backgroundColor": "#ffffff",
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  ".search": {
    "backgroundColor": "#f4f6fa",
    "flex": 1,
    "height": "70px",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px",
    "borderRadius": "8px",
    "justifyContent": "center",
    "alignContent": "center"
  },
  ".search .search-icon": {
    "width": "40px",
    "height": "70px",
    "fontSize": "25px",
    "color": "#20a0ff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-icon"
        }
      ]
    }
  },
  ".search .search-input": {
    "flex": 1,
    "fontSize": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-input"
        }
      ]
    }
  },
  ".bottom-bar": {
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".btn-primary": {
    "color": "#20a0ff",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#20a0ff",
    "borderRightColor": "#20a0ff",
    "borderBottomColor": "#20a0ff",
    "borderLeftColor": "#20a0ff",
    "borderRadius": "5px",
    "paddingTop": "15px",
    "paddingRight": "0px",
    "paddingBottom": "15px",
    "paddingLeft": "0px",
    "width": "200px",
    "textAlign": "center"
  },
  ".btn-disabled": {
    "color": "#919394",
    "borderTopColor": "#919394",
    "borderRightColor": "#919394",
    "borderBottomColor": "#919394",
    "borderLeftColor": "#919394"
  },
  ".comment-page .textarea": {
    "width": "100%",
    "height": "300px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#eaeaea",
    "borderRightColor": "#eaeaea",
    "borderBottomColor": "#eaeaea",
    "borderLeftColor": "#eaeaea",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "fontSize": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "textarea"
        }
      ]
    }
  },
  ".comment-page .text-line": {
    "paddingTop": "0px",
    "paddingRight": "40px",
    "paddingBottom": "0px",
    "paddingLeft": "40px",
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-line"
        }
      ]
    }
  },
  ".comment-page .btn-line": {
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "width": "100%",
    "justifyContent": "flex-end",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "btn-line"
        }
      ]
    }
  },
  ".comment-page .publish-btn": {
    "width": "150px",
    "height": "80px",
    "color": "#ffffff",
    "backgroundColor": "#20a0ff",
    "borderRadius": "4px",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-page"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "publish-btn"
        }
      ]
    }
  },
  ".iconfont": {
    "fontFamily": "iconfont"
  },
  ".description": {
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "width": "100%",
    "backgroundColor": "#ffffff",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start"
  },
  ".description .description-title": {
    "fontSize": "35px",
    "color": "#1a1a1a",
    "marginBottom": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "description"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "description-title"
        }
      ]
    }
  },
  ".sub-title": {
    "backgroundColor": "#ffffff",
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "marginTop": "20px",
    "fontSize": "35px",
    "color": "#1a1a1a",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".detail-title": {
    "backgroundColor": "#ffffff",
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "20px",
    "paddingLeft": "40px",
    "marginTop": "20px",
    "fontSize": "35px",
    "color": "#1a1a1a",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".comment-more": {
    "marginRight": "30px"
  },
  ".book-image-list": {
    "width": "100%",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "backgroundColor": "#ffffff",
    "marginBottom": "20px",
    "flexWrap": "wrap",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "flex-start"
  },
  ".book-image-list .g22kjdgy": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-image-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "g22kjdgy"
        }
      ]
    }
  },
  ".book-image-list .book-image-item": {
    "width": "28%",
    "marginTop": "20px",
    "marginRight": "20px",
    "marginBottom": "20px",
    "marginLeft": "20px",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-image-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-image-item"
        }
      ]
    }
  },
  ".book-image-list .book-image-item image": {
    "borderRadius": "5px",
    "width": "100%",
    "height": "270px",
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-image-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-image-item"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".book-image-list .book-image-item .book-image-title": {
    "fontSize": "25px",
    "color": "#1a1a1a",
    "marginTop": "10px",
    "marginRight": "0px",
    "marginBottom": "5px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-image-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-image-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-image-title"
        }
      ]
    }
  },
  ".detail-bottom-bar": {
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "backgroundColor": "#f4f6fa",
    "borderTopWidth": "1px",
    "borderTopColor": "#eaeaea",
    "borderStyle": "solid",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".btn-shelf": {
    "color": "#20a0ff",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#20a0ff",
    "borderRightColor": "#20a0ff",
    "borderBottomColor": "#20a0ff",
    "borderLeftColor": "#20a0ff",
    "borderRadius": "5px",
    "paddingTop": "15px",
    "paddingRight": "0px",
    "paddingBottom": "15px",
    "paddingLeft": "0px",
    "flex": 1,
    "textAlign": "center",
    "marginRight": "20px"
  },
  ".btn-read": {
    "color": "#ffffff",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#20a0ff",
    "borderRightColor": "#20a0ff",
    "borderBottomColor": "#20a0ff",
    "borderLeftColor": "#20a0ff",
    "backgroundColor": "#20a0ff",
    "borderRadius": "5px",
    "paddingTop": "15px",
    "paddingRight": "0px",
    "paddingBottom": "15px",
    "paddingLeft": "0px",
    "flex": 1,
    "textAlign": "center"
  },
  ".btn-shelf-disabled": {
    "color": "#919394",
    "borderTopColor": "#919394",
    "borderRightColor": "#919394",
    "borderBottomColor": "#919394",
    "borderLeftColor": "#919394"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/icon/index.ux?uxType=comp&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/icon/index.ux?uxType=comp& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "text",
  "attr": {
    "value": function () {return this.unescapeFontIconCode(this.iconMap[this.type])}
  },
  "classList": [
    "font-icon"
  ],
  "style": {
    "fontSize": function () {return '' + (this.size*this.ratio/750) + 'px'},
    "color": function () {return this.color}
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/toast/index.ux?uxType=comp&importNames[]=my-icon":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/toast/index.ux?uxType=comp&importNames[]=my-icon ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "wrap"
      ],
      "shown": function () {return this.visible},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "apex-toast-mask"
          ],
          "shown": function () {return this.visible&&this.mask},
          "events": {
            "click": "hideToast"
          }
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "apex-class",
            "apex-toast"
          ],
          "shown": function () {return this.visible},
          "children": [
            {
              "type": "block",
              "attr": {},
              "shown": function () {return this.type!=='default'},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "apex-toast-type"
                  ],
                  "children": [
                    {
                      "type": "my-icon",
                      "attr": {
                        "color": "#ffffff",
                        "type": "information-circle-outline",
                        "size": "80"
                      },
                      "shown": function () {return this.type==='info'}
                    },
                    {
                      "type": "my-icon",
                      "attr": {
                        "color": "#ffffff",
                        "type": "checkmark-circle-outline",
                        "size": "80"
                      },
                      "shown": function () {return this.type==='success'}
                    },
                    {
                      "type": "my-icon",
                      "attr": {
                        "color": "#ffffff",
                        "type": "warning",
                        "size": "80"
                      },
                      "shown": function () {return this.type==='warning'}
                    },
                    {
                      "type": "my-icon",
                      "attr": {
                        "color": "#ffffff",
                        "type": "close-circle-outline",
                        "size": "80"
                      },
                      "shown": function () {return this.type==='error'}
                    },
                    {
                      "type": "progress",
                      "attr": {
                        "type": "circular"
                      },
                      "classList": [
                        "loading"
                      ],
                      "shown": function () {return this.type==='loading'}
                    }
                  ]
                }
              ]
            },
            {
              "type": "block",
              "attr": {},
              "shown": function () {return !(this.type!=='default')},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "custom-icon"
                  ],
                  "shown": function () {return this.icon},
                  "children": [
                    {
                      "type": "my-icon",
                      "attr": {
                        "color": "#ffffff",
                        "apexClass": "apex-toast-icon",
                        "type": function () {return this.icon},
                        "size": "80"
                      },
                      "shown": function () {return this.icon}
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.image}
                  },
                  "classList": [
                    "apex-toast-image"
                  ],
                  "shown": function () {return this.image}
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.content}
              },
              "classList": [
                "apex-toast-content"
              ],
              "shown": function () {return this.content}
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/book-detail/comment-item-simple.ux?uxType=comp&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/components/book-detail/comment-item-simple.ux?uxType=comp& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "comment-container"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": ""
      },
      "classList": [
        "iconfont",
        "comment-left"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "comment-right"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.item.name}
          },
          "classList": [
            "text-remark"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.item.comment}
          },
          "classList": [
            "text-black"
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/book-detail/info.ux?uxType=comp&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/components/book-detail/info.ux?uxType=comp& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "info"
  ],
  "children": [
    {
      "type": "image",
      "attr": {
        "src": function () {return this.info.image}
      },
      "classList": [
        "info-left"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "info-right"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.info.title}
          },
          "classList": [
            "text-title"
          ]
        },
        {
          "type": "rating",
          "attr": {
            "numstars": "5",
            "rating": function () {return Number(this.info.score)},
            "indicator": "true"
          },
          "classList": [
            "rate"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.info.author}
          },
          "classList": [
            "text-remark"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return '' + (this.info.words) + '万字'}
          },
          "classList": [
            "text-remark"
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/book-detail/index.ux?uxType=page&importNames[]=info,importNames[]=comment-item-simple,importNames[]=my-toast":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/book-detail/index.ux?uxType=page&importNames[]=info,importNames[]=comment-item-simple,importNames[]=my-toast ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page-wrapper"
  ],
  "children": [
    {
      "type": "list",
      "attr": {},
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "info"
          },
          "children": [
            {
              "type": "info",
              "attr": {
                "info": function () {return this.bookInfo}
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "description"
          },
          "classList": [
            "description"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "作品简介"
              },
              "classList": [
                "description-title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.bookInfo.description}
              },
              "classList": [
                "text-remark"
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "sub-title"
          },
          "classList": [
            "sub-title"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return '' + '共' + (this.bookInfo.count) + '章'}
              },
              "classList": [
                "text-title"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "events": {
                "click": "goToContents"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "2019-7-23更新"
                  },
                  "classList": [
                    "text-remark"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": ""
                  },
                  "classList": [
                    "text-remark",
                    "iconfont"
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "sub-title"
          },
          "classList": [
            "detail-title"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "热门评论"
              },
              "classList": [
                "text-title"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "events": {
                "click": "goToComment"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "30人正在讨论"
                  },
                  "classList": [
                    "text-remark"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": ""
                  },
                  "classList": [
                    "text-remark",
                    "iconfont"
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "detail-title"
          },
          "classList": [
            "detail-title"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "相似图书推荐"
              },
              "classList": [
                "text-title"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "detail-bottom-bar"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.isInShelf?'已加入书架':'加入书架'}
          },
          "classList": function () {return ['btn', 'btn-shelf', this.isInShelf?'btn-shelf-disabled':'']},
          "events": {
            "click": "addToShelf"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "开始阅读"
          },
          "classList": [
            "btn-read"
          ],
          "events": {
            "click": "goToContent"
          }
        }
      ]
    },
    {
      "type": "my-toast",
      "attr": {
        "id": "toast"
      },
      "id": "toast"
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./node_modules/apex-ui/components/icon/index.ux?uxType=comp&name=my-icon":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./node_modules/apex-ui/components/icon/index.ux?uxType=comp&name=my-icon ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/icon/index.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/icon/index.ux?uxType=comp")

$app_define$('@app-component/my-icon', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/icon/index.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./node_modules/apex-ui/components/toast/index.ux?uxType=comp&name=my-toast":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./node_modules/apex-ui/components/toast/index.ux?uxType=comp&name=my-toast ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../icon/index.ux?uxType=comp&name=my-icon */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./node_modules/apex-ui/components/icon/index.ux?uxType=comp&name=my-icon")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/toast/index.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/toast/index.ux?uxType=comp")

$app_define$('@app-component/my-toast', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=my-icon */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/toast/index.ux?uxType=comp&importNames[]=my-icon")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/book-detail/comment-item-simple.ux?uxType=comp&name=comment-item-simple":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/components/book-detail/comment-item-simple.ux?uxType=comp&name=comment-item-simple ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./comment-item-simple.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/book-detail/comment-item-simple.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./comment-item-simple.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/book-detail/comment-item-simple.ux?uxType=comp")

$app_define$('@app-component/comment-item-simple', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./comment-item-simple.ux?uxType=comp& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/book-detail/comment-item-simple.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/book-detail/info.ux?uxType=comp&name=info":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/components/book-detail/info.ux?uxType=comp&name=info ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./info.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/book-detail/info.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./info.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/book-detail/info.ux?uxType=comp")

$app_define$('@app-component/info', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./info.ux?uxType=comp& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/book-detail/info.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "./node_modules/apex-ui/components/icon/icons.js":
/*!*******************************************************!*\
  !*** ./node_modules/apex-ui/components/icon/icons.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.icons = void 0;
const icons = {
  'add-circle-o': '&#xe977',
  'add-circle': '&#xe976',
  add: '&#xe975',
  airplane: '&#xe974',
  alarm: '&#xe973',
  'arrow-back': '&#xe972',
  'arrow-down': '&#xe971',
  'arrow-dropdown-circle': '&#xe970',
  'arrow-dropdown': '&#xe96f',
  'arrow-dropleft-circle': '&#xe96e',
  'arrow-dropleft': '&#xe96d',
  'arrow-dropright-circle': '&#xe96c',
  'arrow-dropright': '&#xe96b',
  'arrow-dropup-circle': '&#xe96a',
  'arrow-dropup': '&#xe969',
  'arrow-fwd': '&#xe968',
  'arrow-round-back': '&#xe967',
  'arrow-round-down': '&#xe966',
  'arrow-r-fwd': '&#xe965',
  'arrow-round-up': '&#xe964',
  'arrow-up': '&#xe963',
  bluetooth: '&#xe962',
  bug: '&#xe961',
  build: '&#xe960',
  business: '&#xe95f',
  call: '&#xe95e',
  camera: '&#xe95d',
  card: '&#xe95c',
  cart: '&#xe95b',
  chatbox: '&#xe95a',
  chat: '&#xe959',
  'checkbox-outline': '&#xe958',
  checkbox: '&#xe957',
  'checkmark-circle-outline': '&#xe956',
  'checkmark-circle': '&#xe955',
  checkmark: '&#xe954',
  'close-circle-outline': '&#xe953',
  'close-circle': '&#xe952',
  close: '&#xe951',
  'cloud-done': '&#xe950',
  'cloud-down': '&#xe94f',
  'cloud-up': '&#xe94e',
  cut: '&#xe94d',
  'eye-off': '&#xe94c',
  eye: '&#xe94b',
  'finger-print': '&#xe94a',
  'flash-off': '&#xe949',
  flash: '&#xe948',
  flashlight: '&#xe947',
  funnel: '&#xe946',
  gift: '&#xe945',
  'heart-dislike': '&#xe944',
  'heart-empty': '&#xe943',
  'heart-half': '&#xe942',
  heart: '&#xe941',
  'help-circle-outline': '&#xe940',
  'help-circle': '&#xe93f',
  image: '&#xe93e',
  images: '&#xe93d',
  infinite: '&#xe93c',
  'information-circle-outline': '&#xe93b',
  'information-circle': '&#xe93a',
  key: '&#xe939',
  link: '&#xe938',
  list: '&#xe937',
  mail: '&#xe936',
  menu: '&#xe935',
  musical: '&#xe934',
  'notification-off': '&#xe933',
  'notification-o': '&#xe932',
  notification: '&#xe931',
  options: '&#xe930',
  'paper-plane': '&#xe92f',
  pause: '&#xe92e',
  people: '&#xe92d',
  'person-add': '&#xe92c',
  person: '&#xe92b',
  pie: '&#xe92a',
  pin: '&#xe929',
  'play-circle': '&#xe928',
  play: '&#xe927',
  power: '&#xe926',
  pricetag: '&#xe925',
  pricetags: '&#xe924',
  print: '&#xe923',
  'qr-scanner': '&#xe922',
  'refresh-circle': '&#xe921',
  refresh: '&#xe920',
  'remove-circle-outline': '&#xe91f',
  'remove-circle': '&#xe91e',
  rewind: '&#xe91d',
  rocket: '&#xe91c',
  save: '&#xe91b',
  search: '&#xe91a',
  settings: '&#xe919',
  'share-alt': '&#xe918',
  'skip-bwd': '&#xe917',
  'skip-fwd': '&#xe916',
  snow: '&#xe915',
  'star-half': '&#xe914',
  'star-outline': '&#xe913',
  star: '&#xe912',
  stats: '&#xe911',
  sync: '&#xe910',
  'thumbs-down': '&#xe90f',
  'thumbs-up': '&#xe90e',
  time: '&#xe90d',
  timer: '&#xe90c',
  trash: '&#xe90b',
  'trend-down': '&#xe90a',
  'trend-up': '&#xe909',
  undo: '&#xe908',
  unlock: '&#xe907',
  'vol-high': '&#xe906',
  'vol-low': '&#xe905',
  'vol-mute': '&#xe904',
  'vol-off': '&#xe903',
  warning: '&#xe902',
  wifi: '&#xe901',
  woman: '&#xe900'
};
exports.icons = icons;

/***/ }),

/***/ "./src/assets/data/book-list.js":
/*!**************************************!*\
  !*** ./src/assets/data/book-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bookListData = void 0;
const bookListData = [// {
//   id: '1',
//   image: '/assets/images/honglou.jpg',
//   swiper: '/assets/images/honglou_row.jpeg',
//   title: '红楼梦',
//   author: '曹雪芹',
//   description:
//     '《红楼梦》是中国古代长篇小说的高峰。全书１２０回，前８０回是曹雪芹所作，后４０回据说由高鹗续写。　　雪芹１７１５？一１７６３？名沾，字梦阮，号雪芹，又号芹溪居士。清代伟大小说家。祖籍一说是河北丰润，一说是辽宁辽阳。清人入关后，入正白旗内务府籍。从他曾祖至他父亲，其家世袭江宁织造。幼年时家势贵盛，气派显赫。后来其父因事获罪，产业被抄没，家道衰落。曹氏全家从南方北迁，中年后住在北京西北郊，家境清贫，过着“举家食粥”的日子。曹雪芹多才多艺，能诗善画，嗜酒健谈，性格傲岸。《红楼梦》写到８０回时，因贫病交迫，加之爱子夭折，含恨而逝，使《红楼梦》成为未完稿的著作。　　《红楼梦》又名《石头记》、《金玉缘》，以贾、王、史、薛四大家族背景，以贾宝玉和林黛玉的爱情故事为主线，围绕两个主要人物的感情纠葛，描写了大观园内外一系列青年男女的爱情故事。同时，通过对这些爱情悲剧产生的社会环境描绘，牵涉到封建社会政治法律、宗法、妇女、道德、婚姻等方面的问题，昭示了封建社会末期的世态，暴露了封建贵族阶级及其统治的腐朽与罪恶，歌颂了追求光明的叛逆人物，通过叛逆者的悲剧命运宣告了这一社会必然走向灭亡。可以说，《红楼梦》是一部我国封建社会后期社会生活的百科全书。　　《红楼梦》塑造了贾宝玉、林黛玉、薛宝钗等生动的人物形象。宝玉始终站在封建主义精神道德之外，他视仕途为禄蠹，以应酬文字为沽名钓誉之工具，视读圣贤为畏途，既具有浓厚的贵公子的纨裤习气，又具有反封建的叛逆性。他尊重女性，尊重个性，追寻自由，是一位贵族家庭乃至封建制度的叛逆典型；黛玉是一位冰清玉洁、孤高自许、多愁善感的贵族小姐，她视爱情如同她的生命，但她的爱情却因不容于贵族家庭而被摧毁；宝钗是一位遵奉妇道、恪守妇规的封建淑女，她同样是封建制度的牺牲品。　　《红楼梦》突破了传统的取材和构思方式，将社会高度浓缩于家庭范围内作整体展现，贾府实际上是整个社会的缩影。　　《红楼梦》写人的技巧达到了炉火纯青的地步，所描写的人物皆栩栩如生，个性鲜明，具有多重性格，打破了以往小说写人类型化的特征，作者塑造人物形象的主要手法有：在广阔的社会背景上，以精雕细刻的工夫，塑造不同的人物形象；注意人物的个性化，心理描写具体而简洁；把人物放在特定的艺术气氛里，烘托人物的内心情绪。　　《红楼梦》吸取了中国古典文学语言的营养，又提炼了大众语言，熔铸成准确、精炼、纯净、传神、典雅的语言。　　《红楼梦》的情节安排脉胳分明，是一个有机的整体；其结构既筋络相联，纵横交错，又主次分明，有条不紊，一如生活本身，不露人工斧凿之痕。　　《红楼梦》表面看来都是平常的生活琐事，但能够以小见大，见微知著，反映生活的本质，具有丰富深刻的社会意义。　　《红楼梦》问世后，以其深进的思想意蕴与精湛的艺术魅力，震撼着一代代读者的心灵，产生了跨越时空的巨大的影响，在学术研究领域形成了声势浩大的“红学”。在经历了二百多年风风雨雨之后，“红学”不唯没有衰微，反而更为兴盛，这足以说明《红楼梦》所具备的艺术价值。　　《红楼梦》的版本有两个系统，一是仅流传八十回的脂评抄本系统；一是程伟元高鹗整理补缀的一百二十回印本系统。１９８２年人民文学出版社出版的《红楼梦》１２０回校订注释本，是一种较为完善的新读本。',
//   count: 120,
//   words: 68,
//   score: 5
// },
// {
//   id: '2',
//   image: '/assets/images/sanguo.jpg',
//   swiper: '/assets/images/sanguo_row.jpg',
//   title: '三国演义',
//   author: '罗贯中',
//   description:
//     '《三国演义》是中国古代长篇章回小说的开山之作。　　三国故事在我国古代民间颇为流行。宋元时代即被搬上舞台，金、元演出的三国剧目达３０多种。元代至治年间出现了新安虞氏所刊的《全相三国志平话》。元末明初罗贯中综合民间传说和戏曲、话本，结合陈寿《三国志》和裴松之注的史料，根据他个人对社会人生的体悟，创作了《三国志通俗演义》，现存最早刊本是明嘉靖年所刊刻的，俗称“嘉靖本”，本书２４卷。清康熙年间，毛纶毛宗岗父子辨正史事、增删文字，修改成今日通行的１２０回本《三国演义》。　　罗贯中１３３０年一１４００年之间，名本，号湖海散人，明代通俗小说家。他的籍贯一说是太原今山西，一说是钱塘今浙江杭州，不可确考。据传说，罗贯中曾充任过元末农民起义军张士诚的幕客。除《三国志通俗演义》外，他还创作有《隋唐志传》等通俗小说和《赵太祖龙虎风云会》等戏剧。　　《三国演义》描写的是从东汉末年到西晋初年之间近一百年的历史风云。全书反映了三国时代的政治军事斗争，反映了三国时代各类社会矛盾的渗透与转化，概括了这一时代的历史巨变，塑造了一批咤叱风云的英雄人物。在对三国历史的把握上，作者表现出明显的拥刘反曹倾向，以刘备集团作为描写的中心，对刘备集团的主要人物加以歌颂，对曹操则极力揭露鞭挞。今天我们对于作者的这种拥刘反曹的倾向应有辩证的认识。尊刘反曹是民间传说的主要倾向，在罗贯中时代隐含着人民对汉族复兴的希望。　　《三国演义》刻划了近２００个人物形象，其中最为成功的有诸葛亮、曹操、关羽、刘备等人。诸葛亮是作者心目中的“贤相”的化身，他具有“鞠躬尽瘁，死而后已”的高风亮节，具有近世济民再造太平盛世的雄心壮志，而且作者还赋予他呼风唤雨、神机妙算的奇异本领。曹操是一位奸雄，他生活的信条是“宁教我负天下人，不教天下人负我”，既有雄才大略，又残暴奸诈，是一个政治野心家阴谋家这与历史上的真曹操是不可混同的。关羽“威猛刚毅”、“义重如山”。但他的义气是以个人恩怨为前提的，并非国家民族之大义。刘备被作者塑造成为仁民爱物、视贤下士、知人善任的仁君典型。　　《三国演义》描写了大大小小的战争，构思宏伟，手法多样，使我们清晰地看到了一场场刀光血影的战争场面。其中官渡之战、赤壁之战等战争的描写波澜起伏、跌宕跳跃，读来惊心动魄。　　全书的文不甚深，言不甚俗，简洁明快，气势充沛，生动活泼。　　《三国演义》带来我国历史小说创作的热潮，它所塑造的一系列人物形象在我国已家喻户晓，妇而皆知。　　《三国演义》的版本很多，主要有：明弘治刻本《三国志通俗演义》，文字粗朴，内容平易；《三国志演义》，清毛宗岗增删评点本，约成书于康熙初年，该本在社会上流传最为广泛。人民文学出版社多次重印出版。',
//   count: 120,
//   words: 48,
//   score: 5
// },
// {
//   id: '3',
//   image: '/assets/images/xiyou.jpg',
//   swiper: '/assets/images/xiyou_row.jpeg',
//   title: '西游记',
//   author: '吴承恩',
//   description:
//     '本书为我国四大古典名著之一，取材于唐朝僧人玄奘西天取经的故事，融入浓厚的神奇、浪漫、怪诞成分，将取经题材编写为神话故事，成功塑造了孙悟空、唐僧、猪八戒、沙僧的形象，读来引人入胜。作者简介：吴承恩（1510?——1582?）明代小说家。字汝忠，号射阳山人，怀安山阳（江苏淮安）人。他生于一个有学官沦落为商人的家族，家境清贫。吴承恩自幼聪明过人，《淮安府志》载他“性敏而多慧，博极群书，为诗文下笔立成。”但他科考不利，至中年才补上“岁贡生”，后流寓南京，长期靠卖文补贴家用。晚年因家贫出任长兴县丞，由于看不惯官场的黑暗，不久愤而辞官，贫老以终。吴承恩自幼喜欢读野言稗史，熟悉古代神话和民间传说。科场的失意，生活的困顿，使他加深了对封建科举制度、黑暗社会现实的认识，促使他运用志怪小说的形式来表达内心的不满和愤懑。他自言：“虽然吾书名为志怪，盖不专明鬼，实记人间变异，亦微有鉴戒寓焉。”吴承恩杰出的长篇神魔小说《西游记》以唐代玄奘和尚赴西天取经的经历为蓝本，在《大唐西域记》、《大唐慈恩寺三藏法师传》等作品的基础上，经过整理、构思最终写定。作品借助神话人物抒发了作者对现实的不满和改变现实的愿望，折射出作者渴望建立“君贤神明”的王道之国的政治理想。小说借助唐僧师徒在取经路上经历的八十一难折射出人间现实社会的种种情况。小说想象大胆，构思新奇，在人物塑造上采用人、神、兽三位一体的塑造方法，创造出孙悟空，猪八戒等不朽的艺术形象。全书组织严密，繁而不乱，语言活泼生动且夹杂方言俗语，富于生活气息。主题上冲淡了故事原有的宗教色彩，大大丰富了作品的现实内容，具有民主倾向和时代特点。作品讽刺幽默。呈现出不同于以往取经故事的独特风格。',
//   count: 101,
//   words: 59,
//   score: 5
// },
// {
//   id: '4',
//   image: '/assets/images/shuihu.jpg',
//   swiper: '/assets/images/shuihu_row.png',
//   title: '水浒传',
//   author: '施耐庵',
//   description:
//     '人类社会心理的发展，似乎颇符合黑格尔的“否定之否定”。亚当和夏娃刚给造出来时，在伊甸园里光着尻腚混，傻傻地其乐无穷。及至受了阶级敌人的蛊惑，偷吃了智慧果，立刻就感到赤身露体的羞耻，赶快去找东西把羞处盖起来。随着人类的进化，包在身上的布片也就越多，等到布片多到背不动的时候，就开始悟出遮羞的愚蠢，于是这布片又一片片地往下解，减到“比基尼”还嫌不够，一直要弄到西方海滩上那些“无遮大会”方才罢休，完成了一个“裸体──遮蔽──裸体”的“螺旋式上升”。不过，要说第二次裸体跟第一次有什么质的差别，恐怕只有高热量饮食造出来的啤酒肚和轿车软化了的肌肉。所以不如说是“螺旋式下降”，一如“捣乱──失败──再捣乱”似的。\n            食欲和性欲是一切物种赖以生存的基本要求。上帝造人和造兽一般无二，设计得直截了当的：从上到下给你安的那个管道是加油管，用来维持个体的存活；中部安的那个管道，是用来复制个体、维持种系的繁衍的。动物用起这些设备来是“天眼通”，不教就会。偏偏到了人类手上，如此一目了然的事却变得无限复杂起来。除了手术室大夫和奉行伊斯兰原教旨主义的妇女，没人觉得加油管口暴露在外有何不妥，也不会有谁以加油为耻。相反，如果有谁娴于使用该管道，还能变成“美食家”、“品酒大师”一类的高薪专业人士。但那个复制管道却使人类莫名其妙地感到羞耻，不但得给重重包裹起来，而且还不能想用就用。事先得通过旷日持久的复杂选择程序，获得官方颁发的营业执照并举行隆重开业仪式。使用时必须藏于暗室秘密操作，事前事后还不能宣之于口。全世界心照不宣，串通一气，咬紧牙关，坚不吐实，浑如世上从无此事，更不会去选什么“美淫家”或“品女（男）大师”。最有趣的是，在事前的选择活动中，无论是男方还是女方都不会想到去检查对方设备的质量和彼此的匹配问题，无关设备如五官是否端正反倒成了考虑的重要因素。\n            在人类一切活动中，大概再也没有比这更貌似荒唐的行为了，这究竟是怎么回事。',
//   count: 120,
//   words: 72,
//   score: 5
// },
// {
//   id: '5',
//   image: '/assets/images/jinpingmei.jpeg',
//   swiper: '/assets/images/jinpingmei_row.jpeg',
//   title: '金瓶梅',
//   author: '兰陵笑笑生',
//   description:
//     '《金瓶梅》，中国古代长篇白话世情小说，一般认为是中国第一部文人独立创作的章回体长篇小说。其成书时间约在明朝隆庆至万历年间，作者署名兰陵笑笑生。《金瓶梅》书名是由小说三个女主人公潘金莲、李瓶儿、庞春梅各取一字合成的。小说题材由《水浒传》中武松杀嫂一段演化而来，通过对兼有官僚、恶霸、富商三种身份的市侩势力的代表人物西门庆及其家庭罪恶生活的描述，体现当时民间生活的面貌，描绘了一个上至朝廷内擅权专政的太师，下至地方官僚恶霸乃至市井间的地痞、流氓、宦官、帮闲所构成的鬼蜮世界，揭露了明代中叶社会的黑暗和腐败，具有较深刻的认识价值。被列为明代“四大奇书”之首。',
//   count: 101,
//   words: 63,
//   score: 5
// }
{
  "id": 1,
  "title": "都市",
  "sex": 1
}, {
  "id": 2,
  "title": "玄幻",
  "sex": 1
}, {
  "id": 3,
  "title": "历史",
  "sex": 1
}, {
  "id": 4,
  "title": "悬疑",
  "sex": 1
}, {
  "id": 5,
  "title": "灵异",
  "sex": 1
}, {
  "id": 6,
  "title": "科幻",
  "sex": 1
}, {
  "id": 7,
  "title": "游戏",
  "sex": 1
}, {
  "id": 8,
  "title": "校园",
  "sex": 1
}, {
  "id": 9,
  "title": "军事",
  "sex": 1
}, {
  "id": 10,
  "title": "奇幻",
  "sex": 1
}, {
  "id": 11,
  "title": "同人",
  "sex": 1
}, {
  "id": 20,
  "title": "现代言情",
  "sex": 2
}, {
  "id": 21,
  "title": "古代言情",
  "sex": 2
}, {
  "id": 22,
  "title": "幻想言情",
  "sex": 2
}, {
  "id": 23,
  "title": "悬疑灵异",
  "sex": 2
}, {
  "id": 24,
  "title": "耽美小说",
  "sex": 2
}, {
  "id": 25,
  "title": "次元青春",
  "sex": 2
}, {
  "id": 26,
  "title": "年代民国",
  "sex": 2
}, {
  "id": 27,
  "title": "科幻末世",
  "sex": 2
}];
exports.bookListData = bookListData;

/***/ }),

/***/ "./src/assets/data/comment.js":
/*!************************************!*\
  !*** ./src/assets/data/comment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.commentData = void 0;
const commentData = [{
  id: '440000201012179259',
  name: '文伟',
  comment: '下发些选见路新反龙图',
  time: '1999-02-24',
  resource: {
    id: '130000197204308818',
    name: '罗娟',
    comment: '志太量们员用集国明县',
    time: '2006-10-14'
  }
}, {
  id: '350000198510075755',
  name: '姜丽',
  comment: '政体外里风期强成会资它全指组类位须学华声都如这反',
  time: '1972-12-16',
  resource: {
    id: '230000200510227707',
    name: '赵娟',
    comment: '大相军认然发志同相长究群更战置水学且六几以北酸',
    time: '2006-08-01'
  }
}, {
  id: '810000201404230788',
  name: '尹丽',
  comment: '局为起片毛品文张程感力基头',
  time: '1978-07-20',
  resource: null
}, {
  id: '71000019860811975X',
  name: '石超',
  comment: '公认包白真层安式我图间劳电而产整其且提',
  time: '2018-11-24',
  resource: null
}, {
  id: '410000198504160239',
  name: '邱勇',
  comment: '收社少率为真决术青土没再技再把次',
  time: '2018-07-17',
  resource: null
}, {
  id: '310000201411238018',
  name: '董平',
  comment: '指量广单条政全三存没',
  time: '2001-12-31',
  resource: {
    id: '140000201803229434',
    name: '高静',
    comment: '至改确边安克受才劳走进复大容干适家其务',
    time: '1979-09-27'
  }
}, {
  id: '630000197911116119',
  name: '谭静',
  comment: '党么学油品克标区列低铁身斗况列断合性中题维',
  time: '1983-03-19',
  resource: null
}, {
  id: '1630000197911116119',
  name: '小明',
  comment: '空寿司斗况列断合性中题维',
  time: '1983-03-19',
  resource: null
}, {
  id: '122230000197911116119',
  name: '木增',
  comment: '上课上课合性中题维',
  time: '1983-08-21',
  resource: null
}, {
  id: '23888888888888881111',
  name: '静香',
  comment: '水库大开大合上手机费',
  time: '2003-06-26',
  resource: null
}];
exports.commentData = commentData;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************************!*\
  !*** ./src/pages/book-detail/index.ux?uxType=page ***!
  \****************************************************/
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../components/book-detail/info.ux?uxType=comp&name=info */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/book-detail/info.ux?uxType=comp&name=info")
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../components/book-detail/comment-item-simple.ux?uxType=comp&name=comment-item-simple */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/book-detail/comment-item-simple.ux?uxType=comp&name=comment-item-simple")
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../../node_modules/apex-ui/components/toast/index.ux?uxType=comp&name=my-toast */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./node_modules/apex-ui/components/toast/index.ux?uxType=comp&name=my-toast")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/book-detail/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/book-detail/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=info,importNames[]=comment-item-simple,importNames[]=my-toast */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/book-detail/index.ux?uxType=page&importNames[]=info,importNames[]=comment-item-simple,importNames[]=my-toast")

     $app_module$.exports.style = $app_style$
})
$app_bootstrap$('@app-component/index',{ packagerVersion: "1.9.8" })
})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();
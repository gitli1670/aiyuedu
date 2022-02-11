(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/comment-all/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/comment-all/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _comment = __webpack_require__(/*! ../../assets/data/comment.js */ "./src/assets/data/comment.js");

var _default = {
  public: {
    id: '',
    image: '',
    title: '',
    author: '',
    description: '',
    count: '',
    score: ''
  },
  private: {
    bookInfo: {},
    comment: {
      list: [],
      pageNo: 1,
      pageSize: 10,
      total: null,
      load: true
    }
  },

  onInit() {
    console.log('info');
    this.queryList(1);
  },

  queryList(pageNo) {
    if (!isNaN(pageNo) && pageNo !== this.comment.pageNo) {
      return;
    }

    if (this.comment.total && (this.comment.pageNo - 1) * this.comment.pageSize >= this.comment.total) {
      this.comment.load = false;
      return;
    }

    this.queryFn();
  },

  queryFn() {
    this.comment.total = 30;
    this.comment.list = this.comment.list.concat(_comment.commentData);
    this.comment.pageNo++;
  },

  publishComment() {
    $utils.route2theUrl('pages/comment', {
      title: this.title,
      id: this.id
    });
  },

  replyComment(parameter) {
    let comment = parameter.detail.comment;
    $utils.route2theUrl('pages/comment-reply', {
      title: this.title,
      id: this.id,
      commentId: comment.id,
      commentText: comment.comment,
      commentName: comment.name
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    loading: {
      default: true
    },
    tip: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    }
  }
};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/book-detail/comment-item.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/components/book-detail/comment-item.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: ['item'],

  replyComment(item) {
    this.$emit('replyComment', {
      comment: item
    });
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".apex-load-more": {
    "marginTop": "15px",
    "marginRight": "15px",
    "marginBottom": "15px",
    "marginLeft": "15px",
    "justifyContent": "center"
  },
  ".apex-load-more stack": {
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "apex-load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        }
      ]
    }
  },
  ".apex-load-more text": {
    "fontSize": "24px",
    "textAlign": "center",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "apex-load-more"
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
  ".apex-load-more-loading": {
    "color": "#2d8cf0"
  },
  ".apex-load-more-line": {
    "width": "80%",
    "height": "2px",
    "backgroundColor": "#f7f7f7"
  },
  ".apex-load-more-empty": {
    "width": "8px",
    "height": "8px",
    "borderRadius": "8px",
    "backgroundColor": "#e5e5e5"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/book-detail/comment-item.ux?uxType=comp":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/components/book-detail/comment-item.ux?uxType=comp ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px",
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
    "marginBottom": "30px",
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
    "marginBottom": "30px",
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
  },
  ".comment-resource": {
    "backgroundColor": "#f4f6fa",
    "paddingTop": "26px",
    "paddingRight": "26px",
    "paddingBottom": "26px",
    "paddingLeft": "26px",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start"
  },
  ".comment-resource .space-between-line": {
    "paddingBottom": "26px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-resource"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "space-between-line"
        }
      ]
    }
  },
  ".comment-resource .text-remark": {
    "marginBottom": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "comment-resource"
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
  ".reply .text-remark": {
    "paddingTop": "20px",
    "paddingRight": "0px",
    "paddingBottom": "20px",
    "paddingLeft": "0px",
    "marginBottom": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "reply"
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
  ".reply .iconfont": {
    "paddingTop": "20px",
    "paddingRight": "0px",
    "paddingBottom": "20px",
    "paddingLeft": "0px",
    "marginBottom": "0px",
    "width": "100px",
    "textAlign": "right",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "reply"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "iconfont"
        }
      ]
    }
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/comment-all/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/comment-all/index.ux?uxType=page ***!
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
  ".comment-all-wrapper": {
    "backgroundColor": "#ffffff"
  },
  ".description": {
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "width": "100%",
    "marginBottom": "20px",
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
  ".description .g22kjdgy": {
    "color": "#ffffff",
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
          "v": "g22kjdgy"
        }
      ]
    }
  },
  ".comment-title": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start"
  },
  ".comment-more": {
    "marginRight": "30px"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "apex-load-more"
  ],
  "children": [
    {
      "type": "progress",
      "attr": {
        "type": "circular"
      },
      "classList": [
        "apex-load-more-loading"
      ],
      "shown": function () {return this.loading}
    },
    {
      "type": "stack",
      "attr": {},
      "classList": [
        "stack"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "apex-load-more-line"
          ],
          "shown": function () {return !this.loading}
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "apex-load-more-tip"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.tip}
              },
              "style": {
                "backgroundColor": function () {return this.bgColor}
              },
              "shown": function () {return this.tip!==''}
            },
            {
              "type": "text",
              "attr": {
                "value": "正在加载"
              },
              "style": {
                "backgroundColor": function () {return this.bgColor}
              },
              "shown": function () {return (this.tip===''&&this.loading)&&!(this.tip!=='')}
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "apex-load-more-empty"
              ],
              "shown": function () {return !(this.tip!=='')&&!(this.tip===''&&this.loading)}
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/book-detail/comment-item.ux?uxType=comp&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/components/book-detail/comment-item.ux?uxType=comp& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "comment-resource"
          ],
          "shown": function () {return this.item.resource},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "space-between-line"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.resource.name}
                  },
                  "classList": [
                    "text-remark-black"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.resource.time}
                  },
                  "classList": [
                    "text-remark"
                  ]
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.item.resource.comment}
              },
              "classList": [
                "text-remark-big"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "space-between-line",
            "reply"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.item.time}
              },
              "classList": [
                "text-remark"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": ""
              },
              "classList": [
                "iconfont"
              ],
              "events": {
                "click": function (evt) { return this.replyComment(this.item,evt)}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/comment-all/index.ux?uxType=page&importNames[]=comment-item,importNames[]=my-load-more":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/comment-all/index.ux?uxType=page&importNames[]=comment-item,importNames[]=my-load-more ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page-wrapper",
    "comment-all-wrapper"
  ],
  "children": [
    {
      "type": "list",
      "attr": {
        "id": "book"
      },
      "id": "book",
      "events": {
        "scrollbottom": "queryList"
      },
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "comment-title"
          },
          "classList": [
            "section-title-bordered"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.title}
              },
              "classList": [
                "text-title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "发表评论"
              },
              "classList": [
                "text-primary"
              ],
              "events": {
                "click": "publishComment"
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "comment"
          },
          "repeat": function () {return this.comment.list},
          "children": [
            {
              "type": "comment-item",
              "attr": {
                "item": function () {return this.$item}
              },
              "events": {
                "reply-comment": "replyComment"
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "loadMore"
          },
          "classList": [
            "load-status"
          ],
          "shown": function () {return this.comment.load},
          "children": [
            {
              "type": "my-load-more",
              "attr": {
                "tip": "加载更多"
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "noMore"
          },
          "classList": [
            "load-status"
          ],
          "shown": function () {return !this.comment.load},
          "children": [
            {
              "type": "my-load-more",
              "attr": {
                "tip": "没有更多内容了",
                "loading": function () {return false}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp&name=my-load-more":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp&name=my-load-more ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp")

$app_define$('@app-component/my-load-more', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/book-detail/comment-item.ux?uxType=comp&name=comment-item":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/components/book-detail/comment-item.ux?uxType=comp&name=comment-item ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./comment-item.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/book-detail/comment-item.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./comment-item.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/book-detail/comment-item.ux?uxType=comp")

$app_define$('@app-component/comment-item', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./comment-item.ux?uxType=comp& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/book-detail/comment-item.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

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
  !*** ./src/pages/comment-all/index.ux?uxType=page ***!
  \****************************************************/
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../components/book-detail/comment-item.ux?uxType=comp&name=comment-item */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/book-detail/comment-item.ux?uxType=comp&name=comment-item")
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../../node_modules/apex-ui/components/load-more/index.ux?uxType=comp&name=my-load-more */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp&name=my-load-more")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/comment-all/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/comment-all/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=comment-item,importNames[]=my-load-more */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/comment-all/index.ux?uxType=page&importNames[]=comment-item,importNames[]=my-load-more")

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
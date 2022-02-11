(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/contents/index.ux?uxType=page":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/contents/index.ux?uxType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contents = __webpack_require__(/*! ../../assets/data/contents.js */ "./src/assets/data/contents.js");

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.storage"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  public: {
    bookId: '',
    bookTitle: ''
  },
  private: {
    total: '',
    pageNumStart: 1,
    pageNumEnd: 50,
    pageNo: 1,
    pageCount: 2,
    reverse: false,
    contents: {},
    lastList: [],
    nextList: [],
    chapterContent: [],
    List: [],
    current: 1
  },

  onInit() {
    _system.default.fetch({
      url: 'http://xs.public.fbkjapp.com/books/chapter-list/',
      method: 'GET',
      data: {
        current: this.current,
        limit: 100,
        bookId: this.bookId
      }
    }).then(res => {
      const library = JSON.parse(res.data.data);
      this.total = library.data.total;
      this.nextList = library.data.items;
      this.lastList = this.nextList;
      this.contents = this.nextList;
      const list = this.total / 100;
      const o = Math.floor(list);

      for (let i = o; i > -1; i--) {
        if (i == o) {
          this.List.unshift({
            aiCode: '第' + [i] + '01' + '-' + this.total + '章',
            index: [i]
          });
        } else {
          this.List.unshift({
            aiCode: '第' + [i] + '01' + '-' + [i + 1] + '00章',
            index: [i]
          });
        }
      }

      console.log(library, 789456, this.contents, this.List);
    }).catch(error => {
      console.log(`Something Error: ${error}`);
    });
  },

  updateVal(e) {
    const than = this;
    const newValues = parseInt(e.newValue + '00');
    const Value = parseInt(newValues + 100);
    than.current = JSON.parse(e.newValue);
    than.current = than.current[0] + 1;
    console.log(than.current, e, 33333);

    _system.default.fetch({
      url: 'http://xs.public.fbkjapp.com/books/chapter-list/',
      method: 'GET',
      data: {
        current: than.current,
        limit: 100,
        bookId: than.bookId
      }
    }).then(res => {
      const library = JSON.parse(res.data.data);
      than.nextList = library.data.items;
      than.lastList = than.nextList;
      than.contents = than.nextList;
    }).catch(error => {
      console.log(`Something Error: ${error}`);
    });
  },

  switchOrder() {
    this.reverse = !this.reverse;
    this.switchList();
  },

  switchList() {
    if (this.reverse) {
      if (this.pageNo === 1) {
        this.pageNumStart = this.total.length;
        this.pageNumEnd = 51;
        this.contents = this.nextList.reverse();
      } else if (this.pageNo === 2) {
        this.pageNumStart = 50;
        this.pageNumEnd = 1;
        this.contents = this.lastList.reverse();
      }
    } else {
      if (this.pageNo === 1) {
        this.pageNumStart = 1;
        this.pageNumEnd = 50;
        this.contents = this.lastList;
      } else if (this.pageNo === 2) {
        this.pageNumStart = 51;
        this.pageNumEnd = this.total.length;
        this.contents = this.nextList;
      }
    }
  },

  detail(param) {
    let item = param.detail.item;
    let chapterOrder = {
      bookId: this.bookId,
      chapterId: item.chapterId,
      chapterOrder: item.displayOrder,
      chapterTitle: item.chapterTitle
    };

    _system3.default.push({
      uri: 'pages/book-content',
      params: {
        bookId: this.bookId,
        bookTitle: this.bookTitle,
        chapterId: chapterOrder,
        total: this.total,
        contents: this.contents
      }
    });

    _system2.default.set({
      key: this.bookId,
      value: chapterOrder,
      success: function (data) {
        console.log('handling success');
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`);
      }
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/contents/contents-list.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/components/contents/contents-list.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    list: {}
  },

  detail(item) {
    this.$emit('detail', {
      item
    });
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/contents/contents-list.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/components/contents/contents-list.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".contents-list": {
    "paddingLeft": "30px",
    "backgroundColor": "#ffffff"
  },
  ".contents-item": {
    "width": "100%",
    "paddingTop": "40px",
    "paddingRight": "10px",
    "paddingBottom": "40px",
    "paddingLeft": "10px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/contents/index.ux?uxType=page":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/contents/index.ux?uxType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".g22kjdgy": {
    "color": "#ffffff"
  },
  ".select": {
    "marginTop": "0px",
    "marginRight": "40px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px",
    "width": "40%",
    "height": "66px",
    "borderRadius": "5px",
    "fontSize": "50px",
    "color": "#000000"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/contents/contents-list.ux?uxType=comp&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/components/contents/contents-list.ux?uxType=comp& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "list",
  "attr": {},
  "classList": [
    "contents-list"
  ],
  "children": [
    {
      "type": "list-item",
      "attr": {
        "type": "contents-Item"
      },
      "classList": [
        "contents-item"
      ],
      "repeat": function () {return this.list},
      "events": {
        "click": function (evt) { return this.detail(this.$item,evt)}
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$item.chapterTitle}
          },
          "classList": [
            "text-black"
          ],
          "style": {
            "fontSize": "50px"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/contents/index.ux?uxType=page&importNames[]=contents-list":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/contents/index.ux?uxType=page&importNames[]=contents-list ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page-wrapper"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "title-bar"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return '' + '共' + (this.total) + '章'}
          },
          "classList": [
            "text-black"
          ],
          "style": {
            "fontSize": "50px"
          }
        },
        {
          "type": "select",
          "attr": {},
          "classList": [
            "select"
          ],
          "events": {
            "change": "updateVal"
          },
          "children": [
            {
              "type": "option",
              "attr": {
                "value": function () {return this.$item.index},
                "selected": "false",
                "content": function () {return this.$item.aiCode}
              },
              "repeat": function () {return this.List},
              "style": {
                "fontSize": "50px",
                "marginLeft": "20px",
                "marginRight": "20px",
                "lineHeight": "120px"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "contents-list",
      "attr": {
        "list": function () {return this.contents}
      },
      "events": {
        "detail": "detail"
      }
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/contents/contents-list.ux?uxType=comp&name=contents-list":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/components/contents/contents-list.ux?uxType=comp&name=contents-list ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./contents-list.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/contents/contents-list.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./contents-list.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/contents/contents-list.ux?uxType=comp")

$app_define$('@app-component/contents-list', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./contents-list.ux?uxType=comp& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/contents/contents-list.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "./src/assets/data/contents.js":
/*!*************************************!*\
  !*** ./src/assets/data/contents.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.contentsData = void 0;
const contentsData = {
  1: ['第一回 甄士隐梦幻识通灵　贾雨村风尘怀闺秀', '第二回 贾夫人仙逝扬州城　冷子兴演说荣国府', '第三回 贾雨村夤缘复旧职　林黛玉抛父进京都', '第四回 薄命女偏逢薄命郎　葫芦僧乱判葫芦案', '第五回 游幻境指迷十二钗　饮仙醪曲演红楼梦', '第六回 贾宝玉初试云雨情　刘姥姥一进荣国府', '第七回 送宫花贾琏戏熙凤　宴宁府宝玉会秦钟', '第八回 贾宝玉奇缘识金锁　薛宝钗巧合认通灵', '第九回 训劣子李贵承申饬　嗔顽童茗烟闹书房', '第十回 金寡妇贪利权受辱　张太医论病细穷源', '第十一回 庆寿辰宁府排家宴　见熙凤贾瑞起淫心', '第十二回 王熙凤毒设相思局　贾天祥正照风月鉴', '第十三回 秦可卿死封龙禁尉　王熙凤协理宁国府', '第十四回 林如海灵返苏州郡　贾宝玉路谒北静王', '第十五回 王凤姐弄权铁槛寺　秦鲸卿得趣馒头庵', '第十六回 贾元春才选凤藻宫　秦鲸卿夭逝黄泉路', '第十七回 大观园试才题对额　荣国府归省庆元宵', '第十八回 皇恩重元妃省父母　天伦乐宝玉呈才藻', '第十九回 情切切良宵花解语　意绵绵静日玉生香', '第二十回 王熙凤正言弹妒意　林黛玉俏语谑娇音', '第二十一回 贤袭人娇嗔箴宝玉　俏平儿软语救贾琏', '第二十二回 听曲文宝玉悟禅机　制灯谜贾政悲谶语', '第二十三回 西厢记妙词通戏语　牡丹亭艳曲警芳心', '第二十四回 醉金刚轻财尚义侠　痴女儿遗帕惹相思', '第二十五回 魇魔法叔嫂逢五鬼　通灵玉蒙蔽遇双真', '第二十六回　蜂腰桥设言传心事　潇湘馆春困发幽情', '第二十七回 滴翠亭杨妃戏彩蝶　埋香冢飞燕泣残红', '第二十八回 蒋玉函情赠茜香罗　薛宝钗羞笼红麝串', '第二十九回 享福人福深还祷福　多情女情重愈斟情', '第三十回 宝钗借扇机带双敲　椿龄画蔷痴及局外', '第三十一回 撕扇子作千金一笑　因麒麟伏白首双星', '第三十二回 诉肺腑心迷活宝玉　含耻辱情烈死金钏', '第三十三回 手足眈眈小动唇舌　不肖种种大承笞挞', '第三十四回 情中情因情感妹妹　错里错以错劝哥哥', '第三十五回 白玉钏亲尝莲叶羹　黄金莺巧结梅花络', '第三十六回 绣鸳鸯梦兆绛芸轩　识分定情悟梨香院', '第三十七回 秋爽斋偶结海棠社　蘅芜院夜拟菊花题', '第三十八回 林潇湘魁夺菊花诗　薛蘅芜讽和螃蟹咏', '第三十九回 村姥姥是信口开河　情哥哥偏寻根究底', '第四十回 史太君两宴大观园　金鸳鸯三宣牙牌令', '第四十一回 贾宝玉品茶栊翠庵　刘姥姥醉卧怡红院', '第四十二回 蘅芜君兰言解疑癖　潇湘子雅谑补余音', '第四十三回 闲取乐偶攒金庆寿　不了情暂撮土为香', '第四十四回 变生不测凤姐泼醋　喜出望外平儿理妆', '第四十五回 金兰契互剖金兰语　风雨夕闷制风雨词', '第四十六回 尴尬人难免尴尬事　鸳鸯女誓绝鸳鸯偶', '第四十七回 呆霸王调情遭苦打　冷郎君惧祸走他乡', '第四十八回 滥情人情误思游艺 慕雅女雅集苦吟诗', '第四十九回 琉璃世界白雪红梅 脂粉香娃割腥啖膻', '第五十回 芦雪庭争联即景诗 暖香坞雅制春灯谜', '第五十一回 薛小妹新编怀古诗　胡庸医乱用虎狼药', '第五十二回 俏平儿情掩虾须镯 勇晴雯病补孔雀裘', '第五十三回 宁国府除夕祭宗祠　荣国府元宵开夜宴', '第五十四回 史太君破陈腐旧套　王熙凤效戏彩斑衣', '第五十五回 辱亲女愚妾争闲气　欺幼主刁奴蓄险心', '第五十六回 敏探春兴利除宿弊　贤宝钗小惠全大体', '第五十七回 慧紫鹃情辞试莽玉　慈姨妈爱语慰痴颦', '第五十八回 杏子阴假凤泣虚凰　茜纱窗真情揆痴理', '第五十九回 柳叶渚边嗔莺叱燕　绛芸轩里召将飞符', '第六十回 茉莉粉替去蔷薇硝　玫瑰露引出茯苓霜', '第六十一回 投鼠忌器宝王瞒赃　判冤决狱平儿行权', '第六十二回 憨湘云醉眠芍药裀　呆香菱情解石榴裙', '第六十三回 寿怡红群芳开夜宴　死金丹独艳理亲丧', '第六十四回 幽淑女悲题五美吟　浪荡子情遗九龙佩', '第六十五回 贾二舍偷娶尤二姨　尤三姐思嫁柳二郎', '第六十六回 情小妹耻情归地府　冷二郎一冷入空门', '第六十七回 见土仪颦卿思故里　闻秘事凤姐讯家童', '第六十八回 苦尤娘赚入大观园　酸凤姐大闹宁国府', '第六十九回 弄小巧用借剑杀人　觉大限吞生金自逝', '第七十回 林黛玉重建桃花社　史湘云偶填柳絮词', '第七十一回 嫌隙人有心生嫌隙　鸳鸯女无意遇鸳鸯', '第七十二回 王熙凤恃强羞说病　来旺妇倚势霸成亲', '第七十三回 痴丫头误拾绣春囊　懦小姐不问累金凤', '第七十四回 惑奸谗抄检大观园　避嫌隙杜绝宁国府', '第七十五回 开夜宴异兆发悲音　赏中秋新词得佳谶', '第七十六回 凸碧堂品笛感凄清　凹晶馆联诗悲寂寞', '第七十七回　俏丫鬟抱屈夭风流　美优伶斩情归水月', '第七十八回 老学士闲征姽婳词　痴公子杜撰芙蓉诔', '第七十九回 薛文起悔娶河东吼　贾迎春误嫁中山狼', '第八十回 美香菱屈受贪夫棒　王道士胡诌妒妇方', '第八十一回　占旺相四美钓游鱼　奉严词两番入家塾', '第八十二回 老学究讲义警顽心　病潇湘痴魂惊恶梦', '第八十三回 省宫闱贾元妃染恙　闹闺阃薛宝钗吞声', '第八十四回 试文字宝玉始提亲　探惊风贾环重结怨', '第八十五回 贾存周报升郎中任　薛文起复惹放流刑', '第八十六回 受私贿老官翻案牍　寄闲情淑女解琴书', '第八十七回 感秋声抚琴悲往事　坐禅寂走火入邪魔', '第八十八回 博庭欢宝玉赞孤儿　正家法贾珍鞭悍仆', '第八十九回 人亡物在公子填词　蛇影杯弓颦卿绝粒', '第九十回 失绵衣贫女耐嗷嘈　送果品小郎惊叵测', '第九十一回 纵淫心宝蟾工设计　布疑阵宝玉妄谈禅', '第九十二回 评女传巧姐慕贤良　玩母珠贾政参聚散', '第九十三回 甄家仆投靠贾家门　水月庵掀翻风月案', '第九十四回 宴海棠贾母赏花妖　失宝玉通灵知奇祸', '第九十五回 因讹成实元妃薨逝　以假混真宝玉疯癫', '第九十六回 瞒消息凤姐设奇谋　泄机关颦儿迷本性', '第九十七回 林黛玉焚稿断痴情　薛宝钗出闺成大礼', '第九十八回 苦绛珠魂归离恨天　病神瑛泪洒相思地', '第九十九回 守官箴恶奴同破例　阅邸报老舅自担惊', '第一百回 破好事香菱结深恨　悲远嫁宝玉感离情', '第一百一回 大观园月夜警幽魂　散花寺神签惊异兆', '第一百二回 宁国府骨肉病灾祲　大观园符水驱妖孽', '第一百三回 施毒计金桂自焚身　昧真禅雨村空遇旧', '第一百四回 醉金刚小鳅生大浪　痴公子余痛触前情', '第一百五回 锦衣军查抄宁国府　骢马使弹劾平安州', '第一百六回 王熙凤致祸抱羞惭　贾太君祷天消祸患', '第一百七回 散余资贾母明大义　复世职政老沐天恩', '第一百八回 强欢笑蘅芜庆生辰　死缠绵潇湘闻鬼哭', '第一百九回 候芳魂五儿承错爱　还孽债迎女返真元', '第一百十回 史太君寿终归地府　王凤姐力诎失人心', '第一百十一回 鸳鸯女殉主登太虚　狗彘奴欺天招伙盗', '第一百十二回 活冤孽妙姑遭大劫　死雠仇赵妾赴冥曹', '第一百十三回 忏宿冤凤姐托村妪　释旧憾情婢感痴郎', '第一百十四回 王熙凤历幻返金陵　甄应嘉蒙恩还玉阙', '第一百十五回 惑偏私惜春矢素志　证同类宝玉失相知', '第一百十六回 得通灵幻境悟仙缘　送慈柩故乡全孝道', '第一百十七回 阻超凡佳人双护玉　欣聚党恶子独承家', '第一百十八回 记微嫌舅兄欺弱女　惊谜语妻妾谏痴人', '第一百十九回 中乡魁宝玉却尘缘　沐皇恩贾家延世泽', '第一百二十回 甄士隐详说太虚情　贾雨村归结红楼梦'],
  2: ['第一回　宴桃园豪杰三结义　斩黄巾英雄首立功', '第二回　张翼德怒鞭督邮　何国舅谋诛宦竖', '第三回　议温明董卓叱丁原　馈金珠李肃说吕布', '第四回　废汉帝陈留践位　谋董贼孟德献刀', '第五回　发矫诏诸镇应曹公　破关兵三英战吕布', '第六回　焚金阙董卓行凶　匿玉玺孙坚背约', '第七回　袁绍磐河战公孙　孙坚跨江击刘表', '第八回　王司徒巧使连环计　董太师大闹凤仪亭', '第九回　除暴凶吕布助司徒　犯长安李傕听贾诩', '第十回　勤王室马腾举义　报父仇曹操兴师', '第十一回　刘皇叔北海救孔融　吕温侯濮阳破曹操', '第十二回　陶恭祖三让徐州　曹孟穗大战吕布', '第十三回　李傕郭汜大交兵　杨奉董承双救驾', '第十四回　曹孟德移驾幸许都　吕奉先乘夜袭徐郡', '第十五回　太史慈酣斗小霸王　孙伯符大战严白虎', '第十六回　吕奉先射戟辕门　曹孟德败师淯水', '第十七回　袁公路大起七军　曹孟德会合三将', '第十八回　贾文和料敌决胜　夏侯惇拨矢啖睛', '第十九回　下邳城曹操鏖兵　白门楼吕布殒命', '第二十回　曹阿瞒许田打围　董国舅内阁受诏', '第二十一回　曹操煮酒论英雄　关公赚城斩车胄', '第二十二回　袁曹各起马步三军　关张共擒王刘二将', '第二十三回　祢正平裸衣骂贼　吉太医下毒遭刑', '第二十四回　国贼行凶杀贵妃　皇叔败走投袁绍', '第二十五回　屯土山关公约三事　救白马曹操解重围', '第二十六回　袁本初败兵折将　关云长挂印封金', '第二十七回　美髯公千里走单骑　汉寿侯五关斩六将', '第二十八回　斩蔡阳兄弟释疑　会古城主臣聚义', '第二十九回　小霸王怒斩于吉　碧眼儿坐领江东', '第三十回　战官渡本初败绩　劫乌巢孟德烧粮', '第三十一回　曹操仓亭破本初　玄德荆州依刘表', '第三十二回　夺冀州袁尚争锋　决漳河许攸献计', '第三十三回　曹丕乘乱纳甄氏　郭嘉遗计定辽东', '第三十四回　蔡夫人隔屏听密语　刘皇叔跃马过檀溪', '第三十五回　玄德南漳逢隐沧　单福新野遇英主', '第三十六回　玄德用计袭樊城　元直走马荐诸葛', '第三十七回　司马徽再荐名士　刘玄德三顾草庐', '第三十八回　定三分隆中决策　战长江孙氏报仇', '第三十九回　荆州城公子三求计　博望坡军师初用兵', '第四十回　蔡夫人议献荆州　诸葛亮火烧新野', '第四十一回　刘玄德携民渡江　赵子龙单骑救主', '第四十二回　张翼德大闹长坂桥　刘豫州败走汉津口', '第四十三回　诸葛亮舌战群儒　鲁子敬力排众议', '第四十四回　孔明用智激周瑜　孙权决计破曹操', '第四十五回　三江口曹操折兵　群英会蒋干中计', '第四十六回　用奇谋孔明借箭　献密计黄盖受刑', '第四十七回　阚泽密献诈降书　庞统巧授连环计', '第四十八回　宴长江曹操赋诗　锁战船北军用武', '第四十九回　七星坛诸葛祭风　三江口周瑜纵火', '第五十回　诸葛亮智算华容　关云长义释曹操', '第五十一回　曹仁大战东吴兵　孔明一气周公瑾', '第五十二回　诸葛亮智辞鲁肃　赵子龙计取桂阳', '第五十三回　关云长义释黄汉升　孙仲谋大战张文远', '第五十四回　吴国太佛寺看新郎　刘皇叔洞房续佳偶', '第五十五回　玄德智激孙夫人　孔明二气周公瑾', '第五十六回　曹操大宴铜雀台　孔明三气周公瑾', '第五十七回　柴桑口卧龙吊丧　耒阳县凤雏理事', '第五十八回　马孟起兴兵雪恨　曹阿瞒割须弃袍', '第五十九回　许诸裸衣斗马超　曹操抹书问韩遂', '第六十回　张永年反难杨修　庞士元议取西蜀', '第六十一回　赵云截江夺阿斗　孙权遗书退老瞒', '第六十二回　取涪关杨高授首　攻雒城黄魏争功', '第六十三回　诸葛亮痛哭庞统　张翼德义释严颜', '第六十四回　孔明定计捉张任　杨阜借兵破马超', '第六十五回　马超大战葭萌关　刘备自领益州牧', '第六十六回　关云长单刀赴会　伏皇后为国捐生', '第六十七回　曹操平定汉中地　张辽威震逍遥津', '第六十八回　甘宁百骑劫魏营　左慈掷杯戏曹操', '第六十九回　卜周易管辂知机　讨汉贼五臣死节', '第七十回　猛张飞智取瓦口隘　老黄忠计夺天荡山', '第七十一回　占对山黄忠逸待劳　据汉水赵云寡胜众', '第七十二回　诸葛亮智取汉中　曹阿瞒兵退斜谷', '第七十三回　玄德进位汉中王　云长攻拔襄阳郡', '第七十四回　庞令明抬榇决死战　关云长放水淹七军', '第七十五回　关云长刮骨疗毒　吕子明白衣渡江', '第七十六回　徐公明大战沔水　关云长败走麦城', '第七十七回　玉泉山关公显圣　洛阳城曹操感神', '第七十八回　治风疾神医身死　传遗命奸雄数终', '第七十九回　兄逼弟曹植赋诗　侄陷叔刘封伏法', '第八十回　曹丕废帝篡炎刘　汉王正位续大统', '第八十一回　急兄仇张飞遇害　雪弟恨先主兴兵', '第八十二回　孙权降魏受九锡　先主征吴赏六军', '第八十三回　战猇亭先主得仇人　守江口书生拜大将', '第八十四回　陆逊营烧七百里　孔明巧布八阵图', '第八十五回　刘先主遗诏托孤儿　诸葛亮安居平五路', '第八十六回　难张温秦宓逞天辩　破曹丕徐盛用火攻', '第八十七回　征南寇丞相大兴师　抗天兵蛮王初受执', '第八十八回　渡泸水再缚番王　识诈降三擒孟获', '第八十九回　武乡侯四番用计　南蛮王五次遭擒', '第九十回　驱巨善六破蛮兵　烧藤甲七擒孟获', '第九十一回　祭泸水汉相班师　伐中原武侯上表', '第九十二回　赵子龙力斩五将　诸葛亮智取三城', '第九十三回　姜伯约归降孔明　武乡侯骂死王朝', '第九十四回　诸葛亮乘雪破羌兵　司马懿克日擒孟达', '第九十五回　马谡拒谏失街亭　武侯弹琴退仲达', '第九十六回　孔明挥泪斩马谡　周鲂断发赚曹休', '第九十七回　讨魏国武侯再上表　破曹兵姜维诈献书', '第九十八回　追汉军王双受诛　袭陈仓武侯取胜', '第九十九回　诸葛亮大破魏兵　司马懿入寇西蜀', '第一百回　汉兵劫寨破曹真　武侯斗阵辱仲达', '第一百一回　出陇上诸葛妆神　奔剑阁张郃中计', '第一百二回　司马懿占北原渭桥　诸葛亮造木牛流马', '第一百三回　上方谷司马受困　五丈原诸葛禳星', '第一百四回　陨大星汉丞相归天　见木像魏都督丧胆', '第一百五回　武侯预伏锦囊计　魏主拆取承露盘', '第一百六回　公孙渊兵败死襄平　司马懿诈病赚曹爽', '第一百七回　魏主政归司马氏　姜维兵败牛头山', '第一百八回　丁奉雪中奋短兵　孙峻席间施密计', '第一百九回　困司马汉将奇谋　废曹芳魏家果报', '第一百十回　文鸯单骑退雄兵　姜维背水破大敌', '第一百十一回　邓士载智败姜伯约　诸葛诞义讨司马昭', '第一百十二回　救寿春于诠死节　取长城伯约鏖兵', '第一百十三回　丁奉定计斩孙綝　姜维斗阵破邓艾', '第一百十四回　曹髦驱车死南阙　姜维弃粮胜魏兵', '第一百十五回　诏班师后主信谗　托屯田姜维避祸', '第一百十六回　钟会分兵汉中道　武侯显圣定军山', '第一百十七回　邓士载偷度阴平　诸葛瞻战死绵竹', '第一百十八回　哭祖庙一王死孝　入西川二士争功', '第一百十九回　假投降巧计成虚话　再受禅依样画葫芦', '第一百二十回　荐杜预老将献新谋　降孙皓三分归一统'],
  3: ['第一回　灵根育孕源流出　心性修持大道生', '第二回　悟彻菩提真妙理　断魔归本合元神', '第三回　四海千山皆拱伏　九幽十类尽除名', '第四回　官封弼马心何足　名注齐天意未宁', '第五回　乱蟠桃大圣偷丹　反天宫诸神捉怪', '第六回　观音赴会问原因　小圣施威降大圣', '第七回　八卦炉中逃大圣　五行山下定心猿', '第八回　我佛造经传极乐　观音奉旨上长安', '第九回　袁守诚妙算无私曲　老龙王拙计犯天条', '第十回　二将军宫门镇鬼　唐太宗地府还魂', '第十一回　还受生唐王遵善果　度孤魂萧瑀正空门', '第十二回　玄奘秉诚建大会　观音显象化金蝉', '第十三回　陷虎穴金星解厄　双叉岭伯钦留僧', '第十四回　心猿归正　六贼无踪', '第十五回　蛇盘山诸神暗佑　鹰愁涧意马收缰', '第十六回　观音院僧谋宝贝　黑风山怪窃袈裟', '第十七回　孙行者大闹黑风山　观世音收伏熊罴怪', '第十八回　观音院唐僧脱难　高老庄行者降魔', '第十九回　云栈洞悟空收八戒　浮屠山玄奘受心经', '第二十回　黄风岭唐僧有难　半山中八戒争先', '第二十一回　护法设庄留大圣　须弥灵吉定风魔', '第二十二回　八戒大战流沙河　木叉奉法收悟净', '第二十三回　三藏不忘本　四圣试禅心', '第二十四回　万寿山大仙留故友　五庄观行者窃人参', '第二十五回　镇元仙赶捉取经僧　孙行者大闹五庄观', '第二十六回　孙悟空三岛求方　观世音甘泉活树', '第二十七回　尸魔三戏唐三藏　圣僧恨逐美猴王', '第二十八回　花果山群妖聚义　黑松林三藏逢魔', '第二十九回　脱难江流来国土　承恩八戒转山林', '第三十回　邪魔侵正法　意马忆心猿', '第三十一回　猪八戒义激猴王　孙行者智降妖怪', '第三十二回　平顶山功曹传信　莲花洞木母逢灾', '第三十三回　外道迷真性　元神助本心', '第三十四回　魔王巧算困心猿　大圣腾那骗宝贝', '第三十五回　外道施威欺正性　心猿获宝伏邪魔', '第三十六回　心猿正处诸缘伏　劈破旁门见月明', '第三十七回　鬼王夜谒唐三藏　悟空神化引婴儿', '第三十八回　婴儿问母知邪正　金木参玄见假真', '第三十九回　一粒金丹天上得　三年故主世间生', '第四十回　婴儿戏化禅心乱　猿马刀归木母空', '第四十一回　心猿遭火败　木母被魔擒', '第四十二回　大圣殷勤拜南海　观音慈善缚红孩', '第四十三回　黑河妖孽擒僧去　西洋龙子捉鼍回', '第四十四回　法身元运逢车力　心正妖邪度脊关', '第四十五回　三清观大圣留名　车迟国猴王显法', '第四十六回　外道弄强欺正法　心猿显圣灭诸邪', '第四十七回　圣僧夜阻通天水　金木垂慈救小童', '第四十八回　魔弄寒风飘大雪　僧思拜佛履层冰', '第四十九回　三藏有灾沉水宅　观音救难现鱼篮', '第五十回　情乱性从因爱欲　神昏心动遇魔头', '第五十一回　心猿空用千般计　水火无功难炼魔', '第五十二回　悟空大闹金山兜洞　如来暗示主人公', '第五十三回　禅主吞餐怀鬼孕　黄婆运水解邪胎', '第五十四回　法性西来逢女国　心猿定计脱烟花', '第五十五回　色邪淫戏唐三藏　性正修持不坏身', '第五十六回　神狂诛草寇　道昧放心猿', '第五十七回　真行者落伽山诉苦　假猴王水帘洞誊文', '第五十八回　二心搅乱大乾坤　一体难修真寂灭', '第五十九回　唐三藏路阻火焰山　孙行者一调芭蕉扇', '第六十回　牛魔王罢战赴华筵　孙行者二调芭蕉扇', '第六十一回　猪八戒助力败魔王　孙行者三调芭蕉扇', '第六十二回　涤垢洗心惟扫塔　缚魔归正乃修身', '第六十三回　二僧荡怪闹龙宫　群圣除邪获宝贝', '第六十四回　荆棘岭悟能努力　木仙庵三藏谈诗', '第六十五回　妖邪假设小雷音　四众皆遭大厄难', '第六十六回　诸神遭毒手　弥勒缚妖魔', '第六十七回　拯救驼罗禅性稳　脱离秽污道心清', '第六十八回　朱紫国唐僧论前世　孙行者施为三折肱', '第六十九回　心主夜间修药物　君王筵上论妖邪', '第七十回　妖魔宝放烟沙火　悟空计盗紫金铃', '第七十一回　行者假名降怪犼　观音现象伏妖王', '第七十二回　盘丝洞七情迷本　濯垢泉八戒忘形', '第七十三回　情因旧恨生灾毒　心主遭魔幸破光', '第七十四回　长庚传报魔头狠　行者施为变化能', '第七十五回　心猿钻透阴阳窍　魔王还归大道真', '第七十六回　心神居舍魔归性　木母同降怪体真', '第七十七回　群魔欺本性　一体拜真如', '第七十八回　比丘怜子遣阴神　金殿识魔谈道德', '第七十九回　寻洞擒妖逢老寿　当朝正主救婴儿', '第八十回　姹女育阳求配偶　心猿护主识妖邪', '第八十一回　镇海寺心猿知怪　黑松林三众寻师', '第八十二回　姹女求阳　元神护道', '第八十三回　心猿识得丹头　姹女还归本性', '第八十四回　难灭伽持圆大觉　法王成正体天然', '第八十五回　心猿妒木母　魔主计吞禅', '第八十六回　木母助威征怪物　金公施法灭妖邪', '第八十七回　凤仙郡冒天止雨　孙大圣劝善施霖', '第八十八回　禅到玉华施法会　心猿木母授门人', '第八十九回　黄狮精虚设钉钯宴　金木土计闹豹头山', '第九十回　师狮授受同归一　盗道缠禅静九灵', '第九十一回　金平府元夜观灯　玄英洞唐僧供状', '第九十二回　三僧大战青龙山　四星挟捉犀牛怪', '第九十三回　给孤园问古谈因　天竺国朝王遇偶', '第九十四回　四僧宴乐御花园　一怪空怀情欲喜', '第九十五回　假合真形擒玉兔　真阴归正会灵元', '第九十六回　寇员外喜待高僧　唐长老不贪富贵', '第九十七回　金酬外护遭魔毒　圣显幽魂救本原', '第九十八回　猿熟马驯方脱壳　功成行满见真如', '第九十九回　九九数完魔刬尽　三三行满道归根', '第一百回　径回东土　五圣成真', '附录　陈光蕊赴任逢灾　江流僧复仇报本'],
  4: ['楔子　张天师祈禳瘟疫　洪太尉误走妖魔', '第一回　王教头私走延安府　九纹龙大闹史家村', '第二回　史大郎夜走华阴县　鲁提辖拳打镇关西', '第三回　赵员外重修文殊院　鲁智深大闹五台山', '第四回　小霸王醉入销金帐　花和尚大闹桃花村', '第五回　九纹龙翦径赤松林　鲁智深火烧瓦官寺', '第六回　花和尚倒拔垂杨柳　豹子头误入白虎堂', '第七回　林教头刺配沧州道　鲁智深大闹野猪林', '第八回　柴进门招天下客　林冲棒打洪教头', '第九回　林教头风雪山神庙　陆虞候火烧草料场', '第十回　朱贵水亭施号箭　林冲雪夜上梁山', '第十一回　梁山泊林冲落草　汴京城杨志卖刀', '第十二回　青面兽北京斗武　急先锋东郭争功', '第十三回  赤发鬼醉卧灵官殿 晁天王认义东溪村', '第十四回  吴学究说三阮撞筹 公孙胜应七星聚义', '第十五回  杨志押送金银担 吴用智取生辰网', '第十六回  花和尚单打二龙山 青面兽双夺宝珠寺', '第十七回  美髯公智稳插翅虎 宋公明私放晁天王', '第十八回  林冲水寨大并火 晁盖梁山小夺泊', '第十九回  梁山泊义士尊晁盖 郓城县月夜走刘唐', '第二十回  虔婆醉打唐牛儿 宋江怒杀阎婆惜', '第二十一回  阎婆大闹郓城县 朱仝义释宋公明', '第二十二回  横海郡柴进留宾 景阳冈武松打虎', '第二十三回  王婆贪贿说风情 郓哥不忿闹茶肆', '第二十四回  王婆计啜西门庆 淫妇药鸩武大郎', '第二十五回  郓哥大闹授官厅 武松斗杀西门庆', '第二十六回  母夜叉孟州道卖人肉 武都头十字坡遇张青', '第二十七回  武松威镇安平寨 施恩义夺快活林', '第二十八回  施恩重霸孟州道 武松醉打蒋门神', '第二十九回  施恩三人死囚牢 武松大闹飞云浦', '第三十回  张都监血溅鸳鸯楼 武行者夜走蜈蚣岭', '第三十一回  武行者醉打孔亮 锦毛虎义释宋江', '第三十二回  宋江夜看小鳌山 花荣大闹清风寨', '第三十三回  镇三山大闹青州道 霹雳火夜走瓦砾场', '第三十四回　石将军村店寄书　小李广梁山射雁', '第三十五回　梁山泊吴用举戴宗　揭阳岭宋江逢李俊', '第三十六回　没遮拦追赶及时雨　船火儿夜闹浔阳江', '第三十七回　及时雨会神行太保　黑旋风展浪里白条', '第三十八回　浔阳楼宋江吟反诗　梁山泊戴宗传假信', '第三十九回　梁山泊好汉劫法场　白龙庙英雄小聚义', '第四十回　宋江智取无为军　张顺活捉黄文炳', '第四十一回　还道村受三卷天书　宋公明遇九天玄女', '第四十二回　假李逵剪径劫单身　黑旋风沂岭杀四虎', '第四十三回　锦豹子小径逢戴宗　病关索长街遇石秀', '第四十四回　杨雄醉骂潘巧云　石秀智杀裴如海', '第四十五回　病关索大翠屏山　拚命三火烧祝家店', '第四十六回　扑天雕两修生死书　宋公明一打祝家庄', '第四十七回　一丈青单捉王矮虎　宋公明二打祝家庄', '第四十八回　解珍解宝双越狱　孙立孙新大劫牢', '第四十九回　吴学究双掌连环计　宋公明三打祝家庄', '第五十回 插翅虎枷打白秀英 美髯公误失小衙内', '第五十一回 李逵打死殷天赐 柴进失陷高唐州', '第五十二回 戴宗二取公孙胜 李逵独劈罗真人', '第五十三回 入云龙斗法破高廉 黑旋风下井救柴进', '第五十四回 高太尉大兴三路兵 呼延灼摆布连环马', '第五十五回 吴用使时迁偷甲 汤隆赚徐宁上山', '第五十六回 徐宁教使钩镰枪 宋江大破连环马', '第五十七回 三山聚义打青州 众虎同心归水泊', '第五十八回 吴用赚金铃吊挂 宋江闹西岳华山', '第五十九回 公孙胜芒砀山降魔 晁天王曾头市中箭', '第六十回 吴用智赚玉麒麟 张顺夜闹金沙渡', '第六十一回 放冷箭燕青救主 劫法场石秀跳楼', '第六十二回　宋江兵打大名城　关胜议取梁山泊', '第六十三回 呼延灼月夜赚关胜 宋公明雪天擒索超', '第六十四回 托塔天王梦中显圣 浪里白条水上报冤', '第六十五回 时迁火烧翠云楼 吴用智取大名府', '第六十六回 宋江赏步三军 关胜降水火二将', '第六十七回　宋公明夜打曾头市　卢俊义活捉史文恭', '第六十八回　东平府误陷九纹龙　宋公明义释双枪将', '第六十九回　没羽箭飞石打英雄 宋公明弃粮擒壮士', '第七十回　忠义堂石碣受天文　梁山泊英雄惊恶梦', '第七十一回　梁山泊英雄排座次　宋公明慷慨话宿愿', '第七十二回　柴进簪花入禁院　李逵元夜闹东京', '第七十三回　黑旋风乔捉鬼　梁山泊双献头', '第七十四回　燕青智扑擎天柱　李逵寿张乔坐衙', '第七十五回　活阎罗倒船偷御酒　黑旋风扯诏骂钦差', '第七十六回　吴加亮布四斗五方旗　宋公明排九宫八卦阵', '第七十七回　梁山泊十面埋伏　宋公明两赢童贯', '第七十八回　十节度议取梁山泊　宋公明一败高太尉', '第七十九回　刘唐放火烧战船　宋江两败高太尉', '第八十回　张顺凿漏海鳅船　宋江三败高太尉', '第八十一回　燕青月夜遇道君　戴宗定计出乐和', '第八十二回　梁山泊分金大买市　宋公明全夥受招安', '第八十三回　宋公明奉诏破大辽　陈桥驿滴泪斩小卒', '第八十四回　宋公明兵打蓟州城　卢俊义大战玉田县', '第八十五回　宋公明夜度益津关　吴学究智取文安县', '第八十六回　宋公明大战独鹿山　卢俊义兵陷青石峪', '第八十七回　宋公明大战幽州　呼延灼力擒番将', '第八十八回　颜统军阵列混天象　宋公明梦授玄女法', '第八十九回　宋公明破阵成功　宿太尉颁恩降诏', '第九十回　五台山宋江参禅　双林镇燕青遇故', '第九十一回　宋公明兵渡黄河　卢俊义赚城黑夜', '第九十二回　振军威小李广神箭　打盖郡智多星密筹', '第九十三回　李逵梦闹天池　宋江兵分两路', '第九十四回　关胜义降三将　李逵莽陷众人', '第九十五回　宋公明忠感后土　乔道清术败宋兵', '第九十六回　幻魔君术窘五龙山　入云龙兵围百谷岭', '第九十七回　陈　谏官升安抚　琼英处女做先锋', '第九十八回　张清缘配琼英　吴用计鸩邬梨', '第九十九回　花和尚解脱缘缠井　混江龙水灌太原城', '第一百回　张清琼英双建功　陈瓘宋江同奏捷', '第一百零一回　谋坟地阴险产逆　蹈春阳妖艳生奸', '第一百零二回　王庆因奸　官司　龚端被打师军犯', '第一百零三回　张管营因妾弟丧身　范节级为表兄医脸', '第一百零四回　段家庄重招新女婿　房山寨双并旧强人', '第一百零五回　宋公明避暑疗军兵　乔道清回风烧贼寇', '第一百零六回　书生谈笑却强敌　水军汨没破坚城', '第一百零七回　宋江大胜纪山军　朱武打破六花阵', '第一百零八回　乔道清兴雾取城　小旋风藏炮击贼', '第一百零九回　王庆渡江被捉　宋江剿寇成功', '第一百一十回　燕青秋林渡射雁　宋江东京城献俘', '第一百一十一回　张顺夜伏金山寺　宋江智取润州城', '第一百一十二回　卢俊义分兵宣州道　宋公明大战毗陵郡', '第一百一十三回　混江龙太湖小结义　宋公明苏州大会垓', '第一百一十四回　宁海军宋江吊孝　涌金门张顺归神', '第一百一十五回　张顺魂捉方天定　宋江智取宁海军', '第一百一十六回　卢俊义分兵歙州道　宋公明大战乌龙岭', '第一百一十七回　睦州城箭射邓元觉　乌龙岭神助宋公明', '第一百一十八回　卢俊义大战昱岭关　宋公明智取清溪洞', '第一百一十九回　鲁智深浙江坐化　宋公明衣锦还乡', '第一百二十回 宋公明神聚蓼儿　徽宗帝梦游梁山泊'],
  5: ['金瓶梅序', '第一回 西门庆热结十弟兄 武二郎冷遇亲哥嫂', '第二回 俏潘娘帘下勾情 老王婆茶坊说技', '第三回 定挨光王婆受贿 设圈套浪子私挑', '第四回 赴巫山潘氏幽欢 闹茶坊郓哥义愤', '第五回 捉奸情郓哥定计 饮鸩药武大遭殃', '第六回 何九受贿瞒天 王婆帮闲遇雨', '第七回 薛媒婆说娶孟三儿 杨姑娘气骂张四舅', '第八回 盼情郎佳人占鬼卦 烧夫灵和尚听淫声', '第九回 西门庆偷娶潘金莲 武都头误打李皂隶', '第十回 义士充配孟州道 妻妾玩赏芙蓉亭', '第十一回 潘金莲激打孙雪娥 西门庆梳笼李桂姐', '第十二回 潘金莲私仆受辱 刘理星魇胜求财', '第十三回 李瓶姐墙头密约 迎春儿隙底私窥', '第十四回 花子虚因气丧身 李瓶儿迎奸赴会', '第十五回 佳人笑赏玩灯楼 狎客帮嫖丽春院', '第十六回 西门庆择吉佳期 应伯爵追欢喜庆', '第十七回 宇给事劾倒杨提督 李瓶儿许嫁蒋竹山', '第十八回 赂相府西门脱祸 见娇娘敬济销魂', '第十九回 草里蛇逻打蒋竹山 李瓶儿情感西门庆', '第二十回 傻帮闲趋奉闹华筵 痴子弟争锋毁花院', '第二十一回 吴月娘扫雪烹茶 应伯爵替花邀酒', '第二十二回 蕙莲儿偷期蒙爱 春梅姐正色闲邪', '第二十三回 赌棋枰瓶儿输钞 觑藏春潘氏潜踪', '第二十四回 敬济元夜戏娇姿 惠祥怒詈来旺妇', '第二十五回 吴月娘春昼秋千 来旺儿醉中谤仙', '第二十六回 来旺儿递解徐州 宋蕙莲含羞自缢', '第二十七回 李瓶儿私语翡翠轩 潘金莲醉闹葡萄架', '第二十八回 陈敬济徼幸得金 莲西门庆糊涂打铁棍', '第二十九回 吴神仙冰鉴定终身 潘金莲兰汤邀午战', '第三十回 蔡太师擅恩锡爵 西门庆生子加官', '第三十一回 琴童儿藏壶构衅 西门庆开宴为欢', '第三十二回 李桂姐趋炎认女 潘金莲怀妒惊儿', '第三十三回 陈敬济失钥 罚唱韩道国纵妇争锋', '第三十四回 献芳樽内室乞恩 受私贿后庭说事', '第三十五回 西门庆为男宠报仇 书童儿作女妆媚客', '第三十六回 翟管家寄书寻女子 蔡状元留饮借盘缠', '第三十七回 冯妈妈说嫁韩爱姐 西门庆包占王六儿', '第三十八回 王六儿棒槌打捣鬼 潘金莲雪夜弄琵琶', '第三十九回 寄法名官哥穿道服 散生日敬济拜冤家', '第四十回 抱孩童瓶儿希宠 妆丫鬟金莲市爱', '第四十一回 两孩儿联姻共笑嬉 二佳人愤深同气苦', '第四十二回 逞豪华门前放烟火 赏元宵楼上醉花灯', '第四十三回 争宠爱金莲惹气 卖富贵吴月攀亲', '第四十四回 避马房侍女偷金 下象棋佳人消夜', '第四十五回 应伯爵劝当铜锣 李瓶儿解衣银姐', '第四十六回 元夜游行遇雪雨 妻妾戏笑卜龟儿', '第四十七回 苗青贪财害主 西门枉法受赃', '第四十八回 弄私情戏赠一枝桃 走捷径探归七件事', '第四十九回 请巡按屈体求荣 遇胡僧现身施药', '第五十回 琴童潜听燕莺欢 玳安嬉游蝴蝶巷', '第五十一回 打猫儿金莲品玉 斗叶子敬济输金', '第五十二回 应伯爵山洞戏春娇 潘金莲花园调爱婿', '第五十三回 潘金莲惊散幽欢 吴月娘拜求子息', '第五十四回 应伯爵隔花戏金钏 任医官垂帐诊瓶儿', '第五十五回 西门庆两番庆寿旦 苗员外一诺送歌童', '第五十六回 西门庆捐金助朋友 常峙节得钞傲妻儿', '第五十七回 开缘簿千金喜舍 戏雕栏一笑回嗔', '第五十八回　潘金莲打狗伤人　孟玉楼周贫磨镜', '第五十九回　西门庆露阳惊爱月　李瓶儿睹物哭官哥', '第六十回 李瓶儿病缠死孽 西门庆官作生涯', '第六十一回 西门庆乘醉烧阴户 李瓶儿带病宴重阳', '第六十二回 潘道士法遣黄巾士 西门庆大哭李瓶儿', '第六十三回 韩画士传真作遗爱 西门庆观戏动深悲', '第六十四回 玉箫跪受三章约 书童私挂一帆风', '第六十五回 愿同穴一时丧礼盛 守孤灵半夜口脂香', '第六十六回 翟管家寄书致赙 黄真人发牒荐亡', '第六十七回 西门庆书房赏雪 李瓶儿梦诉幽情', '第六十八回 应伯爵戏衔玉臂 玳安儿密访蜂媒', '第六十九回 招宣府初调林太太 丽春院惊走王三官', '第七十回 老太监引酌朝房 二提刑庭参太尉', '第七十一回 李瓶儿何家托梦 提刑官引奏朝仪', '第七十二回 潘金莲抠打如意儿 王三官义拜西门庆', '第七十三回 潘金莲不愤忆吹箫 西门庆新试白绫带', '第七十四回 潘金莲香腮偎玉 薛姑子佛口谈经', '第七十五回 因抱恙玉姐含酸 为护短金莲泼醋', '第七十六回 春梅娇撒西门庆 画童哭躲温葵轩', '第七十七回 西门庆踏雪访爱月 贲四嫂带水战情郎', '第七十八回 林太太鸳帏再战 如意儿茎露独尝', '第七十九回 西门庆贪欲丧命 吴月娘失偶生儿', '第八十回 潘金莲售色赴东床 李娇儿盗财归丽院', '第八十一回 韩道国拐财远遁 汤来保欺主背恩', '第八十二回 陈敬济弄一得双 潘金莲热心冷面', '第八十三回 秋菊含恨泄幽情 春梅寄柬谐佳会', '第八十四回 吴月娘大闹碧霞宫 曾静师化缘雪涧洞', '第八十五回 吴月娘识破奸情 春梅姐不垂别泪', '第八十六回 雪娥唆打陈敬济 金莲解渴王潮儿', '第八十七回 王婆子贪财忘祸 武都头杀嫂祭兄', '第八十八回 陈敬济感旧祭金莲 庞大姐埋尸托张胜', '第八十九回 清明节寡妇上新坟 永福寺夫人逢故主', '第九十回 来旺偷拐孙雪娥 雪娥受辱守备府', '第九十一回 孟玉楼爱嫁李衙内 李衙内怒打玉簪儿', '第九十二回 陈敬济被陷严州府 吴月娘大闹授官厅', '第九十三回 王杏庵义恤贫儿 金道士娈淫少弟', '第九十四回 大酒楼刘二撒泼 洒家店雪娥为娼', '第九十五回 玳安儿窃玉成婚 吴典恩负心被辱', '第九十六回 春梅姐游旧家池馆 杨光彦作当面豺狼', '第九十七回 假弟妹暗续鸾胶 真夫妇明谐花烛', '第九十八回 陈敬济临清逢旧识 韩爱姐翠馆遇情郎', '第九十九回 刘二醉骂王六儿 张胜窃听张敬济', '第一百回 韩爱姐路遇二捣鬼 普静师幻度孝哥儿']
};
exports.contentsData = contentsData;

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
/*!*************************************************!*\
  !*** ./src/pages/contents/index.ux?uxType=page ***!
  \*************************************************/
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../components/contents/contents-list.ux?uxType=comp&name=contents-list */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/contents/contents-list.ux?uxType=comp&name=contents-list")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/contents/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/contents/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=contents-list */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/contents/index.ux?uxType=page&importNames[]=contents-list")

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
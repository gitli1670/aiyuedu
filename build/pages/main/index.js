(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/main/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/pages/main/index.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.device"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.shortcut"));

var _system5 = _interopRequireDefault($app_require$("@app-module/system.storage"));

var _bookList = __webpack_require__(/*! ../../assets/data/book-list.js */ "./src/assets/data/book-list.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  private: {
    selectedTab: 1,
    defaultShelfList: _bookList.bookListData.slice(0, 2),
    shelfList: [],
    oldKeywordList: [],
    showTaskTab: true,
    hotList: [],
    conts: []
  },

  onInit() {
    $utils.getStorage('bookshelf').then(value => {
      if (!value) {
        this.shelfList = this.defaultShelfList;
        $utils.setShelfList(this.shelfList, true);
      } else {
        this.shelfList = JSON.parse(value);
        $utils.setShelfList(this.shelfList);
      }
    });
    const than = this;

    _system5.default.get({
      key: 'oldkeys',
      success: function (data) {
        if (data.length == 0) {} else {
          const datalist = JSON.parse(data);
          than.oldKeywordList = datalist;
        }
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`);
      }
    });

    this.initTaskTab();
  },

  changeTab(e) {
    let index = e.index === undefined ? 1 : e.index;
    this.selectedTab = index;

    if (this.selectedTab == 4) {
      _system.default.push({
        uri: "/quicktask/index"
      });

      this.selectedTab = 1;
    }
  },

  onTabSelectChanged(index) {
    console.log(index, 789);

    if (index == 0) {
      const than = this;

      _system5.default.get({
        key: 'oldkeys',
        success: function (data) {
          if (data.length == 0) {} else {
            const datalist = JSON.parse(data);
            than.oldKeywordList = datalist;
          }
        },
        fail: function (data, code) {
          console.log(`handling fail, code = ${code}`);
        }
      });
    }

    if (index == 2) {
      _system3.default.fetch({
        url: 'http://xs.public.fbkjapp.com/books/category-list/',
        method: 'GET'
      }).then(res => {
        const library = JSON.parse(res.data.data);
        this.hotList = library.data.items;
      }).catch(error => {
        console.log(`Something Error: ${error}`);
      });

      this.conts = this.hotList.filter(item => item.channelId == text);
      this.page = 1;
    }

    if (index == 4) {
      _system.default.push({
        uri: "/quicktask/index"
      });

      this.selectedTab = 2;
    } else if (index == 2) {
      this.selectedTab = 2;
    }
  },

  updateShelf(param) {
    this.shelfList = param.detail.shelfList;
    $utils.setShelfList(this.shelfList, true);
  },

  initTaskTab() {
    _system2.default.getInfo({
      success: ret => {
        let providerid = 3;

        if (ret.brand == "vivo") {
          providerid = 3;
        } else if (ret.brand == "OPPO") {
          providerid = 4;
        } else if (ret.brand == "HUAWEI") {
          providerid = 5;
        } else if (ret.brand == "xiaomi") {
          providerid = 7;
        }

        _system3.default.fetch({
          url: "http://api.idphoto.manager.fbkjapp.com/photo/adswitch/adSwitch?appid=27&providerid=" + providerid + "&placementid=" + 10044,
          responseType: 'json',
          method: "POST",
          success: response => {
            if (response.data.data) {
              this.showTaskTab = true;
            } else {
              this.showTaskTab = false;
            }
          },
          fail: function (data, code) {
            console.log(` fail, errMsg = ${data}, errCode = ${code}`);
            this.showTaskTab = false;
          }
        });
      }
    });
  },

  onExit() {
    this.$app.exit();
  },

  onShow() {
    $umeng_stat.resume(this);
  },

  onHide() {
    $umeng_stat.pause(this);
  }

};
exports.default = _default;
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('??????VM??????????????????data?????????"' + accessors.join(',') + '"????????????????????????private??????data??????');
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
      console.warn('??????VM??????????????????' + acc + '???????????????????????????????????????');
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/bookshelf/index.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/components/bookshelf/index.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: ['shelflist'],
  data: {
    img: '/assets/images/pic_1.jpg',
    editStatus: false,
    deleteList: [],
    shelflist: [],
    chapterId: 1
  },

  onInit() {
    this.init();
  },

  onShow() {
    this.init();
    $umeng_stat.resume(this);
  },

  onHide() {
    this.init();
    $umeng_stat.pause(this);
  },

  init() {},

  clickImg(item) {
    if (!this.editStatus) {
      this.gotoBookContent(item);
    } else {
      this.deleteBook(item);
    }
  },

  loadOldKeyword(item) {
    _system.default.get({
      key: 'oldkeys',
      success: res => {
        if (res.length == 0) {
          var oldkeys = [item];

          _system.default.set({
            key: 'oldkeys',
            value: JSON.stringify(oldkeys)
          });
        } else {
          var oldkeys = JSON.parse(res);
          var findIndex = oldkeys.indexOf(item);

          if (findIndex === -1) {
            oldkeys.unshift(item);
          } else {
            oldkeys.splice(findIndex, 1);
            oldkeys.unshift(item);
          }

          _system.default.set({
            key: 'oldkeys',
            value: JSON.stringify(oldkeys)
          });
        }
      },
      fail: e => {
        var oldkeys = [item];

        _system.default.set({
          key: 'oldkeys',
          value: JSON.stringify(oldkeys)
        });
      }
    });
  },

  gotoBookContent(item) {
    const than = this;

    _system.default.get({
      key: item.bookId,
      success: function (data) {
        if (data) {
          const datalist = JSON.parse(data);

          if (datalist.chapterId) {
            than.chapterId = datalist;
          }
        } else {
          than.chapterId = {
            bookId: item.bookId,
            chapterId: 'on',
            chapterOrder: 1,
            chapterTitle: item.chapterTitle
          };
        }

        $utils.route2theUrl('pages/book-content', {
          bookId: item.bookId,
          bookTitle: item.bookName,
          chapterId: than.chapterId,
          total: item.count
        });
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`);
      }
    });
  },

  deleteBook(item) {
    this.deleteList.push(item.id);
  },

  switchToEdit() {
    this.editStatus = true;
  },

  finishEdit() {
    let shelfList = this.shelflist.filter(book => {
      return this.deleteList.indexOf(book.id) === -1;
    });

    _system.default.get({
      key: 'oldkeys',
      success: res => {
        var oldkeys = shelfList;

        _system.default.set({
          key: 'oldkeys',
          value: JSON.stringify(oldkeys)
        });
      },
      fail: e => {
        var oldkeys = shelfList;

        _system.default.set({
          key: 'oldkeys',
          value: JSON.stringify(oldkeys)
        });
      }
    });

    this.$emit('updateShelf', {
      shelfList
    });
    this.editStatus = false;
    this.deleteList = [];
    this.shelflist = shelfList;
  },

  cancelEdit() {
    this.editStatus = false;
    this.deleteList = [];
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/library/book-list.ux?uxType=comp":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/components/library/book-list.ux?uxType=comp ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: {
    list: {},
    showLoad: {
      default: true
    },
    title: {
      default: '????????????'
    },
    rankList: {
      default: []
    },
    wang: 0
  },

  onShow() {},

  goToDetail(item) {
    _system.default.get({
      key: 'oldkeys',
      success: res => {
        if (res.length == 0) {
          var oldkeys = [item];

          _system.default.set({
            key: 'oldkeys',
            value: JSON.stringify(oldkeys)
          });
        } else {
          var oldkeys = JSON.parse(res);
          var arr = [];

          for (var i = 0; i < oldkeys.length; i++) {
            var obj = {};
            obj = oldkeys[i].bookName;
            arr.push(obj);
          }

          var findIndex = arr.indexOf(item.bookName);

          if (findIndex === -1) {
            oldkeys.unshift(item);

            _system.default.set({
              key: 'oldkeys',
              value: JSON.stringify(oldkeys)
            });
          } else {
            oldkeys.splice(findIndex, 1);
            oldkeys.unshift(item);
          }
        }
      },
      fail: e => {
        var oldkeys = [item];

        _system.default.set({
          key: 'oldkeys',
          value: JSON.stringify(oldkeys)
        });
      }
    });

    $utils.route2theUrl('pages/contents', {
      bookId: item.bookId,
      bookTitle: item.bookName
    });
  },

  loadMore() {
    this.$emit('loadMore');
  },

  renderMoreListItem() {}

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/library/fenlei.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/components/library/fenlei.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: {
    list: {},
    showLoad: {
      default: true
    },
    title: {
      default: '????????????'
    },
    rankList: {
      default: []
    },
    wang: 0
  },

  onShow() {},

  goToDetail(item) {
    _system.default.get({
      key: 'oldkeys',
      success: res => {
        if (res.length == 0) {
          var oldkeys = [item];

          _system.default.set({
            key: 'oldkeys',
            value: JSON.stringify(oldkeys)
          });
        } else {
          var oldkeys = JSON.parse(res);
          var arr = [];

          for (var i = 0; i < oldkeys.length; i++) {
            var obj = {};
            obj = oldkeys[i].bookName;
            arr.push(obj);
          }

          var findIndex = arr.indexOf(item.bookName);

          if (findIndex === -1) {
            oldkeys.unshift(item);

            _system.default.set({
              key: 'oldkeys',
              value: JSON.stringify(oldkeys)
            });
          } else {
            oldkeys.splice(findIndex, 1);
            oldkeys.unshift(item);
          }
        }
      },
      fail: e => {
        var oldkeys = [item];

        _system.default.set({
          key: 'oldkeys',
          value: JSON.stringify(oldkeys)
        });
      }
    });

    $utils.route2theUrl('pages/contents', {
      bookId: item.bookId,
      bookTitle: item.bookName
    });
  },

  loadMore() {
    this.$emit('loadMore');
  },

  renderMoreListItem() {}

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/library/index.ux?uxType=comp":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/components/library/index.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bookList = __webpack_require__(/*! ../../assets/data/book-list.js */ "./src/assets/data/book-list.js");

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let memList = [];
var _default = {
  props: [],
  data: {
    library: {
      list: [],
      pageNo: 1,
      pageSize: 5,
      total: null,
      load: true
    },
    swiperList: _bookList.bookListData,
    rankList: _bookList.bookListData,
    size: 10,
    hasMoreData: true,
    current: 1
  },

  onInit() {
    this.listBook();
    this.queryLibraryList(1);
  },

  queryLibraryList(pageNo) {
    if (!isNaN(pageNo) && pageNo !== this.library.pageNo) {
      return;
    }

    if (this.library.total && (this.library.pageNo - 1) * this.library.pageSize >= this.library.total) {
      this.library.load = false;
      return;
    }

    this.queryFn();
  },

  queryFn() {
    this.library.total = 5;
    let total = this.library.pageNo * this.library.pageSize;
    let end = this.library.total < total ? this.library.total : total;
    let start = total - this.library.pageSize;

    let concatList = _bookList.bookListData.slice(start, end);
  },

  listBook() {
    this.hasMoreData = true;
    setTimeout(() => {
      this.hasMoreData = false;
    }, 1000);

    _system.default.fetch({
      url: 'http://xs.public.fbkjapp.com/books/book-info/',
      method: 'GET',
      data: {
        current: this.current,
        limit: 20
      }
    }).then(res => {
      const library = JSON.parse(res.data.data);
      memList = memList.concat(library.data.items);
      const list = memList.splice(0, this.size);
      this.library.list = this.library.list.concat(list);
      console.log(this.library.list);
    }).catch(error => {
      console.log(`Something Error: ${error}`);
    });
  },

  loadAndRender(doRender = true) {
    this.isLoadingData = true;

    if (this.library.list) {
      this.isLoadingData = false;

      if (!this.library.list) {
        console.error(`??????????????????`);
      } else if (!this.library.list.length) {
        this.hasMoreData = false;
      } else {
        memList = memList.concat(this.library.list);

        if (doRender) {
          this._renderList();
        }
      }
    }
  },

  _renderList() {
    if (memList.length > 0) {
      const list = memList.splice(0, this.size);
      this.library.list = this.library.list.concat(list);
    }

    if (memList.length <= this.size) {
      this.current = this.current + 1;

      _system.default.fetch({
        url: 'http://xs.public.fbkjapp.com/books/book-info/',
        method: 'GET',
        data: {
          current: this.current,
          limit: 20
        }
      }).then(res => {
        const library = JSON.parse(res.data.data);
        memList = memList.concat(library.data.items);
        const list = memList.splice(0, this.size);
        this.library.list = this.library.list.concat(list);
      }).catch(error => {
        console.log(`Something Error: ${error}`);
      });
    }
  },

  goToDetail(item) {
    $utils.route2theUrl('pages/contents', {
      bookId: this.bookInfo.id,
      bookTitle: this.bookInfo.title
    });
  },

  renderMoreListItem() {
    if (!this.isLoadingData) {
      _system2.default.showToast({
        message: '????????????'
      });

      setTimeout(() => {
        this._renderList();

        _system2.default.showToast({
          message: '????????????'
        });
      }, 2000);
    }
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/search-book/index.ux?uxType=comp":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/components/search-book/index.ux?uxType=comp ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bookList = __webpack_require__(/*! ../../assets/data/book-list.js */ "./src/assets/data/book-list.js");

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.device"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let memList = [];
var _default = {
  props: [],
  data: {
    hotList: [],
    conts: [],
    page: 1,
    library: {
      list: [],
      pageNo: 1,
      pageSize: 5,
      total: null,
      load: true
    },
    swiperList: _bookList.bookListData,
    rankList: _bookList.bookListData,
    size: 10,
    hasMoreData: true,
    current: 1
  },

  onInit() {
    this.toSearch(1);
    this.listBook();
    this.queryLibraryList(1);
  },

  onShow() {
    this.toSearch(1);
  },

  onReady() {
    this.toSearch(1);
  },

  queryLibraryList(pageNo) {
    if (!isNaN(pageNo) && pageNo !== this.library.pageNo) {
      return;
    }

    if (this.library.total && (this.library.pageNo - 1) * this.library.pageSize >= this.library.total) {
      this.library.load = false;
      return;
    }

    this.queryFn();
  },

  queryFn() {
    this.library.total = 5;
    let total = this.library.pageNo * this.library.pageSize;
    let end = this.library.total < total ? this.library.total : total;
    let start = total - this.library.pageSize;

    let concatList = _bookList.bookListData.slice(start, end);
  },

  listBook() {
    this.hasMoreData = true;
    setTimeout(() => {
      this.hasMoreData = false;
    }, 1000);

    _system3.default.fetch({
      url: 'http://xs.public.fbkjapp.com/books/book-info/',
      method: 'GET',
      data: {
        current: this.current,
        limit: 20
      }
    }).then(res => {
      const library = JSON.parse(res.data.data);
      memList = memList.concat(library.data.items);
      const list = memList.splice(0, this.size);
      this.library.list = this.library.list.concat(list);
      this.library.list = this.library.list.filter(item => item.channelId == this.page);
      console.log(this.library.list);
    }).catch(error => {
      console.log(`Something Error: ${error}`);
    });
  },

  loadAndRender(doRender = true) {
    this.isLoadingData = true;

    if (this.library.list) {
      this.isLoadingData = false;

      if (!this.library.list) {
        console.error(`??????????????????`);
      } else if (!this.library.list.length) {
        this.hasMoreData = false;
      } else {
        memList = memList.concat(this.library.list);

        if (doRender) {
          this._renderList();
        }
      }
    }
  },

  _renderList() {
    if (memList.length > 0) {
      const list = memList.splice(0, this.size);
      this.library.list = this.library.list.concat(list);
    }

    if (memList.length <= this.size) {
      this.current = this.current + 1;
      $fetch.fetch({
        url: 'http://xs.public.fbkjapp.com/books/book-info/',
        method: 'GET',
        data: {
          current: this.current,
          limit: 20
        }
      }).then(res => {
        const library = JSON.parse(res.data.data);
        memList = memList.concat(library.data.items);
        const list = memList.splice(0, this.size);
        this.library.list = this.library.list.concat(list);
        this.library.list = this.library.list.filter(item => item.channelId == this.page);
      }).catch(error => {
        console.log(`Something Error: ${error}`);
      });
    }
  },

  goToDetail(item) {
    $utils.route2theUrl('pages/contents', {
      bookId: this.bookInfo.id,
      bookTitle: this.bookInfo.title
    });
  },

  renderMoreListItem() {
    if (!this.isLoadingData) {
      prompt.showToast({
        message: '????????????'
      });
      setTimeout(() => {
        this._renderList();

        prompt.showToast({
          message: '????????????'
        });
      }, 2000);
    }
  },

  changeTab(e) {
    let index = e.index || 0;
    this.selectedTab = this.tabList[index];
  },

  search(info) {
    let searchText = info;
    this.listBook(searchText);
    console.log(searchText);
  },

  toSearch(text) {
    _system3.default.fetch({
      url: 'http://xs.public.fbkjapp.com/books/category-list/',
      method: 'GET'
    }).then(res => {
      const library = JSON.parse(res.data.data);
      this.hotList = library.data.items;
    }).catch(error => {
      console.log(`Something Error: ${error}`);
    });

    if (text === 1) {
      this.page = 1;
      this.listBook();
    } else if (text === 2) {
      this.page = 2;
      this.listBook();
    }
  },

  refreshHostList() {
    console.log(_bookList.bookListData, 789);

    if (this.page === 1) {
      this.hotList = _bookList.bookListData;
      this.page = 2;
    } else if (this.page === 2) {
      this.hotList = _bookList.bookListData;
      this.page = 1;
    }
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/search-book/search-input-bar.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/components/search-book/search-input-bar.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    initValue: {
      default: ''
    }
  },
  data: {
    searchText: ''
  },

  onReady() {
    this.searchText = this.initValue;
  },

  change(e) {
    this.searchText = e.value;
  },

  search() {
    if (!this.searchText) {
      $utils.showToast('??????????????????');
      return;
    }

    this.$emit('search', this.searchText);
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/about/index.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/quicktask/about/index.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = __webpack_require__(/*! ../../config */ "./src/config/index.js");

var _default = {
  data: {
    userAgreement: _config.userAgreement,
    privacyPolicy: _config.privacyPolicy
  },

  onInit() {},

  onShow() {
    $umeng_stat.resume(this);
  },

  onHide() {
    $umeng_stat.pause(this);
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/about/index.ux?uxType=comp":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/quicktask/about/index.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".wrapper a": {
    "height": "120px",
    "paddingLeft": "80px",
    "fontSize": "50px",
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "a"
        }
      ]
    }
  }
}

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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/bookshelf/index.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/components/bookshelf/index.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "@FONT-FACE": {
    "font1": {
      "fontFamily": "font1",
      "src": [
        "/assets/fonts/????????????W02.ttf"
      ],
      "fontName": "font1",
      "fontSrc": [
        "/assets/fonts/????????????W02.ttf"
      ]
    },
    "font2": {
      "fontFamily": "font2",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font2",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
      ]
    },
    "font3": {
      "fontFamily": "font3",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font3",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
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
    "fontSize": "32px",
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
  ".text-cancel": {
    "color": "#919394",
    "marginRight": "40px"
  },
  ".bookshelf-list": {
    "width": "100%",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "flexWrap": "wrap",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "flex-start"
  },
  ".bookshelf-list .bookshelf-item": {
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
          "v": "bookshelf-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookshelf-item"
        }
      ]
    }
  },
  ".bookshelf-list .bookshelf-item .bookshelf-title": {
    "width": "100%",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookshelf-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookshelf-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookshelf-title"
        }
      ]
    }
  },
  ".bookshelf-list .bookshelf-img": {
    "width": "100%",
    "height": "340px",
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "flex-end",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookshelf-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookshelf-img"
        }
      ]
    }
  },
  ".bookshelf-list .bookshelf-img .img-container": {
    "width": "100%",
    "height": "100%",
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookshelf-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookshelf-img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "img-container"
        }
      ]
    }
  },
  ".bookshelf-list .bookshelf-img .delete-icon": {
    "width": "60px",
    "height": "60px",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookshelf-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookshelf-img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "delete-icon"
        }
      ]
    }
  },
  ".bookshelf-list .bookshelf-img image": {
    "borderRadius": "5px",
    "width": "100%",
    "height": "100%",
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookshelf-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bookshelf-img"
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
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/library/book-list.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/components/library/book-list.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "@FONT-FACE": {
    "font1": {
      "fontFamily": "font1",
      "src": [
        "/assets/fonts/????????????W02.ttf"
      ],
      "fontName": "font1",
      "fontSrc": [
        "/assets/fonts/????????????W02.ttf"
      ]
    },
    "font2": {
      "fontFamily": "font2",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font2",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
      ]
    },
    "font3": {
      "fontFamily": "font3",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font3",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
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
  ".rank-title": {
    "marginBottom": "10px",
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
  ".rank-item": {
    "width": "24%",
    "marginTop": "20px",
    "marginRight": "0px",
    "marginBottom": "20px",
    "marginLeft": "0px"
  },
  ".rank-item .rank-icon": {
    "height": "60px",
    "width": "60px",
    "borderRadius": "30px",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-icon"
        }
      ]
    }
  },
  ".rank-item .rank-bg": {
    "borderRadius": "30px",
    "height": "60px",
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-bg"
        }
      ]
    }
  },
  ".rank-item .rank-text": {
    "width": "100%",
    "paddingLeft": "80px",
    "paddingRight": "30px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-text"
        }
      ]
    }
  },
  ".rank-item text": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-item"
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
  ".rank-0 .rank-icon": {
    "backgroundColor": "#4f586e",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-0"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-icon"
        }
      ]
    }
  },
  ".rank-0 .rank-bg": {
    "backgroundColor": "#77819c",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-0"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-bg"
        }
      ]
    }
  },
  ".rank-1 .rank-icon": {
    "backgroundColor": "#2048af",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-1"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-icon"
        }
      ]
    }
  },
  ".rank-1 .rank-bg": {
    "backgroundColor": "#5873bd",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-1"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-bg"
        }
      ]
    }
  },
  ".rank-2 .rank-icon": {
    "backgroundColor": "#306df1",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-2"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-icon"
        }
      ]
    }
  },
  ".rank-2 .rank-bg": {
    "backgroundColor": "#6695fa",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-2"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-bg"
        }
      ]
    }
  },
  ".book-item": {
    "height": "400px",
    "width": "100%",
    "paddingTop": "30px",
    "paddingRight": "0px",
    "paddingBottom": "30px",
    "paddingLeft": "0px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  ".book-item .list-rank": {
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
          "v": "book-item"
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
  ".book-item .list-rank .list-rank-text": {
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
          "v": "book-item"
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
  ".book-item .list-text": {
    "flex": 1,
    "height": "100%",
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
          "v": "book-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-text"
        }
      ]
    }
  },
  ".book-item .list-text .book-title": {
    "lines": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-text"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-title"
        }
      ]
    }
  },
  ".book-item .list-text .book-description": {
    "lines": 2,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-text"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-description"
        }
      ]
    }
  },
  ".book-item .list-text text": {
    "marginBottom": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-text"
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
  ".book-item .list-image": {
    "width": "220px",
    "height": "320px",
    "marginRight": "30px",
    "backgroundColor": "#f4f6fa",
    "borderRadius": "8px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-image"
        }
      ]
    }
  },
  ".book-item .list-image image": {
    "width": "100%",
    "height": "100%",
    "borderRadius": "8px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-image"
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
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/library/fenlei.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/components/library/fenlei.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "@FONT-FACE": {
    "font1": {
      "fontFamily": "font1",
      "src": [
        "/assets/fonts/????????????W02.ttf"
      ],
      "fontName": "font1",
      "fontSrc": [
        "/assets/fonts/????????????W02.ttf"
      ]
    },
    "font2": {
      "fontFamily": "font2",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font2",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
      ]
    },
    "font3": {
      "fontFamily": "font3",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font3",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
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
  ".rank-title": {
    "marginBottom": "10px",
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
  ".rank-item": {
    "width": "24%",
    "marginTop": "20px",
    "marginRight": "0px",
    "marginBottom": "20px",
    "marginLeft": "0px"
  },
  ".rank-item .rank-icon": {
    "height": "60px",
    "width": "60px",
    "borderRadius": "30px",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-icon"
        }
      ]
    }
  },
  ".rank-item .rank-bg": {
    "borderRadius": "30px",
    "height": "60px",
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-bg"
        }
      ]
    }
  },
  ".rank-item .rank-text": {
    "width": "100%",
    "paddingLeft": "80px",
    "paddingRight": "30px",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-text"
        }
      ]
    }
  },
  ".rank-item text": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-item"
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
  ".rank-0 .rank-icon": {
    "backgroundColor": "#4f586e",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-0"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-icon"
        }
      ]
    }
  },
  ".rank-0 .rank-bg": {
    "backgroundColor": "#77819c",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-0"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-bg"
        }
      ]
    }
  },
  ".rank-1 .rank-icon": {
    "backgroundColor": "#2048af",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-1"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-icon"
        }
      ]
    }
  },
  ".rank-1 .rank-bg": {
    "backgroundColor": "#5873bd",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-1"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-bg"
        }
      ]
    }
  },
  ".rank-2 .rank-icon": {
    "backgroundColor": "#306df1",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-2"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-icon"
        }
      ]
    }
  },
  ".rank-2 .rank-bg": {
    "backgroundColor": "#6695fa",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-2"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "rank-bg"
        }
      ]
    }
  },
  ".book-item": {
    "height": "400px",
    "width": "100%",
    "paddingTop": "30px",
    "paddingRight": "0px",
    "paddingBottom": "30px",
    "paddingLeft": "0px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eaeaea",
    "borderStyle": "solid",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  ".book-item .list-rank": {
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
          "v": "book-item"
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
  ".book-item .list-rank .list-rank-text": {
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
          "v": "book-item"
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
  ".book-item .list-text": {
    "flex": 1,
    "height": "100%",
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
          "v": "book-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-text"
        }
      ]
    }
  },
  ".book-item .list-text .book-title": {
    "lines": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-text"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-title"
        }
      ]
    }
  },
  ".book-item .list-text .book-description": {
    "lines": 2,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-text"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-description"
        }
      ]
    }
  },
  ".book-item .list-text text": {
    "marginBottom": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-text"
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
  ".book-item .list-image": {
    "width": "220px",
    "height": "320px",
    "marginRight": "30px",
    "backgroundColor": "#f4f6fa",
    "borderRadius": "8px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-image"
        }
      ]
    }
  },
  ".book-item .list-image image": {
    "width": "100%",
    "height": "100%",
    "borderRadius": "8px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "book-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-image"
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
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/library/index.ux?uxType=comp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/components/library/index.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "@FONT-FACE": {
    "font1": {
      "fontFamily": "font1",
      "src": [
        "/assets/fonts/????????????W02.ttf"
      ],
      "fontName": "font1",
      "fontSrc": [
        "/assets/fonts/????????????W02.ttf"
      ]
    },
    "font2": {
      "fontFamily": "font2",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font2",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
      ]
    },
    "font3": {
      "fontFamily": "font3",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font3",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
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
  ".sub-container": {
    "width": "100%",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start"
  },
  ".swiper": {
    "indicatorSelectedColor": "#ffffff",
    "indicatorColor": "rgba(255,255,255,0.5)",
    "indicatorSize": "12.5px",
    "width": "100%",
    "height": "400px",
    "marginTop": "40px",
    "marginRight": "0px",
    "marginBottom": "40px",
    "marginLeft": "0px"
  },
  ".swiper .swiper-image": {
    "borderRadius": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "swiper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "swiper-image"
        }
      ]
    }
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/search-book/index.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/components/search-book/index.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "@FONT-FACE": {
    "font1": {
      "fontFamily": "font1",
      "src": [
        "/assets/fonts/????????????W02.ttf"
      ],
      "fontName": "font1",
      "fontSrc": [
        "/assets/fonts/????????????W02.ttf"
      ]
    },
    "font2": {
      "fontFamily": "font2",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font2",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
      ]
    },
    "font3": {
      "fontFamily": "font3",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font3",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
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
  ".search-hot": {
    "backgroundColor": "#ffffff",
    "width": "100%",
    "paddingTop": "40px",
    "paddingRight": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "40px",
    "marginBottom": "20px",
    "marginTop": "20px",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "flex-start"
  },
  ".search-hot .search-title": {
    "width": "100%",
    "marginBottom": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-hot"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-title"
        }
      ]
    }
  },
  ".search-hot .hot-list": {
    "width": "100%",
    "flexWrap": "wrap",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-hot"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "hot-list"
        }
      ]
    }
  },
  ".search-hot .hot-item": {
    "width": "200px",
    "paddingTop": "10px",
    "paddingRight": "0px",
    "paddingBottom": "10px",
    "paddingLeft": "0px",
    "textAlign": "center",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#7a8ba9",
    "borderRightColor": "#7a8ba9",
    "borderBottomColor": "#7a8ba9",
    "borderLeftColor": "#7a8ba9",
    "borderRadius": "30px",
    "marginTop": "15px",
    "marginRight": "40px",
    "marginBottom": "15px",
    "marginLeft": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-hot"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "hot-item"
        }
      ]
    }
  },
  ".search-hot .active": {
    "backgroundColor": "#7fffd4",
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-hot"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "active"
        }
      ]
    }
  },
  ".search-refresh": {
    "fontSize": "30px",
    "color": "#20a0ff",
    "fontFamily": "iconfont",
    "paddingTop": "0px",
    "paddingRight": "30px",
    "paddingBottom": "0px",
    "paddingLeft": "30px"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/search-book/search-input-bar.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/components/search-book/search-input-bar.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "@FONT-FACE": {
    "font1": {
      "fontFamily": "font1",
      "src": [
        "/assets/fonts/????????????W02.ttf"
      ],
      "fontName": "font1",
      "fontSrc": [
        "/assets/fonts/????????????W02.ttf"
      ]
    },
    "font2": {
      "fontFamily": "font2",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font2",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
      ]
    },
    "font3": {
      "fontFamily": "font3",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font3",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
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
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/main/index.ux?uxType=page":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/pages/main/index.ux?uxType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "@FONT-FACE": {
    "font1": {
      "fontFamily": "font1",
      "src": [
        "/assets/fonts/????????????W02.ttf"
      ],
      "fontName": "font1",
      "fontSrc": [
        "/assets/fonts/????????????W02.ttf"
      ]
    },
    "font2": {
      "fontFamily": "font2",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font2",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
      ]
    },
    "font3": {
      "fontFamily": "font3",
      "src": [
        "/assets/fonts/?????????????????????.ttf"
      ],
      "fontName": "font3",
      "fontSrc": [
        "/assets/fonts/?????????????????????.ttf"
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
  ".tab-bar": {
    "backgroundColor": "#ffffff",
    "borderTopWidth": "1px",
    "borderTopColor": "#eaeaea",
    "borderStyle": "solid",
    "paddingTop": "15px",
    "paddingRight": "0px",
    "paddingBottom": "15px",
    "paddingLeft": "0px",
    "height": "130px"
  },
  ".tab-bar .tab-item": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        }
      ]
    }
  },
  ".tab-bar .tab-item .iconfont": {
    "fontSize": "60px",
    "color": "#919394",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
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
    },
    "color:active": "#20a0ff"
  },
  ".tab-bar .tab-item .active": {
    "color": "#20a0ff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "active"
        }
      ]
    }
  },
  ".tab-bar .tab-item .g22kjdgy": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
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
  ".tab-bar .tab-item .tab-title": {
    "fontSize": "26px",
    "color": "#919394",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-title"
        }
      ]
    },
    "color:active": "#20a0ff"
  },
  ".tab-bar .tab-item .footer-item-img": {
    "textAlign": "center",
    "width": "60px",
    "height": "60px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "footer-item-img"
        }
      ]
    }
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
                "value": "????????????"
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/bookshelf/index.ux?uxType=comp&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/components/bookshelf/index.ux?uxType=comp& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page-column"
  ],
  "children": [
    {
      "type": "div",
      "attr": {
        "show": function () {return !this.editStatus}
      },
      "classList": [
        "title-bar"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return '' + '????????????' + (this.shelflist.length) + '???'}
          },
          "events": {
            "click": "a"
          },
          "classList": [
            "text-black"
          ],
          "style": {
            "fontSize": "50px"
          }
        },
        {
          "type": "div",
          "attr": {},
          "events": {
            "click": "switchToEdit"
          },
          "shown": function () {return this.shelflist.length},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "???"
              },
              "classList": [
                "text-primary",
                "iconfont"
              ],
              "style": {
                "fontSize": "50px"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "??????"
              },
              "classList": [
                "text-primary"
              ],
              "style": {
                "fontSize": "50px"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {
        "show": function () {return this.editStatus}
      },
      "classList": [
        "title-bar"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return '' + '?????????' + (this.deleteList.length) + '???'}
          },
          "classList": [
            "text-black"
          ],
          "style": {
            "fontSize": "50px"
          }
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "??????"
              },
              "classList": [
                "text-cancel"
              ],
              "events": {
                "click": "cancelEdit"
              },
              "style": {
                "fontSize": "50px"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "??????"
              },
              "classList": [
                "text-primary"
              ],
              "events": {
                "click": "finishEdit"
              },
              "style": {
                "fontSize": "50px"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "bookshelf-list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {
            "show": function () {return this.deleteList.indexOf(this.$item.id)===-1}
          },
          "classList": [
            "bookshelf-item"
          ],
          "repeat": function () {return this.shelflist},
          "children": [
            {
              "type": "stack",
              "attr": {},
              "classList": [
                "bookshelf-img"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "img-container"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.cover}
                      },
                      "style": {
                        "width": "200px",
                        "height": "400px"
                      },
                      "events": {
                        "click": function (evt) { return this.clickImg(this.$item,evt)}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "delete-icon"
                  ],
                  "events": {
                    "click": function (evt) { return this.deleteBook(this.$item,evt)}
                  }
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.bookName}
              },
              "classList": [
                "bookshelf-title"
              ],
              "style": {
                "fontSize": "50px",
                "lines": 1,
                "textOverflow": "ellipsis"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/library/book-list.ux?uxType=comp&importNames[]=my-load-more":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/components/library/book-list.ux?uxType=comp&importNames[]=my-load-more ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "list",
  "attr": {},
  "classList": [
    "list-container"
  ],
  "events": {
    "scrollbottom": "loadMore"
  },
  "children": [
    {
      "type": "list-item",
      "attr": {
        "type": "title"
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "????????????"
          },
          "classList": [
            "list-title"
          ],
          "style": {
            "fontSize": "50px"
          }
        }
      ]
    },
    {
      "type": "list-item",
      "attr": {
        "type": "book-item"
      },
      "classList": [
        "book-item"
      ],
      "repeat": function () {return this.list},
      "events": {
        "click": function (evt) { return this.goToDetail(this.$item,evt)}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-image"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.cover}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-text"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.bookName}
              },
              "classList": [
                "book-title",
                "text-title"
              ],
              "style": {
                "fontSize": "50px"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.author}
              },
              "classList": [
                "book-author",
                "text-remark"
              ],
              "style": {
                "fontSize": "40px"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.description}
              },
              "classList": [
                "book-description",
                "text-remark-black"
              ],
              "style": {
                "fontSize": "45px"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return '' + (this.$item.words) + '???'}
              },
              "classList": [
                "book-count",
                "text-remark"
              ],
              "style": {
                "fontSize": "40px"
              }
            }
          ]
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
      "shown": function () {return this.showLoad},
      "children": [
        {
          "type": "my-load-more",
          "attr": {
            "tip": "????????????"
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
      "shown": function () {return !this.showLoad},
      "children": [
        {
          "type": "my-load-more",
          "attr": {
            "tip": "?????????????????????",
            "loading": function () {return false}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/library/fenlei.ux?uxType=comp&importNames[]=my-load-more":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/components/library/fenlei.ux?uxType=comp&importNames[]=my-load-more ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "list",
  "attr": {},
  "classList": [
    "list-container"
  ],
  "events": {
    "scrollbottom": "loadMore"
  },
  "children": [
    {
      "type": "list-item",
      "attr": {
        "type": "book-item"
      },
      "classList": [
        "book-item"
      ],
      "repeat": function () {return this.list},
      "events": {
        "click": function (evt) { return this.goToDetail(this.$item,evt)}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-image"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.cover}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-text"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.bookName}
              },
              "classList": [
                "book-title",
                "text-title"
              ],
              "style": {
                "fontSize": "50px"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.author}
              },
              "classList": [
                "book-author",
                "text-remark"
              ],
              "style": {
                "fontSize": "40px"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.description}
              },
              "classList": [
                "book-description",
                "text-remark-black"
              ],
              "style": {
                "fontSize": "45px"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return '' + (this.$item.words) + '???'}
              },
              "classList": [
                "book-count",
                "text-remark"
              ],
              "style": {
                "fontSize": "40px"
              }
            }
          ]
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
      "shown": function () {return this.showLoad},
      "children": [
        {
          "type": "my-load-more",
          "attr": {
            "tip": "????????????"
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
      "shown": function () {return !this.showLoad},
      "children": [
        {
          "type": "my-load-more",
          "attr": {
            "tip": "?????????????????????",
            "loading": function () {return false}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/library/index.ux?uxType=comp&importNames[]=book-list":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/components/library/index.ux?uxType=comp&importNames[]=book-list ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page-container"
  ],
  "children": [
    {
      "type": "book-list",
      "attr": {
        "list": function () {return this.library.list},
        "showLoad": function () {return this.library.load},
        "rankList": function () {return this.rankList}
      },
      "events": {
        "load-more": "queryLibraryList",
        "scrollbottom": "renderMoreListItem"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "sub-container"
          ],
          "children": [
            {
              "type": "swiper",
              "attr": {
                "autoplay": "true"
              },
              "classList": [
                "swiper"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.$item.swiper}
                  },
                  "classList": [
                    "swiper-image"
                  ],
                  "repeat": function () {return this.swiperList},
                  "events": {
                    "click": function (evt) { return this.goToDetail(this.$item,evt)}
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {
        "show": function () {return this.hasMoreData}
      },
      "style": {
        "marginLeft": "20px",
        "height": "100%",
        "width": "100%",
        "flexDirection": "column"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "load-status"
          ],
          "children": [
            {
              "type": "progress",
              "attr": {
                "type": "circular",
                "show": function () {return this.hasMoreData}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/search-book/index.ux?uxType=comp&importNames[]=search-input-bar,importNames[]=book-list":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/components/search-book/index.ux?uxType=comp&importNames[]=search-input-bar,importNames[]=book-list ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page-column"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "search-hot"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "search-title"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "??????"
              },
              "classList": [
                "text-black"
              ],
              "style": {
                "fontSize": "52px"
              }
            },
            {
              "type": "div",
              "attr": {},
              "style": {
                "marginLeft": "200px"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "??????"
                  },
                  "classList": function () {return ['hot-item', this.page==1?'active':'']},
                  "events": {
                    "click": function (evt) { return this.toSearch(1,evt)}
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "??????"
                  },
                  "classList": function () {return ['hot-item', this.page==2?'active':'']},
                  "events": {
                    "click": function (evt) { return this.toSearch(2,evt)}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "hot-list"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.$item.name}
              },
              "classList": [
                "hot-item"
              ],
              "repeat": function () {return this.conts},
              "events": {
                "click": function (evt) { return this.search(this.$item.name,evt)}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "page-container"
          ],
          "children": [
            {
              "type": "book-list",
              "attr": {
                "list": function () {return this.library.list},
                "showLoad": function () {return this.library.load},
                "rankList": function () {return this.rankList}
              },
              "events": {
                "load-more": "queryLibraryList",
                "scrollbottom": "renderMoreListItem"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "sub-container"
                  ],
                  "children": [
                    {
                      "type": "swiper",
                      "attr": {
                        "autoplay": "true"
                      },
                      "classList": [
                        "swiper"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.$item.swiper}
                          },
                          "classList": [
                            "swiper-image"
                          ],
                          "repeat": function () {return this.swiperList},
                          "events": {
                            "click": function (evt) { return this.goToDetail(this.$item,evt)}
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {
                "show": function () {return this.hasMoreData}
              },
              "style": {
                "marginLeft": "20px",
                "height": "100%",
                "width": "100%",
                "flexDirection": "column"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "load-status"
                  ],
                  "children": [
                    {
                      "type": "progress",
                      "attr": {
                        "type": "circular",
                        "show": function () {return this.hasMoreData}
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/search-book/search-input-bar.ux?uxType=comp&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/components/search-book/search-input-bar.ux?uxType=comp& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "title-bar-noline"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "search"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "text",
            "id": "search-input",
            "placeholder": "????????????????????????",
            "value": function () {return this.searchText}
          },
          "id": "search-input",
          "classList": [
            "search-input"
          ],
          "events": {
            "change": "change",
            "enterkeyclick": "search"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "???"
          },
          "classList": [
            "iconfont",
            "search-icon"
          ],
          "events": {
            "click": function (evt) { return this.search(evt)}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/main/index.ux?uxType=page&importNames[]=bookshelf,importNames[]=library,importNames[]=search,importNames[]=about":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/pages/main/index.ux?uxType=page&importNames[]=bookshelf,importNames[]=library,importNames[]=search,importNames[]=about ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page-wrapper"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {
        "index": function () {return this.selectedTab}
      },
      "events": {
        "change": "changeTab"
      },
      "children": [
        {
          "type": "tab-content",
          "attr": {},
          "children": [
            {
              "type": "bookshelf",
              "attr": {
                "shelflist": function () {return this.oldKeywordList}
              },
              "events": {
                "update-shelf": "updateShelf"
              }
            },
            {
              "type": "library",
              "attr": {}
            },
            {
              "type": "about",
              "attr": {}
            }
          ]
        },
        {
          "type": "tab-bar",
          "attr": {
            "mode": "fixed"
          },
          "classList": [
            "tab-bar"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-item"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.selectedTab==0?'\ue602':'\ue601'}
                  },
                  "classList": [
                    "iconfont"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "??????"
                  },
                  "classList": function () {return ['iconfonts', this.selectedTab==0?'active':'']},
                  "events": {
                    "click": function (evt) { return this.onTabSelectChanged(0,evt)}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-item"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.selectedTab==1?'\ue681':'\ue67d'}
                  },
                  "classList": [
                    "iconfont"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "??????"
                  },
                  "classList": function () {return ['iconfonts', this.selectedTab==1?'active':'']},
                  "events": {
                    "click": function (evt) { return this.onTabSelectChanged(1,evt)}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-item"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.selectedTab===3?'../../assets/images/lou-cur.png':'../../assets/images/lou.png'}
                  },
                  "classList": [
                    "footer-item-img"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "??????"
                  },
                  "classList": function () {return ['iconfonts', this.selectedTab==3?'active':'']},
                  "events": {
                    "click": function (evt) { return this.onTabSelectChanged(3,evt)}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-item"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.selectedTab===4?'../../assets/images/ic_rw_on.png':'../../assets/images/ic_rw_off.png'}
                  },
                  "classList": [
                    "footer-item-img"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "??????"
                  },
                  "classList": function () {return ['iconfonts', this.selectedTab==4?'active':'']},
                  "events": {
                    "click": function (evt) { return this.onTabSelectChanged(4,evt)}
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/about/index.ux?uxType=comp&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/quicktask/about/index.ux?uxType=comp& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrapper"
  ],
  "children": [
    {
      "type": "a",
      "attr": {
        "href": function () {return this.privacyPolicy},
        "value": "????????????"
      }
    },
    {
      "type": "a",
      "attr": {
        "href": function () {return this.userAgreement},
        "value": "????????????"
      }
    },
    {
      "type": "div",
      "attr": {},
      "style": {
        "flex": 1
      }
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/bookshelf/index.ux?uxType=comp&name=bookshelf":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/components/bookshelf/index.ux?uxType=comp&name=bookshelf ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/bookshelf/index.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/bookshelf/index.ux?uxType=comp")

$app_define$('@app-component/bookshelf', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/bookshelf/index.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/library/book-list.ux?uxType=comp&name=book-list":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/components/library/book-list.ux?uxType=comp&name=book-list ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../../node_modules/apex-ui/components/load-more/index.ux?uxType=comp&name=my-load-more */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp&name=my-load-more")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./book-list.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/library/book-list.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./book-list.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/library/book-list.ux?uxType=comp")

$app_define$('@app-component/book-list', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./book-list.ux?uxType=comp&importNames[]=my-load-more */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/library/book-list.ux?uxType=comp&importNames[]=my-load-more")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/library/fenlei.ux?uxType=comp&name=book-list":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/components/library/fenlei.ux?uxType=comp&name=book-list ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../../node_modules/apex-ui/components/load-more/index.ux?uxType=comp&name=my-load-more */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./node_modules/apex-ui/components/load-more/index.ux?uxType=comp&name=my-load-more")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./fenlei.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/library/fenlei.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./fenlei.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/library/fenlei.ux?uxType=comp")

$app_define$('@app-component/book-list', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./fenlei.ux?uxType=comp&importNames[]=my-load-more */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/library/fenlei.ux?uxType=comp&importNames[]=my-load-more")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/library/index.ux?uxType=comp&name=library":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/components/library/index.ux?uxType=comp&name=library ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./book-list.ux?uxType=comp&name=book-list */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/library/book-list.ux?uxType=comp&name=book-list")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/library/index.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/library/index.ux?uxType=comp")

$app_define$('@app-component/library', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=book-list */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/library/index.ux?uxType=comp&importNames[]=book-list")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/search-book/index.ux?uxType=comp&name=search":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/components/search-book/index.ux?uxType=comp&name=search ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./search-input-bar.ux?uxType=comp&name=search-input-bar */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/search-book/search-input-bar.ux?uxType=comp&name=search-input-bar")
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../library/fenlei.ux?uxType=comp&name=book-list */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/library/fenlei.ux?uxType=comp&name=book-list")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/search-book/index.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/search-book/index.ux?uxType=comp")

$app_define$('@app-component/search', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=comp&importNames[]=search-input-bar,importNames[]=book-list */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/search-book/index.ux?uxType=comp&importNames[]=search-input-bar,importNames[]=book-list")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/search-book/search-input-bar.ux?uxType=comp&name=search-input-bar":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/components/search-book/search-input-bar.ux?uxType=comp&name=search-input-bar ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./search-input-bar.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/components/search-book/search-input-bar.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./search-input-bar.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/components/search-book/search-input-bar.ux?uxType=comp")

$app_define$('@app-component/search-input-bar', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./search-input-bar.ux?uxType=comp& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/components/search-book/search-input-bar.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/about/index.ux?uxType=comp&name=about":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/quicktask/about/index.ux?uxType=comp&name=about ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/about/index.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/about/index.ux?uxType=comp")

$app_define$('@app-component/about', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/about/index.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

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
//   title: '?????????',
//   author: '?????????',
//   description:
//     '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
//   count: 120,
//   words: 68,
//   score: 5
// },
// {
//   id: '2',
//   image: '/assets/images/sanguo.jpg',
//   swiper: '/assets/images/sanguo_row.jpg',
//   title: '????????????',
//   author: '?????????',
//   description:
//     '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
//   count: 120,
//   words: 48,
//   score: 5
// },
// {
//   id: '3',
//   image: '/assets/images/xiyou.jpg',
//   swiper: '/assets/images/xiyou_row.jpeg',
//   title: '?????????',
//   author: '?????????',
//   description:
//     '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????1510???????1582??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
//   count: 101,
//   words: 59,
//   score: 5
// },
// {
//   id: '4',
//   image: '/assets/images/shuihu.jpg',
//   swiper: '/assets/images/shuihu_row.png',
//   title: '?????????',
//   author: '?????????',
//   description:
//     '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n            ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n            ????????????????????????????????????????????????????????????????????????????????????????????????????????????',
//   count: 120,
//   words: 72,
//   score: 5
// },
// {
//   id: '5',
//   image: '/assets/images/jinpingmei.jpeg',
//   swiper: '/assets/images/jinpingmei_row.jpeg',
//   title: '?????????',
//   author: '???????????????',
//   description:
//     '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
//   count: 101,
//   words: 63,
//   score: 5
// }
{
  "id": 1,
  "title": "??????",
  "sex": 1
}, {
  "id": 2,
  "title": "??????",
  "sex": 1
}, {
  "id": 3,
  "title": "??????",
  "sex": 1
}, {
  "id": 4,
  "title": "??????",
  "sex": 1
}, {
  "id": 5,
  "title": "??????",
  "sex": 1
}, {
  "id": 6,
  "title": "??????",
  "sex": 1
}, {
  "id": 7,
  "title": "??????",
  "sex": 1
}, {
  "id": 8,
  "title": "??????",
  "sex": 1
}, {
  "id": 9,
  "title": "??????",
  "sex": 1
}, {
  "id": 10,
  "title": "??????",
  "sex": 1
}, {
  "id": 11,
  "title": "??????",
  "sex": 1
}, {
  "id": 20,
  "title": "????????????",
  "sex": 2
}, {
  "id": 21,
  "title": "????????????",
  "sex": 2
}, {
  "id": 22,
  "title": "????????????",
  "sex": 2
}, {
  "id": 23,
  "title": "????????????",
  "sex": 2
}, {
  "id": 24,
  "title": "????????????",
  "sex": 2
}, {
  "id": 25,
  "title": "????????????",
  "sex": 2
}, {
  "id": 26,
  "title": "????????????",
  "sex": 2
}, {
  "id": 27,
  "title": "????????????",
  "sex": 2
}];
exports.bookListData = bookListData;

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
// ??????????????????????????????????????????????????????????????????????????????
const adconfig = {
  native188: {
    name: '188??????',
    key: 'native-188',
    type: '????????????',
    adUnitId: {
      vivo: '8bd3a377d73a472abce07afbf161be2a',
      HUAWEI: 'q2aplxzmw6',
      OPPO: '428083'
    },
    placementId: 10043
  },
  native188Double: {
    name: '188????????????',
    key: 'native-188-double',
    type: '????????????',
    adUnitId: {
      vivo: '7393e67710324398babced31e12bef64',
      HUAWEI: 'k8a6ilhl42',
      OPPO: '428069'
    },
    placementId: 10042
  },
  openRedBagRewardVideo: {
    name: '?????????????????????',
    key: 'open-redbag-reward-ad',
    type: '????????????',
    adUnitId: {
      vivo: 'd4e4e2167ff44c31988d9568e6612683',
      HUAWEI: 'z0f07z42ad',
      OPPO: '428061'
    },
    placementId: 10041
  },
  reward188Ad: {
    name: '188????????????',
    key: 'watch-188-reward-ad',
    type: '????????????',
    adUnitId: {
      vivo: '0da1ff547a8347cf980c51351bbf649d',
      HUAWEI: 'w919j6mqn0',
      OPPO: '428080'
    },
    placementId: 10040
  },
  watchAdNativeAd: {
    name: '???????????????????????????',
    key: 'watch-ad-native-ad',
    type: '????????????',
    adUnitId: {
      vivo: '389379c209794a46a72381f67fdb0d3f',
      HUAWEI: 'd711armuxp',
      OPPO: '428064'
    },
    placementId: 10039
  },
  openRedBag: {
    name: '?????????',
    key: 'chaihongbao-yuansheng',
    type: '????????????',
    adUnitId: {
      vivo: '320ea8e27bef44aeb42c8b711c3011ce',
      HUAWEI: 'x803yucb2j',
      OPPO: '428078'
    },
    placementId: 10037
  },
  checkIn: {
    name: '????????????',
    key: 'qiandao-kuangnei-yuansheng',
    type: '????????????',
    adUnitId: {
      vivo: 'fd9d69e65f6a4d3f808acd5f7632cded',
      HUAWEI: 'x803yucb2j',
      OPPO: '407989'
    },
    placementId: 10036
  },
  checkInDouble: {
    name: '????????????',
    key: 'qiandao-shuangbei-jili',
    type: '????????????',
    adUnitId: {
      vivo: '97f8ae9ed4f74e3e9671166b3510b785',
      HUAWEI: 'o4yvpcy5qw',
      OPPO: '428088'
    },
    placementId: 10035
  },
  taskRewardVideo: {
    name: '????????????????????????',
    key: 'renwuliebiao-jili',
    type: '????????????',
    adUnitId: {
      vivo: '109cf0b3dc66427fa5f5e0b555ed6ad9',
      HUAWEI: 'p1pu803urw',
      OPPO: '428067'
    },
    placementId: 10034
  },
  backPressAdDialog: {
    name: '????????????',
    key: 'fanhui-tanchuang-yuansheng',
    type: '????????????',
    adUnitId: {
      vivo: 'b5bca7116123442486c1e57c39db06f6',
      HUAWEI: 's3wiwbsb6y',
      OPPO: '428047'
    },
    placementId: 10031
  },
  exitAdDialog: {
    name: '????????????',
    key: 'tuichu-tanchuang-yuansheng',
    type: '????????????',
    adUnitId: {
      vivo: '75259604c06b4defbf151c5bb4c84e0d',
      HUAWEI: 'v6rnf6uxrg',
      OPPO: '428057'
    },
    placementId: 10007
  },
  backPressRewardAd: {
    name: '??????????????????',
    key: 'fanhui-tanc-jil',
    type: '????????????',
    adUnitId: {
      vivo: '2f8f2c1bcd7d4a6aa51829ea2a3ae9b2',
      HUAWEI: 's3wiwbsb6y',
      OPPO: '419725'
    },
    placementId: 10045
  }
};
exports.adconfig = adconfig;
const pkg = "com.fbkj.youyuedu"; // ?????????????????????

exports.pkg = pkg;
const indexPath = "/pages/main"; // ??????????????????????????????

exports.indexPath = indexPath;
const appId = '27'; // ??????????????? appid

exports.appId = appId;
const userAgreement = "http://quickapp.uochen.com/xieyi/uochen-user.html?p=?????????"; // ???????????????????????????

exports.userAgreement = userAgreement;
const privacyPolicy = "http://quickapp.uochen.com/xieyi/uochen-privilege.html?p=?????????"; // ???????????????????????????
// ??????????????????????????????????????????

exports.privacyPolicy = privacyPolicy;
const zonstAppId = 'bd407bba9d0b85e7';
exports.zonstAppId = zonstAppId;
const zonstAppKey = '8a41a6be1b6e2731';
exports.zonstAppKey = zonstAppKey;
const zonstNativeId = "68";
exports.zonstNativeId = zonstNativeId;

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
/*!*********************************************!*\
  !*** ./src/pages/main/index.ux?uxType=page ***!
  \*********************************************/
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../components/bookshelf/index.ux?uxType=comp&name=bookshelf */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/bookshelf/index.ux?uxType=comp&name=bookshelf")
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../components/library/index.ux?uxType=comp&name=library */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/library/index.ux?uxType=comp&name=library")
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../components/search-book/index.ux?uxType=comp&name=search */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/components/search-book/index.ux?uxType=comp&name=search")
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../quicktask/about/index.ux?uxType=comp&name=about */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/about/index.ux?uxType=comp&name=about")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/pages/main/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/pages/main/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=bookshelf,importNames[]=library,importNames[]=search,importNames[]=about */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/pages/main/index.ux?uxType=page&importNames[]=bookshelf,importNames[]=library,importNames[]=search,importNames[]=about")

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
(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/splash/index.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/quicktask/splash/index.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.storage"));

var _config = __webpack_require__(/*! ../../config */ "./src/config/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  private: {
    path: _config.indexPath
  },
  public: {
    channel: "",
    aid: 0
  },

  onInit() {},

  go() {
    console.log("go--", this.channel);
    let userAgress = false;

    if ($manager.getChannel() != '' || this.channel != "") {
      $manager.setChannel(this.channel);
      userAgress = true;
      this.path = "/quicktask/index";

      if (this.channel != "") {
        this.path += "?channel=" + this.channel;

        if (this.aid != 0) {
          this.aid += "&aid=" + this.aid;
        }
      }
    }

    if (userAgress) {
      this.startActivity();
    } else {
      _system2.default.get({
        key: "userAgress",
        success: v => {
          if (v) {
            userAgress = true;
          }

          if (userAgress) {
            this.startActivity();
          } else {
            this.$child('yinsi-dialog').show();
          }
        },
        fail: () => {
          this.startActivity();
        }
      });
    }
  },

  onUserAgress() {
    _system2.default.set({
      key: "userAgress",
      value: 1
    });

    this.startActivity();
  },

  startActivity() {
    _system.default.replace({
      uri: this.path
    });
  },

  onShow() {
    $umeng_stat.resume(this);
    this.go();
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/components/dialog/yinsi-dialog.ux?uxType=comp":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/quicktask/components/dialog/yinsi-dialog.ux?uxType=comp ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = __webpack_require__(/*! ../../../config */ "./src/config/index.js");

var _default = {
  data: {
    title: "温馨提示",
    userAgreement: _config.userAgreement,
    privacyPolicy: _config.privacyPolicy
  },
  props: [],

  onInit() {},

  show() {
    this.$child('yinsi-dialog').show();
  },

  hide() {
    this.$child('yinsi-dialog').hide();
  },

  ok() {
    this.$emit('ok');
  },

  exit() {
    this.$child('yinsi-dialog').hide();
    this.$app.exit();
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/components/mask.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/quicktask/components/mask.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    animation: {
      default: true
    },
    transparent: {
      default: false
    },
    zIndex: {
      default: 1000
    }
  },

  data() {
    return {
      isAnimationEnd: true,
      isVisible: false,
      timer: null
    };
  },

  animationClass() {
    if (this.animation) {
      if (this.isVisible) {
        return "opacity-hide-to-show";
      } else {
        return "opacity-show-to-hide";
      }
    } else {
      return "";
    }
  },

  show() {
    if (this.timer) return;
    this.isVisible = true;
    this.isAnimationEnd = false;
  },

  hide() {
    if (this.timer) return;
    this.isVisible = false;
    this.timer = setTimeout(() => {
      this.isAnimationEnd = true;
      this.timer = null;
    }, 200);
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/components/popup.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/quicktask/components/popup.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    channel: {
      default: ''
    },
    adKey: {
      default: ''
    },
    background: {
      default: '#ffffff'
    },
    title: {
      default: ''
    },
    content: {
      default: ''
    },
    extra: {
      default: ''
    },
    position: {
      default: 'center'
    },
    closable: {
      default: false
    },
    mask: {
      default: true
    },
    maskClosable: {
      default: false
    },
    zIndex: {
      default: 1000
    },
    hasHeader: {
      default: true
    },
    hasFooter: {
      default: true
    }
  },

  data() {
    return {
      isAnimationEnd: true,
      isVisible: false,
      adVisible: false,
      timerOfAnimation: null
    };
  },

  animationClass() {
    if (this.isVisible) {
      switch (this.position) {
        case 'center':
          return 'opacity-hide-to-show';
          break;

        case 'left':
          return 'translate-left-to-center';
          break;

        case 'right':
          return 'translate-right-to-center';
          break;

        case 'top':
          return 'translate-top-to-center';
          break;

        case 'bottom':
          return 'translate-bottom-to-center';
          break;

        default:
          return '';
      }
    } else {
      switch (this.position) {
        case 'center':
          return 'opacity-show-to-hide';
          break;

        case 'left':
          return 'translate-center-to-left';
          break;

        case 'right':
          return 'translate-center-to-right';
          break;

        case 'top':
          return 'translate-center-to-top';
          break;

        case 'bottom':
          return 'translate-center-to-bottom';
          break;

        default:
          return '';
      }
    }
  },

  toggleMask(fn) {
    if (this.mask) {
      this.$child('mask')[fn]();
    }
  },

  show() {
    if (this.timerOfAnimation) return;
    this.isVisible = true;
    this.isAnimationEnd = false;
    this.toggleMask('show');
    setTimeout(() => {
      this.adVisible = true;
    }, 500);
  },

  hide() {
    if (this.timerOfAnimation) return;
    this.isVisible = false;
    this.adVisible = false;
    this.toggleMask('hide');
    this.timerOfAnimation = setTimeout(() => {
      this.isAnimationEnd = true;
      this.$emit('closed');
      this.timerOfAnimation = null;
    }, 200);
  },

  handleClickMask() {
    if (this.maskClosable) {
      this.hide();
      this.$emit('close');
    }
  },

  handleClickClose() {
    this.hide();
    this.$emit('close');
  },

  handleAdClose() {
    this.adVisible = false;
  },

  handleAdLoad() {
    console.log('native ad loaded');
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/components/dialog/yinsi-dialog.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/quicktask/components/dialog/yinsi-dialog.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "textAlign": "center",
    "color": "#212121",
    "fontSize": "60px",
    "marginBottom": "50px",
    "marginTop": "70px"
  },
  ".link": {
    "color": "#4242fa"
  },
  ".content": {
    "backgroundColor": "#ffffff",
    "paddingTop": "50px",
    "paddingRight": "50px",
    "paddingBottom": "50px",
    "paddingLeft": "50px",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "-100px",
    "borderRadius": "15px"
  },
  ".btn-exit": {
    "width": "40%",
    "height": "120px",
    "marginTop": "50px"
  },
  ".btn-ok": {
    "width": "40%",
    "height": "120px",
    "marginTop": "50px",
    "marginLeft": "120px",
    "backgroundColor": "#008000",
    "color": "#FFFFFF"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/components/mask.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/quicktask/components/mask.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".page": {
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#fbf3df",
    "paddingBottom": "120px"
  },
  ".card": {
    "display": "flex",
    "flexDirection": "column",
    "marginLeft": "auto",
    "marginRight": "auto",
    "position": "relative",
    "width": "686px",
    "borderRadius": "20px",
    "backgroundColor": "#ffffff"
  },
  ".row": {
    "flexDirection": "row"
  },
  ".mb-20": {
    "marginBottom": "20px"
  },
  ".mt-20": {
    "marginTop": "20px"
  },
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
  ".mask": {
    "position": "absolute",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px",
    "animationDuration": "200ms",
    "animationTimingFunction": "linear",
    "animationFillMode": "forwards"
  },
  ".bgcolor-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".bgcolor-default": {
    "backgroundColor": "rgba(0,0,0,0.7)"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/components/popup.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/quicktask/components/popup.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".page": {
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#fbf3df",
    "paddingBottom": "120px"
  },
  ".card": {
    "display": "flex",
    "flexDirection": "column",
    "marginLeft": "auto",
    "marginRight": "auto",
    "position": "relative",
    "width": "686px",
    "borderRadius": "20px",
    "backgroundColor": "#ffffff"
  },
  ".row": {
    "flexDirection": "row"
  },
  ".mb-20": {
    "marginBottom": "20px"
  },
  ".mt-20": {
    "marginTop": "20px"
  },
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
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "100%",
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px"
  },
  ".wrap .popup-ad": {
    "animationDuration": "200ms",
    "animationTimingFunction": "linear",
    "animationFillMode": "forwards",
    "paddingTop": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-ad"
        }
      ]
    }
  },
  ".wrap .popup": {
    "flexDirection": "column",
    "position": "relative",
    "animationDuration": "200ms",
    "animationTimingFunction": "linear",
    "animationFillMode": "forwards",
    "borderRadius": "21px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup"
        }
      ]
    }
  },
  ".wrap .popup .popup-header .popup-header-text": {
    "flex": 1,
    "paddingTop": "30px",
    "paddingRight": "70px",
    "paddingBottom": "30px",
    "paddingLeft": "70px",
    "textAlign": "center",
    "fontSize": "30px",
    "fontWeight": "bold",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-header"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-header-text"
        }
      ]
    }
  },
  ".wrap .popup .popup-body": {
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-body"
        }
      ]
    }
  },
  ".wrap .popup .popup-body .popup-body-text": {
    "flex": 1,
    "textAlign": "center",
    "paddingTop": "15px",
    "paddingRight": "70px",
    "paddingBottom": "60px",
    "paddingLeft": "70px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-body"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-body-text"
        }
      ]
    }
  },
  ".wrap .popup .popup-footer .popup-footer-text": {
    "flex": 1,
    "paddingTop": "30px",
    "paddingRight": "70px",
    "paddingBottom": "30px",
    "paddingLeft": "70px",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-footer"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-footer-text"
        }
      ]
    }
  },
  ".wrap .popup .popup-close": {
    "position": "absolute",
    "top": "0px",
    "right": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-close"
        }
      ]
    }
  },
  ".wrap .popup .popup-close-icon": {
    "fontSize": "50px",
    "fontWeight": "bold",
    "paddingTop": "16px",
    "paddingRight": "35px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-close-icon"
        }
      ]
    }
  },
  ".wrap .popup-center": {
    "width": "80%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-center"
        }
      ]
    }
  },
  ".wrap .popup-left": {
    "width": "80%",
    "position": "absolute",
    "top": "0px",
    "bottom": "0px",
    "left": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-left"
        }
      ]
    }
  },
  ".wrap .popup-right": {
    "width": "80%",
    "position": "absolute",
    "top": "0px",
    "bottom": "0px",
    "right": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-right"
        }
      ]
    }
  },
  ".wrap .popup-top": {
    "position": "absolute",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-top"
        }
      ]
    }
  },
  ".wrap .popup-bottom": {
    "position": "absolute",
    "bottom": "0px",
    "left": "0px",
    "right": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "popup-bottom"
        }
      ]
    }
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/splash/index.ux?uxType=page":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/quicktask/splash/index.ux?uxType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#888888"
  },
  ".title": {
    "textAlign": "center",
    "color": "#212121",
    "fontSize": "60px",
    "marginBottom": "50px",
    "marginTop": "50px"
  },
  ".link": {
    "color": "#4242fa"
  },
  ".content": {
    "backgroundColor": "#ffffff",
    "paddingTop": "50px",
    "paddingRight": "50px",
    "paddingBottom": "50px",
    "paddingLeft": "50px",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "borderRadius": "15px",
    "marginTop": "80px",
    "marginRight": "80px",
    "marginBottom": "80px",
    "marginLeft": "80px"
  },
  ".btn-exit": {
    "width": "40%",
    "height": "120px",
    "marginTop": "50px"
  },
  ".btn-ok": {
    "width": "40%",
    "height": "120px",
    "marginTop": "50px",
    "marginLeft": "120px",
    "backgroundColor": "#008000",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/components/dialog/yinsi-dialog.ux?uxType=comp&importNames[]=my-popup":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/quicktask/components/dialog/yinsi-dialog.ux?uxType=comp&importNames[]=my-popup ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "my-popup",
  "attr": {
    "id": "yinsi-dialog",
    "background": "#00000000"
  },
  "id": "yinsi-dialog",
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "wrapper"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.title}
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {},
              "style": {
                "fontSize": "40px"
              },
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": "为了让您更好地使用本应用，请充分阅读并理解"
                  }
                },
                {
                  "type": "a",
                  "attr": {
                    "href": function () {return this.privacyPolicy},
                    "value": "《隐私政策》"
                  },
                  "classList": [
                    "link"
                  ]
                },
                {
                  "type": "span",
                  "attr": {
                    "value": "和"
                  }
                },
                {
                  "type": "a",
                  "attr": {
                    "href": function () {return this.userAgreement},
                    "value": "《用户协议》"
                  },
                  "classList": [
                    "link"
                  ]
                },
                {
                  "type": "span",
                  "attr": {
                    "value": "。\n          1.我们会遵循隐私政策手机、使用信息，但不会因同意了隐私政策而进行强制捆绑式的信息收集；\n          2.在仅浏览时，我们会申请系统手机设备信息，用于登录服务；\n          3.我们会努力采取各种安全技术保护您的个人信息，未经您的同意，我们不会从第三方获取、共享或对外提供您的信息。"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "children": [
                {
                  "type": "input",
                  "attr": {
                    "type": "button",
                    "value": "退出应用"
                  },
                  "classList": [
                    "btn-exit"
                  ],
                  "events": {
                    "click": "exit"
                  }
                },
                {
                  "type": "input",
                  "attr": {
                    "type": "button",
                    "value": "同意并继续"
                  },
                  "classList": [
                    "btn-ok"
                  ],
                  "events": {
                    "click": "ok"
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/components/mask.ux?uxType=comp&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/quicktask/components/mask.ux?uxType=comp& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "style": {
    "zIndex": function () {return this.zIndex}
  },
  "classList": function () {return ['mask', this.isVisible?'show':this.isAnimationEnd?'hide':'', this.animationClass(), this.transparent?'bgcolor-transparent':'bgcolor-default']}
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/components/popup.ux?uxType=comp&importNames[]=my-mask":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/quicktask/components/popup.ux?uxType=comp&importNames[]=my-mask ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": function () {return ['wrap', this.isAnimationEnd?'hide':'show']},
  "style": {
    "zIndex": function () {return this.zIndex}
  },
  "children": [
    {
      "type": "my-mask",
      "attr": {
        "id": "mask",
        "zIndex": function () {return this.zIndex}
      },
      "id": "mask",
      "events": {
        "click": "handleClickMask"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": function () {return ['popup', `popup-${this.position}`, this.animationClass(), 'mb-20']},
      "style": {
        "backgroundColor": function () {return this.background},
        "zIndex": function () {return this.zIndex}
      },
      "children": [
        {
          "type": "div",
          "attr": {
            "show": function () {return this.hasHeader}
          },
          "classList": [
            "popup-header"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.title}
              },
              "classList": [
                "popup-header-text"
              ],
              "shown": function () {return this.title}
            },
            {
              "type": "block",
              "attr": {},
              "shown": function () {return !(this.title)},
              "children": [
                {
                  "type": "slot",
                  "attr": {
                    "name": "header"
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
            "popup-body"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.content}
              },
              "classList": [
                "popup-body-text"
              ],
              "shown": function () {return this.content}
            },
            {
              "type": "slot",
              "attr": {
                "name": "default"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {
            "show": function () {return this.hasFooter}
          },
          "classList": [
            "popup-footer"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.extra}
              },
              "classList": [
                "popup-footer-text"
              ],
              "shown": function () {return this.extra}
            },
            {
              "type": "block",
              "attr": {},
              "shown": function () {return !(this.extra)},
              "children": [
                {
                  "type": "slot",
                  "attr": {
                    "name": "footer"
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {
            "show": function () {return this.closable}
          },
          "classList": [
            "popup-close"
          ],
          "events": {
            "click": "handleClickClose"
          },
          "children": [
            {
              "type": "slot",
              "attr": {
                "name": "close"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/quicktask/images/ic_close.png"
                  },
                  "style": {
                    "width": "45px",
                    "height": "45px",
                    "paddingTop": "13px",
                    "paddingRight": "13px",
                    "paddingBottom": "13px",
                    "paddingLeft": "13px"
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/splash/index.ux?uxType=page&importNames[]=yinsi-dialog":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/quicktask/splash/index.ux?uxType=page&importNames[]=yinsi-dialog ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrapper"
  ],
  "children": [
    {
      "type": "yinsi-dialog",
      "attr": {
        "id": "yinsi-dialog"
      },
      "id": "yinsi-dialog",
      "events": {
        "ok": "onUserAgress"
      }
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/dialog/yinsi-dialog.ux?uxType=comp&name=yinsi-dialog":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/quicktask/components/dialog/yinsi-dialog.ux?uxType=comp&name=yinsi-dialog ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../popup.ux?uxType=comp&name=my-popup */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/popup.ux?uxType=comp&name=my-popup")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./yinsi-dialog.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/components/dialog/yinsi-dialog.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./yinsi-dialog.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/components/dialog/yinsi-dialog.ux?uxType=comp")

$app_define$('@app-component/yinsi-dialog', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./yinsi-dialog.ux?uxType=comp&importNames[]=my-popup */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/components/dialog/yinsi-dialog.ux?uxType=comp&importNames[]=my-popup")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/mask.ux?uxType=comp&name=my-mask":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/quicktask/components/mask.ux?uxType=comp&name=my-mask ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./mask.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/components/mask.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./mask.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/components/mask.ux?uxType=comp")

$app_define$('@app-component/my-mask', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./mask.ux?uxType=comp& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/components/mask.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/popup.ux?uxType=comp&name=my-popup":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/quicktask/components/popup.ux?uxType=comp&name=my-popup ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./mask.ux?uxType=comp&name=my-mask */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/mask.ux?uxType=comp&name=my-mask")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./popup.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/components/popup.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./popup.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/components/popup.ux?uxType=comp")

$app_define$('@app-component/my-popup', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./popup.ux?uxType=comp&importNames[]=my-mask */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/components/popup.ux?uxType=comp&importNames[]=my-mask")

     $app_module$.exports.style = $app_style$
})

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
/*!***************************************************!*\
  !*** ./src/quicktask/splash/index.ux?uxType=page ***!
  \***************************************************/
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../components/dialog/yinsi-dialog.ux?uxType=comp&name=yinsi-dialog */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/dialog/yinsi-dialog.ux?uxType=comp&name=yinsi-dialog")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/splash/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/splash/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=yinsi-dialog */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/splash/index.ux?uxType=page&importNames[]=yinsi-dialog")

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
(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/about/index.ux?uxType=page":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/quicktask/about/index.ux?uxType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/about/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/quicktask/about/index.ux?uxType=page ***!
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/about/index.ux?uxType=page&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/quicktask/about/index.ux?uxType=page& ***!
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
/*!**************************************************!*\
  !*** ./src/quicktask/about/index.ux?uxType=page ***!
  \**************************************************/

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/about/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/about/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/about/index.ux?uxType=page&")

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
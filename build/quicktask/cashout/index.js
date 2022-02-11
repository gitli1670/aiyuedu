(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/cashout/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/quicktask/cashout/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  private: {
    userName: '',
    account: ''
  },

  showChangePrompt(e) {
    this.userName = e.value;
  },

  showChangePromptAcount(e) {
    this.account = e.value;
  },

  showClickPrompt() {
    if (this.userName == '' || this.account == '') {
      _system.default.showToast({
        message: '姓名和账号不能为空'
      });

      return;
    }

    _system2.default.fetch({
      url: 'http://k1.uochen.com/application/withdrawal-record/',
      method: 'POST',
      responseType: 'json',
      data: {
        token: $manager.getToken(),
        name: this.userName,
        phone: this.account,
        appName: this.$def.manifest.name
      },
      success: response => {
        console.log("登录了");
        console.log(response);

        _system.default.showDialog({
          message: response.data.message,
          buttons: [{
            text: '确定',
            color: '#ff8032'
          }]
        });
      },
      fail: () => {
        _system.default.showToast({
          message: "错误，请等待修复"
        });
      }
    });
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/cashout/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/quicktask/cashout/index.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".pay-img": {
    "width": "330px",
    "marginLeft": "340px",
    "marginTop": "80px"
  },
  ".userName": {
    "marginTop": "130px",
    "backgroundColor": "#ffffff"
  },
  ".userName text": {
    "width": "190px",
    "fontSize": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "userName"
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
  ".userName input": {
    "fontSize": "40px",
    "borderBottomWidth": "1px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#000000",
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "userName"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "input"
        }
      ]
    }
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/cashout/index.ux?uxType=page&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/quicktask/cashout/index.ux?uxType=page& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "list",
      "attr": {},
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": ""
          },
          "style": {
            "backgroundColor": "#f8f8ff"
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/quicktask/images/fuhao.png"
              },
              "classList": [
                "pay-img"
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": ""
          },
          "classList": [
            "userName"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "真实:"
              }
            },
            {
              "type": "input",
              "attr": {
                "type": "text",
                "placeholder": "姓名",
                "id": "user"
              },
              "id": "user",
              "events": {
                "change": "showChangePrompt"
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": ""
          },
          "classList": [
            "userName"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "用户:"
              }
            },
            {
              "type": "input",
              "attr": {
                "type": "text",
                "placeholder": "支付宝账号",
                "id": "account"
              },
              "id": "account",
              "events": {
                "change": "showChangePromptAcount"
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": ""
          },
          "style": {
            "marginTop": "130px",
            "marginLeft": "60px"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "注意事项"
              },
              "style": {
                "fontSize": "40px",
                "fontWeight": "bold"
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": ""
          },
          "style": {
            "marginTop": "20px",
            "marginLeft": "50px",
            "lineHeight": "30px"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "1.支付宝只认唯一的登录账号，若登录账号为邮箱，请不要填写手机号码哦。可在支付宝【我的]页面查看账号"
              },
              "style": {
                "fontWeight": "bolder",
                "fontSize": "40px"
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": ""
          },
          "style": {
            "marginTop": "30px",
            "marginLeft": "50px"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "2.如果支付宝账号与姓名不一致将无法打款，请认真填写"
              },
              "style": {
                "fontWeight": "bolder",
                "fontSize": "40px"
              }
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": ""
          },
          "style": {
            "marginTop": "30px"
          },
          "children": [
            {
              "type": "input",
              "attr": {
                "type": "button",
                "value": "登录"
              },
              "events": {
                "click": "showClickPrompt"
              },
              "style": {
                "marginTop": "70px",
                "marginRight": "auto",
                "marginBottom": "70px",
                "marginLeft": "auto",
                "fontSize": "50px",
                "width": "80%",
                "height": "140px",
                "color": "#ffffff",
                "backgroundColor": "#1e90ff"
              }
            }
          ]
        }
      ]
    }
  ]
}

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
  !*** ./src/quicktask/cashout/index.ux?uxType=page ***!
  \****************************************************/

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/cashout/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/cashout/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/cashout/index.ux?uxType=page&")

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
(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/web/index.ux?uxType=page":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/quicktask/web/index.ux?uxType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  data: {
    websrc: '',
    seconds: 30,
    tips: "剩余",
    intervalStarted: false,
    interval: null,
    item: null,
    titleBarParams: {
      type: 'titleBar',
      config: {
        'titleBarShow': true
      }
    },
    progress: 0
  },

  onInit() {
    this.websrc = this.url;
    console.log("this.itemStatus");
    console.log(this.itemC);
    this.item = JSON.parse(this.itemC);
    console.log(this.item);
  },

  onDestroy() {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },

  onPageFinish(evt) {
    if (this.intervalStarted) {
      return;
    }

    this.IntervalStarted = true;
    this.interval = setInterval(() => {
      if (this.seconds <= 0) {
        this.tips = "完成任务";
        clearInterval(this.interval);
      } else {
        this.seconds--;

        if (this.seconds == 0) {
          _system2.default.fetch({
            url: 'http://k1.uochen.com/application/task/?token=' + $manager.getToken() + '&taskid=' + this.item.id,
            method: 'POST',
            responseType: 'json',
            success: response => {
              this.item.status = 3;
              this.item.num = this.item.num - 1;
            },
            fail: function (data, code) {
              console.log(`handling fail, errMsg = ${data}`);
              console.log(`handling fail, errCode = ${code}`);
            }
          });
        }
      }
    }, 1000);
  },

  onProgress(evt) {
    this.progress = evt.progress;
  },

  onShow() {
    $umeng_stat.resume(this);
  },

  onHide() {
    $umeng_stat.pause(this);
    $manager.setAppData('dataFromWeb', {
      destPageName: 'index',
      params: {
        taskItem: this.item
      }
    });
  },

  onBackPress() {
    console.info(`触发：onBackPress`, $manager.getChannel(), $manager.getNoBackDialog(), $manager.getBackDialogNormalMode());
    this.$element('web').canBack({
      callback: function (e) {
        if (e) {
          this.$element('web').back();
        } else {
          if ($manager.getChannel() == "" || $manager.getNoBackDialog()) {
            _system3.default.back();

            return false;
          }

          this.$child('back-dialog').changeBtnText(true);
          this.$child('back-dialog').show();
        }
      }.bind(this)
    });
    return true;
  },

  onBack() {
    _system3.default.back();
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/components/ad/cnative-ad.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/quicktask/components/ad/cnative-ad.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _service = _interopRequireDefault($app_require$("@app-module/service.ad"));

var _config = __webpack_require__(/*! ../../../config */ "./src/config/index.js");

var _system = _interopRequireDefault($app_require$("@app-module/system.device"));

var _report = _interopRequireDefault(__webpack_require__(/*! ../../helper/report.js */ "./src/quicktask/helper/report.js"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  data: {
    provider: '',
    adUnitId: '',
    ad: null,
    adList: [{
      adId: 0,
      title: '',
      desc: '',
      imgUrlList: []
    }],
    adEvent: {},
    tryLoadAdNum: 0,
    isLoading: false,
    visibled: false,
    isReportLoad: false,
    error: false,
    isNative2: false,
    native2ShowReported: false,
    isClicked: false,
    userClickShow: false,
    iconSwitch: true,
    nativeADV: true,
    titleSwitch: true,
    hasMoreData: true,
    nativeId: _config.zonstNativeId,
    zonstEnabled: false,
    txtStyle: {
      'font-size': '20px',
      'color': 'red'
    },
    imageStyle: {
      'height': '360px',
      'width': '700px'
    }
  },
  props: {
    adKey: {
      default: ''
    },
    token: {
      default: ''
    },
    delay: {
      default: false
    }
  },

  onInit() {
    console.log("cnative-ad oninit ");
  },

  start() {
    console.log("----start------");
    console.log(this.isClicked, this.error, this.adList[0].adId);

    if (!this.isClicked && !this.error && (this.adList[0].adId > 0 || this.adList[0].adId.length > 1)) {
      console.log("cnative-ad 不重新加载");
      return;
    }

    this.visibled = false;
    this.error = false;

    try {
      this.loadAd();
    } catch (e) {
      console.log(e);
    }
  },

  async loadAd() {
    let brand = $manager.getBrand();
    this.provider = brand;
    this.isLoading = true;
    this.isReportLoad = false;
    this.isClicked = false;
    this.adUnitId = _config.adconfig[this.adKey] ? _config.adconfig[this.adKey].adUnitId[brand] : '';

    if (brand == "vivo") {
      this.loadAd2();
    } else {
      this.ad = await $app_require$('@app-module/service.ad').createNativeAd({
        adUnitId: this.adUnitId
      });

      if (!this.ad || typeof this.ad !== 'object') {
        console.log("cnative-ad loadAd(), this.ad != object ", this.ad);
        return;
      }

      this.onEvent('Error');
      this.onEvent('Load');

      if (!this.ad) {
        console.log("loadAd() ad null");
        return;
      }

      console.log("loadAd");
      this.ad.load();
    }

    _report.default.adRequest(this.adKey);
  },

  reportAdClick(adId) {
    if (this.isLoading) {
      this.isLoading = false;

      _system2.default.showToast({
        message: "正在加载，请稍后点击"
      });

      return;
    }

    if (!!adId && this.ad) {
      this.isClicked = true;
      this.ad.reportAdClick({
        adId
      });
      this.$emit('reportclick', adId);

      _report.default.adClick(this.adKey);
    } else if (!!adId && !!this.ad) {} else {
      _system2.default.showToast({
        message: "加载失败，请稍后再试"
      });
    }
  },

  reportAdShow(adId) {
    if (this.adList.length === 0) return;
    this.ad.reportAdShow({
      adId
    });
    this.$emit('reportshow', adId);
    console.log("广告显示", this.adKey);

    _report.default.adShow(this.adKey);
  },

  onEvent(event) {
    if (!this.ad) {
      return;
    }

    if (!this.adEvent[event]) {
      this.adEvent[event] = [];
    }

    let fn = null;

    if (event === 'Load') {
      fn = res => {
        this.isLoading = false;
        this.adList = res.adList;
        console.log("cnative-ad load  success", this.delay);
        console.log(res);

        if (this.delay) {
          console.log("cnative-ad load  delay", this.delay);
          setTimeout(() => {
            this.visibled = true;
            this.$emit('load', res);

            if (!this.isReportLoad) {
              this.isReportLoad = true;

              _report.default.adLoad(this.adKey);
            }
          }, 500);
        } else {
          this.visibled = true;
          this.$emit('load', res);

          if (!this.isReportLoad) {
            this.isReportLoad = true;

            _report.default.adLoad(this.adKey);
          }
        }
      };
    } else {
      fn = res => {
        if ($manager.getZonstEnabled()) {
          this.zonstEnabled = true;

          _report.default.adZonstRequest(this.adKey);
        }

        console.log("native-ad error", this.adUnitId, res);
        this.isLoading = false;

        if (!this.error) {
          this.error = true;
          this.$emit('error');

          try {
            $umeng_stat.trackEvent('native-ad-error', {
              'code': res.errCode + "",
              'msg': res.errMsg,
              'adKey': this.adKey,
              'provider': $manager.getBrand()
            });
          } catch (e) {
            console.log(e);
          }
        }
      };
    }

    this.ad[`on${event}`](fn);
    this.adEvent[event].push(fn);
  },

  closeAd(e) {
    console.log("closeAd");
    this.$emit('close');
    this.visibled = false;
  },

  hideAd() {
    this.destroyAd();
    this.adList = [{
      adId: 0,
      title: '',
      desc: '',
      imgUrlList: []
    }];
  },

  onDestroy() {
    this.destroyAd();
  },

  destroyAd() {
    if (!this.ad) {
      return;
    }

    try {
      this.ad.destroy();
      this.ad = null;
      this.adEvent = {};
    } catch (e) {
      console.log(e);
    }
  },

  openAd() {
    console.log("openAd");

    if (this.zonstEnabled) {
      this.zonstclick();
    } else if (this.adList) {
      console.log(this.adList);
      this.reportAdClick(this.adList[0].adId);
    }
  },

  loadAd2() {
    this.isNative2 = true;
    this.native2ShowReported = false;

    $app_require$('@app-module/service.ad').preloadAd({
      adUnitId: this.adUnitId,
      type: 'native',
      success: data => {
        this.adList = data.adList;
        console.log("loadAd2", this.adList[0].adId, data);
        this.zonstEnabled = false;
        this.isLoading = false;
        this.visibled = true;
        this.$emit("native2Show");

        _report.default.adLoad(this.adKey);
      },
      fail: (data, code) => {
        console.log("loadAd2 fail:", this.adUnitId);
        console.log(data, code, this.zonstEnabled);

        if (code === 205) {
          this.adList = data.adList;
          this.isLoading = false;
          this.visibled = true;
          this.$emit("native2Show");

          _report.default.adLoad(this.adKey);
        } else {
          this.$emit("native2Error");
          this.isLoading = false;
          this.error = true;
          this.$emit('error');

          try {
            $umeng_stat.trackEvent('native-ad-error', {
              'code': data.errCode,
              'msg': data.errMsg,
              'adKey': this.adKey,
              'provider': $manager.getBrand()
            });
          } catch (e) {
            console.log(e);
          }
        }

        if ($manager.getZonstEnabled()) {
          this.zonst = true;

          _report.default.adZonstRequest(this.adKey);
        }
      }
    });
  },

  error2(errCode, errMsg) {
    console.log(`error2 : errCode = ${errCode}, errMsg = ${errMsg}`);
    $umeng_stat.trackEvent('native-ad-error', {
      'code': errCode + "",
      'msg': errMsg,
      'adKey': this.adKey,
      'provider': $manager.getBrand()
    });
  },

  adClick2() {
    this.isClicked = true;

    _report.default.adClick(this.adKey);

    setTimeout(() => {
      this.$emit('reportclick', this.adList[0].adId);
    }, 200);
  },

  close2() {
    this.closeAd();
  },

  reportAdShow2(adId) {
    if (this.adList.length === 0 || this.native2ShowReported) return;
    this.native2ShowReported = true;
    this.$emit('reportshow', adId);
    console.log("广告显示2", this.adKey, $manager.getChannel());

    _report.default.adShow(this.adKey);
  },

  clickShow() {
    this.userClickShow = true;
  },

  clickHide() {
    this.userClickShow = false;
  },

  zonstclick() {
    this.isClicked = true;

    _report.default.adZonstClick(this.adKey);

    this.$emit('reportclick');
    this.$child('nativecuo').clickNativeImg();
    setTimeout(() => {
      this.zonstEnabled = false;
    }, 800);
  },

  zonstclose() {
    this.$child('nativecuo').nativeClose();
  },

  zonstadShow() {
    console.log('展示原生广告');

    _report.default.adZonstShow(this.adKey);

    this.$emit('load');
  },

  zonstadNativeError() {
    this.$emit('error');
  },

  zonstadNativeClosed() {
    this.closeAd();
    console.log('原生广告关闭');
  },

  zonstaadClick() {
    this.$emit('reportclick');

    _report.default.adZonstClick(this.adKey);
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/components/ad/reward-ad.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/quicktask/components/ad/reward-ad.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _service = _interopRequireDefault($app_require$("@app-module/service.ad"));

var _config = __webpack_require__(/*! ../../../config */ "./src/config/index.js");

var _system = _interopRequireDefault($app_require$("@app-module/system.device"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _report = _interopRequireDefault(__webpack_require__(/*! ../../helper/report.js */ "./src/quicktask/helper/report.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  data: {
    adUnitId: '',
    rewardedVideoAd: null,
    isPreload: false,
    error: false,
    showPalyToast: false
  },
  props: {
    adKey: {
      default: ''
    },
    preloadad: {
      default: true
    }
  },

  onInit() {
    console.log("reward-ad onInit");

    if (this.preloadad) {
      console.log("reward-ad onInit preloadad");
      this.preload();
    }
  },

  preload() {
    this.isPreload = true;
    this.error = false;
    let brand = $manager.getBrand();

    try {
      this.adUnitId = _config.adconfig[this.adKey] ? _config.adconfig[this.adKey].adUnitId[brand] : '';
      console.log("adId ", this.adUnitId);
      this.rewardedVideoAd = _service.default.createRewardedVideoAd({
        adUnitId: this.adUnitId
      });
    } catch (e) {
      console.log(e);
    }
  },

  reload() {
    if (this.rewardedVideoAd != null) {
      try {
        this.rewardedVideoAd.offLoad();
        this.rewardedVideoAd.offClose();
        this.rewardedVideoAd.offError();
        this.rewardedVideoAd = null;
      } catch (e) {
        console.log(e);
      }
    }

    this.preload();
  },

  show() {
    this.isPreload = false;
    this.start();
  },

  showWithoutLoad() {
    if (this.isPreload && this.rewardedVideoAd != null) {
      this.isPreload = false;
      this.rewardedVideoAd.show().then(() => {
        console.log("显示成功");

        if (this.showPalyToast) {
          _system2.default.showToast({
            message: "视频播放完可获取奖励"
          });
        }

        _report.default.adShow(this.adKey);
      }).catch(e => {
        console.log(e);
      });
    } else if (!this.isPreload) {
      this.show();
    }
  },

  start() {
    this.isPreload = false;
    this.error = false;
    this.loadAd();
  },

  loadAd() {
    if (this.rewardedVideoAd == null) {
      let brand = $manager.getBrand();
      console.log("reward loadAd", "rewardedVideoAd null, new ");
      console.log(this.adKey);
      this.adUnitId = _config.adconfig[this.adKey] ? _config.adconfig[this.adKey].adUnitId[brand] : '';
      console.log("adId ", this.adUnitId);
      this.rewardedVideoAd = _service.default.createRewardedVideoAd({
        adUnitId: this.adUnitId
      });
      console.log(this.rewardedVideoAd);
    }

    try {
      this.rewardedVideoAd.onLoad(() => {
        console.log("广告加载成功");
        this.$emit('load');

        _report.default.adLoad(this.adKey);

        if (!this.isPreload) {
          this.rewardedVideoAd.show().then(() => {
            console.log("显示成功");

            if (this.showPalyToast) {
              _system2.default.showToast({
                message: "视频播放完可获取奖励"
              });
            }

            _report.default.adShow(this.adKey);
          }).catch(e => {
            console.log(e);
          });
        }
      });
      this.rewardedVideoAd.onError(err => {
        if (!this.error) {
          this.error = true;
          console.log('广告加载失败', err);

          if (this.showPalyToast) {
            _system2.default.showToast({
              message: "视频加载失败，请稍后重试"
            });
          }

          this.$emit('error', err);

          try {
            $umeng_stat.trackEvent('reward-ad-error', {
              'code': err.errCode + "",
              'msg': err.errMsg,
              'adKey': this.adKey,
              'provider': $manager.getBrand()
            });
          } catch (e) {
            console.log(e);
          }
        }
      });
      this.rewardedVideoAd.onClose(res => {
        if (this.rewardedVideoAd != null) {
          this.rewardedVideoAd.offLoad();
          this.rewardedVideoAd.offClose();
          this.rewardedVideoAd.offError();
          this.rewardedVideoAd = null;
        }

        if (res && res.isEnded) {
          this.onReward();

          _report.default.adClick(this.adKey);

          console.log("正常播放结束，可以下发奖励");
        } else {
          console.log('播放中途退出，不下发游戏奖励');

          if (this.showPalyToast) {
            _system2.default.showToast({
              message: "视频未完整播放，获取奖励失败"
            });
          }
        }
      });
      this.rewardedVideoAd.load().then(() => {
        console.log("sssss");
      }).catch(err => {
        console.log(err);
      });

      _report.default.adRequest(this.adKey);
    } catch (e) {
      console.log(e);
    }
  },

  onReward() {
    console.log("onReward");
    this.$emit('onReward', '');
  },

  setShowPalyToast(show) {
    this.showPalyToast = show;
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/components/dialog/backpress-dialog.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./src/quicktask/components/dialog/backpress-dialog.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: {
    cancelText: '否',
    okText: '退出',
    cancelColor: '#bbb',
    cancelBackground: '',
    cancelRadius: '0px',
    normalMode: false,
    showButton: true,
    showRewardAd: false
  },
  props: {
    token: {
      default: ''
    }
  },

  onInit() {},

  show() {
    this.$child('back-dialog').show();
    this.$child('cnative-ad').clickShow();
    this.$child('cnative-ad').start();
  },

  hide() {
    this.$child('cnative-ad').clickHide();
    this.$child('back-dialog').hide();
  },

  handleAdClose() {
    this.hide();
  },

  exit() {
    this.$emit('onBack');
    this.hide();
  },

  watchAd() {
    this.$child('cnative-ad').openAd();

    if (this.showRewardAd) {
      this.$child("reward-ad").show();
      setTimeout(() => {
        this.$emit('onBack');
      }, 1000);
    } else {
      this.$emit('onBack');
    }

    this.hide();
  },

  changeBtnText(normal) {
    if (this.normalMode == normal) {
      return;
    }

    this.normalMode = normal;

    if (normal) {
      this.cancelText = "退出";
      this.okText = "是";
      this.cancelColor = '#000';
      this.cancelBackground = '#ccc';
      this.cancelRadius = "20px";
    } else {
      this.cancelText = "否";
      this.okText = "退出";
      this.cancelColor = '#bbb';
      this.cancelBackground = '';
      this.cancelRadius = "0px";
    }
  },

  native2Show() {
    this.showButton = false;
  },

  native2Error() {
    this.showButton = true;
    this.showRewardAd = true;
  },

  nativeError() {
    this.showRewardAd = true;
  },

  loadRewardAdSuccess() {},

  loadRewardAdError() {},

  onReward() {}

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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!./src/quicktask/Zonst/unit/index.js?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!./src/quicktask/Zonst/unit/index.js?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _storage = _interopRequireDefault(__webpack_require__(/*! ../storage.js */ "./src/quicktask/Zonst/storage.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! ../index.js */ "./src/quicktask/Zonst/index.js"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.package"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.request"));

var _system5 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listflag = !![];
var _default = {
  'props': ['title_flag', 'nativeadid', 'title_style', 'nativeflag', 'image_style', 'icon_flage', 'eyecareflag', 'eyecarecheck', 'eyecaretimer', 'eyecareadvid', 'placementid', 'advtype', 'quitflag', 'quittimer', 'quitadvid'],
  'data': {
    'showNative': ![],
    'indexNumber': '',
    'setdata': null,
    'loadData': ![],
    'isTimeQuitCheck': !![],
    'isclose': ![],
    'adShow': ![],
    'openTime': '',
    'isTimeEyeCheck': ![],
    'setTimeShow': ![],
    'isCheckNow': ![],
    'isSetOver': ![],
    'overCheck': ![],
    'setTime': '',
    'isloading': ![],
    'data_test': '',
    'check': '',
    'showEyeScreen': ![],
    'showQuitScreen': ![],
    'dowenload': null,
    'awakenUrl': null,
    'getdata': null,
    'mutatordata': null,
    'validity': [],
    'count': 0x0,
    'ua': '',
    'showtime': '',
    'api_great': {
      'zz_time': '',
      'zz_ts_time': '',
      'zz_width': '640',
      'zz_height': '320',
      'zz_down_x': '',
      'zz_down_y': '',
      'zz_up_x': '',
      'zz_up_y': '',
      'zz_down_ax': '',
      'zz_down_ay': '',
      'zz_up_ax': '',
      'zz_up_ay': '',
      'zz_loc_x': '',
      'zz_loc_y': '',
      'zz_clk_d': '',
      'zz_response_time': '',
      'zz_ready_time': '',
      'zz_show_time': '',
      'zz_click_time': ''
    },
    'adData': {
      'title': '',
      'ad_id': '',
      'ad_name': '',
      'ad_weight': '',
      'apk_url': '',
      'app_name': '',
      'img_url': '',
      'status': '0',
      'download_url': '',
      'tp': '',
      'ad_type': '',
      'ptss': [],
      'ptcs': [],
      'down_finish': [],
      'down_start': [],
      'install_finish': [],
      'install_start': [],
      'pkg': '',
      'zdf': '',
      'zds': '',
      'zif': '',
      'zis': ''
    },
    'eye_confirm': '查\x20看',
    'exit_confirm': '查\x20看',
    'confirm_button_color': '#ff475c',
    'exit_ifont_color': '#aaaaaa'
  },

  'nativeClose'() {
    this['showNative'] = ![];
    this['$emit']('ad_closed');
  },

  async 'onInit'() {
    this['$watch']('quitflag', 'watchquitflagChange');
    this['setTime'] = this['eyecaretimer'];
    this['$watch']('eyecarecheck', 'watchScreeTimeCheck');

    if (this['nativeflag'] && listflag === !![]) {
      listflag = ![];
      this['listdata']();
    } else if (this['nativeflag'] && listflag === ![]) {
      this['listdata']();
    }
  },

  async 'listdata'() {
    let _0x45a387 = this;

    _0x45a387['getdata'] = await _0x45a387['postdata'](_0x45a387['nativeadid']);

    _0x45a387['judgeFlow'](0x3);
  },

  async 'watchScreeTimeCheck'(_0x4f1dce) {
    let _0x49144d = this;

    if (_0x4f1dce) {
      if (!_0x49144d['isloading']) {
        _0x49144d['overCheck'] = !![];

        let _0x33f351 = new _storage.default('showAdvTime');

        clearTimeout(await _0x33f351['get']());
        await this['getShowEyeScreen']();
      } else {
        this['overCheck'] = !![];

        let _0x2c5508 = new _storage.default('showAdvTime');

        clearTimeout(await _0x2c5508['get']());
        await this['getShowEyeScreen']();
      }
    }
  },

  async 'watchquitflagChange'(_0x6177e8) {
    this['loadData'] = ![];

    let _0x128a5a = this;

    if (_0x6177e8) {
      _0x128a5a['setTime'] = _0x128a5a['quittimer'];
      await _0x128a5a['getShowQuiteScreen']();

      let _0x3c5c88 = new _storage.default('showAdvTime');

      clearTimeout(await _0x3c5c88['get']());
      _0x128a5a['showQuitScreen'] = _0x6177e8;
    } else {
      _0x128a5a['showQuitScreen'] = _0x6177e8;
    }
  },

  async 'getShowEyeScreen'() {
    let _0x17c97b = this;

    _0x17c97b['isloading'] = !![];

    _0x17c97b['goShowAdv'](_0x17c97b['setTime']);
  },

  async 'goShowAdv'(_0x59acb5) {
    let _0x5d0c15 = this;

    let _0x23d1d5 = new _storage.default('itls');

    _0x5d0c15['showEyeScreen'] = !![];

    let _0x2d5409 = new _storage.default('showAdvTime');

    if (await _0x23d1d5['get']()) {
      let _0x28a6b5 = setTimeout(() => {
        _0x5d0c15['showAdv']();
      }, ((await _0x23d1d5['get']()) > _0x59acb5 ? _0x59acb5 : await _0x23d1d5['get']()) * 0xea60);

      _0x2d5409['set'](_0x28a6b5);
    } else {
      let _0xffd3af = setTimeout(() => {
        _0x5d0c15['showAdv']();
      }, _0x59acb5 * 0xea60);

      _0x2d5409['set'](_0xffd3af);
    }
  },

  async 'showAdv'() {
    let _0x440305 = this;

    let _0x2e899e = new _storage.default('setTimeAboutAdv');

    let _0x1d034b = await _0x2e899e['get']();

    var _0x5c70fa = Math['round'](new Date()['getTime']() / 0x3e8);

    if (_0x1d034b === null) {
      _0x440305['isTimeEyeCheck'] = !![];
    } else {
      if (_0x5c70fa - _0x1d034b > 0x708) {
        _0x440305['isTimeEyeCheck'] = !![];
      } else {
        _0x440305['isTimeEyeCheck'] = ![];
      }
    }

    let _0x3ab9ef = new _storage.default('showAdvTime');

    clearTimeout(await _0x3ab9ef['get']());
    _0x440305['isloading'] = ![];
    _0x440305['showEyeScreen'] = !![];
    _0x440305['overCheck'] = ![];

    if (_0x440305['eyecareflag']) {
      _0x440305['getdata'] = await _0x440305['postdata'](_0x440305['eyecareadvid']);

      _0x440305['judgeFlow'](0x1);
    }
  },

  async 'checkbtn'(_0x49a5ff) {
    let _0x2469a2 = new _storage.default('at');

    switch (await _0x2469a2['get']()) {
      case 0x0:
        var _0x358f96 = this;

        let _0x5d2764 = new _storage.default('setTimeAboutAdv');

        var _0x438dbf = Math['round'](new Date()['getTime']() / 0x3e8);

        if (_0x49a5ff === 'check') {
          _0x358f96['isCheckNow'] = !_0x358f96['isCheckNow'];
        } else {
          if (_0x358f96['isCheckNow']) {
            _0x5d2764['set'](_0x438dbf);

            _0x358f96['check'] = !![];
            _0x358f96['isTimeEyeCheck'] = ![];
          } else {
            _0x5d2764['set'](null);
          }

          _0x358f96['clickEyeScreenImg']();
        }

        break;

      default:
        this['clickEyeScreenImg']();
    }
  },

  async 'judgeFlow'(_0x44bfdb) {
    let _0x2e569e = this;

    if (_0x2e569e['getdata']) {
      if (_0x2e569e['getdata']['hasOwnProperty']('eye_confirm') && _0x2e569e['getdata']['eye_confirm'] != '') {
        let _0x21e2e7 = {
          'eye_confirm': _0x2e569e['getdata']['eye_confirm'],
          'exit_confirm': _0x2e569e['getdata']['exit_confirm'],
          'confirm_button_color': _0x2e569e['getdata']['confirm_button_color'],
          'exit_ifont_color': _0x2e569e['getdata']['exit_ifont_color']
        };

        let _0xd0a2a1 = new _storage.default('setStyle');

        _0xd0a2a1['set'](_0x21e2e7);
      }
    }

    let _0x16892b = new _storage.default('postData');

    let _0x2a675f = await _0x16892b['get']();

    switch (_0x2e569e['getdata']) {
      case '1':
        _0x2e569e['$emit']('ad_error');

        break;

      case null:
        if (_0x2a675f['status'] != 0x0) {
          let _0x4df037 = new _storage.default('postDataTime');

          _0x4df037['delete']();

          _0x2e569e['getShowQuiteScreen']();
        } else {
          let _0x202e0c = new _storage.default('mutatordata');

          _0x2e569e['mutatordata'] = await _0x202e0c['get']();

          if (_0x2e569e['mutatordata'] != null) {
            _0x2e569e['sortdata'](_0x2e569e['mutatordata'], _0x44bfdb);
          } else {
            _0x2e569e['returndata'](_0x2a675f, _0x44bfdb);
          }
        }

        break;

      default:
        if (_0x2e569e['getdata']['status'] === 0x0) {
          let _0xdc5199 = this;

          _0xdc5199['returndata'](_0xdc5199['getdata']['datas'], _0x44bfdb);

          let _0x19c9ba = new _storage.default('itls');

          _0x19c9ba['set'](_0xdc5199['getdata']['datas']['itls']);
        } else {
          _index.default['printErro'](_0x2e569e['getdata']['status']);

          _0x2e569e['$emit']('ad_error');
        }

    }
  },

  async 'getShowQuiteScreen'() {
    let _0x10bb29 = this;

    let _0x5a9a3b = _0x10bb29['setTime'];

    var _0x4d44a4 = Math['round'](new Date()['getTime']() / 0x3e8);

    let _0x1526c4 = new _storage.default('setTimeAboutExitAdv');

    let _0x2e4f0c = await _0x1526c4['get']();

    if (_0x2e4f0c === null || _0x4d44a4 - _0x2e4f0c >= _0x5a9a3b) {
      _0x10bb29['getdata'] = await _0x10bb29['postdata'](_0x10bb29['quitadvid']);

      _0x10bb29['judgeFlow'](0x0);
    } else {
      _0x10bb29['isTimeQuitCheck'] = ![];

      _0x10bb29['leaveOutPage'](_0x10bb29['advtype']);
    }
  },

  async 'allQuitScreenImg'() {
    let _0x2026b2 = this;

    let _0xa09eaa = new _storage.default('at');

    if ((await _0xa09eaa['get']()) === 0x2) {
      _0x2026b2['clickQuitScreenImg']();
    } else {
      null;
    }
  },

  async 'allEyeScreenImg'() {
    let _0xa3575e = this;

    let _0x5d9e1b = new _storage.default('at');

    if ((await _0x5d9e1b['get']()) === 0x2) {
      _0xa3575e['clickEyeScreenImg']();
    } else {
      null;
    }
  },

  async 'forcedQuitClick'() {
    let _0x681520 = this;

    let _0x209e06 = new _storage.default('at');

    if ((await _0x209e06['get']()) !== 0x0) {
      _0x681520['clickQuitScreenImg']();
    } else {
      null;
    }
  },

  async 'forcedEyeClick'() {
    let _0xc9672c = this;

    let _0x44e7ac = new _storage.default('at');

    if ((await _0x44e7ac['get']()) !== 0x0) {
      _0xc9672c['clickEyeScreenImg']();
    } else {
      null;
    }
  },

  async 'leaveOutPage'(_0x47fc04) {
    let _0x285af3 = this;

    let _0x49670d = new _storage.default('at');

    if ((await _0x49670d['get']()) === null) {
      if (_0x47fc04 == 0x2) {
        this['$app']['exit']();
      } else {
        _system.default['back']();
      }
    } else {
      if ((await _0x49670d['get']()) !== 0x0) {
        _0x285af3['clickQuitScreenImg']();
      } else {
        _0x285af3['clickQuitClose']();

        if (_0x47fc04 == 0x2) {
          _0x285af3['$app']['exit']();
        } else {
          _system.default['back']();
        }
      }
    }
  },

  async 'conmmonClick'() {
    let _0xdd285a = this;

    let _0x4fa9e8 = new _storage.default('at');

    if ((await _0x4fa9e8['get']()) != 0x0) {
      _0x4fa9e8['set'](0x0);
    } else {
      null;
    }

    if (_0xdd285a['adData']['ptcs']['length'] != 0x0) {
      for (let _0x372174 = 0x0; _0x372174 < _0xdd285a['adData']['ptcs']['length']; _0x372174++) {
        this['urlReplace'](_0xdd285a['adData']['ptcs'][_0x372174]['toString']());
      }
    }

    _index.default['requestFnc'](_0xdd285a['adData']['clickTrack'], {}, 'POST');

    if (_0xdd285a['adData']['ad_type'] == 0x2) {
      let _0x915d86 = await this['gettoken'](_0xdd285a['adData']['download_url']);

      _system4.default['onDownloadComplete']({
        'token': _0x915d86,
        'success': function (_0x15e3b3) {
          _0xdd285a['$emit']('ad_show');

          _system5.default['showToast']({
            'message': '开始下载....'
          });

          _system.default['push']({
            'uri': _0x15e3b3['uri']
          });
        },
        'fail': function () {
          _system5.default['showToast']({
            'message': '下载失败....'
          });

          _0xdd285a['$emit']('ad_error');
        }
      });
    } else if (_0xdd285a['adData']['ad_type'] == 0x3) {
      let _0x102641 = decodeURIComponent(_0xdd285a['adData']['download_url']);

      _0x102641 = _0x102641['replace']('zz_width', this['api_great']['zz_width']);
      _0x102641 = _0x102641['replace']('zz_height', this['api_great']['zz_height']);
      _0x102641 = _0x102641['replace']('zz_down_x', this['api_great']['zz_down_x']);
      _0x102641 = _0x102641['replace']('zz_down_y', this['api_great']['zz_down_y']);
      _0x102641 = _0x102641['replace']('zz_up_x', this['api_great']['zz_up_x']);
      _0x102641 = _0x102641['replace']('zz_up_y', this['api_great']['zz_up_y']);

      try {
        var _0x221288 = await _system2.default['fetch']({
          'header': {
            'User-Agent': _0xdd285a['ua']
          },
          'url': _0x102641
        });
      } catch (_0x223493) {
        _0xdd285a['$emit']('ad_error');
      }

      let _0x5bb537 = JSON['parse'](_0x221288['data']['data']);

      let _0x259cf3 = _0x5bb537['data']['clickid'];

      let _0x283d0d = await this['gettoken'](_0x5bb537['data']['dstlink']);

      if (_0x283d0d && _0xdd285a['adData']['down_start'][0x0] != '') {
        let _0x5360a2 = _0xdd285a['adData']['down_start'][0x0]['replace']('zz_click_id', _0x259cf3);

        _system2.default['fetch']({
          'header': {
            'User-Agent': _0xdd285a['ua']
          },
          'url': _0x5360a2
        });

        _system2.default['fetch']({
          'header': {
            'User-Agent': _0xdd285a['ua']
          },
          'url': _0xdd285a['adData']['zds']
        });
      }

      _system4.default['onDownloadComplete']({
        'token': _0x283d0d,
        'success': function (_0x5912eb) {
          if (_0xdd285a['adData']['down_finish'][0x0] != '') {
            let _0x752d07 = _0xdd285a['adData']['down_finish'][0x0]['replace']('zz_click_id', _0x259cf3);

            _system2.default['fetch']({
              'header': {
                'User-Agent': _0xdd285a['ua']
              },
              'url': _0x752d07
            });

            if (_0xdd285a['adData']['zdf'] != '') _system2.default['fetch']({
              'header': {
                'User-Agent': _0xdd285a['ua']
              },
              'url': _0xdd285a['adData']['zdf']
            });
          }

          _system.default['push']({
            'uri': _0x5912eb['uri']
          });

          if (_0xdd285a['adData']['install_start'][0x0] != '') {
            let _0x3499f1 = _0xdd285a['adData']['install_start'][0x0]['replace']('zz_click_id', _0x259cf3);

            _system2.default['fetch']({
              'header': {
                'User-Agent': _0xdd285a['ua']
              },
              'url': _0x3499f1
            });

            if (_0xdd285a['adData']['zis'] != '') {
              _system2.default['fetch']({
                'header': {
                  'User-Agent': _0xdd285a['ua']
                },
                'url': _0xdd285a['adData']['zis']
              });
            }
          }

          let _0x3c526c = 0x1;

          _0xdd285a['judgeInstall'](_0x259cf3, _0x3c526c);
        },
        'fail': function () {
          _system5.default['showToast']({
            'message': '下载失败....'
          });

          _0xdd285a['$emit']('ad_error');
        }
      });
    } else if (_0xdd285a['adData']['ad_type'] == 0x4) {
      let _0x34470f = decodeURIComponent(_0xdd285a['adData']['download_url']);

      _0x34470f = _0x34470f['replace']('zz_width', this['api_great']['zz_width']);
      _0x34470f = _0x34470f['replace']('zz_height', this['api_great']['zz_height']);
      _0x34470f = _0x34470f['replace']('zz_down_x', this['api_great']['zz_down_x']);
      _0x34470f = _0x34470f['replace']('zz_down_y', this['api_great']['zz_down_y']);
      _0x34470f = _0x34470f['replace']('zz_up_x', this['api_great']['zz_up_x']);
      _0x34470f = _0x34470f['replace']('zz_up_y', this['api_great']['zz_up_y']);

      _system.default['push']({
        'uri': _0x34470f
      });
    } else {
      _system.default['push']({
        'uri': _0xdd285a['adData']['download_url']
      });
    }
  },

  async 'clickedArry'() {
    let _0x5158f5 = this;

    let _0x1432fd = new _storage.default('clickid');

    let _0x182ac0 = await _0x1432fd['get']();

    if (_0x182ac0 == null) {
      let _0x2d0c66 = [];

      _0x2d0c66['push'](_0x5158f5['adData']['ad_id']);

      _0x1432fd['set'](_0x2d0c66);
    } else {
      _0x182ac0['push'](_0x5158f5['adData']['ad_id']);

      _0x1432fd['set'](_0x182ac0);
    }
  },

  'clickNativeImg'() {
    this['clickedArry']();
    this['conmmonClick']();
  },

  'clickQuitScreenImg'() {
    this['clickQuitClose']();

    var _0x170cf6 = Math['round'](new Date()['getTime']() / 0x3e8);

    let _0x14a468 = new _storage.default('setTimeAboutExitAdv');

    _0x14a468['set'](_0x170cf6);

    this['isClickImg'] = !![];
    this['clickedArry']();
    this['conmmonClick']();
  },

  'clickEyeScreenImg'() {
    this['clickEyeClose']();

    let _0x122036 = new _storage.default('setTimeAboutClick');

    var _0x5a1890 = Math['round'](new Date()['getTime']() / 0x3e8);

    _0x122036['set'](_0x5a1890);

    this['clickedArry']();
    this['conmmonClick']();
  },

  async 'gettoken'(_0x49373a) {
    let _0x590532 = this;

    return new Promise(_0x237a26 => {
      _system4.default['download']({
        'url': _0x49373a,
        'header': {
          'User-Agent': _0x590532['ua']
        },
        'filename': _0x590532['adData']['pkg'] + 'stand.apk',
        'success': function (_0x233b94) {
          _0x237a26(_0x233b94['token']);
        },
        'fail': function () {
          this['$emit']('ad_error');
        }
      });
    });
  },

  async 'clickQuitClose'() {
    let _0x46b3b8 = this;

    let _0x12b956 = new _storage.default('at');

    switch (await _0x12b956['get']()) {
      case 0x0:
        _0x46b3b8['$emit']('ad_closed', {
          'isShowExitAdv': ![]
        });

        break;

      default:
        _0x46b3b8['clickQuitScreenImg']();

    }
  },

  async 'clickEyeClose'() {
    let _0x1ade8d = new _storage.default('at');

    switch (await _0x1ade8d['get']()) {
      case 0x0:
        var _0x40a3ed = this;

        _0x40a3ed['isclose'] = !![];
        setTimeout(function () {
          _0x40a3ed['showEyeScreen'] = ![], _0x40a3ed['setTimeShow'] = ![];
        }, 0x190);
        this['$emit']('ad_closed');

        _0x40a3ed['goShowAdv'](_0x40a3ed['setTime']);

        break;

      default:
        this['clickEyeScreenImg']();
    }
  },

  async 'urlData'(_0xf45c5c, _0x368851) {
    let _0x5d9dc3 = this;

    return new Promise(_0x5ad2ab => {
      _system3.default['hasInstalled']({
        'package': _0xf45c5c,
        'success': function (_0x13d3bb) {
          if (_0x13d3bb['result']) {
            _0x5ad2ab(_0x5d9dc3['awakenUrl'][_0x368851]);
          } else {
            _0x5ad2ab('');
          }
        },
        'fail': function () {
          _0x5ad2ab(_0x5d9dc3['awakenUrl'][_0x368851]);
        }
      });
    });
  },

  async 'downloadData'(_0x4ecdec, _0x2305d0) {
    let _0x2380e9 = this;

    return new Promise(_0xbe5b74 => {
      _system3.default['hasInstalled']({
        'package': _0x4ecdec,
        'success': function (_0x2f74a7) {
          if (_0x2f74a7['result']) {
            _0xbe5b74('');
          } else {
            _0xbe5b74(_0x2380e9['dowenload'][_0x2305d0]);
          }
        },
        'fail': function () {
          _0xbe5b74('');
        }
      });
    });
  },

  async 'returndata'(_0x1f92af, _0x2ccf2c) {
    let _0x33e2d9 = this;

    let _0x1141de = [];
    let _0x2541aa = [];
    let _0x102b5f = [];
    let _0x16a903 = _0x1f92af;
    _0x33e2d9['validity'] = [];
    this['dowenload'] = _0x16a903['filter'](_0x1e0879 => {
      return _0x1e0879['ad']['ad_type'] == 0x2;
    });
    this['awakenUrl'] = _0x16a903['filter'](_0x1f3fd7 => {
      return _0x1f3fd7['ad']['ad_type'] == 0x0;
    });

    let _0xa23541 = _0x16a903['filter'](_0x13b4a7 => {
      return _0x13b4a7['ad']['ad_type'] == 0x1;
    });

    let _0x981da8 = _0x16a903['filter'](_0xc1a66c => {
      return _0xc1a66c['ad']['ad_type'] >= 0x3;
    });

    _0x1141de['push'](..._0xa23541, ..._0x981da8);

    if (this['dowenload']['length'] > 0x0) {
      for (let _0x75d7f8 = 0x0; _0x75d7f8 < _0x33e2d9['dowenload']['length']; _0x75d7f8++) {
        _0x2541aa['push'](_0x33e2d9['downloadData'](_0x33e2d9['dowenload'][_0x75d7f8]['ad']['pkg'], _0x75d7f8));
      }

      let _0x4f6f06 = await Promise['all'](_0x2541aa)['then'](_0x376a29 => {
        return _0x376a29['filter'](_0x31662d => {
          return _0x31662d !== '';
        });
      });

      _0x1141de['push'](..._0x4f6f06);
    }

    if (this['awakenUrl']['length'] > 0x0) {
      for (let _0x1a823d = 0x0; _0x1a823d < _0x33e2d9['awakenUrl']['length']; _0x1a823d++) {
        _0x102b5f['push'](_0x33e2d9['urlData'](_0x33e2d9['awakenUrl'][_0x1a823d]['ad']['pkg'], _0x1a823d));
      }

      let _0x59444e = await Promise['all'](_0x102b5f)['then'](_0x38209e => {
        return _0x38209e['filter'](_0x5b960e => {
          return _0x5b960e !== '';
        });
      });

      _0x1141de['push'](..._0x59444e);
    }

    for (var _0x4fb626 = 0x0; _0x4fb626 < _0x16a903['length']; _0x4fb626++) {
      if (_0x1141de['indexOf'](_0x16a903[_0x4fb626]) != -0x1) {
        _0x33e2d9['validity']['push'](_0x16a903[_0x4fb626]);
      }
    }

    let _0x3f4e53 = null;

    _0x33e2d9['validity']['sort'](_index.default['compare']('ad', 'w'));

    _0x3f4e53 = new _storage.default('mutatordata');

    _0x3f4e53['set'](_0x33e2d9['validity']);

    this['sortdata'](_0x33e2d9['validity'], _0x2ccf2c);
  },

  async 'sortdata'(_0x401a2c, _0x2cdcc2) {
    let _0x1fa801 = new _storage.default('setStyle');

    let _0x5ebb0b = await _0x1fa801['get']();

    if (_0x5ebb0b === null) {
      null;
    } else {
      this['eye_confirm'] = _0x5ebb0b['eye_confirm'], this['exit_confirm'] = _0x5ebb0b['exit_confirm'], this['confirm_button_color'] = _0x5ebb0b['confirm_button_color'], this['exit_ifont_color'] = _0x5ebb0b['exit_ifont_color'];
    }

    let _0x11acef = this;

    let _0x31369e = new _storage.default('repeatopentime');

    let _0x510ac0 = _index.default['formatDateTime'](Math['round'](new Date()['getTime']() / 0x3e8));

    _0x11acef['count'] = await _index.default['getcount']('count');

    if (_0x11acef['count'] > _0x401a2c['length'] - 0x1) {
      let _0x21c959 = new _storage.default('count');

      _0x21c959['set'](0x0);

      _0x11acef['count'] = 0x0;

      _0x31369e['set'](_0x510ac0);
    }

    let _0x2a71d9 = new _storage.default('clickid');

    let _0x41b706 = await _0x31369e['get']();

    if (_0x41b706 && _0x510ac0 == _0x41b706) {
      let _0x12ddc8 = await _0x2a71d9['get']();

      if (_0x12ddc8 != null) {
        let _0x23cf3d = _0x401a2c['filter'](_0x23cffd => {
          return _0x23cffd['ad']['show_type'] == 0x0;
        });

        let _0x1fdd2c = _0x401a2c['filter'](_0x37b412 => {
          return _0x12ddc8['indexOf'](_0x37b412['ad']['ID']) == -0x1;
        });

        let _0x328854 = _0x23cf3d['concat'](_0x1fdd2c);

        _0x401a2c = _index.default['unique'](_0x328854);

        if (_0x11acef['count'] > _0x401a2c['length'] - 0x1) {
          let _0xd49ebc = new _storage.default('count');

          _0xd49ebc['set'](0x0);

          _0x11acef['count'] = 0x0;
        }
      }
    } else if (_0x41b706 && _0x510ac0 != _0x41b706) {
      _0x31369e['delete']();

      _0x2a71d9['delete']();
    }

    if (_0x401a2c['length']) {
      let _0x33f420 = new _storage.default('at');

      _0x33f420['set'](_0x401a2c[_0x11acef['count']]['ad']['at']);

      let _0x55df34 = {};
      let _0x5b80e9 = null;

      if (_0x401a2c[_0x11acef['count']]['ad']['ad_type'] >= 0x3) {
        let _0x88daab = new _storage.default('advId');

        let _0x3e4980 = await _0x88daab['get']();

        let _0x4b9211 = await _index.default['setData'](_0x3e4980, String(_0x401a2c[_0x11acef['count']]['ad']['ID']));

        if (_0x4b9211['datas']) {
          _0x11acef['ua'] = _0x4b9211['ua'];
          _0x5b80e9 = _0x4b9211['datas'][0x0];
          this['api_great']['zz_response_time'] = new Date()['getTime']();
        } else {
          _0x11acef['sortdata'](_0x401a2c, _0x2cdcc2);
        }
      } else {
        if (_0x401a2c[_0x11acef['count']]['ds']) {
          let _0x3a5869 = await _index.default['dsJudge'](_0x401a2c[_0x11acef['count']]['ds']);

          if (_0x3a5869) {
            _0x5b80e9 = _0x401a2c[_0x11acef['count']];
          } else {
            _0x5b80e9 = await _0x11acef['dsLoop'](_0x401a2c);
          }
        } else {
          _0x5b80e9 = _0x401a2c[_0x11acef['count']];
        }
      }

      _0x55df34 = {
        'ad_id': _0x5b80e9['ad']['ID'],
        'tp': _0x5b80e9['ad']['tp'],
        'product_id': _0x5b80e9['ad']['product_id'],
        'ad_name': _0x5b80e9['ad']['pkg'],
        'ad_title': _0x5b80e9['ad']['title'],
        'imageurl': _0x5b80e9['ad']['rs_link'],
        'action': _0x5b80e9['ad']['at'],
        'weight': _0x5b80e9['ad']['w'],
        'download_url': _0x5b80e9['ad']['ak_link'],
        'clickTrack': _0x5b80e9['click'],
        'displayTrack': _0x5b80e9['show'],
        'ad_type': _0x5b80e9['ad']['ad_type'],
        'ptss': _0x5b80e9['ptss'],
        'ptcs': _0x5b80e9['ptcs'],
        'down_finish': _0x5b80e9['down_finish'],
        'down_start': _0x5b80e9['down_start'],
        'install_finish': _0x5b80e9['install_finish'],
        'install_start': _0x5b80e9['install_start'],
        'pkg': _0x5b80e9['ad']['pkg'],
        'zdf': _0x5b80e9['zdf'],
        'zds': _0x5b80e9['zds'],
        'zif': _0x5b80e9['zif'],
        'zis': _0x5b80e9['zis']
      };
      _0x11acef['adData'] = {
        'title': _0x55df34['ad_title'],
        'ad_id': _0x55df34['ad_id'],
        'ad_name': _0x55df34['ad_name'],
        'ad_weight': _0x55df34['weight'],
        'apk_url': _0x55df34['app_apply'],
        'app_name': _0x55df34['app_apply'],
        'img_url': _0x55df34['imageurl'],
        'displayTrack': _0x55df34['displayTrack'],
        'clickTrack': _0x55df34['clickTrack'],
        'flag': _0x55df34['action'],
        'tp': _0x55df34['tp'],
        'download_url': _0x55df34['download_url'],
        'ad_type': _0x55df34['ad_type'],
        'ptss': _0x55df34['ptss'],
        'ptcs': _0x55df34['ptcs'],
        'down_finish': _0x55df34['down_finish'],
        'down_start': _0x55df34['down_start'],
        'install_finish': _0x55df34['install_finish'],
        'install_start': _0x55df34['install_start'],
        'pkg': _0x55df34['pkg'],
        'zdf': _0x55df34['zdf'],
        'zds': _0x55df34['zds'],
        'zif': _0x55df34['zif'],
        'zis': _0x55df34['zis']
      };

      _index.default['requestFnc'](_0x11acef['adData']['displayTrack'], {}, 'POST');

      if (!_0x2cdcc2) {
        this['loadData'] = !![];
      }

      if (_0x2cdcc2 == 0x3) {
        _0x11acef['showNative'] = !![];
        this['showtime'] = new Date()['getTime']();

        _0x11acef['$emit']('ad_show');
      }

      if (_0x11acef['showQuitScreen'] && _0x11acef['isTimeQuitCheck']) {
        this['api_fshowtime'] = new Date()['getTime']();

        _0x11acef['$emit']('ad_show');
      }

      if (_0x11acef['adData']['download_url'] != '' && _0x2cdcc2 === 0x1) {
        _0x11acef['setTimeShow'] = !![];
        _0x11acef['isclose'] = ![];

        if (_0x11acef['isTimeEyeCheck']) {
          this['showtime'] = new Date()['getTime']();

          _0x11acef['$emit']('ad_show');
        } else {
          _0x11acef['goShowAdv'](_0x11acef['setTime']);
        }
      }

      this['getAdvPosition'](_0x2cdcc2);

      if (_0x11acef['adData']['ptss']['length'] != 0x0) {
        if (_0x2cdcc2 == 0x3) {
          this['api_great']['zz_width'] = Number(_0x11acef['image_style']['width']['replace']('px', ''));
          this['api_great']['zz_height'] = Number(_0x11acef['image_style']['height']['replace']('px', ''));
        } else {
          let _0x477d20 = await this['getMial']('adv_img');

          this['api_great']['zz_width'] = parseInt(Number(_0x477d20['width']));
          this['api_great']['zz_height'] = parseInt(Number(_0x477d20['height']));
        }

        for (let _0x1fd42c = 0x0; _0x1fd42c < _0x11acef['adData']['ptss']['length']; _0x1fd42c++) {
          this['urlReplace'](_0x11acef['adData']['ptss'][_0x1fd42c]['toString']());
        }
      }
    } else {
      _0x11acef['$emit']('ad_error');
    }
  },

  async 'getMial'(_0x1c2de1) {
    if (this['$element'](_0x1c2de1)) {
      return new Promise(_0x7bc45a => {
        this['$element'](_0x1c2de1)['getBoundingClientRect']({
          'success': function (_0x3389f6) {
            _0x7bc45a(_0x3389f6);
          },
          'fail': () => {
            _0x7bc45a({
              'width': 0x280,
              'height': 0x140
            });
          }
        });
      });
    } else {
      return {
        'width': 0x280,
        'height': 0x140
      };
    }
  },

  'imageLoad'() {
    this['api_great']['zz_ready_time'] = new Date()['getTime']();
  },

  'getPosition'(_0x5a4e67) {
    this['api_great']['zz_click_time'] = new Date()['getTime']();
    let _0x5e43a3 = _0x5a4e67['touches'][0x0];
    this['api_great']['zz_down_x'] = parseInt(_0x5e43a3['offsetX']);
    this['api_great']['zz_down_y'] = parseInt(_0x5e43a3['offsetY']);
    this['api_great']['zz_clk_d'] = new Date()['getTime']() - this['showtime'];
    this['api_great']['zz_down_ax'] = parseInt(_0x5e43a3['clientX']);
    this['api_great']['zz_down_ay'] = parseInt(_0x5e43a3['clientY']);
  },

  'getAdvPosition'(_0x470458) {
    let _0x4d130d = this;

    switch (_0x470458) {
      case 0x1:
        this['$element']('adveye')['getBoundingClientRect']({
          'success': function (_0x56b5cc) {
            _0x4d130d['api_great']['zz_loc_x'] = parseInt(_0x56b5cc['left']);
            _0x4d130d['api_great']['zz_loc_y'] = parseInt(_0x56b5cc['top']);
          },
          'fail': () => {
            _0x4d130d['api_great']['zz_loc_x'] = '';
            _0x4d130d['api_great']['zz_loc_y'] = '';
          }
        });
        break;

      case 0x3:
        _0x4d130d['api_great']['zz_loc_x'] = 0x0;
        _0x4d130d['api_great']['zz_loc_y'] = 0x0;
        break;

      default:
        {
          if (this['$element']('advbox')) {
            this['$element']('advbox')['getBoundingClientRect']({
              'success': function (_0x597501) {
                _0x4d130d['api_great']['zz_loc_x'] = parseInt(_0x597501['left']);
                _0x4d130d['api_great']['zz_loc_y'] = parseInt(_0x597501['top']);
              },
              'fail': () => {
                _0x4d130d['api_great']['zz_loc_x'] = '';
                _0x4d130d['api_great']['zz_loc_y'] = '';
              }
            });
          } else {
            _0x4d130d['api_great']['zz_loc_x'] = '';
            _0x4d130d['api_great']['zz_loc_y'] = '';
          }
        }
    }
  },

  'positionEnd'(_0x1ef5e9) {
    let _0x2fd0b3 = _0x1ef5e9['changedTouches'][0x0];
    this['api_great']['zz_up_x'] = parseInt(_0x2fd0b3['offsetX']), this['api_great']['zz_up_y'] = parseInt(_0x2fd0b3['offsetY']), this['api_great']['zz_up_ax'] = parseInt(_0x2fd0b3['clientX']), this['api_great']['zz_up_ay'] = parseInt(_0x2fd0b3['clientX']);
  },

  'urlReplace'(_0x2267ee) {
    let _0x3ed10d = this;

    let _0x1fe31c = new Date()['getTime']();

    this['api_great']['zz_time'] = _0x1fe31c;
    this['api_great']['zz_ts_time'] = Math['round'](_0x1fe31c / 0x3e8);
    _0x2267ee = _0x2267ee['replace']('zz_time', this['api_great']['zz_time']);
    _0x2267ee = _0x2267ee['replace']('zz_ts_time', this['api_great']['zz_ts_time']);
    _0x2267ee = _0x2267ee['replace']('zz_width', this['api_great']['zz_width']);
    _0x2267ee = _0x2267ee['replace']('zz_height', this['api_great']['zz_height']);
    _0x2267ee = _0x2267ee['replace']('zz_down_x', this['api_great']['zz_down_x']);
    _0x2267ee = _0x2267ee['replace']('zz_down_y', this['api_great']['zz_down_y']);
    _0x2267ee = _0x2267ee['replace']('zz_up_x', this['api_great']['zz_up_x']);
    _0x2267ee = _0x2267ee['replace']('zz_up_y', this['api_great']['zz_up_y']);
    _0x2267ee = _0x2267ee['replace']('zz_down_ax', this['api_great']['zz_down_ax']);
    _0x2267ee = _0x2267ee['replace']('zz_down_ay', this['api_great']['zz_down_ay']);
    _0x2267ee = _0x2267ee['replace']('zz_up_ax', this['api_great']['zz_up_ax']);
    _0x2267ee = _0x2267ee['replace']('zz_up_ay', this['api_great']['zz_up_ay']);
    _0x2267ee = _0x2267ee['replace']('zz_loc_x', this['api_great']['zz_loc_x']);
    _0x2267ee = _0x2267ee['replace']('zz_loc_y', this['api_great']['zz_loc_y']);
    _0x2267ee = _0x2267ee['replace']('zz_clk_d', this['api_great']['zz_clk_d']);
    _0x2267ee = _0x2267ee['replace']('zz_response_time', this['api_great']['zz_response_time']);
    _0x2267ee = _0x2267ee['replace']('zz_ready_time', this['api_great']['zz_ready_time']);
    _0x2267ee = _0x2267ee['replace']('zz_show_time', this['api_great']['zz_show_time']);
    _0x2267ee = _0x2267ee['replace']('zz_click_time', this['api_great']['zz_click_time']);

    _index.default['requestFnc'](_0x2267ee, {}, 'GET', _0x3ed10d['ua']);
  },

  async 'dsLoop'(_0x439dd7) {
    let _0x979bb7 = this;

    _0x979bb7['count'] = await _index.default['getcount']('count');

    if (_0x979bb7['count'] > _0x439dd7['length'] - 0x1) {
      let _0x4305e7 = new _storage.default('count');

      _0x4305e7['set'](0x0);

      _0x979bb7['count'] = 0x0;
    }

    if (_0x439dd7[_0x979bb7['count']]['ds']) {
      let _0x842736 = _index.default['dsJudge'](_0x439dd7[_0x979bb7['count']]['ds']);

      if (_0x842736) {
        return _0x439dd7[_0x979bb7['count']];
      } else {
        _0x979bb7['dsLoop'](_0x439dd7);
      }
    } else {
      return _0x439dd7[_0x979bb7['count']];
    }
  },

  async 'postdata'(_0x589e3d) {
    let _0x14d7e8 = new _storage.default('postDataTime');

    var _0x1b9452 = Math['round'](new Date()['getTime']() / 0x3e8);

    let _0x220707 = await _0x14d7e8['get']();

    let _0xbdcd0b = new _storage.default('advId');

    let _0x2cff4b = await _0xbdcd0b['get']();

    if (_0x220707 === null || _0x2cff4b === null || _0x2cff4b != _0x589e3d) {
      _0xbdcd0b['set'](_0x589e3d);

      return _index.default['setData'](_0x589e3d);
    } else {
      if (_0x1b9452 - _0x220707 > 0x258) {
        _0xbdcd0b['set'](_0x589e3d);

        return _index.default['setData'](_0x589e3d);
      } else {
        return null;
      }
    }
  },

  'judgeInstall'(_0x4a6f3a, _0x3a18b0) {
    let _0x5ed5d4 = this;

    if (_0x3a18b0 < 0x2) {
      setTimeout(function () {
        _system3.default['hasInstalled']({
          'package': _0x5ed5d4['adData']['pkg'],
          'success': function (_0xc3d543) {
            if (_0xc3d543['result']) {
              if (_0x5ed5d4['adData']['install_finish'][0x0] != '') {
                let _0x981242 = _0x5ed5d4['adData']['install_finish'][0x0]['replace']('zz_click_id', _0x4a6f3a);

                _system2.default['fetch']({
                  'header': {
                    'User-Agent': _0x5ed5d4['ua']
                  },
                  'url': _0x981242
                });

                if (_0x5ed5d4['adData']['zif']) {
                  _system2.default['fetch']({
                    'header': {
                      'User-Agent': _0x5ed5d4['ua']
                    },
                    'url': _0x5ed5d4['adData']['zif']
                  });
                }
              }
            } else {
              _0x5ed5d4['judgeInstall'](_0x4a6f3a, _0x3a18b0 + 0x1);
            }
          },
          'fail': function () {
            _0x5ed5d4['judgeInstall'](_0x4a6f3a, _0x3a18b0 + 0x1);
          }
        });
      }, 0x9c40);
    }
  }

};
exports.default = _default;}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/components/ad/reward-ad.ux?uxType=comp":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/quicktask/components/ad/reward-ad.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "textAlign": "center",
    "color": "#212121"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/components/dialog/backpress-dialog.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/quicktask/components/dialog/backpress-dialog.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": "50px",
    "paddingRight": "50px",
    "paddingBottom": "50px",
    "paddingLeft": "50px"
  },
  ".title": {
    "textAlign": "center",
    "color": "#212121"
  },
  ".btn-cancel": {
    "width": "40%",
    "height": "120px",
    "color": "#bbbbbb",
    "textAlign": "center",
    "fontSize": "36px"
  },
  ".btn-ok": {
    "width": "40%",
    "height": "120px",
    "backgroundColor": "#ffa500",
    "borderRadius": "20px",
    "position": "relative",
    "right": "0px",
    "fontSize": "42px",
    "alignItems": "center",
    "color": "#000000",
    "textAlign": "center",
    "fontWeight": "bold"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/web/index.ux?uxType=page":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/quicktask/web/index.ux?uxType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".TimeOut": {
    "position": "absolute",
    "width": "100%",
    "height": "320px",
    "bottom": "0px"
  },
  ".TimeOut image": {
    "position": "absolute",
    "width": "200px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "TimeOut"
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
  "#progress": {
    "position": "absolute",
    "top": "0px",
    "width": "100%",
    "strokeWidth": "8px"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/components/ad/cnative-ad.ux?uxType=comp":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./src/quicktask/components/ad/cnative-ad.ux?uxType=comp ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper-ad": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100%"
  },
  "#ad-image": {
    "width": "100%",
    "height": "380px"
  },
  ".ad-tag": {
    "position": "absolute",
    "bottom": "0px",
    "right": "0px",
    "color": "#ffffff",
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  ".ad-close": {
    "width": "60px",
    "height": "60px",
    "position": "absolute",
    "top": "0px",
    "right": "0px",
    "zIndex": 9999
  },
  ".ad-tag text": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "ad-tag"
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
  ".ad-title text": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "ad-title"
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
  ".ad-title": {
    "position": "absolute",
    "bottom": "0px",
    "left": "0px",
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  ".ad-play": {
    "height": "100px",
    "position": "absolute",
    "alignContent": "center"
  },
  ".ad-native": {
    "width": "100%",
    "flexDirection": "column"
  },
  ".ad-video": {
    "width": "100%",
    "height": "500px"
  },
  ".big-img": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".big-img .content": {
    "alignItems": "flex-start",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "big-img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        }
      ]
    }
  },
  ".big-img .content text": {
    "fontSize": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "big-img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
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
  ".big-img .close-box": {
    "height": "100%",
    "width": "100px",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "big-img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "close-box"
        }
      ]
    }
  },
  ".big-img .ad-image": {
    "height": "70%",
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "big-img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "ad-image"
        }
      ]
    }
  },
  ".big-img .ad-image image": {
    "width": "100%",
    "borderRadius": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "big-img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "ad-image"
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
  ".big-img .ad-text": {
    "width": "100%",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "big-img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "ad-text"
        }
      ]
    }
  },
  ".big-img .ad-text .content": {
    "justifyContent": "space-between",
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "big-img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "ad-text"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        }
      ]
    }
  },
  ".vertical-content": {
    "width": "100%"
  },
  ".vertical-content .ad-close": {
    "width": "50px",
    "height": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "vertical-content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "ad-close"
        }
      ]
    }
  },
  ".no-pic": {
    "width": "100%",
    "height": "300px"
  },
  ".no-pic text": {
    "fontSize": "50px",
    "color": "#000000",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "no-pic"
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./src/quicktask/Zonst/css/index.css?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!./src/quicktask/Zonst/css/index.css?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".maskBox": {
    "width": "100%",
    "height": "100%",
    "backgroundColor": "rgba(0,0,0,0.7)",
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column"
  },
  ".closebtn": {
    "width": "50px",
    "height": "50px"
  },
  ".advbox": {
    "width": "90%",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".advcont": {
    "width": "100%",
    "backgroundColor": "#ffffff",
    "flexDirection": "column",
    "paddingTop": "20px",
    "paddingLeft": "30px",
    "paddingRight": "30px",
    "borderRadius": "20px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".advcont image": {
    "width": "640px",
    "height": "320px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "advcont"
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
  ".advclose": {
    "width": "100%",
    "height": "30px",
    "flexDirection": "row-reverse"
  },
  ".advclose image": {
    "width": "30px",
    "height": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "advclose"
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
  ".advtitle": {
    "width": "100%",
    "textAlign": "center",
    "paddingBottom": "30px",
    "flexDirection": "column"
  },
  ".advtitle text": {
    "width": "100%",
    "textAlign": "center",
    "fontSize": "36px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "advtitle"
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
  ".advbtn": {
    "width": "100%",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column"
  },
  ".yesBtn": {
    "width": "344px",
    "textAlign": "center",
    "marginTop": "30px",
    "marginBottom": "25px",
    "borderRadius": "40px",
    "height": "80px",
    "color": "#ffffff"
  },
  ".adv_text": {
    "backgroundColor": "rgba(0,0,0,0.2)",
    "borderRadius": "5px",
    "width": "50px",
    "bottom": "0px",
    "position": "absolute",
    "justifyContent": "center",
    "height": "25px",
    "alignItems": "center"
  },
  ".middle": {
    "fontSize": "18px",
    "color": "#dddddd"
  },
  ".advbtn_another": {
    "width": "100%",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column"
  },
  ".advbtn_another .trueBtn": {
    "marginTop": "5px",
    "textAlign": "center",
    "flexDirection": "row",
    "marginBottom": "20px",
    "fontSize": "26px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "advbtn_another"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "trueBtn"
        }
      ]
    }
  },
  ".checkbox": {
    "height": "50px",
    "alignItems": "center",
    "marginBottom": "25px"
  },
  ".checkbox .checkimg": {
    "width": "40px",
    "height": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "checkbox"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "checkimg"
        }
      ]
    }
  },
  ".checkbox .checktext": {
    "fontSize": "24px",
    "color": "#999999",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "checkbox"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "checktext"
        }
      ]
    }
  },
  "@KEYFRAMES": {
    "listopen": [
      {
        "transform": "{\"scaleX\":0,\"scaleY\":0}",
        "time": 0
      },
      {
        "transform": "{\"scaleX\":1,\"scaleY\":1}",
        "time": 100
      }
    ],
    "listclose": [
      {
        "transform": "{\"scaleX\":1,\"scaleY\":1}",
        "time": 0
      },
      {
        "transform": "{\"scaleX\":0,\"scaleY\":0}",
        "time": 100
      }
    ]
  },
  ".list-open": {
    "animationName": "listopen",
    "animationDuration": "400ms",
    "animationFillMode": "forwards"
  },
  ".list-close": {
    "animationName": "listclose",
    "animationDuration": "400ms",
    "animationFillMode": "forwards"
  },
  ".advbtn_box .another-color": {
    "backgroundColor": "#999999",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "advbtn_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "another-color"
        }
      ]
    }
  },
  ".native_img_style": {
    "backgroundRepeat": "no-repeat"
  },
  ".native_flex": {
    "marginTop": "5px",
    "width": "100%",
    "flexDirection": "column"
  },
  ".adv_flex": {
    "marginBottom": "3px",
    "alignItems": "center",
    "flexDirection": "row"
  },
  ".text_flex": {
    "flex": 1
  },
  ".hoverstyle": {
    "width": "100px",
    "height": "100px"
  }
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/Zonst/unit/index.ux?uxType=comp&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/quicktask/Zonst/unit/index.ux?uxType=comp& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "maskBox"
      ],
      "shown": function () {return this.showQuitScreen&&this.isTimeQuitCheck&&this.loadData},
      "events": {
        "click": function (evt) { return this.allQuitScreenImg(evt)}
      },
      "children": [
        {
          "type": "div",
          "attr": {
            "id": "advbox"
          },
          "classList": [
            "advbox"
          ],
          "id": "advbox",
          "events": {
            "click": function (evt) { return this.forcedQuitClick(evt)}
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "advcont"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "advclose"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/quicktask/Zonst/img/closesc.png"
                      },
                      "events": {
                        "touchstart": "clickQuitClose"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "advtitle"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.advtype=='2'?'是否退出快应用':'是否离开本页面'}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "id": "adv_img",
                        "src": function () {return this.adData.img_url}
                      },
                      "id": "adv_img",
                      "events": {
                        "touchstart": "getPosition",
                        "touchend": "positionEnd",
                        "click": function (evt) { return this.clickQuitScreenImg(evt)},
                        "complete": "imageLoad"
                      },
                      "classList": [
                        "welcomeImg"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "adv_text"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "广 告"
                          },
                          "classList": [
                            "middle"
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
                    "advbtn_another"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "advbtn_box"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.exit_confirm}
                          },
                          "classList": [
                            "yesBtn"
                          ],
                          "style": {
                            "backgroundColor": function () {return this.confirm_button_color}
                          },
                          "events": {
                            "click": function (evt) { return this.clickQuitScreenImg(evt)}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "advbtn_box"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.advtype=='2'?'退出':'离开'}
                          },
                          "classList": [
                            "trueBtn"
                          ],
                          "style": {
                            "color": function () {return this.exit_ifont_color}
                          },
                          "events": {
                            "click": function (evt) { return this.leaveOutPage(this.advtype,evt)}
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
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "maskBox"
      ],
      "shown": function () {return (this.isTimeEyeCheck&&!this.overCheck&&this.showEyeScreen&&this.setTimeShow?true:false)&&!(this.showQuitScreen&&this.isTimeQuitCheck&&this.loadData)},
      "events": {
        "click": function (evt) { return this.allEyeScreenImg(evt)}
      },
      "children": [
        {
          "type": "div",
          "attr": {
            "id": "adveye"
          },
          "classList": function () {return ['advbox', this.isTimeEyeCheck&&!this.isclose&&!this.overCheck&&this.setTimeShow?'list-open':'list-close']},
          "id": "adveye",
          "events": {
            "click": function (evt) { return this.forcedEyeClick(evt)}
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "advcont"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "advclose"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/quicktask/Zonst/img/closesc.png"
                      },
                      "events": {
                        "touchstart": "clickEyeClose"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "advtitle"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "长期阅读会视力疲劳"
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "休息一下吧~"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "id": "adv_img",
                        "src": function () {return this.adData.img_url}
                      },
                      "id": "adv_img",
                      "events": {
                        "touchstart": "getPosition",
                        "touchend": "positionEnd",
                        "click": function (evt) { return this.clickEyeScreenImg(evt)},
                        "complete": "imageLoad"
                      }
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "adv_text"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "广 告"
                          },
                          "classList": [
                            "middle"
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
                    "advbtn"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.eye_confirm}
                      },
                      "classList": [
                        "yesBtn"
                      ],
                      "style": {
                        "backgroundColor": function () {return this.confirm_button_color}
                      },
                      "events": {
                        "click": function (evt) { return this.checkbtn(0,evt)}
                      }
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "checkbox"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "show": function () {return this.isCheckNow},
                            "src": "/quicktask/Zonst/img/editorok.png"
                          },
                          "classList": [
                            "checkimg"
                          ],
                          "events": {
                            "touchstart": function (evt) { return this.checkbtn('check',evt)}
                          }
                        },
                        {
                          "type": "image",
                          "attr": {
                            "show": function () {return !this.isCheckNow},
                            "src": "/quicktask/Zonst/img/number.png"
                          },
                          "classList": [
                            "checkimg"
                          ],
                          "events": {
                            "touchstart": function (evt) { return this.checkbtn('check',evt)}
                          }
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": "不再提醒"
                          },
                          "classList": [
                            "checktext"
                          ],
                          "events": {
                            "click": function (evt) { return this.checkbtn('check',evt)}
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
    },
    {
      "type": "div",
      "attr": {
        "id": "nativecontent"
      },
      "shown": function () {return (this.nativeflag&&this.showNative)&&!(this.showQuitScreen&&this.isTimeQuitCheck&&this.loadData)&&!(this.isTimeEyeCheck&&!this.overCheck&&this.showEyeScreen&&this.setTimeShow?true:false)},
      "classList": [
        "native_flex"
      ],
      "id": "nativecontent",
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "adv_flex"
          ],
          "shown": function () {return this.title_flag},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.adData.title}
              },
              "classList": [
                "text_flex"
              ],
              "style": function () {return this.title_style}
            },
            {
              "type": "image",
              "attr": {
                "src": "/quicktask/Zonst/img/closesc.png"
              },
              "events": {
                "touchstart": "nativeClose"
              }
            }
          ]
        },
        {
          "type": "image",
          "attr": {
            "id": "native_img",
            "src": function () {return this.adData.img_url}
          },
          "id": "native_img",
          "events": {
            "touchstart": "getPosition",
            "touchend": "positionEnd",
            "click": function (evt) { return this.clickNativeImg(evt)},
            "complete": "imageLoad"
          },
          "classList": [
            "native_img_style"
          ],
          "style": function () {return this.image_style}
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "adv_text"
          ],
          "shown": function () {return this.icon_flage},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "广 告"
              },
              "classList": [
                "middle"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/components/ad/cnative-ad.ux?uxType=comp&importNames[]=zonst-adv":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/quicktask/components/ad/cnative-ad.ux?uxType=comp&importNames[]=zonst-adv ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {
    "id": "test"
  },
  "id": "test",
  "children": [
    {
      "type": "div",
      "attr": {},
      "shown": function () {return this.visibled&&this.isNative2},
      "classList": [
        "wrapper-ad"
      ],
      "children": [
        {
          "type": "ad",
          "attr": {
            "adid": function () {return this.adList[0].adId}
          },
          "classList": [
            "ad-native"
          ],
          "shown": function () {return this.userClickShow&&!!this.adList[0].adId},
          "events": {
            "error": "error2",
            "adclick": "adClick2"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "wrapper-ad"
              ],
              "children": [
                {
                  "type": "slot",
                  "attr": {
                    "name": "header"
                  }
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "container"
                  ],
                  "children": [
                    {
                      "type": "block",
                      "attr": {},
                      "shown": function () {return this.adList[0].creativeType===0},
                      "children": [
                        {
                          "type": "ad-clickable-area",
                          "attr": {
                            "type": "click"
                          },
                          "classList": [
                            "vertical-content",
                            "no-pic"
                          ],
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": function () {return this.adList[0].icon}
                              },
                              "events": {
                                "complete": function (evt) { return this.reportAdShow2(this.adList[0].adId,evt)}
                              }
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.adList[0].desc}
                              },
                              "style": {
                                "color": "#555555"
                              }
                            }
                          ]
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": "/quicktask/images/close-ad.png"
                          },
                          "classList": [
                            "ad-close"
                          ],
                          "events": {
                            "click": "closeAd"
                          }
                        }
                      ]
                    },
                    {
                      "type": "block",
                      "attr": {},
                      "shown": function () {return this.adList[0].creativeType===2||this.adList[0].creativeType===1||this.adList[0].creativeType===3},
                      "children": [
                        {
                          "type": "ad-clickable-area",
                          "attr": {
                            "type": "click"
                          },
                          "classList": [
                            "ad-image"
                          ],
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": function () {return this.adList[0].imgUrlList[0]}
                              },
                              "events": {
                                "complete": function (evt) { return this.reportAdShow2(this.adList[0].adId,evt)}
                              },
                              "style": {
                                "height": "500px"
                              }
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "ad-tag"
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": "广告"
                                  },
                                  "classList": [
                                    "tag"
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "ad-title"
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.adList[0].title}
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": "/quicktask/images/close-ad.png"
                          },
                          "classList": [
                            "ad-close"
                          ],
                          "events": {
                            "click": "closeAd"
                          }
                        }
                      ]
                    },
                    {
                      "type": "block",
                      "attr": {},
                      "shown": function () {return this.adList[0].creativeType===4},
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "vertical-content",
                            "big-img"
                          ],
                          "children": [
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "ad-text"
                              ],
                              "children": [
                                {
                                  "type": "ad-clickable-area",
                                  "attr": {
                                    "type": "click"
                                  },
                                  "classList": [
                                    "content"
                                  ],
                                  "children": [
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return this.adList[0].desc}
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "ad-clickable-area",
                              "attr": {
                                "type": "video-click"
                              },
                              "classList": [
                                "ad-video"
                              ]
                            },
                            {
                              "type": "image",
                              "attr": {
                                "src": "/quicktask/images/close-ad.png"
                              },
                              "classList": [
                                "ad-close"
                              ],
                              "events": {
                                "click": "closeAd"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "slot",
                  "attr": {
                    "name": "default"
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
      "attr": {},
      "classList": [
        "wrapper-ad"
      ],
      "shown": function () {return this.zonstEnabled},
      "children": [
        {
          "type": "zonst-adv",
          "attr": {
            "id": "nativecuo",
            "nativeadid": function () {return this.nativeId},
            "nativeflag": function () {return this.nativeADV},
            "title_flag": function () {return this.titleSwitch},
            "icon_flage": function () {return this.iconSwitch},
            "image_style": function () {return this.imageStyle},
            "title_style": function () {return this.txtStyle}
          },
          "id": "nativecuo",
          "events": {
            "ad_show": "zonstadShow",
            "ad_error": "zonstadNativeError",
            "ad_closed": "zonstadNativeClosed",
            "click": "zonstaadClick"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "wrapper-ad"
      ],
      "shown": function () {return this.visibled&&!this.isNative2},
      "children": [
        {
          "type": "image",
          "attr": {
            "id": "ad-image",
            "src": function () {return this.adList[0].imgUrlList?this.adList[0].imgUrlList[0]:this.adList[0].icon}
          },
          "id": "ad-image",
          "events": {
            "click": function (evt) { return this.reportAdClick(this.adList[0].adId,evt)},
            "complete": function (evt) { return this.reportAdShow(this.adList[0].adId,evt)}
          }
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "ad-tag"
          ],
          "events": {
            "click": function (evt) { return this.reportAdClick(this.adList[0].adId,evt)}
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "广告"
              },
              "classList": [
                "tag"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.provider}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "ad-title"
          ],
          "events": {
            "click": function (evt) { return this.reportAdClick(this.adList[0].adId,evt)}
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.adList[0].title}
              }
            }
          ]
        },
        {
          "type": "image",
          "attr": {
            "src": "/quicktask/images/close-ad.png"
          },
          "classList": [
            "ad-close"
          ],
          "shown": function () {return this.provider!='HUAWEI'},
          "events": {
            "click": "closeAd"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/components/ad/reward-ad.ux?uxType=comp&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/quicktask/components/ad/reward-ad.ux?uxType=comp& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {}
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/components/dialog/backpress-dialog.ux?uxType=comp&importNames[]=my-popup,importNames[]=cnative-ad,importNames[]=reward-ad":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/quicktask/components/dialog/backpress-dialog.ux?uxType=comp&importNames[]=my-popup,importNames[]=cnative-ad,importNames[]=reward-ad ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "my-popup",
  "attr": {
    "id": "back-dialog"
  },
  "id": "back-dialog",
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "wrapper"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "退出查看广告"
          },
          "style": {
            "fontSize": "50px",
            "color": "#ffa500",
            "marginBottom": "50px"
          }
        },
        {
          "type": "cnative-ad",
          "attr": {
            "id": "cnative-ad",
            "adKey": "backPressAdDialog",
            "delay": "true"
          },
          "id": "cnative-ad",
          "events": {
            "native2-show": "native2Show",
            "native2-error": "native2Error",
            "error": "nativeError",
            "reportclick": "exit"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "style": {
                "width": "100%",
                "display": "flex",
                "marginTop": "50px"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.cancelText}
                  },
                  "classList": [
                    "btn-cancel"
                  ],
                  "events": {
                    "click": "exit"
                  },
                  "style": {
                    "color": function () {return this.cancelColor},
                    "backgroundColor": function () {return this.cancelBackground},
                    "borderRadius": function () {return this.cancelRadius}
                  }
                },
                {
                  "type": "div",
                  "attr": {},
                  "style": {
                    "flex": 1
                  }
                },
                {
                  "type": "ad-clickable-area",
                  "attr": {
                    "type": "button",
                    "value": function () {return this.okText}
                  },
                  "classList": [
                    "btn-ok"
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "image",
          "attr": {
            "src": "/quicktask/images/close-ad.png"
          },
          "style": {
            "position": "absolute",
            "right": "30px",
            "top": "30px",
            "width": "70px"
          },
          "events": {
            "click": "hide"
          }
        },
        {
          "type": "div",
          "attr": {},
          "shown": function () {return this.showButton},
          "style": {
            "width": "100%",
            "display": "flex",
            "marginTop": "50px"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.cancelText}
              },
              "classList": [
                "btn-cancel"
              ],
              "events": {
                "click": "exit"
              },
              "style": {
                "color": function () {return this.cancelColor},
                "backgroundColor": function () {return this.cancelBackground},
                "borderRadius": function () {return this.cancelRadius}
              }
            },
            {
              "type": "div",
              "attr": {},
              "style": {
                "flex": 1
              }
            },
            {
              "type": "input",
              "attr": {
                "type": "button",
                "value": function () {return this.okText}
              },
              "classList": [
                "btn-ok"
              ],
              "events": {
                "click": "watchAd"
              }
            }
          ]
        },
        {
          "type": "reward-ad",
          "attr": {
            "id": "reward-ad",
            "adKey": "backPressRewardAd",
            "preloadad": function () {return true}
          },
          "id": "reward-ad",
          "events": {
            "load": "loadRewardAdSuccess",
            "error": "loadRewardAdError",
            "on-reward": "onReward"
          }
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

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/web/index.ux?uxType=page&importNames[]=my-popup,importNames[]=back-dialog":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./src/quicktask/web/index.ux?uxType=page&importNames[]=my-popup,importNames[]=back-dialog ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrapper"
  ],
  "children": [
    {
      "type": "web",
      "attr": {
        "id": "web",
        "src": function () {return this.websrc}
      },
      "id": "web",
      "events": {
        "pagefinish": "onPageFinish",
        "progress": "onProgress"
      }
    },
    {
      "type": "progress",
      "attr": {
        "id": "progress",
        "type": "horizontal",
        "percent": function () {return this.progress}
      },
      "id": "progress",
      "shown": function () {return this.progress!=100}
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "TimeOut"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/quicktask/images/clock.png"
          }
        },
        {
          "type": "text",
          "attr": {
            "id": "clock",
            "value": function () {return this.seconds>0?this.seconds+'秒':''}
          },
          "style": {
            "color": "#ffffff",
            "fontSize": "40px",
            "marginLeft": "50px"
          },
          "id": "clock"
        }
      ]
    },
    {
      "type": "my-popup",
      "attr": {
        "id": "evolopDialog",
        "position": "center",
        "adKey": "cdkeySuccess",
        "channel": function () {return this.channel}
      },
      "id": "evolopDialog"
    },
    {
      "type": "back-dialog",
      "attr": {
        "id": "back-dialog"
      },
      "id": "back-dialog",
      "events": {
        "on-back": "onBack"
      }
    }
  ]
}

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/Zonst/unit/index.ux?uxType=comp&name=zonst-adv":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/quicktask/Zonst/unit/index.ux?uxType=comp&name=zonst-adv ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!../css/index.css?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./src/quicktask/Zonst/css/index.css?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!./index.js?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!./src/quicktask/Zonst/unit/index.js?uxType=comp")

$app_define$('@app-component/zonst-adv', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/Zonst/unit/index.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/ad/cnative-ad.ux?uxType=comp&name=cnative-ad":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/quicktask/components/ad/cnative-ad.ux?uxType=comp&name=cnative-ad ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../../Zonst/unit/index.ux?uxType=comp&name=zonst-adv */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/Zonst/unit/index.ux?uxType=comp&name=zonst-adv")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!less-loader!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./cnative-ad.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/components/ad/cnative-ad.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./cnative-ad.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/components/ad/cnative-ad.ux?uxType=comp")

$app_define$('@app-component/cnative-ad', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./cnative-ad.ux?uxType=comp&importNames[]=zonst-adv */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/components/ad/cnative-ad.ux?uxType=comp&importNames[]=zonst-adv")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/ad/reward-ad.ux?uxType=comp&name=reward-ad":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/quicktask/components/ad/reward-ad.ux?uxType=comp&name=reward-ad ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./reward-ad.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/components/ad/reward-ad.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./reward-ad.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/components/ad/reward-ad.ux?uxType=comp")

$app_define$('@app-component/reward-ad', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./reward-ad.ux?uxType=comp& */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/components/ad/reward-ad.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/dialog/backpress-dialog.ux?uxType=comp&name=back-dialog":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!./src/quicktask/components/dialog/backpress-dialog.ux?uxType=comp&name=back-dialog ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../popup.ux?uxType=comp&name=my-popup */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/popup.ux?uxType=comp&name=my-popup")
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../ad/cnative-ad.ux?uxType=comp&name=cnative-ad */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/ad/cnative-ad.ux?uxType=comp&name=cnative-ad")
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../ad/reward-ad.ux?uxType=comp&name=reward-ad */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/ad/reward-ad.ux?uxType=comp&name=reward-ad")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./backpress-dialog.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/components/dialog/backpress-dialog.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./backpress-dialog.ux?uxType=comp */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/components/dialog/backpress-dialog.ux?uxType=comp")

$app_define$('@app-component/back-dialog', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./backpress-dialog.ux?uxType=comp&importNames[]=my-popup,importNames[]=cnative-ad,importNames[]=reward-ad */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/components/dialog/backpress-dialog.ux?uxType=comp&importNames[]=my-popup,importNames[]=cnative-ad,importNames[]=reward-ad")

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

/***/ "./src/quicktask/Zonst/index.js":
/*!**************************************!*\
  !*** ./src/quicktask/Zonst/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.device"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.app"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.network"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _storage = _interopRequireDefault(__webpack_require__(/*! ./storage */ "./src/quicktask/Zonst/storage.js"));

var _md = _interopRequireDefault(__webpack_require__(/*! ./md5.js */ "./src/quicktask/Zonst/md5.js"));

var _zonstConfig = _interopRequireDefault(__webpack_require__(/*! ./zonst.config.js */ "./src/quicktask/Zonst/zonst.config.js"));

var _secret = _interopRequireDefault(__webpack_require__(/*! ./secret.js */ "./src/quicktask/Zonst/secret.js"));

var _system5 = _interopRequireDefault($app_require$("@app-module/system.package"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  'data': {
    'k_sign': null,
    'app_id': null,
    'ip': null,
    'time': null,
    'pkglist': null
  },

  async 'getDeviceId'() {
    return new Promise(_0x5b36b6 => {
      _system.default['getDeviceId']({
        'success': function (_0x3b85ed) {
          _0x5b36b6(_0x3b85ed['deviceId']);
        },
        'fail': function (_0x11c06b, _0x352533) {
          _0x5b36b6(_0x352533 + ',201:用户拒绝授权');
        }
      });
    });
  },

  async 'getMac'() {
    return new Promise(_0x3a63d6 => {
      _system.default['getId']({
        'success': function (_0x3492eb) {
          _0x3a63d6(_0x3492eb);
        },
        'fail': function (_0x16c156, _0x245897) {
          _0x3a63d6({
            'mac': '没有授权'
          });
        }
      });
    });
  },

  async 'systemGetUserId'() {
    return new Promise(_0x1b2f4f => {
      _system.default['getUserId']({
        'success': _0x3111f1 => {
          _0x1b2f4f(_0x3111f1);
        },
        'fail': () => {
          _0x1b2f4f(![]);
        }
      });
    });
  },

  async 'packData'(_0x2e7f18) {
    return new Promise(_0x26903a => {
      _system5.default['hasInstalled']({
        'package': _0x2e7f18,
        'success': function (_0x114ad5) {
          if (_0x114ad5['result']) {
            _0x26903a(_0x2e7f18);
          } else {
            _0x26903a('');
          }
        }
      });
    });
  },

  'systemGetUserInfo'() {
    return new Promise(_0x5b6bfa => {
      _system.default['getInfo']({
        'success': function (_0x5c6689) {
          _0x5b6bfa(_0x5c6689);
        },
        'fail': function () {
          _0x5b6bfa(![]);
        }
      });
    });
  },

  async 'getNetWork'() {
    return new Promise(_0x36ccac => {
      _system3.default['getType']({
        'success': _0x193aed => {
          _0x36ccac(_0x193aed['type']);
        },
        'fail': function () {
          _0x36ccac('没有权限');
        }
      });
    });
  },

  'unique'(_0x4abaf2) {
    if (!Array['isArray'](_0x4abaf2)) {
      console['log']('type\x20error!');
      return;
    }

    let _0x2d7be8 = [];

    for (let _0x299286 = 0x0; _0x299286 < _0x4abaf2['length']; _0x299286++) {
      if (_0x2d7be8['indexOf'](_0x4abaf2[_0x299286]) === -0x1) {
        _0x2d7be8['push'](_0x4abaf2[_0x299286]);
      }
    }

    return _0x2d7be8;
  },

  'compare'(_0x4deb59, _0x3a365a) {
    return function (_0x4b769f, _0x9b1476) {
      var _0x4d0d2a = _0x4b769f[_0x4deb59][_0x3a365a];
      var _0x26eae6 = _0x9b1476[_0x4deb59][_0x3a365a];
      return _0x4d0d2a - _0x26eae6;
    };
  },

  'printErro'(_0x1754cc) {
    switch (_0x1754cc) {
      case -0x64:
        console['log'](_0x1754cc + '应用广告关闭');
        break;

      case -0x65:
        console['log'](_0x1754cc + '参数异常');
        break;

      case -0x66:
        console['log'](_0x1754cc + '无广告');
        break;

      case -0x67:
        console['log'](_0x1754cc + '域名限制');
        break;

      default:
        null;
    }
  },

  async 'setData'(_0x474432, _0x10ea4a) {
    let _0x31a75b = this;

    let _0x375301 = await _0x31a75b['requestParams'](_0x474432, _0x10ea4a);

    if (!_0x375301) {
      return '1';
    } else {
      let _0x289db6 = await _secret.default['decryption'](_0x375301['data']['data']);

      let _0x4c367c = new _storage.default('postDataTime');

      let _0x286768 = Math['round'](new Date() / 0x3e8);

      _0x4c367c['set'](_0x286768);

      _0x31a75b['postPack'](_0x289db6);

      if (!_0x10ea4a) {
        let _0x4f5cec = new _storage.default('postData');

        _0x4f5cec['set'](_0x289db6);
      }

      return _0x289db6;
    }
  },

  async 'postPack'(_0x41c6f6) {
    let _0x4f5ece = this;

    let _0x99717e = new _storage.default('packTime');

    let _0x4f0691 = _0x4f5ece['formatDateTime'](Math['round'](new Date() / 0x3e8));

    let _0x5cb181 = await _0x99717e['get']();

    if (_0x5cb181 == null || this['pkglist'] == null) {
      _0x4f5ece['requestPack'](_0x41c6f6['pakges']);

      _0x99717e['set'](_0x4f0691);
    } else if (_0x5cb181 != _0x4f0691) {
      _0x99717e['set'](_0x4f0691);

      _0x4f5ece['requestPack'](_0x41c6f6['pakges']);
    }
  },

  async 'getcount'(_0xe7135f) {
    let _0x47319b = new _storage.default(_0xe7135f);

    let _0x3d09d5 = await _0x47319b['get']();

    if (_0x3d09d5 === null) {
      _0x47319b['set'](0x1);

      return 0x0;
    } else {
      if (_0x3d09d5 == 0x0) {
        _0x47319b['set'](_0x3d09d5 + 0x2);

        return 0x1;
      } else {
        _0x47319b['set'](_0x3d09d5 + 0x1);

        return _0x3d09d5;
      }
    }
  },

  'formatDateTime'(_0x491d23) {
    var _0xf68ed5 = new Date();

    _0xf68ed5['setTime'](_0x491d23 * 0x3e8);

    var _0x48f6ff = _0xf68ed5['getFullYear']();

    var _0x10ad0e = _0xf68ed5['getMonth']() + 0x1;

    _0x10ad0e = _0x10ad0e < 0xa ? '0' + _0x10ad0e : _0x10ad0e;

    var _0x182376 = _0xf68ed5['getDate']();

    _0x182376 = _0x182376 < 0xa ? '0' + _0x182376 : _0x182376;
    return _0x48f6ff + '-' + _0x10ad0e + '-' + _0x182376;
  },

  async 'uppack'(_0x435ff8) {
    return new Promise(_0x578099 => {
      let _0x5b4cfb = this;

      let _0x57e6cc = [];

      for (var _0x48443c = 0x0; _0x48443c < _0x435ff8['length']; _0x48443c++) {
        _0x57e6cc['push'](_0x5b4cfb['packData'](_0x435ff8[_0x48443c]));
      }

      Promise['all'](_0x57e6cc)['then'](_0x4d995e => {
        _0x578099(_0x4d995e['filter'](_0x1b116f => {
          return _0x1b116f !== '';
        }));
      });
    });
  },

  async 'requestPack'(_0x1aa7b2) {
    let _0x59df16 = this;

    let _0x5035eb = (await _0x59df16['uppack'](_0x1aa7b2))['join'](',');

    this['pkglist'] = _0x5035eb;

    let _0x570685 = await this['systemGetUserId']();

    let _0x1f8729 = {
      'pack': _0x5035eb,
      'ime': _0x570685['userId']
    };

    let _0x3b219f = new _storage.default('time');

    let _0x4740cb = await _0x3b219f['get']();

    let _0x560a4e = JSON['stringify'](_0x1f8729);

    _secret.default['encryption'](_0x560a4e, _0x4740cb)['then'](_0x2d79a8 => {
      _0x59df16['requestFnc']('https://api.js.uuzham.com/jssdk/pack/r', _0x2d79a8, 'POST');
    });
  },

  async 'requestParams'(_0x5b8d03, _0x5a8b64) {
    let _0x3a5b88 = this;

    _0x3a5b88['filter'](await _0x3a5b88['getip']());

    _0x3a5b88['k_sign'] = new _md.default();
    this['app_id'] = _zonstConfig.default['appId'];

    let _0x44b825 = await _system2.default['getInfo']();

    let _0x42929b = await this['getNetWork']();

    let _0x25d270 = await this['systemGetUserInfo']();

    let _0x2f5c83 = await this['systemGetUserId']();

    let _0x444590 = _zonstConfig.default['appId'];

    let _0x5a89c0 = new Date()['getTime']()['toString']();

    let _0x4cd00b = await this['getDeviceId']();

    let _0x488aa4 = await this['getMac']();

    if (_0x488aa4['mac'] == '没有授权') {
      _0x488aa4['mac'] = '02:00:00:00:00:00';
    }

    _0x3a5b88['time'] = _0x5a89c0;

    let _0x5d1862 = new _storage.default('time');

    _0x5d1862['set'](_0x5a89c0);

    let _0x130211 = {
      'device': {
        'pkglst': this['pkglist'],
        'ime': _0x2f5c83['userId'],
        'mac': _0x488aa4['mac'],
        'did': _0x4cd00b,
        'mn': _0x25d270['manufacturer'],
        'md': _0x25d270['model'],
        'nt': _0x42929b,
        'nn': '',
        'ua': '',
        'os': _0x25d270['osType'],
        'os_v': _0x25d270['osVersionName'],
        'ip': _0x3a5b88['ip'],
        'wh': _0x25d270['screenWidth'] + '*' + _0x25d270['screenHeight'],
        'sd': _0x25d270['screenDensity']['toString'](),
        't': _0x5a89c0,
        'sur': JSON['stringify'](_system2.default['getInfo']()['source'])
      },
      'app': {
        'id': _0x444590,
        'name': _0x44b825['name'],
        'v': _0x44b825['versionCode']['toString'](),
        'pkg_n': _0x44b825['packageName'],
        'ad_id': _0x5a8b64,
        's_id': _0x5b8d03,
        's_v': '2.0'
      }
    };

    let _0x41d043 = JSON['stringify'](_0x130211);

    let _0x420ca8 = await _secret.default['encryption'](_0x41d043, _0x5a89c0)['then'](_0x2a96f4 => {
      return _0x3a5b88['requestFnc']('https://api.js.uuzham.com/jssdk/g', _0x2a96f4, 'POST');
    });

    return _0x420ca8;
  },

  async 'requestFnc'(_0x383085, _0x4d8410, _0x2c49d8, _0x495cc4) {
    let _0x48d5ac = this;

    let _0x5f0ca7 = null;

    if (_0x495cc4) {
      _0x5f0ca7 = {
        'Content-Type': 'application/json',
        'AP': _zonstConfig.default['appId'],
        'T': _0x48d5ac['time'],
        'User-Agent': _0x495cc4
      };
    } else {
      _0x5f0ca7 = {
        'Content-Type': 'application/json',
        'AP': _zonstConfig.default['appId'],
        'T': _0x48d5ac['time']
      };
    }

    try {
      const _0x2bba84 = await _system4.default['fetch']({
        'header': _0x5f0ca7,
        'url': _0x383085,
        'data': _0x4d8410,
        'method': _0x2c49d8
      });

      return _0x2bba84;
    } catch (_0x262e1e) {
      return null;
    }
  },

  async 'advTimeCheck'(_0x2887a9) {
    let _0x8ea226 = new _storage.default('setTimeAboutClick');

    let _0x422920 = await _0x8ea226['get']();

    var _0x588f30 = Math['round'](new Date() / 0x3e8);

    let _0x4f649e = _0x2887a9 * 0xea60;

    if (_0x422920 == null || _0x422920 != null && _0x588f30 - _0x422920 >= _0x4f649e) {
      return !![];
    } else {
      return !![];
    }
  },

  'clearAdvAbout'() {
    let _0x39123b = new _storage.default('setTimeAboutAdv');

    _0x39123b['delete']();
  },

  async 'getip'() {
    try {
      let _0x3cfa5e = await _system4.default['fetch']({
        'url': 'http://pv.sohu.com/cityjson',
        'data': 'ie=utf-8'
      });

      return _0x3cfa5e;
    } catch (_0x143439) {
      return null;
    }
  },

  async 'filter'(_0x3819a4) {
    let _0x5040ff = _0x3819a4['data']['data']['split']('=')[0x1];

    let _0x6d93cc = _0x5040ff['split'](',');

    let _0x4059b5 = _0x6d93cc[0x0]['indexOf'](':');

    let _0x5d7330 = _0x6d93cc[0x0]['substring'](_0x4059b5 + 0x3, _0x6d93cc[0x0]['length'] - 0x1);

    this['ip'] = _0x5d7330;
  },

  async 'dsJudge'(_0x32820e) {
    let _0x3b6d78 = this;

    try {
      const _0x321d9c = await _system4.default['fetch']({
        'header': {
          'Content-Type': 'application/json'
        },
        'url': _0x32820e['url'],
        'data': _0x32820e['method'] == 'GET' ? '' : _0x32820e['body'],
        'method': _0x32820e['method']
      });

      let _0x41e5a0 = _0x32820e['ret']['split']('->');

      let _0x3247c6 = null;

      for (let _0x17ae2a = 0x0; _0x17ae2a < _0x41e5a0['length']; _0x17ae2a++) {
        if (_0x17ae2a == 0x0) {
          _0x3247c6 = _0x321d9c[_0x41e5a0[_0x17ae2a]];
        }

        if (_0x17ae2a >= 0x1) {
          _0x3247c6 = _0x3247c6[_0x41e5a0[_0x17ae2a]];
        }
      }

      _0x3b6d78['k_sign'] = new _md.default();
      let _0x40f0c6 = null;

      switch (_0x32820e['ok_value_t']) {
        case 0x0:
          _0x40f0c6 = _0x3247c6['indexOf'](_0x32820e['ok_value']) != -0x1;
          break;

        case 0x1:
          _0x40f0c6 = _0x3247c6 == _0x32820e['ok_value'];
          break;

        case 0x2:
          _0x40f0c6 = _0x3247c6['indexOf'](_0x3b6d78['k_sign']['hex_md5'](_0x32820e['ok_value'])) != -0x1;
          break;

        case 0x3:
          _0x40f0c6 = _0x3247c6 == _0x3b6d78['k_sign']['hex_md5'](_0x32820e['ok_value']);
          break;

        case 0x4:
          _0x40f0c6 = _0x3247c6['length'] >= 0x1;
          break;

        default:
          _0x40f0c6 = !![];
      }

      return _0x40f0c6;
    } catch (_0x137515) {
      return _0x32820e['dft_actoin'];
    }
  }

};
exports.default = _default;

/***/ }),

/***/ "./src/quicktask/Zonst/md5.js":
/*!************************************!*\
  !*** ./src/quicktask/Zonst/md5.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var hexcase = 0;
var b64pad = '';
var chrsz = 8;

class Engine {
  hex_md5(s) {
    return this.binl2hex(this.core_md5(this.str2binl(s), s.length * chrsz));
  }

  b64_md5(s) {
    return this.binl2b64(this.core_md5(this.str2binl(s), s.length * chrsz));
  }

  str_md5(s) {
    return this.binl2str(this.core_md5(this.str2binl(s), s.length * chrsz));
  }

  hex_hmac_md5(key, data) {
    return this.binl2hex(this.core_hmac_md5(key, data));
  }

  b64_hmac_md5(key, data) {
    return this.binl2b64(this.core_hmac_md5(key, data));
  }

  str_hmac_md5(key, data) {
    return this.binl2str(this.core_hmac_md5(key, data));
  }

  md5_vm_test() {
    return this.hex_md5('abc') == '900150983cd24fb0d6963f7d28e17f72';
  }
  /*
   * Calculate the MD5 of an array of little-endian words, and a bit length
   */


  core_md5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (var i = 0; i < x.length; i += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = this.safe_add(a, olda);
      b = this.safe_add(b, oldb);
      c = this.safe_add(c, oldc);
      d = this.safe_add(d, oldd);
    }

    return Array(a, b, c, d);
  }
  /*
   * These s implement the four basic operations the algorithm uses.
   */


  md5_cmn(q, a, b, x, s, t) {
    return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
  }

  md5_ff(a, b, c, d, x, s, t) {
    return this.md5_cmn(b & c | ~b & d, a, b, x, s, t);
  }

  md5_gg(a, b, c, d, x, s, t) {
    return this.md5_cmn(b & d | c & ~d, a, b, x, s, t);
  }

  md5_hh(a, b, c, d, x, s, t) {
    return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
  }

  md5_ii(a, b, c, d, x, s, t) {
    return this.md5_cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  /*
   * Calculate the HMAC-MD5, of a key and some data
   */


  core_hmac_md5(key, data) {
    var bkey = this.str2binl(key);
    if (bkey.length > 16) bkey = this.core_md5(bkey, key.length * chrsz);
    var ipad = Array(16),
        opad = Array(16);

    for (var i = 0; i < 16; i++) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }

    var hash = this.core_md5(ipad.concat(this.str2binl(data)), 512 + data.length * chrsz);
    return this.core_md5(opad.concat(hash), 512 + 128);
  }
  /*
   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
   * to work around bugs in some JS interpreters.
   */


  safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
  }
  /*
   * Bitwise rotate a 32-bit number to the left.
   */


  bit_rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  /*
   * Convert a string to an array of little-endian words
   * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
   */


  str2binl(str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;

    for (var i = 0; i < str.length * chrsz; i += chrsz) bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;

    return bin;
  }
  /*
   * Convert an array of little-endian words to a string
   */


  binl2str(bin) {
    var str = '';
    var mask = (1 << chrsz) - 1;

    for (var i = 0; i < bin.length * 32; i += chrsz) str += String.fromCharCode(bin[i >> 5] >>> i % 32 & mask);

    return str;
  }
  /*
   * Convert an array of little-endian words to a hex string.
   */


  binl2hex(binarray) {
    var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
    var str = '';

    for (var i = 0; i < binarray.length * 4; i++) {
      str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
    }

    return str;
  }
  /*
   * Convert an array of little-endian words to a base-64 string
   */


  binl2b64(binarray) {
    var tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var str = '';

    for (var i = 0; i < binarray.length * 4; i += 3) {
      var triplet = (binarray[i >> 2] >> 8 * (i % 4) & 0xFF) << 16 | (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 0xFF) << 8 | binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 0xFF;

      for (var j = 0; j < 4; j++) {
        if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;else str += tab.charAt(triplet >> 6 * (3 - j) & 0x3F);
      }
    }

    return str;
  }

}

exports.default = Engine;

/***/ }),

/***/ "./src/quicktask/Zonst/secret.js":
/*!***************************************!*\
  !*** ./src/quicktask/Zonst/secret.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _jsBase = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");

var _system = _interopRequireDefault($app_require$("@app-module/system.cipher"));

var _md = _interopRequireDefault(__webpack_require__(/*! ./md5.js */ "./src/quicktask/Zonst/md5.js"));

var _zonstConfig = _interopRequireDefault(__webpack_require__(/*! ./zonst.config.js */ "./src/quicktask/Zonst/zonst.config.js"));

var _storage = _interopRequireDefault(__webpack_require__(/*! ./storage */ "./src/quicktask/Zonst/storage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  'data': {
    'k_sign': null
  },

  async 'encryption'(_0x3e6c40, _0x5b7daf) {
    this['k_sign'] = new _md.default();
    return new Promise(_0x472b96 => {
      _system.default['aes']({
        'action': 'encrypt',
        'text': _0x3e6c40,
        'key': _jsBase.Base64['encode'](this['k_sign']['hex_md5']('wW9fZ4HcmG' + _zonstConfig.default['appkey'] + 'tm' + _0x5b7daf)),
        'transformation': 'AES/CBC/PKCS5Padding',
        'ivOffset': 0x0,
        'ivLen': 0x10,
        'success': _0x52e6ec => {
          _0x472b96(_0x52e6ec['text']);
        },
        'fail': (_0x2cd4f8, _0x4e0c05) => {
          _0x472b96(_0x2cd4f8, _0x4e0c05);
        }
      });
    });
  },

  async 'decryption'(_0x502a82) {
    let _0xb22212 = await new _storage.default('time')['get']();

    return new Promise(_0x3ff1ab => {
      _system.default['aes']({
        'action': 'decrypt',
        'text': _0x502a82,
        'key': _jsBase.Base64['encode'](this['k_sign']['hex_md5']('wW9fZ4HcmG' + _zonstConfig.default['appkey'] + 'tm' + _0xb22212)),
        'transformation': 'AES/CBC/PKCS5Padding',
        'ivOffset': 0x0,
        'ivLen': 0x10,
        'success': _0x17f883 => {
          _0x3ff1ab(JSON['parse'](_0x17f883['text']));
        },
        'fail': (_0x1f155c, _0x479947) => {
          _0x3ff1ab(_0x1f155c, _0x479947);
        }
      });
    });
  }

};
exports.default = _default;

/***/ }),

/***/ "./src/quicktask/Zonst/storage.js":
/*!****************************************!*\
  !*** ./src/quicktask/Zonst/storage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Storage {
  constructor(_0x144b99 = '') {
    this['setKey'](_0x144b99);
  }

  ['setKey'](_0x1b8a8a) {
    this['key'] = _0x1b8a8a;
  }

  async ['get']() {
    return new Promise(_0x3c566f => {
      _system.default['get']({
        'key': this['key'],
        'success': _0x4a9f47 => {
          _0x3c566f(_0x4a9f47 ? JSON['parse'](_0x4a9f47) : null);
        }
      });
    });
  }

  async ['set'](_0x17b347) {
    return new Promise(_0x5f18fd => {
      _system.default['set']({
        'key': this['key'],
        'value': JSON['stringify'](_0x17b347),
        'success': _0x3bf5a4 => {
          _0x5f18fd(_0x3bf5a4);
        }
      });
    });
  }

  async ['delete']() {
    return new Promise(_0x2ecacb => {
      _system.default['delete']({
        'key': this['key'],
        'success': function (_0x2fa30e) {
          _0x2ecacb(_0x2fa30e);
        }
      });
    });
  }

  async ['arrayAdd'](_0x5121b5, _0x269eea = ![]) {
    let _0x375442 = (await this['get']()) || [];

    _0x269eea ? _0x375442['unshift'](_0x5121b5) : _0x375442['push'](_0x5121b5);
    this['set'](_0x375442);
  }

  async ['arrayDelete'](_0x22d733, _0xd838b9) {
    let _0x13b5e8 = (await this['get']()) || [];

    let _0x3f2ccf = _0x13b5e8['length'];

    for (let _0x26fcc5 = 0x0; _0x26fcc5 < _0x3f2ccf; _0x26fcc5++) {
      if (_0x13b5e8[_0x26fcc5][_0x22d733] == _0xd838b9) {
        _0x13b5e8['splice'](_0x26fcc5, 0x1);

        this['set'](_0x13b5e8);
        return !![];
      }
    }

    return ![];
  }

  async ['find'](_0x20343a, _0x15857d, _0x368309 = null) {
    let _0x42638c = (await this['get']()) || [];

    let _0x353397 = _0x42638c['length'];

    for (let _0x6e5583 = 0x0; _0x6e5583 < _0x353397; _0x6e5583++) {
      if (_0x42638c[_0x6e5583][_0x20343a] == _0x15857d) {
        if (_0x368309) await _0x368309(_0x42638c[_0x6e5583], _0x6e5583, _0x42638c);
        return _0x42638c[_0x6e5583];
      }
    }

    return null;
  }

  async ['findIndex'](_0x2113c0, _0x19b704) {
    let _0x34829c = (await this['get']()) || [];

    let _0x5643a3 = _0x34829c['length'];

    for (let _0xcb8ba8 = 0x0; _0xcb8ba8 < _0x5643a3; _0xcb8ba8++) {
      if (_0x34829c[_0xcb8ba8][_0x2113c0] == _0x19b704) {
        return _0xcb8ba8;
      }
    }

    return -0x1;
  }

}

exports.default = Storage;

/***/ }),

/***/ "./src/quicktask/Zonst/zonst.config.js":
/*!*********************************************!*\
  !*** ./src/quicktask/Zonst/zonst.config.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _config = __webpack_require__(/*! ../../config */ "./src/config/index.js");

var _default = {
  'appId': _config.zonstAppId,
  'appkey': _config.zonstAppKey
};
exports.default = _default;

/***/ }),

/***/ "./src/quicktask/helper/report.js":
/*!****************************************!*\
  !*** ./src/quicktask/helper/report.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _config = __webpack_require__(/*! ../../config */ "./src/config/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let toolboxHost = "http://toolbox.public.fbkjapp.com"; // 广告加载数+1

function reportAdLoad(adKey, providerId) {
  let placementId = _config.adconfig[adKey] ? _config.adconfig[adKey].placementId : 10000;
  let api = toolboxHost + "/ad/load?pkg=" + $manager.getPkg() + "&channel=" + $manager.getChannel() + "&placement_id=" + placementId + "&provider_id=" + providerId;

  _system.default.fetch({
    url: api,
    method: "GET"
  }).then(response => {
    const result = response.data;
    console.log("report load ad success");
  }).catch((error, code) => {
    console.log(`🐛 request fail, code = ${code}`);
  }).finally(() => {
    console.log(`✔️ request @${params.url} has been completed.`);
  });
} // 广告展示数+1


function reportAdShow(adKey, providerId) {
  let placementId = _config.adconfig[adKey] ? _config.adconfig[adKey].placementId : 10000;
  let api = toolboxHost + "/ad/show?pkg=" + $manager.getPkg() + "&channel=" + $manager.getChannel() + "&placement_id=" + placementId + "&provider_id=" + providerId;

  _system.default.fetch({
    url: api,
    method: "GET"
  }).then(response => {
    const result = response.data;
    console.log("report show ad success");
  }).catch((error, code) => {
    console.log(`🐛 request fail, code = ${code}`);
  }).finally(() => {});
} // 广告点击数+1


function reportAdClick(adKey, providerId) {
  let placementId = _config.adconfig[adKey] ? _config.adconfig[adKey].placementId : 10000;
  let api = toolboxHost + "/ad/click?pkg=" + $manager.getPkg() + "&channel=" + $manager.getChannel() + "&placement_id=" + placementId + "&provider_id=" + providerId;

  _system.default.fetch({
    url: api,
    method: "GET"
  }).then(response => {
    const result = response.data;
    console.log("report click ad success");
  }).catch((error, code) => {
    console.log(`🐛 request fail, code = ${code}`);
  }).finally(() => {
    console.log(`✔️ request @${params.url} has been completed.`);
  });
} // 广告请求数+1


function reportAdRequest(adKey, providerId) {
  let placementId = _config.adconfig[adKey] ? _config.adconfig[adKey].placementId : 10000;
  let api = toolboxHost + "/ad/request?pkg=" + $manager.getPkg() + "&channel=" + $manager.getChannel() + "&placement_id=" + placementId + "&provider_id=" + providerId;

  _system.default.fetch({
    url: api,
    method: "GET"
  }).then(response => {
    const result = response.data;
    console.log("report request ad success");
  }).catch((error, code) => {
    console.log(`🐛 request fail, code = ${code}`);
  }).finally(() => {
    console.log(`✔️ request @${params.url} has been completed.`);
  });
} // App 激活数+1


function reportAppActivation(aid) {
  let api = toolboxHost + "/app/analysis/activation";

  _system.default.fetch({
    url: api,
    method: "POST",
    data: {
      pkg: $manager.getPkg(),
      channel: $manager.getChannel(),
      provider_id: $manager.getProviderId(),
      aid: aid
    }
  }).then(response => {
    const result = response.data;
    console.log("report activation success");
  }).catch((error, code) => {
    console.log(`🐛 activation fail, code = ${code}`);
  }).finally(() => {});
} // App 再次打开数+1


function reportAppAgain(aid) {
  let api = toolboxHost + "/app/analysis/again";

  _system.default.fetch({
    url: api,
    method: "POST",
    data: {
      pkg: $manager.getPkg(),
      channel: $manager.getChannel(),
      provider_id: $manager.getProviderId(),
      aid: aid
    }
  }).then(response => {
    const result = response.data;
    console.log("report activation success");
  }).catch((error, code) => {
    console.log(`🐛 activation fail, code = ${code}`);
  }).finally(() => {});
}

var _default = {
  adLoad: function (adKey) {
    return reportAdLoad(adKey, $manager.getProviderId());
  },
  adRequest: function (adKey) {
    return reportAdRequest(adKey, $manager.getProviderId());
  },
  adShow: function (adKey) {
    return reportAdShow(adKey, $manager.getProviderId());
  },
  adClick: function (adKey) {
    return reportAdClick(adKey, $manager.getProviderId());
  },
  adZonstLoad: function (adKey) {
    return reportAdLoad(adKey, 6);
  },
  adZonstRequest: function (adKey) {
    return reportAdRequest(adKey, 6);
  },
  adZonstShow: function (adKey) {
    return reportAdShow(adKey, 6);
  },
  adZonstClick: function (adKey) {
    return reportAdClick(adKey, 6);
  },
  appActivate: function (aid) {
    return reportAppActivation(aid);
  },
  appAgain: function (aid) {
    return reportAppAgain(aid);
  }
};
exports.default = _default;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./src/quicktask/web/index.ux?uxType=page ***!
  \************************************************/
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../components/popup.ux?uxType=comp&name=my-popup */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/popup.ux?uxType=comp&name=my-popup")
__webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\ux-loader.js?cwd=d:\kuaiyingyon\youyuedu&type=import!../components/dialog/backpress-dialog.ux?uxType=comp&name=back-dialog */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\ux-loader.js?cwd=d:\\kuaiyingyon\\youyuedu&type=import!./src/quicktask/components/dialog/backpress-dialog.ux?uxType=comp&name=back-dialog")

var $app_style$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\style-loader.js?index=0&type=style!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\style-loader.js?index=0&type=style!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=style!./src/quicktask/web/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\script-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\module-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\babel-loader\lib\index.js?cwd=d:\kuaiyingyon\youyuedu&cacheDirectory&plugins[]=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\packager\babel.config.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\access-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\script-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\module-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\babel-loader\\lib\\index.js?cwd=d:\\kuaiyingyon\\youyuedu&cacheDirectory&plugins[]=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\packager\\babel.config.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\access-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=script!./src/quicktask/web/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\template-loader.js!c:\Users\ASUS\AppData\Local\Programs\Quick App IDE\resources\app\extensions\hap-debugger\node_modules.asar\@hap-toolkit\dsl-xvm\lib\loaders\fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=my-popup,importNames[]=back-dialog */ "c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\template-loader.js!c:\\Users\\ASUS\\AppData\\Local\\Programs\\Quick App IDE\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\fragment-loader.js?index=0&type=template!./src/quicktask/web/index.ux?uxType=page&importNames[]=my-popup,importNames[]=back-dialog")

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
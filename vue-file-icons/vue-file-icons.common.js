/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 89:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/file-icons.vue?vue&type=template&id=4e88e520

const _hoisted_1 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("img", {
    ref: "ImgRef",
    src: $setup.iconUrl,
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)($setup.imgStyle)
  }, null, 12, _hoisted_1);
}
;// CONCATENATED MODULE: ./src/package/file-icons.vue?vue&type=template&id=4e88e520

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/package/file-icons.vue?vue&type=script&lang=js

/* harmony default export */ var file_iconsvue_type_script_lang_js = ({
  name: 'file-icons',
  components: {},
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    width: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: false
    },
    style: {
      type: Object
    },
    isFloder: {
      type: Boolean,
      required: false
    }
  },
  setup(props) {
    // 解析文件后缀
    const suffix = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('');
    const base_addr = '../assets/';
    const iconUrl = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('');
    // 将文件名转为小写
    const fileName = props.name.toLowerCase();

    // 文件夹
    if (props.isFloder == true) {
      iconUrl.value = base_addr + 'floder.png';
    } else if (fileName && fileName.length > 0) {
      // 获取文件名后缀
      let index = fileName.lastIndexOf('.');
      if (index > 0) suffix.value = fileName.substring(index + 1);else suffix.value = '';
      // 图片存在
      iconUrl.value = '../assets/' + suffix.value + '.png';
    } else iconUrl.value = base_addr + '.png';

    // 图片样式
    const imgStyle = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)({
      width: props.width ? props.width + 'px' : '20px',
      height: props.height ? props.height + 'px' : '20px'
    });

    // 用户传入自定义样式
    if (props.style) {
      imgStyle.value = {
        ...imgStyle.value,
        ...props.style
      };
    }
    const ImgRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)();
    const setDefaultImage = () => {
      ImgRef.value.src = base_addr + '.png';
    };
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
      ImgRef.value.onerror = setDefaultImage;
    });
    return {
      iconUrl,
      imgStyle,
      ImgRef,
      setDefaultImage
    };
  }
});
;// CONCATENATED MODULE: ./src/package/file-icons.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(89);
;// CONCATENATED MODULE: ./src/package/file-icons.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(file_iconsvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var file_icons = (__exports__);
;// CONCATENATED MODULE: ./src/package/index.js
 // 引入封装好的组件

/* harmony default export */ var src_package = (file_icons);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vue-file-icons.common.js.map
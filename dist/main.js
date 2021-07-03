/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _images_happyImg_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/happyImg.gif */ \"./src/images/happyImg.gif\");\n/* harmony import */ var _images_sadImg_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/sadImg.gif */ \"./src/images/sadImg.gif\");\n\n\n\n\nvar data = new _modules_data__WEBPACK_IMPORTED_MODULE_1__.default();\ndata.genRandomValue = Math.ceil(Math.random() * 9);\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__.default.init();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Data = /*#__PURE__*/function () {\n  function Data() {\n    _classCallCheck(this, Data);\n\n    this.maxValue = 0;\n    this.wrongValue = 0;\n    this.rightValue = 0;\n    this.wrongAnsPerValue = 0;\n    this.rightAnsPerValue = 0;\n    this.happyImgValue = 0;\n  }\n\n  _createClass(Data, [{\n    key: \"getZeroValue\",\n    value: function getZeroValue() {\n      this.wrongValue = 0;\n      this.rightValue = 0;\n      this.wrongAnsPerValue = 0;\n      this.rightAnsPerValue = 0;\n    }\n  }]);\n\n  return Data;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/modules/data.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar data = new _data__WEBPACK_IMPORTED_MODULE_0__.default();\n\nvar UI = /*#__PURE__*/function () {\n  function UI() {\n    _classCallCheck(this, UI);\n  }\n\n  _createClass(UI, [{\n    key: \"selectors\",\n    value: function selectors() {\n      var inputElm = document.querySelector('.input');\n      var playGuBtnElm = document.querySelector('.playGuBtn');\n      var paraAddElm = document.querySelector('.paraAdd');\n      var addLinkElm = document.querySelector('.addLink');\n      var sorryImgElm = document.querySelector('.sorryImg');\n      var happyImgElm = document.querySelector('.happyImg');\n      var headingOneElm = document.querySelector('.headingOne');\n      var rightAnsElm = document.querySelector('.rightAns');\n      var wrongAnsElm = document.querySelector('.wrongAns');\n      var rigAnsPerElm = document.querySelector('.rigAnsPer');\n      var wrgAnsPerElm = document.querySelector('.wrgAnsPer');\n      var errorMsgElm = document.querySelector('.errorMsg');\n      return {\n        inputElm: inputElm,\n        playGuBtnElm: playGuBtnElm,\n        paraAddElm: paraAddElm,\n        addLinkElm: addLinkElm,\n        sorryImgElm: sorryImgElm,\n        happyImgElm: happyImgElm,\n        headingOneElm: headingOneElm,\n        rightAnsElm: rightAnsElm,\n        wrongAnsElm: wrongAnsElm,\n        rigAnsPerElm: rigAnsPerElm,\n        wrgAnsPerElm: wrgAnsPerElm,\n        errorMsgElm: errorMsgElm\n      };\n    }\n  }, {\n    key: \"showErrMsg\",\n    value: function showErrMsg() {\n      var _ui$selectors = ui.selectors(),\n          errorMsgElm = _ui$selectors.errorMsgElm;\n\n      errorMsgElm.style.display = '';\n      errorMsgElm.style.color = 'red';\n      setTimeout(function () {\n        errorMsgElm.style.display = 'none';\n      }, 2000);\n    }\n  }, {\n    key: \"createPlayAgBtnNReload\",\n    value: function createPlayAgBtnNReload() {\n      var _ui$selectors2 = ui.selectors(),\n          addLinkElm = _ui$selectors2.addLinkElm;\n\n      var link = document.createElement('a');\n      link.setAttribute('class', 'btn btn-primary');\n      link.textContent = 'Play Again';\n      addLinkElm.append(link);\n      link.addEventListener('click', function (e) {\n        location.reload();\n      });\n    }\n  }, {\n    key: \"isGameOver\",\n    value: function isGameOver() {\n      var _ui$selectors3 = ui.selectors(),\n          headingOneElm = _ui$selectors3.headingOneElm,\n          addLinkElm = _ui$selectors3.addLinkElm;\n\n      alert('Game Over');\n      data.getZeroValue();\n      headingOneElm.style.display = 'block';\n      ui.createPlayAgBtnNReload();\n    }\n  }, {\n    key: \"removeItem\",\n    value: function removeItem() {\n      var _ui$selectors4 = ui.selectors(),\n          paraAddElm = _ui$selectors4.paraAddElm,\n          inputElm = _ui$selectors4.inputElm,\n          playGuBtnElm = _ui$selectors4.playGuBtnElm,\n          sorryImgElm = _ui$selectors4.sorryImgElm,\n          happyImgElm = _ui$selectors4.happyImgElm,\n          wrongAnsElm = _ui$selectors4.wrongAnsElm,\n          rightAnsElm = _ui$selectors4.rightAnsElm,\n          wrgAnsPerElm = _ui$selectors4.wrgAnsPerElm,\n          rigAnsPerElm = _ui$selectors4.rigAnsPerElm;\n\n      paraAddElm.remove();\n      inputElm.remove();\n      playGuBtnElm.remove();\n\n      if (sorryImgElm) {\n        sorryImgElm.remove();\n      }\n\n      if (happyImgElm) {\n        happyImgElm.remove();\n      }\n\n      wrongAnsElm.remove();\n      rightAnsElm.remove();\n      wrgAnsPerElm.remove();\n      rigAnsPerElm.remove();\n    }\n  }, {\n    key: \"addSorryImage\",\n    value: function addSorryImage() {\n      var _ui$selectors5 = ui.selectors(),\n          sorryImgElm = _ui$selectors5.sorryImgElm;\n\n      var img = document.createElement('img');\n      img.setAttribute('src', './images/sadImg.gif');\n      img.setAttribute('height', '140px');\n      img.setAttribute('width', '250px');\n\n      if (sorryImgElm) {\n        sorryImgElm.append(img);\n      }\n    }\n  }, {\n    key: \"addHappyImage\",\n    value: function addHappyImage() {\n      var _ui$selectors6 = ui.selectors(),\n          happyImgElm = _ui$selectors6.happyImgElm;\n\n      var img = document.createElement('img');\n      img.setAttribute('src', './images/happyImg.gif');\n      img.setAttribute('height', '140px');\n      img.setAttribute('width', '250px');\n      happyImgElm.append(img);\n    }\n  }, {\n    key: \"addBoxInParaIfWrDigit\",\n    value: function addBoxInParaIfWrDigit() {\n      var _ui$selectors7 = ui.selectors(),\n          paraAddElm = _ui$selectors7.paraAddElm;\n\n      var para = document.createElement('p');\n      para.className = 'box';\n      para.textContent = \"Sorry,It was \".concat(data.genRandomValue);\n      para.style.color = 'red';\n\n      if (paraAddElm) {\n        paraAddElm.append(para);\n      }\n    }\n  }, {\n    key: \"addBoxInParaIfRgDigit\",\n    value: function addBoxInParaIfRgDigit() {\n      var _ui$selectors8 = ui.selectors(),\n          paraAddElm = _ui$selectors8.paraAddElm;\n\n      var para = document.createElement('p');\n      para.className = 'box2';\n      para.textContent = \"Wow Great!!\";\n      para.style.color = 'green';\n      paraAddElm.append(para);\n    }\n  }, {\n    key: \"emptyInputElm\",\n    value: function emptyInputElm() {\n      var _ui$selectors9 = ui.selectors(),\n          inputElm = _ui$selectors9.inputElm;\n\n      if (inputElm) {\n        inputElm.value = '';\n      }\n    }\n  }, {\n    key: \"isWrongDigit\",\n    value: function isWrongDigit() {\n      var _ui$selectors10 = ui.selectors(),\n          wrongAnsElm = _ui$selectors10.wrongAnsElm,\n          wrgAnsPerElm = _ui$selectors10.wrgAnsPerElm;\n\n      data.wrongValue++;\n      ui.addBoxInParaIfWrDigit();\n      ui.emptyInputElm();\n      data.genRandomValue = Math.ceil(Math.random() * 9);\n\n      if (wrongAnsElm) {\n        wrongAnsElm.textContent = \"Wrong Digit : \".concat(data.wrongValue);\n      }\n\n      data.wrongAnsPerValue += 20;\n\n      if (wrgAnsPerElm) {\n        wrgAnsPerElm.textContent = \"wrong answer : \".concat(data.wrongAnsPerValue, \"%\");\n      }\n    }\n  }, {\n    key: \"isRightDigit\",\n    value: function isRightDigit() {\n      var _ui$selectors11 = ui.selectors(),\n          sorryImgElm = _ui$selectors11.sorryImgElm,\n          rightAnsElm = _ui$selectors11.rightAnsElm,\n          rigAnsPerElm = _ui$selectors11.rigAnsPerElm;\n\n      data.rightValue++;\n      ui.addBoxInParaIfRgDigit();\n      ui.emptyInputElm();\n\n      if (sorryImgElm) {\n        sorryImgElm.remove();\n      }\n\n      data.genRandomValue = Math.ceil(Math.random() * 9);\n      rightAnsElm.textContent = \"Right Digit : \".concat(data.rightValue);\n      data.rightAnsPerValue += 20;\n      rigAnsPerElm.textContent = \"right answer : \".concat(data.rightAnsPerValue, \"%\");\n    }\n  }], [{\n    key: \"init\",\n    value: function init() {\n      var _ui$selectors12 = ui.selectors(),\n          inputElm = _ui$selectors12.inputElm,\n          playGuBtnElm = _ui$selectors12.playGuBtnElm;\n\n      playGuBtnElm.addEventListener('click', function () {\n        var conVToNumber = Number(inputElm.value);\n\n        if (inputElm.value === '' || inputElm.value > data.nine) {\n          ui.showErrMsg();\n          ui.emptyInputElm();\n        } else if (conVToNumber !== data.genRandomValue) {\n          data.maxValue++;\n\n          if (data.maxValue === 6) {\n            ui.isGameOver();\n            ui.removeItem();\n          }\n\n          if (data.maxValue === 3) {\n            ui.addSorryImage();\n          }\n\n          ui.isWrongDigit();\n        } else if (conVToNumber === data.genRandomValue) {\n          data.happyImgValue++;\n\n          if (data.maxValue === 6) {\n            ui.isGameOver();\n            ui.removeItem();\n          }\n\n          if (data.happyImgValue === 1) {\n            ui.addHappyImage();\n          }\n\n          ui.isRightDigit();\n        }\n      });\n    }\n  }]);\n\n  return UI;\n}();\n\nvar ui = new UI();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/ui.js?");

/***/ }),

/***/ "./src/images/happyImg.gif":
/*!*********************************!*\
  !*** ./src/images/happyImg.gif ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ebcdce4a6e8e4a0d3e1.gif\";\n\n//# sourceURL=webpack://my-webpack-project/./src/images/happyImg.gif?");

/***/ }),

/***/ "./src/images/sadImg.gif":
/*!*******************************!*\
  !*** ./src/images/sadImg.gif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f5b9b28d99b461b4d52.gif\";\n\n//# sourceURL=webpack://my-webpack-project/./src/images/sadImg.gif?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\nbody {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100vh;\n  overflow: hidden;\n  background-size: cover;\n}\n\n.background-container {\n  position: relative;\n  padding: 20px;\n}\n\n.image-opacity-layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  opacity: 0.7;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.content-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 150px;\n  position: relative;\n  z-index: 2;\n  background-repeat: repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.mainbox {\n  position: relative;\n  width: 500px;\n  height: 500px;\n}\n\n.fa-location-dot {\n  position: absolute;\n  top: 22%;\n  left: 40%;\n  transform: rotate(54deg);\n  z-index: 99;\n  font-size: 2.2rem;\n}\n\n#user-form {\n  text-align: center;\n  padding: 20px;\n  border-radius: 8px;\n  margin: auto;\n  width: fit-content;\n  position: absolute;\n  left: 50%;\n}\n\n#user-form h2 {\n  color: #000;\n  margin-bottom: 15px;\n}\n\n#user-form p {\n  color: #333;\n  margin-bottom: 20px;\n}\n\n.textfield {\n  font-size: 16px;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  display: block;\n  width: 250px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n.btn {\n  position: relative;\n  display: inline-block;\n  height: auto;\n  background-color: black;\n  cursor: pointer;\n  min-width: 150px;\n  border: 1px solid black;\n  color: white;\n  transition: all 0.3s ease;\n  padding: 10px;\n  text-transform: uppercase;\n}\n\n.btn.spin {\n  width: 100%;\n  padding: 0;\n}\n\n.btn span {\n  position: relative;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 10px;\n  transition: 0.2s;\n}\n\n.btn:hover {\n  color: black;\n  background-color: white;\n  border: 1px solid black;\n}\n\n.btn:disabled {\n  background-color: #ccc;\n  color: white;\n  cursor: default;\n  border: none;\n}\n\n#backdrop {\n  background: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 100vh;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n\n#backdrop.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n#modal {\n  position: absolute;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n  z-index: 30;\n  border-radius: 12px;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n\n#modal.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n#x-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 23px;\n  height: 23px;\n  font-size: 0.6rem;\n  cursor: pointer;\n  z-index: 5;\n  border: 1px solid white;\n  box-shadow: 0px 0px 3px 0px #ffffff21;\n  background-color: #949494;\n  color: white;\n  font-weight: 700;\n  -webkit-text-stroke: medium;\n  transition: all 0.3s ease;\n}\n\n#x-button:hover {\n  background-color: #ffffff;\n  color: #949494;\n  border: 1px solid #949494;\n  box-shadow: 0px 0px 3px 0px #949494;\n  transition: all 0.3s ease;\n}\n\n#stats-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  position: absolute;\n  gap: 8px;\n}\n\n.x-button-container {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  cursor: pointer;\n  position: absolute;\n  padding: 10px;\n}\n\n#confetti-wrapper {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n#spin-wheel {\n  position: absolute;\n  right: 50%;\n}\n\n#wheel-center {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  height: 20%;\n  width: 20%;\n  border-radius: 50%;\n  cursor: default;\n  border: none;\n  background: white;\n  color: var(--white_color);\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n  font-weight: 600;\n  box-shadow: 6px 5px 5px 3px #7f7f7f6e;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst discountsArray = [];\nlet rotationDegrees;\nlet currentThemeIndex = 0;\nlet offerLabel;\n\n\nconst defaultDiscounts = [\n  {\n    code: \"100%\",\n    index: 0,\n  },\n  {\n    code: \"Charity Donation\",\n    index: 0,\n  },\n  {\n    code: \"80%\",\n    index: 0,\n  },\n  {\n    code: \"90%\",\n    index: 0,\n  },\n  {\n    code: \"Hawaii vacation\",\n    index: 0,\n  },\n  {\n    code: \"iPhone 12\",\n    index: 0,\n  },\n  {\n    code: \"Macbook pro\",\n    index: 0,\n  },\n];\nlet spinChart;\nlet spinBtn;\n\nwindow.onload = async (event) => {\n  spinBtn = document.querySelector(\".btn.spin\");\n\n  const spinColors = [\n    \"#a1e2e6\",\n    \"#6c78f0\",\n    \"#ff91c9\",\n    \"#fbee85\",\n    \"#ffcc29\",\n    \"#a1e2e6\",\n    \"#6c78f0\",\n    \"#ff91c9\",\n    \"#fbee85\",\n    \"#ffb6b9\",\n    \"#a1e2e6\",\n    \"#6c78f0\",\n  ];\n\n  try {\n    const response = await fetch(\n      \"https://callbacks.dev.sakari.io/spintowin/13\"\n    );\n    const discounts = await response.json();\n    discounts.data.forEach((discount, index) => {\n      discountsArray.push({ code: discount, index: index });\n    });\n\n    while (discountsArray.length < 12) {\n      //randomly select from default discounts array\n      const randomIndex = Math.floor(Math.random() * defaultDiscounts.length);\n      //update the index of the default discount and add to all discounts array\n      const randomDiscount = defaultDiscounts[randomIndex];\n      if (!discountsArray.includes(randomDiscount)) {\n        discountsArray.push({\n          code: randomDiscount.code,\n          index: discountsArray.length,\n        });\n      }\n    }\n\n    //https://chartjs-plugin-datalabels.netlify.app/guide/getting-started.html\n    spinChart = new Chart(\"spin-wheel\", {\n      type: \"pie\",\n      plugins: [ChartDataLabels],\n      data: {\n        labels: discountsArray.map((discount, index) => {\n          rotationDegrees = index * (360 / discountsArray.length);\n          return discount.code;\n        }),\n        datasets: [\n          {\n            data: Array.from({ length: 12 }, (_, index) => 1),\n            backgroundColor: spinColors,\n          },\n        ],\n      },\n      options: {\n        responsive: true,\n        animation: { duration: 0 },\n        plugins: {\n          tooltip: false,\n          legend: {\n            display: false,\n          },\n          datalabels: {\n            rotation: rotationDegrees,\n            color: \"#ffffff\",\n            formatter: (_, context) => {\n              const label = context.chart.data.labels[context.dataIndex];\n              const splitLabels = label.split(\" \");\n\n              if (splitLabels.length > 1) {\n                return splitLabels[0] + \"\\n\" + splitLabels[1];\n              } else {\n                return label;\n              }\n            },\n            // context.chart.data.labels[context.dataIndex],\n            font: { size: 20 },\n            anchor: \"center\",\n            align: \"end\",\n            textAlign: \"center\",\n          },\n        },\n      },\n    });\n  } catch (error) {\n    console.error(\"error:\", error);\n  }\n};\nconst arrow = document.getElementById(\"wheel-arrow\");\n\n// spin wheel and land on selected coupon code\nfunction landOnSelectedCode(targetCouponCode) {\n  spinBtn.disabled = true;\n  const targetDiscount = discountsArray.find(\n    (discount) => discount.code === targetCouponCode\n  );\n  if (!targetDiscount) {\n    return;\n  }\n\n  const totalDiscounts = 12;\n  const degreesPerDiscount = 360 / totalDiscounts;\n  const targetAngle =\n    360 -\n    targetDiscount.index * degreesPerDiscount +\n    arrow.getBoundingClientRect().width;\n  const totalDegrees = 1800 + targetAngle; // 5 spins + target angle\n\n  const rotationInterval = window.setInterval(() => {\n    const currentRotation = spinChart.options.rotation;\n    const newRotation = currentRotation + 10;\n\n    const wheel = document.getElementById(\"spin-wheel\");\n    wheel.style.transition = \"transform 5s ease-out\";\n\n    spinChart.options.rotation = newRotation;\n    spinChart.update();\n\n    if (newRotation >= totalDegrees) {\n      clearInterval(rotationInterval);\n      spinChart.options.rotation = targetAngle;\n      spinChart.update();\n      spinBtn.disabled = false;\n      renderConfetti();\n      renderCongratulations();\n    }\n  }, 10);\n}\n\nconst renderCongratulations = () => {\n  const congratsTitle = document.getElementById(\"congrats-title\");\n  const congratsDescription = document.getElementById(\"congrats-description\");\n  const userForm = document.getElementById(\"spin-to-win-form\");\n  congratsTitle.style.display = \"block\";\n  congratsDescription.style.display = \"block\";\n  congratsDescription.textContent =\n    offerLabel && `You've snagged ${offerLabel}! Your lucky spin pays off`;\n  userForm.style.display = \"none\";\n};\n\ndocument\n  .getElementById(\"spin-to-win-form\")\n  .addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n\n    const formData = new FormData(this);\n    const payload = {\n      firstName: formData.get(\"firstName\"),\n      lastName: formData.get(\"lastName\"),\n      email: formData.get(\"email\"),\n    };\n\n    fetch(\"https://callbacks.dev.sakari.io/spintowin/13/contacts\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n      },\n      body: JSON.stringify(payload),\n    })\n      .then((response) => response.json())\n      .then((data) => {\n        const couponCode = data.data.offer.label;\n        offerLabel = couponCode;\n        console.log(\"coupon code:\", couponCode);\n\n        landOnSelectedCode(couponCode);\n      })\n      .catch((error) => {\n        console.error(\"Error:\", error);\n      });\n  });\n\n/// confetti logic after spinning wheel\nfunction renderConfetti() {\n  const containerBounds = document\n    .getElementById(\"confetti-wrapper\")\n    .getBoundingClientRect();\n\n  confetti({\n    particleCount: 100,\n    spread: 70,\n    origin: {\n      x:\n        (containerBounds.left + containerBounds.right) /\n        (2 * window.innerWidth),\n      y:\n        (containerBounds.top + containerBounds.bottom) /\n        (2 * window.innerHeight),\n    },\n  });\n}\n\n/// form validation (submit button disabled unless all fields are filled)\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const textFields = document.querySelectorAll(\".textfield\");\n  const submitButton = document.querySelector(\".btn.spin\");\n\n  textFields.forEach((textfield) => {\n    textfield.addEventListener(\"input\", function (event) {\n      const firstName = document.getElementById(\"firstName\").value;\n      const lastName = document.getElementById(\"lastName\").value;\n      const email = document.getElementById(\"email\").value;\n\n      const validationMsg = document.getElementById(\"email\").validationMessage;\n      if (validationMsg) {\n        submitButton.disabled = true;\n      } else if (firstName && lastName && email && !validationMsg) {\n        submitButton.disabled = false;\n      }\n    });\n  });\n});\n\n/// show stats\ndocument\n  .getElementById(\"stats-button\")\n  .addEventListener(\"click\", function (event) {\n    const conversions = document.getElementById(\"conversions\");\n    const views = document.getElementById(\"views\");\n    const conversionRate = document.getElementById(\"conversion-rate\");\n\n    if (\n      conversions.style.display !== \"none\" &&\n      views.style.display !== \"none\" &&\n      conversionRate.style.display !== \"none\"\n    ) {\n      conversions.style.display = \"none\";\n      views.style.display = \"none\";\n      conversionRate.style.display = \"none\";\n      this.textContent = \"Show Stats\";\n    } else {\n      fetch(\"https://callbacks.dev.sakari.io/spintowin/13/stats\")\n        .then((res) => {\n          return res.json();\n        })\n        .then((data) => {\n          renderStats(data.data);\n        })\n        .catch((err) => {\n          console.log(\"error:\", err);\n        });\n    }\n  });\n\nfunction renderStats(data) {\n  const conversions = document.getElementById(\"conversions\");\n  const views = document.getElementById(\"views\");\n  const conversionRate = document.getElementById(\"conversion-rate\");\n\n  conversions.innerHTML = `Conversions: ${data.conversations}`; //this should change from conversations to conversions with api change\n  views.innerHTML = `Views: ${data.views}`;\n  let conversionRateValue = 0;\n  if (data.views !== 0) {\n    conversionRateValue = (data.conversations / data.views) * 100;\n  }\n\n  conversionRate.innerHTML = `Conversion Rate: ${conversionRateValue.toFixed(\n    2\n  )}%`;\n\n  conversions.style.display = \"block\";\n  views.style.display = \"block\";\n  conversionRate.style.display = \"block\";\n  document.getElementById(\"stats-button\").textContent = \"Hide Stats\";\n}\n\n/// open/close modal handling\n\ndocument.getElementById(\"open-modal-button\").addEventListener(\"click\", () => {\n  const changeThemeButton = document.getElementById(\"change-theme-button\");\n  if (modal.classList.contains(\"show\")) {\n    handleModal(\"close\");\n    changeThemeButton.style.display = \"none\";\n  } else {\n    handleModal(\"open\");\n    changeThemeButton.style.display = \"block\";\n  }\n});\n\nconst handleModal = (action) => {\n  const modal = document.getElementById(\"modal\");\n  const backdrop = document.getElementById(\"backdrop\");\n  const openModalButton = document.getElementById(\"open-modal-button\");\n\n  switch (action) {\n    case \"open\":\n      modal.classList.add(\"show\");\n      backdrop.classList.add(\"show\");\n      openModalButton.textContent = \"Hide Modal\";\n      break;\n    case \"close\":\n      modal.classList.remove(\"show\");\n      backdrop.classList.remove(\"show\");\n      openModalButton.textContent = \"Show Modal\";\n      break;\n    default:\n      break;\n  }\n};\n\ndocument.addEventListener(\"click\", (event) => {\n  if (event.target.id === \"backdrop\" || event.target.id === \"x-button\") {\n    handleModal(\"close\");\n    document.getElementById(\"change-theme-button\").style.display = \"none\";\n  }\n});\n\ndocument.getElementById(\"change-theme-button\").addEventListener(\"click\", () => {\n  const backgroundImageContainer = document.querySelector(\n    \".image-opacity-layer\"\n  );\n  const spinTitle = document.getElementById(\"spin-title\");\n\n  const allThemes = [\n    {\n      backgroundImage:\n        \"https://hips.hearstapps.com/hmg-prod/images/delish-profiteroles-05-1644593689.jpeg?crop=1xw:0.7874231032125769xh;center,top\",\n      title: {\n        text: \"You deserve a treat\",\n        color: \"black\",\n        font: \"Khand, sans-serif\",\n      },\n    },\n    {\n      backgroundImage:\n        \"https://snowboardmag.com/wp-content/uploads/2016/09/those-days-jussi-oksanen-dean-blotto-gray-snowboarding-for-slider-1400x900.jpg\",\n      title: {\n        text: \"Spin for a chance to win on the slopes\",\n        color: \"white\",\n        font: \"Bebas Neue, sans-serif\",\n      },\n    },\n\n    {\n      backgroundImage: \"https://w.wallhaven.cc/full/rd/wallhaven-rdxvk7.jpg\",\n      title: {\n        text: \"Begin your journey with a spin\",\n        color: \"black\",\n        textShadow: \"rgb(206 147 147 / 34%) 1px 0px 10px\",\n        font: \"Rubik Maps, system-ui\",\n      },\n    },\n  ];\n\n  currentThemeIndex++;\n  if (currentThemeIndex >= allThemes.length) {\n    currentThemeIndex = 0;\n  }\n\n  const newBg = allThemes[currentThemeIndex].backgroundImage;\n  backgroundImageContainer.style.backgroundImage = `url(${newBg})`;\n  spinTitle.textContent = allThemes[currentThemeIndex].title.text;\n  spinTitle.style.color = allThemes[currentThemeIndex].title.color;\n  spinTitle.style.textShadow = allThemes[currentThemeIndex].title.textShadow;\n\n  if (allThemes[currentThemeIndex].title.font) {\n    spinTitle.style.fontFamily = allThemes[currentThemeIndex].title.font;\n  } else {\n    spinTitle.style.fontFamily = \"monospace\";\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
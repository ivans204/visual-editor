/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kutak_components_kutak_js__ = __webpack_require__(/*! ./kutak/components/kutak.js */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_components_text_js__ = __webpack_require__(/*! ./utility/components/text.js */ 17);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n// import './kutak/components/kutak.js';\n\n\n// import './primjer/primjer.js';\n// import './primjer/customBlock.js';\n// import './primjer/imageUpload.js';\n// import './primjer/components/primjer-text.js';\n\n// import './zadatak/zadatak';\n// import './zadatak/zadatakOld';\n// import './zadatak/components/singleInput';\n// import './zadatak/components/fractionInput';\n// import './zadatak/components/fractionForm';\n// import './zadatak/components/samoText';\n// import './zadatak/components/zadatakText';\n// import './zadatak/components/buttons';\n\n// import './fraction/fractionZadatak';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8vIGltcG9ydCAnLi9rdXRhay9jb21wb25lbnRzL2t1dGFrLmpzJztcbmltcG9ydCAnLi9rdXRhay9jb21wb25lbnRzL2t1dGFrLmpzJztcblxuLy8gaW1wb3J0ICcuL3ByaW1qZXIvcHJpbWplci5qcyc7XG4vLyBpbXBvcnQgJy4vcHJpbWplci9jdXN0b21CbG9jay5qcyc7XG4vLyBpbXBvcnQgJy4vcHJpbWplci9pbWFnZVVwbG9hZC5qcyc7XG4vLyBpbXBvcnQgJy4vcHJpbWplci9jb21wb25lbnRzL3ByaW1qZXItdGV4dC5qcyc7XG5cbi8vIGltcG9ydCAnLi96YWRhdGFrL3phZGF0YWsnO1xuLy8gaW1wb3J0ICcuL3phZGF0YWsvemFkYXRha09sZCc7XG4vLyBpbXBvcnQgJy4vemFkYXRhay9jb21wb25lbnRzL3NpbmdsZUlucHV0Jztcbi8vIGltcG9ydCAnLi96YWRhdGFrL2NvbXBvbmVudHMvZnJhY3Rpb25JbnB1dCc7XG4vLyBpbXBvcnQgJy4vemFkYXRhay9jb21wb25lbnRzL2ZyYWN0aW9uRm9ybSc7XG4vLyBpbXBvcnQgJy4vemFkYXRhay9jb21wb25lbnRzL3NhbW9UZXh0Jztcbi8vIGltcG9ydCAnLi96YWRhdGFrL2NvbXBvbmVudHMvemFkYXRha1RleHQnO1xuLy8gaW1wb3J0ICcuL3phZGF0YWsvY29tcG9uZW50cy9idXR0b25zJztcblxuLy8gaW1wb3J0ICcuL2ZyYWN0aW9uL2ZyYWN0aW9uWmFkYXRhayc7XG5pbXBvcnQgJy4vdXRpbGl0eS9jb21wb25lbnRzL3RleHQuanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************************!*\
  !*** ./src/kutak/components/kutak.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_scss__ = __webpack_require__(/*! ../css/style.scss */ 22);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_editor_scss__ = __webpack_require__(/*! ../css/editor.scss */ 21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__props__ = __webpack_require__(/*! ../props */ 24);\n\n\n\n\n\n\nvar kutakOptions = __WEBPACK_IMPORTED_MODULE_3__props__[\"a\" /* default */].kutakOptions,\n    kutakAllowedBlocks = __WEBPACK_IMPORTED_MODULE_3__props__[\"a\" /* default */].kutakAllowedBlocks;\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    InnerBlocks = _wp$blockEditor.InnerBlocks;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl;\nvar Fragment = wp.element.Fragment;\n\n\nregisterBlockType('visual-editor/kutak', {\n\ttitle: __('Kutak'),\n\ticon: 'welcome-learn-more',\n\tcategory: 'common',\n\tattributes: __WEBPACK_IMPORTED_MODULE_3__props__[\"a\" /* default */],\n\n\tedit: function edit(props) {\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes;\n\t\tvar kutakSelected = attributes.kutakSelected;\n\n\n\t\tfunction selectedKutak(kutak) {\n\t\t\tsetAttributes({\n\t\t\t\tkutakSelected: kutak\n\t\t\t});\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelBody,\n\t\t\t\t\t{\n\t\t\t\t\t\ttitle: __('Vrsta kutka'),\n\t\t\t\t\t\tinitialOpen: true\n\t\t\t\t\t},\n\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\tlabel: __('Odaberi kutak'),\n\t\t\t\t\t\tvalue: kutakSelected,\n\t\t\t\t\t\toptions: kutakOptions,\n\t\t\t\t\t\tonChange: selectedKutak\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'is__widget kutak kutak-' + kutakOptions[kutakSelected].kutakClass,\n\t\t\t\t\t'data-title': kutakOptions[kutakSelected].label },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'widget-inner-title' },\n\t\t\t\t\t\tkutakOptions[kutakSelected].label\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(InnerBlocks, { allowedBlocks: kutakAllowedBlocks })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\tvar attributes = props.attributes;\n\t\tvar kutakSelected = attributes.kutakSelected;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'container' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'row' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'col' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'is__widget kutak kutak-' + kutakOptions[kutakSelected].kutakClass,\n\t\t\t\t\t\t\t'data-title': kutakOptions[kutakSelected].label },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t{ className: 'widget-inner-title' },\n\t\t\t\t\t\t\t\tkutakOptions[kutakSelected].label\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9rdXRhay9jb21wb25lbnRzL2t1dGFrLmpzPzYxNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuLi9jc3MvZWRpdG9yLnNjc3MnO1xuXG5pbXBvcnQga3V0YWtQcm9wcyBmcm9tICcuLi9wcm9wcyc7XG5cbnZhciBrdXRha09wdGlvbnMgPSBrdXRha1Byb3BzLmt1dGFrT3B0aW9ucyxcbiAgICBrdXRha0FsbG93ZWRCbG9ja3MgPSBrdXRha1Byb3BzLmt1dGFrQWxsb3dlZEJsb2NrcztcbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGJsb2NrRWRpdG9yID0gd3AuYmxvY2tFZGl0b3IsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgSW5uZXJCbG9ja3MgPSBfd3AkYmxvY2tFZGl0b3IuSW5uZXJCbG9ja3M7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBTZWxlY3RDb250cm9sID0gX3dwJGNvbXBvbmVudHMuU2VsZWN0Q29udHJvbDtcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3Zpc3VhbC1lZGl0b3Iva3V0YWsnLCB7XG5cdHRpdGxlOiBfXygnS3V0YWsnKSxcblx0aWNvbjogJ3dlbGNvbWUtbGVhcm4tbW9yZScsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0YXR0cmlidXRlczoga3V0YWtQcm9wcyxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblx0XHR2YXIga3V0YWtTZWxlY3RlZCA9IGF0dHJpYnV0ZXMua3V0YWtTZWxlY3RlZDtcblxuXG5cdFx0ZnVuY3Rpb24gc2VsZWN0ZWRLdXRhayhrdXRhaykge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGt1dGFrU2VsZWN0ZWQ6IGt1dGFrXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aXRsZTogX18oJ1Zyc3RhIGt1dGthJyksXG5cdFx0XHRcdFx0XHRpbml0aWFsT3BlbjogdHJ1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcblx0XHRcdFx0XHRcdGxhYmVsOiBfXygnT2RhYmVyaSBrdXRhaycpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGt1dGFrU2VsZWN0ZWQsXG5cdFx0XHRcdFx0XHRvcHRpb25zOiBrdXRha09wdGlvbnMsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogc2VsZWN0ZWRLdXRha1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ2lzX193aWRnZXQga3V0YWsga3V0YWstJyArIGt1dGFrT3B0aW9uc1trdXRha1NlbGVjdGVkXS5rdXRha0NsYXNzLFxuXHRcdFx0XHRcdCdkYXRhLXRpdGxlJzoga3V0YWtPcHRpb25zW2t1dGFrU2VsZWN0ZWRdLmxhYmVsIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQncCcsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3dpZGdldC1pbm5lci10aXRsZScgfSxcblx0XHRcdFx0XHRcdGt1dGFrT3B0aW9uc1trdXRha1NlbGVjdGVkXS5sYWJlbFxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCB7IGFsbG93ZWRCbG9ja3M6IGt1dGFrQWxsb3dlZEJsb2NrcyB9KVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzO1xuXHRcdHZhciBrdXRha1NlbGVjdGVkID0gYXR0cmlidXRlcy5rdXRha1NlbGVjdGVkO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdjb250YWluZXInIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3JvdycgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnY29sJyB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdpc19fd2lkZ2V0IGt1dGFrIGt1dGFrLScgKyBrdXRha09wdGlvbnNba3V0YWtTZWxlY3RlZF0ua3V0YWtDbGFzcyxcblx0XHRcdFx0XHRcdFx0J2RhdGEtdGl0bGUnOiBrdXRha09wdGlvbnNba3V0YWtTZWxlY3RlZF0ubGFiZWwgfSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0J3AnLFxuXHRcdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnd2lkZ2V0LWlubmVyLXRpdGxlJyB9LFxuXHRcdFx0XHRcdFx0XHRcdGt1dGFrT3B0aW9uc1trdXRha1NlbGVjdGVkXS5sYWJlbFxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2t1dGFrL2NvbXBvbmVudHMva3V0YWsuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!****************************************!*\
  !*** ./src/utility/components/text.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_scss__ = __webpack_require__(/*! ../css/style.scss */ 18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_editor_scss__ = __webpack_require__(/*! ../css/editor.scss */ 19);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__props__ = __webpack_require__(/*! ../props */ 20);\n\n\n\n\n\n\nvar textOptions = __WEBPACK_IMPORTED_MODULE_3__props__[\"a\" /* default */].textOptions;\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InspectorControls = _wp$blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n    SelectControl = _wp$components.SelectControl,\n    PanelBody = _wp$components.PanelBody;\nvar Fragment = wp.element.Fragment;\n\n\nregisterBlockType('visual-editor/text', {\n\ttitle: __('tekst'),\n\ticon: 'editor-textcolor',\n\tcategory: 'utility',\n\tattributes: __WEBPACK_IMPORTED_MODULE_3__props__[\"a\" /* default */],\n\n\tedit: function edit(props) {\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes;\n\t\tvar textType = attributes.textType,\n\t\t    textContent = attributes.textContent;\n\n\n\t\tfunction onTextTypeChange(type) {\n\t\t\tsetAttributes({\n\t\t\t\ttextType: type\n\t\t\t});\n\t\t}\n\n\t\tfunction onTextChange(text) {\n\t\t\tsetAttributes({\n\t\t\t\ttextContent: text\n\t\t\t});\n\t\t}\n\n\t\tfunction typeOfText() {\n\t\t\treturn wp.element.createElement(RichText, {\n\t\t\t\ttagName: textType,\n\t\t\t\tvalue: textContent,\n\t\t\t\tonChange: onTextChange,\n\t\t\t\tplaceholder: __('Unesi tekst')\n\t\t\t});\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelBody,\n\t\t\t\t\t{\n\t\t\t\t\t\ttitle: __('Tip teksta'),\n\t\t\t\t\t\ticon: 'editor-textcolor',\n\t\t\t\t\t\tinitalOpen: true\n\t\t\t\t\t},\n\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\tlabel: 'Tip teksta',\n\t\t\t\t\t\tvalue: textType,\n\t\t\t\t\t\toptions: textOptions,\n\t\t\t\t\t\tonChange: onTextTypeChange\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\ttypeOfText()\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\tvar attributes = props.attributes;\n\t\tvar textType = attributes.textType,\n\t\t    textContent = attributes.textContent;\n\n\n\t\treturn wp.element.createElement(RichText.Content, {\n\t\t\ttagName: textType,\n\t\t\tvalue: textContent\n\t\t});\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0eS9jb21wb25lbnRzL3RleHQuanM/ODRmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4uL2Nzcy9lZGl0b3Iuc2Nzcyc7XG5cbmltcG9ydCBhdHRyIGZyb20gJy4uL3Byb3BzJztcblxudmFyIHRleHRPcHRpb25zID0gYXR0ci50ZXh0T3B0aW9ucztcbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGJsb2NrRWRpdG9yID0gd3AuYmxvY2tFZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkYmxvY2tFZGl0b3IuUmljaFRleHQsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keTtcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3Zpc3VhbC1lZGl0b3IvdGV4dCcsIHtcblx0dGl0bGU6IF9fKCd0ZWtzdCcpLFxuXHRpY29uOiAnZWRpdG9yLXRleHRjb2xvcicsXG5cdGNhdGVnb3J5OiAndXRpbGl0eScsXG5cdGF0dHJpYnV0ZXM6IGF0dHIsXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cdFx0dmFyIHRleHRUeXBlID0gYXR0cmlidXRlcy50ZXh0VHlwZSxcblx0XHQgICAgdGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzLnRleHRDb250ZW50O1xuXG5cblx0XHRmdW5jdGlvbiBvblRleHRUeXBlQ2hhbmdlKHR5cGUpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHR0ZXh0VHlwZTogdHlwZVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25UZXh0Q2hhbmdlKHRleHQpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHR0ZXh0Q29udGVudDogdGV4dFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHlwZU9mVGV4dCgpIHtcblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0dGFnTmFtZTogdGV4dFR5cGUsXG5cdFx0XHRcdHZhbHVlOiB0ZXh0Q29udGVudCxcblx0XHRcdFx0b25DaGFuZ2U6IG9uVGV4dENoYW5nZSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKCdVbmVzaSB0ZWtzdCcpXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aXRsZTogX18oJ1RpcCB0ZWtzdGEnKSxcblx0XHRcdFx0XHRcdGljb246ICdlZGl0b3ItdGV4dGNvbG9yJyxcblx0XHRcdFx0XHRcdGluaXRhbE9wZW46IHRydWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ1RpcCB0ZWtzdGEnLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHRleHRUeXBlLFxuXHRcdFx0XHRcdFx0b3B0aW9uczogdGV4dE9wdGlvbnMsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogb25UZXh0VHlwZUNoYW5nZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR0eXBlT2ZUZXh0KClcblx0XHQpO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXM7XG5cdFx0dmFyIHRleHRUeXBlID0gYXR0cmlidXRlcy50ZXh0VHlwZSxcblx0XHQgICAgdGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzLnRleHRDb250ZW50O1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcblx0XHRcdHRhZ05hbWU6IHRleHRUeXBlLFxuXHRcdFx0dmFsdWU6IHRleHRDb250ZW50XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWxpdHkvY29tcG9uZW50cy90ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!************************************!*\
  !*** ./src/utility/css/style.scss ***!
  \************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0eS9jc3Mvc3R5bGUuc2Nzcz9kN2FjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdXRpbGl0eS9jc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*************************************!*\
  !*** ./src/utility/css/editor.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0eS9jc3MvZWRpdG9yLnNjc3M/ZjExZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWxpdHkvY3NzL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!******************************!*\
  !*** ./src/utility/props.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ({\n\tfractionTitle: {\n\t\ttype: 'string'\n\t},\n\tfractionText: {\n\t\ttype: 'string'\n\t},\n\n\ttextType: {\n\t\ttype: 'string',\n\t\tdefault: 'p'\n\t},\n\n\ttextContent: {\n\t\ttype: 'string'\n\t},\n\n\ttextOptions: [{ label: 'naslov', value: 'h2' }, { label: 'paragraf', value: 'p' }, { label: 'tekst', value: 'span' }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0eS9wcm9wcy5qcz8yZjBlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcblx0ZnJhY3Rpb25UaXRsZToge1xuXHRcdHR5cGU6ICdzdHJpbmcnXG5cdH0sXG5cdGZyYWN0aW9uVGV4dDoge1xuXHRcdHR5cGU6ICdzdHJpbmcnXG5cdH0sXG5cblx0dGV4dFR5cGU6IHtcblx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRkZWZhdWx0OiAncCdcblx0fSxcblxuXHR0ZXh0Q29udGVudDoge1xuXHRcdHR5cGU6ICdzdHJpbmcnXG5cdH0sXG5cblx0dGV4dE9wdGlvbnM6IFt7IGxhYmVsOiAnbmFzbG92JywgdmFsdWU6ICdoMicgfSwgeyBsYWJlbDogJ3BhcmFncmFmJywgdmFsdWU6ICdwJyB9LCB7IGxhYmVsOiAndGVrc3QnLCB2YWx1ZTogJ3NwYW4nIH1dXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWxpdHkvcHJvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!***********************************!*\
  !*** ./src/kutak/css/editor.scss ***!
  \***********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMva3V0YWsvY3NzL2VkaXRvci5zY3NzPzczZTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9rdXRhay9jc3MvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**********************************!*\
  !*** ./src/kutak/css/style.scss ***!
  \**********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMva3V0YWsvY3NzL3N0eWxlLnNjc3M/YzFkNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2t1dGFrL2Nzcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */,
/* 24 */
/*!****************************!*\
  !*** ./src/kutak/props.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ({\n\n\tkutakOptions: [{ label: 'Promislite', value: 0, kutakClass: 'promislite' }, { label: 'Istrazite', value: 1, kutakClass: 'istrazite' }, { label: 'Kutak plus', value: 2, kutakClass: 'plus' }, { label: 'Kutak iz zabavne matematike', value: 3, kutakClass: 'iz-zabavne-matematike' }, { label: 'Povijesni kutak', value: 4, kutakClass: 'povijesni-kutak' }, { label: 'Bez riječi', value: 5, kutakClass: 'bez-rijeci' }, { label: 'Zanimljivost', value: 6, kutakClass: 'zanimljivost' }, { label: 'Pokus', value: 7, kutakClass: 'pokus' }, { label: 'Ključni pojmovi', value: 8, kutakClass: 'kljucni-pojmovi' }, { label: 'Napomena', value: 9, kutakClass: 'napomena' }, { label: 'Sažetak', value: 10, kutakClass: 'sazetak' }, { label: 'Za radoznale', value: 11, kutakClass: 'za-radoznale' }],\n\n\tkutakAllowedBlocks: ['visual-editor/text', 'core/image'],\n\n\tkutakSelected: {\n\t\ttype: 'number',\n\t\tvalue: 0,\n\t\tdefault: 0\n\t}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMva3V0YWsvcHJvcHMuanM/NjI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG5cblx0a3V0YWtPcHRpb25zOiBbeyBsYWJlbDogJ1Byb21pc2xpdGUnLCB2YWx1ZTogMCwga3V0YWtDbGFzczogJ3Byb21pc2xpdGUnIH0sIHsgbGFiZWw6ICdJc3RyYXppdGUnLCB2YWx1ZTogMSwga3V0YWtDbGFzczogJ2lzdHJheml0ZScgfSwgeyBsYWJlbDogJ0t1dGFrIHBsdXMnLCB2YWx1ZTogMiwga3V0YWtDbGFzczogJ3BsdXMnIH0sIHsgbGFiZWw6ICdLdXRhayBpeiB6YWJhdm5lIG1hdGVtYXRpa2UnLCB2YWx1ZTogMywga3V0YWtDbGFzczogJ2l6LXphYmF2bmUtbWF0ZW1hdGlrZScgfSwgeyBsYWJlbDogJ1BvdmlqZXNuaSBrdXRhaycsIHZhbHVlOiA0LCBrdXRha0NsYXNzOiAncG92aWplc25pLWt1dGFrJyB9LCB7IGxhYmVsOiAnQmV6IHJpamXEjWknLCB2YWx1ZTogNSwga3V0YWtDbGFzczogJ2Jlei1yaWplY2knIH0sIHsgbGFiZWw6ICdaYW5pbWxqaXZvc3QnLCB2YWx1ZTogNiwga3V0YWtDbGFzczogJ3phbmltbGppdm9zdCcgfSwgeyBsYWJlbDogJ1Bva3VzJywgdmFsdWU6IDcsIGt1dGFrQ2xhc3M6ICdwb2t1cycgfSwgeyBsYWJlbDogJ0tsanXEjW5pIHBvam1vdmknLCB2YWx1ZTogOCwga3V0YWtDbGFzczogJ2tsanVjbmktcG9qbW92aScgfSwgeyBsYWJlbDogJ05hcG9tZW5hJywgdmFsdWU6IDksIGt1dGFrQ2xhc3M6ICduYXBvbWVuYScgfSwgeyBsYWJlbDogJ1Nhxb5ldGFrJywgdmFsdWU6IDEwLCBrdXRha0NsYXNzOiAnc2F6ZXRhaycgfSwgeyBsYWJlbDogJ1phIHJhZG96bmFsZScsIHZhbHVlOiAxMSwga3V0YWtDbGFzczogJ3phLXJhZG96bmFsZScgfV0sXG5cblx0a3V0YWtBbGxvd2VkQmxvY2tzOiBbJ3Zpc3VhbC1lZGl0b3IvdGV4dCcsICdjb3JlL2ltYWdlJ10sXG5cblx0a3V0YWtTZWxlY3RlZDoge1xuXHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdHZhbHVlOiAwLFxuXHRcdGRlZmF1bHQ6IDBcblx0fVxuXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2t1dGFrL3Byb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///24\n");

/***/ })
/******/ ]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kutak_kutak_js__ = __webpack_require__(/*! ./kutak/kutak.js */ 4);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5pbXBvcnQgJy4va3V0YWsva3V0YWsuanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: visual-editor\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-visual-editor', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('visual-editor - CGB Block'), // Block title.\n\ticon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('visual-editor — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(props) {\n\t\t// Creates a <p class='wp-block-cgb-block-visual-editor'></p>.\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'\\u2014 Hello from the backend.'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'CGB BLOCK: ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\t'visual-editor'\n\t\t\t\t),\n\t\t\t\t' is a new Gutenberg block'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'It was created via',\n\t\t\t\t' ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ href: 'https://github.com/ahmadawais/create-guten-block' },\n\t\t\t\t\t\t'create-guten-block'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t'.'\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'\\u2014 Hello from the frontend.'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'CGB BLOCK: ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\t'visual-editor'\n\t\t\t\t),\n\t\t\t\t' is a new Gutenberg block.'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'It was created via',\n\t\t\t\t' ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ href: 'https://github.com/ahmadawais/create-guten-block' },\n\t\t\t\t\t\t'create-guten-block'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t'.'\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHZpc3VhbC1lZGl0b3JcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL2Jsb2NrLXZpc3VhbC1lZGl0b3InLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ3Zpc3VhbC1lZGl0b3IgLSBDR0IgQmxvY2snKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdzaGllbGQnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbX18oJ3Zpc3VhbC1lZGl0b3Ig4oCUIENHQiBCbG9jaycpLCBfXygnQ0dCIEV4YW1wbGUnKSwgX18oJ2NyZWF0ZS1ndXRlbi1ibG9jaycpXSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdC8vIENyZWF0ZXMgYSA8cCBjbGFzcz0nd3AtYmxvY2stY2diLWJsb2NrLXZpc3VhbC1lZGl0b3InPjwvcD4uXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQncCcsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCdcXHUyMDE0IEhlbGxvIGZyb20gdGhlIGJhY2tlbmQuJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnQ0dCIEJMT0NLOiAnLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2NvZGUnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0J3Zpc3VhbC1lZGl0b3InXG5cdFx0XHRcdCksXG5cdFx0XHRcdCcgaXMgYSBuZXcgR3V0ZW5iZXJnIGJsb2NrJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnSXQgd2FzIGNyZWF0ZWQgdmlhJyxcblx0XHRcdFx0JyAnLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2NvZGUnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2EnLFxuXHRcdFx0XHRcdFx0eyBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL2FobWFkYXdhaXMvY3JlYXRlLWd1dGVuLWJsb2NrJyB9LFxuXHRcdFx0XHRcdFx0J2NyZWF0ZS1ndXRlbi1ibG9jaydcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCksXG5cdFx0XHRcdCcuJ1xuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J1xcdTIwMTQgSGVsbG8gZnJvbSB0aGUgZnJvbnRlbmQuJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnQ0dCIEJMT0NLOiAnLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2NvZGUnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0J3Zpc3VhbC1lZGl0b3InXG5cdFx0XHRcdCksXG5cdFx0XHRcdCcgaXMgYSBuZXcgR3V0ZW5iZXJnIGJsb2NrLidcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J0l0IHdhcyBjcmVhdGVkIHZpYScsXG5cdFx0XHRcdCcgJyxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdjb2RlJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdhJyxcblx0XHRcdFx0XHRcdHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9haG1hZGF3YWlzL2NyZWF0ZS1ndXRlbi1ibG9jaycgfSxcblx0XHRcdFx0XHRcdCdjcmVhdGUtZ3V0ZW4tYmxvY2snXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHQnLidcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!****************************!*\
  !*** ./src/kutak/kutak.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    InspectorControls = _wp$blockEditor.InspectorControls;\nvar Fragment = wp.element.Fragment;\n\n\nregisterBlockType('visual-editor/kutak', {\n    title: __('kutak for visual editor'),\n    icon: 'welcome-learn-more',\n    category: 'common',\n    attributes: {\n        kutakText: {\n            type: 'string'\n        },\n        kutak: {\n            type: 'string',\n            value: 'promislite',\n            default: 'promislite'\n        }\n    },\n\n    edit: function edit(props) {\n        var className = props.className,\n            attributes = props.attributes,\n            setAttributes = props.setAttributes;\n        var kutakText = attributes.kutakText,\n            kutak = attributes.kutak;\n\n\n        function onKutakTextChange(newText) {\n            setAttributes({\n                kutakText: newText\n            });\n        }\n\n        return wp.element.createElement(\n            Fragment,\n            null,\n            wp.element.createElement(RichText, {\n                tagName: 'div',\n                className: 'kutak-' + kutak,\n                value: kutakText,\n                onChange: onKutakTextChange,\n                placeholder: __('Kutak tekst')\n            })\n        );\n    },\n\n    save: function save(props) {\n        var attributes = props.attributes;\n        var kutakText = attributes.kutakText,\n            kutak = attributes.kutak;\n\n\n        return wp.element.createElement(RichText.Content, {\n            tagName: 'div',\n            className: 'kutak-' + kutak,\n            value: kutakText\n        });\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9rdXRhay9rdXRhay5qcz84Y2UzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGJsb2NrRWRpdG9yID0gd3AuYmxvY2tFZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkYmxvY2tFZGl0b3IuUmljaFRleHQsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd2aXN1YWwtZWRpdG9yL2t1dGFrJywge1xuICAgIHRpdGxlOiBfXygna3V0YWsgZm9yIHZpc3VhbCBlZGl0b3InKSxcbiAgICBpY29uOiAnd2VsY29tZS1sZWFybi1tb3JlJyxcbiAgICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgICBrdXRha1RleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGt1dGFrOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIHZhbHVlOiAncHJvbWlzbGl0ZScsXG4gICAgICAgICAgICBkZWZhdWx0OiAncHJvbWlzbGl0ZSdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuICAgICAgICB2YXIga3V0YWtUZXh0ID0gYXR0cmlidXRlcy5rdXRha1RleHQsXG4gICAgICAgICAgICBrdXRhayA9IGF0dHJpYnV0ZXMua3V0YWs7XG5cblxuICAgICAgICBmdW5jdGlvbiBvbkt1dGFrVGV4dENoYW5nZShuZXdUZXh0KSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICBrdXRha1RleHQ6IG5ld1RleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEZyYWdtZW50LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2t1dGFrLScgKyBrdXRhayxcbiAgICAgICAgICAgICAgICB2YWx1ZToga3V0YWtUZXh0LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBvbkt1dGFrVGV4dENoYW5nZSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogX18oJ0t1dGFrIHRla3N0JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzO1xuICAgICAgICB2YXIga3V0YWtUZXh0ID0gYXR0cmlidXRlcy5rdXRha1RleHQsXG4gICAgICAgICAgICBrdXRhayA9IGF0dHJpYnV0ZXMua3V0YWs7XG5cblxuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAna3V0YWstJyArIGt1dGFrLFxuICAgICAgICAgICAgdmFsdWU6IGt1dGFrVGV4dFxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9rdXRhay9rdXRhay5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!******************************!*\
  !*** ./src/kutak/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9rdXRhay9zdHlsZS5zY3NzPzRkMzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9rdXRhay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************!*\
  !*** ./src/kutak/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9rdXRhay9lZGl0b3Iuc2Nzcz84Mzk5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMva3V0YWsvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);
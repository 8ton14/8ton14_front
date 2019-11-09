webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/product.js":
/*!**************************!*\
  !*** ./sagas/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootProduct; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post_postAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post/postAction */ "./reducers/post/postAction.js");
/* harmony import */ var _reducers_product_productAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/product/productAction */ "./reducers/product/productAction.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(recommending),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchProduct),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootProduct);






function recommendAPI() {}

function recommending() {
  var result;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function recommending$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            result = false; //api

            Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
              type: _reducers_product_productAction__WEBPACK_IMPORTED_MODULE_4__["POST_RECOMMEND_PRODUCT_SUCCESS"],
              data: result
            });
          } catch (e) {
            console.error(e);
            Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
              type: _reducers_product_productAction__WEBPACK_IMPORTED_MODULE_4__["POST_RECOMMEND_PRODUCT_FAILURE"],
              data: e
            });
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function watchProduct() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_product_productAction__WEBPACK_IMPORTED_MODULE_4__["POST_RECOMMEND_PRODUCT_REQUEST"], recommending);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function rootProduct() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootProduct$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchProduct)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

/***/ })

})
//# sourceMappingURL=_app.js.be53780ea981066a11d5.hot-update.js.map
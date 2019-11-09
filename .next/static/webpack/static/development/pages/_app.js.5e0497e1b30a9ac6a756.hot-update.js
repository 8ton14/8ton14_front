webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/product/product.js":
/*!*************************************!*\
  !*** ./reducers/product/product.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var _productAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productAction */ "./reducers/product/productAction.js");


initialState = {};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.data) {
      // 추천 해주는 상품 가져오기
      case _productAction__WEBPACK_IMPORTED_MODULE_1__["GET_RECOMMEND_PRODUCT_REQUEST"]:
        {
          break;
        }
        ;

      case _productAction__WEBPACK_IMPORTED_MODULE_1__["GET_RECOMMEND_PRODUCT_FAILURE"]:
        {
          break;
        }

      case _productAction__WEBPACK_IMPORTED_MODULE_1__["GET_RECOMMEND_PRODUCT_SUCCESS"]:
        {
          break;
        }
      // 질문 내용 답하기

      case _productAction__WEBPACK_IMPORTED_MODULE_1__["POST_RECOMMEND_PRODUCT_REQUEST"]:
        {
          break;
        }

      case _productAction__WEBPACK_IMPORTED_MODULE_1__["POST_RECOMMEND_PRODUCT_FAILURE"]:
        {
          break;
        }

      case _productAction__WEBPACK_IMPORTED_MODULE_1__["POST_RECOMMEND_PRODUCT_SUCCESS"]:
        {
          break;
        }

      default:
        {
          return draft;
        }
    }
  });
});

/***/ })

})
//# sourceMappingURL=_app.js.5e0497e1b30a9ac6a756.hot-update.js.map
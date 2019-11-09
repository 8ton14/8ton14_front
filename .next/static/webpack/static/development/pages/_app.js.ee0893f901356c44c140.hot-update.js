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


var initialState = {
  product: null
};
var dummy = {
  name: "wallet",
  comment: [{
    "content": "이 지갑이 짱이에요!",
    like: 100,
    postId: 1
  }, {
    "content": "반 지갑은 이게 짱입니다",
    like: 30,
    postId: 2
  }],
  isSuccess: false,
  isLoading: false
};
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
          draft.product = dummy;
          break;
        }
      // 질문 내용 답하기

      case _productAction__WEBPACK_IMPORTED_MODULE_1__["POST_RECOMMEND_PRODUCT_REQUEST"]:
        {
          draft.product.isSuccess = false;
          draft.product.isLoading = true;
          break;
        }

      case _productAction__WEBPACK_IMPORTED_MODULE_1__["POST_RECOMMEND_PRODUCT_FAILURE"]:
        {
          draft.product.isSuccess = false;
          draft.product.isLoading = false;
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
//# sourceMappingURL=_app.js.ee0893f901356c44c140.hot-update.js.map
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
  product: null,
  isLoading: false,
  isSuccess: false,
  isLoadRecommend: false
};
var dummy = [{
  "name": "에어팟",
  "desc": "요즘 인싸아이템!! 지하철에서 에어팟을 안낀 사람이 없다!! 상대가 에이팟이 없다면!",
  "common_price": 200000,
  "comment": [],
  "weight": 0.85
}, {
  "name": "지갑",
  "desc": "설명",
  "common_price": 300000,
  "comment": [{
    "content": "남자면 몽블랑정도가 적당하지않을까요?",
    "likes": 2,
    "postID": 1
  }],
  "weight": 0.8
}, {
  "name": "이모티콘",
  "desc": "선물주어야하지만 친하지않거나 가볍게 선물할때",
  "common_price": 2000,
  "comment": [],
  "weight": 0.78
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      // 추천 해주는 상품 가져오기
      case _productAction__WEBPACK_IMPORTED_MODULE_1__["GET_RECOMMEND_PRODUCT_REQUEST"]:
        {
          isLoadRecommend: true;

          break;
        }
        ;

      case _productAction__WEBPACK_IMPORTED_MODULE_1__["GET_RECOMMEND_PRODUCT_FAILURE"]:
        {
          isLoadRecommend: false;

          break;
        }

      case _productAction__WEBPACK_IMPORTED_MODULE_1__["GET_RECOMMEND_PRODUCT_SUCCESS"]:
        {
          isLoadRecommend: true;

          draft.product = dummy;
          break;
        }
      // 질문 내용 답하기

      case _productAction__WEBPACK_IMPORTED_MODULE_1__["POST_RECOMMEND_PRODUCT_REQUEST"]:
        {
          draft.isSuccess = false;
          draft.isLoading = true;
          break;
        }

      case _productAction__WEBPACK_IMPORTED_MODULE_1__["POST_RECOMMEND_PRODUCT_FAILURE"]:
        {
          draft.isSuccess = false;
          draft.isLoading = false;
          break;
        }

      case _productAction__WEBPACK_IMPORTED_MODULE_1__["POST_RECOMMEND_PRODUCT_SUCCESS"]:
        {
          draft.product = dummy;
          draft.isSuccess = true;
          draft.isLoading = false;
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
//# sourceMappingURL=_app.js.da0cd4eea3b1c3b7263d.hot-update.js.map
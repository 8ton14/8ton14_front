webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/user/user.js":
/*!*******************************!*\
  !*** ./reducers/user/user.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userAction */ "./reducers/user/userAction.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");


var initialState = {
  username: '1'
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.data) {
      //로그인 요청
      case _userAction__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN_REQUEST"]:
        {
          break;
        }

      case _userAction__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN_FAILURE"]:
        {
          break;
        }

      case _userAction__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN_SUCCESS"]:
        {}
    }
  });
});

/***/ })

})
//# sourceMappingURL=_app.js.a0c9ae78b9b9e125338e.hot-update.js.map
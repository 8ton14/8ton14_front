webpackHotUpdate("static\\development\\pages\\community.js",{

/***/ "./pages/community.js":
/*!****************************!*\
  !*** ./pages/community.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/index.scss */ "./pages/index.scss");
/* harmony import */ var _pages_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _reducers_post_postAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post/postAction */ "./reducers/post/postAction.js");
var _jsxFileName = "C:\\Users\\seeke\\8ton14_front\\pages\\community.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import Card from '../Function/card'

var community = function community() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      post = _useSelector.post;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_post_postAction__WEBPACK_IMPORTED_MODULE_5__["GET_POSTS_REQUEST"]
    });
  }, []);
  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, post && post.map(function (item) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      style: {
        width: '18rem',
        flexDirection: 'row',
        border: '1px solid black'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
      variant: "top",
      src: "./images/image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, item.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, item.tags && item.tags.map(function (v) {
      return __jsx("p", {
        className: "tagText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, '#' + v);
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "more"))));
  })), __jsx("div", {
    className: "bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (community);

/***/ })

})
//# sourceMappingURL=community.js.dae39a1698b4367909ab.hot-update.js.map
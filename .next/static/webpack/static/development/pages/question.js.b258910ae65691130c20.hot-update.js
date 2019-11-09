webpackHotUpdate("static\\development\\pages\\question.js",{

/***/ "./Components/RecommendItem.js":
/*!*************************************!*\
  !*** ./Components/RecommendItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\seeke\\8ton14_front\\Components\\RecommendItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var RecommendItem = function RecommendItem() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.product;
  }),
      product = _useSelector.product;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, product ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
    defaultActiveKey: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, product.map(function (item) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
      eventKey: item.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, item.name), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
      eventKey: item.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "\uC0C1\uC138\uC124\uBA85: ", item.desc), __jsx("div", {
      className: "common-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "\uD3C9\uADE0\uAC00: ", item.common_price), __jsx("div", {
      className: "weight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "\uD655\uB960: ", item.weight * 100, "%"), item.comment.map(function (value) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "community/".concat(value.postId),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "\uC88B\uC544\uC694: ", value.like), value.content));
    }))));
  })) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "404 not found"));
};

/* harmony default export */ __webpack_exports__["default"] = (RecommendItem);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
false,

/***/ "./node_modules/core-js/library/fn/parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/_parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-trim.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-ws.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
false

})
//# sourceMappingURL=question.js.b258910ae65691130c20.hot-update.js.map
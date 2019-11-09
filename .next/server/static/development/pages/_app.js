module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");

var _jsxFileName = "C:\\Users\\seeke\\8ton14_front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const App = ({
  Component,
  store,
  pageProps
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("link", {
    href: "/open-iconic/font/css/open-iconic-bootstrap.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "App")), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })));
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

App.getInitialProps = async context => {
  let pageProps = {};
  const {
    ctx,
    Component
  } = context;
  const state = ctx.store.getState();
  const cookie = ctx.isServer ? ctx.req.headers.cookie : '';

  if (ctx.isServer && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_9___default.a.defaults.headers.cookie = cookie;
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_8___default()();
  const middlewares = [sagaMiddleware];
  const enhancer =  false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"])(...middlewares), !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["default"], initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_11__["default"]);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(configureStore)(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(App)));

/***/ }),

/***/ "./reducers/comment/commentAction.js":
/*!*******************************************!*\
  !*** ./reducers/comment/commentAction.js ***!
  \*******************************************/
/*! exports provided: GET_COMMENT_REQUEST, GET_COMMENT_FAILURE, GET_COMMENT_SUCCESS, POST_COMMENT_REQUEST, POST_COMMENT_FAILURE, POST_COMMENT_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMENT_REQUEST", function() { return GET_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMENT_FAILURE", function() { return GET_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMENT_SUCCESS", function() { return GET_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_COMMENT_REQUEST", function() { return POST_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_COMMENT_FAILURE", function() { return POST_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_COMMENT_SUCCESS", function() { return POST_COMMENT_SUCCESS; });
const GET_COMMENT_REQUEST = "GET_COMMENT_REQUEST";
const GET_COMMENT_FAILURE = "GET_COMMENT_FAILURE";
const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS";
const POST_COMMENT_REQUEST = "POST_COMMENT_REQUEST";
const POST_COMMENT_FAILURE = "POST_COMMENT_FAILURE";
const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/product */ "./reducers/product/product.js");
/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/post */ "./reducers/post/post.js");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  product: _product_product__WEBPACK_IMPORTED_MODULE_1__["default"],
  post: _post_post__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post/post.js":
/*!*******************************!*\
  !*** ./reducers/post/post.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _postAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postAction */ "./reducers/post/postAction.js");


const initialState = {
  post: ["123123"],
  post_success: false
};
const dummy = [{
  "id": 1,
  "title": "친구 생일선물로 지갑 어떤가요?",
  "content": "친구 생일선물로 40만원짜리 지갑 선물해려하는데요.\r\n남자 지갑 브랜드 추천해주세요",
  "tags": ["20대", "남자", "지갑", "친구", "생일"]
}, {
  "id": 2,
  "title": "취업기념 부모님 선물",
  "content": "이번에 취업해서 첫월급을 받았습니다. 첫월급인만큼 부모님께 통크게 선물하나 해드릴까하는데요.\r\n200만원짜리 안마의자가 좋을까요? 아니면 다른 추천하시는게 있나요?",
  "tags": ["부모님", " 취업", " 선물", " 안마의자"]
}];
const dummy2 = {
  "id": 1,
  "title": "친구 생일선물로 지갑 어떤가요?",
  "content": "친구 생일선물로 40만원짜리 지갑 선물해려하는데요.\r\n남자 지갑 브랜드 추천해주세요",
  "tags": ["20대", "남자", "지갑", "친구", "생일"],
  "comments": [{
    "content": "남자면 몽블랑정도가 적당하지않을까요?",
    "likes": 2
  }, {
    "content": "몽블랑도 무난하긴한데 MCM도 좋은거같아요",
    "likes": 1
  }, {
    "content": "테스트",
    "likes": 0
  }]
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      // 게시글 전부 가져오기
      case _postAction__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_REQUEST"]:
        {
          break;
        }
        ;

      case _postAction__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_FAILURE"]:
        {
          break;
        }

      case _postAction__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_SUCCESS"]:
        {
          console.log(dummy);
          draft.post = action.data;
          break;
        }
      // 게시글 가져오기

      case _postAction__WEBPACK_IMPORTED_MODULE_1__["GET_POST_REQUEST"]:
        {
          break;
        }
        ;

      case _postAction__WEBPACK_IMPORTED_MODULE_1__["GET_POST_FAILURE"]:
        {
          break;
        }

      case _postAction__WEBPACK_IMPORTED_MODULE_1__["GET_POST_SUCCESS"]:
        {
          console.log(dummy);
          draft.post = dummy2;
          break;
        }
      // 게시글 작성

      case _postAction__WEBPACK_IMPORTED_MODULE_1__["POST_POSTS_REQUEST"]:
        {
          draft.post_success = false;
          break;
        }

      case _postAction__WEBPACK_IMPORTED_MODULE_1__["POST_POSTS_FAILURE"]:
        {
          draft.post_success = false;
          break;
        }

      case _postAction__WEBPACK_IMPORTED_MODULE_1__["POST_POSTS_SUCCESS"]:
        {
          draft.post_success = true;
          break;
        }

      default:
        {
          return draft;
        }
    }
  });
});

/***/ }),

/***/ "./reducers/post/postAction.js":
/*!*************************************!*\
  !*** ./reducers/post/postAction.js ***!
  \*************************************/
/*! exports provided: GET_POSTS_REQUEST, GET_POSTS_FAILURE, GET_POSTS_SUCCESS, POST_POSTS_REQUEST, POST_POSTS_FAILURE, POST_POSTS_SUCCESS, GET_POST_REQUEST, GET_POST_FAILURE, GET_POST_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_REQUEST", function() { return GET_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_FAILURE", function() { return GET_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_SUCCESS", function() { return GET_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_POSTS_REQUEST", function() { return POST_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_POSTS_FAILURE", function() { return POST_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_POSTS_SUCCESS", function() { return POST_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_REQUEST", function() { return GET_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_FAILURE", function() { return GET_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_SUCCESS", function() { return GET_POST_SUCCESS; });
const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const POST_POSTS_REQUEST = "POST_POSTS_REQUEST";
const POST_POSTS_FAILURE = "POST_POSTS_FAILURE";
const POST_POSTS_SUCCESS = "POST_POSTS_SUCCESS";
const GET_POST_REQUEST = "GET_POST_REQUEST";
const GET_POST_FAILURE = "GET_POST_FAILURE";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";

/***/ }),

/***/ "./reducers/product/product.js":
/*!*************************************!*\
  !*** ./reducers/product/product.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productAction */ "./reducers/product/productAction.js");


const initialState = {
  product: null,
  isLoading: false,
  isSuccess: false
};
const dummy = [{
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
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
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

/***/ }),

/***/ "./reducers/product/productAction.js":
/*!*******************************************!*\
  !*** ./reducers/product/productAction.js ***!
  \*******************************************/
/*! exports provided: POST_RECOMMEND_PRODUCT_REQUEST, POST_RECOMMEND_PRODUCT_FAILURE, POST_RECOMMEND_PRODUCT_SUCCESS, GET_RECOMMEND_PRODUCT_REQUEST, GET_RECOMMEND_PRODUCT_FAILURE, GET_RECOMMEND_PRODUCT_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_RECOMMEND_PRODUCT_REQUEST", function() { return POST_RECOMMEND_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_RECOMMEND_PRODUCT_FAILURE", function() { return POST_RECOMMEND_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_RECOMMEND_PRODUCT_SUCCESS", function() { return POST_RECOMMEND_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RECOMMEND_PRODUCT_REQUEST", function() { return GET_RECOMMEND_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RECOMMEND_PRODUCT_FAILURE", function() { return GET_RECOMMEND_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RECOMMEND_PRODUCT_SUCCESS", function() { return GET_RECOMMEND_PRODUCT_SUCCESS; });
const POST_RECOMMEND_PRODUCT_REQUEST = 'POST_RECOMMEND_PRODUCT_REQUEST';
const POST_RECOMMEND_PRODUCT_FAILURE = 'POST_RECOMMEND_PRODUCT_FAILURE';
const POST_RECOMMEND_PRODUCT_SUCCESS = 'POST_RECOMMEND_PRODUCT_SUCCESS';
const GET_RECOMMEND_PRODUCT_REQUEST = 'GET_RECOMMEND_PRODUCT_REQUEST';
const GET_RECOMMEND_PRODUCT_FAILURE = 'GET_RECOMMEND_PRODUCT_FAILURE';
const GET_RECOMMEND_PRODUCT_SUCCESS = 'GET_RECOMMEND_PRODUCT_SUCCESS';

/***/ }),

/***/ "./sagas/comment.js":
/*!**************************!*\
  !*** ./sagas/comment.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootComment; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post_postAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post/postAction */ "./reducers/post/postAction.js");
/* harmony import */ var _reducers_product_productAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/product/productAction */ "./reducers/product/productAction.js");
/* harmony import */ var _reducers_comment_commentAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/comment/commentAction */ "./reducers/comment/commentAction.js");






function recommendAPI() {}

function* commenting() {
  try {
    const result = false; //api

    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: POST_COMMENT_SUCCESS,
      data: result
    });
  } catch (e) {
    console.error(e);
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_comment_commentAction__WEBPACK_IMPORTED_MODULE_4__["POST_COMMENT_FAILURE"],
      data: e
    });
  }
}

function* watchCommenting() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(POST_COMMENT_REQUEST, commenting);
}

function* rootComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([watchCommenting]);
}

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product */ "./sagas/product.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment */ "./sagas/comment.js");





axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://127.0.0.1.:8000';
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_comment__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_product__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootPost; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post_postAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post/postAction */ "./reducers/post/postAction.js");




function* posting() {
  try {
    const result = false; //api

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_postAction__WEBPACK_IMPORTED_MODULE_2__["POST_POSTS_SUCCESS"],
      data: result
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_postAction__WEBPACK_IMPORTED_MODULE_2__["POST_POSTS_FAILURE"],
      data: e
    });
  }
}

function* watchPosting() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post_postAction__WEBPACK_IMPORTED_MODULE_2__["POST_POSTS_REQUEST"], posting);
}

const dummy = [{
  "id": 1,
  "title": "친구 생일선물로 지갑 어떤가요?",
  "content": "친구 생일선물로 40만원짜리 지갑 선물해려하는데요.\r\n남자 지갑 브랜드 추천해주세요",
  "tags": ["20대", "남자", "지갑", "친구", "생일"]
}, {
  "id": 2,
  "title": "취업기념 부모님 선물",
  "content": "이번에 취업해서 첫월급을 받았습니다. 첫월급인만큼 부모님께 통크게 선물하나 해드릴까하는데요.\r\n200만원짜리 안마의자가 좋을까요? 아니면 다른 추천하시는게 있나요?",
  "tags": ["부모님", " 취업", " 선물", " 안마의자"]
}];

function* getPostList() {
  try {
    const result = false; //api

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_postAction__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS_SUCCESS"],
      data: dummy
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_postAction__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS_FAILURE"],
      data: e
    });
  }
}

function* watchGetPostList() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post_postAction__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS_REQUEST"], getPostList);
}

function* getPost() {
  try {
    const result = false; //api

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_postAction__WEBPACK_IMPORTED_MODULE_2__["GET_POST_SUCCESS"],
      data: result
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post_postAction__WEBPACK_IMPORTED_MODULE_2__["GET_POST_FAILURE"],
      data: e
    });
  }
}

function* watchGetPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post_postAction__WEBPACK_IMPORTED_MODULE_2__["GET_POST_REQUEST"], getPost);
}

function* rootPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchPosting), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetPostList), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetPost)]);
}

/***/ }),

/***/ "./sagas/product.js":
/*!**************************!*\
  !*** ./sagas/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootProduct; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post_postAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post/postAction */ "./reducers/post/postAction.js");
/* harmony import */ var _reducers_product_productAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/product/productAction */ "./reducers/product/productAction.js");





function recommendAPI() {}

function* recommending() {
  try {
    const result = false; //api

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_product_productAction__WEBPACK_IMPORTED_MODULE_3__["POST_RECOMMEND_PRODUCT_SUCCESS"],
      data: result
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_product_productAction__WEBPACK_IMPORTED_MODULE_3__["POST_RECOMMEND_PRODUCT_FAILURE"],
      data: e
    });
  }
}

function* watchProduct() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_product_productAction__WEBPACK_IMPORTED_MODULE_3__["POST_RECOMMEND_PRODUCT_REQUEST"], recommending);
}

function* rootProduct() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchProduct)]);
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map
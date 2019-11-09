webpackHotUpdate("static\\development\\pages\\question.js",{

/***/ "./Components/Form/QuestionForm.js":
/*!*****************************************!*\
  !*** ./Components/Form/QuestionForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _QuestionForm_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./QuestionForm.scss */ "./Components/Form/QuestionForm.scss");
/* harmony import */ var _QuestionForm_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_QuestionForm_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reducers_product_productAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reducers/product/productAction */ "./reducers/product/productAction.js");
/* harmony import */ var _RecommendItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../RecommendItem */ "./Components/RecommendItem.js");
var _jsxFileName = "D:\\webdev\\8ton14_front\\Components\\Form\\QuestionForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function valuetext(value) {
  return "".concat(value, "\uB9CC\uC6D0");
}

var QuestionForm = function QuestionForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('남자'),
      sex = _useState[0],
      setSex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('10대'),
      age = _useState2[0],
      setAge = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      job = _useState3[0],
      setJob = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      favor = _useState4[0],
      setFavor = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([0, 100]),
      price = _useState5[0],
      setPrice = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      validate = _useState6[0],
      setValidate = _useState6[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var handleChange = function handleChange(event, newValue) {
    setPrice(newValue);
  };

  var onChangeSex = function onChangeSex(e) {
    setSex(e.target.value);
  };

  var onChangeAge = function onChangeAge(e) {
    setAge(e.target.value);
  };

  var onChangeJob = function onChangeJob(e) {
    setJob(e.target.value);
  };

  var onChangeFavorGroup = function onChangeFavorGroup(values) {
    setFavor(values);
  };

  var onSubmitForm = function onSubmitForm(e) {
    var form = e.current.target;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPagination();
    }

    dispatch({
      type: _reducers_product_productAction__WEBPACK_IMPORTED_MODULE_11__["POST_RECOMMEND_PRODUCT_REQUEST"],
      data: {
        sex: sex,
        age: age,
        job: job,
        favor: favor,
        price: price
      }
    });
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    novalidate: true,
    validated: validate,
    onSubmit: onSubmitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "\uAC00\uACA9\uB300"), __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: price,
    onChange: handleChange,
    valueLabelDisplay: "auto",
    "aria-labelledby": "range-slider",
    getAriaValueText: valuetext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "\uC131\uBCC4"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    as: "select",
    value: sex,
    onChange: onChangeSex,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "\uB0A8\uC790"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "\uC5EC\uC790"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "\uB098\uC774\uB300"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    as: "select",
    value: age,
    onChange: onChangeAge,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "10\uB300"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "20\uB300"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "30\uB300"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "40\uB300"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "50\uB300\uC774\uC0C1"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "\uC9C1\uC5C5"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    as: "select",
    value: job,
    onChange: onChangeJob,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "\uCCAD\uC18C\uB144"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "\uB300\uD559\uC0DD"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "\uCDE8\uC900\uC0DD"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "\uC9C1\uC7A5\uC778")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "\uAD00\uC2EC\uC0AC"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ToggleButtonGroup"], {
    type: "checkbox",
    defaultValue: favor,
    onChange: onChangeFavorGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ToggleButton"], {
    value: "exercise",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "\uC6B4\uB3D9"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ToggleButton"], {
    value: "beauty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "\uBBF8\uC6A9"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ToggleButton"], {
    value: "healthcare",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "\uAC74\uAC15"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ToggleButton"], {
    value: "game",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "\uAC8C\uC784"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ToggleButton"], {
    value: "it",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "IT"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ToggleButton"], {
    value: "fashion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "\uD328\uC158"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "\uCD94\uCC9C!")));
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionForm);

/***/ })

})
//# sourceMappingURL=question.js.3fec551d660e8179227f.hot-update.js.map
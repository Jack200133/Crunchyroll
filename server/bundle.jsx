/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: ./src/main.css
/* harmony default export */ const main = (__webpack_require__.p + "a33083faa309c9bfdc0443391f029e03.css");
;// CONCATENATED MODULE: ./src/modules/Navbar/navbar.css
/* harmony default export */ const navbar = (__webpack_require__.p + "9c7032883992b8057c4a09f19205c31a.css");
;// CONCATENATED MODULE: ./assets/search.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", _extends({
    className: "search_svg__header-svg-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "data-t": "search-svg",
    "aria-labelledby": "search-svg",
    "aria-hidden": "false"
  }, props), _path || (_path = /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "m15.474 14.035 6.235 6.26a1 1 0 1 1-1.418 1.41l-6.228-6.253a7.5 7.5 0 1 1 1.41-1.418zM9.5 15a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
  })));
};

/* harmony default export */ const search = (SvgSearch);
;// CONCATENATED MODULE: ./assets/bookmark.svg
var bookmark_path;

function bookmark_extends() { bookmark_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return bookmark_extends.apply(this, arguments); }



var SvgBookmark = function SvgBookmark(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", bookmark_extends({
    className: "bookmark_svg__header-svg-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "data-t": "watchlist-svg",
    "aria-labelledby": "watchlist-svg",
    "aria-hidden": "false"
  }, props), bookmark_path || (bookmark_path = /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "m17 18.113-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"
  })));
};

/* harmony default export */ const bookmark = (SvgBookmark);
;// CONCATENATED MODULE: ./assets/flecha.svg
var flecha_path;

function flecha_extends() { flecha_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return flecha_extends.apply(this, arguments); }



var SvgFlecha = function SvgFlecha(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", flecha_extends({
    className: "flecha_svg__header-svg-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "data-t": "dropdown-svg",
    "aria-labelledby": "dropdown-svg",
    "aria-hidden": "true"
  }, props), flecha_path || (flecha_path = /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M7 10h10l-5 5z"
  })));
};

/* harmony default export */ const flecha = (SvgFlecha);
;// CONCATENATED MODULE: ./src/modules/Navbar/navbar.jsx






var Navbar = function Navbar() {
  return /*#__PURE__*/external_react_default().createElement("header", {
    className: "header-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "header-logo"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "a"
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "header-left"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "Explorar"
  }, "Explorar", /*#__PURE__*/external_react_default().createElement(flecha, {
    className: "down"
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "Manga"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: "letra"
  }, "Manga")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "Juegos"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: "letra"
  }, "Juegos")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "Noticias"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: "letra"
  }, "Noticias"), /*#__PURE__*/external_react_default().createElement(flecha, {
    className: "down"
  }))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "header-right"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "Search"
  }, /*#__PURE__*/external_react_default().createElement(search, {
    className: "s"
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "Bookmark"
  }, /*#__PURE__*/external_react_default().createElement(bookmark, {
    className: "b"
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "Perfil"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "p"
  }), /*#__PURE__*/external_react_default().createElement(flecha, {
    className: "down"
  }))));
};

/* harmony default export */ const Navbar_navbar = (Navbar);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/slicedToArray"
const slicedToArray_namespaceObject = require("@babel/runtime/helpers/slicedToArray");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_namespaceObject);
;// CONCATENATED MODULE: external "react-transition-group"
const external_react_transition_group_namespaceObject = require("react-transition-group");
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./src/modules/CarrulItem1/CarrulItem1.css
/* harmony default export */ const CarrulItem1 = (__webpack_require__.p + "f2354e6cf542f734196a20fc92d3b1a9.css");
;// CONCATENATED MODULE: ./assets/cola.svg
var _linearGradient, _linearGradient2, _g;

function cola_extends() { cola_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return cola_extends.apply(this, arguments); }



var SvgCola = function SvgCola(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", cola_extends({
    className: "cola_svg__c-hero-carousel-background__orange-asset",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3310 1902",
    "data-t": "hero-carousel-orange-svg",
    "aria-labelledby": "hero-carousel-orange-svg",
    "aria-hidden": "true",
    preserveAspectRatio: "xMidYMid slice"
  }, props), _linearGradient || (_linearGradient = /*#__PURE__*/external_react_namespaceObject.createElement("linearGradient", {
    id: "cola_svg__a",
    x1: "-4.906%",
    x2: "3.218%",
    y1: "57.147%",
    y2: "47.206%"
  }, /*#__PURE__*/external_react_namespaceObject.createElement("stop", {
    offset: 0,
    stopColor: "#fab818"
  }), /*#__PURE__*/external_react_namespaceObject.createElement("stop", {
    offset: 1,
    stopColor: "#f47521"
  }))), _linearGradient2 || (_linearGradient2 = /*#__PURE__*/external_react_namespaceObject.createElement("linearGradient", {
    id: "cola_svg__b",
    x1: "18.134%",
    x2: "17.028%",
    y1: "51.289%",
    y2: "65.141%"
  }, /*#__PURE__*/external_react_namespaceObject.createElement("stop", {
    offset: 0,
    stopColor: "#f47521"
  }), /*#__PURE__*/external_react_namespaceObject.createElement("stop", {
    offset: 1,
    stopColor: "#fab818"
  }))), _g || (_g = /*#__PURE__*/external_react_namespaceObject.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M2268.26 463.97c491.15 42.97 875.542 389.229 947.314 815.627l-.008.015a878.09 878.09 0 0 0 5.805-49.897c45.682-522.153-382.349-986.13-956.035-1036.321-573.686-50.191-1075.784 332.41-1121.466 854.563-6.572 75.123-3.342 149.041 8.722 220.697l.008-.015c72.22-496.4 560.41-853.247 1115.66-804.669z",
    fill: "url(#cola_svg__a)",
    opacity: 0.8,
    transform: "rotate(11 2182.62 734.29)"
  }), /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M1194.307 945.8c491.15 42.97 875.541 389.228 947.313 815.626l-.008.015a878.097 878.097 0 0 0 5.805-49.897c45.683-522.153-382.348-986.13-956.035-1036.321C617.696 625.032 115.6 1007.633 69.917 1529.787c-6.573 75.122-3.343 149.04 8.721 220.696l.008-.015c72.22-496.4 560.41-853.247 1115.661-804.668z",
    fill: "url(#cola_svg__b)",
    transform: "rotate(-172 1108.667 1216.12)"
  }))));
};

/* harmony default export */ const cola = (SvgCola);
;// CONCATENATED MODULE: ./src/modules/CarrulItem1/CarrulItem1.jsx





var CarrulItem1_CarrulItem1 = function CarrulItem1(_ref) {
  var mage = _ref.mage,
      className = _ref.className;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: className,
    style: {
      background: 'linear-gradient(0.25turn, #f47521, #fab818)'
    }
  }, /*#__PURE__*/external_react_default().createElement(cola, {
    className: "colita"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "base",
    style: {
      backgroundImage: "url(".concat(mage, ")")
    }
  }));
};

CarrulItem1_CarrulItem1.propTypes = {
  mage: (external_prop_types_default()).string.isRequired,
  className: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const modules_CarrulItem1_CarrulItem1 = (CarrulItem1_CarrulItem1);
;// CONCATENATED MODULE: ./src/modules/CarrulItem2/carrulItem2.css
/* harmony default export */ const carrulItem2 = (__webpack_require__.p + "ba1b43eca53f9ec232596eda9ff537e3.css");
;// CONCATENATED MODULE: ./assets/triLine.svg
var _defs, triLine_g;

function triLine_extends() { triLine_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return triLine_extends.apply(this, arguments); }



var SvgTriLine = function SvgTriLine(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", triLine_extends({
    className: "triLine_svg__c-hero-carousel-background__yellow-left-asset",
    xmlns: "http://www.w3.org/2000/svg",
    width: 695,
    height: 1610,
    "data-t": "hero-carousel-yellow-left-svg",
    "aria-labelledby": "hero-carousel-yellow-left-svg",
    "aria-hidden": "true"
  }, props), _defs || (_defs = /*#__PURE__*/external_react_namespaceObject.createElement("defs", null, /*#__PURE__*/external_react_namespaceObject.createElement("linearGradient", {
    x1: "50%",
    y1: "54.35%",
    x2: "50%",
    y2: "98.226%",
    id: "triLine_svg__a"
  }, /*#__PURE__*/external_react_namespaceObject.createElement("stop", {
    stopColor: "#FFC94D",
    offset: "0%"
  }), /*#__PURE__*/external_react_namespaceObject.createElement("stop", {
    stopColor: "#FAB818",
    stopOpacity: 0,
    offset: "100%"
  })), /*#__PURE__*/external_react_namespaceObject.createElement("linearGradient", {
    x1: "50%",
    y1: "54.35%",
    x2: "50%",
    y2: "98.226%",
    id: "triLine_svg__b"
  }, /*#__PURE__*/external_react_namespaceObject.createElement("stop", {
    stopColor: "#FFC94D",
    offset: "0%"
  }), /*#__PURE__*/external_react_namespaceObject.createElement("stop", {
    stopColor: "#FAB818",
    stopOpacity: 0,
    offset: "100%"
  })), /*#__PURE__*/external_react_namespaceObject.createElement("linearGradient", {
    x1: "-5.282%",
    y1: "0%",
    x2: "28.057%",
    y2: "50%",
    id: "triLine_svg__c"
  }, /*#__PURE__*/external_react_namespaceObject.createElement("stop", {
    stopColor: "#FFD980",
    offset: "0%"
  }), /*#__PURE__*/external_react_namespaceObject.createElement("stop", {
    stopColor: "#FFC94D",
    offset: "100%"
  })))), triLine_g || (triLine_g = /*#__PURE__*/external_react_namespaceObject.createElement("g", {
    strokeWidth: 2,
    fill: "none"
  }, /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    stroke: "url(#triLine_svg__a)",
    opacity: 0.7,
    d: "m1.278 1024.932 179.466-706.437",
    transform: "translate(193 219)"
  }), /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    stroke: "url(#triLine_svg__b)",
    opacity: 0.7,
    d: "M43.28 442.337 210.452 319",
    transform: "translate(193 219)"
  }), /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M258.667 526.13c-6.426-.032-69.317-68.037-188.673-204.014",
    stroke: "url(#triLine_svg__c)",
    opacity: 0.5,
    transform: "rotate(-161 279.154 517.475)"
  }))));
};

/* harmony default export */ const triLine = (SvgTriLine);
;// CONCATENATED MODULE: ./assets/circle.svg
var circle_defs, circle_g;

function circle_extends() { circle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return circle_extends.apply(this, arguments); }



var SvgCircle = function SvgCircle(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", circle_extends({
    className: "circle_svg__c-hero-carousel-background__yellow-right-asset",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 695 1610",
    "data-t": "hero-carousel-yellow-right-svg",
    "aria-labelledby": "hero-carousel-yellow-right-svg",
    "aria-hidden": "true"
  }, props), circle_defs || (circle_defs = /*#__PURE__*/external_react_namespaceObject.createElement("defs", null, /*#__PURE__*/external_react_namespaceObject.createElement("linearGradient", {
    x1: "83.74%",
    y1: "-25.767%",
    x2: "28.284%",
    y2: "36.366%",
    id: "circle_svg__a"
  }, /*#__PURE__*/external_react_namespaceObject.createElement("stop", {
    stopColor: "#FFF",
    stopOpacity: 0,
    offset: ".069%"
  }), /*#__PURE__*/external_react_namespaceObject.createElement("stop", {
    stopColor: "#FFF",
    offset: "100%"
  })))), circle_g || (circle_g = /*#__PURE__*/external_react_namespaceObject.createElement("g", {
    transform: "translate(-1084 219)",
    fill: "none"
  }, /*#__PURE__*/external_react_namespaceObject.createElement("circle", {
    fill: "url(#circle_svg__a)",
    opacity: 0.12,
    cx: 1848.5,
    cy: 500.638,
    r: 500.5
  }), /*#__PURE__*/external_react_namespaceObject.createElement("circle", {
    fill: "url(#circle_svg__a)",
    opacity: 0.12,
    cx: 1706.5,
    cy: 1133.5,
    r: 500.5
  }), /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M1357.047 261.76c9.903 3.412 82.47 105.958 217.704 307.637",
    stroke: "#FFF",
    strokeWidth: 2,
    opacity: 0.5
  }), /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M1522.654 355.468c.515.185-49.68 162.344-150.586 486.478",
    stroke: "#FFF",
    strokeWidth: 2,
    opacity: 0.3
  }))));
};

/* harmony default export */ const circle = (SvgCircle);
;// CONCATENATED MODULE: ./src/modules/CarrulItem2/carrulItem2.jsx






var CarrulItem2 = function CarrulItem2(_ref) {
  var mage = _ref.mage,
      className = _ref.className;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: className,
    style: {
      background: 'linear-gradient(0.25turn, #fab818, #f47521, #fab818)'
    }
  }, /*#__PURE__*/external_react_default().createElement(triLine, {
    className: "Lines"
  }), /*#__PURE__*/external_react_default().createElement(circle, {
    className: "Circle"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "base",
    style: {
      backgroundImage: "url(".concat(mage, ")")
    }
  }));
};

CarrulItem2.propTypes = {
  mage: (external_prop_types_default()).string.isRequired,
  className: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const CarrulItem2_carrulItem2 = (CarrulItem2);
;// CONCATENATED MODULE: ./src/modules/CarrulItem3/carrulItem3.css
/* harmony default export */ const carrulItem3 = (__webpack_require__.p + "d54200877942f422b7ee5c4a5acd6290.css");
;// CONCATENATED MODULE: ./assets/circle2.svg
var circle2_g;

function circle2_extends() { circle2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return circle2_extends.apply(this, arguments); }



var SvgCircle2 = function SvgCircle2(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", circle2_extends({
    className: "circle2_svg__c-hero-carousel-background__blue-asset",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2440 2102",
    "data-t": "hero-carousel-blue-svg",
    "aria-labelledby": "hero-carousel-blue-svg",
    "aria-hidden": "true",
    preserveAspectRatio: "xMidYMid slice"
  }, props), circle2_g || (circle2_g = /*#__PURE__*/external_react_namespaceObject.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M1034.49 1C1558.882 1 2037.187-24.606 2102 482c-187.609-254.74-535.09-2.856-875.79-2.856-569.125 0-1030.49 461.216-1030.49 1030.154 0 44.719 2.85 88.772 8.378 131.988C78.322 1470.502 4 1259.505 4 1031.155 4 462.216 465.366 1 1034.49 1z",
    fill: "#269495",
    fillOpacity: 0.3
  }), /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M590 2255C198 2048-6 1328 480 799c-990 823-139.233 1640-139.233 1640S478 2268 590 2255zm1110-810c-266-174-378-430-378-1163-74.406-107.16-193.739-72.827-358 103 12 514.667 257.333 868 736 1060z",
    fill: "#213944",
    fillOpacity: 0.1
  }))));
};

/* harmony default export */ const circle2 = (SvgCircle2);
;// CONCATENATED MODULE: ./src/modules/CarrulItem3/carrulItem3.jsx





var CarrulItem3 = function CarrulItem3(_ref) {
  var mage = _ref.mage,
      className = _ref.className;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: className
  }, /*#__PURE__*/external_react_default().createElement(circle2, {
    className: "blue"
  }), /*#__PURE__*/external_react_default().createElement(circle2, {
    className: "blue2"
  }), /*#__PURE__*/external_react_default().createElement(circle2, {
    className: "blue3"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "base",
    style: {
      backgroundImage: "url(".concat(mage, ")")
    }
  }));
};

CarrulItem3.propTypes = {
  mage: (external_prop_types_default()).string.isRequired,
  className: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const CarrulItem3_carrulItem3 = (CarrulItem3);
;// CONCATENATED MODULE: ./src/modules/Down/Down.css
/* harmony default export */ const Down = (__webpack_require__.p + "7bb3e41afd36439f039512166c2781c9.css");
;// CONCATENATED MODULE: ./src/modules/ProgressBar/ProgressBar.css
/* harmony default export */ const ProgressBar = (__webpack_require__.p + "2b7f5f7b576388bc8b89533a7d144ac4.css");
;// CONCATENATED MODULE: ./src/modules/ProgressBar/ProgressBar.jsx





var ProgressBar_ProgressBar = function ProgressBar(_ref) {
  var width = _ref.width,
      percent = _ref.percent;

  var _React$useState = external_react_namespaceObject.useState(0),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  external_react_namespaceObject.useEffect(function () {
    setValue(percent * width);
  }, []);
  return /*#__PURE__*/external_react_namespaceObject.createElement("div", null, /*#__PURE__*/external_react_namespaceObject.createElement("div", {
    className: "progress-div",
    style: {
      width: width
    }
  }, /*#__PURE__*/external_react_namespaceObject.createElement("div", {
    style: {
      width: "".concat(value, "px")
    },
    className: "progress"
  })));
};

ProgressBar_ProgressBar.propTypes = {
  width: (external_prop_types_default()).number.isRequired,
  percent: (external_prop_types_default()).number.isRequired
};
/* harmony default export */ const modules_ProgressBar_ProgressBar = (ProgressBar_ProgressBar);
;// CONCATENATED MODULE: ./src/modules/Down/Down.jsx





var Down_Down = function Down(_ref) {
  var text = _ref.text,
      actt = _ref.actt,
      onClick = _ref.onClick;

  if (actt) {
    return /*#__PURE__*/external_react_default().createElement("button", {
      className: "containeractive",
      type: "button",
      onClick: onClick
    }, /*#__PURE__*/external_react_default().createElement(modules_ProgressBar_ProgressBar, {
      className: "indicator",
      width: 160,
      percent: 1
    }), /*#__PURE__*/external_react_default().createElement("span", {
      className: "textt"
    }, text));
  }

  return /*#__PURE__*/external_react_default().createElement("button", {
    className: "containertext",
    type: "button",
    onClick: onClick
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: "textt"
  }, text));
};

Down_Down.propTypes = {
  text: (external_prop_types_default()).string.isRequired,
  actt: (external_prop_types_default()).bool.isRequired,
  onClick: (external_prop_types_default()).func.isRequired
};
/* harmony default export */ const modules_Down_Down = (Down_Down);
;// CONCATENATED MODULE: ./src/modules/DownMenu/DownMenu.css
/* harmony default export */ const DownMenu = (__webpack_require__.p + "c67c8fa7427dee383f246c928ad50d97.css");
;// CONCATENATED MODULE: ./src/modules/DownMenu/DownMenu.jsx




var contextoo = ['RASCAL DOES NOT DREAM OF BUNNY GIRL SENPAI', 'AHAREN-SAN WA HAKARENAI', 'KAGUYA-SAMA: LOVE IS WAR -ULTRA ROMANTIC-', 'LOVE AFTER WORLD DOMINATION', 'ASCENDANCE OF A BOOKWORM', 'SPY x FAMILY'];

var DownMenu_DownMenu = function DownMenu(_ref) {
  var activo = _ref.activo,
      onDownClick = _ref.onDownClick;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "padre"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "algo"
  }, contextoo.map(function (index, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/jsx-no-bind
      external_react_default().createElement(modules_Down_Down, {
        text: index,
        actt: i === activo,
        onClick: onDownClick.bind(null, i)
      })
    );
  })));
};

DownMenu_DownMenu.propTypes = {
  activo: (external_prop_types_default()).bool.isRequired,
  onDownClick: (external_prop_types_default()).func.isRequired
};
/* harmony default export */ const modules_DownMenu_DownMenu = (DownMenu_DownMenu);
;// CONCATENATED MODULE: ./assets/imgs/bunny.png
const bunny_namespaceObject = __webpack_require__.p + "8e7149e2a34898d74d05.png";
;// CONCATENATED MODULE: ./assets/imgs/aharen.png
const aharen_namespaceObject = __webpack_require__.p + "7f3b55a8e7fa13369766.png";
;// CONCATENATED MODULE: ./assets/imgs/kaguya.png
const kaguya_namespaceObject = __webpack_require__.p + "0b6a8c9f929621c82898.png";
;// CONCATENATED MODULE: ./assets/imgs/love.png
const love_namespaceObject = __webpack_require__.p + "cb9a2cea9552fb8d536c.png";
;// CONCATENATED MODULE: ./assets/imgs/bookworm.png
const bookworm_namespaceObject = __webpack_require__.p + "5f30341b5eb057bba67c.png";
;// CONCATENATED MODULE: ./assets/imgs/spy.png
const spy_namespaceObject = __webpack_require__.p + "2fb53e54ac1bfa735d9a.png";
;// CONCATENATED MODULE: ./assets/arrowizq.svg
var arrowizq_path;

function arrowizq_extends() { arrowizq_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrowizq_extends.apply(this, arguments); }



var SvgArrowizq = function SvgArrowizq(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", arrowizq_extends({
    className: "arrowizq_svg__c-angle-svg arrowizq_svg__c-angle-svg--left arrowizq_svg__c-carousel-arrow__icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "data-t": "angle-left-svg",
    "aria-labelledby": "angle-svg",
    "aria-hidden": "true"
  }, props), arrowizq_path || (arrowizq_path = /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M8.6 7.4 10 6l6 6-6 6-1.4-1.4 4.6-4.6z"
  })));
};

/* harmony default export */ const arrowizq = (SvgArrowizq);
;// CONCATENATED MODULE: ./assets/arrowder.svg
var arrowder_path;

function arrowder_extends() { arrowder_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrowder_extends.apply(this, arguments); }



var SvgArrowder = function SvgArrowder(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", arrowder_extends({
    className: "arrowder_svg__c-angle-svg arrowder_svg__c-angle-svg--left arrowder_svg__c-carousel-arrow__icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "data-t": "angle-left-svg",
    "aria-labelledby": "angle-svg",
    "aria-hidden": "true"
  }, props), arrowder_path || (arrowder_path = /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M8.6 7.4 10 6l6 6-6 6-1.4-1.4 4.6-4.6z"
  })));
};

/* harmony default export */ const arrowder = (SvgArrowder);
;// CONCATENATED MODULE: ./src/modules/Carrusel/carrusel.css
/* harmony default export */ const carrusel = (__webpack_require__.p + "59cd48f3934e203fb4c5278233e61a55.css");
;// CONCATENATED MODULE: ./src/modules/Carrusel/Carrusel.jsx


/* eslint-disable react/jsx-indent */

/* eslint-disable no-nested-ternary */
















var Carrusel = function Carrusel() {
  var ops = [bunny_namespaceObject, aharen_namespaceObject, kaguya_namespaceObject, love_namespaceObject, bookworm_namespaceObject, spy_namespaceObject];

  var _useState = (0,external_react_namespaceObject.useState)(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      Index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = (0,external_react_namespaceObject.useState)(true),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isnext = _useState4[0],
      setnext = _useState4[1];

  var _useState5 = (0,external_react_namespaceObject.useState)(2000),
      _useState6 = slicedToArray_default()(_useState5, 2),
      timeout = _useState6[0],
      settime = _useState6[1];

  var selectImage = function selectImage(index, images) {
    var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var condi = next ? index < images.length - 1 : index > 0;
    var nextIndex = next ? condi ? index + 1 : 0 : condi ? index - 1 : images.length - 1;
    setnext(next);
    settime(2000);
    setIndex(nextIndex);
  };

  var previous = function previous() {
    selectImage(Index, ops, false);
  };

  var next = function next() {
    selectImage(Index, ops);
  };

  var handleDownClick = function handleDownClick(index) {
    settime(200);

    if (Index > index) {
      setnext(false);

      var _loop = function _loop(i) {
        setTimeout(function () {
          setIndex(i);
        }, 200 * (Index - i));
      };

      for (var i = Index; i >= index; i -= 1) {
        _loop(i);
      }

      setTimeout(function () {
        settime(2000);
      }, 200 * (Index - index + 1));
    } else {
      var _loop2 = function _loop2(_i) {
        setTimeout(function () {
          setIndex(_i);
        }, 200 * _i);
      };

      for (var _i = Index; _i <= index; _i += 1) {
        _loop2(_i);
      }

      setTimeout(function () {
        settime(2000);
      }, 200 * (index - Index + 1));
    }
  };

  (0,external_react_namespaceObject.useEffect)(function () {
    var interval = setTimeout(function () {
      next();
    }, 8000);
    return function () {
      return clearInterval(interval);
    };
  }, [Index]);
  var Image = ops[Index];
  var opsBack = [/*#__PURE__*/external_react_default().createElement(CarrulItem2_carrulItem2, {
    mage: Image,
    className: "carruselItem"
  }), /*#__PURE__*/external_react_default().createElement(CarrulItem3_carrulItem3, {
    mage: Image,
    className: "carruselItem"
  }), /*#__PURE__*/external_react_default().createElement(modules_CarrulItem1_CarrulItem1, {
    mage: Image,
    className: "carruselItem"
  }), /*#__PURE__*/external_react_default().createElement(CarrulItem3_carrulItem3, {
    mage: Image,
    className: "carruselItem"
  }), /*#__PURE__*/external_react_default().createElement(CarrulItem2_carrulItem2, {
    mage: Image,
    className: "carruselItem"
  }), /*#__PURE__*/external_react_default().createElement(CarrulItem3_carrulItem3, {
    mage: Image,
    className: "carruselItem"
  })];
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "containertotal"
  }, /*#__PURE__*/external_react_default().createElement(external_react_transition_group_namespaceObject.TransitionGroup, {
    className: "HOKL",
    childFactory: function childFactory(nino) {
      return /*#__PURE__*/(0,external_react_namespaceObject.cloneElement)(nino, {
        classNames: isnext ? 'right' : 'left'
      });
    }
  }, /*#__PURE__*/external_react_default().createElement(external_react_transition_group_namespaceObject.CSSTransition, {
    key: Index,
    timeout: timeout
  }, opsBack[Index])), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "iconizq",
    onClick: next
  }, /*#__PURE__*/external_react_default().createElement(arrowizq, {
    className: "izq"
  })), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "iconder",
    onClick: previous
  }, /*#__PURE__*/external_react_default().createElement(arrowder, {
    className: "der"
  })), /*#__PURE__*/external_react_default().createElement(modules_DownMenu_DownMenu, {
    activo: Index,
    onDownClick: handleDownClick
  }));
};

/* harmony default export */ const Carrusel_Carrusel = (Carrusel);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/toConsumableArray"
const toConsumableArray_namespaceObject = require("@babel/runtime/helpers/toConsumableArray");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_namespaceObject);
;// CONCATENATED MODULE: ./src/modules/MiniItem/MiniItem.css
/* harmony default export */ const MiniItem = (__webpack_require__.p + "31753c1a2527d1ffc33fa9a00dc6955e.css");
;// CONCATENATED MODULE: ./src/modules/MiniItem/MiniItem.jsx




var MiniItem_MiniItem = function MiniItem(_ref) {
  var img = _ref.img,
      title = _ref.title,
      tipo = _ref.tipo,
      sound = _ref.sound,
      bookmark = _ref.bookmark;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "miniitemcont"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "minibase",
    style: {
      backgroundImage: "url(".concat(img, ")")
    }
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "minnbase"
  }, /*#__PURE__*/external_react_default().createElement("h4", null, title), /*#__PURE__*/external_react_default().createElement("div", {
    className: "foot"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: "type"
  }, tipo), /*#__PURE__*/external_react_default().createElement("span", {
    className: "sub"
  }, sound))));
};

MiniItem_MiniItem.propTypes = {
  img: (external_prop_types_default()).string.isRequired,
  title: (external_prop_types_default()).string.isRequired,
  tipo: (external_prop_types_default()).string.isRequired,
  sound: (external_prop_types_default()).string.isRequired,
  bookmark: (external_prop_types_default()).bool.isRequired
};
/* harmony default export */ const modules_MiniItem_MiniItem = (MiniItem_MiniItem);
;// CONCATENATED MODULE: ./src/modules/MiniContainer/MiniContainer.css
/* harmony default export */ const MiniContainer = (__webpack_require__.p + "91c1a9e70a207f31538bd991eda28bcd.css");
;// CONCATENATED MODULE: ./src/modules/MiniContainer/MiniContainer.jsx






var MiniContainer_MiniContainer = function MiniContainer(_ref) {
  var datos = _ref.datos;

  var contextoo = toConsumableArray_default()(datos);

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "minicontainer"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "algo2"
  }, contextoo.map(function (index) {
    return /*#__PURE__*/external_react_default().createElement(modules_MiniItem_MiniItem, {
      img: index.img,
      title: index.title,
      tipo: index.tipo,
      sound: index.sound,
      bookmark: index.bookmark
    });
  })));
};

MiniContainer_MiniContainer.propTypes = {
  datos: external_prop_types_default().arrayOf(external_prop_types_default().shape({
    img: (external_prop_types_default()).string.isRequired,
    title: (external_prop_types_default()).string.isRequired,
    tipo: (external_prop_types_default()).string.isRequired,
    sound: (external_prop_types_default()).string.isRequired,
    bookmark: (external_prop_types_default()).bool.isRequired
  })).isRequired
};
/* harmony default export */ const modules_MiniContainer_MiniContainer = (MiniContainer_MiniContainer);
;// CONCATENATED MODULE: ./assets/minimgs/dress.jpeg
const dress_namespaceObject = __webpack_require__.p + "ad237c9cf86056fc2320.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/note.jpeg
const note_namespaceObject = __webpack_require__.p + "4c7572d9936d20aa43bf.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/cuckos.jpeg
const cuckos_namespaceObject = __webpack_require__.p + "04945aac51f91305adf5.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/tomo.jpeg
const tomo_namespaceObject = __webpack_require__.p + "522c7da955f758ee8d6b.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/king.jpeg
const king_namespaceObject = __webpack_require__.p + "c0d062f85656bb1a6712.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/bunny.jpg
const minimgs_bunny_namespaceObject = __webpack_require__.p + "d2795ad5fd2ca1f428e5.jpg";
;// CONCATENATED MODULE: ./assets/minimgs/date.jpeg
const date_namespaceObject = __webpack_require__.p + "17871c35cbd5cb6f8137.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/erased.jpeg
const erased_namespaceObject = __webpack_require__.p + "e26cd5c4dadc30da8335.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/mushoku.jpeg
const mushoku_namespaceObject = __webpack_require__.p + "3ea7de4a52c5813b9ad9.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/ass.jpeg
const ass_namespaceObject = __webpack_require__.p + "e42d53c7f7721946c7de.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/elite.jpg
const elite_namespaceObject = __webpack_require__.p + "0db0a7873496bdc954cd.jpg";
;// CONCATENATED MODULE: ./assets/minimgs/jojo.jpeg
const jojo_namespaceObject = __webpack_require__.p + "79c4addce1cb5cf50657.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/shiki.jpeg
const shiki_namespaceObject = __webpack_require__.p + "1a252e70996e468cab4e.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/aharen.jpeg
const minimgs_aharen_namespaceObject = __webpack_require__.p + "f1c88a66010350a1b9d3.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/tapped.jpeg
const tapped_namespaceObject = __webpack_require__.p + "3441df27657fcfb3cd72.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/horimiya.jpeg
const horimiya_namespaceObject = __webpack_require__.p + "0946df3a528ebb874972.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/ao.jpeg
const ao_namespaceObject = __webpack_require__.p + "7879e3fcaf595da7710d.jpeg";
;// CONCATENATED MODULE: ./assets/minimgs/loveafter.jpeg
const loveafter_namespaceObject = __webpack_require__.p + "50618f9d8d4c522cfc5c.jpeg";
;// CONCATENATED MODULE: ./src/modules/MiniCarrusel/MiniCarrusel.css
/* harmony default export */ const MiniCarrusel = (__webpack_require__.p + "4e273a4bef534fdcd027d5deea91595d.css");
;// CONCATENATED MODULE: ./src/modules/MiniCarrusel/MiniCarrusel.jsx


/* eslint-disable react/jsx-indent */

/* eslint-disable no-nested-ternary */
























var m1 = {
  img: dress_namespaceObject,
  title: 'My Dress-Up Darling',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: true
};
var m2 = {
  img: note_namespaceObject,
  title: 'Death Note',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false
};
var m3 = {
  img: cuckos_namespaceObject,
  title: 'A couple of Cuckos',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false
};
var m4 = {
  img: tomo_namespaceObject,
  title: 'Tomodachi Games',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false
};
var m5 = {
  img: king_namespaceObject,
  title: 'Osama Ranking',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false
};
var m6 = {
  img: minimgs_bunny_namespaceObject,
  title: 'Seishun Buta Yarō wa Bunny Girl-senpai no Yume wo Minai',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: true
};
var m7 = {
  img: date_namespaceObject,
  title: 'Date-A-Live',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false
};
var m8 = {
  img: erased_namespaceObject,
  title: 'Erased',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false
};
var m10 = {
  img: ass_namespaceObject,
  title: 'Assesination Classroom',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false
};
var m9 = {
  img: mushoku_namespaceObject,
  title: 'Mushoku Tensei Jobless Reincarnation',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false
};
var m11 = {
  img: elite_namespaceObject,
  title: 'Classroom of the Elite',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false
};
var m12 = {
  img: jojo_namespaceObject,
  title: 'JoJo no Kimyō na Bōken',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false
};
var m13 = {
  img: shiki_namespaceObject,
  title: "Shikimori's Not Just a Cutie",
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false
};
var m14 = {
  img: minimgs_aharen_namespaceObject,
  title: 'Aharen-san wa Hakerenai',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false
};
var m15 = {
  img: tapped_namespaceObject,
  title: 'Trapped in a Dating Sim: The World of Otome Games is Tough for Mobs',
  tipo: 'Serie',
  sound: 'Subtitulado',
  bookmark: false
};
var m16 = {
  img: horimiya_namespaceObject,
  title: 'Horimiya',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false
};
var m17 = {
  img: ao_namespaceObject,
  title: 'Aoashi',
  tipo: 'Serie',
  sound: '',
  bookmark: false
};
var m18 = {
  img: loveafter_namespaceObject,
  title: 'Love After World Domination',
  tipo: 'Serie',
  sound: 'Sub | Dob',
  bookmark: false
};

var MiniCarrusel_Carrusel = function Carrusel() {
  var ops = [/*#__PURE__*/external_react_default().createElement(modules_MiniContainer_MiniContainer, {
    datos: [m1, m2, m3, m4, m5, m6]
  }), /*#__PURE__*/external_react_default().createElement(modules_MiniContainer_MiniContainer, {
    datos: [m7, m8, m9, m10, m11, m12]
  }), /*#__PURE__*/external_react_default().createElement(modules_MiniContainer_MiniContainer, {
    datos: [m13, m14, m15, m16, m17, m18]
  })];

  var _useState = (0,external_react_namespaceObject.useState)(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      Index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = (0,external_react_namespaceObject.useState)(true),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isnext = _useState4[0],
      setnext = _useState4[1];

  var _useState5 = (0,external_react_namespaceObject.useState)(2000),
      _useState6 = slicedToArray_default()(_useState5, 2),
      timeout = _useState6[0],
      settime = _useState6[1];

  var selectImage = function selectImage(index, images) {
    var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var condi = next ? index < images.length - 1 : index > 0;
    var nextIndex = next ? condi ? index + 1 : 0 : condi ? index - 1 : images.length - 1;
    setnext(next);
    settime(2000);
    setIndex(nextIndex);
  };

  var previous = function previous() {
    selectImage(Index, ops, false);
  };

  var next = function next() {
    selectImage(Index, ops);
  };

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "containerMini"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "box"
  }, /*#__PURE__*/external_react_default().createElement("h2", null, " Nuestras recomendaciones")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "gradient"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "butuns"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "iconder2",
    onClick: previous
  }, /*#__PURE__*/external_react_default().createElement(arrowder, {
    className: "der"
  })), /*#__PURE__*/external_react_default().createElement(external_react_transition_group_namespaceObject.TransitionGroup, {
    className: "HOLK",
    childFactory: function childFactory(nino) {
      return /*#__PURE__*/(0,external_react_namespaceObject.cloneElement)(nino, {
        classNames: isnext ? 'right' : 'left'
      });
    }
  }, /*#__PURE__*/external_react_default().createElement(external_react_transition_group_namespaceObject.CSSTransition, {
    key: Index,
    timeout: timeout
  }, ops[Index])), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "iconizq2",
    onClick: next
  }, /*#__PURE__*/external_react_default().createElement(arrowizq, {
    className: "izq"
  }))));
};

/* harmony default export */ const MiniCarrusel_MiniCarrusel = (MiniCarrusel_Carrusel);
;// CONCATENATED MODULE: ./src/modules/View/View.css
/* harmony default export */ const View = (__webpack_require__.p + "de3a80ba27f3734ba5137892849eeb13.css");
;// CONCATENATED MODULE: ./assets/play.svg
var play_path;

function play_extends() { play_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return play_extends.apply(this, arguments); }



var SvgPlay = function SvgPlay(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", play_extends({
    className: "play_svg__c-availability-overlay__icon play_svg__c-availability-overlay__icon--scalable",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "data-t": "play-svg",
    "aria-labelledby": "play-svg",
    "aria-hidden": "true"
  }, props), play_path || (play_path = /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M5.944 3C5.385 3 5 3.445 5 4.22v16.018c0 .771.384 1.22.945 1.22.234 0 .499-.078.779-.243l13.553-7.972c.949-.558.952-1.468 0-2.028L6.724 3.243C6.444 3.078 6.178 3 5.944 3m1.057 2.726 11.054 6.503L7 18.732l.001-13.006"
  })));
};

/* harmony default export */ const play = (SvgPlay);
;// CONCATENATED MODULE: ./assets/comments.svg
var comments_path;

function comments_extends() { comments_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return comments_extends.apply(this, arguments); }



var SvgComments = function SvgComments(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", comments_extends({
    className: "comments_svg__c-comments-count__icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "data-t": "comment-svg",
    "aria-labelledby": "comment-svg",
    "aria-hidden": "true"
  }, props), comments_path || (comments_path = /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M21 3a1 1 0 0 1 .993.883L22 4v15a1 1 0 0 1-.883.993L21 20h-6l-2.293 2.293a.997.997 0 0 1-1.312.09l-.102-.09L9 20H3a1 1 0 0 1-.993-.883L2 19V4a1 1 0 0 1 .883-.993L3 3h18zm-1 2H4v13h5.829l.585.586L12 20.172l1.586-1.586.586-.586H20V5zm-4 8a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM8 8h8a1 1 0 0 1 .117 1.993L16 10H8a1 1 0 0 1-.117-1.993L8 8h8z"
  })));
};

/* harmony default export */ const comments = (SvgComments);
;// CONCATENATED MODULE: ./assets/relod.svg
var relod_path;

function relod_extends() { relod_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return relod_extends.apply(this, arguments); }



var SvgRelod = function SvgRelod(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", relod_extends({
    className: "relod_svg__c-playable-thumbnail-icon__watched-icon relod_svg__c-playable-thumbnail-icon__watched-icon--scalable relod_svg__c-playable-thumbnail-icon__replay",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "data-t": "replay-svg",
    "aria-labelledby": "replay-svg",
    "aria-hidden": "true"
  }, props), relod_path || (relod_path = /*#__PURE__*/external_react_namespaceObject.createElement("path", {
    d: "M12 2c-5.177 0-9.446 3.954-9.949 9H0l3 3 3-3H4.069C4.564 7.06 7.928 4 12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8a7.986 7.986 0 0 1-5.333-2.037 1 1 0 1 0-1.334 1.49A9.977 9.977 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2"
  })));
};

/* harmony default export */ const relod = (SvgRelod);
;// CONCATENATED MODULE: ./src/modules/MiniProgressBar/MiniProgress.css
/* harmony default export */ const MiniProgress = (__webpack_require__.p + "48a6836f51c78ff9212be72f0cd16ed9.css");
;// CONCATENATED MODULE: ./src/modules/MiniProgressBar/MiniProgress.jsx




var MiniProgress_MiniProgress = function MiniProgress(_ref) {
  var width = _ref.width,
      percent = _ref.percent;
  return /*#__PURE__*/external_react_namespaceObject.createElement("div", {
    className: "minipade"
  }, /*#__PURE__*/external_react_namespaceObject.createElement("div", {
    style: {
      width: "".concat(percent * width / 100, "%")
    },
    className: "progress2"
  }), /*#__PURE__*/external_react_namespaceObject.createElement("div", {
    className: "progress-div2",
    style: {
      width: "".concat(width - percent * width / 100, "%")
    }
  }));
};

MiniProgress_MiniProgress.propTypes = {
  width: (external_prop_types_default()).number.isRequired,
  percent: (external_prop_types_default()).number.isRequired
};
/* harmony default export */ const MiniProgressBar_MiniProgress = (MiniProgress_MiniProgress);
;// CONCATENATED MODULE: ./src/modules/ViewItem/ViewItem.css
/* harmony default export */ const ViewItem = (__webpack_require__.p + "2a47de27a24262defa9b27cc5c7b3e0a.css");
;// CONCATENATED MODULE: ./src/modules/ViewItem/ViewItem.jsx








var Viewitem = function Viewitem(_ref) {
  var img = _ref.img,
      title = _ref.title,
      episode = _ref.episode,
      sound = _ref.sound,
      coments = _ref.coments,
      time = _ref.time,
      total = _ref.total;

  if (time === 0) {
    return /*#__PURE__*/external_react_default().createElement("div", {
      className: "player-card"
    }, /*#__PURE__*/external_react_default().createElement("div", {
      className: "img-card",
      id: "coso",
      style: {
        backgroundImage: "url(".concat(img, ")")
      }
    }, /*#__PURE__*/external_react_default().createElement("div", {
      className: "mica"
    }), /*#__PURE__*/external_react_default().createElement(relod, {
      className: "reicon"
    }), /*#__PURE__*/external_react_default().createElement(play, {
      className: "unreicon"
    }), /*#__PURE__*/external_react_default().createElement("div", {
      className: "time"
    }, "Visto"), /*#__PURE__*/external_react_default().createElement("div", {
      className: "untime"
    }, Math.round(total), "m")), /*#__PURE__*/external_react_default().createElement("div", {
      className: "text-card"
    }, /*#__PURE__*/external_react_default().createElement("small", {
      className: "tittu"
    }, title), /*#__PURE__*/external_react_default().createElement("span", {
      className: "tope"
    }, episode), /*#__PURE__*/external_react_default().createElement("div", {
      className: "foot2"
    }, /*#__PURE__*/external_react_default().createElement("span", {
      className: "sub2"
    }, sound), /*#__PURE__*/external_react_default().createElement("div", {
      className: "minifoot"
    }, /*#__PURE__*/external_react_default().createElement("span", {
      className: "comm"
    }, coments), /*#__PURE__*/external_react_default().createElement(comments, {
      className: "commicon"
    })))));
  }

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "player-card"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "img-card",
    style: {
      backgroundImage: "url(".concat(img, ")")
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "img-card-container"
  }, /*#__PURE__*/external_react_default().createElement(play, {
    className: "reicon"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "time"
  }, time, "m restantes")), /*#__PURE__*/external_react_default().createElement(MiniProgressBar_MiniProgress, {
    className: "progre",
    width: 100,
    percent: 100 - time * 100 / total
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "text-card"
  }, /*#__PURE__*/external_react_default().createElement("small", {
    className: "tittu"
  }, title), /*#__PURE__*/external_react_default().createElement("span", {
    className: "tope"
  }, episode), /*#__PURE__*/external_react_default().createElement("div", {
    className: "foot2"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: "sub2"
  }, sound), /*#__PURE__*/external_react_default().createElement("div", {
    className: "minifoot"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: "comm"
  }, coments), /*#__PURE__*/external_react_default().createElement(comments, {
    className: "commicon"
  })))));
};

Viewitem.propTypes = {
  img: (external_prop_types_default()).string.isRequired,
  title: (external_prop_types_default()).string.isRequired,
  episode: (external_prop_types_default()).string.isRequired,
  sound: (external_prop_types_default()).string.isRequired,
  coments: (external_prop_types_default()).number.isRequired,
  time: (external_prop_types_default()).number.isRequired,
  total: (external_prop_types_default()).number.isRequired
};
/* harmony default export */ const ViewItem_ViewItem = (Viewitem);
;// CONCATENATED MODULE: ./assets/viendo/cuckos.jpeg
const viendo_cuckos_namespaceObject = __webpack_require__.p + "5fece81811ec49253341.jpeg";
;// CONCATENATED MODULE: ./assets/viendo/kaguya.jpeg
const viendo_kaguya_namespaceObject = __webpack_require__.p + "a2a56af2d882ae4ab8a7.jpeg";
;// CONCATENATED MODULE: ./assets/viendo/spy.jpeg
const viendo_spy_namespaceObject = __webpack_require__.p + "2e403ac0be08df617d93.jpeg";
;// CONCATENATED MODULE: ./assets/viendo/tomo.jpeg
const viendo_tomo_namespaceObject = __webpack_require__.p + "ecd1ce6c9048490c5fd3.jpeg";
;// CONCATENATED MODULE: ./src/modules/View/View.jsx








var View_m1 = {
  img: viendo_cuckos_namespaceObject,
  title: 'A COUPLE OF CUCKOOS',
  episode: 'T1 E5 - Episodio 5',
  sound: 'Subtitulado',
  coments: 123,
  time: 12,
  total: 24.10
};
var View_m2 = {
  img: viendo_spy_namespaceObject,
  title: 'SPY X FAMILY',
  episode: "T1 E1 - Operacion 'Strix' ",
  sound: 'Doblajes',
  coments: 595,
  time: 22,
  total: 24.10
};
var View_m3 = {
  img: viendo_kaguya_namespaceObject,
  title: 'KAGUYA-SAMA: LOVE IS WAR',
  episode: 'T3 E7 - Miko Iino no puede amar',
  sound: 'Subtitulado',
  coments: 286,
  time: 0,
  total: 24.10
};
var View_m4 = {
  img: viendo_tomo_namespaceObject,
  title: 'TOMODACHI GAME',
  episode: 'T1 E7 - Me quedo con tu vida por el valor de 20 000 000 yenes',
  sound: 'Subtitulado',
  coments: 146,
  time: 0,
  total: 22.10
};
var data = [View_m2, View_m1, View_m3, View_m4];

var View_View = function View() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "containerMini"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "box"
  }, /*#__PURE__*/external_react_default().createElement("h2", null, " Seguir viendo"), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "iconizq2"
  }, /*#__PURE__*/external_react_default().createElement(arrowizq, {
    className: "izq"
  }))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "bgradient"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "viendos"
  }, data.map(function (index) {
    return /*#__PURE__*/external_react_default().createElement(ViewItem_ViewItem, {
      img: index.img,
      title: index.title,
      episode: index.episode,
      sound: index.sound,
      coments: index.coments,
      time: index.time,
      total: index.total
    });
  })));
};

/* harmony default export */ const modules_View_View = (View_View);
;// CONCATENATED MODULE: ./src/App.jsx







var App = function App() {
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement(Navbar_navbar, null), /*#__PURE__*/external_react_default().createElement(Carrusel_Carrusel, null), /*#__PURE__*/external_react_default().createElement(MiniCarrusel_MiniCarrusel, null), /*#__PURE__*/external_react_default().createElement(modules_View_View, null));
};

/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./server/index.jsx





var PORT = process.env.PORT || 3000;
var app = external_express_default()();
app.get('/', function (req, res) {
  var element = server_namespaceObject.renderToString( /*#__PURE__*/external_react_default().createElement(src_App, null));
  var html = "\n    <html lang=\"en\">\n    <head>\n        <title>Document</title>\n    </head>\n    <body style=\"margin: 0px;\">\n        <div id=\"root\">".concat(element, "</div>\n        <script src=\"/bundle.js\"></script>\n    </body>\n    </html>\n  ");
  res.send(html);
});
app.use(external_express_default()["static"](external_path_default().join(__dirname, '../dist')));
app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});
/******/ })()
;
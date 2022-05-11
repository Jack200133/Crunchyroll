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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// NAMESPACE OBJECT: ./assets/cola.svg
var cola_namespaceObject = {};
__webpack_require__.r(cola_namespaceObject);

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
/* harmony default export */ const main = (__webpack_require__.p + "63588e8755060f163537767f2a702837.css");
;// CONCATENATED MODULE: ./src/modules/Navbar/navbar.css
/* harmony default export */ const navbar = (__webpack_require__.p + "1c1f7a0b223b57d155cacc8bf695d9f4.css");
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
;// CONCATENATED MODULE: ./src/modules/Carrusel/carrusel.css
/* harmony default export */ const carrusel = (__webpack_require__.p + "55de30ea99f43b4775ce04c86858efd9.css");
;// CONCATENATED MODULE: ./src/modules/CarrulItem1/carrulItem1.css
/* harmony default export */ const carrulItem1 = (__webpack_require__.p + "1ab00885632faec317d0fb8d9dde6c9e.css");
;// CONCATENATED MODULE: ./assets/cola.svg
var _linearGradient, _linearGradient2, _g;

function cola_extends() { cola_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return cola_extends.apply(this, arguments); }



var SvgCola = function SvgCola(props) {
  return /*#__PURE__*/React.createElement("svg", cola_extends({
    className: "cola_svg__c-hero-carousel-background__orange-asset",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3310 1902",
    "data-t": "hero-carousel-orange-svg",
    "aria-labelledby": "hero-carousel-orange-svg",
    "aria-hidden": "true",
    preserveAspectRatio: "xMidYMid slice"
  }, props), _linearGradient || (_linearGradient = /*#__PURE__*/React.createElement("linearGradient", {
    id: "cola_svg__a",
    x1: "-4.906%",
    x2: "3.218%",
    y1: "57.147%",
    y2: "47.206%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#fab818"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#f47521"
  }))), _linearGradient2 || (_linearGradient2 = /*#__PURE__*/React.createElement("linearGradient", {
    id: "cola_svg__b",
    x1: "18.134%",
    x2: "17.028%",
    y1: "51.289%",
    y2: "65.141%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#f47521"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#fab818"
  }))), _g || (_g = /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2268.26 463.97c491.15 42.97 875.542 389.229 947.314 815.627l-.008.015a878.09 878.09 0 0 0 5.805-49.897c45.682-522.153-382.349-986.13-956.035-1036.321-573.686-50.191-1075.784 332.41-1121.466 854.563-6.572 75.123-3.342 149.041 8.722 220.697l.008-.015c72.22-496.4 560.41-853.247 1115.66-804.669z",
    fill: "url(#cola_svg__a)",
    opacity: 0.8,
    transform: "rotate(11 2182.62 734.29)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1194.307 945.8c491.15 42.97 875.541 389.228 947.313 815.626l-.008.015a878.097 878.097 0 0 0 5.805-49.897c45.683-522.153-382.348-986.13-956.035-1036.321C617.696 625.032 115.6 1007.633 69.917 1529.787c-6.573 75.122-3.343 149.04 8.721 220.696l.008-.015c72.22-496.4 560.41-853.247 1115.661-804.668z",
    fill: "url(#cola_svg__b)",
    transform: "rotate(-172 1108.667 1216.12)"
  }))));
};

/* harmony default export */ const cola = ((/* unused pure expression or super */ null && (SvgCola)));
;// CONCATENATED MODULE: ./src/modules/CarrulItem1/carrulItem1.jsx




var CarrulItem1 = function CarrulItem1(_ref) {
  var mage = _ref.mage;
  console.log('Cola:', cola_namespaceObject.ReactComponent);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "containcercarrusel1"
  }, /*#__PURE__*/external_react_default().createElement(cola_namespaceObject.ReactComponent, {
    className: "colita"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "base",
    style: {
      backgroundImage: "url(".concat(mage, ")")
    }
  }));
};

/* harmony default export */ const CarrulItem1_carrulItem1 = (CarrulItem1);
;// CONCATENATED MODULE: ./src/modules/CarrulItem2/carrulItem2.css
/* harmony default export */ const carrulItem2 = (__webpack_require__.p + "76b709db4f69397ff2597d1de32b8cee.css");
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





var CarrulItem2 = function CarrulItem2() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "containcercarrusel2"
  }, /*#__PURE__*/external_react_default().createElement(triLine, {
    className: "Lines"
  }), /*#__PURE__*/external_react_default().createElement(circle, {
    className: "Circle"
  }));
};

/* harmony default export */ const CarrulItem2_carrulItem2 = (CarrulItem2);
;// CONCATENATED MODULE: ./src/modules/CarrulItem3/carrulItem3.css
/* harmony default export */ const carrulItem3 = (__webpack_require__.p + "7a0c2fa867a41f7477555169ab284ac1.css");
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
;// CONCATENATED MODULE: ./assets/circle3.svg
var circle3_g;

function circle3_extends() { circle3_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return circle3_extends.apply(this, arguments); }



var SvgCircle3 = function SvgCircle3(props) {
  return /*#__PURE__*/external_react_namespaceObject.createElement("svg", circle3_extends({
    className: "circle3_svg__c-hero-carousel-background__blue-asset",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2440 2102",
    "data-t": "hero-carousel-blue-svg",
    "aria-labelledby": "hero-carousel-blue-svg",
    "aria-hidden": "true",
    preserveAspectRatio: "xMidYMid slice"
  }, props), circle3_g || (circle3_g = /*#__PURE__*/external_react_namespaceObject.createElement("g", {
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

/* harmony default export */ const circle3 = (SvgCircle3);
;// CONCATENATED MODULE: ./src/modules/CarrulItem3/carrulItem3.jsx





var CarrulItem3 = function CarrulItem3() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "containcercarrusel3"
  }, /*#__PURE__*/external_react_default().createElement(circle2, {
    className: "blue"
  }), /*#__PURE__*/external_react_default().createElement(circle3, {
    className: "blue2"
  }));
};

/* harmony default export */ const CarrulItem3_carrulItem3 = (CarrulItem3);
;// CONCATENATED MODULE: ./assets/imgs/aharen.png
const aharen_namespaceObject = __webpack_require__.p + "7f3b55a8e7fa13369766.png";
;// CONCATENATED MODULE: ./assets/imgs/dance.png
const dance_namespaceObject = __webpack_require__.p + "528f55f3bc7e2fbb903f.png";
;// CONCATENATED MODULE: ./assets/imgs/spy.png
const spy_namespaceObject = __webpack_require__.p + "2fb53e54ac1bfa735d9a.png";
;// CONCATENATED MODULE: ./src/modules/Carrusel/carrusel.jsx


/* eslint-disable no-nested-ternary */









var Carrusel = function Carrusel() {
  var backops = [CarrulItem1_carrulItem1, CarrulItem2_carrulItem2, CarrulItem3_carrulItem3];
  var ops = [aharen_namespaceObject, dance_namespaceObject, spy_namespaceObject];

  var _useState = (0,external_react_namespaceObject.useState)(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      Index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = (0,external_react_namespaceObject.useState)(ops[0]),
      _useState4 = slicedToArray_default()(_useState3, 2),
      Image = _useState4[0],
      setImage = _useState4[1];

  var _useState5 = (0,external_react_namespaceObject.useState)(backops[0]),
      _useState6 = slicedToArray_default()(_useState5, 2),
      Back = _useState6[0],
      setBack = _useState6[1];

  var selectImage = function selectImage(index, images) {
    var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var condi = next ? index < images.length : index > 0;
    var nextIndex = next ? condi ? index + 1 : 0 : condi ? index - 1 : images.length - 1;
    setImage(ops[nextIndex]);
    setBack(backops[nextIndex]);
    setIndex(nextIndex);
  };

  var previous = function previous() {
    selectImage(Index, ops, false);
  };

  var next = function next() {
    selectImage(Index, ops);
  };

  return /*#__PURE__*/external_react_default().createElement(CarrulItem1_carrulItem1, {
    mage: Image
  }, /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      backgroundImage: "url(".concat(Image, ")")
    },
    className: "img"
  }));
};

/* harmony default export */ const Carrusel_carrusel = (Carrusel);
;// CONCATENATED MODULE: ./src/App.jsx





var App = function App() {
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement(Navbar_navbar, null), /*#__PURE__*/external_react_default().createElement(Carrusel_carrusel, null));
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
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
/* harmony default export */ const main = (__webpack_require__.p + "dc206a77112e094c1071600e12c8aa0b.css");
;// CONCATENATED MODULE: ./src/modules/Navbar/navbar.css
/* harmony default export */ const navbar = (__webpack_require__.p + "d5802130f6ce9f30ca29d7f2f53b0db6.css");
;// CONCATENATED MODULE: ./assets/crunchys.svg
const crunchys_namespaceObject = __webpack_require__.p + "217274a9aabf0549f7b0.svg";
;// CONCATENATED MODULE: ./assets/search.svg
const search_namespaceObject = __webpack_require__.p + "0162ec76997d4a591a57.svg";
;// CONCATENATED MODULE: ./assets/dj.svg
const dj_namespaceObject = __webpack_require__.p + "ea71c1c38807e8cdad08.svg";
;// CONCATENATED MODULE: ./src/modules/Navbar/navbar.jsx






var Navbar = function Navbar() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "header-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "header-logo"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "a",
    style: {
      backgroundImage: "url(".concat(crunchys_namespaceObject, ")")
    }
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "header-left"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "Explorar"
  }, "Explorar", /*#__PURE__*/external_react_default().createElement("div", {
    className: "down"
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "Manga"
  }, "Manga"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "Juegos"
  }, "Juegos"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "Noticias"
  }, "Noticias", /*#__PURE__*/external_react_default().createElement("div", {
    className: "down"
  }))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "header-right"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "Search"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "b",
    style: {
      backgroundImage: "url(".concat(search_namespaceObject, ")")
    }
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "bookmark"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "b",
    style: {
      backgroundImage: "url(".concat(dj_namespaceObject, ")")
    }
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "Perfil"
  })));
};

/* harmony default export */ const Navbar_navbar = (Navbar);
;// CONCATENATED MODULE: ./src/App.jsx




var App = function App() {
  return /*#__PURE__*/external_react_default().createElement(Navbar_navbar, null);
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
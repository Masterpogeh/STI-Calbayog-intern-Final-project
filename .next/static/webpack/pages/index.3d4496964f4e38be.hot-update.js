"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _Navlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navlink */ \"./components/Navlink.jsx\");\n/* harmony import */ var _utils_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/link */ \"./utils/link.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Navbar = (param)=>{\n    let { cardLength  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [cartCount, setCartCount] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [localStorageData, setLocalStorageData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const changeBackground = ()=>{\n            setNavbar(window.scrollY >= 100);\n        };\n        window.addEventListener(\"scroll\", changeBackground);\n        return ()=>{\n            window.removeEventListener(\"scroll\", changeBackground);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (true) {\n            const data = JSON.parse(localStorage.getItem(\"data\"));\n            setLocalStorageData(data);\n        }\n    }, [\n        cardLength\n    ]);\n    const handleAddToCart = (item)=>{\n        const updatedCartItems = [\n            ...cartItems,\n            item\n        ];\n        setCartItems(updatedCartItems);\n        setCartCount(updatedCartItems.length);\n        setCardLength(new Set(updatedCartItems.map((item)=>item.title)).size);\n        localStorage.setItem(\"cartCount\", updatedCartItems.length);\n        localStorage.setItem(\"cartItems\", JSON.stringify(updatedCartItems));\n    };\n    const cartMenu = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" max-h-80 overflow-y-scroll\",\n            id: \"mouse\",\n            children: [\n                \"const data = Array.isArray(localStorageData) ? localStorageData : [];\",\n                localStorageData.length > 0 ? Object.entries(localStorageData.reduce((acc, item)=>{\n                    acc[item.title] = (acc[item.title] || 0) + 1;\n                    return acc;\n                }, {})).map((param, index)=>/*#__PURE__*/ {\n                    let [title, count] = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex gap-1 bg-[#b77b2e] rounded-md p-1\",\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"flex justify-end\",\n                                            children: count\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"\",\n                                            children: \" quantity\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {\n                    children: \"No items in cart\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" \".concat(navbar ? \"bg-dark\" : \"bg-opacity-0\", \" duration-700 backdrop-blur-md bg-opacity-60 fixed z-[10] font-semibold  text-tahiti mt-4-600 w-[94.6%] pr-12 pl-4 pt-1 pb-1\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/BASTAlogo.png\",\n                            alt: \"logo\",\n                            width: 70,\n                            height: 70\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex gap-4 text-lg text-white\",\n                            children: [\n                                _utils_link__WEBPACK_IMPORTED_MODULE_3__.linkList.map((link)=>{\n                                    if (link.title === \"Menu\") {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Dropdown, {\n                                            arrow: true,\n                                            menu: {\n                                                items: _utils_link__WEBPACK_IMPORTED_MODULE_3__.CoffeTypes.map((data)=>({\n                                                        key: data.id,\n                                                        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navlink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                            href: data.href,\n                                                            title: data.title\n                                                        }, data.id, false, void 0, void 0)\n                                                    }))\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                onClick: (e)=>e.preventDefault(),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Space, {\n                                                    className: \"cursor-pointer text-white hover:text-menuitemcolor\",\n                                                    children: [\n                                                        \"Menu\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.DownOutlined, {}, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                                                            lineNumber: 110,\n                                                            columnNumber: 27\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 21\n                                        }, undefined);\n                                    }\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navlink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: link.href,\n                                        title: link.title\n                                    }, link.id, false, {\n                                        fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 19\n                                    }, undefined);\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Dropdown, {\n                                    overlay: cartMenu,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Badge, {\n                                        className: \"duration-300 hover:scale-150\",\n                                        count: cardLength,\n                                        offset: [\n                                            10,\n                                            0\n                                        ],\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.ShoppingCartOutlined, {\n                                            style: {\n                                                fontSize: 24,\n                                                color: \"white\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                                            lineNumber: 126,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs\\\\components\\\\Navbar.jsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Navbar, \"9c2OD4F7d1gwOHM05ONNquUGoIM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L05hdmJhci5qc3g/M2FhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgRHJvcGRvd24sIFNwYWNlLCBCYWRnZSwgTWVudSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IERvd25PdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgTmF2bGluayBmcm9tIFwiLi9OYXZsaW5rXCI7XHJcbmltcG9ydCB7IENvZmZlVHlwZXMsIGxpbmtMaXN0IH0gZnJvbSBcIkAvdXRpbHMvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgU2hvcHBpbmdDYXJ0T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGNhcmRMZW5ndGggfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtuYXZiYXIsIHNldE5hdmJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NhcnRDb3VudCwgc2V0Q2FydENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvY2FsU3RvcmFnZURhdGEsIHNldExvY2FsU3RvcmFnZURhdGFdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjaGFuZ2VCYWNrZ3JvdW5kID0gKCkgPT4ge1xyXG4gICAgICBzZXROYXZiYXIod2luZG93LnNjcm9sbFkgPj0gMTAwKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hhbmdlQmFja2dyb3VuZCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hhbmdlQmFja2dyb3VuZCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGF0YVwiKSk7XHJcbiAgICAgIHNldExvY2FsU3RvcmFnZURhdGEoZGF0YSk7XHJcbiAgICB9XHJcbiAgfSwgW2NhcmRMZW5ndGhdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9DYXJ0ID0gKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBbLi4uY2FydEl0ZW1zLCBpdGVtXTtcclxuICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcclxuICAgIHNldENhcnRDb3VudCh1cGRhdGVkQ2FydEl0ZW1zLmxlbmd0aCk7XHJcbiAgICBzZXRDYXJkTGVuZ3RoKG5ldyBTZXQodXBkYXRlZENhcnRJdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0udGl0bGUpKS5zaXplKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRDb3VudFwiLCB1cGRhdGVkQ2FydEl0ZW1zLmxlbmd0aCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRJdGVtc1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkQ2FydEl0ZW1zKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FydE1lbnUgPSAoXHJcbiAgICA8TWVudT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWF4LWgtODAgb3ZlcmZsb3cteS1zY3JvbGxcIiBpZD1cIm1vdXNlXCI+XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEFycmF5LmlzQXJyYXkobG9jYWxTdG9yYWdlRGF0YSkgPyBsb2NhbFN0b3JhZ2VEYXRhIDogW107XHJcbiAgICAgICAge2xvY2FsU3RvcmFnZURhdGEubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKFxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VEYXRhLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgYWNjW2l0ZW0udGl0bGVdID0gKGFjY1tpdGVtLnRpdGxlXSB8fCAwKSArIDE7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfSwge30pXHJcbiAgICAgICAgICApLm1hcCgoW3RpdGxlLCBjb3VudF0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGp1c3RpZnktYmV0d2VlblwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPHA+e3RpdGxlfTwvcD57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGdhcC0xIGJnLVsjYjc3YjJlXSByb3VuZGVkLW1kIHAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj57Y291bnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj4gcXVhbnRpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TWVudS5JdGVtPk5vIGl0ZW1zIGluIGNhcnQ8L01lbnUuSXRlbT5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YCAke1xyXG4gICAgICAgICAgbmF2YmFyID8gXCJiZy1kYXJrXCIgOiBcImJnLW9wYWNpdHktMFwiXHJcbiAgICAgICAgfSBkdXJhdGlvbi03MDAgYmFja2Ryb3AtYmx1ci1tZCBiZy1vcGFjaXR5LTYwIGZpeGVkIHotWzEwXSBmb250LXNlbWlib2xkICB0ZXh0LXRhaGl0aSBtdC00LTYwMCB3LVs5NC42JV0gcHItMTIgcGwtNCBwdC0xIHBiLTFgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtM1wiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL0JBU1RBbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgd2lkdGg9ezcwfSBoZWlnaHQ9ezcwfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCB0ZXh0LWxnIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICB7bGlua0xpc3QubWFwKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGluay50aXRsZSA9PT0gXCJNZW51XCIpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgIGFycm93XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZW51PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBDb2ZmZVR5cGVzLm1hcCgoZGF0YSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZGF0YS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1tZW51aXRlbWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEb3duT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPE5hdmxpbmsga2V5PXtsaW5rLmlkfSBocmVmPXtsaW5rLmhyZWZ9IHRpdGxlPXtsaW5rLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gb3ZlcmxheT17Y2FydE1lbnV9PlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImR1cmF0aW9uLTMwMCBob3ZlcjpzY2FsZS0xNTBcIlxyXG4gICAgICAgICAgICAgICAgICBjb3VudD17Y2FyZExlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0PXtbMTAsIDBdfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0T3V0bGluZWRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMjQsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkRyb3Bkb3duIiwiU3BhY2UiLCJCYWRnZSIsIk1lbnUiLCJEb3duT3V0bGluZWQiLCJOYXZsaW5rIiwiQ29mZmVUeXBlcyIsImxpbmtMaXN0IiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaG9wcGluZ0NhcnRPdXRsaW5lZCIsIk5hdmJhciIsImNhcmRMZW5ndGgiLCJyb3V0ZXIiLCJuYXZiYXIiLCJzZXROYXZiYXIiLCJjYXJ0Q291bnQiLCJzZXRDYXJ0Q291bnQiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJsb2NhbFN0b3JhZ2VEYXRhIiwic2V0TG9jYWxTdG9yYWdlRGF0YSIsImNoYW5nZUJhY2tncm91bmQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUFkZFRvQ2FydCIsIml0ZW0iLCJ1cGRhdGVkQ2FydEl0ZW1zIiwibGVuZ3RoIiwic2V0Q2FyZExlbmd0aCIsIlNldCIsIm1hcCIsInRpdGxlIiwic2l6ZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjYXJ0TWVudSIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsImFjYyIsImluZGV4IiwiY291bnQiLCJJdGVtIiwicCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidWwiLCJsaW5rIiwiYXJyb3ciLCJtZW51IiwiaXRlbXMiLCJrZXkiLCJsYWJlbCIsImhyZWYiLCJhIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm92ZXJsYXkiLCJvZmZzZXQiLCJzdHlsZSIsImZvbnRTaXplIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n"));

/***/ })

});
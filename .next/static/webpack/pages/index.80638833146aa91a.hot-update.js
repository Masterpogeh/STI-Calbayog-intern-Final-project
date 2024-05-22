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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sections_home_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/home.jsx */ \"./sections/home.jsx\");\n/* harmony import */ var _sections_menu_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/sections/menu.jsx */ \"./sections/menu.jsx\");\n/* harmony import */ var _sections_about_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/sections/about.jsx */ \"./sections/about.jsx\");\n/* harmony import */ var _sections_footer_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/sections/footer.jsx */ \"./sections/footer.jsx\");\n/* harmony import */ var _components_CartContext_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/CartContext.jsx */ \"./components/CartContext.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [cardLength, setCardLength] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        if (window !== \"undefined\") {\n            const getter = localStorage.getItem(\"data\");\n            const parseData = JSON.parse(getter);\n            setCardLength((parseData === null || parseData === void 0 ? void 0 : parseData.length) || 0);\n        }\n    }, []);\n    const [totalQuantity, setTotalQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        if (true) {\n            const getter = localStorage.getItem(\"data\");\n            const parseData = JSON.parse(getter);\n            let sum = 0;\n            if (parseData && Array.isArray(parseData)) {\n                parseData.forEach((item)=>{\n                    // Assuming each item has a property named \"quantity\" containing a string value\n                    // You may need to adjust this depending on your actual data structure\n                    const quantityValue = parseFloat(item.quantity);\n                    if (!isNaN(localStorageData)) {\n                        sum += localStorageData;\n                    }\n                });\n            }\n            setTotalQuantity(sum);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CartContext_jsx__WEBPACK_IMPORTED_MODULE_6__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Coffee First - Calbayog\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs final project\\\\pages\\\\index.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"freshcoffee website\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs final project\\\\pages\\\\index.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs final project\\\\pages\\\\index.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/BASTAfavicon.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs final project\\\\pages\\\\index.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs final project\\\\pages\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs final project\\\\pages\\\\index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_home_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    totalQuantity: totalQuantity\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs final project\\\\pages\\\\index.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_menu_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    setTotalQuantity: setTotalQuantity\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs final project\\\\pages\\\\index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_about_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs final project\\\\pages\\\\index.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_footer_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs final project\\\\pages\\\\index.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs final project\\\\pages\\\\index.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ken\\\\Desktop\\\\repos\\\\coffee-shop-nextjs final project\\\\pages\\\\index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"aBj05XxhuVkQvov96jQQCqcRQo8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNlO0FBQ0Y7QUFDRDtBQUNFO0FBQ2lCO0FBQ2hCO0FBRTdCLFNBQVNRLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUU3Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlLLFdBQVcsYUFBYTtZQUMxQixNQUFNQyxTQUFTQyxhQUFhQyxPQUFPLENBQUM7WUFDcEMsTUFBTUMsWUFBWUMsS0FBS0MsS0FBSyxDQUFDTDtZQUM3QkYsY0FBY0ssQ0FBQUEsc0JBQUFBLHVCQUFBQSxLQUFBQSxJQUFBQSxVQUFXRyxNQUFNLEtBQUk7UUFDckMsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdiLCtDQUFRQSxDQUFDO0lBR25ERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxJQUE2QixFQUFFO1lBQ2pDLE1BQU1NLFNBQVNDLGFBQWFDLE9BQU8sQ0FBQztZQUNwQyxNQUFNQyxZQUFZQyxLQUFLQyxLQUFLLENBQUNMO1lBQzdCLElBQUlTLE1BQU07WUFDVixJQUFJTixhQUFhTyxNQUFNQyxPQUFPLENBQUNSLFlBQVk7Z0JBQ3pDQSxVQUFVUyxPQUFPLENBQUNDLENBQUFBLE9BQVE7b0JBQ3hCLCtFQUErRTtvQkFDL0Usc0VBQXNFO29CQUN0RSxNQUFNQyxnQkFBZ0JDLFdBQVdGLEtBQUtHLFFBQVE7b0JBQzlDLElBQUksQ0FBQ0MsTUFBTUMsbUJBQW1CO3dCQUM1QlQsT0FBT1M7b0JBQ1QsQ0FBQztnQkFDSDtZQUNGLENBQUM7WUFDRFYsaUJBQWlCQztRQUNuQixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNoQixxRUFBWUE7a0JBQ1gsNEVBQUMwQjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ2hDLGtEQUFJQTs7c0NBQ0gsOERBQUNpQztzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFBS0MsTUFBSzs0QkFBY0MsU0FBUTs7Ozs7O3NDQUNqQyw4REFBQ0Y7NEJBQUtDLE1BQUs7NEJBQVdDLFNBQVE7Ozs7OztzQ0FDOUIsOERBQUNDOzRCQUFLQyxLQUFJOzRCQUFPQyxNQUFLOzs7Ozs7c0NBRXRCLDhEQUFDRjs0QkFDQ0UsTUFBSzs0QkFDTEQsS0FBSTs7Ozs7Ozs7Ozs7OzhCQUdSLDhEQUFDckMsMERBQVFBO29CQUFDa0IsZUFBZUE7Ozs7Ozs4QkFDekIsOERBQUNqQiwwREFBT0E7b0JBQUNrQixrQkFBa0JBOzs7Ozs7OEJBQzNCLDhEQUFDakIsMkRBQUtBOzs7Ozs4QkFDTiw4REFBQ0MsNERBQU1BOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWYsQ0FBQztHQXJEdUJJO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSBcIi4uL3NlY3Rpb25zL2hvbWUuanN4XCI7XHJcbmltcG9ydCBPdXJNZW51IGZyb20gXCJAL3NlY3Rpb25zL21lbnUuanN4XCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiQC9zZWN0aW9ucy9hYm91dC5qc3hcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9zZWN0aW9ucy9mb290ZXIuanN4XCI7XHJcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FydENvbnRleHQuanN4XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2NhcmRMZW5ndGgsIHNldENhcmRMZW5ndGhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAod2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGNvbnN0IGdldHRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGF0YVwiKTtcclxuICAgICAgY29uc3QgcGFyc2VEYXRhID0gSlNPTi5wYXJzZShnZXR0ZXIpO1xyXG4gICAgICBzZXRDYXJkTGVuZ3RoKHBhcnNlRGF0YT8ubGVuZ3RoIHx8IDApO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3RvdGFsUXVhbnRpdHksIHNldFRvdGFsUXVhbnRpdHldID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgY29uc3QgZ2V0dGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXRhXCIpO1xyXG4gICAgICBjb25zdCBwYXJzZURhdGEgPSBKU09OLnBhcnNlKGdldHRlcik7XHJcbiAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICBpZiAocGFyc2VEYXRhICYmIEFycmF5LmlzQXJyYXkocGFyc2VEYXRhKSkge1xyXG4gICAgICAgIHBhcnNlRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgLy8gQXNzdW1pbmcgZWFjaCBpdGVtIGhhcyBhIHByb3BlcnR5IG5hbWVkIFwicXVhbnRpdHlcIiBjb250YWluaW5nIGEgc3RyaW5nIHZhbHVlXHJcbiAgICAgICAgICAvLyBZb3UgbWF5IG5lZWQgdG8gYWRqdXN0IHRoaXMgZGVwZW5kaW5nIG9uIHlvdXIgYWN0dWFsIGRhdGEgc3RydWN0dXJlXHJcbiAgICAgICAgICBjb25zdCBxdWFudGl0eVZhbHVlID0gcGFyc2VGbG9hdChpdGVtLnF1YW50aXR5KTtcclxuICAgICAgICAgIGlmICghaXNOYU4obG9jYWxTdG9yYWdlRGF0YSkpIHtcclxuICAgICAgICAgICAgc3VtICs9IGxvY2FsU3RvcmFnZURhdGE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0VG90YWxRdWFudGl0eShzdW0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRQcm92aWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkNvZmZlZSBGaXJzdCAtIENhbGJheW9nPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJmcmVzaGNvZmZlZSB3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9CQVNUQWZhdmljb24ucG5nXCIgLz5cclxuXHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21pYytOZXVlOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxIb21lcGFnZSB0b3RhbFF1YW50aXR5PXt0b3RhbFF1YW50aXR5fSAvPlxyXG4gICAgICAgIDxPdXJNZW51IHNldFRvdGFsUXVhbnRpdHk9e3NldFRvdGFsUXVhbnRpdHl9IC8+XHJcbiAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FydFByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJIb21lcGFnZSIsIk91ck1lbnUiLCJBYm91dCIsIkZvb3RlciIsIkNhcnRQcm92aWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImNhcmRMZW5ndGgiLCJzZXRDYXJkTGVuZ3RoIiwid2luZG93IiwiZ2V0dGVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlRGF0YSIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsInRvdGFsUXVhbnRpdHkiLCJzZXRUb3RhbFF1YW50aXR5Iiwic3VtIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIml0ZW0iLCJxdWFudGl0eVZhbHVlIiwicGFyc2VGbG9hdCIsInF1YW50aXR5IiwiaXNOYU4iLCJsb2NhbFN0b3JhZ2VEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
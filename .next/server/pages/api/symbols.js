"use strict";
(() => {
var exports = {};
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 2268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    res.status(200).json([
        {
            value: "AUD",
            label: "Australian Dollar",
            currencySymbol: "$"
        },
        {
            value: "CAD",
            label: "Canadian Dollar",
            currencySymbol: "$"
        },
        {
            value: "CLP",
            label: "Chilean Peso",
            currencySymbol: "$"
        },
        {
            value: "CNY",
            label: "Chinese Yuan",
            currencySymbol: "\xa5"
        },
        {
            value: "EUR",
            label: "Euro",
            currencySymbol: "€"
        },
        {
            value: "GBP",
            label: "British Pound Sterling",
            currencySymbol: "\xa3"
        },
        {
            value: "INR",
            label: "Indian Rupee",
            currencySymbol: "₹"
        },
        {
            value: "JPY",
            label: "Japanese Yen",
            currencySymbol: "\xa5"
        },
        {
            value: "RUB",
            label: "Russian Ruble",
            currencySymbol: "₽"
        },
        {
            value: "USD",
            label: "United States Dollar",
            currencySymbol: "$"
        },
        {
            value: "ZAR",
            label: "South African Rand",
            currencySymbol: "R"
        }
    ]);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2268));
module.exports = __webpack_exports__;

})();
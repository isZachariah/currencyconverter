"use strict";
(() => {
var exports = {};
exports.id = 167;
exports.ids = [167];
exports.modules = {

/***/ 1969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIRequest": () => (/* binding */ APIRequest)
/* harmony export */ });
// const APIKEY = process.env.API_KEY
const APIKEY = "2029506bcdbfb303b4b31f63";
const APIRequest = (from, to, amount)=>amount === undefined ? `https://v6.exchangerate-api.com/v6/${APIKEY}/pair/${from}/${to}` : `https://v6.exchangerate-api.com/v6/${APIKEY}/pair/${from}/${to}/${amount}`;
// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>,
//
//     data: Query
//
// ) {
//     fetch(APIRequest(data.from, data.to, data.amount))
// }
//



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1969));
module.exports = __webpack_exports__;

})();
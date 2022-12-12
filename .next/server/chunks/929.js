"use strict";
exports.id = 929;
exports.ids = [929];
exports.modules = {

/***/ 4929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabLayout_Frame)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/TabLayout/TabsRow.tsx



const TabsRow = ()=>{
    const router = (0,router_.useRouter)();
    const pathname = router.pathname;
    const tabs = {
        convert: pathname === "/currency/convert",
        send: pathname === "/currency/send",
        charts: pathname === "/currency/charts",
        alerts: pathname === "/currency/alerts"
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "flex flex-row justify-between align-middle rounded-lg bg-gray-100 h-16 w-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    style: {
                        background: tabs.convert ? "white" : "#ECEFF4"
                    },
                    className: "flex flex-row justify-center align-middle text-[#02208A] hover:bg-gray-300 rounded-t-lg hover:text-sky-500 cursor-pointer basis-1/4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: {
                            pathname: "/currency/convert"
                        },
                        className: "m-auto w-fit h-fit justify-center align-middle rounded-t-lg",
                        children: "Convert"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    style: {
                        background: tabs.send ? "white" : "#ECEFF4"
                    },
                    className: "flex flex-row justify-center align-middle text-[#02208A] hover:bg-gray-300 hover:rounded-t-lg hover:text-sky-500 cursor-pointer basis-1/4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: {
                            pathname: "/currency/send"
                        },
                        className: "m-auto",
                        children: "Send"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    style: {
                        background: tabs.charts ? "white" : "#ECEFF4"
                    },
                    className: "flex flex-row justify-center align-middle text-[#02208A] hover:bg-gray-300 hover:rounded-t-lg hover:text-sky-500 cursor-pointer basis-1/4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: {
                            pathname: "/currency/charts"
                        },
                        className: "m-auto",
                        children: "Charts"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    style: {
                        background: tabs.alerts ? "white" : "#ECEFF4"
                    },
                    className: "flex flex-row justify-center align-middle text-[#02208A] hover:bg-gray-300 rounded-t-lg hover:text-sky-500 cursor-pointer basis-1/4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: {
                            pathname: "/currency/alerts"
                        },
                        className: "m-auto",
                        children: "Alerts"
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/TabLayout/Frame.tsx



const Frame = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const path = router.pathname;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-4/5 w-9/12 min-w-1/4 bg-white mx-auto rounded-lg flex flex-col  my-12",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(TabsRow, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const TabLayout_Frame = (Frame);


/***/ })

};
;
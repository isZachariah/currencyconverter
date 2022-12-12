exports.id = 166;
exports.ids = [166];
exports.modules = {

/***/ 2117:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "select_container__4myB1",
	"value": "select_value__huQOD",
	"clear-btn": "select_clear-btn__8Op0n",
	"divider": "select_divider__7tPzP",
	"caret": "select_caret__RQZiM",
	"options": "select_options__VsBrU",
	"show": "select_show__tzHEe",
	"option": "select_option__kEc9m",
	"selected": "select_selected__e_ugs",
	"highlighted": "select_highlighted__KLXH_"
};


/***/ }),

/***/ 3339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ NumberInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const NumberInput = ({ value , onChange , id , label  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col align-left justify-end",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "",
                htmlFor: id,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "number",
                id: id,
                name: id,
                required: true,
                className: "input[type=number] outline-none h-12 w-80 rounded border-gray-700 border shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-2",
                value: value,
                onChange: (e)=>{
                    onChange(e.target.value);
                }
            })
        ]
    });
};


/***/ }),

/***/ 3004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_select_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2117);
/* harmony import */ var _styles_select_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_select_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_currency_flags_dist_currency_flags_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var _node_modules_currency_flags_dist_currency_flags_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_currency_flags_dist_currency_flags_css__WEBPACK_IMPORTED_MODULE_2__);




function Select({ id , value , onChange , options  }) {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [highLightedIndex, setHighlightedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    function clearOptions() {
        onChange(undefined);
    }
    function selectOption(option) {
        onChange(option);
    }
    function isOptionSelected(option) {
        return option === value;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onBlur: ()=>setIsOpen(false),
        onClick: ()=>setIsOpen((prev)=>!prev),
        tabIndex: 0,
        className: `${(_styles_select_module_css__WEBPACK_IMPORTED_MODULE_3___default().container)} rounded border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row gap-1 w-full gap-1 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `currency-flag currency-flag-${value?.value.toLowerCase()} text-center m-auto`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `${(_styles_select_module_css__WEBPACK_IMPORTED_MODULE_3___default().value)} `,
                        children: `${value?.value} - ${value?.label}`
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    clearOptions();
                },
                className: (_styles_select_module_css__WEBPACK_IMPORTED_MODULE_3___default()["clear-btn"]),
                children: "\xd7"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_select_module_css__WEBPACK_IMPORTED_MODULE_3___default().divider)}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_select_module_css__WEBPACK_IMPORTED_MODULE_3___default().caret)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: `${(_styles_select_module_css__WEBPACK_IMPORTED_MODULE_3___default().options)} ${isOpen ? (_styles_select_module_css__WEBPACK_IMPORTED_MODULE_3___default().show) : ""}`,
                children: options?.map((option, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            selectOption(option);
                            setIsOpen(false);
                        },
                        id: id,
                        value: option.value,
                        onMouseEnter: ()=>setHighlightedIndex(index),
                        className: `${(_styles_select_module_css__WEBPACK_IMPORTED_MODULE_3___default().option)} ${isOptionSelected(option) ? (_styles_select_module_css__WEBPACK_IMPORTED_MODULE_3___default().selected) : ""}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row gap-1 w-full gap-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `currency-flag currency-flag-${option.value.toLowerCase()} my-auto`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: option.label
                                })
                            ]
                        })
                    }, option.value))
            })
        ]
    });
}


/***/ }),

/***/ 6021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Table = ({ base , target , conversionRate , direction  })=>{
    const values = [
        1,
        5,
        10,
        20,
        50,
        100,
        250,
        500,
        1000
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "basis-1/2 w-4/5 bg-white mx-auto rounded-lg flex flex-col shadow-lg my-12 bg-slate-200 border border-gray-300 justify-center align-middle",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-auto py-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-xl text-[#0220ba] text-center mx-2",
                        children: `Convert ${base.label} to ${target.label}`
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: "table-fixed",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `currency-flag currency-flag-${base.value.toLowerCase()} text-center m-auto`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: base.value
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `currency-flag currency-flag-${target.value.toLowerCase()} text-center m-auto `
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "mr-20",
                                                    children: target.value
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            className: "bg-white text-center text-gray-600",
                            children: values.map((value, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "py-2 text-[#0220ba] hover:underline cursor-pointer",
                                            children: `${value} ${base.value}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "py-2 ",
                                            children: direction ? (value * conversionRate).toFixed(6) : (value / conversionRate).toFixed(6)
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 9315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ options),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Inputs_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3004);
/* harmony import */ var _pages_api_convert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8745);
/* harmony import */ var _Inputs_NumberInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3339);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9752);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Converter = ({ base , setBase , target , setTarget , conversionRate , setConversionRate , converting , setConverting  })=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQueryClient)();
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("1");
    const [conversionResult, setConversionResult] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const symbolsQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)([
        "symbols"
    ], ()=>fetch("/api/symbols").then((response)=>response.json()));
    const handleSubmit = (e)=>{
        e.preventDefault();
        async function fetchConversion() {
            const data = await fetch((0,_pages_api_convert__WEBPACK_IMPORTED_MODULE_8__/* .APIRequest */ .X)(base?.value, target?.value, amount));
            return await data.json();
        }
        const data = queryClient.getQueryData([
            `conversion`,
            base?.value,
            target?.value,
            amount
        ]);
        if (data === undefined) {
            fetchConversion().then((data)=>{
                const { base_code , target_code , conversion_rate , conversion_result  } = data;
                setRoute(base_code, target_code, conversion_rate, router);
                queryClient.setQueryData([
                    `conversion`,
                    base?.value,
                    target?.value,
                    amount
                ], data);
                setConversionRate(conversion_rate);
                setConversionResult(conversion_result);
                setConverting(true);
            }).catch((err)=>{
                console.log(err);
            });
        } else {
            const { base_code , target_code , conversion_rate , conversion_result  } = data;
            setRoute(base_code, target_code, conversion_rate, router);
            setConversionRate(conversion_rate);
            setConversionResult(conversion_result);
            setConverting(true);
        }
    };
    function amountOnChange(amount) {
        setConverting(false);
        setAmount(amount);
    }
    function swap(e) {
        e.preventDefault();
        setBase(target);
        setTarget(base);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-center align-middle p-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "flex flex-col justify-center align-middle",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row justify-between align-middle flex-wrap gap-2 my-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_NumberInput__WEBPACK_IMPORTED_MODULE_5__/* .NumberInput */ .Y, {
                                value: amount,
                                onChange: amountOnChange,
                                id: "amount",
                                label: "Amount"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col align-left justify-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "",
                                        htmlFor: "from",
                                        children: "From"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Select__WEBPACK_IMPORTED_MODULE_4__/* .Select */ .P, {
                                        id: "from",
                                        options: symbolsQuery.data,
                                        value: base,
                                        onChange: (e)=>{
                                            setConverting(false);
                                            setBase(e);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col align-left justify-end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "shadow-sm rounded-full border border-gray-300 h-12 w-12 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
                                    onClick: (e)=>swap(e),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                        className: "text-[#00a2e0] h-4 w-4 justify-center text-center align-middle m-auto",
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faRightLeft
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col align-left justify-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "",
                                        htmlFor: "to",
                                        children: "To"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Select__WEBPACK_IMPORTED_MODULE_4__/* .Select */ .P, {
                                        id: "to",
                                        options: symbolsQuery.data,
                                        value: target,
                                        onChange: (e)=>{
                                            setConverting(false);
                                            setTarget(e);
                                        }
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-row justify-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "bg-sky-500 rounded-md px-4 py-2 hover:bg-gray-300 hover:text-blue-900 text-white",
                            type: "submit",
                            disabled: amount === undefined || base === undefined || target === undefined,
                            onClick: (e)=>handleSubmit(e),
                            children: "Convert"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: converting && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-md",
                            children: `${amount} ${base?.label}=`
                        }),
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-3xl my-1",
                            children: [
                                `${conversionResult.toString().slice(0, 3)}`,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-gray-300",
                                    children: conversionResult.toString().slice(4)
                                }),
                                `${target?.label}`
                            ]
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "my-6 text-gray-400",
                            children: `1 ${target?.value} = ${conversionRate.toString()}`
                        }),
                        " "
                    ]
                })
            })
        ]
    });
};
const setRoute = (base_code, target_code, amount, router)=>{
    const url = {
        pathname: router.pathname,
        query: {
            ...router.query,
            from: base_code,
            to: target_code,
            amount: amount
        }
    };
    router.push(url, undefined, {
        shallow: true
    });
};
const options = [
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
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Converter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ APIRequest)
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



/***/ }),

/***/ 8038:
/***/ (() => {



/***/ })

};
;
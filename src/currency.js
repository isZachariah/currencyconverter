
/** Constants and Currencies **/
const exchange =
    {
        "base": "USD",
        "date": "2022-09-24",
        "rates": {
            "AUD": 1.531863,
            "CAD": 1.36029,
            "CLP": 950.662057,
            "CNY": 7.128404,
            "EUR": 1.03203,
            "GBP": 0.920938,
            "INR": 81.255504,
            "JPY": 143.376504,
            "RUB": 57.875038,
            "ZAR": 17.92624
        }
    }

const symbols = {
    "AUD": "Australian Dollar",
    "CAD": "Canadian Dollar",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "EUR": "Euro",
    "GBP": "British Pound Sterling",
    "INR": "Indian Rupee",
    "JPY": "Japanese Yen",
    "RUB": "Russian Ruble",
    "USD": "United States Dollar",
    "ZAR": "South African Rand"
}


const currency_codes = Object.keys(symbols);

const currency_code_values = Object.values(symbols);

/** Helper Functions **/

/** is_currency
 * @param {string} str the term to search for
 * @return {boolean} true if the search is a currency false if not
 **/
const is_currency = (str) => {
    return Object.values(symbols).includes(str) || str in symbols;
}

const is_currency_code = (str) => str in symbols;


/** Function: conversions
 * Write a program that converts between currencies and returns the value and the long form of each currency.
 * The program should have a set of exchange rates, the base of those conversions will be USD.
 * That may not be the base input of the user.
 * The user provides the amount to convert, three digit currency codes of the base currency and the converted currency.
 * Handle situations with invalid inputs.
 *
 * @param {number} amount
 * @param {string} base_currency
 * @param {string} converted_currency
 *
 * @returns {number} value {string} currency_long_form
 **/

const conversions = (amount, base_currency, converted_currency) => {
    const from = exchange.rates[base_currency];
    const to = exchange.rates[converted_currency];
    const rate = to / from;

    return rate * amount;
}



/** Function currency_lookup()
 * Write a second program that helps a user lookup the currency code for currency and visa-versa.
 * Given a user input partial string, return a suggested list of currency codes.
 * Handle situations with invalid inputs.
 *
 * Examples:
 * program("Dollar") -> {"AUD": "Australian Dollar", "CAD": "Canadian Dollar", "USD": "United States Dollar"}
 * program("British") -> {"GBP": "British Pound Sterling"}
 * program("AUD") -> {"AUD": "Australian Dollar"}
 *
 * @param {string} search
 *
 * @returns {string[]} suggestions
 **/

const currency_lookup = (search) => {
    if (is_currency(search)) return [search];
    let suggestions = [];
    Object.entries(symbols).forEach(([key, value]) => {
        if ( key.toLowerCase().includes(search.toLowerCase()) ||
            value.toLowerCase().includes(search.toLowerCase()) ) {
            suggestions.push([key, value]);
        }
    });
    return suggestions;
}

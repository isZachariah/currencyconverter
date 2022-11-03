import React, {useReducer} from "react";
import './App.css';
import '@fontsource/montserrat'
import {CurrencyFlag} from "react-currency-flags/dist/components";

const APIKEY = '2029506bcdbfb303b4b31f63'
const symbols = {
  AUD: "AUD",
  CAD: "CAD",
  CLP: "CLP",
  CNY: "CNY",
  EUR: "EUR",
  GBP: "GBP",
  INR: "INR",
  JPY: "JPY",
  RUB: "RUB",
  USD: "USD",
  ZAR: "ZAR"
}
const APIRequest = (from, to, amount) => `https://v6.exchangerate-api.com/v6/${APIKEY}/pair/${from}/${to}/${amount}`

const currencies = {
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

const Action = {
  inputAmount:         'input-amount',
  selectCurrencyFrom:  'select-currency-from',
  selectCurrencyTo:    'select-currency-to',
  convert:             'convert',
  reset:               'reset',
  swapCurrencies:      'swapCurrencies',
  API_Request:         'API-Request',
}

function reducer(state, {type, payload}) {
  switch (type) {
    case Action.inputAmount:
      return {
        ...state,
        amount: payload.amount,
      }
    case Action.selectCurrencyFrom:
      return {
        ...state,
        currencyFrom: payload.from,
      }
    case Action.selectCurrencyTo:
      return {
        ...state,
        currencyTo: payload.to,
      }
    case Action.convert:
      sendRequest(APIRequest(payload.from, payload.to, payload.amount))
          .then((data) => {
            const {base_code, target_code, conversion_rate, conversion_result} = data;
            console.log(base_code, target_code, conversion_rate, conversion_result)
            return {
              ...state,
              amount: payload.amount,
              currencyFrom: base_code,
              currencyTo: target_code,
              conversion_rate: conversion_rate,
              conversion_result: conversion_result,
              converting: true,
            }
          }).catch((err) => {
            console.log(err)
      })
      return {
        ...state,
        error: `Error: Conversion failed`,
      }
    case Action.reset:
      return {
        ...initialState
      }
    case Action.swapCurrencies:
      return {
        ...state,
        amount: payload.amount,
        currencyFrom: payload.to,
        currencyTo: payload.from,
      }
    default: return state;
  }
}

const sendRequest = async (request) => {
  const response = await fetch(request);
  return await response.json()

}

/**
 * {
 * 	"result": "success",
 * 	"documentation": "https://www.exchangerate-api.com/docs",
 * 	"terms_of_use": "https://www.exchangerate-api.com/terms",
 * 	"time_last_update_unix": 1585267200,
 * 	"time_last_update_utc": "Fri, 27 Mar 2020 00:00:00 +0000",
 * 	"time_next_update_unix": 1585270800,
 * 	"time_next_update_utc": "Sat, 28 Mar 2020 01:00:00 +0000",
 * 	"base_code": "EUR",
 * 	"target_code": "GBP",
 * 	"conversion_rate": 0.8412,
 * 	"conversion_result": 5.8884
 * }
 * **/
const CurrencyFlagComponent = key => <CurrencyFlag key={key} size='sm'/>

const initialState = {
  amount: '1.00',
  currencyFrom: 'USD',
  currencyTo: 'EUR',
  conversion_rate: null,
  conversion_result: null,
  converting: false,
}

function App() {
  const [{ amount, currencyFrom, currencyTo, conversion_rate, conversion_result, converting }, dispatch] = useReducer(reducer, initialState)

  function submit(e) {
    e.preventDefault()
    dispatch({
      type: Action.convert,
      payload: {
        amount: e.target[0].value,
        from: e.target[1].value,
        to: e.target[2].value,
      }
    })
  }

  function swap() {
    dispatch({
      type: Action.swapCurrencies,
      payload: {
        amount: amount,
        from: currencyFrom,
        to: currencyTo,
      }
    })
  }

  return (
    <div className="App">
      <section className="header">
        <nav>
          <ul>
            <li className="brand">Xe Clone</li>
            <li className="send">Send Money</li>
            <li className="convert">Converter</li>
            <li className="api">Currency API</li>
            <li className="tools">Tools</li>
            <li className="signIn">Sign In</li>
            <li className="register">Register</li>
          </ul>
          <div className="registerButton"></div>
        </nav>
        <h1 className="title">Currency Converter</h1>
      </section>
      <div className="frame">
        <nav>
          <ul className='frame-tabs'>
            <li className='convert-tab'>Convert</li>
            <li className='send-tab'>Send</li>
            <li className='charts'>Charts</li>
            <li className='alerts'>Alerts</li>
          </ul>
        </nav>
        <div className='convert-bg'></div>
        <form className="converter" onSubmit={e => submit(e)}>
          <label className='amount'>Amount</label>
          <input className='value'
                 name='amount'
                 value={amount}
                 type='number'
                 placeholder="$1.00" required
                 onChange={e => dispatch({
                   type: Action.inputAmount,
                   payload: {
                     amount: e.target.value,
                   }
                 })
          }/>
          <label className='from'>From</label>
          <select id="currency-from"
                  name='from'
                  value={currencyFrom}
                  onChange={e => dispatch({
                    type: Action.selectCurrencyFrom,
                    payload: {
                      from: e.target.value
                    }
                  })
          }>
            {
              Object.entries(currencies).map(
                  ([key, value], index) =>
                      <option  key={index}
                               value={key}
                      >{key} - {value}
                      </option>
              )
            }
          </select>
          <button className='swap-bg' onClick={() => swap()}></button>
          <img className='swap' src='/images/swap.png' alt='swap currencies'

          ></img>
          <label className='to'>To</label>
          <select id="currency-to"
                  name='to'
                  value={currencyTo}
                  onChange={e => dispatch({
                        type: Action.selectCurrencyTo,
                        payload: {
                          to: e.target.value
                        }
                  })
          }>
            {
              Object.entries(currencies).map(
                  ([key, value], index) =>
                      <option  key={index}
                               value={key}
                               className={`currency-flag currency-flag-${key}`}>
                        {`${key}-${value}`}
                      </option>
              )
            }
          </select>
          <button className='convert-btn'
            type='submit'
          >Convert</button>
        </form>
        <p className='conversion'>{
            converting &&
            `${amount} ${symbols[currencyFrom]} =
             ${conversion_result} ${symbols[currencyTo]}`
        }</p>
      </div>
      <section className='conversion-frame'>

      </section>
    </div>
  );
}

export default App;

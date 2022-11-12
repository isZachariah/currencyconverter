import '/node_modules/currency-flags/dist/currency-flags.css';
import {FC} from "react";

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

interface FlagProps {
    currency: string
}

export const CurrencyList = () => {
    return (
        <select className='rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>
            {
                Object.entries(currencies).map(
                    ([key, value], index) => {
                        return (
                            <option
                                className={'bg-white'}
                                key={index}
                                     value={key}
                            >
                                {
                                <div className={'flex flex-row align-middle justify-center'}>
                                    <div className={`currency-flag currency-flag-${key.toLowerCase()}`}></div>
                                    <div>
                                        <span >{`${key}-${value}`}</span>
                                    </div>
                                </div>
                                }
                            </option>
                        )
                    }
                )
            }
        </select>
    )
}
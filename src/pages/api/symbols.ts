import type { NextApiRequest, NextApiResponse } from "next";

export type CurrencySymbol = {
    label: string,
    value: string,
    currencySymbol: string,
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<CurrencySymbol[]>
) {
    res.status(200).json([
        { value: 'AUD', label: 'Australian Dollar',      currencySymbol: '$'},
        { value: 'CAD', label: 'Canadian Dollar',        currencySymbol: '$'},
        { value: 'CLP', label: 'Chilean Peso',           currencySymbol: '$'},
        { value: 'CNY', label: 'Chinese Yuan',           currencySymbol: '¥'},
        { value: 'EUR', label: 'Euro',                   currencySymbol: '€'},
        { value: 'GBP', label: 'British Pound Sterling', currencySymbol: '£'},
        { value: 'INR', label: 'Indian Rupee',           currencySymbol: '₹'},
        { value: 'JPY', label: 'Japanese Yen',           currencySymbol: '¥'},
        { value: 'RUB', label: 'Russian Ruble',          currencySymbol: '₽'},
        { value: 'USD', label: 'United States Dollar',   currencySymbol: '$'},
        { value: 'ZAR', label: 'South African Rand',     currencySymbol: 'R'},
    ])
}


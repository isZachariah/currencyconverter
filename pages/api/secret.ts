import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    from: string,
    to: string,
    amount: number
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    // res.status(200).json({ name: 'John Doe' })
}

const APIKEY = '2029506bcdbfb303b4b31f63'
const APIRequest = (from: string | undefined, to: string | undefined, amount: string | undefined) => ((
    typeof from === 'string' && typeof to === 'string' && typeof amount === 'string'
        ? `https://v6.exchangerate-api.com/v6/${APIKEY}/pair/${from}/${to}/${amount}`
        : `https://v6.exchangerate-api.com/v6/${APIKEY}/pair/usd/cpp/5`
))

export { APIRequest }
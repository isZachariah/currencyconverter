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
const APIRequest = (from: string, to: string, amount: number) => `https://v6.exchangerate-api.com/v6/${APIKEY}/pair/${from}/${to}/${amount}`

export { APIRequest }
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    from: string,
    to: string,
    amount: string
}



// const APIKEY = process.env.API_KEY
const APIKEY = '2029506bcdbfb303b4b31f63'
const APIRequest = (from: string | undefined, to: string | undefined, amount?: string | undefined) => ((
    amount === undefined
        ? `https://v6.exchangerate-api.com/v6/${APIKEY}/pair/${from}/${to}`
        : `https://v6.exchangerate-api.com/v6/${APIKEY}/pair/${from}/${to}/${amount}`
))

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



export { APIRequest }
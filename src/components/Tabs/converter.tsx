import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightLeft} from "@fortawesome/free-solid-svg-icons";
import type {FC} from "react";
import React, {useState} from "react";
import {Select} from "../Inputs/Select";
import {APIRequest} from "../../pages/api/convert";
import {NumberInput} from "../Inputs/NumberInput";
import type {CurrencySymbol} from "../../pages/api/symbols";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {router} from "next/client";
import {useRouter} from "next/router";


type ConvertProps = {
    base: CurrencySymbol
    setBase: (value: CurrencySymbol) => void
    target: CurrencySymbol
    setTarget: (value: CurrencySymbol) => void
    conversionRate: number
    setConversionRate: (value: number) => void
    converting: boolean
    setConverting: (value: boolean) => void
}

type ConversionData = { base_code: string, target_code: string, conversion_rate: number, conversion_result: number }

const Converter: FC<ConvertProps> = ({
             base,
             setBase,
             target,
             setTarget,
             conversionRate,
             setConversionRate,
             converting,
             setConverting
}) => {
    const queryClient = useQueryClient();
    const [amount, setAmount] = useState<string>('1')
    const [conversionResult, setConversionResult] = useState(0)

    const router = useRouter()

    const symbolsQuery = useQuery<CurrencySymbol[]>(
        ['symbols'],
        () => fetch('/api/symbols').then((response) => response.json())
    )

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        async function fetchConversion() {
            const data = await fetch(APIRequest(base?.value, target?.value, amount))
            return await data.json()
        }

        const data = queryClient.getQueryData<ConversionData>([`conversion`, base?.value, target?.value, amount])

        if (data === undefined) {
            fetchConversion()
                .then((data) => {
                    const {base_code, target_code, conversion_rate, conversion_result} = data;
                    setRoute(base_code, target_code, conversion_rate, router)
                    queryClient.setQueryData([`conversion`, base?.value, target?.value, amount], data)
                    setConversionRate(conversion_rate)
                    setConversionResult(conversion_result)
                    setConverting(true)
                }).catch((err) => {
                console.log(err)
            })
        } else {
            const {base_code, target_code, conversion_rate, conversion_result} = data;
            setRoute(base_code, target_code, conversion_rate, router)
            setConversionRate(conversion_rate)
            setConversionResult(conversion_result)
            setConverting(true)
        }
    }

    function amountOnChange(amount: string) {
        setConverting(false)
        setAmount(amount)
    }

    function swap(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setBase(target)
        setTarget(base)
    }

    return (
        <div className='flex flex-col justify-center align-middle p-4'>
            <form className='flex flex-col justify-center align-middle'>
                <div className='flex flex-row justify-between align-middle flex-wrap gap-2 my-12'>
                    <NumberInput value={amount} onChange={amountOnChange} id={'amount'} label={'Amount'}/>
                    <div className='flex flex-col align-left justify-end'>
                        <label className='' htmlFor={'from'}>From</label>
                        <Select
                            id={'from'}
                            options={symbolsQuery.data}
                            value={base}
                            onChange={e => {
                                setConverting(false)
                                setBase(e)
                            }}
                        />
                    </div>
                    <div className='flex flex-col align-left justify-end'>
                        <button
                            className='shadow-sm rounded-full border border-gray-300 h-12 w-12 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                            onClick={(e) => swap(e)}
                        >
                            <FontAwesomeIcon
                                className='text-[#00a2e0] h-4 w-4 justify-center text-center align-middle m-auto'
                                icon={faRightLeft}/>
                        </button>

                    </div>
                    <div className='flex flex-col align-left justify-end'>
                        <label className='' htmlFor={'to'}>To</label>
                        <Select
                            id={'to'}
                            options={symbolsQuery.data}
                            value={target}
                            onChange={e => {
                                setConverting(false)
                                setTarget(e)
                            }}
                        />
                    </div>
                </div>
                <div className='flex flex-row justify-end'>
                    <button className='bg-sky-500 rounded-md px-4 py-2 hover:bg-gray-300 hover:text-blue-900 text-white'
                            type={"submit"}
                            disabled={amount === undefined || base === undefined || target === undefined}
                            onClick={(e) => handleSubmit(e)}

                    >Convert
                    </button>
                </div>
            </form>
            <div>{converting &&
                <div>
                    <p className='text-md'>{`${amount} ${base?.label}=`}</p> {/*1.00 US DOLLAR=*/}
                    <p className='text-3xl my-1'>{`${conversionResult.toString().slice(0, 3)}`}<span
                        className='text-gray-300'>{conversionResult.toString().slice(4)}</span>{`${target?.label}`}
                    </p> {/* 1.02 <span>55728</span> Euros*/}
                    <p className='my-6 text-gray-400'>{`1 ${target?.value} = ${conversionRate.toString()}`}</p> {/*1 Eur = 0.974020 USD*/}
                </div>
            }</div>
        </div>

    )
}

const setRoute = (base_code, target_code, amount, router) => {
    const url = {
        pathname: router.pathname,
        query: {
            ...router.query,
            from: base_code as string,
            to: target_code as string,
            amount: amount as string,
        }
    }
    router.push(url, undefined, {shallow: true})
}

export const options = [
    {value: 'AUD', label: 'Australian Dollar', currencySymbol: '$'},
    {value: 'CAD', label: 'Canadian Dollar', currencySymbol: '$'},
    {value: 'CLP', label: 'Chilean Peso', currencySymbol: '$'},
    {value: 'CNY', label: 'Chinese Yuan', currencySymbol: '¥'},
    {value: 'EUR', label: 'Euro', currencySymbol: '€'},
    {value: 'GBP', label: 'British Pound Sterling', currencySymbol: '£'},
    {value: 'INR', label: 'Indian Rupee', currencySymbol: '₹'},
    {value: 'JPY', label: 'Japanese Yen', currencySymbol: '¥'},
    {value: 'RUB', label: 'Russian Ruble', currencySymbol: '₽'},
    {value: 'USD', label: 'United States Dollar', currencySymbol: '$'},
    {value: 'ZAR', label: 'South African Rand', currencySymbol: 'R'},
]

export default Converter
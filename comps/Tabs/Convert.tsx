import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightLeft} from "@fortawesome/free-solid-svg-icons";
import {FC, useState} from "react";
import {Select, SelectOption} from "./Select";
import {APIRequest} from "../../pages/api/secret";



type ConvertProps = {
    base: SelectOption
    setBase: (value: SelectOption) => void
    target: SelectOption
    setTarget: (value: SelectOption) => void
    conversionRate: number
    setConversionRate: (value: number) => void
    converting: boolean
    setConverting: (value: boolean) => void
}



export const Convert: FC<ConvertProps> = ({base, setBase, target, setTarget, conversionRate, setConversionRate, converting, setConverting}) => {
    const [amount, setAmount] = useState<string>('1')
    const [conversionResult, setConversionResult] = useState(0)

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // e.stopPropagation()
        async function fetchConversion() {
            const data = await fetch(APIRequest(base?.value, target?.value, amount))
            // console.log(data)
            // console.log(data.json())
            return await data.json()
        }
        fetchConversion()
            .then((data) => {
                const {base_code, target_code, conversion_rate, conversion_result} = data;
                console.log(conversion_result, conversion_rate)
                setConversionRate(conversion_rate)
                setConversionResult(conversion_result)
                setConverting(true)
            }).catch((err) => {
                console.log(err)

        })
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
                    <div className='flex flex-col align-left justify-end'>
                        <label className=''>Amount</label>
                        <input
                            type={"number"}
                            className='input[type=number] h-12 rounded border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                            placeholder={'$1.00'}
                            value={amount}
                            onChange={(e) => {
                                setConverting(false)
                                setAmount(e.target.value)
                            }}

                        />
                    </div>
                    <div className='flex flex-col align-left justify-end'>
                        <label className=''>From</label>
                        <Select
                            options={options}
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
                            <FontAwesomeIcon className='text-[#00a2e0]' icon={faRightLeft} />
                        </button>

                    </div>
                    <div className='flex flex-col align-left justify-end'>
                        <label className=''>To</label>
                        <Select
                            options={options}
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

                    >Convert</button>
                </div>
            </form>
            <div>{converting &&
                <div>
                    <p className='text-md'>{`${amount} ${base?.label}=`}</p> {/*1.00 US DOLLAR=*/}
                    <p className='text-3xl my-1'>{`${conversionResult.toString().slice(0, 3)}`}<span className='text-gray-300'>{conversionResult.toString().slice(4)}</span>{`${target?.label}`}</p> {/* 1.02 <span>55728</span> Euros*/}
                    <p className='my-6 text-gray-400'>{`1 ${target?.value} = ${conversionRate.toString()}`}</p> {/*1 Eur = 0.974020 USD*/}
                </div>
            }</div>
        </div>

    )
}

export const options = [
    { value: 'AUD', label: 'Australian Dollar', symbol: '$'},
    { value: 'CAD', label: 'Canadian Dollar', symbol: '$'},
    { value: 'CLP', label: 'Chilean Peso', symbol: '$'},
    { value: 'CNY', label: 'Chinese Yuan', symbol: '¥'},
    { value: 'EUR', label: 'Euro', symbol: '€'},
    { value: 'GBP', label: 'British Pound Sterling', symbol: '£'},
    { value: 'INR', label: 'Indian Rupee', symbol: '₹'},
    { value: 'JPY', label: 'Japanese Yen', symbol: '¥'},
    { value: 'RUB', label: 'Russian Ruble', symbol: '₽'},
    { value: 'USD', label: 'United States Dollar', symbol: '$'},
    { value: 'ZAR', label: 'South African Rand', symbol: 'R'},
]

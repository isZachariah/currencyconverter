import type {FC} from "react";
import type {CurrencySymbol} from '../../pages/api/symbols'

type TableProps = {
    base: CurrencySymbol
    target: CurrencySymbol
    conversionRate: number
    direction: boolean
}

export const Table: FC<TableProps> = ({base, target, conversionRate, direction}) => {
    const values = [1, 5, 10, 20, 50, 100, 250, 500, 1000]

    return (
        <>
            <div
                className='basis-1/2 w-4/5 bg-white mx-auto rounded-lg flex flex-col shadow-lg my-12 bg-slate-200 border border-gray-300 justify-center align-middle'>
                <div className='mx-auto py-4'>
                    <h3 className='text-xl text-[#0220ba] text-center mx-2'>{`Convert ${base.label} to ${target.label}`}</h3>
                </div>
                <table className='table-fixed'>
                    <thead>
                    <tr>
                        <th>
                            {<div className={'flex flex-row'}>
                                <div
                                    className={`currency-flag currency-flag-${base.value.toLowerCase()} text-center m-auto`}/>
                                <span>{base.value}</span>
                            </div>

                            }
                        </th>
                        <th>
                            {<div className={'flex flex-row'}>
                                <div
                                    className={`currency-flag currency-flag-${target.value.toLowerCase()} text-center m-auto `}/>
                                <span className={'mr-20'}>{target.value}</span>
                            </div>}
                        </th>
                    </tr>
                    </thead>
                    <tbody
                        className='bg-white text-center text-gray-600'>
                    {values.map((value, index) => (<tr key={index}>
                            <td className='py-2 text-[#0220ba] hover:underline cursor-pointer'>
                                {`${value} ${base.value}`}
                            </td>
                            <td className='py-2 '>
                                {direction ? (value * conversionRate).toFixed(6) : (value / conversionRate).toFixed(6)}
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
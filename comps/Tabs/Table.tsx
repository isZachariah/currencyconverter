import {FC} from "react";
import {SelectOption} from "./Select";

type TableProps = {
    base: SelectOption
    target: SelectOption
    conversionRate: number
    direction: boolean
}

export const Table: FC<TableProps> = ({base, target, conversionRate, direction}) => {

    return (
        <>
            <div className='basis-1/2 w-4/5 bg-white mx-auto rounded-lg flex flex-col shadow-lg my-12 bg-slate-200 border border-gray-300 justify-center align-middle'>
                <div className='mx-auto py-4'>
                    <h3 className='text-xl text-[#0220ba] text-center mx-2'>{`Convert ${base.label} to ${target.label}`}</h3>
                </div>
                <table className='table-fixed'>
                    <thead>
                    <tr>
                        <th>
                            {
                                <div className={'flex flex-row'}>
                                    <div className={`currency-flag currency-flag-${base.value.toLowerCase()} text-center m-auto`}/>
                                    <span>{base.value}</span>
                                </div>

                            }
                        </th>
                        <th>
                            {
                                <div className={'flex flex-row'}>
                                    <div className={`currency-flag currency-flag-${target.value.toLowerCase()} text-center m-auto `}/>
                                    <span className={'mr-20'}>{target.value}</span>
                                </div>
                            }
                        </th>
                    </tr>
                    </thead>
                    <tbody className='bg-white text-center text-gray-600'>
                    <tr>
                        <td className='py-2 text-[#0220ba] hover:underline cursor-pointer'>{`1 ${base.value}`}</td>
                        <td className='py-2 '>{ direction ? conversionRate : 1 / conversionRate}</td>
                    </tr>
                    <tr>
                        <td className='py-2 text-[#0220ba] hover:underline cursor-pointer'>{`5 ${base.value}`}</td>
                        <td className='py-2 '>{ direction ? 5 * conversionRate : 5 / conversionRate}</td>
                    </tr>
                    <tr>
                        <td className='py-2 text-[#0220ba] hover:underline cursor-pointer'>{`10 ${base.value}`}</td>
                        <td className='py-2 '>{ direction ? 10 * conversionRate : 10 / conversionRate}</td>
                    </tr>
                    <tr>
                        <td className='py-2 text-[#0220ba] hover:underline cursor-pointer'>{`20 ${base.value}`}</td>
                        <td className='py-2 '>{ direction ? 20 * conversionRate : 20 / conversionRate}</td>
                    </tr>
                    <tr>
                        <td className='py-2 text-[#0220ba] hover:underline cursor-pointer'>{`50 ${base.value}`}</td>
                        <td className='py-2 '>{ direction ? 50 * conversionRate : 50 / conversionRate}</td>
                    </tr>
                    <tr>
                        <td className='py-2 text-[#0220ba] hover:underline cursor-pointer'>{`100 ${base.value}`}</td>
                        <td className='py-2 '>{ direction ? 100 * conversionRate : 100 / conversionRate}</td>
                    </tr>
                    <tr>
                        <td className='py-2 text-[#0220ba] hover:underline cursor-pointer'>{`250 ${base.value}`}</td>
                        <td className='py-2 '>{ direction ? 250 * conversionRate : 250 / conversionRate}</td>
                    </tr>
                    <tr>
                        <td className='py-2 text-[#0220ba] hover:underline cursor-pointer'>{`500 ${base.value}`}</td>
                        <td className='py-2 '>{ direction ? 500 * conversionRate : 500 / conversionRate}</td>
                    </tr>
                    <tr>
                        <td className='py-2 text-[#0220ba] hover:underline cursor-pointer'>{`1000 ${base.value}`}</td>
                        <td className='py-2 '>{ direction ? 1000 * conversionRate : 1000 / conversionRate}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
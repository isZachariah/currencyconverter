import {Select} from "./Select";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightLeft} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {CurrencySymbol} from "../../pages/api/symbols";


interface SASProps {
    symbols: CurrencySymbol[]
    base: CurrencySymbol
    setBase: (value: CurrencySymbol) => void
    target: CurrencySymbol
    setTarget: (value: CurrencySymbol) => void
    setConverting: (value: boolean) => void
}

const SelectsAndSwap = ({symbols, base, setBase, target, setTarget, setConverting}) => {
    function swap(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setBase(target)
        setTarget(base)
    }
    return (
        <div>
            <div className='flex flex-col align-left justify-end'>
                <label className='' htmlFor={'from'}>From</label>
                <Select
                    id={'from'}
                    options={symbols}
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
                    <FontAwesomeIcon className='text-[#00a2e0] h-4 w-4 justify-center text-center align-middle m-auto' icon={faRightLeft} />
                </button>

            </div>
            <div className='flex flex-col align-left justify-end'>
                <label className='' htmlFor={'to'}>To</label>
                <Select
                    id={'to'}
                    options={symbols}
                    value={target}
                    onChange={e => {
                        setConverting(false)
                        setTarget(e)
                    }}
                />
            </div>
        </div>

    )
}
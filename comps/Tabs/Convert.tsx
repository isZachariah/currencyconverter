
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightLeft} from "@fortawesome/free-solid-svg-icons";
import {CurrencyList} from "./CurrencyList";





export const Convert = () => {

    const converted = true

    return (

        <div className='flex flex-col justify-center align-middle p-4'>
            <form className='flex flex-col justify-center align-middle' onSubmit={e => (e)}>
                <div className='flex flex-row justify-between align-middle flex-wrap gap-2 my-12'>
                    <div className='flex flex-col align-left justify-end'>
                        <label className=''>Amount</label>
                        <input
                            type={"number"}
                            className='input[type=number] rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
                    </div>
                    <div className='flex flex-col align-left justify-end'>
                        <label className=''>From</label>
                        <CurrencyList />
                    </div>
                    <div className='flex flex-col align-left justify-end'>
                        <button className='shadow-sm rounded-full border border-gray-300 h-12 w-12 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>
                            <FontAwesomeIcon className='text-[#00a2e0]' icon={faRightLeft} />
                        </button>

                    </div>
                    <div className='flex flex-col align-left justify-end'>
                        <label className=''>To</label>
                        <CurrencyList />
                    </div>
                </div>
                <div className='flex flex-row justify-end'>
                    <button className='bg-sky-500 rounded-md px-4 py-2 hover:bg-gray-300 hover:text-blue-900 text-white'>Convert</button>
                </div>
            </form>
            <div>{converted &&
                <div>
                    <p className='text-md'>1.00 US DOLLAR=</p>
                    <p className='text-3xl my-1'>1.02<span className='text-gray-300'>55728</span>Euros</p>
                    <p className='my-6 text-gray-400'>1 Eur = 0.974020 USD</p>
                </div>
            }</div>
        </div>

    )
}

{/*// <form className="converter" onSubmit={e => submit(e)}>*/}
{/*//     <label className='amount'>Amount</label>*/}
{/*//     <input className='value'/>*/}
{/*//     <label className='from'>From</label>*/}
{/*//     <select id="currency-from"</select>*/}
{/*// <button className='swap-bg' onClick={() => swap()}></button>*/}
{/*// <img className='swap' src='/images/swap.png' alt='swap currencies'></img>*/}
{/*// <label className='to'>To</label>*/}
{/*// <select id="currency-to"></select>*/}
{/*// <button className='convert-btn'>Convert</button>*/}
{/*// </form>*/}
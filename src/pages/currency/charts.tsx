import type {FC} from "react";
import React, {useState} from "react";
import Frame from "../../components/TabLayout/Frame";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import type {CurrencySymbol} from "../api/symbols";
import {Select} from "../../components/Inputs/Select";
import {options} from "../../components/Tabs/converter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightLeft} from "@fortawesome/free-solid-svg-icons";
import {Table} from "../../components/Tabs/Table";
import {APIRequest} from "../api/convert";
import Head from "next/head";
import {useRouter} from "next/router";

const Charts: FC = () => {
    const queryClient = useQueryClient();
    const [conversionRate, setConversionRate] = useState(0)
    const [charting, setCharting] = useState(false)
    const [base, setBase] = useState(options[0])
    const [target, setTarget] = useState(options[3])
    const router = useRouter()
    const symbolsQuery = useQuery<CurrencySymbol[]>(
        ['symbols'],
        () => fetch('/api/symbols').then((response) => response.json())
    )

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        async function fetchConversion() {

            const amount = undefined;
            const data = await fetch(APIRequest(base?.value, target?.value, amount))
            return await data.json()
        }

        const data = queryClient.getQueryData<{ base_code: string, conversion_rate: number, target_code: string }>([`conversion`, base?.value, target?.value])

        if (data === undefined) {
            fetchConversion()
                .then((data) => {
                    const {base_code, target_code, conversion_rate} = data;
                    setRoute(base_code, target_code, router)
                    setConversionRate(conversion_rate)
                    setCharting(true)
                    queryClient.setQueryData([`chart`, base?.value, target?.value], data)
                }).catch((err) => {
                console.log(err)
            })
        } else {
            const {base_code, target_code, conversion_rate} = data;
            setRoute(base_code, target_code, router)
            setConversionRate(conversion_rate)
            setCharting(true)
        }
    }

    function swap(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setBase(target)
        setTarget(base)
    }

    return (
        <>
            <Head>
                <title>XE Currency Converter</title>
                <meta name="description" content="Created by Zachariah Magee for SD230 Web Programming"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <main className={'flex flex-col justify-center align-middle -my-60'}>
                <h1 className={'text-white text-6xl mx-auto'}>Currency Charts</h1>
                <div className={''}>
                    <Frame>
                        <div className={'bg-white mx-auto rounded-lg flex flex-row shadow-lg w-fit h-fit gap-28'}>
                            <form className={'flex flex-col justify-center align-middle '}>
                                <div
                                    className={'flex flex-row justify-between align-middle flex-wrap my-12 gap-32 m-4'}>
                                    <div className={'flex flex-col align-left justify-end'}>
                                        <label className='' htmlFor={'from'}>From</label>
                                        <Select
                                            id={'from'}
                                            options={symbolsQuery.data}
                                            value={base}
                                            onChange={e => {
                                                setCharting(false)
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
                                                setCharting(false)
                                                setTarget(e)
                                            }}
                                        />
                                    </div>
                                    <div className='flex flex-row justify-end'>
                                        <button
                                            className={'h-12 mt-5 bg-sky-500 rounded-md px-4 py-2 hover:bg-gray-300 hover:text-blue-900 text-white'}
                                            type={"submit"}
                                            disabled={base === undefined || target === undefined}
                                            onClick={(e) => handleSubmit(e)}

                                        >Chart
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Frame>

                    <div>
                        <div className='w-4/5 mx-auto grid grid-cols-2 justify-center align-middle rounded-b-xl'>
                            <div>
                                {
                                    charting && <Table
                                        base={base}
                                        target={target}
                                        conversionRate={conversionRate}
                                        direction={true}
                                    />
                                }
                            </div>
                            <div>
                                {
                                    charting && <Table
                                        base={target}
                                        target={base}
                                        conversionRate={conversionRate}
                                        direction={false}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

const setRoute = (base_code, target_code, router) => {
    const url = {
        pathname: router.pathname,
        query: {
            ...router.query,
            from: base_code as string,
            to: target_code as string,
        }
    }
    router.push(url, undefined, {shallow: true})
}

export default Charts
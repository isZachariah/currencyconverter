import React, {FC, useState} from "react";
import Converter, {options} from "../../components/Tabs/converter";
import {Table} from "../../components/Tabs/Table";
import Frame from '../../components/TabLayout/Frame'
import Head from "next/head";

const Convert: FC = () => {
    const [base, setBase] = useState<typeof options[0]>(options[0])
    const [target, setTarget] = useState<typeof options[3]>(options[3])
    const [conversionRate, setConversionRate] = useState(0)
    const [converting, setConverting] = useState(false)

    return (
        <>
            <Head>
                <title>XE Convert Currency</title>
                <meta name="description" content="Created by Zachariah Magee for SD230 Web Programming"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <main className={'flex flex-col justify-center align-middle -my-60'}>
                <h1 className={'text-white text-6xl mx-auto'}>Currency Converter</h1>
                <div className={''}>
                    <Frame>
                        <div className={'bg-white mx-auto rounded-lg flex flex-col shadow-lg'}>
                            {
                                <Converter base={base} setBase={setBase}
                                           target={target} setTarget={setTarget}
                                           conversionRate={conversionRate} setConversionRate={setConversionRate}
                                           converting={converting} setConverting={setConverting}
                                />
                            }
                        </div>
                    </Frame>
                    <div>
                        <div className='w-4/5 mx-auto grid grid-cols-2 justify-center align-middle rounded-b-xl'>
                            <div>
                                {
                                    converting && <Table
                                        base={base}
                                        target={target}
                                        conversionRate={conversionRate}
                                        direction={true}
                                    />
                                }
                            </div>
                            <div>
                                {
                                    converting && <Table
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


export default Convert
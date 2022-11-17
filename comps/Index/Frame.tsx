import {useReducer, useState} from "react";
import { withRouter } from "next/router";
import Link from 'next/link';
import {Convert, options} from '../Tabs/Convert';
import styles from '/styles/Frame.module.css';
import type { WithRouterProps } from "next/dist/client/with-router";
import {TabsRow} from "./TabsRow";
import {Table} from "../Tabs/Table";
import {SendTab} from "../Tabs/SendTab";
import {ChartsTab} from "../Tabs/ChartsTab";
import {AlertsTab} from "../Tabs/AlertsTab";



const Frame = ({ router }: WithRouterProps ) => {
    const [toggleTab, setToggleTab] = useState(1);
    const [base, setBase] = useState<typeof options[0]>(options[0])
    const [target, setTarget] = useState<typeof options[0]>(options[0])
    const [conversionRate, setConversionRate] = useState(0)
    const [converting, setConverting] = useState(false)

    const {
        query: { tab }
    } = router

    const tabs = {
        convert: tab === '1' || tab === null,
        send:    tab === '2',
        charts:  tab === '3',
        alerts:  tab === '4'
    }

    return (
        <>
            <main className='flex flex-col justify-center align-middle -my-60'>
                <h1 className='text-white text-6xl mx-auto'>Currency Converter</h1>
                <div className='max-w-4/5 w-9/12 min-w-1/4 bg-white mx-auto rounded-lg flex flex-col shadow-lg my-12'>
                    <TabsRow tabs={tabs} />
                    <div>
                        {
                            tabs.convert && <Convert  base={base} setBase={setBase}
                                                   target={target} setTarget={setTarget}
                                                   conversionRate={conversionRate} setConversionRate={setConversionRate}
                                                   converting={converting} setConverting={setConverting}
                        />
                        }
                        {
                            tabs.send && <SendTab />
                        }
                        {
                            tabs.charts && <ChartsTab />
                        }
                        {
                            tabs.alerts && <AlertsTab />
                        }
                    </div>
                </div>
                {/*<div className='w-3/5 mx-auto grid grid-cols-2 justify-center align-middle'>*/}
                {/*    <div>*/}
                {/*        {tabs.convert && converting && <Table base={base}*/}
                {/*                                              target={target}*/}
                {/*                                              conversionRate={conversionRate}*/}
                {/*                                              direction={true}*/}
                {/*        />}*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        {tabs.convert && converting && <Table base={target}*/}
                {/*                                              target={base}*/}
                {/*                                              conversionRate={conversionRate}*/}
                {/*                                              direction={false}*/}
                {/*        />}*/}
                {/*    </div>*/}
                {/*</div>*/}


            </main>
        </>
    )
}

export default withRouter(Frame)

/** FRAME
 * <div className="frame">
 *         <nav>
 *           <ul className='frame-tabs'>
 *             <li className='convert-tab'>Convert</li>
 *             <li className='send-tab'>Send</li>
 *             <li className='charts'>Charts</li>
 *             <li className='alerts'>Alerts</li>
 *           </ul>
 *         </nav>
 *         <div className='convert-bg'></div>

 *         <p className='conversion'></p>
 *       </div>
 */
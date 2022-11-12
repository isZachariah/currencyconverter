import { useState } from "react";
import { withRouter } from "next/router";
import Link from 'next/link';
import { Convert } from '../Tabs/Convert';
import styles from '/styles/Frame.module.css';

import type { WithRouterProps } from "next/dist/client/with-router";
import {TabsRow} from "./TabsRow";
import {Table} from "../Tabs/Table";

const Frame = ({ router }: WithRouterProps ) => {
    const [toggleTab, setToggleTab] = useState(1);

    const {
        query: { tab }
    } = router

    const converting = true

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
                <div className='w-3/5 bg-white mx-auto rounded-lg flex flex-col shadow-lg my-12'>
                    <TabsRow tabs={tabs} />
                    <div>
                        {tabs.convert && <Convert />}
                    </div>
                </div>
                <div className='w-3/5 mx-auto grid grid-cols-2 justify-center align-middle'>
                    <div>
                        {tabs.convert && converting && <Table />}
                    </div>
                    <div>
                        {tabs.convert && converting && <Table />}
                    </div>
                </div>


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
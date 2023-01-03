import { withRouter } from "next/router";
import type { WithRouterProps } from "next/dist/client/with-router";
import {TabsRow} from "./TabsRow";
import {SendTab} from "../Tabs/SendTab";
import {ChartsTab} from "../Tabs/ChartsTab";
import {AlertsTab} from "../Tabs/AlertsTab";
import {ConvertTab} from "../Tabs/ConvertTab";



const Frame = ({ router }: WithRouterProps ) => {

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
                <div className='max-w-4/5 w-9/12 min-w-1/4 bg-white mx-auto rounded-lg flex flex-col  my-12'>
                    <TabsRow tabs={tabs} />
                    <div>
                        {
                            tabs.convert && <ConvertTab />
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
            </main>
        </>
    )
}

export default withRouter(Frame)

import {NextComponentType, type NextPage} from "next";
import Head from "next/head";
import Frame from "../components/TabLayout/Frame";
import '@fontsource/montserrat';
import {withRouter} from "next/router";
import {TabsRow} from "../components/TabLayout/TabsRow";
import {ConvertTab} from "../components/Tabs/ConvertTab";
import {SendTab} from "../components/Tabs/SendTab";
import {ChartsTab} from "../components/Tabs/ChartsTab";
import {AlertsTab} from "../components/Tabs/AlertsTab";
import type {FC} from "react";
import FourZeroFour from "./404";

function getTab(tab: string) {
    switch (tab) {
        case 'convert': return ConvertTab
        case 'send': return SendTab
        case 'charts': return ChartsTab
        case 'alerts': return AlertsTab
        default: return FourZeroFour
    }
}

const Currency: NextPage = ({router}) => {
    const {
        query: { tab }
    } = router

    const tabs = {
        convert: tab === 'convert',
        send:    tab === 'send',
        charts:  tab === 'charts',
        alerts:  tab === 'alerts'
    }

    const Tab = getTab(tab)

    return (
        <>
            <Head>
                <title>XE Currency Converter</title>
                <meta name="description" content="Created by Zachariah Magee for SD230 Web Programming" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={'flex flex-col justify-center align-middle -my-60'}>
                <h1 className={'text-white text-6xl mx-auto'}>Currency Converter</h1>
                <div className={'max-w-4/5 w-9/12 min-w-1/4 bg-white mx-auto rounded-lg flex flex-col  my-12'}>
                    <TabsRow tabs={tabs} />
                    <div>
                        <Frame Tab={Tab}/>
                    </div>
                </div>
            </main>
        </>

    )
}

// Currency.getInitialProps = async ({}) => {
//
// }
//
// export const getServerSideProps = async () => {
//     return {
//         props: {
//
//         }
//     }
// }

export default withRouter(Currency)
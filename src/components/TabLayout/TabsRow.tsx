import Link from "next/link";
import {FC} from "react";

interface TabsRowProps {
    tabs: Tabs,

}

type Tabs = {
    convert: boolean,
    send: boolean,
    charts: boolean,
    alerts: boolean
}

export const TabsRow: FC<TabsRowProps> = ({ tabs }) => {

    return (
        <>
            <ul className='flex flex-row justify-between align-middle rounded-lg bg-gray-100 h-16 w-full'>
                <li style={{ background: tabs.convert ? 'white' : '#ECEFF4' }}
                    className='flex flex-row justify-center align-middle text-[#02208A] hover:bg-gray-300 rounded-t-lg hover:text-sky-500 cursor-pointer basis-1/4'>
                    <Link href={{ pathname: '/currency', query: { tab: 'convert' }}} className='m-auto w-fit h-fit justify-center align-middle rounded-t-lg' >
                        Convert
                    </Link>
                </li>
                <li style={{ background: tabs.send    ? 'white' : '#ECEFF4' }}
                    className='flex flex-row justify-center align-middle text-[#02208A] hover:bg-gray-300 hover:rounded-t-lg hover:text-sky-500 cursor-pointer basis-1/4'>
                    <Link href={{ pathname: '/currency', query: { tab: 'send' }}} className='m-auto' >
                        Send
                    </Link>
                </li>
                <li style={{ background: tabs.charts  ? 'white' : '#ECEFF4' }}
                    className='flex flex-row justify-center align-middle text-[#02208A] hover:bg-gray-300 hover:rounded-t-lg hover:text-sky-500 cursor-pointer basis-1/4'>
                    <Link href={{ pathname: '/currency', query: { tab: 'charts' }}} className='m-auto' >
                        Charts
                    </Link>
                </li>
                <li style={{ background: tabs.alerts  ? 'white' : '#ECEFF4' }}
                    className='flex flex-row justify-center align-middle text-[#02208A] hover:bg-gray-300 rounded-t-lg hover:text-sky-500 cursor-pointer basis-1/4'>
                    <Link href={{ pathname: '/currency', query: { tab: 'alerts' }}} className='m-auto' >
                        Alerts
                    </Link>
                </li>
            </ul>
        </>
    )
}
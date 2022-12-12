import Link from "next/link";
import type {FC} from "react";
import {useRouter} from "next/router";

export const TabsRow: FC = () => {
    const router = useRouter()

    const pathname = router.pathname

    const tabs = {
        convert: pathname === '/currency/convert',
        send: pathname === '/currency/send',
        charts: pathname === '/currency/charts',
        alerts: pathname === '/currency/alerts'
    }

    return (
        <>
            <ul className='flex flex-row justify-between align-middle rounded-lg bg-gray-100 h-16 w-full'>
                <li style={{background: tabs.convert ? 'white' : '#ECEFF4'}}
                    className='flex flex-row justify-center align-middle text-[#02208A] hover:bg-gray-300 rounded-t-lg hover:text-sky-500 cursor-pointer basis-1/4'>
                    <Link href={{pathname: '/currency/convert'}}
                          className='m-auto w-fit h-fit justify-center align-middle rounded-t-lg'>
                        Convert
                    </Link>
                </li>
                <li style={{background: tabs.send ? 'white' : '#ECEFF4'}}
                    className='flex flex-row justify-center align-middle text-[#02208A] hover:bg-gray-300 hover:rounded-t-lg hover:text-sky-500 cursor-pointer basis-1/4'>
                    <Link href={{pathname: '/currency/send'}} className='m-auto'>
                        Send
                    </Link>
                </li>
                <li style={{background: tabs.charts ? 'white' : '#ECEFF4'}}
                    className='flex flex-row justify-center align-middle text-[#02208A] hover:bg-gray-300 hover:rounded-t-lg hover:text-sky-500 cursor-pointer basis-1/4'>
                    <Link href={{pathname: '/currency/charts'}} className='m-auto'>
                        Charts
                    </Link>
                </li>
                <li style={{background: tabs.alerts ? 'white' : '#ECEFF4'}}
                    className='flex flex-row justify-center align-middle text-[#02208A] hover:bg-gray-300 rounded-t-lg hover:text-sky-500 cursor-pointer basis-1/4'>
                    <Link href={{pathname: '/currency/alerts'}} className='m-auto'>
                        Alerts
                    </Link>
                </li>
            </ul>
        </>
    )
}

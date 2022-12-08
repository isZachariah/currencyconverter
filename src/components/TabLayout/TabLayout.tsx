import { withRouter } from "next/router";
import type { WithRouterProps } from "next/dist/client/with-router";
import type {FC} from "react";
import {NextComponentType} from "next";

// NextComponentType<NextPageContext, any, WithRouterProps>
type TabLayoutProps = {
    children: React.ReactNode
    router: WithRouterProps
}

const TabLayout: NextComponentType<TabLayoutProps> = ({children, router}) => {
    const {
        query: { tab }
    } = router

    const tabs = {
        convert: tab === '1',
        send:    tab === '2',
        charts:  tab === '3',
        alerts:  tab === '4'
    }
    return (
        <>

        </>
    )
}

export default withRouter(TabLayout)
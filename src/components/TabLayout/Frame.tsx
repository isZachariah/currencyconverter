
import {TabsRow} from "./TabsRow";
import type {FC, ReactNode} from "react";
import {useRouter} from "next/router";

interface FrameProps {
    children: ReactNode
}

const Frame: FC<FrameProps> = ({children}) => {
    const router = useRouter()
    const path = router.pathname

    return (
        <>
            <div className={'max-w-4/5 w-9/12 min-w-1/4 bg-white mx-auto rounded-lg flex flex-col  my-12'}>
                <TabsRow />
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}
export default Frame


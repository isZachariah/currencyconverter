import React, {FC} from "react";
import Frame from "../../components/TabLayout/Frame";

const Alerts: FC = () => {
    return (
        <main className={'flex flex-col justify-center align-middle -my-60'}>
            <h1 className={'text-white text-6xl mx-auto'}>Currency Alerts</h1>
            <Frame>
                <div className={'bg-white mx-auto rounded-lg flex flex-col shadow-lg'}>

                </div>
            </Frame>
        </main>
    )
}

export default Alerts
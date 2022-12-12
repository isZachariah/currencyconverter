import React, {FC} from "react";
import Frame from "../../components/TabLayout/Frame";
import Head from "next/head";

const Send: FC = () => {
    return (
        <>
            <Head>
                <title>XE Currency Converter</title>
                <meta name="description" content="Created by Zachariah Magee for SD230 Web Programming"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <main className={'flex flex-col justify-center align-middle -my-60'}>
                <h1 className={'text-white text-6xl mx-auto'}>Send Money</h1>

                <Frame>
                    <div className={'bg-white mx-auto rounded-lg flex flex-col shadow-lg'}>
                        <div className={''}>
                            <div className={'bg-white mx-auto rounded-lg flex flex-col shadow-lg'}>
                                <form>
                                    <label>You Send</label>
                                </form>
                            </div>
                        </div>
                    </div>
                </Frame>
            </main>
        </>
    )
}

export default Send
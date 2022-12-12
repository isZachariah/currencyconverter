import {type NextPage} from "next";
import Head from "next/head";
import Frame from "../../components/TabLayout/Frame";
import '@fontsource/montserrat';
import React from "react";




const Index: NextPage = () => {



    return (
        <>
            <Head>
                <title>XE Currency Converter</title>
                <meta name="description" content="Created by Zachariah Magee for SD230 Web Programming"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <main className={'flex flex-col justify-center align-middle -my-60'}>
                <h1 className={'text-white text-6xl mx-auto'}>Currency Converter</h1>
                <Frame>
                    <p></p>
                </Frame>
            </main>
        </>

    )
}


export default Index
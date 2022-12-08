import { type NextPage } from "next";
import Head from "next/head";
import Frame from "../components/TabLayout/Frame";
import '@fontsource/montserrat';


const Home: NextPage = () => {
  return (
      <>
          <Head>
              <title>XE Currency Clone</title>
              <meta name="description" content="Created by Zachariah Magee for SD230 Web Programming" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={'flex flex-col justify-center align-middle -my-60'}>
              <h1 className={'text-white text-6xl mx-auto'}>XE Currency Clone</h1>
          </main>
      </>

  )
}

export default Home
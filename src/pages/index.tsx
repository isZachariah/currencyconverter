import { type NextPage } from "next";
import Head from "next/head";
import '@fontsource/montserrat';

type HomeProps = {
    title: string
}

const Home: NextPage<HomeProps> = ({title}) => {
  return (
      <>
          <Head>
              <title>{title}</title>
              <meta name="description" content="Created by Zachariah Magee for SD230 Web Programming" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={'flex flex-col justify-center align-middle -my-60'}>
              <h1 className={'text-white text-6xl mx-auto'}>{title}</h1>
          </main>
      </>

  )
}

export const getStaticProps =  () => {
    return {
        props:  {
            title: 'XE Currency Clone'
        }
    }
}

export default Home
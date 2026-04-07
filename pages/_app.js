import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'
import TonePicker from '../components/TonePicker'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Alessio Giacobbe</title>
    </Head>
    <TonePicker />
    <Component {...pageProps} />
    <Analytics />
  </>
}

export default MyApp
